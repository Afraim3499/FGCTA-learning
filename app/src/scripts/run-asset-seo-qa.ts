import fs from "fs/promises";
import path from "path";
import { loadPlaywrightChromium, type BrowserContextLike as BrowserContext, type PageLike as Page } from "./playwright-runtime";

type Severity = "blocker" | "major" | "minor";

type RouteEntry = {
  routeType: "public" | "paid";
  path: string;
  assetClass: string;
  slug: string;
  name: string;
  symbol: string;
  rank: number;
  status: string;
  sourceCount: number;
};

type Inventory = {
  summary: {
    publicRouteCount: number;
  };
  publicRoutes: RouteEntry[];
};

type QaIssue = {
  severity: Severity;
  check: string;
  path?: string;
  message: string;
  details?: unknown;
};

type PageSeoMetrics = {
  path: string;
  assetClass: string;
  slug: string;
  name: string;
  symbol: string;
  title: string;
  titleLength: number;
  description: string;
  descriptionLength: number;
  canonical: string;
  expectedCanonical: string;
  h1s: string[];
  headings: string[];
  internalLinks: string[];
  publicCtaCount: number;
  relatedLessonCount: number;
  relatedStrategyCount: number;
  relatedMarketGuideCount: number;
  sourceLinkCount: number;
  hasReviewContext: boolean;
  hasSourceContext: boolean;
  hasAssetDeskContext: boolean;
  hasWhatAnswer: boolean;
  hasDriverAnswer: boolean;
  hasParticipantAnswer: boolean;
  hasHistoryAnswer: boolean;
  hasRiskAnswer: boolean;
  hasMonitorAnswer: boolean;
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
  };
  structuredData: {
    scriptCount: number;
    parseableCount: number;
    hasWebPage: boolean;
    hasBreadcrumbList: boolean;
    webPageUrl: string;
    breadcrumbItemCount: number;
  };
  issues: QaIssue[];
};

type DuplicateReport = {
  duplicateTitles: Array<{ value: string; paths: string[] }>;
  duplicateDescriptions: Array<{ value: string; paths: string[] }>;
};

type SitemapReport = {
  url: string;
  expectedCount: number;
  actualAssetCount: number;
  missingRoutes: string[];
  duplicateLocs: string[];
};

type OutputReport = {
  startedAt: string;
  finishedAt: string;
  baseUrl: string;
  sitemap: SitemapReport;
  duplicates: DuplicateReport;
  summary: {
    publicPagesChecked: number;
    issues: Record<Severity, number>;
    missingH1: number;
    missingMetaDescription: number;
    missingPublicCta: number;
    missingCanonical: number;
    missingStructuredData: number;
  };
  pages: PageSeoMetrics[];
  issues: QaIssue[];
};

const REQUIRED_PUBLIC_ROUTE_COUNT = 71;
const OUTPUT_DIR = path.join(process.cwd(), "docs", "qa", "asset-seo");
const JSON_REPORT_PATH = path.join(OUTPUT_DIR, "asset-seo-qa-report.json");
const MARKDOWN_REPORT_PATH = path.join(OUTPUT_DIR, "asset-seo-qa-report.md");

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/+$/, "");
}

function routeUrl(baseUrl: string, routePath: string) {
  return `${normalizeBaseUrl(baseUrl)}${routePath}`;
}

function normalizeUrl(value: string) {
  return value.replace(/\/+$/, "");
}

function addIssue(issues: QaIssue[], issue: QaIssue) {
  issues.push(issue);
}

function countIssues(issues: QaIssue[], severity: Severity) {
  return issues.filter((issue) => issue.severity === severity).length;
}

function groupDuplicates(pages: PageSeoMetrics[], key: "title" | "description") {
  const grouped = new Map<string, string[]>();
  for (const page of pages) {
    const value = page[key].trim();
    if (!value) continue;
    grouped.set(value, [...(grouped.get(value) ?? []), page.path]);
  }

  return [...grouped.entries()]
    .filter(([, paths]) => paths.length > 1)
    .map(([value, paths]) => ({ value, paths }));
}

