"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const levels = [
  { num: "L0", name: "Market Foundations", skill: "Beginner", desc: "What markets are, how they move, chart reading", unlocks: "L1" },
  { num: "L1", name: "Market Structure", skill: "Beginner", desc: "Trend, range, S/R, sessions, volume", unlocks: "L2" },
  { num: "L2", name: "Core Strategy Families", skill: "Beginner→Inter", desc: "5 foundational archetypes: trend, breakout, MR, momentum, PA", unlocks: "L3 + Phase 1" },
  { num: "L3", name: "Strategy Subtypes", skill: "Intermediate", desc: "When each variant applies — adaptive MAs, squeeze, harmonics", unlocks: "L4 + Phase 2" },
  { num: "L4", name: "Market-Specific Edge", skill: "Inter→Advanced", desc: "Carry trade, on-chain, gold macro — exclusive strategies", unlocks: "L5 + Phase 3" },
  { num: "L5", name: "Advanced & Institutional", skill: "Advanced", desc: "Order flow, derivatives, arbitrage, ML, market making", unlocks: "Phase 4" },
  { num: "L6", name: "Risk & Capital Systems", skill: "Inter→Advanced", desc: "Position sizing, stop systems, portfolio risk, hedging", unlocks: "Phase 4-5" },
  { num: "L7", name: "Regime & Conditions", skill: "Advanced", desc: "Classify market state, select strategies per regime", unlocks: "L8" },
  { num: "L8", name: "Strategy Integration", skill: "Advanced", desc: "Multi-pillar confluence, multi-timeframe systems", unlocks: "Phase 5" },
  { num: "L9", name: "Execution & Psychology", skill: "All Levels", desc: "Execution algos, behavioral traps, journal discipline", unlocks: "Certification" },
];

const skillColors: Record<string, string> = {
  "Beginner": "text-green-400 bg-green-500/10",
  "Beginner→Inter": "text-blue-400 bg-blue-500/10",
  "Intermediate": "text-blue-400 bg-blue-500/10",
  "Inter→Advanced": "text-purple-400 bg-purple-500/10",
  "Advanced": "text-purple-400 bg-purple-500/10",
  "All Levels": "text-amber-400 bg-amber-500/10",
};

export function LevelsOverviewSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#090C11] py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            10 levels. Zero shortcuts.
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Every level unlocks only when you meet the criteria. No completion badges. No fake milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {levels.map((level, i) => (
            <motion.div
              key={level.num}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.04 }}
              className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all duration-200 group"
            >
              {/* Level number */}
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-500)]/10 border border-[var(--color-brand-500)]/20 flex items-center justify-center shrink-0">
                <span className="text-xs font-extrabold text-[var(--color-brand-400)]">{level.num}</span>
              </div>

              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm font-bold text-white">{level.name}</h4>
                  <span className={cn("text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md", skillColors[level.skill])}>
                    {level.skill}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{level.desc}</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                  Unlocks → {level.unlocks}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] transition-colors"
          >
            View full curriculum with all 42 modules →
          </Link>
        </div>
      </div>
    </section>
  );
}
