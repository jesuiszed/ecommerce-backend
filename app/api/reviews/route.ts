import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { jsonError } from "@/lib/utils";
import { reviewCreateSchema } from "@/lib/validators/review";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const body = await request.json().catch(() => null);
  const parsed = reviewCreateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const product = await prisma.product.findUnique({ where: { id: parsed.data.productId } });
  if (!product) return jsonError("NOT_FOUND", "Produit introuvable.", 404);

  const review = await prisma.review.create({
    data: {
      productId: parsed.data.productId,
      userId: (session.user as any).id,
      rating: parsed.data.rating,
      comment: parsed.data.comment ?? null
    }
  });

  return Response.json(review, { status: 201 });
}
