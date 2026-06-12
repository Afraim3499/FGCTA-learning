import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "CME Gap Analysis in Crypto Trading",
    "label": "Crypto Track",
    "body": "### CME Gap Analysis: Understanding Market Dynamics\nCME gaps occur when the market closes and reopens at a different price level, creating a gap in the price chart. Recognizing these gaps is essential for strategic positioning in cryptocurrency trading.\n\n* **Identifying CME Gaps**: Gaps typically form during weekends when the CME is closed, and can be identified on daily charts by comparing the last closing price on Friday to the opening price on Sunday.\n* **Gap Fill Probability**: Statistically, gaps have a high probability of being filled within a few trading sessions, making them critical for setting entry and exit points.\n* **Market Sentiment Analysis**: Monitor market sentiment and volume around gap occurrences to gauge potential price movements and validate trading strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "CME Gap",
          "definition": "A price discrepancy on a chart that occurs when the market closes and reopens at a different price level."
        }
      ],
      "whyThisMatters": "Understanding CME gaps allows traders to anticipate price movements and adjust their strategies accordingly, enhancing decision-making in volatile markets.",
      "realLifeExample": "On a Sunday at 6:00 PM EST, Bitcoin opened at $45,000 after closing at $42,000 the previous Friday, creating a $3,000 gap that traders can exploit for potential profit.",
      "commonMistake": "Failing to account for the gap's fill probability can lead to missed opportunities or unnecessary losses.",
      "quickNote": "CME gaps are critical indicators of potential price movements in crypto trading.",
      "mentorText": "When analyzing CME gaps, always look for the last closing price and the opening price to determine your next move. Gaps can provide you with clear entry points if you act quickly.",
      "mentorAnalogy": "Think of CME gaps like an aircraft taking off and landing; the space between takeoff and landing represents the gap, and understanding this helps you predict the flight path."
    },
    "taskData": null,
    "visualKey": "crypto-cex-tp"
  },
  {
    "type": "concept",
    "title": "Understanding Perpetual Funding Settlements",
    "label": "Crypto Track",
    "body": "### Perpetual Funding Settlements: Market Mechanics\nPerpetual funding settlements are periodic payments exchanged between long and short positions in perpetual contracts. Understanding these settlements is crucial for effective Time & Price analysis in crypto markets.\n\n* **Funding Rate Calculation**: The funding rate is determined by the difference between the perpetual contract price and the spot price, typically calculated every 8 hours, impacting trader profitability.\n* **Impact on Positioning**: A positive funding rate indicates that long positions pay shorts, which can lead to increased selling pressure, while a negative rate can encourage buying pressure.\n* **Market Sentiment Reflection**: Monitoring funding rates can provide insights into market sentiment, as extreme rates may indicate over-leveraging and potential reversals.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Funding Rate",
          "definition": "The periodic payment exchanged between long and short positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Grasping the implications of funding settlements allows traders to make informed decisions regarding their positions and risk management.",
      "realLifeExample": "If the funding rate for Ethereum perpetual contracts is +0.05% at 8:00 AM EST, long positions will pay shorts, potentially leading to a price drop as traders adjust their strategies.",
      "commonMistake": "Ignoring the funding rate can result in unexpected losses, especially during high volatility periods.",
      "quickNote": "Funding rates are essential for understanding the dynamics of perpetual contracts in crypto trading.",
      "mentorText": "Always check the funding rate before entering a position. It can significantly affect your profitability and risk exposure.",
      "mentorAnalogy": "Consider perpetual funding like a toll on a highway; understanding the cost helps you decide when to travel and which route to take."
    },
    "taskData": null,
    "visualKey": "crypto-cex-tp"
  },
  {
    "type": "concept",
    "title": "Scenario Planning for CME Gaps",
    "label": "Crypto Track",
    "body": "### Scenario Planning: Navigating CME Gaps\nScenario planning involves preparing for potential market movements following CME gaps. This process is essential for effective Time & Price analysis in crypto trading.\n\n* **Pre-Gap Analysis**: Before a gap occurs, analyze historical data to identify patterns in price movements following similar gaps, focusing on volatility and volume.\n* **Post-Gap Strategies**: Develop strategies for both filling and not filling scenarios, including setting stop-loss orders and profit targets based on historical gap performance.\n* **Market Reaction Monitoring**: After a gap, closely monitor price action and volume to determine market sentiment and adjust your strategy accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Planning",
          "definition": "A strategic process that prepares traders for potential market movements based on historical data."
        }
      ],
      "whyThisMatters": "Effective scenario planning enhances a trader's ability to react swiftly and strategically to market changes following CME gaps.",
      "realLifeExample": "After a CME gap on Bitcoin from $50,000 to $48,000, a trader anticipates a fill scenario and sets a buy order at $48,500 with a stop-loss at $47,500, capitalizing on historical gap behavior.",
      "commonMistake": "Neglecting to plan for both gap fill and non-fill scenarios can lead to significant losses.",
      "quickNote": "Scenario planning is vital for navigating the complexities of CME gaps in crypto trading.",
      "mentorText": "Always have a plan for both outcomes when a CME gap occurs. This foresight can protect your capital and maximize your opportunities.",
      "mentorAnalogy": "Think of scenario planning like a pilot preparing for takeoff; they consider various weather conditions and have contingency plans in place."
    },
    "taskData": null,
    "visualKey": "crypto-cex-tp"
  },
  {
    "type": "concept",
    "title": "Developing Crypto Trading Strategies",
    "label": "Crypto Track",
    "body": "### Developing Strategies: Leveraging Time & Price\nEffective trading strategies in crypto must leverage Time & Price analysis to navigate the unique market dynamics. This approach is essential for maximizing profitability.\n\n* **Time-Based Entry Points**: Identify optimal entry points based on timeframes that align with market volatility, such as entering positions during high-volume trading hours.\n* **Price Action Analysis**: Utilize price action patterns in conjunction with Time & Price concepts to determine potential support and resistance levels, enhancing trade accuracy.\n* **Risk Management Integration**: Incorporate risk management techniques, such as position sizing and stop-loss orders, tailored to the volatility of the crypto market to protect capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action Analysis",
          "definition": "The study of historical price movements to inform trading decisions."
        }
      ],
      "whyThisMatters": "Developing robust trading strategies that incorporate Time & Price analysis is critical for navigating the volatile crypto landscape effectively.",
      "realLifeExample": "During the peak trading hours of 1:00 PM to 3:00 PM EST, a trader identifies a bullish price action pattern on Litecoin and enters a long position at $150, setting a target of $160 based on historical resistance levels.",
      "commonMistake": "Failing to adapt strategies to the unique volatility of the crypto market can lead to poor performance.",
      "quickNote": "Effective crypto trading strategies must integrate Time & Price analysis for optimal results.",
      "mentorText": "When developing your strategy, always consider the time of day and current market conditions. This will help you make informed decisions.",
      "mentorAnalogy": "Creating a trading strategy is like designing a building; you must consider the environment and structural integrity to ensure it stands strong."
    },
    "taskData": null,
    "visualKey": "crypto-cex-tp"
  },
  {
    "type": "concept",
    "title": "Identifying Pitfalls in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Common Crypto Trading Pitfalls\nCrypto markets present unique challenges that can lead to significant losses if not properly managed. This card outlines **specific pitfalls related to Time & Price** that traders must recognize and avoid.\n\n* **FOMO and Timing Errors**: Traders often enter positions out of fear of missing out, leading to poor timing. Avoid entering trades during high volatility periods, such as right after major news releases, which can distort price action.\n* **Ignoring Time Frames**: Focusing solely on short-term price movements can result in missed opportunities. Always analyze multiple time frames to understand the broader market context before executing trades.\n* **Overtrading**: The allure of rapid gains can lead to excessive trading. Establish a clear trading plan with defined entry and exit points to prevent emotional decision-making and reduce the risk of overexposure.",
    "context": {
      "keyTerms": [
        {
          "term": "FOMO",
          "definition": "Fear of missing out; a psychological trigger causing impulsive trading decisions."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Overtrading",
          "definition": "Executing too many trades in a short period, often leading to losses."
        }
      ],
      "whyThisMatters": "Recognizing these pitfalls is essential for maintaining discipline and improving overall trading performance in the volatile crypto landscape.",
      "realLifeExample": "During the Ethereum surge on May 12, 2021, many traders entered positions at $4,300 due to FOMO, only to see prices drop to $3,000 within hours, resulting in significant losses.",
      "commonMistake": "Many traders neglect to analyze the impact of major news events on price movements, leading to poorly timed entries.",
      "quickNote": "Awareness of common pitfalls can significantly enhance trading discipline.",
      "mentorText": "You must be vigilant about the psychological traps that crypto trading presents. Stick to your plan and avoid impulsive decisions, especially during volatile periods.",
      "mentorAnalogy": "Think of trading like navigating a busy airport. Just as pilots must avoid crowded airspace and follow flight paths, traders must steer clear of emotional decisions and stick to their trading strategies."
    },
    "taskData": null,
    "visualKey": "crypto-cex-tp"
  },
  {
    "type": "concept",
    "title": "Market Analysis Techniques for Crypto",
    "label": "Crypto Track",
    "body": "### Effective Market Analysis Techniques\nUtilizing robust market analysis techniques is critical for informed decision-making in crypto trading. This card emphasizes **the integration of Time & Price concepts** into analysis strategies.\n\n* **Technical Analysis**: Use chart patterns, candlestick formations, and indicators like RSI and MACD to gauge market sentiment. Pay attention to key support and resistance levels that correlate with significant time intervals.\n* **Fundamental Analysis**: Assess the underlying value of cryptocurrencies by analyzing project developments, regulatory news, and market trends. Timing your trades around major announcements can enhance entry and exit precision.\n* **Sentiment Analysis**: Monitor social media trends and news sentiment to gauge market psychology. Timing trades based on sentiment shifts can provide an edge in volatile environments.",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Analysis",
          "definition": "The study of past market data, primarily price and volume, to forecast future price movements."
        },
        {
          "term": "Fundamental Analysis",
          "definition": "Evaluating a cryptocurrency's intrinsic value based on external factors."
        },
        {
          "term": "Sentiment Analysis",
          "definition": "Assessing the mood of the market through social media and news."
        }
      ],
      "whyThisMatters": "Integrating various analysis techniques allows traders to make more informed decisions, enhancing their ability to navigate the complexities of crypto markets.",
      "realLifeExample": "Before the Bitcoin price drop on September 7, 2021, sentiment analysis indicated a surge in negative sentiment on Twitter, allowing traders to exit positions around $52,000 before the decline to $43,000.",
      "commonMistake": "Traders often rely solely on technical indicators without considering fundamental news, leading to missed opportunities or unexpected losses.",
      "quickNote": "Diverse analysis techniques provide a comprehensive view of market dynamics.",
      "mentorText": "You need to combine different analysis methods to get a full picture of the market. Don’t just rely on one technique; use them in conjunction to make informed decisions.",
      "mentorAnalogy": "Imagine a chef preparing a complex dish. Just as a chef combines various ingredients to achieve the perfect flavor, traders must blend technical, fundamental, and sentiment analysis for optimal results."
    },
    "taskData": null,
    "visualKey": "crypto-cex-tp"
  },
  {
    "type": "practice",
    "title": "Executing Trades with Time & Price Awareness",
    "label": "Crypto Track",
    "body": "### Timing Your Trades Effectively\nExecuting trades with a strong awareness of Time & Price dynamics is crucial in crypto markets. This card emphasizes **best practices for timing entries and exits** to maximize trading performance.\n\n* **Entry Timing**: Identify optimal entry points by analyzing price action around key support and resistance levels. Look for confirmation signals such as bullish engulfing candles or breakouts on the hourly chart.\n* **Exit Strategies**: Establish clear exit points based on trailing stops or predetermined profit targets. Monitor price behavior as it approaches these levels to adapt to market conditions.\n* **Session Awareness**: Be mindful of market sessions and their impact on liquidity. For example, executing trades during the overlap of the London and New York sessions can enhance volatility and provide better opportunities.",
    "context": {
      "keyTerms": [
        {
          "term": "Support and Resistance",
          "definition": "Price levels where a cryptocurrency tends to stop and reverse."
        },
        {
          "term": "Trailing Stop",
          "definition": "A stop order that moves with the market price to lock in profits."
        },
        {
          "term": "Market Sessions",
          "definition": "Specific periods when different global markets are open for trading."
        }
      ],
      "whyThisMatters": "Effective timing of trades can significantly influence profitability and risk management in the fast-paced crypto environment.",
      "realLifeExample": "A trader executed a long position on Litecoin at $180 during the New York session, just after a bullish breakout from resistance at $175, leading to a profit target of $220 within three days.",
      "commonMistake": "Failing to adapt exit strategies based on changing market conditions can lead to missed profit opportunities.",
      "quickNote": "Timing is essential; effective entry and exit strategies can maximize returns.",
      "mentorText": "Always be strategic about when you enter and exit trades. Use price action and market conditions to guide your decisions, not just gut feelings.",
      "mentorAnalogy": "Think of a conductor leading an orchestra. Just as a conductor times each section's entry for harmony, traders must time their entries and exits to achieve a successful trading performance."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe Bitcoin approaching a key resistance level of $45,000 during the New York session. What is the best action to take?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position immediately without confirmation.",
          "isCorrect": false,
          "feedback": "Entering without confirmation can lead to losses if the price reverses at resistance."
        },
        {
          "id": "1",
          "text": "Wait for a bullish confirmation signal before entering a long position.",
          "isCorrect": true,
          "feedback": "Waiting for confirmation reduces the risk of false breakouts and enhances trade accuracy."
        },
        {
          "id": "2",
          "text": "Set a trailing stop at $44,500 and enter a short position.",
          "isCorrect": false,
          "feedback": "Entering a short position without clear bearish signals can result in unnecessary losses."
        },
        {
          "id": "3",
          "text": "Ignore the resistance level and enter a long position based on previous gains.",
          "isCorrect": false,
          "feedback": "Ignoring resistance can lead to poor timing and potential losses."
        }
      ]
    },
    "visualKey": "crypto-cex-tp"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Trading Insights",
    "label": "Crypto Track",
    "body": "### Key Insights from Time & Price Analysis\nSynthesizing Time & Price concepts is vital for developing effective trading strategies in crypto markets. This card summarizes **the essential insights gained** throughout the module.\n\n* **Understanding Market Dynamics**: Recognizing the interplay between time and price helps traders anticipate market movements and make informed decisions.\n* **Avoiding Common Pitfalls**: Awareness of psychological traps and market behaviors can enhance trading discipline and performance.\n* **Effective Trade Execution**: Mastering entry and exit strategies based on Time & Price dynamics is crucial for maximizing profitability and managing risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Dynamics",
          "definition": "The forces that influence price movements in the market."
        },
        {
          "term": "Psychological Traps",
          "definition": "Cognitive biases that can lead to poor trading decisions."
        },
        {
          "term": "Trade Execution",
          "definition": "The process of completing a buy or sell order in the market."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these insights equips traders with the tools necessary for success in the volatile crypto landscape.",
      "realLifeExample": "Traders who recognized the importance of timing during the Bitcoin dip on July 20, 2021, were able to capitalize on the subsequent recovery, purchasing at $29,000 and selling at $42,000 within weeks.",
      "commonMistake": "Many traders fail to integrate Time & Price analysis into their overall strategy, leading to inconsistent results.",
      "quickNote": "Synthesizing insights from Time & Price enhances strategic trading capabilities.",
      "mentorText": "You must integrate all the insights you've learned into a cohesive strategy. This will not only improve your trading performance but also build your confidence in decision-making.",
      "mentorAnalogy": "Consider a seasoned architect who combines various design principles to create a structurally sound building. Similarly, traders must integrate multiple insights to construct a robust trading strategy."
    },
    "taskData": null,
    "visualKey": "crypto-cex-tp"
  }
];
