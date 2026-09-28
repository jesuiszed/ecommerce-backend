import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    include: { category: true, variants: true, reviews: { include: { user: true } } }
  });

  if (!product) {
    return jsonError("NOT_FOUND", "Produit introuvable.", 404);
  }

  return Response.json(product);
}
