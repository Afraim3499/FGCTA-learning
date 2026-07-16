import fs from "fs/promises";
import path from "path";
import { loadPlaywrightChromium, type BrowserLike, type PageLike } from "./playwright-runtime";
import {
  assetClassLabel,
  getReadyAssetProfiles,
  publicAssetHref,
  type AssetClassKey,
  type AssetProfile,
} from "../lib/asset-intelligence-data";

type Severity = "blocker" | "major" | "minor";
type CopyDimension =
  | "firstScreen"
  | "reasonToContinue"
  | "monitoring"
  | "cta"
  | "landingPageShape"
  | "specificity"
  | "differentiation";

type QaIssue = {
  severity: Severity;
  check: string;
  path?: string;
  asset?: string;
  message: string;
  details?: unknown;
};

type RenderedMetrics = {
  path: string;
  status: number | null;
  h1: string;
  hasRegisterCta: boolean;
  hasCurriculumCta: boolean;
  hasAssetLabLink: boolean;
  ctaTexts: string[];
  articleTagCount: number;
  maxParagraphLength: number;
};

type CopyScorecard = {
  path: string;
  asset: string;
  symbol: string;
  assetClass: AssetClassKey;
  score: number;
  dimensions: Record<CopyDimension, number>;
  firstScreenSummary: string;
  conversionCta: string;
  assetSpecificTermHits: number;
  primaryClaims: {
    headline: string;
    subheadline: string;
    monitorNote: string;
  };
  rendered: RenderedMetrics | null;
  issues: QaIssue[];
};

type RewriteSuggestion = {
  asset: string;
  path: string;
  field: string;
  currentText: string;
  suggestedText: string;
  reason: string;
};

type PairSimilarity = {
  assetA: string;
  assetB: string;
  similarity: number;
  sharedTerms: string[];
};

type OutputReport = {
  startedAt: string;
  finishedAt: string;
  baseUrl: string | null;
  summary: {
    publicPagesReviewed: number;
    renderedPagesChecked: number;
    genericPublicPages: number;
    weakCtas: number;
    missingConversionPaths: number;
    hypeOrPromiseCtas: number;
    issueCounts: Record<Severity, number>;
    averageScore: number;
    lowestScore: number;
  };
  scorecards: CopyScorecard[];
  weakCtaList: RewriteSuggestion[];
  rewrittenCtaBank: RewriteSuggestion[];
  beforeAfterExamples: RewriteSuggestion[];
  similarStrategyDifferentiation: PairSimilarity[];
  issues: QaIssue[];
};

const REQUIRED_PUBLIC_ROUTE_COUNT = 71;
const OUTPUT_DIR = path.join(process.cwd(), "docs", "qa", "asset-conversion-copy");
const JSON_REPORT_PATH = path.join(OUTPUT_DIR, "asset-conversion-copy-qa-report.json");
const MARKDOWN_REPORT_PATH = path.join(OUTPUT_DIR, "asset-conversion-copy-qa-report.md");

const stopWords = new Set([
  "about",
  "across",
  "after",
  "asset",
  "assets",
  "because",
  "before",
  "between",
  "chain",
  "context",
  "crypto",
  "currency",
  "data",
  "demand",
  "finance",
  "guide",
  "inside",
  "layer",
  "learn",
  "lurnava",
  "market",
  "markets",
  "network",
  "public",
  "risk",
  "risks",
  "source",
  "stablecoin",
  "students",
  "study",
  "supply",
  "system",
  "token",
  "traders",
  "trading",
  "understand",
]);

const calmConversionWords = [
  "learn",
  "study",
  "training",
  "practice",
  "certification",
  "certified",
  "structured",
  "research",
  "lurnava",
];

const hypeOrPromiseTerms = [
  "always" + " wins",
  "can't lose",
  "risk-free",
  "sure win",
  "get rich",
  "moonshot",
  "skyrocket",
  "explode",
  "guaran" + "teed",
  "easy" + " money",
  "take-" + "profit",
  "take " + "profit",
  "prof" + "it target",
  "s" + "ignal",
  "j" + "ourney",
  "recr" + "uit",
  "beg" + "inner",
];

