"use client";

import React, { useState } from "react";
import { 
  Shield, 
  Activity, 
  Percent, 
  TrendingUp, 
  AlertTriangle, 
  Sliders, 
  ArrowRight, 
  CheckCircle2, 
  DollarSign, 
  Crosshair, 
  Zap, 
  Lock, 
  Maximize2 
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useMentorNote } from "../../lesson-workspace/MentorNoteContext";

// L5Frame uses a Carbon-Slate "Risk Control & Equity Defense Matrix" theme matching institutional trading desks
const L5Frame = ({ 
  children, 
  title, 
  id, 
  mentorText: defaultMentorText = "Capital preservation is the only mathematical priority. If you cannot survive the drawdown, your edge does not exist.",
  mentorAnalogy: defaultMentorAnalogy = "A nuclear reactor has secondary coolant loops and control rods. Your drawdown gear shift and daily circuit breakers are the control rods that prevent a total account meltdown." 
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
    <div className="w-full bg-[#090D1A] border border-[#16223F] rounded-[2.5rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-2xl text-left min-h-[500px] text-white">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#1E293B_1px,transparent_1px)] bg-[length:20px_20px] opacity-40" />
      
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-[#16223F] pb-4 shrink-0">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 mb-1">
            <Shield size={12} className="text-emerald-400 animate-pulse" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Equity Defense Matrix</span>
          </div>
          <h4 className="text-sm font-black text-emerald-400 uppercase tracking-tight italic leading-tight">{title}</h4>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Risk Protocol</span>
            <span className="text-[10px] font-mono text-emerald-200 font-bold">{id}</span>
          </div>
        </div>
      </div>
      
      {/* Dynamic Content Center Stage */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0">
        {children}
      </div>

      {/* Mentor Blueprint Insight at the Bottom */}
      <div className="w-full mt-6 pt-5 border-t border-[#16223F] flex flex-col gap-2 shrink-0 text-left relative z-10">
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 bg-emerald-950/50 text-emerald-400 text-[8px] font-black uppercase tracking-widest rounded-sm border border-emerald-800/30">Risk Blueprint</div>
          <div className="h-px flex-1 bg-[#16223F]" />
        </div>
        <div className="flex gap-4">
           <div className="flex-1">
              <p className="text-xs font-bold text-slate-200 leading-relaxed">{activeMentorText}</p>
              {activeMentorAnalogy && (
                <p className="mt-1.5 text-[11px] text-slate-400 italic leading-snug">
                  <span className="font-black uppercase text-[9px] mr-2 text-emerald-400 not-italic">Institutional Rule:</span>
                  {activeMentorAnalogy}
                </p>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

// --- 1. DYNAMIC RISK CALCULATOR VISUAL ---
export const DynamicRiskCalculatorVisual = () => {
  const [winRate, setWinRate] = useState(50); // 50%
  const [rrRatio, setRrRatio] = useState(2.0); // 2:1
  const [losingStreak, setLosingStreak] = useState(0);
  const [atrStop, setAtrStop] = useState(10); // 10 pips/points
  const balance = 10000;

  // Kelly Criterion: f* = (p*R - q) / R = (p*(R+1) - 1) / R
  // where p = winRate/100, R = rrRatio
  const p = winRate / 100;
  const q = 1 - p;
  const kellyRaw = (p * rrRatio - q) / rrRatio;
  const kellyPercent = Math.max(0, kellyRaw * 100);
  
  // Fractional Kelly (typically 1/4 Kelly used by institutions for safety)
  const quarterKelly = kellyPercent / 4;

  // Gear shift risk multiplier based on losing streak
  // 0-2 streak = 100% risk, 3 streak = 50% risk, 4 streak = 25% risk, 5+ streak = 10% risk
  const getGearMultiplier = (streak: number) => {
    if (streak <= 2) return 1.0;
    if (streak === 3) return 0.5;
    if (streak === 4) return 0.25;
    return 0.1;
  };

  const gearMultiplier = getGearMultiplier(losingStreak);
  const baseRiskPct = quarterKelly > 0 ? Math.min(2.0, quarterKelly) : 1.0; // cap base risk at 2%
  const finalRiskPct = baseRiskPct * gearMultiplier;
  const finalRiskAmount = (balance * finalRiskPct) / 100;
  
  // Position sizing (Lot size/unit sizing based on stop distance)
  // Lot sizing for Forex standard (1 lot = $10/pip at 1.0000 rate, simple representation)
  const lotSize = finalRiskAmount / (atrStop * 10);

  return (
    <L5Frame 
      title="Dynamic Position Sizing & EV Calculator" 
      id="EV-CALC-5.1"
      mentorText="The Kelly Criterion proves that sizing must be a function of mathematical edge (Win Rate + R:R). However, live drawdown forces a gear-shift reduction to protect against statistical anomalies."
      mentorAnalogy="If you have an edge, betting too much will still bankrupt you due to path dependency. We use Fractional Kelly combined with a drawdown shift to survive variance."
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-2">
        {/* Left Side: Inputs */}
        <div className="lg:col-span-6 bg-slate-950/40 border border-[#16223F] p-4 rounded-2xl flex flex-col gap-4">
          <h5 className="text-xs font-black uppercase text-slate-300 tracking-wider flex items-center gap-1.5 border-b border-[#16223F] pb-2">
            <Sliders size={12} className="text-emerald-400" />
            Parameter Controls
          </h5>

          {/* Win Rate Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400 font-bold">Historical Win Rate</span>
              <span className="text-emerald-400 font-black">{winRate}%</span>
            </div>
            <input 
              type="range" 
              min="30" 
              max="70" 
              value={winRate} 
              onChange={(e) => setWinRate(parseInt(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* R:R Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400 font-bold">Average Risk-to-Reward</span>
              <span className="text-emerald-400 font-black">{rrRatio.toFixed(1)}:1</span>
            </div>
            <input 
              type="range" 
              min="1.0" 
              max="4.0" 
              step="0.5" 
              value={rrRatio} 
              onChange={(e) => setRrRatio(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Losing Streak Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400 font-bold">Current Losing Streak</span>
              <span className={cn("font-black", losingStreak >= 3 ? "text-orange-400 animate-pulse" : "text-emerald-400")}>
                {losingStreak} Losses
              </span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="6" 
              value={losingStreak} 
              onChange={(e) => setLosingStreak(parseInt(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Stop Distance (ATR) Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400 font-bold">ATR-Adjusted Stop Loss</span>
              <span className="text-emerald-400 font-black">{atrStop} Pips/Points</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="50" 
              step="5"
              value={atrStop} 
              onChange={(e) => setAtrStop(parseInt(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Right Side: Output Dashboard */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {/* Kelly/EV Card */}
          <div className="bg-slate-950/20 border border-[#16223F] p-4 rounded-2xl flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl rounded-full" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mathematical Edge</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-black text-emerald-400">{kellyPercent > 0 ? `+${kellyPercent.toFixed(1)}%` : "0.0%"}</span>
              <span className="text-xs text-slate-400 font-semibold">Kelly Fraction</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-snug">
              Expected value is {kellyPercent > 0 ? "POSITIVE" : "NEGATIVE"}. 
              Quarter-Kelly model suggests risking <strong className="text-slate-200">{baseRiskPct.toFixed(2)}%</strong> under normal conditions.
            </p>
          </div>

          {/* Gear Shift State */}
          <div className="bg-slate-950/20 border border-[#16223F] p-4 rounded-2xl flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-2xl rounded-full" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Drawdown Gear Shift</span>
            <div className="flex items-center gap-3 mt-1">
              <span className={cn("text-xl font-black px-2.5 py-1 rounded-lg border", 
                losingStreak >= 3 
                  ? "bg-orange-950/40 text-orange-400 border-orange-800/40" 
                  : "bg-emerald-950/20 text-emerald-400 border-emerald-800/20"
              )}>
                {gearMultiplier * 100}%
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-200">
                  {losingStreak >= 3 ? "Gear Shift: Active (Halved)" : "Normal Sizing"}
                </span>
                <span className="text-[10px] text-slate-400">Risk multiplier applied to base capital.</span>
              </div>
            </div>
          </div>

          {/* Final Sizing Metrics */}
          <div className="grid grid-cols-2 gap-3 mt-1">
            <div className="bg-[#0C1525] border border-emerald-950/30 p-3 rounded-xl flex flex-col">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Max Risk ($)</span>
              <span className="text-lg font-black text-slate-100 mt-1">${finalRiskAmount.toFixed(2)}</span>
              <span className="text-[9px] text-slate-400 font-bold">{finalRiskPct.toFixed(2)}% of Account</span>
            </div>

            <div className="bg-[#0C1525] border border-emerald-950/30 p-3 rounded-xl flex flex-col">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Position Size</span>
              <span className="text-lg font-black text-emerald-400 mt-1">{lotSize.toFixed(2)} Lots</span>
              <span className="text-[9px] text-slate-400 font-bold">Standard Standardized Units</span>
            </div>
          </div>
        </div>
      </div>
    </L5Frame>
  );
};

// --- 2. RISK-FREE FUNDING VISUAL ---
export const RiskFreeFundingVisual = () => {
  const [tradeState, setTradeState] = useState(0); // 0 = Entry, 1 = 1R hit, 2 = 2R target hit

  return (
    <L5Frame 
      title="Risk-Free Funding & Partial Profits" 
      id="PARTIALS-5.4"
      mentorText="Taking 50% partial profits at 1R and moving the stop loss to Break-Even (BE) mathematicalizes a risk-free scenario. It guarantees that the trade cannot result in a loss, shifting the psychology entirely."
      mentorAnalogy="A smart commander secures the bridgehead before advancing. Partials secure your capital so that the rest of the campaign runs on house money."
    >
      <div className="w-full flex flex-col items-center gap-6 my-2">
        {/* Dynamic Interactive Stepper */}
        <div className="flex items-center gap-2 bg-slate-950/40 border border-[#16223F] p-1.5 rounded-full relative z-10">
          <button 
            onClick={() => setTradeState(0)}
            className={cn("px-4 py-1.5 rounded-full text-xs font-black uppercase transition-all", 
              tradeState === 0 
                ? "bg-emerald-500 text-slate-950 shadow-lg" 
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            1. Trade Entry
          </button>
          <button 
            onClick={() => setTradeState(1)}
            className={cn("px-4 py-1.5 rounded-full text-xs font-black uppercase transition-all", 
              tradeState === 1 
                ? "bg-emerald-500 text-slate-950 shadow-lg" 
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            2. At 1R (Scale Out)
          </button>
          <button 
            onClick={() => setTradeState(2)}
            className={cn("px-4 py-1.5 rounded-full text-xs font-black uppercase transition-all", 
              tradeState === 2 
                ? "bg-emerald-500 text-slate-950 shadow-lg" 
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            3. Final Target (2R)
          </button>
        </div>

        {/* Visual Chart Representation */}
        <div className="w-full bg-[#070B16] border border-[#16223F] rounded-2xl p-6 relative overflow-hidden flex flex-col min-h-[200px]">
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#16223F_1px,transparent_1px),linear-gradient(to_bottom,#16223F_1px,transparent_1px)] bg-[length:40px_40px] opacity-15" />
          
          <div className="relative z-10 w-full flex flex-col gap-6">
            {/* Target Level */}
            <div className="flex items-center justify-between border-t border-emerald-500/20 pt-1">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Take Profit Target (2R)
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">+$200</span>
            </div>

            {/* 1R Partial Level */}
            <div className={cn("flex items-center justify-between border-t transition-all pt-1", 
              tradeState >= 1 ? "border-emerald-400/40 text-emerald-300" : "border-slate-800 text-slate-500"
            )}>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                <span className={cn("w-1.5 h-1.5 rounded-full", tradeState >= 1 ? "bg-emerald-400" : "bg-slate-700")} />
                Partial Profit Area (1R)
              </span>
              <span className="text-[10px] font-mono font-bold">{tradeState >= 1 ? "+$100 (50% Scaled)" : "+$100"}</span>
            </div>

            {/* Entry Level */}
            <div className="flex items-center justify-between border-t border-cyan-500/40 pt-1">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Entry Price (0R)
              </span>
              <span className="text-[10px] font-mono text-cyan-400 font-bold">$1.1000</span>
            </div>

            {/* Stop Loss Level */}
            <div className="flex items-center justify-between transition-all pt-1 border-t relative">
              {/* Dynamic Indicator showing stop movement */}
              {tradeState >= 1 ? (
                <div className="absolute inset-0 border-t border-cyan-400/50 bg-cyan-950/10 flex items-center justify-between px-2">
                  <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Zap size={10} className="text-cyan-400 animate-bounce" />
                    Stop Moved to Entry (BE)
                  </span>
                  <span className="text-[10px] font-mono text-cyan-300 font-bold">$0.00 Risk</span>
                </div>
              ) : (
                <>
                  <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    Initial Stop Loss (-1R)
                  </span>
                  <span className="text-[10px] font-mono text-red-400 font-bold">-$100</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Trade Math Explainer */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-950/20 border border-[#16223F] p-4 rounded-xl flex flex-col">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Initial Risk</span>
            <span className="text-base font-black text-red-400 mt-1">$100 (1.0% Capital)</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Full risk on stop trigger.</span>
          </div>

          <div className="bg-slate-950/20 border border-[#16223F] p-4 rounded-xl flex flex-col">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Partials Secured</span>
            <span className="text-base font-black text-emerald-400 mt-1">
              {tradeState >= 1 ? "$50 Locked (0.5R)" : "$0.00"}
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5">50% size closed at 1R.</span>
          </div>

          <div className="bg-slate-950/20 border border-[#16223F] p-4 rounded-xl flex flex-col">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Active Trade Risk</span>
            <span className={cn("text-base font-black mt-1", tradeState >= 1 ? "text-emerald-400" : "text-slate-300")}>
              {tradeState >= 1 ? "HOUSE MONEY (No Risk)" : "$100 Active Risk"}
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5">Remaining 50% trade sizing.</span>
          </div>
        </div>
      </div>
    </L5Frame>
  );
};

// --- 3. PYRAMIDING VISUAL ---
export const PyramidingVisual = () => {
  const [entries, setEntries] = useState<number[]>([1]); // Entry 1 is always active

  const toggleEntry = (idx: number) => {
    if (entries.includes(idx)) {
      if (idx === 1) return; // Cannot disable primary entry
      setEntries(entries.filter(e => e !== idx));
    } else {
      setEntries([...entries, idx].sort());
    }
  };

  // Calculate stats based on active entries
  const baseRisk = 1.0; // 1% per position
  const activeCount = entries.length;
  
  // Total exposure changes dynamically if stops trail
  // Entry 1 stop is trailed to Entry 2, Entry 2 stop is trailed to Entry 3, etc.
  const getExposure = () => {
    if (activeCount === 1) return { risk: "1.0%", target: "2.0% (2R)" };
    if (activeCount === 2) return { risk: "1.0% (Trailed)", target: "4.0% (Combined)" };
    return { risk: "0.5% (Trailed)", target: "6.0% (Combined)" };
  };

  const exposure = getExposure();

  return (
    <L5Frame 
      title="Scale In & Pyramiding Protocols" 
      id="PYRAMID-5.5"
      mentorText="Scaling into positions (pyramiding) expands profit potential during high-momentum trending phases. The critical rule: you can only add size if the stop loss of previous positions is trailed to protect initial capital risk limits."
      mentorAnalogy="Never pile more weight onto a weak bridge. Trailing your stops forms the concrete pillars that make adding size structurally safe."
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-2">
        {/* Left column: Diagram / Chart */}
        <div className="lg:col-span-7 bg-[#070B16] border border-[#16223F] rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#16223F_1px,transparent_1px),linear-gradient(to_bottom,#16223F_1px,transparent_1px)] bg-[length:40px_40px] opacity-15" />
          
          <div className="relative z-10 flex flex-col gap-4">
            {/* Entry 3 */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-2">
              <button 
                onClick={() => toggleEntry(3)}
                className={cn("px-2.5 py-1 rounded text-[10px] font-black uppercase border transition-all", 
                  entries.includes(3) 
                    ? "bg-emerald-950/30 text-emerald-400 border-emerald-800/40" 
                    : "bg-slate-900/40 text-slate-500 border-slate-800"
                )}
              >
                {entries.includes(3) ? "✓ Entry 3 Active (1/4 Size)" : "+ Add Entry 3 (at FVG 2)"}
              </button>
              <span className="text-[10px] font-mono text-slate-400">$1.1060</span>
            </div>

            {/* Entry 2 */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-2">
              <button 
                onClick={() => toggleEntry(2)}
                className={cn("px-2.5 py-1 rounded text-[10px] font-black uppercase border transition-all", 
                  entries.includes(2) 
                    ? "bg-emerald-950/30 text-emerald-400 border-emerald-800/40" 
                    : "bg-slate-900/40 text-slate-500 border-slate-800"
                )}
              >
                {entries.includes(2) ? "✓ Entry 2 Active (1/2 Size)" : "+ Add Entry 2 (at FVG 1)"}
              </button>
              <span className="text-[10px] font-mono text-slate-400">$1.1030</span>
            </div>

            {/* Entry 1 */}
            <div className="flex items-center justify-between border-t border-cyan-500/20 pt-2">
              <span className="px-2.5 py-1 bg-cyan-950/20 text-cyan-400 border border-cyan-800/20 rounded text-[10px] font-black uppercase">
                ✓ Primary Entry (Full Size)
              </span>
              <span className="text-[10px] font-mono text-slate-400">$1.1000</span>
            </div>

            {/* Trailed Stop Area */}
            <div className="bg-[#091522] border border-cyan-950/50 p-2.5 rounded-lg flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <Lock size={12} className="text-cyan-400" />
                <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider">Trailed Stop Location</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-300 font-bold">
                {activeCount === 1 ? "$1.0980 (Initial)" : activeCount === 2 ? "$1.1000 (BE for E1)" : "$1.1030 (Profits Locked)"}
              </span>
            </div>
          </div>
        </div>

        {/* Right column: Stats & Controls */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-slate-950/20 border border-[#16223F] p-4 rounded-xl flex flex-col gap-2">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Scale Positions</span>
            <span className="text-2xl font-black text-emerald-400">{activeCount} Positions</span>
            <p className="text-[10px] text-slate-400 leading-snug">
              Pyramiding splits exposure. Position additions must only occur once primary targets have matured and stop limits are trailing.
            </p>
          </div>

          <div className="bg-slate-950/20 border border-[#16223F] p-4 rounded-xl flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-[#16223F]">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Risk Exposure</span>
              <span className="text-xs font-black text-red-400 uppercase">{exposure.risk}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Projected Return</span>
              <span className="text-xs font-black text-emerald-400 uppercase">{exposure.target}</span>
            </div>
          </div>

          <div className="bg-slate-950/20 border border-[#16223F] p-3.5 rounded-xl text-left">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Pyramiding Checklist</span>
            <ul className="text-[10px] text-slate-300 flex flex-col gap-1.5 list-disc list-inside">
              <li>First position must be in profit (+1R or more).</li>
              <li>Trailed stop must move to lock E1 at Break-Even or Profit.</li>
              <li>Subsequent entries must form at key structural arrays (FVGs/OBs).</li>
            </ul>
          </div>
        </div>
      </div>
    </L5Frame>
  );
};

// --- 4. ASYMMETRIC GEAR SHIFT VISUAL ---
export const AsymmetricGearShiftVisual = () => {
  const [streak, setStreak] = useState(3);

  // Math simulation for a 6-trade losing streak
  // Initial capital = $10,000
  // Standard sizing = constant 1.0% risk per trade
  // Gear shift sizing = halves risk after 3 losses (1% -> 0.5% -> 0.25% -> 0.1%)
  const standardBalances = [10000, 9900, 9801, 9703, 9606, 9510, 9415];
  const gearShiftBalances = [10000, 9900, 9801, 9703, 9654, 9630, 9620];

  const standardLoss = 10000 - standardBalances[streak];
  const gearShiftLoss = 10000 - gearShiftBalances[streak];
  const savedAmount = standardLoss - gearShiftLoss;

  return (
    <L5Frame 
      title="The Asymmetric Gear Shift" 
      id="GEAR-SHIFT-5.9"
      mentorText="The Asymmetric Gear Shift is an institutional ruleset. When you suffer consecutive losses, your risk halves. This reduces the decay rate of your capital curve, keeping you alive until conditions align."
      mentorAnalogy="If a road becomes icy, you shift to a lower gear. You do not hit the accelerator. In drawdowns, shift your risk down immediately."
    >
      <div className="w-full flex flex-col gap-6 my-2">
        {/* Interactive Slider */}
        <div className="w-full bg-slate-950/40 border border-[#16223F] p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col text-left">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Simulate Losing Streak</span>
            <span className="text-sm font-black text-slate-200 mt-1">{streak} Consecutive Losses</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="6" 
            value={streak} 
            onChange={(e) => setStreak(parseInt(e.target.value))}
            className="w-full sm:max-w-xs accent-emerald-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Comparison Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card A: Standard Sizing */}
          <div className="bg-slate-950/20 border border-red-950/30 p-5 rounded-2xl flex flex-col text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-red-500/30" />
            <span className="text-[9px] font-black text-red-400 uppercase tracking-widest">Standard Flat 1% Risk</span>
            <span className="text-2xl font-black text-slate-100 mt-2">${standardBalances[streak].toFixed(0)}</span>
            <span className="text-xs font-bold text-red-400 mt-1">Total Loss: -${standardLoss.toFixed(0)}</span>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
              Capital decays linearly. Under standard sizing, a long streak of bad conditions rapidly erodes recovery capabilities.
            </p>
          </div>

          {/* Card B: Gear Shift Sizing */}
          <div className="bg-slate-950/20 border border-emerald-950/30 p-5 rounded-2xl flex flex-col text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500/30" />
            <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Asymmetric Gear Shift Risk</span>
            <span className="text-2xl font-black text-slate-100 mt-2">${gearShiftBalances[streak].toFixed(0)}</span>
            <span className="text-xs font-bold text-emerald-400 mt-1">Total Loss: -${gearShiftLoss.toFixed(0)}</span>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed font-bold text-emerald-300">
              Capital saved: +${savedAmount.toFixed(0)} ({((savedAmount/10000)*100).toFixed(1)}% of account protected).
            </p>
          </div>
        </div>

        {/* Gear Levels Table */}
        <div className="w-full bg-[#070B16] border border-[#16223F] rounded-xl overflow-hidden text-left">
          <div className="grid grid-cols-4 bg-slate-950/50 p-2.5 text-[9px] font-black uppercase text-slate-400 tracking-wider">
            <span>Loss Streak</span>
            <span>Gear Phase</span>
            <span>Suggested Risk %</span>
            <span>Multiplier</span>
          </div>
          <div className="flex flex-col text-[11px] font-mono divide-y divide-[#16223F]">
            <div className={cn("grid grid-cols-4 p-2.5", streak <= 2 ? "bg-emerald-950/10 text-emerald-300" : "text-slate-400")}>
              <span>0 - 2</span>
              <span>Gear 4 (Max)</span>
              <span>1.0%</span>
              <span>1.0x</span>
            </div>
            <div className={cn("grid grid-cols-4 p-2.5", streak === 3 ? "bg-orange-950/20 text-orange-300" : "text-slate-400")}>
              <span>3</span>
              <span>Gear 3 (Halved)</span>
              <span>0.5%</span>
              <span>0.5x</span>
            </div>
            <div className={cn("grid grid-cols-4 p-2.5", streak === 4 ? "bg-orange-950/20 text-orange-300" : "text-slate-400")}>
              <span>4</span>
              <span>Gear 2 (Quarter)</span>
              <span>0.25%</span>
              <span>0.25x</span>
            </div>
            <div className={cn("grid grid-cols-4 p-2.5", streak >= 5 ? "bg-red-950/20 text-red-300 font-bold" : "text-slate-400")}>
              <span>5+</span>
              <span>Gear 1 (Floor)</span>
              <span>0.1%</span>
              <span>0.1x</span>
            </div>
          </div>
        </div>
      </div>
    </L5Frame>
  );
};

// --- 5. CIRCUIT BREAKER VISUAL ---
export const CircuitBreakerVisual = () => {
  const [lossAmount, setLossAmount] = useState(150); // Daily loss in dollars ($)
  const dailyLimit = 300; // 3% of $10,000

  const limitReached = lossAmount >= dailyLimit;

  return (
    <L5Frame 
      title="Daily & Weekly Circuit Breakers" 
      id="CIRCUIT-5.10"
      mentorText="A circuit breaker is a hard-coded stop in your execution. If you lose 3% in a single day, the platform locks you out. Walking away is not a suggestion; it is a structural mechanism."
      mentorAnalogy="Grid systems use fuses to prevent power surges from frying circuits. Your daily loss limit is the fuse that prevents a bad trading day from frying your account."
    >
      <div className="w-full flex flex-col gap-6 my-2">
        {/* Dynamic Simulation Control */}
        <div className="w-full bg-slate-950/40 border border-[#16223F] p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col text-left">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Simulate Daily Loss</span>
            <span className={cn("text-sm font-black mt-1", limitReached ? "text-red-400 animate-pulse" : "text-slate-200")}>
              -${lossAmount} Lost Today
            </span>
          </div>
          <input 
            type="range" 
            min="50" 
            max="400" 
            step="50"
            value={lossAmount} 
            onChange={(e) => setLossAmount(parseInt(e.target.value))}
            className="w-full sm:max-w-xs accent-emerald-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* State Display Panel */}
        <div className="w-full bg-[#070B16] border border-[#16223F] rounded-2xl p-6 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden">
          {limitReached ? (
            <div className="absolute inset-0 bg-red-950/15 flex flex-col items-center justify-center p-6 text-center animate-fade-in relative z-10">
              <Lock size={40} className="text-red-500 mb-3 animate-bounce" />
              <h5 className="text-base font-black text-red-400 uppercase tracking-wider">Daily Circuit Breaker Tripped!</h5>
              <p className="text-xs text-slate-300 mt-2 max-w-sm">
                Max daily loss limit of **3% ($300)** reached. Order execution is locked. Close the terminal, journal the day, and walk away.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center p-4 relative z-10">
              <CheckCircle2 size={40} className="text-emerald-400 mb-3" />
              <h5 className="text-base font-black text-slate-200 uppercase tracking-wider">Terminal Operating Normals</h5>
              <p className="text-xs text-slate-400 mt-2 max-w-sm">
                Current loss: **{((lossAmount/10000)*100).toFixed(1)}%**. You have **${dailyLimit - lossAmount}** remaining before the circuit breaker trips.
              </p>
            </div>
          )}
          {/* Progress bar background */}
          <div className="w-full max-w-xs bg-slate-800 h-2 rounded-full overflow-hidden mt-4 relative z-10">
            <div 
              className={cn("h-full transition-all duration-300", limitReached ? "bg-red-500" : "bg-emerald-500")}
              style={{ width: `${Math.min(100, (lossAmount / dailyLimit) * 100)}%` }}
            />
          </div>
        </div>

        {/* Rules List */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950/20 border border-[#16223F] p-4 rounded-xl flex flex-col text-left">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Daily Circuit Breaker (3%)</span>
            <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
              If equity falls more than 3% from the daily open valuation, trading is locked. Preventative shield against tilt/panic.
            </p>
          </div>

          <div className="bg-slate-950/20 border border-[#16223F] p-4 rounded-xl flex flex-col text-left">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Weekly Circuit Breaker (6%)</span>
            <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
              If equity falls more than 6% in a week, pause account credentials. Force a system audit and a review of trade journal logs.
            </p>
          </div>
        </div>
      </div>
    </L5Frame>
  );
};

// --- 6. CORRELATION PORTFOLIO RISK VISUAL ---
export const CorrelationPortfolioRiskVisual = () => {
  const [selectedPairs, setSelectedPairs] = useState<string[]>(["EURUSD"]);

  const togglePair = (pair: string) => {
    if (selectedPairs.includes(pair)) {
      setSelectedPairs(selectedPairs.filter(p => p !== pair));
    } else {
      setSelectedPairs([...selectedPairs, pair]);
    }
  };

  // Simplified correlation values to highlight doubling exposure
  // EURUSD & GBPUSD are heavily positively correlated (~0.85)
  // EURUSD & USDCHF are heavily negatively correlated (~-0.90)
  // BTCUSD & ETHUSD are heavily positively correlated (~0.88)
  const checkCorrelationAlert = () => {
    if (selectedPairs.includes("EURUSD") && selectedPairs.includes("GBPUSD")) {
      return "HIGH CORRELATION: EUR/USD and GBP/USD move together. Opening risk on both effectively doubles your exposure.";
    }
    if (selectedPairs.includes("BTCUSD") && selectedPairs.includes("ETHUSD")) {
      return "HIGH CORRELATION: BTC and ETH have strong positive beta. Sizing must be adjusted to prevent duplicate exposure.";
    }
    return null;
  };

  const alertMsg = checkCorrelationAlert();
  const totalRisk = selectedPairs.length * 1.0; // Assume 1% risk per trade

  return (
    <L5Frame 
      title="Correlation & Portfolio Risk" 
      id="PORTFOLIO-5.13"
      mentorText="Opening trades on correlated assets (like EUR/USD and GBP/USD) does not diversify risk. It duplicates it. Total portfolio exposure must be calculated across the entire account."
      mentorAnalogy="If you buy properties in the same flood zone, you are not diversified. Ensure your trade clusters are mathematically independent."
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-2">
        {/* Left: Correlation Matrix */}
        <div className="lg:col-span-7 bg-[#070B16] border border-[#16223F] rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(#16223F_1px,transparent_1px)] bg-[length:15px_15px] opacity-20" />
          
          <div className="relative z-10 flex flex-col gap-4 text-left">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">Select Active Asset Exposure</span>
            
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => togglePair("EURUSD")}
                className={cn("p-3 rounded-xl border text-xs font-black uppercase text-left transition-all", 
                  selectedPairs.includes("EURUSD") 
                    ? "bg-emerald-950/30 text-emerald-400 border-emerald-500/40 shadow-lg" 
                    : "bg-slate-900/40 text-slate-400 border-[#16223F]"
                )}
              >
                EUR/USD (Forex)
              </button>

              <button 
                onClick={() => togglePair("GBPUSD")}
                className={cn("p-3 rounded-xl border text-xs font-black uppercase text-left transition-all", 
                  selectedPairs.includes("GBPUSD") 
                    ? "bg-emerald-950/30 text-emerald-400 border-emerald-500/40 shadow-lg" 
                    : "bg-slate-900/40 text-slate-400 border-[#16223F]"
                )}
              >
                GBP/USD (Forex)
              </button>

              <button 
                onClick={() => togglePair("BTCUSD")}
                className={cn("p-3 rounded-xl border text-xs font-black uppercase text-left transition-all", 
                  selectedPairs.includes("BTCUSD") 
                    ? "bg-emerald-950/30 text-emerald-400 border-emerald-500/40 shadow-lg" 
                    : "bg-slate-900/40 text-slate-400 border-[#16223F]"
                )}
              >
                BTC/USD (Crypto)
              </button>

              <button 
                onClick={() => togglePair("ETHUSD")}
                className={cn("p-3 rounded-xl border text-xs font-black uppercase text-left transition-all", 
                  selectedPairs.includes("ETHUSD") 
                    ? "bg-emerald-950/30 text-emerald-400 border-emerald-500/40 shadow-lg" 
                    : "bg-slate-900/40 text-slate-400 border-[#16223F]"
                )}
              >
                ETH/USD (Crypto)
              </button>
            </div>
          </div>
        </div>

        {/* Right: Portfolio Stats */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-slate-950/20 border border-[#16223F] p-4 rounded-xl flex flex-col text-left">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Trades</span>
            <span className="text-xl font-black text-slate-200 mt-1">{selectedPairs.length} Open Positions</span>
          </div>

          <div className="bg-[#0C1525] border border-emerald-950/30 p-4 rounded-xl flex flex-col text-left">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Cumulative Risk</span>
            <span className="text-2xl font-black text-emerald-400 mt-1">{totalRisk.toFixed(1)}% of Capital</span>
            <span className="text-[10px] text-slate-400 mt-1">Cap at max 3% aggregate exposure.</span>
          </div>

          {alertMsg && (
            <div className="bg-orange-950/20 border border-orange-800/40 p-4 rounded-xl text-left flex gap-2 items-start animate-pulse">
              <AlertTriangle size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-orange-400 uppercase tracking-wider">Correlation Warning</span>
                <p className="text-[10px] text-orange-300 leading-snug mt-0.5">{alertMsg}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </L5Frame>
  );
};
