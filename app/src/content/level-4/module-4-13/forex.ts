import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Winding Down FX Positions",
    "label": "Forex Track",
    "body": "### FX Position Management: Winding Down Open Trades\nWinding down FX positions is essential when setups fail to expand within the designated killzone. This card outlines **how to effectively manage risk by closing trades that do not meet performance expectations**.\n\n* **Time Constraints**: If a trade setup does not show movement within the first 30 minutes of the overlap, consider closing the position to mitigate potential losses.\n* **Target Missed Protocol**: Establish a protocol to close trades if the price fails to reach at least 50% of the target within the killzone window.\n* **Risk Assessment**: Continuously assess the risk-reward ratio; if it deteriorates beyond 1:1 due to time decay, initiate position closure.",
    "context": {
      "keyTerms": [
        {
          "term": "Killzone",
          "definition": "A specific time window during which high volatility and liquidity occur in the FX market."
        }
      ],
      "whyThisMatters": "Effective winding down of positions prevents excessive losses and preserves capital for future trades.",
      "realLifeExample": "During the London session on EURUSD, if the price fails to move 20 pips within the first 30 minutes after the overlap begins, close the position to avoid further drawdown.",
      "commonMistake": "Traders often hold onto losing positions, hoping for a reversal beyond the killzone, which can lead to significant losses.",
      "quickNote": "Close positions promptly when targets are missed within the killzone.",
      "mentorText": "If the market doesn't move in your favor within the killzone, it's time to cut your losses. Don't let hope dictate your trading decisions.",
      "mentorAnalogy": "Think of it as a pilot adjusting course mid-flight; if conditions aren't favorable, divert to ensure safety rather than risking a crash."
    },
    "taskData": null,
    "visualKey": "forex-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Timing in FX Sessions",
    "label": "Forex Track",
    "body": "### FX Session Timing: Critical Decision Points\nTiming within FX sessions is pivotal for determining trade validity. This card elaborates on **how session overlaps impact the decision to invalidate trades**.\n\n* **Session Overlaps**: Key overlaps, such as the London and New York sessions, create heightened volatility; trades should be assessed for performance during these periods.\n* **Time Windows**: Define specific time windows (e.g., first hour of overlap) where trades must demonstrate movement; otherwise, consider invalidation.\n* **Market Sentiment**: Monitor economic releases and news events within session timings, as they can significantly alter market dynamics and influence trade validity.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two major trading sessions occur simultaneously, increasing market activity."
        }
      ],
      "whyThisMatters": "Understanding timing helps traders make informed decisions about trade validity and risk management.",
      "realLifeExample": "If trading GBPUSD during the London-New York overlap, and the price fails to break the previous high within the first hour, consider invalidating the trade.",
      "commonMistake": "Failing to recognize the importance of session timings can lead to missed opportunities or holding invalid trades.",
      "quickNote": "Assess trade performance critically during session overlaps to determine validity.",
      "mentorText": "You must be vigilant during session overlaps; if your trade isn't moving as expected, don't hesitate to reassess its validity.",
      "mentorAnalogy": "Just as a surgeon must adapt to changing conditions in the operating room, a trader must adjust strategies based on market timing."
    },
    "taskData": null,
    "visualKey": "forex-time-invalidation"
  },
  {
    "type": "concept",
    "title": "The Importance of Killzones in FX",
    "label": "Forex Track",
    "body": "### Killzones: Defining Trade Validity\nKillzones are critical timeframes that dictate the validity of your setups. This card focuses on **how to utilize killzones to assess trade performance and make timely decisions**.\n\n* **Defining Killzones**: Identify specific killzones for each currency pair based on historical volatility and liquidity patterns, such as the first hour of the London session.\n* **Performance Metrics**: Establish performance metrics within killzones; if the price does not achieve a predetermined movement (e.g., 15 pips) within the killzone, consider invalidation.\n* **Adaptive Strategies**: Adapt trading strategies based on the behavior of price action during killzones; if the market is stagnant, be prepared to exit trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Killzone",
          "definition": "A specific time period characterized by increased trading activity and volatility."
        }
      ],
      "whyThisMatters": "Killzones provide a structured approach to determining when to invalidate trades based on market behavior.",
      "realLifeExample": "If trading AUDJPY during the Tokyo killzone, and the price fails to move 10 pips within the first 30 minutes, consider invalidating the trade.",
      "commonMistake": "Ignoring killzone parameters can lead to holding onto trades that should be exited based on time and price action.",
      "quickNote": "Utilize killzones to assess trade validity and make informed decisions.",
      "mentorText": "You need to respect the killzones; if your trade isn't performing as expected within these critical windows, it's time to rethink your position.",
      "mentorAnalogy": "Like a chef timing the cooking of each dish, a trader must be precise in evaluating trades within killzones to ensure they are served at their best."
    },
    "taskData": null,
    "visualKey": "forex-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Effective Position Management in FX",
    "label": "Forex Track",
    "body": "### Position Management: Strategies for FX Trading\nEffective position management is crucial, especially when time constraints necessitate invalidation. This card discusses **strategies for managing FX positions under time pressure**.\n\n* **Dynamic Exit Strategies**: Implement dynamic exit strategies that trigger based on time elapsed; for example, close positions if no significant movement occurs within 45 minutes of the killzone.\n* **Risk-Reward Reevaluation**: Regularly reevaluate the risk-reward ratio; if it falls below acceptable levels due to time decay, prepare to exit the position.\n* **Automated Alerts**: Utilize automated alerts to monitor trade performance against time constraints, ensuring timely decisions are made without emotional bias.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Management",
          "definition": "The process of managing open trades to optimize performance and minimize risk."
        }
      ],
      "whyThisMatters": "Effective position management ensures that traders can respond quickly to changing market conditions and protect capital.",
      "realLifeExample": "If holding a position in USDCHF and it fails to move 20 pips within the first hour of the New York session, initiate an exit strategy to limit losses.",
      "commonMistake": "Traders often neglect to adjust their position management strategies based on time constraints, leading to unnecessary losses.",
      "quickNote": "Implement dynamic strategies to manage positions effectively under time pressure.",
      "mentorText": "Stay proactive with your position management; if the market isn't moving in your favor within the time frame, don't hesitate to exit.",
      "mentorAnalogy": "Like a project manager adjusting timelines based on resource availability, a trader must adapt position management strategies based on market timing."
    },
    "taskData": null,
    "visualKey": "forex-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Understanding Time Decay in FX",
    "label": "Forex Track",
    "body": "### Time Decay: Implications for FX Trading\nTime decay significantly impacts the validity of trade setups in the FX market. This card explores **how the passage of time can erode the effectiveness of your trading strategy**.\n\n* **Setup Validity Timeline**: Each trade setup has a specific timeframe during which it remains valid. If the target is not reached within this timeframe, the setup should be considered invalid.\n* **Market Reaction to Time**: Monitor price movements closely; if the market fails to respond to your setup within the expected time, it indicates a potential shift in market sentiment.\n* **Time Decay Calculation**: Use a time decay formula to quantify the potential loss of setup validity, factoring in volatility and historical price behavior over the specified period.",
    "context": {
      "keyTerms": [
        {
          "term": "Time Decay",
          "definition": "The reduction in the validity of a trade setup as time progresses without achieving target conditions."
        }
      ],
      "whyThisMatters": "Understanding time decay allows traders to make informed decisions about when to exit or adjust their positions, enhancing risk management.",
      "realLifeExample": "EURUSD fails to reach a target of 1.1000 within the 2-hour killzone after the 8:30 AM EST Non-Farm Payroll release, indicating a need to invalidate the setup.",
      "commonMistake": "Traders often overlook the importance of time decay, holding onto setups longer than warranted, leading to unnecessary losses.",
      "quickNote": "Time decay erodes the validity of trade setups as time progresses without target achievement.",
      "mentorText": "You need to recognize that every trade has a clock ticking. If the market isn't moving in your favor within the expected timeframe, it's time to reassess your position.",
      "mentorAnalogy": "Think of time decay like a perishable item in a grocery store. If it doesn't sell within a certain timeframe, its value diminishes significantly."
    },
    "taskData": null,
    "visualKey": "forex-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Reassessing FX Trades Based on Time",
    "label": "Forex Track",
    "body": "### Time-Based Trade Reassessment\nReassessing trades as time progresses is essential for maintaining alignment with market conditions. This card discusses **how to effectively evaluate your trades over time**.\n\n* **Scheduled Reassessments**: Establish specific intervals to review open positions, ideally aligned with key market events or data releases that could impact price action.\n* **Market Condition Analysis**: Analyze current market conditions against your original setup criteria. If conditions have changed significantly, consider invalidating the trade.\n* **Dynamic Adjustment**: Be prepared to adjust your stop-loss and take-profit levels based on the evolving market landscape and the elapsed time since entry.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Reassessment",
          "definition": "The process of evaluating open trades periodically to determine their validity based on current market conditions."
        }
      ],
      "whyThisMatters": "Regular reassessment ensures that your trading strategy remains relevant and responsive to market dynamics, minimizing losses.",
      "realLifeExample": "After entering a long position on GBPJPY at 150.50, a reassessment at 11:00 AM EST reveals a bearish trend shift, prompting an exit before further losses.",
      "commonMistake": "Failing to reassess trades regularly, leading to missed opportunities for timely exits or adjustments.",
      "quickNote": "Regularly reassess trades to ensure alignment with current market conditions.",
      "mentorText": "Set a timer for your trades. If the market isn't behaving as expected after a certain period, it's time to take a hard look at your position.",
      "mentorAnalogy": "Reassessing a trade is like a pilot checking their instruments during a flight. Regular checks ensure you're on the right course and can adjust as needed."
    },
    "taskData": null,
    "visualKey": "forex-time-invalidation"
  },
  {
    "type": "practice",
    "title": "Practical FX Time Invalidation",
    "label": "Forex Track",
    "body": "### Engaging in FX Time Invalidation Exercises\nThis practice card focuses on applying time-based invalidation techniques in real-world scenarios. **Test your ability to identify when to invalidate setups based on time**.\n\n* **Scenario Analysis**: You will be presented with various trade scenarios. Analyze the time elapsed since entry and determine if the setup remains valid.\n* **Decision Making**: For each scenario, decide whether to maintain, adjust, or invalidate the trade based on the elapsed time and market conditions.\n* **Feedback Loop**: After each decision, receive feedback on your choice, including the rationale behind the correct answer and the implications of your decision.",
    "context": {
      "keyTerms": [
        {
          "term": "Time Invalidation",
          "definition": "The process of determining that a trade setup is no longer valid due to the passage of time without achieving target conditions."
        }
      ],
      "whyThisMatters": "Practicing time invalidation enhances your decision-making skills, allowing for timely adjustments in your trading strategy.",
      "realLifeExample": "You entered a short position on AUDCAD at 0.9400, but after 1 hour and no movement towards your target of 0.9350, you must decide to invalidate the setup.",
      "commonMistake": "Relying solely on price action without considering the time factor, leading to missed opportunities for timely exits.",
      "quickNote": "Practice identifying invalidation points based on time elapsed since trade entry.",
      "mentorText": "In trading, time is just as critical as price. If your setup hasn't materialized within the expected timeframe, don't hesitate to pull the plug.",
      "mentorAnalogy": "Think of this practice like a chef timing their dish. If it’s not cooking right after a set time, it’s time to adjust or start over."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You entered a long position on USDCHF at 0.9200 during the 9:00 AM EST news release. After 30 minutes, the price has not moved towards your target of 0.9250. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Maintain the position, expecting a late reaction.",
          "isCorrect": false,
          "feedback": "Holding onto the position without considering time decay can lead to unnecessary losses."
        },
        {
          "id": "1",
          "text": "Invalidate the trade, as time has passed without movement.",
          "isCorrect": true,
          "feedback": "Invalidating the trade is appropriate since the expected movement has not occurred within the killzone."
        },
        {
          "id": "2",
          "text": "Adjust the target to 0.9225 and wait.",
          "isCorrect": false,
          "feedback": "Adjusting the target without addressing the lack of movement can lead to further losses."
        },
        {
          "id": "3",
          "text": "Increase the position size to average down.",
          "isCorrect": false,
          "feedback": "Increasing position size in a stagnant market can exacerbate losses."
        }
      ]
    },
    "visualKey": "forex-time-invalidation"
  },
  {
    "type": "summary",
    "title": "Summary of FX Time Invalidation",
    "label": "Forex Track",
    "body": "### Key Concepts of Time-Based Invalidation in FX\nThis summary consolidates the essential principles of time-based invalidation in FX trading. **Understanding these concepts is vital for effective trade management**.\n\n* **Time Decay Awareness**: Recognize that the validity of a trade diminishes over time, necessitating timely evaluations.\n* **Regular Reassessments**: Implement a structured approach to periodically review open trades, ensuring alignment with market conditions.\n* **Practical Application**: Engage in practical exercises to enhance your skills in identifying invalidation points based on elapsed time.",
    "context": {
      "keyTerms": [
        {
          "term": "Time-Based Invalidation",
          "definition": "The process of determining the validity of a trade setup based on the elapsed time since entry."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces your understanding and application of time-based strategies in FX trading.",
      "realLifeExample": "An invalidation of a trade setup after 45 minutes of no movement on NZDUSD at 0.6800 highlights the importance of time in decision-making.",
      "commonMistake": "Failing to recognize the importance of time in trade management can lead to significant losses.",
      "quickNote": "Time-based invalidation is crucial for maintaining effective trade management.",
      "mentorText": "Remember, in trading, time is a critical factor. Always keep an eye on the clock and be ready to act if your setup isn't performing as expected.",
      "mentorAnalogy": "Consider time in trading like a timer in a race. If you’re not moving forward within the allotted time, it’s time to rethink your strategy."
    },
    "taskData": null,
    "visualKey": "forex-time-invalidation"
  }
];
