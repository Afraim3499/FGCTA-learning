import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Sharpe Ratio in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.8-crypto-C1 -->\n### Core Scenario: Application of the Sharpe Ratio\nThe Sharpe Ratio quantifies risk-adjusted returns, essential for evaluating crypto trading strategies, especially in volatile markets like perpetual contracts. This card outlines **how to effectively apply the Sharpe Ratio to assess performance amidst unique crypto challenges**.\n\n* **Volatility Measurement**: Calculate the standard deviation of returns over a defined period to gauge volatility. For instance, if Bitcoin (BTC) has a standard deviation of 5% over 30 days, this will factor into your Sharpe Ratio calculation.\n* **Return Calculation**: Determine the average return from your crypto trades. If your average return on a series of trades is 2% per week, this will be used alongside the risk-free rate in your Sharpe Ratio formula.\n* **Risk-Free Rate Integration**: Incorporate a relevant risk-free rate, such as the yield on a stablecoin like USDC, currently at 1.5%. The formula becomes: Sharpe Ratio = (Average Return - Risk-Free Rate) / Volatility.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return calculated by dividing the excess return of an investment by its standard deviation."
        }
      ],
      "whyThisMatters": "Understanding the Sharpe Ratio allows traders to make informed decisions about risk versus reward in the highly volatile crypto market.",
      "realLifeExample": "For instance, a trader using the Sharpe Ratio finds that their BTC trading strategy yields a ratio of 1.5, indicating a favorable risk-adjusted return compared to a strategy with a ratio of 0.5.",
      "commonMistake": "A frequent error is neglecting to adjust for the unique volatility of crypto assets, leading to misleading Sharpe Ratio calculations.",
      "quickNote": "The Sharpe Ratio helps assess risk-adjusted performance in crypto trading.",
      "mentorText": "When evaluating your crypto trades, always calculate the Sharpe Ratio to understand how much return you're getting for the risk taken. If your ratio is low, it may be time to reassess your strategy.",
      "mentorAnalogy": "Think of the Sharpe Ratio as a safety harness in rock climbing; it measures how much risk you're taking for the height you're gaining."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Calculating Expectancy for Crypto Trades",
    "label": "Crypto Track",
    "body": "<!-- M9.8-crypto-C2 -->\n### Core Scenario: Expectancy Calculation\nExpectancy represents the average amount you can expect to win or lose per trade, crucial for assessing long-term profitability in crypto trading. This card details **the calculation of expectancy while accounting for funding rates and exchange fees**.\n\n* **Win Rate Assessment**: Calculate your win rate by dividing the number of winning trades by the total number of trades. For example, if you had 60 winning trades out of 100, your win rate is 60%.\n* **Average Win and Loss**: Determine the average profit from winning trades and the average loss from losing trades. If your average win is $200 and your average loss is $100, these figures will be used in the expectancy formula.\n* **Expectancy Formula**: Use the formula: Expectancy = (Win Rate x Average Win) - (Loss Rate x Average Loss). With a win rate of 60%, average win of $200, and average loss of $100, your expectancy would be: (0.6 x 200) - (0.4 x 100) = $80.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average amount a trader can expect to win or lose per trade, calculated using win rate and average win/loss."
        }
      ],
      "whyThisMatters": "Calculating expectancy provides a clear understanding of potential profitability, guiding traders in strategy refinement.",
      "realLifeExample": "A trader calculates their expectancy to be $80 per trade after analyzing 100 trades, indicating a profitable strategy in the volatile crypto market.",
      "commonMistake": "Failing to accurately account for all costs, including funding rates and fees, can lead to an inflated expectancy figure.",
      "quickNote": "Expectancy quantifies potential profit per trade, guiding strategic decisions.",
      "mentorText": "Always calculate your expectancy before executing trades. If your expectancy is negative, it’s a clear sign to reevaluate your strategy and trading approach.",
      "mentorAnalogy": "Think of expectancy like a restaurant menu; it helps you decide which dishes (trades) are worth the price based on past customer reviews (performance)."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Impact of Funding Rates on Crypto Trading Expectancy",
    "label": "Crypto Track",
    "body": "<!-- M9.8-crypto-C3 -->\n### Core Scenario: Funding Rates and Expectancy\nFunding rates are periodic payments made between traders in perpetual contracts, significantly affecting trading expectancy. This card explores **how to incorporate funding rates into expectancy calculations for optimized Sharpe Ratios**.\n\n* **Funding Rate Calculation**: Determine the funding rate for your position. For example, if the funding rate for a BTC perpetual contract is 0.01% every 8 hours, this will impact your overall returns.\n* **Adjusting Expectancy**: Subtract the expected funding costs from your average win to accurately reflect profitability. If your average win is $200 and you expect to pay $10 in funding fees, your adjusted average win becomes $190.\n* **Sharpe Ratio Optimization**: Recalculate the Sharpe Ratio using the adjusted expectancy. If your new average return is lower due to funding costs, this will directly affect your risk-adjusted performance assessment.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The cost incurred by traders in perpetual contracts, calculated periodically based on market conditions."
        }
      ],
      "whyThisMatters": "Incorporating funding rates into expectancy calculations ensures a more accurate assessment of profitability and risk in crypto trading.",
      "realLifeExample": "A trader realizes that after accounting for a $10 funding fee, their adjusted average win on a BTC trade drops from $200 to $190, impacting their overall expectancy.",
      "commonMistake": "Ignoring funding rates can lead to overestimating potential returns, skewing the Sharpe Ratio and expectancy calculations.",
      "quickNote": "Funding rates must be factored into expectancy for accurate profitability assessments.",
      "mentorText": "Always factor in funding rates when calculating your expectancy. They can significantly reduce your profits and alter your trading strategy's effectiveness.",
      "mentorAnalogy": "Consider funding rates like the maintenance costs of a vehicle; they reduce your overall profit from driving (trading) and must be accounted for in your budget."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Understanding Exchange Fees in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.8-crypto-C4 -->\n### Core Scenario: Exchange Fees Impact\nExchange fees can erode trading profits and distort the Sharpe Ratio and expectancy calculations. This card focuses on **how to accurately account for exchange fees in your trading performance metrics**.\n\n* **Fee Structure Analysis**: Identify the fee structure of your trading platform. For instance, if your exchange charges a flat fee of 0.1% per trade, this will directly impact your profitability on each transaction.\n* **Incorporating Fees into Expectancy**: Adjust your average win and loss to reflect the fees. If your average win is $200 and you incur $10 in fees, your effective average win is now $190.\n* **Sharpe Ratio Reevaluation**: After adjusting for fees, recalculate the Sharpe Ratio to ensure it accurately reflects your trading performance. A lower average return due to fees will reduce your Sharpe Ratio, indicating a need for strategy adjustment.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Exchange Fees",
          "definition": "Costs incurred by traders when executing trades on a platform, impacting overall profitability."
        }
      ],
      "whyThisMatters": "Understanding exchange fees is critical for accurate performance assessment and strategy optimization in crypto trading.",
      "realLifeExample": "A trader calculates their effective average win to be $190 after accounting for $10 in exchange fees, leading to a reevaluation of their trading strategy.",
      "commonMistake": "Many traders overlook exchange fees, leading to inflated profit expectations and miscalculations of the Sharpe Ratio.",
      "quickNote": "Exchange fees must be included in profitability calculations to ensure accurate performance metrics.",
      "mentorText": "Always account for exchange fees in your calculations. They can significantly reduce your profits and alter your trading strategy's effectiveness.",
      "mentorAnalogy": "Think of exchange fees as the tolls on a highway; they reduce your overall journey profit and must be factored into your travel budget."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Risk Management Strategies for Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.8-crypto-C5 -->\n### Core Scenario: Risk Management for Crypto Trading\nEffective risk management is essential for optimizing the Sharpe Ratio and expectancy in the volatile crypto market. This card outlines specific strategies tailored to mitigate risks associated with crypto trading.\n\n* **Position Sizing**: Utilize the Kelly Criterion to determine optimal position sizes based on your edge and win rate. For instance, if your expected return is 20% with a 60% win rate, position size should be calculated to maximize growth while minimizing drawdown.\n* **Stop-Loss Implementation**: Establish strict stop-loss levels based on volatility metrics, such as the Average True Range (ATR). For example, if BTC has an ATR of $500, set stop-loss orders at 1.5x ATR to avoid excessive losses during price swings.\n* **Diversification Across Assets**: Spread capital across multiple crypto assets to reduce idiosyncratic risk. Allocating 30% to BTC, 30% to ETH, and 40% to altcoins can enhance the overall Sharpe Ratio by balancing risk and return across different market behaviors.",
    "context": {
      "keyTerms": [
        {
          "term": "Kelly Criterion",
          "definition": "A formula used to determine the optimal size of a series of bets to maximize logarithmic wealth."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical analysis indicator that measures market volatility."
        }
      ],
      "whyThisMatters": "Implementing tailored risk management strategies can significantly enhance the Sharpe Ratio and expectancy, leading to more sustainable trading outcomes.",
      "realLifeExample": "A trader allocates $10,000 across BTC and ETH, using a 2% risk per trade. With BTC at $50,000 and ETH at $3,000, they set stop-losses at $49,000 and $2,850 respectively, optimizing their risk-reward profile.",
      "commonMistake": "Failing to adjust position sizes according to market volatility can lead to disproportionate losses.",
      "quickNote": "Effective risk management is critical for maximizing Sharpe Ratio and expectancy in crypto trading.",
      "mentorText": "When trading crypto, think of your capital as a fighter jet's fuel. You must manage it carefully to ensure you can navigate through turbulence without crashing.",
      "mentorAnalogy": "Just as an aerospace engineer meticulously plans fuel consumption for a flight, a trader must strategically manage risk to ensure longevity and success in the market."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Crypto Sharpe Optimization",
    "label": "Crypto Track",
    "body": "<!-- M9.8-crypto-C6 -->\n### Core Scenario: Common Pitfalls in Crypto Sharpe Optimization\nOptimizing the Sharpe Ratio in crypto trading presents unique challenges that can lead to significant miscalculations. This card highlights frequent errors traders make during this process.\n\n* **Ignoring Transaction Costs**: Failing to account for exchange fees and slippage can distort actual returns. For example, if a trader expects a 15% return on a trade but incurs 2% in fees, the effective return drops to 13%, impacting the Sharpe Ratio.\n* **Overlooking Funding Rates**: Many traders neglect the impact of funding rates on leveraged positions. If a trader holds a long position in a perpetual swap with a 0.1% daily funding rate, this can erode profits significantly over time, skewing the Sharpe Ratio.\n* **Misestimating Volatility**: Relying on historical volatility without adjusting for current market conditions can lead to inaccurate risk assessments. For instance, if ETH's historical volatility is 80% but current market conditions suggest a spike to 120%, this miscalculation can lead to poor position sizing.",
    "context": {
      "keyTerms": [
        {
          "term": "Transaction Costs",
          "definition": "The fees incurred when executing trades on an exchange."
        },
        {
          "term": "Funding Rate",
          "definition": "The periodic payment made between long and short positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Recognizing these pitfalls is essential for accurate Sharpe Ratio calculations, which directly influence trading strategies and risk management.",
      "realLifeExample": "A trader executes a series of trades on Binance expecting a 20% return, but after accounting for 3% in fees and a 0.1% daily funding rate over a week, their effective return is only 15%, significantly lowering their Sharpe Ratio.",
      "commonMistake": "Underestimating the cumulative impact of fees and funding rates can lead to inflated expectations of performance.",
      "quickNote": "Awareness of common pitfalls is vital for accurate Sharpe Ratio optimization in crypto trading.",
      "mentorText": "Think of your trading strategy like a race car. If you neglect the costs of fuel and maintenance, you might think you're winning when you're actually losing ground.",
      "mentorAnalogy": "Just as a surgeon must account for all variables in an operation, including potential complications, a trader must consider all costs and risks in their Sharpe Ratio calculations."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Crypto Sharpe Optimization",
    "label": "Crypto Track",
    "body": "<!-- M9.8-crypto-C7 -->\n### Core Scenario: Practical Exercises for Crypto Sharpe Optimization\nEngaging in practical exercises is essential for applying the principles of Sharpe Ratio and expectancy optimization in real-world crypto scenarios. This card provides structured tasks to enhance your understanding.\n\n* **Scenario Analysis**: Given a hypothetical trading scenario with BTC trading at $55,000 and a target return of 18%, calculate the optimal position size using the Kelly Criterion if your win rate is 65% and the average loss is 5%. \n* **Fee Impact Calculation**: Analyze a trading strategy where you execute 10 trades with an average return of 10% per trade. If each trade incurs a 1% fee, calculate the adjusted Sharpe Ratio based on the net returns after fees.\n* **Volatility Assessment**: Assess the volatility of a crypto asset over the last 30 days. If the asset has a standard deviation of 15% and your expected return is 25%, calculate the Sharpe Ratio and determine if it meets your risk criteria.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "A method of analyzing potential outcomes based on varying conditions."
        },
        {
          "term": "Net Returns",
          "definition": "The total returns after accounting for all costs and fees."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce theoretical knowledge, enabling traders to apply concepts effectively in live markets.",
      "realLifeExample": "A trader simulates a series of trades on a demo account, applying the Kelly Criterion to determine position sizes based on varying win rates and loss percentages, ultimately refining their strategy before live execution.",
      "commonMistake": "Neglecting to practice calculations can lead to errors in real trading scenarios.",
      "quickNote": "Practical exercises solidify understanding of Sharpe Ratio and expectancy optimization techniques.",
      "mentorText": "Practice is where theory meets reality. Just as a pilot trains in a simulator before flying, you must apply these concepts in practice to master them.",
      "mentorAnalogy": "Like a chef perfecting a recipe through trial and error, a trader must engage in practical exercises to refine their strategies and optimize performance."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are analyzing a trading strategy with an expected return of 12% and an average loss of 4%. If your win rate is 55%, what is the optimal position size using the Kelly Criterion?",
      "options": [
        {
          "id": "0",
          "text": "15%",
          "isCorrect": true,
          "feedback": "Correct. The Kelly Criterion formula gives you an optimal position size of 15% based on your expected return and win rate."
        },
        {
          "id": "1",
          "text": "10%",
          "isCorrect": false,
          "feedback": "Incorrect. This does not account for the win rate and average loss accurately."
        },
        {
          "id": "2",
          "text": "20%",
          "isCorrect": false,
          "feedback": "Incorrect. This overestimates the position size based on the given parameters."
        },
        {
          "id": "3",
          "text": "5%",
          "isCorrect": false,
          "feedback": "Incorrect. This underestimates the position size based on the expected return."
        }
      ]
    },
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Sharpe and Expectancy Optimization",
    "label": "Crypto Track",
    "body": "<!-- M9.8-crypto-C8 -->\n### Core Scenario: Summary of Crypto Sharpe and Expectancy Optimization\nThis card recaps the essential concepts of optimizing the Sharpe Ratio and expectancy in crypto trading, emphasizing the importance of fees and funding rates.\n\n* **Sharpe Ratio Calculation**: The Sharpe Ratio is calculated as the difference between the asset return and the risk-free rate, divided by the asset's standard deviation. Understanding this formula is crucial for evaluating performance.\n* **Expectancy Framework**: Expectancy is calculated by multiplying the probability of winning by the average win and subtracting the probability of losing multiplied by the average loss. This framework helps in assessing long-term profitability.\n* **Impact of Costs**: Always factor in transaction fees and funding rates when calculating both the Sharpe Ratio and expectancy. For instance, a 1% fee on trades can significantly reduce net returns, affecting overall performance metrics.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Free Rate",
          "definition": "The return on an investment with zero risk, often represented by government bonds."
        },
        {
          "term": "Expectancy",
          "definition": "A measure of the average amount one can expect to win or lose per trade."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these concepts allows traders to make informed decisions that enhance their trading strategies.",
      "realLifeExample": "A trader calculates their Sharpe Ratio for a portfolio of crypto assets, factoring in a 1.5% average transaction fee, resulting in a revised Sharpe Ratio of 1.2 instead of the initial 1.5 without fees.",
      "commonMistake": "Overlooking the impact of transaction costs can lead to an inflated perception of trading performance.",
      "quickNote": "Optimizing Sharpe Ratio and expectancy is essential for sustainable trading success in the crypto market.",
      "mentorText": "Think of your trading performance like a financial report. If you don’t account for all expenses, your profits will look better than they actually are. Always include costs in your calculations.",
      "mentorAnalogy": "Just as an architect must account for all materials and labor costs in a project budget, a trader must factor in all costs to accurately assess their trading performance."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  }
];
