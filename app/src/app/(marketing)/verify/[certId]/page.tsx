import { getPublicLearningRecord } from "@/lib/learning-record-engine";
import { ShieldCheck, Award, Calendar, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

interface VerifyPageProps {
  params: { certId: string };
}

export default async function VerifyPage({ params }: VerifyPageProps) {
  const cert = await getPublicLearningRecord(params.certId);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--ln-teal-soft)]/20 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="w-full max-w-2xl relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[var(--ln-navy-900)] transition-colors mb-8 text-[10px] font-extrabold uppercase tracking-widest">
          <ArrowLeft size={14} /> Lurnava Academy
        </Link>

        {cert ? (
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/10 text-[10px] font-extrabold text-[var(--ln-teal-600)] uppercase tracking-widest">
                <ShieldCheck size={12} /> Verifiable Achievement
              </div>
              <h1 className="text-5xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter uppercase">
                Record Verified
              </h1>
            </div>

            <div className="bg-white border border-[var(--ln-border)] rounded-[3rem] p-12 md:p-16 space-y-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[var(--ln-navy-900)]">
                <CheckCircle2 size={120} />
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-extrabold text-[var(--ln-teal-500)] uppercase tracking-[0.3em]">
                  Student
                </p>
                <h2 className="text-3xl font-extrabold text-[var(--ln-navy-900)]">
                  {cert.user.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-1">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                    Achievement
                  </p>
                  <p className="text-xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">
                    {cert.certTitle.replace('Certification', 'Record')}
                  </p>
                  <p className="text-xs text-slate-500 uppercase font-mono font-bold">
                    {cert.marketTrack} Academy
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                    Verification Date
                  </p>
                  <p className="text-xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">
                    {format(new Date(cert.issuedAt), "MMMM dd, yyyy")}
                  </p>
                  <p className="text-xs text-[var(--ln-teal-600)] flex items-center gap-1 uppercase tracking-widest font-extrabold">
                    <Calendar size={12} /> Verified
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                    Record ID
                  </p>
                  <p className="text-sm font-mono text-[var(--ln-teal-600)] font-bold">
                    {cert.certIdPublic}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                    Performance Tier
                  </p>
                  <p className="text-sm font-extrabold text-[var(--ln-teal-600)]">
                    Distinction ({Number(cert.finalScore).toFixed(1)}%)
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[var(--ln-teal-500)] shadow-inner">
                    <Award size={20} />
                  </div>
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-relaxed">
                    Academy Standard <br />
                    <span className="text-[var(--ln-navy-900)]">Lurnava Academy</span>
                  </div>
                </div>
                <div className="text-[9px] text-slate-300 italic font-medium">
                  ID: {cert.certIdPublic.split('-').join('')}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8 bg-white border border-[var(--ln-border)] rounded-[3rem] p-16 shadow-sm">
            <div className="w-20 h-20 bg-rose-50 border border-rose-100 rounded-3xl mx-auto flex items-center justify-center text-rose-500 shadow-inner">
              <AlertTriangle size={40} />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter uppercase">
                Invalid Record
              </h1>
              <p className="text-slate-500 max-w-md mx-auto leading-relaxed font-medium">
                The record ID <strong>{params.certId}</strong> was not found in our secure registry. It may be invalid or incorrectly entered.
              </p>
            </div>
            <Link href="/" className="inline-flex px-10 py-4 bg-[var(--ln-teal-500)] text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl hover:bg-[var(--ln-teal-600)] active:scale-[0.98] transition-all shadow-lg shadow-[var(--ln-teal-500)]/20">
              Return to Academy
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
