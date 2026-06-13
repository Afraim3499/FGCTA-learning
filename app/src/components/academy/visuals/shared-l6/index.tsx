"use client";

import React, { useState } from "react";
import { 
  GitBranch, 
  MapPin, 
  Compass, 
  TrendingDown, 
  AlertTriangle, 
  Clock, 
  Activity, 
  Sliders, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert,
  BarChart2, 
  BookOpen, 
  RefreshCw,
  Lock, 
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useMentorNote } from "../../lesson-workspace/MentorNoteContext";

// L6Frame provides a terminal-style "Scenario Branching & Confluence Deck"
const L6Frame = ({ 
  children, 
  title, 
  id, 
  mentorText: defaultMentorText = "A plan is not a prediction. It is a branching decision tree. If you only plan for one outcome, you are exit liquidity.",
  mentorAnalogy: defaultMentorAnalogy = "In chess, grandmasters do not hope for a specific move; they calculate branching response trees. In trading, you must map the primary and alternative paths before the session opens." 
}: { 
  children: React.ReactNode; 
  title: string; 
  id: string; 
  mentorText?: string; 
  mentorAnalogy?: string; 
}) => {
  const context = useMentorNote();
  const activeMentorText = context.mentorText || defaultMentorText;
  const activeMentorAnalogy = context.mentorAnalogy !== undefined ? context.mentorAnalogy : defaultMentorAnalogy;

  return (
    <div className="w-full bg-[#050814] border border-[#111A35] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-2xl text-left min-h-[500px] text-white">
      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[length:24px_24px] opacity-35" />
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-[#111A35] pb-4 shrink-0">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 mb-1">
            <GitBranch size={12} className="text-teal-400 animate-pulse" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Scenario Engine V6</span>
          </div>
          <h4 className="text-sm font-black text-teal-400 uppercase tracking-tight italic leading-tight">{title}</h4>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Blueprint ID</span>
            <span className="text-[10px] font-mono text-teal-200 font-bold">{id}</span>
          </div>
        </div>
      </div>
      
      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0">
        {children}
      </div>

      {/* Mentor insight */}
      <div className="w-full mt-6 pt-5 border-t border-[#111A35] flex flex-col gap-2 shrink-0 text-left relative z-10">
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 bg-teal-950/40 text-teal-400 text-[8px] font-black uppercase tracking-widest rounded-sm border border-teal-800/20">Mentor Insight</div>
          <div className="h-px flex-1 bg-[#111A35]" />
        </div>
        <div className="flex gap-4">
           <div className="flex-1">
              <p className="text-xs font-bold text-slate-200 leading-relaxed">{activeMentorText}</p>
              {activeMentorAnalogy && (
                <p className="mt-1.5 text-[11px] text-slate-400 italic leading-snug">
                  <span className="font-black uppercase text-[9px] mr-2 text-teal-400 not-italic">Workflow Analogy:</span>
                  {activeMentorAnalogy}
                </p>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

// 1. BRANCHING LOGIC SIMULATOR
export const BranchingLogicSimulator = () => {
  const [trigger, setTrigger] = useState<"bullish" | "bearish">("bullish");
  
  return (
    <L6Frame 
      title="Interactive Branching Logic Simulator" 
      id="BRANCH-6.1"
      mentorText="Branching logic prevents cognitive bias. By actively preparing for both the primary trend and its invalidation, you eliminate the emotional need to prove a prediction right."
      mentorAnalogy="A railway switchman doesn't pray for the train to stay on one path. They set the switches for all routing possibilities. Your scenario branching is that switchboard."
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-2">
        <div className="lg:col-span-5 bg-slate-950/40 border border-[#111A35] p-4 rounded-2xl flex flex-col gap-4">
          <h5 className="text-xs font-black uppercase text-slate-300 tracking-wider flex items-center gap-1.5 border-b border-[#111A35] pb-2">
            <Sliders size={12} className="text-teal-400" />
            Market Event Input
          </h5>
          <p className="text-[11px] text-slate-400">Select the structural event triggered in the session:</p>
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setTrigger("bullish")}
              className={cn("p-3 rounded-xl border text-xs font-bold uppercase text-left transition-all", 
                trigger === "bullish" ? "bg-teal-950/30 text-teal-400 border-teal-500/40" : "bg-slate-900/20 text-slate-400 border-[#111A35]"
              )}
            >
              1. 15m Bullish Structure Shift (MSS)
            </button>
            <button 
              onClick={() => setTrigger("bearish")}
              className={cn("p-3 rounded-xl border text-xs font-bold uppercase text-left transition-all", 
                trigger === "bearish" ? "bg-teal-950/30 text-teal-400 border-teal-500/40" : "bg-slate-900/20 text-slate-400 border-[#111A35]"
              )}
            >
              2. Swing Low Invalidation Breakdown
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="bg-[#080d1e] border border-[#111A35] p-5 rounded-2xl relative overflow-hidden flex-1 flex flex-col justify-center gap-4">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 blur-2xl rounded-full" />
            
            <div className="flex items-center gap-2">
              <GitBranch size={16} className="text-teal-400 animate-bounce" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Branching Outputs</span>
            </div>

            {trigger === "bullish" ? (
              <div className="flex flex-col gap-3 text-left">
                <div className="p-3 bg-teal-950/20 border border-teal-800/20 rounded-xl">
                  <span className="text-[9px] font-bold text-teal-400 uppercase tracking-wider block mb-1">Primary Branch (Bullish Expansion)</span>
                  <p className="text-[11px] text-slate-200 leading-relaxed">
                    <strong>Trigger Condition:</strong> Price retraces to the 15m Fair Value Gap.<br />
                    <strong>Execution Rule:</strong> Enter long with stop placed at the invalidation low, targeting the session liquidity high.
                  </p>
                </div>
                <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Alternative Branch (Pivot to Neutral/Bearish)</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <strong>Trigger Condition:</strong> Price closes through the swing low of the MSS.<br />
                    <strong>Execution Rule:</strong> Cancel all buy limits, shift bias to neutral, and wait for new structural anchors.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3 text-left">
                <div className="p-3 bg-teal-950/20 border border-teal-800/20 rounded-xl">
                  <span className="text-[9px] font-bold text-teal-400 uppercase tracking-wider block mb-1">Primary Branch (Bearish Continuation)</span>
                  <p className="text-[11px] text-slate-200 leading-relaxed">
                    <strong>Trigger Condition:</strong> Price closes below the key swing low support.<br />
                    <strong>Execution Rule:</strong> Enter short on the first premium FVG retest, targeting the lower timeframe sweep zone.
                  </p>
                </div>
                <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Alternative Branch (Squeeze Recovery)</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <strong>Trigger Condition:</strong> Price breaks low but immediately closes back inside the range.<br />
                    <strong>Execution Rule:</strong> Identify the sweep deviation, expect a mean-reversion move, and stand aside until NY open.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </L6Frame>
  );
};

// 2. DXY CORRELATION GRID
export const DXYCorrelationGrid = () => {
  const [dxyTrend, setDxyTrend] = useState<"bullish" | "bearish">("bearish");

  return (
    <L6Frame 
      title="DXY Intermarket Correlation Grid" 
      id="DXY-GRID-6.9"
      mentorText="The Dollar Index (DXY) is the global currency anchor. If your setup on EUR/USD requires DXY weakness, but the DXY is displaying a bullish expansion, your setup has structural conflict."
      mentorAnalogy="Sailing with or against the tide changes your boat's efficiency. The DXY is the tide of global fiat markets; verify the tide before starting your journey."
    >
      <div className="w-full flex flex-col gap-6 my-2">
        {/* Toggle Control */}
        <div className="w-full bg-slate-950/40 border border-[#111A35] p-3.5 rounded-xl flex items-center justify-between">
          <span className="text-xs font-black text-slate-300 uppercase tracking-wider">Simulate DXY Direction:</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setDxyTrend("bearish")}
              className={cn("px-4 py-1.5 rounded-lg text-xs font-black uppercase transition-all", 
                dxyTrend === "bearish" ? "bg-teal-500 text-slate-950" : "bg-slate-900/40 text-slate-400 hover:text-slate-200"
              )}
            >
              Bearish DXY
            </button>
            <button 
              onClick={() => setDxyTrend("bullish")}
              className={cn("px-4 py-1.5 rounded-lg text-xs font-black uppercase transition-all", 
                dxyTrend === "bullish" ? "bg-teal-500 text-slate-950" : "bg-slate-900/40 text-slate-400 hover:text-slate-200"
              )}
            >
              Bullish DXY
            </button>
          </div>
        </div>

        {/* Output Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* EUR/USD */}
          <div className="bg-[#080d1e] border border-[#111A35] p-4 rounded-xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/5 blur-xl rounded-full" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Asset: EUR/USD</span>
            <h5 className="text-sm font-black text-slate-100 mt-1 uppercase tracking-tight">Forex Track</h5>
            <div className={cn("inline-flex items-center gap-1 mt-3 text-xs font-bold px-2 py-0.5 rounded", 
              dxyTrend === "bearish" ? "bg-teal-950/30 text-teal-400" : "bg-red-950/30 text-red-400"
            )}>
              {dxyTrend === "bearish" ? "Primary Bullish Shift" : "Primary Bearish Shift"}
            </div>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
              {dxyTrend === "bearish" 
                ? "DXY weakness creates upward pressure on EUR/USD. Highly aligned for primary long scenarios."
                : "DXY strength pressures EUR/USD lower. Focus on premium short scenarios."}
            </p>
          </div>

          {/* Spot Gold */}
          <div className="bg-[#080d1e] border border-[#111A35] p-4 rounded-xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-500/5 blur-xl rounded-full" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Asset: Spot Gold</span>
            <h5 className="text-sm font-black text-slate-100 mt-1 uppercase tracking-tight">Gold Track</h5>
            <div className={cn("inline-flex items-center gap-1 mt-3 text-xs font-bold px-2 py-0.5 rounded", 
              dxyTrend === "bearish" ? "bg-teal-950/30 text-teal-400" : "bg-red-950/30 text-red-400"
            )}>
              {dxyTrend === "bearish" ? "Strong Buy Expansion" : "Sweeps & Retracements"}
            </div>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
              {dxyTrend === "bearish" 
                ? "Dollar debasement drives gold asset allocations. High probability breakout environments."
                : "Rising yields and dollar strength force gold sweeps and liquidations."}
            </p>
          </div>

          {/* BTC/USD */}
          <div className="bg-[#080d1e] border border-[#111A35] p-4 rounded-xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500/5 blur-xl rounded-full" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Asset: BTC/USD</span>
            <h5 className="text-sm font-black text-slate-100 mt-1 uppercase tracking-tight">Crypto Track</h5>
            <div className={cn("inline-flex items-center gap-1 mt-3 text-xs font-bold px-2 py-0.5 rounded", 
              dxyTrend === "bearish" ? "bg-teal-950/30 text-teal-400" : "bg-red-950/30 text-red-400"
            )}>
              {dxyTrend === "bearish" ? "Risk-On Leverage Runs" : "Risk-Off Liquidity flushes"}
            </div>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
              {dxyTrend === "bearish" 
                ? "Global liquidity flows support high-beta crypto holdings. Favorable for perp long entries."
                : "Dollar risk-off sweeps trigger leveraged liquidations and futures cascades."}
            </p>
          </div>
        </div>
      </div>
    </L6Frame>
  );
};

// 3. SMT DIVERGENCE SIMULATOR
export const SMTDivergenceSimulator = () => {
  const [activeStep, setActiveStep] = useState<"step1" | "step2" | "step3">("step1");

  return (
    <L6Frame 
      title="SMT Divergence & Correlation Cracks" 
      id="SMT-DIV-6.10"
      mentorText="SMT Divergence is the ultimate footprint of institutional divergence. When EUR/USD sweeps a key liquidity high, but GBP/USD fails to sweep its matching high, it reveals that the sweep was manipulated to collect liquidity."
      mentorAnalogy="If two twin brothers walk down a street, and one jumps over a fence while the other suddenly stops, something has disrupted their path. The failure of one to follow is your cue."
    >
      <div className="w-full flex flex-col gap-6 my-2">
        {/* Step Stepper */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto bg-slate-950/40 border border-[#111A35] p-1 rounded-full">
          <button 
            onClick={() => setActiveStep("step1")}
            className={cn("px-4 py-1.5 rounded-full text-xs font-black uppercase transition-all", 
              activeStep === "step1" ? "bg-teal-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
            )}
          >
            1. Normal State
          </button>
          <button 
            onClick={() => setActiveStep("step2")}
            className={cn("px-4 py-1.5 rounded-full text-xs font-black uppercase transition-all", 
              activeStep === "step2" ? "bg-teal-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
            )}
          >
            2. The Divergence
          </button>
          <button 
            onClick={() => setActiveStep("step3")}
            className={cn("px-4 py-1.5 rounded-full text-xs font-black uppercase transition-all", 
              activeStep === "step3" ? "bg-teal-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
            )}
          >
            3. Confirmation
          </button>
        </div>

        {/* Comparative Line Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Chart 1: EURUSD */}
          <div className="bg-[#080d1e] border border-[#111A35] rounded-xl p-4 flex flex-col text-left">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Instrument: EUR/USD</span>
            <div className="h-32 w-full mt-3 bg-slate-950/50 rounded border border-[#111A35] relative flex items-center justify-center">
              <svg className="w-full h-full p-2" viewBox="0 0 100 50">
                {/* Normal line */}
                <path d="M 0 40 L 30 20 L 50 35 L 80 10" fill="none" stroke="#64748b" strokeWidth="1.5" />
                {/* step 2/3 sweep line */}
                {activeStep !== "step1" && (
                  <path d="M 80 10 L 95 5" fill="none" stroke="#2dd4bf" strokeWidth="2" />
                )}
              </svg>
              {activeStep !== "step1" && (
                <div className="absolute top-2 right-4 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                  <span className="text-[8px] font-bold text-teal-400 uppercase">Swept High</span>
                </div>
              )}
            </div>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
              EUR/USD rises and actively sweeps the key session high (Point B).
            </p>
          </div>

          {/* Chart 2: GBPUSD */}
          <div className="bg-[#080d1e] border border-[#111A35] rounded-xl p-4 flex flex-col text-left">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Instrument: GBP/USD</span>
            <div className="h-32 w-full mt-3 bg-slate-950/50 rounded border border-[#111A35] relative flex items-center justify-center">
              <svg className="w-full h-full p-2" viewBox="0 0 100 50">
                <path d="M 0 40 L 30 20 L 50 35 L 80 10" fill="none" stroke="#64748b" strokeWidth="1.5" />
                {activeStep !== "step1" && (
                  <path d="M 80 10 L 95 18" fill="none" stroke="#ef4444" strokeWidth="2" />
                )}
              </svg>
              {activeStep !== "step1" && (
                <div className="absolute top-2 right-4 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                  <span className="text-[8px] font-bold text-red-400 uppercase">Failed to Sweep</span>
                </div>
              )}
            </div>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
              {activeStep === "step1" 
                ? "GBP/USD tracks alongside EUR/USD in lockstep."
                : "GBP/USD fails to break high, showing relative weakness. Strong institutional divergence."}
            </p>
          </div>
        </div>
      </div>
    </L6Frame>
  );
};

// 4. PLACEHOLDER RECAP COMPONENT
export const Level6PlaceholderVisual = () => {
  return (
    <L6Frame title="Scenario Planning Control Deck" id="SCENARIO-DECK">
      <div className="w-full bg-slate-950/40 border border-[#111A35] p-5 rounded-2xl flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-[#111A35] pb-2">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Activity size={12} className="text-teal-400 animate-pulse" />
            Live Scenario Audits
          </span>
          <span className="text-[10px] font-mono text-slate-400">STATUS: ACTIVE</span>
        </div>
        <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-300">
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Initializing Narrative Engine...</span>
            <span className="text-teal-400">DONE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Building Evidence Stack...</span>
            <span className="text-teal-400">90% Conf.</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Mapping Branching Trees...</span>
            <span className="text-teal-400">2 Paths Ready</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Invalidation Guard Status...</span>
            <span className="text-emerald-400">LOCKED</span>
          </div>
        </div>
      </div>
    </L6Frame>
  );
};

