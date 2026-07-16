# Asset Analytics QA Report

Started: 2026-07-16T05:36:40.896Z
Finished: 2026-07-16T05:36:55.375Z
Base URL: http://localhost:3000

## Summary

- Event definitions: 13
- Required events implemented: 13
- Public routes in inventory: 71
- Paid routes in inventory: 71
- Captured browser events: 33
- Public browser scenarios: 2
- Paid browser configured: yes
- Blocker issues: 0
- Major issues: 0
- Minor issues: 0

## Static Checks

| Check | Status | Details |
|---|---|---|
| required-event-implementation | pass | `{"expected":13,"implemented":13,"missing":[]}` |
| vercel-analytics-configuration | pass | `{"hasPackageImport":true,"hasRootComponent":true,"hasTrackCall":true}` |
| event-dictionary-safety | pass | `{"missingPayloads":[],"sensitiveAllowed":[],"duplicateNames":[]}` |

## Browser Scenarios

| Scenario | Viewport | Configured | Events captured | Issues |
|---|---|---|---:|---:|
| public-desktop | desktop | yes | 10 | 0 |
| public-mobile | mobile | yes | 10 | 0 |
| paid-authenticated | desktop-paid | yes | 13 | 0 |

## Issue Table

No analytics QA issues were found.

## Exit Gate

- Required event dictionary exists: yes
- Public desktop event confirmation: yes
- Public mobile event confirmation: yes
- Paid implementation coverage: yes
- Blocker or major issues: 0
