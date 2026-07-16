"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { trackAssetEvent } from "@/lib/asset-analytics-client";
import type { AssetAnalyticsEventName, AssetAnalyticsPayload } from "@/lib/asset-analytics-events";

type AssetAnalyticsLinkProps = {
  href: string;
  eventName: AssetAnalyticsEventName;
  eventPayload: AssetAnalyticsPayload;
  children: ReactNode;
  className?: string;
  prefetch?: boolean | null;
  target?: string;
  rel?: string;
  "data-asset-event"?: string;
  "data-asset-nav-kind"?: string;
};

export function AssetAnalyticsLink({
  href,
  eventName,
  eventPayload,
  children,
  className,
  prefetch,
  target,
  rel,
  ...dataAttributes
}: AssetAnalyticsLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented) return;
    trackAssetEvent(eventName, eventPayload);
  }

  return (
    <Link
      href={href}
      className={className}
      prefetch={prefetch}
      target={target}
      rel={rel}
      onClick={handleClick}
      {...dataAttributes}
    >
      {children}
    </Link>
  );
}
