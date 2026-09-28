import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const statuses = ["PENDING", "PAID", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"] as const;

  const results = await Promise.all(
    statuses.map(async (status) => ({
      status,
      count: await prisma.order.count({ where: { status } })
    }))
  );

  return Response.json(results);
}