async function readInventory(): Promise<Inventory> {
  const inventoryPath = path.join(process.cwd(), "docs", "asset-intelligence-route-inventory.json");
  const raw = await fs.readFile(inventoryPath, "utf8");
  const inventory = JSON.parse(raw) as Inventory;

  if (inventory.summary.publicRouteCount !== REQUIRED_PUBLIC_ROUTE_COUNT || inventory.publicRoutes.length !== REQUIRED_PUBLIC_ROUTE_COUNT) {
    throw new Error(`Inventory mismatch. Expected ${REQUIRED_PUBLIC_ROUTE_COUNT} public routes.`);
  }

  return inventory;
}

async function resetOutputDir() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

function parseSitemapLocs(xml: string) {
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());
  const duplicateLocs = locs.filter((loc, index) => locs.indexOf(loc) !== index);
  return { locs, duplicateLocs: [...new Set(duplicateLocs)].sort() };
}

async function readSitemap(context: BrowserContext, baseUrl: string, publicRoutes: RouteEntry[]): Promise<SitemapReport> {
  const sitemapUrl = routeUrl(baseUrl, "/sitemap.xml");
  const response = await context.request.get(sitemapUrl, { timeout: 45_000 });
  if (response.status() !== 200) {
    throw new Error(`Sitemap returned HTTP ${response.status()}.`);
  }

  const xml = await response.text();
  const { locs, duplicateLocs } = parseSitemapLocs(xml);
  const locSet = new Set(locs.map(normalizeUrl));

  const expectedCanonicals = publicRoutes.map((route) => {
    const match = locs.find((loc) => new URL(loc).pathname === route.path);
    return match ? normalizeUrl(match) : route.path;
  });

  return {
    url: sitemapUrl,
    expectedCount: publicRoutes.length,
    actualAssetCount: expectedCanonicals.filter((expected) => locSet.has(expected)).length,
    missingRoutes: publicRoutes
      .filter((route) => !locs.some((loc) => new URL(loc).pathname === route.path))
      .map((route) => route.path),
    duplicateLocs,
  };
}

