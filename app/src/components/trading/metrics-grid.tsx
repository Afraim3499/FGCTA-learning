"use client";

import { 
  Percent, 
  BarChart3, 
  ArrowUpRight, 
  History, 
  Calculator,
  Activity,
  ShieldAlert
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricsProps {
  winRate: number;
  profitFactor: number;
  avgRMultiple: number;
  totalTrades: number;
  netPnl: number;
  currentDrawdown: number;
}

export function MetricsGrid({
  winRate,
  profitFactor,
  avgRMultiple,
  totalTrades,
  netPnl,
  currentDrawdown
}: MetricsProps) {
  
  const primaryMetrics = [
    {
      label: "Net Result",
      value: `${netPnl >= 0 ? "+" : ""}$${netPnl.toLocaleString()}`,
      icon: ArrowUpRight,
      color: netPnl >= 0 ? "var(--color-profit)" : "var(--color-loss)",
      glow: netPnl >= 0 ? "shadow-[0_0_20px_rgba(16,185,129,0.15)]" : "shadow-[0_0_20px_rgba(239,68,68,0.15)]"
    },
    {
      label: "Risk Exposure",
      value: `${currentDrawdown.toFixed(2)}%`,
      icon: ShieldAlert,
      color: "var(--color-loss)",
      glow: "shadow-[0_0_20px_rgba(239,68,68,0.15)]"
    }
  ];

  const secondaryMetrics = [
    { label: "Win Rate", value: `${winRate}%`, icon: Percent },
    { label: "Profit Factor", value: profitFactor.toFixed(2), icon: BarChart3 },
    { label: "Avg R-Multiple", value: `${avgRMultiple.toFixed(2)}R`, icon: Calculator },
    { label: "Trade Count", value: totalTrades, icon: History },
  ];

  return (
    <div className="space-y-6">
      {/* Primary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {primaryMetrics.map((m) => (
          <div key={m.label} className={cn(
            "p-8 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-[2rem] flex items-center justify-between transition-all hover:border-[var(--color-border-hover)]",
            m.glow
          )}>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-[0.2em]">{m.label}</p>
              <p className="text-4xl font-mono font-bold tracking-tighter" style={{ color: m.color }}>{m.value}</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl text-white/20">
              <m.icon size={32} />
            </div>
          </div>
        ))}
      </div>

      {/* Supporting Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {secondaryMetrics.map((m) => (
          <div key={m.label} className="p-5 bg-[var(--color-surface-tertiary)] border border-[var(--color-border-default)] rounded-2xl flex items-center gap-4 group hover:border-[var(--color-border-hover)] transition-all">
            <div className="p-2.5 bg-white/5 rounded-xl text-[var(--color-text-muted)] group-hover:text-white transition-colors">
              <m.icon size={18} />
            </div>
            <div>
              <p className="text-[9px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">{m.label}</p>
              <p className="text-lg font-mono font-bold text-white tracking-tighter">{m.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
