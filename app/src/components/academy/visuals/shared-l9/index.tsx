"use client";

import React, { useState } from "react";
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
export const Level9PlaceholderVisual = () => {
  return (
    <L9Frame title="Institutional Risk Desk & Certification Console" id="CERT-DESK-GATE">
      <div className="w-full bg-[#08100e] border border-[#11241f] p-5 rounded-2xl flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-[#11241f] pb-2">
          <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
            <Activity size={12} className="text-emerald-400 animate-pulse" />
            Live Desk Audit Engine
          </span>
          <span className="text-[8px] font-mono text-amber-500 border border-amber-500/20 px-1 rounded">SYSTEM LOCKED</span>
        </div>
        <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-300">
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Portfolio Risk Matrix...</span>
            <span className="text-emerald-400">VALIDATED</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Multi-Exchange Liquidity Router...</span>
            <span className="text-emerald-400">ONLINE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Prop Firm Drawdown Audits...</span>
            <span className="text-emerald-400">0 BREACHES</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Live Slippage Auditing Log...</span>
            <span className="text-emerald-300">ACTIVE MONITORING</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">&gt; Certification Crucible Status...</span>
            <span className="text-amber-400 font-bold animate-pulse">READY FOR GRADE</span>
          </div>
        </div>
      </div>
    </L9Frame>
  );
};
