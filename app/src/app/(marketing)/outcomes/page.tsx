"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, Briefcase, Check, FileCheck2, Star, Trophy, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTABanner } from "@/components/marketing/cta-banner";

const skillStages = [
  {
    after: "L0-L1",
    title: "Foundation",
    skills: [
      "Read candlestick charts across timeframes",
      "Identify trends, ranges, support, and resistance",
      "Understand session structure and volume behavior",
      "Navigate a practice workspace and record observations",
    ],
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    after: "L2-L3",
    title: "Core Competency",
    skills: [
      "Study core strategy archetypes such as trend, breakout, mean reversion, momentum, and price action",
      "Select a classroom variant for a stated market condition",
      "Compare strategy subtypes across different scenarios",
      "Pass knowledge tests that verify concept understanding",
    ],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    after: "L4-L5",
    title: "Market Structure Depth",
    skills: [
      "Study market-specific strategy families such as carry, on-chain, gold macro, and DeFi",
      "Model multi-leg derivatives concepts in classroom scenarios",
      "Read simulated order flow and liquidity context",
      "Apply arbitrage and market-making concepts as study models",
    ],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    after: "L6-L9",
    title: "Advanced Study",
    skills: [
      "Build risk frameworks for classroom and practice scenarios",
      "Classify market regimes and compare strategy fit",
      "Combine ideas into structured study plans",
      "Practice with systematic discipline and review habits",
    ],
    color: "text-[var(--color-profit)]",
    bg: "bg-[var(--color-profit)]/10",
  },
];

const xpRanks = [
  { range: "0-500", title: "Student" },
  { range: "501-1,500", title: "Apprentice" },
  { range: "1,501-3,500", title: "Analyst" },
  { range: "3,501-7,000", title: "Practitioner" },
  { range: "7,001-12,000", title: "Strategist" },
  { range: "12,001-20,000", title: "Researcher" },
  { range: "20,001-35,000", title: "Senior Analyst" },
  { range: "35,001+", title: "Capstone" },
];

const useCases = [
  {
    icon: BookOpenCheck,
    title: "Self-directed market learners",
    desc: "Use structured records to see whether your practice process is disciplined before you consider any real-market decision.",
  },
  {
    icon: FileCheck2,
    title: "Trading-career candidates",
    desc: "Build a verifiable education record that shows course completion, assessment scores, and practice discipline.",
  },
  {
    icon: Users,
    title: "Finance professionals",
    desc: "Add a learning record that documents structured market education. It is not a license or employment promise.",
  },
  {
    icon: Star,
    title: "Career changers",
    desc: "Use the program to test your understanding of market concepts before making professional decisions.",
  },
];

export default function OutcomesPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-20 pt-40 text-center lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--color-profit)]/5 blur-[180px]" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Trophy size={14} className="text-[var(--color-profit)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Learning Records</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl">What Your Record Shows</h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)]">
            Lurnava records show completed lessons, assessment results, and practice discipline. They do not promise trading performance or replace licensed professional guidance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-6 py-16 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tighter">Skills Practiced At Each Stage</h2>
        {skillStages.map((stage, index) => (
          <motion.div
            key={stage.after}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="grid grid-cols-1 gap-6 rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:grid-cols-[200px_1fr]"
          >
            <div className="space-y-2">
              <span className={cn("text-[10px] font-bold uppercase tracking-widest", stage.color)}>After {stage.after}</span>
              <h3 className="text-xl font-bold text-white">{stage.title}</h3>
            </div>
            <div className="space-y-3">
              {stage.skills.map((skill) => (
                <div key={skill} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                  <Check size={14} className={cn("mt-0.5 shrink-0", stage.color)} />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      <section className="border-t border-white/5 bg-white/[0.02] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-3xl font-bold tracking-tighter">What A Learning Record Gives You</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { level: "Level 3", title: "Practice Record", desc: "Shows completed education milestones and practice checks inside the Lurnava workspace." },
              { level: "Level 5", title: "Verifiable Record", desc: "Unique record ID. Viewers can verify the learning record and assessment score on a public page." },
              { level: "All Levels", title: "Progress Ranking", desc: "Global and market-specific rankings based on assessment score, XP, discipline, and consistency." },
            ].map((item) => (
              <div key={item.level} className="space-y-3 rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-left">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-brand-400)]">{item.level}</span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xs font-bold leading-6 text-[var(--color-text-muted)]">
            Records verify Lurnava study progress only. They are not investment credentials, licenses, job placements, or real-market performance claims.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tighter">XP And Rank Progression</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {xpRanks.map((rank, index) => (
            <div
              key={rank.title}
              className={cn(
                "rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center",
                index === 7 && "border-[var(--color-profit)]/20 bg-[var(--color-profit)]/5"
              )}
            >
              <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">{rank.range} XP</span>
              <h4 className={cn("mt-1 text-sm font-bold", index === 7 ? "text-[var(--color-profit)]" : "text-white")}>{rank.title}</h4>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[var(--color-text-muted)]">Achievement badges track education, practice discipline, review habits, and assessment milestones.</p>
      </section>

      <section className="border-t border-white/5 bg-white/[0.02] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tighter">Who Uses Lurnava Learning Records?</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-500)]/10">
                  <useCase.icon size={18} className="text-[var(--color-brand-400)]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{useCase.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)]">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Start structured market study."
        subheadline="Free Level 0 access. No card required."
        primaryLabel="Start Free Trial"
        primaryHref="/free-trial"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
      <Footer />
    </div>
  );
}
