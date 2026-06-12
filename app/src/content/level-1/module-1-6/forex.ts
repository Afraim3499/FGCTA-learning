import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Forex Session Timing Triggers",
    "label": "Forex Track",
    "body": "Forex session timing is critical in structuring effective trade triggers. This mission focuses on **understanding how to align triggers with specific session open times** to enhance precision in trade execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Timing",
          "definition": "The specific times when major Forex markets (e.g., London, New York) open and close."
        }
      ],
      "whyThisMatters": "Aligning triggers with session timings allows traders to capitalize on predictable liquidity and volatility patterns.",
      "realLifeExample": "A trader sets a trigger for EURUSD at the London open (3:00 AM EST) to capture the initial volatility spike.",
      "commonMistake": "Ignoring session timings and setting triggers at arbitrary times, leading to missed opportunities or poor entries.",
      "quickNote": "Session opens are like the starting gun in a race; timing is everything.",
      "mentorText": "Think of session opens as the ignition switch of a car. You need to turn it on at the right moment to start your journey effectively.",
      "mentorAnalogy": "Like a train schedule, session timings dictate when the market 'arrives' with liquidity. Missing the schedule can mean missing the ride."
    },
    "taskData": null,
    "visualKey": "forex-session-trigger"
  },
  {
    "type": "concept",
    "title": "Designing Session Open Triggers",
    "label": "Forex Track",
    "body": "### Designing Session Open Triggers\nSession opens are pivotal moments in Forex trading. This card details **how to design triggers based on the opening of major Forex sessions** to leverage these moments for trade activation.\n\n* **Session Open Alignment**: Structure triggers to activate within the first 15 minutes of the session open to capture initial volatility. This requires precise timing and understanding of session-specific liquidity flows.\n* **Volatility Spike Utilization**: Use historical data to identify typical volatility spikes at session opens. Design triggers that activate only if price moves beyond a predefined range within this period.\n* **Liquidity Confirmation**: Ensure that your trigger conditions include confirmation of increased liquidity, such as a significant uptick in volume or tight spreads.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Spike",
          "definition": "A rapid increase in price movement typically occurring at the start of a trading session."
        }
      ],
      "whyThisMatters": "Designing triggers around session opens allows traders to enter positions with the momentum of the market, increasing the probability of success.",
      "realLifeExample": "A trader sets a trigger for GBPUSD to activate if the price moves 20 pips within the first 10 minutes of the London open.",
      "commonMistake": "Failing to account for session-specific volatility, leading to premature or delayed trigger activation.",
      "quickNote": "Session opens are like a market's heartbeat; align your triggers to its rhythm.",
      "mentorText": "Session opens are your cue. Design your triggers to act as soon as the curtain rises, not after the show has started.",
      "mentorAnalogy": "Like a sprinter reacting to the starting pistol, your triggers should be poised to act at the precise moment the session begins."
    },
    "taskData": null,
    "visualKey": "forex-session-trigger"
  },
  {
    "type": "concept",
    "title": "Triggers for Session Overlaps",
    "label": "Forex Track",
    "body": "### Triggers for Session Overlaps\nSession overlaps, such as the London/New York overlap, present unique trading opportunities. This card explains **how to create triggers that activate during these overlaps** to exploit increased volatility.\n\n* **Overlap Volatility Recognition**: Identify periods of heightened volatility during session overlaps. Design triggers that activate only when volatility exceeds a specific threshold, ensuring entry during optimal conditions.\n* **Liquidity Surge Exploitation**: Use the liquidity surge typical of overlaps to set triggers that require confirmation of both volume increase and price movement beyond a set range.\n* **Time-Specific Conditions**: Structure triggers to activate only within the overlap window, typically 8:00 AM to 12:00 PM EST for London/New York, to maximize the probability of successful trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two major Forex trading sessions are open simultaneously, often resulting in increased market activity."
        }
      ],
      "whyThisMatters": "Session overlaps provide the highest liquidity and volatility, offering prime conditions for executing trades with precision.",
      "realLifeExample": "A trader sets a trigger for USDJPY to activate if the price moves 30 pips during the London/New York overlap.",
      "commonMistake": "Setting triggers outside of overlap periods, missing out on the liquidity and volatility benefits.",
      "quickNote": "Session overlaps are like rush hour; more traffic means more opportunities.",
      "mentorText": "Session overlaps are your prime time. Design your triggers to engage when the market is most active, not when it's winding down.",
      "mentorAnalogy": "Think of session overlaps like a double shift at a factory; more workers mean more production, and your triggers should be ready to capitalize on this increased output."
    },
    "taskData": null,
    "visualKey": "forex-session-trigger"
  },
  {
    "type": "concept",
    "title": "Timing Sensitivity in Forex Triggers",
    "label": "Forex Track",
    "body": "### Timing Sensitivity in Forex Triggers\nTiming is a critical factor in Forex trigger design. This card explores **how to adjust triggers to account for time zone differences and market dynamics** to ensure precise execution.\n\n* **Time Zone Adjustment**: Ensure your trading platform is synchronized with the correct session times. Adjust triggers to account for daylight saving changes and regional holidays that affect session timings.\n* **Dynamic Market Conditions**: Design triggers that adapt to changing market conditions, such as news releases or unexpected geopolitical events, which can shift typical timing patterns.\n* **Precision Timing Execution**: Use automated tools to ensure triggers activate at the exact moment required, minimizing human error and maximizing execution accuracy.",
    "context": {
      "keyTerms": [
        {
          "term": "Timing Sensitivity",
          "definition": "The importance of precise timing in the activation of trading triggers."
        }
      ],
      "whyThisMatters": "Precise timing ensures that triggers are activated under optimal conditions, reducing slippage and increasing trade effectiveness.",
      "realLifeExample": "A trader adjusts their EURUSD trigger to account for daylight saving changes, ensuring it activates at the correct London open time.",
      "commonMistake": "Neglecting to adjust for time zone changes, resulting in triggers activating at incorrect session times.",
      "quickNote": "Timing is the silent partner in every successful trade.",
      "mentorText": "Timing is everything. If your triggers aren't synced with the market's clock, you're shooting in the dark.",
      "mentorAnalogy": "Think of timing sensitivity like a conductor leading an orchestra; every note must be played at the precise moment to create harmony."
    },
    "taskData": null,
    "visualKey": "forex-session-trigger"
  },
  {
    "type": "concept",
    "title": "Validating Session-Based Triggers",
    "label": "Forex Track",
    "body": "### Forex Session Trigger: Validating Session-Based Triggers\nSession-based triggers must be validated to ensure they align with market behavior and historical performance. This card explains **how to backtest and refine session triggers for reliability**.\n\n* **Historical Backtesting**: Use historical data to test session triggers across multiple market conditions. A trigger is considered valid if it shows consistent results over at least 100 instances, minimizing outliers.\n* **Performance Metrics**: Evaluate triggers based on win rate, average return, and maximum drawdown. A trigger must maintain a win rate above 50% and a positive expectancy to be considered effective.\n* **Session-Specific Adjustments**: Adjust triggers based on session characteristics. For example, a trigger that works in the London session may need modification for the New York session due to differing volatility profiles.",
    "context": {
      "keyTerms": [
        {
          "term": "Session-Based Trigger",
          "definition": "A trading trigger based on specific market session characteristics."
        },
        {
          "term": "Backtesting",
          "definition": "The process of testing a trading strategy using historical data."
        }
      ],
      "whyThisMatters": "Validating session-based triggers ensures that traders rely on data-driven decisions rather than assumptions.",
      "realLifeExample": "Testing a London session breakout trigger on EURUSD showed a 60% win rate over 150 trades, confirming its reliability.",
      "commonMistake": "Traders often skip backtesting, leading to reliance on unproven triggers.",
      "quickNote": "A trigger is only as good as its historical performance.",
      "mentorText": "Think of validating your session triggers like a scientist testing a hypothesis. You need data to prove it works.",
      "mentorAnalogy": "Just as an engineer tests a bridge design under various stress conditions, you must test your session triggers under different market scenarios."
    },
    "taskData": null,
    "visualKey": "forex-session-trigger"
  },
  {
    "type": "concept",
    "title": "Adaptive Session Trigger Design",
    "label": "Forex Track",
    "body": "### Forex Session Trigger: Adaptive Session Trigger Design\nDesigning adaptive session triggers is crucial for responding to changing market dynamics. This card explores **strategies for creating dynamic triggers that adjust to market conditions**.\n\n* **Volatility-Based Adjustments**: Implement triggers that adjust entry and exit points based on current volatility levels. Use ATR (Average True Range) to dynamically set stop-loss and take-profit levels.\n* **Time-of-Day Sensitivity**: Modify triggers to account for time-of-day effects, such as increased volatility at session opens. Triggers should adapt to these patterns to maximize effectiveness.\n* **Feedback Loop Integration**: Continuously refine triggers by integrating feedback from recent trades. Adjust parameters based on recent performance to enhance adaptability.",
    "context": {
      "keyTerms": [
        {
          "term": "Adaptive Trigger",
          "definition": "A trading trigger that adjusts based on current market conditions."
        },
        {
          "term": "ATR (Average True Range)",
          "definition": "A technical indicator that measures market volatility."
        }
      ],
      "whyThisMatters": "Adaptive triggers ensure that trading strategies remain effective in varying market environments.",
      "realLifeExample": "A trader adjusts their EURUSD trigger to account for increased volatility during the New York session, improving trade outcomes.",
      "commonMistake": "Failing to adjust triggers leads to poor performance in changing market conditions.",
      "quickNote": "Adaptation is key to maintaining trigger effectiveness.",
      "mentorText": "Your triggers should be like a thermostat, adjusting to the temperature of the market environment.",
      "mentorAnalogy": "Just as a pilot adjusts flight controls based on weather conditions, you must adjust your trading triggers based on market volatility."
    },
    "taskData": null,
    "visualKey": "forex-session-trigger"
  },
  {
    "type": "practice",
    "title": "Practicing Forex Trigger Design",
    "label": "Forex Track",
    "body": "### Forex Session Trigger: Practicing Forex Trigger Design\nApply your understanding of session timing triggers through practical exercises. This card provides **scenarios to test your skills in designing effective Forex triggers**.\n\n* **Scenario-Based Testing**: Engage in simulated trading scenarios to design and test session triggers. Evaluate their effectiveness based on predefined criteria.\n* **Performance Analysis**: Analyze the results of your simulated trades to identify strengths and weaknesses in your trigger design.\n* **Iterative Refinement**: Use insights from practice sessions to refine and improve your triggers for real-world application.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a risk-free environment using historical data."
        },
        {
          "term": "Iterative Refinement",
          "definition": "The process of continuously improving a strategy based on feedback and results."
        }
      ],
      "whyThisMatters": "Practicing trigger design in a controlled environment helps traders refine their strategies before applying them live.",
      "realLifeExample": "A trader uses a demo account to test a London session breakout trigger, refining it based on simulated performance.",
      "commonMistake": "Traders often neglect practice, leading to untested strategies in live markets.",
      "quickNote": "Practice refines theory into effective strategy.",
      "mentorText": "Think of practice as your trading lab. It's where you experiment and refine until your triggers are ready for the real market.",
      "mentorAnalogy": "Just as a chef tests recipes before serving them to guests, you must test your trading triggers before using them live."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are testing a session trigger for the London session on GBPUSD. The trigger is based on a 20-pip breakout from the session open. After 50 simulated trades, the win rate is 55%, but the average loss is larger than the average win. What should you do next?",
      "options": [
        {
          "id": "0",
          "text": "Refine the trigger to improve the risk-reward ratio.",
          "isCorrect": true,
          "feedback": "Correct. Improving the risk-reward ratio can enhance overall profitability."
        },
        {
          "id": "1",
          "text": "Increase the breakout threshold to 30 pips.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing the threshold without analysis might reduce the number of trades and impact win rate."
        },
        {
          "id": "2",
          "text": "Continue using the trigger as is.",
          "isCorrect": false,
          "feedback": "Incorrect. The current trigger has a poor risk-reward ratio, which needs improvement."
        },
        {
          "id": "3",
          "text": "Switch to a different currency pair.",
          "isCorrect": false,
          "feedback": "Incorrect. The issue is with the trigger design, not the currency pair."
        }
      ]
    },
    "visualKey": "forex-session-trigger"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Trigger Design",
    "label": "Forex Track",
    "body": "### Forex Session Trigger: Summary of Forex Trigger Design\nReview the key strategies and concepts for designing effective Forex session triggers. This card consolidates **the essential elements of session timing triggers for practical application**.\n\n* **Validation Techniques**: Emphasize the importance of backtesting and performance metrics to ensure trigger reliability.\n* **Adaptive Strategies**: Highlight the need for triggers to adjust based on market volatility and session characteristics.\n* **Practice and Refinement**: Reinforce the value of practicing trigger design in simulated environments to refine strategies before live trading.",
    "context": {
      "keyTerms": [
        {
          "term": "Trigger Design",
          "definition": "The process of creating specific conditions that initiate a trade."
        },
        {
          "term": "Session Timing",
          "definition": "The strategic use of market session times to inform trading decisions."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of trigger design enhances a trader's ability to execute effective trades consistently.",
      "realLifeExample": "A trader consolidates their knowledge by reviewing past trades, refining their session triggers for better performance.",
      "commonMistake": "Traders often overlook the importance of continuous learning and refinement in trigger design.",
      "quickNote": "Effective trigger design is a blend of validation, adaptation, and practice.",
      "mentorText": "Think of this summary as your checklist before takeoff. Ensure every element of your trigger design is in place before you trade.",
      "mentorAnalogy": "Just as a conductor reviews the score before a performance, you must review your trigger strategies to ensure harmony in your trading."
    },
    "taskData": null,
    "visualKey": "forex-session-trigger"
  }
];