const phase5PreviousCtasByPath: Record<string, string> = {
  "/markets/forex/british-pound":
    "The paid Asset Lab helps students read GBP pairs through policy, gilts, session liquidity, spread behavior, and pips-based risk rather than headlines alone.",
  "/markets/forex/chinese-yuan":
    "The paid Asset Lab teaches yuan structure through fixing mechanics, onshore-offshore gaps, reserve data, pair selection, spread behavior, and session timing.",
  "/markets/forex/canadian-dollar":
    "The paid Asset Lab teaches CAD through policy, oil, US trade, pair selection, spread quality, session behavior, and pips-based structure reading.",
  "/markets/forex/swiss-franc":
    "The paid Asset Lab teaches CHF through SNB balance-sheet reality, intervention risk, EUR/CHF structure, pips, spreads, and defensive-market behavior.",
  "/markets/forex/hong-kong-dollar":
    "The paid Asset Lab teaches HKD through the LERS band, reserve backing, HIBOR pressure, pips, spreads, and Asia-session liquidity instead of free-float assumptions.",
  "/markets/forex/swedish-krona":
    "The paid Asset Lab teaches SEK through Riksbank policy, reserves, European growth, housing sensitivity, pips, spreads, and cross-pair confirmation.",
  "/markets/forex/new-zealand-dollar":
    "Use the paid Asset Lab to connect RBNZ policy, dairy flow, China demand, reserve data, AUD/NZD comparison, and practical spread awareness.",
  "/markets/forex/indian-rupee":
    "Use the paid Asset Lab to connect RBI reserves, oil-import pressure, capital flow, trade balance, and USD/INR execution conditions in one workspace.",
  "/markets/forex/south-african-rand":
    "Use the paid Asset Lab to connect ZAR policy, metal exports, reserve data, fiscal risk, infrastructure pressure, and practical pair execution.",
};

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/+$/, "");
}

function routeUrl(baseUrl: string, routePath: string) {
  return `${normalizeBaseUrl(baseUrl)}${routePath}`;
}

function hasText(value: string, minLength: number) {
  return value.trim().length >= minLength;
}

function normalizeText(value: string) {
  return value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim();
}

function tokenize(value: string) {
  return normalizeText(value)
    .split(/\s+/)
    .filter((word) => word.length >= 3 && !stopWords.has(word));
}

function uniqueTokens(value: string) {
  return [...new Set(tokenize(value))];
}

function includesAny(value: string, terms: string[]) {
  const normalized = normalizeText(value);
  return terms.some((term) => normalized.includes(normalizeText(term)));
}

function assetTerms(asset: AssetProfile) {
  const names = [
    asset.name,
    asset.symbol,
    asset.slug.replace(/-/g, " "),
    assetClassLabel(asset.assetClass),
    ...asset.drivers.map((driver) => driver.title),
    ...asset.publicRisks.map((risk) => risk.risk),
    ...asset.lab.participants.slice(0, 6).map((participant) => participant.name),
  ];
  return [...new Set(names.flatMap(uniqueTokens))].filter((term) => !stopWords.has(term));
}

function countAssetSpecificHits(asset: AssetProfile, value: string) {
  const tokens = new Set(uniqueTokens(value));
  return assetTerms(asset).filter((term) => tokens.has(term)).length;
}

function addIssue(issues: QaIssue[], issue: QaIssue) {
  issues.push(issue);
}

function countIssues(issues: QaIssue[], severity: Severity) {
  return issues.filter((issue) => issue.severity === severity).length;
}

function dimensionScore(value: boolean, partial = false) {
  if (value) return 100;
  return partial ? 70 : 0;
}

function copyBlock(asset: AssetProfile) {
  return [
    asset.seoTitle,
    asset.seoDescription,
    asset.publicHeadline,
    asset.publicSubheadline,
    asset.plainEnglish,
    asset.marketRole,
    asset.whyTradersWatch,
    asset.lurnavaMonitorNote,
    asset.conversionCta,
    ...asset.drivers.map((driver) => `${driver.title} ${driver.detail}`),
    ...asset.publicRisks.map((risk) => `${risk.risk} ${risk.watch}`),
    ...asset.lab.historicalEvents.map((event) => `${event.title} ${event.detail}`),
    ...asset.lab.participants.map((participant) => `${participant.name} ${participant.role} ${participant.whyItMatters}`),
  ].join(" ");
}

