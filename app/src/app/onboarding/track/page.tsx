"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Bitcoin, Coins, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { saveOnboardingData } from "@/lib/auth-actions";
import { cn } from "@/lib/utils";

const TRACKS = [
  {
    id: "FOREX",
    name: "Forex Logic",
    desc: "Master global liquidity and currency fluctuations.",
    icon: Globe,
    color: "text-blue-400",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]"
  },
  {
    id: "CRYPTO",
    name: "Crypto Sentinel",
    desc: "Harness extreme volatility and decentralized data.",
    icon: Bitcoin,
    color: "text-orange-400",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.2)]"
  },
  {
    id: "GOLD",
    name: "Metal Titan",
    desc: "Leverage commodity stability and inflation hedges.",
    icon: Coins,
    color: "text-amber-400",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.2)]"
  }
];

export default function TrackSelectionPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const router = useRouter();

  const handleInitialize = async () => {
    if (!selected) return;
    setIsSyncing(true);
    
    try {
      await saveOnboardingData({ marketTrack: selected, experienceLevel: "CANDIDATE" });
      // Simulate Logic sync for 2 seconds
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (err) {
      setIsSyncing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-primary)] text-white flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[var(--color-brand-500)]/5 blur-[120px] rounded-full pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isSyncing ? (
          <motion.div 
            key="selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-5xl w-full space-y-16 text-center relative z-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Step 02: Deployment</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">Choose Your Battlefield.</h1>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
                Your evaluation will be tailored to the specific liquidity patterns and risk profiles of your chosen market Logic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TRACKS.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setSelected(track.id)}
                  className={cn(
                    "p-10 rounded-[3rem] border transition-all duration-500 text-left space-y-6 relative group overflow-hidden",
                    selected === track.id 
                      ? "bg-[var(--color-surface-secondary)] border-[var(--color-brand-500)]/40 " + track.glow
                      : "bg-white/5 border-white/5 hover:border-white/20"
                  )}
                >
                  <div className={cn(
                    "w-16 h-16 rounded-3xl flex items-center justify-center shadow-inner transition-transform duration-500 group-hover:scale-110",
                    selected === track.id ? "bg-[var(--color-brand-500)]/10 " + track.color : "bg-white/5 text-[var(--color-text-muted)]"
                  )}>
                    <track.icon size={32} />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-white tracking-tight">{track.name}</h4>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{track.desc}</p>
                  </div>
                  {selected === track.id && (
                    <div className="absolute bottom-6 right-6 text-[var(--color-brand-400)]">
                      <ShieldCheck size={24} />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-8">
              <button
                disabled={!selected}
                onClick={handleInitialize}
                className={cn(
                  "px-16 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 mx-auto group shadow-2xl",
                  selected 
                    ? "bg-white text-black hover:bg-white/90 active:scale-[0.98]" 
                    : "bg-white/5 text-[var(--color-text-muted)] cursor-not-allowed"
                )}
              >
                Initialize Path
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="sync"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center space-y-8 text-center"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white/5 flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-[var(--color-brand-500)] animate-spin" />
              </div>
              <div className="absolute inset-0 bg-[var(--color-brand-500)]/20 blur-2xl animate-pulse" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Initializing Path...</h2>
              <p className="text-[var(--color-text-muted)] font-mono text-xs tracking-widest uppercase">
                Initializing Mission Hub • Enforcing Risk Rules
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
