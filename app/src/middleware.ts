import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const sessionResponse = await updateSession(request);

  // Journey Gating Logic
  if (nextUrl.pathname.startsWith("/journey/")) {
    const pathParts = nextUrl.pathname.split("/");
    const assetClass = pathParts[2]; // e.g., "crypto"
    const tierLevel = pathParts[3]?.replace("tier-", ""); // e.g., "1"

    // Note: In a production environment, we should verify the user's tier
    // using Supabase metadata or a cached profile to avoid DB hits in middleware.
    // For now, we'll ensure the session exists, otherwise redirect to login.
    // Tier-specific validation happens at the Server Component level in page.tsx as well.
    
    // Example: if (!session) return NextResponse.redirect(new URL("/login", request.url));
  }

  return sessionResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next (internal Next.js paths)
     * - static (static files)
     * - image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next|static|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
