"use client";

import React, { useState } from "react";
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
export const Level8PlaceholderVisual = () => {
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
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Expectancy Metric...</span>
            <span className="text-emerald-400">POSITIVE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Rulebook Enforcement...</span>
            <span className="text-slate-500">MONITORING</span>
          </div>
        </div>
      </div>
    </L8Frame>
  );
};
