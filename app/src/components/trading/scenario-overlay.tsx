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
    <div className="bg-white border border-[var(--ln-border)] rounded-[2rem] p-6 space-y-4 shadow-sm relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--ln-teal-soft)] blur-[40px] pointer-events-none" />

      <div className="flex items-center gap-3 border-b border-[var(--ln-border-soft)] pb-4">
        <div className="p-2.5 bg-[var(--ln-teal-soft)] rounded-xl text-[var(--ln-teal-500)]">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">{scenario.title}</h3>
          <p className="text-[9px] text-[var(--ln-teal-600)] font-extrabold uppercase tracking-widest">Training Mission Active</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex gap-3">
          <div className="mt-1">
            <Info size={14} className="text-[var(--ln-text-muted)]" />
          </div>
          <p className="text-xs font-medium text-[var(--ln-text-secondary)] leading-relaxed">
            {scenario.prompt}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-[var(--ln-bg-soft)] rounded-2xl border border-[var(--ln-border)] space-y-1">
            <span className="text-[8px] font-bold text-[var(--ln-text-muted)] uppercase block tracking-wider">Instrument</span>
            <span className="text-xs font-extrabold text-[var(--ln-navy-900)] uppercase">{scenario.instrument}</span>
          </div>
          <div className="p-4 bg-[var(--ln-bg-soft)] rounded-2xl border border-[var(--ln-border)] space-y-1">
            <span className="text-[8px] font-bold text-[var(--ln-text-muted)] uppercase block tracking-wider">Parameters</span>
            <span className="text-xs font-extrabold text-[var(--ln-navy-900)]">Fixed Entry</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-[9px] font-extrabold text-[var(--ln-text-muted)] uppercase tracking-widest px-1">Mission Requirements</h4>
          <ul className="space-y-2">
            {[
              "Mandatory Stop Loss & Take Profit",
              "Minimum 2.0R Reward Ratio",
              "One Valid Method to Complete"
            ].map((req, i) => (
              <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-[var(--ln-text-secondary)]">
                <Shield className="w-3.5 h-3.5 text-[var(--ln-teal-500)]" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
