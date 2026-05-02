import { getUser } from "@/lib/auth-actions";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { AlertTriangle, Ghost, RefreshCcw, ShieldAlert, Target } from "lucide-react";
import { AcademyButton } from "@/components/ui/academy-button";
import { RemediationQuiz } from "../../../components/academy/remediation-quiz";
import Link from "next/link";

export default async function LiquidationPage({
  searchParams,
}: {
  searchParams: { moduleId: string; reason: string };
}) {
  const user = await getUser();
  if (!user) return null;

  const { moduleId, reason } = searchParams;

  const lastFailure = await (prisma as any).remediationLog.findFirst({
    where: {
      userId: user.id,
      moduleId: moduleId,
      isResolved: false,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6 overflow-hidden relative">
      {/* Soft Red Overlay */}
      <div className="absolute inset-0 bg-fail-red/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-fail-red/10" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-fail-red/10" />

      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Practice Review Report */}
        <div className="space-y-8">
          <div className="space-y-4">
             <div className="w-16 h-16 rounded-2xl bg-fail-red/10 border border-fail-red/20 flex items-center justify-center text-fail-red shadow-sm">
                <ShieldAlert size={32} />
             </div>
             <div className="space-y-2">
                <h1 className="text-4xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter uppercase leading-none">
                   Review <br /> <span className="text-fail-red">Required</span>
                </h1>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">Session Review ID: {lastFailure?.id.slice(0, 8) || "N/A"}</p>
             </div>
          </div>

          <div className="space-y-6">
             <div className="p-8 bg-slate-50 border border-[var(--ln-border)] rounded-[2.5rem] space-y-6 shadow-sm">
                <div className="space-y-1">
                   <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Learning Analysis</div>
                   <div className="text-xl font-extrabold text-[var(--ln-navy-900)] uppercase">{reason.replace("_", " ")} Identified</div>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed font-medium italic">
                   "{lastFailure?.details || "The selected logic does not align with Academy standards for this market condition."}"
                </p>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-white rounded-2xl border border-[var(--ln-border)] shadow-sm">
                      <div className="text-[8px] font-extrabold text-slate-400 uppercase mb-1">Review Priority</div>
                      <div className="text-lg font-extrabold text-fail-red">HIGH</div>
                   </div>
                   <div className="p-4 bg-white rounded-2xl border border-[var(--ln-border)] shadow-sm">
                      <div className="text-[8px] font-extrabold text-slate-400 uppercase mb-1">Logic Accuracy</div>
                      <div className="text-lg font-extrabold text-[var(--ln-navy-900)]">0.0%</div>
                   </div>
                </div>
             </div>

             <div className="p-6 bg-fail-red/[0.03] border border-fail-red/10 rounded-2xl space-y-4">
                <div className="text-[10px] font-extrabold text-fail-red uppercase tracking-widest">Recorded Discrepancies</div>
                <div className="space-y-2">
                   {[
                      "HTF Liquidity Misalignment",
                      "Market Structure Shift (MSS) Missing",
                      "Academy Level 1 Pattern Neglected"
                   ].map((rule, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                         <div className="w-1 h-1 rounded-full bg-fail-red" />
                         {rule}
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="flex items-center gap-4">
             <Link href="/dashboard" className="text-xs font-extrabold text-slate-400 hover:text-[var(--ln-navy-900)] transition-colors uppercase tracking-widest flex items-center gap-2">
                <Ghost size={14} /> Return to Dashboard
             </Link>
          </div>
        </div>

        {/* Right: Remediation Quiz */}
        <div className="relative">
           <div className="absolute -inset-4 bg-[var(--ln-teal-500)]/[0.03] blur-3xl rounded-full" />
           <RemediationQuiz moduleId={moduleId} />
        </div>

      </div>
    </main>
  );
}
