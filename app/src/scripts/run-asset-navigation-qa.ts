import fs from "fs/promises";
import path from "path";
import { loadPlaywrightChromium, type BrowserContextLike as BrowserContext, type PageLike as Page } from "./playwright-runtime";

type RouteType = "public" | "paid";
type Severity = "blocker" | "major" | "minor";

type RouteEntry = {
  routeType: RouteType;
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
  details?: unknown;
};

type EntryPointResult = {
  name: string;
  path: string;
  status: "pass" | "fail";
  details: Record<string, unknown>;
};

type IndexCoverageResult = {
  name: string;
  path: string;
  expectedCount: number;
  actualCount: number;
  missing: string[];
  extra: string[];
};

type RouteReachabilityResult = {
  routeType: RouteType;
  path: string;
  status: number | null;
  finalUrl: string;
  ok: boolean;
};

type RelatedLinkResult = {
  routeType: RouteType;
  path: string;
  relatedLessonCount: number;
  relatedStrategyCount: number;
  relatedMarketGuideCount: number;
};

type LinkStatusResult = {
  source: string;
  href: string;
  status: number | null;
  finalUrl: string;
  ok: boolean;
};

type LinkInfo = {
  text: string;
  href: string;
  dataKind: string | null;
  visible: boolean;
};

type OutputReport = {
  startedAt: string;
  finishedAt: string;
  baseUrl: string;
  summary: {
    expectedPublicRoutes: number;
    expectedPaidRoutes: number;
    uniqueInternalLinksChecked: number;
    issues: Record<Severity, number>;
  };
  entryPoints: EntryPointResult[];
  indexCoverage: IndexCoverageResult[];
  routeReachability: RouteReachabilityResult[];
  relatedLinks: RelatedLinkResult[];
  brokenInternalLinks: LinkStatusResult[];
  screenshots: string[];
  issues: QaIssue[];
};

const REQUIRED_PUBLIC_ROUTE_COUNT = 71;
const REQUIRED_PAID_ROUTE_COUNT = 71;
const REQUIRED_TOTAL_ROUTE_COUNT = 142;
const OUTPUT_DIR = path.join(process.cwd(), "docs", "qa", "asset-navigation");
const SCREENSHOT_DIR = path.join(OUTPUT_DIR, "screenshots");
const JSON_REPORT_PATH = path.join(OUTPUT_DIR, "asset-navigation-qa-report.json");
const MARKDOWN_REPORT_PATH = path.join(OUTPUT_DIR, "asset-navigation-qa-report.md");

const DESKTOP_VIEWPORT = { width: 1440, height: 1000 };
const MOBILE_VIEWPORT = { width: 390, height: 844 };

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/+$/, "");
}

function routeUrl(baseUrl: string, routePath: string) {
  return `${normalizeBaseUrl(baseUrl)}${routePath}`;
}

function normalizeInternalHref(href: string): string | null {
  if (!href || href.startsWith("#")) return null;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return null;
  if (href.startsWith("http://") || href.startsWith("https://")) return null;

  try {
    const parsed = new URL(href, "http://lurnava.local");
    if (parsed.origin !== "http://lurnava.local") return null;
    return `${parsed.pathname}${parsed.search}` || "/";
  } catch {
    return null;
  }
}

function canonicalInternalHrefForStatus(href: string): string {
  const parsed = new URL(href, "http://lurnava.local");

  if (parsed.pathname === "/lab") return "/lab";
  if (parsed.pathname === "/curriculum") return "/curriculum";
  if (parsed.pathname === "/login") return "/login";
  if (parsed.pathname === "/register") return "/register";

  return `${parsed.pathname}${parsed.search}`;
}

function addIssue(issues: QaIssue[], issue: QaIssue) {
  issues.push(issue);
}

function countIssues(issues: QaIssue[], severity: Severity) {
  return issues.filter((issue) => issue.severity === severity).length;
}

function setDifference(expected: Set<string>, actual: Set<string>) {
  return [...expected].filter((value) => !actual.has(value)).sort();
}

function sanitizeFilePart(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
}

async function resetOutputDir() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.rm(SCREENSHOT_DIR, { recursive: true, force: true });
  await fs.mkdir(SCREENSHOT_DIR, { recursive: true });
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

