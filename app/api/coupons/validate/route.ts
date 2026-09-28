import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { couponValidateSchema } from "@/lib/validators/coupon";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = couponValidateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const coupon = await prisma.coupon.findUnique({
    where: { code: parsed.data.code }
  });

  if (!coupon || !coupon.isActive) {
    return jsonError("NOT_FOUND", "Code promo invalide.", 404);
  }

  if (coupon.startsAt > new Date() || coupon.endsAt < new Date()) {
    return jsonError("VALIDATION_ERROR", "Ce code promo n'est plus valide.", 422);
  }

  if (coupon.minAmount && parsed.data.subtotal < Number(coupon.minAmount)) {
    return jsonError("VALIDATION_ERROR", "Le montant minimum n'est pas atteint.", 422);
  }

  let discount = 0;
  if (coupon.type === "PERCENTAGE") {
    discount = (parsed.data.subtotal * Number(coupon.value)) / 100;
  } else {
    discount = Number(coupon.value);
  }

  return Response.json({
    valid: true,
    code: coupon.code,
    type: coupon.type,
    value: Number(coupon.value),
    discount,
    finalTotal: Math.max(parsed.data.subtotal - discount, 0)
  });
}
