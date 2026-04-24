import { getUser } from "@/lib/auth-actions";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { AlertTriangle, Ghost, RefreshCcw, ShieldAlert, Target } from "lucide-react";
import { InstitutionalButton } from "@/components/ui/institutional-button";
import { RemediationQuiz } from "../../../components/academy/remediation-quiz";
import Link from "next/link";

export default async function LiquidationPage({
  searchParams,
}: {
  searchParams: { moduleId: string; reason: string };
}) {
  const user = await getUser();
  if (!user) redirect("/login");

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
    <main className="min-h-screen bg-[#0A0A0B] flex items-center justify-center p-6 overflow-hidden relative">
      {/* Red Glitch Background Overlay */}
      <div className="absolute inset-0 bg-fail-red/5 animate-pulse pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-fail-red/30" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-fail-red/30" />

      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Tactical Failure Report */}
        <div className="space-y-8">
          <div className="space-y-4">
             <div className="w-16 h-16 rounded-2xl bg-fail-red/10 border border-fail-red/20 flex items-center justify-center text-fail-red shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                <ShieldAlert size={32} />
             </div>
             <div className="space-y-2">
                <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">
                   Execution <br /> <span className="text-fail-red">Wipeout</span>
                </h1>
                <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Post-Mortem Report ID: {lastFailure?.id.slice(0, 8) || "N/A"}</p>
             </div>
          </div>

          <div className="space-y-6">
             <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] space-y-6">
                <div className="space-y-1">
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Failure Analysis</div>
                   <div className="text-xl font-bold text-white uppercase">{reason.replace("_", " ")} Detected</div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed italic">
                   "{lastFailure?.details || "You clicked directly into an institutional trap zone. Your capital would have been liquidated in a real market scenario."}"
                </p>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-[8px] font-bold text-slate-500 uppercase mb-1">Loss Severity</div>
                      <div className="text-lg font-bold text-fail-red">CRITICAL</div>
                   </div>
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-[8px] font-bold text-slate-500 uppercase mb-1">Logic Alignment</div>
                      <div className="text-lg font-bold text-slate-300">0.0%</div>
                   </div>
                </div>
             </div>

             <div className="p-6 bg-fail-red/5 border border-fail-red/10 rounded-2xl space-y-4">
                <div className="text-[10px] font-bold text-fail-red uppercase tracking-widest">Rule Violation Ledger</div>
                <div className="space-y-2">
                   {[
                      "Entering into HTF Liquidity Void",
                      "Lack of Market Structure Shift (MSS)",
                      "Ignore Institutional Footprint Level 1"
                   ].map((rule, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-slate-400">
                         <div className="w-1 h-1 rounded-full bg-fail-red" />
                         {rule}
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="flex items-center gap-4">
             <Link href="/dashboard" className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2">
                <Ghost size={14} /> Retreat to Terminal
             </Link>
          </div>
        </div>

        {/* Right: Remediation Quiz */}
        <div className="relative">
           <div className="absolute -inset-4 bg-[var(--color-brand-500)]/5 blur-3xl rounded-full" />
           <RemediationQuiz moduleId={moduleId} />
        </div>

      </div>
    </main>
  );
}