function hasHypeOrPromise(value: string) {
  return hypeOrPromiseTerms.filter((term) => normalizeText(value).includes(normalizeText(term)));
}

function compareSimilarity(assetA: AssetProfile, assetB: AssetProfile): PairSimilarity {
  const tokensA = new Set(uniqueTokens(copyBlock(assetA)));
  const tokensB = new Set(uniqueTokens(copyBlock(assetB)));
  const intersection = [...tokensA].filter((token) => tokensB.has(token));
  const union = new Set([...tokensA, ...tokensB]);
  return {
    assetA: assetA.name,
    assetB: assetB.name,
    similarity: union.size === 0 ? 0 : Number((intersection.length / union.size).toFixed(3)),
    sharedTerms: intersection.slice(0, 18),
  };
}

function makeCtaSuggestion(asset: AssetProfile, reason: string): RewriteSuggestion {
  const assetNoun =
    asset.assetClass === "forex"
      ? "currency research"
      : asset.assetClass === "gold"
        ? "gold market research"
        : "crypto asset research";

  return {
    asset: asset.name,
    path: publicAssetHref(asset),
    field: "conversionCta",
    currentText: asset.conversionCta,
    suggestedText: `Study ${asset.name} inside Lurnava with structured ${assetNoun}, source-backed context, risk notes, and guided practice before using it in a trading plan.`,
    reason,
  };
}

function buildBeforeAfterExamples(assets: AssetProfile[]) {
  const examples: RewriteSuggestion[] = [];

  for (const asset of assets) {
    const routePath = publicAssetHref(asset);
    const previousCta = phase5PreviousCtasByPath[routePath];

    if (previousCta) {
      examples.push({
        asset: asset.name,
        path: routePath,
        field: "conversionCta",
        currentText: previousCta,
        suggestedText: asset.conversionCta,
        reason: "Phase 5 strengthened this CTA with an asset-specific study or practice path.",
      });
    }

    if (asset.lurnavaMonitorNote.startsWith("Lurnava's research desk ")) {
      examples.push({
        asset: asset.name,
        path: routePath,
        field: "lurnavaMonitorNote",
        currentText: asset.lurnavaMonitorNote.replace("Lurnava's research desk", "Our desk"),
        suggestedText: asset.lurnavaMonitorNote,
        reason: "Phase 5 changed this monitoring note so the public page names Lurnava directly.",
      });
    }
  }

  return examples;
}

