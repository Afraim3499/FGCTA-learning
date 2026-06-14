"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  Circle,
  AlertTriangle,
  TrendingUp,
  Clock,
  BarChart2,
  Activity,
  Zap,
  Target,
  BookOpen,
  RotateCcw,
  DollarSign,
  Shield,
  ArrowRight,
  Brain,
  Sliders,
  Settings,
  LineChart,
  ShieldAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useMentorNote } from "../../lesson-workspace/MentorNoteContext";

// L8Frame — "Management & Review" slate/indigo terminal aesthetic (distinct from L7 amber)
const L8Frame = ({
  children,
  title,
  id,
  mentorText: defaultMentorText = "Mindset is not a fuzzy concept — it is a structured system. You must audit your cognitive state and strategy performance metrics with the same rigor you apply to entry charts.",
  mentorAnalogy: defaultMentorAnalogy = "A professional airline flight investigator reviews black-box data, checklists, and voice records after every flight to spot errors. Your trade journal and metrics database are your flight recorder.",
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
    <div className="w-full bg-[#090b14] border border-[#1e233d] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-2xl text-left min-h-[500px] text-white">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#272e50_1px,transparent_1px)] bg-[length:24px_24px] opacity-35" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-[#1e233d] pb-4 shrink-0">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 mb-1">
            <Brain size={12} className="text-indigo-400 animate-pulse" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Psychology & Review — Level 8</span>
          </div>
          <h4 className="text-sm font-black text-indigo-400 uppercase tracking-tight italic leading-tight">{title}</h4>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Audit Code</span>
            <span className="text-[10px] font-mono text-indigo-200 font-bold">{id}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0">
        {children}
      </div>

      {/* Mentor insight */}
      <div className="w-full mt-6 pt-5 border-t border-[#1e233d] flex flex-col gap-2 shrink-0 text-left relative z-10">
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 bg-indigo-950/40 text-indigo-400 text-[8px] font-black uppercase tracking-widest rounded-sm border border-indigo-800/20">
            Psychology & Metrics Coach
          </div>
          <div className="h-px flex-1 bg-[#1e233d]" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-200 leading-relaxed">{activeMentorText}</p>
            {activeMentorAnalogy && (
              <p className="mt-1.5 text-[11px] text-slate-400 italic leading-snug">
                <span className="font-black uppercase text-[9px] mr-2 text-indigo-400 not-italic">Review Analogy:</span>
                {activeMentorAnalogy}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. COGNITIVE BIAS MODELER
// ─────────────────────────────────────────────────────────────────────────────
export const CognitiveBiasModeler = () => {
  const [activeBias, setActiveBias] = useState<"recency" | "needRight" | "greed">("recency");

  const biases = {
    recency: {
      title: "Recency Bias Loop",
      desc: "The tendency to over-weight the outcomes of your most recent trades, projecting streaks into future execution.",
      effect: "Streak of 3 wins → Overconfidence → Position size doubled (Rule violation). Streak of 3 losses → Fear → Missed valid setup.",
      remedy: "Reset focus with the Five-Trade rule and lock in session risk limits beforehand.",
      color: "indigo",
    },
    needRight: {
      title: "The Need to be Right",
      desc: "Treating trading as a prediction engine instead of a probability distribution mechanism.",
      effect: "Price goes against setup → Refusing to cut loss at stop level → Account drawdown escalation.",
      remedy: "Reframe stop-loss hits as normal operating costs, identical to rent in a retail business.",
      color: "violet",
    },
    greed: {
      title: "FOMO & Greed Cycles",
      desc: "Entering late during parabolic market expansions out of fear of missing the move.",
      effect: "Price climbs rapidly → Immediate market buy at the top → Retracement triggers instant stop-out.",
      remedy: "Enforce the 'No Chasing' rule: only enter at pre-defined structural zones. Let the trade go if missed.",
      color: "rose",
    },
  };

  const current = biases[activeBias];

  return (
    <L8Frame
      title="Cognitive Bias Modeler"
      id="BIAS-MODEL-8.1"
      mentorText="Your mind searches for narrative order in a probabilistic environment. An error in psychology manifests as an execution error. Control the mind to protect the capital."
      mentorAnalogy="A casino doesn't panic when a player hits a winning streak on blackjack. They trust the long-term mathematical edge of the table. You must think like the house, not the player."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* Bias Selector */}
        <div className="flex w-full bg-slate-950/50 border border-[#1e233d] p-1 rounded-2xl gap-1">
          {(["recency", "needRight", "greed"] as const).map((b) => (
            <button
              key={b}
              onClick={() => setActiveBias(b)}
              className={cn(
                "flex-1 py-2 px-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all",
                activeBias === b
                  ? b === "recency"
                    ? "bg-indigo-500 text-slate-950 shadow-lg"
                    : b === "needRight"
                    ? "bg-violet-500 text-white shadow-lg"
                    : "bg-rose-500 text-slate-950 shadow-lg"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              {b === "recency" ? "Recency Bias" : b === "needRight" ? "Need To Be Right" : "FOMO / Greed"}
            </button>
          ))}
        </div>

        {/* Display Card */}
        <div className="bg-[#0b0e1e] border border-[#1e233d] rounded-2xl p-5 w-full flex flex-col gap-3">
          <div>
            <h5 className="text-sm font-black text-indigo-400 uppercase tracking-tight">{current.title}</h5>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">{current.desc}</p>
          </div>
          <div className="border-t border-[#1e233d]/60 pt-3">
            <span className="text-[8px] font-black text-red-400 uppercase tracking-widest flex items-center gap-1">
              <AlertTriangle size={10} /> Live Market Execution Impact
            </span>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed font-medium">{current.effect}</p>
          </div>
          <div className="border-t border-[#1e233d]/60 pt-3">
            <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1">
              <CheckCircle2 size={10} /> Systematic OS Remedy
            </span>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed font-semibold">{current.remedy}</p>
          </div>
        </div>
      </div>
    </L8Frame>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. PERFORMANCE METRICS DASHBOARD
// ─────────────────────────────────────────────────────────────────────────────
export const PerformanceMetricsDashboard = () => {
  const [winRate, setWinRate] = useState<number>(45);
  const [avgRMultiple, setAvgRMultiple] = useState<number>(2.5);
  const totalTrades = 100;

  // Expectancy calculation: (Win Rate * Avg Win R) - (Loss Rate * 1)
  const lossRate = 100 - winRate;
  const winFraction = winRate / 100;
  const lossFraction = lossRate / 100;
  const expectancy = (winFraction * avgRMultiple - lossFraction).toFixed(2);
  const expectancyColor = parseFloat(expectancy) > 0.5 ? "text-emerald-400" : parseFloat(expectancy) > 0 ? "text-amber-400" : "text-red-400";

  // Profit Factor estimation
  const totalWins = winFraction * totalTrades * avgRMultiple;
  const totalLosses = lossFraction * totalTrades;
  const profitFactor = totalLosses > 0 ? (totalWins / totalLosses).toFixed(2) : "9.99";

  return (
    <L8Frame
      title="Performance Metrics & Expectancy Simulator"
      id="METRICS-DASH-8.8"
      mentorText="A strategy's edge is defined by its expectancy formula. A lower win rate is mathematically superior if the average R-multiple is high. Remove the emotion by running the statistics."
      mentorAnalogy="An insurance actuary does not care if one specific driver crashes. They only care about the probability distribution of crashes across 10,000 drivers. Act like the actuary, not the driver."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* Sliders Panel */}
        <div className="bg-[#0b0e1e] border border-[#1e233d] p-4 rounded-2xl flex flex-col gap-3">
          {/* Win Rate Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[11px] font-bold">
              <span className="text-slate-400">Win Rate: {winRate}%</span>
              <span className="text-slate-500">Loss Rate: {100 - winRate}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="80"
              value={winRate}
              onChange={(e) => setWinRate(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* Average R-Multiple Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[11px] font-bold">
              <span className="text-slate-400">Avg Risk Reward (R-Multiple): {avgRMultiple}R</span>
              <span className="text-slate-500">Average Risk: 1R</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={avgRMultiple}
              onChange={(e) => setAvgRMultiple(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>
        </div>

        {/* Dashboard KPIs */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#0b0e1e] border border-[#1e233d] rounded-xl p-3 text-center">
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Expectancy</div>
            <div className={cn("text-sm font-black font-mono", expectancyColor)}>+{expectancy}R</div>
          </div>
          <div className="bg-[#0b0e1e] border border-[#1e233d] rounded-xl p-3 text-center">
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Profit Factor</div>
            <div className="text-sm font-black font-mono text-indigo-300">{profitFactor}</div>
          </div>
          <div className="bg-[#0b0e1e] border border-[#1e233d] rounded-xl p-3 text-center">
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</div>
            <div className="text-sm font-black text-slate-300 uppercase text-[10px]">
              {parseFloat(expectancy) > 0 ? "VALID EDGE" : "NO EDGE"}
            </div>
          </div>
        </div>

        {/* Briefing summary */}
        <div className="bg-slate-950/40 border border-[#1e233d] p-3 rounded-xl">
          <p className="text-[10px] leading-relaxed text-slate-400 text-left">
            An expectancy of <span className="font-bold text-slate-200">+{expectancy}R</span> means that for every trade executed with this strategy, you mathematically expect to earn <span className="font-bold text-slate-200">{(parseFloat(expectancy) * 1).toFixed(2)}%</span> of your capital (at a strict 1% risk per trade) over a large sample size of trades.
          </p>
        </div>
      </div>
    </L8Frame>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. MASTER TRADING PLAN BUILDER
// ─────────────────────────────────────────────────────────────────────────────
export const MasterTradingPlanBuilder = () => {
  const [selectedAsset, setSelectedAsset] = useState<"forex" | "gold" | "crypto">("forex");
  const [riskLimit, setRiskLimit] = useState<string>("1%");
  const [maxDrawdown, setMaxDrawdown] = useState<string>("5%");

  const assetDetails = {
    forex: {
      pairs: "EURUSD, GBPUSD, USDJPY",
      sessions: "London Open & NY Open overlap only",
      news: "Flat before CPI, NFP, and FOMC releases",
    },
    gold: {
      pairs: "XAUUSD (Gold spot only)",
      sessions: "COMEX Open and NY fixing windows",
      news: "Adjust risk limits during US treasury auctions",
    },
    crypto: {
      pairs: "BTCUSDT, ETHUSDT (Isolated margin perp)",
      sessions: "Funding rate settlement periods only",
      news: "De-leverage during exchange liquidation sweeps",
    },
  };

  const currentAsset = assetDetails[selectedAsset];

  return (
    <L8Frame
      title="Master Trading Plan Builder"
      id="PLAN-BUILD-8.10"
      mentorText="A trading plan is not a wish list — it is a legal contract with your capital. It specifies what you are allowed to trade, when you may trade, and what drawdown triggers a halt."
      mentorAnalogy="An architect designs a building plan with exact load-bearing weights. If they exceed the weight limits, the building collapses. Your plan governs the structural limits of your capital."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* Selector Header */}
        <div className="flex w-full bg-slate-950/50 border border-[#1e233d] p-1 rounded-xl gap-1">
          {(["forex", "gold", "crypto"] as const).map((a) => (
            <button
              key={a}
              onClick={() => setSelectedAsset(a)}
              className={cn(
                "flex-1 py-1 px-2.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                selectedAsset === a ? "bg-indigo-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
              )}
            >
              {a.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Input Panel */}
        <div className="bg-[#0b0e1e] border border-[#1e233d] rounded-2xl p-4 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[#1e233d]/60">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Risk Limit / Trade</span>
              <select
                value={riskLimit}
                onChange={(e) => setRiskLimit(e.target.value)}
                className="bg-slate-950 border border-[#1e233d] text-xs font-bold text-indigo-300 rounded px-2 py-1 outline-none"
              >
                <option value="0.5%">0.5% (Conservative)</option>
                <option value="1%">1% (Standard)</option>
                <option value="2%">2% (Max Limit)</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 text-left">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Session Max Drawdown</span>
              <select
                value={maxDrawdown}
                onChange={(e) => setMaxDrawdown(e.target.value)}
                className="bg-slate-950 border border-[#1e233d] text-xs font-bold text-indigo-300 rounded px-2 py-1 outline-none"
              >
                <option value="3%">3% (Conservative)</option>
                <option value="5%">5% (Standard)</option>
                <option value="10%">10% (High Risk)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-3 font-mono text-[10px]">
            <div className="flex justify-between">
              <span className="text-slate-500">Asset List:</span>
              <span className="text-slate-200 text-right">{currentAsset.pairs}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Execution Window:</span>
              <span className="text-slate-200 text-right">{currentAsset.sessions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">News Protocol:</span>
              <span className="text-slate-200 text-right">{currentAsset.news}</span>
            </div>
          </div>
        </div>
      </div>
    </L8Frame>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. PLACEHOLDER
// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// 4. INTERACTIVE LEVEL 8 COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

export const DrawdownRecoveryModel = () => {
  const [drawdown, setDrawdown] = useState<number>(30); // 30% default

  // Math: recovery = drawdown / (100 - drawdown) * 100
  const recovery = (drawdown / (100 - drawdown)) * 100;

  // Streak required to recover:
  // assuming average risk is 1%, and average win is 2R
  // Recovery trades = (recovery%) / 2
  const tradesNeeded = Math.ceil(recovery / 2);

  // Warning level
  let status = "Safe Bounds";
  let statusColor = "text-emerald-400 border-emerald-950 bg-emerald-950/20";
  if (drawdown > 15 && drawdown <= 30) {
    status = "Restructure Risk";
    statusColor = "text-amber-400 border-amber-950 bg-amber-950/20";
  } else if (drawdown > 30 && drawdown <= 50) {
    status = "Tilt Warning";
    statusColor = "text-red-400 border-red-950 bg-red-950/20";
  } else if (drawdown > 50) {
    status = "Ruin Hazard";
    statusColor = "text-red-500 border-red-950 bg-red-950/40 animate-pulse";
  }

  return (
    <L8Frame
      title="Asymmetric Drawdown Recovery Curve"
      id="RECOVER-8.9"
      mentorText="Drawdowns are mathematically non-linear. A 10% loss requires an 11% recovery, but a 50% loss requires a 100% gain, and an 80% loss requires a 400% gain to break even. Slay drawdowns early."
      mentorAnalogy="If you dig a hole in loose sand, the deeper you go, the more the walls collapse back in. Digging past your knees creates a hazard that requires heavy machinery to escape."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left font-sans">
        {/* Slider */}
        <div className="bg-slate-950/40 border border-[#1e233d] p-3.5 rounded-xl flex flex-col gap-2">
          <div className="flex justify-between text-xs font-bold font-mono">
            <span className="text-slate-400">Account Drawdown Level:</span>
            <span className="text-red-400">-{drawdown}%</span>
          </div>
          <input
            type="range"
            min="5"
            max="90"
            step="5"
            value={drawdown}
            onChange={(e) => setDrawdown(Number(e.target.value))}
            className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          <div className="md:col-span-8 bg-[#0b0e1e] border border-[#1e233d] p-4 rounded-xl flex flex-col justify-between gap-3">
            <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-wider border-b border-[#1e233d] pb-1.5">Drawdown Math Ledger</h5>
            <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-400">
              <div className="flex justify-between">
                <span>Required Recovery Gain:</span>
                <span className="text-amber-400 font-bold">+{recovery.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated 2R Wins Needed:</span>
                <span className="text-slate-200">{tradesNeeded} consecutive wins</span>
              </div>
              <div className="flex justify-between">
                <span>Account Collateral Left:</span>
                <span>{100 - drawdown}%</span>
              </div>
            </div>
          </div>

          <div className={cn("md:col-span-4 border rounded-xl p-4 flex flex-col items-center justify-center text-center", statusColor)}>
            <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Account Status</span>
            <span className="text-xs font-black font-mono my-2 uppercase">{status}</span>
            <span className="text-[8px] font-bold uppercase tracking-wider">
              {drawdown > 50 ? "Stop Trading Immediately" : drawdown > 20 ? "Halve Position Size" : "Normal Risk"}
            </span>
          </div>
        </div>

        {/* SVG Curve Plotter */}
        <div className="bg-[#0b0e1e] border border-[#1e233d] rounded-xl p-4 h-32 relative overflow-hidden flex flex-col justify-between">
          <span className="text-[8px] font-mono text-slate-500 uppercase">Recovery Effort Exponential Curve</span>
          <div className="absolute inset-0 flex items-center justify-center p-4 mt-6">
            <svg className="w-full h-full" viewBox="0 0 100 25">
              {/* Grid axes */}
              <line x1="10" y1="2" x2="10" y2="22" stroke="#1e233d" strokeWidth="0.5" />
              <line x1="10" y1="22" x2="95" y2="22" stroke="#1e233d" strokeWidth="0.5" />
              
              {/* Exponential line */}
              <path 
                d="M 10 22 Q 40 21 65 18 T 90 2" 
                fill="none" 
                stroke="#6366f1" 
                strokeWidth="1.5" 
              />

              {/* Current Position Marker */}
              {(() => {
                const cx = 10 + (drawdown / 90) * 80;
                const cy = Math.max(2, 22 - (recovery / 900) * 20);
                return (
                  <circle cx={cx} cy={cy} r="1.5" fill="#f43f5e" className="animate-pulse" />
                );
              })()}
            </svg>
          </div>
        </div>
      </div>
    </L8Frame>
  );
};

export const FocusSessionMonitor = () => {
  const [hours, setHours] = useState<number>(2); // 2 hours default
  const [breaks, setBreaks] = useState<number>(0);

  const focusLevel = Math.max(15, Math.round(100 - (hours - 1) * 12 + breaks * 15));
  const errorRate = Math.min(95, Math.round(2 + (hours - 1) * 10 - breaks * 12));
  
  let grade = "A";
  let color = "text-emerald-400";
  if (focusLevel < 40) {
    grade = "F";
    color = "text-red-500";
  } else if (focusLevel < 60) {
    grade = "D";
    color = "text-red-400";
  } else if (focusLevel < 80) {
    grade = "C";
    color = "text-amber-400";
  } else if (focusLevel < 90) {
    grade = "B";
    color = "text-indigo-300";
  }

  const takeBreak = () => {
    setBreaks(prev => prev + 1);
    setHours(prev => Math.max(1, prev - 1));
  };

  return (
    <L8Frame
      title="Attention Fatigue & Focus Monitor"
      id="FATIGUE-8.5"
      mentorText="Attention is a finite fuel pool. After 2 hours of continuous screen monitoring, decision quality drops off a cliff. Restricting session hours and taking structural breaks prevents impulsive execution."
      mentorAnalogy="A long-haul truck driver must pull over every few hours by law. Your brain is that vehicle. Avoid driving into fatigue fog."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left font-sans">
        {/* Controls */}
        <div className="bg-slate-950/40 border border-[#1e233d] p-3.5 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex-1 w-full">
            <div className="flex justify-between text-xs font-bold font-mono mb-1.5">
              <span className="text-slate-400">Continuous Screen Hours:</span>
              <span className="text-indigo-400">{hours} Hours</span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>
          <button
            onClick={takeBreak}
            className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase rounded-lg transition-all"
          >
            Take 15m Break
          </button>
        </div>

        {/* Output metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-[#0b0e1e] border border-[#1e233d] rounded-xl p-4 text-center">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">Attention Pool</span>
            <span className={cn("text-xl font-mono font-black", color)}>{focusLevel}%</span>
          </div>

          <div className="bg-[#0b0e1e] border border-[#1e233d] rounded-xl p-4 text-center">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">Projected Decision Error</span>
            <span className="text-xl font-mono font-black text-slate-200">{errorRate}%</span>
          </div>

          <div className="bg-[#0b0e1e] border border-[#1e233d] rounded-xl p-4 text-center">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">Execution Quality</span>
            <span className={cn("text-xl font-mono font-black", color)}>{grade}</span>
          </div>
        </div>

        {focusLevel < 50 && (
          <div className="p-3 bg-red-950/20 border border-red-500/20 rounded-xl text-[10px] text-red-400 leading-relaxed font-mono flex gap-2">
            <AlertTriangle size={12} className="shrink-0 mt-0.5 text-red-400 animate-pulse" />
            <span>
              <strong>🚨 FATIGUE GATE BREACHED:</strong> Your focus pool is exhausted. Decisions made in this state are highly impulsive (e.g. FOMO chasing, trailing stops too tight). Close the terminal and stand flat.
            </span>
          </div>
        )}
      </div>
    </L8Frame>
  );
};

export const TradeJournalMockup = () => {
  const [setup, setSetup] = useState<string>("ob");
  const [emotion, setEmotion] = useState<string>("calm");
  const [outcome, setOutcome] = useState<string>("win");
  const [logged, setLogged] = useState<boolean>(false);

  const calculateCorrelation = () => {
    if (emotion === "calm" && setup === "ob") {
      return "✓ HIGH PROBABILITY OUTCOME: Process alignment is clear. Win rate expectation: +62% based on historical confluences.";
    } else if (emotion === "fomo" || emotion === "anxious") {
      return "⚠️ RISK WARNING: Trading while anxious or experiencing FOMO leads to an execution error correlation of 72%. Expectancy is negative.";
    } else {
      return "✓ MODERATE OUTCOME: Adhering to setups prevents heavy losses, but emotional drift should be monitored.";
    }
  };

  return (
    <L8Frame
      title="Interactive Trade Journal Sheet"
      id="JOURNAL-8.6"
      mentorText="Log process, not profit. The journal is a behavior checklist: Was the entry planned? What was the psychological state? If you only record the PnL, you are ignoring the root causes of performance."
      mentorAnalogy="A sports scientist logs the athlete's heart rate, sleep quality, and warm-up routine before looking at race times. Your emotional tags are those vitals."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left font-sans">
        {/* Fields Panel */}
        <div className="bg-slate-950/40 border border-[#1e233d] p-4 rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Select Setup Trigger:</span>
            <select
              value={setup}
              onChange={(e) => { setSetup(e.target.value); setLogged(false); }}
              className="bg-slate-950 border border-[#1e233d] text-xs font-bold text-indigo-300 rounded p-2 outline-none"
            >
              <option value="ob">Order Block Retest</option>
              <option value="sweep">Liquidity Sweep</option>
              <option value="chase">Market Breakout Chase</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Emotional State:</span>
            <select
              value={emotion}
              onChange={(e) => { setEmotion(e.target.value); setLogged(false); }}
              className="bg-slate-950 border border-[#1e233d] text-xs font-bold text-indigo-300 rounded p-2 outline-none"
            >
              <option value="calm">Calm & Process-Focused</option>
              <option value="fomo">FOMO / Chasing Price</option>
              <option value="anxious">Anxious / Fear of Loss</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">PnL Result:</span>
            <select
              value={outcome}
              onChange={(e) => { setOutcome(e.target.value); setLogged(false); }}
              className="bg-slate-950 border border-[#1e233d] text-xs font-bold text-indigo-300 rounded p-2 outline-none"
            >
              <option value="win">Win (+2R)</option>
              <option value="loss">Loss (-1R)</option>
              <option value="be">Break-Even (0R)</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={() => setLogged(true)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase rounded-lg transition-all"
          >
            Log Journal Entry
          </button>
          {logged && (
            <span className="text-[10px] font-mono text-emerald-400 font-bold">✓ Entry Saved to DB</span>
          )}
        </div>

        {/* Result analysis */}
        {logged && (
          <div className="p-3 bg-[#0b0e1e] border border-[#1e233d] rounded-xl text-[10px] font-mono leading-relaxed text-slate-300">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Friction & Behavior Correlation</span>
            {calculateCorrelation()}
          </div>
        )}
      </div>
    </L8Frame>
  );
};

export const MetricDatabaseGrid = () => {
  const [filter, setFilter] = useState<"all" | "fx" | "gold">("all");

  const mockDatabase = [
    { id: 245, date: "06-11", asset: "EURUSD", setup: "OB Retest", pnl: "+2.0R", status: "ok", emotion: "Calm" },
    { id: 246, date: "06-12", asset: "GBPUSD", setup: "Sweep high", pnl: "-1.0R", status: "ok", emotion: "Calm" },
    { id: 247, date: "06-12", asset: "XAUUSD", setup: "Slippage Chase", pnl: "-1.0R", status: "error", emotion: "FOMO" },
    { id: 248, date: "06-13", asset: "EURUSD", setup: "OB Retest", pnl: "+2.0R", status: "ok", emotion: "Calm" },
    { id: 249, date: "06-13", asset: "XAUUSD", setup: "London Fixing", pnl: "+1.5R", status: "ok", emotion: "Calm" }
  ];

  const filteredData = mockDatabase.filter(d => {
    if (filter === "all") return true;
    if (filter === "fx") return d.asset !== "XAUUSD";
    return d.asset === "XAUUSD";
  });

  return (
    <L8Frame
      title="Performance Metrics Database"
      id="DATA-8.7"
      mentorText="A database of setups reveals the truth. By filtering your performance by asset class and execution status, you immediately expose strategy drift and uncover hidden structural costs."
      mentorAnalogy="A manufacturing facility reviews failure logs on components monthly. If one machine is overheating, they fix the machine. Your database is that log sheet."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left font-sans">
        {/* Filters */}
        <div className="flex w-full bg-slate-950/50 border border-[#1e233d] p-1 rounded-xl gap-1">
          {(["all", "fx", "gold"] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn("flex-1 py-1 rounded text-[9px] font-black uppercase tracking-wider transition-all",
                filter === f ? "bg-indigo-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
              )}
            >
              {f === "all" ? "Show All" : f === "fx" ? "Forex Only" : "Gold Only"}
            </button>
          ))}
        </div>

        {/* Data Grid */}
        <div className="bg-[#0b0e1e] border border-[#1e233d] rounded-xl overflow-hidden font-mono text-[10px]">
          <div className="bg-slate-950 p-2 border-b border-[#1e233d] flex justify-between text-slate-500 font-bold uppercase tracking-wider">
            <span className="w-10">ID</span>
            <span className="w-12">Asset</span>
            <span className="w-20">Setup</span>
            <span className="w-12">Result</span>
            <span className="w-12">Emotion</span>
          </div>
          {filteredData.map(d => (
            <div key={d.id} className="p-2 border-b border-[#1e233d]/60 last:border-0 flex justify-between items-center text-slate-300">
              <span className="w-10 text-slate-500">#{d.id}</span>
              <span className="w-12 font-bold">{d.asset}</span>
              <span className="w-20">{d.setup}</span>
              <span className={cn("w-12 font-bold", d.pnl.startsWith("+") ? "text-emerald-400" : "text-red-400")}>
                {d.pnl}
              </span>
              <span className={cn("w-12 text-[9px] font-black uppercase", d.emotion === "Calm" ? "text-emerald-500" : "text-amber-500")}>
                {d.emotion}
              </span>
            </div>
          ))}
        </div>
      </div>
    </L8Frame>
  );
};

export const StrategyAuditSampler = () => {
  const [activeTrade, setActiveTrade] = useState<number>(0);
  const [checks, setChecks] = useState<boolean[]>([false, false, false]);
  const [audited, setAudited] = useState<boolean>(false);

  const trades = [
    {
      id: 1,
      title: "Trade #1: EURUSD Long",
      details: "Price returned to 15m order block. DXY was bearish. Risk sized at 1.0% with stop placed at structural low.",
      correct: true,
      reason: "✓ Strategy Compliant: Proper alignment, entry execution, and risk sizing."
    },
    {
      id: 2,
      title: "Trade #2: GBPUSD Long",
      details: "Chased breakout at the session high without waiting for retest. Sized risk at 2.5% to recover previous losses.",
      correct: false,
      reason: "❌ STRATEGY DRIFT: Chased price and oversized risk. This is a severe discipline violation."
    }
  ];

  const handleCheck = (idx: number) => {
    const newChecks = [...checks];
    newChecks[idx] = !newChecks[idx];
    setChecks(newChecks);
    setAudited(false);
  };

  const current = trades[activeTrade];

  return (
    <L8Frame
      title="Strategy Consistency Auditor"
      id="AUDIT-8.11"
      mentorText="Consistency is not luck. It is compliance. When auditing completed trades, you must verify structural checklist markers to spot strategy drift before it erodes your capital."
      mentorAnalogy="An FAA airline inspector checks engine log sheets for maintenance drift. They don't wait for engine failure to issue a warning."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left font-sans">
        {/* Toggle Trades */}
        <div className="flex w-full bg-slate-950/50 border border-[#1e233d] p-1 rounded-xl gap-1">
          {trades.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => { setActiveTrade(idx); setChecks([false, false, false]); setAudited(false); }}
              className={cn("flex-1 py-1 rounded text-[9px] font-black uppercase tracking-wider transition-all",
                activeTrade === idx ? "bg-indigo-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
              )}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Trade Details */}
        <div className="bg-[#0b0e1e] border border-[#1e233d] p-4 rounded-xl font-mono text-[10px] text-slate-300 leading-relaxed">
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Trade Parameters</span>
          {current.details}
        </div>

        {/* Checklist */}
        <div className="bg-slate-950/40 border border-[#1e233d] p-4 rounded-xl flex flex-col gap-2.5">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Verify Audit Criteria:</span>
          {[
            "1. Was higher timeframe bias verified?",
            "2. Was entry executed at planned zone?",
            "3. Was risk sizing kept within 1% limits?"
          ].map((label, idx) => (
            <label key={idx} className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={checks[idx]}
                onChange={() => handleCheck(idx)}
                className="mt-0.5 rounded border-[#1e233d] text-indigo-500 focus:ring-0 outline-none cursor-pointer"
              />
              <span className={cn("text-[10px] font-medium leading-relaxed", checks[idx] ? "text-slate-300" : "text-slate-500")}>
                {label}
              </span>
            </label>
          ))}
        </div>

        {/* Audit Button */}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setAudited(true)}
            disabled={!checks.every(c => c)}
            className={cn("px-3 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all border",
              checks.every(c => c) ? "bg-indigo-600 border-indigo-700 text-white" : "bg-slate-900/20 border-slate-800 text-slate-600 cursor-not-allowed"
            )}
          >
            Run Audit Check
          </button>
          {audited && (
            <span className={cn("text-[10px] font-mono font-bold leading-normal", current.correct ? "text-emerald-400" : "text-red-400")}>
              {current.reason}
            </span>
          )}
        </div>
      </div>
    </L8Frame>
  );
};

export const GoldMetricDashboard = () => {
  const [session, setSession] = useState<"comex" | "off">("comex");

  const spread = session === "comex" ? "$0.30/oz" : "$0.85/oz";
  const slippage = session === "comex" ? "$0.10/oz" : "$1.20/oz";
  const status = session === "comex" ? "Highly Aligned" : "Dangerous / Thin Liquidity";
  const statusColor = session === "comex" ? "text-emerald-400" : "text-red-400";

  return (
    <L8Frame
      title="Gold-Specific Performance Monitor"
      id="GOLD-METRIC-8.12"
      mentorText="Gold spot (XAU/USD) does not behave like currency pairs. It has extreme session-based liquidity fragmentation. Trading outside the COMEX hours overlaps is paying a high transaction tax."
      mentorAnalogy="If you land an aircraft during a crosswind storm at night, you face higher risks than landing during clear daylight hours. COMEX hours are your daylight."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left font-sans">
        {/* Toggle */}
        <div className="flex w-full bg-slate-950/50 border border-[#1e233d] p-1 rounded-xl gap-1">
          <button
            onClick={() => setSession("comex")}
            className={cn("flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
              session === "comex" ? "bg-indigo-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
            )}
          >
            COMEX Open Session (13:20-18:30 GMT)
          </button>
          <button
            onClick={() => setSession("off")}
            className={cn("flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
              session === "off" ? "bg-indigo-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
            )}
          >
            Asian Session Off-Hours
          </button>
        </div>

        {/* Stats Grid */}
        <div className="bg-[#0b0e1e] border border-[#1e233d] p-5 rounded-2xl flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-[#1e233d] pb-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase">XAU/USD Liquidity Audit</span>
            <span className={cn("text-[9px] font-black uppercase", statusColor)}>{status}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[11px] text-slate-300">
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Average Spot Spread:</span>
              <span className="text-sm font-bold text-slate-200">{spread}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Average Slippage:</span>
              <span className="text-sm font-bold text-slate-200">{slippage}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Transaction Cost:</span>
              <span className="text-sm font-bold text-slate-200">{session === "comex" ? "Low (~0.1R)" : "High (~0.4R)"}</span>
            </div>
          </div>
        </div>
      </div>
    </L8Frame>
  );
};

export const CryptoMetricDashboard = () => {
  const [leverage, setLeverage] = useState<number>(10);
  const [fundingRate, setFundingRate] = useState<number>(0.03); // % per 8h
  const [days, setDays] = useState<number>(3);

  // Math
  const feePercent = fundingRate * 3 * days * leverage;
  const isBleeding = feePercent > 10;

  return (
    <L8Frame
      title="Crypto Funding & Margin Bleed Dashboard"
      id="CRYP-METRIC-8.13"
      mentorText="Cryptocurrency perp contracts are derivative agreements. If you hold a long swing position when funding rates are positive, you pay capital to short-holders. This funding rate drag will decay your equity curves."
      mentorAnalogy="If you borrow library books and keep them past the due date, you pay cumulative fines daily. Perpetual funding is that fine."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left font-sans">
        {/* Sliders */}
        <div className="bg-slate-950/40 border border-[#1e233d] p-4 rounded-xl flex flex-col gap-3">
          <div className="flex justify-between text-[10px] font-bold font-mono">
            <span className="text-slate-400">Leverage: {leverage}x</span>
            <span className="text-slate-400">Days: {days}</span>
            <span className="text-slate-400">8H Funding: {fundingRate.toFixed(2)}%</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <input
              type="range"
              min="1"
              max="25"
              value={leverage}
              onChange={(e) => setLeverage(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-900 rounded h-1 cursor-pointer"
            />
            <input
              type="range"
              min="1"
              max="10"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-900 rounded h-1 cursor-pointer"
            />
            <input
              type="range"
              min="0.01"
              max="0.08"
              step="0.01"
              value={fundingRate}
              onChange={(e) => setFundingRate(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-900 rounded h-1 cursor-pointer"
            />
          </div>
        </div>

        {/* Output */}
        <div className="bg-[#0b0e1e] border border-[#1e233d] p-5 rounded-2xl flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-[#1e233d] pb-2 font-mono text-[10px]">
            <span className="text-slate-500 uppercase">Capital Bleed Calculations</span>
            <span className={cn("font-bold uppercase", isBleeding ? "text-red-400 animate-pulse" : "text-emerald-400")}>
              {isBleeding ? "High Bleed Risk" : "Acceptable Bleed"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 font-mono text-[11px] text-slate-300">
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Total Funding Paid:</span>
              <span className="text-sm font-bold text-slate-200">{feePercent.toFixed(2)}% of margin</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Equity Decay Factor:</span>
              <span className="text-sm font-bold text-amber-400">{(feePercent * 0.1).toFixed(2)}R drag</span>
            </div>
          </div>
        </div>
      </div>
    </L8Frame>
  );
};

export const CognitiveHabitStack = () => {
  const [step, setStep] = useState<number>(0);
  
  const routineSteps = [
    {
      title: "1. Pre-Market Deep Breathing & Intention Lock",
      rule: "Sit flat, take 10 deep breaths, and consciously accept the 1% risk limit. Accept that the setup outcome is a probability statistic."
    },
    {
      title: "2. Confirm News Window & Economic Events",
      rule: "Audit CPI, NFP, and FOMC schedules. Set hard cancel rules on limit orders approaching news release zones."
    },
    {
      title: "3. Identify Decision Gates & Alternative Paths",
      rule: "Draw the primary trajectory on chart anchors. Define the exact boundary where the setup is invalidated."
    },
    {
      title: "4. Lock Stop-Loss Sizing Constraints",
      rule: "Calculate standard lots matching entry-stop distances. Verify face exposure is under 15x account equity."
    }
  ];

  return (
    <L8Frame
      title="Cognitive Prep Habit Stack"
      id="HABIT-8.14"
      mentorText="A habit stack is a procedural lock. By executing checklists in the exact same sequence before opening charts, you disconnect the emotional engine and activate the rational executive network."
      mentorAnalogy="An operating surgeon scrubs their hands, checks tool counts, and audits patient records in the exact same sequence before starting. The order is not flexible."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left font-sans">
        {/* Step Cards */}
        <div className="bg-[#0b0e1e] border border-[#1e233d] p-5 rounded-2xl flex flex-col justify-between min-h-[160px]">
          <div>
            <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block mb-1">
              Active Routine Step
            </span>
            <h5 className="text-sm font-black text-slate-200 mt-1 uppercase tracking-tight">
              {routineSteps[step].title}
            </h5>
            <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
              {routineSteps[step].rule}
            </p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-[#1e233d]/60 mt-4">
            <span className="text-[9px] font-mono text-slate-500">Step {step + 1} of 4</span>
            <div className="flex gap-2">
              <button
                onClick={() => setStep(prev => Math.max(0, prev - 1))}
                disabled={step === 0}
                className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-slate-400 text-[10px] font-black uppercase rounded border border-[#1e233d]"
              >
                Back
              </button>
              <button
                onClick={() => setStep(prev => Math.min(3, prev + 1))}
                disabled={step === 3}
                className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 text-white text-[10px] font-black uppercase rounded"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </L8Frame>
  );
};

export const Level8GeneralMonitor = ({ visualKey }: { visualKey?: string }) => {
  return (
    <L8Frame title="Institutional Review — Live Monitor" id="REVIEW-MONITOR">
      <div className="w-full bg-slate-950/40 border border-[#1e233d] p-5 rounded-2xl flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-[#1e233d] pb-2">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Activity size={12} className="text-indigo-400 animate-pulse" />
            Audit System Live
          </span>
          <span className="text-[10px] font-mono text-indigo-400">DATABASE STATUS</span>
        </div>
        <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-300">
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Trade Journal Log...</span>
            <span className="text-emerald-400">SYNCED</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Performance Database...</span>
            <span className="text-emerald-400">100% OK</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Cognitive Bias Audits...</span>
            <span className="text-indigo-400">3 ACTIVE</span>
          </div>
          <div className="flex justify-between font-bold text-indigo-400">
            <span className="text-slate-500">&gt; Active VisualKey:</span>
            <span>{visualKey || "GENERAL"}</span>
          </div>
        </div>
      </div>
    </L8Frame>
  );
};

export const Level8PlaceholderVisual = ({ visualKey, ...props }: { visualKey?: string }) => {
  switch (visualKey) {
    case "drawdown-recovery-model":
      return <DrawdownRecoveryModel {...props} />;
    case "focus-session-monitor":
      return <FocusSessionMonitor {...props} />;
    case "trade-journal-mockup":
      return <TradeJournalMockup {...props} />;
    case "metric-database-grid":
      return <MetricDatabaseGrid {...props} />;
    case "strategy-audit-sampler":
      return <StrategyAuditSampler {...props} />;
    case "gold-metric-dashboard":
      return <GoldMetricDashboard {...props} />;
    case "crypto-metric-dashboard":
      return <CryptoMetricDashboard {...props} />;
    case "cognitive-habit-stack":
      return <CognitiveHabitStack {...props} />;
    default:
      return <Level8GeneralMonitor visualKey={visualKey} {...props} />;
  }
};
