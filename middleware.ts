import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const configuredOrigins = process.env.FRONTEND_URL?.split(",").map((origin) => origin.trim()).filter(Boolean);
const allowedOrigins = configuredOrigins?.length
  ? configuredOrigins
  : ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"];

export function middleware(request: NextRequest) {
  const response = request.method === "OPTIONS"
    ? new NextResponse(null, { status: 204 })
    : NextResponse.next();

  const requestOrigin = request.headers.get("origin");
  if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    response.headers.set("Access-Control-Allow-Origin", requestOrigin);
  }
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.headers.set("Vary", "Origin");

  return response;
}

export const config = {
  matcher: "/api/:path*",
};