import fs from "fs/promises";
import path from "path";
import { loadPlaywrightChromium, type BrowserContextLike as BrowserContext } from "./playwright-runtime";

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
  hasDeepPaidProfile: boolean;
  sourceCount: number;
  participantCount: number;
  exposureCount: number;
};

type Inventory = {
  summary: {
    assetCount: number;
    publicRouteCount: number;
    paidRouteCount: number;
    totalRouteCount: number;
  };
  publicRoutes: RouteEntry[];
  paidRoutes: RouteEntry[];
  allRoutes: RouteEntry[];
};

type QaIssue = {
  severity: Severity;
  check: string;
  message: string;
  path?: string;
  details?: unknown;
};

type StaticCheck = {
  name: string;
  status: "pass" | "fail" | "note";
  details: string;
};

type SourceScanResult = {
  file: string;
  highRiskMatches: Array<{
    line: number;
    check: string;
    text: string;
  }>;
};

type PublicRouteLegalResult = {
  path: string;
  status: number;
  hasEducationNotice: boolean;
  hasDisclaimerLink: boolean;
  hasRiskLanguage: boolean;
  highRiskMarkers: string[];
};

type AuthenticatedPaidResult = {
  configured: boolean;
  routesChecked: number;
  passed: number;
  failed: number;
  notes: string[];
};

type OutputReport = {
  startedAt: string;
  finishedAt: string;
  baseUrl: string;
  summary: {
    publicRoutesChecked: number;
    sourceFilesScanned: number;
    highRiskSourceMatches: number;
    publicRoutesMissingNotice: number;
    publicRoutesMissingDisclaimerLink: number;
    publicRoutesMissingRiskLanguage: number;
    issues: Record<Severity, number>;
  };
  referenceBasis: Array<{ name: string; url: string; relevance: string }>;
  staticChecks: StaticCheck[];
  publicRoutes: PublicRouteLegalResult[];
  sourceScans: SourceScanResult[];
  authenticatedPaid: AuthenticatedPaidResult;
  issues: QaIssue[];
};

const REQUIRED_PUBLIC_ROUTE_COUNT = 71;
const REQUIRED_PAID_ROUTE_COUNT = 71;
const REQUIRED_TOTAL_ROUTE_COUNT = 142;
const OUTPUT_DIR = path.join(process.cwd(), "docs", "qa", "asset-legal");
const JSON_REPORT_PATH = path.join(OUTPUT_DIR, "asset-legal-qa-report.json");
const MARKDOWN_REPORT_PATH = path.join(OUTPUT_DIR, "asset-legal-qa-report.md");

const referenceBasis = [
  {
    name: "SEC investor education resources",
    url: "https://www.sec.gov/resources-investors",
    relevance: "Supports education-first framing and investor risk awareness.",
  },
  {
    name: "CFTC virtual currency customer advisory",
    url: "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/understand_risks_of_virtual_currency.html",
    relevance: "Supports explicit crypto risk and fraud caution language.",
  },
  {
    name: "FINRA crypto asset risk education",
    url: "https://www.finra.org/investors/investing/investment-products/crypto-assets/risks",
    relevance: "Supports volatility, liquidity, and loss-risk framing for digital assets.",
  },
];

const sourceFilesToScan = [
  "src/lib/asset-intelligence-data.ts",
  "src/lib/asset-intelligence-deep-batch-2.ts",
  "src/lib/asset-intelligence-deep-batch-3.ts",
  "src/lib/asset-intelligence-deep-batch-4.ts",
  "src/lib/asset-intelligence-deep-batch-5.ts",
  "src/lib/asset-intelligence-deep-batch-6.ts",
  "src/lib/asset-intelligence-deep-batch-7.ts",
  "src/lib/asset-intelligence-deep-batch-8.ts",
  "src/app/(marketing)/markets/page.tsx",
  "src/app/(marketing)/markets/[assetClass]/[slug]/page.tsx",
  "src/app/(dashboard)/asset-lab/page.tsx",
  "src/components/asset-lab/AssetLabDetailClient.tsx",
  "src/components/asset-intelligence/AssetEducationNotice.tsx",
  "src/app/(marketing)/disclaimer/page.tsx",
  "src/app/(marketing)/outcomes/page.tsx",
  "src/app/(marketing)/verify/[certId]/page.tsx",
  "src/app/(dashboard)/dashboard/records/page.tsx",
  "src/components/marketing/footer.tsx",
];

