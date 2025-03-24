// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");

  if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (request.nextUrl.pathname === "/admin") {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/blog", request.url));
  }

  return NextResponse.next();
}
