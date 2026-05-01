"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Shield, TrendingUp } from "lucide-react";

export function PlatformPreviewSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-[var(--ln-navy-900)]">
            Your performance is the{" "}
            <span className="text-[var(--ln-teal-500)]">only thing</span>{" "}
            that matters
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            You don&apos;t &ldquo;finish lessons.&rdquo; You prove you can trade.
          </p>
        </div>

        <p className="text-slate-600 font-medium leading-relaxed">
          Start with $100 in a controlled environment and trade under strict
          Academy rules. Your capital grows only if your decisions are
          correct. Every metric is tracked. Every rule is enforced.
        </p>

        <div className="space-y-4">
          {[
            { icon: TrendingUp, label: "Real P&L tracking across 5 capital phases" },
            { icon: Shield, label: "6 Academy risk rules — hard-enforced" },
            { icon: Activity, label: "17+ performance metrics scored continuously" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-sm font-bold text-[var(--ln-navy-900)]">
              <div className="w-8 h-8 rounded-lg bg-[var(--ln-teal-soft)] flex items-center justify-center shrink-0">
                <Icon size={16} className="text-[var(--ln-teal-500)]" />
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
        <div className="absolute inset-0 bg-[var(--ln-teal-500)]/5 blur-[120px] rounded-full" />
        <div className="relative p-1.5 bg-[var(--ln-bg-soft)] rounded-3xl border border-[var(--ln-border)] shadow-2xl overflow-hidden">
          <div className="bg-[var(--ln-navy-900)] rounded-[1.3rem] p-8 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/5 pb-6">
              <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--ln-teal-500)]/15 flex items-center justify-center">
                <Activity className="text-[var(--ln-teal-500)]" size={16} />
              </div>
                <div>
                  <span className="font-mono font-bold text-xs tracking-tight block text-white">PHASE 5 — ACTIVE</span>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Day 47 of 90</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Net Equity</p>
                <p className="text-xl font-mono font-bold text-[var(--ln-teal-500)]">$12,847.50</p>
              </div>
            </div>

            {/* Chart */}
            <div className="h-28 w-full bg-white/[0.03] rounded-2xl border border-white/5 relative flex items-end px-3 gap-1.5 pb-2 overflow-hidden">
              <div className="absolute top-3 left-4 text-[8px] font-mono text-slate-400 uppercase tracking-widest">Equity Curve</div>
              {[35, 42, 38, 55, 48, 62, 58, 70, 65, 78, 72, 85, 90, 88, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background: h > 50
                      ? "linear-gradient(to top, rgba(16,185,129,0.2), rgba(16,185,129,0.4))"
                      : "linear-gradient(to top, rgba(94,234,212,0.15), rgba(94,234,212,0.3))",
                  }}
                />
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Win Rate", value: "64%", color: "text-[var(--ln-teal-500)]" },
                { label: "Profit Factor", value: "2.1", color: "text-[var(--ln-teal-500)]" },
                { label: "Max DD", value: "-4.8%", color: "text-amber-400" },
                { label: "Discipline", value: "9/10", color: "text-[var(--ln-teal-500)]" },
              ].map((m) => (
                <div key={m.label} className="p-3 bg-white/[0.04] rounded-xl border border-white/5">
                  <p className="text-[7px] font-bold uppercase tracking-widest text-slate-400 mb-1">{m.label}</p>
                  <p className={`text-sm font-mono font-bold ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>

            {/* Cert Score */}
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">Projected Cert Score</span>
                <span className="text-sm font-mono font-bold text-white">84/100</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--ln-teal-500)] to-[var(--ln-teal-500)] rounded-full" style={{ width: "84%" }} />
              </div>
              <div className="flex justify-between mt-2 text-[7px] font-bold uppercase tracking-widest text-slate-400">
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