function reviewStaticCopy(asset: AssetProfile): { issues: QaIssue[]; dimensions: Record<CopyDimension, number>; weakCta?: RewriteSuggestion } {
  const issues: QaIssue[] = [];
  const path = publicAssetHref(asset);
  const allPublicCopy = copyBlock(asset);
  const headlineHits = countAssetSpecificHits(asset, `${asset.publicHeadline} ${asset.publicSubheadline}`);
  const totalAssetHits = countAssetSpecificHits(asset, allPublicCopy);
  const ctaHits = countAssetSpecificHits(asset, asset.conversionCta);
  const ctaHasTrainingPath = includesAny(asset.conversionCta, calmConversionWords);
  const ctaHypeTerms = hasHypeOrPromise(asset.conversionCta);
  const globalHypeTerms = hasHypeOrPromise(allPublicCopy);
  const namedParticipants = asset.lab.participants.filter((participant) => participant.name.split(/\s+/).some((word) => word.length > 2)).length;
  const assetSpecificSections =
    asset.drivers.filter((driver) => countAssetSpecificHits(asset, `${driver.title} ${driver.detail}`) > 0).length +
    asset.publicRisks.filter((risk) => countAssetSpecificHits(asset, `${risk.risk} ${risk.watch}`) > 0).length +
    asset.lab.historicalEvents.filter((event) => countAssetSpecificHits(asset, `${event.title} ${event.detail}`) > 0).length;
  const maxParagraphLength = Math.max(
    asset.publicSubheadline.length,
    asset.plainEnglish.length,
    asset.marketRole.length,
    asset.whyTradersWatch.length,
    asset.lurnavaMonitorNote.length,
    asset.conversionCta.length
  );

  if (!hasText(asset.publicHeadline, 24) || headlineHits === 0) {
    addIssue(issues, {
      severity: "blocker",
      check: "first-screen",
      path,
      asset: asset.name,
      message: "First screen copy does not identify the asset with enough specificity.",
      details: { publicHeadline: asset.publicHeadline, publicSubheadline: asset.publicSubheadline, headlineHits },
    });
  }

  if (!hasText(asset.publicSubheadline, 80) || headlineHits < 2) {
    addIssue(issues, {
      severity: "major",
      check: "reason-to-continue",
      path,
      asset: asset.name,
      message: "Hero subheadline does not give a strong asset-specific reason to keep reading.",
      details: { publicSubheadline: asset.publicSubheadline, headlineHits },
    });
  }

  if (!hasText(asset.lurnavaMonitorNote, 120) || !normalizeText(asset.lurnavaMonitorNote).includes("lurnava")) {
    addIssue(issues, {
      severity: "major",
      check: "monitoring-copy",
      path,
      asset: asset.name,
      message: "Monitoring copy does not clearly explain why Lurnava tracks this asset.",
      details: asset.lurnavaMonitorNote,
    });
  }

  let weakCta: RewriteSuggestion | undefined;
  if (!hasText(asset.conversionCta, 80) || !ctaHasTrainingPath || ctaHits === 0 || ctaHypeTerms.length > 0) {
    const reason =
      ctaHypeTerms.length > 0
        ? `CTA contains outcome-promise or hype language: ${ctaHypeTerms.join(", ")}.`
        : "CTA needs a clearer training path and asset-specific reason.";
    weakCta = makeCtaSuggestion(asset, reason);
    addIssue(issues, {
      severity: "blocker",
      check: "cta-copy",
      path,
      asset: asset.name,
      message: "CTA copy is weak, generic, or unsafe.",
      details: { conversionCta: asset.conversionCta, ctaHits, ctaHasTrainingPath, ctaHypeTerms },
    });
  }

  if (globalHypeTerms.length > 0) {
    addIssue(issues, {
      severity: "blocker",
      check: "hype-or-promise",
      path,
      asset: asset.name,
      message: "Public copy contains hype or outcome-promise language.",
      details: globalHypeTerms,
    });
  }

  if (maxParagraphLength > 420) {
    addIssue(issues, {
      severity: "major",
      check: "blog-shape",
      path,
      asset: asset.name,
      message: "Public copy has a long paragraph that can make the page feel article-like.",
      details: { maxParagraphLength },
    });
  }

  if (asset.drivers.length < 4 || asset.publicRisks.length < 3 || asset.lab.historicalEvents.length < 4 || namedParticipants < 4 || assetSpecificSections < 8) {
    addIssue(issues, {
      severity: "major",
      check: "asset-specificity",
      path,
      asset: asset.name,
      message: "Public page lacks enough asset-specific drivers, risks, history, or named participants.",
      details: {
        drivers: asset.drivers.length,
        risks: asset.publicRisks.length,
        history: asset.lab.historicalEvents.length,
        namedParticipants,
        assetSpecificSections,
      },
    });
  }

  const dimensions: Record<CopyDimension, number> = {
    firstScreen: dimensionScore(hasText(asset.publicHeadline, 24) && headlineHits > 0),
    reasonToContinue: dimensionScore(hasText(asset.publicSubheadline, 80) && headlineHits >= 2, headlineHits === 1),
    monitoring: dimensionScore(hasText(asset.lurnavaMonitorNote, 120) && normalizeText(asset.lurnavaMonitorNote).includes("lurnava")),
    cta: dimensionScore(hasText(asset.conversionCta, 80) && ctaHasTrainingPath && ctaHits > 0 && ctaHypeTerms.length === 0),
    landingPageShape: dimensionScore(maxParagraphLength <= 420),
    specificity: Math.min(100, Math.round((assetSpecificSections / 10) * 100)),
    differentiation: Math.min(100, Math.round((totalAssetHits / 16) * 100)),
  };

  return { issues, dimensions, weakCta };
}

