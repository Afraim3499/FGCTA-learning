import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Position Sizing for Gold During COMEX Sessions",
    "label": "Gold Track",
    "body": "### Position Sizing: Adjusting for COMEX Volatility\nDynamic position sizing during COMEX sessions is critical for managing risk in gold trading. This card details **how to utilize ATR for effective position sizing during high-impact trading hours**.\n\n* **ATR Calculation**: Calculate the Average True Range (ATR) over a defined period (e.g., 14 days) to gauge market volatility. For instance, if the ATR for gold is $15, this indicates potential price movement.\n* **Position Size Formula**: Use the formula: Position Size = (Account Risk Amount / (ATR x Risk Multiplier)). For example, with a $1,000 risk amount and a risk multiplier of 2, your position size would be approximately 33 contracts if the ATR is $15.\n* **Session Timing**: Adjust position sizes based on the COMEX session timings (8:20 AM - 1:30 PM EST) when volatility typically increases, ensuring you are positioned correctly for market movements.",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        },
        {
          "term": "COMEX",
          "definition": "Commodity Exchange, where gold futures are traded."
        }
      ],
      "whyThisMatters": "Understanding how to adjust position sizes based on ATR during COMEX sessions can significantly reduce risk exposure and enhance profitability.",
      "realLifeExample": "During the COMEX session on March 15, 2023, gold's ATR was $12. If you risk $1,000 with a risk multiplier of 2, your position size would be 41 contracts, allowing you to navigate volatility effectively.",
      "commonMistake": "Failing to adjust position sizes dynamically based on ATR, leading to overexposure during volatile periods.",
      "quickNote": "Use ATR to determine position sizes during COMEX sessions for optimal risk management.",
      "mentorText": "When trading gold during COMEX, always calculate your position size based on the ATR. This ensures you are not over-leveraging during volatile times.",
      "mentorAnalogy": "Think of position sizing like adjusting the throttle on an aircraft; too much throttle during turbulence can lead to a crash, while the right amount keeps you steady."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Impact of USD Interest Rates on Gold Volatility",
    "label": "Gold Track",
    "body": "### Interest Rates: Volatility and Position Sizing\nChanges in USD interest rates directly influence gold volatility, necessitating adjustments in position sizing. This card explains **how to correlate interest rate movements with ATR for effective trading**.\n\n* **Interest Rate Sensitivity**: Gold typically reacts negatively to rising interest rates, increasing volatility. For instance, a 25 basis point increase can elevate gold's ATR by 20%.\n* **Position Adjustment**: When interest rates rise, recalculate position sizes using the new ATR. If the ATR increases from $10 to $12 due to a rate hike, adjust your position size accordingly to maintain risk levels.\n* **Market Timing**: Monitor Federal Reserve announcements closely, as these can lead to immediate volatility spikes in gold, impacting your ATR calculations and position sizing strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Interest Rates",
          "definition": "The cost of borrowing money, set by central banks."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices."
        }
      ],
      "whyThisMatters": "Understanding the relationship between interest rates and gold volatility allows traders to optimize position sizes and mitigate risk effectively.",
      "realLifeExample": "On May 4, 2023, the Federal Reserve raised rates by 25 basis points, causing gold's ATR to spike from $10 to $12. A trader adjusting their position size would need to recalculate based on this new volatility measure.",
      "commonMistake": "Ignoring the impact of interest rate changes on gold volatility, leading to inadequate position sizing.",
      "quickNote": "Adjust position sizes based on ATR changes following USD interest rate announcements.",
      "mentorText": "Keep a close eye on interest rate changes; they can shift gold's volatility dramatically. Always adjust your position size accordingly to stay within your risk parameters.",
      "mentorAnalogy": "Adjusting your position size based on interest rates is like recalibrating a ship's sails in response to changing winds; it keeps you on course and prevents capsizing."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Analyzing Gold Volatility with ATR",
    "label": "Gold Track",
    "body": "### ATR Analysis: Understanding Gold's Volatility\nThe Average True Range (ATR) is a vital tool for analyzing gold's volatility, allowing traders to make informed position sizing decisions. This card covers **how to effectively use ATR to gauge market conditions**.\n\n* **ATR Interpretation**: A rising ATR indicates increasing volatility, while a falling ATR suggests stability. For example, if gold's ATR rises from $8 to $10, it signals heightened market activity.\n* **Position Sizing Strategy**: Use the ATR value to determine your risk per trade. If your account risk is $1,500 and the ATR is $10, you could size your position to risk 15 contracts, ensuring you remain within your risk tolerance.\n* **Volatility Context**: Analyze ATR in conjunction with market events (e.g., economic reports) to anticipate potential volatility spikes, adjusting position sizes proactively.",
    "context": {
      "keyTerms": [
        {
          "term": "ATR Analysis",
          "definition": "The process of evaluating market volatility using Average True Range."
        },
        {
          "term": "Market Conditions",
          "definition": "The current state of the market based on various factors."
        }
      ],
      "whyThisMatters": "Effective ATR analysis enables traders to adapt their position sizes to changing market conditions, enhancing risk management.",
      "realLifeExample": "On June 10, 2023, gold's ATR increased from $9 to $11 following a major economic report. A trader adjusting their position size would need to recalculate based on the new ATR to maintain their risk profile.",
      "commonMistake": "Neglecting to analyze ATR in the context of market events, leading to miscalculated position sizes.",
      "quickNote": "Use ATR to assess volatility and adjust position sizes accordingly for gold trading.",
      "mentorText": "Always check the ATR before entering a trade; it tells you how much room you need to give your position based on current market volatility.",
      "mentorAnalogy": "Using ATR to analyze volatility is like a pilot checking weather conditions before takeoff; it ensures a safe and informed journey."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Risk-Adjusted Position Sizing for Gold",
    "label": "Gold Track",
    "body": "### Risk Management: Position Sizing Techniques\nImplementing risk-adjusted position sizing techniques is essential for effective gold trading. This card outlines **how to leverage ATR for optimal trade execution**.\n\n* **Risk Assessment**: Determine your maximum allowable risk per trade (e.g., 1% of your account). If your account balance is $10,000, your risk per trade should not exceed $100.\n* **Position Size Calculation**: Use the formula: Position Size = (Risk Amount / ATR). For example, if the ATR is $14, your position size would be approximately 7 contracts for a $100 risk.\n* **Dynamic Adjustments**: Continuously monitor ATR and adjust your position sizes as market conditions change, ensuring that your risk remains consistent across trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling risks."
        },
        {
          "term": "Position Sizing Techniques",
          "definition": "Methods used to determine the appropriate size of a trade."
        }
      ],
      "whyThisMatters": "Risk-adjusted position sizing enhances your ability to manage trades effectively, reducing the likelihood of significant drawdowns.",
      "realLifeExample": "On July 5, 2023, with an ATR of $14, a trader with a $10,000 account and a risk threshold of 1% would size their position to 7 contracts, ensuring they stay within their risk limits.",
      "commonMistake": "Failing to adjust position sizes based on ATR, leading to overexposure and increased risk.",
      "quickNote": "Employ risk-adjusted position sizing using ATR to maintain consistent risk across trades.",
      "mentorText": "Always calculate your position size based on your risk tolerance and the ATR. This keeps your trading disciplined and protects your capital.",
      "mentorAnalogy": "Think of risk-adjusted position sizing like a surgeon preparing for an operation; every tool and action must be calculated to ensure a successful outcome."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Gold Trading Strategies Based on ATR",
    "label": "Gold Track",
    "body": "### Gold Strategy: Utilizing ATR for Dynamic Position Sizing\nIncorporating Average True Range (ATR) into gold trading strategies allows for adaptive risk management based on market volatility. This card outlines specific methodologies for executing trades in gold while adjusting position size according to ATR metrics.\n\n* **ATR Calculation**: Calculate the ATR over a specified period (e.g., 14 days) to gauge market volatility. For instance, if the ATR for gold is $20, this indicates an average price movement of $20 per day.\n* **Position Size Adjustment**: Utilize the formula: Position Size = (Account Risk / (ATR x Risk Multiplier)). If your account risk is $1,000 and you set a risk multiplier of 1, your position size would be 50 ounces of gold ($1,000 / ($20 x 1)).\n* **Trade Execution Strategy**: Enter trades when the ATR indicates increased volatility, adjusting position sizes accordingly. For example, if ATR rises to $30, recalibrate your position size to 33 ounces ($1,000 / ($30 x 1)).",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        }
      ],
      "whyThisMatters": "Dynamic position sizing based on ATR allows traders to manage risk effectively in fluctuating market conditions, optimizing capital allocation.",
      "realLifeExample": "During a news event, gold's ATR spikes to $25. A trader recalibrates their position size to 40 ounces based on a $1,000 risk threshold, adapting to increased volatility.",
      "commonMistake": "Failing to adjust position size during periods of high volatility can lead to overexposure and increased risk of significant losses.",
      "quickNote": "ATR-based sizing enhances risk management by aligning position sizes with market volatility.",
      "mentorText": "When you see ATR increasing, it's a signal to reassess your position size. If volatility is high, you need to reduce your exposure to avoid catastrophic losses.",
      "mentorAnalogy": "Think of ATR as the turbulence gauge in an aircraft. Just as pilots adjust altitude and speed based on turbulence, traders must adjust their position sizes based on market volatility."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Practical Application of ATR in Gold Trading",
    "label": "Gold Track",
    "body": "### Practical Application: Calculating ATR for Gold Trades\nEngaging in practical exercises reinforces the application of ATR in gold trading scenarios. This card provides a structured approach to implementing ATR calculations effectively.\n\n* **Data Collection**: Gather historical price data for gold over the last 14 days to compute the ATR. For example, if the daily closing prices are $1,800, $1,805, and $1,795, calculate the true range for each day.\n* **ATR Calculation Steps**: Calculate the true range (TR) for each day, then average these values to derive the ATR. If the TR values are $5, $10, and $8, the ATR would be the average of these values, resulting in an ATR of $7.67.\n* **Position Sizing Formula**: Apply the ATR to determine position size. If your account risk is $1,000 and the ATR is $7.67, your position size would be approximately 130 ounces of gold ($1,000 / ($7.67 x 1)).",
    "context": {
      "keyTerms": [
        {
          "term": "True Range (TR)",
          "definition": "The greatest of the current high minus the current low, the absolute value of the current high minus the previous close, and the absolute value of the current low minus the previous close."
        }
      ],
      "whyThisMatters": "Mastering the practical application of ATR calculations equips traders with the skills necessary to adapt their strategies to real-time market conditions.",
      "realLifeExample": "After calculating the ATR for gold at $15, a trader applies it to their position sizing formula, resulting in a position of 66 ounces based on a $1,000 risk threshold.",
      "commonMistake": "Neglecting to update ATR calculations regularly can lead to outdated position sizing, increasing risk exposure.",
      "quickNote": "Regular ATR calculations are essential for maintaining effective position sizing in volatile markets.",
      "mentorText": "Make it a habit to calculate ATR daily. This will keep your position sizing aligned with current market conditions, preventing unnecessary risk.",
      "mentorAnalogy": "Calculating ATR is like calibrating a compass before a journey. Without accurate readings, you risk veering off course in your trading strategy."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "practice",
    "title": "Summary of Gold Volatility Sizing",
    "label": "Gold Track",
    "body": "### Summary: Key Concepts of Gold Volatility Sizing\nThis card summarizes the essential concepts of volatility-adjusted sizing in gold trading, emphasizing the application of ATR in position sizing. Understanding these concepts is critical for effective risk management.\n\n* **Volatility Measurement**: ATR serves as a dynamic measure of volatility, informing traders when to adjust their position sizes. A higher ATR indicates greater market movement, necessitating smaller position sizes.\n* **Risk Management Framework**: Position sizing based on ATR allows traders to maintain consistent risk levels across varying market conditions. For instance, if ATR rises from $10 to $20, adjust position sizes to mitigate risk exposure.\n* **Continuous Monitoring**: Regularly monitor ATR and adjust position sizes accordingly to ensure alignment with market volatility. This proactive approach helps in capital preservation during turbulent periods.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "A solid grasp of volatility-adjusted sizing ensures traders can navigate market fluctuations while protecting their capital.",
      "realLifeExample": "A trader notices gold's ATR has increased from $15 to $25. They adjust their position size from 100 ounces to 60 ounces to align with the heightened volatility.",
      "commonMistake": "Overlooking the importance of continuous ATR monitoring can lead to inappropriate position sizes and increased risk.",
      "quickNote": "Volatility-adjusted sizing is crucial for maintaining effective risk management in gold trading.",
      "mentorText": "Always keep an eye on ATR. It’s your guide to adjusting your position sizes and managing risk effectively. If ATR spikes, tighten your belt.",
      "mentorAnalogy": "Think of ATR as the speedometer in a car. Just as you adjust your speed based on road conditions, adjust your position size based on ATR readings."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe that the ATR for gold has increased from $10 to $20. If your account risk remains at $1,000, what should you do with your position size?",
      "options": [
        {
          "id": "0",
          "text": "Increase your position size to 100 ounces.",
          "isCorrect": false,
          "feedback": "Increasing position size in response to higher ATR increases risk exposure."
        },
        {
          "id": "1",
          "text": "Decrease your position size to 50 ounces.",
          "isCorrect": true,
          "feedback": "Decreasing position size is appropriate as the ATR indicates higher volatility."
        },
        {
          "id": "2",
          "text": "Maintain your position size at 100 ounces.",
          "isCorrect": false,
          "feedback": "Maintaining position size during increased ATR can lead to excessive risk."
        },
        {
          "id": "3",
          "text": "Double your position size to 200 ounces.",
          "isCorrect": false,
          "feedback": "Doubling position size in a high volatility environment is a significant risk."
        }
      ]
    },
    "visualKey": "volatility-sizing"
  },
  {
    "type": "summary",
    "title": "Gold Advanced Risk Management 8",
    "label": "Gold Track",
    "body": "### Advanced Risk Management: Volatility-Adjusted Sizing for Gold\nThis card covers advanced applications of volatility-adjusted sizing concepts specific to gold trading, focusing on capital defense and risk management metrics. Understanding these advanced techniques is essential for professional traders.\n\n* **Capital Defense Strategies**: Implementing ATR-based position sizing can protect capital during extreme market conditions. For example, if gold's ATR spikes to $30, reduce position sizes to minimize potential losses.\n* **Risk Metrics Integration**: Combine ATR with other risk metrics, such as Value at Risk (VaR), to create a comprehensive risk management framework. For instance, if your VaR indicates a potential loss of $500, ensure your position size aligns with this risk threshold.\n* **Scenario Analysis**: Conduct scenario analyses to evaluate how changes in ATR affect position sizing and overall risk exposure. If ATR increases significantly, reassess your risk profile and adjust your strategies accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Value at Risk (VaR)",
          "definition": "A statistical measure that estimates the potential loss in value of a portfolio over a defined period for a given confidence interval."
        }
      ],
      "whyThisMatters": "Advanced risk management techniques enable traders to navigate volatile markets effectively while safeguarding their capital.",
      "realLifeExample": "In a volatile market where gold's ATR reaches $40, a trader recalibrates their position size to 25 ounces, aligning with their VaR of $500 to mitigate risk.",
      "commonMistake": "Failing to integrate multiple risk metrics can lead to inadequate risk assessment and increased exposure during volatile conditions.",
      "quickNote": "Advanced risk management techniques are vital for protecting capital in fluctuating gold markets.",
      "mentorText": "Always integrate ATR with other risk metrics. This holistic approach ensures you're not just reacting to volatility but strategically managing your risk.",
      "mentorAnalogy": "Think of advanced risk management as a multi-layered security system in a bank. Each layer protects your capital from different threats, ensuring comprehensive defense."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  }
];
