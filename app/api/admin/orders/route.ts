import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const url = new URL(request.url);
  const exportCsv = url.searchParams.get("export") === "csv";

  const orders = await prisma.order.findMany({
    include: {
      user: true,
      items: { include: { variant: { include: { product: true } } } },
      payment: true
    },
    orderBy: { createdAt: "desc" }
  });

  if (exportCsv) {
    const header = ["id", "number", "client", "statut", "total", "date"];
    const rows: Array<Array<string | number>> = orders.map((order: any) => [
      order.id,
      order.number,
      order.user.email,
      order.status,
      Number(order.totalAmount),
      order.createdAt.toISOString()
    ]);

    const csv = [header, ...rows]
      .map((row: Array<string | number>) => row.map((value: string | number) => `"${String(value).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    return new Response(csv, { headers: { "Content-Type": "text/csv; charset=utf-8" } });
  }

  return Response.json(orders);
}
