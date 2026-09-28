import { prisma } from "@/lib/prisma";
import { authLoginSchema } from "@/lib/validators/auth";
import { jsonError } from "@/lib/utils";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = authLoginSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (!user || !user.isActive) {
    return jsonError("UNAUTHORIZED", "Identifiants invalides.", 401);
  }

  const valid = await bcrypt.compare(parsed.data.password, user.passwordHash);
  if (!valid) {
    return jsonError("UNAUTHORIZED", "Identifiants invalides.", 401);
  }

  return Response.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    isActive: user.isActive
  });
}
