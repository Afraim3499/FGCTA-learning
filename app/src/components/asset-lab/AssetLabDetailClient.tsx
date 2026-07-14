"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  CalendarDays,
  ExternalLink,
  Gauge,
  Layers3,
  LineChart,
  Radar,
  ShieldAlert,
} from "lucide-react";
import type { AssetProfile } from "@/lib/asset-intelligence-data";
import { assetClassLabel, publicAssetHref } from "@/lib/asset-intelligence-data";
import { cn } from "@/lib/utils";

type AssetLabDetailClientProps = {
  asset: AssetProfile;
};

type TabKey =
  | "overview"
  | "drivers"
  | "participants"
  | "history"
  | "correlations"
  | "risks"
  | "routine"
  | "sources";

const tabs: Array<{ key: TabKey; label: string; icon: typeof Activity }> = [
  { key: "overview", label: "Overview", icon: Gauge },
  { key: "drivers", label: "Drivers", icon: LineChart },
  { key: "participants", label: "Participants", icon: Building2 },
  { key: "history", label: "History", icon: CalendarDays },
  { key: "correlations", label: "Correlations", icon: Layers3 },
  { key: "risks", label: "Risk Map", icon: ShieldAlert },
  { key: "routine", label: "Routine", icon: Radar },
  { key: "sources", label: "Sources", icon: ExternalLink },
];

export function AssetLabDetailClient({ asset }: AssetLabDetailClientProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const active = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

  return (
    <div className="flex h-[calc(100vh-112px)] flex-col overflow-hidden rounded-2xl border border-[var(--ln-border)] bg-white shadow-sm">
      <div className="border-b border-[var(--ln-border)] bg-[var(--ln-navy-900)] px-5 py-5 text-white">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-teal-400)]">
                {assetClassLabel(asset.assetClass)}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs font-black text-white">
                {asset.symbol}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                Reviewed {asset.lastReviewed}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight lg:text-4xl">{asset.name} Asset Lab</h1>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">{asset.lab.deskBrief}</p>
            </div>
          </div>
          <Link
            href={publicAssetHref(asset)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/15"
          >
            Public guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-[var(--ln-border)] bg-[var(--ln-bg-soft)] p-4 lg:border-b-0 lg:border-r">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-black transition",
                  activeTab === tab.key
                    ? "bg-white text-[var(--ln-teal-500)] shadow-sm"
                    : "text-[var(--ln-text-secondary)] hover:bg-white hover:text-[var(--ln-navy-900)]"
                )}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-5 hidden rounded-2xl border border-[var(--ln-border)] bg-white p-4 lg:block">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">Research question</p>
            <p className="mt-2 text-sm font-black leading-6 text-[var(--ln-navy-900)]">{asset.lab.researchQuestion}</p>
          </div>
        </aside>

        <section className="min-h-0 overflow-y-auto p-5 lg:p-7">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)]">
              <active.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">Active workspace</p>
              <h2 className="text-2xl font-black text-[var(--ln-navy-900)]">{active.label}</h2>
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <Panel title="Operating model" body={asset.lab.operatingModel} />
              <Panel title="Plain-English anchor" body={asset.plainEnglish} />
              <Panel title="Market role" body={asset.marketRole} />
              <Panel title="Why this asset is watched" body={asset.whyTradersWatch} />
            </div>
          )}

          {activeTab === "drivers" && (
            <div className="grid gap-4 xl:grid-cols-2">
              {asset.drivers.map((driver) => (
                <Panel key={driver.title} title={driver.title} body={driver.detail} />
              ))}
            </div>
          )}

          {activeTab === "participants" && (
            <div className="grid gap-4 xl:grid-cols-2">
              {asset.lab.participants.map((participant) => (
                <div key={participant.name} className="rounded-2xl border border-[var(--ln-border)] bg-white p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-teal-500)]">{participant.role}</p>
                  <h3 className="mt-2 text-xl font-black text-[var(--ln-navy-900)]">{participant.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{participant.whyItMatters}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "history" && (
            <div className="space-y-4">
              {asset.lab.historicalEvents.map((event) => (
                <div key={`${event.year}-${event.title}`} className="grid gap-4 rounded-2xl border border-[var(--ln-border)] bg-white p-5 md:grid-cols-[120px_1fr]">
                  <div className="font-mono text-2xl font-black text-[var(--ln-teal-500)]">{event.year}</div>
                  <div>
                    <h3 className="text-lg font-black text-[var(--ln-navy-900)]">{event.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--ln-text-secondary)]">{event.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "correlations" && (
            <div className="grid gap-4 xl:grid-cols-2">
              {asset.lab.correlations.map((correlation) => (
                <div key={correlation.market} className="rounded-2xl border border-[var(--ln-border)] bg-white p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">Market link</p>
                  <h3 className="mt-2 text-xl font-black text-[var(--ln-navy-900)]">{correlation.market}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{correlation.relationship}</p>
                  <div className="mt-4 rounded-xl bg-[var(--ln-bg-soft)] p-4 text-sm font-bold leading-6 text-[var(--ln-navy-900)]">
                    {correlation.learnerNote}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "risks" && (
            <div className="grid gap-4 xl:grid-cols-2">
              {asset.lab.riskMap.map((risk) => (
                <div key={risk.risk} className="rounded-2xl border border-[var(--ln-border)] bg-white p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-warning)]">Risk watch</p>
                  <h3 className="mt-2 text-xl font-black text-[var(--ln-navy-900)]">{risk.risk}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{risk.watch}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "routine" && (
            <div className="grid gap-5 xl:grid-cols-[1fr_0.8fr]">
              <div className="rounded-2xl border border-[var(--ln-border)] bg-white p-5">
                <h3 className="text-xl font-black text-[var(--ln-navy-900)]">Research routine</h3>
                <div className="mt-5 space-y-3">
                  {asset.lab.researchRoutine.map((step, index) => (
                    <div key={step} className="grid grid-cols-[40px_1fr] gap-3 rounded-xl bg-[var(--ln-bg-soft)] p-4">
                      <div className="font-mono text-sm font-black text-[var(--ln-teal-500)]">{String(index + 1).padStart(2, "0")}</div>
                      <p className="text-sm font-bold leading-6 text-[var(--ln-navy-900)]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <ListPanel title="Related lessons" items={asset.lab.relatedLessons} />
                <ListPanel title="Related Strategy Lab items" items={asset.lab.relatedStrategies} />
              </div>
            </div>
          )}

          {activeTab === "sources" && (
            <div className="grid gap-4 xl:grid-cols-2">
              {asset.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-[var(--ln-border)] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(8,26,54,0.1)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">{source.publisher}</p>
                      <h3 className="mt-2 text-xl font-black text-[var(--ln-navy-900)]">{source.title}</h3>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-[var(--ln-teal-500)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{source.note}</p>
                </a>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function Panel({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-[var(--ln-border)] bg-white p-5">
      <h3 className="text-lg font-black text-[var(--ln-navy-900)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{body}</p>
    </div>
  );
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-[var(--ln-border)] bg-white p-5">
      <h3 className="text-lg font-black text-[var(--ln-navy-900)]">{title}</h3>
      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <div key={item} className="rounded-xl bg-[var(--ln-bg-soft)] px-4 py-3 text-sm font-bold text-[var(--ln-text-secondary)]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
