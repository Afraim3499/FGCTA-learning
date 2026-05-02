"use client";

import { motion } from "framer-motion";
import { Shield, Award, Check, ExternalLink, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTABanner } from "@/components/marketing/cta-banner";

const certLevels = [
  {
    level: 1, title: "Market Literate", color: "text-green-400", border: "border-green-500/20", bg: "bg-green-500/5",
    requires: ["L0–L2 course complete (100%)", "Knowledge tests L0, L1, L2 passed (80%+)", "Phase 1 passed — +20% on $100", "Min 15 trades, 10 trading days"],
    proves: "You understand markets and can execute basic trades under controlled conditions.",
  },
  {
    level: 2, title: "Structured Trader", color: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/5",
    requires: ["Cert Level 1 earned", "L3–L4 course complete", "Phase 2 passed — +20% on $300", "Cumulative win rate ≥ 40%", "Avg risk per trade ≤ 2%"],
    proves: "You can select the right strategy variant for given market conditions.",
  },
  {
    level: 3, title: "Advanced Learner", color: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/5",
    requires: ["Cert Level 2 earned", "L5 course complete", "Phase 3 passed — +25% on $1,000", "Profit factor ≥ 1.3", "Max drawdown ≤ 12%", "Rule violations ≤ 5"],
    proves: "Operational competency proven. Broker referral unlocked — you can transition to live trading.",
    special: "🔓 Broker Referral Unlocked",
  },
  {
    level: 4, title: "Consistent Trader", color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/5",
    requires: ["Cert Level 3 earned", "L6–L7 course complete", "Phase 4 passed — +25% on $3,000", "Sharpe ratio ≥ 1.0", "Consistency score ≥ 14/20", "SL compliance ≥ 95%"],
    proves: "You deliver consistent risk-adjusted returns with Academy discipline.",
  },
  {
    level: 5, title: "Completed Trader", color: "text-[var(--color-profit)]", border: "border-[var(--color-profit)]/30", bg: "bg-[var(--color-profit)]/5",
    requires: ["Cert Level 4 earned", "ALL levels L0–L9 complete", "Phase 5 passed — +30% on $10,000", "Final Score ≥ 70/100", "Min 60 trades in Phase 5", "Min 30 trading days", "Rule violations ≤ 3"],
    proves: "Full Academy-grade trading capability. Verifiable credential for professional use.",
    special: "🏆 Verifiable Certificate Issued",
  },
];

const scoringMetrics = {
  profit: { weight: "40%", metrics: [
    { name: "Net P&L vs Target", excellent: "≥ 150%", good: "100–149%", adequate: "80–99%", poor: "< 80%" },
    { name: "Win Rate", excellent: "≥ 55%", good: "45–54%", adequate: "35–44%", poor: "< 35%" },
    { name: "Profit Factor", excellent: "≥ 2.0", good: "1.5–1.99", adequate: "1.0–1.49", poor: "< 1.0" },
    { name: "Avg R-Multiple", excellent: "≥ 2.0R", good: "1.5–1.99R", adequate: "1.0–1.49R", poor: "< 1.0R" },
  ]},
  risk: { weight: "30%", metrics: [
    { name: "Max Drawdown", excellent: "< 5%", good: "5–8%", adequate: "8–12%", poor: "≥ 12%" },
    { name: "Avg Risk/Trade", excellent: "≤ 1%", good: "1–1.5%", adequate: "1.5–2%", poor: "> 2%" },
    { name: "Risk/Reward", excellent: "≥ 1:2.5", good: "1:2.0", adequate: "1:1.5", poor: "< 1:1.5" },
  ]},
  consistency: { weight: "20%", metrics: [
    { name: "Sharpe Ratio", excellent: "≥ 2.0", good: "1.5–1.99", adequate: "1.0–1.49", poor: "< 1.0" },
    { name: "Max Consec Losses", excellent: "≤ 3", good: "4–5", adequate: "6–7", poor: "≥ 8" },
  ]},
  discipline: { weight: "10%", metrics: [
    { name: "Rule Violations", excellent: "0", good: "1–2", adequate: "3–5", poor: "> 5" },
  ]},
};

