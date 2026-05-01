import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { redirect } from "next/navigation";
import { ChartPractice } from "@/components/academy/interactive/chart-practice-engine";
import { LendingPractice } from "@/components/academy/interactive/lending-practice";
import { OrderFlowDOM } from "@/components/academy/interactive/order-flow-dom";
import { MacroDashboard } from "@/components/academy/interactive/macro-dashboard";
import { AcademyCard, AcademyCardContent, AcademyCardHeader, AcademyCardTitle } from "@/components/ui/academy-card";
import { AcademyButton } from "@/components/ui/academy-button";
import { DataBadge } from "@/components/ui/data-badge";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BookOpen, ShieldCheck, Zap, ChevronRight, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

interface JourneyPageProps {
  params: {
    assetClass: string;
    level: string;
  };
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const user = await getUser();
  if (!user) redirect("/login");

  const levelInt = parseInt(params.level);
  const assetClass = params.assetClass.toLowerCase();

  // Fetch the current module for this user's progress in this track
  const module = await prisma.courseModule.findFirst({
    where: {
      level: levelInt,
    },
    orderBy: {
      orderIndex: "asc"
    }
  });

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h2 className="text-2xl font-extrabold text-white uppercase tracking-tighter">Mission Data Not Found</h2>
        <p className="text-text-muted">The requested Practice data is currently encrypted or unavailable.</p>
        <AcademyButton variant="outline" onClick={() => redirect("/dashboard")}>Return to Command Center</AcademyButton>
      </div>
    );
  }

  // Determine adaptation content
  let adaptedContent = module.content;
  if (assetClass === "crypto" && module.cryptoAdaptation) adaptedContent = module.cryptoAdaptation;
  if (assetClass === "forex" && module.forexAdaptation) adaptedContent = module.forexAdaptation;
  if (assetClass === "gold" && module.goldAdaptation) adaptedContent = module.goldAdaptation;

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8 space-y-12">
      {/* Academy Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--ln-border)] pb-8">
         <div className="space-y-4">
            <div className="flex items-center gap-3">
               <DataBadge variant="outline" className="font-extrabold text-[9px] text-slate-400 uppercase tracking-widest">{assetClass.toUpperCase()}_SECTOR</DataBadge>
               <DataBadge variant="profit" className="font-extrabold text-[9px] text-[var(--ln-teal-500)] uppercase tracking-widest">ACADEMY_{levelInt}</DataBadge>
            </div>
            <div className="space-y-1">
               <div className="text-[10px] font-extrabold text-[var(--ln-teal-500)] uppercase tracking-[0.4em]">Academy Briefing</div>
               <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter uppercase">{module.title}</h1>
            </div>
         </div>
         <div className="flex gap-3">
            <div className="p-4 bg-white border border-[var(--ln-border)] rounded-2xl text-center min-w-[120px] shadow-sm">
               <p className="text-[9px] font-extrabold text-slate-400 uppercase mb-1">XP Reward</p>
               <p className="text-xl font-extrabold text-[var(--ln-navy-900)]">+500</p>
            </div>
            <div className="p-4 bg-white border border-[var(--ln-border)] rounded-2xl text-center min-w-[120px] shadow-sm">
               <p className="text-[9px] font-extrabold text-slate-400 uppercase mb-1">Status</p>
               <p className="text-xl font-extrabold text-[var(--ln-teal-600)]">IN_PROGRESS</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Theoretical Briefing */}
         <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-[var(--ln-border)] rounded-[2.5rem] overflow-hidden shadow-sm">
               <div className="bg-slate-50 border-b border-[var(--ln-border)] px-8 py-5">
                  <div className="flex items-center gap-2 text-[var(--ln-teal-600)] text-[10px] font-extrabold tracking-widest uppercase">
                     <BookOpen size={16} />
                     Lesson Briefing
                  </div>
                  <h4 className="text-lg font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight mt-1">Theoretical Background</h4>
               </div>
               <div className="p-8 prose prose-slate prose-sm max-w-none prose-headings:text-[var(--ln-navy-900)] prose-headings:font-extrabold prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-[var(--ln-text-secondary)] prose-strong:text-[var(--ln-navy-900)] prose-code:text-[var(--ln-teal-500)]">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {adaptedContent}
                  </ReactMarkdown>
               </div>
            </div>

            <div className="bg-white border border-[var(--ln-border)] rounded-[2.5rem] overflow-hidden shadow-sm">
               <div className="bg-slate-50 border-b border-[var(--ln-border)] px-8 py-5">
                  <div className="flex items-center gap-2 text-amber-500 text-[10px] font-extrabold tracking-widest uppercase">
                     <ShieldCheck size={16} />
                     Key Requirements
                  </div>
               </div>
               <div className="p-8 space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <Zap size={16} className="text-[var(--ln-teal-500)] shrink-0 mt-0.5" />
                     <p className="text-xs text-[var(--ln-text-secondary)] leading-relaxed font-medium">Complete the interactive practice with high logic consistency.</p>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <Zap size={16} className="text-[var(--ln-teal-500)] shrink-0 mt-0.5" />
                     <p className="text-xs text-[var(--ln-text-secondary)] leading-relaxed font-medium">Identify market behavior patterns accurately within the session.</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Interactive Practice Area */}
         <div className="lg:col-span-8 space-y-8">
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-[var(--ln-teal-500)]/10 to-[var(--ln-navy-900)]/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
               <div className="relative h-full bg-white border border-[var(--ln-border)] rounded-[2.5rem] overflow-hidden shadow-sm">
                  <div className="flex flex-row items-center justify-between border-b border-[var(--ln-border)] px-8 py-6 bg-slate-50">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--ln-teal-soft)] flex items-center justify-center text-[var(--ln-teal-500)]">
                           <Layout size={20} />
                        </div>
                        <div>
                           <h4 className="text-sm font-extrabold uppercase tracking-widest text-[var(--ln-navy-900)]">Interactive Practice Area</h4>
                           <p className="text-[10px] text-slate-400 font-mono uppercase font-bold">Session: PRO_FLOW_V5_LIVE</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <DataBadge variant="outline" className="text-slate-400">STABLE</DataBadge>
                        <DataBadge variant="profit" className="text-[var(--ln-teal-500)]">SECURE</DataBadge>
                     </div>
                  </div>
                  <div className="p-8 min-h-[500px] flex items-center justify-center bg-slate-50">
                     {module.interactiveTaskType === "A" && (
                        <ChartPractice 
                           prompt={module.objective}
                           data={[]} 
                           correctZones={[]} 
                        />
                     )}
                     {module.interactiveTaskType === "B" && assetClass === "crypto" && (
                        <LendingPractice />
                     )}
                     {module.interactiveTaskType === "B" && assetClass === "gold" && (
                        <MacroDashboard />
                     )}
                     {module.interactiveTaskType === "C" && (
                        <OrderFlowDOM />
                     )}
                  </div>
               </div>
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between p-10 bg-white border border-[var(--ln-border)] rounded-[2.5rem] shadow-sm">
               <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Next Phase</span>
                  <span className="text-sm font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">Market Liquidity Gaps</span>
               </div>
               <button className="flex items-center gap-3 px-8 py-4 bg-[var(--ln-teal-500)] text-white rounded-2xl font-extrabold uppercase tracking-widest text-[10px] hover:bg-[var(--ln-teal-600)] shadow-lg shadow-[var(--ln-teal-500)]/20 transition-all group">
                  PROCEED TO NEXT LESSON
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
