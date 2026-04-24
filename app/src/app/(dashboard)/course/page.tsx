import { getCourseLevels } from "@/lib/course-actions";
import Link from "next/link";
import { Lock, ChevronRight, CheckCircle2, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function AcademyPage() {
  const levels = await getCourseLevels();

  return (
    <div className="space-y-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Academy</h1>
        <p className="text-[var(--color-text-secondary)] italic">
          Master the markets through a structured, institutional curriculum.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {levels.map((level) => (
          <Link
            key={level.level}
            href={level.locked ? "#" : `/course/${level.level}`}
            className={cn(
              "group p-6 rounded-2xl border transition-all relative overflow-hidden",
              level.locked
                ? "bg-[var(--color-surface-secondary)] border-[var(--color-border-default)] opacity-60 cursor-not-allowed"
                : "bg-gradient-to-br from-[var(--color-surface-secondary)] to-[var(--color-surface-tertiary)] border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] shadow-lg hover:shadow-brand-500/5"
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-brand-400)]">
                  Level {level.level}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-brand-400)] transition-colors">
                  {level.title}
                </h3>
              </div>
              {level.locked ? (
                <Lock className="w-5 h-5 text-[var(--color-text-muted)]" />
              ) : level.completionPct === 100 ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              ) : (
                <PlayCircle className="w-6 h-6 text-[var(--color-brand-400)]" />
              )}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs text-[var(--color-text-secondary)]">
                  {level.completedModules} / {level.totalModules} Modules
                </span>
                <span className="text-sm font-bold text-white">{level.completionPct}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] rounded-full transition-all duration-1000" 
                  style={{ width: `${level.completionPct}%` }}
                />
              </div>
            </div>

            {!level.locked && (
              <div className="mt-6 flex items-center text-xs font-bold text-[var(--color-brand-400)] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Continue Learning <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
