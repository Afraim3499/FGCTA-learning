import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Sharpe Ratio in Forex Trading",
    "label": "Forex Track",
    "body": "<!-- M9.8-forex-C1 -->\n### Core Scenario: Application of Sharpe Ratio in Forex\nThe Sharpe Ratio quantifies risk-adjusted return, essential for evaluating Forex strategies. This card details **how to apply the Sharpe Ratio specifically to EURUSD and GBPUSD pairs**.\n\n* **Calculation Methodology**: The Sharpe Ratio is calculated by subtracting the risk-free rate from the portfolio return and dividing by the portfolio's standard deviation. For instance, if EURUSD yields a 5% return with a 2% risk-free rate and a standard deviation of 10%, the Sharpe Ratio is (5% - 2%) / 10% = 0.3.\n* **Benchmarking**: Compare the Sharpe Ratio of your trading strategy against a benchmark, such as a passive Forex index. A higher Sharpe Ratio indicates superior risk-adjusted performance.\n* **Performance Assessment**: Regularly assess the Sharpe Ratio over different time frames (e.g., daily, weekly) to identify trends and make necessary adjustments to your trading approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return calculated by dividing excess return by standard deviation."
        }
      ],
      "whyThisMatters": "Understanding the Sharpe Ratio allows traders to make informed decisions about strategy effectiveness in the Forex market.",
      "realLifeExample": "During the NY session, a trader analyzes their EURUSD strategy, calculating a Sharpe Ratio of 0.5, indicating moderate risk-adjusted returns compared to a benchmark of 0.4.",
      "commonMistake": "Traders often neglect to adjust the risk-free rate based on current economic conditions, leading to inaccurate Sharpe Ratio calculations.",
      "quickNote": "The Sharpe Ratio provides insight into the risk-reward profile of Forex strategies.",
      "mentorText": "When evaluating your Forex strategies, focus on the Sharpe Ratio. It tells you how much return you're getting for each unit of risk you take. If your EURUSD strategy has a low Sharpe Ratio, it’s time to reassess your approach.",
      "mentorAnalogy": "Think of the Sharpe Ratio like a pilot assessing fuel efficiency per mile flown. Just as a pilot wants to maximize distance per gallon, a trader seeks to maximize returns per unit of risk."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Optimizing Intraday Strategies for EURUSD",
    "label": "Forex Track",
    "body": "<!-- M9.8-forex-C2 -->\n### Core Scenario: Maximizing Sharpe Ratio for EURUSD\nOptimizing intraday strategies for EURUSD requires precise trade management to enhance the Sharpe Ratio. This card outlines **specific techniques to achieve this optimization**.\n\n* **Trade Entry Timing**: Utilize the first hour of the London session for entries, as volatility is typically higher, increasing potential returns. For example, entering a long position at 1.0850 during this period may yield better results.\n* **Dynamic Position Sizing**: Adjust position sizes based on the current Sharpe Ratio. If the ratio decreases below a predetermined threshold, reduce position size to mitigate risk until performance improves.\n* **Exit Strategy Implementation**: Set profit targets and stop-loss orders based on volatility measures. For instance, if the ATR (Average True Range) for EURUSD is 30 pips, set a target of 60 pips for a 2:1 reward-to-risk ratio.",
    "context": {
      "keyTerms": [
        {
          "term": "Intraday Strategy",
          "definition": "A trading strategy that involves buying and selling financial instruments within the same trading day."
        }
      ],
      "whyThisMatters": "Optimizing intraday strategies for EURUSD can significantly improve risk-adjusted returns, making them more competitive in the Forex market.",
      "realLifeExample": "A trader implements an intraday strategy for EURUSD, entering at 1.0850 during the London open and exiting at 1.0910, achieving a Sharpe Ratio of 1.2 for that session.",
      "commonMistake": "Failing to adjust exit strategies based on market volatility can lead to suboptimal performance and reduced Sharpe Ratios.",
      "quickNote": "Effective trade management is crucial for maximizing the Sharpe Ratio in intraday EURUSD strategies.",
      "mentorText": "To optimize your intraday EURUSD trades, focus on timing your entries and exits. The London session is your best friend; that’s when the market is alive and opportunities abound.",
      "mentorAnalogy": "Consider your intraday strategy like a chef timing the cooking of multiple dishes. Each dish needs precise timing to ensure everything is served perfectly, just like your trades need to be timed for maximum effectiveness."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Sharpe Ratio Optimization for GBPUSD",
    "label": "Forex Track",
    "body": "<!-- M9.8-forex-C3 -->\n### Core Scenario: Enhancing Sharpe Ratio for GBPUSD\nImproving the Sharpe Ratio for GBPUSD trading strategies involves understanding market conditions and timing. This card discusses **strategies to enhance the Sharpe Ratio effectively**.\n\n* **Market Condition Analysis**: Analyze economic indicators such as GDP and employment data releases for the UK and US. For example, a strong UK GDP report could lead to a favorable GBPUSD movement, increasing potential returns.\n* **News Event Timing**: Schedule trades around major news events, ensuring to enter positions before anticipated volatility spikes. If GBPUSD is trading at 1.3000 before a Bank of England announcement, prepare to enter a position based on expected outcomes.\n* **Volatility Adjustments**: Use volatility indicators like Bollinger Bands to set dynamic stop-loss levels. If GBPUSD is trading within a narrow band, tighten stop-loss orders to protect gains while allowing for potential breakout opportunities.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Conditions",
          "definition": "The prevailing economic and financial environment that affects trading outcomes."
        }
      ],
      "whyThisMatters": "Enhancing the Sharpe Ratio for GBPUSD strategies can lead to more consistent profitability and better risk management.",
      "realLifeExample": "A trader anticipates a positive UK employment report, entering GBPUSD at 1.2950. Following the report, the pair rallies to 1.3050, resulting in a Sharpe Ratio increase to 1.5.",
      "commonMistake": "Ignoring the impact of news events on GBPUSD can lead to unexpected losses and a lower Sharpe Ratio.",
      "quickNote": "Timing and market conditions are critical for optimizing the Sharpe Ratio in GBPUSD trading strategies.",
      "mentorText": "When trading GBPUSD, always keep an eye on the economic calendar. Major news can shift the market dramatically, and being prepared can enhance your Sharpe Ratio significantly.",
      "mentorAnalogy": "Think of optimizing your GBPUSD strategy like a race car driver adjusting their speed based on track conditions. Just as a driver must adapt to the road, you must adapt your strategy to market conditions."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Risk Management Techniques in Forex",
    "label": "Forex Track",
    "body": "<!-- M9.8-forex-C4 -->\n### Core Scenario: Improving Sharpe Ratio through Risk Management\nEffective risk management is essential for enhancing the Sharpe Ratio in Forex trading. This card outlines **specific techniques tailored for intraday strategies**.\n\n* **Risk-Reward Ratio Establishment**: Set a minimum risk-reward ratio of 1:2 for all trades. For instance, if risking 20 pips on GBPUSD, target at least 40 pips in profit to ensure a favorable Sharpe Ratio.\n* **Diversification Strategy**: Avoid over-concentration in a single currency pair. Spread risk across multiple pairs (e.g., EURUSD, GBPUSD, AUDUSD) to stabilize returns and improve overall Sharpe Ratio.\n* **Regular Performance Review**: Conduct weekly reviews of your trades to assess risk management effectiveness. Adjust strategies based on findings to maintain a Sharpe Ratio above 1.0 consistently.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling financial risks in trading."
        }
      ],
      "whyThisMatters": "Implementing robust risk management techniques is crucial for sustaining a high Sharpe Ratio and ensuring long-term trading success.",
      "realLifeExample": "A trader reviews their GBPUSD trades over the week, finding that maintaining a 1:2 risk-reward ratio resulted in a Sharpe Ratio of 1.3, significantly improving performance.",
      "commonMistake": "Neglecting to diversify trading strategies can lead to increased risk and a lower Sharpe Ratio.",
      "quickNote": "Strong risk management techniques are vital for optimizing the Sharpe Ratio in Forex trading.",
      "mentorText": "To improve your Sharpe Ratio, focus on managing your risks effectively. Always set your risk-reward ratios and diversify your trades to protect your capital.",
      "mentorAnalogy": "Think of risk management like a safety net for a trapeze artist. Just as the net protects the performer from falls, effective risk management safeguards your trading capital."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Calculating Expectancy in Forex Trades",
    "label": "Forex Track",
    "body": "<!-- M9.8-forex-C5 -->\n### Core Calculation: Expectancy in Forex\nExpectancy quantifies the average return of a trading strategy per trade, essential for assessing long-term viability. This card details **how to compute expectancy using specific Forex trades**.\n\n* **Formula Application**: Expectancy is calculated as (Win Rate × Average Win) - (Loss Rate × Average Loss). For example, if EURUSD has a win rate of 60% with an average win of 50 pips and a loss rate of 40% with an average loss of 30 pips, expectancy = (0.6 × 50) - (0.4 × 30) = 30 pips.\n* **Trade Sample Size**: Ensure a minimum of 30 trades to achieve statistical significance. A smaller sample may yield misleading results due to volatility in Forex pairs like GBPUSD.\n* **Adjusting for Slippage**: Incorporate slippage into your calculations. If your average win is 50 pips but slippage reduces it to 45 pips, recalculate expectancy to reflect this reality.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average expected return per trade calculated from win/loss ratios."
        }
      ],
      "whyThisMatters": "Calculating expectancy allows traders to evaluate the effectiveness of their strategies and make informed decisions on risk management.",
      "realLifeExample": "A trader analyzes 50 trades on EURUSD, finding a win rate of 55% with average wins of 40 pips and losses of 25 pips. Expectancy is calculated as (0.55 × 40) - (0.45 × 25) = 10 pips.",
      "commonMistake": "Failing to account for transaction costs, which can skew expectancy calculations significantly.",
      "quickNote": "Expectancy provides a clear metric for evaluating trading strategies over time.",
      "mentorText": "When calculating expectancy, focus on your actual trading data. Use real numbers from your trades to ensure your calculations reflect your performance accurately.",
      "mentorAnalogy": "Calculating expectancy in trading is like an engineer assessing the efficiency of a machine; you need precise data on inputs and outputs to determine overall performance."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Forex Sharpe Optimization",
    "label": "Forex Track",
    "body": "<!-- M9.8-forex-C6 -->\n### Core Awareness: Pitfalls in Sharpe Ratio Optimization\nOptimizing the Sharpe Ratio involves careful consideration of both returns and volatility. This card highlights **frequent mistakes traders make during this optimization process**.\n\n* **Over-Reliance on Historical Data**: Many traders assume past performance guarantees future results. For instance, a strategy that performed well during a trending market may fail in a ranging market, leading to misleading Sharpe calculations.\n* **Ignoring Market Anomalies**: Traders often overlook events that can skew volatility, such as geopolitical tensions or central bank announcements. For example, GBPUSD may exhibit unusual volatility during a Brexit announcement, impacting Sharpe Ratio calculations.\n* **Neglecting Risk-Adjusted Returns**: Focusing solely on maximizing returns without considering risk can lead to a false sense of security. A high Sharpe Ratio achieved through excessive leverage may not be sustainable in the long run.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, calculated as the average return earned in excess of the risk-free rate per unit of volatility."
        }
      ],
      "whyThisMatters": "Understanding these pitfalls is crucial for maintaining a realistic view of risk and return in Forex trading.",
      "realLifeExample": "A trader optimizes a strategy based on a 12-month backtest, achieving a Sharpe Ratio of 2.0. However, during a volatile market event, the strategy underperforms, revealing the limitations of historical data reliance.",
      "commonMistake": "Assuming a high Sharpe Ratio equates to a low-risk strategy without assessing the underlying volatility.",
      "quickNote": "Avoid common pitfalls to ensure your Sharpe Ratio optimization reflects true market conditions.",
      "mentorText": "Stay vigilant against the allure of historical performance. Always question whether your strategy will hold up under different market conditions.",
      "mentorAnalogy": "Optimizing the Sharpe Ratio is like a pilot adjusting flight plans based on past weather patterns; relying solely on history can lead to dangerous outcomes in changing conditions."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Forex Sharpe Optimization",
    "label": "Forex Track",
    "body": "<!-- M9.8-forex-C7 -->\n### Core Application: Sharpe Optimization Exercises\nEngaging in practical exercises reinforces the principles of Sharpe Ratio optimization. This card provides **real-time scenarios to apply your knowledge**.\n\n* **Scenario Analysis**: Given a trading strategy on EURUSD with a 1.5 Sharpe Ratio, simulate how changes in volatility (±10%) affect the ratio. Calculate the new Sharpe Ratio under both conditions.\n* **Backtesting Exercise**: Conduct a backtest of a GBPUSD strategy over the last 12 months. Record the Sharpe Ratio and identify periods of high volatility. Analyze how these periods impacted your results.\n* **Risk Management Simulation**: Adjust your position sizing based on a calculated Sharpe Ratio. For example, if your Sharpe Ratio is 1.2, determine the maximum position size you can take while maintaining a risk level of 2% of your capital per trade.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Backtesting",
          "definition": "The process of testing a trading strategy on historical data to evaluate its effectiveness."
        }
      ],
      "whyThisMatters": "Practical exercises solidify understanding and application of Sharpe optimization concepts in live trading environments.",
      "realLifeExample": "A trader tests a GBPUSD strategy over 100 trades, achieving a Sharpe Ratio of 1.8. They then simulate a 10% increase in volatility, recalculating the Sharpe Ratio to 1.5, demonstrating the impact of market conditions.",
      "commonMistake": "Failing to adjust for changing market conditions during backtesting, leading to unrealistic expectations.",
      "quickNote": "Practical exercises enhance your ability to adapt Sharpe optimization strategies to real-world scenarios.",
      "mentorText": "Practice makes perfect. Regularly simulate different market conditions to see how your strategies hold up under stress.",
      "mentorAnalogy": "Engaging in practical exercises is akin to a surgeon practicing on simulations; it prepares you for real-life scenarios where precision and adaptability are critical."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have a trading strategy on EURUSD with a Sharpe Ratio of 1.5. If volatility increases by 10%, what is the expected impact on your Sharpe Ratio?",
      "options": [
        {
          "id": "0",
          "text": "It will increase to 1.7.",
          "isCorrect": false,
          "feedback": "Increased volatility typically decreases the Sharpe Ratio unless returns increase significantly."
        },
        {
          "id": "1",
          "text": "It will decrease to 1.3.",
          "isCorrect": true,
          "feedback": "Higher volatility generally leads to a lower Sharpe Ratio, assuming returns remain constant."
        },
        {
          "id": "2",
          "text": "It will remain the same.",
          "isCorrect": false,
          "feedback": "The Sharpe Ratio is sensitive to changes in volatility, so it is unlikely to remain unchanged."
        },
        {
          "id": "3",
          "text": "It will increase to 2.0.",
          "isCorrect": false,
          "feedback": "An increase in volatility without a corresponding increase in returns will reduce the Sharpe Ratio."
        }
      ]
    },
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Sharpe and Expectancy Optimization",
    "label": "Forex Track",
    "body": "<!-- M9.8-forex-C8 -->\n### Core Recap: Sharpe and Expectancy Optimization\nOptimizing the Sharpe Ratio and expectancy is essential for effective Forex trading strategies. This card summarizes **the key points for EURUSD and GBPUSD optimization**.\n\n* **Expectancy Calculation**: Utilize the formula (Win Rate × Average Win) - (Loss Rate × Average Loss) to determine the viability of your trading strategy. Regularly update these metrics based on recent trades to maintain accuracy.\n* **Sharpe Ratio Importance**: A high Sharpe Ratio indicates better risk-adjusted returns. Always consider the context of historical data and market conditions when interpreting this metric.\n* **Practical Application**: Engage in backtesting and scenario analysis to refine your strategies. Adjust your approach based on real-time market conditions to ensure your optimization efforts are relevant and effective.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Adjusted Return",
          "definition": "The return on an investment adjusted for the risk taken to achieve that return."
        }
      ],
      "whyThisMatters": "A solid understanding of these concepts allows traders to make informed decisions and enhance their trading performance.",
      "realLifeExample": "A trader summarizes their performance on EURUSD, noting an expectancy of 15 pips and a Sharpe Ratio of 1.6 over the last quarter, allowing for strategic adjustments moving forward.",
      "commonMistake": "Neglecting to regularly review and adjust expectancy and Sharpe calculations based on changing market conditions.",
      "quickNote": "Regularly optimize expectancy and Sharpe Ratio to align with current market dynamics.",
      "mentorText": "Always revisit your calculations and strategies. The market evolves, and so should your approach to risk and return.",
      "mentorAnalogy": "Summarizing your trading performance is like an architect reviewing blueprints; constant revisions ensure the final structure is sound and resilient to external pressures."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  }
];
