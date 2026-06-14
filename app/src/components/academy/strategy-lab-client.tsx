"use client";

import { useState, useEffect, useMemo } from "react";
import { useNava } from "@/hooks/useNava";
import { STRATEGIES_DATA, StrategyDefinition, getStrategyLevel } from "@/lib/strategies-data";
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
  X,
  Lock,
  Bookmark
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { AcademyButton } from "@/components/ui/academy-button";
import { DataBadge } from "@/components/ui/data-badge";
import { AcademyCard, AcademyCardContent, AcademyCardHeader, AcademyCardTitle } from "@/components/ui/academy-card";
import { ChartPractice } from "@/components/academy/interactive/chart-practice-engine"; 

// Custom High-Fidelity Components
import { parseStrategyContent } from "@/lib/utils/strategy-parser";
import { StrategySetupVisual } from "@/components/academy/StrategySetupVisual";
import { StrategySummaryCard } from "@/components/academy/StrategySummaryCard";
import { StrategyConditionCard } from "@/components/academy/StrategyConditionCard";
import { StrategySetupLogicCard } from "@/components/academy/StrategySetupLogicCard";
import { StrategyInvalidationCard } from "@/components/academy/StrategyInvalidationCard";
import { StrategyTrapCard } from "@/components/academy/StrategyTrapCard";
import { StrategyPracticeChecklist } from "@/components/academy/StrategyPracticeChecklist";
import { StrategyRelatedLessons } from "@/components/academy/StrategyRelatedLessons";
import { StrategyStickyProfilePanel } from "@/components/academy/StrategyStickyProfilePanel";

