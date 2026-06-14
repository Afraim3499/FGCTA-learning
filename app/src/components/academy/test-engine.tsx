"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { submitTest } from "@/lib/test-actions";
import { 
  ChevronRight, 
  ChevronLeft, 
  Timer, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  Play, 
  Heart, 
  ArrowRight,
  TrendingUp,
  Brain,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useNava } from "@/hooks/useNava";

interface Question {
  id: string;
  type: "MCQ" | "MATCHING" | "SCENARIO_CLICK" | "TICKER_DECISION";
  domain: string;
  prompt: string;
  options?: string[];
  matchingLeft?: string[];
  shuffledRight?: string[];
  chartState?: any;
}

interface TestEngineProps {
  level: number;
  test: {
    testId: string;
    title: string;
    timeLimit: number;
    questions: Question[];
  };
}

export function TestEngine({ level, test }: TestEngineProps) {
  // Navigation & Sourcing States
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [timeLeft, setTimeLeft] = useState(test.timeLimit * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { triggerMessage } = useNava();
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Breathing Mental Prep States
  const [breathingState, setBreathingState] = useState<"idle" | "breathing" | "complete">("idle");
  const [breathProgress, setBreathProgress] = useState(0);
  const breathingTimerRef = useRef<any>(null);

  // Matching Mode State
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [currentMatches, setCurrentMatches] = useState<Record<string, string>>({});

  // Ticker Flow Randomizer State
  const [tickerState, setTickerState] = useState<any>(null);

  const currentQuestion = test.questions[currentIndex];

  // Active question answers
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion?.id);

  // Start breathing hold timer
  const handleStartBreathing = () => {
    if (breathingState === "complete") return;
    setBreathingState("breathing");
    let count = 0;
    breathingTimerRef.current = setInterval(() => {
      count += 10;
      setBreathProgress(Math.min((count / 3000) * 100, 100));
      if (count >= 3000) {
        clearInterval(breathingTimerRef.current);
        setBreathingState("complete");
        setTimeout(() => {
          setStarted(true);
        }, 600);
      }
    }, 10);
  };

  const handleStopBreathing = () => {
    if (breathingState === "complete") return;
    clearInterval(breathingTimerRef.current);
    setBreathingState("idle");
    setBreathProgress(0);
  };

  // Live order book updates for TICKER_DECISION
  useEffect(() => {
    if (!currentQuestion || currentQuestion.type !== "TICKER_DECISION") return;
    const baseData = currentQuestion.chartState?.tickerData || {};
    setTickerState(baseData);

    const interval = setInterval(() => {
      setTickerState((prev: any) => {
        if (!prev) return prev;
        const drift = (Math.random() - 0.5) * 8;
        const bidSizes = [1.2, 4.5, 0.85, 3.4, 2.1].map(s => +(s * (0.9 + Math.random() * 0.2)).toFixed(2));
        const askSizes = [2.3, 1.1, 4.8, 0.9, 1.7].map(s => +(s * (0.9 + Math.random() * 0.2)).toFixed(2));
        return {
          ...prev,
          spotAsk: +(prev.spotAsk + drift).toFixed(2),
          perpBid: +(prev.perpBid + drift * 0.98).toFixed(2),
          bidSizes,
          askSizes
        };
      });
    }, 450);

    return () => clearInterval(interval);
  }, [currentQuestion]);

  // Load matches when entering a MATCHING question
  useEffect(() => {
    if (currentQuestion && currentQuestion.type === "MATCHING") {
      const matchAnswers = currentAnswer?.matchingPairs || [];
      const leftItems = currentQuestion.matchingLeft || [];
      const newMatches: Record<string, string> = {};
      leftItems.forEach((item, index) => {
        if (matchAnswers[index]) {
          newMatches[item] = matchAnswers[index];
        }
      });
      setCurrentMatches(newMatches);
    } else {
      setSelectedLeft(null);
      setCurrentMatches({});
    }
  }, [currentQuestion, currentAnswer]);

  // Handle MCQ selection
  const handleSelectMCQ = (optionIndex: number) => {
    setAnswers((prev) => {
      const existing = prev.filter((a) => a.questionId !== currentQuestion.id);
      return [...existing, { questionId: currentQuestion.id, selectedIndex: optionIndex }];
    });
  };

  // Handle Matching click pairing
  const handleSelectMatching = (side: "left" | "right", value: string) => {
    if (side === "left") {
      setSelectedLeft(value === selectedLeft ? null : value);
    } else {
      if (!selectedLeft) return;
      
      const newMatches = { ...currentMatches, [selectedLeft]: value };
      setCurrentMatches(newMatches);
      setSelectedLeft(null);

      // Build answer matchingPairs array matching the order of matchingLeft
      const matchingPairs = (currentQuestion.matchingLeft || []).map((leftItem) => newMatches[leftItem] || "");
      
      setAnswers((prev) => {
        const existing = prev.filter((a) => a.questionId !== currentQuestion.id);
        return [...existing, { questionId: currentQuestion.id, matchingPairs }];
      });
    }
  };

  const handleResetMatch = (leftItem: string) => {
    const newMatches = { ...currentMatches };
    delete newMatches[leftItem];
    setCurrentMatches(newMatches);

    const matchingPairs = (currentQuestion.matchingLeft || []).map((item) => newMatches[item] || "");
    
    setAnswers((prev) => {
      const existing = prev.filter((a) => a.questionId !== currentQuestion.id);
      return [...existing, { questionId: currentQuestion.id, matchingPairs }];
    });
  };

  // Handle SVG coordinate chart clicking
  const svgRef = useRef<SVGSVGElement>(null);
  const handleChartClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setAnswers((prev) => {
        const existing = prev.filter((a) => a.questionId !== currentQuestion.id);
        return [...existing, { questionId: currentQuestion.id, clickedX: x, clickedY: y }];
      });
    }
  };

  const handleSubmit = useCallback(async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await submitTest(level, answers) as any;
      if (res.success) {
        setResults({ score: res.score, passed: res.passed, message: res.message, details: res.results });
      } else {
        setError(res.error || "Submission failed");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please contact support.");
    } finally {
      setIsSubmitting(false);
    }
  }, [level, answers, isSubmitting]);

  // Timer logic
  useEffect(() => {
    if (!started || results || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, results, started, handleSubmit]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Trigger sound/alert notification effects in dashboard
  useEffect(() => {
    if (results) {
      triggerMessage(results.passed ? 'test_result_passed' : 'test_result_review_needed');
    }
  }, [results, triggerMessage]);

  // Post-Exam domain weakness analyzer
  const analyzeWeaknesses = () => {
    if (!results || !results.details) return [];
    const domainScores: Record<string, { total: number; correct: number }> = {};
    
    results.details.forEach((res: any) => {
      const q = test.questions.find(x => x.id === res.questionId);
      if (!q) return;
      if (!domainScores[q.domain]) domainScores[q.domain] = { total: 0, correct: 0 };
      domainScores[q.domain].total++;
      if (res.correct) domainScores[q.domain].correct++;
    });

    return Object.keys(domainScores).map(dom => {
      const score = Math.round((domainScores[dom].correct / domainScores[dom].total) * 100);
      let strategyRec = "";
      let strategyId = "";
      
      if (dom === "risk_management") {
        strategyRec = "ATR-Adjusted Volatility Sizing";
        strategyId = "RM_01.3";
      } else if (dom === "swing_market") {
        strategyRec = "Moving Average Bounce (Standard)";
        strategyId = "TF_01.1";
      } else if (dom === "market_structure") {
        strategyRec = "Structural Breakout (Retest)";
        strategyId = "TF_06.1";
      } else if (dom === "forex") {
        strategyRec = "London Open Breakout";
        strategyId = "BO_02.1";
      } else if (dom === "gold") {
        strategyRec = "Gold Macro Real Yield Inversion";
        strategyId = "AU_MAC_01";
      } else if (dom === "crypto") {
        strategyRec = "Crypto Derivatives Delta Neutral Arbitrage";
        strategyId = "CR_DER_01";
      }

      return {
        domain: dom,
        score,
        strategyRec,
        strategyId
      };
    });
  };

  // 1. Mental Prep Pre-Exam Screen
  if (!started) {
    return (
      <div className="max-w-2xl mx-auto p-12 bg-[#0b0f19] border border-slate-800 rounded-[2.5rem] shadow-2xl text-center space-y-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
        
        <div className="space-y-4">
          <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto text-indigo-400">
            <Brain className="w-8 h-8 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Focus & Attention Calibration</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Welcome to the Level {level} Knowledge Review. Institutional execution requires complete presence. Take a deep breath to reset cognitive load before initiating the exam.
          </p>
        </div>

        {/* Breathing Circle Indicator */}
        <div className="flex justify-center py-6">
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* Pulsating background ring */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-indigo-500/10 border border-indigo-500/30"
              animate={{ scale: breathingState === "breathing" ? 1.25 : 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            {/* The holding trigger */}
            <button
              onMouseDown={handleStartBreathing}
              onMouseUp={handleStopBreathing}
              onMouseLeave={handleStopBreathing}
              onTouchStart={handleStartBreathing}
              onTouchEnd={handleStopBreathing}
              className={cn(
                "w-36 h-36 rounded-full border-2 flex flex-col items-center justify-center font-extrabold uppercase text-xs tracking-widest transition-all select-none focus:outline-none z-10",
                breathingState === "breathing" 
                  ? "bg-indigo-600/90 border-indigo-400 text-white shadow-2xl scale-105"
                  : breathingState === "complete"
                  ? "bg-emerald-600 border-emerald-400 text-white"
                  : "bg-slate-900 border-slate-800 text-indigo-400 hover:border-indigo-500/40 hover:bg-slate-850"
              )}
            >
              <Heart className={cn("w-6 h-6 mb-2", breathingState === "breathing" && "animate-ping")} />
              {breathingState === "breathing" ? "Inhale..." : breathingState === "complete" ? "Ready" : "Hold 3s"}
            </button>
            
            {/* Progress Circular border */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle 
                cx="88" cy="88" r="80" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="4" 
                strokeDasharray={`${2 * Math.PI * 80}`}
                strokeDashoffset={`${2 * Math.PI * 80 * (1 - breathProgress / 100)}`}
                className="transition-all duration-75"
              />
            </svg>
          </div>
        </div>

        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
          *Press and hold inside the circle to activate breathing gate
        </p>
      </div>
    );
  }

  // 2. Post-Exam Results View
  if (results) {
    const analysis = analyzeWeaknesses();
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto space-y-8 p-12 bg-[#090d16] border border-slate-800 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
        
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            {results.passed ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400">
                <CheckCircle2 className="w-16 h-16" />
              </div>
            ) : (
              <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400">
                <AlertTriangle className="w-16 h-16" />
              </div>
            )}
          </div>
          <h2 className="text-4xl font-extrabold text-slate-100 tracking-tight">
            {results.passed ? "Crucible Cleared" : "Review Required"}
          </h2>
          <p className="text-slate-400 font-semibold uppercase tracking-[0.2em] text-[10px]">
            Level {level} Evaluation Gate Result
          </p>
        </div>

        {/* Scores Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-center">
            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Final Score</span>
            <span className={cn("text-4xl font-extrabold", results.passed ? "text-emerald-400" : "text-rose-500")}>
              {results.score}%
            </span>
          </div>
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-center">
            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Gating Result</span>
            <span className={cn("text-4xl font-extrabold uppercase", results.passed ? "text-emerald-400" : "text-rose-500")}>
              {results.passed ? "PASS" : "FAIL"}
            </span>
          </div>
        </div>

        {/* Dynamic domain performance feedback */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expertise Domain Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysis.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-950 border border-slate-850 rounded-2xl space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-300 capitalize">{item.domain.replace("_", " ")}</span>
                  <span className={cn("font-extrabold", item.score >= 70 ? "text-emerald-400" : "text-amber-500")}>
                    {item.score}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={cn("h-full transition-all duration-500", item.score >= 70 ? "bg-emerald-500" : "bg-amber-500")}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                {item.score < 70 && item.strategyRec && (
                  <div className="mt-2 text-[10px] text-amber-400/90 leading-tight flex items-start gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      Practice: <strong>{item.strategyRec} ({item.strategyId})</strong> in Strategy Lab to strengthen bias.
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-400 text-center font-medium leading-relaxed max-w-md mx-auto pt-4 border-t border-slate-850">
          {results.message || (results.passed
            ? "Prerequisites verified. Your training profile has been updated."
            : "Review the flagged domain materials and attempt the gate crucible once ready.")}
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={() => router.push("/course")}
            className="flex-1 py-4 bg-slate-850 border border-slate-800 text-slate-300 font-extrabold rounded-2xl hover:bg-slate-800 transition-all uppercase tracking-widest text-xs"
          >
            Return to Academy
          </button>
          {!results.passed ? (
            <button
              onClick={() => window.location.reload()}
              className="flex-1 py-4 bg-indigo-600 text-white font-extrabold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 uppercase tracking-widest text-xs"
            >
              Retry Test
            </button>
          ) : (
            <button
              onClick={() => router.push("/course")}
              className="flex-1 py-4 bg-emerald-600 text-white font-extrabold rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/25 uppercase tracking-widest text-xs"
            >
              Continue Learning
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  // 3. Error State View
  if (error) {
    return (
      <div className="max-w-xl mx-auto p-12 text-center space-y-6 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl">
        <div className="w-16 h-16 bg-rose-500/10 border border-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-2 text-rose-500">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-100 uppercase tracking-tight">Submission Failure</h3>
        <p className="text-slate-400 font-medium">{error}</p>
        <button
          onClick={() => router.push("/course")}
          className="px-8 py-3 bg-slate-850 border border-slate-800 text-slate-300 font-extrabold rounded-xl hover:bg-slate-800 transition-all uppercase tracking-widest text-[10px]"
        >
          Return to Academy
        </button>
      </div>
    );
  }

  // 4. Primary Interactive Question Layout
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#090d16] border border-slate-800 rounded-2xl shadow-md">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-extrabold text-slate-200 uppercase tracking-[0.1em]">{test.title}</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">
              Question {currentIndex + 1} of {test.questions.length} • Domain: {currentQuestion.domain.replace("_", " ")}
            </p>
          </div>
        </div>

        <div className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-sm border transition-all",
          timeLeft < 60
            ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
            : "bg-slate-900 border-slate-800 text-slate-300"
        )}>
          <Timer className={cn("w-4 h-4", timeLeft < 60 && "animate-pulse")} />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress */}
      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-850">
        <div
          className="h-full bg-indigo-500 transition-all duration-700 ease-in-out"
          style={{ width: `${((currentIndex + 1) / test.questions.length) * 100}%` }}
        />
      </div>

      {/* Primary Question Rendering Desk */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="p-10 bg-[#090d16] border border-slate-800 rounded-[2rem] shadow-lg space-y-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-slate-100 leading-snug tracking-tight">
            {currentQuestion.prompt}
          </h3>

          {/* Render MCQ Question type */}
          {currentQuestion.type === "MCQ" && (
            <div className="grid grid-cols-1 gap-3">
              {(currentQuestion.options || []).map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectMCQ(i)}
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl border text-left transition-all group focus:outline-none",
                    currentAnswer?.selectedIndex === i
                      ? "bg-indigo-600/90 border-indigo-400 text-white shadow-xl shadow-indigo-500/10"
                      : "bg-slate-950 border-slate-850 text-slate-400 hover:border-indigo-500/30 hover:bg-slate-900"
                  )}
                >
                  <div className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-xs border transition-colors",
                    currentAnswer?.selectedIndex === i
                      ? "bg-white/20 border-white/20 text-white"
                      : "bg-slate-900 border-slate-800 text-slate-500 group-hover:border-indigo-500/20"
                  )}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className="font-bold">{option}</span>
                </button>
              ))}
            </div>
          )}

          {/* Render MATCHING Question type */}
          {currentQuestion.type === "MATCHING" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side concepts */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Left Concept</h4>
                  {(currentQuestion.matchingLeft || []).map((leftItem, i) => {
                    const matchedRight = currentMatches[leftItem];
                    return (
                      <button
                        key={i}
                        disabled={!!matchedRight}
                        onClick={() => handleSelectMatching("left", leftItem)}
                        className={cn(
                          "w-full flex justify-between items-center p-4 rounded-xl border text-left text-xs font-bold transition-all focus:outline-none",
                          matchedRight 
                            ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400/70 opacity-60"
                            : selectedLeft === leftItem
                            ? "bg-indigo-600 border-indigo-400 text-white shadow-lg"
                            : "bg-slate-950 border-slate-850 text-slate-400 hover:bg-slate-900"
                        )}
                      >
                        <span>{leftItem}</span>
                        {matchedRight && <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full text-emerald-400 uppercase font-black tracking-widest">Matched</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Right Side shuffled cards */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Right Definition</h4>
                  {(currentQuestion.shuffledRight || []).map((rightItem, i) => {
                    const isMatched = Object.values(currentMatches).includes(rightItem);
                    return (
                      <button
                        key={i}
                        disabled={isMatched || !selectedLeft}
                        onClick={() => handleSelectMatching("right", rightItem)}
                        className={cn(
                          "w-full p-4 rounded-xl border text-left text-xs font-bold transition-all focus:outline-none",
                          isMatched 
                            ? "bg-slate-950/40 border-slate-900 text-slate-600 opacity-40"
                            : selectedLeft
                            ? "bg-slate-950 border-slate-850 text-slate-300 hover:border-indigo-500/40 hover:bg-slate-900 cursor-pointer"
                            : "bg-slate-950 border-slate-900 text-slate-500 cursor-not-allowed opacity-50"
                        )}
                      >
                        {rightItem}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Matched pairs list */}
              {Object.keys(currentMatches).length > 0 && (
                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-2">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active Pairings</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(currentMatches).map(([lKey, rVal], idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-2 bg-slate-900 border border-slate-800 rounded-lg">
                        <div className="flex items-center gap-2 truncate">
                          <span className="text-indigo-400 font-bold truncate max-w-[120px] md:max-w-[200px]">{lKey}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                          <span className="text-slate-300 font-medium truncate max-w-[150px] md:max-w-[250px]">{rVal}</span>
                        </div>
                        <button 
                          onClick={() => handleResetMatch(lKey)}
                          className="text-[10px] font-extrabold text-rose-400 hover:text-rose-300 transition-colors uppercase ml-2 px-2 py-0.5 border border-rose-500/10 hover:border-rose-500/20 bg-rose-500/5 rounded-md"
                        >
                          Clear
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Render SCENARIO_CLICK Question type */}
          {currentQuestion.type === "SCENARIO_CLICK" && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400 italic">
                *Click or tap on the exact candle / wick coordinates on the chart visualizer below.
              </p>

              {/* Responsive SVG Chart visualizer */}
              <div className="relative border border-slate-800 bg-[#070b13] rounded-2xl p-4 overflow-hidden aspect-[16/9] md:aspect-[2.2/1]">
                <svg
                  ref={svgRef}
                  onClick={handleChartClick}
                  className="w-full h-full cursor-crosshair select-none"
                  viewBox="0 0 500 200"
                  preserveAspectRatio="none"
                >
                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="500" y2="50" stroke="#1e293b" strokeDasharray="3,3" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="#1e293b" strokeDasharray="3,3" />
                  <line x1="0" y1="150" x2="500" y2="150" stroke="#1e293b" strokeDasharray="3,3" />

                  {/* Render Mock Candles */}
                  {(currentQuestion.chartState?.candles || []).map((candle: any, idx: number) => {
                    const x = 50 + idx * 100;
                    const openY = 160 - candle.open * 8;
                    const closeY = 160 - candle.close * 8;
                    const highY = 160 - candle.high * 8;
                    const lowY = 160 - candle.low * 8;
                    const isBullish = candle.close >= candle.open;

                    return (
                      <g key={idx}>
                        {/* Wick */}
                        <line x1={x} y1={highY} x2={x} y2={lowY} stroke={isBullish ? "#10b981" : "#f43f5e"} strokeWidth="2" />
                        {/* Body */}
                        <rect
                          x={x - 10}
                          y={Math.min(openY, closeY)}
                          width="20"
                          height={Math.max(Math.abs(closeY - openY), 3)}
                          fill={isBullish ? "#10b981" : "#f43f5e"}
                          stroke={isBullish ? "#059669" : "#e11d48"}
                          strokeWidth="1.5"
                          rx="2"
                        />
                      </g>
                    );
                  })}

                  {/* User click coordinates indicator */}
                  {currentAnswer?.clickedX !== undefined && currentAnswer?.clickedY !== undefined && (
                    <g>
                      <circle 
                        cx={`${currentAnswer.clickedX}%`} 
                        cy={`${currentAnswer.clickedY}%`} 
                        r="6" 
                        fill="rgba(245, 158, 11, 0.4)" 
                        stroke="#f59e0b" 
                        strokeWidth="2" 
                      />
                      <circle 
                        cx={`${currentAnswer.clickedX}%`} 
                        cy={`${currentAnswer.clickedY}%`} 
                        r="12" 
                        fill="none" 
                        stroke="#f59e0b" 
                        strokeWidth="1" 
                        className="animate-ping"
                      />
                    </g>
                  )}
                </svg>
              </div>
            </div>
          )}

          {/* Render TICKER_DECISION Question type */}
          {currentQuestion.type === "TICKER_DECISION" && (
            <div className="space-y-6">
              {/* simulated Order Flow panel */}
              <div className="p-5 bg-[#05080f] border border-slate-850 rounded-2xl font-mono text-xs space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-amber-500 uppercase tracking-widest font-black">Simulated educational ticker. Not live market data.</span>
                  </div>
                  {tickerState?.volatility && (
                    <span className={cn(
                      "text-[9px] px-2 py-0.5 rounded border uppercase font-extrabold tracking-wider",
                      tickerState.volatility === "active" ? "bg-rose-500/10 border-rose-500/20 text-rose-400" : "bg-slate-900 border-slate-800 text-slate-500"
                    )}>
                      {tickerState.volatility} volatility
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 text-[10px]">
                  {/* Bids */}
                  <div className="space-y-1">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Bids (Buy Orders)</span>
                    <div className="bg-slate-950/60 p-2 rounded-lg space-y-1">
                      {(tickerState?.bidSizes || [1.5, 2.3, 0.8]).map((size: number, i: number) => (
                        <div key={i} className="flex justify-between text-emerald-400">
                          <span>${(tickerState?.perpBid ? tickerState.perpBid - i * 5 : 62095).toFixed(2)}</span>
                          <span className="text-slate-400 font-medium">{size} BTC</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Asks */}
                  <div className="space-y-1">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Asks (Sell Orders)</span>
                    <div className="bg-slate-950/60 p-2 rounded-lg space-y-1">
                      {(tickerState?.askSizes || [0.9, 1.4, 3.1]).map((size: number, i: number) => (
                        <div key={i} className="flex justify-between text-rose-400">
                          <span>${(tickerState?.spotAsk ? tickerState.spotAsk + i * 5 : 62050).toFixed(2)}</span>
                          <span className="text-slate-400 font-medium">{size} BTC</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spot Ask vs Perp Bid Spread calculation */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[10px]">
                  <div>
                    <span className="text-slate-500 uppercase tracking-widest block text-[9px]">Perp Premium</span>
                    <span className="font-bold text-slate-200">
                      {tickerState?.spotAsk && tickerState?.perpBid ? `+$${(tickerState.perpBid - tickerState.spotAsk).toFixed(2)}` : "Loading..."}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-widest block text-[9px]">Funding Rate (8h)</span>
                    <span className="font-bold text-amber-400">
                      {tickerState?.fundingRate8h ? `+${(tickerState.fundingRate8h * 100).toFixed(3)}%` : "0.00%"}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-widest block text-[9px]">Spread Ratio</span>
                    <span className="font-bold text-indigo-400">
                      {tickerState?.spreadPct ? `${tickerState.spreadPct}%` : "0.00%"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Execution Choice Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {(currentQuestion.options || ["execute", "wait", "flat"]).map((decision, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectMCQ(i)}
                    className={cn(
                      "p-4 rounded-xl border text-center font-bold text-xs uppercase tracking-wider transition-all focus:outline-none",
                      currentAnswer?.selectedIndex === i
                        ? "bg-indigo-600 border-indigo-400 text-white shadow-xl"
                        : "bg-slate-950 border-slate-850 text-slate-400 hover:border-indigo-500/30 hover:bg-slate-900"
                    )}
                  >
                    {decision}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-widest text-slate-500 hover:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        {currentIndex === test.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={answers.length < test.questions.length || isSubmitting}
            className="flex items-center gap-2 px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl shadow-xl shadow-indigo-500/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:grayscale uppercase tracking-widest text-xs"
          >
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
            Submit Test
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(test.questions.length - 1, prev + 1))}
            disabled={currentAnswer === undefined}
            className="flex items-center gap-2 px-10 py-4 bg-slate-850 border border-slate-800 text-slate-200 font-extrabold rounded-2xl shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-widest text-xs hover:bg-slate-800"
          >
            Next Question
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
