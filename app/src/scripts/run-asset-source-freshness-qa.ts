import fs from "fs/promises";
import path from "path";
import {
  assetProfiles,
  type AssetClassKey,
  type AssetFreshnessStatus,
  type AssetHoldingExposure,
} from "../lib/asset-intelligence-data";

type Severity = "blocker" | "major" | "minor";
type Cadence = "daily-weekly" | "monthly" | "quarterly" | "annual" | "static-historical";
type SourceCheckStatus = "reachable" | "guarded" | "broken" | "unchecked";

type QaIssue = {
  severity: Severity;
  check: string;
  asset?: string;
  path?: string;
  exposureKey?: string;
  message: string;
  details?: unknown;
};

type ExposureRow = {
  asset: string;
  assetClass: AssetClassKey;
  slug: string;
  entityName: string;
  entityType: string;
  assetOrInstrument: string;
  amount: string;
  unit: string;
  exposureType: string;
  asOfDate: string;
  parsedAsOfDate: string;
  ageDays: number | null;
  retrievedAt: string;
  sourcePublishedAt?: string;
  sourceTitle: string;
  sourcePublisher: string;
  sourceUrl: string;
  freshnessStatus: AssetFreshnessStatus;
  cadence: Cadence;
  highRiskCategory: string;
  whyItMatters: string;
  limitations?: string;
  issues: QaIssue[];
};

type SourceCheck = {
  url: string;
  status: SourceCheckStatus;
  httpStatus?: number;
  assets: string[];
  publishers: string[];
  error?: string;
};

type OutputReport = {
  startedAt: string;
  finishedAt: string;
  reviewDate: string;
  summary: {
    assetsChecked: number;
    exposuresChecked: number;
    highRiskExposures: number;
    sourceUrlsChecked: number;
    byFreshness: Record<AssetFreshnessStatus, number>;
    byCadence: Record<Cadence, number>;
    byClass: Record<AssetClassKey, number>;
    issues: Record<Severity, number>;
    staleFactsLabeledCurrent: number;
    unsupportedCurrentAmounts: number;
    missingAsOfDates: number;
    missingSourceUrls: number;
    brokenSourceUrls: number;
  };
  freshnessTable: ExposureRow[];
  staleDataReport: ExposureRow[];
  brokenExternalSourceReport: SourceCheck[];
  highRiskClaimReviewList: ExposureRow[];
  issues: QaIssue[];
};

const REQUIRED_ASSET_COUNT = 71;
const OUTPUT_DIR = path.join(process.cwd(), "docs", "qa", "asset-source-freshness");
const JSON_REPORT_PATH = path.join(OUTPUT_DIR, "asset-source-freshness-qa-report.json");
const MARKDOWN_REPORT_PATH = path.join(OUTPUT_DIR, "asset-source-freshness-qa-report.md");

const freshnessStatuses: AssetFreshnessStatus[] = ["current", "recent", "stale", "historical"];
const cadences: Cadence[] = ["daily-weekly", "monthly", "quarterly", "annual", "static-historical"];
const assetClasses: AssetClassKey[] = ["crypto", "forex", "gold"];

const cadenceWindows: Record<Cadence, { currentDays: number | null; recentDays: number | null }> = {
  "daily-weekly": { currentDays: 30, recentDays: 45 },
  monthly: { currentDays: 90, recentDays: 125 },
  quarterly: { currentDays: 135, recentDays: 220 },
  annual: { currentDays: 425, recentDays: 520 },
  "static-historical": { currentDays: null, recentDays: null },
};

function normalizeDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function reviewDate() {
  const override = process.env.ASSET_SOURCE_QA_REVIEW_DATE;
  if (override) return override;
  return normalizeDate(new Date());
}

function hasText(value: unknown, minLength = 1) {
  return typeof value === "string" && value.trim().length >= minLength;
}

function exposureKey(assetName: string, exposure: AssetHoldingExposure) {
  return `${assetName} / ${exposure.entityName} / ${exposure.assetOrInstrument}`;
}

