"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  ChevronLeft, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Lock, 
  BookOpen, 
  Compass, 
  Activity, 
  HelpCircle,
  FileText,
  PlayCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NavaPoseImage } from "@/components/nava/NavaPoseImage";
import { level0Curriculum, level0Stages } from "@/content/level-0";

interface DBModule {
  id: string;
  moduleNumber: string;
  title: string;
  objective: string;
  skillLevel: string;
  completed: boolean;
}

interface Level0SyllabusClientProps {
  modules: DBModule[];
}

export default function Level0SyllabusClient({ modules }: Level0SyllabusClientProps) {
  const [expandedStages, setExpandedStages] = useState<Record<number, boolean>>({
    1: true, // Stage 1 expanded by default
  });
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  // Helper to toggle stages
  const toggleStage = (stageNum: number) => {
    setExpandedStages(prev => ({
      ...prev,
      [stageNum]: !prev[stageNum]
    }));
  };

  // Helper to toggle modules
  const toggleModule = (modNum: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [modNum]: !prev[modNum]
    }));
  };

  // Calculate completions
  const completedCount = modules.filter(m => m.completed).length;
  const totalCount = modules.length;
  const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Find the first incomplete module to continue
  const firstIncompleteModule = modules.find(m => !m.completed) || modules[0];

  // Helper to render card type badges with clear contrast
  const renderCardTypeBadge = (type: string) => {
    const isPractice = type === "practice" || type === "drill" || type === "task";
    if (isPractice) {
      return (
        <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 border border-teal-200 text-teal-600">
          <Activity className="w-2.5 h-2.5" />
          Practice Card
        </span>
      );
    }
    if (type === "mission_brief") {
      return (
        <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 border border-purple-200 text-purple-600">
          <Compass className="w-2.5 h-2.5" />
          Mission Brief
        </span>
      );
    }
    if (type === "concept") {
      return (
        <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-600">
          <BookOpen className="w-2.5 h-2.5" />
          Concept
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
        <FileText className="w-2.5 h-2.5" />
        {type}
      </span>
    );
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-20 px-4 md:px-6">
      {/* Breadcrumb navigation */}
      <Link 
        href="/course/0" 
        className="inline-flex items-center text-sm text-[var(--ln-text-secondary)] hover:text-[var(--ln-navy-900)] transition-colors group font-medium"
      >
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Level 0 Dashboard
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Nava presentation panel */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          <div className="bg-white border border-[var(--ln-border)] rounded-3xl p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

            {/* Nava Avatar Stage */}
            <div className="w-44 h-44 flex items-center justify-center shrink-0 overflow-hidden bg-gradient-to-b from-teal-50/50 to-white rounded-full border border-teal-100/50 mb-4">
              <NavaPoseImage 
                pose="pointing" 
                attentionLevel="medium"
                className="scale-105 translate-y-3"
              />
            </div>

            {/* Title & Speech Bubble */}
            <div className="space-y-4 relative z-10 w-full">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-teal-600 block">Academy Onboarding</span>
                <h1 className="text-xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">Level 0 Syllabus Map</h1>
              </div>

              {/* Nava Speech Dialogue Bubble */}
              <div className="p-4 bg-teal-50/50 border border-teal-100/50 rounded-2xl text-left relative">
                {/* Dialogue tail */}
                <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-teal-50/50 pointer-events-none" />
                <p className="text-xs text-[var(--ln-text-secondary)] font-medium leading-relaxed">
                  “Before you begin Level 0, here is your full learning map. You are not here to memorize signals. You are here to learn how to observe, classify, verify, practice, and review.”
                </p>
              </div>

              {/* Level 0 Purpose */}
              <div className="text-left border-t border-[var(--ln-border)] pt-4 space-y-2">
                <p className="text-[10px] font-extrabold text-[var(--ln-text-muted)] uppercase tracking-wider">Level 0 Goal</p>
                <p className="text-xs text-[var(--ln-text-secondary)] font-medium leading-relaxed">
                  Build baseline market reading competence. Learn how price movement forms swings, how structure maps out, and establish process quality discipline before entering execution layers.
                </p>
              </div>

              {/* Level progress strip */}
              <div className="text-left pt-4 border-t border-[var(--ln-border)] space-y-2">
                <div className="flex justify-between text-[10px] font-extrabold uppercase tracking-wider">
                  <span className="text-[var(--ln-text-muted)]">Completed Modules</span>
                  <span className="text-[var(--ln-navy-900)]">{completedCount} / {totalCount} ({progressPct}%)</span>
                </div>
                <div className="h-2 w-full bg-slate-50 border border-[var(--ln-border)] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[var(--ln-teal-500)] rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(20,184,166,0.3)]" 
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-4 border-t border-[var(--ln-border)]">
                <Link
                  href={`/course/module/${firstIncompleteModule?.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--ln-navy-900)] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
                >
                  <PlayCircle className="w-4 h-4" />
                  {completedCount === 0 ? "Start Level 0" : "Continue Level 0"}
                </Link>
                <Link
                  href="/course/0"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-50 hover:bg-slate-100 border border-[var(--ln-border)] text-[var(--ln-navy-900)] text-xs font-bold uppercase tracking-wider rounded-xl transition-all active:scale-95"
                >
                  Dashboard Overview
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Interactive Stages Map */}
        <div className="lg:col-span-8 space-y-4">
          <div className="space-y-2 mb-6">
            <h2 className="text-2xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">The 6-Stage Curriculum</h2>
            <p className="text-sm text-[var(--ln-text-secondary)] font-medium">
              Click a stage header below to reveal the modules inside, then click a module to inspect its card-by-card structure.
            </p>
          </div>

          <div className="space-y-4">
            {level0Stages.map((stage) => {
              const isOpen = !!expandedStages[stage.number];
              
              // Calculate stage completions
              const stageDbModules = modules.filter(m => stage.modules.includes(m.moduleNumber));
              const stageCompletedCount = stageDbModules.filter(m => m.completed).length;
              const stageTotalCount = stageDbModules.length;
              const stageComplete = stageCompletedCount === stageTotalCount && stageTotalCount > 0;

              return (
                <div 
                  key={stage.number} 
                  className={cn(
                    "border rounded-3xl overflow-hidden transition-all bg-white",
                    stageComplete ? "border-emerald-500/20 shadow-sm" : "border-[var(--ln-border)] shadow-sm"
                  )}
                >
                  {/* Stage Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleStage(stage.number)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left group bg-slate-50/50 hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-[10px] font-black uppercase tracking-wider text-teal-600">
                          Stage {stage.number}
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                          Modules {stage.modules.join("–")}
                        </span>
                        {stageComplete && (
                          <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Stage Complete
                          </span>
                        )}
                      </div>
                      <h3 className="text-base md:text-lg font-extrabold text-[var(--ln-navy-900)] mt-1 uppercase tracking-tight">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-[var(--ln-text-secondary)] font-medium mt-1 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 bg-white border border-slate-100 rounded-lg px-2.5 py-1">
                        {stageCompletedCount}/{stageTotalCount} Complete
                      </span>
                      <ChevronDown 
                        size={18} 
                        className={cn(
                          "text-slate-400 group-hover:text-slate-600 transition-transform duration-300", 
                          isOpen && "rotate-180"
                        )} 
                      />
                    </div>
                  </button>

                  {/* Stage Body (Modules List) */}
                  {isOpen && (
                    <div className="border-t border-[var(--ln-border-soft)] p-6 space-y-4">
                      {stage.modules.map((modNum) => {
                        const dbMod = modules.find(m => m.moduleNumber === modNum);
                        const richMod = level0Curriculum.find(m => m.moduleNumber === modNum);
                        if (!dbMod || !richMod) return null;

                        const isModOpen = !!expandedModules[modNum];
                        const isSpecialized = parseFloat(modNum) >= 0.9 && parseFloat(modNum) <= 0.15;
                        
                        // Determine lab tags
                        let trackLabel = "";
                        if (modNum === "0.9") trackLabel = "Gold Specialized Lab";
                        else if (modNum === "0.10") trackLabel = "Forex Specialized Lab";
                        else if (modNum === "0.11") trackLabel = "Crypto Venue Lab";
                        else if (modNum === "0.12") trackLabel = "Crypto Derivatives Lab";
                        else if (modNum === "0.13") trackLabel = "Practice Discipline Lab";
                        else if (modNum === "0.14") trackLabel = "Practice Note Lab";
                        else if (modNum === "0.15") trackLabel = "Final Foundation Mission";

                        return (
                          <div 
                            key={modNum} 
                            className={cn(
                              "border rounded-2xl overflow-hidden transition-all bg-[var(--ln-bg-soft)]",
                              dbMod.completed ? "border-emerald-500/10" : "border-[var(--ln-border-soft)]"
                            )}
                          >
                            {/* Module row button */}
                            <button
                              type="button"
                              onClick={() => toggleModule(modNum)}
                              className="w-full px-5 py-4 flex items-center justify-between text-left group hover:bg-slate-100/40 transition-colors"
                            >
                              <div className="flex-1 min-w-0 pr-4">
                                <div className="flex items-center gap-2.5 flex-wrap mb-1">
                                  <span className="text-[10px] font-mono font-black text-teal-600">
                                    Module {modNum}
                                  </span>
                                  {isSpecialized ? (
                                    <span className="text-[8px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-600">
                                      {trackLabel} • Core Specialized Track
                                    </span>
                                  ) : (
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      {["core", "forex", "gold", "crypto"].map((track) => (
                                        <span key={track} className="text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.25 rounded bg-slate-100 text-slate-500">
                                          {track}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                                <h4 className="text-sm md:text-base font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">
                                  {dbMod.title}
                                </h4>
                                <p className="text-xs text-[var(--ln-text-secondary)] font-medium italic mt-1 leading-relaxed">
                                  {dbMod.objective}
                                </p>
                              </div>

                              <div className="flex items-center gap-3 shrink-0">
                                <div className="relative z-10">
                                  {dbMod.completed ? (
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                  ) : (
                                    <Circle className="w-6 h-6 text-slate-300" />
                                  )}
                                </div>
                                <ChevronDown 
                                  size={16} 
                                  className={cn(
                                    "text-slate-400 group-hover:text-slate-600 transition-transform duration-200", 
                                    isModOpen && "rotate-180"
                                  )} 
                                />
                              </div>
                            </button>

                            {/* Module card list expanded */}
                            {isModOpen && (
                              <div className="border-t border-[var(--ln-border-soft)] p-5 bg-white space-y-4">
                                <div className="space-y-2">
                                  <span className="text-[9px] font-black uppercase tracking-widest text-[var(--ln-text-muted)] block">
                                    Card-By-Card Learning Map ({richMod.tracks.core.length} cards)
                                  </span>
                                  
                                  {/* Card loop */}
                                  <div className="divide-y divide-slate-100 border border-[var(--ln-border-soft)] rounded-xl overflow-hidden">
                                    {richMod.tracks.core.map((card, idx) => (
                                      <div key={idx} className="p-3.5 flex items-start gap-4 hover:bg-slate-50/50 transition-colors">
                                        <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                                          <span className="text-[10px] font-mono font-bold text-slate-500">{idx + 1}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-[11px] font-bold text-[var(--ln-navy-900)]">
                                              {card.title}
                                            </span>
                                            {renderCardTypeBadge(card.type)}
                                            {card.label && (
                                              <span className="text-[9px] font-medium text-[var(--ln-text-secondary)] uppercase bg-slate-50 border border-slate-100 rounded px-1.5">
                                                {card.label}
                                              </span>
                                            )}
                                          </div>
                                          {card.objective && (
                                            <p className="text-[11px] text-[var(--ln-text-secondary)] mt-0.5 leading-relaxed font-medium">
                                              {card.objective}
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex justify-end pt-2">
                                  <Link
                                    href={`/course/module/${dbMod.id}`}
                                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[var(--ln-navy-900)] hover:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm active:scale-95"
                                  >
                                    Study Module
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