async function login(context: BrowserContext, baseUrl: string) {
  const email = process.env.ASSET_QA_EMAIL;
  const password = process.env.ASSET_QA_PASSWORD;

  if (!email || !password) {
    throw new Error("Set ASSET_QA_EMAIL and ASSET_QA_PASSWORD before checking authenticated Asset Lab navigation.");
  }

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

    if (new URL(page.url()).pathname.includes("/login")) {
      throw new Error("Login did not leave the login route.");
    }
  } finally {
    await page.close();
  }
}

async function gotoPath(page: Page, baseUrl: string, routePath: string) {
  const response = await page.goto(routeUrl(baseUrl, routePath), { waitUntil: "domcontentloaded", timeout: 45_000 });
  await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => undefined);
  await page.waitForTimeout(250);
  return response;
}

async function collectVisibleLinks(page: Page): Promise<LinkInfo[]> {
  return page.evaluate(() => {
    return Array.from(document.querySelectorAll("a")).map((link) => {
      const rect = link.getBoundingClientRect();
      const style = window.getComputedStyle(link);

      return {
        text: (link.textContent ?? "").trim().replace(/\s+/g, " "),
        href: link.getAttribute("href") ?? "",
        dataKind: link.getAttribute("data-asset-nav-kind"),
        visible: rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden",
      };
    });
  });
}

async function screenshot(page: Page, relativeName: string, screenshots: string[]) {
  const screenshotPath = path.join(SCREENSHOT_DIR, relativeName);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  screenshots.push(path.relative(process.cwd(), screenshotPath).replace(/\\/g, "/"));
}

function recordEntryPoint(
  entryPoints: EntryPointResult[],
  issues: QaIssue[],
  name: string,
  routePath: string,
  passed: boolean,
  details: Record<string, unknown>,
  severity: Severity = "blocker"
) {
  entryPoints.push({ name, path: routePath, status: passed ? "pass" : "fail", details });
  if (!passed) {
    addIssue(issues, {
      severity,
      check: `entry-${sanitizeFilePart(name)}`,
      message: `${name} did not expose the required navigation path.`,
      details,
    });
  }
}

async function checkHomepageNavigation(
  context: BrowserContext,
  baseUrl: string,
  entryPoints: EntryPointResult[],
  issues: QaIssue[],
  screenshots: string[]
) {
  const page = await context.newPage();
  try {
    await page.setViewportSize(DESKTOP_VIEWPORT);
    await gotoPath(page, baseUrl, "/");
    const desktopLinks = await collectVisibleLinks(page);
    const hasDesktopMarkets = desktopLinks.some((link) => link.visible && link.href === "/markets" && link.text === "Markets");
    recordEntryPoint(entryPoints, issues, "Homepage desktop Markets nav", "/", hasDesktopMarkets, {
      href: "/markets",
      visibleMatches: desktopLinks.filter((link) => link.visible && link.href === "/markets").map((link) => link.text),
    });

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(250);
    const footerLinks = await collectVisibleLinks(page);
    const hasFooterMarkets = footerLinks.some((link) => link.visible && link.href === "/markets" && link.text === "Markets");
    recordEntryPoint(entryPoints, issues, "Footer Markets link", "/", hasFooterMarkets, {
      href: "/markets",
      visibleMatches: footerLinks.filter((link) => link.visible && link.href === "/markets").map((link) => link.text),
    });

    await page.setViewportSize(MOBILE_VIEWPORT);
    await gotoPath(page, baseUrl, "/");
    await page.getByRole("button", { name: "Toggle menu" }).click();
    await page.waitForTimeout(300);
    const mobileLinks = await collectVisibleLinks(page);
    const hasMobileMarkets = mobileLinks.some((link) => link.visible && link.href === "/markets" && link.text === "Markets");
    recordEntryPoint(entryPoints, issues, "Homepage mobile Markets menu", "/", hasMobileMarkets, {
      href: "/markets",
      visibleMatches: mobileLinks.filter((link) => link.visible && link.href === "/markets").map((link) => link.text),
    });
    await screenshot(page, "home-mobile-markets-menu.png", screenshots);
  } finally {
    await page.close();
  }
}

