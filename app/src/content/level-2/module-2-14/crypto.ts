import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Funding Rate Settlement Times",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Perpetual Funding Rate Dynamics\nPerpetual contracts in crypto markets have specific funding rate settlement times that can significantly impact market liquidity and price behavior. This card details **how these settlement times influence execution strategies**.\n\n* **Settlement Schedule**: Funding rates typically settle every 8 hours, specifically at 0:00, 8:00, and 16:00 UTC. Execution plans should be aligned with these times to capitalize on increased market activity.\n* **Liquidity Surge**: Expect a liquidity spike approximately 15 minutes before settlement times as traders adjust positions. This is critical for executing limit orders effectively.\n* **Price Fluctuation**: Historical data shows that price volatility can increase by up to 5% during settlement periods. Traders must be prepared for rapid price movements to avoid slippage.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic fee paid between long and short positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Understanding funding rate settlement times is essential for executing trades during high liquidity periods, maximizing potential gains.",
      "realLifeExample": "On Binance, the BTCUSDT funding rate settles at 8:00 AM UTC. Traders observed a 4% price increase in the 30 minutes leading up to this time, indicating a strong liquidity influx.",
      "commonMistake": "Failing to account for the 15-minute pre-settlement liquidity surge can lead to missed execution opportunities.",
      "quickNote": "Align execution plans with funding rate settlement times for optimal market engagement.",
      "mentorText": "Focus on the funding rate schedule. If you know when the market is going to be most active, you can position yourself to take advantage of that liquidity.",
      "mentorAnalogy": "Think of funding rate settlements like rush hour traffic patterns; knowing when the roads will be congested allows you to plan your route for smoother travel."
    },
    "taskData": null,
    "visualKey": "crypto-funding-settlement-times"
  },
  {
    "type": "concept",
    "title": "Planning Execution Around Volatility Windows",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Volatility Window Strategies\nVolatility windows around funding rate settlements can create both opportunities and risks. This card focuses on **strategically timing trades to align with these volatility spikes**.\n\n* **Pre-Settlement Positioning**: Enter positions 10-15 minutes before funding settlements to capture potential price movements as traders react to the upcoming settlement.\n* **Post-Settlement Analysis**: Monitor price behavior immediately after settlements, as markets often experience a retracement or continuation of the prior trend, providing additional execution opportunities.\n* **Risk Management**: Implement tighter stop-loss orders during volatility windows to mitigate potential losses from rapid price swings, which can exceed 3% in either direction.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Window",
          "definition": "A period of increased price movement and trading activity surrounding specific market events."
        }
      ],
      "whyThisMatters": "Planning trades around volatility windows can enhance execution efficiency and improve risk-adjusted returns.",
      "realLifeExample": "During the 8:00 AM UTC funding settlement on ETHUSDT, the price surged by 6% in the 20 minutes following the settlement, providing a clear opportunity for traders who positioned themselves beforehand.",
      "commonMistake": "Ignoring the volatility that accompanies funding settlements can lead to poorly timed entries and exits.",
      "quickNote": "Time your trades to coincide with volatility windows for improved execution outcomes.",
      "mentorText": "You need to be ahead of the curve. Position yourself before the volatility hits, and be ready to react immediately after the settlement.",
      "mentorAnalogy": "Consider a surgeon preparing for a critical operation; timing and precision are key to ensuring a successful outcome."
    },
    "taskData": null,
    "visualKey": "crypto-funding-settlement-times"
  },
  {
    "type": "concept",
    "title": "Market Reactions to Funding Settlements",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Analyzing Market Reactions\nMarket reactions to funding settlements can provide insights into potential price movements. This card teaches **how to analyze these reactions for informed execution strategies**.\n\n* **Price Patterns**: Analyze historical price movements post-settlement to identify patterns. For example, BTCUSDT often retraces 50% of its pre-settlement move within the first hour after settlement.\n* **Order Book Dynamics**: Monitor changes in the order book immediately following settlements. A significant increase in buy orders can indicate bullish sentiment, while a surge in sell orders may signal bearish pressure.\n* **Sentiment Analysis**: Utilize social media and news sentiment analysis tools to gauge trader sentiment around funding settlements, as this can influence market behavior significantly.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Reaction",
          "definition": "The response of market prices and volumes to specific events or announcements."
        }
      ],
      "whyThisMatters": "Understanding market reactions allows traders to anticipate price movements and adjust their execution strategies accordingly.",
      "realLifeExample": "After the 0:00 UTC funding settlement on XRPUSDT, a 3% price drop occurred within 30 minutes, followed by a recovery, illustrating the importance of monitoring market reactions.",
      "commonMistake": "Failing to analyze post-settlement price patterns can lead to missed opportunities or unexpected losses.",
      "quickNote": "Analyze market reactions to funding settlements to refine execution strategies.",
      "mentorText": "You need to watch how the market reacts after settlements. This is where you can find the clues to your next move.",
      "mentorAnalogy": "Like a weather forecaster interpreting storm patterns, you must analyze market signals to predict the next price movement."
    },
    "taskData": null,
    "visualKey": "crypto-funding-settlement-times"
  },
  {
    "type": "concept",
    "title": "Timing Execution in the Crypto Market",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Timing Strategies\nEffective timing of execution in the crypto market is crucial, especially around funding rate settlements. This card outlines **best practices for timing trades to maximize efficiency**.\n\n* **Execution Windows**: Identify optimal execution windows, typically the 30 minutes before and after funding settlements, to ensure participation in heightened market activity.\n* **Adaptive Strategies**: Adjust execution strategies based on real-time market conditions. For example, if volatility spikes unexpectedly, consider using market orders instead of limit orders to ensure execution.\n* **Time Zone Awareness**: Be cognizant of different time zones affecting trading activity. For instance, Asian markets may react differently to US-based funding settlements due to the time difference.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Window",
          "definition": "A specific timeframe during which trades are executed to optimize performance."
        }
      ],
      "whyThisMatters": "Proper timing of trades can significantly enhance execution quality and overall trading performance.",
      "realLifeExample": "During the 4:00 PM UTC funding settlement on LTCUSDT, traders who executed within the 30-minute window captured a 4% price increase, while those who waited missed the opportunity.",
      "commonMistake": "Overlooking the importance of timing can lead to suboptimal execution and increased trading costs.",
      "quickNote": "Optimize trade timing around funding rate settlements for better execution outcomes.",
      "mentorText": "Timing is everything. You need to be in the market when the action is happening, especially around funding settlements.",
      "mentorAnalogy": "Like a conductor leading an orchestra, you must time your actions precisely to create a harmonious execution strategy."
    },
    "taskData": null,
    "visualKey": "crypto-funding-settlement-times"
  },
  {
    "type": "concept",
    "title": "Risk Management Strategies for Crypto Execution",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Funding Rate Settlement Risk Management\nEffective risk management is essential during funding rate settlements due to the volatility inherent in the crypto market. This card outlines **strategies to mitigate risk when executing trades during these critical periods**.\n\n* **Position Sizing**: Limit exposure to 1-2% of total capital per trade during funding rate settlements to minimize potential losses from sudden price swings.\n* **Stop-Loss Placement**: Set stop-loss orders at least 2% beyond the last swing high or low to account for high volatility and prevent premature exits.\n* **Liquidity Assessment**: Monitor liquidity levels in the market; avoid executing trades if the order book depth is less than 50% of the average during the last 24 hours to reduce slippage risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The interest rate paid by one party to another for holding a leveraged position in a cryptocurrency."
        }
      ],
      "whyThisMatters": "Understanding risk management strategies during funding rate settlements is crucial for maintaining capital and ensuring long-term trading viability in the crypto market.",
      "realLifeExample": "During the funding rate settlement for BTCUSD on a Friday at 4:00 PM EST, the price fluctuated from $30,000 to $29,500 within minutes. A trader using a 2% stop-loss would have avoided significant losses by setting their stop-loss appropriately.",
      "commonMistake": "Traders often underestimate the impact of volatility during funding rate settlements, leading to excessive losses.",
      "quickNote": "Effective risk management during funding rate settlements can protect capital from extreme volatility.",
      "mentorText": "When executing trades during funding rate settlements, always prioritize risk management. Position sizing and stop-loss orders are your first line of defense against volatility.",
      "mentorAnalogy": "Think of trading during funding rate settlements like a pilot navigating through turbulence; proper adjustments and precautions can prevent a crash."
    },
    "taskData": null,
    "visualKey": "crypto-funding-settlement-times"
  },
  {
    "type": "concept",
    "title": "Practicing Crypto Session Execution",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Key Funding Rate Settlement Practice\nExecuting trades during funding rate settlements requires precision and practice. This card focuses on **engaging in practical exercises to reinforce execution strategies**.\n\n* **Simulated Trading**: Use a demo account to practice executing trades during actual funding rate settlements, focusing on timing and order placement.\n* **Review Historical Data**: Analyze past funding rate settlement data to identify patterns and optimal entry/exit points for various cryptocurrencies.\n* **Execution Plan Development**: Create a detailed execution plan for each funding rate settlement, including entry points, stop-loss levels, and profit targets based on historical volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading in a risk-free environment using virtual funds."
        }
      ],
      "whyThisMatters": "Practical exercises enhance the trader's ability to execute effectively during high-stakes funding rate settlements, improving overall performance.",
      "realLifeExample": "In a simulated environment, a trader practices executing a long position on ETHUSD during a funding rate settlement at 3:00 AM EST, successfully navigating a 5% price drop by adhering to their execution plan.",
      "commonMistake": "Failing to simulate real market conditions can lead to poor execution during actual funding rate settlements.",
      "quickNote": "Regular practice during funding rate settlements sharpens execution skills and improves confidence.",
      "mentorText": "Engage in simulated trading to refine your execution strategies. The more you practice, the more prepared you'll be when the real funding rate settlements occur.",
      "mentorAnalogy": "Just as a surgeon practices procedures in a simulation before operating on patients, traders must practice their execution strategies before facing real market conditions."
    },
    "taskData": null,
    "visualKey": "crypto-funding-settlement-times"
  },
  {
    "type": "practice",
    "title": "Summary of Crypto Session Strategies",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Comprehensive Session Strategies Overview\nThis card summarizes the key strategies and execution plans discussed throughout the Crypto track, providing a **comprehensive overview for effective trading**.\n\n* **Session Timing**: Prioritize execution during high-volume session openings, particularly during funding rate settlements, to capitalize on liquidity.\n* **Risk Management**: Implement strict risk management protocols, including position sizing and stop-loss orders, to safeguard capital during volatile periods.\n* **Market Analysis**: Continuously analyze market conditions and historical data to refine execution plans and adapt to changing volatility patterns.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Timing",
          "definition": "The strategic timing of trades to coincide with high-volume market activity."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of session strategies is vital for executing trades effectively and maximizing profitability in the crypto market.",
      "realLifeExample": "A trader executes a plan during the BTC funding rate settlement at 4:00 PM EST, leveraging high liquidity and successfully capturing a 3% price movement.",
      "commonMistake": "Overlooking the importance of session timing can lead to missed opportunities and increased risk.",
      "quickNote": "Mastering session strategies enhances execution effectiveness and trading outcomes.",
      "mentorText": "Review these strategies regularly. A solid grasp of session timing and risk management will set you apart in the crypto market.",
      "mentorAnalogy": "Like a seasoned chef timing the preparation of multiple dishes, successful trading requires precise execution during key market sessions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is the most critical factor to consider when executing trades during funding rate settlements?",
      "options": [
        {
          "id": "0",
          "text": "Market liquidity",
          "isCorrect": true,
          "feedback": "Market liquidity is essential during funding rate settlements, as it impacts execution speed and slippage."
        },
        {
          "id": "1",
          "text": "Time of day",
          "isCorrect": false,
          "feedback": "While time of day matters, liquidity is the more critical factor during funding rate settlements."
        },
        {
          "id": "2",
          "text": "Trading volume",
          "isCorrect": false,
          "feedback": "Trading volume is important, but liquidity directly affects execution quality."
        },
        {
          "id": "3",
          "text": "News events",
          "isCorrect": false,
          "feedback": "News events can impact the market, but liquidity is paramount during funding rate settlements."
        }
      ]
    },
    "visualKey": "crypto-funding-settlement-times"
  },
  {
    "type": "summary",
    "title": "Crypto Session Timing Integration",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Advanced Session Windows Application\nThis card delves into advanced applications of session window concepts specific to crypto trading, focusing on **edge cases and professional-level nuances**.\n\n* **Market Anomalies**: Identify and adapt to anomalies during funding rate settlements, such as unexpected price spikes or drops caused by low liquidity.\n* **Algorithmic Execution**: Utilize algorithmic trading strategies to automate execution during volatile sessions, ensuring adherence to predefined risk parameters.\n* **Cross-Market Correlation**: Analyze correlations between crypto assets and traditional markets during funding rate settlements to anticipate potential price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Algorithmic Trading",
          "definition": "Using algorithms to automate trading decisions based on predefined criteria."
        }
      ],
      "whyThisMatters": "Advanced understanding of session windows allows traders to navigate complex market conditions and optimize execution strategies.",
      "realLifeExample": "During a funding rate settlement for LTCUSD at 5:00 PM EST, a trader uses an algorithm to execute a series of trades, successfully capitalizing on a 4% price movement while adhering to risk parameters.",
      "commonMistake": "Neglecting to consider market anomalies can lead to significant losses during funding rate settlements.",
      "quickNote": "Advanced applications of session strategies enhance adaptability and execution precision.",
      "mentorText": "Stay alert for market anomalies and leverage algorithmic trading to enhance your execution strategy during funding rate settlements.",
      "mentorAnalogy": "Like an architect adjusting plans based on unexpected site conditions, successful traders must adapt their strategies to evolving market dynamics."
    },
    "taskData": null,
    "visualKey": "crypto-funding-settlement-times"
  }
];
