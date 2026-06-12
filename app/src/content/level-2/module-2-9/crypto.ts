import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Perpetual Liquidation-Driven Displacement",
    "label": "Crypto Track",
    "body": "### Displacement: Perpetual Liquidation Dynamics\nCascading liquidations in perpetual contracts lead to rapid price movements. This card details **how these liquidations create significant displacement in the crypto market**.\n\n* **Liquidation Triggers**: Monitor the funding rate and open interest; a sudden spike in funding can indicate an impending liquidation cascade, resulting in price movements exceeding 5% within minutes.\n* **Volume Surge**: A minimum volume increase of 200% compared to the 30-minute average typically accompanies liquidation events, signaling strong market participation.\n* **Body-to-Wick Ratio**: Analyze the body-to-wick ratio of candles; a ratio exceeding 3:1 on a 1-minute chart indicates a strong liquidation-driven displacement, often leading to further volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Cascading Liquidations",
          "definition": "A series of forced liquidations triggered by price movements that lead to further price declines."
        },
        {
          "term": "Funding Rate",
          "definition": "The interest rate paid by traders who hold leveraged positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Understanding perpetual liquidation-driven displacement is essential for identifying high-risk entry points and potential reversals in the crypto market.",
      "realLifeExample": "On May 19, 2021, Bitcoin experienced a liquidation cascade, dropping from $42,000 to $30,000 in under an hour, with a volume spike of 300% at 1:00 PM EST.",
      "commonMistake": "Failing to account for funding rate changes can lead to misjudging the timing of liquidation events.",
      "quickNote": "Cascading liquidations can create rapid price displacements, often exceeding 5% in minutes.",
      "mentorText": "When you see a sudden spike in funding rates, prepare for potential cascading liquidations. These events can lead to rapid price shifts that you must be ready to capitalize on.",
      "mentorAnalogy": "Think of cascading liquidations like a series of dominos falling; one triggers the next, leading to a rapid and uncontrollable chain reaction."
    },
    "taskData": null,
    "visualKey": "crypto-perp-liquidation-displacement"
  },
  {
    "type": "concept",
    "title": "Analyzing Liquidation Candles",
    "label": "Crypto Track",
    "body": "### Displacement: Characteristics of Liquidation Candles\nLiquidation candles exhibit distinct features that indicate market displacement. This card explains **how to identify and analyze these candles for effective trading strategies**.\n\n* **Candle Body Size**: Look for candles with bodies at least 3 times larger than the average size over the past 10 candles; this indicates strong market sentiment and potential displacement.\n* **Wick Length**: A long upper wick on a liquidation candle suggests aggressive selling pressure, while a long lower wick indicates buying support; both are critical for assessing market strength.\n* **Volume Confirmation**: Ensure that liquidation candles are accompanied by a volume spike of at least 150% to validate the displacement signal before executing trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Candle",
          "definition": "A candlestick that forms during a significant liquidation event, characterized by large body sizes and notable wicks."
        },
        {
          "term": "Volume Spike",
          "definition": "A sudden increase in trading volume, often indicating heightened market activity."
        }
      ],
      "whyThisMatters": "Recognizing the characteristics of liquidation candles allows traders to anticipate market movements and adjust their strategies accordingly.",
      "realLifeExample": "On March 12, 2020, Ethereum's liquidation candle closed with a body size of 15% of its previous candle, accompanied by a volume spike of 250%, signaling a significant displacement.",
      "commonMistake": "Ignoring wick lengths can lead to misinterpretation of market sentiment during liquidation events.",
      "quickNote": "Liquidation candles with large bodies and volume spikes are key indicators of market displacement.",
      "mentorText": "When you see a liquidation candle, assess its body size and wick length carefully. These details will guide your next trading decision.",
      "mentorAnalogy": "Analyzing liquidation candles is like examining a car's speedometer and fuel gauge; both provide critical insights into the vehicle's performance and potential issues."
    },
    "taskData": null,
    "visualKey": "crypto-perp-liquidation-displacement"
  },
  {
    "type": "concept",
    "title": "Understanding Cascading Liquidations",
    "label": "Crypto Track",
    "body": "### Displacement: Mechanics of Cascading Liquidations\nCascading liquidations occur when a rapid decline in price forces multiple leveraged positions to close. This card covers **the mechanics behind these events and their impact on market displacement**.\n\n* **Leverage Impact**: Higher leverage increases the likelihood of cascading liquidations; positions with 20x leverage can be liquidated with a mere 5% price drop, triggering further sell-offs.\n* **Market Depth Analysis**: Assess the order book depth; a thin order book can exacerbate price movements, leading to rapid displacement as liquidations occur.\n* **Timeframe Sensitivity**: Cascading liquidations are more pronounced during low liquidity periods, such as late-night sessions (2:00 AM to 4:00 AM EST), when fewer participants are active.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed funds to increase the potential return of an investment."
        },
        {
          "term": "Market Depth",
          "definition": "The measure of supply and demand for a specific asset at various price levels."
        }
      ],
      "whyThisMatters": "Understanding cascading liquidations helps traders anticipate sharp price movements and adjust their risk management strategies accordingly.",
      "realLifeExample": "On June 26, 2021, a sudden drop in Bitcoin from $34,000 to $30,000 triggered cascading liquidations, with over $1 billion in positions closed within 30 minutes due to high leverage and thin market depth.",
      "commonMistake": "Underestimating the impact of leverage can lead to significant losses during liquidation events.",
      "quickNote": "Cascading liquidations can lead to rapid price declines, especially in thin markets.",
      "mentorText": "Always be aware of leverage levels in the market. A small price drop can trigger a chain reaction of liquidations that you need to be prepared for.",
      "mentorAnalogy": "Cascading liquidations are like a chain reaction in a chemical process; one small change can lead to a significant and rapid outcome."
    },
    "taskData": null,
    "visualKey": "crypto-perp-liquidation-displacement"
  },
  {
    "type": "concept",
    "title": "Volume Analysis During Liquidation Events",
    "label": "Crypto Track",
    "body": "### Displacement: Interpreting Volume Spikes\nVolume analysis during liquidation events is crucial for understanding market dynamics. This card focuses on **how to interpret volume spikes and their correlation with price displacement**.\n\n* **Volume Spike Threshold**: Identify volume spikes exceeding 200% of the average volume over the last hour; this often indicates significant market activity and potential price displacement.\n* **Price-Volume Relationship**: Observe the price action relative to volume spikes; if price drops sharply while volume increases, it suggests strong selling pressure and potential continuation of displacement.\n* **Volume Divergence**: Watch for divergence between price and volume; if price rises while volume decreases, this may indicate weakening momentum and a potential reversal following a liquidation event.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Divergence",
          "definition": "A situation where price movement and trading volume move in opposite directions, indicating potential market weakness."
        },
        {
          "term": "Price-Volume Relationship",
          "definition": "The correlation between price movements and trading volume, which can signal market strength or weakness."
        }
      ],
      "whyThisMatters": "Interpreting volume during liquidation events allows traders to make informed decisions about market entry and exit points.",
      "realLifeExample": "During the Bitcoin flash crash on March 12, 2020, volume spiked to 300% while price fell from $8,000 to $4,000, indicating strong selling pressure and confirming the displacement.",
      "commonMistake": "Failing to analyze volume in conjunction with price movements can lead to misinterpretations of market strength.",
      "quickNote": "Volume spikes during liquidation events are critical indicators of market displacement.",
      "mentorText": "Always analyze volume alongside price movements. A spike in volume can confirm whether a price move is genuine or just noise.",
      "mentorAnalogy": "Interpreting volume during liquidation events is like monitoring a ship's radar; it reveals unseen obstacles and helps navigate through turbulent waters."
    },
    "taskData": null,
    "visualKey": "crypto-perp-liquidation-displacement"
  },
  {
    "type": "concept",
    "title": "Common Traps in Liquidation Trading",
    "label": "Crypto Track",
    "body": "### Liquidation Trading: Identifying Common Traps\nLiquidation-driven displacement can mislead traders into making erroneous decisions. This card outlines **common pitfalls and how to effectively interpret market signals**.\n\n* **Misreading Volume Signals**: A sudden spike in volume does not always indicate a strong trend; it may signal liquidation events that can reverse quickly. Analyze the context of volume spikes relative to price action.\n* **Ignoring Wick Dynamics**: Large wicks can indicate rejection levels, but traders often misinterpret them as continuation signals. Always assess the body-to-wick ratio to gauge true market sentiment.\n* **Overreacting to Liquidation Events**: Traders may enter positions too aggressively during liquidation spikes, leading to unfavorable risk-reward ratios. Establish clear entry criteria based on displacement metrics before executing trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Event",
          "definition": "A market occurrence where forced selling leads to rapid price movement."
        },
        {
          "term": "Body-to-Wick Ratio",
          "definition": "The ratio of the body of a candlestick to its wick, indicating market strength."
        }
      ],
      "whyThisMatters": "Understanding these traps is essential for maintaining a disciplined approach during volatile liquidation events.",
      "realLifeExample": "On July 10, 2023, BTC saw a liquidation spike at 3:00 AM EST, where a 10% price drop was accompanied by a 200% increase in volume, misleading traders into thinking it was a continuation signal.",
      "commonMistake": "Traders often enter positions based solely on volume spikes without analyzing the underlying price action.",
      "quickNote": "Always assess body-to-wick ratios to avoid misinterpretation of market signals.",
      "mentorText": "When you see a volume spike, don't just jump in. Look at the price action and the body-to-wick ratio. If the wick is larger than the body, it’s likely a trap.",
      "mentorAnalogy": "Think of a surgeon assessing a patient’s vitals; a sudden spike in heart rate doesn’t always indicate a problem, but rather requires thorough examination."
    },
    "taskData": null,
    "visualKey": "crypto-perp-liquidation-displacement"
  },
  {
    "type": "concept",
    "title": "Real-Time Monitoring of Liquidation Events",
    "label": "Crypto Track",
    "body": "### Liquidation Events: Real-Time Monitoring Techniques\nEffective trading during liquidation events requires swift and accurate monitoring. This card discusses **tools and techniques for real-time analysis**.\n\n* **Utilizing Order Book Depth**: Monitor the order book for sudden shifts in buy and sell walls, which can indicate impending liquidation events. A sudden depletion of buy orders can precede a price drop.\n* **Setting Up Alerts**: Use trading platforms to set alerts for significant price movements or volume changes. This allows for immediate reaction to potential displacement scenarios.\n* **Integrating News Feeds**: Real-time news feeds can provide context for liquidation events. Sudden market news can trigger liquidations, so stay informed to anticipate market reactions.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Depth",
          "definition": "A visual representation of buy and sell orders at different price levels."
        },
        {
          "term": "Price Alerts",
          "definition": "Notifications set to trigger when a specific price level is reached."
        }
      ],
      "whyThisMatters": "Timely monitoring allows traders to capitalize on displacement opportunities while managing risk effectively.",
      "realLifeExample": "During the Ethereum liquidation event on August 15, 2023, a trader using order book depth noticed a sudden drop in buy orders at $1,800, allowing them to exit positions before a 15% drop.",
      "commonMistake": "Failing to set alerts can lead to missed opportunities during rapid market movements.",
      "quickNote": "Real-time monitoring tools are essential for reacting swiftly to liquidation events.",
      "mentorText": "If you’re not monitoring the order book and setting alerts, you’re trading blind. You need to see the shifts in market sentiment as they happen.",
      "mentorAnalogy": "Consider a pilot monitoring flight instruments; without real-time data, they risk losing control of the aircraft."
    },
    "taskData": null,
    "visualKey": "crypto-perp-liquidation-displacement"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Liquidation-Driven Displacement",
    "label": "Crypto Track",
    "body": "### Liquidation-Driven Displacement: Practical Application\nEngaging in practical exercises reinforces the understanding of liquidation-driven displacement. This card provides **real-world scenarios for application**.\n\n* **Scenario Analysis**: Review a past liquidation event, such as the BTC drop on March 12, 2020, and identify the body-to-wick ratios during the event. Determine the optimal entry and exit points based on your analysis.\n* **Volume Assessment Drill**: Analyze a chart of ETH over a 24-hour period, identifying key volume spikes and their corresponding price actions. Document how these influenced your trading decisions.\n* **Alert Simulation**: Create a simulation where you set alerts for a hypothetical liquidation event. Determine how you would react to the alerts and what criteria would guide your trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating past market events to inform future trading decisions."
        },
        {
          "term": "Volume Spike",
          "definition": "A significant increase in trading volume that can indicate market movement."
        }
      ],
      "whyThisMatters": "Practical exercises solidify theoretical knowledge, preparing traders for real market conditions.",
      "realLifeExample": "In a simulated exercise, a trader identifies a 20% drop in BTC with a body-to-wick ratio of 1:3, allowing them to practice setting stop-loss orders effectively.",
      "commonMistake": "Traders often overlook the importance of simulating real scenarios, leading to unpreparedness in live markets.",
      "quickNote": "Engaging in practical exercises enhances your ability to respond to liquidation events.",
      "mentorText": "Practice makes perfect. Analyze past events and simulate your responses to prepare for real market conditions.",
      "mentorAnalogy": "Like a pilot practicing emergency landings in a simulator, traders must rehearse their responses to market volatility."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated liquidation event, BTC drops 15% in 30 minutes. What should be your first action?",
      "options": [
        {
          "id": "0",
          "text": "Analyze the body-to-wick ratio to assess market sentiment.",
          "isCorrect": true,
          "feedback": "Correct. Analyzing the body-to-wick ratio helps determine if the market is reversing or continuing."
        },
        {
          "id": "1",
          "text": "Immediately enter a long position.",
          "isCorrect": false,
          "feedback": "Incorrect. Entering a position without analysis can lead to significant losses."
        },
        {
          "id": "2",
          "text": "Set a stop-loss at the previous high.",
          "isCorrect": false,
          "feedback": "Incorrect. Setting a stop-loss without understanding market dynamics can be risky."
        },
        {
          "id": "3",
          "text": "Ignore the event and wait for recovery.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring the event can result in missed opportunities or increased losses."
        }
      ]
    },
    "visualKey": "crypto-perp-liquidation-displacement"
  },
  {
    "type": "summary",
    "title": "Summary of Liquidation-Driven Displacement Insights",
    "label": "Crypto Track",
    "body": "### Liquidation-Driven Displacement: Key Insights\nThis card summarizes the essential strategies and insights gained regarding liquidation-driven displacement. Focus on **effective trading techniques**.\n\n* **Recognizing Traps**: Traders must be vigilant of common traps such as misreading volume signals and ignoring wick dynamics to avoid costly mistakes.\n* **Real-Time Tools**: Utilizing order book depth, setting alerts, and integrating news feeds are crucial for timely responses to liquidation events.\n* **Practical Application**: Engaging in scenario analysis and volume assessments enhances preparedness for real market conditions, allowing for informed trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Strategy",
          "definition": "A trading approach focused on capitalizing on forced selling events."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders towards a particular market or asset."
        }
      ],
      "whyThisMatters": "Summarizing these insights consolidates knowledge, enabling traders to implement effective strategies in live markets.",
      "realLifeExample": "After reviewing the liquidation strategies from the March 2020 BTC drop, traders adjusted their approaches, leading to improved performance in subsequent events.",
      "commonMistake": "Failing to consolidate insights can lead to fragmented knowledge and ineffective trading strategies.",
      "quickNote": "Consolidating key insights ensures effective application in trading scenarios.",
      "mentorText": "Review these insights regularly. They are your toolkit for navigating liquidation events successfully.",
      "mentorAnalogy": "Like an architect reviewing blueprints before construction, traders must consolidate insights before executing trades."
    },
    "taskData": null,
    "visualKey": "crypto-perp-liquidation-displacement"
  }
];
