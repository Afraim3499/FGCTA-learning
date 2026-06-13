import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Trading Expectancy Rules",
    "label": "Gold Track",
    "body": "<!-- M8.2-gold-C1 -->\n### Core Scenario: Gold Trading Expectancy Framework\nUnderstanding expectancy in gold trading is essential for evaluating the potential profitability of trades. This card outlines **specific rules to calculate and apply expectancy in the gold market**.\n\n* **Expectancy Calculation**: Use the formula: Expectancy = (Win Rate × Average Win) - (Loss Rate × Average Loss). For example, if your win rate is 60%, average win is $200, loss rate is 40%, and average loss is $150, your expectancy would be (0.6 × 200) - (0.4 × 150) = $60.\n* **Trade Evaluation**: Assess each trade's expectancy before execution. A positive expectancy indicates a favorable long-term outcome, while a negative expectancy suggests reevaluation of the strategy.\n* **Position Sizing**: Adjust position sizes based on expectancy. For trades with higher expectancy, consider increasing size proportionately, while reducing size for trades with negative expectancy.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average expected return per trade, calculated using win rate and average win/loss."
        }
      ],
      "whyThisMatters": "Understanding expectancy allows traders to make informed decisions based on statistical outcomes rather than emotional biases.",
      "realLifeExample": "A trader evaluates a gold trade setup with a calculated expectancy of $50 per trade, deciding to risk 2% of their account on a position size that aligns with this expectancy.",
      "commonMistake": "Traders often overlook the importance of calculating expectancy, leading to decisions based on gut feelings rather than data.",
      "quickNote": "Calculate expectancy to guide your trading decisions in gold.",
      "mentorText": "When assessing your trades, always calculate expectancy first. It’s not about being right; it’s about making statistically sound decisions that pay off in the long run.",
      "mentorAnalogy": "Think of expectancy like a business's profit margin. Just as a business evaluates its costs and revenues to determine profitability, traders must assess their trades' expectancy to ensure long-term success."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "FOMC Events and Gold Expectancy",
    "label": "Gold Track",
    "body": "<!-- M8.2-gold-C2 -->\n### Core Scenario: Impact of FOMC on Gold Prices\nFOMC announcements can significantly influence gold prices, affecting trading expectancy. This card discusses **strategic planning around these critical events**.\n\n* **Market Volatility**: Anticipate increased volatility during FOMC announcements. Gold prices can swing dramatically, impacting your expectancy calculations. For instance, after an FOMC meeting, gold may rise from $1,800 to $1,850 within minutes.\n* **Pre-Announcement Positioning**: Consider establishing positions ahead of FOMC announcements based on historical price movements. Analyze past data to determine how gold has reacted to similar announcements.\n* **Post-Announcement Adjustments**: Post-announcement, reassess your trades. If the market reacts contrary to your expectations, be prepared to adjust your position size or exit strategy to maintain a favorable expectancy.",
    "context": {
      "keyTerms": [
        {
          "term": "FOMC",
          "definition": "Federal Open Market Committee, responsible for setting monetary policy in the U.S."
        }
      ],
      "whyThisMatters": "Understanding the relationship between FOMC events and gold prices helps traders manage risk and optimize expectancy during high-impact news.",
      "realLifeExample": "During the last FOMC meeting, gold prices surged from $1,800 to $1,850 following a dovish statement, allowing traders who anticipated this move to capitalize on the volatility.",
      "commonMistake": "Failing to account for the potential impact of FOMC announcements can lead to unexpected losses and skewed expectancy.",
      "quickNote": "Plan your gold trades around FOMC events to optimize expectancy.",
      "mentorText": "Always be aware of FOMC dates. They can create opportunities, but they can also lead to significant losses if you're not prepared. Adjust your strategies accordingly.",
      "mentorAnalogy": "Consider FOMC announcements like a weather forecast for a pilot. Just as pilots adjust their flight plans based on weather conditions, traders must adapt their strategies around FOMC events."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Risk Management Techniques for Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M8.2-gold-C3 -->\n### Core Scenario: Effective Risk Management in Gold\nMaintaining a favorable expectancy during volatile market conditions is critical in gold trading. This card outlines **risk management techniques specific to this market**.\n\n* **Stop-Loss Placement**: Set stop-loss orders based on volatility metrics. For instance, if gold is trading at $1,800 with a 14-day ATR of $30, consider placing your stop-loss at $1,770 to account for normal price fluctuations.\n* **Risk-Reward Ratio**: Establish a minimum risk-reward ratio of 1:2. If risking $100 on a trade, target a profit of at least $200 to ensure positive expectancy over time.\n* **Diversification**: Avoid over-concentration in gold trades. Diversify your portfolio with other commodities or asset classes to mitigate risk and enhance overall expectancy.",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        }
      ],
      "whyThisMatters": "Effective risk management techniques help traders maintain a favorable expectancy, especially during periods of high volatility in gold markets.",
      "realLifeExample": "A trader sets a stop-loss at $1,770 while entering a long position at $1,800, ensuring that the risk is controlled within acceptable limits based on the ATR.",
      "commonMistake": "Neglecting to adjust stop-loss levels according to market volatility can lead to unnecessary losses.",
      "quickNote": "Implement robust risk management to sustain expectancy in gold trading.",
      "mentorText": "Always manage your risk first. If you can control your losses, you can stay in the game long enough to capitalize on your winning trades.",
      "mentorAnalogy": "Think of risk management like a safety net for a tightrope walker. Just as the net protects the walker from falls, effective risk management safeguards your trading capital."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Technical Analysis for Gold Expectancy",
    "label": "Gold Track",
    "body": "<!-- M8.2-gold-C4 -->\n### Core Scenario: Utilizing Technical Analysis in Gold Trading\nTechnical analysis plays a vital role in assessing expectancy in gold trading. This card focuses on **applying indicators to make informed decisions**.\n\n* **Moving Averages**: Use moving averages to identify trends. For example, if the 50-day moving average crosses above the 200-day moving average, it may indicate a bullish trend, suggesting a favorable expectancy for long positions.\n* **RSI Application**: Implement the Relative Strength Index (RSI) to gauge overbought or oversold conditions. An RSI reading above 70 may indicate overbought conditions, prompting a reevaluation of long positions to maintain expectancy.\n* **Fibonacci Retracement Levels**: Utilize Fibonacci retracement levels to identify potential reversal points. If gold retraces to the 61.8% level at $1,750, it may present a buying opportunity with a favorable risk-reward setup.",
    "context": {
      "keyTerms": [
        {
          "term": "RSI",
          "definition": "Relative Strength Index, a momentum oscillator that measures the speed and change of price movements."
        }
      ],
      "whyThisMatters": "Applying technical analysis tools allows traders to assess market conditions and improve expectancy through informed decision-making.",
      "realLifeExample": "A trader observes a bullish crossover of the 50-day and 200-day moving averages, deciding to enter a long position at $1,800, anticipating upward momentum.",
      "commonMistake": "Relying solely on one indicator without considering the broader market context can lead to misinformed trading decisions.",
      "quickNote": "Leverage technical analysis to enhance expectancy in gold trading.",
      "mentorText": "Use technical indicators as your guide. They provide insights into market conditions, helping you make decisions that align with your expectancy goals.",
      "mentorAnalogy": "Think of technical analysis like a navigation system for a ship. Just as navigators use charts and instruments to steer safely, traders use indicators to navigate market conditions."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Market Sentiment Analysis in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M8.2-gold-C5 -->\n### Core Scenario: Understanding Market Sentiment in Gold Trading\nMarket sentiment significantly impacts gold prices and trading expectancy. This card examines **how to analyze and incorporate sentiment indicators into your trading strategy**.\n\n* **Sentiment Indicators**: Utilize tools such as the Commitment of Traders (COT) report and sentiment surveys to gauge market positioning. For instance, if the COT report shows a high level of speculative long positions in gold, it may indicate overbought conditions.\n* **News Impact Assessment**: Monitor geopolitical events and economic data releases that influence gold prices. For example, a sudden escalation in geopolitical tensions may lead to a spike in gold prices, affecting your expectancy calculations.\n* **Contrarian Approach**: Consider adopting a contrarian stance when sentiment indicators are excessively bullish or bearish. If sentiment is overwhelmingly positive, such as during a rally to $2,000/oz, reassess your position for potential reversals.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        },
        {
          "term": "Commitment of Traders (COT)",
          "definition": "A report published by the CFTC that shows the positioning of traders in various futures markets."
        }
      ],
      "whyThisMatters": "Incorporating sentiment analysis allows traders to align their strategies with market psychology, enhancing the accuracy of expectancy calculations.",
      "realLifeExample": "During the FOMC meeting on March 15, 2023, gold prices surged from $1,850 to $1,900 as market sentiment shifted due to dovish signals from the Fed.",
      "commonMistake": "Traders often ignore sentiment indicators, leading to misaligned expectations and poor risk management.",
      "quickNote": "Sentiment analysis is critical for aligning trading strategies with market psychology.",
      "mentorText": "When assessing gold, always consider what the broader market is feeling. If everyone is bullish, it might be time to ask why and whether the price can sustain that optimism.",
      "mentorAnalogy": "Think of market sentiment like weather patterns; just as a pilot checks weather forecasts before takeoff, you must evaluate sentiment trends before entering a trade."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Strategic Development for Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M8.2-gold-C6 -->\n### Core Scenario: Developing Gold Trading Strategies\nCreating effective trading strategies for gold requires a focus on expectancy principles. This card discusses **how to formulate strategies that prioritize long-term profitability**.\n\n* **Expectancy Calculation**: Calculate expectancy by evaluating the average win and loss per trade. For example, if your average win is $300 and your average loss is $150, your expectancy is (0.67 * 300) - (0.33 * 150) = $150 per trade.\n* **Risk-Reward Ratio**: Establish a minimum risk-reward ratio of 1:2. If you set a stop-loss at $1,850, aim for a target of at least $1,900 to ensure that your potential gains outweigh your risks.\n* **Backtesting Strategies**: Rigorously backtest your strategies over different market conditions. For instance, a strategy that performed well during a bull market may need adjustments for a bear market scenario.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average amount a trader can expect to win or lose per trade."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Aligning trading strategies with expectancy principles enhances the likelihood of achieving sustainable profitability over time.",
      "realLifeExample": "A trader develops a strategy that involves buying gold at $1,850 with a target of $1,900 and a stop-loss at $1,840, resulting in a favorable risk-reward ratio.",
      "commonMistake": "Traders often focus on short-term gains without considering the overall expectancy of their strategies.",
      "quickNote": "Focus on long-term expectancy rather than short-term outcomes in strategy development.",
      "mentorText": "When crafting your gold strategy, always think about the long game. Your goal is to ensure that your wins consistently outweigh your losses over time.",
      "mentorAnalogy": "Developing a trading strategy is like designing an aircraft; it requires meticulous planning and testing to ensure it can withstand various conditions and still perform optimally."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "practice",
    "title": "Simulating Gold Trading Scenarios",
    "label": "Gold Track",
    "body": "<!-- M8.2-gold-C7 -->\n### Core Scenario: Practical Scenarios for Gold Trading\nEngaging in simulated trading scenarios around FOMC events helps solidify expectancy concepts. This card provides **real-time decision-making practice**.\n\n* **Scenario Analysis**: Analyze a hypothetical situation where the FOMC announces a rate cut. Determine how this might impact gold prices and your trading strategy. For example, if gold is trading at $1,850, you may expect a bullish reaction leading to a target of $1,900.\n* **Expectancy Application**: Calculate the expectancy of entering a long position at $1,850 with a stop-loss at $1,830 and a target at $1,900. This translates to an expectancy of $200 per trade based on the risk-reward ratio.\n* **Decision-Making Framework**: Use a structured decision-making framework to evaluate whether to enter the trade based on your expectancy calculations and market sentiment at the time of the FOMC announcement.",
    "context": {
      "keyTerms": [
        {
          "term": "FOMC",
          "definition": "The Federal Open Market Committee, responsible for setting monetary policy in the U.S."
        },
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a risk-free environment."
        }
      ],
      "whyThisMatters": "Practicing scenarios allows traders to apply expectancy concepts in real-time, enhancing decision-making skills under pressure.",
      "realLifeExample": "In a simulation, a trader anticipates a bullish move in gold following the FOMC's dovish stance, entering a long position at $1,850 and targeting $1,900.",
      "commonMistake": "Traders often fail to apply expectancy calculations in live scenarios, leading to impulsive decisions.",
      "quickNote": "Simulated scenarios enhance your ability to apply expectancy concepts in real-time trading.",
      "mentorText": "When faced with a major announcement, always revert to your expectancy calculations. They should guide your decisions, not emotions.",
      "mentorAnalogy": "Simulating trades is akin to a flight simulator for pilots; it prepares you for real-life scenarios without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are considering a long position in gold at $1,850 following a dovish FOMC announcement. Your stop-loss is at $1,830, and your target is $1,900. What is your expectancy?",
      "options": [
        {
          "id": "0",
          "text": "$200",
          "isCorrect": true,
          "feedback": "Correct. Your expectancy is calculated as (0.67 * 300) - (0.33 * 150) = $200."
        },
        {
          "id": "1",
          "text": "$150",
          "isCorrect": false,
          "feedback": "Incorrect. Recalculate using the risk-reward ratio to find the correct expectancy."
        },
        {
          "id": "2",
          "text": "$100",
          "isCorrect": false,
          "feedback": "Incorrect. Ensure you are considering both potential gains and losses."
        },
        {
          "id": "3",
          "text": "$50",
          "isCorrect": false,
          "feedback": "Incorrect. Review your calculations for expectancy based on your entry and exit points."
        }
      ]
    },
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "summary",
    "title": "Key Concepts of Expectancy in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M8.2-gold-C8 -->\n### Core Scenario: Summary of Gold Expectancy Concepts\nThis card summarizes the essential concepts related to expectancy in gold trading. Understanding these principles is vital for effective risk management and strategic planning.\n\n* **Risk Management**: Emphasize the importance of maintaining a risk-reward ratio of at least 1:2 to ensure long-term profitability. This principle helps mitigate losses and enhances expectancy.\n* **Expectancy Framework**: Reiterate the expectancy formula: (Win Rate * Average Win) - (Loss Rate * Average Loss). This framework allows traders to assess the viability of their strategies objectively.\n* **Continuous Evaluation**: Encourage ongoing evaluation of trading strategies against market conditions and sentiment. Regular adjustments based on performance metrics are crucial for maintaining a favorable expectancy.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the efficiency and success of trading strategies."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces their application in real trading scenarios, ensuring traders remain focused on expectancy-driven strategies.",
      "realLifeExample": "A trader reviews their performance metrics after a quarter, adjusting their strategies based on a calculated expectancy of $150 per trade.",
      "commonMistake": "Traders often neglect to revisit and adjust their strategies based on market changes, leading to declining performance.",
      "quickNote": "Regularly evaluate your strategies against expectancy principles for sustained success.",
      "mentorText": "Always keep your expectancy calculations at the forefront of your trading. They are your compass in the market, guiding your decisions and adjustments.",
      "mentorAnalogy": "Think of expectancy as the fuel gauge in a car; without monitoring it, you risk running out of fuel on your journey."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  }
];