async function checkDashboardNavigation(
  desktopContext: BrowserContext,
  mobileContext: BrowserContext,
  baseUrl: string,
  entryPoints: EntryPointResult[],
  issues: QaIssue[],
  screenshots: string[]
) {
  const desktopPage = await desktopContext.newPage();
  try {
    await desktopPage.setViewportSize(DESKTOP_VIEWPORT);
    await gotoPath(desktopPage, baseUrl, "/dashboard");
    const desktopLinks = await collectVisibleLinks(desktopPage);
    const hasSidebarAssetLab = desktopLinks.some((link) => link.visible && link.href === "/asset-lab" && link.text.includes("Asset Lab"));
    recordEntryPoint(entryPoints, issues, "Dashboard sidebar Asset Lab nav", "/dashboard", hasSidebarAssetLab, {
      href: "/asset-lab",
      visibleMatches: desktopLinks.filter((link) => link.visible && link.href === "/asset-lab").map((link) => link.text),
    });
  } finally {
    await desktopPage.close();
  }

  const mobilePage = await mobileContext.newPage();
  try {
    await mobilePage.setViewportSize(MOBILE_VIEWPORT);
    await gotoPath(mobilePage, baseUrl, "/dashboard");
    await mobilePage.locator("header button").first().click();
    await mobilePage.waitForTimeout(300);
    const mobileLinks = await collectVisibleLinks(mobilePage);
    const hasMobileAssetLab = mobileLinks.some((link) => link.visible && link.href === "/asset-lab" && link.text.includes("Asset Lab"));
    recordEntryPoint(entryPoints, issues, "Dashboard mobile Asset Lab menu", "/dashboard", hasMobileAssetLab, {
      href: "/asset-lab",
      visibleMatches: mobileLinks.filter((link) => link.visible && link.href === "/asset-lab").map((link) => link.text),
    });
    await screenshot(mobilePage, "dashboard-mobile-asset-lab-menu.png", screenshots);
  } finally {
    await mobilePage.close();
  }
}

async function checkIndexCoverage(
  context: BrowserContext,
  baseUrl: string,
  name: string,
  routePath: string,
  expectedRoutes: RouteEntry[],
  hrefPrefix: string,
  screenshots: string[],
  screenshotName: string
): Promise<IndexCoverageResult> {
  const page = await context.newPage();
  try {
    await page.setViewportSize(DESKTOP_VIEWPORT);
    await gotoPath(page, baseUrl, routePath);
    await screenshot(page, screenshotName, screenshots);

    const links = await collectVisibleLinks(page);
    const actual = new Set(
      links
        .map((link) => normalizeInternalHref(link.href))
        .filter((href): href is string => Boolean(href))
        .filter((href) => href.startsWith(hrefPrefix))
        .map((href) => href.split("?")[0])
    );
    const expected = new Set(expectedRoutes.map((route) => route.path));

    return {
      name,
      path: routePath,
      expectedCount: expected.size,
      actualCount: actual.size,
      missing: setDifference(expected, actual),
      extra: setDifference(actual, expected),
    };
  } finally {
    await page.close();
  }
}

async function checkRouteReachability(
  context: BrowserContext,
  baseUrl: string,
  route: RouteEntry
): Promise<RouteReachabilityResult> {
  try {
    const response = await context.request.get(routeUrl(baseUrl, route.path), {
      maxRedirects: 5,
      timeout: 45_000,
    });

    return {
      routeType: route.routeType,
      path: route.path,
      status: response.status(),
      finalUrl: response.url(),
      ok: response.status() >= 200 && response.status() < 400,
    };
  } catch (error) {
    return {
      routeType: route.routeType,
      path: route.path,
      status: null,
      finalUrl: "",
      ok: false,
    };
  }
}

async function checkRelatedLinksOnPublicRoute(
  context: BrowserContext,
  baseUrl: string,
  route: RouteEntry,
  collectedInternalLinks: Map<string, Set<string>>
): Promise<RelatedLinkResult> {
  const page = await context.newPage();
  try {
    await page.setViewportSize(DESKTOP_VIEWPORT);
    await gotoPath(page, baseUrl, route.path);
    const links = await collectVisibleLinks(page);
    const internalLinks = links
      .map((link) => normalizeInternalHref(link.href))
      .filter((href): href is string => Boolean(href));

    collectedInternalLinks.set(route.path, new Set(internalLinks));

    return {
      routeType: "public",
      path: route.path,
      relatedLessonCount: links.filter((link) => link.visible && link.dataKind === "related-lesson").length,
      relatedStrategyCount: links.filter((link) => link.visible && link.dataKind === "related-strategy").length,
      relatedMarketGuideCount: internalLinks.filter((href) => href.startsWith("/markets/") && href !== route.path).length,
    };
  } finally {
    await page.close();
  }
}

