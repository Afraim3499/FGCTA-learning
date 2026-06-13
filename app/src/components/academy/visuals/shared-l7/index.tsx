"use client";

import React, { useState } from "react";
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
// 4. PLACEHOLDER — General L7 visual for recap modules
// ─────────────────────────────────────────────────────────────────────────────
export const Level7PlaceholderVisual = () => {
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
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Debrief Template Ready...</span>
            <span className="text-slate-500">STANDBY</span>
          </div>
        </div>
      </div>
    </L7Frame>
  );
};
