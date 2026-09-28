import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { variantUpdateSchema } from "@/lib/validators/product";
import { logAdminAction } from "@/lib/admin-log";

export async function PUT(request: Request, { params }: { params: { id: string; variantId: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const variant = await prisma.variant.findUnique({ where: { id: params.variantId } });
  if (!variant || variant.productId !== params.id) {
    return jsonError("NOT_FOUND", "Variante introuvable.", 404);
  }

  const body = await request.json().catch(() => null);
  const parsed = variantUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const updated = await prisma.variant.update({
    where: { id: params.variantId },
    data: parsed.data
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "UPDATE",
    targetType: "VARIANT",
    targetId: updated.id
  });

  return Response.json(updated);
}

export async function DELETE(_request: Request, { params }: { params: { id: string; variantId: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const variant = await prisma.variant.findUnique({ where: { id: params.variantId } });
  if (!variant || variant.productId !== params.id) {
    return jsonError("NOT_FOUND", "Variante introuvable.", 404);
  }

  await prisma.variant.delete({ where: { id: params.variantId } });
  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "DELETE",
    targetType: "VARIANT",
    targetId: params.variantId
  });

  return Response.json({ ok: true });
}
