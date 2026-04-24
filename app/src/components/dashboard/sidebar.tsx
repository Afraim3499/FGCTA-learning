"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  BookOpen, 
  BarChart3, 
  Award, 
  Trophy, 
  Users, 
  FlaskConical, 
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { signOut } from "@/lib/auth-actions";

const NAV_ITEMS = [
  { name: "Mission Control", href: "/dashboard", icon: LayoutDashboard },
  { name: "Tactical Lab", href: "/course", icon: BookOpen },
  { name: "Execution Terminal", href: "/trading", icon: BarChart3 },
  { name: "Strategy Forge", href: "/lab", icon: FlaskConical },
  { name: "Institutional Cert", href: "/dashboard/credentials", icon: Award },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-surface-secondary border-r border-border-default flex flex-col fixed left-0 top-0 z-50">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center text-white shadow-glow-blue">
            <span className="text-xs font-black">FGC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Institutional</span>
            <span className="text-[8px] font-bold text-text-muted uppercase tracking-[0.2em] leading-none mt-1">Academy</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group relative",
                isActive 
                  ? "text-white bg-[var(--color-surface-tertiary)] shadow-sm" 
                  : "text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface-tertiary)]/50"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                isActive ? "text-[var(--color-brand-400)]" : "group-hover:text-white"
              )} />
              {item.name}
              
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute left-0 w-1 h-6 bg-[var(--color-brand-500)] rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-[var(--color-border-default)] space-y-1">
        <button
          onClick={() => signOut()}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400/80 hover:text-red-400 hover:bg-red-500/5 transition-all"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
