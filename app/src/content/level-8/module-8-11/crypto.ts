import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Auditing Crypto Perp Sweep Setups",
    "label": "Crypto Track",
    "body": "<!-- M8.11-crypto-C1 -->\n### Core Scenario: Crypto Perpetual Sweep Setup Audit\nThe auditing process for crypto perpetual sweep setups evaluates hit rates and performance metrics over a sample of 50 trades. This card outlines **the methodology for conducting a thorough audit of these setups**.\n\n* **Sample Size Definition**: Select a sample of 50 trades executed under identical market conditions. Ensure that trades are evenly distributed across different market phases to mitigate bias.\n* **Hit Rate Calculation**: Calculate the hit rate by dividing the number of successful trades by the total trades in the sample. For example, if 30 out of 50 trades were profitable, the hit rate is 60%.\n* **Performance Metrics Analysis**: Assess additional metrics such as average return per trade and maximum drawdown. This provides a comprehensive view of the strategy's effectiveness beyond just the hit rate.",
    "context": {
      "keyTerms": [
        {
          "term": "Hit Rate",
          "definition": "The percentage of trades that are profitable within a given sample."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate the effectiveness of a trading strategy."
        }
      ],
      "whyThisMatters": "Understanding the hit rates and performance metrics of perpetual sweep setups allows traders to refine their strategies and improve overall profitability.",
      "realLifeExample": "Analyzing 50 trades on the BTCUSD perpetual contract, where 30 trades hit profit targets, resulting in a 60% hit rate, with an average return of 2.5% per trade.",
      "commonMistake": "Failing to account for market conditions when selecting trades for the audit can lead to skewed results.",
      "quickNote": "Audit perpetual sweep setups using a sample of 50 trades to assess hit rates and performance metrics.",
      "mentorText": "When auditing your perpetual sweep setups, focus on the sample size and ensure it reflects varied market conditions. This will give you a clearer picture of your strategy's performance.",
      "mentorAnalogy": "Think of this process like a quality control check in manufacturing. Just as you wouldn’t assess a product's quality based on a single unit, you need a robust sample to evaluate your trading strategy."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Evaluating Invalidation Outcomes in Crypto Trades",
    "label": "Crypto Track",
    "body": "<!-- M8.11-crypto-C2 -->\n### Core Scenario: Invalidation Outcome Analysis\nEvaluating the outcomes of sweep invalidation setups is critical for understanding their effectiveness. This card details **how to systematically analyze these outcomes**.\n\n* **Invalidation Criteria Documentation**: Clearly define the criteria for invalidation before entering trades. For example, if a trade is invalidated when the price moves 2% against the entry, document this threshold.\n* **Outcome Classification**: Categorize the results of trades into three groups: successful, invalidated, and neutral. This allows for a clear picture of how often invalidation occurs and its impact on overall strategy.\n* **Hit Rate Adjustment**: Adjust the hit rate calculation to account for invalidated trades. If 20 out of 50 trades were successful but 10 were invalidated, the adjusted hit rate would be 40% (20 successful / 50 total).",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Criteria",
          "definition": "The specific conditions under which a trade is deemed invalid."
        },
        {
          "term": "Outcome Classification",
          "definition": "The categorization of trade results based on predefined criteria."
        }
      ],
      "whyThisMatters": "Evaluating invalidation outcomes helps traders refine their entry criteria and improve overall strategy resilience.",
      "realLifeExample": "In a sample of 50 trades on ETHUSD, 20 trades were successful, 10 were invalidated, and 20 were neutral, leading to an adjusted hit rate of 40%.",
      "commonMistake": "Not documenting invalidation criteria can lead to inconsistent evaluations and misinterpretation of strategy performance.",
      "quickNote": "Systematically evaluate invalidation outcomes to refine entry criteria and adjust hit rates.",
      "mentorText": "Be meticulous in defining your invalidation criteria. This clarity will help you accurately assess how often your setups fail and why.",
      "mentorAnalogy": "Consider this like a surgical procedure where every step is documented. Just as a surgeon needs to know when to stop, you must know when your trade setup is no longer valid."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Impact of Funding Rates on Crypto Strategies",
    "label": "Crypto Track",
    "body": "<!-- M8.11-crypto-C3 -->\n### Core Scenario: Funding Rate Analysis\nFunding rates can significantly influence the performance of crypto trading strategies. This card explores **how to analyze the effects of funding rates on your audit results**.\n\n* **Funding Rate Tracking**: Monitor funding rates for your selected cryptocurrencies over the audit period. For instance, if the funding rate for BTCUSD is 0.01% per 8 hours, factor this into your overall cost of holding positions.\n* **Performance Adjustment**: Adjust your performance metrics to account for funding costs. If a strategy shows a 5% return but incurs 1% in funding fees, the net return is only 4%.\n* **Correlation Analysis**: Conduct a correlation analysis between funding rates and hit rates. For example, if higher funding rates correlate with lower hit rates, this insight can inform future strategy adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The fee paid between long and short positions in perpetual contracts."
        },
        {
          "term": "Correlation Analysis",
          "definition": "A statistical method used to evaluate the relationship between two variables."
        }
      ],
      "whyThisMatters": "Understanding the impact of funding rates allows traders to make more informed decisions regarding trade entries and exits.",
      "realLifeExample": "During a period where the funding rate for ETHUSD was 0.02% per 8 hours, a strategy yielding a 6% return effectively resulted in a net return of 4% after accounting for funding costs.",
      "commonMistake": "Ignoring funding rates can lead to an overestimation of strategy profitability and misinformed trading decisions.",
      "quickNote": "Analyze funding rates to adjust performance metrics and understand their impact on strategy profitability.",
      "mentorText": "Always factor in funding rates when assessing your strategy's performance. They can erode your profits if not accounted for properly.",
      "mentorAnalogy": "Think of funding rates like interest on a loan. Just as you wouldn’t ignore interest payments when calculating your net profit, you must include funding costs in your trading strategy assessments."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Identifying Patterns in Crypto Setup Hits",
    "label": "Crypto Track",
    "body": "<!-- M8.11-crypto-C4 -->\n### Core Scenario: Pattern Recognition in Hit Rates\nIdentifying patterns in hit rates across different crypto setups is essential for refining trading strategies. This card outlines **the process for recognizing and analyzing these patterns**.\n\n* **Data Segmentation**: Segment your trade data by setup type (e.g., breakout, reversal) and analyze hit rates within each category. For instance, if breakout setups yield a 70% hit rate while reversal setups yield 40%, this insight is critical for strategy focus.\n* **Trend Analysis**: Conduct a trend analysis over time to identify if hit rates are improving or declining. For example, if the hit rate for a specific setup type has increased from 50% to 70% over 100 trades, this indicates a potential refinement in strategy.\n* **Feedback Loop Implementation**: Create a feedback loop where insights from hit rate patterns inform future strategy adjustments. If certain setups consistently underperform, consider modifying entry criteria or risk management parameters.",
    "context": {
      "keyTerms": [
        {
          "term": "Data Segmentation",
          "definition": "The process of dividing trade data into specific categories for analysis."
        },
        {
          "term": "Trend Analysis",
          "definition": "A method of analyzing data to identify patterns or trends over time."
        }
      ],
      "whyThisMatters": "Recognizing patterns in hit rates enables traders to optimize their strategies and focus on the most effective setups.",
      "realLifeExample": "After analyzing 100 trades, breakout setups showed a consistent 70% hit rate, while reversal setups only achieved 40%, indicating a need to focus on breakout strategies.",
      "commonMistake": "Overlooking the importance of data segmentation can lead to misinterpretation of overall strategy performance.",
      "quickNote": "Segment trade data to identify patterns in hit rates, refining your trading strategies accordingly.",
      "mentorText": "Pay close attention to the patterns in your hit rates. They provide invaluable insights into which setups are working and which need adjustment.",
      "mentorAnalogy": "This process is akin to a scientist conducting experiments. Just as a scientist analyzes data to draw conclusions, you must dissect your trading results to refine your strategies."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Sample Size Considerations for Crypto Audits",
    "label": "Crypto Track",
    "body": "<!-- M8.11-crypto-C5 -->\n### Core Scenario: Sample Size Impact on Audit Reliability\nDetermining the appropriate sample size is critical for reliable audits of crypto strategies. This card details **how sample sizes influence the statistical validity of your audit results**.\n\n* **Minimum Sample Size**: For meaningful analysis, a minimum sample size of 20 trades is recommended. This threshold allows for initial insights into strategy performance, but results may still be skewed by outliers.\n* **Optimal Sample Size**: Increasing to 50 trades enhances reliability, reducing the margin of error. At this level, the results begin to stabilize, providing a clearer picture of hit rates and R-distribution.\n* **Comprehensive Sample Size**: A sample of 100 trades is ideal for robust audits. This size minimizes the impact of variance and allows for a more accurate assessment of strategy effectiveness across different market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Sample Size",
          "definition": "The number of trades analyzed to evaluate a trading strategy's performance."
        },
        {
          "term": "R-distribution",
          "definition": "The distribution of returns over a specified sample size."
        }
      ],
      "whyThisMatters": "Accurate sample size selection directly affects the validity of your strategy evaluations, influencing decision-making.",
      "realLifeExample": "Auditing a crypto strategy that executed 50 trades on BTCUSDT over a volatile week, revealing a hit rate of 70% with a standard deviation of 5%.",
      "commonMistake": "Traders often rely on too small a sample size, leading to misleading conclusions about strategy effectiveness.",
      "quickNote": "Sample size directly correlates with the reliability of your audit results.",
      "mentorText": "When I assess a strategy, I always ensure I have at least 50 trades in my sample. Anything less can lead to skewed perceptions of performance.",
      "mentorAnalogy": "Think of sample size like a medical trial; a small group may show promising results, but only a larger group can confirm efficacy and safety."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Crypto Strategy Auditing",
    "label": "Crypto Track",
    "body": "<!-- M8.11-crypto-C6 -->\n### Core Scenario: Avoiding Audit Missteps\nTraders frequently encounter pitfalls that compromise the integrity of their strategy audits. This card outlines **key mistakes and strategies to mitigate them**.\n\n* **Ignoring Market Conditions**: Failing to account for varying market conditions during the audit period can lead to inaccurate assessments. Ensure that trades span different volatility regimes to capture a holistic performance view.\n* **Overfitting to Past Data**: Relying too heavily on historical performance without considering future market dynamics can mislead strategy evaluations. Always validate strategies against out-of-sample data.\n* **Neglecting Risk Management Metrics**: Focusing solely on hit rates without analyzing drawdown and risk-reward ratios can provide a skewed view of strategy viability. Incorporate these metrics into your audit for a comprehensive evaluation.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Conditions",
          "definition": "The prevailing economic and market factors affecting asset prices."
        },
        {
          "term": "Overfitting",
          "definition": "Creating a model that is too complex and tailored to past data, reducing its predictive power."
        }
      ],
      "whyThisMatters": "Recognizing and avoiding these pitfalls ensures that your strategy audits yield accurate and actionable insights.",
      "realLifeExample": "A trader audited a strategy based on a single bullish market phase, resulting in a 90% hit rate, but failed to replicate success in a bear market, leading to significant losses.",
      "commonMistake": "Traders often overlook the importance of risk metrics, leading to an incomplete understanding of strategy performance.",
      "quickNote": "Avoiding common pitfalls enhances the accuracy of your strategy audits.",
      "mentorText": "I’ve seen traders get burned by ignoring market conditions. Always assess your strategies across different environments to avoid false confidence.",
      "mentorAnalogy": "Auditing a strategy without considering market conditions is like a pilot flying without checking weather reports; it can lead to disastrous outcomes."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "practice",
    "title": "Practical Application of Crypto Audits",
    "label": "Crypto Track",
    "body": "<!-- M8.11-crypto-C7 -->\n### Core Scenario: Engaging in Crypto Strategy Audits\nThis exercise focuses on applying the auditing principles to evaluate crypto trading strategies. You will analyze **a sample of 50 trades** to assess performance metrics.\n\n* **Select Strategy**: Choose a strategy based on perpetual sweep setups in ETHUSDT. Ensure that the trades span a minimum of one week to capture various market conditions.\n* **Audit Metrics**: Calculate hit rates, average R-multiples, and maximum drawdown over the 50 trades. Document your findings in a structured format for review.\n* **Review and Adjust**: Based on your audit results, identify areas for improvement in the strategy. Consider adjustments to entry and exit criteria to enhance performance metrics.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Sweep",
          "definition": "A trading strategy that capitalizes on rapid price movements in perpetual contracts."
        },
        {
          "term": "R-multiple",
          "definition": "A measure of risk-adjusted return, calculated as the ratio of profit to risk."
        }
      ],
      "whyThisMatters": "Engaging in practical audits solidifies your understanding of strategy evaluation and enhances your decision-making capabilities.",
      "realLifeExample": "You execute 50 trades on ETHUSDT using a perpetual sweep strategy, achieving a hit rate of 68% and an average R-multiple of 2.5.",
      "commonMistake": "Failing to document findings systematically can lead to oversight of critical insights during the audit process.",
      "quickNote": "Practical audits reinforce theoretical knowledge and improve strategy evaluation skills.",
      "mentorText": "When I audit a strategy, I meticulously document every trade and its outcome. This way, I can pinpoint what works and what doesn’t.",
      "mentorAnalogy": "Conducting a strategy audit is akin to a chef tasting each ingredient in a dish; without thorough evaluation, the final product may not meet expectations."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have audited a strategy based on 50 trades in ETHUSDT. The hit rate is 68%, and the average R-multiple is 2.5. What should you do next?",
      "options": [
        {
          "id": "0",
          "text": "Document the findings and consider adjustments to improve performance.",
          "isCorrect": true,
          "feedback": "Documenting findings allows for future reference and adjustments based on performance metrics."
        },
        {
          "id": "1",
          "text": "Continue trading without any changes, as the hit rate is satisfactory.",
          "isCorrect": false,
          "feedback": "Assuming the strategy is perfect without further analysis can lead to missed opportunities for improvement."
        },
        {
          "id": "2",
          "text": "Increase the position size based on the hit rate.",
          "isCorrect": false,
          "feedback": "Position sizing should be based on risk management principles, not solely on hit rates."
        },
        {
          "id": "3",
          "text": "Stop trading the strategy entirely due to perceived risk.",
          "isCorrect": false,
          "feedback": "A hit rate of 68% indicates potential; instead, focus on refining the strategy."
        }
      ]
    },
    "visualKey": "strategy-audit-sampler"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Strategy Auditing",
    "label": "Crypto Track",
    "body": "<!-- M8.11-crypto-C8 -->\n### Core Scenario: Recap of Key Auditing Concepts\nThis card summarizes the essential concepts learned in auditing crypto strategies. It emphasizes **the importance of hit rates and funding impacts**.\n\n* **Hit Rate Analysis**: Understanding the hit rate is vital for evaluating strategy effectiveness. A higher hit rate indicates a potentially successful strategy, but must be contextualized with risk metrics.\n* **Funding Impacts**: Assessing how funding rates affect strategy performance is crucial. Strategies that do not account for funding can lead to unexpected losses during unfavorable conditions.\n* **Continuous Improvement**: Strategy auditing is an iterative process. Regularly revisiting and refining strategies based on audit findings ensures long-term viability and adaptability in changing markets.",
    "context": {
      "keyTerms": [
        {
          "term": "Continuous Improvement",
          "definition": "The ongoing effort to enhance strategies based on performance evaluations."
        },
        {
          "term": "Funding Rates",
          "definition": "The costs associated with holding positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces the critical aspects of strategy auditing, ensuring traders maintain a disciplined approach.",
      "realLifeExample": "A trader revisits their strategy after auditing 100 trades, discovering that adjusting for funding rates improved overall profitability by 15%.",
      "commonMistake": "Traders often neglect to incorporate funding impacts into their audits, leading to incomplete evaluations.",
      "quickNote": "Regular audits and adjustments are key to maintaining strategy effectiveness.",
      "mentorText": "Always remember, auditing is not a one-time task. It's a continuous cycle of evaluation and improvement.",
      "mentorAnalogy": "Think of strategy auditing like a car's maintenance schedule; regular checks and adjustments keep it running smoothly and efficiently."
    },
    "taskData": null,
    "visualKey": "strategy-audit-sampler"
  }
];
