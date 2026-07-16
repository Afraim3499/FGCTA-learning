"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackAssetEvent } from "@/lib/asset-analytics-client";
import type { AssetClassKey } from "@/lib/asset-intelligence-data";

export type MarketsDirectoryAsset = {
  href: string;
  slug: string;
  name: string;
  symbol: string;
  assetClass: AssetClassKey;
  assetClassLabel: string;
  rank: number;
  plainEnglish: string;
};

type MarketsAssetDirectoryProps = {
  assets: MarketsDirectoryAsset[];
};

type FilterValue = "all" | AssetClassKey;

const filters: Array<{ value: FilterValue; label: string }> = [
  { value: "all", label: "All" },
  { value: "crypto", label: "Crypto" },
  { value: "forex", label: "Forex" },
  { value: "gold", label: "Gold" },
];

export function MarketsAssetDirectory({ assets }: MarketsAssetDirectoryProps) {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filteredAssets = useMemo(
    () => (filter === "all" ? assets : assets.filter((asset) => asset.assetClass === filter)),
    [assets, filter]
  );

  function selectFilter(value: FilterValue) {
    setFilter(value);
    trackAssetEvent("asset_class_filter_clicked", {
      route_type: "public",
      user_state: "unknown",
      filter_value: value,
    });
  }

  return (
    <div data-asset-directory="markets">
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            data-asset-event="asset_class_filter_clicked"
            data-asset-filter={item.value}
            onClick={() => selectFilter(item.value)}
            className={
              filter === item.value
                ? "rounded-xl bg-[var(--ln-navy-900)] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-sm"
                : "rounded-xl border border-[var(--ln-border)] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[var(--ln-text-secondary)] transition hover:bg-[var(--ln-surface-soft)] hover:text-[var(--ln-navy-900)]"
            }
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ln-text-muted)]">
        Showing {filteredAssets.length} of {assets.length} ready assets
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredAssets.map((asset) => (
          <Link
            key={`${asset.assetClass}-${asset.slug}`}
            href={asset.href}
            data-asset-card={asset.slug}
            className="group rounded-2xl border border-[var(--ln-border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(8,26,54,0.1)]"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">{asset.assetClassLabel}</p>
                <h3 className="mt-2 text-2xl font-black text-[var(--ln-navy-900)]">{asset.name}</h3>
              </div>
              <div className="rounded-xl bg-[var(--ln-teal-soft)] px-3 py-2 font-mono text-sm font-black text-[var(--ln-teal-500)]">
                {asset.symbol}
              </div>
            </div>
            <p className="min-h-24 text-sm leading-7 text-[var(--ln-text-secondary)]">{asset.plainEnglish}</p>
            <div className="mt-6 flex items-center justify-between border-t border-[var(--ln-border-soft)] pt-5">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[var(--ln-navy-900)]">Open guide</span>
              <ArrowRight className="h-4 w-4 text-[var(--ln-teal-500)] transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
