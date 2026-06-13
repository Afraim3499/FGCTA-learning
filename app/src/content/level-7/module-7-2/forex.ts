import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Currency Pair Dynamics",
    "label": "Forex Track",
    "body": "### Core Scenario: Analyzing Currency Pair Dynamics\nAnalyzing currency pair dynamics is essential for identifying potential trading opportunities. This card outlines **how to assess correlations and volatility between currency pairs** before the session begins.\n\n* **Correlation Assessment**: Evaluate the correlation coefficients between selected currency pairs. A correlation above 0.7 indicates a strong relationship, suggesting that movements in one pair may influence another.\n* **Volatility Measurement**: Utilize Average True Range (ATR) to gauge the expected volatility of currency pairs. A higher ATR indicates increased price movement potential, which can inform entry and exit strategies.\n* **Dynamic Pair Selection**: Focus on pairs with high correlation and volatility for the session. For instance, if EURUSD shows a correlation of 0.8 with GBPUSD and an ATR of 0.0050, prioritize these pairs for potential trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two currency pairs move in relation to each other."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset for that period."
        }
      ],
      "whyThisMatters": "Understanding currency pair dynamics allows traders to anticipate price movements and optimize their trading strategies based on market behavior.",
      "realLifeExample": "Before the NY session opens, analyze the correlation between EURUSD and AUDUSD. If EURUSD has a correlation of 0.75 with AUDUSD and an ATR of 0.0045, consider trading both pairs for potential synchronized movements.",
      "commonMistake": "Traders often overlook the significance of correlation, leading to overexposure in trades that may move in the same direction.",
      "quickNote": "Assess correlations and volatility to identify optimal currency pairs for trading.",
      "mentorText": "When preparing for the session, always check how pairs relate to each other. If EURUSD and GBPUSD are moving together, it’s a sign to consider that dynamic in your strategy.",
      "mentorAnalogy": "Think of currency pairs like aircraft in a flight pattern; understanding their dynamics helps ensure safe navigation through market turbulence."
    },
    "taskData": null,
    "visualKey": "pre-session-checklist"
  },
  {
    "type": "concept",
    "title": "DXY Index Analysis",
    "label": "Forex Track",
    "body": "### Core Scenario: Interpreting the DXY Index\nThe DXY Index serves as a benchmark for the US dollar's strength against a basket of currencies. This card details **how to analyze the DXY Index for strategic trading decisions**.\n\n* **Strength Indicators**: Monitor the DXY Index level relative to key support and resistance zones. A break above 94.50 may indicate bullish sentiment, while a drop below 93.00 suggests bearish pressure.\n* **Impact on Currency Pairs**: Assess how changes in the DXY Index affect major pairs. For example, if DXY rises by 0.5%, expect EURUSD to decline, providing a potential shorting opportunity.\n* **Session Correlation**: Correlate DXY movements with upcoming economic data releases. If the DXY is trending upward before a positive Non-Farm Payroll report, anticipate further dollar strength.",
    "context": {
      "keyTerms": [
        {
          "term": "DXY Index",
          "definition": "A measure of the value of the United States dollar relative to a basket of foreign currencies."
        },
        {
          "term": "Support and Resistance",
          "definition": "Price levels on charts that historically act as barriers to price movement."
        }
      ],
      "whyThisMatters": "DXY analysis provides insights into the overall strength of the US dollar, which is crucial for making informed trading decisions in the forex market.",
      "realLifeExample": "Prior to the London session, the DXY Index is observed at 94.20. If it breaks above 94.50, consider shorting EURUSD at 1.1800, anticipating a dollar rally.",
      "commonMistake": "Traders frequently neglect to analyze the DXY Index, missing critical signals that could influence their trading strategies.",
      "quickNote": "Analyze the DXY Index to gauge US dollar strength and its impact on currency pairs.",
      "mentorText": "Always check the DXY before placing trades. If it’s showing strength, adjust your strategy to favor dollar-denominated pairs.",
      "mentorAnalogy": "The DXY is like a compass for a sailor; it guides you in determining the right direction based on the prevailing winds of the market."
    },
    "taskData": null,
    "visualKey": "pre-session-checklist"
  },
  {
    "type": "concept",
    "title": "Selecting Currency Pairs for Trading",
    "label": "Forex Track",
    "body": "### Core Scenario: Criteria for Currency Pair Selection\nSelecting the right currency pairs is critical for maximizing trading effectiveness. This card outlines **the criteria for choosing pairs based on market conditions and personal strategy**.\n\n* **Liquidity Assessment**: Focus on pairs with high liquidity, such as EURUSD and USDJPY, especially during major market sessions. High liquidity reduces slippage and improves execution speed.\n* **Volatility Suitability**: Match your trading strategy with the volatility of the pairs. For scalping, select pairs with lower ATR; for swing trading, opt for pairs with higher ATR to capture larger price movements.\n* **Economic Correlation**: Evaluate pairs based on economic news releases. For instance, if the ECB is expected to raise rates, prioritize trading EURUSD over less correlated pairs like NZDJPY.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The degree to which an asset can be quickly bought or sold in the market without affecting its price."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Selecting the right currency pairs enhances the probability of successful trades, aligning with both market conditions and individual trading strategies.",
      "realLifeExample": "During the Asian session, focus on trading USDJPY due to its high liquidity and volatility, while avoiding less active pairs like EURAUD.",
      "commonMistake": "Traders often select pairs based solely on personal preference rather than objective criteria, leading to suboptimal trading performance.",
      "quickNote": "Select currency pairs based on liquidity, volatility, and economic relevance to optimize trading outcomes.",
      "mentorText": "When choosing pairs, always consider liquidity and volatility. It’s not just about what you like; it’s about what works best in the current market.",
      "mentorAnalogy": "Selecting currency pairs is akin to a chef choosing ingredients; the right combination ensures a successful dish, while the wrong choices can ruin the meal."
    },
    "taskData": null,
    "visualKey": "pre-session-checklist"
  },
  {
    "type": "concept",
    "title": "Reviewing Key Economic Indicators",
    "label": "Forex Track",
    "body": "### Core Scenario: Analyzing Economic Indicators\nEconomic indicators play a pivotal role in shaping currency movements. This card explains **how to analyze key economic indicators to inform trading decisions**.\n\n* **Indicator Prioritization**: Identify which indicators have the most impact on your selected currency pairs. For instance, focus on Non-Farm Payrolls for USD pairs and GDP data for EUR pairs.\n* **Timing of Releases**: Be aware of the release schedule for key indicators. For example, if GDP data for the Eurozone is released at 10:00 AM GMT, prepare to adjust your strategy accordingly at that time.\n* **Market Reaction Analysis**: Analyze historical market reactions to specific indicators. If the last Non-Farm Payroll report showed a deviation of 50K jobs from expectations, anticipate similar volatility in the market response this time.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Indicators",
          "definition": "Statistics that provide information about economic performance and can influence currency values."
        },
        {
          "term": "Market Reaction",
          "definition": "The response of traders and investors to economic data releases, often leading to price movements."
        }
      ],
      "whyThisMatters": "Understanding economic indicators allows traders to anticipate market movements and adjust their strategies accordingly, enhancing decision-making.",
      "realLifeExample": "Prior to the US session, monitor the upcoming Non-Farm Payroll report expected to show an increase of 200K jobs. Adjust your USD pairs strategy to capitalize on potential volatility following the release.",
      "commonMistake": "Traders often overlook the significance of economic indicators, leading to unpreparedness during critical market events.",
      "quickNote": "Analyze key economic indicators to anticipate market movements and refine trading strategies.",
      "mentorText": "Always know the economic calendar. If a major indicator is due, prepare your trades to either capitalize on or protect against volatility.",
      "mentorAnalogy": "Reviewing economic indicators is like a pilot checking weather conditions before takeoff; it ensures a safe and informed journey through the market."
    },
    "taskData": null,
    "visualKey": "pre-session-checklist"
  },
  {
    "type": "concept",
    "title": "Assessing News Impact on Forex",
    "label": "Forex Track",
    "body": "### Core Scenario: Evaluating News Events\nIntegrating news analysis into your pre-session routine is essential for anticipating market volatility. This card outlines **how to systematically assess upcoming news events and their potential influence on currency pairs**.\n\n* **Event Calendar Review**: Analyze the economic calendar for high-impact news events scheduled within the trading session. Focus on central bank announcements, employment reports, and GDP releases that could affect the selected pairs.\n* **Correlation Assessment**: Identify correlations between the news events and the currency pairs. For instance, a U.S. Non-Farm Payroll report can significantly impact USD pairs, such as EURUSD and USDJPY.\n* **Market Sentiment Analysis**: Gauge market sentiment before the news release. Use tools like the Commitment of Traders report to understand positioning and potential reactions to the news.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Calendar",
          "definition": "A schedule of upcoming economic events that may impact financial markets."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular currency or market."
        }
      ],
      "whyThisMatters": "Understanding news impact allows traders to anticipate price movements and adjust their strategies accordingly, minimizing risk exposure.",
      "realLifeExample": "On March 10, 2023, the U.S. Non-Farm Payroll report showed a gain of 500,000 jobs, leading to a 150-pip rally in USDJPY during the NY session.",
      "commonMistake": "Failing to account for the timing of news releases can lead to unexpected volatility and slippage in execution.",
      "quickNote": "Always check the economic calendar before the session to prepare for potential market shifts.",
      "mentorText": "Before the session starts, I always check the economic calendar. If there's a major announcement, I adjust my strategy to account for potential volatility. It's about being prepared.",
      "mentorAnalogy": "Think of this like a pilot checking weather conditions before takeoff. Just as a pilot must know about storms or turbulence, you must understand how news can affect your trading environment."
    },
    "taskData": null,
    "visualKey": "pre-session-checklist"
  },
  {
    "type": "concept",
    "title": "Technical Analysis for Forex Pairs",
    "label": "Forex Track",
    "body": "### Core Scenario: Applying Technical Analysis\nTechnical analysis is pivotal in determining optimal entry and exit points for currency pairs. This card details **the systematic application of technical analysis techniques in your pre-session routine**.\n\n* **Chart Pattern Recognition**: Identify key chart patterns such as head and shoulders, triangles, or flags on the daily and hourly charts. These patterns can indicate potential reversal or continuation points.\n* **Indicator Utilization**: Employ indicators like Moving Averages and RSI to confirm trends and identify overbought or oversold conditions. For example, a 50-period MA crossover can signal a potential trend change.\n* **Support and Resistance Levels**: Mark critical support and resistance levels based on historical price action. Use these levels to set potential entry points and stop-loss orders, ensuring a structured approach to risk management.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Chart Patterns",
          "definition": "Visual formations on a price chart that indicate potential future price movements."
        },
        {
          "term": "Support and Resistance",
          "definition": "Price levels where a currency pair tends to reverse or consolidate."
        }
      ],
      "whyThisMatters": "Technical analysis provides a structured framework for making informed trading decisions based on historical price behavior.",
      "realLifeExample": "On April 15, 2023, EURUSD formed a double bottom pattern at 1.0800, confirming a bullish reversal, which led to a 100-pip upward movement post-session open.",
      "commonMistake": "Over-relying on a single indicator without considering the broader context can lead to misleading signals.",
      "quickNote": "Utilize multiple technical analysis tools to create a comprehensive view of potential market movements.",
      "mentorText": "When I analyze a currency pair, I look for patterns and indicators that tell me where the price might go next. It’s about piecing together the puzzle before making a move.",
      "mentorAnalogy": "Consider this like an architect reviewing blueprints before construction. Just as an architect ensures the design is sound, you must ensure your technical analysis supports your trading plan."
    },
    "taskData": null,
    "visualKey": "pre-session-checklist"
  },
  {
    "type": "practice",
    "title": "Practicing Currency Pair Screening",
    "label": "Forex Track",
    "body": "### Core Scenario: Currency Pair Screening\nEffective currency pair screening is essential for identifying high-potential trading opportunities. This card focuses on **practical exercises to refine your screening skills based on defined criteria**.\n\n* **Criteria Development**: Establish a set of criteria for screening pairs, such as volatility, liquidity, and correlation with economic events. For example, prioritize pairs with a minimum average daily range of 50 pips.\n* **Screening Tools Utilization**: Use screening tools and platforms to filter currency pairs based on your criteria. Set alerts for pairs that meet your conditions, ensuring timely execution.\n* **Review and Adjust**: Regularly review your screening results and adjust criteria based on market conditions. For instance, during high-impact news weeks, prioritize pairs that are likely to be affected by the events.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market."
        }
      ],
      "whyThisMatters": "Refining your screening process enhances your ability to identify favorable trading setups, increasing the probability of successful trades.",
      "realLifeExample": "On May 5, 2023, a trader screened for pairs with over 50 pips average daily range and identified GBPUSD, which moved 80 pips during the session due to economic data releases.",
      "commonMistake": "Neglecting to adjust screening criteria based on changing market conditions can lead to missed opportunities.",
      "quickNote": "Consistently refine your screening criteria to adapt to market dynamics.",
      "mentorText": "Screening currency pairs is like a scout identifying the best terrain for a mission. You need to know where to look to find the best opportunities.",
      "mentorAnalogy": "Think of this as a chef selecting the freshest ingredients before cooking. Just as a chef ensures quality before starting, you must ensure your pairs meet your criteria before trading."
    },
    "taskData": {
          "type": "choice_block",
          "question": "Which average daily range (ADR) filter is most appropriate when screening major forex pairs to ensure adequate volatility for intraday execution?",
          "options": [
                {
                      "id": "0",
                      "text": "Select pairs with an ADR above 50-70 pips to ensure sufficient session range.",
                      "isCorrect": true,
                      "feedback": "Correct. Professional intraday execution requires a minimum range (typically 50-70 pips) to make the planned risk-to-reward targets mathematically viable."
                },
                {
                      "id": "1",
                      "text": "Only trade pairs with an ADR below 15 pips to avoid session breakout traps.",
                      "isCorrect": false,
                      "feedback": "Incorrect. ADR below 15 pips represents extremely low volatility, making it very difficult to hit profit targets within a single session."
                },
                {
                      "id": "2",
                      "text": "Filter for pairs with exactly 10 pips ADR to minimize overnight swap fees.",
                      "isCorrect": false,
                      "feedback": "Incorrect. ADR does not influence overnight swap rates, and 10 pips is too low for day trading."
                },
                {
                      "id": "3",
                      "text": "Select pairs with an ADR above 300 pips during the illiquid Asian session.",
                      "isCorrect": false,
                      "feedback": "Incorrect. Major pairs rarely average 300 pips daily range, and trading high-spread illiquid sessions violates the Execution OS."
                }
          ]
    },
    "visualKey": "pre-session-checklist"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Pre-Session Preparation",
    "label": "Forex Track",
    "body": "### Core Scenario: Comprehensive Pre-Session Review\nA thorough pre-session preparation routine is vital for successful trading. This card summarizes **the essential steps in the forex pre-session preparation process**.\n\n* **News Impact Assessment**: Always evaluate upcoming news events and their potential impact on selected currency pairs. This ensures you are prepared for volatility.\n* **Technical Analysis Application**: Employ technical analysis to determine entry and exit points, utilizing patterns, indicators, and support/resistance levels to guide your decisions.\n* **Currency Pair Screening**: Develop and refine screening criteria to identify high-potential currency pairs, adjusting for market conditions to maximize trading opportunities.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Pre-Session Preparation",
          "definition": "The routine conducted before market open to ensure readiness for trading."
        },
        {
          "term": "Trading Opportunities",
          "definition": "Potential scenarios where trades can be executed profitably."
        }
      ],
      "whyThisMatters": "A structured pre-session routine enhances decision-making and risk management, leading to more consistent trading outcomes.",
      "realLifeExample": "A trader who followed the pre-session routine on June 1, 2023, identified a bullish setup in AUDUSD, resulting in a successful trade during the session.",
      "commonMistake": "Skipping any part of the pre-session routine can lead to unpreparedness and missed trading opportunities.",
      "quickNote": "A disciplined pre-session routine is your foundation for successful trading.",
      "mentorText": "Every successful trader has a routine. By following these steps, you ensure that you’re not just reacting to the market but are prepared to engage it strategically.",
      "mentorAnalogy": "This is akin to a surgeon preparing for an operation. Just as a surgeon reviews the patient’s history and checks instruments, you must prepare thoroughly before entering the market."
    },
    "taskData": null,
    "visualKey": "pre-session-checklist"
  }
];
