import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Forex Execution Protocols for NFP and CPI",
    "label": "Forex Track",
    "body": "### Core Scenario: Execution Protocols for NFP and CPI\nEstablishing a disciplined execution protocol during high-impact news events like NFP and CPI is critical for managing risk and capitalizing on volatility. This card outlines **specific execution rules to follow before, during, and after these releases**.\n\n* **Pre-Release Positioning**: Close all open positions at least 15 minutes before the news release to avoid slippage. Ensure that no pending orders are left active in the market.\n* **Execution During Release**: Only execute trades based on pre-defined scenarios. Utilize limit orders to enter trades at specific price levels rather than market orders to mitigate spread widening.\n* **Post-Release Analysis**: Wait for at least 10 minutes after the release to assess market reaction before considering new trades. Analyze price action and volume for confirmation of market direction before re-entering positions.",
    "context": {
      "keyTerms": [
        {
          "term": "NFP",
          "definition": "Non-Farm Payroll, a key economic indicator reflecting employment changes in the U.S."
        },
        {
          "term": "CPI",
          "definition": "Consumer Price Index, a measure of inflation based on the price change of a basket of goods."
        }
      ],
      "whyThisMatters": "Effective execution during NFP and CPI releases can significantly impact trade outcomes due to heightened volatility and liquidity shifts.",
      "realLifeExample": "On the NFP release day, EURUSD showed a spike from 1.1000 to 1.1050 within minutes of the announcement, necessitating strict adherence to execution protocols to avoid losses.",
      "commonMistake": "Traders often leave pending orders active during news releases, leading to unexpected fills and increased risk exposure.",
      "quickNote": "Adhere to strict execution protocols to manage risk effectively during NFP and CPI releases.",
      "mentorText": "When the NFP report is about to drop, I close all my positions. The market can move unpredictably, and I want to avoid being caught off guard. Stick to your plan and only re-enter based on your pre-defined scenarios.",
      "mentorAnalogy": "Think of this like a pilot preparing for takeoff. Just as a pilot ensures all systems are checked and cleared before departure, you must ensure your positions are managed before high-impact news."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Preparing for NFP Releases",
    "label": "Forex Track",
    "body": "### Core Scenario: Pre-NFP Preparation\nPreparing for NFP releases involves thorough analysis and strategic planning to navigate potential market volatility. This card details **how to set up your trades effectively ahead of the NFP release**.\n\n* **Historical Data Review**: Analyze the last five NFP reports and their market impact. Look for patterns in price movements and volatility spikes following the announcements.\n* **Setting Trade Parameters**: Define your entry and exit points based on historical volatility. Set stop-loss orders at levels that account for potential slippage during the release.\n* **Liquidity Assessment**: Evaluate the liquidity conditions leading up to the release. Ensure that your trading platform can handle increased volume and potential spread widening.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Liquidity",
          "definition": "The availability of liquid assets to a market or company."
        }
      ],
      "whyThisMatters": "Proper preparation can help mitigate risk and enhance the potential for profitable trades during the NFP release.",
      "realLifeExample": "Prior to the last NFP release, GBPUSD showed an average volatility of 50 pips in the first hour post-announcement, prompting a review of historical data to set appropriate stop-loss levels.",
      "commonMistake": "Traders often neglect to analyze historical data, leading to poor expectations of market behavior during the NFP release.",
      "quickNote": "Thoroughly analyze historical data and set clear parameters before the NFP release.",
      "mentorText": "Before the NFP release, I always look back at how the market reacted to previous reports. This helps me set realistic expectations and prepare my trades accordingly.",
      "mentorAnalogy": "Preparing for an NFP release is like a surgeon reviewing a patient's history before an operation. You need to understand past outcomes to anticipate future scenarios."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Impact of CPI on Forex Markets",
    "label": "Forex Track",
    "body": "### Core Scenario: Anticipating CPI Effects\nCPI releases can significantly influence Forex market dynamics, requiring traders to adjust their strategies accordingly. This card outlines **how to adapt your trading approach in anticipation of CPI announcements**.\n\n* **Market Sentiment Analysis**: Gauge market sentiment leading up to the CPI release by monitoring economic forecasts and trader positioning. This can provide insight into potential market reactions.\n* **Adjusting Trade Strategies**: Modify your trading strategy based on expected volatility. Consider using tighter stop-loss orders to protect against adverse movements while allowing for potential profit capture.\n* **Post-CPI Reaction Monitoring**: After the CPI release, observe the market for at least 15 minutes to identify trends. Look for confirmation signals before entering new trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        },
        {
          "term": "Confirmation Signals",
          "definition": "Indicators that validate a potential trade entry or exit."
        }
      ],
      "whyThisMatters": "Understanding CPI impacts allows traders to position themselves advantageously and manage risk effectively during high-impact news events.",
      "realLifeExample": "Following a CPI release that exceeded expectations, USDJPY surged from 110.50 to 111.00, highlighting the need for quick adjustments to trading strategies.",
      "commonMistake": "Traders often fail to adjust their strategies based on sentiment leading up to the CPI release, resulting in missed opportunities or increased losses.",
      "quickNote": "Adapt your trading strategy based on market sentiment and expected volatility surrounding CPI releases.",
      "mentorText": "When I see CPI numbers coming out, I adjust my strategy based on the sentiment. If the market is bullish on the dollar, I prepare for potential upward movement and adjust my stops accordingly.",
      "mentorAnalogy": "Navigating CPI impacts is like a weather forecaster adjusting predictions based on changing conditions. You must remain flexible and responsive to new information."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Navigating Spread Freeze Periods",
    "label": "Forex Track",
    "body": "### Core Scenario: Managing Spread Freeze\nSpread freeze periods during high-impact news events can create challenges for execution. This card explains **how to effectively navigate these periods to ensure optimal trade execution**.\n\n* **Understanding Spread Behavior**: Recognize that spreads can widen significantly during news releases. Monitor your trading platform for real-time spread changes to avoid unexpected costs.\n* **Execution Strategy**: Use limit orders to enter trades at pre-defined levels rather than market orders. This approach helps mitigate the impact of spread widening during volatile periods.\n* **Timing Your Entries**: Wait for the initial volatility to subside before executing trades. Aim to enter positions 5-10 minutes post-release when spreads may normalize.",
    "context": {
      "keyTerms": [
        {
          "term": "Spread Freeze",
          "definition": "A period during which the bid-ask spread widens significantly due to market volatility."
        },
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a security at a specific price or better."
        }
      ],
      "whyThisMatters": "Navigating spread freeze periods effectively can prevent unnecessary losses and enhance trade execution quality during high-impact news events.",
      "realLifeExample": "During the last CPI release, the spread on AUDUSD widened from 2 pips to 10 pips, illustrating the importance of using limit orders to manage execution costs.",
      "commonMistake": "Traders often use market orders during spread freeze periods, resulting in unexpected execution prices and increased costs.",
      "quickNote": "Utilize limit orders and wait for volatility to stabilize during spread freeze periods.",
      "mentorText": "When spreads widen during news, I always switch to limit orders. It’s crucial to protect my entry price and avoid getting caught in a bad fill.",
      "mentorAnalogy": "Navigating spread freeze periods is like a chef timing the addition of ingredients in a recipe. You must wait for the right moment to ensure the best outcome."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Execution Strategies for NFP and CPI",
    "label": "Forex Track",
    "body": "### Core Strategy: NFP and CPI Execution\nEffective execution during NFP and CPI releases requires a disciplined approach to capitalize on market movements. This card outlines **specific strategies to maximize profit potential during these high-impact news events**.\n\n* **Pre-Release Positioning**: Establish positions at least 30 minutes before the news release. Use limit orders to enter trades within a 10-pip range of expected volatility to avoid slippage.\n* **Trade Direction Confirmation**: Analyze the consensus forecast and previous data. If the forecast shows a significant deviation from the previous release, prepare to enter trades in the direction of the expected move.\n* **Post-Release Adjustment**: After the news is released, monitor price action for at least 5 minutes. Adjust stop-loss orders to breakeven once the price moves in your favor by 15 pips to protect against sudden reversals.",
    "context": {
      "keyTerms": [
        {
          "term": "NFP",
          "definition": "Non-Farm Payroll, a key economic indicator reflecting employment changes."
        },
        {
          "term": "CPI",
          "definition": "Consumer Price Index, a measure of inflation based on the price change of a basket of goods."
        }
      ],
      "whyThisMatters": "Understanding execution strategies for NFP and CPI is critical for capitalizing on significant market movements and reducing risk exposure.",
      "realLifeExample": "On the first Friday of the month, the USDJPY reacts to the NFP release at 8:30 AM EST, where a consensus of 200,000 jobs created leads to a 50-pip surge to 110.50 within minutes.",
      "commonMistake": "Traders often enter positions too close to the news release, resulting in slippage and unfavorable fills.",
      "quickNote": "Position strategically before news releases to maximize profit potential.",
      "mentorText": "When trading NFP or CPI, always prepare your positions ahead of time. The market can move rapidly, and you need to be ready to act without hesitation.",
      "mentorAnalogy": "Think of trading during NFP like a pilot preparing for takeoff. You must check all systems and ensure your flight path is clear before accelerating down the runway."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Managing Volatility During News Events",
    "label": "Forex Track",
    "body": "### Core Technique: Volatility Management\nManaging volatility during news events is essential for protecting capital and optimizing trade execution. This card details **specific techniques to navigate market fluctuations effectively**.\n\n* **Dynamic Stop-Loss Orders**: Set stop-loss orders 15 pips beyond the expected volatility range. Adjust these dynamically based on real-time price action to minimize losses during erratic movements.\n* **Position Sizing Adjustments**: Reduce position sizes by 50% during high-impact news events to mitigate risk exposure. This allows for greater flexibility in managing unexpected price swings.\n* **Use of Limit Orders**: Implement limit orders to enter trades at predefined levels rather than market orders. This helps avoid slippage and ensures entry at desired price points during volatile conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        }
      ],
      "whyThisMatters": "Effective volatility management protects against significant losses and enhances the potential for profitable trades during unpredictable market conditions.",
      "realLifeExample": "During the CPI release, EURUSD spikes from 1.0850 to 1.0900 within minutes. A trader using a dynamic stop-loss set at 1.0835 avoids a larger loss by adjusting their stop as price moves.",
      "commonMistake": "Failing to adjust stop-loss orders during volatility can lead to larger-than-expected losses.",
      "quickNote": "Implement dynamic stop-losses to navigate volatility effectively.",
      "mentorText": "Always be ready to adjust your stop-loss as the market moves. Think of it as a safety net that needs to be repositioned as conditions change.",
      "mentorAnalogy": "Managing volatility is like a surgeon adjusting their instruments during a complex procedure; precision and adaptability are crucial to achieving the best outcome."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "practice",
    "title": "Simulations for NFP and CPI Trading",
    "label": "Forex Track",
    "body": "### Core Exercise: NFP and CPI Trading Simulations\nEngaging in simulated trading scenarios for NFP and CPI events allows traders to practice execution rules in a controlled environment. This card focuses on **applying learned strategies through realistic simulations**.\n\n* **Scenario Setup**: Create a simulated environment replicating NFP and CPI release conditions. Include market data, expected volatility, and consensus forecasts.\n* **Execution Practice**: Execute trades based on pre-defined strategies, adjusting positions and stop-loss orders as market conditions evolve during the simulation.\n* **Performance Review**: After completing the simulation, analyze trade outcomes. Identify successful strategies and areas for improvement to refine your approach for real-market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulation",
          "definition": "A practice environment that mimics real trading conditions for skill development."
        },
        {
          "term": "Execution Rules",
          "definition": "Guidelines that dictate how trades are to be executed under specific conditions."
        }
      ],
      "whyThisMatters": "Simulations provide a risk-free opportunity to practice execution strategies, enhancing readiness for actual trading during high-impact news events.",
      "realLifeExample": "In a simulation, a trader practices executing a buy order on GBPUSD at 1.3000 during a mock CPI release, successfully managing a 20-pip stop-loss.",
      "commonMistake": "Traders often neglect to review their simulation performance, missing out on valuable insights for future trades.",
      "quickNote": "Utilize simulations to refine execution strategies before real trading.",
      "mentorText": "Treat each simulation as a real trading session. The more you practice, the more instinctive your execution will become under pressure.",
      "mentorAnalogy": "Simulating trades is like a pilot undergoing flight simulations; it prepares you for real scenarios and helps you respond effectively when it counts."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated NFP release, you anticipate a strong positive outcome. What is your best course of action?",
      "options": [
        {
          "id": "0",
          "text": "Enter a buy position with a limit order at 10 pips above the current price.",
          "isCorrect": true,
          "feedback": "Entering a buy position with a limit order allows you to capitalize on the expected positive movement while managing risk."
        },
        {
          "id": "1",
          "text": "Place a market order immediately before the release.",
          "isCorrect": false,
          "feedback": "Placing a market order can lead to slippage and unfavorable fills during high volatility."
        },
        {
          "id": "2",
          "text": "Wait for the price to move 20 pips before entering any position.",
          "isCorrect": false,
          "feedback": "Waiting for a 20-pip move may cause you to miss the initial surge if the news is strong."
        },
        {
          "id": "3",
          "text": "Avoid trading altogether during the news release.",
          "isCorrect": false,
          "feedback": "Avoiding trading during news can lead to missed opportunities for profit."
        }
      ]
    },
    "visualKey": "news-event-protocol"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Execution Under News Events",
    "label": "Forex Track",
    "body": "### Core Summary: Execution Under News Events\nThis summary encapsulates the essential execution strategies for trading during high-impact news events. Understanding these principles is vital for effective trading.\n\n* **Strategic Positioning**: Always position trades ahead of news releases to capture potential market movements. Use limit orders to mitigate slippage.\n* **Volatility Management**: Implement dynamic stop-loss orders and adjust position sizes to navigate the unpredictable nature of news events effectively.\n* **Practice and Review**: Engage in simulations to refine execution strategies and analyze performance for continuous improvement.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Strategy",
          "definition": "A planned approach to entering and exiting trades based on market conditions."
        },
        {
          "term": "High-Impact News",
          "definition": "Economic news releases that significantly affect market prices."
        }
      ],
      "whyThisMatters": "A solid grasp of execution strategies during news events enhances a trader's ability to capitalize on market volatility and protect capital.",
      "realLifeExample": "Traders who effectively executed strategies during the last NFP saw an average gain of 40 pips on USD pairs within the first hour post-release.",
      "commonMistake": "Overtrading during news events can lead to unnecessary losses; focus on executing well-defined strategies instead.",
      "quickNote": "Master execution strategies to navigate high-impact news events successfully.",
      "mentorText": "Remember, the key to success during news events is preparation and discipline. Stick to your strategies and adjust as necessary.",
      "mentorAnalogy": "Executing trades during news events is akin to a surgeon performing a delicate operation; precision and adherence to protocol are crucial for success."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  }
];
