import { z } from "zod";

const categoryImageSchema = z
  .union([z.string().trim().url("L'URL de l'image est invalide."), z.literal("")])
  .optional()
  .nullable()
  .transform((value) => (value === "" ? null : value));

export const categoryCreateSchema = z.object({
  name: z.string().min(2, "Le nom de la catégorie est requis."),
  slug: z.string().min(2, "Le slug est requis."),
  image: categoryImageSchema,
  parentId: z.string().optional().nullable()
});

export const categoryUpdateSchema = categoryCreateSchema.partial();
