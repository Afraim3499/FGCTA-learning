import { getCourseLevels } from "@/lib/course-actions";
import Link from "next/link";
import { BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export async function LearningProgressCard() {
  const levels = await getCourseLevels();
  
  // Find the current active level (the first one that is NOT locked)
  const activeLevel = levels.find(l => !l.locked && l.completionPct < 100) || levels[0];
  
  // Calculate total global progress
  const totalModules = levels.reduce((acc, curr) => acc + curr.totalModules, 0);
  const completedModules = levels.reduce((acc, curr) => acc + curr.completedModules, 0);
  const globalCompletionPct = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

  return (
    <div className="bg-gradient-to-br from-[var(--color-surface-secondary)] to-[var(--color-surface-tertiary)] border border-[var(--color-border-default)] rounded-3xl p-6 flex flex-col h-full group hover:border-[var(--color-brand-500)] transition-all">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[var(--color-brand-500)]/20 rounded-xl">
            <BookOpen className="w-5 h-5 text-[var(--color-brand-400)]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Curriculum</h3>
            <p className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-tighter">Learning Engine</p>
          </div>
        </div>
        <span className="text-xl font-mono font-bold text-white">{globalCompletionPct}%</span>
      </div>

      <div className="space-y-6 flex-1">
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Global Progress</span>
            <span className="text-[10px] font-mono text-[var(--color-text-secondary)]">{completedModules}/{totalModules} Modules</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] rounded-full transition-all duration-1000" 
              style={{ width: `${globalCompletionPct}%` }}
            />
          </div>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-3">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="block text-[9px] font-bold text-[var(--color-brand-400)] uppercase tracking-tighter">Current Level {activeLevel.level}</span>
              <h4 className="text-sm font-bold text-white leading-tight">{activeLevel.title}</h4>
            </div>
            {activeLevel.completionPct === 100 && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
          </div>
          
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[var(--color-brand-500)] transition-all duration-700" 
              style={{ width: `${activeLevel.completionPct}%` }}
            />
          </div>
        </div>
      </div>

      <Link
        href={`/course/${activeLevel.level}`}
        className="mt-8 flex items-center justify-between p-4 bg-white text-black rounded-xl font-bold text-sm hover:bg-white/90 transition-all active:scale-[0.98]"
      >
        Continue Learning
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
