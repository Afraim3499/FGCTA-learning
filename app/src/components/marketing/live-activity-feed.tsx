"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity } from "lucide-react";

interface ActivityItem {
  id: number;
  icon: string;
  text: string;
  time: string;
  color: string;
}

const activityPool: Omit<ActivityItem, "id" | "time">[] = [
  { icon: "📊", text: "Trader completed Phase 2 — Forex track", color: "text-blue-400" },
  { icon: "🏆", text: "Level 4 LearningRecord earned — Crypto track", color: "text-amber-400" },
  { icon: "✅", text: "Knowledge Test L3 passed — 92% score", color: "text-[var(--color-profit)]" },
  { icon: "🔥", text: "5-trade win streak achieved — Gold track", color: "text-yellow-400" },
  { icon: "📈", text: "Phase 3 target hit — +25% on $1,000", color: "text-[var(--color-profit)]" },
  { icon: "🎯", text: "New trader started free trial — Level 0", color: "text-[var(--color-brand-400)]" },
  { icon: "💎", text: "Level 5 Completed Trader earned — Forex", color: "text-blue-400" },
  { icon: "⚡", text: "Badge unlocked: First Profitable Week", color: "text-amber-400" },
  { icon: "📊", text: "Trader advanced to Phase 4 — $3,000 capital", color: "text-[var(--color-profit)]" },
  { icon: "🏅", text: "Discipline score 10/10 achieved — Phase 2", color: "text-[var(--color-brand-400)]" },
  { icon: "🎓", text: "Level 2 LearningRecord earned — Gold track", color: "text-yellow-400" },
  { icon: "📈", text: "Profit Factor 2.5 achieved — Crypto Phase 3", color: "text-amber-400" },
  { icon: "✅", text: "Knowledge Test L5 passed — 88% score", color: "text-[var(--color-profit)]" },
  { icon: "🔥", text: "10-day trading streak — Forex track", color: "text-blue-400" },
  { icon: "🎯", text: "Phase 1 completed in 18 days — new record", color: "text-[var(--color-brand-400)]" },
  { icon: "💎", text: "Cert score 91/100 — Distinction level", color: "text-[var(--color-profit)]" },
  { icon: "⚡", text: "Badge unlocked: Zero Rule Violations", color: "text-amber-400" },
  { icon: "📊", text: "Max drawdown held under 3% — Phase 5", color: "text-[var(--color-profit)]" },
];

function getRandomTime(): string {
  const mins = Math.floor(Math.random() * 55) + 1;
  return mins <= 1 ? "just now" : `${mins}m ago`;
}

export function LiveActivityFeed() {
  const [items, setItems] = useState<ActivityItem[]>([]);
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize with 3 items
  useEffect(() => {
    const initial = activityPool
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((item, i) => ({ ...item, id: i, time: getRandomTime() }));
    setItems(initial);
    setCounter(3);
  }, []);

  // Add new item every 5-8 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((prev) => {
        const next = prev + 1;
        const poolItem = activityPool[next % activityPool.length];
        const newItem: ActivityItem = { ...poolItem, id: next, time: "just now" };

        setItems((prevItems) => {
          const updated = [newItem, ...prevItems.slice(0, 4)];
          return updated;
        });

        return next;
      });
    }, 5000 + Math.random() * 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="py-16 px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="relative">
            <Activity size={16} className="text-[var(--color-profit)]" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[var(--color-profit)] rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[var(--color-profit)] rounded-full" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
            Live Platform Activity
          </span>
          <span className="text-[9px] font-mono text-[var(--color-profit)] bg-[var(--color-profit)]/10 px-2 py-0.5 rounded-md">
            847 traders active
          </span>
        </div>

        <div className="space-y-2 max-h-[280px] overflow-hidden relative">
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center gap-4 px-5 py-3.5 bg-white/[0.02] border border-white/5 rounded-xl"
              >
                <span className="text-lg shrink-0">{item.icon}</span>
                <span className="text-sm text-[var(--color-text-secondary)] flex-1">{item.text}</span>
                <span className="text-[9px] font-mono text-[var(--color-text-muted)] shrink-0">{item.time}</span>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Fade out at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0E14] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
