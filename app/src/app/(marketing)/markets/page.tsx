import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CalendarCheck, CheckCircle2, Globe2, LockKeyhole, Search, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { AssetEducationNotice } from "@/components/asset-intelligence/AssetEducationNotice";
import {
  assetClassLabel,
  assetLabHref,
  coverageSnapshot,
  getCoverageByClass,
  getCoverageCounts,
  getReadyAssetProfiles,
  publicAssetHref,
} from "@/lib/asset-intelligence-data";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Market Guides | Lurnava Asset Intelligence",
  description:
    "Explore Lurnava's curated crypto, forex, and gold market guides. Learn what each asset is, what moves it, and how structured traders study it.",
  alternates: {
    canonical: "/markets",
  },
  openGraph: {
    title: "Market Guides | Lurnava Asset Intelligence",
    description:
      "Explore Lurnava's curated crypto, forex, and gold market guides. Learn what each asset is, what moves it, and how structured traders study it.",
    url: absoluteUrl("/markets"),
    siteName: "Lurnava Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Guides | Lurnava Asset Intelligence",
    description:
      "Explore Lurnava's curated crypto, forex, and gold market guides. Learn what each asset is, what moves it, and how structured traders study it.",
  },
};

const lanes = [
  {
    label: "Crypto",
    assetClass: "crypto" as const,
    description: "Digital assets, stablecoins, networks, exchange flow, liquidity depth, derivatives pressure, and ecosystem rotation.",
  },
  {
    label: "Forex",
    assetClass: "forex" as const,
    description: "Major currency markets, central banks, interest-rate expectations, trade flows, sessions, spreads, and pair behavior.",
  },
  {
    label: "Gold",
    assetClass: "gold" as const,
    description: "Gold as a macro-sensitive market shaped by real yields, central banks, dollar behavior, demand, and event risk.",
  },
];

