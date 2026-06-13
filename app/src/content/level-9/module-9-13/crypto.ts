import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Assembling Spot Accumulation and Perpetual Swap Hedging Strategies",
    "label": "Crypto Track",
    "body": "<!-- M9.13-crypto-C1 -->\n### Core Scenario: Combined Strategy Assembly\nThe integration of spot accumulation with perpetual swap hedging creates a robust framework for managing risk and enhancing returns in crypto trading. This card outlines **the structural approach to combining these strategies effectively**.\n\n* **Spot Accumulation Framework**: Establish a tiered buying strategy where positions are built incrementally at defined price levels. For instance, accumulate Bitcoin (BTC) at $20,000, $19,500, and $19,000 to average down costs.\n* **Perpetual Swap Hedging Mechanics**: Utilize perpetual swaps to hedge against adverse price movements. For example, if holding 5 BTC, open a short position in perpetual swaps equivalent to 2 BTC at a price of $20,500 to protect against downside risk.\n* **Synergistic Effect**: Monitor the correlation between spot positions and swap hedges. If BTC rallies to $22,000, assess the effectiveness of the hedge and adjust positions accordingly to lock in profits while maintaining exposure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Spot Accumulation",
          "definition": "The process of gradually building a position in an asset by purchasing at various price levels."
        },
        {
          "term": "Perpetual Swap",
          "definition": "A derivative that allows traders to speculate on the future price of an asset without an expiration date."
        }
      ],
      "whyThisMatters": "Combining these strategies allows for effective risk management while capitalizing on market movements, essential for institutional-grade trading.",
      "realLifeExample": "During a market dip, a trader accumulates Ethereum (ETH) at $1,800, $1,750, and $1,700, while simultaneously shorting perpetual swaps at $1,820 to hedge against further declines.",
      "commonMistake": "Failing to adjust the hedge size in relation to spot positions, leading to inadequate protection during volatile swings.",
      "quickNote": "Integrate spot accumulation with perpetual swap hedging for a balanced approach to risk and reward.",
      "mentorText": "When you build your position, think of it as constructing a safety net. Each layer you add with spot accumulation should be counterbalanced by a hedge to protect against unforeseen drops.",
      "mentorAnalogy": "Consider this like a structural engineer designing a bridge. Each support beam (spot accumulation) must be reinforced with cables (perpetual swaps) to withstand the forces of nature (market volatility)."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "concept",
    "title": "Techniques for Spot Accumulation in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.13-crypto-C2 -->\n### Core Scenario: Optimizing Entry Points\nEffective spot accumulation requires precise techniques to optimize entry points in the volatile crypto market. This card details **specific methods to enhance position building**.\n\n* **Dollar-Cost Averaging (DCA)**: Implement DCA by investing a fixed amount of capital at regular intervals, regardless of price. For example, allocate $500 weekly to Bitcoin (BTC) purchases to average entry costs over time.\n* **Limit Order Placement**: Use limit orders to accumulate at strategic price points. Set orders to buy Litecoin (LTC) at $120, $115, and $110 to capitalize on potential retracements.\n* **Market Sentiment Analysis**: Analyze market sentiment indicators to time entries. If fear and uncertainty dominate, consider increasing accumulation at lower prices, such as buying Cardano (ADA) at $0.40 during a bearish trend.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dollar-Cost Averaging",
          "definition": "A strategy of investing a fixed amount regularly to reduce the impact of volatility."
        },
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell an asset at a specified price or better."
        }
      ],
      "whyThisMatters": "Optimizing entry points through these techniques enhances the effectiveness of spot accumulation, crucial for building a solid portfolio.",
      "realLifeExample": "A trader uses DCA to invest $1,000 in Solana (SOL) over four weeks, purchasing at $30, $28, $26, and $24, effectively averaging down their cost basis.",
      "commonMistake": "Neglecting to set limit orders, resulting in missed opportunities to accumulate at favorable prices.",
      "quickNote": "Utilize DCA and limit orders to strategically build positions in the crypto market.",
      "mentorText": "Think of your accumulation strategy like a chess game. Each move should be calculated and deliberate, ensuring you position yourself advantageously over time.",
      "mentorAnalogy": "This is akin to a chef preparing a complex dish. Each ingredient (purchase) must be added at the right moment to create a harmonious flavor profile (cost basis)."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "concept",
    "title": "Implementing Perpetual Swap Hedging",
    "label": "Crypto Track",
    "body": "<!-- M9.13-crypto-C3 -->\n### Core Scenario: Protecting Against Market Volatility\nPerpetual swap hedging serves as a vital tool for mitigating risks associated with market fluctuations. This card explains **the mechanics of implementing effective hedging strategies**.\n\n* **Position Sizing for Hedges**: Determine the appropriate size of your hedge based on spot position exposure. For example, if holding 10 BTC, consider shorting 3 BTC in perpetual swaps to offset potential losses.\n* **Entry Timing for Hedges**: Execute hedge positions when market sentiment shifts. If Bitcoin (BTC) shows signs of bearish momentum, open a short position in perpetual swaps at $21,500 to protect your long positions.\n* **Adjusting Hedges Based on Volatility**: Continuously monitor volatility metrics. If the BTC volatility index spikes, increase hedge size to 50% of your spot position to ensure adequate protection during turbulent periods.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging",
          "definition": "A risk management strategy used to offset potential losses in an investment."
        },
        {
          "term": "Volatility Index",
          "definition": "A measure of the market's expectation of future volatility."
        }
      ],
      "whyThisMatters": "Implementing effective hedging strategies is essential for safeguarding investments against sudden market downturns, a necessity in crypto trading.",
      "realLifeExample": "A trader holding 15 ETH opens a short position in perpetual swaps for 5 ETH at $1,800 as the market shows signs of a downturn, effectively hedging against potential losses.",
      "commonMistake": "Over-hedging by shorting too large a position, which can lead to unnecessary losses if the market moves favorably.",
      "quickNote": "Utilize perpetual swaps to hedge against adverse price movements while maintaining exposure to your spot positions.",
      "mentorText": "When you hedge, think of it as putting on a life jacket before setting sail. It’s about ensuring you’re prepared for unexpected waves in the market.",
      "mentorAnalogy": "This is like a pilot adjusting the flight path in response to turbulence. The hedge is your autopilot, keeping you steady while navigating through volatility."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "concept",
    "title": "Analyzing Market Conditions for Crypto Strategies",
    "label": "Crypto Track",
    "body": "<!-- M9.13-crypto-C4 -->\n### Core Scenario: Informed Decision-Making\nUnderstanding market conditions is critical for the successful implementation of both spot accumulation and perpetual swap hedging strategies. This card outlines **how to analyze these conditions effectively**.\n\n* **Technical Analysis Indicators**: Utilize indicators such as RSI and MACD to gauge market momentum. For instance, if the RSI for Bitcoin (BTC) is above 70, consider reducing accumulation as it may indicate overbought conditions.\n* **Fundamental Analysis**: Assess macroeconomic factors and news events impacting crypto. If a major regulatory announcement is expected, adjust your strategies accordingly, possibly increasing hedges before the news breaks.\n* **Market Sentiment Tools**: Leverage sentiment analysis tools to gauge trader emotions. If sentiment shifts to extreme fear, consider increasing spot accumulation as prices may present buying opportunities.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Analysis",
          "definition": "The analysis of price movements and trading volumes to forecast future price movements."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        }
      ],
      "whyThisMatters": "Analyzing market conditions ensures that strategies are aligned with current trends, enhancing the effectiveness of both accumulation and hedging.",
      "realLifeExample": "A trader notices a bearish divergence in the MACD for Ethereum (ETH) while sentiment indicators show extreme greed, prompting them to pause accumulation and increase hedging.",
      "commonMistake": "Ignoring broader market signals and relying solely on one analysis method, leading to misaligned strategies.",
      "quickNote": "Employ both technical and fundamental analysis to adapt strategies to prevailing market conditions.",
      "mentorText": "Think of market analysis like a weather report before a long journey. You need to know the conditions ahead to navigate successfully and adjust your course as needed.",
      "mentorAnalogy": "This is similar to a surgeon assessing a patient’s vitals before an operation. Each indicator provides critical information to ensure the right decisions are made during the procedure."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "concept",
    "title": "Managing Risk in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.13-crypto-C5 -->\n### Core Strategy: Risk Management Techniques for Crypto\nEffective risk management is essential in the volatile crypto market, where price swings can be significant. This card outlines **how to balance risk across spot accumulation and hedging strategies**.\n\n* **Position Sizing**: Determine the maximum percentage of your portfolio to allocate to each crypto asset. For instance, limit exposure to any single asset to 5% of your total capital to mitigate the impact of adverse price movements.\n* **Hedging with Perpetual Swaps**: Utilize perpetual swap contracts to hedge against downside risk. If holding 1 BTC at $30,000, consider taking a short position in a perpetual swap to offset potential losses if the market declines.\n* **Diversification Across Assets**: Spread investments across multiple cryptocurrencies to reduce risk concentration. For example, allocate 40% to Bitcoin, 30% to Ethereum, and 30% to altcoins to balance risk and potential returns.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Hedging",
          "definition": "A risk management strategy used to offset potential losses in an investment."
        },
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various assets to reduce risk."
        }
      ],
      "whyThisMatters": "Implementing structured risk management techniques is critical to surviving and thriving in the unpredictable crypto landscape.",
      "realLifeExample": "A trader holds 2 BTC at $28,000 and uses a perpetual swap to short 0.5 BTC at $27,500, effectively hedging against a potential downturn.",
      "commonMistake": "Failing to adjust position sizes based on market volatility can lead to excessive losses during downturns.",
      "quickNote": "Balance risk through position sizing, hedging, and diversification.",
      "mentorText": "When trading crypto, think of your capital as a fortress. You need to build defenses—position sizes, hedges, and diversified assets—to withstand the inevitable attacks from market volatility.",
      "mentorAnalogy": "Managing risk in crypto trading is like an architect designing a building. Each structural element must be carefully calculated to withstand environmental pressures, just as your portfolio must be built to endure market fluctuations."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "concept",
    "title": "Planning Exits for Crypto Positions",
    "label": "Crypto Track",
    "body": "<!-- M9.13-crypto-C6 -->\n### Core Strategy: Exit Planning for Crypto Positions\nEffective exit strategies are vital for capitalizing on gains and protecting against losses in crypto trading. This card focuses on **developing exit plans that integrate spot accumulation and perpetual swap hedging**.\n\n* **Target Profit Levels**: Set specific profit targets based on technical analysis or historical price levels. For example, if you accumulate ETH at $2,000, plan to take profits at $2,500, ensuring a clear exit point.\n* **Trailing Stops**: Implement trailing stops to lock in profits as the price rises. If BTC moves from $30,000 to $32,000, adjust your stop-loss to $31,500, allowing for upward movement while protecting gains.\n* **Hedge Exit Coordination**: Align your exit from spot positions with your hedging strategy. If you are long 1 BTC at $30,000 and short 0.5 BTC in a perpetual swap, close both positions simultaneously to maximize profit realization and minimize risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Target Profit Levels",
          "definition": "Predefined price points at which a trader plans to exit a position for profit."
        },
        {
          "term": "Trailing Stops",
          "definition": "A stop-loss order that moves with the market price to protect profits."
        },
        {
          "term": "Hedge Exit Coordination",
          "definition": "The simultaneous closing of spot and hedge positions to optimize profit and reduce risk."
        }
      ],
      "whyThisMatters": "A well-defined exit strategy ensures that traders can effectively lock in profits and minimize losses in a volatile market.",
      "realLifeExample": "A trader accumulates 5 LTC at $150 and sets a target profit level of $200. As LTC reaches $180, they implement a trailing stop at $175 to secure profits while allowing for further gains.",
      "commonMistake": "Neglecting to set exit strategies can lead to missed profit opportunities or excessive losses during market reversals.",
      "quickNote": "Establish clear exit plans to optimize profit-taking and risk management.",
      "mentorText": "Think of your exit strategy as a parachute. You need to know when to deploy it to ensure a safe landing, especially in the turbulent skies of crypto trading.",
      "mentorAnalogy": "Planning exits in crypto trading is like a pilot preparing for landing. Each approach requires precision and timing, ensuring a safe transition from high altitudes to solid ground."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "practice",
    "title": "Simulating Crypto Trading Scenarios",
    "label": "Crypto Track",
    "body": "<!-- M9.13-crypto-C7 -->\n### Core Activity: Practical Simulations in Crypto Trading\nEngaging in simulated trading scenarios enhances the application of integrated crypto strategies in real-time market conditions. This card emphasizes **the importance of practice in developing proficiency**.\n\n* **Scenario-Based Trading**: Create a series of market scenarios that reflect different volatility levels and price movements. For instance, simulate a market where BTC drops 10% in one hour, and practice executing your risk management strategies.\n* **Performance Metrics Tracking**: Monitor key performance indicators such as win rate, average profit/loss, and drawdown during simulations. This data will help refine strategies and identify areas for improvement.\n* **Feedback Loop Implementation**: After each simulation, conduct a thorough review of decisions made and outcomes achieved. Use this analysis to adjust strategies and improve future performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario-Based Trading",
          "definition": "Trading practice based on hypothetical market conditions to test strategies."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate trading performance."
        },
        {
          "term": "Feedback Loop",
          "definition": "A process of reviewing outcomes to refine trading strategies."
        }
      ],
      "whyThisMatters": "Simulations provide a risk-free environment to test and refine trading strategies, crucial for developing effective trading skills.",
      "realLifeExample": "A trader simulates a scenario where ETH experiences a rapid price increase of 15% in 30 minutes, testing their exit strategy and risk management protocols in real-time.",
      "commonMistake": "Relying solely on theoretical knowledge without practical application can lead to poor performance in live trading.",
      "quickNote": "Utilize simulations to practice and refine integrated crypto strategies.",
      "mentorText": "Think of simulations as your training ground. Just like athletes practice under pressure, you need to test your strategies in a controlled environment to prepare for the real market.",
      "mentorAnalogy": "Simulating crypto trading is akin to a flight simulator for pilots. It allows you to experience various conditions and scenarios without the risk of crashing in the real world."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated trading scenario where Bitcoin (BTC) experiences a sudden 10% drop within one hour, which of the following actions best exemplifies effective risk management strategies?",
      "options": [
        {
          "id": "0",
          "text": "Implementing a stop-loss order to limit potential losses.",
          "isCorrect": true,
          "feedback": "This action is correct as it demonstrates a proactive approach to risk management by setting a predetermined exit point to minimize losses."
        },
        {
          "id": "1",
          "text": "Continuing to hold the position without any adjustments.",
          "isCorrect": false,
          "feedback": "This option is incorrect because failing to adjust your position in response to significant market movements can lead to larger losses."
        },
        {
          "id": "2",
          "text": "Increasing the position size to capitalize on the lower price.",
          "isCorrect": false,
          "feedback": "This is incorrect as it increases exposure to risk during a volatile market, which can exacerbate losses."
        },
        {
          "id": "3",
          "text": "Ignoring market conditions and relying solely on previous performance.",
          "isCorrect": false,
          "feedback": "This option is incorrect because it disregards the importance of adapting to current market conditions, which is essential for effective trading."
        }
      ]
    },
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "summary",
    "title": "Recap of Crypto Multi-Strategy Integration",
    "label": "Crypto Track",
    "body": "<!-- M9.13-crypto-C8 -->\n### Core Summary: Integration of Multi-Strategy Approaches in Crypto\nThis summary consolidates the essential concepts learned about integrating spot accumulation and perpetual swap hedging strategies in crypto trading. Key takeaways include **the importance of a cohesive strategy for successful trading**.\n\n* **Holistic Risk Management**: Emphasize the need for a comprehensive risk management approach that combines position sizing, hedging, and diversification to protect capital.\n* **Strategic Exit Planning**: Reinforce the significance of having clear exit strategies that align with market conditions and personal trading goals, ensuring effective profit-taking.\n* **Continuous Improvement through Simulation**: Highlight the value of simulated trading scenarios as a tool for refining strategies and enhancing trading proficiency.",
    "context": {
      "keyTerms": [
        {
          "term": "Holistic Risk Management",
          "definition": "An integrated approach to managing risk across multiple strategies."
        },
        {
          "term": "Strategic Exit Planning",
          "definition": "The process of developing exit strategies that align with market dynamics."
        },
        {
          "term": "Continuous Improvement",
          "definition": "The ongoing process of refining strategies based on performance feedback."
        }
      ],
      "whyThisMatters": "A cohesive multi-strategy approach is essential for navigating the complexities of the crypto market and achieving long-term success.",
      "realLifeExample": "A trader successfully integrates spot accumulation of BTC with perpetual swaps, adjusting their strategies based on market volatility and performance metrics to optimize returns.",
      "commonMistake": "Overlooking the integration of strategies can lead to disjointed trading approaches and missed opportunities.",
      "quickNote": "Integrate risk management, exit planning, and simulations for effective crypto trading.",
      "mentorText": "As you wrap up this module, remember that successful trading is not just about individual strategies but how well they work together. Think of it as a symphony where each instrument plays its part to create harmony.",
      "mentorAnalogy": "Integrating multi-strategy approaches in crypto trading is like conducting an orchestra. Each section must work in concert to produce a cohesive performance, just as your strategies must align for optimal trading results."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  }
];
