import React, { useState, useEffect } from "react";
import { 
  Compass, 
  ArrowRight, 
  RotateCcw, 
  XCircle, 
  CheckCircle2,
  Lock,
  Search,
  Server,
  Layers,
  Coins,
  Activity,
  AlertTriangle,
  Award,
  Flame,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Eye,
  ShieldAlert,
  Play
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  PracticeInstitutionalFrame,
  PracticeMentorInsight,
  PracticeReadingQualityBadge,
  PracticeToggleSelector,
  PracticeStepWorkflow
} from "./shared";

/**
 * Card 1: PracticeDisciplineLabFoundation
 * Visual Key: practice-discipline-lab-foundation
 */
export const PracticeDisciplineLabFoundation = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = [
    {
      title: "1. Scenario",
      desc: "The simulator loads a market historical period.",
      tip: "Treat it as an objective training exercise, not a game."
    },
    {
      title: "2. Reading",
      desc: "Audit the chart context, location, and structure before clicking.",
      tip: "If evidence is missing, state it clearly."
    },
    {
      title: "3. Review Condition",
      desc: "Define the exact level where your logic is proven wrong before acting.",
      tip: "This is your logical safety trigger."
    },
    {
      title: "4. Action / Idle",
      desc: "Select a valid practice action or choose to stand aside (Active Idle).",
      tip: "Standing aside is a high-level practice action."
    },
    {
      title: "5. Result",
      desc: "Observe what the price did after your choice.",
      tip: "The result belongs to the market, not your skill."
    },
    {
      title: "6. Process Quality",
      desc: "Grade your session by how well you followed the cockpit rules.",
      tip: "Process compliance is your true training score."
    }
  ];

  return (
    <PracticeInstitutionalFrame label="Simulation Practice Flow" status="FOUNDATION LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Click through the steps of a disciplined simulator session to see how a professional learner builds repeatable judgment.
        </p>

        {/* Pipeline Map */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 w-full max-w-3xl">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                type="button"
                key={s.title}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "p-3 rounded-2xl border transition-all text-left flex flex-col justify-between min-h-[90px] cursor-pointer",
                  isActive
                    ? "bg-[#071B36] text-white border-[#071B36] shadow-md scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-cyan-500 hover:bg-slate-50"
                )}
              >
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider block mb-1",
                  isActive ? "text-emerald-400" : "text-slate-500"
                )}>
                  Step {idx + 1}
                </span>
                <span className="text-xs font-black leading-tight mb-2 uppercase tracking-tight">{s.title.split(". ")[1]}</span>
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  isActive ? "bg-emerald-400 animate-ping" : "bg-slate-300"
                )} />
              </button>
            );
          })}
        </div>

        {/* Focus Panel */}
        <div className="w-full max-w-2xl bg-[#071B36] text-white rounded-2xl p-5 border border-slate-700 relative overflow-hidden text-left min-h-[120px] flex flex-col justify-center">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#06B6D4_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative z-10">
            <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest block mb-1 font-black">
              Practice Stage &bull; {steps[activeStep].title}
            </span>
            <h5 className="text-sm font-black uppercase tracking-tight mb-1 text-white">
              {steps[activeStep].title.split(". ")[1]}
            </h5>
            <p className="text-xs leading-relaxed max-w-2xl text-slate-200 whitespace-normal break-words">
              {steps[activeStep].desc}
            </p>
            <p className="mt-2 text-[10px] text-emerald-300 font-bold italic">
              Pro Tip: {steps[activeStep].tip}
            </p>
          </div>
        </div>

        <PracticeMentorInsight 
          text="A simulator does not tell you if you will make money tomorrow. It tells you if you can control your decisions and follow your rules today."
          analogy="A simulator is like a pilot's flight training device. You do not use it to win points; you use it to practice emergency checklists until your responses are automatic."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};

/**
 * Card 2: SimulatorNotVideoGame
 * Visual Key: simulator-not-video-game
 */
