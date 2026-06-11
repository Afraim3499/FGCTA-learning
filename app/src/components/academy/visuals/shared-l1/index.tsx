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
  FileSpreadsheet,
  Clock,
  Calendar,
  AlertOctagon,
  Percent,
  TrendingDown
} from "lucide-react";
import { cn } from "@/lib/utils";

// Standard MentorInsight UI Component integrated into L1Frame
const L1Frame = ({ 
  children, 
  title, 
  id, 
  mentorText = "Write your trade plans down. A professional trader does not react; they execute a pre-written plan.",
  mentorAnalogy = "A commercial airline pilot never starts a flight without a written flight plan. They don't take off and decide where to land mid-flight." 
}: { 
  children: React.ReactNode; 
  title: string; 
  id: string; 
  mentorText?: string; 
  mentorAnalogy?: string; 
}) => (
  <div className="w-full bg-[#F8FBFC] border border-[#E2E8F0] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm text-left min-h-[500px]">
    {/* Grid Background Effect */}
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:24px_24px]" />
    
    {/* Top Header Row */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-slate-200 pb-4 shrink-0">
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 mb-1">
          <Sliders size={10} className="text-teal-600 animate-pulse" />
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Plan Architect Console</span>
        </div>
        <h4 className="text-sm font-black text-[#071B36] uppercase tracking-tighter italic leading-tight">{title}</h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Plan Ref</span>
          <span className="text-[10px] font-mono text-[#071B36] font-bold">{id}</span>
        </div>
      </div>
    </div>
    
    {/* Dynamic Content Center Stage */}
    <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0">
      {children}
    </div>

    {/* Mentor Blueprint Insight at the Bottom */}
    <div className="w-full mt-6 pt-5 border-t border-slate-200 flex flex-col gap-2 shrink-0 text-left relative z-10">
      <div className="flex items-center gap-2">
        <div className="px-2 py-1 bg-[#071B36] text-white text-[8px] font-black uppercase tracking-widest rounded-sm">Mentor Blueprint</div>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      <div className="flex gap-4">
         <div className="flex-1">
            <p className="text-xs font-bold text-[#071B36] leading-relaxed">{mentorText}</p>
            {mentorAnalogy && (
              <p className="mt-1.5 text-[11px] text-slate-500 italic leading-snug">
                <span className="font-black uppercase text-[9px] mr-2 text-teal-600 not-italic">Concept Analogy:</span>
                {mentorAnalogy}
              </p>
            )}
         </div>
      </div>
    </div>
  </div>
);

// --- MODULE 1.1 VISUALS ---

export const HypothesisIntro = () => {
  const [activeTab, setActiveTab] = useState<"reading" | "hypothesis">("reading");

  return (
    <L1Frame 
      title="Reading to Hypothesis" 
      id="PLAN-1.1-INTRO"
      mentorText="Always write down your hypothesis statement. This statement locks in your logic before you let emotions access the order terminal."
      mentorAnalogy="A defense attorney outlines their main argument (hypothesis) before presenting evidence to the court. They don't wing it on the stand."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-7 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Convert Observation to Plan</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            A hypothesis is the bridge between observation and action. In Level 0, you read the chart. In Level 1, you write: <span className="italic font-bold">“IF price reaches this zone, AND we see this evidence, THEN we expect this reaction.”</span>
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab("reading")}
              className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", activeTab === "reading" ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
            >
              Raw Reading
            </button>
            <button 
              onClick={() => setActiveTab("hypothesis")}
              className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", activeTab === "hypothesis" ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
            >
              Trade Hypothesis
            </button>
          </div>
        </div>
        <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[160px] flex flex-col justify-between">
          {activeTab === "reading" ? (
            <div className="space-y-2">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Observed Fact</span>
              <p className="text-xs font-bold text-slate-700">"Price is trending up on the H4 chart, and has pulled back to a daily demand zone."</p>
              <span className="text-[9px] text-teal-600 font-bold block bg-teal-50 p-2 rounded">Status: Observable evidence is intact.</span>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="text-[9px] font-bold text-teal-600 uppercase tracking-wider block">Falsifiable Statement</span>
              <p className="text-xs font-black text-[#071B36]">"IF H4 trend holds and price rejects the daily demand zone low, THEN I will buy expecting a reaction to the H4 range high."</p>
              <span className="text-[9px] text-[#071B36] font-bold block bg-slate-50 p-2 rounded">Status: Plan-ready structure.</span>
            </div>
          )}
        </div>
      </div>
    </L1Frame>
  );
};

export const HypothesisSentenceBuilder = () => {
  const [ifPart, setIfPart] = useState<string>("[Condition at Location]");
  const [andPart, setAndPart] = useState<string>("[Entry Evidence]");
  const [thenPart, setThenPart] = useState<string>("[Target Objective]");

  const isValid = ifPart !== "[Condition at Location]" && andPart !== "[Entry Evidence]" && thenPart !== "[Target Objective]";

  return (
    <L1Frame 
      title="Hypothesis Builder" 
      id="PLAN-1.1-BLD"
      mentorText="A valid hypothesis must be falsifiable. If your sentence does not contain a clear 'IF' condition that can fail, it is a guess, not a plan."
      mentorAnalogy="Scientific experiments outline exact parameters (variables) first. If a scientist cannot state what event disproves their idea, it isn't science."
    >
      <div className="space-y-6 w-full">
        <p className="text-xs text-slate-500 font-semibold text-center">Construct a falsifiable hypothesis sentence by selecting the parameters below.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2 text-left">
            <span className="text-[9px] font-black uppercase text-slate-400">1. IF PRICE...</span>
            <div className="flex flex-col gap-1">
              <button onClick={() => setIfPart("hits the daily demand zone")} className={cn("p-2 text-left text-[10px] font-bold rounded-lg border", ifPart.includes("daily demand") ? "bg-[#071B36] text-white" : "bg-white")}>hits daily demand</button>
              <button onClick={() => setIfPart("sweeps session highs")} className={cn("p-2 text-left text-[10px] font-bold rounded-lg border", ifPart.includes("session highs") ? "bg-[#071B36] text-white" : "bg-white")}>sweeps session highs</button>
            </div>
          </div>
          <div className="space-y-2 text-left">
            <span className="text-[9px] font-black uppercase text-slate-400">2. AND WE SEE...</span>
            <div className="flex flex-col gap-1">
              <button onClick={() => setAndPart("a bullish engulfing candle close")} className={cn("p-2 text-left text-[10px] font-bold rounded-lg border", andPart.includes("engulfing") ? "bg-[#071B36] text-white" : "bg-white")}>engulfing candle close</button>
              <button onClick={() => setAndPart("a strong wick rejection")} className={cn("p-2 text-left text-[10px] font-bold rounded-lg border", andPart.includes("wick rejection") ? "bg-[#071B36] text-white" : "bg-white")}>strong wick rejection</button>
            </div>
          </div>
          <div className="space-y-2 text-left">
            <span className="text-[9px] font-black uppercase text-slate-400">3. THEN WE EXPECT...</span>
            <div className="flex flex-col gap-1">
              <button onClick={() => setThenPart("reversal to prior swing high")} className={cn("p-2 text-left text-[10px] font-bold rounded-lg border", thenPart.includes("prior swing high") ? "bg-[#071B36] text-white" : "bg-white")}>reversal to swing high</button>
              <button onClick={() => setThenPart("continuation to next level")} className={cn("p-2 text-left text-[10px] font-bold rounded-lg border", thenPart.includes("next level") ? "bg-[#071B36] text-white" : "bg-white")}>continuation to next level</button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-left">
          <span className="text-[8px] font-mono text-slate-400 block mb-2">HYPOTHESIS SENTENCE</span>
          <p className="text-xs font-extrabold text-[#071B36] leading-relaxed">
            "IF price <span className="text-teal-600 underline">{ifPart}</span>, AND we see <span className="text-teal-600 underline">{andPart}</span>, THEN we expect <span className="text-teal-600 underline">{thenPart}</span>."
          </p>
          {isValid && (
            <div className="mt-3 flex items-center gap-2 text-[10px] text-emerald-600 font-bold">
              <CheckCircle size={14} /> Falsifiable hypothesis locked. Ready for validation.
            </div>
          )}
        </div>
      </div>
    </L1Frame>
  );
};

