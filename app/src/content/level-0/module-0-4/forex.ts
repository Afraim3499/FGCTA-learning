import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Introduction to Forex Price Charts",
    "label": "Forex Track",
    "body": "### Introduction to Forex Price Charts\nForex price charts visually represent the exchange rate history between currency pairs like EUR/USD or GBP/USD over time.\n\n* **Chart Purpose**: Helps identify key support and resistance zones where institutional buyers or sellers historically entered the market.\n* **Timeframe Intervals**: Charts are viewed in daily (1D), hourly (1H), or minute (15m, 5m, 1m) timeframes. A 1-hour chart groups price action into hourly segments.\n* **Session Structure**: Forex markets operate 24/5. Charts display continuous price action that reacts dynamically to the major global sessions (London, New York, Tokyo).",
    "context": {
      "keyTerms": [
        {
          "term": "Exchange Rate",
          "definition": "The value of one currency for the purpose of conversion to another."
        },
        {
          "term": "Timeframe",
          "definition": "The specific time interval represented by each segment of the chart (e.g., 1 hour)."
        }
      ],
      "whyThisMatters": "Charts provide the visual workspace where you perform structural analysis and map potential trade setups.",
      "realLifeExample": "A 1-hour chart of EUR/USD shows the exchange rate fluctuating in a narrow band between 1.0850 and 1.0870 during the Asian session.",
      "commonMistake": "Ignoring the timeframe being viewed, leading to taking a short-term trade that conflicts with the long-term trend."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "concept",
    "title": "Anatomy of a Forex Candlestick",
    "label": "Forex Track",
    "body": "### Anatomy of a Forex Candlestick\nEach candlestick on a Forex chart summarizes four key exchange rates (Open, High, Low, Close) for a chosen timeframe interval.\n\n* **Candle Body**: The thick rectangular part representing the exchange rate range between the open (starting rate) and the close (ending rate).\n* **Wicks (Shadows)**: The thin lines extending above and below the body, showing the highest and lowest exchange rates reached during that period.\n* **OHLC Data**: Open, High, Low, and Close rates define the structure of every candlestick.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Body",
          "definition": "The central part of the candlestick representing the range between open and close."
        },
        {
          "term": "Candle Wick",
          "definition": "The thin lines showing rate extremes (highs and lows) during the candle's duration."
        }
      ],
      "whyThisMatters": "Learning to read wicks and bodies is fundamental to structural analysis and identifying price rejection.",
      "realLifeExample": "A 1-hour EUR/USD candle opens at 1.1000 and closes at 1.1050, with a high of 1.1080 and a low of 1.0980.",
      "commonMistake": "Only looking at the candle body, which ignores the price extremes (wicks) where key liquidity sits."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "concept",
    "title": "Bullish vs. Bearish Forex Candles",
    "label": "Forex Track",
    "body": "### Bullish vs. Bearish Forex Candles\nCandle colors indicate whether the exchange rate closed higher or lower than its opening level.\n\n* **Bullish (Green) Candle**: Exchange rate closed higher than it opened (Close > Open), indicating that buying pressure dominated.\n* **Bearish (Red) Candle**: Exchange rate closed lower than it opened (Close < Open), indicating that selling pressure dominated.\n* **Doji (Neutral) Candle**: The open and close rates are nearly identical, leaving a thin line as a body, indicating indecision in the market.",
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
      "realLifeExample": "Four consecutive large green daily candles on GBP/USD show strong buying pressure, indicating a bullish trend.",
      "commonMistake": "Trading against a series of large, strong-colored candles, assuming a reversal is imminent without structural evidence."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "concept",
    "title": "Forex Wicks as Price Rejection Indicators",
    "label": "Forex Track",
    "body": "### Forex Wicks as Price Rejection Indicators\nIn the Forex market, long wicks often indicate areas of price rejection where opposing orders entered aggressively.\n\n* **Upper Wick Rejection**: A long top wick shows that buyers pushed the exchange rate up, but sellers stepped in to drive it back down before the candle closed.\n* **Lower Wick Rejection**: A long bottom wick shows that sellers pushed the exchange rate down, but buyers stepped in to drive it back up.\n* **Volatility Sweeps**: Due to Forex's high liquidity, wicks often sweep stops above swing highs or below swing lows before reversing.",
    "context": {
      "whyThisMatters": "Understanding rejections helps you spot where large institutional buy or sell blocks are waiting.",
      "realLifeExample": "EUR/USD spikes up to 1.1200 during the New York open, but quickly drops to close at 1.1150, leaving a long upper wick.",
      "commonMistake": "Buying at the very peak of a long upper wick, entering a trade right as institutional rejection occurs."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "concept",
    "title": "Candle Body Size and Trend Momentum",
    "label": "Forex Track",
    "body": "### Candle Body Size and Trend Momentum\nThe size of a candle body relative to its wicks indicates the strength of market momentum.\n\n* **Decisive Bodies**: Large candle bodies with short wicks show strong, unimpeded price momentum in one direction.\n* **Consolidating Bodies**: Small candle bodies with long wicks show indecision or balanced trading between buyers and sellers.\n* **Volume Confirmation**: Decisive momentum is highest when large body candles are backed by high trading volume.",
    "context": {
      "whyThisMatters": "Recognizing strong momentum versus consolidation helps you avoid trading when the market is slowing down.",
      "realLifeExample": "A large bearish candle on GBP/USD breaks through a support level, indicating strong selling pressure and high momentum.",
      "commonMistake": "Trading trend continuations when candle bodies are shrinking, which actually warns of trend exhaustion."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "concept",
    "title": "Timeframe Relationships on Forex Charts",
    "label": "Forex Track",
    "body": "### Timeframe Relationships on Forex Charts\nEvery candlestick contains data from smaller timeframes, showing a fractal relationship.\n\n* **Candle Nesting**: One 4-hour (4H) candle is composed of four 1-hour (1H) candles.\n* **Trend Divergence**: Price can appear in a minor downtrend on a 5-minute chart while being in a major uptrend on the Daily chart.\n* **Analysis Rule**: Always verify the higher timeframe direction before looking for entry patterns on lower timeframes.",
    "context": {
      "whyThisMatters": "Failing to check higher timeframes can lead to shorting a market that is fundamentally in a massive uptrend.",
      "realLifeExample": "A EUR/USD 5-minute chart shows a minor bearish pullback, but the daily chart shows a strong bullish breakout from a key level."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "practice",
    "title": "Practical Application of Forex Candlestick Reading",
    "label": "Forex Track",
    "body": "### Practical Application: Calculating Forex Body and Wick Sizes\nLet's apply candlestick calculations to real-time Forex price feeds to ensure you can evaluate candle body sizes accurately in pips.\n\n* **Pips Definition**: In major pairs, 1 pip is represented by the fourth decimal place (0.0001). For example, a move from 1.1000 to 1.1050 is 50 pips.\n* **Body Size in Pips**: Body Size = |Close Rate - Open Rate| / 0.0001.\n* **Wicks in Pips**: Upper Wick = (High - Max(Open, Close)) / 0.0001; Lower Wick = (Min(Open, Close) - Low) / 0.0001.",
    "context": {
      "whyThisMatters": "Calculating body and wick sizes in pips helps you determine trade risk and reward targets accurately.",
      "realLifeExample": "A 1-hour EUR/USD candle opens at 1.1000 and closes at 1.1050. The body size is 50 pips."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A 1-hour EUR/USD candle opens at 1.1000 and closes at 1.1050. The high of the hour was 1.1080 and the low was 1.0980. What is the size of the candle body in pips?",
      "options": [
        {
          "id": "0",
          "text": "50 pips",
          "isCorrect": true,
          "feedback": "Correct! The body size is the absolute difference between the open and close rates: (1.1050 - 1.1000) / 0.0001 = 50 pips."
        },
        {
          "id": "1",
          "text": "100 pips",
          "isCorrect": false,
          "feedback": "Incorrect. 100 pips is the total range of the candle (High - Low: 1.1080 - 1.0980 = 100 pips), not the body size."
        },
        {
          "id": "2",
          "text": "30 pips",
          "isCorrect": false,
          "feedback": "Incorrect. 30 pips is the size of the upper wick (High - Close: 1.1080 - 1.1050 = 30 pips), not the body size."
        },
        {
          "id": "3",
          "text": "20 pips",
          "isCorrect": false,
          "feedback": "Incorrect. 20 pips is the size of the lower wick (Open - Low: 1.1000 - 1.0980 = 20 pips), not the body size."
        }
      ]
    },
    "visualKey": "forex-pip-value"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Candlestick Anatomy",
    "label": "Forex Track",
    "body": "### Summary: Forex Candlestick Anatomy\nUnderstanding wicks, bodies, timeframes, and colors is essential for reading Forex price action.\n\n* **OHLC Anatomy**: The body represents the open-to-close range; wicks represent the extreme prices reached.\n* **Bullish/Bearish**: Green candles show exchange rate rose; red candles show exchange rate fell.\n* **Rejections**: Long wicks represent rejected exchange rates; large bodies represent solid momentum.",
    "context": {
      "whyThisMatters": "You are now ready to progress to identifying higher timeframe support/resistance levels and market structure patterns."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  }
];
