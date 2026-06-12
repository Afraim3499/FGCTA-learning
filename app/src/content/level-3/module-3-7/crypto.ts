import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Funding Rate Flips in Crypto",
    "label": "Crypto Track",
    "body": "### Funding Rate Dynamics: Identifying Support/Resistance Flips\nFunding rates in crypto markets fluctuate based on the balance of long and short positions. This card teaches **how to recognize funding rate flips as indicators of support and resistance reversals**.\n\n* **Funding Rate Calculation**: Monitor the funding rate changes every 8 hours; a flip occurs when the rate shifts from negative to positive or vice versa, indicating a potential reversal in market sentiment.\n* **Support/Resistance Confirmation**: A funding rate flip that coincides with price action breaking through a previous support or resistance level strengthens the validity of the flip as a reversal signal.\n* **Example Scenario**: BTCUSDT shows a funding rate flip from -0.01% to +0.02% at 2 AM UTC, aligning with a price breakout above $30,000, confirming a new support level.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The cost of holding a leveraged position in the crypto market, determined by the balance of long and short positions."
        }
      ],
      "whyThisMatters": "Understanding funding rate flips allows traders to anticipate potential market reversals, enhancing entry and exit strategies.",
      "realLifeExample": "On March 15, 2023, ETHUSDT's funding rate flipped from -0.03% to +0.01% at 3 AM UTC, coinciding with a price surge above $1,800, indicating a potential support level.",
      "commonMistake": "Traders often overlook the significance of funding rate changes, failing to correlate them with price action.",
      "quickNote": "Funding rate flips can signal critical support and resistance levels in crypto markets.",
      "mentorText": "When you see a funding rate flip, pay close attention. It’s not just a number; it’s a signal that traders are shifting their sentiment, which can lead to significant price movements.",
      "mentorAnalogy": "Think of funding rates like a ship's ballast. When the weight shifts, the ship's direction changes. In trading, a funding rate flip indicates a shift in market sentiment that can steer price action."
    },
    "taskData": null,
    "visualKey": "crypto-inversion-perp"
  },
  {
    "type": "concept",
    "title": "Perpetual Leverage Inversion Gaps",
    "label": "Crypto Track",
    "body": "### Perpetual Leverage: Impact on Inversion Gaps\nPerpetual contracts allow traders to maintain leveraged positions indefinitely, creating unique market dynamics. This card explores **how perpetual leverage affects inversion gaps and their implications for support/resistance**.\n\n* **Leverage Ratio Monitoring**: Track the average leverage ratio across exchanges; a spike in leverage often precedes significant price movements, creating inversion gaps when positions are liquidated.\n* **Gap Identification**: An inversion gap occurs when price moves through a previous high or low without filling the gap, indicating strong momentum and potential reversal points.\n* **Example Scenario**: On April 20, 2023, a sudden increase in leverage on LTCUSDT led to an inversion gap when price surged from $90 to $95, leaving a gap that was later tested as resistance.",
    "context": {
      "keyTerms": [
        {
          "term": "Inversion Gap",
          "definition": "A price movement that breaches a previous support or resistance level without retracing, indicating strong market momentum."
        }
      ],
      "whyThisMatters": "Recognizing how perpetual leverage influences inversion gaps helps traders anticipate potential reversals and adjust their strategies accordingly.",
      "realLifeExample": "On May 5, 2023, XRPUSDT exhibited an inversion gap when it jumped from $0.60 to $0.65, with leverage ratios exceeding 10x, indicating strong buying pressure.",
      "commonMistake": "Traders often misinterpret inversion gaps as mere price fluctuations, failing to consider the underlying leverage dynamics.",
      "quickNote": "Perpetual leverage can create inversion gaps that signal potential market reversals.",
      "mentorText": "Keep an eye on leverage ratios. When they spike, it often leads to gaps in price that can indicate where the market is heading next.",
      "mentorAnalogy": "Consider perpetual leverage like a high-speed train. When it accelerates quickly, it can create gaps in the track where the train has not yet caught up, signaling potential stops ahead."
    },
    "taskData": null,
    "visualKey": "crypto-inversion-perp"
  },
  {
    "type": "concept",
    "title": "Market Sentiment and Funding Rate Flips",
    "label": "Crypto Track",
    "body": "### Market Sentiment: Influence on Funding Rate Flips\nMarket sentiment plays a crucial role in the behavior of funding rates in crypto trading. This card examines **how shifts in sentiment can lead to funding rate flips and impact support/resistance identification**.\n\n* **Sentiment Analysis Tools**: Utilize sentiment analysis tools to gauge trader sentiment; a shift from bullish to bearish can trigger funding rate flips, indicating potential support/resistance changes.\n* **Correlation with Price Action**: A funding rate flip often aligns with significant price movements; observe how sentiment shifts can lead to price breaking through established levels.\n* **Example Scenario**: On June 10, 2023, a bearish sentiment shift in the market led to a funding rate flip for SOLUSDT from +0.02% to -0.01%, coinciding with a drop below $20, indicating a new resistance level.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders towards a particular asset, often influencing price movements."
        }
      ],
      "whyThisMatters": "Understanding the relationship between market sentiment and funding rate flips enhances the ability to identify critical support and resistance levels.",
      "realLifeExample": "On July 15, 2023, a sudden shift in market sentiment regarding BTCUSDT led to a funding rate flip from +0.01% to -0.02%, aligning with a price drop to $28,000, establishing a new resistance level.",
      "commonMistake": "Traders frequently ignore sentiment indicators, missing critical funding rate flips that signal market reversals.",
      "quickNote": "Market sentiment shifts can trigger funding rate flips, impacting support and resistance levels.",
      "mentorText": "Always assess market sentiment. A change in how traders feel about an asset can flip funding rates and indicate where support or resistance might form.",
      "mentorAnalogy": "Think of market sentiment like the wind for a sailboat. When the wind shifts, the boat's direction changes, just as funding rates can change direction based on trader sentiment."
    },
    "taskData": null,
    "visualKey": "crypto-inversion-perp"
  },
  {
    "type": "concept",
    "title": "Timing Trades Based on Funding Rates",
    "label": "Crypto Track",
    "body": "### Timing Trades: Executing Based on Funding Rate Flips\nEffective timing is essential when executing trades based on funding rate flips. This card focuses on **how to optimize trade entries and exits using funding rate dynamics**.\n\n* **Entry Timing**: Enter trades shortly after a funding rate flip occurs, particularly when it aligns with significant price movements, to capitalize on momentum shifts.\n* **Exit Strategies**: Plan exit strategies around subsequent funding rate changes; if a flip occurs against your position, consider exiting to mitigate losses.\n* **Example Scenario**: On August 25, 2023, after a funding rate flip from -0.02% to +0.01% for ADAUSDT, a trader entered a long position at $0.50, riding the momentum to exit at $0.55 before the next flip occurred.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Timing",
          "definition": "The strategic decision of when to enter or exit a trade based on market conditions."
        }
      ],
      "whyThisMatters": "Mastering trade timing based on funding rate flips can significantly enhance trading performance and risk management.",
      "realLifeExample": "On September 10, 2023, a trader entered a short position on DOTUSDT at $6.00 after a funding rate flip to -0.01%, exiting at $5.80 as the rate flipped back to +0.02%.",
      "commonMistake": "Traders often enter positions too late after a funding rate flip, missing optimal entry points.",
      "quickNote": "Optimal trade timing around funding rate flips can enhance profitability and reduce risk.",
      "mentorText": "Timing is everything. When you see a funding rate flip, act quickly to enter or exit your position before the market adjusts.",
      "mentorAnalogy": "Consider timing your trades like a chef timing the cooking of multiple dishes. Each dish requires precise timing to ensure everything is served perfectly — just like your trades need to be timed with market movements."
    },
    "taskData": null,
    "visualKey": "crypto-inversion-perp"
  },
  {
    "type": "concept",
    "title": "Liquidity Considerations in Crypto Inversions",
    "label": "Crypto Track",
    "body": "### Liquidity Dynamics: Funding Rate Flips in Crypto\nLiquidity conditions significantly influence funding rate flips and inversion gaps in the crypto market. This card provides insights into how to analyze these dynamics effectively.\n\n* **Market Depth Analysis**: Assess the order book's depth to identify liquidity pools. A lack of liquidity can lead to exaggerated price movements, making funding rate flips more pronounced.\n* **Funding Rate Trends**: Monitor funding rates across major exchanges. A sudden increase in funding rates may indicate a shift in market sentiment, suggesting potential inversion gaps.\n* **Volume Correlation**: Examine trading volume during critical price levels. High volume at inversion gaps often signals strong support or resistance, validating the liquidity conditions impacting price action.",
    "visualKey": "crypto-inversion-perp",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Advanced Strategies for Crypto Inversions",
    "label": "Crypto Track",
    "body": "### Strategic Approaches: Leveraging Funding Rate Flips\nDeveloping advanced trading strategies that incorporate funding rate flips can maximize profit potential in crypto. This card outlines specific methodologies for implementation.\n\n* **Multi-Timeframe Analysis**: Utilize higher timeframes to identify macro-level funding rate trends while executing trades on lower timeframes. This approach enhances the probability of successful entries during inversion gaps.\n* **Risk Management Techniques**: Implement strict risk management protocols when trading around funding rate flips. Set stop-loss orders just beyond identified support/resistance levels to mitigate potential losses.\n* **Entry Confirmation Signals**: Use additional indicators, such as RSI or MACD, to confirm entry points at funding rate flips. This dual confirmation can increase the reliability of your trades.",
    "visualKey": "crypto-inversion-perp",
    "taskData": null
  },
  {
    "type": "practice",
    "title": "Practice with Crypto Inversion Scenarios",
    "label": "Crypto Track",
    "body": "### Scenario-Based Practice: Funding Rate Flips\nEngage in practice scenarios focused on funding rate flips and perpetual leverage to reinforce learning and strategy application. This card provides a practical exercise.\n\n* **Scenario Question**: Given a situation where Bitcoin's funding rate spikes to 0.15% while the price approaches a previous inversion gap at $30,000, what should your entry strategy be?\n* **Options**: Analyze the following choices:\n  - **Option A**: Enter a long position immediately at $30,000.  \n  - **Option B**: Wait for a confirmation candle above $30,500 before entering.  \n  - **Option C**: Short the market anticipating a rejection at $30,000.  \n  - **Option D**: Set a limit order at $29,800 to capture a potential dip.\n\n* **Feedback**: Each option will be evaluated based on the context of funding rate trends and market conditions.",
    "visualKey": "crypto-inversion-perp"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Inversion FVGs",
    "label": "Crypto Track",
    "body": "### Key Takeaways: Funding Rate Flips and Perpetual Leverage\nRecap the essential concepts and strategies related to funding rate flips and perpetual leverage, emphasizing their role in identifying support/resistance flips.\n\n* **Understanding Inversion Gaps**: Recognize that inversion gaps often correlate with significant funding rate changes, indicating potential support or resistance levels.\n* **Strategic Application**: Implement strategies that leverage funding rate flips to enhance trade entries and exits, ensuring alignment with market liquidity conditions.\n* **Continuous Monitoring**: Maintain vigilance on funding rates and market depth to adapt strategies in real-time, optimizing trading outcomes.",
    "visualKey": "crypto-inversion-perp",
    "taskData": null
  }
];
