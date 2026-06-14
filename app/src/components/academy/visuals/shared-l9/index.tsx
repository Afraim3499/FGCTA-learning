"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Shield,
  ArrowRight,
  Brain,
  Sliders,
  Settings,
  LineChart,
  Award,
  Lock,
  Play,
  RefreshCw,
  BarChart2,
  DollarSign,
  Activity,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useMentorNote } from "../../lesson-workspace/MentorNoteContext";

// L9Frame — "Certification & Institutional" premium charcoal/emerald/gold theme
const L9Frame = ({
  children,
  title,
  id,
  mentorText: defaultMentorText = "Certification requires complete operational mastery. You are no longer just planning trades — you are managing capital under institutional drawdown constraints, volatility stress gates, and strict risk matrices.",
  mentorAnalogy: defaultMentorAnalogy = "Like a commercial airline captain undergoing a flight simulator checkride under extreme crosswinds. The examiner is not testing if you can fly in clear weather, but how you react when the primary systems fail.",
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
    <div className="w-full bg-[#050908] border border-[#11241f] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-2xl text-left min-h-[500px] text-white">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#153e36_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />

      {/* Gold premium highlight strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-500 to-emerald-500" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-[#11241f] pb-4 shrink-0">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 mb-1">
            <Award size={12} className="text-amber-400 animate-pulse" />
            <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Institutional Portfolio Manager — Level 9</span>
          </div>
          <h4 className="text-sm font-black text-amber-400 uppercase tracking-tight italic leading-tight">{title}</h4>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Audit Code</span>
            <span className="text-[10px] font-mono text-emerald-300 font-bold">{id}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0">
        {children}
      </div>

      {/* Mentor insight */}
      <div className="w-full mt-6 pt-5 border-t border-[#11241f] flex flex-col gap-2 shrink-0 text-left relative z-10">
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 bg-emerald-950/40 text-emerald-400 text-[8px] font-black uppercase tracking-widest rounded-sm border border-emerald-800/20">
            Institutional Desk Coach
          </div>
          <div className="h-px flex-1 bg-[#11241f]" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-200 leading-relaxed">{activeMentorText}</p>
            {activeMentorAnalogy && (
              <p className="mt-1.5 text-[11px] text-slate-400 italic leading-snug">
                <span className="font-black uppercase text-[9px] mr-2 text-amber-400 not-italic">Evaluation Analogy:</span>
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
// 1. CERTIFICATION SCORECARD
// ─────────────────────────────────────────────────────────────────────────────
export const CertificationScorecard = () => {
  const [passingRisk, setPassingRisk] = useState<boolean>(true);
  const [passingProcess, setPassingProcess] = useState<boolean>(true);
  const [passingExpectancy, setPassingExpectancy] = useState<boolean>(true);

  // Score Calculations
  const baseScore = 65;
  const score = baseScore + (passingRisk ? 12 : 0) + (passingProcess ? 13 : 0) + (passingExpectancy ? 10 : 0);
  const isPassing = score >= 80;

  return (
    <L9Frame
      title="Final Certification Grading Scorecard"
      id="CERT-SCORE-9.1"
      mentorText="The Lurnava Certification is binary: you either conform 100% to the process rules, or you fail. Profitability is secondary; rule compliance and statistical stability are everything."
      mentorAnalogy="A surgeon is not graded on whether the patient feels happy. They are graded on adherence to sterile protocol, suture accuracy, and surgical checks. A perfect result with broken protocol is a failed surgery."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* Main Status Hub */}
        <div className="grid grid-cols-2 gap-4">
          {/* Score Circle Panel */}
          <div className="bg-[#08100e] border border-[#11241f] rounded-2xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-2">Aggregate Grade</span>
            <div className={cn("text-4xl font-black font-mono tracking-tight", isPassing ? "text-emerald-400" : "text-amber-500")}>
              {score}%
            </div>
            <span className={cn("text-[9px] font-black uppercase mt-2 px-2 py-0.5 rounded-full border", 
              isPassing 
                ? "bg-emerald-950/40 text-emerald-400 border-emerald-800/40" 
                : "bg-amber-950/40 text-amber-400 border-amber-800/40"
            )}>
              {isPassing ? "CRUCIBLE PASSED" : "CRUCIBLE FAILED (MIN 80%)"}
            </span>
          </div>

          {/* Metric Status Grid */}
          <div className="flex flex-col gap-2">
            {/* Metric 1 */}
            <div 
              onClick={() => setPassingRisk(!passingRisk)} 
              className={cn("bg-[#08100e] border p-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-all",
                passingRisk ? "border-emerald-800/40 hover:border-emerald-700/60" : "border-red-900/40 hover:border-red-800/60"
              )}
            >
              <div className="text-left">
                <div className="text-[9px] font-black text-slate-300 uppercase leading-none mb-1">Max Drawdown Gate</div>
                <div className="text-[10px] font-mono text-slate-400">{passingRisk ? "Max Peak-to-Trough < 5%" : "Drawdown Breached (> 5%)"}</div>
              </div>
              {passingRisk ? <CheckCircle2 size={14} className="text-emerald-400" /> : <AlertTriangle size={14} className="text-red-400 animate-pulse" />}
            </div>

            {/* Metric 2 */}
            <div 
              onClick={() => setPassingProcess(!passingProcess)}
              className={cn("bg-[#08100e] border p-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-all",
                passingProcess ? "border-emerald-800/40 hover:border-emerald-700/60" : "border-red-900/40 hover:border-red-800/60"
              )}
            >
              <div className="text-left">
                <div className="text-[9px] font-black text-slate-300 uppercase leading-none mb-1">Rulebook Discipline</div>
                <div className="text-[10px] font-mono text-slate-400">{passingProcess ? "Zero Early-Exit Errors" : "Impulsive Exit Logged"}</div>
              </div>
              {passingProcess ? <CheckCircle2 size={14} className="text-emerald-400" /> : <AlertTriangle size={14} className="text-red-400 animate-pulse" />}
            </div>

            {/* Metric 3 */}
            <div 
              onClick={() => setPassingExpectancy(!passingExpectancy)}
              className={cn("bg-[#08100e] border p-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-all",
                passingExpectancy ? "border-emerald-800/40 hover:border-emerald-700/60" : "border-red-900/40 hover:border-red-800/60"
              )}
            >
              <div className="text-left">
                <div className="text-[9px] font-black text-slate-300 uppercase leading-none mb-1">Statistical Expectancy</div>
                <div className="text-[10px] font-mono text-slate-400">{passingExpectancy ? "Expectancy > +0.3 R" : "Expectancy < +0.3 R"}</div>
              </div>
              {passingExpectancy ? <CheckCircle2 size={14} className="text-emerald-400" /> : <AlertTriangle size={14} className="text-red-400 animate-pulse" />}
            </div>
          </div>
        </div>

        {/* Audit Instructions */}
        <div className="bg-slate-950/40 border border-[#11241f] p-3 rounded-xl">
          <p className="text-[10px] leading-relaxed text-slate-400 text-left">
            <span className="text-amber-400 font-bold uppercase mr-1">Certification Rule:</span>
            Toggle the parameters above to simulate grading conditions. All three institutional gates must show <span className="text-emerald-400 font-bold">active validation</span> to clear the Level 9 Crucible requirements.
          </p>
        </div>
      </div>
    </L9Frame>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. PORTFOLIO RISK SIMULATOR
// ─────────────────────────────────────────────────────────────────────────────
export const PortfolioRiskSimulator = () => {
  const [forexAlloc, setForexAlloc] = useState<number>(40);
  const [goldAlloc, setGoldAlloc] = useState<number>(30);
  const [correlation, setCorrelation] = useState<number>(0.2); // -1.0 to 1.0

  const cryptoAlloc = Math.max(0, 100 - forexAlloc - goldAlloc);

  // Calculations for simulated Sharpe and Drawdown
  // Base volatility increases with correlation and crypto weight
  const baseVolatility = 8;
  const correlationFactor = correlation > 0 ? correlation * 12 : correlation * 4;
  const cryptoFactor = (cryptoAlloc / 100) * 15;
  const portfolioVolatility = Math.max(4, baseVolatility + correlationFactor + cryptoFactor);

  // Return calculation (mocked based on allocations)
  const portfolioReturn = (forexAlloc * 0.12 + goldAlloc * 0.18 + cryptoAlloc * 0.28) / 10;

  // Sharpe Ratio = Return / Volatility
  const sharpe = (portfolioReturn / (portfolioVolatility / 10)).toFixed(2);

  // Peak Drawdown simulation
  const peakDrawdown = (portfolioVolatility * 0.45 + (correlation > 0.5 ? 4 : 0)).toFixed(1);

  return (
    <L9Frame
      title="Multi-Asset Risk & Correlation Simulator"
      id="PORT-RISK-9.2"
      mentorText="Two profitable strategies with 0.8 correlation are not diversification; they represent doubled position sizing on a single macro theme. Diversify correlation to smooth the equity curve."
      mentorAnalogy="A cargo ship must distribute cargo across multiple water-tight hulls. If all cargo is stacked on one side, a single breach capsizes the vessel. Balance your assets to survive market leaks."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* Control Sliders */}
        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-2xl flex flex-col gap-3">
          {/* Forex Allocation */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[11px] font-bold">
              <span className="text-slate-400">Forex Allocation: {forexAlloc}%</span>
              <span className="text-slate-500">Gold: {goldAlloc}% | Crypto: {cryptoAlloc}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="80"
              value={forexAlloc}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setForexAlloc(val);
                if (val + goldAlloc > 100) {
                  setGoldAlloc(100 - val);
                }
              }}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Gold Allocation */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[11px] font-bold">
              <span className="text-slate-400">Gold Allocation: {goldAlloc}%</span>
              <span className="text-slate-500">Remaining Capital auto-routed to Crypto</span>
            </div>
            <input
              type="range"
              min="10"
              max="80"
              value={goldAlloc}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setGoldAlloc(val);
                if (val + forexAlloc > 100) {
                  setForexAlloc(100 - val);
                }
              }}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Correlation Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[11px] font-bold">
              <span className="text-slate-400">Strategy Correlation Matrix: {correlation.toFixed(2)}</span>
              <span className={cn("text-[9px] font-black uppercase tracking-wider", 
                correlation > 0.5 ? "text-red-400" : correlation < 0.1 ? "text-emerald-400" : "text-amber-400"
              )}>
                {correlation > 0.5 ? "HIGH CORRELATION RISK" : correlation < 0.1 ? "OPTIMAL DIVERSIFICATION" : "MODERATE OVERLAP"}
              </span>
            </div>
            <input
              type="range"
              min="-0.5"
              max="0.9"
              step="0.1"
              value={correlation}
              onChange={(e) => setCorrelation(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>
        </div>

        {/* Simulator Outputs */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3 text-center">
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Portfolio Volatility</div>
            <div className="text-xs font-black font-mono text-slate-200">{portfolioVolatility.toFixed(1)}%</div>
          </div>
          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3 text-center">
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Sharpe Ratio</div>
            <div className="text-xs font-black font-mono text-emerald-400">{sharpe}</div>
          </div>
          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3 text-center">
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Simulated Drawdown</div>
            <div className="text-xs font-black font-mono text-amber-500">-{peakDrawdown}%</div>
          </div>
        </div>
      </div>
    </L9Frame>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. LIVE CAPITAL PLANNER
// ─────────────────────────────────────────────────────────────────────────────
export const LiveCapitalPlanner = () => {
  const [drawdownGate, setDrawdownGate] = useState<number>(3.5);
  const [leverage, setLeverage] = useState<number>(10);

  // Sizing Rules based on variables
  // Standard position size scale down as drawdown gates get strict, or leverage drops
  const sizeFactor = 1.2;
  const calculatedRiskPerTrade = Math.min(2.0, (drawdownGate / 5) * (leverage / 10) * sizeFactor).toFixed(2);

  // Recovery trades needed calculation
  const recoveryTrades = Math.ceil(drawdownGate / parseFloat(calculatedRiskPerTrade));

  return (
    <L9Frame
      title="Live Capital Sizing & Leverage Gate"
      id="CAP-PLAN-9.3"
      mentorText="Do not match capital size with ego. When trading live capital or prop firm accounts, the maximum risk parameter is defined by the drawdown gate, not your account balance."
      mentorAnalogy="An engineer configures a power grid transformer. If the current spike exceeds the copper winding threshold, the breaker trips to prevent a fire. Your sizing protocol is your capital circuit breaker."
    >
      <div className="w-full flex flex-col gap-4 my-2">
        {/* Variables Panel */}
        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-2xl flex flex-col gap-3">
          {/* Current Equity Drawdown */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[11px] font-bold">
              <span className="text-slate-400">Current Equity Drawdown State: -{drawdownGate.toFixed(1)}%</span>
              <span className="text-slate-500">Circuit Breaker: -5.0%</span>
            </div>
            <input
              type="range"
              min="0"
              max="4.8"
              step="0.2"
              value={drawdownGate}
              onChange={(e) => setDrawdownGate(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Account Leverage Bounds */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[11px] font-bold">
              <span className="text-slate-400">Execution Desk Leverage: {leverage}:1</span>
              <span className="text-slate-500">Max Cap: 20:1</span>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              value={leverage}
              onChange={(e) => setLeverage(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>
        </div>

        {/* Planner Calculations */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3 text-left">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">Dynamically Calculated Risk/Trade</span>
            <div className="text-sm font-black font-mono text-emerald-400">{calculatedRiskPerTrade}%</div>
            <span className="text-[8px] text-slate-400 mt-1 block">Scaled down to defend capital</span>
          </div>

          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3 text-left">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">Trades to Recovery (At 1.5R avg)</span>
            <div className="text-sm font-black font-mono text-amber-500">{recoveryTrades} Trades</div>
            <span className="text-[8px] text-slate-400 mt-1 block">Assuming zero sequence variance</span>
          </div>
        </div>

        {/* Informative Grid note */}
        <div className="bg-slate-950/40 border border-[#11241f] p-3 rounded-xl text-left font-mono text-[9px] text-slate-300">
          <div className="flex justify-between text-slate-400 border-b border-[#11241f]/60 pb-1 mb-1">
            <span>DRAWDOWN STAGE</span>
            <span>ALLOWED SIZE</span>
            <span>LEVERAGE STATE</span>
          </div>
          <div className="flex justify-between font-bold text-slate-200">
            <span className={cn(drawdownGate > 3 ? "text-amber-400" : "text-emerald-400")}>
              {drawdownGate > 3 ? "STAGGERED DANGER" : "OPERATIONAL SAFE"}
            </span>
            <span>{calculatedRiskPerTrade}%</span>
            <span>{leverage}:1</span>
          </div>
        </div>
      </div>
    </L9Frame>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. LEVEL 9 PLACEHOLDER VISUAL
// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// 4. LEVEL 9 PLACEHOLDER ROUTER & COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

export const Level9PlaceholderVisual = ({ visualKey, ...props }: { visualKey?: string }) => {
  switch (visualKey) {
    case "execution-speed-monitor":
      return <ExecutionSpeedMonitor {...props} />;
    case "stress-test-model":
      return <StressTestModel {...props} />;
    case "prop-rulebook-checker":
      return <PropRulebookChecker {...props} />;
    case "multi-asset-allocator":
      return <MultiAssetAllocator {...props} />;
    case "performance-drift-monitor":
      return <PerformanceDriftMonitor {...props} />;
    case "multi-venue-auditor":
      return <MultiVenueAuditor {...props} />;
    case "desk-setup-diagram":
      return <DeskSetupDiagram {...props} />;
    case "multi-strategy-builder":
      return <MultiStrategyBuilder {...props} />;
    case "capital-reporting-grid":
      return <CapitalReportingGrid {...props} />;
    case "final-certification-crucible":
      return <FinalCertificationCrucible {...props} />;
    default:
      return <Level9GeneralMonitor visualKey={visualKey} {...props} />;
  }
};

export const Level9GeneralMonitor = ({ visualKey }: { visualKey?: string }) => {
  return (
    <L9Frame title="Institutional Risk Desk — Live Monitor" id="DESK-MONITOR">
      <div className="w-full bg-[#08100e] border border-[#11241f] p-5 rounded-2xl flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-[#11241f] pb-2">
          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
            <Activity size={12} className="text-emerald-400 animate-pulse" />
            Live Desk Audit Engine
          </span>
          <span className="text-[10px] font-mono text-emerald-400">DATABASE STATUS</span>
        </div>
        <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-300">
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Prop Audit Engine...</span>
            <span className="text-emerald-400">SYNCED</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Portfolio Allocator...</span>
            <span className="text-emerald-400">100% OK</span>
          </div>
          <div className="flex justify-between font-bold text-emerald-400">
            <span className="text-slate-500">&gt; Active VisualKey:</span>
            <span>{visualKey || "GENERAL"}</span>
          </div>
        </div>
      </div>
    </L9Frame>
  );
};

export const ExecutionSpeedMonitor = () => {
  const [latency, setLatency] = useState<number>(100);
  const [orderType, setOrderType] = useState<"market" | "limit">("market");
  const [isSending, setIsSending] = useState(false);
  const [lastSlip, setLastSlip] = useState<number | null>(null);

  // Slippage is dynamic based on latency
  const mockSlippage = orderType === "market" ? (latency / 100) * 0.15 : 0.0;
  const fillRate = orderType === "limit" ? Math.max(10, 100 - Math.round(latency / 4.5)) : 100;

  const triggerOrder = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setLastSlip(mockSlippage);
    }, 600);
  };

  return (
    <L9Frame
      title="Latency Slippage Impact Monitor"
      id="SPEED-MON-9.4"
      mentorText="Execution speed is the difference between a profitable strategy and transaction drag decay. A 200ms connection delay exposes your trade to retail market makers front-running orders, creating execution drag."
      mentorAnalogy="An elite sprinter running on mud (high latency) vs a running track (low latency). The power is the same, but the drag reduces speed and performance."
    >
      <div className="w-full flex flex-col gap-4 text-left font-mono text-xs">
        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="text-[9px] text-slate-400 uppercase">Network Latency:</span>
              <span className={cn("font-bold font-mono", latency > 200 ? "text-red-400" : "text-emerald-400")}>
                {latency} ms
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="500"
              step="5"
              value={latency}
              onChange={(e) => setLatency(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1 animate-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[9px] text-slate-400 uppercase">Order Routing Protocol:</span>
            <div className="flex gap-1">
              <button
                onClick={() => setOrderType("market")}
                className={cn("px-2.5 py-1 border rounded uppercase text-[9px] font-bold transition-all",
                  orderType === "market" ? "bg-emerald-950/40 border-emerald-500 text-emerald-400" : "bg-slate-950 border-slate-900 text-slate-500"
                )}
              >
                Market Order
              </button>
              <button
                onClick={() => setOrderType("limit")}
                className={cn("px-2.5 py-1 border rounded uppercase text-[9px] font-bold transition-all",
                  orderType === "limit" ? "bg-emerald-950/40 border-emerald-500 text-emerald-400" : "bg-slate-950 border-slate-900 text-slate-500"
                )}
              >
                Limit Order
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">Simulated Slippage Drag</span>
            <span className={cn("text-sm font-black font-mono", mockSlippage > 0.3 ? "text-red-400" : "text-emerald-400")}>
              {orderType === "market" ? `${mockSlippage.toFixed(3)} R` : "0.000 R (No Slip)"}
            </span>
          </div>

          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">Queue Fill Probability</span>
            <span className="text-sm font-black font-mono text-slate-200">{fillRate}%</span>
          </div>
        </div>

        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex items-center justify-between">
          <button
            onClick={triggerOrder}
            disabled={isSending}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-slate-950 text-xs font-black uppercase rounded-lg transition-all flex items-center gap-1"
          >
            {isSending ? <RefreshCw className="animate-spin" size={10} /> : <Play size={10} />}
            Route Execution
          </button>
          <div className="text-right">
            <span className="text-[8px] text-slate-500 uppercase block">Execution Event Status</span>
            <span className="text-[10px] font-bold text-slate-300">
              {isSending ? "Routing via Direct Fiber..." : lastSlip !== null ? `Filled! Cost: -${lastSlip.toFixed(3)}R` : "Idle"}
            </span>
          </div>
        </div>
      </div>
    </L9Frame>
  );
};

export const StressTestModel = () => {
  const [shockType, setShockType] = useState<"crash" | "dxy" | "spread">("crash");
  const [allocation, setAllocation] = useState<"balanced" | "concentrated">("balanced");

  const results = {
    crash: {
      balanced: { drop: "-4.2%", time: "18 Days", breach: false, desc: "FX and Gold buffer Crypto liquidations." },
      concentrated: { drop: "-19.6%", time: "95 Days", breach: true, desc: "Severe crypto focus causes total protocol risk gate shutdown." }
    },
    dxy: {
      balanced: { drop: "-2.8%", time: "9 Days", breach: false, desc: "DXY rate spike offsets evenly across short positions." },
      concentrated: { drop: "-8.5%", time: "42 Days", breach: true, desc: "Aggregated Dollar risk breaches standard daily loss limits." }
    },
    spread: {
      balanced: { drop: "-1.5%", time: "4 Days", breach: false, desc: "Wide bank spreads impact scalps but cushion long swings." },
      concentrated: { drop: "-6.2%", time: "28 Days", breach: true, desc: "Crypto funding decay drag matches bid-ask liquidity freeze." }
    }
  };

  const current = results[shockType][allocation];

  return (
    <L9Frame
      title="Portfolio Systemic Stress Tester"
      id="STRESS-9.5"
      mentorText="A strategy that performs in normal markets will blow up during a correlation cascade. A stress test simulates historical black swan events to verify that your maximum capital exposure remains bounded."
      mentorAnalogy="A bridge engineer doesn't test the structure with a normal car. They simulate a category-5 hurricane and a 50-ton freight train crossing simultaneously."
    >
      <div className="w-full flex flex-col gap-4 text-left font-mono text-xs">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] text-slate-400 uppercase">Select Volatility Shock:</span>
            <select
              value={shockType}
              onChange={(e: any) => setShockType(e.target.value)}
              className="bg-slate-950 border border-[#11241f] text-[11px] font-bold text-emerald-300 rounded p-2 outline-none"
            >
              <option value="crash">Flash Liquidation Sweep</option>
              <option value="dxy">Macro Dollar Rate Shock (+4%)</option>
              <option value="spread">Economic Spread Freeze</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[9px] text-slate-400 uppercase">Portfolio Profile:</span>
            <div className="flex gap-1.5 h-full">
              <button
                onClick={() => setAllocation("balanced")}
                className={cn("flex-1 py-2 px-2 border rounded uppercase text-[9px] font-bold transition-all",
                  allocation === "balanced" ? "bg-emerald-950/40 border-emerald-500 text-emerald-400" : "bg-slate-950 border-slate-900 text-slate-500"
                )}
              >
                Balanced
              </button>
              <button
                onClick={() => setAllocation("concentrated")}
                className={cn("flex-1 py-2 px-2 border rounded uppercase text-[9px] font-bold transition-all",
                  allocation === "concentrated" ? "bg-emerald-950/40 border-emerald-500 text-emerald-400" : "bg-slate-950 border-slate-900 text-slate-500"
                )}
              >
                Concentrated
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-2">
            <div>
              <span className="text-[8px] text-slate-500 uppercase block mb-1">Max Shock Drawdown</span>
              <span className={cn("text-xs font-black font-mono", current.breach ? "text-red-400" : "text-emerald-400")}>
                {current.drop}
              </span>
            </div>
            <div>
              <span className="text-[8px] text-slate-500 uppercase block mb-1">Est. Recovery Duration</span>
              <span className="text-xs font-black font-mono text-slate-200">{current.time}</span>
            </div>
            <div>
              <span className="text-[8px] text-slate-500 uppercase block mb-1">Prop Compliance</span>
              <span className={cn("text-[9px] font-black uppercase", current.breach ? "text-red-400" : "text-emerald-400")}>
                {current.breach ? "BREACHED" : "COMPLIANT"}
              </span>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 border-t border-[#11241f] pt-2.5 leading-relaxed">
            {current.desc}
          </p>
        </div>
      </div>
    </L9Frame>
  );
};

export const PropRulebookChecker = () => {
  const [lossAmount, setLossAmount] = useState<number>(3000); // $100k scale
  const [holdWeekend, setHoldWeekend] = useState<boolean>(false);
  const [leverageExceeded, setLeverageExceeded] = useState<boolean>(false);

  // Daily Loss Limit: $5,000 (5%)
  const dailyBreach = lossAmount >= 5000;
  const isCompliant = !dailyBreach && !holdWeekend && !leverageExceeded;

  return (
    <L9Frame
      title="Prop Firm Compliance Auditor"
      id="RULE-CHECK-9.6"
      mentorText="Prop firm rulebooks are designed mathematically to filter out gamblers. Breaking a single rule immediately revokes your account funding. Do not leave rules to memory — audit them systematically."
      mentorAnalogy="A high-security vault door requires two keys turned simultaneously. If you try to force the handle without both keys, the alarm triggers and locks you out."
    >
      <div className="w-full flex flex-col gap-4 text-left font-mono text-xs">
        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="text-[9px] text-slate-400 uppercase">Simulated Daily Loss:</span>
              <span className={cn("font-bold font-mono", dailyBreach ? "text-red-400" : "text-emerald-400")}>
                ${lossAmount.toLocaleString()} / $5,000 Limit
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="7000"
              step="500"
              value={lossAmount}
              onChange={(e) => setLossAmount(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={holdWeekend}
                onChange={(e) => setHoldWeekend(e.target.checked)}
                className="rounded border-[#11241f] bg-slate-950 text-emerald-500 focus:ring-emerald-500"
              />
              <span className="text-[10px] text-slate-300">Unhedged Weekend Hold</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={leverageExceeded}
                onChange={(e) => setLeverageExceeded(e.target.checked)}
                className="rounded border-[#11241f] bg-slate-950 text-emerald-500 focus:ring-emerald-500"
              />
              <span className="text-[10px] text-slate-300">Leverage Gate Breach (&gt;1:10)</span>
            </label>
          </div>
        </div>

        <div className={cn("p-4 rounded-xl border flex items-center justify-between",
          isCompliant ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-400" : "bg-red-950/20 border-red-500/20 text-red-400"
        )}>
          <div className="flex items-center gap-2">
            {isCompliant ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} className="animate-pulse" />}
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider block">Compliance Audit Status</span>
              <span className="text-[10px] font-bold text-slate-300">
                {isCompliant ? "ACCOUNT IN STANDING (PASSING)" : "PROTOCOL DISQUALIFIED (FAIL)"}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[8px] text-slate-500 uppercase block">Active Violations</span>
            <span className="text-[10px] font-bold text-slate-200">
              {[dailyBreach && "Daily Loss Limit", holdWeekend && "Weekend Rule", leverageExceeded && "Leverage Gate"].filter(Boolean).join(", ") || "None"}
            </span>
          </div>
        </div>
      </div>
    </L9Frame>
  );
};

export const MultiAssetAllocator = () => {
  const [fxAlloc, setFxAlloc] = useState<number>(40);
  const [goldAlloc, setGoldAlloc] = useState<number>(40);

  const cryptoAlloc = Math.max(0, 100 - fxAlloc - goldAlloc);

  // Covariance factor estimation
  const covMatrix = {
    fx_gold: 0.15,
    fx_crypto: 0.35,
    gold_crypto: 0.05
  };

  const weightedCovariance = (
    (fxAlloc * goldAlloc * covMatrix.fx_gold) +
    (fxAlloc * cryptoAlloc * covMatrix.fx_crypto) +
    (goldAlloc * cryptoAlloc * covMatrix.gold_crypto)
  ) / 1000;

  return (
    <L9Frame
      title="Covariance & Capital Allocator"
      id="ALLOCATOR-9.7"
      mentorText="Allocating capital by percent is only the surface. True risk allocation requires studying strategy covariance matrices. Uncorrelated assets keep the equity curve moving up during individual drawdowns."
      mentorAnalogy="A restaurant menu balancing dessert, main course, and drinks. If they only serve main courses, customers eat less. Balance the offerings to keep total volume high."
    >
      <div className="w-full flex flex-col gap-4 text-left font-mono text-xs">
        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between">
              <span className="text-[9px] text-slate-400 uppercase">Forex Allocation:</span>
              <span className="text-emerald-400 font-bold">{fxAlloc}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={fxAlloc}
              onChange={(e) => {
                const val = Number(e.target.value);
                setFxAlloc(val);
                if (val + goldAlloc > 100) setGoldAlloc(100 - val);
              }}
              className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between">
              <span className="text-[9px] text-slate-400 uppercase">Gold Allocation:</span>
              <span className="text-emerald-400 font-bold">{goldAlloc}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={goldAlloc}
              onChange={(e) => {
                const val = Number(e.target.value);
                setGoldAlloc(val);
                if (val + fxAlloc > 100) setFxAlloc(100 - val);
              }}
              className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1"
            />
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 pt-2 border-t border-[#11241f]/60">
            <span>Crypto Allocation (Residual):</span>
            <span className="font-bold text-slate-200">{cryptoAlloc}%</span>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="bg-[#08100e] border border-[#11241f] p-3 rounded-xl">
          <span className="text-[8px] text-slate-500 uppercase block mb-2">Correlation Matrix Coefficients</span>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <div className="bg-slate-950/60 p-1.5 rounded border border-slate-900">
              <span className="text-slate-500 block text-[7px] uppercase">FX / Gold</span>
              <span className="font-bold text-emerald-400">0.15</span>
            </div>
            <div className="bg-slate-950/60 p-1.5 rounded border border-slate-900">
              <span className="text-slate-500 block text-[7px] uppercase">FX / Crypto</span>
              <span className="font-bold text-amber-500">0.35</span>
            </div>
            <div className="bg-slate-950/60 p-1.5 rounded border border-slate-900">
              <span className="text-slate-500 block text-[7px] uppercase">Gold / Crypto</span>
              <span className="font-bold text-emerald-400">0.05</span>
            </div>
          </div>
        </div>

        <div className="bg-[#08100e] border border-[#11241f] p-3 rounded-xl flex justify-between items-center">
          <div>
            <span className="text-[8px] text-slate-500 uppercase block">Weighted Covariance Index</span>
            <span className="text-xs font-black font-mono text-slate-200">{weightedCovariance.toFixed(3)}</span>
          </div>
          <span className="text-[8px] font-black uppercase text-emerald-500 bg-emerald-950/20 border border-emerald-950 px-2 py-0.5 rounded">
            PORTFOLIO DIVERSIFIED
          </span>
        </div>
      </div>
    </L9Frame>
  );
};

export const PerformanceDriftMonitor = () => {
  const [delay, setDelay] = useState<number>(30); // in seconds

  // Target RR: 3.0R
  // Drift RR degradation: target_rr - (delay / 30) * 0.8
  const driftedRR = Math.max(0.5, 3.0 - (delay / 30) * 0.75);
  const expectancyBaseline = (0.5 * 3.0 - 0.5 * 1.0).toFixed(2); // Winrate 50%, RR 3.0
  const expectancyDrifted = (0.5 * driftedRR - 0.5 * 1.0).toFixed(2);

  const expectancyColor = parseFloat(expectancyDrifted) > 0.5 ? "text-emerald-400" : parseFloat(expectancyDrifted) > 0 ? "text-amber-400" : "text-red-400";

  return (
    <L9Frame
      title="Strategy Performance Drift Monitor"
      id="DRIFT-MON-9.8"
      mentorText="Strategy drift occurs when minor compliance slips — like delayed execution triggers — aggregate over 100 trades, collapsing your mathematical expectancy and turning an edge into a loss."
      mentorAnalogy="A slight wheel alignment deviation in an F1 car. At low speeds, it's unnoticeable, but at 200mph, it pulls the vehicle off-track during high-speed corners."
    >
      <div className="w-full flex flex-col gap-4 text-left font-mono text-xs">
        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="text-[9px] text-slate-400 uppercase">Trigger Entry Delay:</span>
              <span className={cn("font-bold font-mono", delay > 60 ? "text-red-400" : "text-emerald-400")}>
                {delay} Seconds Late
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="120"
              step="10"
              value={delay}
              onChange={(e) => setDelay(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3 flex flex-col justify-between">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">Baseline Expectancy</span>
            <span className="text-sm font-black font-mono text-emerald-400">+{expectancyBaseline} R / Trade</span>
          </div>

          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3 flex flex-col justify-between">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">Drifted Expectancy</span>
            <span className={cn("text-sm font-black font-mono", expectancyColor)}>+{expectancyDrifted} R / Trade</span>
          </div>
        </div>

        {parseFloat(expectancyDrifted) <= 0.1 && (
          <div className="p-3 bg-red-950/20 border border-red-500/20 rounded-xl text-[10px] text-red-400 leading-relaxed font-mono flex gap-2">
            <AlertTriangle size={12} className="shrink-0 mt-0.5 text-red-400 animate-pulse" />
            <span>
              <strong>🚨 EDGE COLLAPSED:</strong> Delayed entries have compressed your risk-to-reward ratio from 3.0 to {driftedRR.toFixed(2)}. The strategy's edge is gone. Enforce exact entry execution.
            </span>
          </div>
        )}
      </div>
    </L9Frame>
  );
};

export const MultiVenueAuditor = () => {
  const [venueA, setVenueA] = useState(1.0822);
  const [venueB, setVenueB] = useState(1.0825);
  const [gasDrag] = useState(0.0001); // in pip value equivalent

  useEffect(() => {
    const timer = setInterval(() => {
      setVenueA(1.0820 + Math.random() * 0.0006);
      setVenueB(1.0821 + Math.random() * 0.0005);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const rawDiscrepancy = Math.abs(venueA - venueB);
  const netProfit = Math.max(0, rawDiscrepancy - gasDrag);

  return (
    <L9Frame
      title="Multi-Exchange Price Auditor"
      id="VENUE-AUDIT-9.9"
      mentorText="Price differences between venues look like free money but are often locked by trading fees and network lag. If transaction costs exceed the price gap, the arbitrage has negative yield."
      mentorAnalogy="Buying water bottle cases at a wholesale warehouse to resell at a market. If the gas cost to drive between locations exceeds the discount, you are losing money on each trip."
    >
      <div className="w-full flex flex-col gap-4 text-left font-mono text-xs">
        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1 p-2 bg-slate-950/40 rounded border border-[#11241f]">
            <span className="text-[8px] text-slate-500 uppercase">Venue A (CEX Direct Feed)</span>
            <span className="text-sm font-black font-mono text-emerald-400 animate-pulse">{venueA.toFixed(4)}</span>
          </div>

          <div className="flex flex-col gap-1 p-2 bg-slate-950/40 rounded border border-[#11241f]">
            <span className="text-[8px] text-slate-500 uppercase">Venue B (DEX LP Pool)</span>
            <span className="text-sm font-black font-mono text-amber-500 animate-pulse">{venueB.toFixed(4)}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3">
            <span className="text-[8px] text-slate-500 uppercase block mb-1">Gross Discrepancy</span>
            <span className="text-xs font-black text-slate-200">{rawDiscrepancy.toFixed(4)}</span>
          </div>

          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3">
            <span className="text-[8px] text-slate-500 uppercase block mb-1">Routing & Fee Drag</span>
            <span className="text-xs font-black text-red-400">-{gasDrag.toFixed(4)}</span>
          </div>

          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3">
            <span className="text-[8px] text-slate-500 uppercase block mb-1">Net Arbitrage Payout</span>
            <span className={cn("text-xs font-black", netProfit > 0.0001 ? "text-emerald-400" : "text-amber-500")}>
              {netProfit > 0 ? `+${netProfit.toFixed(4)}` : "0.0000"}
            </span>
          </div>
        </div>

        <div className="bg-slate-950/40 border border-[#11241f] p-3 rounded-xl text-slate-400 text-[10px] leading-relaxed">
          <span className="text-emerald-400 font-bold uppercase mr-1">Arbitrage Rule:</span>
          Feeds are updated every second. Notice how the spread gap fluctuates. If the discrepancy is smaller than Routing Drag, do not route the trade.
        </div>
      </div>
    </L9Frame>
  );
};

export const DeskSetupDiagram = () => {
  const [activeScreen, setActiveScreen] = useState<"macro" | "center" | "risk">("center");

  const monitorData = {
    macro: {
      title: "Left Screen: Macro & HTF Narrative",
      details: "Displays central bank yield differentials, DXY indexes, and daily/weekly structural trendlines. Used for setting the macro bias before execution."
    },
    center: {
      title: "Center Screen: LTF Execution & Depth",
      details: "Displays order book tickers, 15m order blocks, and real-time execution buttons. This is your primary screen during the New York and London open."
    },
    risk: {
      title: "Right Screen: Risk Monitor & Journal",
      details: "Displays daily drawdown compliant limits, open trade manager scale-outs, news release clocks, and process tags journal."
    }
  };

  const current = monitorData[activeScreen];

  return (
    <L9Frame
      title="Institutional Portfolio Monitor Array"
      id="DESK-SETUP-9.10"
      mentorText="A professional desk layout filters information overload. Separate macro narrative formulation from lower timeframe executions and keep risk metrics open on a dedicated display."
      mentorAnalogy="An air traffic control room doesn't mix flight schedules, runway radars, and weather forecasts on one display. Every variable has a dedicated workstation."
    >
      <div className="w-full flex flex-col gap-4 text-left font-sans text-xs">
        {/* Visual Desk Monitors Layout */}
        <div className="grid grid-cols-3 gap-2.5 bg-slate-950/60 p-4 rounded-xl border border-[#11241f] relative">
          {/* Monitor Left */}
          <button
            onClick={() => setActiveScreen("macro")}
            className={cn("h-16 border rounded-lg flex flex-col items-center justify-center text-center font-mono transition-all",
              activeScreen === "macro" ? "border-emerald-500 bg-emerald-950/30 text-emerald-400 shadow-md" : "border-slate-800 bg-[#08100e] text-slate-500 hover:border-slate-700"
            )}
          >
            <LineChart size={14} className={cn("mb-1", activeScreen === "macro" ? "text-emerald-400" : "text-slate-600")} />
            <span className="text-[7px] font-black uppercase tracking-wider">Left: Macro bias</span>
          </button>

          {/* Monitor Center */}
          <button
            onClick={() => setActiveScreen("center")}
            className={cn("h-16 border rounded-lg flex flex-col items-center justify-center text-center font-mono transition-all",
              activeScreen === "center" ? "border-emerald-500 bg-emerald-950/30 text-emerald-400 shadow-md" : "border-slate-800 bg-[#08100e] text-slate-500 hover:border-slate-700"
            )}
          >
            <Activity size={14} className={cn("mb-1", activeScreen === "center" ? "text-emerald-400" : "text-slate-600")} />
            <span className="text-[7px] font-black uppercase tracking-wider">Center: Execution</span>
          </button>

          {/* Monitor Right */}
          <button
            onClick={() => setActiveScreen("risk")}
            className={cn("h-16 border rounded-lg flex flex-col items-center justify-center text-center font-mono transition-all",
              activeScreen === "risk" ? "border-emerald-500 bg-emerald-950/30 text-emerald-400 shadow-md" : "border-slate-800 bg-[#08100e] text-slate-500 hover:border-slate-700"
            )}
          >
            <Shield size={14} className={cn("mb-1", activeScreen === "risk" ? "text-emerald-400" : "text-slate-600")} />
            <span className="text-[7px] font-black uppercase tracking-wider">Right: Risk Desk</span>
          </button>
        </div>

        {/* Selected Display Panel */}
        <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-4 min-h-[90px] flex flex-col justify-between gap-1">
          <h5 className="text-[10px] font-black text-amber-500 uppercase tracking-wider border-b border-[#11241f] pb-1">
            {current.title}
          </h5>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans mt-2">
            {current.details}
          </p>
        </div>
      </div>
    </L9Frame>
  );
};

export const MultiStrategyBuilder = () => {
  const [stratTrend, setStratTrend] = useState<boolean>(true);
  const [stratReversion, setStratReversion] = useState<boolean>(false);
  const [stratArbitrage, setStratArbitrage] = useState<boolean>(false);

  // Expectancy & Winrates
  // Trend: 45% WR, 2.5R
  // Reversion: 55% WR, 1.5R
  // Arbitrage: 80% WR, 0.5R
  const activeCount = [stratTrend, stratReversion, stratArbitrage].filter(Boolean).length;
  
  let aggregateWinrate = 0;
  let aggregateExpectancy = 0;

  if (activeCount > 0) {
    let wrSum = 0;
    let expSum = 0;
    if (stratTrend) { wrSum += 45; expSum += 0.575; }
    if (stratReversion) { wrSum += 55; expSum += 0.375; }
    if (stratArbitrage) { wrSum += 80; expSum += 0.200; }
    aggregateWinrate = Math.round(wrSum / activeCount);
    aggregateExpectancy = Number((expSum / activeCount).toFixed(3));
  }

  return (
    <L9Frame
      title="Multi-Strategy Edge Scorecard"
      id="STRAT-BUILD-9.11"
      mentorText="An institutional desk doesn't bet on one system. Combining trend-following and mean reversion strategies produces a smoother drawdown profile because the systems profit during opposite market regimes."
      mentorAnalogy="An umbrella vendor who also sells ice cream. If it rains, they sell umbrellas. If it's sunny, they sell ice cream. Their monthly revenue stays stable regardless of weather."
    >
      <div className="w-full flex flex-col gap-4 text-left font-mono text-xs">
        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3">
          <span className="text-[9px] text-slate-400 uppercase">Select Active Strategies:</span>
          
          <div className="flex flex-col gap-2 pt-1.5">
            <label className="flex items-center justify-between cursor-pointer select-none">
              <span className="text-[10px] text-slate-300">Trend Continuation (Forex focus)</span>
              <input
                type="checkbox"
                checked={stratTrend}
                onChange={(e) => setStratTrend(e.target.checked)}
                className="rounded border-[#11241f] bg-slate-950 text-emerald-500 focus:ring-emerald-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer select-none">
              <span className="text-[10px] text-slate-300">Mean Reversion (Gold focus)</span>
              <input
                type="checkbox"
                checked={stratReversion}
                onChange={(e) => setStratReversion(e.target.checked)}
                className="rounded border-[#11241f] bg-slate-950 text-emerald-500 focus:ring-emerald-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer select-none">
              <span className="text-[10px] text-slate-300">Funding Rate Arbitrage (Crypto perpetuals)</span>
              <input
                type="checkbox"
                checked={stratArbitrage}
                onChange={(e) => setStratArbitrage(e.target.checked)}
                className="rounded border-[#11241f] bg-slate-950 text-emerald-500 focus:ring-emerald-500"
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3 flex flex-col justify-between">
            <span className="text-[8px] text-slate-500 uppercase block mb-1">Blended Win Rate</span>
            <span className="text-sm font-black font-mono text-slate-200">
              {activeCount > 0 ? `${aggregateWinrate}%` : "0%"}
            </span>
          </div>

          <div className="bg-[#08100e] border border-[#11241f] rounded-xl p-3 flex flex-col justify-between">
            <span className="text-[8px] text-slate-500 uppercase block mb-1">Portfolio Expectancy</span>
            <span className="text-sm font-black font-mono text-emerald-400">
              {activeCount > 0 ? `+${aggregateExpectancy} R` : "0.00 R"}
            </span>
          </div>
        </div>

        <div className="bg-slate-950/40 border border-[#11241f] p-3 rounded-xl text-slate-400 text-[9px] leading-relaxed">
          <span className="text-amber-500 font-bold uppercase mr-1">Analysis:</span>
          {activeCount === 3
            ? "Optimal combination. Arbitrage yields compress volatility drag while trend systems capture expansion runs."
            : activeCount === 1
            ? "Concentrated risk. Any single system regime shift will cause deep drawdown duration cycles."
            : activeCount === 2
            ? "Balanced diversification. Combining two strategies offers a hedge against core market shifts."
            : "No strategies active. Capital is offline."
          }
        </div>
      </div>
    </L9Frame>
  );
};

export const CapitalReportingGrid = () => {
  const [profit, setProfit] = useState<number>(8000); // dollars
  const [splitRatio, setSplitRatio] = useState<number>(80); // percentage

  const starterCapital = 100000;
  const traderShare = (profit * splitRatio) / 100;
  const firmShare = profit - traderShare;
  const currentEquity = starterCapital + profit;

  return (
    <L9Frame
      title="Capital Reporting & Payout Sheet"
      id="PAYOUT-SHEET-9.12"
      mentorText="Payout reporting on prop accounts enforces payout splits and preserves capital reserves. A professional trader calculates their high-water mark buffer and payouts splits before transferring returns."
      mentorAnalogy="A partner in a venture firm takes their management split and returns the remaining principal capital back to the vault reserve."
    >
      <div className="w-full flex flex-col gap-4 text-left font-mono text-xs">
        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="text-[9px] text-slate-400 uppercase">Simulated Net Profit:</span>
              <span className="font-bold text-emerald-400">${profit.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="20000"
              step="1000"
              value={profit}
              onChange={(e) => setProfit(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1 animate-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[9px] text-slate-400 uppercase">Profit Split Contract:</span>
            <div className="flex gap-1">
              {[70, 80, 90].map((s) => (
                <button
                  key={s}
                  onClick={() => setSplitRatio(s)}
                  className={cn("px-2.5 py-1 border rounded uppercase text-[9px] font-bold transition-all",
                    splitRatio === s ? "bg-emerald-950/40 border-emerald-500 text-emerald-400" : "bg-slate-950 border-slate-900 text-slate-500"
                  )}
                >
                  {s}/{100 - s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3 text-[10px]">
          <div className="flex justify-between border-b border-[#11241f]/60 pb-1.5 font-sans">
            <span className="text-slate-500">Starting Balance:</span>
            <span className="text-slate-200 font-mono">$100,000</span>
          </div>
          <div className="flex justify-between border-b border-[#11241f]/60 pb-1.5 font-sans">
            <span className="text-slate-500">Simulated High-Water Mark:</span>
            <span className="text-slate-200 font-mono">${currentEquity.toLocaleString()}</span>
          </div>
          <div className="flex justify-between border-b border-[#11241f]/60 pb-1.5 font-sans font-bold text-emerald-400">
            <span>Trader Share ({splitRatio}%):</span>
            <span className="font-mono">${traderShare.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-slate-500 font-sans">
            <span>Firm/Desk Reserve split:</span>
            <span className="font-mono">${firmShare.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </L9Frame>
  );
};

export const FinalCertificationCrucible = () => {
  const [gateRisk, setGateRisk] = useState<boolean>(true);
  const [gateDiscipline, setGateDiscipline] = useState<boolean>(true);
  const [gateExpectancy, setGateExpectancy] = useState<boolean>(true);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const allGatesPassed = gateRisk && gateDiscipline && gateExpectancy;

  const handleGenerate = () => {
    if (allGatesPassed) {
      setShowCertificate(true);
    }
  };

  const resetGates = () => {
    setShowCertificate(false);
  };

  return (
    <L9Frame
      title="Level 9 Certification Crucible"
      id="CRUCIBLE-9.13"
      mentorText="Graduation is a statement of operational discipline. Verify all three gates are active to generate your certificate diploma. If any gate fails compliance checks, the certificate locks."
      mentorAnalogy="An pilot's final checkride simulator. If they breach the flight envelope limits on a single test, they do not receive their flight rating stamp."
    >
      <div className="w-full flex flex-col gap-4 text-left font-sans text-xs">
        {!showCertificate ? (
          <>
            <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3">
              <span className="text-[9px] font-mono text-slate-400 uppercase">Institutional Qualification Gates:</span>
              
              <div className="flex flex-col gap-2 pt-1">
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <span className="text-[10px] text-slate-300 font-mono">1. Max Drawdown compliance (&lt;5% Daily)</span>
                  <input
                    type="checkbox"
                    checked={gateRisk}
                    onChange={(e) => { setGateRisk(e.target.checked); resetGates(); }}
                    className="rounded border-[#11241f] bg-slate-950 text-emerald-500 focus:ring-emerald-500"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer select-none">
                  <span className="text-[10px] text-slate-300 font-mono">2. Zero Impulsive/Chasing exits in journal</span>
                  <input
                    type="checkbox"
                    checked={gateDiscipline}
                    onChange={(e) => { setGateDiscipline(e.target.checked); resetGates(); }}
                    className="rounded border-[#11241f] bg-slate-950 text-emerald-500 focus:ring-emerald-500"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer select-none">
                  <span className="text-[10px] text-slate-300 font-mono">3. Expectancy target achieved (&gt;0.3R average)</span>
                  <input
                    type="checkbox"
                    checked={gateExpectancy}
                    onChange={(e) => { setGateExpectancy(e.target.checked); resetGates(); }}
                    className="rounded border-[#11241f] bg-slate-950 text-emerald-500 focus:ring-emerald-500"
                  />
                </label>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!allGatesPassed}
              className={cn("w-full py-3 text-center text-xs font-black uppercase rounded-lg transition-all",
                allGatesPassed
                  ? "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                  : "bg-slate-900 text-slate-600 border border-slate-950 cursor-not-allowed"
              )}
            >
              Generate Graduate Certificate
            </button>
          </>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            {/* Interactive Digital Certificate */}
            <div className="bg-[#050908] border-2 border-amber-500/60 p-6 rounded-[2rem] text-center relative overflow-hidden shadow-2xl w-full">
              {/* Premium Background Gradients */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#153e36_1px,transparent_1px)] bg-[length:16px_16px] opacity-15" />
              <div className="absolute top-0 bottom-0 left-0 right-0 border border-amber-500/20 m-2 rounded-[1.8rem] pointer-events-none" />
              
              {/* Gold Ribbon Seal Icon */}
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border border-amber-300 flex items-center justify-center shadow-lg">
                  <Award size={20} className="text-slate-950" />
                </div>
              </div>

              <span className="text-[9px] font-black tracking-widest text-amber-500 uppercase font-mono block mb-1">
                Lurnava Trading Academy
              </span>
              <h3 className="text-sm font-black font-serif italic text-slate-100 tracking-tight mb-2 leading-none uppercase">
                Diploma of Completion
              </h3>
              <p className="text-[9px] text-slate-400 leading-snug italic max-w-xs mx-auto mb-4 font-sans">
                This certifies that the graduate has successfully cleared all three compliance checkpoints of the Level 9 Crucible, demonstrating complete operational edge and risk management discipline.
              </p>

              <div className="flex justify-between items-end border-t border-[#11241f] pt-4 max-w-xs mx-auto font-mono text-[8px] text-slate-500">
                <div className="text-left">
                  <span className="block font-bold text-slate-400 uppercase">GRADUATE ID</span>
                  <span>LN-IPM-9928</span>
                </div>
                <div className="text-center">
                  <span className="block font-bold text-emerald-400 uppercase">STATUS</span>
                  <span className="text-emerald-400 font-bold">VERIFIED</span>
                </div>
                <div className="text-right">
                  <span className="block font-bold text-slate-400 uppercase">DESK CODE</span>
                  <span>PM-XAU-BTC</span>
                </div>
              </div>
            </div>

            <button
              onClick={resetGates}
              className="w-full py-2 bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-slate-300 text-xs font-black uppercase rounded-lg transition-all"
            >
              Reset Crucible Checklist
            </button>
          </div>
        )}
      </div>
    </L9Frame>
  );
};

// 5. LEVERAGE GATE CALCULATOR COMPONENT
export const LeverageGateCalculator = () => {
  const [accountSize, setAccountSize] = useState<number>(100000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [stopLoss, setStopLoss] = useState<number>(20); // in pips/points
  const [assetClass, setAssetClass] = useState<"forex" | "gold" | "crypto">("forex");

  const riskAmount = (accountSize * riskPercent) / 100;
  
  let positionSizeStr = "";
  let requiredMargin = 0;
  let recommendedLeverage = 1;
  let isExceeded = false;

  if (assetClass === "forex") {
    const lots = riskAmount / (stopLoss * 10);
    positionSizeStr = `${lots.toFixed(2)} Lots`;
    requiredMargin = lots * 100000;
  } else if (assetClass === "gold") {
    const contracts = riskAmount / (stopLoss * 10);
    positionSizeStr = `${contracts.toFixed(2)} Contracts`;
    requiredMargin = contracts * 185000;
  } else {
    const coins = riskAmount / stopLoss;
    positionSizeStr = `${coins.toFixed(3)} Coins`;
    requiredMargin = coins * 60000;
  }

  recommendedLeverage = Math.max(1, Math.round(requiredMargin / accountSize));
  isExceeded = recommendedLeverage > 20;

  return (
    <L9Frame title="Dynamic Leverage Gate Calculator" id="LEVERAGE-GATE"
      mentorText="Leverage is not a tool to grow a small account quickly; it is a mechanism to optimize capital allocation. Always calculate your face value exposure. If your face value exceeds 10x your account equity, your leverage profile is unstable."
      mentorAnalogy="Think of leverage like a hydraulic press. It allows you to lift heavy weights with minimal effort, but if you exceed the structural load limit, the machine explodes. Set tight leverage gates to prevent catastrophic liquidation events.">
      <div className="w-full flex flex-col gap-4 text-left font-mono text-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Controls */}
          <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3">
            <h5 className="text-[10px] font-black uppercase text-emerald-400 border-b border-[#11241f] pb-1.5">Risk Parameters</h5>
            
            <div className="flex flex-col gap-1">
              <span className="text-[9px] text-slate-400 uppercase">Asset Class:</span>
              <div className="flex gap-1.5">
                {(["forex", "gold", "crypto"] as const).map((a) => (
                  <button
                    key={a}
                    onClick={() => setAssetClass(a)}
                    className={cn(
                      "flex-1 py-1 px-2 border rounded uppercase text-[9px] font-bold transition-all",
                      assetClass === a 
                        ? "bg-emerald-950/40 border-emerald-500 text-emerald-400"
                        : "bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300"
                    )}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-[9px] text-slate-400 uppercase">Account Equity:</span>
                <span className="text-emerald-400 font-bold">${accountSize.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={accountSize}
                onChange={(e) => setAccountSize(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-[9px] text-slate-400 uppercase">Risk Percent:</span>
                <span className="text-emerald-400 font-bold">{riskPercent}% (${riskAmount.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min="0.25"
                max="3"
                step="0.25"
                value={riskPercent}
                onChange={(e) => setRiskPercent(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-[9px] text-slate-400 uppercase">Stop Loss ({assetClass === "crypto" ? "Value" : "Pips"}):</span>
                <span className="text-emerald-400 font-bold">{stopLoss} {assetClass === "crypto" ? "USD" : "Pips"}</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={stopLoss}
                onChange={(e) => setStopLoss(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1"
              />
            </div>
          </div>

          {/* Outputs */}
          <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-3">
              <h5 className="text-[10px] font-black uppercase text-amber-500 border-b border-[#11241f] pb-1.5">Calculated Exposure</h5>
              
              <div className="flex justify-between items-center bg-slate-950/80 p-2.5 rounded-lg border border-slate-900">
                <span className="text-slate-400 text-[10px]">Position Size:</span>
                <span className="text-sm font-black text-slate-100">{positionSizeStr}</span>
              </div>

              <div className="flex justify-between items-center bg-slate-950/80 p-2.5 rounded-lg border border-slate-900">
                <span className="text-slate-400 text-[10px]">Total Face Value:</span>
                <span className="text-sm font-black text-slate-100">${requiredMargin.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
              </div>

              <div className="flex justify-between items-center bg-slate-950/80 p-2.5 rounded-lg border border-slate-900">
                <span className="text-slate-400 text-[10px]">Implied Leverage:</span>
                <span className={cn("text-sm font-black", isExceeded ? "text-red-400" : "text-emerald-400")}>
                  {recommendedLeverage}x
                </span>
              </div>
            </div>

            <div className={cn(
              "p-2.5 rounded-lg border text-[10px] leading-snug flex items-center gap-2",
              isExceeded
                ? "bg-red-950/20 border-red-500/20 text-red-400"
                : "bg-emerald-950/20 border-emerald-500/20 text-emerald-400"
            )}>
              {isExceeded ? (
                <>
                  <AlertTriangle size={14} className="shrink-0 text-red-400 animate-pulse" />
                  <span><strong>GATE BREACHED:</strong> Implied leverage is too high for institutional accounts. Adjust size or risk tolerance.</span>
                </>
              ) : (
                <>
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-400" />
                  <span><strong>GATE GREEN:</strong> Leverage profile within institutional bounds. Risk parameters locked.</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </L9Frame>
  );
};

// 6. SHARPE OPTIMIZER COMPONENT
export const SharpeOptimizer = () => {
  const [forexWeight, setForexWeight] = useState<number>(40);
  const [goldWeight, setGoldWeight] = useState<number>(40);
  const [cryptoWeight, setCryptoWeight] = useState<number>(20);

  const handleWeightChange = (type: "forex" | "gold" | "crypto", value: number) => {
    if (type === "forex") {
      const remaining = 100 - value;
      const totalOthers = goldWeight + cryptoWeight;
      if (totalOthers === 0) {
        setGoldWeight(Math.round(remaining / 2));
        setCryptoWeight(Math.round(remaining / 2));
      } else {
        setGoldWeight(Math.round(remaining * (goldWeight / totalOthers)));
        setCryptoWeight(Math.round(remaining * (cryptoWeight / totalOthers)));
      }
      setForexWeight(value);
    } else if (type === "gold") {
      const remaining = 100 - value;
      const totalOthers = forexWeight + cryptoWeight;
      if (totalOthers === 0) {
        setForexWeight(Math.round(remaining / 2));
        setCryptoWeight(Math.round(remaining / 2));
      } else {
        setForexWeight(Math.round(remaining * (forexWeight / totalOthers)));
        setCryptoWeight(Math.round(remaining * (cryptoWeight / totalOthers)));
      }
      setGoldWeight(value);
    } else {
      const remaining = 100 - value;
      const totalOthers = forexWeight + goldWeight;
      if (totalOthers === 0) {
        setForexWeight(Math.round(remaining / 2));
        setGoldWeight(Math.round(remaining / 2));
      } else {
        setForexWeight(Math.round(remaining * (forexWeight / totalOthers)));
        setGoldWeight(Math.round(remaining * (goldWeight / totalOthers)));
      }
      setCryptoWeight(value);
    }
  };

  const wF = forexWeight / 100;
  const wG = goldWeight / 100;
  const wC = cryptoWeight / 100;

  const rF = 0.12;
  const rG = 0.08;
  const rC = 0.25;

  const sF = 0.07;
  const sG = 0.05;
  const sC = 0.22;

  const rhoFG = 0.15;
  const rhoFC = 0.35;
  const rhoGC = 0.05;

  const portReturn = (wF * rF + wG * rG + wC * rC) * 100;

  const varF = Math.pow(wF * sF, 2);
  const varG = Math.pow(wG * sG, 2);
  const varC = Math.pow(wC * sC, 2);
  const covFG = 2 * wF * wG * sF * sG * rhoFG;
  const covFC = 2 * wF * wC * sF * sC * rhoFC;
  const covGC = 2 * wG * wC * sG * sC * rhoGC;
  const portVol = Math.sqrt(varF + varG + varC + covFG + covFC + covGC) * 100;

  const rf = 3;
  const sharpe = portVol > 0 ? (portReturn - rf) / portVol : 0;
  const maxDrawdown = (wF * 8 + wG * 5 + wC * 28) * (1 - 0.25 * (1 - rhoFC));

  return (
    <L9Frame title="Sharpe Ratio & Asset Allocator" id="SHARPE-OPTIMIZER"
      mentorText="Diversification is the only free lunch in finance. By combining assets with low correlation (like Gold and Crypto), you can compress your portfolio volatility while retaining strong yield characteristics, optimizing your Sharpe Ratio."
      mentorAnalogy="Think of building a recipe. If you add only hot chili (Crypto), the dish is too spicy. If you add only water (Gold), it's too bland. You must balance the spices (Forex, Gold, Crypto) to make a balanced meal that everyone can digest.">
      <div className="w-full flex flex-col gap-4 text-left font-mono text-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Allocations */}
          <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col gap-3">
            <h5 className="text-[10px] font-black uppercase text-emerald-400 border-b border-[#11241f] pb-1.5">Strategy Weight Allocation</h5>
            
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <span className="text-[9px] text-slate-400 uppercase">Trend Continuation (Forex):</span>
                <span className="text-emerald-400 font-bold">{forexWeight}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={forexWeight}
                onChange={(e) => handleWeightChange("forex", Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <span className="text-[9px] text-slate-400 uppercase">Mean Reversion (Gold):</span>
                <span className="text-emerald-400 font-bold">{goldWeight}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={goldWeight}
                onChange={(e) => handleWeightChange("gold", Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <span className="text-[9px] text-slate-400 uppercase">Volatility Breakout (Crypto):</span>
                <span className="text-emerald-400 font-bold">{cryptoWeight}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={cryptoWeight}
                onChange={(e) => handleWeightChange("crypto", Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1"
              />
            </div>
            
            <div className="text-[9px] text-slate-500 mt-1 flex justify-between">
              <span>SUM CHECK:</span>
              <span className="font-bold text-slate-400">{forexWeight + goldWeight + cryptoWeight}%</span>
            </div>
          </div>

          {/* Metrics output */}
          <div className="bg-[#08100e] border border-[#11241f] p-4 rounded-xl flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-3">
              <h5 className="text-[10px] font-black uppercase text-amber-500 border-b border-[#11241f] pb-1.5">Portfolio Metrics</h5>
              
              <div className="flex justify-between items-center bg-slate-950/80 p-2 rounded-lg border border-slate-900">
                <span className="text-slate-400 text-[10px]">Exp. Annual Return:</span>
                <span className="text-sm font-black text-slate-100">{portReturn.toFixed(1)}%</span>
              </div>

              <div className="flex justify-between items-center bg-slate-950/80 p-2 rounded-lg border border-slate-900">
                <span className="text-slate-400 text-[10px]">Exp. Volatility:</span>
                <span className="text-sm font-black text-slate-100">{portVol.toFixed(1)}%</span>
              </div>

              <div className="flex justify-between items-center bg-slate-950/80 p-2 rounded-lg border border-slate-900">
                <span className="text-slate-400 text-[10px]">Max Drawdown:</span>
                <span className="text-sm font-black text-red-400">-{maxDrawdown.toFixed(1)}%</span>
              </div>

              <div className="flex justify-between items-center bg-slate-950/80 p-2.5 rounded-lg border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <span className="text-emerald-400 text-[10px] font-bold">Sharpe Ratio:</span>
                <span className="text-base font-black text-emerald-400">{sharpe.toFixed(2)}</span>
              </div>
            </div>

            <div className={cn(
              "p-2 rounded-lg border text-[10px] leading-snug flex items-center gap-2",
              sharpe >= 2.0 
                ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-400"
                : sharpe >= 1.5
                ? "bg-amber-950/20 border-amber-500/20 text-amber-400"
                : "bg-red-950/20 border-red-500/20 text-red-400"
            )}>
              {sharpe >= 2.0 ? (
                <>
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-400" />
                  <span><strong>OPTIMAL:</strong> Sharpe &gt; 2.0 represents highly efficient capital diversification. Ready for live desk funding.</span>
                </>
              ) : sharpe >= 1.5 ? (
                <>
                  <Activity size={14} className="shrink-0 text-amber-500" />
                  <span><strong>SUB-OPTIMAL:</strong> Sharpe between 1.5 and 2.0. Increase mean reversion or decrease volatility weight to optimize.</span>
                </>
              ) : (
                <>
                  <AlertTriangle size={14} className="shrink-0 text-red-400 animate-pulse" />
                  <span><strong>UNACCEPTABLE:</strong> High volatility drag. Heavy single-asset concentration creates tail risk. Rebalance.</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </L9Frame>
  );
};
