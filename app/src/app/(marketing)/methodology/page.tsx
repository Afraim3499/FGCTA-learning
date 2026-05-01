"use client";

import { motion } from "framer-motion";
import { Layers, ArrowRight, BookOpen, BarChart3, Brain, Target, Shuffle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTABanner } from "@/components/marketing/cta-banner";

const teachingPhases = [
  { icon: BookOpen, step: "Learn", desc: "Read structured module content — concepts, theory, and real examples. Not scattered tips.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Target, step: "Practice", desc: "Chart drills, scenario exercises, system-building projects. Active learning, not passive watching.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: BarChart3, step: "Simulate", desc: "Execute in the trading Practice under real constraints. Your performance is measured.", color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: Brain, step: "Evaluate", desc: "Knowledge tests (80%+ to pass) + performance metrics from Practice. Both must pass.", color: "text-[var(--color-profit)]", bg: "bg-[var(--color-profit)]/10" },
];

const adaptationExample = {
  strategy: "Breakout Trading",
  forex: { label: "Forex", desc: "London/NY session open breakouts are highest probability. Classic 3-session model drives timing.", color: "text-blue-400" },
  crypto: { label: "Crypto", desc: "24/7 market — adapt session logic. Asia accumulation phase → US breakout. Funding rate confirms.", color: "text-amber-400" },
  gold: { label: "Gold", desc: "COMEX open breakout is the key window. Round-number breakouts ($2000, $2500) are Academy magnets.", color: "text-yellow-400" },
};

