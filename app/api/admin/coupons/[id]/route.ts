import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { couponUpdateSchema } from "@/lib/validators/coupon";
import { logAdminAction } from "@/lib/admin-log";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const coupon = await prisma.coupon.findUnique({ where: { id: params.id } });
  if (!coupon) return jsonError("NOT_FOUND", "Coupon introuvable.", 404);

  return Response.json(coupon);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const coupon = await prisma.coupon.findUnique({ where: { id: params.id } });
  if (!coupon) return jsonError("NOT_FOUND", "Coupon introuvable.", 404);

  const body = await request.json().catch(() => null);
  const parsed = couponUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const updated = await prisma.coupon.update({
    where: { id: params.id },
    data: {
      ...parsed.data,
      startsAt: parsed.data.startsAt ? new Date(parsed.data.startsAt) : undefined,
      endsAt: parsed.data.endsAt ? new Date(parsed.data.endsAt) : undefined
    }
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "UPDATE",
    targetType: "COUPON",
    targetId: updated.id
  });

  return Response.json(updated);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const coupon = await prisma.coupon.findUnique({ where: { id: params.id } });
  if (!coupon) return jsonError("NOT_FOUND", "Coupon introuvable.", 404);

  await prisma.coupon.delete({ where: { id: params.id } });
  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "DELETE",
    targetType: "COUPON",
    targetId: params.id
  });

  return Response.json({ ok: true });
}
