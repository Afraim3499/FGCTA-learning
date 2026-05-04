import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { History, Plus, Minus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export async function XPLedgerWidget() {
  const user = await getUser();
  if (!user) return null;

  const activities = await prisma.xPLedgerEntry.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <div className="p-8 bg-white border border-[var(--ln-border)] rounded-[2.5rem] space-y-6 shadow-sm">
      <h3 className="text-[10px] font-extrabold text-[var(--ln-navy-900)] uppercase tracking-[0.2em] flex items-center gap-2">
        <History className="w-4 h-4 text-[var(--ln-teal-500)]" />
        Learning Activity
      </h3>

      <div className="space-y-6">
        {activities.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-24 border border-dashed border-[var(--ln-border)] rounded-2xl bg-slate-50/50">
            <p className="text-[10px] text-[var(--ln-text-muted)] uppercase font-extrabold tracking-widest italic">No events detected</p>
          </div>
        ) : (
          activities.map((entry: any) => (
            <div key={entry.id} className="flex items-center justify-between group">
              <div className="space-y-1">
                <p className="text-xs font-bold text-[var(--ln-navy-900)] group-hover:text-[var(--ln-teal-500)] transition-colors uppercase tracking-tight">
                  {formatAction(entry.action)}
                </p>
                <p className="text-[10px] text-[var(--ln-text-muted)] font-bold uppercase tracking-widest">
                  {getRelativeTime(entry.createdAt)}
                </p>
              </div>
              <div className={cn(
                "flex items-center gap-1 font-bold text-[10px] px-3 py-1.5 rounded-xl transition-all",
                entry.xpAmount >= 0
                  ? "text-[var(--ln-teal-600)] bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/10"
                  : "text-rose-600 bg-rose-50 border border-rose-100"
              )}>
                {entry.xpAmount >= 0 ? "+" : "-"}{Math.abs(entry.xpAmount)}
              </div>
            </div>
          ))
        )}
      </div>

      <button className="w-full py-4 border border-[var(--ln-border)] rounded-2xl text-[10px] font-extrabold text-[var(--ln-text-muted)] uppercase tracking-widest hover:text-[var(--ln-navy-900)] hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
        Full History
        <ArrowUpRight size={14} />
      </button>
    </div>
  );
}

function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);

  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
}

function formatAction(action: string): string {
  const map: Record<string, string> = {
    "MODULE_COMPLETE": "Lesson Completed",
    "TEST_PASS": "Test Passed",
    "TEST_FAIL": "Review Needed",
    "TRADE_EXECUTE": "Practice Session",
    "RULE_VIOLATION": "Strategy Review",
    "PHASE_UNLOCKED": "Level Unlocked",
  };
  return map[action] || action.replace(/_/g, " ");
}
