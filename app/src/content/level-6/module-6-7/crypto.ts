import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Spot Accumulation vs Futures Perp Liquidation",
    "label": "Crypto Track",
    "body": "### Core Scenario: Navigating Structural Conflict\nUnderstanding the interplay between spot accumulation and futures perpetual liquidation is essential for effective trading in the crypto market. This card teaches **how to identify and navigate these conflicting signals**.\n\n* **Spot Accumulation Dynamics**: Spot accumulation occurs when investors buy and hold assets, indicating bullish sentiment. Monitor volume spikes in spot markets to confirm accumulation phases.\n* **Futures Perpetual Liquidation Effects**: Liquidations in futures markets can lead to rapid price declines, creating a bearish sentiment that conflicts with spot accumulation. Track liquidation levels to assess potential price impacts.\n* **Conflict Resolution**: Analyze the correlation between spot and futures movements. If spot accumulation persists while futures liquidations increase, prepare for potential volatility as market participants react to conflicting signals.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot Accumulation",
          "definition": "The process of buying and holding crypto assets in the spot market."
        },
        {
          "term": "Futures Perpetual Liquidation",
          "definition": "The forced closure of futures positions due to margin calls, often leading to price drops."
        }
      ],
      "whyThisMatters": "Recognizing these conflicts allows traders to adjust their strategies effectively, mitigating risks associated with opposing market signals.",
      "realLifeExample": "On March 15, 2023, Bitcoin saw a spot accumulation phase with a 15% increase in volume, while futures liquidations surged by 20%, creating a conflict that led to a 10% price drop within hours.",
      "commonMistake": "Traders often misinterpret accumulation as a clear buy signal without considering the impact of ongoing futures liquidations.",
      "quickNote": "Spot accumulation can signal bullish intent, but must be weighed against liquidation pressures in futures markets.",
      "mentorText": "When you see spot accumulation, don’t just jump in. Look at the futures market. If liquidations are rising, you need to be cautious; the market could turn against you quickly.",
      "mentorAnalogy": "Think of this like a pilot navigating through conflicting weather patterns; the accumulation of favorable conditions might be countered by sudden storms, requiring careful adjustments to maintain a safe flight path."
    },
    "taskData": null,
    "visualKey": "structural-conflict-zones"
  },
  {
    "type": "concept",
    "title": "Understanding Spot Accumulation Dynamics",
    "label": "Crypto Track",
    "body": "### Core Scenario: Spot Accumulation Mechanics\nSpot accumulation reflects bullish sentiment but can conflict with bearish futures movements. This card teaches **how to analyze spot accumulation dynamics in relation to futures activity**.\n\n* **Volume Analysis**: High trading volume in the spot market indicates strong buying interest. Use volume indicators to confirm accumulation trends and identify potential reversals.\n* **Price Action Correlation**: Observe price movements alongside volume; consistent price increases with rising volume signal healthy accumulation, while price drops amidst high volume may indicate liquidation pressure.\n* **Timeframe Alignment**: Analyze multiple timeframes to assess the strength of spot accumulation. A bullish signal on a daily chart may conflict with bearish signals on a 4-hour chart, necessitating a nuanced approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Analysis",
          "definition": "The study of trading volume to gauge market interest and potential price movements."
        },
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time, reflecting market sentiment."
        }
      ],
      "whyThisMatters": "Understanding spot accumulation dynamics helps traders make informed decisions, particularly in volatile market conditions where futures may exert significant influence.",
      "realLifeExample": "On April 10, 2023, Ethereum displayed a 30% increase in spot volume while its price rose steadily, indicating strong accumulation despite concurrent futures liquidations that threatened to disrupt the trend.",
      "commonMistake": "Traders may overlook the importance of volume analysis, assuming price increases alone signify strong accumulation without confirming underlying market interest.",
      "quickNote": "Spot accumulation is validated by rising volume and price action; always analyze these factors together.",
      "mentorText": "When assessing spot accumulation, remember to check the volume. If you see prices rising but volume is low, be wary; that could be a sign of weakness.",
      "mentorAnalogy": "Consider a chef preparing a dish; the ingredients (volume) must be fresh and abundant for the dish (price) to be truly appealing. Without quality ingredients, the final product may disappoint."
    },
    "taskData": null,
    "visualKey": "structural-conflict-zones"
  },
  {
    "type": "concept",
    "title": "Analyzing Futures Perpetual Liquidation",
    "label": "Crypto Track",
    "body": "### Core Scenario: Impact of Futures Liquidation\nFutures perpetual liquidation can create significant price volatility, especially when conflicting with spot accumulation. This card teaches **how to analyze the effects of liquidation on spot prices**.\n\n* **Liquidation Triggers**: Understand the thresholds that lead to liquidations, such as margin calls or price drops below support levels. Monitor these levels to anticipate potential market reactions.\n* **Market Sentiment Shifts**: Liquidations can lead to rapid shifts in sentiment, often causing panic selling in the spot market. Track sentiment indicators to gauge market reactions to liquidation events.\n* **Correlation with Spot Prices**: Assess how futures liquidations impact spot prices. A sudden spike in liquidations can lead to a cascading effect on spot prices, creating opportunities for strategic entries or exits.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Triggers",
          "definition": "Conditions that cause forced closure of futures positions, often due to margin requirements."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or market."
        }
      ],
      "whyThisMatters": "Analyzing futures liquidation helps traders anticipate price movements and adjust their strategies to mitigate risks associated with sudden market shifts.",
      "realLifeExample": "On May 5, 2023, Bitcoin experienced a 15% drop in spot price triggered by a wave of futures liquidations, where over $200 million in positions were closed within an hour, leading to a significant market reaction.",
      "commonMistake": "Traders often underestimate the impact of liquidation events, failing to adjust their strategies in anticipation of rapid price changes.",
      "quickNote": "Futures liquidations can create sharp price movements; always monitor liquidation levels alongside spot price action.",
      "mentorText": "When you see a spike in liquidations, don’t ignore it. That’s a signal that the market could react violently, and you need to be prepared for rapid changes.",
      "mentorAnalogy": "Imagine a dam holding back water; once it starts to leak (liquidation), the pressure builds until it bursts, causing a flood (price drop) that can overwhelm the surrounding area."
    },
    "taskData": null,
    "visualKey": "structural-conflict-zones"
  },
  {
    "type": "concept",
    "title": "Trade Strategies Amidst Liquidation Conflicts",
    "label": "Crypto Track",
    "body": "### Core Scenario: Strategic Trading in Conflict\nNavigating conflicts between spot accumulation and futures perpetual liquidation requires strategic planning. This card teaches **effective trading strategies to employ during these conflicts**.\n\n* **Hedging Techniques**: Utilize hedging strategies to protect against adverse price movements caused by liquidation events. Consider options or futures contracts to mitigate risk while maintaining exposure to spot positions.\n* **Dynamic Position Sizing**: Adjust position sizes based on the level of conflict observed between spot and futures markets. Smaller positions may be prudent during high volatility periods to limit potential losses.\n* **Timing Entries and Exits**: Develop a systematic approach for timing entries and exits based on the interplay of spot accumulation and liquidation signals. Use technical indicators to refine your timing and improve execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging Techniques",
          "definition": "Strategies used to offset potential losses in investments."
        },
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting the size of a trade based on market conditions and risk assessment."
        }
      ],
      "whyThisMatters": "Implementing effective strategies during liquidation conflicts enhances risk management and can improve overall trading performance.",
      "realLifeExample": "On June 12, 2023, a trader used a hedging strategy by shorting futures contracts while holding a long position in Litecoin, effectively mitigating losses during a 12% price drop triggered by liquidation events.",
      "commonMistake": "Traders often fail to adjust their strategies in response to market conflicts, leading to increased exposure and potential losses.",
      "quickNote": "Strategic hedging and dynamic position sizing can protect against losses during liquidation conflicts.",
      "mentorText": "When you face liquidation conflicts, don’t just hold your position. Think about how to hedge your risk and adjust your size to protect your capital.",
      "mentorAnalogy": "Like a sailor adjusting sails in a storm, you must adapt your strategies to maintain control and navigate through turbulent market conditions."
    },
    "taskData": null,
    "visualKey": "structural-conflict-zones"
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Conflicts",
    "label": "Crypto Track",
    "body": "### Core Scenario: Risk Management Techniques\nEffective risk management is essential when trading crypto during conflicts between spot and futures markets. This card outlines **specific strategies to mitigate risk in these scenarios**.\n\n* **Position Sizing**: Determine position sizes based on volatility metrics from both spot and futures markets, adjusting for increased risk during conflict periods. For example, if BTC futures show a 10% increase in open interest while spot remains flat, reduce position sizes by 25%.\n* **Stop-Loss Adjustments**: Implement dynamic stop-loss orders that adapt to market conditions. If ETH futures experience a sudden liquidation spike, adjust stop-loss levels to account for potential price swings, ensuring they are not too tight to avoid premature exits.\n* **Diversification Strategies**: Utilize a diversified portfolio approach by allocating capital across various crypto assets. For instance, if XRP futures are indicating a bearish trend while spot remains bullish, consider reallocating funds to stablecoins or other assets to hedge against volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Dynamic Stop-Loss",
          "definition": "A stop-loss order that adjusts based on market volatility and conditions."
        },
        {
          "term": "Diversification",
          "definition": "Spreading investments across various assets to reduce risk."
        }
      ],
      "whyThisMatters": "Effective risk management during conflicts can significantly reduce potential losses and enhance overall trading performance in volatile crypto markets.",
      "realLifeExample": "During a recent conflict where BTC spot prices remained stable at $30,000 while futures showed a liquidation event causing prices to drop to $28,500, traders who adjusted their position sizes and stop-loss levels effectively minimized their losses.",
      "commonMistake": "Failing to adjust position sizes in response to market volatility can lead to disproportionate losses during conflict periods.",
      "quickNote": "Adjust risk parameters dynamically during spot and futures conflicts to protect capital.",
      "mentorText": "When you see a divergence between spot and futures, think of it as a warning sign. Adjust your position sizes and stop-loss levels to safeguard your trades. Don’t let emotions dictate your risk management.",
      "mentorAnalogy": "Managing risk in crypto conflicts is like a pilot adjusting altitude in turbulent weather; you must continuously monitor conditions and adjust your approach to maintain stability."
    },
    "taskData": null,
    "visualKey": "structural-conflict-zones"
  },
  {
    "type": "concept",
    "title": "Indicators of Spot vs Futures Conflicts",
    "label": "Crypto Track",
    "body": "### Core Scenario: Key Market Indicators\nIdentifying indicators that signal conflicts between spot accumulation and futures liquidation is critical for informed trading decisions. This card focuses on **recognizing the signs of market conflict**.\n\n* **Open Interest Analysis**: Monitor changes in open interest across futures contracts. A rising open interest alongside declining spot prices may indicate potential liquidation, signaling a conflict. For example, if BTC futures open interest rises by 15% while spot prices drop from $30,000 to $29,500, this could indicate a bearish sentiment.\n* **Volume Divergence**: Analyze volume patterns between spot and futures markets. If spot trading volume decreases while futures volume spikes, this may suggest a shift in market sentiment. For instance, if ETH spot volume drops to 50,000 while futures volume rises to 200,000, it indicates potential liquidation pressure.\n* **Funding Rate Observations**: Keep an eye on funding rates in perpetual futures. A significantly positive funding rate may indicate that long positions are over-leveraged, potentially leading to liquidation. If the funding rate for LTC futures exceeds 0.1% while spot remains stable, prepare for possible conflicts.",
    "context": {
      "keyTerms": [
        {
          "term": "Open Interest",
          "definition": "The total number of outstanding derivative contracts that have not been settled."
        },
        {
          "term": "Volume Divergence",
          "definition": "The difference in trading volume between spot and futures markets."
        },
        {
          "term": "Funding Rate",
          "definition": "The cost of holding a position in perpetual futures, paid between long and short traders."
        }
      ],
      "whyThisMatters": "Recognizing these indicators allows traders to anticipate market movements and adjust strategies accordingly, enhancing decision-making during conflicts.",
      "realLifeExample": "In a recent market scenario, BTC futures saw open interest increase by 20% while spot prices fell from $32,000 to $31,000, indicating a potential liquidation event that traders could prepare for.",
      "commonMistake": "Ignoring volume divergence can lead to missed opportunities to adjust positions before significant market movements occur.",
      "quickNote": "Monitor open interest, volume, and funding rates to identify potential conflicts between spot and futures markets.",
      "mentorText": "Always keep your eyes on the indicators. If you see open interest rising while spot prices drop, it’s time to reassess your positions. These signals are your roadmap through market conflicts.",
      "mentorAnalogy": "Identifying market indicators in crypto is like a surgeon monitoring vital signs; you must stay alert to changes that could indicate underlying issues requiring immediate attention."
    },
    "taskData": null,
    "visualKey": "structural-conflict-zones"
  },
  {
    "type": "practice",
    "title": "Practicing Conflict Recognition in Crypto",
    "label": "Crypto Track",
    "body": "### Core Scenario: Conflict Recognition Exercises\nEngaging in practical exercises is essential for developing the skill to recognize and respond to conflicts between spot accumulation and futures liquidation. This card provides **realistic scenarios for practice**.\n\n* **Scenario Simulation**: Analyze a hypothetical situation where BTC spot is trading at $35,000 and futures show a significant increase in open interest. Identify the potential implications for your trading strategy and determine your response. Would you adjust your position size or set tighter stop-loss orders?\n* **Volume Analysis Task**: Given a scenario where ETH spot volume decreases while futures volume increases sharply, outline the steps you would take to assess the risk and adjust your trading plan. Consider how this divergence affects your existing positions.\n* **Funding Rate Evaluation**: Review a case where the funding rate for LTC futures spikes to 0.15% while spot remains stable. Discuss how you would interpret this data and what actions you might take to mitigate risk in your portfolio.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "A practice exercise that mimics real market conditions to test decision-making."
        },
        {
          "term": "Volume Analysis",
          "definition": "The process of evaluating trading volume trends to inform trading strategies."
        },
        {
          "term": "Funding Rate Evaluation",
          "definition": "Assessing the implications of funding rates on trading positions."
        }
      ],
      "whyThisMatters": "Practicing conflict recognition enhances your ability to make informed decisions under pressure, which is vital in the volatile crypto market.",
      "realLifeExample": "In a simulated exercise, participants analyzed a scenario where BTC futures open interest increased while spot prices fell, leading to discussions on risk management strategies that could be employed.",
      "commonMistake": "Failing to engage in practice scenarios can lead to unpreparedness during actual market conflicts, resulting in poor decision-making.",
      "quickNote": "Regularly practice conflict recognition to sharpen your response strategies in real market conditions.",
      "mentorText": "Practice makes perfect. When you simulate these scenarios, think critically about your responses. The more you engage with these exercises, the better prepared you’ll be in real situations.",
      "mentorAnalogy": "Practicing conflict recognition is like a pilot conducting emergency drills; the more you train, the more instinctive your responses become during real crises."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a scenario where BTC spot is at $40,000 and futures open interest rises by 25%, what should your immediate response be?",
      "options": [
        {
          "id": "0",
          "text": "Increase your position size in BTC spot.",
          "isCorrect": false,
          "feedback": "Increasing position size in the face of rising open interest may expose you to higher risk."
        },
        {
          "id": "1",
          "text": "Monitor the situation and consider reducing position size.",
          "isCorrect": true,
          "feedback": "Monitoring and potentially reducing position size is a prudent response to mitigate risk."
        },
        {
          "id": "2",
          "text": "Ignore the open interest changes and maintain your current strategy.",
          "isCorrect": false,
          "feedback": "Ignoring changes in open interest can lead to significant losses if a liquidation occurs."
        },
        {
          "id": "3",
          "text": "Shift all capital to futures trading.",
          "isCorrect": false,
          "feedback": "Shifting to futures without assessing the risk can expose you to unnecessary volatility."
        }
      ]
    },
    "visualKey": "structural-conflict-zones"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Conflict Concepts",
    "label": "Crypto Track",
    "body": "### Core Scenario: Key Concepts Recap\nThis card summarizes the essential concepts related to navigating conflicts between spot accumulation and futures perpetual liquidation. Understanding these principles is vital for effective trading.\n\n* **Risk Management Techniques**: Implement strategies such as position sizing, dynamic stop-loss adjustments, and diversification to safeguard capital during conflicts.\n* **Indicators of Conflict**: Recognize key indicators like open interest changes, volume divergence, and funding rates to anticipate market movements and adjust strategies accordingly.\n* **Practical Exercises**: Engage in scenario simulations and volume analysis tasks to enhance your ability to recognize and respond to conflicts in real-time trading environments.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management Techniques",
          "definition": "Strategies employed to minimize potential losses in trading."
        },
        {
          "term": "Indicators of Conflict",
          "definition": "Market signals that suggest potential opposing trends in spot and futures."
        },
        {
          "term": "Practical Exercises",
          "definition": "Activities designed to improve skills through simulated scenarios."
        }
      ],
      "whyThisMatters": "Reinforcing these concepts ensures that traders are equipped to navigate the complexities of crypto markets effectively.",
      "realLifeExample": "A trader who applied risk management techniques during a conflict between ETH spot accumulation and futures liquidation was able to protect their capital and capitalize on subsequent market recovery.",
      "commonMistake": "Overlooking the importance of practical exercises can lead to a lack of preparedness in real market scenarios.",
      "quickNote": "Mastering these concepts is crucial for navigating crypto market conflicts successfully.",
      "mentorText": "Review these concepts regularly. They are your toolkit for navigating conflicts in the crypto space. Stay sharp and ready to act when the market shifts.",
      "mentorAnalogy": "Summarizing these concepts is like a chef reviewing their recipes before service; knowing your ingredients and techniques ensures a successful outcome."
    },
    "taskData": null,
    "visualKey": "structural-conflict-zones"
  }
];
