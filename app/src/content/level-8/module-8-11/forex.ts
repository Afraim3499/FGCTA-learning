import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Auditing EURUSD Setup Hits",
    "label": "Forex Track",
    "body": "<!-- M8.11-forex-C1 -->\n### Core Scenario: EURUSD Setup Audit\nAuditing EURUSD setups involves analyzing hit rates over a sample of 50 trades to assess performance metrics. This card details **the structured approach to evaluate the effectiveness of your trading strategy**.\n\n* **Sample Size Determination**: Select a sample of 50 trades to ensure statistical relevance. This size allows for a balanced view of performance without excessive noise from outliers.\n* **Hit Rate Calculation**: Calculate the hit rate as the number of winning trades divided by the total trades in the sample. For example, if 30 out of 50 trades were winners, the hit rate is 60%.\n* **Performance Metrics Review**: Analyze additional metrics such as average win/loss ratio and maximum drawdown. These metrics provide insights into risk management and overall strategy robustness.",
    "context": {
      "keyTerms": [
        {
          "term": "Hit Rate",
          "definition": "The percentage of winning trades in a given sample."
        },
        {
          "term": "Sample Size",
          "definition": "The total number of trades analyzed for performance evaluation."
        }
      ],
      "whyThisMatters": "Accurate auditing of EURUSD setups enables traders to refine strategies and enhance profitability based on empirical data.",
      "realLifeExample": "In a recent audit of 50 EURUSD trades, a trader recorded 30 wins at an average profit of 25 pips, leading to a hit rate of 60% and a favorable risk-reward ratio of 1.5.",
      "commonMistake": "Failing to account for outlier trades can skew the hit rate and misrepresent strategy effectiveness.",
      "quickNote": "A sample of 50 trades provides a reliable basis for assessing EURUSD setup performance.",
      "mentorText": "When auditing your EURUSD setups, focus on the numbers. A 60% hit rate is solid, but look deeper into your average win and loss sizes to understand your risk exposure.",
      "mentorAnalogy": "Think of this process like a quality control engineer assessing a production line. Each batch of 50 units is scrutinized to ensure the final product meets standards."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Evaluating GBPUSD Setup Performance",
    "label": "Forex Track",
    "body": "<!-- M8.11-forex-C2 -->\n### Core Scenario: GBPUSD Performance Evaluation\nEvaluating GBPUSD setups requires a systematic analysis of hit rates and comparative performance against EURUSD. This card outlines **the methodology for a thorough performance review**.\n\n* **Cross-Comparison Method**: Use the same sample size of 50 trades for GBPUSD as used for EURUSD to maintain consistency. This allows for a direct comparison of hit rates and performance metrics.\n* **Statistical Significance Testing**: Apply statistical tests, such as the Chi-square test, to determine if differences in hit rates between GBPUSD and EURUSD are significant. This helps validate the effectiveness of each strategy.\n* **Performance Benchmarking**: Establish benchmarks based on historical data to assess whether GBPUSD setups are outperforming or underperforming relative to EURUSD. This could involve setting a minimum hit rate threshold for GBPUSD to be considered viable.",
    "context": {
      "keyTerms": [
        {
          "term": "Cross-Comparison",
          "definition": "Analyzing two or more datasets to identify performance differences."
        },
        {
          "term": "Statistical Significance",
          "definition": "A measure of whether observed differences are likely due to chance."
        }
      ],
      "whyThisMatters": "Evaluating GBPUSD setups against EURUSD provides insights into which currency pair offers a stronger trading edge based on empirical data.",
      "realLifeExample": "In a recent analysis, GBPUSD yielded a hit rate of 55% over 50 trades, compared to EURUSD's 60%, prompting a deeper investigation into trade execution and strategy adjustments.",
      "commonMistake": "Relying solely on hit rates without considering other performance metrics can lead to misinformed strategy decisions.",
      "quickNote": "Consistent sample sizes allow for effective performance comparisons between GBPUSD and EURUSD.",
      "mentorText": "When you evaluate GBPUSD setups, don’t just look at the hit rate. Compare it with EURUSD and understand why one might be performing better than the other.",
      "mentorAnalogy": "This evaluation is akin to a sports coach analyzing player performance against a rival team. Each player's stats are compared to determine who contributes more effectively to the team's success."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Assessing Slippage Costs in Forex Trades",
    "label": "Forex Track",
    "body": "<!-- M8.11-forex-C3 -->\n### Core Scenario: Slippage Cost Assessment\nSlippage costs can significantly impact trade performance and must be incorporated into the auditing process. This card explains **how to quantify and analyze slippage in your trading strategy**.\n\n* **Slippage Calculation**: Determine slippage by comparing the expected entry price to the actual executed price. For instance, if you intended to enter GBPUSD at 1.3000 but executed at 1.3005, the slippage is 5 pips.\n* **Impact on Profitability**: Assess how slippage affects overall profitability by calculating the adjusted win/loss ratio. If slippage consistently reduces profits, it may necessitate a strategy reevaluation.\n* **Incorporating Slippage in Audits**: Include slippage costs in your performance metrics during audits. For example, if your average profit per trade is 20 pips but slippage averages 3 pips, your effective profit is reduced to 17 pips.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "Adjusted Win/Loss Ratio",
          "definition": "The win/loss ratio recalculated to account for slippage costs."
        }
      ],
      "whyThisMatters": "Understanding slippage costs is essential for accurate performance audits, ensuring that profitability assessments reflect true trading conditions.",
      "realLifeExample": "In a review of 50 trades, a trader noted an average slippage of 4 pips on GBPUSD, which reduced the effective win rate from 58% to 54% when adjusted for slippage.",
      "commonMistake": "Ignoring slippage in performance calculations can lead to an inflated perception of strategy effectiveness.",
      "quickNote": "Incorporate slippage costs into your audits to achieve a realistic view of trade performance.",
      "mentorText": "When assessing your trades, always factor in slippage. If you’re consistently losing 3 pips to slippage, that’s a hit to your bottom line that you can’t ignore.",
      "mentorAnalogy": "Think of slippage like a fuel cost in aviation. Just as pilots must account for fuel consumption when planning a flight, traders must factor in slippage when evaluating trade performance."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Comparative Analysis of EURUSD vs GBPUSD",
    "label": "Forex Track",
    "body": "<!-- M8.11-forex-C4 -->\n### Core Scenario: Comparative Analysis\nConducting a comparative analysis of EURUSD and GBPUSD setups allows traders to identify which pair offers a better statistical edge. This card outlines **the steps for a thorough comparative audit**.\n\n* **Data Compilation**: Gather performance data from both EURUSD and GBPUSD setups over a consistent sample size, such as 100 trades each. This ensures comparability in results.\n* **Statistical Metrics Comparison**: Evaluate key metrics such as hit rates, average win/loss ratios, and maximum drawdowns for both pairs. For example, if EURUSD has a hit rate of 62% and GBPUSD 57%, this indicates a potential edge for EURUSD.\n* **Decision Matrix Development**: Create a decision matrix that weighs the performance metrics against your trading goals. This matrix should help in determining which pair aligns better with your risk tolerance and profit objectives.",
    "context": {
      "keyTerms": [
        {
          "term": "Decision Matrix",
          "definition": "A tool used to evaluate and compare different options based on specific criteria."
        },
        {
          "term": "Statistical Metrics",
          "definition": "Quantifiable measures used to assess performance."
        }
      ],
      "whyThisMatters": "A comparative analysis of EURUSD and GBPUSD setups helps traders make informed decisions about which pair to prioritize based on empirical performance data.",
      "realLifeExample": "After analyzing 100 trades each, EURUSD showed a hit rate of 62% with an average win of 30 pips, while GBPUSD had a hit rate of 57% with an average win of 25 pips, indicating a stronger performance from EURUSD.",
      "commonMistake": "Failing to analyze both pairs with the same metrics can lead to biased conclusions about performance.",
      "quickNote": "A structured comparative analysis reveals which currency pair offers a superior trading opportunity.",
      "mentorText": "When comparing EURUSD and GBPUSD, focus on the numbers. A higher hit rate or better average win can guide your trading decisions effectively.",
      "mentorAnalogy": "This analysis is similar to a financial analyst comparing two investment portfolios. Each portfolio's performance is scrutinized to determine which offers better returns relative to risk."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Understanding Trade Sample Sizes in Forex",
    "label": "Forex Track",
    "body": "<!-- M8.11-forex-C5 -->\n### Core Scenario: Trade Sample Size Determination\nDetermining the appropriate sample size is critical for accurate strategy audits in Forex. This card outlines **how to calculate and select sample sizes for effective analysis**.\n\n* **Sample Size Impact**: A sample size of 20 trades may yield unreliable results due to high variability. In contrast, a sample of 100 trades provides a more stable hit rate, reducing the influence of outliers.\n* **Statistical Significance**: Aim for a minimum of 30 trades to achieve a basic level of statistical significance. This threshold helps ensure that the observed hit rates are not merely coincidental.\n* **Trade Distribution Analysis**: Analyze the distribution of trade outcomes within your sample. A balanced distribution across wins and losses enhances the reliability of your strategy assessment.",
    "context": {
      "keyTerms": [
        {
          "term": "Sample Size",
          "definition": "The number of trades used in an audit to assess strategy performance."
        },
        {
          "term": "Statistical Significance",
          "definition": "The likelihood that a result or relationship is caused by something other than mere random chance."
        }
      ],
      "whyThisMatters": "Accurate sample sizes ensure that strategy audits reflect true performance, minimizing the risk of misinterpretation.",
      "realLifeExample": "Auditing a strategy on EURUSD with a sample of 50 trades reveals a hit rate of 60%, while a sample of 20 trades fluctuates between 45% and 75%, indicating instability.",
      "commonMistake": "Traders often use too small a sample size, leading to misleading conclusions about their strategy's effectiveness.",
      "quickNote": "Choose sample sizes of 30 or more for reliable Forex strategy audits.",
      "mentorText": "When assessing your strategy, always remember that a small sample can lead to skewed results. Aim for at least 30 trades to start seeing a clearer picture.",
      "mentorAnalogy": "Think of sample sizes like fuel in an aircraft; too little fuel can lead to a crash landing, while sufficient fuel ensures a safe journey."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Identifying Patterns in Forex Setup Hits",
    "label": "Forex Track",
    "body": "<!-- M8.11-forex-C6 -->\n### Core Scenario: Pattern Recognition in Hit Rates\nIdentifying patterns in hit rates across various Forex setups is essential for refining trading strategies. This card focuses on **how to systematically analyze hit rate data**.\n\n* **Setup Categorization**: Classify trades into distinct setups (e.g., breakout, reversal). This allows for targeted analysis of performance across different strategies.\n* **Hit Rate Tracking**: Maintain a log of hit rates for each setup over multiple samples. For instance, track the hit rate of breakout setups over 50 trades to identify consistent performance.\n* **Trend Analysis**: Use moving averages to smooth out hit rate fluctuations. A 10-trade moving average can help visualize trends and highlight setups that consistently perform above or below average.",
    "context": {
      "keyTerms": [
        {
          "term": "Setup Categorization",
          "definition": "The process of grouping trades based on specific trading strategies or patterns."
        },
        {
          "term": "Hit Rate",
          "definition": "The percentage of successful trades relative to the total number of trades executed."
        }
      ],
      "whyThisMatters": "Recognizing patterns in hit rates enables traders to refine their strategies and focus on setups with higher probabilities of success.",
      "realLifeExample": "Analyzing 100 trades of GBPUSD reveals that breakout setups yield a 70% hit rate, while reversal setups only achieve 40%, indicating a need for strategy adjustment.",
      "commonMistake": "Traders often overlook the importance of categorizing setups, leading to a lack of clarity in performance analysis.",
      "quickNote": "Categorize setups to effectively track and analyze hit rates for strategic refinement.",
      "mentorText": "You must categorize your trades to see which setups are truly working. Without this, you're flying blind.",
      "mentorAnalogy": "Like a scientist analyzing data, you must categorize your experiments to identify which variables lead to success."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "practice",
    "title": "Practical Forex Strategy Auditing",
    "label": "Forex Track",
    "body": "<!-- M8.11-forex-C7 -->\n### Core Scenario: Engaging in Strategy Audits\nThis practical exercise focuses on auditing Forex strategies using real trade data. Participants will analyze **EURUSD and GBPUSD setups over a sample of 50 trades**.\n\n* **Data Collection**: Gather trade data for EURUSD and GBPUSD, ensuring to note entry and exit points along with outcomes. This data will form the basis of your audit.\n* **Hit Rate Calculation**: For each setup, calculate the hit rate by dividing the number of successful trades by the total number of trades. For example, if EURUSD has 30 wins out of 50 trades, the hit rate is 60%.\n* **R-Distribution Analysis**: Assess the R-distribution of your trades to evaluate risk-reward ratios. Aiming for an average R of 2:1 can indicate a favorable strategy performance.",
    "context": {
      "keyTerms": [
        {
          "term": "R-Distribution",
          "definition": "The distribution of risk-reward ratios across a set of trades."
        },
        {
          "term": "Hit Rate Calculation",
          "definition": "The process of determining the success rate of trades executed."
        }
      ],
      "whyThisMatters": "Engaging in practical audits allows traders to apply theoretical knowledge, enhancing their ability to refine strategies based on concrete data.",
      "realLifeExample": "After auditing 50 trades of GBPUSD, you find a hit rate of 65% and an average R of 1.5:1, prompting a review of trade management practices.",
      "commonMistake": "Failing to accurately record trade outcomes can lead to incorrect hit rate calculations and flawed strategy assessments.",
      "quickNote": "Conduct thorough audits of your trades to refine strategies and improve performance.",
      "mentorText": "Record every trade meticulously. Your data is your compass; without it, you cannot navigate effectively.",
      "mentorAnalogy": "Like a mechanic diagnosing a car issue, you must analyze each component of your trades to identify what needs fixing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have audited 50 trades of EURUSD and found 30 successful trades. What is the hit rate?",
      "options": [
        {
          "id": "0",
          "text": "60%",
          "isCorrect": true,
          "feedback": "Correct. The hit rate is calculated as successful trades divided by total trades: 30/50 = 60%."
        },
        {
          "id": "1",
          "text": "50%",
          "isCorrect": false,
          "feedback": "Incorrect. The hit rate is not 50%; it is calculated as 30 successful trades out of 50."
        },
        {
          "id": "2",
          "text": "70%",
          "isCorrect": false,
          "feedback": "Incorrect. The hit rate is lower than 70%, as only 30 out of 50 trades were successful."
        },
        {
          "id": "3",
          "text": "75%",
          "isCorrect": false,
          "feedback": "Incorrect. The hit rate cannot exceed the number of successful trades; it is 30 out of 50."
        }
      ]
    },
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Strategy Auditing",
    "label": "Forex Track",
    "body": "<!-- M8.11-forex-C8 -->\n### Core Scenario: Recap of Key Auditing Concepts\nThe auditing process for Forex strategies is essential for understanding performance metrics. This card summarizes **the critical aspects of hit rates and slippage costs**.\n\n* **Hit Rate Importance**: A high hit rate indicates a potentially successful strategy, but it must be contextualized with the average R-distribution to assess overall profitability.\n* **Slippage Costs**: Consider slippage as a factor that can significantly impact net performance. An average slippage of 5 pips on a 50-trade sample can erode profits, necessitating adjustments in strategy execution.\n* **Continuous Improvement**: Regular audits help identify weaknesses in strategies, enabling traders to adapt and optimize their approach based on empirical data.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "Continuous Improvement",
          "definition": "The ongoing effort to enhance products, services, or processes."
        }
      ],
      "whyThisMatters": "Understanding hit rates and slippage costs is vital for making informed decisions about strategy adjustments and risk management.",
      "realLifeExample": "A strategy with a 70% hit rate may appear strong, but factoring in 10 pips of slippage per trade can turn a profitable strategy into a losing one when analyzed over 50 trades.",
      "commonMistake": "Traders often neglect to account for slippage, leading to an overestimation of their strategy's effectiveness.",
      "quickNote": "Always factor in slippage costs when evaluating strategy performance.",
      "mentorText": "Remember, a high hit rate is meaningless if slippage eats away your profits. Always calculate net performance.",
      "mentorAnalogy": "Like a chef adjusting recipes for ingredient costs, you must factor in slippage to ensure your trading strategy remains profitable."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  }
];
