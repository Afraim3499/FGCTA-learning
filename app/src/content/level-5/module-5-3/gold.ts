import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Contract Sizing Fundamentals",
    "label": "Gold Track",
    "body": "### Gold Contract Sizing: Calculating Unit Sizes\nUnderstanding the mechanics of gold contract sizing is essential for effective risk management. This card details **how to calculate the appropriate contract size based on your capital limits and stop distances**.\n\n* **Standard Contract Size**: A standard gold contract represents 100 ounces of gold. To determine the number of contracts to trade, divide your total capital at risk by the dollar value of the stop loss per contract.\n* **Stop Loss Calculation**: If your stop loss is set at $10 per ounce, the total risk per contract is $1,000 (100 ounces x $10). For a $10,000 account, you can trade 10 contracts ($10,000 / $1,000).\n* **Position Sizing Formula**: Use the formula: Number of Contracts = (Account Risk / (Stop Loss Distance x Contract Size)). This ensures that your position size is aligned with your risk tolerance and market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Contract Size",
          "definition": "The total quantity of the underlying asset represented in a futures contract."
        },
        {
          "term": "Stop Loss",
          "definition": "A predetermined price level at which a trader will exit a losing position."
        }
      ],
      "whyThisMatters": "Accurate contract sizing prevents overexposure and ensures adherence to risk management protocols.",
      "realLifeExample": "If gold is trading at $1,800 per ounce and you set a stop loss of $10, your risk per contract is $1,000. With a $5,000 risk tolerance, you can trade 5 contracts.",
      "commonMistake": "Traders often miscalculate their position size by not factoring in the total risk per contract accurately.",
      "quickNote": "Always calculate your contract size based on your specific risk parameters.",
      "mentorText": "When sizing your gold contracts, always start with your risk tolerance. If you can't afford to lose more than $1,000, ensure your stop loss and contract size reflect that.",
      "mentorAnalogy": "Think of contract sizing like a pilot calculating fuel for a flight. Each decision must account for weight, distance, and safety margins."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Calculating Tick Values for Gold Contracts",
    "label": "Gold Track",
    "body": "### Tick Value Calculation: Essential for Lot Sizing\nUnderstanding tick values is crucial for determining effective lot sizes in gold trading. This card explains **how to calculate tick values for gold contracts to optimize your trading strategy**.\n\n* **Tick Size Definition**: The tick size for gold futures is typically $0.10 per ounce. This means that each tick movement represents a change of $10 for a standard contract (100 ounces).\n* **Tick Value Calculation**: The tick value can be calculated as: Tick Value = Tick Size x Contract Size. For gold, this results in a tick value of $10 ($0.10 x 100 ounces).\n* **Lot Size Adjustment**: Knowing the tick value allows traders to adjust their lot sizes effectively. For instance, if your target risk per trade is $100, you can afford to take a position that allows for 10 ticks of movement before hitting your stop loss.",
    "context": {
      "keyTerms": [
        {
          "term": "Tick Size",
          "definition": "The minimum price movement of a trading instrument."
        },
        {
          "term": "Lot Size",
          "definition": "The number of units of a financial instrument traded."
        }
      ],
      "whyThisMatters": "Accurate tick value calculations enable traders to make informed decisions about position sizes and risk management.",
      "realLifeExample": "If gold moves from $1,800.00 to $1,800.10, that represents a $10 gain per contract. If you have a stop loss of 5 ticks, your total risk is $50.",
      "commonMistake": "Traders often overlook tick values, leading to incorrect lot sizing and unexpected losses.",
      "quickNote": "Always calculate tick values to ensure your lot sizes align with your risk management strategy.",
      "mentorText": "When determining your lot size, always consider the tick value. It's like knowing how much fuel you burn per mile; it directly impacts your journey.",
      "mentorAnalogy": "Calculating tick values is similar to a chef measuring ingredients for a recipe. Each measurement affects the final dish, just as tick values affect your trading outcomes."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Dynamic Sizing Strategies for Gold Trading",
    "label": "Gold Track",
    "body": "### Dynamic Sizing: Adapting to Market Conditions\nDynamic sizing strategies allow traders to adjust their position sizes based on current market conditions and volatility. This card outlines **how to implement dynamic sizing in your gold trading**.\n\n* **Volatility Assessment**: Use the Average True Range (ATR) to gauge market volatility. For example, if the ATR for gold is $15, this indicates a higher volatility environment, suggesting smaller position sizes to mitigate risk.\n* **Position Size Adjustment**: Adjust your position size based on volatility. If your standard position size is 5 contracts at low volatility, consider reducing to 3 contracts when ATR rises significantly to maintain risk levels.\n* **Risk-Reward Ratio Consideration**: Always evaluate the risk-reward ratio in conjunction with dynamic sizing. If the potential reward increases, you may opt to increase your position size, provided it aligns with your risk management rules.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of potential profit to potential loss in a trade."
        }
      ],
      "whyThisMatters": "Dynamic sizing ensures that your risk exposure is proportional to market conditions, enhancing overall trading effectiveness.",
      "realLifeExample": "If gold's ATR increases from $10 to $20, reducing your position from 5 contracts to 3 contracts helps maintain a consistent risk exposure.",
      "commonMistake": "Failing to adjust position sizes based on changing market conditions can lead to excessive risk or missed opportunities.",
      "quickNote": "Dynamic sizing is essential for adapting to market volatility and maintaining risk management.",
      "mentorText": "Always be ready to adjust your position size based on market conditions. If volatility spikes, scale back your trades to protect your capital.",
      "mentorAnalogy": "Dynamic sizing is like a sailor adjusting sail size based on wind conditions. Too much sail in a storm can capsize the boat, just as too much risk can sink your account."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Integrating Risk Management in Gold Lot Sizing",
    "label": "Gold Track",
    "body": "### Risk Management Integration: Enhancing Lot Sizing Calculations\nIntegrating risk management principles into gold lot sizing calculations is vital for effective trading. This card discusses **how to incorporate risk management into your lot sizing process**.\n\n* **Risk Percentage Rule**: Determine the percentage of your capital you are willing to risk per trade. A common rule is to risk no more than 1-2% of your total account balance. For a $10,000 account, this means risking $100 to $200 per trade.\n* **Lot Size Calculation**: Use the formula: Lot Size = (Account Risk / (Stop Loss Distance x Tick Value)). For example, if your stop loss is $10 and the tick value is $10, you can risk $200, allowing for a position size of 10 contracts.\n* **Continuous Monitoring**: Regularly review your risk management parameters and adjust your lot sizes accordingly. Market conditions can change, and your risk exposure should reflect that.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Percentage Rule",
          "definition": "A guideline for determining the maximum percentage of capital to risk on a single trade."
        },
        {
          "term": "Lot Size Calculation",
          "definition": "The process of determining the number of units to trade based on risk parameters."
        }
      ],
      "whyThisMatters": "Effective integration of risk management into lot sizing enhances trading discipline and reduces the likelihood of significant losses.",
      "realLifeExample": "If your account balance is $15,000 and you decide to risk 1%, you can afford to lose $150. With a stop loss of $10, your position size would be 15 contracts.",
      "commonMistake": "Traders often neglect to adjust their lot sizes based on their risk management rules, leading to overexposure.",
      "quickNote": "Integrate risk management principles into every lot sizing calculation to safeguard your capital.",
      "mentorText": "Always calculate your lot size based on your risk tolerance. If you can't afford to lose it, don't risk it.",
      "mentorAnalogy": "Integrating risk management is like a surgeon ensuring all instruments are sterile before an operation. It’s a critical step that safeguards the outcome."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Understanding Margin Requirements for Gold Contracts",
    "label": "Gold Track",
    "body": "### Margin Requirements: Gold Contracts\nMargin requirements dictate the minimum capital necessary to open and maintain a position in gold contracts. This card teaches **how margin impacts lot size calculations for gold trading**.\n\n* **Initial Margin Calculation**: The initial margin is typically expressed as a percentage of the total contract value. For example, if the gold price is $1,800 per ounce and the contract size is 100 ounces, the total contract value is $180,000. If the margin requirement is 5%, the initial margin needed is $9,000.\n* **Maintenance Margin**: This is the minimum equity required to keep a position open. If the equity falls below this level due to adverse price movements, a margin call may occur, necessitating additional funds to maintain the position.\n* **Lot Size Adjustment**: Understanding margin requirements allows traders to adjust their lot sizes accordingly. For instance, with a $10,000 account and a 5% margin requirement, a trader can control one contract of gold worth $180,000, but must manage risk to avoid margin calls.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Requirement",
          "definition": "The minimum amount of capital required to open and maintain a position."
        },
        {
          "term": "Initial Margin",
          "definition": "The upfront capital required to enter a trade."
        },
        {
          "term": "Maintenance Margin",
          "definition": "The minimum equity that must be maintained in the trading account."
        }
      ],
      "whyThisMatters": "Understanding margin requirements is crucial for effective risk management and ensuring sufficient capital is available to support trading positions.",
      "realLifeExample": "If gold trades at $1,850 per ounce and a trader wishes to open a position of 2 contracts (200 ounces), the total value is $370,000. With a 5% margin requirement, the trader must have $18,500 in their account to initiate the trade.",
      "commonMistake": "Traders often underestimate the impact of margin requirements, leading to insufficient capital and unexpected margin calls.",
      "quickNote": "Margin requirements directly influence your ability to trade gold contracts effectively.",
      "mentorText": "When trading gold, always calculate your margin first. If you can't meet the margin requirement, you shouldn't enter the trade. It's that simple.",
      "mentorAnalogy": "Think of margin requirements like the down payment on a house. You need to have a certain amount upfront to secure your investment."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Scenario Analysis for Gold Lot Sizing",
    "label": "Gold Track",
    "body": "### Scenario Analysis: Gold Lot Sizing\nScenario analysis allows traders to evaluate how varying market conditions affect their lot sizing decisions for gold. This card teaches **how to adjust lot sizes based on different market scenarios**.\n\n* **Volatility Assessment**: Assessing market volatility is critical for determining appropriate lot sizes. For instance, during high volatility, a trader might reduce their lot size to mitigate risk, while in stable conditions, they may increase it.\n* **Price Movement Impact**: Analyze how price movements affect your risk exposure. If gold rises from $1,800 to $1,900, the risk per contract changes significantly, necessitating a recalibration of lot sizes to maintain consistent risk levels.\n* **Risk-Reward Ratio Evaluation**: Adjust lot sizes based on the desired risk-reward ratio. For example, if targeting a 2:1 ratio with a stop loss of $50, the lot size must be calculated to ensure that the maximum loss does not exceed the predetermined risk limit.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing potential profit to potential loss."
        },
        {
          "term": "Lot Size",
          "definition": "The number of units of an asset being traded."
        }
      ],
      "whyThisMatters": "Scenario analysis is essential for adapting to changing market conditions and ensuring that lot sizes align with risk management strategies.",
      "realLifeExample": "If gold is experiencing high volatility with a standard deviation of $100, a trader may decide to reduce their lot size from 2 contracts to 1 to limit exposure during uncertain market conditions.",
      "commonMistake": "Failing to adjust lot sizes based on market volatility can lead to excessive risk and potential account depletion.",
      "quickNote": "Scenario analysis helps tailor lot sizes to current market conditions for optimal risk management.",
      "mentorText": "Always analyze the market conditions before deciding on your lot size. If the market is volatile, be conservative with your position.",
      "mentorAnalogy": "Consider scenario analysis like adjusting the sails of a ship based on wind conditions. You wouldn't sail full speed into a storm."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Gold Lot Sizing",
    "label": "Gold Track",
    "body": "### Practical Exercises: Gold Lot Sizing\nEngaging in practical exercises reinforces the understanding of gold lot sizing calculations. This card provides **hands-on scenarios to apply lot sizing principles**.\n\n* **Exercise 1: Margin Calculation**: Given a gold price of $1,750 per ounce and a contract size of 100 ounces, calculate the initial margin required if the margin requirement is 4%. What is the total margin needed?\n* **Exercise 2: Adjusting Lot Size**: If a trader has a $15,000 account and wants to maintain a risk of $300 per trade with a stop loss of $30, calculate the appropriate lot size for a gold contract.\n* **Exercise 3: Volatility Impact**: Analyze a scenario where gold price fluctuates between $1,700 and $1,800. If the trader's risk tolerance is $500, determine how many contracts they should trade to stay within their risk parameters.",
    "context": {
      "keyTerms": [
        {
          "term": "Hands-On Exercises",
          "definition": "Practical activities designed to apply theoretical knowledge."
        },
        {
          "term": "Risk Parameters",
          "definition": "The limits set by a trader to manage risk exposure."
        },
        {
          "term": "Stop Loss",
          "definition": "An order placed to sell a security when it reaches a certain price."
        }
      ],
      "whyThisMatters": "Practical exercises solidify theoretical concepts, ensuring traders can effectively implement lot sizing calculations in real trading scenarios.",
      "realLifeExample": "In Exercise 1, if the gold price is $1,750 and the margin requirement is 4%, the initial margin required would be $7,000 (100 ounces x $1,750 x 0.04).",
      "commonMistake": "Traders often rush through exercises without fully understanding the calculations, leading to errors in real trading.",
      "quickNote": "Practical exercises are essential for mastering gold lot sizing calculations.",
      "mentorText": "Don’t just read about lot sizing; practice it. The more you engage with these calculations, the more instinctive they will become.",
      "mentorAnalogy": "Think of these exercises like flight simulations for pilots. You need to practice in a controlled environment before taking off in real conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A trader has a $20,000 account and wants to risk 1% per trade with a stop loss of $50. What is the maximum lot size they can trade if gold is priced at $1,800 per ounce?",
      "options": [
        {
          "id": "0",
          "text": "2 contracts",
          "isCorrect": true,
          "feedback": "Correct. With a risk of $200 (1% of $20,000) and a stop loss of $50, the trader can trade 4 contracts (200/50). Since each contract is 100 ounces, this equals 2 contracts."
        },
        {
          "id": "1",
          "text": "4 contracts",
          "isCorrect": false,
          "feedback": "Incorrect. While the risk is $200, the stop loss of $50 means the maximum lot size is 4 contracts, but this translates to 2 contracts of gold."
        },
        {
          "id": "2",
          "text": "1 contract",
          "isCorrect": false,
          "feedback": "Incorrect. The trader can afford to trade more than 1 contract based on their risk parameters."
        },
        {
          "id": "3",
          "text": "3 contracts",
          "isCorrect": false,
          "feedback": "Incorrect. The calculation allows for a maximum of 2 contracts based on the risk and stop loss."
        }
      ]
    },
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Risk Sizing Concepts",
    "label": "Gold Track",
    "body": "### Summary: Gold Risk Sizing Concepts\nThis card summarizes the key concepts of risk sizing calculations specific to gold trading. Understanding these principles is vital for effective risk management in trading gold contracts.\n\n* **Contract Sizes**: Gold contracts typically represent 100 ounces, and understanding the implications of contract sizes on margin and risk is essential for accurate calculations.\n* **Tick Values**: Each tick movement in gold pricing affects the overall profit and loss. Knowing the tick value helps in determining the financial impact of price changes on your positions.\n* **Risk Management Strategies**: Implementing effective risk management strategies based on calculated lot sizes ensures that traders can withstand market fluctuations without significant capital loss.",
    "context": {
      "keyTerms": [
        {
          "term": "Contract Size",
          "definition": "The standardized amount of an asset in a trading contract."
        },
        {
          "term": "Tick Value",
          "definition": "The monetary value of a minimum price movement in a trading instrument."
        },
        {
          "term": "Risk Management Strategy",
          "definition": "A plan to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces the foundational knowledge necessary for successful trading in gold markets.",
      "realLifeExample": "For instance, if gold moves by 1 tick (typically $0.10), the tick value for a standard contract is $10 (100 ounces x $0.10), impacting overall profitability.",
      "commonMistake": "Traders often overlook the significance of tick values, leading to miscalculations in potential profits or losses.",
      "quickNote": "Mastering gold risk sizing concepts is essential for maintaining capital integrity in trading.",
      "mentorText": "Review these concepts regularly. They are the backbone of your trading strategy and will guide your decisions.",
      "mentorAnalogy": "Think of these risk sizing concepts like the blueprints for a building. Without a solid foundation, the structure won't stand."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  }
];
