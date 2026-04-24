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
import { InstitutionalButton } from "@/components/ui/institutional-button";
import { TerminalCard, TerminalCardContent, TerminalCardHeader, TerminalCardTitle, TerminalCardDescription } from "@/components/ui/terminal-card";
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

export function DeFiLendingSimulator() {
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

  // Simulation Logic
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
        <TerminalCard className="lg:col-span-4">
          <TerminalCardHeader>
            <div className="flex items-center gap-2 text-accent-blue text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
              <Shield size={14} />
              Vault Management
            </div>
            <TerminalCardTitle>Institutional Lending</TerminalCardTitle>
          </TerminalCardHeader>
          <TerminalCardContent className="space-y-6">
            <div className="p-4 bg-background border border-border-default rounded-2xl space-y-3">
               <div className="flex justify-between text-[10px] font-bold text-text-muted uppercase tracking-widest">Available Wallet</div>
               <div className="flex justify-between">
                  <span className="text-xs font-mono text-white">{userBalance.eth} ETH</span>
                  <span className="text-xs font-mono text-white">${userBalance.usdc.toLocaleString()} USDC</span>
               </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Active Position</label>
              <div className="grid grid-cols-1 gap-3">
                <InstitutionalButton variant="outline" className="justify-between" onClick={depositCollateral} disabled={userBalance.eth === 0 || isLiquidated}>
                  Deposit 1 ETH Collateral
                  <ArrowUpCircle size={16} className="text-pass-green" />
                </InstitutionalButton>
                <InstitutionalButton variant="outline" className="justify-between" onClick={repayDebt} disabled={userBalance.usdc < 5000 || borrowedAmount < 5000 || isLiquidated}>
                  Repay 5,000 USDC Debt
                  <ArrowDownCircle size={16} className="text-accent-blue" />
                </InstitutionalButton>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-3">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Stress Test Scenarios</p>
              <InstitutionalButton variant="glass" className="w-full justify-between text-fail-red" onClick={simulateFlashCrash} disabled={isLiquidated}>
                Trigger Black Swan (-35%)
                <TrendingDown size={16} />
              </InstitutionalButton>
              <InstitutionalButton variant="outline" className="w-full justify-between" onClick={resetMarket}>
                Reset Simulation State
                <Activity size={16} />
              </InstitutionalButton>
            </div>
          </TerminalCardContent>
        </TerminalCard>

        {/* Position Stats */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TerminalCard className={cn(
              "transition-all duration-700",
              isLiquidated ? "bg-fail-red/10 border-fail-red" : isLiquidationImminent ? "bg-warning/10 border-warning animate-pulse" : ""
            )}>
              <TerminalCardContent className="p-8 flex flex-col items-center justify-center text-center space-y-2">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Health Factor</p>
                <div className={cn(
                  "text-6xl font-black tracking-tighter transition-all duration-500",
                  isLiquidated ? "text-fail-red scale-110" : isLiquidationImminent ? "text-warning" : "text-pass-green"
                )}>
                  {healthFactor.toFixed(2)}
                </div>
                <DataBadge variant={isLiquidated ? "loss" : isLiquidationImminent ? "outline" : "profit"}>
                  {isLiquidated ? "LIQUIDATED" : isLiquidationImminent ? "LIQUIDATION RISK" : "POSITION HEALTHY"}
                </DataBadge>
              </TerminalCardContent>
            </TerminalCard>

            <TerminalCard>
              <TerminalCardContent className="p-8 flex flex-col items-center justify-center text-center space-y-2">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Current LTV</p>
                <div className="text-6xl font-black tracking-tighter text-white">
                  {currentLTV.toFixed(1)}%
                </div>
                <p className="text-[10px] font-mono text-text-muted uppercase">Max LTV: {collateralAsset.ltv * 100}%</p>
              </TerminalCardContent>
            </TerminalCard>
          </div>

          <TerminalCard className="relative overflow-hidden min-h-[300px]">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Shield size={160} />
            </div>
            <TerminalCardHeader>
              <TerminalCardTitle>Position Liquidation Analysis</TerminalCardTitle>
            </TerminalCardHeader>
            <TerminalCardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-text-secondary">Collateral Value</span>
                  <span className="text-white">${collateralValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="h-2 w-full bg-surface-secondary rounded-full overflow-hidden border border-border-default">
                  <div 
                    className={cn(
                      "h-full transition-all duration-1000",
                      isLiquidated ? "bg-fail-red" : "bg-accent-blue shadow-glow-blue"
                    )}
                    style={{ width: `${Math.min(100, (collateralValue / (100 * ASSETS[0].price)) * 100)}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                    <Info size={14} className="text-accent-blue" /> Risk Metrics
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center text-xs p-3 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-text-secondary">Liq. Threshold</span>
                      <span className="text-white font-mono">{collateralAsset.liquidationThreshold * 100}%</span>
                    </li>
                    <li className="flex justify-between items-center text-xs p-3 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-text-secondary">Borrowed Debt</span>
                      <span className="text-white font-mono">${borrowedAmount.toLocaleString()}</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                    <AlertTriangle size={14} className="text-warning" /> Tactical Insight
                  </h4>
                  <div className="p-4 bg-surface-secondary border border-border-default rounded-2xl">
                    <p className="text-xs text-text-secondary leading-relaxed italic">
                      {isLiquidated 
                        ? "Position liquidated. The smart contract has seized your collateral to cover the debt."
                        : isLiquidationImminent 
                          ? "Critical Alert: Your health factor is near 1.0. Deposit more collateral or repay debt immediately."
                          : "Position is within institutional safety bands. Maintain monitoring of HTF volatility."}
                    </p>
                  </div>
                </div>
              </div>
            </TerminalCardContent>
          </TerminalCard>
        </div>
      </div>
    </div>
  );
}
