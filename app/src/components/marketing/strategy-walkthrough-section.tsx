"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronRight, ChevronLeft, RotateCcw, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface WalkthroughStep {
  title: string;
  annotation: string;
  detail: string;
  chartHighlight: "range" | "breakout" | "entry" | "sl" | "tp" | "running" | "exit";
}

const steps: WalkthroughStep[] = [
  {
    title: "1. Identify the Range",
    annotation: "Price is consolidating between 104-105 resistance and 99-100 support",
    detail: "Before any breakout trade, you need to identify the range. Look for at least 3 touches of both support and resistance. This range has been holding for 8 candles.",
    chartHighlight: "range",
  },
  {
    title: "2. Wait for the Breakout",
    annotation: "Candle 9 closes decisively above resistance at 108 — breakout confirmed",
    detail: "A real breakout needs a strong close ABOVE resistance, not just a wick. This candle has a large body and closes at 108, well above the 105 ceiling. Volume would confirm this in a live environment.",
    chartHighlight: "breakout",
  },
  {
    title: "3. Place the Entry",
    annotation: "Enter long at 108.50 on the next candle's open — confirming the breakout held",
    detail: "Don't chase the breakout candle. Wait for the next candle to open above resistance. If it gaps up or opens strong, the breakout is confirmed. Entry: $108.50.",
    chartHighlight: "entry",
  },
  {
    title: "4. Set Your Stop-Loss",
    annotation: "Stop-loss at 104.00 — below the range. Risk: $4.50 per unit",
    detail: "Your stop goes below the range you just broke out of. If price falls back into the range, the breakout failed and you exit. This is rule R001 — max 2% of equity at risk.",
    chartHighlight: "sl",
  },
  {
    title: "5. Set Your Target",
    annotation: "Target at 117.50 — range height ($5) projected above breakout = 1:2 R:R",
    detail: "Classic breakout target = range height added to the breakout point. Range was $5 (105-100). Target = 105 + 5×2 = $115-118 zone. Risk:Reward = 1:2 minimum.",
    chartHighlight: "tp",
  },
  {
    title: "6. Manage the Trade",
    annotation: "Price trends higher. Trail stop to breakeven at +1R, then to +1.5R",
    detail: "Once price moves 1R in your favor ($4.50 above entry), move stop to breakeven. This makes it a free trade. Continue trailing as price advances.",
    chartHighlight: "running",
  },
  {
    title: "7. Exit at Target",
    annotation: "Price reaches $117 — close position. Profit: +$8.50 per unit (1.89R)",
    detail: "Trade closed at target zone. Final P&L: +$8.50 on $4.50 risk = 1.89R. This single trade contributed to a Profit Factor improvement. In Lurnava, this entire process is scored.",
    chartHighlight: "exit",
  },
];

const candles = [
  { o: 100, h: 104, l: 99, c: 103 }, { o: 103, h: 105, l: 101, c: 102 },
  { o: 102, h: 105, l: 100, c: 104 }, { o: 104, h: 105, l: 101, c: 101 },
  { o: 101, h: 104, l: 100, c: 103 }, { o: 103, h: 105, l: 102, c: 104 },
  { o: 104, h: 105, l: 101, c: 102 }, { o: 102, h: 104, l: 100, c: 103 },
  { o: 103, h: 109, l: 102, c: 108 }, // breakout
  { o: 108, h: 112, l: 107, c: 111 }, { o: 111, h: 114, l: 110, c: 113 },
  { o: 113, h: 116, l: 112, c: 115 }, { o: 115, h: 118, l: 113, c: 117 },
  { o: 117, h: 119, l: 115, c: 116 },
];

