import fs from "fs/promises";
import path from "path";
import { loadPlaywrightChromium, type BrowserContextLike as BrowserContext, type PageLike as Page } from "./playwright-runtime";

type Severity = "blocker" | "major" | "minor";
type UserState = "logged-out" | "authenticated-without-access" | "active-access" | "admin";
type ExpectedOutcome = "login-redirect" | "upgrade-gate" | "workspace";

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

type RouteAccessResult = {
  state: UserState;
  path: string;
  expectedOutcome: ExpectedOutcome;
  status: number | null;
  finalUrl: string;
  passed: boolean;
  details: Record<string, unknown>;
};

type UserStateResult = {
  state: UserState;
  configured: boolean;
  expectedOutcome: ExpectedOutcome;
  routesChecked: number;
  passed: number;
  failed: number;
  notes: string[];
  screenshotPath?: string;
};

type PublicLeakResult = {
  path: string;
  status: number | null;
  paidOnlyMarkers: string[];
  passed: boolean;
};

type OutputReport = {
  startedAt: string;
  finishedAt: string;
  baseUrl: string;
  summary: {
    publicRoutesCheckedForLeaks: number;
    paidRoutesCheckedLoggedOut: number;
    issues: Record<Severity, number>;
    configuredAuthenticatedStates: number;
    deferredAuthenticatedStates: UserState[];
  };
  staticChecks: StaticCheck[];
  userStates: UserStateResult[];
  routeAccess: RouteAccessResult[];
  publicLeakChecks: PublicLeakResult[];
  screenshots: string[];
  issues: QaIssue[];
};

const REQUIRED_PUBLIC_ROUTE_COUNT = 71;
const REQUIRED_PAID_ROUTE_COUNT = 71;
const REQUIRED_TOTAL_ROUTE_COUNT = 142;
const OUTPUT_DIR = path.join(process.cwd(), "docs", "qa", "asset-access-control");
const SCREENSHOT_DIR = path.join(OUTPUT_DIR, "screenshots");
const JSON_REPORT_PATH = path.join(OUTPUT_DIR, "asset-access-control-qa-report.json");
const MARKDOWN_REPORT_PATH = path.join(OUTPUT_DIR, "asset-access-control-qa-report.md");

const paidOnlyMarkers = [
  "Active workspace",
  "Deep Identity",
  "Exposure Map",
  "Verified Claims",
  "Research routine",
  "Source basis:",
  "holderExposureMap",
  "sourceBackedClaims",
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

function sanitizeFilePart(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
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

async function readSource(relativePath: string) {
  return fs.readFile(path.join(process.cwd(), relativePath), "utf8");
}

async function collectApiRouteFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectApiRouteFiles(fullPath)));
    } else if (entry.isFile() && entry.name === "route.ts") {
      files.push(fullPath);
    }
  }

  return files;
}

