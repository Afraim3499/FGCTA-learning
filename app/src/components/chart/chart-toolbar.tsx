"use client";

// ============================================
// CHART TOOLBAR
// Controls: instrument, timeframe, chart type, indicators, drawings.
// ============================================

import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Layers,
  Minus,
  Maximize2,
  Camera,
  ChevronDown,
  X,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  Timeframe,
  ChartType,
  IndicatorConfig,
  IndicatorId,
  DrawingTool,
} from "@/lib/chart/chart-types";
import {
  TIMEFRAME_CONFIG,
  CHART_TYPES,
  INDICATOR_DEFAULTS,
  DRAWING_TOOLS,
  INSTRUMENTS,
} from "@/lib/chart/chart-types";

interface ChartToolbarProps {
  instrument: string;
  timeframe: Timeframe;
  chartType: ChartType;
  indicators: IndicatorConfig[];
  onInstrumentChange: (symbol: string) => void;
  onTimeframeChange: (tf: Timeframe) => void;
  onChartTypeChange: (type: ChartType) => void;
  onIndicatorsChange: (indicators: IndicatorConfig[]) => void;
  onDrawingToolSelect?: (tool: DrawingTool | null) => void;
  allowedInstruments?: string[];
  className?: string;
  /** OHLCV data under crosshair */
  crosshairData?: {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  } | null;
  currentPrice?: number;
  instrumentDecimals?: number;
}

