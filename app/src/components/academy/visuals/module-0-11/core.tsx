import React, { useState } from "react";
import { 
  TrendingUp, 
  AlertTriangle, 
  Activity, 
  Check, 
  Layers, 
  Coins, 
  ArrowRight,
  TrendingDown,
  RefreshCw,
  Search,
  BookOpen
} from "lucide-react";
import { 
  CryptoInstitutionalFrame, 
  CryptoMentorInsight, 
  CryptoReadingQualityBadge, 
  CryptoToggleSelector, 
  CryptoStepWorkflow, 
  CryptoPracticeDrill, 
  CryptoDebriefDashboard 
} from "./shared";
import { cn } from "@/lib/utils";

/**
 * Card 1: CryptoVenueFragmentationLabFoundation
 * Visual Key: crypto-venue-fragmentation-lab-foundation
 */
export const CryptoVenueFragmentationLabFoundation = () => {
  const [activeLayer, setActiveLayer] = useState<string>("source");

  const layers = [
    { id: "source", title: "1. Venue Source", desc: "Where the move starts (CEX, DEX, Perp, or aggregated index). Check the origin of the candle.", status: "LOCAL SCAN" },
    { id: "cex", title: "2. CEX Spot Check", desc: "Verify if major centralized exchanges (Coinbase, Binance) show physical buying volume.", status: "CONFIRMATION" },
    { id: "dex", title: "3. DEX Pool Audit", desc: "Examine if the move is an isolated swap causing high price impact in a thin pool.", status: "LIQUIDITY FILTER" },
    { id: "btc", title: "4. BTC Context", desc: "Ensure Bitcoin is stable or supportive, rather than rejecting resistance or pulling altcoins down.", status: "GRAVITY FILTER" },
    { id: "agreement", title: "5. Venue Agreement", desc: "Confirm price movement is consistent across multiple venues, avoiding isolated spikes.", status: "CONSENSUS" },
    { id: "follow", title: "6. Follow-Through", desc: "Check if the price holds its new level on subsequent candles or immediately fades.", status: "ACCEPTANCE CHECK" }
  ];

  const current = layers.find(l => l.id === activeLayer) || layers[0];

  return (
    <CryptoInstitutionalFrame label="Venue Verification Dashboard" status="LAB FOUNDATION">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed font-medium">
          Before trusting a crypto chart, you must run the move through the verification pipeline. Click any pipeline node below to inspect its audit layer.
        </p>

        {/* Pipeline Nodes */}
        <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-2 shrink-0">
          {layers.map((l) => (
            <button
              type="button"
              key={l.id}
              onClick={() => setActiveLayer(l.id)}
              className={cn(
                "p-3 rounded-xl border flex flex-col items-center gap-1.5 text-center cursor-pointer transition-all min-h-[75px] justify-center",
                activeLayer === l.id 
                  ? "bg-[#071B36] border-[#071B36] text-white shadow-md scale-105" 
                  : "bg-white border-slate-200 text-[#071B36] hover:bg-slate-50"
              )}
            >
              <span className="text-[9px] font-black uppercase tracking-tight break-words max-w-full leading-none">
                {l.title.split(". ")[1]}
              </span>
              <span className={cn(
                "text-[7px] font-mono font-bold px-1 py-0.5 rounded border uppercase",
                activeLayer === l.id 
                  ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" 
                  : "bg-slate-100 text-slate-700 border-slate-200"
              )}>
                {l.status}
              </span>
            </button>
          ))}
        </div>

        {/* Details Display Panel */}
        <div className="w-full bg-[#071B36] text-white rounded-2xl p-5 border border-slate-700 relative overflow-hidden text-left min-h-[120px] flex flex-col justify-center">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#06B6D4_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative z-10">
            <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest block mb-1 font-black">
              Pipeline Stage {layers.findIndex(l => l.id === activeLayer) + 1} &bull; {current.status}
            </span>
            <h5 className="text-sm font-black uppercase tracking-tight mb-1 text-white">
              {current.title}
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl whitespace-normal break-words">
              {current.desc}
            </p>
          </div>
        </div>

        <CryptoMentorInsight 
          text="A crypto chart is just one lens on a highly fragmented network. Do not trade the lens; audit the consensus of the network."
          analogy="If a crowd is running on one street corner, look up to see if the whole block is moving, or if it is just a localized commotion."
        />
      </div>
    </CryptoInstitutionalFrame>
  );
};

/**
 * Card 2: CryptoCexSpotCheck
 * Visual Key: crypto-cex-spot-check
 */
