import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { jsonError } from "@/lib/utils";
import { z } from "zod";

const cartItemSchema = z.object({
  variantId: z.string().min(1, "La variante est requise."),
  quantity: z.number().int().min(1, "La quantité doit être supérieure à 0.")
});

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const body = await request.json().catch(() => null);
  const parsed = cartItemSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const cart = await prisma.cart.upsert({
    where: { userId: (session.user as any).id },
    update: {},
    create: { userId: (session.user as any).id }
  });

  const variant = await prisma.variant.findUnique({ where: { id: parsed.data.variantId } });
  if (!variant) return jsonError("NOT_FOUND", "Variante introuvable.", 404);

  const existing = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, variantId: parsed.data.variantId }
  });

  const item = existing
    ? await prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + parsed.data.quantity }
      })
    : await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          variantId: parsed.data.variantId,
          quantity: parsed.data.quantity
        }
      });

  return Response.json(item, { status: 201 });
}
