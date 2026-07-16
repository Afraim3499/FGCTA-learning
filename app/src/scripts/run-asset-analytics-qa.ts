import fs from "fs/promises";
import path from "path";
import { loadPlaywrightChromium, type BrowserLike, type PageLike } from "./playwright-runtime";
import {
  ASSET_ANALYTICS_EVENT_DEFINITIONS,
  type AssetAnalyticsEventName,
  type AssetAnalyticsPayload,
  type AssetAnalyticsValue,
} from "../lib/asset-analytics-events";

type Severity = "blocker" | "major" | "minor";
type RouteType = "public" | "paid";

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

type CapturedBrowserEvent = {
  name: AssetAnalyticsEventName;
  payload: Record<string, AssetAnalyticsValue>;
  url: string;
  capturedAt: string;
  scenario: string;
  viewport: {
    name: string;
    width: number;
    height: number;
  };
};

type ScenarioResult = {
  name: string;
  viewport: CapturedBrowserEvent["viewport"];
  configured: boolean;
  events: CapturedBrowserEvent[];
  issues: QaIssue[];
};

type StaticCheckResult = {
  name: string;
  status: "pass" | "fail";
  details: Record<string, unknown>;
};

type QaReport = {
  startedAt: string;
  finishedAt: string;
  baseUrl: string;
  summary: {
    eventDefinitions: number;
    requiredEventsImplemented: number;
    publicRoutes: number;
    paidRoutes: number;
    capturedEvents: number;
    publicBrowserScenarios: number;
    paidBrowserConfigured: boolean;
    issues: Record<Severity, number>;
  };
  staticChecks: StaticCheckResult[];
  scenarios: ScenarioResult[];
  issues: QaIssue[];
};

const BASE_URL = process.env.ASSET_QA_BASE_URL ?? "http://localhost:3000";
const OUTPUT_DIR = path.join("docs", "qa", "asset-analytics");
const INVENTORY_PATH = path.join("docs", "asset-intelligence-route-inventory.json");

const REQUIRED_EVENTS = ASSET_ANALYTICS_EVENT_DEFINITIONS.map((event) => event.name);

const IMPLEMENTATION_FILES = [
  "src/app/layout.tsx",
  "src/lib/asset-analytics-client.ts",
  "src/lib/asset-analytics-events.ts",
  "src/components/asset-intelligence/AssetAnalyticsPageView.tsx",
  "src/components/asset-intelligence/AssetAnalyticsLink.tsx",
  "src/components/asset-intelligence/MarketsAssetDirectory.tsx",
  "src/app/(marketing)/markets/page.tsx",
  "src/app/(marketing)/markets/[assetClass]/[slug]/page.tsx",
  "src/app/(dashboard)/asset-lab/page.tsx",
  "src/app/(dashboard)/asset-lab/[assetClass]/[slug]/page.tsx",
  "src/components/asset-lab/AssetLabDetailClient.tsx",
];

function countIssues(issues: QaIssue[]): Record<Severity, number> {
  return {
    blocker: issues.filter((issue) => issue.severity === "blocker").length,
    major: issues.filter((issue) => issue.severity === "major").length,
    minor: issues.filter((issue) => issue.severity === "minor").length,
  };
}

function absoluteUrl(routePath: string) {
  return new URL(routePath, BASE_URL).toString();
}

async function readInventory(): Promise<Inventory> {
  const raw = await fs.readFile(INVENTORY_PATH, "utf8");
  return JSON.parse(raw) as Inventory;
}

async function readImplementationCorpus() {
  const entries = await Promise.all(
    IMPLEMENTATION_FILES.map(async (filePath) => ({
      filePath,
      text: await fs.readFile(filePath, "utf8"),
    }))
  );

  return {
    entries,
    text: entries.map((entry) => entry.text).join("\n"),
  };
}

function ensureEventImplementation(corpus: string): StaticCheckResult {
  const missing = REQUIRED_EVENTS.filter((eventName) => !corpus.includes(`"${eventName}"`));

  return {
    name: "required-event-implementation",
    status: missing.length === 0 ? "pass" : "fail",
    details: {
      expected: REQUIRED_EVENTS.length,
      implemented: REQUIRED_EVENTS.length - missing.length,
      missing,
    },
  };
}

