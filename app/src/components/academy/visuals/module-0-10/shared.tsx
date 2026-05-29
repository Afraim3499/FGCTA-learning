import React, { useState } from "react";
import { 
  Compass, 
  ArrowRight, 
  RotateCcw, 
  XCircle, 
  CheckCircle2,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Premium Forex Institutional Frame for Module 0.10
 * Uses the proven dark-on-light design system
 * with blue/indigo accent touches for Forex identity.
 */
export const ForexInstitutionalFrame = ({ 
  children, 
  label, 
  status = "LAB STANDBY",
  id = "LN-0.10-FX"
}: { 
  children: React.ReactNode; 
  label: string; 
  status?: string;
  id?: string;
}) => (
  <div className="w-full h-full min-h-[550px] bg-[#F8FBFC] border border-[#E2E8F0] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm">
    {/* Grid Background Effect */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:24px_24px]" />
    
    {/* Top Header Row */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-slate-200 pb-4 shrink-0">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <Compass size={11} className="text-blue-600 animate-spin-slow" style={{ animationDuration: '8s' }} />
          <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.25em]">Forex Reading Lab</span>
        </div>
        <h4 className="text-base font-black text-[#071B36] uppercase tracking-tighter italic leading-tight">{label}</h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest leading-none mb-1">Module ID</span>
          <span className="text-[10px] font-mono text-[#071B36] font-bold">{id}</span>
        </div>
        <div className="w-px h-6 bg-slate-200" />
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[9px] font-black text-[#071B36] uppercase tracking-widest">{status}</span>
        </div>
      </div>
    </div>

    {/* Dynamic Content Center Stage */}
    <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0 min-w-0">
      {children}
    </div>

    {/* Bottom Footer Row */}
    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between shrink-0">
       <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 bg-blue-500 rounded-full" />
            <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">FX Pairs Audited</span>
          </div>
       </div>
       <div className="flex items-center gap-1.5">
          <Lock size={10} className="text-slate-400" />
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-tighter">LN-FOREX-LAB-V1</span>
       </div>
    </div>
  </div>
);

/**
 * Mentor Insight Component for Forex
 */
export const ForexMentorInsight = ({ text, analogy }: { text: string; analogy?: string }) => (
  <div className="w-full mt-6 pt-5 border-t border-slate-200 flex flex-col gap-2 shrink-0 text-left">
    <div className="flex items-center gap-2">
      <div className="px-2 py-1 bg-[#071B36] text-white text-[8px] font-black uppercase tracking-widest rounded-sm">Mentor Insight</div>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
    <div className="flex gap-4">
       <div className="flex-1">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">{text}</p>
          {analogy && (
            <p className="mt-1.5 text-[11px] text-slate-700 italic leading-snug">
              <span className="font-black uppercase text-[9px] mr-2 text-blue-600 not-italic">Analogy:</span>
              {analogy}
            </p>
          )}
       </div>
    </div>
  </div>
);

/**
 * Custom Solid Forex Candlestick
 */
export const MiniForexCandle = ({
  color,
  bodyHeight,
  upperWick = 15,
  lowerWick = 15,
  isDoji = false
}: {
  color: "blue" | "rose" | "slate" | "indigo";
  bodyHeight: number;
  upperWick?: number;
  lowerWick?: number;
  isDoji?: boolean;
}) => {
  const styles = {
    blue: { bg: "#2563EB", border: "#1D4ED8", label: "Bullish Value" }, // blue-600
    rose: { bg: "#E11D48", border: "#BE123C", label: "Bearish Value" }, // rose-600
    indigo: { bg: "#4F46E5", border: "#4338CA", label: "Strong Momentum" }, // indigo-600
    slate: { bg: "#475569", border: "#334155", label: "Neutral/Chop" } // slate-600
  };

  const currentStyle = styles[color] || styles.slate;

  return (
    <div className="flex flex-col items-center justify-center select-none py-1 shrink-0">
      {/* Upper Wick */}
      {upperWick > 0 && (
        <div 
          className="w-0.5" 
          style={{ height: `${upperWick}px`, backgroundColor: currentStyle.border }} 
        />
      )}

      {/* Body */}
      {isDoji ? (
        <div 
          className="w-6 h-0.5" 
          style={{ backgroundColor: currentStyle.border }} 
        />
      ) : (
        <div 
          className="w-4 rounded-sm border shadow-sm transition-all duration-300"
          style={{ 
            height: `${bodyHeight}px`, 
            backgroundColor: currentStyle.bg,
            borderColor: currentStyle.border
          }}
        />
      )}

      {/* Lower Wick */}
      {lowerWick > 0 && (
        <div 
          className="w-0.5" 
          style={{ height: `${lowerWick}px`, backgroundColor: currentStyle.border }} 
        />
      )}
    </div>
  );
};

/**
 * Forex Reading Quality Badge
 */
export const ForexReadingQualityBadge = ({
  quality,
  className
}: {
  quality: string;
  className?: string;
}) => {
  const upper = quality.toUpperCase();
  const isHigh = ["HIGH QUALITY", "CLEAR", "STABILIZED HOLD", "FOLLOW-THROUGH HOLD", "REJECTION SWEEP", "VALID BREAKOUT", "BROAD CONSENSUS"].includes(upper);
  const isLow = ["LOW QUALITY", "UNSTABLE", "NOISE", "TRAP", "FAKE BREAKOUT", "CHOPPY NOISE", "MIXED", "ISOLATED SPIKE"].includes(upper);

  return (
    <span className={cn(
      "text-[8px] font-mono font-black px-2 py-0.5 rounded border uppercase tracking-wider shrink-0",
      isHigh ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
      isLow ? "bg-rose-50 text-rose-700 border-rose-200" :
      "bg-amber-50 text-amber-700 border-amber-200",
      className
    )}>
      {quality}
    </span>
  );
};

/**
 * Toggle Selector Tab Component for Forex
 */
export const ForexToggleSelector = ({
  options,
  selectedId,
  onChange,
  className
}: {
  options: { id: string; name: string }[];
  selectedId: string;
  onChange: (id: string) => void;
  className?: string;
}) => (
  <div className={cn("flex bg-slate-100 border border-slate-200 p-1 rounded-xl shrink-0 gap-1 overflow-x-auto max-w-full", className)}>
    {options.map((opt) => (
      <button
        key={opt.id}
        onClick={() => onChange(opt.id)}
        className={cn(
          "px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap",
          selectedId === opt.id ? "bg-[#071B36] text-white shadow-sm" : "text-slate-700 hover:text-[#071B36] hover:bg-slate-200"
        )}
      >
        {opt.name}
      </button>
    ))}
  </div>
);

/**
 * Workflow Stepper Primitive for Forex
 */
interface WorkflowStep {
  title: string;
  action?: string;
  desc: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
  status?: string;
}

export const ForexStepWorkflow = ({
  steps,
  label = "Forex Verification Sequence",
  status = "LAB CHECKLIST",
  desc = "Interactive Sequence Checklist: Step through the Forex reading protocol in chronological order."
}: {
  steps: WorkflowStep[];
  label?: string;
  status?: string;
  desc?: string;
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <ForexInstitutionalFrame label={label} status={status}>
      <div className="w-full flex flex-col gap-5 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed whitespace-normal break-words font-medium">
          {desc}
        </p>

        {/* Step Nodes Stepper */}
        <div className="w-full flex justify-between items-center bg-slate-100 border border-slate-200 p-2 rounded-xl shrink-0 gap-1 overflow-x-auto">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "flex-1 min-w-[50px] p-2 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer",
                  activeStep === index ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36] hover:bg-slate-200"
                )}
              >
                {Icon ? (
                  <Icon size={14} className={activeStep === index ? "text-blue-400" : "text-slate-600"} />
                ) : (
                  <span className={cn(
                    "text-[10px] font-mono font-bold",
                    activeStep === index ? "text-blue-400" : "text-slate-600"
                  )}>#{index + 1}</span>
                )}
                <span className="text-[7px] font-mono font-bold mt-1 hidden md:inline">Step {index + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Step details display */}
        <div className="w-full bg-[#071B36] text-white rounded-xl p-4 border border-slate-700 min-h-[160px] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#2563EB_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative z-10">
            {steps[activeStep].action && (
              <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest block mb-1 font-bold">
                {steps[activeStep].action}
              </span>
            )}
            <h5 className="text-sm font-black uppercase tracking-tight mb-2 whitespace-normal break-words">
              {steps[activeStep].title}
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed whitespace-normal break-words">
              {steps[activeStep].desc}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 pt-2 border-t border-slate-700 relative z-10">
            <span className="text-[7px] font-mono text-blue-400">
              SEQUENCE AUDIT: {steps[activeStep].status || "VERIFIED"}
            </span>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="text-[8px] font-black uppercase tracking-widest text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
            >
              Next Step <ArrowRight size={10} />
            </button>
          </div>
        </div>
      </div>
    </ForexInstitutionalFrame>
  );
};