async function runStaticChecks(): Promise<{ checks: StaticCheck[]; issues: QaIssue[] }> {
  const checks: StaticCheck[] = [];
  const issues: QaIssue[] = [];

  const [
    middlewareSource,
    assetLabIndexSource,
    assetLabDetailSource,
    accessSource,
    schemaSource,
    webhookSource,
    authActionsSource,
  ] = await Promise.all([
    readSource(path.join("src", "utils", "supabase", "middleware.ts")),
    readSource(path.join("src", "app", "(dashboard)", "asset-lab", "page.tsx")),
    readSource(path.join("src", "app", "(dashboard)", "asset-lab", "[assetClass]", "[slug]", "page.tsx")),
    readSource(path.join("src", "lib", "asset-lab-access.ts")),
    readSource(path.join("prisma", "schema.prisma")),
    readSource(path.join("src", "app", "api", "webhooks", "stripe", "route.ts")),
    readSource(path.join("src", "lib", "auth-actions.ts")),
  ]);

  const requiredChecks: Array<{ name: string; passed: boolean; details: string; severity: Severity }> = [
    {
      name: "middleware-protects-asset-lab",
      passed: middlewareSource.includes('"/asset-lab"') && middlewareSource.includes("redirect"),
      details: "The unauthenticated route prefilter includes /asset-lab and redirects to login.",
      severity: "blocker",
    },
    {
      name: "asset-lab-index-uses-server-gate",
      passed:
        assetLabIndexSource.includes("getAssetLabAccessState") &&
        assetLabIndexSource.includes("AssetLabAccessNotice") &&
        assetLabIndexSource.includes('dynamic = "force-dynamic"'),
      details: "The paid index route checks access in the Server Component and renders a gate before data lists.",
      severity: "blocker",
    },
    {
      name: "asset-lab-detail-uses-server-gate",
      passed:
        assetLabDetailSource.includes("getAssetLabAccessState") &&
        assetLabDetailSource.includes("AssetLabAccessNotice") &&
        assetLabDetailSource.includes('dynamic = "force-dynamic"') &&
        !assetLabDetailSource.includes("generateStaticParams"),
      details: "The paid detail route checks access before passing the asset profile to the client renderer.",
      severity: "blocker",
    },
    {
      name: "central-access-helper",
      passed:
        accessSource.includes('status: "needs-upgrade"') &&
        accessSource.includes("currentLevel >= 1") &&
        accessSource.includes("isAdmin"),
      details: "Asset Lab access is centralized around admin or current level 1+ until a billing entitlement model exists.",
      severity: "major",
    },
    {
      name: "login-redirect-preserved",
      passed: authActionsSource.includes("getSafeRedirectTarget") && authActionsSource.includes("redirectTo"),
      details: "Login can return the user to a safe local target after the access prefilter redirects them.",
      severity: "major",
    },
    {
      name: "stripe-access-proxy-documented-in-code",
      passed: webhookSource.includes("currentLevel: 1"),
      details: "The current checkout completion path grants level 1, which is the existing access proxy.",
      severity: "major",
    },
  ];

  for (const check of requiredChecks) {
    checks.push({ name: check.name, status: check.passed ? "pass" : "fail", details: check.details });
    if (!check.passed) {
      addIssue(issues, {
        severity: check.severity,
        check: check.name,
        message: check.details,
      });
    }
  }

  const billingLifecycleSupported = /model\s+(Subscription|Billing|Plan|Payment)|stripeCustomer|subscriptionStatus|currentPeriodEnd|cancelAtPeriodEnd/i.test(
    schemaSource
  );
  checks.push({
    name: "billing-lifecycle-model",
    status: billingLifecycleSupported ? "pass" : "note",
    details: billingLifecycleSupported
      ? "A persisted billing lifecycle model was detected."
      : "No persisted subscription lifecycle model was detected. Expired and canceled states need a billing entitlement field before they can be proven end to end.",
  });

  const apiRouteFiles = await collectApiRouteFiles(path.join(process.cwd(), "src", "app", "api"));
  const assetApiFiles: string[] = [];
  for (const file of apiRouteFiles) {
    const source = await fs.readFile(file, "utf8");
    if (/assetProfiles|asset-intelligence-data|asset-lab/i.test(source) || file.toLowerCase().includes("asset-lab")) {
      assetApiFiles.push(path.relative(process.cwd(), file).replace(/\\/g, "/"));
    }
  }

  checks.push({
    name: "asset-lab-api-surface",
    status: assetApiFiles.length === 0 ? "pass" : "fail",
    details:
      assetApiFiles.length === 0
        ? "No Asset Lab API payload route was found."
        : `Asset-related API route files need explicit authorization review: ${assetApiFiles.join(", ")}`,
  });

  if (assetApiFiles.length > 0) {
    addIssue(issues, {
      severity: "major",
      check: "asset-lab-api-surface",
      message: "Asset-related API route files need explicit authorization review.",
      details: assetApiFiles,
    });
  }

  return { checks, issues };
}

async function manualFetch(url: string) {
  const response = await fetch(url, { redirect: "manual" });
  return {
    status: response.status,
    location: response.headers.get("location") ?? "",
    text: await response.text(),
    finalUrl: response.url,
  };
}

function isLoginRedirect(baseUrl: string, routePath: string, status: number, location: string) {
  if (![301, 302, 303, 307, 308].includes(status) || !location) return false;
  const target = new URL(location, baseUrl);
  const redirectTarget = target.searchParams.get("redirect") ?? "";
  return target.pathname === "/login" && redirectTarget.startsWith(routePath);
}

async function checkLoggedOutAccess(baseUrl: string, routes: RouteEntry[], issues: QaIssue[]): Promise<{ state: UserStateResult; results: RouteAccessResult[] }> {
  const results: RouteAccessResult[] = [];

  for (const route of routes) {
    const response = await manualFetch(routeUrl(baseUrl, route.path));
    const passed = isLoginRedirect(baseUrl, route.path, response.status, response.location);

    results.push({
      state: "logged-out",
      path: route.path,
      expectedOutcome: "login-redirect",
      status: response.status,
      finalUrl: response.location || response.finalUrl,
      passed,
      details: {
        location: response.location,
      },
    });

    if (!passed) {
      addIssue(issues, {
        severity: "blocker",
        check: "logged-out-paid-route",
        path: route.path,
        message: "Logged-out request did not redirect to login before paid content rendering.",
        details: { status: response.status, location: response.location },
      });
    }
  }

  return {
    state: {
      state: "logged-out",
      configured: true,
      expectedOutcome: "login-redirect",
      routesChecked: routes.length,
      passed: results.filter((result) => result.passed).length,
      failed: results.filter((result) => !result.passed).length,
      notes: ["Checked with no browser cookies and redirect following disabled."],
    },
    results,
  };
}

