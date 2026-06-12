import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "CEX/DEX Funding Imbalances",
    "label": "Crypto Track",
    "body": "### Fair Value Gaps: CEX/DEX Funding Imbalances\nFunding imbalances between centralized exchanges (CEX) and decentralized exchanges (DEX) create significant Fair Value Gaps (FVG) in the crypto market. Understanding these gaps is crucial for anticipating price movements.\n\n* **Funding Rate Discrepancies**: Monitor the funding rates between CEX and DEX; a divergence greater than 0.5% can indicate a potential FVG, as traders may over-leverage on one platform.\n* **Order Book Analysis**: Analyze order books for liquidity imbalances; a sudden influx of buy or sell orders on a CEX can create a gap if DEX liquidity fails to match, leading to price inefficiencies.\n* **Impact on Price Action**: Expect price to gravitate towards the FVG as market participants seek to exploit the inefficiency, often resulting in a retracement back to the fair value level.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Fair Value Gap (FVG)",
          "definition": "A price range where the market has not traded efficiently, often resulting from funding imbalances."
        },
        {
          "term": "Funding Rate",
          "definition": "The cost of holding a leveraged position, which can vary between CEX and DEX."
        }
      ],
      "whyThisMatters": "Recognizing funding imbalances allows traders to anticipate price corrections and capitalize on inefficiencies in the market.",
      "realLifeExample": "On October 1st, 2023, a 0.75% funding rate difference between Binance (CEX) and Uniswap (DEX) led to a 12% price gap in Ethereum, which was corrected within 48 hours.",
      "commonMistake": "Traders often ignore the significance of funding rates, leading to missed opportunities when gaps form.",
      "quickNote": "Funding imbalances between exchanges can create significant Fair Value Gaps.",
      "mentorText": "When you see a funding rate discrepancy, think of it as a signal that the market is mispriced. This is your opportunity to act before the gap closes.",
      "mentorAnalogy": "Consider this like a commercial airline's fuel management; if one airline has a fuel cost advantage, it can price tickets lower, creating a gap that others must eventually match."
    },
    "taskData": null,
    "visualKey": "crypto-fvg-liquidations"
  },
  {
    "type": "concept",
    "title": "Perpetual Liquidations and FVG Formation",
    "label": "Crypto Track",
    "body": "### Fair Value Gaps: Perpetual Liquidations and FVG Formation\nPerpetual liquidations are a critical factor in the formation of Fair Value Gaps in the crypto market. Understanding their mechanics can enhance your trading strategies.\n\n* **Leverage Dynamics**: High leverage positions are susceptible to liquidation; when prices move against these positions, it can trigger a cascade of liquidations, creating a rapid price movement and an FVG.\n* **Liquidation Triggers**: Identify key price levels where liquidations are likely to occur; for instance, a 10% drop in Bitcoin can lead to liquidations of over $100 million if many traders are over-leveraged.\n* **Market Reaction**: After a liquidation event, expect a price retracement towards the last traded price before the liquidations, as the market seeks to fill the gap created by the rapid price movement.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Contracts",
          "definition": "A type of derivative that allows traders to hold positions indefinitely, subject to funding fees."
        },
        {
          "term": "Liquidation",
          "definition": "The forced closure of a trader's position when their margin falls below the required level."
        }
      ],
      "whyThisMatters": "Understanding liquidation dynamics helps traders anticipate price movements and identify potential entry points during FVG formations.",
      "realLifeExample": "On September 15th, 2023, a sudden 15% drop in Bitcoin triggered $200 million in liquidations, creating a Fair Value Gap that was filled within 24 hours.",
      "commonMistake": "Traders often underestimate the impact of liquidations, leading to unexpected losses during volatile market conditions.",
      "quickNote": "Liquidation events can rapidly create Fair Value Gaps that traders can exploit.",
      "mentorText": "When you see a liquidation spike, recognize it as a market reset. This is your chance to enter at a more favorable price as the market corrects.",
      "mentorAnalogy": "Think of this like a surgeon managing a critical situation; when a patient’s condition rapidly changes, immediate action is required to stabilize and restore balance."
    },
    "taskData": null,
    "visualKey": "crypto-fvg-liquidations"
  },
  {
    "type": "concept",
    "title": "Trading Strategies for Crypto Imbalances",
    "label": "Crypto Track",
    "body": "### Fair Value Gaps: Trading Strategies for Crypto Imbalances\nEffective trading strategies leveraging Fair Value Gaps can enhance profitability in the crypto market. This card outlines key approaches to capitalize on funding and liquidation dynamics.\n\n* **Gap Fill Strategy**: Enter positions when prices approach the FVG; for example, if Bitcoin drops to $25,000 after a liquidation event, look for a reversal towards $26,000, which often acts as a target for gap filling.\n* **Volume Confirmation**: Use volume indicators to confirm the strength of a potential reversal; a spike in volume upon reaching the FVG can indicate strong buying interest, validating your entry.\n* **Stop-Loss Placement**: Set stop-loss orders just beyond the FVG; this minimizes risk if the market fails to fill the gap, protecting your capital from adverse movements.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Gap Fill Strategy",
          "definition": "A trading approach that anticipates price retracement to fill Fair Value Gaps."
        },
        {
          "term": "Volume Indicator",
          "definition": "A tool used to measure the number of shares or contracts traded in a given period."
        }
      ],
      "whyThisMatters": "Implementing structured strategies around FVGs can significantly improve trade execution and risk management.",
      "realLifeExample": "On October 5th, 2023, Ethereum created a Fair Value Gap at $1,800; traders who entered at $1,805 with volume confirmation saw a 7% profit as the price retraced to $1,850.",
      "commonMistake": "Failing to confirm volume before entering a position can lead to false signals and increased risk.",
      "quickNote": "Leverage Fair Value Gaps with strategic entry and exit points for improved trading outcomes.",
      "mentorText": "When you spot a gap, think of it as a doorway to potential profit. Enter strategically and always confirm with volume to ensure you're not walking into a trap.",
      "mentorAnalogy": "This is akin to an architect identifying a structural flaw; once identified, the right strategy can restore balance and ensure the integrity of the building."
    },
    "taskData": null,
    "visualKey": "crypto-fvg-liquidations"
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Fair Value Gaps: Risk Management in Crypto Trading\nEffective risk management is essential when trading Fair Value Gaps in the crypto market. This card provides guidelines for managing exposure and setting stop-loss orders.\n\n* **Position Sizing**: Determine your position size based on the volatility of the asset; for instance, if trading Bitcoin, consider a maximum of 2% of your capital per trade to mitigate risk during high volatility periods.\n* **Stop-Loss Strategy**: Implement a stop-loss strategy that accounts for the FVG; place stop-loss orders just below the gap to protect against adverse price movements while allowing for potential retracement.\n* **Diversification**: Avoid concentrating your capital in a single trade; diversify across multiple cryptocurrencies to spread risk and reduce exposure to any single asset's volatility.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell an asset when it reaches a certain price to limit potential losses."
        }
      ],
      "whyThisMatters": "Implementing robust risk management practices helps protect capital and sustain trading longevity in volatile markets.",
      "realLifeExample": "On November 10th, 2023, a trader using a 2% position size on a Bitcoin trade with a stop-loss below a newly formed FVG at $22,500 avoided significant losses when the price briefly dipped to $22,300 before recovering.",
      "commonMistake": "Traders often neglect to adjust their stop-loss orders in response to market volatility, leading to larger-than-expected losses.",
      "quickNote": "Robust risk management is vital for sustaining long-term trading success in crypto.",
      "mentorText": "Always remember, protecting your capital is paramount. Use position sizing and stop-loss strategies to shield yourself from unexpected market moves.",
      "mentorAnalogy": "Think of this as a pilot conducting pre-flight checks; ensuring all systems are secure before takeoff minimizes the risk of failure during the flight."
    },
    "taskData": null,
    "visualKey": "crypto-fvg-liquidations"
  },
  {
    "type": "concept",
    "title": "Case Studies on Crypto Imbalances",
    "label": "Crypto Track",
    "body": "### Fair Value Gaps: Case Studies in Crypto\nThis card analyzes specific case studies that highlight successful trades based on Fair Value Gaps (FVG) in the crypto market. Understanding these examples provides insight into effective strategies and the lessons learned from market behavior.\n\n* **Bitcoin FVG Trade**: On March 15, 2023, Bitcoin created a three-candle FVG between $25,000 and $25,500. Traders who entered long positions upon the closure of the third candle saw a subsequent rally to $27,000, demonstrating the efficacy of identifying FVGs.\n* **Ethereum Liquidation Event**: During the Ethereum plunge on April 10, 2023, a significant FVG formed between $1,800 and $1,850. Traders who recognized this gap were able to capitalize on a swift recovery to $1,900, showcasing the importance of timing and market sentiment.\n* **Market Sentiment Analysis**: Each case illustrates the necessity of aligning FVG trades with broader market sentiment and liquidity conditions, ensuring that trades are not only based on technical setups but also on market psychology.",
    "context": {
      "keyTerms": [
        {
          "term": "Fair Value Gap (FVG)",
          "definition": "A price range where an imbalance occurs, often leading to rapid price movements."
        }
      ],
      "whyThisMatters": "Understanding case studies enables traders to refine their strategies and avoid common pitfalls associated with FVG trading in crypto markets.",
      "realLifeExample": "On March 15, 2023, Bitcoin's FVG between $25,000 and $25,500 led to a rally to $27,000, illustrating a successful trade opportunity.",
      "commonMistake": "Traders often overlook the importance of market sentiment when executing trades based on FVGs.",
      "quickNote": "Case studies provide real-world insights into the effectiveness of FVG strategies.",
      "mentorText": "When you analyze these case studies, focus on how the market reacted to the FVGs. Each trade tells a story about market psychology and timing.",
      "mentorAnalogy": "Think of trading FVGs like a surgeon assessing a patient's vital signs before an operation; understanding the context is crucial for a successful outcome."
    },
    "taskData": null,
    "visualKey": "crypto-fvg-liquidations"
  },
  {
    "type": "concept",
    "title": "Practical Exercises on Crypto Imbalances",
    "label": "Crypto Track",
    "body": "### Fair Value Gaps: Practical Exercises\nThis card provides practical exercises aimed at identifying and trading Fair Value Gaps (FVG) in the crypto market. Engaging with these scenarios will enhance your ability to apply learned strategies in real-time trading environments.\n\n* **Scenario 1 - Identifying FVGs**: Analyze a 1-hour chart of Litecoin from April 5, 2023. Identify any three-candle FVGs and determine potential entry and exit points based on historical price action.\n* **Scenario 2 - Trading Strategy Application**: On April 20, 2023, observe a three-candle FVG in Cardano between $0.90 and $0.95. Formulate a trading plan that includes stop-loss placement and profit targets based on volatility metrics.\n* **Scenario 3 - Risk Management**: Given a recent FVG in Solana between $22.00 and $22.50, calculate the risk-reward ratio for a potential trade. Ensure to factor in the average volatility of Solana over the past week.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure used to compare the expected returns of a trade against the potential risk."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce the application of FVG strategies, allowing traders to develop their skills in real market conditions.",
      "realLifeExample": "On April 20, 2023, a three-candle FVG in Cardano provided a clear trading opportunity for disciplined traders.",
      "commonMistake": "Traders often rush into trades without properly analyzing the FVG context and associated risks.",
      "quickNote": "Engaging in practical exercises sharpens your ability to identify and act on FVGs.",
      "mentorText": "Practice identifying FVGs in real-time. Each exercise is a step toward mastering the mechanics of crypto trading.",
      "mentorAnalogy": "Consider these exercises like flight simulations for pilots; they prepare you for the complexities of real-world trading."
    },
    "taskData": null,
    "visualKey": "crypto-fvg-liquidations"
  },
  {
    "type": "practice",
    "title": "Summary of Fair Value Gaps in Crypto",
    "label": "Crypto Track",
    "body": "### Fair Value Gaps: Summary of Key Concepts\nThis card summarizes the essential concepts related to Fair Value Gaps (FVG) in crypto trading, focusing on funding imbalances and perpetual liquidations. A thorough understanding of these elements is vital for executing informed trades.\n\n* **Funding Imbalances**: Regularly monitor funding rates across major exchanges. A significant funding rate discrepancy can indicate potential FVG formations, prompting traders to adjust their strategies accordingly.\n* **Perpetual Liquidations**: Be aware of liquidation levels during high volatility. FVGs often align with these levels, creating opportunities for traders to capitalize on rapid price movements.\n* **Market Dynamics**: Recognize that FVGs are not standalone signals; they must be contextualized within broader market dynamics, including liquidity and sentiment analysis.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Liquidations",
          "definition": "The forced closure of leveraged positions when margin requirements are not met."
        }
      ],
      "whyThisMatters": "Summarizing these concepts equips traders with a holistic view of FVG mechanics, enhancing their decision-making processes.",
      "realLifeExample": "During a spike in volatility, a FVG in Bitcoin aligned with liquidation levels, providing a lucrative trading opportunity.",
      "commonMistake": "Traders often fail to consider the broader market context when analyzing FVGs, leading to misinformed decisions.",
      "quickNote": "Understanding funding imbalances and liquidations is crucial for effective FVG trading.",
      "mentorText": "As you summarize these concepts, remember that FVGs are part of a larger picture. Always consider market conditions before acting.",
      "mentorAnalogy": "Think of FVGs like a surgeon's checklist; each element must be considered to ensure a successful operation."
    },
    "taskData": null,
    "visualKey": "crypto-fvg-liquidations"
  },
  {
    "type": "summary",
    "title": "Crypto FVG Liquidations Summary",
    "label": "Crypto Track",
    "body": "### Advanced Application of Fair Value Gaps in Crypto\nThis card delves into advanced applications of Fair Value Gaps (FVG) concepts specific to crypto trading, addressing edge cases and professional-level nuances. Mastery of these elements is essential for high-level trading strategies.\n\n* **Edge Case Analysis**: Examine scenarios where FVGs may not deliver expected outcomes, such as during extreme market manipulation or news events. Understanding these anomalies is critical for risk management.\n* **Multi-Timeframe Analysis**: Incorporate multi-timeframe analysis to validate FVGs. A gap identified on a lower timeframe should be confirmed by higher timeframe trends to ensure reliability.\n* **Algorithmic Trading Considerations**: For traders utilizing algorithmic strategies, ensure that FVG parameters are integrated into your trading algorithms, optimizing for market conditions and volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "The practice of analyzing price action across different timeframes to confirm trading signals."
        }
      ],
      "whyThisMatters": "Advanced applications of FVG concepts prepare traders for complex market conditions, enhancing their strategic depth.",
      "realLifeExample": "A FVG in Bitcoin was invalidated during a major news announcement, highlighting the need for edge case awareness.",
      "commonMistake": "Traders often neglect to validate FVGs across multiple timeframes, leading to unreliable trading decisions.",
      "quickNote": "Advanced understanding of FVGs enhances your trading strategy resilience.",
      "mentorText": "As you explore advanced applications, remember that the market is not always predictable. Stay adaptable and validate your setups.",
      "mentorAnalogy": "Consider this advanced application like a pilot preparing for unexpected turbulence; thorough preparation and adaptability are essential."
    },
    "taskData": null,
    "visualKey": "crypto-fvg-liquidations"
  }
];
