import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Win Rate Analysis in Forex Trading",
    "label": "Forex Track",
    "body": "<!-- M8.8-forex-C1 -->\n### Core Metric: Win Rate Analysis\nWin rate quantifies the percentage of profitable trades in Forex, serving as a critical indicator of strategy effectiveness. This card outlines **how to accurately calculate and interpret win rates across major currency pairs**.\n\n* **Calculation Method**: Win rate is calculated as the number of winning trades divided by the total number of trades executed. For example, if you have 30 winning trades out of 100 total trades, your win rate is 30%.\n* **Contextual Relevance**: Different currency pairs may exhibit varying win rates due to market volatility and liquidity. Analyze win rates in the context of specific pairs like EURUSD or GBPJPY to tailor your strategy.\n* **Benchmarking**: Establish benchmarks based on historical performance data. A win rate of 50% may be acceptable for some strategies, while others may require a higher threshold to be viable.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Win Rate",
          "definition": "The percentage of profitable trades relative to total trades executed."
        }
      ],
      "whyThisMatters": "Understanding win rate allows traders to assess the effectiveness of their strategies and make informed adjustments.",
      "realLifeExample": "A trader executing 200 trades on AUDCAD finds 80 are profitable, resulting in a win rate of 40%.",
      "commonMistake": "Traders often overlook the importance of sample size when evaluating win rates, leading to misleading conclusions.",
      "quickNote": "Win rate is a key performance metric that informs strategy adjustments.",
      "mentorText": "Focus on your win rate as a reflection of your strategy's effectiveness. If you're consistently below 40%, it’s time to reassess your approach.",
      "mentorAnalogy": "Think of win rate like a baseball player’s batting average; it reflects performance over time and guides future training."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Profit Factor in Forex",
    "label": "Forex Track",
    "body": "<!-- M8.8-forex-C2 -->\n### Core Metric: Profit Factor Calculation\nProfit factor measures the ratio of gross profit to gross loss, providing insight into the profitability of Forex trading strategies. This card teaches **how to compute and interpret profit factor for informed decision-making**.\n\n* **Formula Application**: Profit factor is calculated as total profit from winning trades divided by total loss from losing trades. For instance, if total profits are $10,000 and total losses are $5,000, the profit factor is 2.0.\n* **Strategic Implications**: A profit factor greater than 1 indicates a profitable strategy, while a factor below 1 suggests losses. Aim for a profit factor of at least 1.5 for sustainable trading.\n* **Comparative Analysis**: Use profit factor to compare different strategies or currency pairs. A strategy with a higher profit factor may be more robust across varying market conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Profit Factor",
          "definition": "The ratio of gross profit to gross loss, indicating overall trading strategy profitability."
        }
      ],
      "whyThisMatters": "Profit factor helps traders evaluate the effectiveness of their strategies and make data-driven adjustments.",
      "realLifeExample": "A trader on USDJPY records $15,000 in profits and $5,000 in losses, resulting in a profit factor of 3.0, indicating a highly effective strategy.",
      "commonMistake": "Traders often misinterpret a high profit factor without considering the number of trades, leading to overconfidence in under-tested strategies.",
      "quickNote": "A profit factor above 1.5 is generally indicative of a viable trading strategy.",
      "mentorText": "Monitor your profit factor closely. If it dips below 1.5, it’s a signal to reevaluate your trading approach.",
      "mentorAnalogy": "Consider profit factor like a business's return on investment; it tells you how effectively your capital is working for you."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "R-Multiple Calculation in Forex",
    "label": "Forex Track",
    "body": "<!-- M8.8-forex-C3 -->\n### Core Metric: R-Multiple Calculation\nR-multiple quantifies the risk-reward ratio of individual trades, essential for effective risk management in Forex. This card focuses on **calculating R-multiple and its implications for trade management**.\n\n* **R-Multiple Definition**: R-multiple is calculated by dividing the profit or loss of a trade by the risk taken on that trade. For example, if a trade risks $100 and results in a $300 profit, the R-multiple is 3.0.\n* **Risk Management Strategy**: Aim for an R-multiple of at least 2.0 on winning trades to ensure that your profitable trades outweigh losses. This ratio helps in maintaining a sustainable trading approach.\n* **Performance Evaluation**: Regularly analyze your R-multiples across trades to identify patterns. A consistent R-multiple below 1.0 may indicate a need to adjust your entry or exit strategies.\n",
    "context": {
      "keyTerms": [
        {
          "term": "R-Multiple",
          "definition": "The ratio of profit or loss to the risk taken on a trade, indicating risk-reward efficiency."
        }
      ],
      "whyThisMatters": "R-multiple is critical for assessing the risk-reward profile of trades, guiding risk management decisions.",
      "realLifeExample": "A trader on NZDUSD risks $200 on a trade and makes a profit of $600, resulting in an R-multiple of 3.0, indicating a favorable risk-reward scenario.",
      "commonMistake": "Traders often fail to calculate R-multiples consistently, leading to poor risk management and potential losses.",
      "quickNote": "Aim for an R-multiple of 2.0 or higher to ensure effective risk management.",
      "mentorText": "Evaluate each trade's R-multiple to ensure your risk is justified by the potential reward. If you’re consistently below 2.0, reassess your strategy.",
      "mentorAnalogy": "Think of R-multiple like a surgeon’s success rate; it reflects the effectiveness of your decisions under pressure."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Analyzing Forex Trade Samples",
    "label": "Forex Track",
    "body": "<!-- M8.8-forex-C4 -->\n### Core Technique: Analyzing Trade Samples\nAnalyzing trade samples provides insights into win rates and profitability, essential for refining Forex strategies. This card explores **techniques for effective analysis of trade samples**.\n\n* **Sample Size Consideration**: Ensure your trade sample size is statistically significant. A minimum of 30 trades is recommended for reliable analysis, allowing for meaningful win rate and profit factor calculations.\n* **Categorization of Trades**: Break down trade samples by currency pair, time frame, and strategy type. This categorization helps identify which setups yield the highest win rates and profit factors.\n* **Performance Metrics Review**: Regularly review key performance metrics such as win rate, profit factor, and R-multiple across samples. This ongoing analysis informs strategy adjustments and enhances overall performance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Samples",
          "definition": "A collection of executed trades used for performance analysis and strategy evaluation."
        }
      ],
      "whyThisMatters": "Analyzing trade samples allows traders to derive actionable insights, improving strategy effectiveness and profitability.",
      "realLifeExample": "A trader analyzes 50 trades on GBPUSD, categorizing them by strategy and finding a 60% win rate with a profit factor of 2.5, indicating strong performance.",
      "commonMistake": "Traders often analyze insufficient sample sizes, leading to unreliable conclusions about their strategies.",
      "quickNote": "A robust analysis of trade samples is key to refining trading strategies.",
      "mentorText": "Regularly analyze your trade samples to identify strengths and weaknesses. This practice will guide your strategy adjustments effectively.",
      "mentorAnalogy": "Consider analyzing trade samples like a scientist reviewing experimental data; it’s essential for refining hypotheses and improving outcomes."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Expectancy in Forex Trading",
    "label": "Forex Track",
    "body": "<!-- M8.8-forex-C5 -->\n### Core Metric: Expectancy Calculation\nExpectancy quantifies the average amount a trader can expect to win or lose per trade, providing a critical framework for long-term profitability assessment. This card details **how to compute expectancy using historical trade data**.\n\n* **Expectancy Formula**: Calculate expectancy using the formula: Expectancy = (Win Rate x Average Win) - (Loss Rate x Average Loss). For instance, if your win rate is 60%, with an average win of 50 pips and an average loss of 30 pips, expectancy = (0.6 x 50) - (0.4 x 30) = 30 pips.\n* **Historical Data Utilization**: Ensure that the trades used for calculation span a significant sample size, ideally over 100 trades, to mitigate the impact of variance. This enhances the reliability of your expectancy figure.\n* **Performance Review**: Regularly review expectancy after every 50 trades to adjust strategies. If expectancy falls below zero, it indicates a need for immediate strategic reassessment.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average expected profit or loss per trade based on historical performance."
        }
      ],
      "whyThisMatters": "Understanding expectancy allows traders to evaluate the long-term viability of their trading strategies in Forex markets.",
      "realLifeExample": "A trader executing 200 trades on EURUSD, with a win rate of 55%, average win of 40 pips, and average loss of 25 pips, calculates an expectancy of 17.5 pips per trade.",
      "commonMistake": "Traders often neglect to update expectancy calculations as market conditions change, leading to outdated performance assessments.",
      "quickNote": "Expectancy provides a clear metric for assessing potential profitability over time.",
      "mentorText": "You need to calculate your expectancy regularly. If you're not doing this, you're flying blind. A positive expectancy means your strategy is viable; a negative one means it's time to rethink your approach.",
      "mentorAnalogy": "Think of expectancy like a pilot's fuel gauge. Just as a pilot must know how much fuel is left for a safe landing, you must know your expectancy to ensure your trading strategy is sustainable."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Benchmarking Forex Performance Metrics",
    "label": "Forex Track",
    "body": "<!-- M8.8-forex-C6 -->\n### Core Analysis: Performance Benchmarking\nBenchmarking Forex performance metrics against industry standards helps identify strengths and weaknesses in trading strategies. This card outlines **how to effectively compare your metrics with market benchmarks**.\n\n* **Industry Standards**: Familiarize yourself with key performance benchmarks such as a win rate of 50-60%, profit factor above 1.5, and average R-multiple of 1.0. Use these as a baseline for your performance evaluation.\n* **Comparative Analysis**: Create a comparative report that juxtaposes your metrics against these benchmarks. For example, if your win rate is 45% and the benchmark is 55%, this highlights a potential area for improvement.\n* **Strategic Adjustments**: Use the insights gained from benchmarking to inform strategic adjustments. If your profit factor is below 1.5, consider refining your entry and exit strategies to improve risk-reward ratios.",
    "context": {
      "keyTerms": [
        {
          "term": "Benchmarking",
          "definition": "The process of comparing one's trading performance metrics against established industry standards."
        }
      ],
      "whyThisMatters": "Benchmarking provides a framework for continuous improvement and strategic refinement in Forex trading.",
      "realLifeExample": "A trader reviews their performance metrics: a win rate of 48%, profit factor of 1.2, and average R-multiple of 0.8, comparing these to the industry benchmarks to identify areas needing enhancement.",
      "commonMistake": "Traders often fail to benchmark their metrics, leading to complacency and missed opportunities for improvement.",
      "quickNote": "Benchmarking against industry standards is essential for identifying performance gaps.",
      "mentorText": "You must benchmark your performance metrics. If you're not comparing yourself to the best, you won't know where you stand or how to improve.",
      "mentorAnalogy": "Benchmarking is like a race car driver analyzing lap times against the fastest competitors. Without this data, you can't optimize your performance and strategy."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "practice",
    "title": "Practical Forex Metric Exercises",
    "label": "Forex Track",
    "body": "<!-- M8.8-forex-C7 -->\n### Core Task: Metric Calculation Exercises\nEngaging in practical exercises focused on calculating key Forex metrics enhances understanding and application of performance analytics. This card provides **hands-on scenarios for metric calculation**.\n\n* **Scenario Analysis**: Given a set of 100 trades with 60 wins averaging 30 pips and 40 losses averaging 20 pips, calculate the win rate, profit factor, and expectancy. Use the formulas: Win Rate = Wins / Total Trades, Profit Factor = Total Wins / Total Losses, Expectancy = (Win Rate x Average Win) - (Loss Rate x Average Loss).\n* **Data Interpretation**: After calculations, analyze the results. If the win rate is 60%, profit factor is 1.5, and expectancy is 15 pips, discuss what these metrics indicate about the trading strategy's effectiveness.\n* **Peer Review**: Share your calculated metrics with a peer for feedback. Discuss discrepancies and potential improvements based on their analysis.",
    "context": {
      "keyTerms": [
        {
          "term": "Win Rate",
          "definition": "The percentage of winning trades relative to total trades executed."
        },
        {
          "term": "Profit Factor",
          "definition": "The ratio of total profits to total losses in a trading strategy."
        },
        {
          "term": "R-Multiple",
          "definition": "A measure of risk-reward ratio for individual trades."
        }
      ],
      "whyThisMatters": "Practicing metric calculations solidifies understanding and application of performance analytics in Forex trading.",
      "realLifeExample": "In a simulated trading environment, a trader calculates their win rate at 65%, profit factor at 2.0, and R-multiple at 1.5 after executing 150 trades on GBPUSD.",
      "commonMistake": "Failing to accurately track trade outcomes leads to incorrect metric calculations and misinformed strategy adjustments.",
      "quickNote": "Hands-on practice with metric calculations is essential for mastering performance analytics.",
      "mentorText": "You need to practice calculating your metrics. This isn't just about numbers; it's about understanding your performance and making informed decisions.",
      "mentorAnalogy": "Calculating your trading metrics is like a surgeon reviewing their surgical outcomes. Each calculation informs future decisions and improves overall performance."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You executed 120 trades with 72 wins averaging 40 pips and 48 losses averaging 25 pips. What is your profit factor?",
      "options": [
        {
          "id": "0",
          "text": "1.67",
          "isCorrect": true,
          "feedback": "Correct. Profit Factor = Total Wins (72 x 40) / Total Losses (48 x 25) = 2880 / 1200 = 2.4."
        },
        {
          "id": "1",
          "text": "2.0",
          "isCorrect": false,
          "feedback": "Incorrect. Recalculate using the correct formula: Profit Factor = Total Wins / Total Losses."
        },
        {
          "id": "2",
          "text": "1.5",
          "isCorrect": false,
          "feedback": "Incorrect. Ensure you are using the correct averages for wins and losses."
        },
        {
          "id": "3",
          "text": "1.25",
          "isCorrect": false,
          "feedback": "Incorrect. Review the calculation method for profit factor."
        }
      ]
    },
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Metrics",
    "label": "Forex Track",
    "body": "<!-- M8.8-forex-C8 -->\n### Core Insights: Forex Performance Metrics\nAnalyzing Forex performance metrics is vital for evaluating trading strategies and ensuring long-term profitability. This card summarizes **the key insights gained from performance metric analysis**.\n\n* **Key Metrics Overview**: The primary metrics include win rate, profit factor, expectancy, and average R-multiple. Each metric provides unique insights into different aspects of trading performance.\n* **Continuous Improvement**: Regular analysis of these metrics fosters a culture of continuous improvement. Traders should aim for a win rate above 50%, a profit factor above 1.5, and a positive expectancy to ensure sustainable trading success.\n* **Strategic Decision-Making**: Metrics serve as a foundation for strategic decision-making. Use them to refine entry and exit strategies, risk management practices, and overall trading plans.",
    "context": {
      "keyTerms": [
        {
          "term": "Average R-Multiple",
          "definition": "The average risk-reward ratio achieved across trades."
        }
      ],
      "whyThisMatters": "Summarizing key metrics reinforces their importance in evaluating and optimizing trading strategies.",
      "realLifeExample": "A trader reviews their performance metrics: win rate of 58%, profit factor of 1.8, and expectancy of 20 pips, confirming the effectiveness of their trading strategy.",
      "commonMistake": "Traders often overlook the importance of summarizing and reflecting on their performance metrics, leading to stagnation.",
      "quickNote": "Summarizing metrics is essential for reinforcing their role in strategy evaluation.",
      "mentorText": "You must summarize your metrics regularly. This isn't just about numbers; it's about understanding your performance and making adjustments where necessary.",
      "mentorAnalogy": "Summarizing your trading metrics is like a coach reviewing game footage with players. It highlights strengths and weaknesses, guiding future strategies."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  }
];
