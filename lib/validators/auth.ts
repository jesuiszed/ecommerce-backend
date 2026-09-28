import { z } from "zod";

export const authRegisterSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("L'email est invalide."),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères."),
  phone: z.string().min(8, "Le téléphone est requis.").optional()
});

export const authLoginSchema = z.object({
  email: z.string().email("L'email est invalide."),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères.")
});

export const authForgotPasswordSchema = z.object({
  email: z.string().email("L'email est invalide.")
});

export const authResetPasswordSchema = z.object({
  token: z.string().min(1, "Le token est requis."),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères.")
});
