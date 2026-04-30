"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, RotateCcw, Trophy, Target, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Question {
  id: number;
  type: "image-choice" | "scenario" | "identify";
  question: string;
  context?: string;
  chart?: CandleData[];
  options: { label: string; correct: boolean; explanation: string }[];
}

interface CandleData {
  o: number; h: number; l: number; c: number;
}

// Mini chart renderer
function MiniChart({ candles, highlight, className }: { candles: CandleData[]; highlight?: string; className?: string }) {
  const w = 320, h = 160, pad = 16;
  const allVals = candles.flatMap(c => [c.h, c.l]);
  const min = Math.min(...allVals), max = Math.max(...allVals);
  const range = max - min || 1;
  const cw = (w - pad * 2) / candles.length;

  const yScale = (v: number) => pad + ((max - v) / range) * (h - pad * 2);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={cn("w-full max-w-[320px] mx-auto", className)}>
      <rect width={w} height={h} rx={12} fill="#0D1117" />
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map(p => (
        <line key={p} x1={pad} y1={pad + p * (h - pad * 2)} x2={w - pad} y2={pad + p * (h - pad * 2)} stroke="rgba(255,255,255,0.03)" />
      ))}
      {candles.map((c, i) => {
        const x = pad + i * cw + cw / 2;
        const bull = c.c >= c.o;
        const color = bull ? "#10B981" : "#EF4444";
        const bodyTop = yScale(Math.max(c.o, c.c));
        const bodyBot = yScale(Math.min(c.o, c.c));
        const bodyH = Math.max(bodyBot - bodyTop, 1);
        return (
          <g key={i}>
            <line x1={x} y1={yScale(c.h)} x2={x} y2={yScale(c.l)} stroke={color} strokeWidth={1} opacity={0.6} />
            <rect x={x - cw * 0.3} y={bodyTop} width={cw * 0.6} height={bodyH} fill={color} rx={1} />
          </g>
        );
      })}
      {highlight === "uptrend" && (
        <line x1={pad + 10} y1={yScale(candles[1]?.l || min)} x2={w - pad - 10} y2={yScale(candles[candles.length - 2]?.h || max)} stroke="#6366F1" strokeWidth={2} strokeDasharray="6,4" opacity={0.5} />
      )}
      {highlight === "support" && (
        <line x1={pad} y1={yScale(min + range * 0.15)} x2={w - pad} y2={yScale(min + range * 0.15)} stroke="#F59E0B" strokeWidth={2} strokeDasharray="6,4" opacity={0.6} />
      )}
    </svg>
  );
}

const uptrendCandles: CandleData[] = [
  { o: 100, h: 103, l: 98, c: 102 }, { o: 102, h: 105, l: 101, c: 104 },
  { o: 104, h: 107, l: 103, c: 106 }, { o: 105, h: 108, l: 104, c: 103 },
  { o: 103, h: 106, l: 102, c: 105 }, { o: 105, h: 109, l: 104, c: 108 },
  { o: 108, h: 112, l: 107, c: 111 }, { o: 111, h: 114, l: 110, c: 113 },
  { o: 113, h: 115, l: 111, c: 112 }, { o: 112, h: 116, l: 111, c: 115 },
];

const rangeCandles: CandleData[] = [
  { o: 100, h: 104, l: 98, c: 103 }, { o: 103, h: 105, l: 100, c: 101 },
  { o: 101, h: 104, l: 99, c: 103 }, { o: 103, h: 105, l: 100, c: 100 },
  { o: 100, h: 103, l: 98, c: 102 }, { o: 102, h: 105, l: 100, c: 101 },
  { o: 101, h: 104, l: 99, c: 103 }, { o: 103, h: 105, l: 100, c: 101 },
  { o: 101, h: 103, l: 99, c: 102 }, { o: 102, h: 104, l: 100, c: 103 },
];

const hammerCandles: CandleData[] = [
  { o: 110, h: 112, l: 108, c: 109 }, { o: 109, h: 110, l: 106, c: 107 },
  { o: 107, h: 108, l: 104, c: 105 }, { o: 105, h: 106, l: 102, c: 103 },
  { o: 103, h: 104, l: 96, c: 103 }, // ← Hammer
  { o: 103, h: 106, l: 102, c: 105 }, { o: 105, h: 108, l: 104, c: 107 },
  { o: 107, h: 110, l: 106, c: 109 }, { o: 109, h: 112, l: 108, c: 111 },
  { o: 111, h: 113, l: 110, c: 112 },
];

