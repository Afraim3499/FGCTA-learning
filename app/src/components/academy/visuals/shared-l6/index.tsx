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
// New Visual components for Level 6 Scenario Mapping
export const HtfNarrativeAnchors = () => {
  const [tf, setTf] = useState<"4H" | "15m">("4H");
  const [decision, setDecision] = useState<"none" | "buy" | "flat">("none");

  return (
    <L6Frame
      title="HTF Narrative Anchors Map"
      id="ANCHOR-6.2"
      mentorText="A 15m breakout is dangerous if it drives directly into a 4H or Daily resistance zone. Verify HTF barriers before planning execution paths."
      mentorAnalogy="A speedboat can turn quickly, but it cannot break through a concrete harbour wall. The 15m trend is your speedboat; the HTF anchors are the concrete walls."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* Toggle controls */}
        <div className="flex items-center justify-between bg-slate-950/40 border border-[#111A35] p-3 rounded-xl relative z-20">
          <span className="text-xs font-black text-slate-300 uppercase tracking-wider">Select View Timeframe:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setTf("4H")}
              className={cn("px-3 py-1 rounded-lg text-[10px] font-black uppercase transition-all border",
                tf === "4H" ? "bg-teal-500 text-slate-950 border-teal-600" : "bg-slate-900/40 border-slate-800 text-slate-400"
              )}
            >
              4H Macro View
            </button>
            <button
              onClick={() => setTf("15m")}
              className={cn("px-3 py-1 rounded-lg text-[10px] font-black uppercase transition-all border",
                tf === "15m" ? "bg-teal-500 text-slate-950 border-teal-600" : "bg-slate-900/40 border-slate-800 text-slate-400"
              )}
            >
              15m Local View
            </button>
          </div>
        </div>

        {/* Chart Viewport */}
        <div className="bg-[#080d1e] border border-[#111A35] rounded-2xl p-4 relative overflow-hidden h-52 flex flex-col justify-between">
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono text-slate-400 uppercase">TIMEFRAME: {tf}</span>
            <span className="text-[9px] font-black text-red-400 uppercase tracking-widest flex items-center gap-1 bg-red-950/30 px-2 py-0.5 rounded border border-red-900/20">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
              HTF resistance block
            </span>
          </div>

          {/* SVG Line representation */}
          <div className="absolute inset-0 flex items-center justify-center p-6 mt-4">
            <svg className="w-full h-full" viewBox="0 0 100 50">
              {/* Resistance block */}
              <rect x="0" y="5" width="100" height="10" fill="#ef4444" fillOpacity="0.12" stroke="#ef4444" strokeDasharray="2" strokeWidth="0.5" />
              <text x="5" y="12" fill="#ef4444" fontSize="3.5" fontWeight="bold" className="font-mono">Weekly Rejection Ceiling</text>

              {/* Price Line */}
              {tf === "4H" ? (
                <path d="M 0 45 Q 25 40 50 35 T 85 18" fill="none" stroke="#64748b" strokeWidth="1.5" />
              ) : (
                <>
                  <path d="M 0 45 L 20 40 L 30 42 L 50 25 L 60 28 L 85 15" fill="none" stroke="#2dd4bf" strokeWidth="2" />
                  <circle cx="85" cy="15" r="1.5" fill="#ef4444" className="animate-pulse" />
                  <line x1="85" y1="15" x2="100" y2="15" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="1" />
                  <text x="55" y="22" fill="#ef4444" fontSize="3" className="font-mono">15m price hits macro ceiling</text>
                </>
              )}
            </svg>
          </div>

          <div className="z-10 bg-slate-950/80 p-2.5 rounded-lg border border-slate-900 text-[10px] text-slate-300 font-mono">
            {tf === "4H" 
              ? "Notice the long-term context: price is approaching a major resistance zone where institutional selling was previously recorded."
              : "On the 15m chart, price looks like a strong bullish breakout. But zoom out to see it is entering the macro wall."}
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-slate-950/40 border border-[#111A35] p-4 rounded-xl flex flex-col gap-3">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Choice:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setDecision("buy")}
              className={cn("flex-1 py-2 rounded-xl text-xs font-bold uppercase transition-all border",
                decision === "buy" ? "bg-red-950/30 border-red-500/40 text-red-400" : "bg-slate-900/30 border-slate-800 text-slate-300 hover:text-white"
              )}
            >
              Buy Breakout (Chase Momentum)
            </button>
            <button
              onClick={() => setDecision("flat")}
              className={cn("flex-1 py-2 rounded-xl text-xs font-bold uppercase transition-all border",
                decision === "flat" ? "bg-teal-950/30 border-teal-500/40 text-teal-400" : "bg-slate-900/30 border-slate-800 text-slate-300 hover:text-white"
              )}
            >
              Stand Flat (Wait for HTF Reaction)
            </button>
          </div>

          {decision !== "none" && (
            <div className={cn("p-3 rounded-xl border text-[10px] leading-relaxed font-mono flex gap-2 items-start",
              decision === "flat" ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-400" : "bg-red-950/20 border-red-500/20 text-red-400"
            )}>
              {decision === "flat" ? (
                <>
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-emerald-400" />
                  <span><strong>CORRECT DECISION:</strong> You avoided buying into macro resistance. Standing flat preserves capital until sellers are cleared.</span>
                </>
              ) : (
                <>
                  <ShieldAlert size={12} className="shrink-0 mt-0.5 text-red-400" />
                  <span><strong>WRONG DECISION:</strong> Chasing 15m momentum directly into a weekly wall makes you exit liquidity for macro sellers.</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </L6Frame>
  );
};

export const PrimaryScenarioMap = () => {
  const [step, setStep] = useState<number>(0);
  const [nodes, setNodes] = useState<string[]>([]);
  const requiredSequence = ["HTF Anchor", "Retracement", "Entry Gate", "Target"];

  const handleNodeClick = (name: string) => {
    if (nodes.includes(name)) return;
    const newNodes = [...nodes, name];
    setNodes(newNodes);
    setStep(newNodes.length);
  };

  const resetMap = () => {
    setNodes([]);
    setStep(0);
  };

  const isSequenceCorrect = nodes.every((val, index) => val === requiredSequence[index]);
  const isComplete = nodes.length === 4;

  return (
    <L6Frame
      title="Path-Building Scenario Map"
      id="SCENARIO-6.3"
      mentorText="A scenario is a planned path. You must order your confluences sequentially. If you skip a validation node, you are trading on emotion."
      mentorAnalogy="A builder doesn't lay the roof before pouring the concrete foundation. Your scenario nodes are the sequence of structural construction."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* Node Buttons Selector */}
        <div className="bg-slate-950/40 border border-[#111A35] p-3 rounded-xl flex flex-col gap-2">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Available Scenario Nodes (Click to Place):</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["Entry Gate", "HTF Anchor", "Target", "Retracement"].map((nodeName) => (
              <button
                key={nodeName}
                disabled={nodes.includes(nodeName)}
                onClick={() => handleNodeClick(nodeName)}
                className={cn("py-2 px-1 rounded-lg text-[10px] font-bold uppercase transition-all border",
                  nodes.includes(nodeName)
                    ? "bg-slate-900 border-slate-800 text-slate-600"
                    : "bg-slate-950 border-[#111A35] text-slate-200 hover:border-teal-500/50 hover:text-white"
                )}
              >
                {nodeName}
              </button>
            ))}
          </div>
        </div>

        {/* Map Viewport */}
        <div className="bg-[#080d1e] border border-[#111A35] rounded-2xl p-5 relative overflow-hidden h-48 flex flex-col justify-between">
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono text-slate-400">PLAN PATHWAY</span>
            <button onClick={resetMap} className="text-[9px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-300 flex items-center gap-1">
              <RefreshCw size={10} /> Reset Path
            </button>
          </div>

          {/* SVG Rendering Path Connection */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              {/* Node connection lines */}
              {nodes.map((n, i) => {
                if (i === 0) return null;
                const prevX = (i - 1) * 25 + 12;
                const currX = i * 25 + 12;
                const strokeColor = isSequenceCorrect ? "#2dd4bf" : "#ef4444";
                return (
                  <line 
                    key={i} 
                    x1={prevX} 
                    y1="15" 
                    x2={currX} 
                    y2="15" 
                    stroke={strokeColor} 
                    strokeWidth="1.5" 
                    strokeDasharray={isSequenceCorrect ? undefined : "2"} 
                    className="animate-in fade-in duration-300"
                  />
                );
              })}

              {/* Node Circles */}
              {nodes.map((n, i) => {
                const cx = i * 25 + 12;
                const isCorrectNode = n === requiredSequence[i];
                return (
                  <g key={i} className="animate-in zoom-in duration-300">
                    <circle cx={cx} cy="15" r="4.5" fill={isCorrectNode ? "#115e59" : "#991b1b"} stroke={isCorrectNode ? "#2dd4bf" : "#f43f5e"} strokeWidth="1" />
                    <text x={cx} y="26" fill="#cbd5e1" fontSize="3" fontWeight="bold" textAnchor="middle" className="font-mono uppercase">{n}</text>
                    <text x={cx} y="16.5" fill="#cbd5e1" fontSize="3.5" fontWeight="bold" textAnchor="middle" className="font-mono">{i + 1}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Guide Text */}
          <div className="z-10 text-[10px] text-slate-400 font-mono text-center bg-slate-950/40 py-1 px-2 rounded border border-slate-900">
            {step === 0 && "Assemble the trade hypothesis path sequentially. What is the macro anchor first?"}
            {step > 0 && !isSequenceCorrect && "❌ Sequence Error: Path broken. Foundation skipped. Reset and try again."}
            {step > 0 && isSequenceCorrect && !isComplete && `✓ Node ${step} verified. Continue building the path...`}
            {isComplete && isSequenceCorrect && "✓ PATH COMPLETED: Macro context -> retracement zone -> entry check -> target set. Excellent plan."}
          </div>
        </div>
      </div>
    </L6Frame>
  );
};

export const AlternativeScenarioMap = () => {
  const [priceTick, setPriceTick] = useState<number>(30); // slider 0-100
  
  // Calculations
  const isInvalidated = priceTick > 60; // Decision Gate is at 60

  return (
    <L6Frame
      title="Dual-Outcome Scenario Pivot Tree"
      id="PIVOT-6.4"
      mentorText="A trading plan is a branch, not a line. If price closes past the decision gate, your bullish hypothesis is gone. Your alternative bearish route is now active."
      mentorAnalogy="A railway signalman moves the track block when the weather shifts. If the primary track is blocked, they pivot the train onto the safety siding."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* Slider control */}
        <div className="bg-slate-950/40 border border-[#111A35] p-3.5 rounded-xl flex flex-col gap-2 text-left">
          <div className="flex justify-between text-xs font-bold font-mono">
            <span className="text-slate-400">Simulate Price Movement:</span>
            <span className={cn(isInvalidated ? "text-red-400" : "text-teal-400")}>
              {isInvalidated ? "Alternative Path Active" : "Primary Bullish Path Active"}
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            value={priceTick}
            onChange={(e) => setPriceTick(Number(e.target.value))}
            className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />
        </div>

        {/* Chart Viewport */}
        <div className="bg-[#080d1e] border border-[#111A35] rounded-2xl p-4 relative overflow-hidden h-48 flex flex-col justify-between">
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono text-slate-400">PIVOT ENGINE</span>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Gate: 1.0820</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-6">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              {/* Primary path line */}
              <path d="M 0 30 L 45 20 L 60 20 L 90 5" fill="none" stroke="#2dd4bf" strokeWidth={isInvalidated ? "0.5" : "2"} strokeDasharray={isInvalidated ? "1" : undefined} opacity={isInvalidated ? "0.3" : "1"} />
              <text x="75" y="4" fill="#2dd4bf" fontSize="3.5" fontWeight="bold" opacity={isInvalidated ? "0.3" : "1"}>Primary Target</text>

              {/* Alternative path line */}
              <path d="M 60 20 L 75 25 L 95 35" fill="none" stroke="#f43f5e" strokeWidth={isInvalidated ? "2" : "0.5"} strokeDasharray={isInvalidated ? undefined : "1"} opacity={isInvalidated ? "1" : "0.3"} />
              <text x="80" y="38" fill="#f43f5e" fontSize="3.5" fontWeight="bold" opacity={isInvalidated ? "1" : "0.3"}>Bearish Hedging</text>

              {/* Decision Gate Circle */}
              <circle cx="60" cy="20" r="2" fill="#f59e0b" className="animate-pulse" />
              <text x="60" y="14" fill="#f59e0b" fontSize="3" fontWeight="bold" textAnchor="middle">Decision Gate</text>

              {/* Live Price Dot */}
              {priceTick <= 60 ? (
                <circle cx={priceTick} cy={30 - (priceTick * 0.166)} r="1.5" fill="#cbd5e1" />
              ) : (
                <circle cx={priceTick} cy={20 + ((priceTick - 60) * 0.43)} r="1.5" fill="#cbd5e1" />
              )}
            </svg>
          </div>

          <div className="z-10 bg-slate-950/80 p-2 rounded-lg border border-slate-900 text-[10px] text-slate-300 font-mono leading-normal text-left">
            {isInvalidated 
              ? "🚨 Gate Breached: Price broke 1.0820 support. The bullish plan is cancelled. Look to buy downside hedging."
              : "✓ Holding Support: Price remains above 1.0820. Target sequence stands."}
          </div>
        </div>
      </div>
    </L6Frame>
  );
};

export const InvalidationBoundaries = () => {
  const [stopVal, setStopVal] = useState<number>(30); // 10 to 60 pips
  const [outcome, setOutcome] = useState<"none" | "simulating" | "stopped" | "valid">("none");

  const runSimulation = () => {
    setOutcome("simulating");
    setTimeout(() => {
      if (stopVal < 25) {
        setOutcome("stopped");
      } else {
        setOutcome("valid");
      }
    }, 1500);
  };

  return (
    <L6Frame
      title="Boundary Retracement Simulator"
      id="BOUND-6.5"
      mentorText="Stops are structural invalidations, not financial ones. If you place your stop inside a normal retracement zone, you will exit valid trades on noise."
      mentorAnalogy="If you build a fence too close to the high tide line, the waves will wash it away. Build your fence where the tide cannot reach."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* Config Panel */}
        <div className="bg-slate-950/40 border border-[#111A35] p-3.5 rounded-xl flex flex-col gap-2 text-left">
          <div className="flex justify-between text-xs font-bold font-mono">
            <span className="text-slate-400">Stop-Loss Placement (Retracement limit):</span>
            <span className="text-teal-400">{stopVal} Pips</span>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            value={stopVal}
            onChange={(e) => {
              setStopVal(Number(e.target.value));
              setOutcome("none");
            }}
            className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />
        </div>

        {/* Viewport */}
        <div className="bg-[#080d1e] border border-[#111A35] rounded-2xl p-4 relative overflow-hidden h-44 flex flex-col justify-between">
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono text-slate-400">STOP INVAL GAUGE</span>
            <button
              onClick={runSimulation}
              disabled={outcome === "simulating"}
              className="px-2.5 py-1 bg-teal-500 hover:bg-teal-600 disabled:bg-slate-800 text-slate-950 disabled:text-slate-600 text-[9px] font-black uppercase tracking-wider rounded transition-all border border-teal-600"
            >
              {outcome === "simulating" ? "Simulating Ticks..." : "Test Retracement"}
            </button>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-6">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              {/* Entry Line */}
              <line x1="0" y1="10" x2="100" y2="10" stroke="#2dd4bf" strokeWidth="0.5" strokeDasharray="2" />
              <text x="2" y="8" fill="#2dd4bf" fontSize="3" className="font-mono">Planned Entry</text>

              {/* Normal Pullback Zone */}
              <rect x="0" y="10" width="100" height="12" fill="#f59e0b" fillOpacity="0.08" />
              <text x="2" y="18" fill="#f59e0b" fontSize="3" className="font-mono">Normal Pullback Zone (25 Pips)</text>

              {/* Invalidation Stop Line */}
              <line x1="0" y1={10 + (stopVal * 0.4)} x2="100" y2={10 + (stopVal * 0.4)} stroke="#ef4444" strokeWidth="1" />
              <text x="75" y={8 + (stopVal * 0.4)} fill="#ef4444" fontSize="3" className="font-mono">Stop Loss ({stopVal}p)</text>

              {/* Price Line drawing during simulation */}
              {outcome === "simulating" && (
                <path d="M 0 10 L 25 15 L 50 22 L 75 18" fill="none" stroke="#cbd5e1" strokeWidth="1.2" className="animate-pulse" />
              )}
              {outcome === "stopped" && (
                <path d="M 0 10 L 25 15 L 50 22 L 75 10 M 50 22 L 60 22" fill="none" stroke="#ef4444" strokeWidth="1.2" />
              )}
              {outcome === "valid" && (
                <path d="M 0 10 L 25 15 L 50 22 L 75 10 L 100 8" fill="none" stroke="#2dd4bf" strokeWidth="1.2" />
              )}
            </svg>
          </div>

          <div className="z-10 bg-slate-950/80 p-2 rounded-lg border border-slate-900 text-[10px] text-slate-300 font-mono text-left">
            {outcome === "none" && "Choose stop size. Press 'Test Retracement' to simulate volatility."}
            {outcome === "simulating" && "Price is dipping into the retracement zone..."}
            {outcome === "stopped" && "🚨 Stopped Out: Stop was placed inside the normal noise zone. Trade stopped before expansion."}
            {outcome === "valid" && "✓ Valid Hold: Stop survived normal retracement fluctuations. Trade is expanding."}
          </div>
        </div>
      </div>
    </L6Frame>
  );
};

export const StructuralConflictZones = () => {
  const [dxyTrend, setDxyTrend] = useState<"up" | "down">("up");
  const [eurusdTrend, setEurusdTrend] = useState<"up" | "down">("up");
  const [decision, setDecision] = useState<"none" | "execute" | "stand">("none");

  // Logic: EUR/USD and DXY should be negatively correlated. If both are up, there is correlation conflict.
  const isConflicted = dxyTrend === "up" && eurusdTrend === "up";

  return (
    <L6Frame
      title="Correlation Mismatch Matrix"
      id="CONFLICT-6.7"
      mentorText="Correlation conflict destroys edge. If your pair is showing a bullish setup, but the dollar index is strongly bullish, the underlying flows do not align."
      mentorAnalogy="If you row downstream, you move quickly. If you row against the current, you tire out. Do not execute trades that fight macro currents."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        {/* Toggle Inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-950/40 border border-[#111A35] p-3 rounded-xl flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">DXY Trend (Dollar):</span>
            <div className="flex gap-1">
              <button
                onClick={() => { setDxyTrend("up"); setDecision("none"); }}
                className={cn("flex-1 py-1 rounded text-[10px] font-bold uppercase transition-all border",
                  dxyTrend === "up" ? "bg-amber-950/40 border-amber-500/30 text-amber-400" : "bg-slate-900/40 border-slate-800 text-slate-500"
                )}
              >
                Bullish
              </button>
              <button
                onClick={() => { setDxyTrend("down"); setDecision("none"); }}
                className={cn("flex-1 py-1 rounded text-[10px] font-bold uppercase transition-all border",
                  dxyTrend === "down" ? "bg-teal-950/40 border-teal-500/30 text-teal-400" : "bg-slate-900/40 border-slate-800 text-slate-500"
                )}
              >
                Bearish
              </button>
            </div>
          </div>

          <div className="bg-slate-950/40 border border-[#111A35] p-3 rounded-xl flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">EUR/USD Setup:</span>
            <div className="flex gap-1">
              <button
                onClick={() => { setEurusdTrend("up"); setDecision("none"); }}
                className={cn("flex-1 py-1 rounded text-[10px] font-bold uppercase transition-all border",
                  eurusdTrend === "up" ? "bg-teal-950/40 border-teal-500/30 text-teal-400" : "bg-slate-900/40 border-slate-800 text-slate-500"
                )}
              >
                Bullish
              </button>
              <button
                onClick={() => { setEurusdTrend("down"); setDecision("none"); }}
                className={cn("flex-1 py-1 rounded text-[10px] font-bold uppercase transition-all border",
                  eurusdTrend === "down" ? "bg-red-950/40 border-red-500/30 text-red-400" : "bg-slate-900/40 border-slate-800 text-slate-500"
                )}
              >
                Bearish
              </button>
            </div>
          </div>
        </div>

        {/* Matrix Display */}
        <div className="bg-[#080d1e] border border-[#111A35] rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center pb-2 border-b border-[#111A35]">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Alignment Dashboard</span>
            <span className={cn("text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border",
              isConflicted ? "bg-red-950/30 text-red-400 border-red-900/20" : "bg-emerald-950/30 text-emerald-400 border-emerald-900/20"
            )}>
              {isConflicted ? "Divergent / Conflict" : "Aligned / Safe"}
            </span>
          </div>

          <p className="text-[11px] text-slate-300 font-mono leading-relaxed">
            {isConflicted 
              ? "🚨 Correlation Warning: You are looking to buy EUR/USD, but the DXY is bullish. EUR and USD typically move in opposite directions. There is strong correlation mismatch."
              : "✓ Clear Alignment: Asset setup correlates properly with DXY direction."}
          </p>

          <div className="flex gap-2 pt-2 border-t border-[#111A35]">
            <button
              onClick={() => setDecision("execute")}
              className={cn("flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all border",
                decision === "execute" ? "bg-red-950/20 border-red-500/40 text-red-400" : "bg-slate-900/20 border-slate-800 text-slate-400 hover:text-slate-200"
              )}
            >
              Execute Setup
            </button>
            <button
              onClick={() => setDecision("stand")}
              className={cn("flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all border",
                decision === "stand" ? "bg-teal-950/20 border-teal-500/40 text-teal-400" : "bg-slate-900/20 border-slate-800 text-slate-400 hover:text-slate-200"
              )}
            >
              Stand Aside
            </button>
          </div>

          {decision !== "none" && (
            <div className={cn("p-2.5 rounded-lg border text-[10px] leading-relaxed font-mono flex gap-2 items-start",
              decision === "stand" || (!isConflicted && decision === "execute") ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-400" : "bg-red-950/20 border-red-500/20 text-red-400"
            )}>
              {decision === "stand" ? (
                <>
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-emerald-400" />
                  <span>{isConflicted ? "✓ Correct: Avoided low-probability conflicted trade." : "✓ Good safety choice, though alignment is clear."}</span>
                </>
              ) : (
                <>
                  {isConflicted ? (
                    <>
                      <ShieldAlert size={12} className="shrink-0 mt-0.5 text-red-400" />
                      <span>🚨 Error: Trading during correlation divergence significantly drops edge. Stand aside.</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-emerald-400" />
                      <span>✓ Correct: Aligned parameters support execution.</span>
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </L6Frame>
  );
};

export const MidSessionAuditLog = () => {
  const [checks, setChecks] = useState<boolean[]>([false, false, false]);
  const [decision, setDecision] = useState<"none" | "adjust" | "wait">("none");

  const toggleCheck = (idx: number) => {
    const newChecks = [...checks];
    newChecks[idx] = !newChecks[idx];
    setChecks(newChecks);
    setDecision("none");
  };

  const allChecked = checks.every(c => c === true);

  return (
    <L6Frame
      title="In-Session Audit Checklist"
      id="AUDIT-6.8"
      mentorText="Do not manage positions on the fly. If you want to trail a stop or adjust a target, you must re-run the entire plan audit sequence."
      mentorAnalogy="An astronaut doesn't turn off standard navigation because they see a shooting star. They stick to the checklist protocol."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        {/* Active Trade Banner */}
        <div className="bg-slate-950/40 border border-[#111A35] p-3 rounded-xl flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Active Position</span>
            <span className="text-xs font-black text-slate-200">LONG EURUSD @ 1.0850 (+1.2R)</span>
          </div>
          <span className="text-[10px] font-mono text-amber-400 animate-pulse uppercase">News window approaching</span>
        </div>

        {/* Checklist */}
        <div className="bg-[#080d1e] border border-[#111A35] rounded-2xl p-4 flex flex-col gap-3">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mandatory Audit Checks:</span>
          
          <div className="flex flex-col gap-2">
            {[
              "1. Has HTF structure shifted since entry? (Check 4H Open)",
              "2. Is the news event within 30 minutes? (Check flat rules)",
              "3. Is the proposed new stop placed at a structural invalidation?"
            ].map((label, idx) => (
              <label key={idx} className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checks[idx]}
                  onChange={() => toggleCheck(idx)}
                  className="mt-0.5 rounded border-[#111A35] text-teal-500 focus:ring-0 outline-none cursor-pointer"
                />
                <span className={cn("text-[11px] font-medium leading-relaxed", checks[idx] ? "text-slate-300" : "text-slate-500")}>
                  {label}
                </span>
              </label>
            ))}
          </div>

          <div className="flex gap-2 pt-2 border-t border-[#111A35]">
            <button
              onClick={() => setDecision("adjust")}
              disabled={!allChecked}
              className={cn("flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all border",
                allChecked ? "bg-teal-500 border-teal-600 text-slate-950 hover:bg-teal-600" : "bg-slate-900/20 border-slate-800 text-slate-600 cursor-not-allowed"
              )}
            >
              Confirm Stop Trail
            </button>
            <button
              onClick={() => setDecision("wait")}
              className="flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all border bg-slate-900/20 border-slate-800 text-slate-400 hover:text-slate-200"
            >
              Stand Flat / Hold Position
            </button>
          </div>

          {decision !== "none" && (
            <div className="bg-emerald-950/20 border border-emerald-500/20 p-2.5 rounded-lg text-[10px] leading-relaxed font-mono text-emerald-400 flex gap-2 items-start animate-in fade-in duration-300">
              <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-emerald-400" />
              <span>
                {decision === "adjust" 
                  ? "✓ Audit Passed: Checklist completed. Trails approved under structural compliance."
                  : "✓ Safe Choice: Keeping original plan targets minimizes in-session emotional tampering."}
              </span>
            </div>
          )}
        </div>
      </div>
    </L6Frame>
  );
};

export const JournalProcessAudit = () => {
  const [tag, setTag] = useState<string>("none");

  return (
    <L6Frame
      title="Post-Session Error Audit"
      id="JOURNAL-6.14"
      mentorText="Your journal is a behavior mirror. Categorizing mistakes honestly is the only path to consistency. A mistake unlogged is a mistake repeated."
      mentorAnalogy="A black box investigator tags structural anomalies after every landing. They don't ignore minor vibrations; they log them."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        {/* Mock trade summary */}
        <div className="bg-slate-950/40 border border-[#111A35] p-4 rounded-xl flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Trade Record #248</span>
            <span className="text-[10px] font-bold text-red-400">-1.0R Loss</span>
          </div>
          <p className="text-xs text-slate-300 font-mono leading-relaxed bg-[#050814] p-3 rounded-lg border border-slate-900">
            <strong>Price Action:</strong> EURUSD rose quickly. Fearful of missing the move, I entered a buy market order at 1.0880 without waiting for a retest of the 15m order block at 1.0855. Price immediately retraced, stopped me out, and then went to target.
          </p>
        </div>

        {/* Classification tags */}
        <div className="bg-[#080d1e] border border-[#111A35] rounded-2xl p-4 flex flex-col gap-3">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Classify Behavioral Deviation:</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: "chase", label: "FOMO Chasing" },
              { id: "oversize", label: "Position Oversizing" },
              { id: "rules", label: "Proper Adherence" }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTag(t.id)}
                className={cn("py-2 rounded-lg text-[10px] font-bold uppercase transition-all border",
                  tag === t.id
                    ? t.id === "rules" ? "bg-red-950/30 border-red-500/40 text-red-400" : "bg-teal-950/30 border border-teal-500/40 text-teal-400"
                    : "bg-slate-950 border-[#111A35] text-slate-400 hover:text-slate-200"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tag !== "none" && (
            <div className={cn("p-2.5 rounded-lg border text-[10px] leading-relaxed font-mono flex gap-2 items-start animate-in fade-in duration-300",
              tag === "chase" ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-400" : "bg-red-950/20 border-red-500/20 text-red-400"
            )}>
              {tag === "chase" ? (
                <>
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-emerald-400" />
                  <span><strong>CORRECT CLASSIFICATION:</strong> This was a classic FOMO chase. Entering market at the high without confirmation violated the plan rules, leading to stop-out. Logged under Process Error code E102.</span>
                </>
              ) : (
                <>
                  <ShieldAlert size={12} className="shrink-0 mt-0.5 text-red-400" />
                  <span>{tag === "rules" ? "🚨 WRONG CLASSIFICATION: You lost 1R, but this was a structural plan breach (chased high, no limit set). It was not compliant." : "🚨 WRONG CLASSIFICATION: Position size was correct (-1.0R loss limit). This was an execution entry violation (chasing price instead of limit entry at structural OB)."}</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </L6Frame>
  );
};

export const Level6ScenarioReviewBoard = ({ visualKey }: { visualKey?: string }) => {
  return (
    <L6Frame
      title="Scenario Review Board"
      id="REVIEW-6.15"
      mentorText="Every asset has distinct execution checklists. Forex focuses on DXY; Gold on COMEX fixings; Crypto on derivatives funding. Build your plan tailored to the asset's structural personality."
      mentorAnalogy="A cargo pilot, passenger pilot, and fighter pilot all use pre-flight checks, but their checklists are customized for the airframe."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        <div className="bg-[#080d1e] border border-[#111A35] rounded-2xl p-5 flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-[#111A35] pb-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase">AUDIT CATEGORY</span>
            <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest">{visualKey || "GENERAL"}</span>
          </div>

          {visualKey === "forex-scenario-checklist" && (
            <div className="flex flex-col gap-2 font-mono text-[10px] text-slate-300">
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>DXY intermarket trend verified</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>London Open range high/low established</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>News feed (CPI, NFP) release window flat rules active</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>Resting limit orders placed inside 15m Fair Value Gaps</span></div>
            </div>
          )}

          {visualKey === "gold-scenario-checklist" && (
            <div className="flex flex-col gap-2 font-mono text-[10px] text-slate-300">
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>US 10Y Yield correlation check complete</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>London AM Fixing price boundaries mapped</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>Slippage budget set below 1.5 dollars/oz</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>Daily contract volume limits locked</span></div>
            </div>
          )}

          {visualKey === "crypto-scenario-checklist" && (
            <div className="flex flex-col gap-2 font-mono text-[10px] text-slate-300">
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>BTC perpetual vs spot price peg verified</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>Leverage funding rate bleed calculation &lt; 0.05%</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>CEX order book liquidity depth check complete</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>Isolated margin bounds locked</span></div>
            </div>
          )}

          {(!visualKey || visualKey === "level-6-debrief-recap") && (
            <div className="flex flex-col gap-2 font-mono text-[10px] text-slate-300">
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>Identify higher timeframe narrative anchors first</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>Draft dual-path branching trees at Decision Gates</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>Enforce in-session checkboxes prior to trailing stops</span></div>
              <div className="flex items-center gap-2 text-teal-400"><CheckCircle2 size={10} /> <span>Commit all process errors to post-session logs</span></div>
            </div>
          )}
        </div>
      </div>
    </L6Frame>
  );
};

// Router component reading visualKey and returning the appropriate interactive visual layout
export const Level6PlaceholderVisual = ({ visualKey, ...props }: { visualKey?: string }) => {
  switch (visualKey) {
    case "htf-narrative-anchors":
      return <HtfNarrativeAnchors {...props} />;
    case "primary-scenario-map":
      return <PrimaryScenarioMap {...props} />;
    case "alternative-scenario-map":
      return <AlternativeScenarioMap {...props} />;
    case "invalidation-boundaries":
      return <InvalidationBoundaries {...props} />;
    case "structural-conflict-zones":
      return <StructuralConflictZones {...props} />;
    case "mid-session-audit-log":
      return <MidSessionAuditLog {...props} />;
    case "journal-process-audit":
      return <JournalProcessAudit {...props} />;
    case "forex-scenario-checklist":
    case "gold-scenario-checklist":
    case "crypto-scenario-checklist":
    case "level-6-debrief-recap":
    default:
      return <Level6ScenarioReviewBoard visualKey={visualKey} {...props} />;
  }
};

// 5. TIME INVALIDATION CLOCKS DYNAMIC COMPONENT
export const TimeInvalidationClocks = () => {
  const [activeWindow, setActiveWindow] = useState<"ny" | "london" | "asia">("ny");
  const [timeState, setTimeState] = useState<"valid" | "expired">("valid");
  
  const windowDetails = {
    ny: {
      title: "New York Open Killzone Window",
      time: "08:30 - 10:30 EST",
      duration: "120 min",
      rules: "If price does not reach the designated POI within this 2-hour window, the setup decays and is invalidated.",
      color: "from-amber-500/20 to-orange-500/20 text-orange-400 border-orange-500/30",
    },
    london: {
      title: "London Open Killzone Window",
      time: "02:00 - 05:00 EST",
      duration: "180 min",
      rules: "Volatility typically peaks in the first 90 minutes. If no displacement occurs by 04:00 EST, cancel resting limit orders.",
      color: "from-sky-500/20 to-indigo-500/20 text-sky-400 border-sky-500/30",
    },
    asia: {
      title: "Asian Session Consolidation Window",
      time: "20:00 - 24:00 EST",
      duration: "240 min",
      rules: "Range boundaries are established here. Breakouts during thin liquidity (22:00-23:00) are high-risk; wait for Tokyo open.",
      color: "from-teal-500/20 to-emerald-500/20 text-emerald-400 border-emerald-500/30",
    }
  };
  
  return (
    <L6Frame title="Time-Invalidation Clock Control" id="TIME-GATE"
      mentorText="Time is the ultimate filter. If a pattern forms outside the programmed session windows, the setup does not exist. Do not chase trades that trigger after your session window closes."
      mentorAnalogy="Like a rocket launch window. If the weather is clear but the launch window closes, you cannot launch. A trade setup that triggers late is unstable and lacks institutional volume support.">
      <div className="w-full flex flex-col gap-4">
        {/* Toggle buttons */}
        <div className="flex gap-2">
          {(["ny", "london", "asia"] as const).map((win) => (
            <button
              key={win}
              onClick={() => setActiveWindow(win)}
              className={cn(
                "px-3 py-1.5 rounded-lg border text-xs font-mono font-bold uppercase transition-all duration-200",
                activeWindow === win
                  ? "bg-slate-900 border-teal-500 text-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.2)]"
                  : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              )}
            >
              {win} open
            </button>
          ))}
        </div>

        {/* Dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Clock face representation */}
          <div className="bg-slate-950/40 border border-[#111A35] p-5 rounded-2xl flex flex-col items-center justify-center gap-4 relative min-h-[180px]">
            <div className="w-28 h-28 rounded-full border-2 border-slate-800 flex items-center justify-center relative">
              {/* Clock markers */}
              <div className="absolute top-1 text-[8px] font-mono text-slate-500 font-bold">12</div>
              <div className="absolute right-2 text-[8px] font-mono text-slate-500 font-bold">3</div>
              <div className="absolute bottom-1 text-[8px] font-mono text-slate-500 font-bold">6</div>
              <div className="absolute left-2 text-[8px] font-mono text-slate-500 font-bold">9</div>
              
              {/* Clock hands */}
              <div className="absolute w-1 h-1 bg-teal-400 rounded-full z-10" />
              {/* Hour hand */}
              <div className="absolute w-8 h-[2px] bg-slate-400 rounded origin-left -rotate-45 left-1/2" />
              {/* Minute hand */}
              <div className="absolute w-12 h-[1px] bg-teal-400 rounded origin-left rotate-90 left-1/2" />
              
              {/* Highlight sector for NY / London / Asia */}
              <div className={cn(
                "absolute inset-1 rounded-full border border-dashed animate-[spin_60s_linear_infinite] opacity-10",
                activeWindow === "ny" ? "border-orange-500" : activeWindow === "london" ? "border-sky-500" : "border-emerald-500"
              )} />
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-sm font-black text-slate-100 font-mono tracking-wider">{windowDetails[activeWindow].time}</span>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-1">Duration: {windowDetails[activeWindow].duration}</span>
            </div>
          </div>

          {/* Details & Interactive gate */}
          <div className="bg-slate-950/40 border border-[#111A35] p-5 rounded-2xl flex flex-col justify-between gap-3 text-left">
            <div>
              <h5 className="text-xs font-black text-slate-200 uppercase tracking-wide flex items-center gap-2">
                <Clock size={14} className="text-teal-400" />
                {windowDetails[activeWindow].title}
              </h5>
              <p className="text-[10px] text-slate-400 mt-2 leading-relaxed font-mono bg-slate-950/80 p-3 rounded-xl border border-slate-900">
                {windowDetails[activeWindow].rules}
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-[#111A35]">
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Interactive Simulator:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setTimeState("valid")}
                  className={cn(
                    "flex-1 py-1.5 px-3 rounded-lg border text-[10px] font-mono font-bold uppercase transition-all duration-200",
                    timeState === "valid"
                      ? "bg-emerald-950/40 border-emerald-500 text-emerald-400"
                      : "bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-400"
                  )}
                >
                  Inside Window
                </button>
                <button
                  onClick={() => setTimeState("expired")}
                  className={cn(
                    "flex-1 py-1.5 px-3 rounded-lg border text-[10px] font-mono font-bold uppercase transition-all duration-200",
                    timeState === "expired"
                      ? "bg-red-950/40 border-red-500 text-red-400"
                      : "bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-400"
                  )}
                >
                  Time Expired
                </button>
              </div>

              <div className={cn(
                "p-2.5 rounded-xl border text-[10px] font-mono leading-snug flex items-center gap-2",
                timeState === "valid"
                  ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-400"
                  : "bg-red-950/20 border-red-500/20 text-red-400"
              )}>
                {timeState === "valid" ? (
                  <>
                    <CheckCircle2 size={12} className="shrink-0 text-emerald-400" />
                    <span><strong>ORDER STANDS:</strong> Price touched POI inside session window. Volume support verified.</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert size={12} className="shrink-0 text-red-400" />
                    <span><strong>CANCEL ORDER:</strong> Price touched POI after window closed. Setup decayed. Avoid entry.</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </L6Frame>
  );
};