export const WatchVsPlan = () => {
  const [selected, setSelected] = useState<"watch" | "plan" | null>(null);

  return (
    <L1Frame 
      title="Watch vs Plan" 
      id="PLAN-1.1-WVP"
      mentorText="Do not write plans for every horizontal consolidation. Keep messy structures on watch-only status to protect your mental capital."
      mentorAnalogy="A hunter doesn't prepare their rifle for every movement in the forest. They separate birds or small noise (watch) from high-value game (plan)."
    >
      <div className="space-y-4 w-full">
        <p className="text-xs text-slate-500 font-semibold">Decide if this state is watch-only or deserves plan status: <span className="italic font-bold">Price is trending down, but we see a minor 5m green candle inside a consolidation range.</span></p>
        <div className="flex gap-4">
          <button 
            onClick={() => setSelected("watch")}
            className={cn("flex-1 p-4 rounded-2xl border text-center font-bold text-xs", selected === "watch" ? "bg-emerald-50 border-emerald-300 text-emerald-800" : "bg-white")}
          >
            Watch-Only Reading
          </button>
          <button 
            onClick={() => setSelected("plan")}
            className={cn("flex-1 p-4 rounded-2xl border text-center font-bold text-xs", selected === "plan" ? "bg-rose-50 border-rose-300 text-rose-800" : "bg-white")}
          >
            Plan-Worthy Reading
          </button>
        </div>
        {selected && (
          <div className="p-4 rounded-xl text-xs font-bold bg-slate-50 text-left">
            {selected === "watch" ? (
              <span className="text-emerald-700">Correct! A minor candle in a down trend has zero edge. It is watch-only. Do not write a plan.</span>
            ) : (
              <span className="text-rose-700">Incorrect. Writing plans for minor intraday noise leads to execution fatigue and overtrading. Keep it on watch.</span>
            )}
          </div>
        )}
      </div>
    </L1Frame>
  );
};

export const PassFailGate = () => {
  const [checks, setChecks] = useState<boolean[]>([false, false, false]);

  const toggleCheck = (idx: number) => {
    const next = [...checks];
    next[idx] = !next[idx];
    setChecks(next);
  };

  const allPassed = checks.every(Boolean);

  return (
    <L1Frame 
      title="Plan Eligibility Gate" 
      id="PLAN-1.1-GT"
      mentorText="Gating criteria are absolute. If a trade plan misses even one validation check, mark the plan as unviable and walk away."
      mentorAnalogy="Pre-flight checks require all systems to be green. A pilot does not take off if the hydraulic check fails, hoping to fix it mid-air."
    >
      <div className="space-y-4 w-full">
        <p className="text-xs text-slate-500 font-semibold">Audit this setup. A plan must satisfy all three criteria to unlock planning:</p>
        <div className="space-y-2">
          <label className="flex items-center gap-3 p-3 bg-white border rounded-xl cursor-pointer">
            <input type="checkbox" checked={checks[0]} onChange={() => toggleCheck(0)} className="rounded text-teal-600 focus:ring-teal-500" />
            <span className="text-xs font-bold text-slate-700 text-left">1. Higher timeframe context is clear (Up/Down trend or defined Range edge).</span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-white border rounded-xl cursor-pointer">
            <input type="checkbox" checked={checks[1]} onChange={() => toggleCheck(1)} className="rounded text-teal-600 focus:ring-teal-500" />
            <span className="text-xs font-bold text-slate-700 text-left">2. Price is sitting exactly at a major pre-mapped reaction zone (Location).</span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-white border rounded-xl cursor-pointer">
            <input type="checkbox" checked={checks[2]} onChange={() => toggleCheck(2)} className="rounded text-teal-600 focus:ring-teal-500" />
            <span className="text-xs font-bold text-slate-700 text-left">3. A logical invalidation level exists where structure would break.</span>
          </label>
        </div>
        {allPassed ? (
          <div className="p-3 bg-teal-50 text-teal-800 rounded-xl text-xs font-bold flex items-center gap-2">
            <CheckCircle size={16} /> GATE PASSED: This setup is eligible for full planning.
          </div>
        ) : (
          <div className="p-3 bg-rose-50 text-rose-800 rounded-xl text-xs font-bold flex items-center gap-2">
            <AlertTriangle size={16} /> GATE LOCKED: Plan eligibility requirements not met.
          </div>
        )}
      </div>
    </L1Frame>
  );
};

export const ForexQuotePressure = () => (
  <L1Frame 
    title="Forex Base/Quote Pressure" 
    id="PLAN-FX-1.1"
    mentorText="Forex pairs are reciprocal. If you expect a currency pair to rise, ensure that the quote currency index is showing matching weakness."
    mentorAnalogy="A see-saw requires one side to go down for the other to rise. You cannot expect base currency strength if quote index is soaring."
  >
    <div className="space-y-4 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">EUR/USD Hypothesis Relationship</h4>
      <p>Forex pairs are reciprocal. If your hypothesis is EUR strength, DXY (US Dollar Index) must show corresponding structural weakness at resistance.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white border rounded-2xl">
          <span className="text-[10px] font-black uppercase text-teal-600">EUR/USD Long Setup</span>
          <p className="text-slate-700 mt-2">Price at Daily Support. Expecting bullish reaction.</p>
        </div>
        <div className="p-4 bg-white border rounded-2xl">
          <span className="text-[10px] font-black uppercase text-rose-600">DXY Resistance Matrix</span>
          <p className="text-slate-700 mt-2">DXY at HTF Range Top. Expecting rejection structure.</p>
        </div>
      </div>
    </div>
  </L1Frame>
);

export const GoldZoneVolatility = () => (
  <L1Frame 
    title="Gold Zone Volatility" 
    id="PLAN-GD-1.1"
    mentorText="Gold moves extremely fast. Your plans must accommodate larger invalidation distances than standard Forex pairs."
    mentorAnalogy="A race car requires much longer stopping distances than a standard sedan. Sizing stops too tightly on Gold leads to instant sweeps."
  >
    <div className="space-y-4 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Volatility & Yield Context</h4>
      <p>Gold (XAU/USD) reacts to real Treasury yields. A planning hypothesis must account for macro interest rates rather than pure visual patterns.</p>
      <div className="p-4 bg-[#071B36] text-white rounded-2xl">
        <span className="text-[9px] font-mono text-teal-400 uppercase tracking-widest block">Yield Alignment</span>
        <p className="mt-1 text-slate-200">Real Yields dropping = Bullish pressure for Gold. Visual zones align with macro fundamentals.</p>
      </div>
    </div>
  </L1Frame>
);

