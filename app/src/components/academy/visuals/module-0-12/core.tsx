import React, { useState, useEffect } from "react";
import { 
  Compass, 
  ArrowRight, 
  RotateCcw, 
  XCircle, 
  CheckCircle2,
  Lock,
  Search,
  Server,
  Layers,
  Coins,
  Activity,
  AlertTriangle,
  Flame,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Plus,
  Minus
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CryptoDerivativesInstitutionalFrame,
  CryptoDerivativesMentorInsight,
  CryptoDerivativesReadingQualityBadge,
  CryptoDerivativesToggleSelector,
  CryptoDerivativesStepWorkflow
} from "./shared";

/**
 * Card 1: CryptoDerivativesLabFoundation
 * Visual Key: crypto-derivatives-lab-foundation
 */
export const CryptoDerivativesLabFoundation = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = [
    {
      title: "1. Visible Move",
      desc: "A sudden price candle spikes or drops on the chart.",
      tip: "Avoid reacting immediately. Look deeper."
    },
    {
      title: "2. Open Interest",
      desc: "Check if active contracts are building up (fresh entries) or falling (cleanup).",
      tip: "OI shows energy level, not direction."
    },
    {
      title: "3. Funding Rate",
      desc: "Audit the cost pressure to see if buyers (longs) or sellers (shorts) are crowded.",
      tip: "Crowded sides pay holding fees to stay open."
    },
    {
      title: "4. Liquidation Flush",
      desc: "Detect if forced market orders are accelerating the price speed via wicks.",
      tip: "Liquidations represent mechanical forced exits."
    },
    {
      title: "5. Settlement",
      desc: "Wait for the flush to finish and see if price stabilizes, chops, or reverses.",
      tip: "Stability after leverage drops is high quality."
    },
    {
      title: "6. Follow-Through",
      desc: "Observe if voluntary spot buying support appears to sustain the move.",
      tip: "Without spot, derivatives moves are fragile."
    }
  ];

  return (
    <CryptoDerivativesInstitutionalFrame label="Derivatives Pressure Pipeline" status="FOUNDATION LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Click through the pipeline stages to see how derivatives pressure moves from raw price action to a verified reading classification.
        </p>

        {/* Pipeline Map */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 w-full max-w-3xl">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                type="button"
                key={s.title}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "p-3 rounded-2xl border transition-all text-left flex flex-col justify-between min-h-[90px] cursor-pointer",
                  isActive
                    ? "bg-[#071B36] text-white border-[#071B36] shadow-md scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-cyan-500 hover:bg-slate-50"
                )}
              >
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider block mb-1",
                  isActive ? "text-cyan-400" : "text-slate-500"
                )}>
                  Step {idx + 1}
                </span>
                <span className="text-xs font-black leading-tight mb-2 uppercase tracking-tight">{s.title.split(". ")[1]}</span>
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  isActive ? "bg-cyan-400 animate-ping" : "bg-slate-300"
                )} />
              </button>
            );
          })}
        </div>

        {/* Focus Panel */}
        <div className="w-full max-w-2xl bg-[#071B36] text-white rounded-2xl p-5 border border-slate-700 relative overflow-hidden text-left min-h-[120px] flex flex-col justify-center">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#06B6D4_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative z-10">
            <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest block mb-1 font-black">
              Pipeline Stage &bull; {steps[activeStep].title}
            </span>
            <h5 className="text-sm font-black uppercase tracking-tight mb-1 text-white">
              {steps[activeStep].title.split(". ")[1]}
            </h5>
            <p className="text-xs text-slate-355 leading-relaxed max-w-2xl text-slate-200">
              {steps[activeStep].desc}
            </p>
            <p className="mt-2 text-[10px] text-cyan-300 font-bold italic">
              Pro Tip: {steps[activeStep].tip}
            </p>
          </div>
        </div>

        <CryptoDerivativesMentorInsight 
          text="Derivatives data is not a set of trade instructions. It explains the mechanics behind the candles so you can see if the foundation is stable or fragile."
          analogy="Reading derivatives data is like checking if a car is moving because the engine is running (spot buying) or because it is rolling down a steep hill (liquidation flush)."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};

/**
 * Card 2: CryptoOpenInterestReadingLab
 * Visual Key: crypto-open-interest-reading-lab
 */
