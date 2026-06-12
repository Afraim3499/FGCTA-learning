import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Managing Perpetual Trades During Weekend Ranges",
    "label": "Crypto Track",
    "body": "### Time-based Invalidation: Managing Perpetual Trades\nPerpetual trades can become stagnant during weekend ranges, necessitating a structured approach to invalidation. This card details **how to identify and manage trades that stall within these timeframes**.\n\n* **Weekend Range Identification**: Analyze price action from Friday close to Sunday open, marking key support and resistance levels that could indicate potential stall points.\n* **Timely Invalidation Protocol**: If the price fails to breach these levels within the first 12 hours of the weekend, consider invalidating the trade setup to avoid unnecessary exposure.\n* **Funding Rate Considerations**: Monitor funding rates during the weekend; if rates are significantly negative, it may signal a lack of bullish sentiment, warranting immediate invalidation of long positions.",
    "visualKey": "crypto-time-invalidation",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Analyzing Weekend Ranges in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Time-based Invalidation: Analyzing Weekend Ranges\nWeekend trading in crypto often presents unique challenges due to lower liquidity and price manipulation. This card focuses on **how to analyze weekend ranges to assess trade validity**.\n\n* **Liquidity Assessment**: Evaluate the average trading volume during weekends compared to weekdays; a significant drop indicates potential price manipulation and unreliable setups.\n* **Range Boundaries**: Establish the high and low of the weekend range within the first few hours of trading; if price action remains within this range without a breakout, consider invalidating trades that rely on directional movement.\n* **Market Sentiment Indicators**: Utilize on-chain metrics and social sentiment analysis during weekends to gauge trader behavior; if sentiment turns negative while price is stagnant, invalidate bullish setups accordingly.",
    "visualKey": "crypto-time-invalidation",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Strategies for Managing Trades During Funding Gaps",
    "label": "Crypto Track",
    "body": "### Time-based Invalidation: Strategies for Funding Gaps\nFunding gaps can create significant volatility in crypto markets, impacting trade setups. This card outlines **strategies for managing trades effectively during these periods**.\n\n* **Gap Analysis**: Identify the funding gap periods based on exchange schedules; if a trade setup is active during these times, monitor for price deviations exceeding 2% from the last price before the gap.\n* **Dynamic Invalidation**: Set a predefined invalidation point that triggers if the price moves against your position by a specified percentage during the gap, ensuring you exit before significant losses occur.\n* **Post-Gap Recovery Monitoring**: After the funding gap closes, reassess the trade setup; if the price fails to recover within 30 minutes, consider invalidating the trade to preserve capital.",
    "visualKey": "crypto-time-invalidation",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Influence of Time Decay in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Time-based Invalidation: Influence of Time Decay\nTime decay plays a crucial role in the valuation of crypto options and perpetual contracts. This card explains **how to understand and apply time decay principles for trade invalidation**.\n\n* **Decay Rate Calculation**: Assess the time decay rate of your positions, particularly for options; if the decay rate exceeds 1% per day and the trade is not moving favorably, consider invalidation.\n* **Expiration Awareness**: Monitor the expiration dates of options or contracts; if the underlying asset does not show movement towards the target price within 48 hours of expiration, invalidate the trade to avoid losses.\n* **Volatility Correlation**: Recognize that increasing volatility can accelerate time decay; if implied volatility spikes without corresponding price movement, invalidate trades that rely on stable price action.",
    "visualKey": "crypto-time-invalidation",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Reassessing Crypto Trades Based on Timing",
    "label": "Crypto Track",
    "body": "### Timing Adjustments: Reassessing Trade Viability\nAs market conditions evolve, it is critical to reassess the viability of crypto trades based on timing. This card focuses on **how to adjust your strategies when price targets are missed within designated killzones**.\n\n* **Killzone Definition**: A killzone is a specific time frame where price action is expected to align with your trade setup. If the target is not reached within this window, reassessment is necessary.\n* **Time-Based Criteria**: Establish clear criteria for timing invalidation, such as a maximum allowable time for price to reach a target. For example, if Bitcoin fails to reach a target of $30,000 within 2 hours of the killzone, consider the trade invalid.\n* **Market Condition Analysis**: Continuously analyze market conditions during the killzone. If volatility decreases or significant news impacts the market, adjust your strategy accordingly to mitigate risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Killzone",
          "definition": "A designated time frame where price action is expected to align with a trade setup."
        },
        {
          "term": "Timing Invalidation",
          "definition": "The process of reassessing a trade's viability based on the elapsed time without target fulfillment."
        }
      ],
      "whyThisMatters": "Reassessing trades based on timing ensures that strategies remain relevant and aligned with current market dynamics, reducing risk exposure.",
      "realLifeExample": "Ethereum at 2:00 PM EST failed to reach the target of $2,200 within the killzone of 30 minutes, prompting a reassessment of the trade's viability.",
      "commonMistake": "Traders often ignore the elapsed time and hold onto trades beyond the killzone, leading to unnecessary losses.",
      "quickNote": "Always reassess trades if targets are not met within the killzone.",
      "mentorText": "If your target isn't hit in the killzone, it's time to rethink your position. Don't let hope dictate your strategy; let the clock guide your decisions.",
      "mentorAnalogy": "Think of this like a surgeon monitoring a patient's vitals during an operation. If critical signs aren't stable within expected time frames, immediate reassessment is necessary."
    },
    "taskData": null,
    "visualKey": "crypto-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Practical Crypto Time Invalidation",
    "label": "Crypto Track",
    "body": "### Engaging with Time Invalidation: Practical Exercises\nThis card emphasizes the importance of practical application in mastering time-based invalidation. Engage in exercises that focus on **real-time scenarios to enhance your decision-making skills**.\n\n* **Scenario Simulation**: Create simulated trading scenarios where you set specific targets and killzones. For example, set a target for Litecoin at $150 with a killzone of 1 hour. Analyze the outcomes based on price movement.\n* **Review Historical Data**: Examine past trades where timing invalidation occurred. Identify patterns and refine your criteria for reassessing trades, such as missed targets or extended timeframes.\n* **Trade Journaling**: Maintain a trade journal documenting your decisions based on timing invalidation. Include notes on missed targets and the rationale for reassessment to improve future strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "Creating simulated trading scenarios to practice decision-making under specific conditions."
        },
        {
          "term": "Trade Journaling",
          "definition": "Documenting trading decisions and outcomes to refine strategies over time."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce the application of time-based invalidation, enhancing traders' ability to adapt to real market conditions.",
      "realLifeExample": "During a simulated trading session, you set a target for Cardano at $1.50 with a killzone of 45 minutes. The target was missed, prompting a reassessment of the position based on market volatility.",
      "commonMistake": "Traders often skip practical exercises, leading to a lack of preparedness for real-world scenarios.",
      "quickNote": "Engage in practical exercises to solidify your understanding of time invalidation.",
      "mentorText": "Practice makes perfect. Set up scenarios and learn to adapt your strategies based on timing; it’s the only way to build the muscle memory needed for real trades.",
      "mentorAnalogy": "Consider this like a pilot practicing emergency procedures in a simulator. Repeated drills prepare you for real-life situations where timing is critical."
    },
    "taskData": null,
    "visualKey": "crypto-time-invalidation"
  },
  {
    "type": "practice",
    "title": "Summary of Crypto Time Invalidation",
    "label": "Crypto Track",
    "body": "### Key Concepts: Crypto Time Invalidation Summary\nThis card summarizes the essential concepts of time-based invalidation in crypto trading, reinforcing critical points for effective decision-making.\n\n* **Invalidation Triggers**: Identify specific triggers that indicate a trade should be invalidated based on timing. For example, if Bitcoin does not reach $28,000 within 1 hour of the killzone, reassess your position.\n* **Dynamic Market Conditions**: Understand how changing market conditions can affect your timing criteria. For instance, if a major news event occurs, adjust your killzone expectations accordingly.\n* **Continuous Monitoring**: Emphasize the importance of continuous monitoring during the killzone. If price action deviates significantly from expectations, be prepared to invalidate the trade.",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Triggers",
          "definition": "Specific conditions that prompt a reassessment of a trade based on timing."
        },
        {
          "term": "Dynamic Market Conditions",
          "definition": "The influence of changing market factors on trade timing and strategy."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces the trader's ability to make informed decisions based on time-based invalidation.",
      "realLifeExample": "Litecoin at 3:15 PM EST failed to reach the target of $180 within the designated killzone, leading to a reassessment of the trade's viability.",
      "commonMistake": "Failing to recognize invalidation triggers can lead to holding onto losing trades longer than necessary.",
      "quickNote": "Summarize key concepts regularly to reinforce decision-making based on time invalidation.",
      "mentorText": "Review these concepts often. Knowing when to invalidate a trade based on timing is crucial for maintaining a disciplined approach.",
      "mentorAnalogy": "Like a chef timing the cooking of multiple dishes, you must know when to pull a dish from the heat. Timing is everything in both cooking and trading."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a scenario where Ethereum fails to reach a target of $2,500 within the killzone of 1 hour, what should you do?",
      "options": [
        {
          "id": "0",
          "text": "Reassess the trade's viability and consider invalidation.",
          "isCorrect": true,
          "feedback": "Correct. Failing to meet the target within the killzone requires reassessment."
        },
        {
          "id": "1",
          "text": "Hold the position regardless of the missed target.",
          "isCorrect": false,
          "feedback": "Incorrect. Holding the position without reassessment can lead to losses."
        },
        {
          "id": "2",
          "text": "Increase the target price to compensate for the delay.",
          "isCorrect": false,
          "feedback": "Incorrect. Adjusting the target without reassessment is not a disciplined approach."
        },
        {
          "id": "3",
          "text": "Set a new killzone without evaluating the current conditions.",
          "isCorrect": false,
          "feedback": "Incorrect. Setting a new killzone without evaluation does not address the missed target."
        }
      ]
    },
    "visualKey": "crypto-time-invalidation"
  },
  {
    "type": "summary",
    "title": "Crypto Weekend Invalidation Summary",
    "label": "Crypto Track",
    "body": "### Advanced Application: Time-Based Invalidation in Crypto\nThis card covers advanced applications of time-based invalidation concepts specific to crypto trading, focusing on timing filters and session dynamics.\n\n* **Timing Filters**: Implement timing filters to refine entry and exit strategies. For example, if Bitcoin's price action shows no movement within the first 30 minutes of the killzone, consider invalidating the trade.\n* **Session Dynamics**: Analyze how different trading sessions impact timing. For instance, the overlap of the London and New York sessions often leads to increased volatility, affecting your killzone expectations.\n* **Adaptive Strategies**: Develop adaptive strategies that incorporate time-based invalidation. If a trade setup is invalidated, have a predefined plan for re-entering the market under new conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Timing Filters",
          "definition": "Criteria used to refine entry and exit strategies based on time."
        },
        {
          "term": "Session Dynamics",
          "definition": "The impact of different trading sessions on market behavior and timing."
        }
      ],
      "whyThisMatters": "Advanced applications of time-based invalidation enhance the trader's ability to adapt strategies to changing market conditions.",
      "realLifeExample": "During the overlap of the London and New York sessions, Bitcoin's price remained stagnant for 45 minutes, prompting a reassessment of the trade's viability.",
      "commonMistake": "Traders often neglect session dynamics, leading to misaligned expectations for timing and price action.",
      "quickNote": "Incorporate timing filters and session dynamics into your trading strategy for better adaptability.",
      "mentorText": "Stay sharp and adaptive. Use timing filters and understand session dynamics to make informed decisions that align with market behavior.",
      "mentorAnalogy": "Like an architect adjusting plans based on site conditions, you must adapt your trading strategies based on timing and market dynamics."
    },
    "taskData": null,
    "visualKey": "crypto-time-invalidation"
  }
];
