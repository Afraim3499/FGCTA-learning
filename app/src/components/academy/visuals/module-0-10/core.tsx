import React, { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Layers, 
  Clock, 
  AlertTriangle,
  Play,
  CheckCircle,
  Eye,
  Activity,
  ArrowRight,
  Shield,
  BookOpen
} from "lucide-react";
import { 
  ForexInstitutionalFrame, 
  ForexMentorInsight, 
  MiniForexCandle, 
  ForexReadingQualityBadge, 
  ForexToggleSelector, 
  ForexStepWorkflow, 
  ForexPracticeDrill, 
  ForexDebriefDashboard 
} from "./shared";

/**
 * 1. ForexReadingLabFoundation
 */
export const ForexReadingLabFoundation = () => {
  const [volatility, setVolatility] = useState<"normal" | "high" | "news">("normal");
  const [usdContext, setUsdContext] = useState<"weak" | "strong" | "choppy">("weak");

  const getMetrics = () => {
    switch (volatility) {
      case "news":
        return { speed: "FAST (12 pips/min)", clarity: "LOW (News Distortion)", spread: "Wide (1.4 pips)" };
      case "high":
        return { speed: "MODERATE (5 pips/min)", clarity: "MEDIUM (London Open)", spread: "Standard (0.2 pips)" };
      default:
        return { speed: "NORMAL (1.2 pips/min)", clarity: "HIGH (Session Drift)", spread: "Standard (0.1 pips)" };
    }
  };

  const getReadingQuality = () => {
    if (volatility === "news") return { quality: "UNSTABLE", desc: "News release spikes distort active candles. Spreads widen. Stand aside until stabilization." };
    if (usdContext === "choppy") return { quality: "MIXED", desc: "US Dollar Index is churning. Relative pair consensus is primary guide." };
    if (volatility === "normal" && usdContext === "weak") return { quality: "HIGH QUALITY", desc: "Stable structural flow with broad DXY direction. Clear reading conditions." };
    return { quality: "CLEAR", desc: "Standard reading quality. Filter candles strictly through session clocks." };
  };

  const metrics = getMetrics();
  const qualityData = getReadingQuality();

  return (
    <ForexInstitutionalFrame label="Forex Reading Lab Console" status="SYSTEM RUNNING">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Configure the console variables to audit how Forex's volatility and USD context interact to determine overall reading quality.
        </p>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Volatility Selection */}
          <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl border border-slate-200 text-left">
            <span className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest">
              1. Volatility State
            </span>
            <div className="flex flex-col gap-1.5 mt-1">
              {[
                { id: "normal", name: "Normal Session Drift" },
                { id: "high", name: "London/NY Expansion" },
                { id: "news", name: "Interest Rate / NFP Release Spike" }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setVolatility(opt.id as any)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all border ${
                    volatility === opt.id 
                      ? "bg-[#071B36] text-white border-[#071B36]" 
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>

          {/* USD / DXY Context */}
          <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl border border-slate-200 text-left">
            <span className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest">
              2. USD Context (DXY)
            </span>
            <div className="flex flex-col gap-1.5 mt-1">
              {[
                { id: "weak", name: "Weak DXY (Clear Bearish Trend)" },
                { id: "strong", name: "Strong DXY (Clear Bullish Trend)" },
                { id: "choppy", name: "Choppy DXY (Sideways Range)" }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setUsdContext(opt.id as any)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all border ${
                    usdContext === opt.id 
                      ? "bg-[#071B36] text-white border-[#071B36]" 
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Diagnostics */}
        <div className="w-full grid grid-cols-3 gap-2 bg-[#071B36] p-4 rounded-2xl border border-blue-950 text-white shrink-0">
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-blue-950/40 border border-blue-900/40">
            <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest mb-1">Price Speed</span>
            <span className="text-xs font-black text-white text-center">{metrics.speed}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-blue-950/40 border border-blue-900/40">
            <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest mb-1">Reading Clarity</span>
            <span className="text-xs font-black text-white text-center">{metrics.clarity}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-blue-950/40 border border-blue-900/40">
            <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest mb-1">Average Spread</span>
            <span className="text-xs font-black text-white text-center">{metrics.spread}</span>
          </div>
        </div>

        {/* Console Evaluation Panel */}
        <div className="w-full bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col text-left">
            <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-wider mb-1">CONSOLE EVALUATION</span>
            <p className="text-xs text-[#071B36] font-bold leading-relaxed whitespace-normal break-words max-w-md">
              {qualityData.desc}
            </p>
          </div>
          <ForexReadingQualityBadge quality={qualityData.quality} className="self-start sm:self-center" />
        </div>

        <ForexMentorInsight 
          text="Forex is a comparison of two economies. Never read a single currency pair in isolation; always map the underlying USD and session conditions first." 
          analogy="Trading Forex without checking DXY and sessions is like driving a speedboat in heavy harbor traffic while blindfolded."
        />
      </div>
    </ForexInstitutionalFrame>
  );
};

/**
 * 2. ForexPairPressureMap
 */
export const ForexPairPressureMap = () => {
  const [selectedCase, setSelectedCase] = useState<"A" | "B" | "C" | "D">("A");

  const scenarios = {
    A: {
      title: "Case A: EUR Strong + USD Weak",
      badge: "HIGH QUALITY",
      eur: "Strong (High buying demand)",
      usd: "Weak (Active selling flow)",
      result: "EUR/USD rises cleanly. Momentum has broad backing since both forces pull in opposite directions.",
      candleColor: "indigo" as const,
      bodyHeight: 75,
      upperWick: 5,
      lowerWick: 5,
      discipline: "Highly reliable reading. Opposing currency pressures validate clean directional expansion."
    },
    B: {
      title: "Case B: EUR Flat + USD Weak",
      badge: "CLEAR",
      eur: "Flat (Quiet session consolidation)",
      usd: "Weak (Strong USD selling flow)",
      result: "EUR/USD rises, but the move is driven entirely by USD weakness. Broad USD pairs will mirror this move.",
      candleColor: "blue" as const,
      bodyHeight: 50,
      upperWick: 15,
      lowerWick: 5,
      discipline: "USD-driven move. Do not assume EUR strength. Cross-check GBP/USD and AUD/USD to confirm USD bias."
    },
    C: {
      title: "Case C: EUR Strong + USD Strong",
      badge: "MIXED",
      eur: "Strong (Positive news release)",
      usd: "Strong (Risk-off safety flow)",
      result: "EUR/USD is stuck in volatile consolidation, printing long wicks in both directions as both pull hard.",
      candleColor: "slate" as const,
      bodyHeight: 15,
      upperWick: 40,
      lowerWick: 40,
      discipline: "Mixed pressure. Refuse to assign a clear reading. The conflict creates unstable conditions."
    },
    D: {
      title: "Case D: Both Currencies Unclear",
      badge: "NOISE",
      eur: "Unclear (Late session inactivity)",
      usd: "Unclear (Sideways DXY range)",
      result: "EUR/USD moves sideways with tiny, overlapping candle bodies. Slicing spreads and low volume.",
      candleColor: "slate" as const,
      bodyHeight: 10,
      upperWick: 10,
      lowerWick: 10,
      discipline: "Ignore. No institutional interest. High risk of spread widening and random wiggles."
    }
  };

  const active = scenarios[selectedCase];

  return (
    <ForexInstitutionalFrame label="Pair Pressure Map" status="PRESSURE AUDIT">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Select a case to observe how the individual pressures of the base currency (EUR) and quote currency (USD) determine the reading.
        </p>

        {/* Case Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full shrink-0">
          {(Object.keys(scenarios) as Array<"A" | "B" | "C" | "D">).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedCase(key)}
              className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                selectedCase === key 
                  ? "bg-[#071B36] border-[#071B36] text-white shadow-md scale-102"
                  : "bg-white border-[#E2E8F0] text-slate-700 hover:bg-slate-50"
              }`}
            >
              Case {key}
            </button>
          ))}
        </div>

        {/* Visual Board */}
        <div className="w-full flex flex-col md:flex-row gap-4 bg-white p-5 rounded-3xl border border-slate-200 text-left">
          {/* Left: Candle representer */}
          <div className="md:w-[140px] shrink-0 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-3">Result Candle</span>
            <MiniForexCandle 
              color={active.candleColor} 
              bodyHeight={active.bodyHeight} 
              upperWick={active.upperWick} 
              lowerWick={active.lowerWick} 
            />
            <span className="text-[9px] font-bold text-[#071B36] mt-2">EUR/USD Behavior</span>
          </div>

          {/* Right: Analysis details */}
          <div className="flex-1 min-w-0 flex flex-col gap-4 text-left">
            <div className="flex items-center justify-between gap-4">
              <h5 className="text-sm font-black uppercase text-[#071B36] tracking-tight whitespace-normal break-words">
                {active.title}
              </h5>
              <ForexReadingQualityBadge quality={active.badge} />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[8px] font-mono text-slate-500 block">Base Pressure (EUR)</span>
                <span className="font-bold text-[#071B36]">{active.eur}</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[8px] font-mono text-slate-500 block">Quote Pressure (USD)</span>
                <span className="font-bold text-[#071B36]">{active.usd}</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              <span className="font-black text-[#071B36] block mb-0.5">MARKET OUTCOME:</span>
              {active.result}
            </p>

            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-[#071B36]">
              <span className="text-[8px] font-mono font-black text-blue-700 uppercase tracking-wider block mb-1">
                DISCIPLINED INTERPRETATION
              </span>
              <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                {active.discipline}
              </p>
            </div>
          </div>
        </div>

        <ForexMentorInsight 
          text="A trend occurs when there is opposing pressure. EUR/USD rises because the Euro is strong OR the Dollar is weak. If both are strong, price is trapped in a range."
          analogy="A tug-of-war is boring when both teams have equal strength. You only get clean movement when one side collapses and the other pulls hard."
        />
      </div>
    </ForexInstitutionalFrame>
  );
};

/**
 * 3. ForexSessionContextLab
 */
export const ForexSessionContextLab = () => {
  const [activeSession, setActiveSession] = useState<"asia" | "london" | "overlap" | "late">("asia");

  const sessions = {
    asia: {
      title: "Asia Session (Tokyo Clock)",
      vol: "LOW TO MODERATE",
      characteristic: "Range Compression & Accumulation",
      behavior: "Market is thin. Price typically moves sideways within a narrow range. Breakouts during this session have low participation and are highly prone to reversing as soon as London opens.",
      candle: { body: 15, color: "slate" as const, upper: 10, lower: 10 },
      insight: "Asia Session ranges are best treated as compression zones to be mapped, not breakouts to be chased."
    },
    london: {
      title: "London Session (European Clock)",
      vol: "HIGH PARTICIPATION",
      characteristic: "Directional Expansion",
      behavior: "European banks open. Massive liquidity enters the market, establishing the initial daily trend. Breakout attempts here have strong institutional backing.",
      candle: { body: 60, color: "blue" as const, upper: 5, lower: 10 },
      insight: "London session provides the cleanest structural trends because it has high participation."
    },
    overlap: {
      title: "London / New York Overlap",
      vol: "MAXIMUM VOLATILITY",
      characteristic: "Heavy Volume Overlap",
      behavior: "Both London and New York financial centers are open simultaneously. News releases (CPI, GDP) spike volatility. Price moves can be clean but highly volatile, with massive capital flowing.",
      candle: { body: 75, color: "indigo" as const, upper: 20, lower: 15 },
      insight: "Overlap requires strict risk filters. High volume can confirm structure but also thins liquidity before data."
    },
    late: {
      title: "Late New York Session",
      vol: "DRAINING VOLATILITY",
      characteristic: "Consolidation & Distribution",
      behavior: "European markets close, and American volume tapers off. Price action slows down into drift. Spreads can widen at the daily rollover (5 PM EST).",
      candle: { body: 8, color: "slate" as const, upper: 15, lower: 15 },
      insight: "Stand aside during late New York. Low volume leads to choppy wiggles with high transaction costs."
    }
  };

  const active = sessions[activeSession];

  return (
    <ForexInstitutionalFrame label="Session Context Analyzer" status="CLOCK AUDIT">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Select a session clock below to examine how the active trading hour changes the weight of market evidence.
        </p>

        {/* Sessions tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full shrink-0">
          {(Object.keys(sessions) as Array<"asia" | "london" | "overlap" | "late">).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSession(key)}
              className={`p-2 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                activeSession === key 
                  ? "bg-[#071B36] border-[#071B36] text-white shadow-md"
                  : "bg-white border-[#E2E8F0] text-slate-700 hover:bg-slate-50"
              }`}
            >
              {key === "asia" ? "Asia" : key === "london" ? "London" : key === "overlap" ? "LDN/NY Overlap" : "Late New York"}
            </button>
          ))}
        </div>

        {/* Layout details */}
        <div className="w-full flex flex-col md:flex-row gap-4 bg-white p-5 rounded-3xl border border-slate-200 text-left">
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <div>
              <h5 className="text-sm font-black uppercase text-[#071B36] tracking-tight mb-2">
                {active.title}
              </h5>
              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="text-[8px] font-mono text-slate-500 block">Typical Volatility</span>
                  <span className="font-bold text-[#071B36]">{active.vol}</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="text-[8px] font-mono text-slate-500 block">Class Characteristic</span>
                  <span className="font-bold text-[#071B36]">{active.characteristic}</span>
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                {active.behavior}
              </p>
            </div>

            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-[#071B36]">
              <span className="text-[8px] font-mono font-black text-blue-700 uppercase tracking-wider block mb-1">
                SESSION RULES
              </span>
              <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                {active.insight}
              </p>
            </div>
          </div>

          {/* Candle Visualization */}
          <div className="md:w-[150px] shrink-0 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <Clock className="text-blue-600 mb-2" size={18} />
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-4">Clock Model</span>
            <MiniForexCandle 
              color={active.candle.color} 
              bodyHeight={active.candle.body} 
              upperWick={active.candle.upper} 
              lowerWick={active.candle.lower} 
            />
          </div>
        </div>

        <ForexMentorInsight 
          text="Clocks define participation. Quiet sessions produce range compression, while overlaps produce the highest volume. Align your reading expectations with the session characteristics."
          analogy="You wouldn't try to fish in a dry riverbed. Wait for the tide (active session overlap) to come in before seeking clear movement."
        />
      </div>
    </ForexInstitutionalFrame>
  );
};

/**
 * 4. ForexSessionHandoffLab
 */
export const ForexSessionHandoffLab = () => {
  const [activePath, setActivePath] = useState<"continue" | "reverse" | "chop">("continue");

  const paths = {
    continue: {
      title: "Path 1: New York Continuation",
      badge: "BROAD CONSENSUS",
      eurUsd: "EUR/USD breaks London high cleanly, DXY breaks support",
      gbpUsd: "GBP/USD breaks high, confirming broad USD selling flow",
      behavior: "London establishes a bullish trend. When New York opens, American capital flows in the same direction, pushing EUR/USD above the London high and holding it. Related pairs also break high. The trend is confirmed.",
      verdict: "High-quality reading. London expansion is accepted by New York order books.",
      candle: { body: 65, color: "indigo" as const, upper: 5, lower: 10 }
    },
    reverse: {
      title: "Path 2: New York Rejection",
      badge: "REJECTION SWEEP",
      eurUsd: "EUR/USD spikes above London high, wicks back down",
      gbpUsd: "GBP/USD fails to break high and pulls back",
      behavior: "London pushes price up. New York opens, spikes price briefly above the London high to trigger stops, then aggressively reverses direction, closing below the London range floor.",
      verdict: "Trap sweep. The London high served as liquidity rather than support. Bullish reading invalidated.",
      candle: { body: 15, color: "rose" as const, upper: 55, lower: 5 }
    },
    chop: {
      title: "Path 3: New York Stalling / Chop",
      badge: "MIXED ENVIRONMENT",
      eurUsd: "EUR/USD chops inside London boundaries",
      gbpUsd: "GBP/USD moves sideways with no clear breakouts",
      behavior: "London establishes a range, but New York lacks institutional drivers. Price drifts sideways, failing to challenge either the London high or low. Spreads are tight but momentum is dead.",
      verdict: "Sideways range. Stand aside. The market has no directional consensus.",
      candle: { body: 10, color: "slate" as const, upper: 15, lower: 15 }
    }
  };

  const active = paths[activePath];

  return (
    <ForexInstitutionalFrame label="Session Handoff Analyzer" status="HANDOFF SIMULATOR">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          A London trend is only a premise. New York decides the outcome. Select a handoff path to examine the behavior.
        </p>

        {/* Path selectors */}
        <div className="flex justify-center w-full shrink-0">
          <ForexToggleSelector 
            options={[
              { id: "continue", name: "1. Continuation" },
              { id: "reverse", name: "2. Rejection Sweep" },
              { id: "chop", name: "3. Range Chop / Stall" }
            ]} 
            selectedId={activePath} 
            onChange={(id) => setActivePath(id as any)} 
          />
        </div>

        {/* Visual details */}
        <div className="w-full flex flex-col md:flex-row gap-4 bg-white p-5 rounded-3xl border border-slate-200 text-left">
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <h5 className="text-sm font-black uppercase text-[#071B36] tracking-tight">
                {active.title}
              </h5>
              <ForexReadingQualityBadge quality={active.badge} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[8px] font-mono text-slate-500 block">EUR/USD Details</span>
                <span className="font-bold text-[#071B36]">{active.eurUsd}</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[8px] font-mono text-slate-500 block">GBP/USD Correlation</span>
                <span className="font-bold text-[#071B36]">{active.gbpUsd}</span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              {active.behavior}
            </p>

            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-[#071B36]">
              <span className="text-[8px] font-mono font-black text-blue-700 uppercase tracking-wider block mb-1">
                VERDICT
              </span>
              <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                {active.verdict}
              </p>
            </div>
          </div>

          {/* Candle Representation */}
          <div className="md:w-[150px] shrink-0 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-4">Handoff Candle</span>
            <MiniForexCandle 
              color={active.candle.color} 
              bodyHeight={active.candle.body} 
              upperWick={active.candle.upper} 
              lowerWick={active.candle.lower} 
            />
          </div>
        </div>

        <ForexMentorInsight 
          text="A session handoff brings a fresh group of participants. Let the new session confirm its direction before assuming a continuation move is valid."
          analogy="In a relay race, the second runner might drop the baton or run backward. Never assume the second runner will continue the speed of the first."
        />
      </div>
    </ForexInstitutionalFrame>
  );
};

/**
 * 5. ForexDxyMirrorTrap
 */
export const ForexDxyMirrorTrap = () => {
  const [activeMode, setActiveMode] = useState<"mirror" | "diverge">("mirror");

  return (
    <ForexInstitutionalFrame label="The DXY Mirror Analyzer" status="CORRELATION MONITOR">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Compare the mirror trap (EUR/USD moving opposite to DXY due to weighting) with independent USD verification.
        </p>

        {/* Toggle Selector */}
        <div className="flex justify-center w-full shrink-0">
          <ForexToggleSelector
            options={[
              { id: "mirror", name: "1. The Mirror Trap (EUR/USD vs DXY)" },
              { id: "diverge", name: "2. Independent Verification (DXY vs USD/JPY)" }
            ]}
            selectedId={activeMode}
            onChange={(id) => setActiveMode(id as any)}
          />
        </div>

        {/* Visual box */}
        <div className="w-full flex flex-col md:flex-row gap-4 bg-white p-5 rounded-3xl border border-slate-200 text-left items-center">
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {activeMode === "mirror" ? (
              <>
                <h5 className="text-sm font-black uppercase text-[#071B36] tracking-tight">
                  The Weighting Trap
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                  Because the Euro makes up 57.6% of the DXY basket, EUR/USD and DXY naturally move as mirrors. If EUR/USD rises, DXY will almost always fall. This is NOT two separate pieces of confirmation.
                </p>
                <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-rose-950">
                  <span className="text-[8px] font-mono font-black text-rose-700 uppercase tracking-wider block mb-1">
                    WARNING
                  </span>
                  <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                    Do not count the same Euro-to-Dollar transaction twice. Aligned EUR/USD and DXY movements represent a single, shared relationship.
                  </p>
                </div>
              </>
            ) : (
              <>
                <h5 className="text-sm font-black uppercase text-[#071B36] tracking-tight">
                  Broad USD Verification
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                  To confirm real USD strength or weakness, check pairs that do not contain the Euro (such as USD/JPY or USD/CAD). If EUR/USD rises, DXY falls, and USD/JPY also drops, you have confirmed broad Dollar selling.
                </p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950">
                  <span className="text-[8px] font-mono font-black text-emerald-700 uppercase tracking-wider block mb-1">
                    DISCIPLINED AUDIT
                  </span>
                  <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                    Cross-checking unrelated USD pairs is the only way to confirm true Dollar direction and avoid isolated venue noise.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Graphical comparison */}
          <div className="md:w-[220px] shrink-0 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl w-full">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-3">Correlation Feed</span>
            
            <div className="flex flex-col gap-2 w-full text-[10px] font-mono font-bold text-center">
              <div className="p-2 bg-blue-100 text-blue-800 rounded border border-blue-200 flex justify-between items-center">
                <span>EUR/USD</span>
                <span className="text-emerald-600 flex items-center gap-1"><TrendingUp size={12} /> UP 30 Pips</span>
              </div>
              <div className="p-2 bg-slate-100 text-slate-800 rounded border border-slate-200 flex justify-between items-center">
                <span>DXY Index</span>
                <span className="text-rose-600 flex items-center gap-1"><TrendingDown size={12} /> DOWN 0.3%</span>
              </div>

              {activeMode === "mirror" ? (
                <div className="p-2 bg-rose-50 text-rose-700 rounded border border-rose-200 text-[9px] uppercase font-black text-center mt-1">
                  Mirror Trap: 57.6% Shared weight
                </div>
              ) : (
                <div className="p-2 bg-blue-50 text-blue-700 rounded border border-blue-200 flex justify-between items-center mt-1">
                  <span>USD/JPY</span>
                  <span className="text-rose-600 flex items-center gap-1"><TrendingDown size={12} /> DOWN 35 Pips</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <ForexMentorInsight 
          text="DXY index is heavily weighted toward the Euro (57.6%). Aligned moves between DXY and EUR/USD represent the same underlying trade. Cross-check other USD pairs for broad consensus."
          analogy="Looking at a reflection in the mirror does not prove a second person is in the room. Verify USD moves using independent pairs like USD/JPY."
        />
      </div>
    </ForexInstitutionalFrame>
  );
};

/**
 * 6. ForexRelatedPairLab
 */
export const ForexRelatedPairLab = () => {
  const [hasConsensus, setHasConsensus] = useState<boolean>(true);

  return (
    <ForexInstitutionalFrame label="Related Pairs Consensus Board" status="BASKET AUDIT">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Whales buy or sell Dollar baskets. Audit related pairs to confirm whether the move is isolated (low quality) or broadly supported (high quality).
        </p>

        {/* Toggle consensus */}
        <div className="flex justify-center w-full shrink-0">
          <button
            onClick={() => setHasConsensus(!hasConsensus)}
            className="px-4 py-2 bg-[#071B36] text-white rounded-xl text-xs font-bold hover:bg-blue-900 transition-all cursor-pointer"
          >
            Toggle State: {hasConsensus ? "Show Related Pair Conflict" : "Show Aligned Consensus"}
          </button>
        </div>

        {/* Comparison grid */}
        <div className="w-full flex flex-col md:flex-row gap-4 bg-white p-5 rounded-3xl border border-slate-200 text-left items-center">
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <h5 className="text-sm font-black uppercase text-[#071B36] tracking-tight">
                {hasConsensus ? "Aligned Basket consensus" : "Isolated related pair conflict"}
              </h5>
              <ForexReadingQualityBadge quality={hasConsensus ? "BROAD CONSENSUS" : "ISOLATED SPIKE"} />
            </div>

            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              {hasConsensus 
                ? "All Dollar-quoted pairs are moving in alignment, confirming institutional capital is dumping USD across the board."
                : "Only GBP/USD is moving. EUR/USD and AUD/USD are completely flat. DXY is at support. The move is isolated, signaling high fake-out risk."
              }
            </p>

            <div className={`p-3 rounded-xl border text-xs font-bold leading-normal whitespace-normal break-words ${
              hasConsensus ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-rose-50 border-rose-200 text-rose-950"
            }`}>
              <span className="text-[8px] font-mono uppercase tracking-wider block mb-1">
                DISCIPLINED ACTION
              </span>
              {hasConsensus 
                ? "Valid reading. The confirmation across multiple venues provides strong evidence of broad market flow."
                : "Mixed reading. Stand aside. The lack of related-pair support invalidates the directional momentum."
              }
            </div>
          </div>

          {/* Basket Grid */}
          <div className="md:w-[220px] shrink-0 bg-slate-50 border border-slate-200 p-4 rounded-2xl w-full">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-3 block text-center">Dollar Basket Monitor</span>
            
            <div className="flex flex-col gap-2 text-[10px] font-mono font-bold">
              <div className="flex justify-between items-center p-2 bg-white rounded border border-slate-200">
                <span>GBP/USD</span>
                <span className="text-emerald-600 font-bold flex items-center gap-0.5"><TrendingUp size={11} /> UP 40p</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded border border-slate-200">
                <span>EUR/USD</span>
                <span className={hasConsensus ? "text-emerald-600 font-bold flex items-center gap-0.5" : "text-slate-600"}>
                  {hasConsensus ? <><TrendingUp size={11} /> UP 30p</> : "FLAT (Chop)"}
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded border border-slate-200">
                <span>AUD/USD</span>
                <span className={hasConsensus ? "text-emerald-600 font-bold flex items-center gap-0.5" : "text-slate-600"}>
                  {hasConsensus ? <><TrendingUp size={11} /> UP 25p</> : "FLAT (Chop)"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <ForexMentorInsight 
          text="Institutions buy and sell currency baskets. An isolated breakout on a single pair is highly unstable unless supported by related pairs in the same basket."
          analogy="If only one car in a convoy starts driving while the others remain parked, it is likely just a driver moving to a different parking space, not a convoy start."
        />
      </div>
    </ForexInstitutionalFrame>
  );
};

/**
 * 7. ForexAdrCautionFilter
 */
export const ForexAdrCautionFilter = () => {
  const [adrConsumed, setAdrConsumed] = useState<30 | 70 | 95>(70);

  const getMetrics = () => {
    switch (adrConsumed) {
      case 95:
        return { 
          badge: "UNSTABLE / STRETCHED", 
          desc: "Price has consumed 95% of its typical daily limit. Chasing continuation here is extremely low-probability.",
          style: "bg-rose-500"
        };
      case 30:
        return { 
          badge: "CLEAR / LOW STRETCH", 
          desc: "Only 30% of ADR consumed. The market has ample resource remaining for directional expansion.",
          style: "bg-emerald-500"
        };
      default:
        return { 
          badge: "STABLE", 
          desc: "70% of ADR consumed. Price is stretching. Fresh breakouts require strong verification and related-pair alignment.",
          style: "bg-amber-500"
        };
    }
  };

  const metrics = getMetrics();

  return (
    <ForexInstitutionalFrame label="Daily Range Stretch Meter" status="ADR FILTER ACTIVE">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          ADR checks prevent chasing tired markets. Select a stretch level to audit the daily range consumed.
        </p>

        {/* Selector */}
        <div className="flex justify-center w-full shrink-0">
          <ForexToggleSelector
            options={[
              { id: "30", name: "30% Consumed" },
              { id: "70", name: "70% Consumed" },
              { id: "95", name: "95% Consumed (Stretched)" }
            ]}
            selectedId={String(adrConsumed)}
            onChange={(id) => setAdrConsumed(Number(id) as any)}
          />
        </div>

        {/* Visual progress bar */}
        <div className="w-full flex flex-col md:flex-row gap-4 bg-white p-5 rounded-3xl border border-slate-200 text-left items-center">
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <h5 className="text-sm font-black uppercase text-[#071B36] tracking-tight">
                Daily Range Consumption: {adrConsumed}%
              </h5>
              <ForexReadingQualityBadge quality={metrics.badge} />
            </div>

            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              {metrics.desc}
            </p>

            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-[#071B36]">
              <span className="text-[8px] font-mono font-black text-blue-700 uppercase tracking-wider block mb-1">
                ADR WARNING
              </span>
              <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                ADR is a caution filter. It does NOT mean price must reverse. It tells you that continuation has a much higher burden of proof.
              </p>
            </div>
          </div>

          {/* Meter representation */}
          <div className="md:w-[220px] shrink-0 bg-slate-50 border border-slate-200 p-5 rounded-2xl w-full text-center flex flex-col gap-3 justify-center">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest block">ADR Stretch</span>
            
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
              <div 
                className={`h-full transition-all duration-500 ${metrics.style}`} 
                style={{ width: `${adrConsumed}%` }} 
              />
            </div>
            <span className="text-[10px] font-mono text-[#071B36] font-bold">
              Avg ADR: 80 Pips | Today: {Math.round((adrConsumed / 100) * 80)} Pips
            </span>
          </div>
        </div>

        <ForexMentorInsight 
          text="ADR is a caution filter. A pair that has consumed most of its daily range is structurally exhausted. Any continuation breakout requires much heavier proof."
          analogy="A runner who has already run 25 miles of a marathon can still sprint, but they are far more likely to slow down or collapse. Respect the daily limits."
        />
      </div>
    </ForexInstitutionalFrame>
  );
};

/**
 * 8. ForexNewsDistortionLab
 */
export const ForexNewsDistortionLab = () => {
  const [step, setStep] = useState<number>(0);

  const steps = [
    {
      title: "1. Pre-News Consolidation",
      spread: "0.2 pips (Tight)",
      status: "STABLE STRUCTURE",
      desc: "EUR/USD is consolidating in a tight 10-pip London range. Liquidity is thick as banks hold positions ahead of NFP jobs report.",
      candle: { body: 10, color: "slate" as const, upper: 5, lower: 5 }
    },
    {
      title: "2. Algorithmic Spike Shock",
      spread: "1.5 pips (Thinned Book)",
      status: "NEWS DISTORTION",
      desc: "NFP data releases. EUR/USD spikes 40 pips downward in 10 seconds, sweeps stops below yesterday's low, and immediately wicks back. The spread widens significantly. Chasing the breakout leads to massive slippage.",
      candle: { body: 20, color: "rose" as const, upper: 5, lower: 50 }
    },
    {
      title: "3. Post-News Stabilization",
      spread: "0.2 pips (Normal)",
      status: "STABILIZED HOLD",
      desc: "15 minutes post-release. Algorithms subside and spreads return to normal. Price holds above support and closes the hour leaving a long rejection wick. The news distortion has settled into verified structure.",
      candle: { body: 30, color: "blue" as const, upper: 5, lower: 35 }
    }
  ];

  const active = steps[step];

  return (
    <ForexInstitutionalFrame label="News Distortion Timeline" status="NEWS AUDIT">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          News releases distort early candles. Advance through the timeline steps to audit the stabilization.
        </p>

        {/* Stepper buttons */}
        <div className="w-full flex justify-between bg-slate-100 border border-slate-200 p-2 rounded-xl shrink-0 gap-1">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              className={`flex-1 p-2 rounded-lg text-xs font-bold text-center transition-all cursor-pointer ${
                step === idx 
                  ? "bg-[#071B36] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Step {idx + 1}
            </button>
          ))}
        </div>

        {/* Step display */}
        <div className="w-full flex flex-col md:flex-row gap-4 bg-white p-5 rounded-3xl border border-slate-200 text-left items-center">
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <h5 className="text-sm font-black uppercase text-[#071B36] tracking-tight">
                {active.title}
              </h5>
              <ForexReadingQualityBadge quality={active.status} />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[8px] font-mono text-slate-500 block">Average Spread</span>
                <span className="font-bold text-[#071B36]">{active.spread}</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[8px] font-mono text-slate-500 block">System State</span>
                <span className="font-bold text-[#071B36]">{active.status}</span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              {active.desc}
            </p>
          </div>

          {/* Candle Representation */}
          <div className="md:w-[150px] shrink-0 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl w-full">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-4">Candle Close</span>
            <MiniForexCandle 
              color={active.candle.color} 
              bodyHeight={active.candle.body} 
              upperWick={active.candle.upper} 
              lowerWick={active.candle.lower} 
            />
          </div>
        </div>

        <ForexMentorInsight 
          text="News spikes are algorithm-driven events that sweep stops in thinned books. Wait for the stabilization period (15-30 minutes) to read the true institutional response."
          analogy="When a firecracker goes off in a room, dust flies everywhere. Wait for the air to clear (stabilization) before trying to inspect the room's structure."
        />
      </div>
    </ForexInstitutionalFrame>
  );
};

/**
 * 9. ForexVerificationSequence
 */
export const ForexVerificationSequence = () => {
  const steps = [
    {
      title: "1. Audit Pair Pressure",
      action: "Identify Base vs Quote forces",
      desc: "Check if the move is driven by base currency strength, quote currency weakness, or mixed sideways consolidation.",
      status: "CHECK COMPLETED",
      icon: Activity
    },
    {
      title: "2. Verify Session Context",
      action: "Check session clocks",
      desc: "Audit if the candle formed during high volume (London/New York overlap) or quiet liquidity (Asia, late session).",
      status: "CLOCK CHECKED",
      icon: Clock
    },
    {
      title: "3. Check USD/DXY Context",
      action: "DXY index alignment",
      desc: "Inspect DXY location. Ensure you avoid double-counting EUR/USD and DXY. Cross-check USD/JPY for true USD flow.",
      status: "CORRELATION VERIFIED",
      icon: Layers
    },
    {
      title: "4. Confirm Related Pairs Consensus",
      action: "Confirm basket movement",
      desc: "Ensure related pairs (GBP/USD, AUD/USD) support the direction. Isolated moves have high fake-out risk.",
      status: "BASKET ALIGNED",
      icon: Eye
    },
    {
      title: "5. ADR Stretch Filter",
      action: "Check daily exhaustion limits",
      desc: "Verify what percentage of ADR has been consumed. Avoid chasing continuation when daily stretch exceeds 80%.",
      status: "RANGE FILTER VERIFIED",
      icon: Shield
    },
    {
      title: "6. Classify Reading Quality",
      action: "Assign quality label",
      desc: "Sort the analysis into Clear (consensus), Mixed (conflicting evidence), or Unclear (waiting for data). Wait if mixed.",
      status: "AUDIT RESOLVED",
      icon: CheckCircle
    }
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <ForexStepWorkflow 
        steps={steps} 
        label="Forex Verification Protocol" 
        status="AUDIT ACTIVE"
        desc="Follow the chronological checklist below to systematically audit a Forex pair move and avoid mirror traps."
      />
      <ForexMentorInsight 
        text="Follow the verification protocol in strict order. Never look at candle size or speed before auditing pair pressure, sessions, DXY, related pairs, and daily stretch."
        analogy="A pilot does not skip the pre-flight check because the engines look shiny. Follow the sequence systematically to protect your capital."
      />
    </div>
  );
};

/**
 * 10. ForexReadingLabPracticeDrill
 */
export const ForexReadingLabPracticeDrill = () => {
  const question = "During the New York morning session, GBP/USD pushes upward from a prior reaction zone. EUR/USD remains flat near the middle of its range. DXY is sitting near a daily support area and has not clearly broken lower. GBP/USD has already consumed 80% of its typical Daily Range (ADR). There was a USD news release 10 minutes ago, and the subsequent candle hesitates. What is the most disciplined Forex reading?";

  const options = [
    {
      id: "A",
      text: "Clear bullish reading because GBP/USD pushed upward from a reaction area.",
      isCorrect: false,
      feedback: "Incorrect. While GBP/USD moved, EUR/USD is flat and DXY is at support. An isolated move near ADR limits with news distortion is not a clear reading."
    },
    {
      id: "B",
      text: "Mixed reading because the move exists, but related pairs, DXY location, ADR stretch, news pressure, and weak follow-through limit confidence.",
      isCorrect: true,
      feedback: "Correct! This is a mixed reading. There is conflict between the GBP/USD move and DXY support, related-pair flatness, ADR limits, and lack of follow-through. Standing aside is the correct action."
    },
    {
      id: "C",
      text: "Guaranteed reversal because GBP/USD has moved most of its daily range.",
      isCorrect: false,
      feedback: "Incorrect. ADR is a caution filter, not an automatic reversal signal. Reversals still require structural shifts and fresh evidence."
    },
    {
      id: "D",
      text: "Ignore the reading completely because Forex cannot be read during New York.",
      isCorrect: false,
      feedback: "Incorrect. Forex can be read during New York, but you must systematically identify conflicts and classify the reading as mixed when evidence is not clean."
    }
  ];

  const chartPreview = (
    <div className="w-full bg-[#071B36] border border-blue-950 p-4 rounded-2xl text-white flex flex-col gap-3 relative overflow-hidden shrink-0">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#2563EB_1px,transparent_1px)] bg-[length:12px_12px]" />
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-blue-900 pb-2 z-10">
        <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest font-black">NY Morning Simulator Feed</span>
        <span className="text-[8px] font-mono bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded uppercase font-bold">News distorted</span>
      </div>

      {/* Grid displays */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-mono font-bold z-10">
        <div className="p-2 bg-blue-950/50 border border-blue-900/50 rounded flex flex-col">
          <span className="text-[7px] text-blue-400 uppercase mb-0.5">GBP/USD</span>
          <span className="text-emerald-400">+45 Pips (Push)</span>
        </div>
        <div className="p-2 bg-blue-950/50 border border-blue-900/50 rounded flex flex-col">
          <span className="text-[7px] text-blue-400 uppercase mb-0.5">EUR/USD</span>
          <span className="text-slate-400">FLAT (Chop)</span>
        </div>
        <div className="p-2 bg-blue-950/50 border border-blue-900/50 rounded flex flex-col">
          <span className="text-[7px] text-blue-400 uppercase mb-0.5">DXY Location</span>
          <span className="text-amber-400">Near support floor</span>
        </div>
        <div className="p-2 bg-blue-950/50 border border-blue-900/50 rounded flex flex-col">
          <span className="text-[7px] text-blue-400 uppercase mb-0.5">GBP ADR stretch</span>
          <span className="text-rose-400">80% consumed</span>
        </div>
      </div>

      <div className="text-[8px] text-slate-400 font-mono text-center z-10 border-t border-blue-900/50 pt-1">
        VARIABLES SCAN: Related conflict + DXY support caution + ADR stretch + News distortion + Follow-through stall
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col gap-6">
      <ForexPracticeDrill 
        question={question} 
        options={options} 
        chartPreview={chartPreview} 
        label="Forex Lab Practice Check"
        status="DRILL ACTIVE"
      />
      <ForexMentorInsight 
        text="Mixed evidence is high-quality information. The most profitable action in a conflicting market is to stay unclear and preserve your capital."
        analogy="If the weather forecast warns of a storm, a professional sailor stays in the harbor instead of guessing whether the storm will turn away."
      />
    </div>
  );
};

/**
 * 11. ForexReadingLabDebrief
 */
export const ForexReadingLabDebrief = () => {
  const cards = [
    {
      id: "pressure",
      title: "1. Pair Pressure",
      habit: "Identify Relative Forces First",
      desc: "EUR/USD rises because EUR is strong OR USD is weak. Never assign base currency strength before auditing USD/DXY and related pairs.",
      icon: Activity
    },
    {
      id: "sessions",
      title: "2. Session Context",
      habit: "Respect Clock Characteristics",
      desc: "Volume and intent vary across sessions. A breakout during Asia has low participation and must be read with caution compared to London or London/NY overlaps.",
      icon: Clock
    },
    {
      id: "related",
      title: "3. Basket Consensus",
      habit: "Verify Aligned Movements",
      desc: "Institutions trade baskets. A directional move on GBP/USD must be backed by similar movement on EUR/USD and DXY to confirm broad flow.",
      icon: Layers
    },
    {
      id: "adr",
      title: "4. ADR caution filter",
      habit: "Respect Exhaustion Limits",
      desc: "Do not chase breaks when a pair has consumed most of its typical daily range. A stretched pair requires much stronger verification before continuation is valid.",
      icon: Shield
    }
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <ForexDebriefDashboard 
        cards={cards} 
        label="Forex Lab Debrief Dashboard"
        status="DRILL COMPLETE"
        desc="Interactive Debrief: Select a context coordinate layer below to inspect the core Forex-reading verification habit."
      />
      <ForexMentorInsight 
        text="Mastery is not about predicting the future. It is about having a repeatable, disciplined reading protocol that separates consensus from isolated noise."
        analogy="A clinical auditor does not get excited by a company's profits; they verify the ledger entries. Be a clinical auditor of chart evidence."
      />
    </div>
  );
};
