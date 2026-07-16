type ResponseLike = {
  status(): number;
  text(): Promise<string>;
  url(): string;
};

type RequestContextLike = {
  get(url: string, options?: Record<string, unknown>): Promise<ResponseLike>;
};

type ConsoleMessageLike = {
  type(): string;
  text(): string;
};

type LocatorLike = {
  count(): Promise<number>;
  nth(index: number): LocatorLike;
  first(): LocatorLike;
  isVisible(): Promise<boolean>;
  click(): Promise<void>;
  evaluate<T>(pageFunction: (element: Element) => T | Promise<T>): Promise<T>;
};

export type PageLike = {
  goto(url: string, options?: Record<string, unknown>): Promise<ResponseLike | null>;
  waitForLoadState(state: string, options?: Record<string, unknown>): Promise<void>;
  waitForTimeout(milliseconds: number): Promise<void>;
  addInitScript(pageFunction: () => void | Promise<void>): Promise<void>;
  exposeFunction(name: string, callback: (...args: unknown[]) => void | Promise<void>): Promise<void>;
  fill(selector: string, value: string, options?: Record<string, unknown>): Promise<void>;
  click(selector: string, options?: Record<string, unknown>): Promise<void>;
  waitForURL(predicate: (url: URL) => boolean, options?: Record<string, unknown>): Promise<void>;
  close(): Promise<void>;
  setViewportSize(viewport: { width: number; height: number }): Promise<void>;
  evaluate<T>(pageFunction: () => T | Promise<T>): Promise<T>;
  evaluate<T, A>(pageFunction: (arg: A) => T | Promise<T>, arg: A): Promise<T>;
  evaluate<T = unknown>(pageFunction: string): Promise<T>;
  screenshot(options: Record<string, unknown>): Promise<void>;
  getByRole(role: string, options?: Record<string, unknown>): LocatorLike;
  locator(selector: string): LocatorLike;
  url(): string;
  on(event: "console", handler: (message: ConsoleMessageLike) => void): void;
  on(event: "pageerror", handler: (error: Error) => void): void;
  on(event: "response", handler: (response: ResponseLike) => void): void;
};

export type BrowserContextLike = {
  request: RequestContextLike;
  newPage(): Promise<PageLike>;
  close(): Promise<void>;
};

export type BrowserLike = {
  newContext(options?: Record<string, unknown>): Promise<BrowserContextLike>;
  close(): Promise<void>;
};

type ChromiumLike = {
  launch(options: { headless: boolean }): Promise<BrowserLike>;
};

export async function loadPlaywrightChromium(): Promise<ChromiumLike> {
  const loadPackage = new Function("specifier", "return import(specifier)") as (specifier: string) => Promise<{ chromium: ChromiumLike }>;

  try {
    const playwright = await loadPackage("playwright");
    return playwright.chromium;
  } catch (error) {
    throw new Error(
      `Rendered asset QA requires Playwright at runtime. Install it locally before running browser-based asset QA. Original error: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