const questions: Question[] = [
  {
    id: 1, type: "image-choice",
    question: "What type of market structure do you see?",
    context: "Look at the overall price direction across these candles.",
    chart: uptrendCandles,
    options: [
      { label: "Uptrend", correct: true, explanation: "Correct! Higher highs and higher lows = uptrend. This is the most fundamental structure to identify." },
      { label: "Downtrend", correct: false, explanation: "Look again — price is making higher highs and higher lows over time." },
      { label: "Sideways range", correct: false, explanation: "A range would show price bouncing between fixed levels. Here, both highs and lows are rising." },
      { label: "No clear pattern", correct: false, explanation: "There IS a clear pattern — the series of higher highs and higher lows defines an uptrend." },
    ],
  },
  {
    id: 2, type: "scenario",
    question: "You bought EUR/USD at 1.1050. Price is now 1.1020. What should you do?",
    context: "Your analysis says the trend is still bullish. You're down 30 pips.",
    options: [
      { label: "Add more to average down the price", correct: false, explanation: "Averaging down without a systematic plan is one of the most common ways traders blow accounts. It increases risk, not reduces it." },
      { label: "Check if your stop-loss level has been hit", correct: true, explanation: "Correct. A disciplined trader sets a stop-loss BEFORE entering and follows it. If SL isn't hit, the trade is still valid." },
      { label: "Close immediately to avoid further loss", correct: false, explanation: "Panic closing when your stop hasn't been hit is emotional trading. If your analysis is valid and SL intact, the trade is still valid." },
      { label: "Remove your stop-loss to give it more room", correct: false, explanation: "Never widen a stop-loss after entry. That's moving the goalposts and violates risk management fundamentals." },
    ],
  },
  {
    id: 3, type: "image-choice",
    question: "What's the key feature of candle #5 (the one with the long lower shadow)?",
    context: "This candle appeared after a series of declining prices.",
    chart: hammerCandles,
    options: [
      { label: "It's a Hammer — potential reversal signal", correct: true, explanation: "Correct! A hammer has a small body and long lower wick after a downtrend. It signals buyers stepped in and rejected lower prices." },
      { label: "It's a Doji — market is undecided", correct: false, explanation: "A Doji has almost no body (open ≈ close). This candle has a clear body AND a long lower shadow — that's a Hammer." },
      { label: "It's just noise — ignore it", correct: false, explanation: "Candles with extreme wicks at key points are among the most important signals in price action trading." },
      { label: "It's a bearish signal — price will continue down", correct: false, explanation: "The long lower wick means sellers pushed down but buyers fought back. After a downtrend, this is typically BULLISH." },
    ],
  },
  {
    id: 4, type: "scenario",
    question: "You have $10,000 capital. What's the MAXIMUM you should risk on a single trade?",
    context: "Think about institutional risk management rules.",
    options: [
      { label: "$100 (1%)", correct: false, explanation: "1% is actually very conservative and acceptable. But the standard institutional guideline allows up to 2%." },
      { label: "$200 (2%)", correct: true, explanation: "Correct. The 2% rule is the industry standard for max risk per trade. Lurnava enforces this as Rule R001 — hard block if exceeded." },
      { label: "$500 (5%)", correct: false, explanation: "5% per trade means just 4 consecutive losses wipes 20% of your account. That's far too aggressive." },
      { label: "$1,000 (10%)", correct: false, explanation: "10% risk per trade is reckless. Two bad trades = 20% drawdown. This is how accounts get blown." },
    ],
  },
  {
    id: 5, type: "image-choice",
    question: "What market condition does this chart represent?",
    context: "Pay attention to the highs and lows.",
    chart: rangeCandles,
    options: [
      { label: "Trending market", correct: false, explanation: "A trend would show progressively higher highs (uptrend) or lower lows (downtrend). Here, price stays between fixed levels." },
      { label: "Range-bound / consolidation", correct: true, explanation: "Correct! Price is bouncing between a ceiling and floor. No higher highs, no lower lows. This is a range — and it requires different strategies than a trend." },
      { label: "Breakout in progress", correct: false, explanation: "A breakout means price is moving OUTSIDE the range. Here, price is staying within it." },
      { label: "Volatile crash", correct: false, explanation: "There's no crash here. Price is oscillating within a stable range." },
    ],
  },
  {
    id: 6, type: "scenario",
    question: "You've lost 5 trades in a row. What's the professional response?",
    context: "You're frustrated and want to make your money back.",
    options: [
      { label: "Double your position size to recover faster", correct: false, explanation: "This is revenge trading. Doubling down after losses is emotional, not strategic. It's the #1 account killer." },
      { label: "Keep trading the same strategy — variance happens", correct: false, explanation: "5 losses in a row could be variance, but it could also indicate the strategy doesn't fit current conditions. Blind persistence is dangerous." },
      { label: "Stop trading. Review journal. Identify if conditions changed.", correct: true, explanation: "Correct. A disciplined trader stops, reviews, and adapts. Maybe the market regime shifted. Maybe execution was poor. The journal tells you." },
      { label: "Switch to a completely different strategy immediately", correct: false, explanation: "Strategy-hopping after losses is another emotional response. You need data from your journal first, not a random switch." },
    ],
  },
  {
    id: 7, type: "scenario",
    question: "What does 'Profit Factor 2.0' mean?",
    context: "This is a key performance metric in trading.",
    options: [
      { label: "You made 2x your initial investment", correct: false, explanation: "Profit Factor isn't about total return. It's the ratio of gross profit to gross loss." },
      { label: "For every $1 lost, you made $2 in profit", correct: true, explanation: "Correct! Profit Factor = Gross Profit ÷ Gross Loss. A PF of 2.0 means your winners are 2x your losers in total — a solid professional benchmark." },
      { label: "Your win rate is 200%", correct: false, explanation: "Win rate can't exceed 100%. Profit Factor and win rate are different metrics entirely." },
      { label: "You doubled your account", correct: false, explanation: "Account doubling is total return. Profit Factor measures the quality of your wins relative to losses." },
    ],
  },
];

