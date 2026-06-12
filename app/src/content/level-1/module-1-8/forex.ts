import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Forex Session Handoff and Cancellation",
    "label": "Forex Track",
    "body": "Forex session transitions present unique challenges for trade plan management. This mission brief outlines **the importance of cancellation rules during low-volume periods**.\n\n* **Session Transition Dynamics**: Forex markets operate 24 hours, but liquidity and volatility fluctuate with session changes. Understanding these dynamics is crucial for timing plan activation and cancellation.\n* **Low-Volume Risk**: During session handoffs, liquidity can drop significantly, leading to erratic price movements. Plans must include rules to cancel trades when liquidity is insufficient to support stable execution.\n* **Cancellation Protocols**: Establish clear criteria for when a trade plan should be canceled during session transitions to avoid entering trades in unpredictable market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Transition",
          "definition": "The period when one major forex trading session ends and another begins."
        },
        {
          "term": "Low-Volume Period",
          "definition": "Times when trading activity and liquidity are reduced, often leading to increased volatility."
        }
      ],
      "whyThisMatters": "Session transitions can lead to unpredictable market behavior, making it essential to have cancellation rules to protect capital.",
      "realLifeExample": "During the transition from the London to New York session, EURUSD may experience a 15-pip spread widening, making it risky to execute trades without cancellation rules.",
      "commonMistake": "Traders often ignore session handoff dynamics, leading to unexpected slippage and poor trade execution.",
      "quickNote": "Session transitions can create liquidity vacuums; have a plan to cancel trades during these times.",
      "mentorText": "Think of session transitions like a baton handoff in a relay race. If the handoff is not smooth, the race is compromised. Your trade plan needs similar precision.",
      "mentorAnalogy": "Just as a pilot must adjust flight plans when transitioning between air traffic control zones, traders must adjust or cancel plans during session transitions to maintain control."
    },
    "taskData": null,
    "visualKey": "forex-session-handoff-cancellation"
  },
  {
    "type": "concept",
    "title": "Rules for Cancelling Plans During Session Transitions",
    "label": "Forex Track",
    "body": "### Rules for Cancelling Plans During Session Transitions\nForex session handoffs can introduce significant risk. This card details **criteria for cancelling trade plans during these transitions**.\n\n* **Liquidity Assessment**: Cancel plans if the bid-ask spread widens beyond 10% of the average daily range. This indicates insufficient liquidity for reliable trade execution.\n* **Volatility Spike**: If volatility indicators show a sudden spike without fundamental news, cancel the trade plan. Unexplained volatility often leads to unpredictable price action.\n* **Time-Based Cancellation**: Automatically cancel any pending orders 30 minutes before and after a session change to avoid entering trades during liquidity shifts.",
    "context": {
      "keyTerms": [
        {
          "term": "Bid-Ask Spread",
          "definition": "The difference between the highest price a buyer is willing to pay and the lowest price a seller is willing to accept."
        },
        {
          "term": "Volatility Indicator",
          "definition": "A tool used to measure the rate at which the price of a security increases or decreases for a given set of returns."
        }
      ],
      "whyThisMatters": "Cancelling plans during session transitions helps avoid trades in unstable market conditions, protecting against erratic price movements.",
      "realLifeExample": "At the Tokyo-London session handoff, GBPJPY's spread widens from 3 to 12 pips, triggering a cancellation of pending orders due to liquidity concerns.",
      "commonMistake": "Failing to cancel orders during session transitions can lead to unexpected slippage and poor execution quality.",
      "quickNote": "Session transitions can distort spreads; cancel plans if spreads exceed 10% of the daily range.",
      "mentorText": "During session transitions, think of liquidity like a tide. If it recedes too far, it's best to stay ashore and cancel your plans.",
      "mentorAnalogy": "Just as a ship captain avoids navigating through narrow straits during tidal shifts, traders should cancel plans during session handoffs to avoid liquidity traps."
    },
    "taskData": null,
    "visualKey": "forex-session-handoff-cancellation"
  },
  {
    "type": "concept",
    "title": "Cancelling Plans Ahead of Central Bank Events",
    "label": "Forex Track",
    "body": "### Cancelling Plans Ahead of Central Bank Events\nCentral bank announcements can cause extreme volatility. This card explains **when to cancel plans in anticipation of these events**.\n\n* **Scheduled Announcement Monitoring**: Cancel all pending orders at least 1 hour before a scheduled central bank announcement. This prevents exposure to unpredictable market reactions.\n* **Volatility Anticipation**: Use historical data to assess potential volatility spikes. If past events show significant price swings, preemptively cancel plans to avoid adverse movements.\n* **Reactivation Criteria**: Only reactivate trade plans once the initial market reaction subsides and a new trend direction is confirmed post-announcement.",
    "context": {
      "keyTerms": [
        {
          "term": "Central Bank Announcement",
          "definition": "Official communications from a central bank regarding monetary policy decisions."
        },
        {
          "term": "Volatility Spike",
          "definition": "A sudden increase in the volatility of a financial instrument, often due to unexpected news or events."
        }
      ],
      "whyThisMatters": "Central bank events can lead to rapid and unpredictable market movements, making it essential to cancel plans to avoid unnecessary risk.",
      "realLifeExample": "Before an ECB interest rate decision, EURUSD's volatility increases, prompting traders to cancel all open orders to avoid being caught in a 50-pip swing.",
      "commonMistake": "Traders often underestimate the impact of central bank events, leading to unexpected losses from rapid price changes.",
      "quickNote": "Cancel plans 1 hour before central bank events to avoid unpredictable volatility.",
      "mentorText": "Think of central bank announcements like a controlled explosion. You want to be at a safe distance, not caught in the blast.",
      "mentorAnalogy": "Just as engineers clear the area before a controlled demolition, traders should cancel plans before central bank announcements to avoid the fallout."
    },
    "taskData": null,
    "visualKey": "forex-session-handoff-cancellation"
  },
  {
    "type": "concept",
    "title": "Handling Cancellations in Low-Volume Periods",
    "label": "Forex Track",
    "body": "### Handling Cancellations in Low-Volume Periods\nLow-volume periods pose significant risks for trade execution. This card examines **strategies for cancelling plans in thin markets**.\n\n* **Volume Thresholds**: Cancel plans if trading volume falls below 50% of the 20-day average. Low volume can lead to erratic price movements and unreliable execution.\n* **Spread Monitoring**: If spreads widen beyond twice their average during low-volume periods, cancel the trade plan to avoid unfavorable entry conditions.\n* **Market Depth Analysis**: Use market depth tools to assess liquidity. Cancel plans if the order book shows insufficient depth to support your trade size.",
    "context": {
      "keyTerms": [
        {
          "term": "Low-Volume Period",
          "definition": "Times when trading activity is reduced, often leading to increased volatility and wider spreads."
        },
        {
          "term": "Market Depth",
          "definition": "The market's ability to sustain large orders without impacting the price of the security."
        }
      ],
      "whyThisMatters": "Executing trades in low-volume periods can lead to poor fills and increased slippage, making cancellation a crucial risk management tool.",
      "realLifeExample": "During the Asian session, AUDUSD volume drops to 40% of its 20-day average, prompting traders to cancel pending orders due to liquidity concerns.",
      "commonMistake": "Ignoring low-volume signals can result in trades being executed at unfavorable prices due to lack of liquidity.",
      "quickNote": "Cancel trades if volume drops below 50% of the average to avoid thin market risks.",
      "mentorText": "In low-volume periods, think of the market like a narrow road. It's not the time to drive a heavy load. Cancel your plans and wait for clearer paths.",
      "mentorAnalogy": "Just as a surgeon avoids operating in poorly lit conditions, traders should cancel plans in low-volume periods to ensure precision and control."
    },
    "taskData": null,
    "visualKey": "forex-session-handoff-cancellation"
  },
  {
    "type": "concept",
    "title": "Strategies for Session Handoff Activation",
    "label": "Forex Track",
    "body": "### Forex Session Handoff: Activation Strategies\nSession handoffs present unique opportunities for trade activation. This card details **how to leverage session-specific characteristics to optimize trade entries**.\n\n* **Session Overlap Dynamics**: During the London-New York overlap, liquidity and volatility often increase. Plans should be activated when price action aligns with the directional bias established in the preceding session.\n* **Session Range Breakout**: If the Asian session range is broken with a strong directional move at the London open, activate the trade plan in the direction of the breakout, ensuring the move is supported by volume.\n* **Session Continuation Patterns**: Look for continuation patterns from the previous session. If the New York session continues the trend set by London, activate trades that align with this momentum.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Handoff",
          "definition": "The transition period between two major forex trading sessions."
        }
      ],
      "whyThisMatters": "Activating plans during session handoffs can capture momentum and liquidity shifts, optimizing entry points.",
      "realLifeExample": "EURUSD breaks out of the Asian session range with a 40-pip move at the London open, signaling a potential trade activation in the breakout direction.",
      "commonMistake": "Traders often activate plans without confirming volume support during session transitions.",
      "quickNote": "Session handoffs can provide high-probability entry points if volume and direction align.",
      "mentorText": "During session handoffs, focus on the liquidity and volume changes. If the market shows a clear directional bias, that's your cue to activate.",
      "mentorAnalogy": "Think of session handoffs like a relay race baton pass. The smooth transfer of momentum from one runner (session) to the next is crucial for success."
    },
    "taskData": null,
    "visualKey": "forex-session-handoff-cancellation"
  },
  {
    "type": "concept",
    "title": "Event-Driven Cancellation Techniques",
    "label": "Forex Track",
    "body": "### Event-Driven Plan Cancellation\nEconomic events can significantly impact market conditions. This card explores **techniques for cancelling plans based on upcoming economic events**.\n\n* **Pre-Event Volatility Spike**: Cancel plans if a significant volatility spike occurs before a major economic release, as this can indicate market uncertainty and noise.\n* **Data Release Impact**: If a data release contradicts the directional bias of your plan, cancel the trade. For example, a dovish central bank statement can negate a bullish setup.\n* **Geopolitical Developments**: Cancel plans if unexpected geopolitical news emerges, as these events can cause erratic market behavior that invalidates technical setups.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Event",
          "definition": "Scheduled announcements or releases that can impact financial markets, such as GDP reports or central bank meetings."
        }
      ],
      "whyThisMatters": "Events can drastically alter market conditions, making it essential to reassess and potentially cancel plans to avoid unnecessary risk.",
      "realLifeExample": "A planned long position on GBPUSD is canceled after a surprise Brexit announcement causes a 100-pip drop.",
      "commonMistake": "Ignoring economic calendars and holding positions through high-impact events without reassessment.",
      "quickNote": "Always reassess plans before major economic events to avoid unnecessary exposure.",
      "mentorText": "Before any major economic event, check your plans against the potential outcomes. If the risk is too high, it's better to step aside.",
      "mentorAnalogy": "Consider economic events like weather forecasts for pilots. If a storm is predicted, it's wise to delay takeoff until conditions are clear."
    },
    "taskData": null,
    "visualKey": "forex-session-handoff-cancellation"
  },
  {
    "type": "practice",
    "title": "Practice in Forex Plan Activation and Cancellation",
    "label": "Forex Track",
    "body": "### Practice: Forex Plan Activation and Cancellation\nApply your knowledge of session handoffs and event-driven cancellations in simulated scenarios. Practice setting and cancelling plans effectively.\n\n* **Scenario 1**: The London session opens with a strong bullish trend on EURUSD. Decide whether to activate your plan based on session overlap dynamics.\n* **Scenario 2**: A major NFP report is due in 30 minutes. Evaluate your current positions and determine if any plans should be cancelled.\n* **Scenario 3**: Unexpected geopolitical news hits the market during the New York session. Assess the impact on your trade plans and decide on cancellations.",
    "context": {
      "keyTerms": [
        {
          "term": "NFP Report",
          "definition": "Non-Farm Payroll report, a key economic indicator for the US economy."
        }
      ],
      "whyThisMatters": "Hands-on practice solidifies understanding and prepares traders for real-world decision-making under dynamic market conditions.",
      "realLifeExample": "Simulated trading environment replicating a London session breakout followed by a surprise Fed announcement.",
      "commonMistake": "Failing to simulate real-time decision-making, leading to unpreparedness in live markets.",
      "quickNote": "Simulate scenarios to test your activation and cancellation strategies under pressure.",
      "mentorText": "Use these practice scenarios to refine your decision-making. Treat them as real trades to build your confidence.",
      "mentorAnalogy": "Think of this practice like a flight simulator for pilots. It's where you make mistakes safely and learn to handle real-world challenges."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During the London session, EURUSD shows a strong bullish move. A major NFP report is due in 30 minutes. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Activate the trade plan immediately.",
          "isCorrect": false,
          "feedback": "Activating without considering the upcoming NFP report could expose you to unnecessary risk."
        },
        {
          "id": "1",
          "text": "Wait for the NFP report before making a decision.",
          "isCorrect": true,
          "feedback": "Waiting allows you to assess the impact of the NFP report on market conditions."
        },
        {
          "id": "2",
          "text": "Cancel all plans immediately.",
          "isCorrect": false,
          "feedback": "Cancelling without assessing the situation post-report may lead to missed opportunities."
        },
        {
          "id": "3",
          "text": "Adjust the plan to account for potential volatility.",
          "isCorrect": false,
          "feedback": "Adjusting without specific post-report data can lead to speculative decisions."
        }
      ]
    },
    "visualKey": "forex-session-handoff-cancellation"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Plan Activation and Cancellation",
    "label": "Forex Track",
    "body": "### Summary: Forex Plan Activation and Cancellation\nReview the key strategies for managing forex trade plans during session transitions and central bank events.\n\n* **Session Handoff Strategies**: Utilize session overlap dynamics and continuation patterns to optimize trade entries during handoffs.\n* **Event-Driven Cancellations**: Reassess and potentially cancel plans in light of economic data releases and geopolitical developments.\n* **Practical Application**: Apply these strategies in simulated environments to build confidence and refine decision-making skills.",
    "context": {
      "keyTerms": [
        {
          "term": "Central Bank Event",
          "definition": "Meetings or announcements from central banks that can influence currency values."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of activation and cancellation strategies enhances a trader's ability to navigate volatile markets effectively.",
      "realLifeExample": "Reviewing a week's trades, noting how session handoffs and economic events influenced activation and cancellation decisions.",
      "commonMistake": "Overlooking the cumulative impact of session transitions and events on trade outcomes.",
      "quickNote": "Mastering activation and cancellation strategies is key to effective forex trading.",
      "mentorText": "Reflect on your trades and the decisions you made. Understanding the why behind each action is crucial for growth.",
      "mentorAnalogy": "Consider this summary like a debriefing session for a pilot. Reviewing each flight's decisions helps improve future performance."
    },
    "taskData": null,
    "visualKey": "forex-session-handoff-cancellation"
  }
];
