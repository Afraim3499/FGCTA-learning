"use client";

import { Clock, CheckCircle2, FileText, Play, Eye } from "lucide-react";
import Link from "next/link";

export interface ActivityItem {
  id: string;
  title: string;
  timeAgo: string;
  type: "complete" | "pass" | "start" | "review" | "other";
}

interface RecentActivityCardProps {
  activities: ActivityItem[];
}

export function RecentActivityCard({ activities }: RecentActivityCardProps) {
  
  const getIcon = (type: string) => {
    switch(type) {
      case "complete": return <CheckCircle2 className="w-4 h-4 text-[var(--ln-teal-500)]" />;
      case "pass": return <FileText className="w-4 h-4 text-[var(--ln-teal-500)]" />;
      case "start": return <Play className="w-4 h-4 text-slate-400" />;
      case "review": return <Eye className="w-4 h-4 text-slate-400" />;
      default: return <CheckCircle2 className="w-4 h-4 text-slate-400" />;
    }
  };

  const getBgClass = (type: string) => {
    switch(type) {
      case "complete":
      case "pass":
        return "bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20";
      default:
        return "bg-slate-50 border border-slate-100";
    }
  };

  return (
    <div className="bg-white rounded-3xl p-5 border border-[var(--ln-border)] shadow-sm flex flex-col h-full hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[var(--ln-navy-900)]">Recent Activity</h3>
        <Clock className="w-4 h-4 text-slate-400" />
      </div>

      <div className="space-y-3 flex-1">
        {activities.length > 0 ? (
          activities.map((act) => (
            <div key={act.id} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${getBgClass(act.type)}`}>
                {getIcon(act.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[var(--ln-navy-900)] truncate">{act.title}</p>
              </div>
              <p className="text-[10px] text-slate-400 font-medium shrink-0">{act.timeAgo}</p>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-2 py-8">
            <Clock className="w-8 h-8 opacity-20" />
            <p className="text-xs font-medium">No recent activity found.</p>
          </div>
        )}
      </div>

      {activities.length > 0 && (
        <div className="mt-4 pt-4 border-t border-[var(--ln-border)]">
          <Link href="/lab" className="text-xs font-bold text-[var(--ln-teal-500)] hover:text-[var(--ln-teal-600)] transition-colors">
            View all activity &rsaquo;
          </Link>
        </div>
      )}
    </div>
  );
}
