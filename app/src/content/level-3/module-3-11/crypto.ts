import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Spot vs Perpetual Leverage Dynamics",
    "label": "Crypto Track",
    "body": "### Spot vs Perpetual Leverage Dynamics\nSpot and perpetual markets exhibit distinct leverage characteristics that influence price behavior. Understanding these dynamics is critical for recognizing potential market movements.\n\n* **Leverage Discrepancies**: Spot markets typically have lower leverage compared to perpetual contracts, leading to different risk profiles and volatility. A mismatch occurs when perpetual contracts exhibit significantly higher leverage, often resulting in exaggerated price swings.\n* **Market Reaction**: When spot prices deviate from perpetual prices due to leverage imbalances, traders may experience sudden liquidations. For instance, if Bitcoin is trading at $30,000 on the spot market while perpetual contracts are at $30,500, this 1.67% difference can trigger aggressive selling in the spot market.\n* **Impact on Order Flow**: Increased leverage in perpetual contracts can lead to rapid order flow changes. Traders should monitor the volume delta between these markets to anticipate potential reversals or continuations in price trends.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Mismatch",
          "definition": "A discrepancy between the leverage available in spot and perpetual markets."
        },
        {
          "term": "Liquidation",
          "definition": "The forced closure of a trader's position due to insufficient margin."
        }
      ],
      "whyThisMatters": "Recognizing leverage dynamics helps traders anticipate market reactions and manage risk effectively.",
      "realLifeExample": "On March 1, 2023, Ethereum's spot price was $2,000 while perpetual contracts traded at $2,100, leading to a 10% drop in spot prices as liquidations occurred.",
      "commonMistake": "Traders often overlook the implications of leverage mismatches, leading to unexpected losses during volatile market conditions.",
      "quickNote": "Spot and perpetual markets react differently to leverage, impacting price movements significantly.",
      "mentorText": "When you see a large discrepancy between spot and perpetual prices, think about how traders are positioned. High leverage in perpetuals can lead to rapid price corrections in the spot market.",
      "mentorAnalogy": "Consider a tightrope walker balancing on a thin wire. The higher the leverage, the more unstable the balance becomes, leading to potential falls when conditions shift."
    },
    "taskData": null,
    "visualKey": "crypto-footprint-mismatch"
  },
  {
    "type": "concept",
    "title": "Reading Leverage Order Flow",
    "label": "Crypto Track",
    "body": "### Reading Leverage Order Flow\nAnalyzing leverage order flow is essential for identifying volume delta imbalances in crypto markets. This skill enables traders to predict price action based on market dynamics.\n\n* **Volume Delta Analysis**: Calculate the difference between buy and sell orders at specific price levels. A positive delta indicates buying pressure, while a negative delta suggests selling pressure. For example, if Bitcoin shows a volume delta of +1,000 at $30,000, it indicates strong buying interest.\n* **Order Book Insights**: Monitor the order book for large limit orders that can absorb or push price movements. A significant sell wall at $30,500 can indicate resistance, while a large buy wall at $29,500 may signal support.\n* **Leverage Ratios**: Assess the ratio of long to short positions in perpetual contracts. A ratio exceeding 2:1 may indicate over-leverage, suggesting potential corrections as the market adjusts.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Delta",
          "definition": "The difference between buy and sell orders at a specific price level."
        },
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders in the market."
        }
      ],
      "whyThisMatters": "Understanding leverage order flow allows traders to make informed decisions based on market sentiment and potential price movements.",
      "realLifeExample": "On April 5, 2023, Bitcoin's order book showed a volume delta of +2,500 at $31,000, leading to a price surge to $32,000 as buying pressure intensified.",
      "commonMistake": "Traders often misinterpret volume delta signals, failing to account for the broader market context.",
      "quickNote": "Leverage order flow analysis reveals market sentiment and potential price movements.",
      "mentorText": "When assessing order flow, focus on the delta. It tells you where the market is leaning and can help you position yourself accordingly.",
      "mentorAnalogy": "Think of reading order flow like a weather forecast; it helps you prepare for potential storms or sunny days in the market."
    },
    "taskData": null,
    "visualKey": "crypto-footprint-mismatch"
  },
  {
    "type": "concept",
    "title": "Identifying Leverage Imbalances",
    "label": "Crypto Track",
    "body": "### Identifying Leverage Imbalances\nRecognizing leverage mismatches at key price levels can signal potential market reversals. This skill is crucial for effective trading strategies in the crypto space.\n\n* **Key Price Levels**: Focus on significant support and resistance levels where leverage imbalances often occur. For instance, if Bitcoin approaches $28,000 with a high long-to-short ratio, it may indicate a potential reversal if the price fails to break through.\n* **Liquidation Triggers**: Monitor for clusters of stop-loss orders around key levels. A sudden spike in liquidations can lead to rapid price movements. For example, if a large number of long positions are liquidated at $29,500, it could trigger a cascade effect, pushing prices lower.\n* **Market Sentiment Shifts**: Analyze shifts in leverage ratios as prices approach critical levels. A sudden increase in short positions at resistance can indicate bearish sentiment, while a surge in long positions at support may suggest bullish conviction.",
    "context": {
      "keyTerms": [
        {
          "term": "Support and Resistance",
          "definition": "Price levels where buying or selling pressure is expected to change."
        },
        {
          "term": "Liquidation Trigger",
          "definition": "A price point that forces the closure of leveraged positions."
        }
      ],
      "whyThisMatters": "Identifying leverage imbalances enables traders to anticipate potential reversals and adjust their strategies accordingly.",
      "realLifeExample": "On May 10, 2023, Bitcoin showed a long-to-short ratio of 3:1 at $29,000, leading to a reversal as prices dropped to $27,500 after triggering liquidations.",
      "commonMistake": "Traders frequently fail to act on leverage imbalances, missing out on critical reversal opportunities.",
      "quickNote": "Leverage imbalances at key levels can indicate potential market reversals.",
      "mentorText": "Pay attention to where the market is over-leveraged. Those are often the points where reversals happen, and you need to be ready to act.",
      "mentorAnalogy": "Imagine a seesaw; when one side is too heavy, it will tip over. Similarly, leverage imbalances can lead to sudden market shifts."
    },
    "taskData": null,
    "visualKey": "crypto-footprint-mismatch"
  },
  {
    "type": "concept",
    "title": "Liquidity Analysis in Crypto",
    "label": "Crypto Track",
    "body": "### Liquidity Analysis in Crypto\nUnderstanding liquidity dynamics is essential for assessing how spot and perpetual leverage affect market depth and trading opportunities. This analysis informs strategic decision-making.\n\n* **Market Depth Assessment**: Evaluate the order book to determine liquidity levels at various price points. A shallow market with few orders can lead to increased volatility, especially when leverage is high. For example, if Ethereum's order book shows only 500 ETH at $2,000, a sudden influx of orders can cause significant price swings.\n* **Spot vs Perpetual Liquidity**: Compare liquidity between spot and perpetual markets. A higher liquidity level in perpetuals can indicate stronger speculative interest, while a lack of liquidity in spot markets may signal caution among traders.\n* **Impact on Execution**: Analyze how liquidity affects trade execution. In a low-liquidity environment, large orders can lead to slippage, impacting overall profitability. For instance, executing a $100,000 buy order in a thin market may result in a price increase of 2% due to slippage.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Depth",
          "definition": "The volume of buy and sell orders at various price levels."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price."
        }
      ],
      "whyThisMatters": "Liquidity analysis allows traders to identify optimal entry and exit points based on market conditions.",
      "realLifeExample": "On June 15, 2023, Bitcoin's market depth revealed only 300 BTC at $31,000, leading to a 3% price increase when a $50,000 buy order was executed.",
      "commonMistake": "Traders often underestimate the importance of liquidity, leading to poor execution and unexpected losses.",
      "quickNote": "Liquidity dynamics significantly influence market depth and trading opportunities.",
      "mentorText": "Always check the liquidity before executing trades. A thin market can turn a good trade into a bad one due to slippage.",
      "mentorAnalogy": "Think of liquidity like traffic on a highway; heavy traffic means smoother travel, while a sudden bottleneck can cause delays and accidents."
    },
    "taskData": null,
    "visualKey": "crypto-footprint-mismatch"
  },
  {
    "type": "concept",
    "title": "Common Crypto Trading Traps",
    "label": "Crypto Track",
    "body": "### Crypto Trading: Misreading Leverage Volume Delta Signals\nMisinterpretation of leverage volume delta signals can lead to significant trading traps in the crypto market. This card outlines **how to identify and avoid common pitfalls** associated with these misreadings.\n\n* **Overleveraging Risks**: Traders often misinterpret high volume deltas as bullish signals, leading to excessive leverage positions. For example, a sudden spike in volume on BTC/USDT might suggest strength, but if the delta is negative, it indicates selling pressure.\n* **False Breakouts**: A common trap occurs when traders enter positions during apparent breakouts without confirming volume support. For instance, if ETH/USD breaks a resistance level with low positive delta, it may quickly reverse, trapping buyers.\n* **Ignoring Contextual Signals**: Traders frequently overlook broader market conditions when analyzing volume deltas. A bullish delta in isolation can be misleading if the overall trend is bearish, as seen during the May 2021 crypto crash where many altcoins showed positive deltas but were heavily sold off.",
    "visualKey": "crypto-footprint-mismatch",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Advanced Strategies for Leverage Trading",
    "label": "Crypto Track",
    "body": "### Crypto Trading: Leveraging Delta Insights\nUtilizing leverage delta insights effectively can enhance trading efficiency and profitability. This card discusses **advanced strategies that capitalize on these insights**.\n\n* **Delta Divergence Strategy**: Identify divergences between price action and leverage volume deltas. For example, if LTC/USD is making higher highs while the volume delta is declining, consider this a potential reversal signal, indicating weakening buying pressure.\n* **Volume Profile Integration**: Combine leverage delta analysis with volume profile tools to pinpoint high-probability entry and exit zones. For instance, if a significant volume delta occurs at a key Fibonacci retracement level on XRP, it may signal a strong reversal opportunity.\n* **Dynamic Risk Management**: Adjust position sizes based on delta readings. If a trader observes a consistent negative delta on a leveraged position, they should consider reducing exposure to mitigate potential losses, especially during volatile market conditions.",
    "visualKey": "crypto-footprint-mismatch",
    "taskData": null
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Leverage Volume",
    "label": "Crypto Track",
    "body": "### Practical Application: Leverage Volume Delta Analysis\nEngaging in practical exercises will solidify your understanding of leverage volume delta analysis in real-world scenarios. This card provides **hands-on tasks to apply learned concepts**.\n\n* **Scenario Analysis**: Review a recent trading session of BTC/USD where the price surged from $40,000 to $42,000. Analyze the volume delta during this move and determine if it supported the price increase or indicated potential exhaustion.\n* **Trade Simulation**: Create a simulated trading plan based on observed leverage volume deltas for ETH. Identify entry and exit points using delta signals and set stop-loss orders based on volume profile support levels.\n* **Case Study Review**: Examine a historical case where a significant delta shift occurred before a market correction. Analyze the conditions leading up to the event and how leverage positions were affected, focusing on the implications for future trades.",
    "visualKey": "crypto-footprint-mismatch"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Footprint Basics",
    "label": "Crypto Track",
    "body": "### Crypto Footprint Basics: Spot vs Perpetual Leverage Mismatches\nUnderstanding the differences between spot and perpetual leverage mismatches is crucial for effective crypto trading. This card summarizes **the key concepts related to these mismatches and their significance**.\n\n* **Spot vs Perpetual Dynamics**: Spot markets typically reflect immediate supply and demand, while perpetual contracts can amplify volatility due to leverage. Recognizing how volume deltas differ in these contexts is essential for accurate market assessments.\n* **Impact of Leverage on Price Action**: High leverage can lead to rapid price movements, often distorting the perceived strength of volume signals. For example, during high-leverage trading periods, a positive delta may not equate to sustained buying pressure, as seen in the volatility spikes of early 2021.\n* **Strategic Implications**: Traders must adapt strategies based on the type of market they are engaging with. Understanding the implications of leverage mismatches can help in making informed decisions, particularly during periods of high volatility.",
    "visualKey": "crypto-footprint-mismatch",
    "taskData": null
  }
];
