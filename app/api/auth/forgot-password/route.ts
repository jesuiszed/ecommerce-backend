import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { authForgotPasswordSchema } from "@/lib/validators/auth";
import crypto from "node:crypto";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = authForgotPasswordSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (!user) {
    return Response.json({ ok: true });
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 30);

  await prisma.passwordResetToken.create({
    data: { userId: user.id, token, expiresAt }
  });

  return Response.json({ ok: true, token });
}
