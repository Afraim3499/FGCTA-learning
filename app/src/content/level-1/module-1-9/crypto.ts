import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Foundations of Crypto Invalidation Planning",
    "label": "Crypto Track",
    "body": "### Crypto Invalidation: Spot-Perp Divergence and Low-Liquidity Spreads\nCrypto markets present unique challenges in invalidation planning due to spot-perp divergence and low-liquidity spreads.\n\n* **Spot-Perp Divergence**: Spot and perpetual futures can diverge significantly, especially during high volatility. Invalidation must account for these discrepancies to avoid premature stop-outs.\n* **Low-Liquidity Spreads**: Crypto markets often experience wide spreads in low-liquidity conditions, particularly during off-hours. Invalidation levels should be set beyond typical spread fluctuations to prevent unnecessary exits.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot-Perp Divergence",
          "definition": "The difference in price movement between spot markets and perpetual futures."
        },
        {
          "term": "Low-Liquidity Spreads",
          "definition": "Wider bid-ask spreads occurring in markets with low trading volume."
        }
      ],
      "whyThisMatters": "Proper invalidation planning in crypto prevents unnecessary losses from market anomalies like divergence and spread fluctuations.",
      "realLifeExample": "During a BTC-USD rally on a Sunday, spot prices surged by 5% while perpetual futures lagged, causing a 3% divergence.",
      "commonMistake": "Traders often set stops too close, not accounting for the natural divergence between spot and perp markets.",
      "quickNote": "Align invalidation with both spot and perp dynamics to avoid false stop-outs.",
      "mentorText": "In crypto, you can't just rely on one price feed. Spot and perp can dance to different tunes; plan your invalidation to account for both.",
      "mentorAnalogy": "Think of spot and perp like two synchronized swimmers. They should move together, but sometimes one lags. Your invalidation is the lifeguard ensuring they stay in sync."
    },
    "taskData": null,
    "visualKey": "crypto-invalidation-foundations"
  },
  {
    "type": "concept",
    "title": "Managing Spot-Perp Price Divergence",
    "label": "Crypto Track",
    "body": "### Crypto Stops: Spot-Perp Divergence Management\nSpot-perp divergence requires strategic stop placement to ensure invalidation boundaries are robust.\n\n* **Divergence Buffer**: Place stops with a buffer that accounts for typical divergence levels. Analyze historical divergence data to determine an appropriate buffer size.\n* **Dynamic Adjustments**: Adjust stops dynamically based on real-time divergence metrics. Use tools that track spot-perp spread to refine stop placement.\n* **Cross-Market Confirmation**: Validate stop levels by confirming price action across both spot and perp markets. Stops should only trigger if both markets breach the invalidation level.",
    "context": {
      "keyTerms": [
        {
          "term": "Divergence Buffer",
          "definition": "An additional margin added to stop levels to account for spot-perp price differences."
        },
        {
          "term": "Cross-Market Confirmation",
          "definition": "The practice of verifying price action across multiple markets before executing a stop."
        }
      ],
      "whyThisMatters": "Managing divergence ensures stops are not triggered by temporary discrepancies between spot and perp prices.",
      "realLifeExample": "ETH-USD spot price hits $1800, while perp lags at $1785. A stop set at $1775 with a 10-point buffer prevents premature exit.",
      "commonMistake": "Ignoring spot-perp divergence can lead to stops being hit on one market while the other remains within range.",
      "quickNote": "Buffer stops to account for divergence and confirm across markets.",
      "mentorText": "Spot and perp divergence is like a shadow. It's always there, but you need to know how to handle it so it doesn't trip you up.",
      "mentorAnalogy": "Imagine two clocks showing different times. You set your alarm based on both, ensuring you're not caught off guard by either."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-stop-divergence"
  },
  {
    "type": "concept",
    "title": "Weekend vs. Weekday Stop Strategies",
    "label": "Crypto Track",
    "body": "### Crypto Stops: Weekend vs. Weekday Strategies\nStop placement must adapt to the distinct liquidity conditions of weekends versus weekdays.\n\n* **Weekend Spread Awareness**: Expect wider spreads on weekends due to reduced market participation. Set stops further from the current price to accommodate these spreads.\n* **Weekday Liquidity Utilization**: Weekdays offer tighter spreads and higher liquidity. Stops can be placed closer to the price action, reducing risk exposure.\n* **Volatility Adjustments**: Monitor volatility levels, which can spike unexpectedly on weekends. Adjust stop distances accordingly to prevent false triggers.",
    "context": {
      "keyTerms": [
        {
          "term": "Weekend Spread",
          "definition": "The typically wider bid-ask spread during weekends due to lower trading volume."
        },
        {
          "term": "Volatility Adjustments",
          "definition": "Modifying stop levels based on current and expected volatility."
        }
      ],
      "whyThisMatters": "Adapting stop strategies to liquidity conditions prevents unnecessary stop-outs and optimizes risk management.",
      "realLifeExample": "On a Saturday, BTC-USD spreads widen by 1.5%, prompting a trader to adjust stops from $20 to $30 away from the current price.",
      "commonMistake": "Traders often use the same stop strategy for weekends and weekdays, ignoring liquidity differences.",
      "quickNote": "Adjust stops for liquidity: wider on weekends, tighter on weekdays.",
      "mentorText": "Weekends and weekdays in crypto are like night and day. Your stop strategy needs to reflect the changing environment.",
      "mentorAnalogy": "Think of it like driving in different weather conditions. On a clear day, you can drive faster and closer to other cars. In fog, you need more distance to stay safe."
    },
    "taskData": null,
    "visualKey": "crypto-weekend-vs-weekday-stops"
  },
  {
    "type": "concept",
    "title": "Incorporating Funding Risk in Stops",
    "label": "Crypto Track",
    "body": "### Crypto Stops: Funding Risk Considerations\nFunding rates can significantly impact stop placement, requiring careful planning to ensure resilient invalidation boundaries.\n\n* **Funding Rate Impact**: High funding rates can cause price fluctuations that affect stop levels. Monitor funding rates and adjust stops to account for potential volatility.\n* **Rate Change Alerts**: Set alerts for significant changes in funding rates. Rapid rate shifts can lead to unexpected price movements, necessitating stop adjustments.\n* **Hedging Strategy Integration**: Consider using hedging strategies to mitigate the impact of adverse funding rate changes on your stop placements.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "A periodic payment made between long and short positions in perpetual futures to maintain price equilibrium."
        },
        {
          "term": "Hedging Strategy",
          "definition": "A method used to offset potential losses in one position by taking an opposite position."
        }
      ],
      "whyThisMatters": "Incorporating funding risk into stop planning ensures stops are not triggered by funding-induced price swings.",
      "realLifeExample": "A sudden increase in BTC-USD funding rate causes a 2% price drop, triggering stops not adjusted for the rate change.",
      "commonMistake": "Ignoring funding rates can lead to stops being hit by funding-induced volatility rather than genuine market moves.",
      "quickNote": "Factor in funding rates to prevent stops from funding-induced swings.",
      "mentorText": "Funding rates are like the tide. They can lift or lower your boat unexpectedly. Plan your stops to ride the waves, not be capsized by them.",
      "mentorAnalogy": "Consider funding rates like the wind for a sailor. You need to adjust your sails (stops) to ensure you stay on course despite changing conditions."
    },
    "taskData": null,
    "visualKey": "crypto-funding-risk-stops"
  },
  {
    "type": "concept",
    "title": "Practical Crypto Invalidation Drills",
    "label": "Crypto Track",
    "body": "### Crypto Invalidation Drills: Setting and Adjusting Boundaries\nEngage in practical exercises to refine your ability to set and adjust invalidation boundaries in crypto trading scenarios.\n\n* **Boundary Identification**: Identify key structural levels where price action invalidates your trade hypothesis. Use historical volatility and liquidity zones to determine these levels.\n* **Dynamic Adjustment**: Adjust invalidation points as the trade progresses. Monitor real-time market conditions and adjust boundaries to reflect new data without emotional bias.\n* **Scenario Simulation**: Simulate various market conditions to test your invalidation strategy. Include scenarios with high volatility and unexpected news events to stress-test your boundaries.",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Boundary",
          "definition": "A predefined price level where a trade hypothesis is considered invalid."
        },
        {
          "term": "Liquidity Zones",
          "definition": "Price areas where significant buying or selling interest is expected."
        }
      ],
      "whyThisMatters": "Refining invalidation boundaries ensures disciplined risk management and prevents emotional decision-making.",
      "realLifeExample": "During a BTCUSD trade, initial invalidation is set at $28,000. After a news event, volatility increases, requiring an adjustment to $27,500 to account for increased market noise.",
      "commonMistake": "Failing to adjust invalidation levels in response to significant market changes.",
      "quickNote": "Invalidation boundaries are not static; they must evolve with market conditions.",
      "mentorText": "Think of invalidation drills like a pilot's flight simulator. You need to practice under different conditions to ensure your boundaries hold up under pressure.",
      "mentorAnalogy": "A surgeon rehearses procedures on models to ensure precision. Similarly, traders must drill invalidation points to maintain precision under market stress."
    },
    "taskData": null,
    "visualKey": "crypto-invalidation-drill-component"
  },
  {
    "type": "concept",
    "title": "Crypto Invalidation Debrief",
    "label": "Crypto Track",
    "body": "### Crypto Invalidation Debrief: Analyzing Past Trades\nAnalyze past crypto trades to understand how invalidation boundaries were applied and identify areas for improvement.\n\n* **Post-Trade Analysis**: Review trades to evaluate if the invalidation points were correctly placed and adhered to. Consider whether the boundaries were too tight or too loose.\n* **Pattern Recognition**: Identify patterns in trades where invalidation points were breached. Determine if there are common factors leading to these breaches.\n* **Feedback Loop**: Create a feedback loop to incorporate lessons learned into future invalidation planning. Document insights and adjust strategies accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Post-Trade Analysis",
          "definition": "The process of reviewing trades to evaluate performance and decision-making."
        },
        {
          "term": "Feedback Loop",
          "definition": "A system for using past experiences to improve future performance."
        }
      ],
      "whyThisMatters": "Debriefing trades helps refine invalidation strategies, reducing future errors and enhancing overall trading performance.",
      "realLifeExample": "After a failed ETHUSD trade, analysis showed that the invalidation point was set too close to a support level, leading to premature stop-outs.",
      "commonMistake": "Neglecting to review trades systematically, leading to repeated errors.",
      "quickNote": "Every trade is a lesson; debrief to learn and improve.",
      "mentorText": "Debriefing is like a post-mission analysis in military operations. You must understand what went right or wrong to improve future strategies.",
      "mentorAnalogy": "Just as an architect reviews blueprints after a building project to identify structural issues, traders must review trades to identify flaws in invalidation planning."
    },
    "taskData": null,
    "visualKey": "crypto-invalidation-debrief-component"
  },
  {
    "type": "practice",
    "title": "Crypto Invalidation Practice Scenarios",
    "label": "Crypto Track",
    "body": "### Practice Scenarios: Applying Invalidation Planning\nApply your crypto invalidation planning skills in practice scenarios, focusing on spot-perp divergence and funding risk considerations.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot-Perp Divergence",
          "definition": "A discrepancy between the spot price and perpetual futures price of a cryptocurrency."
        },
        {
          "term": "Funding Risk",
          "definition": "The risk associated with funding rate payments in perpetual futures contracts."
        }
      ],
      "whyThisMatters": "Practicing with real scenarios enhances your ability to manage risk and adapt to market dynamics effectively.",
      "realLifeExample": "In a BTCUSD scenario, spot price is $30,000 while the perpetual futures price is $30,500. Assess how this divergence impacts your invalidation strategy.",
      "commonMistake": "Ignoring spot-perp divergence, leading to misaligned invalidation points.",
      "quickNote": "Spot-perp divergence can signal market shifts; adjust invalidation accordingly.",
      "mentorText": "Think of this practice like a chess player analyzing potential moves. You must anticipate and plan for different market scenarios.",
      "mentorAnalogy": "A pilot uses simulators to practice emergency landings. Similarly, traders must simulate market scenarios to refine invalidation strategies."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a BTCUSD scenario, the spot price is $29,000, and the perpetual futures price is $29,300. Funding rates are positive. Where should your invalidation point be set?",
      "options": [
        {
          "id": "0",
          "text": "$28,700",
          "isCorrect": true,
          "feedback": "Setting the invalidation point below both spot and perp prices accounts for potential pullbacks and funding rate impacts."
        },
        {
          "id": "1",
          "text": "$29,300",
          "isCorrect": false,
          "feedback": "Setting at the perp price does not account for potential spot price pullbacks."
        },
        {
          "id": "2",
          "text": "$29,000",
          "isCorrect": false,
          "feedback": "Setting at the spot price ignores the perp premium and funding implications."
        },
        {
          "id": "3",
          "text": "$29,500",
          "isCorrect": false,
          "feedback": "Setting above current prices does not provide a valid invalidation point."
        }
      ]
    },
    "visualKey": "crypto-invalidation-foundations"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Invalidation Planning",
    "label": "Crypto Track",
    "body": "### Summary: Comprehensive Understanding of Invalidation Planning\nReview the key concepts of crypto invalidation planning, ensuring a comprehensive understanding of spot-perp divergence and funding risks.\n\n* **Core Principles**: Understand the importance of setting precise invalidation points to manage risk effectively. Recognize how these points must adapt to market conditions.\n* **Spot-Perp Divergence**: Grasp how discrepancies between spot and perpetual futures prices can influence invalidation strategies. Adjust boundaries to reflect these divergences.\n* **Funding Risks**: Acknowledge the impact of funding rates on trade positions and invalidation planning. Incorporate funding rate analysis into your strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "A periodic payment made between traders to maintain price parity between perpetual futures and spot prices."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of invalidation planning ensures traders can effectively manage risk and adapt to market dynamics.",
      "realLifeExample": "In a volatile market, a trader adjusts their BTCUSD invalidation point after noticing a significant spot-perp divergence, preventing a premature stop-out.",
      "commonMistake": "Overlooking the impact of funding rates on invalidation strategies.",
      "quickNote": "Spot-perp divergence and funding rates are critical to invalidation planning.",
      "mentorText": "Think of invalidation planning like a ship's navigation system. You must constantly adjust your course based on the current conditions to avoid hazards.",
      "mentorAnalogy": "A commercial pilot constantly monitors weather conditions and adjusts flight paths. Similarly, traders must adjust invalidation points based on market conditions."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-stop-divergence"
  }
];
