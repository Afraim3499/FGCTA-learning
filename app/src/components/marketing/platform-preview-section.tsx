"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Shield, TrendingUp } from "lucide-react";

export function PlatformPreviewSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Your performance is the{" "}
            <span className="text-[var(--color-brand-400)]">only thing</span>{" "}
            that matters
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] italic">
            You don&apos;t &ldquo;finish lessons.&rdquo; You prove you can trade.
          </p>
        </div>

        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Start with $100 in a controlled environment and trade under strict
          institutional rules. Your capital grows only if your decisions are
          correct. Every metric is tracked. Every rule is enforced.
        </p>

        <div className="space-y-4">
          {[
            { icon: TrendingUp, label: "Real P&L tracking across 5 capital phases" },
            { icon: Shield, label: "6 institutional risk rules — hard-enforced" },
            { icon: Activity, label: "17+ performance metrics scored continuously" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-sm font-semibold text-white">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-500)]/10 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-[var(--color-brand-400)]" />
              </div>
              {label}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-[var(--color-brand-500)]/5 blur-[120px] rounded-full" />
        <div className="relative p-1.5 bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="bg-[#0B0E14] rounded-[1.3rem] p-8 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/5 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-500)]/15 flex items-center justify-center">
                  <Activity className="text-[var(--color-brand-400)]" size={16} />
                </div>
                <div>
                  <span className="font-mono font-bold text-xs tracking-tight block">PHASE 5 — ACTIVE</span>
                  <span className="text-[9px] text-[var(--color-text-muted)] font-bold uppercase tracking-widest">Day 47 of 90</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[8px] text-[var(--color-text-muted)] font-bold uppercase tracking-widest">Net Equity</p>
                <p className="text-xl font-mono font-bold text-[var(--color-profit)]">$12,847.50</p>
              </div>
            </div>

            {/* Chart */}
            <div className="h-28 w-full bg-white/[0.03] rounded-2xl border border-white/5 relative flex items-end px-3 gap-1.5 pb-2 overflow-hidden">
              <div className="absolute top-3 left-4 text-[8px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">Equity Curve</div>
              {[35, 42, 38, 55, 48, 62, 58, 70, 65, 78, 72, 85, 90, 88, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background: h > 50
                      ? "linear-gradient(to top, rgba(16,185,129,0.2), rgba(16,185,129,0.4))"
                      : "linear-gradient(to top, rgba(99,102,241,0.15), rgba(99,102,241,0.3))",
                  }}
                />
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Win Rate", value: "64%", color: "text-[var(--color-profit)]" },
                { label: "Profit Factor", value: "2.1", color: "text-[var(--color-profit)]" },
                { label: "Max DD", value: "-4.8%", color: "text-amber-400" },
                { label: "Discipline", value: "9/10", color: "text-[var(--color-brand-400)]" },
              ].map((m) => (
                <div key={m.label} className="p-3 bg-white/[0.04] rounded-xl border border-white/5">
                  <p className="text-[7px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">{m.label}</p>
                  <p className={`text-sm font-mono font-bold ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>

            {/* Cert Score */}
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[8px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Projected Cert Score</span>
                <span className="text-sm font-mono font-bold text-white">84/100</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-profit)] rounded-full" style={{ width: "84%" }} />
              </div>
              <div className="flex justify-between mt-2 text-[7px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                <span>Profit: 34/40</span>
                <span>Risk: 26/30</span>
                <span>Cons: 16/20</span>
                <span>Disc: 8/10</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