const highRiskPatterns: Array<{ check: string; regex: RegExp; severity: Severity; allowedIf?: RegExp }> = [
  {
    check: "direct-trade-direction",
    regex: /\b(you|learners?|students?|viewers?)\s+(should|must|need to|have to)\s+(buy|sell|hold|short|long|trade|enter|exit)\b/i,
    severity: "blocker",
  },
  {
    check: "immediate-action",
    regex: /\b(buy|sell|hold|short|long|trade|enter|exit)\s+(now|today|immediately)\b/i,
    severity: "blocker",
  },
  {
    check: "recommendation-language",
    regex: /\b(we recommend|our recommendation|recommended trade|trade recommendation|investment recommendation)\b/i,
    severity: "blocker",
    allowedIf: /\b(do not|does not|not|no)\b/i,
  },
  {
    check: "outcome-promise",
    regex: /\b(guaran(?:tee|teed|tees)|always\s+wins|easy\s+money|risk[-\s]?free|sure\s+profit|assured\s+returns?)\b/i,
    severity: "blocker",
    allowedIf: /\b(do not|does not|not|no|without)\b/i,
  },
  {
    check: "rigid-exit-claim",
    regex: /\b(take[-\s]+profit|profit\s+target)\b/i,
    severity: "major",
  },
  {
    check: "advice-claim",
    regex: /\b(constitutes|is|provides|provide)\s+(financial|investment|trading)\s+advice\b/i,
    severity: "blocker",
    allowedIf: /\b(do not|does not|not|no|nothing)\b/i,
  },
];

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/+$/, "");
}

function routeUrl(baseUrl: string, routePath: string) {
  return `${normalizeBaseUrl(baseUrl)}${routePath}`;
}

function addIssue(issues: QaIssue[], issue: QaIssue) {
  issues.push(issue);
}

function countIssues(issues: QaIssue[], severity: Severity) {
  return issues.filter((issue) => issue.severity === severity).length;
}

async function readInventory(): Promise<Inventory> {
  const inventoryPath = path.join(process.cwd(), "docs", "asset-intelligence-route-inventory.json");
  const raw = await fs.readFile(inventoryPath, "utf8");
  const inventory = JSON.parse(raw) as Inventory;

  if (
    inventory.summary.publicRouteCount !== REQUIRED_PUBLIC_ROUTE_COUNT ||
    inventory.summary.paidRouteCount !== REQUIRED_PAID_ROUTE_COUNT ||
    inventory.summary.totalRouteCount !== REQUIRED_TOTAL_ROUTE_COUNT ||
    inventory.publicRoutes.length !== REQUIRED_PUBLIC_ROUTE_COUNT ||
    inventory.paidRoutes.length !== REQUIRED_PAID_ROUTE_COUNT ||
    inventory.allRoutes.length !== REQUIRED_TOTAL_ROUTE_COUNT
  ) {
    throw new Error(
      `Inventory mismatch. Expected ${REQUIRED_PUBLIC_ROUTE_COUNT} public, ${REQUIRED_PAID_ROUTE_COUNT} paid, ${REQUIRED_TOTAL_ROUTE_COUNT} total routes.`
    );
  }

  return inventory;
}

async function resetOutputDir() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

function stripTags(html: string) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ");
}

function compactText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function isAllowedMatch(line: string, allowedIf?: RegExp) {
  return Boolean(allowedIf && allowedIf.test(line));
}

