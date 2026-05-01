import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Sparkles, Target, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--ln-bg)]">
      <Navbar />
      
      <main className="pt-[160px] pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-[var(--ln-teal-500)] flex items-center gap-2">
              <Sparkles size={14} />
              ABOUT LURNAVA
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--ln-navy-900)] leading-[1.1]">
              Built for traders who seek <span className="text-[var(--ln-teal-500)]">structure.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
              Lurnava Academy was founded on a single principle: successful trading is about decisions, not predictions. We replace hype with a structured pedagogical journey.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-[var(--ln-border)] rounded-[32px] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--ln-teal-soft)] flex items-center justify-center">
                <Target className="text-[var(--ln-teal-500)]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--ln-navy-900)]">Visual-First Education</h3>
              <p className="text-slate-500 leading-relaxed">
                We believe in annotated charts and interactive missions, not dense text. Our curriculum is designed to be seen and practiced, not just read.
              </p>
            </div>

            <div className="p-8 bg-white border border-[var(--ln-border)] rounded-[32px] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--ln-navy-900)]">Risk-First Mentality</h3>
              <p className="text-slate-500 leading-relaxed">
                Before you learn how to win, you must learn how to survive. Our training enforces strict risk awareness from the very first module.
              </p>
            </div>

            <div className="p-8 bg-white border border-[var(--ln-border)] rounded-[32px] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                <Sparkles className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--ln-navy-900)]">No Hype Promise</h3>
              <p className="text-slate-500 leading-relaxed">
                No signals. No guaranteed profits. No fake certainty. We teach structured market learning and let the progress speak for itself.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="pt-12 border-t border-[var(--ln-border-soft)]">
            <div className="bg-[var(--ln-navy-900)] rounded-[40px] p-12 text-center space-y-8 relative overflow-hidden">
               {/* Decorative background circle */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
               
               <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
                 Ready to build your foundation?
               </h2>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                 <Link 
                   href="/register" 
                   className="px-10 py-5 bg-[var(--ln-teal-500)] text-white font-bold rounded-2xl hover:bg-[var(--ln-teal-600)] transition-all flex items-center gap-2 group"
                 >
                   Join the Academy
                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
                 <Link 
                   href="/curriculum" 
                   className="px-10 py-5 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                 >
                   View Curriculum
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

