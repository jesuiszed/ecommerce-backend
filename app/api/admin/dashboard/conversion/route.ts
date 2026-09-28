import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const [customers, paidOrders] = await Promise.all([
    prisma.user.count({ where: { role: "CUSTOMER" } }),
    prisma.order.count({ where: { status: "PAID" } })
  ]);

  const conversion = customers > 0 ? (paidOrders / customers) * 100 : 0;

  return Response.json({ conversion: Number(conversion.toFixed(2)) });
}
