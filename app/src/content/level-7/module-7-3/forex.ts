import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Session Order Blocks in Forex",
    "label": "Forex Track",
    "body": "### Core Concept: Session Order Blocks\nSession order blocks represent significant price levels where institutional buying or selling occurs during specific trading sessions. This card outlines **how to identify and utilize these blocks for limit order placements**.\n\n* **Identifying Order Blocks**: Focus on the last bullish or bearish candle before a significant price move. Mark these levels as potential limit order zones for the next session.\n* **Session Timing**: Recognize that order blocks are most relevant during the session they are formed. Use the London and New York sessions for major pairs like EURUSD and GBPUSD.\n* **Confirmation Criteria**: Only place limit orders within 5 pips of the identified order block. Ensure that the price is approaching the block during the session open for optimal execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Order Block",
          "definition": "A price level where significant buying or selling activity occurs during a specific trading session."
        }
      ],
      "whyThisMatters": "Understanding session order blocks allows traders to place limit orders at precise levels where institutional interest is likely to drive price action.",
      "realLifeExample": "EURUSD formed a bullish order block at 1.0800 during the London session, with price retracing to this level at 1.0805 for a limit order placement.",
      "commonMistake": "Traders often ignore the session context and place limit orders without confirming the proximity to the order block.",
      "quickNote": "Session order blocks are critical for pinpointing entry levels based on institutional activity.",
      "mentorText": "When you spot a session order block, think of it as a magnet for price. Place your limit orders just above or below these levels to catch the institutional flow.",
      "mentorAnalogy": "Consider session order blocks like a runway for an aircraft; they are the designated paths where price is likely to land based on prior activity."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Identifying Forex Structural Levels",
    "label": "Forex Track",
    "body": "### Core Skill: Structural Level Identification\nIdentifying structural levels is essential for executing limit orders at optimal points in the forex market. This card details **how to recognize these critical levels**.\n\n* **Support and Resistance**: Analyze historical price action to identify key support and resistance levels. Use Fibonacci retracement levels to enhance precision in identifying these zones.\n* **Timeframe Analysis**: Utilize multiple timeframes to confirm structural levels. A level on the daily chart may provide stronger support or resistance than one on the hourly chart.\n* **Volume Profile**: Incorporate volume analysis to validate structural levels. High volume at a specific price point indicates stronger support or resistance, making it a prime candidate for limit orders.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Level",
          "definition": "Key price levels where buying or selling pressure has historically occurred."
        }
      ],
      "whyThisMatters": "Identifying structural levels allows traders to place limit orders at points where price is likely to reverse or consolidate, enhancing trade precision.",
      "realLifeExample": "GBPUSD shows a strong resistance level at 1.3000, confirmed by three touches on the daily chart and high volume at this price point.",
      "commonMistake": "Traders often overlook the importance of volume when identifying structural levels, leading to suboptimal limit order placements.",
      "quickNote": "Structural levels are foundational for placing limit orders effectively in the forex market.",
      "mentorText": "When identifying structural levels, think of them as the walls of a building. They hold up the structure of your trading plan, guiding your limit order placements.",
      "mentorAnalogy": "Like an architect assessing the stability of a building, you must evaluate price levels to ensure your limit orders are placed where they can withstand market pressure."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Strategic Limit Order Placement",
    "label": "Forex Track",
    "body": "### Core Strategy: Limit Order Placement\nStrategic limit order placement at session order blocks can significantly enhance entry precision. This card explores **effective strategies for executing limit orders**.\n\n* **Order Block Alignment**: Ensure your limit orders are aligned with the identified session order blocks. Place orders slightly above or below these blocks to capture potential reversals.\n* **Risk-to-Reward Ratio**: Calculate the risk-to-reward ratio before placing a limit order. Aim for a minimum of 1:2 to ensure that potential profits outweigh risks.\n* **Market Conditions**: Monitor broader market conditions and news events that may affect price action. Avoid placing limit orders during high-impact news releases to prevent slippage.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a currency pair at a specified price or better."
        }
      ],
      "whyThisMatters": "Strategic limit order placement maximizes the chances of executing trades at favorable prices, thus improving overall trading performance.",
      "realLifeExample": "USDJPY shows a session order block at 110.50; placing a limit order at 110.48 allows for a precise entry while maintaining a favorable risk-to-reward ratio.",
      "commonMistake": "Traders often place limit orders too far from the order block, missing optimal entry points and increasing risk.",
      "quickNote": "Strategically placed limit orders at session order blocks enhance entry precision and trading outcomes.",
      "mentorText": "When placing limit orders, think of it as setting a trap for price. You want to lure it into your desired entry point without chasing it.",
      "mentorAnalogy": "Like a skilled archer aiming for the bullseye, your limit orders should be precisely targeted at session order blocks to ensure accuracy in execution."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Applying Stop Orders in Forex",
    "label": "Forex Track",
    "body": "### Core Application: Stop Order Mechanics\nEffectively using stop orders in conjunction with limit orders enhances entry precision in forex trades. This card outlines **how to apply stop orders strategically**.\n\n* **Stop Order Definition**: A stop order becomes a market order once the specified price is reached. Use this to enter trades when price breaks through key structural levels.\n* **Placement Strategy**: Place stop orders just above resistance for buy entries or below support for sell entries. This ensures you capture momentum once the price breaks through these levels.\n* **Combining with Limit Orders**: Use stop orders to complement limit orders by setting them at strategic points where price action confirms a breakout or reversal, enhancing overall entry precision.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Order",
          "definition": "An order to buy or sell a currency pair once a specified price is reached."
        }
      ],
      "whyThisMatters": "Applying stop orders effectively allows traders to capitalize on price momentum while maintaining control over entry points.",
      "realLifeExample": "AUDCAD shows a resistance breakout at 0.9400; placing a stop order at 0.9405 captures the upward momentum while a limit order at 0.9390 secures a favorable entry.",
      "commonMistake": "Traders often place stop orders too far from the key levels, increasing the risk of being stopped out before the intended move occurs.",
      "quickNote": "Strategically applied stop orders enhance entry precision and capitalize on market momentum.",
      "mentorText": "Think of stop orders as a safety net. They allow you to enter trades when the price confirms your analysis, ensuring you don’t miss out on potential moves.",
      "mentorAnalogy": "Like a safety harness for a climber, stop orders protect your trades by ensuring you only enter when conditions are right, minimizing unnecessary risks."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Market Order Tactics in Forex",
    "label": "Forex Track",
    "body": "### Core Scenario: Executing Market Orders\nTimely execution of market orders is critical for capturing price movements at structural levels. This card details **the tactical approach to executing market orders effectively**.\n\n* **Immediate Execution Protocol**: Market orders must be placed when price is at or near a predefined structural level. Ensure that the order is executed within a 5-pip tolerance of the target price to avoid slippage.\n* **Session Timing**: Execute market orders during high liquidity sessions, such as the London or New York open, to maximize order fill efficiency. Avoid placing market orders during low-volume periods, which can lead to increased spreads.\n* **Impact of News Releases**: Be aware of scheduled economic news releases that can cause volatility. Avoid executing market orders within 15 minutes before or after major news announcements to mitigate adverse price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a currency pair at the current market price."
        }
      ],
      "whyThisMatters": "Mastering market order tactics ensures that traders can capitalize on price movements without delay, enhancing overall execution efficiency.",
      "realLifeExample": "Placing a market order to buy EURUSD at 1.0850 during the NY session when price approaches a key resistance level, ensuring execution within 5 pips.",
      "commonMistake": "Failing to account for slippage during high volatility, leading to unexpected entry prices.",
      "quickNote": "Execute market orders promptly at structural levels to ensure optimal entry.",
      "mentorText": "When executing a market order, focus on timing. If you see EURUSD approaching a key level, don’t hesitate. Place your order within the defined tolerance to avoid missing your entry.",
      "mentorAnalogy": "Think of executing a market order like a sprinter at the starting line. The moment the gun goes off, you must react immediately to secure your position."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "concept",
    "title": "Combining Orders in Forex",
    "label": "Forex Track",
    "body": "### Core Scenario: Order Combination Strategies\nCombining limit and stop orders can enhance entry precision and risk management. This card outlines **how to effectively integrate these orders in forex trading**.\n\n* **Strategic Limit Order Placement**: Place limit orders at structural support or resistance levels to capitalize on price reversals. Ensure that these orders are set at least 10 pips away from the current market price to avoid premature fills.\n* **Stop Order Utilization**: Use stop orders to enter trades in the direction of the trend when price breaks above resistance or below support. Set stop orders 5 pips beyond the breakout point to confirm momentum.\n* **Order Management**: Maintain a clear distinction between limit and stop orders in your trading plan. Document the rationale for each order type to ensure disciplined execution and adherence to strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a currency pair at a specified price or better."
        },
        {
          "term": "Stop Order",
          "definition": "An order to buy or sell a currency pair once the price reaches a specified level."
        }
      ],
      "whyThisMatters": "Combining order types allows traders to optimize their entry points while managing risk effectively, leading to improved trading outcomes.",
      "realLifeExample": "Setting a limit order to buy GBPUSD at 1.3000 while simultaneously placing a stop order to buy if price breaks above 1.3050, ensuring participation in both scenarios.",
      "commonMistake": "Inadequately spacing limit and stop orders, leading to overlapping fills and increased risk exposure.",
      "quickNote": "Strategically combine limit and stop orders to enhance entry precision.",
      "mentorText": "When combining orders, always consider the market context. If GBPUSD is approaching a key level, set your limit order below it and a stop order above to capture both potential outcomes.",
      "mentorAnalogy": "Combining orders is like a chef preparing a dish with multiple ingredients. Each component must be added at the right time to create a balanced and successful meal."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "practice",
    "title": "Practical Forex Order Placement",
    "label": "Forex Track",
    "body": "### Core Scenario: Limit Order Placement Exercises\nEngaging in practical exercises reinforces the strategies for limit order placements at session order blocks. This card focuses on **applying learned strategies in real-time scenarios**.\n\n* **Identify Key Levels**: Analyze the forex charts to identify significant support and resistance levels. Mark these levels clearly for reference during the session.\n* **Simulated Order Placement**: Practice placing limit orders at identified levels with specific price targets. Ensure to set the orders at least 10 pips away from the current market price to avoid premature fills.\n* **Review Execution Outcomes**: After simulated placements, review the outcomes of your orders. Assess whether the market conditions aligned with your expectations and refine your strategy accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Order Block",
          "definition": "A price level where significant buying or selling activity is expected during a trading session."
        }
      ],
      "whyThisMatters": "Practical exercises solidify the understanding of limit order placements, enhancing execution skills in live market conditions.",
      "realLifeExample": "Simulating a limit order to sell AUDUSD at 0.7500 during the Asian session when price approaches a known resistance level.",
      "commonMistake": "Failing to adjust limit orders based on market conditions, leading to missed opportunities.",
      "quickNote": "Practice placing limit orders at session order blocks to enhance execution skills.",
      "mentorText": "In practice, always visualize the market. If you see AUDUSD nearing a resistance level, prepare your limit order and be ready to adjust based on real-time price action.",
      "mentorAnalogy": "Placing limit orders is akin to a pilot preparing for takeoff. Each step must be meticulously planned and executed to ensure a successful flight."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You identify a resistance level for EURJPY at 145.50. What is the best approach to place a limit order?",
      "options": [
        {
          "id": "0",
          "text": "Place a limit order to sell at 145.40, 10 pips below the resistance level.",
          "isCorrect": true,
          "feedback": "Correct. Placing the limit order 10 pips below the resistance level allows for a better fill and avoids premature execution."
        },
        {
          "id": "1",
          "text": "Place a limit order to sell at 145.55, 5 pips above the resistance level.",
          "isCorrect": false,
          "feedback": "Incorrect. This order is too close to the resistance level and may result in a premature fill."
        },
        {
          "id": "2",
          "text": "Place a market order to sell at the current price of 145.50.",
          "isCorrect": false,
          "feedback": "Incorrect. A market order does not allow for strategic entry at the resistance level."
        },
        {
          "id": "3",
          "text": "Do not place any order as the market is too volatile.",
          "isCorrect": false,
          "feedback": "Incorrect. You can still place a limit order at a strategic level, adjusting for volatility."
        }
      ]
    },
    "visualKey": "order-entry-simulator"
  },
  {
    "type": "summary",
    "title": "Forex Track Summary",
    "label": "Forex Track",
    "body": "### Core Summary: Order Entry Precision in Forex\nThis summary consolidates the essential concepts of order entry precision in forex, emphasizing the importance of limit order placements at structural levels. \n\n* **Key Takeaways**: Mastering the execution of market and combined orders enhances entry timing and risk management. Limit orders should be strategically placed at identified structural levels to optimize fills.\n* **Execution Discipline**: Maintain strict adherence to your trading plan, ensuring that order placements align with market conditions and pre-defined strategies.\n* **Continuous Improvement**: Regularly review and refine your order entry tactics based on market feedback and personal performance metrics.",
    "context": {
      "keyTerms": [],
      "whyThisMatters": "A comprehensive understanding of order entry precision is vital for executing trades effectively and managing risk in the forex market.",
      "realLifeExample": "Summarizing the execution of limit orders at key levels during the London session, leading to successful trades in EURUSD and GBPJPY.",
      "commonMistake": "Neglecting to review and adjust order strategies based on market conditions, leading to missed opportunities.",
      "quickNote": "Focus on precision in order placements to enhance trading performance.",
      "mentorText": "Reflect on your order placements. If you executed limit orders at key levels during the last session, analyze what worked and what didn’t to improve your strategy moving forward.",
      "mentorAnalogy": "Think of order entry precision like a surgeon's scalpel. Every cut must be deliberate and precise to ensure the best outcome."
    },
    "taskData": null,
    "visualKey": "order-entry-simulator"
  }
];
