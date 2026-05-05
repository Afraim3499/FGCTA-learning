"use client";

import { useState, useEffect } from "react";
import { useNava } from "@/hooks/useNava";
import { STRATEGIES_DATA, StrategyDefinition } from "@/lib/strategies-data";
import { 
  Search, 
  BookOpen, 
  Target, 
  AlertTriangle, 
  ChevronRight, 
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  X
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AcademyButton } from "@/components/ui/academy-button";
import { DataBadge } from "@/components/ui/data-badge";
import { AcademyCard, AcademyCardContent, AcademyCardHeader, AcademyCardTitle } from "@/components/ui/academy-card";
import { ChartPractice } from "@/components/academy/interactive/chart-practice-engine"; 

import { generateMockCandles, getConceptCandles } from "@/lib/utils/market";

interface StrategyLabClientProps {
  userTrack: string;
  completedModuleNumbers: Set<string>;
  initialSavedAnalyses: any[];
  dbStrategies: any[];
}

const PRIMARY_TABS = ["Core Concepts", "Market Logic", "Risk & Bias", "Saved"] as const;
type PrimaryTab = typeof PRIMARY_TABS[number];

const CATEGORY_MAP: Record<string, PrimaryTab> = {
  "Trend Following": "Core Concepts",
  "Trend Structure": "Core Concepts",
  "Trend following": "Core Concepts",
  "Trend structure": "Core Concepts",
  "Breakout": "Core Concepts",
  "Reversal": "Core Concepts",
  "PA": "Core Concepts",
  "SR": "Core Concepts",
  "Market Specific Edge": "Market Logic",
  "On-Chain Analytics": "Market Logic",
  "Macro Drivers": "Market Logic",
  "Seasonal Patterns": "Market Logic",
  "Derivatives & Funding": "Market Logic",
  "Risk Management": "Risk & Bias",
  "Decision Logic": "Risk & Bias",
  "VM": "Risk & Bias",
};

