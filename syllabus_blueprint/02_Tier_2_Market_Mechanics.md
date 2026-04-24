# Tier 2: Market Mechanics (The Language of Algorithms)

## Overview
This tier contains 4 sections covering 18 modules. Having broken down retail fallacies in Tier 1, we now construct the institutional model. We do not look at "trendlines" or "retail support and resistance." We look at the raw mechanics of price delivery: Open, High, Low, Close (OHLC), dealing ranges, and liquidity engineering.

---

## Section 5: Anatomy of Price Delivery
*Goal: Understand the fractal nature of time and price.*

### Module 5.1: The True OHLCV Mechanism
- **Content**: A candlestick is not a shape; it is a footprint of time. Exploring exactly how algorithms open, manipulate (wicks), distribute (body), and close price across different sessions.

### Module 5.2: Fractal Scaling
- **Content**: The market is fractal. A 1-minute chart behaves identically to a Monthly chart. How a daily wick is composed of 15-minute structural shifts.
- **Interactive Task**: `fractal_dissection_tool`
  - **Mechanic**: User is shown a Daily candle. They must click to "zoom in" and correctly map the 1H structure that created the daily wick.

### Module 5.3: Institutional vs Retail Price Feeds
- **Content**: Spread, slippage, and the difference between B-Book retail brokers and direct institutional feeds.

---

## Section 6: Market Structure (The Map)
*Goal: Identify the overarching narrative of the market.*

### Module 6.1: Swings & Structural Points
- **Content**: Defining valid swing highs and swing lows. What constitutes a true break of structure (BOS) versus a liquidity sweep.

### Module 6.2: Internal vs. External Structure
- **Content**: The most common trap. Retail traders mistake internal minor pullbacks for major external structural shifts. How to map the true dealing range.

### Module 6.3: Market Structure Shift (MSS) / Change of Character (ChoCh)
- **Content**: Identifying the exact moment institutional narrative shifts from bullish to bearish.
- **Interactive Task**: `chart_annotation_mss`
  - **Mechanic**: 10 rapid-fire charts. User must drag a line specifically onto the exact swing low that, if broken, constitutes a true MSS. 
  - **Pass Condition**: 100% accuracy required.

### Module 6.4: The "Trend" Fallacy
- **Content**: Why "the trend is your friend" is a retail trap. Institutions do not trade trends; they trade from liquidity pool to liquidity pool.

---

## Section 7: Premium vs. Discount Arrays
*Goal: Understanding where algorithms are programmed to buy and sell.*

### Module 7.1: The Dealing Range & Equilibrium
- **Content**: How to anchor the Fibonacci retracement tool not as a magic ratio, but simply to find the 50% Equilibrium point of a dealing range.

### Module 7.2: Premium Pricing (Sell Zones)
- **Content**: Algorithms will not buy in Premium. They are programmed to distribute (sell) to retail buyers above the 50% line.

### Module 7.3: Discount Pricing (Buy Zones)
- **Content**: Algorithms accumulate (buy) below the 50% line from retail panic sellers.
- **Interactive Task**: `dealing_range_snapper`
  - **Mechanic**: User must anchor the Fibonacci correctly on 5 complex charts to identify the exact Discount zone before executing a simulated limit order.

---

## Section 8: The Mechanics of Liquidity
*Goal: Seeing the market as a heat map of stop-losses.*

### Module 8.1: Buy-Side Liquidity (BSL)
- **Content**: Resting buy stops above old highs. Why institutions drive price UP to trigger these stops, securing the liquidity they need to SELL massively.

### Module 8.2: Sell-Side Liquidity (SSL)
- **Content**: Resting sell stops below old lows. The fuel needed for institutions to BUY.

### Module 8.3: The "Double Top / Double Bottom" Trap
- **Content**: Retail traders see a double bottom and buy, placing stops just below it. Institutions see a massive pool of Sell-Side Liquidity.
- **Interactive Task**: `liquidity_heatmap_generator`
  - **Mechanic**: User is given a naked chart. They must use a "Heatmap Brush" to paint the areas with the highest concentration of retail stop-losses.
  - **Pass Condition**: 90% overlap with the system's calculated liquidity pools.

---

## Tier 2 Final Gate: The Structure & Liquidity Exam
- **Task**: `trading_scenario_no_indicators`
- **Format**: User enters the `MiniReplayEngine` with NO tools except horizontal lines. They must correctly annotate the BSL, SSL, and current Dealing Range on a live replay, and answer 3 questions about the algorithm's current objective.
- **Requirement**: 100% passing score required to unlock Tier 3 (Institutional Order Flow).
