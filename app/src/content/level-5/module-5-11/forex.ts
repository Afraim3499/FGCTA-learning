import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Implementing Weekly Account Lockdowns",
    "label": "Forex Track",
    "body": "### Weekly Lockdowns: Enforcing Loss Limits\nWeekly account lockdowns serve as a critical mechanism to enforce loss limits and mitigate emotional trading. This card outlines **the protocols for executing these lockdowns effectively**.\n\n* **Threshold Determination**: Establish a specific percentage of account equity (e.g., 5%) as the loss limit. If the account balance falls below this threshold, trading must cease for the week.\n* **Notification Protocol**: Implement automated alerts to notify the trader immediately upon reaching the loss threshold. This ensures timely awareness and compliance with the lockdown.\n* **Lockdown Duration**: Define a minimum lockdown period (e.g., 7 days) during which no trading activities are permitted. This period allows for reflection and strategy reassessment.",
    "context": {
      "keyTerms": [
        {
          "term": "Account Lockdown",
          "definition": "A temporary halt on trading activities triggered by reaching a predefined loss threshold."
        }
      ],
      "whyThisMatters": "Implementing lockdowns prevents emotional decision-making and protects capital during adverse trading conditions.",
      "realLifeExample": "A trader with a $10,000 account experiences a $500 loss, triggering a lockdown as the 5% threshold is breached, halting all trading until the following week.",
      "commonMistake": "Traders often ignore the lockdown protocol, leading to further losses instead of adhering to the established risk management rules.",
      "quickNote": "Establish a clear loss threshold to trigger account lockdowns and prevent emotional trading.",
      "mentorText": "When your account hits the loss limit, it's time to step back. Locking down your account isn't just a rule; it's a safeguard against impulsive decisions that can exacerbate losses.",
      "mentorAnalogy": "Think of a pilot who must ground the aircraft after a warning light activates. Just as safety protocols dictate a pause for inspection, so too must you halt trading to reassess your strategy."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Conducting Log Audits",
    "label": "Forex Track",
    "body": "### Log Audits: Analyzing Trading Behavior\nConducting thorough log audits post-lockdown is essential for understanding trading behavior and identifying patterns leading to loss cap breaches. This card details **the steps to perform effective log audits**.\n\n* **Data Compilation**: Gather all trading logs, including entry and exit points, trade sizes, and market conditions. This data serves as the foundation for analysis.\n* **Pattern Recognition**: Analyze the logs for recurring themes, such as over-leveraging or emotional trading decisions. Identify specific trades that contributed to losses and their context.\n* **Feedback Loop**: Create a structured feedback mechanism to document insights from the audit. This should include actionable steps to correct identified issues in future trading.",
    "context": {
      "keyTerms": [
        {
          "term": "Log Audit",
          "definition": "A systematic review of trading records to identify behavioral patterns and decision-making processes."
        }
      ],
      "whyThisMatters": "Log audits provide critical insights into trading behavior, enabling traders to refine strategies and avoid repeating past mistakes.",
      "realLifeExample": "After a lockdown, a trader reviews their logs and discovers that 70% of losses occurred during high-volatility news events, prompting a strategy adjustment.",
      "commonMistake": "Traders often overlook the importance of log audits, leading to repeated mistakes and unaddressed behavioral issues.",
      "quickNote": "Regular log audits are vital for identifying trading patterns that lead to losses.",
      "mentorText": "Reviewing your trading logs is like a coach analyzing game footage. You need to see where you went wrong to improve your performance in the future.",
      "mentorAnalogy": "Just as a surgeon reviews past operations to refine techniques, you must analyze your trading logs to enhance your decision-making process."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Psychology Review Protocols",
    "label": "Forex Track",
    "body": "### Psychology Review: Addressing Emotional Factors\nImplementing psychology review protocols after a loss cap breach is critical for understanding the emotional and cognitive factors that affect trading decisions. This card outlines **the steps to conduct a thorough psychological review**.\n\n* **Emotional Assessment**: Reflect on emotional states during trading, identifying feelings such as fear, greed, or frustration that may have influenced decisions. Document these emotions for future reference.\n* **Cognitive Bias Identification**: Recognize cognitive biases that may have impacted trading, such as confirmation bias or loss aversion. Understanding these biases helps in developing strategies to counteract them.\n* **Actionable Strategies**: Develop specific strategies to manage emotions and biases, such as mindfulness techniques or structured decision-making processes to apply in future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Psychology Review",
          "definition": "A structured evaluation of emotional and cognitive factors influencing trading behavior."
        }
      ],
      "whyThisMatters": "Understanding psychological influences on trading decisions is essential for maintaining discipline and improving performance.",
      "realLifeExample": "After a lockdown, a trader realizes they acted impulsively due to fear of missing out, leading to a plan to implement stricter entry criteria in future trades.",
      "commonMistake": "Traders often neglect the psychological aspect of trading, failing to address emotional triggers that lead to poor decision-making.",
      "quickNote": "Conducting a psychology review is essential for recognizing emotional influences on trading decisions.",
      "mentorText": "After a loss, it's crucial to reflect on your mindset. If fear or greed drove your decisions, acknowledge it and plan how to manage those emotions next time.",
      "mentorAnalogy": "Just as an athlete reviews their mental state before a competition, you must assess your emotional readiness before entering the market."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Risk Assessment Post-Lockdown",
    "label": "Forex Track",
    "body": "### Risk Assessment: Identifying Vulnerabilities\nConducting a risk assessment after a lockdown is vital for identifying vulnerabilities and areas for improvement in trading strategies. This card elaborates on **the steps to perform a comprehensive risk assessment**.\n\n* **Strategy Evaluation**: Review all trading strategies employed prior to the lockdown, assessing their effectiveness and identifying any that consistently led to losses. Focus on risk-reward ratios and win rates.\n* **Market Condition Analysis**: Analyze the market conditions during the period leading to the lockdown. Identify external factors, such as economic news or geopolitical events, that may have influenced trading outcomes.\n* **Improvement Plan Development**: Create a detailed improvement plan that addresses identified weaknesses in strategies and incorporates adaptive measures for future trading scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Assessment",
          "definition": "A systematic evaluation of trading strategies and market conditions to identify vulnerabilities."
        }
      ],
      "whyThisMatters": "A thorough risk assessment helps traders adapt strategies to changing market conditions and improve overall performance.",
      "realLifeExample": "Post-lockdown, a trader identifies that their strategy performed poorly during high-impact news events, leading to a revised approach that includes news filters.",
      "commonMistake": "Traders often fail to conduct a thorough risk assessment, missing critical insights that could enhance their trading strategies.",
      "quickNote": "Conducting a risk assessment post-lockdown is essential for refining trading strategies and mitigating future risks.",
      "mentorText": "After a lockdown, it's time to dissect what went wrong. Look at your strategies and the market conditions; understanding these factors is key to preventing future breaches.",
      "mentorAnalogy": "Just as an engineer conducts a post-project review to identify design flaws, you must analyze your trading approach to strengthen your future performance."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Revising Trading Plans Post-Audit",
    "label": "Forex Track",
    "body": "### Revising Trading Plans: Insights from Log Audits\nEffective trading plans must evolve based on performance insights and psychological assessments. This card details **how to revise trading plans to align with loss limit protocols**.\n\n* **Log Audit Analysis**: Conduct a thorough review of trading logs to identify patterns in losses, focusing on specific trades that contributed to reaching the loss limit.\n* **Psychological Review**: Assess emotional responses during trading sessions, noting instances of impulsive decisions or stress that may have influenced performance.\n* **Plan Adjustment Protocol**: Implement structured revisions to the trading plan, including stricter entry criteria or modified risk parameters, ensuring they comply with established loss limits.",
    "context": {
      "keyTerms": [
        {
          "term": "Log Audit",
          "definition": "A systematic review of trading records to identify performance patterns."
        },
        {
          "term": "Psychological Review",
          "definition": "An evaluation of emotional and mental states affecting trading decisions."
        }
      ],
      "whyThisMatters": "Revising trading plans based on audits ensures that traders adapt to their psychological and performance realities, maintaining discipline under loss limits.",
      "realLifeExample": "After a week of trading the EURUSD, a trader logs a 5% loss, identifying that 70% of losses occurred during high volatility news events. The revised plan restricts trading during these events.",
      "commonMistake": "Failing to incorporate psychological factors into the trading plan revisions, leading to repeated mistakes.",
      "quickNote": "Regularly revise trading plans based on performance insights and psychological evaluations.",
      "mentorText": "You need to take a hard look at your logs. If you see a pattern of losses, especially tied to emotional decisions, it's time to adjust your plan. Don't just tweak it; overhaul it if necessary.",
      "mentorAnalogy": "Think of this process like an aircraft maintenance check. You inspect every component for wear and tear, ensuring that the aircraft is safe and ready for flight, just as you must ensure your trading plan is robust and aligned with your current performance."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Identifying Behavioral Triggers for Loss Limits",
    "label": "Forex Track",
    "body": "### Behavioral Triggers: Understanding Loss Limit Breaches\nRecognizing the psychological factors that lead to loss limit breaches is essential for maintaining discipline. This card explores **the behavioral triggers that can jeopardize adherence to loss limits**.\n\n* **Emotional Trading Signals**: Identify emotions such as fear or greed that may prompt impulsive trading decisions, leading to breaches of loss limits.\n* **Stress Response Patterns**: Monitor how stress from previous losses can create a cycle of overtrading or revenge trading, increasing the risk of hitting loss limits.\n* **Mitigation Strategies**: Develop strategies such as mindfulness techniques or pre-defined trading breaks to counteract emotional triggers and maintain adherence to loss limits.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Trading Signals",
          "definition": "Indicators of emotional states that affect trading decisions."
        },
        {
          "term": "Stress Response Patterns",
          "definition": "Reactions to stress that can lead to poor trading behavior."
        }
      ],
      "whyThisMatters": "Understanding behavioral triggers allows traders to implement proactive measures, reducing the likelihood of emotional breaches of loss limits.",
      "realLifeExample": "A trader experiences a series of losses while trading GBPUSD, leading to frustration. They begin to overtrade in an attempt to recover losses, ultimately breaching their 3% weekly loss limit.",
      "commonMistake": "Ignoring emotional states during trading, which can lead to unplanned trades and loss limit violations.",
      "quickNote": "Recognize and address emotional triggers that can lead to loss limit breaches.",
      "mentorText": "You must be aware of your emotions while trading. If you feel fear or greed creeping in, take a step back. Acknowledge those feelings and don’t let them dictate your trades.",
      "mentorAnalogy": "This is akin to a surgeon recognizing signs of fatigue during a lengthy operation. Just as they must pause to ensure precision, you must recognize emotional fatigue and step back from trading."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "practice",
    "title": "Simulating Forex Lockdown Scenarios",
    "label": "Forex Track",
    "body": "### Practical Simulation: Forex Lockdown Scenarios\nEngaging in realistic simulations prepares traders for potential lockdown scenarios when loss limits are reached. This card focuses on **practicing the implementation of loss limits and conducting audits**.\n\n* **Scenario Setup**: Create a simulated trading environment where a trader experiences a 4% loss in a week, triggering the lockdown protocol.\n* **Audit Execution**: Conduct a mock audit, reviewing trades taken during the week to identify errors and emotional triggers that led to the loss.\n* **Recovery Plan Development**: Formulate a recovery plan based on the audit findings, detailing steps to improve performance and adhere to loss limits in future trading.",
    "context": {
      "keyTerms": [
        {
          "term": "Lockdown Protocol",
          "definition": "A predefined set of actions taken when loss limits are breached."
        },
        {
          "term": "Mock Audit",
          "definition": "A simulated review of trading activities to identify areas for improvement."
        }
      ],
      "whyThisMatters": "Practicing lockdown scenarios equips traders with the skills to respond effectively when real loss limits are reached, ensuring disciplined trading.",
      "realLifeExample": "In a simulated environment, a trader faces a 4% loss after aggressive trading in AUDJPY. They execute the lockdown protocol, conducting a mock audit that reveals emotional decision-making as a key factor.",
      "commonMistake": "Failing to take the simulation seriously, leading to inadequate preparation for real-life scenarios.",
      "quickNote": "Simulate lockdown scenarios to prepare for real loss limit breaches effectively.",
      "mentorText": "Treat these simulations as if they were real. The more you practice, the better prepared you’ll be when you face actual loss limits. Analyze your decisions critically.",
      "mentorAnalogy": "Think of this like a fire drill for a building. You practice the steps to take in case of an emergency, ensuring everyone knows how to respond quickly and effectively when it matters."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have reached your weekly loss limit of 3% while trading USDCHF. What is your immediate action?",
      "options": [
        {
          "id": "0",
          "text": "Continue trading to recover losses.",
          "isCorrect": false,
          "feedback": "Continuing to trade after hitting a loss limit can lead to further losses and emotional distress."
        },
        {
          "id": "1",
          "text": "Pause all trading activities and conduct a mock audit.",
          "isCorrect": true,
          "feedback": "Pausing trading allows for a thorough review of performance and emotional triggers, essential for recovery."
        },
        {
          "id": "2",
          "text": "Adjust your loss limit to allow for more trading.",
          "isCorrect": false,
          "feedback": "Adjusting loss limits undermines the purpose of having them and can lead to greater losses."
        },
        {
          "id": "3",
          "text": "Seek advice from peers while continuing to trade.",
          "isCorrect": false,
          "feedback": "Seeking advice while trading can lead to further impulsive decisions; it's crucial to pause and reflect."
        }
      ]
    },
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "summary",
    "title": "Forex Weekly Loss Limit Enforcement Summary",
    "label": "Forex Track",
    "body": "### Summary: Key Strategies for Enforcing Loss Limits\nImplementing effective loss limit strategies is vital for maintaining trading discipline. This card summarizes **the essential protocols for enforcing weekly loss limits in Forex trading**.\n\n* **Regular Audits**: Conduct weekly audits of trading performance and psychological states to identify areas for improvement and ensure adherence to loss limits.\n* **Behavioral Awareness**: Recognize and address emotional triggers that may lead to impulsive trading decisions, reinforcing the importance of psychological balance.\n* **Structured Lockdown Protocols**: Establish clear protocols for pausing trading and conducting audits when loss limits are reached, ensuring a disciplined approach to recovery.",
    "context": {
      "keyTerms": [
        {
          "term": "Weekly Audits",
          "definition": "Regular reviews of trading performance and emotional states."
        },
        {
          "term": "Lockdown Protocols",
          "definition": "Procedures to follow when loss limits are breached."
        }
      ],
      "whyThisMatters": "Summarizing these strategies reinforces the importance of discipline and structure in trading, essential for long-term success.",
      "realLifeExample": "A trader implements a weekly audit process, identifying emotional triggers that led to a breach of their 3% loss limit, and adjusts their trading plan accordingly.",
      "commonMistake": "Neglecting to follow through with audits and protocols after reaching loss limits, leading to repeated breaches.",
      "quickNote": "Enforce weekly loss limits through regular audits and structured protocols.",
      "mentorText": "You must have a clear strategy for when you hit your loss limits. Regular audits and awareness of your emotional state are non-negotiable. Stick to your protocols.",
      "mentorAnalogy": "Consider this like a pilot's checklist before takeoff. Each item ensures safety and preparedness, just as your loss limit strategies ensure disciplined trading."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  }
];