export const CryptoVenueBtc = () => (
  <L1Frame 
    title="Crypto Venue & BTC Context" 
    id="PLAN-CR-1.1"
    mentorText="Crypto is fragmented. If Bybit and Binance orderbooks disagree on pricing levels, cancel the plan immediately."
    mentorAnalogy="If two maps of the same city disagree on where a major highway is, don't drive blindly. Wait for map agreement."
  >
    <div className="space-y-4 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">BTC Dominance & Venue Fragmentation</h4>
      <p>Altcoin planning requires checking Binance Spot vs Coinbase Perp disagreement and BTC background state before placing stops.</p>
      <div className="p-4 bg-rose-950 text-rose-200 rounded-2xl border border-rose-900">
        <span className="text-[9px] font-mono text-rose-300 block uppercase">Disagreement Warning</span>
        <p className="mt-1">Coinbase Spot leads; Bybit Perp shows liquidations. Do not plan reversals if Coinbase lacks order volume.</p>
      </div>
    </div>
  </L1Frame>
);

export const HypothesisDebrief = () => (
  <L1Frame 
    title="Hypothesis Mastered" 
    id="PLAN-1.1-DBF"
    mentorText="Congratulations on converting observation to plan. You have locked in the first foundation step."
  >
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Observation to Plan Conversion Locked</h4>
      <p>You have successfully mastered converting chart observations into clear, falsifiable trade hypotheses. You are ready to filter your plans based on eligibility.</p>
    </div>
  </L1Frame>
);

// --- MODULE 1.2 VISUALS ---

export const FilterIntro = () => {
  const [showReading, setShowReading] = useState(false);

  return (
    <L1Frame 
      title="Eligibility Filters" 
      id="PLAN-1.2-INTRO"
      mentorText="Filtering is the core edge of a professional. If you don't filter out average setups, your expectancy decays to zero."
      mentorAnalogy="A gold miner spends 99% of their time filtering out dirt to find the tiny gold nuggets. They don't store the dirt."
    >
      <div className="space-y-4 w-full">
        <h3 className="text-sm font-black uppercase text-[#071B36]">Plan Eligibility Check</h3>
        <p className="text-xs text-slate-500 font-semibold leading-relaxed">
          Not all chart patterns deserve to be planned. A professional filter discards 70% of readings as "unclear" or "low evidence" before sizing risk.
        </p>
        <button 
          onClick={() => setShowReading(!showReading)}
          className="px-4 py-2 bg-[#071B36] text-white text-[10px] font-black uppercase tracking-wider rounded-xl"
        >
          {showReading ? "Hide Reading Audit" : "Show Reading Audit"}
        </button>
        {showReading && (
          <div className="p-4 bg-white border rounded-2xl text-xs space-y-2">
            <span className="text-[9px] text-rose-600 font-black uppercase">Failing Condition</span>
            <p className="text-slate-700">"Price is coiling in compression during overnight Asia session; bid-ask spread is wide."</p>
            <span className="text-[10px] font-mono text-rose-600 block">RESOLUTION: REJECT PLAN. Wait for session handoff.</span>
          </div>
        )}
      </div>
    </L1Frame>
  );
};

export const EvidenceThreshold = () => {
  const [level, setLevel] = useState(1);

  return (
    <L1Frame 
      title="Evidence Thresholds" 
      id="PLAN-1.2-THR"
      mentorText="A plan requires a minimum threshold of evidence. Single clues inside range midpoints must be filtered out."
      mentorAnalogy="A court case cannot be filed with only one weak rumor. The prosecution requires a complete evidence stack before presenting the case."
    >
      <div className="space-y-4 w-full">
        <p className="text-xs text-slate-500 font-semibold">Verify the evidence strength required to convert a reading into a plan:</p>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className={cn("h-full transition-all duration-300", level >= 3 ? "bg-emerald-500" : level === 2 ? "bg-amber-500" : "bg-rose-500")} style={{ width: `${level * 33.3}%` }} />
        </div>
        <div className="flex gap-2">
          <button onClick={() => setLevel(1)} className="flex-1 p-2 border text-[10px] font-bold rounded-lg">1 Clue (Unusable)</button>
          <button onClick={() => setLevel(2)} className="flex-1 p-2 border text-[10px] font-bold rounded-lg">2 Clues (Weak)</button>
          <button onClick={() => setLevel(3)} className="flex-1 p-2 border text-[10px] font-bold rounded-lg">3+ Clues (Eligible)</button>
        </div>
        <p className="text-xs font-bold text-slate-700">
          {level === 1 && "❌ Single rejections inside ranges have zero statistical edge."}
          {level === 2 && "⚠️ Trend + minor zone is risky. We prefer a third confluence."}
          {level === 3 && "✅ Locked: HTF Trend + major reaction zone + local session overlap."}
        </p>
      </div>
    </L1Frame>
  );
};

export const UnclearReadingRejection = () => (
  <L1Frame 
    title="Rejection Protocol" 
    id="PLAN-1.2-REJ"
    mentorText="Walking away from unclear market setups is a premium skill. If evidence is mixed, your plan is unviable."
    mentorAnalogy="A surgeon does not operate on a patient if the diagnostic scans are blurry or mixed. They wait for high-resolution clarity."
  >
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-rose-600 uppercase">Falsification Protocol</h4>
      <p>If your reading cannot answer the three questions (Where am I? What is the trend? What is the trigger?), you must abort immediately. Walking away is a profitable decision.</p>
    </div>
  </L1Frame>
);

export const WeakPlanWarning = () => (
  <L1Frame 
    title="Weak Plan Filter" 
    id="PLAN-1.2-WARN"
    mentorText="Compression zones are trap environments. Do not trade range-edge rejections when price is squeezing tight."
  >
    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs space-y-2 w-full">
      <div className="flex items-center gap-2 text-amber-800 font-black">
        <AlertTriangle size={18} />
        <span>COMPRESSION HAZARD</span>
      </div>
      <p className="text-slate-700 text-left">Trading local rejections inside tight consolidations leads to instant stop runs. The filter mandates: Wait for breakout confirmation.</p>
    </div>
  </L1Frame>
);

export const ForexMixedPressureFilter = () => (
  <L1Frame 
    title="FX Mixed Pressure" 
    id="PLAN-FX-1.2"
    mentorText="Forex correlation is your shield. If the majors (EUR/USD, GBP/USD) show conflicting structures, stand aside."
  >
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-rose-600 uppercase">Cross-Pair Divergence Filter</h4>
      <p>If GBP/USD is bullish but EUR/USD is coiling inside a range, pair pressure is mixed. Filter rules mandate: Cancel sterling long plans.</p>
    </div>
  </L1Frame>
);

export const GoldSpikeVerificationFilter = () => (
  <L1Frame 
    title="Gold news Spike Filter" 
    id="PLAN-GD-1.2"
    mentorText="Macro updates cause instant repricing. Sizing plans during key US economic data results in massive slippage."
  >
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-rose-600 uppercase">Macro volatility Lock</h4>
      <p>Never plan trades during CPI or rate releases. Wait exactly 15 minutes after the news release for volatility consolidation.</p>
    </div>
  </L1Frame>
);

export const CryptoVenueDisagreementFilter = () => (
  <L1Frame 
    title="Crypto Venue Disagreement" 
    id="PLAN-CR-1.2"
    mentorText="Perpetuals create false sweeps. Always check spot exchange order volume to verify if contract moves are authentic."
  >
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Binance vs Bybit Spot check</h4>
      <p>If Binance Spot shows buying but Bybit Perp futures is dumping, venue disagreement is active. Filter out any long plans.</p>
    </div>
  </L1Frame>
);

export const FilterDebrief = () => (
  <L1Frame title="Filters Mastered" id="PLAN-1.2-DBF">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Gate Filters Locked</h4>
      <p>You have mastered Setup eligibility filtering. Only premium setups pass to the next stage.</p>
    </div>
  </L1Frame>
);

// --- MODULE 1.4 VISUALS ---

