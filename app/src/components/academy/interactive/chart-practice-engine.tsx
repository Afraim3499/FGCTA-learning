"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
  createChart, 
  IChartApi, 
  ISeriesApi, 
  CandlestickSeries,
  UTCTimestamp,
  MouseEventParams,
  LogicalRange,
} from "lightweight-charts";
import { LogicValidator, ValidationResult } from "@/lib/logic-validator";
import { 
  Target, 
  Square, 
  MousePointer2, 
  Trash2, 
  CheckCircle2, 
  AlertCircle,
  Undo2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AcademyButton } from "@/components/ui/academy-button";
import { 
  AcademyCard, 
  AcademyCardContent, 
  AcademyCardHeader, 
  AcademyCardTitle 
} from "@/components/ui/academy-card";

export interface ChartBox {
  id: string;
  startTime: UTCTimestamp;
  endTime: UTCTimestamp;
  priceMax: number;
  priceMin: number;
  color: string;
}

interface ChartPracticeProps {
  data: any[];
  correctZones?: Array<{
    startTime: UTCTimestamp;
    endTime: UTCTimestamp;
    priceMax: number;
    priceMin: number;
    label: string;
  }>;
  prompt: string;
  onValidate?: (success: boolean, boxes: ChartBox[]) => void;
  moduleId?: string;
  mode?: "practice" | "assessment";
  initialBoxes?: ChartBox[];
  readOnly?: boolean;
}

