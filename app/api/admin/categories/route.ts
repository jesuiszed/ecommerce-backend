import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/utils";
import { requireAdminSession } from "@/lib/auth";
import { categoryCreateSchema } from "@/lib/validators/category";
import { logAdminAction } from "@/lib/admin-log";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  return Response.json(categories);
}

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return jsonError("FORBIDDEN", "Accès refusé.", 403);

  const body = await request.json().catch(() => null);
  const parsed = categoryCreateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const category = await prisma.category.create({
    data: {
      name: parsed.data.name,
      slug: parsed.data.slug,
      image: parsed.data.image ?? null,
      parentId: parsed.data.parentId ?? null
    }
  });

  await logAdminAction({
    adminEmail: (session.user as any).email ?? "unknown",
    action: "CREATE",
    targetType: "CATEGORY",
    targetId: category.id
  });

  return Response.json(category, { status: 201 });
}
