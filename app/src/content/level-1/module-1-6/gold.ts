import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Zone-Sweep Trigger Design",
    "label": "Gold Track",
    "body": "Designing triggers based on zone sweeps in gold trading is crucial for effective trade activation. This mission focuses on understanding the importance of rapid wick-rejections within these zones to structure precise triggers.",
    "context": {
      "keyTerms": [
        {
          "term": "Zone Sweep",
          "definition": "A price movement that breaches a predefined support or resistance zone, often triggering a reversal."
        },
        {
          "term": "Wick Rejection",
          "definition": "A rapid price movement that leaves a long wick, indicating rejection of a price level."
        }
      ],
      "whyThisMatters": "Zone-sweep triggers help traders capitalize on high-probability reversal points in gold markets, enhancing trade precision.",
      "realLifeExample": "Gold at $1,800 experiences a zone sweep at the $1,805 resistance level, followed by a rapid wick rejection, indicating a potential reversal.",
      "commonMistake": "Traders often misinterpret minor wicks as valid rejections, leading to premature trade entries.",
      "quickNote": "Zone sweeps followed by wick rejections can signal high-probability reversals.",
      "mentorText": "Focus on the zones where gold price sweeps and then rejects. These are your high-probability trigger points.",
      "mentorAnalogy": "Think of a zone sweep like a basketball player faking a shot to draw defenders, then passing to an open teammate for a clear shot."
    },
    "taskData": null,
    "visualKey": "gold-zone-reaction-trigger"
  },
  {
    "type": "concept",
    "title": "Mechanics of Zone-Sweep Triggers",
    "label": "Gold Track",
    "body": "### Mechanics of Zone-Sweep Triggers\nZone-sweep triggers in gold trading involve identifying key price zones and utilizing their breaches for precise trade activation.\n\n* **Zone Identification**: Define key support and resistance zones based on historical price action. These zones serve as potential reversal points.\n* **Sweep Confirmation**: A valid zone sweep requires a price movement that breaches the zone with a significant wick, indicating a rejection.\n* **Trigger Activation**: Once a zone sweep is confirmed, triggers are activated by observing subsequent price action that aligns with the anticipated reversal.",
    "context": {
      "keyTerms": [
        {
          "term": "Support Zone",
          "definition": "A price level where a downtrend can be expected to pause due to a concentration of demand."
        },
        {
          "term": "Resistance Zone",
          "definition": "A price level where an uptrend can be expected to pause due to a concentration of supply."
        }
      ],
      "whyThisMatters": "Understanding the mechanics of zone-sweep triggers allows traders to set precise entry points, reducing risk and increasing potential reward.",
      "realLifeExample": "Gold price at $1,750 breaches a support zone at $1,745, creating a wick rejection and confirming a reversal trigger.",
      "commonMistake": "Failing to wait for a clear wick rejection before activating a trigger, leading to false entries.",
      "quickNote": "Only activate triggers after a confirmed zone sweep with a significant wick.",
      "mentorText": "Identify your zones and wait for the sweep. The wick is your confirmation, not the breach itself.",
      "mentorAnalogy": "Like a goalie waiting for the ball to cross the line before reacting, wait for the price to sweep and reject before activating your trigger."
    },
    "taskData": null,
    "visualKey": "gold-zone-reaction-trigger"
  },
  {
    "type": "concept",
    "title": "Designing Wick-Rejection Triggers",
    "label": "Gold Track",
    "body": "### Designing Wick-Rejection Triggers\nWick-rejection triggers are designed to capitalize on rapid price movements that indicate strong reversals in gold trading.\n\n* **Wick Analysis**: Identify long wicks that form at key price levels, indicating a rejection of those levels.\n* **Confirmation Criteria**: A valid wick rejection must be followed by a close within the previous range, confirming the rejection.\n* **Entry Timing**: Triggers are activated when subsequent price action aligns with the direction indicated by the wick rejection.",
    "context": {
      "keyTerms": [
        {
          "term": "Wick",
          "definition": "The shadow or tail on a candlestick chart, representing the high and low prices during a period."
        },
        {
          "term": "Reversal",
          "definition": "A change in the direction of a price trend."
        }
      ],
      "whyThisMatters": "Wick-rejection triggers provide clear signals of potential reversals, allowing traders to enter trades with greater confidence.",
      "realLifeExample": "Gold price spikes to $1,820, leaving a long upper wick and closing back at $1,810, signaling a bearish reversal.",
      "commonMistake": "Entering trades based on wick rejections without waiting for a confirming close within the range.",
      "quickNote": "A wick rejection must be confirmed by a close within the range for a valid trigger.",
      "mentorText": "Look for those long wicks at key levels. They tell you where the market is unwilling to go.",
      "mentorAnalogy": "Like a tennis player faking a shot, the wick shows intent but needs a follow-through to confirm direction."
    },
    "taskData": null,
    "visualKey": "gold-zone-reaction-trigger"
  },
  {
    "type": "concept",
    "title": "Triggers on COMEX Open",
    "label": "Gold Track",
    "body": "### Triggers on COMEX Open\nDesigning triggers for the COMEX open involves leveraging the volatility and liquidity that characterize this period in gold trading.\n\n* **Timing Precision**: The COMEX open is a critical time for gold due to increased trading activity. Triggers should be designed to activate precisely at this time.\n* **Volatility Utilization**: Utilize the heightened volatility to identify rapid price movements that can confirm trigger activation.\n* **Liquidity Consideration**: The increased liquidity during the COMEX open ensures that triggers based on price movements are more reliable and less prone to slippage.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX",
          "definition": "The primary market for trading metals such as gold, silver, and copper."
        },
        {
          "term": "Liquidity",
          "definition": "The degree to which an asset can be quickly bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Triggers designed around the COMEX open capitalize on predictable market behavior, improving entry accuracy.",
      "realLifeExample": "At 8:20 AM EST, the COMEX open sees gold prices spike from $1,800 to $1,810, confirming a trigger for a long entry.",
      "commonMistake": "Ignoring the specific timing of the COMEX open, leading to missed opportunities or late entries.",
      "quickNote": "Design triggers to activate precisely at the COMEX open for optimal reliability.",
      "mentorText": "The COMEX open is your launch window. Be ready to execute as the market opens its doors.",
      "mentorAnalogy": "Like a sprinter at the starting gun, be poised to move as soon as the COMEX opens, using the initial burst of activity to your advantage."
    },
    "taskData": null,
    "visualKey": "gold-zone-reaction-trigger"
  },
  {
    "type": "concept",
    "title": "Validating Zone-Sweep Triggers in Gold Trading",
    "label": "Gold Track",
    "body": "### Gold Zone Reaction Trigger: Validating Zone-Sweep Triggers\nZone-sweep triggers in gold trading require meticulous validation to ensure reliability. This card outlines techniques to backtest and refine these triggers for consistent performance.\n\n* **Historical Backtesting**: Implement a rigorous backtesting protocol on historical gold price data to evaluate the effectiveness of zone-sweep triggers. Ensure that the sample size covers various market conditions to capture diverse reactions.\n* **Displacement Confirmation**: Validate that a zone-sweep trigger is only activated when a significant price displacement follows the sweep. This confirms that the market has genuinely reacted to the zone breach.\n* **Statistical Consistency**: Analyze the statistical consistency of the trigger's performance across different time frames and market sessions. A trigger should demonstrate a stable win rate and risk-reward ratio over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Zone-Sweep Trigger",
          "definition": "A trading trigger activated when price sweeps a predefined support or resistance zone."
        },
        {
          "term": "Displacement",
          "definition": "A significant price movement following a trigger event, indicating market reaction."
        }
      ],
      "whyThisMatters": "Validating zone-sweep triggers ensures that traders engage with high-probability setups, minimizing false signals.",
      "realLifeExample": "Gold futures at $1,800 experience a zone-sweep of a resistance level, followed by a $20 displacement, confirming the trigger's validity.",
      "commonMistake": "Traders often activate triggers without confirming displacement, leading to premature entries.",
      "quickNote": "Always confirm displacement after a zone sweep for trigger validation.",
      "mentorText": "You need to treat zone-sweep triggers like a pilot checks instruments before takeoff. Confirm every detail before committing.",
      "mentorAnalogy": "Think of it like a structural engineer testing a bridge design under various stress conditions before approval."
    },
    "taskData": null,
    "visualKey": "gold-zone-reaction-trigger"
  },
  {
    "type": "concept",
    "title": "Adaptive Gold Trigger Design",
    "label": "Gold Track",
    "body": "### Gold Zone Reaction Trigger: Adaptive Gold Trigger Design\nDesigning adaptive triggers in gold trading involves creating mechanisms that respond to evolving market conditions. This card explores strategies for dynamic adjustment of triggers.\n\n* **Volatility-Based Adjustments**: Modify trigger thresholds based on current market volatility. Use ATR (Average True Range) to dynamically adjust entry and exit points, ensuring triggers remain relevant.\n* **Session-Specific Calibration**: Tailor triggers to different trading sessions, recognizing that gold behaves differently during Asian, European, and American sessions. Adjust parameters to align with session-specific liquidity and volatility.\n* **Feedback Loop Integration**: Implement a feedback loop where trigger performance is regularly reviewed and adjusted. Use performance metrics to refine trigger parameters, ensuring they adapt to market changes.",
    "context": {
      "keyTerms": [
        {
          "term": "Adaptive Trigger",
          "definition": "A trading trigger designed to adjust its parameters based on changing market conditions."
        },
        {
          "term": "ATR (Average True Range)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        }
      ],
      "whyThisMatters": "Adaptive triggers allow traders to maintain an edge by aligning strategies with current market dynamics, reducing the risk of outdated setups.",
      "realLifeExample": "During high volatility, gold triggers adjust entry points by 1.5x ATR, while in low volatility, they use 0.75x ATR, maintaining effectiveness across conditions.",
      "commonMistake": "Failing to adjust triggers for different market sessions can lead to ineffective strategies.",
      "quickNote": "Adapt triggers to market volatility and session characteristics for optimal performance.",
      "mentorText": "Design your triggers like a thermostat that adjusts to room temperature changes, ensuring comfort at all times.",
      "mentorAnalogy": "Consider it like a race car's suspension system, which adjusts dynamically to track conditions for optimal performance."
    },
    "taskData": null,
    "visualKey": "gold-zone-reaction-trigger"
  },
  {
    "type": "practice",
    "title": "Practicing Gold Trigger Design",
    "label": "Gold Track",
    "body": "### Gold Zone Reaction Trigger: Practicing Gold Trigger Design\nEngage in practical exercises to apply gold trigger design concepts. Test your ability to create effective triggers in simulated gold trading scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a controlled, risk-free environment using historical or live market data."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge, enabling traders to refine their strategies in a controlled environment.",
      "realLifeExample": "Using a trading simulator, a trader tests a zone-sweep trigger on gold futures, adjusting parameters based on simulated outcomes.",
      "commonMistake": "Relying solely on theoretical understanding without practical application can lead to untested strategies.",
      "quickNote": "Practice in a simulator to refine your gold trigger designs effectively.",
      "mentorText": "Think of this practice as a flight simulator for pilots. You need to test your strategies in a safe environment before going live.",
      "mentorAnalogy": "It's like a chef perfecting a recipe in a test kitchen before serving it to guests."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are testing a zone-sweep trigger for gold futures. The market sweeps a resistance zone at $1,850, but there's no significant displacement. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Wait for displacement confirmation before activating the trigger.",
          "isCorrect": true,
          "feedback": "Correct. Displacement confirmation is essential to validate the trigger."
        },
        {
          "id": "1",
          "text": "Activate the trigger immediately after the zone sweep.",
          "isCorrect": false,
          "feedback": "Incorrect. Without displacement confirmation, the trigger may be unreliable."
        },
        {
          "id": "2",
          "text": "Adjust the trigger to a lower threshold and activate it.",
          "isCorrect": false,
          "feedback": "Incorrect. Lowering the threshold without confirmation can lead to false signals."
        },
        {
          "id": "3",
          "text": "Ignore the trigger and look for a new setup.",
          "isCorrect": false,
          "feedback": "Incorrect. The setup may still be valid if displacement occurs later."
        }
      ]
    },
    "visualKey": "gold-zone-reaction-trigger"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Trigger Design",
    "label": "Gold Track",
    "body": "### Gold Zone Reaction Trigger: Summary of Gold Trigger Design\nReview the key concepts and strategies of gold trigger design. Consolidate your understanding of zone-sweep and wick-rejection triggers for practical use.\n\n* **Zone-Sweep Validation**: Ensure triggers are backed by historical data and confirm displacement to validate their effectiveness.\n* **Adaptive Design**: Create triggers that adjust to market volatility and session characteristics, maintaining relevance and effectiveness.\n* **Practical Application**: Engage in simulated trading to test and refine trigger designs, ensuring they perform well in various scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Wick-Rejection Trigger",
          "definition": "A trigger activated when a price wick rejects a key level, indicating potential reversal."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of trigger design enhances a trader's ability to execute precise and effective trades.",
      "realLifeExample": "A trader uses adaptive triggers in a simulated environment, achieving consistent results across different market conditions.",
      "commonMistake": "Overlooking the importance of adaptive triggers can lead to outdated strategies that fail in changing markets.",
      "quickNote": "Consolidate your trigger design knowledge for effective gold trading.",
      "mentorText": "Think of this summary as your pre-flight checklist. Review everything to ensure you're ready for the market.",
      "mentorAnalogy": "It's like a conductor reviewing the score before a concert, ensuring every note is understood and ready for performance."
    },
    "taskData": null,
    "visualKey": "gold-zone-reaction-trigger"
  }
];
