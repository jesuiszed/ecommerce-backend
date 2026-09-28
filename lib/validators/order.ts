import { z } from "zod";

export const orderItemSchema = z.object({
  variantId: z.string().min(1, "La variante est requise."),
  quantity: z.number().int().min(1, "La quantité doit être supérieure à 0.")
});

export const orderCreateSchema = z.object({
  shippingAddressId: z.string().min(1, "L'adresse de livraison est requise."),
  items: z.array(orderItemSchema).min(1, "Au moins un article est requis.")
});

export const orderUpdateSchema = z.object({
  status: z.enum(["PENDING", "PAID", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"]).optional()
});
