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
    default: "bg-surface-tertiary text-text-secondary border-transparent",
    forex: "bg-forex/10 text-forex border-forex/20",
    crypto: "bg-crypto/10 text-crypto border-crypto/20",
    gold: "bg-gold/10 text-gold border-gold/20",
    multi: "bg-multi/10 text-multi border-multi/20",
    profit: "bg-profit/10 text-profit border-profit/20 shadow-glow-profit",
    loss: "bg-loss/10 text-loss border-loss/20 shadow-glow-loss",
    outline: "bg-transparent border-border-default text-text-muted",
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
