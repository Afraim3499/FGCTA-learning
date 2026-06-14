import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Introduction to Forex Price Feeds",
    "label": "Forex Track",
    "body": "### Introduction to Forex Price Feeds\nForex price feeds are live streams of data displaying the buying and selling prices of currency pairs in the global foreign exchange market, such as EUR/USD or GBP/USD.\n\n* **Currency Pair Sizing**: The first currency is the base currency (e.g. EUR), and the second is the quote currency (e.g. USD).\n* **Interbank Feeds**: Pricing is aggregated from major global banks and financial institutions, updating continuously during market hours.\n* **Trading Hours**: The forex market runs 24 hours a day, 5 days a week, starting Sunday evening EST and closing Friday afternoon EST.",
    "context": {
      "keyTerms": [
        {
          "term": "Base Currency",
          "definition": "The first currency in a currency pair, representing the asset being priced."
        },
        {
          "term": "Quote Currency",
          "definition": "The second currency in a currency pair, representing the unit of account."
        }
      ],
      "whyThisMatters": "Understanding currency pair quotes is the foundation of analyzing price action and executing forex trades.",
      "realLifeExample": "A price feed shows EUR/USD at 1.1000, meaning 1 Euro is worth 1.1000 U.S. Dollars.",
      "commonMistake": "Thinking the forex market is open 7 days a week, forgetting that it closes on weekends.",
      "quickNote": "Forex quotes are typically displayed to 4 or 5 decimal places for accuracy."
    },
    "taskData": null,
    "visualKey": "forex-stp-execution"
  },
  {
    "type": "concept",
    "title": "Forex Bids, Asks, and Spreads",
    "label": "Forex Track",
    "body": "### Forex Bids, Asks, and Spreads\nIn the forex market, you execute trades using two distinct prices displayed in the broker's order feed.\n\n* **Bid Price**: The highest price buyers are currently offering for a currency pair. You sell at the bid price.\n* **Ask Price**: The lowest price sellers are currently demanding for a currency pair. You buy at the ask price.\n* **Spread**: The difference between the ask price and bid price, representing the immediate cost of trade entry.",
    "context": {
      "keyTerms": [
        {
          "term": "Bid Price",
          "definition": "The price at which you can sell a currency pair."
        },
        {
          "term": "Ask Price",
          "definition": "The price at which you can buy a currency pair."
        }
      ],
      "whyThisMatters": "Spreads represent the friction cost of executing trades. Tight spreads ensure cheaper executions.",
      "realLifeExample": "If EUR/USD bid is 1.1000 and ask is 1.1001, the spread is 0.0001 (or 1.0 pip). You enter a buy at 1.1001.",
      "commonMistake": "Failing to account for the spread when placing stop-losses, resulting in premature stop outs."
    },
    "taskData": null,
    "visualKey": "forex-stp-execution"
  },
  {
    "type": "concept",
    "title": "Understanding Pips and Fractional Pips",
    "label": "Forex Track",
    "body": "### Understanding Pips and Fractional Pips\nIn forex, price changes are measured in pips, which represent the standard unit of price movement.\n\n* **Pip Definition**: A pip is usually the 4th decimal place in a currency pair quote (e.g. 0.0001). For JPY pairs, it is the 2nd decimal place (e.g. 0.01).\n* **Pipette (Fractional Pip)**: The 5th decimal place (or 3rd for JPY pairs), representing 1/10th of a pip (e.g. 0.00001).\n* **Spread Calculation**: Spreads are calculated in pips. A spread of 10 fractional pips equals exactly 1.0 pip.",
    "context": {
      "keyTerms": [
        {
          "term": "Pip",
          "definition": "Percentage in Point; the standard unit of change in a forex exchange rate."
        }
      ],
      "whyThisMatters": "Calculating pips is essential for assessing trade risk, sizing positions, and defining profit targets.",
      "realLifeExample": "If EUR/USD moves from 1.1000 to 1.1015, the price has risen by 15 pips.",
      "commonMistake": "Confusing pip values between USD pairs (4th decimal) and JPY pairs (2nd decimal), leading to huge risk errors."
    },
    "taskData": null,
    "visualKey": "forex-stp-execution"
  },
  {
    "type": "concept",
    "title": "Forex Volatility and Session Timing",
    "label": "Forex Track",
    "body": "### Forex Volatility and Session Timing\nForex price feeds fluctuate based on session activity, directly impacting spreads and volatility.\n\n* **Major Sessions**: The three main trading sessions are Tokyo (Asian), London (European), and New York (American).\n* **Overlap Volatility**: Spreads are tightest and volume is highest during session overlaps (e.g., London/New York overlap).\n* **Off-Peak Spread Widening**: Spreads often widen during session handoffs (such as New York close at 5:00 PM EST) when liquidity drops."
  },
  {
    "type": "concept",
    "title": "Pip Calculation Mechanics",
    "label": "Forex Track",
    "body": "### Pip Calculation Mechanics\nCalculating pip differences is key to measuring market movement and risk.\n\n* **Pip Math**: For most pairs, Pip = (Price B - Price A) / 0.0001.\n* **Example**: If EUR/USD drops from 1.1050 to 1.1010, the calculation is (1.1050 - 1.1010) / 0.0001 = 40 pips.\n* **Stop Placement**: Stop loss levels are placed a specific number of pips away from the entry price to limit risk."
  },
  {
    "type": "concept",
    "title": "Introduction to Forex Spreads and Volatility",
    "label": "Forex Track",
    "body": "### Introduction to Forex Spreads and Volatility\nForex spreads expand and contract dynamically based on market volatility and liquidity.\n\n* **Volatility Spikes**: During major economic releases (like NFP or CPI), spreads can widen significantly as liquidity providers adjust orders.\n* **Limit Order Advantage**: Using limit orders ensures execution only at your specified price or better, protecting you from spread spikes.\n* **Trading Rule**: Avoid entering trades with market orders during high-impact news releases due to wide spreads."
  },
  {
    "type": "practice",
    "title": "Practical Analysis of Forex Spreads",
    "label": "Forex Track",
    "body": "### Practical Analysis of Forex Spreads\nLet's apply pip and spread calculations to real-time forex price feeds to ensure you can evaluate transaction costs accurately.\n\n* **Spread Identification**: Locate the current bid and ask prices on the feed.\n* **Cost Calculation**: Calculate the difference to determine the spread value in pips.",
    "context": {
      "whyThisMatters": "Calculating spreads in pips ensures you can evaluate trading conditions before executing a trade.",
      "realLifeExample": "A price feed shows EUR/USD bid at 1.10000 and ask at 1.10015. The spread is 1.5 pips."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You see a forex price feed showing EUR/USD bidding at 1.10000 and asking at 1.10015. What is the bid-ask spread in pips?",
      "options": [
        {
          "id": "0",
          "text": "1.5 pips",
          "isCorrect": true,
          "feedback": "Correct! The spread is Ask (1.10015) - Bid (1.10000) = 0.00015, which is exactly 1.5 pips (or 15 pipettes)."
        },
        {
          "id": "1",
          "text": "15.0 pips",
          "isCorrect": false,
          "feedback": "Incorrect. 0.00015 represents 1.5 pips, not 15 pips. 15 pips would be 0.00150."
        },
        {
          "id": "2",
          "text": "0.15 pips",
          "isCorrect": false,
          "feedback": "Incorrect. The difference is 1.5 pips, not 0.15 pips."
        },
        {
          "id": "3",
          "text": "150 pips",
          "isCorrect": false,
          "feedback": "Incorrect. 150 pips is 0.01500, which is far wider than the actual spread."
        }
      ]
    },
    "visualKey": "forex-stp-execution"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Price Feed Concepts",
    "label": "Forex Track",
    "body": "### Summary: Forex Price Feed Concepts\nUnderstanding currency quotes, bids, asks, and how pips are calculated is essential for forex trading.\n\n* **Currency Quotes**: The value of the base currency expressed in the quote currency.\n* **Bids and Asks**: Buy/sell levels in the feed that determine execution.\n* **Pips and Spreads**: The standard unit of price change and the entry friction cost.",
    "context": {
      "whyThisMatters": "Consolidating these concepts prepares you to analyze forex candlestick patterns and wicks in the next module."
    },
    "taskData": null,
    "visualKey": "forex-stp-execution"
  }
];
