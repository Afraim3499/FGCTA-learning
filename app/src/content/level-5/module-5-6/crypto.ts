import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Placing Stops Outside Liquidation Pools",
    "label": "Crypto Track",
    "body": "### Stop-Loss Strategy: Placing Stops Outside Liquidation Pools\nStrategically positioning stop-loss orders outside of liquidation pools can mitigate risks associated with market volatility. This card outlines **how to identify and utilize liquidation pools for effective stop-loss placement**.\n\n* **Identifying Liquidation Pools**: Liquidation pools often form around key support and resistance levels where leveraged positions are concentrated. Analyze order book data to determine these critical price levels.\n* **Setting Stop-Loss Orders**: Place stop-loss orders at least 2-3% beyond identified liquidation pools to avoid being triggered by market fluctuations. This buffer accounts for typical volatility in crypto markets.\n* **Avoiding Market Traps**: By positioning stops outside these pools, traders can reduce the likelihood of being caught in sudden price spikes that trigger unnecessary liquidations.",
    "visualKey": "stop-loss-placement",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Understanding Liquidation Pools in Crypto",
    "label": "Crypto Track",
    "body": "### Liquidation Pools: Implications for Stop-Loss Placement\nLiquidation pools are critical areas in the crypto market that can trigger mass liquidations of leveraged positions. This card explains **the significance of these pools for effective stop-loss strategies**.\n\n* **Mechanics of Liquidation**: When the price of an asset falls below a certain threshold, leveraged positions are automatically liquidated to cover losses, creating a cascade effect. Understanding this mechanism is vital for positioning stops effectively.\n* **Locating Liquidation Zones**: Use technical analysis tools to identify price levels where significant liquidations are likely to occur, often near previous highs or lows. These zones can be identified through volume profile analysis.\n* **Risk Management**: Incorporate knowledge of liquidation pools into your risk management strategy by placing stop-loss orders strategically to avoid being swept out during volatile market conditions.",
    "visualKey": "stop-loss-placement",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Dealing with Scam Wicks in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Scam Wicks: Recognizing and Adapting Stop-Loss Placements\nScam wicks can create misleading price movements that trigger stop-loss orders prematurely. This card focuses on **how to identify and adjust for scam wicks in your trading strategy**.\n\n* **Characteristics of Scam Wicks**: These deceptive price spikes often occur during low liquidity periods or around major news events, creating false signals. Recognize patterns that typically precede these wicks.\n* **Adjusting Stop-Loss Levels**: To avoid being stopped out by scam wicks, consider placing stop-loss orders slightly above or below recent swing highs or lows, rather than at exact levels. This adjustment helps account for erratic price behavior.\n* **Market Context Awareness**: Always assess the broader market context and sentiment before placing stop-loss orders. Understanding the potential for scam wicks can inform your decision-making process.",
    "visualKey": "stop-loss-placement",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Using Market Sentiment to Inform Stop-Loss Decisions",
    "label": "Crypto Track",
    "body": "### Market Sentiment: Informing Stop-Loss Decisions\nMarket sentiment plays a pivotal role in price movements within the crypto space. This card discusses **how to leverage sentiment analysis for effective stop-loss placements**.\n\n* **Sentiment Indicators**: Utilize tools such as the Fear and Greed Index or social media sentiment analysis to gauge market psychology. High levels of fear may indicate potential reversals, while extreme greed can signal overbought conditions.\n* **Incorporating Sentiment into Strategy**: Adjust stop-loss placements based on prevailing sentiment. For example, in a bullish sentiment environment, consider tighter stop-loss levels to protect gains, while in bearish conditions, wider stops may be warranted.\n* **Continuous Monitoring**: Regularly monitor sentiment shifts, as they can precede significant market movements. Being proactive in adjusting stop-loss orders based on sentiment can enhance risk management.",
    "visualKey": "stop-loss-placement",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Evaluating Historical Liquidation Events",
    "label": "Crypto Track",
    "body": "### Historical Analysis: Liquidation Events\nUnderstanding past liquidation events provides critical insights into market behavior and can inform effective stop-loss strategies. This card covers **how to analyze historical liquidation events to enhance stop-loss placement**.\n\n* **Data Collection**: Gather historical data on major liquidation events, focusing on price movements and volume spikes in instruments like Bitcoin (BTC) and Ethereum (ETH) during significant market shifts.\n* **Price Action Correlation**: Identify patterns where liquidations occurred, such as BTC dropping 15% within a 30-minute window, often correlating with high leverage positions being wiped out.\n* **Market Sentiment Analysis**: Evaluate the sentiment leading up to liquidation events, noting how fear or euphoria can influence price volatility and trigger stop-loss levels.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Event",
          "definition": "A situation where a trader's position is forcibly closed due to insufficient margin."
        }
      ],
      "whyThisMatters": "Understanding historical liquidation events allows traders to anticipate potential price movements and set more informed stop-loss levels.",
      "realLifeExample": "On March 12, 2020, BTC experienced a liquidation cascade, dropping from $7,000 to $3,800 in hours, highlighting the impact of high leverage and market panic.",
      "commonMistake": "Traders often overlook the importance of historical data, leading to poorly placed stop-loss orders that do not account for market volatility.",
      "quickNote": "Analyze historical liquidation data to inform future stop-loss placements.",
      "mentorText": "When I analyze past liquidation events, I focus on the price action and volume. If I see a pattern where a 10% drop triggered mass liquidations, I adjust my stop-loss accordingly.",
      "mentorAnalogy": "Think of analyzing liquidation events like studying flight data after a crash; it reveals critical insights that can prevent future disasters."
    },
    "taskData": null,
    "visualKey": "stop-loss-placement"
  },
  {
    "type": "concept",
    "title": "Common Mistakes in Crypto Stop-Loss Placement",
    "label": "Crypto Track",
    "body": "### Pitfalls: Stop-Loss Placement in Crypto\nIdentifying common mistakes in stop-loss placement is essential for improving trade outcomes. This card outlines **frequent errors traders make and strategies to avoid them**.\n\n* **Arbitrary Levels**: Placing stop-loss orders at arbitrary levels, such as round numbers (e.g., $5,000 for ETH), can lead to unnecessary liquidations when the market is volatile.\n* **Ignoring Volatility**: Failing to account for the inherent volatility in crypto markets can result in stop-loss orders being triggered too early, especially during news events or market corrections.\n* **Psychological Stops**: Relying on psychological levels rather than structural analysis can lead to poor decision-making; for instance, setting a stop-loss based on fear rather than market structure can be detrimental.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Arbitrary Stop-Loss",
          "definition": "A stop-loss order placed without a technical basis, often at round numbers."
        }
      ],
      "whyThisMatters": "Avoiding common mistakes in stop-loss placement enhances risk management and increases the likelihood of successful trades.",
      "realLifeExample": "A trader sets a stop-loss at $10,000 for BTC without considering recent support levels, resulting in a premature exit when the price briefly dips to $9,800.",
      "commonMistake": "Many traders place stop-losses based on emotional reactions rather than technical analysis, leading to avoidable losses.",
      "quickNote": "Avoid arbitrary and psychological levels when placing stop-loss orders.",
      "mentorText": "I often see traders setting stop-losses at round numbers. This is a mistake; the market often targets these levels to trigger liquidations.",
      "mentorAnalogy": "Placing stop-losses without analysis is like a pilot flying without a flight plan; it increases the risk of failure."
    },
    "taskData": null,
    "visualKey": "stop-loss-placement"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Crypto Stop-Loss Strategies",
    "label": "Crypto Track",
    "body": "### Hands-On: Developing Stop-Loss Strategies\nEngaging in practical exercises helps solidify effective stop-loss strategies in crypto trading. This card provides **real-world scenarios for hands-on application**.\n\n* **Scenario Analysis**: Given a recent ETH price drop from $2,000 to $1,800, determine an optimal stop-loss placement based on historical support levels and volatility metrics.\n* **Risk Assessment**: Evaluate a hypothetical situation where BTC rallies to $60,000; decide on a stop-loss strategy that balances risk and potential reward, considering the recent price action.\n* **Market Reaction Simulation**: Analyze a news event that causes a 10% spike in BTC; practice adjusting stop-loss levels in real-time to mitigate risk while maximizing profit potential.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating potential outcomes based on historical data and market conditions."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce the application of stop-loss strategies, enhancing decision-making skills in live trading environments.",
      "realLifeExample": "During a recent market correction, a trader successfully adjusted their stop-loss for BTC from $58,000 to $55,000 based on support levels identified in previous price action.",
      "commonMistake": "Traders often fail to practice adjusting stop-loss levels in response to market changes, leading to missed opportunities.",
      "quickNote": "Engage in scenario-based exercises to refine stop-loss strategies.",
      "mentorText": "In practice, I simulate different market conditions to test my stop-loss strategies. This prepares me for real-time adjustments when volatility strikes.",
      "mentorAnalogy": "Think of these exercises like a flight simulator; they prepare you for real-world scenarios without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are analyzing a recent drop in BTC from $60,000 to $54,000. What is the best approach for setting your stop-loss?",
      "options": [
        {
          "id": "0",
          "text": "Set a stop-loss at $53,500, just below the recent low.",
          "isCorrect": true,
          "feedback": "This approach uses recent price action to set a logical stop-loss, minimizing the risk of premature liquidation."
        },
        {
          "id": "1",
          "text": "Set a stop-loss at $55,000, a round number.",
          "isCorrect": false,
          "feedback": "Using a round number for a stop-loss is arbitrary and may increase the risk of being targeted by market movements."
        },
        {
          "id": "2",
          "text": "Set a stop-loss at $50,000, anticipating a larger drop.",
          "isCorrect": false,
          "feedback": "This approach does not consider recent price action and could lead to significant losses."
        },
        {
          "id": "3",
          "text": "Do not set a stop-loss, relying on market recovery.",
          "isCorrect": false,
          "feedback": "Neglecting to set a stop-loss exposes you to unlimited risk in a volatile market."
        }
      ]
    },
    "visualKey": "stop-loss-placement"
  },
  {
    "type": "summary",
    "title": "Key Insights on Crypto Stop-Loss Placement",
    "label": "Crypto Track",
    "body": "### Summary: Stop-Loss Placement Insights\nThis card summarizes the essential insights gained regarding stop-loss placement in the crypto market, emphasizing the importance of avoiding liquidation pools. Key takeaways include **strategies for effective stop-loss placement**.\n\n* **Structural Invalidation Levels**: Always base stop-loss placements on structural levels rather than psychological or arbitrary targets to minimize the risk of liquidation.\n* **Historical Context**: Utilize historical liquidation data to inform current stop-loss strategies, ensuring they align with market behavior.\n* **Adaptive Strategies**: Continuously adapt stop-loss levels based on market conditions and volatility to protect capital effectively.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Pool",
          "definition": "A concentration of stop-loss orders that can trigger cascading liquidations."
        }
      ],
      "whyThisMatters": "Summarizing these insights reinforces the importance of strategic stop-loss placement, critical for risk management in crypto trading.",
      "realLifeExample": "A trader who adjusted their stop-loss based on historical liquidation events was able to avoid significant losses during a market crash.",
      "commonMistake": "Traders often neglect to adjust their stop-loss levels in response to changing market dynamics, leading to unnecessary losses.",
      "quickNote": "Focus on structural levels and historical data for effective stop-loss placement.",
      "mentorText": "In my experience, the best traders are those who adapt their stop-loss strategies based on real-time data and historical patterns. This is non-negotiable.",
      "mentorAnalogy": "Setting stop-losses without considering market structure is like a surgeon operating without a clear view of the anatomy; it increases the risk of failure."
    },
    "taskData": null,
    "visualKey": "stop-loss-placement"
  }
];
