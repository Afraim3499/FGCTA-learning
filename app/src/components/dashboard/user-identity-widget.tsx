"use client";

import { motion } from "framer-motion";
import { Flame, Trophy, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserIdentityWidgetProps {
  streakDays: number;
  xpTotal: number;
  xpRank: string;
}

export function UserIdentityWidget({ 
  streakDays, 
  xpTotal, 
  xpRank 
}: UserIdentityWidgetProps) {
  
  // XP Progress Calculation (reused from XPBar logic)
  const thresholds = [0, 500, 1500, 4000, 10000, 25000];
  const currentRankIndex = thresholds.findIndex((t, i) => xpTotal >= t && (i === thresholds.length - 1 || xpTotal < thresholds[i+1]));
  const currentThreshold = thresholds[currentRankIndex];
  const nextThreshold = thresholds[currentRankIndex + 1] || currentThreshold * 2;
  const progress = ((xpTotal - currentThreshold) / (nextThreshold - currentThreshold)) * 100;

  return (
    <div className="p-8 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-[2.5rem] space-y-8 relative overflow-hidden group">
      {/* Background Decor */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-brand-500)]/5 blur-3xl" />
      
      {/* Identity Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-500)]/10 border border-[var(--color-brand-500)]/20 flex items-center justify-center text-[var(--color-brand-400)] shadow-inner">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-[0.2em]">Rank Status</p>
            <h3 className="text-xl font-bold text-white tracking-tight uppercase">{xpRank}</h3>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-mono font-bold text-white tracking-tighter">{xpTotal.toLocaleString()}</p>
          <p className="text-[8px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold">Total XP</p>
        </div>
      </div>

      {/* Streak & Multiplier Row */}
      <div className="relative z-10 grid grid-cols-2 gap-4">
        <div className="p-4 bg-orange-500/5 border border-orange-500/10 rounded-2xl flex items-center gap-3">
          <Flame size={18} className="text-orange-500 animate-pulse" fill="currentColor" />
          <div>
            <p className="text-[8px] font-bold text-orange-500/60 uppercase tracking-widest">Streak</p>
            <p className="text-sm font-bold text-white">{streakDays} Days</p>
          </div>
        </div>
        <div className="p-4 bg-[var(--color-profit)]/5 border border-[var(--color-profit)]/10 rounded-2xl flex items-center gap-3">
          <Star size={18} className="text-[var(--color-profit)]" fill="currentColor" />
          <div>
            <p className="text-[8px] font-bold text-[var(--color-profit)]/60 uppercase tracking-widest">Boost</p>
            <p className="text-sm font-bold text-white">1.2x</p>
          </div>
        </div>
      </div>

      {/* Ascension Progress */}
      <div className="relative z-10 space-y-3">
        <div className="flex justify-between items-center px-1">
          <span className="text-[9px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Network Ascension</span>
          <span className="text-[9px] font-bold text-[var(--color-brand-400)]">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-[var(--color-brand-500)] shadow-[0_0_15px_rgba(99,102,241,0.3)]"
          />
        </div>
      </div>
    </div>
  );
}
