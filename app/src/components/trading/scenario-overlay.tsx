"use client";

import { useEffect, useState } from "react";
import { getScenario } from "@/lib/scenario-actions";
import { Target, Info, AlertCircle, CheckCircle2, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScenarioOverlayProps {
  scenarioId: string;
  onScenarioLoaded?: (scenario: any) => void;
}

export function ScenarioOverlay({ scenarioId, onScenarioLoaded }: ScenarioOverlayProps) {
  const [scenario, setScenario] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getScenario(scenarioId);
        setScenario(data);
        if (onScenarioLoaded) onScenarioLoaded(data);
      } catch (error) {
        console.error("Failed to load scenario overlay:", error);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [scenarioId, onScenarioLoaded]);

  if (isLoading) return null;
  if (!scenario) return null;

  return (
    <div className="bg-[#161B22] border border-[var(--color-brand-500)]/20 rounded-2xl p-5 space-y-4 shadow-2xl relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-500)]/5 blur-[40px] pointer-events-none" />
      
      <div className="flex items-center gap-3 border-b border-white/5 pb-3">
        <div className="p-2 bg-[var(--color-brand-500)]/10 rounded-lg text-[var(--color-brand-400)]">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white tracking-tight">{scenario.title}</h3>
          <p className="text-[9px] text-[var(--color-brand-400)] font-bold uppercase tracking-widest">Training Mission Active</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-400 leading-relaxed">
            {scenario.prompt}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
            <span className="text-[8px] font-bold text-slate-500 uppercase block">Instrument</span>
            <span className="text-[10px] font-bold text-white uppercase">{scenario.instrument} Locked</span>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
            <span className="text-[8px] font-bold text-slate-500 uppercase block">Lot Size</span>
            <span className="text-[10px] font-bold text-white">0.01 Fixed</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-1">Mission Requirements</h4>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2 text-[10px] text-slate-400">
              <Shield className="w-3 h-3 text-[var(--color-brand-400)]" />
              <span>Mandatory Stop Loss & Take Profit</span>
            </li>
            <li className="flex items-center gap-2 text-[10px] text-slate-400">
              <Shield className="w-3 h-3 text-[var(--color-brand-400)]" />
              <span>Minimum 2.0R Reward Ratio</span>
            </li>
            <li className="flex items-center gap-2 text-[10px] text-slate-400">
              <Shield className="w-3 h-3 text-[var(--color-brand-400)]" />
              <span>One Valid Execution to Complete</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
