import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Time Limits on Crypto Setups",
    "label": "Crypto Track",
    "body": "### Core Scenario: Time Constraints in Crypto Trading\nSetting time limits on crypto setups is essential to ensure decisions are made before critical funding rate settlements. This card outlines **how to implement time constraints effectively**.\n\n* **Establishing Time Windows**: Define specific time frames for each setup, ideally concluding before funding rate announcements to mitigate risk exposure.\n* **Urgency in Execution**: Prioritize execution within the established time frame; if conditions are not met, invalidate the setup to prevent holding positions that may lead to losses.\n* **Monitoring Time Progression**: Use timers or alerts to track the countdown to funding rate settlements, ensuring timely decision-making based on market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate Settlement",
          "definition": "The scheduled time when funding rates are adjusted, impacting trader positions."
        }
      ],
      "whyThisMatters": "Timely decision-making prevents unnecessary exposure to market volatility and enhances risk management strategies.",
      "realLifeExample": "For instance, if Bitcoin is trading at $30,000 and the funding rate settlement is in 2 hours, a trader must decide whether to hold or exit based on market conditions before the deadline.",
      "commonMistake": "Traders often overlook the urgency of time limits, leading to indecision and potential losses as funding rates approach.",
      "quickNote": "Establish clear time constraints for crypto setups to enhance decision-making efficiency.",
      "mentorText": "When you're trading crypto, think of the funding rate settlement as a deadline. If you don't make your move before that clock runs out, you risk being caught in unfavorable market conditions.",
      "mentorAnalogy": "Consider a surgeon preparing for a critical operation; every minute counts. Just as a surgeon must act swiftly before the patient’s condition worsens, you must execute trades before funding rate settlements."
    },
    "taskData": null,
    "visualKey": "time-invalidation-clocks"
  },
  {
    "type": "concept",
    "title": "Criteria for Expiring Crypto Plans",
    "label": "Crypto Track",
    "body": "### Core Scenario: Expiration Criteria for Trading Plans\nDefining specific criteria for expiring crypto plans is crucial for maintaining a disciplined trading approach. This card details **the parameters that trigger expiration**.\n\n* **Time-Based Expiration**: If a setup has not triggered within the predefined time window before the funding rate settlement, it should be considered expired.\n* **Market Condition Assessment**: Evaluate market conditions; if volatility increases or the price action diverges from the expected path, invalidate the plan regardless of time.\n* **Risk Management Protocols**: Implement strict risk management rules that dictate expiration based on both time and adverse market movements to protect capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Condition Assessment",
          "definition": "Evaluating the current state of the market to determine the viability of a trading plan."
        }
      ],
      "whyThisMatters": "Establishing clear expiration criteria ensures that traders do not hold onto losing positions, thereby preserving capital and reducing emotional decision-making.",
      "realLifeExample": "If Ethereum has not reached the target price of $2,500 within 30 minutes of the funding rate settlement, the trader should invalidate the plan to avoid potential losses.",
      "commonMistake": "Traders often fail to set clear expiration criteria, leading to emotional attachment to losing setups.",
      "quickNote": "Define specific criteria to expire crypto plans based on time and market conditions.",
      "mentorText": "You need to be ruthless with your plans. If your setup hasn’t materialized within the time frame, don’t hesitate to pull the plug. It’s about protecting your capital, not holding onto hope.",
      "mentorAnalogy": "Think of a pilot preparing for takeoff; if conditions aren’t right within a set time frame, they must abort the flight. Similarly, you must be ready to invalidate your crypto plans if they don’t align with your criteria."
    },
    "taskData": null,
    "visualKey": "time-invalidation-clocks"
  },
  {
    "type": "concept",
    "title": "Identifying Time Signals in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Scenario: Recognizing Time Signals\nIdentifying signals that indicate a crypto setup is losing viability is essential for timely invalidation. This card focuses on **how to spot these critical signals**.\n\n* **Price Action Analysis**: Monitor price movements closely; if the asset fails to maintain momentum towards the target before the funding rate settlement, consider invalidation.\n* **Volume Indicators**: A significant drop in trading volume can signal weakening interest; if volume decreases as the deadline approaches, it may indicate a need to exit the position.\n* **Market Sentiment Shifts**: Stay attuned to news and sentiment changes; if negative news emerges close to the funding rate settlement, it may warrant immediate plan expiration.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Indicators",
          "definition": "Metrics that reflect the number of shares or contracts traded in a specific period."
        }
      ],
      "whyThisMatters": "Recognizing these signals allows traders to make informed decisions, reducing the risk of holding onto unviable setups.",
      "realLifeExample": "If Litecoin is trading at $150 but shows a 30% drop in volume and negative sentiment from recent news just 15 minutes before the funding rate settlement, the trader should consider invalidating their plan.",
      "commonMistake": "Traders often ignore subtle signals indicating a loss of setup viability, leading to unnecessary losses.",
      "quickNote": "Identify critical time signals to determine when to invalidate crypto setups.",
      "mentorText": "You must develop a keen eye for signals. If the market starts to shift against your position as the deadline approaches, don’t hesitate to act. It’s about being proactive, not reactive.",
      "mentorAnalogy": "Imagine a chef monitoring the cooking process; if the dish isn’t coming together as planned, they must adjust or abandon it before serving. In trading, you must do the same with your setups."
    },
    "taskData": null,
    "visualKey": "time-invalidation-clocks"
  },
  {
    "type": "concept",
    "title": "Case Studies on Crypto Time Limits",
    "label": "Crypto Track",
    "body": "### Core Scenario: Practical Applications of Time Limits\nExploring case studies provides insights into the practical implications of time limits in crypto setups. This card examines **real-world examples of successful time management**.\n\n* **Case Study 1: Bitcoin Surge**: A trader set a 1-hour time limit on a Bitcoin position before the funding rate settlement. When the price failed to reach $32,000 within that hour, the trader invalidated the plan, avoiding a subsequent drop to $28,000.\n* **Case Study 2: Ethereum Volatility**: Another trader monitored Ethereum closely, identifying a critical price level of $2,000. When the asset failed to breach this level within 30 minutes of the funding rate settlement, the trader exited, preserving capital as the price fell to $1,800.\n* **Case Study 3: Ripple's Market Reaction**: A trader set a time limit on Ripple before a major announcement. As the funding rate approached, negative sentiment emerged, prompting the trader to invalidate the setup, which later proved beneficial as Ripple dropped significantly.",
    "context": {
      "keyTerms": [
        {
          "term": "Time Management in Trading",
          "definition": "The process of effectively allocating time to trading activities to enhance decision-making."
        }
      ],
      "whyThisMatters": "Case studies illustrate the importance of time limits in trading, demonstrating how timely decisions can lead to capital preservation.",
      "realLifeExample": "In the case of Bitcoin, the trader’s decision to invalidate the plan before the funding rate settlement saved them from significant losses as the market turned.",
      "commonMistake": "Traders often neglect to analyze past cases, missing valuable lessons on the importance of time limits.",
      "quickNote": "Review case studies to understand the impact of time limits on successful crypto trading.",
      "mentorText": "Look at these case studies closely. They show that when you respect time limits, you can avoid costly mistakes. Learn from others’ experiences to refine your own strategies.",
      "mentorAnalogy": "Consider an architect reviewing past projects; they learn from previous designs to improve future constructions. Similarly, you should analyze past trades to enhance your time management in crypto."
    },
    "taskData": null,
    "visualKey": "time-invalidation-clocks"
  },
  {
    "type": "concept",
    "title": "Strategies for Managing Time Limits in Crypto",
    "label": "Crypto Track",
    "body": "### Core Strategy: Time Limit Management\nEffective time limit management is essential to ensure that trading strategies remain valid before critical events, such as funding rate settlements. This card outlines **strategies to monitor and respond to time-sensitive market conditions**.\n\n* **Pre-Settlement Monitoring**: Establish a clear timeline for monitoring positions leading up to funding rate settlements, typically 30 minutes prior. Adjust your strategy based on market volatility and price action during this window.\n* **Dynamic Time Adjustments**: Utilize a dynamic approach to adjust your time limits based on market conditions. If a position fails to meet structural criteria within the set timeframe, consider invalidating the trade.\n* **Time-Based Alerts**: Implement alerts for key time intervals that signal when to reassess or exit positions. For example, set alerts for 15-minute intervals leading up to a funding rate change to ensure timely decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate Settlement",
          "definition": "The periodic adjustment of funding rates in crypto trading that can impact position viability."
        }
      ],
      "whyThisMatters": "Timely execution is critical in crypto trading to avoid losses due to funding rate adjustments, which can occur rapidly.",
      "realLifeExample": "For instance, if Bitcoin is trading at $30,000 and the funding rate settlement is scheduled in 45 minutes, a trader should monitor price action closely and be prepared to adjust or exit if the price moves against their position.",
      "commonMistake": "Failing to adjust time limits based on market conditions, leading to missed opportunities or losses.",
      "quickNote": "Monitor and adjust your strategies dynamically as funding rate settlements approach.",
      "mentorText": "Think of time limits as the countdown to a critical event. If you’re not ready by the time the clock runs out, you risk missing a crucial opportunity.",
      "mentorAnalogy": "Managing time limits in crypto is like a pilot preparing for takeoff; every second counts, and adjustments must be made based on real-time conditions."
    },
    "taskData": null,
    "visualKey": "time-invalidation-clocks"
  },
  {
    "type": "concept",
    "title": "Automating Crypto Time Management",
    "label": "Crypto Track",
    "body": "### Core Mechanism: Automation in Time Management\nAutomation tools can significantly enhance the efficiency of managing time limits in crypto trading. This card discusses **how to leverage automation for timely execution**.\n\n* **Automated Alerts and Triggers**: Set up automated alerts that notify you of critical time windows approaching funding rate settlements. Use platforms that allow for custom triggers based on price movements or time intervals.\n* **Execution Bots**: Utilize execution bots programmed to enter or exit trades based on predefined time limits. For example, a bot can be set to close a position 10 minutes before a funding rate settlement if certain conditions are met.\n* **Integration with Trading Platforms**: Ensure that your automation tools are integrated with your trading platform for seamless execution. This minimizes the risk of manual errors during high-pressure situations.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Bots",
          "definition": "Automated trading systems that execute trades based on predefined criteria."
        }
      ],
      "whyThisMatters": "Automation reduces the cognitive load on traders, allowing for quicker responses to market changes and minimizing emotional decision-making.",
      "realLifeExample": "For instance, a trader sets an execution bot to sell Ethereum if it drops below $2,000 within 15 minutes of a funding rate announcement, ensuring timely action without manual intervention.",
      "commonMistake": "Over-relying on automation without proper oversight, leading to unintended trades or missed opportunities.",
      "quickNote": "Leverage automation to enhance your responsiveness to time-sensitive market conditions.",
      "mentorText": "Think of automation as your co-pilot; it handles the routine tasks, allowing you to focus on strategic decision-making.",
      "mentorAnalogy": "Using automation in trading is like a chef using timers for cooking; it ensures that every dish is prepared perfectly without constant monitoring."
    },
    "taskData": null,
    "visualKey": "time-invalidation-clocks"
  },
  {
    "type": "practice",
    "title": "Practical Application of Crypto Time Limits",
    "label": "Crypto Track",
    "body": "### Core Exercise: Simulating Time Limit Scenarios\nEngaging in practical exercises helps refine decision-making skills related to time limits in crypto trading. This card provides **simulated scenarios for applying time limits effectively**.\n\n* **Scenario Setup**: Create a simulated trading environment where you must respond to price movements leading up to a funding rate settlement. Set a time limit of 30 minutes to assess your positions.\n* **Decision Points**: Identify key decision points during the simulation, such as when to exit a position if the price moves against your strategy. Document your reasoning for each decision.\n* **Review and Analyze**: After completing the simulation, review your decisions and their outcomes. Analyze whether your time limits were effective and how you could improve your response in real scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading Environment",
          "definition": "A controlled setting where traders can practice strategies without real financial risk."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge, enabling traders to respond effectively in real market conditions.",
      "realLifeExample": "In a simulation, if Litecoin is trading at $150 and the funding rate settlement is in 20 minutes, practice deciding whether to hold or exit based on price movements during that time.",
      "commonMistake": "Failing to simulate realistic market conditions, leading to unpreparedness in actual trading scenarios.",
      "quickNote": "Simulate time limit scenarios to enhance your decision-making skills under pressure.",
      "mentorText": "Practice makes perfect. Treat these simulations as if they were real trades to develop your instincts for time-sensitive decisions.",
      "mentorAnalogy": "Simulating trading scenarios is like a pilot using a flight simulator; it prepares you for real conditions without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated trading environment, Litecoin is at $150 with a funding rate settlement in 20 minutes. What should you do if the price drops to $145?",
      "options": [
        {
          "id": "0",
          "text": "Exit the position immediately.",
          "isCorrect": true,
          "feedback": "Exiting the position is prudent as the price movement indicates a potential loss."
        },
        {
          "id": "1",
          "text": "Hold the position and wait for recovery.",
          "isCorrect": false,
          "feedback": "Holding the position without reassessing could lead to greater losses."
        },
        {
          "id": "2",
          "text": "Set a stop-loss at $140.",
          "isCorrect": false,
          "feedback": "While setting a stop-loss is a strategy, immediate action is necessary given the time constraint."
        },
        {
          "id": "3",
          "text": "Increase the position size to average down.",
          "isCorrect": false,
          "feedback": "Increasing position size in a declining market is risky and could amplify losses."
        }
      ]
    },
    "visualKey": "time-invalidation-clocks"
  },
  {
    "type": "summary",
    "title": "Recap of Crypto Time Limits",
    "label": "Crypto Track",
    "body": "### Core Summary: Importance of Time Limits\nUnderstanding and implementing time limits in crypto trading is crucial for maintaining position viability before funding rate settlements. This card summarizes **the key concepts related to time limits**.\n\n* **Timely Execution**: Timely execution is essential to avoid losses associated with funding rate adjustments. Traders must be vigilant in monitoring their positions as critical deadlines approach.\n* **Automation and Alerts**: Utilizing automation tools and alerts can enhance responsiveness, allowing traders to act quickly when market conditions change.\n* **Practical Application**: Engaging in simulated scenarios reinforces the importance of time limits, enabling traders to refine their decision-making skills under pressure.",
    "context": {
      "keyTerms": [
        {
          "term": "Timely Execution",
          "definition": "The ability to act quickly on trading decisions to capitalize on market conditions."
        }
      ],
      "whyThisMatters": "Reinforcing the importance of time limits prepares traders to navigate the fast-paced crypto market effectively.",
      "realLifeExample": "A trader who successfully exits a position before a funding rate settlement due to timely execution can avoid significant losses, demonstrating the value of adhering to time limits.",
      "commonMistake": "Neglecting to implement time limits, leading to missed opportunities or increased losses.",
      "quickNote": "Time limits are critical for successful crypto trading; stay vigilant and responsive.",
      "mentorText": "Remember, in trading, every second counts. Make sure your strategies account for time limits to protect your capital.",
      "mentorAnalogy": "Think of time limits in trading like a countdown timer in a race; you must be aware of your pace to finish strong."
    },
    "taskData": null,
    "visualKey": "time-invalidation-clocks"
  }
];
