import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Expectancy Mapping for Forex Pairs",
    "label": "Forex Track",
    "body": "<!-- M8.2-forex-C1 -->\n### Core Scenario: Expectancy Mapping for Major Forex Pairs\nExpectancy mapping quantifies the average return of a trading strategy, crucial for informed decision-making in Forex. This card details **how to analyze historical data to establish expectancy for major pairs**.\n\n* **Historical Win Rate Analysis**: Calculate the percentage of winning trades over a defined period for pairs like EURUSD or GBPJPY. For instance, if EURUSD has 60 wins out of 100 trades, the win rate is 60%.\n* **Average Win vs. Average Loss**: Determine the average profit from winning trades and the average loss from losing trades. If the average win is 50 pips and the average loss is 30 pips, the expectancy can be calculated as (0.6 * 50) - (0.4 * 30).\n* **Expectancy Formula Application**: Use the formula Expectancy = (Win Rate * Average Win) - (Loss Rate * Average Loss) to derive a quantitative measure. For the previous example, Expectancy = (0.6 * 50) - (0.4 * 30) = 30 pips per trade.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average amount a trader can expect to win or lose per trade based on historical data."
        }
      ],
      "whyThisMatters": "Understanding expectancy allows traders to evaluate the long-term viability of their strategies rather than focusing on individual outcomes.",
      "realLifeExample": "Analyzing the EURUSD over the last 200 trades shows a 55% win rate with an average win of 40 pips and an average loss of 25 pips, resulting in an expectancy of 22.5 pips per trade.",
      "commonMistake": "Traders often neglect to factor in the average loss when calculating expectancy, leading to an overly optimistic view of their strategy.",
      "quickNote": "Expectancy quantifies your average return per trade, guiding strategic decisions.",
      "mentorText": "When you look at your trades, think of them as a series of bets. Each trade's outcome is just one data point in a larger picture. Focus on the expectancy, not just the wins.",
      "mentorAnalogy": "Consider a casino where each game has a built-in house edge. Just as the house knows its long-term profit from each game, you must understand your expectancy to ensure profitability over time."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Impact of Central Bank News on Expectancy",
    "label": "Forex Track",
    "body": "<!-- M8.2-forex-C2 -->\n### Core Scenario: Central Bank News and Expectancy\nCentral bank news releases can significantly alter the expectancy of major Forex pairs, impacting volatility and price direction. This card outlines **how to prepare for these events to manage risk**.\n\n* **Event Impact Assessment**: Analyze historical price movements following central bank announcements. For example, observe how the USD reacts to Federal Reserve interest rate decisions, often resulting in increased volatility.\n* **Expectancy Adjustment**: Adjust your expectancy calculations based on the anticipated impact of news. If historical data shows a 100-pip average move post-announcement, factor this into your risk management strategy.\n* **Risk Mitigation Strategies**: Implement strategies such as tightening stop-loss orders or reducing position sizes ahead of major news releases to safeguard against unexpected volatility. For instance, if the ECB is set to announce policy changes, consider reducing exposure on EUR pairs.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Central Bank News",
          "definition": "Official announcements from central banks that can influence currency values and market volatility."
        }
      ],
      "whyThisMatters": "Understanding the impact of central bank news allows traders to adjust their strategies and expectations, minimizing risk during high-volatility periods.",
      "realLifeExample": "Prior to the Bank of England's interest rate decision, GBPUSD typically experiences a 75-pip average move, necessitating adjustments in position sizing to maintain expectancy.",
      "commonMistake": "Traders often ignore the historical impact of news events, leading to underprepared positions and unexpected losses.",
      "quickNote": "Central bank news can drastically shift expectancy; prepare accordingly.",
      "mentorText": "When central banks speak, the market listens. Anticipate the potential impact on your trades and adjust your strategy to protect your capital.",
      "mentorAnalogy": "Think of a surgeon preparing for a major operation. They review past cases and anticipate complications, just as you must prepare for the potential market shifts caused by central bank announcements."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Calculating Probability Metrics in Forex",
    "label": "Forex Track",
    "body": "<!-- M8.2-forex-C3 -->\n### Core Scenario: Probability Metrics in Forex Trading\nCalculating probability metrics is essential for making data-driven trading decisions in Forex. This card details **the process of deriving and interpreting these metrics**.\n\n* **Trade Outcome Probability**: Use historical data to determine the likelihood of a trade setup being successful. For instance, if a specific pattern has a 70% success rate based on 50 occurrences, this probability informs future trades.\n* **Risk-Reward Ratio Calculation**: Establish the risk-reward ratio for each trade. If a trade risks 30 pips to potentially gain 90 pips, the ratio is 1:3, indicating a favorable expectancy.\n* **Statistical Validation**: Validate your probability metrics by backtesting strategies over multiple market conditions. For example, backtest a strategy on EURJPY over the last year to confirm its 65% win rate holds true across different volatility environments.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Probability Metrics",
          "definition": "Quantitative measures that assess the likelihood of different trading outcomes based on historical data."
        }
      ],
      "whyThisMatters": "Probability metrics equip traders with the statistical foundation necessary to evaluate and refine their trading strategies.",
      "realLifeExample": "A trader analyzes a specific breakout pattern on AUDCAD, finding it has a 75% success rate over 100 trades, leading to a calculated risk-reward ratio of 1:2.",
      "commonMistake": "Traders often miscalculate probabilities by failing to account for market conditions, leading to skewed expectations.",
      "quickNote": "Probability metrics provide a statistical basis for informed trading decisions.",
      "mentorText": "Every trade you take should be backed by data. Calculate your probabilities and ensure your risk-reward ratios align with your trading goals.",
      "mentorAnalogy": "Like an architect using blueprints to estimate the stability of a structure, you must rely on statistical analysis to gauge the strength of your trading setups."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Developing News Trading Strategies",
    "label": "Forex Track",
    "body": "<!-- M8.2-forex-C4 -->\n### Core Scenario: News Trading Strategies Aligned with Expectancy\nCreating effective trading strategies around central bank news requires a solid understanding of expectancy principles. This card focuses on **how to align your strategies with these principles**.\n\n* **Pre-Announcement Positioning**: Establish positions based on historical data of price movements before major news releases. If historical analysis shows a consistent pre-announcement rally in USD pairs, consider entering positions ahead of the news.\n* **Post-Announcement Reaction Plans**: Develop a clear plan for executing trades immediately after news releases. For example, if the Fed announces a rate hike, have predefined entry and exit points based on expected volatility.\n* **Expectancy-Based Adjustments**: Continuously adjust your trading strategy based on the calculated expectancy of news events. If a particular news release historically results in a 50-pip average move, set your targets accordingly to maximize potential gains while managing risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "News Trading Strategy",
          "definition": "A trading approach that capitalizes on market movements resulting from economic news releases."
        }
      ],
      "whyThisMatters": "Aligning trading strategies with expectancy principles enhances the probability of achieving favorable outcomes during high-impact news events.",
      "realLifeExample": "A trader prepares for the ECB's monetary policy announcement by setting a long position on EURUSD, anticipating a 60-pip move based on historical data, with a target set at 1.2000.",
      "commonMistake": "Traders often react impulsively to news without a structured strategy, leading to losses instead of leveraging expectancy.",
      "quickNote": "Align your news strategies with expectancy to optimize outcomes.",
      "mentorText": "Plan your trades around news events like a military operation. Anticipate the moves, set your targets, and execute with precision.",
      "mentorAnalogy": "Just as a chef prepares a meal with precise timing and ingredient ratios, you must develop your news trading strategies with an understanding of market reactions and expectancy."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Managing Volatility in Forex Trading",
    "label": "Forex Track",
    "body": "<!-- M8.2-forex-C5 -->\n### Core Scenario: Central Bank Announcements and Volatility\nCentral bank announcements often trigger significant volatility in Forex markets, impacting price movements and trader psychology. This card outlines **strategies to maintain positive expectancy during these high-impact events**.\n\n* **Pre-Announcement Positioning**: Establish positions well in advance of the announcement to mitigate adverse reactions. Utilize limit orders to define entry points and avoid slippage during volatile spikes.\n* **Risk Management Protocols**: Set strict stop-loss levels based on historical volatility data. For instance, if EURUSD typically moves 100 pips post-announcement, adjust stop-loss to 50 pips to protect capital while allowing for normal fluctuations.\n* **Expectancy Calculation**: Continuously assess the expectancy of trades by factoring in potential volatility. If a trade setup has a 60% win rate with an average win of 80 pips and an average loss of 50 pips, the expectancy remains positive even amid volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average expected return of a trade based on win/loss ratios and average gains/losses."
        }
      ],
      "whyThisMatters": "Understanding how to manage volatility during central bank announcements is essential for maintaining a positive expectancy and avoiding emotional decision-making.",
      "realLifeExample": "During the Federal Reserve's interest rate announcement on March 15, 2023, EURUSD spiked from 1.0800 to 1.0900, providing a 100-pip opportunity for pre-positioned trades with calculated risk.",
      "commonMistake": "Failing to adjust stop-loss levels based on expected volatility can lead to unnecessary losses during high-impact news events.",
      "quickNote": "Pre-positioning and risk management are crucial for navigating volatility during central bank announcements.",
      "mentorText": "When preparing for a central bank announcement, I always ensure my positions are set ahead of time. This way, I can focus on managing risk rather than reacting to rapid price movements.",
      "mentorAnalogy": "Think of this like a pilot preparing for turbulence; they adjust altitude and speed in advance to ensure a smooth flight, rather than reacting to every bump."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Effective Trade Execution Techniques",
    "label": "Forex Track",
    "body": "<!-- M8.2-forex-C6 -->\n### Core Scenario: Executing Trades During High-Impact News\nHigh-impact news events can create rapid price movements, requiring precise execution techniques to maintain expectancy. This card discusses **methods to execute trades effectively in these conditions**.\n\n* **Order Types Utilization**: Use market orders for immediate execution during news releases, but be aware of potential slippage. Alternatively, consider using limit orders to enter at specific price levels post-announcement.\n* **Time-Based Execution**: Monitor the first minute after the news release for volatility spikes. For example, if GBPUSD jumps from 1.3000 to 1.3050, wait for a retracement before entering a trade to improve risk/reward ratios.\n* **Volume Analysis**: Analyze trading volume during news events. A spike in volume can indicate strong market sentiment; use this information to validate trade entries and adjust position sizes accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a security immediately at the current market price."
        }
      ],
      "whyThisMatters": "Effective execution techniques during high-impact news events are critical for preserving expectancy and capitalizing on market movements.",
      "realLifeExample": "During the Non-Farm Payroll report on April 7, 2023, GBPUSD surged from 1.2950 to 1.3050 within seconds. Traders using limit orders at 1.3020 were able to capitalize on the retracement.",
      "commonMistake": "Relying solely on market orders without considering slippage can lead to unfavorable entry prices during volatile conditions.",
      "quickNote": "Utilizing the right order types and timing is essential for effective trade execution during news events.",
      "mentorText": "In high-impact news scenarios, I always prefer to use limit orders to control my entry points. This helps me avoid getting caught in the chaos of rapid price movements.",
      "mentorAnalogy": "Executing trades during news is like a surgeon making precise incisions; timing and technique are critical to avoid complications."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios for Forex Expectancy",
    "label": "Forex Track",
    "body": "<!-- M8.2-forex-C7 -->\n### Core Scenario: Simulating Forex Trading Around News\nEngaging in practical scenarios allows traders to apply expectancy concepts in real-time decision-making. This card provides **simulated trading scenarios based on central bank news**.\n\n* **Scenario 1**: The European Central Bank announces a rate hike. You have a long position in EURUSD at 1.0850. The price spikes to 1.0900 immediately after the announcement. What is your next step to maintain expectancy?\n* **Scenario 2**: The Bank of England's inflation report shows higher-than-expected inflation. You are short GBPUSD at 1.2950. The market reacts quickly, moving to 1.2900. How do you adjust your stop-loss to protect your capital?\n* **Scenario 3**: After the Federal Reserve's announcement, USDJPY moves from 110.00 to 111.50. You had set a limit order at 110.80. The price retraces to 110.90. Should you enter the trade or wait for a better price?",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a controlled environment without real capital at risk."
        }
      ],
      "whyThisMatters": "Practicing with real-time scenarios enhances decision-making skills and reinforces expectancy management during volatile market conditions.",
      "realLifeExample": "In a simulation of the ECB announcement, traders who adjusted their stop-loss to breakeven after a 50-pip gain were able to secure profits despite subsequent volatility.",
      "commonMistake": "Ignoring the need to adapt strategies in response to rapid market changes can lead to missed opportunities or increased losses.",
      "quickNote": "Simulated trading scenarios provide valuable practice for managing expectancy in real-time market conditions.",
      "mentorText": "When faced with rapid market changes, I always remind myself to stick to my plan. Adjusting my stop-loss or taking profits at the right moment can make all the difference.",
      "mentorAnalogy": "Simulating trading is like a flight simulator for pilots; it prepares you for real-world conditions without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated ECB rate hike announcement, you hold a long position in EURUSD at 1.0850. The price spikes to 1.0900. What should you do next?",
      "options": [
        {
          "id": "0",
          "text": "Move your stop-loss to breakeven and monitor the price action.",
          "isCorrect": true,
          "feedback": "Moving your stop-loss to breakeven protects your capital while allowing for potential further gains."
        },
        {
          "id": "1",
          "text": "Close the position immediately to secure profits.",
          "isCorrect": false,
          "feedback": "Closing the position may prevent you from capturing additional gains if the price continues to rise."
        },
        {
          "id": "2",
          "text": "Increase your position size to maximize profits.",
          "isCorrect": false,
          "feedback": "Increasing position size can expose you to greater risk, especially during volatile conditions."
        },
        {
          "id": "3",
          "text": "Do nothing and wait for the price to retrace.",
          "isCorrect": false,
          "feedback": "Inaction can lead to missed opportunities or losses if the price reverses unexpectedly."
        }
      ]
    },
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Expectancy Concepts",
    "label": "Forex Track",
    "body": "<!-- M8.2-forex-C8 -->\n### Core Summary: Expectancy in Forex Trading\nUnderstanding expectancy is crucial for effective Forex trading, particularly during volatile market conditions. This card summarizes **key concepts related to managing expectancy**.\n\n* **Expectancy Metrics**: Calculate expectancy using the formula: (Win Rate x Average Win) - (Loss Rate x Average Loss). This metric helps in assessing the viability of trading strategies.\n* **Volatility Management**: Implement strategies to manage volatility during central bank announcements, such as pre-positioning and adjusting stop-loss levels based on expected price movements.\n* **Execution Techniques**: Utilize effective trade execution techniques during high-impact news events, including the use of market and limit orders to optimize entry points and manage risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Management",
          "definition": "Strategies employed to navigate price fluctuations during significant market events."
        }
      ],
      "whyThisMatters": "A solid grasp of expectancy concepts enables traders to make informed decisions and maintain profitability even in uncertain market conditions.",
      "realLifeExample": "Traders who calculated their expectancy before the Fed's interest rate announcement on March 15, 2023, were able to navigate the resulting volatility effectively, securing profits.",
      "commonMistake": "Neglecting to calculate expectancy can lead to overtrading and increased risk without a clear understanding of potential outcomes.",
      "quickNote": "Mastering expectancy concepts is essential for navigating the Forex market successfully.",
      "mentorText": "Always calculate your expectancy before entering a trade. This will guide your decisions and help you stay disciplined, even when the market gets chaotic.",
      "mentorAnalogy": "Understanding expectancy is like a financial analyst assessing a company's performance; it provides a clear picture of potential returns versus risks."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  }
];
