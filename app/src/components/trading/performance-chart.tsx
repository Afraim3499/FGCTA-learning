"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartData {
  date: string;
  equity: number;
}

interface PerformanceChartProps {
  data: ChartData[];
  startingEquity: number;
}

export function PerformanceChart({ data, startingEquity }: PerformanceChartProps) {
  if (data.length === 0) return null;

  const width = 800;
  const height = 200;
  const padding = 20;

  const allValues = [startingEquity, ...data.map(d => d.equity)];
  const min = Math.min(...allValues) * 0.99;
  const max = Math.max(...allValues) * 1.01;
  const range = max - min;

  const getX = (index: number) => (index / (data.length)) * (width - padding * 2) + padding;
  const getY = (value: number) => height - ((value - min) / range) * (height - padding * 2) - padding;

  const points = [
    { x: getX(0), y: getY(startingEquity) },
    ...data.map((d, i) => ({ x: getX(i + 1), y: getY(d.equity) }))
  ];

  const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(" L ")}`;
  const areaD = `${pathD} L ${points[points.length - 1].x},${height} L ${points[0].x},${height} Z`;

  return (
    <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm col-span-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-slate-400 uppercase tracking-widest">Equity Curve</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[200px] w-full">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
            {/* Grid Lines */}
            <line x1={padding} y1={getY(startingEquity)} x2={width - padding} y2={getY(startingEquity)} stroke="#1e293b" strokeDasharray="4 4" />
            
            {/* Area Fill */}
            <motion.path
              d={areaD}
              fill="url(#gradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            
            {/* Line Path */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Legend */}
          <div className="absolute top-0 right-0 text-[10px] font-mono text-slate-500 flex flex-col gap-1">
            <span>Peak: ${max.toLocaleString()}</span>
            <span>Floor: ${min.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
