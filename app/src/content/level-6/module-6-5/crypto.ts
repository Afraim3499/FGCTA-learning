import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Using Liquidation Pool Boundaries as Invalidation Limits",
    "label": "Crypto Track",
    "body": "### Core Scenario: Liquidation Pool Boundaries\nLiquidation pools represent critical price levels where a significant number of leveraged positions are forced to close, creating potential invalidation limits. This card teaches **how to identify these boundaries effectively for risk management**.\n\n* **Identifying Key Levels**: Analyze the order book to locate price levels with high open interest; these levels often correspond to liquidation points.\n* **Setting Invalidation Limits**: Establish invalidation limits just beyond these boundaries to minimize risk exposure, ensuring that the trade remains valid until these levels are breached.\n* **Market Reaction**: Monitor price action around these levels; a strong rejection at a liquidation pool boundary can reinforce the validity of the trade setup.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Pool",
          "definition": "A price level where a significant number of leveraged positions are liquidated."
        }
      ],
      "whyThisMatters": "Identifying liquidation pool boundaries helps traders set precise invalidation limits, enhancing risk management strategies.",
      "realLifeExample": "BTC/USD trading at $30,000, with a liquidation pool identified at $29,800; a breach below this level triggers a 5% stop loss for long positions.",
      "commonMistake": "Failing to adjust invalidation limits based on the dynamic nature of liquidation pools can lead to unnecessary losses.",
      "quickNote": "Liquidation pools serve as critical invalidation limits in crypto trading.",
      "mentorText": "When you see a concentration of liquidations around a price level, treat it like a wall. If price breaches that wall, it’s time to reconsider your position.",
      "mentorAnalogy": "Think of liquidation pools like the structural integrity of a bridge; if the load exceeds its capacity, the bridge collapses, just as your trade will if it breaches these critical price levels."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Analyzing Market Depth for Invalidation Insights",
    "label": "Crypto Track",
    "body": "### Core Scenario: Market Depth Analysis\nMarket depth provides a visual representation of buy and sell orders, revealing potential invalidation points in the crypto market. This card teaches **how to analyze market depth for strategic insights**.\n\n* **Order Book Structure**: Examine the order book to identify clusters of buy or sell orders that may act as support or resistance, indicating potential invalidation levels.\n* **Volume Imbalances**: Look for significant volume imbalances that can signal where price may reverse, allowing traders to set invalidation points accordingly.\n* **Dynamic Adjustments**: Continuously monitor market depth as it evolves; adjust invalidation levels based on real-time changes in order flow to maintain an accurate risk management strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Depth",
          "definition": "A visual representation of the buy and sell orders in the market."
        }
      ],
      "whyThisMatters": "Understanding market depth allows traders to identify potential invalidation points, enhancing decision-making in volatile conditions.",
      "realLifeExample": "ETH/USD shows a large sell wall at $2,000; if price approaches this level and fails to break through, it serves as an invalidation point for long positions.",
      "commonMistake": "Overlooking changes in market depth can lead to missed invalidation signals, resulting in poor trade management.",
      "quickNote": "Market depth analysis reveals critical invalidation insights for traders.",
      "mentorText": "When analyzing market depth, think of it as a live pulse of the market. If you see a strong sell wall, it’s a clear signal to reconsider your position if you’re long.",
      "mentorAnalogy": "Consider market depth like a crowded theater; if too many people are trying to exit at once, it creates a bottleneck, just like price action can stall at heavy order levels."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Order Flow Analysis for Identifying Invalidation Triggers",
    "label": "Crypto Track",
    "body": "### Core Scenario: Order Flow Dynamics\nOrder flow analysis involves tracking the actual transactions occurring in the market, providing insights into potential invalidation triggers. This card teaches **how to leverage order flow for informed trading decisions**.\n\n* **Transaction Volume**: Monitor transaction volume spikes; sudden increases can indicate strong buying or selling pressure that may invalidate existing scenarios.\n* **Price Movement Correlation**: Analyze how price reacts to order flow; if price fails to sustain momentum after a large order, it signals a potential invalidation trigger.\n* **Market Sentiment**: Use order flow to gauge market sentiment; shifts in sentiment can lead to rapid invalidation, requiring immediate adjustments to trading strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Flow",
          "definition": "The actual transactions occurring in the market, reflecting buying and selling activity."
        }
      ],
      "whyThisMatters": "Order flow analysis enhances the ability to identify invalidation triggers, allowing for timely adjustments in trading strategies.",
      "realLifeExample": "During a spike in XRP/USD, a sudden increase in sell orders at $0.50 leads to a rapid price drop, invalidating long positions that were set at $0.52.",
      "commonMistake": "Ignoring order flow changes can lead to missed invalidation signals, resulting in significant losses.",
      "quickNote": "Order flow analysis is essential for identifying invalidation triggers in crypto trading.",
      "mentorText": "When you see a sudden surge in sell orders, don’t just watch the price drop; recognize it as a potential invalidation trigger for your current strategy.",
      "mentorAnalogy": "Think of order flow like the air traffic control system; if a sudden influx of planes (orders) comes in, it can disrupt the entire flow, just as invalidation can disrupt your trading plan."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Price Action Patterns as Invalidation Indicators",
    "label": "Crypto Track",
    "body": "### Core Scenario: Price Action Interpretation\nPrice action patterns provide critical insights into market behavior, serving as indicators for potential invalidation scenarios. This card teaches **how to interpret these patterns effectively**.\n\n* **Pattern Recognition**: Identify key price action patterns such as pin bars or engulfing candles that signal potential reversals, indicating where invalidation may occur.\n* **Confirmation Signals**: Look for confirmation from subsequent candles; a failure to follow through after a reversal pattern can serve as a strong invalidation signal.\n* **Contextual Analysis**: Always analyze price action within the context of market conditions; patterns that appear in high volatility may carry different implications than those in stable conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time, often analyzed for patterns."
        }
      ],
      "whyThisMatters": "Interpreting price action patterns allows traders to identify potential invalidation scenarios, enhancing decision-making in real-time.",
      "realLifeExample": "BTC/USD forms a bearish engulfing pattern at $35,000; if the following candle closes below $34,800, it serves as an invalidation point for long positions.",
      "commonMistake": "Failing to confirm price action patterns with subsequent candles can lead to premature invalidation decisions.",
      "quickNote": "Price action patterns are vital indicators for identifying invalidation scenarios.",
      "mentorText": "When you spot a reversal pattern, don’t just take it at face value; wait for confirmation before deciding whether your trade remains valid.",
      "mentorAnalogy": "Interpreting price action is like reading a surgeon’s scalpel movements; each cut must be precise and confirmed before proceeding, just as each price action signal needs confirmation before acting."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Identifying Liquidation Trends for Invalidation Analysis",
    "label": "Crypto Track",
    "body": "### Core Scenario: Liquidation Trend Identification\nLiquidation trends provide critical insights into potential invalidation points, particularly in volatile crypto markets. This card teaches **how to recognize and analyze liquidation trends effectively**.\n\n* **Trend Analysis**: Monitor price action around key liquidation levels, identifying clusters where liquidations are likely to occur, such as at major support or resistance zones.\n* **Volume Indicators**: Use volume spikes to confirm liquidation trends, as increased trading volume often precedes significant price movements that can invalidate existing scenarios.\n* **Candle Behavior**: Analyze candle formations near liquidation levels; for instance, a bearish engulfing candle at a liquidation cluster signals a strong potential for scenario invalidation.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Trend",
          "definition": "A pattern indicating where significant liquidations may occur, impacting market dynamics."
        }
      ],
      "whyThisMatters": "Identifying liquidation trends allows traders to pinpoint critical invalidation levels, enhancing risk management strategies in volatile conditions.",
      "realLifeExample": "During the Ethereum flash crash on May 19, 2021, liquidation clusters were observed around $2,000, leading to a rapid price drop and invalidating bullish scenarios.",
      "commonMistake": "Traders often overlook volume indicators, failing to recognize the significance of volume spikes in confirming liquidation trends.",
      "quickNote": "Liquidation trends are essential for identifying potential invalidation points in crypto trading.",
      "mentorText": "When I analyze liquidation trends, I focus on the price action and volume around key levels. If I see a lot of liquidations happening at a certain price, I know that's a critical point to watch for potential invalidation.",
      "mentorAnalogy": "Think of liquidation trends like a pressure gauge in an aircraft; if the pressure builds up too much at a certain point, it can lead to a catastrophic failure, just like how price action can invalidate a trading scenario."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Sentiment Analysis for Crypto Invalidation Decisions",
    "label": "Crypto Track",
    "body": "### Core Scenario: Sentiment Analysis Integration\nSentiment analysis provides a qualitative layer to the quantitative data, enhancing invalidation decision-making in crypto trading. This card teaches **how to integrate sentiment analysis into your invalidation framework**.\n\n* **Market Sentiment Indicators**: Utilize tools like the Fear & Greed Index to gauge overall market sentiment, identifying when extreme fear or greed may signal potential invalidation points.\n* **Social Media Metrics**: Monitor social media sentiment through platforms like Twitter or Reddit; spikes in negative sentiment can precede price drops that invalidate bullish scenarios.\n* **News Impact Assessment**: Analyze the impact of major news events on market sentiment; for example, negative regulatory news can trigger sell-offs that invalidate existing bullish setups.",
    "context": {
      "keyTerms": [
        {
          "term": "Sentiment Analysis",
          "definition": "The evaluation of market sentiment through qualitative data sources to inform trading decisions."
        }
      ],
      "whyThisMatters": "Incorporating sentiment analysis allows traders to anticipate market reactions that may lead to scenario invalidation, improving overall decision-making.",
      "realLifeExample": "After the announcement of regulatory scrutiny on Bitcoin in early 2021, a significant shift in sentiment was observed, leading to a rapid decline in price and invalidating bullish setups around $60,000.",
      "commonMistake": "Traders often ignore sentiment indicators, relying solely on technical analysis, which can lead to missed invalidation signals.",
      "quickNote": "Sentiment analysis enhances the understanding of market dynamics, crucial for identifying invalidation points.",
      "mentorText": "I always check sentiment indicators before making a trade. If the market is overly bullish and I see negative news, I know to be cautious about my bullish scenarios.",
      "mentorAnalogy": "Consider sentiment analysis like a weather forecast for a flight; just as pilots need to know about storms ahead, traders must be aware of market sentiment shifts that can invalidate their plans."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "practice",
    "title": "Simulating Invalidation Scenarios in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Scenario: Liquidation Pool Simulation\nSimulating invalidation scenarios allows traders to practice identifying liquidation pool boundaries effectively. This card focuses on **engaging in simulations to reinforce learning**.\n\n* **Scenario Setup**: Create a trading simulation using historical data, identifying key liquidation levels for Bitcoin around $30,000 during high volatility periods.\n* **Boundary Testing**: Test your scenarios by adjusting parameters, observing how price reacts to liquidation boundaries, and noting invalidation points based on candle behavior.\n* **Review Outcomes**: After each simulation, analyze the outcomes to understand how different liquidation levels impacted your trading decisions and scenario validity.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Pool",
          "definition": "A concentration of stop-loss orders and margin calls that can lead to significant price movements."
        }
      ],
      "whyThisMatters": "Simulating invalidation scenarios reinforces the understanding of liquidation boundaries, enhancing traders' preparedness for real market conditions.",
      "realLifeExample": "In a simulation, testing Bitcoin's price action at $30,000 revealed that a breach of this level led to a 15% drop, invalidating bullish setups.",
      "commonMistake": "Traders often fail to simulate real market conditions, leading to unrealistic expectations about their strategies.",
      "quickNote": "Simulations are essential for practicing invalidation analysis in crypto trading.",
      "mentorText": "When I run simulations, I focus on how price interacts with liquidation pools. It's crucial to see how different scenarios play out to prepare for real trades.",
      "mentorAnalogy": "Simulating invalidation scenarios is like a pilot conducting flight simulations; it prepares you for unexpected turbulence and helps you understand how to react in real situations."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulation, Bitcoin approaches a liquidation pool at $30,000. What should be your primary focus?",
      "options": [
        {
          "id": "0",
          "text": "Monitor candle behavior around $30,000 for signs of invalidation.",
          "isCorrect": true,
          "feedback": "Correct. Candle behavior is crucial in determining whether the scenario remains valid."
        },
        {
          "id": "1",
          "text": "Place a buy order immediately as it approaches $30,000.",
          "isCorrect": false,
          "feedback": "Incorrect. Placing a buy order without analyzing price action can lead to significant losses."
        },
        {
          "id": "2",
          "text": "Ignore the liquidation pool and focus on other indicators.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring the liquidation pool can result in missed invalidation signals."
        },
        {
          "id": "3",
          "text": "Set a stop-loss above $30,000 without further analysis.",
          "isCorrect": false,
          "feedback": "Incorrect. Setting a stop-loss without understanding market dynamics can lead to premature exits."
        }
      ]
    },
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Invalidation Techniques",
    "label": "Crypto Track",
    "body": "### Core Scenario: Consolidated Invalidation Techniques\nThis summary consolidates key techniques for using liquidation pool boundaries as invalidation limits in crypto trading. Understanding these techniques is vital for effective risk management.\n\n* **Liquidation Trend Identification**: Recognize liquidation trends to pinpoint critical invalidation levels, enhancing your risk management strategies.\n* **Sentiment Analysis Integration**: Incorporate sentiment analysis to anticipate market reactions that may lead to scenario invalidation, improving decision-making.\n* **Simulation Practice**: Engage in simulations to reinforce the understanding of liquidation boundaries and their impact on trading scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Limit",
          "definition": "A price level or condition that, when breached, invalidates a trading scenario."
        }
      ],
      "whyThisMatters": "Summarizing these techniques reinforces the learning objectives, ensuring traders can effectively navigate invalidation scenarios.",
      "realLifeExample": "Traders who effectively combined liquidation trend analysis and sentiment indicators during the Bitcoin rally in late 2020 were able to identify critical invalidation points around $40,000.",
      "commonMistake": "Failing to consolidate knowledge from various techniques can lead to a fragmented understanding of invalidation strategies.",
      "quickNote": "Consolidating invalidation techniques enhances risk management in crypto trading.",
      "mentorText": "I always remind my traders to consolidate their knowledge. Understanding how liquidation trends, sentiment, and simulations work together is crucial for making informed decisions.",
      "mentorAnalogy": "Think of consolidating these techniques like a chef perfecting a recipe; each ingredient plays a role in the final dish, just as each technique contributes to effective trading."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  }
];