async function scanSourceFiles(issues: QaIssue[]): Promise<SourceScanResult[]> {
  const results: SourceScanResult[] = [];

  for (const relativePath of sourceFilesToScan) {
    const fullPath = path.join(process.cwd(), relativePath);
    const source = await fs.readFile(fullPath, "utf8");
    const highRiskMatches: SourceScanResult["highRiskMatches"] = [];

    source.split(/\r?\n/).forEach((line, index) => {
      for (const pattern of highRiskPatterns) {
        if (!pattern.regex.test(line) || isAllowedMatch(line, pattern.allowedIf)) continue;
        const text = compactText(line);
        highRiskMatches.push({ line: index + 1, check: pattern.check, text });
        addIssue(issues, {
          severity: pattern.severity,
          check: pattern.check,
          path: relativePath,
          message: "High-risk wording was found in a Phase 7 source file.",
          details: { line: index + 1, text },
        });
      }
    });

    results.push({ file: relativePath, highRiskMatches });
  }

  return results;
}

function runStaticChecks(issues: QaIssue[]): StaticCheck[] {
  const checks: StaticCheck[] = [];

  const requiredFiles: Array<{ name: string; file: string; includes: string[]; details: string; severity: Severity }> = [
    {
      name: "public-asset-education-notice",
      file: "src/app/(marketing)/markets/[assetClass]/[slug]/page.tsx",
      includes: ["AssetEducationNotice"],
      details: "Public asset detail pages render the education-only notice.",
      severity: "blocker",
    },
    {
      name: "markets-index-education-notice",
      file: "src/app/(marketing)/markets/page.tsx",
      includes: ["AssetEducationNotice"],
      details: "Markets index renders education-only framing before conversion.",
      severity: "major",
    },
    {
      name: "paid-asset-lab-education-notice",
      file: "src/components/asset-lab/AssetLabDetailClient.tsx",
      includes: ["AssetEducationNotice"],
      details: "Paid Asset Lab detail workspace renders education-only framing.",
      severity: "blocker",
    },
    {
      name: "asset-lab-index-education-notice",
      file: "src/app/(dashboard)/asset-lab/page.tsx",
      includes: ["AssetEducationNotice"],
      details: "Asset Lab index renders education-only framing.",
      severity: "major",
    },
    {
      name: "disclaimer-current-scope",
      file: "src/app/(marketing)/disclaimer/page.tsx",
      includes: ["Asset Intelligence", "Learning records", "personal financial advice", "market results"],
      details: "Disclaimer covers Asset Intelligence, learning records, advice limits, and result limits.",
      severity: "blocker",
    },
    {
      name: "record-limitation-public",
      file: "src/app/(marketing)/verify/[certId]/page.tsx",
      includes: ["not a license", "market-performance claim"],
      details: "Public verification page limits the meaning of records.",
      severity: "major",
    },
    {
      name: "record-limitation-dashboard",
      file: "src/app/(dashboard)/dashboard/records/page.tsx",
      includes: ["not financial credentials", "market-performance claims"],
      details: "Dashboard records page limits the meaning of records.",
      severity: "major",
    },
  ];

  for (const check of requiredFiles) {
    const source = fs.readFile(path.join(process.cwd(), check.file), "utf8");
    checks.push({ name: check.name, status: "note", details: "Pending source read." });
    void source;
  }

  return checks;
}

