# Asset Access-Control QA Report

Started: 2026-07-16T05:34:54.086Z
Finished: 2026-07-16T05:36:01.595Z
Base URL: http://localhost:3000

## Summary

- Public routes checked for leaks: 71
- Paid routes checked logged out: 71
- Configured authenticated states: 2
- Deferred authenticated states: authenticated-without-access
- Blocker issues: 0
- Major issues: 0
- Minor issues: 0

## Static Checks

| Check | Status | Details |
|---|---|---|
| middleware-protects-asset-lab | pass | The unauthenticated route prefilter includes /asset-lab and redirects to login. |
| asset-lab-index-uses-server-gate | pass | The paid index route checks access in the Server Component and renders a gate before data lists. |
| asset-lab-detail-uses-server-gate | pass | The paid detail route checks access before passing the asset profile to the client renderer. |
| central-access-helper | pass | Asset Lab access is centralized around admin or current level 1+ until a billing entitlement model exists. |
| login-redirect-preserved | pass | Login can return the user to a safe local target after the access prefilter redirects them. |
| stripe-access-proxy-documented-in-code | pass | The current checkout completion path grants level 1, which is the existing access proxy. |
| billing-lifecycle-model | note | No persisted subscription lifecycle model was detected. Expired and canceled states need a billing entitlement field before they can be proven end to end. |
| asset-lab-api-surface | pass | No Asset Lab API payload route was found. |

## User State Matrix

| State | Configured | Expected | Routes Checked | Passed | Failed | Screenshot |
|---|---:|---|---:|---:|---:|---|
| logged-out | yes | login-redirect | 71 | 71 | 0 | docs/qa/asset-access-control/screenshots/logged-out-login-redirect.png |
| authenticated-without-access | no | upgrade-gate | 0 | 0 | 0 |  |
| active-access | yes | workspace | 71 | 71 | 0 | docs/qa/asset-access-control/screenshots/active-access.png |
| admin | yes | workspace | 71 | 71 | 0 | docs/qa/asset-access-control/screenshots/admin.png |

## Public Leak Check

- Routes checked: 71
- Routes with paid-only markers: 0

## Issue Table

No access-control issues were found.

## Exit Gate

- Logged-out paid routes blocked: yes
- Public routes free of paid-only markers: yes
- 0 blocker or major issues: yes

## Authenticated State Note

Authenticated browser states require environment credentials. The current database model has admin and progress level fields, but no persisted subscription lifecycle field, so expired or canceled states remain a product-model follow-up.
