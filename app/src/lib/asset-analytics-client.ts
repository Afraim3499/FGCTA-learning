"use client";

import { track } from "@vercel/analytics";
import type {
  AssetAnalyticsEventName,
  AssetAnalyticsPayload,
  AssetAnalyticsValue,
} from "@/lib/asset-analytics-events";

export const ASSET_ANALYTICS_BROWSER_EVENT = "lurnava:asset-analytics";

export type CapturedAssetAnalyticsEvent = {
  name: AssetAnalyticsEventName;
  payload: Record<string, AssetAnalyticsValue>;
  url: string;
  capturedAt: string;
};

function cleanPayload(payload: AssetAnalyticsPayload): Record<string, AssetAnalyticsValue> {
  const safePayload: Record<string, AssetAnalyticsValue> = {};

  for (const [key, value] of Object.entries(payload)) {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      safePayload[key] = value;
    }
  }

  return safePayload;
}

export function trackAssetEvent(eventName: AssetAnalyticsEventName, payload: AssetAnalyticsPayload) {
  const safePayload = cleanPayload(payload);

  try {
    track(eventName, safePayload);
  } catch {
    // Analytics must never block learning or navigation.
  }

  if (typeof window === "undefined") return;

  try {
    const detail: CapturedAssetAnalyticsEvent = {
      name: eventName,
      payload: safePayload,
      url: window.location.href,
      capturedAt: new Date().toISOString(),
    };

    window.dispatchEvent(new CustomEvent(ASSET_ANALYTICS_BROWSER_EVENT, { detail }));

    if (process.env.NEXT_PUBLIC_ASSET_ANALYTICS_DEBUG === "1") {
      console.info("[asset-analytics]", detail);
    }
  } catch {
    // Local QA bridge failure must not affect the UI.
  }
}
