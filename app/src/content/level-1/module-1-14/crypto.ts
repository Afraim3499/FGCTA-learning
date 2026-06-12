import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto-Specific Trade Setup Introduction",
    "label": "Crypto Track",
    "body": "Integrating crypto-specific parameters into a unified trade plan requires a focus on spot-perp spread, perp funding rate, and exchange depth. This mission brief outlines the critical elements to synthesize these factors effectively.\n\n* **Spot-Perp Spread**: Analyze the difference between spot and perpetual futures prices. A significant spread may indicate arbitrage opportunities or market inefficiencies.\n* **Perp Funding Rate**: Monitor the funding rate to understand the cost of holding a position. A high rate can signal market sentiment and influence directional bias.\n* **Exchange Depth**: Evaluate the order book depth to assess liquidity and potential slippage. Shallow depth may lead to increased execution risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot-Perp Spread",
          "definition": "The price difference between spot and perpetual futures markets."
        },
        {
          "term": "Perp Funding Rate",
          "definition": "A periodic payment made between long and short positions in perpetual futures."
        },
        {
          "term": "Exchange Depth",
          "definition": "The volume of buy and sell orders at various price levels in an exchange's order book."
        }
      ],
      "whyThisMatters": "Integrating these parameters ensures a comprehensive understanding of market conditions, enhancing decision-making in crypto trading.",
      "realLifeExample": "A trader notices a $50 spread between BTC spot and perpetual futures on Binance, with a 0.1% funding rate every 8 hours, and shallow order book depth.",
      "commonMistake": "Overlooking exchange depth can lead to unexpected slippage and poor execution.",
      "quickNote": "Synthesize spot-perp spread, funding rate, and depth for a full crypto plan.",
      "mentorText": "When building a crypto trade plan, you must consider the nuances of spot-perp spreads, funding rates, and order book depth. These factors are your compass in navigating the crypto seas.",
      "mentorAnalogy": "Think of this as a ship's captain integrating weather forecasts, fuel costs, and cargo weight to chart a safe and efficient course."
    },
    "taskData": null,
    "visualKey": "crypto-synthesis-brief"
  },
  {
    "type": "concept",
    "title": "Crypto Checklist Completeness",
    "label": "Crypto Track",
    "body": "### Crypto Checklist Completeness\nEnsuring the completeness of your crypto trade setup checklist is vital for robust planning. This card details the necessary crypto-specific parameters.\n\n* **Parameter Inclusion**: Verify that all relevant parameters such as spot-perp spread, funding rate, and exchange depth are included in your checklist. Missing elements can lead to incomplete analysis.\n* **Consistency Check**: Ensure that the data for each parameter is up-to-date and consistently sourced. Discrepancies can skew your strategy.\n* **Scenario Testing**: Test your checklist against different market scenarios to confirm its adaptability and reliability under varying conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Checklist Completeness",
          "definition": "The state of having all necessary elements included in a checklist."
        }
      ],
      "whyThisMatters": "A complete checklist prevents oversight and ensures that all critical factors are considered in your trade setup.",
      "realLifeExample": "A trader's checklist includes spot-perp spread analysis, funding rate monitoring, and exchange depth evaluation, tested against historical BTC price movements.",
      "commonMistake": "Failing to update checklist parameters regularly can lead to outdated strategies.",
      "quickNote": "Ensure your crypto checklist is complete and current for effective planning.",
      "mentorText": "Your checklist is your pre-flight checklist. Missing a step can mean the difference between a smooth flight and a crash landing.",
      "mentorAnalogy": "Like a surgeon verifying all tools are sterilized and accounted for before an operation, your checklist ensures all trading tools are ready and relevant."
    },
    "taskData": null,
    "visualKey": "crypto-synthesis-checklist"
  },
  {
    "type": "concept",
    "title": "Integrating Spot-Perp Spread",
    "label": "Crypto Track",
    "body": "### Integrating Spot-Perp Spread\nIntegrating the spot-perp spread into your crypto trade setup can optimize for arbitrage opportunities and price discrepancies.\n\n* **Spread Analysis**: Regularly monitor the spread between spot and perpetual futures prices. A widening spread may indicate potential arbitrage opportunities.\n* **Arbitrage Strategy**: Develop a strategy to exploit significant spreads, ensuring that transaction costs and execution risks are accounted for.\n* **Market Efficiency**: Use spread analysis to gauge market efficiency. Persistent discrepancies might signal underlying market issues or opportunities.",
    "context": {
      "keyTerms": [
        {
          "term": "Arbitrage",
          "definition": "The simultaneous purchase and sale of an asset to profit from a difference in the price."
        }
      ],
      "whyThisMatters": "Spot-perp spread analysis can reveal inefficiencies and opportunities for profit in the crypto markets.",
      "realLifeExample": "A trader observes a $100 spread between ETH spot and perpetual futures, indicating a potential arbitrage opportunity after accounting for fees.",
      "commonMistake": "Ignoring transaction costs can turn a seemingly profitable arbitrage into a loss.",
      "quickNote": "Spot-perp spread analysis reveals arbitrage opportunities and market inefficiencies.",
      "mentorText": "Spot-perp spreads are your radar for detecting market inefficiencies. Use them to navigate and capitalize on price discrepancies.",
      "mentorAnalogy": "Like a meteorologist tracking pressure systems to predict weather changes, you track spreads to forecast market shifts."
    },
    "taskData": null,
    "visualKey": "crypto-plan-builder-panel"
  },
  {
    "type": "concept",
    "title": "Perp Funding Rate Analysis",
    "label": "Crypto Track",
    "body": "### Perp Funding Rate Analysis\nIntegrating perp funding rate analysis into your crypto trade setup informs the cost of carry and directional bias.\n\n* **Funding Rate Monitoring**: Track the funding rate to understand the cost of maintaining a position. A high rate can indicate strong market sentiment.\n* **Directional Bias**: Use funding rates to infer market bias. Consistently high rates for longs suggest bullish sentiment, while high rates for shorts suggest bearish sentiment.\n* **Cost of Carry**: Calculate the impact of funding rates on your position's profitability. Consider these costs in your overall trade strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Cost of Carry",
          "definition": "The cost associated with holding a position over time, including interest and other fees."
        }
      ],
      "whyThisMatters": "Funding rates directly affect the profitability and strategic direction of your positions in perpetual futures.",
      "realLifeExample": "A trader notices a 0.2% funding rate on BTC longs, indicating bullish sentiment and adjusting their strategy accordingly.",
      "commonMistake": "Neglecting to factor in funding rates can lead to unexpected losses in position profitability.",
      "quickNote": "Funding rates reveal market sentiment and affect trade profitability.",
      "mentorText": "Funding rates are like the interest on a loan. They can either work for you or against you, depending on how you manage them.",
      "mentorAnalogy": "Consider funding rates as the fuel cost for a long-distance trucker; they can significantly impact the journey's profitability."
    },
    "taskData": null,
    "visualKey": "crypto-plan-audit-comparison"
  },
  {
    "type": "concept",
    "title": "Leveraging Exchange Depth for Crypto Liquidity",
    "label": "Crypto Track",
    "body": "### Leveraging Exchange Depth: Enhancing Liquidity Assessment\nUnderstanding and utilizing exchange depth is critical for evaluating liquidity and optimizing order execution in crypto markets.\n\n* **Order Book Analysis**: Examine the order book to identify liquidity pockets. Large clusters of buy or sell orders indicate potential support or resistance levels, which can affect price movement.\n* **Slippage Mitigation**: Use exchange depth data to anticipate slippage. Placing orders near high liquidity zones can reduce the impact of slippage on trade execution.\n* **Market Impact Consideration**: Assess how your order size might impact the market. Large orders in thinly traded markets can cause significant price shifts, affecting your entry and exit points.",
    "context": {
      "keyTerms": [
        {
          "term": "Exchange Depth",
          "definition": "A measure of the liquidity available at different price levels in an order book."
        }
      ],
      "whyThisMatters": "Exchange depth analysis allows traders to execute orders more efficiently by understanding liquidity distribution, minimizing slippage, and anticipating market impact.",
      "realLifeExample": "Analyzing BTC/USDT on Binance, you observe a large buy wall at $30,000, suggesting strong support. Placing a buy order just above this level minimizes slippage.",
      "commonMistake": "Ignoring order book depth and placing large market orders in low liquidity conditions, leading to excessive slippage.",
      "quickNote": "Use exchange depth to find liquidity pockets and optimize order placement.",
      "mentorText": "When you look at the order book, you're seeing the battlefield. Know where the troops are concentrated before you make your move.",
      "mentorAnalogy": "Think of exchange depth like traffic flow on a highway. Knowing where the congestion is helps you choose the best lane for smooth driving."
    },
    "taskData": null,
    "visualKey": "crypto-synthesis-brief"
  },
  {
    "type": "concept",
    "title": "Crypto-Specific Risk Management Strategies",
    "label": "Crypto Track",
    "body": "### Crypto Risk Management Strategies: Tailoring to Volatility\nCrypto markets demand specialized risk management due to their inherent volatility and unique characteristics.\n\n* **Volatility-Based Position Sizing**: Adjust position sizes based on crypto volatility metrics like ATR (Average True Range). Higher volatility requires smaller positions to maintain risk thresholds.\n* **Dynamic Stop-Loss Placement**: Use volatility-adjusted stop-loss levels to prevent premature exits. Wider stops accommodate normal crypto price swings without sacrificing risk control.\n* **Diversification Across Tokens**: Spread risk by diversifying across different cryptocurrencies, reducing exposure to single-token events and enhancing portfolio stability.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time, typically measured by standard deviation or ATR."
        }
      ],
      "whyThisMatters": "Effective risk management in crypto trading protects capital from the extreme price swings typical of this asset class.",
      "realLifeExample": "Trading ETH with an ATR of 20 points, you set a stop-loss 40 points away, allowing for typical fluctuations while controlling risk.",
      "commonMistake": "Using static stop-loss levels without accounting for the increased volatility of crypto assets.",
      "quickNote": "Adapt risk management to crypto's volatility for better capital preservation.",
      "mentorText": "In crypto, volatility is your constant companion. Adjust your sails—position sizes and stops—accordingly.",
      "mentorAnalogy": "Managing risk in crypto is like sailing in stormy seas; you must adjust your sails and ballast to stay afloat."
    },
    "taskData": null,
    "visualKey": "crypto-synthesis-checklist"
  },
  {
    "type": "practice",
    "title": "Practice: Synthesizing a Complete Crypto Trade Setup",
    "label": "Crypto Track",
    "body": "### Practice: Synthesizing a Complete Crypto Trade Setup\nApply your knowledge to create a comprehensive crypto trade setup, integrating liquidity analysis, risk management, and execution strategies.\n\n* **Scenario Setup**: You are considering a long position in ETH/USDT. The current price is $2,500, with a significant buy wall at $2,450 and an ATR of 50.\n* **Task**: Develop a trade plan that includes entry, stop-loss, position size, and target based on the given scenario.",
    "context": {
      "keyTerms": [],
      "whyThisMatters": "Synthesizing a complete trade setup ensures that all critical factors are considered, leading to more disciplined and effective trading.",
      "realLifeExample": "Using the scenario, you decide to enter at $2,460, set a stop-loss at $2,410, and target $2,600, with a position size calculated to risk 1% of your capital.",
      "commonMistake": "Failing to integrate all elements into a cohesive plan, leading to disjointed decision-making.",
      "quickNote": "Integrate all elements for a cohesive crypto trade setup.",
      "mentorText": "A complete trade setup is like a well-oiled machine; every part must work in harmony for optimal performance.",
      "mentorAnalogy": "Think of your trade setup like a chef preparing a dish. Each ingredient—liquidity, risk, execution—must be measured and combined precisely."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given the scenario, what is the most effective entry point for your trade?",
      "options": [
        {
          "id": "0",
          "text": "Enter at $2,460, just above the buy wall.",
          "isCorrect": true,
          "feedback": "Entering just above the buy wall leverages liquidity and minimizes slippage."
        },
        {
          "id": "1",
          "text": "Enter at $2,500, the current market price.",
          "isCorrect": false,
          "feedback": "Entering at the current price ignores the liquidity advantage of the buy wall."
        },
        {
          "id": "2",
          "text": "Enter at $2,400, below the buy wall.",
          "isCorrect": false,
          "feedback": "Entering below the buy wall risks missing the trade if the price doesn't dip."
        },
        {
          "id": "3",
          "text": "Enter at $2,550, anticipating a breakout.",
          "isCorrect": false,
          "feedback": "Entering above the current price without confirmation increases risk."
        }
      ]
    },
    "visualKey": "crypto-plan-builder-panel"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Plan Integration",
    "label": "Crypto Track",
    "body": "### Summary of Crypto Plan Integration: Cohesive Strategy Review\nReview the integration of crypto-specific parameters into a unified trade plan, emphasizing the importance of a comprehensive approach.\n\n* **Holistic Integration**: Ensure that all elements—liquidity analysis, risk management, and execution—are cohesively integrated into your trade plan.\n* **Continuous Adaptation**: Regularly update your plan to reflect market changes and new insights, maintaining its relevance and effectiveness.\n* **Performance Evaluation**: Consistently evaluate the outcomes of your trade plans to identify strengths and areas for improvement, refining your approach over time.",
    "context": {
      "keyTerms": [],
      "whyThisMatters": "A unified trade plan that integrates all relevant factors increases the likelihood of consistent trading success.",
      "realLifeExample": "After executing several trades with integrated plans, you review your performance, noting improved execution and risk control.",
      "commonMistake": "Neglecting to review and adapt trade plans, leading to outdated strategies that no longer align with current market conditions.",
      "quickNote": "Integrate, adapt, and evaluate for a robust crypto trading strategy.",
      "mentorText": "Your trade plan is your blueprint. Keep it updated and aligned with the market to build a solid trading foundation.",
      "mentorAnalogy": "Think of your trade plan like a flight plan for a pilot. It must be comprehensive, regularly updated, and evaluated after each flight to ensure safety and efficiency."
    },
    "taskData": null,
    "visualKey": "crypto-plan-audit-comparison"
  }
];
