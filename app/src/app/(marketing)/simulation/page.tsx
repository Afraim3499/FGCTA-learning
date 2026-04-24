"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle, Activity, BarChart3, RefreshCw, Eye, Lock, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTABanner } from "@/components/marketing/cta-banner";

const phases = [
  { num: 1, capital: "$100", target: "+20%", targetAmt: "$120", maxDD: "-10%", days: 30, trades: 15, tradingDays: 10, leverage: "5x", positions: 2, orderTypes: "Market, Limit" },
  { num: 2, capital: "$300", target: "+20%", targetAmt: "$360", maxDD: "-10%", days: 45, trades: 25, tradingDays: 15, leverage: "10x", positions: 3, orderTypes: "+ Stop" },
  { num: 3, capital: "$1,000", target: "+25%", targetAmt: "$1,250", maxDD: "-12%", days: 60, trades: 40, tradingDays: 20, leverage: "15x", positions: 4, orderTypes: "+ Trailing" },
  { num: 4, capital: "$3,000", target: "+25%", targetAmt: "$3,750", maxDD: "-12%", days: 75, trades: 50, tradingDays: 25, leverage: "20x", positions: 5, orderTypes: "+ OCO" },
  { num: 5, capital: "$10,000", target: "+30%", targetAmt: "$13,000", maxDD: "-15%", days: 90, trades: 60, tradingDays: 30, leverage: "25x", positions: 6, orderTypes: "All" },
];

const rules = [
  { id: "R001", name: "Max risk per trade: 2% of equity", enforce: "Hard Block", desc: "Trade is rejected if position risk exceeds 2%" },
  { id: "R002", name: "Max open positions", enforce: "Hard Block", desc: "Varies by phase (2→6). Trade rejected if exceeded" },
  { id: "R003", name: "Stop-loss required on every trade", enforce: "Soft → Hard", desc: "First 3 warnings, then hard block. -40 XP penalty" },
  { id: "R004", name: "Max daily loss: 3% of starting equity", enforce: "Hard Block", desc: "Trading locked for the rest of the day" },
  { id: "R005", name: "Max trades per day", enforce: "Hard Block", desc: "Varies by phase (5→15). Prevents overtrading" },
  { id: "R006", name: "No trades in final 5 min of session", enforce: "Hard Block", desc: "Prevents end-of-session gambling" },
];

const resetMultipliers = [
  { resets: "0 (first attempt)", mult: "1.00x", penalty: "None" },
  { resets: "1", mult: "0.90x", penalty: "Warning badge" },
  { resets: "2", mult: "0.75x", penalty: "Reset Dependent flag" },
  { resets: "3", mult: "0.60x", penalty: "Cert capped at 85/100" },
  { resets: "4+", mult: "0.50x", penalty: "Cert capped at 75/100" },
];

const antiMemFeatures = [
  { icon: Eye, label: "Random start points", desc: "You never know which date the data starts from" },
  { icon: Lock, label: "Hidden dates", desc: "Date and time labels are scrambled or hidden" },
  { icon: Activity, label: "Noise injection", desc: "±0.1% random jitter on price data" },
  { icon: RefreshCw, label: "No repeats", desc: "Same period never served twice to same user" },
];

export default function SimulationPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-rose-500/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Activity size={14} className="text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Trading Simulation Engine</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            This Is Not a Demo Account.
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            5 phases. $100 to $10,000. Institutional rules enforced. Your capital grows
            only when your decisions are correct.
          </p>
        </div>
      </section>

      {/* Capital Progression */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center">Capital Progression System</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {phases.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-all relative"
            >
              {i < 4 && <ArrowRight size={14} className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-white/10 z-10" />}
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-400)]">Phase {p.num}</div>
              <div className="text-2xl font-black text-white">{p.capital}</div>
              <div className="space-y-1 text-[10px] text-[var(--color-text-muted)]">
                <div className="flex justify-between"><span>Target</span><span className="text-[var(--color-profit)] font-bold">{p.target}</span></div>
                <div className="flex justify-between"><span>Max DD</span><span className="text-rose-400 font-bold">{p.maxDD}</span></div>
                <div className="flex justify-between"><span>Time</span><span className="text-white font-bold">{p.days}d</span></div>
                <div className="flex justify-between"><span>Min trades</span><span className="text-white font-bold">{p.trades}</span></div>
                <div className="flex justify-between"><span>Leverage</span><span className="text-white font-bold">{p.leverage}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rules Engine */}
      <section className="bg-white/[0.02] py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Institutional Rules Engine</h2>
            <p className="text-[var(--color-text-secondary)] italic">These aren&apos;t restrictions. They&apos;re the same constraints professionals trade under.</p>
          </div>
          <div className="space-y-3">
            {rules.map((rule) => (
              <div key={rule.id} className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-xl">
                <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded shrink-0">{rule.id}</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">{rule.name}</h4>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{rule.desc}</p>
                </div>
                <span className={cn("text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg shrink-0",
                  rule.enforce === "Hard Block" ? "text-rose-400 bg-rose-500/10" : "text-amber-400 bg-amber-500/10"
                )}>{rule.enforce}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reset System */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">The Reset System</h2>
          <p className="text-[var(--color-text-secondary)]">Everyone fails. The question is how you recover.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Resets</th>
                <th className="text-left py-3 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Score Multiplier</th>
                <th className="text-left py-3 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Penalty</th>
              </tr>
            </thead>
            <tbody>
              {resetMultipliers.map((r) => (
                <tr key={r.resets} className="border-b border-white/5">
                  <td className="py-3 text-white font-bold">{r.resets}</td>
                  <td className="py-3 font-mono text-[var(--color-brand-400)]">{r.mult}</td>
                  <td className="py-3 text-[var(--color-text-secondary)]">{r.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 p-4 bg-white/[0.03] border border-white/5 rounded-xl space-y-2">
          {["All failed trade history preserved for review", "24-hour cooling period prevents emotional resets", "Resets are per-phase — Phase 3 resets don't affect Phase 1"].map((p) => (
            <div key={p} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
              <Check size={12} className="text-[var(--color-profit)] shrink-0" />
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Anti-Memorization */}
      <section className="bg-white/[0.02] py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Anti-Memorization</h2>
            <p className="text-[var(--color-text-secondary)]">You can&apos;t memorize your way through this.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {antiMemFeatures.map((f) => (
              <div key={f.label} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-500)]/10 flex items-center justify-center shrink-0">
                  <f.icon size={18} className="text-[var(--color-brand-400)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{f.label}</h4>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to prove you can trade?"
        subheadline="Start with Level 0 for free. Reach Phase 1 when you're ready."
        primaryLabel="Start Free Trial"
        primaryHref="/free-trial"
        secondaryLabel="View Curriculum"
        secondaryHref="/curriculum"
      />
      <Footer />
    </div>
  );
}
