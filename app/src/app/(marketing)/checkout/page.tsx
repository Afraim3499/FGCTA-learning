"use client";

import { useSearchParams } from "next/navigation";
import { AcademyCard, AcademyCardContent, AcademyCardHeader, AcademyCardTitle } from "@/components/ui/academy-card";
import { DataBadge } from "@/components/ui/data-badge";
import { AcademyButton } from "@/components/ui/academy-button";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Wallet, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, Suspense, useEffect } from "react";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";

// useSearchParams() must live inside a child component wrapped in <Suspense>
function CheckoutContent() {
  const [user, setUser] = useState<any>(null);
  const searchParams = useSearchParams();
  const item = searchParams.get("item") || searchParams.get("track") || "bundle_mastery";
  const [step, setStep] = useState(1);

  useEffect(() => {
    async function checkUser() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setStep(2);
      }
    }
    checkUser();
  }, []);

  const itemDetails: Record<string, { title: string; price: string; description: string }> = {
    forex: { title: "The Forex Matrix", price: "$300", description: "Master Global Macro and Market Order Flow." },
    crypto: { title: "The Crypto Matrix", price: "$300", description: "Master On-Chain Analytics and Market Structure." },
    gold: { title: "The Gold Matrix", price: "$300", description: "Master Real Yields and Market Dynamics." },
    bundle_mastery: { title: "The Mastery Bundle", price: "$750", description: "Full Academy Access. All 3 courses included." }
  };

  const selectedItem = itemDetails[item] || itemDetails.bundle_mastery;

  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <DataBadge variant="outline" className="text-[var(--ln-teal-500)] border-[var(--ln-teal-500)]/20 bg-[var(--ln-teal-soft)]">Secure Enrollment</DataBadge>
            <h1 className="text-4xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tighter">Order Summary</h1>
          </div>

          <AcademyCard className="border-[var(--ln-teal-500)]/10 bg-[var(--ln-teal-soft)]/30">
            <AcademyCardHeader className="border-b border-[var(--ln-border)] pb-6">
               <div className="flex justify-between items-start">
                  <div>
                    <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Academy Enrollment</div>
                    <AcademyCardTitle className="text-2xl font-extrabold text-[var(--ln-navy-900)]">{selectedItem.title}</AcademyCardTitle>
                  </div>
                  <div className="text-3xl font-extrabold text-[var(--ln-navy-900)]">{selectedItem.price}</div>
               </div>
            </AcademyCardHeader>
            <AcademyCardContent className="pt-6 space-y-6">
               <p className="text-sm text-[var(--ln-text-secondary)] leading-relaxed font-medium">
                 {selectedItem.description}
               </p>
               <ul className="space-y-3">
                  {[
                    "Full Curriculum Access",
                    "All Learning Modules Included",
                    "Practice Environments",
                    "Academy Learning Record Path"
                  ].map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                       <CheckCircle2 size={14} className="text-[var(--ln-teal-500)]" />
                       {feature}
                    </li>
                  ))}
               </ul>
               <div className="pt-6 border-t border-[var(--ln-border)] flex justify-between items-center">
                  <span className="text-sm font-extrabold text-[var(--ln-navy-900)] uppercase">Total Due</span>
                  <span className="text-3xl font-extrabold text-[var(--ln-teal-600)]">{selectedItem.price}</span>
               </div>
            </AcademyCardContent>
          </AcademyCard>

          <div className="flex items-center gap-4 p-5 rounded-[2rem] bg-slate-50 border border-[var(--ln-border)]">
             <ShieldCheck className="text-[var(--ln-teal-500)]" size={24} />
             <div>
                <p className="text-[10px] font-extrabold text-[var(--ln-navy-900)] uppercase">Encrypted Transaction</p>
                <p className="text-[9px] text-slate-400 font-medium tracking-tight">Your enrollment is secured via enterprise-grade encryption.</p>
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
             <div className={cn("flex-1 h-1 rounded-full transition-all", step >= 1 ? "bg-[var(--ln-teal-500)]" : "bg-slate-100")} />
             <div className={cn("flex-1 h-1 rounded-full transition-all", step >= 2 ? "bg-[var(--ln-teal-500)]" : "bg-slate-100")} />
          </div>

          {step === 1 ? (
            <div className="space-y-8">
               <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tighter">Step 01: Account Details</h2>
                  <p className="text-slate-500 text-sm font-medium">Create your credentials to access the academy.</p>
               </div>
               
               <div className="space-y-5">
                  <div className="space-y-2">
                     <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                     <input 
                        type="email" 
                        placeholder="student@lurnava.com"
                        className="w-full bg-slate-50 border border-[var(--ln-border)] rounded-2xl px-5 py-4 text-[var(--ln-navy-900)] focus:outline-none focus:border-[var(--ln-teal-500)]/50 transition-all font-medium"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">Create Password</label>
                     <input 
                        type="password" 
                        placeholder="••••••••••••"
                        className="w-full bg-slate-50 border border-[var(--ln-border)] rounded-2xl px-5 py-4 text-[var(--ln-navy-900)] focus:outline-none focus:border-[var(--ln-teal-500)]/50 transition-all font-medium"
                     />
                  </div>
               </div>

               <AcademyButton size="lg" glow className="w-full h-16 rounded-[1.5rem]" onClick={() => setStep(2)}>
                  CONTINUE TO PAYMENT
                  <ArrowRight className="ml-2" size={20} />
               </AcademyButton>
            </div>
          ) : step === 2 ? (
            <div className="space-y-8">
               <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tighter">Step 02: Secure Payment</h2>
                  <p className="text-slate-500 text-sm font-medium">Select your preferred payment method.</p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={async () => {
                      try {
                        const response = await fetch("/api/checkout", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ track: item }),
                        });
                        const data = await response.json();
                        if (data.url) {
                          window.location.href = data.url;
                        }
                      } catch (err) {
                        console.error("Checkout error:", err);
                      }
                    }}
                    className="p-8 rounded-[2.5rem] border border-[var(--ln-teal-500)]/40 bg-[var(--ln-teal-soft)] flex flex-col items-center gap-3 group hover:bg-[var(--ln-teal-500)]/10 transition-all shadow-sm"
                  >
                     <CreditCard className="text-[var(--ln-teal-500)]" size={32} />
                     <span className="text-[10px] font-extrabold text-[var(--ln-navy-900)] uppercase">Secure Stripe</span>
                  </button>
                  <button className="p-8 rounded-[2.5rem] border border-[var(--ln-border)] bg-white flex flex-col items-center gap-3 group hover:border-[var(--ln-teal-500)]/40 hover:bg-[var(--ln-teal-soft)]/30 transition-all shadow-sm">
                     <Wallet className="text-slate-400 group-hover:text-[var(--ln-teal-500)]" size={32} />
                     <span className="text-[10px] font-extrabold text-[var(--ln-navy-900)] uppercase">Web3 Connect</span>
                  </button>
               </div>

               <div className="space-y-4 pt-4">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase text-center tracking-widest">Protected by Stripe &amp; AES-256</p>
                  <AcademyButton size="lg" glow className="w-full h-16 rounded-[1.5rem]" onClick={() => setStep(3)}>
                     COMPLETE ENROLLMENT
                  </AcademyButton>
               </div>

               <button onClick={() => setStep(1)} className="w-full text-[10px] font-extrabold text-slate-400 uppercase hover:text-[var(--ln-navy-900)] transition-colors tracking-widest">
                  Modify Account Details
               </button>
            </div>
          ) : (
            <div className="space-y-10 text-center animate-in zoom-in-95 duration-500">
               <div className="w-24 h-24 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20 flex items-center justify-center text-[var(--ln-teal-500)] mx-auto shadow-sm">
                  <CheckCircle2 size={48} />
               </div>
               <div className="space-y-3">
                  <h2 className="text-3xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tighter">Enrollment Successful</h2>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto font-medium">
                     Academy records generated. Your learning environment is now active.
                  </p>
               </div>
               <div className="p-4 bg-slate-50 border border-[var(--ln-border)] rounded-2xl font-mono text-[10px] text-[var(--ln-teal-600)] font-bold">
                  REC_ID: {Math.random().toString(36).substring(2, 12).toUpperCase()}
               </div>
               <AcademyButton size="lg" glow className="w-full h-16 rounded-[1.5rem]" onClick={() => window.location.href = '/dashboard'}>
                  ACCESS DASHBOARD
               </AcademyButton>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-[var(--ln-navy-900)]">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
