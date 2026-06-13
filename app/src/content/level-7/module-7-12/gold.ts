import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "XAU/USD Tick-Level Execution",
    "label": "Gold Track",
    "body": "### Core Scenario: Tick-Level Execution Precision\nTick-level execution is critical for optimizing entry and exit points in XAU/USD trades. This card emphasizes **the mechanics of executing trades at the tick level to enhance profitability**.\n\n* **Understanding Tick Size**: The tick size for XAU/USD is 0.10, meaning that each movement represents a $10 change in value. Precision in execution requires awareness of this tick size to avoid unnecessary losses.\n* **Execution Timing**: Execute trades at the precise tick level during high liquidity periods, such as the COMEX open. Avoid placing orders at arbitrary price levels that do not align with market structure.\n* **Order Types**: Utilize limit orders to target specific tick levels, ensuring that trades are executed at desired prices without slippage. Avoid market orders unless necessary to capture immediate price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Tick-Level Execution",
          "definition": "Executing trades at the smallest price increment to optimize entry and exit points."
        }
      ],
      "whyThisMatters": "Precision in tick-level execution minimizes slippage and maximizes profit potential in volatile markets.",
      "realLifeExample": "During the COMEX session, XAU/USD trades at 1,800.00. Executing a limit order at 1,800.10 captures a favorable tick, enhancing profit margins.",
      "commonMistake": "Placing market orders during low liquidity periods, leading to unfavorable execution prices.",
      "quickNote": "Execute trades at precise tick levels to optimize profitability.",
      "mentorText": "Focus on the tick size and execute your trades with precision. Every tick counts, especially when volatility spikes.",
      "mentorAnalogy": "Think of tick-level execution like a surgeon making precise incisions; each cut must be exact to ensure the best outcome."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Understanding COMEX Spread Dynamics",
    "label": "Gold Track",
    "body": "### Core Scenario: Analyzing COMEX Spread\nThe COMEX spread dynamics for XAU/USD significantly influence execution strategies. This card details **how to analyze spread behavior to enhance trading effectiveness**.\n\n* **Spread Measurement**: Monitor the bid-ask spread, which can fluctuate based on market conditions. A tighter spread indicates higher liquidity, while a wider spread may signal increased volatility.\n* **Impact of News Events**: Major economic announcements can widen spreads temporarily. Adjust execution strategies accordingly, avoiding trades during high-impact news releases when spreads are likely to increase.\n* **Historical Spread Analysis**: Review historical spread data to identify patterns and typical ranges during different trading sessions. This analysis aids in anticipating potential execution challenges.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX Spread",
          "definition": "The difference between the bid and ask price for XAU/USD during trading."
        }
      ],
      "whyThisMatters": "Understanding spread dynamics allows for better execution timing and risk management in XAU/USD trades.",
      "realLifeExample": "During a high-impact news release, the XAU/USD spread widens from 0.30 to 0.80. A trader who understands this can avoid executing trades during this period.",
      "commonMistake": "Failing to account for spread changes during volatile periods, leading to unexpected execution costs.",
      "quickNote": "Analyze COMEX spread dynamics to optimize execution strategies.",
      "mentorText": "Always keep an eye on the spread. It’s your window into market liquidity and potential execution costs.",
      "mentorAnalogy": "Understanding spread dynamics is like a pilot monitoring wind conditions; it informs the best approach for a safe landing."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Timing Gold Fixing for Execution",
    "label": "Gold Track",
    "body": "### Core Scenario: Gold Fixing Timing\nThe timing of gold fixing plays a vital role in XAU/USD execution strategies. This card explores **how to align trades with gold fixing to optimize market positioning**.\n\n* **Gold Fixing Schedule**: The London Gold Fixing occurs at 10:30 AM and 3:00 PM GMT. Be aware of these times as they can lead to increased volatility and liquidity in the market.\n* **Pre-Fixing Analysis**: Conduct a market analysis 30 minutes prior to fixing times to identify potential price movements. This preparation can inform entry points for trades.\n* **Post-Fixing Reactions**: Be prepared for potential price adjustments immediately following the fixing. Execute trades cautiously as the market may react sharply to the fixing price.",
    "context": {
      "keyTerms": [
        {
          "term": "Gold Fixing",
          "definition": "A process that determines the price of gold at specific times during the trading day."
        }
      ],
      "whyThisMatters": "Aligning trades with gold fixing times enhances execution effectiveness and capitalizes on market volatility.",
      "realLifeExample": "At 10:30 AM GMT, XAU/USD is fixing at 1,800.00. A trader executing a buy order at 1,799.90 30 minutes prior can benefit from potential upward movement.",
      "commonMistake": "Neglecting to account for the volatility surrounding gold fixing times, leading to poorly timed trades.",
      "quickNote": "Align trades with gold fixing times to optimize execution.",
      "mentorText": "Know the fixing schedule and prepare your trades accordingly. Timing is everything in this market.",
      "mentorAnalogy": "Timing your trades around gold fixing is like a chef preparing a dish; you must know when to add ingredients for the best flavor."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Managing Slippage in XAU/USD Trades",
    "label": "Gold Track",
    "body": "### Core Scenario: Slippage Management Strategies\nManaging slippage is essential for maintaining execution reliability in XAU/USD trades. This card outlines **strategies to minimize slippage during volatile market conditions**.\n\n* **Limit Orders vs. Market Orders**: Use limit orders to control entry prices, especially during high volatility. Market orders may lead to significant slippage if executed at unfavorable prices.\n* **Volatility Assessment**: Assess market volatility using indicators like Average True Range (ATR) before executing trades. Higher volatility may necessitate wider stop-loss levels to accommodate potential slippage.\n* **Execution Timing**: Avoid executing trades during major economic announcements or market openings, as these periods are prone to slippage. Identify calmer periods for more reliable execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Effective slippage management ensures that trades are executed at anticipated prices, preserving profit margins.",
      "realLifeExample": "During a volatile session, XAU/USD moves rapidly from 1,800.00 to 1,805.00. A trader using a limit order at 1,800.50 avoids slippage that would occur with a market order.",
      "commonMistake": "Using market orders during high volatility, resulting in unexpected execution prices.",
      "quickNote": "Implement strategies to manage slippage for reliable execution.",
      "mentorText": "Always prioritize limit orders in volatile conditions. Protect your execution prices as you would your capital.",
      "mentorAnalogy": "Managing slippage is like a race car driver navigating sharp turns; precision and timing are crucial to avoid losing control."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Analyzing XAU/USD Market Depth",
    "label": "Gold Track",
    "body": "### Core Scenario: Market Depth Analysis for XAU/USD\nUnderstanding market depth is critical for executing trades in XAU/USD effectively. This card outlines **how to analyze the order book to gauge market sentiment and liquidity**.\n\n* **Order Book Structure**: Examine the bid and ask levels in the order book. Identify significant clusters of orders that indicate potential support or resistance zones.\n* **Liquidity Assessment**: Determine the available liquidity at different price levels. Focus on areas where the spread narrows, as these are often indicative of stronger market participation.\n* **Depth Visualization**: Utilize depth charts to visualize the order flow. Pay attention to large orders that may signal potential price movements or reversals in the XAU/USD market.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Depth",
          "definition": "The measure of the supply and demand for a security at various price levels."
        }
      ],
      "whyThisMatters": "Accurate market depth analysis allows for more informed execution decisions, minimizing slippage and maximizing entry precision.",
      "realLifeExample": "During the COMEX session, XAU/USD shows a strong bid cluster at 1,800 with 500 contracts, indicating potential support as price approaches this level.",
      "commonMistake": "Traders often overlook the significance of large orders, leading to missed opportunities or premature entries.",
      "quickNote": "Market depth reveals the underlying supply and demand dynamics for XAU/USD.",
      "mentorText": "When you analyze market depth, focus on where the big players are positioned. If you see significant bids at a price level, it’s likely a strong support area.",
      "mentorAnalogy": "Think of market depth like a busy airport runway. The more planes waiting to land (bids), the more congested it becomes, indicating a potential delay in price movement."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Impact of Economic Events on XAU/USD",
    "label": "Gold Track",
    "body": "### Core Scenario: Economic Events and XAU/USD Pricing\nEconomic events can significantly influence the pricing of XAU/USD. This card teaches **how to adjust execution strategies based on upcoming economic data releases**.\n\n* **Event Calendar Monitoring**: Regularly check the economic calendar for scheduled events like Non-Farm Payrolls or CPI releases. These events can lead to increased volatility in XAU/USD.\n* **Volatility Anticipation**: Prepare for potential price swings by analyzing historical price reactions to similar events. Adjust stop-loss and take-profit levels accordingly to accommodate expected volatility.\n* **Execution Timing**: Consider delaying execution around high-impact news releases. Enter trades post-event to avoid whipsaw effects caused by rapid price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Events",
          "definition": "Scheduled announcements that can impact market conditions and asset prices."
        }
      ],
      "whyThisMatters": "Understanding the impact of economic events on XAU/USD allows traders to navigate volatility and optimize execution strategies.",
      "realLifeExample": "On the day of the U.S. Non-Farm Payroll report, XAU/USD spiked from 1,790 to 1,805 in minutes, highlighting the need for strategic execution adjustments.",
      "commonMistake": "Failing to account for economic events can lead to unexpected losses due to sudden price fluctuations.",
      "quickNote": "Economic events can create significant volatility in XAU/USD, necessitating strategic execution adjustments.",
      "mentorText": "Always be aware of the economic calendar. If a major report is due, consider waiting to enter your position until the dust settles.",
      "mentorAnalogy": "Adjusting your strategy for economic events is like a pilot preparing for turbulence. You need to brace for impact and adjust your flight path accordingly."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "practice",
    "title": "Simulating XAU/USD Execution Scenarios",
    "label": "Gold Track",
    "body": "### Core Scenario: Practical Execution Simulations for XAU/USD\nEngaging in simulated execution scenarios enhances decision-making skills under various market conditions. This card provides **practical exercises to apply learned strategies effectively**.\n\n* **Scenario Setup**: Create different market conditions, such as high volatility during economic releases or low liquidity during off-hours. Practice executing trades in these environments.\n* **Execution Strategy Application**: Apply specific strategies, such as limit orders near support levels or market orders during breakout scenarios. Assess the effectiveness of each approach.\n* **Performance Review**: After each simulation, analyze trade outcomes. Identify what worked, what didn’t, and refine your execution strategies based on these insights.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Simulation",
          "definition": "Practicing trade execution in controlled scenarios to improve decision-making."
        }
      ],
      "whyThisMatters": "Simulating execution scenarios prepares traders for real-market conditions, enhancing adaptability and confidence.",
      "realLifeExample": "Simulating a scenario where XAU/USD drops to 1,780 during a news release, practicing limit orders to enter at 1,775, and evaluating the outcome.",
      "commonMistake": "Traders often skip the review phase after simulations, missing valuable lessons that could improve future performance.",
      "quickNote": "Simulated execution scenarios build confidence and adaptability in real market conditions.",
      "mentorText": "Run through these simulations as if they were live trades. The more you practice, the more instinctive your decisions will become.",
      "mentorAnalogy": "Think of these simulations like a flight simulator for pilots. You practice maneuvers in a safe environment before facing real-world challenges."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated scenario, XAU/USD is approaching a significant support level at 1,780. What is the best execution strategy?",
      "options": [
        {
          "id": "0",
          "text": "Place a limit order at 1,775 to capitalize on potential support.",
          "isCorrect": true,
          "feedback": "Placing a limit order allows you to enter at a favorable price while respecting the support level."
        },
        {
          "id": "1",
          "text": "Execute a market order immediately at 1,780.",
          "isCorrect": false,
          "feedback": "Executing a market order may lead to unfavorable entry, especially if the price bounces off support."
        },
        {
          "id": "2",
          "text": "Wait for confirmation before entering any trade.",
          "isCorrect": false,
          "feedback": "While waiting for confirmation can be prudent, it may result in missing the entry at a favorable price."
        },
        {
          "id": "3",
          "text": "Set a stop-loss at 1,790 and enter a market order.",
          "isCorrect": false,
          "feedback": "This strategy risks entering at a higher price without giving the support level a chance to hold."
        }
      ]
    },
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "summary",
    "title": "Summary of XAU/USD Execution Techniques",
    "label": "Gold Track",
    "body": "### Core Scenario: Recap of XAU/USD Execution Techniques\nReinforcing execution techniques is essential for consistent performance in trading XAU/USD. This card summarizes **key strategies for tick-level execution and spread management**.\n\n* **Timing Precision**: Execute trades during optimal market hours, focusing on the COMEX session when liquidity is highest. Avoid trading during low-volume periods to reduce slippage.\n* **Spread Management**: Monitor the bid-ask spread closely. Execute trades when spreads are tight, particularly during high liquidity periods, to enhance profitability.\n* **Adaptive Strategies**: Adjust execution strategies based on market conditions, such as volatility spikes or economic events. Flexibility in approach is critical for successful trading.",
    "context": {
      "keyTerms": [
        {
          "term": "Tick-Level Execution",
          "definition": "Executing trades at the smallest price movement increments in the market."
        }
      ],
      "whyThisMatters": "Mastering execution techniques ensures that traders can capitalize on market opportunities while minimizing costs.",
      "realLifeExample": "During the COMEX session, XAU/USD trades with a spread of 2 pips at 1,800, allowing for optimal execution of limit orders.",
      "commonMistake": "Traders often neglect to adjust their strategies based on changing market conditions, leading to suboptimal execution.",
      "quickNote": "Effective execution techniques enhance profitability and reduce trading costs in XAU/USD.",
      "mentorText": "Always be aware of the timing and spread when executing trades. A small difference can significantly impact your bottom line.",
      "mentorAnalogy": "Think of execution techniques like a surgeon's precision during an operation. Every move must be calculated and timed perfectly to achieve the best outcome."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  }
];
