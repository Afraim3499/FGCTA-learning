import { getUserLearningRecords } from "@/lib/learning-record-engine";
import { getUser } from "@/lib/auth-actions";
import { ShieldCheck, Award, ExternalLink, Calendar, Target, Activity } from "lucide-react";
import { format } from "date-fns";
import { DownloadCertButton } from "@/components/dashboard/download-cert-button";
import Link from "next/link";

export default async function LearningRecordPage() {
  const user = await getUser();
  if (!user) return null;

  const LearningRecords = await getUserLearningRecords(user.id);

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <section className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">
            Academy Achievements
          </h1>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[10px] font-extrabold text-[var(--ln-teal-600)] uppercase tracking-widest bg-[var(--ln-teal-soft)] px-3 py-1 rounded-lg border border-[var(--ln-teal-500)]/10">
              <ShieldCheck size={12} /> Verified Student
            </span>
            <p className="text-slate-500 font-medium text-sm">
              Official records of your Academy learning progress and achievements.
            </p>
          </div>
        </div>
      </section>

      {LearningRecords.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {LearningRecords.map((cert: any) => (
            <div key={cert.id} className="relative group">
              {/* Record Card Container */}
              <div className="bg-white border border-[var(--ln-border)] rounded-[3rem] overflow-hidden shadow-sm transition-all group-hover:border-[var(--ln-teal-500)]/20 group-hover:shadow-xl group-hover:shadow-[var(--ln-teal-500)]/5">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-[var(--ln-navy-900)]">
                  <Award size={200} />
                </div>

                <div className="p-12 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                  {/* Left: Achievement Badge */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[var(--ln-teal-500)] to-[var(--ln-teal-600)] flex items-center justify-center p-1 shadow-lg shadow-[var(--ln-teal-500)]/20">
                    <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center">
                      <Award className="text-[var(--ln-teal-500)] mb-1" size={48} />
                      <span className="text-[10px] font-extrabold text-[var(--ln-navy-900)] uppercase tracking-widest">
                        Level {cert.certLevel}
                      </span>
                    </div>
                  </div>

                  {/* Center: Details */}
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-extrabold text-[var(--ln-navy-900)] tracking-tight leading-none">
                        {cert.certTitle.replace('Certification', 'Record')}
                      </h3>
                      <p className="text-[var(--ln-teal-600)] font-extrabold text-xs uppercase tracking-[0.2em]">
                        {cert.marketTrack} Academy · Verified Achievement
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="space-y-1">
                        <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                          <Calendar size={10} /> Issued
                        </p>
                        <p className="text-sm font-bold text-[var(--ln-navy-900)]">
                          {format(new Date(cert.issuedAt), "MMM dd, yyyy")}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                          <Target size={10} /> Knowledge Score
                        </p>
                        <p className="text-sm font-bold text-[var(--ln-teal-600)]">
                          {Number(cert.finalScore).toFixed(1)}%
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                          <Activity size={10} /> Record ID
                        </p>
                        <p className="text-[10px] font-mono font-bold text-slate-300">
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
                      className="px-8 py-4 bg-slate-50 border border-slate-100 text-[var(--ln-navy-900)] font-extrabold text-xs uppercase tracking-widest rounded-2xl hover:bg-white active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-sm"
                    >
                      <ExternalLink size={16} /> Public Record
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-20 bg-white border border-[var(--ln-border)] rounded-[3rem] text-center space-y-8 flex flex-col items-center relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-[var(--ln-teal-soft)]/20 blur-[120px] pointer-events-none" />
          <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 shadow-inner">
            <Award size={40} />
          </div>
          <div className="space-y-3 relative z-10">
            <h2 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter uppercase">
              No Active Records
            </h2>
            <p className="text-slate-500 max-w-md mx-auto leading-relaxed text-sm font-medium">
              Your achievement records are currently pending. Complete the required learning modules and knowledge tests to earn your first Academy record.
            </p>
          </div>
          <Link
            href="/trading"
            className="px-10 py-4 bg-[var(--ln-teal-500)] text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl hover:bg-[var(--ln-teal-600)] active:scale-[0.98] transition-all flex items-center gap-3 group relative z-10 shadow-lg shadow-[var(--ln-teal-500)]/20"
          >
            Access Practice Environment
            <Target size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
}
