"use client";

import { motion } from "framer-motion";
import { BookOpen, BarChart3, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTABanner } from "@/components/marketing/cta-banner";

const trialIncludes = [
  {
    icon: BookOpen,
    title: "Visual Lessons",
    desc: "Learn what markets are, how candlestick charts work, and the basics of instruments — through annotated visuals, not dense text.",
  },
  {
    icon: BarChart3,
    title: "Chart Reading Practice",
    desc: "Practice reading real market charts with guided exercises. Build pattern recognition skills step by step.",
  },
  {
    icon: CheckCircle2,
    title: "First Chart Mission",
    desc: "Complete Mission 1 — your first guided chart-reading exercise. Prove you understand the basics before moving forward.",
  },
  {
    icon: Sparkles,
    title: "Full Platform Preview",
    desc: "See the complete learning environment, track your progress, and experience how Lurnava structures market education.",
  },
];

const safetyPoints = [
  "No credit card required",
  "No trading deposits",
  "No signals or financial advice",
  "No pressure — learn at your own pace",
  "Progress carries over if you upgrade",
];

export default function FreeTrialPage() {
  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--ln-teal-500)]/5 blur-[200px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20">
            <span className="w-2 h-2 rounded-full bg-[var(--ln-teal-500)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ln-teal-500)]">Free · No Card Required</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] text-[var(--ln-navy-900)]">
            Try Lurnava<br />
            <span className="text-[var(--ln-teal-500)]">From Level 0.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Start with the basics of market learning through visual lessons, guided practice, and your first chart mission. No pressure. No deposit. No signals.
          </p>
          <div className="pt-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-3 px-12 py-5 bg-[var(--ln-navy-900)] text-white font-bold rounded-2xl hover:bg-[var(--ln-navy-800)] active:scale-[0.98] transition-all shadow-[0_10px_24px_rgba(8,26,54,0.16)] group text-sm"
            >
              Start Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[var(--ln-navy-900)]">
            What&apos;s included in Level 0
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto font-medium">
            Everything you need to experience structured market learning.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {trialIncludes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 bg-white border border-[var(--ln-border)] rounded-3xl space-y-4 hover:border-[var(--ln-teal-500)]/20 transition-all shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--ln-teal-soft)] flex items-center justify-center">
                <item.icon size={22} className="text-[var(--ln-teal-500)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--ln-navy-900)]">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className="bg-[var(--ln-bg-soft)] py-20 px-6 lg:px-8 border-y border-[var(--ln-border-soft)]">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[var(--ln-navy-900)]">
              Practice before pressure.
            </h2>
            <p className="text-slate-600 font-medium">
              Level 0 is designed to be risk-free, commitment-free, and hype-free.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {safetyPoints.map((point) => (
              <div
                key={point}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[var(--ln-border)] rounded-2xl text-sm font-medium text-[var(--ln-navy-900)] shadow-sm"
              >
                <CheckCircle2 size={16} className="text-[var(--ln-teal-500)] shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After Level 0 */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <div className="p-10 bg-white border border-[var(--ln-border)] rounded-3xl space-y-6 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-[var(--ln-navy-900)]">After Level 0</h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            If Lurnava is right for you, choose your market track (Forex, Crypto, or Gold) and continue to Level 1 and beyond. Your Level 0 progress carries over. If it&apos;s not for you — no pressure. You learned the basics for free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--ln-navy-900)] text-white font-bold rounded-2xl hover:bg-[var(--ln-navy-800)] active:scale-[0.98] transition-all shadow-[0_10px_24px_rgba(8,26,54,0.16)] group text-sm"
            >
              Start Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--ln-text-muted)] hover:text-[var(--ln-navy-900)] transition-colors border border-[var(--ln-border)] rounded-2xl hover:bg-[var(--ln-bg-soft)]"
            >
              View Curriculum
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Learn with structure, not guesswork."
        subheadline="Start Level 0 free. Visual lessons, guided practice, and your first chart mission."
        primaryLabel="Start Free"
        primaryHref="/register"
      />

      <Footer />
    </div>
  );
}
