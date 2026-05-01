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
    title: "About Lurnava",
    questions: [
      { q: "What is Lurnava Academy?", a: "Lurnava is a structured market education platform. We teach beginners how to read charts, understand market structure, and build decision-making skills through visual lessons, guided practice, and chart missions. We are not a signal service, broker, or prop firm." },
      { q: "Who is Lurnava for?", a: "Anyone who wants to learn about financial markets with structure. Whether you're a complete beginner with no experience, a self-taught learner who wants a clear path, or someone who tried other courses and found them too scattered — Lurnava starts from zero and builds up step by step." },
      { q: "Do I need any prior trading experience?", a: "No. Level 0 starts from absolute basics — what markets are, how charts work, what instruments exist. No assumptions. No prerequisites." },
      { q: "Is Lurnava a signal service?", a: "No. Lurnava does not provide trading signals, trade recommendations, or financial advice. We teach methodology and chart-reading skills. What you do with that knowledge is your decision." },
      { q: "Is this financial advice?", a: "No. Lurnava is an educational platform only. Nothing on this platform constitutes financial advice, investment advice, or professional trading guidance. Before trading with real capital, consult a licensed financial professional." },
    ],
  },
  {
    title: "Learning Experience",
    questions: [
      { q: "How does the learning work?", a: "Each level follows four steps: Learn (visual lessons), Practice (guided exercises), Prove (chart missions and knowledge tests), and Progress (advance to the next level). You must pass each level gate before moving forward." },
      { q: "Is the content just videos?", a: "No. Lurnava uses visual lessons with annotated charts, interactive practice blocks, chart-reading missions, and knowledge tests. This is active, hands-on learning — not passive video watching." },
      { q: "How long does it take?", a: "It depends on your pace. The platform is entirely self-paced. Some learners complete Level 0 in a day, others take a week. There's no rush. The goal is understanding, not speed." },
      { q: "Can I access Lurnava on mobile?", a: "Yes. The platform is mobile-responsive. While desktop is recommended for chart exercises (charts need screen space), all lessons, tests, and progress tracking work on mobile." },
    ],
  },
  {
    title: "Chart Missions & Practice",
    questions: [
      { q: "What are chart missions?", a: "Chart missions are guided exercises where you apply what you've learned to real chart scenarios. You might identify patterns, mark key levels, or make decisions based on visual information. They test understanding, not memorization." },
      { q: "What are knowledge tests?", a: "Multiple-choice tests at the end of each level. You need 80% or higher to pass and unlock the next level. You can retake tests. Questions test real understanding of the concepts taught in that level." },
      { q: "Is any real money involved?", a: "No. All learning activities, chart missions, and practice exercises use educational scenarios only. No real money is at risk at any time on the platform." },
    ],
  },
  {
    title: "Pricing & Access",
    questions: [
      { q: "Is the free trial really free?", a: "Yes. Level 0 is completely free. No credit card required. Just create an account with your email and start learning immediately." },
      { q: "What's included in the free trial?", a: "Complete Level 0 — Market Foundations. This includes visual lessons, chart-reading exercises, and a knowledge check. Your progress carries over if you upgrade." },
      { q: "Is this a subscription?", a: "No. Lurnava uses a one-time payment model. Pay once for your market track and get full access. No monthly fees. No hidden charges." },
      { q: "What market tracks are available?", a: "Forex, Crypto, and Gold. Each track shares the same foundational learning (Levels 0–3) but includes market-specific chart exercises and examples tailored to your chosen market." },
      { q: "Can I switch market tracks?", a: "Core content is shared across all tracks. Market-specific content is exclusive to your chosen track. Contact support if you need to discuss track changes." },
    ],
  },
  {
    title: "Safety & Disclaimers",
    questions: [
      { q: "Does Lurnava guarantee trading profits?", a: "No. Lurnava is an educational platform. We teach market concepts and chart-reading skills. We make no claims about future trading performance, profitability, or returns. Trading involves substantial risk of financial loss." },
      { q: "Do I need to deposit money to trade?", a: "No. Lurnava does not require any trading deposits. We are not a broker. All learning and practice happens within the educational platform using scenarios — no real capital is involved." },
      { q: "Is my data safe?", a: "Yes. We use industry-standard security including encryption and secure authentication. We do not sell personal data. See our Privacy Policy for full details." },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[var(--ln-border-soft)] last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-start gap-4 py-5 text-left group">
        <ChevronDown size={16} className={cn("text-[var(--ln-text-muted)] mt-1 shrink-0 transition-transform", isOpen && "rotate-180")} />
        <span className="text-sm font-semibold text-[var(--ln-navy-900)] group-hover:text-[var(--ln-teal-500)] transition-colors">{question}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <p className="pl-9 pb-5 text-sm text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)] overflow-x-hidden">
      <Navbar />
      <section className="pt-40 pb-16 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ln-bg-soft)] border border-[var(--ln-border)]">
            <HelpCircle size={14} className="text-[var(--ln-teal-500)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">FAQ</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[var(--ln-navy-900)]">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600">Everything you need to know before you start.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-8 pb-20 space-y-10">
        {faqCategories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-lg font-bold text-[var(--ln-navy-900)] mb-4 pl-1">{cat.title}</h2>
            <div className="bg-white border border-[var(--ln-border)] rounded-2xl px-6 shadow-sm">
              {cat.questions.map((q) => (
                <FAQItem key={q.q} question={q.q} answer={q.a} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <CTABanner headline="Still have questions?" subheadline="Start the free trial and experience the platform yourself. No card required." primaryLabel="Start Free" primaryHref="/free-trial" />
      <Footer />
    </div>
  );
}
