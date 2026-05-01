"use client";

import { Lock, Target, ChevronRight, Unlock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NextGateCardProps {
  missionStatus: "Locked" | "Not Started" | "Passed";
  testStatus: "Locked" | "Not Started" | "Passed";
  level: number;
}

export function NextGateCard({ missionStatus, testStatus, level }: NextGateCardProps) {
  
  const StatusBadge = ({ status }: { status: string }) => {
    switch(status) {
      case "Passed":
        return <span className="text-[10px] px-2 py-1 rounded bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] font-bold">Passed</span>;
      case "Not Started":
        return <span className="text-[10px] px-2 py-1 rounded bg-slate-100 text-slate-500 font-bold">Not Started</span>;
      default:
        return <span className="text-[10px] px-2 py-1 rounded bg-slate-100 text-slate-400 font-bold flex items-center gap-1"><Lock className="w-2.5 h-2.5"/> Locked</span>;
    }
  };

  const getMissionLabel = (lvl: number) => {
    if (lvl === 0) return "Mission 1 / Practice Setup";
    if (lvl === 2) return "2.12 Chart Map Mission";
    if (lvl === 3) return "Level 3 Final Scenario";
    return "Chart Map Mission";
  };

  const getTestLabel = (lvl: number) => {
    return `Level ${lvl} Knowledge Test`;
  };

  return (
    <div className="bg-white rounded-3xl p-5 border border-[var(--ln-border)] shadow-sm flex flex-col h-full hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[var(--ln-navy-900)]">Next Required Gate</h3>
        <Lock className="w-4 h-4 text-slate-400" />
      </div>

      <div className="space-y-3 flex-1">
        <div className="flex items-center justify-between p-2.5 rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-surface-soft)]">
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center border",
              missionStatus === "Passed" ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)]/30 text-[var(--ln-teal-500)]" : "bg-white border-slate-200 text-slate-400"
            )}>
              <Target className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--ln-navy-900)]">{getMissionLabel(level)}</p>
              {missionStatus === "Locked" && <p className="text-[10px] text-slate-500">Locked until modules complete</p>}
            </div>
          </div>
          <StatusBadge status={missionStatus} />
        </div>

        {level > 0 && (
          <div className="flex items-center justify-between p-2.5 rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-surface-soft)]">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border",
                testStatus === "Passed" ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)]/30 text-[var(--ln-teal-500)]" : "bg-white border-slate-200 text-slate-400"
              )}>
                {testStatus === "Passed" ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--ln-navy-900)]">{getTestLabel(level)}</p>
                {testStatus === "Locked" && <p className="text-[10px] text-slate-500">Locked until mission passed</p>}
              </div>
            </div>
            <StatusBadge status={testStatus} />
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-[var(--ln-border)]">
        <Link href={`/course/${level}`} className="flex items-center justify-between text-xs font-bold text-[var(--ln-teal-500)] hover:text-[var(--ln-teal-600)] transition-colors group">
          View Requirements
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