function ensureVercelAnalyticsConfigured(corpus: string): StaticCheckResult {
  const hasPackageImport = corpus.includes("@vercel/analytics/next");
  const hasRootComponent = corpus.includes("<Analytics />");
  const hasTrackCall = corpus.includes("track(eventName");

  return {
    name: "vercel-analytics-configuration",
    status: hasPackageImport && hasRootComponent && hasTrackCall ? "pass" : "fail",
    details: {
      hasPackageImport,
      hasRootComponent,
      hasTrackCall,
    },
  };
}

function ensurePayloadDictionary(): StaticCheckResult {
  const missingPayloads = ASSET_ANALYTICS_EVENT_DEFINITIONS.filter((event) => event.requiredPayload.length === 0);
  const sensitiveAllowed = ASSET_ANALYTICS_EVENT_DEFINITIONS.filter((event) => event.sensitiveDataAllowed);
  const duplicateNames = REQUIRED_EVENTS.filter((name, index) => REQUIRED_EVENTS.indexOf(name) !== index);

  return {
    name: "event-dictionary-safety",
    status: missingPayloads.length === 0 && sensitiveAllowed.length === 0 && duplicateNames.length === 0 ? "pass" : "fail",
    details: {
      missingPayloads: missingPayloads.map((event) => event.name),
      sensitiveAllowed: sensitiveAllowed.map((event) => event.name),
      duplicateNames,
    },
  };
}

function staticChecksToIssues(checks: StaticCheckResult[]): QaIssue[] {
  return checks
    .filter((check) => check.status === "fail")
    .map((check) => ({
      severity: "blocker",
      check: check.name,
      message: `${check.name} failed`,
      details: check.details,
    }));
}

async function attachEventCapture(page: PageLike, captured: CapturedBrowserEvent[], scenario: string, viewport: CapturedBrowserEvent["viewport"]) {
  await page.exposeFunction("__captureAssetAnalytics", (event: unknown) => {
    const parsed = event as Omit<CapturedBrowserEvent, "scenario" | "viewport">;
    captured.push({
      ...parsed,
      scenario,
      viewport,
    });
  });

  await page.addInitScript(() => {
    const bridge = window as unknown as {
      __captureAssetAnalytics?: (event: unknown) => void;
    };

    window.addEventListener("lurnava:asset-analytics", (event) => {
      bridge.__captureAssetAnalytics?.((event as CustomEvent).detail);
    });
  });
}

async function waitForEvent(page: PageLike, events: CapturedBrowserEvent[], name: AssetAnalyticsEventName, startIndex = 0) {
  const deadline = Date.now() + 5000;

  while (Date.now() < deadline) {
    const match = events.find((event, index) => index >= startIndex && event.name === name);
    if (match) return match;
    await page.waitForTimeout(100);
  }

  throw new Error(`Timed out waiting for ${name}`);
}

async function clickVisible(page: PageLike, selector: string) {
  const locator = page.locator(selector);
  const count = await locator.count();

  for (let index = 0; index < count; index += 1) {
    const candidate = locator.nth(index);
    if (await candidate.isVisible()) {
      await candidate.click();
      return;
    }
  }

  throw new Error(`No visible element matched ${selector}`);
}

async function clickAndWaitForEvent(
  page: PageLike,
  events: CapturedBrowserEvent[],
  selector: string,
  eventName: AssetAnalyticsEventName
) {
  const startIndex = events.length;
  await clickVisible(page, selector);
  return waitForEvent(page, events, eventName, startIndex);
}

function assertPayloadSafety(events: CapturedBrowserEvent[]): QaIssue[] {
  const unsafe = events.filter((event) => {
    const payload = JSON.stringify(event.payload);
    return /@|password|token|secret|user_id|userid|email/i.test(payload);
  });

  return unsafe.map((event) => ({
    severity: "blocker",
    check: "privacy-safe-payload",
    message: `Unsafe payload marker found for ${event.name}`,
    details: {
      name: event.name,
      payload: event.payload,
      url: event.url,
    },
  }));
}

