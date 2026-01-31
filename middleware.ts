import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isLoginPage = request.nextUrl.pathname === "/admin/login"

  if (isAdminRoute) {
    // Check for NextAuth session cookie (simple check, full auth happens in pages)
    const sessionToken = request.cookies.get("authjs.session-token") || 
                         request.cookies.get("__Secure-authjs.session-token")
    
    const isAuthenticated = !!sessionToken

    if (!isLoginPage && !isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    if (isLoginPage && isAuthenticated) {
      return NextResponse.redirect(new URL("/admin", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