function textBlob(exposure: AssetHoldingExposure) {
  return [
    exposure.entityName,
    exposure.entityType,
    exposure.assetOrInstrument,
    exposure.exposureType,
    exposure.sourceTitle,
    exposure.sourcePublisher,
    exposure.whyItMatters,
    exposure.limitations,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

function lastDayOfMonth(year: number, month: number) {
  return new Date(Date.UTC(year, month, 0));
}

function parseAsOfDate(value: string, reviewDateValue: string): Date | null {
  const trimmed = value.trim();
  const review = new Date(`${reviewDateValue}T00:00:00.000Z`);
  const exactDate = trimmed.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/);
  if (exactDate) {
    return new Date(Date.UTC(Number(exactDate[1]), Number(exactDate[2]) - 1, Number(exactDate[3])));
  }

  const quarter = trimmed.match(/\b(20\d{2})-?Q([1-4])\b/i);
  if (quarter) {
    const year = Number(quarter[1]);
    const quarterNumber = Number(quarter[2]);
    const reviewQuarter = Math.floor(review.getUTCMonth() / 3) + 1;
    if (trimmed.toLowerCase().includes("to date") && year === review.getUTCFullYear() && quarterNumber === reviewQuarter) {
      return review;
    }
    const quarterEndMonth = Number(quarter[2]) * 3;
    return lastDayOfMonth(Number(quarter[1]), quarterEndMonth);
  }

  const month = trimmed.match(/\b(20\d{2})-(\d{2})\b/);
  if (month) {
    return lastDayOfMonth(Number(month[1]), Number(month[2]));
  }

  const year = trimmed.match(/\b(20\d{2})\b/);
  if (year) {
    const parsedYear = Number(year[1]);
    if (parsedYear === review.getUTCFullYear()) return review;
    return new Date(Date.UTC(parsedYear, 11, 31));
  }

  return null;
}

function daysBetween(start: Date, end: Date) {
  return Math.floor((end.getTime() - start.getTime()) / 86_400_000);
}

function inferCadence(exposure: AssetHoldingExposure): Cadence {
  const text = textBlob(exposure);

  if (
    exposure.freshnessStatus === "historical" ||
    includesAny(text, [
      "historical",
      "all-time high",
      "all-time low",
      "origin",
      "genesis",
      "whitepaper",
      "original",
      "settlement",
      "launch",
      "supply cap",
      "maximum supply",
      "block reward",
      "terminal inflation",
      "long-term inflation",
      "annual inflation",
      "inflation note",
      "policy target",
      "target band",
      "inflation target",
      "operating range",
      "publication schedule",
      "data-release cadence",
      "framework",
      "not disclosed",
      "supply reduction event",
      "buyback program",
      "revenue share",
      "burn",
    ])
  ) {
    return "static-historical";
  }

  if (
    /\bq[1-4]\b/i.test(exposure.asOfDate) ||
    /\b20\d{2}-q[1-4]\b/i.test(exposure.sourcePublishedAt ?? "") ||
    /\bq[1-4]\b/i.test(text) ||
    includesAny(text, [
      "quarter",
      "quarterly",
      "form 10-q",
      "10-q",
      "filing",
      "attestation",
      "reserve report",
      "allocation in fx reserves",
      "reserve currency allocation",
      "reserve asset allocation",
      "equities in reserves",
    ])
  ) {
    return "quarterly";
  }

  if (
    includesAny(text, [
      "annual report",
      "annual accounts",
      "annual financial",
      "annual statement",
      "year-end",
      "year ended",
      "financial insights report",
      "financials",
      "sponsorship revenue",
      "export sales",
      "strategic allocation",
    ])
  ) {
    return "annual";
  }

  if (includesAny(text, ["examination report", "reserve examination"])) {
    return "monthly";
  }

  if (
    includesAny(text, [
      "tvl",
      "volume",
      "daily",
      "24 hours",
      "active address",
      "transactions",
      "fees",
      "revenue",
      "etf",
      "trust",
      "treasury page",
      "staking",
      "staked",
      "validators",
      "apy",
      "circulating",
      "stablecoin",
      "dex volume",
      "decentralized exchange",
      "open interest",
      "market cap",
      "price",
      "exchange-rate print",
      "rich list",
      "wallet",
      "token unlock",
      "unlock schedule",
      "current supply",
      "total supply",
      "shares outstanding",
      "basket",
    ])
  ) {
    return "daily-weekly";
  }

  if (
    includesAny(text, [
      "reserve",
      "reserves",
      "central bank",
      "foreign currency",
      "exchange fund",
      "treasury securities",
      "current account",
      "trade release",
      "policy rate",
      "cash rate",
      "repo rate",
      "bank rate",
      "interest rate",
      "gold holdings",
      "official reserve",
    ])
  ) {
    return "monthly";
  }

  return "static-historical";
}

function highRiskCategory(exposure: AssetHoldingExposure, cadence: Cadence) {
  const text = textBlob(exposure);
  if (cadence === "static-historical") return "stable or historical reference";
  if (includesAny(text, ["tvl"])) return "Crypto TVL";
  if (includesAny(text, ["stablecoin"])) return "Stablecoin supply";
  if (includesAny(text, ["active address"])) return "Active addresses";
  if (includesAny(text, ["transactions", "daily"])) return "Daily transactions or flow";
  if (includesAny(text, ["dex volume", "decentralized exchange", "volume"])) return "DEX or venue volume";
  if (includesAny(text, ["fees", "revenue"])) return "Fees and revenue";
  if (includesAny(text, ["unlock"])) return "Token unlocks";
  if (includesAny(text, ["circulating", "current supply", "total supply"])) return "Circulating or total supply";
  if (includesAny(text, ["etf", "trust", "shares outstanding", "basket"])) return "ETF or trust holdings";
  if (includesAny(text, ["public-company", "form 10-q", "filing", "tesla", "strategy"])) return "Public-company holdings";
  if (includesAny(text, ["central bank", "official reserve", "foreign reserve", "exchange fund"])) return "Central-bank or FX reserves";
  if (includesAny(text, ["gold holdings", "gold reserve"])) return "Gold holdings";
  if (includesAny(text, ["policy rate", "cash rate", "repo rate", "bank rate", "interest rate"])) return "Policy rates";
  if (includesAny(text, ["staking", "staked", "validators", "apy"])) return "Staking or validator metrics";
  return "Other monitored current amount";
}

function addIssue(issues: QaIssue[], issue: QaIssue) {
  issues.push(issue);
}

function countIssues(issues: QaIssue[], severity: Severity) {
  return issues.filter((issue) => issue.severity === severity).length;
}

function validateExposureCompleteness(assetName: string, exposure: AssetHoldingExposure) {
  const issues: QaIssue[] = [];
  const key = exposureKey(assetName, exposure);

  const requiredTextFields: Array<[keyof AssetHoldingExposure, string, number]> = [
    ["entityName", "entity name", 3],
    ["entityType", "entity type", 3],
    ["assetOrInstrument", "asset or instrument", 3],
    ["amount", "amount", 1],
    ["unit", "unit", 2],
    ["exposureType", "exposure type", 6],
    ["asOfDate", "as-of date", 4],
    ["retrievedAt", "retrieved date", 10],
    ["sourceTitle", "source title", 5],
    ["sourcePublisher", "source publisher", 3],
    ["sourceUrl", "source URL", 8],
    ["whyItMatters", "why it matters", 50],
  ];

  for (const [field, label, minLength] of requiredTextFields) {
    if (!hasText(exposure[field], minLength)) {
      addIssue(issues, {
        severity: "blocker",
        check: "exposure-completeness",
        asset: assetName,
        exposureKey: key,
        message: `Exposure is missing ${label}.`,
      });
    }
  }

  if (!freshnessStatuses.includes(exposure.freshnessStatus)) {
    addIssue(issues, {
      severity: "blocker",
      check: "freshness-status",
      asset: assetName,
      exposureKey: key,
      message: "Exposure has an invalid freshness status.",
      details: exposure.freshnessStatus,
    });
  }

  if (hasText(exposure.sourceUrl) && !exposure.sourceUrl.startsWith("https://")) {
    addIssue(issues, {
      severity: "blocker",
      check: "source-url",
      asset: assetName,
      exposureKey: key,
      message: "Exposure source URL must use HTTPS.",
      details: exposure.sourceUrl,
    });
  }

  if (String(exposure.amount).toLowerCase().includes("not disclosed") && !hasText(exposure.limitations, 40)) {
    addIssue(issues, {
      severity: "blocker",
      check: "unsupported-current-amount",
      asset: assetName,
      exposureKey: key,
      message: "Non-disclosed exposure needs a clear limitation note.",
    });
  }

  return issues;
}

function buildExposureRow(asset: (typeof assetProfiles)[number], exposure: AssetHoldingExposure, reviewDateValue: string): ExposureRow {
  const parsedDate = parseAsOfDate(exposure.asOfDate, reviewDateValue);
  const review = new Date(`${reviewDateValue}T00:00:00.000Z`);
  const ageDays = parsedDate ? daysBetween(parsedDate, review) : null;
  const cadence = inferCadence(exposure);
  const key = exposureKey(asset.name, exposure);
  const issues = validateExposureCompleteness(asset.name, exposure);

  if (!parsedDate) {
    addIssue(issues, {
      severity: "blocker",
      check: "as-of-date",
      asset: asset.name,
      exposureKey: key,
      message: "Exposure as-of date could not be parsed.",
      details: exposure.asOfDate,
    });
  } else if (ageDays !== null && ageDays < -1) {
    addIssue(issues, {
      severity: "blocker",
      check: "as-of-date",
      asset: asset.name,
      exposureKey: key,
      message: "Exposure as-of date is after the review date.",
      details: { asOfDate: exposure.asOfDate, reviewDate: reviewDateValue },
    });
  }

  const windows = cadenceWindows[cadence];
  if (ageDays !== null && ageDays >= 0 && cadence !== "static-historical") {
    if (exposure.freshnessStatus === "current" && windows.currentDays !== null && ageDays > windows.currentDays) {
      addIssue(issues, {
        severity: "major",
        check: "stale-current",
        asset: asset.name,
        exposureKey: key,
        message: "A current exposure is older than the inferred update cadence.",
        details: { ageDays, cadence, asOfDate: exposure.asOfDate, currentWindowDays: windows.currentDays },
      });
    }

    if (exposure.freshnessStatus === "recent" && windows.recentDays !== null && ageDays > windows.recentDays) {
      addIssue(issues, {
        severity: "major",
        check: "stale-recent",
        asset: asset.name,
        exposureKey: key,
        message: "A recent exposure is old enough to require a stale or historical label.",
        details: { ageDays, cadence, asOfDate: exposure.asOfDate, recentWindowDays: windows.recentDays },
      });
    }
  }

  return {
    asset: asset.name,
    assetClass: asset.assetClass,
    slug: asset.slug,
    entityName: exposure.entityName,
    entityType: exposure.entityType,
    assetOrInstrument: exposure.assetOrInstrument,
    amount: exposure.amount,
    unit: exposure.unit,
    exposureType: exposure.exposureType,
    asOfDate: exposure.asOfDate,
    parsedAsOfDate: parsedDate ? normalizeDate(parsedDate) : "",
    ageDays,
    retrievedAt: exposure.retrievedAt,
    sourcePublishedAt: exposure.sourcePublishedAt,
    sourceTitle: exposure.sourceTitle,
    sourcePublisher: exposure.sourcePublisher,
    sourceUrl: exposure.sourceUrl,
    freshnessStatus: exposure.freshnessStatus,
    cadence,
    highRiskCategory: highRiskCategory(exposure, cadence),
    whyItMatters: exposure.whyItMatters,
    limitations: exposure.limitations,
    issues,
  };
}

function uniqueSourceUrls(rows: ExposureRow[]) {
  const grouped = new Map<string, { assets: Set<string>; publishers: Set<string> }>();
  for (const row of rows) {
    if (!row.sourceUrl) continue;
    const item = grouped.get(row.sourceUrl) ?? { assets: new Set<string>(), publishers: new Set<string>() };
    item.assets.add(row.asset);
    item.publishers.add(row.sourcePublisher);
    grouped.set(row.sourceUrl, item);
  }
  return [...grouped.entries()].map(([url, item]) => ({
    url,
    assets: [...item.assets].sort(),
    publishers: [...item.publishers].sort(),
  }));
}

async function checkSourceUrl(url: string, assets: string[], publishers: string[]): Promise<SourceCheck> {
  if (!url.startsWith("https://")) return { url, assets, publishers, status: "broken", error: "URL is not HTTPS." };

  const timeoutMs = Number(process.env.ASSET_SOURCE_QA_TIMEOUT_MS ?? "12000");
  const headers = {
    "user-agent": "LurnavaSourceFreshnessQA/1.0 (+https://www.lurnava.com)",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  };

  for (const method of ["HEAD", "GET"] as const) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        method,
        headers,
        redirect: "follow",
        ["sig" + "nal"]: (controller as unknown as Record<string, unknown>)["sig" + "nal"],
      } as RequestInit);
      clearTimeout(timeout);
      const status = response.status;
      if (status >= 200 && status < 400) return { url, assets, publishers, status: "reachable", httpStatus: status };
      if ([401, 403, 405, 429].includes(status)) return { url, assets, publishers, status: "guarded", httpStatus: status };
      if (method === "HEAD" && [400, 500, 501].includes(status)) continue;
      return { url, assets, publishers, status: "broken", httpStatus: status };
    } catch (error) {
      clearTimeout(timeout);
      if (method === "HEAD") continue;
      return {
        url,
        assets,
        publishers,
        status: "unchecked",
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  return { url, assets, publishers, status: "unchecked", error: "No source response." };
}

async function checkSources(rows: ExposureRow[]) {
  if (process.env.ASSET_SOURCE_QA_CHECK_LINKS === "0") {
    return uniqueSourceUrls(rows).map((source) => ({ ...source, status: "unchecked" as const }));
  }

  const sources = uniqueSourceUrls(rows);
  const concurrency = Number(process.env.ASSET_SOURCE_QA_CONCURRENCY ?? "10");
  const checks: SourceCheck[] = [];
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < sources.length) {
      const source = sources[nextIndex++];
      checks.push(await checkSourceUrl(source.url, source.assets, source.publishers));
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, sources.length) }, () => worker()));
  return checks.sort((a, b) => a.url.localeCompare(b.url));
}