export function ChartToolbar({
  instrument,
  timeframe,
  chartType,
  indicators,
  onInstrumentChange,
  onTimeframeChange,
  onChartTypeChange,
  onIndicatorsChange,
  onDrawingToolSelect,
  allowedInstruments,
  className,
  crosshairData,
  currentPrice,
  instrumentDecimals = 5,
}: ChartToolbarProps) {
  const filteredInstruments = allowedInstruments 
    ? INSTRUMENTS.filter(inst => allowedInstruments.includes(inst.symbol))
    : INSTRUMENTS;

  const [showIndicatorPanel, setShowIndicatorPanel] = useState(false);
  const [showChartTypePanel, setShowChartTypePanel] = useState(false);

  const toggleIndicator = (id: IndicatorId) => {
    const exists = indicators.find((ind) => ind.id === id);
    if (exists) {
      onIndicatorsChange(indicators.filter((ind) => ind.id !== id));
    } else {
      const defaults = INDICATOR_DEFAULTS[id];
      onIndicatorsChange([
        ...indicators,
        { id, params: { ...defaults.defaultParams }, visible: true },
      ]);
    }
  };

  const currentChartTypeLabel =
    CHART_TYPES.find((ct) => ct.id === chartType)?.label ?? "Candlestick";

  return (
    <div className={cn("space-y-0", className)}>
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-[#0D1117] border border-[rgba(255,255,255,0.05)] rounded-t-2xl px-4 py-2">
        {/* Left: Instrument + Timeframes */}
        <div className="flex items-center gap-1">
          {/* Instrument Selector */}
          {filteredInstruments.map((inst) => (
            <button
              key={inst.symbol}
              onClick={() => onInstrumentChange(inst.symbol)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all",
                instrument === inst.symbol
                  ? "bg-[#6366F1]/15 text-[#818CF8] border border-[#6366F1]/30"
                  : "text-[#64748B] hover:text-white hover:bg-white/5"
              )}
            >
              {inst.symbol}
            </button>
          ))}

          <div className="w-px h-5 bg-white/5 mx-2" />

          {/* Timeframes */}
          {(Object.keys(TIMEFRAME_CONFIG) as Timeframe[]).map((tf) => (
            <button
              key={tf}
              onClick={() => onTimeframeChange(tf)}
              className={cn(
                "px-2.5 py-1.5 rounded-lg text-[10px] font-bold tracking-widest transition-all",
                timeframe === tf
                  ? "bg-white/10 text-white"
                  : "text-[#64748B] hover:text-white hover:bg-white/5"
              )}
            >
              {TIMEFRAME_CONFIG[tf].label}
            </button>
          ))}
        </div>

        {/* Right: Chart Type + Indicators + Drawings */}
        <div className="flex items-center gap-1">
          {/* Chart Type */}
          <div className="relative">
            <button
              onClick={() => {
                setShowChartTypePanel(!showChartTypePanel);
                setShowIndicatorPanel(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-[#64748B] hover:text-white hover:bg-white/5 transition-all"
            >
              <BarChart3 size={12} />
              {currentChartTypeLabel}
              <ChevronDown size={10} />
            </button>

            {showChartTypePanel && (
              <div className="absolute top-full right-0 mt-1 w-48 bg-[#161B22] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
                {CHART_TYPES.map((ct) => (
                  <button
                    key={ct.id}
                    onClick={() => {
                      onChartTypeChange(ct.id);
                      setShowChartTypePanel(false);
                    }}
                    className={cn(
                      "w-full px-4 py-2.5 text-left text-xs font-bold transition-all",
                      chartType === ct.id
                        ? "bg-[#6366F1]/15 text-[#818CF8]"
                        : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {ct.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Indicators */}
          <div className="relative">
            <button
              onClick={() => {
                setShowIndicatorPanel(!showIndicatorPanel);
                setShowChartTypePanel(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-[#64748B] hover:text-white hover:bg-white/5 transition-all"
            >
              <Layers size={12} />
              Indicators
              {indicators.length > 0 && (
                <span className="ml-1 w-4 h-4 rounded-full bg-[#6366F1] text-white text-[8px] flex items-center justify-center">
                  {indicators.length}
                </span>
              )}
              <ChevronDown size={10} />
            </button>

            {showIndicatorPanel && (
              <div className="absolute top-full right-0 mt-1 w-64 bg-[#161B22] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
                <div className="p-3 border-b border-white/5">
                  <span className="text-[9px] font-bold text-[#64748B] uppercase tracking-widest">
                    Toggle Indicators
                  </span>
                </div>
                {(
                  Object.entries(INDICATOR_DEFAULTS) as [
                    IndicatorId,
                    (typeof INDICATOR_DEFAULTS)[IndicatorId]
                  ][]
                ).map(([id, def]) => {
                  const active = indicators.some((ind) => ind.id === id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggleIndicator(id)}
                      className={cn(
                        "w-full px-4 py-2.5 text-left text-xs font-bold flex items-center justify-between transition-all",
                        active
                          ? "bg-[#6366F1]/10 text-[#818CF8]"
                          : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span>
                        {def.label}
                        <span className="text-[9px] text-[#64748B] ml-2 font-mono">
                          {def.pane === "overlay" ? "overlay" : "pane"}
                        </span>
                      </span>
                      {active ? (
                        <X size={12} className="text-[#EF4444]" />
                      ) : (
                        <Plus size={12} className="text-[#64748B]" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Drawing Tools */}
          <div className="flex items-center gap-0.5">
            {DRAWING_TOOLS.map((tool) => (
              <button
                key={tool.id}
                onClick={() => onDrawingToolSelect?.(tool.id)}
                title={tool.label}
                className="p-1.5 rounded-lg text-[#64748B] hover:text-white hover:bg-white/5 transition-all"
              >
                {tool.id === "trendline" && <TrendingUp size={13} />}
                {tool.id === "horizontal" && <Minus size={13} />}
                {tool.id === "fibonacci" && (
                  <span className="text-[10px] font-bold">FIB</span>
                )}
                {tool.id === "rectangle" && <Maximize2 size={13} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* OHLCV Data Bar (crosshair readout) */}
      <div className="flex items-center gap-4 bg-[#0D1117]/80 border-x border-[rgba(255,255,255,0.05)] px-4 py-1.5 text-[10px] font-mono">
        {crosshairData ? (
          <>
            <span className="text-[#64748B]">
              O{" "}
              <span className="text-white">
                {crosshairData.open.toFixed(instrumentDecimals)}
              </span>
            </span>
            <span className="text-[#64748B]">
              H{" "}
              <span className="text-[#10B981]">
                {crosshairData.high.toFixed(instrumentDecimals)}
              </span>
            </span>
            <span className="text-[#64748B]">
              L{" "}
              <span className="text-[#EF4444]">
                {crosshairData.low.toFixed(instrumentDecimals)}
              </span>
            </span>
            <span className="text-[#64748B]">
              C{" "}
              <span
                className={
                  crosshairData.close >= crosshairData.open
                    ? "text-[#10B981]"
                    : "text-[#EF4444]"
                }
              >
                {crosshairData.close.toFixed(instrumentDecimals)}
              </span>
            </span>
            <span className="text-[#64748B]">
              Vol{" "}
              <span className="text-[#818CF8]">
                {crosshairData.volume.toLocaleString()}
              </span>
            </span>
          </>
        ) : currentPrice ? (
          <span className="text-[#64748B]">
            Last{" "}
            <span className="text-white font-bold">
              {currentPrice.toFixed(instrumentDecimals)}
            </span>
          </span>
        ) : (
          <span className="text-[#64748B]">Hover chart for data</span>
        )}
      </div>
    </div>
  );
}