export const PlanningZoneIntro = () => (
  <L1Frame 
    title="Area of Interest" 
    id="PLAN-1.4-INTRO"
    mentorText="An Area of Interest is a trap-detection zone. Never treat it as a single line where price must stop. It is a cushion where orders accumulate."
    mentorAnalogy="A landing pad for a helicopter. The pilot doesn't aim for a microscopic point; they land within the designated circle.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Define the AOI</h4>
      <p>An Area of Interest (AOI) is a structural box, not a thin line. It represents a cluster of historical orders where a reaction is anticipated.</p>
    </div>
  </L1Frame>
);

export const AoiMapping = () => {
  const [selectedZone, setSelectedZone] = useState<"edge" | "middle" | null>(null);

  return (
    <L1Frame 
      title="AOI Mapping Drill" 
      id="PLAN-1.4-MAP"
      mentorText="Only plan setups at range boundaries. Midpoints are for gamblers looking for excitement."
      mentorAnalogy="A soccer goalkeeper guards the goal line (boundary), not the center of the field. They stay where the net is."
    >
      <div className="space-y-4 w-full">
        <p className="text-xs text-slate-500 font-semibold">Examine the range. Identify the correct Area of Interest for entry planning:</p>
        <div className="flex gap-4">
          <button onClick={() => setSelectedZone("edge")} className={cn("flex-1 p-3 border rounded-xl font-bold text-xs", selectedZone === "edge" ? "bg-emerald-50 border-emerald-400 text-emerald-800" : "bg-white")}>Range Edge (Support)</button>
          <button onClick={() => setSelectedZone("middle")} className={cn("flex-1 p-3 border rounded-xl font-bold text-xs", selectedZone === "middle" ? "bg-rose-50 border-rose-400 text-rose-800" : "bg-white")}>Mid-Range (Noise)</button>
        </div>
        {selectedZone && (
          <p className="text-xs font-bold text-slate-700">
            {selectedZone === "edge" ? "✅ Correct! Range boundaries provide high-probability reaction edges." : "❌ Incorrect. Midpoints are random noise zones."}
          </p>
        )}
      </div>
    </L1Frame>
  );
};

export const ReactionAreaIdentification = () => (
  <L1Frame 
    title="Reaction Areas" 
    id="PLAN-1.4-REAC"
    mentorText="To map a reaction area, trace the last candle before the expansion. That is where institutions did their business."
    mentorAnalogy="A footprint left in wet cement. The deeper the print, the more weight (orders) was applied at that specific spot.">
    <div className="p-4 bg-slate-900 text-slate-200 border rounded-2xl text-xs space-y-2 w-full">
      <span className="text-[10px] text-teal-400 font-bold block uppercase">Institutional Footprints</span>
      <p className="text-left text-slate-300">We trace previous expansion origin zones. The demand zone starts at the open of the last down candle before the up move.</p>
    </div>
  </L1Frame>
);

export const MiddleZoneWarningDrill = () => (
  <L1Frame 
    title="Middle-Zone Warning" 
    id="PLAN-1.4-WARN"
    mentorText="The center of a range is a graveyard. If you enter in the middle, you are paying full price in both directions."
    mentorAnalogy="A tennis match. You don't stand in the middle of the court waiting for the ball; you position yourself at the base line.">
    <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs space-y-2 w-full">
      <div className="flex items-center gap-2 text-rose-800 font-black">
        <AlertOctagon size={18} />
        <span>NO-MAN'S LAND HAZARD</span>
      </div>
      <p className="text-slate-700 text-left">Executing inside the range center offers 50% odds. The system forbids planning setups inside range midpoints.</p>
    </div>
  </L1Frame>
);

export const ForexSessionAoi = () => (
  <L1Frame 
    title="FX Session levels" 
    id="PLAN-FX-1.4"
    mentorText="Forex AOIs must align with session extremes. Highs and lows from Tokyo are swept during London open."
    mentorAnalogy="A tidal wave. The water pulls back at Tokyo close, only to rush forward with high volume at the London open.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">ADR & Session Extremes</h4>
      <p>Forex AOIs should include the Asia Session high/low boundaries and ADR (Average Daily Range) outer edges.</p>
    </div>
  </L1Frame>
);

export const GoldWickClusterAoi = () => (
  <L1Frame 
    title="Gold Wick clusters" 
    id="PLAN-GD-1.4"
    mentorText="Gold sweeps deep. Always buffer your AOI bounds below obvious swing points to avoid getting stopped out by spikes."
    mentorAnalogy="A lightning rod. It doesn't just attract the bolt; it grounds the energy. Gold wicks ground the market's liquidity before a real move.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Wick Cluster Mapping</h4>
      <p>Gold often spikes through clean support. Map your AOI slightly below obvious lows to encompass historical wick rejections.</p>
    </div>
  </L1Frame>
);

export const CryptoLiquidityPoolAoi = () => (
  <L1Frame 
    title="Crypto Liquidity Pools" 
    id="PLAN-CR-1.4"
    mentorText="In Crypto, the best AOIs are where retail stop-losses are clustered. We wait for liquidation cascades to end before planning."
    mentorAnalogy="A vacuum cleaner. It sweeps up all the dust (leverage stops) before the room (market) is clean and stable.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Liquidation maps</h4>
      <p>In Crypto, plan your AOIs around clustered liquidation zones where perpetual contract stop runs occur.</p>
    </div>
  </L1Frame>
);

export const AoiDebrief = () => (
  <L1Frame 
    title="AOI Mastered" 
    id="PLAN-1.4-DBF"
    mentorText="AOI boundaries are your safety gates. If you enter only at mapped edges, you protect your capital from random churn."
    mentorAnalogy="A border patrol agent. You only cross at official gates where security (evidence) is verified, not in the wild middle.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-teal-600 uppercase">AOI Boundaries Locked</h4>
      <p>You have mastered mapping high-probability Areas of Interest. No more entering at random mid-range coordinates.</p>
    </div>
  </L1Frame>
);

// --- MODULE 1.5 VISUALS ---

export const PlanContextIntro = () => (
  <L1Frame 
    title="Plan Context" 
    id="PLAN-1.5-INTRO"
    mentorText="A plan must match its environment. A breakout plan inside a tight range will get shredded. Context gates everything."
    mentorAnalogy="Choosing your clothing. You don't wear a heavy winter coat in a desert heatwave just because it is your favorite coat.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Match Setup to Context</h4>
      <p>Different environments require different strategy playbooks. Do not trade range reversals inside an aggressive trend.</p>
    </div>
  </L1Frame>
);

export const TrendPlanMapping = () => (
  <L1Frame 
    title="Trend Plan Mapping" 
    id="PLAN-1.5-TRD"
    mentorText="In a strong trend, buy the pullback origin. Do not try to catch the absolute bottom; buy the established momentum retest."
    mentorAnalogy="Boarding a moving train. You wait for it to slow down at a station (pullback) instead of jumping on while it is at top speed.">
    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-emerald-800">Continuation Rules</span>
      <p className="text-slate-700 text-left">HTF: Higher highs. LTF: Buy pullbacks to the demand zone origin. Target the swing high.</p>
    </div>
  </L1Frame>
);

export const RangePlanMapping = () => (
  <L1Frame 
    title="Range Plan Mapping" 
    id="PLAN-1.5-RNG"
    mentorText="Ranges are about boundary rotation. Buy support sweeps, sell resistance sweeps. Avoid holding for breakouts."
    mentorAnalogy="A ping-pong ball. It bounces from paddle to paddle. Don't expect the ball to fly out of the room on a normal hit.">
    <div className="p-4 bg-sky-50 border border-sky-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-sky-800">Rotation Rules</span>
      <p className="text-slate-700 text-left">HTF: Sideways consolidation. LTF: Buy sweeps of support. Target the range resistance.</p>
    </div>
  </L1Frame>
);

