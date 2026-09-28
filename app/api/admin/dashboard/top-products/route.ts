import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const url = new URL(request.url);
  const limit = Number(url.searchParams.get("limit") ?? "5");

  const products = await prisma.product.findMany({
    include: {
      variants: { include: { orderItems: true } }
    }
  });

  const ranking: Array<{ productId: string; name: string; sold: number; generated: number }> = products
    .map((product: any) => {
      const sold = product.variants.reduce(
        (sum: number, variant: any) => sum + variant.orderItems.reduce((variantSum: number, item: any) => variantSum + item.quantity, 0),
        0
      );
      const generated = product.variants.reduce(
        (sum: number, variant: any) => sum + variant.orderItems.reduce((variantSum: number, item: any) => variantSum + Number(item.unitPrice) * item.quantity, 0),
        0
      );
      return { productId: product.id, name: product.name, sold, generated };
    })
    .sort((a: any, b: any) => b.sold - a.sold)
    .slice(0, limit);

  return Response.json(ranking);
}
