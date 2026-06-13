import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Perpetual Contract Size Calculations",
    "label": "Crypto Track",
    "body": "### Contract Sizing: Perpetual Contracts in Crypto\nCalculating the correct size for perpetual contracts is essential for effective risk management in cryptocurrency trading. This card teaches **how to determine the appropriate contract size for assets like BTC and ETH based on account equity and stop-loss distances**.\n\n* **Unit Multiplier Formula**: The contract size can be calculated using the formula: \\( \\text{Contract Size} = \\frac{\\text{Account Equity} \\times \\text{Risk Percentage}}{\\text{Stop Loss Distance}} \\). For example, with an account equity of $10,000, a risk percentage of 2%, and a stop loss of $500, the contract size would be 40 contracts.\n* **Asset-Specific Adjustments**: Different cryptocurrencies have varying volatility levels. Adjust the contract size based on the asset's historical volatility; for instance, if BTC typically moves $1,000 and ETH moves $100, the contract sizes should reflect these differences.\n* **Leverage Considerations**: When using leverage, ensure that the calculated contract size accounts for the leverage ratio. For example, using 10x leverage on a $1,000 position means the effective contract size is $10,000, necessitating a recalibration of risk parameters.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Contract",
          "definition": "A derivative that allows traders to speculate on the price of an asset without an expiration date."
        },
        {
          "term": "Unit Multiplier",
          "definition": "A factor used to determine the size of a contract based on risk parameters."
        }
      ],
      "whyThisMatters": "Correctly sizing perpetual contracts minimizes the risk of significant losses while maximizing potential gains in volatile markets.",
      "realLifeExample": "Trading BTC with an account equity of $15,000, a risk percentage of 1%, and a stop loss of $750 results in a contract size of 20 contracts, allowing for a calculated exposure without exceeding risk limits.",
      "commonMistake": "Failing to adjust contract sizes based on volatility can lead to overexposure during rapid market movements.",
      "quickNote": "Use the formula to calculate contract size based on equity, risk percentage, and stop loss distance.",
      "mentorText": "When calculating your contract sizes, always remember to factor in the volatility of the asset. If BTC is moving wildly, you need to size down to protect your capital.",
      "mentorAnalogy": "Think of sizing your contracts like calibrating a precision instrument in aerospace engineering; each adjustment must be exact to ensure safety and performance."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Calculating Margin Collateral for Crypto Trades",
    "label": "Crypto Track",
    "body": "### Margin Requirements: Calculating Collateral\nUnderstanding margin collateral is critical for determining how much capital is required to open and maintain a position in cryptocurrency trading. This card explains **how to compute the margin collateral needed for various crypto trades**.\n\n* **Margin Calculation Formula**: The required margin can be calculated using: \\( \\text{Margin} = \\frac{\\text{Contract Size} \\times \\text{Current Price}}{\\text{Leverage}} \\). For instance, if you are trading 10 contracts of ETH at $2,000 each with 5x leverage, the margin required is $4,000.\n* **Collateral Adjustments**: Be aware that collateral requirements may change based on market conditions. If the price of ETH rises to $2,200, the margin requirement will increase proportionally, necessitating additional collateral.\n* **Risk Assessment**: Always assess the risk of your collateral against the potential loss. If your margin is too close to your liquidation price, consider reducing your position size to avoid forced liquidation.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Collateral",
          "definition": "The amount of capital required to open and maintain a leveraged position."
        },
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase potential returns."
        }
      ],
      "whyThisMatters": "Accurate margin calculations prevent unexpected liquidations and ensure that traders maintain sufficient capital to support their positions.",
      "realLifeExample": "If you enter a trade with 5 contracts of BTC at $30,000 each and use 10x leverage, your margin requirement would be $15,000, which must be maintained to avoid liquidation.",
      "commonMistake": "Underestimating margin requirements can lead to margin calls and forced liquidations, especially in volatile markets.",
      "quickNote": "Calculate margin collateral using the contract size, current price, and leverage to ensure adequate funding.",
      "mentorText": "Always keep an eye on your margin requirements as market prices fluctuate. If you’re close to your liquidation point, it’s time to reevaluate your position.",
      "mentorAnalogy": "Think of margin collateral like fuel in an aircraft; you need enough to reach your destination safely without running out mid-flight."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Dynamic Adjustments to Margin Collateral",
    "label": "Crypto Track",
    "body": "### Dynamic Margin Adjustments\nMarket volatility necessitates dynamic adjustments to margin collateral to ensure positions remain viable. This card covers **how to adjust margin collateral based on market conditions and risk assessments**.\n\n* **Volatility Assessment**: Use the Average True Range (ATR) to gauge market volatility. If the ATR for BTC is $1,200, consider increasing your margin collateral to accommodate potential price swings.\n* **Real-Time Adjustments**: Implement a protocol for real-time adjustments. For example, if your position value increases by 20%, recalculate your required margin to ensure it reflects the new market conditions.\n* **Risk Management Protocols**: Establish thresholds for when to adjust collateral. If your position approaches a 10% drawdown, increase your margin to prevent liquidation risks.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        },
        {
          "term": "Drawdown",
          "definition": "The reduction of one's capital after a series of losing trades."
        }
      ],
      "whyThisMatters": "Dynamic margin adjustments protect against sudden market movements that could lead to liquidation, preserving capital and trading longevity.",
      "realLifeExample": "If BTC's ATR indicates increased volatility, and your position is valued at $50,000, increasing your margin collateral from $5,000 to $7,500 can safeguard against potential price fluctuations.",
      "commonMistake": "Failing to adjust margin collateral in response to market volatility can lead to unexpected liquidations and significant losses.",
      "quickNote": "Regularly assess market volatility and adjust margin collateral to maintain position integrity.",
      "mentorText": "Stay vigilant about market conditions. If volatility spikes, don’t hesitate to adjust your collateral to keep your positions safe.",
      "mentorAnalogy": "Adjusting margin collateral is like recalibrating a surgical instrument during an operation; precision is crucial to avoid complications."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Effective Lot Sizing Strategies in Crypto",
    "label": "Crypto Track",
    "body": "### Lot Sizing: Strategies for Crypto Trading\nEffective lot sizing is fundamental for managing risk while maximizing returns in cryptocurrency trading. This card discusses **strategies for determining lot sizes that align with risk tolerance and market conditions**.\n\n* **Risk Percentage Method**: Determine your lot size based on a fixed risk percentage of your account equity. For example, with a $20,000 account and a risk percentage of 2%, you would risk $400 per trade, guiding your lot size accordingly.\n* **Position Sizing Formula**: Use the formula: \\( \\text{Lot Size} = \\frac{\\text{Risk Amount}}{\\text{Stop Loss Distance}} \\). If your risk amount is $400 and your stop loss is $200, your lot size would be 2 contracts.\n* **Market Conditions Adjustment**: Adapt lot sizes based on current market conditions. In high volatility, consider reducing lot sizes to mitigate risk, while in stable conditions, you may increase them to capitalize on opportunities.",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Size",
          "definition": "The number of units of an asset traded in a single transaction."
        },
        {
          "term": "Risk Percentage Method",
          "definition": "A strategy that determines position size based on a fixed percentage of account equity."
        }
      ],
      "whyThisMatters": "Effective lot sizing directly impacts risk management and can significantly influence overall trading performance.",
      "realLifeExample": "If trading ETH with a $10,000 account and a risk percentage of 1%, using a stop loss of $100 means your lot size would be 1 contract, ensuring that potential losses remain manageable.",
      "commonMistake": "Overleveraging by choosing lot sizes that exceed risk tolerance can lead to catastrophic losses during adverse market movements.",
      "quickNote": "Utilize the risk percentage method and position sizing formula to determine appropriate lot sizes for each trade.",
      "mentorText": "Always size your lots according to your risk tolerance. If the market is volatile, don’t hesitate to reduce your lot size to protect your capital.",
      "mentorAnalogy": "Think of lot sizing like portion control in cooking; too much can spoil the dish, while just the right amount creates a balanced meal."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Integrating Risk Management in Crypto Lot Sizing",
    "label": "Crypto Track",
    "body": "### Risk Integration: Crypto Lot Sizing Calculations\nEffective lot sizing incorporates risk management principles to safeguard capital while maximizing potential returns. This card teaches **how to integrate risk management into your crypto lot sizing calculations**.\n\n* **Capital Allocation**: Determine the maximum risk per trade by multiplying total capital by a predetermined risk percentage (e.g., 2%). For a $10,000 account, risking 2% allows for a maximum loss of $200.\n* **Stop Loss Distance**: Calculate the stop loss distance in terms of price movement. If entering a position at $1,000 with a stop loss set at $950, the stop distance is $50.\n* **Lot Size Formula**: Use the formula: Lot Size = (Capital Risk / Stop Loss Distance). For the previous example, Lot Size = $200 / $50 = 4 lots.",
    "context": {
      "keyTerms": [
        {
          "term": "Capital Allocation",
          "definition": "The process of determining how much capital to risk on a single trade."
        },
        {
          "term": "Stop Loss Distance",
          "definition": "The price difference between the entry point and the stop loss level."
        },
        {
          "term": "Lot Size",
          "definition": "The number of units to trade based on risk and stop loss."
        }
      ],
      "whyThisMatters": "Integrating risk management into lot sizing ensures that losses are controlled and capital preservation is prioritized, which is critical in the volatile crypto market.",
      "realLifeExample": "In a trade on Bitcoin (BTC) at $30,000 with a stop loss at $29,500, risking 1% of a $20,000 account allows for a lot size calculation of 4 BTC, given a $500 stop distance.",
      "commonMistake": "Failing to adjust lot size based on varying stop loss distances can lead to excessive risk exposure.",
      "quickNote": "Effective lot sizing is a balance between risk tolerance and market volatility.",
      "mentorText": "When sizing your crypto trades, always start with your risk tolerance. Calculate how much you're willing to lose and adjust your lot size accordingly. This keeps your trading sustainable.",
      "mentorAnalogy": "Think of your capital as fuel in an aircraft. Just as a pilot calculates fuel needs based on distance and conditions, you must calculate your lot size based on risk and market volatility."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Scenario Analysis for Crypto Lot Sizing",
    "label": "Crypto Track",
    "body": "### Market Dynamics: Scenario Analysis in Lot Sizing\nUnderstanding how different market conditions impact lot sizing is essential for effective risk management. This card teaches **how to conduct scenario analysis for crypto lot sizing**.\n\n* **Volatility Assessment**: Analyze historical volatility to determine appropriate stop loss distances. For example, if Ethereum (ETH) typically moves $100 during high volatility, set wider stop losses accordingly.\n* **Market Conditions**: Differentiate between trending and ranging markets. In a trending market, tighter stops may be appropriate, while wider stops are necessary in a ranging market to avoid premature exits.\n* **Lot Size Adjustment**: Adjust lot sizes based on scenario outcomes. If volatility increases, reduce lot size to maintain the same risk exposure. For instance, with a higher volatility stop of $150, recalculate lot size to ensure risk remains consistent.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Assessment",
          "definition": "Evaluating price fluctuations to inform stop loss placement."
        },
        {
          "term": "Market Conditions",
          "definition": "The state of the market, such as trending or ranging, affecting trading strategies."
        },
        {
          "term": "Lot Size Adjustment",
          "definition": "Modifying the number of units traded based on market analysis."
        }
      ],
      "whyThisMatters": "Scenario analysis allows traders to adapt their strategies to changing market conditions, ensuring that risk management remains effective across different environments.",
      "realLifeExample": "When trading Litecoin (LTC) during a market surge with a volatility increase of $80, adjusting the lot size from 10 to 5 LTC based on a new stop loss distance of $100 helps maintain risk levels.",
      "commonMistake": "Ignoring market conditions can lead to inappropriate stop loss placements and lot sizes, increasing the likelihood of significant losses.",
      "quickNote": "Scenario analysis is crucial for adapting lot sizes to market volatility and conditions.",
      "mentorText": "Always assess the market before placing a trade. If conditions change, be ready to adjust your lot size to keep your risk in check. Flexibility is key.",
      "mentorAnalogy": "Consider a surgeon who adapts their technique based on the patient's condition. Similarly, you must adjust your trading strategy based on market conditions to ensure optimal outcomes."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Crypto Lot Sizing",
    "label": "Crypto Track",
    "body": "### Application: Crypto Lot Sizing Exercises\nEngaging in practical exercises reinforces the understanding of crypto lot sizing calculations and their application. This card provides **hands-on scenarios to practice lot sizing**.\n\n* **Scenario Setup**: Given a $15,000 account with a risk tolerance of 1%, calculate the lot size for a trade on Ripple (XRP) at $0.50 with a stop loss at $0.45. Determine the lot size based on the calculated risk.\n* **Multiple Conditions**: Analyze three different market conditions (high volatility, low volatility, and sideways movement) and adjust the lot sizes accordingly for a trade on Cardano (ADA) at $1.20 with varying stop losses.\n* **Feedback Loop**: After calculating, review the outcomes of each scenario to understand the impact of different stop distances and market conditions on your lot sizing decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Setup",
          "definition": "Creating specific trading conditions to practice calculations."
        },
        {
          "term": "Multiple Conditions",
          "definition": "Evaluating different market scenarios to adjust trading strategies."
        },
        {
          "term": "Feedback Loop",
          "definition": "Reviewing outcomes to improve future trading decisions."
        }
      ],
      "whyThisMatters": "Practical exercises solidify theoretical knowledge, ensuring traders can confidently apply lot sizing calculations in real market scenarios.",
      "realLifeExample": "In a practice scenario, using a $15,000 account and a stop loss of $0.05 for a trade on XRP, the calculated lot size would be 300 XRP, reinforcing the importance of precise calculations.",
      "commonMistake": "Failing to practice calculations can lead to errors in real trades, resulting in unexpected losses.",
      "quickNote": "Hands-on practice is essential for mastering lot sizing calculations.",
      "mentorText": "Engage with these exercises as if they were live trades. The more you practice, the more instinctive your calculations will become. Precision is non-negotiable.",
      "mentorAnalogy": "Just as a pilot practices emergency scenarios in a simulator, you must practice lot sizing calculations to prepare for real trading situations."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a $10,000 account and a risk tolerance of 2%, what is the lot size for a trade on Bitcoin (BTC) at $35,000 with a stop loss at $34,500?",
      "options": [
        {
          "id": "0",
          "text": "20 BTC",
          "isCorrect": false,
          "feedback": "This calculation does not account for the correct stop loss distance."
        },
        {
          "id": "1",
          "text": "10 BTC",
          "isCorrect": false,
          "feedback": "This option does not reflect the correct risk management principles."
        },
        {
          "id": "2",
          "text": "5 BTC",
          "isCorrect": true,
          "feedback": "Correct! The risk per trade is $200, and with a $500 stop loss, the lot size is 0.4 BTC."
        },
        {
          "id": "3",
          "text": "0.4 BTC",
          "isCorrect": false,
          "feedback": "This option does not reflect the total lot size based on the account risk."
        }
      ]
    },
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Risk Sizing Concepts",
    "label": "Crypto Track",
    "body": "### Recap: Key Concepts in Crypto Risk Sizing\nThis summary consolidates the essential concepts of risk sizing calculations specific to cryptocurrency trading. Understanding these principles is vital for effective trading.\n\n* **Perpetual Contracts**: Recognize the unique characteristics of perpetual contracts, including their margin requirements and how they affect lot sizing. For example, a 10% margin on a $1,000 position requires $100 in margin.\n* **Margin Requirements**: Understand how margin levels impact your available trading capital and risk exposure. If trading Ethereum with a 20x leverage, a $1,000 position only requires $50 in margin.\n* **Dynamic Adjustments**: Emphasize the need for dynamic adjustments in lot sizing based on market conditions and risk tolerance. Regularly reassess your risk parameters to align with market volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Contracts",
          "definition": "Contracts that do not expire, requiring specific margin calculations."
        },
        {
          "term": "Margin Requirements",
          "definition": "The amount of capital required to open a leveraged position."
        },
        {
          "term": "Dynamic Adjustments",
          "definition": "Modifying lot sizes based on changing market conditions."
        }
      ],
      "whyThisMatters": "A solid grasp of risk sizing concepts is essential for maintaining capital integrity and optimizing trading strategies in the cryptocurrency market.",
      "realLifeExample": "When trading a perpetual contract on Bitcoin with a 10% margin requirement, a $5,000 position would necessitate $500 in margin, impacting overall risk exposure.",
      "commonMistake": "Overlooking margin requirements can lead to undercapitalization and increased risk of liquidation.",
      "quickNote": "Mastering risk sizing concepts is crucial for successful cryptocurrency trading.",
      "mentorText": "Always keep your risk management principles at the forefront of your trading strategy. Review your margin requirements and adjust your lot sizes accordingly. Consistency is key.",
      "mentorAnalogy": "Just as an architect must consider structural integrity when designing a building, you must ensure your risk sizing calculations support a solid trading foundation."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  }
];
