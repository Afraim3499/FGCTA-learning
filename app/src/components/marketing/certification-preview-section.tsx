"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Check, Trophy } from "lucide-react";

export function CertificationPreviewSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-white/[0.02] py-32 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            This is not completion.{" "}
            <br />
            <span className="text-[var(--color-brand-400)]">
              This is qualification.
            </span>
          </h2>
          <div className="space-y-6">
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg italic">
              You are not certified for finishing lessons. You are certified for
              proving consistent, disciplined performance.
            </p>
            <ul className="space-y-4">
              {[
                "Scored on profit (40%), risk management (30%), consistency (20%), discipline (10%)",
                "5 certification levels: Market Literate → Certified Trader",
                "Every certificate has a unique verifiable ID",
                "Employers and firms can verify at our public page",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white">
                  <Check size={16} className="text-[var(--color-profit)] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Certificate Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-[var(--color-brand-500)]/8 blur-[100px] rounded-full" />
          <div className="relative p-10 md:p-14 aspect-[1.4/1] bg-gradient-to-b from-[var(--color-surface-secondary)] to-[#0A0D12] border border-white/10 rounded-3xl shadow-2xl flex flex-col justify-between items-center text-center overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="certGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#certGrid)" />
              </svg>
            </div>

            {/* Top badge */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-brand-500)]/20 to-[var(--color-brand-600)]/10 border border-[var(--color-brand-500)]/20 flex items-center justify-center">
              <Shield className="text-[var(--color-brand-400)]" size={28} />
            </div>

            {/* Content */}
            <div className="space-y-3 relative z-10">
              <p className="text-[9px] font-bold text-[var(--color-brand-400)] uppercase tracking-[0.4em]">
                FGC Training and Learning Academy
              </p>
              <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
                Certified Trader
              </h4>
              <p className="text-[var(--color-text-secondary)] text-sm">Level 5 — Forex Track</p>
              <p className="text-[var(--color-text-muted)] text-[9px] font-mono uppercase tracking-widest">
                Score: 84/100 — Merit
              </p>
            </div>

            {/* Footer */}
            <div className="w-full pt-6 border-t border-white/5 flex justify-between items-end">
              <div className="text-left space-y-1">
                <p className="text-[7px] font-bold text-white/20 uppercase tracking-widest">
                  Certificate ID
                </p>
                <p className="text-[9px] font-mono text-white/40 uppercase tracking-tight">
                  CERT-4F9B2-3E21A
                </p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-[7px] font-bold text-white/20 uppercase tracking-widest">
                  Issued
                </p>
                <p className="text-[9px] font-mono text-white/40">
                  2026-03-15
                </p>
              </div>
              <Trophy size={20} className="text-white/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
