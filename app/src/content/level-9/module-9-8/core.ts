import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding the Sharpe Ratio in Trading",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C1 -->\n### Core Metric: Sharpe Ratio Calculation\nThe Sharpe Ratio quantifies risk-adjusted returns, essential for evaluating trading performance. This card outlines **how to compute the Sharpe Ratio over a sample of 100 trades**.\n\n* **Formula Application**: The Sharpe Ratio is calculated using the formula: (Average Return - Risk-Free Rate) / Standard Deviation of Returns. For example, if your average return over 100 trades is 12% and the risk-free rate is 2%, with a standard deviation of 10%, the Sharpe Ratio would be (12% - 2%) / 10% = 1.0.\n* **Sample Size Importance**: Ensure that the 100 trades are representative of your trading strategy across different market conditions to avoid skewed results. A sample that includes varied volatility and market trends will yield a more reliable Sharpe Ratio.\n* **Performance Benchmarking**: Compare your Sharpe Ratio against industry standards or similar strategies. A Sharpe Ratio above 1.0 indicates acceptable risk-adjusted performance, while above 2.0 suggests excellent returns relative to risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return calculated by subtracting the risk-free rate from the average return and dividing by the standard deviation of returns."
        }
      ],
      "whyThisMatters": "The Sharpe Ratio is pivotal for traders to assess the effectiveness of their strategies against risk, ensuring informed decision-making.",
      "realLifeExample": "For instance, a trader executing 100 trades in the EURUSD pair, achieving an average return of 10% with a standard deviation of 8%, would calculate a Sharpe Ratio of 1.0 when the risk-free rate is 2%.",
      "commonMistake": "Traders often overlook the importance of using a sufficiently large and diverse sample size, leading to misleading Sharpe Ratio calculations.",
      "quickNote": "The Sharpe Ratio provides a standardized measure of return per unit of risk.",
      "mentorText": "When evaluating your trading strategy, always compute the Sharpe Ratio over at least 100 trades to ensure your results are robust. This metric will guide you in understanding how well you're compensated for the risk taken.",
      "mentorAnalogy": "Think of the Sharpe Ratio like a safety record in aviation; a higher ratio indicates a safer flight path with better returns for the risks taken."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Methods to Optimize the Sharpe Ratio",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C2 -->\n### Optimization Techniques: Enhancing the Sharpe Ratio\nImproving the Sharpe Ratio involves strategic adjustments to your trading approach. This card details **specific methods to optimize the Sharpe Ratio through diversification and risk management**.\n\n* **Diversification Strategy**: Spread capital across multiple instruments or asset classes to reduce overall portfolio risk. For example, combining trades in both EURUSD and gold can balance volatility, potentially increasing the Sharpe Ratio.\n* **Risk Management Practices**: Implement strict stop-loss orders and position sizing rules to limit losses. For instance, if your maximum loss per trade is capped at 1% of your capital, this disciplined approach can help maintain a favorable risk-return profile.\n* **Performance Review Cycles**: Regularly analyze your trades and adjust strategies based on performance metrics. Conducting a quarterly review of your Sharpe Ratio can reveal trends and areas for improvement, ensuring ongoing optimization.",
    "context": {
      "keyTerms": [
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various instruments to reduce risk."
        },
        {
          "term": "Risk Management",
          "definition": "Strategies employed to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Optimizing the Sharpe Ratio enhances the risk-return profile of trading strategies, leading to more sustainable profitability.",
      "realLifeExample": "A trader with a portfolio of 100 trades in various forex pairs and commodities, achieving a Sharpe Ratio of 1.5, could further optimize by introducing equities, potentially raising the ratio to 1.8 through reduced volatility.",
      "commonMistake": "Failing to diversify can lead to concentrated risk, negatively impacting the Sharpe Ratio and overall performance.",
      "quickNote": "Diversification and disciplined risk management are key to enhancing the Sharpe Ratio.",
      "mentorText": "To optimize your Sharpe Ratio, focus on diversifying your trades and implementing strict risk management. This will help you maintain a favorable risk-return balance.",
      "mentorAnalogy": "Optimizing your Sharpe Ratio is like a chef balancing flavors in a dish; too much of one ingredient can overpower the others, just as concentrated risk can diminish your trading performance."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Calculating Trading Expectancy",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C3 -->\n### Expectancy Formula: Assessing Profitability\nCalculating trading expectancy provides insight into the average outcome of trades. This card focuses on **the formula and application of expectancy over a sample of 100 trades**.\n\n* **Expectancy Calculation**: Use the formula: Expectancy = (Win Rate * Average Win) - (Loss Rate * Average Loss). For example, if a trader has a 60% win rate with an average win of $200 and an average loss of $100, the expectancy would be (0.6 * 200) - (0.4 * 100) = $80.\n* **Sample Size Relevance**: Ensure that the 100 trades reflect a realistic trading environment. A sample skewed towards high volatility or low liquidity can distort expectancy calculations.\n* **Profitability Assessment**: A positive expectancy indicates a potentially profitable strategy. For instance, an expectancy of $80 means that, on average, each trade contributes positively to overall profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average expected outcome of a trading strategy, calculated using win rate and average win/loss."
        }
      ],
      "whyThisMatters": "Understanding expectancy allows traders to evaluate the long-term viability of their strategies, informing risk management and position sizing.",
      "realLifeExample": "A trader executing 100 trades in the S&P 500 with a 55% win rate, average win of $150, and average loss of $75 would calculate an expectancy of (0.55 * 150) - (0.45 * 75) = $37.50 per trade.",
      "commonMistake": "Traders often miscalculate expectancy by not accurately tracking win/loss ratios or average trade outcomes.",
      "quickNote": "Expectancy quantifies the average profit or loss expected per trade.",
      "mentorText": "To gauge the effectiveness of your trading strategy, calculate your expectancy. This will help you understand how much you can expect to gain or lose on average per trade.",
      "mentorAnalogy": "Calculating expectancy is like a financial analyst evaluating a company's future earnings; it provides a clear picture of potential profitability based on historical data."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Sharpe Ratio vs. Variance in Trade Samples",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C4 -->\n### Analyzing Variance: Impact on Sharpe Ratio\nUnderstanding the relationship between the Sharpe Ratio and trade variance is crucial for risk assessment. This card explores **how variance affects the Sharpe Ratio over 100 trades**.\n\n* **Variance Definition**: Variance measures the dispersion of returns from the average. A higher variance indicates greater risk, which can lower the Sharpe Ratio if returns do not compensate adequately for that risk.\n* **Sharpe Ratio Sensitivity**: A Sharpe Ratio can decline if the variance of returns increases without a corresponding increase in average returns. For example, if your average return remains at 10% but variance rises significantly, the Sharpe Ratio will decrease, indicating worsening risk-adjusted performance.\n* **Risk Assessment Techniques**: Regularly monitor the variance of your trading returns. If variance spikes, reassess your strategy to ensure that returns justify the increased risk, thereby maintaining a favorable Sharpe Ratio.",
    "context": {
      "keyTerms": [
        {
          "term": "Variance",
          "definition": "A statistical measure of the dispersion of returns, indicating the level of risk in a trading strategy."
        }
      ],
      "whyThisMatters": "Understanding variance is essential for traders to evaluate the risk profile of their strategies and make informed adjustments.",
      "realLifeExample": "A trader with a Sharpe Ratio of 1.2 and a variance of 0.04 may see their ratio drop to 0.8 if the variance increases to 0.09 without an increase in average returns, signaling a need for strategy reassessment.",
      "commonMistake": "Traders often neglect to factor in variance when evaluating the Sharpe Ratio, leading to an incomplete risk assessment.",
      "quickNote": "Variance directly impacts the Sharpe Ratio, influencing risk assessment and strategy effectiveness.",
      "mentorText": "Keep a close eye on the variance of your returns. If you notice an increase without improved returns, it’s time to reevaluate your trading strategy to ensure you’re not taking on unnecessary risk.",
      "mentorAnalogy": "Evaluating variance in trading is akin to a pilot assessing turbulence; increased turbulence requires adjustments to maintain a safe and smooth flight path."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Assessing Risk-Adjusted Returns",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C5 -->\n### Core Scenario: Evaluating Sharpe Ratio for Long-Term Success\nThe Sharpe Ratio quantifies risk-adjusted returns, essential for understanding performance across a significant number of trades. This card focuses on **how to calculate and interpret the Sharpe Ratio over a sample of 100 trades**.\n\n* **Calculation Methodology**: The Sharpe Ratio is calculated by subtracting the risk-free rate from the average return of the portfolio and dividing by the standard deviation of the returns. For example, if your portfolio returns 12% with a risk-free rate of 2% and a standard deviation of 8%, the Sharpe Ratio is (12% - 2%) / 8% = 1.25.\n* **Interpretation of Results**: A Sharpe Ratio greater than 1 indicates a favorable risk-return trade-off. Ratios between 0.5 and 1 suggest moderate performance, while ratios below 0.5 indicate poor risk-adjusted returns.\n* **Long-Term Implications**: Consistently high Sharpe Ratios across multiple samples (e.g., 100 trades) suggest a robust trading strategy. A trader should aim for a Sharpe Ratio of at least 1.5 for sustainable long-term success.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return calculated by dividing excess return by standard deviation."
        }
      ],
      "whyThisMatters": "Evaluating risk-adjusted returns is crucial for assessing the viability of a trading strategy over time, particularly across a significant number of trades.",
      "realLifeExample": "A trader analyzes a 100-trade sample of SPY options, yielding an average return of 15% with a standard deviation of 10%. The calculated Sharpe Ratio is 1.5, indicating strong risk-adjusted performance.",
      "commonMistake": "Traders often misinterpret a high Sharpe Ratio as a guarantee of future performance without considering market conditions.",
      "quickNote": "A Sharpe Ratio above 1 indicates favorable risk-adjusted returns.",
      "mentorText": "When assessing your trading performance, focus on the Sharpe Ratio. If your ratio is consistently above 1.5 across 100 trades, you’re on the right track.",
      "mentorAnalogy": "Think of the Sharpe Ratio like a fuel efficiency rating for a car; it tells you how far you can travel (returns) for every gallon of fuel (risk) consumed."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Common Traps in Sharpe Ratio Optimization",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C6 -->\n### Core Scenario: Identifying Pitfalls in Sharpe Ratio Analysis\nOptimizing the Sharpe Ratio requires careful consideration to avoid common traps that can distort results. This card addresses **how to recognize and mitigate pitfalls during Sharpe Ratio optimization**.\n\n* **Overfitting Risks**: Tailoring your strategy too closely to historical data can lead to overfitting, where the Sharpe Ratio appears artificially high. For instance, adjusting parameters based on a 100-trade sample may yield a Sharpe Ratio of 2.0, but this could collapse under live conditions.\n* **Misinterpretation of Variability**: A high Sharpe Ratio derived from a small sample may not be reliable. For example, a trader with a Sharpe Ratio of 1.8 based on 20 trades may face a drastically different outcome when expanding to 100 trades.\n* **Ignoring Market Conditions**: The Sharpe Ratio does not account for changing market dynamics. A strategy that performed well during a bullish market may not retain its Sharpe Ratio in a bearish environment, necessitating ongoing evaluation.",
    "context": {
      "keyTerms": [
        {
          "term": "Overfitting",
          "definition": "The phenomenon where a model is too complex and captures noise rather than the underlying trend."
        }
      ],
      "whyThisMatters": "Understanding these common traps is essential for maintaining the integrity of your Sharpe Ratio analysis and ensuring reliable performance assessments.",
      "realLifeExample": "A trader optimizes their strategy for a 100-trade sample of AAPL, achieving a Sharpe Ratio of 2.5. However, when tested on a new 100-trade sample, the ratio drops to 0.8, revealing overfitting.",
      "commonMistake": "Traders often assume that a high Sharpe Ratio guarantees future success without considering the sample size and market conditions.",
      "quickNote": "Avoid overfitting and misinterpretation to maintain the integrity of your Sharpe Ratio analysis.",
      "mentorText": "Be wary of overfitting. If your Sharpe Ratio looks too good to be true, it probably is. Always validate with new data.",
      "mentorAnalogy": "Optimizing the Sharpe Ratio is like tuning a musical instrument; too much adjustment can lead to discord rather than harmony."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Strategies for Expectancy Optimization",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C7 -->\n### Core Scenario: Enhancing Trading Expectancy\nOptimizing expectancy is vital for long-term profitability in trading. This card explores **strategies to refine expectancy based on a sample of 100 trades**.\n\n* **Expectancy Calculation**: Expectancy is calculated as (Probability of Win * Average Win) - (Probability of Loss * Average Loss). For instance, if a trader has a 60% win rate with an average win of $200 and an average loss of $100, the expectancy is (0.6 * 200) - (0.4 * 100) = $80.\n* **Adjusting Trade Parameters**: Experiment with varying position sizes and stop-loss levels to enhance expectancy. For example, reducing the average loss by tightening stop-loss orders can significantly improve overall expectancy.\n* **Reviewing Trade Samples**: Regularly analyze trade samples to identify patterns. If a trader notices that trades executed during specific market conditions yield higher expectancy, they should adjust their strategy accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average amount a trader can expect to win or lose per trade."
        }
      ],
      "whyThisMatters": "Optimizing expectancy is crucial for ensuring that trading strategies remain profitable over time, especially when scaling up trade volumes.",
      "realLifeExample": "A trader evaluates a 100-trade sample of BTC/USD, finding a win rate of 55% with an average win of $300 and an average loss of $150, resulting in an expectancy of $45 per trade.",
      "commonMistake": "Traders often neglect to adjust their strategy based on expectancy analysis, leading to stagnation in profitability.",
      "quickNote": "Expectancy is a critical measure of long-term profitability in trading.",
      "mentorText": "Focus on your expectancy. If it’s positive, you’re on the right path; if not, it’s time to reassess your strategy.",
      "mentorAnalogy": "Optimizing expectancy is like fine-tuning an engine; small adjustments can lead to significant improvements in performance."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Practical Application of Sharpe Ratio and Expectancy",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C8 -->\n### Core Scenario: Applying Sharpe Ratio and Expectancy in Real Scenarios\nApplying the concepts of Sharpe Ratio and expectancy is essential for informed trading decisions. This card emphasizes **practical exercises to implement these metrics using a 100-trade sample**.\n\n* **Simulated Trading Sessions**: Conduct simulated trading sessions where you apply your Sharpe Ratio and expectancy calculations to real-time market conditions. For example, trade a 100-sample of EURUSD and calculate the Sharpe Ratio and expectancy after each session.\n* **Performance Review Meetings**: Schedule regular performance reviews to analyze the Sharpe Ratio and expectancy of your trades. Use these meetings to adjust strategies based on findings, such as increasing the size of winning trades or refining entry points.\n* **Real-Time Adjustments**: Implement a feedback loop where you adjust your trading strategy in real-time based on the calculated Sharpe Ratio and expectancy. For instance, if your expectancy drops below a certain threshold, reevaluate your trade criteria immediately.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a controlled environment without real financial risk."
        }
      ],
      "whyThisMatters": "Practical application of these metrics ensures that traders can adapt their strategies to maintain profitability in changing market conditions.",
      "realLifeExample": "During a simulated trading session with a 100-trade sample of NASDAQ stocks, a trader calculates a Sharpe Ratio of 1.4 and an expectancy of $50, leading to adjustments in their risk management strategy.",
      "commonMistake": "Traders often fail to apply theoretical metrics in practice, leading to a disconnect between analysis and execution.",
      "quickNote": "Regularly apply Sharpe Ratio and expectancy metrics to enhance trading performance.",
      "mentorText": "Don’t just calculate metrics; apply them in your trading. Adjust your strategy based on what the numbers tell you.",
      "mentorAnalogy": "Applying these metrics is like a pilot using instruments to navigate; they provide critical information to adjust the course effectively."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Summary of Sharpe and Expectancy Optimization",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C9 -->\n### Core Overview: Sharpe Ratio and Expectancy Optimization\nThe Sharpe Ratio quantifies the risk-adjusted return of a trading strategy, while expectancy measures the average return per trade. This card emphasizes the necessity of these metrics when evaluating strategies across a 100-trade sample.\n\n* **Sharpe Ratio Calculation**: The formula is (Average Return - Risk-Free Rate) / Standard Deviation of Returns. Ensure to use a consistent risk-free rate, such as the yield on a 10-year Treasury bond, to maintain accuracy.\n* **Expectancy Formula**: Expectancy = (Probability of Win * Average Win) - (Probability of Loss * Average Loss). This provides a clear metric for assessing the profitability of a trading strategy over time.\n* **Sample Size Importance**: A minimum of 100 trades is recommended for statistical significance. This sample size helps mitigate the impact of outliers and provides a more reliable evaluation of performance metrics.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return calculated by dividing the excess return of an investment by its standard deviation."
        },
        {
          "term": "Expectancy",
          "definition": "The average expected return per trade, factoring in win/loss probabilities and average trade outcomes."
        }
      ],
      "whyThisMatters": "Understanding these metrics allows traders to objectively evaluate the effectiveness of their strategies and make informed adjustments.",
      "realLifeExample": "A trader analyzes a strategy with a Sharpe Ratio of 1.5 and an expectancy of $0.50 per trade over 100 trades, confirming that the strategy is both profitable and efficient.",
      "commonMistake": "Failing to account for the risk-free rate when calculating the Sharpe Ratio, which can lead to misleading assessments of performance.",
      "quickNote": "Sharpe Ratio and Expectancy are essential for evaluating trading strategies over a substantial sample size.",
      "mentorText": "When assessing your trading strategies, focus on the Sharpe Ratio and Expectancy. These metrics tell you not just how much you're making, but how much risk you're taking to achieve those returns.",
      "mentorAnalogy": "Think of the Sharpe Ratio as the fuel efficiency of a vehicle; it tells you how far you can go (returns) for each gallon of fuel (risk). Expectancy is akin to the average distance you can expect to travel per trip, factoring in all your journeys."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Core Certification Portfolio 10",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C10 -->\n### Advanced Application: Portfolio 10\nThis card delves into the specific application of Sharpe and Expectancy Optimization for Core Certification Portfolio 10, focusing on performance evaluation and adjustments.\n\n* **Portfolio Performance Review**: Analyze the Sharpe Ratio of Portfolio 10, which should ideally exceed 1.0 for a robust strategy. A ratio below this threshold indicates a need for strategy reassessment or risk management adjustments.\n* **Expectancy Analysis**: Calculate the expectancy by evaluating the win/loss ratio and average trade outcomes. For instance, if Portfolio 10 has a win rate of 60% with an average win of $200 and an average loss of $100, the expectancy would be (0.6 * 200) - (0.4 * 100) = $80.\n* **Optimization Techniques**: Implement strategies to enhance both metrics, such as adjusting position sizes or refining entry/exit criteria based on historical performance data.",
    "context": {
      "keyTerms": [
        {
          "term": "Portfolio Performance Review",
          "definition": "An evaluation of a trading portfolio's returns and risks, often using metrics like Sharpe Ratio."
        },
        {
          "term": "Optimization Techniques",
          "definition": "Methods employed to improve trading strategies based on performance metrics."
        }
      ],
      "whyThisMatters": "Applying these optimization techniques ensures that Portfolio 10 remains competitive and aligned with market conditions.",
      "realLifeExample": "After reviewing Portfolio 10, a trader discovers a Sharpe Ratio of 1.2 and an expectancy of $80, prompting a strategy refinement to increase the win rate.",
      "commonMistake": "Neglecting to regularly update performance metrics, leading to outdated strategies that may no longer be effective.",
      "quickNote": "Regularly assess and optimize Portfolio 10 using Sharpe and Expectancy metrics to maintain performance.",
      "mentorText": "When you evaluate Portfolio 10, focus on both the Sharpe Ratio and Expectancy. If either metric is lacking, it's time to make adjustments.",
      "mentorAnalogy": "Consider optimizing your portfolio like tuning an engine; small adjustments can lead to significant improvements in performance and efficiency."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Core Certification Portfolio 11",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C11 -->\n### Advanced Application: Portfolio 11\nThis card focuses on the advanced application of Sharpe and Expectancy Optimization for Core Certification Portfolio 11, emphasizing continuous improvement.\n\n* **Performance Benchmarking**: Establish benchmarks for the Sharpe Ratio and expectancy based on historical data from similar portfolios. For instance, if the average Sharpe Ratio in your sector is 1.5, aim to meet or exceed this benchmark.\n* **Risk Assessment**: Conduct a thorough risk assessment to identify any potential weaknesses in Portfolio 11. If the Sharpe Ratio is 0.8, analyze the underlying trades to determine if excessive risk is being taken.\n* **Iterative Refinement**: Use an iterative approach to refine the strategy. After implementing changes, reassess the Sharpe Ratio and expectancy after every 50 trades to ensure continuous alignment with performance goals.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Benchmarking",
          "definition": "The process of comparing a portfolio's performance metrics against industry standards."
        },
        {
          "term": "Iterative Refinement",
          "definition": "A continuous improvement process where strategies are regularly assessed and adjusted."
        }
      ],
      "whyThisMatters": "Benchmarking and iterative refinement are critical for maintaining a competitive edge in trading performance.",
      "realLifeExample": "A trader benchmarks Portfolio 11 against industry standards and discovers a Sharpe Ratio of 0.9, prompting a series of adjustments that ultimately raise it to 1.3 over the next 100 trades.",
      "commonMistake": "Failing to benchmark against industry standards, which can result in complacency and stagnation in performance.",
      "quickNote": "Benchmark and refine Portfolio 11 regularly to ensure it meets or exceeds industry performance standards.",
      "mentorText": "Always compare your Portfolio 11 against the best in the industry. If you're falling short, don't hesitate to make the necessary adjustments.",
      "mentorAnalogy": "Think of benchmarking your portfolio like a sports team analyzing game footage; identifying weaknesses and making adjustments is essential for improvement."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Core Certification Portfolio 12",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C12 -->\n### Advanced Application: Portfolio 12\nThis card examines the application of Sharpe and Expectancy Optimization for Core Certification Portfolio 12, focusing on strategic adjustments based on performance metrics.\n\n* **Sharpe Ratio Targeting**: Set specific targets for the Sharpe Ratio based on historical performance. If Portfolio 12 currently has a Sharpe Ratio of 1.1, aim to increase it to 1.5 by refining entry and exit strategies.\n* **Expectancy Improvement**: Analyze the expectancy to identify areas for enhancement. For example, if the expectancy is $50 per trade, investigate ways to increase the average win or decrease the average loss to improve this metric.\n* **Performance Review Cycle**: Implement a structured performance review cycle every 25 trades to evaluate the effectiveness of adjustments made to Portfolio 12, ensuring that it remains aligned with trading objectives.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio Targeting",
          "definition": "The process of setting specific performance goals for the Sharpe Ratio to enhance strategy effectiveness."
        },
        {
          "term": "Performance Review Cycle",
          "definition": "A scheduled evaluation of trading performance metrics to ensure alignment with goals."
        }
      ],
      "whyThisMatters": "Targeting and reviewing performance metrics systematically ensures that Portfolio 12 evolves with changing market conditions.",
      "realLifeExample": "After setting a target Sharpe Ratio of 1.5, a trader implements strategic adjustments that successfully raise the ratio from 1.1 to 1.6 over the next 100 trades.",
      "commonMistake": "Overlooking the need for regular performance reviews, which can lead to stagnation and missed opportunities for improvement.",
      "quickNote": "Set targets for the Sharpe Ratio and expectancy, and review performance regularly for Portfolio 12.",
      "mentorText": "When working on Portfolio 12, establish clear targets for your Sharpe Ratio and expectancy. Regular reviews will keep your strategy sharp and effective.",
      "mentorAnalogy": "Think of targeting your performance metrics like a chef adjusting recipes; consistent tasting and tweaking lead to the best results."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Sharpe Ratio Calculation for Core Trading",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C13 -->\n### Core Scenario: Sharpe Ratio Application\nThe Sharpe Ratio quantifies the risk-adjusted return of a trading strategy, essential for evaluating performance. This card covers **how to calculate and interpret the Sharpe Ratio for Core trading portfolios**.\n\n* **Return Calculation**: Determine the average return of the portfolio over a specified period. For instance, if the portfolio generated a total return of 15% over 12 months, the monthly average return is 1.25%.\n* **Risk-Free Rate Integration**: Subtract the risk-free rate from the average return. If the current risk-free rate is 2%, the adjusted return becomes 1.25% - 0.167% (monthly risk-free rate) = 1.083%.\n* **Standard Deviation Assessment**: Calculate the standard deviation of the portfolio returns. If the standard deviation is 3%, the Sharpe Ratio is calculated as (1.083% / 3%) = 0.361.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return calculated by dividing the excess return of a portfolio by its standard deviation."
        }
      ],
      "whyThisMatters": "Understanding the Sharpe Ratio allows traders to compare the performance of different strategies and make informed decisions about risk management.",
      "realLifeExample": "A Core trading portfolio with a total return of 18% over 10 months and a standard deviation of 4% would yield a Sharpe Ratio of 4.5 when compared to a risk-free rate of 1.5%.",
      "commonMistake": "Traders often neglect to adjust returns for the risk-free rate, leading to inflated perceptions of performance.",
      "quickNote": "The Sharpe Ratio is essential for evaluating risk-adjusted performance in Core trading.",
      "mentorText": "When assessing your portfolio's performance, always calculate the Sharpe Ratio. It’s not just about returns; it’s about how much risk you took to achieve those returns.",
      "mentorAnalogy": "Think of the Sharpe Ratio like a pilot assessing fuel efficiency. Just as a pilot evaluates how far they can fly on a given amount of fuel, you must evaluate how much return you achieve per unit of risk."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "practice",
    "title": "Expectancy Calculation in Core Trading",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C14 -->\n### Core Scenario: Expectancy Optimization\nExpectancy provides a framework for understanding the average outcome of trades over time, crucial for long-term success. This card focuses on **calculating and optimizing expectancy for Core trading strategies**.\n\n* **Win Rate Assessment**: Calculate the percentage of winning trades. If you executed 100 trades with 55 winners, your win rate is 55%. \n* **Average Win and Loss Calculation**: Determine the average profit from winning trades and the average loss from losing trades. If winning trades average $200 and losing trades average $100, the expectancy formula becomes (0.55 * $200) - (0.45 * $100).\n* **Expectancy Formula Application**: Using the previous figures, the expectancy is calculated as $110 - $45 = $65 per trade, indicating a positive expectancy.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average amount a trader can expect to win or lose per trade, calculated using win rate and average win/loss."
        }
      ],
      "whyThisMatters": "Calculating expectancy helps traders gauge the viability of their strategies and make necessary adjustments to improve profitability.",
      "realLifeExample": "A Core trader with a win rate of 60% and average gains of $150 per win and losses of $75 per loss would have an expectancy of $90 per trade, indicating a profitable strategy.",
      "commonMistake": "Failing to account for both average wins and losses can lead to an inaccurate assessment of a strategy's effectiveness.",
      "quickNote": "Expectancy is a critical metric for evaluating the long-term profitability of trading strategies.",
      "mentorText": "Always calculate your expectancy before committing to a strategy. It’s your roadmap for understanding whether your approach is sustainable in the long run.",
      "mentorAnalogy": "Consider expectancy like a chef evaluating recipe success. Just as a chef assesses the average taste ratings of dishes, you must evaluate your average trade outcomes to refine your strategy."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A Core trader has executed 80 trades with a win rate of 50%. If the average profit per winning trade is $300 and the average loss per losing trade is $150, what is the expectancy per trade?",
      "options": [
        {
          "id": "0",
          "text": "$75",
          "isCorrect": true,
          "feedback": "Correct. Expectancy is calculated as (0.50 * $300) - (0.50 * $150) = $150 - $75 = $75."
        },
        {
          "id": "1",
          "text": "$100",
          "isCorrect": false,
          "feedback": "Incorrect. The calculation does not support this expectancy based on the provided win/loss averages."
        },
        {
          "id": "2",
          "text": "$50",
          "isCorrect": false,
          "feedback": "Incorrect. Re-evaluate the win rate and average win/loss to derive the correct expectancy."
        },
        {
          "id": "3",
          "text": "$0",
          "isCorrect": false,
          "feedback": "Incorrect. An expectancy of $0 indicates a break-even point, which is not the case here."
        }
      ]
    },
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "summary",
    "title": "Integrating Sharpe and Expectancy for Core Trading",
    "label": "Core Track",
    "body": "<!-- M9.8-core-C15 -->\n### Core Scenario: Combined Metrics for Strategy Assessment\nIntegrating the Sharpe Ratio and Expectancy provides a comprehensive view of a trading strategy's performance. This card emphasizes **how to synthesize these metrics for informed decision-making in Core trading**.\n\n* **Holistic Performance Evaluation**: Use both metrics to assess overall strategy effectiveness. A Sharpe Ratio above 1.0 combined with a positive expectancy indicates a robust strategy.\n* **Risk-Reward Analysis**: Analyze how the Sharpe Ratio reflects risk management while expectancy measures profitability. For example, a strategy with a Sharpe Ratio of 1.5 and expectancy of $50 per trade suggests a favorable risk-reward profile.\n* **Continuous Optimization**: Regularly review both metrics to adapt strategies to changing market conditions. A declining Sharpe Ratio or negative expectancy signals the need for strategy reassessment.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Metric Integration",
          "definition": "The process of combining multiple performance metrics to gain a comprehensive understanding of a trading strategy."
        }
      ],
      "whyThisMatters": "Integrating these metrics allows traders to make data-driven adjustments, enhancing long-term profitability and risk management.",
      "realLifeExample": "A Core trading strategy with a Sharpe Ratio of 1.2 and an expectancy of $80 per trade indicates a strong performance, suggesting the trader should scale their position size cautiously.",
      "commonMistake": "Traders often analyze these metrics in isolation, missing critical insights that come from their combined evaluation.",
      "quickNote": "Synthesize Sharpe Ratio and Expectancy for a complete view of trading performance.",
      "mentorText": "Always look at both the Sharpe Ratio and expectancy together. They tell you not just how much you’re making, but how much risk you’re taking to make it.",
      "mentorAnalogy": "Think of integrating these metrics like a pilot checking both altitude and speed. Just as both are crucial for safe flight, both metrics are essential for effective trading strategy assessment."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  }
];
