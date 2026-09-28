import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { productUpdateSchema } from "@/lib/validators/product";
import { logAdminAction } from "@/lib/admin-log";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { category: true, variants: true }
  });

  if (!product) return jsonError("NOT_FOUND", "Produit introuvable.", 404);
  return Response.json(product);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const body = await request.json().catch(() => null);
  const parsed = productUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const existing = await prisma.product.findUnique({ where: { id: params.id } });
  if (!existing) return jsonError("NOT_FOUND", "Produit introuvable.", 404);

  const updated = await prisma.product.update({
    where: { id: params.id },
    data: parsed.data,
    include: { category: true, variants: true }
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "UPDATE",
    targetType: "PRODUCT",
    targetId: updated.id
  });

  return Response.json(updated);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const existing = await prisma.product.findUnique({ where: { id: params.id } });
  if (!existing) return jsonError("NOT_FOUND", "Produit introuvable.", 404);

  const orderItems = await prisma.orderItem.findFirst({ where: { variant: { productId: params.id } } });
  if (orderItems) {
    await prisma.product.update({
      where: { id: params.id },
      data: { status: "INACTIVE" }
    });
    return Response.json({ ok: true, message: "Produit désactivé car il est lié à des commandes existantes." });
  }

  await prisma.product.delete({ where: { id: params.id } });
  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "DELETE",
    targetType: "PRODUCT",
    targetId: params.id
  });

  return Response.json({ ok: true });
}
