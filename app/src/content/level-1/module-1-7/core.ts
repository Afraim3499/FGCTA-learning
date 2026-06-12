import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Confirmation Requirements",
    "label": "Core Track",
    "body": "### Confirmation Requirement: Structural Verification Necessity\nConfirmation requirements ensure that trading strategies are activated only after structural verification criteria are met.\n\n* **Risk Mitigation**: Implementing confirmation requirements reduces the likelihood of entering trades based on false signals. This structural verification acts as a safeguard against premature execution.\n* **Consistency in Execution**: By establishing clear confirmation criteria, traders maintain consistency in their decision-making process, reducing emotional bias and impulsive actions.\n* **Enhanced Strategy Validation**: Confirmation acts as a final checkpoint, ensuring that all elements of the trading plan align before execution, thus increasing the probability of success.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Requirement",
          "definition": "A set of criteria that must be met before a trading plan is activated."
        }
      ],
      "whyThisMatters": "Confirmation requirements prevent premature trade entries and enhance the reliability of trading strategies.",
      "realLifeExample": "A trader waits for a bullish engulfing pattern on the S&P 500 to close above a key resistance level before entering a long position.",
      "commonMistake": "Relying on a single indicator without structural confirmation often leads to false entries.",
      "quickNote": "Confirmation is your final checkpoint before trade execution.",
      "mentorText": "Think of confirmation as your pre-flight checklist. You don't take off until all systems are go.",
      "mentorAnalogy": "Just as a pilot verifies all systems before takeoff, a trader must confirm all signals before executing a trade."
    },
    "taskData": null,
    "visualKey": "confirmation-intro"
  },
  {
    "type": "concept",
    "title": "Evaluating Candle Close Quality",
    "label": "Core Track",
    "body": "### Candle Close Quality: Confirmation Parameter\nAssessing candle close quality is crucial for validating trade setups, focusing on the strength and position of the close.\n\n* **Strong Close Definition**: A strong close occurs when a candle closes near its high or low, indicating momentum in the direction of the close. This is a key indicator of potential continuation.\n* **Rejection and Wick Analysis**: Long wicks with weak closes suggest rejection at key levels, indicating potential reversals or indecision. Avoid setups with such characteristics.\n* **Contextual Alignment**: Ensure that the candle close aligns with the broader market context, such as trend direction or support/resistance levels, for confirmation.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Close Quality",
          "definition": "The assessment of where a candle closes relative to its range and context."
        }
      ],
      "whyThisMatters": "Candle close quality provides insight into market sentiment and potential future price movement.",
      "realLifeExample": "On the EURUSD, a daily candle closes at its high after a breakout above resistance, confirming bullish momentum.",
      "commonMistake": "Entering trades based on candles with long wicks and weak closes often leads to false breakouts.",
      "quickNote": "A strong close near extremes signals conviction.",
      "mentorText": "Evaluate a candle's close like a surgeon checks a vital sign—it's a critical indicator of market health.",
      "mentorAnalogy": "A strong candle close is like a decisive finish in a race, showing clear direction and momentum."
    },
    "taskData": null,
    "visualKey": "close-quality-confirmation"
  },
  {
    "type": "concept",
    "title": "Volume Follow-Through Analysis",
    "label": "Core Track",
    "body": "### Volume Follow-Through: Structural Verification\nVolume follow-through is essential for confirming trade setups, as it indicates the strength and sustainability of price movements.\n\n* **Volume Surge Confirmation**: A significant increase in volume accompanying a price move suggests strong participation and validates the move's legitimacy.\n* **Divergence Warning**: A price move lacking corresponding volume increase may indicate a lack of conviction, signaling potential reversals or false breakouts.\n* **Contextual Volume Patterns**: Analyze volume in the context of historical patterns and market conditions to determine if the follow-through is consistent with past behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Follow-Through",
          "definition": "The continuation of volume activity supporting a price move."
        }
      ],
      "whyThisMatters": "Volume follow-through confirms the strength and validity of price movements, reducing the risk of false entries.",
      "realLifeExample": "A breakout in Tesla stock is accompanied by a 50% increase in average volume, confirming the breakout's strength.",
      "commonMistake": "Ignoring volume can lead to entering trades based on weak or unsustainable price moves.",
      "quickNote": "Volume validates price movement strength.",
      "mentorText": "Volume is the engine behind price moves. Without it, you're running on fumes.",
      "mentorAnalogy": "Volume follow-through is like a crowd cheering a marathon runner—it's the support that pushes the move forward."
    },
    "taskData": null,
    "visualKey": "follow-through-confirmation"
  },
  {
    "type": "concept",
    "title": "Identifying Failed Confirmation Traps",
    "label": "Core Track",
    "body": "### Failed Confirmation Traps: Avoiding Pitfalls\nIdentifying failed confirmation traps is crucial to avoid entering trades based on misleading signals.\n\n* **False Breakout Detection**: A common trap occurs when price temporarily breaches a key level but fails to sustain the move, leading to a reversal. Look for lack of volume or weak closes as warning signs.\n* **Reversal Pattern Recognition**: Patterns such as head and shoulders or double tops/bottoms can signal failed confirmations. Validate these patterns with volume and context.\n* **Contextual Misalignment**: Ensure that the confirmation aligns with broader market trends and conditions. Misalignment often results in failed confirmations.",
    "context": {
      "keyTerms": [
        {
          "term": "Failed Confirmation Trap",
          "definition": "A situation where a signal appears valid but fails to follow through."
        }
      ],
      "whyThisMatters": "Avoiding failed confirmation traps prevents unnecessary losses and enhances trade accuracy.",
      "realLifeExample": "A false breakout on the NASDAQ Composite index is identified by a lack of volume and a quick reversal below the breakout level.",
      "commonMistake": "Entering trades on initial breakouts without waiting for confirmation often leads to losses.",
      "quickNote": "Verify confirmation to avoid traps.",
      "mentorText": "Think of failed confirmations like a mirage in the desert—what seems real can quickly disappear.",
      "mentorAnalogy": "Avoiding failed confirmation traps is like a detective verifying alibis—ensure the story holds up under scrutiny."
    },
    "taskData": null,
    "visualKey": "failed-confirmation-trap"
  },
  {
    "type": "concept",
    "title": "Debriefing Confirmation Parameters",
    "label": "Core Track",
    "body": "### Confirmation Debrief: Synthesizing Parameters\nReviewing confirmation parameters ensures a comprehensive understanding of trade verification. This card focuses on **how to synthesize various confirmation parameters for effective trade validation**.\n\n* **Parameter Integration**: Combine technical indicators, price action signals, and volume analysis to form a cohesive confirmation strategy. Each parameter should complement the others to provide a robust verification framework.\n* **Scenario Analysis**: Regularly debrief past trades to assess the effectiveness of your confirmation parameters. Identify patterns where parameters aligned successfully and where they failed.\n* **Adaptation and Refinement**: Continuously refine your parameters based on market conditions and personal trading style. Adaptation is key to maintaining a relevant and effective confirmation strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Parameters",
          "definition": "A set of criteria used to verify the validity of a trade setup before execution."
        }
      ],
      "whyThisMatters": "Synthesizing confirmation parameters ensures that traders have a robust framework for validating trades, reducing the likelihood of false signals.",
      "realLifeExample": "A trader reviews a EURUSD trade where the RSI, moving average crossover, and volume spike all aligned, leading to a successful trade. They debrief to understand why these parameters worked together.",
      "commonMistake": "Failing to review and adapt confirmation parameters regularly, leading to outdated strategies.",
      "quickNote": "Debriefing parameters is crucial for refining trade verification.",
      "mentorText": "Think of debriefing as your post-flight analysis. You need to understand how each instrument performed to ensure a smooth journey next time.",
      "mentorAnalogy": "Like a pilot reviewing a flight log, you must debrief your confirmation parameters to understand what worked and what needs adjustment."
    },
    "taskData": null,
    "visualKey": "confirmation-debrief"
  },
  {
    "type": "concept",
    "title": "Defining Confirmation Parameters",
    "label": "Core Track",
    "body": "### Confirmation Criteria: Establishing Parameters\nDefining confirmation parameters is essential for verifying trade setups before execution. This card outlines **how to establish a set of criteria for effective trade confirmation**.\n\n* **Technical Indicator Selection**: Choose indicators that align with your trading strategy, such as moving averages or MACD, to confirm trend direction and momentum.\n* **Price Action Validation**: Use candlestick patterns or support and resistance levels to confirm entry points. Ensure these align with your technical indicators for stronger validation.\n* **Volume Confirmation**: Incorporate volume analysis to confirm the strength of a price move. High volume on breakout confirms the move's validity.",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Indicators",
          "definition": "Tools used to analyze price movements and trends in trading."
        }
      ],
      "whyThisMatters": "Establishing clear confirmation parameters helps traders avoid impulsive decisions and ensures trades are based on objective criteria.",
      "realLifeExample": "A trader uses a moving average crossover and a bullish engulfing pattern on the S&P 500 to confirm a long entry, ensuring both technical and price action criteria are met.",
      "commonMistake": "Relying on a single indicator without cross-verifying with other parameters, leading to false confirmations.",
      "quickNote": "Define clear parameters for consistent trade verification.",
      "mentorText": "Before you execute a trade, ensure your confirmation parameters are like a checklist—each box must be ticked.",
      "mentorAnalogy": "Like a surgeon preparing for an operation, you must have a checklist of confirmation parameters to ensure everything is in place before proceeding."
    },
    "taskData": null,
    "visualKey": "confirmation-intro"
  },
  {
    "type": "concept",
    "title": "Multi-Timeframe Confirmation Strategies",
    "label": "Core Track",
    "body": "### Multi-Timeframe Analysis: Enhancing Confirmation\nUsing multiple timeframes enhances confirmation accuracy by ensuring structural alignment across different chart perspectives. This card explores **how to implement multi-timeframe strategies for stronger trade validation**.\n\n* **Top-Down Analysis**: Start with a higher timeframe to identify the primary trend, then move to lower timeframes for precise entry points. This ensures alignment with the broader market context.\n* **Timeframe Synchronization**: Ensure that signals on lower timeframes are supported by the trend on higher timeframes. Misalignment can lead to premature entries or exits.\n* **Cross-Timeframe Signal Confirmation**: Validate signals by checking for consistency across multiple timeframes. A breakout on a 1-hour chart should be supported by trend direction on a daily chart.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "The practice of analyzing multiple timeframes to gain a comprehensive view of market trends and signals."
        }
      ],
      "whyThisMatters": "Multi-timeframe analysis provides a holistic view of the market, reducing the risk of false signals and improving trade accuracy.",
      "realLifeExample": "A trader confirms a bullish trend on the daily chart of GBPUSD and waits for a pullback on the 4-hour chart to enter, ensuring alignment across timeframes.",
      "commonMistake": "Ignoring higher timeframe trends, leading to trades that go against the broader market direction.",
      "quickNote": "Use multiple timeframes for a comprehensive market view.",
      "mentorText": "Think of multi-timeframe analysis like checking the weather forecast for different days before planning a trip. You need to see the big picture and the details.",
      "mentorAnalogy": "Like an architect reviewing both the blueprint and the detailed floor plan, you must ensure all timeframes align before building your trade."
    },
    "taskData": null,
    "visualKey": "close-quality-confirmation"
  },
  {
    "type": "concept",
    "title": "Assessing Confirmation Signal Strength",
    "label": "Core Track",
    "body": "### Signal Strength Evaluation: Distinguishing Confirmation\nEvaluating the strength of confirmation signals is crucial for trade validation. This card focuses on **how to distinguish between weak and strong signals for effective trade decisions**.\n\n* **Signal Clarity**: Strong signals are clear and unambiguous, often supported by multiple indicators or price patterns. Weak signals are vague and lack supporting evidence.\n* **Volume and Momentum**: Assess the volume and momentum behind a signal. Strong signals are typically accompanied by high volume and strong momentum, indicating genuine market interest.\n* **Historical Context**: Compare current signals with historical data to determine their reliability. A pattern that has consistently led to successful trades in the past is likely to be stronger.",
    "context": {
      "keyTerms": [
        {
          "term": "Signal Strength",
          "definition": "The reliability and clarity of a trading signal, indicating its potential effectiveness."
        }
      ],
      "whyThisMatters": "Assessing signal strength helps traders avoid weak setups and focus on high-probability trades, enhancing overall performance.",
      "realLifeExample": "A trader identifies a strong bullish signal on Apple stock, supported by a MACD crossover, high volume, and a historical uptrend, leading to a successful trade.",
      "commonMistake": "Entering trades based on weak signals without sufficient confirmation, resulting in losses.",
      "quickNote": "Evaluate signal strength for high-probability trades.",
      "mentorText": "When assessing signals, think of it like evaluating a candidate's resume. You want clear, strong evidence of their capabilities, not vague claims.",
      "mentorAnalogy": "Like a detective assessing evidence, you must distinguish between strong, clear signals and weak, circumstantial ones before making a decision."
    },
    "taskData": null,
    "visualKey": "follow-through-confirmation"
  },
  {
    "type": "concept",
    "title": "Identifying Reliable Confirmation Patterns",
    "label": "Core Track",
    "body": "### Failed-Confirmation Trap: Recognizing Confirmation Patterns\nSpecific chart patterns act as reliable confirmation signals, enhancing structural verification.\n\n* **Double Bottom/Top Confirmation**: A double bottom or top pattern is confirmed when the price breaks the neckline with a strong close. Avoid entering trades on mere touches or wicks.\n* **Bullish/Bearish Engulfing Patterns**: These patterns require a full-bodied candle that engulfs the previous candle. Confirmations are invalid if the engulfing candle lacks volume or momentum.\n* **Head and Shoulders Confirmation**: The pattern is confirmed only when the neckline is broken with a decisive close. Premature entries before the neckline break are considered traps.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Pattern",
          "definition": "A chart pattern that provides a signal for trade entry or continuation."
        }
      ],
      "whyThisMatters": "Recognizing reliable confirmation patterns prevents premature entries and enhances trade accuracy.",
      "realLifeExample": "A EURUSD double bottom forms at 1.1000, but only confirms when the price closes above 1.1050, avoiding a false breakout.",
      "commonMistake": "Entering trades based on incomplete patterns without waiting for a confirmed close.",
      "quickNote": "Confirmation patterns require a decisive close, not just a touch.",
      "mentorText": "Don't jump the gun on a pattern. Wait for the market to confirm with a strong close before you commit.",
      "mentorAnalogy": "Think of confirmation patterns like a pilot waiting for all systems to check green before takeoff. A false signal can lead to a crash."
    },
    "taskData": null,
    "visualKey": "failed-confirmation-trap"
  },
  {
    "type": "concept",
    "title": "Synchronizing Confirmation with Market Timing",
    "label": "Core Track",
    "body": "### Confirmation Debrief: Timing in Confirmation Processes\nTiming is crucial in confirmation processes, ensuring synchronization with market conditions.\n\n* **Session Timing Alignment**: Confirmations should align with major session openings or closings to leverage liquidity and volatility. Avoid confirmations during low-volume periods.\n* **News Event Synchronization**: Avoid confirming trades immediately before or after major news events. Allow the market to absorb the news impact first.\n* **Timeframe Consistency**: Ensure that confirmations on higher timeframes align with lower timeframe entries to avoid conflicting signals.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Timing",
          "definition": "The strategic timing of trade entries and exits based on market conditions."
        }
      ],
      "whyThisMatters": "Proper timing in confirmations prevents entering trades during periods of low liquidity or high volatility spikes.",
      "realLifeExample": "A GBPUSD trade waits for confirmation at the London open rather than during the Asian session to ensure liquidity.",
      "commonMistake": "Confirming trades during low-volume periods, leading to false signals.",
      "quickNote": "Align confirmations with session times for optimal liquidity.",
      "mentorText": "Timing is everything. Confirm your trades when the market is most active to ensure your signals are reliable.",
      "mentorAnalogy": "Like a surgeon waiting for the right moment to make an incision, timing your confirmations ensures precision and reduces risk."
    },
    "taskData": null,
    "visualKey": "confirmation-debrief"
  },
  {
    "type": "concept",
    "title": "Mitigating Risks of Confirmation Failures",
    "label": "Core Track",
    "body": "### Confirmation Intro: Analyzing Confirmation Failures\nInvestigate common reasons for confirmation failures and develop strategies to mitigate these risks.\n\n* **Volume Discrepancy**: A lack of volume during confirmation can lead to false signals. Ensure volume supports the price action.\n* **Market Sentiment Shifts**: Sudden shifts in market sentiment can invalidate confirmations. Monitor sentiment indicators to anticipate changes.\n* **Technical Misalignment**: Ensure that confirmations align with broader technical trends. Conflicting signals across timeframes can indicate a failure.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Failure",
          "definition": "A situation where a confirmation signal does not lead to the expected market move."
        }
      ],
      "whyThisMatters": "Understanding why confirmations fail helps refine strategies and avoid repeating mistakes.",
      "realLifeExample": "A USDJPY trade confirms a breakout, but low volume leads to a reversal, highlighting the need for volume verification.",
      "commonMistake": "Ignoring volume and sentiment, leading to reliance on weak confirmations.",
      "quickNote": "Volume and sentiment are key to reliable confirmations.",
      "mentorText": "Don't just look at the pattern; look at the context. Volume and sentiment must back your confirmation.",
      "mentorAnalogy": "It's like a builder ensuring the foundation is solid before constructing a skyscraper. Without it, the structure is at risk."
    },
    "taskData": null,
    "visualKey": "confirmation-intro"
  },
  {
    "type": "concept",
    "title": "Integrating Confirmation into Risk Management",
    "label": "Core Track",
    "body": "### Close-Quality Confirmation: Integrating Confirmation with Risk Management\nIncorporate confirmation criteria into risk management strategies to enhance trade safety and effectiveness.\n\n* **Risk-Reward Calibration**: Use confirmations to adjust risk-reward ratios. A strong confirmation allows for tighter stops and larger targets.\n* **Position Sizing Adjustment**: Increase position size only after a reliable confirmation, reducing exposure on weaker signals.\n* **Stop-Loss Placement**: Place stop-loss orders based on confirmed levels, not speculative ones, to minimize risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling risks in trading."
        }
      ],
      "whyThisMatters": "Integrating confirmations into risk management ensures that trades are both strategically sound and protected.",
      "realLifeExample": "A confirmed breakout in EURUSD allows for a 1:3 risk-reward setup with a stop-loss just below the breakout level.",
      "commonMistake": "Setting stop-losses based on unconfirmed levels, leading to premature exits.",
      "quickNote": "Confirmed levels enhance risk management precision.",
      "mentorText": "Use confirmations to refine your risk parameters. They give you the confidence to adjust your stops and targets.",
      "mentorAnalogy": "Like a pilot adjusting flight path based on confirmed weather reports, confirmations guide your risk management decisions."
    },
    "taskData": null,
    "visualKey": "close-quality-confirmation"
  },
  {
    "type": "concept",
    "title": "Adapting Confirmation to Market Changes",
    "label": "Core Track",
    "body": "### Follow-Through Confirmation: Adapting to Market Changes\nMarket conditions are dynamic, requiring traders to adapt their confirmation criteria to maintain trade validity.\n\n* **Volatility Adjustment**: When market volatility increases, confirmation criteria must be adjusted to require stronger price action signals, such as a larger candlestick body or multiple consecutive closes in the intended direction.\n* **Liquidity Considerations**: In periods of low liquidity, confirmation should include additional checks like volume analysis to ensure that price movements are not merely noise.\n* **Timeframe Synchronization**: Align confirmation criteria with the dominant timeframe. If the market shifts from a daily to an intraday focus, adjust confirmation to reflect shorter-term price structures.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over a period of time."
        },
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        },
        {
          "term": "Timeframe Synchronization",
          "definition": "Aligning trading strategies with the relevant market timeframe."
        }
      ],
      "whyThisMatters": "Traders must adapt confirmation criteria to ensure their strategies remain effective under changing market conditions.",
      "realLifeExample": "During a sudden increase in EURUSD volatility due to unexpected ECB announcements, traders require a 50-pip candlestick close beyond a key level for confirmation, rather than the usual 20 pips.",
      "commonMistake": "Relying on static confirmation criteria regardless of market changes, leading to false signals.",
      "quickNote": "Adapt confirmation to match market conditions for sustained trade validity.",
      "mentorText": "Imagine you're flying a plane and the weather changes mid-flight. You wouldn't keep the same course without adjusting for wind speed and direction. Trading is no different; adapt your confirmation criteria as the market shifts.",
      "mentorAnalogy": "A pilot adjusts flight controls based on changing wind conditions to maintain course. Similarly, traders must adjust confirmation criteria to align with market volatility and liquidity."
    },
    "taskData": null,
    "visualKey": "follow-through-confirmation"
  },
  {
    "type": "practice",
    "title": "Practical Application of Confirmation Criteria",
    "label": "Core Track",
    "body": "### Failed Confirmation Trap: Practical Application\nEngage in exercises to apply confirmation criteria in simulated trading scenarios, reinforcing structural verification skills.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Criteria",
          "definition": "Specific conditions that must be met to validate a trading setup."
        },
        {
          "term": "Structural Verification",
          "definition": "The process of confirming a trade setup through objective criteria."
        }
      ],
      "whyThisMatters": "Applying confirmation criteria in practice helps traders avoid entering trades based on incomplete or false signals.",
      "realLifeExample": "A trader sees a potential breakout in GBPJPY but waits for a close above resistance with increased volume as confirmation before entering.",
      "commonMistake": "Entering trades without waiting for full confirmation, leading to premature or false entries.",
      "quickNote": "Practice applying confirmation to avoid false entries.",
      "mentorText": "Think of confirmation criteria like a checklist before takeoff. You don't leave the ground until every item is checked. Similarly, don't enter a trade until all confirmation criteria are met.",
      "mentorAnalogy": "A surgeon follows a checklist before an operation to ensure all conditions are optimal. Traders must do the same with confirmation criteria before executing a trade."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated scenario, the S&P 500 approaches a key resistance level. What confirmation criteria should you apply before entering a trade?",
      "options": [
        {
          "id": "0",
          "text": "Wait for a daily close above resistance with increased volume.",
          "isCorrect": true,
          "feedback": "Correct. A daily close with increased volume confirms the breakout strength."
        },
        {
          "id": "1",
          "text": "Enter immediately as the price touches the resistance level.",
          "isCorrect": false,
          "feedback": "Incorrect. Entering without confirmation risks a false breakout."
        },
        {
          "id": "2",
          "text": "Place a trade based on a 5-minute chart close above resistance.",
          "isCorrect": false,
          "feedback": "Incorrect. A 5-minute close may not provide sufficient confirmation for a significant level."
        },
        {
          "id": "3",
          "text": "Wait for a candlestick pattern to form below resistance.",
          "isCorrect": false,
          "feedback": "Incorrect. This does not confirm a breakout above resistance."
        }
      ]
    },
    "visualKey": "failed-confirmation-trap"
  },
  {
    "type": "summary",
    "title": "Summary of Confirmation Requirements",
    "label": "Core Track",
    "body": "### Confirmation Debrief: Summary of Requirements\nConsolidate knowledge of confirmation requirements, reviewing key concepts and strategies for effective structural verification.\n\n* **Dynamic Criteria**: Confirmation criteria must be adaptable to changing market conditions to ensure ongoing trade validity.\n* **Objective Verification**: Use objective measures such as price action, volume, and timeframe alignment to confirm trade setups.\n* **Avoiding False Signals**: Rigorously applying confirmation criteria helps prevent entering trades based on incomplete or misleading signals.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Criteria",
          "definition": "Adjustable conditions that change based on market environment."
        },
        {
          "term": "Objective Verification",
          "definition": "Using measurable and unbiased criteria to confirm trade setups."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of confirmation requirements is essential for maintaining a disciplined and objective trading approach.",
      "realLifeExample": "A trader uses a combination of candlestick patterns and volume spikes to confirm a reversal in USDJPY, ensuring the setup is valid before entering.",
      "commonMistake": "Failing to review and adapt confirmation criteria regularly, leading to outdated strategies.",
      "quickNote": "Review and adapt confirmation criteria for disciplined trading.",
      "mentorText": "Think of confirmation requirements as your pre-flight checklist. Without it, you're flying blind. Review and adapt it regularly to ensure every trade is based on solid ground.",
      "mentorAnalogy": "An architect reviews blueprints to ensure structural integrity before construction. Traders must review confirmation criteria to ensure trade integrity."
    },
    "taskData": null,
    "visualKey": "confirmation-debrief"
  }
];
