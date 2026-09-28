import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { jsonError } from "@/lib/utils";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);
  }

  const cart = await prisma.cart.findUnique({
    where: { userId: (session.user as any).id },
    include: {
      items: {
        include: {
          variant: {
            include: {
              product: {
                include: { category: true }
              }
            }
          }
        }
      }
    }
  });

  return Response.json(cart ?? { items: [] });
}
