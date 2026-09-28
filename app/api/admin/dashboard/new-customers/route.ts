import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const url = new URL(request.url);
  const period = url.searchParams.get("period") ?? "month";
  const days = period === "month" ? 30 : period === "week" ? 7 : 1;
  const from = new Date();
  from.setDate(from.getDate() - days);

  const count = await prisma.user.count({
    where: { createdAt: { gte: from }, role: "CUSTOMER" }
  });

  return Response.json({ count });
}
