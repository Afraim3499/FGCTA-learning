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

type ViewportConfig = {
  name: string;
  width: number;
  height: number;
};

type QaIssue = {
  severity: Severity;
  check: string;
  message: string;
  details?: unknown;
};

type RouteResult = {
  routeType: RouteType;
  assetClass: string;
  slug: string;
  name: string;
  symbol: string;
  path: string;
  viewport: ViewportConfig;
  status: number | null;
  finalUrl: string;
  durationMs: number;
  issues: QaIssue[];
  screenshotPath?: string;
};

type LayoutMetrics = {
  pageWidth: number;
  scrollWidth: number;
  overflowPixels: number;
  overflowOffenders: Array<{
    tag: string;
    text: string;
    left: number;
    right: number;
    width: number;
    className: string;
  }>;
  clippedText: Array<{
    tag: string;
    text: string;
    width: number;
    height: number;
    scrollWidth: number;
    clientWidth: number;
    scrollHeight: number;
    clientHeight: number;
    className: string;
  }>;
  overlaps: Array<{ first: string; second: string; overlapArea: number }>;
};

type ContentMetrics = {
  textLength: number;
  h1s: string[];
  sections: number;
  linkCount: number;
  externalLinkCount: number;
  hasRegisterCta: boolean;
  hasCurriculumCta: boolean;
  hasSourceContext: boolean;
  hasReviewedContext: boolean;
  hasAssetNameInH1: boolean;
  tabLabels: string[];
  hasPublicGuideLink: boolean;
};

const VIEWPORTS: ViewportConfig[] = [
  { name: "phone-360", width: 360, height: 800 },
  { name: "phone-390", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 1000 },
];

const OUTPUT_DIR = path.join(process.cwd(), "docs", "qa", "asset-visual");
const SCREENSHOT_DIR = path.join(OUTPUT_DIR, "screenshots");
const JSON_REPORT_PATH = path.join(OUTPUT_DIR, "asset-visual-qa-report.json");
const MARKDOWN_REPORT_PATH = path.join(OUTPUT_DIR, "asset-visual-qa-report.md");
const REQUIRED_PUBLIC_ROUTE_COUNT = 71;
const REQUIRED_PAID_ROUTE_COUNT = 71;
const REQUIRED_TOTAL_ROUTE_COUNT = 142;
const REQUIRED_PAID_TABS = ["Deep Identity", "Exposure Map", "Verified Claims", "Sources"];

const ignoredConsoleErrorPatterns = [
  /favicon/i,
  /ResizeObserver loop completed/i,
  /Download the React DevTools/i,
];

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/+$/, "");
}

function routeUrl(baseUrl: string, routePath: string) {
  return `${normalizeBaseUrl(baseUrl)}${routePath}`;
}

function sanitizeFilePart(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
}

function hasBlockingOrMajorIssues(result: RouteResult) {
  return result.issues.some((issue) => issue.severity === "blocker" || issue.severity === "major");
}

function addIssue(issues: QaIssue[], issue: QaIssue) {
  issues.push(issue);
}

function countIssues(results: RouteResult[], severity: Severity) {
  return results.reduce((total, result) => total + result.issues.filter((issue) => issue.severity === severity).length, 0);
}

function readPositiveIntEnv(name: string) {
  const raw = process.env[name];
  if (!raw) return null;
  const value = Number.parseInt(raw, 10);
  return Number.isFinite(value) && value > 0 ? value : null;
}

function filterRoutes(routes: RouteEntry[], routeFilter: string | undefined) {
  if (!routeFilter) return routes;
  const normalizedFilter = routeFilter.toLowerCase();
  return routes.filter((route) =>
    [route.path, route.slug, route.name, route.symbol, route.assetClass].some((value) =>
      value.toLowerCase().includes(normalizedFilter)
    )
  );
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
  await fs.rm(SCREENSHOT_DIR, { recursive: true, force: true });
  await fs.mkdir(SCREENSHOT_DIR, { recursive: true });
}

function filteredConsoleErrors(consoleErrors: string[]) {
  return consoleErrors.filter((message) => !ignoredConsoleErrorPatterns.some((pattern) => pattern.test(message)));
}

