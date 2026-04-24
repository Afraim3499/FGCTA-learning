import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { redirect } from "next/navigation";
import { ChartSimulator } from "@/components/academy/interactive/chart-simulator";
import { DeFiLendingSimulator } from "@/components/academy/interactive/defi-lending-simulator";
import { OrderFlowDOM } from "@/components/academy/interactive/order-flow-dom";
import { MacroDashboard } from "@/components/academy/interactive/macro-dashboard";
import { TerminalCard, TerminalCardContent, TerminalCardHeader, TerminalCardTitle } from "@/components/ui/terminal-card";
import { InstitutionalButton } from "@/components/ui/institutional-button";
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
        <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Mission Data Not Found</h2>
        <p className="text-text-muted">The requested tactical data is currently encrypted or unavailable.</p>
        <InstitutionalButton variant="outline" onClick={() => redirect("/dashboard")}>Return to Command Center</InstitutionalButton>
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
      {/* Tactical Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
         <div className="space-y-4">
            <div className="flex items-center gap-3">
               <DataBadge variant="outline" className="font-mono text-[9px]">{assetClass.toUpperCase()}_SECTOR</DataBadge>
               <DataBadge variant="profit" className="font-mono text-[9px]">LEVEL_{levelInt}</DataBadge>
            </div>
            <div className="space-y-1">
               <div className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.4em]">Current Objective</div>
               <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">{module.title}</h1>
            </div>
         </div>
         <div className="flex gap-3">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center min-w-[120px]">
               <p className="text-[9px] font-bold text-text-muted uppercase mb-1">XP Reward</p>
               <p className="text-xl font-black text-white">+500</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center min-w-[120px]">
               <p className="text-[9px] font-bold text-text-muted uppercase mb-1">Status</p>
               <p className="text-xl font-black text-pass-green">IN_PROGRESS</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Theoretical Briefing */}
         <div className="lg:col-span-4 space-y-8">
            <TerminalCard className="h-fit">
               <TerminalCardHeader>
                  <div className="flex items-center gap-2 text-accent-blue text-[10px] font-bold tracking-widest uppercase">
                     <BookOpen size={14} />
                     Mission Briefing
                  </div>
                  <TerminalCardTitle className="text-lg">Theoretical Framework</TerminalCardTitle>
               </TerminalCardHeader>
               <TerminalCardContent className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-text-secondary prose-strong:text-white prose-code:text-accent-blue">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {adaptedContent}
                  </ReactMarkdown>
               </TerminalCardContent>
            </TerminalCard>

            <TerminalCard>
               <TerminalCardHeader>
                  <div className="flex items-center gap-2 text-warning text-[10px] font-bold tracking-widest uppercase">
                     <ShieldCheck size={14} />
                     Success Constraints
                  </div>
               </TerminalCardHeader>
               <TerminalCardContent className="space-y-4">
                  <div className="flex gap-3 items-start p-3 bg-white/5 rounded-xl border border-white/5">
                     <Zap size={14} className="text-accent-blue shrink-0 mt-1" />
                     <p className="text-xs text-text-secondary leading-relaxed">Complete the interactive simulation with at least 95% logic precision.</p>
                  </div>
                  <div className="flex gap-3 items-start p-3 bg-white/5 rounded-xl border border-white/5">
                     <Zap size={14} className="text-accent-blue shrink-0 mt-1" />
                     <p className="text-xs text-text-secondary leading-relaxed">Identify institutional trap signatures within 30 seconds of occurrence.</p>
                  </div>
               </TerminalCardContent>
            </TerminalCard>
         </div>

         {/* Interactive Simulation Theater */}
         <div className="lg:col-span-8 space-y-8">
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/20 to-pass-green/20 rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
               <TerminalCard className="relative h-full bg-black/80 backdrop-blur-xl border-white/10">
                  <TerminalCardHeader className="flex flex-row items-center justify-between border-b border-white/5 pb-6">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                           <Layout size={20} />
                        </div>
                        <div>
                           <TerminalCardTitle className="text-sm font-bold uppercase tracking-widest text-white">Interactive Execution Environment</TerminalCardTitle>
                           <p className="text-[10px] text-text-muted font-mono uppercase">Engine: PRO_FLOW_V5_LIVE</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <DataBadge variant="outline">STABLE</DataBadge>
                        <DataBadge variant="profit">LOW_LATENCY</DataBadge>
                     </div>
                  </TerminalCardHeader>
                  <TerminalCardContent className="p-8">
                     {/* Dynamic Simulator Loading based on Module Type */}
                     {module.interactiveTaskType === "A" && (
                        <ChartSimulator 
                           prompt={module.objective}
                           data={[]} // This would be fetched from interactiveTaskData
                           correctZones={[]} // From interactiveTaskData
                        />
                     )}
                     {module.interactiveTaskType === "B" && assetClass === "crypto" && (
                        <DeFiLendingSimulator />
                     )}
                     {module.interactiveTaskType === "B" && assetClass === "gold" && (
                        <MacroDashboard />
                     )}
                     {module.interactiveTaskType === "C" && (
                        <OrderFlowDOM />
                     )}
                  </TerminalCardContent>
               </TerminalCard>
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-[2rem]">
               <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Next Phase</span>
                  <span className="text-sm font-bold text-white uppercase tracking-tight">Institutional Liquidity Gaps</span>
               </div>
               <InstitutionalButton size="lg" glow className="group">
                  PROCEED TO NEXT MODULE
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
               </InstitutionalButton>
            </div>
         </div>
      </div>
    </div>
  );
}
