import { clsx, type ClassValue } from "clsx";

// Lightweight classname merger (no need for tailwind-merge with Tailwind v4)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format currency
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

// Format percentage
export function formatPercent(value: number, decimals = 1): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(decimals)}%`;
}

// Format XP number
export function formatXP(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value.toString();
}

// XP rank from total
export function getXPRank(xp: number): string {
  if (xp >= 35001) return "Elite";
  if (xp >= 20001) return "Master Trader";
  if (xp >= 12001) return "Learner";
  if (xp >= 7001) return "Strategist";
  if (xp >= 3501) return "Practitioner";
  if (xp >= 1501) return "Analyst";
  if (xp >= 501) return "Apprentice";
  return "Recruit";
}

// Next rank threshold
export function getNextRankXP(xp: number): number {
  if (xp >= 35001) return 50000; // no real cap
  if (xp >= 20001) return 35001;
  if (xp >= 12001) return 20001;
  if (xp >= 7001) return 12001;
  if (xp >= 3501) return 7001;
  if (xp >= 1501) return 3501;
  if (xp >= 501) return 1501;
  return 501;
}

// Cert level title
export function getCertTitle(level: number): string {
  const titles: Record<number, string> = {
    0: "Unranked",
    1: "Market Literate",
    2: "Structured Trader",
    3: "Advanced Learner",
    4: "Consistent Trader",
    5: "Certified Trader",
  };
  return titles[level] || "Unknown";
}

// Score band label
export function getScoreBand(score: number): string {
  if (score >= 90) return "Distinction";
  if (score >= 80) return "Merit";
  if (score >= 65) return "Pass";
  if (score >= 60) return "Provisional";
  return "Below Threshold";
}

// Time remaining format
export function formatTimeRemaining(days: number): string {
  if (days <= 0) return "Expired";
  if (days === 1) return "1 day left";
  if (days <= 7) return `${days} days left`;
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7;
  if (remainingDays === 0) return `${weeks}w left`;
  return `${weeks}w ${remainingDays}d left`;
}
// Recursive sanitizer for Prisma Decimal objects
export function serializeData<T>(data: T): T {
  if (data === null || data === undefined) return data;

  // Handle arrays
  if (Array.isArray(data)) {
    return data.map((item) => serializeData(item)) as unknown as T;
  }

  // Handle objects
  if (typeof data === "object") {
    const d = data as any;

    // 1. Detect Prisma Decimal (Aggressive Duck Typing)
    // Prisma's Decimal (decimal.js) has toNumber() and internal properties d, s, e
    if (
      typeof d.toNumber === "function" && 
      (d.constructor?.name === "Decimal" || (Array.isArray(d.d) && d.hasOwnProperty('s')))
    ) {
      try {
        const num = d.toNumber();
        return (isNaN(num) ? 0 : num) as unknown as T;
      } catch (e) {
        // Fallback to string if toNumber fails
        return String(d) as unknown as T;
      }
    }

    // 2. Detect Dates (Next.js handles them, but keep for consistency)
    if (data instanceof Date) return data as unknown as T;

    // 3. Recursive walk for plain objects
    // We create a fresh object to ensure it's a "plain object" for Next.js
    const result: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        result[key] = serializeData(d[key]);
      }
    }
    return result as T;
  }

  return data;
}
