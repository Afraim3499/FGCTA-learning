"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, Globe, Bitcoin, Coins, ArrowRight, Tag, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTABanner } from "@/components/marketing/cta-banner";

const tiers = [
  {
    market: "Gold",
    icon: Coins,
    price: 205,
    color: "text-yellow-400",
    borderColor: "border-yellow-500/20",
    bgAccent: "bg-yellow-500/5",
    glowColor: "bg-yellow-500/10",
    exclusiveCount: 4,
    exclusiveModules: ["Gold Macro Drivers", "Relative Value & Cross-Asset", "ETF Flow & COT Analysis", "Seasonal & Geopolitical"],
    badge: null,
    popular: false,
    bonus: null,
  },
  {
    market: "Forex",
    icon: Globe,
    price: 220,
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
    bgAccent: "bg-blue-500/5",
    glowColor: "bg-blue-500/10",
    exclusiveCount: 3,
    exclusiveModules: ["Carry & Interest Rate Trading", "Macro Differential Trading", "Seasonal & Calendar Patterns"],
    badge: null,
    popular: false,
    bonus: null,
  },
  {
    market: "Crypto",
    icon: Bitcoin,
    price: 245,
    color: "text-amber-400",
    borderColor: "border-amber-500/30",
    bgAccent: "bg-amber-500/5",
    glowColor: "bg-amber-500/15",
    exclusiveCount: 6,
    exclusiveModules: ["On-Chain Analytics", "Funding Rate & Derivatives", "Narrative & Tokenomics", "DeFi Yield & Liquidity", "DeFi Arbitrage", "Governance & Social Sentiment"],
    badge: "Most Complete",
    popular: true,
    bonus: "Includes 12 months of Strategy Vault updates",
  },
];

const sharedFeatures = [
  "Lurnava Academy foundation path access",
  "Visual lessons with guided practice blocks",
  "Chart missions and interactive exercises",
  "Knowledge tests per level (80%+ to advance)",
  "Structured progress from foundations to application",
  "XP progression and achievement tracking",
  "Market-specific chart-reading exercises",
  "Future updates and new levels as platform expands",
  "No signals, no financial advice — education only",
  "One-time payment, full access to your track",
];

const comparisons = [
  { name: "Udemy trading course", price: "$15–30", gap: "Videos only. No practice. No accountability." },
  { name: "Trading signal service", price: "$50–200/mo", gap: "No learning. Pure dependency. Cancel = nothing." },
  { name: "YouTube tutorials", price: "Free", gap: "Scattered tips. No structure. No progress tracking." },
  { name: "University finance course", price: "$2,000–50K", gap: "Academic theory. No applied practice." },
  { name: "1:1 trading mentorship", price: "$5,000+", gap: "Quality varies. No structured system." },
];

