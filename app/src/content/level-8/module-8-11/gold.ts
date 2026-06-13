import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Auditing Gold Range-Break Setups",
    "label": "Gold Track",
    "body": "<!-- M8.11-gold-C1 -->\n### Core Scenario: Gold Range-Break Setup Audit\nAuditing Gold range-break setups involves analyzing hit rates and performance metrics to ensure strategy effectiveness. This card details **the auditing process for a sample of 50 trades**.\n\n* **Sample Collection**: Gather 50 trades executed under defined range-break conditions. Ensure trades are taken during high liquidity periods, such as the London or New York sessions, to maintain consistency.\n* **Hit Rate Calculation**: Calculate the hit rate by dividing the number of successful trades by the total trades in the sample. For example, if 30 out of 50 trades were profitable, the hit rate is 60%.\n* **Performance Metrics**: Analyze additional metrics such as average risk-reward ratio and maximum drawdown. This provides a comprehensive view of the strategy's risk profile alongside the hit rate.",
    "context": {
      "keyTerms": [
        {
          "term": "Hit Rate",
          "definition": "The percentage of profitable trades in a given sample."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the effectiveness of a trading strategy."
        }
      ],
      "whyThisMatters": "Understanding the hit rates and performance metrics of range-break setups allows traders to refine their strategies and improve overall profitability.",
      "realLifeExample": "During a recent audit, a trader analyzed 50 Gold range-break trades taken between 10:00 AM and 11:00 AM EST, resulting in a hit rate of 65% with an average risk-reward ratio of 2:1.",
      "commonMistake": "Failing to account for market conditions during the audit can lead to misleading conclusions about strategy effectiveness.",
      "quickNote": "Audit Gold range-break setups using a sample of 50 trades to assess hit rates and performance metrics.",
      "mentorText": "When auditing your Gold range-break setups, focus on gathering a clean sample of trades. Analyze your hit rates and performance metrics to determine if adjustments are necessary.",
      "mentorAnalogy": "Think of this process like a quality control check in manufacturing; you must evaluate a sample to ensure the entire production meets standards."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Evaluating Sweep Setup Outcomes in Gold",
    "label": "Gold Track",
    "body": "<!-- M8.11-gold-C2 -->\n### Core Scenario: Sweep Setup Outcome Evaluation\nEvaluating sweep setups in Gold trading requires a systematic approach to analyze hit rates and compare them with range-break results. This card outlines **the evaluation process for sweep setups**.\n\n* **Data Collection**: Compile results from at least 50 sweep trades executed during significant market events, such as economic releases or geopolitical news. This ensures the data reflects high-impact scenarios.\n* **Comparative Analysis**: Compare the hit rates of sweep setups against those of range-break setups. For instance, if sweep setups yield a 55% hit rate while range-break setups yield 60%, analyze the conditions leading to these outcomes.\n* **Outcome Categorization**: Classify outcomes into categories such as 'profitable', 'break-even', and 'loss'. This categorization aids in understanding the nature of the setups and their effectiveness under varying market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Sweep Setup",
          "definition": "A trading strategy that capitalizes on sudden price movements in Gold."
        },
        {
          "term": "Comparative Analysis",
          "definition": "The process of comparing two or more sets of data to identify differences and similarities."
        }
      ],
      "whyThisMatters": "Evaluating sweep setups against range-break results provides insights into the effectiveness of different strategies under various market conditions.",
      "realLifeExample": "A trader analyzed 50 sweep trades during the release of U.S. Non-Farm Payrolls, achieving a hit rate of 55%, which was lower than the 60% hit rate from their recent range-break audits.",
      "commonMistake": "Neglecting to consider the context of trades can lead to inaccurate evaluations of sweep setup effectiveness.",
      "quickNote": "Evaluate sweep setups by comparing hit rates to range-break results to refine strategy effectiveness.",
      "mentorText": "When analyzing your sweep setups, ensure you have a robust sample size and compare it directly to your range-break results to draw meaningful conclusions.",
      "mentorAnalogy": "This evaluation process is akin to a scientist comparing experimental results; both require rigorous analysis to draw valid conclusions."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Impact of Market Conditions on Gold Setups",
    "label": "Gold Track",
    "body": "<!-- M8.11-gold-C3 -->\n### Core Scenario: Market Conditions and Gold Setups\nMarket conditions significantly influence the performance of Gold trading setups. This card focuses on **how to assess the impact of varying conditions on audit results**.\n\n* **Condition Identification**: Identify key market conditions such as volatility, liquidity, and economic events. For example, high volatility during geopolitical tensions can skew performance metrics.\n* **Performance Segmentation**: Segment audit results based on market conditions. For instance, analyze trades taken during stable conditions versus volatile conditions to identify performance discrepancies.\n* **Adaptive Strategy Development**: Use insights from the analysis to adapt trading strategies. If a strategy underperforms during high volatility, consider adjusting entry and exit criteria to mitigate risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Conditions",
          "definition": "The prevailing economic and market factors that influence trading performance."
        },
        {
          "term": "Performance Segmentation",
          "definition": "The process of dividing performance results based on specific criteria for detailed analysis."
        }
      ],
      "whyThisMatters": "Understanding how market conditions affect strategy performance enables traders to adapt their approaches for improved outcomes.",
      "realLifeExample": "A trader found that their Gold setups had a 70% hit rate during stable market conditions but dropped to 40% during periods of high volatility, prompting a strategy revision.",
      "commonMistake": "Overlooking the influence of market conditions can lead to misguided strategy adjustments based on incomplete data.",
      "quickNote": "Assess the impact of market conditions on Gold setups to refine strategies based on performance data.",
      "mentorText": "When auditing your Gold strategies, always consider the market conditions under which trades were executed. This context is crucial for accurate evaluations.",
      "mentorAnalogy": "Think of this analysis like a weather report for a pilot; understanding conditions is essential for making informed decisions."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Identifying Trends in Gold Strategy Audits",
    "label": "Gold Track",
    "body": "<!-- M8.11-gold-C4 -->\n### Core Scenario: Trend Identification in Gold Audits\nIdentifying trends in the performance of Gold strategies through systematic audits is critical for long-term success. This card outlines **how to systematically analyze historical data for trends**.\n\n* **Historical Data Compilation**: Gather historical performance data from at least 100 trades across various setups. Ensure the data spans different market conditions for comprehensive analysis.\n* **Trend Analysis Techniques**: Utilize statistical methods such as moving averages or regression analysis to identify trends in hit rates and performance metrics over time. For example, a moving average of hit rates can reveal upward or downward trends.\n* **Actionable Insights**: Derive actionable insights from identified trends to inform future trading decisions. If a consistent downward trend in hit rates is observed, it may indicate the need for strategy reassessment.",
    "context": {
      "keyTerms": [
        {
          "term": "Trend Analysis",
          "definition": "The process of analyzing data to identify patterns or trends over time."
        },
        {
          "term": "Historical Data Compilation",
          "definition": "The collection of past performance data for analysis."
        }
      ],
      "whyThisMatters": "Identifying trends in strategy audits allows traders to make informed adjustments and enhance their trading performance over time.",
      "realLifeExample": "A trader analyzed 100 Gold trades over six months, discovering a consistent upward trend in hit rates during specific economic cycles, prompting a focus on those periods for future trades.",
      "commonMistake": "Failing to analyze enough historical data can lead to incorrect conclusions about strategy effectiveness.",
      "quickNote": "Systematically analyze historical data to identify trends in Gold strategy audits for informed trading decisions.",
      "mentorText": "When reviewing your Gold strategy audits, look for patterns in your data. Identifying trends can guide your future trading strategies effectively.",
      "mentorAnalogy": "This process is similar to a historian examining past events; understanding trends helps predict future outcomes."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Sample Size Considerations for Gold Audits",
    "label": "Gold Track",
    "body": "<!-- M8.11-gold-C5 -->\n### Core Scenario: Sample Size Impact on Audit Reliability\nDetermining the appropriate sample size is critical for reliable auditing of Gold trading strategies. This card outlines the implications of different sample sizes on the statistical validity of your results.\n\n* **Minimum Sample Size**: For Gold strategies, a minimum sample size of 20 trades is necessary to begin assessing hit rates. However, smaller samples can lead to skewed results and unreliable conclusions.\n* **Optimal Sample Sizes**: Aim for samples of 50 to 100 trades to achieve a more accurate representation of strategy performance. Larger samples reduce the impact of outliers and provide a clearer picture of strategy efficacy.\n* **Statistical Confidence**: Understand that increasing sample size enhances the confidence level of your results. A sample of 100 trades can yield a confidence interval that is significantly narrower than that of a 20-trade sample, improving decision-making accuracy.",
    "context": {
      "keyTerms": [
        {
          "term": "Sample Size",
          "definition": "The number of trades used to evaluate the performance of a trading strategy."
        },
        {
          "term": "Statistical Validity",
          "definition": "The degree to which results from a sample can be generalized to the larger population."
        }
      ],
      "whyThisMatters": "Accurate sample size selection directly influences the reliability of strategy audits, impacting trading decisions and risk management.",
      "realLifeExample": "Auditing a Gold strategy that executed 50 trades with a hit rate of 60% reveals a more reliable performance metric than a 20-trade sample showing a 70% hit rate, due to the larger data set's reduced variability.",
      "commonMistake": "Traders often rely on small sample sizes, leading to overconfidence in results that may not be statistically significant.",
      "quickNote": "Sample size directly correlates with the reliability of your strategy audit results.",
      "mentorText": "When assessing your Gold strategy, always prioritize sample size. A larger sample provides a clearer picture, allowing you to make informed decisions based on solid data.",
      "mentorAnalogy": "Think of sample size like a flight test for a new aircraft design; a handful of test flights may yield misleading results, while a comprehensive series of tests under varied conditions ensures safety and reliability."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Gold Strategy Auditing",
    "label": "Gold Track",
    "body": "<!-- M8.11-gold-C6 -->\n### Core Scenario: Avoiding Audit Missteps\nTraders frequently encounter pitfalls during the auditing process of Gold strategies that can lead to inaccurate evaluations. This card highlights these common errors and strategies to mitigate them.\n\n* **Confirmation Bias**: Traders may unconsciously favor data that supports their existing beliefs about a strategy. Maintain objectivity by reviewing all data, regardless of personal bias.\n* **Ignoring Market Conditions**: Failing to account for varying market conditions during the sample period can distort results. Always analyze the context in which trades were executed to assess strategy performance accurately.\n* **Overfitting Strategies**: Adjusting strategies to fit past performance data can lead to overfitting, where the strategy performs well historically but fails in live conditions. Ensure that your strategy remains robust across different market scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Bias",
          "definition": "The tendency to interpret information in a way that confirms one's preconceptions."
        },
        {
          "term": "Overfitting",
          "definition": "Creating a model that is too complex and tailored to past data, reducing its effectiveness in future scenarios."
        }
      ],
      "whyThisMatters": "Recognizing and avoiding these pitfalls is essential for achieving accurate and reliable audits of Gold trading strategies.",
      "realLifeExample": "A trader audits a Gold strategy that performed well during a bullish market but fails to recognize that the same strategy incurs significant losses in a bearish environment, leading to misguided confidence.",
      "commonMistake": "Traders often neglect to adjust for market conditions, leading to misleading conclusions about a strategy's effectiveness.",
      "quickNote": "Awareness of common pitfalls enhances the accuracy of your strategy audits.",
      "mentorText": "Stay vigilant against biases and external factors that can skew your audit results. A disciplined approach to data evaluation will yield the most accurate insights.",
      "mentorAnalogy": "Consider a surgeon analyzing patient outcomes; if they only focus on successful surgeries without accounting for complications or varying patient conditions, their conclusions will be flawed."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "practice",
    "title": "Practical Application of Gold Audits",
    "label": "Gold Track",
    "body": "<!-- M8.11-gold-C7 -->\n### Core Scenario: Engaging in Gold Strategy Audits\nThis practical exercise focuses on auditing Gold trading strategies, specifically analyzing range-break and sweep setups over a sample of 50 trades. This hands-on approach reinforces the concepts learned.\n\n* **Data Collection**: Gather performance data from 50 trades executed with range-break and sweep setups. Ensure to note entry and exit points, hit rates, and market conditions during each trade.\n* **Statistical Analysis**: Calculate the hit rate and R-distribution for the collected trades. Assess how these metrics align with your predefined success criteria for Gold strategies.\n* **Performance Review**: Conduct a thorough review of the results, identifying patterns and anomalies. Document insights and potential adjustments to improve future strategy performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Range-Break Setup",
          "definition": "A trading strategy that involves entering a position when the price breaks through a defined range."
        },
        {
          "term": "Sweep Setup",
          "definition": "A strategy that targets quick price movements, often following significant market events."
        }
      ],
      "whyThisMatters": "Engaging in practical audits solidifies understanding of strategy performance metrics and enhances decision-making capabilities.",
      "realLifeExample": "After auditing a sample of 50 trades using a range-break setup, a trader discovers a 65% hit rate, prompting a review of conditions that led to the 35% of unsuccessful trades.",
      "commonMistake": "Failing to document trade conditions can lead to a lack of context in performance evaluations.",
      "quickNote": "Practical audits provide critical insights into strategy performance and areas for improvement.",
      "mentorText": "Dive into your data with a critical eye. Each trade tells a story, and understanding those stories will guide your strategy refinement.",
      "mentorAnalogy": "Think of this audit like a quality control process in manufacturing; each product must be tested against standards to ensure it meets the required specifications before it goes to market."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have audited a Gold strategy with 50 trades and found a hit rate of 70%. What should be your next step?",
      "options": [
        {
          "id": "0",
          "text": "Analyze the conditions of the 15 losing trades to identify patterns.",
          "isCorrect": true,
          "feedback": "Analyzing losing trades provides insights into potential weaknesses in the strategy."
        },
        {
          "id": "1",
          "text": "Immediately increase your position size based on the high hit rate.",
          "isCorrect": false,
          "feedback": "Increasing position size without understanding the context of losses can lead to significant risks."
        },
        {
          "id": "2",
          "text": "Ignore the losing trades since the hit rate is high.",
          "isCorrect": false,
          "feedback": "Ignoring losing trades can prevent you from identifying critical areas for improvement."
        },
        {
          "id": "3",
          "text": "Stop trading this strategy because it has a 70% hit rate.",
          "isCorrect": false,
          "feedback": "A high hit rate does not justify abandoning a strategy without further analysis."
        }
      ]
    },
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Strategy Auditing",
    "label": "Gold Track",
    "body": "<!-- M8.11-gold-C8 -->\n### Core Scenario: Recap of Key Auditing Concepts\nThis summary consolidates the essential concepts learned in the auditing of Gold strategies, emphasizing the importance of hit rates and market conditions.\n\n* **Hit Rate Analysis**: Understanding hit rates is crucial for evaluating the effectiveness of Gold strategies. A hit rate alone does not determine success; context matters.\n* **Market Condition Consideration**: Always factor in the market conditions during the audit period. Strategies that perform well in one environment may falter in another.\n* **Continuous Improvement**: Auditing is an ongoing process. Regularly review and adjust strategies based on audit findings to enhance performance and adapt to changing market dynamics.",
    "context": {
      "keyTerms": [
        {
          "term": "Continuous Improvement",
          "definition": "The ongoing effort to enhance products, services, or processes."
        },
        {
          "term": "Market Dynamics",
          "definition": "The forces that impact the supply and demand of financial instruments."
        }
      ],
      "whyThisMatters": "A solid understanding of these concepts ensures traders can adapt their strategies effectively to maximize performance.",
      "realLifeExample": "A trader reviews their Gold strategy audits quarterly, adjusting based on the hit rates and market conditions observed, resulting in improved performance metrics over time.",
      "commonMistake": "Traders often neglect to revisit their audits, leading to outdated strategies that do not align with current market conditions.",
      "quickNote": "Regular audits are essential for maintaining strategy relevance and performance.",
      "mentorText": "Remember, auditing is not a one-time task. It’s a continuous cycle of evaluation and adaptation that keeps your strategies sharp and effective.",
      "mentorAnalogy": "Consider a chef refining a recipe; each tasting and adjustment leads to a dish that better meets the diners' expectations, just as regular audits refine trading strategies to meet market demands."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  }
];
