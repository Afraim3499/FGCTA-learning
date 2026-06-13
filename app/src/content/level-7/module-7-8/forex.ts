import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Identifying Forex Spread Spikes",
    "label": "Forex Track",
    "body": "### Core Scenario: Identifying Spread Spikes\nUnderstanding spread spikes is essential for effective trade execution, particularly in low liquidity environments. This card teaches **how to recognize and anticipate spread spikes during the Asian session**.\n\n* **Market Conditions Analysis**: Monitor the bid-ask spread of major currency pairs during the Asian session. Identify periods of increased volatility, typically around market open or close, where spreads may widen unexpectedly.\n* **Historical Data Review**: Utilize historical spread data to determine average spreads during specific times. Compare current spreads against historical averages to identify potential spikes.\n* **Liquidity Indicators**: Track liquidity metrics such as volume and order book depth. A significant drop in liquidity often precedes a spike in spreads, providing a critical warning signal for traders.",
    "context": {
      "keyTerms": [
        {
          "term": "Spread Spike",
          "definition": "A sudden increase in the bid-ask spread, often due to low liquidity or high volatility."
        }
      ],
      "whyThisMatters": "Identifying spread spikes allows traders to avoid unfavorable execution prices, preserving capital and enhancing trade profitability.",
      "realLifeExample": "During the Asian session, EURJPY exhibited a spread spike from 1.2000 to 1.2050 at 2:00 AM GMT, coinciding with low trading volume.",
      "commonMistake": "Failing to check the spread before executing a trade, leading to unexpected costs.",
      "quickNote": "Monitor spreads closely during low liquidity periods to avoid execution pitfalls.",
      "mentorText": "When you see spreads widening, think of it as a warning light on your dashboard. Don’t ignore it; adjust your strategy accordingly.",
      "mentorAnalogy": "Like a pilot checking fuel levels before takeoff, you must assess spread conditions to ensure a smooth trading flight."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "concept",
    "title": "Impact of News on Forex Spreads",
    "label": "Forex Track",
    "body": "### Core Scenario: News Release Impact\nMajor news releases can drastically affect market spreads, creating opportunities and risks. This card teaches **how to plan trades around impactful news events**.\n\n* **Economic Calendar Utilization**: Regularly consult an economic calendar to identify upcoming news releases. Focus on high-impact events such as Non-Farm Payrolls or Central Bank announcements that typically lead to increased volatility.\n* **Pre-Release Spread Monitoring**: Observe the spreads of relevant currency pairs in the minutes leading up to a news release. Spreads often widen as traders position themselves for potential volatility.\n* **Post-Release Execution Strategy**: Develop a strategy for executing trades immediately after a news release. Be prepared for rapid price movements and ensure your execution method accommodates potential slippage.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Calendar",
          "definition": "A schedule of upcoming economic events that may impact market conditions."
        }
      ],
      "whyThisMatters": "Understanding the impact of news on spreads enables traders to optimize entry and exit points, minimizing execution costs.",
      "realLifeExample": "On the day of the US Non-Farm Payroll report, the spread on GBPUSD widened from 1.5 pips to 5 pips just before the announcement at 1:30 PM GMT.",
      "commonMistake": "Entering trades without considering the upcoming news, resulting in unfavorable spreads and slippage.",
      "quickNote": "Always check the economic calendar before trading to anticipate spread changes.",
      "mentorText": "Think of news events as traffic signals. If you don’t pay attention, you might hit a red light at the worst moment.",
      "mentorAnalogy": "Like a surgeon preparing for a critical operation, you must account for external factors that could impact your trading outcomes."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "concept",
    "title": "Analyzing Liquidity in Asian Sessions",
    "label": "Forex Track",
    "body": "### Core Scenario: Liquidity Analysis\nLiquidity during the Asian trading hours significantly influences spread behavior. This card teaches **how to analyze liquidity to enhance trading strategies**.\n\n* **Volume Assessment**: Monitor trading volume across major currency pairs during the Asian session. Low volume often correlates with wider spreads and increased slippage.\n* **Order Book Analysis**: Examine the order book for depth and liquidity. A shallow order book indicates potential for significant spread widening, especially during low activity periods.\n* **Session Comparison**: Compare liquidity metrics of the Asian session with other trading sessions. Recognizing patterns in liquidity can help forecast potential spread behavior during your trading hours.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Analyzing liquidity allows traders to anticipate spread changes and adjust their strategies to mitigate execution costs.",
      "realLifeExample": "During the Asian session, AUDUSD showed a significant drop in volume at 3:00 AM GMT, leading to a spread increase from 1.2 pips to 4.0 pips.",
      "commonMistake": "Ignoring liquidity conditions before entering trades, resulting in unexpected execution costs.",
      "quickNote": "Assess liquidity levels to forecast spread behavior and adjust your trading approach accordingly.",
      "mentorText": "Think of liquidity as the water level in a reservoir. When it’s low, the risk of drought—wider spreads—becomes very real.",
      "mentorAnalogy": "Like an architect analyzing soil conditions before building, you must evaluate market liquidity to ensure a solid trading foundation."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "concept",
    "title": "Execution Strategies for Low Liquidity",
    "label": "Forex Track",
    "body": "### Core Scenario: Low Liquidity Execution\nExecuting trades in low liquidity environments requires specific strategies to minimize slippage and spread impact. This card teaches **effective execution techniques for such conditions**.\n\n* **Limit Orders Utilization**: Use limit orders instead of market orders to control entry prices. This helps avoid unfavorable spreads during low liquidity periods.\n* **Time of Day Consideration**: Execute trades during times of increased liquidity within the Asian session, such as overlaps with the London session, to reduce spread costs.\n* **Position Sizing Adjustments**: Adjust position sizes to account for potential slippage. Smaller positions can reduce the impact of unfavorable execution prices during low liquidity.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell an asset at a specified price or better."
        }
      ],
      "whyThisMatters": "Implementing effective execution strategies in low liquidity environments minimizes costs and enhances trade outcomes.",
      "realLifeExample": "During a low liquidity period at 4:00 AM GMT, placing a limit order on USDJPY at 110.50 instead of a market order helped avoid a spread spike from 1.0 to 3.0 pips.",
      "commonMistake": "Using market orders in low liquidity conditions, leading to excessive slippage and increased costs.",
      "quickNote": "Utilize limit orders and adjust positions to navigate low liquidity effectively.",
      "mentorText": "In low liquidity, think of yourself as a cautious driver. You wouldn’t speed through a fog; take your time and choose the safest route.",
      "mentorAnalogy": "Like a chef adjusting recipes based on ingredient availability, you must adapt your execution strategy to the liquidity on hand."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "concept",
    "title": "Risk Management for Spread and Slippage",
    "label": "Forex Track",
    "body": "### Core Scenario: Managing Execution Costs\nEffective risk management strategies are essential to mitigate the impact of spread and slippage on trading performance. This card outlines **specific techniques to incorporate into your trading plan**.\n\n* **Pre-Trade Spread Assessment**: Evaluate the current spread on your trading instrument before execution. Only proceed if the spread is within your acceptable range, typically no more than 2 pips for major pairs.\n* **Slippage Tolerance Levels**: Define your maximum acceptable slippage for each trade. For instance, if trading EURUSD, set a tolerance of 5 pips to avoid excessive execution costs.\n* **Order Types and Timing**: Utilize limit orders during low volatility periods to reduce slippage. Avoid market orders during high-impact news releases to minimize unexpected spread widening.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "Spread",
          "definition": "The difference between the bid and ask price of a currency pair."
        }
      ],
      "whyThisMatters": "Understanding and managing spread and slippage is critical for maintaining profitability and ensuring that execution costs do not erode trading gains.",
      "realLifeExample": "Trading GBPUSD at 1.3000 with a spread of 3 pips results in an effective entry at 1.3003. If slippage occurs and the execution price shifts to 1.3005, the total cost increases by 2 pips.",
      "commonMistake": "Failing to account for spread and slippage when calculating potential trade outcomes can lead to unexpected losses.",
      "quickNote": "Incorporate spread and slippage into your risk management framework to safeguard your trading capital.",
      "mentorText": "When planning your trades, always factor in the spread and potential slippage. If you're not aware of these costs, you're setting yourself up for losses that could have been avoided.",
      "mentorAnalogy": "Think of trading like flying an aircraft. Just as pilots must account for wind resistance and fuel consumption, traders must consider spread and slippage as part of their execution strategy."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "concept",
    "title": "Timing Trades to Avoid Spread Spikes",
    "label": "Forex Track",
    "body": "### Core Scenario: Optimal Trade Timing\nTiming your trades effectively can significantly reduce the impact of spread spikes. This card provides **strategies to identify optimal trading times**.\n\n* **Session Overlap Analysis**: Identify the key trading sessions (London, New York) and their overlaps. Execute trades during these periods when liquidity is highest, typically between 8 AM and 12 PM EST.\n* **Economic Calendar Monitoring**: Stay informed about scheduled economic releases. Avoid placing trades 15 minutes before and after major announcements to prevent spread spikes.\n* **Technical Analysis for Entry Timing**: Utilize technical indicators to time entries. For example, wait for a confirmed breakout above resistance before entering a long position to ensure a tighter spread.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two major trading sessions coincide, leading to increased market liquidity."
        },
        {
          "term": "Economic Calendar",
          "definition": "A schedule of economic events that can influence market volatility and liquidity."
        }
      ],
      "whyThisMatters": "Proper timing can help traders avoid unfavorable execution prices caused by spread spikes, enhancing overall trade profitability.",
      "realLifeExample": "Executing a trade on AUDJPY at 0.8500 during the London session results in a 1 pip spread, while attempting the same trade 10 minutes before a major economic release results in a 5 pip spread.",
      "commonMistake": "Entering trades during low liquidity periods without considering potential spread spikes can lead to poor execution prices.",
      "quickNote": "Strategically timing your trades can minimize the impact of spread spikes and improve execution quality.",
      "mentorText": "Always check the economic calendar and know when the market is most active. Timing your trades around these periods can save you from unnecessary costs.",
      "mentorAnalogy": "Just like a chef must choose the right moment to serve a dish for optimal taste, traders must select the right time to enter the market for the best execution."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "practice",
    "title": "Simulating Forex Spread Scenarios",
    "label": "Forex Track",
    "body": "### Core Scenario: Practical Spread Management\nEngaging in simulated scenarios allows traders to develop effective strategies for managing spreads. This card focuses on **practical exercises to enhance your skills**.\n\n* **Scenario Setup**: Create a simulated trading environment with varying spread conditions. For example, set spreads at 1, 3, and 5 pips for EURUSD during different market conditions.\n* **Execution Strategy Development**: For each spread condition, outline your entry and exit strategies. Determine how you would adjust your trade size based on the spread.\n* **Performance Review**: After executing trades in the simulation, analyze the impact of spread on your overall profitability. Document which strategies worked best under varying conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulation",
          "definition": "A practice environment where traders can test strategies without financial risk."
        },
        {
          "term": "Execution Strategy",
          "definition": "A plan detailing how and when to enter and exit trades."
        }
      ],
      "whyThisMatters": "Simulating spread scenarios helps traders understand the real-world impact of spreads on their trading performance and refine their strategies accordingly.",
      "realLifeExample": "In a simulation, you trade EURUSD with a 3 pip spread, adjusting your position size to maintain a risk-reward ratio of 1:2. After several trades, you find that a tighter spread significantly improves your win rate.",
      "commonMistake": "Neglecting to practice under varying spread conditions can lead to poor preparedness for real market scenarios.",
      "quickNote": "Simulate different spread conditions to develop robust strategies for real-world trading.",
      "mentorText": "Practice makes perfect. Use simulations to test how different spreads affect your trades and refine your strategies accordingly.",
      "mentorAnalogy": "Think of a surgeon practicing on a simulator before operating on a patient. Just as they need to master their skills in a controlled environment, you must simulate trading conditions to prepare for the real market."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are simulating a trade on USDJPY with a spread of 4 pips. What is the best strategy to manage this spread during execution?",
      "options": [
        {
          "id": "0",
          "text": "Reduce your position size to maintain risk management principles.",
          "isCorrect": true,
          "feedback": "Reducing position size helps maintain your risk-reward ratio despite the wider spread."
        },
        {
          "id": "1",
          "text": "Increase your position size to compensate for the spread.",
          "isCorrect": false,
          "feedback": "Increasing position size can lead to excessive risk exposure, especially with a wider spread."
        },
        {
          "id": "2",
          "text": "Place a market order to ensure immediate execution.",
          "isCorrect": false,
          "feedback": "Market orders can lead to slippage, especially with a wider spread."
        },
        {
          "id": "3",
          "text": "Wait for the spread to narrow before executing the trade.",
          "isCorrect": false,
          "feedback": "While waiting may be prudent, it can also lead to missed opportunities if the market moves."
        }
      ]
    },
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Spread Management",
    "label": "Forex Track",
    "body": "### Core Scenario: Recap of Key Strategies\nEffective spread management is crucial for optimizing trading outcomes. This card summarizes **the essential strategies discussed in the module**.\n\n* **Risk Assessment Techniques**: Always evaluate the spread and slippage before entering a trade. Set clear parameters for acceptable levels to protect your capital.\n* **Timing and Execution**: Monitor market conditions and economic events to time your trades effectively. Execute during high liquidity periods to minimize spread impact.\n* **Simulation and Practice**: Regularly engage in simulated trading scenarios to test and refine your strategies for managing spreads and slippage.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The degree to which an asset can be quickly bought or sold in the market without affecting its price."
        },
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling financial risks."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of spread management strategies is vital for maintaining profitability in Forex trading.",
      "realLifeExample": "Traders who effectively manage spreads can see a significant difference in their monthly performance, such as a 10% increase in profitability due to reduced execution costs.",
      "commonMistake": "Overlooking the importance of spread management can lead to unexpected losses and diminished trading performance.",
      "quickNote": "Mastering spread management techniques is essential for optimizing your trading strategy.",
      "mentorText": "Reflect on the strategies we've discussed. Effective spread management is not just about avoiding losses; it's about enhancing your overall trading performance.",
      "mentorAnalogy": "Just as a race car driver must understand the track conditions to optimize performance, traders must grasp spread management to navigate the market effectively."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  }
];
