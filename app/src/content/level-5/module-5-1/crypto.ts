import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Leveraging the Kelly Criterion in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Risk: Leveraging the Kelly Criterion in Crypto Trading\nThe Kelly Criterion provides a systematic approach to position sizing in the highly volatile cryptocurrency market. This card teaches **how to apply the Kelly Criterion effectively in crypto trading**.\n\n* **Dynamic Win Rate Calculation**: In crypto, the win rate ($W$) can fluctuate significantly due to market sentiment. Calculate $W$ based on historical performance over the last 30 days to ensure relevance.\n* **Volatility Adjusted Payoff Ratio**: The average payoff ratio ($R$) must account for the unique risk profiles of cryptocurrencies. Use a trailing stop to determine $R$ based on the last 10 trades.\n* **Position Size Formula**: The formula $K = W - (1 - W)/R$ outputs the optimal fraction of your capital to risk per trade. For example, with a win rate of 0.55 and an average payoff of 2:1, the optimal risk is 0.25 or 25% of your capital.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Kelly Criterion",
          "definition": "A formula used to determine the optimal size of a series of bets to maximize logarithmic wealth."
        },
        {
          "term": "Win Rate",
          "definition": "The percentage of trades that result in a profit."
        },
        {
          "term": "Payoff Ratio",
          "definition": "The ratio of the average profit of winning trades to the average loss of losing trades."
        }
      ],
      "whyThisMatters": "Applying the Kelly Criterion in crypto trading helps manage risk while maximizing potential returns in a volatile environment.",
      "realLifeExample": "If Bitcoin's price fluctuates between $30,000 and $35,000, and your analysis indicates a 60% win rate with a 1.5:1 payoff ratio, the Kelly Criterion suggests risking 20% of your capital on each trade.",
      "commonMistake": "Traders often miscalculate their win rate by using outdated data, leading to suboptimal position sizes.",
      "quickNote": "Utilize the Kelly Criterion to dynamically adjust position sizes based on current market conditions.",
      "mentorText": "When trading crypto, always reassess your win rate and payoff ratio. The market changes rapidly, and so should your position sizing.",
      "mentorAnalogy": "Think of the Kelly Criterion like an aerospace engineer calculating fuel needs for a flight. Just as they adjust for changing weather conditions, you must adjust your position size based on market volatility."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Sizing Perpetual Contracts with Kelly",
    "label": "Crypto Track",
    "body": "### Core Risk: Sizing Perpetual Contracts with Kelly\nPerpetual contracts require precise sizing to manage leverage effectively in crypto trading. This card teaches **how to size perpetual contracts using the Kelly Criterion**.\n\n* **Leverage Coefficient Integration**: When trading perpetual contracts, incorporate the leverage coefficient ($L$) into your calculations. The effective risk becomes $K = (W - (1 - W)/R) \times L$.\n* **Risk Management Protocol**: Set a maximum leverage threshold (e.g., 5x) to avoid excessive risk exposure. Adjust your position size accordingly to ensure that the total risk does not exceed 2% of your capital.\n* **Scenario Analysis**: Conduct scenario analysis to determine how different leverage levels affect your position size. For instance, with a win rate of 0.52 and a payoff ratio of 1.8:1, using 5x leverage would suggest risking 15% of your capital on a trade.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Contracts",
          "definition": "A type of derivative that allows traders to buy or sell an asset without an expiration date."
        },
        {
          "term": "Leverage Coefficient",
          "definition": "The ratio that indicates how much capital is borrowed to increase the size of a position."
        }
      ],
      "whyThisMatters": "Correctly sizing perpetual contracts is crucial to maintain risk management and avoid liquidation in volatile crypto markets.",
      "realLifeExample": "If Ethereum is trading at $2,000 with a 55% win rate and a 2:1 payoff ratio, using 3x leverage would allow you to risk 18% of your capital on each trade while maintaining a safe margin.",
      "commonMistake": "Traders often overlook the impact of leverage on their position sizing, leading to overexposure and potential liquidation.",
      "quickNote": "Integrate leverage coefficients into your Kelly Criterion calculations for perpetual contracts.",
      "mentorText": "Always factor in your leverage when sizing positions. A small miscalculation can lead to significant losses in a volatile market.",
      "mentorAnalogy": "Sizing perpetual contracts is akin to a surgeon determining the right dosage of anesthesia. Too much can lead to complications, just as too much leverage can lead to liquidation."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Avoiding Auto-Deleveraging (ADL) Thresholds",
    "label": "Crypto Track",
    "body": "### Core Risk: Avoiding Auto-Deleveraging (ADL) Thresholds\nAuto-deleveraging can significantly impact your positions in the crypto market. This card teaches **strategies to avoid hitting ADL thresholds through effective position sizing**.\n\n* **Threshold Awareness**: Understand the ADL thresholds set by exchanges, which often trigger at 50% of your margin. Always size your positions to remain below this threshold to prevent forced liquidation.\n* **Dynamic Position Adjustment**: Regularly adjust your position sizes based on current market volatility. For example, if your position is nearing an ADL threshold, reduce your size by 10% to maintain a safe margin.\n* **Risk Buffer Implementation**: Establish a risk buffer of at least 20% below the ADL threshold to ensure that market fluctuations do not trigger auto-deleveraging. For instance, if your margin allows for a $10,000 position, size it to $8,000 to create a buffer.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Auto-Deleveraging (ADL)",
          "definition": "A mechanism that reduces a trader's position size automatically when margin levels fall below a certain threshold."
        },
        {
          "term": "Margin",
          "definition": "The amount of capital required to open and maintain a leveraged position."
        }
      ],
      "whyThisMatters": "Avoiding ADL thresholds is critical to maintaining control over your positions and preventing forced liquidations in volatile markets.",
      "realLifeExample": "If you have a margin of $5,000 and your position is valued at $10,000, ensure your position size is adjusted to $8,000 to avoid hitting the ADL threshold during sudden market drops.",
      "commonMistake": "Traders often ignore the ADL thresholds, leading to unexpected liquidations during market volatility.",
      "quickNote": "Maintain a position size below ADL thresholds to safeguard against forced liquidations.",
      "mentorText": "Always keep an eye on your margin levels. A small adjustment can save you from a significant loss due to auto-deleveraging.",
      "mentorAnalogy": "Think of avoiding ADL thresholds like a pilot maintaining altitude; a small deviation can lead to a crash if not corrected in time."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Managing Volatility in Crypto Position Sizing",
    "label": "Crypto Track",
    "body": "### Core Risk: Managing Volatility in Crypto Position Sizing\nCryptocurrency markets are characterized by extreme volatility, necessitating careful position sizing. This card teaches **how to manage volatility when applying the Kelly Criterion**.\n\n* **Volatility Measurement**: Use the Average True Range (ATR) to gauge market volatility. Adjust your position size based on the ATR to ensure that your risk remains consistent across different market conditions.\n* **Dynamic Risk Adjustment**: If the ATR indicates a high volatility environment (e.g., ATR of $500 for Bitcoin), reduce your position size by 25% to mitigate risk exposure.\n* **Scenario Planning**: Conduct scenario planning based on historical volatility data. For instance, if past data shows Bitcoin experiences 10% swings on average, adjust your position size to reflect this risk, ensuring you do not exceed 2% of your capital at risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for a set period."
        },
        {
          "term": "Position Sizing",
          "definition": "The process of determining how much capital to allocate to a particular trade."
        }
      ],
      "whyThisMatters": "Effectively managing volatility is essential to protect capital and optimize returns in the unpredictable crypto market.",
      "realLifeExample": "If Ethereum's ATR is $200 and you typically risk $1,000 per trade, adjust your position size to ensure that your risk does not exceed 5 ETH when volatility increases.",
      "commonMistake": "Traders often fail to adjust their position sizes in response to volatility changes, leading to excessive risk exposure.",
      "quickNote": "Utilize ATR to dynamically adjust position sizes based on current market volatility.",
      "mentorText": "Always be aware of the market's volatility. Adjust your position size accordingly to protect your capital from sudden price swings.",
      "mentorAnalogy": "Managing volatility in crypto trading is like a chef adjusting cooking times based on the heat of the stove; too much heat can burn the dish, just as too much risk can lead to significant losses."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Evaluating Risk-Reward Ratios in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Risk-Reward Ratios: Evaluating Crypto Trades\nUnderstanding risk-reward ratios is essential for effective position sizing in cryptocurrency trading. This card examines **how to evaluate risk-reward ratios specific to crypto assets**.\n\n* **Calculating Risk-Reward**: The risk-reward ratio is calculated by dividing the potential profit of a trade by the potential loss. For example, if you enter a trade on Bitcoin at $30,000 with a target of $35,000 and a stop-loss at $28,000, your risk-reward ratio is 2:1.\n* **Position Sizing with Kelly**: Use the Kelly Criterion to determine the optimal fraction of your capital to risk based on your risk-reward ratio. A 2:1 ratio with a win rate of 60% suggests a Kelly fraction of approximately 0.2, meaning you should risk 20% of your capital on this trade.\n* **Implications of High Volatility**: Given the inherent volatility in crypto markets, adjust your risk-reward calculations accordingly. A trade with a 1:1 ratio may not be viable if the asset typically experiences swings of 10% or more within short timeframes.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to its potential loss."
        },
        {
          "term": "Kelly Criterion",
          "definition": "A formula used to determine the optimal size of a series of bets to maximize logarithmic wealth."
        }
      ],
      "whyThisMatters": "Evaluating risk-reward ratios allows traders to make informed decisions on position sizing, critical in the volatile crypto market.",
      "realLifeExample": "A trader enters an Ethereum position at $2,000, aiming for a target of $2,500 with a stop-loss at $1,900, resulting in a risk-reward ratio of 2.5:1.",
      "commonMistake": "Traders often overlook the importance of adjusting risk-reward ratios based on market volatility, leading to over-leveraging.",
      "quickNote": "A favorable risk-reward ratio is essential for sustainable trading in crypto markets.",
      "mentorText": "When evaluating your trades, always calculate your risk-reward ratio first. If it doesn’t meet your criteria, reconsider your entry point or target.",
      "mentorAnalogy": "Think of your trading strategy like a pilot calculating fuel for a flight. Just as a pilot must ensure enough fuel for the journey while accounting for potential turbulence, you must evaluate your risk-reward ratios to ensure a safe trading experience."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Market Factors Affecting Crypto Prices",
    "label": "Crypto Track",
    "body": "### Market Factors: Influencing Crypto Prices\nUnderstanding the market factors that influence cryptocurrency prices is vital for effective position sizing. This card analyzes **how these factors can affect your position sizing strategies using the Kelly Criterion**.\n\n* **Supply and Demand Dynamics**: Cryptocurrency prices are heavily influenced by supply and demand. For instance, a sudden increase in demand for Solana due to a new partnership can lead to a price surge, necessitating a reevaluation of your position sizing.\n* **Regulatory Changes**: Regulatory news can dramatically affect market sentiment. For example, if a country announces favorable regulations for crypto trading, it may lead to a bullish market, prompting an adjustment in your Kelly Criterion calculations to increase position sizes.\n* **Market Sentiment Analysis**: Tools like the Fear and Greed Index can provide insights into market sentiment. A high fear level may suggest a more conservative position size, while greed could indicate an opportunity for larger positions, contingent on your risk assessment.",
    "context": {
      "keyTerms": [
        {
          "term": "Supply and Demand",
          "definition": "The relationship between the availability of a cryptocurrency and the desire for it."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular market or asset."
        }
      ],
      "whyThisMatters": "Recognizing market factors allows traders to adjust their position sizes dynamically, optimizing their risk management strategies.",
      "realLifeExample": "Following a major announcement from the SEC regarding Bitcoin ETFs, a trader may adjust their position size on BTC from 5% to 10% of their capital based on anticipated price movements.",
      "commonMistake": "Failing to consider external market factors can lead to miscalculations in position sizing, resulting in unexpected losses.",
      "quickNote": "Market factors must be continuously monitored to inform position sizing decisions effectively.",
      "mentorText": "Always stay updated on market news. If a major event occurs, reassess your positions and adjust your sizes based on potential impacts.",
      "mentorAnalogy": "Consider a chef adjusting a recipe based on the freshness of ingredients. Just as a chef modifies their dish according to the quality of produce, you must adapt your position sizes based on the current market conditions."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "practice",
    "title": "Practical Exercises in Crypto Position Sizing",
    "label": "Crypto Track",
    "body": "### Practical Application: Position Sizing in Crypto\nEngaging in practical exercises reinforces the application of the Kelly Criterion to position sizing in cryptocurrency trading. This card focuses on **applying the Kelly Criterion in various scenarios**.\n\n* **Scenario Analysis**: You are considering a trade on Cardano (ADA) at $1.50, targeting $1.80 with a stop-loss at $1.40. Calculate the risk-reward ratio and determine the optimal position size using the Kelly Criterion based on a 55% win rate.\n* **Portfolio Adjustment**: Given a portfolio of $10,000, assess how changes in market conditions (e.g., a spike in volatility) would affect your position sizing for a trade on Litecoin (LTC) at $200 with a target of $220 and a stop-loss at $190.\n* **Risk Management Simulation**: Create a simulation where you adjust your position sizes based on varying win rates and risk-reward ratios across different crypto assets, documenting the outcomes and refining your strategy accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The amount of capital allocated to a specific trade."
        },
        {
          "term": "Simulation",
          "definition": "A method for practicing trading strategies in a controlled environment."
        }
      ],
      "whyThisMatters": "Practical exercises solidify understanding of the Kelly Criterion, enhancing decision-making in real trading scenarios.",
      "realLifeExample": "You calculate the risk-reward ratio for a trade on Polkadot (DOT) at $25, targeting $30 with a stop-loss at $23, leading to a Kelly fraction of 0.15 for position sizing.",
      "commonMistake": "Traders often neglect to practice position sizing in simulated environments, leading to errors in live trading.",
      "quickNote": "Regular practice of position sizing scenarios enhances trading discipline and decision-making.",
      "mentorText": "Practice makes perfect. Use simulations to test your strategies and refine your position sizing before risking real capital.",
      "mentorAnalogy": "Think of a pilot practicing in a flight simulator. Just as they rehearse various scenarios to prepare for real flights, you must simulate trading conditions to master your position sizing strategies."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are considering a trade on Chainlink (LINK) at $15, targeting $18 with a stop-loss at $14. What is the optimal position size using the Kelly Criterion with a 65% win rate?",
      "options": [
        {
          "id": "0",
          "text": "10% of your capital",
          "isCorrect": true,
          "feedback": "Correct. The risk-reward ratio is 3:1, leading to a Kelly fraction of approximately 0.1 or 10% of your capital."
        },
        {
          "id": "1",
          "text": "5% of your capital",
          "isCorrect": false,
          "feedback": "Incorrect. A 3:1 risk-reward ratio with a 65% win rate suggests a higher position size."
        },
        {
          "id": "2",
          "text": "15% of your capital",
          "isCorrect": false,
          "feedback": "Incorrect. While aggressive, this exceeds the optimal Kelly fraction calculated."
        },
        {
          "id": "3",
          "text": "20% of your capital",
          "isCorrect": false,
          "feedback": "Incorrect. This is too high given the calculated Kelly fraction for this trade."
        }
      ]
    },
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Position Sizing Strategies",
    "label": "Crypto Track",
    "body": "### Summary: Position Sizing Strategies in Crypto\nEffective position sizing is critical for managing risk in cryptocurrency trading. This card summarizes **the key strategies for applying the Kelly Criterion**.\n\n* **Dynamic Position Adjustment**: Continuously evaluate and adjust your position sizes based on market conditions and volatility. For instance, during high volatility, consider reducing your position size to mitigate risk.\n* **Leverage Management**: Use leverage judiciously. A high leverage ratio can amplify gains but also increases the risk of significant losses, necessitating careful application of the Kelly Criterion.\n* **Consistent Review**: Regularly review your trading performance and adjust your strategies accordingly. Documenting your trades and outcomes can provide insights into your risk management effectiveness and help refine your approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase the potential return of an investment."
        },
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "Summarizing these strategies reinforces the importance of disciplined risk management in volatile crypto markets.",
      "realLifeExample": "A trader adjusts their position size on Ripple (XRP) from 10% to 5% of their capital during a market downturn to manage risk effectively.",
      "commonMistake": "Traders often neglect the importance of reviewing their strategies, leading to repeated mistakes.",
      "quickNote": "Effective position sizing strategies are essential for long-term success in crypto trading.",
      "mentorText": "Always prioritize risk management. Adjust your position sizes based on market conditions and learn from each trade.",
      "mentorAnalogy": "Consider a surgeon who reviews their procedures regularly. Just as they refine their techniques based on outcomes, you must continuously evaluate and adjust your trading strategies."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  }
];
