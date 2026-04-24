"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  { step: "Learn", desc: "Structured modules with real strategy content — not scattered YouTube tips", icon: "📖" },
  { step: "Test", desc: "Pass knowledge gates at 80%+ to prove understanding before moving forward", icon: "✍️" },
  { step: "Trade", desc: "Execute in a simulated environment under institutional risk rules", icon: "📊" },
  { step: "Evaluate", desc: "Every trade is tracked. Profit, risk, consistency, discipline — all scored", icon: "📈" },
  { step: "Advance", desc: "Your capital grows from $100 to $10,000 only if your performance proves it", icon: "🏆" },
];

export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="system" className="bg-white/[0.02] py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            A system designed to build discipline,{" "}
            <span className="text-[var(--color-text-muted)]">not guesswork</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Every level follows the same four-phase architecture. No shortcuts. No skipping.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="p-8 bg-white/[0.04] border border-white/5 rounded-3xl space-y-4 relative group hover:bg-white/[0.07] hover:border-white/10 transition-all duration-300"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="text-[10px] font-bold text-[var(--color-brand-400)] uppercase tracking-[0.3em]">
                Step 0{i + 1}
              </div>
              <h4 className="text-xl font-bold text-white">{item.step}</h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {item.desc}
              </p>
              {i < 4 && (
                <ArrowRight size={14} className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