async function login(context: BrowserContext, baseUrl: string) {
  const email = process.env.ASSET_QA_EMAIL;
  const password = process.env.ASSET_QA_PASSWORD;

  if (!email || !password) {
    throw new Error("Set ASSET_QA_EMAIL and ASSET_QA_PASSWORD before checking paid Asset Lab routes.");
  }

  const page = await context.newPage();
  try {
    await page.goto(routeUrl(baseUrl, "/login"), { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.fill('input[name="email"]', email, { timeout: 15_000 });
    await page.fill('input[name="password"]', password, { timeout: 15_000 });

    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForURL((url) => !url.pathname.includes("/login"), { timeout: 25_000 }),
    ]);
    await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => undefined);

    if (new URL(page.url()).pathname.includes("/login")) {
      throw new Error("Login did not leave the login route.");
    }
  } finally {
    await page.close();
  }
}

async function clickVisibleButton(page: Page, label: string) {
  const buttons = page.getByRole("button", { name: label, exact: true });
  const count = await buttons.count();

  for (let index = 0; index < count; index += 1) {
    const button = buttons.nth(index);
    if (await button.isVisible().catch(() => false)) {
      await button.evaluate((element) => {
        if (element instanceof HTMLButtonElement) {
          element.click();
        }
      });
      return true;
    }
  }

  return false;
}

async function collectLayoutMetrics(page: Page): Promise<LayoutMetrics> {
  return page.evaluate(`(() => {
    function isVisible(element) {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
    }

    function clipsContent(element) {
      const style = window.getComputedStyle(element);
      return style.overflowX !== "visible" || style.overflowY !== "visible";
    }

    function getVisibleRect(element) {
      const baseRect = element.getBoundingClientRect();
      let left = baseRect.left;
      let top = baseRect.top;
      let right = baseRect.right;
      let bottom = baseRect.bottom;
      let current = element.parentElement;

      while (current && current !== document.body && current !== document.documentElement) {
        if (clipsContent(current)) {
          const parentRect = current.getBoundingClientRect();
          left = Math.max(left, parentRect.left);
          top = Math.max(top, parentRect.top);
          right = Math.min(right, parentRect.right);
          bottom = Math.min(bottom, parentRect.bottom);
        }
        current = current.parentElement;
      }

      if (right <= left || bottom <= top) return null;

      return {
        left,
        top,
        right,
        bottom,
        width: right - left,
        height: bottom - top,
      };
    }

    function hasScrollableAncestor(element) {
      let current = element;
      while (current) {
        const style = window.getComputedStyle(current);
        const overflowX = style.overflowX;
        const overflowY = style.overflowY;
        if (overflowX === "auto" || overflowX === "scroll" || overflowY === "auto" || overflowY === "scroll") {
          return true;
        }
        current = current.parentElement;
      }
      return false;
    }

    const selector = [
      "h1",
      "h2",
      "h3",
      "h4",
      "p",
      "a",
      "button",
      "span",
      "td",
      "th",
      "[role='button']",
    ].join(",");

    const root = document.documentElement;
    const body = document.body;
    const pageWidth = window.innerWidth;
    const scrollWidth = Math.max(root.scrollWidth, body?.scrollWidth ?? 0);
    const overflowPixels = Math.max(0, scrollWidth - pageWidth);
    const overflowOffenders = Array.from(document.querySelectorAll("*"))
      .filter(isVisible)
      .map((element) => {
        const rect = getVisibleRect(element);
        if (!rect) return null;
        return {
          tag: element.tagName.toLowerCase(),
          text: (element.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 90),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          className: String(element.getAttribute("class") ?? "").slice(0, 130),
        };
      })
      .filter(Boolean)
      .filter((item) => item.right > pageWidth + 2 || item.left < -2)
      .slice(0, 12);

    const clippedText = Array.from(document.querySelectorAll(selector))
      .filter(isVisible)
      .filter((element) => (element.textContent ?? "").trim().length > 4)
      .filter((element) => !hasScrollableAncestor(element))
      .map((element) => {
        const style = window.getComputedStyle(element);
        const widthClipped =
          element.scrollWidth > element.clientWidth + 4 &&
          (style.overflowX === "hidden" || style.overflowX === "clip" || style.textOverflow === "ellipsis");
        const heightClipped =
          element.scrollHeight > element.clientHeight + 4 &&
          (style.overflowY === "hidden" || style.overflowY === "clip");

        if (!widthClipped && !heightClipped) return null;

        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName.toLowerCase(),
          text: (element.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 110),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          scrollWidth: element.scrollWidth,
          clientWidth: element.clientWidth,
          scrollHeight: element.scrollHeight,
          clientHeight: element.clientHeight,
          className: String(element.getAttribute("class") ?? "").slice(0, 130),
        };
      })
      .filter(Boolean)
      .slice(0, 12);

    const interactiveElements = Array.from(document.querySelectorAll("a,button,[role='button']"))
      .filter(isVisible)
      .map((element, index) => {
        const rect = getVisibleRect(element);
        if (!rect) return null;
        return {
          index,
          element,
          tag: element.tagName.toLowerCase(),
          text: (element.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 80),
          left: rect.left,
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          width: rect.width,
          height: rect.height,
        };
      })
      .filter(Boolean)
      .filter((item) => item.width >= 8 && item.height >= 8);

    const overlaps = [];
    for (let firstIndex = 0; firstIndex < interactiveElements.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < interactiveElements.length; secondIndex += 1) {
        const first = interactiveElements[firstIndex];
        const second = interactiveElements[secondIndex];

        if (first.element.contains(second.element) || second.element.contains(first.element)) {
          continue;
        }

        const overlapWidth = Math.max(0, Math.min(first.right, second.right) - Math.max(first.left, second.left));
        const overlapHeight = Math.max(0, Math.min(first.bottom, second.bottom) - Math.max(first.top, second.top));
        const overlapArea = overlapWidth * overlapHeight;

        if (overlapArea > 24) {
          overlaps.push({
            first: first.tag + ": " + first.text,
            second: second.tag + ": " + second.text,
            overlapArea: Math.round(overlapArea),
          });
        }
      }
    }

    return {
      pageWidth,
      scrollWidth,
      overflowPixels,
      overflowOffenders,
      clippedText,
      overlaps: overlaps.slice(0, 12),
    };
  })()`);
}