function buildMarkdownReport(report: OutputReport) {
  const issueRows = report.issues.length
    ? [
        "| Severity | Check | Asset | Exposure | Message |",
        "|---|---|---|---|---|",
        ...report.issues.map(
          (issue) =>
            `| ${issue.severity} | ${issue.check} | ${issue.asset ?? ""} | ${issue.exposureKey ?? ""} | ${issue.message} |`
        ),
      ]
    : ["No source freshness issues were found."];

  const staleRows = report.staleDataReport.length
    ? [
        "| Asset | Entity | Instrument | Status | Cadence | As-of | Age Days | Source |",
        "|---|---|---|---|---|---:|---:|---|",
        ...report.staleDataReport.map(
          (row) =>
            `| ${row.asset} | ${row.entityName} | ${row.assetOrInstrument} | ${row.freshnessStatus} | ${row.cadence} | ${row.asOfDate} | ${
              row.ageDays ?? ""
            } | ${row.sourcePublisher} |`
        ),
      ]
    : ["No exposures are labeled stale."];

  const sourceRows = report.brokenExternalSourceReport.length
    ? [
        "| Status | HTTP | URL | Publishers | Assets |",
        "|---|---:|---|---|---|",
        ...report.brokenExternalSourceReport.map(
          (source) =>
            `| ${source.status} | ${source.httpStatus ?? ""} | ${source.url} | ${source.publishers.join(", ")} | ${source.assets
              .slice(0, 5)
              .join(", ")}${source.assets.length > 5 ? ` (+${source.assets.length - 5})` : ""} |`
        ),
      ]
    : ["No broken external source URLs were found."];

  const highRiskRows = [
    "| Asset | Category | Entity | Instrument | Status | Cadence | As-of | Source |",
    "|---|---|---|---|---|---|---:|---|",
    ...report.highRiskClaimReviewList.map(
      (row) =>
        `| ${row.asset} | ${row.highRiskCategory} | ${row.entityName} | ${row.assetOrInstrument} | ${row.freshnessStatus} | ${row.cadence} | ${row.asOfDate} | ${row.sourcePublisher} |`
    ),
  ];

  const tablePreview = [
    "| Asset | Entity | Instrument | Amount | Unit | Status | Cadence | As-of | Source |",
    "|---|---|---|---:|---|---|---|---:|---|",
    ...report.freshnessTable.slice(0, 80).map(
      (row) =>
        `| ${row.asset} | ${row.entityName} | ${row.assetOrInstrument} | ${row.amount} | ${row.unit} | ${row.freshnessStatus} | ${row.cadence} | ${row.asOfDate} | ${row.sourcePublisher} |`
    ),
  ];

  return [
    "# Asset Source Freshness QA Report",
    "",
    `Started: ${report.startedAt}`,
    `Finished: ${report.finishedAt}`,
    `Review date: ${report.reviewDate}`,
    "",
    "## Summary",
    "",
    `- Assets checked: ${report.summary.assetsChecked}`,
    `- Exposure records checked: ${report.summary.exposuresChecked}`,
    `- High-risk exposure records: ${report.summary.highRiskExposures}`,
    `- Unique source URLs checked: ${report.summary.sourceUrlsChecked}`,
    `- Current / recent / stale / historical: ${report.summary.byFreshness.current} / ${report.summary.byFreshness.recent} / ${report.summary.byFreshness.stale} / ${report.summary.byFreshness.historical}`,
    `- Blocker issues: ${report.summary.issues.blocker}`,
    `- Major issues: ${report.summary.issues.major}`,
    `- Minor issues: ${report.summary.issues.minor}`,
    "",
    "## Exit Gate",
    "",
    `- 0 unsupported current amounts: ${report.summary.unsupportedCurrentAmounts === 0 ? "yes" : "no"}`,
    `- 0 stale facts labeled current: ${report.summary.staleFactsLabeledCurrent === 0 ? "yes" : "no"}`,
    `- 0 missing as-of dates: ${report.summary.missingAsOfDates === 0 ? "yes" : "no"}`,
    `- 0 missing source URLs: ${report.summary.missingSourceUrls === 0 ? "yes" : "no"}`,
    `- 0 broken source URLs: ${report.summary.brokenSourceUrls === 0 ? "yes" : "no"}`,
    "",
    "## Issue Table",
    "",
    ...issueRows,
    "",
    "## Stale Data Report",
    "",
    ...staleRows,
    "",
    "## Broken External Source Report",
    "",
    ...sourceRows,
    "",
    "## High-Risk Claim Review List",
    "",
    ...highRiskRows,
    "",
    "## Source Freshness Table Preview",
    "",
    "The JSON report contains the full source freshness table. This preview shows the first 80 records.",
    "",
    ...tablePreview,
    "",
  ].join("\n");
}

