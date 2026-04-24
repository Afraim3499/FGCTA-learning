"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useOnboardingStore } from "@/lib/stores";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { MarketTrack } from "@/types";
import { Shield, Globe, Bitcoin, Coins, ArrowRight, Loader2, ChevronLeft, Target, AlertTriangle, ShieldCheck } from "lucide-react";
import { saveOnboardingData } from "@/lib/auth-actions";
import { cn } from "@/lib/utils";
import { useUser } from "@/components/user-provider";

const GOALS = [
  { id: "CAPITAL", name: "Capital Growth", sub: "Scale simulation equity to $10,000 via performance." },
  { id: "INCOME", name: "Yield Generation", sub: "Establish a consistent, rule-based secondary income." },
  { id: "CAREER", name: "Institutional Path", sub: "Build a professional track record for certification." },
];

const TRACKS = [
  { id: "forex" as MarketTrack, name: "Forex Protocol", description: "Global macro trends and currency liquidity.", icon: Globe, color: "text-blue-400" },
  { id: "crypto" as MarketTrack, name: "Crypto Sentinel", description: "Digital asset volatility and on-chain cycles.", icon: Bitcoin, color: "text-orange-400" },
  { id: "gold" as MarketTrack, name: "Metal Titan", description: "Commodity stability and inflation protection.", icon: Coins, color: "text-amber-400" },
];

const EXPERIENCE = [
  { id: "RECRUIT", name: "Recruit", sub: "New to the protocol. Require full foundational training." },
  { id: "CANDIDATE", name: "Candidate", sub: "Prior market exposure. Seeking institutional edge." },
  { id: "OPERATOR", name: "Operator", sub: "Regular execution history. Validating advanced strategies." },
];

const RULES = [
  { title: "Risk First", desc: "No trade can be executed without a predefined Stop Loss." },
  { title: "Performance Based", desc: "Progression is earned through results, not time spent." },
  { title: "No Shortcuts", desc: "The system enforces discipline. Rule violations reset progress." },
];

export default function OnboardingPage() {
  const user = useUser();
  const { step, marketTrack, experienceLevel, setStep, setMarketTrack, setExperienceLevel } = useOnboardingStore();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFinish = async () => {
    setIsSubmitting(true);
    try {
      await saveOnboardingData({
        marketTrack,
        experienceLevel: experienceLevel || "RECRUIT"
      });
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
                <Target size={12} className="text-[var(--color-brand-400)]" /> Step 01: Objectives
              </div>
              <h1 className="text-5xl font-bold text-white tracking-tighter">Primary Operational Goal</h1>
              <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">Define your primary objective within the Elite Trading Academy environment.</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              {GOALS.map((goal) => (
                <button key={goal.id} onClick={() => { 
                  setSelectedGoal(goal.id); 
                  // If user already has a track (purchased), skip track selection step
                  if (user?.marketTrack && user.marketTrack !== "multi") {
                    setMarketTrack(user.marketTrack);
                    setStep(3);
                  } else {
                    setStep(2);
                  }
                }} className="w-full p-8 text-left rounded-[2rem] border bg-white/5 border-white/5 hover:border-white/10 transition-all flex items-center justify-between group">
                  <div className="space-y-1"><h3 className="font-bold text-white uppercase tracking-tight">{goal.name}</h3><p className="text-xs text-[var(--color-text-muted)]">{goal.sub}</p></div>
                  <ArrowRight size={20} className="text-white/10 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
            <div className="text-center space-y-4">
              <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest hover:text-white transition-colors">
                <ChevronLeft size={14} /> Back to Objectives
              </button>
              <h1 className="text-5xl font-bold text-white tracking-tighter">Market Protocol</h1>
              <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">Choose the liquidity environment where you will perform your evaluation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TRACKS.map((track) => (
                <button key={track.id} onClick={() => { setMarketTrack(track.id); setStep(3); }} className={cn("p-8 text-left rounded-[2rem] border transition-all relative group overflow-hidden", marketTrack === track.id ? "bg-[var(--color-surface-secondary)] border-[var(--color-brand-500)]/40 shadow-2xl" : "bg-white/5 border-white/5 hover:border-white/20")}>
                  <div className="space-y-6 relative z-10"><div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5", track.color)}><track.icon size={24} /></div><div><h3 className="font-bold text-white tracking-tight uppercase text-sm mb-1">{track.name}</h3><p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{track.description}</p></div></div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
            <div className="text-center space-y-4">
              <button onClick={() => setStep(2)} className="inline-flex items-center gap-2 text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest hover:text-white transition-colors">
                <ChevronLeft size={14} /> Back to Protocols
              </button>
              <h1 className="text-5xl font-bold text-white tracking-tighter">Clearance Level</h1>
              <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">Synchronize your initial training baseline based on your experience.</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              {EXPERIENCE.map((exp) => (
                <button key={exp.id} onClick={() => { setExperienceLevel(exp.id); setStep(4); }} className={cn("w-full p-8 text-left rounded-[2rem] border transition-all flex items-center justify-between group", experienceLevel === exp.id ? "bg-[var(--color-surface-secondary)] border-[var(--color-brand-500)]/40 shadow-2xl" : "bg-white/5 border-white/5 hover:border-white/10")}>
                  <div className="space-y-1"><h3 className="font-bold text-white uppercase tracking-tight">{exp.name}</h3><p className="text-xs text-[var(--color-text-muted)]">{exp.sub}</p></div>
                  <ArrowRight size={20} className="text-white/10 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] font-bold text-rose-500 uppercase tracking-widest">
                <AlertTriangle size={12} /> Final Verification
              </div>
              <h1 className="text-5xl font-bold text-white tracking-tighter">Rules of Engagement</h1>
              <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">By proceeding, you acknowledge the institutional constraints of the system.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {RULES.map((rule) => (
                <div key={rule.title} className="p-8 bg-white/5 border border-white/5 rounded-3xl space-y-4">
                  <ShieldCheck className="text-[var(--color-brand-400)]" size={24} />
                  <h4 className="font-bold text-white uppercase tracking-tight">{rule.title}</h4>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button disabled={isSubmitting} onClick={handleFinish} className="px-16 py-5 bg-white text-black font-bold rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all flex items-center gap-4 group shadow-2xl">
                {isSubmitting ? <Loader2 className="animate-spin" /> : "I Accept & Initialize"}
                {!isSubmitting && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-16 flex justify-center gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={cn("h-1 rounded-full transition-all duration-500", step === i ? "w-12 bg-[var(--color-brand-500)] shadow-[0_0_10px_rgba(99,102,241,0.5)]" : "w-3 bg-white/10")} />
        ))}
      </div>
    </div>
  );
}
