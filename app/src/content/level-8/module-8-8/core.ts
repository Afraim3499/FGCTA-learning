import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Core Performance Metrics",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C1 -->\n### Core Metrics Overview: Performance Analytics\nUnderstanding core performance metrics is essential for evaluating trading effectiveness. This card introduces **the foundational metrics that will guide your analysis**.\n\n* **Win Rate Definition**: The win rate is calculated as the percentage of winning trades relative to total trades executed. It is a fundamental indicator of strategy effectiveness over time.\n* **Profit Factor Calculation**: Profit factor is the ratio of gross profit to gross loss, providing insight into the profitability of a trading strategy. A profit factor greater than 1 indicates a profitable system.\n* **Expectancy and R-Multiple**: Expectancy measures the average amount you can expect to win or lose per trade, while average R-multiple assesses the average return relative to risk taken. Both metrics are critical for understanding long-term performance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Win Rate",
          "definition": "The percentage of winning trades compared to total trades."
        },
        {
          "term": "Profit Factor",
          "definition": "The ratio of total profit to total loss in trading."
        },
        {
          "term": "Expectancy",
          "definition": "The average expected return per trade."
        },
        {
          "term": "R-Multiple",
          "definition": "The ratio of profit to risk taken on a trade."
        }
      ],
      "whyThisMatters": "These metrics provide a quantitative framework for assessing and improving trading strategies, enabling data-driven decision-making.",
      "realLifeExample": "A trader executes 100 trades, with 55 wins and 45 losses, resulting in a win rate of 55%. The total profit from winning trades is $11,000, while losses total $5,000, yielding a profit factor of 2.2.",
      "commonMistake": "Traders often overlook the importance of analyzing these metrics collectively, focusing instead on individual performance indicators.",
      "quickNote": "Core performance metrics are essential for informed trading strategy evaluation.",
      "mentorText": "You need to measure your performance accurately. Think of these metrics as your trading report card; they tell you where you excel and where you need improvement.",
      "mentorAnalogy": "Consider a pilot reviewing flight data post-journey. Each performance metric is like a flight parameter, crucial for ensuring safe and efficient operations in future flights."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Calculating Win Rate",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C2 -->\n### Win Rate Calculation: Effectiveness Assessment\nThe win rate is a critical metric that quantifies the effectiveness of a trading strategy. This card details **the formula and its application in performance evaluation**.\n\n* **Win Rate Formula**: Calculate win rate using the formula: (Number of Winning Trades / Total Trades) x 100. This provides a percentage that reflects your strategy's success rate.\n* **Data Collection**: Ensure accurate tracking of all trades, including wins and losses. Use a trading journal or software to maintain precise records for better analysis.\n* **Contextual Analysis**: Analyze win rate in conjunction with other metrics such as profit factor and expectancy to gain a comprehensive view of overall performance. A high win rate alone does not guarantee profitability if losses are substantial.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Win Rate Formula",
          "definition": "The calculation method for determining the percentage of winning trades."
        }
      ],
      "whyThisMatters": "Accurate win rate calculation allows traders to assess the effectiveness of their strategies and make necessary adjustments.",
      "realLifeExample": "A trader has executed 120 trades, with 72 being profitable. The win rate is calculated as (72 / 120) x 100 = 60%. This indicates a solid performance but requires further analysis with profit factor.",
      "commonMistake": "Failing to account for all trades, including those that were closed at breakeven, can skew win rate calculations.",
      "quickNote": "Win rate is a straightforward metric that reveals the effectiveness of your trading strategy.",
      "mentorText": "When you calculate your win rate, you’re measuring your success. It’s like a scoreboard that shows how well your strategy is performing over time.",
      "mentorAnalogy": "Think of a sports team analyzing their win-loss record. Each game contributes to their overall performance, just as each trade impacts your win rate."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Understanding Profit Factor",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C3 -->\n### Profit Factor: Evaluating Profitability\nProfit factor is a vital metric for assessing the profitability of a trading strategy. This card outlines **how to calculate and interpret profit factor effectively**.\n\n* **Profit Factor Formula**: Calculate profit factor using the formula: Total Gross Profit / Total Gross Loss. A profit factor greater than 1 indicates a profitable strategy, while less than 1 suggests a net loss.\n* **Risk Management Implications**: A higher profit factor indicates a more favorable risk-reward ratio. Use this metric to evaluate whether your strategy justifies the risks taken.\n* **Performance Benchmarking**: Compare your profit factor against industry benchmarks or historical performance to gauge the effectiveness of your strategy. Consistently low profit factors may necessitate a strategy reevaluation.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Profit Factor Formula",
          "definition": "The calculation method for determining the profitability of a trading strategy."
        }
      ],
      "whyThisMatters": "Understanding profit factor helps traders make informed decisions about strategy adjustments and risk management.",
      "realLifeExample": "A trader generates $15,000 in profits and incurs $5,000 in losses. The profit factor is calculated as $15,000 / $5,000 = 3. This indicates a highly profitable strategy.",
      "commonMistake": "Traders often misinterpret profit factor, assuming a high value guarantees consistent profits without considering the underlying risk.",
      "quickNote": "Profit factor is a key indicator of how effectively your strategy converts risk into profit.",
      "mentorText": "When you assess your profit factor, you’re looking at the big picture of your trading performance. It tells you whether your wins outweigh your losses significantly.",
      "mentorAnalogy": "Consider a business analyzing its revenue versus expenses. A profit factor is akin to the profit margin, indicating how much profit is made for every dollar spent."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Calculating Average R-Multiple",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C4 -->\n### Average R-Multiple: Risk Assessment\nThe average R-multiple is a crucial metric for evaluating trade performance relative to the risk taken. This card explains **how to compute average R-multiple and its significance**.\n\n* **R-Multiple Definition**: R-multiple is defined as the ratio of profit to risk on a trade. Calculate it as (Profit / Risk), where risk is the amount risked on the trade.\n* **Average R-Multiple Calculation**: To find the average R-multiple, sum all R-multiples from individual trades and divide by the number of trades. This provides a clear picture of performance relative to risk.\n* **Performance Insights**: An average R-multiple greater than 1 indicates that, on average, trades are profitable relative to the risk taken. Use this metric to assess whether your risk management aligns with your profitability goals.\n",
    "context": {
      "keyTerms": [
        {
          "term": "R-Multiple",
          "definition": "The ratio of profit to risk taken on a trade."
        },
        {
          "term": "Average R-Multiple",
          "definition": "The mean of all R-multiples calculated across trades."
        }
      ],
      "whyThisMatters": "Calculating average R-multiple allows traders to evaluate the effectiveness of their risk management strategies in relation to profitability.",
      "realLifeExample": "A trader risks $1,000 on a trade and makes $3,000. The R-multiple for that trade is 3. If the trader has 10 trades with an average R-multiple of 2, it indicates a favorable risk-reward profile.",
      "commonMistake": "Traders often neglect to calculate R-multiples for losing trades, leading to an inflated perception of their overall performance.",
      "quickNote": "Average R-multiple is essential for assessing profitability relative to risk taken on trades.",
      "mentorText": "When you calculate your average R-multiple, you’re measuring how effectively you’re turning risk into reward. It’s a critical gauge of your trading strategy’s efficiency.",
      "mentorAnalogy": "Think of a surgeon evaluating the success rate of operations. The average R-multiple is like the success rate of procedures relative to the risks involved, guiding future surgical decisions."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Calculating Expectancy",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C5 -->\n### Core Metric: Expectancy Calculation\nExpectancy is a critical metric that quantifies the average expected return per trade, guiding traders in assessing long-term strategy viability. This card outlines **how to compute expectancy using historical trade data**.\n\n* **Expectancy Formula**: Calculate expectancy using the formula: (Win Rate × Average Win) - (Loss Rate × Average Loss). For example, if your win rate is 60%, average win is $200, and average loss is $100, expectancy = (0.6 × 200) - (0.4 × 100) = $80.\n* **Historical Data Utilization**: Gather at least 30 trades to ensure statistical significance. Analyze the outcomes to derive accurate averages for wins and losses, avoiding skewed results from small sample sizes.\n* **Long-Term Profitability Insight**: A positive expectancy indicates a potentially profitable strategy over time. Regularly reassess expectancy as market conditions change to maintain strategy relevance.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average expected return per trade calculated from win/loss data."
        }
      ],
      "whyThisMatters": "Understanding expectancy allows traders to gauge the effectiveness of their strategies over time, ensuring they remain profitable in the long run.",
      "realLifeExample": "A trader executing 50 trades on EURUSD, with 30 wins averaging $150 and 20 losses averaging $75, would calculate expectancy as (0.6 × 150) - (0.4 × 75) = $45.",
      "commonMistake": "Failing to update expectancy calculations after significant changes in trading strategy or market conditions.",
      "quickNote": "Expectancy provides a clear picture of potential profitability per trade.",
      "mentorText": "When you calculate expectancy, you're not just looking at past trades; you're setting the foundation for future decisions. Always ensure your data is comprehensive.",
      "mentorAnalogy": "Calculating expectancy is like an aerospace engineer assessing the reliability of a new aircraft design based on test flight data. Each flight provides critical insights into future performance."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Analyzing Trade Samples",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C6 -->\n### Core Process: Trade Sample Analysis\nEffective analysis of trade samples is essential for deriving actionable insights that inform strategy adjustments. This card details **how to systematically analyze trade data for performance evaluation**.\n\n* **Sample Size Determination**: Aim for a minimum of 30 trades to ensure statistical reliability. Larger samples reduce the impact of outliers and provide clearer performance trends.\n* **Categorical Breakdown**: Segment trades by criteria such as instrument, time frame, and market conditions. This allows for targeted analysis and identification of strengths and weaknesses in specific areas.\n* **Performance Visualization**: Utilize charts and graphs to visualize metrics like win rate and average R-multiple. Visual representations help in quickly identifying patterns and anomalies in trading performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Sample",
          "definition": "A collection of executed trades used for performance evaluation."
        }
      ],
      "whyThisMatters": "Analyzing trade samples provides critical insights that can lead to improved trading strategies and better risk management.",
      "realLifeExample": "A trader reviews 40 trades on GBPJPY, categorizing them by market volatility. They find that trades executed during high volatility sessions yielded a 70% win rate versus 50% during low volatility.",
      "commonMistake": "Overlooking the importance of categorizing trades, leading to generalized conclusions that do not reflect specific performance nuances.",
      "quickNote": "Thorough analysis of trade samples reveals actionable insights for strategy refinement.",
      "mentorText": "When analyzing your trades, think of it as a forensic investigation. Each trade tells a story that can help you improve your future performance.",
      "mentorAnalogy": "Analyzing trade samples is akin to a surgeon reviewing past surgeries to identify techniques that led to better patient outcomes. Each case provides lessons that refine future practices."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Interpreting Core Metrics",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C7 -->\n### Core Insight: Metric Interpretation\nInterpreting core trading metrics is vital for understanding overall performance and identifying areas for improvement. This card explains **how to derive actionable insights from calculated metrics**.\n\n* **Metric Contextualization**: Place metrics like win rate and profit factor in the context of your trading strategy. A high win rate with a low profit factor may indicate a need for larger wins or better risk management.\n* **Trend Analysis**: Monitor metrics over time to identify trends. For instance, a declining profit factor over several months may signal the need for strategy reassessment or adjustment.\n* **Actionable Adjustments**: Use insights gained from metrics to inform specific changes. If average R-multiple is low, consider refining entry and exit strategies to enhance reward-to-risk ratios.",
    "context": {
      "keyTerms": [
        {
          "term": "Core Metrics",
          "definition": "Key performance indicators that reflect trading effectiveness."
        }
      ],
      "whyThisMatters": "Interpreting metrics accurately allows traders to make informed decisions that enhance performance and profitability.",
      "realLifeExample": "A trader notices their win rate has dropped from 65% to 50% over three months while their average R-multiple remains at 1.5. This prompts a review of entry criteria and market conditions.",
      "commonMistake": "Misinterpreting metrics in isolation without considering the broader context of trading strategy and market conditions.",
      "quickNote": "Core metrics provide a roadmap for performance improvement.",
      "mentorText": "When you look at your metrics, think critically about what they reveal. Don't just celebrate wins; analyze the patterns and adjust accordingly.",
      "mentorAnalogy": "Interpreting metrics is like a pilot analyzing flight data post-journey to enhance future flights. Each metric provides insights that can improve safety and efficiency."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Benchmarking Performance Metrics",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C8 -->\n### Core Strategy: Performance Benchmarking\nBenchmarking performance metrics against industry standards is essential for identifying strengths and weaknesses in your trading approach. This card outlines **how to effectively benchmark your trading performance**.\n\n* **Industry Standard Comparison**: Research and identify relevant benchmarks for metrics such as win rate and profit factor within your trading style. For example, a professional forex trader may aim for a profit factor above 1.5.\n* **Performance Gap Analysis**: Assess the differences between your metrics and industry benchmarks. A significant gap may indicate areas needing improvement, such as risk management or trade execution.\n* **Continuous Improvement Cycle**: Use benchmarking results to create a feedback loop for ongoing strategy refinement. Regularly reassess benchmarks to adapt to changing market conditions and maintain competitive performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Benchmarking",
          "definition": "The process of comparing performance metrics against industry standards."
        }
      ],
      "whyThisMatters": "Benchmarking allows traders to objectively evaluate their performance and implement necessary adjustments to stay competitive.",
      "realLifeExample": "A trader finds their win rate at 55%, below the industry benchmark of 60%. This prompts a review of their trading strategy to identify potential weaknesses in execution.",
      "commonMistake": "Relying solely on personal performance metrics without comparing them to industry standards, leading to complacency.",
      "quickNote": "Benchmarking reveals performance gaps and drives strategic improvements.",
      "mentorText": "Benchmarking isn't just about numbers; it's about understanding where you stand in the market. Use it to fuel your growth and adapt your strategies.",
      "mentorAnalogy": "Benchmarking performance metrics is like a professional athlete comparing their stats against top competitors. It highlights areas for improvement and motivates better performance."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Metric Calculation",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C9 -->\n### Core Scenario: Misinterpretation of Trading Metrics\nMiscalculating or misinterpreting trading metrics can lead to erroneous conclusions about performance. This card identifies **frequent errors in metric calculation and interpretation**.\n\n* **Sample Size Misjudgment**: Using too small a sample size can skew metrics significantly. A win rate calculated from only 10 trades may not reflect true performance; aim for at least 30 trades for reliability.\n* **Ignoring Contextual Factors**: Metrics must be contextualized within market conditions. A high win rate during a trending market may not hold in a ranging market, leading to false confidence.\n* **Overemphasis on Individual Metrics**: Relying solely on one metric, such as profit factor, can obscure a trader's overall effectiveness. A comprehensive analysis should include win rate, average R-multiple, and expectancy for balanced insights.",
    "context": {
      "keyTerms": [
        {
          "term": "Sample Size",
          "definition": "The number of trades used to calculate a performance metric."
        },
        {
          "term": "Contextual Factors",
          "definition": "Market conditions that can influence trading performance."
        },
        {
          "term": "Comprehensive Analysis",
          "definition": "An evaluation that considers multiple performance metrics."
        }
      ],
      "whyThisMatters": "Understanding these pitfalls ensures accurate assessment of trading performance, preventing misguided strategy adjustments.",
      "realLifeExample": "A trader calculates a 70% win rate based on 15 trades during a strong bull market, failing to consider that this rate may drop to 40% in a bear market.",
      "commonMistake": "Assuming that a high win rate guarantees profitability without considering the average loss size.",
      "quickNote": "Accurate metric calculation requires sufficient sample size and contextual awareness.",
      "mentorText": "You must scrutinize your metrics. A win rate of 70% sounds impressive, but if it comes from just 10 trades, you’re setting yourself up for failure when conditions change.",
      "mentorAnalogy": "Think of it like a pilot relying on a single flight's data to determine the safety of an aircraft. Comprehensive analysis across multiple flights is essential for accurate safety assessments."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Synthesis of Performance Metrics",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C10 -->\n### Core Scenario: Integrating Performance Metrics\nSynthesizing various performance metrics provides a holistic view of trading effectiveness. This card outlines **how to combine metrics for strategic insights**.\n\n* **Weighted Performance Overview**: Assign weights to metrics based on their relevance to your trading style. For instance, if you prioritize risk management, give more weight to the average R-multiple over win rate.\n* **Metric Correlation Analysis**: Analyze the relationships between metrics. A high win rate coupled with a low profit factor may indicate that while trades are often successful, they are not sufficiently profitable.\n* **Dynamic Reporting**: Create a dashboard that updates key metrics in real-time. This allows for immediate adjustments to strategy based on current performance trends.",
    "context": {
      "keyTerms": [
        {
          "term": "Weighted Performance Overview",
          "definition": "A method of prioritizing metrics based on their importance to trading strategy."
        },
        {
          "term": "Metric Correlation Analysis",
          "definition": "The study of relationships between different performance metrics."
        },
        {
          "term": "Dynamic Reporting",
          "definition": "Real-time updates of performance metrics for immediate strategic adjustments."
        }
      ],
      "whyThisMatters": "Synthesizing metrics enables traders to make informed decisions that align with their strategic objectives, enhancing overall performance.",
      "realLifeExample": "A trader synthesizes a win rate of 65%, profit factor of 1.5, and average R-multiple of 2.0 into a comprehensive report, revealing that while winning trades are frequent, the average loss is disproportionately high, necessitating a strategy revision.",
      "commonMistake": "Failing to consider the interplay between metrics, leading to a skewed understanding of overall performance.",
      "quickNote": "Integrate multiple metrics for a comprehensive view of trading effectiveness.",
      "mentorText": "You need to look at the bigger picture. A high win rate is great, but if your losses are larger than your wins, you’re not truly profitable. Synthesize your metrics to see the whole landscape.",
      "mentorAnalogy": "Just as an architect combines structural integrity, aesthetics, and functionality in a building design, you must integrate various performance metrics to construct a robust trading strategy."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Case Study on Metric Application",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C11 -->\n### Core Scenario: Real-World Metric Application\nAnalyzing a case study illustrates the practical application of core performance metrics in trading. This card provides **insights from a specific trading scenario**.\n\n* **Case Study Overview**: A trader executed 100 trades over three months, achieving a win rate of 60%, profit factor of 2.0, and an average R-multiple of 1.5. This data was analyzed to assess overall effectiveness.\n* **Performance Insights**: The trader identified that while the win rate was satisfactory, the average loss was significantly affecting profitability. Adjustments were made to risk management strategies, leading to improved metrics.\n* **Outcome Evaluation**: Post-adjustment, the trader’s win rate remained stable, but the profit factor improved to 2.5, demonstrating the impact of strategic changes based on metric analysis.",
    "context": {
      "keyTerms": [
        {
          "term": "Case Study",
          "definition": "An in-depth analysis of a specific trading scenario to derive insights."
        },
        {
          "term": "Performance Insights",
          "definition": "Key findings derived from analyzing trading metrics."
        },
        {
          "term": "Outcome Evaluation",
          "definition": "Assessment of results following strategic adjustments."
        }
      ],
      "whyThisMatters": "Real-world examples provide concrete evidence of how metrics can inform trading strategies and lead to improved performance.",
      "realLifeExample": "A trader's analysis of 100 trades revealed a profit factor of 2.0, prompting a reevaluation of risk management that ultimately raised the profit factor to 2.5 after strategic adjustments.",
      "commonMistake": "Neglecting to analyze past trades and their metrics, resulting in repeated mistakes.",
      "quickNote": "Real-world case studies illustrate the practical impact of performance metrics on trading strategies.",
      "mentorText": "Look at your past trades critically. This case shows that even a solid win rate can mask deeper issues. Use your metrics to refine your approach continually.",
      "mentorAnalogy": "Like a surgeon reviewing past operations to improve techniques, you must analyze your trading metrics to enhance your strategies and outcomes."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Optimizing Trading Metrics",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C12 -->\n### Core Scenario: Enhancing Performance Metrics\nOptimizing trading metrics is essential for improving overall profitability. This card details **strategies for refining your metrics based on historical analysis**.\n\n* **Historical Performance Review**: Regularly review past trades to identify patterns in winning and losing trades. This analysis can reveal necessary adjustments in strategy to optimize metrics.\n* **Adjusting Risk Parameters**: Fine-tune risk parameters based on historical performance. If the average R-multiple is low, consider reducing position sizes or improving entry criteria to enhance potential returns.\n* **Feedback Loop Implementation**: Establish a feedback loop where metrics are continuously monitored and adjusted. This iterative process ensures that trading strategies evolve based on current performance data.",
    "context": {
      "keyTerms": [
        {
          "term": "Historical Performance Review",
          "definition": "An analysis of past trades to identify performance patterns."
        },
        {
          "term": "Risk Parameters",
          "definition": "Settings that dictate how much risk is taken on each trade."
        },
        {
          "term": "Feedback Loop",
          "definition": "A process of continuous monitoring and adjustment of trading strategies based on performance metrics."
        }
      ],
      "whyThisMatters": "Optimizing metrics leads to enhanced trading strategies, ultimately increasing profitability and reducing risk exposure.",
      "realLifeExample": "A trader reviews 200 trades and finds that adjusting risk parameters increased the average R-multiple from 1.2 to 1.8, significantly improving overall profitability.",
      "commonMistake": "Failing to adjust strategies based on historical performance, leading to stagnation in metrics.",
      "quickNote": "Regularly optimize your metrics to adapt to changing market conditions and improve profitability.",
      "mentorText": "You must be proactive in refining your metrics. If your average R-multiple isn’t where it should be, look back at your trades and adjust your strategy accordingly.",
      "mentorAnalogy": "Just as a chef tweaks recipes based on customer feedback to improve dishes, you must refine your trading strategies based on performance metrics to enhance results."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Practical Exercises on Metrics",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C13 -->\n### Core Scenario: Engaging with Performance Metrics\nPractical exercises enhance understanding of core performance metrics by applying them to real trade data. This card focuses on **calculating and interpreting win rate, profit factor, average R-multiple, and expectancy** through hands-on practice.\n\n* **Win Rate Calculation**: Determine the win rate by dividing the number of winning trades by the total number of trades. For example, if a trader executed 50 trades with 30 wins, the win rate is 60% (30/50).\n* **Profit Factor Analysis**: Calculate the profit factor by dividing total profits by total losses. If total profits amount to $5,000 and total losses are $2,000, the profit factor is 2.5 ($5,000/$2,000).\n* **Expectancy Evaluation**: Use the formula Expectancy = (Win Rate * Average Win) - (Loss Rate * Average Loss). If the win rate is 60%, average win is $200, loss rate is 40%, and average loss is $100, expectancy equals $80 (0.6 * 200 - 0.4 * 100).",
    "context": {
      "keyTerms": [
        {
          "term": "Win Rate",
          "definition": "The percentage of winning trades relative to total trades."
        },
        {
          "term": "Profit Factor",
          "definition": "The ratio of total profits to total losses."
        },
        {
          "term": "Expectancy",
          "definition": "The average expected return per trade."
        }
      ],
      "whyThisMatters": "Understanding these metrics allows traders to evaluate the effectiveness of their strategies and make informed adjustments.",
      "realLifeExample": "A trader analyzes their last 100 trades, finding a win rate of 55%, a profit factor of 1.8, and an expectancy of $50, indicating a profitable strategy.",
      "commonMistake": "Failing to account for all trades when calculating metrics, leading to skewed results.",
      "quickNote": "Engaging in practical exercises solidifies understanding of performance metrics.",
      "mentorText": "When you analyze your trades, focus on the numbers. Calculate your win rate and profit factor diligently; they reveal the truth about your strategy's effectiveness.",
      "mentorAnalogy": "Think of this process like a pilot reviewing flight data after each journey. Each metric is a critical reading that informs future flights and ensures safety and efficiency."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "practice",
    "title": "Summary of Core Metrics",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C14 -->\n### Core Scenario: Reinforcing Key Takeaways\nSummarizing core performance metrics is essential for evaluating trading strategies effectively. This card emphasizes **the significance of win rate, profit factor, average R-multiple, and expectancy** in strategy assessment.\n\n* **Win Rate Importance**: A high win rate alone does not guarantee profitability; it must be analyzed alongside profit factor and expectancy. For instance, a 70% win rate with a low profit factor may indicate risk.\n* **Profit Factor Relevance**: A profit factor above 1.0 signifies a profitable strategy, while below 1.0 indicates losses. For example, a profit factor of 3.0 suggests that for every dollar lost, three dollars are made.\n* **Expectancy as a Decision Tool**: Expectancy provides a clear picture of potential profitability per trade. A positive expectancy indicates a favorable long-term outcome, guiding traders in their strategy adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Average R-Multiple",
          "definition": "The average risk-reward ratio of trades."
        },
        {
          "term": "Core Performance Metrics",
          "definition": "Key statistics used to evaluate trading strategies."
        }
      ],
      "whyThisMatters": "Summarizing these metrics reinforces their role in strategy evaluation, ensuring traders make data-driven decisions.",
      "realLifeExample": "A trader reviews their performance metrics, noting a win rate of 65%, a profit factor of 2.0, and an expectancy of $100, confirming the effectiveness of their trading strategy.",
      "commonMistake": "Overlooking the interplay between metrics, such as relying solely on win rate without considering profit factor.",
      "quickNote": "Core metrics provide a comprehensive view of trading strategy effectiveness.",
      "mentorText": "Review your metrics regularly. They are not just numbers; they are insights into your trading performance and areas for improvement.",
      "mentorAnalogy": "Consider this like a chef reviewing their recipes. Each metric is an ingredient that contributes to the overall dish's success or failure."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A trader has a win rate of 75%, a profit factor of 1.5, and an expectancy of $30. What does this indicate about their trading strategy?",
      "options": [
        {
          "id": "0",
          "text": "The strategy is likely profitable in the long run.",
          "isCorrect": true,
          "feedback": "A win rate above 50% combined with a positive expectancy indicates potential profitability."
        },
        {
          "id": "1",
          "text": "The strategy has a high risk of failure.",
          "isCorrect": false,
          "feedback": "A 75% win rate suggests a strong strategy, not a high risk of failure."
        },
        {
          "id": "2",
          "text": "The profit factor suggests losses outweigh gains.",
          "isCorrect": false,
          "feedback": "A profit factor of 1.5 indicates that gains exceed losses."
        },
        {
          "id": "3",
          "text": "Expectancy shows the strategy is losing money overall.",
          "isCorrect": false,
          "feedback": "An expectancy of $30 indicates the strategy is expected to be profitable."
        }
      ]
    },
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "summary",
    "title": "Core Management Review 15 (Module 8.8 - CORE)",
    "label": "Core Track",
    "body": "<!-- M8.8-core-C15 -->\n### Core Scenario: Advanced Application of Metrics\nAdvanced application of core performance metrics is critical for refining trading strategies. This card focuses on **integrating metrics into decision-making processes** for optimal trading outcomes.\n\n* **Comprehensive Metric Review**: Regularly assess all core metrics together to identify trends and anomalies. For example, if a trader notices a declining profit factor while maintaining a high win rate, it may signal the need for strategy adjustments.\n* **Dynamic Expectancy Adjustment**: Continuously update expectancy calculations based on recent performance. If a trader's average win decreases while their win rate remains stable, expectancy will decline, necessitating a review of trade management.\n* **Strategic Risk Management**: Leverage metrics to inform risk management strategies. A trader with a profit factor of 1.2 should consider reducing position sizes to mitigate potential losses while maintaining profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Expectancy",
          "definition": "The ongoing adjustment of expectancy based on recent trade performance."
        },
        {
          "term": "Strategic Risk Management",
          "definition": "The process of using metrics to guide risk-taking decisions."
        }
      ],
      "whyThisMatters": "Advanced application of metrics ensures traders remain adaptive and responsive to market conditions, enhancing overall performance.",
      "realLifeExample": "A trader identifies a drop in profit factor from 2.0 to 1.5 over a month, prompting a reevaluation of their strategy to maintain profitability.",
      "commonMistake": "Neglecting to adjust metrics based on changing market conditions, leading to outdated strategies.",
      "quickNote": "Integrating metrics into decision-making enhances trading strategy effectiveness.",
      "mentorText": "Stay vigilant with your metrics. They are your compass in the trading landscape, guiding you through adjustments and improvements.",
      "mentorAnalogy": "Think of this like an architect adjusting blueprints based on site conditions. Each metric is a critical measurement that informs the final design."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  }
];
