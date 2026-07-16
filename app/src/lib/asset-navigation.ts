export type AssetNavigationAudience = "public" | "paid";

const LEVEL_PATTERN = /\bLevel\s+(\d+)\b/i;

export function extractRelatedLessonLevel(label: string): number | null {
  const match = label.match(LEVEL_PATTERN);
  if (!match) return null;

  const level = Number.parseInt(match[1], 10);
  return Number.isFinite(level) && level >= 0 ? level : null;
}

export function relatedLessonHref(label: string, audience: AssetNavigationAudience): string {
  const level = extractRelatedLessonLevel(label);

  if (audience === "paid") {
    return level === null ? "/course" : `/course/${level}`;
  }

  return level === null ? "/curriculum" : `/curriculum?level=${level}`;
}

export function relatedStrategyLabHref(strategyName: string): string {
  return `/lab?strategy=${encodeURIComponent(strategyName.trim())}`;
}
