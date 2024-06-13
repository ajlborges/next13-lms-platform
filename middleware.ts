import { authMiddleware } from "@clerk/nextjs/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up", "/api/webhook", "/imprint", "/privacy-policy", "/waitlist", "/api/email"],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