async function checkPublicLeaks(baseUrl: string, routes: RouteEntry[], issues: QaIssue[]): Promise<PublicLeakResult[]> {
  const results: PublicLeakResult[] = [];

  for (const route of routes) {
    const response = await fetch(routeUrl(baseUrl, route.path));
    const text = await response.text();
    const markers = paidOnlyMarkers.filter((marker) => text.includes(marker));
    const passed = response.status === 200 && markers.length === 0;

    results.push({
      path: route.path,
      status: response.status,
      paidOnlyMarkers: markers,
      passed,
    });

    if (response.status !== 200) {
      addIssue(issues, {
        severity: "major",
        check: "public-route-status",
        path: route.path,
        message: "Public route did not return HTTP 200 during leak review.",
        details: { status: response.status },
      });
    }

    if (markers.length > 0) {
      addIssue(issues, {
        severity: "blocker",
        check: "public-paid-content-marker",
        path: route.path,
        message: "Public route includes paid-only workspace markers.",
        details: markers,
      });
    }
  }

  return results;
}

function credentialConfig(state: UserState) {
  if (state === "authenticated-without-access") {
    return {
      email: process.env.ASSET_QA_NON_PAID_EMAIL,
      password: process.env.ASSET_QA_NON_PAID_PASSWORD,
      expectedOutcome: "upgrade-gate" as const,
    };
  }

  if (state === "admin") {
    return {
      email: process.env.ASSET_QA_ADMIN_EMAIL,
      password: process.env.ASSET_QA_ADMIN_PASSWORD,
      expectedOutcome: "workspace" as const,
    };
  }

  return {
    email: process.env.ASSET_QA_PAID_EMAIL ?? process.env.ASSET_QA_EMAIL,
    password: process.env.ASSET_QA_PAID_PASSWORD ?? process.env.ASSET_QA_PASSWORD,
    expectedOutcome: "workspace" as const,
  };
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

    if (new URL(page.url()).pathname.includes("/login")) {
      throw new Error("Login did not leave the login route.");
    }
  } finally {
    await page.close();
  }
}

async function screenshot(page: Page, relativeName: string, screenshots: string[]) {
  const screenshotPath = path.join(SCREENSHOT_DIR, relativeName);
  const relativePath = path.relative(process.cwd(), screenshotPath).replace(/\\/g, "/");

  try {
    await page.screenshot({ path: screenshotPath, fullPage: true });
    screenshots.push(relativePath);
    return relativePath;
  } catch (error) {
    console.warn(`Screenshot skipped for ${relativeName}: ${error instanceof Error ? error.message : String(error)}`);
    return undefined;
  }
}

function reviewAuthenticatedHtml(state: UserState, expectedOutcome: ExpectedOutcome, html: string) {
  const hasGate = html.includes('data-asset-lab-access="upgrade-required"');
  const hasWorkspace = html.includes("Active workspace") || html.includes("Deep Identity") || html.includes("Exposure Map");

  if (expectedOutcome === "upgrade-gate") {
    return hasGate && !hasWorkspace;
  }

  return hasWorkspace && !hasGate;
}

