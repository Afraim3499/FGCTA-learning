import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Foundations of Forex Invalidation Planning",
    "label": "Forex Track",
    "body": "### Foundations of Forex Invalidation Planning\nEffective invalidation planning in forex requires understanding unique market dynamics, including spread-aware stop placement and DXY overlays.\n\n* **Spread-Aware Stops**: Forex spreads can widen unexpectedly, especially during low liquidity periods. Stops must be placed beyond typical spread fluctuations to avoid premature invalidation.\n* **DXY Overlay Consideration**: The U.S. Dollar Index (DXY) provides a macroeconomic backdrop that can influence major currency pairs. Integrating DXY analysis helps refine invalidation points by aligning them with broader dollar trends.",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Planning",
          "definition": "The process of defining price levels where a trade hypothesis is considered invalid."
        },
        {
          "term": "DXY",
          "definition": "The U.S. Dollar Index, a measure of the value of the U.S. dollar relative to a basket of foreign currencies."
        }
      ],
      "whyThisMatters": "Proper invalidation planning prevents unnecessary losses and ensures trades are only exited when the original hypothesis is proven wrong.",
      "realLifeExample": "A trader sets a stop loss on EURUSD at 1.1200, considering a typical spread of 2 pips, but the spread widens to 5 pips during news, triggering the stop prematurely.",
      "commonMistake": "Placing stops too close to the entry point without accounting for spread fluctuations, leading to frequent stop-outs.",
      "quickNote": "Always factor in spread and DXY trends when planning invalidation levels.",
      "mentorText": "Think of invalidation planning as setting a safety net. If your net is too tight, you'll get caught in market noise. Widen it with spread and DXY insights.",
      "mentorAnalogy": "Like a structural engineer designing a bridge, you must account for wind and load variations to ensure stability. In trading, spread and DXY are your wind and load."
    },
    "taskData": null,
    "visualKey": "forex-invalidation-foundations"
  },
  {
    "type": "concept",
    "title": "Spread-Aware Safety Stops",
    "label": "Forex Track",
    "body": "### Spread-Aware Safety Stops\nPlacing stops in forex requires a keen awareness of spread dynamics to protect trades from unnecessary invalidation.\n\n* **Spread Buffer Calculation**: Calculate an average spread buffer based on historical data for the currency pair. This buffer should be added to your stop loss to prevent premature triggering.\n* **Volatility Adjustments**: During high-impact news events, spreads can widen significantly. Adjust your stop buffer to accommodate potential spread spikes during these times.\n* **Session-Specific Spreads**: Recognize that spreads can vary between sessions. Use session-specific spread data to refine stop placements, particularly during rollover periods.",
    "context": {
      "keyTerms": [
        {
          "term": "Spread",
          "definition": "The difference between the bid and ask price of a currency pair."
        },
        {
          "term": "Stop Loss",
          "definition": "A pre-set order to sell a security when it reaches a certain price, limiting potential losses."
        }
      ],
      "whyThisMatters": "Ignoring spread dynamics can lead to stop losses being hit unnecessarily, eroding trading capital and confidence.",
      "realLifeExample": "GBPUSD has an average spread of 1.5 pips during the London session, but spikes to 4 pips during the New York close, requiring a wider stop buffer.",
      "commonMistake": "Failing to adjust stop loss distances during periods of known spread volatility, such as economic announcements.",
      "quickNote": "Buffer your stops with spread data to avoid noise-triggered exits.",
      "mentorText": "Imagine placing a fence around your garden to keep out pests. If the fence is too close, even a small gust of wind can knock it over. Give it room with spread buffers.",
      "mentorAnalogy": "A pilot sets altitudes considering air pressure changes; similarly, traders set stops considering spread changes to avoid turbulence."
    },
    "taskData": null,
    "visualKey": "forex-spread-safety-stops"
  },
  {
    "type": "concept",
    "title": "Using DXY for Invalidation Overlays",
    "label": "Forex Track",
    "body": "### Using DXY for Invalidation Overlays\nIncorporating the DXY index into your invalidation planning enhances the precision of stop placements in forex trading.\n\n* **Correlative Analysis**: Analyze the correlation between DXY movements and your currency pair. A strong inverse correlation suggests that DXY trends can validate or invalidate your trade hypothesis.\n* **DXY Trend Confirmation**: Use DXY trend confirmation to adjust stop levels. If DXY confirms a bullish trend while your pair is bearish, consider a wider stop to account for potential reversals.\n* **Macro-Economic Context**: DXY reflects broader economic conditions. Align your invalidation points with macroeconomic shifts indicated by DXY to improve trade robustness.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation",
          "definition": "A statistical measure that describes the extent to which two variables move in relation to each other."
        },
        {
          "term": "Macro-Economic Context",
          "definition": "The broader economic environment that can influence financial markets."
        }
      ],
      "whyThisMatters": "DXY provides a macroeconomic lens that can validate or challenge your trade setup, refining stop placement decisions.",
      "realLifeExample": "EURUSD shows a bearish setup, but DXY is breaking into a new uptrend, suggesting potential invalidation of the trade hypothesis.",
      "commonMistake": "Ignoring DXY trends, leading to stops being placed without considering broader dollar strength or weakness.",
      "quickNote": "Overlay DXY trends to validate your forex invalidation points.",
      "mentorText": "Think of DXY as the weather report for your trading. It tells you if a storm is coming, so you can adjust your sails accordingly.",
      "mentorAnalogy": "Just as a ship captain uses a compass to navigate, traders use DXY to guide stop placements in the forex sea."
    },
    "taskData": null,
    "visualKey": "forex-dxy-invalidation-overlay"
  },
  {
    "type": "concept",
    "title": "ADR-Based Stop Scaling",
    "label": "Forex Track",
    "body": "### ADR-Based Stop Scaling\nUtilizing the Average Daily Range (ADR) allows traders to scale stops effectively, optimizing invalidation boundaries in volatile forex markets.\n\n* **ADR Calculation**: Determine the ADR for your currency pair over a relevant period. This sets a baseline for expected daily volatility, guiding stop placement.\n* **Volatility Scaling**: Scale your stops in proportion to the ADR. In high volatility environments, wider stops are necessary to accommodate larger price swings.\n* **Dynamic Adjustments**: Regularly update ADR calculations to reflect current market conditions, ensuring stops remain relevant and effective.",
    "context": {
      "keyTerms": [
        {
          "term": "Average Daily Range (ADR)",
          "definition": "The average range between the high and low prices of a currency pair over a specific period."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation of a trading price series over time."
        }
      ],
      "whyThisMatters": "ADR-based scaling ensures stops are neither too tight nor too loose, optimizing risk management in dynamic markets.",
      "realLifeExample": "USDJPY has an ADR of 80 pips. A trader sets a stop loss 1.5 times the ADR to account for potential volatility spikes.",
      "commonMistake": "Setting fixed stops without adjusting for current market volatility, leading to frequent stop-outs or excessive risk.",
      "quickNote": "Scale stops with ADR to match market volatility.",
      "mentorText": "Think of ADR as your market pulse. It tells you how fast the heart is beating, so you can set your stops to the rhythm.",
      "mentorAnalogy": "A tailor adjusts clothing size based on body measurements; similarly, traders adjust stops based on ADR measurements."
    },
    "taskData": null,
    "visualKey": "forex-adr-stop-scaling"
  },
  {
    "type": "concept",
    "title": "Practical Forex Invalidation Drills",
    "label": "Forex Track",
    "body": "### Practical Forex Invalidation Drills\nEngage in structured exercises to refine your ability to set and adjust invalidation boundaries in forex trading scenarios.\n\n* **Boundary Setting Exercise**: Select a currency pair and identify key support and resistance levels. Practice setting invalidation points just beyond these levels to account for potential false breakouts.\n* **Dynamic Adjustment Drill**: During live market conditions, adjust your invalidation points based on real-time price action and volatility. This helps in adapting to changing market dynamics.\n* **Scenario Simulation**: Use historical data to simulate trades and practice setting invalidation points. Focus on how different market conditions affect your boundary decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Boundary",
          "definition": "A price level where the trade hypothesis is considered invalid."
        },
        {
          "term": "False Breakout",
          "definition": "A temporary move beyond a support or resistance level that quickly reverses."
        }
      ],
      "whyThisMatters": "Practical drills enhance your ability to set precise invalidation points, reducing unnecessary losses.",
      "realLifeExample": "Practicing with EURUSD during a non-farm payroll release, setting invalidation just beyond the initial spike to avoid false breakouts.",
      "commonMistake": "Setting invalidation points too close to entry, leading to premature stop-outs.",
      "quickNote": "Refine invalidation with drills to adapt to real-time market shifts.",
      "mentorText": "Think of invalidation drills like a pilot's simulator training—practice in controlled environments to prepare for real-world scenarios.",
      "mentorAnalogy": "Just as a surgeon practices on models before operating, traders must drill invalidation setups to ensure precision in live markets."
    },
    "taskData": null,
    "visualKey": "forex-invalidation-drill-component"
  },
  {
    "type": "concept",
    "title": "Forex Invalidation Debrief",
    "label": "Forex Track",
    "body": "### Forex Invalidation Debrief\nAnalyze past forex trades to understand how invalidation boundaries were applied and identify areas for improvement.\n\n* **Post-Trade Analysis**: Review your trade journal to assess whether invalidation points were set correctly. Identify trades where boundaries were too tight or too loose.\n* **Boundary Effectiveness Review**: Evaluate the impact of your invalidation points on trade outcomes. Determine if adjustments could have improved risk management.\n* **Pattern Recognition**: Look for recurring patterns in your invalidation errors. Use these insights to refine your future boundary setting strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Journal",
          "definition": "A detailed record of trades, including entry, exit, and invalidation points."
        },
        {
          "term": "Risk Management",
          "definition": "Strategies to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Debriefing helps traders learn from past mistakes and refine their invalidation strategies for future trades.",
      "realLifeExample": "Analyzing a GBPUSD trade where the invalidation was set too close, resulting in a stop-out before a profitable move.",
      "commonMistake": "Failing to review trades systematically, missing out on learning opportunities.",
      "quickNote": "Debrief past trades to enhance future invalidation accuracy.",
      "mentorText": "Think of this debrief as a post-flight review—analyze what went right and wrong to improve future performance.",
      "mentorAnalogy": "Like a football coach reviewing game footage, traders must analyze past trades to refine their strategies."
    },
    "taskData": null,
    "visualKey": "forex-invalidation-debrief-component"
  },
  {
    "type": "practice",
    "title": "Forex Invalidation Practice Scenarios",
    "label": "Forex Track",
    "body": "### Forex Invalidation Practice Scenarios\nApply your forex invalidation planning skills in practice scenarios, focusing on spread and ADR considerations.",
    "context": {
      "keyTerms": [
        {
          "term": "Average Daily Range (ADR)",
          "definition": "The average movement of a currency pair in a day."
        },
        {
          "term": "Spread",
          "definition": "The difference between the bid and ask price of a currency pair."
        }
      ],
      "whyThisMatters": "Practicing with realistic scenarios helps traders incorporate spread and ADR into their invalidation planning, enhancing precision.",
      "realLifeExample": "Setting invalidation for USDJPY during Tokyo session, considering a 10-pip spread and a 75-pip ADR.",
      "commonMistake": "Ignoring spread and ADR when setting invalidation, leading to ineffective stop placements.",
      "quickNote": "Integrate spread and ADR into invalidation planning for robust setups.",
      "mentorText": "Approach these scenarios like a flight simulator—practice with variables to prepare for live conditions.",
      "mentorAnalogy": "Just as an architect considers material expansion in building design, traders must account for spread and ADR in invalidation planning."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a EURUSD trade with a 5-pip spread and a 50-pip ADR, where should you set your invalidation point if entering at 1.1000?",
      "options": [
        {
          "id": "0",
          "text": "1.0950",
          "isCorrect": false,
          "feedback": "This ignores the spread and ADR, setting too tight a stop."
        },
        {
          "id": "1",
          "text": "1.0980",
          "isCorrect": false,
          "feedback": "This is too close, not considering the ADR."
        },
        {
          "id": "2",
          "text": "1.0930",
          "isCorrect": true,
          "feedback": "This accounts for both the spread and ADR, providing a robust invalidation point."
        },
        {
          "id": "3",
          "text": "1.1020",
          "isCorrect": false,
          "feedback": "This is above the entry, which is incorrect for a stop placement."
        }
      ]
    },
    "visualKey": "forex-invalidation-foundations"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Invalidation Planning",
    "label": "Forex Track",
    "body": "### Summary of Forex Invalidation Planning\nReview the key concepts of forex invalidation planning, ensuring a comprehensive understanding of spread-aware stop placement.\n\n* **Spread Consideration**: Always account for the spread when setting invalidation points to avoid premature stop-outs.\n* **ADR Integration**: Use the Average Daily Range to gauge potential price movement and set stops accordingly.\n* **Continuous Refinement**: Regularly review and adjust your invalidation strategies based on market conditions and past performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Placement",
          "definition": "The process of setting a stop-loss order to limit losses."
        },
        {
          "term": "Premature Stop-Out",
          "definition": "Being stopped out of a trade too early due to tight invalidation."
        }
      ],
      "whyThisMatters": "A strong grasp of invalidation planning reduces risk and enhances trade performance.",
      "realLifeExample": "Incorporating a 3-pip spread and a 60-pip ADR into EURUSD stop placement during volatile news events.",
      "commonMistake": "Overlooking spread and ADR, leading to ineffective invalidation points.",
      "quickNote": "Master invalidation by integrating spread and ADR into your planning.",
      "mentorText": "Think of this summary as your pre-flight checklist—ensure all factors are considered before takeoff.",
      "mentorAnalogy": "Like a chef tasting a dish before serving, traders must review all elements of their invalidation plan for optimal execution."
    },
    "taskData": null,
    "visualKey": "forex-spread-safety-stops"
  }
];
