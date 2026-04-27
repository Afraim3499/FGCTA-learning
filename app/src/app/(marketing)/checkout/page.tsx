"use client";

import { useSearchParams } from "next/navigation";
import { TerminalCard, TerminalCardContent, TerminalCardHeader, TerminalCardTitle } from "@/components/ui/terminal-card";
import { DataBadge } from "@/components/ui/data-badge";
import { InstitutionalButton } from "@/components/ui/institutional-button";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Wallet, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, Suspense } from "react";
import { cn } from "@/lib/utils";

// useSearchParams() must live inside a child component wrapped in <Suspense>
function CheckoutContent() {
  const searchParams = useSearchParams();
  const item = searchParams.get("item") || "bundle_mastery";
  const [step, setStep] = useState(1);

  const itemDetails: Record<string, { title: string; price: string; description: string }> = {
    forex: { title: "The Forex Matrix", price: "$300", description: "Master Global Macro and Central Bank Order Flow." },
    crypto: { title: "The Crypto Matrix", price: "$300", description: "Master On-Chain Analytics and DeFi Yield Rotation." },
    gold: { title: "The Gold Matrix", price: "$300", description: "Master Real Yields and COMEX Arbitrage." },
    bundle_mastery: { title: "The Mastery Bundle", price: "$750", description: "Full Institutional Desk Access. All 3 Matrices included." }
  };

  const selectedItem = itemDetails[item] || itemDetails.bundle_mastery;

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <DataBadge variant="outline" className="text-accent-blue">SECURE_GATEWAY_V4</DataBadge>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Order Summary</h1>
          </div>

          <TerminalCard className="border-accent-blue/20 bg-accent-blue/5">
            <TerminalCardHeader className="border-b border-white/5 pb-6">
               <div className="flex justify-between items-start">
                  <div>
                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Institutional Deployment</div>
                    <TerminalCardTitle className="text-2xl font-black text-white">{selectedItem.title}</TerminalCardTitle>
                  </div>
                  <div className="text-3xl font-black text-white">{selectedItem.price}</div>
               </div>
            </TerminalCardHeader>
            <TerminalCardContent className="pt-6 space-y-6">
               <p className="text-sm text-text-secondary leading-relaxed">
                 {selectedItem.description}
               </p>
               <ul className="space-y-3">
                  {[
                    "Lifetime Terminal Access",
                    "All Tier 1-8 Modules Included",
                    "Proprietary Simulation Engines",
                    "Institutional Certification Track"
                  ].map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-xs text-text-muted">
                       <CheckCircle2 size={14} className="text-pass-green" />
                       {feature}
                    </li>
                  ))}
               </ul>
               <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-sm font-bold text-white uppercase">Total Due</span>
                  <span className="text-3xl font-black text-accent-blue">{selectedItem.price}</span>
               </div>
            </TerminalCardContent>
          </TerminalCard>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
             <ShieldCheck className="text-pass-green" size={24} />
             <div>
                <p className="text-[10px] font-bold text-white uppercase">Encrypted Transaction</p>
                <p className="text-[9px] text-text-muted">Your deployment is secured via 256-bit institutional grade encryption.</p>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Auth & Payment */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 mb-8">
             <div className={cn("flex-1 h-1 rounded-full", step >= 1 ? "bg-accent-blue" : "bg-white/10")} />
             <div className={cn("flex-1 h-1 rounded-full", step >= 2 ? "bg-accent-blue" : "bg-white/10")} />
          </div>

          {step === 1 ? (
            <div className="space-y-8">
               <div className="space-y-2">
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Step 01: Operator Identity</h2>
                  <p className="text-text-muted text-sm font-medium">Create your credentials to access the terminal.</p>
               </div>
               
               <div className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Email Address</label>
                     <input 
                        type="email" 
                        placeholder="operator@institutional.desk"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 transition-colors"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Create Password</label>
                     <input 
                        type="password" 
                        placeholder="••••••••••••"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 transition-colors"
                     />
                  </div>
               </div>

               <InstitutionalButton size="lg" glow className="w-full" onClick={() => setStep(2)}>
                  CONTINUE TO DEPLOYMENT
                  <ArrowRight className="ml-2" size={20} />
               </InstitutionalButton>
            </div>
          ) : step === 2 ? (
            <div className="space-y-8">
               <div className="space-y-2">
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Step 02: Capital Deployment</h2>
                  <p className="text-text-muted text-sm font-medium">Select your preferred funding method.</p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <button className="p-6 rounded-2xl border border-accent-blue/40 bg-accent-blue/5 flex flex-col items-center gap-3 group hover:bg-accent-blue/10 transition-all">
                     <CreditCard className="text-accent-blue" size={32} />
                     <span className="text-[10px] font-bold text-white uppercase">Stripe_Secure</span>
                  </button>
                  <button className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center gap-3 group hover:border-pass-green/40 hover:bg-pass-green/5 transition-all">
                     <Wallet className="text-text-muted group-hover:text-pass-green" size={32} />
                     <span className="text-[10px] font-bold text-white uppercase">Web3_Connect</span>
                  </button>
               </div>

               <div className="space-y-4 pt-4">
                  <p className="text-[10px] font-bold text-text-muted uppercase text-center">Protected by Stripe &amp; AES-256</p>
                  <InstitutionalButton size="lg" glow className="w-full" onClick={() => setStep(3)}>
                     FINALIZE DEPLOYMENT
                  </InstitutionalButton>
               </div>

               <button onClick={() => setStep(1)} className="w-full text-[10px] font-bold text-text-muted uppercase hover:text-white transition-colors">
                  Modify Operator Details
               </button>
            </div>
          ) : (
            <div className="space-y-10 text-center animate-in zoom-in-95 duration-500">
               <div className="w-24 h-24 rounded-full bg-pass-green/10 border border-pass-green/20 flex items-center justify-center text-pass-green mx-auto shadow-[0_0_50px_rgba(0,255,0,0.1)]">
                  <CheckCircle2 size={48} />
               </div>
               <div className="space-y-3">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Capital Deployed</h2>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                     Institutional credentials generated. Your terminal access is now active.
                  </p>
               </div>
               <div className="p-4 bg-white/5 border border-white/5 rounded-2xl font-mono text-[10px] text-accent-blue">
                  TX_HASH: 0x{Math.random().toString(16).substring(2, 12)}...{Math.random().toString(16).substring(2, 6)}
               </div>
               <InstitutionalButton size="lg" glow className="w-full" onClick={() => window.location.href = '/dashboard'}>
                  ENTER THE TERMINAL
               </InstitutionalButton>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
