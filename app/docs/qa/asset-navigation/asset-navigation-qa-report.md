# Asset Navigation QA Report

Started: 2026-07-16T01:28:25.061Z
Finished: 2026-07-16T01:34:06.840Z
Base URL: http://127.0.0.1:3000

## Summary

- Public asset routes expected: 71
- Paid asset routes expected: 71
- Unique internal links checked: 167
- Blocker issues: 0
- Major issues: 0
- Minor issues: 0

## Entry Points

| Entry point | Path | Status |
|---|---|---:|
| Homepage desktop Markets nav | `/` | pass |
| Footer Markets link | `/` | pass |
| Homepage mobile Markets menu | `/` | pass |
| Dashboard sidebar Asset Lab nav | `/dashboard` | pass |
| Dashboard mobile Asset Lab menu | `/dashboard` | pass |

## Index Coverage

| Index | Path | Expected | Actual | Missing | Extra |
|---|---|---:|---:|---:|---:|
| Markets index | `/markets` | 71 | 71 | 0 | 0 |
| Asset Lab index | `/asset-lab` | 71 | 71 | 0 | 0 |

## Route Reachability

- Public routes checked: 71
- Paid routes checked: 71
- Failed route requests: 0

## Related Link Coverage

- Asset detail pages checked: 142
- Pages missing related lesson links: 0
- Pages missing Strategy Lab links: 0

## Broken Internal Links

No broken internal links were found inside asset flows.

## Screenshots

- `docs/qa/asset-navigation/screenshots/home-mobile-markets-menu.png`
- `docs/qa/asset-navigation/screenshots/dashboard-mobile-asset-lab-menu.png`
- `docs/qa/asset-navigation/screenshots/markets-index-desktop.png`
- `docs/qa/asset-navigation/screenshots/asset-lab-index-desktop.png`

## Exit Gate

- Markets index links all 71 public assets: yes
- Asset Lab index links all 71 paid assets: yes
- Required entry points pass: yes
- No broken internal links: yes
- No blocker or major issues: yes
