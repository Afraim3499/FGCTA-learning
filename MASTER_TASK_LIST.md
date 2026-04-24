# MASTER EXECUTION TASK LIST
**Project**: The Institutional Trading Academy (Forex, Crypto, Gold)
**Objective**: A 200% exhaustive checklist covering every single technical, design, and deployment requirement. No ticket is marked 'Done' without passing QA.

---

## ✅ Sprint 1: Infrastructure & Database (The Bedrock)
*The foundation of the platform. Data integrity is the highest priority here.*

- [x] **1.1 Initialize Repository**
  - [x] Run `npx create-next-app@latest .` (TypeScript, Tailwind, App Router).
  - [x] Configure `tsconfig.json` strict mode.
  - [x] Initialize Git repository and main/dev branching strategy.
- [x] **1.2 Database Setup (Prisma)**
  - [x] Run `npm install prisma --save-dev` and `npx prisma init`.
  - [x] Configure `DATABASE_URL` for PostgreSQL.
  - [x] Code `schema.prisma`: Define `Strategy` model (must support 645 strategies).
  - [x] Code `schema.prisma`: Define `UserProgress` model.
  - [x] Code `schema.prisma`: Define `RemediationLog` model.
  - [x] Run `npx prisma db push` to generate remote tables.
- [x] **1.3 Data Ingestion Engine**
  - [x] Create `scripts/seed_crypto.ts` (Parse 206 strategies).
  - [x] Create `scripts/seed_forex.ts` (Parse 201 strategies).
  - [x] Create `scripts/seed_gold.ts` (Parse 238 strategies).
  - [x] Write logic to prevent duplicate insertions (`upsert`).
  - [x] Execute seed script.
  - [x] **Validation Check**: Run a query ensuring database `.count()` exactly matches 645.

---

## ✅ Sprint 2: Global State & Authentication
*Ensuring secure access, payments, and high-speed state management.*

- [x] **2.1 Authentication**
  - [x] Install and configure NextAuth.js or Clerk. (Decided to use Supabase Auth native integration)
  - [x] Build `/login` and `/register` UI pages.
  - [x] Setup OAuth (Google) and Email/Password providers.
- [x] **2.2 Stripe Payment Integration**
  - [x] Create Stripe Products ($300 Forex, $300 Crypto, $300 Gold, $750 Bundle).
  - [x] Build `POST /api/checkout` to generate Stripe Sessions.
  - [x] Build `POST /api/webhooks/stripe` to catch successful payments.
  - [x] **Business Logic**: On successful payment, initialize `UserProgress` record for that specific path and set `currentTier = 1`.
- [x] **2.3 Global State Management (Zustand)**
  - [x] Create `lib/store/useMarginStore.ts` (for simulations).
  - [x] Create `lib/store/useProgressStore.ts` (for UI locking/unlocking).
- [x] **2.4 Redis Caching Layer**
  - [x] Install `ioredis`.
  - [x] Configure Redis connection.
  - [x] Implement caching for user `currentTier` to speed up route protection.

---

## ✅ Sprint 3: The Institutional Design System
*Building the premium visual layer. No generic Bootstrap looks allowed.*

- [x] **3.1 Tailwind Configuration**
  - [x] Configure `tailwind.config.ts` with institutional hex codes. (Configured in `globals.css` for Tailwind v4)
    - [x] `bg-primary-dark`: `#0A0A0B`
    - [x] `bg-surface`: `#161618`
    - [x] `text-accent-blue`: `#0070F3`
    - [x] `text-fail-red`: `#FF0000`
    - [x] `text-pass-green`: `#00FF00`
  - [x] Configure fonts: `Inter` (sans) and `JetBrains Mono` (mono for data).
- [x] **3.2 Atomic Component Library (Radix UI)**
  - [x] Build `InstitutionalButton.tsx` (with glow/hover micro-animations).
  - [x] Build `DataBadge.tsx`.
  - [x] Build `TerminalCard.tsx` (Glassmorphism borders).
  - [x] Build `StatusToast.tsx` (For instant simulation feedback).
  - [x] Build `ProgressLadder.tsx` (The 8-tier visual map).

---

## ✅ Sprint 4: Core Simulation Engines (The $300 Value)
*The most complex code. These are interactive, client-side React components.*

- [x] **4.1 Engine A: Point & Click Chart Simulator**
  - [x] Integrate `lightweight-charts` or custom canvas.
  - [x] Build bounding-box drawing tools.
  - [x] Build coordinate validation engine (Did they draw the box in the correct liquidity zone?).
- [x] **4.2 Engine B: Interactive Macro/Web3 Dashboards**
  - [x] Build the Web3/DeFi Lending UI (Crypto Tier 3).
  - [x] Build the Real Yields & DXY tracking UI (Gold Tier 3).
  - [x] Write the mathematical backend for Loan-to-Value (LTV), Health Factor, and Margin calls.
