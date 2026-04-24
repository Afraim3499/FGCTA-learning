"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Star, 
  Lock, 
  Eye, 
  Zap, 
  Trophy,
  Target,
  BarChart3,
  Cpu,
  MousePointer2,
  Sparkles,
  X
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

function MathRow({ label, value, target, status }: { label: string, value: string, target: string, status: "pass" | "fail" }) {
  return (
    <div className="flex items-center justify-between text-[11px]">
      <div className="flex items-center gap-2">
        {status === "pass" ? <Check size={10} className="text-[var(--color-profit)]" /> : <X size={10} className="text-rose-500" />}
        <span className="text-white/60 font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2 font-mono">
        <span className={cn("font-bold", status === "pass" ? "text-[var(--color-profit)]" : "text-rose-400")}>{value}</span>
        <span className="text-white/20">/ {target}</span>
      </div>
    </div>
  );
}

/* ── Interactive Components ── */

/**
 * A draggable candlestick builder.
 * User drags the price points to match a target candle description.
 */
function CandlestickBuilder({ target, onComplete }: { target: string, onComplete: () => void }) {
  const [h, setH] = useState(120);
  const [o, setO] = useState(100);
  const [c, setC] = useState(80);
  const [l, setL] = useState(60);
  const [submitted, setSubmitted] = useState(false);

  // Mathematical Calculations
  const bodySize = Math.abs(o - c) || 1;
  const lowerWick = Math.max(0, Math.min(o, c) - l);
  const upperWick = Math.max(0, h - Math.max(o, c));
  const totalRange = h - l || 1;
  
  const wickToBodyRatio = (lowerWick / bodySize).toFixed(1);
  const upperWickPercent = ((upperWick / totalRange) * 100).toFixed(0);
  const bodyPosition = (((Math.max(o, c) - l) / totalRange) * 100).toFixed(0);

  const isCorrect = useMemo(() => {
    if (target === "Bullish Hammer") {
      return c > o && parseFloat(wickToBodyRatio) >= 2 && parseInt(bodyPosition) >= 75 && parseInt(upperWickPercent) <= 15;
    }
    if (target === "Bearish Marubozu") {
      // Logic: Close < Open (Red), Body > 90% of total range (bald)
      return o > c && (bodySize / totalRange) >= 0.90 && upperWick < 2 && lowerWick < 2;
    }
    return false;
  }, [c, o, wickToBodyRatio, bodyPosition, upperWickPercent, bodySize, totalRange, target, upperWick, lowerWick]);

  const getErrorMessage = () => {
    if (target === "Bullish Hammer") {
      if (c <= o) return "Ratios are correct, but a Bullish Hammer MUST close green (Close > Open) to show buyer conviction.";
      if (parseFloat(wickToBodyRatio) < 2) return "The lower wick is too short. Institutional hammers require a wick-to-body ratio of at least 2.0x.";
      if (parseInt(bodyPosition) < 75) return "The body is too low in the range. It must be in the top 25% of the total price action.";
      if (parseInt(upperWickPercent) > 15) return "Too much upper wick. This shows selling pressure at the top, which invalidates the hammer.";
    }
    if (target === "Bearish Marubozu") {
      if (o <= c) return "A Bearish Marubozu must be RED (Close < Open) to show selling dominance.";
      if ((bodySize / totalRange) < 0.90) return "A Marubozu means 'bald'. It should have almost no wicks. The body must dominate >90% of the range.";
    }
    return "The pattern does not meet institutional requirements. Review the HUD analysis.";
  };

  return (
    <div className="space-y-8 p-8 bg-white/[0.02] border border-white/5 rounded-3xl relative overflow-hidden">
      {/* Background Math Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="text-center space-y-2 relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Precision Task</p>
        <h3 className="text-xl font-bold">Build a {target}</h3>
        <p className="text-xs text-[var(--color-text-muted)] italic">Institutional traders use specific ratios to confirm entry.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
        {/* Sliders */}
        <div className="md:col-span-4 space-y-6">
          <PriceSlider label="High" val={h} setVal={setH} min={Math.max(o, c)} max={150} color="text-white" />
          <PriceSlider label="Open" val={o} setVal={setO} min={l} max={h} color="text-blue-400" />
          <PriceSlider label="Close" val={c} setVal={setC} min={l} max={h} color="text-amber-400" />
          <PriceSlider label="Low" val={l} setVal={setL} min={0} max={Math.min(o, c)} color="text-white" />
        </div>

        {/* Visualizer */}
        <div className="md:col-span-3 flex justify-center items-center">
          <div className="w-24 h-64 bg-black/40 border border-white/5 rounded-2xl relative flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-10 pointer-events-none">
              {[140, 120, 100, 80, 60, 40].map(v => <div key={v} className="border-t border-white text-[8px] font-mono">{v}</div>)}
            </div>
            <motion.div className="relative w-10" layout>
              <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-white/40" style={{ top: `${150 - h}px`, height: `${h - l}px` }} />
              <motion.div 
                className={cn("absolute left-0 w-full rounded-sm border", c >= o ? "bg-[var(--color-profit)] border-[var(--color-profit)]/50 shadow-[0_0_20px_rgba(16,185,129,0.4)]" : "bg-rose-500 border-rose-500/50 shadow-[0_0_20px_rgba(239,68,68,0.4)]")}
                style={{ top: `${150 - Math.max(o, c)}px`, height: `${Math.abs(o - c)}px` }}
              />
            </motion.div>
          </div>
        </div>

        {/* Real-time Math HUD */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 bg-white/[0.03] border border-white/5 rounded-2xl space-y-4">
            <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">Live Pattern Analysis</p>
            
            {target === "Bullish Hammer" ? (
              <>
                <MathRow label="Wick:Body Ratio" value={`${wickToBodyRatio}x`} target="> 2.0x" status={parseFloat(wickToBodyRatio) >= 2 ? "pass" : "fail"} />
                <MathRow label="Upper Wick %" value={`${upperWickPercent}%`} target="< 15%" status={parseInt(upperWickPercent) <= 15 ? "pass" : "fail"} />
                <MathRow label="Body Placement" value={`${bodyPosition}%`} target="> 75%" status={parseInt(bodyPosition) >= 75 ? "pass" : "fail"} />
                <MathRow label="Bullish Close" value={c > o ? "GREEN" : "RED"} target="GREEN" status={c > o ? "pass" : "fail"} />
              </>
            ) : (
              <>
                <MathRow label="Body Dominance" value={`${((bodySize / totalRange) * 100).toFixed(0)}%`} target="> 90%" status={(bodySize / totalRange) >= 0.90 ? "pass" : "fail"} />
                <MathRow label="Upper Wick" value={`${upperWick.toFixed(0)} pts`} target="< 2 pts" status={upperWick < 2 ? "pass" : "fail"} />
                <MathRow label="Lower Wick" value={`${lowerWick.toFixed(0)} pts`} target="< 2 pts" status={lowerWick < 2 ? "pass" : "fail"} />
                <MathRow label="Bearish Close" value={o > c ? "RED" : "GREEN"} target="RED" status={o > c ? "pass" : "fail"} />
              </>
            )}
            
            <div className="pt-4 border-t border-white/5">
              <div className={cn("text-[10px] font-bold p-2 rounded-lg text-center transition-colors", 
                (target === "Bullish Hammer" && c > o) || (target === "Bearish Marubozu" && o > c) ? "text-[var(--color-profit)] bg-[var(--color-profit)]/5" : "text-rose-400 bg-rose-500/5")}>
                Sentiment: {target === "Bullish Hammer" ? (c > o ? "BULLISH CONVICTION" : "BEARISH REJECTION") : (o > c ? "INSTITUTIONAL SELL-OFF" : "BULLISH ABSORPTION")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4 relative z-10">
        {submitted ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={cn("text-sm font-bold p-4 rounded-xl w-full text-center", isCorrect ? "bg-[var(--color-profit)]/10 text-[var(--color-profit)]" : "bg-rose-500/10 text-rose-400")}>
            {isCorrect ? "Perfect! That is exactly how an institutional trader identifies that pattern." : getErrorMessage()}
            {isCorrect && (
              <button onClick={onComplete} className="mt-4 block w-full py-3 bg-white text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-all">
                Advance Lesson →
              </button>
            )}
            {!isCorrect && <button onClick={() => setSubmitted(false)} className="mt-2 text-xs underline opacity-60">Try again</button>}
          </motion.div>
        ) : (
          <button onClick={() => setSubmitted(true)} className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all uppercase tracking-widest text-xs">
            Verify Pattern Logic
          </button>
        )}
      </div>
    </div>
  );
}

function PriceSlider({ label, val, setVal, min, max, color }: any) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
        <span className="text-white/40">{label}</span>
        <span className={color}>${val}</span>
      </div>
      <input type="range" min={min} max={max} value={val} onChange={(e) => setVal(parseInt(e.target.value))} className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white" />
    </div>
  );
}