export const BreakoutPlanMapping = () => (
  <L1Frame 
    title="Breakout Plan Mapping" 
    id="PLAN-1.5-BRK"
    mentorText="Wait for the breakout close. A breakout is only real when a candle body closes outside the range boundaries."
    mentorAnalogy="A jailbreak. A prisoner running toward the fence is not free until they are actually on the other side and the gate is closed.">
    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-amber-800">Breakout Rules</span>
      <p className="text-slate-700 text-left">HTF: Squeeze/Compression. LTF: Wait for close outside range. Plan entry on retest structure.</p>
    </div>
  </L1Frame>
);

export const ForexSessionContextRequirement = () => (
  <L1Frame 
    title="FX Session Context" 
    id="PLAN-FX-1.5"
    mentorText="Verify London and NY session alignment. If London goes up but NY reverses, the macro context is mixed."
    mentorAnalogy="A relay race. The second runner (NY) must run in the same direction as the first (London) to win the race.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">London/NY Alignment</h4>
      <p>Forex trend plans require both London and New York sessions to maintain the expansion direction.</p>
    </div>
  </L1Frame>
);

export const GoldVolatilityRegimeRequirement = () => (
  <L1Frame 
    title="Gold Volatility regimes" 
    id="PLAN-GD-1.5"
    mentorText="Gold needs high ATR (volatility) for breakout plans. If volatility is flat, stick strictly to range rotation."
    mentorAnalogy="Sailing a boat. You need wind (volatility) to travel. If the water is calm, you don't raise the sails expecting a fast trip.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Volatility Context Gating</h4>
      <p>Verify that Gold ATR is rising before planning breakouts. Calmer regimes favor range rotation setups.</p>
    </div>
  </L1Frame>
);

export const CryptoBtcStateRequirement = () => (
  <L1Frame 
    title="Crypto BTC beta" 
    id="PLAN-CR-1.5"
    mentorText="Always check Bitcoin's trend. If BTC is dropping, altcoin support levels will fold like paper."
    mentorAnalogy="The tide in a harbor. When the tide goes out (BTC falls), all boats (altcoins) go down, regardless of how strong they are.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Bitcoin Alignment</h4>
      <p>Altcoin setups are invalid unless Bitcoin trend context matches. Avoid planning altcoin longs during BTC drops.</p>
    </div>
  </L1Frame>
);

export const PlanContextDebrief = () => (
  <L1Frame 
    title="Context Mastered" 
    id="PLAN-1.5-DBF"
    mentorText="Aligning setup style with context is the first rule of professional planning. Context is the gravity of the market."
    mentorAnalogy="A pilot checking the weather forecast. You fly with the wind at your back, not directly into a hurricane.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-teal-600 uppercase">Context Filter Locked</h4>
      <p>You have mastered matching setup structures to their corresponding market context.</p>
    </div>
  </L1Frame>
);

// --- MODULE 1.6 VISUALS ---

export const TriggerDesignIntro = () => (
  <L1Frame 
    title="Trigger Design" 
    id="PLAN-1.6-INTRO"
    mentorText="A trigger is a conditional filter, not a guarantee. It only tells you the plan is active. Risk control still holds."
    mentorAnalogy="A motion-sensor light. It only turns on when something moves, but it doesn't tell you who is walking by.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Design the Trigger</h4>
      <p>A trigger is a conditional logic statement. It defines exactly what candle shape or level crossing must form before the plan activates.</p>
    </div>
  </L1Frame>
);

export const CandleTriggerMechanics = () => (
  <L1Frame 
    title="Candle Triggers" 
    id="PLAN-1.6-CAN"
    mentorText="Always wait for the candle close. A candle looks bullish until the last 5 seconds when it turns into a rejection wick."
    mentorAnalogy="An auction. You don't celebrate winning the item until the auctioneer's hammer actually falls.">
    <div className="p-4 bg-slate-900 text-slate-200 border rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] text-teal-400 font-bold uppercase block">Candlestick close logic</span>
      <p className="text-left text-slate-300">Trigger condition: A clean H1 bullish re-engulfing candle closing inside the demand zone.</p>
    </div>
  </L1Frame>
);

export const LevelTriggerMechanics = () => (
  <L1Frame 
    title="Level Triggers" 
    id="PLAN-1.6-LEV"
    mentorText="Limit orders at the 50% equilibrium of a zone require patience. If price misses by a tick and leaves, stand aside."
    mentorAnalogy="A bus stop. You wait exactly at the sign. If the bus passes you by, you don't run after it down the highway.">
    <div className="p-4 bg-white border rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] text-slate-400 font-bold uppercase block">Limit order mechanics</span>
      <p className="text-left">Trigger condition: Price touches the 50% equilibrium level of the demand zone.</p>
    </div>
  </L1Frame>
);

export const TimingTriggerMechanics = () => (
  <L1Frame 
    title="Timing Triggers" 
    id="PLAN-1.6-TIM"
    mentorText="Time-gate your triggers. If a setup forms outside your active trading hours, the volume profile is untrustworthy."
    mentorAnalogy="A store opening. You don't try to buy groceries at 3 AM when the doors are locked and the staff is asleep.">
    <div className="p-4 bg-slate-50 border rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] text-slate-500 font-bold uppercase block">Time-gated activation</span>
      <p className="text-left">Trigger condition: Rejection forms exactly within the first hour of the London session open.</p>
    </div>
  </L1Frame>
);

export const ForexSessionTrigger = () => (
  <L1Frame 
    title="FX Session Triggers" 
    id="PLAN-FX-1.6"
    mentorText="In Forex, session open spikes are excellent triggers. Let the initial 15m volume sweep happen before entering."
    mentorAnalogy="A horse race. You let the gate open and the horses scramble for position before placing your live bet.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Session open spikes</h4>
      <p>Plan trigger activation only when New York session open volume crosses London extremes.</p>
    </div>
  </L1Frame>
);

export const GoldZoneReactionTrigger = () => (
  <L1Frame 
    title="Gold volatility Triggers" 
    id="PLAN-GD-1.6"
    mentorText="Gold triggers must require a rapid spike and wick rejection. Slow grinds through support usually lead to breakdowns."
    mentorAnalogy="A trampoline. You want price to bounce off the level instantly. If it sinks and stays low, the fabric is breaking.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Wick reaction triggers</h4>
      <p>Trigger must require a rapid wick rejection spike through support to catch the liquidity sweep.</p>
    </div>
  </L1Frame>
);

export const CryptoVenueConfirmedTrigger = () => (
  <L1Frame 
    title="Crypto Venue Triggers" 
    id="PLAN-CR-1.6"
    mentorText="Crypto triggers require spot volume to lead perp funding sweeps. If only futures are moving, it is a manipulation sweep."
    mentorAnalogy="A shadow vs the object. The spot volume is the object; futures price is the shadow. Don't trade based on shadows.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Orderbook Ask Walls</h4>
      <p>Trigger: Binance Spot sweeps Coinbase perp and funding rate delta shifts negative.</p>
    </div>
  </L1Frame>
);

export const TriggerDesignDebrief = () => (
  <L1Frame 
    title="Trigger Locked" 
    id="PLAN-1.6-DBF"
    mentorText="Triggers keep you disciplined. They ensure you only act when your exact conditions are met."
    mentorAnalogy="A camera trap. It only snaps a picture when the target animal steps in front of the lens.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-teal-600 uppercase">Trigger parameters Locked</h4>
      <p>You have mastered trigger design. Triggers are treated as observation filters, not guarantees.</p>
    </div>
  </L1Frame>
);

// --- MODULE 1.7 VISUALS ---

