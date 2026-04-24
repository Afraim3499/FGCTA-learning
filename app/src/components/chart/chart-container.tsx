"use client";

// ============================================
// CHART CONTAINER
// React wrapper for lightweight-charts.
// Handles: initialization, resizing, theme, cleanup.
// ============================================

import {
  createChart,
  type IChartApi,
  type DeepPartial,
  type ChartOptions,
  ColorType,
} from "lightweight-charts";
import {
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
  type ReactNode,
} from "react";

// ---- Design system token bridge ----
const CHART_THEME: DeepPartial<ChartOptions> = {
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
    scaleMargins: { top: 0.1, bottom: 0.2 },
  },
  timeScale: {
    borderColor: "rgba(255, 255, 255, 0.05)",
    timeVisible: true,
    secondsVisible: false,
  },
};

// ---- React Context ----
interface ChartContextValue {
  chart: IChartApi | null;
}

const ChartContext = createContext<ChartContextValue>({ chart: null });
export const useChart = () => useContext(ChartContext);

// ---- Component ----

interface ChartContainerProps {
  children?: ReactNode;
  height?: number;
  className?: string;
}

export function ChartContainer({
  children,
  height = 500,
  className = "",
}: ChartContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const [chart, setChart] = useState<IChartApi | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create chart
    const c = createChart(containerRef.current, {
      ...CHART_THEME,
      width: containerRef.current.clientWidth,
      height,
      autoSize: false,
    });

    chartRef.current = c;
    setChart(c);

    // Resize observer for responsive behavior
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        if (width > 0) {
          c.applyOptions({ width });
        }
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      c.remove();
      chartRef.current = null;
      setChart(null);
    };
  }, [height]);

  return (
    <ChartContext.Provider value={{ chart }}>
      <div
        ref={containerRef}
        className={`relative rounded-2xl overflow-hidden ${className}`}
        style={{ height }}
      />
      {children}
    </ChartContext.Provider>
  );
}
