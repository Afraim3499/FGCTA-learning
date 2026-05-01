"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  createChart,
  IChartApi,
  ISeriesApi,
  CandlestickSeries,
  UTCTimestamp,
} from "lightweight-charts";
import { cn } from "@/lib/utils";
import { DrawnZone, ValidationZone } from "@/lib/trading/chart-scenario-grader";
import { MousePointer2, RotateCcw, CheckCircle2 } from "lucide-react";

export interface CandleDataPoint {
  time:  number;
  open:  number;
  high:  number;
  low:   number;
  close: number;
}

export interface DrawnElement {
  id:        string;
  type:      "horizontal_line" | "box";
  label:     string;
  timeStart?: number;
  timeEnd?:   number;
  priceMin?:  number;
  priceMax?:  number;
  price?:     number;
}

interface ZoneRect {
  x: number;
  y: number;
  width:  number;
  height: number;
  label?: string;
}

interface LineY {
  y: number;
  label?: string;
}

interface ChartMarkupPanelProps {
  candleData:       CandleDataPoint[];
  prompt:           string;
  onElementAdded:   (element: DrawnElement) => void;
  drawnElements:    DrawnElement[];
  activeTool:       { type: "horizontal_line" | "box"; label: string } | null;
  correctElements?: any[] | null; // shown after submission
  passed?:          boolean;
  isReadOnly:       boolean;
}

