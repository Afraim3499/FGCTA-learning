import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Using Average Daily Range for Extensions",
    "label": "Forex Track",
    "body": "### Range Model: Utilizing ADR for Price Extensions\nThe Average Daily Range (ADR) quantifies the typical price movement within a trading day. This card teaches **how to leverage ADR to identify potential price movement extensions within the dealing range**.\n\n* **Extension Calculation**: Calculate the ADR by averaging the daily high-low range over the last 14 days. For example, if the ADR of EURUSD is 100 pips, anticipate potential price movements extending beyond the current range by this amount.\n* **Equilibrium Zones**: Identify equilibrium zones by marking the high and low of the current trading range. If the price approaches the upper equilibrium zone, consider potential extensions beyond the ADR.\n* **Market Context**: Use recent news events or economic releases to validate potential extensions. For instance, if EURUSD is at 1.1000 and the ECB announces a rate hike, expect possible extensions beyond the ADR due to increased volatility.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average Daily Range (ADR)",
          "definition": "A statistical measure of the average price movement of a currency pair over a specified period."
        }
      ],
      "whyThisMatters": "Understanding ADR allows traders to set realistic expectations for price movements and enhance their trading strategies.",
      "realLifeExample": "On a day when EURUSD opens at 1.1000 and the ADR is 80 pips, if the price reaches 1.1080, anticipate further movement towards 1.1160 as a potential extension.",
      "commonMistake": "Traders often misinterpret ADR as a fixed target rather than a dynamic range that adjusts with market conditions.",
      "quickNote": "ADR helps identify potential price extensions beyond current ranges.",
      "mentorText": "When I analyze the ADR, I look for how far the price has moved historically. If we're at the upper end of that range, I prepare for possible extensions, especially if market conditions support it.",
      "mentorAnalogy": "Think of ADR like a car's fuel gauge; it indicates how far you can travel based on your current fuel level, guiding your journey without running out of gas."
    },
    "taskData": null,
    "visualKey": "forex-adr-stretch-range"
  },
  {
    "type": "concept",
    "title": "Analyzing Weekly Ranges Relative to Tuesday Profiles",
    "label": "Forex Track",
    "body": "### Range Model: Weekly Ranges and Tuesday Profiles\nAnalyzing weekly ranges in relation to Tuesday's high and low profiles provides critical context for potential price movements. This card teaches **how to assess these relationships to inform trading decisions**.\n\n* **Tuesday Profile Significance**: Tuesday often sets the tone for the week's trading. Identify the high and low of Tuesday to establish key reference points for the weekly range.\n* **Weekly Range Calculation**: Calculate the weekly range by measuring the difference between the weekly high and low. For example, if the weekly high is 1.1200 and the low is 1.1000, the range is 200 pips.\n* **Price Interaction**: Observe how the current price interacts with Tuesday's levels. If the price breaks above Tuesday's high during the week, it may indicate bullish momentum and a potential continuation of the upward trend.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Tuesday Profile",
          "definition": "The high and low price levels established on Tuesday, often used as reference points for the rest of the week."
        }
      ],
      "whyThisMatters": "This analysis provides a framework for anticipating price movements and aligning trades with market sentiment.",
      "realLifeExample": "If the weekly high for GBPUSD is 1.3500 and Tuesday's high was 1.3450, a break above 1.3500 could signal a bullish breakout, targeting 1.3600 as the next resistance level.",
      "commonMistake": "Traders frequently overlook the significance of Tuesday's levels, missing key breakout opportunities.",
      "quickNote": "Tuesday's high and low can dictate the week's price action.",
      "mentorText": "I always mark Tuesday's high and low on my charts. If the price breaks those levels, I know to pay close attention for potential continuation or reversal patterns.",
      "mentorAnalogy": "Consider Tuesday's profile like the foundation of a building; it supports the structure of the week’s trading and determines how high or low the market can go."
    },
    "taskData": null,
    "visualKey": "forex-adr-stretch-range"
  },
  {
    "type": "concept",
    "title": "Practical Application of ADR in Trading",
    "label": "Forex Track",
    "body": "### Range Model: Practical Applications of ADR\nThe Average Daily Range (ADR) serves as a vital tool in setting realistic targets and stop-loss levels. This card teaches **how to effectively apply ADR in trading decisions**.\n\n* **Target Setting**: Use the ADR to establish profit targets. If the ADR for AUDUSD is 60 pips, set your target at 30 pips from your entry point to align with typical price movement.\n* **Stop-Loss Placement**: Position stop-loss orders beyond the ADR to avoid premature exits. For instance, if you enter a long position at 0.7400 with an ADR of 60 pips, place your stop-loss at 0.7340 to accommodate normal fluctuations.\n* **Trade Validation**: Validate trade setups by comparing potential moves against the ADR. If a trade setup suggests a 100-pip move but the ADR is only 40 pips, reconsider the viability of the trade.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Profit Target",
          "definition": "The predetermined price level at which a trader plans to close a position for a profit."
        }
      ],
      "whyThisMatters": "Applying ADR in trading enhances decision-making by providing a quantitative basis for targets and risk management.",
      "realLifeExample": "If you enter a short position on USDJPY at 110.00 and the ADR is 50 pips, setting a profit target at 109.50 aligns with expected price behavior.",
      "commonMistake": "Traders often set targets too far from the entry point without considering the ADR, leading to unrealistic expectations.",
      "quickNote": "ADR informs target and stop-loss placements for effective trade management.",
      "mentorText": "When I set my targets, I always reference the ADR. It keeps my expectations grounded and helps me avoid chasing unrealistic moves.",
      "mentorAnalogy": "Think of ADR like a speed limit on a highway; it guides how fast you can safely go without risking an accident."
    },
    "taskData": null,
    "visualKey": "forex-adr-stretch-range"
  },
  {
    "type": "concept",
    "title": "Setting Limits Based on ADR",
    "label": "Forex Track",
    "body": "### Range Model: Setting Trading Limits with ADR\nSetting trading limits based on Average Daily Range (ADR) calculations enhances risk management strategies. This card teaches **how to effectively establish limits using ADR**.\n\n* **Limit Order Placement**: Place limit orders at key levels defined by the ADR. For example, if the ADR for NZDUSD is 70 pips, consider placing limit orders at 30 pips above or below the current price to capture typical price movements.\n* **Risk Assessment**: Assess risk by comparing your position size against the ADR. If the ADR indicates a potential 70-pip move, ensure your position size aligns with your risk tolerance to avoid overexposure.\n* **Dynamic Adjustments**: Adjust your limits dynamically based on real-time ADR updates. If the ADR increases due to heightened volatility, recalibrate your limits to reflect the new market conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a currency pair at a specified price or better."
        }
      ],
      "whyThisMatters": "Setting limits based on ADR allows traders to manage risk effectively and respond to market volatility.",
      "realLifeExample": "If USDCHF has an ADR of 50 pips and is currently trading at 0.9100, placing a buy limit at 0.9130 captures potential upward movement while managing risk.",
      "commonMistake": "Traders often set limits without considering the ADR, leading to missed opportunities or excessive risk.",
      "quickNote": "Use ADR to set informed trading limits that align with market behavior.",
      "mentorText": "I always set my limits based on the ADR. It helps me stay within realistic ranges and protects my capital from unexpected moves.",
      "mentorAnalogy": "Setting limits based on ADR is like a pilot adjusting altitude; it ensures you navigate safely within the parameters of the flight plan."
    },
    "taskData": null,
    "visualKey": "forex-adr-stretch-range"
  },
  {
    "type": "concept",
    "title": "Common Traps with ADR Misinterpretation",
    "label": "Forex Track",
    "body": "### ADR Analysis: Misinterpretation Pitfalls\nMisinterpreting Average Daily Range (ADR) can lead to significant trading errors. This card addresses **common traps traders encounter when analyzing ADR data**.\n\n* **Ignoring Market Context**: Failing to consider the broader market context can skew the interpretation of ADR. For instance, during high-impact news events, ADR may expand, misleading traders into thinking volatility is typical.\n* **Overreliance on Historical Data**: Relying solely on historical ADR without adjusting for current market conditions can lead to false expectations. For example, if the EURUSD has an ADR of 100 pips but is currently trading in a tight range of 30 pips, the trader may misjudge potential movement.\n* **Neglecting Timeframes**: Misapplying ADR across different timeframes can result in incorrect trading decisions. A daily ADR may not be relevant for intraday trading strategies, where a 15-minute ADR is more applicable.",
    "context": {
      "keyTerms": [
        {
          "term": "Average Daily Range (ADR)",
          "definition": "A statistical measure of the average price movement of a currency pair over a specified period."
        }
      ],
      "whyThisMatters": "Misinterpreting ADR can lead to poor entry and exit points, resulting in unnecessary losses.",
      "realLifeExample": "On a day when the GBPUSD had a historical ADR of 120 pips, a trader entered a long position expecting a full range move, ignoring that the pair was consolidating within a 50-pip range due to geopolitical news.",
      "commonMistake": "Traders often assume that ADR values are static and applicable across all market conditions.",
      "quickNote": "Always contextualize ADR within current market conditions to avoid misinterpretation.",
      "mentorText": "When analyzing ADR, always ask yourself: What is the current market environment? Don't let historical data dictate your expectations without considering what's happening now.",
      "mentorAnalogy": "Think of ADR like a weather forecast; just because it rained last week doesn't mean it will rain today. Adjust your expectations based on current conditions."
    },
    "taskData": null,
    "visualKey": "forex-adr-stretch-range"
  },
  {
    "type": "concept",
    "title": "Synthesis of ADR Strategies",
    "label": "Forex Track",
    "body": "### ADR Strategy Integration: Cohesive Trading Plans\nIntegrating multiple ADR strategies is essential for creating a robust trading plan. This card focuses on **how to synthesize various ADR strategies into a cohesive approach**.\n\n* **Combining Range and Breakout Strategies**: Use ADR to identify potential breakout points while also recognizing range boundaries. For example, if the ADR indicates a 100-pip range, set breakout orders just outside this range to capture potential moves.\n* **Utilizing ADR for Position Sizing**: Adjust position sizes based on the ADR to manage risk effectively. For instance, if the ADR is 150 pips, consider reducing position size to maintain a consistent risk level relative to the expected volatility.\n* **Incorporating Time-Based Adjustments**: Adapt your strategies based on time of day. For example, if the ADR typically contracts during the Asian session, plan trades accordingly to avoid unnecessary exposure during low volatility periods.",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout Strategy",
          "definition": "A trading strategy that aims to enter a position when the price breaks through a defined support or resistance level."
        }
      ],
      "whyThisMatters": "A cohesive trading plan that incorporates multiple strategies increases adaptability and resilience in varying market conditions.",
      "realLifeExample": "A trader observes that the USDJPY has an ADR of 80 pips and uses this information to set a breakout order 10 pips above the resistance level while adjusting their position size to accommodate expected volatility.",
      "commonMistake": "Traders often fail to adjust their strategies based on the changing ADR, leading to inconsistent performance.",
      "quickNote": "Synthesize ADR strategies to enhance your trading plan's robustness and adaptability.",
      "mentorText": "When creating your trading plan, think of it like assembling a puzzle. Each strategy is a piece that must fit together seamlessly to create a clear picture of your trading approach.",
      "mentorAnalogy": "Just as an architect integrates various structural elements to ensure a building stands firm, you must blend different ADR strategies to create a resilient trading plan."
    },
    "taskData": null,
    "visualKey": "forex-adr-stretch-range"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on ADR Applications",
    "label": "Forex Track",
    "body": "### ADR Applications: Practical Engagement\nEngaging in practical exercises reinforces the application of ADR in real trading scenarios. This card provides **hands-on tasks to apply ADR concepts effectively**.\n\n* **Exercise 1: Identify Ranges**: Analyze the EURUSD chart over the last 14 days and calculate the ADR. Identify at least three distinct trading ranges and note their respective pip movements.\n* **Exercise 2: Set Up a Trade Plan**: Based on the identified ranges, create a trade plan that includes entry, stop-loss, and take-profit levels. Ensure your plan reflects the current ADR and market conditions.\n* **Exercise 3: Monitor Live Trades**: Select a currency pair and monitor its ADR over a trading session. Document how the ADR influences your trading decisions, particularly during high-impact news releases.",
    "context": {
      "keyTerms": [
        {
          "term": "Pip Movement",
          "definition": "The smallest price move that a given exchange rate can make based on market convention."
        }
      ],
      "whyThisMatters": "Practical application of ADR concepts solidifies understanding and enhances decision-making skills in live trading.",
      "realLifeExample": "During a live session, a trader identifies that the AUDCAD has an ADR of 90 pips and sets a plan to trade within the established range, adjusting for news events that may impact volatility.",
      "commonMistake": "Traders often skip practical exercises, leading to a lack of confidence in applying ADR concepts in real situations.",
      "quickNote": "Engage in practical exercises to solidify your understanding of ADR applications.",
      "mentorText": "Practice is where theory meets reality. Don't just read about ADR; actively apply it in your trading to build confidence and skill.",
      "mentorAnalogy": "Just as a pilot practices in a simulator before flying a real aircraft, you must engage in practical exercises to prepare for real trading scenarios."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You analyze the USDCHF and find its ADR is 70 pips. You notice it has been trading within a 50-pip range for the last three days. What should your approach be?",
      "options": [
        {
          "id": "0",
          "text": "Set a breakout order outside the range and size your position based on the ADR.",
          "isCorrect": true,
          "feedback": "This approach leverages the ADR to manage risk and capitalize on potential breakouts."
        },
        {
          "id": "1",
          "text": "Enter a position within the range without considering the ADR.",
          "isCorrect": false,
          "feedback": "Ignoring the ADR can lead to poor risk management and unexpected losses."
        },
        {
          "id": "2",
          "text": "Avoid trading altogether since the ADR is low.",
          "isCorrect": false,
          "feedback": "While low ADR indicates reduced volatility, opportunities may still exist within the established range."
        },
        {
          "id": "3",
          "text": "Set a take-profit level equal to the ADR.",
          "isCorrect": false,
          "feedback": "Setting a take-profit level equal to the ADR without context may not align with the current market conditions."
        }
      ]
    },
    "visualKey": "forex-adr-stretch-range"
  },
  {
    "type": "summary",
    "title": "Summary of Average Daily Range Concepts",
    "label": "Forex Track",
    "body": "### ADR Summary: Key Concepts\nUnderstanding Average Daily Range (ADR) is vital for effective Forex trading. This card summarizes **the essential concepts related to ADR and its significance**.\n\n* **Definition and Calculation**: ADR is calculated by averaging the daily price movements of a currency pair over a specified period, providing insight into expected volatility.\n* **Application in Trading**: Traders utilize ADR to set realistic profit targets, manage risk, and identify potential trading ranges. For example, if the ADR is 100 pips, traders may set their take-profit levels accordingly.\n* **Impact of Market Conditions**: Market events, such as economic releases, can significantly affect ADR. Traders must adjust their strategies based on current volatility levels to optimize performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of ADR enables traders to make informed decisions and adapt to changing market conditions.",
      "realLifeExample": "A trader notes that the EURJPY has an ADR of 120 pips and uses this information to set both entry and exit points, adjusting for an upcoming economic report that may affect volatility.",
      "commonMistake": "Traders often overlook the importance of adjusting their strategies based on changing ADR values.",
      "quickNote": "Mastering ADR concepts is essential for effective range trading in Forex.",
      "mentorText": "To succeed, you must fully grasp ADR and its implications. This knowledge will guide your trading decisions and enhance your overall strategy.",
      "mentorAnalogy": "Think of ADR as the fuel gauge in your vehicle; understanding it helps you know how far you can go and when to refuel your trading strategy."
    },
    "taskData": null,
    "visualKey": "forex-adr-stretch-range"
  }
];
