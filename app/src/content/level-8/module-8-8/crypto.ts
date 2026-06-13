import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Perpetual Trading Metrics",
    "label": "Crypto Track",
    "body": "<!-- M8.8-crypto-C1 -->\n### Core Metrics: Crypto Perpetual Trading\nCrypto perpetual trading introduces unique performance metrics that differ from traditional trading due to the influence of fees and funding rates. This card outlines **the critical metrics necessary for evaluating performance in this market**.\n\n* **Fee Impact Analysis**: Calculate total trading fees incurred over a sample of trades. For instance, if a trader executes 10 trades with a total fee of 0.1% per trade on a $10,000 position, the total fees would amount to $100.\n* **Funding Rate Consideration**: Incorporate funding rates into performance metrics. If a trader holds a position for 30 days with a funding rate of 0.01% per day, the total cost would be $30 on a $10,000 position.\n* **Net Performance Calculation**: Subtract total fees and funding costs from gross profits to determine net performance. For example, if gross profits are $500, net performance would be $500 - $100 - $30 = $370.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic fee paid between long and short positions in perpetual contracts."
        },
        {
          "term": "Trading Fees",
          "definition": "Costs incurred for executing trades on a crypto exchange."
        }
      ],
      "whyThisMatters": "Understanding these metrics is essential for accurately assessing the profitability of crypto perpetual trades, which can significantly differ from spot trading due to additional costs.",
      "realLifeExample": "A trader executes 15 perpetual trades on BTCUSDT, incurring $150 in fees and $45 in funding costs, leading to a net profit of $805 after gross profits of $1000.",
      "commonMistake": "Failing to account for the cumulative impact of fees and funding rates, which can distort perceived profitability.",
      "quickNote": "Always factor in fees and funding rates to accurately assess crypto trading performance.",
      "mentorText": "When evaluating your crypto trades, always remember that fees and funding rates are not just minor details; they can significantly alter your bottom line. Treat them as essential components of your performance metrics.",
      "mentorAnalogy": "Think of trading like a commercial airline operation; every fee and cost, like fuel and maintenance, must be accounted for to determine the profitability of each flight."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Calculating Win Rate in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.8-crypto-C2 -->\n### Win Rate Calculation: Crypto Trading\nWin rate is a fundamental metric that quantifies the percentage of profitable trades within a given sample. This card details **the specific method for calculating win rate in the context of crypto trading**.\n\n* **Trade Sample Definition**: Define your trade sample clearly. For example, if you analyze 50 trades over a month, ensure all trades are accounted for, including both winners and losers.\n* **Win Count Calculation**: Count the number of winning trades. If out of 50 trades, 30 are profitable, your win count is 30.\n* **Win Rate Formula**: Apply the formula: Win Rate = (Number of Winning Trades / Total Number of Trades) x 100. In this example, Win Rate = (30 / 50) x 100 = 60%.",
    "context": {
      "keyTerms": [
        {
          "term": "Win Rate",
          "definition": "The percentage of trades that result in a profit."
        }
      ],
      "whyThisMatters": "Calculating win rate accurately is crucial for understanding the effectiveness of trading strategies in the volatile crypto market.",
      "realLifeExample": "A trader analyzes 100 trades on ETHUSDT, with 55 winning trades, resulting in a win rate of 55%.",
      "commonMistake": "Overlooking the inclusion of all trades in the sample, leading to skewed win rate calculations.",
      "quickNote": "Calculate win rate by dividing winning trades by total trades and multiplying by 100.",
      "mentorText": "Your win rate is a reflection of your strategy's effectiveness. Ensure you count every trade, not just the wins, to get a true picture of your performance.",
      "mentorAnalogy": "Calculating win rate is like a sports team's win-loss record; every game counts, and only by analyzing all results can you determine the team's true performance."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Profit Factor for Crypto Trades",
    "label": "Crypto Track",
    "body": "<!-- M8.8-crypto-C3 -->\n### Profit Factor: Crypto Trading\nProfit factor is a critical metric that measures the relationship between gross profits and gross losses. This card explains **how to accurately calculate profit factor in crypto trading, considering fees and funding rates**.\n\n* **Gross Profit Calculation**: Sum all profits from winning trades. For instance, if a trader has three winning trades yielding $200, $300, and $500, the gross profit is $1000.\n* **Gross Loss Calculation**: Sum all losses from losing trades. If the same trader has two losing trades of $150 and $250, the gross loss is $400.\n* **Profit Factor Formula**: Use the formula: Profit Factor = Gross Profit / Gross Loss. In this case, Profit Factor = $1000 / $400 = 2.5. Adjust for fees and funding rates to ensure accuracy.",
    "context": {
      "keyTerms": [
        {
          "term": "Profit Factor",
          "definition": "The ratio of gross profits to gross losses."
        }
      ],
      "whyThisMatters": "Profit factor provides insight into the risk-reward profile of a trading strategy, essential for long-term sustainability in crypto markets.",
      "realLifeExample": "A trader achieves gross profits of $1200 and gross losses of $600 on a series of trades, resulting in a profit factor of 2.0 after accounting for $100 in fees.",
      "commonMistake": "Neglecting to include all losses in the profit factor calculation, leading to an inflated perception of trading performance.",
      "quickNote": "Calculate profit factor by dividing total gross profits by total gross losses.",
      "mentorText": "Your profit factor tells you how much you earn for every dollar lost. Don't overlook fees; they can significantly impact this metric.",
      "mentorAnalogy": "Calculating profit factor is akin to an engineer assessing a machine's efficiency; every input and output must be measured to determine overall performance."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "R-Multiple in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.8-crypto-C4 -->\n### R-Multiple Calculation: Crypto Trading\nR-multiple is a measure of risk-reward ratio that quantifies how much profit is made per unit of risk taken. This card focuses on **how to calculate R-multiple for crypto trades, emphasizing the need to account for exchange fees**.\n\n* **Risk Definition**: Determine the amount risked per trade. If a trader risks $100 on a trade, this is the R value for that trade.\n* **Profit Calculation**: Calculate the profit made on the trade. For example, if the trade results in a profit of $300, the R-multiple is calculated as Profit / Risk.\n* **R-Multiple Formula**: Use the formula: R-Multiple = Profit / Risk. In this scenario, R-Multiple = $300 / $100 = 3. Adjust for fees to ensure the R-multiple reflects true performance.",
    "context": {
      "keyTerms": [
        {
          "term": "R-Multiple",
          "definition": "A ratio that measures the profit made per unit of risk taken."
        }
      ],
      "whyThisMatters": "Calculating R-multiple accurately helps traders assess the effectiveness of their risk management strategies in volatile crypto markets.",
      "realLifeExample": "A trader risks $200 on a trade and realizes a profit of $800, resulting in an R-multiple of 4 after accounting for $50 in fees.",
      "commonMistake": "Failing to adjust profits for fees, which can lead to an inaccurate representation of risk-reward ratios.",
      "quickNote": "Calculate R-multiple by dividing profit by risk, ensuring to factor in any fees incurred.",
      "mentorText": "Your R-multiple is a direct measure of your risk management effectiveness. Always factor in fees to get a true sense of your performance.",
      "mentorAnalogy": "Calculating R-multiple is like a surgeon evaluating the success of a procedure; every risk taken must be weighed against the outcome to determine effectiveness."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Expectancy in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.8-crypto-C5 -->\n### Core Metric: Expectancy Calculation\nExpectancy quantifies the average expected outcome of a trade, factoring in the impact of funding rates and fees. This card outlines **how to compute expectancy accurately for crypto trades**.\n\n* **Formula Application**: Expectancy is calculated using the formula: (Win Rate × Average Win) - (Loss Rate × Average Loss). For example, if your win rate is 60%, average win is $200, and average loss is $100, expectancy equals (0.60 × 200) - (0.40 × 100) = $80.\n* **Incorporating Funding Rates**: Adjust your average win/loss calculations by including funding fees. If a long position incurs a funding fee of $10, subtract this from your average win to refine expectancy.\n* **Long-Term Profitability Assessment**: Regularly recalibrate expectancy based on changing market conditions and fee structures to maintain an accurate measure of long-term profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average expected outcome of a trade, factoring in win/loss rates and fees."
        }
      ],
      "whyThisMatters": "Understanding expectancy is crucial for evaluating the long-term viability of trading strategies in the volatile crypto market.",
      "realLifeExample": "A trader executing 50 trades on BTC/USD with a win rate of 55% and average win of $300, while accounting for $15 in funding fees, calculates expectancy to optimize future trades.",
      "commonMistake": "Failing to adjust expectancy calculations for funding fees can lead to overestimating profitability.",
      "quickNote": "Expectancy integrates win/loss rates with funding impacts for a comprehensive profitability outlook.",
      "mentorText": "When calculating expectancy, always remember to factor in every cost associated with your trades. Funding fees can significantly alter your bottom line.",
      "mentorAnalogy": "Think of expectancy like a pilot calculating fuel efficiency for a flight; every variable, including weight and weather, must be considered to ensure a successful journey."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Analyzing Crypto Trade Samples",
    "label": "Crypto Track",
    "body": "<!-- M8.8-crypto-C6 -->\n### Core Technique: Trade Sample Analysis\nAnalyzing trade samples allows traders to extract actionable insights regarding performance metrics, especially in the context of perpetual contracts. This card details **how to systematically evaluate trade samples**.\n\n* **Sample Size Determination**: Ensure a minimum of 30 trades for statistical relevance. This sample size helps mitigate the effects of variance in performance metrics.\n* **Performance Breakdown**: Categorize trades by type (long vs. short) and market conditions (bullish vs. bearish) to identify patterns. For instance, if long trades outperform short trades in a bullish market, adjust your strategy accordingly.\n* **Metric Calculation**: Calculate key metrics such as win rate, average R-multiple, and profit factor for each category. For example, if long trades yield a 70% win rate with an average R-multiple of 2.5, this indicates a favorable trading environment.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Sample",
          "definition": "A collection of trades analyzed to derive performance metrics."
        }
      ],
      "whyThisMatters": "Thorough analysis of trade samples provides critical insights into the effectiveness of trading strategies and market conditions.",
      "realLifeExample": "A trader reviews 40 trades on ETH/USD, discovering that trades executed during high volatility periods yield a 75% win rate, prompting a strategy shift to capitalize on volatility.",
      "commonMistake": "Overlooking the importance of categorizing trades can obscure valuable insights and lead to misinformed strategy adjustments.",
      "quickNote": "Systematic analysis of trade samples reveals performance patterns essential for strategy refinement.",
      "mentorText": "When analyzing your trades, categorize them meticulously. The insights you gain from different market conditions can redefine your approach.",
      "mentorAnalogy": "Consider this process like a surgeon reviewing past operations; each case provides insights that refine future techniques and improve outcomes."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Crypto Metrics",
    "label": "Crypto Track",
    "body": "<!-- M8.8-crypto-C7 -->\n### Core Exercise: Performance Metrics Calculation\nEngage in practical exercises to solidify your understanding of performance metrics in crypto perpetual trading. This card presents **real-world scenarios for metric calculation**.\n\n* **Scenario Analysis**: You executed 25 trades on LTC/USD, with 15 wins averaging $250 and 10 losses averaging $100. Calculate your win rate and profit factor.\n* **Metric Application**: If your total profit from winning trades is $3,750 and total loss from losing trades is $1,000, determine your expectancy and average R-multiple.\n* **Reflection**: After completing the calculations, reflect on how these metrics influence your trading strategy. If your profit factor is below 1.5, consider revising your entry and exit strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Profit Factor",
          "definition": "The ratio of gross profit to gross loss in trading."
        }
      ],
      "whyThisMatters": "Practicing metric calculations enhances your ability to make data-driven decisions in crypto trading.",
      "realLifeExample": "After calculating a profit factor of 2.0 from 30 trades on XRP/USD, a trader decides to increase position sizes based on favorable metrics.",
      "commonMistake": "Rushing through calculations without double-checking can lead to inaccurate assessments of trading performance.",
      "quickNote": "Hands-on exercises reinforce the importance of metrics in evaluating trading strategies.",
      "mentorText": "Take your time with these calculations; accuracy is paramount. Each metric tells a story about your trading performance.",
      "mentorAnalogy": "Think of this exercise like an engineer testing a prototype; precise measurements are critical to understanding performance and making necessary adjustments."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a scenario where you executed 40 trades on BTC/USDT with 24 wins averaging $300 and 16 losses averaging $150, what is your win rate?",
      "options": [
        {
          "id": "0",
          "text": "60%",
          "isCorrect": true,
          "feedback": "Correct. The win rate is calculated as (24 wins / 40 total trades) × 100 = 60%."
        },
        {
          "id": "1",
          "text": "50%",
          "isCorrect": false,
          "feedback": "Incorrect. This does not reflect the actual number of winning trades compared to total trades."
        },
        {
          "id": "2",
          "text": "70%",
          "isCorrect": false,
          "feedback": "Incorrect. This overestimates the number of winning trades."
        },
        {
          "id": "3",
          "text": "80%",
          "isCorrect": false,
          "feedback": "Incorrect. This significantly miscalculates the winning percentage."
        }
      ]
    },
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Trading Metrics",
    "label": "Crypto Track",
    "body": "<!-- M8.8-crypto-C8 -->\n### Core Insights: Crypto Trading Metrics\nEvaluating performance metrics is essential for assessing the effectiveness of trading strategies in the crypto market. This card summarizes **the key insights gained from analyzing trading metrics**.\n\n* **Expectancy Importance**: Expectancy provides a clear view of potential profitability, guiding traders in strategy adjustments based on funding fees and market conditions.\n* **Trade Sample Analysis**: Systematic evaluation of trade samples reveals performance trends that inform future trading decisions, particularly in volatile environments.\n* **Metric Application**: Regularly calculating metrics such as win rate, profit factor, and average R-multiple empowers traders to make informed adjustments to their strategies, enhancing overall performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Average R-Multiple",
          "definition": "The average ratio of profit to risk taken on trades."
        }
      ],
      "whyThisMatters": "Summarizing these metrics reinforces their critical role in developing robust trading strategies and adapting to market changes.",
      "realLifeExample": "A trader consolidates metrics from 100 trades on SOL/USDT, identifying a consistent profit factor above 2.0, leading to increased confidence in their trading approach.",
      "commonMistake": "Neglecting to regularly review and summarize performance metrics can result in stagnation and missed opportunities for improvement.",
      "quickNote": "Regular evaluation of trading metrics is vital for strategic refinement and long-term success.",
      "mentorText": "Always keep your metrics in check. They are your compass in navigating the complexities of the crypto market.",
      "mentorAnalogy": "Think of summarizing your metrics like a captain reviewing a ship's log; it provides essential insights for navigating future voyages."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  }
];
