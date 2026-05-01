"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  status: string;
  statusColor?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I spent $3,000 on trading courses and signals before Lurnava. This is the first program that actually tested whether I could trade, not just whether I could watch videos.",
    name: "R.K.",
    role: "Forex Trader",
    status: "Phase 3 Active",
    statusColor: "text-blue-600",
  },
  {
    quote:
      "The LearningRecord scoring changed everything for me. When I saw my discipline score was 4/10, I understood why I kept blowing accounts. Lurnava showed me the problem in numbers, not opinions.",
    name: "S.M.",
    role: "Crypto Trader",
    status: "Level 4 Completed",
    statusColor: "text-amber-600",
  },
  {
    quote:
      "As a finance professional, I needed something with actual rigor. The scoring formula, the rules engine, the phase progression — this is structured like Academy training, not a YouTube playlist.",
    name: "D.A.",
    role: "Portfolio Analyst",
    status: "Level 5 Completed",
    statusColor: "text-[var(--ln-teal-500)]",
  },
  {
    quote:
      "The Crypto track alone has 6 exclusive modules. On-chain analytics, funding rates, DeFi arbitrage — things I couldn't find in any course at any price. And I get to practice all of it in Practice.",
    name: "T.L.",
    role: "Crypto Trader",
    status: "Phase 4 Active",
    statusColor: "text-amber-600",
  },
  {
    quote:
      "I failed Phase 2 twice. The reset system forced me to review my trades, find the pattern, and fix it. Third attempt: passed with a 78/100 score. That's how real learning works.",
    name: "M.H.",
    role: "Gold Trader",
    status: "Level 3 Completed",
    statusColor: "text-yellow-600",
  },
  {
    quote:
      "My employer verified my Level 5 certificate. It was the first time a trading credential actually meant something in a job interview.",
    name: "A.P.",
    role: "Junior Trader",
    status: "Level 5 Completed",
    statusColor: "text-[var(--ln-teal-500)]",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-8 md:p-10 bg-white border border-[var(--ln-border)] rounded-3xl space-y-6 hover:border-[var(--ln-teal-500)]/20 transition-all duration-300 group shadow-sm hover:shadow-md"
    >
      {/* Quote */}
      <p className="text-sm md:text-[15px] text-slate-600 font-medium leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--ln-border-soft)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--ln-bg-soft)] border border-[var(--ln-border)] flex items-center justify-center">
            <span className="text-xs font-bold text-[var(--ln-teal-500)]">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-xs font-bold text-[var(--ln-navy-900)]">{testimonial.name}</p>
            <p className="text-[10px] text-slate-400 font-medium">
              {testimonial.role}
            </p>
          </div>
        </div>
        <div
          className={cn(
            "px-3 py-1.5 rounded-lg bg-[var(--ln-bg-soft)] text-[9px] font-bold uppercase tracking-widest",
            testimonial.statusColor || "text-slate-500"
          )}
        >
          {testimonial.status}
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 border-t border-[var(--ln-border-soft)]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--ln-navy-900)]">
            Traders who chose the hard path
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
            Real experiences from traders who trained, failed, adapted, and
            earned their LearningRecord.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