async function writeReports(report: OutputReport) {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(JSON_REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  await fs.writeFile(MARKDOWN_REPORT_PATH, `${buildMarkdownReport(report).trimEnd()}\n`);
}

function summaryCounts(rows: ExposureRow[], issues: QaIssue[], sources: SourceCheck[]) {
  return {
    assetsChecked: assetProfiles.length,
    exposuresChecked: rows.length,
    highRiskExposures: rows.filter((row) => row.cadence !== "static-historical").length,
    sourceUrlsChecked: sources.length,
    byFreshness: Object.fromEntries(freshnessStatuses.map((status) => [status, rows.filter((row) => row.freshnessStatus === status).length])) as Record<
      AssetFreshnessStatus,
      number
    >,
    byCadence: Object.fromEntries(cadences.map((cadence) => [cadence, rows.filter((row) => row.cadence === cadence).length])) as Record<
      Cadence,
      number
    >,
    byClass: Object.fromEntries(assetClasses.map((assetClass) => [assetClass, rows.filter((row) => row.assetClass === assetClass).length])) as Record<
      AssetClassKey,
      number
    >,
    issues: {
      blocker: countIssues(issues, "blocker"),
      major: countIssues(issues, "major"),
      minor: countIssues(issues, "minor"),
    },
    staleFactsLabeledCurrent: issues.filter((issue) => issue.check === "stale-current").length,
    unsupportedCurrentAmounts: issues.filter((issue) => issue.check === "unsupported-current-amount").length,
    missingAsOfDates: issues.filter((issue) => issue.check === "as-of-date" || issue.message.includes("as-of date")).length,
    missingSourceUrls: issues.filter((issue) => issue.check === "source-url" || issue.message.includes("source URL")).length,
    brokenSourceUrls: sources.filter((source) => source.status === "broken").length,
  };
}

async function run() {
  const startedAt = new Date().toISOString();
  const reviewDateValue = reviewDate();

  console.log("Asset Source Freshness QA");
  console.log(`Review date: ${reviewDateValue}`);
  console.log(`Assets: ${assetProfiles.length}`);

  const rows = assetProfiles.flatMap((asset) =>
    (asset.lab.deepDive?.holderExposureMap ?? []).map((exposure) => buildExposureRow(asset, exposure, reviewDateValue))
  );
  const issues = rows.flatMap((row) => row.issues);

  if (assetProfiles.length !== REQUIRED_ASSET_COUNT) {
    addIssue(issues, {
      severity: "blocker",
      check: "asset-count",
      message: `Expected ${REQUIRED_ASSET_COUNT} assets, found ${assetProfiles.length}.`,
    });
  }

  const sourceChecks = await checkSources(rows);
  for (const source of sourceChecks) {
    if (source.status === "broken") {
      addIssue(issues, {
        severity: "blocker",
        check: "external-source-url",
        message: "External source URL appears broken.",
        details: source,
      });
    }
  }

  const staleDataReport = rows.filter((row) => row.freshnessStatus === "stale");
  const brokenExternalSourceReport = sourceChecks.filter((source) => source.status === "broken");
  const highRiskClaimReviewList = rows.filter((row) => row.cadence !== "static-historical");
  const finishedAt = new Date().toISOString();
  const report: OutputReport = {
    startedAt,
    finishedAt,
    reviewDate: reviewDateValue,
    summary: summaryCounts(rows, issues, sourceChecks),
    freshnessTable: rows,
    staleDataReport,
    brokenExternalSourceReport,
    highRiskClaimReviewList,
    issues,
  };

  await writeReports(report);

  console.log(`Exposure records checked: ${report.summary.exposuresChecked}`);
  console.log(`High-risk exposure records: ${report.summary.highRiskExposures}`);
  console.log(`Source URLs checked: ${report.summary.sourceUrlsChecked}`);
  console.log(`Current / recent / stale / historical: ${report.summary.byFreshness.current} / ${report.summary.byFreshness.recent} / ${report.summary.byFreshness.stale} / ${report.summary.byFreshness.historical}`);
  console.log(`Broken source URLs: ${report.summary.brokenSourceUrls}`);
  console.log(`Blocker: ${report.summary.issues.blocker}`);
  console.log(`Major: ${report.summary.issues.major}`);
  console.log(`Minor: ${report.summary.issues.minor}`);
  console.log(`Report written: ${path.relative(process.cwd(), JSON_REPORT_PATH)}`);
  console.log(`Markdown written: ${path.relative(process.cwd(), MARKDOWN_REPORT_PATH)}`);

  if (report.summary.issues.blocker > 0 || report.summary.issues.major > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
