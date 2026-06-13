import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Risk Contraction in Gold Trading",
    "label": "Gold Track",
    "body": "### Risk Contraction: Adjusting Positions During Market Stress\nRisk contraction is essential for maintaining capital integrity in volatile gold markets. This card details **how to adjust positions when correlation models break down**.\n\n* **Correlation Breakdown Signals**: Monitor the correlation between gold and other assets, such as the USD or equities. A sudden divergence indicates potential market stress, necessitating a reevaluation of position sizes.\n* **Position Size Adjustment**: Implement a systematic approach to reduce position sizes by 25-50% when correlation models fail. This helps mitigate exposure during unpredictable market conditions.\n* **Dynamic Risk Assessment**: Utilize real-time data analytics to assess market conditions. Adjust risk parameters based on volatility indicators, ensuring that your equity curve remains protected during downturns.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Models",
          "definition": "Statistical relationships between gold and other financial instruments that inform risk management."
        }
      ],
      "whyThisMatters": "Effective risk contraction safeguards your equity curve during periods of heightened volatility, preserving capital for future trades.",
      "realLifeExample": "During the March 2020 market crash, gold's correlation with equities shifted dramatically. A trader who reduced their gold position by 40% when the S&P 500 fell 10% protected their capital from further drawdown.",
      "commonMistake": "Failing to adjust position sizes promptly when correlation models indicate stress can lead to significant losses.",
      "quickNote": "Adjust positions in response to correlation breakdowns to protect your equity curve.",
      "mentorText": "When you see correlations breaking down, it’s time to act. Think of it as a warning light on your dashboard; don’t ignore it. Scale back your positions to stay safe.",
      "mentorAnalogy": "Adjusting your risk in trading is like a pilot reducing altitude during turbulence. You don’t wait for the storm to pass; you take immediate action to ensure safety."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "concept",
    "title": "Understanding Correlation Models in Gold Trading",
    "label": "Gold Track",
    "body": "### Correlation Models: Significance in Gold Trading\nCorrelation models are vital for assessing the relationship between gold and other market assets. This card explains **how to interpret correlation breakdowns as risk signals**.\n\n* **Key Correlation Indicators**: Track the correlation coefficient between gold and major indices or currencies. A coefficient near 1 indicates strong correlation, while values approaching 0 suggest divergence.\n* **Market Sentiment Analysis**: Incorporate sentiment analysis to understand shifts in market behavior. A sudden change in sentiment can lead to correlation breakdowns, signaling the need for risk contraction.\n* **Historical Context**: Analyze historical data to identify patterns of correlation breakdowns during market stress. This historical perspective can inform future risk management strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        }
      ],
      "whyThisMatters": "Understanding correlation models allows traders to anticipate market shifts and adjust their risk exposure accordingly.",
      "realLifeExample": "In early 2022, gold's correlation with the USD weakened as inflation fears rose. Traders who recognized this shift were able to adjust their risk profiles effectively.",
      "commonMistake": "Over-reliance on historical correlations without considering current market conditions can lead to poor risk management decisions.",
      "quickNote": "Monitor correlation coefficients to identify potential risk signals in gold trading.",
      "mentorText": "Think of correlation models as your trading compass. When they start pointing in different directions, it’s time to recalibrate your strategy.",
      "mentorAnalogy": "Using correlation models is like a navigator adjusting a ship’s course based on changing winds. You must adapt to maintain your intended path."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "concept",
    "title": "Techniques for Risk Adjustment in Gold Trades",
    "label": "Gold Track",
    "body": "### Risk Adjustment Techniques in Gold Trading\nEffective risk management involves adjusting your positions based on market conditions. This card outlines **specific techniques for risk adjustment during market stress**.\n\n* **Trailing Stop Loss Orders**: Implement trailing stops to lock in profits while allowing for potential upside. Adjust the stop loss dynamically based on volatility to protect against sudden downturns.\n* **Position Sizing Models**: Use a position sizing model that factors in current volatility levels. For example, reduce position sizes by 30% when the Average True Range (ATR) exceeds a predefined threshold.\n* **Diversification Strategies**: Consider diversifying into other commodities or assets that have low correlation with gold. This can help mitigate risk exposure during periods of gold market stress.",
    "context": {
      "keyTerms": [
        {
          "term": "Trailing Stop Loss",
          "definition": "An order that moves with the market price to secure profits while limiting losses."
        }
      ],
      "whyThisMatters": "Implementing effective risk adjustment techniques ensures that your trading strategy remains resilient in volatile conditions.",
      "realLifeExample": "A trader using a trailing stop loss on their gold position during the August 2021 price drop was able to exit with minimal loss, preserving capital for future trades.",
      "commonMistake": "Neglecting to adjust position sizes or stop losses in response to changing market conditions can lead to excessive drawdowns.",
      "quickNote": "Utilize trailing stops and position sizing models to manage risk effectively in gold trades.",
      "mentorText": "Adjusting your risk isn’t just about cutting losses; it’s about being proactive. Use tools like trailing stops to protect your gains.",
      "mentorAnalogy": "Think of risk adjustment like a chef adjusting seasoning in a dish. Too much salt can ruin a meal, just as too much risk can ruin your trading strategy."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "concept",
    "title": "Identifying Market Stress Indicators",
    "label": "Gold Track",
    "body": "### Market Stress Indicators in Gold Trading\nRecognizing market stress indicators is crucial for timely risk contraction. This card focuses on **how to identify these indicators to manage risk effectively**.\n\n* **Volatility Index Monitoring**: Track the VIX or gold-specific volatility measures. A spike in these indices often precedes significant market movements, indicating a need for risk adjustment.\n* **Economic Data Releases**: Pay attention to key economic indicators such as inflation rates or employment figures. Unexpected results can trigger market stress, prompting a reassessment of risk exposure.\n* **Market Sentiment Shifts**: Utilize sentiment analysis tools to gauge trader sentiment. A rapid shift towards bearish sentiment can signal impending market stress, necessitating proactive risk management.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Index (VIX)",
          "definition": "A measure of market expectations of near-term volatility, often used as an indicator of market stress."
        }
      ],
      "whyThisMatters": "Identifying market stress indicators enables traders to act swiftly, adjusting their risk profiles before significant losses occur.",
      "realLifeExample": "In November 2021, a sudden spike in the VIX indicated rising market uncertainty, prompting traders to reduce their gold positions by 30% to mitigate potential losses.",
      "commonMistake": "Ignoring market stress indicators can lead to delayed responses, resulting in larger-than-necessary drawdowns.",
      "quickNote": "Monitor volatility indices and economic data to identify potential market stress early.",
      "mentorText": "Stay alert for signs of market stress. It’s like watching the weather; if you see storm clouds, prepare for rain by adjusting your risk.",
      "mentorAnalogy": "Identifying market stress is akin to a doctor monitoring vital signs. Just as a doctor reacts to abnormal readings, you must respond to market signals to protect your health—your capital."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "concept",
    "title": "Psychological Factors in Risk Contraction",
    "label": "Gold Track",
    "body": "### Psychological Factors: Decision-Making Under Risk Contraction\nRisk contraction in gold trading is heavily influenced by psychological factors that can distort decision-making. This card explores **the mental frameworks that traders must adopt to maintain discipline during periods of heightened risk**.\n\n* **Fear of Loss**: Traders often experience heightened anxiety during drawdowns, leading to impulsive decisions. A disciplined approach requires recognizing this fear and adhering to pre-defined risk parameters.\n* **Confirmation Bias**: Traders may seek information that supports their existing beliefs about market direction, ignoring contrary signals. Maintaining objectivity is essential to avoid detrimental positions.\n* **Cognitive Dissonance**: When faced with losses, traders may struggle to reconcile their strategies with outcomes. Establishing a clear risk management protocol helps mitigate this psychological conflict.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Contraction",
          "definition": "The strategic reduction of exposure during periods of increased market volatility."
        },
        {
          "term": "Cognitive Dissonance",
          "definition": "The mental discomfort experienced when holding conflicting beliefs or values."
        }
      ],
      "whyThisMatters": "Understanding psychological factors is critical for maintaining discipline and clarity during risk contraction, directly impacting trading performance.",
      "realLifeExample": "During a market downturn, a trader holding a gold position at $1,800 may panic and sell at $1,750 due to fear, missing the subsequent recovery to $1,850.",
      "commonMistake": "Traders often allow emotional responses to dictate their trading decisions, leading to premature exits from positions.",
      "quickNote": "Psychological discipline is essential for effective risk contraction in gold trading.",
      "mentorText": "When you feel that urge to act out of fear, pause and remember your risk management plan. Stick to it, even when the market feels chaotic.",
      "mentorAnalogy": "Think of a pilot navigating through turbulence; they rely on instruments and protocols rather than instinct to ensure a safe flight."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "concept",
    "title": "Case Studies in Gold Risk Management",
    "label": "Gold Track",
    "body": "### Case Studies: Successful Risk Contraction Strategies\nAnalyzing real-world examples of gold traders reveals effective risk contraction strategies during market stress. This card highlights **the methodologies employed by successful traders to safeguard their capital**.\n\n* **Trader A's Adaptive Sizing**: Faced with a sharp drop in gold prices from $1,900 to $1,800, Trader A reduced position sizes by 50% to manage risk, allowing them to remain active without overexposure.\n* **Trader B's Hedging Techniques**: Trader B implemented options to hedge against potential declines, maintaining a long position in gold while limiting downside risk during uncertain market conditions.\n* **Trader C's Stop-Loss Adjustments**: During a volatile period, Trader C adjusted their stop-loss orders dynamically, moving them closer to the market price to protect profits while allowing for potential upside.",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging",
          "definition": "A risk management strategy used to offset potential losses in an investment."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price, limiting potential losses."
        }
      ],
      "whyThisMatters": "Studying successful risk management strategies provides actionable insights that can be applied in your own trading.",
      "realLifeExample": "In March 2020, Trader A reduced their gold exposure from 10 contracts to 5 as prices fell, preserving capital and enabling them to re-enter at lower levels.",
      "commonMistake": "Traders often fail to adapt their strategies in response to changing market conditions, leading to larger-than-necessary losses.",
      "quickNote": "Case studies illustrate practical applications of risk contraction strategies in gold trading.",
      "mentorText": "Look at how others have navigated market stress. Their strategies can be your blueprint for success in turbulent times.",
      "mentorAnalogy": "Consider a surgeon adjusting their technique based on the patient's response during an operation; flexibility can save lives—and capital."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios for Risk Contraction in Gold",
    "label": "Gold Track",
    "body": "### Practical Application: Risk Contraction Scenarios\nEngaging in practical scenarios reinforces the application of risk contraction strategies in gold trading. This card presents **situational exercises that require strategic decision-making**.\n\n* **Scenario 1**: Gold prices drop from $1,850 to $1,800 due to geopolitical tensions. You hold a long position. What is your immediate action?\n* **Scenario 2**: After a strong rally to $1,900, you notice increased volatility. Your current position is 10 contracts. How do you adjust your risk exposure?\n* **Scenario 3**: You have a trailing stop-loss set at $1,880. The market gaps down to $1,870 overnight. What should you consider before making a decision?",
    "context": {
      "keyTerms": [
        {
          "term": "Trailing Stop-Loss",
          "definition": "A stop-loss order that moves with the market price to lock in profits."
        },
        {
          "term": "Geopolitical Tensions",
          "definition": "Political events that can impact market stability and investor sentiment."
        }
      ],
      "whyThisMatters": "Practicing these scenarios enhances your ability to respond effectively to real market conditions, reinforcing risk management skills.",
      "realLifeExample": "In a scenario where gold drops to $1,800, a trader who reduces their position by 50% can avoid further losses as prices stabilize.",
      "commonMistake": "Failing to simulate real market conditions can lead to unpreparedness when actual volatility occurs.",
      "quickNote": "Engaging in practical scenarios sharpens your risk management skills in gold trading.",
      "mentorText": "Think through these scenarios as if they were live trades. Your responses should be calculated and aligned with your risk management plan.",
      "mentorAnalogy": "Like a firefighter assessing a blaze, you must evaluate the situation calmly and decide the best course of action to contain risk."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You hold a long position in gold at $1,850. Prices drop to $1,800 due to geopolitical tensions. What is your best course of action?",
      "options": [
        {
          "id": "0",
          "text": "Hold the position and wait for recovery.",
          "isCorrect": false,
          "feedback": "Holding without adjustment can lead to larger losses if the market continues to decline."
        },
        {
          "id": "1",
          "text": "Reduce your position size by 50%.",
          "isCorrect": true,
          "feedback": "Reducing your position size helps manage risk while allowing for potential recovery."
        },
        {
          "id": "2",
          "text": "Increase your position size to average down.",
          "isCorrect": false,
          "feedback": "Increasing exposure in a declining market can amplify losses."
        },
        {
          "id": "3",
          "text": "Set a stop-loss at $1,790.",
          "isCorrect": false,
          "feedback": "While setting a stop-loss is prudent, it should be based on your overall risk management strategy."
        }
      ]
    },
    "visualKey": "asymmetric-gear-shift"
  },
  {
    "type": "summary",
    "title": "Summary of Risk Contraction in Gold Trading",
    "label": "Gold Track",
    "body": "### Summary: Key Concepts of Risk Contraction\nRisk contraction is a vital strategy for protecting equity during market volatility in gold trading. This card recaps **the essential principles and practices of risk contraction**.\n\n* **Discipline and Clarity**: Maintaining a disciplined approach is crucial for effective risk management, especially during emotional market conditions.\n* **Adaptability**: Successful traders adjust their strategies based on market dynamics, employing techniques like position sizing and hedging to mitigate risk.\n* **Continuous Learning**: Analyzing case studies and engaging in practical scenarios enhances understanding and application of risk contraction strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Equity Curve",
          "definition": "A graphical representation of a trader's account balance over time."
        },
        {
          "term": "Market Volatility",
          "definition": "The degree of variation in trading prices over time."
        }
      ],
      "whyThisMatters": "A solid grasp of risk contraction principles is essential for long-term success and capital preservation in gold trading.",
      "realLifeExample": "Traders who effectively implement risk contraction strategies during downturns can preserve capital and position themselves for future gains.",
      "commonMistake": "Neglecting to apply risk contraction strategies can lead to significant drawdowns and impact overall trading performance.",
      "quickNote": "Risk contraction is essential for safeguarding equity during market volatility.",
      "mentorText": "Reflect on these principles and ensure they are part of your trading routine. They will serve you well in turbulent times.",
      "mentorAnalogy": "Like a seasoned sailor adjusting the sails in a storm, you must navigate market turbulence with skill and foresight."
    },
    "taskData": null,
    "visualKey": "asymmetric-gear-shift"
  }
];
