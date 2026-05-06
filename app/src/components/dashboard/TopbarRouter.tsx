"use client";

import { usePathname } from "next/navigation";
import { Topbar } from "./topbar";
import { LessonTopBar } from "@/components/academy/lesson-workspace/LessonTopBar";

/**
 * TopbarRouter — switches between the full dashboard Topbar and
 * the minimal LessonTopBar (focus mode) based on the current route.
 *
 * Also manages the main content area left-padding:
 * - Dashboard pages: md:pl-64 to account for sidebar
 * - Lesson pages: no sidebar offset (full width)
 */
export function TopbarRouter() {
  const pathname = usePathname();
  const isLessonMode = pathname?.startsWith("/course/module/");

  if (isLessonMode) {
    return (
      <>
        <LessonTopBar />
        <style>{`
          /* Remove sidebar offset in lesson mode */
          .lesson-layout-shell {
            margin-left: 0 !important;
            padding-left: 0 !important;
          }
          .main-content-wrapper {
            padding: 0 !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
        `}</style>
      </>
    );
  }

  // Standard dashboard mode
  return (
    <>
      <style>{`
        /* Apply sidebar offset in standard mode */
        @media (min-width: 768px) {
          .lesson-layout-shell {
            padding-left: 16rem; /* 256px = w-64 */
          }
        }
        .main-content-wrapper {
          max-width: 80rem; /* max-w-7xl */
          margin: 0 auto;
          padding: 1.5rem; /* p-6 */
        }
      `}</style>
      <Topbar />
    </>
  );
}
