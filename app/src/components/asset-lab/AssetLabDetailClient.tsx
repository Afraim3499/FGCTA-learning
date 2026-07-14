"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpenCheck,
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
    <div className="space-y-5 pb-8">
      <section className="overflow-hidden rounded-2xl border border-[var(--ln-border)] bg-white shadow-sm">
        <div className="bg-[var(--ln-navy-900)] px-4 py-5 text-white sm:px-6 lg:px-8 lg:py-7">
          <div className="flex min-w-0 flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div className="min-w-0 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ln-teal-400)]">
                  {assetClassLabel(asset.assetClass)}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs font-black text-white">
                  {asset.symbol}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                  Reviewed {asset.lastReviewed}
                </span>
              </div>

              <div className="min-w-0">
                <h1 className="break-words text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  {asset.name} Asset Lab
                </h1>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
                  {asset.lab.deskBrief}
                </p>
              </div>
            </div>

            <Link
              href={publicAssetHref(asset)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-white/15 sm:w-auto"
            >
              Public guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="border-b border-[var(--ln-border)] bg-white px-4 py-3 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {tabs.map((tab) => (
              <TabButton
                key={tab.key}
                tab={tab}
                activeTab={activeTab}
                onSelect={setActiveTab}
                mobile
              />
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4 rounded-2xl border border-[var(--ln-border)] bg-white p-4 shadow-sm">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <TabButton key={tab.key} tab={tab} activeTab={activeTab} onSelect={setActiveTab} />
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-bg-soft)] p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">
                Research question
              </p>
              <p className="mt-2 text-sm font-black leading-6 text-[var(--ln-navy-900)]">
                {asset.lab.researchQuestion}
              </p>
            </div>
          </div>
        </aside>

        <section className="min-w-0 rounded-2xl border border-[var(--ln-border)] bg-white p-4 shadow-sm sm:p-5 lg:p-7">
          <div className="mb-6 flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)]">
              <active.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ln-text-muted)]">
                Active workspace
              </p>
              <h2 className="break-words text-2xl font-black text-[var(--ln-navy-900)]">{active.label}</h2>
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="grid gap-4 xl:grid-cols-2">
              <FeaturePanel icon={Radar} title="Research question" body={asset.lab.researchQuestion} highlight />
              <FeaturePanel icon={Gauge} title="Operating model" body={asset.lab.operatingModel} />
              <FeaturePanel icon={BookOpenCheck} title="Plain-English anchor" body={asset.plainEnglish} />
              <FeaturePanel icon={LineChart} title="Market role" body={asset.marketRole} />
              <FeaturePanel icon={Activity} title="Why this asset is watched" body={asset.whyTradersWatch} />
              <FeaturePanel icon={ShieldAlert} title="Public risk lens" body={asset.publicRisks[0]?.watch ?? asset.lab.riskMap[0]?.watch} />
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
                <ParticipantCard key={participant.name} participant={participant} />
              ))}
            </div>
          )}

          {activeTab === "history" && (
            <div className="space-y-4">
              {asset.lab.historicalEvents.map((event) => (
                <EventCard key={`${event.year}-${event.title}`} event={event} />
              ))}
            </div>
          )}

          {activeTab === "correlations" && (
            <div className="grid gap-4 xl:grid-cols-2">
              {asset.lab.correlations.map((correlation) => (
                <CorrelationCard key={correlation.market} correlation={correlation} />
              ))}
            </div>
          )}

          {activeTab === "risks" && (
            <div className="grid gap-4 xl:grid-cols-2">
              {asset.lab.riskMap.map((risk) => (
                <RiskCard key={risk.risk} risk={risk} />
              ))}
            </div>
          )}

          {activeTab === "routine" && (
            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)]">
              <div className="rounded-2xl border border-[var(--ln-border)] bg-white p-5">
                <h3 className="text-xl font-black text-[var(--ln-navy-900)]">Research routine</h3>
                <div className="mt-5 space-y-3">
                  {asset.lab.researchRoutine.map((step, index) => (
                    <div key={step} className="grid grid-cols-[40px_minmax(0,1fr)] gap-3 rounded-xl bg-[var(--ln-bg-soft)] p-4">
                      <div className="font-mono text-sm font-black text-[var(--ln-teal-500)]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
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
                <SourceCard key={source.url} source={source} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function TabButton({
  tab,
  activeTab,
  onSelect,
  mobile = false,
}: {
  tab: { key: TabKey; label: string; icon: typeof Activity };
  activeTab: TabKey;
  onSelect: (key: TabKey) => void;
  mobile?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(tab.key)}
      className={cn(
        "flex items-center gap-3 rounded-xl text-left text-sm font-black transition",
        mobile ? "shrink-0 px-4 py-2.5" : "w-full px-4 py-3",
        activeTab === tab.key
          ? "bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)]"
          : "text-[var(--ln-text-secondary)] hover:bg-[var(--ln-bg-soft)] hover:text-[var(--ln-navy-900)]"
      )}
    >
      <tab.icon className="h-5 w-5 shrink-0" />
      <span className="whitespace-nowrap">{tab.label}</span>
    </button>
  );
}

function FeaturePanel({
  icon: Icon,
  title,
  body,
  highlight = false,
}: {
  icon: typeof Activity;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-2xl border p-5",
        highlight ? "border-[var(--ln-teal-500)]/25 bg-[var(--ln-teal-soft)]" : "border-[var(--ln-border)] bg-white"
      )}
    >
      <Icon className="mb-4 h-5 w-5 text-[var(--ln-teal-500)]" />
      <h3 className="break-words text-lg font-black text-[var(--ln-navy-900)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{body}</p>
    </div>
  );
}

