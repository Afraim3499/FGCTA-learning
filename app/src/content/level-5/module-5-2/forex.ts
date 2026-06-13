import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Scaling Lot Sizes with Daily ATR",
    "label": "Forex Track",
    "body": "### Daily ATR: Scaling Lot Sizes for Major Pairs\nDynamic lot sizing based on the Average True Range (ATR) of major currency pairs enhances trade execution and risk management. This card details **how to scale lot sizes using the daily ATR for pairs like EURUSD and GBPUSD**.\n\n* **Calculating Daily ATR**: Use the last 14 days of price action to compute the daily ATR, which reflects the average volatility. For instance, if the daily ATR for EURUSD is 50 pips, this indicates potential price movement.\n* **Lot Size Adjustment**: Adjust your lot size based on the ATR value. For example, if your risk tolerance is 1% of a $10,000 account, and the ATR is 50 pips, you would calculate your position size as follows: $100 (1% of $10,000) / (50 pips * $10 per pip) = 0.2 lots.\n* **Execution Timing**: Monitor the ATR at market open and adjust your lot sizes accordingly to reflect current volatility, ensuring optimal trade execution throughout the trading session.",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        },
        {
          "term": "Lot Size",
          "definition": "The number of currency units traded in a single transaction."
        }
      ],
      "whyThisMatters": "Scaling lot sizes based on ATR allows traders to adapt to changing market conditions, minimizing risk exposure during volatile periods.",
      "realLifeExample": "On a day when EURUSD has a daily ATR of 50 pips, a trader with a $10,000 account can safely trade 0.2 lots, ensuring that their risk remains consistent regardless of market fluctuations.",
      "commonMistake": "Traders often fixate on arbitrary pip limits without considering the underlying volatility, leading to inconsistent risk management.",
      "quickNote": "Use daily ATR to dynamically scale lot sizes for major currency pairs.",
      "mentorText": "When you assess the daily ATR, think of it as your volatility gauge. If EURUSD is showing 50 pips, you need to adjust your lot size to ensure you’re not overexposed. This keeps your risk in check.",
      "mentorAnalogy": "Adjusting your lot size based on ATR is like calibrating a ship's sails according to wind speed; too much sail in high winds can capsize you, just as too large a position can lead to significant losses."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Using Hourly ATR for Intraday Trading",
    "label": "Forex Track",
    "body": "### Hourly ATR: Precision in Intraday Lot Sizing\nUtilizing hourly ATR readings allows for precise adjustments in lot sizes for intraday trades, enhancing risk management. This card explains **how to apply hourly ATR for effective position sizing**.\n\n* **Calculating Hourly ATR**: Compute the hourly ATR using the last 14 hours of price data. For instance, if the hourly ATR for GBPUSD is 30 pips, this indicates the average expected movement within that timeframe.\n* **Dynamic Lot Sizing**: Adjust your lot size based on the hourly ATR. For example, with a $10,000 account and a risk tolerance of 1%, if the hourly ATR is 30 pips, the calculation would be: $100 (1% of $10,000) / (30 pips * $10 per pip) = 0.33 lots.\n* **Trade Execution**: Continuously monitor the hourly ATR during trading hours to adjust your position sizes dynamically, ensuring that you remain aligned with current market volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Intraday Trading",
          "definition": "Trading that occurs within a single trading day."
        },
        {
          "term": "Hourly ATR",
          "definition": "Average True Range calculated on an hourly basis."
        }
      ],
      "whyThisMatters": "Hourly ATR adjustments provide a more responsive approach to position sizing, allowing traders to capitalize on intraday volatility while managing risk effectively.",
      "realLifeExample": "If GBPUSD has an hourly ATR of 30 pips during the London session, a trader with a $10,000 account can trade 0.33 lots, maintaining consistent risk exposure throughout the day.",
      "commonMistake": "Failing to adjust lot sizes based on hourly ATR can lead to overexposure during volatile intraday movements.",
      "quickNote": "Leverage hourly ATR to refine lot sizes for intraday trades.",
      "mentorText": "When trading intraday, always check the hourly ATR. If GBPUSD is moving 30 pips on average, adjust your lot size to stay within your risk parameters. This keeps your trades manageable.",
      "mentorAnalogy": "Using hourly ATR for lot sizing is akin to a chef adjusting cooking times based on the heat of the stove; too much heat can burn the dish, just as too large a position can lead to significant losses."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Understanding Currency Pair Volatility",
    "label": "Forex Track",
    "body": "### Assessing Currency Pair Volatility with ATR\nUnderstanding the volatility of different currency pairs is essential for informed position sizing decisions. This card covers **how to assess volatility using ATR for various pairs**.\n\n* **Comparative ATR Analysis**: Analyze the ATR of multiple currency pairs to determine their relative volatility. For instance, if EURUSD has an ATR of 50 pips and AUDCAD has an ATR of 70 pips, AUDCAD is more volatile.\n* **Position Sizing Implications**: Use the ATR to inform your position sizing. For example, if you decide to trade AUDCAD with a higher ATR of 70 pips, you may choose to reduce your lot size to maintain consistent risk levels compared to trading EURUSD.\n* **Volatility-Based Strategy Development**: Develop trading strategies that take into account the volatility of the pairs you trade. For example, pairs with higher ATR may require tighter stop-loss levels to manage risk effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Comparative ATR",
          "definition": "Analyzing ATR values across different currency pairs."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        }
      ],
      "whyThisMatters": "Assessing the volatility of currency pairs using ATR enables traders to make informed decisions regarding position sizing and risk management.",
      "realLifeExample": "A trader notices that AUDCAD has an ATR of 70 pips while EURUSD has an ATR of 50 pips. This insight leads them to adjust their lot size for AUDCAD to ensure consistent risk exposure.",
      "commonMistake": "Traders often overlook the volatility differences between pairs, leading to inappropriate position sizing and increased risk.",
      "quickNote": "Utilize ATR to assess and compare the volatility of currency pairs for better position sizing.",
      "mentorText": "When evaluating currency pairs, always check their ATR. If AUDCAD is more volatile than EURUSD, adjust your lot size accordingly. This keeps your risk consistent across trades.",
      "mentorAnalogy": "Understanding currency pair volatility through ATR is like a pilot evaluating wind conditions before takeoff; knowing the wind speed helps in adjusting flight plans to ensure a safe journey."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Lot Sizing Strategies for Forex",
    "label": "Forex Track",
    "body": "### Effective Lot Sizing Strategies Leveraging ATR\nImplementing effective lot sizing strategies that utilize ATR can optimize trades in the Forex market. This card explores **strategies for lot sizing based on ATR**.\n\n* **ATR-Based Position Sizing**: Calculate your lot size based on the ATR of the currency pair you are trading. For example, if USDJPY has an ATR of 40 pips and your risk tolerance is 1%, you would size your position as follows: $100 (1% of a $10,000 account) / (40 pips * $10 per pip) = 0.25 lots.\n* **Dynamic Adjustments**: Continuously adjust your lot sizes as the ATR changes. If USDJPY’s ATR increases to 60 pips, recalculate your position size to maintain your risk level, which would now be $100 / (60 pips * $10) = 0.17 lots.\n* **Risk-Reward Ratio Considerations**: Factor in your desired risk-reward ratio when sizing your positions. For instance, if you aim for a 2:1 ratio and the ATR indicates a potential stop loss of 60 pips, ensure your target profit aligns with this ratio to justify the position size.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of potential profit to potential loss in a trade."
        },
        {
          "term": "Dynamic Adjustments",
          "definition": "Modifying position sizes in response to changing market conditions."
        }
      ],
      "whyThisMatters": "Implementing ATR-based lot sizing strategies enhances profitability by aligning position sizes with market volatility.",
      "realLifeExample": "When USDJPY’s ATR is 40 pips, a trader with a $10,000 account can trade 0.25 lots. If the ATR rises to 60 pips, they adjust to 0.17 lots to maintain consistent risk exposure.",
      "commonMistake": "Traders often fail to adjust their lot sizes dynamically, leading to either overexposure or missed opportunities in volatile markets.",
      "quickNote": "Leverage ATR to develop effective lot sizing strategies that optimize Forex trades.",
      "mentorText": "Always size your positions based on ATR. If USDJPY shows an ATR of 40 pips, calculate your lot size accordingly. If it changes, adjust your position to keep your risk consistent.",
      "mentorAnalogy": "Creating lot sizing strategies based on ATR is like a tailor adjusting a suit; each adjustment ensures a perfect fit for the individual, just as each position size should fit the current market conditions."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Adjusting for News Events with ATR",
    "label": "Forex Track",
    "body": "### News Event Position Sizing: Utilizing ATR\nPosition sizing must adapt to the anticipated volatility surrounding high-impact news events. This card teaches **how to adjust position sizes using ATR to safeguard against volatility spikes**.\n\n* **ATR Calculation Pre-News**: Calculate the Average True Range (ATR) for the currency pair over a suitable period (e.g., 14 days) to gauge typical volatility. For instance, if EURUSD has an ATR of 50 pips, this indicates expected price movement.\n* **Dynamic Position Sizing**: Adjust your position size based on the ATR. For example, if your risk tolerance is $100 and the ATR is 50 pips, your position size should be set to 2 micro lots (0.02) to maintain consistent risk.\n* **News Event Anticipation**: Prior to a news release, consider increasing your ATR multiplier to account for potential spikes. For example, if the news is expected to create 100 pips of movement, adjust your position size accordingly to mitigate risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        }
      ],
      "whyThisMatters": "Understanding how to adjust for news events using ATR can prevent significant losses during volatile market conditions.",
      "realLifeExample": "On March 15, 2023, the Non-Farm Payroll report caused EURUSD to spike 120 pips. By adjusting position size based on an ATR of 50 pips, a trader could have limited their risk exposure effectively.",
      "commonMistake": "Failing to adjust position sizes before high-impact news events, leading to excessive risk exposure.",
      "quickNote": "Utilize ATR to dynamically size positions ahead of news events.",
      "mentorText": "When preparing for a news event, I always check the ATR to gauge volatility. If I see a spike in ATR, I adjust my position size to ensure I’m not overexposed.",
      "mentorAnalogy": "Think of a pilot adjusting fuel load based on weather forecasts. Just as a pilot prepares for turbulence, you must adjust your position size for anticipated market volatility."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Risk Management Techniques Using ATR",
    "label": "Forex Track",
    "body": "### ATR-Based Risk Management Strategies\nEffective risk management is critical for long-term trading success. This card provides **insights into using ATR for more precise position sizing and risk management in Forex trading**.\n\n* **Risk per Trade Calculation**: Determine your risk per trade as a percentage of your account balance (e.g., 1%). If your account is $10,000, your risk is $100. Use ATR to set stop-loss distances accordingly.\n* **Position Size Formula**: Use the formula: Position Size = (Account Risk / (ATR x Pip Value)). For instance, if the ATR is 40 pips and the pip value for EURUSD is $10, your position size would be 0.25 lots for a $100 risk.\n* **Adjusting for Market Conditions**: Regularly update your ATR calculations to reflect changing market conditions. If the ATR increases from 40 to 60 pips, recalculate your position size to maintain consistent risk levels.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Pip Value",
          "definition": "The monetary value of a single pip movement in a currency pair."
        }
      ],
      "whyThisMatters": "Incorporating ATR into risk management allows traders to adapt to changing market conditions and protect their capital effectively.",
      "realLifeExample": "A trader with a $5,000 account risks 1% ($50). With an ATR of 30 pips for GBPUSD, they calculate their position size to be 0.17 lots, ensuring they do not exceed their risk threshold.",
      "commonMistake": "Not recalibrating position sizes as market volatility changes, leading to inconsistent risk exposure.",
      "quickNote": "Use ATR to inform position sizes and manage risk effectively.",
      "mentorText": "I always calculate my position size based on ATR. It’s a disciplined approach that keeps my risk consistent, regardless of market fluctuations.",
      "mentorAnalogy": "Consider a surgeon adjusting their instruments based on the complexity of the procedure. Just as a surgeon prepares for varying conditions, you must adjust your risk management strategies based on market volatility."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "practice",
    "title": "Practical Application of ATR in Forex",
    "label": "Forex Track",
    "body": "### Applying ATR in Real Forex Scenarios\nThis card engages you in practical exercises to apply ATR calculations effectively in Forex trading scenarios. **Reinforce your understanding of volatility-adjusted position sizing through practical application**.\n\n* **Scenario Analysis**: Given a currency pair with an ATR of 25 pips, determine the position size if your account balance is $2,000 and you wish to risk 2% per trade.\n* **Stop-Loss Placement**: Calculate an appropriate stop-loss distance based on an ATR of 40 pips for a trade setup on AUDJPY, ensuring your risk remains within your defined limits.\n* **Volatility Assessment**: Analyze the ATR of USDCHF over the last 14 days and adjust your position size accordingly for an upcoming trade, considering recent market volatility trends.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Size",
          "definition": "The number of lots or units to trade based on risk management criteria."
        }
      ],
      "whyThisMatters": "Practicing ATR applications solidifies your understanding and prepares you for real trading scenarios.",
      "realLifeExample": "If the ATR for USDJPY is 35 pips, and you have a $3,000 account with a risk tolerance of 1%, your position size calculation will guide your trade execution effectively.",
      "commonMistake": "Misapplying ATR calculations, leading to incorrect position sizes and increased risk exposure.",
      "quickNote": "Engage in practical exercises to master ATR applications in Forex trading.",
      "mentorText": "When practicing with ATR, I focus on real scenarios. It’s about applying what you learn to ensure you’re ready when it counts.",
      "mentorAnalogy": "Like a chef practicing recipes to perfect their technique, you must apply ATR calculations to refine your trading skills."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have a $10,000 account and want to risk 1% on a trade. The ATR for EURUSD is 50 pips. What is your position size if the pip value is $10?",
      "options": [
        {
          "id": "0",
          "text": "0.2 lots",
          "isCorrect": true,
          "feedback": "Correct. The calculation is $100 risk / (50 pips x $10) = 0.2 lots."
        },
        {
          "id": "1",
          "text": "0.5 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This would exceed your risk threshold."
        },
        {
          "id": "2",
          "text": "1 lot",
          "isCorrect": false,
          "feedback": "Incorrect. This position size is too large for your risk tolerance."
        },
        {
          "id": "3",
          "text": "0.1 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This position size does not utilize your full risk capacity."
        }
      ]
    },
    "visualKey": "volatility-sizing"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Volatility Sizing",
    "label": "Forex Track",
    "body": "### Key Concepts of Volatility-Adjusted Sizing in Forex\nThis card summarizes the critical elements of volatility-adjusted sizing using ATR, emphasizing its application in lot sizing and risk management. **Understanding these principles is essential for effective trading**.\n\n* **ATR as a Volatility Measure**: ATR provides a quantifiable measure of market volatility, essential for adjusting position sizes dynamically. Regularly monitor ATR to adapt to changing market conditions.\n* **Risk Management Integration**: Integrate ATR into your risk management strategy to ensure consistent risk exposure across trades. This includes recalibrating position sizes based on ATR fluctuations.\n* **Practical Application**: Engage in continuous practice with ATR calculations to reinforce your understanding and improve your trading discipline. Apply these concepts in real trading scenarios for optimal results.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility-Adjusted Sizing",
          "definition": "Position sizing based on market volatility as measured by ATR."
        }
      ],
      "whyThisMatters": "A solid grasp of volatility-adjusted sizing principles ensures traders can navigate varying market conditions effectively.",
      "realLifeExample": "By applying ATR to position sizing, a trader can limit losses during volatile periods, such as the 200 pips movement in GBPUSD during a major economic announcement.",
      "commonMistake": "Overlooking the importance of ATR in position sizing can lead to significant financial losses.",
      "quickNote": "Master the principles of volatility-adjusted sizing for effective Forex trading.",
      "mentorText": "In summary, always consider ATR when sizing your positions. It’s a fundamental aspect that can protect your capital and enhance your trading strategy.",
      "mentorAnalogy": "Like an architect using precise measurements for a building, you must use ATR to ensure your trading structure is solid and resilient against market fluctuations."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  }
];
