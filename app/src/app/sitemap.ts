import type { MetadataRoute } from "next";
import { getReadyAssetProfiles, publicAssetHref } from "@/lib/asset-intelligence-data";
import { absoluteUrl } from "@/lib/site-url";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/markets", priority: 0.95 },
  { path: "/curriculum", priority: 0.85 },
  { path: "/pricing", priority: 0.75 },
  { path: "/about", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: "2026-07-16",
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));

  const assetEntries = getReadyAssetProfiles().map((asset) => ({
    url: absoluteUrl(publicAssetHref(asset)),
    lastModified: asset.lastReviewed,
    changeFrequency: "monthly" as const,
    priority: asset.assetClass === "gold" ? 0.88 : 0.82,
  }));

  return [...staticEntries, ...assetEntries];
}
