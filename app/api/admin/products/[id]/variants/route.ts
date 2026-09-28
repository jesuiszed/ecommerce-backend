import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { variantCreateSchema } from "@/lib/validators/product";
import { logAdminAction } from "@/lib/admin-log";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const product = await prisma.product.findUnique({ where: { id: params.id } });
  if (!product) return jsonError("NOT_FOUND", "Produit introuvable.", 404);

  const body = await request.json().catch(() => null);
  const parsed = variantCreateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const variant = await prisma.variant.create({
    data: {
      productId: params.id,
      size: parsed.data.size,
      color: parsed.data.color,
      sku: parsed.data.sku,
      stock: parsed.data.stock,
      price: parsed.data.price ?? null
    }
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "CREATE",
    targetType: "VARIANT",
    targetId: variant.id
  });

  return Response.json(variant, { status: 201 });
}
