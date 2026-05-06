import { Sidebar } from "@/components/dashboard/sidebar";
import { TopbarRouter } from "@/components/dashboard/TopbarRouter";
import { Topbar } from "@/components/dashboard/topbar";
import { getProfile } from "@/lib/auth-actions";
import { redirect } from "next/navigation";
import { UserProvider } from "@/components/user-provider";
import { serializeData } from "@/lib/utils";
import { headers } from "next/headers";

import { NavaProvider } from "@/components/nava/NavaProvider";
import { NavaGuide } from "@/components/nava/NavaGuide";
import { LessonTopBar } from "@/components/academy/lesson-workspace/LessonTopBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rawProfile = await getProfile();

  if (!rawProfile) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[var(--ln-bg)]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--ln-teal-500)] border-t-transparent"></div>
          <p className="text-sm font-bold text-[var(--ln-text-secondary)]">Preparing your learning dashboard...</p>
        </div>
      </div>
    );
  }

  // Detect lesson mode server-side to conditionally change layout
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || headersList.get("x-invoke-path") || "";
  const isLessonMode = pathname.startsWith("/course/module/");

  const profile = serializeData(rawProfile);

  return (
    <UserProvider user={profile}>
      <NavaProvider>
        <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)]">
          {/* Sidebar: self-hides on lesson pages via usePathname inside the component */}
          <Sidebar />

          {/*
            Layout shell:
            - Default (dashboard): offset by sidebar width (md:pl-64), standard topbar
            - Lesson mode: full width (no offset), minimal LessonTopBar replaces Topbar
            We use a client-aware approach — Sidebar returns null on lesson pages,
            so the layout shift is handled by the Sidebar's own early return.
            The pl offset must also be removed on lesson pages.
          */}
          <div className="flex-1 flex flex-col min-h-screen lesson-layout-shell">
            {/* 
              Topbar wrapper: rendered by client components below.
              Topbar hides itself on lesson pages; LessonTopBar shows only on lesson pages.
            */}
            <TopbarRouter />
            <main className="flex-1 overflow-y-auto">
              <div className="main-content-wrapper">
                {children}
              </div>
            </main>
          </div>
        </div>
        <NavaGuide />
      </NavaProvider>
    </UserProvider>
  );
}
