import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const logs = await prisma.adminLog.findMany({
    orderBy: { createdAt: "desc" },
    take: 100
  });

  return Response.json(logs);
}
