import { getUserCertifications } from "@/lib/certification-engine";
import { getUser } from "@/lib/auth-actions";
import { ShieldCheck, Award, ExternalLink, Calendar, Target, Activity } from "lucide-react";
import { format } from "date-fns";
import { DownloadCertButton } from "@/components/dashboard/download-cert-button";
import Link from "next/link";

export default async function CertificationPage() {
  const user = await getUser();
  if (!user) return null;

  const certifications = await getUserCertifications(user.id);

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <section className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-white tracking-tight uppercase">
            Operational Credentials
          </h1>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#6366F1] uppercase tracking-widest bg-[#6366F1]/5 px-2 py-0.5 rounded-md border border-[#6366F1]/10">
              <ShieldCheck size={12} /> Verified Personnel
            </span>
            <p className="text-slate-500 italic text-sm">
              Official records of your institutional performance benchmarks.
            </p>
          </div>
        </div>
      </section>

      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="relative group">
              {/* Certificate Card Container */}
              <div className="bg-[#0D1117] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl transition-all group-hover:border-[#6366F1]/20">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Award size={200} />
                </div>

                <div className="p-12 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                  {/* Left: Cert Badge */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center p-1 shadow-[0_0_50px_rgba(99,102,241,0.2)]">
                    <div className="w-full h-full rounded-full bg-[#0D1117] flex flex-col items-center justify-center text-center">
                      <Award className="text-[#6366F1] mb-1" size={48} />
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                        L{cert.certLevel} Earned
                      </span>
                    </div>
                  </div>

                  {/* Center: Details */}
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold text-white tracking-tight leading-none">
                        {cert.certTitle}
                      </h3>
                      <p className="text-[#6366F1] font-mono text-sm uppercase tracking-widest">
                        {cert.marketTrack} Protocol · Benchmarked Discipline
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="space-y-1">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                          <Calendar size={10} /> Issued
                        </p>
                        <p className="text-sm font-bold text-white">
                          {format(new Date(cert.issuedAt), "MMM dd, yyyy")}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                          <Target size={10} /> Final Score
                        </p>
                        <p className="text-sm font-bold text-emerald-400">
                          {Number(cert.finalScore).toFixed(1)}%
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                          <Activity size={10} /> ID
                        </p>
                        <p className="text-[10px] font-mono text-white/50">
                          {cert.certIdPublic}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex flex-col gap-3 w-full md:w-auto">
                    <DownloadCertButton />
                    <Link
                      href={`/verify/${cert.certIdPublic}`}
                      className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                    >
                      <ExternalLink size={18} /> Public Verify
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-20 bg-[#0D1117] border border-white/5 rounded-[3rem] text-center space-y-8 flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#6366F1]/5 blur-[120px] pointer-events-none" />
          <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500">
            <Award size={40} />
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-white tracking-tighter uppercase">
              No Active Credentials
            </h2>
            <p className="text-slate-500 max-w-md mx-auto leading-relaxed text-sm">
              Your performance records are currently in the simulation phase.
              Complete the required benchmarks to earn your first institutional
              certificate.
            </p>
          </div>
          <Link
            href="/trading"
            className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all flex items-center gap-3 group"
          >
            Access Simulator
            <Target size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
}
