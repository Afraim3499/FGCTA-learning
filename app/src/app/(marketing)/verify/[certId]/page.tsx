import { getPublicCertification } from "@/lib/certification-engine";
import { ShieldCheck, Award, Calendar, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

interface VerifyPageProps {
  params: { certId: string };
}

export default async function VerifyPage({ params }: VerifyPageProps) {
  const cert = await getPublicCertification(params.certId);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366F1]/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="w-full max-w-2xl relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 text-xs font-bold uppercase tracking-widest">
          <ArrowLeft size={14} /> Lurnava Academy
        </Link>

        {cert ? (
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                <ShieldCheck size={12} /> Verifiable Credential
              </div>
              <h1 className="text-5xl font-bold text-white tracking-tighter uppercase">
                Certificate Verified
              </h1>
            </div>

            <div className="bg-[#0D1117] border border-white/5 rounded-[3rem] p-12 md:p-16 space-y-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <CheckCircle2 size={120} />
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-bold text-[#6366F1] uppercase tracking-[0.3em]">
                  Recipient
                </p>
                <h2 className="text-3xl font-bold text-white">
                  {cert.user.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Certification
                  </p>
                  <p className="text-xl font-bold text-white tracking-tight">
                    {cert.certTitle}
                  </p>
                  <p className="text-xs text-slate-500 uppercase font-mono">
                    {cert.marketTrack} Protocol
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Issuance Date
                  </p>
                  <p className="text-xl font-bold text-white tracking-tight">
                    {format(new Date(cert.issuedAt), "MMMM dd, yyyy")}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 uppercase tracking-widest font-bold">
                    <Calendar size={12} /> Verified
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Credential ID
                  </p>
                  <p className="text-sm font-mono text-[#6366F1] font-bold">
                    {cert.certIdPublic}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Performance Tier
                  </p>
                  <p className="text-sm font-bold text-emerald-400">
                    Distinction ({Number(cert.finalScore).toFixed(1)}%)
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6366F1]">
                    <Award size={20} />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                    Institutional Standard <br />
                    <span className="text-white">Lurnava Academy</span>
                  </div>
                </div>
                <div className="text-[9px] text-slate-600 italic">
                  Digital fingerprint: {cert.certIdPublic.split('-').join('')}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8">
            <div className="w-20 h-20 bg-rose-500/10 border border-rose-500/20 rounded-3xl mx-auto flex items-center justify-center text-rose-500">
              <AlertTriangle size={40} />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-white tracking-tighter uppercase">
                Invalid Credential
              </h1>
              <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                The certificate ID <strong>{params.certId}</strong> was not found in our secure registry. It may be invalid, revoked, or incorrectly entered.
              </p>
            </div>
            <Link href="/" className="inline-flex px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all">
              Return to Academy
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
