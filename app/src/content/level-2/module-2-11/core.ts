import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Recognizing Liquidity Traps",
    "label": "Core Track",
    "body": "### Liquidity Dynamics: Identifying Traps in BSL/SSL Contexts\nLiquidity traps occur when price movements mislead traders into false breakouts or reversals, often around boundary areas. Understanding these traps is essential for maintaining a disciplined trading approach.\n\n* **False Breakout Identification**: Monitor price action around BSL and SSL levels; a sudden spike through these boundaries followed by a rapid reversal can indicate a liquidity trap, leading to potential losses.\n* **Volume Confirmation**: Analyze volume spikes accompanying price movements; a lack of significant volume during a breakout suggests that the price action may not have the backing of genuine liquidity.\n* **Order Book Analysis**: Utilize order book data to observe resting orders; if a breakout occurs with minimal resistance from resting orders, it may signify a liquidity trap rather than a genuine market move.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Trap",
          "definition": "A situation where price movements mislead traders into false breakouts or reversals."
        }
      ],
      "whyThisMatters": "Identifying liquidity traps is critical for avoiding premature entries and maintaining risk management discipline.",
      "realLifeExample": "On EURUSD, a breakout above 1.2000 at 10:00 AM EST was followed by a quick drop back to 1.1950, indicating a liquidity trap where traders were misled.",
      "commonMistake": "Traders often enter positions immediately after a breakout without confirming volume or order book data.",
      "quickNote": "Liquidity traps can lead to significant losses if not identified early.",
      "mentorText": "When you see a price spike past a boundary, don’t rush in. Check the volume and the order book first. If it’s not there, you might be stepping into a trap.",
      "mentorAnalogy": "Think of a liquidity trap like a mirage in the desert; it looks real until you get closer and realize it’s just an illusion."
    },
    "taskData": null,
    "visualKey": "resting-liquidity-pools"
  },
  {
    "type": "concept",
    "title": "Risk Management Around Liquidity Areas",
    "label": "Core Track",
    "body": "### Risk Mitigation: Positioning Near Liquidity Clusters\nEffective risk management is vital when trading around mapped liquidity areas. Proper positioning and stop-loss placement can protect against adverse price movements.\n\n* **Stop-Loss Placement**: Position stop-loss orders just beyond significant BSL or SSL levels to avoid being triggered by normal market fluctuations while still protecting your capital.\n* **Position Sizing**: Adjust your position size based on the proximity to liquidity areas; tighter stops near BSL/SSL require smaller positions to manage risk effectively.\n* **Market Context Awareness**: Always consider the broader market context when placing trades near liquidity clusters; news events or economic releases can create volatility that impacts your risk profile.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Placement",
          "definition": "The strategic positioning of stop-loss orders to minimize losses."
        }
      ],
      "whyThisMatters": "Proper risk management around liquidity areas enhances the ability to withstand market volatility and protects trading capital.",
      "realLifeExample": "When trading GBPJPY, placing a stop-loss at 150.50, just below the SSL, helped avoid a false breakout during the 2:30 PM EST news release.",
      "commonMistake": "Traders often place stop-loss orders too close to liquidity areas, leading to premature exits from valid trades.",
      "quickNote": "Strategic stop-loss placement is essential for protecting capital in volatile environments.",
      "mentorText": "Always think about where you place your stops. If you’re too close to the liquidity area, you’re just asking to get stopped out.",
      "mentorAnalogy": "Positioning a stop-loss is like setting a safety net; it should be close enough to catch you but far enough to avoid unnecessary falls."
    },
    "taskData": null,
    "visualKey": "boundary-areas-debrief"
  },
  {
    "type": "concept",
    "title": "Synthesizing BSL and SSL Insights",
    "label": "Core Track",
    "body": "### Liquidity Mapping: Integrating BSL and SSL Insights\nSynthesizing insights from both buy-side and sell-side liquidity mapping is crucial for informed trading decisions. Understanding the interplay between these areas enhances market analysis.\n\n* **Interconnectedness of Liquidity Areas**: Recognize that BSL and SSL are not isolated; movements in one can influence the other, leading to potential trading opportunities.\n* **Confluence Analysis**: Identify areas where BSL and SSL converge; these zones often represent strong support or resistance levels, providing clearer trading signals.\n* **Market Sentiment Assessment**: Gauge market sentiment by observing the reaction of price to BSL and SSL levels; a strong reaction can indicate the market’s bias and potential direction.",
    "context": {
      "keyTerms": [
        {
          "term": "Confluence Analysis",
          "definition": "The process of identifying overlapping liquidity areas to enhance trading signals."
        }
      ],
      "whyThisMatters": "Synthesizing insights from both sides of liquidity enhances decision-making and improves trade accuracy.",
      "realLifeExample": "In AUDUSD, a confluence of BSL at 0.7400 and SSL at 0.7380 created a strong support zone, leading to a successful long position after a bounce.",
      "commonMistake": "Traders often analyze BSL and SSL in isolation, missing critical insights from their interactions.",
      "quickNote": "Integrating BSL and SSL insights can lead to more robust trading strategies.",
      "mentorText": "When you look at BSL and SSL, don’t treat them as separate entities. They influence each other, and understanding that gives you an edge.",
      "mentorAnalogy": "Think of BSL and SSL like two rivers converging; where they meet, the flow is stronger and more predictable."
    },
    "taskData": null,
    "visualKey": "boundary-areas-intro"
  },
  {
    "type": "concept",
    "title": "Practical Application of Liquidity Mapping",
    "label": "Core Track",
    "body": "### Real-Time Liquidity Mapping: Practical Exercises\nEngaging in practical exercises to apply liquidity mapping concepts is essential for mastering BSL and SSL dynamics. Real-time scenarios enhance understanding and execution.\n\n* **Scenario Simulation**: Analyze historical price movements around identified BSL and SSL levels; simulate trades based on past data to refine entry and exit strategies.\n* **Live Market Application**: During live trading sessions, practice identifying BSL and SSL in real-time; document how price reacts to these levels to build a robust trading journal.\n* **Review and Adjust**: After executing trades based on liquidity mapping, review outcomes to identify patterns; adjust future strategies based on these insights to improve performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "The practice of analyzing historical price movements to refine trading strategies."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge and enhances real-world trading skills.",
      "realLifeExample": "During a live session on USDCHF, mapping BSL at 0.9200 and SSL at 0.9180 allowed for a precise entry that capitalized on a bounce, resulting in a 50-pip gain.",
      "commonMistake": "Traders often neglect to practice real-time mapping, leading to a disconnect between theory and execution.",
      "quickNote": "Practical exercises bridge the gap between theory and real-world application.",
      "mentorText": "Don’t just study liquidity mapping; practice it in real-time. The more you apply what you learn, the sharper your skills will become.",
      "mentorAnalogy": "Practicing liquidity mapping is like a pilot training in a simulator; it prepares you for real flights by allowing you to experience scenarios without risk."
    },
    "taskData": null,
    "visualKey": "bsl-mapping"
  },
  {
    "type": "concept",
    "title": "Mapping Boundary Areas: BSL and SSL Overview",
    "label": "Core Track",
    "body": "### Boundary Areas: BSL/SSL Overview\nThis card summarizes the critical concepts of Buy-Side Liquidity (BSL) and Sell-Side Liquidity (SSL) as they pertain to boundary areas in trading.\n\n* **Liquidity Clusters**: Identify BSL and SSL zones as areas where resting orders accumulate, influencing price action and potential reversals. These zones are often established around key support and resistance levels.\n* **Market Dynamics**: Recognize that BSL represents demand zones where buyers are likely to enter, while SSL indicates supply zones where sellers are expected to act. Understanding these dynamics is essential for effective trade planning.\n* **Order Flow Analysis**: Utilize order flow data to assess the strength of BSL and SSL. High concentration of resting orders can indicate potential price barriers, while thin areas may suggest easier price movement.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Buy-Side Liquidity (BSL)",
          "definition": "The accumulation of resting buy orders at specific price levels."
        },
        {
          "term": "Sell-Side Liquidity (SSL)",
          "definition": "The accumulation of resting sell orders at specific price levels."
        }
      ],
      "whyThisMatters": "Understanding BSL and SSL is crucial for identifying potential entry and exit points based on market liquidity dynamics.",
      "realLifeExample": "During the EURUSD session on a Tuesday, a significant SSL was observed at 1.1000, where over 500 million euros in sell orders were resting, leading to a price rejection at that level.",
      "commonMistake": "Traders often overlook the significance of liquidity clusters, leading to premature entries in thin market conditions.",
      "quickNote": "BSL and SSL represent critical liquidity zones that shape market dynamics.",
      "mentorText": "When mapping BSL and SSL, focus on where the orders are stacked. Think of these zones as pressure points in the market that can either support or repel price movements.",
      "mentorAnalogy": "Consider BSL and SSL like a dam holding back water. When the pressure builds (orders accumulate), it can either hold firm or burst through, leading to significant price movements."
    },
    "taskData": null,
    "visualKey": "ssl-mapping"
  },
  {
    "type": "practice",
    "title": "Identifying Resting Liquidity Pools",
    "label": "Core Track",
    "body": "### Advanced Application: Resting Liquidity Pools\nThis card focuses on the advanced application of identifying resting liquidity pools within BSL and SSL zones for professional trading strategies.\n\n* **Order Book Analysis**: Examine the order book to pinpoint where significant resting orders lie. Look for clusters that exceed the average volume for that instrument, indicating strong liquidity.\n* **Market Sentiment Indicators**: Combine sentiment analysis with liquidity mapping. If a BSL is identified at a psychological level (e.g., 1.2000 in GBPUSD) and sentiment is bullish, the likelihood of price bouncing off that level increases.\n* **Timeframe Considerations**: Assess the timeframe of your analysis. Higher timeframes may reveal more significant liquidity pools, while lower timeframes can provide entry opportunities as price approaches these zones.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book",
          "definition": "A real-time list of buy and sell orders for a specific financial instrument."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular market or financial instrument."
        }
      ],
      "whyThisMatters": "Identifying resting liquidity pools allows traders to make informed decisions about entry and exit points based on market depth.",
      "realLifeExample": "On a Friday morning, the USDJPY showed a strong BSL at 110.50 with 300 million dollars in buy orders, which coincided with a bullish sentiment shift, leading to a 50-pip rally.",
      "commonMistake": "Failing to consider the impact of market sentiment when analyzing liquidity pools can lead to misjudged trade entries.",
      "quickNote": "Effective liquidity pool identification combines order book analysis with market sentiment.",
      "mentorText": "When you spot a liquidity pool, think about the market's mood. If there's strong bullish sentiment at a BSL, that's your signal to prepare for a potential bounce.",
      "mentorAnalogy": "Mapping liquidity pools is like a chef knowing where the ingredients are stored. You need to know where the resources are to create a successful dish."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You identify a BSL at 1.1500 in the EURUSD with significant resting orders. Market sentiment is neutral. What should you consider next?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position immediately.",
          "isCorrect": false,
          "feedback": "Entering immediately without considering market sentiment may lead to losses."
        },
        {
          "id": "1",
          "text": "Wait for confirmation of bullish sentiment before entering.",
          "isCorrect": true,
          "feedback": "Waiting for sentiment confirmation ensures that you align with market dynamics."
        },
        {
          "id": "2",
          "text": "Ignore the BSL and focus on other technical indicators.",
          "isCorrect": false,
          "feedback": "Ignoring liquidity zones can lead to missed opportunities or losses."
        },
        {
          "id": "3",
          "text": "Set a sell limit order just below the BSL.",
          "isCorrect": false,
          "feedback": "Setting a sell limit order at a BSL contradicts the expected price action."
        }
      ]
    },
    "visualKey": "resting-liquidity-pools"
  },
  {
    "type": "summary",
    "title": "Boundary Areas: Advanced Insights",
    "label": "Core Track",
    "body": "### Summary of Advanced Insights on BSL/SSL\nThis card consolidates advanced insights into Boundary Areas, focusing on the nuances of BSL and SSL for strategic trading decisions.\n\n* **Dynamic Adjustments**: Recognize that BSL and SSL are not static; they can shift based on market conditions, news events, or economic releases. Regularly update your analysis to reflect these changes.\n* **Risk Management**: Implement risk management strategies that account for the proximity of BSL and SSL. Position sizing should consider the potential volatility around these liquidity zones.\n* **Trade Execution Timing**: Timing your entries and exits around BSL and SSL can significantly enhance trade performance. Monitor price action as it approaches these zones for optimal execution points.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Adjustments",
          "definition": "The need to regularly update liquidity zone analysis based on market changes."
        },
        {
          "term": "Risk Management",
          "definition": "Strategies to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Understanding the dynamic nature of BSL and SSL is essential for adapting trading strategies to current market conditions.",
      "realLifeExample": "Following a major economic announcement, the BSL at 1.3000 in AUDUSD shifted, leading to a new entry point as liquidity adjusted in response to market sentiment.",
      "commonMistake": "Traders often fail to adjust their BSL and SSL analysis after significant market events, leading to outdated strategies.",
      "quickNote": "Regularly update your BSL and SSL analysis to stay aligned with market dynamics.",
      "mentorText": "Always be prepared to adjust your BSL and SSL analysis. The market is fluid, and your strategies must adapt to new information.",
      "mentorAnalogy": "Think of BSL and SSL like a weather forecast. Just as conditions can change rapidly, so too can market liquidity; staying updated is crucial."
    },
    "taskData": null,
    "visualKey": "boundary-areas-debrief"
  }
];
