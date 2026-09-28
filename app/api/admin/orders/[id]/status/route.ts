import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { orderUpdateSchema } from "@/lib/validators/order";
import { logAdminAction } from "@/lib/admin-log";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const order = await prisma.order.findUnique({ where: { id: params.id } });
  if (!order) return jsonError("NOT_FOUND", "Commande introuvable.", 404);

  const body = await request.json().catch(() => null);
  const parsed = orderUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const updated = await prisma.order.update({
    where: { id: params.id },
    data: { status: parsed.data.status ?? order.status }
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "UPDATE",
    targetType: "ORDER",
    targetId: updated.id
  });

  return Response.json(updated);
}