async function collectContentMetrics(page: Page, route: RouteEntry): Promise<ContentMetrics> {
  const assetName = JSON.stringify(route.name.toLowerCase());
  const publicGuidePath = JSON.stringify(`/markets/${route.assetClass}/${route.slug}`);

  return page.evaluate(`(() => {
    const assetName = ${assetName};
    const publicGuidePath = ${publicGuidePath};
    const bodyText = document.body.innerText.replace(/\s+/g, " ").trim();
    const h1s = Array.from(document.querySelectorAll("h1")).map((heading) => heading.textContent?.trim() ?? "");
    const sections = Array.from(document.querySelectorAll("main section")).length;
    const visibleLinks = Array.from(document.querySelectorAll("a"))
      .filter((link) => {
        const rect = link.getBoundingClientRect();
        const style = window.getComputedStyle(link);
        return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
      })
      .map((link) => ({
        text: (link.textContent ?? "").trim().replace(/\s+/g, " "),
        href: link.getAttribute("href") ?? "",
        target: link.getAttribute("target") ?? "",
      }));
    const visibleButtons = Array.from(document.querySelectorAll("button"))
      .filter((button) => {
        const rect = button.getBoundingClientRect();
        const style = window.getComputedStyle(button);
        return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
      })
      .map((button) => (button.textContent ?? "").trim().replace(/\s+/g, " "));

    return {
      textLength: bodyText.length,
      h1s,
      sections,
      linkCount: visibleLinks.length,
      externalLinkCount: visibleLinks.filter((link) => link.target === "_blank").length,
      hasRegisterCta: visibleLinks.some((link) => link.href === "/register"),
      hasCurriculumCta: visibleLinks.some((link) => link.href === "/curriculum"),
      hasSourceContext: bodyText.includes("Source and review trail") || bodyText.includes("Where this profile is anchored."),
      hasReviewedContext: bodyText.includes("Reviewed"),
      hasAssetNameInH1: h1s.some((heading) => heading.toLowerCase().includes(assetName)),
      tabLabels: visibleButtons,
      hasPublicGuideLink: visibleLinks.some((link) => link.href.includes(publicGuidePath)),
    };
  })()`);
}

