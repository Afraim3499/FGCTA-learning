"use client";

import { useState, useEffect, useCallback } from "react";
import { submitTest } from "@/lib/test-actions";
import { ChevronRight, ChevronLeft, Timer, Award, AlertTriangle, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  id: string;
  question: string;
  options: string[];
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: string; selectedIndex: number }[]>([]);
  const [timeLeft, setTimeLeft] = useState(test.timeLimit * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [results, setResults] = useState<{ score: number; passed: boolean; message?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();

  const currentQuestion = test.questions[currentIndex];

  const handleSelect = (optionIndex: number) => {
    setAnswers((prev) => {
      const existing = prev.filter((a) => a.questionId !== currentQuestion.id);
      return [...existing, { questionId: currentQuestion.id, selectedIndex: optionIndex }];
    });
  };

  const handleSubmit = useCallback(async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await submitTest(level, answers) as any;
      if (res.success) {
        setResults({ score: res.score, passed: res.passed, message: res.message });
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
    if (results || timeLeft <= 0) return;
    
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
  }, [timeLeft, results, handleSubmit]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (results) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center space-y-8 p-12 bg-[var(--color-surface-secondary)] rounded-3xl border border-[var(--color-border-default)] shadow-2xl"
      >
        <div className="flex justify-center">
          {results.passed ? (
            <div className="p-6 bg-emerald-500/20 rounded-full">
              <Award className="w-16 h-16 text-emerald-400" />
            </div>
          ) : (
            <div className="p-6 bg-rose-500/20 rounded-full">
              <XCircle className="w-16 h-16 text-rose-400" />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-white">
            {results.passed ? "Knowledge Certified" : "Assessment Failed"}
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Level {level} Knowledge Assessment
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 py-8">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
            <span className="block text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Score</span>
            <span className={cn("text-3xl font-bold", results.passed ? "text-emerald-400" : "text-rose-400")}>
              {results.score}%
            </span>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
            <span className="block text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Status</span>
            <span className={cn("text-3xl font-bold", results.passed ? "text-emerald-400" : "text-rose-400")}>
              {results.passed ? "PASS" : "FAIL"}
            </span>
          </div>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)]">
          {results.message || (results.passed 
            ? "Congratulations! You have unlocked the next level of the curriculum." 
            : "You did not meet the 80% passing threshold. Please review the course material and try again.")}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => router.push("/course")}
            className="flex-1 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/5"
          >
            Back to Academy
          </button>
          {!results.passed && (
            <button
              onClick={() => window.location.reload()}
              className="flex-1 py-4 bg-[var(--color-brand-500)] text-white font-bold rounded-xl hover:bg-[var(--color-brand-600)] transition-all shadow-lg shadow-brand-500/20"
            >
              Retry Assessment
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto p-12 text-center space-y-6 bg-[var(--color-surface-secondary)] rounded-3xl border border-rose-500/20">
        <AlertTriangle className="w-12 h-12 text-rose-400 mx-auto" />
        <h3 className="text-xl font-bold text-white">Execution Error</h3>
        <p className="text-[var(--color-text-secondary)]">{error}</p>
        <button
          onClick={() => router.push("/course")}
          className="px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
        >
          Return to Academy
        </button>
      </div>
    );
  }

  const selectedAnswer = answers.find((a) => a.questionId === currentQuestion.id);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Test Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-2xl">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-[var(--color-brand-500)]/20 rounded-lg">
            <Award className="w-5 h-5 text-[var(--color-brand-400)]" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">{test.title}</h2>
            <p className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-tighter">
              Question {currentIndex + 1} of {test.questions.length}
            </p>
          </div>
        </div>

        <div className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-sm border transition-colors",
          timeLeft < 60 ? "bg-rose-500/20 border-rose-500/30 text-rose-400 animate-pulse" : "bg-white/5 border-white/5 text-[var(--color-brand-400)]"
        )}>
          <Timer className="w-4 h-4" />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[var(--color-brand-500)] transition-all duration-500" 
          style={{ width: `${((currentIndex + 1) / test.questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="p-10 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-3xl shadow-xl space-y-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {currentQuestion.question}
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={cn(
                  "flex items-center gap-4 p-5 rounded-2xl border text-left transition-all group",
                  selectedAnswer?.selectedIndex === i
                    ? "bg-[var(--color-brand-500)] border-[var(--color-brand-400)] text-white shadow-lg shadow-brand-500/10"
                    : "bg-white/5 border-transparent text-[var(--color-text-secondary)] hover:bg-white/10 hover:border-white/10 hover:text-white"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs border transition-colors",
                  selectedAnswer?.selectedIndex === i
                    ? "bg-white/20 border-white/20 text-white"
                    : "bg-white/5 border-white/5 text-[var(--color-text-muted)] group-hover:text-white"
                )}>
                  {String.fromCharCode(65 + i)}
                </div>
                <span className="font-bold">{option}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[var(--color-text-muted)] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        {currentIndex === test.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={answers.length < test.questions.length || isSubmitting}
            className="flex items-center gap-2 px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-500/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:grayscale"
          >
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
            Submit Assessment
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(test.questions.length - 1, prev + 1))}
            disabled={selectedAnswer === undefined}
            className="flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-2xl shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next Question
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
