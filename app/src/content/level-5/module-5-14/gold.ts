import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "COMEX Session Clock Awareness",
    "label": "Gold Track",
    "body": "### COMEX Session: Optimal Trading Hours\nAwareness of the COMEX session clock is essential for executing trades during periods of maximum liquidity and volatility. This card emphasizes **the importance of timing in Gold trading**.\n\n* **Session Timing**: The COMEX Gold trading session runs from 8:20 AM to 1:30 PM EST. Trades executed during these hours typically experience tighter spreads and higher volume.\n* **Market Overlap**: Identify overlapping sessions with other major markets (e.g., London) to capitalize on increased volatility and price movement.\n* **Pre-Market Analysis**: Conduct a thorough analysis of market conditions before the session opens, ensuring that your strategy aligns with anticipated price movements during active trading hours.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX",
          "definition": "The Commodity Exchange, where Gold futures and options are traded."
        }
      ],
      "whyThisMatters": "Executing trades during optimal hours enhances the probability of favorable execution and minimizes slippage.",
      "realLifeExample": "On a typical trading day, executing a Gold trade at 10:00 AM EST during the COMEX session can yield a tighter spread of 0.5 pips compared to 3 pips during off-hours.",
      "commonMistake": "Traders often overlook session timings, leading to trades executed in low liquidity periods, resulting in higher slippage.",
      "quickNote": "Maximize trade efficiency by aligning execution with COMEX session hours.",
      "mentorText": "If you want to ensure your trades are executed at the best prices, you must be aware of when the market is most active. Timing is everything.",
      "mentorAnalogy": "Think of trading like a commercial flight schedule; you want to take off when the runway is clear and traffic is minimal, not when the airport is congested."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Average True Range (ATR) Checks",
    "label": "Gold Track",
    "body": "### ATR: Measuring Market Volatility\nThe Average True Range (ATR) is a vital tool for assessing market volatility and adjusting risk parameters accordingly. This card focuses on **how to effectively utilize ATR in your trading strategy**.\n\n* **ATR Calculation**: Calculate the ATR using the previous 14 periods to gauge the average price movement. This value informs your stop-loss and take-profit placements.\n* **Volatility Assessment**: A rising ATR indicates increasing volatility, suggesting a need for wider stop-loss orders to avoid premature exits. Conversely, a falling ATR may allow for tighter stops.\n* **Position Sizing**: Use the ATR value to determine position size based on your risk tolerance. For instance, if the ATR is $10 and your risk per trade is $100, you can safely trade 10 ounces of Gold.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        }
      ],
      "whyThisMatters": "Understanding ATR allows traders to adapt their strategies to changing market conditions, enhancing risk management.",
      "realLifeExample": "If Gold's ATR is $15, setting a stop-loss at $30 below the entry price may be too tight, risking a stop-out during normal market fluctuations.",
      "commonMistake": "Traders often neglect to adjust their stop-loss levels based on ATR, leading to unnecessary losses during volatile periods.",
      "quickNote": "Use ATR to adapt your risk parameters to current market volatility.",
      "mentorText": "Always check the ATR before entering a trade. It will guide you on how much room to give your trades to breathe.",
      "mentorAnalogy": "Consider ATR like a car's speedometer; it tells you how fast the market is moving, allowing you to adjust your driving style accordingly."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Slippage Allowance Assessment",
    "label": "Gold Track",
    "body": "### Slippage: Managing Execution Discrepancies\nAssessing slippage allowances is critical in Gold trading to ensure your risk management strategy accommodates potential execution discrepancies. This card highlights **how to evaluate and plan for slippage**.\n\n* **Understanding Slippage**: Define acceptable slippage levels based on historical data. For instance, if Gold typically experiences 1-2 pips of slippage during high-impact news, factor this into your trade planning.\n* **Order Types**: Utilize limit orders to mitigate slippage risk. While market orders may execute quickly, they can incur higher slippage during volatile conditions.\n* **Risk Assessment**: Incorporate slippage into your overall risk calculations. If your stop-loss is set at $1,800 and slippage could push it to $1,802, reassess the trade's viability based on your risk tolerance.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Proper slippage assessment prevents unexpected losses and ensures that trades align with risk management protocols.",
      "realLifeExample": "During a news release, if you place a market order for Gold at $1,800 and it fills at $1,804 due to slippage, your risk profile has changed significantly.",
      "commonMistake": "Failing to account for slippage can lead to significant losses, especially during high volatility events.",
      "quickNote": "Always assess slippage when planning trades to ensure alignment with your risk management strategy.",
      "mentorText": "Before executing a trade, always consider how slippage might affect your entry and exit points. It’s a crucial part of your risk management.",
      "mentorAnalogy": "Think of slippage like a chef adjusting cooking times based on how hot the stove is; you need to account for variations to achieve the desired outcome."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Gold Market Trends Analysis",
    "label": "Gold Track",
    "body": "### Analyzing Market Trends for Gold\nIncorporating market trends into your pre-trade checklist is essential for effective risk management in Gold trading. This card focuses on **how to analyze and integrate trends into your trading strategy**.\n\n* **Trend Identification**: Utilize technical indicators such as moving averages and trend lines to identify prevailing trends in Gold prices. Confirm trends with volume analysis to ensure robustness.\n* **Market Sentiment**: Gauge market sentiment through news analysis and economic indicators. For example, rising inflation rates may lead to increased demand for Gold as a safe haven, impacting your trading decisions.\n* **Risk Adjustments**: Adjust your risk parameters based on the identified trend. In a strong bullish trend, consider increasing position sizes, while in a bearish trend, tighten stop-loss levels to protect capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Trend",
          "definition": "The general direction in which the price of an asset is moving."
        }
      ],
      "whyThisMatters": "Understanding market trends allows traders to align their strategies with prevailing market conditions, enhancing risk management.",
      "realLifeExample": "If Gold is in a confirmed bullish trend with prices consistently above the 50-day moving average, increasing position size may be justified, provided risk parameters are adjusted accordingly.",
      "commonMistake": "Traders often ignore trend analysis, leading to trades that go against market momentum and increased risk exposure.",
      "quickNote": "Integrate trend analysis into your pre-trade checklist to enhance risk management.",
      "mentorText": "Always check the trend before placing a trade. It’s like reading the weather before planning an outdoor event; you need to know what conditions to expect.",
      "mentorAnalogy": "Analyzing market trends is like a navigator plotting a course; you must understand the currents and winds to reach your destination safely."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Technical Analysis for Gold Trading",
    "label": "Gold Track",
    "body": "### Technical Analysis: Indicators for Gold Trading\nTechnical analysis provides a framework for evaluating Gold price movements and identifying potential entry and exit points. This card details **how to integrate critical technical indicators into your pre-trade checklist**.\n\n* **Moving Averages**: Utilize the 50-day and 200-day moving averages to identify trend direction. A bullish signal occurs when the 50-day crosses above the 200-day, while a bearish signal arises when the opposite occurs.\n* **Relative Strength Index (RSI)**: Monitor the RSI for overbought or oversold conditions. An RSI above 70 indicates potential overbought conditions, while below 30 suggests oversold conditions, guiding trade timing.\n* **Fibonacci Retracement Levels**: Apply Fibonacci retracement levels to identify potential support and resistance zones. For instance, if Gold retraces to the 61.8% level after a rally, it may present a buying opportunity if other indicators align.",
    "context": {
      "keyTerms": [
        {
          "term": "Moving Averages",
          "definition": "A technical indicator that smooths price data to identify trends."
        },
        {
          "term": "Relative Strength Index (RSI)",
          "definition": "A momentum oscillator that measures the speed and change of price movements."
        },
        {
          "term": "Fibonacci Retracement",
          "definition": "A tool used to identify potential reversal levels based on the Fibonacci sequence."
        }
      ],
      "whyThisMatters": "Incorporating technical analysis into your checklist ensures that trades are supported by quantitative data, enhancing decision-making accuracy.",
      "realLifeExample": "On August 15, 2023, Gold's 50-day moving average crossed above the 200-day average at $1,900, signaling a potential bullish trend, prompting a pre-trade checklist review for long positions.",
      "commonMistake": "Failing to adjust the checklist for different time frames can lead to conflicting signals and poor trade execution.",
      "quickNote": "Integrate moving averages, RSI, and Fibonacci levels into your Gold trading checklist.",
      "mentorText": "When you look at Gold, think of the moving averages as your compass. If they point north, you should consider going long, but if they point south, it’s time to reassess your position.",
      "mentorAnalogy": "Like an aerospace engineer using flight data to adjust flight paths, you must rely on technical indicators to navigate your Gold trading strategy."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Global Economic Factors Impacting Gold",
    "label": "Gold Track",
    "body": "### Economic Influences: Gold Price Dynamics\nGlobal economic factors play a significant role in determining Gold prices. This card outlines **how to incorporate these factors into your risk management checklist**.\n\n* **Interest Rates**: Monitor central bank interest rate decisions, as lower rates typically increase Gold's attractiveness as a non-yielding asset. For example, a 0.25% rate cut by the Federal Reserve can lead to a surge in Gold prices.\n* **Inflation Rates**: Track inflation indicators; rising inflation often drives investors to Gold as a hedge. If the Consumer Price Index (CPI) shows a 3% increase, it may trigger a checklist review for Gold purchases.\n* **Geopolitical Events**: Assess the impact of geopolitical tensions on Gold demand. For instance, during the Ukraine crisis in early 2022, Gold prices spiked due to increased safe-haven buying, necessitating a checklist adjustment for risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Interest Rates",
          "definition": "The amount charged by lenders to borrowers for the use of money."
        },
        {
          "term": "Inflation",
          "definition": "The rate at which the general level of prices for goods and services rises."
        },
        {
          "term": "Geopolitical Events",
          "definition": "Political events that affect global economic stability and investor behavior."
        }
      ],
      "whyThisMatters": "Understanding economic factors allows traders to anticipate market movements and adjust their risk management strategies accordingly.",
      "realLifeExample": "On March 15, 2023, the Federal Reserve announced a 0.25% interest rate cut, leading to a 2% increase in Gold prices within 24 hours, prompting a review of long positions in the checklist.",
      "commonMistake": "Overlooking the impact of global events can lead to significant losses, as market sentiment can shift rapidly.",
      "quickNote": "Incorporate interest rates, inflation, and geopolitical events into your Gold trading checklist.",
      "mentorText": "Think of economic indicators as the weather forecast for your trades. If the forecast predicts a storm, you need to prepare your checklist accordingly to avoid getting caught off guard.",
      "mentorAnalogy": "Just as a surgeon assesses a patient's vital signs before an operation, you must evaluate economic indicators before executing Gold trades."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "practice",
    "title": "Gold Pre-Trade Checklist Application",
    "label": "Gold Track",
    "body": "### Practical Application: Gold Pre-Trade Checklist\nEngage in exercises to apply the Gold-specific pre-trade checklist effectively. This card focuses on **solidifying your understanding of unique parameters involved in Gold trading**.\n\n* **Scenario Analysis**: Evaluate a hypothetical scenario where Gold is trading at $1,950. Check if the RSI is at 72, indicating overbought conditions, and if the 50-day moving average is above the 200-day average, confirming a bullish trend.\n* **Economic Review**: Analyze recent economic data, such as a CPI increase of 3%, and assess how this impacts your checklist. Determine if a long position aligns with your risk tolerance and capital rules.\n* **Geopolitical Assessment**: Consider current geopolitical tensions, such as ongoing trade disputes, and their potential impact on Gold prices. Adjust your checklist to reflect any increased risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating potential future events by considering alternative possible outcomes."
        },
        {
          "term": "Economic Data",
          "definition": "Statistical data that reflects the economic performance of a country."
        },
        {
          "term": "Geopolitical Assessment",
          "definition": "The evaluation of political events and their potential impact on market dynamics."
        }
      ],
      "whyThisMatters": "Practicing the application of the pre-trade checklist ensures that traders are prepared for real market conditions and can make informed decisions.",
      "realLifeExample": "In a simulated trading environment, you analyze Gold at $1,950 with an RSI of 72 and decide against entering a long position due to overbought conditions, reinforcing your checklist discipline.",
      "commonMistake": "Rushing through checklist items without thorough analysis can lead to missed opportunities or increased risk.",
      "quickNote": "Apply scenario analysis, economic reviews, and geopolitical assessments in your Gold pre-trade checklist.",
      "mentorText": "When you sit down to trade, treat your checklist like a flight plan. Every item must be checked off to ensure a safe and successful journey in the market.",
      "mentorAnalogy": "Just as a chef meticulously checks each ingredient before cooking, you must ensure every parameter in your checklist aligns before executing a Gold trade."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are considering a long position in Gold at $1,950. The RSI is at 75, and recent CPI data shows a 2.5% increase. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Enter the long position immediately.",
          "isCorrect": false,
          "feedback": "Entering the position is risky due to the overbought RSI, which indicates potential price corrections."
        },
        {
          "id": "1",
          "text": "Wait for the RSI to drop below 70 before entering.",
          "isCorrect": true,
          "feedback": "Waiting for the RSI to drop indicates a more favorable entry point, aligning with risk management principles."
        },
        {
          "id": "2",
          "text": "Ignore the RSI and focus solely on the CPI data.",
          "isCorrect": false,
          "feedback": "Ignoring the RSI can lead to entering a position at a peak, increasing the risk of loss."
        },
        {
          "id": "3",
          "text": "Enter a short position instead.",
          "isCorrect": false,
          "feedback": "Entering a short position contradicts the bullish trend indicated by the moving averages."
        }
      ]
    },
    "visualKey": "risk-checklists"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Risk Management",
    "label": "Gold Track",
    "body": "### Key Concepts: Gold Risk Management\nEffective risk management in Gold trading hinges on a thorough pre-trade audit. This card summarizes **the essential elements of risk management specific to Gold**.\n\n* **Checklist Integration**: Ensure that your pre-trade checklist incorporates both technical indicators and economic factors. This dual approach enhances the robustness of your trading strategy.\n* **Continuous Monitoring**: Regularly update your checklist based on market conditions and economic developments. This practice ensures that your trading decisions remain aligned with current data.\n* **Risk Tolerance Alignment**: Always align your trading decisions with your defined risk tolerance and capital rules. This alignment is crucial for long-term sustainability in trading.",
    "context": {
      "keyTerms": [
        {
          "term": "Checklist Integration",
          "definition": "The process of combining various analytical tools into a cohesive trading strategy."
        },
        {
          "term": "Continuous Monitoring",
          "definition": "The ongoing assessment of market conditions and economic indicators."
        },
        {
          "term": "Risk Tolerance",
          "definition": "The level of risk an individual is willing to accept in their trading activities."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces the importance of a disciplined approach to trading Gold, ensuring adherence to capital rules.",
      "realLifeExample": "After reviewing your checklist, you adjust your strategy on September 10, 2023, in response to rising inflation data, ensuring your trading approach remains relevant.",
      "commonMistake": "Neglecting to update the checklist can lead to outdated strategies that do not reflect current market realities.",
      "quickNote": "Emphasize checklist integration, continuous monitoring, and risk tolerance alignment in Gold trading.",
      "mentorText": "Your checklist is your trading lifeline. If you don’t regularly review and update it, you’re sailing blind in turbulent waters.",
      "mentorAnalogy": "Like an architect revising blueprints based on new regulations, you must adapt your trading checklist to reflect the latest market conditions."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  }
];
