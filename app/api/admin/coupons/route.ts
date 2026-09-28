import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { couponCreateSchema } from "@/lib/validators/coupon";
import { logAdminAction } from "@/lib/admin-log";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const coupons = await prisma.coupon.findMany({ orderBy: { createdAt: "desc" } });
  return Response.json(coupons);
}

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const body = await request.json().catch(() => null);
  const parsed = couponCreateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const coupon = await prisma.coupon.create({
    data: {
      code: parsed.data.code,
      type: parsed.data.type,
      value: parsed.data.value,
      startsAt: new Date(parsed.data.startsAt),
      endsAt: new Date(parsed.data.endsAt),
      minAmount: parsed.data.minAmount ?? null,
      isActive: parsed.data.isActive ?? true
    }
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "CREATE",
    targetType: "COUPON",
    targetId: coupon.id
  });

  return Response.json(coupon, { status: 201 });
}