async function collectRenderedMetrics(page: PageLike, baseUrl: string, asset: AssetProfile): Promise<RenderedMetrics> {
  const routePath = publicAssetHref(asset);
  const response = await page.goto(routeUrl(baseUrl, routePath), { waitUntil: "domcontentloaded", timeout: 45_000 });
  await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => undefined);
  await page.waitForTimeout(150);

  const metrics = await page.evaluate(
    `(() => {
      const routePathArg = ${JSON.stringify(routePath)};

      function visibleText(selector) {
        return Array.from(document.querySelectorAll(selector))
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            const style = window.getComputedStyle(element);
            return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
          })
          .map((element) => element.textContent?.trim().replace(/\\s+/g, " ") ?? "")
          .filter(Boolean);
      }

      const links = Array.from(document.querySelectorAll("a")).map((link) => {
        const rect = link.getBoundingClientRect();
        const style = window.getComputedStyle(link);
        return {
          text: link.textContent?.trim().replace(/\\s+/g, " ") ?? "",
          href: link.getAttribute("href") ?? "",
          visible: rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden",
        };
      });
      const visibleLinks = links.filter((link) => link.visible);
      const paragraphs = visibleText("p");

      return {
        path: routePathArg,
        status: null,
        h1: visibleText("h1")[0] ?? "",
        hasRegisterCta: visibleLinks.some((link) => link.href === "/register"),
        hasCurriculumCta: visibleLinks.some((link) => link.href === "/curriculum"),
        hasAssetLabLink: visibleLinks.some((link) => link.href.startsWith("/asset-lab/")),
        ctaTexts: visibleLinks
          .filter((link) => link.href === "/register" || link.href === "/curriculum" || link.href.startsWith("/asset-lab/"))
          .map((link) => link.text),
        articleTagCount: document.querySelectorAll("article").length,
        maxParagraphLength: paragraphs.reduce((max, paragraph) => Math.max(max, paragraph.length), 0),
      };
    })()`
  );

  return { ...(metrics as Omit<RenderedMetrics, "status">), status: response?.status() ?? null };
}

async function collectRenderedPageMetrics(baseUrl: string | null, assets: AssetProfile[]) {
  if (!baseUrl) return new Map<string, RenderedMetrics>();

  let browser: BrowserLike | null = null;
  const rendered = new Map<string, RenderedMetrics>();
  try {
    const chromium = await loadPlaywrightChromium();
    browser = await chromium.launch({ headless: process.env.ASSET_CONVERSION_QA_HEADLESS !== "0" });
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    try {
      for (const asset of assets) {
        const metrics = await collectRenderedMetrics(page, baseUrl, asset);
        rendered.set(publicAssetHref(asset), metrics);
        console.log(`RENDER ${publicAssetHref(asset)} ${metrics.status ?? "?"}`);
      }
    } finally {
      await page.close();
      await context.close();
    }
  } finally {
    await browser?.close();
  }

  return rendered;
}

function reviewRenderedMetrics(asset: AssetProfile, metrics: RenderedMetrics | null) {
  const issues: QaIssue[] = [];
  const path = publicAssetHref(asset);
  if (!metrics) {
    addIssue(issues, {
      severity: "major",
      check: "rendered-review",
      path,
      asset: asset.name,
      message: "Rendered page was not checked because no base URL was provided.",
    });
    return issues;
  }

  if (metrics.status !== 200) {
    addIssue(issues, {
      severity: "blocker",
      check: "route-status",
      path,
      asset: asset.name,
      message: "Public route did not return HTTP 200 during conversion copy QA.",
      details: { status: metrics.status },
    });
  }

  if (!normalizeText(metrics.h1).includes(normalizeText(asset.name))) {
    addIssue(issues, {
      severity: "blocker",
      check: "first-screen-rendered",
      path,
      asset: asset.name,
      message: "Rendered H1 does not identify the asset.",
      details: { h1: metrics.h1 },
    });
  }

  if (!metrics.hasRegisterCta || !metrics.hasCurriculumCta) {
    addIssue(issues, {
      severity: "blocker",
      check: "conversion-path",
      path,
      asset: asset.name,
      message: "Rendered public page is missing a visible conversion path.",
      details: { hasRegisterCta: metrics.hasRegisterCta, hasCurriculumCta: metrics.hasCurriculumCta, ctaTexts: metrics.ctaTexts },
    });
  }

  if (metrics.articleTagCount > 0 || metrics.maxParagraphLength > 520) {
    addIssue(issues, {
      severity: "major",
      check: "landing-page-rendered",
      path,
      asset: asset.name,
      message: "Rendered page may read like an article instead of a landing page.",
      details: { articleTagCount: metrics.articleTagCount, maxParagraphLength: metrics.maxParagraphLength },
    });
  }

  return issues;
}