export const CryptoCexSpotCheck = () => {
  return (
    <CryptoInstitutionalFrame label="CEX Spot Comparison Check" status="CEX AUDIT">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed">
          Divergence between thin venues and deep centralized spot order books reveals local distortion.
        </p>

        {/* Comparison Boxes */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0">
          {/* Box 1: Isolated Venue */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between min-h-[160px] text-left">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-wider">Uniswap DEX Pool</span>
                <CryptoReadingQualityBadge quality="LOCAL SPIKE" />
              </div>
              <h5 className="text-xs font-black uppercase tracking-tight text-[#071B36] mb-1">Sudden +8% Price Spike</h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                A single large buy order wicks price upward past range resistance. Volume looks high locally, but the pool is shallow.
              </p>
            </div>
            {/* Candle visual */}
            <div className="flex items-center gap-2 mt-4 pt-2 border-t border-slate-100">
              <div className="flex flex-col items-center bg-slate-50 p-2 rounded-lg border border-slate-100 shrink-0 select-none">
                <div className="w-0.5 h-6 bg-emerald-500" />
                <div className="w-3 h-10 bg-emerald-500 border border-emerald-600 rounded-sm" />
                <div className="w-0.5 h-4 bg-emerald-500" />
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-600">+8.4% Wick Print</span>
            </div>
          </div>

          {/* Box 2: Coinbase CEX Spot */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between min-h-[160px] text-left">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-wider">Coinbase CEX Spot</span>
                <CryptoReadingQualityBadge quality="STABILIZED HOLD" />
              </div>
              <h5 className="text-xs font-black uppercase tracking-tight text-[#071B36] mb-1">Steady Range (Flat)</h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                No major buy orders registered. Price remains consolidated inside the daily boundary. Volume remains neutral.
              </p>
            </div>
            {/* Candle visual */}
            <div className="flex items-center gap-2 mt-4 pt-2 border-t border-slate-100">
              <div className="flex flex-col items-center bg-slate-50 p-2 rounded-lg border border-slate-100 shrink-0 select-none">
                <div className="w-0.5 h-3 bg-slate-500" />
                <div className="w-3 h-3 bg-slate-500 border border-slate-600 rounded-sm" />
                <div className="w-0.5 h-3 bg-slate-500" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-600">+0.2% Flat Print</span>
            </div>
          </div>
        </div>

        {/* Verdict Bar */}
        <div className="w-full bg-rose-50 border border-rose-200 rounded-xl p-3 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-rose-600" size={16} />
            <span className="text-xs font-bold text-rose-950">VERDICT: Local Distortion / Lack of CEX Confirmation</span>
          </div>
          <span className="text-[9px] font-mono bg-rose-200 text-rose-800 px-2 py-0.5 rounded font-black uppercase">
            REJECT SPIKE
          </span>
        </div>

        <CryptoMentorInsight 
          text="Deep CEX spot order books absorb random buying. If Coinbase spot ignores the breakout, the breakout is likely just noise on a thin exchange."
        />
      </div>
    </CryptoInstitutionalFrame>
  );
};

/**
 * Card 3: CryptoDexPriceImpactLab
 * Visual Key: crypto-dex-price-impact-lab
 */
export const CryptoDexPriceImpactLab = () => {
  const [hasTraded, setHasTraded] = useState<boolean>(false);

  return (
    <CryptoInstitutionalFrame label="DEX Price Impact Simulator" status="LIQUIDITY AUDIT">
      <div className="w-full flex flex-col gap-5 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed">
          Decentralized pools automatically adjust price based on swap sizes. Click below to simulate a single trade in a thin pool.
        </p>

        {/* Pool Simulator Interface */}
        <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row gap-5 shrink-0 items-center justify-between">
          
          {/* Left: Pool Reserves */}
          <div className="flex-1 flex flex-col gap-3 text-left w-full">
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest font-bold">DEX Pool Reserves (Mid-Cap Alt)</span>
            
            <div className="flex justify-between items-center bg-slate-50 border border-slate-100 p-3 rounded-xl">
              <div>
                <span className="text-[8px] font-mono font-bold text-slate-700 uppercase block">Token Reserve A</span>
                <span className="text-sm font-black text-[#071B36]">{hasTraded ? "80,000 Alt" : "100,000 Alt"}</span>
              </div>
              <Coins className="text-cyan-600" size={16} />
            </div>

            <div className="flex justify-between items-center bg-slate-50 border border-slate-100 p-3 rounded-xl">
              <div>
                <span className="text-[8px] font-mono font-bold text-slate-700 uppercase block">Token Reserve B (USDC)</span>
                <span className="text-sm font-black text-[#071B36]">{hasTraded ? "125,000 USDC" : "100,000 USDC"}</span>
              </div>
              <Coins className="text-slate-500" size={16} />
            </div>
          </div>

          {/* Center: Action button */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <button
              type="button"
              onClick={() => setHasTraded(!hasTraded)}
              className="p-3 bg-[#071B36] hover:bg-[#06122A] text-white rounded-2xl flex flex-col items-center gap-1 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer min-w-[120px]"
            >
              <RefreshCw size={14} className={cn("text-cyan-400", hasTraded && "animate-spin")} />
              <span className="text-[9px] font-black uppercase tracking-wider">{hasTraded ? "Reset Pool" : "Swap $25k USDC"}</span>
            </button>
          </div>

          {/* Right: Pool Price & Impact */}
          <div className="flex-1 flex flex-col gap-3 text-left w-full">
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest font-bold">Pricing Result</span>
            
            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex justify-between items-center">
              <div>
                <span className="text-[8px] font-mono font-bold text-slate-700 uppercase block">Pool Price</span>
                <span className={cn("text-sm font-black transition-all", hasTraded ? "text-emerald-600" : "text-[#071B36]")}>
                  {hasTraded ? "$1.56 (+56%)" : "$1.00"}
                </span>
              </div>
              <span className={cn(
                "text-[8px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider font-bold",
                hasTraded ? "bg-emerald-50 text-emerald-700 border-emerald-200 animate-pulse" : "bg-slate-100 text-slate-700 border-slate-200"
              )}>
                {hasTraded ? "Price Shifted" : "Stable"}
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex justify-between items-center">
              <div>
                <span className="text-[8px] font-mono font-bold text-slate-700 uppercase block">Price Impact Check</span>
                <span className="text-xs font-bold text-[#071B36]">
                  {hasTraded ? "Extreme (56% Slippage)" : "0.0% (No Swap)"}
                </span>
              </div>
              {hasTraded && (
                <span className="text-[7px] font-black uppercase text-rose-600 bg-rose-50 border border-rose-200 px-1 py-0.5 rounded animate-bounce">
                  THIN POOL SPIKE
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CEX check alert */}
        <div className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-slate-600" size={16} />
            <span className="text-xs text-slate-700 font-bold">
              {hasTraded 
                ? "DEX price shifted by +56% due to price impact. CEX spot is still $1.00." 
                : "No trade. DEX and CEX prices are currently aligned at $1.00."}
            </span>
          </div>
          {hasTraded && <CryptoReadingQualityBadge quality="LOCAL DISTORTION" />}
        </div>

        <CryptoMentorInsight 
          text="In shallow pools, price changes represent order size relative to reserves, not market value consensus. Never trust a DEX wick in isolation."
        />
      </div>
    </CryptoInstitutionalFrame>
  );
};

/**
 * Card 4: CryptoExchangeDisagreementLab
 * Visual Key: crypto-exchange-disagreement-lab
 */
export const CryptoExchangeDisagreementLab = () => {
  const [scenario, setScenario] = useState<string>("isolated");

  const options = [
    { id: "isolated", name: "Stays Isolated" },
    { id: "fades", name: "Spikes Fades" },
    { id: "spreads", name: "Spreads to Venues" }
  ];

  return (
    <CryptoInstitutionalFrame label="Exchange Disagreement Monitor" status="VENUE AUDIT">
      <div className="w-full flex flex-col gap-5 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed">
          Exchange disagreement is a warning to slow down. Select a resolution path below to see what must happen next.
        </p>

        {/* Toggle Selector */}
        <CryptoToggleSelector options={options} selectedId={scenario} onChange={setScenario} />

        {/* Board visual */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 shrink-0">
          {/* Exchange A */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between text-left min-h-[140px]">
            <div>
              <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest block mb-2 font-bold">Exchange A (Bybit Perps)</span>
              <h5 className="text-xs font-black uppercase tracking-tight text-[#071B36] mb-1">
                {scenario === "fades" ? "Wicks and Collapses" : "Spikes Up (+6%)"}
              </h5>
              <p className="text-[11px] text-slate-600 leading-snug">
                {scenario === "fades" 
                  ? "Price spikes up to $1.06 but falls back to $1.00."
                  : "A sudden green candle breaks resistance with high volume."}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className={cn(
                "text-[9px] font-mono px-1.5 py-0.5 rounded font-black",
                scenario === "fades" ? "bg-rose-50 text-rose-700" : "bg-emerald-50 text-emerald-700"
              )}>
                {scenario === "fades" ? "$1.00 (Faded)" : "$1.06 (Active)"}
              </span>
            </div>
          </div>

          {/* Exchange B */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between text-left min-h-[140px]">
            <div>
              <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest block mb-2 font-bold">Exchange B (Coinbase Spot)</span>
              <h5 className="text-xs font-black uppercase tracking-tight text-[#071B36] mb-1">
                {scenario === "spreads" ? "Catches Up (+5.8%)" : "Neutral / Flat"}
              </h5>
              <p className="text-[11px] text-slate-600 leading-snug">
                {scenario === "spreads" 
                  ? "Volume expands and price catches up to the break."
                  : "Coinbase shows minimal buying. Price drifts at $1.00."}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className={cn(
                "text-[9px] font-mono px-1.5 py-0.5 rounded font-black",
                scenario === "spreads" ? "bg-emerald-50 text-emerald-800" : "bg-slate-100 text-slate-700"
              )}>
                {scenario === "spreads" ? "$1.058 (Aligned)" : "$1.00 (Steady)"}
              </span>
            </div>
          </div>

          {/* Exchange C */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between text-left min-h-[140px]">
            <div>
              <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest block mb-2 font-bold">Exchange C (Binance Spot)</span>
              <h5 className="text-xs font-black uppercase tracking-tight text-[#071B36] mb-1">
                {scenario === "spreads" ? "Catches Up (+5.9%)" : "Neutral / Flat"}
              </h5>
              <p className="text-[11px] text-slate-600 leading-snug">
                {scenario === "spreads" 
                  ? "Price converges with the breakout, confirming volume."
                  : "Binance remains completely consolidated at $1.00."}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className={cn(
                "text-[9px] font-mono px-1.5 py-0.5 rounded font-black",
                scenario === "spreads" ? "bg-emerald-50 text-emerald-800" : "bg-slate-100 text-slate-700"
              )}>
                {scenario === "spreads" ? "$1.059 (Aligned)" : "$1.00 (Steady)"}
              </span>
            </div>
          </div>
        </div>

        {/* Actionable Verdict */}
        <div className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 flex justify-between items-center shrink-0">
          <span className="text-xs text-slate-700 font-bold">
            {scenario === "isolated" && "Move remains isolated to Exchange A. Warning: Low-consensus reading."}
            {scenario === "fades" && "Exchange A spike collapsed. No alignment was reached."}
            {scenario === "spreads" && "Arbitrage resolved the gap. Aligned broad-market breakout confirmed."}
          </span>
          <CryptoReadingQualityBadge 
            quality={
              scenario === "isolated" ? "LOCAL DISTORTION" :
              scenario === "fades" ? "NOISE" : "BROAD MOVE"
            } 
          />
        </div>

        <CryptoMentorInsight 
          text="When exchanges disagree, the market lacks consensus. Treat the disagreement as a warning filter and wait for price to align."
          analogy="If three witnesses are asked about an event, and only one shouts while the other two remain completely silent, you do not accept the story as fact yet."
        />
      </div>
    </CryptoInstitutionalFrame>
  );
};

/**
 * Card 5: CryptoVenueAlignmentLab
 * Visual Key: crypto-venue-alignment-lab
 */
export const CryptoVenueAlignmentLab = () => {
  const [aligned, setAligned] = useState<boolean>(false);

  return (
    <CryptoInstitutionalFrame label="Venue Gap Resolution Board" status="ALIGNMENT AUDIT">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed">
          Arbitrageurs and market makers buy on cheaper venues and sell on more expensive ones. Click below to align the prices.
        </p>

        {/* Board visual */}
        <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row gap-6 shrink-0 justify-between items-center">
          
          {/* Venue A */}
          <div className="flex-1 flex flex-col gap-2 text-left w-full">
            <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest font-bold">Venue A (Binance Spot)</span>
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-center">
              <span className="text-[8px] font-mono text-slate-700 uppercase block mb-1">Live Feed Price</span>
              <span className={cn("text-lg font-black transition-all", aligned ? "text-slate-900" : "text-cyan-600 animate-pulse")}>
                $1.10
              </span>
            </div>
          </div>

          {/* Center: Arrow Button */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <button
              type="button"
              onClick={() => setAligned(!aligned)}
              className="p-3 bg-[#071B36] hover:bg-[#06122A] text-white rounded-2xl flex flex-col items-center gap-1 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer min-w-[120px]"
            >
              <RefreshCw size={14} className={cn("text-cyan-400", aligned && "animate-spin")} />
              <span className="text-[9px] font-black uppercase tracking-wider">
                {aligned ? "Reset Gaps" : "Trigger Arbitrage"}
              </span>
            </button>
          </div>

          {/* Venue B */}
          <div className="flex-1 flex flex-col gap-2 text-left w-full">
            <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest font-bold">Venue B (Coinbase Spot)</span>
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-center">
              <span className="text-[8px] font-mono text-slate-700 uppercase block mb-1">Live Feed Price</span>
              <span className="text-lg font-black text-[#071B36]">
                {aligned ? "$1.10" : "$1.00"}
              </span>
            </div>
          </div>
        </div>

        {/* Explain info box */}
        <div className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 flex justify-between items-center shrink-0 text-left">
          <div className="flex items-center gap-2">
            <BookOpen className="text-slate-600 shrink-0" size={16} />
            <span className="text-xs text-slate-700 font-medium">
              {aligned 
                ? "Arbitrage resolved the venue gap. Prices have converged cleanly at $1.10." 
                : "Arbitrage opportunity exists. Market makers will buy at $1.00 and sell at $1.10 until prices align."}
            </span>
          </div>
          <CryptoReadingQualityBadge quality={aligned ? "VENUE ALIGNED" : "MIXED"} />
        </div>

        <CryptoMentorInsight 
          text="Gaps between exchange prices are temporary inefficiencies resolved by arbitrage. Do not trade the gap itself; wait for the convergence to establish a new agreed baseline."
          analogy="Water finding its level. If you pour water into connected tanks, one tank might spike briefly, but gravity quickly distributes the fluid until all tanks show the exact same height."
        />
      </div>
    </CryptoInstitutionalFrame>
  );
};

/**
 * Card 6: CryptoBtcContextLabCheck
 * Visual Key: crypto-btc-context-lab-check
 */
export const CryptoBtcContextLabCheck = () => {
  const [btcSupportive, setBtcSupportive] = useState<boolean>(false);

  return (
    <CryptoInstitutionalFrame label="BTC Gravity Overlay Check" status="BTC AUDIT">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed">
          Bitcoin provides the broad market gravity. Toggle Bitcoin's condition to see how it affects altcoin breakouts.
        </p>

        {/* Toggle Option */}
        <div className="flex bg-slate-100 border border-slate-200 p-1 rounded-xl shrink-0 gap-1 font-sans">
          <button
            type="button"
            onClick={() => setBtcSupportive(false)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
              !btcSupportive ? "bg-[#071B36] text-white shadow-sm" : "text-slate-700 hover:bg-slate-200"
            )}
          >
            BTC Rejecting Resistance (Conflict)
          </button>
          <button
            type="button"
            onClick={() => setBtcSupportive(true)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
              btcSupportive ? "bg-[#071B36] text-white shadow-sm" : "text-slate-700 hover:bg-slate-200"
            )}
          >
            BTC Consolidating / Trending (Support)
          </button>
        </div>

        {/* Interactive Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0">
          {/* BTC Condition */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 text-left flex flex-col justify-between min-h-[140px]">
            <div>
              <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest block mb-2 font-bold">BTC Context Feed</span>
              <h5 className="text-xs font-black uppercase tracking-tight text-[#071B36] mb-1">
                {btcSupportive ? "Stable Consolidation" : "Wicking Resistance"}
              </h5>
              <p className="text-[11px] text-slate-600 leading-snug">
                {btcSupportive 
                  ? "Bitcoin trades comfortably above its local floor, supporting risk appetite."
                  : "Bitcoin attempts to break its daily high, wicks hard, and starts pulling back."}
              </p>
            </div>
            <span className={cn(
              "text-[9px] font-mono px-2 py-0.5 rounded font-black max-w-fit uppercase mt-4 border",
              btcSupportive ? "bg-emerald-50 text-emerald-800 border-emerald-300/60" : "bg-rose-50 text-rose-800 border-rose-300/60"
            )}>
              {btcSupportive ? "BTC SUPPORTIVE" : "BTC CONFLICT"}
            </span>
          </div>

          {/* Altcoin Breakout */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 text-left flex flex-col justify-between min-h-[140px]">
            <div>
              <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest block mb-2 font-bold">Solana (SOL) Breakout Feed</span>
              <h5 className="text-xs font-black uppercase tracking-tight text-[#071B36] mb-1">
                {btcSupportive ? "breakout acceptance" : "breakout rejection"}
              </h5>
              <p className="text-[11px] text-slate-600 leading-snug">
                {btcSupportive 
                  ? "SOL breaks above range resistance and holds the level cleanly on the next candle."
                  : "SOL attempts to break out, but Bitcoin's quick pullback drags SOL sellers into action."}
              </p>
            </div>
            <span className={cn(
              "text-[9px] font-mono px-2 py-0.5 rounded font-black max-w-fit uppercase mt-4 border",
              btcSupportive ? "bg-emerald-50 text-emerald-800 border-emerald-300/60" : "bg-rose-50 text-rose-800 border-rose-300/60"
            )}>
              {btcSupportive ? "CLEAN BREAKOUT" : "FRAGILE / FAILED"}
            </span>
          </div>
        </div>

        {/* Summary result */}
        <div className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 flex justify-between items-center shrink-0">
          <span className="text-xs text-slate-700 font-bold">
            {btcSupportive 
              ? "Reading: Clear breakout. BTC gravity aligns with altcoin strength." 
              : "Reading: Mixed/Fragile breakout. BTC resistance makes the altcoin breakout high-risk."}
          </span>
          <CryptoReadingQualityBadge quality={btcSupportive ? "CLEAR" : "MIXED"} />
        </div>

        <CryptoMentorInsight 
          text="Bitcoin acts as the gravity of the entire crypto market. An altcoin breakout attempting to run against a dropping or resisting BTC is fighting extreme headwind."
          analogy="Swimming against a powerful ocean tide. You can make forward progress for a brief moment with high effort, but eventually, the tide drags you back down."
        />
      </div>
    </CryptoInstitutionalFrame>
  );
};

/**
 * Card 7: CryptoLocalSpikeVsBroadMove
 * Visual Key: crypto-local-spike-vs-broad-move
 */
export const CryptoLocalSpikeVsBroadMove = () => {
  return (
    <CryptoInstitutionalFrame label="Spike Quality Classifier" status="CLASSIFICATION">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed">
          Always classify whether a move is restricted to a local exchange or shared broadly across the market.
        </p>

        {/* Comparison Board */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0">
          
          {/* Local Spike */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest font-bold">Local Venue Spike</span>
                <CryptoReadingQualityBadge quality="LOCAL DISTORTION" />
              </div>
              
              <ul className="flex flex-col gap-2 mb-4 shrink-0">
                <li className="flex items-start gap-1.5 text-[11px] text-slate-700">
                  <span className="text-rose-500 font-black shrink-0">&times;</span>
                  <span>Wick printed only on one DEX pool chart</span>
                </li>
                <li className="flex items-start gap-1.5 text-[11px] text-slate-700">
                  <span className="text-rose-500 font-black shrink-0">&times;</span>
                  <span>Coinbase Spot volume remains flat and thin</span>
                </li>
                <li className="flex items-start gap-1.5 text-[11px] text-slate-700">
                  <span className="text-rose-500 font-black shrink-0">&times;</span>
                  <span>BTC is flat or declining under resistance</span>
                </li>
                <li className="flex items-start gap-1.5 text-[11px] text-slate-700">
                  <span className="text-rose-500 font-black shrink-0">&times;</span>
                  <span>Next candle instantly returns to previous range</span>
                </li>
              </ul>
            </div>
            <div className="bg-rose-50 text-rose-950 p-2.5 rounded-lg border border-rose-100 text-[10px] font-bold leading-normal shrink-0">
              Reading: High probability of failure. Devalue the wick.
            </div>
          </div>

          {/* Broad Move */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest font-bold">Broad Market Move</span>
                <CryptoReadingQualityBadge quality="BROAD MOVE" />
              </div>
              
              <ul className="flex flex-col gap-2 mb-4 shrink-0">
                <li className="flex items-start gap-1.5 text-[11px] text-slate-700">
                  <span className="text-emerald-500 font-black shrink-0">&check;</span>
                  <span>Price breaks resistance on Bybit, Coinbase, and Binance</span>
                </li>
                <li className="flex items-start gap-1.5 text-[11px] text-slate-700">
                  <span className="text-emerald-500 font-black shrink-0">&check;</span>
                  <span>Expanding spot volume confirms real asset trading</span>
                </li>
                <li className="flex items-start gap-1.5 text-[11px] text-slate-700">
                  <span className="text-emerald-500 font-black shrink-0">&check;</span>
                  <span>BTC supports risk appetite (stable or trending)</span>
                </li>
                <li className="flex items-start gap-1.5 text-[11px] text-slate-700">
                  <span className="text-emerald-500 font-black shrink-0">&check;</span>
                  <span>Next candles consolidate cleanly outside the break</span>
                </li>
              </ul>
            </div>
            <div className="bg-emerald-50 text-emerald-950 p-2.5 rounded-lg border border-emerald-100 text-[10px] font-bold leading-normal shrink-0">
              Reading: Broad market support. Valid technical shift.
            </div>
          </div>

        </div>

        <CryptoMentorInsight 
          text="Always classify a move as broad or local. Broad moves have institutional order backing across multiple venues; local spikes are shallow pool noise."
          analogy="A block party versus a city-wide parade. A block party is loud on one corner, but has no effect on the city's overall traffic structure."
        />
      </div>
    </CryptoInstitutionalFrame>
  );
};

/**
 * Card 8: CryptoPostSpikeFollowThrough
 * Visual Key: crypto-post-spike-follow-through
 */
export const CryptoPostSpikeFollowThrough = () => {
  const [outcome, setOutcome] = useState<string>("stalls");

  const outcomes = [
    { id: "stalls", name: "Price Stalls" },
    { id: "fades", name: "Price Fades" },
    { id: "holds", name: "Holds and Consolidates" }
  ];

  return (
    <CryptoInstitutionalFrame label="Follow-Through Evaluation Board" status="ACCEPTANCE CHECK">
      <div className="w-full flex flex-col gap-5 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed">
          The first breakout candle is the question. The next candles provide the answer. Select an outcome below.
        </p>

        {/* Outcome Toggle */}
        <CryptoToggleSelector options={outcomes} selectedId={outcome} onChange={setOutcome} />

        {/* Visual Chart outcomes */}
        <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row gap-5 items-center shrink-0 text-left">
          
          {/* Chart preview representation */}
          <div className="w-full md:w-1/3 flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl shrink-0">
            <span className="text-[8px] font-mono text-slate-600 uppercase mb-3 font-bold">Simulated Candles</span>
            <div className="flex items-end gap-3 justify-center select-none min-h-[90px] w-full">
              {/* Prior structure */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-slate-400" />
                <div className="w-3 h-5 bg-slate-400 rounded-sm" />
                <div className="w-0.5 h-3 bg-slate-400" />
              </div>
              {/* Spike candle */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-2 bg-emerald-500" />
                <div className="w-3 h-12 bg-emerald-500 rounded-sm" />
                <div className="w-0.5 h-2 bg-emerald-500" />
              </div>
              {/* Outcome candle */}
              <div className="flex flex-col items-center">
                {outcome === "stalls" && (
                  <>
                    <div className="w-0.5 h-4 bg-slate-500" />
                    <div className="w-3 h-2 bg-slate-500 rounded-sm" />
                    <div className="w-0.5 h-4 bg-slate-500" />
                  </>
                )}
                {outcome === "fades" && (
                  <>
                    <div className="w-0.5 h-3 bg-rose-500" />
                    <div className="w-3 h-10 bg-rose-500 rounded-sm" />
                    <div className="w-0.5 h-3 bg-rose-500" />
                  </>
                )}
                {outcome === "holds" && (
                  <>
                    <div className="w-0.5 h-3 bg-emerald-500" />
                    <div className="w-3 h-4 bg-emerald-500 rounded-sm" />
                    <div className="w-0.5 h-3 bg-emerald-500" />
                  </>
                )}
              </div>
            </div>
            <span className="text-[8px] font-mono font-bold text-[#071B36] mt-3">
              {outcome === "stalls" && "Candle 2: Stalling Doji"}
              {outcome === "fades" && "Candle 2: Bearish Engulfing"}
              {outcome === "holds" && "Candle 2: Bullish Consolidation"}
            </span>
          </div>

          {/* Descriptive text */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest font-bold">Follow-Through Analysis</span>
            <h5 className="text-xs font-black uppercase text-[#071B36]">
              {outcome === "stalls" && "Price stalls and hesitates"}
              {outcome === "fades" && "Price immediately collapses back"}
              {outcome === "holds" && "Price accepts the new level"}
            </h5>
            <p className="text-[11px] text-slate-600 leading-relaxed whitespace-normal break-words">
              {outcome === "stalls" && "A small doji candle shows that buyers are not expanding. The break is unconfirmed and stays mixed. You must wait."}
              {outcome === "fades" && "A rapid reversal candle takes price back inside the previous range. The breakout failed completely; the first spike was just a trap."}
              {outcome === "holds" && "Price forms a tight consolidation base above the broken resistance level, proving institutional acceptance of the new price value."}
            </p>
            <div className="mt-2">
              <CryptoReadingQualityBadge 
                quality={
                  outcome === "stalls" ? "MIXED" :
                  outcome === "fades" ? "NOISE" : "STABILIZED HOLD"
                } 
              />
            </div>
          </div>
        </div>

        <CryptoMentorInsight 
          text="Breakouts are just questions; follow-through candles are the answers. Proving acceptance outside the range is far more important than the initial speed."
          analogy="Climbing onto a ledge. Reaching the ledge with a jump is easy (the spike), but you must prove you can stand and balance on it (follow-through) without falling back down."
        />
      </div>
    </CryptoInstitutionalFrame>
  );
};

/**
 * Card 9: CryptoCrossVenueVerificationSequence
 * Visual Key: crypto-cross-venue-verification-sequence
 */
export const CryptoCrossVenueVerificationSequence = () => {
  const steps = [
    {
      title: "Identify Venue Source",
      action: "Step 1: Locate Origin",
      desc: "Observe where the price move printed first. Was it a DEX pool, Bybit perps, Coinbase spot, or an aggregated index?",
      icon: Search,
      status: "SOURCE IDENTIFIED"
    },
    {
      title: "Check CEX Spot Confirmation",
      action: "Step 2: Spot Audit",
      desc: "Cross-check major centralized exchanges (Coinbase, Binance). Check if physical buying volume confirms the breakout.",
      icon: Check,
      status: "SPOT REVIEWED"
    },
    {
      title: "Audit DEX Pool Price Impact",
      action: "Step 3: DEX Filter",
      desc: "Verify if the move is an isolated swap causing high price impact in a thin pool rather than general consensus.",
      icon: Coins,
      status: "PRICE IMPACT SHIELD"
    },
    {
      title: "Overlay BTC Context",
      action: "Step 4: Gravity Check",
      desc: "Ensure Bitcoin is supportive or consolidating. Altcoin moves are highly fragile if BTC is rejecting key resistance.",
      icon: Activity,
      status: "GRAVITY ALIGNED"
    },
    {
      title: "Assess Venue Agreement",
      action: "Step 5: Consensus Check",
      desc: "Compare major exchanges. Disagreement is a warning to slow down; wait for other venues to catch up or align.",
      icon: Layers,
      status: "CONSENSUS AUDIT"
    },
    {
      title: "Observe Next-Candle Follow-Through",
      action: "Step 6: Hold Check",
      desc: "Allow subsequent candles to build a consolidation base outside the broken level. Acceptance verifies the reading.",
      icon: ArrowRight,
      status: "ACCEPTANCE VERIFIED"
    }
  ];

  return (
    <CryptoStepWorkflow 
      steps={steps}
      label="Crypto Cross-Venue Sequence"
      desc="Follow the chronological verification checklist to grade any digital asset move."
      mentorText="Always execute the verification sequence in order. Professional crypto readers do not react to single-candle speed; they systematically audit the venue layers first."
      mentorAnalogy="A pre-flight safety checklist. A pilot does not take off because the engine sounds loud; they verify the fuel, altitude controls, and radio consensus before leaving the ground."
    />
  );
};

/**
 * Card 10: CryptoVenueLabPracticeDrill
 * Visual Key: crypto-venue-lab-practice-drill
 */
export const CryptoVenueLabPracticeDrill = () => {
  const drillOptions = [
    {
      id: "A",
      text: "Clear bullish reading because the DEX wick moved sharply upward.",
      isCorrect: false,
      feedback: "Incorrect. A sharp DEX wick is evidence, but it is not enough without broader confirmation."
    },
    {
      id: "B",
      text: "Broad market confirmation because one large trade moved the pool.",
      isCorrect: false,
      feedback: "Incorrect. One large trade can move a thin pool without proving broad market agreement."
    },
    {
      id: "C",
      text: "Local distortion / mixed reading because the move happened mainly in a thin DEX pool, CEX spot did not confirm, other venues stayed flat, BTC context was not supportive, and follow-through failed.",
      isCorrect: true,
      feedback: "Correct! This is a local distortion or mixed reading. The move was mostly venue-specific and failed to gain wider support."
    },
    {
      id: "D",
      text: "Guaranteed reversal because DEX wicks always reverse.",
      isCorrect: false,
      feedback: "Incorrect. DEX wicks do not always reverse. They need context, venue checks, and follow-through."
    }
  ];

  // Simulated chart widget for the drill question
  const drillChart = (
    <div className="w-full bg-[#071B36] text-white p-4 border border-slate-700 rounded-2xl shrink-0 flex flex-col gap-2">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <span className="text-[8px] font-mono text-cyan-400 font-bold uppercase">Multi-Venue Active Feeds</span>
        <CryptoReadingQualityBadge quality="Mixed / Distortion" />
      </div>
      
      {/* Feeds checklist */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-1">
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-left">
          <span className="text-[7px] text-slate-300 block uppercase font-bold">1. DEX Pool</span>
          <span className="text-[10px] text-emerald-500 font-bold font-mono">+9.2% Wick (Return)</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-left">
          <span className="text-[7px] text-slate-300 block uppercase font-bold">2. CEX Spot</span>
          <span className="text-[10px] text-slate-200 font-bold font-mono">+0.5% (No Vol)</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-left">
          <span className="text-[7px] text-slate-300 block uppercase font-bold">3. BTC Context</span>
          <span className="text-[10px] text-rose-500 font-bold font-mono">Rejecting Ceiling</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-left">
          <span className="text-[7px] text-slate-300 block uppercase font-bold">4. Next Candles</span>
          <span className="text-[10px] text-slate-200 font-bold font-mono">Faded to Start</span>
        </div>
      </div>
    </div>
  );

  return (
    <CryptoPracticeDrill
      question="A mid-cap token prints a sharp wick upward on a DEX pool after one large buy. CEX spot moves only slightly. Another major exchange stays flat. BTC is sitting below resistance and not moving strongly. The next two candles on the DEX return near the original price. What is the disciplined crypto reading?"
      options={drillOptions}
      chartPreview={drillChart}
      label="Crypto Venue Practice Drill"
      status="DRILL ACTIVE"
      mentorText="If a move has no spot volume support, fails to spread to other venues, fights BTC resistance, and fails to hold on subsequent candles, it is a classic local distortion."
      mentorAnalogy="A house of cards built on a windy day. Without structural pillars or a calm environment, the first gust of wind collapses the entire structure."
    />
  );
};

/**
 * Card 11: CryptoVenueLabDebrief
 * Visual Key: crypto-venue-lab-debrief
 */
export const CryptoVenueLabDebrief = () => {
  const debriefCards = [
    {
      id: "spot",
      title: "CEX SPOT REFERENCE",
      habit: "Check CEX Spot First",
      desc: "Ensure major centralized spot order books back the move. If CEX spot is flat, devalue wicks on minor venues.",
      icon: Search
    },
    {
      id: "dex",
      title: "PRICE IMPACT FILTER",
      habit: "Differentiate Swap Wicks",
      desc: "Understand that DEX swaps cause price impact on thin pools, creating exaggerated candles that lack broad market agreement.",
      icon: Coins
    },
    {
      id: "btc",
      title: "BTC CONTEXT FILTER",
      habit: "Check Macro Gravity",
      desc: "Align your altcoin breakout reading with Bitcoin's location. Avoid counter-gravity continuation trades.",
      icon: Activity
    },
    {
      id: "follow",
      title: "FOLLOW-THROUGH HOLD",
      habit: "Demand Hold Proof",
      desc: "Wait for the next candles to establish an acceptance base. A breakout is only a question; follow-through holds answer it.",
      icon: ArrowRight
    }
  ];

  return (
    <CryptoDebriefDashboard 
      cards={debriefCards}
      label="Crypto Reading Lab Recap"
      desc="Verify the consensus of the network. Click each core verification layer below to review the primary crypto-reading habit."
      mentorText="Cross-venue proof is your shield against traps. Objectivity means letting the market agree before you form a reading."
      mentorAnalogy="A court of law. A single rumor does not convict; you demand multiple aligned testimonies and physical evidence before rendering a final verdict."
    />
  );
};
