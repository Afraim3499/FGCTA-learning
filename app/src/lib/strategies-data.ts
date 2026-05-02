/**
 * Strategy Data Repository (V1)
 * 
 * Contains the learning checklists and logic definitions for the Strategy Lab.
 * This acts as a lightweight source of truth before a full database migration.
 */

export interface StrategyDefinition {
  logicId: string;
  name: string;
  family: string;
  track: "core" | "forex" | "crypto" | "gold";
  level: number;
  setupSummary: string;
  checklists: {
    entry: string[];
    exit: string[];
    invalidation: string[];
  };
  riskNotes: string;
  metrics: {
    winRate: string;
    avgR: string;
    complexity: "LOW" | "MED" | "HIGH" | "ELITE";
  };
  linkedModuleNumber: string;
  practiceConfig?: {
    prompt: string;
    guideSteps: string[];
    reflection: string[];
    selfReview: string[];
    chartDatasetId?: string;
    validationMode: "self" | "guided" | "none";
  };
}

export const STRATEGIES_DATA: StrategyDefinition[] = [
  {
    logicId: "TF_01.1",
    name: "Moving Average Bounce (Standard)",
    family: "Trend Following",
    track: "core",
    level: 2,
    setupSummary: "Capitalizing on trend pullbacks to a smoothed price mean (EMA 21/50).",
    checklists: {
      entry: [
        "Price is in a clear trend (HH/HL or LH/LL)",
        "Price pulls back to the 21 EMA",
        "Bullish/Bearish rejection candle (Pin bar, Engulfing) touches EMA",
        "Entry on break of rejection candle high/low"
      ],
      exit: [
        "Take Profit at next major structure level",
        "Trailing stop behind the most recent swing point"
      ],
      invalidation: [
        "Price closes decisively on the wrong side of the EMA",
        "Structure breaks (Change of Character)"
      ]
    },
    riskNotes: "Avoid in ranging markets. Best used on 4H or Daily timeframes.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.1",
    practiceConfig: {
      prompt: "Identify a trend pullback and a valid EMA rejection candle.",
      guideSteps: [
        "Identify the current trend (HH/HL structure).",
        "Mark the zone where price touches the 21 or 50 EMA.",
        "Highlight the rejection candle (Pin bar or Engulfing) that signals the entry.",
        "Ensure the candle closes back in the direction of the trend."
      ],
      reflection: [
        "Did price close decisively on the EMA or just wick through it?",
        "Is the trend momentum increasing or slowing down before the pullback?",
        "What structural level is the next likely target?"
      ],
      selfReview: [
        "I marked the trend structure clearly.",
        "I identified a valid EMA touch point.",
        "I marked a high-probability rejection candle.",
        "I checked for confluence with horizontal structure."
      ],
      validationMode: "self"
    }
  },
  {
    logicId: "TF_06.1",
    name: "Structural Breakout (Retest)",
    family: "Trend Structure",
    track: "core",
    level: 1,
    setupSummary: "Trading the first major structural break and retest of a new trend.",
    checklists: {
      entry: [
        "Price breaks a significant resistance/support level",
        "Volume expansion on breakout (where available)",
        "Wait for retest of the broken level (Flip)",
        "Look for lower timeframe entry trigger at retest"
      ],
      exit: [
        "1:2 Minimum Risk/Reward",
        "Exit at next liquidity zone"
      ],
      invalidation: [
        "Price re-enters the previous range and stays there",
        "Breakout candle is immediately engulfed"
      ]
    },
    riskNotes: "Ensure breakout is not a 'fakeout' by waiting for the candle close.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "1.1"
  },
  {
    logicId: "TF_MA_01",
    name: "Moving-Average Crossover Trend",
    family: "Trend following",
    track: "core",
    level: 2,
    setupSummary: "Use two moving averages; a buy signal when the fast MA crosses above the slow MA; sell when it crosses below.",
    checklists: {
      entry: [
        "Fast MA (e.g., 50) crosses above Slow MA (e.g., 200)",
        "Price is above both moving averages",
        "Volume expansion on the crossover candle"
      ],
      exit: [
        "Fast MA crosses back below Slow MA",
        "Trailing stop below recent swing low"
      ],
      invalidation: [
        "Price closes decisively below both MAs",
        "MAs begin to flatten or weave (Ranging market)"
      ]
    },
    riskNotes: "Highly lagging. Best used in strong trending markets. Avoid in consolidation.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.1"
  },
  {
    logicId: "TF_MA_02",
    name: "Single Moving-Average Filter",
    family: "Trend following",
    track: "core",
    level: 2,
    setupSummary: "Use one longer-period moving average as a filter—only take long trades when price is above the MA and short trades when below.",
    checklists: {
      entry: [
        "Identify direction based on 200 SMA",
        "Price pulls back to the MA but holds above it",
        "Enter on bullish rejection (Pin bar/Engulfing) at the MA"
      ],
      exit: [
        "Price closes on the opposite side of the MA",
        "Fixed 2R target"
      ],
      invalidation: [
        "Market sentiment shift (News)",
        "Structure shift (HL failure)"
      ]
    },
    riskNotes: "Acts as a dynamic Support/Resistance level.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.1"
  },
  {
    logicId: "TF_MA_03",
    name: "Dual Exponential vs. Simple MA Crossover",
    family: "Trend following",
    track: "core",
    level: 2,
    setupSummary: "Compare exponential and simple moving averages of different lengths; crossovers indicate shifts in momentum.",
    checklists: {
      entry: [
        "EMA (Fast) crosses SMA (Slow)",
        "EMA shows faster reaction to recent price action",
        "Confirm with Price Action trigger"
      ],
      exit: [
        "EMA crosses back",
        "Momentum divergence"
      ],
      invalidation: [
        "Lag leads to late entry/exit",
        "Whipsaw in low volatility"
      ]
    },
    riskNotes: "EMA is more responsive but prone to false signals.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.1"
  },
  {
    logicId: "TF_MACD_01",
    name: "MACD Trend-Following",
    family: "Trend following",
    track: "core",
    level: 2,
    setupSummary: "Using the MACD line and signal line crossovers to time trend entries.",
    checklists: {
      entry: [
        "MACD line crosses above Signal line",
        "Crossover occurs below the zero line (oversold context)",
        "Price action shows higher low"
      ],
      exit: [
        "MACD line crosses below Signal line",
        "MACD Histogram shows declining momentum"
      ],
      invalidation: [
        "Divergence between MACD and Price",
        "Signal occurs in a sideways range"
      ]
    },
    riskNotes: "MACD is a momentum-lag hybrid. Use for confirmation, not primary entry.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.3",
    practiceConfig: {
      prompt: "Mark the MACD crossover point and the corresponding price behavior.",
      guideSteps: [
        "Locate the MACD line crossing above/below the Signal line.",
        "Identify the price action candle that corresponds to the crossover.",
        "Mark the structural high/low that was established prior to the cross.",
        "Check if the crossover occurs above or below the zero line for context."
      ],
      reflection: [
        "Is price making a higher low as the MACD crosses bullishly?",
        "Is there any divergence between price and the MACD histogram?",
        "How sharp is the angle of the crossover?"
      ],
      selfReview: [
        "I identified the exact crossover candle.",
        "I checked the MACD zero-line context.",
        "I looked for momentum divergence.",
        "I verified the structural alignment."
      ],
      validationMode: "self"
    }
  },
  {
    logicId: "TF_ADX_01",
    name: "ADX Trend Strength Filter",
    family: "Trend following",
    track: "core",
    level: 2,
    setupSummary: "Using the ADX indicator to determine if the market is trending strongly enough to apply trend-following rules.",
    checklists: {
      entry: [
        "ADX value is above 25",
        "ADX line is sloping upward",
        "Combine with MA crossover or breakout"
      ],
      exit: [
        "ADX falls below 20 (Ranging/Choppy)",
        "ADX slopes downward (Losing strength)"
      ],
      invalidation: [
        "Low ADX (<20) indicates high risk for trend followers",
        "Extreme ADX (>50) can signify exhaustion"
      ]
    },
    riskNotes: "ADX does not show direction, only strength. Always use with a directional indicator.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.5",
    practiceConfig: {
      prompt: "Identify where trend strength becomes valid for entry.",
      guideSteps: [
        "Locate where the ADX line crosses above the 25 level.",
        "Identify the directional trend (using MAs or structure).",
        "Mark the 'Expansion Zone' where both ADX and Price are rising.",
        "Identify any signs of ADX exhaustion above 50."
      ],
      reflection: [
        "Is the ADX slope steep or flat during the move?",
        "Did price move significantly before the ADX reached 25?",
        "Is there a directional bias confirmed by another tool?"
      ],
      selfReview: [
        "I marked the ADX > 25 threshold point.",
        "I verified the directional trend alignment.",
        "I identified the expansion phase.",
        "I checked for exhaustion signals."
      ],
      validationMode: "self"
    }
  },
  {
    logicId: "BO_01.1",
    name: "Horizontal S/R Breakout",
    family: "Breakout",
    track: "core",
    level: 2,
    setupSummary: "Trading the expansion after a period of price consolidation at a key horizontal level.",
    checklists: {
      entry: [
        "Identify clear horizontal resistance or support with 3+ touches",
        "Volume is declining during the consolidation phase",
        "Wait for a candle to close decisively outside the level",
        "Entry on break of the breakout candle's high/low"
      ],
      exit: [
        "Take profit at the next major liquidity zone (previous swing)",
        "Trailing stop at the breakout point (entry + spread)"
      ],
      invalidation: [
        "Price fails to hold outside the level and closes back inside (False Breakout)",
        "Immediate rejection candle (Pin bar) following the break"
      ]
    },
    riskNotes: "Always wait for the candle close. Wicks are traps.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.2",
    practiceConfig: {
      prompt: "Mark the horizontal level and the decisive breakout candle.",
      guideSteps: [
        "Identify a horizontal S/R level with at least 3 distinct touches.",
        "Mark the consolidation range immediately preceding the break.",
        "Highlight the breakout candle that closed outside the level.",
        "Mark the retest area if applicable."
      ],
      reflection: [
        "Was the breakout candle accompanied by a volume spike?",
        "Did the breakout candle close near its high/low (full body)?",
        "Is price returning to the 'flipped' level with low momentum?"
      ],
      selfReview: [
        "I marked a level with 3+ clear touches.",
        "I identified the breakout candle close.",
        "I checked for fakeout rejection wicks.",
        "I marked the structural target."
      ],
      validationMode: "self"
    }
  },
  {
    logicId: "BO_02.1",
    name: "London Open Breakout",
    family: "Breakout",
    track: "core",
    level: 2,
    setupSummary: "Capturing the trend direction established during the first hour of the London session.",
    checklists: {
      entry: [
        "Define the high/low of the first 60 minutes of the London session",
        "Wait for a 15m candle close outside this 'Opening Range'",
        "Momentum must be supported by relative volume expansion"
      ],
      exit: [
        "End of the London morning session (11:00 GMT)",
        "Fixed 1:1.5 Risk/Reward"
      ],
      invalidation: [
        "Price reverses and breaks the opposite side of the opening range",
        "News event at 08:30 or 09:30 GMT causes whip-saw"
      ]
    },
    riskNotes: "Avoid if the opening range is excessively wide (>50% of ADR).",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.2",
    practiceConfig: {
      prompt: "Mark the London opening range and the direction-setting breakout.",
      guideSteps: [
        "Mark the High and Low of the first 60 minutes of London session.",
        "Identify the first 15m candle that closes outside this range.",
        "Mark the initial expansion target based on session volatility.",
        "Identify any 'Stop Run' that occurred before the true move."
      ],
      reflection: [
        "Was the opening range narrow or wide relative to recent days?",
        "Did the breakout happen in the first 30 minutes or later?",
        "Is there a clear higher-timeframe bias supporting the move?"
      ],
      selfReview: [
        "I correctly marked the 1-hour opening range.",
        "I identified the 15m breakout close.",
        "I checked for news events during the open.",
        "I marked the session expansion target."
      ],
      validationMode: "self"
    }
  },
  {
    logicId: "BO_03.1",
    name: "Bollinger Squeeze Breakout",
    family: "Breakout",
    track: "core",
    level: 2,
    setupSummary: "Trading the volatility expansion following a period of extreme low-volatility compression.",
    checklists: {
      entry: [
        "Bollinger Bands (20, 2) move inside the Keltner Channels (20, 1.5)",
        "Wait for the 'Squeeze' to release (BBs expand outside Keltner)",
        "Price must close outside the bands in the direction of the trend"
      ],
      exit: [
        "Exit when the band on the opposite side begins to turn inward",
        "Standard trailing stop using ATR"
      ],
      invalidation: [
        "Price immediately crosses the mean (20 SMA) after the break",
        "Bands expand but price stays flat (Volatility without momentum)"
      ]
    },
    riskNotes: "Highly effective on 1H and 4H timeframes for identifying major moves.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.2"
  },
  {
    logicId: "RM_01.1",
    name: "Fixed Fractional Sizing",
    family: "Risk Management",
    track: "core",
    level: 6,
    setupSummary: "The industry standard for position sizing based on a fixed percentage of account equity.",
    checklists: {
      entry: [
        "Determine current Account Equity",
        "Define max risk per trade (typically 1%)",
        "Calculate Stop Loss distance in price units",
        "Apply formula: (Equity * Risk%) / Stop Distance"
      ],
      exit: [
        "Consistent sizing regardless of 'feeling'",
        "Adjust size downward if account is in a drawdown"
      ],
      invalidation: [
        "Never exceed the defined Risk% for 'conviction'",
        "Do not count open pnl as equity for new sizing"
      ]
    },
    riskNotes: "The foundation of trading longevity. Non-negotiable.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "6.1"
  },
  {
    logicId: "RM_01.3",
    name: "ATR-Adjusted Volatility Sizing",
    family: "Risk Management",
    track: "core",
    level: 6,
    setupSummary: "Dynamic position sizing that automatically adjusts for market volatility using the ATR indicator.",
    checklists: {
      entry: [
        "Measure the current 14-period ATR",
        "Set Stop Loss at N * ATR (typically 1.5 or 2.0)",
        "Use the ATR-based stop distance in the standard sizing formula"
      ],
      exit: [
        "Dynamic trailing stop following ATR progression"
      ],
      invalidation: [
        "ATR spike during news can lead to excessively small sizes",
        "Ensure ATR period is consistent across all trades"
      ]
    },
    riskNotes: "Protects against being 'shaken out' during high-volatility regimes.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "6.1"
  },
  // Forex Specific Examples
  {
    logicId: "FX_MA_01",
    name: "London Session Momentum",
    family: "Market Specific Edge",
    track: "forex",
    level: 4,
    setupSummary: "Capturing the volatility spike at the London session open.",
    checklists: {
      entry: [
        "London session opens (08:00 GMT)",
        "Price breaks the Asian Session High/Low",
        "Momentum candle confirmation",
        "Target the opposing session boundary"
      ],
      exit: [
        "End of London AM session",
        "Fixed 1:1.5 RR"
      ],
      invalidation: [
        "V-shape recovery back into Asian range",
        "Major red-folder news release"
      ]
    },
    riskNotes: "High volatility. Use smaller position size if spread is wide.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "4.1"
  },
  // Crypto Specific Examples
  {
    logicId: "CR_DER_01",
    name: "Funding Rate Arbitrage (Delta Neutral)",
    family: "Derivatives & Funding",
    track: "crypto",
    level: 5,
    setupSummary: "Exploiting imbalances in perpetual swap funding rates while maintaining zero price exposure.",
    checklists: {
      entry: [
        "Identify Funding Rate > 0.03% per 8h interval",
        "Buy Spot equivalent amount of asset",
        "Open 1x Short Position on Perpetual Swap",
        "Confirm Net Delta = 0"
      ],
      exit: [
        "Funding rate drops below 0.01%",
        "Basis risk expansion beyond threshold"
      ],
      invalidation: [
        "Unwinding costs exceed projected 24h funding yield",
        "Exchange liquidity crunch"
      ]
    },
    riskNotes: "Requires high capital efficiency. Watch for liquidation on the short leg during extreme spikes.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "5.2"
  },
  {
    logicId: "CR_ON_01",
    name: "Exchange Inflow Exhaustion",
    family: "On-Chain Analytics",
    track: "crypto",
    level: 6,
    setupSummary: "Identifying potential price floors by tracking the cessation of whale deposit volume.",
    checklists: {
      entry: [
        "Price in a significant downtrend",
        "Exchange Inflow Mean (MA7) reaches 2-year high",
        "Wait for inflow volume to drop 50% from peak",
        "Buy on first bullish divergence in RSI (1H)"
      ],
      exit: [
        "Next major resistance level",
        "Trailing stop at break-even after 5% move"
      ],
      invalidation: [
        "New massive inflow spike (> previous peak)",
        "Major stablecoin de-peg event"
      ]
    },
    riskNotes: "On-chain data is delayed. Use only for macro positioning.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "6.1"
  },
  // Gold Specific Examples
  {
    logicId: "AU_MAC_01",
    name: "Real Yield Inversion Play",
    family: "Macro Drivers",
    track: "gold",
    level: 3,
    setupSummary: "Trading Gold's inverse correlation with US 10Y Real Yields.",
    checklists: {
      entry: [
        "10-Year Real Yield (TIPS) begins a downward trend",
        "US Dollar Index (DXY) is ranging or weak",
        "Gold breaks above the 50-day SMA",
        "Entry on retest of 50-day SMA"
      ],
      exit: [
        "Real Yields bottom and begin reversal",
        "Targeting previous all-time high zones"
      ],
      invalidation: [
        "Unexpected hawkish pivot from the Federal Reserve",
        "Sudden spike in nominal yields without inflation offset"
      ]
    },
    riskNotes: "Correlations can break during 'Flight to Quality' events.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "3.1"
  },
  {
    logicId: "AU_SEA_01",
    name: "Q1 Seasonal Demand Surge",
    family: "Seasonal Patterns",
    track: "gold",
    level: 4,
    setupSummary: "Capturing the historical bullishness in Gold during January and February.",
    checklists: {
      entry: [
        "Calendar Date: Last week of December",
        "Gold trading above its 200-day EMA",
        "Look for 'Santa Rally' momentum in equities",
        "Scale into position over 5 days"
      ],
      exit: [
        "Last week of February",
        "Signs of parabolic exhaustion"
      ],
      invalidation: [
        "Extreme Dollar strength in early Q1",
        "Major technical breakdown below the 200-EMA"
      ]
    },
    riskNotes: "Past performance does not guarantee future results. Seasonal plays are secondary to macro.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "4.4"
  },
  // --- LEVEL 1 FOUNDATIONS ---
  {
    logicId: "SR_01.1",
    name: "Market Supply/Demand",
    family: "SR",
    track: "core",
    level: 1,
    setupSummary: "Identifying high-volume zones where institutional orders are clustered. We trade the 'Return to Origin'.",
    checklists: {
      entry: [
        "Identify an impulsive move that broke previous structure",
        "Mark the last candle before that impulsive move (The Order Block)",
        "Wait for price to return to the 50% equilibrium of that zone",
        "Verify volume decrease on the return move"
      ],
      exit: [
        "1:2 RR Minimum",
        "Opposing supply/demand zone"
      ],
      invalidation: [
        "A full candle body close outside the 100% boundary of the zone",
        "A sudden high-volume counter-spike before reaching the zone"
      ]
    },
    riskNotes: "Institutional zones are magnets, but they are often 'hunted' before price moves. Use a wider stop or wait for lower timeframe confirmation.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "1.2"
  },
  {
    logicId: "VM_02.1",
    name: "Momentum Fuel Check",
    family: "VM",
    track: "core",
    level: 1,
    setupSummary: "Verifying that a move has the 'fuel' (volume) required to sustain a breakout.",
    checklists: {
      entry: [
        "Locate the breakout candle",
        "Check volume: Must be 1.5x greater than the 20-period moving average",
        "Check Relative Strength: Market must be outperforming its sector index",
        "Wait for the 'Stop-Run' on the opposite side to clear liquidity"
      ],
      exit: [
        "Trailing stop behind momentum candles",
        "Exhaustion volume spike (Climax)"
      ],
      invalidation: [
        "Price returns to the center of the breakout range within 3 candles",
        "Volume is high on the breakout, but price fails to expand (Climax Volume)"
      ]
    },
    riskNotes: "High volume can sometimes signify 'exhaustion' rather than 'expansion'. Watch for the follow-through.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "1.3"
  },
  {
    logicId: "PA_04.1",
    name: "Price Action Candle Timing",
    family: "PA",
    track: "core",
    level: 1,
    setupSummary: "Identifying high-confidence price action triggers at predefined institutional levels.",
    checklists: {
      entry: [
        "Price must be touching a Level 1 Support or Resistance zone",
        "Identify a 'Pin Bar' or 'Engulfing' candle with a long wick into the zone",
        "Entry on the break of the candle high/low",
        "Verify no major economic news (NFP/CPI) within 60 minutes"
      ],
      exit: [
        "Next structural swing point",
        "Opposite candle reversal signal"
      ],
      invalidation: [
        "Price closes above the wick of the signal candle",
        "Three consecutive candles fail to move away from the zone (Stagnation)"
      ]
    },
    riskNotes: "Candle patterns alone are retail traps. They MUST occur at a valid structural level.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "1.4"
  },
  {
    logicId: "EX_01",
    name: "Academy Entry Logic",
    family: "Decision Logic",
    track: "core",
    level: 3,
    setupSummary: "The baseline method for entering a trade once all confluence criteria are met.",
    checklists: {
      entry: [
        "Wait for price to reach the Order Block or Liquidity Zone",
        "Identify a rejection trigger (Wick rejection or Engulfing)",
        "Calculate risk-based position size (Max 2%)",
        "Place entry order on trigger candle break"
      ],
      exit: [
        "Target 1: 2R (75% position close)",
        "Target 2: Next major liquidity zone",
        "Move Stop Loss to Break-Even at 1.5R"
      ],
      invalidation: [
        "Price moves directly through the zone without rejection",
        "Higher Timeframe structure shift (CHoCH)"
      ]
    },
    riskNotes: "Focus on entry speed and precision. Do not hesitate once the trigger is present.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "3.1"
  },
  {
    logicId: "TF_ICH_01",
    name: "Ichimoku Cloud Logic",
    family: "Trend following",
    track: "core",
    level: 2,
    setupSummary: "A comprehensive trend-following system using the 'Kumo' (Cloud) to filter direction and volatility.",
    checklists: {
      entry: [
        "Price closes above the Cloud (Kumo)",
        "Tenkan-Sen (Fast) is above Kijun-Sen (Slow)",
        "Chikou Span (Lagging) is above price from 26 periods ago",
        "Kumo ahead is bullish (Green)"
      ],
      exit: [
        "Price closes inside or below the Cloud",
        "Tenkan-Sen crosses below Kijun-Sen"
      ],
      invalidation: [
        "Price enters a 'Flat Kumo' (Range-bound market)",
        "Frequent crossovers indicate lack of trend"
      ]
    },
    riskNotes: "Avoid trading inside the cloud. It represents 'No-Man's Land'.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.7"
  },
  {
    logicId: "TF_ST_01",
    name: "Supertrend Volatility Stop",
    family: "Trend following",
    track: "core",
    level: 2,
    setupSummary: "A dynamic trailing stop system that adjusts to market volatility (ATR).",
    checklists: {
      entry: [
        "Supertrend line flips from Red to Green",
        "Flip candle has a strong bullish close",
        "Align with higher timeframe MA filter"
      ],
      exit: [
        "Price closes below the Supertrend line",
        "Line flips to Red"
      ],
      invalidation: [
        "Market enters a tight range (ATR drops significantly)",
        "Frequent flips indicate low-momentum chop"
      ]
    },
    riskNotes: "Very effective for trailing profits in parabolic moves. Poor in sideways markets.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.7"
  },
  {
    logicId: "TF_DC_01",
    name: "Donchian Channel Breakout",
    family: "Trend following",
    track: "core",
    level: 2,
    setupSummary: "The 'Turtle' system baseline—trading breakouts of the N-period high/low.",
    checklists: {
      entry: [
        "Price breaks above the 20-period upper Donchian channel",
        "Volume expansion confirmed",
        "Breakout occurs after a period of contraction"
      ],
      exit: [
        "Price touches the 10-period lower channel (Trailing exit)",
        "Opposite breakout"
      ],
      invalidation: [
        "Immediate return into the channel (False breakout)",
        "Narrow channel width indicates low volatility"
      ]
    },
    riskNotes: "Requires extreme discipline to handle frequent small false-breakout losses for the big trend wins.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.9"
  },
  {
    logicId: "TF_BB_01",
    name: "Bollinger Band Trend Breakout",
    family: "Trend following",
    track: "core",
    level: 2,
    setupSummary: "Trading the release of volatility after a Bollinger Squeeze.",
    checklists: {
      entry: [
        "Bollinger Bands (20, 2) constrict (Squeeze)",
        "Price closes outside the upper/lower band",
        "Expansion of bands (Walking the bands)"
      ],
      exit: [
        "Price touches the 20-period mean (Middle band)",
        "Bands begin to constrict again"
      ],
      invalidation: [
        "Price crosses the mean immediately after the break",
        "Opposite band does not expand (Fake expansion)"
      ]
    },
    riskNotes: "The 'Squeeze' is a coiled spring. The longer the squeeze, the more explosive the break.",
    metrics: { winRate: "55%", avgR: "2.5", complexity: "MED" }, linkedModuleNumber: "2.9"
  }
];
