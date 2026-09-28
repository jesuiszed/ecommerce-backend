import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { jsonError } from "@/lib/utils";
import { orderCreateSchema } from "@/lib/validators/order";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const orders = await prisma.order.findMany({
    where: { userId: (session.user as any).id },
    include: {
      items: { include: { variant: { include: { product: true } } } },
      payment: true,
      user: true
    },
    orderBy: { createdAt: "desc" }
  });

  return Response.json(orders);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const body = await request.json().catch(() => null);
  const parsed = orderCreateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const address = await prisma.address.findFirst({
    where: { id: parsed.data.shippingAddressId, userId: (session.user as any).id }
  });
  if (!address) return jsonError("NOT_FOUND", "Adresse introuvable.", 404);

  const items = [] as { variantId: string; quantity: number; unitPrice: number }[];
  let total = 0;

  for (const entry of parsed.data.items) {
    const variant = await prisma.variant.findUnique({ where: { id: entry.variantId }, include: { product: true } });
    if (!variant) return jsonError("NOT_FOUND", "Une variante de produit est introuvable.", 404);
    if (variant.stock < entry.quantity) return jsonError("VALIDATION_ERROR", "Stock insuffisant pour un article.", 422);

    const unitPrice = Number(variant.price ?? variant.product.basePrice);
    total += unitPrice * entry.quantity;
    items.push({ variantId: entry.variantId, quantity: entry.quantity, unitPrice });
  }

  const order = await prisma.order.create({
    data: {
      number: `CMD-${Date.now()}`,
      userId: (session.user as any).id,
      shippingAddressId: address.id,
      totalAmount: total,
      status: "PENDING",
      items: {
        create: items.map((item) => ({
          variantId: item.variantId,
          quantity: item.quantity,
          unitPrice: item.unitPrice
        }))
      }
    },
    include: { items: true }
  });

  for (const item of items) {
    await prisma.variant.update({
      where: { id: item.variantId },
      data: { stock: { decrement: item.quantity } }
    });
  }

  return Response.json(order, { status: 201 });
}
