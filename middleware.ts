// import { authMiddleware } from "@clerk/nextjs";
 
// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
// export default authMiddleware({
//   publicRoutes: ["/api/webhook", "/search"],
// });


// export default function middleware(req) {
//   // your logic here
//   return new Response('Hello, world!');
// }

 
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
//   // matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/app(.*)"],
// };

import { NextResponse, NextRequest } from 'next/server';
import { getSession } from './lib/auth';  // Updated getSession to support NextRequest

export function middleware(req: NextRequest) {
  const publicRoutes = ["/", "/api/webhook", "/search"];
  const url = req.nextUrl.pathname;

  // Skip authentication check for public routes
  if (publicRoutes.includes(url)) {
    return NextResponse.next();
  }

  // Retrieve the session or token from cookies (or headers, depending on your setup)
  const session = getSession(req);  // Works with updated getSession
  
  if (!session) {
    // If no session, redirect to login page
    return NextResponse.redirect(new URL('/', req.url));
  }

  // If session exists, continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/app(.*)"],
};
