"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const normalCourse = [
  "Watch 50 hours of video",
  "Practice on a demo with no rules",
  "Certificate for finishing videos",
  "Random strategy tips from strangers",
  "No accountability, no tracking",
];

const fgcSystem = [
  "42 structured modules with knowledge gates",
  "5-phase simulation with institutional risk rules",
  "5-level certification scored on real performance",
  "220+ verified strategies in 26 organized families",
  "Every trade tracked, every metric scored",
];

export function TrustBreakerSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 py-32 space-y-16 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Most people learn trading.{" "}
          <span className="text-[var(--color-text-muted)]">Few are trained.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Normal Courses */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="p-10 md:p-12 bg-white/[0.02] rounded-3xl border border-white/5 space-y-8 group hover:border-white/10 transition-all"
        >
          <div className="space-y-6 opacity-60">
            <h3 className="text-lg font-bold text-white/50 uppercase tracking-widest">
              Normal Courses
            </h3>
            <ul className="space-y-5">
              {normalCourse.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                  <X size={16} className="text-rose-500/50 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* FGC System */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="p-10 md:p-12 bg-[var(--color-surface-secondary)] rounded-3xl border border-[var(--color-brand-500)]/20 space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-brand-500)]/10 blur-[100px]" />
          <div className="space-y-6 relative z-10">
            <h3 className="text-lg font-bold text-[var(--color-brand-400)] uppercase tracking-widest">
              The FGC System
            </h3>
            <ul className="space-y-5">
              {fgcSystem.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white">
                  <Check size={16} className="text-[var(--color-profit)] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="text-center">
        <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-[0.3em]">
          This is a training system — not content consumption.
        </p>
      </div>
    </section>
  );
}
