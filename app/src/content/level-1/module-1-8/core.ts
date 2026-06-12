import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Trade Plan Activation and Cancellation",
    "label": "Core Track",
    "body": "Setting explicit rules for when a trade plan becomes live or expires is crucial for disciplined trading. This mission brief outlines the foundational concepts of plan life cycles and the necessity of clear activation and cancellation criteria.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Plan Activation",
          "definition": "The process by which a trade plan becomes live and executable based on predefined criteria."
        },
        {
          "term": "Trade Plan Cancellation",
          "definition": "The process of voiding a trade plan when specific conditions are not met."
        }
      ],
      "whyThisMatters": "Explicit activation and cancellation rules prevent impulsive decisions and ensure trades are executed only under optimal conditions.",
      "realLifeExample": "A trader sets a plan to buy EURUSD if it breaks above 1.2000 during the London session. If the price doesn't reach this level by the session's end, the plan is canceled.",
      "commonMistake": "Failing to define clear criteria, leading to trades being executed outside optimal conditions.",
      "quickNote": "Clear rules prevent emotional trading and ensure disciplined execution.",
      "mentorText": "Think of your trade plan like a contract. It only goes live when all terms are met, and it expires if those terms aren't fulfilled within the agreed time.",
      "mentorAnalogy": "Just as a pilot follows a pre-flight checklist to ensure all systems are go before takeoff, a trader must verify all activation conditions before executing a trade."
    },
    "taskData": null,
    "visualKey": "activation-cancellation-intro"
  },
  {
    "type": "concept",
    "title": "Defining Activation Windows for Trade Plans",
    "label": "Core Track",
    "body": "### Activation Windows: Establishing Time Frames\nTrade plans require specific activation windows to ensure precise execution. This card details **how to define these windows and the criteria for plan activation**.\n\n* **Time-Specific Criteria**: Activation windows should align with market sessions or economic releases. For example, a plan might only be activated during the New York session or around a specific data release.\n* **Price Action Confirmation**: A plan can only go live if certain price action criteria are met within the window, such as a breakout or a key level test.\n* **Volatility Thresholds**: Ensure the market's volatility is within acceptable limits during the activation window to avoid erratic price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Activation Window",
          "definition": "A specific time frame during which a trade plan can be activated if conditions are met."
        }
      ],
      "whyThisMatters": "Defining activation windows ensures trades are executed during periods of expected liquidity and volatility, optimizing entry points.",
      "realLifeExample": "A trader sets an activation window for a GBPUSD trade during the 8:00-10:00 AM EST period, coinciding with the London-New York overlap for optimal liquidity.",
      "commonMistake": "Ignoring time-specific criteria, leading to trades being executed in low liquidity periods.",
      "quickNote": "Activation windows align trade execution with optimal market conditions.",
      "mentorText": "You need to know exactly when your trade plan is valid. It's like setting a timer; if the conditions aren't met within that time, the opportunity is gone.",
      "mentorAnalogy": "Imagine a surgeon scheduling a procedure. The operation only proceeds if all conditions, like staff availability and equipment readiness, are met within the scheduled time."
    },
    "taskData": null,
    "visualKey": "activation-rules"
  },
  {
    "type": "concept",
    "title": "Establishing Hard Cancellation Rules",
    "label": "Core Track",
    "body": "### Cancellation Rules: Avoiding Unnecessary Risks\nHard cancellation rules are essential to prevent executing outdated or irrelevant plans. This card explains **how to establish these rules to void plans when conditions aren't met**.\n\n* **Time Decay Expiry**: Plans should automatically cancel after a predetermined period if not activated, such as by the end of a trading session.\n* **Condition Non-fulfillment**: If key conditions, like price reaching a specific level, aren't met within the activation window, the plan is voided.\n* **Market Condition Changes**: Significant changes in market conditions, such as unexpected news, can invalidate a plan, necessitating immediate cancellation.",
    "context": {
      "keyTerms": [
        {
          "term": "Hard Cancellation Rules",
          "definition": "Strict criteria that dictate when a trade plan must be voided."
        }
      ],
      "whyThisMatters": "Hard cancellation rules prevent executing trades based on outdated analysis, reducing exposure to unnecessary risks.",
      "realLifeExample": "A trader sets a plan to short USDJPY if it breaks below 110.00 by 4:00 PM EST. If this condition isn't met, the plan is canceled to avoid overnight risks.",
      "commonMistake": "Allowing plans to linger without cancellation, leading to execution based on stale data.",
      "quickNote": "Cancel plans when conditions aren't met to avoid unnecessary risks.",
      "mentorText": "If your conditions aren't met, scrap the plan. It's like a pilot aborting a takeoff if the runway isn't clear.",
      "mentorAnalogy": "Think of a chef preparing a dish. If the ingredients aren't fresh or available, the dish is removed from the menu to maintain quality."
    },
    "taskData": null,
    "visualKey": "cancellation-rules"
  },
  {
    "type": "concept",
    "title": "Handling Missed Plan Activations",
    "label": "Core Track",
    "body": "### Missed Activations: Protocols for Non-Execution\nHandling missed plan activations requires clear protocols to manage unexecuted opportunities. This card covers **how to identify and manage these situations effectively**.\n\n* **Review and Analysis**: After a missed activation, review the plan to understand why it wasn't triggered. Analyze market conditions and any deviations from expectations.\n* **Re-evaluation Criteria**: Determine if the plan is still valid under current conditions or if it requires adjustments before reactivation.\n* **Documentation and Learning**: Document missed activations to refine future criteria and improve plan accuracy.",
    "context": {
      "keyTerms": [
        {
          "term": "Missed Activation",
          "definition": "A situation where a trade plan is not executed within its designated activation window."
        }
      ],
      "whyThisMatters": "Understanding missed activations helps refine future plans and ensures continuous improvement in strategy execution.",
      "realLifeExample": "A trader plans to enter a long position on AUDUSD if it breaks above 0.7500 during the Asian session. The price never reaches this level, leading to a missed activation.",
      "commonMistake": "Failing to analyze missed activations, resulting in repeated errors in future plans.",
      "quickNote": "Analyze missed activations to refine future strategies.",
      "mentorText": "When a plan doesn't activate, it's a learning opportunity. Analyze what happened and adjust your strategy accordingly.",
      "mentorAnalogy": "Consider an architect whose building plan wasn't approved due to zoning issues. They must review the plan, understand the objections, and modify the design for future approval."
    },
    "taskData": null,
    "visualKey": "missed-plan-cancellation"
  },
  {
    "type": "concept",
    "title": "Debriefing on Activation and Cancellation Processes",
    "label": "Core Track",
    "body": "### Activation-Cancellation Debrief: Analyzing Past Decisions\nReviewing past trade activations and cancellations is essential for refining future strategies.\n\n* **Post-Trade Analysis**: After a trade plan is executed or canceled, conduct a detailed review of the decision-making process. Identify whether the activation or cancellation aligned with the predefined criteria.\n* **Pattern Recognition**: Look for recurring patterns in successful and unsuccessful activations. This helps in identifying market conditions that consistently lead to profitable outcomes.\n* **Feedback Loop**: Implement a feedback loop where insights from past trades inform future plan structuring. Adjust criteria based on empirical evidence to enhance decision-making accuracy.",
    "context": {
      "keyTerms": [
        {
          "term": "Post-Trade Analysis",
          "definition": "A systematic review of executed or canceled trades to evaluate decision-making effectiveness."
        },
        {
          "term": "Feedback Loop",
          "definition": "A process where outcomes are used to refine future strategies."
        }
      ],
      "whyThisMatters": "Analyzing past activations and cancellations allows traders to refine their strategies, enhancing future performance and decision-making accuracy.",
      "realLifeExample": "A trader reviews a week where EURUSD plans were activated during volatile news releases, leading to losses. Adjustments are made to avoid activation during high-impact news.",
      "commonMistake": "Failing to review past decisions, leading to repeated errors and missed opportunities for improvement.",
      "quickNote": "Debriefing past trades refines future strategies.",
      "mentorText": "Reviewing your trade activations and cancellations is like a pilot debriefing after a flight. It’s where you learn what worked and what didn’t.",
      "mentorAnalogy": "Just as an architect reviews past projects to improve future designs, traders must analyze past trade decisions to enhance future plan structuring."
    },
    "taskData": null,
    "visualKey": "activation-cancellation-debrief"
  },
  {
    "type": "concept",
    "title": "Developing Activation Strategies",
    "label": "Core Track",
    "body": "### Activation Strategy Development: Crafting Effective Plans\nCraft strategies to determine when and how a trade plan should be activated, considering market conditions and strategic objectives.\n\n* **Market Condition Assessment**: Define specific market conditions that must be present for activation. This includes volatility levels, trend strength, and liquidity considerations.\n* **Objective Alignment**: Ensure that the activation criteria align with your strategic objectives, such as risk tolerance and profit targets.\n* **Trigger Mechanisms**: Establish clear, objective triggers for activation, such as specific price levels or technical indicators, to eliminate subjective decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Condition Assessment",
          "definition": "Evaluating market factors like volatility and trend strength to determine trade activation."
        },
        {
          "term": "Trigger Mechanisms",
          "definition": "Specific criteria or signals that initiate trade activation."
        }
      ],
      "whyThisMatters": "Developing robust activation strategies ensures that trades are only initiated under favorable conditions, aligning with strategic objectives.",
      "realLifeExample": "A trader sets an activation strategy for GBPUSD that requires a 50-pip breakout with increased volume before entering a trade.",
      "commonMistake": "Activating trades based on gut feeling rather than predefined criteria, leading to inconsistent results.",
      "quickNote": "Activate trades only under predefined favorable conditions.",
      "mentorText": "Think of activation strategies like a checklist before takeoff. You need to ensure all conditions are met before you commit.",
      "mentorAnalogy": "Just as a surgeon follows a checklist before an operation to ensure all conditions are optimal, traders must have activation strategies to ensure trades are initiated under the right conditions."
    },
    "taskData": null,
    "visualKey": "activation-cancellation-intro"
  },
  {
    "type": "concept",
    "title": "Timing Considerations for Plan Cancellation",
    "label": "Core Track",
    "body": "### Timing in Plan Cancellation: Strategic Decision-Making\nUnderstanding the importance of timing in cancelling trade plans is crucial for effective risk management.\n\n* **Market Dynamics Monitoring**: Continuously monitor market dynamics to identify when conditions deviate from the original plan assumptions, warranting cancellation.\n* **Time-Sensitive Triggers**: Implement time-based criteria for cancellation, such as a trade not activating within a certain timeframe, to prevent unnecessary exposure.\n* **Volatility Adjustments**: Adjust cancellation timing based on volatility changes. High volatility may require quicker cancellations to protect capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Dynamics Monitoring",
          "definition": "The ongoing observation of market conditions to ensure alignment with trade plans."
        },
        {
          "term": "Time-Sensitive Triggers",
          "definition": "Criteria based on time that dictate when a trade plan should be canceled."
        }
      ],
      "whyThisMatters": "Proper timing in plan cancellation prevents unnecessary exposure and aligns with dynamic market conditions.",
      "realLifeExample": "A trader cancels a USDJPY trade plan after it fails to activate within the first hour of the New York session, avoiding exposure to an unexpected news event.",
      "commonMistake": "Holding onto trade plans too long despite changing market conditions, leading to potential losses.",
      "quickNote": "Cancel plans when market conditions deviate from assumptions.",
      "mentorText": "Timing your cancellations is like knowing when to abort a mission. If conditions change, you need to be ready to pull back.",
      "mentorAnalogy": "Just as a pilot must be ready to abort a landing if conditions change, traders must be prepared to cancel plans when market dynamics shift."
    },
    "taskData": null,
    "visualKey": "activation-rules"
  },
  {
    "type": "concept",
    "title": "Risk Management in Plan Activation",
    "label": "Core Track",
    "body": "### Risk Management in Activation: Minimizing Exposure\nIncorporating risk management principles into trade plan activation is critical for minimizing exposure and maximizing potential gains.\n\n* **Position Sizing**: Determine appropriate position sizes based on risk tolerance and market conditions to limit potential losses.\n* **Stop-Loss Placement**: Establish stop-loss levels as part of the activation criteria to protect against adverse market movements.\n* **Risk-Reward Ratio**: Ensure that the potential reward justifies the risk before activating a trade plan, maintaining a favorable risk-reward ratio.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a trade based on risk tolerance."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Incorporating risk management into activation decisions protects capital and enhances the potential for profitable trades.",
      "realLifeExample": "A trader activates a EURUSD trade with a 1:3 risk-reward ratio, ensuring the potential profit is three times the potential loss.",
      "commonMistake": "Ignoring risk management principles during activation, leading to disproportionate losses.",
      "quickNote": "Integrate risk management into activation to protect capital.",
      "mentorText": "Think of risk management in activation like a safety harness. It’s there to protect you when the market takes a sudden turn.",
      "mentorAnalogy": "Just as a mountain climber uses a safety harness to minimize risk during a climb, traders must incorporate risk management into trade activation to protect their capital."
    },
    "taskData": null,
    "visualKey": "cancellation-rules"
  },
  {
    "type": "concept",
    "title": "Mitigating Risks through Plan Cancellation",
    "label": "Core Track",
    "body": "### Plan Cancellation: Risk Mitigation Strategy\nCancelling a trade plan is a proactive measure to protect capital when market conditions deviate from expectations.\n\n* **Market Condition Divergence**: Cancel plans when the market exhibits unexpected volatility or news events that alter the initial setup. This prevents exposure to unquantified risks.\n* **Technical Invalidations**: If key technical levels are breached without a setup confirmation, the plan should be canceled. This avoids trades based on invalidated technical assumptions.\n* **Time Decay Consideration**: Plans that remain untriggered beyond a predefined time window should be canceled to prevent capital from being tied up in stale opportunities.",
    "context": {
      "keyTerms": [
        {
          "term": "Plan Cancellation",
          "definition": "The act of withdrawing a trade plan before execution due to changing conditions."
        },
        {
          "term": "Technical Invalidation",
          "definition": "When a trade setup no longer aligns with the technical criteria initially defined."
        }
      ],
      "whyThisMatters": "Plan cancellation is crucial for maintaining discipline and protecting capital from unforeseen market shifts.",
      "realLifeExample": "A trader plans to go long on S&P 500 futures if it breaks above 4500. However, unexpected geopolitical news causes a sharp drop to 4450. The plan is canceled to avoid trading in a volatile, news-driven market.",
      "commonMistake": "Traders often hesitate to cancel plans, hoping for a reversal, leading to unnecessary risk exposure.",
      "quickNote": "Canceling a plan is a strategic decision, not a missed opportunity.",
      "mentorText": "Canceling a plan isn't about missing out; it's about protecting your capital when the market no longer aligns with your criteria.",
      "mentorAnalogy": "Think of it like a pilot aborting a takeoff due to unexpected weather changes. It's about safety, not missed flights."
    },
    "taskData": null,
    "visualKey": "missed-plan-cancellation"
  },
  {
    "type": "concept",
    "title": "Automating Activation and Cancellation Processes",
    "label": "Core Track",
    "body": "### Automation in Trade Plan Management\nAutomation enhances the efficiency and accuracy of trade plan activations and cancellations, minimizing human error.\n\n* **Algorithmic Triggers**: Use algorithms to automatically activate or cancel trades based on predefined criteria. This ensures consistent execution without emotional interference.\n* **Technology Integration**: Integrate trading platforms with APIs to streamline the process, reducing manual input and potential errors.\n* **Monitoring Challenges**: Automated systems require constant monitoring and updates to adapt to changing market conditions and ensure reliability.",
    "context": {
      "keyTerms": [
        {
          "term": "Algorithmic Triggers",
          "definition": "Predefined conditions programmed to automatically execute or cancel trades."
        },
        {
          "term": "API Integration",
          "definition": "Connecting trading platforms to external systems for seamless data exchange and execution."
        }
      ],
      "whyThisMatters": "Automation reduces the cognitive load on traders, allowing them to focus on strategic analysis rather than manual execution.",
      "realLifeExample": "A trader uses an API to set a system that automatically cancels any trade plan if the EURUSD spread exceeds 5 pips, maintaining trade efficiency.",
      "commonMistake": "Relying solely on automation without regular system checks can lead to outdated or incorrect executions.",
      "quickNote": "Automation is a tool, not a replacement for strategic oversight.",
      "mentorText": "Automating your activations and cancellations is like having a co-pilot who never tires, ensuring your plans are executed precisely as designed.",
      "mentorAnalogy": "Consider it like a surgeon using robotic assistance for precision. The technology enhances performance but requires oversight."
    },
    "taskData": null,
    "visualKey": "activation-cancellation-debrief"
  },
  {
    "type": "concept",
    "title": "Psychological Aspects of Activation and Cancellation",
    "label": "Core Track",
    "body": "### Managing Emotions in Trade Decisions\nPsychological factors significantly influence the decision to activate or cancel trade plans, impacting trading outcomes.\n\n* **Emotional Bias Recognition**: Identify biases such as fear of missing out (FOMO) or loss aversion that can skew decision-making. Awareness is the first step to mitigation.\n* **Decision Frameworks**: Establish clear, objective criteria for activation and cancellation to reduce emotional interference. This includes predefined levels and timeframes.\n* **Mindfulness Techniques**: Employ mindfulness practices to maintain emotional equilibrium, ensuring decisions are based on strategy rather than impulse.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Bias",
          "definition": "Cognitive biases that affect decision-making, often leading to irrational choices."
        },
        {
          "term": "Mindfulness Techniques",
          "definition": "Practices that enhance awareness and control over one's emotional state."
        }
      ],
      "whyThisMatters": "Understanding and managing psychological influences is crucial for maintaining discipline and executing plans effectively.",
      "realLifeExample": "A trader feels compelled to activate a plan prematurely due to FOMO as they see a rapid price movement in Bitcoin, only to face a reversal. Recognizing this bias could prevent such impulsive actions.",
      "commonMistake": "Allowing emotions to dictate activation or cancellation decisions, leading to inconsistent trading results.",
      "quickNote": "Emotions are signals, not commands. Use them wisely.",
      "mentorText": "Your mind is your biggest asset and your biggest obstacle. Train it to follow your plan, not your fears.",
      "mentorAnalogy": "Like an air traffic controller, you must remain calm and focused, guiding each plane (trade) according to the established flight path, not the weather outside."
    },
    "taskData": null,
    "visualKey": "activation-cancellation-intro"
  },
  {
    "type": "concept",
    "title": "Case Studies in Activation and Cancellation",
    "label": "Core Track",
    "body": "### Learning from Real-World Trade Decisions\nAnalyzing past trade activations and cancellations provides valuable insights for future strategy refinement.\n\n* **Successful Activation**: Examine cases where precise activation criteria led to profitable trades, highlighting the importance of discipline and timing.\n* **Unsuccessful Cancellation**: Review instances where failure to cancel plans resulted in losses, emphasizing the need for adherence to cancellation criteria.\n* **Adaptive Learning**: Use these case studies to adapt and refine personal trading strategies, ensuring continuous improvement and learning.",
    "context": {
      "keyTerms": [
        {
          "term": "Case Study",
          "definition": "An in-depth analysis of a real-world scenario to extract lessons and insights."
        },
        {
          "term": "Adaptive Learning",
          "definition": "The process of evolving strategies based on past experiences and outcomes."
        }
      ],
      "whyThisMatters": "Studying real-world examples helps traders understand the practical application of activation and cancellation rules, enhancing their strategic approach.",
      "realLifeExample": "A trader activates a plan to short Gold at $1800 based on a technical pattern. The trade succeeds due to precise execution. Conversely, another trader fails to cancel a plan despite a clear invalidation signal, resulting in a loss.",
      "commonMistake": "Ignoring past lessons and repeating the same mistakes in future trades.",
      "quickNote": "Every trade is a lesson; learn from both successes and failures.",
      "mentorText": "Look at each trade as a chapter in a textbook. Study it, learn from it, and apply those lessons to your next move.",
      "mentorAnalogy": "Like a scientist reviewing experiments, analyze each trade's outcome to refine your hypothesis and improve future results."
    },
    "taskData": null,
    "visualKey": "activation-rules"
  },
  {
    "type": "concept",
    "title": "Advanced Strategies for Activation and Cancellation",
    "label": "Core Track",
    "body": "### Advanced Strategies for Activation and Cancellation\nOptimizing trade plan activation and cancellation involves integrating complex market signals to refine decision-making.\n\n* **Multi-Signal Confirmation**: Activate a trade plan only when multiple independent signals align within a predefined time window. For example, a confluence of a moving average crossover, a MACD histogram shift, and a Fibonacci retracement level.\n* **Dynamic Time Decay**: Implement a time decay mechanism where the validity of a trade plan diminishes over time if not activated. This prevents holding onto outdated setups that no longer reflect current market conditions.\n* **Volatility-Based Adjustments**: Adjust activation thresholds based on current market volatility. Use the ATR (Average True Range) to dynamically set entry points, ensuring they are neither too tight nor too loose relative to market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Signal Confirmation",
          "definition": "A strategy that requires multiple independent signals to align before activating a trade plan."
        },
        {
          "term": "Dynamic Time Decay",
          "definition": "A mechanism where the validity of a trade plan decreases over time if not activated."
        },
        {
          "term": "Volatility-Based Adjustments",
          "definition": "Adjusting activation thresholds based on current market volatility."
        }
      ],
      "whyThisMatters": "Integrating complex signals enhances the precision of trade activation, reducing false starts and improving trade quality.",
      "realLifeExample": "A trader waits for a moving average crossover, MACD confirmation, and a 61.8% Fibonacci retracement on the S&P 500 futures before activating a trade plan.",
      "commonMistake": "Relying on a single signal for activation, leading to premature or false trade entries.",
      "quickNote": "Use multiple signals and dynamic adjustments to refine activation precision.",
      "mentorText": "Think of activation like launching a spacecraft. You need multiple systems to confirm readiness before ignition.",
      "mentorAnalogy": "Just as a pilot checks multiple instruments before takeoff, a trader should confirm multiple signals before activating a trade."
    },
    "taskData": null,
    "visualKey": "cancellation-rules"
  },
  {
    "type": "practice",
    "title": "Practical Application of Activation and Cancellation Rules",
    "label": "Core Track",
    "body": "### Practical Application of Activation and Cancellation Rules\nEngage in exercises to apply activation and cancellation rules in simulated trading scenarios, developing hands-on skills for real-world application.",
    "context": {
      "keyTerms": [
        {
          "term": "Activation Rules",
          "definition": "Criteria that must be met for a trade plan to become live."
        },
        {
          "term": "Cancellation Rules",
          "definition": "Conditions under which a trade plan is invalidated or withdrawn."
        }
      ],
      "whyThisMatters": "Practical application ensures that traders can effectively implement theoretical rules in live markets.",
      "realLifeExample": "In a simulated environment, a trader sets a plan to activate only if EUR/USD breaks a key resistance level with a 15-minute candle close, and cancels if not triggered within two hours.",
      "commonMistake": "Failing to adapt rules to the specific context of the market scenario, leading to missed opportunities or unnecessary risks.",
      "quickNote": "Practice applying rules in varied scenarios to build adaptive skills.",
      "mentorText": "Your ability to practice these rules in simulations will directly translate to your confidence and precision in live trading.",
      "mentorAnalogy": "Like a surgeon practicing procedures on a simulator before operating on a patient, traders must practice rules in simulations to ensure readiness."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated scenario, your trade plan for GBP/USD requires activation if a 1-hour candle closes above 1.3200 with RSI above 70. If this condition is not met within 3 hours, the plan is canceled. What should you do if the candle closes at 1.3195 with RSI at 72 after 2 hours?",
      "options": [
        {
          "id": "0",
          "text": "Cancel the trade plan.",
          "isCorrect": true,
          "feedback": "The activation condition of closing above 1.3200 was not met, so the plan should be canceled."
        },
        {
          "id": "1",
          "text": "Wait for another hour to see if conditions change.",
          "isCorrect": false,
          "feedback": "Waiting for another hour is not part of the defined rules; the plan should be canceled if conditions are not met."
        },
        {
          "id": "2",
          "text": "Activate the trade plan because RSI is above 70.",
          "isCorrect": false,
          "feedback": "Activation requires both conditions to be met, not just one."
        },
        {
          "id": "3",
          "text": "Adjust the activation level to 1.3195.",
          "isCorrect": false,
          "feedback": "Adjusting the activation level is not part of the plan's rules and undermines the strategy's integrity."
        }
      ]
    },
    "visualKey": "missed-plan-cancellation"
  },
  {
    "type": "summary",
    "title": "Summary of Plan Activation and Cancellation",
    "label": "Core Track",
    "body": "### Summary of Plan Activation and Cancellation\nRecap the key concepts of trade plan activation and cancellation to consolidate understanding and ensure readiness for implementation.\n\n* **Explicit Criteria**: Ensure all trade plans have clearly defined activation and cancellation criteria to prevent ambiguity and emotional decision-making.\n* **Time Sensitivity**: Recognize the importance of time constraints in trade plans to avoid outdated strategies that no longer align with market conditions.\n* **Signal Integration**: Utilize a combination of technical signals to enhance the accuracy and reliability of trade plan activation.",
    "context": {
      "keyTerms": [
        {
          "term": "Explicit Criteria",
          "definition": "Clearly defined rules for when a trade plan is activated or canceled."
        },
        {
          "term": "Time Sensitivity",
          "definition": "The importance of time constraints in ensuring a trade plan remains relevant to current market conditions."
        },
        {
          "term": "Signal Integration",
          "definition": "Using multiple technical signals to confirm trade plan activation."
        }
      ],
      "whyThisMatters": "A solid understanding of activation and cancellation rules ensures disciplined and consistent trading practices.",
      "realLifeExample": "A trader reviews their strategy to ensure all activation and cancellation criteria are explicit and aligned with current market conditions before the London session.",
      "commonMistake": "Neglecting to update or review activation and cancellation criteria regularly, leading to misaligned strategies.",
      "quickNote": "Clear criteria and time sensitivity are key to effective plan management.",
      "mentorText": "Think of your trade plans like a contract. Every condition must be explicit and agreed upon before execution.",
      "mentorAnalogy": "Just as an architect ensures every blueprint detail is clear before construction begins, a trader must ensure all plan criteria are explicit before activation."
    },
    "taskData": null,
    "visualKey": "activation-cancellation-debrief"
  }
];
