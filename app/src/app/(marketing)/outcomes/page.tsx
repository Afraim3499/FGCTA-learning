"use client";

import { motion } from "framer-motion";
import { TrendingUp, Trophy, Star, Users, Briefcase, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTABanner } from "@/components/marketing/cta-banner";

const skillStages = [
  { after: "L0–L1", title: "Foundation", skills: ["Read any candlestick chart across timeframes", "Identify trends, ranges, support & resistance", "Understand session structure and volume dynamics", "Navigate a trading platform and place orders"], color: "text-green-400", bg: "bg-green-500/10" },
  { after: "L2–L3", title: "Core Competency", skills: ["Execute 5 core strategy archetypes (trend, breakout, MR, momentum, PA)", "Select the correct variant for given market conditions", "Apply 95 strategy subtypes across different scenarios", "Pass knowledge tests proving real understanding"], color: "text-blue-400", bg: "bg-blue-500/10" },
  { after: "L4–L5", title: "Market Mastery", skills: ["Trade market-exclusive strategies (carry, on-chain, gold macro, DeFi)", "Design multi-leg derivatives trades", "Read Academy order flow and liquidity", "Apply arbitrage and market making concepts"], color: "text-purple-400", bg: "bg-purple-500/10" },
  { after: "L6–L9", title: "Academy Readiness", skills: ["Build complete risk frameworks for live capital", "Classify market regimes and select optimal strategies", "Combine strategies into multi-pillar confluence systems", "Execute with systematic discipline and emotional control"], color: "text-[var(--color-profit)]", bg: "bg-[var(--color-profit)]/10" },
];

const xpRanks = [
  { range: "0–500", title: "Recruit" }, { range: "501–1,500", title: "Apprentice" },
  { range: "1,501–3,500", title: "Analyst" }, { range: "3,501–7,000", title: "Practitioner" },
  { range: "7,001–12,000", title: "Strategist" }, { range: "12,001–20,000", title: "Learner" },
  { range: "20,001–35,000", title: "Master Trader" }, { range: "35,001+", title: "Elite" },
];

const useCases = [
  { icon: TrendingUp, title: "Self-Directed Retail Traders", desc: "Prove to yourself — with data — that you can trade consistently before risking real capital." },
  { icon: Briefcase, title: "Aspiring Prop Firm Traders", desc: "Build a verifiable track record of disciplined, rules-based trading. Level 3+ demonstrates readiness." },
  { icon: Users, title: "Finance Professionals", desc: "Add a performance-based trading credential to your profile. Scored on real metrics, not attendance." },
  { icon: Star, title: "Career Changers", desc: "Validate your market skills through a structured program before making the career transition." },
];

export default function OutcomesPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <Navbar />

      <section className="pt-40 pb-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-profit)]/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Trophy size={14} className="text-[var(--color-profit)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Outcomes</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">What You Become</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            By the end of this program, you won&apos;t just &ldquo;know about trading.&rdquo; You&apos;ll have proven — with data — that you can do it.
          </p>
        </div>
      </section>

      {/* Skill Progression */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Skills You&apos;ll Gain at Each Stage</h2>
        {skillStages.map((stage, i) => (
          <motion.div key={stage.after} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
            <div className="space-y-2">
              <span className={cn("text-[10px] font-bold uppercase tracking-widest", stage.color)}>After {stage.after}</span>
              <h3 className="text-xl font-bold text-white">{stage.title}</h3>
            </div>
            <div className="space-y-3">
              {stage.skills.map((s) => (
                <div key={s} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                  <Check size={14} className={cn("shrink-0 mt-0.5", stage.color)} />{s}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* LearningRecord Benefits */}
      <section className="bg-white/[0.02] py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-10">What LearningRecord Gets You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { level: "Level 3", title: "Broker Referral", desc: "Unlocks at Advanced Learner. Transition from Practice to live trading with a real broker account." },
              { level: "Level 5", title: "Verifiable Credential", desc: "Unique certificate ID. Employers, firms, and peers can verify your score at our public page." },
              { level: "All Levels", title: "Leaderboard Ranking", desc: "Global and market-specific rankings based on cert score, XP, discipline, and consistency." },
            ].map((b) => (
              <div key={b.level} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl text-left space-y-3">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-brand-400)]">{b.level}</span>
                <h3 className="text-lg font-bold text-white">{b.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification Preview */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">XP & Rank Progression</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {xpRanks.map((rank, i) => (
            <div key={rank.title} className={cn("p-4 bg-white/[0.03] border border-white/5 rounded-xl text-center",
              i === 7 && "border-[var(--color-profit)]/20 bg-[var(--color-profit)]/5")}>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">{rank.range} XP</span>
              <h4 className={cn("text-sm font-bold mt-1", i === 7 ? "text-[var(--color-profit)]" : "text-white")}>{rank.title}</h4>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[var(--color-text-muted)] mt-6">28+ achievement badges across performance, discipline, strategy, and milestones.</p>
      </section>

      {/* Use Cases */}
      <section className="bg-white/[0.02] py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Who Uses Lurnava LearningRecords?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-500)]/10 flex items-center justify-center shrink-0">
                  <uc.icon size={18} className="text-[var(--color-brand-400)]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{uc.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1 leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Start your transformation." subheadline="From zero to Completed. Free Level 0 access — no card required." primaryLabel="Start Free Trial" primaryHref="/free-trial" secondaryLabel="View Pricing" secondaryHref="/pricing" />
      <Footer />
    </div>
  );
}
