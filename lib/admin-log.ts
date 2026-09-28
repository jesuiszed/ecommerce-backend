import { prisma } from "@/lib/prisma";

/**
 * Fonction unique à appeler depuis TOUTE route admin qui crée/modifie/supprime
 * une ressource sensible. Ne jamais remplacer par un simple console.log :
 * l'historique doit être interrogeable via GET /api/admin/logs.
 */
export async function logAdminAction(params: {
  adminEmail: string;
  action: "CREATE" | "UPDATE" | "DELETE";
  targetType: "PRODUCT" | "VARIANT" | "CATEGORY" | "ORDER" | "COUPON" | "USER" | "REVIEW";
  targetId: string;
}) {
  await prisma.adminLog.create({ data: params });
}