function Panel({ title, body }: { title: string; body: string }) {
  return (
    <div className="min-w-0 rounded-2xl border border-[var(--ln-border)] bg-white p-5">
      <h3 className="break-words text-lg font-black text-[var(--ln-navy-900)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{body}</p>
    </div>
  );
}

function ParticipantCard({ participant }: { participant: AssetProfile["lab"]["participants"][number] }) {
  return (
    <div className="min-w-0 rounded-2xl border border-[var(--ln-border)] bg-white p-5">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ln-teal-500)]">{participant.role}</p>
      <h3 className="mt-2 break-words text-xl font-black text-[var(--ln-navy-900)]">{participant.name}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{participant.whyItMatters}</p>
    </div>
  );
}

function EventCard({ event }: { event: AssetProfile["lab"]["historicalEvents"][number] }) {
  return (
    <div className="grid min-w-0 gap-4 rounded-2xl border border-[var(--ln-border)] bg-white p-5 md:grid-cols-[120px_minmax(0,1fr)]">
      <div className="font-mono text-2xl font-black text-[var(--ln-teal-500)]">{event.year}</div>
      <div className="min-w-0">
        <h3 className="break-words text-lg font-black text-[var(--ln-navy-900)]">{event.title}</h3>
        <p className="mt-2 text-sm leading-7 text-[var(--ln-text-secondary)]">{event.detail}</p>
      </div>
    </div>
  );
}

function CorrelationCard({ correlation }: { correlation: AssetProfile["lab"]["correlations"][number] }) {
  return (
    <div className="min-w-0 rounded-2xl border border-[var(--ln-border)] bg-white p-5">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ln-text-muted)]">Market link</p>
      <h3 className="mt-2 break-words text-xl font-black text-[var(--ln-navy-900)]">{correlation.market}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{correlation.relationship}</p>
      <div className="mt-4 rounded-xl bg-[var(--ln-bg-soft)] p-4 text-sm font-bold leading-6 text-[var(--ln-navy-900)]">
        {correlation.learnerNote}
      </div>
    </div>
  );
}

function RiskCard({ risk }: { risk: AssetProfile["lab"]["riskMap"][number] }) {
  return (
    <div className="min-w-0 rounded-2xl border border-[var(--ln-border)] bg-white p-5">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ln-warning)]">Risk watch</p>
      <h3 className="mt-2 break-words text-xl font-black text-[var(--ln-navy-900)]">{risk.risk}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{risk.watch}</p>
    </div>
  );
}

function SourceCard({ source }: { source: AssetProfile["sources"][number] }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noreferrer"
      className="group min-w-0 rounded-2xl border border-[var(--ln-border)] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(8,26,54,0.1)]"
    >
      <div className="flex min-w-0 items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ln-text-muted)]">{source.publisher}</p>
          <h3 className="mt-2 break-words text-xl font-black text-[var(--ln-navy-900)]">{source.title}</h3>
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-[var(--ln-teal-500)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{source.note}</p>
    </a>
  );
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="min-w-0 rounded-2xl border border-[var(--ln-border)] bg-white p-5">
      <h3 className="break-words text-lg font-black text-[var(--ln-navy-900)]">{title}</h3>
      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <div key={item} className="rounded-xl bg-[var(--ln-bg-soft)] px-4 py-3 text-sm font-bold leading-6 text-[var(--ln-text-secondary)]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