export default function PricingPage() {
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number | null>(null);
  const [codeError, setCodeError] = useState("");

  const handleApplyCode = () => {
    // Demo codes for preview — real validation would hit API
    const codes: Record<string, number> = { FRIEND20: 20, LAUNCH25: 25, ELITE30: 30 };
    const discount = codes[discountCode.toUpperCase()];
    if (discount) {
      setAppliedDiscount(discount);
      setCodeError("");
    } else {
      setCodeError("Invalid code. Please check and try again.");
      setAppliedDiscount(null);
    }
  };

  const getPrice = (base: number) => {
    if (appliedDiscount) return Math.round(base * (1 - appliedDiscount / 100));
    return base;
  };

  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-navy-900)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--ln-teal-500)]/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ln-bg-soft)] border border-[var(--ln-border)]">
            <Shield size={14} className="text-[var(--ln-teal-500)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">One-Time Payment · Full Access</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[var(--ln-navy-900)]">
            Choose Your Market.{" "}
            <span className="text-[var(--ln-navy-900)] opacity-40">Get Everything.</span>
          </h1>
          <p className="text-lg text-[var(--ln-text-secondary)] max-w-xl mx-auto leading-relaxed">
            No hidden fees. No upsells. No subscriptions. One payment. Full access to your entire track.
          </p>
        </div>
      </section>

      {/* Discount Code */}
      <section className="max-w-md mx-auto px-6 pb-12">
        <div className="p-4 bg-white border border-[var(--ln-border)] rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Tag size={14} className="text-[var(--ln-teal-500)]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Have a referral code??</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter code"
              className="flex-1 px-4 py-3 bg-[var(--ln-bg-soft)] border border-[var(--ln-border)] rounded-xl text-sm text-[var(--ln-navy-900)] placeholder:text-[var(--ln-text-muted)] focus:outline-none focus:border-[var(--ln-teal-500)]/50"
            />
            <button
              onClick={handleApplyCode}
              className="px-6 py-3 bg-[var(--ln-navy-900)] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[var(--ln-navy-800)] transition-colors"
            >
              Apply
            </button>
          </div>
          {codeError && <p className="text-xs text-rose-500 mt-2">{codeError}</p>}
          {appliedDiscount && (
            <p className="text-xs text-[var(--ln-teal-500)] mt-2 font-bold">
              ✓ {appliedDiscount}% discount applied!
            </p>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.market}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-8 md:p-10 rounded-3xl border relative overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl",
                tier.popular
                  ? "bg-white border-[var(--ln-teal-500)]/30 shadow-[0_20px_50px_rgba(8,26,54,0.06)]"
                  : "bg-white border-[var(--ln-border)]"
              )}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--ln-teal-500)]/5 blur-[80px] pointer-events-none" />
              )}
              {tier.badge && (
                <div className="absolute top-5 right-5 px-3 py-1 bg-[var(--ln-teal-500)] text-white text-[8px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
                  <Sparkles size={10} />
                  {tier.badge}
                </div>
              )}

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Header */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", "bg-[var(--ln-bg-soft)]", tier.color)}>
                      <tier.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--ln-navy-900)]">{tier.market}</h3>
                  </div>

                  <div className="flex items-baseline gap-2">
                    {appliedDiscount && (
                      <span className="text-2xl font-bold text-[var(--ln-text-muted)] line-through">${tier.price}</span>
                    )}
                    <span className="text-5xl font-extrabold tracking-tighter text-[var(--ln-navy-900)]">${getPrice(tier.price)}</span>
                    <span className="text-sm font-bold text-slate-500 uppercase">one-time</span>
                  </div>
                </div>

                {/* Exclusive modules */}
                <div className="mb-6">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                    {tier.exclusiveCount} Exclusive Modules
                  </p>
                  <div className="space-y-2">
                    {tier.exclusiveModules.map((mod) => (
                      <div key={mod} className={cn("text-xs flex items-center gap-2", tier.color)}>
                        <Check size={12} />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bonus */}
                {tier.bonus && (
                  <div className="p-3 bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/10 rounded-xl mb-6">
                    <p className="text-xs text-[var(--ln-teal-500)] font-bold flex items-center gap-2">
                      <Sparkles size={12} />
                      {tier.bonus}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-auto pt-6">
                  <Link
                    href={`/register?track=${tier.market.toLowerCase()}`}
                    className={cn(
                      "w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 group",
                      tier.popular
                        ? "bg-[var(--ln-navy-900)] text-white hover:bg-[var(--ln-navy-800)] shadow-lg shadow-navy-900/10"
                        : "bg-white text-[var(--ln-navy-900)] border border-[var(--ln-border)] hover:bg-[var(--ln-bg-soft)]"
                    )}
                  >
                    Start {tier.market} Training
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shared Features */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 border-t border-[var(--ln-border-soft)]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-[var(--ln-navy-900)]">Everything included in every track</h2>
          <p className="text-[var(--ln-text-secondary)]">No matter which market you choose, you get the full Lurnava system.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sharedFeatures.map((feature) => (
            <div key={feature} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[var(--ln-border)] shadow-sm">
              <div className="w-5 h-5 rounded-full bg-[var(--ln-teal-soft)] flex items-center justify-center shrink-0 mt-0.5">
                <Check size={10} className="text-[var(--ln-teal-500)]" />
              </div>
              <span className="text-sm text-slate-600 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Value Comparison */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 border-t border-[var(--ln-border-soft)]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-[var(--ln-navy-900)]">
            What ${Math.min(...tiers.map(t => t.price))}–${Math.max(...tiers.map(t => t.price))} gets you
          </h2>
          <p className="text-[var(--ln-text-secondary)]">Compared to every alternative on the market.</p>
        </div>
        <div className="space-y-3">
          {comparisons.map((comp) => (
            <div key={comp.name} className="flex items-center gap-4 p-4 bg-white border border-[var(--ln-border)] rounded-xl">
              <div className="w-24 shrink-0">
                <span className="text-sm font-bold text-slate-500">{comp.price}</span>
              </div>
              <div className="flex-1">
                <span className="text-sm font-bold text-[var(--ln-navy-900)]">{comp.name}</span>
                <span className="text-xs text-slate-500 ml-3">{comp.gap}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-4 p-5 bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20 rounded-xl">
            <div className="w-24 shrink-0">
              <span className="text-sm font-bold text-[var(--ln-teal-500)]">$205–245</span>
            </div>
            <div className="flex-1">
              <span className="text-sm font-bold text-[var(--ln-navy-900)]">Lurnava Academy</span>
              <span className="text-xs text-[var(--ln-teal-500)] ml-3">Education + Practice + LearningRecord. One payment. Full access.</span>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Try it free before you pay."
        subheadline="Complete Level 0 for free. See the platform. Then decide."
        primaryLabel="Start Free Trial"
        primaryHref="/free-trial"
        secondaryLabel="Explore Curriculum"
        secondaryHref="/curriculum"
      />

      <Footer />
    </div>
  );
}