function StrategyChart({ highlight }: { highlight: string }) {
  const w = 560, h = 260, pad = 28;
  const allVals = candles.flatMap(c => [c.h, c.l]);
  const min = Math.min(...allVals) - 3, max = Math.max(...allVals) + 3;
  const range = max - min;
  const cw = (w - pad * 2) / candles.length;
  const yScale = (v: number) => pad + ((max - v) / range) * (h - pad * 2);

  const resistanceY = yScale(105);
  const supportY = yScale(100);
  const entryY = yScale(108.5);
  const slY = yScale(104);
  const tpY = yScale(117.5);

  const showRange = ["range", "breakout", "entry", "sl", "tp", "running", "exit"].includes(highlight);
  const showEntry = ["entry", "sl", "tp", "running", "exit"].includes(highlight);
  const showSL = ["sl", "tp", "running", "exit"].includes(highlight);
  const showTP = ["tp", "running", "exit"].includes(highlight);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full rounded-2xl">
      <rect width={w} height={h} rx={16} fill="#0A1A36" />

      {/* Grid */}
      {[0.2, 0.4, 0.6, 0.8].map(p => (
        <line key={p} x1={pad} y1={pad + p * (h - pad * 2)} x2={w - pad} y2={pad + p * (h - pad * 2)} stroke="rgba(255,255,255,0.03)" />
      ))}

      {/* Range zone */}
      {showRange && (
        <rect x={pad} y={resistanceY} width={pad + 8 * cw} height={supportY - resistanceY} fill="rgba(20, 184, 166, 0.06)" stroke="none" />
      )}

      {/* Resistance line */}
      {showRange && (
        <>
          <line x1={pad} y1={resistanceY} x2={pad + 8 * cw} y2={resistanceY} stroke="#EF4444" strokeWidth={1} strokeDasharray="6,4" opacity={0.5} />
          <text x={pad + 4} y={resistanceY - 6} fontSize={8} fill="#EF4444" opacity={0.6} fontFamily="monospace">Resistance 105</text>
        </>
      )}

      {/* Support line */}
      {showRange && (
        <>
          <line x1={pad} y1={supportY} x2={pad + 8 * cw} y2={supportY} stroke="#14B8A6" strokeWidth={1} strokeDasharray="6,4" opacity={0.5} />
          <text x={pad + 4} y={supportY + 14} fontSize={8} fill="#14B8A6" opacity={0.6} fontFamily="monospace">Support 100</text>
        </>
      )}

      {/* Entry line */}
      {showEntry && (
        <>
          <line x1={pad + 9 * cw} y1={entryY} x2={w - pad} y2={entryY} stroke="#14B8A6" strokeWidth={1.5} strokeDasharray="4,3" opacity={0.7} />
          <text x={w - pad - 60} y={entryY - 6} fontSize={8} fill="#14B8A6" fontFamily="monospace">Entry 108.50</text>
          <circle cx={pad + 9 * cw + cw / 2} cy={entryY} r={4} fill="#14B8A6" opacity={0.8} />
        </>
      )}

      {/* Stop-loss line */}
      {showSL && (
        <>
          <line x1={pad + 9 * cw} y1={slY} x2={w - pad} y2={slY} stroke="#EF4444" strokeWidth={1.5} strokeDasharray="4,3" opacity={0.6} />
          <text x={w - pad - 50} y={slY + 14} fontSize={8} fill="#EF4444" fontFamily="monospace">SL 104.00</text>
        </>
      )}

      {/* Take-profit line */}
      {showTP && (
        <>
          <line x1={pad + 9 * cw} y1={tpY} x2={w - pad} y2={tpY} stroke="#14B8A6" strokeWidth={1.5} strokeDasharray="4,3" opacity={0.6} />
          <text x={w - pad - 50} y={tpY - 6} fontSize={8} fill="#14B8A6" fontFamily="monospace">TP 117.50</text>
        </>
      )}

      {/* Candles */}
      {candles.map((c, i) => {
        const x = pad + i * cw + cw / 2;
        const bull = c.c >= c.o;
        let color = bull ? "#14B8A6" : "#EF4444";
        let opacity = 1;

        if (highlight === "breakout" && i === 8) { color = "#F59E0B"; }
        if (highlight === "exit" && i === 12) { color = "#14B8A6"; }

        const bodyTop = yScale(Math.max(c.o, c.c));
        const bodyBot = yScale(Math.min(c.o, c.c));
        const bodyH = Math.max(bodyBot - bodyTop, 1);

        // Dim future candles based on step
        const visibleUpTo = highlight === "range" ? 8 : highlight === "breakout" ? 9 : 14;
        if (i >= visibleUpTo) opacity = 0.15;

        return (
          <g key={i}>
            <line x1={x} y1={yScale(c.h)} x2={x} y2={yScale(c.l)} stroke={color} strokeWidth={1} opacity={opacity * 0.6} />
            <rect x={x - cw * 0.3} y={bodyTop} width={cw * 0.6} height={bodyH} fill={color} rx={1.5} opacity={opacity} />
          </g>
        );
      })}
    </svg>
  );
}

