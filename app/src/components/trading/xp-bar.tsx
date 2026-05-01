"use client";

import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";

interface XPBarProps {
  currentXP: number;
  rank: string;
}

export function XPBar({ currentXP, rank }: XPBarProps) {
  // Rank Thresholds (simplified for MVP)
  const thresholds = [0, 500, 1500, 4000, 10000, 25000];
  const currentRankIndex = thresholds.findIndex((t, i) => currentXP >= t && (i === thresholds.length - 1 || currentXP < thresholds[i+1]));
  
  const currentThreshold = thresholds[currentRankIndex];
  const nextThreshold = thresholds[currentRankIndex + 1] || currentThreshold * 2;
  const progress = ((currentXP - currentThreshold) / (nextThreshold - currentThreshold)) * 100;

  return (
    <div className="w-full bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-2xl p-5 backdrop-blur-md group hover:border-[var(--color-border-hover)] transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-500)]/10 border border-[var(--color-brand-500)]/20 flex items-center justify-center text-[var(--color-brand-400)] shadow-inner">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white tracking-tight uppercase tracking-widest">Network Rank</h3>
              <span className="px-2 py-0.5 rounded-md bg-[var(--color-brand-500)] text-white text-[10px] font-bold uppercase tracking-tighter">
                {rank}
              </span>
            </div>
            <p className="text-[10px] text-[var(--color-text-muted)] font-medium mt-0.5">CONTRIBUTING TO Logic LIQUIDITY</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-mono font-bold text-white tracking-tighter">{currentXP.toLocaleString()}</p>
          <p className="text-[8px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold">CREDIT_XP</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-[var(--color-brand-500)] shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>
        <div className="flex justify-between items-center px-1">
          <span className="text-[10px] font-mono text-[var(--color-text-muted)]">{currentThreshold.toLocaleString()}</span>
          <span className="text-[10px] font-bold text-[var(--color-brand-400)] uppercase tracking-widest">{Math.round(progress)}% TO NEXT ASCENSION</span>
          <span className="text-[10px] font-mono text-[var(--color-text-muted)]">{nextThreshold.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