async function runAsyncStaticChecks(issues: QaIssue[]): Promise<StaticCheck[]> {
  const checks: StaticCheck[] = [];

  const requiredFiles: Array<{ name: string; file: string; includes: string[]; details: string; severity: Severity }> = [
    {
      name: "public-asset-education-notice",
      file: "src/app/(marketing)/markets/[assetClass]/[slug]/page.tsx",
      includes: ["AssetEducationNotice"],
      details: "Public asset detail pages render the education-only notice.",
      severity: "blocker",
    },
    {
      name: "markets-index-education-notice",
      file: "src/app/(marketing)/markets/page.tsx",
      includes: ["AssetEducationNotice"],
      details: "Markets index renders education-only framing before conversion.",
      severity: "major",
    },
    {
      name: "paid-asset-lab-education-notice",
      file: "src/components/asset-lab/AssetLabDetailClient.tsx",
      includes: ["AssetEducationNotice"],
      details: "Paid Asset Lab detail workspace renders education-only framing.",
      severity: "blocker",
    },
    {
      name: "asset-lab-index-education-notice",
      file: "src/app/(dashboard)/asset-lab/page.tsx",
      includes: ["AssetEducationNotice"],
      details: "Asset Lab index renders education-only framing.",
      severity: "major",
    },
    {
      name: "disclaimer-current-scope",
      file: "src/app/(marketing)/disclaimer/page.tsx",
      includes: ["Asset Intelligence", "Learning records", "personal financial advice", "market results"],
      details: "Disclaimer covers Asset Intelligence, learning records, advice limits, and result limits.",
      severity: "blocker",
    },
    {
      name: "record-limitation-public",
      file: "src/app/(marketing)/verify/[certId]/page.tsx",
      includes: ["not a license", "market-performance claim"],
      details: "Public verification page limits the meaning of records.",
      severity: "major",
    },
    {
      name: "record-limitation-dashboard",
      file: "src/app/(dashboard)/dashboard/records/page.tsx",
      includes: ["not financial credentials", "market-performance claims"],
      details: "Dashboard records page limits the meaning of records.",
      severity: "major",
    },
    {
      name: "footer-disclaimer-link",
      file: "src/components/marketing/footer.tsx",
      includes: ["/disclaimer", "Education only"],
      details: "Footer links to the disclaimer and repeats education-only framing.",
      severity: "major",
    },
  ];

  for (const check of requiredFiles) {
    const source = await fs.readFile(path.join(process.cwd(), check.file), "utf8");
    const missing = check.includes.filter((needle) => !source.includes(needle));
    const passed = missing.length === 0;
    checks.push({
      name: check.name,
      status: passed ? "pass" : "fail",
      details: passed ? check.details : `${check.details} Missing: ${missing.join(", ")}`,
    });

    if (!passed) {
      addIssue(issues, {
        severity: check.severity,
        check: check.name,
        path: check.file,
        message: "Required legal/disclaimer framing was not found.",
        details: { missing },
      });
    }
  }

  return checks;
}

function scanRenderedText(text: string) {
  const markers: string[] = [];
  for (const pattern of highRiskPatterns) {
    if (pattern.regex.test(text) && !isAllowedMatch(text, pattern.allowedIf)) markers.push(pattern.check);
  }
  return markers;
}

async function checkPublicRoutes(baseUrl: string, publicRoutes: RouteEntry[], issues: QaIssue[]): Promise<PublicRouteLegalResult[]> {
  const results: PublicRouteLegalResult[] = [];

  for (const route of publicRoutes) {
    const response = await fetch(routeUrl(baseUrl, route.path));
    const html = await response.text();
    const text = compactText(stripTags(html));
    const result: PublicRouteLegalResult = {
      path: route.path,
      status: response.status,
      hasEducationNotice: html.includes('data-asset-legal-notice="education-only"'),
      hasDisclaimerLink: html.includes('href="/disclaimer"') || html.includes("href=\"/disclaimer\""),
      hasRiskLanguage: /\brisk\b/i.test(text) && /\beducation\b/i.test(text),
      highRiskMarkers: scanRenderedText(text),
    };

    results.push(result);

    if (response.status !== 200) {
      addIssue(issues, {
        severity: "blocker",
        check: "public-route-status",
        path: route.path,
        message: "Public asset route did not return HTTP 200 during Phase 7 legal QA.",
        details: { status: response.status },
      });
    }

    if (!result.hasEducationNotice) {
      addIssue(issues, {
        severity: "blocker",
        check: "public-education-notice",
        path: route.path,
        message: "Public asset route is missing visible education-only framing.",
      });
    }

    if (!result.hasDisclaimerLink) {
      addIssue(issues, {
        severity: "major",
        check: "public-disclaimer-link",
        path: route.path,
        message: "Public asset route is missing a disclaimer link.",
      });
    }

    if (!result.hasRiskLanguage) {
      addIssue(issues, {
        severity: "major",
        check: "public-risk-language",
        path: route.path,
        message: "Public asset route is missing visible education and risk framing.",
      });
    }

    if (result.highRiskMarkers.length > 0) {
      addIssue(issues, {
        severity: "blocker",
        check: "public-high-risk-copy",
        path: route.path,
        message: "Rendered public page includes high-risk legal wording.",
        details: result.highRiskMarkers,
      });
    }
  }

  return results;
}

