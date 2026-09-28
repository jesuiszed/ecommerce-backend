import { z } from "zod";

export const reviewCreateSchema = z.object({
  productId: z.string().min(1, "Le produit est requis."),
  rating: z.number().int().min(1, "La note minimum est 1.").max(5, "La note maximum est 5."),
  comment: z.string().max(1000, "Le commentaire est trop long.").optional().nullable()
});

export const reviewUpdateSchema = reviewCreateSchema.partial();
