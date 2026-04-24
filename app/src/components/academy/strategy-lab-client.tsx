"use client";

import { useState } from "react";
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
  RotateCcw
} from "lucide-react";
import { cn } from "@/lib/utils";
import { InstitutionalButton } from "@/components/ui/institutional-button";
import { DataBadge } from "@/components/ui/data-badge";
import { TerminalCard, TerminalCardContent, TerminalCardHeader, TerminalCardTitle } from "@/components/ui/terminal-card";
import { ChartSimulator } from "./interactive/chart-simulator";

import { generateMockCandles } from "@/lib/utils/market";

interface StrategyLabClientProps {
  userTrack: string;
  completedModuleNumbers: Set<string>;
}

export function StrategyLabClient({ 
  userTrack, 
  completedModuleNumbers, 
  initialSavedAnalyses,
  dbStrategies 
}: StrategyLabClientProps & { initialSavedAnalyses: any[], dbStrategies: any[] }) {
  const [activeTab, setActiveTab] = useState<"library" | "forge" | "vault">("library");
  const [search, setSearch] = useState("");
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [selectedStrategy, setSelectedStrategy] = useState<StrategyDefinition | null>(STRATEGIES_DATA[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [savedAnalyses, setSavedAnalyses] = useState(initialSavedAnalyses);
  
  // Forge State
  const [forgeBias, setForgeBias] = useState<"bullish" | "bearish" | "neutral">("neutral");
  const [forgeRationale, setForgeRationale] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [viewingAnalysis, setViewingAnalysis] = useState<any | null>(null);
  const [forgeData] = useState(() => generateMockCandles(200, 2300));

  // Filter strategies
  const availableStrategies = STRATEGIES_DATA.filter(s => 
    s.track === "core" || s.track === userTrack || userTrack === "multi"
  );

  const families = Array.from(new Set(availableStrategies.map(s => s.family)));

  const filteredStrategies = availableStrategies.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                          s.logicId.toLowerCase().includes(search.toLowerCase());
    const matchesFamily = !selectedFamily || s.family === selectedFamily;
    return matchesSearch && matchesFamily;
  });

  const handleSaveAnalysis = async (boxes: any[]) => {
    if (!selectedStrategy) return;
    setIsSaving(true);
    try {
      const { saveAnalysis } = await import("@/lib/academy-actions");
      const result = await saveAnalysis({
        assetClass: userTrack,
        instrument: userTrack === "crypto" ? "BTCUSD" : userTrack === "gold" ? "XAUUSD" : "EURUSD",
        timeframe: "1H",
        bias: forgeBias,
        rationale: forgeRationale,
        chartState: { boxes },
        moduleId: selectedStrategy.linkedModuleNumber
      });
      if (result.success) {
        setSavedAnalyses([result.analysis, ...savedAnalyses]);
        setActiveTab("vault");
        setForgeRationale("");
        setForgeBias("neutral");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col h-full gap-6 overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10 w-fit">
        {[
          { id: "library", label: "Protocol Library", icon: BookOpen },
          { id: "forge", label: "Analysis Forge", icon: Target },
          { id: "vault", label: "My Vault", icon: ShieldCheck }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={cn(
              "flex items-center gap-2 px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
              activeTab === tab.id ? "bg-white text-black shadow-lg" : "text-slate-500 hover:text-white"
            )}
          >
            <tab.icon size={14} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-1 h-full gap-8 overflow-hidden">
        {activeTab === "library" && (
          <>
            {/* Left: Search and List */}
            <div className="w-[380px] flex flex-col gap-4 shrink-0 overflow-hidden">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search Logic ID..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-accent-blue/50 transition-all"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {families.map(f => (
                    <button 
                      key={f}
                      onClick={() => setSelectedFamily(selectedFamily === f ? null : f)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest border transition-all",
                        selectedFamily === f ? "bg-white text-black border-white" : "bg-white/5 text-slate-400 border-white/10"
                      )}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                {filteredStrategies.map((s) => (
                  <button
                    key={s.logicId}
                    onClick={() => setSelectedStrategy(s)}
                    className={cn(
                      "w-full text-left p-5 rounded-3xl border transition-all group",
                      selectedStrategy?.logicId === s.logicId ? "bg-accent-blue/10 border-accent-blue/30" : "bg-white/[0.02] border-white/5"
                    )}
                  >
                    <div className="flex items-center justify-between">
                       <div className="space-y-1">
                          <span className="text-[9px] font-mono font-bold text-accent-blue uppercase">{s.logicId}</span>
                          <h4 className="font-bold text-white text-sm">{s.name}</h4>
                       </div>
                       <ChevronRight size={16} className="text-slate-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Detail */}
            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden">
               {selectedStrategy ? (
                 <div className="h-full overflow-y-auto p-12 space-y-12 custom-scrollbar">
                    <div className="space-y-6">
                       <div className="flex items-center justify-between">
                          <div className="space-y-2">
                             <div className="flex items-center gap-2">
                                <DataBadge variant="outline" className="text-accent-blue">{selectedStrategy.logicId}</DataBadge>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{selectedStrategy.family}</span>
                             </div>
                             <h2 className="text-4xl font-bold text-white tracking-tighter uppercase">{selectedStrategy.name}</h2>
                          </div>
                          <InstitutionalButton variant="outline" size="sm" onClick={() => setActiveTab("forge")}>
                             PRACTICE IN FORGE
                          </InstitutionalButton>
                       </div>
                       <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">{selectedStrategy.setupSummary}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <h4 className="text-xs font-bold text-pass-green uppercase tracking-widest flex items-center gap-2">
                             <CheckCircle2 size={14} /> Entry Protocol
                          </h4>
                          <div className="space-y-3">
                             {selectedStrategy.checklists.entry.map((step, i) => (
                               <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-xs text-text-secondary">
                                  {step}
                               </div>
                             ))}
                          </div>
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-xs font-bold text-fail-red uppercase tracking-widest flex items-center gap-2">
                             <AlertTriangle size={14} /> Invalidation
                          </h4>
                          <div className="space-y-3">
                             {selectedStrategy.checklists.invalidation.map((step, i) => (
                               <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-xs text-text-secondary">
                                  {step}
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
               ) : (
                 <div className="h-full flex items-center justify-center text-text-muted italic">Select a strategy to view protocol</div>
               )}
            </div>
          </>
        )}

        {activeTab === "forge" && (
          <div className="flex-1 flex flex-col gap-6 overflow-hidden">
             <div className="grid grid-cols-12 gap-8 h-full">
                <div className="col-span-8 bg-black/50 border border-white/5 rounded-[2.5rem] overflow-hidden relative">
                   {viewingAnalysis && (
                      <div className="absolute top-8 left-8 z-20 flex items-center gap-3 px-4 py-2 bg-accent-blue/20 border border-accent-blue/30 rounded-xl backdrop-blur-md animate-pulse">
                         <ShieldCheck size={14} className="text-accent-blue" />
                         <span className="text-[10px] font-bold text-white uppercase tracking-widest">Replaying Historical Analysis</span>
                         <button 
                            onClick={() => setViewingAnalysis(null)}
                            className="ml-2 p-1 hover:bg-white/10 rounded-lg transition-all"
                         >
                            <RotateCcw size={12} className="text-slate-400" />
                         </button>
                      </div>
                   )}
                   <ChartSimulator 
                      prompt={viewingAnalysis ? `Reviewing: ${viewingAnalysis.instrument}` : (selectedStrategy?.name || "Free Analysis Mode")}
                      data={viewingAnalysis ? viewingAnalysis.chartState.candles : forgeData} 
                      onValidate={() => {}} 
                      initialBoxes={viewingAnalysis?.chartState?.boxes || []}
                      readOnly={!!viewingAnalysis}
                   />
                </div>
                <div className="col-span-4 space-y-6">
                   <TerminalCard className="h-fit">
                      <TerminalCardHeader>
                         <TerminalCardTitle className="text-sm">Analysis Rationale</TerminalCardTitle>
                      </TerminalCardHeader>
                      <TerminalCardContent className="space-y-6">
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Market Bias</label>
                            <div className="grid grid-cols-3 gap-2">
                               {["bullish", "bearish", "neutral"].map(b => (
                                 <button
                                    key={b}
                                    onClick={() => setForgeBias(b as any)}
                                    className={cn(
                                      "py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest border transition-all",
                                      forgeBias === b ? "bg-accent-blue border-accent-blue text-white" : "bg-white/5 border-white/10 text-slate-500"
                                    )}
                                 >
                                    {b}
                                 </button>
                               ))}
                            </div>
                         </div>
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Logic Justification</label>
                            <textarea 
                               value={forgeRationale}
                               onChange={(e) => setForgeRationale(e.target.value)}
                               placeholder="Explain the institutional footprint you've identified..."
                               className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-white focus:outline-none focus:border-accent-blue/50"
                            />
                         </div>
                         <InstitutionalButton 
                            glow 
                            className="w-full" 
                            disabled={!forgeRationale || isSaving}
                            onClick={() => handleSaveAnalysis([])}
                         >
                            {isSaving ? "SYNCING..." : "SAVE TO STRATEGY VAULT"}
                         </InstitutionalButton>
                      </TerminalCardContent>
                   </TerminalCard>
                </div>
             </div>
          </div>
        )}

        {activeTab === "vault" && (
          <div className="flex-1 space-y-6 overflow-y-auto pr-4 custom-scrollbar">
             {savedAnalyses.length === 0 ? (
               <div className="h-full flex items-center justify-center text-text-muted italic">Your vault is currently empty. Start analyzing in the Forge.</div>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedAnalyses.map(analysis => (
                    <TerminalCard 
                       key={analysis.id} 
                       className="hover:border-accent-blue/30 transition-all cursor-pointer group"
                       onClick={() => {
                          setViewingAnalysis(analysis);
                          setActiveTab("forge");
                       }}
                    >
                       <TerminalCardHeader className="flex flex-row justify-between items-start">
                          <div className="space-y-1">
                             <DataBadge variant={analysis.bias === "bullish" ? "profit" : analysis.bias === "bearish" ? "loss" : "outline"} className="text-[8px]">
                                {analysis.bias.toUpperCase()}
                             </DataBadge>
                             <TerminalCardTitle className="text-sm font-bold">{analysis.instrument} / {analysis.timeframe}</TerminalCardTitle>
                          </div>
                          <span className="text-[8px] font-mono text-text-muted">{new Date(analysis.createdAt).toLocaleDateString()}</span>
                       </TerminalCardHeader>
                       <TerminalCardContent className="space-y-4">
                          <p className="text-xs text-text-secondary line-clamp-2 italic">"{analysis.rationale}"</p>
                          <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                             <span className="text-[9px] font-bold text-accent-blue uppercase tracking-widest">Protocol: V5_CORE</span>
                             <ArrowRight size={14} className="text-slate-600" />
                          </div>
                       </TerminalCardContent>
                    </TerminalCard>
                  ))}
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
}
