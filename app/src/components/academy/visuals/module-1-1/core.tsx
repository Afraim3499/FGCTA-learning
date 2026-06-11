"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Layers, 
  Activity, 
  Eye, 
  Compass, 
  Layout, 
  AlertTriangle, 
  CheckCircle2, 
  Search, 
  Info, 
  RefreshCw, 
  ChevronRight, 
  ListChecks, 
  Ban, 
  TrendingUp, 
  Scale, 
  ShieldAlert, 
  Database,
  ArrowRightCircle,
  HelpCircle,
  Sliders,
  CheckCircle,
  XCircle,
  FileSpreadsheet
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight, UI } from "./shared";

/**
 * 1. TradePlanRationale: Gambler vs. Planner
 */
export const TradePlanRationale = () => {
  const [selectedMindset, setSelectedMindset] = useState<"gambler" | "planner">("planner");

  return (
    <InstitutionalFrame label="Planning Prohibits Reaction" id="PLAN-1.1-RAT">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-4 mb-2">
          <button
            onClick={() => setSelectedMindset("planner")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              selectedMindset === "planner"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Systematic Planner
          </button>
          <button
            onClick={() => setSelectedMindset("gambler")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              selectedMindset === "gambler"
                ? "bg-rose-950 text-rose-200 border-rose-900 scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Impulsive Gambler
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card Left: Mindset profile */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded border",
                  selectedMindset === "planner" 
                    ? "bg-teal-50 border-teal-200 text-teal-700" 
                    : "bg-rose-50 border-rose-200 text-rose-700"
                )}>
                  {selectedMindset === "planner" ? "Blueprint Active" : "Emotional Impulse"}
                </span>
              </div>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight leading-tight">
                {selectedMindset === "planner" ? "The Rules Dictate the Trade" : "Reaction Drives the Trade"}
              </h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {selectedMindset === "planner"
                  ? "Execution occurs only when all pre-defined structural boxes are checked. Zero guessing, zero FOMO. If the market fails to hit the specified zone, no trade is taken, protecting capital from noise."
                  : "Price spikes green, adrenaline surges. The trade is opened instantly out of fear of missing the move. Stop-loss is configured as an afterthought or omitted entirely, resulting in immediate vulnerability."}
              </p>
            </div>

            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-bold">
                <CheckCircle2 className={cn("shrink-0", selectedMindset === "planner" ? "text-teal-600" : "text-slate-300")} size={16} />
                <span>{selectedMindset === "planner" ? "Objective entries at HTF levels" : "Chasing green/red candles anywhere"}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-bold">
                <CheckCircle2 className={cn("shrink-0", selectedMindset === "planner" ? "text-teal-600" : "text-slate-300")} size={16} />
                <span>{selectedMindset === "planner" ? "Fixed invalidation set BEFORE order" : "No predefined stop-loss level"}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-bold">
                <CheckCircle2 className={cn("shrink-0", selectedMindset === "planner" ? "text-teal-600" : "text-slate-300")} size={16} />
                <span>{selectedMindset === "planner" ? "Mathematical expectancy is tracked" : "Trading on hope and market feeling"}</span>
              </div>
            </div>
          </div>

          {/* Card Right: Interactive Flow Graphic */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">System Diagnostics</span>
              <h4 className="text-sm font-black uppercase text-teal-400">Resulting Execution Curve</h4>
              
              {/* SVG Mock charts */}
              <div className="h-32 w-full bg-slate-950 rounded-xl border border-slate-800 p-2 flex items-center justify-center relative overflow-hidden">
                {selectedMindset === "planner" ? (
                  <svg className="w-full h-full text-teal-500 stroke-[2] fill-none overflow-visible" viewBox="0 0 100 30">
                    <path d="M 0 25 L 20 23 L 40 24 L 60 15 L 80 16 L 100 5" className="animate-[dash_2s_ease-out]" />
                    <line x1="0" y1="20" x2="100" y2="20" stroke="#334155" strokeDasharray="2 2" />
                    <text x="5" y="12" fill="#94A3B8" className="text-[6px] font-mono">EXPECTANCY</text>
                  </svg>
                ) : (
                  <svg className="w-full h-full text-rose-500 stroke-[2] fill-none overflow-visible" viewBox="0 0 100 30">
                    <path d="M 0 15 L 15 5 L 30 25 L 50 12 L 65 28 L 80 22 L 100 29" />
                    <line x1="0" y1="20" x2="100" y2="20" stroke="#334155" strokeDasharray="2 2" />
                    <text x="5" y="12" fill="#F43F5E" className="text-[6px] font-mono">IMPULSE DECAY</text>
                  </svg>
                )}
              </div>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-slate-400">
                {selectedMindset === "planner"
                  ? "STATUS: Safe. Position sizes are fixed around capital risk. Drawdown is locked and predictable."
                  : "WARNING: High tail risk. Liquidations and emotional tilt expected due to over-leveraging and missing stops."}
              </div>
            </div>
            
            <div className="text-[10px] text-slate-500 font-bold italic mt-4 text-center">
              {selectedMindset === "planner" 
                ? "“The market cannot force me to execute. I participate on my terms only.”" 
                : "“I saw a big candle and felt like I was missing out.”"}
            </div>
          </div>
        </div>
        
        <MentorInsight 
          text="A trade plan is not a prediction. It is a filter that keeps you out of the market until the balance of evidence is heavily in your favor." 
          analogy="A spider doesn't chase flies across the room. It weaves a web in a high-probability spot and waits. Impulsive chasing gets you swatted."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. FivePlanPillars: Interactive Pillars Check list
 */
export const FivePlanPillars = () => {
  const [activePillar, setActivePillar] = useState<number>(0);
  const [checkedPillars, setCheckedPillars] = useState<boolean[]>([true, false, false, false, false]);

  const pillars = [
    {
      title: "1. Context",
      subtitle: "The Master Direction",
      desc: "HTF trend structure or range boundaries. Tells you whether the market pressure is bullish, bearish, or consolidating.",
      icon: Compass,
      detail: "Avoids fighting the higher timeframe flow. We check the Daily and H4 charts to set the macro bias."
    },
    {
      title: "2. Location",
      subtitle: "The Key Reaction Area",
      desc: "The specific price zone where orders cluster. We only look for trades at major support, resistance, or demand/supply zones.",
      icon: Layout,
      detail: "Prevents buying in No-Man's Land. We do not participate unless price touches our pre-mapped locations."
    },
    {
      title: "3. Entry Evidence",
      subtitle: "The Local Confirmation",
      desc: "Price reaction inside the zone confirming participant arrival. Refined candle rejections, sweeps, or shifts in LTF structure.",
      icon: Activity,
      detail: "Prevents catching falling knives. We wait for buyers or sellers to prove they are defending the level first."
    },
    {
      title: "4. Invalidation Checkpoint",
      subtitle: "The Shield Level",
      desc: "The exact price where the trade thesis is wrong. If crossed, the plan is invalid. This defines your stop-loss and risk size.",
      icon: ShieldAlert,
      detail: "The absolute boundary of safety. Set before order entry and never moved wider during the trade."
    },
    {
      title: "5. Target Location",
      subtitle: "The Structural Destination",
      desc: "The next logical structural barrier. Where opposing pressure is expected. Defines your profit target and R-multiple.",
      icon: TrendingUp,
      detail: "Based on objective chart barriers, never arbitrary dollar targets. Ensures minimum 2R reward-to-risk ratio."
    }
  ];

  const handlePillarClick = (idx: number) => {
    setActivePillar(idx);
    const updated = [...checkedPillars];
    // Check all previous pillars automatically to enforce sequence
    for (let i = 0; i <= idx; i++) {
      updated[i] = true;
    }
    setCheckedPillars(updated);
  };

  const resetPillars = () => {
    setCheckedPillars([true, false, false, false, false]);
    setActivePillar(0);
  };

  const allChecked = checkedPillars.every(Boolean);

  return (
    <InstitutionalFrame label="The 5 Pillars of a Plan" id="PLAN-1.1-PIL">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <p className="text-xs text-slate-500 font-semibold text-center max-w-xl mx-auto">
          Pillars must be evaluated in sequence. Click each pillar to assemble the trade plan check list.
        </p>

        {/* Pillars Pipeline */}
        <div className="grid grid-cols-5 gap-2 md:gap-4">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isChecked = checkedPillars[idx];
            const isActive = activePillar === idx;

            return (
              <button
                key={idx}
                onClick={() => handlePillarClick(idx)}
                className={cn(
                  "p-3 rounded-xl border flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden shadow-sm",
                  isActive 
                    ? "bg-[#071B36] text-white border-[#071B36] scale-105" 
                    : isChecked 
                    ? "bg-white border-teal-500 text-teal-800" 
                    : "bg-[#F8FBFC] border-slate-200 text-slate-400"
                )}
              >
                <Icon size={18} className={cn("mb-2", isActive ? "text-teal-400" : isChecked ? "text-teal-600" : "text-slate-400")} />
                <span className="text-[9px] font-black uppercase tracking-wider block truncate w-full">{p.title.split(". ")[1]}</span>
                {isChecked && !isActive && (
                  <CheckCircle size={10} className="absolute top-1 right-1 text-teal-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Information Side */}
            <div className="md:col-span-8 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Pillar {activePillar + 1} Profile
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">{pillars[activePillar].subtitle}</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {pillars[activePillar].desc}
              </p>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-start gap-2">
                <Info size={14} className="text-teal-600 shrink-0 mt-0.5" />
                <span>{pillars[activePillar].detail}</span>
              </div>
            </div>

            {/* Validation State Side */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-2xl min-h-[160px]">
              {allChecked ? (
                <div className="text-center space-y-3">
                  <CheckCircle2 size={40} className="text-teal-600 mx-auto animate-bounce" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 block">PLAN VALIDATED</span>
                    <span className="text-[9px] font-mono text-slate-400 block">ALL PILLARS LOCKED</span>
                  </div>
                  <button 
                    onClick={resetPillars}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[9px] font-black uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    Reset Architect
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-3">
                  <Sliders size={40} className="text-slate-300 mx-auto animate-pulse" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">PLAN INCOMPLETE</span>
                    <span className="text-[9px] font-bold text-slate-500 block leading-normal px-2">
                      Check remaining pillars in sequence to validate the setup.
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
        
        <MentorInsight 
          text="Do not build a plan that starts at Pillar 3 (Evidence). A beautiful engulfing candle inside No-Man's Land is a trap. Start with Context, then Location." 
          analogy="Building a house begins with the foundation (Context) and land selection (Location), not buying the front door (Evidence). If the ground is a swamp, the door won't save it."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 3. ContextLocationMatrix: Intersecting Context and Location
 */
export const ContextLocationMatrix = () => {
  const [selectedContext, setSelectedContext] = useState<"trend" | "range" | "compression">("trend");
  const [selectedLocation, setSelectedLocation] = useState<"major" | "minor" | "nomans">("major");

  const getSyllabusRecommendation = () => {
    if (selectedLocation === "nomans") {
      return {
        label: "NO TRADE",
        color: "bg-rose-50 border-rose-200 text-rose-700",
        barColor: "bg-rose-500",
        desc: "CRITICAL: You are planning an execution in the middle of a range. Price moves randomly here with no institutional participation. Taking trades here will result in immediate whipsaw losses.",
        score: "0/100 (Unviable)"
      };
    }
    if (selectedLocation === "minor") {
      if (selectedContext === "trend") {
        return {
          label: "LOW QUALITY (FILTER REQUIRED)",
          color: "bg-amber-50 border-amber-200 text-amber-700",
          barColor: "bg-amber-500",
          desc: "WARNING: While the trend context is favorable, the location is a minor intraday level. Price may easily break this level to test major HTF support. Requires strict risk reductions if planned.",
          score: "45/100 (High Risk)"
        };
      }
      return {
        label: "NO TRADE",
        color: "bg-rose-50 border-rose-200 text-rose-700",
        barColor: "bg-rose-500",
        desc: "CRITICAL: Minor location combined with range/compression results in highly noisy chop. Opposing forces will swallow local rejections. Skip and wait.",
        score: "20/100 (Unviable)"
      };
    }
    // Major Location
    if (selectedContext === "trend") {
      return {
        label: "HIGH FEASIBILITY (A+ SETUP)",
        color: "bg-teal-50 border-teal-200 text-teal-700",
        barColor: "bg-teal-500",
        desc: "EXCELLENT: Perfect structural alignment. You are trading in the direction of HTF order flow (Context) at a major institutional turning point (Location). This is a textbook plan.",
        score: "95/100 (Premium)"
      };
    }
    if (selectedContext === "range") {
      return {
        label: "MODERATE FEASIBILITY (RANGE ROTATION)",
        color: "bg-sky-50 border-sky-200 text-sky-700",
        barColor: "bg-sky-500",
        desc: "GOOD: Standard range rotation trade. You are looking for a reversal at a major range boundary. Expect price to sweep the boundary before rotating to the opposite side.",
        score: "75/100 (Balanced)"
      };
    }
    return {
      label: "COMPRESSION (BREAKOUT EXPECTED)",
      color: "bg-amber-50 border-amber-200 text-amber-700",
      barColor: "bg-[#D97706]",
      desc: "ATTENTION: Market is coiling in compression at major structure. Expect a violent expansion soon. Do not trade local reversals; plan to catch the breakout confirmation structure instead.",
      score: "60/100 (High Volatility)"
    };
  };

  const rec = getSyllabusRecommendation();

  return (
    <InstitutionalFrame label="Context & Location Matrix" id="PLAN-1.1-MAT">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Selectors Panel (Left) */}
          <div className="md:col-span-6 space-y-5 flex flex-col justify-center">
            
            {/* Context Selector */}
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">1. Select Market Context</span>
              <div className="grid grid-cols-3 gap-2">
                {(["trend", "range", "compression"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedContext(c)}
                    className={cn(
                      "p-3 rounded-xl border text-[10px] font-black uppercase tracking-wider transition-all duration-300",
                      selectedContext === c 
                        ? "bg-[#071B36] text-white border-[#071B36]" 
                        : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Selector */}
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">2. Select Chart Location</span>
              <div className="grid grid-cols-3 gap-2">
                {(["major", "minor", "nomans"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setSelectedLocation(l)}
                    className={cn(
                      "p-3 rounded-xl border text-[10px] font-black uppercase tracking-wider transition-all duration-300",
                      selectedLocation === l 
                        ? "bg-[#071B36] text-white border-[#071B36]" 
                        : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                    )}
                  >
                    {l === "nomans" ? "No-Man's" : l + " Zone"}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Matrix Recommendation Console (Right) */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest">Feasibility Score</span>
                <span className="text-xs font-black text-[#071B36]">{rec.score}</span>
              </div>
              
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={cn("h-full transition-all duration-500", rec.barColor)} 
                  style={{ width: rec.score.includes("95") ? "95%" : rec.score.includes("75") ? "75%" : rec.score.includes("60") ? "60%" : rec.score.includes("45") ? "45%" : "15%" }}
                />
              </div>

              <div className="h-px bg-slate-100" />

              <div className="space-y-2">
                <span className={cn("text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block", rec.color)}>
                  {rec.label}
                </span>
                <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                  {rec.desc}
                </p>
              </div>
            </div>

            <div className="mt-4 bg-slate-50 border border-slate-100 p-3 rounded-xl text-[9px] font-bold text-slate-400 leading-normal">
              PRO TIP: Always align Context (Higher Timeframe Direction) and Location (High Volume Execution Zones) before checking entry candles.
            </div>
          </div>

        </div>
        
        <MentorInsight 
          text="Beginners focus entirely on entry signals (Pillar 3). Experts focus on location (Pillar 2). Even a perfect entry pattern printed in No-Man's Land is statistical garbage." 
          analogy="A world-class seed (Entry Pattern) planted on a dry rock (No-Man's Land) will die. A mediocre seed planted in rich, fertile soil (Major Zone + Trend Context) will flourish."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. InvalidationVsTarget: Risk Boundaries Calculator
 */
export const InvalidationVsTarget = () => {
  const [stopDistance, setStopDistance] = useState<number>(30); // in pips/points
  const [targetDistance, setTargetDistance] = useState<number>(90); // in pips/points

  const rMultiple = (targetDistance / stopDistance).toFixed(1);
  const isFeasible = parseFloat(rMultiple) >= 2.0;

  return (
    <InstitutionalFrame label="Invalidation vs. Target Boundaries" id="PLAN-1.1-RND">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Slider Panel (Left) */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Boundaries</span>
            
            {/* Stop Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Invalidation Distance (Risk)</span>
                <span className="text-rose-600 font-mono">{stopDistance} pips</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={stopDistance}
                onChange={(e) => setStopDistance(parseInt(e.target.value))}
                className="w-full accent-rose-600"
              />
              <span className="text-[9px] font-bold text-slate-400 block">Wider stop = smaller position size to keep capital risk fixed.</span>
            </div>

            {/* Target Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Target Distance (Reward)</span>
                <span className="text-teal-600 font-mono">{targetDistance} pips</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="200" 
                value={targetDistance}
                onChange={(e) => setTargetDistance(parseInt(e.target.value))}
                className="w-full accent-teal-600"
              />
              <span className="text-[9px] font-bold text-slate-400 block">Must be placed at the next logical structure barrier, not random values.</span>
            </div>
          </div>

          {/* Graphic/Calculation Display (Right) */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:24px_24px]" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest">Expectancy Calculator</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isFeasible ? "bg-teal-950 border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
                )}>
                  {isFeasible ? "Feasible Plan" : "Unviable Plan"}
                </span>
              </div>

              {/* R-Multiple Big Number */}
              <div className="text-center py-4 bg-slate-950/80 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">R-Multiple (Reward / Risk)</span>
                <span className={cn("text-3xl font-black font-mono tracking-tighter", isFeasible ? "text-teal-400 animate-pulse" : "text-rose-500")}>
                  {rMultiple}R
                </span>
                <span className="text-[9px] text-slate-500 font-bold block mt-1">
                  {isFeasible ? "You make more than twice what you risk." : "Reward-to-risk ratio is below the 2.0R threshold."}
                </span>
              </div>

              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-[10px] font-mono leading-relaxed text-slate-400">
                {isFeasible 
                  ? "SYSTEM STATE: Locked. Even with a 45% win rate, this plan will generate positive mathematical expectancy over a series of trades."
                  : "WARNING: High win-rate requirement. You are risking too much to make too little. Minor losses will wipe out major gains."}
              </div>
            </div>

            <div className="text-[9px] text-slate-500 font-bold text-center mt-4 border-t border-slate-800 pt-3">
              Equation: Target ({targetDistance} pips) ÷ Invalidation ({stopDistance} pips) = {rMultiple}R
            </div>
          </div>

        </div>
        
        <MentorInsight 
          text="Never adjust your invalidation level closer to artificially boost your R-multiple. The invalidation level is dictated by chart structure, not your desired returns." 
          analogy="Changing the target is like setting the destination. Changing the invalidation is like moving the safety net closer. If you place the net too high, you fall off the tightrope and hit the ground anyway."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. PlanValidationDrill: Practice Component
 */
export const PlanValidationDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "The plan is complete and ready for order execution.",
      isCorrect: false,
      feedback: "Incorrect. The plan lacks an objective target location based on structure, relying instead on a arbitrary monetary goal."
    },
    {
      id: "B",
      text: "The context is wrong because daily demand cannot be used with H4 trend.",
      isCorrect: false,
      feedback: "Incorrect. Combining H4 trend (Context) with Daily demand (Location) is a valid multi-timeframe approach."
    },
    {
      id: "C",
      text: "The target is arbitrary (based on a financial goal) rather than mapped to a structural chart location.",
      isCorrect: true,
      feedback: "Correct! The target location must be based on objective market structure (e.g., prior swing highs or resistance zones) rather than a subjective dollar target. Setting profit targets based on monetary desires creates exit errors."
    },
    {
      id: "D",
      text: "The invalidation level is too close.",
      isCorrect: false,
      feedback: "Incorrect. Placing the invalidation below the demand zone low is standard, objective structural placement."
    }
  ];

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    setShowFeedback(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const selectedData = options.find(o => o.id === selectedOption);

  return (
    <InstitutionalFrame label="Practice Drill: Plan Validation" id="PLAN-1.1-DRL" status="DRILL ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
            <HelpCircle size={14} className="text-teal-600" />
            Case Study Audit
          </div>
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            A trader writes a plan: <span className="italic font-normal">“Context is H4 uptrend. Location is daily demand zone. Stop-loss (Invalidation) is set below the demand zone low. Target is set based on making $500 profit.”</span> What is the critical error in this plan?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={showFeedback}
              className={cn(
                "p-4 rounded-2xl border text-left text-xs font-semibold transition-all duration-300 shadow-sm",
                selectedOption === opt.id
                  ? opt.isCorrect
                    ? "bg-teal-50 border-teal-500 text-teal-900 ring-2 ring-teal-100"
                    : "bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-100"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-60"
              )}
            >
              <div className="flex gap-3 items-start">
                <span className={cn(
                  "w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-black border",
                  selectedOption === opt.id
                    ? opt.isCorrect
                      ? "bg-teal-500 border-teal-600 text-white"
                      : "bg-rose-500 border-rose-600 text-white"
                    : "bg-slate-100 border-slate-200 text-slate-500"
                )}>
                  {opt.id}
                </span>
                <span className="leading-snug">{opt.text}</span>
              </div>
            </button>
          ))}
        </div>

        {showFeedback && selectedData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "p-4 rounded-2xl border text-xs font-semibold leading-relaxed flex items-start gap-3 shadow-sm",
              selectedData.isCorrect 
                ? "bg-teal-50 border-teal-200 text-teal-900" 
                : "bg-rose-50 border-rose-200 text-rose-900"
            )}
          >
            {selectedData.isCorrect ? (
              <CheckCircle size={16} className="text-teal-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <span className="font-black uppercase tracking-wider block">
                {selectedData.isCorrect ? "Correct Diagnosis" : "Incorrect Diagnosis"}
              </span>
              <p className="text-slate-600 font-semibold">{selectedData.feedback}</p>
            </div>
            {selectedOption && (
              <button 
                onClick={handleReset}
                className="ml-auto px-3 py-1 bg-white border border-slate-200 rounded-lg text-[9px] font-black uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-sm shrink-0"
              >
                Reset
              </button>
            )}
          </motion.div>
        )}
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 6. TradePlanDebrief: Summary Component
 */
export const TradePlanDebrief = () => {
  return (
    <InstitutionalFrame label="Debrief: The Plan Is the Trade" id="PLAN-1.1-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Core Concept Mastered
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Pre-Execution Contract</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the core concept of trade planning. By structuring your ideas around Context, Location, Invalidation, and Target before price gets there, you maintain absolute control over your actions. A professional trader does not react to flickering candles; they execute a pre-written plan.
            </p>
            
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
                <span className="text-[16px] font-black font-mono text-[#071B36] block">100%</span>
                <span className="text-[8px] font-black uppercase tracking-wider text-slate-400">Pre-Written Plans</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
                <span className="text-[16px] font-black font-mono text-[#071B36] block">0%</span>
                <span className="text-[8px] font-black uppercase tracking-wider text-slate-400">Impulse Entries</span>
              </div>
            </div>
          </div>

          {/* Checklist Board Graphic */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">Workflow Status</span>
              <h4 className="text-sm font-black uppercase text-teal-400">Next Action Roads</h4>
              
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-300 font-bold p-2 bg-slate-950 rounded-xl border border-slate-800">
                  <FileSpreadsheet className="text-teal-400 shrink-0" size={16} />
                  <span>Check Asset Roadways</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-400 font-medium p-2 bg-slate-950/40 rounded-xl border border-slate-900">
                  <ArrowRightCircle className="text-slate-600 shrink-0" size={16} />
                  <span>Prepare Module 1.2 Invalidation</span>
                </div>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-slate-400">
                STATUS: Lock active. The curriculum is ready to transition to the Forex, Gold, or Crypto specialised tracks.
              </div>
            </div>
          </div>

        </div>
        
        <MentorInsight 
          text="Write your trade plans down. If a setup is not written down on paper or in a journal before the buy/sell button is pressed, it is a guess." 
          analogy="A commercial airline pilot never starts a flight without a written flight plan. They don't take off and decide where to land mid-flight. Trade with the same professionalism."
        />
      </div>
    </InstitutionalFrame>
  );
};
