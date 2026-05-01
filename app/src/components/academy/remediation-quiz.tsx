"use client";

import { useState } from "react";
import { AcademyButton } from "@/components/ui/academy-button";
import { CheckCircle2, ChevronRight, Lock, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { resolveRemediation } from "@/lib/assessment-actions";
import { useRouter } from "next/navigation";

interface RemediationQuizProps {
  moduleId: string;
}

const QUIZ_STEPS = [
  {
    question: "Why was your analysis considered a 'Common Mistake'?",
    options: [
      "I identified the setup before market structure was confirmed.",
      "The price action was too aggressive on the breakout.",
      "I was using a low timeframe for a high timeframe bias.",
      "All of the above."
    ],
    correct: 0
  },
  {
    question: "Where should the academy-standard stop-loss have been placed?",
    options: [
      "Exactly at the entry point.",
      "Below the last structural low or high point.",
      "Directly at the 50% equilibrium of the range.",
      "Stops are always necessary for safe practice."
    ],
    correct: 1
  },
  {
    question: "What is the recommended practice after an invalid setup?",
    options: [
      "Wait for a clear re-confirmation of market behavior.",
      "Immediate re-entry into the same zone.",
      "Review the lesson and wait for the next clear opportunity.",
      "Increase risk to recover previous losses."
    ],
    correct: 2
  }
];

export function RemediationQuiz({ moduleId }: RemediationQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isResolved, setIsResolved] = useState(false);
  const [isResolving, setIsResolving] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (selectedOption === QUIZ_STEPS[currentStep].correct) {
      if (currentStep < QUIZ_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
      } else {
        setIsResolved(true);
      }
    } else {
      // Failed a question - restart the remediation
      alert("Analysis mismatch. Let's review the steps again.");
      setCurrentStep(0);
      setSelectedOption(null);
    }
  };

  const handleUnlock = async () => {
    setIsResolving(true);
    try {
      const res = await resolveRemediation(moduleId);
      if (res.success) {
        router.push(`/course/module/${moduleId}`); // Return to module
      }
    } finally {
      setIsResolving(false);
    }
  };

  return (
    <div className="bg-white border border-[var(--ln-border)] rounded-[3rem] p-12 space-y-10 relative overflow-hidden shadow-sm">
      {!isResolved ? (
        <>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
               <span className="text-[10px] font-extrabold text-[var(--ln-teal-500)] uppercase tracking-widest">Remediation Review</span>
               <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">{currentStep + 1} / {QUIZ_STEPS.length}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[var(--ln-navy-900)] leading-tight uppercase tracking-tight">
               {QUIZ_STEPS[currentStep].question}
            </h3>
          </div>

          <div className="space-y-4">
             {QUIZ_STEPS[currentStep].options.map((option, i) => (
               <button
                 key={i}
                 onClick={() => setSelectedOption(i)}
                 className={cn(
                   "w-full text-left p-6 rounded-2xl border transition-all text-sm font-medium",
                   selectedOption === i 
                     ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)] text-[var(--ln-navy-900)]" 
                     : "bg-slate-50 border-slate-100 text-slate-500 hover:bg-slate-100"
                 )}
               >
                 {option}
               </button>
             ))}
          </div>

          <button 
            disabled={selectedOption === null}
            onClick={handleNext}
            className="w-full py-5 bg-[var(--ln-teal-500)] text-white rounded-2xl font-extrabold uppercase text-[10px] tracking-widest shadow-lg shadow-[var(--ln-teal-500)]/20 hover:bg-[var(--ln-teal-600)] transition-all disabled:opacity-30 flex items-center justify-center gap-3"
          >
             CONTINUE REVIEW <ChevronRight size={18} />
          </button>
        </>
      ) : (
        <div className="text-center space-y-10 animate-in zoom-in-95 duration-500">
           <div className="w-24 h-24 rounded-[2rem] bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20 flex items-center justify-center text-[var(--ln-teal-500)] mx-auto shadow-sm">
              <CheckCircle2 size={48} />
           </div>
           <div className="space-y-3">
              <h3 className="text-3xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tighter">Review Complete</h3>
              <p className="text-[var(--ln-text-secondary)] text-sm max-w-xs mx-auto font-medium leading-relaxed">
                 Academy logic has been verified. You are ready to retry your practice session.
              </p>
           </div>

           <div className="pt-8 border-t border-slate-50">
              <button 
                onClick={handleUnlock}
                disabled={isResolving}
                className="w-full py-5 bg-[var(--ln-teal-500)] text-white rounded-2xl font-extrabold uppercase text-[10px] tracking-widest shadow-lg shadow-[var(--ln-teal-500)]/20 hover:bg-[var(--ln-teal-600)] transition-all disabled:opacity-30"
              >
                 {isResolving ? "SAVING..." : "RETRY PRACTICE"}
              </button>
           </div>
        </div>
      )}
    </div>
  );
}
