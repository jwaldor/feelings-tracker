import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define which routes are public and which require authentication

const isProtectedRoute = createRouteMatcher(["/input(.*)", "/history(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});
// Configure middleware to run on specific paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
