import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Interbank Dynamics During Macro Windows",
    "label": "Forex Track",
    "body": "### Interbank Dynamics: Liquidity Shifts in Macro Windows\nInterbank trading dynamics undergo significant changes during macro windows, affecting liquidity and market behavior. This card details **how interbank players manipulate liquidity and the resulting impact on forex trading**.\n\n* **Liquidity Compression**: Expect liquidity to tighten as major banks position themselves ahead of macroeconomic announcements, often resulting in wider spreads and increased volatility.\n* **Market Manipulation Signals**: Watch for sudden spikes in order flow or price movements that suggest coordinated actions by interbank traders, particularly in the minutes leading up to the announcement.\n* **Post-Announcement Reactions**: Analyze how liquidity returns or shifts direction immediately after macro releases, as this can indicate the market's consensus on the new information.",
    "context": {
      "keyTerms": [
        {
          "term": "Interbank Trading",
          "definition": "The trading activity that occurs between banks, often involving large volumes and impacting market liquidity."
        },
        {
          "term": "Liquidity Manipulation",
          "definition": "The strategic alteration of liquidity levels by market participants to influence price movements."
        }
      ],
      "whyThisMatters": "Understanding interbank dynamics during macro windows allows traders to anticipate liquidity shifts and potential market manipulation, enhancing decision-making accuracy.",
      "realLifeExample": "On March 15, 2023, ahead of the US Federal Reserve interest rate decision, EURUSD experienced a liquidity drop, with spreads widening to 5 pips as banks positioned for volatility.",
      "commonMistake": "Traders often misinterpret normal volatility as a signal to enter trades without considering the underlying liquidity dynamics.",
      "quickNote": "Interbank dynamics can create significant volatility and liquidity shifts during macro windows.",
      "mentorText": "When you see liquidity tightening before a macro announcement, recognize that interbank players are positioning themselves. This is not the time to enter blindly; assess the order flow carefully.",
      "mentorAnalogy": "Think of interbank trading like a crowded airport before a major flight. As passengers (traders) gather, the flow of people (liquidity) can become chaotic, affecting how quickly you can move through security (execute trades)."
    },
    "taskData": null,
    "visualKey": "forex-macro-windows"
  },
  {
    "type": "concept",
    "title": "Identifying Spoofing in Forex Markets",
    "label": "Forex Track",
    "body": "### Spoofing Detection: Indicators in Forex Markets\nSpoofing is a tactic used by traders to create false market signals, particularly during macro windows. This card focuses on **recognizing specific indicators of spoofing and its implications for market liquidity**.\n\n* **Order Book Analysis**: Monitor the order book for sudden large orders that appear and disappear quickly, indicating potential spoofing activity aimed at misleading other traders.\n* **Price Movement Correlation**: Look for price movements that do not correlate with the underlying order book changes, suggesting that the price action may be influenced by spoofing rather than genuine market interest.\n* **Volume Discrepancies**: Analyze volume spikes that coincide with rapid price changes; if the volume does not support the price movement, it may indicate manipulation through spoofing.",
    "context": {
      "keyTerms": [
        {
          "term": "Spoofing",
          "definition": "A market manipulation tactic where traders place large orders with no intention of executing them to create misleading price signals."
        },
        {
          "term": "Order Book",
          "definition": "A real-time list of buy and sell orders for a particular asset, providing insight into market depth and liquidity."
        }
      ],
      "whyThisMatters": "Identifying spoofing can prevent traders from making decisions based on false signals, preserving capital and enhancing trade accuracy during volatile periods.",
      "realLifeExample": "During the UK GDP release on April 28, 2023, a sudden sell order of 500 lots on GBPUSD appeared and was withdrawn within seconds, causing a false price drop before the actual market reaction occurred.",
      "commonMistake": "Traders often react to false signals without verifying the order book, leading to premature entries or exits.",
      "quickNote": "Recognizing spoofing can protect your trading strategy from false market signals.",
      "mentorText": "If you see large orders vanish from the order book, be cautious. This could be a tactic to manipulate price and mislead traders like you.",
      "mentorAnalogy": "Spoofing is like a magician performing a trick; the illusion looks real, but once you know the method, you can see through the deception."
    },
    "taskData": null,
    "visualKey": "forex-macro-windows"
  },
  {
    "type": "concept",
    "title": "Liquidity Runs and Their Impact on Forex Trading",
    "label": "Forex Track",
    "body": "### Liquidity Runs: Navigating Critical Moments in Forex\nLiquidity runs can significantly impact forex trading during macro windows. This card explains **the mechanics of liquidity runs and how to effectively navigate these critical trading moments**.\n\n* **Identifying Liquidity Runs**: Look for rapid price movements accompanied by high volume, indicating that liquidity is being consumed quickly, often leading to sharp reversals or continuations.\n* **Timing Entries and Exits**: Enter trades just before anticipated liquidity runs based on economic data releases, but ensure to set tight stop-loss orders to mitigate risk from sudden reversals.\n* **Market Sentiment Analysis**: Assess the overall market sentiment leading into a macro window; bullish or bearish sentiment can dictate the direction and intensity of liquidity runs.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Run",
          "definition": "A rapid movement in price due to the swift consumption of available liquidity, often triggered by news events."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular market or asset, influencing price movements."
        }
      ],
      "whyThisMatters": "Understanding liquidity runs allows traders to position themselves strategically, optimizing entry and exit points during high-impact news events.",
      "realLifeExample": "On June 1, 2023, the USDJPY experienced a liquidity run just after the US Non-Farm Payroll report, moving 50 pips within minutes as traders reacted to the data.",
      "commonMistake": "Traders often fail to recognize the signs of a liquidity run and miss critical entry points or exit too late.",
      "quickNote": "Liquidity runs can create both opportunities and risks; timing is crucial.",
      "mentorText": "When you see a surge in volume and price movement, be prepared. This is a liquidity run, and you need to act quickly, but also wisely.",
      "mentorAnalogy": "Think of liquidity runs like a tidal wave; if you can anticipate the wave's arrival, you can ride it to your advantage, but if you're caught off guard, it can sweep you away."
    },
    "taskData": null,
    "visualKey": "forex-macro-windows"
  },
  {
    "type": "concept",
    "title": "Analyzing the Forex Order Book During Macro Windows",
    "label": "Forex Track",
    "body": "### Order Book Analysis: Key Techniques During Macro Windows\nAnalyzing the forex order book during macro windows is crucial for identifying potential market movements. This card outlines **techniques for effectively interpreting order book data in real-time**.\n\n* **Key Level Identification**: Focus on significant price levels where large buy or sell orders are clustered, as these can act as support or resistance during macro announcements.\n* **Order Flow Monitoring**: Keep an eye on the flow of orders; a sudden influx of buy orders can indicate bullish sentiment, while a surge in sell orders may suggest bearish pressure.\n* **Time and Sales Data**: Use time and sales data to assess the speed and volume of executed trades, providing insight into market sentiment and potential price direction.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Flow",
          "definition": "The net buying and selling activity in the market, reflecting trader sentiment and potential price movements."
        },
        {
          "term": "Time and Sales",
          "definition": "A record of executed trades, showing the price, volume, and time of each transaction."
        }
      ],
      "whyThisMatters": "Effective order book analysis enables traders to anticipate market movements and make informed decisions during high-impact macro events.",
      "realLifeExample": "On July 12, 2023, during the ECB interest rate announcement, the EURUSD order book showed a significant buildup of sell orders at 1.1000, indicating strong resistance that led to a price rejection.",
      "commonMistake": "Traders often overlook the importance of order book analysis, relying solely on price charts without understanding underlying market dynamics.",
      "quickNote": "Real-time order book analysis is essential for anticipating market movements during macro windows.",
      "mentorText": "When you analyze the order book, look for clusters of orders at key levels. These can tell you where the market might react strongly, so pay attention.",
      "mentorAnalogy": "Analyzing the order book is like a chef reading a recipe; understanding the ingredients (orders) and their quantities (volume) is essential for creating a successful dish (trade)."
    },
    "taskData": null,
    "visualKey": "forex-macro-windows"
  },
  {
    "type": "concept",
    "title": "Strategies for Trading Volatility in Forex",
    "label": "Forex Track",
    "body": "### Forex Volatility: Trading Strategies During Macro Windows\nEffective trading during macro windows hinges on precise timing and execution. This card outlines **strategies to capitalize on volatility spikes** that arise from macroeconomic data releases.\n\n* **Pre-Release Positioning**: Establish positions 10 minutes before critical data releases (e.g., Non-Farm Payrolls) to capture initial volatility. Use limit orders to ensure entry at favorable prices.\n* **Execution Timing**: Monitor price action closely during the 20-minute window post-release. Execute trades based on clear price patterns, such as breakouts or reversals, rather than relying on lagging indicators.\n* **Volatility Metrics**: Utilize the Average True Range (ATR) to gauge expected price movement. For instance, if the ATR for EURUSD is 50 pips, anticipate a potential move of that magnitude in response to the release.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        }
      ],
      "whyThisMatters": "Understanding volatility strategies allows traders to effectively navigate rapid price movements during macroeconomic events, enhancing potential profit opportunities.",
      "realLifeExample": "On the release of U.S. CPI data at 8:30 AM EST, EURUSD spiked 40 pips within the first 10 minutes, providing a clear breakout opportunity for traders positioned beforehand.",
      "commonMistake": "Failing to adjust position sizes based on volatility can lead to overexposure during high-impact news events.",
      "quickNote": "Positioning ahead of macro releases is critical for capitalizing on volatility.",
      "mentorText": "When trading during macro windows, always position yourself ahead of the news. The first few minutes post-release are where the real moves happen. Be ready to act swiftly.",
      "mentorAnalogy": "Think of trading volatility like a race car driver anticipating a green light. You need to be in the right position, ready to accelerate as soon as the signal changes."
    },
    "taskData": null,
    "visualKey": "forex-macro-windows"
  },
  {
    "type": "concept",
    "title": "Risk Management in Forex Macro Trading",
    "label": "Forex Track",
    "body": "### Forex Risk Management: Protecting Capital During Macro Windows\nEffective risk management is paramount when trading during macro windows. This card details **practices to safeguard capital while maximizing returns** in volatile environments.\n\n* **Position Sizing**: Determine position sizes based on a fixed percentage of your capital (e.g., 1-2%). For instance, if your account balance is $10,000, risk no more than $100-$200 per trade.\n* **Stop-Loss Orders**: Implement tight stop-loss orders (e.g., 15-20 pips) to limit losses during unexpected price swings. Ensure these are placed based on technical levels rather than arbitrary distances.\n* **Diversification**: Avoid concentrating trades on a single currency pair during macro releases. Spread risk across multiple pairs to mitigate the impact of adverse movements in any one position.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a trade."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price."
        }
      ],
      "whyThisMatters": "Implementing robust risk management practices is essential to protect capital and ensure longevity in trading, especially during high-volatility events.",
      "realLifeExample": "During the U.S. Federal Reserve interest rate decision, a trader with a $10,000 account set a 20-pip stop-loss on a USDJPY position, effectively limiting potential losses to $200 amidst a 100-pip volatility spike.",
      "commonMistake": "Over-leveraging positions without adequate stop-loss measures can lead to significant capital erosion during macroeconomic announcements.",
      "quickNote": "Always prioritize risk management to safeguard your trading capital.",
      "mentorText": "In macro trading, never risk more than you can afford to lose. Set your stop-losses and stick to them. Protecting your capital is your first priority.",
      "mentorAnalogy": "Consider risk management in trading like a pilot conducting pre-flight checks. Every safety measure is crucial to ensure a safe and successful flight."
    },
    "taskData": null,
    "visualKey": "forex-macro-windows"
  },
  {
    "type": "practice",
    "title": "Simulating Forex Trades in Macro Windows",
    "label": "Forex Track",
    "body": "### Forex Trading Simulation: Macro Windows\nEngaging in practical simulations allows traders to apply learned concepts effectively. This card facilitates **realistic trading scenarios during macro windows** to enhance decision-making skills.\n\n* **Scenario Setup**: Simulate a trading environment with a scheduled macroeconomic release (e.g., U.S. GDP at 8:30 AM EST) and set parameters for entry, stop-loss, and take-profit levels.\n* **Execution Practice**: Execute trades based on pre-defined strategies during the simulated macro window. Focus on timing, execution, and adherence to risk management protocols.\n* **Post-Trade Analysis**: After the simulation, analyze the outcomes. Review what strategies worked, what didn’t, and how risk management was applied throughout the process.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulation",
          "definition": "A practice environment that replicates real trading conditions."
        },
        {
          "term": "Execution",
          "definition": "The act of carrying out a trade order."
        }
      ],
      "whyThisMatters": "Simulations provide a risk-free environment to refine trading strategies and improve execution skills under pressure.",
      "realLifeExample": "During a simulated trading session for the U.S. Non-Farm Payrolls release, traders practiced entering positions based on pre-release volatility and managing trades effectively within the 20-minute window.",
      "commonMistake": "Failing to simulate under realistic conditions can lead to poor preparation for actual trading scenarios.",
      "quickNote": "Simulating trades enhances readiness for real market conditions.",
      "mentorText": "Practice makes perfect. Use simulations to test your strategies and refine your execution. The more you practice, the better prepared you'll be for live trading.",
      "mentorAnalogy": "Think of trading simulations like a flight simulator for pilots. You can practice maneuvers and reactions without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated macro window, you notice a sudden spike in volatility. What should be your immediate action?",
      "options": [
        {
          "id": "0",
          "text": "Execute your pre-planned trade strategy immediately.",
          "isCorrect": true,
          "feedback": "Executing your pre-planned strategy ensures you act based on analysis rather than emotion."
        },
        {
          "id": "1",
          "text": "Wait to see if the volatility continues before acting.",
          "isCorrect": false,
          "feedback": "Waiting can lead to missed opportunities; act based on your strategy."
        },
        {
          "id": "2",
          "text": "Change your strategy based on the current price movement.",
          "isCorrect": false,
          "feedback": "Changing strategies mid-scenario can lead to inconsistency and confusion."
        },
        {
          "id": "3",
          "text": "Close all positions to avoid risk.",
          "isCorrect": false,
          "feedback": "Closing positions without analysis can result in unnecessary losses."
        }
      ]
    },
    "visualKey": "forex-macro-windows"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Macro Trading Insights",
    "label": "Forex Track",
    "body": "### Forex Macro Trading: Key Insights\nThis card summarizes the essential insights gained from trading forex during macro windows. Understanding these insights is crucial for navigating interbank dynamics and liquidity effectively.\n\n* **Interbank Dynamics**: Recognize how macroeconomic releases influence interbank liquidity and pricing. Major banks adjust their positions based on economic data, impacting currency pairs significantly.\n* **Liquidity Considerations**: Be aware of liquidity fluctuations during macro windows. Higher volatility can lead to wider spreads and slippage, affecting trade execution.\n* **Strategic Planning**: Develop a structured approach to trading during macro releases, incorporating timing, risk management, and execution strategies to optimize performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Interbank Dynamics",
          "definition": "The interactions and transactions between major banks in the forex market."
        },
        {
          "term": "Liquidity",
          "definition": "The availability of liquid assets to a market or company."
        }
      ],
      "whyThisMatters": "Grasping these insights allows traders to make informed decisions and adapt strategies to the ever-changing forex landscape during macroeconomic events.",
      "realLifeExample": "After the U.S. Federal Reserve's interest rate announcement, EURUSD experienced a 60-pip move due to shifts in interbank liquidity, illustrating the importance of understanding these dynamics.",
      "commonMistake": "Neglecting to account for liquidity changes can lead to poor trade execution and unexpected losses.",
      "quickNote": "Understanding interbank dynamics is essential for effective macro trading.",
      "mentorText": "Always keep an eye on interbank movements during macro releases. They dictate how currencies react and can make or break your trades.",
      "mentorAnalogy": "Think of interbank dynamics like the flow of traffic in a city. Just as traffic patterns change with events, so too do currency flows during macroeconomic announcements."
    },
    "taskData": null,
    "visualKey": "forex-macro-windows"
  }
];
