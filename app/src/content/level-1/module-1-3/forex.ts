import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Forex Setup Alignment with Session Windows",
    "label": "Forex Track",
    "body": "Aligning forex trade setups with the London and New York session windows is crucial for effective strategy development. This card introduces the importance of session-based alignment in forex trading.\n\n* **Session Timing**: The London session typically runs from 3:00 AM to 11:00 AM EST, while the New York session spans from 8:00 AM to 4:00 PM EST. Aligning setups within these windows captures the highest liquidity and volatility.\n* **Session Overlap**: The overlap between the London and New York sessions, from 8:00 AM to 11:00 AM EST, is particularly significant for capturing major price movements and ensuring optimal entry points.\n* **Session-Specific Strategies**: Different strategies may be employed depending on the session. For instance, trend-following strategies are often more effective during the London session, while reversal strategies may be better suited for the New York session close.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Windows",
          "definition": "Specific time periods when major forex markets are open, providing high liquidity and volatility."
        }
      ],
      "whyThisMatters": "Aligning setups with session windows ensures traders engage during periods of optimal liquidity and volatility, enhancing trade efficiency.",
      "realLifeExample": "A trader plans a EURUSD trade at the London open (3:00 AM EST), anticipating a breakout due to high liquidity and news releases.",
      "commonMistake": "Ignoring session windows and trading during low liquidity periods, leading to poor execution and increased slippage.",
      "quickNote": "Trade within session windows for optimal liquidity and volatility.",
      "mentorText": "Think of session windows as the opening hours of a bustling market. You want to be there when the action happens, not when the stalls are closing.",
      "mentorAnalogy": "Just like a chef plans to serve during peak dining hours for maximum impact, traders should align setups with session windows to capture the market's full potential."
    },
    "taskData": null,
    "visualKey": "forex-plan-session-windows"
  },
  {
    "type": "concept",
    "title": "Mapping Session Extremes for Invalidation",
    "label": "Forex Track",
    "body": "Mapping session extremes is essential for identifying invalidation points in forex setups. This card focuses on using session highs and lows for effective risk management.\n\n* **Session Highs and Lows**: Identify the highest and lowest price points within a session to establish potential invalidation levels. These extremes often act as key support and resistance zones.\n* **Invalidation Criteria**: A setup is invalidated if price action closes beyond a session high or low, indicating a potential shift in market sentiment.\n* **Risk Management**: Use session extremes to set stop-loss orders just beyond these levels, minimizing risk exposure while allowing for natural market fluctuations.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Extremes",
          "definition": "The highest and lowest price points recorded during a specific trading session."
        }
      ],
      "whyThisMatters": "Mapping session extremes provides clear invalidation points, enhancing risk management and decision-making precision.",
      "realLifeExample": "During the New York session, GBPUSD reaches a high of 1.3750. A trader sets a stop-loss at 1.3760, just beyond this session high, to manage risk.",
      "commonMistake": "Failing to adjust stop-loss levels according to session extremes, leading to premature exits or excessive risk.",
      "quickNote": "Use session highs/lows as invalidation points for precise risk management.",
      "mentorText": "Think of session extremes as the boundaries of a playing field. If the ball goes out, it's time to reassess your strategy.",
      "mentorAnalogy": "Just like an architect uses building codes to determine structural limits, traders use session extremes to define the boundaries of their setups."
    },
    "taskData": null,
    "visualKey": "forex-session-extremes-invalidation"
  },
  {
    "type": "concept",
    "title": "Incorporating DXY Correlation for Setup Validation",
    "label": "Forex Track",
    "body": "Utilizing the DXY correlation matrix is vital for validating forex setups. This card explores the impact of dollar strength on currency pairs.\n\n* **DXY Overview**: The DXY index measures the US dollar's strength against a basket of major currencies. Its movements can significantly influence forex pairs.\n* **Correlation Analysis**: Analyze the correlation between DXY movements and specific currency pairs. A strong inverse correlation suggests that a rising DXY may lead to a decline in EURUSD, for example.\n* **Setup Validation**: Validate setups by ensuring alignment between DXY trends and the anticipated direction of the forex pair. Divergence may indicate a higher risk of setup failure.",
    "context": {
      "keyTerms": [
        {
          "term": "DXY",
          "definition": "The US Dollar Index, a measure of the value of the US dollar relative to a basket of foreign currencies."
        }
      ],
      "whyThisMatters": "Incorporating DXY correlations enhances the robustness of forex setups by aligning them with broader market dynamics.",
      "realLifeExample": "A trader observes a rising DXY and anticipates a bearish move in EURUSD, aligning their setup with the dollar's strength.",
      "commonMistake": "Ignoring DXY trends, leading to setups that conflict with broader market movements and increased failure risk.",
      "quickNote": "Align forex setups with DXY trends for robust validation.",
      "mentorText": "Think of the DXY as the tide that lifts or lowers all boats. Align your trades with the tide, not against it.",
      "mentorAnalogy": "Just as a sailor adjusts sails based on wind direction, traders should align setups with DXY trends to navigate the forex market effectively."
    },
    "taskData": null,
    "visualKey": "forex-dxy-correlation-matrix"
  },
  {
    "type": "concept",
    "title": "Target Mapping Based on Forex Sessions",
    "label": "Forex Track",
    "body": "Mapping targets within the context of forex session dynamics is crucial for setting realistic and achievable profit goals. This card covers techniques for aligning targets with session trends.\n\n* **Session Trend Analysis**: Identify the prevailing trend within a session to set targets that align with market momentum. A bullish London session trend suggests setting higher targets.\n* **Volatility Consideration**: Consider session-specific volatility when mapping targets. The London-New York overlap often provides the highest volatility, allowing for more ambitious targets.\n* **Dynamic Adjustments**: Adjust targets dynamically based on real-time session developments. If a session trend strengthens, consider extending targets to capture additional profit potential.",
    "context": {
      "keyTerms": [
        {
          "term": "Target Mapping",
          "definition": "The process of setting profit targets based on market conditions and session dynamics."
        }
      ],
      "whyThisMatters": "Session-based target mapping ensures profit goals are realistic and aligned with market conditions, optimizing trade outcomes.",
      "realLifeExample": "During a strong bullish trend in the London session, a trader sets a higher target for EURJPY, anticipating continued upward momentum.",
      "commonMistake": "Setting static targets without considering session dynamics, leading to missed profit opportunities or premature exits.",
      "quickNote": "Align targets with session trends for optimal trade outcomes.",
      "mentorText": "Think of target mapping like setting a destination on a GPS. You need to adjust your route based on current traffic conditions.",
      "mentorAnalogy": "Just as a pilot adjusts flight paths based on weather conditions, traders should map targets according to session trends to ensure a smooth journey to profit."
    },
    "taskData": null,
    "visualKey": "forex-session-target-mapping"
  },
  {
    "type": "concept",
    "title": "Auditing Forex Trade Plans",
    "label": "Forex Track",
    "body": "### Forex Plan Audit Drill: Evaluating Trade Effectiveness\nAuditing forex trade plans involves a systematic review of past setups to enhance future performance. This card focuses on **how to conduct effective audits to refine trade setups**.\n\n* **Setup Consistency Check**: Evaluate whether the trade setup adhered to predefined criteria, including session alignment and market structure. Inconsistencies indicate a need for plan refinement.\n* **Outcome Analysis**: Compare the expected versus actual outcomes of the trade. Identify deviations and assess whether they were due to execution errors or unforeseen market conditions.\n* **Risk Management Review**: Ensure that risk parameters were adhered to, such as stop-loss placement and position sizing. Deviations here can significantly impact overall profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Audit",
          "definition": "A systematic review of past trade setups to evaluate their effectiveness."
        },
        {
          "term": "Setup Consistency",
          "definition": "Adherence to predefined trade criteria and conditions."
        }
      ],
      "whyThisMatters": "Auditing trade plans allows traders to identify weaknesses and improve their strategy, leading to more consistent performance.",
      "realLifeExample": "A trader reviews their EURUSD trade plan from the previous week, noting that a failure to align with the London session led to a loss, prompting a revision of their session criteria.",
      "commonMistake": "Neglecting to review trades that were profitable, missing opportunities to understand why they worked.",
      "quickNote": "Audit every trade, not just the losing ones.",
      "mentorText": "Reviewing your trades is like a pilot debriefing after a flight. You need to understand what went right and what went wrong to improve your next journey.",
      "mentorAnalogy": "Think of auditing your trade plans like a software engineer conducting a code review. You meticulously check each part of the code to ensure it meets the required standards and functions as intended."
    },
    "taskData": null,
    "visualKey": "forex-plan-audit-drill"
  },
  {
    "type": "concept",
    "title": "Practice: Forex Setup Application",
    "label": "Forex Track",
    "body": "### Forex Setup Application: Practical Exercises\nApplying forex setup anatomy involves practicing with real market scenarios to reinforce session-aligned trade setups. This card provides **practical exercises to enhance your setup application skills**.\n\n* **Session Alignment Drills**: Practice identifying setups that align with major session opens, such as the London or New York sessions. This reinforces the importance of session timing in trade success.\n* **Scenario-Based Exercises**: Engage in exercises that simulate market conditions, requiring you to apply your setup criteria and make real-time decisions.\n* **Feedback Loop Integration**: After each exercise, review your decisions and outcomes to identify areas for improvement and reinforce successful strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Alignment",
          "definition": "The practice of timing trade setups to coincide with major market session opens."
        },
        {
          "term": "Scenario-Based Exercise",
          "definition": "A simulated trading situation used to practice decision-making skills."
        }
      ],
      "whyThisMatters": "Practicing setup application in realistic scenarios helps traders internalize session timing and improve decision-making under pressure.",
      "realLifeExample": "A trader practices aligning GBPUSD trades with the New York session open, noting how volatility increases provide better entry opportunities.",
      "commonMistake": "Ignoring the feedback loop, thus failing to learn from practice exercises.",
      "quickNote": "Practice with purpose; align with sessions.",
      "mentorText": "Think of these exercises like a pilot using a flight simulator. You practice in a controlled environment to prepare for real-world conditions.",
      "mentorAnalogy": "Imagine a chef perfecting a recipe in a test kitchen before serving it to guests. Each practice run refines the dish, just like each exercise refines your trading strategy."
    },
    "taskData": null,
    "visualKey": "forex-plan-debrief"
  },
  {
    "type": "practice",
    "title": "Debriefing Forex Trade Setups",
    "label": "Forex Track",
    "body": "### Forex Plan Session Windows: Analyzing Trade Outcomes\nDebriefing past forex trades involves analyzing outcomes to improve future setups. This card discusses **techniques for effective debriefing and strategy adjustment**.\n\n* **Outcome Dissection**: Break down each trade to understand what elements of the setup worked and what didn't. Focus on session timing, entry points, and exit strategies.\n* **Strategy Adjustment**: Use insights from the debrief to adjust your strategy. This might involve refining entry criteria or adjusting risk management parameters.\n* **Pattern Recognition**: Identify recurring patterns in successful and unsuccessful trades to enhance your setup criteria.",
    "context": {
      "keyTerms": [
        {
          "term": "Debriefing",
          "definition": "The process of analyzing past trades to extract lessons and improve future performance."
        },
        {
          "term": "Outcome Dissection",
          "definition": "Breaking down a trade to understand its components and results."
        }
      ],
      "whyThisMatters": "Debriefing allows traders to learn from each trade, refining their approach and increasing their chances of future success.",
      "realLifeExample": "A trader debriefs a USDJPY trade, noting that the entry was too early, leading to a stop-out before the expected move occurred.",
      "commonMistake": "Focusing only on losses during debriefing, missing out on understanding what made profitable trades successful.",
      "quickNote": "Debrief to dissect, adjust, and recognize patterns.",
      "mentorText": "Debriefing is like a surgeon reviewing a procedure. You need to understand each step to improve your technique for the next operation.",
      "mentorAnalogy": "Consider a football coach reviewing game footage. Each play is analyzed to understand what worked and what needs improvement, just like you should with your trades."
    },
    "taskData": {
      "type": "choice_block",
      "question": "After reviewing a EURUSD trade that failed, you notice the entry was during a low-volume period. What should you focus on adjusting?",
      "options": [
        {
          "id": "0",
          "text": "Session timing for entry",
          "isCorrect": true,
          "feedback": "Correct. Aligning entries with high-volume session opens can improve trade success."
        },
        {
          "id": "1",
          "text": "Stop-loss placement",
          "isCorrect": false,
          "feedback": "Incorrect. While important, the primary issue here is session timing."
        },
        {
          "id": "2",
          "text": "Position sizing",
          "isCorrect": false,
          "feedback": "Incorrect. Position sizing is not directly related to the timing issue identified."
        },
        {
          "id": "3",
          "text": "Exit strategy",
          "isCorrect": false,
          "feedback": "Incorrect. The problem identified was with the entry timing, not the exit."
        }
      ]
    },
    "visualKey": "forex-plan-session-windows"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Setup Anatomy",
    "label": "Forex Track",
    "body": "### Forex Session Extremes Invalidation: Key Concepts Review\nThe anatomy of a forex setup involves understanding session alignment, DXY correlation, and structured trade plans. This card reviews **the essential elements of a structured forex trade setup**.\n\n* **Session Alignment**: Ensure trades are aligned with major session opens for optimal volatility and liquidity.\n* **DXY Correlation**: Monitor the Dollar Index (DXY) for its influence on major currency pairs, as it often dictates directional bias.\n* **Structured Trade Plans**: Develop and adhere to a structured plan that includes entry, exit, and risk management criteria to maintain discipline and consistency.",
    "context": {
      "keyTerms": [
        {
          "term": "DXY Correlation",
          "definition": "The relationship between the US Dollar Index and major currency pairs."
        },
        {
          "term": "Structured Trade Plan",
          "definition": "A detailed plan outlining entry, exit, and risk management criteria for a trade."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of forex setup anatomy ensures traders can execute disciplined and effective trades.",
      "realLifeExample": "A trader uses DXY correlation to confirm a bearish setup on EURUSD, aligning the trade with the New York session open for increased probability.",
      "commonMistake": "Overlooking the impact of DXY on currency pairs, leading to misaligned trades.",
      "quickNote": "Align, correlate, and structure for disciplined trading.",
      "mentorText": "Think of your trade setup like a flight plan. You need to know your route, check the weather (DXY), and ensure you have the right timing (session alignment) for a smooth flight.",
      "mentorAnalogy": "Imagine an architect designing a building. Every detail, from the foundation to the roof, must be planned and aligned with external factors like weather and terrain, just as your trades must align with market sessions and DXY."
    },
    "taskData": null,
    "visualKey": "forex-session-extremes-invalidation"
  }
];
