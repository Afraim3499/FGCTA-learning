"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, CheckCircle2, XCircle, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChallengeData {
  id: number;
  title: string;
  instruction: string;
  candles: { o: number; h: number; l: number; c: number }[];
  correctZone: { startIdx: number; endIdx: number; type: "support" | "resistance" | "trend" | "pattern" };
  explanation: string;
  hint: string;
}

const challenges: ChallengeData[] = [
  {
    id: 1,
    title: "Find the Support Level",
    instruction: "Click the area where price keeps bouncing UP from. This is where buyers step in.",
    candles: [
      { o: 108, h: 110, l: 106, c: 109 }, { o: 109, h: 111, l: 105, c: 106 },
      { o: 106, h: 108, l: 100, c: 101 }, { o: 101, h: 104, l: 99, c: 103 },
      { o: 103, h: 107, l: 102, c: 106 }, { o: 106, h: 109, l: 105, c: 108 },
      { o: 108, h: 110, l: 104, c: 105 }, { o: 105, h: 106, l: 99, c: 100 },
      { o: 100, h: 103, l: 99, c: 102 }, { o: 102, h: 106, l: 101, c: 105 },
      { o: 105, h: 108, l: 104, c: 107 }, { o: 107, h: 109, l: 103, c: 104 },
      { o: 104, h: 105, l: 99, c: 100 }, { o: 100, h: 104, l: 99, c: 103 },
    ],
    correctZone: { startIdx: 2, endIdx: 13, type: "support" },
    explanation: "Price touched the ~99-100 level THREE times (candles 3, 8, 13) and bounced each time. When price repeatedly finds buyers at the same level, that's support. This is one of the most fundamental concepts in all of trading.",
    hint: "Look for a price level that was tested multiple times from above",
  },
  {
    id: 2,
    title: "Identify the Breakout Candle",
    instruction: "Price has been stuck in a range. Click the candle that BREAKS OUT above resistance.",
    candles: [
      { o: 100, h: 104, l: 99, c: 103 }, { o: 103, h: 105, l: 101, c: 102 },
      { o: 102, h: 105, l: 100, c: 104 }, { o: 104, h: 105, l: 101, c: 101 },
      { o: 101, h: 104, l: 100, c: 103 }, { o: 103, h: 105, l: 102, c: 104 },
      { o: 104, h: 105, l: 101, c: 102 }, { o: 102, h: 104, l: 100, c: 103 },
      { o: 103, h: 109, l: 102, c: 108 }, // ← Breakout candle
      { o: 108, h: 112, l: 107, c: 111 }, { o: 111, h: 114, l: 110, c: 113 },
      { o: 113, h: 116, l: 112, c: 115 }, { o: 115, h: 117, l: 113, c: 116 },
      { o: 116, h: 118, l: 114, c: 117 },
    ],
    correctZone: { startIdx: 8, endIdx: 8, type: "pattern" },
    explanation: "Candle 9 is the breakout. For 8 candles, price was capped at ~105 (resistance). Then this candle closed at 108 — clearly above resistance with strong momentum. Volume and body size confirm the breakout is real, not a fake-out.",
    hint: "Look for the first candle that closes ABOVE the level where price kept getting rejected",
  },
  {
    id: 3,
    title: "Spot the Trend Reversal",
    instruction: "This was a downtrend. Click the candle that signals the trend might be reversing.",
    candles: [
      { o: 120, h: 121, l: 117, c: 118 }, { o: 118, h: 119, l: 115, c: 116 },
      { o: 116, h: 117, l: 113, c: 114 }, { o: 114, h: 115, l: 111, c: 112 },
      { o: 112, h: 113, l: 108, c: 109 }, { o: 109, h: 110, l: 105, c: 106 },
      { o: 106, h: 107, l: 98, c: 106 }, // ← Hammer/reversal
      { o: 106, h: 110, l: 105, c: 109 }, { o: 109, h: 113, l: 108, c: 112 },
      { o: 112, h: 115, l: 111, c: 114 }, { o: 114, h: 117, l: 113, c: 116 },
      { o: 116, h: 118, l: 115, c: 117 }, { o: 117, h: 120, l: 116, c: 119 },
      { o: 119, h: 121, l: 118, c: 120 },
    ],
    correctZone: { startIdx: 6, endIdx: 6, type: "pattern" },
    explanation: "Candle 7 is a Hammer — it has a long lower wick showing sellers pushed down to 98, but buyers fought back and closed near the open at 106. After a sustained downtrend, this signals exhaustion of selling pressure. The next candles confirm the reversal.",
    hint: "Look for a candle with an unusually long lower shadow after the decline",
  },
];