/* ── Lesson Content ── */

const miniLesson = [
  {
    type: "teach",
    title: "The DNA of a Trade",
    content: "Trading isn't guessing. It's reading the balance of power between buyers and sellers. That story is told in 'Candlesticks'.",
    bullets: ["Body: Where the fight happened", "Wicks: Where price was rejected", "Color: Who won the battle"],
    icon: <Cpu className="text-[var(--color-brand-400)]" />
  },
  {
    type: "task",
    title: "Pattern Construction",
    target: "Bullish Hammer",
    taskType: "build"
  },
  {
    type: "quiz",
    question: "You see a massive upper wick on a green candle. What does this reveal about institutional sentiment?",
    options: [
      { label: "Buyers are in total control", correct: false, why: "No. A long upper wick means buyers TRIED to push up, but were met with overwhelming selling pressure." },
      { label: "Supply is entering the market and rejecting higher prices", correct: true, why: "Correct. This is a sign of 'Distribution'. Institutions are selling into the rally." },
      { label: "Price is about to moon", correct: false, why: "Usually the opposite. Rejection at the top suggests a potential reversal or pullback." }
    ]
  },
  {
    type: "task",
    title: "Momentum Identification",
    target: "Bearish Marubozu",
    taskType: "build"
  }
];

export default function FreeTrialPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [xp, setXp] = useState(0);

  const slide = miniLesson[step];
  const progress = ((step + 1) / miniLesson.length) * 100;

  return (
    <div className="min-h-screen bg-[#05070A] text-white selection:bg-[var(--color-brand-500)]/30">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--color-brand-500)]/5 blur-[200px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Sparkles size={14} className="text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text-muted)]">Interactive Module v1.0</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
            Stop Reading. <br/> <span className="text-[var(--color-brand-400)]">Start Executing.</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto font-medium">
            This isn&apos;t a static page. It&apos;s a live environment. Prove you can read the market before we give you full access.
          </p>
        </div>
      </section>

      {/* Main Experience */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Interactive Hub */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {!started && !complete && (
              <motion.div key="intro" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                className="p-12 bg-[#0A0D12] border border-white/10 rounded-[3rem] text-center space-y-10 shadow-2xl">
                <div className="w-24 h-24 rounded-3xl bg-[var(--color-brand-500)]/10 border border-[var(--color-brand-500)]/20 flex items-center justify-center mx-auto">
                  <Target size={40} className="text-[var(--color-brand-400)]" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black tracking-tighter uppercase italic">Phase 1: Market DNA</h2>
                  <p className="text-[var(--color-text-secondary)]">Master the core language of price action. Complete this module to unlock your L0 Certification track.</p>
                </div>
                <div className="flex items-center justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-2"><BarChart3 size={14}/> 4 Tasks</span>
                  <span className="flex items-center gap-2"><Trophy size={14}/> 200 XP</span>
                </div>
                <button onClick={() => setStarted(true)} className="w-full py-6 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-[var(--color-brand-400)] hover:text-white transition-all group">
                  Enter Interactive Session
                </button>
              </motion.div>
            )}

            {started && !complete && (
              <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                {/* Progress HUD */}
                <div className="flex items-center gap-6 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-[var(--color-brand-500)] shadow-[0_0_10px_rgba(99,102,241,0.5)]" animate={{ width: `${progress}%` }} />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-amber-400 uppercase tracking-widest">
                    <Zap size={14} /> {xp} XP
                  </div>
                </div>

                {/* Step Content */}
                {slide.type === "teach" && (
                  <div className="p-10 bg-[#0A0D12] border border-white/10 rounded-[2.5rem] space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">{slide.icon}</div>
                      <h3 className="text-2xl font-black tracking-tighter uppercase italic">{slide.title}</h3>
                    </div>
                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">{slide.content}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {slide.bullets?.map(b => (
                        <li key={b} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl text-xs font-bold border border-white/5">
                          <Check className="text-[var(--color-profit)]" size={14} /> {b}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => { setStep(s => s + 1); setXp(x => x + 25); }} className="w-full py-5 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-white/90 transition-all">
                      Got it. Next →
                    </button>
                  </div>
                )}

                {slide.type === "task" && slide.taskType === "build" && (
                  <CandlestickBuilder target={slide.target!} onComplete={() => {
                    if (step < miniLesson.length - 1) {
                      setStep(s => s + 1);
                      setXp(x => x + 50);
                    } else {
                      setComplete(true);
                      setXp(x => x + 50);
                    }
                  }} />
                )}

                {slide.type === "quiz" && (
                  <div className="p-10 bg-[#0A0D12] border border-white/10 rounded-[2.5rem] space-y-8">
                    <div className="flex items-center gap-3">
                      <MousePointer2 size={16} className="text-amber-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">Knowledge Execution</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight">{slide.question}</h3>
                    <div className="space-y-3">
                      {slide.options?.map((opt, i) => (
                        <button key={i} onClick={() => {
                          if (opt.correct) {
                            if (step < miniLesson.length - 1) {
                              setStep(s => s + 1);
                              setXp(x => x + 50);
                            } else {
                              setComplete(true);
                              setXp(x => x + 50);
                            }
                          } else {
                            alert(opt.why);
                          }
                        }} className="w-full text-left p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.06] hover:border-white/20 transition-all group">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-white/80 group-hover:text-white">{opt.label}</span>
                            <ChevronRight size={16} className="text-white/20 group-hover:text-white" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {complete && (
              <motion.div key="complete" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="p-12 bg-[var(--color-profit)]/5 border border-[var(--color-profit)]/20 rounded-[3rem] text-center space-y-10">
                <div className="w-24 h-24 rounded-full bg-[var(--color-profit)]/20 flex items-center justify-center mx-auto border border-[var(--color-profit)]/30">
                  <Check size={40} className="text-[var(--color-profit)]" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black tracking-tighter uppercase italic">Module Verified</h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    You have successfully completed Phase 1 of Level 0. You have earned <span className="text-amber-400 font-bold">{xp} XP</span> and a temporary student clearance.
                  </p>
                </div>
                
                <div className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Unlocking Path:</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-profit)]/10 flex items-center justify-center text-[var(--color-profit)] font-bold text-xs">L0</div>
                    <div>
                      <p className="text-sm font-bold">Standard Learning Path</p>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest">4 Modules · 12 Tasks · 1 Test</p>
                    </div>
                  </div>
                </div>

                <Link href="/register" className="block w-full py-6 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Claim Account & Continue Training
                </Link>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">No payment required for Level 0</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Student Dossier (Dynamic Sidebar) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-8 bg-[#0A0D12] border border-white/10 rounded-[2.5rem] sticky top-32 space-y-8">
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Student Dossier</p>
              <div className="w-2 h-2 rounded-full bg-[var(--color-profit)] animate-pulse" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/20 font-black">?</div>
                <div>
                  <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">Calculated Persona</p>
                  <p className="text-sm font-bold text-white italic">{started ? (xp > 100 ? "METHODICAL" : "ADAPTING") : "PENDING DATA..."}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[9px] font-black text-white/30 uppercase tracking-widest">
                  <span>Knowledge Depth</span>
                  <span>{progress.toFixed(0)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-white/20" animate={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="p-4 bg-amber-400/5 border border-amber-400/10 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-amber-400">
                  <Zap size={12} />
                  <span className="text-[10px] font-black uppercase tracking-widest">XP Rewards</span>
                </div>
                <p className="text-[10px] text-amber-400/60 leading-relaxed italic">At 150 XP, unlock the &apos;Institutional Candlestick Cheat Sheet&apos; automatically.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border border-white/5 flex items-center justify-center">
                  <Lock size={14} className="text-white/10" />
                </div>
                <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.2em]">Full Dashboard Features Locked during trial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-lg font-bold mb-4">True Simulation</h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">Our Level 0 isn&apos;t just video. It&apos;s a series of interactive tasks that build muscle memory before you touch a cent of capital.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Institutional Path</h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">Learn why the markets move, not just how to follow indicators. We teach you to think like a liquidity provider.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">No Gimmicks</h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">Level 0 is 100% free because we only want traders who can actually pass our foundation phase. Prove your intent.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
