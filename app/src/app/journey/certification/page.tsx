import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { InstitutionalButton } from "@/components/ui/institutional-button";
import { Award, ShieldCheck, Download, Share2, Globe, ExternalLink } from "lucide-react";
import { getUser } from "@/lib/auth-actions";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function UserCertificationPage() {
  const user = await getUser();
  if (!user) redirect("/login");

  // Fetch Prisma profile for display name
  const profile = await prisma.user.findUnique({
    where: { id: user.id }
  });

  // Fetch user certifications
  const certifications = await prisma.certification.findMany({
    where: { userId: user.id },
    orderBy: { issuedAt: 'desc' }
  });

  if (certifications.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />
        <main className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center space-y-8">
           <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto text-slate-500">
              <Award size={40} />
           </div>
           <div className="space-y-2">
              <h1 className="text-4xl font-black uppercase tracking-tighter">No Certifications Issued</h1>
              <p className="text-text-secondary max-w-md mx-auto">
                 You have not yet completed a tactical track. Finish Tier 8 (The Crucible) to earn your institutional credentials.
              </p>
           </div>
           <InstitutionalButton onClick={() => redirect("/dashboard")}>
              RETURN TO COMMAND CENTER
           </InstitutionalButton>
        </main>
        <Footer />
      </div>
    );
  }

  const latestCert = certifications[0];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <main className="pt-40 pb-20 px-6 max-w-6xl mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           {/* Left: Certificate Visual */}
           <div className="aspect-[1.4/1] bg-[#0D1117] border-8 border-[#1A1F26] rounded-xl shadow-2xl p-12 relative overflow-hidden group">
              {/* Institutional Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden text-[8px] font-mono leading-none break-all p-2">
                 {(latestCert.certIdPublic + " ").repeat(500)}
              </div>
              
              <div className="relative h-full border border-white/10 p-10 flex flex-col justify-between items-center text-center">
                 <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mx-auto text-accent-blue">
                       <ShieldCheck size={32} />
                    </div>
                    <h2 className="text-xs font-bold tracking-[0.5em] text-accent-blue uppercase">Institutional Trading Certificate</h2>
                 </div>

                 <div className="space-y-4">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">This document certifies that</p>
                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase">{profile?.name || user.email}</h3>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                       Has successfully completed the <span className="text-white uppercase">{latestCert.marketTrack}</span> track<br />
                       and demonstrated execution mastery across all 8 institutional tiers.
                    </p>
                 </div>

                 <div className="w-full flex justify-between items-end">
                    <div className="text-left space-y-1">
                       <p className="text-[8px] font-bold text-slate-600 uppercase">Issue Date</p>
                       <p className="text-[10px] font-mono text-white">{new Date(latestCert.issuedAt).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right space-y-1">
                       <p className="text-[8px] font-bold text-slate-600 uppercase">Credential ID</p>
                       <p className="text-[10px] font-mono text-white">{latestCert.id.substring(0, 12).toUpperCase()}</p>
                    </div>
                 </div>
              </div>
              
              {/* Holographic Seal */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-blue/20 rounded-full blur-3xl" />
           </div>

           {/* Right: Actions & Stats */}
           <div className="space-y-10">
              <div className="space-y-4">
                 <h1 className="text-5xl font-black tracking-tighter uppercase">Operational <span className="text-accent-blue">Verified</span>.</h1>
                 <p className="text-text-secondary leading-relaxed">
                    Your performance data has been cryptographically signed and stored in the FGC Ledger. This certification serves as high-fidelity proof of your trading discipline and technical precision.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Performance Grade</p>
                    <p className="text-2xl font-black text-pass-green uppercase">{Number(latestCert.finalScore).toFixed(1)}%</p>
                 </div>
                 <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Percentile Rank</p>
                    <p className="text-2xl font-black text-white">TOP 0.1%</p>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                 <InstitutionalButton glow className="flex-1">
                    <Download size={18} className="mr-2" /> DOWNLOAD PDF
                 </InstitutionalButton>
                 <InstitutionalButton variant="outline" className="flex-1">
                    <Share2 size={18} className="mr-2" /> ADD TO LINKEDIN
                 </InstitutionalButton>
              </div>

              <div className="pt-10 border-t border-white/5 space-y-4">
                 <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Public Verification Gateway</h4>
                 <div className="flex items-center justify-between p-4 bg-accent-blue/5 border border-accent-blue/20 rounded-xl group cursor-pointer hover:bg-accent-blue/10 transition-all">
                    <div className="flex items-center gap-3">
                       <Globe size={18} className="text-accent-blue" />
                       <span className="text-xs font-mono text-white">verification.fgc.academy/v/{latestCert.id.substring(0, 8)}</span>
                    </div>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-accent-blue transition-colors" />
                 </div>
              </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
