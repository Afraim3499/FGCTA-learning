# Asset Intelligence Final QA Standard

This file is mandatory reading before any release-readiness work on Markets pages, Asset Lab pages, asset navigation, source freshness, access control, legal review, analytics, or final Asset Intelligence QA.

The goal is not to make the segment merely pass. The goal is to make it release-grade: every route must be reachable, readable, trustworthy, protected where required, source-backed, measurable, and useful to a learner.

## Scope Locked For Final QA

Asset Intelligence has a curated universe of 71 assets:

- 50 crypto assets
- 20 forex currency markets
- 1 gold market

Every asset has two product routes:

- Public route: `/markets/[assetClass]/[slug]`
- Paid route: `/asset-lab/[assetClass]/[slug]`

Final QA scope is therefore 142 asset routes.

The route inventory source of truth is:

- `docs/asset-intelligence-route-inventory.json`
- `docs/asset-intelligence-route-inventory.md`

If asset slugs, ranks, status, or route helpers change, regenerate the inventory before any QA phase continues.

## Global Release Bar

No phase is complete until its evidence exists. Evidence can be an automated report, screenshot set, route matrix, source table, written audit, event log, or access matrix.

Every phase uses this severity model:

- Blocker: breaks trust, routing, access control, legal safety, core rendering, source integrity, or purchase-intent flow.
- Major: weak mobile usability, broken navigation, stale current data, missing paid depth, unclear CTA, missing metadata, missing analytics, or confusing access state.
- Minor: copy polish, small spacing issue, wording improvement, or non-blocking UI refinement.

Release-grade acceptance means:

- 0 blocker issues
- 0 major issues
- Minor issues either fixed or explicitly deferred with owner, reason, and follow-up date

## Phase 0: Standard And Inventory Lock

Purpose: freeze the QA contract before inspection begins.

Required tasks:

- Read `ASSET_INTELLIGENCE_STANDARD.md`.
- Read this file fully.
- Generate the 142-route inventory from live `assetProfiles`.
- Confirm every ready asset has a public route and paid route.
- Confirm public and paid route counts match asset coverage.
- Confirm every route has asset class, slug, name, symbol, rank, status, and deep paid profile status.
- Store inventory in both JSON and Markdown.
- Wire this QA standard into developer guidance.

Evidence required:

- `docs/asset-intelligence-route-inventory.json`
- `docs/asset-intelligence-route-inventory.md`
- Terminal output showing 71 assets and 142 routes.

Exit standard:

- `assetCount = 71`
- `publicRouteCount = 71`
- `paidRouteCount = 71`
- `totalRouteCount = 142`
- `readyAssetCount = 71`
- `deepProfileCount = 71`
- No duplicate route keys.
- No missing route path.

## Phase 1: Full Visual QA

Purpose: verify every asset route renders cleanly across real screen sizes.

Required route set:

- All 71 public Markets routes
- All 71 paid Asset Lab routes

Required viewports:

- `360x800`
- `390x844`
- `768x1024`
- `1440x1000`

Required checks:

- Route returns HTTP 200.
- No console errors.
- No page runtime errors.
- No horizontal overflow.
- No clipped text.
- No overlapping headings, cards, tabs, buttons, tables, source panels, or CTA areas.
- Public pages feel like landing pages, not articles.
- Paid pages feel like platform workspaces, not articles.
- Asset Lab tabs render real content.
- Exposure Map cards are readable.
- Verified Claims content is readable.
- Source panels fit on mobile.
- Long asset names do not break layout.
- CTA buttons are visible and usable.

Evidence required:

- Full automated route report.
- Screenshot set for every failure.
- Summary table by route, viewport, and severity.

Exit standard:

- 142 routes checked.
- 4 viewports checked per route.
- 0 blocker issues.
- 0 major layout issues.

## Phase 2: Navigation QA

Purpose: prove users can discover and move through the asset segment naturally.

Required entry points:

- Homepage desktop navigation
- Homepage mobile menu
- Footer Markets link
- Markets index
- Asset Lab index
- Logged-in dashboard sidebar
- Logged-in dashboard topbar or mobile navigation
- Public asset CTAs
- Related asset links
- Related lesson links
- Related Strategy Lab links

