"use client";

import { useState, useEffect, useCallback } from "react";
import { submitTest } from "@/lib/test-actions";
import { ChevronRight, ChevronLeft, Timer, Award, AlertTriangle, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useNava } from "@/hooks/useNava";

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
  const { triggerMessage } = useNava();
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

  useEffect(() => {
    if (results) {
      triggerMessage(results.passed ? 'test_result_passed' : 'test_result_review_needed');
    }
  }, [results, triggerMessage]);

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
        className="max-w-2xl mx-auto text-center space-y-8 p-12 bg-white rounded-[2.5rem] border border-[var(--ln-border)] shadow-xl"
      >
        <div className="flex justify-center">
          {results.passed ? (
            <div className="p-6 bg-[var(--ln-teal-soft)] rounded-full">
              <CheckCircle2 className="w-16 h-16 text-[var(--ln-teal-500)]" />
            </div>
          ) : (
            <div className="p-6 bg-amber-50 rounded-full">
              <AlertTriangle className="w-16 h-16 text-amber-500" />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">
            {results.passed ? "Test Passed" : "Test Review Required"}
          </h2>
          <p className="text-[var(--ln-text-secondary)] font-semibold uppercase tracking-[0.2em] text-[10px]">
            Level {level} Knowledge Review
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 py-8">
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <span className="block text-[10px] font-extrabold text-[var(--ln-text-muted)] uppercase tracking-widest mb-1">Final Score</span>
            <span className={cn("text-3xl font-extrabold", results.passed ? "text-[var(--ln-teal-600)]" : "text-rose-500")}>
              {results.score}%
            </span>
          </div>
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <span className="block text-[10px] font-extrabold text-[var(--ln-text-muted)] uppercase tracking-widest mb-1">Final Result</span>
            <span className={cn("text-3xl font-extrabold", results.passed ? "text-[var(--ln-teal-600)]" : "text-rose-500")}>
              {results.passed ? "PASS" : "FAIL"}
            </span>
          </div>
        </div>

        <p className="text-sm text-[var(--ln-text-secondary)] font-medium leading-relaxed max-w-md mx-auto">
          {results.message || (results.passed
            ? "You met the required score for this level."
            : "Review the material and try again when you are ready.")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={() => router.push("/course")}
            className="flex-1 py-4 bg-slate-100 text-slate-600 font-extrabold rounded-2xl hover:bg-slate-200 transition-all uppercase tracking-widest text-xs"
          >
            Review Course Material
          </button>
          {!results.passed ? (
            <button
              onClick={() => window.location.reload()}
              data-nava-target="test-result-action"
              className="flex-1 py-4 bg-[var(--ln-teal-500)] text-white font-extrabold rounded-2xl hover:bg-[var(--ln-teal-600)] transition-all shadow-lg shadow-[var(--ln-teal-500)]/20 uppercase tracking-widest text-xs"
            >
              Retry Test
            </button>
          ) : (
            <button
              onClick={() => router.push("/course")}
              data-nava-target="test-result-action"
              className="flex-1 py-4 bg-[var(--ln-teal-500)] text-white font-extrabold rounded-2xl hover:bg-[var(--ln-teal-600)] transition-all shadow-lg shadow-[var(--ln-teal-500)]/20 uppercase tracking-widest text-xs"
            >
              Continue Learning Path
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto p-12 text-center space-y-6 bg-white rounded-[2.5rem] border border-rose-100 shadow-sm">
        <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-2">
          <AlertTriangle className="w-8 h-8 text-rose-500" />
        </div>
        <h3 className="text-xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">Submission Error</h3>
        <p className="text-[var(--ln-text-secondary)] font-medium">{error}</p>
        <button
          onClick={() => router.push("/course")}
          className="px-8 py-3 bg-slate-100 text-slate-600 font-extrabold rounded-xl hover:bg-slate-200 transition-all uppercase tracking-widest text-[10px]"
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
      <div className="flex items-center justify-between px-6 py-4 bg-white border border-[var(--ln-border)] rounded-[2rem] shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-[var(--ln-teal-soft)] rounded-xl">
            <Award className="w-5 h-5 text-[var(--ln-teal-500)]" />
          </div>
          <div>
            <h2 className="text-xs font-extrabold text-[var(--ln-navy-900)] uppercase tracking-[0.1em]">{test.title}</h2>
            <p className="text-[10px] text-[var(--ln-text-muted)] font-extrabold uppercase tracking-tighter">
              Question {currentIndex + 1} of {test.questions.length}
            </p>
          </div>
        </div>

        <div className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-sm border transition-all",
          timeLeft < 60
            ? "bg-amber-50 border-amber-200 text-amber-600"
            : "bg-slate-50 border-slate-100 text-[var(--ln-navy-900)]"
        )}>
          <Timer className={cn("w-4 h-4", timeLeft < 60 && "animate-pulse")} />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-[var(--ln-teal-500)] transition-all duration-700 ease-in-out"
          style={{ width: `${((currentIndex + 1) / test.questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-12 bg-white border border-[var(--ln-border)] rounded-[2.5rem] shadow-sm space-y-10"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--ln-navy-900)] leading-tight tracking-tight">
            {currentQuestion.question}
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={cn(
                  "flex items-center gap-4 p-5 rounded-[1.5rem] border text-left transition-all group",
                  selectedAnswer?.selectedIndex === i
                    ? "bg-[var(--ln-teal-500)] border-[var(--ln-teal-500)] text-white shadow-lg shadow-[var(--ln-teal-500)]/20"
                    : "bg-white border-slate-100 text-[var(--ln-text-secondary)] hover:border-[var(--ln-teal-500)]/30 hover:bg-slate-50"
                )}
              >
                <div className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-xs border transition-colors",
                  selectedAnswer?.selectedIndex === i
                    ? "bg-white/20 border-white/20 text-white"
                    : "bg-slate-50 border-slate-200 text-[var(--ln-text-muted)] group-hover:border-[var(--ln-teal-500)]/20"
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
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-widest text-[var(--ln-text-muted)] hover:text-[var(--ln-navy-900)] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        {currentIndex === test.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={answers.length < test.questions.length || isSubmitting}
            className="flex items-center gap-2 px-10 py-4 bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white font-extrabold rounded-2xl shadow-xl shadow-[var(--ln-teal-500)]/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:grayscale uppercase tracking-widest text-xs"
          >
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
            Submit Test
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(test.questions.length - 1, prev + 1))}
            disabled={selectedAnswer === undefined}
            className="flex items-center gap-2 px-10 py-4 bg-[var(--ln-navy-900)] text-white font-extrabold rounded-2xl shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-widest text-xs"
          >
            Next Question
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
