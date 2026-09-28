import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { logAdminAction } from "@/lib/admin-log";

export async function PUT(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const review = await prisma.review.findUnique({ where: { id: params.id } });
  if (!review) return jsonError("NOT_FOUND", "Avis introuvable.", 404);

  const updated = await prisma.review.update({
    where: { id: params.id },
    data: { isApproved: true }
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "UPDATE",
    targetType: "REVIEW",
    targetId: updated.id
  });

  return Response.json(updated);
}