async function runPublicScenario(
  browser: BrowserLike,
  inventory: Inventory,
  scenarioName: string,
  viewport: CapturedBrowserEvent["viewport"],
  filterSelector: string,
  publicRoute: RouteEntry
): Promise<ScenarioResult> {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  const events: CapturedBrowserEvent[] = [];
  const issues: QaIssue[] = [];

  page.on("pageerror", (error) => {
    issues.push({
      severity: "major",
      check: "browser-page-error",
      message: error.message,
    });
  });

  try {
    await attachEventCapture(page, events, scenarioName, viewport);

    await page.goto(absoluteUrl("/markets"), { waitUntil: "networkidle" });
    await waitForEvent(page, events, "asset_markets_index_viewed");
    await clickAndWaitForEvent(page, events, filterSelector, "asset_class_filter_clicked");

    await page.goto(absoluteUrl(publicRoute.path), { waitUntil: "networkidle" });
    await waitForEvent(page, events, "asset_public_page_viewed");
    await clickAndWaitForEvent(page, events, '[data-asset-event="asset_public_cta_clicked"]', "asset_public_cta_clicked");

    await page.goto(absoluteUrl(publicRoute.path), { waitUntil: "networkidle" });
    await clickAndWaitForEvent(page, events, '[data-asset-event="asset_pricing_cta_clicked"]', "asset_pricing_cta_clicked");

    await page.goto(absoluteUrl(publicRoute.path), { waitUntil: "networkidle" });
    await clickAndWaitForEvent(page, events, '[data-asset-event="asset_related_lesson_clicked"]', "asset_related_lesson_clicked");

    await page.goto(absoluteUrl(publicRoute.path), { waitUntil: "networkidle" });
    await clickAndWaitForEvent(page, events, '[data-asset-event="asset_related_strategy_clicked"]', "asset_related_strategy_clicked");
  } catch (error) {
    issues.push({
      severity: "major",
      check: "public-browser-event-capture",
      message: error instanceof Error ? error.message : String(error),
      details: {
        scenarioName,
        route: publicRoute.path,
      },
    });
  } finally {
    await context.close();
  }

  issues.push(...assertPayloadSafety(events));

  return {
    name: scenarioName,
    viewport,
    configured: true,
    events,
    issues,
  };
}

async function loginForPaidScenario(page: PageLike, email: string, password: string) {
  await page.goto(absoluteUrl("/login?redirect=%2Fasset-lab"), { waitUntil: "networkidle" });
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
  await page.waitForURL((url) => url.pathname !== "/login", { timeout: 12000 });
}

async function runPaidScenario(browser: BrowserLike, inventory: Inventory, paidRoute: RouteEntry): Promise<ScenarioResult> {
  const email = process.env.ASSET_QA_PAID_EMAIL ?? process.env.ASSET_QA_EMAIL;
  const password = process.env.ASSET_QA_PAID_PASSWORD ?? process.env.ASSET_QA_PASSWORD;
  const viewport = { name: "desktop-paid", width: 1440, height: 1000 };

  if (!email || !password) {
    return {
      name: "paid-authenticated",
      viewport,
      configured: false,
      events: [],
      issues: [
        {
          severity: "minor",
          check: "paid-browser-credentials",
          message: "Authenticated paid analytics crawl skipped because QA credentials are not configured.",
        },
      ],
    };
  }

  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  const events: CapturedBrowserEvent[] = [];
  const issues: QaIssue[] = [];

  page.on("pageerror", (error) => {
    issues.push({
      severity: "major",
      check: "paid-browser-page-error",
      message: error.message,
    });
  });

  try {
    await attachEventCapture(page, events, "paid-authenticated", viewport);
    await loginForPaidScenario(page, email, password);
    await waitForEvent(page, events, "asset_lab_index_viewed");

    await page.goto(absoluteUrl(paidRoute.path), { waitUntil: "networkidle" });
    await waitForEvent(page, events, "asset_lab_page_viewed");

    let startIndex = events.length;
    await clickVisible(page, 'button[data-asset-tab="holdings"]');
    await waitForEvent(page, events, "asset_lab_tab_clicked", startIndex);
    await waitForEvent(page, events, "asset_lab_exposure_map_viewed", startIndex);

    startIndex = events.length;
    await clickVisible(page, 'button[data-asset-tab="claims"]');
    await waitForEvent(page, events, "asset_lab_tab_clicked", startIndex);
    await waitForEvent(page, events, "asset_lab_verified_claims_viewed", startIndex);

    startIndex = events.length;
    await clickVisible(page, 'button[data-asset-tab="sources"]');
    await waitForEvent(page, events, "asset_lab_tab_clicked", startIndex);
    await waitForEvent(page, events, "asset_lab_source_pack_viewed", startIndex);

    await clickAndWaitForEvent(page, events, 'button[data-asset-tab="routine"]', "asset_lab_tab_clicked");
    await clickAndWaitForEvent(page, events, '[data-asset-event="asset_related_lesson_clicked"]', "asset_related_lesson_clicked");

    await page.goto(absoluteUrl(paidRoute.path), { waitUntil: "networkidle" });
    await clickAndWaitForEvent(page, events, 'button[data-asset-tab="routine"]', "asset_lab_tab_clicked");
    await clickAndWaitForEvent(page, events, '[data-asset-event="asset_related_strategy_clicked"]', "asset_related_strategy_clicked");
  } catch (error) {
    issues.push({
      severity: "major",
      check: "paid-browser-event-capture",
      message: error instanceof Error ? error.message : String(error),
      details: {
        route: paidRoute.path,
      },
    });
  } finally {
    await context.close();
  }

  issues.push(...assertPayloadSafety(events));

  return {
    name: "paid-authenticated",
    viewport,
    configured: true,
    events,
    issues,
  };
}

