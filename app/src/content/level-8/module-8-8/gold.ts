import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Performance Metrics for Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M8.8-gold-C1 -->\n### Core Scenario: Evaluating Gold Trade Performance Metrics\nEvaluating performance metrics for Gold trades requires a nuanced understanding of market volatility. This card outlines **how to assess key performance indicators specifically tailored for Gold trading**.\n\n* **Volatility Impact Assessment**: Analyze how fluctuations in Gold prices affect trade outcomes. During periods of high volatility, metrics such as win rate and profit factor can shift significantly, necessitating a tailored approach.\n* **Sample Size Consideration**: Ensure that the sample size of trades reflects various market conditions. A minimum of 30 trades across different volatility periods provides a more accurate performance picture.\n* **Metric Adjustment Protocol**: Adjust performance metrics based on market conditions. For instance, during heightened volatility, consider using a weighted average of win rates to account for the increased risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate the effectiveness of trading strategies."
        }
      ],
      "whyThisMatters": "Understanding performance metrics specific to Gold trading allows for more informed decision-making, especially in volatile markets.",
      "realLifeExample": "Analyzing a sample of 50 Gold trades executed during the last quarter, where 20 trades were profitable, results in a win rate of 40%, adjusted for volatility spikes during geopolitical tensions.",
      "commonMistake": "Failing to adjust performance metrics for volatility can lead to misleading conclusions about a trading strategy's effectiveness.",
      "quickNote": "Tailor performance metrics to account for the unique volatility of Gold trading.",
      "mentorText": "When assessing your Gold trades, focus on how volatility skews your metrics. Always adjust your calculations to reflect the market environment you’re trading in.",
      "mentorAnalogy": "Think of evaluating Gold trading metrics like a pilot adjusting flight plans for turbulence; you must account for changing conditions to ensure a safe and successful journey."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Calculating Win Rate for Gold Trades",
    "label": "Gold Track",
    "body": "<!-- M8.8-gold-C2 -->\n### Core Scenario: Win Rate Calculation for Gold Trading\nCalculating the win rate for Gold trades is essential for assessing strategy effectiveness, particularly in volatile markets. This card teaches **the precise method for calculating win rates while considering market fluctuations**.\n\n* **Win Rate Formula**: Use the formula: Win Rate = (Number of Winning Trades / Total Trades) x 100. Ensure to categorize trades accurately based on market conditions to maintain the integrity of the calculation.\n* **Volatility Adjustment**: During high volatility, consider segmenting trades into categories (e.g., low, medium, high volatility) to analyze win rates more effectively. This allows for a clearer understanding of performance under different conditions.\n* **Time Frame Analysis**: Calculate win rates over multiple time frames (daily, weekly, monthly) to identify trends. A consistent win rate across different periods indicates a robust trading strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Win Rate",
          "definition": "The percentage of profitable trades relative to the total number of trades executed."
        }
      ],
      "whyThisMatters": "A precise win rate calculation helps traders evaluate the effectiveness of their strategies and adjust them based on market conditions.",
      "realLifeExample": "In a recent trading session, you executed 25 Gold trades, with 10 resulting in profits. This yields a win rate of 40%, which you further analyze by segmenting trades executed during high volatility periods.",
      "commonMistake": "Overlooking the impact of volatility on win rate calculations can lead to an inaccurate assessment of trading performance.",
      "quickNote": "Calculate win rates by accurately categorizing trades based on market volatility.",
      "mentorText": "When calculating your win rate, remember to factor in the volatility of the market during your trades. This will give you a clearer picture of your strategy's effectiveness.",
      "mentorAnalogy": "Calculating win rates in trading is like a coach analyzing player performance under different game conditions; it provides insights that are crucial for strategy adjustments."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Profit Factor in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M8.8-gold-C3 -->\n### Core Scenario: Determining Profit Factor for Gold Trades\nThe profit factor is a critical metric in evaluating the profitability of Gold trading strategies, especially in volatile environments. This card explains **how to calculate and interpret the profit factor for Gold trades**.\n\n* **Profit Factor Formula**: Calculate the profit factor using the formula: Profit Factor = Total Profit / Total Loss. This metric provides insight into the balance between winning and losing trades.\n* **Volatility Consideration**: In high-volatility scenarios, monitor the profit factor closely. A profit factor below 1.0 indicates a losing strategy, while a factor above 1.5 suggests a potentially robust approach.\n* **Trade Segmentation**: Analyze profit factors across different trade segments (e.g., day trades vs. swing trades) to identify which strategies perform best under varying market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Profit Factor",
          "definition": "A ratio that compares the total profit generated by winning trades to the total loss incurred by losing trades."
        }
      ],
      "whyThisMatters": "Understanding the profit factor allows traders to gauge the effectiveness of their strategies and make necessary adjustments based on market volatility.",
      "realLifeExample": "After analyzing 40 Gold trades, you find a total profit of $8,000 and total losses of $4,000, resulting in a profit factor of 2.0, indicating a strong trading strategy.",
      "commonMistake": "Neglecting to account for the impact of volatility on profit factor calculations can lead to misinterpretation of a strategy's effectiveness.",
      "quickNote": "Calculate the profit factor to assess the balance between profits and losses in your Gold trading strategy.",
      "mentorText": "When you calculate your profit factor, remember that it reflects your overall trading health. A profit factor above 1.5 is a good sign, especially in volatile markets.",
      "mentorAnalogy": "Determining the profit factor in trading is akin to a chef evaluating the balance of ingredients in a recipe; the right mix leads to a successful dish."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "R-Multiple for Gold Trades",
    "label": "Gold Track",
    "body": "<!-- M8.8-gold-C4 -->\n### Core Scenario: Calculating R-Multiple for Gold Trades\nThe R-multiple is a vital metric for assessing risk versus reward in Gold trades, particularly during volatile periods. This card outlines **the calculation and significance of R-multiple in trading decisions**.\n\n* **R-Multiple Definition**: R-multiple is calculated as R = (Profit or Loss) / Risk. For example, if you risk $1,000 on a trade and make $3,000, your R-multiple is 3.0.\n* **Volatility Context**: In volatile markets, track R-multiples across different trades to identify which strategies yield the best risk-adjusted returns. A higher R-multiple indicates a more favorable risk-to-reward ratio.\n* **Trade Evaluation**: Use R-multiples to evaluate trade performance post-execution. Analyzing R-multiples helps refine entry and exit strategies based on historical performance data.",
    "context": {
      "keyTerms": [
        {
          "term": "R-Multiple",
          "definition": "A measure of the risk-to-reward ratio of a trade, calculated as the profit or loss divided by the risk taken."
        }
      ],
      "whyThisMatters": "Calculating R-multiple provides insights into the effectiveness of risk management strategies in Gold trading, especially in volatile conditions.",
      "realLifeExample": "You risked $1,000 on a Gold trade and achieved a profit of $4,000. This results in an R-multiple of 4.0, indicating a strong risk-to-reward ratio during a volatile market phase.",
      "commonMistake": "Failing to accurately calculate R-multiples can lead to poor risk management decisions and suboptimal trade evaluations.",
      "quickNote": "Use R-multiple to assess the risk-to-reward ratio of your Gold trades effectively.",
      "mentorText": "When calculating your R-multiple, focus on how much risk you took versus the reward you gained. A higher R-multiple means you’re managing risk effectively.",
      "mentorAnalogy": "Calculating R-multiple is like an architect assessing the stability of a structure; understanding the balance between risk and reward is crucial for a solid foundation."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Expectancy in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M8.8-gold-C5 -->\n### Core Metric: Expectancy Calculation\nExpectancy quantifies the average expected return per trade, crucial for assessing long-term profitability in Gold trading. This card details **how to calculate expectancy using win rate and average R-multiple**.\n\n* **Formula Application**: Expectancy = (Win Rate × Average Win) - (Loss Rate × Average Loss). For example, if the win rate is 60%, average win is $200, and average loss is $100, expectancy = (0.6 × 200) - (0.4 × 100) = $80.\n* **Long-Term Perspective**: A positive expectancy indicates a strategy that can yield profits over time. Consistently applying this metric allows traders to make informed decisions about their Gold trading strategies.\n* **Market Condition Adjustment**: Adjust expectancy calculations based on market conditions. For instance, during periods of high volatility, re-evaluate average win/loss figures to ensure they reflect current market dynamics.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average expected return per trade based on win rate and average R-multiple."
        }
      ],
      "whyThisMatters": "Understanding expectancy helps traders assess the viability of their strategies in fluctuating Gold markets, guiding long-term profitability decisions.",
      "realLifeExample": "A trader analyzes 50 Gold trades, finding a win rate of 55% with average wins of $150 and average losses of $90, resulting in an expectancy of $37.50 per trade.",
      "commonMistake": "Traders often neglect to adjust expectancy calculations during volatile periods, leading to misinformed strategy assessments.",
      "quickNote": "Expectancy provides a clear metric for evaluating the profitability potential of Gold trading strategies.",
      "mentorText": "When calculating expectancy, think of it as your trading strategy's report card. If you're consistently achieving a positive number, you're on the right track.",
      "mentorAnalogy": "Consider expectancy like an aircraft's fuel efficiency; it tells you how far you can expect to travel based on your current fuel consumption and flight conditions."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "concept",
    "title": "Analyzing Gold Trade Samples",
    "label": "Gold Track",
    "body": "<!-- M8.8-gold-C6 -->\n### Core Analysis: Trade Sample Evaluation\nAnalyzing trade samples for Gold is essential for deriving insights into performance metrics, especially during volatile market conditions. This card outlines **the process of evaluating trade samples to identify strengths and weaknesses**.\n\n* **Sample Size Consideration**: Ensure a minimum of 30 trades for statistical relevance. A larger sample size provides more reliable insights into performance metrics.\n* **Performance Metrics Breakdown**: Focus on key metrics such as win rate, average R-multiple, and profit factor. For instance, if a sample of 40 trades shows a 70% win rate with an average R-multiple of 2.5, it indicates strong performance.\n* **Volatility Impact Assessment**: Compare performance metrics across different market conditions. For example, analyze trades executed during a Gold price surge versus a decline to identify how volatility affects outcomes.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Sample",
          "definition": "A collection of executed trades used to analyze performance metrics."
        }
      ],
      "whyThisMatters": "Analyzing trade samples allows traders to refine strategies based on empirical evidence, particularly in high-volatility environments.",
      "realLifeExample": "A trader reviews 50 Gold trades executed during a market spike, noting a 65% win rate and a profit factor of 1.8, prompting a strategy adjustment for future volatility.",
      "commonMistake": "Failing to analyze trade samples over varying market conditions can lead to an incomplete understanding of a strategy's effectiveness.",
      "quickNote": "Thorough analysis of trade samples reveals critical insights into performance and areas for improvement.",
      "mentorText": "Think of your trade samples as a lab report; the data tells you what works and what doesn’t. Always analyze them under different market conditions to get the full picture.",
      "mentorAnalogy": "Evaluating trade samples is like a scientist reviewing experimental results; each sample provides data points that inform future hypotheses and adjustments."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Gold Metrics",
    "label": "Gold Track",
    "body": "<!-- M8.8-gold-C7 -->\n### Core Exercise: Performance Metric Calculation\nEngaging in practical exercises focused on calculating and interpreting performance metrics is vital for Gold trading strategies. This card presents **a scenario-based exercise to reinforce metric calculations**.\n\n* **Scenario Setup**: You have executed 30 Gold trades with the following results: 18 wins averaging $250 each and 12 losses averaging $100 each. Calculate the win rate, average R-multiple, and expectancy.\n* **Calculation Steps**: \n  - Win Rate = Wins / Total Trades = 18 / 30 = 60%\n  - Average R-Multiple = Average Win / Average Loss = 250 / 100 = 2.5\n  - Expectancy = (Win Rate × Average Win) - (Loss Rate × Average Loss) = (0.6 × 250) - (0.4 × 100) = $110.\n* **Reflection**: After calculating, reflect on how these metrics inform your trading strategy and identify areas for improvement based on the results.",
    "context": {
      "keyTerms": [
        {
          "term": "R-Multiple",
          "definition": "The ratio of average win to average loss, indicating risk-reward efficiency."
        }
      ],
      "whyThisMatters": "Practicing metric calculations enhances a trader's ability to evaluate and adjust their strategies effectively.",
      "realLifeExample": "In a simulated environment, a trader calculates their metrics from 30 Gold trades, achieving a win rate of 60% and an expectancy of $110, leading to strategic refinements.",
      "commonMistake": "Traders often miscalculate metrics by overlooking the importance of accurate averages, skewing their performance assessments.",
      "quickNote": "Regular practice of metric calculations sharpens analytical skills and improves strategic decision-making.",
      "mentorText": "When you calculate your metrics, treat it like a post-flight debrief. Each number tells you something crucial about your performance and what you need to adjust.",
      "mentorAnalogy": "Calculating performance metrics is akin to an engineer analyzing a prototype's performance data; each figure provides insights for optimizing future designs."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given the following results from 30 Gold trades, what is the expectancy? 18 wins averaging $250 and 12 losses averaging $100.",
      "options": [
        {
          "id": "0",
          "text": "$110",
          "isCorrect": true,
          "feedback": "Correct. Expectancy is calculated as (0.6 × 250) - (0.4 × 100) = $110."
        },
        {
          "id": "1",
          "text": "$80",
          "isCorrect": false,
          "feedback": "Incorrect. This does not reflect the correct calculation of win rate and average values."
        },
        {
          "id": "2",
          "text": "$150",
          "isCorrect": false,
          "feedback": "Incorrect. Ensure you apply the expectancy formula correctly with the provided averages."
        },
        {
          "id": "3",
          "text": "$50",
          "isCorrect": false,
          "feedback": "Incorrect. Review the win rate and average calculations to arrive at the correct expectancy."
        }
      ]
    },
    "visualKey": "performance-analytics-chart"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Trading Metrics",
    "label": "Gold Track",
    "body": "<!-- M8.8-gold-C8 -->\n### Core Summary: Key Insights on Gold Trading Metrics\nEvaluating Gold trading metrics provides critical insights into performance, particularly in high-volatility conditions. This card encapsulates **the essential takeaways from analyzing performance metrics**.\n\n* **Expectancy Importance**: A positive expectancy is fundamental for long-term profitability. It serves as a benchmark for assessing strategy effectiveness.\n* **Trade Sample Analysis**: Regularly analyzing trade samples across different market conditions allows traders to adapt strategies based on empirical data, enhancing overall performance.\n* **Continuous Improvement**: Engaging in practical exercises to calculate and interpret metrics fosters a culture of continuous improvement, essential for navigating fluctuating Gold markets.",
    "context": {
      "keyTerms": [
        {
          "term": "Profit Factor",
          "definition": "The ratio of total profits to total losses, indicating overall trading efficiency."
        }
      ],
      "whyThisMatters": "Summarizing key insights reinforces the importance of metrics in developing robust trading strategies for Gold.",
      "realLifeExample": "A trader reflects on their recent analysis of Gold trading metrics, noting a consistent positive expectancy and a profit factor of 2.0, guiding future strategy adjustments.",
      "commonMistake": "Overlooking the importance of summarizing insights can lead to missed opportunities for strategic refinement.",
      "quickNote": "Key metrics provide a roadmap for strategic adjustments and long-term success in Gold trading.",
      "mentorText": "Summarizing your metrics is like reviewing a game film; it highlights what worked and what needs to change for better performance.",
      "mentorAnalogy": "Summarizing trading metrics is similar to a coach analyzing game statistics; it reveals strengths and weaknesses that inform future strategies."
    },
    "taskData": null,
    "visualKey": "performance-analytics-chart"
  }
];
