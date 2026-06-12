import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Token Unlock Cascades and Liquidity Voids",
    "label": "Crypto Track",
    "body": "### Token Unlock Dynamics: Cascading Effects on Liquidity Voids\nToken unlock events often lead to sudden shifts in liquidity, creating voids that can significantly impact price movements. Understanding these dynamics is essential for anticipating investor behavior and market reactions.\n\n* **Unlock Timing**: Tokens released during high volatility periods can exacerbate liquidity voids, especially if market sentiment is bearish. For instance, a major DeFi project unlocking 10% of its supply during a market downturn can lead to a rapid price drop.\n* **Market Reaction**: Investors may react to unlock events with panic selling, leading to increased volatility and widening bid-ask spreads. A recent example includes the unlocking of 1 million tokens of a popular altcoin, resulting in a 30% price drop within hours.\n* **Volume Analysis**: Monitor trading volumes before and after unlock events to gauge market sentiment. A spike in sell orders following an unlock can indicate a liquidity void forming, as seen in the case of XYZ token's unlock event last month.",
    "context": {
      "keyTerms": [
        {
          "term": "Token Unlock",
          "definition": "The scheduled release of previously locked tokens into the market."
        },
        {
          "term": "Liquidity Void",
          "definition": "A gap in price levels where little to no trading occurred, often leading to rapid price movements."
        }
      ],
      "whyThisMatters": "Recognizing token unlock cascades allows traders to anticipate potential liquidity voids and adjust their strategies accordingly.",
      "realLifeExample": "During the recent unlock of 1 million ABC tokens, the price dropped from $5.00 to $3.50 in less than an hour, creating a significant liquidity void.",
      "commonMistake": "Failing to account for the timing of token unlocks can lead to unexpected losses during high volatility.",
      "quickNote": "Token unlocks can create significant liquidity voids, impacting price dynamics.",
      "mentorText": "When a major token unlock occurs, be prepared for volatility. Watch for sell-offs that can create voids, and adjust your risk management accordingly.",
      "mentorAnalogy": "Think of a token unlock like a dam breaking; when the pressure is released, the water rushes out, creating a void that can lead to unpredictable flows downstream."
    },
    "taskData": null,
    "visualKey": "crypto-void-unlock"
  },
  {
    "type": "concept",
    "title": "Volume Imbalances in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Identifying Volume Imbalances: Distinguishing from Liquidity Voids\nVolume imbalances indicate discrepancies between buy and sell orders, which can signal potential market movements. Differentiating these from liquidity voids is crucial for effective trading strategies.\n\n* **Volume Spike Analysis**: A sudden increase in trading volume, such as a 200% rise in a 15-minute candle, can indicate an imbalance. For example, if BTC experiences a surge in buy orders while prices remain stable, this suggests underlying bullish sentiment.\n* **Order Book Dynamics**: Analyze the order book for significant buy or sell walls that may indicate an imbalance. If a large sell wall is present at $60,000 for BTC, it may lead to a liquidity void if the price breaks through that level.\n* **Market Sentiment Indicators**: Use sentiment analysis tools to gauge trader psychology during volume imbalances. A spike in negative sentiment alongside high volume can foreshadow a liquidity void, as seen in the recent ETH price drop after a 150% volume increase.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Imbalance",
          "definition": "A situation where buy and sell orders are disproportionately skewed, indicating potential market movement."
        },
        {
          "term": "Order Book",
          "definition": "A real-time list of buy and sell orders for a specific asset."
        }
      ],
      "whyThisMatters": "Identifying volume imbalances helps traders anticipate market movements and avoid being caught in liquidity voids.",
      "realLifeExample": "On March 15, BTC saw a 300% increase in volume at $58,000, leading to a rapid price increase to $62,000, indicating a bullish imbalance.",
      "commonMistake": "Confusing volume spikes with liquidity voids can lead to misinterpretation of market conditions.",
      "quickNote": "Volume imbalances can signal potential price movements distinct from liquidity voids.",
      "mentorText": "Always analyze the volume before making a trade. A sudden spike can indicate a shift in market sentiment that you need to act on quickly.",
      "mentorAnalogy": "Consider volume imbalances like a crowded airport; when too many passengers try to board a flight at once, it creates chaos, much like how imbalances can disrupt market flow."
    },
    "taskData": null,
    "visualKey": "crypto-void-unlock"
  },
  {
    "type": "concept",
    "title": "Reversal Patterns in Crypto Voids",
    "label": "Crypto Track",
    "body": "### Recognizing Reversal Patterns: Navigating Crypto Liquidity Voids\nReversal patterns within liquidity voids can signal potential price reversals, providing critical entry and exit points for traders. Understanding these patterns is essential for effective trading strategies.\n\n* **Key Indicators**: Look for candlestick patterns such as hammers or engulfing candles within a liquidity void. For instance, a hammer pattern forming after a 20% drop in price can indicate a potential reversal.\n* **Volume Confirmation**: Confirm reversal patterns with volume analysis. A reversal accompanied by a significant increase in volume (e.g., 150% above average) strengthens the signal, as seen in the recent reversal of XYZ token after a liquidity void was filled.\n* **Timeframe Considerations**: Analyze multiple timeframes to confirm reversal patterns. A bullish engulfing pattern on the 1-hour chart, confirmed by a similar pattern on the daily chart, can indicate a strong reversal signal.",
    "context": {
      "keyTerms": [
        {
          "term": "Reversal Pattern",
          "definition": "A chart pattern indicating a potential change in the direction of price movement."
        },
        {
          "term": "Candlestick Pattern",
          "definition": "A graphical representation of price movements that can indicate market sentiment."
        }
      ],
      "whyThisMatters": "Recognizing reversal patterns in liquidity voids allows traders to capitalize on price movements before they occur.",
      "realLifeExample": "After a liquidity void formed in the ABC token at $2.00, a bullish engulfing pattern appeared, leading to a price increase to $2.50 within two days.",
      "commonMistake": "Ignoring volume confirmation for reversal patterns can lead to false signals and poor trading decisions.",
      "quickNote": "Reversal patterns within liquidity voids can indicate significant price shifts.",
      "mentorText": "When you spot a reversal pattern in a void, don't rush in. Confirm it with volume and other indicators to ensure you're making an informed decision.",
      "mentorAnalogy": "Think of recognizing reversal patterns like detecting turbulence in an airplane; you need to analyze the conditions before deciding to change altitude."
    },
    "taskData": null,
    "visualKey": "crypto-void-unlock"
  },
  {
    "type": "concept",
    "title": "Analyzing Crypto Liquidity Voids",
    "label": "Crypto Track",
    "body": "### Methods for Analyzing Crypto Liquidity Voids: Technical Tools and Strategies\nEffective analysis of liquidity voids requires a combination of technical tools and market strategies. This card outlines methods to enhance decision-making in volatile conditions.\n\n* **Technical Indicators**: Utilize indicators such as the Relative Strength Index (RSI) and Moving Averages to identify potential entry points within liquidity voids. For example, an RSI reading below 30 in a void may indicate oversold conditions, suggesting a potential reversal.\n* **Chart Patterns**: Look for chart patterns like flags or pennants that may form within liquidity voids. A flag pattern following a significant price drop can indicate a consolidation phase before a potential breakout.\n* **Market Depth Analysis**: Assess market depth to identify areas of support and resistance within liquidity voids. If a significant buy wall appears at a certain price level, it can indicate a potential reversal point, as seen in the recent analysis of DEF token.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Depth",
          "definition": "The measure of supply and demand for an asset at various price levels."
        },
        {
          "term": "Technical Indicators",
          "definition": "Statistical tools used to analyze market data and predict future price movements."
        }
      ],
      "whyThisMatters": "Analyzing liquidity voids with technical tools enhances decision-making and risk management in volatile markets.",
      "realLifeExample": "During the recent analysis of DEF token, a significant buy wall at $1.50 indicated a potential reversal after a liquidity void was identified at $1.30.",
      "commonMistake": "Relying solely on one technical indicator can lead to incomplete analysis and poor trading decisions.",
      "quickNote": "Combining technical tools enhances analysis of liquidity voids for informed trading decisions.",
      "mentorText": "Always use a combination of tools when analyzing liquidity voids. Relying on just one can lead to missed opportunities or unexpected losses.",
      "mentorAnalogy": "Analyzing liquidity voids is like using multiple instruments in surgery; each tool provides critical information that contributes to a successful outcome."
    },
    "taskData": null,
    "visualKey": "crypto-void-unlock"
  },
  {
    "type": "concept",
    "title": "Traps in Crypto Liquidity Voids",
    "label": "Crypto Track",
    "body": "### Crypto Liquidity Voids: Common Traps\nCrypto markets exhibit unique liquidity voids that can mislead traders. This card identifies **common pitfalls associated with liquidity voids**.\n\n* **Misjudging Void Strength**: Traders often underestimate the significance of liquidity voids, leading to premature entries. A void with minimal volume can result in rapid price reversals, as seen when BTC experiences a 15% drop after a 30% void.\n* **False Breakouts**: Breakouts from liquidity voids can be deceptive. For instance, if ETH breaks above a void at $2,500 but fails to hold above this level, it may revert back, causing losses for those who entered on the breakout.\n* **Market Sentiment Misalignment**: Ignoring broader market sentiment can exacerbate risks. A liquidity void may appear bullish, but if the overall market trend is bearish, the void may not hold, leading to significant losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Void",
          "definition": "A price range with minimal trading volume, often leading to rapid price movements."
        }
      ],
      "whyThisMatters": "Understanding traps in liquidity voids helps traders avoid costly mistakes during volatile market conditions.",
      "realLifeExample": "During a recent BTC rally, a liquidity void formed between $35,000 and $36,000. Traders entering at $35,500 faced a swift reversal back to $34,000 as the void failed to hold.",
      "commonMistake": "Traders often enter positions without confirming the strength of the liquidity void, leading to unexpected losses.",
      "quickNote": "Always assess the strength and context of liquidity voids before entering trades.",
      "mentorText": "When you see a liquidity void, don’t just react. Analyze the volume and market sentiment. If the void is weak, it’s a trap waiting to catch you off guard.",
      "mentorAnalogy": "Think of liquidity voids like a bridge with missing planks. Just because you see a path doesn’t mean it’s safe to cross."
    },
    "taskData": null,
    "visualKey": "crypto-void-unlock"
  },
  {
    "type": "concept",
    "title": "Synthesizing Crypto Void Knowledge",
    "label": "Crypto Track",
    "body": "### Integrating Crypto Liquidity Voids with Market Analysis\nSynthesizing knowledge of liquidity voids requires a comprehensive approach. This card focuses on **integrating void analysis with other market indicators**.\n\n* **Multi-Indicator Confirmation**: Use additional indicators like RSI or MACD to confirm void strength. For example, if a void appears at $40,000 for BTC and RSI shows oversold conditions, the void may be stronger than initially perceived.\n* **Volume Analysis**: Assess volume spikes in conjunction with liquidity voids. A void at $45,000 with a subsequent volume increase indicates potential support or resistance, guiding entry or exit strategies.\n* **News Impact Assessment**: Evaluate how news events correlate with liquidity voids. A sudden announcement can fill a void rapidly, as seen when ETH experienced a 20% surge post-merge announcement, filling a void at $3,000.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Indicator Confirmation",
          "definition": "Using multiple technical indicators to validate trading signals."
        }
      ],
      "whyThisMatters": "Synthesis of liquidity voids with broader market analysis enhances decision-making accuracy.",
      "realLifeExample": "When BTC hit a liquidity void at $30,000, an accompanying bullish divergence on the MACD indicated a potential reversal, leading to a successful long position.",
      "commonMistake": "Traders often rely solely on voids without considering other market indicators, leading to misinformed trades.",
      "quickNote": "Always integrate liquidity void analysis with other market signals for informed trading decisions.",
      "mentorText": "Don’t isolate your analysis to just liquidity voids. Combine them with indicators and market context to make well-rounded decisions.",
      "mentorAnalogy": "Just as a pilot checks multiple instruments before takeoff, you must analyze various indicators before entering a trade."
    },
    "taskData": null,
    "visualKey": "crypto-void-unlock"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Crypto Voids",
    "label": "Crypto Track",
    "body": "### Engaging with Crypto Liquidity Voids\nThis card provides practical exercises to reinforce your understanding of liquidity voids. Focus on **real-time analysis and decision-making**.\n\n* **Scenario Analysis**: Review a chart of LTC during a volatile session. Identify liquidity voids and predict potential price movements based on volume and market sentiment.\n* **Trade Simulation**: Create a simulated trade based on a liquidity void identified at $150. Determine entry and exit points, considering potential false breakouts and market conditions.\n* **Reflection Exercise**: After executing a trade based on a liquidity void, analyze the outcome. What indicators supported your decision? What could have been improved?",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Simulation",
          "definition": "A practice exercise where traders simulate trades based on market conditions."
        }
      ],
      "whyThisMatters": "Engaging in practical exercises solidifies understanding and application of liquidity void concepts in real-time situations.",
      "realLifeExample": "In a recent simulation, traders analyzed a void at $200 for XRP, leading to successful trades when combined with volume analysis.",
      "commonMistake": "Failing to simulate trades before real execution can lead to unpreparedness in live markets.",
      "quickNote": "Practice with simulations to enhance your decision-making skills in liquidity void scenarios.",
      "mentorText": "Treat these exercises seriously. They’re your training ground. Analyze, simulate, and learn from each scenario to sharpen your skills.",
      "mentorAnalogy": "Just like a surgeon practices on dummies before the real procedure, you must simulate trades before entering the market."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You identify a liquidity void at $250 for ADA. What should be your first step?",
      "options": [
        {
          "id": "0",
          "text": "Analyze the volume and market sentiment around $250.",
          "isCorrect": true,
          "feedback": "Correct. Analyzing volume and sentiment is crucial for understanding the void's strength."
        },
        {
          "id": "1",
          "text": "Enter a long position immediately.",
          "isCorrect": false,
          "feedback": "Incorrect. Immediate entry without analysis can lead to losses."
        },
        {
          "id": "2",
          "text": "Ignore the void and wait for a breakout.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring the void means missing potential trading opportunities."
        },
        {
          "id": "3",
          "text": "Set a stop-loss without further analysis.",
          "isCorrect": false,
          "feedback": "Incorrect. Setting a stop-loss without understanding the void can lead to unnecessary losses."
        }
      ]
    },
    "visualKey": "crypto-void-unlock"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Liquidity Voids",
    "label": "Crypto Track",
    "body": "### Key Concepts of Crypto Liquidity Voids\nThis card summarizes the essential elements of liquidity voids in the crypto market. Understanding these concepts is vital for effective trading.\n\n* **Impact of Token Unlock Cascades**: Token unlock events can create significant liquidity voids, leading to rapid price adjustments. For example, a major unlock can cause a 30% price drop in a previously stable token.\n* **Volume Imbalances**: Identifying volume imbalances in conjunction with liquidity voids is critical. A void accompanied by high trading volume can indicate strong support or resistance levels.\n* **Market Dynamics**: Recognizing the interplay between liquidity voids and broader market dynamics can enhance trading strategies. For instance, during a market downturn, liquidity voids may signal potential reversal points.",
    "context": {
      "keyTerms": [
        {
          "term": "Token Unlock Cascades",
          "definition": "Events where large amounts of tokens are released into circulation, affecting liquidity."
        }
      ],
      "whyThisMatters": "Summarizing these concepts solidifies understanding and prepares traders for real-world application.",
      "realLifeExample": "After a token unlock event for LINK, a liquidity void formed, leading to a swift price drop from $25 to $20 as traders reacted to the increased supply.",
      "commonMistake": "Traders often overlook the significance of token unlocks when analyzing liquidity voids.",
      "quickNote": "Recognize the relationship between liquidity voids, volume imbalances, and market events.",
      "mentorText": "Reflect on these concepts. They’re not just theory; they’re tools to navigate the crypto market effectively.",
      "mentorAnalogy": "Think of liquidity voids like gaps in a dam. Understanding them helps you predict where the water will flow and how to manage it."
    },
    "taskData": null,
    "visualKey": "crypto-void-unlock"
  }
];
