import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (!request.cookies.has("userID")) {
    response.cookies.set("userID", crypto.randomUUID());
  }
  return response;
}

export const config = {
  matcher: "/",
};