export function StrategyLabClient({ 
  userTrack, 
  completedModuleNumbers, 
  initialSavedAnalyses,
  dbStrategies 
}: StrategyLabClientProps) {
  const { triggerMessage, setSuppressed } = useNava();
  const [activeTab, setActiveTab] = useState<PrimaryTab>("Core Concepts");
  const [search, setSearch] = useState("");
  const [allScenarios, setAllScenarios] = useState<any[]>([]);
  const [selectedStrategy, setSelectedStrategy] = useState<StrategyDefinition | null>(null);

  // Fetch all scenarios for search
  useEffect(() => {
    async function loadScenarios() {
      try {
        const { getAllScenarios } = await import("@/lib/scenario-actions");
        const scenarios = await getAllScenarios();
        setAllScenarios(scenarios);
      } catch (err) {
        console.error("Failed to load scenarios for Lab search:", err);
      }
    }
    loadScenarios();
  }, []);
  
  // Practice State
  const [isPracticing, setIsPracticing] = useState(false);
  const [practiceCandles, setPracticeCandles] = useState<any[]>([]);
  const [forgeBias, setForgeBias] = useState<"bullish" | "bearish" | "neutral">("neutral");
  const [forgeRationale, setForgeRationale] = useState("");
  const [checklistState, setChecklistState] = useState<string[]>([]);
  const [drawnBoxes, setDrawnBoxes] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // Sync suppression with practice state
  useEffect(() => {
    setSuppressed(isPracticing);
    return () => setSuppressed(false);
  }, [isPracticing, setSuppressed]);

  // Saved Analyses
  const [savedAnalyses, setSavedAnalyses] = useState(initialSavedAnalyses);
  const [viewingAnalysis, setViewingAnalysis] = useState<any | null>(null);

  // Sync state with props when server-side refresh occurs
  useEffect(() => {
    setSavedAnalyses(initialSavedAnalyses);
  }, [initialSavedAnalyses]);

  // Trigger journal empty tip
  useEffect(() => {
    if (activeTab === "Saved" && savedAnalyses.length === 0) {
      triggerMessage('journal_empty_tip');
    }
  }, [activeTab, savedAnalyses.length, triggerMessage]);

  // Filter strategies
  const availableStrategies = STRATEGIES_DATA.filter(s => 
    s.track === "core" || s.track === userTrack || userTrack === "multi"
  );

  const filteredStrategies = availableStrategies.filter(s => {
    const safeLower = (val: unknown) => (typeof val === 'string' ? val.toLowerCase() : '');
    const query = search.toLowerCase();
    const matchesSearch = safeLower(s.name).includes(query) || 
                          safeLower(s.logicId).includes(query);
    
    // Fallback unmapped to Core Concepts
    const mappedTab = CATEGORY_MAP[s.family] || "Core Concepts";
    const matchesTab = mappedTab === activeTab;
    
    return matchesSearch && matchesTab;
  });

  // Filter missions
  const filteredMissions = allScenarios.filter(s => {
    const safeLower = (val: unknown) => (typeof val === 'string' ? val.toLowerCase() : '');
    const query = search.toLowerCase();
    if (!search.trim()) return false;
    return safeLower(s.title).includes(query) || 
           safeLower(s.description).includes(query);
  });

  const handleSaveAnalysis = async (boxes: any[]) => {
    if (!selectedStrategy && !viewingAnalysis) return;
    setIsSaving(true);
    try {
      const { saveAnalysis } = await import("@/lib/academy-actions");
      const result = await saveAnalysis({
        assetClass: userTrack,
        instrument: practiceCandles[practiceCandles.length - 1]?.symbol || "EURUSD",
        timeframe: practiceCandles[practiceCandles.length - 1]?.timeframe || "1H",
        bias: forgeBias,
        rationale: forgeRationale,
        chartState: {
          boxes: drawnBoxes,
          checklist: checklistState,
          logicId: effectiveStrategy?.logicId,
          candles: practiceCandles, // CRITICAL: Save candles for replay
        }
      });

      if (result?.success) {
        setSavedAnalyses([result.analysis, ...savedAnalyses]);
        setIsPracticing(false);
        resetPracticeState();
        triggerMessage('journal_success');
      } else {
        console.error("Failed to save analysis:", result?.error);
        alert("Failed to save to journal. Check connection.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const resetPracticeState = () => {
    setForgeRationale("");
    setForgeBias("neutral");
    setChecklistState([]);
    setDrawnBoxes([]);
    // Candles will be set when selecting strategy
  };

  const handleSelectStrategy = (s: StrategyDefinition) => {
    setSelectedStrategy(s);
    setIsPracticing(false);
    setViewingAnalysis(null);
    resetPracticeState();
    setPracticeCandles(getConceptCandles(s.logicId));
  };

  const handleSelectAnalysis = (analysis: any) => {
    setViewingAnalysis(analysis);
    setIsPracticing(true);
    setPracticeCandles(analysis.chartState?.candles || []);
    setChecklistState(analysis.chartState?.checklist || []);
    setDrawnBoxes(analysis.chartState?.boxes || []);
    setForgeBias(analysis.bias || "neutral");
  };

  const effectiveStrategy = selectedStrategy || 
    (viewingAnalysis?.chartState?.logicId ? 
      STRATEGIES_DATA.find(s => s.logicId === viewingAnalysis.chartState.logicId) : 
      null);

  return (
    <div className="flex flex-col h-full gap-6 overflow-hidden">
      
      {/* 4 Primary Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar shrink-0">
        {PRIMARY_TABS.map(tab => (
          <button
            key={tab}
            data-nava-target={tab === "Saved" ? "saved-analysis-tab" : undefined}
            onClick={() => {
               setActiveTab(tab);
               setSelectedStrategy(null);
               setIsPracticing(false);
               setViewingAnalysis(null);
               resetPracticeState();
            }}
            className={cn(
              "px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap",
              activeTab === tab 
                ? "bg-[var(--ln-teal-soft)] text-[var(--ln-teal-600)] border border-[var(--ln-teal-500)]/20 shadow-sm" 
                : "bg-white text-[var(--ln-text-secondary)] border border-[var(--ln-border)] hover:bg-slate-50 hover:text-[var(--ln-navy-900)]"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row flex-1 gap-8 overflow-hidden">
        
        {/* LEFT LIST PANEL */}
        <div className={cn(
          "w-full lg:w-[380px] flex-col gap-4 shrink-0 overflow-hidden",
          (selectedStrategy || viewingAnalysis || isPracticing) ? "hidden lg:flex" : "flex"
        )}>
          {activeTab !== "Saved" && (
            <div className="relative shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search concepts, lessons, or terms..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[var(--ln-border)] rounded-xl text-sm text-[var(--ln-navy-900)] font-medium focus:outline-none focus:border-[var(--ln-teal-500)]/50 transition-all shadow-sm placeholder:text-slate-400"
              />
            </div>
          )}

          <div className="flex-1 overflow-y-auto pr-2 pb-12 space-y-3 custom-scrollbar">
            {search.trim() !== "" && filteredMissions.length > 0 && (
              <div className="space-y-3 px-1 mb-6">
                <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest pl-2">Matching Missions</h3>
                <div className="grid grid-cols-1 gap-2">
                  {filteredMissions.map(mission => (
                    <Link 
                      key={mission.id}
                      href={`/trading?scenario=${mission.slug}`}
                      className="p-3 bg-white border border-[var(--ln-border)] rounded-xl hover:border-[var(--ln-teal-500)]/30 hover:shadow-md transition-all group flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-[var(--ln-teal-soft)] rounded-lg group-hover:scale-105 transition-transform">
                          <Target className="w-3.5 h-3.5 text-[var(--ln-teal-500)]" />
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold text-[var(--ln-navy-900)] leading-none">{mission.title}</h4>
                          <p className="text-[9px] text-slate-500 line-clamp-1 mt-1">{mission.description}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[var(--ln-teal-500)] transition-colors" />
                    </Link>
                  ))}
                </div>
                <div className="h-px bg-slate-100 mt-4 mb-2" />
              </div>
            )}
            {activeTab !== "Saved" ? (
              filteredStrategies.length > 0 ? filteredStrategies.map((s) => (
                <button
                  key={s.logicId}
                  onClick={() => handleSelectStrategy(s)}
                  className={cn(
                    "w-full text-left p-4 rounded-2xl border transition-all group",
                    selectedStrategy?.logicId === s.logicId && !isPracticing
                      ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)]/30 border-l-4 border-l-[var(--ln-teal-500)]" 
                      : "bg-white border-[var(--ln-border)] hover:border-[var(--ln-teal-500)]/20 hover:bg-slate-50"
                  )}
                >
                  <div className="flex flex-col gap-1.5">
                     <span className="text-[10px] font-bold text-[var(--ln-teal-600)] uppercase tracking-wider">{s.logicId}</span>
                     <h4 className="font-bold text-[var(--ln-navy-900)] text-sm">{s.name}</h4>
                  </div>
                </button>
              )) : (
                <div className="p-6 text-center text-sm text-slate-400 italic">No concepts found.</div>
              )
            ) : (
              // Saved Analyses List
              savedAnalyses.length > 0 ? savedAnalyses.map((analysis) => (
                <button
                  key={analysis.id}
                  onClick={() => handleSelectAnalysis(analysis)}
                  className={cn(
                    "w-full text-left p-4 rounded-2xl border transition-all group",
                    viewingAnalysis?.id === analysis.id 
                      ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)]/30 border-l-4 border-l-[var(--ln-teal-500)]" 
                      : "bg-white border-[var(--ln-border)] hover:border-[var(--ln-teal-500)]/20 hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                     <span className={cn(
                       "px-2 py-0.5 rounded text-[9px] font-bold uppercase",
                       analysis.bias === "bullish" ? "bg-teal-50 text-teal-600" : 
                       analysis.bias === "bearish" ? "bg-rose-50 text-rose-600" : 
                       "bg-slate-100 text-slate-500"
                     )}>
                        {analysis.bias}
                     </span>
                     <span className="text-[10px] text-slate-400">{new Date(analysis.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h4 className="font-bold text-[var(--ln-navy-900)] text-sm">
                      {analysis.chartState?.logicId ? analysis.chartState.logicId + ": " : ""}{analysis.instrument} / {analysis.timeframe}
                  </h4>
                </button>
              )) : (
                <div 
                  data-nava-target="saved-analysis-tab"
                  className="p-6 text-center text-sm text-slate-400 italic"
                >
                  My Journal is currently empty.
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT DETAIL PANEL */}
        <div className={cn(
          "flex-1 bg-white border border-[var(--ln-border)] rounded-3xl overflow-hidden shadow-sm flex-col min-h-[600px] lg:min-h-0",
          !selectedStrategy ? "hidden lg:flex" : "flex"
        )}>
           
           {!selectedStrategy ? (
             <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
               <BookOpen className="w-12 h-12 text-slate-200 mb-4" />
               <p className="text-slate-500 font-medium">Select a concept to review its criteria.</p>
             </div>
           ) : (
             // DETAIL VIEW
             <div className="flex-1 overflow-y-auto p-6 md:p-10 pb-16 space-y-10 custom-scrollbar">
                
                {/* Mobile Back Button */}
                <button 
                  onClick={() => setSelectedStrategy(null)}
                  className="lg:hidden flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-[var(--ln-navy-900)] -mb-4"
                >
                  <ChevronRight size={16} className="rotate-180" /> Back to Library
                </button>

                {/* 1 & 2: Header, Badge, ID */}
                <div className="space-y-4">
                   <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-[var(--ln-teal-soft)] text-[var(--ln-teal-600)] text-[10px] font-bold uppercase tracking-wider">Concept ID: {selectedStrategy.logicId}</span>
                      <span className="text-[11px] font-semibold text-slate-500">{selectedStrategy.family}</span>
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold text-[var(--ln-navy-900)] tracking-tight">{selectedStrategy.name}</h2>
                </div>

                {/* 3: Concept Summary */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                   <p className="text-sm md:text-base text-[var(--ln-text-secondary)] leading-relaxed font-medium">
                     {selectedStrategy.setupSummary}
                   </p>
                </div>

                {/* 4 & 5: Criteria */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-4">
                      <h4 className="text-sm font-bold text-[var(--ln-teal-600)] flex items-center gap-2">
                         <CheckCircle2 size={18} /> Decision Criteria
                      </h4>
                      <ul className="space-y-2">
                         {selectedStrategy.checklists.entry.map((step, i) => (
                           <li key={i} className="p-4 bg-white border border-slate-200 rounded-xl text-xs md:text-sm text-slate-600 leading-relaxed shadow-sm">
                              {step}
                            </li>
                         ))}
                      </ul>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-sm font-bold text-rose-500 flex items-center gap-2">
                         <AlertTriangle size={18} /> Review Conditions
                      </h4>
                      <ul className="space-y-2">
                         {selectedStrategy.checklists.invalidation.map((step, i) => (
                           <li key={i} className="p-4 bg-white border border-slate-200 rounded-xl text-xs md:text-sm text-slate-600 leading-relaxed shadow-sm">
                              {step}
                            </li>
                         ))}
                      </ul>
                   </div>
                </div>

                {/* 6 & 7: Mistake & Links */}
                <div className="flex flex-col gap-4">
                   <div className="p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                      <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">Common Mistake</h4>
                      <p className="text-sm text-amber-900/80">{selectedStrategy.riskNotes}</p>
                   </div>
                   <div className="flex items-center gap-2 mt-4">
                      <span className="text-sm font-medium text-slate-500">Related Lesson:</span>
                      <span className="text-sm font-bold text-[var(--ln-navy-900)]">Module {selectedStrategy.linkedModuleNumber}</span>
                   </div>
                </div>

                {/* 8: CTA */}
                <div className="pt-6 border-t border-slate-100">
                   <button 
                     onClick={() => setIsPracticing(true)}
                     data-nava-target="practice-concept-cta"
                     className="w-full md:w-auto px-8 py-3.5 bg-[var(--ln-teal-500)] text-white rounded-xl text-sm font-bold shadow-md shadow-[var(--ln-teal-500)]/20 hover:bg-[var(--ln-teal-600)] transition-all flex items-center justify-center gap-2"
                   >
                      <Target size={18} /> Practice This Concept
                   </button>
                </div>

             </div>
           )}
        </div>
      </div>

      {/* FULL-SCREEN PRACTICE MODAL */}
      {(isPracticing || viewingAnalysis) && (
        <div className="fixed inset-0 z-[100] bg-slate-50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
           {/* Modal Header */}
           <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 shadow-sm shrink-0">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-[var(--ln-teal-soft)] rounded-xl">
                 <Target className="w-5 h-5 text-[var(--ln-teal-500)]" />
               </div>
               <div>
                 <p className="text-[10px] font-extrabold text-[var(--ln-teal-600)] uppercase tracking-widest">
                   {viewingAnalysis ? "My Journal" : "Concept Practice"}
                 </p>
                  <h2 className="text-sm md:text-base font-bold text-[var(--ln-navy-900)]">
                    {viewingAnalysis ? (viewingAnalysis.chartState?.logicId || viewingAnalysis.instrument) : effectiveStrategy?.name}
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 {viewingAnalysis && (
                   <span className="text-[10px] font-bold text-slate-400 italic">Review Mode</span>
                 )}
                 <button 
                   onClick={() => { setIsPracticing(false); setViewingAnalysis(null); resetPracticeState(); }}
                   className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                   title="Close"
                 >
                   <X size={24} />
                 </button>
              </div>
           </div>

           {/* Modal Body */}
           <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
             <div className="flex-1 overflow-y-auto bg-slate-100 p-4 md:p-6 flex flex-col custom-scrollbar">
                 <div className="flex-1 min-h-[500px] flex flex-col">
                    <ChartPractice 
                       prompt={viewingAnalysis ? `Reviewing Analysis` : (effectiveStrategy?.practiceConfig?.prompt || "Practice Interpretation")}
                       data={practiceCandles} 
                       onValidate={() => {}} 
                       initialBoxes={viewingAnalysis?.chartState?.boxes || []}
                       readOnly={!!viewingAnalysis}
                       mode="practice"
                       guideSteps={effectiveStrategy?.practiceConfig?.guideSteps}
                       onBoxesChange={setDrawnBoxes}
                    />
                 </div>
             </div>
             
             {/* Rationale Sidebar */}
             <div className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-slate-200 shrink-0 flex flex-col">
                <div className="p-6 flex-1 overflow-y-auto space-y-6 custom-scrollbar">
                  <div className="space-y-4">
                      <div className="space-y-3">
                         <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Self-Review Checklist</label>
                         <div className="space-y-2">
                            {(effectiveStrategy?.practiceConfig?.selfReview || [
                              "I marked the relevant chart area.",
                              "I checked price behavior for the concept.",
                              "I wrote a clear reasoning.",
                              "I reviewed common mistakes."
                            ]).map((item, idx) => (
                              <button
                                key={idx}
                                disabled={!!viewingAnalysis}
                                onClick={() => {
                                  if (checklistState.includes(item)) {
                                    setChecklistState(checklistState.filter(i => i !== item));
                                  } else {
                                    setChecklistState([...checklistState, item]);
                                  }
                                }}
                                className={cn(
                                  "w-full text-left p-3 rounded-xl border text-[11px] font-medium transition-all flex items-center gap-3",
                                  checklistState.includes(item)
                                    ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)]/30 text-[var(--ln-teal-600)]"
                                    : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                                )}
                              >
                                <div className={cn(
                                  "w-4 h-4 rounded border flex items-center justify-center shrink-0",
                                  checklistState.includes(item) ? "bg-[var(--ln-teal-500)] border-[var(--ln-teal-500)] text-white" : "bg-white border-slate-300"
                                )}>
                                  {checklistState.includes(item) && <CheckCircle2 size={10} />}
                                </div>
                                {item}
                              </button>
                            ))}
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Market Bias</label>
                         <div className="grid grid-cols-3 gap-2">
                            {["bullish", "bearish", "neutral"].map(b => (
                              <button
                                 key={b}
                                 onClick={() => setForgeBias(b as any)}
                                 disabled={!!viewingAnalysis}
                                 className={cn(
                                   "py-2 rounded-lg text-[10px] font-bold uppercase transition-all",
                                   (viewingAnalysis ? viewingAnalysis.bias : forgeBias) === b 
                                     ? "bg-[var(--ln-navy-900)] text-white" 
                                     : "bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100"
                                 )}
                              >
                                 {b}
                              </button>
                            ))}
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Analysis Rationale</label>
                         {effectiveStrategy?.practiceConfig?.reflection && (
                           <p className="text-[10px] text-slate-400 italic mb-2">
                             Reflection: {effectiveStrategy.practiceConfig.reflection[Math.floor(Date.now() / 86400000) % effectiveStrategy.practiceConfig.reflection.length]}
                           </p>
                         )}
                        <textarea 
                           value={viewingAnalysis ? viewingAnalysis.rationale : forgeRationale}
                           onChange={(e) => setForgeRationale(e.target.value)}
                           disabled={!!viewingAnalysis}
                           placeholder="Explain the market behavior you've identified..."
                           className="w-full h-24 bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-[var(--ln-navy-900)] focus:outline-none focus:border-[var(--ln-teal-500)]/50 transition-all resize-none disabled:bg-slate-100 disabled:text-slate-600 shadow-inner"
                        />
                      </div>
                      {!viewingAnalysis && (
                        <button 
                           disabled={!forgeRationale || checklistState.length === 0 || isSaving}
                           onClick={() => handleSaveAnalysis(drawnBoxes)}
                           className="w-full py-3 bg-[var(--ln-teal-500)] text-white rounded-xl font-bold text-xs hover:bg-[var(--ln-teal-600)] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-[var(--ln-teal-500)]/20"
                        >
                           {isSaving ? "Saving..." : "Save Practice Notes"}
                        </button>
                      )}
                     {viewingAnalysis && (
                        <button 
                          onClick={() => setViewingAnalysis(null)}
                          className="w-full py-3 bg-slate-100 text-[var(--ln-text-secondary)] rounded-xl font-bold text-xs hover:bg-slate-200 transition-all border border-slate-200"
                       >
                          Close Journal Entry
                       </button>
                     )}
                  </div>
                </div>
             </div>
           </div>
        </div>
      )}
    </div>
  );
}
