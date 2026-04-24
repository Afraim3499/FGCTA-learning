# EXECUTION MASTER GUIDE: The 200% Excellency Developer Handbook

**CONFIDENTIAL ARCHITECTURE DOCUMENT**
**Target Audience**: Full-Stack Engineering Team
**Objective**: To execute the transition of the Institutional Trading Academy blueprints into a flawless, bug-free, highly performant Next.js application. Adherence to this document is mandatory. Zero deviation is permitted.

---

## 1. Technical Stack & Architecture Protocol

*   **Framework**: Next.js 14+ (App Router). All static syllabus content MUST be rendered via React Server Components (RSC) for maximum SEO and loading speed.
*   **Interactive Engines**: All Simulation Engines (DOM, Web3, Macro Dashboards) MUST be `'use client'` Client Components.
*   **Database**: PostgreSQL managed via Prisma ORM.
*   **State Management**: Zustand (for local simulation state: Margin, Health Factor, PnL).
*   **Testing**: Cypress for End-to-End (E2E) testing. Jest for unit testing API routes.

### Strict Directory Structure
```text
app/
  (auth)/              # Login/Register flows
  journey/
    [assetClass]/      # Dynamic route: forex, crypto, gold
      tier-[level]/    # Dynamic route: 1 through 8
      remediation/     # The failure loop UI
components/
  simulators/          # Where the interactive engines live
  ui/                  # Buttons, Modals, Navbars
lib/
  db/                  # Prisma instantiation
  utils/               # Calculation helpers (Pip value, Margin, LTV)
```

---

## 2. Database Foundation (schema.prisma)

You must implement the exact models below. Do not use unstructured JSON for core progress tracking.

### 2.1 The Strategy Vault Model
```prisma
model Strategy {
  id              String   @id @default(uuid())
  assetClass      AssetType // Enum: FOREX, CRYPTO, GOLD
  sequenceNumber  Int      // 1 to 238
  name            String
  parentFamily    String
  coreLogic       String   @db.Text
  trapMechanics   String?  @db.Text
  
  // Relations
  remediationLogs RemediationLog[]
}
```

### 2.2 The Progression & Failure Models
```prisma
model UserProgress {
  id              String   @id @default(uuid())
  userId          String   @unique
  assetClass      AssetType
  currentTier     Int      @default(1)
  status          Status   // Enum: ACTIVE, LIQUIDATED, REMEDIATION
  
  // Relations
  remediationLogs RemediationLog[]
}

model RemediationLog {
  id              String   @id @default(uuid())
  userProgressId  String
  strategyId      String   // The specific strategy they failed on
  failedAt        DateTime @default(now())
  passedQuiz      Boolean  @default(false)
  
  // Relations
  progress        UserProgress @relation(fields: [userProgressId], references: [id])
  strategy        Strategy     @relation(fields: [strategyId], references: [id])
}
```

### 2.3 The Ingestion Script Protocol
You will write `scripts/seed_strategies.ts`.
1.  Use `csv-parser` and `fs.readFileSync`.
2.  Use `prisma.strategy.upsert()` using the strategy name and asset class as the unique composite key to prevent duplicates on redeployment.
3.  **Validation**: The script MUST throw a fatal error if `await prisma.strategy.count()` does not equal exactly 645 upon completion.

---

## 3. React Simulation Engine Architecture

The interactive elements are the core of the $300 value proposition. They must be typed perfectly.

### 3.1 Simulation Interfaces
All interactive components must adhere to a strict interface to ensure the backend can correctly handle the Pass/Fail state.

```typescript
// types/simulation.ts
export interface SimulationProps {
  strategyId: string;       // Which strategy is being tested
  trapType?: 'SPOOF' | 'ICEBERG' | 'CASCADE'; // Is this a Tier 4 Trap?
  initialCapital: number;
  onSuccess: (metrics: SimulationMetrics) => void;
  onFail: (reason: string, failedStrategyId: string) => void;
}

export interface SimulationMetrics {
  pnl: number;
  maxDrawdown: number;
  timeToExecuteMs: number;
}
```