export const ConfirmationIntro = () => (
  <L1Frame 
    title="Confirmation" 
    id="PLAN-1.7-INTRO"
    mentorText="Confirmation is the second clue. It verifies that buyers or sellers have actually defended the zone."
    mentorAnalogy="A signature on a check. You don't accept a check just because it is written; it must be signed to be valid.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Lock the Evidence</h4>
      <p>Confirmation is the final structural verification. It requires price to prove buyers or sellers have entered the market before activation.</p>
    </div>
  </L1Frame>
);

export const CloseQualityConfirmation = () => (
  <L1Frame 
    title="Close Quality" 
    id="PLAN-1.7-CLS"
    mentorText="Check where the candle closes relative to its range. A close in the top 20% indicates strong institutional accumulation."
    mentorAnalogy="A vote. A high close means a unanimous decision; a middle close means a tie vote with no clear winner.">
    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-emerald-800">Candle close priority</span>
      <p className="text-slate-700 text-left">Wait for the H1 candle to close. The close must locate in the top 20% of the daily range.</p>
    </div>
  </L1Frame>
);

export const FollowThroughConfirmation = () => (
  <L1Frame 
    title="Follow Through" 
    id="PLAN-1.7-FOL"
    mentorText="Wait for the follow-through candle to break the trigger candle's high. That confirms buying momentum is active."
    mentorAnalogy="A combustion engine. The spark (trigger) is useless unless it is followed by the engine actually turning over.">
    <div className="p-4 bg-white border rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] text-slate-400 font-bold uppercase block">Expansion confirmation</span>
      <p className="text-slate-700 text-left">The trigger candle must be followed by a second expansion candle breaking the trigger high.</p>
    </div>
  </L1Frame>
);

export const FailedConfirmationTrap = () => (
  <L1Frame 
    title="Confirmation Trap" 
    id="PLAN-1.7-TRP"
    mentorText="A sweep that closes back inside the zone is a trap. Do not buy rejections that cannot hold their expansion close."
    mentorAnalogy="A mouse trap. The cheese looks tempting, but the moment you touch it without confirming safety, the gate closes.">
    <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-rose-800">Fake breakout rejection</span>
      <p className="text-slate-700 text-left">Warning: Price spikes above support but closes back inside. Confirmation failed.</p>
    </div>
  </L1Frame>
);

export const ForexSessionNewsConfirmation = () => (
  <L1Frame 
    title="FX News confirmation" 
    id="PLAN-FX-1.7"
    mentorText="Forex news releases distort indicators. Wait for the H1 close after news to confirm the real direction."
    mentorAnalogy="A dust storm. You don't drive your car until the dust settles and you can see the road ahead.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Post-news confirmations</h4>
      <p>Never enter during news release spikes. Wait for a subsequent 15m candle close to confirm direction.</p>
    </div>
  </L1Frame>
);

export const GoldWickNoiseFilter = () => (
  <L1Frame 
    title="Gold Wick noise" 
    id="PLAN-GD-1.7"
    mentorText="Gold's high volatility creates false H1 wicks. Use H4 closes to confirm major structural support holds."
    mentorAnalogy="A sea wall. Small waves (H1 wicks) splash over it constantly, but only a massive tide (H4 close) will break the wall.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Wick filter protocol</h4>
      <p>Gold wicks are highly volatile. Confirmation requires a 30m candle body to close fully outside the reaction zone.</p>
    </div>
  </L1Frame>
);

export const CryptoVenueQualityConfirmation = () => (
  <L1Frame 
    title="Crypto confirmations" 
    id="PLAN-CR-1.7"
    mentorText="Crypto confirmation requires spot exchanges to match perp sweeps. If spot volume is low, the breakout is fake."
    mentorAnalogy="A backing band. If the lead singer (perp price) is screaming but the band (spot volume) is silent, the music is empty.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Cross-Exchange Confirmation</h4>
      <p>Confirm altcoin setups by checking if the corresponding BTC perpetual contract has stabilized.</p>
    </div>
  </L1Frame>
);

export const ConfirmationDebrief = () => (
  <L1Frame 
    title="Confirmation Mastered" 
    id="PLAN-1.7-DBF"
    mentorText="Confirmation gates protect you from catching falling knives. Let the market prove it wants to turn first."
    mentorAnalogy="A drawbridge. You don't drive across until the bridge is fully lowered and locked in place.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-teal-600 uppercase">Confirmation Rules Locked</h4>
      <p>You have mastered structural confirmation logic. Plans remain inactive until the gate criteria align.</p>
    </div>
  </L1Frame>
);

// --- MODULE 1.8 VISUALS ---

export const ActivationCancellationIntro = () => (
  <L1Frame 
    title="Activation & Cancellation" 
    id="PLAN-1.8-INTRO"
    mentorText="A plan is a living document with a strict expiration date. If it doesn't activate in time, kill it."
    mentorAnalogy="A carton of milk. It has a clear expiration date. If you don't drink it by then, throw it out.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Active vs Dead Plans</h4>
      <p>A trade plan has a specific lifecycle. You must define what activates the plan, and what event or time limit kills it.</p>
    </div>
  </L1Frame>
);

export const ActivationRules = () => (
  <L1Frame 
    title="Activation Rules" 
    id="PLAN-1.8-ACT"
    mentorText="A plan only activates when price enters the AOI. If it turns around before reaching the zone, the plan remains inactive."
    mentorAnalogy="A trip wire. The alarm only sounds if something physically crosses the wire.">
    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-emerald-800">State: Active</span>
      <p className="text-slate-700 text-left">The plan is active when price enters the Area of Interest and triggers our local confirmation.</p>
    </div>
  </L1Frame>
);

export const CancellationRules = () => (
  <L1Frame 
    title="Cancellation Rules" 
    id="PLAN-1.8-CAN"
    mentorText="A plan is dead the moment price crosses the invalidation level. Cancel all pending orders immediately."
    mentorAnalogy="A fuse in a circuit breaker. If the current spikes too high, the fuse blows to protect the house.">
    <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-rose-800">State: Dead</span>
      <p className="text-slate-700 text-left">The plan is canceled if price sweeps the invalidation level before trigger activation.</p>
    </div>
  </L1Frame>
);

export const MissedPlanCancellation = () => (
  <L1Frame 
    title="Missed Plan Rules" 
    id="PLAN-1.8-MIS"
    mentorText="If price hits your target before filling your entry, the move is over. Cancel the plan. Do not chase the train."
    mentorAnalogy="A missed flight. Once the plane has taken off and reached its destination, your ticket is useless.">
    <div className="p-4 bg-white border rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] text-slate-400 font-bold uppercase block">Missed Entry Rejections</span>
      <p className="text-slate-700 text-left">If price hits your target level without filling your entry, the plan is dead. Cancel all orders.</p>
    </div>
  </L1Frame>
);

export const ForexSessionHandoffCancellation = () => (
  <L1Frame 
    title="FX Handoff Cancellation" 
    id="PLAN-FX-1.8"
    mentorText="Cancel pending currency plans before session handoffs. Spreads widen and liquidity drops to near zero."
    mentorAnalogy="A bank closing its doors. You don't try to do business when the teller windows are closed and the lights are off.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Session Handoff Rules</h4>
      <p>Cancel active currency plans during the NY-Asia handoff period to prevent holding exposures through wide spreads.</p>
    </div>
  </L1Frame>
);

