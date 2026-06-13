import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Position Management Around COMEX Fixing",
    "label": "Gold Track",
    "body": "### Core Scenario: COMEX Fixing Management\nManaging gold positions around COMEX fixing times requires a structured approach to minimize risk and maximize potential gains. This card outlines **specific rules for systematic management of open gold trades during these critical periods**.\n\n* **Pre-Fixing Position Review**: Assess all open positions 15 minutes prior to the COMEX fixing. Ensure that stop-loss orders are adjusted to the nearest support or resistance level to protect capital.\n* **Execution Monitoring**: Maintain a watchful eye on price movements during the fixing window. If price deviates more than 0.5% from the pre-fixing level, consider adjusting your exit strategy accordingly.\n* **Post-Fixing Adjustment**: After the fixing, evaluate market conditions and adjust your positions based on the new price action. No emotional decisions should be made; follow your pre-defined exit rules.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX Fixing",
          "definition": "The process by which the price of gold is determined at a specific time, impacting market liquidity."
        }
      ],
      "whyThisMatters": "Understanding how to manage trades around COMEX fixing can significantly reduce risk during volatile periods.",
      "realLifeExample": "On April 5, 2023, gold was trading at $1,950. During the COMEX fixing at 10:30 AM EST, the price spiked to $1,955 before settling back. A trader who adjusted their stop-loss to $1,948 pre-fixing could have protected their position effectively.",
      "commonMistake": "Failing to adjust stop-loss orders before the fixing can lead to unnecessary losses during price spikes.",
      "quickNote": "Systematic management around COMEX fixing is essential for capital preservation.",
      "mentorText": "Before the COMEX fixing, you need to have your positions reviewed and your stop-loss orders set. This is not the time for emotional reactions; stick to your plan.",
      "mentorAnalogy": "Think of managing your positions like a pilot preparing for turbulence; you must secure everything in advance to ensure a smooth flight through uncertain conditions."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Understanding COMEX Fixing Windows",
    "label": "Gold Track",
    "body": "### Core Scenario: Monitoring During Fixing Windows\nEffective monitoring of open gold trades during COMEX fixing windows is critical to avoid emotional decision-making. This card details **how to systematically assess trades during these volatile periods**.\n\n* **Time-Based Alerts**: Set alerts 10 minutes before and after the COMEX fixing to monitor price movements closely. This ensures you remain aware of any significant changes without emotional bias.\n* **Volume Analysis**: Analyze trading volume during the fixing window. A spike in volume may indicate a potential price shift, prompting a review of your position.\n* **Exit Strategy Review**: Have a predefined exit strategy based on price action during the fixing. If the price moves against your position by more than 0.3%, execute your exit plan without hesitation.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time, which can indicate market sentiment."
        }
      ],
      "whyThisMatters": "Monitoring trades effectively during COMEX fixing helps to mitigate emotional responses and enhances decision-making.",
      "realLifeExample": "On March 15, 2023, gold prices fluctuated between $1,940 and $1,950 during the fixing. A trader who set alerts and monitored volume could have exited a losing position promptly.",
      "commonMistake": "Ignoring volume changes during the fixing can lead to missed opportunities or increased losses.",
      "quickNote": "Systematic monitoring during COMEX fixing is vital for maintaining control over trades.",
      "mentorText": "Stay alert during the fixing window. Use your alerts to keep your emotions in check and stick to your strategy.",
      "mentorAnalogy": "Monitoring your trades during fixing is like a surgeon watching vital signs during a procedure; any sudden change requires immediate attention and action."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Managing Spread Spikes in Gold Trading",
    "label": "Gold Track",
    "body": "### Core Scenario: Navigating Spread Spikes\nSpread spikes can significantly impact open gold positions, necessitating a systematic approach to manage trades effectively. This card outlines **strategies for handling spread fluctuations**.\n\n* **Pre-Defined Spread Thresholds**: Establish maximum acceptable spread levels before entering a trade. If the spread exceeds this threshold during execution, reconsider the trade or adjust your position size.\n* **Dynamic Exit Rules**: Implement exit rules that trigger when the spread increases by 50% or more from the average spread during the previous hour. This helps to mitigate losses during volatile periods.\n* **Trade Size Adjustment**: If a spread spike occurs, reduce your position size for new trades to limit exposure. Maintain a consistent risk management approach to protect capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Spread Spike",
          "definition": "A sudden increase in the difference between the bid and ask price of an asset."
        }
      ],
      "whyThisMatters": "Managing spread spikes effectively can prevent significant losses and ensure capital preservation during volatile market conditions.",
      "realLifeExample": "On February 10, 2023, a spread spike occurred during a news release, causing spreads to widen from 2 pips to 6 pips. A trader who had pre-defined thresholds could have avoided entering a losing position.",
      "commonMistake": "Failing to adjust position sizes during spread spikes can lead to excessive risk exposure.",
      "quickNote": "Establishing spread thresholds is critical for managing risk in gold trading.",
      "mentorText": "Always have your spread thresholds set before entering a trade. If the market moves against you, don’t hesitate to adjust your position size.",
      "mentorAnalogy": "Managing spread spikes is like a firefighter adjusting water pressure during a blaze; you must adapt to the situation to maintain control."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Navigating Gold Market Volatility",
    "label": "Gold Track",
    "body": "### Core Scenario: Managing Volatility\nMarket volatility can create significant challenges for open gold positions. This card provides **systematic strategies for managing trades during volatile conditions**.\n\n* **Volatility Assessment**: Use the Average True Range (ATR) to assess current market volatility. If ATR indicates a significant increase, consider tightening stop-loss orders to protect against adverse movements.\n* **Position Sizing Adjustments**: In periods of high volatility, reduce position sizes to mitigate risk. This ensures that even in adverse conditions, capital is preserved.\n* **Exit Strategy Reevaluation**: Regularly reevaluate your exit strategy based on volatility indicators. If volatility exceeds a certain threshold, be prepared to exit positions that are not performing as expected.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for a specific period."
        }
      ],
      "whyThisMatters": "Effectively managing trades during volatility is essential for maintaining capital and ensuring long-term trading success.",
      "realLifeExample": "On January 25, 2023, gold's ATR spiked to $30, indicating high volatility. A trader who adjusted their stop-loss to $1,925 could have avoided significant losses during price swings.",
      "commonMistake": "Neglecting to adjust position sizes during volatility can lead to overexposure and increased risk.",
      "quickNote": "Utilizing ATR for volatility assessment is key to effective trade management.",
      "mentorText": "When volatility spikes, tighten your stop-loss and adjust your position sizes. This is not the time to be complacent; adapt to the market conditions.",
      "mentorAnalogy": "Navigating market volatility is like a captain steering a ship through a storm; you must adjust your course to ensure safety and stability."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Risk Management Techniques for Gold Positions",
    "label": "Gold Track",
    "body": "### Core Technique: Risk Management for Gold Trades\nEffective risk management is critical for maintaining control over open gold positions. This card outlines **specific techniques to minimize emotional interference while managing risk**.\n\n* **Position Sizing**: Determine the maximum risk per trade as a percentage of your total capital. For example, if your account balance is $50,000, limit risk to $500 (1%) on any single gold trade.\n* **Stop-Loss Placement**: Establish a stop-loss order based on technical levels, such as below a recent swing low or a defined ATR (Average True Range) distance. For instance, if gold is trading at $1,800, place a stop-loss at $1,780, ensuring it aligns with your risk tolerance.\n* **Risk-Reward Ratio**: Set a minimum risk-reward ratio of 1:2 for gold trades. If your stop-loss is $20 away from entry, target a profit of at least $40 to justify the trade.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The method of determining the amount of capital to risk on a trade."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A ratio that compares the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Implementing structured risk management techniques is essential to protect capital and reduce emotional decision-making during trade execution.",
      "realLifeExample": "A trader enters a gold position at $1,800 with a stop-loss at $1,780 and a target at $1,840, maintaining a risk-reward ratio of 1:2.",
      "commonMistake": "Failing to adjust stop-loss orders as the trade moves in your favor, leading to unnecessary losses.",
      "quickNote": "Structured risk management minimizes emotional trading decisions.",
      "mentorText": "When managing your gold trades, always stick to your predefined risk parameters. Adjusting them on the fly can lead to impulsive decisions that jeopardize your capital.",
      "mentorAnalogy": "Think of risk management in trading like a pilot's pre-flight checklist. Each item ensures safety and adherence to protocol, preventing emotional choices that could lead to disaster."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Journaling Gold Trades for Improvement",
    "label": "Gold Track",
    "body": "### Core Practice: Trade Journaling\nMaintaining a detailed trade journal is vital for tracking performance and refining decision-making processes. This card emphasizes **the systematic approach to journaling open gold trades**.\n\n* **Trade Entry Documentation**: Record the entry price, position size, and rationale for each gold trade. For example, document entering a long position at $1,800 due to bullish technical indicators.\n* **Performance Metrics**: Include metrics such as profit/loss, duration of the trade, and adherence to your trading plan. If a trade closed at $1,840 after two days, note the profit and whether the exit aligned with your strategy.\n* **Post-Trade Analysis**: After closing a trade, analyze what worked and what didn’t. If a trade was exited prematurely, assess the reasons and document lessons learned for future reference.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Journal",
          "definition": "A record of all trades made, including details and outcomes."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the effectiveness of trading strategies."
        },
        {
          "term": "Post-Trade Analysis",
          "definition": "The review process of trades to evaluate decision-making and outcomes."
        }
      ],
      "whyThisMatters": "Journaling trades provides insights into personal trading behavior, allowing for continuous improvement and systematic decision-making.",
      "realLifeExample": "A trader journals a gold trade entered at $1,800, exited at $1,840, noting the reasons for entry and exit, and analyzing the effectiveness of their strategy.",
      "commonMistake": "Neglecting to document trades consistently, leading to missed opportunities for learning and improvement.",
      "quickNote": "A detailed trade journal is essential for performance tracking and improvement.",
      "mentorText": "Your trade journal is your best friend. It’s where you dissect your decisions and learn from each trade, ensuring you don’t repeat mistakes.",
      "mentorAnalogy": "Consider your trade journal like a surgeon's logbook. Each entry documents procedures, outcomes, and lessons learned, ensuring continuous improvement in skills and techniques."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios for Gold Trade Management",
    "label": "Gold Track",
    "body": "### Core Scenario: Managing Gold Trades\nEngaging with practical scenarios enhances your ability to manage open gold trades effectively. This card presents **situations that simulate real-time gold trade management**.\n\n* **Scenario 1**: Gold is trading at $1,800, and you have a long position. COMEX fixing is approaching. What action should you take to protect your gains?\n* **Scenario 2**: You entered a gold trade at $1,820, and the price spikes to $1,850 due to geopolitical news. How do you adjust your stop-loss to secure profits without exiting too early?\n* **Scenario 3**: After entering a short position at $1,850, you notice a sudden spread spike. What steps should you take to manage your risk in this volatile environment?\n",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX Fixing",
          "definition": "The daily process of determining the price of gold on the COMEX exchange."
        },
        {
          "term": "Spread Spike",
          "definition": "A sudden increase in the difference between the bid and ask price of an asset."
        },
        {
          "term": "Volatility Management",
          "definition": "Strategies employed to handle price fluctuations in the market."
        }
      ],
      "whyThisMatters": "Practicing these scenarios prepares you for real-world trading conditions, enhancing your ability to make informed decisions under pressure.",
      "realLifeExample": "During COMEX fixing, a trader with a long position at $1,800 adjusts their stop-loss to $1,790 to lock in profits as volatility increases.",
      "commonMistake": "Failing to adapt to market conditions, such as not adjusting stop-loss orders during significant price movements.",
      "quickNote": "Simulating trade scenarios builds confidence in managing open positions.",
      "mentorText": "In these scenarios, think critically about your next steps. Each decision should be based on your risk management plan, not emotions or market noise.",
      "mentorAnalogy": "Managing trades during volatility is like a firefighter responding to a blaze. You must assess the situation, adapt your strategy, and act decisively to protect your assets."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have a long position in gold at $1,800. COMEX fixing is approaching, and the price is stable. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Adjust your stop-loss to $1,790 to secure profits.",
          "isCorrect": true,
          "feedback": "Correct. Adjusting the stop-loss locks in profits while allowing for potential further gains."
        },
        {
          "id": "1",
          "text": "Close the position immediately to avoid risk.",
          "isCorrect": false,
          "feedback": "Incorrect. Closing the position may prevent you from capturing potential gains."
        },
        {
          "id": "2",
          "text": "Leave the stop-loss unchanged and monitor the market.",
          "isCorrect": false,
          "feedback": "Incorrect. Not adjusting the stop-loss exposes you to potential losses."
        },
        {
          "id": "3",
          "text": "Increase your position size to maximize profits.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing position size adds unnecessary risk without a clear strategy."
        }
      ]
    },
    "visualKey": "open-trade-manager"
  },
  {
    "type": "summary",
    "title": "Key Takeaways for Managing Gold Positions",
    "label": "Gold Track",
    "body": "### Core Summary: Strategies for Gold Position Management\nEffective management of open gold positions is essential for maximizing profitability and minimizing emotional interference. This card summarizes **the essential strategies for managing gold trades systematically**.\n\n* **Consistent Risk Management**: Always apply structured risk management techniques, including position sizing and stop-loss placement, to safeguard capital.\n* **Regular Trade Journaling**: Maintain a detailed trade journal to track performance, analyze outcomes, and refine strategies over time.\n* **Adaptive Trade Management**: Be prepared to adjust stop-loss orders and position sizes based on market conditions, especially during events like COMEX fixing or volatility spikes.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Systematic Management",
          "definition": "A structured approach to managing trades based on predefined rules."
        },
        {
          "term": "Profit Maximization",
          "definition": "Strategies aimed at increasing the overall profitability of trades."
        },
        {
          "term": "Emotional Interference",
          "definition": "The impact of emotions on trading decisions, often leading to poor outcomes."
        }
      ],
      "whyThisMatters": "Summarizing these strategies reinforces the importance of a disciplined approach to trading, crucial for long-term success.",
      "realLifeExample": "A trader consistently applies risk management techniques, journals trades, and adapts strategies, resulting in improved performance over time.",
      "commonMistake": "Overlooking the need for systematic management, leading to erratic trading behavior and emotional decision-making.",
      "quickNote": "Systematic management is key to successful trading in gold.",
      "mentorText": "Remember, the best traders are those who manage their positions with discipline and a clear strategy. Stick to your plan, and don’t let emotions dictate your actions.",
      "mentorAnalogy": "Managing gold positions is akin to an architect following a blueprint. Each step must adhere to the plan to ensure the structure stands firm against external pressures."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  }
];