async function checkAuthenticatedState(
  baseUrl: string,
  routes: RouteEntry[],
  state: UserState,
  issues: QaIssue[],
  screenshots: string[],
  browserContext: BrowserContext
): Promise<{ stateResult: UserStateResult; results: RouteAccessResult[] }> {
  const config = credentialConfig(state);
  if (!config.email || !config.password) {
    return {
      stateResult: {
        state,
        configured: false,
        expectedOutcome: config.expectedOutcome,
        routesChecked: 0,
        passed: 0,
        failed: 0,
        notes: [`Set ${state === "admin" ? "ASSET_QA_ADMIN" : state === "active-access" ? "ASSET_QA_PAID" : "ASSET_QA_NON_PAID"} credentials to run this browser state.`],
      },
      results: [],
    };
  }

  const results: RouteAccessResult[] = [];
  await login(browserContext, baseUrl, config.email, config.password);

  for (const route of routes) {
    const response = await browserContext.request.get(routeUrl(baseUrl, route.path), { timeout: 45_000 });
    const html = await response.text();
    const passed = response.status() === 200 && reviewAuthenticatedHtml(state, config.expectedOutcome, html);

    results.push({
      state,
      path: route.path,
      expectedOutcome: config.expectedOutcome,
      status: response.status(),
      finalUrl: response.url(),
      passed,
      details: {
        hasUpgradeGate: html.includes('data-asset-lab-access="upgrade-required"'),
        hasWorkspace: html.includes("Active workspace") || html.includes("Deep Identity") || html.includes("Exposure Map"),
      },
    });

    if (!passed) {
      addIssue(issues, {
        severity: config.expectedOutcome === "workspace" ? "blocker" : "major",
        check: `${state}-asset-lab-route`,
        path: route.path,
        message:
          config.expectedOutcome === "workspace"
            ? "Authorized state did not receive the Asset Lab workspace."
            : "Authenticated no-access state did not receive the upgrade gate.",
        details: { status: response.status(), url: response.url() },
      });
    }
  }

  const page = await browserContext.newPage();
  let screenshotPath: string | undefined;
  try {
    await page.goto(routeUrl(baseUrl, routes[0].path), { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => undefined);
    screenshotPath = await screenshot(page, `${sanitizeFilePart(state)}.png`, screenshots);
  } finally {
    await page.close();
  }

  return {
    stateResult: {
      state,
      configured: true,
      expectedOutcome: config.expectedOutcome,
      routesChecked: routes.length,
      passed: results.filter((result) => result.passed).length,
      failed: results.filter((result) => !result.passed).length,
      notes: ["Checked with browser login and the browser request context."],
      screenshotPath,
    },
    results,
  };
}

async function captureLoggedOutScreenshot(baseUrl: string, routePath: string, screenshots: string[], context: BrowserContext) {
  const page = await context.newPage();
  try {
    await page.goto(routeUrl(baseUrl, routePath), { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => undefined);
    const screenshotPath = await screenshot(page, "logged-out-login-redirect.png", screenshots);
    return screenshotPath;
  } finally {
    await page.close();
  }
}

function buildMarkdownReport(report: OutputReport) {
  const lines = [
    "# Asset Access-Control QA Report",
    "",
    `Started: ${report.startedAt}`,
    `Finished: ${report.finishedAt}`,
    `Base URL: ${report.baseUrl}`,
    "",
    "## Summary",
    "",
    `- Public routes checked for leaks: ${report.summary.publicRoutesCheckedForLeaks}`,
    `- Paid routes checked logged out: ${report.summary.paidRoutesCheckedLoggedOut}`,
    `- Configured authenticated states: ${report.summary.configuredAuthenticatedStates}`,
    `- Deferred authenticated states: ${report.summary.deferredAuthenticatedStates.join(", ") || "none"}`,
    `- Blocker issues: ${report.summary.issues.blocker}`,
    `- Major issues: ${report.summary.issues.major}`,
    `- Minor issues: ${report.summary.issues.minor}`,
    "",
    "## Static Checks",
    "",
    "| Check | Status | Details |",
    "|---|---|---|",
    ...report.staticChecks.map((check) => `| ${check.name} | ${check.status} | ${check.details} |`),
    "",
    "## User State Matrix",
    "",
    "| State | Configured | Expected | Routes Checked | Passed | Failed | Screenshot |",
    "|---|---:|---|---:|---:|---:|---|",
    ...report.userStates.map((state) =>
      `| ${state.state} | ${state.configured ? "yes" : "no"} | ${state.expectedOutcome} | ${state.routesChecked} | ${state.passed} | ${state.failed} | ${
        state.screenshotPath ?? ""
      } |`
    ),
    "",
    "## Public Leak Check",
    "",
    `- Routes checked: ${report.publicLeakChecks.length}`,
    `- Routes with paid-only markers: ${report.publicLeakChecks.filter((result) => result.paidOnlyMarkers.length > 0).length}`,
    "",
    "## Issue Table",
    "",
  ];

  if (report.issues.length === 0) {
    lines.push("No access-control issues were found.");
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
    `- Logged-out paid routes blocked: ${
      report.userStates.find((state) => state.state === "logged-out")?.failed === 0 ? "yes" : "no"
    }`,
    `- Public routes free of paid-only markers: ${
      report.publicLeakChecks.every((result) => result.paidOnlyMarkers.length === 0) ? "yes" : "no"
    }`,
    `- 0 blocker or major issues: ${
      report.summary.issues.blocker === 0 && report.summary.issues.major === 0 ? "yes" : "no"
    }`,
    "",
    "## Authenticated State Note",
    "",
    "Authenticated browser states require environment credentials. The current database model has admin and progress level fields, but no persisted subscription lifecycle field, so expired or canceled states remain a product-model follow-up."
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

  console.log("Asset Access-Control QA");
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Paid routes: ${inventory.paidRoutes.length}`);
  console.log(`Public routes: ${inventory.publicRoutes.length}`);

  const issues: QaIssue[] = [];
  const routeAccess: RouteAccessResult[] = [];
  const userStates: UserStateResult[] = [];
  const screenshots: string[] = [];

  const staticAudit = await runStaticChecks();
  issues.push(...staticAudit.issues);

  const loggedOut = await checkLoggedOutAccess(baseUrl, inventory.paidRoutes, issues);
  userStates.push(loggedOut.state);
  routeAccess.push(...loggedOut.results);
  console.log(`Logged-out paid routes blocked: ${loggedOut.state.passed}/${inventory.paidRoutes.length}`);

  const publicLeakChecks = await checkPublicLeaks(baseUrl, inventory.publicRoutes, issues);
  console.log(`Public routes checked for paid-only markers: ${publicLeakChecks.length}`);

  let browserUnavailableNote: string | null = null;
  const chromium = await loadPlaywrightChromium().catch((error) => {
    browserUnavailableNote = error instanceof Error ? error.message : String(error);
    return null;
  });

  if (chromium) {
    const browser = await chromium.launch({ headless: process.env.ASSET_QA_HEADLESS !== "0" });
    try {
      const loggedOutContext = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
      try {
        const screenshotPath = await captureLoggedOutScreenshot(baseUrl, inventory.paidRoutes[0].path, screenshots, loggedOutContext);
        loggedOut.state.screenshotPath = screenshotPath;
      } finally {
        await loggedOutContext.close();
      }

      for (const state of ["authenticated-without-access", "active-access", "admin"] as UserState[]) {
        const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
        try {
          const checkedState = await checkAuthenticatedState(baseUrl, inventory.paidRoutes, state, issues, screenshots, context);
          userStates.push(checkedState.stateResult);
          routeAccess.push(...checkedState.results);
          console.log(
            `${state}: ${checkedState.stateResult.configured ? `${checkedState.stateResult.passed}/${checkedState.stateResult.routesChecked}` : "not configured"}`
          );
        } finally {
          await context.close();
        }
      }
    } finally {
      await browser.close();
    }
  } else {
    userStates.push(
      {
        state: "authenticated-without-access",
        configured: false,
        expectedOutcome: "upgrade-gate",
        routesChecked: 0,
        passed: 0,
        failed: 0,
        notes: [browserUnavailableNote ?? "Playwright was not available."],
      },
      {
        state: "active-access",
        configured: false,
        expectedOutcome: "workspace",
        routesChecked: 0,
        passed: 0,
        failed: 0,
        notes: [browserUnavailableNote ?? "Playwright was not available."],
      },
      {
        state: "admin",
        configured: false,
        expectedOutcome: "workspace",
        routesChecked: 0,
        passed: 0,
        failed: 0,
        notes: [browserUnavailableNote ?? "Playwright was not available."],
      }
    );
  }

  const finishedAt = new Date().toISOString();
  const report: OutputReport = {
    startedAt,
    finishedAt,
    baseUrl,
    summary: {
      publicRoutesCheckedForLeaks: publicLeakChecks.length,
      paidRoutesCheckedLoggedOut: loggedOut.state.routesChecked,
      issues: {
        blocker: countIssues(issues, "blocker"),
        major: countIssues(issues, "major"),
        minor: countIssues(issues, "minor"),
      },
      configuredAuthenticatedStates: userStates.filter((state) => state.configured && state.state !== "logged-out").length,
      deferredAuthenticatedStates: userStates
        .filter((state) => !state.configured && state.state !== "logged-out")
        .map((state) => state.state),
    },
    staticChecks: staticAudit.checks,
    userStates,
    routeAccess,
    publicLeakChecks,
    screenshots,
    issues,
  };

  await writeReports(report);

  console.log(`Report written: ${path.relative(process.cwd(), JSON_REPORT_PATH)}`);
  console.log(`Markdown written: ${path.relative(process.cwd(), MARKDOWN_REPORT_PATH)}`);
  console.log(`Blocker: ${report.summary.issues.blocker}`);
  console.log(`Major: ${report.summary.issues.major}`);
  console.log(`Minor: ${report.summary.issues.minor}`);

  if (report.summary.issues.blocker > 0 || report.summary.issues.major > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
