"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  Circle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
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
  ShieldAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useMentorNote } from "../../lesson-workspace/MentorNoteContext";

// L7Frame — "Execution OS" dark terminal aesthetic with amber accent (distinct from L6 teal)
const L7Frame = ({
  children,
  title,
  id,
  mentorText: defaultMentorText = "Execution is not inspiration — it is a system. Every step you take in a live session must be pre-defined, pre-approved, and pre-tested before the market opens.",
  mentorAnalogy: defaultMentorAnalogy = "A commercial airline pilot doesn't decide how to land mid-descent. Every procedure is locked in before takeoff. Your execution OS is that locked-in procedure.",
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
    <div className="w-full bg-[#070a0f] border border-[#1a1f2e] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-2xl text-left min-h-[500px] text-white">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#1e2535_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-[#1a1f2e] pb-4 shrink-0">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 mb-1">
            <Activity size={12} className="text-amber-400 animate-pulse" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Execution OS — Level 7</span>
          </div>
          <h4 className="text-sm font-black text-amber-400 uppercase tracking-tight italic leading-tight">{title}</h4>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Protocol ID</span>
            <span className="text-[10px] font-mono text-amber-200 font-bold">{id}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0">
        {children}
      </div>

      {/* Mentor insight */}
      <div className="w-full mt-6 pt-5 border-t border-[#1a1f2e] flex flex-col gap-2 shrink-0 text-left relative z-10">
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 bg-amber-950/40 text-amber-400 text-[8px] font-black uppercase tracking-widest rounded-sm border border-amber-800/20">
            Execution Coach
          </div>
          <div className="h-px flex-1 bg-[#1a1f2e]" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-200 leading-relaxed">{activeMentorText}</p>
            {activeMentorAnalogy && (
              <p className="mt-1.5 text-[11px] text-slate-400 italic leading-snug">
                <span className="font-black uppercase text-[9px] mr-2 text-amber-400 not-italic">Protocol Analogy:</span>
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
// 1. EXECUTION OS FRAMEWORK — Pre/During/Post session stage navigator
// ─────────────────────────────────────────────────────────────────────────────
export const ExecutionOSFramework = () => {
  const [activeStage, setActiveStage] = useState<"pre" | "during" | "post">("pre");

  const stages = {
    pre: {
      label: "Pre-Session",
      color: "amber",
      icon: <Clock size={16} className="text-amber-400" />,
      steps: [
        { id: 1, text: "Review daily bias and previous session close", done: true },
        { id: 2, text: "Audit DXY direction vs target pairs", done: true },
        { id: 3, text: "Mark session liquidity pools and structural levels", done: true },
        { id: 4, text: "Set session max-loss limit (hard cap)", done: true },
        { id: 5, text: "Activate primary scenario — identify Decision Gate", done: false },
        { id: 6, text: "Confirm order entry zones within 20-pip tolerance", done: false },
      ],
    },
    during: {
      label: "Live Execution",
      color: "blue",
      icon: <Zap size={16} className="text-blue-400" />,
      steps: [
        { id: 1, text: "Monitor price approach to entry zone — no early entries", done: true },
        { id: 2, text: "Confirm structural signal before order placement", done: true },
        { id: 3, text: "Execute limit/stop order at pre-defined level only", done: true },
        { id: 4, text: "Move stop to break-even at first R:R milestone", done: false },
        { id: 5, text: "Take partial profit at next structural level", done: false },
        { id: 6, text: "Do not deviate from plan — no in-session overrides", done: false },
      ],
    },
    post: {
      label: "Post-Session Debrief",
      color: "emerald",
      icon: <BookOpen size={16} className="text-emerald-400" />,
      steps: [
        { id: 1, text: "Log all trades: entry level vs planned entry level", done: true },
        { id: 2, text: "Record scenario adherence score (not P&L)", done: true },
        { id: 3, text: "Identify execution errors: type + root cause", done: false },
        { id: 4, text: "Update session journal with process notes", done: false },
        { id: 5, text: "Review spread cost and slippage against budget", done: false },
        { id: 6, text: "Confirm max-loss limit was respected", done: false },
      ],
    },
  };

  const stage = stages[activeStage];
  const accentColor = activeStage === "pre" ? "amber" : activeStage === "during" ? "blue" : "emerald";

  return (
    <L7Frame
      title="Execution Operating System — Stage Navigator"
      id="EXEC-OS-7.1"
      mentorText="The OS runs in three locked phases. Pre-session sets the parameters. Live session executes within those parameters only. Post-session measures process adherence — not profit."
      mentorAnalogy="A hospital operating theatre runs on a strict protocol: pre-op prep, surgical execution, and post-op debrief. Each phase is separate. Skipping one creates risk in the next."
    >
      <div className="w-full flex flex-col gap-5 my-2">
        {/* Stage Selector */}
        <div className="flex w-full bg-slate-950/50 border border-[#1a1f2e] p-1 rounded-2xl gap-1">
          {(["pre", "during", "post"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setActiveStage(s)}
              className={cn(
                "flex-1 py-2 px-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all",
                activeStage === s
                  ? s === "pre"
                    ? "bg-amber-500 text-slate-950"
                    : s === "during"
                    ? "bg-blue-500 text-slate-950"
                    : "bg-emerald-500 text-slate-950"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              {stages[s].label}
            </button>
          ))}
        </div>

        {/* Checklist */}
        <div className="bg-[#080d1a] border border-[#1a1f2e] rounded-2xl p-5 w-full">
          <div className="flex items-center gap-2 mb-4 border-b border-[#1a1f2e] pb-3">
            {stage.icon}
            <span className="text-xs font-black uppercase tracking-wider text-slate-200">
              {stage.label} Protocol
            </span>
          </div>
          <div className="flex flex-col gap-2.5">
            {stage.steps.map((step) => (
              <div key={step.id} className="flex items-start gap-3">
                {step.done ? (
                  <CheckCircle2
                    size={14}
                    className={cn(
                      "mt-0.5 shrink-0",
                      accentColor === "amber" ? "text-amber-400" : accentColor === "blue" ? "text-blue-400" : "text-emerald-400"
                    )}
                  />
                ) : (
                  <Circle size={14} className="text-slate-600 mt-0.5 shrink-0" />
                )}
                <span className={cn("text-[11px] leading-relaxed", step.done ? "text-slate-200" : "text-slate-500")}>
                  {step.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Status Row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-950/40 border border-[#1a1f2e] rounded-xl p-3 text-center">
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Phase</div>
            <div className="text-xs font-black text-amber-400">{stage.label}</div>
          </div>
          <div className="bg-slate-950/40 border border-[#1a1f2e] rounded-xl p-3 text-center">
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Completed</div>
            <div className="text-xs font-black text-emerald-400">{stage.steps.filter((s) => s.done).length}/{stage.steps.length}</div>
          </div>
          <div className="bg-slate-950/40 border border-[#1a1f2e] rounded-xl p-3 text-center">
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Mode</div>
            <div className="text-xs font-black text-slate-300">PROTOCOL</div>
          </div>
        </div>
      </div>
    </L7Frame>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. ORDER ENTRY SIMULATOR — Limit vs Stop vs Market decision tool
// ─────────────────────────────────────────────────────────────────────────────
export const OrderEntrySimulator = () => {
  const [orderType, setOrderType] = useState<"limit" | "stop" | "market">("limit");
  const [scenario, setScenario] = useState<"retracement" | "breakout">("retracement");

  const configs = {
    limit: {
      label: "Limit Order",
      color: "amber",
      description: "Patient entry at a pre-defined structural level. Price must come TO you.",
      retracement: {
        rule: "Place limit BUY at the identified Order Block / FVG midpoint. Set stop 2–3 pips below the OB low. Execute only if price returns to the zone within the session window.",
        example: "EURUSD 4H OB at 1.0820. Place limit buy at 1.0822. Stop at 1.0815. If price never returns, order expires at London close.",
        verdict: "✅ Optimal for retracement entries",
        verdictColor: "emerald",
      },
      breakout: {
        rule: "Avoid using limit orders on breakouts — they require a pullback that may not materialise, causing missed entries on genuine momentum moves.",
        example: "GBPUSD breaks 1.2800 with momentum candles. Limit buy at 1.2800 risks being filled only on a false break retest, not confirmed breakout.",
        verdict: "⚠️ Sub-optimal for breakout scenarios",
        verdictColor: "amber",
      },
    },
    stop: {
      label: "Stop Order",
      color: "blue",
      description: "Entry triggered only when price reaches and breaks a structural level.",
      retracement: {
        rule: "Do not use stop orders for retracement entries — a buy stop above current price chases momentum and violates the structural entry principle.",
        example: "Placing a buy stop at 1.0850 when price is at 1.0820 means you only enter if price pushes higher, missing the retracement OB fill at 1.0822.",
        verdict: "⚠️ Mismatched for retracement context",
        verdictColor: "amber",
      },
      breakout: {
        rule: "Place a buy stop 1–2 pips above the confirmed breakout level. Requires prior structural confirmation (e.g., Daily close above key resistance). Hard stop placed at breakout origin.",
        example: "USDJPY Daily OB resistance at 148.20. Buy stop at 148.22 with stop at 147.90 (below the OB origin) targets 149.50 liquidity.",
        verdict: "✅ Optimal for structural breakout entries",
        verdictColor: "emerald",
      },
    },
    market: {
      label: "Market Order",
      color: "red",
      description: "Immediate fill at current price. Highest slippage risk. Last resort only.",
      retracement: {
        rule: "Never use market orders for planned retracement entries. The unpredictable fill price makes risk calculation impossible and violates pre-defined entry precision.",
        example: "During NY open volatility, a market order on EURUSD can fill 5–12 pips worse than the structural entry point, destroying the planned R:R ratio.",
        verdict: "❌ Avoid for structured retracement entries",
        verdictColor: "red",
      },
      breakout: {
        rule: "Market orders on breakouts are acceptable ONLY during extreme momentum events (e.g., post-NFP) where the spread is acceptable and limit orders will not be filled. Must be pre-approved in the session plan.",
        example: "NFP release: USDJPY surges 80 pips. Market order acceptable if spread is under 3 pips and the move confirms the pre-planned directional scenario.",
        verdict: "⚠️ Conditional use on news-driven breakouts only",
        verdictColor: "amber",
      },
    },
  };

  const cfg = configs[orderType];
  const scenarioCfg = cfg[scenario];

  return (
    <L7Frame
      title="Order Entry Precision Simulator"
      id="ENTRY-SIM-7.3"
      mentorText="The order type is not a preference — it is a structural decision. Limit orders are for patient structural fills. Stop orders are for confirmed breakouts. Market orders are a last resort, not a habit."
      mentorAnalogy="A sniper doesn't fire on movement alone. They confirm the target, verify wind conditions, and squeeze the trigger only when conditions are exact. Your order entry is that trigger — fire only when all parameters align."
    >
      <div className="w-full flex flex-col gap-5 my-2">
        {/* Scenario Toggle */}
        <div className="flex w-full bg-slate-950/50 border border-[#1a1f2e] p-1 rounded-xl gap-1">
          <button
            onClick={() => setScenario("retracement")}
            className={cn("flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all",
              scenario === "retracement" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-slate-200")}
          >
            Retracement Entry
          </button>
          <button
            onClick={() => setScenario("breakout")}
            className={cn("flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all",
              scenario === "breakout" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-slate-200")}
          >
            Breakout Entry
          </button>
        </div>

        {/* Order Type Selector */}
        <div className="grid grid-cols-3 gap-2">
          {(["limit", "stop", "market"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setOrderType(t)}
              className={cn(
                "p-3 rounded-xl border text-[10px] font-black uppercase text-center transition-all",
                orderType === t
                  ? t === "limit" ? "bg-amber-950/30 border-amber-500/40 text-amber-400"
                    : t === "stop" ? "bg-blue-950/30 border-blue-500/40 text-blue-400"
                    : "bg-red-950/30 border-red-500/40 text-red-400"
                  : "bg-slate-900/20 border-[#1a1f2e] text-slate-500 hover:text-slate-300"
              )}
            >
              {configs[t].label}
            </button>
          ))}
        </div>

        {/* Output Panel */}
        <div className="bg-[#080d1a] border border-[#1a1f2e] rounded-2xl p-5 flex flex-col gap-3">
          <p className="text-[11px] text-slate-400 italic">{cfg.description}</p>
          <div className="border-t border-[#1a1f2e] pt-3">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Execution Rule</span>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">{scenarioCfg.rule}</p>
          </div>
          <div className="border-t border-[#1a1f2e] pt-3">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Real Example</span>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-mono">{scenarioCfg.example}</p>
          </div>
          <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase self-start",
            (scenarioCfg as any).verdictColor === "emerald" ? "bg-emerald-950/30 text-emerald-400 border border-emerald-800/20"
              : (scenarioCfg as any).verdictColor === "amber" ? "bg-amber-950/30 text-amber-400 border border-amber-800/20"
              : "bg-red-950/30 text-red-400 border border-red-800/20"
          )}>
            {scenarioCfg.verdict}
          </div>
        </div>
      </div>
    </L7Frame>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. EXECUTION DEBRIEF LOG — Interactive post-session review tool
// ─────────────────────────────────────────────────────────────────────────────
export const ExecutionDebriefLog = () => {
  const [activeView, setActiveView] = useState<"trade" | "errors" | "score">("trade");

  const tradeLog = [
    { id: "T1", pair: "EURUSD", planned: "1.0822", actual: "1.0820", deviation: "2 pips", status: "ok", note: "Filled within tolerance" },
    { id: "T2", pair: "GBPUSD", planned: "1.2640", actual: "1.2653", deviation: "13 pips", status: "error", note: "Chased market — missed limit" },
    { id: "T3", pair: "USDJPY", planned: "148.20", actual: "148.22", deviation: "2 pips", status: "ok", note: "Clean limit fill at OB" },
  ];

  const errorTypes = [
    { type: "Chased Entry", count: 1, impact: "High", color: "red" },
    { type: "Early Exit", count: 0, impact: "—", color: "slate" },
    { type: "Wrong Lot Size", count: 0, impact: "—", color: "slate" },
    { type: "Max-Loss Breach", count: 0, impact: "—", color: "slate" },
    { type: "Plan Deviation", count: 1, impact: "Medium", color: "amber" },
  ];

  const scores = [
    { label: "Entry Precision", value: 67, max: 100 },
    { label: "Plan Adherence", value: 80, max: 100 },
    { label: "Risk Protocol", value: 100, max: 100 },
    { label: "Debrief Completeness", value: 90, max: 100 },
  ];

  return (
    <L7Frame
      title="Post-Session Execution Debrief"
      id="DEBRIEF-7.9"
      mentorText="You review execution against your plan — not against profit. A trade can be profitable with terrible execution and that's dangerous because it teaches the wrong lesson. Review the process first, always."
      mentorAnalogy="An aviation accident investigator doesn't ask 'did the plane land safely?' They ask 'did the crew follow every procedure?' A safe landing with broken procedure is still a failed audit."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* View Tabs */}
        <div className="flex w-full bg-slate-950/50 border border-[#1a1f2e] p-1 rounded-xl gap-1">
          {(["trade", "errors", "score"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setActiveView(v)}
              className={cn("flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all",
                activeView === v ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-slate-200")}
            >
              {v === "trade" ? "Trade Log" : v === "errors" ? "Error Audit" : "Process Score"}
            </button>
          ))}
        </div>

        {/* Trade Log View */}
        {activeView === "trade" && (
          <div className="bg-[#080d1a] border border-[#1a1f2e] rounded-2xl overflow-hidden">
            <div className="px-4 py-2 border-b border-[#1a1f2e] flex items-center gap-2">
              <BarChart2 size={12} className="text-amber-400" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Planned vs. Actual Entry</span>
            </div>
            {tradeLog.map((t) => (
              <div key={t.id} className="flex items-center gap-3 px-4 py-3 border-b border-[#1a1f2e] last:border-0">
                <div className={cn("w-1.5 h-8 rounded-full shrink-0", t.status === "ok" ? "bg-emerald-500" : "bg-red-500")} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-slate-200">{t.pair}</span>
                    <span className={cn("text-[8px] font-bold uppercase px-1.5 py-0.5 rounded",
                      t.status === "ok" ? "bg-emerald-950/40 text-emerald-400" : "bg-red-950/40 text-red-400"
                    )}>
                      {t.deviation} off
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">{t.note}</p>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-slate-500">Planned</div>
                  <div className="text-[10px] font-mono text-amber-400">{t.planned}</div>
                </div>
                <ArrowRight size={10} className="text-slate-600" />
                <div className="text-right">
                  <div className="text-[9px] text-slate-500">Actual</div>
                  <div className={cn("text-[10px] font-mono", t.status === "ok" ? "text-emerald-400" : "text-red-400")}>{t.actual}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error Audit View */}
        {activeView === "errors" && (
          <div className="bg-[#080d1a] border border-[#1a1f2e] rounded-2xl overflow-hidden">
            <div className="px-4 py-2 border-b border-[#1a1f2e] flex items-center gap-2">
              <AlertTriangle size={12} className="text-amber-400" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Execution Error Taxonomy</span>
            </div>
            {errorTypes.map((e, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-[#1a1f2e] last:border-0">
                <div className="flex items-center gap-2">
                  <div className={cn("w-2 h-2 rounded-full", e.count > 0 ? (e.color === "red" ? "bg-red-500" : "bg-amber-500") : "bg-slate-700")} />
                  <span className="text-[11px] text-slate-300">{e.type}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={cn("text-[10px] font-bold", e.count > 0 ? "text-red-400" : "text-slate-600")}>
                    {e.count > 0 ? `×${e.count}` : "—"}
                  </span>
                  <span className={cn("text-[8px] font-black uppercase px-1.5 py-0.5 rounded",
                    e.color === "red" ? "bg-red-950/40 text-red-400" :
                    e.color === "amber" ? "bg-amber-950/40 text-amber-400" : "bg-slate-900 text-slate-600"
                  )}>
                    {e.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Process Score View */}
        {activeView === "score" && (
          <div className="bg-[#080d1a] border border-[#1a1f2e] rounded-2xl p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#1a1f2e]">
              <Target size={12} className="text-amber-400" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Process Score — Not P&L</span>
            </div>
            {scores.map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-300 font-bold">{s.label}</span>
                  <span className={cn("text-[10px] font-black", s.value >= 90 ? "text-emerald-400" : s.value >= 70 ? "text-amber-400" : "text-red-400")}>
                    {s.value}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className={cn("h-full rounded-full transition-all", s.value >= 90 ? "bg-emerald-500" : s.value >= 70 ? "bg-amber-500" : "bg-red-500")}
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="mt-2 pt-3 border-t border-[#1a1f2e] flex justify-between items-center">
              <span className="text-[10px] font-black text-slate-400 uppercase">Overall Process Score</span>
              <span className="text-sm font-black text-amber-400">84%</span>
            </div>
          </div>
        )}
      </div>
    </L7Frame>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. INTERACTIVE LEVEL 7 COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

export const LivePriceReaderVisual = () => {
  const [volMode, setVolMode] = useState<"tokyo" | "london" | "cpi">("london");
  const [ticks, setTicks] = useState<number[]>([1.0820, 1.0821, 1.0820, 1.0822, 1.0821, 1.0823, 1.0822, 1.0824, 1.0823, 1.0825]);
  const [bid, setBid] = useState<number>(1.0825);
  const [ask, setAsk] = useState<number>(1.08264);
  const [flash, setFlash] = useState<"up" | "down" | "none">("none");
  const [decision, setDecision] = useState<"none" | "limit" | "market" | "flat">("none");

  // Tick generator
  useEffect(() => {
    const interval = setInterval(() => {
      let spread = 0.00014; // 1.4 pips default
      let move = 0;
      if (volMode === "tokyo") {
        spread = 0.00010; // 1.0 pips
        move = (Math.random() - 0.5) * 0.00006;
      } else if (volMode === "london") {
        spread = 0.00014; // 1.4 pips
        move = (Math.random() - 0.45) * 0.00015; // slight upward drift
      } else {
        spread = 0.00085; // 8.5 pips
        move = (Math.random() - 0.5) * 0.00080;
      }

      setTicks(prev => {
        const lastPrice = prev[prev.length - 1];
        const nextPrice = Math.max(1.0700, Math.min(1.0950, lastPrice + move));
        
        // Update bid/ask
        const newBid = nextPrice;
        const newAsk = nextPrice + spread;
        setBid(newBid);
        setAsk(newAsk);
        setFlash(nextPrice > lastPrice ? "up" : "down");

        const updated = [...prev.slice(1), nextPrice];
        return updated;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [volMode]);

  const spreadPips = ((ask - bid) * 10000).toFixed(1);

  return (
    <L7Frame
      title="Live Price & Order Flow Ticker"
      id="TICK-7.4"
      mentorText="Price does not move in a straight line, and spreads expand under stress. A professional doesn't panic-click market orders when quotes flash; they execute limit orders at structured levels."
      mentorAnalogy="If you buy fruit at a chaotic wholesale bazaar, you don't run up and shout 'give me whatever price is on the box!' You bid a specific price and wait. That is a limit order."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        {/* Volatility Selection */}
        <div className="flex justify-between items-center bg-slate-950/40 border border-[#1a1f2e] p-3 rounded-xl">
          <span className="text-xs font-black text-slate-300 uppercase tracking-wider">Volatility Environment:</span>
          <div className="flex gap-2">
            {(["tokyo", "london", "cpi"] as const).map(mode => (
              <button
                key={mode}
                onClick={() => { setVolMode(mode); setDecision("none"); }}
                className={cn("px-2.5 py-1 rounded text-[9px] font-black uppercase transition-all border",
                  volMode === mode 
                    ? "bg-amber-500 text-slate-950 border-amber-600" 
                    : "bg-slate-900/40 border-slate-800 text-slate-400"
                )}
              >
                {mode === "tokyo" ? "Tokyo (Low)" : mode === "london" ? "London (Active)" : "CPI News (Extreme)"}
              </button>
            ))}
          </div>
        </div>

        {/* Flashing Quote Ticker */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col justify-center text-center">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Bid Price (Sell)</span>
            <span className={cn("text-lg font-mono font-black mt-1 transition-all duration-200", 
              flash === "up" ? "text-emerald-400" : flash === "down" ? "text-red-400" : "text-slate-200"
            )}>
              {bid.toFixed(5)}
            </span>
          </div>

          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col justify-center text-center">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Spread Size</span>
            <span className="text-lg font-mono font-black text-amber-400 mt-1">
              {spreadPips} <span className="text-[10px] text-slate-500 font-bold">pips</span>
            </span>
          </div>

          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col justify-center text-center">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Ask Price (Buy)</span>
            <span className={cn("text-lg font-mono font-black mt-1 transition-all duration-200", 
              flash === "up" ? "text-emerald-400" : flash === "down" ? "text-red-400" : "text-slate-200"
            )}>
              {ask.toFixed(5)}
            </span>
          </div>
        </div>

        {/* Tick Chart sparkline */}
        <div className="bg-[#080d1a] border border-[#1a1f2e] rounded-2xl p-4 h-36 relative overflow-hidden flex flex-col justify-between">
          <span className="text-[8px] font-mono text-slate-500 uppercase">Live Tick Stream (15s frame)</span>
          <div className="absolute inset-0 flex items-center justify-center p-4 mt-6">
            <svg className="w-full h-full" viewBox="0 0 100 30">
              {/* Draw Grid */}
              <line x1="0" y1="15" x2="100" y2="15" stroke="#1c2333" strokeWidth="0.5" strokeDasharray="1" />
              
              {/* Sparkline path */}
              {(() => {
                const minVal = Math.min(...ticks);
                const maxVal = Math.max(...ticks);
                const range = maxVal - minVal || 1;
                const points = ticks.map((t, idx) => {
                  const x = (idx / (ticks.length - 1)) * 100;
                  const y = 25 - ((t - minVal) / range) * 20;
                  return `${x},${y}`;
                }).join(" ");
                return (
                  <>
                    <polyline fill="none" stroke="#f59e0b" strokeWidth="1.5" points={points} className="transition-all duration-300" />
                    {ticks.length > 0 && (
                      <circle 
                        cx="100" 
                        cy={25 - ((ticks[ticks.length - 1] - minVal) / range) * 20} 
                        r="1.5" 
                        fill="#f59e0b" 
                        className="animate-ping" 
                      />
                    )}
                  </>
                );
              })()}
            </svg>
          </div>
        </div>

        {/* Interactive Entry decision buttons */}
        <div className="bg-slate-950/40 border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-3">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Execute Entry Node:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setDecision("limit")}
              className={cn("flex-1 py-2 rounded-xl text-xs font-bold uppercase transition-all border",
                decision === "limit" ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-400" : "bg-slate-900/30 border-slate-800 text-slate-300 hover:text-white"
              )}
            >
              Limit Order (Wait for OB)
            </button>
            <button
              onClick={() => setDecision("market")}
              className={cn("flex-1 py-2 rounded-xl text-xs font-bold uppercase transition-all border",
                decision === "market" ? "bg-red-950/30 border-red-500/40 text-red-400" : "bg-slate-900/30 border-slate-800 text-slate-300 hover:text-white"
              )}
            >
              Market Order (Chase price)
            </button>
            <button
              onClick={() => setDecision("flat")}
              className={cn("flex-1 py-2 rounded-xl text-xs font-bold uppercase transition-all border",
                decision === "flat" ? "bg-amber-950/30 border-amber-500/40 text-amber-400" : "bg-slate-900/30 border-slate-800 text-slate-300 hover:text-white"
              )}
            >
              Stand Aside
            </button>
          </div>

          {decision !== "none" && (
            <div className={cn("p-3 rounded-xl border text-[10px] leading-relaxed font-mono flex gap-2 items-start animate-in fade-in duration-300",
              decision === "market" && volMode === "cpi" ? "bg-red-950/20 border-red-500/20 text-red-400" : "bg-emerald-950/20 border-emerald-500/20 text-emerald-400"
            )}>
              {decision === "limit" && (
                <>
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-emerald-400" />
                  <span><strong>✓ PROTOCOL SUCCESS:</strong> Limit order placed at 1.0820. Position filled exactly at planned boundary. Slippage: 0.0 pips. Execution cost matches trading plan parameters.</span>
                </>
              )}
              {decision === "market" && volMode !== "cpi" && (
                <>
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-emerald-400" />
                  <span><strong>✓ FILLED:</strong> Market order filled. Slippage: 1.2 pips. Acceptable under normal volatility conditions, but limit orders are still preferred.</span>
                </>
              )}
              {decision === "market" && volMode === "cpi" && (
                <>
                  <AlertTriangle size={12} className="shrink-0 mt-0.5 text-red-400" />
                  <span><strong>🚨 SLIPPAGE PENALTY:</strong> Chasing a market order during CPI News is highly dangerous. Your order filled 9.2 pips worse than expected due to spread widening, slashing your setup's R-multiple by -1.5R.</span>
                </>
              )}
              {decision === "flat" && (
                <>
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-emerald-400" />
                  <span><strong>✓ ALIGNED DECISION:</strong> Stood aside. Preserved capital. The best traders know when NOT to participate. Standing flat during CPI prevents unnecessary spread tax losses.</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </L7Frame>
  );
};

export const OpenTradeManagerVisual = () => {
  const [stopVal, setStopVal] = useState<number>(1.0800); // initial SL
  const [partialTaken, setPartialTaken] = useState<boolean>(false);
  const [outcome, setOutcome] = useState<"none" | "active" | "stopped" | "target">("active");

  const entry = 1.0820;
  const target = 1.0870;
  const currentPrice = 1.0835; // +1.5R floating
  
  // Calculate relative stats
  const stopDistance = entry - stopVal; // entry to SL in points
  const pnlR = stopDistance > 0 ? ((currentPrice - entry) / stopDistance).toFixed(1) : "0.0";
  const riskR = stopVal >= entry ? "0.0 (Risk-Free)" : "-1.0R";

  const moveBE = () => {
    setStopVal(entry);
    setOutcome("active");
  };

  const takePartial = () => {
    setPartialTaken(true);
  };

  const simulateTick = (success: boolean) => {
    if (success) {
      setOutcome("target");
    } else {
      setOutcome("stopped");
    }
  };

  return (
    <L7Frame
      title="Active Position & Risk Manager"
      id="MAN-7.5"
      mentorText="Do not watch the floating dollar value. Professional trade management is a binary checklist: Has price reached the trailing trigger? Is my stop trailed to structural invalidation?"
      mentorAnalogy="An engineer at a nuclear plant doesn't adjust valve parameters based on their mood; they monitor exact temperature metrics. Treat your position trailing stop as that valve."
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-2 text-left">
        {/* Left Control Panel */}
        <div className="lg:col-span-5 bg-slate-950/40 border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-4">
          <h5 className="text-xs font-black uppercase text-slate-300 tracking-wider border-b border-[#1a1f2e] pb-2 flex justify-between">
            <span>Risk Controller</span>
            <span className="text-[10px] text-amber-400 font-mono">LONG EURUSD</span>
          </h5>
          
          <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-500">Entry Level:</span>
              <span>{entry.toFixed(4)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Stop Loss:</span>
              <span className="text-red-400">{stopVal.toFixed(4)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Current PnL:</span>
              <span className="text-emerald-400">+{pnlR}R</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Active Risk:</span>
              <span className={cn(stopVal >= entry ? "text-emerald-400" : "text-red-400")}>{riskR}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-[#1a1f2e]">
            <button
              onClick={moveBE}
              disabled={stopVal >= entry}
              className={cn("py-2 rounded-lg text-[10px] font-black uppercase transition-all border",
                stopVal >= entry ? "bg-slate-900 border-slate-800 text-slate-600" : "bg-amber-500 text-slate-950 border-amber-600"
              )}
            >
              Move Stop to Break-Even (BE)
            </button>
            <button
              onClick={takePartial}
              disabled={partialTaken}
              className={cn("py-2 rounded-lg text-[10px] font-black uppercase transition-all border",
                partialTaken ? "bg-slate-900 border-slate-800 text-slate-600" : "bg-slate-950 border-[#1a1f2e] text-slate-200 hover:border-amber-500/50"
              )}
            >
              {partialTaken ? "50% Partial Booked (+0.75R)" : "Take 50% Partial"}
            </button>
          </div>
        </div>

        {/* Right Graphic Panel */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-5 rounded-2xl relative overflow-hidden flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-mono text-slate-400">STRUCTURAL RISK BOUNDARIES</span>
              <div className="flex gap-1">
                <button onClick={() => simulateTick(true)} className="px-2 py-0.5 bg-emerald-950/40 text-emerald-400 text-[8px] font-black uppercase border border-emerald-900/30 rounded">Simulate TP</button>
                <button onClick={() => simulateTick(false)} className="px-2 py-0.5 bg-red-950/40 text-red-400 text-[8px] font-black uppercase border border-red-900/30 rounded">Simulate Pullback</button>
              </div>
            </div>

            {/* SVG Visualizing SL / Entry / Price / Target */}
            <div className="h-32 w-full mt-2 relative">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                {/* Target Line */}
                <line x1="0" y1="5" x2="100" y2="5" stroke="#10b981" strokeWidth="0.75" strokeDasharray="2" />
                <text x="2" y="4.5" fill="#10b981" fontSize="2.5" className="font-mono">Target: {target.toFixed(4)} (+5R)</text>

                {/* Entry Line */}
                <line x1="0" y1="20" x2="100" y2="20" stroke="#64748b" strokeWidth="0.75" />
                <text x="2" y="19" fill="#94a3b8" fontSize="2.5" className="font-mono">Entry: {entry.toFixed(4)}</text>

                {/* Stop Loss Line */}
                {(() => {
                  const slY = stopVal === entry ? 20 : 32;
                  return (
                    <>
                      <line x1="0" y1={slY} x2="100" y2={slY} stroke="#ef4444" strokeWidth="1" />
                      <text x="2" y={slY - 1} fill="#ef4444" fontSize="2.5" className="font-mono">Stop: {stopVal.toFixed(4)}</text>
                    </>
                  );
                })()}

                {/* Price path & Current Price */}
                {outcome === "active" && (
                  <>
                    <path d="M 0 20 L 25 18 L 50 15 L 75 14" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1" />
                    <circle cx="75" cy="14" r="1.5" fill="#f59e0b" className="animate-pulse" />
                  </>
                )}
                {outcome === "target" && (
                  <>
                    <path d="M 0 20 L 25 18 L 50 15 L 75 14 L 95 5" fill="none" stroke="#10b981" strokeWidth="1.2" />
                    <circle cx="95" cy="5" r="1.5" fill="#10b981" />
                  </>
                )}
                {outcome === "stopped" && (
                  <>
                    <path d="M 0 20 L 25 18 L 50 15 L 75 14 L 90 32" fill="none" stroke="#ef4444" strokeWidth="1.2" />
                    <circle cx="90" cy="32" r="1.5" fill="#ef4444" />
                  </>
                )}
              </svg>
            </div>

            <div className="z-10 bg-slate-950/80 p-2.5 rounded-lg border border-slate-900 text-[10px] text-slate-300 font-mono text-left mt-2 leading-relaxed">
              {outcome === "active" && stopVal < entry && "Plan: Adjust stop to Break-Even (1.0820) or take partials. Holding SL below entry maintains a -1.0R loss risk."}
              {outcome === "active" && stopVal >= entry && "✓ Safe: Trade is risk-free. Stop moved to entry. You can let the position run to the target."}
              {outcome === "target" && `✓ TARGET HIT: Trade hit ${target.toFixed(4)} target. Return: ${partialTaken ? "+3.25R" : "+5.0R"}. Excellent execution.`}
              {outcome === "stopped" && (
                stopVal >= entry 
                  ? "✓ STOPPED AT BE: Pullback hit entry. Outcome: 0R risk-free exit (capital preserved). Excellent discipline." 
                  : "❌ STOPPED OUT: Pullback hit stop loss. Outcome: -1.0R Loss. Moving to BE earlier would have preserved capital."
              )}
            </div>
          </div>
        </div>
      </div>
    </L7Frame>
  );
};

export const SpreadSlippageMeterVisual = () => {
  const [asset, setAsset] = useState<"fx" | "gold" | "crypto">("fx");
  const [volIndex, setVolIndex] = useState<number>(0); // 0 = normal, 1 = active, 2 = news
  const [orderType, setOrderType] = useState<"limit" | "market">("limit");

  // Slippage stats mapper
  const stats = {
    fx: [
      { name: "EUR/USD Normal", spread: 0.8, slippage: 0.0, commission: 0.2, color: "emerald", grade: "A" },
      { name: "EUR/USD Active", spread: 1.4, slippage: 0.2, commission: 0.2, color: "emerald", grade: "B" },
      { name: "EUR/USD CPI Release", spread: 8.5, slippage: 9.0, commission: 0.2, color: "red", grade: "F" }
    ],
    gold: [
      { name: "Gold Normal", spread: 1.5, slippage: 0.0, commission: 0.5, color: "emerald", grade: "B" },
      { name: "Gold NY Open", spread: 2.8, slippage: 1.5, commission: 0.5, color: "amber", grade: "C" },
      { name: "Gold FOMC Release", spread: 12.0, slippage: 25.0, commission: 0.5, color: "red", grade: "F" }
    ],
    crypto: [
      { name: "BTC/USDT Normal", spread: 2.0, slippage: 0.5, commission: 0.8, color: "emerald", grade: "B" },
      { name: "BTC/USDT Active", spread: 4.5, slippage: 2.8, commission: 0.8, color: "amber", grade: "D" },
      { name: "BTC/USDT Liquidity Flush", spread: 28.0, slippage: 80.0, commission: 0.8, color: "red", grade: "F" }
    ]
  };

  const currentStats = stats[asset][volIndex];
  
  // Limit orders have 0 slippage always!
  const effectiveSlippage = orderType === "limit" ? 0.0 : currentStats.slippage;
  const spreadCost = currentStats.spread;
  const totalCostPips = spreadCost + effectiveSlippage + currentStats.commission;
  
  const grade = orderType === "limit" && currentStats.grade === "F" ? "C" : orderType === "limit" ? "A" : currentStats.grade;
  const gradeColor = grade === "A" || grade === "B" ? "text-emerald-400 border-emerald-950 bg-emerald-950/20" : grade === "C" ? "text-amber-400 border-amber-950 bg-amber-950/20" : "text-red-400 border-red-950 bg-red-950/20";

  return (
    <L7Frame
      title="Transaction Friction & Slippage Meter"
      id="SLIP-7.8"
      mentorText="Friction is the silent killer of mathematical edge. A 2-pip average slippage on market orders can turn a highly profitable strategy into a break-even system over a 100-trade sample."
      mentorAnalogy="If you drag a heavy sled on concrete vs smooth ice, the friction slows you down. Spread and slippage are the concrete of your trading execution."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        {/* Asset tabs */}
        <div className="flex w-full bg-slate-950/50 border border-[#1a1f2e] p-1 rounded-xl gap-1">
          {(["fx", "gold", "crypto"] as const).map(a => (
            <button
              key={a}
              onClick={() => setAsset(a)}
              className={cn("flex-1 py-1 rounded text-[10px] font-black uppercase tracking-wider transition-all",
                asset === a ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
              )}
            >
              {a === "fx" ? "Forex (EURUSD)" : a === "gold" ? "Gold (XAU)" : "Crypto (BTC)"}
            </button>
          ))}
        </div>

        {/* Volatility Slider */}
        <div className="bg-slate-950/40 border border-[#1a1f2e] p-3 rounded-xl flex flex-col gap-2">
          <div className="flex justify-between text-xs font-bold font-mono">
            <span className="text-slate-400">Volatility Level:</span>
            <span className="text-amber-400">
              {volIndex === 0 ? "Normal Session" : volIndex === 1 ? "Active Session Peak" : "High-Impact Economic Release"}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="2"
            value={volIndex}
            onChange={(e) => setVolIndex(Number(e.target.value))}
            className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        {/* Order Type Toggle */}
        <div className="flex w-full bg-slate-950/50 border border-[#1a1f2e] p-1 rounded-xl gap-1">
          <button
            onClick={() => setOrderType("limit")}
            className={cn("flex-1 py-1 rounded text-[9px] font-black uppercase tracking-wider transition-all",
              orderType === "limit" ? "bg-emerald-500 text-slate-950 font-bold" : "text-slate-400 hover:text-slate-200"
            )}
          >
            Limit Order (Guaranteed Price)
          </button>
          <button
            onClick={() => setOrderType("market")}
            className={cn("flex-1 py-1 rounded text-[9px] font-black uppercase tracking-wider transition-all",
              orderType === "market" ? "bg-red-500 text-slate-950 font-bold" : "text-slate-400 hover:text-slate-200"
            )}
          >
            Market Order (Guaranteed Fill)
          </button>
        </div>

        {/* Output metrics & Grade */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          <div className="md:col-span-8 bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col justify-between gap-3">
            <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-wider border-b border-[#1a1f2e] pb-1.5">{currentStats.name} Costs</h5>
            <div className="flex flex-col gap-1.5 font-mono text-[10px]">
              <div className="flex justify-between text-slate-400">
                <span>Spread cost:</span>
                <span>{spreadCost} pips</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Slippage drag:</span>
                <span className={effectiveSlippage > 0 ? "text-red-400" : "text-slate-300"}>
                  {effectiveSlippage.toFixed(1)} pips
                </span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Broker commission:</span>
                <span>{currentStats.commission.toFixed(1)} pips</span>
              </div>
              <div className="h-px bg-[#1a1f2e] my-1" />
              <div className="flex justify-between text-slate-200 font-bold">
                <span>Net Transaction Cost:</span>
                <span className="text-amber-400">{totalCostPips.toFixed(1)} pips</span>
              </div>
            </div>
          </div>

          <div className={cn("md:col-span-4 border rounded-xl p-4 flex flex-col items-center justify-center text-center", gradeColor)}>
            <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Execution Grade</span>
            <span className="text-4xl font-black font-mono my-2">{grade}</span>
            <span className="text-[8px] font-bold uppercase tracking-wider">
              {orderType === "limit" ? "Protected Fill" : effectiveSlippage > 5 ? "Extreme Slippage" : "Normal fill"}
            </span>
          </div>
        </div>

        <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-900 text-[10px] text-slate-300 font-mono leading-normal">
          {orderType === "limit" 
            ? "✓ Limit orders prevent slippage. You define the exact entry price, ensuring your R-multiple stays intact." 
            : `⚠️ Market orders fill instantly but accept whatever liquidity is available. In news release mode, slippage can balloon costs up to ${effectiveSlippage} pips.`
          }
        </div>
      </div>
    </L7Frame>
  );
};

export const PartialProfitEngine = () => {
  const [tp1Percent, setTp1Percent] = useState<number>(50); // 50% at 2R default
  const [tp2Percent, setTp2Percent] = useState<number>(25); // 25% at 3R
  // TP3 remains the rest

  const tp3Percent = Math.max(0, 100 - tp1Percent - tp2Percent);

  // Math simulation curves
  const partialPayoutA = (tp1Percent / 100) * 2.0;
  const partialPayoutB = ((tp1Percent / 100) * 2.0) + ((tp2Percent / 100) * 3.0) + ((tp3Percent / 100) * 5.0);

  return (
    <L7Frame
      title="Partial Profit Booking Engine"
      id="PART-7.6"
      mentorText="Partials are a psychological insurance policy. Scaling out reduces the peak performance of your perfect runs, but it provides equity curves with the stability to survive long drawdown streaks."
      mentorAnalogy="A cargo ship doesn't unload its entire container yard at the final destination only. It drops cargo off at port checkpoints along the coast to secure cash flow."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        {/* Sliders */}
        <div className="bg-slate-950/40 border border-[#1a1f2e] p-3 rounded-xl flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs font-bold font-mono">
              <span className="text-slate-400">TP1 Exit Size (at +2R target):</span>
              <span className="text-amber-400">{tp1Percent}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              step="5"
              value={tp1Percent}
              onChange={(e) => {
                const val = Number(e.target.value);
                setTp1Percent(val);
                if (val + tp2Percent > 100) {
                  setTp2Percent(100 - val);
                }
              }}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs font-bold font-mono">
              <span className="text-slate-400">TP2 Exit Size (at +3R target):</span>
              <span className="text-amber-400">{tp2Percent}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="90"
              step="5"
              value={tp2Percent}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val + tp1Percent <= 100) {
                  setTp2Percent(val);
                }
              }}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          <div className="flex justify-between font-mono text-[10px] text-slate-500 border-t border-[#1a1f2e] pt-2">
            <span>TP3 runner size (exits at +5R target):</span>
            <span className="text-emerald-400 font-bold">{tp3Percent}%</span>
          </div>
        </div>

        {/* Results comparisons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Scenario A */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Scenario A: Price hits +2.5R then drops to BE</span>
            <div className="flex flex-col gap-2 mt-3 font-mono text-[11px]">
              <div className="flex justify-between text-red-400">
                <span>All-Out Exit at +3R:</span>
                <span>0.0R (Stopped at BE)</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>Partial Exit Sizer:</span>
                <span>+{partialPayoutA.toFixed(2)}R booked</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed font-sans mt-2">
                ✓ Success: Scaling out secured gains before the reversal. Without partials, this trade returns zero.
              </p>
            </div>
          </div>

          {/* Scenario B */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Scenario B: Price runs fully to +5.0R</span>
            <div className="flex flex-col gap-2 mt-3 font-mono text-[11px]">
              <div className="flex justify-between text-slate-300">
                <span>All-Out Exit at +3R:</span>
                <span>+3.00R</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>Partial Exit Sizer:</span>
                <span>+{partialPayoutB.toFixed(2)}R</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed font-sans mt-2">
                {partialPayoutB > 3.0 
                  ? `✓ Outperformance: The ${tp3Percent}% runner at 5R boosted return to +${partialPayoutB.toFixed(2)}R, beating all-out target.`
                  : `⚠️ Performance Reduction: Booking profits early at 2R reduces the peak return, but stabilizes average expectancy.`
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </L7Frame>
  );
};

export const NewsEventProtocol = () => {
  const [countdown, setCountdown] = useState<number>(10);
  const [runActive, setRunActive] = useState<boolean>(false);
  const [choice, setChoice] = useState<"none" | "flat" | "hold" | "pending">("none");
  const [newsOutcome, setNewsOutcome] = useState<"none" | "success" | "penalty" | "slippage">("none");

  // Countdown timer
  useEffect(() => {
    if (!runActive) return;
    if (countdown === 0) {
      setRunActive(false);
      if (choice === "flat") {
        setNewsOutcome("success");
      } else if (choice === "hold") {
        setNewsOutcome("penalty");
      } else {
        setNewsOutcome("slippage");
      }
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, runActive, choice]);

  const startSimulator = (userChoice: "flat" | "hold" | "pending") => {
    setChoice(userChoice);
    setCountdown(10);
    setRunActive(true);
    setNewsOutcome("none");
  };

  return (
    <L7Frame
      title="High-Impact News Countdown Simulator"
      id="NEWS-7.7"
      mentorText="Economic news updates are volatile price gaps. Slippage during CPI or interest rate announcements bypasses stop-losses completely, turning a planned 1R loss into a catastrophic 3R wipeout."
      mentorAnalogy="If a hurricane warning is declared, a captain doesn't leave the vessel anchored on the open coast. They dock inside the harbour walls until the storm clears."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        {/* News Banner */}
        <div className="bg-[#1f1912] border border-amber-900/30 p-4 rounded-xl flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-amber-500 uppercase tracking-widest">Economic Event Calendar</span>
            <span className="text-xs font-black text-amber-300">US CPI Inflation Release</span>
          </div>
          <div className="text-right">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block">Countdown</span>
            <span className="text-xl font-mono font-black text-amber-400">
              {runActive ? `00:0${countdown}` : "STANDBY"}
            </span>
          </div>
        </div>

        {/* Action selection */}
        <div className="bg-slate-950/40 border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-3">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Select News Protocol Action:</span>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => startSimulator("flat")}
              disabled={runActive}
              className={cn("flex-1 py-2 rounded-xl text-xs font-bold uppercase transition-all border",
                choice === "flat" ? "bg-amber-500 border-amber-600 text-slate-950" : "bg-slate-900/30 border-slate-800 text-slate-300 hover:text-white"
              )}
            >
              Flat Position (Close now)
            </button>
            <button
              onClick={() => startSimulator("hold")}
              disabled={runActive}
              className={cn("flex-1 py-2 rounded-xl text-xs font-bold uppercase transition-all border",
                choice === "hold" ? "bg-red-950/30 border-red-500/40 text-red-400" : "bg-slate-900/30 border-slate-800 text-slate-300 hover:text-white"
              )}
            >
              Hold Position (Take risk)
            </button>
            <button
              onClick={() => startSimulator("pending")}
              disabled={runActive}
              className={cn("flex-1 py-2 rounded-xl text-xs font-bold uppercase transition-all border",
                choice === "pending" ? "bg-blue-950/30 border-blue-500/40 text-blue-400" : "bg-slate-900/30 border-slate-800 text-slate-300 hover:text-white"
              )}
            >
              Place Pending Buy Stop
            </button>
          </div>
        </div>

        {/* Outcomes */}
        {newsOutcome !== "none" && (
          <div className={cn("p-4 rounded-xl border text-[10px] leading-relaxed font-mono flex gap-2.5 items-start animate-in fade-in duration-300",
            newsOutcome === "success" ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-400" : "bg-red-950/20 border-red-500/20 text-red-400"
          )}>
            {newsOutcome === "success" && (
              <>
                <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-emerald-400" />
                <span><strong>✓ PROTOCOL ALIGNED:</strong> Position closed before CPI. Price spiked violently and gapped 18 pips through entry zone. You avoided a massive slippage loss. Edge preserved.</span>
              </>
            )}
            {newsOutcome === "penalty" && (
              <>
                <AlertTriangle size={14} className="shrink-0 mt-0.5 text-red-400" />
                <span><strong>🚨 NEWS GATE VIOLATION (-2.5R LOSS):</strong> Price spiked downward instantly, bypassing your 1.0810 stop limit. Your sell fill executed at 1.0795. You lost 2.5x your planned risk. Never hold through high-impact news!</span>
              </>
            )}
            {newsOutcome === "slippage" && (
              <>
                <AlertTriangle size={14} className="shrink-0 mt-0.5 text-red-400" />
                <span><strong>🚨 PENDING EXECUTION SLIPPAGE (-1.8R):</strong> The buy stop triggered during peak volatility, filling 8 pips worse than the order level. High spread and slippage cost destroyed your R-multiple expectancy.</span>
              </>
            )}
          </div>
        )}
      </div>
    </L7Frame>
  );
};

export const MultiPairExecGrid = () => {
  const [eurusdRisk, setEurusdRisk] = useState<number>(1.0);
  const [gbpusdRisk, setGbpusdRisk] = useState<number>(1.0);
  const [xauusdRisk, setXauusdRisk] = useState<number>(1.0);

  const totalRisk = eurusdRisk + gbpusdRisk + xauusdRisk;
  const usdExposure = eurusdRisk + gbpusdRisk; // EURUSD and GBPUSD both risk USD.
  const isUSDOverexposed = usdExposure > 2.5;

  return (
    <L7Frame
      title="Multi-Pair Exposure Grid"
      id="GRID-7.11"
      mentorText="Do not look at setups in isolation. EUR/USD and GBP/USD have high correlation. Sizing both at full risk simultaneously means you are running double exposure on the US Dollar."
      mentorAnalogy="If you invest in two houses in the exact same neighborhood, you are not diversified. A fire in that neighborhood damages both investments."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        {/* Risk Sliders for each asset */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-2">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">EUR/USD (Risk %)</span>
            <span className="text-sm font-bold font-mono text-amber-400">{eurusdRisk.toFixed(1)}%</span>
            <input
              type="range"
              min="0"
              max="4"
              step="0.5"
              value={eurusdRisk}
              onChange={(e) => setEurusdRisk(Number(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-2">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">GBP/USD (Risk %)</span>
            <span className="text-sm font-bold font-mono text-amber-400">{gbpusdRisk.toFixed(1)}%</span>
            <input
              type="range"
              min="0"
              max="4"
              step="0.5"
              value={gbpusdRisk}
              onChange={(e) => setGbpusdRisk(Number(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-2">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">XAU/USD (Gold Risk %)</span>
            <span className="text-sm font-bold font-mono text-amber-400">{xauusdRisk.toFixed(1)}%</span>
            <input
              type="range"
              min="0"
              max="4"
              step="0.5"
              value={xauusdRisk}
              onChange={(e) => setXauusdRisk(Number(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>
        </div>

        {/* Risk Scorecard */}
        <div className="bg-slate-950/40 border border-[#1a1f2e] p-5 rounded-2xl flex flex-col gap-3">
          <div className="flex justify-between items-center pb-2 border-b border-[#1a1f2e]">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Portfolio Risk Gauge</span>
            <span className={cn("text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border",
              isUSDOverexposed ? "bg-red-950/30 text-red-400 border-red-900/20" : "bg-emerald-950/30 text-emerald-400 border-emerald-900/20"
            )}>
              {isUSDOverexposed ? "Risk Limit Warning" : "Portfolio Safe"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-left font-mono text-[11px] text-slate-300">
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">USD Aggregate Risk:</span>
              <span className={cn("text-sm font-bold", isUSDOverexposed ? "text-red-400" : "text-emerald-400")}>
                {usdExposure.toFixed(1)}%
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Total Portfolio Risk:</span>
              <span className="text-sm font-bold text-slate-200">{totalRisk.toFixed(1)}%</span>
            </div>
          </div>

          {isUSDOverexposed && (
            <div className="p-3 bg-red-950/20 border border-red-500/20 text-[10px] text-red-400 rounded-xl leading-relaxed font-mono flex gap-2">
              <AlertTriangle size={12} className="shrink-0 mt-0.5 text-red-400" />
              <span>
                <strong>🚨 CORRELATION EXPOSURE BREACH:</strong> EUR/USD and GBP/USD share positive correlation (above 80%). Your combined risk exceeds the 2.5% single-factor risk limit on USD-exposed pairs. If USD spikes, both stop-losses will be triggered. Reduce sizes.
              </span>
            </div>
          )}
        </div>
      </div>
    </L7Frame>
  );
};

export const GoldExecSpecifics = () => {
  const [balance, setBalance] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1.0);
  const [stopDollars, setStopDollars] = useState<number>(3.0); // $3.00 stop-loss size

  // Sizing math:
  // Dollar risk = balance * (riskPercent / 100)
  // For Gold, 1 contract = 100 ounces (standard).
  // Position size in ounces = Dollar Risk / Stop size in dollars.
  // Standard Lots = Position size in ounces / 100.
  const dollarRisk = balance * (riskPercent / 100);
  const sizeOunces = dollarRisk / stopDollars;
  const standardLots = sizeOunces / 100;

  const isStopTooTight = stopDollars < 1.5;

  return (
    <L7Frame
      title="COMEX Gold Sizing & Tick Sizer"
      id="GOLD-7.12"
      mentorText="Gold is highly volatile with wider spreads. Sizing parameters must convert dollar moves ($0.10 ticks) to portfolio R-multiples. A stop placed under $1.50 will be swept by basic exchange spreads."
      mentorAnalogy="If you drive a heavy truck under a low bridge, you must measure your trailer height exactly. Sizing gold lots without conversion rules is driving blind."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Account Balance */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Account Balance ($)</span>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(Math.max(100, Number(e.target.value)))}
              className="w-full bg-slate-950 border border-[#1a1f2e] rounded-lg p-2 font-mono text-sm text-amber-400 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Risk Percent */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Risk Limit (%)</span>
            <input
              type="number"
              step="0.1"
              value={riskPercent}
              onChange={(e) => setRiskPercent(Math.max(0.1, Number(e.target.value)))}
              className="w-full bg-slate-950 border border-[#1a1f2e] rounded-lg p-2 font-mono text-sm text-amber-400 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Stop Size in Dollars */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Stop Loss Size ($/oz)</span>
            <input
              type="number"
              step="0.5"
              value={stopDollars}
              onChange={(e) => setStopDollars(Math.max(0.5, Number(e.target.value)))}
              className="w-full bg-slate-950 border border-[#1a1f2e] rounded-lg p-2 font-mono text-sm text-amber-400 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Outputs */}
        <div className="bg-[#080d1a] border border-[#1a1f2e] p-5 rounded-2xl flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-[#1a1f2e] pb-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase">COMEX Gold Lot Sizing Output</span>
            <span className="text-[9px] font-mono text-slate-500">1 standard lot = 100 oz</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[11px] text-slate-300">
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Dollar risk limit:</span>
              <span className="text-sm font-bold text-slate-200">${dollarRisk.toFixed(2)}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Position Size (Ounces):</span>
              <span className="text-sm font-bold text-amber-400">{sizeOunces.toFixed(1)} oz</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Standard Lots:</span>
              <span className="text-sm font-bold text-emerald-400">{standardLots.toFixed(3)} Lots</span>
            </div>
          </div>

          {isStopTooTight && (
            <div className="p-3 bg-red-950/20 border border-red-500/20 text-[10px] text-red-400 rounded-xl leading-relaxed font-mono flex gap-2">
              <AlertTriangle size={12} className="shrink-0 mt-0.5 text-red-400" />
              <span>
                <strong>⚠️ WARNING: STOP LOSS TOO TIGHT:</strong> Gold's average bid-ask spread is $0.35–$0.55/oz. A stop under $1.50 represents less than 3-4 spreads of wiggle room, dramatically increasing the risk of spread-triggered stops during NY volatility. Prefer stops &gt; $2.50.
              </span>
            </div>
          )}
        </div>
      </div>
    </L7Frame>
  );
};

export const CryptoExecSpecifics = () => {
  const [leverage, setLeverage] = useState<number>(10);
  const [fundingRate, setFundingRate] = useState<number>(0.03); // 0.03% per 8h
  const [holdDays, setHoldDays] = useState<number>(3);

  const initialMargin = 100; // $100 baseline
  const positionSize = initialMargin * leverage;
  
  // Funding rate ticks 3 times a day (every 8 hours)
  const fundingTicks = holdDays * 3;
  const totalFundingCost = positionSize * (fundingRate / 100) * fundingTicks;
  const fundingPercentOfMargin = (totalFundingCost / initialMargin) * 100;

  return (
    <L7Frame
      title="Perpetual Funding Rate Bleed Calculator"
      id="CRYP-7.13"
      mentorText="Perpetual contracts have no expiry, but they charge a funding tax to peg spot price. Holding highly leveraged positions during peak funding rates bleeds collateral quickly."
      mentorAnalogy="If you lease a sports car by the hour, you don't park it in the driveway overnight. You return it as soon as the drive is finished. Treat perps similarly."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Leverage Slider */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-2">
            <div className="flex justify-between text-[9px] font-black uppercase text-slate-400">
              <span>Leverage Multiplier</span>
              <span className="text-amber-400">{leverage}x</span>
            </div>
            <input
              type="range"
              min="2"
              max="50"
              value={leverage}
              onChange={(e) => setLeverage(Number(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Funding Rate */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-2">
            <div className="flex justify-between text-[9px] font-black uppercase text-slate-400">
              <span>8H Funding Rate</span>
              <span className="text-amber-400">{fundingRate.toFixed(3)}%</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.10"
              step="0.01"
              value={fundingRate}
              onChange={(e) => setFundingRate(Number(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Hold Days */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-4 rounded-xl flex flex-col gap-2">
            <div className="flex justify-between text-[9px] font-black uppercase text-slate-400">
              <span>Hold Duration (Days)</span>
              <span className="text-amber-400">{holdDays} days</span>
            </div>
            <input
              type="range"
              min="1"
              max="14"
              value={holdDays}
              onChange={(e) => setHoldDays(Number(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>
        </div>

        {/* Outputs */}
        <div className="bg-[#080d1a] border border-[#1a1f2e] p-5 rounded-2xl flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-[#1a1f2e] pb-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Collateral Bleed Calculations</span>
            <span className="text-[9px] font-mono text-slate-500">Margin Collateral: $100</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[11px] text-slate-300">
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Effective Position Size:</span>
              <span className="text-sm font-bold text-slate-200">${positionSize}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Total Funding Fee:</span>
              <span className="text-sm font-bold text-red-400">${totalFundingCost.toFixed(2)}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 text-[9px] uppercase">Collateral Bleed Ratio:</span>
              <span className="text-sm font-bold text-amber-400">{fundingPercentOfMargin.toFixed(1)}%</span>
            </div>
          </div>

          {fundingPercentOfMargin > 20 && (
            <div className="p-3 bg-red-950/20 border border-red-500/20 text-[10px] text-red-400 rounded-xl leading-relaxed font-mono flex gap-2">
              <AlertTriangle size={12} className="shrink-0 mt-0.5 text-red-400" />
              <span>
                <strong>🚨 CRITICAL COLLATERAL ERASURE WARNING:</strong> Holding this position for {holdDays} days at {leverage}x leverage during a high funding cycle will consume {fundingPercentOfMargin.toFixed(1)}% of your initial margin in funding fees alone. Leverage amplifies holding costs. Prefer spot holdings for swing targets.
              </span>
            </div>
          )}
        </div>
      </div>
    </L7Frame>
  );
};

export const HabitExecutionStack = () => {
  const [placements, setPlacements] = useState<Record<string, "pre" | "live" | "post" | "unassigned">>({
    "Verify DXY Trend": "unassigned",
    "Set Max Loss Hard Limit": "unassigned",
    "Await POI Entry Zone": "unassigned",
    "Move SL to BE at milestone": "unassigned",
    "Log Slippage & Commissions": "unassigned",
    "Categorize Process Errors": "unassigned",
  });

  const [message, setMessage] = useState<string>("Sort all execution checklist tasks into the correct session phase.");

  const solution = {
    "Verify DXY Trend": "pre",
    "Set Max Loss Hard Limit": "pre",
    "Await POI Entry Zone": "live",
    "Move SL to BE at milestone": "live",
    "Log Slippage & Commissions": "post",
    "Categorize Process Errors": "post",
  };

  const handleAssign = (task: string, targetPhase: "pre" | "live" | "post") => {
    setPlacements(prev => ({
      ...prev,
      [task]: targetPhase
    }));
    setMessage("Assess alignment once all items are sorted.");
  };

  const checkSolution = () => {
    let allAssigned = true;
    let correct = true;
    for (const [task, phase] of Object.entries(placements)) {
      if (phase === "unassigned") allAssigned = false;
      if (phase !== (solution as any)[task]) correct = false;
    }

    if (!allAssigned) {
      setMessage("❌ ASSIGNMENT ERROR: You have not sorted all tasks yet.");
    } else if (!correct) {
      setMessage("❌ PROTOCOL INCORRECT: Some tasks are placed in the wrong phase. Pre-session establishes safety; live trading acts within boundaries; post-session audits.");
    } else {
      setMessage("✓ PROTOCOL ALIGNED: Perfect execution checklist ordering. Capital checks run pre-market, limits run live, audits run post-market.");
    }
  };

  const resetStack = () => {
    setPlacements({
      "Verify DXY Trend": "unassigned",
      "Set Max Loss Hard Limit": "unassigned",
      "Await POI Entry Zone": "unassigned",
      "Move SL to BE at milestone": "unassigned",
      "Log Slippage & Commissions": "unassigned",
      "Categorize Process Errors": "unassigned",
    });
    setMessage("Sort all execution checklist tasks into the correct session phase.");
  };

  const tasks = Object.keys(placements);
  const isCorrect = message.startsWith("✓");

  return (
    <L7Frame
      title="Routine Habit Stack Sorter"
      id="ROUT-7.10"
      mentorText="An execution habit is not a recommendation — it is a checklist that guarantees survival. If you analyze correlation *during* the trade, or log metrics *before* execution, your process is fractured."
      mentorAnalogy="An architect does not draft the floorplan while the concrete is being poured. The timeline is sacred."
    >
      <div className="w-full flex flex-col gap-4 my-2 text-left">
        {/* Sorters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Pre */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-3 rounded-xl min-h-[140px] flex flex-col justify-between">
            <span className="text-[9px] font-black text-amber-400 uppercase tracking-widest border-b border-[#1a1f2e] pb-1.5 flex items-center gap-1">
              <Clock size={12} /> Pre-Session Setup
            </span>
            <div className="flex flex-col gap-1.5 mt-2 flex-1">
              {tasks.filter(t => placements[t] === "pre").map(t => (
                <div key={t} className="text-[10px] bg-slate-900 border border-[#1a1f2e] p-1.5 rounded font-mono text-slate-300">
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Live */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-3 rounded-xl min-h-[140px] flex flex-col justify-between">
            <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest border-b border-[#1a1f2e] pb-1.5 flex items-center gap-1">
              <Zap size={12} /> Live Execution
            </span>
            <div className="flex flex-col gap-1.5 mt-2 flex-1">
              {tasks.filter(t => placements[t] === "live").map(t => (
                <div key={t} className="text-[10px] bg-slate-900 border border-[#1a1f2e] p-1.5 rounded font-mono text-slate-300">
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Post */}
          <div className="bg-[#080d1a] border border-[#1a1f2e] p-3 rounded-xl min-h-[140px] flex flex-col justify-between">
            <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest border-b border-[#1a1f2e] pb-1.5 flex items-center gap-1">
              <BookOpen size={12} /> Post-Session Audit
            </span>
            <div className="flex flex-col gap-1.5 mt-2 flex-1">
              {tasks.filter(t => placements[t] === "post").map(t => (
                <div key={t} className="text-[10px] bg-slate-900 border border-[#1a1f2e] p-1.5 rounded font-mono text-slate-300">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Task Cards to Assign */}
        <div className="bg-[#05080f] border border-[#1a1f2e] p-4 rounded-xl">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Tasks to Sort:</span>
          <div className="flex flex-col gap-2 mt-2">
            {tasks.filter(t => placements[t] === "unassigned").map(t => (
              <div key={t} className="flex items-center justify-between bg-slate-900/40 border border-[#1a1f2e] p-2 rounded">
                <span className="text-[11px] font-medium text-slate-300">{t}</span>
                <div className="flex gap-1">
                  <button onClick={() => handleAssign(t, "pre")} className="px-2 py-1 bg-amber-950/40 hover:bg-amber-900/30 text-amber-400 border border-amber-800/20 text-[8px] font-black uppercase rounded">Pre</button>
                  <button onClick={() => handleAssign(t, "live")} className="px-2 py-1 bg-blue-950/40 hover:bg-blue-900/30 text-blue-400 border border-blue-800/20 text-[8px] font-black uppercase rounded">Live</button>
                  <button onClick={() => handleAssign(t, "post")} className="px-2 py-1 bg-emerald-950/40 hover:bg-emerald-900/30 text-emerald-400 border border-emerald-800/20 text-[8px] font-black uppercase rounded">Post</button>
                </div>
              </div>
            ))}
            {tasks.filter(t => placements[t] === "unassigned").length === 0 && (
              <p className="text-[10px] text-slate-500 italic">All tasks assigned. Click 'Check Protocol' to evaluate.</p>
            )}
          </div>
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#1a1f2e]">
          <div className={cn("text-[10px] font-mono leading-relaxed", isCorrect ? "text-emerald-400" : "text-slate-400")}>
            {message}
          </div>
          <div className="flex gap-2">
            <button
              onClick={resetStack}
              className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-[10px] font-black uppercase rounded"
            >
              Reset
            </button>
            <button
              onClick={checkSolution}
              className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 text-[10px] font-black uppercase rounded"
            >
              Check Protocol
            </button>
          </div>
        </div>
      </div>
    </L7Frame>
  );
};

export const Level7GeneralMonitor = ({ visualKey }: { visualKey?: string }) => {
  return (
    <L7Frame title="Execution OS — Live Monitor" id="EXEC-MONITOR">
      <div className="w-full bg-slate-950/40 border border-[#1a1f2e] p-5 rounded-2xl flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-[#1a1f2e] pb-2">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Activity size={12} className="text-amber-400 animate-pulse" />
            Live Execution Status
          </span>
          <span className="text-[10px] font-mono text-amber-400">ACTIVE SESSION</span>
        </div>
        <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-300">
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Pre-Session Protocol...</span>
            <span className="text-emerald-400">COMPLETE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Entry Zones Locked...</span>
            <span className="text-amber-400">3 ACTIVE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Max-Loss Limit Set...</span>
            <span className="text-emerald-400">LOCKED</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Scenario Branches Ready...</span>
            <span className="text-amber-400">PRIMARY + ALT</span>
          </div>
          <div className="flex justify-between font-bold text-amber-400">
            <span className="text-slate-500">&gt; Active VisualKey:</span>
            <span>{visualKey || "GENERAL"}</span>
          </div>
        </div>
      </div>
    </L7Frame>
  );
};

// Router component reading visualKey and returning the appropriate interactive visual layout
export const Level7PlaceholderVisual = ({ visualKey, ...props }: { visualKey?: string }) => {
  switch (visualKey) {
    case "live-price-reader":
      return <LivePriceReaderVisual {...props} />;
    case "open-trade-manager":
      return <OpenTradeManagerVisual {...props} />;
    case "spread-slippage-meter":
      return <SpreadSlippageMeterVisual {...props} />;
    case "partial-profit-engine":
      return <PartialProfitEngine {...props} />;
    case "news-event-protocol":
      return <NewsEventProtocol {...props} />;
    case "multi-pair-exec-grid":
      return <MultiPairExecGrid {...props} />;
    case "gold-exec-specifics":
      return <GoldExecSpecifics {...props} />;
    case "crypto-exec-specifics":
      return <CryptoExecSpecifics {...props} />;
    case "habit-execution-stack":
      return <HabitExecutionStack {...props} />;
    default:
      return <Level7GeneralMonitor visualKey={visualKey} {...props} />;
  }
};

