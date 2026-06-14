import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Market Reactions at Session Extremes",
    "label": "Forex Track",
    "body": "### Liquidity Dynamics: Market Reactions at Session Extremes\nMarket behavior often shifts dramatically when price nears session extremes, which are critical points for liquidity mapping. Understanding these reactions is essential for effective trading strategies.\n\n* **Order Clustering**: As price approaches session highs or lows, liquidity clusters form due to resting orders. This often leads to increased volatility, with potential reversals or breakouts occurring around these levels.\n* **Psychological Barriers**: Traders often place buy and sell orders at these extremes, creating psychological barriers. Recognizing these can help in predicting potential price reactions and planning entry or exit strategies.\n* **Volume Analysis**: Monitor volume spikes as price approaches session extremes. A significant increase in volume can indicate strong interest and potential price movement, signaling where liquidity is concentrated.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Session Extremes",
          "definition": "The highest and lowest price points reached during a specific trading session."
        }
      ],
      "whyThisMatters": "Understanding market reactions at session extremes allows traders to anticipate price movements and adjust their strategies accordingly.",
      "realLifeExample": "On EURUSD, when the price approached 1.2000 at 3:00 PM EST, a cluster of sell orders emerged, causing a 50-pip reversal within 15 minutes.",
      "commonMistake": "Failing to account for the increased volatility and potential reversals when price nears session extremes.",
      "quickNote": "Session extremes serve as critical points for liquidity and market reaction.",
      "mentorText": "When price approaches session extremes, think of it as a crowded room. The more traders are gathered, the more likely a sudden shift will occur. Be prepared to act quickly.",
      "mentorAnalogy": "Navigating session extremes is like a pilot approaching a runway. As they near the landing zone, they must be ready for sudden changes in wind patterns that can affect their approach."
    },
    "taskData": null,
    "visualKey": "forex-session-extremes-liquidity"
  },
  {
    "type": "concept",
    "title": "Breakouts and Failures at Session Boundaries",
    "label": "Forex Track",
    "body": "### Liquidity Traps: Breakouts and Failures at Session Boundaries\nBreakouts and failures at session boundaries are critical moments that can signify liquidity traps. This card outlines how to identify these dynamics to enhance trading decisions.\n\n* **Breakout Confirmation**: A breakout occurs when price moves beyond a session extreme with strong volume. Confirm breakouts by ensuring volume exceeds the 20-period average to validate the move.\n* **Failure Patterns**: Watch for false breakouts where price quickly returns within the session range. This often indicates a liquidity trap, where traders are caught on the wrong side of the market.\n* **Order Flow Analysis**: Analyze order flow during breakouts. A lack of follow-through buying or selling can signal a potential reversal, indicating that liquidity is not supporting the breakout.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout",
          "definition": "A price movement that exceeds a defined support or resistance level."
        },
        {
          "term": "Liquidity Trap",
          "definition": "A situation where price fails to sustain a breakout, trapping traders in losing positions."
        }
      ],
      "whyThisMatters": "Identifying breakouts and failures at session boundaries helps traders avoid liquidity traps and refine their entry and exit strategies.",
      "realLifeExample": "During the London session, GBPUSD broke above 1.3500 with a volume spike, only to retrace back below within 10 minutes, trapping buyers in a liquidity trap.",
      "commonMistake": "Assuming all breakouts will lead to sustained moves without confirming volume or order flow.",
      "quickNote": "Breakouts require confirmation; otherwise, they may lead to liquidity traps.",
      "mentorText": "When you see a breakout, don’t just jump in. Confirm it with volume. If it fails, you could be stepping into a trap.",
      "mentorAnalogy": "Think of a breakout as a car speeding through a green light. If it accelerates without traffic, it’s a go. If it suddenly hits the brakes, that’s a sign of trouble ahead."
    },
    "taskData": null,
    "visualKey": "forex-session-extremes-liquidity"
  },
  {
    "type": "practice",
    "title": "Practical Application of Forex Liquidity Mapping",
    "label": "Forex Track",
    "body": "### Exercise: Practical Application of Forex Liquidity Mapping\nEngage in practical exercises to apply liquidity mapping concepts learned throughout the module. This card provides scenarios to practice identifying PDH/PDL.\n\n* **Scenario Analysis**: Review the following market conditions and identify the potential PDH (Previous Day High) and PDL (Previous Day Low) for EURUSD during the Asian session. Use historical data to determine where liquidity clusters formed.\n* **Order Placement**: Based on your analysis, decide where to place limit orders relative to PDH and PDL. Consider the implications of session extremes on your strategy.\n* **Risk Management**: Calculate the risk-to-reward ratio for trades placed around these levels. Ensure that your risk management aligns with the identified liquidity zones.\n",
    "context": {
      "keyTerms": [
        {
          "term": "PDH",
          "definition": "The highest price level reached during the previous trading day."
        },
        {
          "term": "PDL",
          "definition": "The lowest price level reached during the previous trading day."
        }
      ],
      "whyThisMatters": "Practical application of liquidity mapping enhances decision-making and trade execution in real market conditions.",
      "realLifeExample": "Analyze the EURUSD chart from the previous day, identifying PDH at 1.2100 and PDL at 1.2050, and place hypothetical orders based on these levels.",
      "commonMistake": "Neglecting to incorporate historical price action when identifying PDH and PDL, leading to poor trade placement.",
      "quickNote": "Apply liquidity mapping concepts to real market scenarios for effective trading.",
      "mentorText": "When you analyze the market, treat it like a puzzle. Each piece, like PDH and PDL, helps you see the bigger picture for your trades.",
      "mentorAnalogy": "Mapping liquidity is akin to a surgeon preparing for an operation. Each step must be precise, with a clear understanding of where the critical points are located."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given the following market conditions, where should you place a limit order based on PDH and PDL?",
      "options": [
        {
          "id": "0",
          "text": "Place a buy limit order at 1.2100 (PDH)",
          "isCorrect": true,
          "feedback": "Placing a buy limit at PDH anticipates a potential reversal or breakout."
        },
        {
          "id": "1",
          "text": "Place a sell limit order at 1.2050 (PDL)",
          "isCorrect": false,
          "feedback": "Selling at PDL may not align with the expected market reaction; consider the overall trend."
        },
        {
          "id": "2",
          "text": "Place a market order at 1.2075",
          "isCorrect": false,
          "feedback": "Market orders do not utilize the strategic advantages of liquidity mapping."
        },
        {
          "id": "3",
          "text": "Place a buy limit order at 1.2050 (PDL)",
          "isCorrect": false,
          "feedback": "Buying at PDL without confirmation may lead to entering a liquidity trap."
        }
      ]
    },
    "visualKey": "forex-session-extremes-liquidity"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Liquidity Mapping Concepts",
    "label": "Forex Track",
    "body": "### Consolidation: Summary of Forex Liquidity Mapping Concepts\nThis card consolidates the key concepts covered in the Forex liquidity mapping section, emphasizing the importance of session extremes and PDH/PDL in trading strategies.\n\n* **Session Extremes**: Recognizing session highs and lows is crucial for identifying potential liquidity clusters and market reactions.\n* **Breakout Dynamics**: Understanding the mechanics of breakouts and failures at session boundaries aids in avoiding liquidity traps and refining entry strategies.\n* **Practical Application**: Applying liquidity mapping concepts in real market scenarios enhances decision-making and trade execution.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Mapping",
          "definition": "The process of identifying where resting orders are likely to be located in the market."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of liquidity mapping is essential for developing robust trading strategies.",
      "realLifeExample": "Traders who effectively mapped liquidity zones in GBPUSD during the previous week capitalized on significant price movements around PDH and PDL.",
      "commonMistake": "Overlooking the significance of session extremes when planning trades can lead to missed opportunities.",
      "quickNote": "Liquidity mapping is foundational for strategic trading in Forex.",
      "mentorText": "Review your notes on liquidity mapping regularly. The more familiar you are with these concepts, the better your trading decisions will be.",
      "mentorAnalogy": "Think of liquidity mapping as a GPS for trading. It guides you through the market landscape, helping you navigate to profitable opportunities."
    },
    "taskData": null,
    "visualKey": "forex-session-extremes-liquidity"
  }
];
