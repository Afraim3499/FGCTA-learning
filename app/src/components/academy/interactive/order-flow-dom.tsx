"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { 
  BarChart2, 
  Zap, 
  ShieldAlert, 
  ArrowUp, 
  ArrowDown, 
  Layers, 
  Activity,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AcademyButton } from "@/components/ui/academy-button";
import { AcademyCard, AcademyCardContent, AcademyCardHeader, AcademyCardTitle, AcademyCardDescription } from "@/components/ui/academy-card";
import { DataBadge } from "@/components/ui/data-badge";

interface OrderBookLevel {
  price: number;
  bidSize: number;
  askSize: number;
  isIceberg?: boolean;
  isSpoof?: boolean;
  volumeProfile: number;
}

interface TapeEntry {
  id: string;
  price: number;
  size: number;
  side: "buy" | "sell";
  time: string;
}

export function OrderFlowDOM() {
  const [lastPrice, setLastPrice] = useState(2500.00);
  const [orderBook, setOrderBook] = useState<OrderBookLevel[]>([]);
  const [tape, setTape] = useState<TapeEntry[]>([]);
  const [activeScenario, setActiveScenario] = useState<"none" | "iceberg" | "spoofing" | "cascade">("none");
  const [tickSpeed, setTickSpeed] = useState(500); 
  const [statusMessage, setStatusMessage] = useState("Market Neutral: Observing Order Flow");
  const scrollRef = useRef<HTMLDivElement>(null);

  // High-frequency Ticking & Tape Generation
  useEffect(() => {
    const interval = setInterval(() => {
      const volatility = activeScenario === "cascade" ? 1.5 : 0.25;
      const drift = activeScenario === "cascade" ? -0.5 : 0;
      const change = (Math.random() - 0.5 + drift) * volatility;
      const newPrice = parseFloat((lastPrice + change).toFixed(2));
      
      setLastPrice(newPrice);

      // Generate Tape Entry
      const side = Math.random() > 0.5 ? "buy" : "sell";
      const size = Math.floor(Math.random() * 20) + 1;
      const newEntry: TapeEntry = {
        id: Math.random().toString(36).substr(2, 9),
        price: newPrice,
        size,
        side,
        time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      };
      setTape(prev => [newEntry, ...prev].slice(0, 30));

    }, tickSpeed);

    return () => clearInterval(interval);
  }, [tickSpeed, activeScenario, lastPrice]);

  // Auto-centering Logic
  useEffect(() => {
    if (scrollRef.current) {
      const activeLevel = scrollRef.current.querySelector("[data-active='true']");
      if (activeLevel) {
        activeLevel.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [lastPrice]);

  // Generate Order Book Levels
  useEffect(() => {
    const levels: OrderBookLevel[] = [];
    const step = 0.5;
    const range = 25; // Expanded range for better centering feel

    for (let i = range; i >= -range; i--) {
      const price = parseFloat((lastPrice + i * step).toFixed(2));
      let bidSize = i < 0 ? Math.floor(Math.random() * 50) + 10 : 0;
      let askSize = i > 0 ? Math.floor(Math.random() * 50) + 10 : 0;

      const isIceberg = activeScenario === "iceberg" && price === 2498.00;
      if (isIceberg) bidSize = 999;

      const isSpoof = activeScenario === "spoofing" && price === 2505.00;
      if (isSpoof) askSize = 1500;

      if (activeScenario === "cascade" && i < 0) bidSize = Math.floor(bidSize * 0.1);

      levels.push({ 
        price, 
        bidSize, 
        askSize, 
        isIceberg, 
        isSpoof,
        volumeProfile: Math.floor(Math.random() * 1000) + 500
      });
    }
    setOrderBook(levels);
  }, [lastPrice, activeScenario]);

  // UI Handlers
  const triggerIceberg = () => {
    setActiveScenario("iceberg");
    setTickSpeed(200);
    setStatusMessage("ALERT: Large Buy Iceberg detected at 2498.00. Absorption in progress.");
  };

  const triggerSpoofing = () => {
    setActiveScenario("spoofing");
    setStatusMessage("TRAP: Large Ask Liquidity at 2505.00 is Likely Spoofing. Watch for pull.");
    setTimeout(() => {
      setActiveScenario("none");
      setStatusMessage("SPOOF PULLED: Ask Liquidity vanished. Retail trapped into selling.");
    }, 4000);
  };

  const triggerCascade = () => {
    setActiveScenario("cascade");
    setTickSpeed(100);
    setStatusMessage("CRITICAL: Liquidation Cascade. Bids vanishing. Slippage expanding.");
  };

  const resetMarket = () => {
    setActiveScenario("none");
    setTickSpeed(500);
    setLastPrice(2500.00);
    setStatusMessage("Market Neutral: Observing Order Flow");
  };

  return (
    <div className="flex flex-col gap-6 max-w-full h-[850px] overflow-hidden">
      
      {/* Header Stat Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <AcademyCard className="bg-accent-blue/5 border-accent-blue/20">
          <AcademyCardContent className="p-4 flex items-center justify-between">
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Last Price</p>
            <div className="text-xl font-extrabold text-white font-mono">{lastPrice.toFixed(2)}</div>
          </AcademyCardContent>
        </AcademyCard>
        <AcademyCard>
          <AcademyCardContent className="p-4 flex items-center justify-between">
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Feed Speed</p>
            <DataBadge variant="outline">{tickSpeed}ms</DataBadge>
          </AcademyCardContent>
        </AcademyCard>
        <AcademyCard className="md:col-span-2">
          <AcademyCardContent className="p-4 flex items-center gap-4">
            <div className={cn(
              "w-2 h-2 rounded-full animate-pulse",
              activeScenario === "none" ? "bg-pass-green" : "bg-fail-red"
            )} />
            <p className="text-xs font-bold text-white leading-tight truncate">{statusMessage}</p>
          </AcademyCardContent>
        </AcademyCard>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        
        {/* Practice Controls */}
        <div className="lg:col-span-2 space-y-4">
          <AcademyCard>
            <AcademyCardHeader className="p-4">
              <AcademyCardTitle className="text-xs">Injectors</AcademyCardTitle>
            </AcademyCardHeader>
            <AcademyCardContent className="p-4 pt-0 space-y-2">
              <AcademyButton 
                variant="glass" size="sm" className="w-full justify-start text-[10px]" 
                onClick={triggerIceberg} glow={activeScenario === "iceberg"}
              >
                <Layers size={14} className="mr-2" /> Iceberg
              </AcademyButton>
              <AcademyButton 
                variant="glass" size="sm" className="w-full justify-start text-[10px]" 
                onClick={triggerSpoofing} glow={activeScenario === "spoofing"}
              >
                <ShieldAlert size={14} className="mr-2" /> Spoofing
              </AcademyButton>
              <AcademyButton 
                variant="glass" size="sm" className="w-full justify-start text-[10px] text-fail-red" 
                onClick={triggerCascade} glow={activeScenario === "cascade"}
              >
                <Zap size={14} className="mr-2" /> Cascade
              </AcademyButton>
              <AcademyButton 
                variant="outline" size="sm" className="w-full justify-start text-[10px]" 
                onClick={resetMarket}
              >
                <Activity size={14} className="mr-2" /> Reset
              </AcademyButton>
            </AcademyCardContent>
          </AcademyCard>

          <AcademyCard className="flex-1">
            <AcademyCardHeader className="p-4">
              <AcademyCardTitle className="text-xs">Time & Sales</AcademyCardTitle>
            </AcademyCardHeader>
            <AcademyCardContent className="p-0 h-[400px] overflow-hidden">
               <div className="h-full overflow-y-auto custom-scrollbar px-4 space-y-1">
                  {tape.map(entry => (
                    <div key={entry.id} className="flex justify-between text-[10px] font-mono py-1 border-b border-white/[0.02]">
                       <span className={entry.side === "buy" ? "text-pass-green" : "text-fail-red"}>
                         {entry.side === "buy" ? "B" : "S"}
                       </span>
                       <span className="text-white">{entry.price.toFixed(2)}</span>
                       <span className="text-text-muted">{entry.size}</span>
                    </div>
                  ))}
               </div>
            </AcademyCardContent>
          </AcademyCard>
        </div>

        {/* Main DOM Table */}
        <AcademyCard className="lg:col-span-10 flex flex-col h-full bg-[#050505] overflow-hidden">
          <div className="grid grid-cols-5 border-b border-white/5 bg-surface-secondary">
            <div className="p-3 text-center border-r border-white/5 text-[9px] font-bold text-pass-green uppercase tracking-widest">Bids</div>
            <div className="p-3 text-center border-r border-white/5 text-[9px] font-bold text-text-muted uppercase tracking-widest">Price</div>
            <div className="p-3 text-center border-r border-white/5 text-[9px] font-bold text-fail-red uppercase tracking-widest">Asks</div>
            <div className="p-3 text-center col-span-2 text-[9px] font-bold text-text-muted uppercase tracking-widest">Volume Profile</div>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar font-mono text-xs relative">
            {orderBook.map((level, idx) => {
              const isCurrentPrice = level.price === lastPrice || (idx > 0 && orderBook[idx-1].price > lastPrice && level.price < lastPrice);
              
              return (
                <div 
                  key={level.price} 
                  data-active={isCurrentPrice}
                  className={cn(
                    "grid grid-cols-5 border-b border-white/[0.02] transition-all duration-150 h-9",
                    isCurrentPrice ? "bg-accent-blue/15 border-y border-accent-blue/30 scale-[1.01] z-10 shadow-lg" : "hover:bg-white/[0.03]"
                  )}
                >
                  {/* Bids */}
                  <div className="relative border-r border-white/5 flex items-center justify-end pr-6 overflow-hidden">
                    <div 
                      className={cn(
                        "absolute right-0 top-0 bottom-0 transition-all duration-500",
                        level.isIceberg ? "bg-pass-green/40 shadow-glow-profit" : "bg-pass-green/10"
                      )}
                      style={{ width: `${Math.min(100, (level.bidSize / 150) * 100)}%` }}
                    />
                    <span className={cn("relative font-bold", level.isIceberg ? "text-pass-green" : "text-pass-green/80")}>
                      {level.bidSize > 0 ? level.bidSize : ""}
                    </span>
                  </div>

                  {/* Price */}
                  <div className={cn(
                    "flex items-center justify-center border-r border-white/5 font-extrabold tracking-tighter relative",
                    isCurrentPrice ? "text-white text-sm" : "text-text-muted"
                  )}>
                    {level.price.toFixed(2)}
                    {isCurrentPrice && (
                      <div className="absolute right-1 text-[8px] font-bold text-accent-blue animate-pulse">LTP</div>
                    )}
                  </div>

                  {/* Asks */}
                  <div className="relative border-r border-white/5 flex items-center justify-start pl-6 overflow-hidden">
                    <div 
                      className={cn(
                        "absolute left-0 top-0 bottom-0 transition-all duration-500",
                        level.isSpoof ? "bg-fail-red/40 animate-pulse" : "bg-fail-red/10"
                      )}
                      style={{ width: `${Math.min(100, (level.askSize / 150) * 100)}%` }}
                    />
                    <span className={cn("relative font-bold", level.isSpoof ? "text-fail-red" : "text-fail-red/80")}>
                      {level.askSize > 0 ? level.askSize : ""}
                    </span>
                  </div>

                  {/* Volume Profile */}
                  <div className="col-span-2 flex items-center px-4 gap-3 bg-white/[0.01]">
                     <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-text-muted/20" style={{ width: `${(level.volumeProfile / 1500) * 100}%` }} />
                     </div>
                     <span className="text-[9px] text-text-muted w-8 text-right">{level.volumeProfile}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Practice Footer */}
          <div className="p-3 border-t border-white/10 bg-surface-secondary flex items-center justify-between">
              <div className="flex gap-4">
                 <div className="flex items-center gap-2">
                    <BarChart2 size={12} className="text-accent-blue" />
                    <span className="text-[9px] font-bold text-text-muted uppercase">VWAP: 2499.80</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Layers size={12} className="text-pass-green" />
                    <span className="text-[9px] font-bold text-text-muted uppercase">Depth: 12,450 Lots</span>
                 </div>
              </div>
              <div className="flex items-center gap-2">
                 <span className="text-[9px] font-bold text-text-muted uppercase tracking-widest">Sim Engine:</span>
                 <DataBadge variant="outline" className="text-[8px]">PRO_FLOW_V4</DataBadge>
              </div>
          </div>
        </AcademyCard>
      </div>
    </div>
  );
}

