"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  { step: "Learn", desc: "Structured visual lessons that explain market concepts clearly — not scattered tips or dense theory", icon: "📖" },
  { step: "Practice", desc: "Guided exercises and chart-reading tasks that build real skills through active participation", icon: "✍️" },
  { step: "Prove", desc: "Chart missions and knowledge tests that verify your understanding before you move forward", icon: "✅" },
  { step: "Progress", desc: "Advance through structured levels as your skills develop — each level builds on the last", icon: "📈" },
];

export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="system" className="bg-[var(--ln-bg)] py-24 px-6 lg:px-8 border-t border-[var(--ln-border-soft)]">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--ln-navy-900)]">
            A system designed to build understanding,{" "}
            <span className="text-slate-400">not guesswork</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto font-medium">
            Every level follows the same four-step approach. No shortcuts. No skipping.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="p-8 bg-white border border-[var(--ln-border)] rounded-3xl space-y-4 relative group hover:shadow-lg hover:border-[var(--ln-teal-500)]/20 transition-all duration-300"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="text-[10px] font-bold text-[var(--ln-teal-500)] uppercase tracking-[0.3em]">
                Step 0{i + 1}
              </div>
              <h4 className="text-xl font-bold text-[var(--ln-navy-900)]">{item.step}</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {item.desc}
              </p>
              {i < 3 && (
                <ArrowRight size={14} className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-slate-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
