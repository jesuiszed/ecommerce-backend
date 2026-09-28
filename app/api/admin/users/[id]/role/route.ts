import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { logAdminAction } from "@/lib/admin-log";
import { z } from "zod";

const roleSchema = z.object({
  role: z.enum(["CUSTOMER", "ADMIN"])
});

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const body = await request.json().catch(() => null);
  const parsed = roleSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const user = await prisma.user.findUnique({ where: { id: params.id } });
  if (!user) return jsonError("NOT_FOUND", "Utilisateur introuvable.", 404);

  const updated = await prisma.user.update({
    where: { id: params.id },
    data: { role: parsed.data.role }
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "UPDATE",
    targetType: "USER",
    targetId: updated.id
  });

  return Response.json(updated);
}
