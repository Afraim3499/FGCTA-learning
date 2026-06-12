import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Altcoin Perpetual Contract Mitigations",
    "label": "Crypto Track",
    "body": "### Altcoin Perpetual Contracts: Mitigation Strategies\nMitigation strategies for altcoin perpetual contracts focus on identifying price action that indicates trapped orders during periods of volatility. This card teaches **how to recognize and exploit these mitigation opportunities**.\n\n* **Volatility Triggers**: Monitor altcoin perpetual contracts for volatility spikes, where price fails to breach recent swing highs or lows, indicating potential trapped orders.\n* **Order Book Analysis**: Analyze the order book for significant liquidity clusters that coincide with price rejection levels, revealing where institutional orders may be trapped.\n* **Session-Based Patterns**: Identify session-specific price patterns, such as failed breakouts during high-volume trading hours, which often signal mitigation zones for subsequent reversals.",
    "context": {
      "keyTerms": [
        {
          "term": "Mitigation Zone",
          "definition": "A price level where trapped orders can lead to significant reversals."
        }
      ],
      "whyThisMatters": "Understanding mitigation strategies allows traders to capitalize on price movements driven by trapped institutional orders, enhancing entry and exit precision.",
      "realLifeExample": "On a volatile day, ETH perpetual contracts showed a 10% spike but failed to break above $2,000, indicating trapped long positions as price retraced to $1,850.",
      "commonMistake": "Traders often overlook the significance of volatility spikes, assuming they indicate continuation rather than potential reversals.",
      "quickNote": "Identify volatility spikes as potential mitigation zones for trapped orders.",
      "mentorText": "When you see a volatility spike without a breakout, think critically. This is often where institutions are caught off guard, and you can position yourself for a reversal.",
      "mentorAnalogy": "Consider a surgeon identifying a complication during surgery; recognizing a trapped order is like spotting an unexpected bleed that requires immediate attention to avoid a larger issue."
    },
    "taskData": null,
    "visualKey": "crypto-mitigation-perp"
  },
  {
    "type": "concept",
    "title": "Exchange Funding Rollover Imbalances",
    "label": "Crypto Track",
    "body": "### Exchange Funding Rollover: Impact on Altcoin Prices\nExchange funding rollover imbalances can significantly affect altcoin prices, creating unique mitigation opportunities for traders. This card teaches **how to analyze these imbalances to identify potential market movements**.\n\n* **Funding Rate Analysis**: Monitor the funding rates of altcoin perpetual contracts; a sudden shift in funding rates can indicate a buildup of long or short positions that may lead to price corrections.\n* **Imbalance Triggers**: Identify when the funding rate deviates significantly from the market average, as this often signals an imbalance that can lead to price mitigation zones.\n* **Market Sentiment Correlation**: Correlate funding rate changes with market sentiment indicators to predict potential reversals when funding rates become excessively positive or negative.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The cost of holding a perpetual contract, which can indicate market sentiment."
        }
      ],
      "whyThisMatters": "Recognizing funding rollover imbalances allows traders to anticipate price movements and position themselves ahead of potential reversals.",
      "realLifeExample": "When the funding rate for LINK perpetual contracts surged to 0.15% while prices hovered around $25, a subsequent price drop to $22 indicated a trapped long position.",
      "commonMistake": "Traders often ignore funding rates, missing critical signals of market sentiment and potential price reversals.",
      "quickNote": "Funding rate shifts can signal potential price corrections in altcoin markets.",
      "mentorText": "Pay attention to funding rates; they can reveal the market's positioning and help you anticipate where the price might move next.",
      "mentorAnalogy": "Think of funding rates like a pilot's fuel gauge; if it shows an unexpected drop, it indicates a potential problem that needs immediate attention."
    },
    "taskData": null,
    "visualKey": "crypto-mitigation-perp"
  },
  {
    "type": "concept",
    "title": "Price Action Analysis in Altcoins",
    "label": "Crypto Track",
    "body": "### Price Action: Identifying Mitigation Blocks in Altcoins\nAnalyzing price action in altcoins is essential for identifying potential mitigation blocks that indicate institutional order flow. This card teaches **how to discern key levels that signal trapped orders**.\n\n* **Swing Highs and Lows**: Mark significant swing highs and lows on the chart; price action that fails to break these levels often indicates areas of trapped orders.\n* **Volume Confirmation**: Use volume analysis to confirm price action; increased volume on reversals at key levels suggests the presence of institutional orders that may lead to mitigation.\n* **Rejection Patterns**: Identify rejection patterns, such as pin bars or engulfing candles, at critical price levels, which often signal the presence of trapped orders ready to be mitigated.",
    "context": {
      "keyTerms": [
        {
          "term": "Rejection Pattern",
          "definition": "A price formation indicating a failed attempt to break a key level, often signaling trapped orders."
        }
      ],
      "whyThisMatters": "Effective price action analysis enables traders to pinpoint levels of institutional interest, enhancing trade entry and exit strategies.",
      "realLifeExample": "During a recent trading session, ADA tested $1.50 multiple times but failed to break above, forming a pin bar with high volume, indicating trapped longs ready for mitigation.",
      "commonMistake": "Traders often misinterpret price action signals, failing to recognize the significance of rejection patterns at key levels.",
      "quickNote": "Identify swing highs and lows to locate potential mitigation blocks in altcoin price action.",
      "mentorText": "When analyzing price action, focus on how price interacts with key levels. Those interactions often reveal where institutions are trapped and ready to reverse.",
      "mentorAnalogy": "Imagine an architect assessing a building's foundation; recognizing weak points in price action is akin to identifying structural flaws that could lead to collapse."
    },
    "taskData": null,
    "visualKey": "crypto-mitigation-perp"
  },
  {
    "type": "concept",
    "title": "Identifying Trapped Orders in Crypto Markets",
    "label": "Crypto Track",
    "body": "### Trapped Orders: Methods for Identification in Crypto Markets\nIdentifying trapped orders in crypto markets is crucial for understanding significant price levels that can lead to reversals. This card teaches **how to pinpoint these orders effectively**.\n\n* **Order Flow Analysis**: Analyze order flow data to identify discrepancies between market orders and limit orders; significant imbalances can indicate trapped positions.\n* **Price Rejection Levels**: Focus on price rejection levels where price fails to sustain above or below key support and resistance; these levels often signify trapped orders waiting for mitigation.\n* **Timeframe Correlation**: Use multiple timeframes to confirm trapped orders; a rejection on a higher timeframe coupled with lower timeframe confirmation can enhance the reliability of identified levels.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Flow",
          "definition": "The analysis of market orders and limit orders to identify potential trapped positions."
        }
      ],
      "whyThisMatters": "Identifying trapped orders allows traders to anticipate potential reversals, enhancing their strategic positioning in the market.",
      "realLifeExample": "BTC/USD showed a significant rejection at $30,000 with a 20% increase in sell orders, indicating a buildup of trapped longs as price retraced to $28,500.",
      "commonMistake": "Traders often fail to analyze order flow data, missing critical insights into market dynamics and potential reversal points.",
      "quickNote": "Focus on order flow discrepancies to identify potential trapped orders in crypto markets.",
      "mentorText": "Look for discrepancies in order flow; they often reveal where the market is stuck and can provide you with an edge in anticipating reversals.",
      "mentorAnalogy": "Think of identifying trapped orders like a detective solving a case; the clues lie in the order flow, and piecing them together reveals the bigger picture."
    },
    "taskData": null,
    "visualKey": "crypto-mitigation-perp"
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Mitigation",
    "label": "Crypto Track",
    "body": "### Risk Management: Altcoin Mitigation Strategies\nEffective risk management is essential when trading altcoins around mitigation blocks, especially given the high volatility of the crypto market. This card outlines **strategies to manage exposure and protect capital** during uncertain price movements.\n\n* **Volatility Assessment**: Measure the average true range (ATR) of an altcoin over the last 14 days. Adjust position sizes based on ATR readings; for example, if the ATR is 10%, consider reducing position size by 50% to mitigate risk.\n* **Stop-Loss Placement**: Implement stop-loss orders just below the nearest mitigation block. For instance, if trading Ethereum at $2,000 with a mitigation block at $1,950, set a stop-loss at $1,940 to limit potential losses.\n* **Dynamic Risk Allocation**: Use a tiered risk allocation model based on market conditions. In a bullish trend, allocate 2% of capital per trade; in a bearish trend, reduce allocation to 0.5% to preserve capital during adverse movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A volatility indicator measuring market movement over a specified period."
        },
        {
          "term": "Mitigation Block",
          "definition": "A price level where institutional orders are likely trapped, influencing future price action."
        }
      ],
      "whyThisMatters": "Effective risk management around mitigation blocks can prevent significant capital drawdowns in volatile altcoin markets.",
      "realLifeExample": "During a recent downturn, Bitcoin dropped from $30,000 to $25,000. A trader using ATR identified a volatility spike, reducing their position size by 50% to manage risk effectively.",
      "commonMistake": "Traders often neglect to adjust their position sizes according to market volatility, leading to overexposure.",
      "quickNote": "Adjust position sizes based on volatility to manage risk effectively.",
      "mentorText": "When trading altcoins, always assess the volatility first. If the market is moving rapidly, scale back your position size to protect your capital. Remember, it's not just about making profits; it's about staying in the game.",
      "mentorAnalogy": "Think of trading like piloting a plane through turbulent weather. You wouldn't fly at full speed during a storm; instead, you adjust your throttle and altitude to ensure a safe landing."
    },
    "taskData": null,
    "visualKey": "crypto-mitigation-perp"
  },
  {
    "type": "concept",
    "title": "Market Sentiment and Crypto Mitigation",
    "label": "Crypto Track",
    "body": "### Market Sentiment: Influencing Mitigation Strategies\nMarket sentiment plays a critical role in the effectiveness of mitigation strategies in crypto trading. This card examines **how trader psychology impacts price action around mitigation blocks**.\n\n* **Sentiment Indicators**: Utilize tools like the Fear and Greed Index to gauge market sentiment. For example, a reading below 30 indicates fear, suggesting potential support at mitigation blocks.\n* **Order Flow Analysis**: Monitor the order book for large buy or sell walls near mitigation blocks. If a significant sell wall appears at $1,500 for Litecoin, it may indicate bearish sentiment, prompting caution in long positions.\n* **Psychological Levels**: Identify key psychological levels (e.g., $1,000, $5,000) that often act as support or resistance. If Bitcoin approaches $40,000, traders may exhibit heightened emotional reactions, affecting price stability around that level.",
    "context": {
      "keyTerms": [
        {
          "term": "Fear and Greed Index",
          "definition": "A sentiment indicator that measures market emotions and trends."
        },
        {
          "term": "Psychological Levels",
          "definition": "Price points where traders exhibit strong emotional reactions, influencing buying and selling behavior."
        }
      ],
      "whyThisMatters": "Understanding market sentiment allows traders to anticipate price movements and adjust their mitigation strategies accordingly.",
      "realLifeExample": "When Bitcoin reached $45,000, the Fear and Greed Index indicated extreme greed. Traders who recognized this sentiment were able to mitigate risk by tightening stop-losses ahead of a potential reversal.",
      "commonMistake": "Traders often ignore sentiment indicators, leading to poor timing in their entry and exit strategies.",
      "quickNote": "Market sentiment can significantly influence price action; always consider it when trading around mitigation blocks.",
      "mentorText": "Keep a close eye on market sentiment. If everyone is overly bullish, it might be time to reassess your positions. Use sentiment indicators to inform your decisions, not just price charts.",
      "mentorAnalogy": "Consider market sentiment like the mood in a crowded theater. If the audience is restless, it signals potential trouble ahead; similarly, sentiment can indicate when to exit a trade."
    },
    "taskData": null,
    "visualKey": "crypto-mitigation-perp"
  },
  {
    "type": "practice",
    "title": "Practical Crypto Mitigation Exercises",
    "label": "Crypto Track",
    "body": "### Practical Exercises: Applying Mitigation Strategies\nEngage in practical exercises to reinforce your understanding of mitigation strategies in crypto trading. This card focuses on **real-world scenarios to apply learned concepts**.\n\n* **Scenario Analysis**: Given a chart of Cardano (ADA) showing a recent mitigation block at $1.20, identify potential entry points and stop-loss placements. Consider volatility and market sentiment in your analysis.\n* **Order Flow Simulation**: Review a simulated order book for Solana (SOL) showing a large sell order at $50. Discuss how this influences your trading strategy around the $50 mitigation block.\n* **Risk Assessment Drill**: Analyze a recent market event where Ethereum experienced a sharp decline. Calculate the potential risk and reward of entering a long position at a mitigation block during that event.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating potential outcomes based on market conditions and price levels."
        },
        {
          "term": "Order Flow Simulation",
          "definition": "A practice exercise that mimics real market order book conditions."
        }
      ],
      "whyThisMatters": "Practical exercises solidify theoretical knowledge, enabling traders to make informed decisions in real-time market conditions.",
      "realLifeExample": "During a recent exercise, traders analyzed a simulated market where Bitcoin approached a mitigation block at $38,000, allowing them to practice stop-loss placement and risk assessment.",
      "commonMistake": "Traders often fail to simulate real market conditions, leading to a lack of preparedness for actual trading scenarios.",
      "quickNote": "Engage in scenario-based exercises to apply mitigation strategies effectively.",
      "mentorText": "Practice makes perfect. Use these exercises to simulate real market conditions and refine your strategies. The more you practice, the more instinctive your responses will become.",
      "mentorAnalogy": "Think of these exercises like a flight simulator for pilots. You wouldn't want to fly a plane without practicing emergency scenarios first; similarly, practice trading scenarios to prepare for real market challenges."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are analyzing a chart of Chainlink (LINK) with a mitigation block at $25. What should you consider before placing a trade?",
      "options": [
        {
          "id": "0",
          "text": "The current market sentiment and whether it indicates bullish or bearish trends.",
          "isCorrect": true,
          "feedback": "Correct. Market sentiment can significantly influence price action around mitigation blocks."
        },
        {
          "id": "1",
          "text": "Only the historical price movements of Chainlink without considering current conditions.",
          "isCorrect": false,
          "feedback": "Incorrect. Historical movements alone do not account for current market dynamics."
        },
        {
          "id": "2",
          "text": "The volume of trades executed in the last hour only.",
          "isCorrect": false,
          "feedback": "Incorrect. Volume should be analyzed in conjunction with other factors, not in isolation."
        },
        {
          "id": "3",
          "text": "The news headlines affecting the crypto market at the moment.",
          "isCorrect": false,
          "feedback": "While news can impact sentiment, it should be part of a broader analysis that includes technical factors."
        }
      ]
    },
    "visualKey": "crypto-mitigation-perp"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Mitigation Techniques",
    "label": "Crypto Track",
    "body": "### Summary: Key Techniques for Mitigating Altcoin Contracts\nThis card summarizes essential techniques for mitigating altcoin perpetual contracts, focusing on identifying trapped orders and analyzing funding imbalances.\n\n* **Identifying Trapped Orders**: Recognize price levels where institutional orders are likely trapped. For example, if Bitcoin fails to break above $42,000, it may indicate a buildup of sell orders that could trigger a reversal.\n* **Funding Rate Analysis**: Monitor funding rates for perpetual contracts. A consistently high funding rate on Ethereum indicates a bullish sentiment that may lead to price corrections if it reverses.\n* **Mitigation Block Strategy**: Implement a strategy to trade around mitigation blocks, ensuring to place stop-loss orders just outside these levels to protect against false breakouts.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The cost of holding a perpetual contract, reflecting market sentiment."
        },
        {
          "term": "Trapped Orders",
          "definition": "Orders that are unable to execute due to price not reaching the desired level."
        }
      ],
      "whyThisMatters": "Mastering these techniques is crucial for identifying potential reversals and optimizing trade entries and exits.",
      "realLifeExample": "In a recent market analysis, traders noted a funding rate spike for Litecoin, indicating potential over-leverage and a subsequent price correction, allowing them to adjust their strategies accordingly.",
      "commonMistake": "Traders often overlook the significance of funding rates, leading to misinterpretation of market sentiment.",
      "quickNote": "Focus on identifying trapped orders and funding imbalances to enhance trading strategies.",
      "mentorText": "Always keep an eye on funding rates and trapped orders. They can provide valuable insights into market sentiment and potential reversals. Use this knowledge to refine your entry and exit strategies.",
      "mentorAnalogy": "Think of analyzing trapped orders like a detective solving a case. You need to gather clues (price levels and funding rates) to piece together the bigger picture of market behavior."
    },
    "taskData": null,
    "visualKey": "crypto-mitigation-perp"
  }
];
