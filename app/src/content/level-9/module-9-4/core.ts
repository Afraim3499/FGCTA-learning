import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Identifying Slippage Leakage Sources",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C1 -->\n### Core Scenario: Slippage Leakage Identification\nPinpointing the origins of slippage leakage is critical for optimizing trade execution and enhancing overall performance metrics. This card teaches **how to systematically log and analyze performance data to identify slippage sources**.\n\n* **Execution Log Accuracy**: Maintain a detailed log of each trade, including entry and exit prices, timestamps, and market conditions. Discrepancies in logged data can obscure true slippage sources.\n* **Brokerage Comparison**: Regularly compare execution performance across multiple brokers. Variations in slippage rates can indicate broker-specific issues that need addressing.\n* **Market Condition Correlation**: Analyze slippage in relation to market events, such as news releases or high volatility periods. Identifying patterns in slippage during these times can help in adjusting strategies accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage Leakage",
          "definition": "The difference between expected trade execution price and actual execution price due to market conditions."
        }
      ],
      "whyThisMatters": "Understanding the sources of slippage leakage allows traders to refine their execution strategies and improve profitability.",
      "realLifeExample": "During the EURUSD session on March 15, 2023, a trader logs a slippage of 5 pips on a market order executed at 1.0850, while the expected price was 1.0845, indicating a need to investigate the execution environment.",
      "commonMistake": "Failing to log trades accurately, leading to misinterpretation of slippage data.",
      "quickNote": "Accurate logging is essential for identifying slippage sources.",
      "mentorText": "When you log your trades, make sure every detail is captured. If you miss even one entry, you could overlook a significant source of slippage that impacts your bottom line.",
      "mentorAnalogy": "Think of this like a forensic investigation in aviation; every detail of a flight log must be precise to identify issues that could lead to a crash."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Measuring Execution Speed Decay",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C2 -->\n### Core Scenario: Execution Speed Decay Measurement\nQuantifying execution speed decay is essential for understanding its impact on trade outcomes and overall account performance. This card teaches **how to measure and analyze execution speed over time**.\n\n* **Time-Based Metrics**: Establish a baseline execution speed by measuring the time taken from order placement to execution across various trade types. Regularly update these metrics to reflect current performance.\n* **Performance Benchmarking**: Compare execution speeds against industry benchmarks or historical performance data. Significant deviations may indicate underlying issues that require attention.\n* **Impact Analysis**: Assess the correlation between execution speed decay and trade outcomes. For instance, a consistent increase in execution time may lead to higher slippage and reduced profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Speed Decay",
          "definition": "The gradual increase in time taken to execute trades, which can negatively affect performance."
        }
      ],
      "whyThisMatters": "Measuring execution speed decay allows traders to proactively address performance issues before they escalate.",
      "realLifeExample": "A trader notices that their average execution speed has increased from 200 milliseconds to 500 milliseconds over a month, correlating with a 15% drop in profitability on trades.",
      "commonMistake": "Neglecting to regularly measure execution speed, leading to unrecognized performance degradation.",
      "quickNote": "Regularly measure execution speed to identify decay trends.",
      "mentorText": "Keep a close eye on how long it takes to execute your trades. If you see that time creeping up, it’s a red flag that could be costing you money.",
      "mentorAnalogy": "This is akin to monitoring the speed of a surgical instrument; any delay could lead to complications in the procedure."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Analyzing Slippage Patterns",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C3 -->\n### Core Scenario: Historical Slippage Pattern Analysis\nAnalyzing historical slippage patterns enables traders to anticipate future slippage based on past performance. This card teaches **how to systematically review and interpret slippage data**.\n\n* **Data Segmentation**: Segment historical slippage data by trade type, market condition, and time of day. This granularity allows for more precise analysis and identification of patterns.\n* **Statistical Analysis**: Use statistical methods, such as standard deviation, to quantify slippage variability. Understanding the range of slippage can help in setting realistic expectations for future trades.\n* **Predictive Modeling**: Develop predictive models based on historical slippage patterns. For example, if slippage tends to increase during high-impact news events, adjust trade strategies accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage Patterns",
          "definition": "Recurring trends in slippage data that can inform future trading decisions."
        }
      ],
      "whyThisMatters": "Anticipating slippage based on historical data allows traders to adjust their strategies proactively, minimizing potential losses.",
      "realLifeExample": "A trader analyzes slippage data from the past six months and finds that slippage spikes by an average of 10 pips during U.S. Non-Farm Payroll releases, prompting them to adjust their trading strategy during these times.",
      "commonMistake": "Overlooking the importance of historical data analysis, leading to unpreparedness for future slippage events.",
      "quickNote": "Historical analysis of slippage can inform future trading strategies.",
      "mentorText": "Review your past trades meticulously. If you see consistent slippage during certain market conditions, you need to adapt your approach to mitigate those risks.",
      "mentorAnalogy": "This is like a weather forecast; analyzing past weather patterns helps you prepare for future storms."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Identifying Liquidation Triggers",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C4 -->\n### Core Scenario: Liquidation Trigger Identification\nIdentifying key indicators that lead to liquidation events is essential for mitigating risks associated with high leverage. This card teaches **how to recognize and respond to potential liquidation triggers**.\n\n* **Margin Level Monitoring**: Continuously monitor margin levels relative to account equity. A margin level below 100% indicates increased risk of liquidation, necessitating immediate action.\n* **Volatility Alerts**: Set alerts for significant market volatility spikes. Historical data shows that liquidation events often coincide with rapid price movements, especially in leveraged positions.\n* **Position Size Analysis**: Regularly assess the size of open positions relative to account equity and margin requirements. Over-leveraging can lead to liquidation during adverse market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Trigger",
          "definition": "Conditions or indicators that lead to the forced closure of a trader's position due to insufficient margin."
        }
      ],
      "whyThisMatters": "Recognizing liquidation triggers allows traders to take preemptive measures, reducing the likelihood of forced position closures.",
      "realLifeExample": "A trader notices their margin level has dropped to 90% during a volatile market session, prompting them to reduce position sizes to avoid liquidation.",
      "commonMistake": "Failing to monitor margin levels and volatility, leading to unexpected liquidation events.",
      "quickNote": "Stay vigilant for indicators that signal potential liquidation risks.",
      "mentorText": "Always keep an eye on your margin levels. If they start to dip, take action before the market does it for you.",
      "mentorAnalogy": "Think of this like a pilot monitoring fuel levels; ignoring low fuel can lead to a crash landing."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Utilizing Performance Logs for Insights",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C5 -->\n### Core Scenario: Performance Log Analysis\nPerformance logs provide critical data on slippage and liquidation events, enabling traders to refine their strategies. This card outlines **how to extract actionable insights from performance logs**.\n\n* **Data Segmentation**: Categorize performance logs by trade type, execution speed, and slippage amount. This allows for targeted analysis of specific conditions that lead to increased slippage or liquidation events.\n* **Event Correlation**: Identify patterns by correlating slippage events with market conditions, such as volatility spikes or liquidity drops. Use statistical methods to quantify the impact of these conditions on your trading outcomes.\n* **Actionable Metrics**: Develop key performance indicators (KPIs) from your logs, such as average slippage per trade and liquidation frequency. Regularly review these metrics to inform future trading decisions and strategy adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Log",
          "definition": "A detailed record of trading activities, including execution times, prices, and outcomes."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Understanding performance logs enables traders to identify specific conditions that lead to slippage and liquidation, allowing for informed decision-making.",
      "realLifeExample": "A trader reviews a performance log showing that 70% of slippage occurred during high volatility periods, specifically during the NY open when EURUSD traded at 1.0800.",
      "commonMistake": "Failing to analyze performance logs regularly, leading to missed opportunities for strategy optimization.",
      "quickNote": "Performance logs are essential for identifying slippage patterns and liquidation triggers.",
      "mentorText": "When you analyze your performance logs, focus on the details. Look for trends and correlations that can inform your next steps. If slippage spikes during certain market conditions, adjust your strategy accordingly.",
      "mentorAnalogy": "Think of performance logs like a black box in aviation. Just as pilots review flight data to improve safety and efficiency, traders must scrutinize their logs to enhance execution quality."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Integrating Risk Management Strategies",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C6 -->\n### Core Scenario: Risk Management Integration\nEffective risk management is essential to mitigate slippage and liquidation risks in trading. This card focuses on **how to incorporate robust risk management strategies**.\n\n* **Position Sizing**: Calculate optimal position sizes based on account equity and risk tolerance. Use the Kelly Criterion or fixed fractional method to ensure that slippage does not disproportionately affect your capital.\n* **Stop-Loss Orders**: Implement dynamic stop-loss orders that adjust based on market volatility. This reduces the likelihood of liquidation by allowing for natural price fluctuations while protecting capital.\n* **Diversification**: Spread risk across multiple instruments and asset classes. By diversifying trades, the impact of slippage or liquidation in one position can be mitigated by the performance of others.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade based on risk tolerance."
        }
      ],
      "whyThisMatters": "Integrating risk management strategies is vital for minimizing potential losses due to slippage and liquidation events.",
      "realLifeExample": "A trader using a fixed fractional method determines to risk 2% of their $50,000 account on each trade, ensuring that even with a slippage of 10 pips on a EURUSD trade, their capital remains intact.",
      "commonMistake": "Over-leveraging positions without adequate risk management, leading to increased exposure to slippage and liquidation.",
      "quickNote": "Strong risk management practices are essential to protect against slippage and liquidation risks.",
      "mentorText": "Always assess your risk before entering a trade. Position sizing and stop-loss strategies are your safety nets. Don't let slippage catch you off guard.",
      "mentorAnalogy": "Consider risk management like a safety harness in rock climbing. It allows you to take calculated risks while ensuring you’re protected from falls."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Conducting Live Account Audits",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C7 -->\n### Core Scenario: Live Account Auditing\nConducting thorough audits on live accounts is essential for assessing slippage and liquidation performance metrics. This card details **the steps to execute effective live account audits**.\n\n* **Audit Frequency**: Establish a regular schedule for audits, such as weekly or monthly, to ensure timely identification of slippage and liquidation trends. Consistency is key to maintaining performance oversight.\n* **Metric Evaluation**: Focus on critical metrics such as average slippage per trade, total liquidations, and the average execution speed. Compare these metrics against historical performance to identify deviations.\n* **Action Plan Development**: After identifying issues through audits, create a targeted action plan to address any slippage or liquidation problems. This may include adjusting trading strategies or refining execution methods.",
    "context": {
      "keyTerms": [
        {
          "term": "Live Account Audit",
          "definition": "A systematic review of trading performance metrics on a live trading account."
        },
        {
          "term": "Execution Speed",
          "definition": "The time taken to complete a trade from order placement to execution."
        }
      ],
      "whyThisMatters": "Regular audits provide insights into trading performance, allowing for timely adjustments to minimize slippage and liquidation risks.",
      "realLifeExample": "A trader conducts a monthly audit and discovers that slippage has increased by 15% over the past month during the London session, prompting a review of execution strategies.",
      "commonMistake": "Neglecting to perform regular audits, leading to unaddressed slippage and liquidation issues.",
      "quickNote": "Regular live account audits are crucial for maintaining control over slippage and liquidation metrics.",
      "mentorText": "Treat your live account like a business. Regular audits are your financial reviews, helping you spot issues before they escalate. Stay proactive.",
      "mentorAnalogy": "Think of live account audits like routine health check-ups. Just as doctors monitor vital signs to catch health issues early, traders must review performance metrics to prevent slippage and liquidation."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Implementing Slippage Reduction Techniques",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C8 -->\n### Core Scenario: Slippage Reduction Techniques\nReducing slippage is critical for optimizing trade execution. This card explores **various techniques to minimize slippage in live trading**.\n\n* **Order Types**: Utilize limit orders instead of market orders when possible. Limit orders allow you to set a specific price, reducing the risk of slippage during volatile conditions.\n* **Execution Timing**: Time your trades strategically around market events. Avoid entering trades during high-impact news releases, which can lead to increased slippage due to rapid price movements.\n* **Liquidity Assessment**: Analyze market liquidity before executing trades. Focus on trading during periods of high liquidity, such as the overlap of major market sessions, to minimize slippage risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a security at a specified price or better."
        },
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a security immediately at the current market price."
        }
      ],
      "whyThisMatters": "Implementing slippage reduction techniques enhances trade execution quality and protects against adverse price movements.",
      "realLifeExample": "A trader opts for a limit order to buy EURUSD at 1.0850 during the Asian session, successfully avoiding slippage that occurred when the price spiked to 1.0870 during a news release.",
      "commonMistake": "Relying solely on market orders without considering the potential for slippage during volatile periods.",
      "quickNote": "Employing slippage reduction techniques is vital for maintaining execution quality.",
      "mentorText": "Always think ahead about how to execute your trades. Use limit orders and be mindful of market conditions. Your goal is to minimize slippage, not just to get in the market.",
      "mentorAnalogy": "Implementing slippage reduction techniques is like a chef choosing the right time to serve a dish. Timing and presentation matter; rushing can lead to mistakes and poor outcomes."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Analyzing Liquidation Events",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C9 -->\n### Core Scenario: Liquidation Event Analysis\nAnalyzing past liquidation events provides critical insights into their effects on trading strategies and overall account health. This card teaches **how to systematically evaluate liquidation occurrences to inform future decision-making**.\n\n* **Data Extraction**: Gather historical data on liquidation events, focusing on time, price, and volume. For example, review the BTCUSD pair during the March 2020 crash, noting liquidations at $5,000.\n* **Impact Assessment**: Quantify the impact of each liquidation on account equity and margin levels. Determine if the liquidation led to a significant drawdown, such as a 30% reduction in account value.\n* **Strategy Adjustment**: Identify patterns in liquidation events that correlate with specific market conditions. For instance, if liquidations frequently occur during high volatility periods, adjust risk management protocols accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Event",
          "definition": "A forced closure of a position due to insufficient margin."
        }
      ],
      "whyThisMatters": "Understanding liquidation events allows traders to refine risk management strategies and improve account resilience.",
      "realLifeExample": "During the ETHUSD market drop on May 19, 2021, over $1 billion in liquidations occurred, impacting numerous traders' accounts significantly.",
      "commonMistake": "Traders often overlook the cumulative effect of multiple liquidation events, failing to adjust their strategies accordingly.",
      "quickNote": "Analyze past liquidations to refine future trading strategies.",
      "mentorText": "When you analyze liquidation events, focus on the data. Each event tells a story about market behavior and your trading strategy's vulnerabilities.",
      "mentorAnalogy": "Think of analyzing liquidation events like a forensic investigation after an aircraft incident; every detail matters to prevent future failures."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Forecasting Future Slippage",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C10 -->\n### Core Scenario: Slippage Forecasting Techniques\nForecasting future slippage is essential for enhancing trading strategies and managing risk. This card teaches **how to utilize historical data and market conditions to predict slippage occurrences**.\n\n* **Historical Analysis**: Examine past slippage data across various instruments, such as EURUSD during major news releases. Identify average slippage percentages, e.g., 15 pips during NFP announcements.\n* **Market Condition Correlation**: Establish correlations between market conditions and slippage occurrences. For instance, during high volatility periods, slippage may increase by 20% compared to stable market conditions.\n* **Predictive Modeling**: Implement statistical models to forecast slippage based on identified patterns. Use regression analysis to predict slippage during similar future events, enhancing your execution strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price."
        }
      ],
      "whyThisMatters": "Accurate forecasting of slippage allows traders to adjust their strategies proactively, minimizing potential losses.",
      "realLifeExample": "During the FOMC meeting on December 2021, slippage on USDJPY increased to 25 pips, impacting execution quality for many traders.",
      "commonMistake": "Failing to account for changing market conditions can lead to inaccurate slippage forecasts and unexpected trading costs.",
      "quickNote": "Utilize historical data to forecast future slippage accurately.",
      "mentorText": "Forecasting slippage is like predicting turbulence on a flight; understanding past patterns helps you prepare for future conditions.",
      "mentorAnalogy": "Consider forecasting slippage akin to a meteorologist predicting storms; historical data and current conditions guide accurate forecasts."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Optimizing Performance Metrics",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C11 -->\n### Core Scenario: Performance Metrics Optimization\nOptimizing performance metrics is crucial for minimizing slippage and reducing liquidation risk. This card teaches **how to refine key performance indicators to enhance trading outcomes**.\n\n* **Metric Selection**: Identify and prioritize key performance metrics, such as average slippage per trade and win/loss ratio. For example, aim for an average slippage of less than 5 pips on major currency pairs.\n* **Continuous Monitoring**: Implement a routine for monitoring performance metrics, adjusting strategies based on real-time data. For instance, if slippage exceeds 10 pips consistently, reassess execution methods.\n* **Feedback Loop**: Establish a feedback mechanism to integrate performance data into strategy adjustments. Use weekly reviews to analyze slippage trends and their impact on overall profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess trading performance."
        }
      ],
      "whyThisMatters": "Optimizing performance metrics directly influences slippage reduction and enhances overall trading effectiveness.",
      "realLifeExample": "After analyzing performance metrics, a trader discovered that adjusting their execution strategy reduced slippage from 12 pips to 4 pips on GBPUSD.",
      "commonMistake": "Traders often neglect to adjust their performance metrics, leading to persistent slippage and liquidation risks.",
      "quickNote": "Optimize performance metrics to minimize slippage and liquidation risk.",
      "mentorText": "Focus on your performance metrics as you would on a flight's fuel efficiency; every detail can impact your journey.",
      "mentorAnalogy": "Think of optimizing performance metrics like fine-tuning an engine; small adjustments can lead to significant improvements in efficiency."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Case Study: Slippage and Liquidation",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C12 -->\n### Core Scenario: Practical Case Study on Slippage and Liquidation\nEngaging in a practical case study allows traders to apply learned concepts regarding slippage and liquidation auditing. This card teaches **how to analyze a real-world scenario to reinforce theoretical knowledge**.\n\n* **Scenario Setup**: Review a specific trading scenario, such as the flash crash of the AUDUSD on January 3, 2021. Analyze the conditions leading to slippage and liquidation events.\n* **Data Analysis**: Examine the performance logs from the event, focusing on slippage rates and liquidation triggers. Identify how slippage impacted trade execution and overall account performance.\n* **Strategic Recommendations**: Based on your analysis, formulate strategic recommendations to mitigate similar risks in the future. For example, suggest implementing tighter stop-loss orders during high volatility periods.",
    "context": {
      "keyTerms": [
        {
          "term": "Case Study",
          "definition": "An in-depth analysis of a specific real-world trading scenario."
        }
      ],
      "whyThisMatters": "Applying theoretical knowledge to real-world scenarios enhances understanding and prepares traders for future challenges.",
      "realLifeExample": "In the AUDUSD flash crash, slippage reached 50 pips, leading to significant liquidations, which can be analyzed for better future risk management.",
      "commonMistake": "Traders often fail to connect theoretical concepts to practical scenarios, missing valuable learning opportunities.",
      "quickNote": "Engage in case studies to apply concepts of slippage and liquidation effectively.",
      "mentorText": "In this case study, treat every data point like a clue in a mystery; understanding the context will help you prevent future issues.",
      "mentorAnalogy": "Analyzing a case study is like reviewing a surgical procedure; each step and outcome informs better practices in the future."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Core Track Summary: Slippage and Liquidation Insights",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C13 -->\n### Core Summary: Slippage and Liquidation Auditing\nThis card encapsulates the essential principles of slippage and liquidation auditing, emphasizing their critical impact on trading performance. Understanding these concepts allows traders to identify inefficiencies and mitigate risks associated with execution.\n\n* **Slippage Quantification**: Measure slippage by comparing expected execution prices against actual fills. Utilize performance logs to calculate the average slippage per trade, highlighting areas for improvement.\n* **Liquidation Event Analysis**: Track liquidation events by analyzing margin levels and price movements. Document instances where positions were forcibly closed, correlating them with market volatility to identify patterns.\n* **Performance Impact Assessment**: Evaluate the cumulative effect of slippage and liquidations on overall profitability. Establish metrics to quantify how these factors contribute to drawdowns and recovery times.",
    "visualKey": "execution-speed-monitor",
    "taskData": null
  },
  {
    "type": "practice",
    "title": "Core Certification Portfolio 14: Slippage Application",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C14 -->\n### Practical Application: Advanced Slippage Analysis\nThis card focuses on applying advanced slippage auditing techniques to real trading scenarios, reinforcing the concepts learned in the Core track. Mastery of these techniques is essential for optimizing execution strategies.\n\n* **Scenario Evaluation**: Given a performance log showing a series of trades in the EURUSD with varying slippage, calculate the total slippage incurred over a specified period. Identify trades with the highest slippage and analyze execution conditions.\n* **Trade Adjustment Protocol**: Develop a strategy to adjust trade sizes based on slippage metrics. For example, if slippage exceeds 5 pips on average, consider reducing position sizes to mitigate risk.\n* **Real-Time Monitoring Setup**: Implement a system for real-time slippage monitoring during high-impact news releases. For instance, during the NFP report, track slippage on USD pairs to adjust trading strategies accordingly.",
    "taskData": {
      "type": "choice_block",
      "question": "During a volatile market session, you notice an average slippage of 8 pips on your trades. What is the best course of action?",
      "options": [
        {
          "id": "0",
          "text": "Reduce position sizes to manage risk.",
          "isCorrect": true,
          "feedback": "Reducing position sizes helps mitigate the impact of slippage on overall capital."
        },
        {
          "id": "1",
          "text": "Increase position sizes to recover losses.",
          "isCorrect": false,
          "feedback": "Increasing position sizes can exacerbate losses during high slippage periods."
        },
        {
          "id": "2",
          "text": "Ignore slippage and continue trading as usual.",
          "isCorrect": false,
          "feedback": "Ignoring slippage can lead to significant capital erosion."
        },
        {
          "id": "3",
          "text": "Only trade during low volatility periods.",
          "isCorrect": false,
          "feedback": "While this can reduce slippage, it may limit trading opportunities."
        }
      ]
    },
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "summary",
    "title": "Core Certification Portfolio 15: Liquidation Risk Assessment",
    "label": "Core Track",
    "body": "<!-- M9.4-core-C15 -->\n### Summary: Liquidation Risk Management\nThis card summarizes the advanced techniques for auditing liquidation events, crucial for maintaining a robust trading strategy. Understanding liquidation risks allows traders to implement proactive measures to safeguard capital.\n\n* **Liquidation Threshold Monitoring**: Establish clear thresholds for margin levels that trigger liquidation. For instance, monitor positions that approach 50% margin utilization to preemptively adjust exposure.\n* **Historical Liquidation Analysis**: Review past performance logs to identify patterns in liquidation events. Analyze market conditions that led to forced closures, such as sharp price movements in the S&P 500 during earnings season.\n* **Risk Mitigation Strategies**: Develop a comprehensive risk management plan that includes stop-loss orders and position sizing based on liquidation risk assessments. For example, set stop-loss levels at 2% below entry points to minimize potential liquidation scenarios.",
    "visualKey": "execution-speed-monitor",
    "taskData": null
  }
];
