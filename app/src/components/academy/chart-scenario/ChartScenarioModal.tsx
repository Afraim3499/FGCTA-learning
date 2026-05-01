"use client";

import { X } from "lucide-react";
import { ChartScenarioEngine } from "./ChartScenarioEngine";
import { CandleDataPoint } from "./ChartMarkupPanel";

interface Scenario {
  id:            string;
  slug:          string;
  title:         string;
  prompt:        string;
  candleData:    CandleDataPoint[];
  passThreshold: number;
  metadata:      Record<string, any>;
}

interface ChartScenarioModalProps {
  scenario: Scenario;
  moduleId: string;
  onClose:  () => void;
  onPass:   () => void;
}

export function ChartScenarioModal({ scenario, moduleId, onClose, onPass }: ChartScenarioModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl h-[90vh] bg-white border border-[var(--ln-border)] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-[var(--ln-navy-900)] transition-all border border-slate-100 shadow-sm"
          aria-label="Close mission"
        >
          <X className="w-5 h-5" />
        </button>

        <ChartScenarioEngine
          scenario={scenario}
          moduleId={moduleId}
          onClose={onClose}
          onPass={onPass}
        />
      </div>
    </div>
  );
}
