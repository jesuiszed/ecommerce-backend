import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { logAdminAction } from "@/lib/admin-log";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const user = await prisma.user.findUnique({
    where: { id: params.id },
    include: {
      orders: true,
      addresses: true,
      reviews: true
    }
  });

  if (!user) return jsonError("NOT_FOUND", "Utilisateur introuvable.", 404);
  return Response.json(user);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const user = await prisma.user.findUnique({ where: { id: params.id } });
  if (!user) return jsonError("NOT_FOUND", "Utilisateur introuvable.", 404);

  await prisma.user.delete({ where: { id: params.id } });
  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "DELETE",
    targetType: "USER",
    targetId: params.id
  });

  return Response.json({ ok: true });
}