### 3.2 Zustand State Management (The Simulator Brain)
When building the Gold Tier 5 Volatility Simulator, you cannot rely on React `useState` because the simulated ticks are too fast. Use Zustand.

```typescript
import { create } from 'zustand'

interface MarginState {
  balance: number;
  usedMargin: number;
  openPositions: Position[];
  // Actions
  updateTick: (newPrice: number) => void;
  executeTrade: (pos: Position) => void;
  checkLiquidation: () => boolean;
}

export const useMarginStore = create<MarginState>((set, get) => ({
  balance: 100000,
  usedMargin: 0,
  openPositions: [],
  updateTick: (newPrice) => {
     // Mathematical logic for floating PnL
     // If balance + floating PnL < usedMargin * 0.5 -> trigger Liquidation
  },
  // ...
}))
```

---

## 4. Next.js Routing & Security

### 4.1 Middleware Enforcement (`middleware.ts`)
Users *must not* be able to type `/journey/forex/tier-8` in the URL if they are on Tier 1. 

1.  Read the user's session token.
2.  Query Redis or a fast-cache of their `UserProgress.currentTier`.
3.  If `request.nextUrl.pathname` requests a Tier > `currentTier`, `NextResponse.redirect(new URL('/dashboard', request.url))`.

### 4.2 The Remediation State Machine
If a user fails a simulation, `onFail` is called. The backend executes this State Machine:
1.  **State Change**: `UPDATE UserProgress SET status = 'LIQUIDATED'`.
2.  **Log Creation**: `INSERT INTO RemediationLog (strategyId)`.
3.  **UI Shift**: User is hard-redirected to `/journey/[asset]/liquidation`.
4.  **The Lock**: The user cannot return to `/tier-X` until `UPDATE RemediationLog SET passedQuiz = true WHERE id = ?`.

---

## 5. QA, E2E Testing, and DevOps

We demand 200% excellency. Code is not pushed to `main` unless the Cypress E2E tests pass.

### 5.1 Mandatory Cypress Test Suites
You must write the following test files:
*   `cypress/e2e/auth_checkout_flow.cy.ts`: Tests Stripe payment success and failure webhooks.
*   `cypress/e2e/forex_tier4_trap_fail.cy.ts`: Mocks a user clicking "Buy" during an Iceberg trap. Asserts that the URL changes to `/liquidation` and the Remediation quiz appears.
*   `cypress/e2e/crypto_tier8_crucible_pass.cy.ts`: Mocks perfect execution of the final 3-day simulation. Asserts the "Certificate Generated" screen is rendered.

### 5.2 Deployment Protocol (Vercel/AWS)
1.  **Pre-build**: `npx prisma generate` && `npx prisma db push`
2.  **Seed**: `npm run seed:strategies` (Fails the build if count != 645).
3.  **Test**: `npm run test:e2e`
4.  **Deploy**: If all above are green, deploy to Production.

## 6. Frontend Design System & UI Protocol

To achieve the "WOW" factor and premium aesthetic, developers must strictly follow the Institutional Design System.

### 6.1 Color Palette & Typography
*   **Primary Dark**: `#0A0A0B` (Background)
*   **Surface**: `#161618` (Card backgrounds)
*   **Institutional Blue**: `#0070F3` (CTAs, Primary accents)
*   **Liquidation Red**: `#FF0000` (Failure states, Stop runs)
*   **Profit Green**: `#00FF00` (Success states, Take profits)
*   **Typography**: Use `Inter` for body and `JetBrains Mono` for data/DOM displays.

### 6.2 Atomic Component Architecture
*   **Atoms**: `Button`, `Badge`, `Input`, `Tooltip`. Must be accessible (Radix UI).
*   **Molecules**: `StrategyCard`, `MarginGauge`, `TickFeed`.
*   **Organisms**: `SimulationTerminal`, `OrderBook`, `ProgressionMap`.
*   **Templates**: `JourneyLayout`, `DashboardLayout`.

---

## 7. API Specification (The Academy Interface)

All API routes must be located in `app/api/` and use Next.js Route Handlers.

