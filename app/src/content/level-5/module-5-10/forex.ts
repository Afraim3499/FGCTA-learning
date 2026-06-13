import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Forex Execution Locks: Enforcing Daily Loss Limits",
    "label": "Forex Track",
    "body": "### Forex Execution Locks: Daily Loss Limit Enforcement\nExecution locks serve as a critical mechanism to halt trading activities once a trader reaches their predetermined daily loss limit. This card outlines **how to implement execution locks effectively in Forex trading**.\n\n* **Threshold Activation**: Set a specific daily loss threshold (e.g., $500) that, when reached, triggers an automatic lock on all trading platforms, preventing any further trades.\n* **Platform Configuration**: Utilize trading software settings to configure execution locks, ensuring that the lock is enforced across all accounts and platforms used by the trader.\n* **Notification Protocol**: Establish a notification system that alerts the trader immediately upon reaching the loss limit, reinforcing the need to cease trading activities for the day.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Lock",
          "definition": "A mechanism that prevents further trading once a specified loss limit is reached."
        }
      ],
      "whyThisMatters": "Implementing execution locks is essential to mitigate emotional trading decisions that can lead to significant capital erosion.",
      "realLifeExample": "A trader using the MetaTrader 4 platform sets a daily loss limit of $300. Upon reaching this limit during the London session, the execution lock activates, preventing any further trades until the next day.",
      "commonMistake": "Failing to properly configure execution locks can lead to emotional trading and increased losses beyond the set limits.",
      "quickNote": "Execution locks are your safeguard against emotional trading after hitting loss limits.",
      "mentorText": "When you hit your daily loss limit, it's time to stop. Execution locks are your best defense against the urge to chase losses. Trust the system you've set up.",
      "mentorAnalogy": "Think of execution locks like an emergency stop button in a factory. Once pressed, all machinery halts to prevent further damage, ensuring safety and control."
    },
    "taskData": null,
    "visualKey": "daily-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Shutting Down Interbank Feeds: Procedures for Loss Limits",
    "label": "Forex Track",
    "body": "### Shutting Down Interbank Feeds: Loss Limit Protocols\nWhen daily loss limits are reached, it is imperative to shut down interbank feeds to prevent further trading activity. This card details **the procedures for effectively shutting down interbank feeds**.\n\n* **Immediate Feed Suspension**: Upon reaching the loss limit, immediately suspend all interbank feeds to halt trade execution, ensuring no new positions can be opened.\n* **Confirmation of Shutdown**: Verify that all feeds are successfully shut down by checking the trading platform’s status indicators, confirming that no trades can be executed.\n* **Reactivation Guidelines**: Establish clear guidelines for reactivating interbank feeds at the start of the next trading day, ensuring a systematic return to trading without emotional bias.",
    "context": {
      "keyTerms": [
        {
          "term": "Interbank Feed",
          "definition": "A data stream that provides real-time pricing and liquidity from multiple banks for Forex trading."
        }
      ],
      "whyThisMatters": "Shutting down interbank feeds is crucial for maintaining discipline and preventing further losses after reaching a daily limit.",
      "realLifeExample": "A trader hits a $400 loss during the New York session. They immediately shut down their interbank feeds on their trading platform, ensuring no further trades can be placed until the next day.",
      "commonMistake": "Not verifying the shutdown of interbank feeds can lead to accidental trades, exacerbating losses.",
      "quickNote": "Shutting down interbank feeds is a critical step in enforcing daily loss limits.",
      "mentorText": "When you hit your loss limit, you need to shut down those feeds immediately. This is non-negotiable. You can't afford to let emotions dictate your next move.",
      "mentorAnalogy": "Consider this like a pilot shutting down engines after a critical alert. It’s a necessary step to ensure safety and prevent further complications."
    },
    "taskData": null,
    "visualKey": "daily-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Impact of Loss Limits on Trading Behavior",
    "label": "Forex Track",
    "body": "### Impact of Loss Limits: Behavioral Insights\nDaily loss limits significantly influence trader behavior, shaping decision-making processes in Forex markets. This card examines **the psychological effects of enforced loss limits**.\n\n* **Emotional Regulation**: Enforcing loss limits helps traders manage emotional responses, reducing the likelihood of revenge trading after a loss.\n* **Decision-Making Clarity**: With clear loss limits, traders can approach their strategies with a more rational mindset, focusing on long-term objectives rather than short-term losses.\n* **Risk Assessment**: Traders become more adept at assessing risk, as loss limits encourage a disciplined approach to position sizing and trade selection.",
    "context": {
      "keyTerms": [
        {
          "term": "Revenge Trading",
          "definition": "The act of making impulsive trades to recover losses, often leading to further losses."
        }
      ],
      "whyThisMatters": "Understanding the psychological impact of loss limits is vital for maintaining discipline and improving overall trading performance.",
      "realLifeExample": "A trader who has a daily loss limit of $200 finds that after reaching this limit, they are less likely to engage in revenge trading, leading to more consistent performance over time.",
      "commonMistake": "Ignoring the emotional aspect of trading can lead to poor decision-making, even with loss limits in place.",
      "quickNote": "Daily loss limits enhance emotional regulation and decision-making clarity.",
      "mentorText": "When you set a loss limit, you’re not just protecting your capital; you’re also protecting your mindset. Stick to it, and you’ll see the benefits in your trading behavior.",
      "mentorAnalogy": "Think of loss limits like a safety net for a tightrope walker. They provide the necessary support to maintain balance and focus on the path ahead."
    },
    "taskData": null,
    "visualKey": "daily-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Forex Lot Allocation Calculations",
    "label": "Forex Track",
    "body": "### Risk Management Techniques: Integrating Loss Limits\nEffective risk management techniques are essential in Forex trading and work synergistically with daily loss limits. This card explores **specific techniques to enhance risk management**.\n\n* **Position Sizing Rules**: Use a fixed percentage of capital (e.g., 1% per trade) to determine position sizes, ensuring that losses remain within acceptable limits relative to the overall account balance.\n* **Diversification Strategies**: Implement diversification across currency pairs to mitigate the impact of adverse movements in any single position, thereby protecting overall capital.\n* **Stop-Loss Orders**: Always utilize stop-loss orders to automatically exit trades at predetermined levels, further reinforcing the daily loss limits and minimizing emotional decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to risk on a single trade."
        }
      ],
      "whyThisMatters": "Integrating robust risk management techniques with daily loss limits is vital for sustaining long-term trading success and capital preservation.",
      "realLifeExample": "A trader with a $10,000 account applies a 1% position sizing rule, risking $100 per trade. After reaching their daily loss limit, they stop trading, having effectively managed their risk throughout the day.",
      "commonMistake": "Failing to adjust position sizes in accordance with daily loss limits can lead to excessive risk exposure.",
      "quickNote": "Integrate risk management techniques with loss limits for optimal capital protection.",
      "mentorText": "Risk management isn’t just about avoiding losses; it’s about ensuring you can keep trading tomorrow. Use these techniques to safeguard your capital.",
      "mentorAnalogy": "Think of risk management like a seatbelt in a car. It’s there to protect you from unexpected events, allowing you to drive with confidence."
    },
    "taskData": null,
    "visualKey": "daily-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Case Studies of Forex Limit Enforcement",
    "label": "Forex Track",
    "body": "### Case Studies: Successful Daily Loss Limit Enforcement\nAnalyzing real-world examples of Forex traders who implemented daily loss limits reveals effective strategies for maintaining discipline. This card examines specific cases to illustrate practical applications of loss limits.\n\n* **Trader A's Structured Approach**: Trader A set a daily loss limit of 2% of their capital, utilizing a spreadsheet to track daily performance. This method allowed them to step back after reaching the limit, preventing emotional escalation and impulsive trading.\n* **Trader B's Automated Alerts**: Trader B employed trading software to trigger alerts when losses approached their 1.5% threshold. This proactive measure enabled them to reassess their strategy and avoid further losses, maintaining a clear focus on long-term goals.\n* **Trader C's Reflective Journaling**: Trader C maintained a trading journal to reflect on decisions made when reaching their daily loss limit. This practice not only reinforced discipline but also provided insights into emotional triggers, leading to improved decision-making over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Daily Loss Limit",
          "definition": "A predetermined threshold for losses that triggers a halt in trading activities for the day."
        }
      ],
      "whyThisMatters": "Understanding how successful traders enforce daily loss limits provides actionable insights into maintaining discipline and protecting capital.",
      "realLifeExample": "Trader A, operating on a $50,000 account, ceased trading after a loss of $1,000, allowing for a strategic review rather than emotional trading.",
      "commonMistake": "Failing to adhere to the limit due to overconfidence after a series of wins, leading to significant drawdowns.",
      "quickNote": "Case studies illustrate practical enforcement of daily loss limits.",
      "mentorText": "I've seen traders thrive by sticking to their daily loss limits. It's not just about the numbers; it's about preserving your mindset and capital for the next opportunity.",
      "mentorAnalogy": "Think of a pilot who has strict altitude limits. Ignoring these can lead to catastrophic outcomes. Similarly, daily loss limits keep your trading altitude safe."
    },
    "taskData": null,
    "visualKey": "daily-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Trading Psychology in Forex",
    "label": "Forex Track",
    "body": "### Trading Psychology: Mitigating Emotional Trading\nUnderstanding the psychological aspects of Forex trading is essential for maintaining discipline and enforcing daily loss limits. This card explores how emotional factors influence trading behavior and the role of loss limits in mitigating these effects.\n\n* **Emotional Escalation**: Traders often experience heightened emotions after losses, leading to impulsive decisions. Establishing a daily loss limit acts as a safeguard against this escalation, allowing for a rational approach to trading.\n* **Cognitive Dissonance**: Traders may struggle with the conflict between their expectations and reality. Daily loss limits help clarify the need for adherence to a plan, reducing the mental strain of reconciling losses.\n* **Accountability Mechanisms**: Implementing a daily loss limit creates a structured environment where traders hold themselves accountable. This discipline fosters a healthier trading mindset, promoting long-term success.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Escalation",
          "definition": "The increase in emotional intensity that can lead to irrational trading decisions."
        }
      ],
      "whyThisMatters": "Recognizing the psychological factors at play helps traders enforce limits effectively, reducing the risk of emotional trading behaviors.",
      "realLifeExample": "After a series of losses, a trader who had set a daily loss limit of 3% paused trading, allowing time to reassess their strategy rather than doubling down on losing positions.",
      "commonMistake": "Ignoring emotional signals and continuing to trade after reaching the daily loss limit, often resulting in larger losses.",
      "quickNote": "Daily loss limits help mitigate emotional trading behaviors.",
      "mentorText": "Your mindset is your greatest asset or your worst enemy. Stick to your daily loss limits to keep emotions in check and maintain clarity.",
      "mentorAnalogy": "Consider a surgeon who must stop operating after a certain number of hours to avoid fatigue. Similarly, daily loss limits prevent emotional fatigue from clouding judgment."
    },
    "taskData": null,
    "visualKey": "daily-circuit-breaker"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Forex Limit Enforcement",
    "label": "Forex Track",
    "body": "### Practical Exercises: Enforcing Daily Loss Limits\nEngaging in simulated trading scenarios enhances your ability to manage losses effectively while enforcing daily loss limits. This card presents exercises designed to reinforce this critical discipline.\n\n* **Scenario Simulation**: Create a trading simulation where you set a daily loss limit of 2%. Track your trades and stop trading once the limit is reached, reflecting on your decision-making process.\n* **Role-Playing**: Pair with another trader and role-play scenarios where one enforces a daily loss limit while the other attempts to convince them to continue trading. This exercise highlights the importance of sticking to limits under pressure.\n* **Performance Review**: After a week of simulated trading, review your performance against your daily loss limits. Analyze instances where you adhered to or violated the limits and identify patterns in your decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "A practice method where traders simulate trading conditions to reinforce discipline."
        }
      ],
      "whyThisMatters": "Practical exercises solidify the understanding and enforcement of daily loss limits, preparing traders for real-world scenarios.",
      "realLifeExample": "In a simulated environment, a trader with a $10,000 account successfully implemented a daily loss limit of $200, stopping trading after reaching the threshold and reviewing their trades.",
      "commonMistake": "Failing to take the simulation seriously and not adhering to the set loss limits, which undermines the exercise's effectiveness.",
      "quickNote": "Simulated exercises reinforce the importance of daily loss limits.",
      "mentorText": "Practice makes perfect. Engage in these exercises to build the discipline needed to enforce your daily loss limits in real trading.",
      "mentorAnalogy": "Just as a pilot practices emergency landings in a simulator, you must practice enforcing your loss limits to be prepared for real trading conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated trading session, you reach your daily loss limit of 2%. What should you do next?",
      "options": [
        {
          "id": "0",
          "text": "Stop trading for the day and review your trades.",
          "isCorrect": true,
          "feedback": "Stopping trading allows you to reflect on your decisions and avoid emotional escalation."
        },
        {
          "id": "1",
          "text": "Continue trading to recover losses.",
          "isCorrect": false,
          "feedback": "Continuing to trade after hitting your loss limit can lead to further losses and emotional distress."
        },
        {
          "id": "2",
          "text": "Lower your loss limit to allow for more trades.",
          "isCorrect": false,
          "feedback": "Lowering your loss limit undermines the purpose of enforcing discipline."
        },
        {
          "id": "3",
          "text": "Ignore the loss limit and trade as normal.",
          "isCorrect": false,
          "feedback": "Ignoring your loss limit can lead to significant drawdowns and emotional trading."
        }
      ]
    },
    "visualKey": "daily-circuit-breaker"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Loss Limit Strategies",
    "label": "Forex Track",
    "body": "### Summary: Key Strategies for Daily Loss Limits\nThis card summarizes the essential strategies and concepts regarding the enforcement of daily loss limits in Forex trading. Understanding these principles is vital for protecting trading capital.\n\n* **Establishing Clear Limits**: Define specific daily loss limits based on your risk tolerance and capital size to prevent emotional trading.\n* **Monitoring Performance**: Regularly review trading performance against your daily loss limits to identify patterns and areas for improvement.\n* **Implementing Accountability**: Use tools and methods, such as journals or automated alerts, to enforce discipline and accountability in your trading practices.",
    "context": {
      "keyTerms": [
        {
          "term": "Accountability Mechanisms",
          "definition": "Tools or practices that help traders adhere to their trading plans and limits."
        }
      ],
      "whyThisMatters": "Summarizing these strategies reinforces the importance of daily loss limits in maintaining a disciplined trading approach.",
      "realLifeExample": "A trader who established a daily loss limit of 1.5% on a $20,000 account successfully avoided emotional trading by adhering to their plan, ultimately preserving capital for future trades.",
      "commonMistake": "Neglecting to set or adhere to daily loss limits, leading to emotional trading and significant losses.",
      "quickNote": "Daily loss limits are essential for disciplined trading.",
      "mentorText": "Review these strategies regularly. They are your foundation for disciplined trading and capital preservation.",
      "mentorAnalogy": "Like a ship captain who must adhere to navigational limits to avoid hazards, you must enforce daily loss limits to steer clear of emotional pitfalls."
    },
    "taskData": null,
    "visualKey": "daily-circuit-breaker"
  }
];
