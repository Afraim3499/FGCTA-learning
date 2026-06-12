import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Daily Forex Session Matrix",
    "label": "Forex Track",
    "body": "### Forex Session Coordination: Daily Forex Session Matrix\nThe daily Forex session matrix outlines the critical timing of the London and New York session openings. This card details **how to align execution plans with these high-volume periods**.\n\n* **Session Timing**: The London session opens at 3:00 AM EST, while the New York session begins at 8:00 AM EST. Execution plans should be structured to capitalize on the first 30 minutes of each session for optimal liquidity.\n* **Volume Analysis**: Monitor the average volume during these session openings. A spike in volume can indicate potential breakout opportunities, necessitating immediate execution strategies.\n* **Market Sentiment**: Assess the pre-session news releases and economic indicators. For example, if the UK GDP data is released at 4:30 AM EST, expect heightened volatility during the London open, which can be leveraged for entry points.",
    "context": {
      "keyTerms": [
        {
          "term": "London Session",
          "definition": "The period when the London Forex market is open, typically from 3:00 AM to 12:00 PM EST."
        },
        {
          "term": "New York Session",
          "definition": "The period when the New York Forex market is open, typically from 8:00 AM to 5:00 PM EST."
        }
      ],
      "whyThisMatters": "Understanding the session matrix enables traders to position themselves strategically for maximum liquidity and volatility.",
      "realLifeExample": "On a Tuesday at 8:00 AM EST, the EUR/USD pair shows a 50-pip movement within the first 15 minutes of the New York session due to strong employment data released at 8:30 AM EST.",
      "commonMistake": "Failing to account for the time zone differences can lead to missed opportunities during high-volume sessions.",
      "quickNote": "Align execution plans with the London and New York session openings for optimal trading conditions.",
      "mentorText": "You need to be ready to execute as the London session opens. The first 30 minutes can set the tone for the day, so have your plans in place.",
      "mentorAnalogy": "Think of this like a commercial flight schedule; just as pilots must be aware of takeoff and landing windows, traders must align their strategies with session openings."
    },
    "taskData": null,
    "visualKey": "forex-session-overlaps"
  },
  {
    "type": "concept",
    "title": "Strategies for the London Open",
    "label": "Forex Track",
    "body": "### Execution Strategy: London Open Dynamics\nThe London open presents unique market dynamics that can be exploited for profitable trades. This card covers **specific strategies tailored for the London session**.\n\n* **Breakout Strategy**: Utilize the first 15 minutes post-open to identify breakout patterns. For instance, if GBP/USD breaks above 1.4000 during this time, consider entering a long position with a tight stop-loss.\n* **News Reaction**: Be prepared for potential volatility from economic news releases. If UK inflation data is released at 4:30 AM EST, adjust your execution plan to account for rapid price movements.\n* **Liquidity Pools**: Focus on currency pairs with higher liquidity, such as EUR/USD and GBP/USD, as they tend to exhibit clearer price action during the London open, allowing for more precise entries.",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout Pattern",
          "definition": "A price movement that occurs when the price moves beyond a defined support or resistance level."
        },
        {
          "term": "Liquidity Pool",
          "definition": "A concentration of buy or sell orders at a specific price level."
        }
      ],
      "whyThisMatters": "Implementing targeted strategies during the London open can significantly enhance trade execution and profitability.",
      "realLifeExample": "On a Wednesday at 3:05 AM EST, GBP/USD breaks above 1.4000 following a positive retail sales report, resulting in a 30-pip gain within the first hour.",
      "commonMistake": "Overlooking the impact of news events can lead to unexpected losses during the London open.",
      "quickNote": "Implement breakout strategies and monitor news releases to capitalize on the London open.",
      "mentorText": "During the London open, focus on breakouts and be ready to react to news. This is where the market often makes its biggest moves.",
      "mentorAnalogy": "Executing trades during the London open is like a surgeon making precise incisions; timing and accuracy are critical for success."
    },
    "taskData": null,
    "visualKey": "forex-session-overlaps"
  },
  {
    "type": "concept",
    "title": "Execution Plans for NY Open",
    "label": "Forex Track",
    "body": "### Execution Strategy: New York Open Timing\nThe New York open is characterized by significant market activity and volatility. This card discusses **how to formulate execution plans specifically for this session**.\n\n* **Pre-Market Analysis**: Conduct a thorough analysis of overnight market movements and key economic reports scheduled for the New York session. For example, if Non-Farm Payroll data is expected at 8:30 AM EST, adjust your entry points accordingly.\n* **Order Types**: Utilize limit orders to enter trades at key levels identified during the pre-market analysis. If USD/JPY is trading at 110.50, set a buy limit at 110.60 to capture potential upward movement.\n* **Volatility Management**: Be aware of the increased volatility during the first hour of the New York session. Implement wider stop-loss orders to accommodate potential price swings, especially if significant news is released.",
    "context": {
      "keyTerms": [
        {
          "term": "Non-Farm Payroll",
          "definition": "A key economic indicator that measures the number of jobs added or lost in the U.S. economy."
        },
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a security at a specified price or better."
        }
      ],
      "whyThisMatters": "Effective execution plans during the New York open can lead to enhanced trading outcomes and risk management.",
      "realLifeExample": "On a Friday at 8:30 AM EST, the USD/CAD pair moves 40 pips within 10 minutes following the release of Non-Farm Payroll data, providing a clear entry opportunity.",
      "commonMistake": "Failing to adjust stop-loss levels for increased volatility can result in premature exits from trades.",
      "quickNote": "Formulate execution plans based on pre-market analysis and manage volatility effectively during the NY open.",
      "mentorText": "Prepare your execution plans well in advance of the New York open. The first hour can be chaotic, so know your levels and stick to your strategy.",
      "mentorAnalogy": "Think of executing trades during the NY open like a race car driver navigating a tight turn; precision and timing are essential to avoid crashes."
    },
    "taskData": null,
    "visualKey": "forex-session-overlaps"
  },
  {
    "type": "concept",
    "title": "Techniques for Overlap Execution",
    "label": "Forex Track",
    "body": "### Advanced Execution: Techniques for Session Overlaps\nSession overlaps present unique trading opportunities due to increased market activity. This card explores **advanced techniques for executing trades during these periods**.\n\n* **Cross-Session Strategies**: When the London and New York sessions overlap from 8:00 AM to 12:00 PM EST, focus on pairs like EUR/USD. For instance, if EUR/USD shows a bullish trend during this overlap, consider scaling into positions as momentum builds.\n* **Order Book Analysis**: Monitor the order book for significant buy and sell orders during overlaps. If you observe a large sell order at 1.2000 on EUR/USD, prepare to enter a short position if the price approaches that level.\n* **Volatility Breakouts**: Utilize volatility indicators to identify breakout opportunities during overlaps. If the ATR (Average True Range) spikes, it may signal a strong move, warranting immediate execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Cross-Session Strategy",
          "definition": "A trading approach that capitalizes on the overlap of two trading sessions."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A volatility indicator that measures market volatility by decomposing the entire range of an asset for that period."
        }
      ],
      "whyThisMatters": "Leveraging session overlaps can maximize trading opportunities and enhance execution efficiency.",
      "realLifeExample": "On a Monday from 8:00 AM to 9:00 AM EST, EUR/USD experiences a 60-pip movement due to increased trading volume as both sessions are active.",
      "commonMistake": "Ignoring the increased volatility during overlaps can lead to mismanaged trades and unexpected losses.",
      "quickNote": "Utilize advanced techniques to capitalize on trading opportunities during session overlaps.",
      "mentorText": "During session overlaps, you have a unique opportunity to capitalize on heightened activity. Be prepared to act quickly and decisively.",
      "mentorAnalogy": "Executing trades during session overlaps is like a conductor leading an orchestra; you must harmonize your actions with the market's rhythm to achieve the best performance."
    },
    "taskData": null,
    "visualKey": "forex-session-overlaps"
  },
  {
    "type": "concept",
    "title": "Impact of News Releases on Session Timing",
    "label": "Forex Track",
    "body": "### Forex Execution: Economic News and Session Timing\nEconomic news releases can significantly alter market conditions during trading sessions. This card details **how to adjust execution strategies based on news timing**.\n\n* **News Release Timing**: Always align your execution plans with the scheduled times of major economic indicators, such as Non-Farm Payrolls or CPI, which can lead to increased volatility and liquidity spikes.\n* **Market Reaction Window**: Anticipate a 30-minute window post-release where price action can be erratic; avoid placing new trades during this period unless you are capitalizing on volatility.\n* **Session Overlap Consideration**: Pay attention to overlapping sessions (e.g., London and New York) during news releases, as they typically amplify market reactions and liquidity.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Economic News Release",
          "definition": "Scheduled announcements of economic indicators that can influence market volatility."
        }
      ],
      "whyThisMatters": "Understanding the timing of news releases allows traders to optimize their execution strategies and mitigate risk during volatile periods.",
      "realLifeExample": "On the first Friday of the month, the USD experienced a 50-pip movement within 15 minutes of the 8:30 AM EST Non-Farm Payroll release, highlighting the need for precise timing in execution plans.",
      "commonMistake": "Traders often enter positions right before a news release without considering the potential for increased volatility and slippage.",
      "quickNote": "Align execution plans with economic news release schedules to optimize trading outcomes.",
      "mentorText": "When planning your trades, always check the economic calendar. If a major news release is scheduled, adjust your entry and exit points accordingly to avoid unexpected volatility.",
      "mentorAnalogy": "Think of trading during news releases like a pilot preparing for takeoff; they must account for weather conditions and air traffic to ensure a smooth flight."
    },
    "taskData": null,
    "visualKey": "forex-session-overlaps"
  },
  {
    "type": "concept",
    "title": "Liquidity Dynamics During Forex Sessions",
    "label": "Forex Track",
    "body": "### Forex Execution: Liquidity Dynamics in Trading Sessions\nLiquidity varies significantly across different Forex trading sessions. This card explores **how to leverage liquidity dynamics for optimal execution**.\n\n* **Peak Liquidity Hours**: Focus on executing trades during the first two hours of the London session (3:00 AM - 5:00 AM EST) when liquidity is at its highest, allowing for tighter spreads and better fills.\n* **Session Transition Effects**: Be aware of liquidity drops during session transitions (e.g., from London to New York); avoid placing new trades during these periods to minimize slippage risk.\n* **Volume Indicators**: Utilize volume indicators to assess liquidity; if the volume is below the 14-day average during your execution window, consider postponing your trades to avoid unfavorable conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Recognizing liquidity dynamics ensures that traders can execute their strategies effectively, minimizing costs and maximizing potential gains.",
      "realLifeExample": "During the London session opening at 3:00 AM EST, EURUSD exhibited a 30% increase in volume compared to the previous hour, resulting in a 20-pip price movement within the first 30 minutes.",
      "commonMistake": "Traders often underestimate the impact of low liquidity periods and execute trades during these times, leading to increased slippage and wider spreads.",
      "quickNote": "Execute trades during peak liquidity hours to enhance execution quality.",
      "mentorText": "Always plan your trades around the peak liquidity hours. If you're trading during low liquidity times, you're likely to face higher spreads and execution delays.",
      "mentorAnalogy": "Consider liquidity in trading like traffic flow on a highway; peak hours allow for smoother travel, while off-peak times can lead to unexpected delays."
    },
    "taskData": null,
    "visualKey": "forex-session-overlaps"
  },
  {
    "type": "practice",
    "title": "Practicing Forex Session Execution",
    "label": "Forex Track",
    "body": "### Forex Execution: Practical Session Strategies\nEngage in practical exercises to reinforce execution strategies during Forex session openings. This card focuses on **applying learned concepts in real-time scenarios**.\n\n* **Scenario Analysis**: Given a news release scheduled at 8:30 AM EST, determine the optimal entry point for a trade during the subsequent session opening, considering potential volatility.\n* **Execution Timing**: Practice executing a trade during the first hour of the London session, analyzing the impact of liquidity on your trade execution and outcome.\n* **Trade Review**: After executing a trade, review the session's volume and price action to assess whether your execution aligned with the planned strategy and liquidity conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Strategy",
          "definition": "A planned approach to entering and exiting trades based on market conditions."
        }
      ],
      "whyThisMatters": "Practical exercises solidify understanding of execution strategies, allowing traders to adapt to live market conditions effectively.",
      "realLifeExample": "Simulate executing a trade on GBPUSD at 3:05 AM EST during the London session, analyzing the price movement and liquidity conditions to refine your strategy.",
      "commonMistake": "Failing to simulate trades under varying market conditions can lead to unpreparedness when executing in live markets.",
      "quickNote": "Practice executing trades during session openings to enhance real-time decision-making skills.",
      "mentorText": "When you practice, treat each scenario like a live market. Analyze the conditions, execute your plan, and then review your results critically.",
      "mentorAnalogy": "Think of this practice like a flight simulator; you need to experience different scenarios to be prepared for real-world flying conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are preparing to execute a trade on EURUSD during the London session opening at 3:00 AM EST. A major news release is scheduled for 8:30 AM EST. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Execute the trade immediately without considering the news release.",
          "isCorrect": false,
          "feedback": "Executing without considering the upcoming news can lead to unexpected volatility."
        },
        {
          "id": "1",
          "text": "Wait until after the news release to execute the trade.",
          "isCorrect": true,
          "feedback": "Waiting allows you to assess the market reaction to the news, ensuring a more informed execution."
        },
        {
          "id": "2",
          "text": "Execute the trade but set a wider stop loss to account for potential volatility.",
          "isCorrect": false,
          "feedback": "While this may seem prudent, it can lead to unnecessary losses if the market moves against you."
        },
        {
          "id": "3",
          "text": "Monitor the market closely and execute only if the price breaks a key level before the news.",
          "isCorrect": false,
          "feedback": "This approach may lead to premature execution without considering the overall market context."
        }
      ]
    },
    "visualKey": "forex-session-overlaps"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Session Strategies",
    "label": "Forex Track",
    "body": "### Forex Execution: Key Strategies Overview\nThis card summarizes the essential strategies for executing trades during Forex sessions. Understanding these strategies is vital for effective trading.\n\n* **Session Timing**: Align your execution plans with the opening times of major trading sessions to capitalize on increased liquidity and volatility.\n* **News Release Awareness**: Be proactive in adjusting your strategies around scheduled economic news releases to mitigate risk and enhance execution quality.\n* **Liquidity Management**: Recognize the importance of liquidity dynamics and avoid trading during low liquidity periods to ensure optimal execution conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Session Timing",
          "definition": "The strategic alignment of trade execution with the opening of major Forex trading sessions."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of session strategies enables traders to navigate the market effectively, maximizing their trading potential.",
      "realLifeExample": "A trader who executed a strategy during the London session opening while considering news releases achieved a 40-pip gain on EURUSD within the first hour.",
      "commonMistake": "Traders often overlook the significance of session timing and liquidity, leading to suboptimal execution and increased costs.",
      "quickNote": "Mastering session strategies is essential for executing trades effectively in the Forex market.",
      "mentorText": "Review these strategies regularly. They are your foundation for executing trades successfully during high-volume sessions.",
      "mentorAnalogy": "Think of these strategies like a well-planned construction project; each phase must align perfectly for the structure to stand strong."
    },
    "taskData": null,
    "visualKey": "forex-session-overlaps"
  }
];
