import { prisma } from "@/lib/prisma";
import { getProfile } from "@/lib/auth-actions";
import { redirect } from "next/navigation";
import { Shield, Database, User, Calendar, CheckCircle2, XCircle } from "lucide-react";
import { format } from "date-fns";

export default async function DebugScenariosPage() {
  const profile = await getProfile();
  if (!profile || !profile.isAdmin) {
    redirect("/dashboard");
  }

  const attempts = await prisma.scenarioAttempt.findMany({
    include: {
      user: true,
      scenario: true
    },
    orderBy: { startedAt: 'desc' },
    take: 100
  });

  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest">
            <Shield className="w-4 h-4" />
            Admin Environment
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight uppercase">
            Mission Debug Console
          </h1>
        </div>
      </div>

      <div className="bg-[#161B22] border border-white/5 rounded-[2rem] overflow-hidden">
        <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm font-bold text-white">
            <Database className="w-4 h-4 text-slate-500" />
            Latest 100 Attempts
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <th className="p-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Student</th>
                <th className="p-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Scenario</th>
                <th className="p-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="p-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Score</th>
                <th className="p-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sync Time</th>
                <th className="p-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Details</th>
              </tr>
            </thead>
            <tbody>
              {attempts.map((attempt: any) => (
                <tr key={attempt.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400">
                        <User size={14} />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold text-white">{attempt.user.name}</p>
                        <p className="text-[10px] text-slate-500 font-mono">{attempt.userId.slice(0, 8)}...</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-white">{attempt.scenario.title}</p>
                      <p className="text-[10px] text-slate-500 font-mono italic">{attempt.scenario.slug}</p>
                    </div>
                  </td>
                  <td className="p-6">
                    {attempt.passed ? (
                      <span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 uppercase">
                        <CheckCircle2 size={12} /> Passed
                      </span>
                    ) : attempt.status === 'failed' ? (
                      <span className="flex items-center gap-1.5 text-[9px] font-bold text-rose-400 uppercase">
                        <XCircle size={12} /> Failed
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold text-amber-400 uppercase tracking-tighter">
                        {attempt.status}
                      </span>
                    )}
                  </td>
                  <td className="p-6">
                    <span className="text-sm font-mono font-bold text-white">
                      {attempt.score !== null ? `${attempt.score}%` : '--'}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                      <Calendar size={12} />
                      {format(new Date(attempt.startedAt), 'MMM dd, HH:mm')}
                    </div>
                  </td>
                  <td className="p-6">
                     <pre className="text-[8px] text-slate-600 font-mono max-w-[200px] overflow-hidden text-ellipsis">
                       {JSON.stringify(attempt.gradingResult, null, 0)}
                     </pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
