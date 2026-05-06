"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  Target,
  Library,
  Settings,
  LogOut,
  ChevronLeft,
  Flame,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { signOut } from "@/lib/auth-actions";
import { useUser } from "@/components/user-provider";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Academy", href: "/course", icon: BookOpen },
  { name: "Chart Practice", href: "/trading", icon: Target },
  { name: "Library", href: "/lab", icon: Library },
  { name: "Settings", href: "/dashboard/records", icon: Settings },
];

export function LessonTopBar() {
  const pathname = usePathname();
  const user = useUser();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const progress = user?.progress;
  const xpTotal = progress?.xpTotal || 0;
  const streakDays = progress?.streakDays || 0;
  const userInitial = user?.name?.[0] || user?.email?.[0] || "U";

  return (
    <>
      {/* ── Minimal Focus Bar ── */}
      <header className="h-14 bg-white/95 backdrop-blur-xl border-b border-[var(--ln-border)] flex items-center gap-4 px-4 sticky top-0 z-50 shadow-sm">
        {/* Hamburger */}
        <button
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation"
          className="w-9 h-9 flex items-center justify-center rounded-xl border border-[var(--ln-border)] text-slate-500 hover:text-[var(--ln-navy-900)] hover:border-slate-300 hover:bg-slate-50 transition-all"
        >
          <Menu size={18} />
        </button>

        {/* Logo */}
        <Link href="/course" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg border border-[var(--ln-border)] flex items-center justify-center overflow-hidden bg-white">
            <img src="/lurnava-icon.png" alt="Lurnava" className="w-5 h-5 object-contain" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-xs font-extrabold text-[var(--ln-navy-900)] uppercase tracking-widest">Lurnava</span>
            <span className="text-[9px] font-bold text-[var(--ln-teal-500)] uppercase tracking-[0.2em]">Academy</span>
          </div>
        </Link>

        {/* Separator */}
        <div className="h-5 w-px bg-slate-200" />

        {/* Back to roadmap breadcrumb */}
        <Link
          href="/course"
          className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[var(--ln-navy-900)] transition-colors group"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="hidden sm:inline">Academy Roadmap</span>
          <span className="sm:hidden">Back</span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Compact user chip */}
        <div className="flex items-center gap-3">
          {streakDays > 0 && (
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-[var(--ln-border)] text-xs font-bold text-slate-600">
              <Flame size={13} className="text-[var(--ln-teal-500)]" fill="currentColor" />
              {streakDays}
            </div>
          )}
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[var(--ln-teal-500)] to-[var(--ln-teal-400)] flex items-center justify-center text-xs font-extrabold text-white shadow-md">
            {userInitial.toUpperCase()}
          </div>
        </div>
      </header>

      {/* ── Drawer Overlay ── */}
      {drawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer panel */}
          <div className="fixed left-0 top-0 bottom-0 z-[70] w-72 bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
            {/* Drawer header */}
            <div className="flex items-center justify-between p-5 border-b border-[var(--ln-border)]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl border border-[var(--ln-border)] flex items-center justify-center overflow-hidden">
                  <img src="/lurnava-icon.png" alt="Lurnava" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-extrabold text-[var(--ln-navy-900)] uppercase tracking-widest">Lurnava</span>
                  <span className="text-[10px] font-bold text-[var(--ln-teal-500)] uppercase tracking-[0.2em]">Academy</span>
                </div>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-xl text-slate-400 hover:text-[var(--ln-navy-900)] hover:bg-slate-100 transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname?.startsWith(item.href) && item.href !== "/course"
                  ? pathname === item.href
                  : pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                      isActive
                        ? "bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[var(--ln-navy-900)]"
                    )}
                  >
                    <item.icon size={18} className={isActive ? "text-[var(--ln-teal-500)]" : "text-slate-400"} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* User summary + stats */}
            <div className="p-4 border-t border-[var(--ln-border)] space-y-3">
              {/* Streak + Level */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-2xl text-center space-y-1">
                  <Flame size={18} className="text-[var(--ln-teal-500)] mx-auto" fill="currentColor" />
                  <p className="text-xs font-bold text-[var(--ln-navy-900)]">{streakDays} Day</p>
                  <p className="text-[10px] text-slate-400 font-medium">Streak</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl text-center space-y-1">
                  <Award size={18} className="text-[var(--ln-teal-500)] mx-auto" />
                  <p className="text-xs font-bold text-[var(--ln-navy-900)]">Level {progress?.currentLevel || 0}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{progress?.xpRank || "Recruit"}</p>
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={() => signOut()}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
