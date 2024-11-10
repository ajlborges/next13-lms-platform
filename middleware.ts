// lib/middleware.ts
import { NextResponse, NextRequest } from 'next/server';
import { getSession } from './lib/auth';  // Updated getSession to support NextRequest

export async function middleware(req: NextRequest) {
  const publicRoutes = [
    "/", "/api/webhook", "/search", "/sign-up", 
    "/reset-password", "/teacher", "/sign-in"
  ];

  const url = req.nextUrl.pathname;

  // Skip authentication check for public routes
  if (publicRoutes.includes(url)) {
    return NextResponse.next();
  }

  // Retrieve the session or token from cookies
  const session = getSession(req);  // No need to await since getSession is synchronous

  if (!session) {
    // If no session, redirect to login page
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  // If session exists, continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/app(.*)"],
};
