import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Slippage Audits on GC Futures",
    "label": "Gold Track",
    "body": "<!-- M9.4-gold-C1 -->\n### Core Scenario: Conducting Slippage Audits on GC Futures\nThis card details the methodology for auditing slippage specifically during GC futures trading around high-impact US macro announcements. Understanding slippage during these critical periods is essential for accurate performance evaluation.\n\n* **Data Collection Protocol**: Gather execution logs from GC futures trades executed during the 15 minutes before and after major macro announcements, such as Non-Farm Payrolls or CPI releases. Ensure timestamps, prices, and execution types are recorded.\n* **Slippage Calculation Method**: Calculate slippage by comparing the expected execution price (based on pre-announcement market conditions) to the actual execution price. Use the formula: Slippage = (Actual Price - Expected Price) / Expected Price.\n* **Performance Benchmarking**: Establish a benchmark for acceptable slippage levels based on historical data. Analyze the collected slippage data against this benchmark to identify outlier events that require further investigation.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "GC Futures",
          "definition": "Gold futures contracts traded on the COMEX exchange."
        }
      ],
      "whyThisMatters": "Accurate slippage audits during macro announcements can reveal inefficiencies in execution strategies and help refine trading approaches.",
      "realLifeExample": "On March 10, 2023, GC futures experienced slippage of 0.75% during the Non-Farm Payrolls report, with expected prices at $1,850 and actual execution at $1,860.",
      "commonMistake": "Failing to account for pre-announcement volatility, leading to inaccurate slippage assessments.",
      "quickNote": "Audit slippage around macro announcements to enhance trade execution accuracy.",
      "mentorText": "When you conduct slippage audits, focus on the critical moments around major announcements. Each trade's execution needs to be scrutinized to understand where slippage occurs and why.",
      "mentorAnalogy": "Think of this process like an aerospace engineer analyzing flight data during takeoff and landing. Each moment is crucial, and understanding deviations from expected performance is key to improving future outcomes."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Impact of Macro Announcements on Slippage",
    "label": "Gold Track",
    "body": "<!-- M9.4-gold-C2 -->\n### Core Scenario: Analyzing Macro Announcements and Slippage\nMacroeconomic announcements significantly influence slippage in gold trading, particularly during periods of heightened volatility. This card outlines the relationship between these announcements and slippage events.\n\n* **Volatility Metrics**: Monitor the volatility index (VIX) and gold price movements leading up to macro announcements. A spike in these metrics often correlates with increased slippage.\n* **Market Sentiment Analysis**: Assess market sentiment through news releases and analyst reports prior to announcements. A shift in sentiment can lead to rapid price changes, affecting execution prices.\n* **Execution Timing Strategy**: Develop a strategy for executing trades just before or after announcements, weighing the potential for slippage against the likelihood of favorable price movement. Use historical data to inform timing decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Index (VIX)",
          "definition": "A measure of market expectations of near-term volatility conveyed by S&P 500 stock index option prices."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        }
      ],
      "whyThisMatters": "Understanding how macro announcements impact slippage enables traders to adjust their strategies and mitigate risks effectively.",
      "realLifeExample": "During the FOMC meeting on May 3, 2023, the VIX rose by 15%, leading to an average slippage of 1.2% on GC futures trades executed in the hour following the announcement.",
      "commonMistake": "Ignoring the influence of macroeconomic data releases on market conditions, leading to unexpected slippage.",
      "quickNote": "Macro announcements can drastically increase slippage; monitor volatility and sentiment closely.",
      "mentorText": "Always be aware of the economic calendar. Major announcements can shift the market in seconds, and understanding this can save you from unnecessary slippage.",
      "mentorAnalogy": "Consider this like a surgeon preparing for a critical operation. They must account for every variable, including the patient's condition, to ensure a successful outcome."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Optimizing Futures Trading to Reduce Slippage",
    "label": "Gold Track",
    "body": "<!-- M9.4-gold-C3 -->\n### Core Scenario: Strategies for Minimizing Slippage in Gold Futures\nOptimizing trading strategies in gold futures is essential for reducing slippage, especially during key economic events. This card presents actionable strategies to achieve this goal.\n\n* **Order Type Selection**: Utilize limit orders instead of market orders during volatile periods to control execution prices. This can significantly reduce slippage by ensuring trades are filled at desired levels.\n* **Liquidity Assessment**: Analyze liquidity conditions in the market prior to executing trades. Higher liquidity typically results in lower slippage; avoid trading during low liquidity periods, such as off-hours or holidays.\n* **Pre-Execution Analysis**: Conduct a thorough analysis of market depth and order book data before placing trades. Identifying large buy/sell walls can help anticipate slippage and adjust execution strategies accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a security at a specified price or better."
        },
        {
          "term": "Market Depth",
          "definition": "The market's supply and demand at various price levels."
        }
      ],
      "whyThisMatters": "Implementing these strategies can lead to more favorable execution prices and improved overall trading performance.",
      "realLifeExample": "On April 15, 2023, a trader used limit orders during the CPI announcement, resulting in a slippage of only 0.3% compared to 1.5% experienced by those using market orders.",
      "commonMistake": "Relying solely on market orders during high volatility, leading to excessive slippage.",
      "quickNote": "Optimize order types and assess liquidity to minimize slippage in futures trading.",
      "mentorText": "Your choice of order type can make a significant difference in execution quality. Always think ahead and choose wisely to mitigate slippage.",
      "mentorAnalogy": "Imagine a chef preparing a meal. They need to select the right ingredients and tools to ensure the dish is perfect; similarly, your order type and timing are crucial for successful trading."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Analyzing Liquidation Events in Gold Futures",
    "label": "Gold Track",
    "body": "<!-- M9.4-gold-C4 -->\n### Core Scenario: Timing and Conditions for Liquidation Events\nAnalyzing liquidation events in gold futures requires a focus on timing and prevailing market conditions. This card provides a framework for understanding these critical occurrences.\n\n* **Liquidation Triggers**: Identify common triggers for liquidation events, such as margin calls or significant price drops. Understanding these triggers allows for better risk management strategies.\n* **Market Condition Assessment**: Evaluate market conditions leading up to liquidation events, including volatility spikes and volume surges. These factors often precede significant price movements that can trigger liquidations.\n* **Post-Liquidation Analysis**: After a liquidation event, conduct a thorough analysis of the price action and volume patterns. This can provide insights into market behavior and help refine future trading strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Event",
          "definition": "A situation where a trader's position is forcibly closed due to insufficient margin."
        },
        {
          "term": "Margin Call",
          "definition": "A demand by a broker that an investor deposit more money or securities to cover potential losses."
        }
      ],
      "whyThisMatters": "Understanding liquidation events enables traders to anticipate market movements and adjust their strategies accordingly.",
      "realLifeExample": "On February 24, 2023, a sudden drop in gold prices triggered a wave of liquidations, with over $100 million in positions closed within minutes due to margin calls.",
      "commonMistake": "Failing to monitor margin levels and market conditions, leading to unexpected liquidations.",
      "quickNote": "Analyze liquidation events to anticipate market shifts and manage risk effectively.",
      "mentorText": "Always keep an eye on margin levels and market conditions. Liquidation events can happen quickly, and being prepared is essential to protect your capital.",
      "mentorAnalogy": "Think of this like a pilot monitoring fuel levels and weather conditions. Just as they must be prepared for sudden changes, so must you be ready to act in the market."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Understanding Slippage Variance in Gold",
    "label": "Gold Track",
    "body": "<!-- M9.4-gold-C5 -->\n### Core Scenario: Slippage Variance in Gold Trading\nSlippage variance occurs when the execution price of a gold trade deviates from the expected price, particularly during volatile market conditions. This card elucidates **how to quantify and analyze slippage variance** in gold trading.\n\n* **Volatility Impact Assessment**: Identify periods of high volatility, such as during economic announcements or geopolitical events, where slippage is likely to increase. Use historical data to correlate slippage events with specific news releases affecting gold prices.\n* **Execution Speed Analysis**: Monitor the execution speed of trades during these volatile periods. A significant delay in execution can exacerbate slippage, leading to larger discrepancies between expected and actual fill prices.\n* **Statistical Slippage Measurement**: Calculate slippage variance by comparing the average slippage during calm market conditions against slippage during high volatility. Use standard deviation to quantify the risk associated with slippage in different market environments.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage Variance",
          "definition": "The difference between the expected execution price and the actual execution price during trading."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over a given period."
        }
      ],
      "whyThisMatters": "Understanding slippage variance helps traders manage execution risk and optimize trading strategies during volatile periods.",
      "realLifeExample": "During the FOMC announcement on March 15, 2023, gold futures (GC) experienced slippage of 12 pips when the expected fill was at $1,950.00, but the actual execution occurred at $1,962.00.",
      "commonMistake": "Traders often underestimate the impact of market news on slippage, failing to adjust their strategies accordingly.",
      "quickNote": "Quantifying slippage variance is essential for effective risk management in gold trading.",
      "mentorText": "When trading gold, you must be aware that slippage can vary dramatically with market conditions. Always analyze past events to gauge how slippage might affect your trades.",
      "mentorAnalogy": "Think of slippage variance like turbulence during a flight. Just as pilots prepare for unexpected shifts in air currents, traders must anticipate and account for price fluctuations during volatile market conditions."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Logging Performance Metrics for Gold Trades",
    "label": "Gold Track",
    "body": "<!-- M9.4-gold-C6 -->\n### Core Scenario: Performance Metrics Logging\nAccurate logging of performance metrics is vital for analyzing slippage and liquidation events in gold trading. This card provides a framework for **systematically recording and evaluating trade performance**.\n\n* **Trade Log Structure**: Create a detailed trade log that includes execution price, expected price, slippage amount, and time of execution. Ensure that each entry is timestamped to correlate with market conditions at that moment.\n* **Slippage and Liquidation Tracking**: Develop a method to categorize slippage events as minor, moderate, or severe based on the deviation from expected prices. Additionally, log any liquidation events, noting the price at which liquidation occurred and the market context.\n* **Performance Review Cycle**: Schedule regular reviews of your trade logs to identify patterns in slippage and liquidation events. Use this data to refine your trading strategy and improve execution efficiency.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Metrics",
          "definition": "Quantifiable measures used to assess the efficiency and success of trading activities."
        },
        {
          "term": "Trade Log",
          "definition": "A systematic record of all trades executed, including relevant performance data."
        }
      ],
      "whyThisMatters": "Logging performance metrics enables traders to identify trends and improve decision-making based on historical data.",
      "realLifeExample": "A trader logs a gold trade executed at $1,955.00 with an expected price of $1,950.00, recording a slippage of 5 pips. This entry is timestamped during the release of U.S. employment data.",
      "commonMistake": "Traders often fail to log trades consistently, leading to incomplete data that hinders performance analysis.",
      "quickNote": "Systematic logging of trades is essential for effective slippage and liquidation analysis.",
      "mentorText": "Every trade you execute should be meticulously logged. This data is your roadmap to understanding your performance and improving your strategy.",
      "mentorAnalogy": "Logging trades is akin to a surgeon maintaining a detailed patient record. Just as a surgeon reviews past cases to enhance surgical outcomes, traders must analyze their logs to refine their trading practices."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "practice",
    "title": "Practice: Slippage in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.4-gold-C7 -->\n### Core Scenario: Simulating Slippage Events\nEngage in practical exercises to simulate slippage scenarios in gold trading, particularly during macroeconomic announcements. This card focuses on **applying theoretical knowledge in real-world-like conditions**.\n\n* **Scenario Setup**: Use a trading simulator to execute gold trades during predetermined macroeconomic events, such as interest rate announcements or inflation reports. Adjust the execution speed to reflect realistic market conditions.\n* **Slippage Calculation**: After executing trades, calculate the slippage experienced in each scenario. Compare the expected execution price with the actual fill price to determine the impact of slippage on overall trade performance.\n* **Review and Adjust**: Analyze the results of your simulated trades. Identify which scenarios led to the highest slippage and develop strategies to mitigate these risks in future trading.",
    "context": {
      "keyTerms": [
        {
          "term": "Trading Simulator",
          "definition": "A software tool that allows traders to practice trading in a risk-free environment."
        },
        {
          "term": "Macroeconomic Events",
          "definition": "Significant economic announcements that can impact market volatility."
        }
      ],
      "whyThisMatters": "Practicing slippage scenarios prepares traders to navigate real market conditions effectively.",
      "realLifeExample": "In a simulated environment, a trader executes a gold trade at $1,960.00 during a surprise inflation report, experiencing a slippage of 8 pips when the actual fill occurs at $1,968.00.",
      "commonMistake": "Traders may overlook the importance of simulating slippage scenarios, leading to unpreparedness during actual trading.",
      "quickNote": "Simulating slippage scenarios enhances preparedness for real market conditions.",
      "mentorText": "You need to practice slippage scenarios to understand their impact on your trades. Use simulations to prepare for the unexpected.",
      "mentorAnalogy": "Simulating slippage is like a pilot conducting emergency drills. Just as pilots train for unexpected situations, traders must prepare for slippage during volatile market conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated macroeconomic announcement, you execute a gold trade at $1,950.00, but the actual execution price is $1,955.00. What is the slippage experienced?",
      "options": [
        {
          "id": "0",
          "text": "5 pips",
          "isCorrect": true,
          "feedback": "Correct. Slippage is calculated as the difference between the expected price and the actual execution price."
        },
        {
          "id": "1",
          "text": "10 pips",
          "isCorrect": false,
          "feedback": "Incorrect. Slippage is the difference between $1,950.00 and $1,955.00, which is 5 pips."
        },
        {
          "id": "2",
          "text": "0 pips",
          "isCorrect": false,
          "feedback": "Incorrect. There is a slippage of 5 pips in this scenario."
        },
        {
          "id": "3",
          "text": "15 pips",
          "isCorrect": false,
          "feedback": "Incorrect. The slippage is only 5 pips, calculated from the expected and actual prices."
        }
      ]
    },
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "summary",
    "title": "Gold Track Summary",
    "label": "Gold Track",
    "body": "<!-- M9.4-gold-C8 -->\n### Core Scenario: Summary of Key Concepts\nThis summary encapsulates the essential concepts covered in the Gold Track, focusing on slippage audits during macroeconomic events. Understanding these principles is critical for effective trading.\n\n* **Slippage Variance**: Recognize the impact of volatility on slippage variance in gold trading and the necessity of quantifying these deviations to manage risk effectively.\n* **Performance Metrics Logging**: Emphasize the importance of maintaining detailed trade logs to analyze slippage and liquidation events, facilitating informed decision-making.\n* **Practical Application**: Engage in simulated exercises to prepare for real-world slippage scenarios, enhancing readiness for trading during macroeconomic announcements.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage Audits",
          "definition": "The process of reviewing and analyzing slippage events to improve trading performance."
        },
        {
          "term": "Macroeconomic Events",
          "definition": "Major economic announcements that influence market volatility and trading conditions."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces the critical nature of slippage audits in optimizing trading strategies.",
      "realLifeExample": "A trader reviews their performance logs post-FOMC announcement, noting a consistent pattern of slippage during high volatility, prompting a strategy adjustment.",
      "commonMistake": "Failing to integrate insights from slippage audits into trading strategies can lead to repeated mistakes.",
      "quickNote": "Key concepts in slippage and liquidation audits are vital for successful gold trading.",
      "mentorText": "Reflect on what you've learned about slippage and liquidation. Use this knowledge to refine your trading strategy and improve your execution.",
      "mentorAnalogy": "Summarizing these concepts is like a post-flight debrief for pilots. Just as pilots analyze their flight data to improve future performance, traders must review their slippage audits to enhance their trading outcomes."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  }
];
