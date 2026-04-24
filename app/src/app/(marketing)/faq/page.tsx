"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTABanner } from "@/components/marketing/cta-banner";

const faqCategories = [
  {
    title: "About FGC Academy",
    questions: [
      { q: "Is this a trading course or a prop firm?", a: "FGC is a training academy. We teach structured trading methodology, test your knowledge, simulate real trading conditions, and certify your performance. We are not a prop firm — we don't manage capital or offer funded accounts. We prepare you to trade professionally." },
      { q: "Who is FGC Academy for?", a: "Anyone serious about learning to trade professionally. Whether you're a complete beginner, a self-taught trader who wants structure, or a finance professional adding trading credentials — the system adapts from Level 0 (absolute foundations) to Level 9 (institutional-grade execution)." },
      { q: "Do I need any prior trading experience?", a: "No. Level 0 starts from absolute zero — what trading is, how charts work, what instruments are. The curriculum is designed so that someone with zero experience can progress all the way to certification." },
      { q: "How long does the full program take?", a: "Typically 3–6 months for dedicated learners. It's entirely self-paced. Some complete faster, some take longer. The trading phases have time limits (30–90 days each), but you can reset and retry." },
      { q: "Can I access the platform on mobile?", a: "The platform is mobile-responsive. While we recommend desktop for the trading simulation (charts need screen space), all course content, tests, and progress tracking work on mobile." },
    ],
  },
  {
    title: "About the Curriculum",
    questions: [
      { q: "How many strategies will I learn?", a: "220+ verified trading strategies organized into 26 strategy families and 95 subtypes. Every strategy is taught once in the core curriculum, then adapted three ways for Forex, Crypto, and Gold." },
      { q: "What if I'm only interested in one market?", a: "You choose your market track when you sign up. The core curriculum (L0–L3) is shared across all tracks. From L4 onward, you get exclusive modules specific to your market — Forex has 3 exclusive modules, Crypto has 6, and Gold has 4." },
      { q: "What are knowledge tests like?", a: "Multiple-choice tests at the end of each level. You need 80% or higher to pass and unlock the next level. You can retake tests unlimited times. Questions test real understanding, not memorization." },
      { q: "Is the content just videos?", a: "No. Modules include structured text content, interactive chart exercises, scenario-based drills, system-building projects, and simulated trading practice. This is active learning, not passive watching." },
    ],
  },
  {
    title: "About the Trading Simulation",
    questions: [
      { q: "Is this real money?", a: "No. All trading uses virtual capital. You start with $100 in Phase 1 and can scale up to $10,000 in Phase 5. The simulation uses real historical market data with realistic execution (spread, slippage, swap/funding)." },
      { q: "What happens if I blow the simulated account?", a: "If you hit the maximum drawdown limit or run out of time, the phase fails. You can reset after a 24-hour cooling period. Your reset count is tracked and affects your final certification score (score multiplier decreases with more resets)." },
      { q: "How realistic is the simulation?", a: "Very. We use real historical market data with dynamic spread, simulated slippage (0–2 pips), swap/funding rates, and commission. Anti-memorization features include random start points, hidden dates, noise injection, and no repeat data." },
      { q: "Can I trade any instrument?", a: "Instruments are available based on your market track. Forex traders get major/minor currency pairs, Crypto traders get major tokens and altcoins, Gold traders get XAU/USD, GC futures, and related instruments." },
    ],
  },
  {
    title: "About Certification",
    questions: [
      { q: "How is the certification score calculated?", a: "Final Score = (Profit × 40%) + (Risk Management × 30%) + (Consistency × 20%) + (Discipline × 10%). Each component has sub-metrics scored from 1–10. You need a minimum of 70/100 for Level 5 certification." },
      { q: "Can employers verify my certificate?", a: "Yes. Every certificate has a unique ID (CERT-XXXXX-XXXXX). Anyone can verify it at our public verification page. The verification shows your certification level, market track, score, and issue date." },
      { q: "What's the difference between Level 1 and Level 5?", a: "Level 1 (Market Literate) proves basic competency — you understand markets and can execute simple trades. Level 5 (Certified Trader) proves institutional-grade capability — consistent performance across 60+ trades over 30+ days with a score of 70+ across all metrics." },
      { q: "What if I don't reach 70/100 on the final score?", a: "You don't earn Level 5. You can review your metric breakdown, identify weak areas, and retry Phase 5 (with the reset penalty applied). Many traders improve significantly on their second attempt." },
    ],
  },
  {
    title: "About Pricing & Access",
    questions: [
      { q: "Is this a one-time payment or subscription?", a: "One-time payment. Forex: $220, Crypto: $245, Gold: $205. No monthly fees. No hidden charges. Full access to your entire track." },
      { q: "Why are the prices different per market?", a: "Content depth varies by market. Crypto has 6 exclusive modules (the most of any track) plus 1 month of YagaCalls Premium signals. Forex has 3 exclusive modules. Gold has 4. Core content is identical across all tracks." },
      { q: "Do you offer discounts?", a: "Yes. Referral codes provide 20–30% off depending on the code. Enter your code on the pricing page before checkout." },
      { q: "What does the Crypto track's YagaCalls Premium include?", a: "1 month of free access to YagaCalls — a premium Telegram signal group providing real-time crypto trading signals. This lets you test what you learn in the academy against live market signals during your training period." },
    ],
  },
  {
    title: "About the Free Trial",
    questions: [
      { q: "What's included in the free trial?", a: "Complete Level 0 (4 modules): What Is Trading, Instrument Mechanics, Chart Reading Fundamentals, and Platform Orientation. Plus chart reading drills, the L0 knowledge test, and full platform access (locked features visible but grayed)." },
      { q: "Do I need a credit card for the free trial?", a: "No. Create an account with just your email. No payment information required." },
      { q: "Can I keep my progress if I upgrade?", a: "Yes. All Level 0 progress, XP earned, and test results carry over when you purchase a market track." },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-start gap-4 py-5 text-left group">
        <ChevronDown size={16} className={cn("text-[var(--color-text-muted)] mt-1 shrink-0 transition-transform", isOpen && "rotate-180")} />
        <span className="text-sm font-semibold text-white group-hover:text-[var(--color-brand-400)] transition-colors">{question}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <p className="pl-9 pb-5 text-sm text-[var(--color-text-secondary)] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <Navbar />
      <section className="pt-40 pb-16 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <HelpCircle size={14} className="text-[var(--color-brand-400)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">FAQ</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter">Frequently Asked Questions</h1>
          <p className="text-lg text-[var(--color-text-secondary)]">Everything you need to know before you start.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-8 pb-20 space-y-10">
        {faqCategories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-lg font-bold text-white mb-4 pl-1">{cat.title}</h2>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl px-6">
              {cat.questions.map((q) => (
                <FAQItem key={q.q} question={q.q} answer={q.a} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <CTABanner headline="Still have questions?" subheadline="Start the free trial and experience the platform yourself. No card required." primaryLabel="Start Free Trial" primaryHref="/free-trial" />
      <Footer />
    </div>
  );
}
