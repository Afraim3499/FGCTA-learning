import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Spot-Perpetual Deviations in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Spot-Perpetual Deviations: Order Block Analysis\nSpot and perpetual markets exhibit distinct price behaviors that impact order block formations. This card teaches **how to analyze deviations between spot and perpetual prices to refine order block strategies**.\n\n* **Deviation Metrics**: Calculate the percentage difference between spot and perpetual prices during high-volume sessions. A deviation greater than 5% signals potential liquidity imbalances.\n* **Order Block Confirmation**: Confirm bullish order blocks when spot prices close above the mean threshold of the last three hourly candles, while perpetual prices remain below.\n* **Impact on Execution**: Adjust entry points based on the observed deviations; for instance, if BTC spot trades at $40,000 and perpetual at $39,500, consider the spot price as a leading indicator for bullish setups.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot Market",
          "definition": "A market where financial instruments are traded for immediate delivery."
        },
        {
          "term": "Perpetual Contract",
          "definition": "A derivative that allows traders to buy or sell an asset without an expiration date."
        }
      ],
      "whyThisMatters": "Understanding spot-perpetual deviations is essential for identifying liquidity gaps that can lead to profitable trading opportunities.",
      "realLifeExample": "During the Ethereum trading session on October 15, 2023, spot prices deviated 6% from perpetual prices, indicating a potential bullish order block formation at $2,000.",
      "commonMistake": "Failing to account for significant deviations can lead to misinterpretation of order block strength.",
      "quickNote": "Monitor spot-perpetual deviations to enhance order block analysis.",
      "mentorText": "When you see a significant deviation between spot and perpetual prices, it’s a signal to reassess your order block strategy. Use these deviations to fine-tune your entries.",
      "mentorAnalogy": "Think of spot and perpetual markets like two aircraft on parallel runways. If one deviates significantly from its path, it could indicate an impending landing or takeoff that traders must prepare for."
    },
    "taskData": null,
    "visualKey": "crypto-ob-spot-perp"
  },
  {
    "type": "concept",
    "title": "Comparing Perpetual Blocks with Spot Order Book Volumes",
    "label": "Crypto Track",
    "body": "### Perpetual Blocks vs. Spot Order Book Volumes\nAnalyzing the relationship between perpetual blocks and spot order book volumes is critical for identifying market trends. This card teaches **how to leverage this comparison for strategic trading decisions**.\n\n* **Volume Correlation**: Establish a correlation coefficient between spot and perpetual volumes. A coefficient above 0.7 indicates strong alignment, suggesting a reliable order block.\n* **Order Block Validation**: Validate bullish order blocks when spot volumes exceed perpetual volumes by at least 20% during a breakout scenario.\n* **Market Trend Indicators**: Use the volume comparison to identify potential reversals; if spot volumes decline while perpetual volumes rise, it may signal a bearish trend shift.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Volume",
          "definition": "The total amount of buy and sell orders for a specific asset at a given time."
        },
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the extent to which two variables fluctuate together."
        }
      ],
      "whyThisMatters": "Comparing these volumes allows traders to anticipate market movements and adjust strategies accordingly.",
      "realLifeExample": "On September 20, 2023, BTC spot order book volume surged to 1,500 BTC while perpetual volume was at 1,200 BTC, confirming a bullish order block at $45,000.",
      "commonMistake": "Ignoring volume discrepancies can lead to false confirmations of order block strength.",
      "quickNote": "Always compare spot and perpetual volumes to validate order blocks.",
      "mentorText": "When assessing order blocks, always look at the volume dynamics between spot and perpetual markets. This will give you a clearer picture of market sentiment.",
      "mentorAnalogy": "Think of comparing these volumes like a doctor monitoring vital signs. If one vital sign spikes while another drops, it could indicate an underlying issue that needs attention."
    },
    "taskData": null,
    "visualKey": "crypto-ob-spot-perp"
  },
  {
    "type": "concept",
    "title": "Volatility Analysis in Crypto Order Blocks",
    "label": "Crypto Track",
    "body": "### Volatility Impact on Crypto Order Blocks\nVolatility plays a significant role in the effectiveness of order blocks in crypto trading. This card teaches **how to analyze volatility to optimize trading strategies**.\n\n* **Volatility Measurement**: Use the Average True Range (ATR) to quantify volatility. An ATR reading above 5% indicates heightened market activity, impacting order block reliability.\n* **Order Block Adjustment**: Adjust stop-loss levels based on volatility; for instance, if the ATR for ETH is $100, set stop-loss at least $150 away from the order block to avoid premature exits.\n* **Risk Management**: Incorporate volatility into your risk management strategy; higher volatility may necessitate smaller position sizes to maintain risk levels.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset for that period."
        },
        {
          "term": "Stop-Loss",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        }
      ],
      "whyThisMatters": "Understanding volatility allows traders to make informed decisions about order block effectiveness and risk exposure.",
      "realLifeExample": "On October 10, 2023, BTC exhibited an ATR of $200, prompting traders to widen their stop-loss to $1,000 above the bullish order block at $42,000.",
      "commonMistake": "Neglecting volatility can lead to inappropriate stop-loss placements and increased risk.",
      "quickNote": "Incorporate volatility measures to enhance order block strategy effectiveness.",
      "mentorText": "Always factor in volatility when planning your trades. It’s like adjusting your sails based on wind conditions; you need to adapt to stay on course.",
      "mentorAnalogy": "Consider volatility like turbulence during a flight. Just as pilots adjust their altitude and speed to navigate turbulence, traders must adapt their strategies based on market volatility."
    },
    "taskData": null,
    "visualKey": "crypto-ob-spot-perp"
  },
  {
    "type": "concept",
    "title": "Market Sentiment and Its Effect on Crypto Order Blocks",
    "label": "Crypto Track",
    "body": "### Market Sentiment's Influence on Order Blocks\nMarket sentiment significantly impacts the formation and effectiveness of order blocks in the crypto market. This card teaches **how to analyze sentiment to enhance order block strategies**.\n\n* **Sentiment Indicators**: Utilize tools like the Fear and Greed Index to gauge market sentiment. A reading above 70 indicates extreme greed, often leading to bullish order blocks.\n* **Order Block Confirmation**: Confirm order blocks by aligning them with sentiment shifts; for example, if a bullish order block forms at $50,000 while sentiment shifts from fear to greed, it strengthens the setup.\n* **Trade Execution Timing**: Execute trades when sentiment aligns with order block formations; for instance, entering a trade immediately after a sentiment shift can capitalize on momentum.",
    "context": {
      "keyTerms": [
        {
          "term": "Fear and Greed Index",
          "definition": "A sentiment indicator that measures the emotions driving the market."
        },
        {
          "term": "Sentiment Shift",
          "definition": "A change in market sentiment that can influence price movements."
        }
      ],
      "whyThisMatters": "Understanding market sentiment allows traders to anticipate order block effectiveness and adjust their strategies accordingly.",
      "realLifeExample": "On November 5, 2023, BTC formed a bullish order block at $48,000 coinciding with a sentiment shift from fear (30) to greed (75), confirming the bullish outlook.",
      "commonMistake": "Overlooking sentiment indicators can lead to missed opportunities or false confirmations of order blocks.",
      "quickNote": "Always analyze market sentiment alongside order block formations.",
      "mentorText": "Market sentiment is like the mood of a crowd; when it shifts, it can create powerful movements. Pay attention to these shifts to enhance your trading decisions.",
      "mentorAnalogy": "Think of market sentiment as the weather conditions for a ship. Just as sailors adjust their sails based on the weather, traders must adjust their strategies based on the prevailing sentiment."
    },
    "taskData": null,
    "visualKey": "crypto-ob-spot-perp"
  },
  {
    "type": "concept",
    "title": "Advanced Strategies for Crypto Order Block Trading",
    "label": "Crypto Track",
    "body": "### Crypto Order Blocks: Advanced Execution Techniques\nEffective trading of crypto order blocks requires precise timing and execution strategies. This card outlines **advanced methods to optimize entry and exit points** in volatile markets.\n\n* **Timing the Breakout**: Utilize the 15-minute chart to identify when price action closes above or below the order block, confirming a breakout. Enter trades only after a confirmed close to avoid false signals.\n* **Volume Confirmation**: Look for a minimum 30% increase in volume during breakout sessions to validate the strength of the move. This helps in distinguishing genuine breakouts from liquidity grabs.\n* **Mean Threshold Calculation**: Calculate the Mean Threshold (50%) of the order block to set profit targets. For instance, if an order block spans from $1,000 to $1,200, aim for a target around $1,100, adjusting for volatility.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Mean Threshold",
          "definition": "The midpoint of an order block, used as a target for profit-taking."
        }
      ],
      "whyThisMatters": "Mastering advanced strategies enhances execution precision, crucial in the fast-moving crypto market.",
      "realLifeExample": "During the ETH/USD breakout at $1,800 on a 15-minute chart, a volume spike to 1,200 ETH confirmed the move, allowing for a calculated entry at $1,805 targeting the Mean Threshold of $1,850.",
      "commonMistake": "Traders often enter positions prematurely, before confirming breakout conditions, leading to unnecessary losses.",
      "quickNote": "Confirm breakouts with volume and wait for a close above the order block.",
      "mentorText": "When trading crypto, always wait for the market to confirm your analysis. If the price closes above an order block with increased volume, that's your signal to act.",
      "mentorAnalogy": "Think of it like a pilot waiting for clearance before takeoff; you need confirmation from the control tower before proceeding."
    },
    "taskData": null,
    "visualKey": "crypto-ob-spot-perp"
  },
  {
    "type": "concept",
    "title": "Common Traps and Pitfalls in Crypto Order Block Trading",
    "label": "Crypto Track",
    "body": "### Crypto Order Blocks: Avoiding Common Traps\nNavigating crypto order blocks involves recognizing potential traps that can lead to significant losses. This card highlights **specific pitfalls to avoid** in your trading strategy.\n\n* **False Breakouts**: Be wary of price movements that breach an order block but quickly reverse. Implement a rule to wait for a second confirmation candle before entering a trade to mitigate this risk.\n* **Ignoring Market Sentiment**: Failing to consider broader market trends can lead to poor decisions. Always analyze sentiment indicators alongside order block setups to ensure alignment with market direction.\n* **Overleveraging**: Many traders increase their position sizes excessively when trading order blocks, which can amplify losses. Maintain a strict risk management rule, such as risking no more than 1% of your capital on any single trade.\n",
    "context": {
      "keyTerms": [
        {
          "term": "False Breakout",
          "definition": "A price movement that breaches a level but reverses quickly, leading to potential losses."
        }
      ],
      "whyThisMatters": "Awareness of these traps enhances decision-making and protects capital in volatile crypto markets.",
      "realLifeExample": "During a recent BTC/USD spike above $40,000, a false breakout occurred, with price quickly reversing back to $39,500. Traders who entered prematurely faced losses.",
      "commonMistake": "Ignoring the need for confirmation can lead to entering trades based on misleading price action.",
      "quickNote": "Always wait for confirmation to avoid false breakouts.",
      "mentorText": "Stay vigilant. If the price breaks an order block but doesn’t hold, don’t chase it. Wait for the market to prove itself.",
      "mentorAnalogy": "Like a surgeon double-checking their instruments before an operation, ensure all conditions are met before making your move."
    },
    "taskData": null,
    "visualKey": "crypto-ob-spot-perp"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios for Crypto Order Block Trading",
    "label": "Crypto Track",
    "body": "### Crypto Order Blocks: Real-World Application Scenarios\nEngaging with practical scenarios enhances your ability to apply order block concepts effectively. This card presents **real-world situations for you to analyze and respond to**.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Order Block",
          "definition": "A price range where significant buying or selling has occurred, indicating potential future price action."
        }
      ],
      "whyThisMatters": "Applying theoretical knowledge in practical scenarios solidifies understanding and improves execution skills.",
      "realLifeExample": "Consider a scenario where LTC/USD forms an order block between $150 and $160. The price breaks above $160 with a volume increase of 25%. What is your entry strategy?",
      "commonMistake": "Failing to analyze volume during breakout scenarios can lead to misinformed trading decisions.",
      "quickNote": "Analyze volume and price action before entering trades based on order blocks.",
      "mentorText": "When faced with a breakout, always check the volume. A strong breakout with volume is your green light; otherwise, hold back.",
      "mentorAnalogy": "Like a firefighter assessing the intensity of a blaze before entering a building, evaluate the market’s strength before committing to a trade."
    },
    "taskData": {
      "type": "choice_block",
      "question": "LTC/USD is trading at $155, having formed an order block between $150 and $160. The price breaks above $160 with a volume increase of 25%. What should be your next move?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position immediately.",
          "isCorrect": false,
          "feedback": "Entering immediately without confirming volume strength can lead to losses."
        },
        {
          "id": "1",
          "text": "Wait for a confirmation candle to close above $160.",
          "isCorrect": true,
          "feedback": "Waiting for confirmation ensures the breakout is valid and reduces the risk of false signals."
        },
        {
          "id": "2",
          "text": "Short the position as it has reached the top of the order block.",
          "isCorrect": false,
          "feedback": "Shorting at the top of an order block without confirmation can lead to losses if the breakout is genuine."
        },
        {
          "id": "3",
          "text": "Set a limit order at $161 to catch the breakout.",
          "isCorrect": false,
          "feedback": "Setting a limit order without confirmation can expose you to false breakouts."
        }
      ]
    },
    "visualKey": "crypto-ob-spot-perp"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Order Block Concepts",
    "label": "Crypto Track",
    "body": "### Crypto Order Blocks: Key Concepts Recap\nThis summary consolidates the essential concepts related to crypto order blocks, reinforcing their practical application in trading.\n\n* **Order Block Identification**: Recognize key order blocks by analyzing price action and volume. This is foundational for effective trading strategies.\n* **Mean Threshold Utilization**: Calculate the Mean Threshold of identified order blocks to set realistic profit targets and manage risk effectively.\n* **Execution Strategies**: Implement advanced execution techniques, including waiting for confirmation and analyzing volume, to enhance trade success rates.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Strategy",
          "definition": "A plan for entering and exiting trades based on market conditions and analysis."
        }
      ],
      "whyThisMatters": "Reinforcing these concepts ensures traders can effectively navigate the complexities of crypto markets.",
      "realLifeExample": "Reviewing the BTC/USD order block from $30,000 to $32,000, traders should target the Mean Threshold at $31,000 while confirming volume before entry.",
      "commonMistake": "Neglecting to calculate the Mean Threshold can lead to unrealistic profit expectations.",
      "quickNote": "Focus on order block identification, Mean Threshold, and execution strategies.",
      "mentorText": "Always circle back to the basics. Identify your order blocks, calculate your targets, and execute with precision.",
      "mentorAnalogy": "Like an architect reviewing blueprints before construction, ensure all foundational elements are in place before executing your trades."
    },
    "taskData": null,
    "visualKey": "crypto-ob-spot-perp"
  }
];
