import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Order Types",
    "label": "Core Track",
    "body": "### Core Concept: Order Types Overview\nThis card delineates the fundamental differences between limit, stop, and market orders, crucial for achieving precise structural entries.\n\n* **Market Orders**: Execute immediately at the current market price. Use when speed is essential, such as entering a trade during high volatility, e.g., buying EURUSD at 1.0850 during a news release.\n* **Limit Orders**: Set to execute at a specified price or better. Ideal for entering at key structural levels, e.g., placing a limit order to buy GBPUSD at 1.3000 when price retraces to a support level.\n* **Stop Orders**: Triggered when the market reaches a specified price, allowing entry on momentum. For instance, placing a buy stop order for AUDUSD at 0.7400 to capture upward movement after a breakout.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a security immediately at the current market price."
        },
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a security at a specified price or better."
        },
        {
          "term": "Stop Order",
          "definition": "An order that becomes a market order once a specified price is reached."
        }
      ],
      "whyThisMatters": "Understanding these order types is essential for executing trades at optimal prices and managing risk effectively.",
      "realLifeExample": "During the NY session, a trader places a market order to sell USDJPY at 110.50 as it rapidly declines, ensuring immediate execution.",
      "commonMistake": "Traders often confuse limit and stop orders, leading to missed opportunities or unintended entries.",
      "quickNote": "Mastering order types is vital for precise execution and risk management.",
      "mentorText": "Think of order types as tools in your trading toolkit. Each serves a unique purpose, and knowing when to use each can significantly impact your trading outcomes.",
      "mentorAnalogy": "Consider a chef selecting the right knife for each task; a market order is like a chef's quick chop, while a limit order is akin to carefully slicing at the perfect angle."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Identifying Structural Levels",
    "label": "Core Track",
    "body": "### Core Concept: Structural Level Identification\nIdentifying key structural levels is critical for deploying different order types effectively and optimizing trade entries.\n\n* **Support and Resistance**: Mark significant price levels where the market has historically reversed. For example, identifying a support level at 1.0800 in EURUSD can guide limit order placement.\n* **Fibonacci Retracement**: Use Fibonacci levels to identify potential reversal zones. If price retraces to the 61.8% level at 1.0850, consider placing a limit order to buy.\n* **Trend Lines**: Draw trend lines to visualize market structure. A breakout above a descending trend line can signal a potential buy stop order placement above the breakout point.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Support Level",
          "definition": "A price level where a downtrend can be expected to pause due to buying interest."
        },
        {
          "term": "Resistance Level",
          "definition": "A price level where an uptrend can be expected to pause due to selling interest."
        },
        {
          "term": "Fibonacci Retracement",
          "definition": "A tool used to identify potential reversal levels based on the Fibonacci sequence."
        }
      ],
      "whyThisMatters": "Accurate identification of structural levels enables traders to place orders with higher probability of success.",
      "realLifeExample": "A trader identifies a resistance level at 1.3000 in GBPUSD and places a sell limit order at this level, anticipating a price rejection.",
      "commonMistake": "Failing to adjust structural levels based on new market data can lead to ineffective order placements.",
      "quickNote": "Accurate structural level identification enhances entry precision.",
      "mentorText": "Identifying structural levels is like mapping out a battlefield. You need to know where the strongholds are to position your forces effectively.",
      "mentorAnalogy": "Think of it as an architect determining load-bearing walls; knowing where to place your trades is as crucial as knowing where to place your supports."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Deploying Limit Orders",
    "label": "Core Track",
    "body": "### Core Concept: Limit Order Strategies\nThis card explores strategies for placing limit orders at identified structural levels to optimize entry points and enhance trade execution.\n\n* **Optimal Placement**: Set limit orders slightly above support or below resistance levels to increase the likelihood of execution. For example, placing a buy limit order at 1.0805 when support is at 1.0800.\n* **Confirmation Signals**: Use additional indicators, such as candlestick patterns, to confirm limit order placement. A bullish engulfing pattern at 1.0800 may justify a buy limit order.\n* **Time Considerations**: Monitor market conditions and adjust limit orders based on session volatility. For instance, during the Asian session, adjust limit orders to account for lower liquidity.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order Placement",
          "definition": "The strategy of setting a limit order at a specific price level to optimize trade entry."
        },
        {
          "term": "Confirmation Signals",
          "definition": "Indicators or patterns that support the decision to place a limit order."
        },
        {
          "term": "Session Volatility",
          "definition": "The level of price fluctuation during a specific trading session."
        }
      ],
      "whyThisMatters": "Effective limit order strategies can significantly enhance entry precision and overall trade performance.",
      "realLifeExample": "A trader places a buy limit order for USDCHF at 0.9200, just above a strong support level, after confirming a bullish divergence on the RSI.",
      "commonMistake": "Placing limit orders too far from structural levels can result in missed opportunities.",
      "quickNote": "Strategic limit order placement is essential for maximizing trade execution success.",
      "mentorText": "Think of limit orders as setting a trap; you want to position them where you expect the market to come to you, not where you chase it.",
      "mentorAnalogy": "Like a hunter setting a baited trap, you must place your limit orders where you anticipate the market will move, ensuring you catch the best opportunities."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Utilizing Stop Orders",
    "label": "Core Track",
    "body": "### Core Concept: Stop Order Mechanics\nUnderstanding the mechanics of stop orders is vital for protecting positions while ensuring precise entry at structural levels.\n\n* **Entry Triggers**: Set stop orders above resistance for buy entries or below support for sell entries. For instance, a buy stop order for NZDUSD at 0.7300 can capture upward momentum after a breakout.\n* **Risk Management**: Utilize stop orders to define risk parameters. A trader may place a stop loss for a buy order at 0.7280, ensuring a maximum loss of 20 pips.\n* **Market Conditions**: Adjust stop orders based on market volatility. In high volatility conditions, consider wider stop placements to avoid premature triggers.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Order Mechanics",
          "definition": "The operational principles governing the execution of stop orders."
        },
        {
          "term": "Entry Triggers",
          "definition": "Specific price levels that activate stop orders."
        },
        {
          "term": "Risk Parameters",
          "definition": "Defined limits for potential losses associated with a trade."
        }
      ],
      "whyThisMatters": "Proper use of stop orders can safeguard positions and enhance entry precision, critical for long-term trading success.",
      "realLifeExample": "A trader sets a buy stop order for EURCAD at 1.5000 and a stop loss at 1.4980, effectively managing risk while aiming for upward movement.",
      "commonMistake": "Traders often place stop orders too close to market price, leading to premature executions.",
      "quickNote": "Effective use of stop orders is essential for risk management and precise entries.",
      "mentorText": "Using stop orders is like having a safety net; they protect your trades while allowing you to capitalize on market movements.",
      "mentorAnalogy": "Imagine a safety harness for a climber; it allows for upward movement while providing security against falls, just like stop orders protect your trades."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Timing Market Orders",
    "label": "Core Track",
    "body": "### Core Scenario: Market Order Timing\nMastering the timing of market orders is essential for capturing rapid price movements at critical structural levels. This card details **how to execute market orders effectively during high volatility**.\n\n* **Execution Window Identification**: Monitor price action closely; execute market orders only when price approaches a defined structural level within a 5-pip range. This ensures entry precision without excessive slippage.\n* **Volatility Assessment**: Utilize the Average True Range (ATR) to gauge market volatility. Only place market orders when ATR indicates a minimum of 10 pips movement potential to avoid false breakouts.\n* **Session Timing**: Prioritize execution during high liquidity sessions, such as the overlap of the London and New York sessions, to enhance order fill quality and minimize slippage risks.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a security immediately at the current market price."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        }
      ],
      "whyThisMatters": "Precise timing in market orders can significantly enhance entry quality, especially during volatile market conditions.",
      "realLifeExample": "On a EURUSD trade, executing a market order at 1.0850 as price approaches a structural level during the NY open, capturing a rapid 15-pip movement.",
      "commonMistake": "Traders often place market orders without considering current volatility, leading to poor fills and slippage.",
      "quickNote": "Execute market orders within a tight price range to maximize entry precision.",
      "mentorText": "When you see price nearing a critical level, don’t hesitate. Execute your market order within that 5-pip window to capitalize on the momentum.",
      "mentorAnalogy": "Think of a sprinter waiting for the starting gun; timing is everything. Just as they launch at the perfect moment, you must enter the market at the right price point."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Combining Order Types",
    "label": "Core Track",
    "body": "### Core Scenario: Order Type Integration\nEffectively combining limit, stop, and market orders can create a robust entry strategy that maximizes precision. This card outlines **how to strategically use multiple order types for optimal entries**.\n\n* **Limit Orders for Precision**: Use limit orders to enter at predefined structural levels, ensuring you capture favorable prices without chasing the market. Set these orders 5 pips above or below the structural level.\n* **Stop Orders for Breakouts**: Implement stop orders to capitalize on breakout scenarios. Place stop orders 10 pips above resistance or below support to confirm momentum before entry.\n* **Market Orders for Immediate Execution**: In high-volatility scenarios, use market orders to secure immediate entry when price action confirms your analysis, especially during news events or major market shifts.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a security at a specified price or better."
        },
        {
          "term": "Stop Order",
          "definition": "An order to buy or sell once the market reaches a specified price."
        }
      ],
      "whyThisMatters": "Combining order types allows for strategic flexibility, enhancing the likelihood of successful entries under varying market conditions.",
      "realLifeExample": "In a GBPJPY trade, placing a limit order at 150.50 while simultaneously setting a stop order at 151.00 to capture a breakout if the price moves favorably.",
      "commonMistake": "Traders often fail to integrate order types effectively, leading to missed opportunities or poor execution.",
      "quickNote": "Strategically combine order types to enhance entry precision and adapt to market conditions.",
      "mentorText": "Think of your entry strategy like a well-orchestrated play; each order type has a role that, when combined, leads to a successful outcome.",
      "mentorAnalogy": "Like a chef combining ingredients for a perfect dish, you must blend order types to achieve the desired market entry flavor."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Common Execution Traps",
    "label": "Core Track",
    "body": "### Core Scenario: Avoiding Execution Pitfalls\nIdentifying common pitfalls in order execution is crucial for maintaining entry precision and avoiding slippage. This card discusses **how to recognize and mitigate execution traps**.\n\n* **Slippage Awareness**: Understand that slippage occurs when the market moves before your order is filled. Set slippage tolerance levels to a maximum of 2 pips to avoid excessive losses.\n* **Order Placement Timing**: Avoid placing orders during major news releases or low liquidity periods, as these can lead to erratic price movements and execution delays.\n* **Pre-Execution Checks**: Always verify your order type and parameters before execution. Double-check the price level and order size to prevent costly mistakes.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "Liquidity",
          "definition": "The availability of liquid assets to a market or company."
        }
      ],
      "whyThisMatters": "Recognizing execution traps can prevent unnecessary losses and ensure cleaner structural entries.",
      "realLifeExample": "During a volatile news release, a trader experiences 5 pips of slippage on a USDJPY market order, resulting in a less favorable entry than anticipated.",
      "commonMistake": "Failing to account for slippage can lead to significant losses, particularly in fast-moving markets.",
      "quickNote": "Be vigilant about execution traps to maintain entry integrity.",
      "mentorText": "Always be aware of the market conditions before executing. If you see volatility spikes, reconsider your timing to avoid slippage.",
      "mentorAnalogy": "Like a pilot checking for turbulence before takeoff, you must assess market conditions to ensure a smooth entry."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Synthesis of Order Strategies",
    "label": "Core Track",
    "body": "### Core Scenario: Comprehensive Order Strategy\nIntegrating knowledge of order types and structural levels is essential for developing a comprehensive strategy for precise market entries. This card explains **how to synthesize various order strategies for optimal execution**.\n\n* **Structural Level Analysis**: Identify key structural levels on your chart. Use these levels to inform your order placement, ensuring alignment with market dynamics.\n* **Order Strategy Framework**: Develop a framework that outlines when to use limit, stop, or market orders based on market conditions and structural analysis. For example, use limit orders for retracements and stop orders for breakouts.\n* **Feedback Loop Implementation**: After each trade, analyze the execution outcome against your strategy. Adjust your order types and placement strategies based on performance metrics to refine your approach continuously.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Levels",
          "definition": "Price levels where the market has previously reversed or consolidated."
        },
        {
          "term": "Feedback Loop",
          "definition": "A process of analyzing outcomes to improve future performance."
        }
      ],
      "whyThisMatters": "A synthesized strategy enhances the trader's ability to adapt to changing market conditions, leading to more consistent execution.",
      "realLifeExample": "In a trade on AUDCAD, a trader identifies a structural resistance at 0.9400 and combines limit orders for retracement entries and stop orders for breakout confirmations.",
      "commonMistake": "Traders often fail to adapt their strategies based on market feedback, leading to repeated mistakes.",
      "quickNote": "Synthesize various order strategies to enhance execution precision and adaptability.",
      "mentorText": "Your strategy should evolve with the market. After each trade, review what worked and what didn’t to refine your approach.",
      "mentorAnalogy": "Like an architect adjusting plans based on site feedback, you must adapt your trading strategy based on execution results."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Practical Application of Order Types",
    "label": "Core Track",
    "body": "### Core Scenario: Engaging with Order Types\nPractical exercises enhance understanding of order mechanics in real-time trading environments. This card focuses on **simulated trading scenarios to apply limit, stop, and market orders effectively**.\n\n* **Limit Orders in Action**: Execute limit orders at predefined levels, ensuring they align with structural entry points. For instance, placing a limit order for GBPUSD at 1.3000 when price retraces to this level during a bullish trend.\n* **Stop Orders Utilization**: Implement stop orders to capture breakout scenarios. For example, placing a buy stop order for AUDJPY at 85.50, just above a recent resistance level, to capitalize on upward momentum.\n* **Market Orders Execution**: Use market orders for immediate execution when speed is essential. An example would be executing a market order for EURUSD at 1.0900 during high volatility at the NY open to take advantage of rapid price movement.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a security at a specified price or better."
        },
        {
          "term": "Stop Order",
          "definition": "An order to buy or sell a security once it reaches a specified price."
        },
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a security immediately at the current market price."
        }
      ],
      "whyThisMatters": "Mastering the practical application of order types is essential for executing trades with precision and efficiency in varying market conditions.",
      "realLifeExample": "During a simulated session, a trader places a limit order for USDCHF at 0.9300, which is executed as price retraces to this level after a breakout, resulting in a successful entry.",
      "commonMistake": "Traders often confuse limit and stop orders, leading to incorrect order placements that can result in missed opportunities.",
      "quickNote": "Engage with simulated scenarios to solidify your understanding of order types.",
      "mentorText": "Think of order types as tools in your trading toolbox. Each has a specific purpose, and knowing when to use them can make or break your entry strategy.",
      "mentorAnalogy": "Consider a surgeon selecting instruments for an operation; each tool has a specific function, and using the right one at the right time is critical for success."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Review of Order Entry Precision",
    "label": "Core Track",
    "body": "### Core Scenario: Summarizing Order Types\nPrecision in order entry is paramount for successful trading outcomes. This card reinforces **the key concepts of order types and structural entry strategies** to ensure clarity in execution.\n\n* **Understanding Order Types**: Differentiate between limit, stop, and market orders based on market conditions. Recognize that limit orders are best for price-sensitive entries, while market orders are suited for urgent execution.\n* **Structural Entry Strategies**: Emphasize the importance of aligning order placements with market structure. For instance, placing a limit order at a Fibonacci retracement level to enhance the probability of a successful entry.\n* **Precision in Execution**: Highlight the need for accuracy in order placement to avoid slippage and missed opportunities. For example, ensuring a stop order is placed just above a significant resistance level to capture breakout moves effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Entry Precision",
          "definition": "The accuracy and timing of placing orders in the market."
        },
        {
          "term": "Structural Entry Strategy",
          "definition": "A method of entering trades based on market structure analysis."
        }
      ],
      "whyThisMatters": "Reviewing order entry precision ensures that traders can execute their strategies effectively, minimizing errors that can lead to financial loss.",
      "realLifeExample": "In a review session, a trader reflects on a missed opportunity where a limit order was set too far from the market price, resulting in a failure to enter a profitable trade on NZDUSD.",
      "commonMistake": "Traders often neglect to align their order types with market structure, leading to poorly timed entries.",
      "quickNote": "Reinforce your understanding of order types to enhance execution precision.",
      "mentorText": "Precision in order entry is like a sniper's aim; every detail matters, and a slight miscalculation can lead to a missed target.",
      "mentorAnalogy": "Think of a commercial pilot preparing for takeoff; every checklist item must be executed precisely to ensure a safe and successful flight."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Analyzing Order Scenarios",
    "label": "Core Track",
    "body": "### Core Scenario: Evaluating Market Conditions\nAnalyzing various market scenarios is crucial for determining the most effective order type for precise entries. This card focuses on **assessing market conditions to select appropriate order placements**.\n\n* **Market Trend Analysis**: Identify the prevailing market trend before deciding on order types. For example, in a strong bullish trend, consider using limit orders to buy on retracements rather than market orders.\n* **Volatility Assessment**: Evaluate market volatility to choose between order types. In high volatility conditions, market orders may be necessary to ensure execution, while in low volatility, limit orders can be more effective.\n* **Support and Resistance Levels**: Use technical analysis to identify key support and resistance levels for order placements. For instance, placing a stop order just above a resistance level for a breakout scenario on S&P 500 futures.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Trend",
          "definition": "The general direction in which the market is moving."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        }
      ],
      "whyThisMatters": "Analyzing market scenarios allows traders to make informed decisions on which order types to deploy, enhancing entry precision.",
      "realLifeExample": "During analysis, a trader identifies that EURAUD is in a bullish trend and decides to place a limit order at 1.6000, anticipating a retracement before the next upward move.",
      "commonMistake": "Failing to consider market conditions can lead to inappropriate order type selection, resulting in ineffective entries.",
      "quickNote": "Evaluate market scenarios to determine the best order type for your entries.",
      "mentorText": "Think critically about the market environment; your choice of order type should be a calculated decision based on current conditions.",
      "mentorAnalogy": "Like an architect assessing the terrain before building, you must analyze the market landscape to choose the right order type for your trading structure."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Risk Management with Orders",
    "label": "Core Track",
    "body": "### Core Scenario: Integrating Risk Management\nIncorporating risk management techniques with order placements is essential for safeguarding against adverse market movements. This card focuses on **strategies to manage risk effectively while executing orders**.\n\n* **Setting Stop Loss Orders**: Always place stop loss orders to limit potential losses. For example, if entering a long position on USDJPY at 110.00, set a stop loss at 109.50 to protect against adverse price movements.\n* **Position Sizing**: Determine appropriate position sizes based on risk tolerance and account size. For instance, if risking 1% of a $10,000 account, the maximum loss on a trade should not exceed $100.\n* **Trailing Stops**: Utilize trailing stops to lock in profits while allowing for potential upside. For example, if a trade on GBPUSD moves in your favor, adjust the trailing stop to secure gains as the price rises.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to risk on a trade."
        }
      ],
      "whyThisMatters": "Integrating risk management with order placements is crucial for protecting capital and ensuring long-term trading success.",
      "realLifeExample": "A trader sets a stop loss for a long position on AUDCAD at 0.9500, ensuring that if the price drops below this level, losses are minimized.",
      "commonMistake": "Neglecting to set stop losses or using improper position sizing can lead to significant losses during adverse market conditions.",
      "quickNote": "Incorporate risk management techniques to safeguard your trading capital.",
      "mentorText": "Risk management is your safety net; without it, you’re exposing yourself to unnecessary losses. Always plan your exits before entering a trade.",
      "mentorAnalogy": "Think of a firefighter preparing for a rescue; they must have a plan and safety measures in place to protect themselves while executing their mission."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Psychological Factors in Order Entry",
    "label": "Core Track",
    "body": "### Core Scenario: Psychological Discipline in Order Entry\nThe mental state of a trader significantly impacts order entry decisions. This card explores **how to cultivate discipline and manage psychological biases during order placements**.\n\n* **Emotional Regulation**: Identify emotional triggers that lead to impulsive decisions. Implement techniques such as deep breathing or a brief pause before executing orders to mitigate emotional responses.\n* **Cognitive Bias Awareness**: Recognize biases such as overconfidence or loss aversion that can distort judgment. Maintain a trading journal to reflect on past decisions and their emotional contexts to improve future discipline.\n* **Routine Establishment**: Develop a pre-trade checklist that includes psychological readiness. Ensure that each order entry is preceded by a review of market conditions and personal emotional state to enhance precision.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Regulation",
          "definition": "The ability to manage emotional responses to trading situations."
        },
        {
          "term": "Cognitive Bias",
          "definition": "Systematic patterns of deviation from norm or rationality in judgment."
        },
        {
          "term": "Trading Journal",
          "definition": "A record of trades and the thought processes behind them."
        }
      ],
      "whyThisMatters": "Maintaining psychological discipline is essential for executing precise order entries, reducing the likelihood of costly mistakes.",
      "realLifeExample": "During the NY session, a trader hesitated to place a limit order at 1.0850 on EURUSD due to fear of missing out, resulting in a missed opportunity as the price reversed after hitting 1.0845.",
      "commonMistake": "Traders often rush into order placements driven by fear or greed, leading to imprecise entries.",
      "quickNote": "Discipline in trading is as crucial as technical analysis for precise order execution.",
      "mentorText": "Before you place any order, take a moment to assess your emotional state. If you're feeling anxious or overly excited, step back. Precision requires a calm mind.",
      "mentorAnalogy": "Think of a surgeon preparing for an operation; they must be mentally focused and calm, ensuring every incision is deliberate and precise."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "practice",
    "title": "Using Analytics for Order Placement",
    "label": "Core Track",
    "body": "### Core Scenario: Data-Driven Order Placement\nLeveraging analytics is crucial for making informed order placements at structural levels. This card teaches **how to utilize market data effectively for precise entries**.\n\n* **Technical Indicator Integration**: Use indicators like Fibonacci retracements or moving averages to identify key structural levels. Place limit orders at these levels to enhance the probability of successful entries.\n* **Volume Analysis**: Assess volume spikes at specific price points to gauge market interest. Enter orders when volume confirms price action at structural levels, ensuring alignment with market sentiment.\n* **News Impact Assessment**: Monitor economic calendars for scheduled news releases. Adjust order placements based on anticipated volatility, ensuring entries are made with an understanding of potential market reactions.",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Indicators",
          "definition": "Mathematical calculations based on price, volume, or open interest used to forecast market direction."
        },
        {
          "term": "Volume Analysis",
          "definition": "The study of the number of shares or contracts traded in a security or market."
        },
        {
          "term": "Economic Calendar",
          "definition": "A schedule of upcoming economic events that may impact market conditions."
        }
      ],
      "whyThisMatters": "Utilizing analytics allows for data-driven decisions that enhance the precision of order placements, reducing reliance on intuition.",
      "realLifeExample": "A trader analyzed a 50-period moving average on GBPUSD and placed a limit order at 1.3000, where the price had historically found support, resulting in a successful entry as the price bounced back.",
      "commonMistake": "Relying solely on intuition without supporting data can lead to imprecise order placements.",
      "quickNote": "Data-driven decisions enhance entry precision and reduce emotional trading.",
      "mentorText": "Always back your order placements with solid data. If the analytics don't support your entry, reconsider your strategy.",
      "mentorAnalogy": "Just as an architect relies on blueprints and structural integrity data before construction, a trader must base order placements on robust market analytics."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You notice a significant volume spike at 1.1500 on USDJPY. What should you do next?",
      "options": [
        {
          "id": "0",
          "text": "Place a limit order at 1.1500, anticipating a reversal.",
          "isCorrect": true,
          "feedback": "Correct. A volume spike indicates strong market interest, making this a strategic entry point."
        },
        {
          "id": "1",
          "text": "Ignore the volume spike and wait for a price confirmation.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring the volume spike could lead to missing a key entry opportunity."
        },
        {
          "id": "2",
          "text": "Place a market order immediately at the current price.",
          "isCorrect": false,
          "feedback": "Incorrect. A market order does not leverage the strategic advantage of the volume spike."
        },
        {
          "id": "3",
          "text": "Wait for the price to drop below 1.1500 before considering an entry.",
          "isCorrect": false,
          "feedback": "Incorrect. This approach may result in missing the opportunity if the price bounces off the level."
        }
      ]
    },
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "summary",
    "title": "Core Track Summary",
    "label": "Core Track",
    "body": "### Core Scenario: Recap of Order Entry Precision\nThis summary consolidates the essential elements of order entry precision, focusing on the integration of order types with structural analysis. \n\n* **Order Types Overview**: Understand the mechanics of limit, stop, and market orders. Each order type serves a specific purpose in achieving precise entries based on market conditions.\n* **Structural Analysis Importance**: Emphasize the need for thorough structural analysis before placing orders. Identifying key support and resistance levels enhances the likelihood of successful entries.\n* **Psychological and Analytical Integration**: Combine psychological discipline with data-driven analytics for optimal order placements. This dual approach ensures that traders maintain precision while executing trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a security at a specified price or better."
        },
        {
          "term": "Stop Order",
          "definition": "An order to buy or sell once the price reaches a specified level."
        },
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a security immediately at the current market price."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of order entry precision is vital for executing trades effectively and minimizing risk.",
      "realLifeExample": "A trader successfully executed a limit order at 1.2500 on AUDUSD after identifying a strong resistance level, leading to a favorable risk-reward ratio.",
      "commonMistake": "Failing to integrate psychological readiness with analytical data can lead to erratic order placements.",
      "quickNote": "Precision in order entry is achieved through a blend of order mechanics, structural analysis, and psychological discipline.",
      "mentorText": "Remember, every order you place should be backed by a solid analysis and a calm mind. Precision is non-negotiable.",
      "mentorAnalogy": "Like a pilot preparing for takeoff, every aspect of your order entry must be meticulously planned and executed to ensure a smooth flight."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  }
];
