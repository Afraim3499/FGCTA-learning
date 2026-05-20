"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Layers, 
  Compass, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  RefreshCw, 
  ChevronRight, 
  ListChecks, 
  Ban, 
  TrendingUp, 
  Activity,
  Maximize2,
  Clock,
  TrendingDown,
  Globe,
  HelpCircle,
  ShieldAlert,
  Zap,
  Gauge
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * Helper: Mini Candlestick Graphic
 */
const MiniCandle = ({ bullish = true, bodyHeight = 40, wickTop = 15, wickBottom = 15, label = "", color = "" }) => (
  <div className="flex flex-col items-center justify-center h-32 w-16 bg-white/50 rounded-lg p-2 border border-slate-100 shadow-sm shrink-0">
    <div className="w-0.5 bg-slate-400" style={{ height: `${wickTop}px` }} />
    <div 
      className={cn(
        "w-5 rounded-sm border relative flex items-center justify-center animate-pulse", 
        color || (bullish ? "bg-teal-600 border-teal-700 shadow-sm text-white" : "bg-rose-600 border-rose-700 shadow-sm text-white")
      )} 
      style={{ height: `${bodyHeight}px`, animationDuration: "3.5s" }} 
    />
    <div className="w-0.5 bg-slate-400" style={{ height: `${wickBottom}px` }} />
    {label && <span className="text-[8px] font-black text-slate-500 mt-1 uppercase tracking-tighter text-center leading-none">{label}</span>}
  </div>
);

/**
 * Crypto Checklist Ribbon
 */
const CryptoChecklistRibbon = () => (
  <div className="w-full bg-[#0B1528] text-white py-2.5 px-4 rounded-xl border border-slate-800 flex items-center justify-between shadow-sm shrink-0 mb-4 font-mono">
    <div className="flex items-center gap-2">
      <Zap size={12} className="text-amber-400 animate-pulse" />
      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Crypto Roadway filter</span>
    </div>
    <span className="text-[10px] font-black text-amber-400 uppercase tracking-tight text-right italic">
      "Before I trust a crypto move, I must name the condition and verify spot support."
    </span>
  </div>
);

/**
 * Card 1: Crypto Conditions Begin With Market Layers
 */