function buildDictionaryMarkdown() {
  const rows = ASSET_ANALYTICS_EVENT_DEFINITIONS.map((event) => {
    const payload = event.requiredPayload.map((key) => `\`${key}\``).join(", ");
    return `| \`${event.name}\` | ${event.routeType} | ${event.trigger} | ${payload} |`;
  }).join("\n");

  return `# Asset Analytics Event Dictionary

| Event | Route type | Trigger | Required payload |
|---|---|---|---|
${rows}

Payload policy:

- Asset-specific events include asset slug and asset class.
- User state is one of \`logged_out\`, \`logged_in\`, \`paid\`, \`admin\`, or \`unknown\`.
- No event payload includes email, password, token, raw user id, or personal contact data.
- Analytics failure is swallowed by the browser tracker so the UI remains usable.
`;
}

function buildReportMarkdown(report: QaReport) {
  const issueRows = report.issues.length
    ? report.issues.map((issue) => `| ${issue.severity} | ${issue.check} | ${issue.message} |`).join("\n")
    : "No analytics QA issues were found.";

  const scenarioRows = report.scenarios
    .map((scenario) => `| ${scenario.name} | ${scenario.viewport.name} | ${scenario.configured ? "yes" : "no"} | ${scenario.events.length} | ${scenario.issues.length} |`)
    .join("\n");

  const checkRows = report.staticChecks
    .map((check) => `| ${check.name} | ${check.status} | \`${JSON.stringify(check.details).replace(/`/g, "'")}\` |`)
    .join("\n");

  return `# Asset Analytics QA Report

Started: ${report.startedAt}
Finished: ${report.finishedAt}
Base URL: ${report.baseUrl}

## Summary

- Event definitions: ${report.summary.eventDefinitions}
- Required events implemented: ${report.summary.requiredEventsImplemented}
- Public routes in inventory: ${report.summary.publicRoutes}
- Paid routes in inventory: ${report.summary.paidRoutes}
- Captured browser events: ${report.summary.capturedEvents}
- Public browser scenarios: ${report.summary.publicBrowserScenarios}
- Paid browser configured: ${report.summary.paidBrowserConfigured ? "yes" : "no"}
- Blocker issues: ${report.summary.issues.blocker}
- Major issues: ${report.summary.issues.major}
- Minor issues: ${report.summary.issues.minor}

## Static Checks

| Check | Status | Details |
|---|---|---|
${checkRows}

## Browser Scenarios

| Scenario | Viewport | Configured | Events captured | Issues |
|---|---|---|---:|---:|
${scenarioRows}

## Issue Table

${issueRows}

## Exit Gate

- Required event dictionary exists: yes
- Public desktop event confirmation: ${report.scenarios.some((scenario) => scenario.name === "public-desktop" && scenario.events.length > 0) ? "yes" : "no"}
- Public mobile event confirmation: ${report.scenarios.some((scenario) => scenario.name === "public-mobile" && scenario.events.length > 0) ? "yes" : "no"}
- Paid implementation coverage: ${report.staticChecks.find((check) => check.name === "required-event-implementation")?.status === "pass" ? "yes" : "no"}
- Blocker or major issues: ${report.summary.issues.blocker + report.summary.issues.major}
`;
}