/**
 * Forex Practice Drill Multiple Choice Panel
 */
interface DrillOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export const ForexPracticeDrill = ({
  question,
  options,
  chartPreview,
  label = "Forex Reading Lab Drill",
  status = "DRILL ACTIVE"
}: {
  question: string;
  options: DrillOption[];
  chartPreview?: React.ReactNode;
  label?: string;
  status?: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    setShowFeedback(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const activeOption = options.find(o => o.id === selectedOption);

  return (
    <ForexInstitutionalFrame label={label} status={status}>
      <div className="w-full flex flex-col gap-4 items-center min-h-[480px] justify-between">
        
        {/* Custom chart preview */}
        {chartPreview}

        {/* Question */}
        <p className="text-xs font-bold text-[#071B36] text-center whitespace-normal break-words w-full leading-normal">
          {question}
        </p>

        {/* Options */}
        <div className="w-full flex flex-col gap-2 shrink-0">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={showFeedback}
              className={cn(
                "w-full text-left p-3 rounded-xl border text-[11px] font-bold transition-all flex items-start gap-3 cursor-pointer whitespace-normal break-words leading-snug",
                selectedOption === opt.id
                  ? opt.isCorrect
                    ? "bg-emerald-50 border-emerald-500 text-emerald-950 shadow-sm"
                    : "bg-rose-50 border-rose-500 text-rose-950 shadow-sm"
                  : "bg-white border-slate-200 text-[#071B36] hover:bg-slate-50 hover:border-slate-300"
              )}
            >
              <span className={cn(
                "w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-black shrink-0",
                selectedOption === opt.id 
                  ? opt.isCorrect ? "bg-[#071B36] border-[#071B36] text-white" : "bg-rose-500 border-rose-500 text-white"
                  : "border-slate-300 text-slate-600"
              )}>
                {opt.id}
              </span>
              <span className="min-w-0 flex-1">{opt.text}</span>
            </button>
          ))}
        </div>

        {/* Feedback Panel */}
        {showFeedback && activeOption && (
          <div className={cn(
            "w-full p-4 rounded-xl border flex gap-3 shrink-0 animate-fadeIn transition-all text-left",
            activeOption.isCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-rose-50 border-rose-200 text-rose-950"
          )}>
            {activeOption.isCorrect ? (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
            ) : (
              <XCircle className="text-rose-500 shrink-0" size={18} />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] font-mono font-black uppercase tracking-widest text-[#071B36]">
                  {activeOption.isCorrect ? "VERDICT: CORRECT" : "VERDICT: INCORRECT"}
                </span>
                {!activeOption.isCorrect && (
                  <button 
                    onClick={handleReset}
                    className="text-[8px] font-black uppercase text-rose-700 hover:text-rose-950 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw size={8} /> Retry
                  </button>
                )}
              </div>
              <p className="text-xs leading-relaxed whitespace-normal break-words">{activeOption.feedback}</p>
            </div>
          </div>
        )}
      </div>
    </ForexInstitutionalFrame>
  );
};

/**
 * Forex Debrief Dashboard Recap component
 */
interface DebriefCard {
  id: string;
  title: string;
  habit: string;
  desc: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
}

export const ForexDebriefDashboard = ({
  cards,
  label = "Forex Reading Lab Wrap-Up",
  status = "DRILL COMPLETE",
  desc = "Interactive Debrief: Select a context layer below to view the core Forex-reading habit."
}: {
  cards: DebriefCard[];
  label?: string;
  status?: string;
  desc?: string;
}) => {
  const [selectedKey, setSelectedKey] = useState<string>(cards[0].id);
  const active = cards.find(k => k.id === selectedKey) || cards[0];
  const IconComponent = active.icon;

  return (
    <ForexInstitutionalFrame label={label} status={status}>
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed whitespace-normal break-words font-medium">
          {desc}
        </p>

        {/* Dashboard Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
          {cards.map((item) => {
            const isSelected = item.id === selectedKey;
            const ItemIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedKey(item.id)}
                className={cn(
                  "p-3 rounded-xl border flex flex-col items-center gap-2 text-center transition-all cursor-pointer justify-center min-h-[85px]",
                  isSelected 
                    ? "bg-[#071B36] border-[#071B36] text-white shadow-md scale-105" 
                    : "bg-white border-slate-200 text-[#071B36] hover:bg-slate-50"
                )}
              >
                {ItemIcon && <ItemIcon size={16} className={isSelected ? "text-blue-400" : "text-slate-600"} />}
                <span className="text-[8px] font-black uppercase tracking-tight leading-none break-words max-w-full">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Recap Panel */}
        <div className="w-full bg-[#071B36] rounded-2xl p-5 border border-slate-700 text-white flex flex-col gap-3 relative overflow-hidden text-left">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#2563EB_1px,transparent_1px)] bg-[length:14px_14px]" />
          
          <div className="flex items-center gap-3 relative z-10 border-b border-slate-700 pb-3">
            {IconComponent && <IconComponent size={20} className="text-blue-400 shrink-0" />}
            <div>
              <h5 className="text-xs font-mono font-black text-blue-400 uppercase tracking-widest leading-none mb-1">
                {active.title}
              </h5>
              <p className="text-xs font-black text-white whitespace-normal break-words leading-tight uppercase">
                {active.habit}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed whitespace-normal break-words relative z-10">
            {active.desc}
          </p>
        </div>
      </div>
    </ForexInstitutionalFrame>
  );
};
