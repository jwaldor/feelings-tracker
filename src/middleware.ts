import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/input(.*)", "/history(.*)"]);

export default clerkMiddleware(
  async (auth, req) => {
    //initializes user in database if not already present
    (async () => {
      const authobj = await auth();
      if (authobj.userId) {
        fetch(`${process.env.SERVER_URL}/api/initializeUser`, {
          method: "POST",
          body: JSON.stringify({ userId: authobj.userId }),
        });
      }
    })();
    if (isProtectedRoute(req)) await auth.protect();
  },
  { debug: true }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
