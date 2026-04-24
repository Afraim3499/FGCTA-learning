# Tier 3: Institutional Order Flow (Smart Money Concepts)

## Overview
This tier bridges the gap between raw market structure (Tier 2) and institutional intent. We focus exclusively on the footprints left behind by Bank Financial Institutions (BFIs). Retail traders look at indicators; institutional traders look at Order Blocks, Fair Value Gaps (FVGs), and Mitigation Blocks.

---

## Section 9: Order Blocks & Mitigation Blocks
*Goal: Identify the exact price levels where institutions injected massive capital.*

### Module 9.1: The True Definition of an Order Block
- **Content**: An Order Block is not just the "last down candle before an up move." It requires a break of structure (BOS) and an accompanying imbalance to be valid. We dissect the anatomy of high-probability Order Blocks.

### Module 9.2: Bullish and Bearish Order Blocks (+OB / -OB)
- **Content**: How to identify the Open and the Mean Threshold (50% mark) of an Order Block as precise entry criteria.
- **Interactive Task**: `chart_annotation_ob`
  - **Mechanic**: User is shown 5 charts with obvious shifts in market structure. They must draw the bounding box accurately over the valid +OB or -OB, specifically highlighting the Mean Threshold.

### Module 9.3: Mitigation Blocks vs Breaker Blocks
- **Content**: A Mitigation Block occurs when price fails to take out a swing high/low, breaks structure, and returns to mitigate trapped institutional orders. 
- **Core Lesson**: Recognizing when an Order Block fails, and how it transforms into a Breaker Block.

---

## Section 10: Fair Value Gaps (FVG) & Imbalances
*Goal: Understanding price inefficiencies and the algorithmic magnetic pull to fill them.*

### Module 10.1: The Three-Candle Formation
- **Content**: Breaking down the exact anatomy of a Fair Value Gap. Identifying the space between the high of Candle 1 and the low of Candle 3.

### Module 10.2: Imbalance vs Efficiency
- **Content**: Algorithms seek efficiency. When price is delivered too rapidly (creating an FVG), the algorithm is drawn back to that zone to efficiently price the asset.
- **Interactive Task**: `fvg_identifier`
  - **Mechanic**: A timed visual exercise. Charts flash for 10 seconds. User must click on all valid FVGs before the timer expires. False positives (efficient wicks) result in a penalty.

### Module 10.3: Consequent Encroachment (CE)
- **Content**: The 50% midpoint of a Fair Value Gap. Why algorithms often respect the CE perfectly before reversing.

---

## Section 11: Liquidity Voids & Volume Imbalances
*Goal: Differentiating between gaps in price and gaps in volume.*

### Module 11.1: Liquidity Voids
- **Content**: Sudden, massive ranges in price (often news-driven) where liquidity was stripped from the book. How price violently retraces to fill voids.

### Module 11.2: Volume Imbalances
- **Content**: When the bodies of two consecutive candles do not overlap, but their wicks do. Recognizing this subtle institutional footprint.

---

## Tier 3 Final Gate: The Footprint Identifier
- **Task**: `chart_synthesis_exam`
- **Format**: User enters the `MiniReplayEngine`. The chart is naked. They must accurately annotate:
  1. The Current Dealing Range
  2. The valid Order Block
  3. The unmitigated FVG
  4. The next draw on liquidity (BSL/SSL).
- **Requirement**: The system algorithmically checks their annotations against the exact coordinates. 90% accuracy required to unlock Tier 4 (Time & Price).