async function checkRelatedLinksOnPaidRoute(
  context: BrowserContext,
  baseUrl: string,
  route: RouteEntry,
  collectedInternalLinks: Map<string, Set<string>>
): Promise<RelatedLinkResult> {
  const page = await context.newPage();
  try {
    await page.setViewportSize(DESKTOP_VIEWPORT);
    await gotoPath(page, baseUrl, route.path);
    await page.getByRole("button", { name: "Routine" }).click();
    await page.waitForTimeout(300);

    const links = await collectVisibleLinks(page);
    const internalLinks = links
      .map((link) => normalizeInternalHref(link.href))
      .filter((href): href is string => Boolean(href));

    collectedInternalLinks.set(route.path, new Set(internalLinks));

    return {
      routeType: "paid",
      path: route.path,
      relatedLessonCount: links.filter((link) => link.visible && link.dataKind === "related-lesson").length,
      relatedStrategyCount: links.filter((link) => link.visible && link.dataKind === "related-strategy").length,
      relatedMarketGuideCount: internalLinks.filter((href) => href.startsWith("/markets/")).length,
    };
  } finally {
    await page.close();
  }
}

async function collectIndexInternalLinks(
  context: BrowserContext,
  baseUrl: string,
  routePath: string,
  collectedInternalLinks: Map<string, Set<string>>
) {
  const page = await context.newPage();
  try {
    await page.setViewportSize(DESKTOP_VIEWPORT);
    await gotoPath(page, baseUrl, routePath);
    const links = await collectVisibleLinks(page);
    collectedInternalLinks.set(
      routePath,
      new Set(links.map((link) => normalizeInternalHref(link.href)).filter((href): href is string => Boolean(href)))
    );
  } finally {
    await page.close();
  }
}

async function checkInternalLinks(
  context: BrowserContext,
  baseUrl: string,
  collectedInternalLinks: Map<string, Set<string>>
): Promise<LinkStatusResult[]> {
  const uniqueLinks = new Set<string>();
  for (const links of collectedInternalLinks.values()) {
    for (const href of links) {
      uniqueLinks.add(canonicalInternalHrefForStatus(href));
    }
  }

  const results: LinkStatusResult[] = [];
  for (const href of [...uniqueLinks].sort()) {
    try {
      const response = await context.request.get(routeUrl(baseUrl, href), {
        maxRedirects: 5,
        timeout: 45_000,
      });
      results.push({
        source: "asset-flow",
        href,
        status: response.status(),
        finalUrl: response.url(),
        ok: response.status() >= 200 && response.status() < 400,
      });
    } catch {
      results.push({
        source: "asset-flow",
        href,
        status: null,
        finalUrl: "",
        ok: false,
      });
    }
  }

  return results;
}

function reviewCoverage(result: IndexCoverageResult, issues: QaIssue[]) {
  if (result.missing.length > 0 || result.actualCount !== result.expectedCount) {
    addIssue(issues, {
      severity: "blocker",
      check: `index-coverage-${sanitizeFilePart(result.name)}`,
      message: `${result.name} does not expose the required asset route set.`,
      details: result,
    });
  }
}

function reviewReachability(results: RouteReachabilityResult[], issues: QaIssue[]) {
  const failingRoutes = results.filter((result) => !result.ok);
  if (failingRoutes.length > 0) {
    addIssue(issues, {
      severity: "blocker",
      check: "route-reachability",
      message: "One or more asset routes failed request-level reachability.",
      details: failingRoutes,
    });
  }
}

function reviewRelatedLinks(results: RelatedLinkResult[], issues: QaIssue[]) {
  const failures = results.filter((result) => result.relatedLessonCount === 0 || result.relatedStrategyCount === 0);
  if (failures.length > 0) {
    addIssue(issues, {
      severity: "major",
      check: "related-links",
      message: "One or more asset detail pages do not expose related lesson and Strategy Lab links.",
      details: failures,
    });
  }

  const publicWithoutMarketGuides = results.filter((result) => result.routeType === "public" && result.relatedMarketGuideCount < 3);
  if (publicWithoutMarketGuides.length > 0) {
    addIssue(issues, {
      severity: "major",
      check: "related-market-guides",
      message: "One or more public asset pages expose fewer than three related market guide links.",
      details: publicWithoutMarketGuides,
    });
  }
}

function reviewBrokenLinks(results: LinkStatusResult[], issues: QaIssue[]) {
  const broken = results.filter((result) => !result.ok);
  if (broken.length > 0) {
    addIssue(issues, {
      severity: "blocker",
      check: "internal-links",
      message: "One or more internal links inside asset flows failed.",
      details: broken,
    });
  }
}

