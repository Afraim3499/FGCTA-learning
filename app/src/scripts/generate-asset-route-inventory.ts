import fs from "node:fs";
import path from "node:path";

import {
  assetLabHref,
  assetProfiles,
  publicAssetHref,
  type AssetProfile,
} from "../lib/asset-intelligence-data";

const appRoot = process.cwd();
const docsDir = path.join(appRoot, "docs");
const jsonPath = path.join(docsDir, "asset-intelligence-route-inventory.json");
const markdownPath = path.join(docsDir, "asset-intelligence-route-inventory.md");
const generatedAt = new Date().toISOString();

type InventoryRoute = {
  routeType: "public" | "paid";
  path: string;
  assetClass: AssetProfile["assetClass"];
  slug: string;
  name: string;
  symbol: string;
  rank: number;
  status: AssetProfile["status"];
  hasDeepPaidProfile: boolean;
  sourceCount: number;
  participantCount: number;
  exposureCount: number;
};

function routeFor(asset: AssetProfile, routeType: "public" | "paid"): InventoryRoute {
  return {
    routeType,
    path: routeType === "public" ? publicAssetHref(asset) : assetLabHref(asset),
    assetClass: asset.assetClass,
    slug: asset.slug,
    name: asset.name,
    symbol: asset.symbol,
    rank: asset.rank,
    status: asset.status,
    hasDeepPaidProfile: Boolean(asset.lab.deepDive),
    sourceCount: asset.sources.length,
    participantCount: asset.lab.participants.length,
    exposureCount: asset.lab.deepDive?.holderExposureMap.length ?? 0,
  };
}

function sortAssets(a: AssetProfile, b: AssetProfile): number {
  const classOrder = { crypto: 0, forex: 1, gold: 2 } as const;
  return classOrder[a.assetClass] - classOrder[b.assetClass] || a.rank - b.rank || a.slug.localeCompare(b.slug);
}

const assets = [...assetProfiles].sort(sortAssets);
const publicRoutes = assets.map((asset) => routeFor(asset, "public"));
const paidRoutes = assets.map((asset) => routeFor(asset, "paid"));
const allRoutes = [...publicRoutes, ...paidRoutes];
const duplicatePaths = allRoutes
  .map((route) => route.path)
  .filter((routePath, index, paths) => paths.indexOf(routePath) !== index);

const summary = {
  generatedAt,
  assetCount: assets.length,
  readyAssetCount: assets.filter((asset) => asset.status === "ready").length,
  deepProfileCount: assets.filter((asset) => asset.lab.deepDive).length,
  publicRouteCount: publicRoutes.length,
  paidRouteCount: paidRoutes.length,
  totalRouteCount: allRoutes.length,
  duplicateRouteCount: new Set(duplicatePaths).size,
  byClass: {
    crypto: assets.filter((asset) => asset.assetClass === "crypto").length,
    forex: assets.filter((asset) => asset.assetClass === "forex").length,
    gold: assets.filter((asset) => asset.assetClass === "gold").length,
  },
};

const inventory = {
  summary,
  publicRoutes,
  paidRoutes,
  allRoutes,
};

function markdownTable(routes: InventoryRoute[]): string {
  const lines = [
    "| # | Type | Asset | Class | Symbol | Rank | Route | Deep | Sources | Participants | Exposures |",
    "|---:|---|---|---|---|---:|---|---|---:|---:|---:|",
  ];

  routes.forEach((route, index) => {
    lines.push(
      `| ${index + 1} | ${route.routeType} | ${route.name} | ${route.assetClass} | ${route.symbol} | ${route.rank} | \`${route.path}\` | ${route.hasDeepPaidProfile ? "yes" : "no"} | ${route.sourceCount} | ${route.participantCount} | ${route.exposureCount} |`
    );
  });

  return lines.join("\n");
}

const markdown = `# Asset Intelligence Route Inventory

Generated at: ${generatedAt}

This inventory is generated from \`assetProfiles\` and is the route source of truth for Asset Intelligence final QA.

## Summary

- Assets: ${summary.assetCount}
- Ready assets: ${summary.readyAssetCount}
- Deep paid profiles: ${summary.deepProfileCount}
- Public routes: ${summary.publicRouteCount}
- Paid routes: ${summary.paidRouteCount}
- Total asset routes: ${summary.totalRouteCount}
- Duplicate route paths: ${summary.duplicateRouteCount}
- Crypto assets: ${summary.byClass.crypto}
- Forex assets: ${summary.byClass.forex}
- Gold assets: ${summary.byClass.gold}

## Acceptance Snapshot

- Expected assets: 71
- Expected public routes: 71
- Expected paid routes: 71
- Expected total routes: 142
- Expected deep paid profiles: 71

## All Routes

${markdownTable(allRoutes)}
`;

fs.mkdirSync(docsDir, { recursive: true });
fs.writeFileSync(jsonPath, `${JSON.stringify(inventory, null, 2)}\n`);
fs.writeFileSync(markdownPath, markdown);

const failures: string[] = [];
if (summary.assetCount !== 71) failures.push(`Expected 71 assets, found ${summary.assetCount}.`);
if (summary.readyAssetCount !== 71) failures.push(`Expected 71 ready assets, found ${summary.readyAssetCount}.`);
if (summary.deepProfileCount !== 71) failures.push(`Expected 71 deep paid profiles, found ${summary.deepProfileCount}.`);
if (summary.publicRouteCount !== 71) failures.push(`Expected 71 public routes, found ${summary.publicRouteCount}.`);
if (summary.paidRouteCount !== 71) failures.push(`Expected 71 paid routes, found ${summary.paidRouteCount}.`);
if (summary.totalRouteCount !== 142) failures.push(`Expected 142 total routes, found ${summary.totalRouteCount}.`);
if (summary.duplicateRouteCount !== 0) failures.push(`Found ${summary.duplicateRouteCount} duplicate route paths.`);

console.log(JSON.stringify({ summary, jsonPath, markdownPath, failures }, null, 2));

if (failures.length > 0) {
  process.exit(1);
}