### 7.1 Progress Management
*   `GET /api/user/progress`: Returns the current `UserProgress` and `RemediationLog`.
*   `POST /api/journey/start`: Initializes a new journey (Forex, Crypto, Gold).
*   `POST /api/assessment/submit`: 
    *   **Payload**: `{ tierId: number, metrics: SimulationMetrics, strategyId: string }`
    *   **Logic**: Validates metrics against the `Pass/Fail Criteria` in the blueprints. Returns `{ success: boolean, nextStep: string }`.

### 7.2 Strategy Vault Access
*   `GET /api/vault/strategies?assetClass=...`: Returns the list of strategies unlocked for the user's current tier.
*   `GET /api/vault/strategy/[id]`: Returns full `coreLogic` and `institutionalTrap` text.

---

## 8. Security & Anti-Cheat Protocols

Since this is a high-value $300 course, we must prevent "cheating" via the browser console.

### 8.1 Simulation Validation (Server-Side)
*   **Rule**: Never trust the client for the "Pass" status.
*   **Implementation**: The client sends the `metrics` (pnl, drawdown, execution logs). The server *re-calculates* the result based on the same rules. If the PnL reported by the client is impossible given the strategy parameters, flag the account for audit.

### 8.2 Obfuscation
*   All simulation logic (math for liquidation/margin) should be bundled and minified.
*   Use environment variables for secret keys (Stripe, Database, Redis).

---

## 9. Performance & Caching Strategy

### 9.1 Redis for High-Speed Lookups
*   Store `currentTier` and `isLiquidated` status in Redis.
*   The `middleware.ts` should check Redis *before* querying PostgreSQL to reduce latency to <50ms.

### 9.2 Asset Optimization
*   Use Next.js `Image` component for all strategy diagrams.
*   Video content MUST be hosted on a professional CDN (Mux or Vercel Blob) with adaptive bitrate streaming.

---

## 10. Failure & Error Handling (200% Reliability)

### 10.1 Global Error Boundary
*   Implement a `GlobalErrorBoundary` that catches React crashes during simulations.
*   **Action**: Log the crash to Sentry with the full `Zustand` store state attached.

### 10.2 Database Transactions
*   When a user passes a tier, the update to `UserProgress` and the creation of the `SuccessLog` MUST be wrapped in a `prisma.$transaction`. This ensures we never have a "half-passed" state.

---

## 11. Sprint-Based Execution Plan

To ensure noob developers don't get overwhelmed, follow these 4 Sprints:

1.  **Sprint 1 (Infrastructure)**: Schema, Auth, Stripe, Ingestion Scripts.
2.  **Sprint 2 (Foundations)**: Tier 1-3 content, Basic Chart Simulator.
3.  **Sprint 3 (Complexity)**: Tier 4 Institutional Traps, DOM/Web3 Simulators.
4.  **Sprint 4 (Polish & QA)**: Remediation Loop, E2E Testing, Production Deployment.

---

## 12. Documentation & Knowledge Transfer Standards

Execution to 200% excellency requires that the code documents itself.

*   **JSDoc Requirement**: Every helper function in `lib/` and every simulator logic function MUST have JSDoc comments explaining the mathematical intent.
*   **README Architecture**: Every major folder (e.g., `components/simulators/`) must contain a `README.md` explaining the simulation's state transitions.
*   **Blueprint Linking**: Use `@link` in JSDoc to reference the specific blueprint file (e.g., `// See e:/trading course/strategy_vault_blueprint/crypto/01_Trend_and_Price_Action.md`).

---

## 13. Future Extensibility & Scalability

The architecture must support adding new Journeys (e.g., "Commodities", "Equities") with zero breaking changes.

*   **Factory Pattern for Simulators**: Use a factory pattern to instantiate simulation engines based on the `assetClass` from the database.
*   **Dynamic Theme Injection**: The UI theme (Gold/Crypto/Forex) should be injected via a `ThemeProvider` based on the active journey, ensuring the codebase remains DRY (Don't Repeat Yourself).

---
**DEVELOPER SIGN-OFF:** 
By committing code to this repository, you acknowledge that you have read this guide and the associated `blueprint` directories in their entirety. Any deviation from these protocols will result in a rejected PR.
