import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Trigger Design",
    "label": "Core Track",
    "body": "### Trigger Design: Precision in Activation\nDesigning precise activation triggers is essential for structured trading plans. This mission brief outlines **how to create triggers that activate plans without treating them as certainties**.\n\n* **Objective Activation**: Triggers must be objective and quantifiable, ensuring that they are based on specific criteria rather than subjective interpretation.\n* **Avoiding Certainty Bias**: Triggers should not be viewed as guarantees of success but as conditions that merely initiate a plan, maintaining flexibility for market changes.\n* **Structured Criteria**: Each trigger must be backed by a clear rationale, detailing the market conditions under which it should be activated.",
    "context": {
      "keyTerms": [
        {
          "term": "Trigger",
          "definition": "A predefined condition that activates a trading plan."
        },
        {
          "term": "Certainty Bias",
          "definition": "The tendency to treat a trigger as a guaranteed outcome."
        }
      ],
      "whyThisMatters": "Professional traders need precise triggers to avoid emotional decision-making and maintain discipline.",
      "realLifeExample": "A trader sets a trigger for EURUSD to activate a plan only if the price closes above 1.2000 on the daily chart.",
      "commonMistake": "Treating triggers as predictions rather than conditions for action.",
      "quickNote": "Triggers activate plans; they don't predict outcomes.",
      "mentorText": "Think of triggers as the green light at an intersection. They signal when to move, not where the road leads.",
      "mentorAnalogy": "Like a pilot waiting for a specific weather condition to take off, a trader uses triggers to ensure the right conditions are met before executing a plan."
    },
    "taskData": null,
    "visualKey": "trigger-design-intro"
  },
  {
    "type": "concept",
    "title": "Candle-Close Trigger Design",
    "label": "Core Track",
    "body": "### Candle-Close Triggers: Mechanics and Application\nCandle-close triggers rely on the completion of a candle to activate a plan. This card explores **how to use candle-close as a trigger to prevent premature execution**.\n\n* **Completion Confirmation**: Only activate a plan if the candle closes beyond a predefined level, confirming the market's direction.\n* **Avoiding Noise**: Candle-close triggers filter out intra-candle volatility, reducing the risk of false signals.\n* **Timeframe Relevance**: Select the appropriate timeframe for the candle-close trigger based on the trading strategy's time horizon.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle-Close Trigger",
          "definition": "A trigger activated by the closing price of a candle."
        },
        {
          "term": "Intra-Candle Volatility",
          "definition": "Price fluctuations occurring within the formation of a single candle."
        }
      ],
      "whyThisMatters": "Candle-close triggers help traders avoid reacting to temporary price movements, ensuring more reliable execution.",
      "realLifeExample": "A trader waits for the 4-hour candle to close above 1.2100 on GBPUSD before entering a long position.",
      "commonMistake": "Entering trades based on intra-candle movements rather than waiting for the candle to close.",
      "quickNote": "A closed candle confirms; an open candle can deceive.",
      "mentorText": "Wait for the candle to close like a photographer waits for the perfect light. Premature shots lead to blurry results.",
      "mentorAnalogy": "Just as a chef waits for a dish to finish cooking before serving, a trader waits for the candle to close to ensure the setup is fully 'cooked'."
    },
    "taskData": null,
    "visualKey": "candle-trigger-mechanics"
  },
  {
    "type": "concept",
    "title": "Price Level Trigger Design",
    "label": "Core Track",
    "body": "### Price Level Triggers: Identification and Utilization\nPrice level triggers are based on specific price points. This card details **how to identify and use key levels to activate trading plans effectively**.\n\n* **Key Level Identification**: Use historical data and technical analysis to determine significant support and resistance levels.\n* **Breakout Confirmation**: Triggers should activate only after a price level is clearly broken with volume, confirming the breakout.\n* **Risk Management Alignment**: Ensure that price level triggers align with risk management parameters, such as stop-loss and take-profit levels.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Level Trigger",
          "definition": "A trigger activated when price reaches a specific level."
        },
        {
          "term": "Breakout",
          "definition": "A price movement through a support or resistance level with increased volume."
        }
      ],
      "whyThisMatters": "Price level triggers help traders capitalize on significant market movements while maintaining control over risk.",
      "realLifeExample": "A trader sets a trigger to short EURJPY if it breaks below 130.00 with high volume during the London session.",
      "commonMistake": "Setting triggers at arbitrary levels without considering historical significance or volume.",
      "quickNote": "Price levels are the map; volume is the compass.",
      "mentorText": "Identify your key levels like a surveyor marking boundaries. Precision ensures you know exactly when to act.",
      "mentorAnalogy": "Like an architect using blueprints to determine where walls should be, a trader uses price levels to define where trades should be activated."
    },
    "taskData": null,
    "visualKey": "level-trigger-mechanics"
  },
  {
    "type": "concept",
    "title": "Time-Based Trigger Design",
    "label": "Core Track",
    "body": "### Time-Based Triggers: Timing and Execution\nTime-based triggers activate trades based on specific time intervals. This card explains **how to design triggers that execute based on timing without premature action**.\n\n* **Interval Selection**: Choose time intervals that align with market activity, such as session opens or economic releases.\n* **Avoiding Premature Entry**: Ensure that time-based triggers are set to activate after confirming signals, not before.\n* **Synchronization with Strategy**: Align time-based triggers with the overall trading strategy to maintain consistency and discipline.",
    "context": {
      "keyTerms": [
        {
          "term": "Time-Based Trigger",
          "definition": "A trigger activated at a specific time or interval."
        },
        {
          "term": "Session Opens",
          "definition": "The start of a major trading session, such as London or New York."
        }
      ],
      "whyThisMatters": "Time-based triggers allow traders to capitalize on predictable market movements tied to specific times.",
      "realLifeExample": "A trader sets a trigger to enter a trade at the New York open if the S&P 500 futures show a bullish pattern.",
      "commonMistake": "Activating trades based on arbitrary times without considering market context.",
      "quickNote": "Time is a trigger, not a guarantee.",
      "mentorText": "Use time as a tool, not a crutch. It tells you when to look, not when to leap.",
      "mentorAnalogy": "Like a train conductor following a schedule, a trader uses time-based triggers to ensure trades are executed at optimal times."
    },
    "taskData": null,
    "visualKey": "timing-trigger-mechanics"
  },
  {
    "type": "concept",
    "title": "Debriefing Trigger Design",
    "label": "Core Track",
    "body": "### Trigger Design: Debriefing and Refinement\nReviewing trigger design is essential to ensure alignment with trading strategies. This process involves analyzing and refining trigger mechanisms.\n\n* **Alignment with Strategy**: Ensure that each trigger aligns with the overarching strategy. Triggers should reflect the strategic objectives and not contradict the plan's core principles.\n* **Performance Analysis**: Regularly analyze the performance of triggers. Evaluate historical data to determine if triggers consistently lead to profitable outcomes or need adjustments.\n* **Feedback Loop**: Establish a feedback loop for continuous improvement. Use post-trade analysis to refine triggers, identifying patterns that indicate success or failure.",
    "context": {
      "keyTerms": [
        {
          "term": "Trigger Design",
          "definition": "The process of creating specific conditions that activate a trading plan."
        }
      ],
      "whyThisMatters": "Effective trigger design ensures that trades are executed in alignment with strategic objectives, minimizing emotional decisions.",
      "realLifeExample": "A trader reviews their EURUSD breakout strategy and finds that the trigger for entry was too sensitive, leading to premature trades during low volatility periods.",
      "commonMistake": "Failing to review and refine triggers regularly, leading to misalignment with evolving market conditions.",
      "quickNote": "Regular debriefing refines triggers to align with strategic goals.",
      "mentorText": "Think of trigger design as a checklist for a pilot. Each item must be checked and aligned with the flight plan before takeoff.",
      "mentorAnalogy": "Like a software engineer debugging code, you must review and refine triggers to ensure they function as intended."
    },
    "taskData": null,
    "visualKey": "trigger-design-debrief"
  },
  {
    "type": "concept",
    "title": "Preventing Premature Execution",
    "label": "Core Track",
    "body": "### Trigger Design: Preventing Premature Execution\nIdentifying pitfalls that lead to premature execution is crucial. This involves ensuring triggers are fully met before acting.\n\n* **Strict Criteria Enforcement**: Define clear and strict criteria for each trigger. Avoid vague conditions that can lead to premature execution.\n* **Confirmation Signals**: Require additional confirmation signals before executing a trade. This could include waiting for a candle close or a secondary indicator alignment.\n* **Patience Discipline**: Cultivate patience to wait for all conditions to be met. Premature execution often stems from impatience or fear of missing out.",
    "context": {
      "keyTerms": [
        {
          "term": "Premature Execution",
          "definition": "Executing a trade before all predefined trigger conditions are met."
        }
      ],
      "whyThisMatters": "Preventing premature execution protects against entering trades based on incomplete or misleading signals.",
      "realLifeExample": "A trader enters a long position on GBPUSD before the candle closes above resistance, only to see it reverse.",
      "commonMistake": "Rushing into trades without waiting for full confirmation, often due to impatience.",
      "quickNote": "Ensure all trigger conditions are met to avoid premature execution.",
      "mentorText": "Imagine you're a surgeon. You don't make the first incision until all pre-surgery checks are complete.",
      "mentorAnalogy": "Like a chess player waiting for the opponent's move, ensure all conditions are clear before making your move."
    },
    "taskData": null,
    "visualKey": "trigger-design-intro"
  },
  {
    "type": "concept",
    "title": "Synthesizing Multiple Triggers",
    "label": "Core Track",
    "body": "### Trigger Design: Synthesizing Multiple Triggers\nCombining different trigger types enhances trade activation robustness. Learn to synthesize candle, level, and timing triggers.\n\n* **Candle Confirmation**: Use candle patterns as primary triggers, ensuring they align with broader market context.\n* **Level Confluence**: Integrate key levels such as support and resistance to validate candle triggers. Confluence increases the reliability of the setup.\n* **Timing Synchronization**: Align triggers with specific market sessions or news events. Timing adds an additional layer of precision to the trade entry.",
    "context": {
      "keyTerms": [
        {
          "term": "Synthesizing Triggers",
          "definition": "The process of combining multiple trigger types to enhance trade entry reliability."
        }
      ],
      "whyThisMatters": "Synthesizing triggers increases the robustness of trade entries, reducing false signals.",
      "realLifeExample": "A trader waits for a bullish engulfing candle at a support level during the London session to enter a long position on USDJPY.",
      "commonMistake": "Relying on a single trigger type without considering additional confirming factors.",
      "quickNote": "Combine candle, level, and timing triggers for robust entries.",
      "mentorText": "Think of synthesizing triggers like a chef combining ingredients. Each element enhances the dish's flavor, creating a balanced result.",
      "mentorAnalogy": "Like an architect ensuring structural integrity by combining materials, synthesize triggers to strengthen trade entries."
    },
    "taskData": null,
    "visualKey": "candle-trigger-mechanics"
  },
  {
    "type": "concept",
    "title": "Trigger Validation Techniques",
    "label": "Core Track",
    "body": "### Trigger Design: Validation Techniques\nValidating trigger effectiveness is critical before implementation. Learn to test and confirm trigger reliability.\n\n* **Backtesting**: Conduct thorough backtesting of triggers against historical data. Identify patterns of success and failure to refine triggers.\n* **Forward Testing**: Implement triggers in a simulated environment to observe real-time performance. Adjust based on observed outcomes.\n* **Statistical Analysis**: Use statistical tools to measure trigger performance metrics such as win rate and risk-reward ratio.",
    "context": {
      "keyTerms": [
        {
          "term": "Trigger Validation",
          "definition": "The process of testing and confirming the reliability of trading triggers before implementation."
        }
      ],
      "whyThisMatters": "Validation ensures that triggers are reliable and effective, reducing the risk of false entries.",
      "realLifeExample": "A trader backtests a moving average crossover strategy on EURUSD, finding a 60% win rate over the past year.",
      "commonMistake": "Implementing triggers without adequate testing, leading to unreliable trade entries.",
      "quickNote": "Validate triggers through backtesting and forward testing for reliability.",
      "mentorText": "Validating triggers is like a pilot running simulations. You need to ensure everything works under various conditions before flying.",
      "mentorAnalogy": "Like a scientist testing a hypothesis through experiments, validate triggers to ensure they perform as expected."
    },
    "taskData": null,
    "visualKey": "level-trigger-mechanics"
  },
  {
    "type": "concept",
    "title": "Adaptive Trigger Design",
    "label": "Core Track",
    "body": "### Timing Trigger Mechanics: Adaptive Trigger Design\nTriggers must adapt to the fluid nature of markets. This card outlines **how to design triggers that adjust dynamically to maintain their effectiveness**.\n\n* **Volatility-Based Adjustments**: Modify trigger thresholds based on current market volatility. Use ATR (Average True Range) to scale entry points, ensuring triggers are neither too tight nor too loose.\n* **Session-Specific Modifications**: Adapt triggers to different trading sessions. A trigger effective in the London session may require recalibration for the New York session due to differing liquidity and volatility.\n* **Real-Time Data Integration**: Incorporate live data feeds to adjust triggers on-the-fly. This includes news events or sudden volume spikes that necessitate immediate trigger recalibration.",
    "context": {
      "keyTerms": [
        {
          "term": "Adaptive Trigger",
          "definition": "A trigger that adjusts its parameters based on changing market conditions."
        },
        {
          "term": "ATR (Average True Range)",
          "definition": "A technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        }
      ],
      "whyThisMatters": "Static triggers can become ineffective as market conditions change, leading to missed opportunities or increased risk.",
      "realLifeExample": "A trader using a 20-pip stop-loss trigger in EURUSD adjusts it to 30 pips during a high-volatility CPI release, maintaining the trade's viability.",
      "commonMistake": "Failing to adjust triggers for increased volatility, resulting in premature stop-outs or missed entries.",
      "quickNote": "Adapt triggers to market conditions like a pilot adjusts to weather.",
      "mentorText": "Think of your trigger like a thermostat. You wouldn't set it once and leave it, regardless of the weather outside. Adjust it to maintain comfort.",
      "mentorAnalogy": "An engineer designing a bridge considers varying loads and weather conditions. Similarly, your triggers must account for market 'weather' changes."
    },
    "taskData": null,
    "visualKey": "timing-trigger-mechanics"
  },
  {
    "type": "concept",
    "title": "Analyzing Trigger Failures",
    "label": "Core Track",
    "body": "### Trigger Design Debrief: Analyzing Trigger Failures\nUnderstanding why triggers fail is crucial for improvement. This card explains **how to analyze trigger failures to refine future designs**.\n\n* **Post-Event Analysis**: Review market conditions and price action post-trigger failure. Identify if the failure was due to unexpected volatility, news, or incorrect trigger placement.\n* **Pattern Recognition**: Document and categorize failures to identify recurring patterns. This helps in adjusting trigger parameters or strategies to avoid similar failures.\n* **Feedback Loop Creation**: Establish a systematic feedback loop to incorporate lessons from failures into future trigger designs, enhancing robustness over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Trigger Failure",
          "definition": "An instance where a trading trigger does not perform as expected, leading to a suboptimal outcome."
        },
        {
          "term": "Feedback Loop",
          "definition": "A process in which the outputs of a system are circled back and used as inputs."
        }
      ],
      "whyThisMatters": "Analyzing failures prevents repeated mistakes and enhances the effectiveness of future trigger designs.",
      "realLifeExample": "After a failed breakout trigger in GBPUSD, a trader reviews the event and finds it was due to a false breakout during low liquidity hours.",
      "commonMistake": "Ignoring trigger failures without analyzing the cause, leading to repeated errors.",
      "quickNote": "Every trigger failure is a lesson in disguise.",
      "mentorText": "When a trigger fails, don't just move on. Dissect it like a scientist to understand what went wrong and how to fix it.",
      "mentorAnalogy": "A surgeon reviews a failed procedure to understand what went wrong, ensuring future operations are more successful."
    },
    "taskData": null,
    "visualKey": "trigger-design-debrief"
  },
  {
    "type": "concept",
    "title": "Psychological Aspects of Trigger Design",
    "label": "Core Track",
    "body": "### Trigger Design Intro: Psychological Aspects of Trigger Design\nTrader psychology significantly impacts trigger execution. This card explores **how psychological factors influence trigger design and execution**.\n\n* **Emotional Bias Recognition**: Identify emotional biases such as fear and greed that can lead to premature trigger activation or hesitation.\n* **Confidence Calibration**: Ensure that triggers are designed to align with the trader's confidence levels, preventing overconfidence or excessive caution.\n* **Stress Management Techniques**: Implement stress management techniques to maintain clarity and discipline during trigger execution, reducing the impact of psychological stressors.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Bias",
          "definition": "A distortion in cognition and decision-making due to emotional influences."
        },
        {
          "term": "Confidence Calibration",
          "definition": "Adjusting one's confidence to match the actual probability of success."
        }
      ],
      "whyThisMatters": "Psychological factors can undermine even the most technically sound trigger designs, leading to execution errors.",
      "realLifeExample": "A trader hesitates to execute a trigger on USDJPY due to fear of loss, missing a profitable move.",
      "commonMistake": "Allowing emotions to dictate trigger execution, rather than following a structured plan.",
      "quickNote": "Your mind is your greatest asset or liability in trigger execution.",
      "mentorText": "Your triggers are only as good as your mindset. If you're not mentally prepared, even the best trigger won't save you.",
      "mentorAnalogy": "A pilot must remain calm and follow protocols during turbulence, just as a trader must stick to their plan under pressure."
    },
    "taskData": null,
    "visualKey": "trigger-design-intro"
  },
  {
    "type": "concept",
    "title": "Case Studies in Trigger Design",
    "label": "Core Track",
    "body": "### Candle Trigger Mechanics: Case Studies in Trigger Design\nLearning from real-world examples enhances trigger strategies. This card examines **case studies of successful and unsuccessful trigger designs**.\n\n* **Successful Trigger Example**: A trader uses a moving average crossover trigger in S&P 500 futures, capturing a significant trend move during a market rally.\n* **Unsuccessful Trigger Example**: A poorly timed RSI-based trigger in crude oil futures results in a false entry during a sideways market.\n* **Lessons Learned**: Analyze what worked and what didn't in each case, focusing on trigger timing, market conditions, and execution discipline.",
    "context": {
      "keyTerms": [
        {
          "term": "Moving Average Crossover",
          "definition": "A trading strategy that uses the crossing of two moving averages as a trigger for buy or sell signals."
        },
        {
          "term": "RSI (Relative Strength Index)",
          "definition": "A momentum oscillator that measures the speed and change of price movements."
        }
      ],
      "whyThisMatters": "Studying real-world examples provides practical insights that can be directly applied to improve trigger design.",
      "realLifeExample": "A trader successfully uses a 50/200-day moving average crossover on Apple stock, riding a 15% upward trend.",
      "commonMistake": "Failing to analyze both successful and unsuccessful triggers, missing out on valuable insights.",
      "quickNote": "Learn from both wins and losses to refine your trigger strategy.",
      "mentorText": "Every trade is a case study. Dissect it to understand why it worked or failed, and apply those lessons to your next setup.",
      "mentorAnalogy": "An architect studies past building designs to understand what structural elements succeeded or failed, ensuring future projects are more robust."
    },
    "taskData": null,
    "visualKey": "candle-trigger-mechanics"
  },
  {
    "type": "concept",
    "title": "Advanced Trigger Strategies",
    "label": "Core Track",
    "body": "### Level Trigger Mechanics: Advanced Trigger Strategies\nSophisticated triggers are essential for executing high-level trading plans. This card explains **how to design and implement complex triggers**.\n\n* **Multi-Layer Confirmation**: Use a combination of technical indicators, such as moving averages and RSI, to confirm a trigger. Ensure all conditions align before execution to reduce false signals.\n* **Time-Based Filters**: Integrate specific time filters, like session opens or economic release times, to refine trigger accuracy. This helps in aligning trades with market volatility.\n* **Price Action Patterns**: Incorporate advanced price action patterns like engulfing candles or pin bars as part of the trigger criteria. These patterns provide context and enhance the reliability of the trigger.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Layer Confirmation",
          "definition": "A strategy using multiple indicators to confirm a trading trigger."
        },
        {
          "term": "Time-Based Filters",
          "definition": "Specific time conditions used to refine trading triggers."
        },
        {
          "term": "Price Action Patterns",
          "definition": "Candlestick formations used to predict market movements."
        }
      ],
      "whyThisMatters": "Advanced triggers allow traders to execute plans with higher precision and confidence, minimizing the risk of false entries.",
      "realLifeExample": "Using a 50 EMA cross with RSI divergence and a bullish engulfing pattern on the S&P 500 at the New York open to trigger a long position.",
      "commonMistake": "Relying on a single indicator without cross-verification, leading to premature or false entries.",
      "quickNote": "Complex triggers require multi-layer validation for reliability.",
      "mentorText": "Think of advanced triggers like a multi-stage rocket launch. Each stage must ignite in sequence for the mission to succeed.",
      "mentorAnalogy": "Designing advanced triggers is like a surgeon using multiple diagnostic tools before making an incision. Each tool confirms the next step."
    },
    "taskData": null,
    "visualKey": "level-trigger-mechanics"
  },
  {
    "type": "practice",
    "title": "Practicing Trigger Design",
    "label": "Core Track",
    "body": "### Timing Trigger Mechanics: Practicing Trigger Design\nPractical exercises are crucial for mastering trigger design. This card provides scenarios to **test your ability to create effective triggers**.\n\n* **Scenario Analysis**: Evaluate given market scenarios and design appropriate triggers using specified criteria.\n* **Simulated Execution**: Apply your triggers in a simulated environment to assess their effectiveness and refine your approach.\n* **Feedback Loop**: Use post-trade analysis to understand trigger performance and make necessary adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating market conditions to design trading triggers."
        },
        {
          "term": "Simulated Execution",
          "definition": "Testing trading strategies in a non-live environment."
        },
        {
          "term": "Feedback Loop",
          "definition": "A process of reviewing and improving trading strategies based on outcomes."
        }
      ],
      "whyThisMatters": "Practicing trigger design in a controlled setting helps traders refine their strategies without financial risk.",
      "realLifeExample": "Designing a trigger for EURUSD based on a 15-minute chart with MACD crossover and testing it during the London session in a demo account.",
      "commonMistake": "Skipping the feedback loop, resulting in repeated errors and unoptimized triggers.",
      "quickNote": "Practice in simulation to perfect your trigger design.",
      "mentorText": "Think of this practice as a flight simulator for pilots. You need to test your skills in a safe environment before taking to the skies.",
      "mentorAnalogy": "Practicing trigger design is like a chef testing a new recipe in a test kitchen before serving it to guests."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are designing a trigger for a potential trade on GBPUSD. The criteria include a 20 EMA cross, RSI below 30, and a bullish engulfing candle. Which scenario best fits this trigger?",
      "options": [
        {
          "id": "0",
          "text": "GBPUSD crosses above the 20 EMA, RSI is at 25, and a bullish engulfing candle forms.",
          "isCorrect": true,
          "feedback": "This scenario meets all the criteria for the trigger, indicating a potential long entry."
        },
        {
          "id": "1",
          "text": "GBPUSD crosses below the 20 EMA, RSI is at 35, and a bearish engulfing candle forms.",
          "isCorrect": false,
          "feedback": "This scenario does not meet the trigger criteria, as the EMA cross and candle pattern are incorrect."
        },
        {
          "id": "2",
          "text": "GBPUSD remains below the 20 EMA, RSI is at 28, and a doji candle forms.",
          "isCorrect": false,
          "feedback": "The EMA condition is not met, and the candle pattern is not a bullish engulfing."
        },
        {
          "id": "3",
          "text": "GBPUSD crosses above the 20 EMA, RSI is at 45, and a bullish engulfing candle forms.",
          "isCorrect": false,
          "feedback": "Although the EMA and candle conditions are met, the RSI is not below 30."
        }
      ]
    },
    "visualKey": "timing-trigger-mechanics"
  },
  {
    "type": "summary",
    "title": "Summary of Trigger Design",
    "label": "Core Track",
    "body": "### Trigger Design Debrief: Summary of Trigger Design\nReviewing the key concepts of trigger design is essential for effective implementation. This card consolidates **the strategies and principles of designing robust triggers**.\n\n* **Comprehensive Criteria**: Ensure triggers are based on a combination of technical indicators, price action, and time filters to enhance accuracy.\n* **Iterative Refinement**: Continuously refine triggers through backtesting and simulated trading to adapt to changing market conditions.\n* **Risk Management Integration**: Incorporate risk management principles into trigger design to protect capital and optimize trade outcomes.",
    "context": {
      "keyTerms": [
        {
          "term": "Comprehensive Criteria",
          "definition": "A multi-faceted approach to designing trading triggers."
        },
        {
          "term": "Iterative Refinement",
          "definition": "The process of continuously improving trading strategies."
        },
        {
          "term": "Risk Management Integration",
          "definition": "Incorporating risk controls into trading strategies."
        }
      ],
      "whyThisMatters": "A well-designed trigger is a critical component of a successful trading strategy, ensuring disciplined and objective decision-making.",
      "realLifeExample": "A trader refines their trigger for NASDAQ futures by integrating ATR for volatility assessment and adjusting criteria based on backtesting results.",
      "commonMistake": "Neglecting to update triggers as market conditions evolve, leading to outdated strategies.",
      "quickNote": "Effective triggers are dynamic and evolve with market conditions.",
      "mentorText": "Think of your triggers as a living document. They need regular updates and checks to stay relevant and effective.",
      "mentorAnalogy": "Trigger design is like an architect updating blueprints based on new regulations and materials to ensure the building's safety and efficiency."
    },
    "taskData": null,
    "visualKey": "trigger-design-debrief"
  }
];