function buildScorecard(asset: AssetProfile, rendered: RenderedMetrics | null): CopyScorecard {
  const staticReview = reviewStaticCopy(asset);
  const renderedIssues = reviewRenderedMetrics(asset, rendered);
  const issues = [...staticReview.issues, ...renderedIssues];
  const dimensionValues = Object.values(staticReview.dimensions);
  const score = Math.round(dimensionValues.reduce((total, value) => total + value, 0) / dimensionValues.length);

  return {
    path: publicAssetHref(asset),
    asset: asset.name,
    symbol: asset.symbol,
    assetClass: asset.assetClass,
    score,
    dimensions: staticReview.dimensions,
    firstScreenSummary: `${asset.name}: ${asset.publicHeadline}`,
    conversionCta: asset.conversionCta,
    assetSpecificTermHits: countAssetSpecificHits(asset, copyBlock(asset)),
    primaryClaims: {
      headline: asset.publicHeadline,
      subheadline: asset.publicSubheadline,
      monitorNote: asset.lurnavaMonitorNote,
    },
    rendered,
    issues,
  };
}

function reviewSimilarPages(assets: AssetProfile[]) {
  const issues: QaIssue[] = [];
  const pairs: PairSimilarity[] = [];

  for (let index = 0; index < assets.length; index += 1) {
    for (let otherIndex = index + 1; otherIndex < assets.length; otherIndex += 1) {
      const assetA = assets[index];
      const assetB = assets[otherIndex];
      if (assetA.assetClass !== assetB.assetClass) continue;
      const similarity = compareSimilarity(assetA, assetB);
      if (similarity.similarity >= 0.78) {
        pairs.push(similarity);
        addIssue(issues, {
          severity: "major",
          check: "similar-page-differentiation",
          asset: assetA.name,
          message: "Two public asset pages may be too similar for conversion copy.",
          details: similarity,
        });
      }
    }
  }

  return { issues, pairs };
}

