import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Invalidating Gold Trades",
    "label": "Gold Track",
    "body": "### Gold Time Invalidation: COMEX Open Sweep\nThe first 30 minutes post-COMEX open are critical for validating gold trade setups. This card outlines **the process for invalidating trades if the market fails to sweep the COMEX open**.\n\n* **Initial Sweep Requirement**: A valid trade setup must witness a price sweep at or above the COMEX open price within the first 30 minutes. If this does not occur, consider the trade invalid.\n* **Price Action Analysis**: Monitor price action closely during this window. If the price fails to breach the COMEX open and instead retraces, it signals a lack of institutional interest.\n* **Trade Management Protocol**: Upon invalidation, immediately adjust your risk management strategy. Close any open positions related to the invalidated setup to mitigate potential losses.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX Open",
          "definition": "The opening price of gold futures on the COMEX exchange."
        }
      ],
      "whyThisMatters": "Invalidating trades based on time constraints protects capital and ensures adherence to disciplined trading strategies.",
      "realLifeExample": "On a recent trading day, gold opened at $1,800 at 8:20 AM EST. By 8:50 AM, if the price has not swept above $1,805, the trade setup should be invalidated.",
      "commonMistake": "Traders often hold onto setups despite missing the initial sweep, leading to unnecessary losses.",
      "quickNote": "Invalidation occurs if the COMEX open is not swept within the first 30 minutes.",
      "mentorText": "If the market doesn't sweep the COMEX open in the first half-hour, it's a clear signal to invalidate your trade. Don't let emotions cloud your judgment.",
      "mentorAnalogy": "Think of this like a flight departure window; if the plane doesn't take off within the scheduled time, it’s grounded. Similarly, if gold doesn't meet the sweep criteria, your trade should be grounded."
    },
    "taskData": null,
    "visualKey": "gold-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Understanding Gold Session Windows",
    "label": "Gold Track",
    "body": "### Gold Trading: Session Windows\nSpecific trading sessions for gold significantly impact trade validity and execution. This card elaborates on **the critical session windows for gold trading**.\n\n* **Major Session Overlaps**: The most impactful trading occurs during overlaps between the London and New York sessions, typically from 8:00 AM to 12:00 PM EST. This is when liquidity peaks and volatility increases.\n* **Session-Specific Patterns**: Each session has distinct price behaviors. For instance, the Asian session often sees consolidation, while the London session tends to initiate trends.\n* **Time-Based Strategy Adjustments**: Adjust your trading strategies based on the session. For example, if entering trades during the Asian session, be prepared for lower volatility and tighter stop-loss placements.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two major trading sessions coincide, increasing market activity."
        }
      ],
      "whyThisMatters": "Understanding session windows allows traders to optimize entry and exit strategies based on market behavior.",
      "realLifeExample": "During the London session from 8:00 AM to 12:00 PM EST, gold prices moved from $1,800 to $1,820, showcasing the volatility typical of this period.",
      "commonMistake": "Failing to recognize session overlaps can lead to missed opportunities or entering trades during low liquidity periods.",
      "quickNote": "Trade validity is highest during session overlaps, particularly between London and New York.",
      "mentorText": "Recognizing the session windows is crucial. If you're trading gold, focus on the overlaps for the best opportunities.",
      "mentorAnalogy": "Like a chef timing the preparation of multiple dishes, understanding session windows allows you to serve your trades at peak market conditions."
    },
    "taskData": null,
    "visualKey": "gold-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Analyzing Killzones for Gold",
    "label": "Gold Track",
    "body": "### Gold Trading: Killzones\nKillzones are specific time frames where price action is likely to exhibit significant movement. This card discusses **how to analyze killzones for gold trading**.\n\n* **Identifying Killzones**: Key killzones for gold include the first hour of the London session and the last hour of the New York session. These periods often see heightened volatility due to market participation.\n* **Price Reaction Monitoring**: During killzones, observe how price reacts to key levels. A failure to break a significant resistance or support level during these times can indicate potential reversals.\n* **Trade Validation**: Use killzones to validate trade setups. If a setup does not perform as expected within the killzone, consider invalidating it to preserve capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Killzone",
          "definition": "A specific time period where price movements are expected to be significant."
        }
      ],
      "whyThisMatters": "Analyzing killzones enhances the precision of trade entries and exits, aligning them with market behavior.",
      "realLifeExample": "On a trading day, gold exhibited a sharp rise from $1,805 to $1,825 during the first hour of the London session, validating the killzone's significance.",
      "commonMistake": "Ignoring killzones can lead to entering trades in low volatility periods, increasing the risk of loss.",
      "quickNote": "Focus on killzones to enhance trade validation and execution timing.",
      "mentorText": "If your trade setup doesn't perform during the killzone, it's time to rethink your approach. Don't let a missed opportunity cost you.",
      "mentorAnalogy": "Think of killzones like rush hour traffic; if you’re not moving with the flow, you’ll get stuck. Timing your trades during these periods ensures you’re in the fast lane."
    },
    "taskData": null,
    "visualKey": "gold-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Managing Limit Orders in Gold",
    "label": "Gold Track",
    "body": "### Gold Trading: Limit Order Management\nEffective management of limit orders is crucial, especially under time constraints. This card outlines **strategies for managing limit orders in gold trading**.\n\n* **Setting Strategic Limits**: Place limit orders just above key resistance levels or below support levels, ensuring they align with market volatility. Adjust these levels based on recent price action.\n* **Time Constraints Awareness**: Be vigilant about the time your limit orders remain unfilled. If a limit order is not executed within the expected timeframe, consider canceling it to avoid missed opportunities.\n* **Dynamic Adjustments**: Continuously monitor market conditions. If the market shows signs of rapid movement, be prepared to adjust your limit orders accordingly to capture favorable price points.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell an asset at a specified price or better."
        }
      ],
      "whyThisMatters": "Proper limit order management ensures that traders can capitalize on market movements while minimizing risk exposure.",
      "realLifeExample": "If gold is trading at $1,810 and you place a limit buy order at $1,805, but it remains unfilled for 30 minutes during a volatile session, consider canceling it to reassess your strategy.",
      "commonMistake": "Traders often leave limit orders unadjusted, leading to missed opportunities when market conditions change rapidly.",
      "quickNote": "Manage limit orders actively to align with market movements and time constraints.",
      "mentorText": "If your limit order isn't filled in a reasonable time, don't hesitate to cancel and reassess. The market waits for no one.",
      "mentorAnalogy": "Managing limit orders is like a chef adjusting cooking times; if a dish isn’t cooking as expected, you must adapt to ensure the meal is served perfectly."
    },
    "taskData": null,
    "visualKey": "gold-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Implications of Time Decay in Gold",
    "label": "Gold Track",
    "body": "### Time Decay: Implications in Gold Trading\nTime decay significantly impacts the validity of trade setups in gold markets. This card outlines **how time decay influences trade invalidation and decision-making**.\n\n* **Understanding time decay**: As time progresses, the probability of a trade reaching its target diminishes. If a target is not reached within the predefined killzone, the setup must be reconsidered.\n* **Impact on volatility**: Gold often experiences increased volatility as it approaches major economic events. Traders must adjust their expectations and strategies based on the time left until these events.\n* **Invalidation thresholds**: Establish clear time-based thresholds for invalidation. For example, if a long position on gold at $1,800 fails to reach $1,820 within 48 hours, the trade should be invalidated regardless of market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Time Decay",
          "definition": "The reduction in the potential value of a trade as time progresses."
        }
      ],
      "whyThisMatters": "Understanding time decay allows traders to make informed decisions about trade validity and risk management.",
      "realLifeExample": "Gold trading at $1,805 with a target of $1,820 during a 24-hour killzone. If the price does not reach the target by the end of the period, the trade is invalidated.",
      "commonMistake": "Traders often ignore the effects of time decay, holding onto invalidated trades longer than necessary.",
      "quickNote": "Time decay necessitates timely reassessment of trade setups.",
      "mentorText": "If your gold trade isn’t moving towards the target within the killzone, it’s time to reconsider your position. Don’t let time slip away while hoping for a miracle.",
      "mentorAnalogy": "Think of time decay like a perishable item in a grocery store. The longer it sits on the shelf, the less valuable it becomes. Treat your trades the same way."
    },
    "taskData": null,
    "visualKey": "gold-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Reassessing Gold Trades Over Time",
    "label": "Gold Track",
    "body": "### Trade Reassessment: Gold Over Time\nContinuous assessment of gold trades is essential for maintaining strategy effectiveness. This card discusses **the process of reassessing trades as time progresses**.\n\n* **Scheduled evaluations**: Implement a systematic approach to evaluate trades at specific intervals. For example, review positions every 6 hours during active trading sessions.\n* **Market condition adjustments**: Adapt your strategy based on changing market conditions. If gold prices are stagnant, consider adjusting your targets or invalidating trades that no longer align with your analysis.\n* **Utilizing technical indicators**: Leverage technical indicators like moving averages or RSI to reassess trade validity. If the indicators signal a reversal, it may be time to invalidate existing setups.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Reassessment",
          "definition": "The process of evaluating and adjusting trade positions based on market conditions over time."
        }
      ],
      "whyThisMatters": "Reassessing trades ensures that strategies remain relevant and effective in changing market environments.",
      "realLifeExample": "A gold position entered at $1,810 is evaluated after 12 hours. If the price remains below $1,815 with no significant market news, the trade should be reconsidered.",
      "commonMistake": "Failing to reassess trades regularly can lead to missed opportunities or increased losses.",
      "quickNote": "Regular trade reassessment is vital for effective gold trading.",
      "mentorText": "Every few hours, take a step back and look at your gold trades. If the market isn’t moving in your favor, don’t hesitate to adjust your strategy.",
      "mentorAnalogy": "Reassessing trades is like a pilot checking flight instruments. Regular checks ensure the flight stays on course and avoids turbulence."
    },
    "taskData": null,
    "visualKey": "gold-time-invalidation"
  },
  {
    "type": "practice",
    "title": "Practical Gold Time Invalidation",
    "label": "Gold Track",
    "body": "### Practical Application: Time Invalidation in Gold\nEngage in practical exercises to solidify your understanding of time-based invalidation in gold trading. This card focuses on **applying time invalidation principles to real scenarios**.\n\n* **Scenario analysis**: Given a gold position at $1,800 with a target of $1,820, determine the invalidation point if the target is not reached within 36 hours.\n* **Trade simulation**: Simulate a trading session where you track gold price movements and apply time-based invalidation rules. Document your decisions and outcomes.\n* **Review and reflect**: After completing the simulation, review your invalidation decisions. Analyze whether they were timely and aligned with market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Practical Invalidation",
          "definition": "The application of time-based invalidation rules to trading scenarios."
        }
      ],
      "whyThisMatters": "Practical exercises enhance the ability to apply theoretical concepts in real-world trading situations.",
      "realLifeExample": "You enter a gold trade at $1,805 with a target of $1,825. After 24 hours, the price stagnates at $1,810. Determine if the trade should be invalidated based on your killzone parameters.",
      "commonMistake": "Traders often hesitate to invalidate trades, leading to unnecessary losses.",
      "quickNote": "Practice applying time invalidation rules to improve decision-making.",
      "mentorText": "In trading, practice makes perfect. Use simulations to test your invalidation strategies and learn from each scenario.",
      "mentorAnalogy": "Just as a surgeon practices procedures in a simulation before operating on a patient, you must simulate trades to refine your invalidation skills."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You enter a gold trade at $1,810 with a target of $1,830. After 48 hours, the price has not moved above $1,815. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Invalidate the trade due to time decay.",
          "isCorrect": true,
          "feedback": "Correct. The trade should be invalidated as it did not meet the target within the killzone."
        },
        {
          "id": "1",
          "text": "Hold the trade for another 24 hours.",
          "isCorrect": false,
          "feedback": "Incorrect. Holding without reassessment can lead to losses."
        },
        {
          "id": "2",
          "text": "Adjust the target to $1,825 and continue holding.",
          "isCorrect": false,
          "feedback": "Incorrect. Adjusting targets without market justification can be detrimental."
        },
        {
          "id": "3",
          "text": "Add more positions to average down.",
          "isCorrect": false,
          "feedback": "Incorrect. Averaging down without a valid reason can increase risk."
        }
      ]
    },
    "visualKey": "gold-time-invalidation"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Time Invalidation",
    "label": "Gold Track",
    "body": "### Summary: Time-Based Invalidation in Gold\nThis card consolidates the essential concepts of time-based invalidation specific to gold trading. Key takeaways include **the importance of timely reassessment and the implications of time decay**.\n\n* **Time decay effects**: Recognize how time decay impacts trade validity and necessitates timely decision-making to avoid losses.\n* **Reassessment strategies**: Implement systematic evaluations of trades to ensure alignment with market conditions and strategy effectiveness.\n* **Practical application**: Engage in practical exercises to reinforce the understanding of time-based invalidation and improve decision-making skills.",
    "context": {
      "keyTerms": [
        {
          "term": "Time-Based Invalidation",
          "definition": "The process of invalidating trades based on the elapsed time and missed targets."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces understanding and application in real trading scenarios.",
      "realLifeExample": "A trader consistently reassesses gold trades and applies time-based invalidation, leading to improved trading outcomes and reduced losses.",
      "commonMistake": "Failing to recognize the importance of time in trade validity can lead to poor trading decisions.",
      "quickNote": "Timely invalidation is crucial for successful gold trading.",
      "mentorText": "Remember, time is not on your side in trading. Always reassess your positions and be ready to invalidate when necessary.",
      "mentorAnalogy": "Just as a chef must time their cooking to ensure the dish is served perfectly, traders must time their decisions to ensure optimal outcomes."
    },
    "taskData": null,
    "visualKey": "gold-time-invalidation"
  }
];
