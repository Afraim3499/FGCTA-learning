import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Centralized Exchange Order Flow Analysis",
    "label": "Crypto Track",
    "body": "### Centralized Exchange: Order Flow Dynamics\nCentralized exchanges (CEX) serve as primary venues for cryptocurrency trading, where order flow is influenced by market participants' behavior and liquidity conditions. This card details **the mechanisms of order flow within CEX and their impact on trading strategies**.\n\n* **Order Book Depth**: Analyze the order book for significant buy and sell walls, which can indicate potential price reversals or areas of strong support and resistance. Look for walls exceeding 5% of the average daily volume of the asset.\n* **Market Maker Activity**: Identify the presence of market makers by observing large volume trades that occur at or near the bid-ask spread, which can signal liquidity provision and influence price movements.\n* **Trade Execution Timing**: Monitor the timing of trades executed during high volatility periods, such as during major news releases, to assess how order flow reacts to sudden market changes.",
    "context": {
      "keyTerms": [
        {
          "term": "Centralized Exchange (CEX)",
          "definition": "A platform where trades are executed through a central authority, providing liquidity and order matching."
        }
      ],
      "whyThisMatters": "Understanding order flow in CEX is crucial for executing trades effectively and anticipating market movements.",
      "realLifeExample": "On Binance, during the Ethereum upgrade announcement, a buy wall of 2,500 ETH at $2,000 was observed, leading to a rapid price increase as traders reacted to the news.",
      "commonMistake": "Traders often overlook the significance of order book depth, leading to misinterpretations of market sentiment.",
      "quickNote": "CEX order flow analysis reveals critical liquidity patterns and trader behavior.",
      "mentorText": "When analyzing a CEX, focus on the order book's depth and the timing of trades. This will give you insights into market sentiment and potential price movements.",
      "mentorAnalogy": "Think of a CEX like a busy airport terminal where every flight represents a trade; understanding the flow of passengers (orders) helps you predict delays (price movements) and manage your travel plans (trading strategies)."
    },
    "taskData": null,
    "visualKey": "crypto-cex-orderflow"
  },
  {
    "type": "concept",
    "title": "Spot vs Futures Market Dynamics",
    "label": "Crypto Track",
    "body": "### Spot vs Futures: Market Dynamics\nThe spot and futures markets for cryptocurrencies exhibit distinct characteristics that influence trading strategies and order flow. This card examines **the differences between these markets and their implications for order flow analysis**.\n\n* **Immediate Settlement vs. Contractual Obligations**: Spot trades settle immediately, while futures contracts require fulfillment at a later date, affecting liquidity and price discovery. Spot markets often react more quickly to news events.\n* **Leverage Utilization**: Futures markets allow for higher leverage, which can amplify order flow volatility. Traders should monitor open interest and funding rates to gauge market sentiment and potential price swings.\n* **Arbitrage Opportunities**: Differences in pricing between spot and futures markets can create arbitrage opportunities. Traders should look for discrepancies exceeding 1% between the two markets to capitalize on inefficiencies.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot Market",
          "definition": "A market where financial instruments are traded for immediate delivery."
        },
        {
          "term": "Futures Market",
          "definition": "A market where contracts are made to buy or sell an asset at a future date."
        }
      ],
      "whyThisMatters": "Recognizing the dynamics between spot and futures markets is essential for developing effective order flow strategies.",
      "realLifeExample": "During a spike in Bitcoin's price, the spot price surged to $45,000, while futures contracts were trading at $44,500, presenting a 1.1% arbitrage opportunity.",
      "commonMistake": "Traders often fail to consider the impact of leverage in futures markets, leading to unexpected losses during high volatility.",
      "quickNote": "Spot and futures markets have unique characteristics that affect order flow and trading strategies.",
      "mentorText": "When trading, always assess whether you're in the spot or futures market. Each has its own risks and rewards that can significantly impact your strategy.",
      "mentorAnalogy": "Consider spot and futures markets like a farmer's market versus a grocery store; the farmer's market offers fresh produce immediately, while the grocery store sells future harvests at fixed prices."
    },
    "taskData": null,
    "visualKey": "crypto-cex-orderflow"
  },
  {
    "type": "concept",
    "title": "Understanding Perpetual Funding Rates",
    "label": "Crypto Track",
    "body": "### Perpetual Funding Rates: Implications for Order Flow\nPerpetual contracts in cryptocurrency trading include funding rates that can influence trader behavior and market dynamics. This card focuses on **how to interpret funding rates and their impact on order flow strategies**.\n\n* **Funding Rate Calculation**: Funding rates are calculated based on the difference between the perpetual contract price and the spot price. A positive funding rate indicates long positions pay shorts, while a negative rate indicates the opposite, affecting trader sentiment.\n* **Market Sentiment Indicator**: High funding rates can signal over-leveraged long positions, often leading to price corrections. Monitor rates exceeding 0.1% to assess potential market reversals.\n* **Timing of Payments**: Funding payments occur at regular intervals (e.g., every 8 hours). Traders should align their strategies with these timings to optimize entry and exit points based on funding rate shifts.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Funding Rate",
          "definition": "A fee paid between long and short positions in perpetual contracts, reflecting market sentiment."
        }
      ],
      "whyThisMatters": "Understanding funding rates is critical for anticipating market corrections and adjusting trading strategies accordingly.",
      "realLifeExample": "On BitMEX, the funding rate for Bitcoin perpetual contracts reached 0.15% before a significant price drop from $50,000 to $48,000, indicating excessive long positioning.",
      "commonMistake": "Traders often ignore funding rates, leading to misjudgments about market sentiment and potential reversals.",
      "quickNote": "Funding rates serve as a crucial indicator of market sentiment and potential price movements.",
      "mentorText": "Always check the funding rate before entering a position. It can provide insights into market sentiment and help you avoid over-leveraged trades.",
      "mentorAnalogy": "Think of funding rates like interest on a loan; if the cost is high, it may indicate that you're borrowing too much, which could lead to financial strain (price corrections)."
    },
    "taskData": null,
    "visualKey": "crypto-cex-orderflow"
  },
  {
    "type": "concept",
    "title": "Spot Book Checks for Trading",
    "label": "Crypto Track",
    "body": "### Spot Book Checks: Liquidity Assessment\nConducting spot book checks is essential for assessing liquidity and order flow in cryptocurrency markets. This card outlines **the process of performing spot book checks to enhance trading decision-making**.\n\n* **Liquidity Thresholds**: Identify liquidity thresholds by analyzing the volume of orders at key price levels. Look for at least 10% of the average daily trading volume to determine significant liquidity zones.\n* **Order Flow Imbalance**: Monitor for imbalances in the order book, such as a higher concentration of buy orders compared to sell orders, which can indicate potential price movements. A 3:1 buy-sell ratio often precedes upward price action.\n* **Time of Day Analysis**: Assess the order book at different times of day to identify peak trading hours. Volume spikes during the overlap of major trading sessions, such as London and New York, can enhance order flow predictability.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot Book Check",
          "definition": "An analysis of the order book to assess liquidity and potential price movements."
        }
      ],
      "whyThisMatters": "Effective spot book checks provide insights into market liquidity, enabling traders to make informed decisions.",
      "realLifeExample": "During the peak trading hour of 3 PM EST, a spot book check on Coinbase revealed a 15% liquidity threshold at $1,800 for Ethereum, indicating strong buying interest.",
      "commonMistake": "Traders often neglect to check the order book regularly, leading to missed opportunities or unexpected slippage.",
      "quickNote": "Regular spot book checks are vital for understanding market liquidity and order flow.",
      "mentorText": "Make it a habit to check the spot book before executing trades. It will help you gauge market conditions and avoid slippage.",
      "mentorAnalogy": "Conducting a spot book check is like a chef inspecting the pantry before cooking; knowing what ingredients (liquidity) are available ensures a successful dish (trade)."
    },
    "taskData": null,
    "visualKey": "crypto-cex-orderflow"
  },
  {
    "type": "concept",
    "title": "Volatility Assessment in Crypto Markets",
    "label": "Crypto Track",
    "body": "### Volatility Assessment: Market Dynamics in Crypto Trading\nMarket volatility significantly influences order flow in cryptocurrency trading. This card focuses on **how to assess volatility and its implications on trading strategies**.\n\n* **Volatility Metrics**: Utilize the Average True Range (ATR) to quantify volatility; a reading above 5% indicates heightened market activity, warranting a reassessment of entry and exit strategies.\n* **Order Flow Reactions**: Observe how sudden price spikes of 10% or more can lead to liquidity gaps, affecting the execution of limit orders and potentially increasing slippage.\n* **Session-Specific Volatility**: Analyze volatility patterns during major news events, such as regulatory announcements, which can cause intraday swings exceeding 15% in assets like Bitcoin or Ethereum.",
    "visualKey": "crypto-cex-orderflow",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Trading Signals from Order Flow",
    "label": "Crypto Track",
    "body": "### Trading Signals: Interpreting Order Flow Data\nOrder flow data provides actionable insights for trading decisions in cryptocurrencies. This card teaches **how to extract trading signals from order flow analysis**.\n\n* **Bid-Ask Imbalance**: Identify trading opportunities when the bid volume exceeds the ask volume by 20% or more, indicating potential bullish momentum in assets like Litecoin.\n* **Liquidity Zones**: Recognize areas of high liquidity where large buy or sell orders cluster; these zones often act as support or resistance, guiding entry points.\n* **Cumulative Delta Analysis**: Monitor cumulative delta shifts; a positive delta during a downtrend can signal a potential reversal, particularly in volatile altcoins.",
    "visualKey": "crypto-cex-orderflow",
    "taskData": null
  },
  {
    "type": "practice",
    "title": "Practical Crypto Trading Exercises",
    "label": "Crypto Track",
    "body": "### Practical Exercises: Simulating Crypto Trading Scenarios\nEngaging in simulated trading scenarios enhances understanding of order flow in crypto markets. This card outlines **practical exercises to reinforce trading concepts**.\n\n* **Scenario Simulation**: Analyze a simulated market where Bitcoin experiences a 12% drop; determine optimal entry points based on order flow data and volatility metrics.\n* **Futures vs. Spot**: Execute trades in both spot and futures markets for Ethereum; assess how order flow differs in execution speed and slippage during high volatility periods.\n* **Real-Time Analysis**: Participate in a live trading session where participants must react to real-time order flow changes, focusing on identifying liquidity zones and executing trades accordingly.",
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated trading scenario, Bitcoin drops 12%. What is the best approach to determine your entry point?",
      "options": [
        {
          "id": "0",
          "text": "Wait for a confirmed reversal pattern before entering.",
          "isCorrect": true,
          "feedback": "Waiting for a confirmed reversal pattern ensures that you are not catching a falling knife and helps in making a more informed decision."
        },
        {
          "id": "1",
          "text": "Enter immediately to capitalize on the drop.",
          "isCorrect": false,
          "feedback": "Entering immediately without analysis can lead to losses if the drop continues."
        },
        {
          "id": "2",
          "text": "Only consider the news behind the drop.",
          "isCorrect": false,
          "feedback": "While news is important, relying solely on it without analyzing order flow may lead to poor trading decisions."
        },
        {
          "id": "3",
          "text": "Ignore the drop and focus on other cryptocurrencies.",
          "isCorrect": false,
          "feedback": "Ignoring the drop in Bitcoin may cause you to miss significant trading opportunities in a correlated market."
        }
      ]
    },
    "visualKey": "crypto-cex-orderflow"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Order Flow Concepts",
    "label": "Crypto Track",
    "body": "### Summary: Centralized Exchange Order Flow\nUnderstanding order flow in centralized exchanges is critical for effective crypto trading. This card summarizes **key concepts and distinctions between spot and futures markets**.\n\n* **Order Flow Dynamics**: Spot markets reflect immediate buying and selling pressure, while futures markets incorporate expectations of future price movements, affecting liquidity and volatility.\n* **Liquidity Analysis**: Spot trading typically exhibits higher liquidity during market hours, while futures may show increased volatility due to leverage effects, especially around expiration dates.\n* **Market Sentiment Indicators**: Use order flow data to gauge market sentiment; a significant increase in open interest in futures can indicate bullish or bearish trends, impacting spot market behavior.",
    "visualKey": "crypto-cex-orderflow",
    "taskData": null
  }
];