export default function LearningRecordPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-brand-500)]/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Award size={14} className="text-[var(--color-brand-400)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">LearningRecord System</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            LearningRecord Through{" "}
            <span className="text-[var(--color-brand-400)]">Performance.</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            5 levels. Scored on profit, risk, consistency, and discipline.
            Every certificate is verifiable. Every score is earned.
          </p>
        </div>
      </section>

      {/* 5 Levels */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 space-y-6">
        {certLevels.map((cert, i) => (
          <motion.div
            key={cert.level}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={cn("p-8 rounded-3xl border bg-white/[0.02] space-y-6", cert.border)}
          >
            <div className="flex items-center gap-4 flex-wrap">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-lg", cert.bg, cert.color)}>
                {cert.level}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)]">LearningRecord Level {cert.level}</p>
              </div>
              {cert.special && (
                <span className={cn("text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg", cert.bg, cert.color)}>
                  {cert.special}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Requirements</p>
                <div className="space-y-2">
                  {cert.requires.map((r) => (
                    <div key={r} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <Check size={14} className={cn("shrink-0 mt-0.5", cert.color)} />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
              <div className={cn("p-4 rounded-xl border", cert.bg, cert.border)}>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">What this proves</p>
                <p className="text-sm text-white">{cert.proves}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Scoring Formula */}
      <section className="bg-white/[0.02] py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Scoring Formula — Full Transparency</h2>
            <div className="inline-block px-6 py-3 bg-white/5 rounded-xl border border-white/10 font-mono text-sm text-[var(--color-brand-400)]">
              FINAL SCORE = (Profit × 40%) + (Risk × 30%) + (Consistency × 20%) + (Discipline × 10%)
            </div>
          </div>

          {Object.entries(scoringMetrics).map(([category, data]) => (
            <div key={category} className="mb-8">
              <h3 className="text-lg font-bold text-white capitalize mb-4 flex items-center gap-2">
                {category} <span className="text-sm text-[var(--color-brand-400)] font-mono">({data.weight})</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Metric</th>
                      <th className="text-center py-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-profit)]">Excellent (10)</th>
                      <th className="text-center py-2 text-[10px] font-bold uppercase tracking-widest text-blue-400">Good (7)</th>
                      <th className="text-center py-2 text-[10px] font-bold uppercase tracking-widest text-amber-400">Adequate (4)</th>
                      <th className="text-center py-2 text-[10px] font-bold uppercase tracking-widest text-rose-400">Poor (1)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.metrics.map((m) => (
                      <tr key={m.name} className="border-b border-white/5">
                        <td className="py-3 font-bold text-white">{m.name}</td>
                        <td className="py-3 text-center text-[var(--color-text-secondary)]">{m.excellent}</td>
                        <td className="py-3 text-center text-[var(--color-text-secondary)]">{m.good}</td>
                        <td className="py-3 text-center text-[var(--color-text-secondary)]">{m.adequate}</td>
                        <td className="py-3 text-center text-[var(--color-text-secondary)]">{m.poor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verification */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-20 text-center">
        <div className="p-8 bg-white/[0.03] border border-white/5 rounded-3xl space-y-4">
          <ExternalLink size={32} className="text-[var(--color-brand-400)] mx-auto" />
          <h3 className="text-2xl font-bold">Every Certificate Is Verifiable</h3>
          <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto">
            Each certificate has a unique ID (CERT-XXXXX-XXXXX). Employers, firms, and peers
            can verify any certificate at our public verification page.
          </p>
          <p className="text-sm font-mono text-[var(--ln-teal-500)]">lurnava.com/verify/CERT-XXXXX</p>
        </div>
      </section>

      <CTABanner
        headline="Earn a LearningRecord that actually means something."
        subheadline="Start free. Train hard. Get Completed on performance, not attendance."
        primaryLabel="Start Free Trial"
        primaryHref="/free-trial"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
      <Footer />
    </div>
  );
}