function reviewContentMetrics(route: RouteEntry, metrics: ContentMetrics, issues: QaIssue[]) {
  if (metrics.h1s.length === 0) {
    addIssue(issues, {
      severity: "blocker",
      check: "heading",
      message: "No visible H1 was found.",
    });
  }

  if (metrics.h1s.length > 1) {
    addIssue(issues, {
      severity: "major",
      check: "heading",
      message: "More than one visible H1 was found.",
      details: metrics.h1s,
    });
  }

  if (!metrics.hasAssetNameInH1) {
    addIssue(issues, {
      severity: "major",
      check: "heading",
      message: "H1 does not include the asset name.",
      details: metrics.h1s,
    });
  }

  if (route.routeType === "public") {
    if (metrics.textLength < 3_500) {
      addIssue(issues, {
        severity: "major",
        check: "public-depth",
        message: "Public page has too little visible educational content for the landing-page standard.",
        details: { textLength: metrics.textLength },
      });
    }

    if (metrics.sections < 8) {
      addIssue(issues, {
        severity: "major",
        check: "public-structure",
        message: "Public page has too few content sections for the required landing-page shape.",
        details: { sections: metrics.sections },
      });
    }

    if (!metrics.hasRegisterCta || !metrics.hasCurriculumCta) {
      addIssue(issues, {
        severity: "major",
        check: "public-cta",
        message: "Public page is missing one of the required conversion links.",
        details: { hasRegisterCta: metrics.hasRegisterCta, hasCurriculumCta: metrics.hasCurriculumCta },
      });
    }

    if (metrics.externalLinkCount < Math.min(3, route.sourceCount)) {
      addIssue(issues, {
        severity: "major",
        check: "public-source-context",
        message: "Public page does not show enough visible source context.",
        details: { externalLinkCount: metrics.externalLinkCount },
      });
    }
  }

  if (route.routeType === "paid") {
    if (metrics.textLength < 1_200) {
      addIssue(issues, {
        severity: "major",
        check: "paid-depth",
        message: "Asset Lab overview has too little visible workspace content.",
        details: { textLength: metrics.textLength },
      });
    }

    if (!metrics.hasPublicGuideLink) {
      addIssue(issues, {
        severity: "minor",
        check: "paid-public-link",
        message: "Asset Lab page does not expose a visible public guide link.",
      });
    }
  }
}

function reviewLayoutMetrics(metrics: LayoutMetrics, issues: QaIssue[], checkPrefix = "layout") {
  if (metrics.overflowPixels > 2) {
    addIssue(issues, {
      severity: "major",
      check: `${checkPrefix}-horizontal-overflow`,
      message: `Page creates ${metrics.overflowPixels}px of horizontal overflow.`,
      details: metrics.overflowOffenders,
    });
  }

  if (metrics.clippedText.length > 0) {
    addIssue(issues, {
      severity: "major",
      check: `${checkPrefix}-clipped-text`,
      message: "Visible text appears clipped.",
      details: metrics.clippedText,
    });
  }

  if (metrics.overlaps.length > 0) {
    addIssue(issues, {
      severity: "major",
      check: `${checkPrefix}-overlap`,
      message: "Clickable elements appear to overlap.",
      details: metrics.overlaps,
    });
  }
}

