import Link from "next/link";
import { ArrowRight, Database, Globe2, LineChart, Radar, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";
import { AssetLabAccessNotice } from "@/components/asset-lab/AssetLabAccessNotice";
import { AssetEducationNotice } from "@/components/asset-intelligence/AssetEducationNotice";
import { AssetAnalyticsPageView } from "@/components/asset-intelligence/AssetAnalyticsPageView";
import { getAssetLabAccessState } from "@/lib/asset-lab-access";
import {
  assetClassLabel,
  assetLabHref,
  coverageSnapshot,
  getCoverageCounts,
  getReadyAssetProfiles,
} from "@/lib/asset-intelligence-data";
import { assetAccessToAnalyticsUserState } from "@/lib/asset-analytics-events";

export const dynamic = "force-dynamic";

export default async function AssetLabPage() {
  const access = await getAssetLabAccessState();

  if (access.status === "logged-out") {
    redirect("/login?redirect=%2Fasset-lab");
  }

  if (access.status === "needs-upgrade") {
    return <AssetLabAccessNotice />;
  }

  const readyAssets = getReadyAssetProfiles();
  const counts = getCoverageCounts();
  const analyticsUserState = assetAccessToAnalyticsUserState(access.status, access.isAdmin);

  return (
    <div className="min-h-[calc(100vh-100px)] space-y-6">
      <AssetAnalyticsPageView
        eventName="asset_lab_index_viewed"
        onceKey="asset-lab-index"
        payload={{
          route_type: "paid",
          user_state: analyticsUserState,
        }}
      />
      <section className="rounded-2xl border border-[var(--ln-border)] bg-white p-6 shadow-sm lg:p-8">
        <div className="grid gap-8 xl:grid-cols-[1fr_420px] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ln-border)] bg-[var(--ln-teal-soft)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">
              <Radar className="h-4 w-4" />
              Asset Lab
            </div>
            <div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[var(--ln-navy-900)] lg:text-5xl">
                Study the asset behind the setup.
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--ln-text-secondary)]">
                Asset Lab is the research layer for Lurnava learners. It connects market identity, drivers, participants, historical events, correlations, risks, related lessons, and Strategy Lab items in one platform workspace.
              </p>
              <div className="mt-5 max-w-3xl">
                <AssetEducationNotice compact />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[var(--ln-navy-900)] p-5 text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-teal-400)]">Coverage state</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {counts.map((item) => (
                <div key={item.assetClass} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">{assetClassLabel(item.assetClass)}</p>
                  <p className="mt-2 font-mono text-2xl font-black">{item.ready}/{item.total}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-300">{coverageSnapshot.label}. Ready profiles expand after validation, not automatically.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-4">
        {[
          { icon: Database, title: "Identity", text: "What the asset is and why the market cares." },
          { icon: LineChart, title: "Drivers", text: "What changes demand, liquidity, and market behavior." },
          { icon: Globe2, title: "Participants", text: "Institutions, issuers, validators, central banks, whales, and other forces." },
          { icon: ShieldCheck, title: "Risks", text: "What can invalidate the asset read before a learner acts." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-[var(--ln-border)] bg-white p-5 shadow-sm">
            <item.icon className="mb-4 h-6 w-6 text-[var(--ln-teal-500)]" />
            <h2 className="text-lg font-black text-[var(--ln-navy-900)]">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--ln-text-secondary)]">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-[var(--ln-border)] bg-white p-5 shadow-sm">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">Ready workspaces</p>
            <h2 className="mt-2 text-2xl font-black text-[var(--ln-navy-900)]">Open a researched asset desk.</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-[var(--ln-text-secondary)]">
            The pilot set proves the layout and quality standard before the remaining coverage universe is expanded in batches.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {readyAssets.map((asset) => (
            <Link
              key={`${asset.assetClass}-${asset.slug}`}
              href={assetLabHref(asset)}
              className="group rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-bg-soft)] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(8,26,54,0.1)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">{assetClassLabel(asset.assetClass)}</p>
                  <h3 className="mt-2 text-2xl font-black text-[var(--ln-navy-900)]">{asset.name}</h3>
                </div>
                <span className="rounded-xl bg-white px-3 py-2 font-mono text-sm font-black text-[var(--ln-teal-500)] shadow-sm">{asset.symbol}</span>
              </div>
              <p className="mt-4 min-h-24 text-sm leading-7 text-[var(--ln-text-secondary)]">{asset.lab.researchQuestion}</p>
              <div className="mt-5 flex items-center justify-between border-t border-[var(--ln-border)] pt-4">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--ln-navy-900)]">Open workspace</span>
                <ArrowRight className="h-4 w-4 text-[var(--ln-teal-500)] transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
