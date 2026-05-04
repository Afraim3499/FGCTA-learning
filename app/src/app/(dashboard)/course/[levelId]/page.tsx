import { getModules, getCourseLevels } from "@/lib/course-actions";
import Link from "next/link";
import { ChevronLeft, CheckCircle2, Circle, ArrowRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavaTrigger } from "@/components/nava/NavaTrigger";

export default async function LevelPage({ params }: { params: Promise<{ levelId: string }> }) {
  const { levelId: levelIdStr } = await params;
  const levelId = parseInt(levelIdStr);
  
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
    <div className="space-y-8 max-w-4xl mx-auto">
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
              <div 
                className="h-full bg-[var(--ln-teal-500)] rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(20,184,166,0.3)]" 
                style={{ width: `${currentLevel.completionPct}%` }}
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
    </div>
  );
}
