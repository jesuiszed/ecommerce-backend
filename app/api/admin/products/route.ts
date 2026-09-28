import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { productCreateSchema } from "@/lib/validators/product";
import { logAdminAction } from "@/lib/admin-log";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const products = await prisma.product.findMany({
    include: { category: true, variants: true },
    orderBy: { createdAt: "desc" }
  });

  return Response.json(products);
}

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const body = await request.json().catch(() => null);
  const parsed = productCreateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const product = await prisma.product.create({
    data: {
      name: parsed.data.name,
      slug: parsed.data.slug,
      description: parsed.data.description,
      categoryId: parsed.data.categoryId,
      basePrice: parsed.data.basePrice,
      images: parsed.data.images,
      status: parsed.data.status || "ACTIVE"
    },
    include: { category: true, variants: true }
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "CREATE",
    targetType: "PRODUCT",
    targetId: product.id
  });

  return Response.json(product, { status: 201 });
}
