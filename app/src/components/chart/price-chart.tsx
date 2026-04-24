"use client";

// ============================================
// PRICE CHART
// Main chart component — renders OHLCV data as candlestick, line, etc.
// Handles: series creation, data binding, real-time updates, crosshair.
// ============================================

import { useEffect, useRef, useState, useMemo } from "react";
import {
  type ISeriesApi,
  type IChartApi,
  type UTCTimestamp,
  createChart,
  ColorType,
  CandlestickSeries,
  LineSeries,
  AreaSeries,
  BaselineSeries,
  BarSeries,
  HistogramSeries,
} from "lightweight-charts";

import { Loader2, AlertCircle, Activity } from "lucide-react";

/** Cast a number timestamp to lightweight-charts' branded UTCTimestamp type */
const asTime = (t: number) => t as unknown as UTCTimestamp;
import type {
  OHLCV,
  ChartType,
  Timeframe,
  IndicatorConfig,
  Drawing,
  DrawingTool,
} from "@/lib/chart/chart-types";
import { getInstrument, TIMEFRAME_CONFIG } from "@/lib/chart/chart-types";
import { toHeikinAshi } from "@/lib/chart/price-generator";
import { getLatestTick } from "@/lib/chart/chart-actions";
import { TradingEngine, EngineSnapshot } from "@/lib/chart/engine";
import {
  calcSMA,
  calcEMA,
  calcBollingerBands,
  calcRSI,
  calcMACD,
  calcATR,
  calcVWAP,
} from "@/lib/chart/indicator-engine";

// ---- Design tokens ----
const CANDLE_COLORS = {
  upColor: "#10B981",
  downColor: "#EF4444",
  borderUpColor: "#10B981",
  borderDownColor: "#EF4444",
  wickUpColor: "#10B981",
  wickDownColor: "#EF4444",
};

const INDICATOR_COLORS = [
  "#818CF8", // brand purple
  "#F59E0B", // amber
  "#3B82F6", // blue
  "#EC4899", // pink
  "#14B8A6", // teal
  "#A78BFA", // violet
];

// ---- Props ----
interface PriceChartProps {
  data: OHLCV[];
  instrument: string;
  chartType: ChartType;
  timeframe: Timeframe;
  indicators: IndicatorConfig[];
  drawings?: Drawing[];
  activeTool?: DrawingTool | null;
  onDrawingAdd?: (drawing: Drawing) => void;
  onDrawingSelect?: (id: string | null) => void;
  engine?: TradingEngine;
  height?: number;
  onCrosshairMove?: (data: {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  } | null) => void;
  onPriceUpdate?: (price: number) => void;
  tradeMarkers?: {
    time: number;
    position: "aboveBar" | "belowBar";
    color: string;
    shape: "arrowUp" | "arrowDown" | "circle";
    text: string;
  }[];
  onStaleTick?: (time: number, last: number) => void;
  onChartError?: (err: any) => void;
}

