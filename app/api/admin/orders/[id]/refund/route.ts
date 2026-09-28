import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { logAdminAction } from "@/lib/admin-log";

export async function POST(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const order = await prisma.order.findUnique({
    where: { id: params.id },
    include: { payment: true }
  });

  if (!order) return jsonError("NOT_FOUND", "Commande introuvable.", 404);
  if (!order.payment) return jsonError("NOT_FOUND", "Aucun paiement associé.", 404);

  const updated = await prisma.payment.update({
    where: { id: order.payment.id },
    data: { status: "FAILED" }
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "UPDATE",
    targetType: "ORDER",
    targetId: order.id
  });

  return Response.json(updated);
}
