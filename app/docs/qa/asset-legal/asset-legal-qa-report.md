# Asset Legal And Disclaimer QA Report

Started: 2026-07-16T04:00:29.498Z
Finished: 2026-07-16T04:00:30.369Z
Base URL: http://localhost:3000

## Summary

- Public routes checked: 71
- Source files scanned: 18
- High-risk source matches: 0
- Public routes missing education notice: 0
- Public routes missing disclaimer link: 0
- Public routes missing risk language: 0
- Blocker issues: 0
- Major issues: 0
- Minor issues: 0

## Reference Basis

| Source | Relevance |
|---|---|
| [SEC investor education resources](https://www.sec.gov/resources-investors) | Supports education-first framing and investor risk awareness. |
| [CFTC virtual currency customer advisory](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/understand_risks_of_virtual_currency.html) | Supports explicit crypto risk and fraud caution language. |
| [FINRA crypto asset risk education](https://www.finra.org/investors/investing/investment-products/crypto-assets/risks) | Supports volatility, liquidity, and loss-risk framing for digital assets. |

## Static Checks

| Check | Status | Details |
|---|---|---|
| public-asset-education-notice | pass | Public asset detail pages render the education-only notice. |
| markets-index-education-notice | pass | Markets index renders education-only framing before conversion. |
| paid-asset-lab-education-notice | pass | Paid Asset Lab detail workspace renders education-only framing. |
| asset-lab-index-education-notice | pass | Asset Lab index renders education-only framing. |
| disclaimer-current-scope | pass | Disclaimer covers Asset Intelligence, learning records, advice limits, and result limits. |
| record-limitation-public | pass | Public verification page limits the meaning of records. |
| record-limitation-dashboard | pass | Dashboard records page limits the meaning of records. |
| footer-disclaimer-link | pass | Footer links to the disclaimer and repeats education-only framing. |

## Authenticated Paid Crawl

- Configured: no
- Routes checked: 0
- Passed: 0
- Failed: 0
- Notes: Set ASSET_QA_PAID_EMAIL/ASSET_QA_PAID_PASSWORD or ASSET_QA_EMAIL/ASSET_QA_PASSWORD to crawl authenticated paid pages.

## Issue Table

No legal/disclaimer QA issues were found.

## Exit Gate

- 71 public asset pages checked: yes
- 0 direct trade direction issues: yes
- 0 outcome-promise issues: yes
- 0 missing public disclaimer links: yes
- 0 blocker or major issues: yes