export const GoldMacroDistortionCancellation = () => (
  <L1Frame 
    title="Gold macro Cancellation" 
    id="PLAN-GD-1.8"
    mentorText="Gold plans are highly sensitive to yield spikes. Cancel plans if real yields jump during zone approach."
    mentorAnalogy="A change in weather. If a sudden storm rolls in, you cancel your outdoor picnic plans.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Macro release cancellation</h4>
      <p>Cancel Gold plans if yields spike significantly in the opposite direction before zone retests.</p>
    </div>
  </L1Frame>
);

export const CryptoLiquiditySpikeCancellation = () => (
  <L1Frame 
    title="Crypto Cancellations" 
    id="PLAN-CR-1.8"
    mentorText="Cancel altcoin plans if BTC sweeps its range lows with massive liquidation volume. Alts will dump harder."
    mentorAnalogy="A fire in a building. When the alarm rings, you don't stay to organize your desk; you exit immediately.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">CEX Disagreement cancellation</h4>
      <p>Cancel altcoin plans if BTC sweeps range lows with high liquidation volume.</p>
    </div>
  </L1Frame>
);

export const ActivationCancellationDebrief = () => (
  <L1Frame 
    title="Lifecycle Mastered" 
    id="PLAN-1.8-DBF"
    mentorText="Lifecycle discipline separates professionals from amateurs. Stale plans are dangerous liabilities."
    mentorAnalogy="A clean desk. You archive files that are completed or dead, keeping only active projects in front of you.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-teal-600 uppercase">Lifecycle Rules Locked</h4>
      <p>You have mastered plan activation and cancellation rules. No more holding stale or invalidated plans.</p>
    </div>
  </L1Frame>
);

// --- MODULE 1.11 VISUALS ---

export const TimingPlanIntro = () => (
  <L1Frame 
    title="Timing Plan" 
    id="PLAN-1.11-INTRO"
    mentorText="Price levels are half the equation; time is the other. Trade only during peak session hours when institutional volume is active."
    mentorAnalogy="Fishing. You go out when the fish are feeding (tide change), not in the middle of a hot, dry afternoon.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Time Logic Gating</h4>
      <p>A trading plan is not just about price coordinates. It must define the specific timing windows when the setup is valid.</p>
    </div>
  </L1Frame>
);

export const ValidTimingWindow = () => (
  <L1Frame 
    title="Valid Windows" 
    id="PLAN-1.11-VAL"
    mentorText="London and NY opens are your high-volume windows. That is when major trends are established."
    mentorAnalogy="Rush hour in a city. The highways are packed, and traffic flows in clear directions.">
    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-emerald-800">Active trading hours</span>
      <p className="text-slate-700 text-left">London Open (08:00 - 11:00 UTC) & NY Open (13:00 - 16:00 UTC).</p>
    </div>
  </L1Frame>
);

export const DeadTimingWindow = () => (
  <L1Frame 
    title="Dead Windows" 
    id="PLAN-1.11-DED"
    mentorText="Late NY and Asia sessions are low-volume ranges. Spreads are wide, and breakout plans will fail."
    mentorAnalogy="A quiet suburban street at midnight. Nothing is moving, and any sound is just random noise.">
    <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-rose-800">Inactive consolidation hours</span>
      <p className="text-slate-700 text-left">Late NY & early Asian consolidation (20:00 - 02:00 UTC).</p>
    </div>
  </L1Frame>
);

export const LatePlanWarning = () => (
  <L1Frame 
    title="Late Plan warning" 
    id="PLAN-1.11-WARN"
    mentorText="Do not plan new entries in the final hours of the NY session. You risk getting trapped in overnight swaps and spreads."
    mentorAnalogy="Starting a long hike right before sunset. You will end up lost in the dark without a flashlight.">
    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-amber-800">Time Decay risk</span>
      <p className="text-slate-700 text-left">Warning: Re-entering a plan at the end of New York session increases overnight margin risk.</p>
    </div>
  </L1Frame>
);

export const ForexTimingSessionMatrix = () => (
  <L1Frame 
    title="FX Timing Matrix" 
    id="PLAN-FX-1.11"
    mentorText="Each currency pair has its optimal session. EUR/GBP is active in London; AUD/USD has life in Tokyo and NY."
    mentorAnalogy="A global television broadcast. You schedule your show for the prime time of your target audience.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Session selection rules</h4>
      <p>Forex planning requires aligning session timing with pair spreads. Asia session is dead for EUR/USD.</p>
    </div>
  </L1Frame>
);

export const GoldMacroReleaseTiming = () => (
  <L1Frame 
    title="Gold macro Timing" 
    id="PLAN-GD-1.11"
    mentorText="Wait for macro data releases to pass. Gold moves 100 pips in seconds on news; timing plans gate these events."
    mentorAnalogy="A volcanic eruption. You don't stand near the crater when it is about to blow; you wait for the lava to stop flowing.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Macro release gates</h4>
      <p>Gating protocol: Deactivate Gold entry orders exactly 5 minutes before FOMC announcements.</p>
    </div>
  </L1Frame>
);

export const CryptoFundingWindowTiming = () => (
  <L1Frame 
    title="Crypto Timing" 
    id="PLAN-CR-1.11"
    mentorText="Crypto perps have funding rollovers every 8 hours. Plan entries after the rollover to avoid paying high premium rates."
    mentorAnalogy="A parking meter. You pull into the space right after the rollover hours to get free parking.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Funding rate rollover</h4>
      <p>In Crypto perps, audit plans around funding rate settlement hours (typically every 8 hours) to prevent carry costs.</p>
    </div>
  </L1Frame>
);

export const TimingPlanDebrief = () => (
  <L1Frame 
    title="Timing Locked" 
    id="PLAN-1.11-DBF"
    mentorText="Timing plans ensure you trade with the institutional tide. Never force setups during dead hours."
    mentorAnalogy="A surfer. You wait for the set of waves to arrive instead of paddling constantly in flat water.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-teal-600 uppercase">Timing Rules Locked</h4>
      <p>You have mastered timing plans. You will not risk capital during dead market hours.</p>
    </div>
  </L1Frame>
);

// --- MODULE 1.12 VISUALS ---

export const EventFilterIntro = () => (
  <L1Frame 
    title="Event Filter" 
    id="PLAN-1.12-INTRO"
    mentorText="High-impact news is a structural hazard. Your trade plan must contain clear rules to filter these events out."
    mentorAnalogy="A hurricane warning. You secure your boat and stay on land; you don't sail out to test your skills.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">News Event Filters</h4>
      <p>Scheduled news releases (NFP, CPI, interest rates) can distort structure. Trade plans must have explicit event filters.</p>
    </div>
  </L1Frame>
);

export const NewsEventRisk = () => (
  <L1Frame 
    title="News Event Risk" 
    id="PLAN-1.12-RSK"
    mentorText="During NFP or CPI, spreads can widen to 20 pips, and stop-loss orders will execute far below your invalidation level."
    mentorAnalogy="A power surge. It can blow out your appliances if you don't have a surge protector (event filter) installed.">
    <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-rose-800">Slippage & spread risk</span>
      <p className="text-slate-700 text-left">During news, spreads widen significantly, and execution slippage can double your initial risk.</p>
    </div>
  </L1Frame>
);

export const FirstMoveDistortionTrap = () => (
  <L1Frame 
    title="First-Move Trap" 
    id="PLAN-1.12-TRP"
    mentorText="The first move on news is almost always a trap. It sweeps stops on both sides of the range before the real trend starts."
    mentorAnalogy="A head fake in basketball. The player moves one way to pull the defender, then drives in the opposite direction.">
    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-amber-800">Algorithm sweep pattern</span>
      <p className="text-slate-700 text-left">The initial reaction to news is often a fast sweep to clean out stops before the real move starts.</p>
    </div>
  </L1Frame>
);

