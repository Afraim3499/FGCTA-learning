"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import {
  ShieldCheck,
  AlertCircle,
  Loader2,
  Activity,
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  Bug,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PriceChart } from "@/components/chart/price-chart";
import { ChartToolbar } from "@/components/chart/chart-toolbar";
import type {
  OHLCV,
  Timeframe,
  ChartType,
  IndicatorConfig,
  Drawing,
  DrawingTool,
} from "@/lib/chart/chart-types";
import { getInstrument } from "@/lib/chart/chart-types";
import { getTrackConfig } from "@/lib/access-control";
import { useTradingEngine, useEngineSnapshot } from "@/hooks/use-trading-engine";
import { formatPrice, formatCurrency, formatPnL, formatPercent } from "@/lib/chart/format-utils";
import { getChartData } from "@/lib/chart/chart-actions";
import { ScenarioOverlay } from "./scenario-overlay";
import { MissionDebrief } from "./mission-debrief";
import { validateMissionOrder } from "@/lib/scenarios/scenario-validator";
import { submitScenarioAttempt } from "@/lib/scenario-actions";

interface TradingTerminalProps {
  activeAttempt: any;
  initialChartData: OHLCV[];
  initialInstrument: string;
  userTrack: string;
}

/**
 * Task 6: Candle Validation
 */
function validateCandles(candles: OHLCV[]): { valid: boolean; error?: string } {
  if (!candles || candles.length === 0) return { valid: false, error: "No market data loaded" };
  
  for (let i = 0; i < candles.length; i++) {
    const c = candles[i];
    if (
      !isFinite(c.open) || !isFinite(c.high) || !isFinite(c.low) || !isFinite(c.close) ||
      isNaN(c.open) || isNaN(c.high) || isNaN(c.low) || isNaN(c.close) ||
      c.high < c.low || 
      c.open > c.high || c.open < c.low ||
      c.close > c.high || c.close < c.low ||
      !c.time || isNaN(c.time)
    ) {
      return { valid: false, error: `Invalid candle data at index ${i}` };
    }
  }
  return { valid: true };
}

