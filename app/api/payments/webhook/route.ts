import { prisma } from "@/lib/prisma";
import { z } from "zod";

const webhookSchema = z.object({
  orderId: z.string().min(1, "La commande est requise."),
  transactionRef: z.string().min(1, "La référence est requise."),
  status: z.enum(["SUCCESS", "FAILED", "PENDING"]),
  signature: z.string().optional()
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = webhookSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: { code: "VALIDATION_ERROR", message: parsed.error.errors[0].message } }, { status: 422 });
  }

  const payment = await prisma.payment.findFirst({
    where: {
      orderId: parsed.data.orderId,
      transactionRef: parsed.data.transactionRef
    }
  });

  if (!payment) {
    return Response.json({ error: { code: "NOT_FOUND", message: "Paiement introuvable." } }, { status: 404 });
  }

  await prisma.payment.update({
    where: { id: payment.id },
    data: { status: parsed.data.status === "SUCCESS" ? "SUCCESS" : "FAILED" }
  });

  if (parsed.data.status === "SUCCESS") {
    await prisma.order.update({
      where: { id: parsed.data.orderId },
      data: { status: "PAID" }
    });
  }

  return Response.json({ ok: true });
}
