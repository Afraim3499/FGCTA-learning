"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lock, CheckCircle2, ArrowRight, BookOpen, Zap, Globe, Bitcoin, Coins } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { StatsBar } from "@/components/marketing/stats-bar";
import { CTABanner } from "@/components/marketing/cta-banner";

/* ── Data ── */

const levels = [
  {
    id: "L0", name: "Market Foundations", skill: "Beginner", prereq: "None",
    purpose: "Build absolute baseline understanding. No strategy content yet.",
    outcome: "You can navigate a trading platform, read basic charts, and understand instrument mechanics.",
    unlocks: "Level 1",
    modules: [
      { id: "0.1", title: "What Is Trading", desc: "Market participants, bid/ask, spread, execution, edge defined", families: "None (foundational)" },
      { id: "0.2", title: "Instrument Mechanics", desc: "How Forex pairs, crypto tokens, and gold contracts work", families: "None (foundational)", adaptations: { forex: "Pairs, pips, lots, swap rates", crypto: "Tokens, gas fees, CEX vs DEX, wallet setup", gold: "XAU/USD spot, GC futures, GLD ETF" } },
      { id: "0.3", title: "Chart Reading Fundamentals", desc: "Candlestick anatomy, timeframes, volume basics, chart types", families: "None (foundational)" },
      { id: "0.4", title: "Trading Platform Orientation", desc: "Order types, margin, leverage intro, P&L calculation", families: "None (foundational)", adaptations: { forex: "MT4/MT5 orientation", crypto: "CEX (Binance/Bybit) + DEX", gold: "Futures platform + spot broker" } },
    ],
    gate: { test: "L0 Knowledge Test (80%+)", unlockText: "Unlocks Level 1" },
    free: true,
  },
  {
    id: "L1", name: "Market Structure", skill: "Beginner", prereq: "L0 Complete",
    purpose: "Understand HOW price moves — structure, sessions, key levels.",
    outcome: "You can identify trends, ranges, support/resistance, and session behavior.",
    unlocks: "Level 2",
    modules: [
      { id: "1.1", title: "Trend Structure", desc: "Higher-highs/higher-lows, Dow Theory, trend classification", families: "TF_06" },
      { id: "1.2", title: "Support & Resistance", desc: "Horizontal S/R, trendlines, pivots, dynamic S/R", families: "PA_06", adaptations: { forex: "Psychological levels (1.1000)", crypto: "Whole numbers ($50k BTC)", gold: "Round numbers ($2000, $2500)" } },
      { id: "1.3", title: "Session Structure & Market Hours", desc: "London, NY, Asia sessions; overlap windows; volume profiles", families: "BO_02 (structural)", adaptations: { forex: "Classic 3-session model", crypto: "24/7; Asia = accumulation", gold: "Follows FX; COMEX open = key" } },
      { id: "1.4", title: "Volume & Participation", desc: "Volume bars, RVOL, volume-price relationship, tick vs real volume", families: "MO_02" },
    ],
    gate: { test: "L1 Knowledge Test (80%+)", unlockText: "Unlocks Level 2" },
  },
  {
    id: "L2", name: "Core Strategy Families", skill: "Beginner → Intermediate", prereq: "L1 Complete",
    purpose: "Learn the 5 foundational strategy archetypes — the building blocks of ALL trading.",
    outcome: "You can execute basic trend-following, breakout, mean reversion, momentum, and price action trades.",
    unlocks: "Level 3 + Trading Phase 1 ($100)",
    modules: [
      { id: "2.1", title: "Trend Following (Core)", desc: "MA crossover logic, trend confirmation, trailing with trend", families: "TF_01, TF_02, TF_05", adaptations: { forex: "50/200 MA; daily/4H", crypto: "9/21 MA; wider stops", gold: "All TFs; slower but cleaner" } },
      { id: "2.2", title: "Breakout Trading (Core)", desc: "Range identification, breakout confirmation, false breakout awareness", families: "BO_01, BO_02, BO_03", adaptations: { forex: "London/NY open breakouts", crypto: "24/7 adapted; Asia→US", gold: "COMEX open; round numbers" } },
      { id: "2.3", title: "Mean Reversion (Core)", desc: "Overbought/oversold, band touch reversion, mean as magnet", families: "MR_01, MR_02" },
      { id: "2.4", title: "Momentum (Core)", desc: "Momentum vs trend, divergence warnings, relative strength", families: "MO_01, MO_02" },
      { id: "2.5", title: "Price Action Foundations", desc: "Reversal candles, continuation patterns, pattern recognition at levels", families: "PA_01, PA_02, PA_03" },
    ],
    gate: { test: "L2 Knowledge Test (80%+) + Phase 1 Passed", unlockText: "Unlocks L3 + Cert Level 1 Check" },
  },
  {
    id: "L3", name: "Strategy Subtypes & Variations", skill: "Intermediate", prereq: "L2 Complete",
    purpose: "Expand toolkit within each family. Learn WHEN each variant is optimal.",
    outcome: "You can select the correct subtype for given market conditions.",
    unlocks: "Level 4 + Trading Phase 2 ($300)",
    modules: [
      { id: "3.1", title: "Advanced Trend Systems", desc: "Adaptive MAs (FRAMA, HMA), Ichimoku, channel trends, GMMA", families: "TF_01, TF_03, TF_04" },
      { id: "3.2", title: "Breakout Refinement", desc: "Volume-confirmed breakouts, squeeze mechanics, false breakout fading", families: "BO_03, BO_04, BO_05" },
      { id: "3.3", title: "Mean Reversion Depth", desc: "Z-score, regression channels, VWAP reversion, pairs MR", families: "MR_02, MR_03, MR_04" },
      { id: "3.4", title: "Advanced Price Action", desc: "Wedges, cup & handle, Fibonacci retracement, harmonic patterns", families: "PA_02, PA_03, PA_04" },
      { id: "3.5", title: "Wave & Cycle Analysis", desc: "Elliott Wave basics, Heikin-Ashi, Renko — taught with validation caveats", families: "PA_05, TF_06" },
      { id: "3.6", title: "Algorithmic Trend Systems", desc: "Turtle Trading, rule-based MA bots, multi-indicator stacking", families: "TF_07" },
    ],
    gate: { test: "L3 Test + Phase 2 Passed", unlockText: "Unlocks L4 + Cert Level 2 Check" },
  },
  {
    id: "L4", name: "Market-Specific Edge", skill: "Intermediate → Advanced", prereq: "L3 Complete",
    purpose: "Market-EXCLUSIVE strategies. This is where tracks diverge.",
    outcome: "You master your market's unique alpha sources unavailable anywhere else.",
    unlocks: "Level 5 + Trading Phase 3 ($1,000)",
    modules: [
      { id: "4.1", title: "Fundamental & Macro Trading", desc: "Economic calendar, event trading, news fade, macro differentials", families: "FD_01, FD_02, FD_03", shared: true },
      { id: "4.2", title: "Sentiment & Positioning", desc: "COT data, options sentiment, retail contrarian signals", families: "SE_01, SE_06, SE_07", shared: true },
    ],
    exclusiveNote: "Plus 3–6 market-exclusive modules depending on your track",
    gate: { test: "L4 Test + Phase 3 Passed", unlockText: "Unlocks L5 + Cert Level 3 (Broker Referral)" },
  },
  {
    id: "L5", name: "Advanced & Institutional", skill: "Advanced", prereq: "L4 Complete",
    purpose: "Derivatives, order flow, arbitrage, ML, market making.",
    outcome: "You can design multi-leg trades and institutional-grade systems.",
    unlocks: "Trading Phase 4 ($3,000)",
    modules: [
      { id: "5.1", title: "Order Flow & Liquidity", desc: "Institutional order flow, supply/demand zones, DOM reading", families: "OF_01, OF_02" },
      { id: "5.2", title: "Directional Options", desc: "Express directional views via options structures", families: "DE_01" },
      { id: "5.3", title: "Non-Directional Options", desc: "Trade volatility and time decay without directional bias", families: "DE_02" },
      { id: "5.4", title: "Greeks & Volatility Trading", desc: "Implied vs realized vol, gamma, skew trading", families: "DE_03" },
      { id: "5.5", title: "Arbitrage Systems", desc: "Cross-market, statistical, and structural arbitrage", families: "AR_01, AR_02, AR_03" },
      { id: "5.6", title: "Market Making", desc: "Spread capture and liquidity provision mechanics", families: "MM_01" },
      { id: "5.7", title: "Machine Learning in Trading", desc: "ML models for prediction, regime detection, optimization", families: "ML_01–ML_04" },
    ],
    gate: { test: "L5 Complete", unlockText: "Unlocks Phase 4" },
  },
  {
    id: "L6", name: "Risk & Capital Systems", skill: "Intermediate → Advanced", prereq: "L2+ (parallel track)",
    purpose: "Build complete risk frameworks for live capital deployment.",
    outcome: "You can build position sizing models, stop systems, and portfolio risk frameworks.",
    unlocks: "Integrated into Phases 4–5",
    modules: [
      { id: "6.1", title: "Position Sizing", desc: "Fixed %, Kelly, volatility-adjusted, anti-martingale", families: "RM_01" },
      { id: "6.2", title: "Stop Systems", desc: "ATR stops, structure stops, time stops", families: "RM_02" },
      { id: "6.3", title: "Portfolio Risk Management", desc: "Correlation, VaR, max exposure, diversification", families: "RM_03" },
      { id: "6.4", title: "Leverage & Liquidation Control", desc: "Margin management, liquidation prevention", families: "RM_04" },
      { id: "6.5", title: "Hedging Strategies", desc: "Direct hedging, cross-asset, options-based hedging", families: "RM_05, DE_04" },
      { id: "6.6", title: "Operational & Execution Risk", desc: "Custody, counterparty, slippage, exchange risk", families: "RM_06" },
    ],
    gate: { test: "L6 Complete + Phase 4 integrations", unlockText: "Feeds into Cert Level 4" },
  },
  {
    id: "L7", name: "Regime & Market Conditions", skill: "Advanced", prereq: "L3+ Complete",
    purpose: "Classify market state and select strategies accordingly.",
    outcome: "You can identify trending, ranging, high-vol, low-vol, and event-driven states and pick the right strategy.",
    unlocks: "Level 8",
    modules: [
      { id: "7.1", title: "Regime Classification", desc: "ADX/DMI, volatility measures, structural identification", families: "ML_03, FD_03" },
      { id: "7.2", title: "Strategy-Regime Matching", desc: "Map every strategy family to its optimal regime; know when NOT to trade", families: "Selection matrix" },
    ],
    gate: { test: "L7 Test — Classify 30 historical regimes", unlockText: "Unlocks L8 + Cert Level 4" },
  },
  {
    id: "L8", name: "Strategy Integration", skill: "Advanced → Institutional", prereq: "L5+ Complete",
    purpose: "Combine multiple strategies into unified decision frameworks.",
    outcome: "You can build multi-pillar confluence systems and multi-timeframe trading models.",
    unlocks: "Trading Phase 5 ($10,000)",
    modules: [
      { id: "8.1", title: "Multi-Pillar Confluence", desc: "Technical + fundamental + sentiment composite signals", families: "HY_01" },
      { id: "8.2", title: "Multi-Timeframe Systems", desc: "Weekly/Daily/4H/1H stacking for entry precision", families: "HY_02" },
    ],
    gate: { test: "L8 Test + Build 3 confluence systems", unlockText: "Unlocks Phase 5" },
  },
  {
    id: "L9", name: "Execution & Psychology", skill: "All Levels", prereq: "L2+ (progressive)",
    purpose: "Bridge from strategy knowledge to live performance.",
    outcome: "You are ready for live trading with systematic discipline, journal habits, and emotional control.",
    unlocks: "Final Certification",
    modules: [
      { id: "9.1", title: "Execution Algorithms", desc: "TWAP, VWAP, iceberg orders, smart routing", families: "EX_01" },
      { id: "9.2", title: "Trading Psychology & Discipline", desc: "Loss aversion, FOMO, revenge trading, process vs outcome", families: "Behavioral" },
      { id: "9.3", title: "Trade Journal & Performance Review", desc: "Systematic feedback loops, metric tracking, review cadence", families: "System design" },
    ],
    gate: { test: "30-day simulated journal + Final evaluation", unlockText: "Cert Level 5 — Certified Trader" },
  },
];