export const SimulatorNotVideoGame = () => {
  const [mindset, setMindset] = useState<"game" | "training">("training");

  const specs = {
    game: {
      title: "Video-Game Mindset",
      desc: "Chasing simulated profit balances, clicking quickly, treating charts as things to guess, and getting angry at losses.",
      items: [
        { label: "PnL Chasing", val: "Tries to make virtual account balance go up." },
        { label: "Feverish Speed", val: "Clicks repeatedly to get instant outcomes." },
        { label: "Outcome Grading", val: "Wins are called good; losses are called bad." },
        { label: "Guessing Rules", val: "Acts on random candle movements without evidence." }
      ],
      quality: "VIDEO-GAME MINDSET"
    },
    training: {
      title: "Training Mindset",
      desc: "Focusing on checklist compliance, defining invalidation triggers, accepting stand-asides, and auditing process errors.",
      items: [
        { label: "Process Focus", val: "Success is measured by checklist compliance." },
        { label: "Controlled Action", val: "Acts only when pre-action reasoning is written." },
        { label: "Rule Grading", val: "Losing with good rules is called excellent practice." },
        { label: "Cognitive Discipline", val: "Treats stand-asides as active, valued decisions." }
      ],
      quality: "TRAINING MINDSET"
    }
  };

  const current = specs[mindset];

  return (
    <PracticeInstitutionalFrame label="Simulator Mindset Auditor" status="MINDSET LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex justify-between items-center w-full max-w-2xl">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            Toggle between the Video-Game and Training mindsets to audit how your practice goals affect your skill development.
          </p>
          <PracticeToggleSelector 
            options={[
              { id: "game", name: "Video-Game Mindset" },
              { id: "training", name: "Training Mindset" }
            ]}
            selectedId={mindset}
            onChange={(id) => setMindset(id as any)}
          />
        </div>

        {/* Comparison Board */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Detail Grid */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between text-left min-h-[220px]">
            <div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Mindset Audit</span>
              <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
                {current.title}
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed mb-4 whitespace-normal break-words">
                {current.desc}
              </p>
            </div>
            <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Diagnostic Badge</span>
              <PracticeReadingQualityBadge quality={current.quality} />
            </div>
          </div>

          {/* Items checklist */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left flex flex-col gap-3 justify-center">
            {current.items.map((item) => (
              <div key={item.label} className="p-2.5 bg-white rounded-xl border border-slate-100 flex flex-col">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</span>
                <span className="text-xs font-bold text-[#071B36] leading-snug">{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        <PracticeMentorInsight 
          text="When you practice to make money, you treat the market as a slot machine. When you practice to verify your reasoning, you treat it as a laboratory."
          analogy="Chasing simulated PnL is like a student pilot trying to perform stunts in a flight simulator to get high scores, instead of practicing landing in a crosswind."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};

/**
 * Card 3: ValidPracticeAttemptBoard
 * Visual Key: valid-practice-attempt-board
 */
export const ValidPracticeAttemptBoard = () => {
  const [checks, setChecks] = useState({
    location: false,
    structure: false,
    review: false,
    logic: false
  });
  const [attempted, setAttempted] = useState<boolean>(false);

  const isValid = checks.location && checks.structure && checks.review && checks.logic;

  const toggleCheck = (key: keyof typeof checks) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
    setAttempted(false);
  };

  return (
    <PracticeInstitutionalFrame label="Practice Attempt Validator" status="VALIDATION LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Toggle the pre-action checklist items below. Try to click 'Simulate Practice Action' to see if the attempt is valid or invalid.
        </p>

        {/* Checklist Panel */}
        <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-left flex flex-col gap-3">
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Pre-Click Checklist</span>
          
          <button
            type="button"
            onClick={() => toggleCheck("location")}
            className="flex items-center justify-between w-full p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 text-left cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-xs font-black text-[#071B36] uppercase tracking-tight">1. Observe Location</span>
              <span className="text-[10px] text-slate-655 text-slate-750">Is price testing a high-priority reaction zone?</span>
            </div>
            <div className={cn("w-4 h-4 rounded border flex items-center justify-center font-bold text-xs text-white", checks.location ? "bg-emerald-500 border-emerald-500" : "border-slate-300")}>
              {checks.location && "✓"}
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleCheck("structure")}
            className="flex items-center justify-between w-full p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 text-left cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-xs font-black text-[#071B36] uppercase tracking-tight">2. Map Structure</span>
              <span className="text-[10px] text-slate-655 text-slate-750">Have you mapped the recent swing high/low box?</span>
            </div>
            <div className={cn("w-4 h-4 rounded border flex items-center justify-center font-bold text-xs text-white", checks.structure ? "bg-emerald-500 border-emerald-500" : "border-slate-300")}>
              {checks.structure && "✓"}
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleCheck("review")}
            className="flex items-center justify-between w-full p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 text-left cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-xs font-black text-[#071B36] uppercase tracking-tight">3. Define Invalidation Trigger</span>
              <span className="text-[10px] text-slate-655 text-slate-750">Do you know what level would prove your reading wrong?</span>
            </div>
            <div className={cn("w-4 h-4 rounded border flex items-center justify-center font-bold text-xs text-white", checks.review ? "bg-emerald-500 border-emerald-500" : "border-slate-300")}>
              {checks.review && "✓"}
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleCheck("logic")}
            className="flex items-center justify-between w-full p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 text-left cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-xs font-black text-[#071B36] uppercase tracking-tight">4. Pre-action Reasoning</span>
              <span className="text-[10px] text-slate-655 text-slate-750">Have you stated your reasoning before clicking?</span>
            </div>
            <div className={cn("w-4 h-4 rounded border flex items-center justify-center font-bold text-xs text-white", checks.logic ? "bg-emerald-500 border-emerald-500" : "border-slate-300")}>
              {checks.logic && "✓"}
            </div>
          </button>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => setAttempted(true)}
          className={cn(
            "px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer",
            isValid ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-slate-200 hover:bg-slate-300 text-slate-600"
          )}
        >
          Simulate Practice Action
        </button>

        {/* Output Diagnostic */}
        {attempted && (
          <div className={cn(
            "w-full max-w-xl rounded-2xl p-5 text-left border relative overflow-hidden flex items-center justify-between min-h-[110px]",
            isValid ? "bg-emerald-50 border-emerald-350" : "bg-rose-50 border-rose-350"
          )}>
            <div className="relative z-10 flex-1">
              <span className="text-[8px] font-mono uppercase tracking-widest block mb-1 font-black">Practice Audit Output</span>
              {isValid ? (
                <div>
                  <h5 className="text-sm font-black text-emerald-950 uppercase tracking-tight mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-600 animate-pulse" /> Valid Attempt
                  </h5>
                  <p className="text-xs text-emerald-900 leading-relaxed whitespace-normal break-words max-w-sm">
                    Success! Your reasoning was structured prior to the action. This session will be saved as high quality.
                  </p>
                </div>
              ) : (
                <div>
                  <h5 className="text-sm font-black text-rose-950 uppercase tracking-tight mb-1 flex items-center gap-1.5">
                    <ShieldAlert size={14} className="text-rose-600" /> Invalid Attempt
                  </h5>
                  <p className="text-xs text-rose-900 leading-relaxed whitespace-normal break-words max-w-sm">
                    Warning! Clicking before checking your criteria is a process failure. You are gambling, not training.
                  </p>
                </div>
              )}
            </div>

            <div className="relative z-10 shrink-0 ml-4 flex flex-col items-end gap-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Grading Badge</span>
              <PracticeReadingQualityBadge quality={isValid ? "VALID ATTEMPT" : "PROCESS FAILURE"} />
            </div>
          </div>
        )}

        <PracticeMentorInsight 
          text="If you click a button first and think of the reason later, your brain is treating the chart as a visual surprise, not a structured audit."
          analogy="A surgeon does not cut open a patient and then decide what surgery to perform. They audit the symptoms, plan the procedure, and only then pick up the scalpel."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};

/**
 * Card 4: OutcomeBiasPracticeLab
 * Visual Key: outcome-bias-practice-lab
 */
export const OutcomeBiasPracticeLab = () => {
  const [activeQuad, setActiveQuad] = useState<string>("B");

  const quadrants = [
    {
      id: "A",
      title: "Good Process + Good Result",
      subtitle: "Ideal Practice Session",
      desc: "You followed your checklist, marked support location, defined your review condition, and the trade won. Excellent process alignment.",
      badge: "PROCESS SUCCESS",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-300",
      bgColor: "bg-emerald-50/50"
    },
    {
      id: "B",
      title: "Good Process + Bad Result",
      subtitle: "Disciplined Loss",
      desc: "You followed every rule, but price hit your review condition and closed outside. This is a successful practice session. You exited cleanly at your trigger.",
      badge: "VALID ATTEMPT",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-300",
      bgColor: "bg-cyan-50/50"
    },
    {
      id: "C",
      title: "Bad Process + Good Result",
      subtitle: "Outcome Bias Trap",
      desc: "You clicked buy out of boredom with no clear setup. Price happened to spike up and you won. This is a failed practice session; it reinforces gambling habits.",
      badge: "OUTCOME BIAS TRAP",
      textColor: "text-rose-700",
      borderColor: "border-rose-300",
      bgColor: "bg-rose-50/50"
    },
    {
      id: "D",
      title: "Bad Process + Bad Result",
      subtitle: "Process Failure",
      desc: "You chased a fast candle out of FOMO with no pre-action reasoning. Price instantly reversed and you lost. A complete failure of cockpit discipline.",
      badge: "PROCESS FAILURE",
      textColor: "text-slate-700",
      borderColor: "border-slate-300",
      bgColor: "bg-slate-100"
    }
  ];

  const current = quadrants.find(q => q.id === activeQuad)!;

  return (
    <PracticeInstitutionalFrame label="Outcome Bias Matrix" status="OUTCOME LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Select a quadrant in the process/result matrix to evaluate its true value for your training record.
        </p>

        {/* Quadrant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
          {quadrants.map((q) => {
            const isActive = activeQuad === q.id;
            return (
              <button
                type="button"
                key={q.id}
                onClick={() => setActiveQuad(q.id)}
                className={cn(
                  "p-4 rounded-2xl border text-left flex flex-col justify-between min-h-[110px] transition-all cursor-pointer",
                  isActive
                    ? "bg-[#071B36] text-white border-[#071B36] shadow-md scale-102"
                    : "bg-white text-slate-800 border-slate-200 hover:border-cyan-500 hover:bg-slate-50"
                )}
              >
                <div className="flex justify-between items-start w-full">
                  <span className={cn(
                    "text-xs font-black uppercase tracking-tight",
                    isActive ? "text-cyan-400" : "text-[#071B36]"
                  )}>
                    {q.title.split(" + ")[0]}
                  </span>
                  <span className={cn(
                    "text-[8px] font-mono font-black uppercase px-2 py-0.5 rounded border tracking-wider",
                    isActive 
                      ? "bg-slate-800 border-slate-700 text-slate-300"
                      : "bg-slate-50 border-slate-200 text-slate-500"
                  )}>
                    {q.id}
                  </span>
                </div>
                <div className="mt-2 text-left">
                  <span className={cn(
                    "text-[10px] font-black uppercase block tracking-wider",
                    isActive ? "text-white" : "text-slate-600"
                  )}>
                    {q.title.split(" + ")[1]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Diagnostic Panel */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Diagnostic Output &bull; Case {current.id}</span>
            <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
              {current.subtitle}
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              {current.desc}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Practice Score</span>
            <PracticeReadingQualityBadge quality={current.badge} />
          </div>
        </div>

        <PracticeMentorInsight 
          text="Outcome bias is the enemy of skill. If you call a trade 'good' because you got lucky and made virtual cents, you are training your brain to gamble."
          analogy="If a driver speeds through a red light and safely crosses without hitting anyone, that doesn't make it a good decision. They still broke the process rules and were lucky."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};

/**
 * Card 5: ActiveIdleStandAsideLab
 * Visual Key: active-idle-stand-aside-lab
 */
export const ActiveIdleStandAsideLab = () => {
  const [selection, setSelection] = useState<string | null>(null);

  const options = [
    {
      id: "buy",
      name: "Simulate Buy",
      desc: "Entering buy positioning here is a gamble. The chart context is highly congested and lacks clear swing highs/lows.",
      quality: "PROCESS FAILURE"
    },
    {
      id: "sell",
      name: "Simulate Sell",
      desc: "Entering sell positioning here is a gamble. There is no clear resistance level or rejection evidence.",
      quality: "PROCESS FAILURE"
    },
    {
      id: "idle",
      name: "Active Idle / Stand Aside",
      desc: "Perfect! You recognized that the evidence is messy and chose to stand aside. This is a valid, high-value practice action.",
      quality: "ACTIVE IDLE"
    }
  ];

  const current = selection ? options.find(o => o.id === selection)! : null;

  return (
    <PracticeInstitutionalFrame label="Active Idle Decision Simulator" status="ACTIVE IDLE LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        {/* Mock Chart displaying messy sideways action */}
        <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden min-h-[140px] flex flex-col justify-between">
          <div className="absolute top-3 left-3 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Active Simulator Feed &bull; Sideways Chop</span>
          </div>

          {/* Overlapping wiggles */}
          <div className="h-16 flex items-center justify-center gap-1.5 w-full mt-6">
            <div className="w-4 h-6 bg-slate-300 border border-slate-400 relative">
              <div className="absolute h-8 w-px bg-slate-400 -top-1 left-1.5" />
            </div>
            <div className="w-4 h-8 bg-slate-400 border border-slate-500 relative">
              <div className="absolute h-10 w-px bg-slate-500 -top-1 left-1.5" />
            </div>
            <div className="w-4 h-5 bg-slate-300 border border-slate-400 relative">
              <div className="absolute h-7 w-px bg-slate-400 -top-1 left-1.5" />
            </div>
            <div className="w-4 h-6 bg-slate-400 border border-slate-500 relative">
              <div className="absolute h-8 w-px bg-slate-500 -top-1 left-1.5" />
            </div>
          </div>
          
          <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block text-center mt-2">Choppy, overlapping candles with no clear location</span>
        </div>

        {/* Selector Action Row */}
        <div className="flex flex-wrap gap-3 justify-center">
          {options.map((opt) => (
            <button
              type="button"
              key={opt.id}
              onClick={() => setSelection(opt.id)}
              className={cn(
                "px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer",
                selection === opt.id
                  ? opt.id === "idle"
                    ? "bg-emerald-600 text-white"
                    : "bg-rose-600 text-white"
                  : "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50"
              )}
            >
              {opt.name}
            </button>
          ))}
        </div>

        {/* Display feedback */}
        {current && (
          <div className={cn(
            "w-full max-w-xl rounded-2xl p-5 text-left border relative overflow-hidden flex items-center justify-between min-h-[110px]",
            selection === "idle" ? "bg-emerald-50 border-emerald-350" : "bg-rose-50 border-rose-350"
          )}>
            <div className="relative z-10 flex-1">
              <span className="text-[8px] font-mono uppercase tracking-widest block mb-1 font-black">Decision Evaluation</span>
              <h5 className="text-sm font-black uppercase tracking-tight mb-1 text-slate-900">
                {current.name}
              </h5>
              <p className="text-xs text-slate-800 leading-relaxed whitespace-normal break-words max-w-sm">
                {current.desc}
              </p>
            </div>
            <div className="relative z-10 shrink-0 ml-4 flex flex-col items-end gap-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Process Score</span>
              <PracticeReadingQualityBadge quality={current.quality} />
            </div>
          </div>
        )}

        <PracticeMentorInsight 
          text="Active idle is not 'giving up.' It is a conscious, logic-backed choice. Standing aside on noise is a sign of high skill."
          analogy="A professional hunter does not shoot at empty leaves out of boredom. They stand completely still and wait for the prey to step into the clear clearing."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};

/**
 * Card 6: BoredomClickingWarningBoard
 * Visual Key: boredom-clicking-warning-board
 */
export const BoredomClickingWarningBoard = () => {
  const [activeLoop, setActiveLoop] = useState<"boredom" | "discipline">("discipline");

  const loops = {
    boredom: {
      title: "Boredom Loop (Junk Practice)",
      steps: [
        { name: "Restlessness", detail: "Chart goes sideways. Learner gets bored." },
        { name: "Forced Search", desc: "Forcing a setup where none exists." },
        { name: "Impulsive Click", desc: "Taking action just to get outcomes." },
        { name: "Gamble Result", desc: "Random win/loss creates false learning." }
      ],
      quality: "PROCESS FAILURE",
      remedy: "Stand aside, tag as Unclear, and wait."
    },
    discipline: {
      title: "Discipline Loop (Trained Practice)",
      steps: [
        { name: "Observation", detail: "Chart goes sideways. Learner notes chop." },
        { name: "Active Idle", desc: "Actively choosing to stand aside." },
        { name: "Clean Record", desc: "Saving session as compliant process." },
        { name: "Logical Reset", desc: "Wait with neutral eyes for verified setups." }
      ],
      quality: "PROCESS SUCCESS",
      remedy: "Cognitive control: patience is the action."
    }
  };

  const current = loops[activeLoop];

  return (
    <PracticeInstitutionalFrame label="Boredom Warning Analyzer" status="BOREDOM LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex justify-between items-center w-full max-w-2xl">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            Toggle between the loops to analyze how boredom degrades your practice data quality.
          </p>
          <PracticeToggleSelector 
            options={[
              { id: "boredom", name: "Boredom Loop" },
              { id: "discipline", name: "Discipline Loop" }
            ]}
            selectedId={activeLoop}
            onChange={(id) => setActiveLoop(id as any)}
          />
        </div>

        {/* Process Map */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 w-full max-w-3xl">
          {current.steps.map((step, idx) => (
            <div key={step.name} className="p-3 bg-white border border-slate-200 rounded-2xl text-left min-h-[100px] flex flex-col justify-between">
              <span className="text-[9px] font-black text-[#071B36] uppercase tracking-wider block mb-1">
                Stage {idx + 1}
              </span>
              <span className="text-xs font-black text-cyan-600 uppercase tracking-tight block mb-1">{step.name}</span>
              <span className="text-[10px] text-slate-655 text-slate-750 font-medium leading-relaxed">{'detail' in step ? step.detail : 'desc' in step ? step.desc : ''}</span>
            </div>
          ))}
        </div>

        {/* Audit Details */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Diagnostic Output</span>
            <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
              {current.title}
            </h5>
            <p className="text-xs text-slate-700 font-bold">
              Remedy: <span className="text-cyan-600 font-normal">{current.remedy}</span>
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Diagnostic Badge</span>
            <PracticeReadingQualityBadge quality={current.quality} />
          </div>
        </div>

        <PracticeMentorInsight 
          text="The boredom click is a search for stimulation, not analysis. If you click because nothing is happening, you pay a boredom tax to the market."
          analogy="Boredom clicking is like a security guard shooting their gun because they got bored during their shift. It is reckless, invalid, and dangerous."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};

/**
 * Card 7: ChasingSpeedPracticeTrap
 * Visual Key: chasing-speed-practice-trap
 */
export const ChasingSpeedPracticeTrap = () => {
  const [userAction, setUserAction] = useState<string | null>(null);

  return (
    <PracticeInstitutionalFrame label="Urgency Trap Auditor" status="CHASING LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        {/* Mock Chart showing a massive fast candle */}
        <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden min-h-[140px] flex flex-col justify-between">
          <div className="absolute top-3 left-3 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Active Simulator Feed &bull; Rapid Green candle</span>
          </div>

          {/* Large candle */}
          <div className="h-16 flex items-end justify-center w-full mt-6">
            <div className="w-6 h-14 bg-emerald-500 border border-emerald-600 relative animate-pulse">
              <div className="absolute h-18 w-px bg-emerald-600 -top-1 left-2.5" />
            </div>
          </div>
          
          <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block text-center mt-2">
            BTC Spikes $1,200 in 15 seconds! High speed wick is printing!
          </span>
        </div>

        {/* Decision options */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setUserAction("chase")}
            className="px-5 py-3 rounded-2xl bg-rose-600 text-white font-black text-xs uppercase tracking-wider shadow-sm hover:bg-rose-700 cursor-pointer"
          >
            Click Buy Now!
          </button>
          <button
            type="button"
            onClick={() => setUserAction("pause")}
            className="px-5 py-3 rounded-2xl bg-white text-slate-800 border border-slate-200 font-black text-xs uppercase tracking-wider shadow-sm hover:bg-slate-50 cursor-pointer"
          >
            Pause & Check Location
          </button>
        </div>

        {/* Display feedback */}
        {userAction && (
          <div className={cn(
            "w-full max-w-xl rounded-2xl p-5 text-left border relative overflow-hidden flex items-center justify-between min-h-[110px]",
            userAction === "pause" ? "bg-emerald-50 border-emerald-350" : "bg-rose-50 border-rose-350"
          )}>
            <div className="relative z-10 flex-1">
              <span className="text-[8px] font-mono uppercase tracking-widest block mb-1 font-black">Audit Feedback</span>
              {userAction === "pause" ? (
                <div>
                  <h5 className="text-sm font-black text-emerald-950 uppercase tracking-tight mb-1">
                    Disciplined Observation
                  </h5>
                  <p className="text-xs text-emerald-900 leading-relaxed whitespace-normal break-words max-w-sm">
                    Perfect! You paused. You verified that price is testing midpoint empty space, far from any reaction zone support. You choose to stand aside.
                  </p>
                </div>
              ) : (
                <div>
                  <h5 className="text-sm font-black text-rose-950 uppercase tracking-tight mb-1">
                    Urgency Trap Triggered
                  </h5>
                  <p className="text-xs text-rose-900 leading-relaxed whitespace-normal break-words max-w-sm">
                    Failure! You bought the wick top out of urgency. Price pulled back 1% immediately. Chasing speed without checking location is an invalid attempt.
                  </p>
                </div>
              )}
            </div>
            <div className="relative z-10 shrink-0 ml-4 flex flex-col items-end gap-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Process Score</span>
              <PracticeReadingQualityBadge quality={userAction === "pause" ? "VALID ATTEMPT" : "CHASING TRAP"} />
            </div>
          </div>
        )}

        <PracticeMentorInsight 
          text="Candle speed is information. Urgency is an emotion. Never let the speed of the candle dictate the speed of your click."
          analogy="Chasing a fast candle is like running after a train that has already left the station. You will not catch it, and you are highly likely to trip and hurt yourself."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};

/**
 * Card 8: ReadingVsExecutionSkillBoard
 * Visual Key: reading-vs-execution-skill-board
 */
export const ReadingVsExecutionSkillBoard = () => {
  const [activeSkill, setActiveSkill] = useState<string>("reading");

  const skills = [
    {
      id: "reading",
      title: "Reading Skill (Level 0 Focus)",
      desc: "Observing price facts, mapping structural ranges, auditing location, verifying consensus, and grading clarity objectively. The core logic.",
      items: ["Context Audits", "Structure Mapping", "Clarity Grading", "Active Idle Decisions"]
    },
    {
      id: "execution",
      title: "Execution Skill (Later Levels)",
      desc: "Simulating trade entries, setting stop triggers, managing size risk, and handling execution timing. The action mechanics.",
      items: ["Entry Mechanics", "Invalidation Triggers", "Size Calculations", "Patience Under Drawdown"]
    }
  ];

  const current = skills.find(s => s.id === activeSkill)!;

  return (
    <PracticeInstitutionalFrame label="Reading vs Execution Split" status="SKILLS LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex justify-between items-center w-full max-w-2xl">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            Toggle between skills to understand why Level 0 prioritizes chart reading quality over execution.
          </p>
          <PracticeToggleSelector 
            options={skills.map(s => ({ id: s.id, name: s.title.split(" (")[0] }))}
            selectedId={activeSkill}
            onChange={setActiveSkill}
          />
        </div>

        {/* Skill Panel */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Focus Evaluation</span>
              <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
                {current.title}
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                {current.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Audited Scope</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-2 justify-center text-left">
            {current.items.map(item => (
              <div key={item} className="px-3 py-2 bg-white rounded-lg border border-slate-100 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-xs font-bold text-[#071B36]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <PracticeMentorInsight 
          text="First learn to read the blueprint of a building before trying to build the wall. In Level 0, we verify the map quality."
          analogy="You must learn to read a map (reading skill) before you learn how to step on the gas and steer the car (execution skill)."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};

/**
 * Card 9: ScenarioReplayProtocol
 * Visual Key: scenario-replay-protocol-board
 */
export const ScenarioReplayProtocol = () => {
  const [activeStep, setActiveStep] = useState<string>("freeze");

  const steps = [
    {
      id: "freeze",
      label: "1. Freeze screen",
      desc: "Stop the replay at the entry candle before the result happened.",
      tip: "Force yourself to ignore your memory of what price did next."
    },
    {
      id: "find",
      label: "2. Audit Process",
      desc: "Review your checklist: what location support or resistance did you miss?",
      tip: "Find the missed facts on your original screen."
    },
    {
      id: "target",
      label: "3. Target rule",
      desc: "Formulate one specific process improvement target for the next attempt.",
      tip: "E.g., 'Check Daily support zone before clicking.'"
    },
    {
      id: "replay",
      label: "4. Replay neutrally",
      desc: "Run the scenario again focusing strictly on executing the process correction.",
      tip: "Success is following the target rule, not getting a win."
    }
  ];

  const current = steps.find(s => s.id === activeStep)!;

  return (
    <PracticeInstitutionalFrame label="Scenario Replay Protocol" status="REPLAY LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Follow the four-step protocol when replaying a failed simulation scenario to avoid bias.
        </p>

        {/* Stepper progress */}
        <PracticeStepWorkflow 
          steps={steps.map(s => ({ id: s.id, label: s.label.split(". ")[1], done: steps.findIndex(x => x.id === s.id) < steps.findIndex(y => y.id === activeStep) }))}
          activeStep={activeStep}
        />

        {/* Step Buttons */}
        <div className="flex flex-wrap gap-2 justify-center max-w-xl">
          {steps.map(s => (
            <button
              type="button"
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={cn(
                "px-3 py-1.5 border rounded-xl text-xs font-bold transition-all cursor-pointer",
                activeStep === s.id ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Details Panel */}
        <div className="w-full max-w-2xl bg-[#071B36] text-white rounded-2xl p-5 border border-slate-700 relative overflow-hidden text-left min-h-[110px] flex flex-col justify-center">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#06B6D4_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative z-10">
            <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest block mb-1 font-black">Replay Step Detail</span>
            <h5 className="text-sm font-black text-white uppercase tracking-tight mb-1">
              {current.label}
            </h5>
            <p className="text-xs text-slate-200 leading-relaxed whitespace-normal break-words max-w-xl">
              {current.desc}
            </p>
            <p className="mt-1.5 text-[10px] text-emerald-300 font-bold italic">
              Verification Check: {current.tip}
            </p>
          </div>
        </div>

        <PracticeMentorInsight 
          text="Replaying to force a win is cheat code practice. Replaying to find where your logical vision failed is elite practice."
          analogy="A golfer replaying a failed swing does not try to catch the ball mid-air and place it in the hole. They review their stance, adjust their grip, and swing again."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};

/**
 * Card 10: PracticeDisciplineDrill
 * Visual Key: practice-discipline-drill
 */
export const PracticeDisciplineDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const scenarioDetails = [
    { label: "Market State", value: "Sideways / Overlapping" },
    { label: "Learner State", value: "Bored / Restless" },
    { label: "Action Reason", value: "Missing (Click Buy)" },
    { label: "Review Condition", value: "Missing" },
    { label: "Final Result", value: "Winning Trade (+P/L)" }
  ];

  const options = [
    {
      id: "opt1",
      text: "Good practice because the trade ended positive.",
      feedback: "Incorrect. The positive result does not validate the attempt. This is a classic outcome bias trap. Clicking from boredom with no logic is a process failure."
    },
    {
      id: "opt2",
      text: "Invalid practice because the action came from boredom without a pre-action reasoning checklist or review condition.",
      feedback: "Correct! This is invalid practice. The learner acted due to boredom rather than structure. A winning result does not make a process failure good."
    },
    {
      id: "opt3",
      text: "Good practice because one green candle is enough evidence.",
      feedback: "Incorrect. A single green candle inside a sideways range is noise, not evidence. Moving without checking location and structure is gambling."
    },
    {
      id: "opt4",
      text: "Unclear because simulator outcomes do not matter.",
      feedback: "Incorrect. While outcomes are secondary, the attempt is clearly invalid because cockpit process rules were ignored completely."
    }
  ];

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    setShowFeedback(true);
  };

  const isCorrect = selectedOption === "opt2";

  return (
    <PracticeInstitutionalFrame label="Interactive Practice Classifier" status="PRACTICE DRILL">
      <div className="w-full flex flex-col gap-5 items-center">
        {/* Scenario Details */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Simulation Run Details</span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {scenarioDetails.map((det) => (
              <div key={det.label} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider block mb-1">{det.label}</span>
                <span className="text-[10px] font-bold text-[#071B36] uppercase tracking-tight block leading-snug">{det.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Options Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
          {options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={cn(
                  "p-3 border rounded-2xl text-left flex items-start gap-3 transition-all cursor-pointer min-h-[60px]",
                  isSelected
                    ? isCorrect
                      ? "bg-emerald-50/70 border-emerald-500 text-emerald-955"
                      : "bg-rose-50/70 border-rose-500 text-rose-955"
                    : "bg-white text-slate-800 border-slate-200 hover:border-cyan-500 hover:bg-slate-50"
                )}
              >
                <span className={cn(
                  "w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-black shrink-0",
                  isSelected
                    ? isCorrect
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-rose-500 text-white border-rose-500"
                    : "bg-slate-50 text-slate-500 border-slate-200"
                )}>
                  {opt.id === "opt1" ? "A" : opt.id === "opt2" ? "B" : opt.id === "opt3" ? "C" : "D"}
                </span>
                <span className="text-xs font-bold leading-tight">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Display */}
        {showFeedback && (
          <div className={cn(
            "w-full max-w-2xl rounded-2xl p-4 border text-left min-h-[80px] transition-all",
            isCorrect
              ? "bg-emerald-50 text-emerald-900 border-emerald-350"
              : "bg-rose-50 text-rose-900 border-rose-350"
          )}>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[9px] font-black uppercase tracking-wider block">Feedback Result &bull; {isCorrect ? "Correct" : "Incorrect"}</span>
            </div>
            <p className="text-xs font-bold leading-relaxed whitespace-normal break-words">
              {options.find(o => o.id === selectedOption)!.feedback}
            </p>
          </div>
        )}

        <PracticeMentorInsight 
          text="Outcome bias makes bad practice look like skill. If you log a guessed win as successful training, you validate a mistake."
          analogy="A student guessing the answers on a math test and getting a passing grade does not prove they know math. They still need to study the formulas."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};

/**
 * Card 11: PracticeDisciplineLabDebrief
 * Visual Key: practice-discipline-lab-debrief
 */
export const PracticeDisciplineLabDebrief = () => {
  const [selectedScenario, setSelectedScenario] = useState<string>("stand");

  const debriefs = [
    {
      id: "stand",
      label: "Active Stand-Aside",
      description: "You audit a choppy chart context, identify it as unclear, write 'choppy sideways wiggles' in your notes, and choose not to execute any simulator trade.",
      quality: "PROCESS SUCCESS",
      score: "100% compliant practice"
    },
    {
      id: "loss",
      label: "Disciplined Invalidation",
      description: "You simulate a buy at support zone with pre-action reasoning. Price breaks support and hits your invalidation. You close the position cleanly with a virtual loss.",
      quality: "VALID ATTEMPT",
      score: "100% compliant practice"
    },
    {
      id: "gamble",
      label: "Guessed Win",
      description: "You click buy because price was moving up quickly. You defined no support floor or invalidation level. The trade wins, making virtual dollars.",
      quality: "OUTCOME BIAS TRAP",
      score: "0% process compliance"
    }
  ];

  const current = debriefs.find(d => d.id === selectedScenario)!;

  return (
    <PracticeInstitutionalFrame label="Practice Evaluation Hub" status="LAB COMPLETED">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Review the final practice evaluation studies. Toggle cases to see how compliance and process dictate your true score.
        </p>

        {/* Toggle Selector */}
        <PracticeToggleSelector 
          options={debriefs.map(d => ({ id: d.id, name: d.label }))}
          selectedId={selectedScenario}
          onChange={setSelectedScenario}
        />

        {/* Diagnostic Panel */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Practice Case Study</span>
            <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
              {current.label}
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-xl">
              {current.description}
            </p>
            <p className="mt-2 text-[10px] text-cyan-605 text-cyan-600 font-black uppercase tracking-wider">
              Verification Compliance Score: {current.score}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Practice Rating</span>
            <PracticeReadingQualityBadge quality={current.quality} />
          </div>
        </div>

        <PracticeMentorInsight 
          text="Simulation success is measured by the quality of your process compliance, not by virtual PnL."
          analogy="A pilot landing in heavy rain safely by following the checklist has completed a successful simulation flight. A pilot who crashes because they ignored the cockpit indicators has failed."
        />
      </div>
    </PracticeInstitutionalFrame>
  );
};
