import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const [usersCount, ordersCount, productsCount, revenue] = await Promise.all([
    prisma.user.count(),
    prisma.order.count(),
    prisma.product.count(),
    prisma.order.aggregate({
      _sum: { totalAmount: true }
    })
  ]);

  return Response.json({
    usersCount,
    ordersCount,
    productsCount,
    revenue: Number(revenue._sum.totalAmount ?? 0)
  });
}
