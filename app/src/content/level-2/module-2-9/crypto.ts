import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Spot-Perp Deviation Analysis",
    "label": "Crypto Track",
    "body": "### Spot-Perp Deviation: Identifying Breakout Validity\nSpot and perpetual contracts often diverge in behavior during breakout scenarios. This card details **how to assess spot-perp deviations to confirm breakout strength**.\n\n* **Deviation Threshold**: A breakout is considered valid only if the perpetual contract price exceeds the spot price by at least 2% with corresponding volume support. Deviations below this threshold indicate potential false breakouts.\n* **Volume Correlation**: Analyze the last 30 minutes of spot volume leading up to the breakout. A minimum of 150% of the average volume is necessary to validate the breakout.\n* **Price Action Confirmation**: Monitor the price action in the 5-minute timeframe post-breakout. A retracement back below the breakout level within 10 minutes suggests a failed break.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Spot-Perp Deviation",
          "definition": "The difference in price between spot and perpetual contracts during breakout scenarios."
        }
      ],
      "whyThisMatters": "Understanding spot-perp deviations is crucial for discerning genuine breakouts from deceptive price movements, enhancing risk management strategies.",
      "realLifeExample": "On October 15, 2023, BTC perpetual contracts surged to $30,500 while spot prices remained at $30,000, with volume only at 120% of average, indicating a potential false breakout.",
      "commonMistake": "Traders often assume a breakout is valid based solely on price movement without confirming volume support.",
      "quickNote": "A valid breakout requires a 2% perp price increase over spot with strong volume backing.",
      "mentorText": "When assessing breakouts, always check if the perpetual contracts are supported by spot volume. If not, you might be looking at a mirage.",
      "mentorAnalogy": "Think of this like a pilot needing both altitude and speed to confirm a safe takeoff. Without both, the flight may not be successful."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-deviations"
  },
  {
    "type": "concept",
    "title": "Volume Analysis in Crypto Breakouts",
    "label": "Crypto Track",
    "body": "### Volume Trends: Validating Breakouts\nVolume analysis is critical in determining the authenticity of breakouts in cryptocurrency markets. This card covers **how to evaluate volume trends alongside price movements**.\n\n* **Spot vs. Perpetual Volume**: A valid breakout occurs when spot volume exceeds 200% of its 14-day average while the perpetual volume also increases by at least 150%. This indicates strong market interest.\n* **Volume Divergence**: Identify instances where price breaks a resistance level, but volume decreases. A decrease in volume during a breakout often signals a lack of conviction and potential reversal.\n* **Post-Breakout Volume**: After a breakout, monitor volume for at least 15 minutes. Sustained volume above the average indicates that the breakout is likely to hold, while a drop suggests a possible failure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Divergence",
          "definition": "A situation where price moves in one direction while volume trends in the opposite direction."
        }
      ],
      "whyThisMatters": "Volume trends provide essential insights into market sentiment, helping traders avoid entering positions on false breakouts.",
      "realLifeExample": "During the ETH breakout on September 20, 2023, price surged to $2,000 with spot volume at 250% of average, confirming the breakout's validity.",
      "commonMistake": "Many traders overlook volume analysis, assuming price movements alone indicate breakout strength.",
      "quickNote": "A breakout is only valid if both spot and perpetual volumes show significant increases.",
      "mentorText": "Always pair your price analysis with volume checks. If the volume isn't there, the breakout might just be noise.",
      "mentorAnalogy": "Consider a concert: if the crowd is cheering (volume), the performance (price) is likely genuine. If the crowd is silent, it’s probably not worth your attention."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-deviations"
  },
  {
    "type": "concept",
    "title": "Identifying Deviation Signals",
    "label": "Crypto Track",
    "body": "### Deviation Signals: Recognizing False Breakouts\nDeviation signals can indicate potential failed breaks in cryptocurrency markets. This card focuses on **how to spot these signals effectively**.\n\n* **Price Action Patterns**: Watch for candlestick patterns such as pin bars or dojis immediately following a breakout. These patterns often signal indecision and can precede a reversal.\n* **Volume Anomalies**: A significant increase in volume during a breakout followed by a rapid decline within 10 minutes can indicate a false breakout. This suggests that traders are exiting positions quickly.\n* **Support and Resistance Reactions**: If the price breaks a key resistance level but fails to hold above it, and subsequently retests the level with lower volume, this is a strong indication of a failed breakout.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Pin Bar",
          "definition": "A candlestick pattern indicating potential reversal, characterized by a small body and long wick."
        }
      ],
      "whyThisMatters": "Recognizing deviation signals enables traders to avoid costly mistakes associated with entering positions on false breakouts.",
      "realLifeExample": "On November 5, 2023, XRP broke above $0.75 with a pin bar forming shortly after, followed by a volume drop, indicating a likely failed breakout as it retraced to $0.70.",
      "commonMistake": "Traders often ignore candlestick patterns and volume trends, leading to premature entries on breakouts.",
      "quickNote": "Look for candlestick patterns and volume drops to identify potential failed breakouts.",
      "mentorText": "If you see a pin bar after a breakout, take a step back. It’s often a sign that the market is reconsidering its move.",
      "mentorAnalogy": "This is like a surgeon observing vital signs during an operation. A sudden drop in heart rate may indicate complications that require immediate attention."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-deviations"
  },
  {
    "type": "concept",
    "title": "Candle Close Analysis for Crypto",
    "label": "Crypto Track",
    "body": "### Candle Close Analysis: Validating Breakouts\nCandle close analysis is essential for differentiating between genuine breakouts and deceptive sweeps. This card explains **how to interpret candle closes effectively**.\n\n* **Closing Above Resistance**: A valid breakout is confirmed when the candle closes above a resistance level with a body at least 1% above the level. This indicates strong buying pressure.\n* **Volume at Close**: Ensure that the closing candle has volume at least 120% of the average for the last 10 candles. This volume confirmation supports the breakout's legitimacy.\n* **Follow-Up Candles**: Monitor the next two candles after the breakout. If they close above the breakout level with increasing volume, it confirms the strength of the breakout; otherwise, reconsider your position.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Close",
          "definition": "The final price of an asset at the end of a specified time period, crucial for breakout validation."
        }
      ],
      "whyThisMatters": "Candle close analysis provides critical insights into market sentiment and helps traders avoid entering on false breakouts.",
      "realLifeExample": "On December 10, 2023, LTC closed at $150 with a body 2% above resistance and volume 130% of average, confirming the breakout's validity.",
      "commonMistake": "Traders often enter positions based solely on price movement without waiting for a confirmed candle close.",
      "quickNote": "A breakout is confirmed by a candle closing above resistance with strong volume.",
      "mentorText": "Never jump in on a breakout until you see that candle close. It’s the market’s way of telling you it’s serious.",
      "mentorAnalogy": "Think of this like a race finish line. Only when the runner crosses and the timer stops can you confirm the race is over."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-deviations"
  },
  {
    "type": "concept",
    "title": "Market Structure Dynamics in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Understanding Market Structure in Crypto\nMarket structure defines the underlying framework of price movements in crypto assets. This card details **how to assess market structure to differentiate between valid breakouts and failed breaks**.\n\n* **Trend Identification**: Analyze higher highs and higher lows in bullish trends or lower highs and lower lows in bearish trends to establish the prevailing market direction.\n* **Support and Resistance Levels**: Identify key horizontal levels where price has historically reversed; breakouts above resistance or below support need to be validated by subsequent price action.\n* **Volume Confirmation**: Evaluate volume spikes accompanying breakouts; a valid breakout typically shows increased volume, while failed breaks often occur with low volume or divergence.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Structure",
          "definition": "The arrangement of price movements that indicates the prevailing trend and key levels."
        }
      ],
      "whyThisMatters": "Understanding market structure is essential for accurately assessing breakout validity and avoiding false signals.",
      "realLifeExample": "On March 15, 2023, Bitcoin broke above $25,000 with a volume increase of 30%, confirming a bullish breakout, while a subsequent drop below $24,500 on low volume indicated a failed break.",
      "commonMistake": "Many traders overlook the importance of volume and market structure, leading to premature entries on breakouts.",
      "quickNote": "Valid breakouts require strong volume and clear market structure.",
      "mentorText": "When assessing breakouts, always check the trend and volume. A breakout without volume is like a plane taking off without enough thrust; it won't sustain altitude.",
      "mentorAnalogy": "Think of market structure like the foundation of a building; without a solid base, the structure is prone to collapse."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-deviations"
  },
  {
    "type": "concept",
    "title": "Risk Mitigation Strategies for Crypto Breakouts",
    "label": "Crypto Track",
    "body": "### Risk Management in Crypto Breakouts\nEffective risk management is crucial when trading breakouts in the volatile crypto market. This card outlines **specific techniques to minimize losses during potential failed breaks**.\n\n* **Position Sizing**: Determine position size based on a fixed percentage of your trading capital, ensuring that no single trade can significantly impact your overall portfolio.\n* **Stop-Loss Placement**: Set stop-loss orders just below key support levels for long positions or above resistance for short positions to limit potential losses in case of a failed breakout.\n* **Trailing Stops**: Utilize trailing stops to lock in profits as the price moves favorably, allowing for exit before a reversal occurs while still giving room for price fluctuations.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The method of determining the amount of capital to allocate to a specific trade."
        }
      ],
      "whyThisMatters": "Implementing robust risk management techniques protects capital and enhances long-term trading viability in crypto markets.",
      "realLifeExample": "If Ethereum breaks above $1,800, placing a stop-loss at $1,750 can protect against a potential drop back below the breakout point.",
      "commonMistake": "Traders often neglect to adjust their stop-loss orders after a breakout, exposing themselves to larger losses.",
      "quickNote": "Always implement risk management strategies to safeguard against failed breakouts.",
      "mentorText": "You must have a plan for every trade. If the market moves against you, your stop-loss is your safety net. Don’t gamble with your capital.",
      "mentorAnalogy": "Risk management in trading is like wearing a seatbelt in a car; it won't prevent accidents, but it will protect you in case of one."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-deviations"
  },
  {
    "type": "practice",
    "title": "Evaluating Breakout Scenarios in Crypto",
    "label": "Crypto Track",
    "body": "### Crypto Breakout Practice Scenarios\nEngaging with practical scenarios enhances your ability to evaluate breakout quality in crypto trading. This card provides **realistic situations to test your skills in identifying valid breakouts versus failed breaks**.\n\n* **Scenario Analysis**: Review a chart where Litecoin breaks above $100 with a volume increase of 20%. Assess whether the breakout is valid based on subsequent price action.\n* **Volume Assessment**: Consider a situation where Cardano breaks above $0.50 but volume decreases by 15% immediately after. Determine if this indicates a potential failed breakout.\n* **Support Retests**: Analyze a case where Solana breaks below $30 and then retests this level with low volume. Identify whether this behavior suggests a failed break or a continuation pattern.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Assessment",
          "definition": "The process of evaluating trading volume to confirm the strength of price movements."
        }
      ],
      "whyThisMatters": "Practicing with real scenarios sharpens your analytical skills, enabling you to make informed trading decisions.",
      "realLifeExample": "If you observe Ripple breaking above $0.75 with a subsequent drop in volume and price retracing to $0.70, this may indicate a failed breakout.",
      "commonMistake": "Failing to consider volume trends can lead to misjudging the strength of a breakout.",
      "quickNote": "Evaluate both price action and volume to determine breakout validity.",
      "mentorText": "In trading, always ask yourself: does the volume support the price movement? If not, you might be looking at a false breakout.",
      "mentorAnalogy": "Evaluating breakouts is like checking the weather before a flight; you need to ensure conditions are right for a safe takeoff."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Litecoin breaks above $100 with a volume increase of 20%. What should you assess next?",
      "options": [
        {
          "id": "0",
          "text": "Look for a retest of the breakout level with increasing volume.",
          "isCorrect": true,
          "feedback": "A retest with increasing volume supports the validity of the breakout."
        },
        {
          "id": "1",
          "text": "Immediately enter a long position without further analysis.",
          "isCorrect": false,
          "feedback": "Entering without assessing further conditions can lead to losses if the breakout fails."
        },
        {
          "id": "2",
          "text": "Ignore the breakout and wait for a pullback.",
          "isCorrect": false,
          "feedback": "Ignoring the breakout could mean missing a valid opportunity if the breakout is confirmed."
        },
        {
          "id": "3",
          "text": "Check for news events that could impact price.",
          "isCorrect": false,
          "feedback": "While news can affect price, the immediate focus should be on volume and price action."
        }
      ]
    },
    "visualKey": "crypto-spot-perp-deviations"
  },
  {
    "type": "summary",
    "title": "Key Takeaways from the Crypto Track",
    "label": "Crypto Track",
    "body": "### Crypto Track Summary\nThis summary consolidates essential concepts regarding breakout evaluation in crypto trading. Key points include **the importance of market structure, risk management, and practical evaluation techniques**.\n\n* **Market Structure Analysis**: Recognizing the market structure is vital for distinguishing between valid breakouts and failed breaks, focusing on trend direction and key levels.\n* **Effective Risk Management**: Implementing position sizing, stop-loss orders, and trailing stops is crucial to mitigate risks associated with breakout trading.\n* **Practical Evaluation**: Engaging in scenario analysis enhances your ability to assess breakout validity based on volume and price action dynamics.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout Evaluation",
          "definition": "The process of analyzing price movements to determine the validity of a breakout."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces your understanding and application of breakout strategies in crypto trading.",
      "realLifeExample": "Reviewing past breakouts in Bitcoin and Ethereum can illustrate how these principles apply in real market conditions.",
      "commonMistake": "Traders often fail to integrate all aspects of breakout evaluation, leading to inconsistent results.",
      "quickNote": "Integrate market structure, risk management, and practical evaluation for successful breakout trading.",
      "mentorText": "Remember, a comprehensive approach to breakouts will enhance your trading success. Don’t just focus on one aspect; consider the whole picture.",
      "mentorAnalogy": "Summarizing your trading knowledge is like reviewing a flight plan before takeoff; it ensures you’re prepared for the journey ahead."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-deviations"
  }
];