function InteractiveChart({ challenge, onSelect, selectedIdx, result }: {
  challenge: ChallengeData;
  onSelect: (idx: number) => void;
  selectedIdx: number | null;
  result: "correct" | "wrong" | null;
}) {
  const candles = challenge.candles;
  const w = 560, h = 240, pad = 24;
  const allVals = candles.flatMap(c => [c.h, c.l]);
  const min = Math.min(...allVals) - 2, max = Math.max(...allVals) + 2;
  const range = max - min;
  const cw = (w - pad * 2) / candles.length;
  const yScale = (v: number) => pad + ((max - v) / range) * (h - pad * 2);

  // Support line for challenge 1
  const isSupport = challenge.correctZone.type === "support";
  const supportY = isSupport ? yScale(99.5) : 0;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full rounded-2xl cursor-crosshair">
      <rect width={w} height={h} rx={16} fill="#0A0D12" />

      {/* Grid */}
      {[0.2, 0.4, 0.6, 0.8].map(p => (
        <line key={p} x1={pad} y1={pad + p * (h - pad * 2)} x2={w - pad} y2={pad + p * (h - pad * 2)} stroke="rgba(255,255,255,0.03)" />
      ))}

      {/* Price labels */}
      {[0, 0.25, 0.5, 0.75, 1].map(p => {
        const val = max - p * range;
        return <text key={p} x={w - pad + 4} y={pad + p * (h - pad * 2) + 3} fontSize={8} fill="rgba(255,255,255,0.15)" fontFamily="monospace">{val.toFixed(0)}</text>;
      })}

      {/* Support/resistance line when revealed */}
      {result && isSupport && (
        <line x1={pad} y1={supportY} x2={w - pad} y2={supportY} stroke="#F59E0B" strokeWidth={1.5} strokeDasharray="6,4" opacity={0.6} />
      )}

      {/* Candles */}
      {candles.map((c, i) => {
        const x = pad + i * cw + cw / 2;
        const bull = c.c >= c.o;
        const isCorrect = i >= challenge.correctZone.startIdx && i <= challenge.correctZone.endIdx;
        const isClicked = selectedIdx === i;

        let color = bull ? "#10B981" : "#EF4444";
        let opacity = 1;

        if (result) {
          if (isCorrect) { color = "#10B981"; opacity = 1; }
          else if (isClicked) { color = "#EF4444"; opacity = 0.8; }
          else { opacity = 0.3; }
        }

        const bodyTop = yScale(Math.max(c.o, c.c));
        const bodyBot = yScale(Math.min(c.o, c.c));
        const bodyH = Math.max(bodyBot - bodyTop, 1);

        return (
          <g key={i} onClick={() => onSelect(i)} className="cursor-pointer">
            {/* Hover zone */}
            <rect x={pad + i * cw} y={pad} width={cw} height={h - pad * 2} fill="transparent" />
            {/* Highlight */}
            {isClicked && (
              <rect x={pad + i * cw + 2} y={pad} width={cw - 4} height={h - pad * 2} fill={result ? (isCorrect ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)") : "rgba(99,102,241,0.08)"} rx={4} />
            )}
            {result && isCorrect && !isClicked && (
              <rect x={pad + i * cw + 2} y={pad} width={cw - 4} height={h - pad * 2} fill="rgba(16,185,129,0.05)" rx={4} />
            )}
            <line x1={x} y1={yScale(c.h)} x2={x} y2={yScale(c.l)} stroke={color} strokeWidth={1} opacity={opacity * 0.6} />
            <rect x={x - cw * 0.3} y={bodyTop} width={cw * 0.6} height={bodyH} fill={color} rx={1.5} opacity={opacity} />
            {/* Candle number */}
            <text x={x} y={h - 6} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.1)" fontFamily="monospace">{i + 1}</text>
          </g>
        );
      })}
    </svg>
  );
}

