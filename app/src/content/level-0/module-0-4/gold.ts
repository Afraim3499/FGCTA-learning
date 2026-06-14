import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Introduction to Gold Price Charts",
    "label": "Gold Track",
    "body": "### Introduction to Gold Price Charts\nGold price charts visually display price changes for XAU/USD over specific intervals of time, enabling analysis of market trends.\n\n* **Chart Purpose**: Helps identify key support and resistance zones where buyers or sellers historically entered the market.\n* **Timeframe Intervals**: Charts are viewed in daily (1D), hourly (1H), or minute (15m, 5m, 1m) timeframes. A 1-hour chart groups price action into hourly bars.\n* **Session Structure**: Gold charts show distinct behaviors depending on the active trading session (London, New York, or Asia).",
    "context": {
      "keyTerms": [
        {
          "term": "Price Chart",
          "definition": "A visual timeline representing price changes over time."
        },
        {
          "term": "Timeframe",
          "definition": "The specific time interval represented by each segment of the chart (e.g., 1 hour)."
        }
      ],
      "whyThisMatters": "Charts provide the visual canvas where you perform structural analysis and define trading setups.",
      "realLifeExample": "A 1-hour chart of XAU/USD shows gold trading within a steady channel between $1,840 and $1,860 over a 48-hour period.",
      "commonMistake": "Ignoring the timeframe being viewed, leading to taking a short-term trade that conflicts with the long-term trend."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "concept",
    "title": "Anatomy of a Gold Candlestick",
    "label": "Gold Track",
    "body": "### Anatomy of a Gold Candlestick\nEach candlestick on a gold chart summarizes four key prices (Open, High, Low, Close) for a chosen timeframe interval.\n\n* **Candle Body**: The thick rectangular part representing the price range between the open (start price) and the close (end price).\n* **Wicks (Shadows)**: The thin lines extending above and below the body, showing the highest and lowest prices reached during that period.\n* **OHLC Data**: Open, High, Low, and Close prices define the structure of every candlestick.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Body",
          "definition": "The central part of the candlestick representing the range between open and close."
        },
        {
          "term": "Candle Wick",
          "definition": "The thin lines showing price extremes (highs and lows) during the candle's duration."
        }
      ],
      "whyThisMatters": "Learning to read wicks and bodies is fundamental to structural analysis and identifying price rejection.",
      "realLifeExample": "A 1-hour gold candle opens at $1,850.00 and closes at $1,855.00, with a high of $1,858.00 and a low of $1,848.00.",
      "commonMistake": "Only looking at the candle body, which ignores the price extremes (wicks) where key liquidity sits."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "concept",
    "title": "Bullish vs. Bearish Gold Candles",
    "label": "Gold Track",
    "body": "### Bullish vs. Bearish Gold Candles\nCandle colors indicate whether the price closed higher or lower than its opening level.\n\n* **Bullish (Green) Candle**: Price closed higher than it opened (Close > Open), indicating that buying pressure dominated.\n* **Bearish (Red) Candle**: Price closed lower than it opened (Close < Open), indicating that selling pressure dominated.\n* **Doji (Neutral) Candle**: The open and close prices are nearly identical, leaving a thin line as a body, indicating indecision in the market.",
    "context": {
      "keyTerms": [
        {
          "term": "Bullish",
          "definition": "Indicating or expecting an upward movement in price."
        },
        {
          "term": "Bearish",
          "definition": "Indicating or expecting a downward movement in price."
        }
      ],
      "whyThisMatters": "The color and size of candle bodies provide instant feedback on market control (buyers vs. sellers).",
      "realLifeExample": "Four consecutive large green daily candles on XAU/USD show strong buying pressure, indicating a bullish trend.",
      "commonMistake": "Trading against a series of large, strong-colored candles, assuming a reversal is imminent without structural evidence."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "concept",
    "title": "Gold Wicks as Price Rejection Indicators",
    "label": "Gold Track",
    "body": "### Gold Wicks as Price Rejection Indicators\nIn the gold market, long wicks often indicate areas of price rejection where opposing orders entered aggressively.\n\n* **Upper Wick Rejection**: A long top wick shows that buyers pushed the price up, but sellers stepped in to drive it back down before the candle closed.\n* **Lower Wick Rejection**: A long bottom wick shows that sellers pushed the price down, but buyers stepped in to drive it back up.\n* **Volatility Sweeps**: Due to gold's volatility, wicks often sweep stops above swing highs or below swing lows before reversing."
  },
  {
    "type": "concept",
    "title": "Candle Body Size and Trend Momentum",
    "label": "Gold Track",
    "body": "### Gold Candle Body Size and Trend Momentum\nThe size of a gold candle body relative to its wicks indicates the strength of momentum, reflecting capital allocation in XAUUSD.\n\n* **Decisive Bodies**: Large candle bodies with short wicks show strong, unimpeded gold buying or selling pressure, typically driven by macroeconomic flows or USD yield adjustments.\n* **Consolidating Bodies**: Small candle bodies with long wicks represent indecision or range-bound trading, common during session overlaps or pre-news windows.\n* **Volume Confirmation**: Gold trend momentum is highly validated when large body candles occur alongside a significant volume spike on the COMEX futures exchange."
  },
  {
    "type": "concept",
    "title": "Timeframe Relationships on Gold Charts",
    "label": "Gold Track",
    "body": "### Timeframe Relationships on Gold Charts\nEvery candlestick contains data from smaller timeframes, showing a fractal relationship.\n\n* **Candle Nesting**: One 4-hour (4H) candle is composed of four 1-hour (1H) candles.\n* **Trend Divergence**: Price can appear in a minor downtrend on a 5-minute chart while being in a major uptrend on the Daily chart.\n* **Analysis Rule**: Always verify the higher timeframe direction before looking for entry patterns on lower timeframes."
  },
  {
    "type": "practice",
    "title": "Practical Application of Gold Candlestick Reading",
    "label": "Gold Track",
    "body": "### Practical Application: Calculating Gold Body and Wick Sizes\nLet's apply candlestick calculations to real-time gold price feeds to ensure you can evaluate candle body sizes accurately.\n\n* **Body Size**: Body Size = Close Price - Open Price (for bullish candles) or Open Price - Close Price (for bearish candles).\n* **Wick Size**: Upper Wick = High - Max(Open, Close); Lower Wick = Min(Open, Close) - Low.",
    "context": {
      "whyThisMatters": "Calculating body and wick sizes helps you determine if a candle represents strong trend expansion or price rejection.",
      "realLifeExample": "A 1-hour gold candle has an open of $1,850.00, close of $1,855.00, high of $1,858.00, and low of $1,848.00. The body size is $5.00."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A 1-hour gold candle opens at $1,850.00 and closes at $1,855.00. The high of the hour was $1,858.00 and the low was $1,848.00. What is the size of the candle body?",
      "options": [
        {
          "id": "0",
          "text": "$5.00",
          "isCorrect": true,
          "feedback": "Correct! The body size is the absolute difference between the open and close: $1,855.00 - $1,850.00 = $5.00."
        },
        {
          "id": "1",
          "text": "$10.00",
          "isCorrect": false,
          "feedback": "Incorrect. $10.00 is the total range of the candle (High - Low: $1,858.00 - $1,848.00), not the body size."
        },
        {
          "id": "2",
          "text": "$3.00",
          "isCorrect": false,
          "feedback": "Incorrect. $3.00 is the size of the upper wick (High - Close: $1,858.00 - $1,855.00), not the body size."
        },
        {
          "id": "3",
          "text": "$2.00",
          "isCorrect": false,
          "feedback": "Incorrect. $2.00 is the size of the lower wick (Open - Low: $1,850.00 - $1,848.00), not the body size."
        }
      ]
    },
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Candlestick Anatomy",
    "label": "Gold Track",
    "body": "### Summary: Gold Candlestick Anatomy\nUnderstanding wicks, bodies, timeframes, and colors is essential for reading gold price action.\n\n* **OHLC Anatomy**: The body represents the open-to-close range; wicks represent the extreme prices reached.\n* **Bullish/Bearish**: Green candles show price rose; red candles show price fell.\n* **Rejections**: Long wicks represent rejected price levels; large bodies represent solid momentum.",
    "context": {
      "whyThisMatters": "You are now ready to progress to identifying higher timeframe support/resistance levels and market structure patterns."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  }
];
