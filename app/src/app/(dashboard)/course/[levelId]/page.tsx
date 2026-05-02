import { getModules, getCourseLevels } from "@/lib/course-actions";
import Link from "next/link";
import { ChevronLeft, CheckCircle2, Circle, ArrowRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavaTrigger } from "@/components/nava/NavaTrigger";

export default async function LevelPage({ params }: { params: Promise<{ levelId: string }> }) {
  const { levelId: levelIdStr } = await params;
  const levelId = parseInt(levelIdStr);
  const modules = await getModules(levelId);
  const allLevels = await getCourseLevels();
  const currentLevel = allLevels.find(l => l.level === levelId);

  if (!currentLevel) return <div>Level not found</div>;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {currentLevel.testUnlocked && <NavaTrigger messageId="knowledge_test_unlocked" />}
      <Link 
        href="/course" 
        className="inline-flex items-center text-sm text-[var(--color-text-muted)] hover:text-white transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Academy
      </Link>

      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--color-border-default)] pb-8 gap-6">
        <div className="space-y-4 flex-1">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-400)]">
              Curriculum Path
            </span>
            <h1 className="text-4xl font-bold text-white">{currentLevel.title}</h1>
            <p className="text-[var(--color-text-secondary)]">Level {levelId} Overview</p>
          </div>

          <div className="max-w-xs space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
              <span className="text-[var(--color-text-muted)]">Level Progress</span>
              <span className="text-white">{currentLevel.completionPct}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] rounded-full transition-all duration-1000" 
                style={{ width: `${currentLevel.completionPct}%` }}
              />
            </div>
          </div>
        </div>
        
        {currentLevel.testUnlocked ? (
          <Link
            href={`/test/${levelId}`}
            data-nava-target="knowledge-test-launcher"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-600)] text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20 whitespace-nowrap"
          >
            <Award className="w-5 h-5" />
            Start Knowledge Test
          </Link>
        ) : (
          <div className="text-right hidden md:block">
            <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest block mb-1">
              Test Status
            </span>
            <span className="text-sm font-bold text-white/40">
              Complete {currentLevel.totalModules - currentLevel.completedModules} more modules to unlock
            </span>
          </div>
        )}
      </header>

      <div className="relative space-y-4">
        {/* Connection Line */}
        <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-[var(--color-border-default)] hidden md:block" />

        {modules.map((mod, i) => (
          <Link
            key={mod.id}
            href={`/course/module/${mod.id}`}
            className="flex items-center gap-6 p-6 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-2xl hover:border-[var(--color-border-hover)] transition-all group"
          >
            <div className="relative z-10 flex-shrink-0">
              {mod.completed ? (
                <CheckCircle2 className="w-14 h-14 text-emerald-400 bg-[var(--color-surface-secondary)] rounded-full" />
              ) : (
                <Circle className="w-14 h-14 text-[var(--color-text-muted)] bg-[var(--color-surface-secondary)] rounded-full group-hover:text-[var(--color-brand-400)] transition-colors" />
              )}
            </div>
            
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-[var(--color-brand-400)] uppercase tracking-tighter">
                  Module {mod.moduleNumber}
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-text-muted)]" />
                <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
                  {mod.skillLevel}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-brand-400)] transition-colors">
                {mod.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] line-clamp-1 italic">
                {mod.objective}
              </p>
            </div>

            <ArrowRight className="w-5 h-5 text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