export function ChartPractice({ 
  data, 
  correctZones = [], 
  prompt, 
  onValidate,
  moduleId,
  mode = "assessment",
  initialBoxes = [],
  readOnly = false
}: ChartPracticeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const [tool, setTool] = useState<"pointer" | "box">("pointer");
  const [boxes, setBoxes] = useState<ChartBox[]>(initialBoxes);
  const [drawingBox, setDrawingBox] = useState<{ startX: number; startY: number; currentX: number; currentY: number } | null>(null);
  const [feedback, setFeedback] = useState<ValidationResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync boxes when initialBoxes changes (for replay)
  useEffect(() => {
    if (initialBoxes.length > 0) {
      setBoxes(initialBoxes);
    }
  }, [initialBoxes]);

  // Initialize Chart
  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      layout: {
        background: { color: "#0A0A0B" },
        textColor: "#94A3B8",
        fontFamily: "'JetBrains Mono', monospace",
      },
      grid: {
        vertLines: { color: "rgba(255, 255, 255, 0.02)" },
        horzLines: { color: "rgba(255, 255, 255, 0.02)" },
      },
      rightPriceScale: {
        borderColor: "rgba(255, 255, 255, 0.05)",
        scaleMargins: { top: 0.2, bottom: 0.2 },
      },
      timeScale: {
        borderColor: "rgba(255, 255, 255, 0.05)",
        timeVisible: true,
      },
      crosshair: {
        mode: 0,
        vertLine: { color: "#0070F3", width: 1, style: 2, labelBackgroundColor: "#0070F3" },
        horzLine: { color: "#0070F3", width: 1, style: 2, labelBackgroundColor: "#0070F3" },
      },
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#00FF00",
      downColor: "#FF0000",
      borderVisible: false,
      wickUpColor: "#00FF00",
      wickDownColor: "#FF0000",
    });

    series.setData(data);
    chart.timeScale().fitContent();

    chartRef.current = chart;
    seriesRef.current = series;

    const handleResize = () => {
      if (containerRef.current) {
        chart.applyOptions({ width: containerRef.current.clientWidth });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  // Handle Box Drawing Events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (tool !== "box" || !containerRef.current || readOnly) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    setDrawingBox({
      startX: e.clientX - rect.left,
      startY: e.clientY - rect.top,
      currentX: e.clientX - rect.left,
      currentY: e.clientY - rect.top,
    });
    setFeedback(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!drawingBox) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    setDrawingBox({
      ...drawingBox,
      currentX: e.clientX - rect.left,
      currentY: e.clientY - rect.top,
    });
  };

  const handleMouseUp = () => {
    if (!drawingBox || !chartRef.current || !seriesRef.current) {
      setDrawingBox(null);
      return;
    }

    const { startX, startY, currentX, currentY } = drawingBox;
    
    // Convert pixels to chart coordinates
    const timeScale = chartRef.current.timeScale();
    const startTime = timeScale.coordinateToTime(startX);
    const endTime = timeScale.coordinateToTime(currentX);
    const priceStart = seriesRef.current.coordinateToPrice(startY);
    const priceEnd = seriesRef.current.coordinateToPrice(currentY);

    if (startTime && endTime && priceStart !== null && priceEnd !== null) {
      const newBox: ChartBox = {
        id: Math.random().toString(36).substr(2, 9),
        startTime: Math.min(startTime as number, endTime as number) as UTCTimestamp,
        endTime: Math.max(startTime as number, endTime as number) as UTCTimestamp,
        priceMax: Math.max(priceStart, priceEnd),
        priceMin: Math.min(priceStart, priceEnd),
        color: "#0070F3",
      };
      setBoxes([...boxes, newBox]);
      setTool("pointer"); // Switch back after drawing
    }

    setDrawingBox(null);
  };

  const validateBoxes = async () => {
    if (correctZones.length === 0 || boxes.length === 0) return;

    const latestBox = boxes[boxes.length - 1];
    let bestResult: ValidationResult | null = null;

    for (const zone of correctZones) {
      const result = LogicValidator.validateZone(latestBox, zone);
      if (result.success) {
        bestResult = result;
        break;
      }
      if (!bestResult || result.code !== "TIME_MISMATCH") {
        bestResult = result;
      }
    }

    if (bestResult) {
      setFeedback(bestResult);
      onValidate?.(bestResult.success, boxes);

      if (mode === "assessment" && moduleId) {
        setIsSubmitting(true);
        try {
          const { submitAssessment } = await import("@/lib/assessment-actions");
          await submitAssessment(moduleId, {
            success: bestResult.success,
            failureType: bestResult.success ? undefined : (bestResult.code as any),
            message: bestResult.message,
            rationale: bestResult.rationale || "No rationale provided.",
            chartState: { boxes }
          });
        } catch (err) {
          console.error("Submission error:", err);
        } finally {
          setIsSubmitting(false);
        }
      }
    }
  };

  const clearBoxes = () => {
    setBoxes([]);
    setFeedback(null);
  };

  const renderBoxes = () => {
    if (!chartRef.current || !seriesRef.current) return null;
    
    return boxes.map(box => {
      const xStart = chartRef.current!.timeScale().timeToCoordinate(box.startTime);
      const xEnd = chartRef.current!.timeScale().timeToCoordinate(box.endTime);
      const yStart = seriesRef.current!.priceToCoordinate(box.priceMax);
      const yEnd = seriesRef.current!.priceToCoordinate(box.priceMin);

      if (xStart === null || xEnd === null || yStart === null || yEnd === null) return null;

      return (
        <div 
          key={box.id}
          className="absolute border-2 border-accent-blue/50 bg-accent-blue/10 backdrop-blur-[1px] group-hover:border-accent-blue transition-all"
          style={{
            left: Math.min(xStart, xEnd),
            top: Math.min(yStart, yEnd),
            width: Math.abs(xEnd - xStart),
            height: Math.abs(yEnd - yStart),
          }}
        >
          <div className="absolute -top-6 left-0 text-[8px] font-extrabold text-accent-blue uppercase tracking-tighter bg-accent-blue/10 px-1 rounded flex items-center gap-1">
            <Target size={8} />
            MARKET_STRUCTURE_L1
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-6 w-full flex-1 min-h-[600px] lg:min-h-0">
      {/* Learning Briefing Header */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <AcademyCard className="lg:col-span-3">
          <AcademyCardContent className="p-6 flex items-center justify-between">
            <div className="flex items-start gap-4">
               <div className="p-3 bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] rounded-2xl">
                  <Target size={24} />
               </div>
               <div className="space-y-1">
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.3em]">Entry Method</div>
                  <h2 className="text-xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">{prompt}</h2>
               </div>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-[var(--ln-border)] shadow-sm">
              <button 
                onClick={() => setTool("pointer")}
                className={cn(
                  "p-3 rounded-xl transition-all",
                  tool === "pointer" ? "bg-[var(--ln-teal-500)] text-white shadow-lg" : "text-slate-400 hover:text-[var(--ln-navy-900)]"
                )}
              >
                <MousePointer2 size={20} />
              </button>
              <button 
                onClick={() => setTool("box")}
                className={cn(
                  "p-3 rounded-xl transition-all",
                  tool === "box" ? "bg-[var(--ln-teal-500)] text-white shadow-lg" : "text-slate-400 hover:text-[var(--ln-navy-900)]"
                )}
              >
                <Square size={20} />
              </button>
              <div className="w-px h-8 bg-slate-100 mx-1" />
              <button 
                onClick={clearBoxes}
                className="p-3 text-slate-400 hover:text-fail-red transition-all"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </AcademyCardContent>
        </AcademyCard>

        <AcademyCard className="lg:col-span-1 flex items-center justify-center text-center">
           <AcademyCardContent className="p-4">
              <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Target Precision</p>
              <p className="text-2xl font-extrabold text-[var(--ln-navy-900)]">99.8%</p>
           </AcademyCardContent>
        </AcademyCard>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        
        {/* Practice Instructions */}
        <div className="lg:col-span-3 space-y-6">
           <AcademyCard className="h-full">
              <AcademyCardHeader>
                 <AcademyCardTitle className="text-xs">Learning Guide</AcademyCardTitle>
              </AcademyCardHeader>
              <AcademyCardContent className="space-y-6">
                 <div className="space-y-4">
                    <div className="flex gap-3">
                       <div className="w-5 h-5 rounded bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-[10px] text-accent-blue font-bold">1</div>
                       <p className="text-xs text-text-secondary leading-relaxed">Select the <Square size={12} className="inline mx-1" /> tool and identify the HTF supply/demand origin.</p>
                    </div>
                    <div className="flex gap-3">
                       <div className="w-5 h-5 rounded bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-[10px] text-accent-blue font-bold">2</div>
                       <p className="text-xs text-text-secondary leading-relaxed">Encapsulate the entire candle wick at the point of impulsive expansion.</p>
                    </div>
                    <div className="flex gap-3">
                       <div className="w-5 h-5 rounded bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-[10px] text-accent-blue font-bold">3</div>
                       <p className="text-xs text-text-secondary leading-relaxed">Click 'Validate Logic' to confirm market alignment.</p>
                    </div>
                 </div>

                 {feedback && (
                   <div className={cn(
                     "p-6 rounded-2xl border animate-in slide-in-from-top-4",
                     feedback.success ? "bg-pass-green/10 border-pass-green/30" : "bg-fail-red/10 border-fail-red/30"
                   )}>
                      <div className="flex items-center gap-2 mb-3">
                         {feedback.success ? <CheckCircle2 size={16} className="text-pass-green" /> : <AlertCircle size={16} className="text-fail-red" />}
                         <span className="text-[10px] font-bold uppercase tracking-widest">{feedback.message}</span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed italic">
                        {feedback.rationale}
                      </p>
                   </div>
                 )}
              </AcademyCardContent>
           </AcademyCard>
        </div>

        {/* Center: Main Chart Canvas */}
        <div className="lg:col-span-9 relative rounded-3xl border border-slate-200 bg-slate-50 p-2 md:p-3 group min-h-[400px] lg:min-h-[520px] flex flex-col">
          <div className="relative flex-1 bg-[#0A0A0B] rounded-2xl">
            <div 
              ref={containerRef} 
              className="absolute inset-0"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{ cursor: tool === "box" ? "crosshair" : "default" }}
          />
          {!readOnly && (
            <div className="absolute top-8 right-8 flex flex-col gap-3 pointer-events-auto">
              <button
                onClick={() => setTool("pointer")}
                className={cn(
                  "p-3 rounded-2xl border transition-all",
                  tool === "pointer" ? "bg-white text-black border-white" : "bg-black/50 text-slate-400 border-white/10 hover:bg-black/80"
                )}
              >
                <MousePointer2 size={20} />
              </button>
              <button
                onClick={() => setTool("box")}
                className={cn(
                  "p-3 rounded-2xl border transition-all",
                  tool === "box" ? "bg-white text-black border-white" : "bg-black/50 text-slate-400 border-white/10 hover:bg-black/80"
                )}
              >
                <Square size={20} />
              </button>
            </div>
          )}
          
          {/* Drawing Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {renderBoxes()}
            {drawingBox && (
              <div 
                className="absolute border-2 border-accent-blue border-dashed bg-accent-blue/10 shadow-[0_0_20px_rgba(0,112,243,0.2)]"
                style={{
                  left: Math.min(drawingBox.startX, drawingBox.currentX),
                  top: Math.min(drawingBox.startY, drawingBox.currentY),
                  width: Math.abs(drawingBox.currentX - drawingBox.startX),
                  height: Math.abs(drawingBox.currentY - drawingBox.startY),
                }}
              />
            )}
          </div>

          {!readOnly && (
            <div className="absolute bottom-8 right-8 flex gap-3 pointer-events-auto">
              <AcademyButton variant="outline" onClick={clearBoxes}>
                <Undo2 className="mr-2" size={16} />
                Reset Analysis
              </AcademyButton>
              <AcademyButton glow onClick={validateBoxes} disabled={boxes.length === 0 || isSubmitting}>
                {isSubmitting ? "SAVING..." : "Validate Logic"}
              </AcademyButton>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