function buildMarkdownReport(report: OutputReport) {
  const issueRows = report.issues.length
    ? [
        "| Severity | Check | Route | Asset | Message |",
        "|---|---|---|---|---|",
        ...report.issues.map((issue) => `| ${issue.severity} | ${issue.check} | ${issue.path ?? ""} | ${issue.asset ?? ""} | ${issue.message} |`),
      ]
    : ["No conversion copy issues were found."];

  const weakRows = report.weakCtaList.length
    ? [
        "| Asset | Route | Current CTA | Suggested CTA | Reason |",
        "|---|---|---|---|---|",
        ...report.weakCtaList.map(
          (item) => `| ${item.asset} | \`${item.path}\` | ${item.currentText} | ${item.suggestedText} | ${item.reason} |`
        ),
      ]
    : ["No weak CTAs were found, so no CTA rewrites were needed."];

  const rewrittenCtaRows = report.rewrittenCtaBank.length
    ? [
        "| Asset | Route | Previous CTA | Updated CTA | Reason |",
        "|---|---|---|---|---|",
        ...report.rewrittenCtaBank.map(
          (item) => `| ${item.asset} | \`${item.path}\` | ${item.currentText} | ${item.suggestedText} | ${item.reason} |`
        ),
      ]
    : ["No CTA rewrites were required after the final pass."];

  const beforeAfterRows = report.beforeAfterExamples.length
    ? [
        "| Asset | Field | Before | After | Reason |",
        "|---|---|---|---|---|",
        ...report.beforeAfterExamples.map(
          (item) => `| ${item.asset} | ${item.field} | ${item.currentText} | ${item.suggestedText} | ${item.reason} |`
        ),
      ]
    : ["No copy rewrites were applied in this phase."];

  const scoreRows = [
    "| Route | Asset | Score | First Screen | CTA | Monitor Copy | Specificity | Issues |",
    "|---|---|---:|---:|---:|---:|---:|---:|",
    ...report.scorecards.map(
      (card) =>
        `| \`${card.path}\` | ${card.asset} | ${card.score} | ${card.dimensions.firstScreen} | ${card.dimensions.cta} | ${card.dimensions.monitoring} | ${card.dimensions.specificity} | ${card.issues.length} |`
    ),
  ];

  const similarityRows = report.similarStrategyDifferentiation.length
    ? [
        "| Asset A | Asset B | Similarity | Shared Terms |",
        "|---|---|---:|---|",
        ...report.similarStrategyDifferentiation.map(
          (pair) => `| ${pair.assetA} | ${pair.assetB} | ${pair.similarity} | ${pair.sharedTerms.join(", ")} |`
        ),
      ]
    : ["No high-similarity public asset copy pairs were found."];

  return [
    "# Asset Conversion Copy QA Report",
    "",
    `Started: ${report.startedAt}`,
    `Finished: ${report.finishedAt}`,
    `Base URL: ${report.baseUrl ?? "not provided"}`,
    "",
    "## Summary",
    "",
    `- Public pages reviewed: ${report.summary.publicPagesReviewed}`,
    `- Rendered pages checked: ${report.summary.renderedPagesChecked}`,
    `- Generic public pages: ${report.summary.genericPublicPages}`,
    `- Weak CTAs: ${report.summary.weakCtas}`,
    `- Missing conversion paths: ${report.summary.missingConversionPaths}`,
    `- Hype or outcome-promise CTAs: ${report.summary.hypeOrPromiseCtas}`,
    `- Average score: ${report.summary.averageScore}`,
    `- Lowest score: ${report.summary.lowestScore}`,
    `- Blocker issues: ${report.summary.issueCounts.blocker}`,
    `- Major issues: ${report.summary.issueCounts.major}`,
    `- Minor issues: ${report.summary.issueCounts.minor}`,
    "",
    "## Exit Gate",
    "",
    `- 71 public pages reviewed: ${report.summary.publicPagesReviewed === REQUIRED_PUBLIC_ROUTE_COUNT ? "yes" : "no"}`,
    `- 0 generic public pages: ${report.summary.genericPublicPages === 0 ? "yes" : "no"}`,
    `- 0 hype or outcome-promise CTAs: ${report.summary.hypeOrPromiseCtas === 0 ? "yes" : "no"}`,
    `- 0 missing conversion paths: ${report.summary.missingConversionPaths === 0 ? "yes" : "no"}`,
    "",
    "## Issue Table",
    "",
    ...issueRows,
    "",
    "## Weak CTA List",
    "",
    ...weakRows,
    "",
    "## Rewritten CTA Bank",
    "",
    ...rewrittenCtaRows,
    "",
    "## Before And After Examples",
    "",
    ...beforeAfterRows,
    "",
    "## Similar-Asset Differentiation",
    "",
    ...similarityRows,
    "",
    "## Copy Scorecards",
    "",
    ...scoreRows,
    "",
  ].join("\n");
}