export default function MarketsPage() {
  const readyAssets = getReadyAssetProfiles();
  const counts = getCoverageCounts();

  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)] overflow-x-hidden">
      <Navbar />

      <main>
        <section className="relative px-6 pt-36 pb-16 lg:px-8 lg:pt-44 lg:pb-24 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,#E7FFFB_0%,rgba(248,251,252,0)_100%)]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ln-border)] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)] shadow-sm">
                  <Search className="h-4 w-4" />
                  Lurnava Asset Intelligence
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-5xl text-5xl font-black tracking-tight text-[var(--ln-navy-900)] sm:text-6xl lg:text-7xl">
                    Market guides built for people who want to understand the asset first.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-[var(--ln-text-secondary)]">
                    Explore a curated universe of crypto, forex, and gold markets. Each ready guide explains what the asset is, why it matters, what moves it, and how Lurnava studies it inside the training platform.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--ln-navy-900)] px-7 py-4 text-sm font-black text-white shadow-[0_16px_36px_rgba(8,26,54,0.18)] transition hover:bg-[var(--ln-navy-800)]"
                  >
                    Start Structured Training
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/curriculum"
                    className="inline-flex items-center justify-center rounded-xl border border-[var(--ln-border)] bg-white px-7 py-4 text-sm font-black text-[var(--ln-navy-900)] transition hover:bg-[var(--ln-surface-soft)]"
                  >
                    View Curriculum
                  </Link>
                </div>

                <div className="max-w-3xl">
                  <AssetEducationNotice compact />
                </div>
              </div>

              <div className="rounded-[2rem] border border-[var(--ln-border)] bg-white p-5 shadow-[0_24px_70px_rgba(8,26,54,0.12)]">
                <div className="rounded-[1.5rem] border border-[var(--ln-border-soft)] bg-[var(--ln-bg-soft)] p-5">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">Coverage universe</p>
                      <p className="text-sm font-bold text-[var(--ln-navy-900)]">{coverageSnapshot.label}</p>
                    </div>
                    <CalendarCheck className="h-6 w-6 text-[var(--ln-teal-500)]" />
                  </div>
                  <div className="grid gap-3">
                    {counts.map((item) => (
                      <div key={item.assetClass} className="grid grid-cols-[1fr_auto] gap-4 rounded-2xl border border-[var(--ln-border)] bg-white p-4">
                        <div>
                          <p className="text-lg font-black text-[var(--ln-navy-900)]">{item.label}</p>
                          <p className="text-sm text-[var(--ln-text-secondary)]">{item.ready} ready now, {item.planned} in research queue</p>
                        </div>
                        <div className="text-right font-mono text-2xl font-black text-[var(--ln-teal-500)]">{item.total}</div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-xs leading-6 text-[var(--ln-text-secondary)]">
                    {coverageSnapshot.basis} Next review: <span className="font-bold text-[var(--ln-navy-900)]">{coverageSnapshot.nextReview}</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">Live pilot pages</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--ln-navy-900)] lg:text-4xl">Start with the assets students ask about first.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--ln-text-secondary)]">
                These are not market tips. They are structured asset explainers designed to help viewers understand the asset before they enter the paid research platform.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {readyAssets.map((asset) => (
                <Link
                  key={`${asset.assetClass}-${asset.slug}`}
                  href={publicAssetHref(asset)}
                  className="group rounded-2xl border border-[var(--ln-border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(8,26,54,0.1)]"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">{assetClassLabel(asset.assetClass)}</p>
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
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[var(--ln-border)] bg-white p-6 shadow-sm lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)]">
                  <Globe2 className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-[var(--ln-navy-900)]">Curated coverage, expanded in batches.</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--ln-text-secondary)]">
                  We do not rotate pages automatically when a volume list changes. Assets become public only after the research profile, paid tabs, and validation checks are ready.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {lanes.map((lane) => {
                  const sample = getCoverageByClass(lane.assetClass).slice(0, 8);
                  return (
                    <div key={lane.assetClass} className="rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-bg-soft)] p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-[var(--ln-teal-500)]" />
                        <h3 className="font-black text-[var(--ln-navy-900)]">{lane.label}</h3>
                      </div>
                      <p className="mb-4 text-xs leading-6 text-[var(--ln-text-secondary)]">{lane.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {sample.map((asset) => (
                          <span key={`${asset.assetClass}-${asset.slug}`} className="rounded-full border border-[var(--ln-border)] bg-white px-3 py-1 text-[11px] font-bold text-[var(--ln-text-secondary)]">
                            {asset.symbol}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Research before promotion", text: "Each public guide must have a deeper paid profile behind it before it becomes part of the ready set." },
              { icon: LockKeyhole, title: "Paid depth stays inside Asset Lab", text: "The public page teaches the surface. The platform gives learners drivers, participants, events, risk maps, and routines." },
              { icon: CheckCircle2, title: "Monthly review discipline", text: "The coverage list is hardcoded and reviewed deliberately, so pages remain stable and useful." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--ln-border)] bg-white p-6">
                <item.icon className="mb-5 h-6 w-6 text-[var(--ln-teal-500)]" />
                <h3 className="text-lg font-black text-[var(--ln-navy-900)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[var(--ln-navy-900)] p-8 text-center text-white shadow-[0_28px_80px_rgba(8,26,54,0.24)] lg:p-14">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[var(--ln-teal-400)]">From market guide to Asset Lab</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight lg:text-5xl">Learn the asset first. Then train the decision process.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Inside Lurnava, learners study assets through deeper dashboards, related lessons, Strategy Lab links, risk maps, and certification checks.
            </p>
            <div className="mx-auto mt-6 max-w-2xl text-left">
              <AssetEducationNotice tone="dark" compact />
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/register" className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-black text-[var(--ln-navy-900)] transition hover:bg-slate-100">
                Enter Training Platform
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={assetLabHref(readyAssets[0])} className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:bg-white/10">
                Preview Asset Lab Route
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