Required checks:

- Visitors can reach `/markets`.
- Visitors can reach all 71 public asset pages from normal UI paths.
- Logged-in users can reach `/asset-lab`.
- Asset Lab index links to all 71 paid pages.
- Markets index links to all 71 public pages.
- Mobile navigation exposes Markets clearly.
- Logged-in navigation exposes Asset Lab clearly.
- Public page CTAs route to intended training or conversion destinations.
- Related links do not dead-end.
- No orphaned asset routes.
- No confusing duplicate route families.

Evidence required:

- Navigation path matrix.
- Broken-link report.
- Mobile navigation screenshots.
- Index coverage report.

Exit standard:

- 71 public assets reachable from Markets UI.
- 71 paid assets reachable from Asset Lab UI for authorized users.
- 0 broken internal links inside asset flows.
- 0 orphaned asset routes.

## Phase 3: SEO QA

Purpose: make public pages search-ready without search-engine stuffing.

Required checks for every public page:

- Unique SEO title.
- SEO title is clear, asset-specific, and practical.
- Meta description exists and stays within search-preview limits where practical.
- Exactly one clear H1.
- H1 includes the asset name.
- Section headings describe real user questions.
- Internal links exist and are relevant.
- Public CTA exists.
- Source or review context is visible.
- Canonical URL is correct.
- Sitemap includes the public route.
- Open Graph metadata is sane.
- Structured data is reviewed or added where useful.

Every public page must answer:

- What is this asset?
- Why does it matter?
- What moves it?
- Who influences it?
- What history matters first?
- What risks should someone understand first?
- How does Lurnava monitor it?
- What should the visitor do next?

Evidence required:

- SEO crawl report.
- Duplicate metadata report.
- Missing heading/internal-link report.
- Sitemap inclusion report.

Exit standard:

- 71 public pages checked.
- 0 duplicate SEO titles.
- 0 missing H1s.
- 0 missing meta descriptions.
- 0 missing public CTAs.

## Phase 4: Source Freshness Review

Purpose: ensure source-backed details remain trustworthy.

Fast-changing fields:

- Crypto TVL
- Stablecoin supply
- Active addresses
- Daily transactions
- DEX volume
- Fees and revenue
- Token unlocks
- Circulating supply
- ETF and trust holdings
- Public-company holdings
- Central-bank reserves
- Forex reserve figures
- Gold ETF holdings
- Policy rates

Freshness rules:

- Daily or weekly sources must use the latest available public release.
- Monthly sources must use the latest monthly release.
- Quarterly sources must be labeled as quarterly.
- Historical figures must be labeled historical.
- Any current amount older than its update cycle is a major issue.
- Any unsupported holding or exposure claim is a blocker.

Every exposure record must include:

- Entity name
- Entity type
- Asset or instrument
- Amount
- Unit
- Exposure type
- As-of date
- Retrieved date
- Source title
- Publisher
- HTTPS source URL
- Freshness status
- Explanation of why it matters

Evidence required:

- Source freshness table.
- Stale data report.
- Broken external source report.
- High-risk claim review list.

Exit standard:

- 0 unsupported current amounts.
- 0 stale facts labeled current.
- 0 missing as-of dates.
- 0 missing source URLs.

## Phase 5: Conversion Copy Review

Purpose: make public pages stronger landing pages without hype or promises.

Required checks:

- First screen identifies the asset clearly.
- First screen gives a reason to keep reading.
- Copy explains why Lurnava monitors the asset.
- CTA is calm, credible, and visible.
- CTA points toward structured training, practice, or certification checks.
- Public page does not feel like a blog article.
- History, participants, drivers, and risks are asset-specific.
- No financial promises.
- No hype language.
- No vague filler.
- Similar assets remain clearly differentiated.

Evidence required:

- Copy scorecard per page.
- Weak CTA list.
- Rewritten CTA bank where needed.
- Before/after examples for edited pages.

Exit standard:

- 71 public pages reviewed.
- 0 generic public pages.
- 0 hype or outcome-promise CTAs.
- 0 missing conversion path.

