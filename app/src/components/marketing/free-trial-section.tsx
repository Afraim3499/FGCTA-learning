"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, BarChart3, Brain, Fingerprint } from "lucide-react";

const trialFeatures = [
  { icon: BookOpen, label: "4 full modules", desc: "Complete Level 0 — Market Foundations" },
  { icon: BarChart3, label: "Real chart drills", desc: "Practice reading actual historical data" },
  { icon: Brain, label: "Knowledge test", desc: "Prove you understand before you trade" },
  { icon: Fingerprint, label: "Platform access", desc: "See the full dashboard, terminal & tools" },
];

export function FreeTrialSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[var(--color-profit)]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-profit)]/10 border border-[var(--color-profit)]/20">
            <span className="w-2 h-2 rounded-full bg-[var(--color-profit)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-profit)]">
              No credit card required
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Don&apos;t take our word for it.{" "}
            <br className="hidden md:block" />
            <span className="text-[var(--color-profit)]">Try Level 0 — Free.</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
            Complete the Market Foundations level. Read real charts. Understand how
            markets work. Experience the platform. Then decide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {trialFeatures.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="p-6 bg-white/[0.04] border border-white/5 rounded-2xl space-y-3 hover:bg-white/[0.06] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-profit)]/10 flex items-center justify-center">
                <f.icon size={18} className="text-[var(--color-profit)]" />
              </div>
              <h4 className="text-sm font-bold text-white">{f.label}</h4>
              <p className="text-xs text-[var(--color-text-muted)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(255,255,255,0.08)] group text-sm"
          >
            Start Free Trial
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
