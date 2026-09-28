import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const url = new URL(request.url);
  const threshold = Number(url.searchParams.get("threshold") ?? "3");

  const lowStock = await prisma.variant.findMany({
    where: { stock: { lte: threshold } },
    include: { product: true }
  });

  return Response.json(lowStock);
}
