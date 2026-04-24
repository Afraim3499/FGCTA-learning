"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MissionReadinessCardProps {
  currentLevel: number;
  nextStepLink: string;
  nextStepTitle: string;
}

export function MissionReadinessCard({ 
  currentLevel, 
  nextStepLink, 
  nextStepTitle 
}: MissionReadinessCardProps) {
  return (
    <div className="relative group overflow-hidden">
      {/* Subtle Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface-tertiary)] to-[var(--color-surface-secondary)] rounded-[2.5rem]" />
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[var(--color-brand-500)]/5 blur-[100px] group-hover:bg-[var(--color-brand-500)]/10 transition-all duration-1000" />
      
      <div className="relative p-10 flex flex-col items-center text-center space-y-8 z-10">
        <div className="w-20 h-20 rounded-3xl bg-[var(--color-surface-primary)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-brand-400)] shadow-2xl group-hover:border-[var(--color-brand-500)]/30 transition-all duration-500">
          <Shield size={40} className="group-hover:scale-110 transition-transform duration-500" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[var(--color-text-muted)] text-[10px] font-bold rounded uppercase tracking-widest">
              Status: Operational
            </span>
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <h2 className="text-[10px] font-bold text-[var(--color-brand-400)] uppercase tracking-[0.3em]">Operational Objective</h2>
          <h3 className="text-3xl font-bold text-white tracking-tighter uppercase">Mission: Complete Level {currentLevel}</h3>
          <p className="text-sm text-[var(--color-text-secondary)] max-w-sm mx-auto leading-relaxed">
            Your simulation node is active. Complete the foundational modules to unlock institutional capital and live evaluation phases.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center gap-1">
            <p className="text-[8px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Initial Grant</p>
            <p className="text-sm font-bold text-white flex items-center gap-1">
              <Lock size={12} className="text-[var(--color-text-muted)]" />
              $10,000
            </p>
          </div>
          <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center gap-1">
            <p className="text-[8px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Sync Requirement</p>
            <p className="text-sm font-bold text-white">Lvl {currentLevel} 100%</p>
          </div>
        </div>

        <Link 
          href={nextStepLink}
          className="w-full max-w-xs py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl group/btn"
        >
          {currentLevel === 0 ? "Start Module" : nextStepTitle}
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
