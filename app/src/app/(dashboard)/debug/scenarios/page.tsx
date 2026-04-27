import { prisma } from "@/lib/prisma";
import { getProfile } from "@/lib/auth-actions";
import { redirect } from "next/navigation";
import { Shield, Database, User, Calendar, CheckCircle2, XCircle, MapPin } from "lucide-react";
import { format } from "date-fns";

export default async function DebugScenariosPage() {
  const profile = await getProfile();
  if (!profile || !profile.isAdmin) {
    redirect("/dashboard");
  }

  const attempts = await prisma.scenarioAttempt.findMany({
    include: { user: true, scenario: true },
    orderBy: { startedAt: 'desc' },
    take: 100
  });

  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest">
            <Shield className="w-4 h-4" /> Admin Environment
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight uppercase">
            Mission Debug Console
          </h1>
          <p className="text-slate-500 text-sm">{attempts.length} attempts total</p>
        </div>
      </div>

      <div className="bg-[#161B22] border border-white/5 rounded-[2rem] overflow-hidden">
        <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center gap-3 text-sm font-bold text-white">
          <Database className="w-4 h-4 text-slate-500" />
          Latest 100 Attempts
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <th className="p-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Student</th>
                <th className="p-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Scenario</th>
                <th className="p-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Type</th>
                <th className="p-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="p-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Score</th>
                <th className="p-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Overlap</th>
                <th className="p-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Weakness</th>
                <th className="p-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Time</th>
              </tr>
            </thead>
            <tbody>
              {attempts.map((attempt: any) => {
                const grading  = attempt.gradingResult as any;
                const isChart  = attempt.scenario.scenarioType === 'structure_annotation'
                  && (attempt.scenario.metadata as any)?.interactionMode === 'chart_markup_v1';

                return (
                  <tr key={attempt.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-400">
                          <User size={12} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">{attempt.user.name}</p>
                          <p className="text-[9px] text-slate-500 font-mono">{attempt.userId.slice(0, 8)}…</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <p className="text-xs font-bold text-white max-w-[160px] truncate">{attempt.scenario.title}</p>
                      <p className="text-[9px] text-slate-500 font-mono italic">{attempt.scenario.slug}</p>
                    </td>
                    <td className="p-5">
                      {isChart ? (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-bold bg-[var(--color-brand-500)]/10 text-[var(--color-brand-400)] border border-[var(--color-brand-500)]/20 uppercase whitespace-nowrap">
                          <MapPin size={9} /> Chart Markup
                        </span>
                      ) : (
                        <span className="text-[9px] text-slate-500 uppercase">{attempt.scenario.scenarioType}</span>
                      )}
                    </td>
                    <td className="p-5">
                      {attempt.passed ? (
                        <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-400 uppercase">
                          <CheckCircle2 size={11} /> Passed
                        </span>
                      ) : attempt.status === 'failed' ? (
                        <span className="flex items-center gap-1 text-[9px] font-bold text-rose-400 uppercase">
                          <XCircle size={11} /> Failed
                        </span>
                      ) : (
                        <span className="text-[9px] font-bold text-amber-400 uppercase">{attempt.status}</span>
                      )}
                    </td>
                    <td className="p-5">
                      <span className="text-sm font-mono font-bold text-white">
                        {attempt.score !== null ? attempt.score : '--'}
                      </span>
                    </td>
                    <td className="p-5">
                      {isChart && grading?.overlapPct !== undefined ? (
                        <div className="space-y-1">
                          <span className="text-sm font-mono font-bold text-white">{grading.overlapPct}%</span>
                          <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className={grading.overlapPct >= 60 ? "h-full bg-emerald-500" : "h-full bg-rose-500"}
                              style={{ width: `${Math.min(grading.overlapPct, 100)}%` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <span className="text-[10px] text-slate-600">—</span>
                      )}
                    </td>
                    <td className="p-5">
                      {attempt.weaknessTags?.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {attempt.weaknessTags.map((tag: string) => (
                            <span key={tag} className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-amber-500/10 text-amber-400 uppercase">
                              {tag.replace(/_/g, ' ')}
                            </span>
                          ))}
                        </div>
                      ) : <span className="text-[10px] text-slate-600">—</span>}
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                        <Calendar size={11} />
                        {format(new Date(attempt.startedAt), 'MMM dd, HH:mm')}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
