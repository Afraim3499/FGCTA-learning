import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Gold Contract Size Limitations",
    "label": "Gold Track",
    "body": "<!-- M9.6-gold-C1 -->\n### Core Scenario: Gold Contract Size Compliance\nGold prop firms impose specific contract size limitations that directly affect trade execution and risk exposure. This card outlines **the critical parameters for gold contract sizes and their strategic implications**.\n\n* **Maximum Contract Size**: Most prop firms set a maximum limit on the number of gold contracts a trader can hold simultaneously, often around 10 contracts per position. Exceeding this limit can result in immediate liquidation of positions.\n* **Leverage Constraints**: Firms typically enforce leverage ratios, such as 1:10, meaning a trader can control $10,000 worth of gold with $1,000. Understanding leverage is essential to avoid margin calls.\n* **Position Sizing Rules**: Traders must calculate their position sizes based on account equity and the maximum allowable risk per trade, often capped at 1-2% of total equity to ensure compliance with firm rules.",
    "context": {
      "keyTerms": [
        {
          "term": "Contract Size",
          "definition": "The total number of units of a commodity that a trader can buy or sell in a single transaction."
        },
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase the potential return of an investment."
        }
      ],
      "whyThisMatters": "Adhering to contract size limitations is crucial for maintaining compliance with prop firm rules and avoiding penalties that can jeopardize trading accounts.",
      "realLifeExample": "A trader executing a long position of 8 gold contracts at $1,800 each must ensure that their total exposure of $144,000 does not exceed the firm's maximum contract size policy.",
      "commonMistake": "Traders often miscalculate their total exposure by not accounting for existing positions, leading to violations of contract size limits.",
      "quickNote": "Always verify contract size limits before executing trades to ensure compliance.",
      "mentorText": "When trading gold, always check your contract sizes against the firm's rules. If you're at the limit, don't add more contracts; it could cost you your account.",
      "mentorAnalogy": "Think of contract size limitations like weight restrictions on an aircraft. Exceeding these limits can lead to catastrophic failures, just as over-leveraging can lead to account blow-ups."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Strategies for the London Fix",
    "label": "Gold Track",
    "body": "<!-- M9.6-gold-C2 -->\n### Core Scenario: Trading During the London Fix\nThe London Fix is a critical time for gold trading, characterized by high volatility and liquidity. This card details **strategies to effectively trade gold during this period while adhering to prop firm rules**.\n\n* **Timing Execution**: The London Fix occurs at 10:30 AM GMT, where traders should be prepared to execute orders just before this time to capitalize on price movements. Ensure your position size aligns with firm rules to avoid overexposure.\n* **Limit Orders**: Utilize limit orders to enter positions at desired price levels during the Fix. This helps manage slippage and ensures compliance with contract size limitations, as you can control entry points more effectively.\n* **Market Sentiment Analysis**: Analyze pre-Fix market sentiment and news releases to gauge potential price movements. Adjust your position size according to the anticipated volatility, ensuring it remains within the firm’s risk parameters.",
    "context": {
      "keyTerms": [
        {
          "term": "London Fix",
          "definition": "A twice-daily process where the price of gold is determined based on the supply and demand from major market participants."
        },
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a security at a specified price or better."
        }
      ],
      "whyThisMatters": "Effectively trading during the London Fix can enhance profit potential while ensuring compliance with prop firm rules regarding position sizing.",
      "realLifeExample": "A trader places a limit order to buy 5 gold contracts at $1,805 during the London Fix, ensuring they do not exceed the firm's maximum contract size limit.",
      "commonMistake": "Failing to adjust position sizes based on market volatility can lead to excessive risk exposure during the London Fix.",
      "quickNote": "Utilize limit orders during the London Fix to manage risk and ensure compliance with contract size rules.",
      "mentorText": "During the London Fix, be strategic. Use limit orders to control your entry and always check that your position size is within the firm's guidelines.",
      "mentorAnalogy": "Trading during the London Fix is like a surgeon preparing for a critical operation. Precision and adherence to protocols are essential for success."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Managing Trades During COMEX Open",
    "label": "Gold Track",
    "body": "<!-- M9.6-gold-C3 -->\n### Core Scenario: Trade Management at COMEX Open\nThe COMEX open is a pivotal moment for gold traders, often marked by significant price movements. This card focuses on **effective trade management strategies while adhering to prop firm contract size limitations**.\n\n* **Pre-Open Analysis**: Conduct thorough analysis of overnight price action and economic indicators before the COMEX open at 8:20 AM EST. This informs your strategy and helps determine appropriate position sizes.\n* **Dynamic Position Sizing**: Adjust your position sizes dynamically based on the anticipated volatility at the COMEX open. Ensure that your total exposure does not exceed the firm's maximum contract size limits, typically set at 10 contracts.\n* **Stop-Loss Implementation**: Establish stop-loss orders immediately upon entering trades to mitigate risk. The stop-loss should reflect the firm's risk management rules, often set at a maximum of 1-2% of account equity.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX Open",
          "definition": "The opening of the Commodity Exchange, where gold futures are actively traded."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit potential losses."
        }
      ],
      "whyThisMatters": "Proper management during the COMEX open is essential for capitalizing on volatility while remaining compliant with prop firm rules regarding contract sizes.",
      "realLifeExample": "A trader analyzes the previous day's close and decides to enter a long position of 6 gold contracts at $1,810 during the COMEX open, ensuring their total exposure remains compliant with firm rules.",
      "commonMistake": "Neglecting to adjust position sizes based on pre-open analysis can lead to excessive risk and potential violations of firm rules.",
      "quickNote": "Always conduct pre-open analysis to inform your trade management strategy.",
      "mentorText": "At the COMEX open, be vigilant. Analyze the market and adjust your position sizes to stay within the firm's limits. This is not the time for guesswork.",
      "mentorAnalogy": "Managing trades at the COMEX open is akin to a pilot preparing for takeoff. Every detail matters, and strict adherence to protocols ensures a safe flight."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Risk Management for Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.6-gold-C4 -->\n### Core Scenario: Gold Trading Risk Management\nEffective risk management is critical for trading gold within the parameters set by proprietary trading firms. This card outlines **essential practices to mitigate risk while complying with firm rules**.\n\n* **Risk-Reward Ratio**: Establish a minimum risk-reward ratio of 1:2 for every trade. This ensures that potential gains justify the risks taken, aligning with the firm’s risk management guidelines.\n* **Daily Loss Limits**: Set a daily loss limit, typically around 2% of account equity, to prevent significant drawdowns. This limit must be strictly adhered to in order to maintain compliance with prop firm rules.\n* **Diversification of Positions**: Avoid concentrating risk in a single position by diversifying across different timeframes and strategies. Ensure that no single trade exceeds the firm’s maximum contract size to maintain compliance.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to its potential loss."
        },
        {
          "term": "Daily Loss Limit",
          "definition": "A predefined threshold for the maximum loss a trader is willing to incur in a single day."
        }
      ],
      "whyThisMatters": "Implementing robust risk management practices is essential for sustaining trading performance and adhering to proprietary firm rules.",
      "realLifeExample": "A trader sets a risk-reward ratio of 1:3 on a gold trade, risking $500 to potentially gain $1,500, while ensuring that their total position size does not exceed 10 contracts.",
      "commonMistake": "Failing to establish a daily loss limit can lead to significant drawdowns and potential violations of firm rules.",
      "quickNote": "Maintain strict risk management practices to ensure compliance and protect your trading capital.",
      "mentorText": "Risk management isn't optional. Set your risk-reward ratios and daily loss limits before you trade. Stick to them, or you risk losing your account.",
      "mentorAnalogy": "Think of risk management in trading like a safety net for a high-wire performer. It’s essential for preventing catastrophic falls when the unexpected occurs."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Evaluating Gold Trading Performance",
    "label": "Gold Track",
    "body": "<!-- M9.6-gold-C5 -->\n### Core Scenario: Performance Benchmarking for Gold Trades\nEvaluating gold trading performance against proprietary firm benchmarks is essential for compliance and profitability. This card outlines **the criteria for assessing performance metrics**.\n\n* **Profit Factor Assessment**: Calculate the profit factor by dividing total profits by total losses. A profit factor above 1.5 is often required by prop firms, indicating a favorable risk-reward ratio.\n* **Maximum Drawdown Evaluation**: Monitor the maximum drawdown percentage relative to your account balance. Prop firms typically set a maximum drawdown limit of 10% to ensure risk management.\n* **Win Rate Analysis**: Maintain a win rate of at least 50% on gold trades to align with firm expectations. This metric helps gauge the effectiveness of your trading strategy.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Profit Factor",
          "definition": "The ratio of total profits to total losses in trading."
        },
        {
          "term": "Maximum Drawdown",
          "definition": "The largest drop from a peak to a trough in account equity."
        },
        {
          "term": "Win Rate",
          "definition": "The percentage of winning trades out of total trades executed."
        }
      ],
      "whyThisMatters": "Aligning your performance metrics with prop firm standards is critical for maintaining funding and avoiding penalties.",
      "realLifeExample": "A trader executing gold trades with a profit factor of 1.6, a maximum drawdown of 8%, and a win rate of 55% during the London session.",
      "commonMistake": "Failing to regularly track and analyze performance metrics can lead to non-compliance with prop firm rules.",
      "quickNote": "Regularly benchmark your gold trading performance against prop firm standards.",
      "mentorText": "You must consistently evaluate your performance metrics. If your profit factor dips below 1.5, reassess your strategy immediately.",
      "mentorAnalogy": "Think of your trading performance like an aircraft's fuel efficiency; if it drops below a certain threshold, you must adjust your flight plan to ensure a safe landing."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.6-gold-C6 -->\n### Core Scenario: Identifying Gold Trading Pitfalls\nTraders often encounter specific pitfalls when executing gold trades under prop firm rules. This card details **the most prevalent mistakes and how to avoid them**.\n\n* **Overleveraging Positions**: Many traders exceed the leverage limits set by prop firms, risking account liquidation. Always adhere to the maximum leverage ratio of 10:1 for gold trading.\n* **Ignoring News Events**: Failing to account for economic news releases can lead to unexpected volatility. Always check the economic calendar for gold-related events before entering trades.\n* **Neglecting Risk Management**: Traders often overlook setting stop-loss orders, leading to significant losses. Implement a strict risk management protocol, capping losses at 1% of your account balance per trade.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Overleveraging",
          "definition": "Using more leverage than is permitted by the trading firm."
        },
        {
          "term": "Economic News Releases",
          "definition": "Scheduled announcements that can impact market volatility."
        },
        {
          "term": "Risk Management Protocol",
          "definition": "A set of rules to manage potential losses in trading."
        }
      ],
      "whyThisMatters": "Avoiding common pitfalls is essential for maintaining compliance and ensuring long-term trading success.",
      "realLifeExample": "A trader who overleveraged their gold position during a Fed announcement, resulting in a 15% account drawdown, violating prop firm rules.",
      "commonMistake": "Many traders neglect to adjust their strategies based on upcoming economic news, leading to unexpected losses.",
      "quickNote": "Stay vigilant against common pitfalls to maintain compliance and protect your capital.",
      "mentorText": "You must avoid the trap of overleveraging. Stick to the rules, or you risk losing your funding.",
      "mentorAnalogy": "Just as a surgeon must adhere to strict protocols in the operating room, you must follow trading rules to ensure a successful outcome."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "practice",
    "title": "Case Studies in Gold Compliance",
    "label": "Gold Track",
    "body": "<!-- M9.6-gold-C7 -->\n### Core Scenario: Analyzing Compliance Case Studies\nEngaging with real-world case studies helps illustrate the successful alignment of gold trading strategies with prop firm rules. This card provides **examples to reinforce compliance practices**.\n\n* **Case Study 1: Strategic Position Sizing**: A trader successfully managed their gold positions by adhering to a maximum of 2 contracts per trade, resulting in compliance with the firm's drawdown limits and a 12% profit over three months.\n* **Case Study 2: Effective Risk Management**: Another trader implemented a strict stop-loss strategy, capping losses at 1% per trade, which allowed them to recover from a series of losing trades without breaching the maximum drawdown rule.\n* **Case Study 3: Adapting to Market Conditions**: A trader adjusted their strategy based on economic indicators, leading to a 20% increase in win rate during a volatile market period, demonstrating adaptability while remaining compliant with firm rules.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital allocated to a specific trade."
        },
        {
          "term": "Stop-Loss Strategy",
          "definition": "A risk management technique to limit losses on a trade."
        },
        {
          "term": "Market Conditions",
          "definition": "The current state of the market influenced by various factors."
        }
      ],
      "whyThisMatters": "Understanding successful case studies reinforces the importance of compliance and effective strategy execution.",
      "realLifeExample": "A trader who maintained compliance by limiting their gold trades to 2 contracts, resulting in a 12% profit over three months while adhering to firm rules.",
      "commonMistake": "Ignoring the lessons from past case studies can lead to repeated mistakes in strategy execution.",
      "quickNote": "Learn from case studies to enhance your compliance and trading strategies.",
      "mentorText": "Review these case studies carefully. They demonstrate how compliance can lead to profitability; emulate their strategies.",
      "mentorAnalogy": "Just as engineers study successful designs to improve future projects, you must analyze these trading cases to refine your approach."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Which case study illustrates effective risk management in gold trading?",
      "options": [
        {
          "id": "0",
          "text": "A trader who limited losses to 1% per trade.",
          "isCorrect": true,
          "feedback": "This demonstrates effective risk management by capping potential losses."
        },
        {
          "id": "1",
          "text": "A trader who overleveraged their positions.",
          "isCorrect": false,
          "feedback": "Overleveraging is a risk management failure and does not illustrate compliance."
        },
        {
          "id": "2",
          "text": "A trader who ignored economic indicators.",
          "isCorrect": false,
          "feedback": "Ignoring economic indicators can lead to non-compliance and unexpected losses."
        },
        {
          "id": "3",
          "text": "A trader who executed 10 contracts per trade.",
          "isCorrect": false,
          "feedback": "Executing too many contracts violates position sizing rules and risks non-compliance."
        }
      ]
    },
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Trading Strategies",
    "label": "Gold Track",
    "body": "<!-- M9.6-gold-C8 -->\n### Core Scenario: Recap of Compliance Strategies\nThis summary consolidates key strategies for managing contract size limitations and compliance with gold prop firm rules. Focus on **the essential practices for successful trading**.\n\n* **Contract Size Management**: Adhere to the maximum contract size of 2 contracts per trade to meet prop firm requirements, ensuring you stay within risk parameters.\n* **Regular Performance Reviews**: Conduct monthly performance reviews to ensure metrics align with prop firm benchmarks, adjusting strategies as necessary to maintain compliance.\n* **Strict Risk Management**: Implement a risk management strategy that limits losses to 1% of your account balance per trade, safeguarding against significant drawdowns.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Contract Size Limitations",
          "definition": "The maximum number of contracts a trader can hold per trade as set by the firm."
        },
        {
          "term": "Performance Reviews",
          "definition": "Regular evaluations of trading performance against set benchmarks."
        },
        {
          "term": "Risk Management Strategy",
          "definition": "A plan to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Summarizing these strategies reinforces the importance of compliance for maintaining funding and achieving profitability.",
      "realLifeExample": "A trader who consistently adheres to a maximum of 2 contracts and limits losses to 1% per trade, resulting in steady account growth.",
      "commonMistake": "Failing to conduct regular performance reviews can lead to unnoticed deviations from compliance standards.",
      "quickNote": "Regularly review and adjust your strategies to ensure compliance with prop firm rules.",
      "mentorText": "Consistency is key. Stick to your contract size limits and review your performance monthly to stay on track.",
      "mentorAnalogy": "Like a pilot conducting pre-flight checks, you must regularly review your trading strategies to ensure compliance and safety."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  }
];