async function reviewPaidTabs(page: Page, route: RouteEntry, issues: QaIssue[]) {
  for (const label of REQUIRED_PAID_TABS) {
    const clicked = await clickVisibleButton(page, label);
    if (!clicked) {
      addIssue(issues, {
        severity: "major",
        check: `paid-tab-${sanitizeFilePart(label)}`,
        message: `Could not activate the ${label} tab.`,
      });
      continue;
    }

    await page.waitForTimeout(250);

    const safeLabel = JSON.stringify(label);
    const tabState = (await page.evaluate(`(() => {
      const expectedLabel = ${safeLabel};
      const activeHeading = document.querySelector("section h2")?.textContent?.trim() ?? "";
      const bodyText = document.body.innerText.replace(/\s+/g, " ").trim();
      return {
        activeHeading,
        textLength: bodyText.length,
        includesExpectedLabel: activeHeading === expectedLabel || bodyText.includes(expectedLabel),
      };
    })()`)) as { activeHeading: string; textLength: number; includesExpectedLabel: boolean };

    if (!tabState.includesExpectedLabel) {
      addIssue(issues, {
        severity: "major",
        check: `paid-tab-${sanitizeFilePart(label)}`,
        message: `The ${label} tab did not render the expected active workspace heading.`,
        details: tabState,
      });
    }

    const minimumTextLength = label === "Sources" ? 700 : 1_000;
    if (tabState.textLength < minimumTextLength) {
      addIssue(issues, {
        severity: "major",
        check: `paid-tab-${sanitizeFilePart(label)}-content`,
        message: `The ${label} tab has too little visible content.`,
        details: tabState,
      });
    }

    reviewLayoutMetrics(await collectLayoutMetrics(page), issues, `paid-tab-${sanitizeFilePart(label)}`);
  }

  await clickVisibleButton(page, "Overview").catch(() => undefined);
}

