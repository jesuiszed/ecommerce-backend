import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { jsonError } from "@/lib/utils";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const order = await prisma.order.findUnique({
    where: { id: params.id },
    include: {
      items: { include: { variant: { include: { product: true } } } },
      payment: true,
      user: true
    }
  });

  if (!order) return jsonError("NOT_FOUND", "Commande introuvable.", 404);
  if (order.userId !== (session.user as any).id) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  return Response.json(order);
}