async function collectPageSeoMetrics(
  page: Page,
  baseUrl: string,
  route: RouteEntry,
  expectedCanonical: string
): Promise<PageSeoMetrics> {
  await page.goto(routeUrl(baseUrl, route.path), { waitUntil: "domcontentloaded", timeout: 45_000 });
  await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => undefined);
  await page.waitForTimeout(200);

  return page.evaluate(String.raw`(() => {
      const route = ${JSON.stringify(route)};
      const expectedCanonical = ${JSON.stringify(expectedCanonical)};

      function meta(selector) {
        return document.querySelector(selector)?.content?.trim() ?? "";
      }

      function linkHref(selector) {
        return document.querySelector(selector)?.href?.trim() ?? "";
      }

      function visibleText(selector) {
        return Array.from(document.querySelectorAll(selector))
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            const style = window.getComputedStyle(element);
            return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
          })
          .map((element) => element.textContent?.trim().replace(/\s+/g, " ") ?? "")
          .filter(Boolean);
      }

      function internalHref(href) {
        try {
          const parsed = new URL(href, window.location.origin);
          if (parsed.origin !== window.location.origin) return "";
          return parsed.pathname + parsed.search;
        } catch {
          return "";
        }
      }

      function searchText(value) {
        return value.toLowerCase().replace(/\s+/g, " ").trim();
      }

      const bodyText = document.body.innerText.replace(/\s+/g, " ").trim();
      const normalizedBodyText = searchText(bodyText);
      const links = Array.from(document.querySelectorAll("a")).map((link) => ({
        text: link.textContent?.trim().replace(/\s+/g, " ") ?? "",
        href: link.getAttribute("href") ?? "",
        absoluteHref: link.href,
        dataKind: link.getAttribute("data-asset-nav-kind"),
        target: link.getAttribute("target") ?? "",
      }));
      const internalLinks = links.map((link) => internalHref(link.absoluteHref || link.href)).filter(Boolean);

      const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
      const parsedScripts = scripts
        .map((script) => {
          try {
            return JSON.parse(script.textContent ?? "");
          } catch {
            return null;
          }
        })
        .filter(Boolean);
      const graphItems = parsedScripts.flatMap((item) => {
        const graph = item["@graph"];
        return Array.isArray(graph) ? graph : [item];
      });
      const webPage = graphItems.find((item) => item["@type"] === "WebPage");
      const breadcrumb = graphItems.find((item) => item["@type"] === "BreadcrumbList");
      const breadcrumbItems = Array.isArray(breadcrumb?.itemListElement) ? breadcrumb.itemListElement : [];

      return {
        path: route.path,
        assetClass: route.assetClass,
        slug: route.slug,
        name: route.name,
        symbol: route.symbol,
        title: document.title.trim(),
        titleLength: document.title.trim().length,
        description: meta('meta[name="description"]'),
        descriptionLength: meta('meta[name="description"]').length,
        canonical: linkHref('link[rel="canonical"]'),
        expectedCanonical,
        h1s: visibleText("h1"),
        headings: visibleText("h1,h2,h3"),
        internalLinks,
        publicCtaCount: links.filter((link) => link.href === "/register").length,
        relatedLessonCount: links.filter((link) => link.dataKind === "related-lesson").length,
        relatedStrategyCount: links.filter((link) => link.dataKind === "related-strategy").length,
        relatedMarketGuideCount: internalLinks.filter((href) => href.startsWith("/markets/") && href !== route.path).length,
        sourceLinkCount: links.filter((link) => link.target === "_blank").length,
        hasReviewContext: normalizedBodyText.includes("reviewed"),
        hasSourceContext: normalizedBodyText.includes("source and review trail") && normalizedBodyText.includes("where this profile is anchored"),
        hasAssetDeskContext: normalizedBodyText.includes("asset desk card"),
        hasWhatAnswer: normalizedBodyText.includes("what it is"),
        hasDriverAnswer: normalizedBodyText.includes("what usually moves"),
        hasParticipantAnswer: normalizedBodyText.includes("who learners should know"),
        hasHistoryAnswer: normalizedBodyText.includes("history that gives"),
        hasRiskAnswer: normalizedBodyText.includes("risks to understand first"),
        hasMonitorAnswer: normalizedBodyText.includes("lurnava monitors"),
        openGraph: {
          title: meta('meta[property="og:title"]'),
          description: meta('meta[property="og:description"]'),
          url: meta('meta[property="og:url"]'),
          type: meta('meta[property="og:type"]'),
          siteName: meta('meta[property="og:site_name"]'),
        },
        twitter: {
          card: meta('meta[name="twitter:card"]'),
          title: meta('meta[name="twitter:title"]'),
          description: meta('meta[name="twitter:description"]'),
        },
        structuredData: {
          scriptCount: scripts.length,
          parseableCount: parsedScripts.length,
          hasWebPage: Boolean(webPage),
          hasBreadcrumbList: Boolean(breadcrumb),
          webPageUrl: typeof webPage?.url === "string" ? webPage.url : "",
          breadcrumbItemCount: breadcrumbItems.length,
        },
        issues: [],
      };
    })()`) as Promise<PageSeoMetrics>;
}