export const PostEventConfirmationRule = () => (
  <L1Frame 
    title="Post-Event Rules" 
    id="PLAN-1.12-RUL"
    mentorText="Wait exactly 15 minutes after news release. Let the market process the data and establish a stable structure."
    mentorAnalogy="Waiting for the mud to settle in a pond after someone stirs it up. You can't see the bottom until the water clears.">
    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] font-black uppercase text-emerald-800">Wait protocol</span>
      <p className="text-slate-700 text-left">Wait at least 15 minutes after high-impact news for price structure to stabilize.</p>
    </div>
  </L1Frame>
);

export const ForexCpiNfpFilter = () => (
  <L1Frame 
    title="FX CPI/NFP Filter" 
    id="PLAN-FX-1.12"
    mentorText="NFP and CPI create massive currency volatility. Keep all dollar pair orders closed until the H1 close stabilizes."
    mentorAnalogy="A parade. You don't try to cross the street while the marching band and floats are passing by.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Central bank releases</h4>
      <p>Cancel active dollar pair plans before FOMC interest rate announcements.</p>
    </div>
  </L1Frame>
);

export const GoldYieldUsdNewsFilter = () => (
  <L1Frame 
    title="Gold news filters" 
    id="PLAN-GD-1.12"
    mentorText="Gold CPI moves are extremely violent. Real yields shift instantly, making technical support lines irrelevant."
    mentorAnalogy="A major earthquake. Structural lines on a map don't protect buildings from collapsing during the shaking.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Gold CPI volatility</h4>
      <p>Gating: Gold CPI releases cause massive two-way wicks. Wait for structural consolidation before planning.</p>
    </div>
  </L1Frame>
);

export const CryptoUnlockLiquidationFilter = () => (
  <L1Frame 
    title="Crypto token unlocks" 
    id="PLAN-CR-1.12"
    mentorText="Altcoin unlocks represent massive supply injection. Avoid planning long trades in the 48 hours surrounding unlocks."
    mentorAnalogy="A company issuing millions of new shares. The price will dilute under the sudden flood of supply.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Token unlock filters</h4>
      <p>Altcoin unlock events (emissions) cause supply pressure. Avoid planning longs around major unlock dates.</p>
    </div>
  </L1Frame>
);

export const EventFilterDebrief = () => (
  <L1Frame 
    title="Events Mastered" 
    id="PLAN-1.12-DBF"
    mentorText="Professional traders protect their capital first. Filtering news events is the simplest way to reduce tail risk."
    mentorAnalogy="A shield. You raise it when the arrows are flying, and only lower it when the battle is over.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-teal-600 uppercase">Event Filters Locked</h4>
      <p>You have mastered news event filtering. You trade clean price delivery, not macro headlines.</p>
    </div>
  </L1Frame>
);

// --- MODULE 1.13 VISUALS ---

export const PlanQualityIntro = () => (
  <L1Frame 
    title="Plan Quality Score" 
    id="PLAN-1.13-INTRO"
    mentorText="Grade your plan before execution. A plan without clear invalidation and target rules is a gamble, not a setup."
    mentorAnalogy="A health inspector checking a restaurant. Every item on the checklist must pass to open the doors.">
    <div className="space-y-3 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Grade your Plan</h4>
      <p>Before you place any order, grade the completeness and clarity of your plan. Only A-grade plans are traded.</p>
    </div>
  </L1Frame>
);

export const GradingCompleteness = () => (
  <L1Frame 
    title="Completeness" 
    id="PLAN-1.13-CMP"
    mentorText="A complete plan requires all 5 pillars. If context or triggers are vague, the score is zero."
    mentorAnalogy="A contract. If it is missing a signature or a key clause, it is legally void and cannot be enforced.">
    <div className="p-4 bg-slate-900 text-slate-200 border rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] text-teal-400 font-bold uppercase block">Pillar checklist score</span>
      <p className="text-left text-slate-300">Verify that all 5 pillars (Context, Location, Evidence, Invalidation, Target) are fully defined in writing.</p>
    </div>
  </L1Frame>
);

export const GradingClarity = () => (
  <L1Frame 
    title="Clarity" 
    id="PLAN-1.13-CLR"
    mentorText="Clarity is binary. You must know the exact price where the plan is dead. Vague zones lead to emotional stop adjustments."
    mentorAnalogy="A high-resolution photograph. If the details are blurry, you can't verify what you are looking at.">
    <div className="p-4 bg-white border rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] text-slate-400 font-bold uppercase block">Falsification check</span>
      <p className="text-left">Is the invalidation price level precise? If you cannot identify the exact point where you are wrong, clarity is 0.</p>
    </div>
  </L1Frame>
);

export const GradingEvidenceFit = () => (
  <L1Frame 
    title="Evidence Fit" 
    id="PLAN-1.13-FIT"
    mentorText="Does the setup match the H4 trend? Contra-trend setups require double confirmation to qualify."
    mentorAnalogy="A puzzle piece. It must fit perfectly into the larger picture of the H4 context to be usable.">
    <div className="p-4 bg-slate-50 border rounded-2xl text-xs space-y-1 w-full">
      <span className="text-[10px] text-slate-500 font-bold uppercase block">Confluence auditing</span>
      <p className="text-left">Ensure your entry trigger matches the HTF context. Do not trade contra-trend setups without a sweep buffer.</p>
    </div>
  </L1Frame>
);

export const ForexPlanScoreSheet = () => (
  <L1Frame 
    title="FX Plan Scorecard" 
    id="PLAN-FX-1.13"
    mentorText="FX scorecards require session and DXY alignment. Deduct points if trading major pairs against DXY structure."
    mentorAnalogy="A pilot's pre-flight checklist. Wind speed, fuel levels, and engine oil must all be green.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">FX scorecard metrics</h4>
      <p>Forex plans must include session fit and DXY alignment. A perfect scorecard requires both boxes checked.</p>
    </div>
  </L1Frame>
);

export const GoldPlanScoreSheet = () => (
  <L1Frame 
    title="Gold Plan Scorecard" 
    id="PLAN-GD-1.13"
    mentorText="Gold scorecards require real yield confirmation. If yields are rising, long setups must be heavily discounted."
    mentorAnalogy="A builder checking the soil quality before laying a foundation. Muddy soil means the house will sink.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Gold scorecard metrics</h4>
      <p>Gold plans require real yield and ATR volatility checks. Score is reduced if planning during low ATR periods.</p>
    </div>
  </L1Frame>
);

export const CryptoPlanScoreSheet = () => (
  <L1Frame 
    title="Crypto Plan Scorecard" 
    id="PLAN-CR-1.13"
    mentorText="Crypto scorecards require spot support and funding checks. If funding is positive and crowded, short sweeps are highly likely."
    mentorAnalogy="A financial audit. You inspect the ledger (orderbook) to make sure the cash (liquidity) is real.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-[#071B36] uppercase">Crypto scorecard metrics</h4>
      <p>Crypto plans must audit spot-perp basis and exchange funding rates before execution. If funding is crowded, deduct 20 points.</p>
    </div>
  </L1Frame>
);

export const PlanQualityDebrief = () => (
  <L1Frame 
    title="Quality Locked" 
    id="PLAN-1.13-DBF"
    mentorText="Only trade plans that score 90+ on the scorecard. Protecting your capital is your primary duty."
    mentorAnalogy="A quality control engineer in a factory. You reject any part that has a microscopic crack to keep the system safe.">
    <div className="space-y-2 text-xs font-semibold text-slate-500 w-full">
      <h4 className="text-sm font-black text-teal-600 uppercase">Grading system Locked</h4>
      <p>You have mastered grading your plans. Only premium, high-quality plans pass to the execution folder.</p>
    </div>
  </L1Frame>
);