const practiceTypes = [
  { type: "Chart Analysis", levels: "L0, L1, L3, L7", desc: "Static chart markup, pattern identification, structure labeling" },
  { type: "Practice", levels: "L2, L4, L5, L9", desc: "Paper/demo trading with real-time or historical data" },
  { type: "Scenario Thinking", levels: "L3, L7, L8", desc: "\"What would you do?\" decision trees with multiple correct paths" },
  { type: "System Building", levels: "L5, L6, L8", desc: "Construct complete trading systems with rules, risk, and review" },
  { type: "Backtesting", levels: "L3, L5, L8", desc: "Historical validation of strategies using defined rules" },
  { type: "Journaling", levels: "L9 (ongoing)", desc: "Trade logging, performance metrics, behavioral pattern tracking" },
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Layers size={14} className="text-purple-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Methodology</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">How We Teach Trading</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A unified knowledge system built on 26 strategy families, 95 subtypes, and ~220 verified strategies. Every strategy taught once. Adapted three ways.
          </p>
        </div>
      </section>

      {/* Strategy Taxonomy */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 border-t border-white/5">
        <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center">The Strategy Taxonomy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { value: "26", label: "Strategy Families", desc: "Core archetypes: Trend Following, Breakout, Mean Reversion, Momentum, Price Action, and more" },
            { value: "95", label: "Strategy Subtypes", desc: "Variants within each family — when each one applies and when it doesn't" },
            { value: "~220", label: "Verified Strategies", desc: "Specific, executable strategies with entry/exit rules, risk parameters, and market adaptations" },
          ].map((stat) => (
            <div key={stat.label} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl text-center space-y-2">
              <span className="text-3xl font-extrabold text-[var(--color-brand-400)]">{stat.value}</span>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest">{stat.label}</h3>
              <p className="text-xs text-[var(--color-text-muted)]">{stat.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-5 bg-[var(--color-brand-500)]/5 border border-[var(--color-brand-500)]/10 rounded-xl text-center">
          <p className="text-sm text-[var(--color-brand-400)] font-semibold">
            Zero duplication. Every strategy is taught ONCE in the core curriculum, then adapted for Forex, Crypto, and Gold.
          </p>
        </div>
      </section>

      {/* 4-Phase Teaching */}
      <section className="bg-white/[0.02] py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 text-center">Every Level Follows 4 Phases</h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-xl mx-auto">No level is just reading. Every level includes practice, Practice, and evaluation.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {teachingPhases.map((phase, i) => (
              <motion.div key={phase.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl space-y-4 relative">
                {i < 3 && <ArrowRight size={14} className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-white/10 z-10" />}
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", phase.bg)}>
                  <phase.icon size={18} className={phase.color} />
                </div>
                <h3 className="text-lg font-bold text-white">{phase.step}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Adaptation Example */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold tracking-tighter mb-4 text-center">How Market Adaptation Works</h2>
        <p className="text-[var(--color-text-secondary)] text-center mb-10">Same core concept. Three different implementations.</p>
        <div className="p-6 bg-white/[0.03] border border-white/5 rounded-3xl space-y-6">
          <div className="flex items-center gap-3">
            <Shuffle size={18} className="text-[var(--color-brand-400)]" />
            <h3 className="text-lg font-bold text-white">Example: {adaptationExample.strategy}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[adaptationExample.forex, adaptationExample.crypto, adaptationExample.gold].map((m) => (
              <div key={m.label} className="p-4 bg-white/[0.03] border border-white/5 rounded-xl">
                <span className={cn("text-[10px] font-bold uppercase tracking-widest", m.color)}>{m.label}</span>
                <p className="text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Types */}
      <section className="bg-white/[0.02] py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center">6 Practice Types</h2>
          <div className="space-y-3">
            {practiceTypes.map((p) => (
              <div key={p.type} className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-xl">
                <span className="text-sm font-bold text-white w-40 shrink-0">{p.type}</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-brand-400)] bg-[var(--color-brand-500)]/10 px-2 py-1 rounded shrink-0">{p.levels}</span>
                <span className="text-xs text-[var(--color-text-secondary)]">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Memorization */}
      {/* Academy Glossary */}
      <section className="bg-white/[0.02] py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
             <h2 className="text-3xl font-bold tracking-tighter uppercase">Academy Glossary</h2>
             <p className="text-sm text-text-secondary">Bridging the gap between retail confusion and Academy clarity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {[
               { term: "Liquidity", def: "The pool of orders (Buy/Sell) resting in the market. Institutions don't 'buy', they 'harvest liquidity' to fill large positions." },
               { term: "Order Block", def: "A specific price zone where Academy market makers have placed a massive cluster of orders, usually resulting in a sharp price move." },
               { term: "DXY Differential", def: "The relative strength of the US Dollar against other global currencies. The primary driver of Forex and Gold trends." },
               { term: "Funding Rate", def: "In Crypto, the cost of holding a long or short position. It signals where the 'dumb money' is crowded." },
               { term: "Real Yields", def: "Interest rates adjusted for inflation. The 'True North' for professional Gold traders." },
               { term: "Stop-Run", def: "A deliberate price move into a zone where retail traders have placed their stop-losses, providing the liquidity for an Academy entry." }
             ].map((item) => (
               <div key={item.term} className="p-6 bg-white/5 border border-white/5 rounded-2xl space-y-2">
                  <h4 className="text-accent-blue font-bold text-sm uppercase tracking-widest">{item.term}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{item.def}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-20 text-center">
        <ShieldCheck size={40} className="text-[var(--color-brand-400)] mx-auto mb-6" />
        <h2 className="text-3xl font-bold tracking-tighter mb-4">You Can&apos;t Game This System</h2>
        <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">Our Practice uses anti-memorization features to ensure your performance reflects real skill, not pattern recognition of historical data.</p>
        <div className="grid grid-cols-2 gap-3 text-left">
          {["Random start points in historical data", "Date/time labels hidden or scrambled", "±0.1% noise injection on price data", "Synthetic segments spliced into real data", "Same period never served to same user twice", "Blended historical + synthetic for variety"].map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] p-3 bg-white/[0.03] rounded-xl border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-500)] shrink-0" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <CTABanner headline="See the methodology in action." subheadline="Start Level 0 for free and experience the 4-phase teaching system yourself." primaryLabel="Start Free Trial" primaryHref="/free-trial" secondaryLabel="View Curriculum" secondaryHref="/curriculum" />
      <Footer />
    </div>
  );
}
