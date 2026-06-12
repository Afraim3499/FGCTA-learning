import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Integrating Daily ADR Bands",
    "label": "Forex Track",
    "body": "### Daily ADR Integration: Establishing Intraday Boundaries\nDaily Average Daily Range (ADR) bands serve as critical tools for defining external price boundaries. This card teaches **how to integrate these bands into trading strategies for intraday setups**.\n\n* **Upper and Lower Boundaries**: Calculate the upper and lower ADR bands by adding and subtracting the ADR from the previous day's close. For example, if EURUSD closed at 1.1000 and the ADR is 50 pips, the upper boundary is 1.1050 and the lower boundary is 1.0950.\n* **Trade Triggers**: Use these boundaries to set entry and exit points. If price approaches the upper boundary during the London session, consider shorting if other indicators align.\n* **Volatility Assessment**: Monitor how price interacts with these bands to gauge market volatility. A breakout beyond the upper boundary may indicate strong bullish momentum, while a rejection at the lower boundary could signal a potential reversal.\n",
    "context": {
      "keyTerms": [
        {
          "term": "ADR Bands",
          "definition": "The upper and lower price levels established by the Average Daily Range."
        }
      ],
      "whyThisMatters": "Integrating ADR bands into your strategy allows for precise boundary mapping, enhancing trade execution and risk management.",
      "realLifeExample": "On a day when GBPUSD closed at 1.3000 with an ADR of 40 pips, the upper boundary would be 1.3040 and the lower 1.2960. If price hits 1.3040 at 10:00 AM EST, consider a short position.",
      "commonMistake": "Traders often overlook the importance of confirming other indicators before executing trades at ADR boundaries.",
      "quickNote": "Use ADR bands to define clear entry and exit points for intraday trades.",
      "mentorText": "When you see price approaching the ADR boundaries, think of it as a critical checkpoint. Are you prepared to act based on your strategy?",
      "mentorAnalogy": "Integrating ADR bands is like a pilot using altitude markers; they guide you in maintaining safe flight paths and avoiding turbulence."
    },
    "taskData": null,
    "visualKey": "forex-daily-adr-bands"
  },
  {
    "type": "concept",
    "title": "Calculating Daily ADR",
    "label": "Forex Track",
    "body": "### Daily ADR Calculation: Methodology\nUnderstanding how to calculate the Daily Average Daily Range is fundamental for assessing price volatility. This card teaches **the methodology for calculating the Daily ADR**.\n\n* **Price Range Calculation**: Determine the daily range by subtracting the low from the high of the trading day. For instance, if USDJPY has a high of 110.50 and a low of 109.50, the daily range is 1.00.\n* **Average Calculation**: To find the ADR, sum the daily ranges over a specified period (e.g., 14 days) and divide by the number of days. If the sum of the last 14 days' ranges is 14.00, the ADR is 1.00.\n* **Volatility Context**: Compare the current ADR to historical averages to assess current volatility. If the current ADR is significantly higher than the 14-day average, expect increased price movement.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Daily Range",
          "definition": "The difference between the highest and lowest price of a currency pair within a trading day."
        },
        {
          "term": "Average Daily Range (ADR)",
          "definition": "The average of daily price ranges over a specified period."
        }
      ],
      "whyThisMatters": "Calculating the ADR accurately provides a quantitative measure of market volatility, essential for informed trading decisions.",
      "realLifeExample": "If the last 14 days of EURCAD had daily ranges of 30, 40, 35, 50, 25, 45, 30, 60, 55, 40, 50, 35, 45, 30, the ADR would be 40 pips after summing and dividing by 14.",
      "commonMistake": "Traders often fail to adjust their calculations for weekends or holidays, leading to inaccurate ADR values.",
      "quickNote": "Calculate the ADR by averaging daily price ranges to gauge market volatility.",
      "mentorText": "Think of calculating the ADR as setting your baseline for volatility. It’s your compass for navigating market movements.",
      "mentorAnalogy": "Calculating ADR is like a chef measuring ingredients; precision is key to achieving the desired outcome in your trading strategy."
    },
    "taskData": null,
    "visualKey": "forex-daily-adr-bands"
  },
  {
    "type": "concept",
    "title": "Applying ADR to Identify Boundaries",
    "label": "Forex Track",
    "body": "### ADR Application: Identifying Price Boundaries\nApplying the Average Daily Range effectively helps traders identify potential price boundaries for intraday trades. This card focuses on **practical applications of ADR to enhance decision-making**.\n\n* **Boundary Mapping**: Use the calculated ADR to set potential support and resistance levels. For example, if the ADR is 60 pips and the previous day's close is 1.2000, set boundaries at 1.2060 and 1.1940.\n* **Trade Planning**: Plan trades around these boundaries. If price approaches 1.2060 during the New York session, consider a reversal strategy if other indicators support it.\n* **Monitoring Breakouts**: Watch for breakouts beyond these boundaries. A sustained move above 1.2060 could indicate a continuation of bullish momentum, while a drop below 1.1940 may signal bearish pressure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Support and Resistance Levels",
          "definition": "Price levels where buying and selling interest is expected to be strong."
        }
      ],
      "whyThisMatters": "Identifying boundaries using ADR enhances your ability to make informed trading decisions based on price action.",
      "realLifeExample": "If AUDUSD has an ADR of 50 pips and closed at 0.7500, set boundaries at 0.7550 and 0.7450. If price reaches 0.7550 at 11:00 AM EST, evaluate for potential short positions.",
      "commonMistake": "Traders often ignore the context of price action when applying ADR boundaries, leading to premature entries.",
      "quickNote": "Utilize ADR to define clear price boundaries for your intraday trading strategies.",
      "mentorText": "When applying ADR to identify boundaries, think critically about how price interacts with those levels. Are you ready to act?",
      "mentorAnalogy": "Using ADR to identify price boundaries is like a navigator charting a course; it helps you avoid obstacles and stay on track."
    },
    "taskData": null,
    "visualKey": "forex-daily-adr-bands"
  },
  {
    "type": "concept",
    "title": "Rejection of ADR Levels",
    "label": "Forex Track",
    "body": "### ADR Rejection: Identifying Market Reversals\nRecognizing when price rejects ADR levels provides insights into potential market reversals and continuation patterns. This card teaches **how to identify these rejection signals**.\n\n* **Rejection Signals**: Look for candlestick patterns such as pin bars or engulfing patterns at ADR boundaries. For example, if USDCHF hits the upper ADR level and forms a pin bar, it may indicate a bearish reversal.\n* **Volume Confirmation**: Confirm rejection signals with volume analysis. A spike in volume during a rejection at the lower ADR boundary suggests strong buying interest, reinforcing the potential for a reversal.\n* **Trade Execution**: Plan trades based on confirmed rejections. If price rejects the upper boundary with a strong bearish candle and high volume, consider entering a short position with a defined stop loss just above the rejection point.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Candlestick Patterns",
          "definition": "Visual patterns formed by price movement that indicate potential market behavior."
        },
        {
          "term": "Volume Analysis",
          "definition": "The study of trading volume to confirm price movements and trends."
        }
      ],
      "whyThisMatters": "Identifying rejection at ADR levels can significantly improve your ability to predict potential market reversals.",
      "realLifeExample": "If EURGBP approaches the upper ADR level of 0.8500 and forms a bearish engulfing pattern with increased volume at 3:00 PM EST, consider a short entry.",
      "commonMistake": "Traders often misinterpret rejection signals without considering volume, leading to false entries.",
      "quickNote": "Recognize rejection at ADR levels to enhance your trading strategy and identify potential reversals.",
      "mentorText": "When you see price rejecting an ADR level, ask yourself: What does the volume tell me? This is your cue to act or reassess.",
      "mentorAnalogy": "Identifying rejection at ADR levels is like a doctor diagnosing a condition; you need to analyze symptoms carefully before making a treatment decision."
    },
    "taskData": null,
    "visualKey": "forex-daily-adr-bands"
  },
  {
    "type": "concept",
    "title": "Confluence with Other Indicators",
    "label": "Forex Track",
    "body": "### External Range Boundary: Confluence with Other Indicators\nIdentifying confluence between Average Daily Range (ADR) levels and other technical indicators enhances the robustness of trading signals. This card details **how to integrate ADR with other tools for improved decision-making**.\n\n* **Moving Averages**: Align ADR boundaries with the 50-period moving average. When price approaches the ADR high or low and coincides with the moving average, it indicates a stronger potential reversal or breakout point.\n* **Fibonacci Retracement**: Use Fibonacci levels in conjunction with ADR. If the ADR high aligns with a 61.8% Fibonacci retracement level, this creates a significant resistance area, reinforcing the likelihood of a price reaction.\n* **RSI Divergence**: Monitor RSI for divergence at ADR extremes. If the price reaches the ADR high while RSI shows bearish divergence, this signals potential weakness and a higher probability of a reversal.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Confluence",
          "definition": "The occurrence of multiple indicators aligning to strengthen a trading signal."
        }
      ],
      "whyThisMatters": "Confluence increases the reliability of trade setups, allowing for more informed decision-making based on multiple data points.",
      "realLifeExample": "EURUSD approaches the ADR high of 1.1200 while the 50-period moving average is at 1.1195, suggesting a potential reversal zone.",
      "commonMistake": "Failing to consider multiple indicators can lead to overconfidence in a single signal, increasing risk exposure.",
      "quickNote": "Combine ADR with other indicators for stronger trading signals.",
      "mentorText": "When you see price at the ADR boundary, check your moving averages and Fibonacci levels. If they align, you have a stronger case for your trade.",
      "mentorAnalogy": "Think of trading like a pilot checking multiple instruments before takeoff. Each indicator is like a gauge ensuring a safe flight path."
    },
    "taskData": null,
    "visualKey": "forex-daily-adr-bands"
  },
  {
    "type": "concept",
    "title": "Intraday Strategies Using ADR",
    "label": "Forex Track",
    "body": "### External Range Boundary: Intraday Strategies Using ADR\nUtilizing ADR bands effectively can enhance intraday trading strategies. This card outlines **specific approaches to leverage ADR for optimal entry and exit points**.\n\n* **Breakout Strategy**: Enter trades when price breaks above the ADR high during the London session. For instance, if the ADR high for GBPJPY is 150.50 and price breaks above, consider a long position with a target set at the next resistance level.\n* **Reversal Strategy**: Look for reversal opportunities at ADR lows. If AUDUSD hits an ADR low of 0.7000 during the New York session, monitor for bullish candlestick patterns to signal potential entry.\n* **Scaling Out**: Use ADR to determine exit points. If your long position on USDCHF reaches the ADR high of 0.9400, consider scaling out of the position to lock in profits as price approaches this key level.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout Strategy",
          "definition": "A trading approach that involves entering a position when the price moves beyond a defined resistance or support level."
        }
      ],
      "whyThisMatters": "Effective use of ADR can significantly improve the timing and profitability of intraday trades.",
      "realLifeExample": "During the London session, GBPJPY breaks the ADR high of 150.50, prompting a long entry with a target at 151.00.",
      "commonMistake": "Ignoring the ADR levels can lead to missed opportunities or premature exits from trades.",
      "quickNote": "Use ADR bands to define clear entry and exit points in intraday trading.",
      "mentorText": "When trading intraday, always check where price is relative to the ADR bands. They guide your entries and exits.",
      "mentorAnalogy": "Just like a chef uses a timer to know when to check on a dish, use ADR to time your trades effectively."
    },
    "taskData": null,
    "visualKey": "forex-daily-adr-bands"
  },
  {
    "type": "practice",
    "title": "Practical Exercises with ADR",
    "label": "Forex Track",
    "body": "### External Range Boundary: Practical Exercises with ADR\nEngaging in practical exercises reinforces the application of Daily ADR bands in real-world scenarios. This card provides **hands-on tasks to solidify your understanding of ADR**.\n\n* **Exercise 1**: Identify the ADR high and low for EURUSD over the last 14 days. Create a trading plan that includes entry and exit points based on these levels.\n* **Exercise 2**: Analyze a recent trading day for GBPUSD. Document instances where price interacted with the ADR bands and note the outcomes of those trades.\n* **Exercise 3**: Develop a checklist for intraday trading using ADR. Include criteria for entering and exiting trades based on ADR levels and other indicators.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Practical Exercises",
          "definition": "Hands-on activities designed to apply theoretical concepts in real market scenarios."
        }
      ],
      "whyThisMatters": "Practical application of ADR concepts ensures traders can effectively implement strategies in live markets.",
      "realLifeExample": "During your analysis, you find that EURUSD hit the ADR high of 1.1300 and reversed, providing a clear entry point for a short position.",
      "commonMistake": "Relying solely on theoretical knowledge without practical application can hinder a trader's ability to execute effectively.",
      "quickNote": "Practice applying ADR concepts through real market analysis and trading plans.",
      "mentorText": "Get your hands dirty with these exercises. They’ll prepare you for real trading scenarios where ADR plays a crucial role.",
      "mentorAnalogy": "Think of these exercises like a flight simulator for pilots. They prepare you for the real thing without the risk."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You identify that EURUSD has an ADR high of 1.1300. What should be your next step if the price approaches this level?",
      "options": [
        {
          "id": "0",
          "text": "Prepare for a potential reversal and consider a short position.",
          "isCorrect": true,
          "feedback": "Correct. Approaching the ADR high indicates a potential reversal point."
        },
        {
          "id": "1",
          "text": "Immediately enter a long position.",
          "isCorrect": false,
          "feedback": "Incorrect. Entering a long position at the ADR high without confirmation can lead to losses."
        },
        {
          "id": "2",
          "text": "Ignore the ADR level and focus on other indicators.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring ADR levels can result in missed trading opportunities."
        },
        {
          "id": "3",
          "text": "Set a target at the ADR high and wait for price to reach it.",
          "isCorrect": false,
          "feedback": "Incorrect. Setting a target at the ADR high without considering price action can be risky."
        }
      ]
    },
    "visualKey": "forex-daily-adr-bands"
  },
  {
    "type": "summary",
    "title": "Summary of Daily ADR Concepts",
    "label": "Forex Track",
    "body": "### External Range Boundary: Summary of Daily ADR Concepts\nThis card summarizes the critical aspects of Average Daily Range (ADR) and its application in identifying external bounds for intraday setups. Key takeaways include **the importance of ADR in defining market structure and trading strategies**.\n\n* **ADR as a Boundary Tool**: ADR provides clear high and low boundaries that traders can use to gauge potential price movements within a trading day.\n* **Integration with Other Indicators**: Combining ADR with tools like moving averages and Fibonacci levels enhances the reliability of trading signals and decision-making.\n* **Practical Application**: Engaging in practical exercises solidifies understanding and prepares traders for real-world application of ADR concepts in their trading strategies.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Summary",
          "definition": "A concise overview of key concepts and their applications."
        }
      ],
      "whyThisMatters": "A solid grasp of ADR concepts is essential for effective intraday trading and risk management.",
      "realLifeExample": "Traders utilizing ADR effectively can identify key levels for entries and exits, as seen in the recent GBPUSD trading day.",
      "commonMistake": "Overlooking the significance of ADR can lead to poor trade timing and increased risk.",
      "quickNote": "ADR is essential for defining intraday trading boundaries and strategies.",
      "mentorText": "Review these concepts regularly. They are the foundation of your intraday trading strategy and risk management.",
      "mentorAnalogy": "Think of ADR as the blueprint for a building; it outlines the structure within which you can safely operate."
    },
    "taskData": null,
    "visualKey": "forex-daily-adr-bands"
  }
];
