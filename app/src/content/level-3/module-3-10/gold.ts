import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "US CPI Prints and Gold Liquidity Voids",
    "label": "Gold Track",
    "body": "### US CPI Impact: Gold Liquidity Voids\nUS CPI releases often create significant liquidity voids in the gold market, directly influencing price dynamics. Understanding this relationship is essential for effective trading strategies.\n\n* **CPI Release Timing**: Gold typically experiences heightened volatility immediately following the US CPI release at 8:30 AM EST, often leading to rapid price movements and liquidity gaps.\n* **Inflation Correlation**: A higher-than-expected CPI print can trigger a rush to gold as a hedge against inflation, resulting in a liquidity void if buy orders exceed available sell orders.\n* **Gap Analysis**: Post-CPI, analyze the price action for gaps greater than 1% to identify potential voids that may require filling during subsequent sessions.",
    "visualKey": "gold-void-cpi",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Gold Void Fills Under Yield Accelerations",
    "label": "Gold Track",
    "body": "### Yield Accelerations: Gold Void Fills\nYield accelerations significantly impact gold void fills, as changing interest rates alter investor sentiment and market dynamics. Recognizing these effects is crucial for anticipating price movements.\n\n* **Interest Rate Sensitivity**: Gold prices typically decline when yields rise, creating voids as sellers dominate the market. Monitor the 10-year Treasury yield for directional cues.\n* **Acceleration Measurement**: A yield increase of 25 basis points within a single trading session can lead to a liquidity void in gold, necessitating a fill as traders adjust positions.\n* **Market Reaction Timing**: Observe the first hour post-yield announcement for potential void fills, as price often retraces to previous support or resistance levels.",
    "visualKey": "gold-void-cpi",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Volume Imbalances in Gold Trading",
    "label": "Gold Track",
    "body": "### Volume Imbalances: Distinguishing Rate Voids\nVolume imbalances in gold trading can indicate market sentiment shifts, distinct from rate voids caused by economic announcements. Understanding these imbalances is vital for strategic positioning.\n\n* **Volume Spike Analysis**: Identify volume spikes exceeding 150% of the average daily volume during key trading hours, indicating potential imbalances that may lead to price adjustments.\n* **Order Flow Dynamics**: A sudden influx of buy orders during a downtrend can create a volume imbalance, suggesting a potential reversal point rather than a simple rate void.\n* **Session-Specific Patterns**: Analyze volume behavior during the London session, as imbalances often manifest here before the US market opens, providing early signals for potential trades.",
    "visualKey": "gold-void-cpi",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Reversal Patterns in Gold Voids",
    "label": "Gold Track",
    "body": "### Identifying Reversal Patterns in Gold Voids\nRecognizing reversal patterns within gold liquidity voids is essential for traders aiming to capitalize on price corrections. This skill enhances entry and exit strategies in volatile markets.\n\n* **Key Indicators**: Look for candlestick patterns such as hammers or engulfing formations within liquidity voids, signaling potential reversals in price direction.\n* **Volume Confirmation**: A reversal pattern accompanied by a volume increase of at least 100% compared to the previous session strengthens the validity of the signal.\n* **Support and Resistance Levels**: Identify significant support or resistance levels near the void to confirm reversal patterns, as these areas often dictate trader behavior.",
    "visualKey": "gold-void-cpi",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Analyzing Gold Liquidity Voids",
    "label": "Gold Track",
    "body": "### Gold Liquidity Voids: Analytical Framework\nLiquidity voids in gold markets manifest during periods of low trading volume or significant news events. This card focuses on **how to analyze these voids using price action and volume data**.\n\n* **Volume Profile Analysis**: Identify liquidity voids by examining volume profiles; a drop in volume below 50% of the average during key price levels indicates potential voids.\n* **Price Action Signals**: Look for price action patterns such as pin bars or engulfing candles that form at the edges of liquidity voids, signaling potential reversals.\n* **Timeframe Correlation**: Use multiple timeframes to confirm liquidity voids; a void on a daily chart should be validated by similar patterns on the hourly or 15-minute charts for higher accuracy.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Void",
          "definition": "A price range with minimal trading activity, often leading to rapid price movements."
        }
      ],
      "whyThisMatters": "Understanding liquidity voids allows traders to anticipate price movements and avoid traps associated with low-volume conditions.",
      "realLifeExample": "On September 13, 2023, gold prices gapped down from $1,950 to $1,930 following a low-volume Asian session, marking a liquidity void that was filled within two hours during the London session.",
      "commonMistake": "Traders often misinterpret a liquidity void as a strong trend signal without confirming volume or price action.",
      "quickNote": "Analyze volume profiles to identify potential liquidity voids in gold trading.",
      "mentorText": "When you see a drop in volume, pay attention. It’s a sign that the market is not fully engaged, and that creates opportunities for sharp moves.",
      "mentorAnalogy": "Think of liquidity voids like gaps in a runway; when an aircraft encounters a gap, it can either stall or take off unexpectedly, depending on the surrounding conditions."
    },
    "taskData": null,
    "visualKey": "gold-void-cpi"
  },
  {
    "type": "concept",
    "title": "Traps in Gold Liquidity Voids",
    "label": "Gold Track",
    "body": "### Gold Liquidity Voids: Common Traps\nNavigating liquidity voids in gold can lead to significant pitfalls if traders misinterpret market signals. This card addresses **the common traps and how to avoid them**.\n\n* **False Breakouts**: Be cautious of price movements that break out of a liquidity void; often, these are false signals that revert quickly, leading to losses.\n* **Overreliance on Indicators**: Relying solely on technical indicators during low-volume conditions can mislead traders; always validate with price action and volume context.\n* **Ignoring Economic Data**: Major economic releases, such as US CPI, can create sudden liquidity voids. Traders must account for these events to avoid being caught in volatile price swings.",
    "context": {
      "keyTerms": [
        {
          "term": "False Breakout",
          "definition": "A price movement that breaks a key level but quickly reverses, misleading traders."
        }
      ],
      "whyThisMatters": "Recognizing traps in liquidity voids helps traders make informed decisions and avoid unnecessary losses.",
      "realLifeExample": "On October 5, 2023, gold spiked above $1,940 but quickly reversed back to $1,925 within minutes after the US jobs report, illustrating a false breakout in a liquidity void.",
      "commonMistake": "Traders often enter positions too quickly after a breakout from a liquidity void without confirming the strength of the move.",
      "quickNote": "Stay vigilant for false breakouts when trading in liquidity voids.",
      "mentorText": "Don’t rush into trades just because a price breaks a level. Wait for confirmation; otherwise, you risk falling into a trap.",
      "mentorAnalogy": "Navigating liquidity voids is like crossing a foggy bridge; you must proceed with caution and clarity, or you risk falling into unseen gaps."
    },
    "taskData": null,
    "visualKey": "gold-void-cpi"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Gold Voids",
    "label": "Gold Track",
    "body": "### Gold Liquidity Voids: Practical Application\nEngage in practical exercises to solidify your understanding of liquidity voids in gold trading. This card focuses on **applying analytical skills to real market scenarios**.\n\n* **Identify a Recent Void**: Analyze the last two weeks of gold price action to identify at least one liquidity void and note the volume characteristics.\n* **Simulate Trade Entry**: Based on your analysis, simulate a trade entry at the edge of the identified void, considering risk management and potential targets.\n* **Review Economic Calendar**: Cross-reference your identified voids with recent economic data releases to understand the context of price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "Strategies to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce theoretical knowledge, enhancing your ability to identify and trade liquidity voids effectively.",
      "realLifeExample": "During the CPI release on October 13, 2023, gold displayed a liquidity void that traders could have identified and used for a strategic entry.",
      "commonMistake": "Failing to simulate trades based on historical data can lead to a lack of preparedness in real market conditions.",
      "quickNote": "Practice identifying liquidity voids and simulating trades to enhance your trading skills.",
      "mentorText": "Put your analysis to the test. Identify a void, simulate a trade, and learn from the outcomes. This is how you build real trading skills.",
      "mentorAnalogy": "Practicing with liquidity voids is like a pilot training in a simulator; it prepares you for real conditions without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You identify a liquidity void in gold at $1,920 after a CPI report. What should be your next step?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position immediately.",
          "isCorrect": false,
          "feedback": "Entering immediately without confirmation can lead to losses if the price reverses."
        },
        {
          "id": "1",
          "text": "Wait for a confirmation candle to form before entering.",
          "isCorrect": true,
          "feedback": "Waiting for confirmation helps validate the strength of the move and reduces risk."
        },
        {
          "id": "2",
          "text": "Ignore the void and focus on other instruments.",
          "isCorrect": false,
          "feedback": "Ignoring the void means missing potential trading opportunities."
        },
        {
          "id": "3",
          "text": "Set a limit order at $1,910 to catch a reversal.",
          "isCorrect": false,
          "feedback": "Setting a limit order without understanding market context can lead to being filled at unfavorable prices."
        }
      ]
    },
    "visualKey": "gold-void-cpi"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Liquidity Voids",
    "label": "Gold Track",
    "body": "### Gold Liquidity Voids: Key Insights\nThis card summarizes the essential insights regarding liquidity voids in the gold market, particularly focusing on the impact of economic data. Understanding these voids is critical for informed trading decisions.\n\n* **Impact of Economic Releases**: Major economic indicators, such as US CPI, can create significant liquidity voids, leading to rapid price movements that traders must navigate carefully.\n* **Volume and Price Action Correlation**: Analyzing the relationship between volume and price action is vital in identifying and trading liquidity voids effectively.\n* **Risk Management Strategies**: Implementing robust risk management strategies is essential when trading in environments characterized by liquidity voids to mitigate potential losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Indicator",
          "definition": "A statistic about economic activity that can influence market conditions."
        }
      ],
      "whyThisMatters": "Summarizing key insights helps reinforce the understanding of liquidity voids and their implications for trading strategies.",
      "realLifeExample": "Following the US CPI release on October 13, 2023, gold experienced a liquidity void that traders who understood the implications could exploit for profit.",
      "commonMistake": "Traders often overlook the significance of economic releases when analyzing liquidity voids, leading to poor decision-making.",
      "quickNote": "Recognize the influence of economic data on liquidity voids in gold trading.",
      "mentorText": "Keep these insights in mind as you trade. Economic data can change everything; be prepared to adapt your strategy accordingly.",
      "mentorAnalogy": "Understanding liquidity voids is like a navigator reading weather patterns; it’s essential for plotting a safe and profitable course."
    },
    "taskData": null,
    "visualKey": "gold-void-cpi"
  }
];
