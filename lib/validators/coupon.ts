import { z } from "zod";

export const couponCreateSchema = z.object({
  code: z.string().min(2, "Le code est requis."),
  type: z.enum(["PERCENTAGE", "FIXED"]),
  value: z.number().min(0, "La valeur doit être positive."),
  startsAt: z.string().datetime({ offset: true }).or(z.date()),
  endsAt: z.string().datetime({ offset: true }).or(z.date()),
  minAmount: z.number().min(0).optional().nullable(),
  isActive: z.boolean().optional()
});

export const couponUpdateSchema = couponCreateSchema.partial();

export const couponValidateSchema = z.object({
  code: z.string().min(1, "Le code promo est requis."),
  subtotal: z.number().min(0, "Le sous-total est invalide.")
});