export function PriceChart({
  data,
  instrument,
  chartType,
  timeframe,
  indicators,
  drawings = [],
  activeTool,
  onDrawingAdd,
  onDrawingSelect,
  engine,
  height = 500,
  onCrosshairMove,
  onPriceUpdate,
  tradeMarkers,
  onStaleTick,
  onChartError,
}: PriceChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const mainSeriesRef = useRef<ISeriesApi<any> | null>(null);
  const volumeSeriesRef = useRef<ISeriesApi<any> | null>(null);
  const indicatorSeriesRefs = useRef<ISeriesApi<any>[]>([]);
  const drawingSeriesRefs = useRef<ISeriesApi<any>[]>([]);
  const latestPriceRef = useRef<number>(0);
  const tickCounterRef = useRef<number>(0);
  const [inProgressDrawing, setInProgressDrawing] = useState<Drawing | null>(
    null
  );
  const [mousePrice, setMousePrice] = useState<number | null>(null);
  const [mouseTime, setMouseTime] = useState<number | null>(null);
  const [snapshot, setSnapshot] = useState<EngineSnapshot | null>(engine ? engine.getSnapshot() : null);

  const config = getInstrument(instrument);

  const [chartState, setChartState] = useState<"loading" | "ready" | "empty" | "error">("loading");
  const [chartError, setChartError] = useState<string | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);

  // Task 5: Loading State Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      if (chartState === "loading") {
        setChartState("error");
        setChartError("Chart initialization timed out. Check data connection.");
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [chartState]);

  // Sync with engine snapshot for cursor-driven data slicing
  useEffect(() => {
    if (!engine) return;
    const unsub = engine.subscribe((snap) => {
      setSnapshot(snap);
    });
    return unsub;
  }, [engine]);

  // Task 3: Visible candles logic
  // If we are IDLE (not replaying yet), we show all data to allow scenario analysis.
  // Once RUNNING or PAUSED, we use the cursor for replay simulation.
  const cursor = useMemo(() => {
    if (!snapshot || snapshot.status === "idle") return data.length - 1;
    return snapshot.candleIndex;
  }, [snapshot, data.length]);
  
  const visibleData = useMemo(() => {
    if (!data || data.length === 0) {
      setChartState("empty");
      return [];
    }
    
    const sliced = data.slice(0, Math.max(0, cursor + 1)).filter((d: OHLCV) => 
      d && 
      isFinite(d.open) && isFinite(d.high) && isFinite(d.low) && isFinite(d.close) &&
      !isNaN(d.open) && !isNaN(d.high) && !isNaN(d.low) && !isNaN(d.close) &&
      d.time > 0
    );

    if (sliced.length > 0) {
      setChartState("ready");
    } else {
      setChartState("error");
      setChartError("No valid candles found in dataset.");
    }

    return sliced;
  }, [data, cursor]);

  // ---- Snapping Logic ----
  const getSnappedPrice = (time: number, price: number) => {
    if (isNaN(price)) return price;
    const candle = visibleData.find((d) => d.time === time);
    if (!candle) return price;

    const points = [candle.open, candle.high, candle.low, candle.close];
    const threshold = (config.tickSize || 0.01) * 10; // 10 tick snap radius

    let closest = points[0];
    let minDiff = Math.abs(points[0] - price);

    points.forEach((p) => {
      const diff = Math.abs(p - price);
      if (diff < minDiff) {
        minDiff = diff;
        closest = p;
      }
    });

    return minDiff < threshold ? closest : price;
  };

  // ---- Chart creation & data binding ----
  useEffect(() => {
    if (!containerRef.current || visibleData.length === 0) return;

    // Destroy previous chart
    if (chartRef.current) {
      chartRef.current.remove();
      chartRef.current = null;
      mainSeriesRef.current = null;
      volumeSeriesRef.current = null;
      indicatorSeriesRefs.current = [];
      drawingSeriesRefs.current = [];
    }

    const chart = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height,
      layout: {
        background: { type: ColorType.Solid, color: "#0D1117" },
        textColor: "#64748B",
        fontFamily: "'Inter', sans-serif",
        fontSize: 11,
      },
      grid: {
        vertLines: { color: "rgba(255, 255, 255, 0.03)" },
        horzLines: { color: "rgba(255, 255, 255, 0.03)" },
      },
      crosshair: {
        vertLine: {
          color: "rgba(99, 102, 241, 0.4)",
          labelBackgroundColor: "#6366F1",
        },
        horzLine: {
          color: "rgba(99, 102, 241, 0.4)",
          labelBackgroundColor: "#6366F1",
        },
      },
      rightPriceScale: {
        borderColor: "rgba(255, 255, 255, 0.05)",
        scaleMargins: { top: 0.05, bottom: 0.25 },
      },
      timeScale: {
        borderColor: "rgba(255, 255, 255, 0.05)",
        timeVisible: true,
        secondsVisible: false,
      },
    });

    chartRef.current = chart;

    // Process data based on chart type
    const displayData = (chartType === "heikin_ashi" ? toHeikinAshi(visibleData) : visibleData).filter(d =>
      !isNaN(d.open ?? (d as any).value) && !isNaN(d.time)
    );

    // ---- Main series ----
    let mainSeries: ISeriesApi<any>;

    if (chartType === "line") {
      mainSeries = chart.addSeries(LineSeries, {
        color: "#6366F1",
        lineWidth: 2,
        priceFormat: { type: "price", precision: config.pricePrecision, minMove: config.tickSize },
      });
      mainSeries.setData(
        displayData.map((d: OHLCV) => ({ time: asTime(Math.floor(d.time)), value: d.close }))
      );
      lastUpdateTimeRef.current = displayData.length > 0 ? Math.floor(displayData[displayData.length - 1].time) : 0;
    } else if (chartType === "area") {
      mainSeries = chart.addSeries(AreaSeries, {
        lineColor: "#6366F1",
        topColor: "rgba(99, 102, 241, 0.3)",
        bottomColor: "rgba(99, 102, 241, 0.02)",
        lineWidth: 2,
        priceFormat: { type: "price", precision: config.pricePrecision, minMove: config.tickSize },
      });
      mainSeries.setData(
        displayData.map((d: OHLCV) => ({ time: asTime(Math.floor(d.time)), value: d.close }))
      );
      lastUpdateTimeRef.current = displayData.length > 0 ? Math.floor(displayData[displayData.length - 1].time) : 0;
    } else if (chartType === "baseline") {
      const avgPrice = displayData.reduce((s, d) => s + d.close, 0) / displayData.length;
      mainSeries = chart.addSeries(BaselineSeries, {
        baseValue: { type: "price", price: avgPrice },
        topLineColor: "#10B981",
        topFillColor1: "rgba(16, 185, 129, 0.2)",
        topFillColor2: "rgba(16, 185, 129, 0.02)",
        bottomLineColor: "#EF4444",
        bottomFillColor1: "rgba(239, 68, 68, 0.02)",
        bottomFillColor2: "rgba(239, 68, 68, 0.2)",
        lineWidth: 2,
        priceFormat: { type: "price", precision: config.pricePrecision, minMove: config.tickSize },
      });
      mainSeries.setData(
        displayData.map((d: OHLCV) => ({ time: asTime(Math.floor(d.time)), value: d.close }))
      );
      lastUpdateTimeRef.current = displayData.length > 0 ? Math.floor(displayData[displayData.length - 1].time) : 0;
    } else if (chartType === "ohlc") {
      mainSeries = chart.addSeries(BarSeries, {
        upColor: CANDLE_COLORS.upColor,
        downColor: CANDLE_COLORS.downColor,
        priceFormat: { type: "price", precision: config.pricePrecision, minMove: config.tickSize },
      });
      mainSeries.setData(displayData.map((d: OHLCV) => ({ ...d, time: asTime(Math.floor(d.time)) })));
      lastUpdateTimeRef.current = displayData.length > 0 ? Math.floor(displayData[displayData.length - 1].time) : 0;
    } else {
      // candlestick or heikin_ashi
      mainSeries = chart.addSeries(CandlestickSeries, {
        ...CANDLE_COLORS,
        priceFormat: { type: "price", precision: config.pricePrecision, minMove: config.tickSize },
      });
      mainSeries.setData(displayData.map((d: OHLCV) => ({ 
        time: asTime(Math.floor(d.time)), 
        open: d.open ?? 0, 
        high: d.high ?? 0, 
        low: d.low ?? 0, 
        close: d.close ?? 0 
      })));
      lastUpdateTimeRef.current = displayData.length > 0 ? Math.floor(displayData[displayData.length - 1].time) : 0;
    }

    mainSeriesRef.current = mainSeries;

    // ---- Volume pane ----
    const volumeSeries = chart.addSeries(HistogramSeries, {
      color: "rgba(99, 102, 241, 0.3)",
      priceFormat: { type: "volume" },
      priceScaleId: "volume",
    });

    chart.priceScale("volume").applyOptions({
      scaleMargins: { top: 0.85, bottom: 0 },
    });

    volumeSeries.setData(
      visibleData.map((d) => ({
        time: asTime(d.time),
        value: d.volume,
        color:
          d.close >= d.open
            ? "rgba(16, 185, 129, 0.25)"
            : "rgba(239, 68, 68, 0.25)",
      }))
    );
    volumeSeriesRef.current = volumeSeries;

    // ---- Indicators ----
    const newIndicatorSeries: ISeriesApi<any>[] = [];

    indicators.forEach((ind, idx) => {
      const color = INDICATOR_COLORS[idx % INDICATOR_COLORS.length];

      switch (ind.id) {
        case "sma": {
          const smaData = calcSMA(visibleData, ind.params.period ?? 20);
          const series = chart.addSeries(LineSeries, {
            color,
            lineWidth: 1,
            priceScaleId: "right",
          });
          series.setData(smaData.map(d => ({ ...d, time: asTime(d.time) })));
          newIndicatorSeries.push(series);
          break;
        }
        case "ema": {
          const emaData = calcEMA(visibleData, ind.params.period ?? 20);
          const series = chart.addSeries(LineSeries, {
            color,
            lineWidth: 1,
            priceScaleId: "right",
          });
          series.setData(emaData.map(d => ({ ...d, time: asTime(d.time) })));
          newIndicatorSeries.push(series);
          break;
        }
        case "bb": {
          const bb = calcBollingerBands(
            visibleData,
            ind.params.period ?? 20,
            ind.params.stdDev ?? 2
          );
          const upperSeries = chart.addSeries(LineSeries, {
            color: "rgba(99, 102, 241, 0.4)",
            lineWidth: 1,
            lineStyle: 2,
            priceScaleId: "right",
          });
          upperSeries.setData(bb.upper.map(d => ({ ...d, time: asTime(d.time) })));
          const middleSeries = chart.addSeries(LineSeries, {
            color: "rgba(99, 102, 241, 0.6)",
            lineWidth: 1,
            priceScaleId: "right",
          });
          middleSeries.setData(bb.middle.map(d => ({ ...d, time: asTime(d.time) })));
          const lowerSeries = chart.addSeries(LineSeries, {
            color: "rgba(99, 102, 241, 0.4)",
            lineWidth: 1,
            lineStyle: 2,
            priceScaleId: "right",
          });
          lowerSeries.setData(bb.lower.map(d => ({ ...d, time: asTime(d.time) })));
          newIndicatorSeries.push(upperSeries, middleSeries, lowerSeries);
          break;
        }
        case "vwap": {
          const vwapData = calcVWAP(visibleData);
          const series = chart.addSeries(LineSeries, {
            color: "#F59E0B",
            lineWidth: 2,
            lineStyle: 2,
            priceScaleId: "right",
          });
          series.setData(vwapData.map(d => ({ ...d, time: asTime(d.time) })));
          newIndicatorSeries.push(series);
          break;
        }
        case "rsi": {
          const rsiData = calcRSI(visibleData, ind.params.period ?? 14);
          const series = chart.addSeries(LineSeries, {
            color,
            lineWidth: 1,
            priceScaleId: "rsi",
            priceFormat: { type: "price", precision: 1, minMove: 0.1 },
          });
          chart.priceScale("rsi").applyOptions({
            scaleMargins: { top: 0.75, bottom: 0.02 },
            autoScale: true,
          });
          series.setData(rsiData.map(d => ({ ...d, time: asTime(d.time) })));
          newIndicatorSeries.push(series);
          break;
        }
        case "macd": {
          const macdResult = calcMACD(
            visibleData,
            ind.params.fast ?? 12,
            ind.params.slow ?? 26,
            ind.params.signal ?? 9
          );
          const macdLineSeries = chart.addSeries(LineSeries, {
            color: "#3B82F6",
            lineWidth: 1,
            priceScaleId: "macd",
          });
          chart.priceScale("macd").applyOptions({
            scaleMargins: { top: 0.75, bottom: 0.02 },
            autoScale: true,
          });
          macdLineSeries.setData(macdResult.macd.map(d => ({ ...d, time: asTime(d.time) })));

          const signalLineSeries = chart.addSeries(LineSeries, {
            color: "#F59E0B",
            lineWidth: 1,
            priceScaleId: "macd",
          });
          signalLineSeries.setData(macdResult.signal.map(d => ({ ...d, time: asTime(d.time) })));

          const histSeries = chart.addSeries(HistogramSeries, {
            priceScaleId: "macd",
          });
          histSeries.setData(macdResult.histogram.map(d => ({ ...d, time: asTime(d.time) })));

          newIndicatorSeries.push(macdLineSeries, signalLineSeries, histSeries);
          break;
        }
        case "atr": {
          const atrData = calcATR(visibleData, ind.params.period ?? 14);
          const series = chart.addSeries(LineSeries, {
            color,
            lineWidth: 1,
            priceScaleId: "atr",
          });
          chart.priceScale("atr").applyOptions({
            scaleMargins: { top: 0.75, bottom: 0.02 },
            autoScale: true,
          });
          series.setData(atrData.map(d => ({ ...d, time: asTime(d.time) })));
          newIndicatorSeries.push(series);
          break;
        }
      }
    });

    indicatorSeriesRefs.current = newIndicatorSeries;

    // ---- Drawings ----
    const newDrawingSeries: ISeriesApi<any>[] = [];
    drawings.forEach((drawing) => {
      if (drawing.tool === "trendline" || drawing.tool === "horizontal") {
        const series = chart.addSeries(LineSeries, {
          color: drawing.color,
          lineWidth: (drawing.lineWidth || 2) as any,
          lastValueVisible: false,
          priceLineVisible: false,
          crosshairMarkerVisible: false,
        });
        series.setData(
          drawing.points.map((p) => ({ time: asTime(p.time), value: p.price }))
        );
        newDrawingSeries.push(series);
      } else if (drawing.tool === "rectangle" && drawing.points.length >= 2) {
        const p1 = drawing.points[0];
        const p2 = drawing.points[1];
        const series = chart.addSeries(LineSeries, {
          color: drawing.color,
          lineWidth: 1,
          lastValueVisible: false,
          priceLineVisible: false,
          crosshairMarkerVisible: false,
        });
        const tMin = Math.min(p1.time, p2.time);
        const tMax = Math.max(p1.time, p2.time);
        series.setData([
          { time: asTime(tMin), value: p1.price },
          { time: asTime(tMax), value: p1.price },
          { time: asTime(tMax), value: p2.price },
        ]);
        newDrawingSeries.push(series);
      }
    });
    drawingSeriesRefs.current = newDrawingSeries;

    // ---- Crosshair / Mouse listener ----
    chart.subscribeCrosshairMove((param) => {
      if (param.time) setMouseTime(param.time as number);

      if (onCrosshairMove) {
        if (!param.time || !param.seriesData) {
          onCrosshairMove(null);
          return;
        }
        const mainData = param.seriesData.get(mainSeries) as any;
        const volData = param.seriesData.get(volumeSeries) as any;
        if (mainData) {
          onCrosshairMove({
            time: param.time as number,
            open: mainData.open ?? mainData.value ?? 0,
            high: mainData.high ?? mainData.value ?? 0,
            low: mainData.low ?? mainData.value ?? 0,
            close: mainData.close ?? mainData.value ?? 0,
            volume: volData?.value ?? 0,
          });
        }
      }

      // Handle Mouse Move for Drawing
      if (activeTool && param.time && param.point) {
        const price = mainSeries.coordinateToPrice(param.point.y);
        if (price !== null) {
          const snappedPrice = getSnappedPrice(param.time as number, price);
          setMousePrice(snappedPrice);

          if (inProgressDrawing) {
            setInProgressDrawing({
              ...inProgressDrawing,
              points: [
                inProgressDrawing.points[0],
                { time: param.time as number, price: snappedPrice },
              ],
            });
          }
        }
      }
    });

    // Handle Click for Drawing
    const handleChartClick = (param: any) => {
      if (!param.point || !param.time) return;

      const price = mainSeries.coordinateToPrice(param.point.y);
      if (price === null) return;

      if (!activeTool) {
        if (onDrawingSelect) {
          let nearestId: string | null = null;
          let minPriceDist = config.tickSize * 50; 

          drawings.forEach((d) => {
            d.points.forEach((p) => {
              const timeDist = Math.abs(p.time - (param.time as number));
              const priceDist = Math.abs(p.price - price);
              if (timeDist <= TIMEFRAME_CONFIG[timeframe].seconds && priceDist < minPriceDist) {
                minPriceDist = priceDist;
                nearestId = d.id;
              }
            });
          });
          onDrawingSelect(nearestId);
        }
        return;
      }

      const snappedPrice = getSnappedPrice(param.time as number, price);

      if (!inProgressDrawing) {
        setInProgressDrawing({
          id: Math.random().toString(36).substring(2, 9),
          tool: activeTool,
          points: [{ time: param.time as number, price: snappedPrice }],
          color: "#818CF8",
          lineWidth: 2,
          createdAt: cursor,
        });
      } else {
        const finalized: Drawing = {
          ...inProgressDrawing,
          points: [
            inProgressDrawing.points[0],
            { time: param.time as number, price: snappedPrice },
          ],
        };
        onDrawingAdd?.(finalized);
        setInProgressDrawing(null);
      }
    };

    chart.subscribeClick(handleChartClick);

    // Track latest price
    if (visibleData.length > 0) {
      latestPriceRef.current = visibleData[visibleData.length - 1].close;
    }

    chart.timeScale().fitContent();

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        if (width > 0) chart.applyOptions({ width });
      }
    });
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      chart.remove();
      chartRef.current = null;
      mainSeriesRef.current = null;
      volumeSeriesRef.current = null;
      indicatorSeriesRefs.current = [];
    };
  }, [
    indicators,
    drawings,
    engine,
    snapshot?.candleIndex,
    activeTool,
    inProgressDrawing,
  ]);

  // ---- Real-time tick updates (Phase 5 Imperative Feed) ----
  useEffect(() => {
    if (!engine || !mainSeriesRef.current) return;

    const onPriceTick = (tick: any) => {
      if (!mainSeriesRef.current || !tick || typeof tick.price !== "number" || isNaN(tick.price)) return;
      
      const lastCandle = data[cursor];
      if (!lastCandle || typeof lastCandle.time !== "number") return;

      const time = Math.floor(lastCandle.time);
      
      // Prevent updating with older time or if series is not ready
      if (time < lastUpdateTimeRef.current) {
        onStaleTick?.(time, lastUpdateTimeRef.current);
        return;
      }
      
      // Update the tracking ref to ensure monotonic updates
      lastUpdateTimeRef.current = time;

      const candleUpdate = {
        time: asTime(time),
        open: lastCandle.open,
        high: Math.max(lastCandle.high, tick.price),
        low: Math.min(lastCandle.low, tick.price),
        close: tick.price,
      };

      try {
        if (chartType === "line" || chartType === "area" || chartType === "baseline") {
          mainSeriesRef.current.update({
            time: asTime(time),
            value: tick.price,
          });
        } else {
          mainSeriesRef.current.update(candleUpdate);
        }
      } catch (err) {
        onChartError?.(err);
        console.warn("[PriceChart] Update suppressed to prevent crash:", err);
      }
      
      onPriceUpdate?.(tick.price);
    };

    const onReset = () => {
      lastUpdateTimeRef.current = 0;
      if (chartRef.current && mainSeriesRef.current) {
        const displayData = chartType === "heikin_ashi" ? toHeikinAshi(data.slice(0, 1)) : data.slice(0, 1);
        mainSeriesRef.current.setData(displayData.map(d => ({ ...d, time: asTime(d.time) })));
        chartRef.current.timeScale().fitContent();
      }
    };

    engine.eventBus.on("PRICE_TICK", onPriceTick);
    engine.eventBus.on("ENGINE_RESET", onReset);

    return () => {
      engine.eventBus.off("PRICE_TICK", onPriceTick);
      engine.eventBus.off("ENGINE_RESET", onReset);
    };
  }, [engine, chartType, data, cursor, onPriceUpdate]);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl overflow-hidden relative"
      style={{ height }}
    >
      {chartState === "loading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D1117] text-slate-500 gap-4 z-30">
          <Loader2 className="w-8 h-8 animate-spin text-[#6366F1]" />
          <span className="text-sm font-medium animate-pulse">Initializing chart...</span>
        </div>
      )}

      {chartState === "empty" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D1117] text-slate-500 gap-4 z-30">
          <Activity className="w-8 h-8 opacity-20" />
          <span className="text-sm font-medium uppercase tracking-widest">No market data loaded</span>
        </div>
      )}

      {chartState === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D1117] text-rose-500/50 gap-4 p-10 text-center z-30">
          <AlertCircle className="w-8 h-8" />
          <div className="space-y-1">
            <p className="text-sm font-bold uppercase tracking-tight text-rose-500">Initialization Failed</p>
            <p className="text-[10px] text-slate-500 leading-relaxed">{chartError || "Unknown error"}</p>
          </div>
        </div>
      )}

      {snapshot && (
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 pointer-events-none">
          <div className="flex items-center gap-2 bg-[#161B22]/90 border border-white/10 rounded-lg px-3 py-1.5 shadow-2xl backdrop-blur-md">
            <div
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                snapshot.status === "running" ? "bg-emerald-500" : "bg-amber-500"
              }`}
            />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">
              {snapshot.status === "running" ? "Simulation Active" : "Simulation Paused"}
            </span>
            <div className="w-px h-3 bg-white/10 mx-1" />
            <span className="text-[10px] font-mono text-slate-400">
              Bar {snapshot.candleIndex + 1} / {data.length}
            </span>
            <div className="w-px h-3 bg-white/10 mx-1" />
            <span className="text-[10px] font-bold text-[#6366F1]">
              {snapshot.speed}x
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
