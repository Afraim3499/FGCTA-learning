import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Bullish and Bearish Candle Structures",
    "label": "Core Track",
    "body": "### Candle Structures: Bullish vs Bearish\nCandle structures provide critical insights into market sentiment and order block identification. This card teaches **how to differentiate between bullish and bearish candle formations**.\n\n* **Bullish Candle Characteristics**: A bullish candle typically closes above its open, indicating buying pressure. Look for a body that is larger than the preceding bearish candles, often accompanied by higher volume.\n* **Bearish Candle Characteristics**: A bearish candle closes below its open, reflecting selling pressure. Identify these candles by their larger bodies compared to prior bullish candles, particularly during market reversals.\n* **Implications for Order Blocks**: Recognizing these structures helps in pinpointing order blocks, as bullish candles often precede demand zones while bearish candles signal supply zones.",
    "context": {
      "keyTerms": [
        {
          "term": "Bullish Candle",
          "definition": "A candle that closes above its opening price, indicating upward price movement."
        },
        {
          "term": "Bearish Candle",
          "definition": "A candle that closes below its opening price, indicating downward price movement."
        }
      ],
      "whyThisMatters": "Accurate identification of candle structures is essential for effective order block trading strategies, influencing entry and exit decisions.",
      "realLifeExample": "On the EURUSD chart, a bullish candle formed at 1.1000 with a close at 1.1025, indicating strong buying interest before a demand zone.",
      "commonMistake": "Traders often misinterpret small-bodied candles as significant, overlooking the context of surrounding candles.",
      "quickNote": "Bullish candles signal buying pressure; bearish candles indicate selling pressure.",
      "mentorText": "When you see a bullish candle closing strong, think of it as a signal that buyers are stepping in. Conversely, a bearish close suggests sellers are taking control. Pay attention to the size and volume.",
      "mentorAnalogy": "Consider a construction site: bullish candles are like cranes lifting materials, while bearish candles are like wrecking balls tearing down structures. Each has a distinct role in shaping the market."
    },
    "taskData": null,
    "visualKey": "ob-types-intro"
  },
  {
    "type": "concept",
    "title": "Identifying Bullish vs Bearish Order Blocks",
    "label": "Core Track",
    "body": "### Order Block Identification: Bullish vs Bearish\nDifferentiating between bullish and bearish order blocks is crucial for effective trading strategies. This card teaches **how to analyze candle formations to identify order blocks**.\n\n* **Bullish Order Block Definition**: A bullish order block is formed after a bearish price action and is characterized by a series of bullish candles that close above the previous bearish candle's high. Confirm with increased volume.\n* **Bearish Order Block Definition**: A bearish order block appears after bullish price action, marked by a series of bearish candles closing below the previous bullish candle's low. Volume should also be considered for validation.\n* **Market Sentiment Indicators**: Utilize tools such as RSI or MACD to confirm the sentiment behind the order blocks, ensuring alignment with price action for better trade decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Bullish Order Block",
          "definition": "A price range where buying interest is established, typically following a bearish trend."
        },
        {
          "term": "Bearish Order Block",
          "definition": "A price range where selling interest is established, typically following a bullish trend."
        }
      ],
      "whyThisMatters": "Identifying the correct type of order block allows traders to align their strategies with market sentiment, enhancing the probability of successful trades.",
      "realLifeExample": "On the GBPJPY chart, a bullish order block formed after a drop to 150.00, with three consecutive bullish candles closing above 151.50, indicating strong buying pressure.",
      "commonMistake": "Traders often confuse order blocks with simple support and resistance levels, neglecting the significance of the candle formations.",
      "quickNote": "Bullish order blocks indicate potential buying zones; bearish order blocks signal potential selling zones.",
      "mentorText": "When identifying order blocks, focus on the sequence of candle closes. A bullish order block should show a clear shift from selling to buying, while a bearish order block indicates the opposite.",
      "mentorAnalogy": "Think of order blocks like a dam: bullish order blocks hold back selling pressure, while bearish order blocks contain buying pressure. Recognizing these structures helps you understand market flow."
    },
    "taskData": null,
    "visualKey": "ob-bullish-bearish"
  },
  {
    "type": "concept",
    "title": "Calculating the Mean Threshold of Order Blocks",
    "label": "Core Track",
    "body": "### Mean Threshold Calculation for Order Blocks\nCalculating the Mean Threshold (50% midpoint) of order blocks is essential for determining potential reversal points. This card teaches **the methodology for calculating this threshold**.\n\n* **Mean Threshold Formula**: The Mean Threshold is calculated by taking the high and low of the order block and applying the formula: (High + Low) / 2. This gives you the midpoint where price may react.\n* **Application in Trading**: Use the Mean Threshold to set limit orders or stop-loss levels. If price approaches this level after a breakout, it may indicate a reversal or continuation of the trend.\n* **Confirmation with Volume**: Always confirm the Mean Threshold with volume spikes. A strong volume at this level increases the likelihood of a significant price reaction.",
    "context": {
      "keyTerms": [
        {
          "term": "Mean Threshold",
          "definition": "The midpoint of an order block, calculated as the average of the high and low of that block."
        }
      ],
      "whyThisMatters": "Understanding the Mean Threshold helps traders identify critical price levels where market reversals are likely to occur, enhancing entry precision.",
      "realLifeExample": "On the AUDCAD chart, a bearish order block formed between 0.9300 and 0.9350. The Mean Threshold calculated at 0.9325 served as a reversal point when price retraced.",
      "commonMistake": "Traders often overlook the importance of volume confirmation when relying on the Mean Threshold for trade setups.",
      "quickNote": "The Mean Threshold serves as a critical price level for potential reversals.",
      "mentorText": "When you calculate the Mean Threshold, think of it as finding the balance point of an order block. It’s where price is likely to react, so pay attention to how price behaves around it.",
      "mentorAnalogy": "Imagine a seesaw: the Mean Threshold is the pivot point. Just as the seesaw balances at the center, price often reacts at this midpoint of an order block."
    },
    "taskData": null,
    "visualKey": "ob-mean-threshold"
  },
  {
    "type": "concept",
    "title": "Defining Entry Boundaries within Order Blocks",
    "label": "Core Track",
    "body": "### Establishing Entry Boundaries in Order Blocks\nDefining precise entry boundaries within order blocks enhances the accuracy of trade entries. This card teaches **how to establish these boundaries based on market structure**.\n\n* **Entry Boundary Definition**: Entry boundaries are established at the edges of the order block, typically just above the high of a bullish order block or below the low of a bearish order block. This positioning allows for optimal risk-reward ratios.\n* **Market Structure Alignment**: Ensure that entry boundaries align with prevailing market structure. Look for confirmation signals such as breakouts or retests at these levels before executing trades.\n* **Risk Management Considerations**: Set stop-loss orders just outside the entry boundaries to minimize risk. This strategy protects against false breakouts while allowing for potential price movement within the order block.",
    "context": {
      "keyTerms": [
        {
          "term": "Entry Boundary",
          "definition": "The price level at which a trader intends to enter a position within an order block."
        }
      ],
      "whyThisMatters": "Defining entry boundaries allows for more strategic trade placements, improving the potential for profitable outcomes.",
      "realLifeExample": "On the USDCHF chart, a bullish order block formed between 0.9200 and 0.9250. The entry boundary was set at 0.9260, just above the order block high, leading to a successful trade as price rallied.",
      "commonMistake": "Traders often set entry boundaries too far from the actual order block, missing optimal entry points.",
      "quickNote": "Precise entry boundaries enhance trade accuracy and risk management.",
      "mentorText": "When defining entry boundaries, think of it as setting the stage for your trade. You want to position yourself just right to catch the movement without exposing yourself to unnecessary risk.",
      "mentorAnalogy": "Consider a chef preparing a dish: the entry boundary is like the perfect seasoning level. Too much or too little can ruin the dish, just as improper entry can lead to a failed trade."
    },
    "taskData": null,
    "visualKey": "ob-entry-boundaries"
  },
  {
    "type": "concept",
    "title": "Debrief on Order Block Types and Their Implications",
    "label": "Core Track",
    "body": "### Order Block Types: Implications for Trading Decisions\nOrder blocks can be categorized into bullish and bearish types, each influencing market behavior differently. Understanding these implications is essential for making informed trading decisions.\n\n* **Bullish Order Blocks**: These typically form after a price decline and indicate accumulation by buyers. A bullish OB suggests potential upward price movement, especially if confirmed by subsequent price action.\n* **Bearish Order Blocks**: Forming after a price increase, these blocks signal distribution by sellers. A bearish OB indicates potential downward pressure, particularly if the market respects the block during retracements.\n* **Market Reaction**: The effectiveness of an order block is often determined by the volume accompanying its formation. High volume during the formation of an OB increases its reliability as a support or resistance level.",
    "visualKey": "ob-types-debrief",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Advanced Candle Structures and Their Role in Order Blocks",
    "label": "Core Track",
    "body": "### Candle Structures: Indicators of Order Block Formations\nAdvanced candle structures provide critical insights into potential order block formations, enhancing traders' predictive capabilities. Recognizing these structures is vital for identifying entry and exit points.\n\n* **Engulfing Patterns**: A bullish engulfing pattern at a support level can indicate a strong bullish OB, suggesting a high probability of upward movement. Conversely, a bearish engulfing pattern at resistance signals a potential bearish OB.\n* **Pin Bars**: These candles, characterized by long wicks and small bodies, often indicate rejection of price levels. A pin bar at the edge of an order block can confirm its strength and potential reversal.\n* **Inside Bars**: An inside bar formation within an order block can signal consolidation before a breakout. Traders should monitor subsequent price action for confirmation of direction.",
    "visualKey": "ob-types-intro",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Common Traps and Pitfalls in Order Block Trading",
    "label": "Core Track",
    "body": "### Order Block Trading: Identifying Common Traps\nTraders often encounter traps and pitfalls when interpreting order blocks, leading to misinformed decisions. Awareness of these issues is crucial for maintaining a disciplined approach.\n\n* **Misinterpretation of Signals**: Traders may misread bullish or bearish signals from candle patterns, leading to premature entries. Always confirm the order block's validity with additional price action.\n* **Ignoring Market Noise**: High volatility can obscure the true intent of order blocks. Traders must differentiate between genuine breakouts and false signals caused by market noise.\n* **Overtrading**: The allure of potential profits can lead to overtrading around order blocks. Establish clear criteria for entries and exits to avoid impulsive decisions.",
    "visualKey": "ob-bullish-bearish",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Synthesis of Order Block Strategies",
    "label": "Core Track",
    "body": "### Integrating Order Block Strategies into a Cohesive Plan\nA successful trading plan incorporates various order block strategies while emphasizing risk management and execution techniques. This synthesis is essential for consistent performance.\n\n* **Risk Management**: Define risk parameters for each trade based on the distance to the order block's mean threshold. A common approach is to set stop-loss orders just beyond the order block to mitigate potential losses.\n* **Execution Techniques**: Utilize limit orders at the mean threshold of identified order blocks to optimize entry prices. This approach allows for better risk-reward ratios compared to market orders.\n* **Review and Adaptation**: Continuously review past trades involving order blocks to identify patterns in performance. Adapt strategies based on findings to enhance future trading outcomes.",
    "visualKey": "ob-mean-threshold",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Psychological Factors in Order Block Trading",
    "label": "Core Track",
    "body": "### Psychological Aspects of Trading Order Blocks\nTraders' decisions around order blocks are heavily influenced by psychological factors such as fear and greed. Understanding these dynamics is essential for anticipating market reactions at key levels.\n\n* **Fear of Missing Out (FOMO)**: Traders often rush into positions when prices approach order blocks, driven by the fear of missing potential gains. This can lead to premature entries before confirmation.\n* **Greed-Driven Breakouts**: When price breaks above a bullish order block, traders may overextend their positions due to greed, often ignoring risk management protocols. This can result in significant losses if the breakout fails.\n* **Market Sentiment Shifts**: Monitor sentiment indicators (e.g., COT reports) to gauge whether fear or greed is dominating. A shift in sentiment can invalidate existing order blocks and create false breakouts.",
    "context": {
      "keyTerms": [
        {
          "term": "FOMO",
          "definition": "Fear of Missing Out; the anxiety that traders feel when they believe they might miss potential profits."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular market or asset."
        }
      ],
      "whyThisMatters": "Recognizing psychological factors helps traders avoid emotional decision-making that can lead to losses around order blocks.",
      "realLifeExample": "During the EURUSD rally on March 15, 2023, many traders entered long positions at the bullish order block near 1.0500 due to FOMO, resulting in a rapid price reversal when the market corrected.",
      "commonMistake": "Traders often enter positions at order blocks without waiting for confirmation, driven by emotional impulses.",
      "quickNote": "Psychological factors like FOMO and greed can distort decision-making at order blocks.",
      "mentorText": "When you see price approaching an order block, take a moment to assess your emotions. Are you feeling anxious about missing out? That’s a red flag. Always wait for confirmation before entering.",
      "mentorAnalogy": "Think of trading like a surgeon preparing for an operation. Rushing in without proper assessment can lead to critical mistakes. Always evaluate the situation before making a move."
    },
    "taskData": null,
    "visualKey": "ob-entry-boundaries"
  },
  {
    "type": "concept",
    "title": "Adapting Strategies to Market Conditions",
    "label": "Core Track",
    "body": "### Market Conditions Affecting Order Block Validity\nDifferent market conditions can significantly impact the effectiveness of order blocks. Adapting your strategy according to these conditions is crucial for successful trading.\n\n* **Trending vs. Ranging Markets**: In a trending market, order blocks may act as temporary pullbacks, while in a ranging market, they can serve as reversal points. Adjust your entry criteria accordingly.\n* **High Volatility Events**: Major economic announcements can invalidate existing order blocks. For instance, if a bullish order block is formed before a high-impact news release, reassess its validity post-announcement.\n* **Liquidity Considerations**: During low liquidity periods, order blocks may not hold as effectively. Monitor the time of day and market participation to determine the reliability of the order block.",
    "context": {
      "keyTerms": [
        {
          "term": "Trending Market",
          "definition": "A market condition where prices move consistently in one direction."
        },
        {
          "term": "High Volatility Events",
          "definition": "Economic announcements or news releases that can cause significant price fluctuations."
        }
      ],
      "whyThisMatters": "Understanding how market conditions affect order block validity allows traders to refine their strategies and avoid false signals.",
      "realLifeExample": "On June 10, 2023, the USDJPY formed a bearish order block before the NFP report. Post-announcement, the order block was invalidated as volatility surged, leading to a 150-pip move against it.",
      "commonMistake": "Traders often fail to adjust their strategies based on market conditions, leading to losses when order blocks do not hold.",
      "quickNote": "Market conditions dictate the reliability of order blocks; adapt your strategy accordingly.",
      "mentorText": "Always assess the market environment before relying on an order block. If the market is trending or a major news event is approaching, be cautious.",
      "mentorAnalogy": "Like a pilot adjusting flight plans based on weather conditions, you must adapt your trading strategy to the current market landscape."
    },
    "taskData": null,
    "visualKey": "ob-types-debrief"
  },
  {
    "type": "concept",
    "title": "Enhancing Order Block Analysis with Timeframes",
    "label": "Core Track",
    "body": "### Timeframe Analysis for Order Block Trading\nUtilizing multiple timeframes can significantly enhance the analysis of order blocks and improve trade timing. This approach allows for a more comprehensive view of market structure.\n\n* **Higher Timeframe Context**: Always start with a higher timeframe to identify significant order blocks. A bullish order block on the daily chart may provide stronger support than one on the 15-minute chart.\n* **Lower Timeframe Confirmation**: After identifying an order block on a higher timeframe, switch to a lower timeframe for precise entry points. Look for price action signals that confirm the order block's validity.\n* **Timeframe Alignment**: Ensure that the trend on the lower timeframe aligns with the higher timeframe order block. This alignment increases the probability of a successful trade.",
    "context": {
      "keyTerms": [
        {
          "term": "Higher Timeframe",
          "definition": "A longer duration chart (e.g., daily, weekly) used for broader market analysis."
        },
        {
          "term": "Lower Timeframe",
          "definition": "A shorter duration chart (e.g., 15-minute, hourly) used for precise entry and exit points."
        }
      ],
      "whyThisMatters": "Timeframe analysis allows traders to refine their entries and exits, increasing the likelihood of successful trades around order blocks.",
      "realLifeExample": "On July 5, 2023, a bullish order block formed on the daily chart for GBPUSD at 1.2500. A subsequent 1-hour chart showed a bullish engulfing pattern at this level, confirming a strong entry point.",
      "commonMistake": "Traders often rely solely on one timeframe, missing critical context that can lead to poor trade decisions.",
      "quickNote": "Utilize multiple timeframes to enhance order block analysis and improve trade timing.",
      "mentorText": "Always check the higher timeframe before entering a trade. It’s like checking the weather before planning a trip; you need to know the broader conditions.",
      "mentorAnalogy": "Just as an architect reviews blueprints from multiple perspectives to ensure structural integrity, you must analyze order blocks across different timeframes for a robust trading strategy."
    },
    "taskData": null,
    "visualKey": "ob-types-intro"
  },
  {
    "type": "concept",
    "title": "Volume's Role in Order Block Strength",
    "label": "Core Track",
    "body": "### Volume Analysis in Relation to Order Blocks\nVolume analysis is critical in confirming the strength of order blocks and predicting potential price movements. Understanding volume dynamics can enhance trading decisions.\n\n* **Volume Spike Confirmation**: A significant increase in volume at the formation of an order block indicates strong interest and can validate the block's strength. Look for volume spikes that exceed the average during the formation.\n* **Divergence Analysis**: If price approaches an order block with decreasing volume, it may signal weakening interest. Conversely, increasing volume on a breakout from an order block suggests strong momentum.\n* **Volume Profile Assessment**: Use volume profile tools to assess where most trading activity occurs relative to the order block. High volume nodes near the block can indicate stronger support or resistance levels.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Spike",
          "definition": "A sudden increase in trading volume, indicating heightened interest in a particular price level."
        },
        {
          "term": "Volume Profile",
          "definition": "A graphical representation of trading activity over a specified time period at various price levels."
        }
      ],
      "whyThisMatters": "Volume analysis provides insights into the strength of order blocks, allowing traders to make informed decisions about potential price movements.",
      "realLifeExample": "On August 20, 2023, a bullish order block formed on AUDCAD at 0.9000 with a volume spike of 30% above the average. This confirmed the block's strength, leading to a subsequent 100-pip rally.",
      "commonMistake": "Traders often overlook volume analysis, relying solely on price action, which can lead to misinterpretation of order block strength.",
      "quickNote": "Volume analysis is essential for confirming the strength of order blocks and predicting price movements.",
      "mentorText": "Always check the volume when assessing an order block. If the volume is low, be cautious; it may not hold.",
      "mentorAnalogy": "Think of volume like the fuel in an engine; without sufficient fuel, the engine won’t run efficiently. In trading, low volume can signal a lack of conviction behind price movements."
    },
    "taskData": null,
    "visualKey": "ob-bullish-bearish"
  },
  {
    "type": "concept",
    "title": "Practical Scenarios for Order Block Trading",
    "label": "Core Track",
    "body": "### Order Block Trading: Practical Scenarios\nOrder blocks serve as critical zones for potential market reversals and continuations. This card details **how to apply order block concepts in real trading scenarios**.\n\n* **Identifying Bullish Scenarios**: Look for bullish order blocks formed after a significant downtrend, where price retraces to the 50% mean threshold before rallying. For example, if GBPUSD creates a bullish order block at 1.3000 after a drop to 1.2900, monitor for a retracement to 1.2950 to enter long positions.\n* **Recognizing Bearish Scenarios**: Bearish order blocks typically appear after an uptrend. For instance, if USDJPY reaches 110.50 before forming a bearish order block at 110.00, consider entering short when price retraces to the 50% mark at 110.25.\n* **Session Timing**: Execute trades during high-volume sessions, such as the London or New York open, to increase the probability of order block effectiveness. For example, entering a trade based on a bullish order block at 8:00 AM EST during the New York session can yield better results due to increased liquidity.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Block",
          "definition": "A price range where significant buying or selling has occurred, indicating potential future support or resistance."
        },
        {
          "term": "Mean Threshold",
          "definition": "The 50% retracement level of an order block, often used as an entry point."
        }
      ],
      "whyThisMatters": "Understanding practical scenarios enhances decision-making and increases the likelihood of successful trades based on order blocks.",
      "realLifeExample": "On March 15, 2023, EURUSD formed a bullish order block at 1.0800 after a drop from 1.0900, retracing to the mean threshold at 1.0825 before rallying to 1.0900.",
      "commonMistake": "Failing to wait for price to retrace to the mean threshold before entering trades can lead to premature entries and losses.",
      "quickNote": "Utilize the 50% mean threshold of order blocks for optimal entry points.",
      "mentorText": "When you see a bullish order block, wait for the price to pull back to the mean threshold before you enter. This is where the real opportunity lies, not at the top of the block.",
      "mentorAnalogy": "Think of trading order blocks like a surgeon making precise incisions; entering at the right moment ensures success, just as a surgeon must wait for the right conditions to operate."
    },
    "taskData": null,
    "visualKey": "ob-mean-threshold"
  },
  {
    "type": "practice",
    "title": "Summary of Key Concepts in Order Block Trading",
    "label": "Core Track",
    "body": "### Order Block Trading: Key Concepts Summary\nThis card consolidates essential concepts regarding bullish and bearish order blocks, reinforcing their trading implications. \n\n* **Bullish Order Blocks**: Identify these as zones where buying pressure overcomes selling pressure, typically following a downtrend. For example, a bullish order block at 1.2500 on AUDCAD after a drop from 1.2600 indicates potential upward movement.\n* **Bearish Order Blocks**: Recognize these as areas where selling pressure dominates, often following an uptrend. For instance, a bearish order block at 1.3500 on GBPCHF after a rise from 1.3400 signals potential downward movement.\n* **Mean Threshold Calculation**: The mean threshold is calculated by taking the midpoint of the order block range. If a bullish order block spans from 1.2500 to 1.2550, the mean threshold would be 1.2525, serving as a key entry point for trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Bullish Order Block",
          "definition": "A price range indicating potential buying interest, typically formed after a downtrend."
        },
        {
          "term": "Bearish Order Block",
          "definition": "A price range indicating potential selling interest, typically formed after an uptrend."
        }
      ],
      "whyThisMatters": "Reinforcing these concepts solidifies understanding and application in real market conditions, enhancing trading performance.",
      "realLifeExample": "On April 10, 2023, USDCHF formed a bearish order block at 0.9300 after rising from 0.9200, with a mean threshold at 0.9250, leading to a significant price drop.",
      "commonMistake": "Overlooking the importance of the mean threshold can result in missed entry points or poor trade execution.",
      "quickNote": "Master the characteristics of bullish and bearish order blocks for effective trading strategies.",
      "mentorText": "Remember, the mean threshold is your guide. It’s where you want to position yourself for the best chance of success, whether you’re buying or selling.",
      "mentorAnalogy": "Like an architect determining the center of a structure, the mean threshold is where the balance lies, guiding your trading decisions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You identify a bullish order block at 1.3000 on EURUSD after a downtrend. The price retraces to 1.2950. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position at 1.2950.",
          "isCorrect": true,
          "feedback": "Entering at the mean threshold increases the probability of a successful trade."
        },
        {
          "id": "1",
          "text": "Enter a long position at 1.3000.",
          "isCorrect": false,
          "feedback": "Entering at the top of the order block may lead to premature entry before the price retraces."
        },
        {
          "id": "2",
          "text": "Wait for the price to drop further before entering.",
          "isCorrect": false,
          "feedback": "Waiting too long may result in missing the opportunity if the price rebounds."
        },
        {
          "id": "3",
          "text": "Enter a short position at 1.2950.",
          "isCorrect": false,
          "feedback": "This contradicts the bullish order block identified; the expectation is for price to rise."
        }
      ]
    },
    "visualKey": "ob-entry-boundaries"
  },
  {
    "type": "summary",
    "title": "Core Advanced Application of Bullish & Bearish OBs",
    "label": "Core Track",
    "body": "### Advanced Application: Bullish & Bearish Order Blocks\nThis card delves into advanced applications of order block concepts, focusing on edge cases and professional-level nuances. \n\n* **Complex Market Conditions**: In volatile market conditions, such as during major economic releases, order blocks may exhibit false breakouts. For example, if a bullish order block at 1.2000 on AUDUSD is tested during an NFP release, be cautious of potential whipsaws.\n* **Multi-Timeframe Analysis**: Utilize higher timeframes to validate order blocks. A bullish order block on the 4-hour chart may be more reliable if it aligns with a daily bullish trend. For instance, a bullish order block at 1.1500 on the 4-hour chart should be confirmed by a daily close above 1.1400.\n* **Volume Confirmation**: Assess volume spikes at the mean threshold to confirm order block validity. If price retraces to the mean threshold of a bearish order block at 1.3500 on GBPUSD with a volume increase, this reinforces the potential for a downward move.",
    "context": {
      "keyTerms": [
        {
          "term": "False Breakout",
          "definition": "A price movement that temporarily breaches a support or resistance level but fails to hold."
        },
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "A technique that involves analyzing multiple timeframes to confirm trading setups."
        }
      ],
      "whyThisMatters": "Advanced applications enhance the trader's ability to navigate complex market scenarios, improving decision-making and trade outcomes.",
      "realLifeExample": "On May 5, 2023, EURJPY showed a bullish order block at 140.00 during a volatile session, but with a false breakout to 139.80 before rallying back to 141.00, highlighting the need for caution.",
      "commonMistake": "Ignoring volume confirmation can lead to misinterpretation of order block strength and increased risk of losses.",
      "quickNote": "Advanced techniques in order block trading require careful analysis and validation for optimal execution.",
      "mentorText": "Always validate your order blocks with volume and higher timeframe analysis. This is how professionals mitigate risk and enhance their trading edge.",
      "mentorAnalogy": "Like a pilot checking multiple instruments before takeoff, you must confirm your trading signals across various metrics to ensure a safe and successful flight."
    },
    "taskData": null,
    "visualKey": "ob-types-debrief"
  }
];
