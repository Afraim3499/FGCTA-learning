import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const updateSession = async (request: NextRequest) => {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh the session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;

  // Protected routes: redirect to login if not authenticated
  const protectedPaths = ["/dashboard", "/course", "/lab", "/test", "/trading", "/profile", "/certification", "/onboarding", "/journey"];
  const isProtected = protectedPaths.some((p) => path.startsWith(p));

  if (isProtected && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", path);
    
    const response = NextResponse.redirect(url);
    // Copy cookies to ensure session refresh persists through redirect
    supabaseResponse.cookies.getAll().forEach((c) => {
      response.cookies.set(c);
    });
    return response;
  }

  // Auth routes: redirect to dashboard if already authenticated
  const authPaths = ["/login", "/register"];
  const isAuthPage = authPaths.some((p) => path.startsWith(p));

  if (isAuthPage && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    
    const response = NextResponse.redirect(url);
    // Copy cookies to ensure session refresh persists through redirect
    supabaseResponse.cookies.getAll().forEach((c) => {
      response.cookies.set(c);
    });
    return response;
  }

  return supabaseResponse;
};
