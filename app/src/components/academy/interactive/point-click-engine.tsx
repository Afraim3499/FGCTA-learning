"use client";

import React, { useState, useRef, useEffect } from "react";
import { Target, AlertCircle, Lightbulb, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { createChart, IChartApi, ISeriesApi, MouseEventParams, CandlestickSeries, createSeriesMarkers, ISeriesMarkersPluginApi } from "lightweight-charts";

export interface PointClickTaskResult {
  taskId: string;
  moduleId: string;
  status: "passed" | "failed";
  totalAttempts: number;
  highestHintUsed: "none" | "light" | "guided";
  completionTimeMs: number;
  clickHistory: Array<{
    time: string; // The time of the candle clicked
    price: number;
    timestamp: number;
    zoneMatched: "primary" | "secondary" | "none";
  }>;
}

export interface ChartDataPoint {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface ValidationZone {
  time: string; // The specific candle time string
  priceMin: number;
  priceMax: number;
}

interface PointClickEngineProps {
  taskId: string;
  moduleId: string;
  chartData: ChartDataPoint[];
  prompt: string;
  validationZones?: {
    primary?: ValidationZone[];
    secondary?: ValidationZone[];
  };
  hints: {
    light: string;
    guided: string;
  };
  rationale?: string; // New field for detailed explanation after success
  onPass: (result: PointClickTaskResult) => void;
}

export function PointClickEngine({
  taskId,
  moduleId,
  chartData,
  prompt,
  validationZones,
  hints,
  rationale,
  onPass,
}: PointClickEngineProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const markersRef = useRef<ISeriesMarkersPluginApi<any> | null>(null);

  const [startTime] = useState<number>(Date.now());
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState<"idle" | "passed" | "failed">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [clickHistory, setClickHistory] = useState<PointClickTaskResult["clickHistory"]>([]);

  // We use this to briefly flash a red border or show a marker via the UI
  const [flashError, setFlashError] = useState(false);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create the chart with panning/zooming disabled to make it a "static/locked" task
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
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
      },
      handleScroll: false,
      handleScale: false,
      crosshair: {
        mode: 0, // Normal crosshair
      },
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#10b981",
      downColor: "#ef4444",
      borderVisible: false,
      wickUpColor: "#10b981",
      wickDownColor: "#ef4444",
    });

    series.setData(chartData);
    chart.timeScale().fitContent();
    
    const markers = createSeriesMarkers(series, []);

    chartRef.current = chart;
    seriesRef.current = series;
    markersRef.current = markers;

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [chartData]);

  // Handle Chart Click Logic
  useEffect(() => {
    if (!chartRef.current || status === "passed") return;

    const chart = chartRef.current;

    const onClick = (param: MouseEventParams) => {
      if (!param.time || !param.point) return;
      
      const clickedTime = param.time as string;
      
      // Calculate logical price from the pixel Y coordinate
      const clickedPrice = seriesRef.current?.coordinateToPrice(param.point.y) || 0;

      const isPrimary = validationZones?.primary?.some(
        (z) => clickedTime === z.time && clickedPrice >= z.priceMin && clickedPrice <= z.priceMax
      ) || false;

      const isSecondary = validationZones?.secondary?.some(
        (z) => clickedTime === z.time && clickedPrice >= z.priceMin && clickedPrice <= z.priceMax
      ) || false;

      let zoneMatched: "primary" | "secondary" | "none" = "none";
      if (isPrimary) zoneMatched = "primary";
      else if (isSecondary) zoneMatched = "secondary";

      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      const historyRecord = {
        time: clickedTime,
        price: clickedPrice,
        timestamp: Date.now(),
        zoneMatched,
      };

      const updatedHistory = [...clickHistory, historyRecord];
      setClickHistory(updatedHistory);

      if (isPrimary) {
        setStatus("passed");
        setFeedback("Target confirmed. Structure validated.");

        // Draw a marker on the successful candle
        markersRef.current?.setMarkers([
          {
            time: clickedTime,
            position: "belowBar",
            color: "#10b981",
            shape: "arrowUp",
            text: "HL Validated",
          },
        ]);

        let highestHint: "none" | "light" | "guided" = "none";
        if (newAttempts === 3) highestHint = "light";
        else if (newAttempts > 3) highestHint = "guided";

        onPass({
          taskId,
          moduleId,
          status: "passed",
          totalAttempts: newAttempts,
          highestHintUsed: highestHint,
          completionTimeMs: Date.now() - startTime,
          clickHistory: updatedHistory,
        });
      } else {
        setStatus("failed");
        
        // Visual error flash
        setFlashError(true);
        setTimeout(() => setFlashError(false), 500);

        if (isSecondary) {
          setFeedback("Acceptable zone, but there is a more precise institutional origin. Click the exact wick.");
        } else {
          if (newAttempts === 1) {
            setFeedback("Incorrect placement. Try again.");
          } else if (newAttempts === 2) {
            setFeedback(`Hint: ${hints.light}`);
          } else {
            setFeedback(`Guided Correction: ${hints.guided}`);
          }
        }
      }
    };

    chart.subscribeClick(onClick);

    return () => {
      chart.unsubscribeClick(onClick);
    };
  }, [attempts, status, clickHistory, validationZones, hints, taskId, moduleId, startTime, onPass]);

  return (
    <div className={cn(
      "rounded-[2rem] border bg-[var(--color-surface)] overflow-hidden flex flex-col transition-all duration-500 shadow-2xl relative",
      flashError ? "border-red-500/50 shadow-red-500/5" : 
      status === "passed" ? "border-emerald-500/30 shadow-emerald-500/5" : 
      "border-[var(--color-border)]"
    )}>
      {/* Header / Briefing */}
      <div className="p-8 border-b border-[var(--color-border)] bg-[var(--color-surface-hover)]/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Target size={120} />
        </div>
        <div className="flex items-center gap-3 mb-4 text-[var(--color-brand-400)] text-[10px] font-bold tracking-[0.3em] uppercase">
          <Target className="w-4 h-4" />
          Interactive Execution Task
        </div>
        <p className="text-white text-lg font-medium leading-relaxed max-w-2xl">{prompt}</p>
      </div>

      {/* Chart Section */}
      <div className="relative group">
        <div 
          ref={chartContainerRef} 
          className={cn(
            "w-full h-[450px] bg-[#0B0E14] transition-opacity duration-700",
            status === "passed" ? "opacity-60 grayscale-[0.5]" : ""
          )}
        />
        
        {/* Floating Tactical HUD */}
        <div className="absolute top-6 right-6 flex flex-col gap-3 pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Terminal</span>
            </div>
            {attempts > 0 && (
                <div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-right-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Attempts</span>
                    <span className="text-[10px] font-bold text-white">{attempts}</span>
                </div>
            )}
        </div>

        {/* Success Overlay */}
        {status === "passed" && (
            <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/5 backdrop-blur-[2px] animate-in fade-in duration-700">
                <div className="p-8 rounded-[2.5rem] bg-black/80 border border-emerald-500/20 shadow-2xl flex flex-col items-center gap-4 text-center max-w-xs">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <CheckCircle2 size={40} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white">Target Verified</h4>
                        <p className="text-sm text-slate-400 mt-1">Institutional structure identified correctly.</p>
                    </div>
                </div>
            </div>
        )}
      </div>

      {/* Analysis Panel */}
      {(feedback || rationale) && (
        <div className={cn(
          "mx-8 mb-8 p-8 rounded-3xl border animate-in slide-in-from-bottom-4 duration-500 mt-8",
          status === "passed" ? "bg-emerald-500/5 border-emerald-500/10" : "bg-amber-500/5 border-amber-500/10"
        )}>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
                <div className={cn(
                    "p-3 rounded-2xl",
                    status === "passed" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                )}>
                    {status === "passed" ? <CheckCircle2 size={24} /> : <Lightbulb size={24} />}
                </div>
                <div className="space-y-1">
                    <p className={cn(
                        "text-[10px] font-bold uppercase tracking-[0.2em]",
                        status === "passed" ? "text-emerald-500" : "text-amber-500"
                    )}>
                        {status === "passed" ? "Tactical Confirmation" : "Execution Feedback"}
                    </p>
                    <p className={cn(
                        "text-base font-bold",
                        status === "passed" ? "text-emerald-400" : "text-amber-200"
                    )}>
                        {feedback}
                    </p>
                </div>
            </div>

            {status === "passed" && rationale && (
                <div className="space-y-3 pt-6 border-t border-white/5">
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Institutional Rationale</h5>
                    <p className="text-sm text-slate-400 leading-relaxed italic">
                        {rationale}
                    </p>
                </div>
            )}

            {status === "failed" && (
                <div className="flex items-center justify-end pt-4">
                    <button 
                        onClick={() => {
                            setStatus("idle");
                            setFeedback(null);
                        }}
                        className="text-[10px] font-bold text-white hover:text-amber-500 transition-colors uppercase tracking-widest"
                    >
                        Try Next Candle
                    </button>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
