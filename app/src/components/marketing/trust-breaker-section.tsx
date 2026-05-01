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

const lurnavaDifference = [
  "Visual lessons with guided practice blocks",
  "Chart missions that test real understanding",
  "Level gates — prove it before you proceed",
  "Structured progress from foundations to application",
  "Every step tracked, every concept verified",
];

export function TrustBreakerSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 py-24 space-y-16 border-t border-[var(--ln-border-soft)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--ln-navy-900)]">
          Most people learn trading.{" "}
          <span className="text-slate-400">Few are trained.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Normal Courses */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="p-10 md:p-12 bg-white rounded-3xl border border-[var(--ln-border)] space-y-8 group hover:border-[var(--ln-teal-300)] transition-all shadow-sm"
        >
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest">
              Normal Courses
            </h3>
            <ul className="space-y-5">
              {normalCourse.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                  <X size={16} className="text-rose-500/50 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Lurnava System */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="p-10 md:p-12 bg-[var(--ln-navy-900)] rounded-3xl border border-[var(--ln-teal-500)]/20 space-y-8 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--ln-teal-500)]/10 blur-[100px]" />
          <div className="space-y-6 relative z-10">
            <h3 className="text-lg font-bold text-[var(--ln-teal-400)] uppercase tracking-widest">
              The Lurnava System
            </h3>
            <ul className="space-y-5">
              {lurnavaDifference.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white font-medium">
                  <Check size={16} className="text-[var(--ln-teal-500)] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="text-center">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
          This is a training system — not content consumption.
        </p>
      </div>
    </section>
  );
}