## Phase 6: Access-Control QA

Purpose: prove paid content is protected and user states are clear.

Required states:

- Logged out
- Logged in but not paid
- Paid or subscribed
- Admin
- Expired or canceled subscription, if supported

Required checks:

- Logged-out users cannot access paid Asset Lab content.
- Logged-out users receive clean login or pricing direction.
- Non-paid users receive the right upgrade path.
- Paid users can access all 71 Asset Lab pages.
- Admin can access all paid pages.
- No paid content leaks through public routes, metadata, API payloads, or preloaded page data.
- Redirects do not loop.
- Session expiry behaves cleanly.

Evidence required:

- Access-control matrix.
- Auth redirect report.
- Screenshots for each state.
- API leak check notes where applicable.

Exit standard:

- 0 paid content leaks.
- 0 broken authorized routes.
- 0 redirect loops.
- 0 confusing access state.

## Phase 7: Legal And Disclaimer Pass

Purpose: keep the segment educational and legally safer.

Required checks:

- No page gives direct trading instructions.
- No page tells users what to buy, sell, or hold.
- No page promises outcomes.
- No page implies financial advice.
- Risk language is visible.
- Educational framing is consistent.
- Public pages link to or surface disclaimer context where appropriate.
- Paid pages frame analysis as training, research, and structured study.
- Certification language does not imply market outcomes.

Evidence required:

- Legal wording scan.
- Risk/disclaimer placement report.
- High-risk phrase replacement list.

Exit standard:

- 0 financial-advice statements.
- 0 outcome promises.
- 0 direct buy/sell/hold instructions.
- 0 missing risk framing on asset routes.

## Phase 8: Analytics And Event Setup

Purpose: make asset usage measurable without exposing sensitive data.

Required event coverage:

- Markets index viewed.
- Public asset page viewed.
- Asset class filter clicked.
- Public CTA clicked.
- Asset Lab index viewed.
- Paid asset page viewed.
- Asset Lab tab clicked.
- Exposure Map viewed.
- Verified Claims viewed.
- Source Pack viewed.
- Related lesson clicked.
- Related strategy clicked.
- Pricing CTA clicked from asset page.

Event payload rules:

- Include asset slug when asset-specific.
- Include asset class when asset-specific.
- Include route type: public or paid.
- Include user state: logged out, logged in, paid, admin, or unknown.
- Do not include sensitive user data.
- Do not fire duplicate events for one user action.
- Analytics failure must not break the UI.

Evidence required:

- Analytics event dictionary.
- Test event log.
- Representative mobile and desktop event confirmation.

Exit standard:

- Every required event is implemented or explicitly documented as intentionally deferred.
- Event names are stable.
- Event payloads are privacy-safe.
- No duplicate event firing in tested flows.

## Phase 9: Final Release Readiness Run

Purpose: run the full end-to-end release gate after all fixes.

Required checks:

- TypeScript compile.
- Production build.
- Asset validator.
- Restricted wording scan.
- Full 142-route crawl.
- Full visual QA.
- Navigation QA.
- SEO QA.
- Source freshness review.
- Conversion copy review.
- Access-control matrix.
- Legal wording pass.
- Analytics event test.

Final acceptance:

- 71 of 71 public pages pass.
- 71 of 71 paid pages pass.
- 142 of 142 asset routes pass route checks.
- 0 blocker issues.
- 0 major issues.
- 0 stale current source data.
- 0 access leaks.
- 0 legal-risk copy.
- Analytics events confirmed for required flows.

## Required Commands

From the `app` directory, run these during final readiness unless a phase explicitly adds more commands:

```bash
npx tsc --noEmit
npx tsx src/scripts/validate-asset-intelligence.ts
npm run build
npx tsx src/scripts/generate-asset-route-inventory.ts
```

Restricted wording scan:

- Use the restricted vocabulary list in `AGENTS.md` and `src/scripts/validate-asset-intelligence.ts`.
- Scan the Asset Intelligence data files, Asset Lab renderer, and any QA artifacts edited in the phase.
- The scan command should be run from the terminal during the phase and included in the phase report.