export function TradingTerminal({
  activeAttempt,
  initialChartData,
  initialInstrument,
  userTrack,
}: TradingTerminalProps) {
  // ---- Phase 5.3: Telemetry & Safety ----
  const [staleTickCount, setStaleTickCount] = useState(0);
  const [chartErrorCount, setChartErrorCount] = useState(0);
  const [lastStaleTick, setLastStaleTick] = useState<{ time: number; last: number } | null>(null);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [showDebug, setShowDebug] = useState(process.env.NODE_ENV === "development");
  const isDev = process.env.NODE_ENV === "development";
  
  // ---- Engine Management ----
  const engine = useTradingEngine({
    attemptId: activeAttempt.id,
    scenarioId: activeAttempt.scenarioId ?? "scen_001",
    mode: activeAttempt.mode ?? "practice",
    instrument: initialInstrument,
    initialCandles: initialChartData,
    seed: activeAttempt.seed ?? "alpha_seed",
    phaseRules: activeAttempt.phase?.rules ?? {},
  });

  const snapshot = useEngineSnapshot(engine);

  // ---- React UI state ----
  const [instrument, setInstrument] = useState(initialInstrument);
  const [timeframe, setTimeframe] = useState<Timeframe>("15m");
  const [chartType, setChartType] = useState<ChartType>("candlestick");
  const [indicators, setIndicators] = useState<IndicatorConfig[]>([]);
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [chartData, setChartData] = useState<OHLCV[]>(initialChartData);
  const [activeDrawingTool, setActiveDrawingTool] = useState<DrawingTool | null>(null);

  // Task 5: Instrument Switching Data Pipeline
  useEffect(() => {
    // Skip if it's the initial load instrument and data is already set
    if (instrument === initialInstrument && chartData === initialChartData) return;
    
    let isMounted = true;
    const loadNewData = async () => {
      setIsDataLoading(true);
      try {
        const newData = await getChartData(instrument, timeframe, 400);
        if (isMounted) {
          setChartData(newData);
          // Reset stability counters on instrument switch to isolate results
          setStaleTickCount(0);
          setChartErrorCount(0);
          setLastStaleTick(null);
          console.log(`[Phase 5.3] Instrument switched to ${instrument}. Data reloaded.`);
        }
      } catch (err) {
        console.error("Failed to load instrument data:", err);
      } finally {
        if (isMounted) setIsDataLoading(false);
      }
    };

    loadNewData();
    return () => { isMounted = false; };
  }, [instrument, timeframe, initialInstrument, initialChartData]);
  const [, setSelectedDrawingId] = useState<string | null>(null);

  // Order Form State
  const [direction, setDirection] = useState<"buy" | "sell">("buy");
  const [sizeInput, setSizeInput] = useState(0.1);
  const [stopLoss, setStopLoss] = useState<number | "">("");
  const [takeProfit, setTakeProfit] = useState<number | "">("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<{ code?: string; message: string } | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [scenario, setScenario] = useState<any>(null);
  const [missionResult, setMissionResult] = useState<any>(null);

  const isScenarioMode = !!activeAttempt.scenarioId;

  const spec = getInstrument(instrument);

  // ---- Task 3 & 5: Data Validation ----
  const validation = useMemo(() => validateCandles(chartData), [chartData]);

  // ---- Handlers ----
  const handleTogglePlay = useCallback(() => {
    if (snapshot.status === "running") {
      engine.pause();
    } else {
      engine.resume();
    }
  }, [engine, snapshot.status]);

  const handleStep = useCallback(() => engine.step(), [engine]);
  const handleReset = useCallback(() => engine.reset(), [engine]);
  const handleSpeedChange = useCallback((s: number) => engine.setSpeed(s), [engine]);

  const handleExecute = async () => {
    setError(null);
    setSuccessMsg(null);

    if (!snapshot.currentPrice || isNaN(snapshot.currentPrice)) {
      setError({ message: "Market price unavailable. Wait for chart data." });
      return;
    }

    if (stopLoss === "" || stopLoss === null) {
      setError({ message: "Stop loss is required for this phase.", code: "MANDATORY_SL" });
      return;
    }

    if (direction === "buy" && Number(stopLoss) >= snapshot.currentPrice) {
      setError({ message: "Buy SL must be below entry price.", code: "INVALID_SL" });
      return;
    }
    if (direction === "sell" && Number(stopLoss) <= snapshot.currentPrice) {
      setError({ message: "Sell SL must be above entry price.", code: "INVALID_SL" });
      return;
    }

    if (isScenarioMode && scenario) {
      const validation = validateMissionOrder(scenario.slug, {
        instrument,
        lotSize: sizeInput,
        entryPrice: snapshot.currentPrice,
        stopLoss: String(stopLoss) === "" ? null : Number(stopLoss),
        takeProfit: String(takeProfit) === "" ? null : Number(takeProfit),
        direction
      });

      if (!validation.isValid) {
        setError({ message: validation.message || "Invalid mission order" });
        return;
      }
    }

    setIsPending(true);

    try {
      const result = engine.executeMarketOrder({
        direction,
        size: sizeInput,
        stopLoss: Number(stopLoss),
        takeProfit: takeProfit === "" ? null : Number(takeProfit),
      });

      if (result) {
        if (isScenarioMode && scenario) {
          // Mission 1: Complete immediately on valid order
          engine.pause();
          const submission = await submitScenarioAttempt(
            activeAttempt.id,
            { action: 'open_order', time: Date.now() },
            result
          );
          setMissionResult(submission.gradingResult);
        } else {
          setSuccessMsg(`${direction.toUpperCase()} order executed @ ${formatPrice(result.fillPrice, spec.pricePrecision)}`);
          setStopLoss("");
          setTakeProfit("");
          setTimeout(() => setSuccessMsg(null), 3000);
        }
      }
    } catch (err: any) {
      setError({ message: err.message || "Execution failed" });
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    const onViolation = (payload: { ruleId: string; description: string }) => {
      setError({ message: payload.description, code: payload.ruleId });
    };
    engine.eventBus.on("RULE_VIOLATION", onViolation);
    return () => engine.eventBus.off("RULE_VIOLATION", onViolation);
  }, [engine]);

  // ---- Task 8: Risk Projection Fix ----
  const getRiskContent = () => {
    if (!snapshot.currentPrice) return { text: "Price unavailable", color: "text-slate-500", percent: 0, isInvalid: true };
    if (stopLoss === "" || stopLoss === null) return { text: "Enter stop loss", color: "text-amber-500", percent: 0, isInvalid: true };
    
    const sl = Number(stopLoss);
    const isInvalidDir = (direction === "buy" && sl >= snapshot.currentPrice) || (direction === "sell" && sl <= snapshot.currentPrice);
    if (isInvalidDir) return { text: "Invalid stop loss", color: "text-rose-500", percent: 0, isInvalid: true };

    const riskAmt = Math.abs(snapshot.currentPrice - sl) * (sizeInput * spec.contractSize);
    const riskPct = (riskAmt / snapshot.equity) * 100;
    const overRisk = riskPct > (activeAttempt.phase?.maxRiskPerTrade || 2);

    return {
      text: `${formatCurrency(riskAmt)} (${formatPercent(riskPct)})`,
      color: overRisk ? "text-rose-500" : "text-emerald-500",
      percent: riskPct,
      isOverRisk: overRisk,
      isInvalid: false
    };
  };

  const risk = getRiskContent();

  if (isDataLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[700px] bg-[#0D1117] text-slate-500 gap-4 rounded-2xl border border-white/5">
        <Loader2 className="w-8 h-8 animate-spin text-[#6366F1]" />
        <span className="text-xs font-medium animate-pulse uppercase tracking-[0.2em]">Loading {instrument} Data...</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 relative">
      {/* ====== DEBUG PANEL (Phase 5.3) ====== */}
      {showDebug && isDev && (
        <div className="absolute -top-40 left-0 right-0 z-[100] bg-[#161B22]/95 border border-amber-500/30 rounded-xl p-4 font-mono text-[10px] grid grid-cols-4 gap-4 shadow-2xl backdrop-blur-md">
          <div className="space-y-1">
            <p className="text-amber-500 font-bold border-b border-white/5 pb-1">MARKET DATA</p>
            <p><span className="text-slate-500">Instrument:</span> {instrument}</p>
            <p><span className="text-slate-500">Candles:</span> {chartData.length}</p>
            <p><span className="text-slate-500">Valid:</span> {validateCandles(chartData).valid ? "YES" : "NO"}</p>
          </div>
          <div className="space-y-1">
            <p className="text-amber-500 font-bold border-b border-white/5 pb-1">ENGINE STATE</p>
            <p><span className="text-slate-500">Status:</span> {snapshot.status}</p>
            <p><span className="text-slate-500">Price:</span> {snapshot.currentPrice || "NULL"}</p>
            <p><span className="text-slate-500">Index:</span> {snapshot.candleIndex}</p>
          </div>
          <div className="space-y-1">
            <p className="text-rose-500 font-bold border-b border-white/5 pb-1 uppercase tracking-tighter">Stability Telemetry</p>
            <p><span className="text-slate-500">Stale Ticks:</span> <span className={staleTickCount > 0 ? "text-rose-400 font-bold" : "text-emerald-400"}>{staleTickCount}</span></p>
            <p><span className="text-slate-500">Chart Errors:</span> <span className={chartErrorCount > 0 ? "text-rose-400 font-bold" : "text-emerald-400"}>{chartErrorCount}</span></p>
            <p><span className="text-slate-500">Feed:</span> {snapshot.currentPrice ? "CONNECTED" : "WAITING"}</p>
          </div>
          <div className="space-y-1">
            <p className="text-amber-500 font-bold border-b border-white/5 pb-1 uppercase tracking-tighter text-[9px]">Last Stale Event</p>
            {lastStaleTick ? (
              <>
                <p><span className="text-slate-500">Tick:</span> {lastStaleTick.time}</p>
                <p><span className="text-slate-500">Last:</span> {lastStaleTick.last}</p>
              </>
            ) : <p className="text-slate-500">No events</p>}
          </div>
          <button onClick={() => setShowDebug(false)} className="absolute top-2 right-2 text-slate-500 hover:text-white p-1 hover:bg-white/5 rounded"><Activity size={12}/></button>
        </div>
      )}

      {/* ====== CHART AREA (3/4 width) ====== */}
      <div className="xl:col-span-3 space-y-0">
        <div className="flex items-center justify-between bg-[#161B22] border-x border-t border-white/5 px-4 py-2 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <button
              onClick={handleTogglePlay}
              className={cn(
                "p-2 rounded-lg transition-all",
                snapshot.status === "running"
                  ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                  : "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
              )}
            >
              {snapshot.status === "running" ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={handleStep}
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <SkipForward size={16} />
            </button>
            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 transition-all"
            >
              <RotateCcw size={16} />
            </button>
            <button onClick={() => setShowDebug(!showDebug)} className="p-2 rounded-lg bg-white/5 text-amber-500/50 hover:text-amber-500 transition-all">
              <Bug size={16} />
            </button>
          </div>
        </div>

        <ChartToolbar
          instrument={instrument}
          timeframe={timeframe}
          chartType={chartType}
          indicators={indicators}
          onInstrumentChange={setInstrument}
          onTimeframeChange={setTimeframe}
          onChartTypeChange={setChartType}
          onIndicatorsChange={setIndicators}
          onDrawingToolSelect={setActiveDrawingTool}
          allowedInstruments={isScenarioMode && scenario ? [scenario.instrument] : getTrackConfig(userTrack).instruments}
          crosshairData={null}
          currentPrice={snapshot.currentPrice || 0}
          instrumentDecimals={spec.pricePrecision}
          className="border-x border-t-0 rounded-none"
        />

        <div className="relative border-x border-b border-[rgba(255,255,255,0.05)] rounded-b-2xl overflow-hidden bg-[#0D1117]">
          {!validation.valid ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D1117] text-rose-500 p-10 text-center gap-4 z-50">
               <AlertCircle size={40} />
               <div className="space-y-1">
                 <p className="font-bold uppercase tracking-tight">Market Data Error</p>
                 <p className="text-xs text-slate-500">{validation.error || "Failed to load candles"}</p>
               </div>
            </div>
          ) : (
            <PriceChart
              data={chartData}
              instrument={instrument}
              chartType={chartType}
              timeframe={timeframe}
              indicators={indicators}
              drawings={drawings}
              activeTool={activeDrawingTool}
              onDrawingAdd={(d) => setDrawings([...drawings, d])}
              onDrawingSelect={setSelectedDrawingId}
              engine={engine}
              height={520}
              onStaleTick={(time, last) => {
                setStaleTickCount(prev => prev + 1);
                setLastStaleTick({ time, last });
              }}
              onChartError={() => setChartErrorCount(prev => prev + 1)}
            />
          )}

          {/* HUD Driven by Engine Snapshot */}
          <div className="absolute top-20 left-4 z-20 flex gap-2">
            <div className="bg-[#161B22]/90 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Equity</span>
              <span className="text-lg font-mono font-bold text-white">
                {formatCurrency(snapshot.equity)}
              </span>
            </div>
            <div className="bg-[#161B22]/90 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Positions</span>
              <span className="text-lg font-mono font-bold text-emerald-500">
                {snapshot.openPositions.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ====== ORDER ENTRY SIDEBAR ====== */}
      <div className="space-y-4">
        {isScenarioMode && activeAttempt.scenarioId && (
          <ScenarioOverlay 
            scenarioId={activeAttempt.scenarioId} 
            onScenarioLoaded={setScenario}
          />
        )}

        <div className="p-5 bg-[#0D1117] border border-[rgba(255,255,255,0.05)] rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#6366F1]/10 rounded-xl text-[#818CF8]">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{instrument}</h3>
              <p className="text-[9px] text-[#64748B] font-bold tracking-widest uppercase">Engine Live</p>
            </div>
          </div>
          <div className="text-3xl font-mono font-bold text-white tracking-tighter text-center py-2">
            {formatPrice(snapshot.currentPrice, spec.pricePrecision)}
          </div>
        </div>

        {/* Active Positions List */}
        {snapshot.openPositions.length > 0 && (
          <div className="space-y-2">
            {snapshot.openPositions.map((pos) => (
              <div key={pos.id} className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3 flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-bold text-white">{pos.direction.toUpperCase()} {pos.size} {spec.sizeLabel}</p>
                  <p className="text-[8px] text-slate-500 font-mono">@{formatPrice(pos.openPrice, spec.pricePrecision)}</p>
                </div>
                <button
                  onClick={() => engine.closePosition(pos.id)}
                  className="text-[9px] font-bold text-rose-500 uppercase hover:text-rose-400"
                >
                  Close
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="bg-[#0D1117] border border-[rgba(255,255,255,0.05)] rounded-2xl p-4 space-y-4">
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
            <button onClick={() => setDirection("buy")} className={cn("flex-1 py-3 rounded-lg font-bold text-[10px] uppercase transition-all", direction === "buy" ? "bg-[#10B981] text-white" : "text-slate-500")}>Buy</button>
            <button onClick={() => setDirection("sell")} className={cn("flex-1 py-3 rounded-lg font-bold text-[10px] uppercase transition-all", direction === "sell" ? "bg-[#EF4444] text-white" : "text-slate-500")}>Sell</button>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-500 uppercase px-1">Size ({spec.sizeLabel})</label>
              <input type="number" step={spec.sizePrecision} value={sizeInput} onChange={(e) => setSizeInput(Number(e.target.value))} className="w-full bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-white font-mono text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-500 uppercase px-1">Stop Loss</label>
              <input type="number" step={spec.tickSize} value={stopLoss} onChange={(e) => setStopLoss(e.target.value === "" ? "" : Number(e.target.value))} placeholder="MANDATORY" className="w-full bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-white font-mono text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-500 uppercase px-1">Take Profit</label>
              <input type="number" step={spec.tickSize} value={takeProfit} onChange={(e) => setTakeProfit(e.target.value === "" ? "" : Number(e.target.value))} placeholder="MANDATORY" className="w-full bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-white font-mono text-sm" />
            </div>
          </div>

          {/* Risk Preview */}
          <div className="p-3 bg-white/5 rounded-xl space-y-1">
            <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest">
              <span className="text-slate-500">Risk Projection</span>
              <span className={cn(risk.color)}>
                {risk.text}
              </span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className={cn("h-full transition-all", risk.color.replace("text-", "bg-"))} style={{ width: `${Math.min(100, risk.percent * 50)}%` }} />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-500 text-[10px] font-bold flex gap-2 items-center">
              <AlertCircle size={14} />
              <span>{error.message}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 text-[10px] font-bold flex gap-2 items-center">
              <ShieldCheck size={14} />
              <span>{successMsg}</span>
            </div>
          )}

          <button
            disabled={isPending || risk.isInvalid || snapshot.status === "complete" || !validation.valid}
            onClick={handleExecute}
            className={cn("w-full py-4 rounded-xl font-bold uppercase text-[11px] transition-all", (risk.isInvalid || !validation.valid) ? "bg-white/5 text-slate-500 cursor-not-allowed" : "bg-white text-black hover:bg-white/90")}
          >
            {isPending ? <Loader2 className="animate-spin" size={16} /> : "Execute Order"}
          </button>
        </div>
      </div>

      {missionResult && (
        <MissionDebrief 
          result={missionResult} 
          moduleId={activeAttempt.moduleId}
          onRetry={() => setMissionResult(null)}
        />
      )}
    </div>
  );
}
