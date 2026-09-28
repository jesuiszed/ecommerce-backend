import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const url = new URL(request.url);
  const period = url.searchParams.get("period") ?? "month";
  const days = period === "day" ? 1 : period === "week" ? 7 : 30;

  const from = new Date();
  from.setDate(from.getDate() - days);

  const orders = await prisma.order.findMany({
    where: { createdAt: { gte: from } },
    select: { createdAt: true, totalAmount: true }
  });

  const points = orders.map((order: any) => ({
    date: order.createdAt.toISOString().slice(0, 10),
    revenue: Number(order.totalAmount)
  }));

  return Response.json(points);
}