const skillColors: Record<string, string> = {
  "Beginner": "text-green-400 bg-green-500/10 border-green-500/20",
  "Beginner → Intermediate": "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "Intermediate": "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "Intermediate → Advanced": "text-purple-400 bg-purple-500/10 border-purple-500/20",
  "Advanced": "text-purple-400 bg-purple-500/10 border-purple-500/20",
  "Advanced → Institutional": "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "All Levels": "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

function LevelCard({ level, index }: { level: typeof levels[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.03 }}
      className="border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all bg-white/[0.02]"
    >
      {/* Header — always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 md:px-8 py-6 flex items-center gap-4 md:gap-6 text-left group"
      >
        {/* Level badge */}
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border",
          level.free
            ? "bg-[var(--color-profit)]/10 border-[var(--color-profit)]/20"
            : "bg-[var(--color-brand-500)]/10 border-[var(--color-brand-500)]/20"
        )}>
          <span className={cn("text-sm font-extrabold", level.free ? "text-[var(--color-profit)]" : "text-[var(--color-brand-400)]")}>
            {level.id}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-base md:text-lg font-bold text-white">{level.name}</h3>
            <span className={cn("text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md border", skillColors[level.skill] || "text-[var(--color-text-muted)]")}>
              {level.skill}
            </span>
            {level.free && (
              <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md text-[var(--color-profit)] bg-[var(--color-profit)]/10 border border-[var(--color-profit)]/20">
                Free Trial
              </span>
            )}
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">{level.purpose}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] hidden md:block">
            {level.modules.length} modules
          </span>
          <ChevronDown size={18} className={cn("text-[var(--color-text-muted)] transition-transform duration-300", isOpen && "rotate-180")} />
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 space-y-6 border-t border-white/5 pt-6">
              {/* Info strip */}
              <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                <span>Prereq: {level.prereq}</span>
                <span>•</span>
                <span>Unlocks: {level.unlocks}</span>
              </div>

              {/* Outcome */}
              <div className="p-4 bg-[var(--color-profit)]/5 border border-[var(--color-profit)]/10 rounded-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-profit)] mb-1">After completing this level</p>
                <p className="text-sm text-[var(--color-text-secondary)]">{level.outcome}</p>
              </div>

              {/* Modules */}
              <div className="space-y-3">
                {level.modules.map((mod) => (
                  <div key={mod.id} className="p-4 bg-white/[0.03] border border-white/5 rounded-xl space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-[var(--color-brand-400)]">{mod.id}</span>
                          <h4 className="text-sm font-bold text-white">{mod.title}</h4>
                        </div>
                        <p className="text-xs text-[var(--color-text-secondary)] mt-1">{mod.desc}</p>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] bg-white/5 px-2 py-1 rounded shrink-0">
                        {mod.families}
                      </span>
                    </div>

                    {/* Market adaptations */}
                    {"adaptations" in mod && mod.adaptations && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-2 border-t border-white/5 mt-2">
                        {Object.entries(mod.adaptations).map(([market, text]) => (
                          <div key={market} className="flex items-start gap-2 text-[10px]">
                            <span className={cn(
                              "font-bold uppercase tracking-widest shrink-0 mt-0.5",
                              market === "forex" ? "text-blue-400" : market === "crypto" ? "text-amber-400" : "text-yellow-400"
                            )}>
                              {market}:
                            </span>
                            <span className="text-[var(--color-text-muted)]">{text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Exclusive note for L4 */}
              {level.exclusiveNote && (
                <div className="p-4 bg-[var(--color-brand-500)]/5 border border-[var(--color-brand-500)]/10 rounded-xl">
                  <p className="text-sm text-[var(--color-brand-400)] font-semibold">{level.exclusiveNote}</p>
                  <div className="flex gap-3 mt-3">
                    {[
                      { label: "Forex: 3 exclusive", href: "/curriculum/forex", color: "text-blue-400" },
                      { label: "Crypto: 6 exclusive", href: "/curriculum/crypto", color: "text-amber-400" },
                      { label: "Gold: 4 exclusive", href: "/curriculum/gold", color: "text-yellow-400" },
                    ].map((t) => (
                      <Link key={t.href} href={t.href} className={cn("text-[10px] font-bold uppercase tracking-widest hover:underline", t.color)}>
                        {t.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Gate */}
              <div className="flex items-center gap-3 p-4 bg-white/[0.03] border border-white/5 rounded-xl">
                <Lock size={16} className="text-[var(--color-text-muted)] shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Gate Requirement</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{level.gate.test} → {level.gate.unlockText}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Page ── */

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-brand-500)]/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <BookOpen size={14} className="text-[var(--color-brand-400)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Full Curriculum</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            The Complete Trading Curriculum
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            10 levels. 42 modules. From zero to certified trader. Every strategy taught once,
            adapted three ways — Forex, Crypto, Gold.
          </p>
        </div>
      </section>

      <StatsBar />

      {/* Market Track Quick Links */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "Forex Track — 3 exclusive modules", href: "/curriculum/forex", icon: Globe, color: "text-blue-400 border-blue-500/20 hover:bg-blue-500/10" },
            { label: "Crypto Track — 6 exclusive modules", href: "/curriculum/crypto", icon: Bitcoin, color: "text-amber-400 border-amber-500/20 hover:bg-amber-500/10" },
            { label: "Gold Track — 4 exclusive modules", href: "/curriculum/gold", icon: Coins, color: "text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/10" },
          ].map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className={cn("flex items-center gap-2 px-5 py-3 rounded-2xl border bg-white/[0.02] text-xs font-bold uppercase tracking-widest transition-all", t.color)}
            >
              <t.icon size={16} />
              {t.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Level Cards */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pb-20 space-y-4">
        {levels.map((level, i) => (
          <LevelCard key={level.id} level={level} index={i} />
        ))}
      </section>

      {/* Progression Flow */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Progression Flow</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-sm">
            Every gate requires both knowledge AND performance. You can&apos;t skip ahead.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 items-center">
          {["L0", "→", "L1", "→", "L2 + Phase 1", "→", "L3 + Phase 2", "→", "L4 + Phase 3", "→", "L5 + Phase 4", "→", "L6–L7", "→", "L8 + Phase 5", "→", "L9", "→", "Certified"].map((item, i) => (
            item === "→" ? (
              <ArrowRight key={i} size={14} className="text-white/15" />
            ) : (
              <span key={i} className={cn(
                "px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border",
                item === "Certified"
                  ? "bg-[var(--color-profit)]/10 border-[var(--color-profit)]/20 text-[var(--color-profit)]"
                  : "bg-white/5 border-white/5 text-[var(--color-text-muted)]"
              )}>
                {item}
              </span>
            )
          ))}
        </div>
      </section>

      <CTABanner
        headline="Start with Level 0 — Free."
        subheadline="Complete Market Foundations, pass the knowledge test, and see if this system is right for you."
        primaryLabel="Start Free Trial"
        primaryHref="/free-trial"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />

      <Footer />
    </div>
  );
}
