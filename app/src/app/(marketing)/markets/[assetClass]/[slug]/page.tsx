import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Eye,
  Layers3,
  LineChart,
  ShieldAlert,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { AssetEducationNotice } from "@/components/asset-intelligence/AssetEducationNotice";
import { AssetAnalyticsLink } from "@/components/asset-intelligence/AssetAnalyticsLink";
import { AssetAnalyticsPageView } from "@/components/asset-intelligence/AssetAnalyticsPageView";
import {
  assetClassLabel,
  assetLabHref,
  getAssetProfile,
  getReadyAssetProfiles,
  publicAssetHref,
} from "@/lib/asset-intelligence-data";
import { relatedLessonHref, relatedStrategyLabHref } from "@/lib/asset-navigation";
import { absoluteUrl } from "@/lib/site-url";

type PageProps = {
  params: Promise<{ assetClass: string; slug: string }>;
};

export function generateStaticParams() {
  return getReadyAssetProfiles().map((asset) => ({
    assetClass: asset.assetClass,
    slug: asset.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { assetClass, slug } = await params;
  const asset = getAssetProfile(assetClass, slug);
  if (!asset) return {};
  const canonicalUrl = absoluteUrl(publicAssetHref(asset));

  return {
    title: asset.seoTitle,
    description: asset.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: publicAssetHref(asset),
    },
    openGraph: {
      title: asset.seoTitle,
      description: asset.seoDescription,
      url: canonicalUrl,
      siteName: "Lurnava Academy",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: asset.seoTitle,
      description: asset.seoDescription,
    },
  };
}

export default async function PublicAssetPage({ params }: PageProps) {
  const { assetClass, slug } = await params;
  const asset = getAssetProfile(assetClass, slug);
  if (!asset) notFound();
  const canonicalUrl = absoluteUrl(publicAssetHref(asset));

  const relatedAssets = getReadyAssetProfiles()
    .filter((item) => item.slug !== asset.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: asset.seoTitle,
        description: asset.seoDescription,
        dateModified: asset.lastReviewed,
        about: {
          "@type": "Thing",
          name: asset.name,
          alternateName: asset.symbol,
        },
        publisher: {
          "@type": "EducationalOrganization",
          name: "Lurnava Academy",
          url: absoluteUrl("/"),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Markets",
            item: absoluteUrl("/markets"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: asset.name,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)] overflow-x-hidden">
      <Navbar />
      <AssetAnalyticsPageView
        eventName="asset_public_page_viewed"
        onceKey={`asset-public-${asset.assetClass}-${asset.slug}`}
        payload={{
          route_type: "public",
          user_state: "unknown",
          asset_slug: asset.slug,
          asset_class: asset.assetClass,
          asset_symbol: asset.symbol,
          asset_rank: asset.rank,
          asset_name: asset.name,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <main>
        <section className="relative px-6 pt-36 pb-14 lg:px-8 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[560px] bg-[linear-gradient(180deg,#E7FFFB_0%,rgba(248,251,252,0)_100%)]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[var(--ln-border)] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--ln-teal-500)]">
                    {assetClassLabel(asset.assetClass)} Guide
                  </span>
                  <span className="rounded-full border border-[var(--ln-border)] bg-white px-4 py-2 font-mono text-xs font-black text-[var(--ln-navy-900)]">
                    {asset.symbol}
                  </span>
                  <span className="rounded-full border border-[var(--ln-border)] bg-white px-4 py-2 text-xs font-bold text-[var(--ln-text-secondary)]">
                    Reviewed {asset.lastReviewed}
                  </span>
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-5xl text-5xl font-black tracking-tight text-[var(--ln-navy-900)] sm:text-6xl lg:text-7xl">
                    {asset.name}: {asset.publicHeadline}
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-[var(--ln-text-secondary)]">
                    {asset.publicSubheadline}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <AssetAnalyticsLink
                    href="/register"
                    eventName="asset_public_cta_clicked"
                    eventPayload={{
                      route_type: "public",
                      user_state: "unknown",
                      asset_slug: asset.slug,
                      asset_class: asset.assetClass,
                      asset_symbol: asset.symbol,
                      asset_rank: asset.rank,
                      destination: "/register",
                      cta_id: "public-asset-hero-register",
                    }}
                    data-asset-event="asset_public_cta_clicked"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--ln-navy-900)] px-7 py-4 text-sm font-black text-white shadow-[0_16px_36px_rgba(8,26,54,0.18)] transition hover:bg-[var(--ln-navy-800)]"
                  >
                    Learn Assets Like This
                    <ArrowRight className="h-4 w-4" />
                  </AssetAnalyticsLink>
                  <AssetAnalyticsLink
                    href="/curriculum"
                    eventName="asset_public_cta_clicked"
                    eventPayload={{
                      route_type: "public",
                      user_state: "unknown",
                      asset_slug: asset.slug,
                      asset_class: asset.assetClass,
                      asset_symbol: asset.symbol,
                      asset_rank: asset.rank,
                      destination: "/curriculum",
                      cta_id: "public-asset-hero-curriculum",
                    }}
                    data-asset-event="asset_public_cta_clicked"
                    className="inline-flex items-center justify-center rounded-xl border border-[var(--ln-border)] bg-white px-7 py-4 text-sm font-black text-[var(--ln-navy-900)] transition hover:bg-[var(--ln-surface-soft)]"
                  >
                    See Training Structure
                  </AssetAnalyticsLink>
                </div>

                <div className="max-w-3xl">
                  <AssetEducationNotice compact />
                </div>
              </div>

              <aside className="rounded-[2rem] border border-[var(--ln-border)] bg-white p-5 shadow-[0_24px_70px_rgba(8,26,54,0.12)]">
                <div className="rounded-[1.5rem] bg-[var(--ln-navy-900)] p-6 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-400)]">Asset Desk Card</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Symbol</p>
                      <p className="mt-1 font-mono text-3xl font-black">{asset.symbol}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Coverage Rank</p>
                      <p className="mt-1 font-mono text-3xl font-black">#{asset.rank}</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Lurnava monitors</p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">{asset.lurnavaMonitorNote}</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="px-6 py-10 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {[
              { icon: Eye, title: "What it is", text: asset.plainEnglish },
              { icon: BarChart3, title: "Market role", text: asset.marketRole },
              { icon: LineChart, title: "Why traders watch it", text: asset.whyTradersWatch },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--ln-border)] bg-white p-6 shadow-sm">
                <item.icon className="mb-5 h-6 w-6 text-[var(--ln-teal-500)]" />
                <h2 className="text-xl font-black text-[var(--ln-navy-900)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">Market drivers</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--ln-navy-900)] lg:text-4xl">What usually moves {asset.name}?</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {asset.drivers.map((driver) => (
                <div key={driver.title} className="rounded-2xl border border-[var(--ln-border)] bg-white p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black text-[var(--ln-navy-900)]">{driver.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{driver.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">Origin and market memory</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--ln-navy-900)] lg:text-4xl">
                  The history that gives {asset.name} context.
                </h2>
              </div>
              <p className="text-sm leading-7 text-[var(--ln-text-secondary)]">
                Markets are easier to understand when learners know what shaped them. This timeline highlights the events our Asset Lab uses as reference points, not as predictions.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)]">
              <div className="space-y-4">
                {asset.lab.historicalEvents.map((event) => (
                  <div
                    key={`${event.year}-${event.title}`}
                    className="grid gap-4 rounded-2xl border border-[var(--ln-border)] bg-white p-5 shadow-sm sm:grid-cols-[120px_minmax(0,1fr)]"
                  >
                    <div className="flex items-center gap-3 sm:block">
                      <CalendarDays className="h-5 w-5 text-[var(--ln-teal-500)] sm:hidden" />
                      <p className="font-mono text-2xl font-black text-[var(--ln-teal-500)]">{event.year}</p>
                    </div>
                    <div className="min-w-0">
                      <h3 className="break-words text-lg font-black text-[var(--ln-navy-900)]">{event.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--ln-text-secondary)]">{event.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[2rem] border border-[var(--ln-border)] bg-white p-6 shadow-sm lg:p-7">
                <Users className="mb-5 h-7 w-7 text-[var(--ln-teal-500)]" />
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">Authorities, builders, and big players</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-[var(--ln-navy-900)]">
                  Who learners should know around {asset.symbol}.
                </h3>
                <div className="mt-6 space-y-4">
                  {asset.lab.participants.map((participant) => (
                    <div key={participant.name} className="rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-bg-soft)] p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ln-text-muted)]">{participant.role}</p>
                      <h4 className="mt-2 break-words text-lg font-black text-[var(--ln-navy-900)]">{participant.name}</h4>
                      <p className="mt-2 text-sm leading-7 text-[var(--ln-text-secondary)]">{participant.whyItMatters}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[var(--ln-border)] bg-white p-6 shadow-sm lg:p-10">
            <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Layers3 className="mb-5 h-8 w-8 text-[var(--ln-teal-500)]" />
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">Wider-market connections</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--ln-navy-900)]">
                  {asset.name} does not move in isolation.
                </h2>
              </div>
              <p className="text-sm leading-7 text-[var(--ln-text-secondary)]">
                Asset Lab connects every market to related forces so learners can compare context before they study chart behavior.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {asset.lab.correlations.map((correlation) => (
                <div key={correlation.market} className="rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-bg-soft)] p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ln-text-muted)]">Market link</p>
                  <h3 className="mt-2 break-words text-xl font-black text-[var(--ln-navy-900)]">{correlation.market}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{correlation.relationship}</p>
                  <div className="mt-4 rounded-xl bg-white p-4 text-sm font-bold leading-6 text-[var(--ln-navy-900)]">
                    {correlation.learnerNote}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--ln-border)] bg-white p-7">
              <ShieldAlert className="mb-5 h-7 w-7 text-[var(--ln-warning)]" />
              <h2 className="text-3xl font-black tracking-tight text-[var(--ln-navy-900)]">Risks to understand first</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--ln-text-secondary)]">
                Lurnava teaches asset study before trade decisions. A learner should know what can weaken an idea before treating any market as tradable.
              </p>
              <div className="mt-5">
                <AssetEducationNotice compact />
              </div>
            </div>
            <div className="grid gap-4">
              {asset.publicRisks.map((risk) => (
                <div key={risk.risk} className="rounded-2xl border border-[var(--ln-border)] bg-white p-5">
                  <h3 className="text-base font-black text-[var(--ln-navy-900)]">{risk.risk}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--ln-text-secondary)]">{risk.watch}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[var(--ln-border)] bg-white p-8 shadow-sm lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <BookOpenCheck className="mb-5 h-8 w-8 text-[var(--ln-teal-500)]" />
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">Inside Lurnava</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--ln-navy-900)] lg:text-4xl">The public page is only the surface.</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--ln-text-secondary)]">{asset.conversionCta}</p>
              </div>
              <div className="space-y-5">
                <p className="text-base leading-8 text-[var(--ln-text-secondary)]">{asset.lab.deskBrief}</p>
                <div className="rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-bg-soft)] p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">Research question</p>
                  <p className="mt-2 text-lg font-black text-[var(--ln-navy-900)]">{asset.lab.researchQuestion}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--ln-border)] bg-white p-5">
                    <h3 className="text-lg font-black text-[var(--ln-navy-900)]">Related lessons</h3>
                    <div className="mt-4 space-y-2">
                      {asset.lab.relatedLessons.map((lesson) => (
                        <AssetAnalyticsLink
                          key={lesson}
                          href={relatedLessonHref(lesson, "public")}
                          eventName="asset_related_lesson_clicked"
                          eventPayload={{
                            route_type: "public",
                            user_state: "unknown",
                            asset_slug: asset.slug,
                            asset_class: asset.assetClass,
                            asset_symbol: asset.symbol,
                            destination: relatedLessonHref(lesson, "public"),
                            link_label: lesson,
                          }}
                          data-asset-event="asset_related_lesson_clicked"
                          data-asset-nav-kind="related-lesson"
                          className="group flex items-center justify-between gap-3 rounded-xl bg-[var(--ln-bg-soft)] px-4 py-3 text-sm font-bold leading-6 text-[var(--ln-text-secondary)] transition hover:bg-[var(--ln-teal-soft)] hover:text-[var(--ln-navy-900)]"
                        >
                          {lesson}
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--ln-teal-500)] transition group-hover:translate-x-0.5" />
                        </AssetAnalyticsLink>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[var(--ln-border)] bg-white p-5">
                    <h3 className="text-lg font-black text-[var(--ln-navy-900)]">Strategy Lab links</h3>
                    <div className="mt-4 space-y-2">
                      {asset.lab.relatedStrategies.map((strategy) => (
                        <AssetAnalyticsLink
                          key={strategy}
                          href={relatedStrategyLabHref(strategy)}
                          eventName="asset_related_strategy_clicked"
                          eventPayload={{
                            route_type: "public",
                            user_state: "unknown",
                            asset_slug: asset.slug,
                            asset_class: asset.assetClass,
                            asset_symbol: asset.symbol,
                            destination: relatedStrategyLabHref(strategy),
                            link_label: strategy,
                          }}
                          data-asset-event="asset_related_strategy_clicked"
                          data-asset-nav-kind="related-strategy"
                          className="group flex items-center justify-between gap-3 rounded-xl bg-[var(--ln-bg-soft)] px-4 py-3 text-sm font-bold leading-6 text-[var(--ln-text-secondary)] transition hover:bg-[var(--ln-teal-soft)] hover:text-[var(--ln-navy-900)]"
                        >
                          {strategy}
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--ln-teal-500)] transition group-hover:translate-x-0.5" />
                        </AssetAnalyticsLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-navy-900)] p-5 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-teal-400)]">Platform research routine</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {asset.lab.researchRoutine.slice(0, 4).map((step, index) => (
                      <div key={step} className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                        <span className="font-mono text-xs font-black text-[var(--ln-teal-400)]">{String(index + 1).padStart(2, "0")}</span>
                        <span className="text-sm font-bold leading-6 text-slate-200">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <AssetAnalyticsLink
                    href="/register"
                    eventName="asset_public_cta_clicked"
                    eventPayload={{
                      route_type: "public",
                      user_state: "unknown",
                      asset_slug: asset.slug,
                      asset_class: asset.assetClass,
                      asset_symbol: asset.symbol,
                      asset_rank: asset.rank,
                      destination: "/register",
                      cta_id: "public-asset-inside-register",
                    }}
                    data-asset-event="asset_public_cta_clicked"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--ln-navy-900)] px-7 py-4 text-sm font-black text-white transition hover:bg-[var(--ln-navy-800)]"
                  >
                    Train Inside Lurnava
                    <ArrowRight className="h-4 w-4" />
                  </AssetAnalyticsLink>
                  <AssetAnalyticsLink
                    href={assetLabHref(asset)}
                    eventName="asset_public_cta_clicked"
                    eventPayload={{
                      route_type: "public",
                      user_state: "unknown",
                      asset_slug: asset.slug,
                      asset_class: asset.assetClass,
                      asset_symbol: asset.symbol,
                      asset_rank: asset.rank,
                      destination: assetLabHref(asset),
                      cta_id: "public-asset-lab-route",
                    }}
                    data-asset-event="asset_public_cta_clicked"
                    className="inline-flex items-center justify-center rounded-xl border border-[var(--ln-border)] bg-white px-7 py-4 text-sm font-black text-[var(--ln-navy-900)] transition hover:bg-[var(--ln-surface-soft)]"
                  >
                    Asset Lab Route
                  </AssetAnalyticsLink>
                  <AssetAnalyticsLink
                    href="/pricing"
                    eventName="asset_pricing_cta_clicked"
                    eventPayload={{
                      route_type: "public",
                      user_state: "unknown",
                      asset_slug: asset.slug,
                      asset_class: asset.assetClass,
                      asset_symbol: asset.symbol,
                      asset_rank: asset.rank,
                      destination: "/pricing",
                      cta_id: "public-asset-pricing",
                    }}
                    data-asset-event="asset_pricing_cta_clicked"
                    className="inline-flex items-center justify-center rounded-xl border border-[var(--ln-border)] bg-white px-7 py-4 text-sm font-black text-[var(--ln-navy-900)] transition hover:bg-[var(--ln-surface-soft)]"
                  >
                    Compare Plans
                  </AssetAnalyticsLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[var(--ln-border)] bg-white p-7 shadow-sm lg:p-10">
            <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">Source and review trail</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--ln-navy-900)]">Where this profile is anchored.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--ln-text-secondary)]">
                Lurnava uses source-backed asset profiles. Fast-changing numbers are treated as monitoring items, not hardcoded claims.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {asset.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-bg-soft)] p-5 transition hover:bg-white hover:shadow-[0_18px_45px_rgba(8,26,54,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">{source.publisher}</p>
                      <h3 className="mt-2 text-lg font-black text-[var(--ln-navy-900)]">{source.title}</h3>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-[var(--ln-teal-500)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--ln-text-secondary)]">{source.note}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">Related market guides</p>
                <h2 className="mt-3 text-2xl font-black text-[var(--ln-navy-900)]">Compare {asset.name} with other assets.</h2>
              </div>
              <Link href="/markets" className="hidden text-sm font-black text-[var(--ln-teal-500)] hover:text-[var(--ln-navy-900)] sm:inline-flex">
                View all guides
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedAssets.map((item) => (
                <Link key={`${item.assetClass}-${item.slug}`} href={publicAssetHref(item)} className="rounded-2xl border border-[var(--ln-border)] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(8,26,54,0.1)]">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-text-muted)]">{assetClassLabel(item.assetClass)}</p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-black text-[var(--ln-navy-900)]">{item.name}</h3>
                    <span className="rounded-xl bg-[var(--ln-teal-soft)] px-3 py-2 font-mono text-xs font-black text-[var(--ln-teal-500)]">{item.symbol}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