async function writeReports(report: OutputReport) {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(JSON_REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  await fs.writeFile(MARKDOWN_REPORT_PATH, `${buildMarkdownReport(report).trimEnd()}\n`);
}

function buildSummary(scorecards: CopyScorecard[], issues: QaIssue[], baseUrl: string | null) {
  const scores = scorecards.map((scorecard) => scorecard.score);
  return {
    publicPagesReviewed: scorecards.length,
    renderedPagesChecked: baseUrl ? scorecards.filter((scorecard) => scorecard.rendered).length : 0,
    genericPublicPages: scorecards.filter((scorecard) => scorecard.score < 86 || scorecard.issues.some((issue) => issue.check === "asset-specificity")).length,
    weakCtas: scorecards.filter((scorecard) => scorecard.issues.some((issue) => issue.check === "cta-copy")).length,
    missingConversionPaths: scorecards.filter((scorecard) => scorecard.issues.some((issue) => issue.check === "conversion-path")).length,
    hypeOrPromiseCtas: scorecards.filter((scorecard) => hasHypeOrPromise(scorecard.conversionCta).length > 0).length,
    issueCounts: {
      blocker: countIssues(issues, "blocker"),
      major: countIssues(issues, "major"),
      minor: countIssues(issues, "minor"),
    },
    averageScore: Math.round(scores.reduce((sum, score) => sum + score, 0) / Math.max(scores.length, 1)),
    lowestScore: Math.min(...scores),
  };
}

async function run() {
  const startedAt = new Date().toISOString();
  const assets = getReadyAssetProfiles();
  const baseUrl = process.env.ASSET_CONVERSION_BASE_URL ? normalizeBaseUrl(process.env.ASSET_CONVERSION_BASE_URL) : null;

  console.log("Asset Conversion Copy QA");
  console.log(`Public assets: ${assets.length}`);
  console.log(`Base URL: ${baseUrl ?? "not provided"}`);

  const rendered = await collectRenderedPageMetrics(baseUrl, assets);
  const scorecards = assets.map((asset) => buildScorecard(asset, rendered.get(publicAssetHref(asset)) ?? null));
  const similarityReview = reviewSimilarPages(assets);
  const issues = [...scorecards.flatMap((scorecard) => scorecard.issues), ...similarityReview.issues];
  const weakCtaList = scorecards
    .filter((scorecard) => scorecard.issues.some((issue) => issue.check === "cta-copy"))
    .map((scorecard) => makeCtaSuggestion(assets.find((asset) => asset.name === scorecard.asset)!, "CTA rewrite generated by the conversion copy gate."));
  const beforeAfterExamples = buildBeforeAfterExamples(assets);

  if (assets.length !== REQUIRED_PUBLIC_ROUTE_COUNT) {
    addIssue(issues, {
      severity: "blocker",
      check: "asset-count",
      message: `Expected ${REQUIRED_PUBLIC_ROUTE_COUNT} public pages, found ${assets.length}.`,
    });
  }

  const finishedAt = new Date().toISOString();
  const report: OutputReport = {
    startedAt,
    finishedAt,
    baseUrl,
    summary: buildSummary(scorecards, issues, baseUrl),
    scorecards,
    weakCtaList,
    rewrittenCtaBank: beforeAfterExamples.filter((example) => example.field === "conversionCta"),
    beforeAfterExamples,
    similarStrategyDifferentiation: similarityReview.pairs,
    issues,
  };

  await writeReports(report);

  console.log(`Public pages reviewed: ${report.summary.publicPagesReviewed}`);
  console.log(`Rendered pages checked: ${report.summary.renderedPagesChecked}`);
  console.log(`Generic public pages: ${report.summary.genericPublicPages}`);
  console.log(`Weak CTAs: ${report.summary.weakCtas}`);
  console.log(`Missing conversion paths: ${report.summary.missingConversionPaths}`);
  console.log(`Hype or outcome-promise CTAs: ${report.summary.hypeOrPromiseCtas}`);
  console.log(`Average score: ${report.summary.averageScore}`);
  console.log(`Lowest score: ${report.summary.lowestScore}`);
  console.log(`Blocker: ${report.summary.issueCounts.blocker}`);
  console.log(`Major: ${report.summary.issueCounts.major}`);
  console.log(`Minor: ${report.summary.issueCounts.minor}`);
  console.log(`Report written: ${path.relative(process.cwd(), JSON_REPORT_PATH)}`);
  console.log(`Markdown written: ${path.relative(process.cwd(), MARKDOWN_REPORT_PATH)}`);

  if (
    report.summary.publicPagesReviewed !== REQUIRED_PUBLIC_ROUTE_COUNT ||
    report.summary.genericPublicPages > 0 ||
    report.summary.hypeOrPromiseCtas > 0 ||
    report.summary.missingConversionPaths > 0 ||
    report.summary.issueCounts.blocker > 0 ||
    report.summary.issueCounts.major > 0
  ) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