export const CryptoConditionFoundation = () => {
  const [selectedLayer, setSelectedLayer] = useState("btc");

  const layers = {
    btc: {
      title: "BTC Context",
      desc: "Bitcoin acts as the market index. If BTC is trending, altcoin breaks hold. If BTC is choppy, altcoins become fragile.",
      rule: "Check BTC direction and range limits before trading any altcoin.",
      badge: "bg-amber-50 text-amber-600 border-amber-200"
    },
    venue: {
      title: "Spot vs Perp Support",
      desc: "Spot buying indicates real accumulation. Perp buying is leverage-driven and highly prone to sudden reversals.",
      rule: "Confirm breakouts have spot volume support, not just perp open interest spikes.",
      badge: "bg-teal-50 text-teal-600 border-teal-200"
    },
    liquidity: {
      title: "Liquidity Depth",
      desc: "Thin order books during late-session or weekends create erratic spikes with very poor follow-through.",
      rule: "Lower reading confidence when trading inside low-liquidity hours.",
      badge: "bg-purple-50 text-purple-600 border-purple-200"
    },
    leverage: {
      title: "Leverage Pressure",
      desc: "Crowded futures positioning triggers liquidation cascades, producing massive candles that represent forced exit spikes.",
      rule: "Never trade directly inside liquidation wicks until price stabilizes.",
      badge: "bg-rose-50 text-rose-600 border-rose-200"
    }
  };

  const current = layers[selectedLayer as keyof typeof layers];

  return (
    <InstitutionalFrame label="Crypto Condition Foundation" id="CR-01-FOUND">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Layer Buttons */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-3">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Layer Audit</span>
              <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Crypto Market Layers</h3>
              <p className="text-xs font-semibold text-slate-500 leading-normal">
                Click on the core crypto market layers below to see how they define the overall asset condition.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              {Object.keys(layers).map((k) => (
                <button
                  key={k}
                  onClick={() => setSelectedLayer(k)}
                  className={cn(
                    "w-full p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between shadow-sm",
                    selectedLayer === k 
                      ? "bg-white border-amber-500 ring-2 ring-amber-500/10 scale-102 text-[#0B1528]" 
                      : "bg-[#F8FBFC] border-slate-200 hover:bg-white text-slate-600"
                  )}
                >
                  <span className="text-xs font-black uppercase tracking-wider">{layers[k as keyof typeof layers].title}</span>
                  <ChevronRight size={14} className={selectedLayer === k ? "text-amber-600" : "text-slate-300"} />
                </button>
              ))}
            </div>
          </div>

          {/* Interactive display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><Compass size={100} className="text-[#0B1528]" /></div>
            
            <div className="space-y-4 relative z-10 font-mono">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-amber-500" />
                Active Market Layer
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-3">
                <span className={cn("px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border inline-block", current.badge)}>
                  {current.title}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 border border-slate-200 rounded-xl space-y-1">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none font-mono">Audit Filter Rule</span>
              <p className="text-xs text-[#0B1528] font-black leading-snug font-mono italic">"{current.rule}"</p>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="A crypto move becomes easier to read when you stop asking only 'Did it break?' and start asking 'What condition created this move?'"
          analogy="A professional sailor. Before judging if a boat (altcoin) is accelerating cleanly, the sailor checks the global ocean currents (BTC context), whether the engine is on or just a temporary sail flap (spot vs perp), and the depth of the harbor (liquidity depth)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: BTC Context Shapes the Crypto Environment
 */
export const CryptoBtcConditionMap = () => {
  const [activeWeather, setActiveWeather] = useState("clean");

  const conditions = {
    clean: {
      title: "BTC Clean Trend",
      altImpact: "High-Quality Expansion",
      desc: "Altcoin breakout structures are highly reliable and hold value. Risk environment is stable.",
      quality: "Clear Reading Quality",
      color: "bg-teal-50 text-teal-600 border-teal-200"
    },
    range: {
      title: "BTC Range / Balance",
      altImpact: "Independent Rotation",
      desc: "Altcoins move independently based on local factors. Standard range rotation rules apply.",
      quality: "Mixed / Independent Quality",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    transition: {
      title: "BTC Transition",
      altImpact: "Fragile Breakouts",
      desc: "Altcoins attempt breakouts but face sudden rejection the second Bitcoin tests range extremes.",
      quality: "Mixed Reading Quality",
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    chop: {
      title: "BTC Chop / Dump",
      altImpact: "Structure Breakdown",
      desc: "Erratic sweeps in Bitcoin invalidate all altcoin patterns. Altcoin breakouts collapse instantly.",
      quality: "Unclear / High Risk",
      color: "bg-rose-50 text-rose-600 border-rose-200"
    }
  };

  const current = conditions[activeWeather as keyof typeof conditions];

  return (
    <InstitutionalFrame label="BTC Weather Map" id="CR-02-BTC">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">BTC Context</span>
          <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Bitcoin Environment Overlay</h3>
        </div>

        {/* Weather selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
          {Object.keys(conditions).map((k) => (
            <button
              key={k}
              onClick={() => setActiveWeather(k)}
              className={cn(
                "py-3 px-2 rounded-lg text-left transition-all duration-200 flex flex-col justify-between h-16 shadow-sm font-mono",
                activeWeather === k ? "bg-[#0B1528] text-white border-transparent scale-102" : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
              )}
            >
              <span className="text-[8px] font-black uppercase text-slate-400 leading-none">Weather Condition</span>
              <span className="text-[9px] font-bold text-slate-400 mt-1 leading-none">{conditions[k as keyof typeof conditions].title}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Display component */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[200px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#0B1528_1.5px,transparent_1.5px)] bg-[length:16px_16px]" />
            
            <div className="flex gap-4 items-end relative z-10">
              {activeWeather === "clean" && (
                <>
                  <MiniCandle bullish={true} bodyHeight={30} label="BTC UP" color="bg-amber-500 border-amber-600 text-white" />
                  <MiniCandle bullish={true} bodyHeight={60} label="ALT BREAK" />
                  <MiniCandle bullish={true} bodyHeight={20} label="HOLD" color="bg-teal-600 border-teal-700 text-white animate-pulse" />
                </>
              )}
              {activeWeather === "range" && (
                <>
                  <MiniCandle bullish={true} bodyHeight={15} label="BTC BAL" color="bg-purple-500 border-purple-600 text-white" />
                  <MiniCandle bullish={false} bodyHeight={30} label="ALT RANGE" />
                  <MiniCandle bullish={true} bodyHeight={25} label="ROTATE" />
                </>
              )}
              {activeWeather === "transition" && (
                <>
                  <MiniCandle bullish={false} bodyHeight={40} label="BTC REJ" color="bg-amber-500 border-amber-600 text-white" />
                  <MiniCandle bullish={true} bodyHeight={50} label="ALT SPIKE" />
                  <MiniCandle bullish={false} bodyHeight={40} label="ALT FADE" color="bg-rose-500/40 border-rose-400 text-rose-800" />
                </>
              )}
              {activeWeather === "chop" && (
                <>
                  <MiniCandle bullish={true} bodyHeight={15} wickTop={30} wickBottom={30} label="BTC CHOP" color="bg-rose-500 border-rose-600 text-white" />
                  <MiniCandle bullish={false} bodyHeight={10} wickTop={40} wickBottom={40} label="ALT COLLAPSE" color="bg-rose-500/40 border-rose-400 text-rose-800" />
                </>
              )}
            </div>
          </div>

          {/* Details panel */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">BTC Weather Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", current.color)}>
                  {current.altImpact}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700 font-mono">
              Rule: BTC context is not there to confuse you. It helps you understand the market around the coin.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="BTC context helps you avoid reading an altcoin in isolation." 
          analogy="A solar system. Bitcoin is the sun, and the altcoins are the planets. If the sun goes through a massive solar storm (sudden drop), even the most beautiful planet's atmosphere (altcoin structure) will be disrupted."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: Spot-Supported Conditions Are Cleaner Than Perp-Only Pushes
 */
export const CryptoSpotPerpConditionBoard = () => {
  const [venueMode, setVenueMode] = useState("aligned");

  const venues = {
    aligned: {
      label: "Spot & Perp Aligned",
      spotVolume: "High Spot Buy Volume",
      perpOI: "Stable / Rising Open Interest",
      conditionResult: "Clean Expansion Environment",
      desc: "Price is rising with organic spot volume and moderate futures leverage. This condition is stable and high quality.",
      badge: "bg-teal-50 text-teal-600 border-teal-200"
    },
    perpOnly: {
      label: "Perp-Only Spike",
      spotVolume: "Flat Spot Buy Volume",
      perpOI: "Sharp $40M Open Interest Spike",
      conditionResult: "Unstable / Leverage Squeeze",
      desc: "Price is driven purely by leveraged futures traders. Spot order books are empty. Highly vulnerable to a complete reverse dump.",
      badge: "bg-rose-50 text-rose-600 border-rose-200"
    }
  };

  const current = venues[venueMode as keyof typeof venues];

  return (
    <InstitutionalFrame label="Spot/Perp Condition Board" id="CR-03-SPOT">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Spot vs Perp</span>
            <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Venue Agreement Dashboard</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setVenueMode("aligned")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", venueMode === "aligned" ? "bg-[#0B1528] text-white shadow-sm" : "text-slate-600 hover:text-[#0B1528]")}
            >
              Spot Supported
            </button>
            <button 
              onClick={() => setVenueMode("perpOnly")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", venueMode === "perpOnly" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-[#0B1528]")}
            >
              Perp Only
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Venues Display */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4 bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
            <div className="border border-slate-100 rounded-xl p-4 flex flex-col justify-between bg-slate-50/50">
              <span className="text-[8px] font-black uppercase text-slate-400 font-mono">Spot Order Books</span>
              <span className="text-[10px] font-black text-[#0B1528] uppercase leading-tight font-mono">{current.spotVolume}</span>
              <Info size={14} className="text-slate-300" />
            </div>
            
            <div className="border border-slate-100 rounded-xl p-4 flex flex-col justify-between bg-[#0B1528] text-white">
              <span className="text-[8px] font-black uppercase text-slate-400 font-mono">Perp Open Interest</span>
              <span className="text-[10px] font-black text-amber-400 uppercase leading-tight font-mono">{current.perpOI}</span>
              <Zap size={14} className="text-amber-400 animate-pulse" />
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Venue Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", current.badge)}>
                  {current.conditionResult}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Lesson: Perp pressure needs context. Spot agreement confirms the environment.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Perp movement can exaggerate what the market is doing. Look for spot agreement to confirm the condition." 
          analogy="A house sale. A buyer putting down real cash (spot buy) is a stable sign of property demand. A buyer putting down a tiny deposit and borrowing 50x the house value (perp) is a fragile, leveraged speculative bet."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: Crypto Compression Can Build Quiet Pressure
 */
export const CryptoCompressionCondition = () => {
  const [showPaths, setShowPaths] = useState(false);

  return (
    <InstitutionalFrame label="Compression Board" id="CR-04-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Compression</span>
            <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Volatility Contraction</h3>
          </div>
          
          <button 
            onClick={() => setShowPaths(!showPaths)} 
            className="px-5 py-2.5 bg-[#0B1528] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm shrink-0"
          >
            <RefreshCw size={12} className={cn("transition-transform duration-500", showPaths && "rotate-180")} />
            {showPaths ? "Show Compression Only" : "View Potential Expansion Paths"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Board */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between items-center shadow-sm min-h-[220px] relative overflow-hidden">
            {/* Upper Boundary */}
            <div className="w-full border-t border-slate-300 border-dashed flex items-center justify-between px-4 pt-1">
              <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">Compression Limit (High)</span>
            </div>

            {/* Squeeze Candles */}
            <div className="flex gap-4 items-center relative z-10 py-6">
              <MiniCandle bullish={true} bodyHeight={20} label="Sol consol" />
              <MiniCandle bullish={false} bodyHeight={15} label="Sol squeeze" />
              <MiniCandle bullish={true} bodyHeight={10} label="Coil" />
              {showPaths && (
                <>
                  <div className="absolute -top-1 right-2 w-0.5 h-16 border-r-2 border-teal-500 border-dashed animate-pulse" />
                  <div className="absolute -bottom-1 right-2 w-0.5 h-16 border-r-2 border-rose-500 border-dashed animate-pulse" />
                  <span className="absolute -top-6 right-2 text-[8px] font-black text-teal-600 bg-teal-50 px-1 border border-teal-200 rounded">EXPANSION UP</span>
                  <span className="absolute -bottom-6 right-2 text-[8px] font-black text-rose-600 bg-rose-50 px-1 border border-rose-200 rounded">EXPANSION DOWN</span>
                </>
              )}
            </div>

            {/* Lower Boundary */}
            <div className="w-full border-b border-slate-300 border-dashed flex items-center justify-between px-4 pb-1">
              <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">Compression Limit (Low)</span>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Compression Audit Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed font-bold">
                <p>
                  1. The asset is compressing. swigs are narrowing, and volume is dropping. Price is in directionless equilibrium.
                </p>
                <p>
                  2. Lurnava Filter: Compression does not guarantee which way the breakout will resolve.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 p-3 rounded-xl text-[9px] font-bold text-amber-800">
              Rule: Compression is not a prediction. Wait for verified expansion.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Compression is not a prediction. It is a condition that says, 'Movement is tightening. Wait to see what price proves next.'" 
          analogy="A pressurized boiler. The steam pressure is rising (compression). You know the gas will escape eventually, but it is useless to guess which seam of the pipe will leak first until the crack actually appears (expansion breakout)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: Crypto Expansion Can Be Clean or Unstable
 */
export const CryptoExpansionQuality = () => {
  const [expansionMode, setExpansionMode] = useState("clean");

  return (
    <InstitutionalFrame label="Expansion Quality Lab" id="CR-05-EXPN">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">Expansion</span>
            <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Breakout Verification</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setExpansionMode("clean")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", expansionMode === "clean" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-teal-600")}
            >
              Clean Hold
            </button>
            <button 
              onClick={() => setExpansionMode("fade")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", expansionMode === "fade" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-rose-600")}
            >
              Perp Spike & Fade
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute top-[80px] left-0 w-full border-t border-slate-300 border-dashed" />
            <span className="absolute top-[85px] left-4 text-[7px] font-black text-slate-400 uppercase tracking-wider">Range Boundary</span>

            <div className="flex gap-4 items-end relative z-10">
              <MiniCandle bullish={true} bodyHeight={20} label="Sol Range" />
              {expansionMode === "clean" ? (
                <>
                  <MiniCandle bullish={true} bodyHeight={60} label="SPOT BREAK" />
                  <MiniCandle bullish={true} bodyHeight={20} wickTop={10} label="HOLD OUT" color="bg-teal-600 border-teal-700 text-white animate-pulse" />
                </>
              ) : (
                <>
                  <MiniCandle bullish={true} bodyHeight={70} wickTop={25} label="PERP SPIKE" color="bg-rose-500 border-rose-600 text-white" />
                  <MiniCandle bullish={false} bodyHeight={50} label="FADE IN" color="bg-rose-600 border-rose-700 text-white animate-pulse" />
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Expansion Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", expansionMode === "clean" ? "text-teal-600 bg-teal-50 border-teal-200" : "text-rose-600 bg-rose-50 border-rose-200")}>
                  {expansionMode === "clean" ? "CLEAN VERIFIED EXPANSION" : "UNSTABLE PERP FADE"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {expansionMode === "clean" 
                    ? "The breakout candle closed cleanly outside the range with spot support, and the next candle held value outside. High quality."
                    : "A rapid spike driven by leveraged perp buying that ran out of fresh capital, failing to hold outside and quickly fading back."
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: The move happened. Now check whether the market supports it.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="A fast move is not always a clean move." 
          analogy="A building foundation. A house built on concrete blocks (spot buying) stays upright when a storm hits (trend continuation). A house built on an inflated balloon (perp leverage) collapses the second the air starts to leak (liquidation fade)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Liquidation Conditions Can Fake Clarity
 */
export const CryptoLiquidationCondition = () => {
  const [liqState, setLiqState] = useState("cascade");

  const states = {
    cascade: {
      label: "Cascade Spike",
      badge: "bg-rose-50 text-rose-600 border-rose-200",
      desc: "Forced short liquidations trigger automated market buy orders. Price spikes 8% in 3 minutes, leaving a massive wick.",
      status: "UNSTABLE ENVIRONMENT"
    },
    stabilize: {
      label: "Settled Hold",
      badge: "bg-teal-50 text-teal-600 border-teal-200",
      desc: "After the liquidation clearing, price remains consolidated near the highs. Organic demand steps in to defend the level.",
      status: "VERIFIED STABILITY"
    }
  };

  const current = states[liqState as keyof typeof states];

  return (
    <InstitutionalFrame label="Liquidation Environment Board" id="CR-06-LIQD">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Liquidation Environment</span>
            <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Forced Exit Diagnostics</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setLiqState("cascade")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", liqState === "cascade" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-rose-600")}
            >
              Liquidation Spike
            </button>
            <button 
              onClick={() => setLiqState("stabilize")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", liqState === "stabilize" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-teal-600")}
            >
              Post-Move Hold
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="flex gap-4 items-end relative z-10 font-mono">
              <MiniCandle bullish={true} bodyHeight={20} label="Balanced" />
              {liqState === "cascade" ? (
                <>
                  <MiniCandle bullish={true} bodyHeight={75} wickTop={40} label="LIQ CASC" color="bg-rose-500 border-rose-600 text-white" />
                  <div className="absolute top-4 right-4 bg-rose-100 border border-rose-200 rounded-lg p-2 flex items-center gap-1 text-[8px] font-black text-rose-700 uppercase animate-bounce">
                    <AlertTriangle size={10} />
                    Unstable mechanical spike
                  </div>
                </>
              ) : (
                <>
                  <MiniCandle bullish={true} bodyHeight={75} wickTop={10} label="LIQ CLEAR" />
                  <MiniCandle bullish={true} bodyHeight={20} label="STABLE" color="bg-teal-600 border-teal-700 text-white animate-pulse" />
                  <div className="absolute top-4 right-4 bg-teal-100 border border-teal-200 rounded-lg p-2 flex items-center gap-1 text-[8px] font-black text-teal-700 uppercase">
                    <CheckCircle size={10} />
                    Volume holds structure
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Liquidation Log</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", current.badge)}>
                  {current.status}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: A liquidation wick is a forced exit, not a fresh entry.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="A liquidation move is a forced mechanical event, not organic direction. Let the dust settle." 
          analogy="A crowded theater. Someone shouts 'fire' and everyone stampedes to the exit (liquidation cascade). The stampede is real, but it does not represent the crowd's long-term plan to live outside in the parking lot (unstable price level)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Low-Liquidity Conditions Make Crypto Noisier
 */
export const CryptoThinLiquidityCondition = () => {
  const [liquidityMode, setLiquidityMode] = useState("normal");

  const liquidities = {
    normal: {
      label: "Normal Participation",
      orderBook: "Thick book bids and asks",
      volatility: "Smooth step-by-step price action",
      quality: "High Reading Quality",
      desc: "Order books are dense. Large buy/sell orders are absorbed without major slippage. technical levels are respected.",
      badge: "bg-teal-50 text-teal-600 border-teal-200"
    },
    thin: {
      label: "Thin Liquidity (Weekend/Holiday)",
      orderBook: "Empty order book gaps",
      volatility: "Erratic spikes and quick fades",
      quality: "Lower Confidence Reading",
      desc: "Order books are hollow. Small retail orders cause large, erratic swings. Price action is highly noisy with wicks.",
      badge: "bg-rose-50 text-rose-600 border-rose-200"
    }
  };

  const current = liquidities[liquidityMode as keyof typeof liquidities];

  return (
    <InstitutionalFrame label="Liquidity Depth Visual" id="CR-07-LIQD">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Thin Liquidity</span>
            <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Order Book Density</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setLiquidityMode("normal")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all font-mono", liquidityMode === "normal" ? "bg-[#0B1528] text-white shadow-sm" : "text-slate-600 hover:text-[#0B1528]")}
            >
              Normal Volume
            </button>
            <button 
              onClick={() => setLiquidityMode("thin")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all font-mono", liquidityMode === "thin" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-[#0B1528]")}
            >
              Thin Liquidity
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Visual Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px]">
            <div className="flex gap-4 items-end relative z-10">
              {liquidityMode === "normal" ? (
                <>
                  <MiniCandle bullish={true} bodyHeight={25} label="Step 1" />
                  <MiniCandle bullish={true} bodyHeight={35} label="Step 2" />
                  <MiniCandle bullish={true} bodyHeight={40} label="Step 3" color="bg-teal-600 border-teal-700 text-white" />
                </>
              ) : (
                <>
                  <MiniCandle bullish={true} bodyHeight={70} wickTop={35} label="ERRATIC SPIKE" color="bg-rose-500 border-rose-600 text-white animate-pulse" />
                  <MiniCandle bullish={false} bodyHeight={60} label="ERRATIC FADE" color="bg-rose-600 border-rose-700 text-white animate-pulse" />
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Liquidity Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", current.badge)}>
                  {current.quality}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: If liquidity is thin, your confidence should drop.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Thin liquidity makes price move easily but hold poorly." 
          analogy="A trampoline. If the trampoline springs are thick and stiff (high liquidity), jumping on it creates a small bounce. If the springs are thin and loose (thin liquidity), the same jump sends you flying high, but you land off-balance."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: Crypto Chop Punishes Directional Assumptions
 */
export const CryptoChoppyConditionWarning = () => {
  return (
    <InstitutionalFrame label="Crypto Chop Detector" id="CR-08-CHOP" status="CHOP STATE">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Crypto Chop</span>
          <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Unreadable Environment</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-rose-50/10 border border-rose-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#0B1528_1.5px,transparent_1.5px)] bg-[length:16px_16px]" />
            
            <div className="flex gap-2 items-center relative z-10">
              <MiniCandle bullish={true} bodyHeight={20} wickTop={30} wickBottom={30} label="Chop" color="bg-rose-500/40 border-rose-400 text-rose-800" />
              <MiniCandle bullish={false} bodyHeight={15} wickTop={35} wickBottom={30} label="Chop" color="bg-slate-400/40 border-slate-300 text-slate-800" />
              <MiniCandle bullish={true} bodyHeight={10} wickTop={40} wickBottom={40} label="Chop" color="bg-rose-500/40 border-rose-400 text-rose-800" />
              <MiniCandle bullish={false} bodyHeight={25} wickTop={20} wickBottom={35} label="Chop" color="bg-slate-400/40 border-slate-300 text-slate-800" />
            </div>

            <div className="absolute top-4 right-4 bg-rose-100 border border-rose-200 rounded-lg p-2 flex items-center gap-1 text-[9px] font-black text-rose-700 uppercase">
              <AlertTriangle size={12} className="text-rose-500" />
              CHOP ENVIRONMENT
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none font-mono">Chop Diagnostics Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-2 text-xs font-bold text-slate-700 font-mono">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>Price boundaries are ignored</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>Candle bodies overlap constantly</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>No swing continuation exists</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-rose-100/50 p-4 border border-rose-200/50 rounded-xl text-[10px] font-bold text-rose-800 leading-normal flex items-start gap-2">
              <Ban size={14} className="shrink-0 mt-0.5" />
              <span>
                Chop is not a failure to understand. Sometimes the market is simply not clean. Protect capital and stand aside.
              </span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="If the chart feels messy, it may not be your fault. Sometimes the condition is genuinely messy." 
          analogy="A construction site. When thick dust is flying everywhere (chop), you do not paint the walls. You wait for the air to clear (clean structure) before making a final stroke."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Crypto Condition First, Break Second
 */
export const CryptoConditionFirstWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "1. Asset Condition", desc: "Is the coin trending, compressing, or choppy?" },
    { label: "2. BTC Context", desc: "Is Bitcoin trending cleanly or flat at resistance?" },
    { label: "3. Spot vs Perp", desc: "Is the volume spot-supported or perp-driven?" },
    { label: "4. Liquidity Depth", desc: "Is order book volume healthy or thin?" },
    { label: "5. Follow-through", desc: "Does price accept value outside the breakout level?" }
  ];

  return (
    <InstitutionalFrame label="Reading Workflow" id="CR-09-WORK">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Workflow Map</span>
          <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Crypto Mental Checklist</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Flow list */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-2">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "p-3 rounded-xl border text-left transition-all duration-205 flex items-center justify-between shadow-sm",
                  activeStep === idx 
                    ? "bg-[#0B1528] text-white border-transparent scale-102" 
                    : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                )}
              >
                <span className="text-xs font-black uppercase tracking-wider font-mono">{s.label}</span>
                <ChevronRight size={14} className={activeStep === idx ? "text-amber-400" : "text-slate-300"} />
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm font-mono relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><ListChecks size={100} className="text-[#0B1528]" /></div>
            
            <div className="space-y-4 relative z-10">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Workflow Step Details</span>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-2">
                <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                  {steps[activeStep].label}
                </span>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 rounded-xl text-[9px] font-bold text-slate-700 italic border border-slate-200">
              Rule: Never audit a candle until you have named the room it is standing in.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Never audit a candle until you have named the room it is standing in."
          analogy="An inspector. Before checking if a single electrical switch works (breakout candle), the inspector checks if the building's main power grid is turned on (BTC context) and if the wiring is up to code (spot support)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: What Crypto Condition Is This Asset In?
 */
export const CryptoConditionPracticeDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const scenario = {
    prior: "An altcoin was compressing inside a tight range. It suddenly breaks above the range with a strong candle. BTC is flat below a major resistance.",
    recent: "The perp chart shows a much sharper move with rising open interest, but spot buy volume is weak. Liquidity is thin, and the next candle stalls."
  };

  const options = [
    {
      id: "A",
      text: "Clean expansion condition because the altcoin broke above the range.",
      isCorrect: false,
      feedback: "Incorrect. The break matters, but expansion is not clean until broader evidence supports it. Here, BTC is flat at resistance, spot volume is weak, perps are leading, and follow-through is stalling."
    },
    {
      id: "B",
      text: "Clean trend condition because the breakout candle was strong.",
      isCorrect: false,
      feedback: "Incorrect. One strong candle does not create a full trend condition. Trends require session support and structured follow-through, which are missing here."
    },
    {
      id: "C",
      text: "Mixed / unstable expansion because the move happened, but BTC context, spot support, liquidity, and follow-through are not clean.",
      isCorrect: true,
      feedback: "Correct! The move occurred, but the flat BTC context, perp-driven leverage, thin liquidity, and stalled follow-through mean the condition is mixed or unstable. It is not a clean expansion."
    },
    {
      id: "D",
      text: "Guaranteed reversal because the next candle stalled.",
      isCorrect: false,
      feedback: "Incorrect. Stalling and weak follow-through lower the quality of the condition reading, but they do not guarantee a reversal. Avoid predictive, absolute statements."
    }
  ];

  return (
    <InstitutionalFrame label="Crypto Condition Practice Drill" id="CR-10-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Scenario Board */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-amber-500" />
                Scenario Evidence Board
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-3 font-mono">
                <h4 className="text-[10px] font-black uppercase text-[#0B1528]">Breakout Attempt</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">{scenario.prior}</p>
                
                <h4 className="text-[10px] font-black uppercase text-[#0B1528] mt-4">Context Clues</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">{scenario.recent}</p>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 rounded-xl text-[9px] font-mono text-slate-500">
              Audit Rule: Look for correlation and follow-through.
            </div>
          </div>

          {/* Choices */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#0B1528] uppercase tracking-tight font-mono">
                What is the most disciplined crypto condition reading?
              </h3>
              
              <div className="space-y-2">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedOption(opt.id)}
                    className={cn(
                      "w-full p-4 rounded-xl border text-left text-xs font-bold leading-normal transition-all duration-200 shadow-sm font-mono",
                      selectedOption === opt.id 
                        ? opt.isCorrect 
                          ? "bg-teal-50 border-teal-500 ring-2 ring-teal-500/10 text-teal-900"
                          : "bg-rose-50 border-rose-500 ring-2 ring-rose-500/10 text-rose-900"
                        : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                    )}
                  >
                    <span className="font-extrabold mr-2">{opt.id}.</span>
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Panel */}
            <AnimatePresence mode="wait">
              {selectedOption && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={cn(
                    "p-4 rounded-xl border text-xs font-semibold leading-relaxed shadow-sm font-mono",
                    options.find(o => o.id === selectedOption)?.isCorrect 
                      ? "bg-teal-50 border-teal-200 text-teal-800"
                      : "bg-rose-50 border-rose-200 text-rose-800"
                  )}
                >
                  <div className="flex items-center gap-1.5 mb-1.5 font-mono">
                    {options.find(o => o.id === selectedOption)?.isCorrect ? (
                      <CheckCircle size={14} className="text-teal-600" />
                    ) : (
                      <AlertTriangle size={14} className="text-rose-600" />
                    )}
                    <span className="font-black uppercase tracking-widest text-[9px]">
                      {options.find(o => o.id === selectedOption)?.isCorrect ? "Correct Audit" : "Audit Discrepancy"}
                    </span>
                  </div>
                  <p>{options.find(o => o.id === selectedOption)?.feedback}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <MentorInsight 
          text="If the spot volume is missing and BTC is flat, the breakout is likely built on sand."
          analogy="Divergence. If a pilot tries to take off (breakout spike) but the co-pilot (spot volume) is asleep and the engine (BTC) is turned off, the airplane will stall and crash immediately."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Debrief: Read the Crypto Condition Before the Move
 */
export const CryptoConditionDebrief = () => {
  return (
    <InstitutionalFrame label="Crypto Roadway Debrief" id="CR-11-DEBR">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <CryptoChecklistRibbon />

        <div className="bg-[#0B1528] rounded-[2rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-6 opacity-10"><Zap size={120} className="text-amber-400" /></div>
          
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-extrabold text-amber-400 uppercase tracking-[0.25em]">Crypto Track Complete</span>
            <h3 className="text-lg font-black leading-tight uppercase tracking-tight font-mono">Environmental Filter</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-semibold">
              You have completed the Level 0 Module 0.7 Crypto Roadway. You have shifted your perspective from chasing individual candles to auditing the overall crypto environment. You now understand that BTC context, spot/perp alignment, liquidity depth, leverage pressure, structure, and follow-through dictate the validity of every technical setup.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#0B1528] mb-2 font-mono">1. BTC Context</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Always monitor Bitcoin's structural environment before entering altcoin trades. A shaky BTC breaks all local altcoin patterns.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#0B1528] mb-2 font-mono">2. Spot vs Perp</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Verify spot buying order books to ensure a move represents organic token accumulation rather than leveraged speculation.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#0B1528] mb-2 font-mono">3. Liquidity Depth</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Avoid trading inside low-liquidity windows (weekends/late-sessions) where price action is noisy and wicks are common.
            </p>
          </div>
        </div>

        <MentorInsight 
          text="Do not ask what the crypto candle is doing. Ask what condition the asset is in, and what market layer created it." 
          analogy="A professional navigator. They do not just steer the wheel (trade the local candles); they check the weather radar (BTC), the fuel levels (spot vs perp), and the depth of the water (liquidity) before sailing."
        />
      </div>
    </InstitutionalFrame>
  );
};
