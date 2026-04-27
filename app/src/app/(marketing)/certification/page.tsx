import Link from "next/link";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { InstitutionalButton } from "@/components/ui/institutional-button";
import { Award, ShieldCheck, Zap, Target, Globe, BarChart3 } from "lucide-react";

export default function CertificationPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <main className="pt-40 pb-20 px-6 max-w-7xl mx-auto space-y-32">
        {/* Hero */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[10px] font-bold text-accent-blue uppercase tracking-widest">
            <Award size={12} /> Institutional Standards
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            The Gold <span className="text-accent-blue italic">Standard</span> of Trading Execution.
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            FGC Certifications are not participation trophies. They are cryptographic proofs of execution precision, risk discipline, and market mastery.
          </p>
        </div>

        {/* The Three Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Operational Associate",
              level: "Tier 1-3",
              icon: Zap,
              description: "Verified ability to execute basic institutional protocols and maintain static risk limits.",
              requirements: ["90% Logic Accuracy", "Max 2% Daily Drawdown", "50+ Validated Trades"]
            },
            {
              title: "Strategy Operator",
              level: "Tier 4-7",
              icon: Target,
              description: "Verified mastery of macro differentials and cross-asset liquidity harvesting.",
              requirements: ["95% Logic Accuracy", "Max 1% Daily Drawdown", "Proven Profit Consistency"]
            },
            {
              title: "Institutional Desk Lead",
              level: "Tier 8-10",
              icon: Globe,
              description: "The elite 0.1%. Authorized for high-capital simulation and algorithmic desk management.",
              requirements: ["99.9% Logic Accuracy", "Zero Rule Violations", "S-Rank Performance Grade"]
            }
          ].map((tier, i) => (
            <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] space-y-8 hover:border-accent-blue/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                <tier.icon size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{tier.level}</span>
                <h3 className="text-2xl font-black uppercase">{tier.title}</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{tier.description}</p>
              <div className="space-y-3 pt-6 border-t border-white/5">
                {tier.requirements.map(req => (
                  <div key={req} className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <div className="w-1 h-1 rounded-full bg-accent-blue" />
                    {req}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Proof */}
        <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Publicly Verifiable Credentials.</h2>
            <p className="text-text-secondary leading-relaxed">
              Every certificate issued by the FGC Academy is etched into our secure ledger. Employers and capital partners can verify your execution metrics in real-time through our public gateway.
            </p>
            <div className="flex gap-4">
              <InstitutionalButton variant="outline" asChild>
                <Link href="/verify">
                  EXPLORE VERIFICATION GATEWAY
                </Link>
              </InstitutionalButton>
            </div>
          </div>
          <div className="w-full max-w-sm aspect-[4/5] bg-[#0D1117] border border-white/10 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-10">
                <ShieldCheck size={100} />
             </div>
             <div className="space-y-8">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                   <Award size={24} />
                </div>
                <div className="space-y-4">
                   <div className="h-4 w-32 bg-white/5 rounded" />
                   <div className="h-8 w-48 bg-white/10 rounded" />
                   <div className="h-4 w-40 bg-white/5 rounded" />
                </div>
                <div className="pt-8 border-t border-white/5 space-y-4">
                   <div className="flex justify-between">
                      <div className="h-3 w-16 bg-white/5 rounded" />
                      <div className="h-3 w-16 bg-white/5 rounded" />
                   </div>
                   <div className="h-10 w-full bg-accent-blue/20 rounded-xl" />
                </div>
             </div>
             {/* Scanner Overlay Animation */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/10 to-transparent h-1/2 w-full animate-scan" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
