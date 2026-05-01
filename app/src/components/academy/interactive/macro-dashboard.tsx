"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Globe, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Activity,
  Zap,
  DollarSign,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AcademyButton } from "@/components/ui/academy-button";
import { AcademyCard, AcademyCardContent, AcademyCardHeader, AcademyCardTitle, AcademyCardDescription } from "@/components/ui/academy-card";
import { DataBadge } from "@/components/ui/data-badge";

interface MacroSignal {
  symbol: string;
  name: string;
  value: number;
  change: number;
  correlation: "positive" | "negative" | "none";
}

export function MacroDashboard() {
  const [dxyValue, setDxyValue] = useState(104.50);
  const [yieldValue, setYieldValue] = useState(4.25); // US10Y
  const [goldPrice, setGoldPrice] = useState(2050.00);

  // Practice Logic: DXY up -> Gold down, Yields up -> Gold down
  const calculateGoldPrice = useMemo(() => {
    const dxyImpact = (104.50 - dxyValue) * 50; // Every 1 point dxy is $50 gold
    const yieldImpact = (4.25 - yieldValue) * 100; // Every 1% yield is $100 gold
    return 2050.00 + dxyImpact + yieldImpact;
  }, [dxyValue, yieldValue]);

  useEffect(() => {
    setGoldPrice(calculateGoldPrice);
  }, [calculateGoldPrice]);

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* DXY Card */}
        <AcademyCard>
          <AcademyCardContent className="p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-accent-blue/10 text-accent-blue rounded-lg">
                <DollarSign size={20} />
              </div>
              <DataBadge variant="forex">DXY Index</DataBadge>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Dollar Strength</p>
              <div className="text-4xl font-extrabold text-white">{dxyValue.toFixed(2)}</div>
            </div>
            <div className="pt-4 space-y-4">
              <input 
                type="range" min="100" max="110" step="0.1"
                value={dxyValue}
                onChange={(e) => setDxyValue(Number(e.target.value))}
                className="w-full accent-accent-blue"
              />
              <div className="flex justify-between text-[8px] font-mono text-text-muted uppercase">
                <span>Dovish (100)</span>
                <span>Hawkish (110)</span>
              </div>
            </div>
          </AcademyCardContent>
        </AcademyCard>

        {/* Yields Card */}
        <AcademyCard>
          <AcademyCardContent className="p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-pass-green/10 text-pass-green rounded-lg">
                <BarChart3 size={20} />
              </div>
              <DataBadge variant="outline">US10Y Yields</DataBadge>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Real Yield Context</p>
              <div className="text-4xl font-extrabold text-white">{yieldValue.toFixed(2)}%</div>
            </div>
            <div className="pt-4 space-y-4">
              <input 
                type="range" min="3" max="6" step="0.05"
                value={yieldValue}
                onChange={(e) => setYieldValue(Number(e.target.value))}
                className="w-full accent-pass-green"
              />
              <div className="flex justify-between text-[8px] font-mono text-text-muted uppercase">
                <span>Liquidity (3%)</span>
                <span>Tightening (6%)</span>
              </div>
            </div>
          </AcademyCardContent>
        </AcademyCard>

        {/* Gold Performance */}
        <AcademyCard className="bg-gold/5 border-gold/20">
          <AcademyCardContent className="p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-gold/10 text-gold rounded-lg">
                <Zap size={20} />
              </div>
              <DataBadge variant="gold">XAU/USD</DataBadge>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Correlated Outcome</p>
              <div className="text-4xl font-extrabold text-white">${goldPrice.toFixed(2)}</div>
            </div>
            <div className="pt-4 flex items-center gap-2">
              <div className={cn(
                "w-full h-1.5 rounded-full",
                goldPrice > 2050 ? "bg-pass-green/20" : "bg-fail-red/20"
              )}>
                <div 
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    goldPrice > 2050 ? "bg-pass-green shadow-glow-profit" : "bg-fail-red shadow-glow-loss"
                  )}
                  style={{ width: `${Math.abs(((goldPrice - 1800) / (2300 - 1800)) * 100)}%` }}
                />
              </div>
            </div>
          </AcademyCardContent>
        </AcademyCard>

      </div>

      <AcademyCard className="relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Globe size={240} />
        </div>
        <AcademyCardHeader>
          <AcademyCardTitle>Academy Correlation Matrix</AcademyCardTitle>
          <AcademyCardDescription>Visualizing intermarket relationships in real-time.</AcademyCardDescription>
        </AcademyCardHeader>
        <AcademyCardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2">
                <Activity size={14} className="text-accent-blue" /> Intermarket Mechanics
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 group hover:border-accent-blue/30 transition-all">
                  <div className="flex items-center gap-4">
                    <TrendingDown className="text-fail-red" size={20} />
                    <div>
                      <p className="text-sm font-bold text-white">DXY ↔ Gold</p>
                      <p className="text-[10px] text-text-muted uppercase tracking-widest">Negative Correlation</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-text-secondary">Impact Factor</p>
                    <p className="text-sm font-bold text-fail-red">High</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 group hover:border-pass-green/30 transition-all">
                  <div className="flex items-center gap-4">
                    <TrendingDown className="text-fail-red" size={20} />
                    <div>
                      <p className="text-sm font-bold text-white">US10Y ↔ Gold</p>
                      <p className="text-[10px] text-text-muted uppercase tracking-widest">Negative Correlation</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-text-secondary">Impact Factor</p>
                    <p className="text-sm font-bold text-fail-red">Critical</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2">
                <Globe size={14} className="text-pass-green" /> Academy Narrative
              </h4>
              <div className="p-6 bg-surface-secondary border border-border-default rounded-[2rem] h-full">
                <p className="text-sm text-text-secondary leading-relaxed italic">
                  "Gold is the ultimate hedge against sovereign debt and currency debasement. When the DXY rallies, it signals global liquidity tightening, putting immediate pressure on non-yielding assets like Gold. As an Academy trader, you never trade the XAU/USD chart in isolation—you trade the Dollar Index."
                </p>
                <div className="mt-8 flex gap-4">
                   <div className="flex-1 p-4 bg-background border border-border-default rounded-xl text-center">
                      <p className="text-[8px] font-bold text-text-muted uppercase mb-1">Risk Bias</p>
                      <p className={cn(
                        "text-xs font-bold uppercase",
                        goldPrice > 2050 ? "text-pass-green" : "text-fail-red"
                      )}>
                        {goldPrice > 2050 ? "Risk-Off" : "Risk-On"}
                      </p>
                   </div>
                   <div className="flex-1 p-4 bg-background border border-border-default rounded-xl text-center">
                      <p className="text-[8px] font-bold text-text-muted uppercase mb-1">Yield Regime</p>
                      <p className={cn(
                        "text-xs font-bold uppercase",
                        yieldValue > 4.5 ? "text-fail-red" : "text-pass-green"
                      )}>
                        {yieldValue > 4.5 ? "Restrictive" : "Accommodative"}
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </AcademyCardContent>
      </AcademyCard>
    </div>
  );
}
