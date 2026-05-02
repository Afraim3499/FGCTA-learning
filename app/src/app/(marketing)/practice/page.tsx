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

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ln-navy-900)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--ln-teal-soft)] blur-[180px] rounded-full pointer-events-none opacity-50" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/10">
            <Activity size={14} className="text-[var(--ln-teal-500)]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--ln-teal-600)]">Practice Environment</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[var(--ln-navy-900)] uppercase">
            Practical Mastery.
          </h1>
          <p className="text-lg text-[var(--ln-text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
            5 levels of progression. $100 to $10,000. Academy standards enforced. Your understanding grows
            through deliberate practice in real market conditions.
          </p>
        </div>
      </section>

      {/* Capital Progression */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-extrabold tracking-tighter mb-10 text-center uppercase text-[var(--ln-navy-900)]">Progression Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {phases.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 bg-white border border-[var(--ln-border)] rounded-[2.5rem] space-y-4 hover:border-[var(--ln-teal-500)]/20 transition-all relative shadow-sm"
            >
              {i < 4 && <ArrowRight size={14} className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-slate-200 z-10" />}
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--ln-teal-500)]">Level {p.num}</div>
              <div className="text-2xl font-extrabold text-[var(--ln-navy-900)]">{p.capital}</div>
              <div className="space-y-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                <div className="flex justify-between"><span>Goal</span><span className="text-[var(--ln-teal-600)]">{p.target}</span></div>
                <div className="flex justify-between"><span>Max DD</span><span className="text-rose-500">{p.maxDD}</span></div>
                <div className="flex justify-between"><span>Time</span><span className="text-[var(--ln-navy-900)]">{p.days}d</span></div>
                <div className="flex justify-between"><span>Min trades</span><span className="text-[var(--ln-navy-900)]">{p.trades}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rules Engine */}
      <section className="bg-slate-50 py-24 px-6 lg:px-8 border-y border-[var(--ln-border)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tighter mb-4 uppercase text-[var(--ln-navy-900)]">Academy Standards</h2>
            <p className="text-[var(--ln-text-secondary)] italic font-medium">These aren&apos;t restrictions. They&apos;re the foundations of professional risk management.</p>
          </div>
          <div className="space-y-4">
            {rules.map((rule) => (
              <div key={rule.id} className="flex items-start gap-6 p-6 bg-white border border-[var(--ln-border)] rounded-2xl shadow-sm">
                <span className="text-[10px] font-mono font-bold text-[var(--ln-teal-600)] bg-[var(--ln-teal-soft)] px-3 py-1.5 rounded-lg shrink-0 border border-[var(--ln-teal-500)]/10">{rule.id}</span>
                <div className="flex-1">
                  <h4 className="text-sm font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">{rule.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">{rule.desc}</p>
                </div>
                <span className={cn("text-[9px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-xl shrink-0",
                  rule.enforce === "Hard Block" ? "text-rose-600 bg-rose-50 border border-rose-100" : "text-amber-600 bg-amber-50 border border-amber-100"
                )}>{rule.enforce}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reset System */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tighter mb-4 uppercase text-[var(--ln-navy-900)]">The Learning Cycle</h2>
          <p className="text-[var(--ln-text-secondary)] font-medium">Growth happens through repetition. The system tracks your recovery journey.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--ln-border)]">
                <th className="text-left py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Resets</th>
                <th className="text-left py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Progress Multiplier</th>
                <th className="text-left py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Adjustment</th>
              </tr>
            </thead>
            <tbody>
              {resetMultipliers.map((r) => (
                <tr key={r.resets} className="border-b border-slate-50">
                  <td className="py-5 text-[var(--ln-navy-900)] font-extrabold">{r.resets}</td>
                  <td className="py-5 font-mono font-bold text-[var(--ln-teal-600)]">{r.mult}</td>
                  <td className="py-5 text-[var(--ln-text-secondary)] font-medium">
                    {r.penalty.replace("Cert capped", "Record capped").replace("flag", "indicator")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-12 p-6 bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/10 rounded-[2.5rem] space-y-3">
          {["All trade history preserved for learning review", "24-hour cooling period ensures emotional stability", "Level-based progress ensures mastery before advancement"].map((p) => (
            <div key={p} className="flex items-center gap-3 text-xs text-[var(--ln-teal-700)] font-medium">
              <Check size={14} className="text-[var(--ln-teal-500)] shrink-0" />
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Anti-Memorization */}
      <section className="bg-slate-50 py-24 px-6 lg:px-8 border-t border-[var(--ln-border)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tighter mb-4 uppercase text-[var(--ln-navy-900)]">Mastery Verification</h2>
            <p className="text-[var(--ln-text-secondary)] font-medium">Authentic market understanding requires dealing with the unexpected.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {antiMemFeatures.map((f) => (
              <div key={f.label} className="p-8 bg-white border border-[var(--ln-border)] rounded-[2.5rem] flex items-start gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[var(--ln-teal-soft)] flex items-center justify-center shrink-0 border border-[var(--ln-teal-500)]/10">
                  <f.icon size={20} className="text-[var(--ln-teal-500)]" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">{f.label}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to prove your mastery?"
        subheadline="Start with Level 0 today. Progress to Level 1 when you're ready."
        primaryLabel="Start Free Trial"
        primaryHref="/free-trial"
        secondaryLabel="View Curriculum"
        secondaryHref="/curriculum"
      />
      <Footer />
    </div>
  );
}