export function ChartMarkupPanel({
  candleData,
  prompt,
  onElementAdded,
  drawnElements,
  activeTool,
  correctElements,
  passed,
  isReadOnly,
}: ChartMarkupPanelProps) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const chartRef      = useRef<IChartApi | null>(null);
  const seriesRef     = useRef<ISeriesApi<"Candlestick"> | null>(null);

  // Live drawing state
  const [isDrawing,       setIsDrawing]       = useState(false);
  const [startPixel,      setStartPixel]       = useState<{ x: number; y: number } | null>(null);
  const [currentPixel,    setCurrentPixel]     = useState<{ x: number; y: number } | null>(null);

  // Pixel-space derived rects/lines for rendering
  const [elementRects,    setElementRects]     = useState<ZoneRect[]>([]);
  const [elementLines,    setElementLines]     = useState<LineY[]>([]);
  const [correctRects,    setCorrectRects]     = useState<ZoneRect[]>([]);
  const [correctLines,    setCorrectLines]     = useState<LineY[]>([]);

  // ── Chart setup ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      layout:  { background: { color: "transparent" }, textColor: "#9CA3AF" },
      grid:    { vertLines: { color: "rgba(255,255,255,0.05)" }, horzLines: { color: "rgba(255,255,255,0.05)" } },
      rightPriceScale: { borderVisible: false },
      timeScale:       { borderVisible: false, timeVisible: true },
      handleScroll: false,
      handleScale:  false,
      crosshair:    { mode: 0 },
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor:     "#10b981",
      downColor:   "#ef4444",
      borderVisible: false,
      wickUpColor:   "#10b981",
      wickDownColor: "#ef4444",
    });

    series.setData(candleData as any);
    chart.timeScale().fitContent();

    chartRef.current  = chart;
    seriesRef.current = series;

    const handleResize = () => {
      if (containerRef.current) chart.applyOptions({ width: containerRef.current.clientWidth });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [candleData]);

  // ── Sync Drawn Elements to Pixel Space ──────────────────────────────────────
  useEffect(() => {
    if (!chartRef.current || !seriesRef.current) return;

    const timer = setTimeout(() => {
      const chart  = chartRef.current!;
      const series = seriesRef.current!;

      const rects: ZoneRect[] = [];
      const lines: LineY[]    = [];

      drawnElements.forEach(el => {
        if (el.type === "box") {
          const x1 = chart.timeScale().timeToCoordinate(el.timeStart! as UTCTimestamp);
          const x2 = chart.timeScale().timeToCoordinate(el.timeEnd!   as UTCTimestamp);
          const y1 = series.priceToCoordinate(el.priceMax!);
          const y2 = series.priceToCoordinate(el.priceMin!);

          if (x1 !== null && x2 !== null && y1 !== null && y2 !== null) {
            rects.push({
              x: Math.min(x1, x2),
              y: Math.min(y1, y2),
              width: Math.abs(x2 - x1),
              height: Math.abs(y2 - y1),
              label: el.label
            });
          }
        } else if (el.type === "horizontal_line") {
          const y = series.priceToCoordinate(el.price!);
          if (y !== null) {
            lines.push({ y, label: el.label });
          }
        }
      });

      setElementRects(rects);
      setElementLines(lines);
    }, 50);

    return () => clearTimeout(timer);
  }, [drawnElements]);

  // ── Sync Correct Elements to Pixel Space ────────────────────────────────────
  useEffect(() => {
    if (!correctElements || !chartRef.current || !seriesRef.current) return;

    const timer = setTimeout(() => {
      const chart  = chartRef.current!;
      const series = seriesRef.current!;

      const rects: ZoneRect[] = [];
      const lines: LineY[]    = [];

      correctElements.forEach(el => {
        if (el.type === "box") {
          const x1 = chart.timeScale().timeToCoordinate(el.timeStart! as UTCTimestamp);
          const x2 = chart.timeScale().timeToCoordinate(el.timeEnd!   as UTCTimestamp);
          const y1 = series.priceToCoordinate(el.priceMax!);
          const y2 = series.priceToCoordinate(el.priceMin!);

          if (x1 !== null && x2 !== null && y1 !== null && y2 !== null) {
            rects.push({
              x: Math.min(x1, x2),
              y: Math.min(y1, y2),
              width: Math.abs(x2 - x1),
              height: Math.abs(y2 - y1),
              label: el.label
            });
          }
        } else if (el.type === "horizontal_line") {
          const y = series.priceToCoordinate(el.price!);
          if (y !== null) {
            lines.push({ y, label: el.label });
          }
        }
      });

      setCorrectRects(rects);
      setCorrectLines(lines);
    }, 100);

    return () => clearTimeout(timer);
  }, [correctElements]);

  // ── Drawing Logic ───────────────────────────────────────────────────────────
  const getLocalCoords = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isReadOnly || !activeTool || !chartRef.current || !seriesRef.current) return;
    e.preventDefault();
    const coords = getLocalCoords(e);
    setStartPixel(coords);
    setCurrentPixel(coords);
    setIsDrawing(true);
  }, [isReadOnly, activeTool, getLocalCoords]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing) return;
    setCurrentPixel(getLocalCoords(e));
  }, [isDrawing, getLocalCoords]);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing || !startPixel || !chartRef.current || !seriesRef.current || !activeTool) return;
    setIsDrawing(false);

    const endCoords = getLocalCoords(e);
    const chart  = chartRef.current;
    const series = seriesRef.current;

    if (activeTool.type === "box") {
      const x1 = Math.min(startPixel.x, endCoords.x);
      const x2 = Math.max(startPixel.x, endCoords.x);
      const y1 = Math.min(startPixel.y, endCoords.y);
      const y2 = Math.max(startPixel.y, endCoords.y);

      const timeStart = chart.timeScale().coordinateToTime(x1) as number | null;
      const timeEnd   = chart.timeScale().coordinateToTime(x2) as number | null;
      const priceMax  = series.coordinateToPrice(y1);
      const priceMin  = series.coordinateToPrice(y2);

      if (timeStart !== null && timeEnd !== null && priceMax !== null && priceMin !== null) {
        onElementAdded({
          id: Math.random().toString(36).substr(2, 9),
          type: "box",
          label: activeTool.label,
          timeStart,
          timeEnd,
          priceMin,
          priceMax
        });
      }
    } else if (activeTool.type === "horizontal_line") {
      const price = series.coordinateToPrice(endCoords.y);
      if (price !== null) {
        onElementAdded({
          id: Math.random().toString(36).substr(2, 9),
          type: "horizontal_line",
          label: activeTool.label,
          price
        });
      }
    }
  }, [isDrawing, startPixel, activeTool, getLocalCoords, onElementAdded]);

  // Compute live drawing rect/line
  const liveRect: ZoneRect | null =
    isDrawing && startPixel && currentPixel && activeTool?.type === "box"
      ? {
          x:      Math.min(startPixel.x, currentPixel.x),
          y:      Math.min(startPixel.y, currentPixel.y),
          width:  Math.abs(currentPixel.x - startPixel.x),
          height: Math.abs(currentPixel.y - startPixel.y),
        }
      : null;

  const liveLineY: number | null =
    isDrawing && currentPixel && activeTool?.type === "horizontal_line"
      ? currentPixel.y
      : null;

  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* Prompt bar */}
      <div className="px-8 py-5 bg-white border-b border-[var(--ln-border)] shadow-sm shrink-0">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20">
            <MousePointer2 className="w-4 h-4 text-[var(--ln-teal-500)] shrink-0" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-[var(--ln-navy-900)] font-medium leading-relaxed">{prompt}</p>
            {activeTool && !isReadOnly && (
              <p className="text-[10px] text-[var(--ln-teal-500)] font-extrabold uppercase tracking-[0.1em]">
                Active Tool: {activeTool.label}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Chart + overlay */}
      <div
        ref={containerRef}
        className={cn(
          "relative bg-[#0B0E14] select-none flex-1 w-full min-h-[360px] lg:min-h-[420px]",
          !isReadOnly && activeTool && "cursor-crosshair",
          !isReadOnly && !activeTool && "cursor-default"
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => { if (isDrawing) setIsDrawing(false); }}
      >
        {/* Live drawing */}
        {liveRect && (
          <div
            className="absolute pointer-events-none border-2 border-[var(--ln-teal-500)] bg-[var(--ln-teal-500)]/20 rounded-sm"
            style={{ left: liveRect.x, top: liveRect.y, width: liveRect.width, height: liveRect.height }}
          />
        )}
        {liveLineY !== null && (
          <div
            className="absolute left-0 right-0 h-[2px] bg-[var(--ln-teal-500)] pointer-events-none shadow-[0_0_10px_rgba(20,184,166,0.5)]"
            style={{ top: liveLineY }}
          />
        )}

        {/* Drawn Elements (Boxes) */}
        {elementRects.map((rect, i) => (
          <div
            key={`drawn-rect-${i}`}
            className="absolute pointer-events-none border-2 border-[var(--ln-teal-500)] bg-[var(--ln-teal-500)]/15 rounded-sm"
            style={{ left: rect.x, top: rect.y, width: rect.width, height: rect.height }}
          >
             <span className="absolute -top-5 left-0 text-[8px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded bg-[var(--ln-teal-500)] text-white shadow-sm">
              {rect.label}
            </span>
          </div>
        ))}

        {/* Drawn Elements (Lines) */}
        {elementLines.map((line, i) => (
          <div
            key={`drawn-line-${i}`}
            className="absolute left-0 right-0 h-[2px] bg-[var(--ln-teal-500)] pointer-events-none"
            style={{ top: line.y }}
          >
             <span className="absolute -top-4 right-4 text-[8px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded bg-[var(--ln-teal-500)] text-white shadow-sm">
              {line.label}
            </span>
          </div>
        ))}

        {/* Correct Elements (shown after submission) */}
        {correctRects.map((rect, i) => (
          <div
            key={`correct-rect-${i}`}
            className={cn(
              "absolute pointer-events-none border-2 border-dashed rounded-sm",
              passed ? "border-[var(--ln-teal-600)] bg-[var(--ln-teal-500)]/10" : "border-rose-500 bg-rose-500/10"
            )}
            style={{ left: rect.x, top: rect.y, width: rect.width, height: rect.height }}
          >
             <span className={cn(
               "absolute -top-5 left-0 text-[8px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded text-white shadow-sm",
               passed ? "bg-[var(--ln-teal-600)]" : "bg-rose-500"
             )}>
              {passed ? `✓ Correct` : `Target: ${rect.label}`}
            </span>
          </div>
        ))}

        {correctLines.map((line, i) => (
          <div
            key={`correct-line-${i}`}
            className={cn(
              "absolute left-0 right-0 h-[2px] border-t-2 border-dashed pointer-events-none",
              passed ? "border-[var(--ln-teal-600)]" : "border-rose-500"
            )}
            style={{ top: line.y }}
          >
             <span className={cn(
               "absolute -top-4 right-4 text-[8px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded text-white shadow-sm",
               passed ? "bg-[var(--ln-teal-600)]" : "bg-rose-500"
             )}>
              {passed ? `✓ Correct` : `Target: ${line.label}`}
            </span>
          </div>
        ))}

        {/* HUD */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 pointer-events-none">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--ln-teal-500)] animate-pulse" />
            <span className="text-[10px] font-extrabold text-white uppercase tracking-widest">
              Market View · Chart Reference
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