async function login(context: BrowserContext, baseUrl: string, email: string, password: string) {
  const page = await context.newPage();
  try {
    await page.goto(routeUrl(baseUrl, "/login"), { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.fill('input[name="email"]', email, { timeout: 15_000 });
    await page.fill('input[name="password"]', password, { timeout: 15_000 });
    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForURL((url) => !url.pathname.includes("/login"), { timeout: 30_000 }),
    ]);
    await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => undefined);
  } finally {
    await page.close();
  }
}

async function checkAuthenticatedPaidRoutes(baseUrl: string, paidRoutes: RouteEntry[], issues: QaIssue[]): Promise<AuthenticatedPaidResult> {
  const email = process.env.ASSET_QA_PAID_EMAIL ?? process.env.ASSET_QA_EMAIL;
  const password = process.env.ASSET_QA_PAID_PASSWORD ?? process.env.ASSET_QA_PASSWORD;

  if (!email || !password) {
    return {
      configured: false,
      routesChecked: 0,
      passed: 0,
      failed: 0,
      notes: ["Set ASSET_QA_PAID_EMAIL/ASSET_QA_PAID_PASSWORD or ASSET_QA_EMAIL/ASSET_QA_PASSWORD to crawl authenticated paid pages."],
    };
  }

  const chromium = await loadPlaywrightChromium();
  const browser = await chromium.launch({ headless: process.env.ASSET_QA_HEADLESS !== "0" });
  let passed = 0;
  let failed = 0;

  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    try {
      await login(context, baseUrl, email, password);
      for (const route of paidRoutes) {
        const response = await context.request.get(routeUrl(baseUrl, route.path), { timeout: 45_000 });
        const html = await response.text();
        const text = compactText(stripTags(html));
        const routePassed =
          response.status() === 200 &&
          html.includes('data-asset-legal-notice="education-only"') &&
          html.includes("href=\"/disclaimer\"") &&
          scanRenderedText(text).length === 0;

        if (routePassed) {
          passed += 1;
        } else {
          failed += 1;
          addIssue(issues, {
            severity: "major",
            check: "paid-route-legal-framing",
            path: route.path,
            message: "Authenticated paid route is missing legal framing or has high-risk wording.",
            details: { status: response.status(), hasNotice: html.includes('data-asset-legal-notice="education-only"') },
          });
        }
      }
    } finally {
      await context.close();
    }
  } finally {
    await browser.close();
  }

  return {
    configured: true,
    routesChecked: paidRoutes.length,
    passed,
    failed,
    notes: ["Authenticated paid route crawl completed with configured credentials."],
  };
}

