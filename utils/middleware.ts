import { NextRequest, NextResponse } from "next/server";


const protectedRoutes = ["/transaction", "/profile"]

export function middleware(req: NextRequest) {
    const token = req.cookies.get("auth-token")?.value

    if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url))
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/"]
}