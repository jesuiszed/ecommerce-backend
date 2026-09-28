import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { categoryUpdateSchema } from "@/lib/validators/category";
import { logAdminAction } from "@/lib/admin-log";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const category = await prisma.category.findUnique({
    where: { id: params.id },
    include: { parent: true, children: true }
  });

  if (!category) return jsonError("NOT_FOUND", "Catégorie introuvable.", 404);
  return Response.json(category);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const category = await prisma.category.findUnique({ where: { id: params.id } });
  if (!category) return jsonError("NOT_FOUND", "Catégorie introuvable.", 404);

  const body = await request.json().catch(() => null);
  const parsed = categoryUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const updated = await prisma.category.update({
    where: { id: params.id },
    data: parsed.data
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "UPDATE",
    targetType: "CATEGORY",
    targetId: updated.id
  });

  return Response.json(updated);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const category = await prisma.category.findUnique({
    where: { id: params.id },
    include: { products: true }
  });

  if (!category) return jsonError("NOT_FOUND", "Catégorie introuvable.", 404);
  if (category.products.length > 0) {
    return jsonError("CONFLICT", "Impossible de supprimer une catégorie contenant des produits.", 409);
  }

  await prisma.category.delete({ where: { id: params.id } });
  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "DELETE",
    targetType: "CATEGORY",
    targetId: params.id
  });

  return Response.json({ ok: true });
}
