import { prisma } from "@/lib/prisma";
import { authRegisterSchema } from "@/lib/validators/auth";
import { jsonError } from "@/lib/utils";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = authRegisterSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const { name, email, password, phone } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return jsonError("CONFLICT", "Un compte avec cet email existe déjà.", 409);
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, phone, passwordHash },
    select: { id: true, name: true, email: true, role: true, phone: true, isActive: true }
  });

  return Response.json(user, { status: 201 });
}