interface StrategyLabClientProps {
  userTrack: string;
  currentLevel: number;
  completedModuleNumbers: Set<string>;
  initialSavedAnalyses: any[];
  dbStrategies: any[];
  modules: any[];
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

function getSetupSummary(coreLogic: string): string {
  if (!coreLogic) return "";
  const lines = coreLogic.split('\n');
  const coreLogicLine = lines.find(l => l.includes('**Core Logic**:') || l.includes('Core Logic:'));
  if (coreLogicLine) {
    return coreLogicLine.replace(/.*?\*\*Core Logic\*\*:\s*/i, '').replace(/.*?\*?Core Logic:\s*/i, '').trim();
  }
  return lines[0].replace(/^\*?\s*/, '').trim();
}

export function StrategyLabClient({ 
  userTrack, 
  currentLevel,
  completedModuleNumbers, 
  initialSavedAnalyses,
  dbStrategies,
  modules
}: StrategyLabClientProps) {
  const { triggerMessage, setSuppressed } = useNava();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<PrimaryTab>("Core Concepts");
  const [search, setSearch] = useState("");
  const [allScenarios, setAllScenarios] = useState<any[]>([]);
  const [selectedStrategy, setSelectedStrategy] = useState<any | null>(null);

  // Filters state
  const [assetFilter, setAssetFilter] = useState<string>("all");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [unlockedOnly, setUnlockedOnly] = useState<boolean>(false);
  const [bookmarkedOnly, setBookmarkedOnly] = useState<boolean>(false);

  // Bookmarks state (stored in localStorage)
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  
  useEffect(() => {
    const saved = localStorage.getItem("lurnava_bookmarked_strategies");
    if (saved) {
      try {
        setBookmarkedIds(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse bookmarked strategies from localStorage:", e);
      }
    }
  }, []);

  const toggleBookmark = (logicId: string) => {
    const next = bookmarkedIds.includes(logicId)
      ? bookmarkedIds.filter(id => id !== logicId)
      : [...bookmarkedIds, logicId];
    setBookmarkedIds(next);
    localStorage.setItem("lurnava_bookmarked_strategies", JSON.stringify(next));
  };

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

  // Merge and deduplicate database strategies
  const combinedStrategies = useMemo(() => {
    const staticNames = new Set(STRATEGIES_DATA.map(s => s.name.toLowerCase().trim()));

    const mappedDb = dbStrategies
      .filter(dbS => !staticNames.has(dbS.name.toLowerCase().trim()))
      .map(dbS => {
        const track: "crypto" | "gold" | "forex" = dbS.assetClass === "CRYPTO" ? "crypto" : dbS.assetClass === "GOLD" ? "gold" : "forex";
        const level = getStrategyLevel(dbS.parentFamily, dbS.assetClass, dbS.sequenceNumber);
        const prefix = dbS.assetClass === "CRYPTO" ? "CR" : dbS.assetClass === "GOLD" ? "GD" : "FX";
        const logicId = `${prefix}-${String(dbS.sequenceNumber).padStart(3, "0")}`;

        return {
          logicId,
          name: dbS.name,
          family: dbS.parentFamily,
          track,
          level,
          setupSummary: getSetupSummary(dbS.coreLogic),
          checklists: {
            entry: [],
            exit: [],
            invalidation: []
          },
          riskNotes: dbS.trapMechanics || "",
          metrics: {
            winRate: "50%",
            avgR: "2.0",
            complexity: "MED" as const
          },
          linkedModuleNumber: "N/A",
          isDbStrategy: true,
          coreLogic: dbS.coreLogic,
          trapMechanics: dbS.trapMechanics,
          practiceConfig: {
            prompt: `Practice identification for ${dbS.name}`,
            guideSteps: ["Locate critical structural context.", "Identify standard entry points.", "Note key rejection signals."],
            reflection: ["Is this setup fully aligned?", "What is the primary driver?"],
            selfReview: ["I identified the core setup."],
            validationMode: "self" as const
          }
        };
      });

    const all = [...STRATEGIES_DATA, ...mappedDb];
    return all.filter(s => 
      s.track === "core" || s.track === userTrack || userTrack === "multi"
    );
  }, [dbStrategies, userTrack]);

  const paramStrategy = searchParams.get("strategy");

  // Deep linking logic: select strategy on parameter match
  useEffect(() => {
    if (paramStrategy && combinedStrategies.length > 0) {
      const match = combinedStrategies.find(
        (s) => s.logicId.toLowerCase() === paramStrategy.toLowerCase() ||
               s.name.toLowerCase().trim() === paramStrategy.toLowerCase().trim()
      );
      if (match) {
        setSelectedStrategy(match);
        setIsPracticing(false);
        setViewingAnalysis(null);
        resetPracticeState();
        const { getConceptCandles } = require("@/lib/utils/market");
        setPracticeCandles(getConceptCandles(match.logicId));

        // Switch to the correct tab based on level
        if (match.level === 2) {
          setActiveTab("Core Concepts");
        } else if (match.level >= 3 && match.level <= 5) {
          setActiveTab("Market Logic");
        } else if (match.level >= 6 && match.level <= 9) {
          setActiveTab("Risk & Bias");
        } else {
          setActiveTab(CATEGORY_MAP[match.family] || "Core Concepts");
        }
      }
    }
  }, [paramStrategy, combinedStrategies]);

  const filteredStrategies = useMemo(() => {
    return combinedStrategies.filter(s => {
      const safeLower = (val: unknown) => (typeof val === 'string' ? val.toLowerCase() : '');
      const query = search.toLowerCase();
      
      const matchesSearch = safeLower(s.name).includes(query) || 
                            safeLower(s.logicId).includes(query);
      
      let mappedTab: PrimaryTab = "Core Concepts";
      if (s.level === 2) {
        mappedTab = "Core Concepts";
      } else if (s.level >= 3 && s.level <= 5) {
        mappedTab = "Market Logic";
      } else if (s.level >= 6 && s.level <= 9) {
        mappedTab = "Risk & Bias";
      } else {
        mappedTab = CATEGORY_MAP[s.family] || "Core Concepts";
      }
      const matchesTab = mappedTab === activeTab;
      
      // Additional Filters
      const matchesAsset = assetFilter === "all" || s.track === assetFilter;
      const matchesLevel = levelFilter === "all" || String(s.level) === levelFilter;
      const matchesDifficulty = difficultyFilter === "all" || s.metrics?.complexity === difficultyFilter;
      const matchesUnlocked = !unlockedOnly || currentLevel >= s.level;
      const matchesBookmarked = !bookmarkedOnly || bookmarkedIds.includes(s.logicId);

      return matchesSearch && matchesTab && matchesAsset && matchesLevel && matchesDifficulty && matchesUnlocked && matchesBookmarked;
    });
  }, [combinedStrategies, search, activeTab, assetFilter, levelFilter, difficultyFilter, unlockedOnly, bookmarkedOnly, bookmarkedIds, currentLevel]);

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
          candles: practiceCandles,
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
  };

  const handleSelectStrategy = (s: any) => {
    setSelectedStrategy(s);
    setIsPracticing(false);
    setViewingAnalysis(null);
    resetPracticeState();
    const { getConceptCandles } = require("@/lib/utils/market");
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
      combinedStrategies.find(s => s.logicId === viewingAnalysis.chartState.logicId) : 
      null);

  // Group filteredStrategies by level
  const groupedByLevel = useMemo(() => {
    const groups: Record<number, any[]> = {};
    filteredStrategies.forEach(s => {
      if (!groups[s.level]) groups[s.level] = [];
      groups[s.level].push(s);
    });
    return groups;
  }, [filteredStrategies]);

  // Find matching module for the selected strategy
  const linkedModule = useMemo(() => {
    if (!selectedStrategy) return null;
    let match = modules?.find(m => m.moduleNumber === selectedStrategy.linkedModuleNumber);
    if (!match) {
      match = modules?.find(m => m.level === selectedStrategy.level);
    }
    return match;
  }, [selectedStrategy, modules]);

  const isLocked = selectedStrategy ? currentLevel < selectedStrategy.level : false;
  const parsed = useMemo(() => parseStrategyContent(selectedStrategy), [selectedStrategy]);

  return (
    <div className="flex flex-col h-full gap-6 overflow-hidden">
      
      {/* Primary Category Tabs */}
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
          "w-full lg:w-[380px] flex flex-col gap-4 shrink-0 overflow-hidden",
          (selectedStrategy || viewingAnalysis || isPracticing) ? "hidden lg:flex" : "flex"
        )}>
          {activeTab !== "Saved" && (
            <>
              {/* Search */}
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

              {/* Filters */}
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 space-y-3.5 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Filters</span>
                  {(assetFilter !== "all" || levelFilter !== "all" || difficultyFilter !== "all" || unlockedOnly || bookmarkedOnly) && (
                    <button 
                      onClick={() => {
                        setAssetFilter("all");
                        setLevelFilter("all");
                        setDifficultyFilter("all");
                        setUnlockedOnly(false);
                        setBookmarkedOnly(false);
                      }}
                      className="text-[9px] font-bold text-[var(--ln-teal-600)] hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {/* Asset Class */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase">Asset Class</label>
                    <select 
                      value={assetFilter}
                      onChange={(e) => setAssetFilter(e.target.value)}
                      className="w-full text-xs font-semibold bg-white border border-slate-200 rounded-lg p-1.5 focus:outline-none focus:border-[var(--ln-teal-500)]/50 cursor-pointer"
                    >
                      <option value="all">All Assets</option>
                      <option value="forex">Forex</option>
                      <option value="crypto">Crypto</option>
                      <option value="gold">Gold</option>
                    </select>
                  </div>

                  {/* Level */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase">Level</label>
                    <select 
                      value={levelFilter}
                      onChange={(e) => setLevelFilter(e.target.value)}
                      className="w-full text-xs font-semibold bg-white border border-slate-200 rounded-lg p-1.5 focus:outline-none focus:border-[var(--ln-teal-500)]/50 cursor-pointer"
                    >
                      <option value="all">All Levels</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(lvl => (
                        <option key={lvl} value={String(lvl)}>Level {lvl}</option>
                      ))}
                    </select>
                  </div>

                  {/* Difficulty */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase">Difficulty</label>
                    <select 
                      value={difficultyFilter}
                      onChange={(e) => setDifficultyFilter(e.target.value)}
                      className="w-full text-xs font-semibold bg-white border border-slate-200 rounded-lg p-1.5 focus:outline-none focus:border-[var(--ln-teal-500)]/50 cursor-pointer"
                    >
                      <option value="all">All</option>
                      <option value="LOW">Low</option>
                      <option value="MED">Medium</option>
                      <option value="HIGH">High</option>
                      <option value="ELITE">Elite</option>
                    </select>
                  </div>

                  {/* Checkbox filters */}
                  <div className="flex flex-col justify-end gap-1">
                    <label className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        checked={unlockedOnly}
                        onChange={(e) => setUnlockedOnly(e.target.checked)}
                        className="rounded border-slate-300 text-[var(--ln-teal-500)] focus:ring-[var(--ln-teal-500)]/30 w-3 h-3 cursor-pointer"
                      />
                      <span>Unlocked Only</span>
                    </label>
                    
                    <label className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        checked={bookmarkedOnly}
                        onChange={(e) => setBookmarkedOnly(e.target.checked)}
                        className="rounded border-slate-300 text-[var(--ln-teal-500)] focus:ring-[var(--ln-teal-500)]/30 w-3 h-3 cursor-pointer"
                      />
                      <span>Bookmarked Only</span>
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Cards List */}
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
              filteredStrategies.length > 0 ? Object.keys(groupedByLevel).sort((a, b) => parseInt(a) - parseInt(b)).map(lvlStr => {
                const lvl = parseInt(lvlStr);
                const strategies = groupedByLevel[lvl];
                return (
                  <div key={lvl} className="space-y-2 mb-6">
                    <div className="flex items-center justify-between px-2 pb-1 border-b border-slate-100">
                      <h5 className="text-[10px] font-bold text-[var(--ln-teal-600)] uppercase tracking-wider">Level {lvl}</h5>
                      <span className="text-[9px] text-slate-400 font-bold">{strategies.length} concepts</span>
                    </div>
                    <div className="space-y-2">
                      {strategies.map((s) => {
                        const sLocked = currentLevel < s.level;
                        const sParsed = parseStrategyContent(s);
                        return (
                          <button
                            key={s.logicId}
                            onClick={() => handleSelectStrategy(s)}
                            className={cn(
                              "w-full text-left p-4 rounded-2xl border transition-all relative flex flex-col gap-3 group/card shadow-sm",
                              selectedStrategy?.logicId === s.logicId && !isPracticing
                                ? "bg-teal-50/40 border-[var(--ln-teal-500)]/30 border-l-4 border-l-[var(--ln-teal-500)]" 
                                : sLocked
                                  ? "bg-slate-50/70 border-slate-200/50 opacity-75 hover:opacity-100"
                                  : "bg-white border-[var(--ln-border)] hover:border-[var(--ln-teal-500)]/20 hover:bg-slate-50/50"
                            )}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span className="text-[10px] font-extrabold text-[var(--ln-teal-600)] uppercase tracking-wider">
                                {s.logicId}
                              </span>
                              <div className="flex items-center gap-1">
                                {sLocked ? (
                                  <span className="flex items-center gap-1 text-[9px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full">
                                    <Lock className="w-2.5 h-2.5" /> L{s.level} Req
                                  </span>
                                ) : (
                                  <span className="text-[9px] font-extrabold text-[var(--ln-teal-600)] bg-[var(--ln-teal-soft)] px-2 py-0.5 rounded-full">
                                    Lvl {s.level}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="space-y-1">
                              <h4 className="font-extrabold text-[var(--ln-navy-900)] text-sm group-hover/card:text-[var(--ln-teal-600)] transition-colors">
                                {s.name}
                              </h4>
                              <p className="text-[11px] text-[var(--ln-text-secondary)] line-clamp-2 leading-relaxed font-semibold">
                                {sParsed.summary}
                              </p>
                            </div>

                            <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-slate-100/50 w-full">
                              <span className={cn(
                                "text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase",
                                s.track === "crypto" ? "bg-purple-50 text-purple-600 border border-purple-100" :
                                s.track === "gold" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                                s.track === "forex" ? "bg-blue-50 text-blue-600 border border-blue-100" :
                                "bg-slate-100 text-slate-500 border border-slate-200"
                              )}>
                                {s.track}
                              </span>

                              <span className={cn(
                                "text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase",
                                s.metrics?.complexity === "LOW" ? "bg-emerald-50 text-emerald-600" :
                                s.metrics?.complexity === "MED" ? "bg-teal-50 text-teal-600" :
                                s.metrics?.complexity === "HIGH" ? "bg-amber-50 text-amber-600" :
                                "bg-rose-50 text-rose-600"
                              )}>
                                {s.metrics?.complexity || "MED"}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }) : (
                <div className="p-6 text-center text-sm text-slate-400 italic">No concepts found.</div>
              )
            ) : (
              // Saved Analyses List
              savedAnalyses.length > 0 ? savedAnalyses.map((analysis) => (
                <button
                  key={analysis.id}
                  onClick={() => handleSelectAnalysis(analysis)}
                  className={cn(
                    "w-full text-left p-4 rounded-2xl border transition-all group shadow-sm",
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
          "flex-1 bg-white border border-[var(--ln-border)] rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-[600px] lg:min-h-0",
          !selectedStrategy ? "hidden lg:flex" : "flex"
        )}>
           
           {!selectedStrategy ? (
             <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
               <BookOpen className="w-12 h-12 text-slate-200 mb-4" />
               <p className="text-slate-500 font-medium">Select a concept to review its criteria.</p>
             </div>
           ) : (
             // DETAIL VIEW
             <div className="flex-1 flex flex-col h-full overflow-hidden">
               
               {/* Header (Full Width) */}
               <div className="p-6 md:p-8 border-b border-slate-100 shrink-0">
                  <button 
                    onClick={() => setSelectedStrategy(null)}
                    className="lg:hidden flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-[var(--ln-navy-900)] mb-4"
                  >
                    <ChevronRight size={16} className="rotate-180" /> Back to Library
                  </button>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded bg-[var(--ln-teal-soft)] text-[var(--ln-teal-600)] text-[10px] font-extrabold uppercase tracking-wider">
                          Concept ID: {selectedStrategy.logicId}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">
                          {selectedStrategy.family}
                        </span>
                        <span className="text-[10px] font-bold text-[var(--ln-teal-600)] bg-[var(--ln-teal-soft)] px-2 py-0.5 rounded uppercase">
                          Level {selectedStrategy.level}
                        </span>
                        <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded uppercase">
                          {selectedStrategy.track}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">
                        {selectedStrategy.name}
                      </h2>
                    </div>
                  </div>
               </div>

               {/* Split Columns */}
               <div className="flex-1 flex flex-col lg:flex-row overflow-hidden h-full">
                  
                  {/* Right Column: Sticky Metadata and Actions Panel (Moves above main content on mobile) */}
                  <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-l border-slate-200/80 p-6 bg-slate-50/50 shrink-0 overflow-y-auto order-first lg:order-last">
                     <StrategyStickyProfilePanel 
                       level={selectedStrategy.level}
                       family={selectedStrategy.family}
                       complexity={selectedStrategy.metrics?.complexity || "MED"}
                       winRate={selectedStrategy.metrics?.winRate || "50%"}
                       avgR={selectedStrategy.metrics?.avgR || "2.0"}
                       isSaved={bookmarkedIds.includes(selectedStrategy.logicId)}
                       onSave={() => toggleBookmark(selectedStrategy.logicId)}
                       isSaving={isSaving}
                       isLocked={isLocked}
                       onPractice={() => setIsPracticing(true)}
                       statusText={bookmarkedIds.includes(selectedStrategy.logicId) ? "Saved" : "Unlocked"}
                     />
                  </div>

                  {/* Left Column: Learning Content Cards */}
                  <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar order-last lg:order-first">
                     {isLocked ? (
                       // Locked preview state details
                       <div className="space-y-8">
                         <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                           <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Concept Preview</h3>
                           <p className="text-sm text-slate-500 leading-relaxed font-semibold italic">
                             "{parsed.summary}"
                           </p>
                         </div>

                         <div className="p-6 bg-rose-50/50 border border-rose-100 rounded-2xl space-y-4">
                           <div className="flex items-start gap-3 text-rose-800">
                             <Lock className="w-5 h-5 shrink-0 mt-0.5" />
                             <div className="space-y-1">
                               <h4 className="text-sm font-extrabold uppercase tracking-wider">Gated Curriculum Concept</h4>
                               <p className="text-xs text-rose-900/80 leading-relaxed font-semibold">
                                 This advanced strategy utilizes market concepts and risk frameworks introduced at Level {selectedStrategy.level}. 
                                 To unlock full setup parameters, confirmation criteria, and active practice modules, you must progress your academy level first.
                               </p>
                             </div>
                           </div>

                           <div className="bg-white p-4 rounded-xl border border-rose-100/50 space-y-3">
                             <h5 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Required Milestone</h5>
                             <div className="flex items-center justify-between text-xs font-bold">
                               <span className="text-slate-600">Current Level: Level {currentLevel}</span>
                               <span className="text-rose-600">Required: Level {selectedStrategy.level}</span>
                             </div>
                             <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                               <div className="h-full bg-rose-500" style={{ width: `${Math.min(100, (currentLevel / selectedStrategy.level) * 100)}%` }} />
                             </div>
                           </div>
                         </div>

                         <StrategyRelatedLessons 
                           linkedModule={linkedModule} 
                           level={selectedStrategy.level} 
                           family={selectedStrategy.family} 
                         />
                       </div>
                     ) : (
                       // Full Unlocked details
                       <>
                         <StrategySummaryCard summary={parsed.summary} />
                         
                         <div className="space-y-2">
                           <h3 className="text-xs font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider pl-1">
                             Strategy Schema Diagram
                           </h3>
                           <StrategySetupVisual />
                         </div>

                         <StrategyConditionCard 
                           conditions={parsed.marketConditions} 
                           family={selectedStrategy.family} 
                         />
                         
                         <StrategySetupLogicCard 
                           entryCriteria={parsed.entryCriteria} 
                           confirmation={parsed.confirmation} 
                         />
                         
                         <StrategyInvalidationCard 
                           invalidation={parsed.invalidation} 
                           targetPath={parsed.targetPath} 
                         />
                         
                         <StrategyTrapCard 
                           traps={parsed.traps} 
                           risk={parsed.risk} 
                         />
                         
                         <StrategyPracticeChecklist 
                           items={parsed.checklist} 
                           checkedItems={checklistState} 
                           onChange={setChecklistState} 
                         />
                         
                         <StrategyRelatedLessons 
                           linkedModule={linkedModule} 
                           level={selectedStrategy.level} 
                           family={selectedStrategy.family} 
                         />
                       </>
                     )}
                  </div>

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
                            ]).map((item: string, idx: number) => (
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
