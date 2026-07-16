"use client";

import { useEffect, useRef } from "react";
import { trackAssetEvent } from "@/lib/asset-analytics-client";
import type { AssetAnalyticsEventName, AssetAnalyticsPayload } from "@/lib/asset-analytics-events";

const firedPageViewKeys = new Set<string>();

type AssetAnalyticsPageViewProps = {
  eventName: AssetAnalyticsEventName;
  payload: AssetAnalyticsPayload;
  onceKey: string;
};

export function AssetAnalyticsPageView({ eventName, payload, onceKey }: AssetAnalyticsPageViewProps) {
  const firedKeyRef = useRef<string | null>(null);

  useEffect(() => {
    if (firedKeyRef.current === onceKey) return;
    if (firedPageViewKeys.has(onceKey)) return;

    firedKeyRef.current = onceKey;
    firedPageViewKeys.add(onceKey);
    trackAssetEvent(eventName, payload);
  }, [eventName, onceKey, payload]);

  return null;
}
