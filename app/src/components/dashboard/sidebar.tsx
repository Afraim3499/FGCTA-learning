"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Target,
  Award,
  BarChart,
  Settings,
  LogOut,
  Flame,
  CheckCircle2,
  Library
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

export function Sidebar() {
  const pathname = usePathname();
  const user = useUser();
  const progress = user?.progress;

  // Calculate XP threshold for current level progress bar
  const xpTotal = progress?.xpTotal || 0;
  const thresholds = [0, 500, 1500, 4000, 10000, 25000];
  const currentRankIndex = thresholds.findIndex((t, i) => xpTotal >= t && (i === thresholds.length - 1 || xpTotal < thresholds[i+1]));
  const currentThreshold = thresholds[currentRankIndex] || 0;
  const nextThreshold = thresholds[currentRankIndex + 1] || currentThreshold * 2 || 1;
  const xpPercentage = Math.min(100, Math.max(0, ((xpTotal - currentThreshold) / (nextThreshold - currentThreshold)) * 100));

  const streakDays = progress?.streakDays || 0;

  return (
    <div className="hidden md:flex w-64 h-screen bg-white border-r border-[var(--ln-border)] flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl border border-[var(--ln-border)] flex items-center justify-center overflow-hidden bg-white">
            <img src="/lurnava-icon.png" alt="Lurnava" className="w-7 h-7 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-[var(--ln-navy-900)] uppercase tracking-widest leading-none">Lurnava</span>
            <span className="text-[10px] font-bold text-[var(--ln-teal-500)] uppercase tracking-[0.2em] leading-none mt-1">Academy</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all group relative",
                isActive
                  ? "text-[var(--ln-teal-500)] bg-[var(--ln-teal-soft)] shadow-sm"
                  : "text-[var(--ln-text-secondary)] hover:text-[var(--ln-navy-900)] hover:bg-[var(--ln-surface-soft)]"
              )}
            >
              <div className={cn(
                "p-2 rounded-xl transition-all",
                isActive ? "bg-white text-[var(--ln-teal-500)] shadow-sm" : "text-[var(--ln-text-dim)] group-hover:text-[var(--ln-navy-900)]"
              )}>
                <item.icon className="w-5 h-5" />
              </div>
              {item.name}

              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute left-0 w-1 h-6 bg-[var(--ln-teal-500)] rounded-r-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Widgets at bottom of sidebar */}
      <div className="p-4 space-y-4">
        {/* Streak Widget */}
        <div className="p-4 bg-white border border-[var(--ln-border)] rounded-2xl shadow-sm text-center">
          <div className="flex justify-center mb-2">
            <Flame className="text-[var(--ln-teal-500)] w-6 h-6" fill="currentColor" />
          </div>
          <p className="text-sm font-bold text-[var(--ln-navy-900)]">{streakDays} Day Streak</p>
          <p className="text-xs text-[var(--ln-text-secondary)] mb-3">Keep it going!</p>

          <div className="flex justify-between items-center px-2">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={`${day}-${i}`} className="flex flex-col items-center gap-1.5 flex-1 opacity-100">
                <div className={cn("w-full h-1.5 rounded-full transition-all", i < 4 ? "bg-[var(--ln-teal-500)]" : "bg-[var(--ln-border)]")} />
                <span className="text-[8px] font-bold text-[var(--ln-text-dim)] uppercase tracking-tighter">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Level Widget */}
        <div className="p-4 bg-white border border-[var(--ln-border)] rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-[var(--ln-teal-500)]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--ln-navy-900)]">Level {progress?.currentLevel || 0}</p>
              <p className="text-xs text-[var(--ln-text-secondary)]">{progress?.xpRank || 'Recruit'}</p>
            </div>
          </div>

          <div className="space-y-1">
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[var(--ln-teal-500)]" style={{ width: `${xpPercentage}%` }} />
            </div>
            <p className="text-[10px] font-bold text-[var(--ln-text-secondary)] text-right">
              <span className="text-[var(--ln-teal-500)]">{xpTotal.toLocaleString()}</span> / {nextThreshold.toLocaleString()} XP
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-[var(--ln-border)]">
        <button
          onClick={() => signOut()}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