function buildMarkdownReport(report: OutputReport) {
  const lines = [
    "# Asset Navigation QA Report",
    "",
    `Started: ${report.startedAt}`,
    `Finished: ${report.finishedAt}`,
    `Base URL: ${report.baseUrl}`,
    "",
    "## Summary",
    "",
    `- Public asset routes expected: ${report.summary.expectedPublicRoutes}`,
    `- Paid asset routes expected: ${report.summary.expectedPaidRoutes}`,
    `- Unique internal links checked: ${report.summary.uniqueInternalLinksChecked}`,
    `- Blocker issues: ${report.summary.issues.blocker}`,
    `- Major issues: ${report.summary.issues.major}`,
    `- Minor issues: ${report.summary.issues.minor}`,
    "",
    "## Entry Points",
    "",
    "| Entry point | Path | Status |",
    "|---|---|---:|",
    ...report.entryPoints.map((entry) => `| ${entry.name} | \`${entry.path}\` | ${entry.status} |`),
    "",
    "## Index Coverage",
    "",
    "| Index | Path | Expected | Actual | Missing | Extra |",
    "|---|---|---:|---:|---:|---:|",
    ...report.indexCoverage.map((coverage) =>
      `| ${coverage.name} | \`${coverage.path}\` | ${coverage.expectedCount} | ${coverage.actualCount} | ${coverage.missing.length} | ${coverage.extra.length} |`
    ),
    "",
    "## Route Reachability",
    "",
    `- Public routes checked: ${report.routeReachability.filter((result) => result.routeType === "public").length}`,
    `- Paid routes checked: ${report.routeReachability.filter((result) => result.routeType === "paid").length}`,
    `- Failed route requests: ${report.routeReachability.filter((result) => !result.ok).length}`,
    "",
    "## Related Link Coverage",
    "",
    `- Asset detail pages checked: ${report.relatedLinks.length}`,
    `- Pages missing related lesson links: ${report.relatedLinks.filter((result) => result.relatedLessonCount === 0).length}`,
    `- Pages missing Strategy Lab links: ${report.relatedLinks.filter((result) => result.relatedStrategyCount === 0).length}`,
    "",
    "## Broken Internal Links",
    "",
    report.brokenInternalLinks.length === 0
      ? "No broken internal links were found inside asset flows."
      : "| Href | Status | Final URL |\n|---|---:|---|\n" +
        report.brokenInternalLinks
          .map((result) => `| \`${result.href}\` | ${result.status ?? "none"} | ${result.finalUrl} |`)
          .join("\n"),
    "",
    "## Screenshots",
    "",
    ...report.screenshots.map((shot) => `- \`${shot}\``),
    "",
    "## Exit Gate",
    "",
    `- Markets index links all 71 public assets: ${
      report.indexCoverage.find((coverage) => coverage.name === "Markets index")?.missing.length === 0 ? "yes" : "no"
    }`,
    `- Asset Lab index links all 71 paid assets: ${
      report.indexCoverage.find((coverage) => coverage.name === "Asset Lab index")?.missing.length === 0 ? "yes" : "no"
    }`,
    `- Required entry points pass: ${report.entryPoints.every((entry) => entry.status === "pass") ? "yes" : "no"}`,
    `- No broken internal links: ${report.brokenInternalLinks.length === 0 ? "yes" : "no"}`,
    `- No blocker or major issues: ${
      report.summary.issues.blocker === 0 && report.summary.issues.major === 0 ? "yes" : "no"
    }`,
  ];

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

  console.log("Asset Navigation QA");
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Expected routes: ${REQUIRED_PUBLIC_ROUTE_COUNT} public, ${REQUIRED_PAID_ROUTE_COUNT} paid`);

  const chromium = await loadPlaywrightChromium();
  const browser = await chromium.launch({ headless: process.env.ASSET_QA_HEADLESS !== "0" });
  const issues: QaIssue[] = [];
  const entryPoints: EntryPointResult[] = [];
  const indexCoverage: IndexCoverageResult[] = [];
  const routeReachability: RouteReachabilityResult[] = [];
  const relatedLinks: RelatedLinkResult[] = [];
  const screenshots: string[] = [];
  const collectedInternalLinks = new Map<string, Set<string>>();

  try {
    const publicDesktopContext = await browser.newContext({ viewport: DESKTOP_VIEWPORT });
    const paidDesktopContext = await browser.newContext({ viewport: DESKTOP_VIEWPORT });
    const paidMobileContext = await browser.newContext({ viewport: MOBILE_VIEWPORT });

    try {
      await login(paidDesktopContext, baseUrl);
      await login(paidMobileContext, baseUrl);

      await checkHomepageNavigation(publicDesktopContext, baseUrl, entryPoints, issues, screenshots);
      await checkDashboardNavigation(paidDesktopContext, paidMobileContext, baseUrl, entryPoints, issues, screenshots);

      const marketsCoverage = await checkIndexCoverage(
        publicDesktopContext,
        baseUrl,
        "Markets index",
        "/markets",
        inventory.publicRoutes,
        "/markets/",
        screenshots,
        "markets-index-desktop.png"
      );
      const assetLabCoverage = await checkIndexCoverage(
        paidDesktopContext,
        baseUrl,
        "Asset Lab index",
        "/asset-lab",
        inventory.paidRoutes,
        "/asset-lab/",
        screenshots,
        "asset-lab-index-desktop.png"
      );
      indexCoverage.push(marketsCoverage, assetLabCoverage);
      reviewCoverage(marketsCoverage, issues);
      reviewCoverage(assetLabCoverage, issues);

      await collectIndexInternalLinks(publicDesktopContext, baseUrl, "/markets", collectedInternalLinks);
      await collectIndexInternalLinks(paidDesktopContext, baseUrl, "/asset-lab", collectedInternalLinks);

      for (const route of inventory.publicRoutes) {
        const reachability = await checkRouteReachability(publicDesktopContext, baseUrl, route);
        routeReachability.push(reachability);
        relatedLinks.push(await checkRelatedLinksOnPublicRoute(publicDesktopContext, baseUrl, route, collectedInternalLinks));
        console.log(`${reachability.ok ? "PASS" : "CHECK"} public ${route.path}`);
      }

      for (const route of inventory.paidRoutes) {
        const reachability = await checkRouteReachability(paidDesktopContext, baseUrl, route);
        routeReachability.push(reachability);
        relatedLinks.push(await checkRelatedLinksOnPaidRoute(paidDesktopContext, baseUrl, route, collectedInternalLinks));
        console.log(`${reachability.ok ? "PASS" : "CHECK"} paid ${route.path}`);
      }

      reviewReachability(routeReachability, issues);
      reviewRelatedLinks(relatedLinks, issues);

      const internalLinkChecks = await checkInternalLinks(paidDesktopContext, baseUrl, collectedInternalLinks);
      const brokenInternalLinks = internalLinkChecks.filter((result) => !result.ok);
      reviewBrokenLinks(internalLinkChecks, issues);

      const finishedAt = new Date().toISOString();
      const report: OutputReport = {
        startedAt,
        finishedAt,
        baseUrl,
        summary: {
          expectedPublicRoutes: REQUIRED_PUBLIC_ROUTE_COUNT,
          expectedPaidRoutes: REQUIRED_PAID_ROUTE_COUNT,
          uniqueInternalLinksChecked: internalLinkChecks.length,
          issues: {
            blocker: countIssues(issues, "blocker"),
            major: countIssues(issues, "major"),
            minor: countIssues(issues, "minor"),
          },
        },
        entryPoints,
        indexCoverage,
        routeReachability,
        relatedLinks,
        brokenInternalLinks,
        screenshots,
        issues,
      };

      await writeReports(report);

      console.log(`\nReport written: ${path.relative(process.cwd(), JSON_REPORT_PATH)}`);
      console.log(`Markdown written: ${path.relative(process.cwd(), MARKDOWN_REPORT_PATH)}`);
      console.log(`Entry points checked: ${entryPoints.length}`);
      console.log(`Route requests checked: ${routeReachability.length}`);
      console.log(`Related pages checked: ${relatedLinks.length}`);
      console.log(`Unique internal links checked: ${internalLinkChecks.length}`);
      console.log(`Blocker: ${report.summary.issues.blocker}`);
      console.log(`Major: ${report.summary.issues.major}`);
      console.log(`Minor: ${report.summary.issues.minor}`);

      if (
        routeReachability.length !== REQUIRED_TOTAL_ROUTE_COUNT ||
        report.summary.issues.blocker > 0 ||
        report.summary.issues.major > 0 ||
        report.summary.issues.minor > 0
      ) {
        process.exitCode = 1;
      }
    } finally {
      await publicDesktopContext.close();
      await paidDesktopContext.close();
      await paidMobileContext.close();
    }
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
