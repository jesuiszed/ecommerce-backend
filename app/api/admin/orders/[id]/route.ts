import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const order = await prisma.order.findUnique({
    where: { id: params.id },
    include: {
      user: true,
      items: { include: { variant: { include: { product: true } } } },
      payment: true
    }
  });

  if (!order) return jsonError("NOT_FOUND", "Commande introuvable.", 404);
  return Response.json(order);
}
