import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { jsonError } from "@/lib/utils";
import { addressCreateSchema } from "@/lib/validators/address";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const addresses = await prisma.address.findMany({
    where: { userId: (session.user as any).id },
    orderBy: { label: "asc" }
  });

  return Response.json(addresses);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return jsonError("UNAUTHORIZED", "Vous devez être connecté.", 401);

  const body = await request.json().catch(() => null);
  const parsed = addressCreateSchema.safeParse(body);

  if (!parsed.success) {
    return jsonError("VALIDATION_ERROR", parsed.error.errors[0].message, 422);
  }

  const address = await prisma.address.create({
    data: {
      userId: (session.user as any).id,
      label: parsed.data.label,
      city: parsed.data.city,
      district: parsed.data.district,
      country: parsed.data.country,
      phone: parsed.data.phone,
      isDefault: parsed.data.isDefault ?? false
    }
  });

  return Response.json(address, { status: 201 });
}