function reviewPage(metrics: PageSeoMetrics): QaIssue[] {
  const issues: QaIssue[] = [];
  const path = metrics.path;

  if (!metrics.title) {
    addIssue(issues, { severity: "blocker", check: "title", path, message: "SEO title is missing." });
  } else if (!metrics.title.toLowerCase().includes(metrics.name.toLowerCase()) && !metrics.title.includes(metrics.symbol)) {
    addIssue(issues, {
      severity: "major",
      check: "title",
      path,
      message: "SEO title is not asset-specific.",
      details: { title: metrics.title, asset: metrics.name, symbol: metrics.symbol },
    });
  }

  if (!metrics.description) {
    addIssue(issues, { severity: "blocker", check: "description", path, message: "Meta description is missing." });
  } else if (metrics.descriptionLength < 70 || metrics.descriptionLength > 180) {
    addIssue(issues, {
      severity: "minor",
      check: "description-length",
      path,
      message: "Meta description is outside the practical search-preview range.",
      details: { length: metrics.descriptionLength, description: metrics.description },
    });
  }

  if (metrics.h1s.length !== 1) {
    addIssue(issues, {
      severity: "blocker",
      check: "h1",
      path,
      message: "Page does not have exactly one visible H1.",
      details: metrics.h1s,
    });
  } else if (!metrics.h1s[0].toLowerCase().includes(metrics.name.toLowerCase())) {
    addIssue(issues, {
      severity: "major",
      check: "h1",
      path,
      message: "Visible H1 does not include the asset name.",
      details: metrics.h1s[0],
    });
  }

  if (normalizeUrl(metrics.canonical) !== normalizeUrl(metrics.expectedCanonical)) {
    addIssue(issues, {
      severity: "blocker",
      check: "canonical",
      path,
      message: "Canonical URL does not match the sitemap URL for this route.",
      details: { canonical: metrics.canonical, expectedCanonical: metrics.expectedCanonical },
    });
  }

  if (metrics.publicCtaCount === 0) {
    addIssue(issues, { severity: "blocker", check: "public-cta", path, message: "Public CTA to registration is missing." });
  }

  if (metrics.relatedLessonCount === 0 || metrics.relatedStrategyCount === 0 || metrics.relatedMarketGuideCount < 3) {
    addIssue(issues, {
      severity: "major",
      check: "internal-links",
      path,
      message: "Public page does not expose the required related internal links.",
      details: {
        relatedLessonCount: metrics.relatedLessonCount,
        relatedStrategyCount: metrics.relatedStrategyCount,
        relatedMarketGuideCount: metrics.relatedMarketGuideCount,
      },
    });
  }

  if (!metrics.hasReviewContext || !metrics.hasSourceContext || metrics.sourceLinkCount === 0) {
    addIssue(issues, {
      severity: "major",
      check: "source-context",
      path,
      message: "Visible source or review context is missing.",
      details: {
        hasReviewContext: metrics.hasReviewContext,
        hasSourceContext: metrics.hasSourceContext,
        sourceLinkCount: metrics.sourceLinkCount,
      },
    });
  }

  const requiredAnswers = {
    hasWhatAnswer: metrics.hasWhatAnswer,
    hasDriverAnswer: metrics.hasDriverAnswer,
    hasParticipantAnswer: metrics.hasParticipantAnswer,
    hasHistoryAnswer: metrics.hasHistoryAnswer,
    hasRiskAnswer: metrics.hasRiskAnswer,
    hasMonitorAnswer: metrics.hasMonitorAnswer,
  };
  if (Object.values(requiredAnswers).some((value) => !value)) {
    addIssue(issues, {
      severity: "major",
      check: "required-questions",
      path,
      message: "Public page does not visibly answer every required visitor question.",
      details: requiredAnswers,
    });
  }

  if (
    !metrics.openGraph.title ||
    !metrics.openGraph.description ||
    normalizeUrl(metrics.openGraph.url) !== normalizeUrl(metrics.expectedCanonical) ||
    metrics.openGraph.type !== "website"
  ) {
    addIssue(issues, {
      severity: "major",
      check: "open-graph",
      path,
      message: "Open Graph metadata is incomplete or mismatched.",
      details: metrics.openGraph,
    });
  }

  if (!metrics.twitter.card || !metrics.twitter.title || !metrics.twitter.description) {
    addIssue(issues, {
      severity: "major",
      check: "twitter",
      path,
      message: "Twitter metadata is incomplete.",
      details: metrics.twitter,
    });
  }

  if (
    metrics.structuredData.scriptCount === 0 ||
    metrics.structuredData.parseableCount === 0 ||
    !metrics.structuredData.hasWebPage ||
    !metrics.structuredData.hasBreadcrumbList ||
    normalizeUrl(metrics.structuredData.webPageUrl) !== normalizeUrl(metrics.expectedCanonical) ||
    metrics.structuredData.breadcrumbItemCount < 3
  ) {
    addIssue(issues, {
      severity: "major",
      check: "structured-data",
      path,
      message: "Structured data is missing, invalid, or not aligned with the canonical URL.",
      details: metrics.structuredData,
    });
  }

  return issues;
}

function reviewDuplicates(duplicates: DuplicateReport, issues: QaIssue[]) {
  if (duplicates.duplicateTitles.length > 0) {
    addIssue(issues, {
      severity: "blocker",
      check: "duplicate-titles",
      message: "Duplicate SEO titles were found.",
      details: duplicates.duplicateTitles,
    });
  }

  if (duplicates.duplicateDescriptions.length > 0) {
    addIssue(issues, {
      severity: "major",
      check: "duplicate-descriptions",
      message: "Duplicate meta descriptions were found.",
      details: duplicates.duplicateDescriptions,
    });
  }
}

