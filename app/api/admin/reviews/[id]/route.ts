import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { logAdminAction } from "@/lib/admin-log";

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const review = await prisma.review.findUnique({ where: { id: params.id } });
  if (!review) return jsonError("NOT_FOUND", "Avis introuvable.", 404);

  await prisma.review.delete({ where: { id: params.id } });
  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "DELETE",
    targetType: "REVIEW",
    targetId: params.id
  });

  return Response.json({ ok: true });
}
