"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Bitcoin, Coins, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  AcademyCard, 
  AcademyCardContent, 
  AcademyCardHeader, 
  AcademyCardTitle 
} from "@/components/ui/academy-card";
import { DataBadge } from "@/components/ui/data-badge";
import { AcademyButton } from "@/components/ui/academy-button";

const matrices = [
  {
    name: "FX_ALPHA",
    asset: "The Forex Matrix",
    icon: Globe,
    price: "$300",
    description: "Master Global Macro, Interest Rate Differentials, and Central Bank Order Flow.",
    features: ["Macro Differential Analysis", "Central Bank Logics", "Seasonal Flow Models"],
    color: "text-[var(--ln-teal-500)]",
    border: "border-[var(--ln-teal-500)]/20",
    badge: "LOW_VOL_EDGE",
    btnLabel: "DEPLOY FOREX CAPITAL"
  },
  {
    name: "WEB3_LIQUIDITY",
    asset: "The Crypto Matrix",
    icon: Bitcoin,
    price: "$300",
    description: "Master On-Chain Analytics, DeFi Yield Rotation, and Algorithmic Order Flow.",
    features: ["On-Chain Whale Tracking", "Funding Rate Arbitrage", "Liquidation Cascade Harvesting"],
    color: "text-[var(--ln-teal-500)]",
    border: "border-[var(--ln-teal-500)]/20",
    badge: "HIGH_BETA_EXP",
    featured: true,
    btnLabel: "DEPLOY CRYPTO CAPITAL"
  },
  {
    name: "COMMODITY_XAU",
    asset: "The Gold Matrix",
    icon: Coins,
    price: "$300",
    description: "Master Real Yields, COMEX Arbitrage, and Volatility Trading.",
    features: ["Real Yield Correlation", "Central Bank Reserves", "ETF Flow Forensics"],
    color: "text-[var(--ln-warning)]",
    border: "border-[var(--ln-warning)]/20",
    badge: "MACRO_HEDGE",
    btnLabel: "DEPLOY GOLD CAPITAL"
  }
];

export function MarketTracksSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[var(--ln-bg)] py-32 px-6 lg:px-8 overflow-hidden border-t border-[var(--ln-border-soft)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="flex flex-col items-center text-center space-y-4"
      >
        <div className="text-[var(--ln-teal-500)] text-[10px] font-bold tracking-[0.4em] uppercase">Deployment Selection</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--ln-navy-900)] uppercase">
          CHOOSE YOUR <span className="text-slate-400 italic">MATRIX.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto font-medium">
          Select your primary asset theater. Each matrix includes the full core Academy curriculum plus asset-specific Method Logics.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {matrices.map((matrix, i) => (
          <motion.div
            key={matrix.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
          >
            <AcademyCard className={cn(
              "h-full flex flex-col transition-all duration-500 group",
              matrix.featured ? "border-[var(--ln-teal-500)]/40 bg-white shadow-[0_0_50px_rgba(34,197,94,0.05)] scale-105 z-10" : "bg-white border-[var(--ln-border)] hover:border-[var(--ln-teal-500)]/20"
            )}>
              <AcademyCardHeader className="space-y-4">
                <div className="flex justify-between items-start">
                   <div className={cn("p-3 rounded-2xl bg-white/5", matrix.color)}>
                      <matrix.icon size={24} />
                   </div>
                   <DataBadge variant="outline" className="text-[8px] font-mono text-slate-500">
                      {matrix.badge}
                   </DataBadge>
                </div>
                 <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{matrix.name}</div>
                    <AcademyCardTitle className="text-3xl font-extrabold text-[var(--ln-navy-900)]">{matrix.asset}</AcademyCardTitle>
                 </div>
              </AcademyCardHeader>

              <AcademyCardContent className="flex-1 space-y-8">
                <p className="text-sm text-slate-600 font-medium leading-relaxed h-12">
                  {matrix.description}
                </p>

                 <div className="space-y-4">
                    <p className="text-[10px] font-bold text-[var(--ln-navy-900)] uppercase tracking-widest">Logic Features</p>
                   <ul className="space-y-3">
                      {matrix.features.map(item => (
                        <li key={item} className="flex items-start gap-3 text-sm text-[var(--ln-navy-900)] font-medium">
                          <Check size={16} className="text-[var(--ln-teal-500)] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                <div className="pt-6 border-t border-[var(--ln-border)] mt-auto space-y-6">
                   <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[var(--ln-navy-900)]">{matrix.price}</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">One-Time Access</span>
                   </div>
                   <AcademyButton 
                      glow={matrix.featured} 
                      variant={matrix.featured ? "primary" : "outline"}
                      className="w-full"
                      onClick={() => window.location.href = `/checkout?item=${matrix.asset.toLowerCase().replace('the ', '').replace(' matrix', '')}`}
                   >
                      {matrix.btnLabel}
                   </AcademyButton>
                </div>
              </AcademyCardContent>
            </AcademyCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="relative group cursor-pointer mt-20 w-full"
        onClick={() => window.location.href = '/checkout?item=bundle_mastery'}
      >
         <div className="absolute inset-0 bg-gradient-to-r from-[var(--ln-teal-500)]/20 via-[var(--ln-teal-500)]/20 to-[var(--ln-teal-500)]/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
         <AcademyCard className="border-[var(--ln-teal-500)]/40 bg-white overflow-hidden w-full">
            <AcademyCardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="space-y-2 text-center md:text-left">
                  <DataBadge variant="profit" className="mb-4">ULTIMATE_ACCESS</DataBadge>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter uppercase">The Mastery Bundle</h3>
                  <p className="text-[var(--ln-text-secondary)] max-w-xl text-sm md:text-base">The Complete Academy Desk. Access all three global markets simultaneously.</p>
               </div>
               <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
                  <div className="text-4xl md:text-5xl font-extrabold text-[var(--ln-navy-900)]">$750</div>
                  <AcademyButton glow size="lg" className="w-full md:w-auto" onClick={() => window.location.href = '/checkout?item=bundle_mastery'}>ACCESS THE Academy DESK</AcademyButton>
               </div>
            </AcademyCardContent>
         </AcademyCard>
      </motion.div>
    </section>
  );
}
