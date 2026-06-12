import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Structural Invalidation Boundaries",
    "label": "Core Track",
    "body": "### Invalidation Anatomy: Foundational Concepts\nUnderstanding structural invalidation boundaries is crucial for determining when a trade hypothesis is invalidated. This mission brief outlines the core principles.\n\n* **Structural Boundaries**: Define clear price levels where the market structure invalidates your trade hypothesis. These are not arbitrary but based on technical analysis of market structure.\n* **Hypothesis Testing**: Use invalidation boundaries to test your trade hypothesis. If price breaches these boundaries, the hypothesis is proven wrong.\n* **Risk Management**: Structural invalidation boundaries help manage risk by providing objective criteria for exiting trades, reducing emotional decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Invalidation Boundary",
          "definition": "A predefined price level where a trade hypothesis is considered invalid."
        }
      ],
      "whyThisMatters": "Defining invalidation boundaries is essential for objective risk management and hypothesis testing in trading.",
      "realLifeExample": "A trader sets an invalidation boundary at 1.2000 on EURUSD. If the price closes below this level, the bullish hypothesis is invalidated.",
      "commonMistake": "Setting invalidation boundaries based on arbitrary numbers or emotional discomfort rather than structural analysis.",
      "quickNote": "Invalidation boundaries are your trade's structural fail-safes.",
      "mentorText": "Think of invalidation boundaries as the safety net for your trade hypothesis. If the market hits this net, it's time to reassess.",
      "mentorAnalogy": "Just like an engineer designs a bridge with specific load limits, traders define invalidation boundaries to know when their trade 'structure' fails."
    },
    "taskData": null,
    "visualKey": "invalidation-anatomy"
  },
  {
    "type": "concept",
    "title": "Trend Structure Invalidation Points",
    "label": "Core Track",
    "body": "### Trend Structure: Identifying Invalidation Points\nIdentifying key invalidation points within trend structures ensures stop placements are based on structural failure rather than emotional discomfort.\n\n* **Higher Highs and Lows**: In an uptrend, invalidation occurs if a lower low is printed, breaking the trend structure. Conversely, in a downtrend, a higher high invalidates the trend.\n* **Trendline Breach**: A confirmed breach of a trendline with a close outside the line signals potential invalidation of the trend.\n* **Volume Confirmation**: Use volume spikes to confirm trend invalidation. A significant volume increase on a trendline break strengthens the invalidation signal.",
    "context": {
      "keyTerms": [
        {
          "term": "Trend Structure",
          "definition": "The pattern of higher highs and higher lows in an uptrend, or lower highs and lower lows in a downtrend."
        }
      ],
      "whyThisMatters": "Trend structure invalidation points provide objective criteria for stop placements, reducing emotional bias in decision-making.",
      "realLifeExample": "A trader identifies an uptrend in GBPUSD. A close below the last higher low at 1.3800 invalidates the trend hypothesis.",
      "commonMistake": "Placing stops too close to current price action without considering the trend structure, leading to premature exits.",
      "quickNote": "Trend invalidation occurs when the structural pattern is broken.",
      "mentorText": "Your trend structure is your roadmap. If the market takes a detour, it's time to reconsider your route.",
      "mentorAnalogy": "Just as a pilot follows a flight path, traders follow trend structures. A deviation signals a need to adjust course."
    },
    "taskData": null,
    "visualKey": "trend-structure-invalidation"
  },
  {
    "type": "concept",
    "title": "Invalidation at Range Extremes",
    "label": "Core Track",
    "body": "### Range Extremes: Setting Invalidation Boundaries\nSetting invalidation boundaries at the extremes of price ranges minimizes risk by focusing on structural rather than emotional triggers.\n\n* **Range Highs and Lows**: Place invalidation points just beyond the established range highs or lows. A breakout beyond these levels signals range invalidation.\n* **False Breakout Filters**: Use additional confirmation, such as volume or momentum indicators, to filter false breakouts before invalidating the range.\n* **Risk-to-Reward Calibration**: Ensure that invalidation points align with your risk-to-reward ratio, maintaining a favorable expectancy.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Range",
          "definition": "A consolidation phase where price oscillates between defined support and resistance levels."
        }
      ],
      "whyThisMatters": "Invalidation at range extremes helps traders avoid false breakouts and manage risk effectively.",
      "realLifeExample": "A trader observes EURJPY ranging between 130.00 and 131.00. A close above 131.20 invalidates the range-bound hypothesis.",
      "commonMistake": "Failing to differentiate between a true breakout and a false move, leading to unnecessary stop-outs.",
      "quickNote": "Range extremes define your boundary lines for invalidation.",
      "mentorText": "Think of range extremes as the walls of your trading room. If price breaks through, it's time to exit.",
      "mentorAnalogy": "Like a chess player who knows the boundaries of the board, traders must know the limits of their price range."
    },
    "taskData": null,
    "visualKey": "range-extreme-invalidation"
  },
  {
    "type": "concept",
    "title": "Structural vs. Time-Based Invalidation",
    "label": "Core Track",
    "body": "### Structural vs. Time: Prioritizing Invalidation Signals\nDifferentiate between structural and time-based invalidation, prioritizing structural signals over time constraints in your trading strategy.\n\n* **Structural Invalidation**: Focus on price action and market structure changes to determine invalidation, such as trendline breaks or support/resistance breaches.\n* **Time-Based Invalidation**: Use time constraints as secondary criteria, such as end-of-session or end-of-day, to reassess positions if structural signals are unclear.\n* **Signal Hierarchy**: Prioritize structural invalidation over time-based signals to ensure decisions are based on market behavior rather than arbitrary time limits.",
    "context": {
      "keyTerms": [
        {
          "term": "Time-Based Invalidation",
          "definition": "A trading strategy that uses time constraints to determine when a trade is invalidated."
        }
      ],
      "whyThisMatters": "Prioritizing structural over time-based invalidation ensures trading decisions align with market dynamics rather than arbitrary deadlines.",
      "realLifeExample": "A trader holds a position in AUDUSD, with a structural invalidation at a trendline break. Time-based reassessment occurs at the daily close.",
      "commonMistake": "Relying solely on time-based invalidation without considering structural changes, leading to missed market signals.",
      "quickNote": "Structure over time: prioritize market behavior for invalidation.",
      "mentorText": "Structure is your primary guide. Time is just a checkpoint, not the destination.",
      "mentorAnalogy": "Like a surgeon prioritizes vital signs over the clock, traders must focus on structural signals over time constraints."
    },
    "taskData": null,
    "visualKey": "structural-vs-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Practical Mapping of Invalidation Boundaries",
    "label": "Core Track",
    "body": "### Mapping Invalidation Boundaries: Practical Exercises\nEngage in practical exercises to map invalidation boundaries, reinforcing the separation of logical invalidation from emotional responses.\n\n* **Structural Highs and Lows**: Identify recent structural highs and lows on the chart. These points serve as logical invalidation boundaries, as a breach indicates a shift in market structure.\n* **Volume Profile Analysis**: Use volume profile to identify areas of high trading activity. Invalidation boundaries should be placed beyond these zones, as a breach suggests a significant change in market sentiment.\n* **ATR-Based Buffer**: Calculate the Average True Range (ATR) and add it as a buffer to your invalidation point. This accounts for normal market volatility and reduces the likelihood of premature stop-outs.",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Boundary",
          "definition": "A predefined price level where a trade hypothesis is considered invalid."
        },
        {
          "term": "Volume Profile",
          "definition": "A charting tool that shows the amount of volume traded at each price level over a specified period."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        }
      ],
      "whyThisMatters": "Mapping invalidation boundaries helps traders maintain discipline and prevent emotional decision-making.",
      "realLifeExample": "A trader sets an invalidation boundary 15 pips above a structural high on the EURUSD, using a 1.5x ATR buffer to account for volatility.",
      "commonMistake": "Setting invalidation boundaries too close to entry points, leading to frequent stop-outs due to normal market noise.",
      "quickNote": "Logical boundaries prevent emotional decisions.",
      "mentorText": "When mapping invalidation boundaries, focus on structural highs and lows. These are your logical checkpoints, not emotional reactions.",
      "mentorAnalogy": "Think of setting invalidation boundaries like a pilot setting a no-fly zone. You don't cross it unless there's a structural reason."
    },
    "taskData": null,
    "visualKey": "mapping-invalidation-drill"
  },
  {
    "type": "concept",
    "title": "Debriefing Invalidation Scenarios",
    "label": "Core Track",
    "body": "### Analyzing Past Trades: Invalidation Debrief\nAnalyze past trades to understand how structural invalidation boundaries were or were not respected, and learn from these scenarios.\n\n* **Trade Journal Review**: Document each trade's invalidation point and the outcome. Identify patterns where boundaries were respected or violated.\n* **Post-Trade Analysis**: Conduct a detailed review of trades where invalidation boundaries were breached. Determine if the breach was due to market structure changes or poor boundary placement.\n* **Feedback Loop Creation**: Establish a feedback loop by comparing planned invalidation points with actual market behavior. Use this to refine future boundary placements.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Journal",
          "definition": "A record of all trading activities, including entry and exit points, reasons for trades, and outcomes."
        },
        {
          "term": "Feedback Loop",
          "definition": "A process of using past outcomes to improve future decision-making."
        }
      ],
      "whyThisMatters": "Debriefing invalidation scenarios allows traders to learn from past mistakes and improve their boundary-setting skills.",
      "realLifeExample": "A trader reviews a series of trades where invalidation boundaries were consistently hit, realizing they were set too tight against market noise.",
      "commonMistake": "Failing to review trades where invalidation points were breached, missing opportunities for learning and improvement.",
      "quickNote": "Review and refine invalidation strategies.",
      "mentorText": "After each trade, debrief your invalidation points. Did the market truly shift, or was your boundary misplaced? This is how you learn.",
      "mentorAnalogy": "A surgeon reviews each operation to understand what went right or wrong, ensuring better precision in future procedures."
    },
    "taskData": null,
    "visualKey": "invalidation-debrief"
  },
  {
    "type": "concept",
    "title": "Emotional vs. Logical Stop Placement",
    "label": "Core Track",
    "body": "### Distinguishing Emotional from Logical Stops\nUnderstand the difference between emotional and logical stop placements, ensuring stops are based on structural criteria.\n\n* **Emotional Stop Indicators**: Recognize signs of emotional stops, such as arbitrary percentages or round numbers, which lack structural justification.\n* **Logical Stop Criteria**: Base stops on market structure, such as recent swing highs/lows or key support/resistance levels, ensuring they reflect logical invalidation points.\n* **Risk Management Alignment**: Ensure stop placements align with overall risk management strategies, maintaining a consistent risk-to-reward ratio.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Stop",
          "definition": "A stop-loss placement based on fear or arbitrary criteria rather than market structure."
        },
        {
          "term": "Logical Stop",
          "definition": "A stop-loss placement based on structural market analysis, such as support and resistance levels."
        }
      ],
      "whyThisMatters": "Logical stop placements prevent emotional trading decisions and align with structured trading plans.",
      "realLifeExample": "A trader places a stop-loss below a key support level on GBPUSD, rather than an arbitrary 20-pip distance.",
      "commonMistake": "Setting stops based on emotional reactions to market movements, leading to inconsistent trading results.",
      "quickNote": "Logical stops align with market structure.",
      "mentorText": "Your stops should be like a chess move, calculated and strategic, not a knee-jerk reaction to fear.",
      "mentorAnalogy": "A structural engineer doesn't place support beams randomly; they are positioned based on the building's design and load requirements."
    },
    "taskData": null,
    "visualKey": "invalidation-anatomy"
  },
  {
    "type": "concept",
    "title": "Identifying Structural Failure Points",
    "label": "Core Track",
    "body": "### Techniques for Identifying Structural Failure Points\nLearn techniques to accurately identify structural failure points, critical for setting effective invalidation boundaries.\n\n* **Trend Line Breach**: Identify trend lines that, when breached, indicate a potential trend reversal or structural failure.\n* **Support/Resistance Breaks**: Monitor key support and resistance levels. A break of these levels suggests a structural shift, necessitating a reevaluation of invalidation boundaries.\n* **Pattern Completion**: Recognize completion of chart patterns (e.g., head and shoulders, double tops/bottoms) as potential structural failure points.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Failure Point",
          "definition": "A price level where a breach indicates a significant change in market structure."
        },
        {
          "term": "Trend Line",
          "definition": "A line drawn over pivot highs or under pivot lows to show the prevailing direction of price."
        },
        {
          "term": "Chart Pattern",
          "definition": "A distinct formation on a price chart that creates a trading signal, or a sign of future price movements."
        }
      ],
      "whyThisMatters": "Identifying structural failure points is essential for setting precise invalidation boundaries and mitigating risk.",
      "realLifeExample": "A trader identifies a double top pattern on USDJPY, setting an invalidation point just above the pattern's peak.",
      "commonMistake": "Ignoring structural failure points, leading to poorly placed invalidation boundaries that don't reflect market realities.",
      "quickNote": "Failure points guide invalidation boundaries.",
      "mentorText": "Structural failure points are your market's 'red flags'. Spot them early, and you'll know exactly where your invalidation should be.",
      "mentorAnalogy": "An architect identifies stress points in a building's design to ensure stability, just as you identify failure points to ensure trade integrity."
    },
    "taskData": null,
    "visualKey": "trend-structure-invalidation"
  },
  {
    "type": "concept",
    "title": "Dynamic Adjustment of Invalidation Boundaries",
    "label": "Core Track",
    "body": "### Range-Extreme Invalidation: Dynamic Adjustment of Invalidation Boundaries\nMarket conditions are not static, requiring traders to adjust invalidation boundaries dynamically. This card details **how to adapt invalidation points as market conditions evolve**.\n\n* **Volatility-Based Adjustments**: Use ATR (Average True Range) to adjust invalidation points. If ATR increases, widen invalidation boundaries to accommodate higher volatility without premature stop-outs.\n* **Liquidity Event Reactions**: Adjust invalidation boundaries post-major liquidity events like FOMC announcements. Allow for wider boundaries to prevent whipsaw effects.\n* **Trend Continuation Signals**: If a trend continuation signal is confirmed, adjust invalidation to the most recent swing low/high to protect against trend reversals.",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Boundary",
          "definition": "A price level where a trade hypothesis is considered invalid."
        },
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        }
      ],
      "whyThisMatters": "Dynamic adjustment prevents premature exits and aligns your strategy with real-time market conditions.",
      "realLifeExample": "During a volatile session, EURUSD spikes 50 pips post-ECB announcement. Adjusting the invalidation boundary using ATR prevents a stop-out during the retracement.",
      "commonMistake": "Failing to adjust invalidation boundaries during high-impact news events, leading to unnecessary stop-outs.",
      "quickNote": "Adapt invalidation boundaries to market volatility to maintain trade integrity.",
      "mentorText": "Think of your invalidation boundary like a ship's hull. In calm waters, it can be close to the surface, but in rough seas, it needs to be deeper to avoid capsizing.",
      "mentorAnalogy": "Just like an engineer adjusts a bridge's tension cables based on wind conditions, traders must adjust invalidation boundaries based on market volatility."
    },
    "taskData": null,
    "visualKey": "range-extreme-invalidation"
  },
  {
    "type": "concept",
    "title": "Multi-Timeframe Invalidation Analysis",
    "label": "Core Track",
    "body": "### Structural vs. Time Invalidation: Multi-Timeframe Invalidation Analysis\nIncorporating multiple timeframes enhances the precision of invalidation boundaries. This card explains **how to integrate multi-timeframe analysis for robust invalidation placement**.\n\n* **Higher Timeframe Confirmation**: Validate invalidation points on higher timeframes to ensure alignment with broader market structure. A 4-hour resistance level should be respected on a 1-hour trade setup.\n* **Lower Timeframe Refinement**: Use lower timeframes to refine entry and exit points. A 15-minute chart can help pinpoint precise invalidation levels within a broader trend.\n* **Cross-Timeframe Consistency**: Ensure invalidation boundaries do not conflict across timeframes. A boundary on a daily chart should not contradict a 1-hour chart's trend direction.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "Analyzing the same instrument across different timeframes to gain a comprehensive view."
        },
        {
          "term": "Market Structure",
          "definition": "The overall trend and pattern of price movement in a market."
        }
      ],
      "whyThisMatters": "Multi-timeframe analysis ensures that invalidation boundaries are not only precise but also contextually relevant.",
      "realLifeExample": "A trader identifies a support level on the daily chart for GBPJPY, then refines the invalidation point using the 1-hour chart to capture a more precise entry.",
      "commonMistake": "Ignoring higher timeframe structures, leading to invalidation boundaries that conflict with the broader trend.",
      "quickNote": "Align invalidation boundaries across timeframes for cohesive trade strategy.",
      "mentorText": "Think of multi-timeframe analysis like a pilot checking weather conditions at different altitudes. You need a full picture to navigate safely.",
      "mentorAnalogy": "Like a surgeon using multiple imaging techniques before an operation, traders should use multiple timeframes to ensure precision in their invalidation boundaries."
    },
    "taskData": null,
    "visualKey": "structural-vs-time-invalidation"
  },
  {
    "type": "concept",
    "title": "Aligning Invalidation with Risk-Reward",
    "label": "Core Track",
    "body": "### Mapping Invalidation Drill: Aligning Invalidation with Risk-Reward\nAligning invalidation boundaries with risk-reward strategies is crucial for optimizing trade outcomes. This card covers **how to ensure invalidation points are consistent with your risk-reward profile**.\n\n* **Risk-Reward Ratio Calibration**: Set invalidation points that maintain a minimum 1:2 risk-reward ratio. This ensures that potential losses are outweighed by potential gains.\n* **Position Sizing Adjustments**: Adjust position sizes based on the distance to the invalidation point. Larger distances require smaller positions to maintain consistent risk.\n* **Profit Target Alignment**: Ensure that invalidation boundaries do not interfere with realistic profit targets. If a target is too close to an invalidation point, reassess the trade setup.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of potential profit to potential loss in a trade."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to risk on a single trade."
        }
      ],
      "whyThisMatters": "Proper alignment of invalidation boundaries with risk-reward strategies maximizes profitability and minimizes unnecessary risk.",
      "realLifeExample": "A trader sets a stop loss for USDJPY at 30 pips with a target of 60 pips, ensuring a 1:2 risk-reward ratio. The invalidation point is adjusted to maintain this ratio.",
      "commonMistake": "Setting invalidation points too close to entry, leading to frequent stop-outs and poor risk-reward ratios.",
      "quickNote": "Align invalidation with risk-reward to optimize trade outcomes.",
      "mentorText": "Your invalidation point is like a safety net. It should be placed where it protects you without limiting your potential to achieve your target.",
      "mentorAnalogy": "Just as an architect designs a building with both safety and aesthetics in mind, traders must balance risk and reward when setting invalidation boundaries."
    },
    "taskData": null,
    "visualKey": "mapping-invalidation-drill"
  },
  {
    "type": "concept",
    "title": "Overcoming Psychological Barriers in Invalidation",
    "label": "Core Track",
    "body": "### Invalidation Debrief: Overcoming Psychological Barriers in Invalidation\nPsychological barriers can interfere with setting effective invalidation boundaries. This card identifies **how to recognize and overcome these barriers**.\n\n* **Emotional Detachment**: Develop a systematic approach to setting invalidation points, reducing emotional bias. Use predefined criteria rather than gut feelings.\n* **Confirmation Bias Awareness**: Be aware of confirmation bias, which can lead to overly optimistic invalidation boundaries. Regularly review past trades to identify bias patterns.\n* **Accountability Mechanisms**: Implement accountability measures, such as trading journals or peer reviews, to ensure invalidation boundaries are objectively set.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Bias",
          "definition": "The tendency to favor information that confirms existing beliefs."
        },
        {
          "term": "Emotional Detachment",
          "definition": "The ability to make decisions without emotional influence."
        }
      ],
      "whyThisMatters": "Overcoming psychological barriers ensures that invalidation boundaries are set based on objective analysis rather than emotional reactions.",
      "realLifeExample": "A trader consistently sets tight stops on NASDAQ futures due to fear of loss, resulting in frequent stop-outs. Implementing a trading journal helps identify and correct this pattern.",
      "commonMistake": "Allowing fear or greed to dictate invalidation points, leading to inconsistent trading outcomes.",
      "quickNote": "Objective invalidation setting mitigates emotional trading errors.",
      "mentorText": "Think of your invalidation point as a decision made by a committee, not just you. It needs to be objective and not swayed by your current mood.",
      "mentorAnalogy": "Like a pilot relying on instruments rather than gut feeling during a storm, traders must rely on objective criteria for setting invalidation boundaries."
    },
    "taskData": null,
    "visualKey": "invalidation-debrief"
  },
  {
    "type": "concept",
    "title": "Pattern Recognition for Invalidation",
    "label": "Core Track",
    "body": "### Invalidation Anatomy: Pattern Recognition for Invalidation\nUtilize pattern recognition techniques to enhance the precision of your invalidation boundary placements.\n\n* **Pattern Confirmation**: Identify specific chart patterns such as head and shoulders, double tops, or flags. An invalidation point is set beyond the pattern's structural boundary, ensuring the hypothesis is only invalidated if the pattern fails.\n* **Volume Analysis**: Use volume spikes to confirm pattern validity. An invalidation boundary should be placed where volume significantly decreases, indicating a potential reversal or pattern failure.\n* **Timeframe Alignment**: Align pattern recognition across multiple timeframes. An invalidation boundary is more robust when confirmed on both higher and lower timeframes, reducing the likelihood of false invalidations.",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Boundary",
          "definition": "A price level where a trade hypothesis is considered invalid."
        },
        {
          "term": "Pattern Recognition",
          "definition": "The process of identifying recurring price patterns to inform trading decisions."
        }
      ],
      "whyThisMatters": "Precision in invalidation boundaries minimizes unnecessary losses and refines trade hypotheses.",
      "realLifeExample": "A trader identifies a head and shoulders pattern on the EURUSD 1-hour chart. The invalidation boundary is set 15 pips above the right shoulder, ensuring the trade is only invalidated if the pattern fails.",
      "commonMistake": "Setting invalidation boundaries too close to the pattern, leading to premature exits from trades.",
      "quickNote": "Patterns guide invalidation; boundaries confirm it.",
      "mentorText": "When you spot a pattern, your invalidation boundary should be like a safety net, placed just beyond where the pattern would naturally fail.",
      "mentorAnalogy": "Think of pattern recognition like a structural engineer assessing a bridge. The invalidation boundary is where the bridge would collapse if the design fails."
    },
    "taskData": null,
    "visualKey": "invalidation-anatomy"
  },
  {
    "type": "practice",
    "title": "Invalidation Boundary Practice Scenarios",
    "label": "Core Track",
    "body": "### Trend Structure Invalidation: Practice Scenarios\nApply your knowledge in simulated trading scenarios to practice setting and adjusting invalidation boundaries.\n\n* **Scenario Analysis**: Evaluate given market scenarios with different trend structures. Determine the optimal invalidation boundary based on trend continuation or reversal patterns.\n* **Boundary Adjustment**: Practice adjusting invalidation boundaries in response to evolving market conditions, such as unexpected news events or volatility spikes.\n* **Risk Assessment**: Calculate the risk associated with each invalidation boundary placement, ensuring it aligns with your overall risk management strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Trend Structure",
          "definition": "The overall direction and pattern of price movement in a market."
        },
        {
          "term": "Boundary Adjustment",
          "definition": "The process of modifying an invalidation boundary in response to market changes."
        }
      ],
      "whyThisMatters": "Practical application of invalidation boundaries solidifies theoretical understanding and enhances real-world trading skills.",
      "realLifeExample": "In a simulated environment, a trader sets an invalidation boundary for a GBPUSD uptrend. After a sudden Brexit announcement, the trader adjusts the boundary to account for increased volatility.",
      "commonMistake": "Failing to adjust invalidation boundaries when market conditions change, leading to ineffective risk management.",
      "quickNote": "Practice makes precision in boundary setting.",
      "mentorText": "In practice scenarios, treat each setup like a live trade. Adjust your boundaries as if real money is at stake.",
      "mentorAnalogy": "Imagine a pilot in a flight simulator. Adjusting the course for turbulence is akin to modifying your invalidation boundary in response to market shifts."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated scenario, the USDJPY is in a strong uptrend. Where should you place your invalidation boundary?",
      "options": [
        {
          "id": "0",
          "text": "Just below the most recent higher low.",
          "isCorrect": true,
          "feedback": "Correct. Placing the boundary below the higher low accounts for trend continuation."
        },
        {
          "id": "1",
          "text": "At the current market price.",
          "isCorrect": false,
          "feedback": "Incorrect. This does not allow for natural market fluctuations."
        },
        {
          "id": "2",
          "text": "Far below the previous swing low.",
          "isCorrect": false,
          "feedback": "Incorrect. This places the boundary too far, increasing risk unnecessarily."
        },
        {
          "id": "3",
          "text": "Above the most recent higher high.",
          "isCorrect": false,
          "feedback": "Incorrect. This would not protect against a reversal."
        }
      ]
    },
    "visualKey": "trend-structure-invalidation"
  },
  {
    "type": "summary",
    "title": "Summary of Invalidation Planning",
    "label": "Core Track",
    "body": "### Range Extreme Invalidation: Summary of Invalidation Planning\nReview the key concepts of invalidation planning, ensuring a comprehensive understanding of structural boundary setting.\n\n* **Boundary Placement**: Ensure invalidation boundaries are set at logical structural points, such as previous highs/lows or pattern breakpoints, to confirm hypothesis invalidation.\n* **Dynamic Adjustment**: Continuously reassess and adjust boundaries based on market conditions, ensuring they remain relevant and effective.\n* **Risk Management Integration**: Integrate invalidation boundaries within your broader risk management strategy, balancing potential losses with trade opportunities.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Boundary",
          "definition": "A price level that represents a logical point for invalidating a trade hypothesis."
        },
        {
          "term": "Dynamic Adjustment",
          "definition": "The process of modifying trading parameters in response to changing market conditions."
        }
      ],
      "whyThisMatters": "Comprehensive invalidation planning is essential for maintaining disciplined and objective trading strategies.",
      "realLifeExample": "A trader reviews their invalidation strategy for the AUDUSD, ensuring boundaries are set at key structural points and adjusted for upcoming economic data releases.",
      "commonMistake": "Neglecting to review and adjust invalidation boundaries, leading to outdated and ineffective trading plans.",
      "quickNote": "Boundaries are not static; adapt them as markets evolve.",
      "mentorText": "Think of invalidation planning as your trade's safety protocol. It's not just about setting it once; it's about continuous evaluation and adjustment.",
      "mentorAnalogy": "Consider an architect who revises building plans as new regulations or materials become available. Similarly, adjust your invalidation boundaries as market conditions change."
    },
    "taskData": null,
    "visualKey": "range-extreme-invalidation"
  }
];