async function checkRoute(context: BrowserContext, baseUrl: string, route: RouteEntry, viewport: ViewportConfig): Promise<RouteResult> {
  const page = await context.newPage();
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  const issues: QaIssue[] = [];
  const startedAt = Date.now();
  let status: number | null = null;
  let finalUrl = "";

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  try {
    const response = await page.goto(routeUrl(baseUrl, route.path), { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => undefined);
    await page.waitForTimeout(350);

    status = response?.status() ?? null;
    finalUrl = page.url();

    if (!response) {
      addIssue(issues, {
        severity: "blocker",
        check: "http",
        message: "Route did not return an HTTP response.",
      });
    } else if (status !== 200) {
      addIssue(issues, {
        severity: status && status >= 500 ? "blocker" : "major",
        check: "http",
        message: `Route returned HTTP ${status}.`,
      });
    }

    if (route.routeType === "paid" && new URL(finalUrl).pathname.includes("/login")) {
      addIssue(issues, {
        severity: "blocker",
        check: "auth",
        message: "Authenticated paid route redirected to login.",
        details: { finalUrl },
      });
    }

    reviewContentMetrics(route, await collectContentMetrics(page, route), issues);
    reviewLayoutMetrics(await collectLayoutMetrics(page), issues);

    if (route.routeType === "paid") {
      await reviewPaidTabs(page, route, issues);
    }

    const pageConsoleErrors = filteredConsoleErrors(consoleErrors);
    if (pageConsoleErrors.length > 0) {
      addIssue(issues, {
        severity: "major",
        check: "console-errors",
        message: "Console errors were emitted while rendering the route.",
        details: pageConsoleErrors.slice(0, 8),
      });
    }

    if (pageErrors.length > 0) {
      addIssue(issues, {
        severity: "blocker",
        check: "runtime-errors",
        message: "Page runtime errors were emitted while rendering the route.",
        details: pageErrors.slice(0, 8),
      });
    }
  } catch (error) {
    addIssue(issues, {
      severity: "blocker",
      check: "route-check",
      message: error instanceof Error ? error.message : String(error),
    });
    finalUrl = page.url();
  }

  const result: RouteResult = {
    routeType: route.routeType,
    assetClass: route.assetClass,
    slug: route.slug,
    name: route.name,
    symbol: route.symbol,
    path: route.path,
    viewport,
    status,
    finalUrl,
    durationMs: Date.now() - startedAt,
    issues,
  };

  if (issues.length > 0) {
    const screenshotName = `${viewport.name}-${route.routeType}-${route.assetClass}-${route.slug}.png`;
    const screenshotPath = path.join(SCREENSHOT_DIR, screenshotName);
    await page.screenshot({ path: screenshotPath, fullPage: true }).catch(() => undefined);
    result.screenshotPath = path.relative(process.cwd(), screenshotPath).replace(/\\/g, "/");
  }

  await page.close();
  return result;
}

async function markPaidRoutesBlocked(
  routes: RouteEntry[],
  viewport: ViewportConfig,
  message: string
): Promise<RouteResult[]> {
  return routes.map((route) => ({
    routeType: route.routeType,
    assetClass: route.assetClass,
    slug: route.slug,
    name: route.name,
    symbol: route.symbol,
    path: route.path,
    viewport,
    status: null,
    finalUrl: "",
    durationMs: 0,
    issues: [
      {
        severity: "blocker",
        check: "auth-setup",
        message,
      },
    ],
  }));
}

function buildMarkdownReport(results: RouteResult[], baseUrl: string, startedAt: string, finishedAt: string) {
  const blockerCount = countIssues(results, "blocker");
  const majorCount = countIssues(results, "major");
  const minorCount = countIssues(results, "minor");
  const checkedRouteViews = results.length;
  const routes = new Set(results.map((result) => `${result.routeType}:${result.path}`)).size;
  const failingResults = results.filter((result) => result.issues.length > 0);

  const lines: string[] = [
    "# Asset Visual QA Report",
    "",
    `Started: ${startedAt}`,
    `Finished: ${finishedAt}`,
    `Base URL: ${baseUrl}`,
    "",
    "## Summary",
    "",
    `- Unique routes checked: ${routes}`,
    `- Route and viewport checks: ${checkedRouteViews}`,
    `- Required route and viewport checks: ${REQUIRED_TOTAL_ROUTE_COUNT * VIEWPORTS.length}`,
    `- Blocker issues: ${blockerCount}`,
    `- Major issues: ${majorCount}`,
    `- Minor issues: ${minorCount}`,
    "",
    "## Viewport Coverage",
    "",
    "| Viewport | Size | Checks | Routes With Issues |",
    "|---|---:|---:|---:|",
  ];

  for (const viewport of VIEWPORTS) {
    const viewportResults = results.filter((result) => result.viewport.name === viewport.name);
    lines.push(
      `| ${viewport.name} | ${viewport.width}x${viewport.height} | ${viewportResults.length} | ${
        viewportResults.filter((result) => result.issues.length > 0).length
      } |`
    );
  }

  lines.push("", "## Issue Table", "");

  if (failingResults.length === 0) {
    lines.push("No visual QA issues were found.");
  } else {
    lines.push("| Route | Type | Viewport | Severity | Check | Screenshot |");
    lines.push("|---|---|---|---|---|---|");

    for (const result of failingResults) {
      for (const issue of result.issues) {
        lines.push(
          `| \`${result.path}\` | ${result.routeType} | ${result.viewport.name} | ${issue.severity} | ${issue.check} | ${
            result.screenshotPath ? `\`${result.screenshotPath}\`` : ""
          } |`
        );
      }
    }
  }

  lines.push("", "## Exit Gate", "");
  lines.push(`- 142 routes checked: ${routes === REQUIRED_TOTAL_ROUTE_COUNT ? "yes" : "no"}`);
  lines.push(
    `- 4 viewports per route checked: ${checkedRouteViews === REQUIRED_TOTAL_ROUTE_COUNT * VIEWPORTS.length ? "yes" : "no"}`
  );
  lines.push(`- 0 blocker issues: ${blockerCount === 0 ? "yes" : "no"}`);
  lines.push(`- 0 major issues: ${majorCount === 0 ? "yes" : "no"}`);

  return lines.join("\n");
}

async function writeReports(results: RouteResult[], baseUrl: string, startedAt: string, finishedAt: string) {
  const report = {
    startedAt,
    finishedAt,
    baseUrl,
    required: {
      routeCount: REQUIRED_TOTAL_ROUTE_COUNT,
      routeViewportChecks: REQUIRED_TOTAL_ROUTE_COUNT * VIEWPORTS.length,
      viewports: VIEWPORTS,
    },
    summary: {
      uniqueRouteCount: new Set(results.map((result) => `${result.routeType}:${result.path}`)).size,
      routeViewportChecks: results.length,
      issueCounts: {
        blocker: countIssues(results, "blocker"),
        major: countIssues(results, "major"),
        minor: countIssues(results, "minor"),
      },
      routesWithIssues: results.filter((result) => result.issues.length > 0).length,
      routesWithBlockingOrMajorIssues: results.filter(hasBlockingOrMajorIssues).length,
    },
    results,
  };

  await fs.writeFile(JSON_REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  await fs.writeFile(MARKDOWN_REPORT_PATH, `${buildMarkdownReport(results, baseUrl, startedAt, finishedAt)}\n`);
}

async function run() {
  const baseUrl = normalizeBaseUrl(process.env.ASSET_QA_BASE_URL ?? "http://localhost:3000");
  const startedAt = new Date().toISOString();
  const inventory = await readInventory();
  const routeLimit = readPositiveIntEnv("ASSET_QA_ROUTE_LIMIT");
  const viewportLimit = readPositiveIntEnv("ASSET_QA_VIEWPORT_LIMIT");
  const routeFilter = process.env.ASSET_QA_ROUTE_FILTER;
  const activeViewports = viewportLimit ? VIEWPORTS.slice(0, viewportLimit) : VIEWPORTS;
  const filteredPublicRoutes = filterRoutes(inventory.publicRoutes, routeFilter);
  const filteredPaidRoutes = filterRoutes(inventory.paidRoutes, routeFilter);
  const publicRoutes = routeLimit ? filteredPublicRoutes.slice(0, routeLimit) : filteredPublicRoutes;
  const paidRoutes = routeLimit ? filteredPaidRoutes.slice(0, routeLimit) : filteredPaidRoutes;
  await resetOutputDir();

  console.log(`Asset Visual QA`);
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Routes: ${publicRoutes.length + paidRoutes.length}`);
  console.log(`Viewports: ${activeViewports.map((viewport) => `${viewport.width}x${viewport.height}`).join(", ")}`);

  const chromium = await loadPlaywrightChromium();
  const browser = await chromium.launch({ headless: process.env.ASSET_QA_HEADLESS !== "0" });
  const results: RouteResult[] = [];

  try {
    for (const viewport of activeViewports) {
      console.log(`\nChecking viewport ${viewport.name} (${viewport.width}x${viewport.height})`);

      const publicContext = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });

      try {
        for (const route of publicRoutes) {
          const result = await checkRoute(publicContext, baseUrl, route, viewport);
          results.push(result);
          console.log(
            `${result.issues.length === 0 ? "PASS" : "CHECK"} ${viewport.name} public ${route.assetClass}/${route.slug} (${result.issues.length})`
          );
        }
      } finally {
        await publicContext.close();
      }

      const paidContext = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });

      try {
        await login(paidContext, baseUrl);

        for (const route of paidRoutes) {
          const result = await checkRoute(paidContext, baseUrl, route, viewport);
          results.push(result);
          console.log(
            `${result.issues.length === 0 ? "PASS" : "CHECK"} ${viewport.name} paid ${route.assetClass}/${route.slug} (${result.issues.length})`
          );
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`Paid route setup failed for ${viewport.name}: ${message}`);
        results.push(...(await markPaidRoutesBlocked(paidRoutes, viewport, message)));
      } finally {
        await paidContext.close();
      }
    }
  } finally {
    await browser.close();
  }

  const finishedAt = new Date().toISOString();
  await writeReports(results, baseUrl, startedAt, finishedAt);

  const blockerCount = countIssues(results, "blocker");
  const majorCount = countIssues(results, "major");
  const minorCount = countIssues(results, "minor");

  console.log(`\nReport written: ${path.relative(process.cwd(), JSON_REPORT_PATH)}`);
  console.log(`Markdown written: ${path.relative(process.cwd(), MARKDOWN_REPORT_PATH)}`);
  console.log(`Checked ${results.length} route and viewport combinations.`);
  console.log(`Blocker: ${blockerCount}`);
  console.log(`Major: ${majorCount}`);
  console.log(`Minor: ${minorCount}`);

  if (results.length !== REQUIRED_TOTAL_ROUTE_COUNT * VIEWPORTS.length || blockerCount > 0 || majorCount > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
