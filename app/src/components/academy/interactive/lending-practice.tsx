"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Shield, 
  ArrowUpCircle, 
  ArrowDownCircle, 
  AlertTriangle, 
  Info,
  TrendingUp,
  TrendingDown,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AcademyButton } from "@/components/ui/academy-button";
import { AcademyCard, AcademyCardContent, AcademyCardHeader, AcademyCardTitle, AcademyCardDescription } from "@/components/ui/academy-card";
import { DataBadge } from "@/components/ui/data-badge";

interface Asset {
  symbol: string;
  name: string;
  price: number;
  ltv: number;
  liquidationThreshold: number;
  color: string;
}

const ASSETS: Asset[] = [
  { symbol: "ETH", name: "Ethereum", price: 2500, ltv: 0.8, liquidationThreshold: 0.85, color: "#627EEA" },
  { symbol: "BTC", name: "Bitcoin", price: 65000, ltv: 0.75, liquidationThreshold: 0.8, color: "#F7931A" },
  { symbol: "USDC", name: "USD Coin", price: 1, ltv: 0.85, liquidationThreshold: 0.9, color: "#2775CA" },
];

export function LendingPractice() {
  const [collateralAsset, setCollateralAsset] = useState<Asset>(ASSETS[0]);
  const [collateralAmount, setCollateralAmount] = useState<number>(10);
  const [borrowedAmount, setBorrowedAmount] = useState<number>(15000);
  const [userBalance, setUserBalance] = useState({ eth: 5, usdc: 20000 });
  const [marketVolatility, setMarketVolatility] = useState<number>(0); 

  // Real-time Math
  const currentCollateralPrice = collateralAsset.price * (1 + marketVolatility);
  const collateralValue = collateralAmount * currentCollateralPrice;
  const borrowedValue = borrowedAmount; 
  
  const healthFactor = useMemo(() => {
    if (borrowedValue === 0) return 100;
    return (collateralValue * collateralAsset.liquidationThreshold) / borrowedValue;
  }, [collateralValue, borrowedValue, collateralAsset]);

  const currentLTV = (borrowedValue / collateralValue) * 100;
  const isLiquidationImminent = healthFactor < 1.1 && healthFactor >= 1;
  const isLiquidated = healthFactor < 1;

  // Practice Logic
  const simulateFlashCrash = () => {
    setMarketVolatility(-0.35); // 35% drop
  };

  const depositCollateral = () => {
    if (userBalance.eth > 0) {
      setCollateralAmount(prev => prev + 1);
      setUserBalance(prev => ({ ...prev, eth: prev.eth - 1 }));
    }
  };

  const repayDebt = () => {
    if (userBalance.usdc >= 5000 && borrowedAmount >= 5000) {
      setBorrowedAmount(prev => prev - 5000);
      setUserBalance(prev => ({ ...prev, usdc: prev.usdc - 5000 }));
    }
  };

  const resetMarket = () => {
    setMarketVolatility(0);
    setCollateralAmount(10);
    setBorrowedAmount(15000);
    setUserBalance({ eth: 5, usdc: 20000 });
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Control Panel */}
        <AcademyCard className="lg:col-span-4">
          <AcademyCardHeader>
            <div className="flex items-center gap-2 text-[var(--ln-teal-500)] text-[10px] font-extrabold tracking-[0.2em] uppercase mb-1">
              <Shield size={14} />
              Asset Management
            </div>
            <AcademyCardTitle>Learning Environment</AcademyCardTitle>
          </AcademyCardHeader>
          <AcademyCardContent className="space-y-6">
            <div className="p-4 bg-slate-50 border border-[var(--ln-border)] rounded-2xl space-y-3 shadow-sm">
               <div className="flex justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Available Balance</div>
               <div className="flex justify-between">
                  <span className="text-xs font-mono font-bold text-[var(--ln-navy-900)]">{userBalance.eth} ETH</span>
                  <span className="text-xs font-mono font-bold text-[var(--ln-navy-900)]">${userBalance.usdc.toLocaleString()} USDC</span>
               </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Active Position</label>
              <div className="grid grid-cols-1 gap-3">
                <AcademyButton variant="outline" className="justify-between" onClick={depositCollateral} disabled={userBalance.eth === 0 || isLiquidated}>
                  Deposit 1 ETH Collateral
                  <ArrowUpCircle size={16} className="text-[var(--ln-teal-500)]" />
                </AcademyButton>
                <AcademyButton variant="outline" className="justify-between" onClick={repayDebt} disabled={userBalance.usdc < 5000 || borrowedAmount < 5000 || isLiquidated}>
                  Repay 5,000 USDC Debt
                  <ArrowDownCircle size={16} className="text-[var(--ln-teal-500)]" />
                </AcademyButton>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--ln-border)] space-y-3">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Market Shift Scenarios</p>
              <AcademyButton variant="outline" className="w-full justify-between text-rose-500 border-rose-100 hover:bg-rose-50" onClick={simulateFlashCrash} disabled={isLiquidated}>
                Simulate Market Shift (-35%)
                <TrendingDown size={16} />
              </AcademyButton>
              <AcademyButton variant="outline" className="w-full justify-between" onClick={resetMarket}>
                Reset Practice State
                <Activity size={16} />
              </AcademyButton>
            </div>
          </AcademyCardContent>
        </AcademyCard>

        {/* Position Stats */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AcademyCard className={cn(
              "transition-all duration-700",
              isLiquidated ? "bg-rose-50 border-rose-200" : isLiquidationImminent ? "bg-amber-50 border-amber-200 animate-pulse" : ""
            )}>
              <AcademyCardContent className="p-8 flex flex-col items-center justify-center text-center space-y-2">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Safety Score</p>
                <div className={cn(
                  "text-6xl font-extrabold tracking-tighter transition-all duration-500",
                  isLiquidated ? "text-rose-500 scale-110" : isLiquidationImminent ? "text-amber-500" : "text-[var(--ln-teal-500)]"
                )}>
                  {healthFactor.toFixed(2)}
                </div>
                <DataBadge variant={isLiquidated ? "loss" : isLiquidationImminent ? "outline" : "profit"}>
                  {isLiquidated ? "REVIEW REQUIRED" : isLiquidationImminent ? "LOW SAFETY MARGIN" : "POSITION SECURE"}
                </DataBadge>
              </AcademyCardContent>
            </AcademyCard>

            <AcademyCard>
              <AcademyCardContent className="p-8 flex flex-col items-center justify-center text-center space-y-2">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Current LTV</p>
                <div className="text-6xl font-extrabold tracking-tighter text-[var(--ln-navy-900)]">
                  {currentLTV.toFixed(1)}%
                </div>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">Threshold: {collateralAsset.ltv * 100}%</p>
              </AcademyCardContent>
            </AcademyCard>
          </div>

          <AcademyCard className="relative overflow-hidden min-h-[300px]">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-[var(--ln-teal-500)]">
                <Shield size={160} />
            </div>
            <AcademyCardHeader>
              <AcademyCardTitle>Safety Analysis</AcademyCardTitle>
            </AcademyCardHeader>
            <AcademyCardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold mb-2">
                  <span className="text-slate-500">Asset Value</span>
                  <span className="text-[var(--ln-navy-900)]">${collateralValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-[var(--ln-border)]">
                  <div 
                    className={cn(
                      "h-full transition-all duration-1000",
                      isLiquidated ? "bg-rose-500" : "bg-[var(--ln-teal-500)] shadow-lg shadow-[var(--ln-teal-500)]/20"
                    )}
                    style={{ width: `${Math.min(100, (collateralValue / (100 * ASSETS[0].price)) * 100)}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-extrabold text-[var(--ln-navy-900)] uppercase tracking-[0.2em] flex items-center gap-2">
                    <Info size={14} className="text-[var(--ln-teal-500)]" /> Risk Metrics
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center text-xs p-3 bg-slate-50 rounded-xl border border-[var(--ln-border)]">
                      <span className="text-slate-500">Safety Threshold</span>
                      <span className="text-[var(--ln-navy-900)] font-mono font-bold">{collateralAsset.liquidationThreshold * 100}%</span>
                    </li>
                    <li className="flex justify-between items-center text-xs p-3 bg-slate-50 rounded-xl border border-[var(--ln-border)]">
                      <span className="text-slate-500">Total Obligation</span>
                      <span className="text-[var(--ln-navy-900)] font-mono font-bold">${borrowedAmount.toLocaleString()}</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-extrabold text-[var(--ln-navy-900)] uppercase tracking-[0.2em] flex items-center gap-2">
                    <AlertTriangle size={14} className="text-amber-500" /> Practice Insight
                  </h4>
                  <div className="p-4 bg-slate-50 border border-[var(--ln-border)] rounded-2xl">
                    <p className="text-xs text-slate-500 leading-relaxed italic font-medium">
                      {isLiquidated 
                        ? "Review Required. The market shift has exceeded your safety score. Analyze the outcome to improve risk awareness."
                        : isLiquidationImminent 
                          ? "Alert: Your safety score is low. Deposit more assets or repay obligations to maintain position security."
                          : "Position is within secure parameters. Maintain monitoring of market shifts."}
                    </p>
                  </div>
                </div>
              </div>
            </AcademyCardContent>
          </AcademyCard>
        </div>
      </div>
    </div>
  );
}
