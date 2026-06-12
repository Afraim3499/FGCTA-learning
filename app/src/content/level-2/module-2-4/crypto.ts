import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Impact of Perpetual Funding Rates on Ranges",
    "label": "Crypto Track",
    "body": "### Crypto Dynamics: Perpetual Funding Rates and Price Ranges\nPerpetual funding rates create a feedback loop that influences price movements within established ranges. This card examines **how these rates affect trader behavior and market equilibrium**.\n\n* **Funding Rate Influence**: A positive funding rate indicates long positions are paying shorts, often leading to upward pressure on prices as longs seek to avoid costs. Conversely, a negative rate can trigger selling pressure as shorts receive payments, pushing prices down.\n* **Range Compression**: When funding rates are consistently high, price action may compress within a narrow range as traders adjust positions to manage costs, often leading to breakout scenarios when rates stabilize.\n* **Market Sentiment Reflection**: Analyze the funding rate in conjunction with price action; a rising funding rate alongside a stagnant price may indicate over-leveraged positions, suggesting a potential reversal or breakout.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Funding Rate",
          "definition": "The cost associated with holding a perpetual contract, reflecting the balance between long and short positions."
        }
      ],
      "whyThisMatters": "Understanding funding rates is essential for anticipating price movements and managing risk in crypto trading ranges.",
      "realLifeExample": "On a day when Bitcoin's funding rate spiked to 0.1% at 10:00 AM EST, the price oscillated between $30,000 and $31,000, reflecting the upward pressure from long positions.",
      "commonMistake": "Traders often overlook the impact of funding rates, assuming price movements are solely driven by technical factors.",
      "quickNote": "Funding rates can dictate price behavior within ranges, influencing trader sentiment and market dynamics.",
      "mentorText": "Consider funding rates as the cost of doing business in crypto. If you're holding a long position and funding is high, you're essentially paying to stay in the game, which can lead to price adjustments.",
      "mentorAnalogy": "Think of funding rates like the interest on a loan; if the cost is too high, it can force you to sell or adjust your strategy, just like a borrower would reconsider their payments."
    },
    "taskData": null,
    "visualKey": "crypto-perp-funding-premium"
  },
  {
    "type": "concept",
    "title": "Mapping Premium and Discount Arrays",
    "label": "Crypto Track",
    "body": "### Price Structure: Premium and Discount Arrays in Crypto\nMapping premium and discount arrays is critical for understanding price behavior in crypto markets. This card focuses on **how these arrays interact with funding rates and market psychology**.\n\n* **Identifying Premiums**: A premium occurs when the perpetual contract price exceeds the spot price, indicating bullish sentiment. Traders should monitor the magnitude of this premium to gauge potential price corrections back to equilibrium.\n* **Discount Analysis**: Conversely, a discount arises when the perpetual price is below the spot price, suggesting bearish sentiment. This can signal buying opportunities if the price approaches key support levels.\n* **Funding Rate Correlation**: Track the funding rate alongside premium and discount arrays; a rising premium with increasing funding rates may indicate overextension, while a discount with low funding rates could suggest accumulation phases.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Premium Array",
          "definition": "The range of prices where perpetual contracts trade above the underlying asset's spot price."
        },
        {
          "term": "Discount Array",
          "definition": "The range of prices where perpetual contracts trade below the underlying asset's spot price."
        }
      ],
      "whyThisMatters": "Mapping these arrays allows traders to identify potential entry and exit points based on market sentiment and funding dynamics.",
      "realLifeExample": "Ethereum was trading at a premium of $200 over its spot price during a funding rate spike of 0.15% at 3:00 PM EST, indicating potential over-leverage among long positions.",
      "commonMistake": "Failing to recognize the significance of premium and discount arrays can lead to misjudging market sentiment and entry points.",
      "quickNote": "Understanding premium and discount arrays is essential for identifying market sentiment and potential reversals.",
      "mentorText": "When you see a premium, think of it as a warning sign; it tells you that traders are willing to pay more for the contract, but it can also mean a correction is on the horizon.",
      "mentorAnalogy": "Mapping premium and discount arrays is like a pilot checking fuel levels; knowing how much you have above or below the required amount can dictate your next move."
    },
    "taskData": null,
    "visualKey": "crypto-perp-funding-premium"
  },
  {
    "type": "concept",
    "title": "Common Traps with Funding Rate Misinterpretation",
    "label": "Crypto Track",
    "body": "### Risk Management: Avoiding Funding Rate Misinterpretation\nMisinterpreting funding rates can lead to significant trading errors. This card highlights **common traps and strategies to mitigate risks associated with funding rate analysis**.\n\n* **Overreacting to Short-Term Fluctuations**: Traders often react impulsively to daily funding rate changes without considering the broader context, leading to premature entries or exits. Always analyze funding rates in conjunction with longer-term price trends.\n* **Ignoring Market Sentiment**: Failing to assess the sentiment behind funding rates can result in misjudging market conditions. For instance, a high funding rate may not always indicate bullishness if accompanied by bearish price action.\n* **Neglecting Correlation with Volatility**: Funding rates can spike during volatile market conditions, misleading traders into thinking that price will continue in the same direction. Use volatility indicators to confirm funding rate signals before acting.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders towards a particular market or asset, often reflected in price movements."
        }
      ],
      "whyThisMatters": "Recognizing these traps is vital for maintaining a disciplined trading strategy and avoiding unnecessary losses.",
      "realLifeExample": "During a volatile session, Bitcoin's funding rate surged to 0.2% while the price dropped from $32,000 to $30,000, misleading traders into thinking a recovery was imminent.",
      "commonMistake": "Traders often misinterpret high funding rates as a clear buy signal without considering the underlying price action.",
      "quickNote": "Misinterpreting funding rates can lead to costly trading decisions; always analyze in context.",
      "mentorText": "Don't let short-term funding rate spikes dictate your actions. Always step back and assess the bigger picture before making a trade.",
      "mentorAnalogy": "Navigating funding rates is like a surgeon assessing a patient's vitals; a single reading doesn’t tell the whole story without the context of the overall health."
    },
    "taskData": null,
    "visualKey": "crypto-perp-funding-premium"
  },
  {
    "type": "concept",
    "title": "Synthesis of Funding Rate Strategies",
    "label": "Crypto Track",
    "body": "### Strategic Integration: Funding Rate Strategies for Range Trading\nIntegrating funding rate strategies into a cohesive trading plan enhances decision-making in crypto markets. This card focuses on **how to synthesize these strategies for effective range trading**.\n\n* **Establishing Entry and Exit Points**: Use funding rates to define optimal entry and exit points within established ranges. For example, enter long positions when funding rates are low and the price approaches the lower range boundary, indicating potential support.\n* **Dynamic Position Sizing**: Adjust position sizes based on funding rate trends; increase exposure when rates are favorable and decrease when they become unfavorable, ensuring risk management aligns with market conditions.\n* **Combining Technical Indicators**: Pair funding rate analysis with technical indicators such as RSI or moving averages to confirm trade setups, enhancing the robustness of your trading strategy.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade based on risk management principles."
        }
      ],
      "whyThisMatters": "A cohesive strategy that incorporates funding rates can significantly improve trading performance and risk management.",
      "realLifeExample": "In a recent trading session, a trader entered a long position on Litecoin when the funding rate dropped to 0.05% and the price hit $150, leading to a successful exit at $170 as the price approached the upper range limit.",
      "commonMistake": "Traders often fail to adjust their strategies based on changing funding rates, leading to misaligned risk and reward profiles.",
      "quickNote": "Integrating funding rates into your trading plan enhances decision-making and risk management.",
      "mentorText": "Think of your trading strategy as a living organism; it needs to adapt to changes in funding rates to thrive in the crypto environment.",
      "mentorAnalogy": "Synthesis of funding rate strategies is like an architect designing a building; every element must work together to create a stable and functional structure."
    },
    "taskData": null,
    "visualKey": "crypto-perp-funding-premium"
  },
  {
    "type": "concept",
    "title": "Practical Exercises on Funding Rate Applications",
    "label": "Crypto Track",
    "body": "### Funding Rate Application: Practical Exercises\nFunding rates play a critical role in crypto trading, influencing trader behavior and market dynamics. This card provides practical exercises to reinforce the application of funding rates in various trading scenarios.\n\n* **Scenario Analysis**: Evaluate a scenario where the funding rate for BTC perpetual contracts is set at 0.01% per 8 hours. Calculate the cost of holding a long position of 1 BTC over a 24-hour period, factoring in the funding rate.\n* **Impact Assessment**: Analyze how a sudden increase in funding rates to 0.05% affects your existing long position. Consider the implications on your profit margin and overall strategy.\n* **Decision-Making Exercise**: Given a funding rate of -0.02%, determine whether to close a short position in ETH or maintain it. Assess the potential risks and rewards based on current market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic fee exchanged between long and short positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Understanding funding rates is essential for optimizing entry and exit points in crypto trading, directly impacting profitability.",
      "realLifeExample": "On March 15, 2023, the funding rate for BTC/USDT perpetual contracts was 0.02%. A trader holding 2 BTC for 24 hours incurred a cost of $2.40, impacting their profit calculations.",
      "commonMistake": "Traders often overlook the cumulative effect of funding rates over multiple periods, leading to unexpected losses.",
      "quickNote": "Funding rates directly affect the cost of holding positions in crypto trading.",
      "mentorText": "When you enter a position, always calculate the funding cost. It can turn a winning trade into a losing one if not accounted for.",
      "mentorAnalogy": "Think of funding rates like interest on a loan; if you don't factor in the costs, you may end up paying more than you earn."
    },
    "taskData": null,
    "visualKey": "crypto-perp-funding-premium"
  },
  {
    "type": "concept",
    "title": "Advanced Techniques for Managing Funding Rates",
    "label": "Crypto Track",
    "body": "### Funding Rate Management: Advanced Techniques\nManaging funding rates effectively can significantly enhance trading strategies in the crypto market. This card explores advanced techniques to mitigate the impact of funding rates on your positions.\n\n* **Hedging Strategies**: Utilize options or futures contracts to hedge against adverse funding rate changes. For instance, if holding a long position in BTC, consider shorting an equivalent amount in futures to offset potential funding costs.\n* **Dynamic Position Sizing**: Adjust your position size based on the current funding rate. If the rate is high, reduce your exposure to limit costs; conversely, increase your position when rates are favorable.\n* **Timing Entry and Exit**: Monitor funding rate schedules and enter trades just before favorable funding periods. For example, if the funding rate is expected to decrease, position yourself accordingly to benefit from lower costs.",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging",
          "definition": "A risk management strategy used to offset potential losses in an investment."
        }
      ],
      "whyThisMatters": "Advanced management of funding rates can lead to improved risk-adjusted returns and overall trading performance.",
      "realLifeExample": "On April 10, 2023, a trader hedged a long BTC position by shorting 1 BTC in futures when the funding rate spiked to 0.04%, effectively neutralizing the cost impact.",
      "commonMistake": "Failing to adjust position sizes in response to fluctuating funding rates can lead to excessive costs and reduced profitability.",
      "quickNote": "Effective funding rate management is crucial for maintaining profitability in volatile markets.",
      "mentorText": "Always have a plan for managing funding rates. They can eat into your profits if you’re not proactive.",
      "mentorAnalogy": "Consider funding rates like fuel costs for a vehicle; if you don’t plan for them, your journey can become more expensive than anticipated."
    },
    "taskData": null,
    "visualKey": "crypto-perp-funding-premium"
  },
  {
    "type": "practice",
    "title": "Summary of Funding Rate Concepts",
    "label": "Crypto Track",
    "body": "### Funding Rate Concepts: Summary\nThis card summarizes key concepts related to funding rates and their significance in crypto trading, particularly in range modeling. Understanding these concepts is vital for effective trading strategies.\n\n* **Cost Implications**: Recognize how funding rates can impact the overall cost of holding positions. A positive funding rate increases costs for long positions, while a negative rate benefits shorts.\n* **Market Sentiment Indicator**: Use funding rates as a gauge of market sentiment. High funding rates often indicate bullish sentiment, while negative rates suggest bearish outlooks.\n* **Integration into Trading Plans**: Incorporate funding rate analysis into your trading plans. For instance, if the funding rate is consistently high, consider adjusting your strategy to account for increased holding costs.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        }
      ],
      "whyThisMatters": "A thorough understanding of funding rates enhances decision-making and risk management in crypto trading.",
      "realLifeExample": "On May 5, 2023, the funding rate for ETH/USDT was +0.03%, prompting traders to reassess their long positions due to increased holding costs.",
      "commonMistake": "Traders often ignore the implications of funding rates on their overall strategy, leading to unexpected losses.",
      "quickNote": "Funding rates are a critical component of effective range trading strategies.",
      "mentorText": "Always factor funding rates into your trading decisions. They can shift the profitability of your trades significantly.",
      "mentorAnalogy": "Think of funding rates like the weather forecast; if you ignore it, you may find yourself unprepared for unexpected conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A trader holds a long position in BTC when the funding rate is +0.02%. What should the trader consider doing next?",
      "options": [
        {
          "id": "0",
          "text": "Maintain the position without adjustments.",
          "isCorrect": false,
          "feedback": "Ignoring the funding rate can lead to increased costs."
        },
        {
          "id": "1",
          "text": "Close the position immediately.",
          "isCorrect": false,
          "feedback": "Closing the position may not be necessary unless costs become prohibitive."
        },
        {
          "id": "2",
          "text": "Reassess the position based on the funding rate and market conditions.",
          "isCorrect": true,
          "feedback": "Reassessing allows for informed decisions that can mitigate costs."
        },
        {
          "id": "3",
          "text": "Increase the position size to capitalize on the funding rate.",
          "isCorrect": false,
          "feedback": "Increasing position size without considering costs can lead to losses."
        }
      ]
    },
    "visualKey": "crypto-perp-funding-premium"
  },
  {
    "type": "summary",
    "title": "Comprehensive Summary of Crypto Range Trading",
    "label": "Crypto Track",
    "body": "### Crypto Range Trading: Comprehensive Summary\nThis card provides a comprehensive summary of key concepts covered in crypto range trading, emphasizing the importance of funding rates in this context.\n\n* **Range Identification**: Recognize the significance of identifying trading ranges to optimize entry and exit points. Funding rates can influence the behavior of price within these ranges.\n* **Funding Rate Analysis**: Understand how funding rates affect trader sentiment and market dynamics. Positive rates may indicate bullish pressure, while negative rates can signal bearish sentiment.\n* **Strategic Adjustments**: Incorporate funding rate assessments into your trading strategy. Adjust position sizes and entry points based on current funding rates to enhance profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Range Trading",
          "definition": "A trading strategy that involves buying and selling within a defined price range."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of range trading and funding rates is essential for maximizing trading efficiency and profitability.",
      "realLifeExample": "On June 1, 2023, traders identified a range for LTC/USDT between $150 and $160. With a funding rate of -0.01%, many opted to hold long positions, anticipating a bounce back to the upper range.",
      "commonMistake": "Traders often fail to adjust their strategies based on funding rate changes, leading to missed opportunities or increased costs.",
      "quickNote": "Effective range trading requires a deep understanding of funding rates and their implications.",
      "mentorText": "Always keep funding rates in mind when trading ranges. They can dictate your success or failure.",
      "mentorAnalogy": "Think of range trading like navigating a river; the funding rates are the currents that can either help or hinder your progress."
    },
    "taskData": null,
    "visualKey": "crypto-perp-funding-premium"
  }
];
