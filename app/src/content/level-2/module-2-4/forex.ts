import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Identifying Structure Shifts Across Sessions",
    "label": "Forex Track",
    "body": "### Market Structure: Identifying Structure Shifts Across Sessions\nMarket structure shifts can occur at the opening and closing of trading sessions, significantly impacting price action. This card focuses on **how to identify these shifts and their implications for trading strategies**.\n\n* **Session Overlap Analysis**: Pay attention to the overlap between the London and New York sessions, as this period often sees increased volatility and clearer structure shifts. Look for significant price movements that break previous swing highs or lows during this overlap.\n* **Session Close Dynamics**: The last hour of a trading session can reveal shifts in market sentiment. If a swing high is established just before session close, it may indicate a potential reversal or continuation pattern for the next session.\n* **Timeframe Alignment**: Utilize multiple timeframes to confirm structure shifts. For instance, a shift on the hourly chart should be corroborated by a similar signal on the daily chart to validate the strength of the change in market structure.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two major trading sessions coincide, typically leading to increased market activity."
        },
        {
          "term": "Session Close",
          "definition": "The final hour of a trading session, often critical for determining market sentiment."
        },
        {
          "term": "Timeframe Alignment",
          "definition": "The practice of confirming signals across different timeframes to enhance trading accuracy."
        }
      ],
      "whyThisMatters": "Understanding session shifts allows traders to capitalize on volatility and adjust their strategies accordingly.",
      "realLifeExample": "On a Wednesday at 8:00 AM EST, the EURUSD breaks a swing low of 1.1000 during the London session overlap with New York, indicating a potential bearish trend for the day.",
      "commonMistake": "Failing to recognize that significant price movements during session overlaps can lead to false breakouts if not confirmed by subsequent price action.",
      "quickNote": "Monitor session overlaps for potential shifts in market structure.",
      "mentorText": "When the London and New York sessions overlap, you need to be alert. This is when the market often reveals its true intentions. Watch for breaks of key levels during this time.",
      "mentorAnalogy": "Think of trading sessions like shifts in a factory. When two shifts overlap, production ramps up, revealing inefficiencies and opportunities that wouldn't be visible during regular hours."
    },
    "taskData": null,
    "visualKey": "forex-session-structure-limits"
  },
  {
    "type": "concept",
    "title": "Awareness of Session Traps",
    "label": "Forex Track",
    "body": "### Market Structure: Awareness of Session Traps\nSession transitions can create traps that mislead traders regarding swing analysis. This card emphasizes **the importance of recognizing these traps to avoid costly mistakes**.\n\n* **False Breakouts**: During the transition from one session to another, price may briefly break a swing high or low before reversing. Identify these false breakouts by waiting for confirmation on the next candle before acting.\n* **Liquidity Gaps**: Be aware of liquidity gaps that can occur at session openings, leading to erratic price movements. Avoid placing trades immediately after a session opens until the market stabilizes.\n* **News Impact**: Economic news releases often coincide with session transitions, creating volatility that can distort market structure. Always check the economic calendar and be cautious around these times.",
    "context": {
      "keyTerms": [
        {
          "term": "False Breakouts",
          "definition": "Price movements that temporarily exceed a swing high or low but reverse quickly, misleading traders."
        },
        {
          "term": "Liquidity Gaps",
          "definition": "Periods of low trading volume that can lead to erratic price movements, especially at session openings."
        },
        {
          "term": "News Impact",
          "definition": "The influence of economic news releases on market volatility and structure."
        }
      ],
      "whyThisMatters": "Recognizing session traps helps traders avoid entering trades based on misleading price action, preserving capital.",
      "realLifeExample": "On a Tuesday at 5:00 PM EST, the GBPUSD spikes above 1.3000 due to a news release, only to drop back below that level within 15 minutes, indicating a false breakout.",
      "commonMistake": "Entering trades immediately after a session opens without waiting for price confirmation can lead to unnecessary losses.",
      "quickNote": "Stay vigilant for false breakouts and liquidity gaps during session transitions.",
      "mentorText": "Don't rush into trades just because the market is moving. Wait for confirmation after a session opens to avoid falling into traps.",
      "mentorAnalogy": "Imagine a surgeon preparing for a critical operation. They must assess the situation carefully before making any incisions, just as you should before entering a trade during session transitions."
    },
    "taskData": null,
    "visualKey": "forex-session-structure-limits"
  },
  {
    "type": "practice",
    "title": "Practical Application of Session Structure Analysis",
    "label": "Forex Track",
    "body": "### Market Structure: Practical Application of Session Structure Analysis\nThis card provides practical exercises to reinforce session structure analysis techniques. Engage with real market scenarios to solidify your understanding of session dynamics.\n\n* **Exercise 1: Identify Structure Shifts**: Analyze a 1-hour chart of the AUDUSD for the last two trading sessions. Mark any significant swing highs and lows that coincide with session openings and closings.\n* **Exercise 2: Recognize Session Traps**: Review a 15-minute chart of the USDJPY during the transition from the Asian to the London session. Identify any false breakouts and liquidity gaps, noting the price action following these events.\n* **Exercise 3: Timeframe Confirmation**: Select a currency pair and observe its price action across the 15-minute, 1-hour, and daily charts. Document any instances where session shifts align across these timeframes and how they influenced your trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Structure Shifts",
          "definition": "Changes in market direction indicated by new swing highs or lows."
        },
        {
          "term": "Session Dynamics",
          "definition": "The behavior of price action during different trading sessions."
        },
        {
          "term": "Timeframe Confirmation",
          "definition": "The process of validating trading signals across multiple timeframes."
        }
      ],
      "whyThisMatters": "Practical application of session structure analysis enhances your ability to make informed trading decisions under real market conditions.",
      "realLifeExample": "While analyzing the EURUSD, you identify a swing high at 1.1200 during the London session and a subsequent swing low at 1.1150 during the New York session, confirming a bearish structure shift.",
      "commonMistake": "Overlooking the importance of analyzing multiple timeframes can lead to missed opportunities or false signals.",
      "quickNote": "Engage in practical exercises to master session structure analysis.",
      "mentorText": "Practice makes perfect. By analyzing past sessions, you can better understand how market structure shifts occur and how to react appropriately.",
      "mentorAnalogy": "Consider a pilot reviewing flight data before takeoff. They must analyze past flights to ensure a safe and efficient journey, just as you must analyze price action to navigate the market effectively."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During the London session, the EURUSD breaks a swing high of 1.1200 but quickly retraces to 1.1180. What should you do next?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position immediately at 1.1180.",
          "isCorrect": false,
          "feedback": "Entering immediately without confirmation can lead to losses if this is a false breakout."
        },
        {
          "id": "1",
          "text": "Wait for the next candle to close above 1.1200 before entering a long position.",
          "isCorrect": true,
          "feedback": "Waiting for confirmation helps ensure that the breakout is valid and not a false signal."
        },
        {
          "id": "2",
          "text": "Set a sell limit order at 1.1175.",
          "isCorrect": false,
          "feedback": "Setting a sell limit order without confirmation of a bearish structure shift is premature."
        },
        {
          "id": "3",
          "text": "Ignore the price action and continue with your current strategy.",
          "isCorrect": false,
          "feedback": "Ignoring significant price movements can lead to missed trading opportunities."
        }
      ]
    },
    "visualKey": "forex-session-structure-limits"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Session Insights",
    "label": "Forex Track",
    "body": "### Market Structure: Summary of Forex Session Insights\nThis card summarizes the essential insights regarding session structure and its impact on swing points. Understanding these concepts is vital for effective trading.\n\n* **Key Takeaways on Structure Shifts**: Recognizing shifts in market structure during session overlaps can enhance trading strategies. Pay close attention to price action during these critical times.\n* **Avoiding Session Traps**: Awareness of false breakouts and liquidity gaps is crucial. Always seek confirmation before acting on price movements during session transitions.\n* **Practical Application**: Engage in regular analysis of session dynamics across multiple timeframes to reinforce your understanding and improve decision-making in live trading scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Key Takeaways",
          "definition": "Essential insights that summarize the main concepts learned."
        },
        {
          "term": "Session Dynamics",
          "definition": "The behavior of price action during different trading sessions."
        },
        {
          "term": "Practical Application",
          "definition": "The act of applying learned concepts to real market situations."
        }
      ],
      "whyThisMatters": "Summarizing key insights solidifies understanding and prepares traders for practical application in the market.",
      "realLifeExample": "After reviewing the insights, a trader identifies a consistent pattern of false breakouts during the Asian session, allowing them to adjust their strategy accordingly.",
      "commonMistake": "Failing to integrate session insights into trading strategies can lead to missed opportunities and increased risk.",
      "quickNote": "Summarize key insights to enhance trading strategies.",
      "mentorText": "Reflect on what you've learned about session structure. These insights are your toolkit for navigating the market effectively.",
      "mentorAnalogy": "Just as an architect reviews blueprints before construction, you must review session insights to build a solid trading strategy."
    },
    "taskData": null,
    "visualKey": "forex-session-structure-limits"
  }
];
