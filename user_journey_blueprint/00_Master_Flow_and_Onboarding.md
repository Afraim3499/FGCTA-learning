# User Journey UX/UI Blueprint: 00 - Master Flow & Onboarding

**Objective:** Map every screen, click, and database action from the moment a user lands on the website to the exact moment they purchase a package and enter their personalized Global Dashboard.

---

## Phase 1: The Landing Page (The Hook)

**URL**: `/`
**Visual Layout**: 
*   A dark, institutional aesthetic (black, gunmetal grey, electric blue accents).
*   **Hero Section**: Bold headline: *"Retail Traders Bleed Liquidity. Institutions Harvest It. Which side of the trade are you on?"*
*   **Background**: A subtle, looping WebP video of a dark-mode Order Flow DOM moving rapidly.

### Interactive Elements & CTAs
1.  **Button**: `[Enter the Academy]` (Primary CTA, Electric Blue)
    *   **Action**: Smooth scroll down to Phase 2: The Package Selection.
2.  **Button**: `[Take the Free Institutional Assessment]` (Secondary CTA, Hollow/Outline)
    *   **Action**: Routes user to `/assessment/free-trial`. Starts the interactive candlestick builder trial we designed previously.
3.  **Nav Link**: `[Our Story / Manifesto]`
    *   **Action**: Routes to `/manifesto`. Plays the background audio track via the custom music player component.

---

## Phase 2: The Package Selection (The Sale)

**URL**: `/#packages`
**Visual Layout**: 
*   A 3-column pricing tier layout, plus a massive banner for the "Mastery Bundle".
*   Each column represents a distinct Journey: Forex, Crypto, Gold.

### Package 1: The Forex Matrix
*   **Price**: $300
*   **Text**: "Master Global Macro, Interest Rate Differentials, and Central Bank Order Flow."
*   **Button**: `[Deploy Forex Capital]`
    *   **Action**: Adds `item_forex_journey` to cart. Routes to `/checkout`.

### Package 2: The Crypto Matrix
*   **Price**: $300
*   **Text**: "Master On-Chain Analytics, DeFi Yield Rotation, and Algorithmic Order Flow."
*   **Button**: `[Deploy Crypto Capital]`
    *   **Action**: Adds `item_crypto_journey` to cart. Routes to `/checkout`.

### Package 3: The Gold Matrix
*   **Price**: $300
*   **Text**: "Master Real Yields, COMEX Arbitrage, and Volatility Trading."
*   **Button**: `[Deploy Gold Capital]`
    *   **Action**: Adds `item_gold_journey` to cart. Routes to `/checkout`.

### The Mastery Bundle (The Upsell)
*   **Price**: $750 (Save $150)
*   **Text**: "The Complete Institutional Desk. Access all three global markets simultaneously."
*   **Button**: `[Access the Institutional Desk]`
    *   **Action**: Adds `bundle_mastery` to cart. Routes to `/checkout`.

---

## Phase 3: The Checkout & Authentication

**URL**: `/checkout`
**Visual Layout**: 
*   Split screen. Left side: Order summary displaying the chosen Matrix (e.g., "The Crypto Matrix - $300"). Right side: Minimalist authentication and payment form.

### Step 3.1: Account Creation
*   **Fields**: `Email Address`, `Create Password`, `Confirm Password`.
*   **Button**: `[Continue to Payment]`
    *   **System Action**: Validates email format and password strength. If valid, creates a pending `User` record in PostgreSQL via Prisma. Sets `User.onboardingStatus = 'pending_payment'`.

### Step 3.2: Payment Gateway
*   **Fields**: `Card Number`, `MM/YY`, `CVC` (via Stripe Elements) OR `Pay with Crypto` (via Web3 Wallet Connect).
*   **Button**: `[Initialize Journey]`
    *   **System Action (Success)**: 
        *   Stripe charges $300.
        *   Webhook triggers backend to update `User.onboardingStatus = 'completed'`.
        *   Backend creates a `UserProgress` record mapping to the purchased `CourseModule` (e.g., `forex_path`).
        *   User is redirected to `/dashboard`.
    *   **System Action (Failure)**:
        *   UI throws a red toast notification: *"Execution Failed: Insufficient Liquidity or Invalid Credentials."* User remains on page.

---

## Phase 4: The Global Dashboard (The Launchpad)

**URL**: `/dashboard`
**Visual Layout**: 
*   This is the central nervous system. A personalized dashboard greeting the user.
*   **Header**: "Welcome, [Email/Username]. Your capital is deployed."
*   **Active Journeys Section**: Large cards displaying the packages they own.
*   **Locked Journeys Section**: Greyed-out cards for packages they haven't bought, serving as a constant passive upsell.

### The "Start Journey" Interaction
Let's assume the user bought the **Forex Journey**.
*   **Visual**: The Forex Card is vibrant blue, displaying a progress bar currently at `0%` and a "Current Rank: Level 0 - The Kid".
*   **Button**: `[Enter the Forex Matrix]`
    *   **System Action**: Queries the `UserProgress` table to find the user's current saved state. Since it's a new user, it returns `tier: 1, module: 1`.
    *   **Action**: Routes the user specifically to `/journey/forex/tier-1/module-1`.

---

## Database State Checkpoint
At the end of this flow, the Prisma Database looks exactly like this for the user:
```json
{
  "id": "uuid-1234",
  "email": "student@example.com",
  "role": "STUDENT",
  "purchasedPaths": ["FOREX"],
  "progress": {
    "forex": {
      "currentTier": 1,
      "currentModule": 1,
      "status": "IN_PROGRESS",
      "simulationScores": []
    }
  }
}
```

The user has now successfully navigated from an anonymous visitor to a fully authenticated, paid student standing at the door of Tier 1. The next blueprint (`01_Forex_Journey_UX.md`) will map the 30-day journey from this exact click.
