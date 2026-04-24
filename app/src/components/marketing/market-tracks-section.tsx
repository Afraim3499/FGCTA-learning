"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Bitcoin, Coins } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  TerminalCard, 
  TerminalCardContent, 
  TerminalCardHeader, 
  TerminalCardTitle 
} from "@/components/ui/terminal-card";
import { DataBadge } from "@/components/ui/data-badge";
import { InstitutionalButton } from "@/components/ui/institutional-button";

const matrices = [
  {
    name: "FX_ALPHA",
    asset: "The Forex Matrix",
    icon: Globe,
    price: "$300",
    description: "Master Global Macro, Interest Rate Differentials, and Central Bank Order Flow.",
    features: ["Macro Differential Analysis", "Central Bank Protocols", "Seasonal Flow Models"],
    color: "text-accent-blue",
    border: "border-accent-blue/20",
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
    color: "text-pass-green",
    border: "border-pass-green/20",
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
    color: "text-warning",
    border: "border-warning/20",
    badge: "MACRO_HEDGE",
    btnLabel: "DEPLOY GOLD CAPITAL"
  }
];

export function MarketTracksSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 py-32 space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="flex flex-col items-center text-center space-y-4"
      >
        <div className="text-accent-blue text-[10px] font-bold tracking-[0.4em] uppercase">Deployment Selection</div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
          CHOOSE YOUR <span className="text-text-muted italic">MATRIX.</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto font-medium">
          Select your primary asset theater. Each matrix includes the full core institutional curriculum plus asset-specific execution protocols.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {matrices.map((matrix, i) => (
          <motion.div
            key={matrix.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
          >
            <TerminalCard className={cn(
              "h-full flex flex-col transition-all duration-500 group",
              matrix.featured ? "border-pass-green/40 bg-pass-green/5 shadow-[0_0_50px_rgba(34,197,94,0.05)] scale-105 z-10" : "hover:border-white/20"
            )}>
              <TerminalCardHeader className="space-y-4">
                <div className="flex justify-between items-start">
                   <div className={cn("p-3 rounded-2xl bg-white/5", matrix.color)}>
                      <matrix.icon size={24} />
                   </div>
                   <DataBadge variant="outline" className="text-[8px] font-mono opacity-60">
                      {matrix.badge}
                   </DataBadge>
                </div>
                <div>
                   <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">{matrix.name}</div>
                   <TerminalCardTitle className="text-3xl font-black text-white">{matrix.asset}</TerminalCardTitle>
                </div>
              </TerminalCardHeader>

              <TerminalCardContent className="flex-1 space-y-8">
                <p className="text-sm text-text-secondary leading-relaxed h-12">
                  {matrix.description}
                </p>

                <div className="space-y-4">
                   <p className="text-[10px] font-bold text-white uppercase tracking-widest">Protocol Features</p>
                   <ul className="space-y-3">
                      {matrix.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-xs text-text-muted group-hover:text-text-secondary transition-colors">
                           <div className={cn("w-1 h-1 rounded-full", matrix.color.replace('text-', 'bg-'))} />
                           {f}
                        </li>
                      ))}
                   </ul>
                </div>

                <div className="pt-6 border-t border-white/5 mt-auto space-y-6">
                   <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">{matrix.price}</span>
                      <span className="text-[10px] font-bold text-text-muted uppercase">One-Time Access</span>
                   </div>
                   <InstitutionalButton 
                      glow={matrix.featured} 
                      variant={matrix.featured ? "primary" : "outline"}
                      className="w-full"
                      onClick={() => window.location.href = `/checkout?item=${matrix.asset.toLowerCase().replace('the ', '').replace(' matrix', '')}`}
                   >
                      {matrix.btnLabel}
                   </InstitutionalButton>
                </div>
              </TerminalCardContent>
            </TerminalCard>
          </motion.div>
        ))}
      </div>

      {/* Global Matrix / Bundle CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="relative group cursor-pointer"
        onClick={() => window.location.href = '/checkout?item=bundle_mastery'}
      >
         <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 via-pass-green/20 to-accent-blue/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
         <TerminalCard className="border-accent-blue/40 bg-accent-blue/5 overflow-hidden">
            <TerminalCardContent className="p-12 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="space-y-2 text-center md:text-left">
                  <DataBadge variant="profit" className="mb-4">ULTIMATE_ACCESS</DataBadge>
                  <h3 className="text-3xl font-black text-white tracking-tighter uppercase">The Mastery Bundle</h3>
                  <p className="text-text-secondary max-w-xl">The Complete Institutional Desk. Access all three global markets simultaneously.</p>
               </div>
               <div className="flex flex-col items-center md:items-end gap-4">
                  <div className="text-5xl font-black text-white">$750</div>
                  <InstitutionalButton glow size="lg" onClick={() => window.location.href = '/checkout?item=bundle_mastery'}>ACCESS THE INSTITUTIONAL DESK</InstitutionalButton>
               </div>
            </TerminalCardContent>
         </TerminalCard>
      </motion.div>
    </section>
  );
}

