# Asset Intelligence Phase 9 Readiness Report

Generated: 2026-07-16

## Verdict

Asset Intelligence is release-ready for the current 71-asset scope.

- Public Markets routes: 71
- Paid Asset Lab routes: 71
- Total asset routes: 142
- Full visual route/device checks: 568
- Blocker issues: 0
- Major issues: 0
- Minor issues: 0

## Issues Found And Fixed

| Area | Finding | Fix | Verification |
|---|---|---|---|
| Next.js routing | Build still used the deprecated `middleware` file convention. | Moved the Supabase session bridge to `src/proxy.ts` and removed `src/middleware.ts`. | `npm run build` completed with no middleware deprecation warning. |
| Dependency audit | Vercel build had dependency audit risk from transitive packages. | Updated Next.js to `16.2.10`, refreshed lockfile, and added clean package overrides for `esbuild` and `postcss`. | `npm audit --omit=dev --json` and `npm audit --json` both returned 0 vulnerabilities. |
| Local production logs | Redis cache helper warned when `REDIS_URL` was absent in local production checks. | Converted Redis access to lazy initialization and no-op cache behavior when Redis is not configured. | `npm run build` completed without the Redis warning. |
| Visual QA diagnostics | Visual QA reported a generic 404 console error on every route. | Added exact missing-resource capture and ignored only the known local Vercel Analytics script path served by Vercel production. | Full visual QA passed across 568 route/device checks. |

## Route Inventory

| Metric | Result |
|---|---:|
| Assets | 71 |
| Ready assets | 71 |
| Deep paid profiles | 71 |
| Public routes | 71 |
| Paid routes | 71 |
| Total routes | 142 |
| Duplicate routes | 0 |
| Crypto assets | 50 |
| Forex assets | 20 |
| Gold assets | 1 |

Source: `docs/asset-intelligence-route-inventory.json`

## QA Gate Results

| Gate | Scope | Result |
|---|---|---|
| Visual QA | 142 routes across 360x800, 390x844, 768x1024, 1440x1000 | 0 blocker, 0 major, 0 minor |
| Navigation QA | Homepage, mobile menu, dashboard, Markets index, Asset Lab index, related links | 0 blocker, 0 major, 0 minor |
| SEO QA | 71 public pages, metadata, headings, canonical, structured data | 0 blocker, 0 major, 0 minor |
| Source Freshness QA | 378 exposure records, 231 source URLs | 0 blocker, 0 major, 0 minor |
| Conversion Copy QA | 71 rendered public pages | Average score 100, lowest score 100 |
| Access-Control QA | Logged-out paid block, public leak scan, active access, admin | 0 blocker, 0 major, 0 minor |
| Legal QA | 71 public routes and 18 source files | 0 blocker, 0 major, 0 minor |
| Analytics QA | 13 event definitions and browser capture | 13 required events implemented, 33 events captured |

## Validation Commands

| Command | Result |
|---|---|
| `npx tsc --noEmit` | Pass |
| `npx tsx src/scripts/generate-asset-route-inventory.ts` | Pass |
| `npx tsx src/scripts/validate-asset-intelligence.ts` | Pass |
| `npm audit --omit=dev --json` | Pass, 0 vulnerabilities |
| `npm audit --json` | Pass, 0 vulnerabilities |
| `npm run build` | Pass |
| `npx tsx src/scripts/run-asset-seo-qa.ts` | Pass |
| `npx tsx src/scripts/run-asset-source-freshness-qa.ts` | Pass |
| `npx tsx src/scripts/run-asset-conversion-copy-qa.ts` | Pass |
| `npx tsx src/scripts/run-asset-navigation-qa.ts` | Pass |
| `npx tsx src/scripts/run-asset-access-control-qa.ts` | Pass |
| `npx tsx src/scripts/run-asset-legal-qa.ts` | Pass |
| `npx tsx src/scripts/run-asset-analytics-qa.ts` | Pass |
| `npx tsx src/scripts/run-asset-visual-qa.ts` | Pass |

## Evidence Files

- `docs/qa/asset-visual/asset-visual-qa-report.md`
- `docs/qa/asset-navigation/asset-navigation-qa-report.md`
- `docs/qa/asset-seo/asset-seo-qa-report.md`
- `docs/qa/asset-source-freshness/asset-source-freshness-qa-report.md`
- `docs/qa/asset-conversion-copy/asset-conversion-copy-qa-report.md`
- `docs/qa/asset-access-control/asset-access-control-qa-report.md`
- `docs/qa/asset-legal/asset-legal-qa-report.md`
- `docs/qa/asset-analytics/asset-analytics-qa-report.md`
- `docs/qa/asset-analytics/asset-analytics-event-dictionary.md`
- `docs/asset-intelligence-route-inventory.md`

## Notes

- `authenticated-without-access` access testing remains deferred because a non-subscribed test account was not configured.
- The public and paid route scopes are fixed to the hardcoded MVP asset universe: top 50 crypto assets, top 20 forex currencies, and gold.
- The local-only Vercel Analytics script 404 is now filtered by exact path in visual QA while any other missing resource continues to fail the gate.
