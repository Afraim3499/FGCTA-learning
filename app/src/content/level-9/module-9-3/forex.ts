import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Lot Sizing in Forex Trading",
    "label": "Forex Track",
    "body": "<!-- M9.3-forex-C1 -->\n### Core Scenario: Lot Sizing Fundamentals\nLot sizing is a foundational element in Forex trading that directly influences execution costs and liquidity management. This card details **how to determine appropriate lot sizes based on account equity and risk tolerance**.\n\n* **Account Equity Assessment**: Calculate the total account equity to establish a baseline for lot size determination. For instance, with an account balance of $10,000, a trader might set a maximum risk of 2%, allowing for a potential loss of $200 per trade.\n* **Risk Percentage Allocation**: Define the risk per trade as a percentage of total equity. If risking 2% on a trade, and the stop-loss is set at 50 pips, the lot size can be calculated as: Lot Size = (Risk Amount / Stop Loss in Pips) / Pip Value.\n* **Execution Cost Consideration**: Factor in the broker's spread and commission costs when determining the final lot size. For example, if the spread on EURUSD is 1.5 pips, this should be included in the overall cost assessment to avoid unexpected losses.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Size",
          "definition": "The number of currency units traded in a single transaction."
        },
        {
          "term": "Execution Cost",
          "definition": "The total cost incurred when executing a trade, including spreads and commissions."
        }
      ],
      "whyThisMatters": "Proper lot sizing is essential for effective risk management and minimizing trading costs, which directly impacts profitability.",
      "realLifeExample": "A trader with a $10,000 account risks 2% per trade, setting a stop-loss of 50 pips on EURUSD. This results in a calculated lot size of 0.4 lots, ensuring the execution cost remains within acceptable limits.",
      "commonMistake": "Traders often neglect to adjust lot sizes based on changing account equity, leading to disproportionate risk exposure.",
      "quickNote": "Accurate lot sizing is critical for managing risk and execution costs in Forex trading.",
      "mentorText": "When sizing your trades, always start with your total equity. If you risk too much on a single trade, you jeopardize your entire account. Stick to your risk management rules.",
      "mentorAnalogy": "Think of lot sizing like fuel management in aviation; just as pilots calculate fuel needs based on distance and weight, traders must assess their equity and risk to determine the right lot size."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Adjusting Lot Sizes Based on ADR",
    "label": "Forex Track",
    "body": "<!-- M9.3-forex-C2 -->\n### Core Scenario: ADR-Based Lot Sizing\nAdjusting lot sizes according to the Average Daily Range (ADR) enhances trade execution and minimizes slippage. This card outlines **how to effectively use ADR to inform lot sizing decisions**.\n\n* **ADR Calculation**: Calculate the ADR by averaging the daily high and low over a specified period, such as the last 14 days. For example, if the ADR for GBPUSD is 100 pips, this indicates the average price movement.\n* **Dynamic Lot Sizing**: Adjust lot sizes based on the ADR to accommodate volatility. If the ADR is high, increase the lot size to capitalize on larger price movements, while reducing it during low volatility periods to mitigate risk.\n* **Slippage Management**: Monitor slippage during high-impact news events. For instance, if trading USDJPY during a major announcement, consider reducing lot sizes to account for potential increased slippage beyond the typical ADR.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average Daily Range (ADR)",
          "definition": "A measure of the average price movement of a currency pair over a specified period."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Adjusting lot sizes based on ADR allows traders to align their strategies with market volatility, optimizing execution and reducing risk.",
      "realLifeExample": "A trader observes that the ADR for AUDCAD is 80 pips. If they typically trade 1 lot but notice the ADR has increased to 120 pips, they may adjust to 1.5 lots to leverage the increased volatility.",
      "commonMistake": "Failing to adjust lot sizes during periods of high volatility can lead to excessive slippage and increased losses.",
      "quickNote": "Use ADR to dynamically adjust lot sizes and enhance trade execution.",
      "mentorText": "Always keep an eye on the ADR. If the market is moving more than usual, adjust your lot size accordingly to take advantage of that volatility without overexposing yourself.",
      "mentorAnalogy": "Adjusting lot sizes based on ADR is like a sailor adjusting sail size according to wind conditions; too much sail in a storm can capsize the boat, just as too large a lot size can lead to significant losses."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Understanding ECN Liquidity Spreads",
    "label": "Forex Track",
    "body": "<!-- M9.3-forex-C3 -->\n### Core Scenario: ECN Spread Dynamics\nUnderstanding the impact of ECN liquidity spreads is essential for making informed lot sizing decisions. This card explains **how to account for ECN spreads in your trading strategy**.\n\n* **ECN Spread Characteristics**: ECN brokers typically offer variable spreads based on market liquidity. For example, during peak trading hours, the EURUSD spread may be as low as 0.2 pips, while during off-hours it could widen to 1.0 pip.\n* **Lot Size Adjustment**: Adjust lot sizes based on the prevailing spread. If trading EURUSD with a 1.0 pip spread, consider reducing the lot size to maintain risk levels, as higher spreads increase execution costs.\n* **Liquidity Assessment**: Evaluate market liquidity before entering trades. For instance, if trading GBPJPY during the London session, where liquidity is high, you can afford to trade larger lot sizes due to tighter spreads.\n",
    "context": {
      "keyTerms": [
        {
          "term": "ECN Broker",
          "definition": "A broker that provides direct market access and allows traders to interact with liquidity providers."
        },
        {
          "term": "Liquidity Spread",
          "definition": "The difference between the bid and ask price in a market, which can vary based on liquidity."
        }
      ],
      "whyThisMatters": "Understanding ECN spreads is vital for optimizing trade execution and ensuring that lot sizes align with market conditions.",
      "realLifeExample": "A trader notices that during the Asian session, the EURJPY spread widens to 1.5 pips. To maintain risk management, they adjust their lot size from 2 lots to 1.5 lots to account for the increased cost.",
      "commonMistake": "Traders often overlook the impact of changing spreads on their lot sizes, leading to unexpected losses.",
      "quickNote": "Account for ECN liquidity spreads when determining lot sizes to optimize execution costs.",
      "mentorText": "Always check the spread before executing a trade. If the spread is wider than usual, adjust your lot size to avoid unnecessary losses.",
      "mentorAnalogy": "Think of ECN spreads like tolls on a highway; if the toll increases, you might choose a smaller vehicle to save on costs, just as you would adjust your lot size to manage execution expenses."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Risk Assessment for Forex Lot Sizes",
    "label": "Forex Track",
    "body": "<!-- M9.3-forex-C4 -->\n### Core Scenario: Risk Management in Lot Sizing\nAssessing risk when determining lot sizes is critical for maintaining alignment with overall trading risk management strategies. This card covers **the process of evaluating risk before executing trades**.\n\n* **Risk-Reward Ratio**: Establish a favorable risk-reward ratio before determining lot sizes. For example, if targeting a 100 pip gain with a 50 pip stop-loss, the ratio is 2:1, guiding the appropriate lot size based on risk tolerance.\n* **Volatility Consideration**: Factor in market volatility when assessing risk. If the market is particularly volatile, consider reducing lot sizes to mitigate potential losses, especially if the average true range (ATR) indicates higher price swings.\n* **Position Sizing Formula**: Utilize a position sizing formula to calculate lot sizes based on risk assessment. For instance, if the account balance is $5,000 and the risk per trade is set at 1%, the maximum risk amount is $50, guiding the lot size calculation based on the stop-loss distance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of potential profit to potential loss in a trade."
        },
        {
          "term": "Position Sizing Formula",
          "definition": "A mathematical approach to determine the appropriate lot size based on risk parameters."
        }
      ],
      "whyThisMatters": "Effective risk assessment ensures that lot sizes are aligned with overall trading strategies, maintaining capital preservation and long-term profitability.",
      "realLifeExample": "A trader with a $5,000 account sets a stop-loss of 30 pips on USDCHF, targeting a 60 pip gain. With a risk of $50, they calculate a lot size of 0.5 to maintain a favorable risk-reward ratio.",
      "commonMistake": "Traders often neglect to reassess risk parameters when market conditions change, leading to inappropriate lot sizing.",
      "quickNote": "Assess risk meticulously to ensure lot sizes align with overall trading strategies.",
      "mentorText": "Before entering any trade, assess your risk. If the potential loss exceeds your comfort level, adjust your lot size accordingly to stay within your risk management framework.",
      "mentorAnalogy": "Assessing risk in lot sizing is akin to a surgeon evaluating the risks of a procedure; just as a surgeon must ensure patient safety, traders must ensure their capital is protected."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Impact of Market Conditions on Lot Sizing",
    "label": "Forex Track",
    "body": "<!-- M9.3-forex-C5 -->\n### Market Condition Analysis: Lot Sizing Impact\nMarket conditions, including volatility and liquidity, directly influence optimal lot sizing in Forex trading. This card details **how to adjust lot sizes based on current market dynamics**.\n\n* **Volatility Assessment**: Utilize the Average True Range (ATR) to gauge market volatility. For instance, if EURUSD has an ATR of 0.0050 (50 pips), consider reducing lot size during high volatility to mitigate risk exposure.\n* **Liquidity Spread Evaluation**: Monitor the bid-ask spread in real-time. If the spread widens from 1 pip to 3 pips during news events, adjust your lot size to ensure execution costs remain manageable.\n* **Market Session Timing**: Recognize that lot sizing should vary by trading session. For example, during the London session, where liquidity is higher, you may increase your lot size compared to the Asian session where spreads are typically wider.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator measuring market volatility."
        },
        {
          "term": "Bid-Ask Spread",
          "definition": "The difference between the buying and selling price of an asset."
        }
      ],
      "whyThisMatters": "Understanding the impact of market conditions on lot sizing ensures traders can optimize their execution costs and manage risk effectively.",
      "realLifeExample": "During a high-impact news release, EURUSD's spread widened from 1 pip to 4 pips. A trader adjusted their lot size from 2 lots to 1 lot to maintain risk parameters.",
      "commonMistake": "Failing to adjust lot sizes during volatile market conditions, leading to unexpected losses.",
      "quickNote": "Lot sizing must adapt to market volatility and liquidity to optimize execution costs.",
      "mentorText": "When market conditions shift, your lot size must follow suit. If you see volatility spike, scale back your position to protect your capital.",
      "mentorAnalogy": "Think of lot sizing like adjusting the throttle in an aircraft; in turbulent conditions, you reduce speed to maintain control and safety."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Dynamic Lot Sizing Strategies",
    "label": "Forex Track",
    "body": "<!-- M9.3-forex-C6 -->\n### Adaptive Lot Sizing: Real-Time Strategies\nDynamic lot sizing strategies allow traders to adjust their position sizes based on real-time market data. This card outlines **how to implement adaptive strategies for optimal execution**.\n\n* **Real-Time Data Integration**: Use APIs to pull live market data, including spreads and volatility, to inform lot size decisions. For example, if GBPJPY shows a sudden increase in spread, reduce your lot size accordingly.\n* **Risk Percentage Model**: Calculate lot size based on a fixed percentage of your account equity. For instance, if your account balance is $10,000 and you risk 1%, your maximum loss per trade should not exceed $100, guiding your lot size.\n* **Liquidity Condition Monitoring**: Adjust lot sizes based on liquidity conditions. If a currency pair experiences low liquidity, consider halving your usual lot size to avoid slippage and high execution costs.",
    "context": {
      "keyTerms": [
        {
          "term": "API",
          "definition": "Application Programming Interface used to access real-time market data."
        },
        {
          "term": "Risk Percentage Model",
          "definition": "A method of determining lot size based on a fixed percentage of account equity."
        }
      ],
      "whyThisMatters": "Dynamic lot sizing enhances execution efficiency and risk management, allowing traders to respond effectively to market changes.",
      "realLifeExample": "Using an API, a trader notices that the spread for AUDUSD has increased to 5 pips. They adjust their lot size from 3 lots to 1.5 lots to maintain their risk threshold.",
      "commonMistake": "Sticking to static lot sizes regardless of changing market conditions, leading to increased risk and execution costs.",
      "quickNote": "Dynamic lot sizing strategies must evolve with real-time market data to optimize performance.",
      "mentorText": "Adapt your lot size as the market changes. If you see spreads widening, pull back your position size to protect your capital.",
      "mentorAnalogy": "Dynamic lot sizing is like a pilot adjusting altitude based on weather conditions; you must be responsive to ensure a safe and efficient flight."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "practice",
    "title": "Practical Lot Sizing Exercises",
    "label": "Forex Track",
    "body": "<!-- M9.3-forex-C7 -->\n### Lot Sizing Application: Practical Exercises\nEngage in practical exercises to reinforce lot sizing techniques adjusted for Average Daily Range (ADR) and Electronic Communication Network (ECN) liquidity spreads. This card focuses on **applying theoretical knowledge to real-world scenarios**.\n\n* **ADR Calculation**: Calculate the ADR for a selected currency pair over the last 14 days. If EURUSD has an ADR of 80 pips, determine your lot size based on your risk management strategy and current account balance.\n* **ECN Spread Adjustment**: Analyze the ECN spread for USDCHF during peak trading hours. If the spread is 2 pips, adjust your lot size to ensure that your risk remains consistent with your trading plan.\n* **Scenario Simulation**: Create a simulated trading scenario where you adjust your lot size based on varying ADR and spread conditions. For instance, if the ADR increases to 120 pips, reassess your lot size to maintain risk parameters.",
    "context": {
      "keyTerms": [
        {
          "term": "Average Daily Range (ADR)",
          "definition": "The average price movement of a currency pair over a specified period."
        },
        {
          "term": "Electronic Communication Network (ECN)",
          "definition": "A type of trading system that matches buy and sell orders for securities."
        }
      ],
      "whyThisMatters": "Practical exercises solidify understanding of lot sizing adjustments, enhancing decision-making under varying market conditions.",
      "realLifeExample": "In a simulation, a trader calculates the ADR for GBPUSD as 90 pips. They adjust their lot size to 0.5 lots to align with their risk management plan.",
      "commonMistake": "Neglecting to practice lot sizing adjustments, leading to poor execution in live trading.",
      "quickNote": "Regular practice of lot sizing techniques ensures readiness for real market conditions.",
      "mentorText": "Practice makes perfect. Use simulations to test your lot sizing strategies against different market conditions before going live.",
      "mentorAnalogy": "Practicing lot sizing is like a surgeon rehearsing procedures; the more you practice, the more precise and confident you become in execution."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given an ADR of 100 pips for USDJPY and a risk tolerance of $200, what should your lot size be if your account balance is $10,000?",
      "options": [
        {
          "id": "0",
          "text": "1 lot",
          "isCorrect": true,
          "feedback": "Correct. With a risk of $200 and an ADR of 100 pips, your lot size should be 1 lot (1 pip = $10)."
        },
        {
          "id": "1",
          "text": "0.5 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This lot size does not align with the risk tolerance based on the ADR."
        },
        {
          "id": "2",
          "text": "2 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This exceeds your risk tolerance given the ADR."
        },
        {
          "id": "3",
          "text": "0.1 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This lot size is too small given the ADR and risk parameters."
        }
      ]
    },
    "visualKey": "live-capital-planner"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Lot Sizing",
    "label": "Forex Track",
    "body": "<!-- M9.3-forex-C8 -->\n### Lot Sizing Recap: Key Concepts\nA comprehensive understanding of lot sizing is essential for effective Forex trading. This card summarizes **the critical elements of lot sizing in relation to execution costs and liquidity adjustments**.\n\n* **Market Condition Adaptation**: Lot sizes must be adjusted based on current market volatility and liquidity spreads. For instance, during high volatility, reducing lot sizes can mitigate risk.\n* **Dynamic Strategies**: Implementing dynamic lot sizing strategies allows traders to respond to real-time market data, optimizing execution costs and maintaining risk management.\n* **Practical Application**: Regular practice of lot sizing techniques, including ADR and ECN considerations, enhances a trader's ability to execute trades effectively under varying conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Costs",
          "definition": "The total costs incurred when executing a trade, including spreads and slippage."
        },
        {
          "term": "Liquidity Adjustments",
          "definition": "Modifications made to trading strategies based on current market liquidity."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces the importance of lot sizing in achieving consistent trading performance.",
      "realLifeExample": "A trader recalls adjusting their lot size based on a 3-pip spread during a volatile session, successfully managing their risk and execution costs.",
      "commonMistake": "Overlooking the importance of adjusting lot sizes based on execution costs and liquidity can lead to significant losses.",
      "quickNote": "Effective lot sizing is a blend of market awareness and strategic execution.",
      "mentorText": "Remember, lot sizing is not static. Always be prepared to adjust based on market conditions to protect your capital.",
      "mentorAnalogy": "Think of lot sizing like a chef adjusting ingredient quantities based on the number of diners; precision is key to ensuring a successful outcome."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  }
];
