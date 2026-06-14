import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Introduction to Crypto Price Charts",
    "label": "Crypto Track",
    "body": "### Introduction to Crypto Price Charts\nCrypto price charts visually represent the history of transactions for pairs like BTC/USDT or ETH/USDT across different intervals of time.\n\n* **Price Chart Purpose**: Charts help traders spot repeating patterns, trend directions, and key price levels where buyers or sellers historically stepped in.\n* **Timeframe Intervals**: You can view charts in daily (1D), hourly (1H), or minute (15m, 5m, 1m) timeframes. A 1-hour chart aggregates price changes into hourly segments.\n* **Continuous Flow**: Since cryptocurrency pairs trade 24/7, crypto charts form a continuous line of data with far fewer gap openings than traditional stock charts.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Chart",
          "definition": "A visual representation of price changes over time."
        },
        {
          "term": "Timeframe",
          "definition": "The specific time interval represented by each segment of the chart (e.g. 1 hour)."
        }
      ],
      "whyThisMatters": "Charts are the primary canvas where you perform structural analysis and define trade plans.",
      "realLifeExample": "A 1-hour chart of BTC shows that over the last 12 hours, price has been steadily making higher peaks, indicating a short-term upward trend.",
      "commonMistake": "Thinking a 15-minute trend is identical to a daily trend, leading to trading against the major market direction.",
      "quickNote": "Always check both higher timeframes (like 4H) and lower timeframes (like 15m) to see the full price story."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "concept",
    "title": "Anatomy of a Crypto Candlestick",
    "label": "Crypto Track",
    "body": "### Anatomy of a Crypto Candlestick\nCandlestick charts are the most popular way to view crypto price action. Each candle represents four key prices for a given timeframe.\n\n* **Candle Body**: The thick rectangular part of the candle representing the price range between the open (starting price) and the close (ending price).\n* **Wicks (Shadows)**: The thin lines extending from the top and bottom of the body, representing the highest and lowest prices reached during that period.\n* **Open, High, Low, Close (OHLC)**: The four data points that define the shape of every single candlestick.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Body",
          "definition": "The main part of a candlestick representing the range between the open and close prices."
        },
        {
          "term": "Candle Wick",
          "definition": "The thin lines showing the extreme high and low prices reached during the candle's timeframe."
        }
      ],
      "whyThisMatters": "Learning to read wicks and bodies is like learning the alphabet of chart reading. Every strategy builds on this foundation.",
      "realLifeExample": "A 1-hour BTC candle opens at $60,000 and closes at $60,500, but has a top wick pointing up to $60,700 and a bottom wick dipping to $59,900.",
      "commonMistake": "Ignoring the wicks and only looking at the candle bodies, which misses the extreme prices that the market rejected."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "concept",
    "title": "Bullish vs. Bearish Crypto Candles",
    "label": "Crypto Track",
    "body": "### Bullish vs. Bearish Crypto Candles\nCandles are color-coded to immediately show whether the price closed higher or lower than it opened.\n\n* **Bullish (Green) Candle**: Price closed higher than it opened (Close > Open). Buying pressure dominated during this interval.\n* **Bearish (Red) Candle**: Price closed lower than it opened (Close < Open). Selling pressure dominated during this interval.\n* **Neutral Candle**: The open and close prices are almost identical, leaving a very thin body (often called a Doji), indicating market indecision.",
    "context": {
      "keyTerms": [
        {
          "term": "Bullish",
          "definition": "Expecting prices to rise, or indicating a period of price increases."
        },
        {
          "term": "Bearish",
          "definition": "Expecting prices to fall, or indicating a period of price decreases."
        }
      ],
      "whyThisMatters": "The color and size of candles provide instant visual feedback on which group (buyers or sellers) is currently controlling the market.",
      "realLifeExample": "Three consecutive large green daily candles on BTC indicate strong bullish momentum, showing that buyers are aggressively pushing prices up.",
      "commonMistake": "Assuming a single green candle means the market is now in a long-term uptrend, ignoring the overall chart context."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "concept",
    "title": "Reading Crypto Wicks as Price Rejection",
    "label": "Crypto Track",
    "body": "### Reading Crypto Wicks as Price Rejection\nIn crypto, wicks are not just history; they represent areas where the market actively rejected a price level.\n\n* **Rejection Wicks**: A long top wick means buyers pushed price up, but sellers aggressively stepped in to push it back down before the candle closed.\n* **Volatility Sweeps**: Crypto prices often spike briefly to sweep stop-loss orders in thin order books, forming a long wick that immediately retraces.\n* **Support and Resistance Wicks**: Multiple long wicks at a specific level indicate that the market is struggling to break past that level.",
    "context": {
      "whyThisMatters": "Long wicks show where supply or demand resides, helping you spot where price is likely to reverse.",
      "realLifeExample": "BTC spikes to $61,000 but quickly drops back to close at $60,200, leaving a long upper wick. This tells you that $61,000 had strong resistance.",
      "commonMistake": "Buying right at the top of a long wick, entering a trade just as the market is rejecting that high price."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "concept",
    "title": "Analyzing Candle Bodies for Momentum",
    "label": "Crypto Track",
    "body": "### Analyzing Candle Bodies for Momentum\nThe size of a candle body relative to its wicks tells you how strong the trend momentum is.\n\n* **Large Bodies**: Indicate strong, decisive momentum. A large green body shows buyers aggressively lifting asks with minimal resistance.\n* **Small Bodies**: Indicate low momentum or consolidation. Price is moving in a tight range as buyers and sellers are balanced.\n* **Volume Correlation**: DECISIVE momentum is confirmed when a large body candle is accompanied by high trading volume.",
    "context": {
      "whyThisMatters": "Recognizing when momentum is strong vs weak helps you avoid entering trades right as a move is running out of steam.",
      "realLifeExample": "BTC breaks out of a range with a large green daily candle, accompanied by a 50% volume spike. This shows high buyer conviction.",
      "commonMistake": "Entering a trend trade when candle bodies are shrinking and wicks are growing, which signals a fading trend."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "concept",
    "title": "Timeframe Scaling: Minutes to Days",
    "label": "Crypto Track",
    "body": "### Timeframe Scaling: Minutes to Days\nEvery candlestick aggregates data from smaller timeframes. Understanding this fractal relationship is crucial.\n\n* **Candle nesting**: A single 1-hour candle contains exactly four 15-minute candles, or sixty 1-minute candles.\n* **Trend Alignment**: A market can look bearish on a 5-minute chart (short-term pullbacks) while being strongly bullish on the Daily chart.\n* **Execution Context**: Always identify the higher timeframe narrative first, then use lower timeframe candles to find precise entry points.",
    "context": {
      "whyThisMatters": "Failing to scale timeframes can lead to taking short-term counter-trend setups that are immediately crushed by the higher timeframe trend.",
      "realLifeExample": "A trader sees a bearish engulfing candle on the 5-minute BTC chart, but ignores that price is hitting a major daily support level, leading to a failed short trade."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "practice",
    "title": "Practical Application of Crypto Candlestick Reading",
    "label": "Crypto Track",
    "body": "### Practical Application: Calculating Body and Wick Sizes\nLet's practice reading candlestick values to ensure you can quickly calculate candle body sizes in real-time trading.\n\n* **Body Size Calculation**: Body Size = Close Price - Open Price (for bullish candles) or Open Price - Close Price (for bearish candles).\n* **Wick Size Calculation**: Upper Wick = High - Max(Open, Close); Lower Wick = Min(Open, Close) - Low.",
    "context": {
      "whyThisMatters": "Quickly quantifying body and wick size helps you assess whether a candle represents strong momentum or weak rejection.",
      "realLifeExample": "A 1-hour BTC candle has an open of $60,000, close of $60,500, high of $60,700, and low of $59,900. The body size is $500."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A 1-hour Bitcoin candle opens at $60,000.00 and closes at $60,500.00. The high of the hour was $60,700.00 and the low was $59,900.00. What is the size of the candle body?",
      "options": [
        {
          "id": "0",
          "text": "$500.00",
          "isCorrect": true,
          "feedback": "Correct! The body size is the absolute difference between the open and close: $60,500.00 - $60,000.00 = $500.00."
        },
        {
          "id": "1",
          "text": "$800.00",
          "isCorrect": false,
          "feedback": "Incorrect. $800.00 is the total range of the candle (High - Low: $60,700.00 - $59,900.00), not the body size."
        },
        {
          "id": "2",
          "text": "$200.00",
          "isCorrect": false,
          "feedback": "Incorrect. $200.00 is the size of the upper wick (High - Close: $60,700.00 - $60,500.00), not the body size."
        },
        {
          "id": "3",
          "text": "$100.00",
          "isCorrect": false,
          "feedback": "Incorrect. $100.00 is the size of the lower wick (Open - Low: $60,000.00 - $59,900.00), not the body size."
        }
      ]
    },
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Candlestick Anatomy",
    "label": "Crypto Track",
    "body": "### Summary: Crypto Candlestick Anatomy\nUnderstanding wicks, bodies, timeframes, and colors is essential for reading crypto price structure.\n\n* **OHLC Anatomy**: The body represents the open-to-close range; wicks represent the extreme prices reached.\n* **Bullish/Bearish**: Green candles show price rose; red candles show price fell.\n* **Rejections**: Long wicks represent rejected price levels; large bodies represent solid momentum.",
    "context": {
      "whyThisMatters": "You are now ready to progress to identifying higher timeframe support/resistance levels and market structure patterns."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  }
];
