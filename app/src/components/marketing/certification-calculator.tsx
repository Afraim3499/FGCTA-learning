"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Award, Info, TrendingUp, Shield, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScoringMetric {
  name: string;
  weight: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  description: string;
  icon: any;
}

const metrics: ScoringMetric[] = [
  {
    name: "Profit Target",
    weight: 0.4,
    min: 0,
    max: 20,
    step: 0.5,
    unit: "%",
    description: "Net profit relative to starting capital.",
    icon: TrendingUp,
  },
  {
    name: "Max Drawdown",
    weight: 0.3,
    min: 0,
    max: 10,
    step: 0.1,
    unit: "%",
    description: "Maximum peak-to-trough decline.",
    icon: Shield,
  },
  {
    name: "Win Rate",
    weight: 0.2,
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
    description: "Percentage of profitable trades.",
    icon: Target,
  },
  {
    name: "Consistency",
    weight: 0.1,
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
    description: "Stability of returns over time.",
    icon: Zap,
  },
];

export function CertificationCalculator() {
  const [values, setValues] = useState<Record<string, number>>({
    "Profit Target": 8,
    "Max Drawdown": 3,
    "Win Rate": 55,
    Consistency: 70,
  });

  const score = useMemo(() => {
    const profitScore = Math.min((values["Profit Target"] / 10) * 100, 100) * 0.4;
    const drawdownScore = Math.max(100 - (values["Max Drawdown"] / 5) * 100, 0) * 0.3;
    const winRateScore = values["Win Rate"] * 0.2;
    const consistencyScore = values.Consistency * 0.1;
    return Math.round(profitScore + drawdownScore + winRateScore + consistencyScore);
  }, [values]);

  const level = useMemo(() => {
    if (score >= 90) return { name: "L5 Elite", color: "text-[var(--color-profit)]", bg: "bg-[var(--color-profit)]/10" };
    if (score >= 80) return { name: "L4 Professional", color: "text-amber-400", bg: "bg-amber-400/10" };
    if (score >= 70) return { name: "L3 Advanced", color: "text-purple-400", bg: "bg-purple-400/10" };
    if (score >= 60) return { name: "L2 Intermediate", color: "text-blue-400", bg: "bg-blue-500/10" };
    return { name: "Uncertified", color: "text-rose-400", bg: "bg-rose-500/10" };
  }, [score]);

  return (
    <section className="py-24 px-6 lg:px-8 bg-[var(--ln-bg-soft)] border-t border-[var(--ln-border-soft)]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20">
            <Calculator size={14} className="text-[var(--ln-teal-500)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ln-teal-500)]">Institutional Tool</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--ln-navy-900)]">Certification Simulator</h2>
          <p className="text-lg text-slate-600 font-medium italic">
            You don&apos;t &ldquo;finish lessons.&rdquo; You prove you can trade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Controls */}
          <div className="space-y-6 p-8 bg-white border border-[var(--ln-border)] rounded-3xl shadow-sm">
            {metrics.map((m) => (
              <div key={m.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <m.icon size={14} className="text-slate-400" />
                    <span className="text-sm font-bold text-[var(--ln-navy-900)]">{m.name}</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[var(--ln-teal-500)]">
                    {values[m.name]}
                    {m.unit}
                  </span>
                </div>
                  <input
                    type="range"
                    min={m.min}
                    max={m.max}
                    step={m.step}
                    value={values[m.name]}
                    onChange={(e) => setValues({ ...values, [m.name]: parseFloat(e.target.value) })}
                    className="w-full h-1.5 bg-[var(--ln-bg-soft)] rounded-full appearance-none cursor-pointer accent-[var(--ln-teal-500)]"
                  />
                  <p className="text-[10px] text-slate-500 italic font-medium">{m.description}</p>
              </div>
            ))}
          </div>

          {/* Result Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--ln-teal-500)] to-[var(--ln-teal-500)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
            <div className="relative p-10 bg-white border border-[var(--ln-border)] rounded-3xl text-center space-y-8 shadow-xl">
              <div className="w-20 h-20 rounded-2xl bg-[var(--ln-bg-soft)] flex items-center justify-center mx-auto border border-[var(--ln-border-soft)]">
                <Award size={40} className={level.color} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Simulated Score</p>
                <div className="text-7xl font-black tracking-tighter text-[var(--ln-navy-900)]">{score}</div>
              </div>

              <div className={cn("inline-block px-6 py-3 rounded-xl border font-bold uppercase tracking-widest text-xs", level.bg, level.color, level.color.replace("text-", "border-").replace("]", "/20]"))}>
                {level.name}
              </div>

              <div className="space-y-4 pt-4 border-t border-[var(--ln-border)]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Weighted Profit Factor</span>
                  <span className="text-[var(--ln-navy-900)] font-mono font-bold">{(score / 100).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Institutional Standing</span>
                  <span className="text-[var(--ln-navy-900)] font-bold">{score >= 80 ? "EXCEPTIONAL" : score >= 60 ? "STABLE" : "IMPROVEMENT NEEDED"}</span>
                </div>
              </div>

              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                Lurnava Certification isn&apos;t just about profit. It&apos;s about risk-adjusted consistency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