async function writeOutputs(report: QaReport, allEvents: CapturedBrowserEvent[]) {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUTPUT_DIR, "asset-analytics-event-dictionary.json"),
    `${JSON.stringify(ASSET_ANALYTICS_EVENT_DEFINITIONS, null, 2)}\n`
  );
  await fs.writeFile(path.join(OUTPUT_DIR, "asset-analytics-event-dictionary.md"), buildDictionaryMarkdown());
  await fs.writeFile(path.join(OUTPUT_DIR, "asset-analytics-event-log.json"), `${JSON.stringify(allEvents, null, 2)}\n`);
  await fs.writeFile(path.join(OUTPUT_DIR, "asset-analytics-qa-report.json"), `${JSON.stringify(report, null, 2)}\n`);
  await fs.writeFile(path.join(OUTPUT_DIR, "asset-analytics-qa-report.md"), buildReportMarkdown(report));
}

async function run() {
  const startedAt = new Date().toISOString();
  const inventory = await readInventory();
  const { text: corpus } = await readImplementationCorpus();
  const staticChecks = [
    ensureEventImplementation(corpus),
    ensureVercelAnalyticsConfigured(corpus),
    ensurePayloadDictionary(),
  ];

  const issues: QaIssue[] = [...staticChecksToIssues(staticChecks)];
  const browser = await loadPlaywrightChromium().then((chromium) => chromium.launch({ headless: true }));
  const scenarios: ScenarioResult[] = [];

  try {
    scenarios.push(
      await runPublicScenario(
        browser,
        inventory,
        "public-desktop",
        { name: "desktop", width: 1440, height: 1000 },
        'button[data-asset-filter="crypto"]',
        inventory.publicRoutes[0]
      )
    );

    scenarios.push(
      await runPublicScenario(
        browser,
        inventory,
        "public-mobile",
        { name: "mobile", width: 390, height: 844 },
        'button[data-asset-filter="gold"]',
        inventory.publicRoutes[1] ?? inventory.publicRoutes[0]
      )
    );

    scenarios.push(await runPaidScenario(browser, inventory, inventory.paidRoutes[0]));
  } finally {
    await browser.close();
  }

  for (const scenario of scenarios) {
    issues.push(...scenario.issues);
  }

  const allEvents = scenarios.flatMap((scenario) => scenario.events);
  const implementedCount = Number(staticChecks.find((check) => check.name === "required-event-implementation")?.details.implemented ?? 0);
  const finishedAt = new Date().toISOString();
  const report: QaReport = {
    startedAt,
    finishedAt,
    baseUrl: BASE_URL,
    summary: {
      eventDefinitions: ASSET_ANALYTICS_EVENT_DEFINITIONS.length,
      requiredEventsImplemented: implementedCount,
      publicRoutes: inventory.summary.publicRouteCount,
      paidRoutes: inventory.summary.paidRouteCount,
      capturedEvents: allEvents.length,
      publicBrowserScenarios: scenarios.filter((scenario) => scenario.name.startsWith("public-")).length,
      paidBrowserConfigured: scenarios.some((scenario) => scenario.name === "paid-authenticated" && scenario.configured),
      issues: countIssues(issues),
    },
    staticChecks,
    scenarios,
    issues,
  };

  await writeOutputs(report, allEvents);

  console.log("Asset Analytics QA");
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Event definitions: ${report.summary.eventDefinitions}`);
  console.log(`Required events implemented: ${report.summary.requiredEventsImplemented}`);
  console.log(`Captured browser events: ${report.summary.capturedEvents}`);
  console.log(`Blocker: ${report.summary.issues.blocker}`);
  console.log(`Major: ${report.summary.issues.major}`);
  console.log(`Minor: ${report.summary.issues.minor}`);
  console.log(`Report written: ${path.join(OUTPUT_DIR, "asset-analytics-qa-report.md")}`);

  if (report.summary.issues.blocker > 0 || report.summary.issues.major > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
