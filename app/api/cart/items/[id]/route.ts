import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { jsonError } from "@/lib/utils";
import { z } from "zod";

const updateQuantitySchema = z.object({
  quantity: z.number().int().min(1, "La quantité doit être supérieure à 0.")
});

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const body = await request.json().catch(() => null);
  const parsed = updateQuantitySchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const item = await prisma.cartItem.findUnique({ where: { id: params.id } });
  if (!item) return jsonError("NOT_FOUND", "Article introuvable.", 404);

  const cart = await prisma.cart.findUnique({ where: { id: item.cartId } });
  if (!cart || cart.userId !== (session.user as any).id) {
    return jsonError("FORBIDDEN", "Accès refusé.", 403);
  }

  const updated = await prisma.cartItem.update({
    where: { id: params.id },
    data: { quantity: parsed.data.quantity }
  });

  return Response.json(updated);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const item = await prisma.cartItem.findUnique({ where: { id: params.id } });
  if (!item) return jsonError("NOT_FOUND", "Article introuvable.", 404);

  const cart = await prisma.cart.findUnique({ where: { id: item.cartId } });
  if (!cart || cart.userId !== (session.user as any).id) {
    return jsonError("FORBIDDEN", "Accès refusé.", 403);
  }

  await prisma.cartItem.delete({ where: { id: params.id } });
  return Response.json({ ok: true });
}
