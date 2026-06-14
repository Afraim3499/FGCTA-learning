import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Awareness of Structure Traps in Crypto",
    "label": "Crypto Track",
    "body": "### Market Structure: Structure Traps in Crypto\nRecognizing structure traps is essential for accurate market analysis in the volatile crypto environment. This card outlines **how to identify and avoid common pitfalls** that can mislead traders.\n\n* **False Breakouts**: Watch for price movements that breach established swing highs or lows without corresponding volume support. A breakout above $30,000 in BTC without a volume increase may indicate a trap.\n* **Liquidity Gaps**: Identify areas where price moves rapidly with little trading activity, often leading to sudden reversals. For example, ETH dropping from $2,000 to $1,800 with minimal resistance can signal a potential trap.\n* **Market Sentiment Divergence**: Be cautious of bullish sentiment when price fails to make higher highs. If XRP is trending upwards but consistently retraces below $0.50, this divergence may indicate a structural trap.",
    "context": {
      "keyTerms": [
        {
          "term": "Structure Trap",
          "definition": "A misleading market condition where price movements suggest a trend that fails to sustain."
        }
      ],
      "whyThisMatters": "Understanding structure traps prevents traders from making decisions based on false market signals, enhancing overall analysis accuracy.",
      "realLifeExample": "During the BTC rally to $35,000, a sudden drop to $32,000 with low volume led many traders to enter long positions, only to see prices reverse back to $30,000.",
      "commonMistake": "Traders often enter positions based on initial breakouts without confirming volume or structural integrity.",
      "quickNote": "Identify structure traps by analyzing price movements against volume and sentiment.",
      "mentorText": "When you see a breakout, ask yourself: Is there volume backing this move? If not, it’s likely a trap waiting to ensnare you.",
      "mentorAnalogy": "Think of structure traps like a mirage in the desert; they appear enticing but often lead to disappointment if you don't verify their existence."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-structure"
  },
  {
    "type": "concept",
    "title": "Volume Analysis for Structure Confirmation",
    "label": "Crypto Track",
    "body": "### Market Structure: Volume Analysis for Confirmation\nVolume analysis is critical for validating swing highs and lows in the crypto market. This card emphasizes **how to leverage volume data to confirm structural integrity**.\n\n* **Volume Spikes**: A significant increase in volume during a swing high or low confirms the strength of that level. For instance, if LTC surges to $150 with a volume spike of 200% compared to its 14-day average, this reinforces the swing high.\n* **Volume Divergence**: Analyze situations where price makes new highs or lows but volume decreases. If ADA reaches $1.50 but volume drops, this suggests weakening momentum and potential reversal.\n* **Accumulation and Distribution Patterns**: Identify accumulation phases where volume increases as price consolidates before a breakout. For example, if DOT trades sideways around $30 with increasing volume, it indicates accumulation before a potential upward move.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Confirmation",
          "definition": "The process of validating price movements through corresponding trading volume."
        }
      ],
      "whyThisMatters": "Volume analysis provides deeper insights into market dynamics, allowing traders to make informed decisions based on structural strength.",
      "realLifeExample": "During a recent ETH rally to $2,200, a volume increase of 150% confirmed the swing high, leading to a strategic entry point for traders.",
      "commonMistake": "Ignoring volume trends when analyzing price movements can lead to misinterpretation of market strength.",
      "quickNote": "Always assess volume alongside price action to confirm swing highs and lows.",
      "mentorText": "Volume is your ally; it tells you whether the market supports the price action or if it’s just noise. Pay attention to it.",
      "mentorAnalogy": "Consider volume like the engine of a car; without it, the vehicle may move, but it lacks the power to sustain speed or direction."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-structure"
  },
  {
    "type": "practice",
    "title": "Practical Application of Crypto Swing Analysis",
    "label": "Crypto Track",
    "body": "### Market Structure: Practical Application of Swing Analysis\nEngaging in practical exercises reinforces the application of swing analysis techniques in crypto trading. This card provides **real-world scenarios to apply learned concepts**.\n\n* **Scenario Analysis**: Given a chart where BTC swings from $28,000 to $32,000, identify the swing high and low, and analyze the corresponding volume. Determine if the price action is supported by volume.\n* **Trade Simulation**: Create a hypothetical trade plan based on a swing low at $25,000 for ETH, including entry, stop-loss, and take-profit levels. Justify your levels with volume data.\n* **Review Historical Data**: Examine past price movements of XRP around $0.60, identifying swing highs and lows, and assess volume patterns to validate your analysis.",
    "context": {
      "keyTerms": [
        {
          "term": "Swing Analysis",
          "definition": "The process of identifying significant price movements to establish market structure."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge, enabling traders to execute strategies effectively in real market conditions.",
      "realLifeExample": "In a recent exercise, traders analyzed BTC's swing from $30,000 to $35,000, confirming the swing high with a 180% volume increase.",
      "commonMistake": "Failing to apply learned concepts in real scenarios can lead to theoretical knowledge without practical execution.",
      "quickNote": "Practice swing analysis with real data to enhance your trading strategy.",
      "mentorText": "Theoretical knowledge is useless without application. Get your hands dirty with real charts and trade setups.",
      "mentorAnalogy": "Like a pilot practicing in a simulator, you must apply your knowledge in a controlled environment before flying solo in the market."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given the following price movement of BTC from $29,000 to $31,000, what is the swing high and how would you confirm it?",
      "options": [
        {
          "id": "0",
          "text": "Swing high is $31,000, confirmed by a volume increase of 150%.",
          "isCorrect": true,
          "feedback": "Correct. The swing high is validated by the significant volume increase."
        },
        {
          "id": "1",
          "text": "Swing high is $31,000, confirmed by a volume decrease.",
          "isCorrect": false,
          "feedback": "Incorrect. A volume decrease does not confirm the swing high."
        },
        {
          "id": "2",
          "text": "Swing high is $29,000, confirmed by a volume spike.",
          "isCorrect": false,
          "feedback": "Incorrect. The swing high is at $31,000, not $29,000."
        },
        {
          "id": "3",
          "text": "Swing high is $31,000, but volume is irrelevant.",
          "isCorrect": false,
          "feedback": "Incorrect. Volume is crucial for confirming the swing high."
        }
      ]
    },
    "visualKey": "crypto-venue-confirmed-structure"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Market Insights",
    "label": "Crypto Track",
    "body": "### Market Structure: Summary of Insights\nThis card summarizes key insights from the Crypto track, emphasizing the importance of swing analysis in trading. The focus is on **integrating swing analysis into your trading strategy**.\n\n* **Key Takeaways**: Recognizing swing highs and lows is fundamental for establishing market structure. Use volume as a confirmation tool to validate these swings.\n* **Avoiding Traps**: Be vigilant of structure traps that can mislead your analysis. Always cross-check price movements with volume and market sentiment.\n* **Practical Application**: Engage in exercises to solidify your understanding of swing analysis, ensuring you can apply these concepts in real trading scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Structure",
          "definition": "The arrangement of price movements that define trends and reversals."
        }
      ],
      "whyThisMatters": "Summarizing insights helps consolidate knowledge, ensuring traders can effectively apply swing analysis in their strategies.",
      "realLifeExample": "Reviewing the BTC price action from $28,000 to $35,000 illustrates the importance of confirming swings with volume.",
      "commonMistake": "Failing to integrate insights from swing analysis into trading strategies can lead to missed opportunities.",
      "quickNote": "Integrate swing analysis into your trading strategy for enhanced decision-making.",
      "mentorText": "Reflect on what you’ve learned. Swing analysis isn’t just theory; it’s your roadmap to navigating the crypto market.",
      "mentorAnalogy": "Like an architect reviewing blueprints, you must synthesize your insights into a cohesive trading plan."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-structure"
  }
];
