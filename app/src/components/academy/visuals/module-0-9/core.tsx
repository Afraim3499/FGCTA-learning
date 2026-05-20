import React, { useState } from "react";
import { 
  TrendingUp, 
  Percent, 
  Layers, 
  Zap, 
  Map, 
  HelpCircle, 
  AlertTriangle,
  Play,
  RotateCcw,
  CheckCircle,
  Eye,
  TrendingDown,
  Sparkles
} from "lucide-react";
import { 
  GoldInstitutionalFrame, 
  GoldMentorInsight, 
  MiniGoldCandle, 
  GoldReadingQualityBadge, 
  GoldToggleSelector, 
  GoldStepWorkflow, 
  GoldPracticeDrill, 
  GoldDebriefDashboard 
} from "./shared";

/**
 * 1. GoldReadingLabFoundation
 */
export const GoldReadingLabFoundation = () => {
  const [volatility, setVolatility] = useState<"normal" | "high" | "news">("normal");
  const [usdContext, setUsdContext] = useState<"weak" | "strong" | "choppy">("weak");

  const getMetrics = () => {
    switch (volatility) {
      case "news":
        return { speed: "CRITICAL (35 pips/min)", clarity: "LOW (News Spike)", spread: "Wide (1.5 pips)" };
      case "high":
        return { speed: "HIGH (15 pips/min)", clarity: "MEDIUM (London Open)", spread: "Standard (0.4 pips)" };
      default:
        return { speed: "NORMAL (4 pips/min)", clarity: "HIGH (Session Drift)", spread: "Standard (0.3 pips)" };
    }
  };

  const getReadingQuality = () => {
    if (volatility === "news") return { quality: "UNSTABLE", desc: "News spike distortions make active candles unreadable. Stand aside." };
    if (usdContext === "choppy") return { quality: "MIXED", desc: "US Dollar Index is churning. Gold location is the primary guide." };
    if (volatility === "normal" && usdContext === "weak") return { quality: "HIGH QUALITY", desc: "Stable structural flow with strong USD direction. Clear reading conditions." };
    return { quality: "CLEAR", desc: "Standard reading quality. Filter candles strictly through reaction zones." };
  };

  const metrics = getMetrics();
  const qualityData = getReadingQuality();

  return (
    <GoldInstitutionalFrame label="Gold Reading Lab Console" status="SYSTEM RUNNING">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Configure the console variables to audit how Gold's volatility and USD context interact to determine overall reading quality.
        </p>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Volatility Selection */}
          <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl border border-slate-200">
            <span className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest">
              1. Gold Volatility State
            </span>
            <div className="flex flex-col gap-1.5 mt-1">
              {[
                { id: "normal", name: "Normal Session Drift" },
                { id: "high", name: "London/NY Expansion" },
                { id: "news", name: "CPI / NFP Release Spike" }
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
          <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl border border-slate-200">
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
        <div className="w-full grid grid-cols-3 gap-2 bg-[#071B36] p-4 rounded-2xl border border-amber-950 text-white shrink-0">
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-amber-950/40 border border-amber-900/40">
            <span className="text-[8px] font-mono text-amber-400 uppercase tracking-widest mb-1">Tick Speed</span>
            <span className="text-xs font-black text-white text-center">{metrics.speed}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-amber-950/40 border border-amber-900/40">
            <span className="text-[8px] font-mono text-amber-400 uppercase tracking-widest mb-1">Raw Clarity</span>
            <span className="text-xs font-black text-white text-center">{metrics.clarity}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-amber-950/40 border border-amber-900/40">
            <span className="text-[8px] font-mono text-amber-400 uppercase tracking-widest mb-1">Broker Spread</span>
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
          <GoldReadingQualityBadge quality={qualityData.quality} className="self-start sm:self-center" />
        </div>

        <GoldMentorInsight 
          text="Gold is not hard because it is random. It is hard because it moves fast, reacts sharply, and punishes learners who react before auditing location." 
          analogy="Chasing a cheetah inside a dense forest is suicide. Stand at the clearing and wait for it to cross your coordinates."
        />
      </div>
    </GoldInstitutionalFrame>
  );
};

/**
 * 2. GoldSpeedVsClarity
 */
export const GoldSpeedVsClarity = () => {
  const [selectedLoc, setSelectedLoc] = useState<"A" | "B" | "C" | "D">("A");

  const locations = {
    A: {
      title: "Location A: Middle of Range Noise",
      badge: "NOISE",
      desc: "Gold prints a huge green candle directly in the center of a wide $40 range. There are no prior swing highs or reaction floors nearby. Retail traders buy the speed; professional readers ignore it completely.",
      candleColor: "gold" as const,
      upperWick: 10,
      lowerWick: 10,
      bodyHeight: 80,
      discipline: "Ignore the move. Range midpoints have low informational value. Price is just traversing between edges."
    },
    B: {
      title: "Location B: Under HTF Resistance Ceiling",
      badge: "TRAP",
      desc: "Gold surges rapidly, printing a green bar straight into a verified 4-Hour resistance ceiling. The speed looks bullish, but price is hitting a major supply wall. Chasing here is a high-risk mistake.",
      candleColor: "amber" as const,
      upperWick: 30,
      lowerWick: 5,
      bodyHeight: 70,
      discipline: "Watch for rejection. Bullish momentum is moving straight into institutional sell orders. The location overrides the candle color."
    },
    C: {
      title: "Location C: Zone Breach without Follow-Through",
      badge: "UNSTABLE",
      desc: "A fast green candle spikes through a resistance zone, but the next candle stalling indicates a lack of follow-through. The breakout is unconfirmed.",
      candleColor: "slate" as const,
      upperWick: 20,
      lowerWick: 10,
      bodyHeight: 50,
      discipline: "Hold opinion. Do not buy the breach. Wait for close quality and follow-through to confirm acceptance above the zone."
    },
    D: {
      title: "Location D: Re-test of Range Edge Support",
      badge: "VALID BREAKOUT",
      desc: "Gold has consolidated above a major resistance zone. It pulls back slowly and prints a strong green candle off the zone floor. This re-test is supported by location.",
      candleColor: "gold" as const,
      upperWick: 5,
      lowerWick: 15,
      bodyHeight: 75,
      discipline: "High quality evidence. The fast expansion occurred from a verified structural floor. Location validates the speed."
    }
  };

  const active = locations[selectedLoc];

  return (
    <GoldInstitutionalFrame label="Speed vs Clarity Comparator" status="LOCATION COMPARISON">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Observe how the exact same green candle shape has completely different reading values based on where it occurs. Select a location to audit.
        </p>

        {/* Location Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full shrink-0">
          {(Object.keys(locations) as Array<"A" | "B" | "C" | "D">).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedLoc(key)}
              className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                selectedLoc === key 
                  ? "bg-[#071B36] border-[#071B36] text-white shadow-md scale-102"
                  : "bg-white border-[#E2E8F0] text-slate-700 hover:bg-slate-50"
              }`}
            >
              Location {key}
            </button>
          ))}
        </div>

        {/* Visual Showcase */}
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-6 items-center bg-white p-6 rounded-3xl border border-slate-200">
          {/* Left: Candle representation */}
          <div className="md:col-span-2 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl min-h-[180px]">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-3">Candle Render</span>
            <MiniGoldCandle 
              color={active.candleColor} 
              bodyHeight={active.bodyHeight} 
              upperWick={active.upperWick} 
              lowerWick={active.lowerWick} 
            />
            <span className="text-[10px] font-bold text-[#071B36] mt-2">Active Gold Candle</span>
          </div>

          {/* Right: Analysis */}
          <div className="md:col-span-3 flex flex-col gap-4 text-left">
            <div className="flex items-center justify-between gap-4">
              <h5 className="text-xs font-black uppercase text-[#071B36] tracking-tight whitespace-normal break-words">
                {active.title}
              </h5>
              <GoldReadingQualityBadge quality={active.badge} />
            </div>
            
            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              {active.desc}
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-wider block mb-1">
                DISCIPLINED READING ACTION
              </span>
              <p className="text-xs text-[#071B36] font-bold leading-normal whitespace-normal break-words">
                {active.discipline}
              </p>
            </div>
          </div>
        </div>

        <GoldMentorInsight 
          text="Retail traders chase candle speed. Professional readers check the address first. Speed without location is just a trap wearing a bright green coat."
        />
      </div>
    </GoldInstitutionalFrame>
  );
};

/**
 * 3. GoldReactionZoneLab
 */
export const GoldReactionZoneLab = () => {
  const [selectedPath, setSelectedPath] = useState<"reject" | "accept" | "overshoot" | "stall">("reject");

  const paths = {
    reject: {
      title: "Test & Rejection Behavior",
      badge: "REJECTION SWEEP",
      steps: [
        "Gold approaches the support zone ($2030 - $2035) with strong bearish candles.",
        "Price spikes into the zone, hitting $2031 where buying liquidity resides.",
        "Buyers actively defend the area. Price wicks back up rapidly, closing the hour at $2038.",
        "Result: Strong rejection. Gold leaves a long bottom wick. Location floor is verified."
      ],
      color: "gold" as const,
      candle1: { body: 40, color: "rose" as const, upper: 5, lower: 5 },
      candle2: { body: 15, color: "gold" as const, upper: 5, lower: 40 },
      insight: "Clean rejection requires price to wick through the zone but close completely outside it."
    },
    accept: {
      title: "Breakout Acceptance",
      badge: "VALID BREAKOUT",
      steps: [
        "Gold pushes above the resistance zone ($2050 - $2054) on a strong green expansion.",
        "Instead of wicking back down, the hourly candle closes firmly at $2057.",
        "The next candle forms entirely above the zone ($2056 - $2060) and consolidates.",
        "Result: Acceptance. The zone has been broken, and the market is comfortable at higher values."
      ],
      color: "gold" as const,
      candle1: { body: 50, color: "gold" as const, upper: 5, lower: 5 },
      candle2: { body: 30, color: "gold" as const, upper: 10, lower: 5 },
      insight: "Acceptance is proved when candle bodies close beyond the zone and hold value there."
    },
    overshoot: {
      title: "Overshoot & Return",
      badge: "STABILIZED HOLD",
      steps: [
        "Gold spikes past the key zone floor at $2000, running stops down to $1995.",
        "The move looks like a massive bearish breakout to retail momentum traders.",
        "Within 15 minutes, orders are swept. Price rallies back and closes the hour at $2003.",
        "Result: Reclaimed zone. The breakout was fake; the location is defended."
      ],
      color: "amber" as const,
      candle1: { body: 20, color: "rose" as const, upper: 2, lower: 45 },
      candle2: { body: 35, color: "gold" as const, upper: 5, lower: 5 },
      insight: "Overshoots are normal. Never judge a level broken until a candle prints a sustained close beyond it."
    },
    stall: {
      title: "Reaction Stall / Mixed",
      badge: "MIXED",
      steps: [
        "Gold drops into the support zone and bounces slightly.",
        "However, the bounce candle is tiny and closes near its middle, showing hesitation.",
        "The subsequent candle does not continue upward, shifting sideways in tight chop.",
        "Result: Mixed reading. Neither side is dominant; the zone is not yet defended."
      ],
      color: "slate" as const,
      candle1: { body: 15, color: "slate" as const, upper: 10, lower: 10 },
      candle2: { body: 10, color: "slate" as const, upper: 8, lower: 8 },
      insight: "If price reacts but stalls, the reading quality remains poor. Wait for follow-through."
    }
  };

  const active = paths[selectedPath];

  return (
    <GoldInstitutionalFrame label="Reaction Zone Behavior Simulator" status="ZONE ANALYZER">
      <div className="w-full flex flex-col gap-5">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Gold zones are flexible areas where orders cluster. Select a path type below to see step-by-step price reactions.
        </p>

        {/* Path Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full shrink-0">
          {(Object.keys(paths) as Array<"reject" | "accept" | "overshoot" | "stall">).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedPath(key)}
              className={`p-2 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                selectedPath === key 
                  ? "bg-[#071B36] border-[#071B36] text-white shadow-md"
                  : "bg-white border-[#E2E8F0] text-slate-700 hover:bg-slate-50"
              }`}
            >
              {key === "reject" ? "Test & Reject" : key === "accept" ? "Acceptance" : key === "overshoot" ? "Overshoot" : "Stall / Mixed"}
            </button>
          ))}
        </div>

        {/* Simulation Dashboard */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-5 rounded-3xl border border-slate-200 text-left items-stretch">
          {/* Steps Description */}
          <div className="md:col-span-7 flex flex-col gap-3 justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h5 className="text-xs font-black uppercase text-[#071B36] tracking-tight whitespace-normal break-words">
                  {active.title}
                </h5>
                <GoldReadingQualityBadge quality={active.badge} />
              </div>
              <div className="flex flex-col gap-2">
                {active.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-xs text-amber-900">
                    <span className="font-bold text-[#071B36] shrink-0 mt-0.5">{idx + 1}.</span>
                    <span className="min-w-0 leading-relaxed whitespace-normal break-words">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-wider block mb-1">
                ZONE INSIGHT
              </span>
              <p className="text-xs text-[#071B36] font-bold leading-normal whitespace-normal break-words">
                {active.insight}
              </p>
            </div>
          </div>

          {/* Candle Preview Area */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl min-h-[220px]">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-4">Simulated Price</span>
            
            <div className="relative w-full h-32 border-y border-dashed border-slate-300 flex items-center justify-around px-4">
              {/* Zone label */}
              <div className="absolute left-2 top-2 bg-slate-100 text-[8px] font-mono font-black px-1.5 py-0.5 rounded text-slate-600 uppercase tracking-wider">
                Reaction Zone
              </div>

              {/* Simulated Candles */}
              <div className="flex gap-8 items-center z-10">
                <div className="flex flex-col items-center">
                  <MiniGoldCandle 
                    color={active.candle1.color} 
                    bodyHeight={active.candle1.body} 
                    upperWick={active.candle1.upper} 
                    lowerWick={active.candle1.lower} 
                  />
                  <span className="text-[8px] font-mono text-slate-600 mt-1">Test</span>
                </div>
                <div className="flex flex-col items-center">
                  <MiniGoldCandle 
                    color={active.candle2.color} 
                    bodyHeight={active.candle2.body} 
                    upperWick={active.candle2.upper} 
                    lowerWick={active.candle2.lower} 
                  />
                  <span className="text-[8px] font-mono text-slate-600 mt-1">Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoldInstitutionalFrame>
  );
};

/**
 * 4. GoldWickQualityLab
 */
export const GoldWickQualityLab = () => {
  const [selectedWick, setSelectedWick] = useState<number>(0);

  const wicks = [
    {
      title: "Wick 1: News Release Spike",
      source: "CPI news release volatility",
      location: "Middle of session range",
      close: "Middle of the candle range",
      rating: "LOW QUALITY",
      desc: "Gold spikes down $25 on inflation data, sweeps liquidity, and wicks back up. However, it closes in the dead center of the session range. Because the source is event distortion and the location is mid-range, this wick has very poor reliability and can be run over easily.",
      candle: { body: 15, color: "slate" as const, upper: 10, lower: 55 }
    },
    {
      title: "Wick 2: HTF Zone Rejection",
      source: "Standard structural re-test",
      location: "Verified Daily support zone ceiling",
      close: "Top 10% of candle range (strong close)",
      rating: "HIGH QUALITY",
      desc: "Price pulls back slowly into a daily support zone. It wicks down to test the floor but closes strongly near its high. The wick is long, occurs at a high-information area, and has excellent close quality. High reliability.",
      candle: { body: 30, color: "gold" as const, upper: 2, lower: 40 }
    },
    {
      title: "Wick 3: Mid-Range Drift Wick",
      source: "Session noise / thin book",
      location: "Empty space between major zones",
      close: "Closed near the open price",
      rating: "NOISE",
      desc: "A long wick prints during early Asian session when volume is low. It doesn't interact with any prior highs, lows, or key structures. This wick carries zero institutional information and is simply random fluctuation.",
      candle: { body: 5, color: "slate" as const, upper: 25, lower: 25 }
    },
    {
      title: "Wick 4: Liquidity Stop-Sweep",
      source: "Stop-loss order sweep event",
      location: "Just above yesterday's swing high",
      close: "Closes firmly back inside yesterday's range",
      rating: "REJECTION SWEEP",
      desc: "Price spikes above yesterday's high to sweep resting stops. It immediately wicks back down and closes the hour well below the high. This sweep-and-return confirms rejection of the higher price zone.",
      candle: { body: 25, color: "rose" as const, upper: 45, lower: 5 }
    }
  ];

  const active = wicks[selectedWick];

  return (
    <GoldInstitutionalFrame label="Wick Quality Classifier" status="WICK AUDIT ACTIVE">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Not all wicks are created equal. Select a wick from the scanner to audit its source, location, close quality, and reading classification.
        </p>

        {/* Grid of Wicks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full shrink-0">
          {wicks.map((w, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedWick(idx)}
              className={`p-3 rounded-2xl border flex flex-col items-center gap-3 transition-all cursor-pointer ${
                selectedWick === idx
                  ? "bg-[#071B36] border-[#071B36] text-white shadow-md scale-102"
                  : "bg-white border-[#E2E8F0] text-[#071B36] hover:bg-slate-50"
              }`}
            >
              <MiniGoldCandle 
                color={w.candle.color} 
                bodyHeight={w.candle.body} 
                upperWick={w.candle.upper} 
                lowerWick={w.candle.lower} 
              />
              <span className="text-[9px] font-black uppercase tracking-tight leading-none text-center">
                Wick {idx + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Audit Details */}
        <div className="w-full bg-white p-5 rounded-3xl border border-slate-200 text-left flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
            <h5 className="text-xs font-black uppercase text-[#071B36] tracking-tight whitespace-normal break-words">
              {active.title}
            </h5>
            <GoldReadingQualityBadge quality={active.rating} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-wider mb-1">Source</span>
              <span className="font-bold text-[#071B36]">{active.source}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-wider mb-1">Location</span>
              <span className="font-bold text-[#071B36]">{active.location}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-wider mb-1">Close Quality</span>
              <span className="font-bold text-[#071B36]">{active.close}</span>
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed border-t border-slate-200 pt-3 whitespace-normal break-words">
            {active.desc}
          </p>
        </div>
      </div>
    </GoldInstitutionalFrame>
  );
};

/**
 * 5. GoldSweepDisciplineLab
 */
export const GoldSweepDisciplineLab = () => {
  const [activeTab, setActiveTab] = useState<"sweep" | "breakout">("sweep");

  return (
    <GoldInstitutionalFrame label="Sweep Decision Board" status="DECISION AUDIT">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          A crossover of a prior high is a question: Did price sweep liquidity and return, or did it accept the higher price? Compare the scenarios.
        </p>

        {/* Toggle Selector */}
        <div className="flex justify-center w-full shrink-0">
          <GoldToggleSelector 
            options={[
              { id: "sweep", name: "Scenario A: Sweep-and-Return" },
              { id: "breakout", name: "Scenario B: Breakout Acceptance" }
            ]} 
            selectedId={activeTab} 
            onChange={(id) => setActiveTab(id as any)} 
          />
        </div>

        {/* Side-by-side or Toggled Content */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-5 rounded-3xl border border-slate-200 items-center">
          {/* Graphic Side */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl min-h-[220px]">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-4">Chart Model</span>
            
            <div className="relative w-full h-36 flex flex-col justify-between items-center px-6">
              {/* Prior High line */}
              <div className="absolute top-12 left-0 w-full border-t border-dashed border-rose-400 z-0">
                <span className="absolute right-2 -top-2.5 bg-rose-50 text-[7px] font-mono font-bold text-rose-600 px-1 border border-rose-200 rounded">
                  Prior Swing High
                </span>
              </div>

              {/* Candles */}
              <div className="flex gap-10 items-end z-10 pt-4">
                <div className="flex flex-col items-center">
                  <MiniGoldCandle color="gold" bodyHeight={40} upperWick={5} lowerWick={5} />
                  <span className="text-[8px] font-mono text-slate-600 mt-1">Prev Day</span>
                </div>
                
                {activeTab === "sweep" ? (
                  <div className="flex flex-col items-center">
                    <MiniGoldCandle color="rose" bodyHeight={15} upperWick={45} lowerWick={5} />
                    <span className="text-[8px] font-mono text-slate-600 mt-1">Sweep Close</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <MiniGoldCandle color="gold" bodyHeight={45} upperWick={10} lowerWick={5} />
                    <span className="text-[8px] font-mono text-slate-600 mt-1">Breakout Close</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details Side */}
          <div className="md:col-span-7 text-left flex flex-col gap-4">
            {activeTab === "sweep" ? (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h5 className="text-xs font-black uppercase text-[#071B36] tracking-tight">
                    Sweep-and-Return Rejection
                  </h5>
                  <GoldReadingQualityBadge quality="REJECTION SWEEP" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                  Gold spikes above yesterday's swing high, triggering buy stop orders. Instead of holding, the price immediately wicks back down and closes the candle well below the high.
                </p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/50 text-emerald-950">
                  <span className="text-[8px] font-mono font-black text-emerald-700 uppercase tracking-wider block mb-1">
                    DISCIPLINED INTERPRETATION
                  </span>
                  <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                    The higher price was rejected. Clustered orders were tapped, and sellers defended the range. High probability of rotation back inside.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h5 className="text-xs font-black uppercase text-[#071B36] tracking-tight">
                    Breakout Acceptance
                  </h5>
                  <GoldReadingQualityBadge quality="VALID BREAKOUT" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                  Gold surges past yesterday's swing high. Instead of wicking back, the candle body closes strongly above the high, and consolidation begins at the new price floor.
                </p>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-amber-950">
                  <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-wider block mb-1">
                    DISCIPLINED INTERPRETATION
                  </span>
                  <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                    Price accepted the higher coordinates. Sellers failed to defend the boundary. The swing high has shifted from a ceiling to a support reference.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </GoldInstitutionalFrame>
  );
};

/**
 * 6. GoldCloseQualityLab
 */
export const GoldCloseQualityLab = () => {
  const [selectedQuality, setSelectedQuality] = useState<"strong" | "weak">("strong");

  return (
    <GoldInstitutionalFrame label="Close Quality Comparison" status="CLOSE AUDIT">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Candle travel represents market activity; the close represents commitment. Toggle the close quality options below to see how to filter candles.
        </p>

        {/* Toggle Selector */}
        <div className="flex justify-center w-full shrink-0">
          <GoldToggleSelector
            options={[
              { id: "strong", name: "High Close Quality (Institutional Hold)" },
              { id: "weak", name: "Poor Close Quality (Rejection / Fade)" }
            ]}
            selectedId={selectedQuality}
            onChange={(id) => setSelectedQuality(id as any)}
          />
        </div>

        {/* Content Box */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-5 rounded-3xl border border-slate-200 items-center">
          {/* Visual candle representation */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl min-h-[220px]">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-4">Candle Close</span>
            
            <div className="relative w-full h-36 border-y border-slate-200 flex items-center justify-center px-4">
              {/* Level Line */}
              <div className="absolute top-16 left-0 w-full border-t border-[#E2E8F0] z-0" />
              
              <div className="flex gap-4 items-center z-10">
                {selectedQuality === "strong" ? (
                  <div className="flex flex-col items-center">
                    <MiniGoldCandle color="gold" bodyHeight={65} upperWick={5} lowerWick={10} />
                    <span className="text-[9px] font-mono text-emerald-600 font-bold mt-1">Strong Close</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <MiniGoldCandle color="slate" bodyHeight={15} upperWick={45} lowerWick={15} />
                    <span className="text-[9px] font-mono text-rose-600 font-bold mt-1">Weak Close</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details Side */}
          <div className="md:col-span-7 text-left flex flex-col gap-4">
            {selectedQuality === "strong" ? (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h5 className="text-xs font-black uppercase text-[#071B36] tracking-tight">
                    Institutional Close Commitment
                  </h5>
                  <GoldReadingQualityBadge quality="CLEAR" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                  The candle body closes in the top 10% of its range, completely clearing the resistance zone boundary. This shows that buyers held every yard of progress, proving institutional backing for the breakout.
                </p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/50 text-emerald-950">
                  <span className="text-[8px] font-mono font-black text-emerald-700 uppercase tracking-wider block mb-1">
                    READING METRIC
                  </span>
                  <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                    Close Location: Top 10% of candle. <br />
                    Verdict: Valid breakout evidence. The move has structural support.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h5 className="text-xs font-black uppercase text-[#071B36] tracking-tight">
                    Rejection & Fade Close
                  </h5>
                  <GoldReadingQualityBadge quality="LOW QUALITY" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                  The candle spikes past resistance but drops back down before completing, closing in the bottom 30% of its range (leaving a long upper wick). Buyers failed to hold the high ground.
                </p>
                <div className="p-3 bg-rose-50 rounded-xl border border-rose-200/50 text-rose-950">
                  <span className="text-[8px] font-mono font-black text-rose-700 uppercase tracking-wider block mb-1">
                    READING METRIC
                  </span>
                  <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                    Close Location: Bottom 30% of candle. <br />
                    Verdict: Rejection or fake breakout. The move lacks commitment.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </GoldInstitutionalFrame>
  );
};

/**
 * 7. GoldMacroDistortionLab
 */
export const GoldMacroDistortionLab = () => {
  const [step, setStep] = useState<number>(0);

  const steps = [
    {
      title: "1. Pre-News Structural Stability",
      spread: "0.3 pips",
      volume: "Normal institutional flow",
      desc: "Gold is consolidating calmly just below resistance. Spreads are tight and books are thick. Structure and reaction levels are respected precisely.",
      status: "STABLE",
      candle: { body: 15, color: "slate" as const, upper: 5, lower: 5 }
    },
    {
      title: "2. CPI News Spike Shock",
      spread: "1.8 pips (Thinned Book)",
      volume: "High frequency / algorithmic spikes",
      desc: "CPI numbers release. Gold spikes $30 upward in 45 seconds, blowing through resistance. The spread widens significantly as liquidity providers pull their orders. Chasing here leads to slippage and traps.",
      status: "CRITICAL VOLATILITY",
      candle: { body: 80, color: "amber" as const, upper: 10, lower: 5 }
    },
    {
      title: "3. Stabilized Post-News Close",
      spread: "0.4 pips",
      volume: "Stabilized real order flow",
      desc: "Twenty minutes post-release, the algorithm spike subsides. Real order flow stabilizes. Price retreats to close the hour as a rejection wick inside structure. The noise has settled into a readable candle close.",
      status: "STABILIZED",
      candle: { body: 25, color: "rose" as const, upper: 65, lower: 10 }
    }
  ];

  const active = steps[step];

  return (
    <GoldInstitutionalFrame label="Macro Distortion Chamber" status="EVENT SIMULATOR">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          Step through a major CPI news event timeline to observe how high-speed volatility distorts structure before stabilizing into a readable close.
        </p>

        {/* Progress Timeline Stepper */}
        <div className="w-full flex justify-between items-center bg-slate-100 p-2 border border-slate-200 rounded-xl shrink-0 gap-1 overflow-x-auto">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              className={`flex-1 min-w-[100px] p-2 rounded-lg text-xs font-bold text-center transition-all cursor-pointer ${
                step === idx
                  ? "bg-[#071B36] text-white shadow-sm"
                  : "text-slate-700 hover:bg-slate-200"
              }`}
            >
              Step {idx + 1}
            </button>
          ))}
        </div>

        {/* Visual Box */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-5 rounded-3xl border border-slate-200 items-center">
          {/* Left: Graphic representation */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl min-h-[220px]">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-4">CPI Event Render</span>
            
            <div className="relative w-full h-36 flex flex-col justify-center items-center">
              <MiniGoldCandle 
                color={active.candle.color} 
                bodyHeight={active.candle.body} 
                upperWick={active.candle.upper} 
                lowerWick={active.candle.lower} 
              />
              <span className="text-[10px] font-bold text-[#071B36] mt-2">{active.status}</span>
            </div>
          </div>

          {/* Right: Text details */}
          <div className="md:col-span-7 text-left flex flex-col gap-4">
            <h5 className="text-xs font-black uppercase text-[#071B36] tracking-tight">
              {active.title}
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              {active.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs border-t border-slate-200 pt-3">
              <div className="flex flex-col">
                <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-wider mb-1">Spread State</span>
                <span className="font-bold text-[#071B36]">{active.spread}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-wider mb-1">Volume Quality</span>
                <span className="font-bold text-[#071B36]">{active.volume}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoldInstitutionalFrame>
  );
};

/**
 * 8. GoldFollowThroughLab
 */
export const GoldFollowThroughLab = () => {
  const [selectedTimeline, setSelectedTimeline] = useState<"valid" | "invalid">("valid");

  return (
    <GoldInstitutionalFrame label="Follow-Through Verification" status="TIMELINE SCANNER">
      <div className="w-full flex flex-col gap-6">
        <p className="text-xs text-slate-700 text-center max-w-xl mx-auto whitespace-normal break-words">
          A price reaction at a key zone is only the first step. Subsequent candles (follow-through) prove whether the reaction has sustained backing.
        </p>

        {/* Toggle Selector */}
        <div className="flex justify-center w-full shrink-0">
          <GoldToggleSelector
            options={[
              { id: "valid", name: "Sustained Follow-Through (Clear Reading)" },
              { id: "invalid", name: "Immediate Stall (Mixed Reading)" }
            ]}
            selectedId={selectedTimeline}
            onChange={(id) => setSelectedTimeline(id as any)}
          />
        </div>

        {/* Timeline Visualization */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-5 rounded-3xl border border-slate-200 items-center">
          {/* Visual Timeline Graphic */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl min-h-[220px]">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-4">Candle Timeline</span>
            
            <div className="relative w-full h-36 border-b border-dashed border-slate-300 flex items-end justify-around pb-4 px-4">
              <div className="absolute left-2 top-2 bg-slate-100 text-[8px] font-mono font-black px-1.5 py-0.5 rounded text-slate-600 uppercase tracking-wider">
                Support Zone Floor
              </div>

              {/* Candles timeline */}
              {selectedTimeline === "valid" ? (
                <div className="flex gap-6 items-end z-10">
                  <div className="flex flex-col items-center">
                    <MiniGoldCandle color="rose" bodyHeight={35} upperWick={5} lowerWick={20} />
                    <span className="text-[8px] font-mono text-slate-600 mt-1">1. Test</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MiniGoldCandle color="gold" bodyHeight={25} upperWick={5} lowerWick={25} />
                    <span className="text-[8px] font-mono text-slate-600 mt-1">2. Reaction</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MiniGoldCandle color="gold" bodyHeight={45} upperWick={10} lowerWick={5} />
                    <span className="text-[8px] font-mono text-[#006E52] font-bold mt-1">3. Follow</span>
                  </div>
                </div>
              ) : (
                <div className="flex gap-6 items-end z-10">
                  <div className="flex flex-col items-center">
                    <MiniGoldCandle color="rose" bodyHeight={35} upperWick={5} lowerWick={20} />
                    <span className="text-[8px] font-mono text-slate-600 mt-1">1. Test</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MiniGoldCandle color="gold" bodyHeight={25} upperWick={5} lowerWick={25} />
                    <span className="text-[8px] font-mono text-slate-600 mt-1">2. Reaction</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MiniGoldCandle color="slate" bodyHeight={5} upperWick={10} lowerWick={10} isDoji />
                    <span className="text-[8px] font-mono text-rose-700 font-bold mt-1">3. Stall</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Details Side */}
          <div className="md:col-span-7 text-left flex flex-col gap-4">
            {selectedTimeline === "valid" ? (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h5 className="text-xs font-black uppercase text-[#071B36] tracking-tight">
                    Sustained Rejection holding support
                  </h5>
                  <GoldReadingQualityBadge quality="FOLLOW-THROUGH HOLD" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                  Price rejects the zone (Candle 1), prints a bullish response (Candle 2), and the next candle (Candle 3) expands strongly upward. This follow-through confirms that institutions are actively defending the floor.
                </p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/50 text-emerald-950">
                  <span className="text-[8px] font-mono font-black text-emerald-700 uppercase tracking-wider block mb-1">
                    READING METRIC
                  </span>
                  <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                    Verification state: Confirmed. <br />
                    Verdict: High quality bullish reading. The bounce has sustained volume.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h5 className="text-xs font-black uppercase text-[#071B36] tracking-tight">
                    Reaction Stall / Fake Bounce
                  </h5>
                  <GoldReadingQualityBadge quality="LOW QUALITY" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                  Price bounces (Candle 2), but the subsequent hour (Candle 3) stalls completely, printing a tiny doji candle. This tells you the initial response was just short-term cover and lacks real buying commitment.
                </p>
                <div className="p-3 bg-rose-50 rounded-xl border border-rose-200/50 text-rose-950">
                  <span className="text-[8px] font-mono font-black text-rose-700 uppercase tracking-wider block mb-1">
                    READING METRIC
                  </span>
                  <p className="text-xs font-bold leading-normal whitespace-normal break-words">
                    Verification state: Unconfirmed / Stall. <br />
                    Verdict: Mixed or unstable reading. Stand aside until clarity returns.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </GoldInstitutionalFrame>
  );
};

/**
 * 9. GoldReadingSequence
 */
export const GoldReadingSequence = () => {
  const steps = [
    {
      title: "1. Volatility Audit",
      action: "GAUGE MARKET CONDITION",
      desc: "Check if the current session is under normal drift conditions, high volatility expansion, or distorted macro news event spikes. Define the environment speed before reading candles.",
      status: "VOLATILITY CHECK"
    },
    {
      title: "2. Locate Price Coordinate",
      action: "IDENTIFY CHART COORDINATES",
      desc: "Map the current price relative to major Higher-Timeframe (HTF) and Lower-Timeframe (LTF) reaction zones, prior swings, and range edges. Determine if price is in a high-information edge or low-information middle zone.",
      status: "LOCATION CLASSIFICATION"
    },
    {
      title: "3. Evaluate Wick and Sweep Details",
      action: "AUDIT BOUNDARY INTERACTIONS",
      desc: "Analyze wick length, source, and sweep interactions at the boundaries. Differentiate a high-quality rejection sweep at range edges from standard news spikes or mid-range noise wicks.",
      status: "WICK QUALITY AUDIT"
    },
    {
      title: "4. Check Close Location Quality",
      action: "VERIFY TRANSACTION COMMITMENT",
      desc: "Wait for the candle close. Evaluate where the close sits relative to the candle's total range and the key reaction zone. Ensure price accepted or rejected the level at the close rather than just traveling through.",
      status: "CLOSE LOCATION CHECK"
    },
    {
      title: "5. Observe Follow-Through Confirmation",
      action: "CONFIRM INSTITUTIONAL BACKING",
      desc: "Analyze subsequent candles to verify follow-through. Confirm that the initial reaction holds structure and expands rather than stalling or neutralizing instantly.",
      status: "FOLLOW-THROUGH HOLD"
    }
  ];

  return (
    <GoldStepWorkflow 
      steps={steps} 
      label="The Gold Reading Sequence" 
      status="SEQUENCE READY"
      desc="Follow the chronological sequence checklist to build a structured, objective reading of the XAU/USD chart."
    />
  );
};

/**
 * 10. GoldReadingLabPracticeDrill
 */
export const GoldReadingLabPracticeDrill = () => {
  const question = "Gold moves into a previous reaction zone during an active market window. It pushes above the zone and leaves a long upper wick. The candle closes near the middle of its range, not strongly above the zone. USD context is unclear, and the next candle hesitates instead of continuing upward. What is the most disciplined Gold reading?";

  const options = [
    {
      id: "A",
      text: "Clear bullish reading because Gold moved above the reaction zone.",
      isCorrect: false,
      feedback: "Incorrect. Moving above the zone is an initial reaction, but a middle close, long wick, and lack of follow-through mean the move did not show acceptance."
    },
    {
      id: "B",
      text: "Guaranteed reversal because Gold left a long upper wick.",
      isCorrect: false,
      feedback: "Incorrect. A long wick is a clue of rejection, but it is not a guarantee of a reversal without clear close quality and supportive follow-through."
    },
    {
      id: "C",
      text: "Mixed / unstable reading because Gold tested the zone, but wick behavior, middle close, unclear USD context, and weak follow-through limit confidence.",
      isCorrect: true,
      feedback: "Correct! This is a mixed or unstable reading. Gold tested a key location, but the lack of strong close quality and follow-through means the move did not establish clear direction."
    },
    {
      id: "D",
      text: "Ignore the move completely because Gold is too volatile to read.",
      isCorrect: false,
      feedback: "Incorrect. Gold is readable, but you must be willing to classify a reading as mixed/unclear and stand aside when evidence is not clean."
    }
  ];

  const chartPreview = (
    <div className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-center min-h-[160px] shrink-0 mb-2">
      <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-3">DRILL CONSOLE VIEW</span>
      
      <div className="relative w-full h-24 border-t border-dashed border-[#E2E8F0] flex items-end justify-center pb-2">
        <span className="absolute left-2 top-2 text-[8px] font-mono text-slate-600 uppercase">Resistance zone floor ($2050)</span>
        
        <div className="flex gap-8 items-end z-10">
          <div className="flex flex-col items-center">
            {/* Sweeping candle with long upper wick and close in middle */}
            <MiniGoldCandle color="slate" bodyHeight={15} upperWick={35} lowerWick={5} />
            <span className="text-[7px] font-mono text-slate-600">1. Sweep test</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Hesitant stall candle */}
            <MiniGoldCandle color="slate" bodyHeight={5} upperWick={10} lowerWick={10} isDoji />
            <span className="text-[7px] font-mono text-slate-600">2. Stall candle</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <GoldPracticeDrill 
      question={question} 
      options={options} 
      chartPreview={chartPreview}
      label="Gold Scenario Audit"
      status="EXAM SCENARIO"
    />
  );
};

/**
 * 11. GoldReadingLabDebrief
 */
export const GoldReadingLabDebrief = () => {
  const cards = [
    {
      id: "zones",
      title: "Zone Defense",
      habit: "Map zones before wicks",
      desc: "Never read a candle or wick in isolation. Always locate price inside reaction zones first. A wick inside range noise is meaningless; a wick off support is high-quality evidence.",
      icon: Map
    },
    {
      id: "closes",
      title: "Close Filter",
      habit: "Evaluate closes, not travel",
      desc: "Wait for the candle close to confirm commitment. Spikes, sweeps, and rapid intra-candle breakouts are unproven reactions until the closing price declares acceptance or rejection.",
      icon: CheckCircle
    },
    {
      id: "follow",
      title: "Follow-Through",
      habit: "Observe subsequent bars",
      desc: "An initial bounce off support is a reaction. Sustained follow-through is validation. Always verify if the next candle continues the direction or stalls immediately.",
      icon: TrendingUp
    },
    {
      id: "macro",
      title: "Macro Distortions",
      habit: "Respect event pressure",
      desc: "Treat high-speed CPI or news spikes as unreadable noise initially. Stand aside, wait for liquidity to stabilize, and read the post-news close structure objectively.",
      icon: AlertTriangle
    }
  ];

  return (
    <GoldDebriefDashboard 
      cards={cards} 
      label="Gold Reading Lab Debrief" 
      status="SESSION LOGGED"
      desc="Select a coordinate layer from the audit console below to review the core XAU/USD reading habits."
    />
  );
};