export const CryptoOpenInterestReadingLab = () => {
  const [oiState, setOiState] = useState<"build" | "unwind">("build");

  return (
    <CryptoDerivativesInstitutionalFrame label="Open Interest Analyzer" status="OI LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex justify-between items-center w-full max-w-2xl">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-md">
            Toggle Open Interest states to see how contract counts behave during capital buildup versus liquidation cleanups.
          </p>
          <CryptoDerivativesToggleSelector 
            options={[
              { id: "build", name: "Contract Buildup" },
              { id: "unwind", name: "Contract Unwind" }
            ]}
            selectedId={oiState}
            onChange={(id) => setOiState(id as any)}
          />
        </div>

        {/* Visual Board */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Visual Display */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-center items-center relative overflow-hidden min-h-[220px]">
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Active Exchange Feed</span>
            </div>

            {oiState === "build" ? (
              <div className="flex flex-col items-center gap-4 w-full">
                {/* Visual Representation of Building Contracts */}
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 font-black text-xs shadow-sm">+</div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 font-black text-xs shadow-sm">+</div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 font-black text-xs shadow-sm animate-pulse">+</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#071B36] tracking-tight">OI RISING</div>
                  <span className="text-[9px] font-black text-emerald-700 uppercase tracking-wider block mt-1">Capital Entering &bull; Energy Building</span>
                </div>
                {/* Mock Chart */}
                <div className="w-4/5 h-12 flex items-end gap-1 border-b border-slate-300 pb-1">
                  <div className="bg-slate-300 w-full h-[30%]" />
                  <div className="bg-slate-300 w-full h-[35%]" />
                  <div className="bg-cyan-500 w-full h-[55%] animate-pulse" />
                  <div className="bg-cyan-500 w-full h-[80%] animate-pulse" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 w-full">
                {/* Visual Representation of Unwinding Contracts */}
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-350 flex items-center justify-center text-rose-600 font-black text-xs shadow-sm">-</div>
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-355 flex items-center justify-center text-rose-600 font-black text-xs shadow-sm">-</div>
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-300 flex items-center justify-center text-rose-600 font-black text-xs shadow-sm animate-pulse">-</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#071B36] tracking-tight">OI FALLING</div>
                  <span className="text-[9px] font-black text-rose-700 uppercase tracking-wider block mt-1">Positions Closing &bull; Leverage Clearing</span>
                </div>
                {/* Mock Chart */}
                <div className="w-4/5 h-12 flex items-end gap-1 border-b border-slate-300 pb-1">
                  <div className="bg-slate-300 w-full h-[80%]" />
                  <div className="bg-slate-300 w-full h-[65%]" />
                  <div className="bg-rose-500 w-full h-[35%] animate-pulse" />
                  <div className="bg-rose-500 w-full h-[20%] animate-pulse" />
                </div>
              </div>
            )}
          </div>

          {/* Explanation Stage */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between text-left">
            <div>
              <span className="text-[9px] font-black text-[#071B36] uppercase tracking-wider block mb-1">Reading Quality Clue</span>
              <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
                {oiState === "build" ? "Potential Energy Building" : "Position Unwinding Event"}
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                {oiState === "build" 
                  ? "Contracts are opening fast. Traders are adding leverage. This does not guarantee price direction, but it warns that the market is coiling. A move is likely to occur with high speed once a breakout begins."
                  : "Traders are actively exiting positions or being cleared by liquidations. The leverage bubble is deflating. Volatility is resolving, and price is returning to a cleaner spot-driven state."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest block mb-1">State Evaluation</span>
              <CryptoDerivativesReadingQualityBadge quality={oiState === "build" ? "CROWDED RISK" : "CLEAN OUTFLOW"} />
            </div>
          </div>
        </div>

        <CryptoDerivativesMentorInsight 
          text="Open interest tells you how packed the arena is. It does not tell you who will win the fight, only that a lot of capital is locked in the outcome."
          analogy="Think of Open Interest like a balloon being blown up. Rising OI is inflating the balloon (increasing pressure). Falling OI is the air escaping (releasing pressure)."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};

/**
 * Card 3: CryptoPriceOiCombinationBoard
 * Visual Key: crypto-price-oi-combination-board
 */
export const CryptoPriceOiCombinationBoard = () => {
  const [activeQuad, setActiveQuad] = useState<string>("A");
  
  const quadrants = [
    {
      id: "A",
      title: "Price Up + OI Up",
      subtitle: "New Leveraged Buyers",
      desc: "Price is rising while new buyers open leveraged long contracts. This shows active buyer aggression, but also builds leverage that can become fragile if the move stalls.",
      badge: "STABLE TREND TEST",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-300",
      bgColor: "bg-emerald-50/50"
    },
    {
      id: "B",
      title: "Price Up + OI Down",
      subtitle: "Short Covering Bounce",
      desc: "Price is rising because short traders are panic-closing their positions (forced buying). No new longs are entering. This is often a fragile bounce that stalls quickly.",
      badge: "FRAGILE / UNSTABLE",
      textColor: "text-amber-700",
      borderColor: "border-amber-300",
      bgColor: "bg-amber-50/50"
    },
    {
      id: "C",
      title: "Price Down + OI Up",
      subtitle: "New Leveraged Sellers",
      desc: "Price is dropping while new sellers open leveraged short contracts. This shows active seller aggression. This builds potential energy for a short squeeze if support holds.",
      badge: "WEAKNESS TEST",
      textColor: "text-rose-700",
      borderColor: "border-rose-300",
      bgColor: "bg-rose-50/50"
    },
    {
      id: "D",
      title: "Price Down + OI Down",
      subtitle: "Long Unwinding Cleanup",
      desc: "Price is dropping because long traders are closing their positions to limit losses. This represents leverage washing out of the market. Watch for stabilization once OI stops falling.",
      badge: "LEVERAGE CLEANUP",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-300",
      bgColor: "bg-cyan-50/50"
    }
  ];

  const current = quadrants.find(q => q.id === activeQuad)!;

  return (
    <CryptoDerivativesInstitutionalFrame label="Price + OI Combination Decoder" status="COMBINATION LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Select a quadrant combination of Price and Open Interest to audit the underlying market mechanism.
        </p>

        {/* Quadrant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
          {quadrants.map((q) => {
            const isActive = activeQuad === q.id;
            return (
              <button
                type="button"
                key={q.id}
                onClick={() => setActiveQuad(q.id)}
                className={cn(
                  "p-4 rounded-2xl border text-left flex flex-col justify-between min-h-[110px] transition-all cursor-pointer",
                  isActive
                    ? "bg-[#071B36] text-white border-[#071B36] shadow-md scale-102"
                    : "bg-white text-slate-800 border-slate-200 hover:border-cyan-500 hover:bg-slate-50"
                )}
              >
                <div className="flex justify-between items-start w-full">
                  <span className={cn(
                    "text-xs font-black uppercase tracking-tight",
                    isActive ? "text-cyan-400" : "text-[#071B36]"
                  )}>
                    {q.title}
                  </span>
                  <span className={cn(
                    "text-[8px] font-mono font-black uppercase px-2 py-0.5 rounded border tracking-wider",
                    isActive 
                      ? "bg-slate-800 border-slate-700 text-slate-300"
                      : "bg-slate-50 border-slate-200 text-slate-500"
                  )}>
                    {q.id}
                  </span>
                </div>
                <div className="mt-2 text-left">
                  <span className={cn(
                    "text-[10px] font-black uppercase block tracking-wider",
                    isActive ? "text-white" : "text-slate-600"
                  )}>
                    {q.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Diagnostic Panel */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Diagnostic Output &bull; Quadrant {current.id}</span>
            <h5 className="text-base font-black text-[#071B36] uppercase tracking-tight mb-2">
              {current.title} &mdash; <span className="text-cyan-600 font-bold">{current.subtitle}</span>
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              {current.desc}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Diagnostic Badge</span>
            <CryptoDerivativesReadingQualityBadge quality={current.badge} />
          </div>
        </div>

        <CryptoDerivativesMentorInsight 
          text="Do not treat these combinations as automated buy/sell signals. They tell you the mechanical health of the price change so you do not buy a short-covering trap."
          analogy="Price up with OI up is like a runner gaining speed while actively breathing. Price up with OI down is like a runner sprinting while holding their breath; it cannot last long."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};

/**
 * Card 4: CryptoFundingPressureReading
 * Visual Key: crypto-funding-pressure-reading
 */
export const CryptoFundingPressureReading = () => {
  const [fundingState, setFundingState] = useState<string>("neutral");

  const fundingLevels = [
    {
      id: "neg",
      name: "Negative (-0.05%)",
      title: "Crowded Shorts",
      desc: "Sellers are dominant and paying holding fees to buyers. This shows highly pessimistic perp crowding, meaning price is vulnerable to sudden upward squeezes if support holds.",
      quality: "MIXED / FRAGILE"
    },
    {
      id: "neutral",
      name: "Neutral (0.01%)",
      title: "Balanced Pressure",
      desc: "Perpetual prices align closely with spot. No excessive leverage skew. Price action has normal, clean reading quality.",
      quality: "CLEAR"
    },
    {
      id: "pos",
      name: "Positive (0.04%)",
      title: "Crowded Longs",
      desc: "Buyers are dominant and paying shorts. Leverage is beginning to lean long. The market is becoming slightly congested.",
      quality: "MIXED"
    },
    {
      id: "extreme",
      name: "Extremely Positive (0.10%)",
      title: "Fragile Long Crowding",
      desc: "Longs are highly crowded and paying expensive fees to stay open. High cost pressure. A tiny downward move can trigger mass long liquidations.",
      quality: "CROWDED RISK"
    }
  ];

  const current = fundingLevels.find(f => f.id === fundingState)!;

  return (
    <CryptoDerivativesInstitutionalFrame label="Funding Rate Dial" status="FUNDING LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Select a funding rate level to visualize the holding cost pressure and evaluate crowd congestion.
        </p>

        {/* Selector Tabs */}
        <CryptoDerivativesToggleSelector 
          options={[
            { id: "neg", name: "Negative" },
            { id: "neutral", name: "Neutral" },
            { id: "pos", name: "Positive" },
            { id: "extreme", name: "Extremely Positive" }
          ]}
          selectedId={fundingState}
          onChange={setFundingState}
        />

        {/* Dial Board */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Dial Graphic */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-center items-center relative overflow-hidden min-h-[220px]">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest absolute top-3 left-3">Funding Pressure Dial</span>
            
            {/* Simple Graphic Dial */}
            <div className="relative w-36 h-20 border-b-2 border-slate-300 flex items-end justify-center mb-4">
              {/* Dial Arc lines */}
              <div className="absolute inset-0 rounded-t-full border-t-2 border-x-2 border-dashed border-slate-200 pointer-events-none" />
              
              {/* Needle */}
              <div 
                className="w-1.5 h-16 bg-[#071B36] origin-bottom rounded-full transition-transform duration-500" 
                style={{
                  transform: 
                    fundingState === "neg" ? "rotate(-60deg)" :
                    fundingState === "neutral" ? "rotate(0deg)" :
                    fundingState === "pos" ? "rotate(40deg)" : "rotate(75deg)",
                  transformOrigin: "bottom center"
                }}
              />
              {/* Center Pin */}
              <div className="absolute bottom-0 w-4 h-4 bg-[#071B36] rounded-full border-2 border-white" />
            </div>

            <div className="text-center">
              <span className="text-xs font-mono font-black text-[#071B36] uppercase tracking-wide block">
                {current.name}
              </span>
              <span className="text-sm font-black text-cyan-600 uppercase tracking-tighter mt-0.5 block">
                {current.title}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Pressure Analysis</span>
              <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
                {current.title} Cost Burden
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                {current.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between items-center">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Quality Badge</span>
              <CryptoDerivativesReadingQualityBadge quality={current.quality} />
            </div>
          </div>
        </div>

        <CryptoDerivativesMentorInsight 
          text="High funding rates are like holding a hot potato. The longer you hold it, the more it hurts. This financial pressure is what makes crowded sides eager to dump."
          analogy="Highly positive funding is like a store charging customer entrance fees by the hour. Eventually, shoppers leave just to stop the cash bleed, even if they like the store."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};

// Help helper for container alias
const CryptoDerivativesInteractiveContainer = CryptoDerivativesInstitutionalFrame;

/**
 * Card 5: CryptoCrowdedPositioningFragility
 * Visual Key: crypto-crowded-positioning-fragility
 */
export const CryptoCrowdedPositioningFragility = () => {
  const [testStage, setTestStage] = useState<"stable" | "crowded" | "tested" | "cascade">("stable");
  const [activeTab, setActiveTab] = useState<string>("view");

  const stageDetails = {
    stable: {
      title: "Balanced Leverage",
      desc: "Traders are buying and selling with low leverage. No crowded positions. A minor price drop is absorbed easily by spot support.",
      quality: "STABILIZED"
    },
    crowded: {
      title: "Crowded Long Positions Build Up",
      desc: "Funding spikes positive and open interest rises. Long positions are stacked close together at high leverage levels.",
      quality: "CROWDED RISK"
    },
    tested: {
      title: "Price Drops and Tests the Crowd",
      desc: "Price dips slightly. The top leveraged longs are tested. They are forced to exit, which pushes price down into the next cluster.",
      quality: "MIXED / FRAGILE"
    },
    cascade: {
      title: "Liquidation Cascade Occurs",
      desc: "Multiple clusters are cleared back-to-back. Forced market orders hit thin books, creating a vertical drop (liquidation flush).",
      quality: "UNSTABLE"
    }
  };

  const current = stageDetails[testStage];

  return (
    <CryptoDerivativesInstitutionalFrame label="Leverage Fragility Simulator" status="FRAGILITY LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Simulate a leverage test step-by-step to see how a crowded market transitions from stable to a cascade.
        </p>

        {/* Step Stepper */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-2xl">
          {(["stable", "crowded", "tested", "cascade"] as const).map((stage, idx) => {
            const isActive = testStage === stage;
            const labels = ["1. Stable", "2. Crowded", "3. Tested", "4. Cascade"];
            return (
              <button
                type="button"
                key={stage}
                onClick={() => setTestStage(stage)}
                className={cn(
                  "py-2 px-3 border rounded-xl font-black text-xs transition-all uppercase tracking-tight text-center cursor-pointer",
                  isActive
                    ? "bg-[#071B36] text-white border-[#071B36]"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                )}
              >
                {labels[idx]}
              </button>
            );
          })}
        </div>

        {/* Simulator Board */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Visual Simulation Area */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-center items-center min-h-[220px] relative overflow-hidden">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest absolute top-3 left-3">Live Simulation View</span>
            
            {/* Visual elements mapping the stages */}
            {testStage === "stable" && (
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full border border-slate-300 bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-600">Spot</div>
                  <div className="w-10 h-10 rounded-full border border-slate-350 bg-slate-55 flex items-center justify-center text-xs font-bold text-slate-600">Spot</div>
                </div>
                <div className="h-6 w-32 bg-slate-200 rounded-full mt-2 flex items-center justify-center text-[10px] text-slate-600 font-bold uppercase tracking-tight">Balanced Order Book</div>
              </div>
            )}

            {testStage === "crowded" && (
              <div className="flex flex-col items-center gap-2 w-full px-4">
                <div className="flex flex-col gap-1 w-full max-w-[150px]">
                  <div className="h-4 bg-emerald-500 rounded text-[9px] text-white font-bold flex items-center justify-center">20x Leverage Longs</div>
                  <div className="h-4 bg-emerald-600 rounded text-[9px] text-white font-bold flex items-center justify-center">10x Leverage Longs</div>
                  <div className="h-4 bg-emerald-700 rounded text-[9px] text-white font-bold flex items-center justify-center">5x Leverage Longs</div>
                </div>
                <div className="text-[9px] font-bold text-rose-600 uppercase tracking-wider animate-pulse mt-2">Congested Longs Active</div>
              </div>
            )}

            {testStage === "tested" && (
              <div className="flex flex-col items-center gap-2 w-full px-4">
                <div className="flex flex-col gap-1 w-full max-w-[150px]">
                  <div className="h-4 bg-red-500 rounded text-[9px] text-white font-bold flex items-center justify-center animate-ping">20x Liquidation Triggered</div>
                  <div className="h-4 bg-emerald-600 rounded text-[9px] text-white font-bold flex items-center justify-center">10x Leverage Longs</div>
                  <div className="h-4 bg-emerald-700 rounded text-[9px] text-white font-bold flex items-center justify-center">5x Leverage Longs</div>
                </div>
                <div className="text-[9px] font-bold text-rose-650 uppercase tracking-wider mt-2">Price Drop: -2%</div>
              </div>
            )}

            {testStage === "cascade" && (
              <div className="flex flex-col items-center gap-2 w-full px-4">
                <div className="flex flex-col gap-1 w-full max-w-[150px] opacity-40">
                  <div className="h-4 bg-slate-300 rounded text-[9px] text-slate-500 font-bold flex items-center justify-center line-through">20x Liquidated</div>
                  <div className="h-4 bg-slate-300 rounded text-[9px] text-slate-500 font-bold flex items-center justify-center line-through">10x Liquidated</div>
                  <div className="h-4 bg-slate-350 rounded text-[9px] text-slate-500 font-bold flex items-center justify-center line-through">5x Liquidated</div>
                </div>
                <div className="text-[10px] font-black text-rose-600 uppercase tracking-widest animate-bounce mt-2 flex items-center gap-1">
                  <Flame size={12} /> CASCADE COMPLETED
                </div>
              </div>
            )}
          </div>

          {/* Details Stage */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Simulation State</span>
              <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
                {current.title}
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
                {current.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between items-center">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Fragility Metric</span>
              <CryptoDerivativesReadingQualityBadge quality={current.quality} />
            </div>
          </div>
        </div>

        <CryptoDerivativesMentorInsight 
          text="Crowded leverage builds fragility. It means the market is sitting on top of dynamite. A tiny price nudge can trigger the whole stack."
          analogy="Stable leverage is like a brick house. Crowded leverage is like a house of cards; it looks tall and impressive, but a gentle breeze will knock it flat."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};

/**
 * Card 6: CryptoLiquidationFlushLab
 * Visual Key: crypto-liquidation-flush-lab
 */
export const CryptoLiquidationFlushLab = () => {
  const [leverage, setLeverage] = useState<number>(10);
  const [priceShift, setPriceShift] = useState<number>(0);
  const [liquidated, setLiquidated] = useState<boolean>(false);

  const liquidationPriceDrop = 100 / leverage; // % drop to liquidate

  useEffect(() => {
    if (priceShift >= liquidationPriceDrop) {
      setLiquidated(true);
    } else {
      setLiquidated(false);
    }
  }, [priceShift, leverage, liquidationPriceDrop]);

  return (
    <CryptoDerivativesInstitutionalFrame label="Liquidation Flush Simulator" status="FLUSH LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Configure a trader's leverage and adjust the price shift to observe at what point the position is programmatically liquidated by the exchange.
        </p>

        {/* Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
          {/* Leverage Control */}
          <div>
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-1">Set Leverage: {leverage}x</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLeverage(prev => Math.max(2, prev - 1))}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#071B36] font-bold flex items-center justify-center cursor-pointer"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => setLeverage(prev => Math.min(50, prev + 1))}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#071B36] font-bold flex items-center justify-center cursor-pointer"
              >
                +
              </button>
              <span className="text-[10px] text-slate-500 font-bold ml-2">Requires: {liquidationPriceDrop.toFixed(1)}% price drop</span>
            </div>
          </div>

          {/* Price Shift Control */}
          <div>
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-1">Simulate Price Drop: -{priceShift.toFixed(1)}%</label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="25"
                step="0.5"
                value={priceShift}
                onChange={(e) => setPriceShift(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <button
                type="button"
                onClick={() => { setPriceShift(0); setLiquidated(false); }}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#071B36] font-bold flex items-center justify-center cursor-pointer shrink-0"
                title="Reset simulation"
              >
                <RotateCcw size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Display Output */}
        <div className="w-full max-w-xl bg-[#071B36] text-white rounded-2xl p-5 border border-slate-700 relative overflow-hidden text-left min-h-[130px] flex items-center justify-between">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#06B6D4_1px,transparent_1px)] bg-[length:14px_14px]" />
          
          <div className="relative z-10 flex-1">
            <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest block mb-1 font-black">Position Diagnostic Status</span>
            {liquidated ? (
              <div>
                <h5 className="text-sm font-black text-rose-400 uppercase tracking-tight mb-1 flex items-center gap-1.5">
                  <XCircle size={14} className="text-rose-400" /> LIQUIDATED &bull; FORCED EXIT
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed whitespace-normal break-words max-w-sm">
                  Margin exhausted! The exchange automatically executed a market sell order of your position, creating mechanical selling pressure.
                </p>
              </div>
            ) : (
              <div>
                <h5 className="text-sm font-black text-[#F7FAFC] uppercase tracking-tight mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400 animate-pulse" /> POSITION ACTIVE
                </h5>
                <p className="text-xs text-slate-350 leading-relaxed whitespace-normal break-words max-w-sm">
                  Margin remains stable. Level of safety: {(((liquidationPriceDrop - priceShift) / liquidationPriceDrop) * 100).toFixed(0)}%.
                </p>
              </div>
            )}
          </div>

          <div className="relative z-10 shrink-0 ml-4 flex flex-col items-end gap-1">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Reading Badge</span>
            <CryptoDerivativesReadingQualityBadge quality={liquidated ? "UNSTABLE" : "STABILIZED"} />
          </div>
        </div>

        <CryptoDerivativesMentorInsight 
          text="A liquidation wick explains the speed of the candle drop. It shows programmatic, non-voluntary exits, not a logical long-term price change."
          analogy="Liquidations are like automated safety valves on a steam engine. When pressure gets too high, they burst open automatically, releasing steam in a loud pop (the wick)."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};

/**
 * Card 7: CryptoLongShortSqueezeBoard
 * Visual Key: crypto-long-short-squeeze-board
 */
export const CryptoLongShortSqueezeBoard = () => {
  const [squeezeType, setSqueezeType] = useState<"long" | "short">("long");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(0);

  const longSteps = [
    { label: "1. Crowd Buildup", desc: "Excessive longs build up on high leverage with positive funding." },
    { label: "2. Trigger Dip", desc: "A small price dip tests the first layer of leveraged long margin thresholds." },
    { label: "3. Forced Selloff", desc: "Exchange liquidations execute programmatic market sell orders." },
    { label: "4. Squeeze Flush", desc: "The price drops rapidly as one liquidation triggers the next. Wick prints." }
  ];

  const shortSteps = [
    { label: "1. Crowd Buildup", desc: "Excessive shorts build up on high leverage with negative funding." },
    { label: "2. Trigger Spike", desc: "A small price spike tests the first layer of leveraged short margin thresholds." },
    { label: "3. Forced Buying", desc: "Exchange liquidations execute programmatic market buy orders." },
    { label: "4. Squeeze Rally", desc: "Price spikes up rapidly as liquidating shorts are forced to buy. Wick prints." }
  ];

  const activeSteps = squeezeType === "long" ? longSteps : shortSteps;

  const triggerAnimation = () => {
    setIsPlaying(true);
    setStepIndex(0);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStepIndex(prev => {
        if (prev >= 3) {
          setIsPlaying(false);
          clearInterval(interval);
          return 3;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <CryptoDerivativesInstitutionalFrame label="Squeeze Mechanism Simulator" status="SQUEEZE LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex justify-between items-center w-full max-w-2xl">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            Toggle between Long and Short squeeze scenarios and click 'Play Squeeze Sequence' to watch the liquidation chain reaction.
          </p>
          <CryptoDerivativesToggleSelector 
            options={[
              { id: "long", name: "Long Squeeze" },
              { id: "short", name: "Short Squeeze" }
            ]}
            selectedId={squeezeType}
            onChange={(id) => { setSqueezeType(id as any); setStepIndex(0); setIsPlaying(false); }}
          />
        </div>

        {/* Animation Display */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Display screen */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between items-center min-h-[220px] relative overflow-hidden">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest absolute top-3 left-3">Live Squeeze Screen</span>
            
            {/* Play Button */}
            <button
              type="button"
              disabled={isPlaying}
              onClick={triggerAnimation}
              className="absolute top-3 right-3 px-2 py-1 bg-cyan-600 hover:bg-cyan-700 text-white rounded text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer disabled:opacity-50"
            >
              <RefreshCw size={10} className={cn(isPlaying && "animate-spin")} /> Play Sequence
            </button>

            <div className="flex-1 flex flex-col items-center justify-center mt-6 w-full text-center">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Stage {stepIndex + 1} of 4</div>
              
              {/* Vertical Wick Graphic */}
              <div className="relative w-16 h-24 bg-slate-50 border border-slate-250 flex items-center justify-center rounded-lg shadow-sm mb-4">
                <div className="w-1.5 h-20 bg-slate-300 rounded-full absolute" />
                {stepIndex >= 1 && (
                  <div className={cn(
                    "w-4 rounded transition-all",
                    squeezeType === "long" ? "bg-rose-500" : "bg-emerald-500",
                    stepIndex === 1 ? "h-6" :
                    stepIndex === 2 ? "h-12" : "h-18"
                  )} />
                )}
                {stepIndex >= 2 && (
                  <div className="absolute -top-1 animate-ping text-xs">💥</div>
                )}
              </div>

              <div className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {activeSteps[stepIndex].label.split(". ")[1]}
              </div>
            </div>
          </div>

          {/* Details screen */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Sequence Step Detail</span>
              <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
                {activeSteps[stepIndex].label}
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words min-h-[60px]">
                {activeSteps[stepIndex].desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between items-center">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Squeeze Health</span>
              <CryptoDerivativesReadingQualityBadge quality={stepIndex >= 2 ? "UNSTABLE" : "MIXED / FRAGILE"} />
            </div>
          </div>
        </div>

        <CryptoDerivativesMentorInsight 
          text="A squeeze is programmatic capital cleanup. When shorts run out of margin, they must buy at any price, driving the market up regardless of whether the asset has value."
          analogy="A squeeze is like a game of musical chairs. When the music stops (price shifts), the remaining players (leveraged traders) panic and scramble for a chair, causing a noisy commotion."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};

/**
 * Card 8: CryptoPostLiquidationSettlement
 * Visual Key: crypto-post-liquidation-settlement
 */
export const CryptoPostLiquidationSettlement = () => {
  const [activeScenario, setActiveScenario] = useState<string>("stabilize");

  const scenarios = [
    {
      id: "stabilize",
      name: "1. Stabilizes",
      title: "Clean Settlement",
      desc: "Open interest falls sharply, funding cools back to neutral flat levels, and price holds its breakout support floor. This shows the leverage bubble successfully popped, leaving clean spot support behind.",
      quality: "STABILIZED HOLD"
    },
    {
      id: "continue",
      name: "2. Continues",
      title: "Leveraged Trend Push",
      desc: "New open interest builds back up instantly after the flush, funding remains skewed, and price breaks even further in the flush direction. The pressure is continuous and unstable.",
      quality: "UNSTABLE"
    },
    {
      id: "chop",
      name: "3. Chops",
      title: "Liquidity Void Chop",
      desc: "Price bounces around erratically on very thin volume. Open interest is flat. Gaps and wicks form, but carry no directional information. Low reading quality.",
      quality: "CHOPPY NOISE"
    },
    {
      id: "reverse",
      name: "4. Reverses Instantly",
      title: "Short-Covering Trap",
      desc: "Price bounces quickly, but open interest drops and funding stays high. The bounce is driven by panic shorts covering rather than real spot demand. The bounce is fragile.",
      quality: "FAKE BREAKOUT"
    }
  ];

  const current = scenarios.find(s => s.id === activeScenario)!;

  return (
    <CryptoDerivativesInstitutionalFrame label="Post-Flush Settlement Auditor" status="SETTLEMENT LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Audit how price behaves in the hours following a liquidation flush. Select a scenario to diagnose the stability of the price support.
        </p>

        {/* Scenario Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 w-full max-w-3xl">
          {scenarios.map((s) => {
            const isActive = activeScenario === s.id;
            return (
              <button
                type="button"
                key={s.id}
                onClick={() => setActiveScenario(s.id)}
                className={cn(
                  "p-3 border rounded-2xl text-left flex flex-col justify-between min-h-[95px] transition-all cursor-pointer",
                  isActive
                    ? "bg-[#071B36] text-white border-[#071B36] shadow-sm scale-102"
                    : "bg-white text-slate-800 border-slate-200 hover:border-cyan-500 hover:bg-slate-50"
                )}
              >
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider block mb-1",
                  isActive ? "text-cyan-400" : "text-slate-500"
                )}>
                  Scenario
                </span>
                <span className="text-[11px] font-black uppercase tracking-tight leading-tight mb-1">{s.name.split(". ")[1]}</span>
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full mt-2",
                  isActive ? "bg-cyan-400" : "bg-slate-300"
                )} />
              </button>
            );
          })}
        </div>

        {/* Diagnostic Output */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Settlement Diagnostic &bull; {current.title}</span>
            <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
              {current.name.split(". ")[1]} &mdash; <span className="text-cyan-600 font-bold">{current.title}</span>
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              {current.desc}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Reading Quality Status</span>
            <CryptoDerivativesReadingQualityBadge quality={current.quality} />
          </div>
        </div>

        <CryptoDerivativesMentorInsight 
          text="The flush clears the leverage board. The stability check after the flush is how you confirm if major buyers remain active in the market."
          analogy="A liquidation flush is like a storm clearing away dead tree branches. If the trunk stands firm (price holds), the tree is strong. If the trunk snaps (price collapses), the tree was rotting."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};

/**
 * Card 9: CryptoDerivativesVerificationSequence
 * Visual Key: crypto-derivatives-verification-sequence
 */
export const CryptoDerivativesVerificationSequence = () => {
  const [activeStep, setActiveStep] = useState<string>("price");

  const steps = [
    {
      id: "price",
      label: "1. Price Direction",
      audit: "Did price spike up or fall down? Note the candle height.",
      tip: "Avoid drawing conclusions from price direction alone."
    },
    {
      id: "oi",
      label: "2. Open Interest Change",
      audit: "Did OI rise (fresh leverage entering) or fall (leverage unwinding)?",
      tip: "OI rising increases structural fragility."
    },
    {
      id: "funding",
      label: "3. Funding Skew",
      audit: "Is funding highly positive or highly negative? Which side is congested?",
      tip: "Highly positive funding means longs carry high cost burden."
    },
    {
      id: "liq",
      label: "4. Liquidations",
      audit: "Did forced liquidations print wicks during the candle?",
      tip: "Liquidations represent mechanical price movement."
    },
    {
      id: "settle",
      label: "5. Settlement",
      audit: "Wait for 2-3 candles. Does price stabilize or collapse back?",
      tip: "Stabilization is required before validating a reading."
    },
    {
      id: "follow",
      label: "6. Follow-Through",
      audit: "Does price continue with rising volume but neutral/flat funding?",
      tip: "Follow-through with flat funding shows clean spot-backed demand."
    },
    {
      id: "quality",
      label: "7. Classification",
      audit: "Mark the move as CLEAR, MIXED, FRAGILE, or UNSTABLE.",
      tip: "Only write down clear classifications for your journal."
    }
  ];

  const current = steps.find(s => s.id === activeStep)!;

  return (
    <CryptoDerivativesInstitutionalFrame label="Derivatives Verification Sequence" status="WORKFLOW LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Follow the step-by-step verification checklist before assigning a reading quality score to a crypto move.
        </p>

        {/* Verification Stepper Tracker */}
        <CryptoDerivativesStepWorkflow 
          steps={steps.map(s => ({ id: s.id, label: s.label.split(". ")[1], done: steps.findIndex(x => x.id === s.id) < steps.findIndex(y => y.id === activeStep) }))}
          activeStep={activeStep}
        />

        {/* Step Selector Grid */}
        <div className="flex flex-wrap justify-center gap-2 w-full max-w-2xl">
          {steps.map((s) => {
            const isActive = activeStep === s.id;
            return (
              <button
                type="button"
                key={s.id}
                onClick={() => setActiveStep(s.id)}
                className={cn(
                  "px-3 py-1.5 border rounded-xl text-xs font-bold transition-all cursor-pointer",
                  isActive
                    ? "bg-[#071B36] text-white border-[#071B36]"
                    : "bg-white text-slate-750 border-slate-200 hover:bg-slate-50"
                )}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Focus Panel */}
        <div className="w-full max-w-2xl bg-[#071B36] text-white rounded-2xl p-5 border border-slate-700 relative overflow-hidden text-left min-h-[110px] flex flex-col justify-center">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#06B6D4_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative z-10">
            <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest block mb-1 font-black">Audit Step Details</span>
            <h5 className="text-sm font-black text-white uppercase tracking-tight mb-1">
              {current.label}
            </h5>
            <p className="text-xs text-slate-255 leading-relaxed text-slate-200">
              {current.audit}
            </p>
            <p className="mt-1.5 text-[10px] text-cyan-300 font-bold italic">
              Verification Check: {current.tip}
            </p>
          </div>
        </div>

        <CryptoDerivativesMentorInsight 
          text="Verification is the key filter that separates a reactive gambler from an analyst. Do not skip steps; the market will find the missing check."
          analogy="Checking derivatives data step-by-step is like checking a plane's cockpit dashboard before takeoff. Skipping a single indicator can lead to catastrophic failure."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};

/**
 * Card 10: CryptoDerivativesPracticeDrill
 * Visual Key: crypto-derivatives-practice-drill
 */
export const CryptoDerivativesPracticeDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const scenarioDetails = [
    { label: "Price Action", value: "Spikes above range (+5%)" },
    { label: "OI Change", value: "Rises 15% pre-move, drops 12% on spike" },
    { label: "Funding Skew", value: "Highly Positive (+0.08%), cools to +0.02%" },
    { label: "Liquidations", value: "Shorts liquidated during push" },
    { label: "Follow-Through", value: "Stalls near breakout line, flat spot volume" }
  ];

  const options = [
    {
      id: "A",
      text: "Clear bullish reading because price broke range.",
      feedback: "Wrong. The breakout occurred, but derivatives metrics show it was heavily helped by short liquidations (squeezed out) and crowded long buildup. Stalling without spot volume makes it fragile, not clear."
    },
    {
      id: "B",
      text: "Mixed / fragile reading because of crowded pressure, liquidations, and weak follow-through.",
      feedback: "Correct! The breakout happened, but the leverage buildup and subsequent OI drop show it was a mechanical liquidation flush. The lack of clean follow-through means it remains fragile."
    },
    {
      id: "C",
      text: "Guaranteed reversal because funding was positive.",
      feedback: "Wrong. Extremely positive funding means crowded longs, but never guarantees an automatic reversal. The price must settle and prove itself before we classify a reversal."
    },
    {
      id: "D",
      text: "Ignore derivatives data as only candles matter.",
      feedback: "Wrong. Derivatives data explains why the price moved so fast and reveals whether the support floor is stable or fragile."
    }
  ];

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    setShowFeedback(true);
  };

  const isCorrect = selectedOption === "B";

  return (
    <CryptoDerivativesInstitutionalFrame label="Interactive Reading Classifier" status="PRACTICE DRILL">
      <div className="w-full flex flex-col gap-5 items-center">
        {/* Scenario Details Card */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Scenario Context Setup</span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {scenarioDetails.map((det) => (
              <div key={det.label} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider block mb-1">{det.label}</span>
                <span className="text-[10px] font-bold text-[#071B36] uppercase tracking-tight block leading-snug">{det.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Options Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
          {options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={cn(
                  "p-3 border rounded-2xl text-left flex items-start gap-3 transition-all cursor-pointer min-h-[60px]",
                  isSelected
                    ? isCorrect
                      ? "bg-emerald-50/70 border-emerald-500 text-emerald-950"
                      : "bg-rose-50/70 border-rose-500 text-rose-950"
                    : "bg-white text-slate-800 border-slate-200 hover:border-cyan-500 hover:bg-slate-50"
                )}
              >
                <span className={cn(
                  "w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-black shrink-0",
                  isSelected
                    ? isCorrect
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-rose-500 text-white border-rose-500"
                    : "bg-slate-50 text-slate-500 border-slate-200"
                )}>
                  {opt.id}
                </span>
                <span className="text-xs font-bold leading-tight">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Display */}
        {showFeedback && (
          <div className={cn(
            "w-full max-w-2xl rounded-2xl p-4 border text-left min-h-[80px] transition-all",
            isCorrect
              ? "bg-emerald-50 text-emerald-900 border-emerald-350"
              : "bg-rose-50 text-rose-900 border-rose-350"
          )}>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[9px] font-black uppercase tracking-wider block">Feedback Result &bull; {isCorrect ? "Correct" : "Incorrect"}</span>
            </div>
            <p className="text-xs font-bold leading-relaxed whitespace-normal break-words">
              {options.find(o => o.id === selectedOption)!.feedback}
            </p>
          </div>
        )}

        <CryptoDerivativesMentorInsight 
          text="A breakout on falling open interest is a leverage drain, not a fresh capital push. Wait for spot orders to defend the level before declaring it high quality."
          analogy="Chasing a breakout without checking follow-through is like boarding a train that has run out of fuel. It might glide a few more feet on momentum, but it will quickly stop."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};

/**
 * Card 11: CryptoDerivativesLabDebrief
 * Visual Key: crypto-derivatives-lab-debrief
 */
export const CryptoDerivativesLabDebrief = () => {
  const [selectedCase, setSelectedCase] = useState<string>("spot");

  const debriefCases = [
    {
      id: "spot",
      label: "Clean Spot Move",
      description: "OI rises slowly, funding remains flat and neutral. Price moves steadily with high spot volume support.",
      quality: "HIGH QUALITY",
      action: "Wait for normal structural pullback to verify support."
    },
    {
      id: "trap",
      label: "Leverage Trap Spike",
      description: "OI spikes 25% on breakout, funding hits extremely positive skew. Instant liquidations occur, followed by a vertical price dump.",
      quality: "LOW QUALITY",
      action: "Ignore the spike. The level is highly fragile."
    },
    {
      id: "squeeze",
      label: "Squeeze & Settle",
      description: "A short squeeze forces prices up. OI drops. Price consolidates sideways for 3 hours. Funding cools to flat.",
      quality: "STABILIZED",
      action: "Watch for spot buying to confirm trend direction."
    }
  ];

  const current = debriefCases.find(c => c.id === selectedCase)!;

  return (
    <CryptoDerivativesInstitutionalFrame label="Derivatives Classification Hub" status="LAB COMPLETED">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Review the final derivatives classification matrix. Select a case study to recap how market pressure dictates your reading quality.
        </p>

        {/* Toggle selector */}
        <CryptoDerivativesToggleSelector 
          options={debriefCases.map(c => ({ id: c.id, name: c.label }))}
          selectedId={selectedCase}
          onChange={setSelectedCase}
        />

        {/* Recapping Case Card */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Debrief Classification Study</span>
            <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
              {current.label}
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-xl">
              {current.description}
            </p>
            <p className="mt-2 text-[10px] text-cyan-600 font-black uppercase tracking-wider">
              Verification Action: {current.action}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Reading Quality</span>
            <CryptoDerivativesReadingQualityBadge quality={current.quality} />
          </div>
        </div>

        <CryptoDerivativesMentorInsight 
          text="Derivatives data are structural filters. They do not tell you what direction price must go; they tell you when a move is too unstable to trust."
          analogy="Checking derivatives pressure is like auditing a building's blueprint before renting it. It keeps you safe from moving into a structurally unstable home."
        />
      </div>
    </CryptoDerivativesInstitutionalFrame>
  );
};
