"use client";

import { motion } from "framer-motion";
import { Trophy, Target, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhaseStatusProps {
  phaseNumber: number;
  startingCapital: number;
  currentEquity: number;
  targetProfitPct: number;
  maxDrawdownPct: number;
  status: "active" | "passed" | "failed_dd";
}

export function PhaseStatusCard({
  phaseNumber,
  startingCapital,
  currentEquity,
  targetProfitPct,
  maxDrawdownPct,
  status
}: PhaseStatusProps) {
  const profit = currentEquity - startingCapital;
  const isProfit = profit >= 0;
  
  const targetProfitAmount = startingCapital * (targetProfitPct / 100);
  const maxDrawdownAmount = startingCapital * (maxDrawdownPct / 100);
  
  const profitProgress = Math.min(100, Math.max(0, (profit / targetProfitAmount) * 100));
  const drawdownProgress = Math.min(100, Math.max(0, (Math.abs(Math.min(profit, 0)) / maxDrawdownAmount) * 100));

  const accentColor = isProfit ? "var(--color-profit)" : "var(--color-loss)";
  const glowShadow = isProfit ? "shadow-[0_0_20px_rgba(16,185,129,0.2)]" : "shadow-[0_0_20px_rgba(239,68,68,0.2)]";

  return (
    <div className="p-8 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-[2.5rem] relative overflow-hidden group hover:border-[var(--color-border-hover)] transition-all">
      {/* Intent Glow Background */}
      <div 
        className="absolute -right-20 -top-20 w-64 h-64 blur-[100px] opacity-10 transition-colors duration-1000"
        style={{ backgroundColor: accentColor }}
      />

      <div className="relative z-10 space-y-8">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-[0.2em] flex items-center gap-2">
              <Trophy size={12} className="text-amber-400" />
              Academy Phase {phaseNumber}
            </h3>
            <div className="flex items-end gap-3">
              <p className="text-4xl font-bold text-white font-mono tracking-tighter">
                ${currentEquity.toLocaleString()}
              </p>
              <p className={cn("text-lg font-bold mb-1", isProfit ? "text-[var(--color-profit)]" : "text-[var(--color-loss)]")}>
                {isProfit ? "+" : ""}{(profit / startingCapital * 100).toFixed(2)}%
              </p>
            </div>
          </div>
          <div className={cn(
            "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md transition-all",
            status === "passed" ? "bg-[var(--color-profit)]/10 border-[var(--color-profit)]/30 text-[var(--color-profit)]" :
            status === "failed_dd" ? "bg-[var(--color-loss)]/10 border-[var(--color-loss)]/30 text-[var(--color-loss)]" :
            "bg-[var(--color-brand-500)]/10 border-[var(--color-brand-500)]/30 text-[var(--color-brand-400)]"
          )}>
            {status.replace("_", " ")}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profit Target */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest flex items-center gap-2">
                <Target size={12} className="text-[var(--color-profit)]" />
                Profit Target
              </span>
              <span className="text-xs font-mono text-white">
                {profitProgress.toFixed(1)}%
              </span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${profitProgress}%` }}
                className={cn("h-full transition-all duration-1000 bg-[var(--color-profit)]", isProfit && glowShadow)}
              />
            </div>
          </div>

          {/* Drawdown Limit */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest flex items-center gap-2">
                <ShieldAlert size={12} className="text-[var(--color-loss)]" />
                Max Drawdown
              </span>
              <span className="text-xs font-mono text-white">
                {drawdownProgress.toFixed(1)}%
              </span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${drawdownProgress}%` }}
                className={cn("h-full transition-all duration-1000 bg-[var(--color-loss)]", !isProfit && glowShadow)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-[var(--color-border-default)]">
          <div className="flex gap-6">
            <div>
              <p className="text-[8px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Starting</p>
              <p className="text-xs font-mono text-white">${startingCapital.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-[8px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Target</p>
              <p className="text-xs font-mono text-white">${(startingCapital + targetProfitAmount).toLocaleString()}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Status</p>
            <p className="text-xs font-bold text-white uppercase tracking-tighter">Verified Node</p>
          </div>
        </div>
      </div>
    </div>
  );
}
