import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Foundations of Crypto Target Path Planning",
    "label": "Crypto Track",
    "body": "### Crypto Target Path Planning: Foundations\nCrypto markets exhibit unique structural characteristics that demand precise target path planning. This mission brief introduces the critical role of **ask walls and order book depths** in setting realistic targets.\n\n* **Ask Wall Identification**: Large ask walls on exchanges act as significant resistance levels. Identifying these walls helps in setting realistic exit points that align with market liquidity.\n* **Order Book Depth Analysis**: Evaluating the depth of the order book provides insights into potential price barriers and liquidity voids, aiding in the formulation of feasible target paths.\n* **Dynamic Market Conditions**: Crypto markets are highly volatile; thus, targets should adapt to real-time changes in order book dynamics to avoid premature exits or missed opportunities.",
    "context": {
      "keyTerms": [
        {
          "term": "Ask Wall",
          "definition": "A large concentration of sell orders at a specific price level in the order book."
        },
        {
          "term": "Order Book Depth",
          "definition": "The volume of buy and sell orders at various price levels in an order book."
        }
      ],
      "whyThisMatters": "Understanding ask walls and order book depths is essential for setting realistic targets that align with market liquidity and volatility.",
      "realLifeExample": "On Binance, BTC/USDT shows a significant ask wall at $60,000 with 500 BTC in sell orders, suggesting a strong resistance level for target planning.",
      "commonMistake": "Ignoring ask walls and setting targets based solely on technical indicators leads to unrealistic expectations.",
      "quickNote": "Identify ask walls to align targets with market liquidity.",
      "mentorText": "In crypto, the order book is your map. Spotting ask walls and understanding depth is like reading terrain before a hike. It tells you where the cliffs are.",
      "mentorAnalogy": "Just as a pilot uses radar to navigate through stormy weather, traders use order book data to navigate through volatile crypto markets."
    },
    "taskData": null,
    "visualKey": "crypto-target-foundations"
  },
  {
    "type": "concept",
    "title": "Targeting Large Exchange Ask Walls",
    "label": "Crypto Track",
    "body": "### Target Path Planning: Large Exchange Ask Walls\nTargeting large exchange ask walls is crucial for effective path planning in crypto trading. This concept focuses on leveraging **order book data** to inform target strategies.\n\n* **Ask Wall Recognition**: Identify large concentrations of sell orders at specific price levels. These serve as potential resistance zones where price action may stall.\n* **Liquidity Consideration**: Large ask walls indicate high liquidity levels, which can absorb significant buying pressure. Plan exits just before these walls to ensure execution.\n* **Order Book Monitoring**: Continuously monitor order book changes to adjust targets dynamically, accommodating shifts in market sentiment and liquidity.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders for a specific asset, organized by price level."
        }
      ],
      "whyThisMatters": "Targeting ask walls allows traders to align their exit strategies with market liquidity, reducing slippage and execution risk.",
      "realLifeExample": "On Kraken, ETH/USD shows an ask wall at $4,000 with 1,000 ETH in sell orders. A trader plans to exit at $3,950 to avoid the wall's resistance.",
      "commonMistake": "Setting targets beyond large ask walls without considering liquidity can lead to unfilled orders or increased slippage.",
      "quickNote": "Plan exits just before ask walls to leverage liquidity.",
      "mentorText": "Think of ask walls as speed bumps in trading. You don't want to hit them at full speed; plan your exits just before to maintain momentum.",
      "mentorAnalogy": "Like a ship navigating a crowded harbor, traders must plan their path to avoid congestion at large ask walls."
    },
    "taskData": null,
    "visualKey": "crypto-ask-wall-targets"
  },
  {
    "type": "concept",
    "title": "Pegging Targets with Spot-Perp Discrepancies",
    "label": "Crypto Track",
    "body": "### Target Adjustment: Spot-Perp Discrepancies\nAdjusting targets based on spot-perp discrepancies leverages market inefficiencies for enhanced accuracy. This concept focuses on **using these discrepancies** to refine target planning.\n\n* **Discrepancy Identification**: Monitor differences between spot and perpetual futures prices. Significant discrepancies can indicate arbitrage opportunities or market inefficiencies.\n* **Target Adjustment**: Align targets with the direction of the discrepancy. If the perp is trading at a premium, consider setting targets slightly lower to account for potential mean reversion.\n* **Market Sentiment Analysis**: Use discrepancies as a sentiment gauge. A persistent premium or discount can reflect bullish or bearish sentiment, respectively, informing target adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot-Perp Discrepancy",
          "definition": "The difference in price between spot and perpetual futures markets for the same asset."
        }
      ],
      "whyThisMatters": "Spot-perp discrepancies provide insights into market sentiment and potential price corrections, aiding in precise target setting.",
      "realLifeExample": "On BitMEX, BTC spot trades at $50,000 while the perp is at $50,500. A trader sets a target at $50,250, anticipating a mean reversion.",
      "commonMistake": "Ignoring spot-perp discrepancies can lead to targets that don't account for potential market corrections.",
      "quickNote": "Use spot-perp discrepancies to refine target accuracy.",
      "mentorText": "Spot-perp discrepancies are like pressure gauges. They tell you where the market might be overextended and where corrections could occur.",
      "mentorAnalogy": "Just as engineers adjust for pressure differences in a pipeline, traders adjust targets based on spot-perp discrepancies to ensure smooth flow."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-target-peg"
  },
  {
    "type": "concept",
    "title": "Scaling Targets with Funding Rates",
    "label": "Crypto Track",
    "body": "### Target Scaling: Funding Rates\nScaling targets based on funding rates involves setting realistic targets by considering **funding cost dynamics**. This concept focuses on how funding rates influence target planning.\n\n* **Funding Rate Analysis**: Evaluate the funding rate to understand the cost of holding a position. High funding rates can indicate strong directional bias and potential reversals.\n* **Target Scaling**: Adjust targets to account for funding costs. In a high funding rate environment, consider scaling back targets to offset potential holding costs.\n* **Directional Bias Consideration**: Use funding rates as a sentiment indicator. A positive rate suggests bullish sentiment, while a negative rate indicates bearish sentiment, guiding target adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment exchanged between long and short positions in perpetual futures to maintain price alignment with the spot market."
        }
      ],
      "whyThisMatters": "Funding rates reflect market sentiment and holding costs, crucial for setting targets that are both realistic and cost-effective.",
      "realLifeExample": "On Binance Futures, the BTC funding rate is 0.1%. A trader reduces their target by 0.5% to account for the cost of holding a long position.",
      "commonMistake": "Neglecting funding rates can lead to targets that don't account for the cost of maintaining positions, impacting net profitability.",
      "quickNote": "Consider funding rates to align targets with holding costs.",
      "mentorText": "Funding rates are like the interest on a loan. They affect your bottom line, so adjust your targets to ensure you're not paying more than you're earning.",
      "mentorAnalogy": "Just as a business adjusts pricing based on interest rates, traders adjust targets based on funding rates to maintain profitability."
    },
    "taskData": null,
    "visualKey": "crypto-funding-target-scaling"
  },
  {
    "type": "concept",
    "title": "Drilling Down on Crypto Target Components",
    "label": "Crypto Track",
    "body": "### Crypto Target Components: Practical Refinement\nRefining target path planning in crypto markets requires hands-on exercises tailored to crypto-specific scenarios.\n\n* **Component Analysis**: Break down the target path into individual components such as entry, stop-loss, and exit points. Evaluate each component's alignment with the overall market structure.\n* **Scenario Simulation**: Use historical data to simulate trades, focusing on how different market conditions affect target paths. Adjust components based on volatility and liquidity.\n* **Iterative Refinement**: Continuously refine your target components by reviewing past performance and adjusting based on new insights. This iterative process helps in adapting to market changes.",
    "context": {
      "keyTerms": [
        {
          "term": "Target Path",
          "definition": "A planned route for exiting a trade, based on market structure and conditions."
        },
        {
          "term": "Component Analysis",
          "definition": "Breaking down a process into its fundamental parts for detailed examination."
        }
      ],
      "whyThisMatters": "Refining target components ensures that exit strategies are realistic and adaptable to crypto market conditions.",
      "realLifeExample": "Analyzing a BTCUSD trade where the entry was at $30,000, stop-loss at $29,500, and target exit at $31,500, adjusting based on 24-hour volatility.",
      "commonMistake": "Ignoring the impact of crypto-specific volatility on target path components.",
      "quickNote": "Refine target components to align with crypto market dynamics.",
      "mentorText": "Focus on each part of your target path like a puzzle piece. Each must fit the market's current shape.",
      "mentorAnalogy": "Think of target path planning like a chess game. Each move (component) must be calculated based on the opponent's (market's) potential responses."
    },
    "taskData": null,
    "visualKey": "crypto-target-drill-component"
  },
  {
    "type": "concept",
    "title": "Debriefing Crypto Target Path Outcomes",
    "label": "Crypto Track",
    "body": "### Crypto Target Path Debrief: Performance Review\nConducting a debrief of your crypto target path outcomes is essential for improving future strategies.\n\n* **Outcome Analysis**: Review each trade's outcome against the planned target path. Identify deviations and their causes.\n* **Strategy Adjustment**: Based on outcome analysis, adjust strategies to better align with observed market behavior. Consider factors like liquidity and news events.\n* **Feedback Loop**: Establish a feedback loop where insights from debriefs inform future target path planning. This continuous improvement cycle enhances decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Debrief",
          "definition": "A detailed review and analysis of a completed operation or activity."
        },
        {
          "term": "Feedback Loop",
          "definition": "A system where outputs are circled back as inputs to improve future performance."
        }
      ],
      "whyThisMatters": "Debriefing allows traders to learn from past trades and refine their strategies for better future performance.",
      "realLifeExample": "After a failed ETHUSD trade, analyzing how unexpected regulatory news affected the target path, leading to a strategy adjustment.",
      "commonMistake": "Failing to conduct a thorough debrief, resulting in repeated mistakes.",
      "quickNote": "Debrief to transform past outcomes into future insights.",
      "mentorText": "Every trade is a lesson. Debrief thoroughly to understand what the market taught you.",
      "mentorAnalogy": "Like a post-flight analysis, debriefing ensures every flight (trade) informs the next for safer, more efficient journeys."
    },
    "taskData": null,
    "visualKey": "crypto-target-debrief-component"
  },
  {
    "type": "practice",
    "title": "Practical Application of Crypto Target Paths",
    "label": "Crypto Track",
    "body": "### Applying Crypto Target Paths: Hands-On Practice\nEngage in practical exercises to apply crypto target path planning concepts effectively.\n\n* **Scenario-Based Exercises**: Work through specific scenarios to apply target path planning. Focus on entry, exit, and adjustment strategies.\n* **Real-Time Application**: Practice applying target paths in simulated real-time environments to test decision-making under pressure.\n* **Performance Review**: After completing exercises, review performance to identify strengths and areas for improvement.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario-Based Exercises",
          "definition": "Practical tasks designed to simulate real-world conditions for skill application."
        },
        {
          "term": "Real-Time Application",
          "definition": "Executing strategies in a simulated environment that mimics live market conditions."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge and prepares traders for real market conditions.",
      "realLifeExample": "Simulating a trade on BTCUSD with a target path based on a breakout strategy during high volatility periods.",
      "commonMistake": "Overlooking the importance of practice, leading to poor execution in live markets.",
      "quickNote": "Practice target paths to bridge theory and real-world execution.",
      "mentorText": "Theory is just the blueprint. Practice is where you build the structure.",
      "mentorAnalogy": "Like a pilot in a flight simulator, practice prepares you for the complexities of real-world trading."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are planning a target path for a BTCUSD trade. The market is volatile, and your initial target is $32,000. What should you consider adjusting?",
      "options": [
        {
          "id": "0",
          "text": "Adjust the target based on volatility and liquidity.",
          "isCorrect": true,
          "feedback": "Correct. Volatility and liquidity can significantly impact the feasibility of your target."
        },
        {
          "id": "1",
          "text": "Ignore market conditions and stick to the original target.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring market conditions can lead to unrealistic targets."
        },
        {
          "id": "2",
          "text": "Set a stop-loss closer to the entry point.",
          "isCorrect": false,
          "feedback": "Incorrect. While stop-loss is important, the question focuses on target adjustment."
        },
        {
          "id": "3",
          "text": "Increase the target to maximize profit potential.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing the target without considering market conditions can be risky."
        }
      ]
    },
    "visualKey": "crypto-target-foundations"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Target Path Planning",
    "label": "Crypto Track",
    "body": "### Crypto Target Path Planning: Core Principles\nReview the key concepts and strategies of crypto target path planning.\n\n* **Structural Exits**: Focus on exits that align with market structure rather than arbitrary profit goals. This ensures realistic and achievable targets.\n* **Market Adaptability**: Continuously adjust target paths based on market conditions, including volatility and liquidity.\n* **Performance Feedback**: Use debriefs and performance reviews to refine strategies and improve future outcomes.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Exits",
          "definition": "Exit strategies based on market structure rather than fixed profit targets."
        },
        {
          "term": "Market Adaptability",
          "definition": "The ability to adjust strategies based on changing market conditions."
        }
      ],
      "whyThisMatters": "A structured approach to target path planning enhances the probability of successful trades in volatile crypto markets.",
      "realLifeExample": "Planning a target path for ETHUSD, adjusting exits based on observed support and resistance levels during a market rally.",
      "commonMistake": "Setting fixed profit targets without considering market dynamics.",
      "quickNote": "Align exits with market structure for realistic targets.",
      "mentorText": "Your target path is your roadmap. Make sure it's drawn with the terrain in mind, not just the destination.",
      "mentorAnalogy": "Like an architect designing a building, your plans must account for the environment and materials, not just the final appearance."
    },
    "taskData": null,
    "visualKey": "crypto-ask-wall-targets"
  }
];