function reviewSitemap(sitemap: SitemapReport, issues: QaIssue[]) {
  if (sitemap.missingRoutes.length > 0 || sitemap.actualAssetCount !== sitemap.expectedCount) {
    addIssue(issues, {
      severity: "blocker",
      check: "sitemap",
      message: "Sitemap does not include the full public asset route set.",
      details: sitemap,
    });
  }

  if (sitemap.duplicateLocs.length > 0) {
    addIssue(issues, {
      severity: "blocker",
      check: "sitemap-duplicates",
      message: "Sitemap has duplicate loc entries.",
      details: sitemap.duplicateLocs,
    });
  }
}

function buildMarkdownReport(report: OutputReport) {
  const lines = [
    "# Asset SEO QA Report",
    "",
    `Started: ${report.startedAt}`,
    `Finished: ${report.finishedAt}`,
    `Base URL: ${report.baseUrl}`,
    "",
    "## Summary",
    "",
    `- Public pages checked: ${report.summary.publicPagesChecked}`,
    `- Sitemap public asset entries: ${report.sitemap.actualAssetCount}`,
    `- Duplicate SEO titles: ${report.duplicates.duplicateTitles.length}`,
    `- Duplicate meta descriptions: ${report.duplicates.duplicateDescriptions.length}`,
    `- Missing H1s: ${report.summary.missingH1}`,
    `- Missing meta descriptions: ${report.summary.missingMetaDescription}`,
    `- Missing public CTAs: ${report.summary.missingPublicCta}`,
    `- Missing canonical URLs: ${report.summary.missingCanonical}`,
    `- Missing structured data: ${report.summary.missingStructuredData}`,
    `- Blocker issues: ${report.summary.issues.blocker}`,
    `- Major issues: ${report.summary.issues.major}`,
    `- Minor issues: ${report.summary.issues.minor}`,
    "",
    "## Sitemap Inclusion",
    "",
    `- Sitemap URL: ${report.sitemap.url}`,
    `- Expected public routes: ${report.sitemap.expectedCount}`,
    `- Public asset routes found: ${report.sitemap.actualAssetCount}`,
    `- Missing public routes: ${report.sitemap.missingRoutes.length}`,
    `- Duplicate loc entries: ${report.sitemap.duplicateLocs.length}`,
    "",
    "## Duplicate Metadata",
    "",
    `- Duplicate titles: ${report.duplicates.duplicateTitles.length}`,
    `- Duplicate descriptions: ${report.duplicates.duplicateDescriptions.length}`,
    "",
    "## Page Results",
    "",
    "| Route | Title | Description | H1 | Canonical | CTA | JSON-LD | Issues |",
    "|---|---:|---:|---:|---:|---:|---:|---:|",
    ...report.pages.map((page) =>
      `| \`${page.path}\` | ${page.title ? "yes" : "no"} | ${page.description ? "yes" : "no"} | ${
        page.h1s.length === 1 ? "yes" : "no"
      } | ${normalizeUrl(page.canonical) === normalizeUrl(page.expectedCanonical) ? "yes" : "no"} | ${
        page.publicCtaCount > 0 ? "yes" : "no"
      } | ${page.structuredData.hasWebPage && page.structuredData.hasBreadcrumbList ? "yes" : "no"} | ${page.issues.length} |`
    ),
    "",
    "## Issue Table",
    "",
  ];

  if (report.issues.length === 0) {
    lines.push("No SEO QA issues were found.");
  } else {
    lines.push("| Severity | Check | Route | Message |");
    lines.push("|---|---|---|---|");
    for (const issue of report.issues) {
      lines.push(`| ${issue.severity} | ${issue.check} | ${issue.path ? `\`${issue.path}\`` : ""} | ${issue.message} |`);
    }
  }

  lines.push(
    "",
    "## Exit Gate",
    "",
    `- 71 public pages checked: ${report.summary.publicPagesChecked === REQUIRED_PUBLIC_ROUTE_COUNT ? "yes" : "no"}`,
    `- 0 duplicate SEO titles: ${report.duplicates.duplicateTitles.length === 0 ? "yes" : "no"}`,
    `- 0 missing H1s: ${report.summary.missingH1 === 0 ? "yes" : "no"}`,
    `- 0 missing meta descriptions: ${report.summary.missingMetaDescription === 0 ? "yes" : "no"}`,
    `- 0 missing public CTAs: ${report.summary.missingPublicCta === 0 ? "yes" : "no"}`,
    `- 0 blocker or major issues: ${
      report.summary.issues.blocker === 0 && report.summary.issues.major === 0 ? "yes" : "no"
    }`
  );

  return lines.join("\n");
}

async function writeReports(report: OutputReport) {
  await fs.writeFile(JSON_REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  await fs.writeFile(MARKDOWN_REPORT_PATH, `${buildMarkdownReport(report)}\n`);
}

async function run() {
  const baseUrl = normalizeBaseUrl(process.env.ASSET_QA_BASE_URL ?? "http://localhost:3000");
  const startedAt = new Date().toISOString();
  const inventory = await readInventory();
  await resetOutputDir();

  console.log("Asset SEO QA");
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Public routes: ${inventory.publicRoutes.length}`);

  const chromium = await loadPlaywrightChromium();
  const browser = await chromium.launch({ headless: process.env.ASSET_QA_HEADLESS !== "0" });
  const issues: QaIssue[] = [];
  const pages: PageSeoMetrics[] = [];

  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
    });

    try {
      const sitemap = await readSitemap(context, baseUrl, inventory.publicRoutes);
      reviewSitemap(sitemap, issues);
      const sitemapXml = await (await context.request.get(routeUrl(baseUrl, "/sitemap.xml"), { timeout: 45_000 })).text();
      const sitemapLocs = parseSitemapLocs(sitemapXml).locs;

      const page = await context.newPage();
      try {
        for (const route of inventory.publicRoutes) {
          const expectedCanonical =
            sitemapLocs.find((loc) => new URL(loc).pathname === route.path) ?? routeUrl(baseUrl, route.path);
          const metrics = await collectPageSeoMetrics(page, baseUrl, route, expectedCanonical);
          metrics.issues = reviewPage(metrics);
          pages.push(metrics);
          issues.push(...metrics.issues);
          console.log(`${metrics.issues.length === 0 ? "PASS" : "CHECK"} ${route.path} (${metrics.issues.length})`);
        }
      } finally {
        await page.close();
      }

      const duplicates: DuplicateReport = {
        duplicateTitles: groupDuplicates(pages, "title"),
        duplicateDescriptions: groupDuplicates(pages, "description"),
      };
      reviewDuplicates(duplicates, issues);

      const finishedAt = new Date().toISOString();
      const report: OutputReport = {
        startedAt,
        finishedAt,
        baseUrl,
        sitemap,
        duplicates,
        summary: {
          publicPagesChecked: pages.length,
          issues: {
            blocker: countIssues(issues, "blocker"),
            major: countIssues(issues, "major"),
            minor: countIssues(issues, "minor"),
          },
          missingH1: pages.filter((pageResult) => pageResult.h1s.length === 0).length,
          missingMetaDescription: pages.filter((pageResult) => !pageResult.description).length,
          missingPublicCta: pages.filter((pageResult) => pageResult.publicCtaCount === 0).length,
          missingCanonical: pages.filter((pageResult) => !pageResult.canonical).length,
          missingStructuredData: pages.filter(
            (pageResult) => !pageResult.structuredData.hasWebPage || !pageResult.structuredData.hasBreadcrumbList
          ).length,
        },
        pages,
        issues,
      };

      await writeReports(report);

      console.log(`\nReport written: ${path.relative(process.cwd(), JSON_REPORT_PATH)}`);
      console.log(`Markdown written: ${path.relative(process.cwd(), MARKDOWN_REPORT_PATH)}`);
      console.log(`Public pages checked: ${pages.length}`);
      console.log(`Sitemap public asset entries: ${sitemap.actualAssetCount}`);
      console.log(`Duplicate titles: ${duplicates.duplicateTitles.length}`);
      console.log(`Duplicate descriptions: ${duplicates.duplicateDescriptions.length}`);
      console.log(`Blocker: ${report.summary.issues.blocker}`);
      console.log(`Major: ${report.summary.issues.major}`);
      console.log(`Minor: ${report.summary.issues.minor}`);

      if (
        pages.length !== REQUIRED_PUBLIC_ROUTE_COUNT ||
        report.summary.issues.blocker > 0 ||
        report.summary.issues.major > 0 ||
        report.summary.issues.minor > 0
      ) {
        process.exitCode = 1;
      }
    } finally {
      await context.close();
    }
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
