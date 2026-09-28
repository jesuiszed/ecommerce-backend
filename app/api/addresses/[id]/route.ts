import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { jsonError } from "@/lib/utils";
import { addressUpdateSchema } from "@/lib/validators/address";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const address = await prisma.address.findUnique({ where: { id: params.id } });
  if (!address || address.userId !== (session.user as any).id) {
    return jsonError("FORBIDDEN", "Accès refusé.", 403);
  }

  const body = await request.json().catch(() => null);
  const parsed = addressUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const updated = await prisma.address.update({
    where: { id: params.id },
    data: parsed.data
  });

  return Response.json(updated);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const address = await prisma.address.findUnique({ where: { id: params.id } });
  if (!address || address.userId !== (session.user as any).id) {
    return jsonError("FORBIDDEN", "Accès refusé.", 403);
  }

  await prisma.address.delete({ where: { id: params.id } });
  return Response.json({ ok: true });
}
