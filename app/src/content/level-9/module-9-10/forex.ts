import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Detecting Drift in Forex Strategies During Market Transitions",
    "label": "Forex Track",
    "body": "<!-- M9.10-forex-C1 -->\n### Core Scenario: Market Condition Transition Monitoring\nDetecting performance drift is critical when market conditions shift from trending to ranging. This card outlines **how to systematically identify and respond to these transitions**.\n\n* **Market Condition Analysis**: Utilize moving averages (e.g., 50-day and 200-day) to establish the current market trend. A crossover can indicate a potential transition, prompting a review of strategy effectiveness.\n* **Performance Benchmarking**: Compare recent trade metrics against historical performance during similar market conditions. A significant deviation in win rates or average trade duration signals potential drift.\n* **Adaptive Strategy Review**: Implement a protocol for strategy reassessment when a transition is detected. This includes adjusting entry and exit criteria to align with the new market environment.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Drift",
          "definition": "A deviation in strategy effectiveness due to changing market conditions."
        },
        {
          "term": "Market Transition",
          "definition": "A shift from one prevailing market condition to another, such as from trending to ranging."
        }
      ],
      "whyThisMatters": "Identifying drift during market transitions allows for timely adjustments to maintain strategy efficacy.",
      "realLifeExample": "EURUSD shows a 100-pip decline after a 1.2000 resistance break, indicating a shift from a bullish trend to a ranging market, necessitating a strategy review.",
      "commonMistake": "Failing to adjust strategies promptly after identifying a market transition, leading to continued losses.",
      "quickNote": "Monitor moving averages for trend shifts to detect performance drift.",
      "mentorText": "When you see a crossover in your moving averages, it’s time to take a hard look at your strategy. Don’t wait for losses to accumulate before you act.",
      "mentorAnalogy": "Think of this like a pilot adjusting flight plans based on changing weather conditions. Ignoring turbulence can lead to disastrous outcomes."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Indicators of Trend to Range Transition",
    "label": "Forex Track",
    "body": "<!-- M9.10-forex-C2 -->\n### Core Scenario: Identifying Transition Signals\nRecognizing indicators of a trend to range transition is essential for maintaining strategy performance. This card details **specific metrics and signals to monitor**.\n\n* **Bollinger Bands Squeeze**: A tightening of Bollinger Bands indicates reduced volatility and potential range formation. Monitor the width of the bands as a signal to prepare for a shift.\n* **RSI Divergence**: Look for divergence between price action and the Relative Strength Index (RSI). A failure to make new highs or lows while the RSI does can signal a weakening trend.\n* **Volume Analysis**: Decreasing volume during price movements can indicate a lack of conviction in the trend. A significant drop in volume often precedes a transition to a ranging market.",
    "context": {
      "keyTerms": [
        {
          "term": "Bollinger Bands",
          "definition": "A volatility indicator that consists of a middle band and two outer bands."
        },
        {
          "term": "RSI Divergence",
          "definition": "A situation where price movement diverges from the RSI, indicating potential trend reversal."
        }
      ],
      "whyThisMatters": "Understanding these indicators allows traders to anticipate market shifts and adjust strategies proactively.",
      "realLifeExample": "GBPJPY shows a Bollinger Bands squeeze at 150.50, coupled with RSI divergence, suggesting a transition from a bullish trend to a potential range.",
      "commonMistake": "Ignoring volume trends, leading to late reactions to market transitions.",
      "quickNote": "Watch for Bollinger Band squeezes and RSI divergences as early signs of market transitions.",
      "mentorText": "If you see the Bollinger Bands tightening, it’s a clear signal to reassess your positions. Don’t let complacency cost you.",
      "mentorAnalogy": "Like a weather forecaster predicting a storm, you must recognize the signs of change before it hits."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Analyzing Currency Pairs for Drift Detection",
    "label": "Forex Track",
    "body": "<!-- M9.10-forex-C3 -->\n### Core Scenario: Currency Pair Performance Review\nAnalyzing specific currency pairs is crucial for detecting performance drift. This card outlines **the analytical methods to employ**.\n\n* **Correlation Analysis**: Assess the correlation between currency pairs (e.g., EURUSD and GBPUSD). A significant change in correlation can indicate a shift in market dynamics affecting your strategy.\n* **Performance Metrics Comparison**: Compare the performance of your strategy across various pairs. If a strategy performs well on one pair but poorly on another under similar conditions, investigate the underlying causes.\n* **Historical Data Review**: Utilize historical data to identify past performance during similar market conditions. This can provide insights into potential future performance and necessary strategy adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Analysis",
          "definition": "A statistical method to measure the relationship between two currency pairs."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate the effectiveness of a trading strategy."
        }
      ],
      "whyThisMatters": "Analyzing currency pairs helps identify specific areas of drift, allowing for targeted strategy adjustments.",
      "realLifeExample": "AUDCAD shows a significant drop in correlation with NZDCAD during a recent market shift, indicating a need to reassess trading strategies on these pairs.",
      "commonMistake": "Overlooking correlation changes between pairs, leading to misaligned strategies.",
      "quickNote": "Use correlation analysis to detect shifts in currency pair dynamics.",
      "mentorText": "If you notice a drop in correlation between your pairs, take it seriously. It’s a sign that your strategy may need recalibration.",
      "mentorAnalogy": "Like a detective analyzing relationships between suspects, you must scrutinize how currency pairs interact to uncover hidden issues."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Assessing Volatility in Forex Markets",
    "label": "Forex Track",
    "body": "<!-- M9.10-forex-C4 -->\n### Core Scenario: Volatility Measurement Techniques\nAssessing volatility is vital for understanding how it impacts trading strategies. This card focuses on **methods to measure and interpret volatility**.\n\n* **Average True Range (ATR)**: Use ATR to quantify market volatility. A rising ATR indicates increasing volatility, which may affect the risk profile of your strategy.\n* **Historical Volatility Analysis**: Calculate historical volatility over different time frames to identify patterns. A sudden spike in historical volatility can signal a need to adjust position sizing or risk management strategies.\n* **Volatility Regime Identification**: Classify market conditions into regimes (low, medium, high volatility) and adjust strategies accordingly. For instance, a high volatility regime may require tighter stop-loss placements.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator used to measure market volatility."
        },
        {
          "term": "Volatility Regime",
          "definition": "A classification of market conditions based on volatility levels."
        }
      ],
      "whyThisMatters": "Understanding volatility dynamics is essential for risk management and strategy adaptation.",
      "realLifeExample": "USDJPY shows an ATR increase from 0.50 to 1.00 during a news event, indicating heightened volatility and necessitating a review of stop-loss levels.",
      "commonMistake": "Neglecting to adjust strategies based on volatility changes, leading to increased risk exposure.",
      "quickNote": "Monitor ATR and historical volatility to gauge market conditions effectively.",
      "mentorText": "When you see volatility spiking, it’s time to reassess your risk management. Don’t let the market dictate your exposure.",
      "mentorAnalogy": "Like a sailor adjusting sails based on wind conditions, you must adapt your strategy to the volatility of the market."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Risk Management Strategies for Forex Drift",
    "label": "Forex Track",
    "body": "<!-- M9.10-forex-C5 -->\n### Core Strategy: Mitigating Performance Drift Risks\nPerformance drift can lead to significant deviations from expected trading outcomes. This card outlines **specific risk management strategies to counteract the effects of drift**.\n\n* **Dynamic Position Sizing**: Adjust position sizes based on recent performance metrics. If a strategy shows a 10% decline in expected returns over the last 20 trades, reduce position sizes by 25% to limit exposure.\n* **Stop-Loss Adjustments**: Implement tighter stop-loss orders during periods of drift. For instance, if the EURUSD pair experiences a sudden volatility spike, adjust stop-loss levels to 30 pips instead of the usual 50 pips to protect capital.\n* **Diversification Protocol**: Spread risk across multiple currency pairs. If a strategy is underperforming on AUDUSD, consider reallocating 50% of the capital to a more stable pair like USDCHF to balance the portfolio risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting trade sizes based on recent performance metrics."
        },
        {
          "term": "Stop-Loss Adjustments",
          "definition": "Modifying stop-loss levels in response to market conditions."
        },
        {
          "term": "Diversification Protocol",
          "definition": "Spreading capital across various currency pairs to mitigate risk."
        }
      ],
      "whyThisMatters": "Effective risk management strategies can prevent significant losses during periods of performance drift, ensuring long-term viability.",
      "realLifeExample": "During a period of increased volatility, the GBPUSD pair shows a 15% drop in performance metrics. A trader reduces their position size from 1.0 lot to 0.75 lots to mitigate potential losses.",
      "commonMistake": "Failing to adjust position sizes in response to performance metrics, leading to overexposure during drift.",
      "quickNote": "Implement dynamic risk management to counteract performance drift effectively.",
      "mentorText": "When you notice a strategy drifting, immediately assess your position size. If performance metrics are down, it’s time to tighten your stop-loss and reduce exposure. Don’t let emotions dictate your capital allocation.",
      "mentorAnalogy": "Think of your trading strategy like an aircraft. Just as pilots adjust altitude and speed based on changing weather conditions, you must adapt your position sizes and stop-losses based on performance metrics."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Backtesting Strategies for Drift Monitoring",
    "label": "Forex Track",
    "body": "<!-- M9.10-forex-C6 -->\n### Core Method: Effective Backtesting for Drift Detection\nBacktesting is essential for identifying potential performance drift before it affects trading outcomes. This card covers **how to conduct thorough backtests to monitor drift**.\n\n* **Data Integrity Check**: Ensure that historical data is clean and accurate. Use a reliable source for EURUSD data from the last five years, filtering out any anomalies or gaps that could skew results.\n* **Performance Benchmarking**: Establish a benchmark for expected returns. If your strategy typically yields a 5% monthly return, compare backtested results against this benchmark to identify deviations.\n* **Scenario Analysis**: Conduct scenario testing under various market conditions. For example, simulate trades during high-impact news events to see how the strategy performs under stress, noting any significant performance drops.",
    "context": {
      "keyTerms": [
        {
          "term": "Data Integrity Check",
          "definition": "Verifying the accuracy and cleanliness of historical trading data."
        },
        {
          "term": "Performance Benchmarking",
          "definition": "Comparing strategy results against established performance metrics."
        },
        {
          "term": "Scenario Analysis",
          "definition": "Testing strategies under different market conditions to assess performance."
        }
      ],
      "whyThisMatters": "Thorough backtesting can reveal underlying issues in a strategy that may lead to performance drift, allowing for timely adjustments.",
      "realLifeExample": "A trader backtests a scalping strategy on the GBPJPY pair over the past year, discovering a 20% drop in performance during high volatility periods, prompting a strategy revision.",
      "commonMistake": "Relying on incomplete or inaccurate data during backtesting, leading to misleading results.",
      "quickNote": "Conduct rigorous backtesting to identify and address potential performance drift.",
      "mentorText": "Before you deploy a strategy, backtest it thoroughly. Look for patterns in your performance data and be vigilant for any signs of drift. If your results deviate from expectations, it’s time to reassess.",
      "mentorAnalogy": "Consider backtesting like a flight simulator for pilots. Just as pilots practice navigating various scenarios to prepare for real flights, you must simulate different market conditions to ensure your strategy holds up."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Forex Drift Monitoring",
    "label": "Forex Track",
    "body": "<!-- M9.10-forex-C7 -->\n### Core Activity: Monitoring Strategy Performance\nEngaging in practical exercises is essential for honing the skill of monitoring Forex strategy performance during market transitions. This card provides **specific tasks to enhance drift monitoring capabilities**.\n\n* **Weekly Performance Review**: Set aside time every week to analyze the performance of your active strategies. For instance, review the last 10 trades on USDJPY, noting any deviations from expected outcomes.\n* **Market Condition Assessment**: Evaluate current market conditions weekly. If the EURGBP pair shows increased volatility due to economic news, assess how your strategies are performing in light of this change.\n* **Drift Identification Checklist**: Create a checklist for identifying signs of performance drift. Include metrics such as drawdown percentage, win rate fluctuations, and average trade duration, and apply it to your recent trades on AUDCAD.",
    "context": {
      "keyTerms": [
        {
          "term": "Weekly Performance Review",
          "definition": "Regular analysis of strategy performance over a set period."
        },
        {
          "term": "Market Condition Assessment",
          "definition": "Evaluating the impact of current market conditions on strategy performance."
        },
        {
          "term": "Drift Identification Checklist",
          "definition": "A systematic approach to identifying performance drift indicators."
        }
      ],
      "whyThisMatters": "Regular monitoring of strategy performance helps in early detection of drift, allowing for timely adjustments to maintain effectiveness.",
      "realLifeExample": "A trader conducts a weekly performance review of their EURUSD strategy, discovering a 10% drop in win rate over the last month, prompting a strategy evaluation.",
      "commonMistake": "Neglecting to perform regular performance reviews, leading to undetected drift and potential losses.",
      "quickNote": "Engage in consistent performance monitoring to catch drift early.",
      "mentorText": "Make it a habit to review your trades weekly. Look for patterns and discrepancies. If you see a drop in performance, don’t ignore it; investigate and adapt your strategy accordingly.",
      "mentorAnalogy": "Think of monitoring your strategy like a mechanic performing routine checks on an aircraft. Just as a mechanic looks for signs of wear and tear, you must scrutinize your trading performance for any signs of drift."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During your weekly performance review, you notice a significant drop in your win rate for the EURUSD strategy. What should be your first action?",
      "options": [
        {
          "id": "0",
          "text": "Immediately increase your position size to recover losses.",
          "isCorrect": false,
          "feedback": "Increasing position size without understanding the cause of the drop can lead to greater losses."
        },
        {
          "id": "1",
          "text": "Conduct a detailed analysis of the trades to identify the cause of the drop.",
          "isCorrect": true,
          "feedback": "Analyzing the trades will help you understand the underlying issues and adjust your strategy accordingly."
        },
        {
          "id": "2",
          "text": "Ignore the drop and continue trading as usual.",
          "isCorrect": false,
          "feedback": "Ignoring performance issues can lead to larger problems and losses down the line."
        },
        {
          "id": "3",
          "text": "Switch to a different trading strategy without analysis.",
          "isCorrect": false,
          "feedback": "Switching strategies without understanding the current performance can result in repeating the same mistakes."
        }
      ]
    },
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Performance Drift Monitoring",
    "label": "Forex Track",
    "body": "<!-- M9.10-forex-C8 -->\n### Core Overview: Key Concepts in Drift Monitoring\nMonitoring performance drift is vital for maintaining the effectiveness of Forex strategies. This card summarizes **the essential concepts and techniques for effective drift monitoring**.\n\n* **Risk Management**: Employ dynamic position sizing and stop-loss adjustments to mitigate risks associated with drift. Regularly reassess exposure based on performance metrics.\n* **Backtesting**: Conduct thorough backtests to identify potential drift before it impacts trading outcomes. Ensure data integrity and benchmark against expected performance.\n* **Practical Monitoring**: Engage in regular performance reviews and maintain a drift identification checklist to catch issues early. Adapt strategies based on market conditions and performance data.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "Strategies to mitigate risks associated with performance drift."
        },
        {
          "term": "Backtesting",
          "definition": "The process of testing strategies against historical data to identify potential issues."
        },
        {
          "term": "Practical Monitoring",
          "definition": "Regularly reviewing performance to detect signs of drift."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these concepts ensures that traders can effectively manage and adapt their strategies to maintain performance.",
      "realLifeExample": "A trader regularly reviews their strategy performance on USDCHF, implementing risk management techniques and backtesting to ensure continued effectiveness.",
      "commonMistake": "Overlooking the importance of continuous monitoring and adaptation, which can lead to significant performance losses.",
      "quickNote": "Master the key concepts of drift monitoring to sustain Forex strategy effectiveness.",
      "mentorText": "Remember, monitoring your strategy is not a one-time task. It’s an ongoing process that requires diligence and adaptation. Stay alert to changes in performance and be ready to adjust your approach.",
      "mentorAnalogy": "Just as a ship captain continuously monitors navigational instruments to ensure safe passage, you must keep a close eye on your trading metrics to navigate the complexities of the Forex market."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  }
];
