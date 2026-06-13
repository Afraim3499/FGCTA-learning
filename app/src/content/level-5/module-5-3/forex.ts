import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Pip Value Calculation in Forex Trading",
    "label": "Forex Track",
    "body": "### Pip Value: Accurate Calculation for Lot Sizing\nDetermining pip values is essential for effective lot sizing in Forex trading. This card teaches **how to calculate pip values for various currency pairs**.\n\n* **Formula for Major Pairs**: For pairs where the USD is the quote currency, the pip value is calculated as: \n  \n  $$Pip Value = (0.0001 / Exchange Rate) * Lot Size$$  \n  \n  Example: For EUR/USD at 1.1200, a standard lot (100,000 units) results in a pip value of approximately $8.93.\n* **Cross-Currency Calculation**: For pairs where USD is not the quote currency, adjust using the USD equivalent. \n  \n  $$Pip Value = (0.0001 / Exchange Rate) * Lot Size * Exchange Rate of USD$$  \n  \n  Example: For AUD/JPY at 80.00, a standard lot yields a pip value of approximately $12.50.\n* **Adjusting for Lot Sizes**: Ensure that the pip value is consistent with the lot size being traded. \n  \n  Example: Trading 0.5 lots of GBP/USD at 1.3000 results in a pip value of $6.50, calculated as: \n  \n  $$Pip Value = (0.0001 / 1.3000) * 50,000$$.",
    "context": {
      "keyTerms": [
        {
          "term": "Pip Value",
          "definition": "The monetary value of a single pip movement in a currency pair."
        },
        {
          "term": "Lot Size",
          "definition": "The number of units of a currency pair being traded."
        }
      ],
      "whyThisMatters": "Accurate pip value calculations are critical for determining appropriate lot sizes, which directly impacts risk management and profitability.",
      "realLifeExample": "When trading USD/CHF at 0.9500, a standard lot results in a pip value of approximately $10.52, allowing for precise risk assessments.",
      "commonMistake": "Failing to adjust pip values for different lot sizes can lead to miscalculated risk exposure.",
      "quickNote": "Calculate pip values accurately to ensure effective lot sizing.",
      "mentorText": "Understanding pip values is like knowing the fuel consumption of your aircraft. If you miscalculate, you could run out of fuel before landing safely.",
      "mentorAnalogy": "Just as an architect must calculate the load-bearing capacity of materials, a trader must accurately calculate pip values to ensure structural integrity in their trading plan."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Cross-Currency Lot Sizing Mechanics",
    "label": "Forex Track",
    "body": "### Cross-Currency Lot Sizing: Adjusting for Pip Values\nLot sizing in cross-currency pairs requires precise adjustments based on varying pip values. This card focuses on **how to compute lot sizes when trading cross-currency pairs**.\n\n* **Understanding Base and Quote Currency**: Identify the base and quote currencies to determine the correct pip value. \n  \n  Example: In EUR/GBP, EUR is the base currency; hence, the pip value is derived from GBP's exchange rate against EUR.\n* **Calculating Lot Size**: Use the formula: \n  \n  $$Lot Size = (Account Risk / (Stop Loss in Pips * Pip Value))$$  \n  \n  Example: If risking $100 with a stop loss of 50 pips on EUR/GBP with a pip value of $10, the lot size would be 2 lots.\n* **Adjusting for Market Fluctuations**: Regularly update calculations based on real-time exchange rates to maintain accuracy in lot sizing. \n  \n  Example: If GBP strengthens against EUR, the pip value will increase, necessitating a recalibration of lot sizes to align with risk parameters.",
    "context": {
      "keyTerms": [
        {
          "term": "Base Currency",
          "definition": "The first currency in a currency pair, which is being quoted."
        },
        {
          "term": "Quote Currency",
          "definition": "The second currency in a currency pair, which indicates how much of it is needed to purchase one unit of the base currency."
        }
      ],
      "whyThisMatters": "Proper lot sizing in cross-currency pairs mitigates risk and enhances the effectiveness of trading strategies.",
      "realLifeExample": "When trading NZD/CAD with a stop loss of 30 pips and a pip value of $8.00, an account risk of $150 allows for a lot size of 6.25.",
      "commonMistake": "Neglecting to account for the differences in pip values between base and quote currencies can lead to overexposure.",
      "quickNote": "Adjust lot sizes based on pip values for cross-currency pairs to manage risk effectively.",
      "mentorText": "Think of cross-currency trading like navigating through different countries; you need to know the local currency values to avoid overspending.",
      "mentorAnalogy": "Just as a chef must adjust ingredient quantities based on recipe conversions, a trader must adjust lot sizes based on pip values in cross-currency pairs."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Risk-Adjusted Lot Sizes in Forex",
    "label": "Forex Track",
    "body": "### Risk-Adjusted Lot Sizes: Aligning Trades with Risk Profile\nAdjusting lot sizes based on risk assessments is essential for maintaining a balanced trading strategy. This card covers **how to determine lot sizes that align with your risk profile**.\n\n* **Risk Percentage Calculation**: Define the percentage of your account you are willing to risk per trade. \n  \n  Example: If your account balance is $10,000 and you decide to risk 2%, your risk per trade is $200.\n* **Lot Size Formula**: Use the formula to calculate lot size: \n  \n  $$Lot Size = (Account Risk / (Stop Loss in Pips * Pip Value))$$  \n  \n  Example: With a $200 risk, a stop loss of 40 pips on USD/JPY with a pip value of $9.00 results in a lot size of 5.56.\n* **Dynamic Adjustments**: Continuously reassess your risk profile and adjust lot sizes accordingly, especially after significant market movements. \n  \n  Example: If volatility increases, consider reducing lot sizes to maintain risk levels.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Percentage",
          "definition": "The percentage of the trading account allocated to a single trade."
        },
        {
          "term": "Stop Loss",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        }
      ],
      "whyThisMatters": "Aligning lot sizes with risk assessments ensures that traders do not exceed their risk tolerance, preserving capital over time.",
      "realLifeExample": "When trading GBP/USD with a $150 risk and a stop loss of 25 pips, the calculated lot size of 6.00 allows for precise risk management.",
      "commonMistake": "Overcommitting to lot sizes without proper risk assessment can lead to significant drawdowns.",
      "quickNote": "Always adjust lot sizes based on your defined risk percentage to maintain control.",
      "mentorText": "Managing risk is like balancing the weight in a cargo plane; if you overload one side, you risk losing control.",
      "mentorAnalogy": "Just as a surgeon must adjust their approach based on the patient's condition, a trader must adjust lot sizes based on their risk profile."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Dynamic Pip Calculations for Volatile Markets",
    "label": "Forex Track",
    "body": "### Dynamic Pip Calculations: Adapting to Market Volatility\nIn volatile markets, accurate pip calculations are crucial for effective risk management. This card explains **how to dynamically calculate pip values to ensure proper lot sizing**.\n\n* **Volatility Measurement**: Use indicators such as Average True Range (ATR) to gauge market volatility. \n  \n  Example: An ATR of 50 pips on EUR/USD indicates potential price swings, necessitating adjustments in pip calculations.\n* **Dynamic Pip Value Formula**: Adjust pip values based on current volatility: \n  \n  $$Dynamic Pip Value = (0.0001 / Current Exchange Rate) * Lot Size * Volatility Factor$$  \n  \n  Example: If the volatility factor is 1.5, a standard lot on GBP/JPY at 150.00 would yield a dynamic pip value of approximately $11.25.\n* **Reassessing Lot Sizes**: Regularly update lot sizes based on dynamic pip values to maintain risk alignment. \n  \n  Example: If volatility increases, recalibrating lot sizes downwards ensures that risk remains within acceptable limits.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        },
        {
          "term": "Volatility Factor",
          "definition": "A multiplier used to adjust pip values based on market conditions."
        }
      ],
      "whyThisMatters": "Dynamic pip calculations allow traders to adapt to changing market conditions, ensuring effective risk management.",
      "realLifeExample": "When trading AUD/NZD with an ATR of 40 pips, recalibrating the pip value to $9.50 ensures that lot sizes reflect current market volatility.",
      "commonMistake": "Failing to adjust pip calculations during volatile conditions can lead to significant trading errors.",
      "quickNote": "Adapt pip calculations dynamically to manage risk in volatile markets effectively.",
      "mentorText": "In trading, just like in aviation, you must adjust your flight path based on changing weather conditions to ensure a safe landing.",
      "mentorAnalogy": "Like a chef adjusting cooking times based on ingredient freshness, a trader must adjust pip calculations based on market volatility."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Effective Lot Sizing Strategies for Forex",
    "label": "Forex Track",
    "body": "### Effective Lot Sizing: Maximizing Returns and Managing Risk\nLot sizing is a critical component in Forex trading that directly impacts both risk management and potential returns. This card details **strategies for determining effective lot sizes based on capital and risk tolerance**.\n\n* **Fixed Lot Sizing**: Traders may choose a fixed lot size based on their total capital, typically using a standard lot (100,000 units) or mini lot (10,000 units), ensuring consistency across trades regardless of market conditions.\n* **Percentage Risk Method**: Calculate lot size by risking a fixed percentage of account equity per trade. For example, with a $10,000 account and a 1% risk threshold, the maximum loss per trade is $100, which can be translated into lot size based on the stop loss distance.\n* **Volatility-Based Sizing**: Adjust lot sizes according to market volatility, utilizing the Average True Range (ATR) to determine stop distances. For instance, if the ATR for EURUSD is 50 pips, and a trader sets a stop loss of 50 pips, they can calculate the appropriate lot size based on their risk tolerance and account balance.",
    "context": {
      "keyTerms": [
        {
          "term": "Fixed Lot Sizing",
          "definition": "Using a constant lot size for every trade regardless of market conditions."
        },
        {
          "term": "Percentage Risk Method",
          "definition": "Calculating lot size based on a fixed percentage of account equity at risk."
        },
        {
          "term": "Volatility-Based Sizing",
          "definition": "Adjusting lot sizes according to market volatility indicators."
        }
      ],
      "whyThisMatters": "Effective lot sizing strategies are essential for maintaining risk management while optimizing potential returns in Forex trading.",
      "realLifeExample": "A trader with a $20,000 account risks 2% per trade. With a stop loss of 30 pips on USDJPY, they calculate their lot size to ensure a maximum loss of $400, resulting in a position size of 1.33 standard lots.",
      "commonMistake": "Traders often neglect to adjust their lot sizes according to changing account balances, leading to disproportionate risk exposure.",
      "quickNote": "Effective lot sizing balances risk management with potential returns.",
      "mentorText": "When determining your lot size, always consider your risk tolerance and the volatility of the market. Adjust accordingly to ensure you are not overexposed.",
      "mentorAnalogy": "Think of lot sizing like adjusting the throttle on an aircraft; too much power can lead to a crash, while too little can leave you grounded. Balance is key."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Understanding Margin Requirements in Forex",
    "label": "Forex Track",
    "body": "### Margin Requirements: Influencing Lot Size Calculations\nMargin requirements dictate the amount of capital needed to open and maintain a Forex position. This card explains **how margin influences lot size decisions and risk management**.\n\n* **Initial Margin Calculation**: The initial margin is the amount required to open a position, typically expressed as a percentage of the total trade value. For example, with a 1% margin requirement on a $100,000 position, the trader must have $1,000 in their account.\n* **Maintenance Margin**: This is the minimum equity a trader must maintain to keep a position open. If equity falls below this threshold, a margin call occurs, requiring additional funds or position closure.\n* **Leverage Impact**: Leverage amplifies both potential gains and losses. A leverage ratio of 100:1 allows a trader to control $100,000 with only $1,000 margin. However, this increases risk exposure significantly, necessitating careful lot sizing.",
    "context": {
      "keyTerms": [
        {
          "term": "Initial Margin",
          "definition": "The upfront capital required to open a Forex position."
        },
        {
          "term": "Maintenance Margin",
          "definition": "The minimum equity required to maintain an open position."
        },
        {
          "term": "Leverage",
          "definition": "The ability to control a larger position with a smaller amount of capital."
        }
      ],
      "whyThisMatters": "Understanding margin requirements is crucial for effective risk management and ensuring that positions remain viable during market fluctuations.",
      "realLifeExample": "A trader opens a position of 2 standard lots on GBPUSD valued at $200,000 with a 1% margin requirement, necessitating $2,000 in their account. If the account balance drops to $1,500, they face a margin call.",
      "commonMistake": "Traders often underestimate the impact of leverage, leading to overexposure and potential margin calls.",
      "quickNote": "Margin requirements directly affect your lot size and risk management strategy.",
      "mentorText": "Always be aware of your margin requirements when entering a trade. This will help you avoid margin calls and ensure your positions are sustainable.",
      "mentorAnalogy": "Consider margin like the down payment on a house; it determines how much of the property you can control while exposing you to the risks of the entire value."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Forex Lot Sizing",
    "label": "Forex Track",
    "body": "### Practical Lot Sizing Exercises: Reinforcing Calculations\nEngaging in practical exercises solidifies understanding of lot sizing calculations in Forex trading. This card provides **real-world scenarios to apply lot sizing techniques**.\n\n* **Scenario 1**: You have a $15,000 account and wish to risk 1% on a trade with a stop loss of 25 pips on AUDUSD. Calculate the appropriate lot size.\n* **Scenario 2**: A trader is considering a position on EURCAD worth $50,000 with a 2% margin requirement. Determine the initial margin required and the implications for lot size.\n* **Scenario 3**: Given a volatile market with an ATR of 40 pips, calculate the lot size for a trade on USDCHF if your account balance is $10,000 and you want to risk 1.5% of your capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Size",
          "definition": "The number of units of a currency pair traded."
        },
        {
          "term": "Stop Loss",
          "definition": "An order placed to limit potential losses on a trade."
        },
        {
          "term": "ATR (Average True Range)",
          "definition": "A measure of market volatility."
        }
      ],
      "whyThisMatters": "Practical exercises enhance the ability to apply theoretical knowledge to real trading situations, ensuring readiness for market conditions.",
      "realLifeExample": "In Scenario 1, with a $15,000 account and a 1% risk on a 25 pip stop loss, the trader calculates a lot size of 0.6 lots for AUDUSD, ensuring risk is managed effectively.",
      "commonMistake": "Failing to adjust lot sizes based on varying stop loss distances leads to inconsistent risk management.",
      "quickNote": "Practical exercises reinforce the application of lot sizing calculations in Forex trading.",
      "mentorText": "Practice these scenarios until you can calculate lot sizes instinctively. This skill is vital for managing risk effectively in live markets.",
      "mentorAnalogy": "Think of these exercises like flight simulations; they prepare you for the real thing by allowing you to practice critical skills in a controlled environment."
    },
    "taskData": {
      "type": "choice_block",
      "question": "If you have a $10,000 account and want to risk 2% on a trade with a stop loss of 30 pips on EURUSD, what is the correct lot size?",
      "options": [
        {
          "id": "0",
          "text": "0.2 lots",
          "isCorrect": true,
          "feedback": "Correct. With a 2% risk, you can risk $200. Given a 30 pip stop loss, this translates to a lot size of 0.2 lots."
        },
        {
          "id": "1",
          "text": "0.5 lots",
          "isCorrect": false,
          "feedback": "Incorrect. 0.5 lots would expose you to a greater risk than your 2% threshold."
        },
        {
          "id": "2",
          "text": "1.0 lots",
          "isCorrect": false,
          "feedback": "Incorrect. 1.0 lots would exceed your risk limit based on the stop loss distance."
        },
        {
          "id": "3",
          "text": "0.1 lots",
          "isCorrect": false,
          "feedback": "Incorrect. 0.1 lots would not utilize your risk capacity effectively."
        }
      ]
    },
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Risk Sizing Concepts",
    "label": "Forex Track",
    "body": "### Summary of Forex Risk Sizing: Key Concepts\nThis card consolidates the essential concepts of risk sizing calculations in Forex trading, emphasizing the importance of lot sizes and pip values. Understanding these principles is vital for effective trading.\n\n* **Lot Size Calculation**: Always determine the lot size based on account balance, risk percentage, and stop loss distance. This ensures that risk remains consistent across trades.\n* **Pip Value Awareness**: Recognize how pip values change with different currency pairs and lot sizes. For instance, a standard lot in EURUSD typically equals $10 per pip, while a mini lot equals $1.\n* **Dynamic Adjustments**: Be prepared to adjust lot sizes based on market conditions, account changes, and volatility. This adaptability is crucial for maintaining risk management standards.",
    "context": {
      "keyTerms": [
        {
          "term": "Pip Value",
          "definition": "The monetary value of a pip in a currency pair."
        },
        {
          "term": "Dynamic Adjustments",
          "definition": "Modifying lot sizes in response to changing market conditions."
        },
        {
          "term": "Risk Percentage",
          "definition": "The portion of account equity allocated to risk on a single trade."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these concepts ensures that traders can effectively manage risk while optimizing their trading strategies.",
      "realLifeExample": "A trader calculates their lot size for a $25,000 account, risking 1% with a stop loss of 20 pips on GBPUSD, ensuring they maintain a maximum loss of $250.",
      "commonMistake": "Overlooking the impact of pip values on different currency pairs can lead to miscalculations in lot sizing.",
      "quickNote": "Mastering risk sizing concepts is essential for sustainable Forex trading.",
      "mentorText": "Review these concepts regularly to ensure you can apply them effectively in your trading. Consistency in risk management is key to long-term success.",
      "mentorAnalogy": "Think of risk sizing like a well-calibrated engine; each component must work together to ensure optimal performance and prevent breakdowns."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  }
];
