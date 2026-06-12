import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Time-based Invalidation",
    "label": "Core Track",
    "body": "### Time-based Invalidation: Concept Overview\nTime-based invalidation is a critical mechanism for assessing trade viability within specific session windows. This card outlines **the process for recognizing when trade setups fail to meet target prices** during designated killzones.\n\n* **Target Price Assessment**: Evaluate whether the trade setup has reached its target price within the killzone window. If the target is missed by more than 5 pips, consider invalidating the trade.\n* **Session Timeframes**: Define the killzone window based on the session type (e.g., London, New York). For instance, the New York session runs from 8:00 AM to 11:00 AM EST.\n* **Invalidation Trigger**: If the price action does not align with the expected movement within the killzone, immediately reassess the trade's validity and prepare to exit if necessary.",
    "context": {
      "keyTerms": [
        {
          "term": "Time-based Invalidation",
          "definition": "The process of invalidating trade setups if target prices are not met within specified session windows."
        }
      ],
      "whyThisMatters": "Recognizing time-based invalidation allows traders to avoid holding onto failing setups, thus preserving capital and optimizing performance.",
      "realLifeExample": "If a GBPUSD trade was set to target 1.3000 during the London session but fails to reach this level by 10:00 AM EST, the setup should be invalidated.",
      "commonMistake": "Traders often ignore time-based invalidation, holding onto setups that have missed targets, leading to unnecessary losses.",
      "quickNote": "Invalidate trades when target prices are not met within the killzone timeframe.",
      "mentorText": "If your target isn't hit within the killzone, it's time to reassess. Don't let emotions cloud your judgment; stick to the plan.",
      "mentorAnalogy": "Think of this like a flight schedule; if your plane doesn't take off within the designated window, it's better to cancel the flight than to wait indefinitely."
    },
    "taskData": null,
    "visualKey": "time-invalidation-intro"
  },
  {
    "type": "concept",
    "title": "Session Window Expiration Criteria",
    "label": "Core Track",
    "body": "### Session Window Expiration: Criteria for Validity\nUnderstanding session window expiration is essential for maintaining trade discipline. This card details **the specific criteria that determine when a session window has expired and how it affects your setups**.\n\n* **Expiration Timing**: A session window is considered expired if the target price is not achieved by the end of the session. For example, if trading the Asian session, which ends at 4:00 AM EST, the setup must meet its target before this time.\n* **Price Movement Evaluation**: Analyze the price movement leading up to the expiration. If the price has consistently moved against the expected direction for 30 minutes prior to expiration, consider invalidation.\n* **Market Conditions**: Assess overall market conditions, including volatility and news events. If significant news is scheduled within the session window, adjust your expectations accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Window",
          "definition": "A defined period during which specific trading setups are expected to achieve target prices."
        }
      ],
      "whyThisMatters": "Identifying session window expiration helps traders avoid holding onto setups that are unlikely to succeed, thereby improving decision-making.",
      "realLifeExample": "If a USDJPY trade is set to target 110.50 during the New York session but fails to reach this by 11:00 AM EST, the session window is expired.",
      "commonMistake": "Traders often misjudge the expiration of session windows, leading to missed opportunities for timely exits.",
      "quickNote": "A session window expires if the target price is not achieved by the session's end.",
      "mentorText": "Keep a close eye on the clock. If your target isn't hit by the session's end, it's time to move on.",
      "mentorAnalogy": "Like a sports game, if the final whistle blows and the score isn't in your favor, it's time to accept the loss and prepare for the next match."
    },
    "taskData": null,
    "visualKey": "window-expiration-rules"
  },
  {
    "type": "concept",
    "title": "Implementing a Time Decay Strategy",
    "label": "Core Track",
    "body": "### Time Decay Strategy: Planning Your Trades\nImplementing a time decay strategy is vital for adjusting your approach as the killzone window progresses. This card focuses on **how to modify your trading strategy based on time decay effects**.\n\n* **Time Decay Awareness**: Monitor the time remaining in the killzone. As the window approaches its end, reduce your target expectations by 10-15% if the price has not moved favorably.\n* **Dynamic Stop Adjustments**: Adjust your stop-loss levels closer to the market price as time decays. For instance, if trading EURUSD, move your stop to breakeven if the price has not moved in your favor after 45 minutes.\n* **Exit Strategy**: Develop a clear exit strategy that incorporates time decay. If the price has not approached your target within the first half of the killzone, consider exiting the trade to preserve capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Time Decay",
          "definition": "The reduction in the effectiveness of a trade setup as time progresses within the killzone."
        }
      ],
      "whyThisMatters": "Implementing a time decay strategy allows traders to adapt their plans dynamically, reducing risk as time runs out.",
      "realLifeExample": "If a trade on AUDCAD has not reached its target of 0.9400 within the first hour of the killzone, adjust your target to 0.9380 and tighten your stop-loss.",
      "commonMistake": "Traders often fail to adjust their targets and stops as time decays, leading to missed opportunities for capital preservation.",
      "quickNote": "Adapt your strategy as the killzone progresses to account for time decay.",
      "mentorText": "As time runs out, reassess your targets and stops. Don't let a good opportunity turn into a loss due to inaction.",
      "mentorAnalogy": "Just like a chef must adjust cooking times based on how a dish is progressing, you must adapt your trading strategy as the killzone window closes."
    },
    "taskData": null,
    "visualKey": "time-decay-plan"
  },
  {
    "type": "concept",
    "title": "Recognizing Inactive Session Passes",
    "label": "Core Track",
    "body": "### Inactive Session Passes: Identifying Signals for Invalidation\nRecognizing inactive session passes is crucial for determining when to invalidate setups. This card explains **how to identify periods of inactivity that necessitate reassessment of your trades**.\n\n* **Volume Analysis**: Monitor trading volume during the killzone. If volume drops below average levels for a sustained period (e.g., 30 minutes), consider the session inactive and reassess your setups.\n* **Price Action Signals**: Look for price action that indicates indecision, such as prolonged consolidation or tight ranges. If the price remains within a 10-pip range without movement, it signals potential inactivity.\n* **News Event Impact**: Be aware of upcoming news events that may cause market inactivity. If a major economic release is scheduled within the next hour, prepare to invalidate setups if no movement occurs beforehand.",
    "context": {
      "keyTerms": [
        {
          "term": "Inactive Session Pass",
          "definition": "A period during a trading session characterized by low volume and minimal price movement, indicating a need for invalidation."
        }
      ],
      "whyThisMatters": "Identifying inactive sessions allows traders to remain agile, preventing losses from setups that are unlikely to succeed.",
      "realLifeExample": "If trading GBPJPY and the price has not moved significantly for 45 minutes before a scheduled news event, consider the session inactive and invalidate the trade.",
      "commonMistake": "Traders often overlook signs of inactivity, leading to holding onto setups that have little chance of success.",
      "quickNote": "Invalidate setups during periods of inactivity to maintain trading discipline.",
      "mentorText": "Stay alert for signs of inactivity. If the market isn't moving, don't force a trade; it's better to wait for clarity.",
      "mentorAnalogy": "Like a pilot waiting for clearance at a busy airport, if the airspace is inactive, it’s wise to hold off on takeoff until conditions improve."
    },
    "taskData": null,
    "visualKey": "inactive-session-pass"
  },
  {
    "type": "concept",
    "title": "Debriefing Invalidated Trades",
    "label": "Core Track",
    "body": "### Time-based Invalidation: Debriefing Invalidated Trades\nInvalidated trades due to missed targets within killzone windows require thorough analysis for future refinement. This card outlines **how to effectively debrief trades that did not meet their intended objectives**.\n\n* **Documenting Outcomes**: Record the specific time and conditions under which the trade was invalidated, noting the missed target and any relevant market data.\n* **Identifying Patterns**: Analyze whether similar setups have historically failed under comparable time constraints, focusing on recurring themes in price action.\n* **Adjusting Future Strategies**: Use insights from the debrief to modify entry and exit criteria, ensuring that future trades are better aligned with time-based expectations.",
    "context": {
      "keyTerms": [
        {
          "term": "Debriefing",
          "definition": "The process of analyzing and documenting the outcomes of trades to improve future strategies."
        }
      ],
      "whyThisMatters": "Thorough debriefing of invalidated trades enhances strategic precision and reduces the likelihood of repeating the same mistakes.",
      "realLifeExample": "A trade on GBPUSD was invalidated when the price failed to reach the target of 1.4000 by 10:00 AM EST, despite initial bullish momentum. Documenting this failure revealed that similar setups often faltered during high-impact news releases.",
      "commonMistake": "Traders often neglect to analyze invalidated trades, missing out on critical insights that could improve future decision-making.",
      "quickNote": "Debrief invalidated trades to refine strategies and prevent future errors.",
      "mentorText": "When a trade fails, it's not just a loss; it's an opportunity to learn. Review what went wrong, document the specifics, and adjust your strategy accordingly.",
      "mentorAnalogy": "Think of debriefing like a post-flight analysis in aviation. Pilots review every flight to identify issues and improve safety protocols, just as you should analyze your trades."
    },
    "taskData": null,
    "visualKey": "time-invalidation-debrief"
  },
  {
    "type": "concept",
    "title": "Analyzing Killzone Setup Failures",
    "label": "Core Track",
    "body": "### Time-based Invalidation: Analyzing Killzone Setup Failures\nUnderstanding why setups fail within killzone windows is essential for refining trading strategies. This card details **methods to analyze and learn from failed setups**.\n\n* **Failure Criteria**: Establish clear criteria for what constitutes a failed setup, including specific timeframes and price action behaviors that indicate invalidation.\n* **Market Conditions Review**: Examine the broader market context during the killzone, such as news events or volatility spikes, that may have influenced the outcome.\n* **Feedback Loop Creation**: Implement a feedback loop where insights from failed setups are systematically integrated into future planning, enhancing decision-making processes.",
    "context": {
      "keyTerms": [
        {
          "term": "Killzone",
          "definition": "A specific time window where high probability trading setups are expected to occur."
        }
      ],
      "whyThisMatters": "Analyzing failures within killzones allows traders to adapt and improve their strategies, increasing the probability of future success.",
      "realLifeExample": "A setup on AUDJPY was invalidated at 2:30 AM EST when it failed to break above 85.50. Analyzing the preceding economic data release revealed that market sentiment shifted unexpectedly, impacting the setup's validity.",
      "commonMistake": "Traders often overlook the importance of contextual factors, focusing solely on technical indicators without considering external influences.",
      "quickNote": "Analyze failed setups to adapt strategies and improve future trade validity.",
      "mentorText": "When a setup fails, dissect it. Look at the market conditions and what went wrong. This analysis is your roadmap for avoiding similar pitfalls.",
      "mentorAnalogy": "Consider this like a sports coach reviewing game footage. By analyzing what went wrong in a match, the coach can develop better strategies for future games."
    },
    "taskData": null,
    "visualKey": "time-invalidation-intro"
  },
  {
    "type": "concept",
    "title": "Making Time-based Adjustments",
    "label": "Core Track",
    "body": "### Time-based Invalidation: Making Time-based Adjustments\nReal-time adjustments to trading strategies are critical as time progresses within killzone windows. This card focuses on **how to adapt your approach based on time-sensitive developments**.\n\n* **Dynamic Risk Management**: Adjust stop-loss and take-profit levels based on how much time remains in the killzone, ensuring that risk is managed effectively as conditions change.\n* **Time Decay Awareness**: Recognize the impact of time decay on trade viability; as the killzone approaches its end, be prepared to exit or adjust positions that are not performing as expected.\n* **Market Sentiment Monitoring**: Continuously assess market sentiment and price action as the killzone progresses, allowing for informed decisions on whether to hold or exit trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Time Decay",
          "definition": "The reduction in the potential profitability of a trade as the killzone window closes."
        }
      ],
      "whyThisMatters": "Making timely adjustments can prevent losses and capitalize on fleeting opportunities, enhancing overall trading performance.",
      "realLifeExample": "During the New York session on USDCHF, a trade was adjusted at 10:45 AM EST when the price failed to reach the target of 0.9300. Recognizing the time decay, the trader tightened the stop-loss to minimize risk.",
      "commonMistake": "Traders often fail to adjust their strategies as time progresses, leading to missed opportunities or increased losses.",
      "quickNote": "Make real-time adjustments to your strategy based on the progression of time within killzones.",
      "mentorText": "As time ticks down, be vigilant. Adjust your strategy based on how the market is behaving. Don’t let a good opportunity slip away because you didn’t adapt.",
      "mentorAnalogy": "Think of this like a race car driver adjusting their speed based on the remaining laps. As the race progresses, they must adapt their strategy to maximize performance."
    },
    "taskData": null,
    "visualKey": "window-expiration-rules"
  },
  {
    "type": "concept",
    "title": "Reassessing Trades Based on Timing",
    "label": "Core Track",
    "body": "### Time-based Invalidation: Reassessing Trades Based on Timing\nAs time elapses, reassessing trades is essential to ensure alignment with market movements. This card emphasizes **the importance of timing in trade evaluation**.\n\n* **Scheduled Re-evaluations**: Set specific time intervals within the killzone to reassess trades, ensuring that decisions are made based on current market conditions rather than initial biases.\n* **Price Action Correlation**: Monitor price action closely as time progresses, looking for signs of strength or weakness that may necessitate a trade exit or adjustment.\n* **Alignment with Market Events**: Be aware of upcoming economic releases or market events that could impact trade viability as the killzone window closes.",
    "context": {
      "keyTerms": [
        {
          "term": "Reassessment",
          "definition": "The process of evaluating a trade's viability as time progresses and market conditions change."
        }
      ],
      "whyThisMatters": "Reassessing trades ensures that strategies remain relevant and aligned with market dynamics, reducing the risk of holding onto unproductive positions.",
      "realLifeExample": "On a trade for EURUSD initiated at 9:00 AM EST, the trader reassessed the position at 9:30 AM EST, noting a lack of momentum towards the target of 1.2000. This led to an early exit before further losses occurred.",
      "commonMistake": "Traders often fail to reassess trades as time passes, leading to missed opportunities for exits or adjustments.",
      "quickNote": "Reassess trades as time elapses to ensure alignment with current market conditions.",
      "mentorText": "Don’t let time pass without checking in on your trades. Regular reassessment is crucial to ensure you’re still on the right path.",
      "mentorAnalogy": "Consider this like a chef checking a dish as it cooks. Timing is everything; you need to taste and adjust as necessary to ensure the final product is perfect."
    },
    "taskData": null,
    "visualKey": "time-decay-plan"
  },
  {
    "type": "concept",
    "title": "Psychological Aspects of Time Invalidation",
    "label": "Core Track",
    "body": "### Time Invalidation: Psychological Factors\nDecision-making in trading is often influenced by psychological biases, especially when invalidating trades due to time constraints. Understanding these factors can enhance discipline and adherence to your trading plan.\n\n* **Fear of Missing Out (FOMO)**: Traders may hesitate to invalidate a trade out of fear that the market will reverse in their favor after the killzone window has closed. This can lead to holding onto losing positions longer than necessary.\n* **Confirmation Bias**: Traders may look for reasons to justify keeping a trade open, even when the setup has missed its target within the specified time frame. This can cloud judgment and lead to poor decision-making.\n* **Emotional Attachment**: Personal investment in a trade can create emotional barriers to invalidation. Recognizing this attachment is crucial for maintaining objectivity and adhering to your strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "FOMO",
          "definition": "Fear of Missing Out; the anxiety that one might miss a profitable opportunity."
        },
        {
          "term": "Confirmation Bias",
          "definition": "The tendency to search for, interpret, and remember information that confirms one's preconceptions."
        },
        {
          "term": "Emotional Attachment",
          "definition": "The emotional investment in a trade that can cloud judgment."
        }
      ],
      "whyThisMatters": "Understanding psychological factors helps traders maintain discipline and avoid emotional decision-making that can lead to losses.",
      "realLifeExample": "During the EURUSD session on a Friday, a trader held onto a long position despite missing the target by 15 pips at 10:00 AM EST, fearing that the price would rebound.",
      "commonMistake": "Traders often allow emotional biases to override their strategy, leading to invalidation delays.",
      "quickNote": "Recognize psychological biases to improve decision-making during time invalidation.",
      "mentorText": "You must detach emotionally from your trades. If the setup misses its target within the killzone, you need to invalidate it without hesitation. Remember, the market doesn't care about your feelings.",
      "mentorAnalogy": "Think of a surgeon who must remove a tumor. Emotional attachment to the patient can cloud judgment, but the procedure must be executed based on objective criteria, not feelings."
    },
    "taskData": null,
    "visualKey": "inactive-session-pass"
  },
  {
    "type": "concept",
    "title": "Scenario Analysis for Time Invalidation",
    "label": "Core Track",
    "body": "### Time Invalidation: Scenario Analysis\nEngaging with various scenarios allows traders to apply time-based invalidation principles effectively. This practice enhances understanding and prepares traders for real-market conditions.\n\n* **Scenario 1: Missed Target in Killzone**: If a trade setup for GBPJPY at 3:00 AM EST fails to reach its target by 3:15 AM EST, invalidate the trade immediately to avoid further losses.\n* **Scenario 2: Late Entry**: A trader enters a long position on AUDUSD at 8:45 AM EST, but the price fails to move in their favor by 9:00 AM EST. This setup should be invalidated to prevent emotional attachment.\n* **Scenario 3: Time Extension**: If a trade setup is still valid but has missed the target by a few pips, assess whether to extend the killzone window based on market conditions, but do so with caution.",
    "context": {
      "keyTerms": [
        {
          "term": "Killzone",
          "definition": "A specific time window where trade setups are expected to perform."
        },
        {
          "term": "Invalidation",
          "definition": "The process of nullifying a trade setup when conditions are not met."
        },
        {
          "term": "Time Extension",
          "definition": "The act of extending the killzone window based on market analysis."
        }
      ],
      "whyThisMatters": "Scenario analysis prepares traders to make objective decisions under pressure, reinforcing the importance of time-based invalidation.",
      "realLifeExample": "During a volatile session, a trader entered a position on USDCHF at 10:00 AM EST, but by 10:15 AM EST, the price had not moved favorably, prompting an immediate invalidation.",
      "commonMistake": "Traders often hesitate to invalidate trades, hoping for a reversal that may not occur.",
      "quickNote": "Practice scenario analysis to strengthen your time invalidation skills.",
      "mentorText": "When you see a missed target in the killzone, don’t second-guess yourself. Invalidation is a critical part of your strategy. Analyze the scenario and act decisively.",
      "mentorAnalogy": "Consider a pilot who must decide whether to land or divert based on weather conditions. Delaying that decision can lead to dangerous outcomes; the same applies to your trades."
    },
    "taskData": null,
    "visualKey": "time-invalidation-debrief"
  },
  {
    "type": "concept",
    "title": "Tools for Time Invalidation",
    "label": "Core Track",
    "body": "### Time Invalidation: Essential Tools\nUtilizing specific tools can streamline the process of monitoring time-based invalidation, ensuring adherence to your trading strategy.\n\n* **Trading Journals**: Maintain a detailed trading journal that logs entry times, target prices, and killzone windows. This helps identify patterns in missed targets and improves future decision-making.\n* **Automated Alerts**: Set up alerts for specific time frames or price levels. For instance, if a trade on NZDUSD has not reached the target by 9:30 AM EST, an alert can prompt immediate invalidation.\n* **Time-Based Indicators**: Use indicators that highlight killzones on your charts. This visual representation aids in quickly assessing whether a trade is still valid within the designated time frame.",
    "context": {
      "keyTerms": [
        {
          "term": "Trading Journal",
          "definition": "A record of all trades made, including details on entry, exit, and performance."
        },
        {
          "term": "Automated Alerts",
          "definition": "Notifications set to trigger based on specific market conditions."
        },
        {
          "term": "Time-Based Indicators",
          "definition": "Chart tools that visually represent time-sensitive trading windows."
        }
      ],
      "whyThisMatters": "Effective tools enhance your ability to monitor and execute time-based invalidation, leading to more disciplined trading.",
      "realLifeExample": "A trader uses a trading journal to track a series of trades on EURCAD, noting that all trades invalidated after 30 minutes consistently resulted in reduced losses.",
      "commonMistake": "Failing to utilize tools leads to missed opportunities for timely invalidation.",
      "quickNote": "Leverage tools to enhance your time invalidation process.",
      "mentorText": "Implementing tools is not optional; it’s essential. Use your trading journal and alerts to keep your strategy on track. Time waits for no trader.",
      "mentorAnalogy": "Just as a chef relies on timers and measurements to ensure dishes are prepared correctly, you must use tools to ensure your trades are executed within the right time frames."
    },
    "taskData": null,
    "visualKey": "time-invalidation-intro"
  },
  {
    "type": "concept",
    "title": "Metrics for Evaluating Time Invalidation",
    "label": "Core Track",
    "body": "### Time Invalidation: Evaluating Metrics\nEstablishing metrics to evaluate the effectiveness of time-based invalidation strategies is crucial for continuous improvement in trading performance.\n\n* **Invalidation Rate**: Calculate the percentage of trades that were invalidated within the killzone compared to total trades. For example, if 15 out of 50 trades were invalidated, your invalidation rate is 30%.\n* **Average Time to Invalidate**: Track the average time it takes to invalidate trades after the killzone has passed. This metric helps identify whether decisions are being made promptly.\n* **Performance Post-Invalidation**: Analyze the performance of trades that were invalidated versus those that were not. For instance, if invalidated trades show a lower loss average than retained trades, this indicates effective invalidation strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Rate",
          "definition": "The percentage of trades invalidated compared to total trades executed."
        },
        {
          "term": "Average Time to Invalidate",
          "definition": "The mean duration taken to invalidate trades post-killzone."
        },
        {
          "term": "Performance Post-Invalidation",
          "definition": "The analysis of outcomes for trades that were invalidated versus those that were not."
        }
      ],
      "whyThisMatters": "Establishing metrics allows for objective assessment of your time invalidation strategies, leading to data-driven improvements.",
      "realLifeExample": "A trader reviews their performance and finds that trades invalidated within 10 minutes of missing the target had a 20% lower loss average compared to those held longer.",
      "commonMistake": "Ignoring metrics can lead to a lack of accountability and hinder improvement in trading strategies.",
      "quickNote": "Use metrics to assess and refine your time invalidation strategies.",
      "mentorText": "You must measure your performance rigorously. If your invalidation rate is high, it’s time to reassess your strategy. Metrics provide the clarity you need to improve.",
      "mentorAnalogy": "Think of a coach analyzing player performance statistics. Just as they use data to make informed decisions about team strategy, you must use metrics to refine your trading approach."
    },
    "taskData": null,
    "visualKey": "window-expiration-rules"
  },
  {
    "type": "concept",
    "title": "Practical Application of Time Invalidation",
    "label": "Core Track",
    "body": "### Time Invalidation: Practical Application\nEngaging in practical exercises reinforces the concepts of time-based invalidation in trading. This card focuses on how to apply time invalidation principles effectively in real market scenarios.\n\n* **Killzone Identification**: Define your killzone windows based on historical volatility patterns. For example, if trading the GBPUSD, identify high-impact news releases that typically create volatility between 8:00 AM and 10:00 AM EST.\n* **Target Miss Protocol**: Establish clear rules for invalidating trades if price fails to reach your target within the specified time frame. For instance, if your target is missed by 15 pips after 30 minutes into the killzone, consider the setup invalid.\n* **Reassessment Criteria**: After invalidation, reassess market conditions and determine if a new trade blueprint is viable. Use tools like the ATR to gauge current volatility and adjust your strategy accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Killzone",
          "definition": "A specific time window where high volatility is expected based on historical data."
        },
        {
          "term": "Invalidation",
          "definition": "The process of deeming a trade setup no longer valid based on specific criteria."
        }
      ],
      "whyThisMatters": "Understanding practical applications of time invalidation allows traders to adapt quickly to changing market conditions and avoid unnecessary losses.",
      "realLifeExample": "During the EURUSD session on a Friday at 10:00 AM EST, if the price fails to reach the target of 1.1800 after 30 minutes, the trade should be invalidated to avoid further risk.",
      "commonMistake": "Traders often ignore timeframes and hold onto invalidated setups, leading to increased losses.",
      "quickNote": "Time invalidation is crucial for maintaining discipline in trade execution.",
      "mentorText": "When you miss your target within the killzone, it's time to reassess. Don't let emotions cloud your judgment; stick to your rules and invalidate the trade.",
      "mentorAnalogy": "Think of time invalidation like a surgeon's checklist before an operation. If a critical step is missed within the designated time, the procedure must be reassessed to ensure patient safety."
    },
    "taskData": null,
    "visualKey": "time-decay-plan"
  },
  {
    "type": "practice",
    "title": "Summary of Time-based Invalidation",
    "label": "Core Track",
    "body": "### Time-based Invalidation: Key Concepts Summary\nThis card summarizes the critical points of time-based invalidation, reinforcing the essential elements learned throughout the module.\n\n* **Setup Timing**: Always define your killzone windows based on historical data and market behavior. For example, if trading gold, recognize that significant moves often occur during the London session open at 3:00 AM EST.\n* **Invalidation Triggers**: Clearly outline what constitutes a missed target within your killzone. If your target is not reached within 20 minutes of the killzone, consider the trade invalid.\n* **Market Reassessment**: After invalidation, utilize market analysis tools to determine if conditions have changed. For instance, if the DXY shows strength after your target was missed, reassess your positions accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Reassessment",
          "definition": "The process of analyzing market conditions after a trade setup has been invalidated."
        },
        {
          "term": "Market Behavior",
          "definition": "The patterns and movements of price action in response to various factors."
        }
      ],
      "whyThisMatters": "Reinforcing these concepts ensures that traders can maintain discipline and adapt to market changes effectively.",
      "realLifeExample": "If the USDJPY fails to reach 110.50 within 20 minutes of the 8:30 AM EST news release, the trade should be invalidated to prevent further losses.",
      "commonMistake": "A common error is failing to set clear invalidation criteria, leading to emotional decision-making.",
      "quickNote": "Consistent application of time-based invalidation enhances trading discipline.",
      "mentorText": "Remember, if your target isn't hit in the killzone, it's time to invalidate the trade. Stick to your plan and avoid emotional decisions.",
      "mentorAnalogy": "Consider time-based invalidation like a pilot's pre-flight checklist. If a crucial step is missed before takeoff, the flight must be delayed until conditions are safe."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are trading the AUDCAD during its killzone. The price fails to reach your target within 15 minutes. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Invalidate the trade and reassess the market.",
          "isCorrect": true,
          "feedback": "Correct. Invalidation is crucial if the target is not reached within the specified time."
        },
        {
          "id": "1",
          "text": "Hold the trade and wait longer.",
          "isCorrect": false,
          "feedback": "Incorrect. Holding onto an invalidated trade can lead to unnecessary losses."
        },
        {
          "id": "2",
          "text": "Adjust the target to a lower price.",
          "isCorrect": false,
          "feedback": "Incorrect. Adjusting targets after invalidation undermines your trading discipline."
        },
        {
          "id": "3",
          "text": "Increase your position size to recover losses.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing position size after invalidation is a risky strategy and can lead to greater losses."
        }
      ]
    },
    "visualKey": "inactive-session-pass"
  },
  {
    "type": "summary",
    "title": "Time Decay and Invalidation Synthesis",
    "label": "Core Track",
    "body": "### Advanced Time-based Invalidation Concepts\nThis card covers advanced applications of time-based invalidation concepts specific to Core trading, focusing on timing filters and session dynamics.\n\n* **Session Dynamics**: Understand how different trading sessions impact price movements. For instance, the overlap of the London and New York sessions often results in increased volatility, making killzones more critical.\n* **Timing Filters**: Implement timing filters to refine your entry and exit points. If trading the S&P 500, consider using a 10-minute timeframe to validate setups during the first hour of the U.S. market open.\n* **Dynamic Adjustments**: Be prepared to adjust your invalidation criteria based on real-time market conditions. For example, if unexpected news impacts the market, reassess your killzone parameters accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Timing Filters",
          "definition": "Criteria used to refine entry and exit points based on time."
        },
        {
          "term": "Session Dynamics",
          "definition": "The behavior of price movements during different trading sessions."
        }
      ],
      "whyThisMatters": "Advanced understanding of timing filters and session dynamics enhances a trader's ability to navigate complex market conditions effectively.",
      "realLifeExample": "If the S&P 500 shows increased volatility during the first hour of trading, adjust your invalidation criteria to reflect this heightened activity.",
      "commonMistake": "Traders often apply static invalidation criteria without considering session dynamics, leading to missed opportunities.",
      "quickNote": "Advanced time-based invalidation requires flexibility and awareness of market conditions.",
      "mentorText": "Adapt your invalidation criteria based on the session dynamics. If the market is volatile, be ready to adjust your approach.",
      "mentorAnalogy": "Think of advanced time-based invalidation like a race car driver adjusting their strategy based on track conditions. If the weather changes, so must your approach to maintain control."
    },
    "taskData": null,
    "visualKey": "time-invalidation-debrief"
  }
];
