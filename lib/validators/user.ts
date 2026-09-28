import { z } from "zod";

export const userCreateSchema = z.object({
  name: z.string().min(2, "Le nom est requis."),
  email: z.string().email("L'email est invalide."),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères."),
  role: z.enum(["CUSTOMER", "ADMIN"]).optional(),
  isActive: z.boolean().optional()
});

export const userUpdateSchema = userCreateSchema.partial();
