import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Using Gold Fixing Price Highs as Invalidation Filters",
    "label": "Gold Track",
    "body": "### Core Scenario: Gold Fixing Price Highs\nGold fixing price highs serve as critical invalidation filters, allowing traders to refine their strategies by identifying key price levels. This card teaches **how to effectively utilize these highs to determine invalidation points**.\n\n* **Identifying Fixing Price Highs**: The gold fixing price occurs at 10:30 AM London time; use this price as a reference point for setting invalidation levels.\n* **Setting Invalidation Filters**: If the price trades above the fixing high, consider the scenario invalidated, as it indicates a shift in market sentiment.\n* **Confirmation with Volume**: Validate the invalidation by assessing volume spikes; a significant increase in volume at the fixing high reinforces the invalidation signal.",
    "visualKey": "invalidation-boundaries",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Price Volatility Analysis for Invalidation Levels",
    "label": "Gold Track",
    "body": "### Core Scenario: Analyzing Price Volatility\nPrice volatility in gold is a vital component for identifying potential invalidation levels, ensuring traders can make informed decisions. This card teaches **how to analyze volatility to pinpoint invalidation thresholds**.\n\n* **Calculating Average True Range (ATR)**: Use the ATR to gauge volatility; a higher ATR suggests wider invalidation levels, while a lower ATR indicates tighter levels.\n* **Volatility Breakouts**: Monitor for volatility breakouts; if gold exceeds the ATR by a significant margin, it may signal an invalidation of the current scenario.\n* **Session-Specific Volatility**: Analyze volatility during key sessions (e.g., U.S. market open) to adjust invalidation levels dynamically based on market conditions.",
    "visualKey": "invalidation-boundaries",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Correlation Between Gold and Other Assets for Invalidation Insights",
    "label": "Gold Track",
    "body": "### Core Scenario: Asset Correlation Analysis\nUnderstanding the correlation between gold and other assets provides valuable insights into potential invalidation scenarios. This card teaches **how to leverage asset correlations to enhance invalidation strategies**.\n\n* **Identifying Correlated Assets**: Monitor assets such as the U.S. Dollar Index (DXY) and crude oil; significant movements in these can indicate potential invalidation levels in gold.\n* **Correlation Coefficient Analysis**: Calculate the correlation coefficient; a value near +1 indicates strong correlation, suggesting that movements in correlated assets may invalidate gold scenarios.\n* **Market Sentiment Shifts**: Use correlation shifts during major economic announcements (e.g., NFP reports) to adjust invalidation levels based on anticipated market reactions.",
    "visualKey": "invalidation-boundaries",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Technical Indicators for Gold Invalidation Analysis",
    "label": "Gold Track",
    "body": "### Core Scenario: Utilizing Technical Indicators\nTechnical indicators are essential for identifying invalidation points in gold trading, enhancing precision in decision-making. This card teaches **how to apply specific indicators to determine invalidation levels**.\n\n* **Moving Averages as Invalidation Anchors**: Use the 50-period and 200-period moving averages; if the price closes below these averages, consider the scenario invalidated.\n* **RSI Divergence Analysis**: Monitor the Relative Strength Index (RSI) for divergence; if gold prices rise while RSI falls, it signals potential invalidation of bullish scenarios.\n* **Bollinger Bands for Volatility Context**: Apply Bollinger Bands to assess price action; if gold breaches the lower band, it may indicate a scenario invalidation, prompting a reassessment of market conditions.",
    "visualKey": "invalidation-boundaries",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Identifying Market Trends for Gold Invalidation Filters",
    "label": "Gold Track",
    "body": "### Core Scenario: Market Trend Identification\nIdentifying market trends is essential for establishing invalidation filters in gold trading. This card focuses on **how to discern trends that dictate invalidation levels**.\n\n* **Trend Analysis Techniques**: Utilize moving averages (e.g., 50-day and 200-day) to determine the prevailing trend direction. A crossover of the 50-day moving average below the 200-day indicates a bearish trend, suggesting potential invalidation levels above recent highs.\n* **Price Action Signals**: Observe candle formations, such as lower highs in a downtrend, which signal potential invalidation points. For instance, if gold prices fail to reclaim $1,850 after a series of lower highs, this serves as a critical invalidation anchor.\n* **Volume Confirmation**: Analyze volume spikes accompanying price movements to validate trends. A rise in volume during a downtrend reinforces the likelihood of invalidation at key resistance levels, such as $1,900.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Moving Averages",
          "definition": "A technical analysis tool used to smooth price data and identify trends."
        },
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time, often analyzed through charts."
        },
        {
          "term": "Volume Confirmation",
          "definition": "The analysis of trading volume to validate price movements and trends."
        }
      ],
      "whyThisMatters": "Accurate trend identification allows traders to set precise invalidation filters, minimizing risk exposure in gold trading.",
      "realLifeExample": "On March 15, 2023, gold prices fell to $1,800, forming a series of lower highs. The failure to break above $1,850 confirmed a bearish trend, establishing $1,850 as an invalidation anchor.",
      "commonMistake": "Traders often overlook the importance of volume in confirming trends, leading to premature invalidation decisions.",
      "quickNote": "Identify market trends to set effective invalidation filters in gold trading.",
      "mentorText": "When analyzing gold, always check the moving averages first. If the 50-day crosses below the 200-day, you need to reassess your invalidation levels — they may be higher than you initially thought.",
      "mentorAnalogy": "Think of market trends like flight paths in aviation; just as pilots must adjust their routes based on weather patterns, traders must adapt their invalidation strategies based on prevailing market trends."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Seasonal Patterns in Gold Prices as Invalidation Factors",
    "label": "Gold Track",
    "body": "### Core Scenario: Seasonal Price Influences\nSeasonal patterns significantly impact gold prices, serving as vital invalidation factors. This card explores **how to leverage seasonal trends to identify potential invalidation levels**.\n\n* **Historical Price Analysis**: Review historical data to identify recurring seasonal trends, such as gold's tendency to rise during Q4 due to increased demand for jewelry. This seasonal behavior can establish key invalidation points during off-peak periods.\n* **Economic Indicators**: Monitor economic events that coincide with seasonal patterns, such as harvest seasons or holiday buying spikes. For instance, if gold prices typically rise in December, a failure to maintain above $1,850 during this period may indicate an invalidation trigger.\n* **Correlation with Other Markets**: Analyze correlations with other commodities or currencies that exhibit seasonal trends. For example, if silver prices rise seasonally, a concurrent drop in gold below $1,800 could serve as an invalidation signal for bullish positions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Seasonal Patterns",
          "definition": "Recurring trends in price movements based on specific times of the year."
        },
        {
          "term": "Economic Indicators",
          "definition": "Statistics that provide insight into economic performance and can influence market behavior."
        },
        {
          "term": "Correlation Analysis",
          "definition": "The study of how different assets move in relation to one another."
        }
      ],
      "whyThisMatters": "Understanding seasonal patterns helps traders anticipate market shifts and set appropriate invalidation levels.",
      "realLifeExample": "In December 2022, gold prices typically rose due to holiday demand. However, when prices fell below $1,850, it indicated a potential invalidation of bullish scenarios as seasonal demand waned.",
      "commonMistake": "Traders often ignore seasonal trends, leading to misjudgment of invalidation levels during critical periods.",
      "quickNote": "Utilize seasonal patterns to inform invalidation strategies in gold trading.",
      "mentorText": "Always consider the seasonal context when trading gold. If you know December is typically bullish, but prices drop below key levels, it’s a strong signal to reassess your positions.",
      "mentorAnalogy": "Think of seasonal patterns like weather forecasting; just as meteorologists predict storms based on historical data, traders must anticipate market shifts using seasonal trends."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "practice",
    "title": "Practicing Invalidation Filters in Gold Trading",
    "label": "Gold Track",
    "body": "### Core Scenario: Applying Invalidation Filters\nEngaging in practical exercises enhances the ability to apply gold fixing price highs as invalidation filters. This card focuses on **real-world scenarios for practice**.\n\n* **Scenario Analysis**: Review past trading sessions where gold prices approached critical levels. For example, analyze the session on February 10, 2023, where gold tested $1,900 but failed to close above it, establishing $1,900 as an invalidation filter for subsequent trades.\n* **Trade Simulation**: Create simulated trades based on historical data, setting invalidation filters at fixing price highs. For instance, if gold closed at $1,850, set your invalidation at $1,855 to manage risk effectively.\n* **Risk Management Techniques**: Implement risk management strategies by adjusting position sizes based on proximity to invalidation levels. If trading near $1,900, reduce position size to mitigate potential losses if invalidation occurs.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating past market conditions to inform future trading decisions."
        },
        {
          "term": "Trade Simulation",
          "definition": "Practicing trading strategies in a controlled environment using historical data."
        },
        {
          "term": "Risk Management",
          "definition": "Strategies employed to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Practical application of invalidation filters solidifies understanding and enhances decision-making in live trading environments.",
      "realLifeExample": "During the trading session on February 10, 2023, gold tested $1,900 but closed below it. Practicing setting an invalidation filter at $1,905 would have mitigated losses for traders entering bullish positions.",
      "commonMistake": "Traders often set invalidation filters too close to entry points, increasing the likelihood of premature exits.",
      "quickNote": "Practice applying invalidation filters to enhance trading precision in gold markets.",
      "mentorText": "When you practice, always set your invalidation filters based on historical highs. If you see a price level that has previously acted as resistance, use it to guide your trades.",
      "mentorAnalogy": "Consider this practice like a flight simulator; just as pilots rehearse emergency procedures, traders must simulate invalidation scenarios to prepare for real market conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a trading session, gold prices approach $1,900 but fail to break above it. What should be your invalidation filter for a bullish position?",
      "options": [
        {
          "id": "0",
          "text": "$1,905",
          "isCorrect": true,
          "feedback": "Setting the invalidation filter at $1,905 allows for a buffer above the resistance level, minimizing risk."
        },
        {
          "id": "1",
          "text": "$1,895",
          "isCorrect": false,
          "feedback": "Setting the invalidation at $1,895 is too close to the resistance level and increases the risk of premature exit."
        },
        {
          "id": "2",
          "text": "$1,910",
          "isCorrect": false,
          "feedback": "While $1,910 is above $1,900, it may be too far from the current price action to effectively manage risk."
        },
        {
          "id": "3",
          "text": "$1,880",
          "isCorrect": false,
          "feedback": "Setting the invalidation at $1,880 does not account for the resistance at $1,900 and increases the likelihood of losses."
        }
      ]
    },
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Invalidation Techniques",
    "label": "Gold Track",
    "body": "### Core Scenario: Consolidating Invalidation Knowledge\nThis summary consolidates key techniques for utilizing gold fixing price highs as invalidation filters. It reinforces **the critical components of effective invalidation strategies**.\n\n* **Identifying Key Levels**: Recognize significant price levels such as recent highs and lows that serve as potential invalidation anchors. For example, if gold consistently fails to hold above $1,900, this level becomes a critical invalidation point.\n* **Incorporating Seasonal Insights**: Leverage seasonal patterns that influence gold prices, adjusting invalidation filters accordingly. Understanding that prices typically rise in Q4 can inform decisions during this period.\n* **Practical Application**: Engage in scenario analysis and trade simulations to reinforce the application of invalidation filters in real-world contexts. Practicing with historical data enhances decision-making skills and risk management techniques.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Key Levels",
          "definition": "Significant price points that traders monitor for potential invalidation."
        },
        {
          "term": "Seasonal Insights",
          "definition": "Understanding how seasonal trends affect price movements."
        },
        {
          "term": "Practical Application",
          "definition": "The use of theoretical knowledge in real-world trading scenarios."
        }
      ],
      "whyThisMatters": "A solid grasp of invalidation techniques equips traders to navigate market fluctuations with precision.",
      "realLifeExample": "In January 2023, gold prices fluctuated around $1,850. Recognizing this as a key level allowed traders to set effective invalidation filters and manage risk appropriately.",
      "commonMistake": "Traders often neglect to consolidate their knowledge of invalidation techniques, leading to inconsistent application in live trading.",
      "quickNote": "Summarize key invalidation techniques to enhance trading effectiveness in gold markets.",
      "mentorText": "As you wrap up your learning, ensure you can identify key levels and apply seasonal insights. This knowledge is your toolkit for navigating the gold market effectively.",
      "mentorAnalogy": "Think of consolidating your knowledge like a chef perfecting a recipe; each technique is an ingredient that contributes to a successful trading outcome."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  }
];
