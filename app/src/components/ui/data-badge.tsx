import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "forex" | "crypto" | "gold" | "multi" | "profit" | "loss" | "outline";
}

function DataBadge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[var(--ln-bg-soft)] text-[var(--ln-text-secondary)] border-[var(--ln-border)]",
    forex: "bg-sky-50 text-sky-700 border-sky-100",
    crypto: "bg-amber-50 text-amber-700 border-amber-100",
    gold: "bg-yellow-50 text-yellow-700 border-yellow-100",
    multi: "bg-indigo-50 text-indigo-700 border-indigo-100",
    profit: "bg-[var(--ln-teal-soft)] text-[var(--ln-teal-600)] border-[var(--ln-teal-400)]/20",
    loss: "bg-rose-50 text-rose-600 border-rose-100",
    outline: "bg-transparent border-[var(--ln-border)] text-[var(--ln-text-muted)]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { DataBadge };
