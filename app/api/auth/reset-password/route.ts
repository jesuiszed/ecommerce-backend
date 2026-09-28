import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { authResetPasswordSchema } from "@/lib/validators/auth";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = authResetPasswordSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { token: parsed.data.token }
  });

  if (!resetToken || resetToken.usedAt || resetToken.expiresAt < new Date()) {
    return jsonError("VALIDATION_ERROR", "Le token est invalide ou expiré.", 422);
  }

  const passwordHash = await bcrypt.hash(parsed.data.password, 10);

  await prisma.$transaction([
    prisma.user.update({
      where: { id: resetToken.userId },
      data: { passwordHash }
    }),
    prisma.passwordResetToken.update({
      where: { id: resetToken.id },
      data: { usedAt: new Date() }
    })
  ]);

  return Response.json({ ok: true });
}
