"use client";

import { useState, useEffect, useMemo } from "react";
import { STRATEGIES_DATA, StrategyDefinition, getStrategyLevel } from "@/lib/strategies-data";
import { 
  Search, 
  BookOpen, 
  Target, 
  ChevronRight, 
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Lock,
  Bookmark,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

// Custom High-Fidelity Components
import { parseStrategyContent } from "@/lib/utils/strategy-parser";
import { StrategySummaryCard } from "@/components/academy/StrategySummaryCard";
import { StrategyConditionCard } from "@/components/academy/StrategyConditionCard";
import { StrategySetupLogicCard } from "@/components/academy/StrategySetupLogicCard";
import { StrategyTrapCard } from "@/components/academy/StrategyTrapCard";
import { StrategyRelatedLessons } from "@/components/academy/StrategyRelatedLessons";

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

const CHECKLIST_ITEMS = [
  "Identify the trend and key structure levels.",
  "Confirm a strong structural break with momentum.",
  "Wait for a clean retest of the broken level.",
  "Look for rejection or confirmation at the retest.",
  "Set entry, invalidation, and target levels.",
  "Confirm risk-to-reward is acceptable.",
  "Execute the trade with discipline.",
  "Review the outcome and learn."
];

export function StrategyLabClient({ 
  userTrack, 
  currentLevel,
  completedModuleNumbers, 
  initialSavedAnalyses,
  dbStrategies,
  modules
}: StrategyLabClientProps) {
  const [activeTab, setActiveTab] = useState<PrimaryTab>("Core Concepts");
  const [search, setSearch] = useState("");
  const [selectedStrategy, setSelectedStrategy] = useState<any | null>(null);

  // Filters state
  const [assetFilter, setAssetFilter] = useState<string>("all");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [unlockedOnly, setUnlockedOnly] = useState<boolean>(false);

  // Bookmarks state
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  
  // Persisted Checklist state per Strategy ID
  const [checklistProgress, setChecklistProgress] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const saved = localStorage.getItem("lurnava_bookmarked_strategies");
    if (saved) {
      try {
        setBookmarkedIds(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse bookmarks:", e);
      }
    }

    const savedChecklists = localStorage.getItem("lurnava_strategy_checklists");
    if (savedChecklists) {
      try {
        setChecklistProgress(JSON.parse(savedChecklists));
      } catch (e) {
        console.error("Failed to parse checklist progress:", e);
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

  const toggleChecklistItem = (logicId: string, item: string) => {
    const currentList = checklistProgress[logicId] || [];
    const nextList = currentList.includes(item)
      ? currentList.filter(i => i !== item)
      : [...currentList, item];
    
    const nextProgress = {
      ...checklistProgress,
      [logicId]: nextList
    };
    setChecklistProgress(nextProgress);
    localStorage.setItem("lurnava_strategy_checklists", JSON.stringify(nextProgress));
  };

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

    return [...STRATEGIES_DATA, ...mappedDb];
  }, [dbStrategies]);

  // Handle default initial selection
  useEffect(() => {
    if (combinedStrategies.length > 0 && !selectedStrategy) {
      // Pick first active tab strategy
      const first = combinedStrategies.find(s => {
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
        return mappedTab === activeTab && (s.track === "core" || s.track === userTrack || userTrack === "multi");
      });
      if (first) setSelectedStrategy(first);
    }
  }, [combinedStrategies, activeTab, selectedStrategy, userTrack]);

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
      
      const matchesTab = activeTab === "Saved" 
        ? bookmarkedIds.includes(s.logicId) 
        : mappedTab === activeTab;
      
      const matchesTrack = s.track === "core" || s.track === userTrack || userTrack === "multi";
      
      // Filters
      const matchesAsset = assetFilter === "all" || s.track === assetFilter;
      const matchesLevel = levelFilter === "all" || String(s.level) === levelFilter;
      const matchesDifficulty = difficultyFilter === "all" || s.metrics?.complexity === difficultyFilter;
      const matchesUnlocked = !unlockedOnly || currentLevel >= s.level;

      return matchesSearch && matchesTab && matchesTrack && matchesAsset && matchesLevel && matchesDifficulty && matchesUnlocked;
    });
  }, [combinedStrategies, search, activeTab, assetFilter, levelFilter, difficultyFilter, unlockedOnly, bookmarkedIds, userTrack, currentLevel]);

  const handleSelectStrategy = (s: any) => {
    setSelectedStrategy(s);
  };

  const isLocked = selectedStrategy ? currentLevel < selectedStrategy.level : false;
  const parsed = useMemo(() => parseStrategyContent(selectedStrategy), [selectedStrategy]);

  const linkedModule = useMemo(() => {
    if (!selectedStrategy) return null;
    let match = modules?.find(m => m.moduleNumber === selectedStrategy.linkedModuleNumber);
    if (!match) {
      match = modules?.find(m => m.level === selectedStrategy.level);
    }
    return match;
  }, [selectedStrategy, modules]);

  const selectedChecklist = selectedStrategy ? (checklistProgress[selectedStrategy.logicId] || []) : [];

  return (
    <div className="flex flex-col h-full gap-5 overflow-hidden pr-2">
      
      {/* 1. Page Title & Horizontal Filters Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">
            Technical Library
          </h1>
          <p className="text-[11px] text-[var(--ln-text-secondary)] font-semibold">
            Master key academy concepts with structured lessons and practice.
          </p>
        </div>

        {/* Top-Right Filters */}
        {activeTab !== "Saved" && (
          <div className="flex items-center gap-3 flex-wrap">
            
            {/* Asset Class select */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Asset Class</span>
              <div className="relative">
                <select 
                  value={assetFilter}
                  onChange={(e) => setAssetFilter(e.target.value)}
                  className="text-xs font-semibold bg-white border border-slate-200 rounded-xl px-3 py-2 pr-8 focus:outline-none focus:border-[var(--ln-teal-500)]/50 cursor-pointer appearance-none shadow-sm min-w-[110px]"
                >
                  <option value="all">All Assets</option>
                  <option value="forex">Forex</option>
                  <option value="crypto">Crypto</option>
                  <option value="gold">Gold</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Level select */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Level</span>
              <div className="relative">
                <select 
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                  className="text-xs font-semibold bg-white border border-slate-200 rounded-xl px-3 py-2 pr-8 focus:outline-none focus:border-[var(--ln-teal-500)]/50 cursor-pointer appearance-none shadow-sm min-w-[100px]"
                >
                  <option value="all">All Levels</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(lvl => (
                    <option key={lvl} value={String(lvl)}>Level {lvl}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Difficulty select */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Difficulty</span>
              <div className="relative">
                <select 
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="text-xs font-semibold bg-white border border-slate-200 rounded-xl px-3 py-2 pr-8 focus:outline-none focus:border-[var(--ln-teal-500)]/50 cursor-pointer appearance-none shadow-sm min-w-[100px]"
                >
                  <option value="all">All</option>
                  <option value="LOW">Low</option>
                  <option value="MED">Medium</option>
                  <option value="HIGH">High</option>
                  <option value="ELITE">Elite</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Unlocked Toggles Pill */}
            <div className="flex flex-col gap-0.5 justify-end">
              <span className="text-[9px] font-bold text-transparent select-none uppercase">Filters</span>
              <button 
                onClick={() => setUnlockedOnly(!unlockedOnly)}
                className={cn(
                  "px-4 py-2 rounded-xl border text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer hover:bg-slate-50",
                  unlockedOnly 
                    ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)]/30 text-[var(--ln-teal-600)] hover:bg-[var(--ln-teal-soft)]"
                    : "bg-white border-slate-200 text-slate-600"
                )}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Unlocked Only</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 2. Category Tabs Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar shrink-0 border-b border-slate-100">
        {PRIMARY_TABS.map(tab => (
          <button
            key={tab}
            onClick={() => {
               setActiveTab(tab);
               setSelectedStrategy(null);
            }}
            className={cn(
              "px-5 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap",
              activeTab === tab 
                ? "bg-[var(--ln-teal-soft)] text-[var(--ln-teal-600)] border border-[var(--ln-teal-500)]/20 shadow-sm" 
                : "bg-white text-[var(--ln-text-secondary)] border border-transparent hover:bg-slate-50 hover:text-[var(--ln-navy-900)]"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. Three-Column Workspace Layout */}
      <div className="flex-1 flex gap-6 overflow-hidden pb-4">
        
        {/* LEFT COLUMN: Strategy list & search */}
        <div className="w-80 shrink-0 flex flex-col gap-3.5 overflow-hidden border-r border-slate-100 pr-4">
          <div className="relative shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search strategies..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-[var(--ln-border)] rounded-xl text-xs text-[var(--ln-navy-900)] font-medium focus:outline-none focus:border-[var(--ln-teal-500)]/50 transition-all shadow-sm placeholder:text-slate-400"
            />
          </div>

          {/* Strategies List */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
            {filteredStrategies.length > 0 ? (
              filteredStrategies.map((s) => {
                const sLocked = currentLevel < s.level;
                const sParsed = parseStrategyContent(s);
                const isSel = selectedStrategy?.logicId === s.logicId;
                
                return (
                  <button
                    key={s.logicId}
                    onClick={() => handleSelectStrategy(s)}
                    className={cn(
                      "w-full text-left p-3 rounded-xl border transition-all relative flex flex-col gap-1.5 shadow-sm group/card cursor-pointer",
                      isSel
                        ? "bg-teal-50/20 border-l-4 border-l-[var(--ln-teal-500)] border-[var(--ln-teal-500)]/20" 
                        : sLocked
                          ? "bg-slate-50/70 border-slate-200/50 opacity-75 hover:opacity-100"
                          : "bg-white border-slate-200/60 hover:bg-slate-50/50"
                    )}
                  >
                    <div className="flex items-center justify-between w-full text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                      <span>{s.logicId}</span>
                      <div className="flex items-center gap-1">
                        {sLocked ? (
                          <span className="flex items-center gap-1 text-[8px] font-black text-slate-500 bg-slate-200 px-1.5 py-0.5 rounded">
                            <Lock className="w-2 h-2" /> L{s.level} Req
                          </span>
                        ) : (
                          <span className="text-[8px] font-black text-[var(--ln-teal-600)] bg-[var(--ln-teal-soft)] px-1.5 py-0.5 rounded">
                            Lvl {s.level}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="font-extrabold text-[var(--ln-navy-900)] text-xs truncate leading-none group-hover/card:text-[var(--ln-teal-600)] transition-colors">
                      {s.name}
                    </h4>
                    
                    <p className="text-[10px] text-[var(--ln-text-secondary)] line-clamp-1 leading-normal font-semibold">
                      {sParsed.summary}
                    </p>

                    <div className="flex items-center gap-1.5 pt-1 border-t border-slate-100/50 w-full">
                      <span className="text-[8px] font-black text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded uppercase">
                        {s.track}
                      </span>
                      <span className="text-[8px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded uppercase">
                        {s.metrics?.complexity || "MED"}
                      </span>
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-6 text-center text-xs text-slate-400 italic">No strategies found.</div>
            )}
          </div>

          {/* Browse all concepts link */}
          <div className="shrink-0 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 hover:text-[var(--ln-navy-900)] cursor-pointer group">
            <span>Browse all concepts</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* MIDDLE COLUMN: Main learning content */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
          {!selectedStrategy ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <BookOpen className="w-12 h-12 text-slate-200 mb-4" />
              <p className="text-slate-500 font-medium text-xs">Select a concept to review its criteria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Breadcrumbs & Title header */}
              <div className="space-y-3">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <span>{activeTab}</span>
                  <ChevronRight size={10} className="text-slate-300" />
                  <span>{selectedStrategy.family}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-[var(--ln-teal-soft)] text-[var(--ln-teal-600)] text-[9px] font-black uppercase">
                        CONCEPT ID: {selectedStrategy.logicId}
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">
                        {selectedStrategy.family}
                      </span>
                      <span className="text-[9px] font-bold text-[var(--ln-teal-600)] bg-[var(--ln-teal-soft)] px-2 py-0.5 rounded uppercase">
                        Level {selectedStrategy.level}
                      </span>
                      <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded uppercase">
                        {selectedStrategy.track}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-[var(--ln-navy-900)] tracking-tight">
                      {selectedStrategy.name}
                    </h2>
                    <p className="text-xs text-[var(--ln-text-secondary)] font-semibold leading-relaxed">
                      Trading structural setups with precision rules.
                    </p>
                  </div>

                  {/* Bookmark and share header buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => toggleBookmark(selectedStrategy.logicId)}
                      className={cn(
                        "p-2.5 rounded-full border transition-all active:scale-95 cursor-pointer shadow-sm",
                        bookmarkedIds.includes(selectedStrategy.logicId)
                          ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)]/20 text-[var(--ln-teal-600)]"
                          : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                      )}
                      title="Bookmark Concept"
                    >
                      <Bookmark size={16} className={cn(bookmarkedIds.includes(selectedStrategy.logicId) && "fill-current")} />
                    </button>
                    <button 
                      className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 transition-all active:scale-95 cursor-pointer shadow-sm"
                      title="Share Concept"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Concept link copied to clipboard!");
                      }}
                    >
                      <ArrowRight size={16} className="rotate-180" />
                    </button>
                  </div>
                </div>
              </div>

              {isLocked ? (
                // Locked Preview State
                <div className="space-y-6">
                  <StrategySummaryCard summary={parsed.summary} />
                  
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
                // Full Learning Cards Grid
                <>
                  <StrategySummaryCard summary={parsed.summary} />
                  <StrategyConditionCard conditions={parsed.marketConditions} family={selectedStrategy.family} />
                  <StrategySetupLogicCard entryCriteria={parsed.entryCriteria} />
                  <StrategyTrapCard traps={parsed.traps} risk={parsed.risk} />
                  <StrategyRelatedLessons 
                    linkedModule={linkedModule} 
                    level={selectedStrategy.level} 
                    family={selectedStrategy.family} 
                  />
                </>
              )}

            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Interactive practice checklist & specifications */}
        {selectedStrategy && (
          <div className="w-80 shrink-0 flex flex-col gap-5 overflow-y-auto pl-4 border-l border-slate-100 pr-1 custom-scrollbar">
            
            {/* 1. Practice Checklist Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[var(--ln-teal-500)]" />
                  <h3 className="text-xs font-black text-[var(--ln-navy-900)] uppercase tracking-wider">
                    Practice Checklist
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-slate-400">
                  {selectedChecklist.length} / {CHECKLIST_ITEMS.length}
                </span>
              </div>

              <div className="space-y-3">
                {CHECKLIST_ITEMS.map((item, index) => {
                  const isChecked = selectedChecklist.includes(item);
                  return (
                    <button
                      key={index}
                      disabled={isLocked}
                      onClick={() => toggleChecklistItem(selectedStrategy.logicId, item)}
                      className={cn(
                        "w-full text-left flex items-start gap-2.5 group transition-all",
                        isLocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                      )}
                    >
                      <div className={cn(
                        "w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all mt-0.5",
                        isChecked
                          ? "bg-[var(--ln-teal-500)] border-[var(--ln-teal-500)] text-white shadow-sm"
                          : "bg-white border-slate-300 group-hover:border-[var(--ln-teal-500)]/40"
                      )}>
                        {isChecked && <CheckCircle2 className="w-2.5 h-2.5 stroke-[3] text-white" />}
                      </div>
                      <span className={cn(
                        "text-[10px] font-semibold leading-relaxed transition-colors",
                        isChecked ? "line-through text-slate-400" : "text-slate-600 group-hover:text-[var(--ln-navy-900)]"
                      )}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Concept Specifications Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <h3 className="text-xs font-black text-[var(--ln-navy-900)] uppercase tracking-wider">
                  Specifications
                </h3>
              </div>

              <div className="space-y-3.5">
                {/* Difficulty */}
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                  <span>Difficulty</span>
                  <span className={cn(
                    "text-[9px] font-black px-2 py-0.5 rounded-full uppercase border",
                    selectedStrategy.metrics?.complexity === "LOW" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                    selectedStrategy.metrics?.complexity === "MED" ? "bg-teal-50 text-teal-600 border-teal-100" :
                    selectedStrategy.metrics?.complexity === "HIGH" ? "bg-amber-50 text-amber-600 border-amber-100" :
                    "bg-rose-50 text-rose-600 border-rose-100"
                  )}>
                    {selectedStrategy.metrics?.complexity || "MED"}
                  </span>
                </div>

                {/* Practice Time */}
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                  <span>Est. Practice Time</span>
                  <span className="text-slate-700 font-extrabold">45 min</span>
                </div>

                {/* Avg R Factor */}
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                  <span>Average R Factor</span>
                  <span className="text-slate-700 font-extrabold">{selectedStrategy.metrics?.avgR || "2.5"} R</span>
                </div>

                {/* Win Rate */}
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                  <span>Historical Win Rate</span>
                  <span className="text-slate-700 font-extrabold">{selectedStrategy.metrics?.winRate || "55%"}</span>
                </div>

                {/* Best Used In */}
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                  <span>Best Used In</span>
                  <span className="text-slate-700 font-extrabold">
                    {selectedStrategy.family.toLowerCase().includes("trend") ? "Trending Markets" : "Volatile Markets"}
                  </span>
                </div>
              </div>

              {/* Bookmark Button */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => toggleBookmark(selectedStrategy.logicId)}
                  className={cn(
                    "w-full py-2.5 rounded-xl border text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer active:scale-[0.98]",
                    bookmarkedIds.includes(selectedStrategy.logicId)
                      ? "bg-teal-50 text-[var(--ln-teal-600)] border-[var(--ln-teal-500)]/20"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <Bookmark className={cn("w-3.5 h-3.5", bookmarkedIds.includes(selectedStrategy.logicId) && "fill-current")} />
                  <span>{bookmarkedIds.includes(selectedStrategy.logicId) ? "Bookmarked Concept" : "Bookmark Concept"}</span>
                </button>
              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
