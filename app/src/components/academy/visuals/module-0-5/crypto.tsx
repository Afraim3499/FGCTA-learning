"use client";

import React, { useState } from "react";
import {
  Globe,
  Fingerprint,
  Activity,
  Layers,
  TrendingUp,
  TrendingDown,
  Scale,
  ShieldAlert,
  Zap,
  CheckCircle,
  Eye,
  Workflow,
  Compass,
  ArrowRight,
  Database
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LURNAVA INSTITUTIONAL DESIGN TOKENS
 */
const UI = {
  navy: "#071B36",
  teal: "#0D9488",
  slate: "#475569",
  border: "#E2E8F0",
  bg: "#F8FBFC",
  rose: "#BE123C",
  sky: "#0284C7",
  amber: "#D97706"
};

/**
 * Institutional Frame Component
 */
const InstitutionalFrame = ({
  children,
  label,
  status = "AUDIT ACTIVE",
  id = "LN-0.5-CR"
}: {
  children: React.ReactNode;
  label: string;
  status?: string;
  id?: string;
}) => (
  <div className="w-full h-full min-h-[550px] bg-[#F8FBFC] border border-[#E2E8F0] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:32px_32px]" />

    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-slate-200/50 pb-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <Globe size={10} className="text-teal-600 animate-spin-slow" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Crypto Track Adaptation</span>
        </div>
        <h4 className="text-base font-black text-[#071B36] uppercase tracking-tighter italic">{label}</h4>
      </div>
      <div className="flex items-center gap-3 self-end md:self-auto">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Audit ID</span>
          <span className="text-[10px] font-mono text-[#071B36] font-bold">{id}</span>
        </div>
        <div className="w-px h-6 bg-slate-200" />
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-[9px] font-black text-[#071B36] uppercase tracking-widest">{status}</span>
        </div>
      </div>
    </div>

    <div className="flex-1 flex flex-col items-center justify-center relative z-10">
      {children}
    </div>

    <div className="mt-8 pt-4 border-t border-slate-200/50 flex items-center justify-between">
       <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 bg-teal-500 rounded-full" />
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Venue Feeds Synchronized</span>
          </div>
       </div>
       <div className="flex items-center gap-1.5">
          <Fingerprint size={10} className="text-slate-300" />
          <span className="text-[8px] font-mono text-slate-300 uppercase tracking-tighter">LN-CR-PROD-V1</span>
       </div>
    </div>
  </div>
);

const MentorInsight = ({ text, analogy }: { text: string; analogy?: string }) => (
  <div className="w-full mt-8 pt-6 border-t border-slate-200/50 flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <div className="px-2 py-1 bg-[#071B36] text-white text-[8px] font-black uppercase tracking-widest rounded-sm">Mentor Insight</div>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
    <div className="flex gap-4">
       <div className="flex-1">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">{text}</p>
          {analogy && (
            <p className="mt-2 text-[11px] text-slate-500 italic leading-snug">
              <span className="font-black uppercase text-[9px] mr-2 text-teal-600 not-italic">Analogy:</span>
              {analogy}
            </p>
          )}
       </div>
    </div>
  </div>
);

/**
 * Card 1: Crypto Structure Is Fragmented Market Behavior
 */
export const CryptoFragmentedStructureSkeleton = () => {
  const [activeVenue, setActiveVenue] = useState<"cex" | "perp" | "dex" | "index">("index");

  const venueData = {
    cex: { label: "CEX Spot (Binance)", status: "Steady Accumulation", color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20", desc: "Clean upward structure with heavy limit buyers holding the low swings." },
    perp: { label: "Derivatives (Perps)", status: "Leverage Spike / Squeeze", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20", desc: "High leverage wicks and funding sweeps showing extreme deviation from spot." },
    dex: { label: "DEX Pools (Uniswap)", status: "Thin Liquidity Sweep", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", desc: "Large isolated drop from one heavy sell order. No broad market follow-through." },
    index: { label: "Aggregated Index Feed", status: "Smoothed Reading", color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20", desc: "Weighted average across multiple exchanges. Hides venue-specific anomalies." }
  };

  return (
    <InstitutionalFrame label="Multi-Venue Fragmentation Map" id="CR-05-FRAG">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[350px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-6 opacity-[0.02] pointer-events-none"><Layers size={220} className="text-teal-400" /></div>

          <div className="flex flex-col items-center gap-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] font-extrabold text-teal-400 uppercase tracking-widest">Multi-Feed Mapping Panel</span>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">The Fragmented Asset View</h3>
            </div>

            {/* Central Node Visual */}
            <div className="relative w-full max-w-md h-36 flex items-center justify-center">
              {/* Central Asset Circle */}
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center z-10 shadow-2xl">
                <span className="text-xs font-black text-white font-mono uppercase tracking-wider">SOL</span>
              </div>

              {/* Connecting Lines & Outer Venues */}
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Four Corner Nodes */}
              <div className={cn("absolute top-2 left-[10%] px-3 py-1.5 rounded-xl border text-[9px] font-bold uppercase transition-all", activeVenue === 'cex' ? "bg-teal-500/20 border-teal-500 text-teal-300" : "bg-slate-900 border-slate-800 text-slate-500")}>CEX SPOT</div>
              <div className={cn("absolute top-2 right-[10%] px-3 py-1.5 rounded-xl border text-[9px] font-bold uppercase transition-all", activeVenue === 'perp' ? "bg-rose-500/20 border-rose-500 text-rose-300" : "bg-slate-900 border-slate-800 text-slate-500")}>PERP MARKET</div>
              <div className={cn("absolute bottom-2 left-[10%] px-3 py-1.5 rounded-xl border text-[9px] font-bold uppercase transition-all", activeVenue === 'dex' ? "bg-amber-500/20 border-amber-500 text-amber-300" : "bg-slate-900 border-slate-800 text-slate-500")}>DEX POOL</div>
              <div className={cn("absolute bottom-2 right-[10%] px-3 py-1.5 rounded-xl border text-[9px] font-bold uppercase transition-all", activeVenue === 'index' ? "bg-sky-500/20 border-sky-500 text-sky-300" : "bg-slate-900 border-slate-800 text-slate-500")}>AGGREGATE</div>
            </div>

            {/* Selector Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
              {(Object.keys(venueData) as Array<keyof typeof venueData>).map((venue) => (
                <button
                  key={venue}
                  onClick={() => setActiveVenue(venue)}
                  className={cn(
                    "px-4 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-wider transition-all border shadow-sm cursor-pointer",
                    activeVenue === venue
                      ? "bg-teal-600 text-white border-transparent"
                      : "bg-white text-slate-400 border-slate-100 hover:border-slate-200"
                  )}
                >
                  {venue === 'cex' ? 'CEX Spot' : venue === 'perp' ? 'Perps Feed' : venue === 'dex' ? 'DEX Pool' : 'Aggregate'}
                </button>
              ))}
            </div>
          </div>

          {/* Description Panel */}
          <div className="w-full bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl mt-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className={cn("px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest", venueData[activeVenue].bg, venueData[activeVenue].border, venueData[activeVenue].color)}>
                {venueData[activeVenue].status}
              </span>
              <span className="text-[10px] font-black text-white uppercase tracking-wider">{venueData[activeVenue].label}</span>
            </div>
            <p className="text-xs text-slate-400 font-bold leading-relaxed uppercase tracking-wide">
              {venueData[activeVenue].desc}
            </p>
          </div>
        </div>

        <MentorInsight
          text="A crypto chart is never a single source of truth. One exchange can print an aggressive structure break due to low liquidity while other venues remain completely flat. Always verify if the move is broad or isolated."
          analogy="Four photographers taking a picture of the same statue from different angles. One angle might make the statue look taller, but the statue's physical height hasn't actually changed."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: Crypto Swings Can Come From Different Engines
 */
export const CryptoSwingSourceMap = () => {
  const [selectedEngine, setSelectedEngine] = useState<"spot" | "perp" | "liq" | "thin">("spot");

  const engineDetails = {
    spot: { label: "Spot Accumulation Swing", title: "Organic Capital Injection", color: "text-teal-400", border: "border-teal-500/30", bg: "bg-teal-950/20", desc: "Formed when actual spot buyers match or exceed limit sells. The swing high or low builds high-quality, lasting structural support." },
    perp: { label: "Perpetual Contract Squeeze", title: "Funding & Leverage Drive", color: "text-sky-400", border: "border-sky-500/30", bg: "bg-sky-950/20", desc: "Driven by aggressive derivative buying/selling. It creates strong short-term swings, but if spot demand does not follow, the swing frequently fades." },
    liq: { label: "Liquidation Cascade Sweep", title: "Forced Position Closure", color: "text-rose-400", border: "border-rose-500/30", bg: "bg-rose-950/20", desc: "A hyper-aggressive price spike created by the mechanical triggering of leverage stops. The swing high or low forms a temporary extreme that wicks back fast." },
    thin: { label: "Thin-Liquidity Wick", title: "Order Book Vacuum", color: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-950/20", desc: "Occurs during low volume periods when a small market order sweeps through empty price quotes. The swing carries very low structural evidence." }
  };

  return (
    <InstitutionalFrame label="Swing Engine Diagnostic Board" id="CR-05-SWING">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[350px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-6 opacity-[0.02] pointer-events-none"><Activity size={220} className="text-teal-400" /></div>

          <div className="flex flex-col items-center gap-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] font-extrabold text-teal-400 uppercase tracking-widest">Interactive Swing Engine</span>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Anatomy of a Turning Point</h3>
            </div>

            {/* Graphic representation of candle swing */}
            <div className="w-full max-w-md h-40 bg-slate-900 rounded-2xl relative border border-slate-800 flex items-center justify-center">
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:16px_16px]" />
              <svg className="w-full h-full max-w-[320px] overflow-visible" viewBox="0 0 400 160">
                {/* Reference line */}
                <line x1="20" y1="80" x2="380" y2="80" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

                {/* Left candle */}
                <rect x="80" y="50" width="20" height="60" fill="#334155" />
                <line x1="90" y1="30" x2="90" y2="130" stroke="#334155" strokeWidth="2" />

                {/* Central swing low candle */}
                <rect x="190" y="90" width="20" height="30" fill="#BE123C" />
                <motion.line
                  x1="200"
                  y1="50"
                  x2="200"
                  animate={{ y2: selectedEngine === 'liq' || selectedEngine === 'thin' ? 150 : 110 }}
                  stroke={selectedEngine === 'liq' ? "#ef4444" : selectedEngine === 'thin' ? "#f59e0b" : "#94a3b8"}
                  strokeWidth="3"
                  transition={{ type: "spring", stiffness: 80 }}
                />

                {/* Highlight selector circle around swing low */}
                <motion.circle
                  cx="200"
                  animate={{ cy: selectedEngine === 'liq' || selectedEngine === 'thin' ? 150 : 110 }}
                  r="10"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="3 2"
                  className="animate-spin-slow"
                />

                {/* Right candle */}
                <rect x="300" y="40" width="20" height="50" fill="#0D9488" />
                <line x1="310" y1="20" x2="310" y2="110" stroke="#0D9488" strokeWidth="2" />
              </svg>
            </div>

            {/* Selector Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
              {(Object.keys(engineDetails) as Array<keyof typeof engineDetails>).map((engine) => (
                <button
                  key={engine}
                  onClick={() => setSelectedEngine(engine)}
                  className={cn(
                    "px-4 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-wider transition-all border shadow-sm cursor-pointer",
                    selectedEngine === engine
                      ? "bg-teal-600 text-white border-transparent"
                      : "bg-white text-slate-400 border-slate-100 hover:border-slate-200"
                  )}
                >
                  {engineDetails[engine].title}
                </button>
              ))}
            </div>
          </div>

          {/* Description Panel */}
          <div className={cn("w-full border p-5 rounded-[2rem] transition-all", engineDetails[selectedEngine].bg, engineDetails[selectedEngine].border)}>
            <span className={cn("text-[9px] font-black uppercase tracking-widest block mb-1", engineDetails[selectedEngine].color)}>
              {engineDetails[selectedEngine].label}
            </span>
            <p className="text-xs font-bold leading-relaxed text-slate-300 uppercase tracking-wide">
              {engineDetails[selectedEngine].desc}
            </p>
          </div>
        </div>

        <MentorInsight
          text="Marking a swing low or high is only a description of where price turned. Real reading starts when you analyze *how* it turned. Squeezes and thin liquidations provide highly unstable reference points."
          analogy="A footprint in dry sand versus a footprint in wet concrete. Both footprints exist, but one will disappear immediately with the next wave, while the other remains solid."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: BTC Structure vs Altcoin Structure
 */
export const CryptoBtcAltStructureContext = () => {
  const [btcTrend, setBtcTrend] = useState<"bullish" | "bearish">("bullish");

  return (
    <InstitutionalFrame label="BTC Correlation Audit Panel" id="CR-05-BTC">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[350px] flex flex-col justify-between">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] font-extrabold text-teal-400 uppercase tracking-widest">BTC Market Context Layer</span>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Altcoin Structure Aligned vs Isolated</h3>
            </div>

            {/* Toggle Switch */}
            <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 w-full max-w-xs justify-center">
              <button
                onClick={() => setBtcTrend("bullish")}
                className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer", btcTrend === 'bullish' ? "bg-teal-600 text-white" : "text-slate-400")}
              >
                BTC Bullish Trend
              </button>
              <button
                onClick={() => setBtcTrend("bearish")}
                className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer", btcTrend === 'bearish' ? "bg-rose-600 text-white" : "text-slate-400")}
              >
                BTC Aggressive Sell-off
              </button>
            </div>

            {/* Visualizing Dual Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              {/* BTC Chart */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-white uppercase tracking-wider">BTC Macro (4H)</span>
                  <span className={cn("px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest", btcTrend === 'bullish' ? "bg-teal-500/10 border border-teal-500/20 text-teal-400" : "bg-rose-500/10 border-rose-500/20 text-rose-400")}>
                    {btcTrend === 'bullish' ? "SUPPORTIVE CONTEXT" : "RISK-OFF CRASH"}
                  </span>
                </div>
                <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 100">
                  <motion.path
                    key={`btc-${btcTrend}`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    d={btcTrend === 'bullish' ? "M 20 80 L 70 60 L 120 70 L 180 30" : "M 20 30 L 70 50 L 120 40 L 180 90"}
                    fill="none"
                    stroke={btcTrend === 'bullish' ? "#0D9488" : "#BE123C"}
                    strokeWidth="4"
                    transition={{ duration: 0.5 }}
                  />
                </svg>
              </div>

              {/* Altcoin Chart */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-white uppercase tracking-wider">Altcoin (15m)</span>
                  <span className={cn("px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest", btcTrend === 'bullish' ? "bg-teal-500/10 border border-teal-500/20 text-teal-400" : "bg-amber-500/10 border-amber-500/20 text-amber-400")}>
                    {btcTrend === 'bullish' ? "CLEAN TRENDING" : "ISOLATED STRENGTH (HIGH RISK)"}
                  </span>
                </div>
                <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 100">
                  <motion.path
                    key={`alt-${btcTrend}`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    d="M 20 75 L 60 55 L 100 65 L 140 45 L 180 30"
                    fill="none"
                    stroke="#0D9488"
                    strokeWidth="4"
                    transition={{ duration: 0.5 }}
                  />
                  {btcTrend === 'bearish' && (
                    <motion.circle cx="180" cy="30" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" className="animate-pulse" />
                  )}
                </svg>
              </div>
            </div>
          </div>

          {/* Verdict block */}
          <div className="w-full bg-slate-900/60 border border-slate-800 p-4 rounded-2xl mt-6">
            <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest block mb-1">Pedagogical Verdict</span>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wide">
              {btcTrend === 'bullish'
                ? "Confluence Aligned: The altcoin's bullish structure is fully backed by supportive BTC market conditions."
                : "Context Conflict: Altcoin rally looks strong, but BTC structure crash creates heavy resistance and likely fakeouts."}
            </p>
          </div>
        </div>

        <MentorInsight
          text="An altcoin cannot escape the Bitcoin gravitational pull for long. A local 15m breakout is highly likely to become a trap if BTC's higher-timeframe structure is actively selling off. Context must support local strength."
          analogy="A small boat trying to speed forward while the ocean tide is aggressively pulling backward. The boat's engine is running, but the current is too strong to make real headway."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: Spot, Perp, and DEX Structure Can Disagree
 */
export const CryptoVenueStructureDisagreement = () => {
  const [selectedView, setSelectedView] = useState<"spot" | "perp" | "dex">("spot");

  const charts = {
    spot: { label: "CEX Spot (Stable Range)", color: "#0D9488", path: "M 20 60 L 60 50 L 100 60 L 140 50 L 180 60", markerY: 60, markerText: "Controlled Boundary", note: "Spot order books remain steady and within standard range parameters. The boundary holds clean." },
    perp: { label: "Derivatives Perps (False Breakout)", color: "#BE123C", path: "M 20 60 L 60 50 L 100 60 L 140 20 L 180 60", markerY: 20, markerText: "Short Squeeze Spike", note: "A leveraged sweep pushes perps above local high, but spot order books don't follow, causing it to return instantly." },
    dex: { label: "DEX Pool (Liquidity Wick)", color: "#D97706", path: "M 20 60 L 60 50 L 100 95 L 140 50 L 180 60", markerY: 95, markerText: "Slippage Drop Wick", note: "A single heavy block swap sweeps the thin liquidity pool, printing a long downward wick. CEX spot is unaffected." }
  };

  return (
    <InstitutionalFrame label="Cross-Venue Disagreement Audit" id="CR-05-VENUE">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[350px] flex flex-col justify-between">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] font-extrabold text-teal-400 uppercase tracking-widest">Multi-Venue Comparative Panel</span>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Cross-venue structural divergence</h3>
            </div>

            {/* Toggle controls */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md">
              {(Object.keys(charts) as Array<keyof typeof charts>).map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedView(v)}
                  className={cn(
                    "px-4 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-wider transition-all border shadow-sm cursor-pointer",
                    selectedView === v
                      ? "bg-teal-600 text-white border-transparent"
                      : "bg-white text-slate-400 border-slate-100 hover:border-slate-200"
                  )}
                >
                  {charts[v].label.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Interactive Comparative Graph */}
            <div className="w-full max-w-md h-40 bg-slate-900 rounded-2xl relative border border-slate-800 flex items-center justify-center p-4">
              <div className="absolute top-8 left-0 w-full h-px bg-slate-800 border-dashed" />
              <div className="absolute bottom-8 left-0 w-full h-px bg-slate-800 border-dashed" />

              <svg className="w-full h-full max-w-[320px] overflow-visible" viewBox="0 0 200 120">
                <motion.path
                  key={selectedView}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  d={charts[selectedView].path}
                  fill="none"
                  stroke={charts[selectedView].color}
                  strokeWidth="4"
                  strokeLinecap="round"
                  transition={{ duration: 0.4 }}
                />

                {/* Dynamic warning circle */}
                <circle cx="140" cy={charts[selectedView].markerY} r="8" fill="white" stroke={charts[selectedView].color} strokeWidth="2.5" className="animate-pulse" />
              </svg>

              <div className="absolute top-4 right-4 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-[8px] font-bold text-white uppercase tracking-widest">
                {charts[selectedView].markerText}
              </div>
            </div>
          </div>

          {/* Description Panel */}
          <div className="w-full bg-slate-900/60 border border-slate-800 p-4 rounded-2xl mt-6">
            <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest block mb-1">{charts[selectedView].label}</span>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wide leading-relaxed">
              {charts[selectedView].note}
            </p>
          </div>
        </div>

        <MentorInsight
          text="When perp structure breaks resistance but spot fails to react, do not rush. The derivatives market can squeeze leverage in isolation, creating a highly volatile structural disagreement that breaks down quickly."
          analogy="A shadow on the wall cast by a small toy. The shadow looks massive (perp move), but the real object (spot) remains very small."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: Trend and Range in Crypto Assets
 */
export const CryptoTrendRangeStructure = () => {
  const [activeTab, setActiveTab] = useState<'trend' | 'range' | 'unclear'>('trend');

  const configs = {
    trend: {
      label: "Bullish Trend Structure",
      path: "M 20 180 L 80 130 L 140 150 L 200 90 L 260 110 L 320 50",
      points: [
        { x: 80, y: 130, label: "HH" },
        { x: 140, y: 150, label: "HL" },
        { x: 200, y: 90, label: "HH" },
        { x: 260, y: 110, label: "HL" },
        { x: 320, y: 50, label: "HH" }
      ],
      desc: "Swing relationships are fully intact. Price cleanly makes higher highs and higher lows. Volatility is high but structure remains aligned.",
      color: "#0d9488"
    },
    range: {
      label: "sideways range rotation",
      path: "M 20 120 L 70 70 L 130 170 L 190 60 L 250 170 L 320 120",
      points: [
        { x: 70, y: 70, label: "RANGE HIGH" },
        { x: 130, y: 170, label: "RANGE LOW" },
        { x: 190, y: 60, label: "WICK FAKEOUT" },
        { x: 250, y: 170, label: "RANGE LOW" }
      ],
      desc: "Repeated rotation between range highs and range lows. Notice how aggressive wicks frequently spike past limits before returning inside.",
      color: "#0284c7"
    },
    unclear: {
      label: "unclear structural breakdown",
      path: "M 20 100 L 70 120 L 120 80 L 180 140 L 240 70 L 320 160",
      points: [
        { x: 120, y: 80, label: "OVERLAP" },
        { x: 180, y: 140, label: "NO RELATION" },
        { x: 240, y: 70, label: "OVERLAP" }
      ],
      desc: "Swings are highly overlapped with zero clean relationship. The trend is undefined and no clear range limits exist. Stay flat.",
      color: "#BE123C"
    }
  };

  return (
    <InstitutionalFrame label="Structure Classification Engine" id="CR-05-CLASS">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="flex bg-[#071B36] p-2 rounded-[2rem] border border-slate-800 shadow-2xl relative overflow-hidden flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            {(Object.keys(configs) as Array<keyof typeof configs>).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={cn(
                  "w-full px-5 py-3.5 rounded-2xl text-left text-[10px] font-black uppercase tracking-widest transition-all border cursor-pointer",
                  activeTab === t
                    ? "bg-teal-600 border-transparent text-white shadow-lg"
                    : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"
                )}
              >
                {configs[t].label}
              </button>
            ))}
          </div>

          <div className="flex-1 bg-slate-900 rounded-[2rem] p-6 h-[280px] relative overflow-hidden flex items-center justify-center border border-slate-800 shadow-xl w-full">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:24px_24px]" />
            <svg className="w-full h-full max-w-[350px] overflow-visible" viewBox="0 0 380 250">
              {activeTab === 'range' && (
                <>
                  <line x1="0" y1="70" x2="500" y2="70" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
                  <line x1="0" y1="170" x2="500" y2="170" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
                </>
              )}
              <motion.path
                key={activeTab}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                d={configs[activeTab].path}
                fill="none"
                stroke={configs[activeTab].color}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {configs[activeTab].points.map((pt, i) => (
                <g
                  key={`${activeTab}-${i}`}
                  className={cn(
                    "animate-in zoom-in duration-300",
                    i === 0 ? "delay-0" : i === 1 ? "delay-75" : i === 2 ? "delay-150" : "delay-300"
                  )}
                >
                  <circle cx={pt.x} cy={pt.y} r="6" fill="white" stroke={configs[activeTab].color} strokeWidth="3" />
                  <foreignObject x={pt.x - 35} y={pt.y < 120 ? pt.y - 28 : pt.y + 12} width="70" height="20">
                    <div className="flex justify-center">
                      <span className="px-1.5 py-0.5 rounded bg-[#071B36] text-white text-[8px] font-black uppercase tracking-widest shadow-sm">
                        {pt.label}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              ))}
            </svg>
          </div>
        </div>

        <div className="w-full bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest block mb-1">Structure Description</span>
          <p className="text-xs text-slate-300 font-bold uppercase tracking-wide leading-relaxed">
            {configs[activeTab].desc}
          </p>
        </div>

        <MentorInsight
          text="Fast green/red candles do not make a trend. Trends and ranges are built by structural swing relationships. Never classify a new direction just because a single candle spiked."
          analogy="A passenger train. Just because the engine makes a loud, sudden whistle doesn't mean the train is speeding down a new track. Look at the rails."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Liquidity Zones, Not Magic Lines
 */
export const CryptoLiquidityZones = () => {
  const [useZone, setUseZone] = useState<boolean>(true);

  return (
    <InstitutionalFrame label="Liquidity Reaction Board" id="CR-05-LIQ">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[350px] flex flex-col justify-between">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] font-extrabold text-teal-400 uppercase tracking-widest">Interactive Audit Area</span>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Rigid Levels vs. Fluid Liquidity Zones</h3>
            </div>

            {/* Selector controls */}
            <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 w-full max-w-xs justify-center">
              <button
                onClick={() => setUseZone(false)}
                className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer", !useZone ? "bg-rose-600 text-white" : "text-slate-400")}
              >
                Rigid Magic Line
              </button>
              <button
                onClick={() => setUseZone(true)}
                className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer", useZone ? "bg-teal-600 text-white" : "text-slate-400")}
              >
                Flexible Liquidity Zone
              </button>
            </div>

            {/* Chart Area */}
            <div className="w-full max-w-md h-44 bg-slate-900 rounded-2xl relative border border-slate-800 flex items-center justify-center p-4">
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:16px_16px]" />

              {/* Liquidity Zone or Rigid Line */}
              {useZone ? (
                <div className="absolute top-[35%] left-0 w-full h-[30px] bg-teal-500/10 border-y border-teal-500/30 flex items-center justify-end pr-8 pointer-events-none">
                  <span className="text-[8px] font-black text-teal-400 uppercase tracking-widest">Macro Liquidity Accumulation Zone</span>
                </div>
              ) : (
                <div className="absolute top-[50%] left-0 w-full h-px bg-rose-600 flex items-center justify-end pr-8 pointer-events-none">
                  <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest">Rigid Magic Line (Exact Price)</span>
                </div>
              )}

              <svg className="w-full h-full max-w-[320px] overflow-visible" viewBox="0 0 200 120">
                {/* Price path dipping below level and reclaiming */}
                <motion.path
                  key={useZone ? 'zone' : 'line'}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  d="M 10 30 L 60 50 L 100 90 L 140 40 L 190 30"
                  fill="none"
                  stroke={useZone ? "#0D9488" : "#94a3b8"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  transition={{ duration: 0.5 }}
                />
                <circle cx="100" cy="90" r="5" fill="#f59e0b" className="animate-pulse" />
              </svg>
            </div>
          </div>

          {/* Explanation text */}
          <div className="w-full bg-slate-900/60 border border-slate-800 p-4 rounded-2xl mt-6">
            <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest block mb-1">Liquidity Diagnostics</span>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wide leading-relaxed">
              {useZone
                ? "The price dips below the local low, sweeps the macro liquidity zone, gathers buys, and closes clean. This is standard range support hold."
                : "Rigid line thinking calls this a 'Confirmed Bearish Breakout' because price went below the line. You sell the bottom immediately and get trapped."}
            </p>
          </div>
        </div>

        <MentorInsight
          text="Crypto support and resistance are not concrete walls. Because crypto markets are decentralized and highly fragmented, think of support and resistance as dynamic liquidity zones. Wicks through are features, not bugs."
          analogy="A trampoline. When you jump on it, the fabric stretches below the rest height before pushing you back up. A rigid level assumes the trampoline is made of concrete."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Perp-Driven Breaks and False Structure
 */
export const CryptoPerpBreakFalseStructure = () => {
  const [activeFeeds, setActiveFeeds] = useState<'spot' | 'perp'>('perp');

  return (
    <InstitutionalFrame label="Leverage Squeeze Diagnostics" id="CR-05-PERP">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[350px] flex flex-col justify-between">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] font-extrabold text-teal-400 uppercase tracking-widest">Derivative vs. Spot Feed Comparison</span>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Perp-Driven Breaks vs. Spot Confirmation</h3>
            </div>

            {/* Selector */}
            <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 w-full max-w-xs justify-center">
              <button
                onClick={() => setActiveFeeds("perp")}
                className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer", activeFeeds === 'perp' ? "bg-rose-600 text-white" : "text-slate-400")}
              >
                Show Perps Squeeze Feed
              </button>
              <button
                onClick={() => setActiveFeeds("spot")}
                className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer", activeFeeds === 'spot' ? "bg-teal-600 text-white" : "text-slate-400")}
              >
                Show Spot Demand Feed
              </button>
            </div>

            {/* Visual representation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              {/* Candle Chart Panel */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 relative flex flex-col justify-between min-h-[160px]">
                <span className="text-[10px] font-black text-white uppercase tracking-wider mb-2">Price Action Chart</span>
                <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 100">
                  {/* Resistance level */}
                  <line x1="0" y1="40" x2="200" y2="40" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" />

                  <motion.path
                    key={activeFeeds}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    d={activeFeeds === 'perp' ? "M 20 80 L 60 70 L 100 80 L 140 20 L 180 80" : "M 20 80 L 60 70 L 100 80 L 140 70 L 180 80"}
                    fill="none"
                    stroke={activeFeeds === 'perp' ? "#BE123C" : "#0D9488"}
                    strokeWidth="4"
                    transition={{ duration: 0.5 }}
                  />
                  {activeFeeds === 'perp' && <circle cx="140" cy="20" r="5" fill="#ef4444" className="animate-ping" />}
                </svg>
              </div>

              {/* Volume/Indicators Panel */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 relative flex flex-col justify-between min-h-[160px]">
                <span className="text-[10px] font-black text-white uppercase tracking-wider mb-2">Volume Confluence Audit</span>
                <div className="flex flex-col gap-2 justify-center flex-1">
                  <div className="flex items-center justify-between text-[9px] font-bold uppercase text-slate-400">
                    <span>Spot Buy Volume</span>
                    <span className={activeFeeds === 'spot' ? 'text-teal-400 font-black' : 'text-slate-600'}>
                      {activeFeeds === 'spot' ? 'HIGH / CONFIRMED' : 'VERY LOW'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-850 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      key={`spot-vol-${activeFeeds}`}
                      initial={{ width: 0 }}
                      animate={{ width: activeFeeds === 'spot' ? "90%" : "20%" }}
                      className="bg-teal-500 h-full rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-bold uppercase text-slate-400 mt-2">
                    <span>Perps Open Interest</span>
                    <span className={activeFeeds === 'perp' ? 'text-rose-400 font-black' : 'text-slate-600'}>
                      {activeFeeds === 'perp' ? 'AGGRESSIVE LEVERAGE SQUEEZE' : 'STANDARD'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-850 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      key={`perp-vol-${activeFeeds}`}
                      initial={{ width: 0 }}
                      animate={{ width: activeFeeds === 'perp' ? "95%" : "30%" }}
                      className="bg-rose-500 h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="w-full bg-slate-900/60 border border-slate-800 p-4 rounded-2xl mt-6">
            <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest block mb-1">Leverage Audit Verdict</span>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wide leading-relaxed">
              {activeFeeds === 'perp'
                ? "False Breakout: Driven fully by aggressive derivatives open interest and forced short liquidations. Spot order books are completely empty. Highly unstable structure."
                : "Organically Supported: Backed by heavy spot volume buying. This forms a true structural swing low/high."}
            </p>
          </div>
        </div>

        <MentorInsight
          text="A breakout on a perp chart is highly unstable unless spot volumes validate the move. Leverage pressure can shoot price above a level like a rocket, but once the squeeze ends, gravity (lack of spot buying) pulls it right back down."
          analogy="Throwing a ball into the air. It flies high (squeeze), but because there's no solid floor up there to hold it (spot volume), it will immediately fall back to the ground."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: Thin Liquidity, Wicks, and Failed Breaks
 */
export const CryptoThinLiquidityFailedBreak = () => {
  const [liqState, setLiqState] = useState<'deep' | 'thin'>('thin');

  return (
    <InstitutionalFrame label="Liquidity Slippage Audit" id="CR-05-THIN">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[350px] flex flex-col justify-between">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] font-extrabold text-teal-400 uppercase tracking-widest">Depth Order Book Inspector</span>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Thin Book Slippage vs. Deep Liquidity Hold</h3>
            </div>

            {/* Toggle */}
            <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 w-full max-w-xs justify-center">
              <button
                onClick={() => setLiqState("thin")}
                className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer", liqState === 'thin' ? "bg-rose-600 text-white" : "text-slate-400")}
              >
                Thin Order Book
              </button>
              <button
                onClick={() => setLiqState("deep")}
                className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer", liqState === 'deep' ? "bg-teal-600 text-white" : "text-slate-400")}
              >
                Deep Order Book
              </button>
            </div>

            {/* Chart showing wicks vs candle holds */}
            <div className="w-full max-w-md h-40 bg-slate-900 rounded-2xl relative border border-slate-800 flex items-center justify-center p-4">
              <div className="absolute top-[35%] left-0 w-full h-px bg-slate-850" />

              <svg className="w-full h-full max-w-[320px] overflow-visible" viewBox="0 0 200 120">
                {/* Thin book wicks hard and returns fast, deep book prints small candle and breaks cleanly */}
                <motion.path
                  key={liqState}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  d={liqState === 'thin' ? "M 20 80 L 60 75 L 100 20 L 140 75 L 180 80" : "M 20 80 L 60 75 L 100 45 L 140 40 L 180 35"}
                  fill="none"
                  stroke={liqState === 'thin' ? "#ef4444" : "#0d9488"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  transition={{ duration: 0.5 }}
                />
                <circle cx="100" cy={liqState === 'thin' ? 20 : 45} r="6" fill={liqState === 'thin' ? "#ef4444" : "#0d9488"} />
              </svg>
            </div>
          </div>

          {/* Description */}
          <div className="w-full bg-slate-900/60 border border-slate-800 p-4 rounded-2xl mt-6">
            <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest block mb-1">Depth Diagnostics</span>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wide leading-relaxed">
              {liqState === 'thin'
                ? "Slippage Spike: Low available orders allow a single small trade to move price drastically up and down, printing a giant fakeout wick."
                : "Clean Hold: Heavy order books absorb transactions steadily. Price holds above the previous low/high cleanly."}
            </p>
          </div>
        </div>

        <MentorInsight
          text="Thin order books make crypto assets print extreme candles during quiet sessions. If a level is crossed but cannot hold, do not label it as a new structure break. It was simply slippage noise."
          analogy="Stepping on a weak floorboard that bends deep under your weight but snaps back. You haven't fallen through the floor, it just bent temporarily."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Higher-Timeframe Crypto Location Comes First
 */
export const CryptoHtfLocationFirst = () => {
  const [showHtf, setShowHtf] = useState<boolean>(true);

  return (
    <InstitutionalFrame label="Macro Location Alignment" id="CR-05-HTF">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[350px] flex flex-col justify-between">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] font-extrabold text-teal-400 uppercase tracking-widest">Multi-Timeframe Comparative Inspector</span>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Zoomed Local Move vs. Macro Wall Location</h3>
            </div>

            {/* Selector */}
            <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 w-full max-w-xs justify-center">
              <button
                onClick={() => setShowHtf(true)}
                className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer", showHtf ? "bg-teal-600 text-white" : "text-slate-400")}
              >
                Show 4H Macro Wall
              </button>
              <button
                onClick={() => setShowHtf(false)}
                className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer", !showHtf ? "bg-rose-600 text-white" : "text-slate-400")}
              >
                Show 15m Local Move Only
              </button>
            </div>

            {/* Graphics */}
            <div className="w-full max-w-md h-40 bg-slate-900 rounded-2xl relative border border-slate-800 flex items-center justify-center p-4">
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:16px_16px]" />

              {/* Macro Resistance block */}
              {showHtf && (
                <div className="absolute top-[20%] left-0 w-full h-[30px] bg-rose-500/15 border-y border-dashed border-rose-500/35 flex items-center justify-end pr-8 pointer-events-none">
                  <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest">4H Major Resistance Ceiling</span>
                </div>
              )}

              <svg className="w-full h-full max-w-[320px] overflow-visible" viewBox="0 0 200 120">
                <motion.path
                  key={showHtf ? 'htf' : 'local'}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  d="M 10 100 L 50 80 L 90 90 L 140 32 L 180 30"
                  fill="none"
                  stroke={showHtf ? "#ef4444" : "#0d9488"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  transition={{ duration: 0.5 }}
                />
                <circle cx="140" cy="32" r="5" fill="#ef4444" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <div className="w-full bg-slate-900/60 border border-slate-800 p-4 rounded-2xl mt-6">
            <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest block mb-1">Timeframe Confluence Diagnostics</span>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wide leading-relaxed">
              {showHtf
                ? "Context Conflict: A local 15m breakout pumps fast, but it is driving directly into a major 4H resistance wall. Extremely high probability of rejection."
                : "Active Bullish Structure: The 15m chart shows high volume and clean higher-low structures, looking highly bullish in isolation."}
            </p>
          </div>
        </div>

        <MentorInsight
          text="Always audit the macro location first. A beautiful, high-volume lower-timeframe structure break driving directly into a concrete higher-timeframe resistance wall is highly likely to fail."
          analogy="A high-speed sports car racing forward. The car is fast and active, but it is driving straight into a concrete wall. The wall does not care how fast the car is."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: Broad Break or Venue-Specific Trap?
 */
export const CryptoStructureBreakDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    { id: "A", label: "Confirmed Breakout", desc: "Buy the local break because the perpetual chart broke resistance.", correct: false, feedback: "Wrong: A perp break alone does not prove full-market structure change, especially when other venues do not support it." },
    { id: "B", label: "Definite Bearish", desc: "Sell the asset immediately because DEX liquidity is thin.", correct: false, feedback: "Wrong: Thin DEX liquidity adds caution and slippage, but it does not automatically create a bearish reading." },
    { id: "C", label: "Mixed / Weak Evidence", desc: "The break is active but mixed because spot, BTC context, DEX liquidity, and higher-timeframe structure do not support it.", correct: true, feedback: "Correct! The perp break is active, but the supporting evidence is weak or mixed. Spot is not confirming strongly, BTC is flat, DEX liquidity is thin, and the 4H chart remains range-bound. This is mixed evidence, not a clean structure change." },
    { id: "D", label: "Timeframe Irrelevant", desc: "The higher timeframe does not matter because crypto moves fast.", correct: false, feedback: "Wrong: Crypto speed makes higher-timeframe location more important, not less important. Location dominates speed." }
  ];

  return (
    <InstitutionalFrame label="Interactive Practice Scenario" id="CR-05-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[350px] flex flex-col justify-between">
          <div className="absolute top-[25%] left-0 w-full h-8 bg-rose-500/10 border-y border-dashed border-rose-500/30 flex items-center justify-end pr-8">
            <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest">HTF 4H Resistance Ceiling</span>
          </div>

          <div className="relative h-44 flex items-center justify-center">
            <svg className="w-full h-full max-w-[450px] overflow-visible" viewBox="0 0 380 150">
              {/* Range Boundaries */}
              <rect x="50" y="80" width="150" height="50" fill="white" fillOpacity="0.02" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />

              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                d="M 0 110 L 50 100 L 100 120 L 150 95 L 200 115 C 220 70, 240 40, 250 45 L 270 120 L 350 110"
                fill="none"
                stroke="#ef4444"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="250" cy="45" r="5" fill="#ef4444" />
              <text x="250" y="28" textAnchor="middle" fill="#ef4444" className="text-[8px] font-black uppercase tracking-widest">Perp Squeeze Wick</text>
            </svg>
          </div>

          <div className="text-center text-slate-300 max-w-lg mx-auto">
            <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest block mb-1">Interactive Diagnostic</span>
            <p className="text-xs font-bold leading-relaxed uppercase">
              A token breaks above resistance on a perpetual exchange. However, spot volume remains very weak, BTC is completely flat, and the DEX pool shows thin liquidity wicks. Classify the disciplined structure reading:
            </p>
          </div>
        </div>

        {/* Dynamic clean layout for options buttons */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedOption(opt.id)}
              className={cn(
                "p-5 rounded-[2rem] text-left border-2 transition-all flex flex-col justify-start gap-3 h-auto min-h-[120px] shadow-sm cursor-pointer",
                selectedOption === opt.id
                  ? opt.correct
                    ? "bg-teal-50 border-teal-500/60 shadow-teal-500/5 text-[#071B36]"
                    : "bg-rose-50 border-rose-500/60 shadow-rose-500/5 text-[#071B36]"
                  : "bg-white border-slate-100 hover:border-slate-200 text-slate-600"
              )}
            >
              <div className="flex items-center justify-between w-full">
                <span className={cn(
                  "px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest",
                  selectedOption === opt.id
                    ? opt.correct ? "bg-teal-500 text-white" : "bg-rose-500 text-white"
                    : "bg-[#071B36] text-white"
                )}>
                  Option {opt.id}
                </span>
                <span className="text-[9px] font-black uppercase tracking-wider">{opt.label}</span>
              </div>
              <p className="text-[10px] font-bold leading-normal uppercase">{opt.desc}</p>
            </button>
          ))}
        </div>

        {/* Animated full-width feedback alert block */}
        {selectedOption && (() => {
          const opt = options.find(o => o.id === selectedOption);
          if (!opt) return null;
          return (
            <div className={cn(
              "p-6 rounded-[2rem] border-2 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300",
              opt.correct
                ? "bg-teal-500/5 border-teal-500/30 text-[#0D9488]"
                : "bg-rose-500/5 border-rose-500/30 text-[#BE123C]"
            )}>
              <div className="flex items-center gap-3 mb-2">
                <span className={cn(
                  "px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-widest text-white",
                  opt.correct ? "bg-teal-600" : "bg-rose-600"
                )}>
                  {opt.correct ? "Audit Passed" : "Audit Rejected"}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">SOL/USD Structure Feedback</span>
              </div>
              <p className="text-xs font-bold leading-relaxed uppercase tracking-wide">
                {opt.feedback}
              </p>
            </div>
          );
        })()}

        <MentorInsight
          text="Never audit a breakout on one venue in isolation. Check the spot volume, check perps open interest, check DEX liquidity depth, and check BTC context. Confluence is the only defense against market traps."
          analogy="A bank alarm ringing. You don't immediately shoot; you check if it was a system test, a mechanical fault, a false press, or a true emergency."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Crypto Debrief: Reading Structure Through Venue, Liquidity, and Context
 */
export const CryptoStructureRoadwayDebrief = () => {
  return (
    <InstitutionalFrame label="Roadway Competency Verified" id="CR-05-DEBRIEF" status="COMPLETE">
      <div className="w-full max-w-4xl mx-auto space-y-12 flex flex-col items-center">
        <div className="relative group">
          <div className="w-24 h-24 rounded-[2.5rem] bg-teal-500 flex items-center justify-center text-white shadow-2xl shadow-teal-500/20 group-hover:scale-110 transition-transform duration-500">
            <CheckCircle size={48} strokeWidth={2.5} />
          </div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 border-2 border-dashed border-teal-200 rounded-full opacity-30" />
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-4xl font-black text-[#071B36] uppercase tracking-tighter italic">Crypto Structure Verified</h3>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">FRAGMENTED MARKETS MASTERED</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          {[
            { label: "Venue check", desc: "Spot, perp, and DEX liquidity audited", icon: <Layers size={16} /> },
            { label: "swing source", desc: "Spot demand filtered from leverage noise", icon: <Activity size={16} /> },
            { label: "confluence alignment", desc: "BTC context layered successfully", icon: <Compass size={16} /> }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200/60 p-6 rounded-[2rem] shadow-sm flex flex-col gap-3">
              <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-wider text-[#071B36]">{item.label}</h5>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#071B36] rounded-[2rem] p-6 text-center max-w-md border border-slate-800 shadow-2xl">
          <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest block mb-1">Bridge to Next Module</span>
          <p className="text-xs text-white font-bold uppercase tracking-wider leading-relaxed">
            Next: Level 0 Synthesis — Evidence vs. Assumption & Confirmation Logic.
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

export const CryptoPlaceholderVisual = () => (
  <div className="w-full min-h-[400px] bg-[#F8FBFC] border border-[#E2E8F0] rounded-[2rem] p-8 flex flex-col relative overflow-hidden shadow-sm">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:32px_32px]" />
    <div className="flex items-center justify-between mb-8 relative z-10 border-b border-slate-200/50 pb-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <Database size={10} className="text-amber-600" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Track Adaptation Diagnostic</span>
        </div>
        <h4 className="text-base font-black text-[#071B36] uppercase tracking-tighter italic">Crypto Structural Adaptation</h4>
      </div>
      <div className="text-[10px] font-mono text-[#071B36] font-bold">STR-CR-05</div>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center relative z-10">
      <div className="flex flex-col items-center gap-6 text-center max-w-sm">
        <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600">
          <Globe size={32} />
        </div>
        <div className="space-y-2">
          <h5 className="text-lg font-black text-[#071B36] uppercase">Crypto Logic Pending</h5>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Crypto's fragmented liquidity pools require unique multi-venue alignment. Audit in progress.
          </p>
        </div>
        <div className="px-6 py-2 bg-slate-100 rounded-full text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <ShieldAlert size={12} />
          Awaiting Verification
        </div>
      </div>
    </div>
  </div>
);