- [x] **4.3 Engine C: Order Flow DOM Simulator**
  - [x] Build the Bid/Ask order book grid UI.
  - [x] Code the high-frequency ticking interval (Simulating market data).
  - [x] **Trap Scenarios**: Code the Iceberg Order simulation.
  - [x] **Trap Scenarios**: Code the Spoofing simulation.
  - [x] **Trap Scenarios**: Code the Slippage/Liquidation Cascade simulation.

---

## 🗺️ Sprint 5: App Routing & The User Journey
*Stitching the pages together using Next.js App Router.*

- [x] **5.1 The Marketing Funnel**
  - [x] Build `/page.tsx` (Home): Hero section, narrative copy, background DOM video.
  - [x] Build `/#packages`: The 3 Matrices pricing display.
  - [x] Build `/checkout`: Split-screen order summary and payment form.
- [x] **5.2 The Global Launchpad**
  - [x] Build `/dashboard/page.tsx`: Display active vs locked journeys.
- [x] **5.3 Dynamic Journey Routes**
  - [x] Create folder structure: `app/journey/[assetClass]/tier-[level]/page.tsx`.
  - [x] Write server-side logic to fetch syllabus blueprint content from the database.
  - [x] Render theoretical text + video player + relevant Simulation Engine.
- [x] **5.4 Security Middleware**
  - [x] Write `middleware.ts`.
  - [ ] Logic: If user requests `/tier-8` but DB says `tier = 1`, redirect to `/dashboard`.
- [x] **5.5 Data Persistence & Strategy Vault**
  - [x] Add `SavedAnalysis` & `Strategy` models to Prisma.
  - [x] Implement `completeModule` and `saveAnalysis` server actions.
  - [x] Build the **Strategy Forge** and **Vault** in the `/lab`.

---

## 🚨 Sprint 6: Assessment & Remediation State Machine
*The brutal pass/fail logic and the forced learning loop.*

- [x] **6.1 The Submission Endpoint**
  - [x] Build `POST /api/assessment/submit` (Implemented as Server Action).
  - [x] Write validation math: Compare client metrics to blueprint Pass/Fail criteria.
- [x] **6.2 The Wipeout Protocol**
  - [x] Build `/journey/[assetClass]/liquidation/page.tsx`.
  - [x] Implement red flash animation, dark mode override, and post-mortem report generation.
- [x] **6.3 The Remediation Loop**
  - [x] Build forced-review UI fetching the specific failed strategy from the Strategy Vault.
  - [x] Build the Mini-Quiz component.
  - [x] Write backend logic: Unlock the "Retry" button ONLY when quiz score == 100%.
  - [x] Write backend logic: Pass a new `randomSeed` to the simulator on retry so the chart is completely different.

---

## 🛡️ Sprint 7: API Layer & Anti-Cheat Measures
*Securing the logic against client-side manipulation.*

- [x] **7.1 Data Endpoints**
  - [x] Build `GET /api/user/progress`.
  - [x] Build `GET /api/vault/strategies` (Locked by tier level).
- [x] **7.2 Server-Side Validation (Anti-Cheat)**
  - [x] Extract simulation math (PnL, margin) into `lib/utils/math.ts` (Integrated into `LogicValidator`).
  - [x] Ensure `POST /api/assessment/submit` re-runs the math on the server. If client reports a PnL impossible by the math, flag account.
- [ ] **7.3 Code Obfuscation** (Handled by standard Next.js production build/minify)
- [x] **7.4 Error Handling**
  - [x] Implement Next.js `error.tsx` boundaries.
  - [x] Connect Sentry (Simulated via console.error logging patterns for now).

---

## 🚀 Sprint 8: QA, E2E Testing, & Deployment
*The 200% excellency check before going live.*

- [ ] **8.1 Unit Testing**
  - [ ] Write Jest tests for all `lib/utils/math.ts` functions.
  - [ ] Write Jest tests for Prisma data ingestion parsing.
- [ ] **8.2 End-to-End (E2E) Testing (Cypress)**
  - [ ] Write `auth_checkout_flow.cy.ts`: Simulates Stripe success and failure.
  - [ ] Write `forex_tier4_trap_fail.cy.ts`: Mocks a user clicking "Buy" into a trap, expects routing to `/liquidation`.
  - [ ] Write `crypto_tier8_crucible_pass.cy.ts`: Mocks perfect execution of the final crucible, expects certificate generation.
- [ ] **8.3 Final Content Audit**
  - [ ] Run the final production database seed.
  - [ ] Manually verify UI rendering for Level 0 through Level 8 across Forex, Crypto, and Gold.
- [ ] **8.4 Production Deployment**
  - [ ] Configure environment variables in Vercel/AWS.
  - [ ] Deploy database migrations (`npx prisma migrate deploy`).
  - [ ] Push to Production.
  - [ ] Verify SSL, Domain Routing, and Webhook connectivity.

---
**Document Status**: APPROVED FOR EXECUTION
**Instruction for Developers**: Do not skip steps. Execute sequentially from Sprint 1.1 to 8.4.
