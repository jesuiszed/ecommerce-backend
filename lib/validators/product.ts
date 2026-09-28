import { z } from "zod";

export const productCreateSchema = z.object({
  name: z.string().min(2, "Le nom du produit est requis."),
  slug: z.string().min(2, "Le slug est requis."),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères."),
  categoryId: z.string().min(1, "La catégorie est requise."),
  basePrice: z.number().positive("Le prix doit être supérieur à 0."),
  images: z.array(z.string()).default([]),
  status: z.enum(["ACTIVE", "INACTIVE"]).optional()
});

export const productUpdateSchema = productCreateSchema.partial();

export const variantCreateSchema = z.object({
  size: z.string().min(1, "La taille est requise."),
  color: z.string().min(1, "La couleur est requise."),
  sku: z.string().min(1, "Le SKU est requis."),
  stock: z.number().int().min(0, "Le stock ne peut pas être négatif."),
  price: z.number().min(0, "Le prix ne peut pas être négatif.").optional().nullable()
});

export const variantUpdateSchema = variantCreateSchema.partial();
