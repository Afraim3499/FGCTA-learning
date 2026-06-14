export interface BaseQuestion {
  id: string;
  type: "MCQ" | "MATCHING" | "SCENARIO_CLICK" | "TICKER_DECISION";
  domain: "chart_reading" | "market_structure" | "execution_precision" | "risk_management" | "swing_market" | "flat_market" | "forex" | "gold" | "crypto";
  logicId: string;
  prompt: string;
  explanation: string;
  
  // MCQ
  options?: string[];
  correctIndex?: number;
  
  // Matching
  matchingLeft?: string[];
  matchingRight?: string[];
  
  // Scenario Click
  chartState?: any;
  targetX?: number;
  targetY?: number;
  tolerance?: number;
  
  // Ticker Decision
  tickerData?: any;
  correctDecision?: "execute" | "wait" | "flat";
}

export const STRATEGY_QUESTIONS: BaseQuestion[] = [
  {
    id: "q_tf_01.1_mcq",
    type: "MCQ",
    domain: "swing_market",
    logicId: "TF_01.1",
    prompt: "When trading the Moving Average Bounce (TF_01.1) in a bullish trend, what is the prerequisite candlestick confirmation at the 21 EMA?",
    options: [
      "A clean break and close below the 50 EMA",
      "A rejection candle (Pin Bar or Engulfing) touching and closing above the 21 EMA",
      "A series of doji candles indicating volume exhaustion",
      "A gap down crossing the moving average mean"
    ],
    correctIndex: 1,
    explanation: "Rejection candles like Pin Bars or Engulfing candles indicate that buying pressure was triggered at the exponential average, confirming structural support."
  },
  {
    id: "q_tf_01.1_matching",
    type: "MATCHING",
    domain: "chart_reading",
    logicId: "TF_01.1",
    prompt: "Match the EMA bounce trading parameters to their correct structural meanings:",
    matchingLeft: [
      "21 EMA Line",
      "Broken Swing High",
      "rejection Candle Wick",
      "Body close below EMA"
    ],
    matchingRight: [
      "Dynamic Price Mean (Support)",
      "Horizontal Target / Target Range",
      "Liquidity Sweep / Stop Hunt",
      "Setup Invalidation Signal"
    ],
    explanation: "In trend pullbacks, the EMA acts as dynamic support, rejection wicks sweep micro-liquidity, and a full close below the EMA invalidates the trend momentum."
  },
  {
    id: "q_sr_01.1_click",
    type: "SCENARIO_CLICK",
    domain: "market_structure",
    logicId: "SR_01.1",
    prompt: "Click on the exact coordinate of the Order Block (Supply/Demand zone origin) that initiated the expansion run.",
    chartState: {
      candles: [
        { time: 1, open: 10, high: 12, low: 9, close: 11, volume: 100 },
        { time: 2, open: 11, high: 11.5, low: 8.5, close: 9, volume: 110 }, // The OB candle
        { time: 3, open: 9, high: 15, low: 9, close: 14, volume: 300 }, // Breakout start
        { time: 4, open: 14, high: 18, low: 13, close: 17, volume: 280 }
      ]
    },
    targetX: 50.0, // Mapped to time 2 (middle of chart)
    targetY: 85.0, // Bottom wick area of the down candle
    tolerance: 15.0,
    explanation: "The demand zone (Order Block) is the last down candle (time 2) before the high-volume displacement rally that broke structure."
  },
  {
    id: "q_cr_der_01_ticker",
    type: "TICKER_DECISION",
    domain: "crypto",
    logicId: "CR_DER_01",
    prompt: "Evaluate the perp funding rate and order book liquidity. What is the correct delta-neutral action?",
    tickerData: {
      fundingRate8h: 0.045, // High positive funding rate
      spotAsk: 62050,
      perpBid: 62095,
      spreadPct: 0.07,
      volatility: "active"
    },
    correctDecision: "execute",
    explanation: "With a funding rate above 0.03% and premium perp bids, executing a spot buy + perp short splits positive funding payouts while maintaining a delta-neutral hedge."
  },
  {
    id: "q_rm_01.3_mcq",
    type: "MCQ",
    domain: "risk_management",
    logicId: "RM_01.3",
    prompt: "When using ATR-Adjusted Volatility Sizing (RM_01.3), if market volatility (ATR) doubles, how must position lot sizes adjust to keep risk identical?",
    options: [
      "Lot size remains constant; stop distance is halved",
      "Lot size is halved; stop distance is doubled",
      "Lot size is doubled; stop distance remains constant",
      "Lot size is quadrupled to cover spread drag"
    ],
    correctIndex: 1,
    explanation: "To keep capital risk equal, a wider stop (doubled ATR distance) requires cutting the lot size in half: Size = (Equity * Risk%) / Stop Distance."
  },
  {
    id: "q_fx_ma_01_matching",
    type: "MATCHING",
    domain: "forex",
    logicId: "FX_MA_01",
    prompt: "Match the London Session Momentum (FX_MA_01) phases to their correct execution requirements:",
    matchingLeft: [
      "Asian Session High/Low",
      "London Open (08:00 GMT)",
      "First 15m Candle Close",
      "Opposing Range limit"
    ],
    matchingRight: [
      "Reference Liquidity Borders",
      "Volatility Entry Window",
      "Breakout Confirmation Signal",
      "Target Profit Level"
    ],
    explanation: "London open breakout trading maps key Asian range boundaries, waits for 15m breakout candles, and exits at the opposite end of daily range liquidity."
  },
  {
    id: "q_au_mac_01_mcq",
    type: "MCQ",
    domain: "gold",
    logicId: "AU_MAC_01",
    prompt: "In Gold Macro Real Yield Inversion (AU_MAC_01), how does an increase in US 10-Year Real Yields (TIPS) typically impact spot Gold prices (XAUUSD)?",
    options: [
      "Drives gold prices higher as yields indicate inflation",
      "Drives gold prices lower because gold yields 0% and yield assets become more attractive",
      "Has zero correlation with gold pricing",
      "Triggers high volume buy cycles on COMEX futures"
    ],
    correctIndex: 1,
    explanation: "Gold is a non-yielding asset. When real yields rise, opportunity costs grow, driving capital outflows from Gold into USD debt products."
  }
];
