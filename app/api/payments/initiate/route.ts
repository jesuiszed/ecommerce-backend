import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { jsonError } from "@/lib/utils";
import { z } from "zod";

const paymentInitiateSchema = z.object({
  orderId: z.string().min(1, "La commande est requise."),
  method: z.enum(["AIRTEL_MONEY", "MOOV_MONEY", "CASH_ON_DELIVERY"]),
  amount: z.number().min(1, "Le montant est invalide.")
});

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const body = await request.json().catch(() => null);
  const parsed = paymentInitiateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const order = await prisma.order.findUnique({
    where: { id: parsed.data.orderId },
    include: { payment: true }
  });

  if (!order) return jsonError("NOT_FOUND", "Commande introuvable.", 404);
  if (order.userId !== (session.user as any).id) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const transactionRef = `TX-${Date.now()}`;

  const payment = await prisma.payment.upsert({
    where: { orderId: order.id },
    update: {
      method: parsed.data.method,
      amount: parsed.data.amount,
      status: parsed.data.method === "CASH_ON_DELIVERY" ? "PENDING" : "PENDING",
      transactionRef
    },
    create: {
      orderId: order.id,
      method: parsed.data.method,
      amount: parsed.data.amount,
      status: "PENDING",
      transactionRef
    }
  });

  return Response.json({
    paymentId: payment.id,
    orderId: order.id,
    transactionRef,
    status: payment.status,
    method: payment.method
  }, { status: 201 });
}
