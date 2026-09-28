import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const url = new URL(request.url);
  const isApproved = url.searchParams.get("isApproved");

  const reviews = await prisma.review.findMany({
    where: isApproved !== null ? { isApproved: isApproved === "true" } : undefined,
    include: { product: true, user: true },
    orderBy: { createdAt: "desc" }
  });

  return Response.json(reviews);
}
