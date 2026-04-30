"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "42", label: "Modules" },
  { value: "220+", label: "Strategies" },
  { value: "5", label: "Trading Phases" },
  { value: "3", label: "Market Tracks" },
  { value: "5", label: "Cert Levels" },
  { value: "$100→$10K", label: "Progression" },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="w-full py-8 border-y border-[var(--ln-border-soft)] bg-[var(--ln-bg-soft)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 md:gap-x-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[var(--ln-navy-900)]">
                {stat.value}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
