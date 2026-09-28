import { z } from "zod";

export const addressCreateSchema = z.object({
  label: z.string().min(2, "Le libellé est requis."),
  city: z.string().min(2, "La ville est requise."),
  district: z.string().min(2, "Le quartier est requis."),
  country: z.string().min(2, "Le pays est requis.").default("Gabon"),
  phone: z.string().min(8, "Le téléphone est requis."),
  isDefault: z.boolean().optional()
});

export const addressUpdateSchema = addressCreateSchema.partial();
