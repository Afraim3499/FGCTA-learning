import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Capital Limits in Risk Sizing",
    "label": "Core Track",
    "body": "### Capital Limits: Defining Risk Parameters\nEstablishing capital limits is essential for determining appropriate risk sizes for trades. This card teaches **how to define and calculate capital limits that influence risk sizing decisions**.\n\n* **Total Capital Assessment**: Calculate total available capital by summing all liquid assets in your trading account. For example, if your account balance is $50,000, this is your total capital.\n* **Risk Percentage Allocation**: Determine the percentage of total capital to risk per trade, typically between 1-3%. For instance, risking 2% of $50,000 results in a maximum risk of $1,000 per trade.\n* **Capital Limit Calculation**: Use the formula: `Capital Limit = Total Capital x Risk Percentage`. In this case, $50,000 x 0.02 = $1,000 capital limit per trade.",
    "context": {
      "keyTerms": [
        {
          "term": "Capital Limit",
          "definition": "The maximum amount of capital allocated to a single trade based on risk percentage."
        }
      ],
      "whyThisMatters": "Defining capital limits ensures that risk exposure remains within acceptable thresholds, safeguarding overall account integrity.",
      "realLifeExample": "If your trading account is $75,000 and you decide to risk 1.5% per trade, your capital limit for each trade would be $1,125.",
      "commonMistake": "Traders often overlook the importance of adjusting capital limits based on account growth or drawdown.",
      "quickNote": "Capital limits dictate the maximum risk per trade, directly influencing position sizing.",
      "mentorText": "When you set your capital limits, think of it as establishing a safety net. If your total capital is $100,000 and you risk 2%, that $2,000 is your buffer for each trade.",
      "mentorAnalogy": "Setting capital limits is like an architect determining the load-bearing capacity of a building; exceeding it can lead to structural failure."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Calculating Lot Sizes Based on Risk Limits",
    "label": "Core Track",
    "body": "### Lot Size Calculation: Aligning with Risk Limits\nCalculating lot sizes based on risk limits is crucial for maintaining a disciplined trading approach. This card teaches **the formula for calculating lot sizes based on predetermined risk limits**.\n\n* **Risk per Trade Formula**: Use the formula: `Risk per Trade = Capital Limit / Stop Loss Distance`. For example, if your capital limit is $1,000 and your stop loss is 50 pips, the risk per pip is $20.\n* **Lot Size Determination**: Convert risk per trade into lot size using the formula: `Lot Size = Risk per Trade / Value per Pip`. If the value per pip for a currency pair is $10, then $1,000 / $10 = 100 lots.\n* **Adjust for Leverage**: Factor in leverage when calculating lot sizes. For instance, with 100:1 leverage, a $1,000 risk can control a position size of $100,000.",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Size",
          "definition": "The number of units of an asset traded in a single transaction."
        }
      ],
      "whyThisMatters": "Proper lot size calculation ensures that trades are consistent with risk management strategies, preventing overexposure.",
      "realLifeExample": "If your capital limit is $1,500 and you set a stop loss of 30 pips, your risk per pip would be $50, allowing for a lot size of 5 lots if the pip value is $10.",
      "commonMistake": "Traders often miscalculate lot sizes by not adjusting for the actual pip value based on the instrument being traded.",
      "quickNote": "Lot sizes must reflect the risk limits to maintain effective risk management.",
      "mentorText": "When calculating lot sizes, always remember that your risk per trade should never exceed your capital limits. If you risk $1,000 with a stop loss of 20 pips, you can only trade 5 lots.",
      "mentorAnalogy": "Calculating lot sizes is akin to a chef measuring ingredients precisely; too much or too little can ruin the final dish."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "The Role of Stop Distance in Trade Sizing",
    "label": "Core Track",
    "body": "### Stop Distance: Impact on Lot Size Calculations\nStop distance is a critical factor in determining appropriate lot sizes for trades. This card focuses on **how stop distance affects the calculation of lot sizes**.\n\n* **Volatility Assessment**: Measure the average volatility of the asset to determine an appropriate stop distance. For instance, if the average true range (ATR) of EURUSD is 40 pips, this could be your stop distance.\n* **Risk Calculation Adjustment**: Use the formula: `Lot Size = (Capital Limit / Stop Distance) x Value per Pip`. If your capital limit is $1,000 and your stop distance is 40 pips, the lot size would be $25 if the pip value is $10.\n* **Dynamic Stop Adjustments**: Adjust stop distances based on market conditions. For example, in a highly volatile market, you may need to widen your stop distance to 60 pips, which would reduce your lot size accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Distance",
          "definition": "The distance in pips from the entry price to the stop loss level."
        }
      ],
      "whyThisMatters": "Understanding the relationship between stop distance and lot size helps traders adapt to market volatility, ensuring risk is managed effectively.",
      "realLifeExample": "If your capital limit is $2,000 and you set a stop distance of 50 pips on GBPUSD, your calculated lot size would be 4 lots if the pip value is $10.",
      "commonMistake": "Traders frequently set stop distances without considering the underlying volatility of the asset, leading to miscalculated lot sizes.",
      "quickNote": "Stop distance directly influences lot size calculations, requiring adjustments based on market conditions.",
      "mentorText": "Always consider the volatility of the market when setting your stop distance. If EURJPY is moving 70 pips on average, a 30-pip stop might be too tight.",
      "mentorAnalogy": "Determining stop distance is like a pilot calculating safe altitude; too close to the ground increases risk of collision."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Dynamic Adjustments to Lot Sizes",
    "label": "Core Track",
    "body": "### Dynamic Lot Size Adjustments: Adapting to Market Conditions\nAdapting lot sizes in response to changing market conditions is vital for effective risk management. This card explores **how to dynamically adjust lot sizes based on risk assessments**.\n\n* **Market Condition Evaluation**: Regularly assess market conditions, including volatility and trend strength, to determine if adjustments are necessary. For example, in a trending market, you may increase your lot size to capitalize on momentum.\n* **Recalibrating Risk Limits**: If your capital grows or shrinks, recalculate your risk limits and adjust lot sizes accordingly. For instance, if your capital increases from $10,000 to $15,000, your risk per trade may increase from $100 to $150.\n* **Implementing a Dynamic Sizing Formula**: Use a formula like `New Lot Size = (New Capital Limit / New Stop Distance) x Value per Pip` to adjust lot sizes dynamically. If your new capital limit is $1,500 with a stop distance of 30 pips, your new lot size would be 5 lots if the pip value is $10.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Lot Size",
          "definition": "Lot sizes that are adjusted in response to changing market conditions and risk assessments."
        }
      ],
      "whyThisMatters": "Dynamic adjustments to lot sizes enhance trading adaptability, allowing traders to respond effectively to market fluctuations.",
      "realLifeExample": "If your account grows to $20,000 and you decide to increase your risk per trade to 2%, your new capital limit would be $400, allowing for adjustments in lot size based on current stop distances.",
      "commonMistake": "Traders often fail to adjust lot sizes in real-time, leading to inconsistent risk management during volatile market conditions.",
      "quickNote": "Dynamic adjustments to lot sizes are essential for maintaining effective risk management in fluctuating markets.",
      "mentorText": "Always be ready to adjust your lot sizes based on current market conditions. If volatility spikes, recalibrate your risk limits and lot sizes to stay aligned with your strategy.",
      "mentorAnalogy": "Dynamic lot sizing is like a sailor adjusting sail size based on wind conditions; failure to adapt can lead to capsizing."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Integrating Risk-Reward Ratios in Sizing",
    "label": "Core Track",
    "body": "### Risk-Reward Ratios: Lot Size Calculation Integration\nIncorporating risk-reward ratios into lot size calculations ensures alignment with your defined risk appetite. This card details **how to adjust lot sizes based on risk-reward assessments**.\n\n* **Risk-Reward Ratio Definition**: Calculate the ratio by dividing potential profit by potential loss. For example, a 3:1 ratio indicates a potential profit of $300 for every $100 risked.\n* **Lot Size Formula**: Use the formula: Lot Size = (Account Risk * Account Balance) / (Stop Loss Distance * Pip Value). Adjust the account risk based on the risk-reward ratio to ensure trades align with your strategy.\n* **Practical Application**: If your account balance is $10,000, you risk 1% ($100) on a trade with a stop loss of 50 pips and a pip value of $10, the lot size would be calculated as: Lot Size = (0.01 * 10,000) / (50 * 10) = 0.2 lots for a 2:1 risk-reward ratio.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of potential profit to potential loss in a trade."
        },
        {
          "term": "Lot Size",
          "definition": "The number of units traded in a single transaction."
        }
      ],
      "whyThisMatters": "Aligning lot sizes with risk-reward ratios prevents overexposure and enhances strategic discipline.",
      "realLifeExample": "In a trade on GBPUSD, if the entry is at 1.3000, stop loss at 1.2950 (50 pips), and target at 1.3100 (100 pips), the risk-reward ratio is 2:1, guiding a lot size of 0.2 based on the above calculations.",
      "commonMistake": "Traders often neglect to adjust lot sizes when the risk-reward ratio changes, leading to inconsistent risk exposure.",
      "quickNote": "Always adjust lot sizes based on the calculated risk-reward ratio.",
      "mentorText": "When you assess a trade, always calculate your risk-reward ratio first. It dictates how much you can afford to risk and helps you size your position correctly.",
      "mentorAnalogy": "Think of it like a structural engineer calculating load-bearing capacities. Each trade must support its risk-reward ratio just as a beam must support its weight."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Capital Allocation Strategies for Lot Sizing",
    "label": "Core Track",
    "body": "### Capital Allocation: Strategies for Lot Size Determination\nEffective capital allocation strategies directly influence how lot sizes are calculated and adjusted. This card covers **various methods to allocate capital for optimal risk management**.\n\n* **Fixed Percentage Allocation**: Allocate a fixed percentage of your total capital per trade. For instance, risking 2% of a $10,000 account means a maximum risk of $200 per trade.\n* **Volatility-Based Allocation**: Adjust lot sizes based on the volatility of the instrument. For example, a highly volatile asset like Bitcoin may require smaller lot sizes to manage risk effectively compared to a stable asset like USDJPY.\n* **Dynamic Reallocation**: Regularly reassess and reallocate capital based on performance and market conditions. If your account grows to $12,000, recalibrate your risk per trade to reflect the new capital base.",
    "context": {
      "keyTerms": [
        {
          "term": "Fixed Percentage Allocation",
          "definition": "A strategy where a set percentage of total capital is risked per trade."
        },
        {
          "term": "Volatility-Based Allocation",
          "definition": "Adjusting lot sizes based on the volatility of the asset being traded."
        }
      ],
      "whyThisMatters": "Understanding capital allocation strategies ensures that your lot sizing remains consistent with your overall risk management framework.",
      "realLifeExample": "If trading Ethereum with a 3% allocation strategy on a $10,000 account, you would risk $300. If Ethereum's volatility increases, you might adjust to a smaller lot size to maintain that risk level.",
      "commonMistake": "Failing to adjust lot sizes based on changing capital or market conditions can lead to overexposure and increased risk.",
      "quickNote": "Capitalize on effective allocation strategies to optimize lot sizing.",
      "mentorText": "Always think about how much of your capital you're willing to risk on each trade. This decision shapes your lot size and overall trading strategy.",
      "mentorAnalogy": "Consider a financial planner allocating assets across different investments. Each allocation must reflect the risk tolerance and market conditions to ensure a balanced portfolio."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Determining Maximum Risk per Trade",
    "label": "Core Track",
    "body": "### Maximum Risk Calculation: Guiding Lot Size Decisions\nCalculating the maximum risk per trade is essential for guiding lot size decisions. This card explains **how to compute maximum risk based on capital and risk tolerance**.\n\n* **Risk Tolerance Assessment**: Define your risk tolerance as a percentage of your total capital. For example, a 1% risk tolerance on a $10,000 account allows for a maximum risk of $100 per trade.\n* **Stop Loss Distance Impact**: The distance of your stop loss directly affects the lot size. If you set a stop loss of 30 pips on a trade, the formula becomes: Lot Size = (Max Risk) / (Stop Loss Distance * Pip Value).\n* **Example Calculation**: For a $10,000 account with a 1% risk tolerance and a stop loss of 30 pips at a pip value of $10, the lot size would be calculated as: Lot Size = (100) / (30 * 10) = 0.33 lots.",
    "context": {
      "keyTerms": [
        {
          "term": "Maximum Risk",
          "definition": "The highest amount of capital a trader is willing to risk on a single trade."
        },
        {
          "term": "Stop Loss Distance",
          "definition": "The distance in pips from the entry price to the stop loss level."
        }
      ],
      "whyThisMatters": "Accurate maximum risk calculations ensure that traders do not exceed their risk tolerance, preserving capital over time.",
      "realLifeExample": "In a trade on AUDUSD, if you risk 1% of a $10,000 account with a stop loss of 40 pips, your lot size calculation would yield 0.25 lots, ensuring adherence to your risk parameters.",
      "commonMistake": "Traders often miscalculate maximum risk, leading to oversized positions that can jeopardize their trading account.",
      "quickNote": "Always calculate maximum risk before determining lot sizes.",
      "mentorText": "Before entering any trade, assess how much of your capital you're willing to risk. This figure is non-negotiable and should guide your lot sizing.",
      "mentorAnalogy": "Think of it like a surgeon determining how much anesthesia to administer. Too much can be dangerous, just as too much risk can jeopardize your trading."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Scenario Analysis for Lot Size Adjustments",
    "label": "Core Track",
    "body": "### Scenario Analysis: Adjusting Lot Sizes for Market Conditions\nEngaging in scenario analysis allows traders to adjust lot sizes based on varying market conditions. This card focuses on **how to conduct scenario analysis for effective lot size management**.\n\n* **Market Condition Assessment**: Evaluate current market conditions, such as volatility and trend strength. For instance, in a high-volatility environment, consider reducing lot sizes to mitigate risk.\n* **Stress Testing Lot Sizes**: Simulate different scenarios to assess how lot sizes perform under various conditions. For example, if testing a strategy on EURUSD during major news events, analyze how lot sizes impact drawdowns and overall performance.\n* **Adaptive Lot Sizing**: Based on scenario outcomes, adjust lot sizes dynamically. If a backtest shows that larger lot sizes lead to excessive drawdowns during volatile periods, recalibrate to smaller sizes for future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating potential outcomes based on varying market conditions."
        },
        {
          "term": "Adaptive Lot Sizing",
          "definition": "Adjusting lot sizes dynamically based on market conditions and performance analysis."
        }
      ],
      "whyThisMatters": "Scenario analysis equips traders with the ability to adapt lot sizes, enhancing risk management and capital preservation.",
      "realLifeExample": "If backtesting a strategy on GBPJPY during a high-impact news release, you might find that a lot size of 1.0 leads to drawdowns exceeding 10%. Adjusting to 0.5 lots could mitigate this risk significantly.",
      "commonMistake": "Failing to conduct scenario analysis can lead to inappropriate lot sizes, resulting in unexpected losses.",
      "quickNote": "Utilize scenario analysis to inform and adjust your lot sizes based on market dynamics.",
      "mentorText": "Always analyze how different market conditions affect your trades. This insight is crucial for adjusting your lot sizes effectively.",
      "mentorAnalogy": "Consider a pilot adjusting flight plans based on weather conditions. Just as pilots must adapt to turbulence, traders must adjust their lot sizes to navigate market volatility."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Psychological Factors in Risk Sizing",
    "label": "Core Track",
    "body": "### Psychological Factors: Emotional Bias in Risk Sizing\nRisk sizing decisions are often influenced by psychological biases that can lead to suboptimal trading outcomes. This card examines **how to recognize and mitigate emotional biases in risk calculations**.\n\n* **Loss Aversion**: Traders may overestimate the impact of potential losses, leading to overly conservative position sizes. This can result in missed opportunities for growth.\n* **Overconfidence Bias**: An inflated sense of one's trading ability can lead to excessive risk-taking. Implementing strict risk parameters can counteract this tendency.\n* **Fear and Greed Dynamics**: Emotional responses to market fluctuations can distort rational risk assessments. Establishing a systematic approach to risk sizing helps maintain objectivity during volatile conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Loss Aversion",
          "definition": "The tendency to prefer avoiding losses over acquiring equivalent gains."
        },
        {
          "term": "Overconfidence Bias",
          "definition": "The tendency to overestimate one's own abilities or knowledge."
        },
        {
          "term": "Fear and Greed Dynamics",
          "definition": "Emotional responses that can influence trading decisions."
        }
      ],
      "whyThisMatters": "Understanding psychological factors allows traders to implement more disciplined risk sizing, reducing the impact of emotional decision-making.",
      "realLifeExample": "A trader with a $10,000 account sizes a position at 0.5 lots on EURUSD, fearing a loss after a recent drawdown, despite a calculated risk of only 0.2 lots being appropriate.",
      "commonMistake": "Failing to account for psychological biases leads to inconsistent risk sizing and potential capital erosion.",
      "quickNote": "Mitigate emotional biases to enhance risk sizing accuracy.",
      "mentorText": "Recognize that your emotions can cloud judgment. Stick to your calculated risk parameters, regardless of market noise.",
      "mentorAnalogy": "Think of risk sizing like a pilot's pre-flight checklist; emotional distractions can lead to critical oversights that jeopardize the entire flight."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Advanced Risk Models for Lot Sizing",
    "label": "Core Track",
    "body": "### Advanced Risk Models: Enhancing Lot Size Calculations\nUtilizing advanced risk models can refine lot sizing, allowing for a more tailored approach to risk management. This card discusses **how to implement sophisticated models for precise lot sizing**.\n\n* **Value at Risk (VaR)**: This statistical technique estimates the potential loss in value of a portfolio over a defined period for a given confidence interval, aiding in determining appropriate lot sizes.\n* **Monte Carlo Simulations**: By simulating numerous market scenarios, traders can assess the impact of different lot sizes on portfolio performance under varying conditions.\n* **Dynamic Position Sizing**: Adjusting lot sizes based on real-time volatility measures ensures that risk exposure aligns with current market conditions, enhancing overall risk management.",
    "context": {
      "keyTerms": [
        {
          "term": "Value at Risk (VaR)",
          "definition": "A measure used to assess the risk of loss on an investment."
        },
        {
          "term": "Monte Carlo Simulations",
          "definition": "A computational algorithm that uses repeated random sampling to obtain numerical results."
        },
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting position sizes based on current market volatility."
        }
      ],
      "whyThisMatters": "Advanced models provide a framework for more accurate risk assessments, leading to improved trading performance.",
      "realLifeExample": "Using a VaR calculation, a trader determines that a 95% confidence level suggests a maximum loss of $500 on a $10,000 account, leading to a calculated lot size of 0.3 lots on USDJPY.",
      "commonMistake": "Relying solely on static models can lead to miscalculations in lot sizing, especially in volatile markets.",
      "quickNote": "Incorporate advanced models to refine lot sizing strategies.",
      "mentorText": "Don't settle for basic calculations. Use advanced models to adapt your lot sizes to the market's behavior.",
      "mentorAnalogy": "Consider advanced risk models like an architect's blueprint; they provide detailed insights that guide the construction of a robust trading strategy."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Common Mistakes in Risk Sizing Calculations",
    "label": "Core Track",
    "body": "### Common Mistakes: Risk Sizing Calculations\nIdentifying and avoiding common pitfalls in risk sizing calculations is essential for effective trading. This card highlights **frequent errors and their implications for trading decisions**.\n\n* **Ignoring Stop Loss Placement**: Failing to account for the distance of stop losses can lead to miscalculated position sizes, exposing traders to unnecessary risk.\n* **Overestimating Account Equity**: Traders may mistakenly use inflated account balances for calculations, resulting in excessive risk exposure.\n* **Neglecting Market Conditions**: Static risk sizing that does not adapt to changing market volatility can lead to inappropriate position sizes, increasing the likelihood of drawdowns.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Loss Placement",
          "definition": "The strategy of determining where to set a stop loss to limit potential losses."
        },
        {
          "term": "Account Equity",
          "definition": "The total value of a trader's account, including cash and open positions."
        },
        {
          "term": "Market Volatility",
          "definition": "The degree of variation in trading prices over time."
        }
      ],
      "whyThisMatters": "Avoiding these mistakes ensures that risk sizing is accurate, leading to more consistent trading outcomes.",
      "realLifeExample": "A trader calculates a position size based on a $15,000 account but neglects to adjust for a stop loss set 100 pips away, resulting in a position size that risks 5% of equity instead of the intended 1%.",
      "commonMistake": "Failing to adjust position sizes based on stop loss distance can lead to significant capital loss.",
      "quickNote": "Identify and rectify common pitfalls in risk sizing for better trading accuracy.",
      "mentorText": "Be meticulous in your calculations. Every detail matters, especially stop loss placement and account equity.",
      "mentorAnalogy": "Think of risk sizing like a surgeon's precision; one miscalculation can lead to severe consequences."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Real-World Applications of Risk Sizing",
    "label": "Core Track",
    "body": "### Real-World Applications: Practical Risk Sizing Calculations\nUnderstanding how to apply risk sizing calculations in real-world scenarios is crucial for effective trading. This card illustrates **the practical application of risk sizing in various trading strategies**.\n\n* **Scalping Strategies**: In scalping, precise risk sizing is critical due to the high frequency of trades. A trader might use a $10,000 account to risk 0.5% per trade, calculating a lot size of 0.1 on GBPUSD with a 20-pip stop loss.\n* **Swing Trading**: For swing traders, risk sizing must account for larger stop losses. A trader with a $20,000 account may set a stop loss of 50 pips on AUDCAD, leading to a calculated position size of 0.4 lots to maintain a 1% risk.\n* **Position Trading**: Long-term traders utilize risk sizing to manage exposure over extended periods. A trader with a $50,000 account might risk 2% on a trade, calculating a lot size of 1.0 on SPY with a 100-pip stop loss.",
    "context": {
      "keyTerms": [
        {
          "term": "Scalping",
          "definition": "A trading strategy that involves making numerous trades to profit from small price changes."
        },
        {
          "term": "Swing Trading",
          "definition": "A trading strategy that aims to capture gains in a stock within a short time frame."
        },
        {
          "term": "Position Trading",
          "definition": "A long-term trading strategy that involves holding positions for extended periods."
        }
      ],
      "whyThisMatters": "Applying risk sizing in real-world scenarios enhances decision-making and trading effectiveness.",
      "realLifeExample": "A scalper with a $10,000 account risks 0.5% per trade, calculating a lot size of 0.1 on GBPUSD with a 20-pip stop loss, allowing for 5 trades before reaching maximum risk tolerance.",
      "commonMistake": "Failing to adapt risk sizing to different trading styles can lead to inappropriate exposure and losses.",
      "quickNote": "Apply risk sizing principles to enhance practical trading strategies.",
      "mentorText": "Translate your calculations into action. Understand how different strategies require tailored risk sizing.",
      "mentorAnalogy": "Consider risk sizing like a chef adjusting recipes; each dish requires specific measurements to achieve the desired outcome."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "concept",
    "title": "Practical Exercises for Risk Sizing",
    "label": "Core Track",
    "body": "### Practical Application: Engaging in Risk Sizing Exercises\nPracticing risk sizing calculations enhances your ability to apply theoretical knowledge in real-world scenarios. This card focuses on **hands-on exercises that reinforce risk sizing principles**.\n\n* **Scenario-Based Calculations**: Utilize different capital amounts and stop-loss distances to compute position sizes. For example, with a $10,000 account and a 50 pip stop on EURUSD, calculate the position size using the formula: Position Size = (Account Risk * Account Balance) / Stop Loss in Pips.\n* **Dynamic Adjustments**: Adjust position sizes based on varying market conditions. If volatility increases and your stop-loss widens to 100 pips, recalculate your position size to ensure consistent risk exposure.\n* **Risk-Reward Ratio Integration**: Incorporate risk-reward ratios into your exercises. For instance, if targeting a 2:1 reward with a 50 pip stop, ensure your position size aligns with the expected profit target of 100 pips.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Size",
          "definition": "The number of units to trade based on risk parameters."
        },
        {
          "term": "Account Risk",
          "definition": "The percentage of the account balance allocated to a single trade."
        }
      ],
      "whyThisMatters": "Mastering practical exercises in risk sizing solidifies your ability to manage capital effectively under varying market conditions.",
      "realLifeExample": "Calculating a position size of 2.0 lots on GBPUSD with a $20,000 account and a 30 pip stop-loss, ensuring a risk of 1% per trade.",
      "commonMistake": "Failing to adjust position sizes when stop-loss distances change, leading to unintended risk exposure.",
      "quickNote": "Engage in scenario-based exercises to reinforce risk sizing calculations.",
      "mentorText": "When you practice these calculations, think of them as a pilot adjusting fuel loads based on flight distance. Each scenario requires precise adjustments to ensure a safe landing.",
      "mentorAnalogy": "Just as an architect calculates material quantities based on design specifications, you must determine position sizes based on your risk parameters."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "practice",
    "title": "Summary of Core Risk Sizing Concepts",
    "label": "Core Track",
    "body": "### Core Concepts: Recap of Risk Sizing Calculations\nUnderstanding the mathematical foundations of risk sizing is essential for effective trading. This card summarizes **key concepts that underpin risk sizing calculations**.\n\n* **Risk Percentage Calculation**: Determine the risk percentage per trade using the formula: Risk % = (Account Risk / Account Balance) * 100. For a $15,000 account risking $150, the risk percentage is 1%.\n* **Position Size Formula**: Calculate position size with the formula: Position Size = (Account Risk * Account Balance) / Stop Loss in Pips. For a $20,000 account with a 40 pip stop-loss, the position size would be 0.25 lots on EURUSD.\n* **Adjusting for Market Conditions**: Adapt your calculations based on market volatility. If the ATR indicates a 60 pip average movement, adjust your stop-loss and recalculate position sizes accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        },
        {
          "term": "Stop Loss",
          "definition": "A predetermined price level to limit losses on a trade."
        }
      ],
      "whyThisMatters": "A solid grasp of these core concepts ensures that you can dynamically adjust your risk management strategies in real-time.",
      "realLifeExample": "Using a $25,000 account and a 25 pip stop-loss on AUDCAD, calculate a position size of 0.4 lots, maintaining a risk of 1% per trade.",
      "commonMistake": "Neglecting to recalculate position sizes when market volatility changes, leading to inconsistent risk management.",
      "quickNote": "Recap and internalize the formulas for effective risk sizing.",
      "mentorText": "Think of these calculations as the foundation of a building. Without a solid base, everything else is at risk of collapse.",
      "mentorAnalogy": "Like a surgeon meticulously calculating dosages for anesthesia, precise risk sizing ensures you operate within safe limits."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a $30,000 account and a 50 pip stop-loss on USDJPY, what is the position size if risking 1%?",
      "options": [
        {
          "id": "0",
          "text": "0.6 lots",
          "isCorrect": true,
          "feedback": "Correct. The position size is calculated as follows: Position Size = (0.01 * 30000) / 50 = 0.6 lots."
        },
        {
          "id": "1",
          "text": "0.3 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This does not account for the full risk percentage based on the account size."
        },
        {
          "id": "2",
          "text": "1.2 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This exceeds the risk limit based on the stop-loss distance."
        },
        {
          "id": "3",
          "text": "0.4 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This does not reflect the correct calculation for the given parameters."
        }
      ]
    },
    "visualKey": "dynamic-calculator-drill"
  },
  {
    "type": "summary",
    "title": "Core Risk Sizing Formula Synthesis",
    "label": "Core Track",
    "body": "### Advanced Application: Dynamic Risk Sizing Calculations\nApplying dynamic risk sizing calculations is critical for capital preservation and effective risk management. This card covers **advanced techniques for integrating risk metrics into trading strategies**.\n\n* **Capital Defense Strategies**: Implement dynamic risk adjustments based on drawdown levels. For instance, if your account experiences a 10% drawdown, reduce your risk per trade to 0.5% until recovery.\n* **Risk Metrics Integration**: Use metrics such as Sharpe Ratio and Sortino Ratio to inform position sizing decisions. For example, if your strategy has a Sharpe Ratio of 1.5, consider increasing your risk exposure slightly while maintaining a focus on overall capital preservation.\n* **Scenario Planning**: Develop multiple risk scenarios based on historical data. If backtesting reveals a maximum drawdown of 15% during specific market conditions, adjust your risk parameters accordingly to mitigate potential losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return."
        },
        {
          "term": "Sortino Ratio",
          "definition": "A variation of the Sharpe Ratio that differentiates harmful volatility from total volatility."
        }
      ],
      "whyThisMatters": "Advanced risk management techniques ensure that you can adapt to changing market conditions while protecting your capital.",
      "realLifeExample": "Adjusting risk from 1% to 0.5% after a 10% drawdown on a $50,000 account to preserve capital during volatile market conditions.",
      "commonMistake": "Failing to adjust risk parameters based on drawdown levels, leading to increased exposure during unfavorable conditions.",
      "quickNote": "Incorporate advanced risk metrics to enhance your trading strategy.",
      "mentorText": "Think of this as a pilot recalibrating flight plans based on changing weather conditions. Adjust your risk to ensure a safe journey.",
      "mentorAnalogy": "Like a financial analyst adjusting forecasts based on new economic data, you must adapt your risk strategies to align with market realities."
    },
    "taskData": null,
    "visualKey": "dynamic-calculator-drill"
  }
];
