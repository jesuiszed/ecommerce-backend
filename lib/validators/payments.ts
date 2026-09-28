import { z } from "zod";

export const paymentInitiateSchema = z.object({
  orderId: z.string().min(1, "La commande est requise."),
  method: z.enum(["AIRTEL_MONEY", "MOOV_MONEY", "CASH_ON_DELIVERY"]),
  amount: z.number().min(1, "Le montant est invalide.")
});

export const paymentWebhookSchema = z.object({
  orderId: z.string().min(1, "La commande est requise."),
  transactionRef: z.string().min(1, "La référence est requise."),
  status: z.enum(["SUCCESS", "FAILED", "PENDING"]),
  signature: z.string().optional()
});
