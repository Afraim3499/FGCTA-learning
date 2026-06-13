import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Adjusting FX Lot Sizes for Risk Management",
    "label": "Forex Track",
    "body": "### Lot Size Adjustment: Mitigating Capital Decay\nDownward adjustments in FX lot sizes are critical during adverse market conditions to protect capital. This card outlines **the process of resizing positions to manage risk effectively**.\n\n* **Dynamic Lot Sizing**: Utilize a formula that calculates the new lot size based on current equity and the maximum acceptable risk per trade, ensuring that lot sizes are adjusted as equity fluctuates.\n* **Risk Percentage Calculation**: Establish a fixed risk percentage (e.g., 1% of total equity) to determine the maximum dollar amount at risk per trade, allowing for precise lot size adjustments.\n* **Market Condition Assessment**: Regularly assess market volatility indicators (e.g., ATR) to inform decisions on when to reduce lot sizes, ensuring that adjustments are data-driven and timely.",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Size",
          "definition": "The number of currency units controlled in a Forex trade."
        },
        {
          "term": "Dynamic Lot Sizing",
          "definition": "Adjusting lot sizes based on current equity and risk parameters."
        }
      ],
      "whyThisMatters": "Effective lot size adjustments can significantly reduce the impact of drawdowns on your equity curve during volatile periods.",
      "realLifeExample": "In a scenario where your account equity is $10,000 and you typically risk 1% per trade, a standard lot size of 1.0 (valued at $10 per pip) may need to be reduced to 0.5 lots if market volatility spikes, limiting potential losses.",
      "commonMistake": "Traders often fail to adjust lot sizes promptly, leading to larger-than-expected losses during adverse conditions.",
      "quickNote": "Adjust lot sizes downward to protect equity during market volatility.",
      "mentorText": "When market conditions worsen, it’s imperative to reassess your position sizes. If your equity is at risk, scaling back is not just smart; it's necessary for survival.",
      "mentorAnalogy": "Think of lot size adjustment like a pilot reducing throttle during turbulence; it’s about maintaining control and ensuring a safe landing."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "concept",
    "title": "The Mechanics of Lot Size Reduction",
    "label": "Forex Track",
    "body": "### Mechanics of Lot Size Reduction: Protecting Equity\nUnderstanding the mechanics of lot size reduction is essential for safeguarding your capital during turbulent market phases. This card explains **how to effectively implement lot size adjustments**.\n\n* **Mathematical Framework**: Calculate the new lot size using the formula: New Lot Size = (Account Equity x Risk Percentage) / (Stop Loss in Pips x Pip Value), ensuring that adjustments are based on clear metrics.\n* **Volatility Assessment**: Monitor volatility indicators such as the Average True Range (ATR) to determine when market conditions warrant a reduction in lot sizes, allowing for proactive risk management.\n* **Implementation Protocol**: Establish a protocol for when to reduce lot sizes, such as exceeding a specific ATR threshold, ensuring consistent application of risk management strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A volatility indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        },
        {
          "term": "Pip Value",
          "definition": "The monetary value of a one-pip movement in a currency pair."
        }
      ],
      "whyThisMatters": "Properly understanding the mechanics of lot size reduction can prevent significant capital loss during adverse market conditions.",
      "realLifeExample": "If the ATR for EURUSD increases to 50 pips, and your risk percentage remains at 1%, your new lot size should be recalculated to reflect this increased risk, potentially reducing from 1.0 to 0.75 lots.",
      "commonMistake": "Many traders do not recalibrate their calculations based on changing market conditions, leading to inappropriate lot sizes.",
      "quickNote": "Use a mathematical framework to determine new lot sizes during market volatility.",
      "mentorText": "You need to be precise with your calculations. If the market is more volatile, your lot size must reflect that; it’s not just about the numbers, it’s about protecting your capital.",
      "mentorAnalogy": "Consider this like an architect adjusting the load-bearing calculations of a structure in response to unexpected weather conditions; it’s about ensuring stability."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "concept",
    "title": "Identifying Adverse Market Conditions",
    "label": "Forex Track",
    "body": "### Identifying Adverse Market Conditions: Proactive Risk Management\nRecognizing adverse market conditions is essential for timely lot size adjustments. This card focuses on **how to identify signals that indicate a need for reduced exposure**.\n\n* **Volatility Indicators**: Use tools like the ATR and Bollinger Bands to gauge market volatility; significant increases in these indicators often signal adverse conditions.\n* **Economic Calendar Monitoring**: Stay informed about scheduled economic events (e.g., central bank announcements) that can lead to increased market volatility, necessitating a reassessment of lot sizes.\n* **Technical Analysis Signals**: Look for technical patterns such as breakouts or reversals that indicate potential market instability, prompting a reduction in lot sizes to manage risk effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Bollinger Bands",
          "definition": "A volatility indicator that consists of a middle band and two outer bands, indicating overbought or oversold conditions."
        },
        {
          "term": "Economic Calendar",
          "definition": "A schedule of economic events that can impact market conditions."
        }
      ],
      "whyThisMatters": "Identifying adverse market conditions allows traders to proactively adjust their strategies, minimizing potential losses.",
      "realLifeExample": "If the ATR for GBPUSD spikes to 70 pips ahead of a Bank of England interest rate decision, this signals a need to reduce lot sizes to mitigate risk exposure.",
      "commonMistake": "Traders often overlook economic events or volatility signals, leading to unpreparedness during market shifts.",
      "quickNote": "Use volatility indicators and economic events to identify when to reduce lot sizes.",
      "mentorText": "Pay attention to the signs. If the market is reacting to news or showing increased volatility, it’s time to reassess your risk exposure.",
      "mentorAnalogy": "Like a weather forecaster predicting a storm, you must be able to read the signs and adjust your sails accordingly."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "concept",
    "title": "Implementing Risk Adjustment Strategies",
    "label": "Forex Track",
    "body": "### Implementing Risk Adjustment Strategies: Maintaining Equity Balance\nEffective risk adjustment strategies are crucial for maintaining a balanced equity curve during periods of market volatility. This card explores **various strategies for lot size adjustments**.\n\n* **Tiered Lot Sizing**: Develop a tiered approach where lot sizes are reduced incrementally based on volatility levels, allowing for a structured response to market changes.\n* **Stop Loss Adjustments**: Implement tighter stop losses in conjunction with reduced lot sizes to further limit exposure, ensuring that risk is managed on multiple fronts.\n* **Regular Review Protocols**: Establish a routine for reviewing market conditions and adjusting lot sizes accordingly, ensuring that strategies remain relevant and effective in changing environments.",
    "context": {
      "keyTerms": [
        {
          "term": "Tiered Lot Sizing",
          "definition": "A strategy of adjusting lot sizes in stages based on predefined volatility thresholds."
        },
        {
          "term": "Stop Loss",
          "definition": "An order placed to sell a security when it reaches a certain price, limiting potential losses."
        }
      ],
      "whyThisMatters": "Implementing structured risk adjustment strategies can significantly enhance capital preservation during volatile market phases.",
      "realLifeExample": "In a situation where the market volatility indicator exceeds 60 pips, a trader might reduce their lot size from 1.0 to 0.5 and tighten their stop loss from 30 pips to 20 pips to minimize risk.",
      "commonMistake": "Failing to regularly review and adjust strategies can lead to outdated risk management practices that do not account for current market conditions.",
      "quickNote": "Implement structured risk adjustment strategies to maintain a balanced equity curve.",
      "mentorText": "You need to have a plan for when the market shifts. Adjust your lot sizes and stop losses systematically; it’s about staying ahead of the curve.",
      "mentorAnalogy": "Like a chef adjusting cooking times based on ingredient freshness, you must adapt your strategies to the current market conditions for optimal results."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "concept",
    "title": "Psychological Impact of Lot Size Changes",
    "label": "Forex Track",
    "body": "### Psychological Dynamics: Lot Size Adjustments\nChanging lot sizes can significantly influence a trader's mental state and decision-making process. This card explores **the psychological effects of adjusting lot sizes on trading confidence and discipline**.\n\n* **Confidence Erosion**: A sudden increase in lot size can lead to heightened anxiety, causing traders to second-guess their strategies and decisions.\n* **Discipline Maintenance**: Establishing a systematic approach to lot size adjustments helps maintain discipline, reducing emotional responses during drawdowns.\n* **Cognitive Dissonance**: Traders may experience cognitive dissonance when their risk tolerance conflicts with their emotional reactions to potential losses, impacting their overall performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Cognitive Dissonance",
          "definition": "The mental discomfort experienced when holding conflicting beliefs or values, particularly in trading."
        }
      ],
      "whyThisMatters": "Understanding the psychological impact of lot size changes is critical for maintaining consistent performance during periods of volatility.",
      "realLifeExample": "A trader increases their lot size from 1.0 to 2.0 on a EURUSD position, leading to a 50% increase in potential loss, which triggers anxiety and indecision during a market pullback.",
      "commonMistake": "Traders often underestimate the psychological strain of increasing lot sizes, leading to impulsive decisions that can exacerbate losses.",
      "quickNote": "Lot size changes can destabilize a trader's confidence and discipline, necessitating a structured approach.",
      "mentorText": "When you adjust your lot size, recognize the mental shift it creates. Stick to your plan and avoid letting fear dictate your actions.",
      "mentorAnalogy": "Think of lot size adjustments like a pilot changing altitude. A sudden shift can cause turbulence; maintaining a steady course is essential for a safe flight."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "concept",
    "title": "Case Studies in Lot Size Adjustments",
    "label": "Forex Track",
    "body": "### Analyzing Success: Lot Size Adjustment Strategies\nExamining real-world case studies reveals effective strategies for managing drawdowns through lot size adjustments. This card highlights **successful implementations of lot size changes by Forex traders**.\n\n* **Case Study 1: The Conservative Trader**: A trader reduced their lot size by 50% during a volatile market phase, resulting in minimized losses while maintaining capital for future opportunities.\n* **Case Study 2: The Aggressive Adjuster**: Another trader increased their lot size by 30% after a series of winning trades, successfully capitalizing on momentum while adhering to a strict risk management framework.\n* **Outcome Analysis**: Both traders demonstrated that strategic lot size adjustments, aligned with market conditions, can protect equity and enhance long-term profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Momentum Trading",
          "definition": "A strategy that capitalizes on the continuation of existing trends in the market."
        }
      ],
      "whyThisMatters": "Learning from case studies allows traders to adopt proven strategies for lot size adjustments that effectively manage drawdowns.",
      "realLifeExample": "A trader faced a drawdown of 15% on their account and decided to halve their lot size on all trades, which resulted in a recovery of 10% within two weeks without additional losses.",
      "commonMistake": "Traders often fail to analyze past adjustments, missing valuable lessons that could inform future strategies.",
      "quickNote": "Case studies provide insights into effective lot size adjustments that can mitigate drawdowns.",
      "mentorText": "Look at how others have navigated their lot size adjustments. Their experiences can guide your decisions and help you avoid common pitfalls.",
      "mentorAnalogy": "Just as engineers study past designs to improve future projects, traders must analyze their lot size adjustments to refine their strategies."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios for Lot Size Adjustment",
    "label": "Forex Track",
    "body": "### Engaging with Lot Size Adjustments\nApplying theoretical knowledge to practical scenarios reinforces understanding of lot size adjustments in Forex trading. This card presents **realistic situations requiring lot size adjustments based on market conditions**.\n\n* **Scenario 1: Market Volatility**: Given a sudden spike in volatility, you must decide whether to increase or decrease your lot size on an open position. Consider the current drawdown and your risk tolerance.\n* **Scenario 2: Trend Confirmation**: After a series of winning trades, the market shows signs of a strong trend. Determine how much to increase your lot size while adhering to your risk management rules.\n* **Scenario 3: Economic News Release**: A major economic news release is scheduled. Evaluate whether to maintain, increase, or decrease your lot size based on the potential impact on your open positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Volatility",
          "definition": "The degree of variation in trading prices over time, often influenced by news or events."
        }
      ],
      "whyThisMatters": "Practicing lot size adjustments in various scenarios prepares traders to respond effectively to real market conditions.",
      "realLifeExample": "During a high-impact news release for the USD, you decide to reduce your lot size by 40% to mitigate risk, resulting in a controlled exposure during potential market swings.",
      "commonMistake": "Traders often fail to adjust their lot sizes appropriately in response to changing market conditions, leading to increased risk exposure.",
      "quickNote": "Engaging in practical scenarios sharpens your ability to adjust lot sizes effectively.",
      "mentorText": "In practice, you need to think critically about your lot sizes. Each scenario is unique, and your adjustments must reflect the current market environment.",
      "mentorAnalogy": "Adjusting lot sizes is like a chef modifying ingredient quantities based on the dish's requirements; precision is key to achieving the desired outcome."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are facing a 10% drawdown on your account, and the market is experiencing high volatility. What should you do with your lot size?",
      "options": [
        {
          "id": "0",
          "text": "Increase your lot size to capitalize on potential recovery.",
          "isCorrect": false,
          "feedback": "Increasing lot size during high volatility can exacerbate losses."
        },
        {
          "id": "1",
          "text": "Maintain your current lot size until the market stabilizes.",
          "isCorrect": true,
          "feedback": "Maintaining your lot size helps manage risk during uncertain market conditions."
        },
        {
          "id": "2",
          "text": "Decrease your lot size to reduce risk exposure.",
          "isCorrect": true,
          "feedback": "Decreasing your lot size is a prudent move to protect your equity during drawdowns."
        },
        {
          "id": "3",
          "text": "Close all positions immediately.",
          "isCorrect": false,
          "feedback": "Closing all positions may lead to missed opportunities for recovery."
        }
      ]
    },
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "summary",
    "title": "Summary of FX Lot Size Adjustments",
    "label": "Forex Track",
    "body": "### Recap: FX Lot Size Adjustment Strategies\nAdjusting lot sizes is a critical strategy for protecting equity during adverse market conditions. This card summarizes **the key concepts of lot size adjustments in Forex trading**.\n\n* **Risk Management Framework**: Establishing a clear framework for lot size adjustments ensures that traders can respond effectively to market changes without emotional interference.\n* **Psychological Preparedness**: Understanding the psychological impact of lot size changes helps traders maintain discipline and confidence during drawdowns.\n* **Case Study Insights**: Learning from successful case studies reinforces the importance of strategic lot size adjustments in managing risk and enhancing long-term profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management Framework",
          "definition": "A structured approach to managing risk in trading, including position sizing and lot adjustments."
        }
      ],
      "whyThisMatters": "A solid grasp of lot size adjustments is essential for safeguarding equity and ensuring sustainable trading performance.",
      "realLifeExample": "Traders who effectively adjust their lot sizes during drawdowns can recover faster and maintain a more stable equity curve, as evidenced by numerous case studies.",
      "commonMistake": "Failing to implement a systematic approach to lot size adjustments can lead to emotional trading and increased risk exposure.",
      "quickNote": "Lot size adjustments are vital for equity protection in Forex trading.",
      "mentorText": "Remember, the way you adjust your lot sizes can make or break your trading strategy. Stay disciplined and stick to your plan.",
      "mentorAnalogy": "Adjusting lot sizes is akin to a surgeon modifying their approach based on the patient's condition; precision and adaptability are crucial for successful outcomes."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  }
];
