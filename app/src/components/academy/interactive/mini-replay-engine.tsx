"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { 
  Target, 
  Lightbulb, 
  CheckCircle2, 
  ArrowUp, 
  Shield, 
  RefreshCcw,
  BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  createChart, 
  IChartApi, 
  ISeriesApi,
  CandlestickSeries
} from "lightweight-charts";

export interface MiniReplayTaskResult {
  taskId: string;
  moduleId: string;
  status: "passed" | "failed";
  rMultiple: number;
  entryPrice: number;
  exitPrice: number;
  entryTime: string;
  exitTime: string;
  pnl: number;
  completionTimeMs: number;
}

export interface ChartDataPoint {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface MiniReplayEngineProps {
  taskId: string;
  moduleId: string;
  chartData: ChartDataPoint[];
  initialCandleCount: number;
  prompt: string;
  rationale?: string;
  validationZones?: {
      primary: Array<{ time: string; priceMin: number; priceMax: number }>;
  };
  onPass: (result: MiniReplayTaskResult) => void;
}

export function MiniReplayEngine({
  taskId,
  moduleId,
  chartData,
  initialCandleCount,
  prompt,
  rationale,
  validationZones,
  onPass
}: MiniReplayEngineProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  const [currentIndex, setCurrentIndex] = useState(initialCandleCount);
  const visibleData = useMemo(() => chartData.slice(0, currentIndex), [chartData, currentIndex]);

  // Initialize Chart
  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: "transparent" },
        textColor: "#9CA3AF",
      },
      grid: {
        vertLines: { color: "rgba(255, 255, 255, 0.05)" },
        horzLines: { color: "rgba(255, 255, 255, 0.05)" },
      },
      rightPriceScale: {
        borderColor: "rgba(255, 255, 255, 0.1)",
      },
      timeScale: {
        borderColor: "rgba(255, 255, 255, 0.1)",
        timeVisible: true,
      },
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#10B981",
      downColor: "#EF4444",
      borderVisible: false,
      wickUpColor: "#10B981",
      wickDownColor: "#EF4444",
    });

    candlestickSeries.setData(visibleData);
    chartRef.current = chart;
    seriesRef.current = candlestickSeries;

    return () => chart.remove();
  }, []);

  // Update Data on Index Change
  useEffect(() => {
    if (seriesRef.current) {
      seriesRef.current.setData(visibleData);
      chartRef.current?.timeScale().scrollToPosition(0, false);
    }
  }, [visibleData]);

  // Navigation Logic
  const stepForward = () => {
    if (currentIndex < chartData.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const jumpToSignal = () => {
    const signalTime = validationZones?.primary?.[0]?.time;
    const signalIndex = chartData.findIndex(d => d.time === signalTime);
    if (signalIndex !== -1) {
      setCurrentIndex(signalIndex + 1);
    } else {
        setCurrentIndex(prev => Math.min(prev + 5, chartData.length));
    }
  };

  const resetPractice = () => {
    setCurrentIndex(initialCandleCount);
  };

  const currentInsight = useMemo(() => {
    if (currentIndex <= initialCandleCount) return "Observe the starting market structure. What is the Academy narrative?";
    if (currentIndex >= chartData.length) return "Scenario complete. Review the final structural outcome below.";
    
    const candle = chartData[currentIndex - 1];
    const prevCandle = chartData[currentIndex - 2];
    if (!prevCandle) return "Scenario active.";
    
    if (candle.close > prevCandle.close) return "Bullish expansion. Price is respecting structural demand.";
    return "Momentum cooling. Academy participants are absorbing supply.";
  }, [currentIndex, chartData, initialCandleCount]);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#020617] overflow-hidden flex flex-col shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-bold tracking-[0.2em] uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            Strategic Case Study
          </div>
          <button 
            onClick={resetPractice}
            className="p-2 hover:bg-white/5 rounded-lg text-slate-500 hover:text-white transition-all flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
          >
            <RefreshCcw size={14} />
            Reset
          </button>
        </div>
        <p className="text-white text-sm font-medium leading-relaxed">{prompt}</p>
      </div>

      {/* Chart Viewport */}
      <div className="relative border-b border-white/5">
        <div 
            ref={chartContainerRef} 
            className="w-full h-[400px] bg-[#020617]"
        />
        
        {/* Progress Tracker */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
            <div 
                className="h-full bg-indigo-500 transition-all duration-300" 
                style={{ width: `${(currentIndex / chartData.length) * 100}%` }}
            />
        </div>
      </div>

      {/* Pedagogy Panel */}
      <div className="p-8 bg-slate-900/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
                        <Lightbulb size={18} />
                    </div>
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Academy Commentary</h4>
                </div>
                <p className="text-lg font-bold text-white leading-tight min-h-[3rem]">
                    {currentInsight}
                </p>
                <div className="flex gap-3 pt-2">
                    <button 
                        onClick={stepForward}
                        disabled={currentIndex >= chartData.length}
                        className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 hover:bg-slate-200 disabled:opacity-50 disabled:hover:bg-white rounded-2xl font-bold text-xs transition-all shadow-lg active:scale-95"
                    >
                        STEP FORWARD
                        <ArrowUp size={16} className="rotate-90" />
                    </button>
                    <button 
                        onClick={jumpToSignal}
                        disabled={currentIndex >= chartData.length}
                        className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-xs transition-all active:scale-95"
                    >
                        SKIP TO SIGNAL
                    </button>
                </div>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Mastery Tip</span>
                    <Shield className="text-slate-500" size={14} />
                </div>
                <p className="text-sm text-slate-400 leading-relaxed italic">
                    "Retail traders rush into moves. Academy traders wait for the market to reveal its hand. Observe the candle closures carefully."
                </p>
                <div className="pt-2">
                    <div className="flex justify-between text-[10px] font-bold mb-1.5">
                        <span className="text-slate-500 uppercase">Scenario Progress</span>
                        <span className="text-indigo-400">{Math.round((currentIndex / chartData.length) * 100)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-indigo-500 transition-all duration-500"
                            style={{ width: `${(currentIndex / chartData.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Outcome Analysis */}
      {currentIndex >= chartData.length && rationale && (
        <div className="mx-8 mb-8 p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl animate-in fade-in zoom-in-95 duration-700">
            <div className="flex items-start gap-5">
                <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-500">
                    <CheckCircle2 size={24} />
                </div>
                <div className="space-y-2">
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em]">Academy Lesson</p>
                    <p className="text-base text-emerald-50/90 leading-relaxed font-medium">
                        {rationale}
                    </p>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}