export function StrategyWalkthroughSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [started, setStarted] = useState(false);
  const step = steps[currentStep];

  const next = useCallback(() => { if (currentStep < steps.length - 1) setCurrentStep(s => s + 1); }, [currentStep]);
  const prev = useCallback(() => { if (currentStep > 0) setCurrentStep(s => s - 1); }, [currentStep]);

  return (
    <section className="py-24 px-6 lg:px-8 border-t border-[var(--ln-border-soft)] relative overflow-hidden" id="readiness-quiz">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--ln-teal-500)]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20">
            <TrendingUp size={14} className="text-[var(--ln-teal-500)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ln-teal-500)]">Live Strategy Walkthrough</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--ln-navy-900)]">
            Watch a real Breakout Trade unfold
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto font-medium">
            Step through a complete trade from setup to exit. This is how Lurnava teaches — not theory, but execution.
          </p>
        </div>

        {!started ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
            <button 
              onClick={() => setStarted(true)} 
              className="inline-flex items-center gap-3 px-12 py-5 bg-[var(--ln-navy-900)] text-white font-bold rounded-2xl hover:bg-[var(--ln-navy-800)] active:scale-[0.98] transition-all shadow-xl group"
            >
              <Play size={18} fill="white" />
              Start Walkthrough
            </button>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {/* Progress bar */}
            <div className="flex items-center gap-2">
              {steps.map((_, i) => (
                <button key={i} onClick={() => setCurrentStep(i)}
                  className={cn("flex-1 h-1.5 rounded-full transition-all",
                    i <= currentStep ? "bg-[var(--ln-teal-500)]" : "bg-[var(--ln-bg-soft)]"
                  )} />
              ))}
            </div>

            {/* Chart */}
            <div className="p-3 bg-[var(--ln-navy-900)] border border-[var(--ln-border)] rounded-3xl shadow-2xl">
              <StrategyChart highlight={step.chartHighlight} />
            </div>

            {/* Step content */}
            <AnimatePresence mode="wait">
              <motion.div key={currentStep} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-[var(--ln-teal-soft)] flex items-center justify-center shrink-0 text-sm font-bold text-[var(--ln-teal-500)]">
                    {currentStep + 1}
                  </span>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-bold text-[var(--ln-navy-900)]">{step.title}</h3>
                    <p className="text-sm text-[var(--ln-teal-600)] font-semibold italic">{step.annotation}</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{step.detail}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4">
              <button onClick={prev} disabled={currentStep === 0}
                className={cn("flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all",
                  currentStep === 0 ? "text-slate-300 cursor-not-allowed" : "text-[var(--ln-navy-900)] hover:bg-[var(--ln-bg-soft)] border border-[var(--ln-border)]"
                )}>
                <ChevronLeft size={16} /> Previous
              </button>

              <span className="text-[10px] font-mono font-bold text-slate-500">{currentStep + 1}/{steps.length}</span>

              {currentStep < steps.length - 1 ? (
                <button onClick={next}
                  className="flex items-center gap-2 px-5 py-3 bg-[var(--ln-navy-900)] text-white rounded-xl text-sm font-bold hover:bg-[var(--ln-navy-800)] transition-all group shadow-lg">
                  Next Step <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              ) : (
                <button onClick={() => { setCurrentStep(0); setStarted(false); }}
                  className="flex items-center gap-2 px-5 py-3 border border-[var(--ln-border)] rounded-xl text-sm font-bold text-slate-500 hover:text-[var(--ln-navy-900)] hover:bg-[var(--ln-bg-soft)] transition-all">
                  <RotateCcw size={14} /> Replay
                </button>
              )}
            </div>

            {/* Lurnava callout */}
            <div className="p-4 bg-[var(--ln-bg-soft)] border border-[var(--ln-border-soft)] rounded-xl text-center">
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                In Lurnava, you don&apos;t just watch this — you execute it yourself in the simulation, and every metric is scored.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
