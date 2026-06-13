import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Forex Prop Firm Drawdown Rules",
    "label": "Forex Track",
    "body": "<!-- M9.6-forex-C1 -->\n### Core Scenario: Forex Prop Firm Drawdown Rules\nForex proprietary trading firms implement specific drawdown rules to mitigate risk and ensure capital preservation. This card outlines **the critical parameters of these rules and their implications for trading strategies**.\n\n* **Maximum Drawdown Limit**: Most firms set a maximum drawdown limit, typically between 5% to 10% of the account balance. Exceeding this limit results in immediate account suspension, necessitating strict adherence to risk management protocols.\n* **Daily Drawdown Threshold**: Firms often impose a daily drawdown threshold, which can be around 2% of the account balance. Traders must monitor their positions closely to avoid breaching this limit during volatile market conditions.\n* **Equity vs. Balance Drawdown**: Understand the distinction between equity drawdown (real-time value of the account) and balance drawdown (account value at the end of the trading day). Compliance requires constant awareness of both metrics to avoid penalties.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Drawdown Limit",
          "definition": "The maximum percentage loss allowed by a prop firm before account suspension."
        },
        {
          "term": "Equity Drawdown",
          "definition": "The reduction in account value based on real-time market conditions."
        },
        {
          "term": "Balance Drawdown",
          "definition": "The reduction in account value calculated at the end of the trading day."
        }
      ],
      "whyThisMatters": "Understanding drawdown rules is essential for maintaining compliance and ensuring the longevity of trading accounts within prop firms.",
      "realLifeExample": "A trader with a $100,000 account must ensure that their equity does not fall below $90,000 to avoid breaching a 10% drawdown limit, especially after a series of losing trades.",
      "commonMistake": "Failing to differentiate between equity and balance drawdown can lead to unexpected account suspensions.",
      "quickNote": "Strict adherence to drawdown rules is non-negotiable for prop firm traders.",
      "mentorText": "You must grasp the drawdown rules set by your firm. If you hit that 10% limit, your account is gone. Monitor your equity closely, especially after losses.",
      "mentorAnalogy": "Think of drawdown limits like the fuel gauge in an aircraft. Running low on fuel means you must land safely before it's too late."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Managing Daily Drawdown Limits",
    "label": "Forex Track",
    "body": "<!-- M9.6-forex-C2 -->\n### Core Scenario: Daily Drawdown Management\nDaily drawdown limits are critical for maintaining compliance with prop firm rules and ensuring sustainable trading practices. This card details **strategies for effectively managing these limits**.\n\n* **Pre-Trade Risk Assessment**: Before entering any trade, calculate the potential risk and ensure that the cumulative risk of open positions does not exceed the daily drawdown limit. Use position sizing formulas to determine appropriate lot sizes.\n* **Real-Time Monitoring**: Implement real-time monitoring tools to track daily performance and drawdown levels. Set alerts for when equity approaches the daily threshold to take corrective action promptly.\n* **Trade Closure Protocol**: Establish a protocol for closing trades once the daily drawdown limit is reached. This includes a mandatory pause in trading to reassess strategy and market conditions before re-engaging.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Cumulative Risk",
          "definition": "The total risk exposure from all open positions at any given time."
        },
        {
          "term": "Position Sizing",
          "definition": "The method of determining the number of lots to trade based on risk tolerance."
        },
        {
          "term": "Trade Closure Protocol",
          "definition": "A set of rules for closing trades when drawdown limits are reached."
        }
      ],
      "whyThisMatters": "Effective management of daily drawdown limits is essential for maintaining trading discipline and avoiding penalties from prop firms.",
      "realLifeExample": "A trader with a daily drawdown limit of 2% on a $50,000 account must ensure that their total losses do not exceed $1,000 throughout the trading day.",
      "commonMistake": "Ignoring real-time performance metrics can lead to breaching daily drawdown limits unexpectedly.",
      "quickNote": "Always assess risk before entering trades to stay within daily drawdown limits.",
      "mentorText": "You need to know your limits. If you’re down 1.5% on the day, don’t let it get to 2%. Close positions and reassess your strategy.",
      "mentorAnalogy": "Managing daily drawdown limits is like a pilot monitoring altitude. If you’re too low, you must take corrective action before it’s too late."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Navigating Weekend Holding Restrictions",
    "label": "Forex Track",
    "body": "<!-- M9.6-forex-C3 -->\n### Core Scenario: Weekend Holding Restrictions\nMany Forex prop firms impose restrictions on holding positions over the weekend to mitigate risk. This card explores **how to navigate these restrictions effectively**.\n\n* **Position Closure Protocol**: Establish a routine for closing all positions before the weekend market close. This includes setting alerts to remind you to exit trades at least 30 minutes prior to the market's closure.\n* **Weekend Risk Assessment**: Analyze the potential impact of weekend news events on open positions. If significant events are anticipated, consider closing positions to avoid unexpected volatility when the market reopens.\n* **Alternative Strategies**: Develop strategies that do not rely on holding positions over the weekend. This could include day trading or utilizing shorter time frames to align with prop firm rules.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Closure Protocol",
          "definition": "A systematic approach to closing trades before the weekend."
        },
        {
          "term": "Weekend Risk Assessment",
          "definition": "Evaluating potential risks associated with holding positions over the weekend."
        },
        {
          "term": "Alternative Strategies",
          "definition": "Trading methods that do not involve holding positions during the weekend."
        }
      ],
      "whyThisMatters": "Navigating weekend holding restrictions is vital to avoid penalties and ensure compliance with prop firm rules.",
      "realLifeExample": "A trader must close all positions by 5 PM EST on Friday to avoid penalties, particularly if major economic data is expected over the weekend.",
      "commonMistake": "Failing to close positions in time can lead to significant losses when the market reopens.",
      "quickNote": "Always close positions before the weekend to comply with prop firm rules.",
      "mentorText": "You cannot afford to hold positions over the weekend. Close them out and avoid the risk of unexpected market moves.",
      "mentorAnalogy": "Think of weekend holding restrictions like a surgeon ensuring all tools are accounted for before leaving the operating room. There’s no room for error."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Timing Trade Execution to Avoid Drawdowns",
    "label": "Forex Track",
    "body": "<!-- M9.6-forex-C4 -->\n### Core Scenario: Timing Trade Execution\nEffective timing in trade execution is crucial to avoid exceeding drawdown limits, especially during volatile market conditions. This card discusses **strategies for optimizing trade timing**.\n\n* **Market Session Awareness**: Understand the characteristics of different trading sessions (Asian, European, and US) and their respective volatility. Execute trades during sessions with lower volatility to minimize risk exposure.\n* **Economic Calendar Utilization**: Use the economic calendar to identify high-impact news releases. Avoid opening new positions within 30 minutes before or after significant announcements to prevent adverse price movements.\n* **Volatility Indicators**: Implement volatility indicators, such as the Average True Range (ATR), to gauge market conditions. Adjust trade execution timing based on current volatility levels to avoid unnecessary drawdowns.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Session Awareness",
          "definition": "Understanding the volatility characteristics of different trading sessions."
        },
        {
          "term": "Economic Calendar",
          "definition": "A schedule of upcoming economic events that may impact market conditions."
        },
        {
          "term": "Volatility Indicators",
          "definition": "Tools used to measure market volatility and adjust trading strategies accordingly."
        }
      ],
      "whyThisMatters": "Optimizing trade execution timing is essential for minimizing drawdowns and aligning with prop firm rules during volatile periods.",
      "realLifeExample": "A trader avoids entering a position on EURUSD just before the US Non-Farm Payroll report to prevent a potential drawdown from unexpected volatility.",
      "commonMistake": "Entering trades during high volatility periods can lead to rapid drawdowns, violating prop firm rules.",
      "quickNote": "Timing is everything; avoid trading during high volatility to protect your account.",
      "mentorText": "You must time your trades wisely. Avoid entering positions during major news releases to keep your drawdown in check.",
      "mentorAnalogy": "Timing trade execution is like a chef knowing when to add ingredients to a dish. Adding too soon can ruin the entire meal."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Implementing Risk Management Techniques",
    "label": "Forex Track",
    "body": "<!-- M9.6-forex-C5 -->\n### Core Scenario: Advanced Risk Management Techniques\nEffective risk management is essential for maintaining compliance with proprietary trading firm rules while maximizing trading performance. This card outlines **specific techniques tailored for Forex trading** that align with prop firm requirements.\n\n* **Position Sizing Rules**: Calculate position sizes based on a fixed percentage of account equity, typically 1-2%, to mitigate risk exposure. For example, with a $100,000 account, a 1% risk per trade allows for a maximum position size of $1,000.\n* **Stop-Loss Implementation**: Establish stop-loss orders at strategic levels, such as 1.5 times the Average True Range (ATR) from entry points, to limit potential losses. If EURUSD is trading at 1.1000 with an ATR of 0.0050, set a stop-loss at 1.0975.\n* **Risk-Reward Ratio**: Maintain a minimum risk-reward ratio of 1:2 for all trades. If risking $100, ensure the target profit is at least $200, aligning with prop firm profitability expectations.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Adhering to risk management techniques is crucial for sustaining trading capital and meeting prop firm standards.",
      "realLifeExample": "A trader with a $50,000 account risks 1% per trade, resulting in a maximum position size of $500. If trading GBPUSD at 1.3000, they set a stop-loss at 1.2985 based on ATR calculations.",
      "commonMistake": "Many traders neglect to adjust position sizes according to account fluctuations, leading to excessive risk exposure.",
      "quickNote": "Implement strict position sizing and stop-loss strategies to align with prop firm risk management rules.",
      "mentorText": "Focus on your position sizing and stop-loss placement. If you risk too much on a single trade, you jeopardize your entire account. Stick to the rules.",
      "mentorAnalogy": "Think of risk management like an aerospace engineer calculating load limits for an aircraft. Each trade must be meticulously planned to avoid catastrophic failure."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Evaluating Performance Against Forex Benchmarks",
    "label": "Forex Track",
    "body": "<!-- M9.6-forex-C6 -->\n### Core Scenario: Performance Evaluation Against Benchmarks\nEvaluating your trading performance against established benchmarks is critical for compliance with prop firm standards. This card details **how to systematically assess your results**.\n\n* **Benchmark Identification**: Identify relevant benchmarks such as the average return of the Forex market or specific prop firm performance metrics. For instance, if the average monthly return for a prop firm is 5%, use this as a target.\n* **Performance Metrics**: Utilize metrics like Sharpe Ratio and maximum drawdown to evaluate risk-adjusted returns. A Sharpe Ratio above 1.0 indicates favorable risk-adjusted performance, while a maximum drawdown of less than 10% aligns with prop firm expectations.\n* **Monthly Review Process**: Conduct a monthly performance review comparing actual returns to benchmarks. If your trading account shows a 3% return against a 5% benchmark, analyze the reasons for underperformance and adjust strategies accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Benchmark",
          "definition": "A standard or point of reference against which things may be compared or assessed."
        },
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, calculated as the average return earned in excess of the risk-free rate per unit of volatility."
        },
        {
          "term": "Maximum Drawdown",
          "definition": "The largest drop from a peak to a trough in the value of a portfolio."
        }
      ],
      "whyThisMatters": "Regular performance evaluation ensures that traders remain aligned with prop firm expectations and can make necessary adjustments.",
      "realLifeExample": "A trader achieves a 4% return in a month while the prop firm benchmark is 5%. They calculate their Sharpe Ratio at 0.8 and identify high volatility trades as the cause of underperformance.",
      "commonMistake": "Traders often overlook the importance of comparing their results against benchmarks, leading to complacency.",
      "quickNote": "Regularly assess your trading performance against established benchmarks to ensure compliance and improvement.",
      "mentorText": "Evaluate your results against the benchmarks set by your prop firm. If you're falling short, it's time to reassess your strategies and execution.",
      "mentorAnalogy": "Consider this like an athlete training for a competition. Regularly checking performance against set standards is essential for improvement and success."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "practice",
    "title": "Simulating Drawdown Scenarios",
    "label": "Forex Track",
    "body": "<!-- M9.6-forex-C7 -->\n### Core Scenario: Managing Drawdown Effectively\nUnderstanding how to manage drawdowns is vital for maintaining compliance with prop firm rules. This practice card engages you in **simulating drawdown scenarios** to enhance your risk management skills.\n\n* **Scenario Setup**: Create a simulated trading environment where you experience a 10% drawdown over a series of trades. Use historical data to replicate market conditions.\n* **Response Strategy**: Develop a response plan for when drawdowns occur, including reducing position sizes and reassessing trading strategies. For example, if your account drops from $100,000 to $90,000, reduce your position size by 50% until recovery is achieved.\n* **Performance Tracking**: Monitor your performance during the simulation and document emotional responses to drawdowns. Use this data to refine your psychological resilience and decision-making processes.",
    "context": {
      "keyTerms": [
        {
          "term": "Drawdown",
          "definition": "The reduction of one’s capital after a series of losing trades."
        },
        {
          "term": "Response Plan",
          "definition": "A predefined strategy for managing risk and adjusting trading behavior during drawdowns."
        },
        {
          "term": "Psychological Resilience",
          "definition": "The ability to maintain emotional stability and decision-making clarity under stress."
        }
      ],
      "whyThisMatters": "Simulating drawdown scenarios prepares traders to respond effectively and maintain compliance with prop firm rules during actual market conditions.",
      "realLifeExample": "In a simulation, a trader experiences a 10% drawdown after a series of losing trades on AUDCAD. They implement a response plan, reducing position sizes and reassessing their strategy, ultimately recovering within two weeks.",
      "commonMistake": "Traders often fail to prepare for drawdowns, leading to emotional decision-making and increased risk during real trading.",
      "quickNote": "Engage in drawdown simulations to develop effective management strategies and enhance psychological resilience.",
      "mentorText": "Prepare for drawdowns by simulating them in a controlled environment. Understand your emotional responses and refine your strategies accordingly.",
      "mentorAnalogy": "Think of this like a pilot practicing emergency procedures in a simulator. Familiarity with potential crises ensures a calm and effective response when they occur in real life."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You experience a 10% drawdown in your trading account. What should be your immediate response according to your plan?",
      "options": [
        {
          "id": "0",
          "text": "Increase position sizes to recover losses quickly.",
          "isCorrect": false,
          "feedback": "Increasing position sizes during a drawdown increases risk and can lead to further losses."
        },
        {
          "id": "1",
          "text": "Reduce position sizes and reassess your trading strategy.",
          "isCorrect": true,
          "feedback": "Reducing position sizes helps manage risk and allows for a more measured approach to recovery."
        },
        {
          "id": "2",
          "text": "Stop trading entirely until the drawdown is recovered.",
          "isCorrect": false,
          "feedback": "Halting trading entirely can lead to missed opportunities and does not address the underlying issues."
        },
        {
          "id": "3",
          "text": "Ignore the drawdown and continue trading as usual.",
          "isCorrect": false,
          "feedback": "Ignoring a drawdown can lead to emotional decision-making and increased risk."
        }
      ]
    },
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Drawdown Strategies",
    "label": "Forex Track",
    "body": "<!-- M9.6-forex-C8 -->\n### Core Scenario: Recap of Drawdown Management Strategies\nNavigating drawdowns effectively is essential for compliance with prop firm rules and maintaining trading discipline. This card summarizes **key strategies for managing drawdowns**.\n\n* **Establishing a Drawdown Limit**: Set a maximum drawdown threshold, typically between 5-10%, to trigger a review of trading strategies. If your account drops 7%, conduct a thorough analysis of recent trades.\n* **Adjusting Risk Parameters**: Adapt your risk parameters during drawdowns by reducing position sizes and increasing the use of stop-loss orders. For instance, if your account is at risk of a 10% drawdown, consider reducing your risk per trade from 1% to 0.5%.\n* **Emotional Management Techniques**: Implement techniques such as mindfulness or journaling to manage emotional responses during drawdowns. Keeping a trading journal can help identify patterns and triggers that lead to emotional trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Drawdown Limit",
          "definition": "A predefined threshold that triggers a review of trading strategies."
        },
        {
          "term": "Risk Parameters",
          "definition": "The set of rules governing how much risk is taken on each trade."
        },
        {
          "term": "Mindfulness Techniques",
          "definition": "Practices aimed at maintaining focus and emotional control during trading."
        }
      ],
      "whyThisMatters": "Summarizing drawdown strategies reinforces the importance of discipline and adherence to prop firm rules.",
      "realLifeExample": "A trader sets a drawdown limit of 8%. Upon reaching this threshold, they reduce their risk per trade from 1% to 0.5% and analyze their recent trades for errors.",
      "commonMistake": "Traders often fail to establish clear drawdown limits, leading to unchecked losses and emotional trading.",
      "quickNote": "Implement clear drawdown limits and adjust risk parameters to maintain compliance and discipline.",
      "mentorText": "Review your drawdown strategies regularly. Establish limits and adjust your risk parameters to stay disciplined during tough times.",
      "mentorAnalogy": "Managing drawdowns is like a surgeon preparing for potential complications during an operation. Having a plan in place ensures a controlled response when challenges arise."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  }
];