const resultBands = [
  { min: 0, max: 2, level: "L0", title: "Start from Foundations", desc: "You need the basics first — and that's perfectly fine. Level 0 will teach you everything about charts, instruments, and platform navigation. The good news? It's free.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { min: 3, max: 4, level: "L1–L2", title: "You Know the Basics", desc: "You have foundational awareness but gaps in execution discipline and strategy knowledge. Levels 1–2 will give you structure, and the trading simulation will test your understanding.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { min: 5, max: 6, level: "L3–L4", title: "Intermediate Trader", desc: "You understand markets well. The question is: can you trade consistently? Lurnava's simulation and certification will test what matters — not knowledge, but performance under rules.", color: "text-amber-400", bg: "bg-amber-500/10" },
  { min: 7, max: 7, level: "L5+", title: "Advanced — Prove It", desc: "You answered like a professional. Now prove it with real performance data. The 5-phase simulation and certification scoring will validate whether your knowledge translates to execution.", color: "text-[var(--color-profit)]", bg: "bg-[var(--color-profit)]/10" },
];

export function TradingReadinessQuiz() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const result = resultBands.find(b => score >= b.min && score <= b.max) || resultBands[0];

  const handleSelect = useCallback((idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (q.options[idx].correct) setScore(s => s + 1);
  }, [answered, q]);

  const handleNext = useCallback(() => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  }, [current]);

  const handleRestart = useCallback(() => {
    setStarted(false);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }, []);

  return (
    <section className="py-32 px-6 lg:px-8 border-t border-[var(--ln-border-soft)] relative overflow-hidden" id="readiness-quiz">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--ln-teal-500)]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {/* Start Screen */}
          {!started && (
            <motion.div key="start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ln-teal-500)]/10 border border-[var(--ln-teal-500)]/20">
                <Target size={14} className="text-[var(--ln-teal-500)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ln-teal-500)]">Interactive Assessment</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--ln-navy-900)]">
                How ready are you to trade?
              </h2>
              <p className="text-[var(--ln-text-secondary)] max-w-lg mx-auto">
                7 questions. Real charts. Real scenarios. Find out where you&apos;d start in the Lurnava system — and what you need to learn.
              </p>
              <button onClick={() => setStarted(true)} className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--ln-navy-900)] text-white font-bold rounded-2xl hover:bg-[var(--ln-navy-800)] active:scale-[0.98] transition-all group">
                Take the Assessment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)]/50">Takes 2 minutes · No signup required</p>
            </motion.div>
          )}

          {/* Question Screen */}
          {started && !finished && (
            <motion.div key={`q-${current}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }} className="space-y-8">
              {/* Progress */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-1.5 bg-[var(--ln-bg-soft)] rounded-full overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-[var(--ln-teal-500)] to-[var(--ln-teal-500)] rounded-full" animate={{ width: `${((current + 1) / questions.length) * 100}%` }} />
                </div>
                <span className="text-[10px] font-mono font-bold text-[var(--ln-text-muted)]">{current + 1}/{questions.length}</span>
              </div>

              {/* Question */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--ln-navy-900)] leading-snug">{q.question}</h3>
                {q.context && <p className="text-sm text-[var(--ln-text-muted)] italic">{q.context}</p>}
              </div>

              {/* Chart */}
              {q.chart && (
                <div className="p-4 bg-white border border-[var(--ln-border)] rounded-2xl shadow-sm">
                  <MiniChart candles={q.chart} />
                </div>
              )}

              {/* Options */}
              <div className="space-y-3">
                {q.options.map((opt, idx) => {
                  const isSelected = selected === idx;
                  const showResult = answered;
                  let borderColor = "border-white/5 hover:border-white/15";
                  if (showResult && opt.correct) borderColor = "border-[var(--color-profit)]/50";
                  if (showResult && isSelected && !opt.correct) borderColor = "border-rose-500/50";

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={answered}
                      className={cn(
                        "w-full text-left p-5 rounded-2xl border transition-all duration-200",
                        borderColor,
                        !answered && "cursor-pointer hover:bg-white/[0.04]",
                        answered && "cursor-default",
                        showResult && opt.correct && "bg-[var(--color-profit)]/5",
                        showResult && isSelected && !opt.correct && "bg-rose-500/5",
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all",
                          !showResult && isSelected ? "border-[var(--color-brand-400)] bg-[var(--color-brand-500)]/20" : "border-white/10",
                          showResult && opt.correct && "border-[var(--color-profit)] bg-[var(--color-profit)]/20",
                          showResult && isSelected && !opt.correct && "border-rose-500 bg-rose-500/20",
                        )}>
                          {showResult && opt.correct && <CheckCircle2 size={14} className="text-[var(--color-profit)]" />}
                          {showResult && isSelected && !opt.correct && <XCircle size={14} className="text-rose-400" />}
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-[var(--ln-navy-900)]">{opt.label}</span>
                          {showResult && (isSelected || opt.correct) && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-xs text-[var(--ln-text-secondary)] mt-2 leading-relaxed">
                              {opt.explanation}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Next button */}
              {answered && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end">
                  <button onClick={handleNext} className="flex items-center gap-2 px-8 py-4 bg-[var(--ln-navy-900)] text-white font-bold rounded-2xl hover:bg-[var(--ln-navy-800)] transition-all group text-sm">
                    {current < questions.length - 1 ? "Next Question" : "See Your Result"}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Result Screen */}
          {finished && (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 rounded-3xl bg-[var(--ln-teal-soft)] border border-[var(--ln-border)] flex items-center justify-center mx-auto">
                  <Trophy size={40} className="text-[var(--ln-teal-500)]" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--ln-text-muted)] mb-2">Your Trading Readiness Score</p>
                  <div className="text-7xl font-black tracking-tighter">
                    <span className="text-[var(--ln-navy-900)]">{score}</span>
                    <span className="text-[var(--ln-text-muted)] text-4xl">/{questions.length}</span>
                  </div>
                </div>

                <div className={cn("inline-block px-6 py-3 rounded-xl border", result.bg, result.color, result.color.replace("text-", "border-").replace("]", "/20]"))}>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Recommended start: {result.level}</span>
                </div>

                <h3 className="text-2xl font-bold text-[var(--ln-navy-900)]">{result.title}</h3>
                <p className="text-[var(--ln-text-secondary)] max-md mx-auto leading-relaxed">{result.desc}</p>
              </div>

              {/* Score breakdown */}
              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--ln-text-muted)]">Score Breakdown</span>
                  <span className="text-sm font-bold text-[var(--ln-navy-900)]">{Math.round((score / questions.length) * 100)}%</span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-profit)] rounded-full transition-all" style={{ width: `${(score / questions.length) * 100}%` }} />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                  <div><p className="text-xs text-[var(--ln-text-muted)]">Charts</p><p className="text-sm font-bold text-[var(--ln-navy-900)]">{score >= 3 ? "✓" : "Needs work"}</p></div>
                  <div><p className="text-xs text-[var(--ln-text-muted)]">Risk Mgmt</p><p className="text-sm font-bold text-[var(--ln-navy-900)]">{score >= 5 ? "✓" : "Needs work"}</p></div>
                  <div><p className="text-xs text-[var(--ln-text-muted)]">Discipline</p><p className="text-sm font-bold text-[var(--ln-navy-900)]">{score >= 6 ? "✓" : "Needs work"}</p></div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/free-trial" className="flex-1 flex items-center justify-center gap-2 px-8 py-5 bg-[var(--ln-navy-900)] text-white font-bold rounded-2xl hover:bg-[var(--ln-navy-800)] transition-all group text-sm">
                  Start Free Trial — Level 0
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button onClick={handleRestart} className="flex items-center justify-center gap-2 px-6 py-5 border border-white/10 rounded-2xl text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-all text-sm font-bold">
                  <RotateCcw size={14} />
                  Retake
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