function buildMarkdownReport(report: OutputReport) {
  const lines = [
    "# Asset Legal And Disclaimer QA Report",
    "",
    `Started: ${report.startedAt}`,
    `Finished: ${report.finishedAt}`,
    `Base URL: ${report.baseUrl}`,
    "",
    "## Summary",
    "",
    `- Public routes checked: ${report.summary.publicRoutesChecked}`,
    `- Source files scanned: ${report.summary.sourceFilesScanned}`,
    `- High-risk source matches: ${report.summary.highRiskSourceMatches}`,
    `- Public routes missing education notice: ${report.summary.publicRoutesMissingNotice}`,
    `- Public routes missing disclaimer link: ${report.summary.publicRoutesMissingDisclaimerLink}`,
    `- Public routes missing risk language: ${report.summary.publicRoutesMissingRiskLanguage}`,
    `- Blocker issues: ${report.summary.issues.blocker}`,
    `- Major issues: ${report.summary.issues.major}`,
    `- Minor issues: ${report.summary.issues.minor}`,
    "",
    "## Reference Basis",
    "",
    "| Source | Relevance |",
    "|---|---|",
    ...report.referenceBasis.map((source) => `| [${source.name}](${source.url}) | ${source.relevance} |`),
    "",
    "## Static Checks",
    "",
    "| Check | Status | Details |",
    "|---|---|---|",
    ...report.staticChecks.map((check) => `| ${check.name} | ${check.status} | ${check.details} |`),
    "",
    "## Authenticated Paid Crawl",
    "",
    `- Configured: ${report.authenticatedPaid.configured ? "yes" : "no"}`,
    `- Routes checked: ${report.authenticatedPaid.routesChecked}`,
    `- Passed: ${report.authenticatedPaid.passed}`,
    `- Failed: ${report.authenticatedPaid.failed}`,
    `- Notes: ${report.authenticatedPaid.notes.join(" ")}`,
    "",
    "## Issue Table",
    "",
  ];

  if (report.issues.length === 0) {
    lines.push("No legal/disclaimer QA issues were found.");
  } else {
    lines.push("| Severity | Check | Route/File | Message |");
    lines.push("|---|---|---|---|");
    for (const issue of report.issues) {
      lines.push(`| ${issue.severity} | ${issue.check} | ${issue.path ? `\`${issue.path}\`` : ""} | ${issue.message} |`);
    }
  }

  lines.push(
    "",
    "## Exit Gate",
    "",
    `- 71 public asset pages checked: ${report.summary.publicRoutesChecked === REQUIRED_PUBLIC_ROUTE_COUNT ? "yes" : "no"}`,
    `- 0 direct trade direction issues: ${report.issues.some((issue) => issue.check === "direct-trade-direction" || issue.check === "immediate-action") ? "no" : "yes"}`,
    `- 0 outcome-promise issues: ${report.issues.some((issue) => issue.check === "outcome-promise") ? "no" : "yes"}`,
    `- 0 missing public disclaimer links: ${report.summary.publicRoutesMissingDisclaimerLink === 0 ? "yes" : "no"}`,
    `- 0 blocker or major issues: ${report.summary.issues.blocker === 0 && report.summary.issues.major === 0 ? "yes" : "no"}`
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
  const issues: QaIssue[] = [];

  await resetOutputDir();

  console.log("Asset Legal And Disclaimer QA");
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Public routes: ${inventory.publicRoutes.length}`);

  const [staticChecks, sourceScans, publicRoutes] = await Promise.all([
    runAsyncStaticChecks(issues),
    scanSourceFiles(issues),
    checkPublicRoutes(baseUrl, inventory.publicRoutes, issues),
  ]);
  const authenticatedPaid = await checkAuthenticatedPaidRoutes(baseUrl, inventory.paidRoutes, issues);

  const finishedAt = new Date().toISOString();
  const highRiskSourceMatches = sourceScans.reduce((total, result) => total + result.highRiskMatches.length, 0);
  const report: OutputReport = {
    startedAt,
    finishedAt,
    baseUrl,
    summary: {
      publicRoutesChecked: publicRoutes.length,
      sourceFilesScanned: sourceScans.length,
      highRiskSourceMatches,
      publicRoutesMissingNotice: publicRoutes.filter((route) => !route.hasEducationNotice).length,
      publicRoutesMissingDisclaimerLink: publicRoutes.filter((route) => !route.hasDisclaimerLink).length,
      publicRoutesMissingRiskLanguage: publicRoutes.filter((route) => !route.hasRiskLanguage).length,
      issues: {
        blocker: countIssues(issues, "blocker"),
        major: countIssues(issues, "major"),
        minor: countIssues(issues, "minor"),
      },
    },
    referenceBasis,
    staticChecks,
    publicRoutes,
    sourceScans,
    authenticatedPaid,
    issues,
  };

  await writeReports(report);

  console.log(`Report written: ${path.relative(process.cwd(), JSON_REPORT_PATH)}`);
  console.log(`Markdown written: ${path.relative(process.cwd(), MARKDOWN_REPORT_PATH)}`);
  console.log(`Public routes checked: ${report.summary.publicRoutesChecked}`);
  console.log(`Source files scanned: ${report.summary.sourceFilesScanned}`);
  console.log(`Blocker: ${report.summary.issues.blocker}`);
  console.log(`Major: ${report.summary.issues.major}`);
  console.log(`Minor: ${report.summary.issues.minor}`);

  if (
    report.summary.publicRoutesChecked !== REQUIRED_PUBLIC_ROUTE_COUNT ||
    report.summary.issues.blocker > 0 ||
    report.summary.issues.major > 0
  ) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
