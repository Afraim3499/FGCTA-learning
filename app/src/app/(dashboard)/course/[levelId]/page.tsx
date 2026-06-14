import { getModules, getCourseLevels } from "@/lib/course-actions";
import Link from "next/link";
import { ChevronLeft, CheckCircle2, Circle, ArrowRight, Award, Lock, FlaskConical, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavaTrigger } from "@/components/nava/NavaTrigger";
import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { STRATEGIES_DATA, getStrategyLevel } from "@/lib/strategies-data";

export default async function LevelPage({ params }: { params: Promise<{ levelId: string }> }) {
  const { levelId: levelIdStr } = await params;
  const levelId = parseInt(levelIdStr);
  
  const user = await getUser();
  if (!user) return <div>Unauthorized</div>;

  const profile = await prisma.user.findUnique({
    where: { id: user.id },
    select: { 
      progress: {
        select: { currentLevel: true }
      }
    },
  });

  const userLevel = profile?.progress?.currentLevel ?? 0;

  // Fetch strategies for this level
  const dbStrategies = await prisma.strategy.findMany({
    orderBy: { sequenceNumber: "asc" }
  });

  const staticNames = new Set(STRATEGIES_DATA.map(s => s.name.toLowerCase().trim()));

  const mappedDb = dbStrategies
    .filter(dbS => !staticNames.has(dbS.name.toLowerCase().trim()))
    .map(dbS => {
      const level = getStrategyLevel(dbS.parentFamily, dbS.assetClass, dbS.sequenceNumber);
      const prefix = dbS.assetClass === "CRYPTO" ? "CR" : dbS.assetClass === "GOLD" ? "GD" : "FX";
      const logicId = `${prefix}-${String(dbS.sequenceNumber).padStart(3, "0")}`;

      return {
        logicId,
        name: dbS.name,
        family: dbS.parentFamily,
        level,
        isDbStrategy: true,
      };
    });

  const allStrategies = [...STRATEGIES_DATA, ...mappedDb];
  const levelStrategies = allStrategies.filter(s => s.level === levelId);

  // Group by family
  const groupedStrategies: Record<string, typeof levelStrategies> = {};
  levelStrategies.forEach(s => {
    const fam = s.family || "Other";
    if (!groupedStrategies[fam]) groupedStrategies[fam] = [];
    groupedStrategies[fam].push(s);
  });

  let modules: any[] = [];
  let allLevels: any[] = [];
  let currentLevel: any = null;
  let isLocked = false;

  try {
    modules = await getModules(levelId);
    allLevels = await getCourseLevels();
    currentLevel = allLevels.find(l => l.level === levelId);
  } catch (error: any) {
    if (error.message === "Level is locked" || error.message === "Unauthorized") {
      isLocked = true;
      allLevels = await getCourseLevels();
      currentLevel = allLevels.find(l => l.level === levelId);
    } else {
      throw error;
    }
  }

  if (!currentLevel) return <div>Level not found</div>;

  if (isLocked) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center">
        <div className="w-20 h-20 rounded-3xl bg-[var(--ln-bg-soft)] flex items-center justify-center text-[var(--ln-text-dim)] shadow-inner border border-[var(--ln-border)]">
          <Award size={40} className="opacity-20" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tighter">Level {levelId} Restricted</h2>
          <p className="text-[var(--ln-text-secondary)] max-w-md mx-auto font-medium">
            This part of the curriculum is currently locked. Complete the prerequisite Knowledge Test to unlock {currentLevel.title}.
          </p>
        </div>
        <Link 
          href="/course" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--ln-navy-900)] hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Academy
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      {currentLevel.testUnlocked && <NavaTrigger messageId="knowledge_test_unlocked" />}
      <Link 
        href="/course" 
        className="inline-flex items-center text-sm text-[var(--ln-text-secondary)] hover:text-[var(--ln-navy-900)] transition-colors group font-medium"
      >
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Academy
      </Link>

      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--ln-border)] pb-8 gap-6">
        <div className="space-y-4 flex-1">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--ln-teal-600)]">
              Curriculum Path
            </span>
            <h1 className="text-4xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">{currentLevel.title}</h1>
            <p className="text-[var(--ln-text-secondary)] font-medium">Level {levelId} Overview</p>
          </div>

          <div className="max-w-xs space-y-2">
            <div className="flex justify-between text-[10px] font-extrabold uppercase tracking-widest">
              <span className="text-[var(--ln-text-muted)]">Level Progress</span>
              <span className="text-[var(--ln-navy-900)]">{currentLevel.completionPct}%</span>
            </div>
            <div className="h-2 w-full bg-[var(--ln-bg-soft)] rounded-full overflow-hidden border border-[var(--ln-border)]">
              {/* eslint-disable-next-line react/no-inline-styles */}
              <div 
                className="h-full bg-[var(--ln-teal-500)] rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(20,184,166,0.3)]" 
                style={{ 
                  "--progress-width": `${currentLevel.completionPct}%`,
                  width: "var(--progress-width)"
                } as React.CSSProperties}
              />
            </div>
          </div>
        </div>
        
        {currentLevel.testUnlocked ? (
          <Link
            href={`/test/${levelId}`}
            data-nava-target="knowledge-test-launcher"
            className="flex items-center gap-2 px-8 py-4 bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white font-extrabold rounded-2xl transition-all shadow-xl shadow-[var(--ln-teal-500)]/20 whitespace-nowrap text-xs uppercase tracking-widest"
          >
            <Award className="w-5 h-5" />
            Start Knowledge Test
          </Link>
        ) : (
          <div className="text-right hidden md:block">
            <span className="text-[10px] font-extrabold text-[var(--ln-text-muted)] uppercase tracking-widest block mb-1">
              Test Status
            </span>
            <span className="text-xs font-bold text-[var(--ln-text-dim)] uppercase tracking-tight">
              Complete {currentLevel.totalModules - currentLevel.completedModules} more modules to unlock
            </span>
          </div>
        )}
      </header>

      {/* Syllabus banner/prompt for Level 0 */}
      {levelId === 0 && (
        <div className="p-6 bg-gradient-to-br from-teal-50/40 via-teal-50/10 to-white border border-[var(--ln-border)] rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 flex-1 text-center sm:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-teal-600">Syllabus Guide</span>
            <h2 className="text-xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">Interactive Syllabus Map</h2>
            <p className="text-sm text-[var(--ln-text-secondary)] leading-relaxed max-w-xl font-medium">
              Explore Level 0's complete 6-stage learning journey and 15-module card mapping, presented in detail by Nava.
            </p>
          </div>
          <Link
            href="/course/0/syllabus"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--ln-navy-900)] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 active:scale-95"
          >
            Open Syllabus Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      <div className="relative space-y-4">
        <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-[var(--ln-border-soft)] hidden md:block" />

        {modules.map((mod, i) => (
          <Link
            key={mod.id}
            href={`/course/module/${mod.id}`}
            className="flex items-center gap-6 p-6 bg-white border border-[var(--ln-border)] rounded-2xl hover:border-[var(--ln-teal-500)]/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
          >
            <div className="relative z-10 flex-shrink-0">
              {mod.completed ? (
                <CheckCircle2 className="w-14 h-14 text-emerald-500 bg-white rounded-full" />
              ) : (
                <Circle className="w-14 h-14 text-[var(--ln-text-dim)] bg-white rounded-full group-hover:text-[var(--ln-teal-500)] transition-colors" />
              )}
            </div>
            
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-[var(--ln-teal-600)] uppercase tracking-widest">
                  Module {mod.moduleNumber}
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--ln-text-dim)]" />
                <span className="text-[10px] font-bold text-[var(--ln-text-muted)] uppercase tracking-widest">
                  {mod.skillLevel}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[var(--ln-navy-900)] group-hover:text-[var(--ln-teal-500)] transition-colors uppercase tracking-tight">
                {mod.title}
              </h3>
              <p className="text-sm text-[var(--ln-text-secondary)] line-clamp-1 italic font-medium">
                {mod.objective}
              </p>
            </div>

            <ArrowRight className="w-5 h-5 text-[var(--ln-text-muted)] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
          </Link>
        ))}
      </div>

      {levelStrategies.length > 0 && (
        <section className="space-y-6 pt-12 border-t border-[var(--ln-border)]">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-[var(--ln-teal-soft)] rounded-xl text-[var(--ln-teal-500)]">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">Level {levelId} Playbook & Reference Tools</h2>
            </div>
            <p className="text-sm text-[var(--ln-text-secondary)] font-medium max-w-2xl">
              Study and practice these concepts in the Strategy Lab once unlocked. Locking is determined by your current progress level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(groupedStrategies).map(([family, list]) => {
              return (
                <div key={family} className="bg-white border border-[var(--ln-border)] rounded-3xl p-6 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[var(--ln-teal-600)] border-b border-slate-100 pb-2">{family}</h3>
                  <div className="space-y-2.5">
                    {list.map((strat) => {
                      const isLocked = userLevel < levelId;
                      return (
                        <div key={strat.logicId} className={cn(
                          "flex items-center justify-between p-3.5 rounded-2xl border transition-all",
                          isLocked ? "bg-slate-50 border-slate-150 opacity-70" : "bg-white border-[var(--ln-border)] hover:border-[var(--ln-teal-500)]/25"
                        )}>
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-[var(--ln-teal-soft)] text-[var(--ln-teal-600)] text-[9px] font-bold uppercase tracking-wider">{strat.logicId}</span>
                            <span className="text-xs font-bold text-[var(--ln-navy-900)]">{strat.name}</span>
                          </div>
                          {isLocked ? (
                            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 bg-slate-200/50 px-2 py-1 rounded">
                              <Lock className="w-3 h-3 text-slate-400" />
                              Lvl {levelId} Req
                            </div>
                          ) : (
                            <Link
                              href={`/lab?strategy=${strat.logicId}`}
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-[var(--ln-teal-soft)] hover:bg-[var(--ln-teal-200)] text-[var(--ln-teal-600)] text-[10px] font-bold rounded-lg transition-all"
                            >
                              Open in Lab <ExternalLink size={10} />
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
