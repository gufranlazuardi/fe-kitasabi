import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;
  const token = request.cookies.get("token")?.value;

  const publicRoutes = ["/login", "/signup", "/about"];

  // protected routes
  if (
    ["/transactions", "/profile"].includes(
      request.nextUrl.pathname
    ) &&
    !token &&
    !currentUser
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect authenticated users away from the login page
  if (currentUser && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect unauthenticated users to the login page for protected routes
  if (
    !currentUser &&
    !publicRoutes.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Match all routes except API, Next.js assets, and static files
export const config = {
  matcher: [
    "/((?!api|_next|.*\\.(?:ico|png|jpg|jpeg|svg|webp|gif|css|js|map|woff|woff2|ttf|otf|eot|txt)).*)",
  ],
};