export function SpotThePatternGame() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [allDone, setAllDone] = useState(false);

  const challenge = challenges[currentChallenge];

  const handleSelect = useCallback((idx: number) => {
    if (result) return;
    setSelectedIdx(idx);
    const isCorrect = idx >= challenge.correctZone.startIdx && idx <= challenge.correctZone.endIdx;
    setResult(isCorrect ? "correct" : "wrong");
    if (isCorrect) setTotalCorrect(t => t + 1);
  }, [result, challenge]);

  const handleNext = useCallback(() => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(c => c + 1);
      setSelectedIdx(null);
      setResult(null);
      setShowHint(false);
    } else {
      setAllDone(true);
    }
  }, [currentChallenge]);

  return (
    <section className="py-32 px-6 lg:px-8 bg-[var(--ln-bg-soft)] border-t border-[var(--ln-border-soft)]">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Crosshair size={14} className="text-amber-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">Interactive Challenge</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--ln-navy-900)]">
            Spot the Pattern
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto">
            Real charts. Real patterns. Click on the chart to identify what we&apos;re looking for.
            This is how you&apos;ll learn inside Lurnava.
          </p>
        </div>

        {!allDone ? (
          <AnimatePresence mode="wait">
            <motion.div key={currentChallenge} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              {/* Challenge header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[var(--ln-navy-900)]">{challenge.title}</h3>
                  <p className="text-sm text-[var(--ln-text-muted)]">{challenge.instruction}</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-[var(--color-text-muted)] bg-white/5 px-3 py-1.5 rounded-lg">
                  {currentChallenge + 1}/{challenges.length}
                </span>
              </div>

              {/* Chart */}
              <div className="p-3 bg-white border border-[var(--ln-border)] rounded-3xl shadow-sm overflow-hidden">
                <InteractiveChart challenge={challenge} onSelect={handleSelect} selectedIdx={selectedIdx} result={result} />
              </div>

              {/* Hint */}
              {!result && !showHint && (
                <button onClick={() => setShowHint(true)} className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-brand-400)] transition-colors">
                  💡 Need a hint?
                </button>
              )}
              {showHint && !result && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-[var(--color-brand-400)] italic p-3 bg-[var(--color-brand-500)]/5 rounded-xl border border-[var(--color-brand-500)]/10">
                  {challenge.hint}
                </motion.p>
              )}

              {/* Result */}
              {result && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <div className={cn("flex items-start gap-3 p-5 rounded-2xl border",
                    result === "correct" ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)]/20" : "bg-rose-500/5 border-rose-500/20"
                  )}>
                    {result === "correct" ? <CheckCircle2 className="text-[var(--ln-teal-500)] shrink-0 mt-0.5" size={18} /> : <XCircle className="text-rose-500 shrink-0 mt-0.5" size={18} />}
                    <div>
                      <p className={cn("text-sm font-bold mb-1", result === "correct" ? "text-[var(--ln-teal-500)]" : "text-rose-500")}>
                        {result === "correct" ? "Correct!" : "Not quite — here's the answer:"}
                      </p>
                      <p className="text-sm text-[var(--ln-text-secondary)] leading-relaxed">{challenge.explanation}</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button onClick={handleNext} className="flex items-center gap-2 px-8 py-4 bg-[var(--ln-navy-900)] text-white font-bold rounded-2xl hover:bg-[var(--ln-navy-800)] transition-all group text-sm">
                      {currentChallenge < challenges.length - 1 ? "Next Challenge" : "See Results"}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6 p-10 bg-white border border-[var(--ln-border)] rounded-3xl shadow-lg">
            <Zap size={40} className="text-amber-400 mx-auto" />
            <h3 className="text-2xl font-bold">
              {totalCorrect === challenges.length ? "Perfect! You spotted every pattern." : `You got ${totalCorrect}/${challenges.length} right.`}
            </h3>
            <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">
              {totalCorrect === challenges.length
                ? "You clearly have chart-reading skills. The Lurnava system will push you further — into strategies, risk management, and LearningRecord."
                : "Chart reading is a skill that improves with practice. Lurnava Level 0 teaches all of this — with interactive drills, not just text."}
            </p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
              This is a taste of how Lurnava teaches. Every module uses interactive exercises like this.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
