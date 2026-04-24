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
    <div className="p-8 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-[2.5rem] space-y-6">
      <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2">
        <History className="w-3 h-3 text-[var(--color-brand-400)]" />
        Protocol Activity
      </h3>

      <div className="space-y-5">
        {activities.length === 0 ? (
          <div className="py-8 text-center space-y-2">
            <p className="text-[10px] text-[var(--color-text-muted)] uppercase font-bold tracking-widest italic">No events detected</p>
          </div>
        ) : (
          activities.map((entry) => (
            <div key={entry.id} className="flex items-center justify-between group">
              <div className="space-y-1">
                <p className="text-xs font-bold text-white group-hover:text-[var(--color-brand-400)] transition-colors uppercase tracking-tight">
                  {formatAction(entry.action)}
                </p>
                <p className="text-[10px] text-[var(--color-text-muted)] font-mono uppercase">
                  {getRelativeTime(entry.createdAt)}
                </p>
              </div>
              <div className={cn(
                "flex items-center gap-1 font-mono font-bold text-xs px-3 py-1.5 rounded-xl transition-all",
                entry.xpAmount >= 0 
                  ? "text-[var(--color-profit)] bg-[var(--color-profit)]/5 border border-[var(--color-profit)]/10" 
                  : "text-[var(--color-loss)] bg-[var(--color-loss)]/5 border border-[var(--color-loss)]/10"
              )}>
                {entry.xpAmount >= 0 ? "+" : "-"}{Math.abs(entry.xpAmount)}
              </div>
            </div>
          ))
        )}
      </div>

      <button className="w-full py-3 border border-[var(--color-border-default)] rounded-xl text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
        Full Audit Log
        <ArrowUpRight size={12} />
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
    "MODULE_COMPLETE": "Node Synced",
    "TEST_PASS": "Protocol Verified",
    "TEST_FAIL": "Validation Failed",
    "TRADE_EXECUTE": "Transaction Sent",
    "RULE_VIOLATION": "Logic Fault",
    "PHASE_UNLOCKED": "Access Escalated",
  };
  return map[action] || action.replace(/_/g, " ");
}
