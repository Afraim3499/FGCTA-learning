import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { AcademyButton } from "@/components/ui/academy-button";
import { Award, ShieldCheck, Download, Share2, Globe, ExternalLink } from "lucide-react";
import { getUser } from "@/lib/auth-actions";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function UserLearningRecordPage() {
  const user = await getUser();
  if (!user) redirect("/login");

  // Fetch Prisma profile for display name
  const profile = await prisma.user.findUnique({
    where: { id: user.id }
  });

  // Fetch user LearningRecords
  const LearningRecords = await prisma.certification.findMany({
    where: { userId: user.id },
    orderBy: { issuedAt: 'desc' }
  });

  if (LearningRecords.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-navy-900)]">
        <Navbar />
        <main className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center space-y-8">
           <div className="w-20 h-20 bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20 rounded-full flex items-center justify-center mx-auto text-[var(--ln-teal-500)]">
              <Award size={40} />
           </div>
           <div className="space-y-2">
              <h1 className="text-4xl font-extrabold uppercase tracking-tighter text-[var(--ln-navy-900)]">No Records Found</h1>
              <p className="text-[var(--ln-text-secondary)] max-w-md mx-auto font-medium">
                 You have not yet completed your learning journey. Finish Level 3 (Final Review) to earn your academy completion record.
              </p>
           </div>
           <AcademyButton onClick={() => redirect("/dashboard")}>
              RETURN TO DASHBOARD
           </AcademyButton>
        </main>
        <Footer />
      </div>
    );
  }

  const latestCert = LearningRecords[0];

  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-navy-900)]">
      <Navbar />
      
      <main className="pt-40 pb-20 px-6 max-w-6xl mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           {/* Left: Certificate Visual */}
           <div className="aspect-[1.4/1] bg-white border-8 border-slate-100 rounded-3xl shadow-2xl p-12 relative overflow-hidden group">
              {/* Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden text-[8px] font-mono leading-none break-all p-2 text-[var(--ln-teal-500)]">
                 {(latestCert.certIdPublic + " ").repeat(500)}
              </div>
              
              <div className="relative h-full border border-slate-100 p-10 flex flex-col justify-between items-center text-center rounded-2xl">
                 <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20 flex items-center justify-center mx-auto text-[var(--ln-teal-500)]">
                       <ShieldCheck size={32} />
                    </div>
                    <h2 className="text-xs font-extrabold tracking-[0.5em] text-[var(--ln-teal-500)] uppercase">Academy LearningRecord</h2>
                 </div>

                 <div className="space-y-4">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">This document confirms that</p>
                    <h3 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter uppercase">{profile?.name || user.email}</h3>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-relaxed">
                       Has successfully completed the <span className="text-[var(--ln-navy-900)] uppercase">{latestCert.marketTrack}</span> track<br />
                       and demonstrated proficiency across all academy levels.
                    </p>
                 </div>

                 <div className="w-full flex justify-between items-end">
                    <div className="text-left space-y-1">
                       <p className="text-[8px] font-extrabold text-slate-300 uppercase">Record Date</p>
                       <p className="text-[10px] font-mono font-bold text-[var(--ln-navy-900)]">{new Date(latestCert.issuedAt).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right space-y-1">
                       <p className="text-[8px] font-extrabold text-slate-300 uppercase">Record ID</p>
                       <p className="text-[10px] font-mono font-bold text-[var(--ln-navy-900)]">{latestCert.id.substring(0, 12).toUpperCase()}</p>
                    </div>
                 </div>
              </div>
              
              {/* Holographic Seal */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--ln-teal-soft)] rounded-full blur-3xl opacity-50" />
           </div>

           {/* Right: Actions & Stats */}
           <div className="space-y-10">
              <div className="space-y-4">
                 <h1 className="text-5xl font-extrabold tracking-tighter uppercase text-[var(--ln-navy-900)]">Progress <span className="text-[var(--ln-teal-500)]">Recorded</span>.</h1>
                 <p className="text-[var(--ln-text-secondary)] leading-relaxed font-medium">
                    Your learning progress has been confirmed and updated in the Academy Records. This document recognizes your understanding and commitment to the curriculum.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-8 bg-white border border-[var(--ln-border)] rounded-[2rem] space-y-1 shadow-sm">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Learning Grade</p>
                    <p className="text-2xl font-extrabold text-[var(--ln-teal-600)] uppercase">{Number(latestCert.finalScore).toFixed(1)}%</p>
                 </div>
                 <div className="p-8 bg-white border border-[var(--ln-border)] rounded-[2rem] space-y-1 shadow-sm">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Progress Rank</p>
                    <p className="text-2xl font-extrabold text-[var(--ln-navy-900)] uppercase">Top 0.1%</p>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                 <AcademyButton className="flex-1 h-14 rounded-2xl bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white font-extrabold uppercase tracking-widest text-[10px]">
                    <Download size={18} className="mr-2" /> SAVE RECORD (PDF)
                 </AcademyButton>
                 <AcademyButton variant="outline" className="flex-1 h-14 rounded-2xl border-[var(--ln-border)] text-[var(--ln-navy-900)] font-extrabold uppercase tracking-widest text-[10px]">
                    <Share2 size={18} className="mr-2" /> SHARE PROGRESS
                 </AcademyButton>
              </div>

              <div className="pt-10 border-t border-[var(--ln-border)] space-y-4">
                 <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Record Verification Gateway</h4>
                 <div className="flex items-center justify-between p-5 bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20 rounded-2xl group cursor-pointer hover:bg-[var(--ln-teal-500)]/10 transition-all">
                    <div className="flex items-center gap-3">
                       <Globe size={18} className="text-[var(--ln-teal-500)]" />
                       <span className="text-xs font-mono font-bold text-[var(--ln-navy-900)]">verification.lurnava.com/v/{latestCert.id.substring(0, 8)}</span>
                    </div>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-[var(--ln-teal-500)] transition-colors" />
                 </div>
              </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
