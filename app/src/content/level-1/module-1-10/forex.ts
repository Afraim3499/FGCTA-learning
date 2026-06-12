import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Foundations of Forex Target Path Planning",
    "label": "Forex Track",
    "body": "### Mission Brief: Foundations of Forex Target Path Planning\nForex target path planning requires a strategic approach to setting exits based on session liquidity and ADR boundaries.\n\n* **Session Liquidity Focus**: Forex markets exhibit distinct liquidity patterns during major sessions (e.g., London, New York). Effective target planning involves aligning exits with these liquidity peaks to maximize execution efficiency.\n* **ADR Boundary Utilization**: The Average Daily Range (ADR) provides a statistical boundary for expected price movement. Targets should be set within these boundaries to avoid unrealistic projections and improve hit rates.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Liquidity",
          "definition": "The concentration of trading activity and volume during specific market sessions."
        },
        {
          "term": "Average Daily Range (ADR)",
          "definition": "The average range between the high and low prices over a specific period, typically one day."
        }
      ],
      "whyThisMatters": "Professional traders use session liquidity and ADR boundaries to set realistic targets, enhancing trade execution and profitability.",
      "realLifeExample": "A trader sets a target for EURUSD at the London session high, aligning with a 70-pip ADR, ensuring the target is within realistic daily movement.",
      "commonMistake": "Setting targets outside of ADR boundaries, leading to missed exits and reduced profitability.",
      "quickNote": "Align targets with session liquidity peaks and ADR limits for realistic exits.",
      "mentorText": "In Forex, your targets should be as strategic as your entries. Use the session liquidity and ADR to guide your exits, not just your gut.",
      "mentorAnalogy": "Think of session liquidity and ADR as the runway length for a plane. You need enough runway (range) to take off (hit your target) safely."
    },
    "taskData": null,
    "visualKey": "forex-target-foundations"
  },
  {
    "type": "concept",
    "title": "Targeting Session High/Low Liquidity",
    "label": "Forex Track",
    "body": "### Forex Session Liquidity: Targeting Session High/Low Liquidity\nTargeting session highs and lows involves leveraging liquidity patterns to optimize exits.\n\n* **Session High/Low Targeting**: Identify the high and low points of major sessions (e.g., London, New York) as potential exit points. These levels often coincide with liquidity pools that can facilitate efficient execution.\n* **Liquidity Pattern Analysis**: Analyze historical session data to understand typical liquidity patterns. This helps in predicting where price is likely to react, offering strategic exit points.\n* **Displacement Confirmation**: Ensure that session highs/lows are confirmed by displacement moves, indicating strong liquidity presence and reducing false exits.",
    "context": {
      "keyTerms": [
        {
          "term": "Session High/Low",
          "definition": "The highest and lowest price levels reached during a specific trading session."
        },
        {
          "term": "Displacement",
          "definition": "A significant price move that indicates strong market interest or liquidity."
        }
      ],
      "whyThisMatters": "Targeting session highs/lows allows traders to leverage natural liquidity points, improving exit efficiency and reducing slippage.",
      "realLifeExample": "During the New York session, GBPUSD hits the session low with a strong displacement, providing a clear exit point for a short position.",
      "commonMistake": "Ignoring session liquidity patterns and setting exits based on arbitrary levels, leading to poor execution.",
      "quickNote": "Session highs/lows are natural liquidity magnets—use them for strategic exits.",
      "mentorText": "Always aim for the liquidity. Session highs and lows are where the market's attention is focused. Use them to your advantage.",
      "mentorAnalogy": "Targeting session highs/lows is like a ship navigating towards a lighthouse. These points guide you safely to your destination."
    },
    "taskData": null,
    "visualKey": "forex-session-liquidity-targets"
  },
  {
    "type": "concept",
    "title": "Overlaying DXY for Target Path Planning",
    "label": "Forex Track",
    "body": "### Forex DXY Correlation: Overlaying DXY for Target Path Planning\nOverlaying DXY movements refines target path planning by incorporating dollar strength or weakness.\n\n* **DXY Correlation Analysis**: Monitor the DXY index for directional cues. A rising DXY suggests USD strength, impacting USD pairs inversely, and vice versa.\n* **Target Refinement**: Use DXY movements to adjust targets on USD pairs. For instance, if DXY shows bullish momentum, consider tighter targets on EURUSD shorts.\n* **Cross-Market Confirmation**: Confirm Forex targets with DXY trends to enhance accuracy. Divergence between DXY and a USD pair signals potential reversals or continuations.",
    "context": {
      "keyTerms": [
        {
          "term": "DXY",
          "definition": "The U.S. Dollar Index, which measures the value of the USD against a basket of foreign currencies."
        },
        {
          "term": "Correlation",
          "definition": "A statistical measure that describes the extent to which two variables move in relation to each other."
        }
      ],
      "whyThisMatters": "Overlaying DXY provides a macro perspective on USD strength, refining target paths and aligning them with broader market trends.",
      "realLifeExample": "A trader observes a DXY breakout, prompting a tighter target on a USDJPY long, aligning with anticipated dollar strength.",
      "commonMistake": "Ignoring DXY trends and setting targets solely based on Forex pair charts, missing broader market signals.",
      "quickNote": "Use DXY as a compass to refine USD pair targets.",
      "mentorText": "DXY is your macro lens. It helps you see the bigger picture, ensuring your targets align with the dollar's true direction.",
      "mentorAnalogy": "Overlaying DXY is like a pilot checking the weather radar before setting a flight path. It ensures the route aligns with prevailing conditions."
    },
    "taskData": null,
    "visualKey": "forex-dxy-target-overlay"
  },
  {
    "type": "concept",
    "title": "Scaling Targets with ADR Boundaries",
    "label": "Forex Track",
    "body": "### Forex ADR Scaling: Scaling Targets with ADR Boundaries\nScaling targets using ADR boundaries ensures exits are within realistic daily volatility limits.\n\n* **ADR Calculation**: Determine the ADR for the currency pair to understand its typical daily movement. This sets a realistic framework for target placement.\n* **Target Scaling**: Adjust targets based on ADR. For example, if the ADR is 100 pips, setting a target beyond this range increases the risk of non-fulfillment.\n* **Volatility Adaptation**: Adapt target scaling to current volatility conditions. In high volatility, consider extending targets within ADR limits; in low volatility, tighten them.",
    "context": {
      "keyTerms": [
        {
          "term": "Scaling",
          "definition": "Adjusting the size or scope of a target based on specific criteria or conditions."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation of a trading price series over time, typically measured by the standard deviation of returns."
        }
      ],
      "whyThisMatters": "ADR-based scaling ensures targets are achievable within expected daily price movements, enhancing trade success rates.",
      "realLifeExample": "A trader sets a 70-pip target on EURUSD, respecting a 90-pip ADR, ensuring the target is within realistic daily movement.",
      "commonMistake": "Setting targets without considering ADR, leading to unrealistic expectations and missed exits.",
      "quickNote": "Scale targets within ADR to align with realistic daily movement.",
      "mentorText": "ADR is your volatility gauge. Use it to ensure your targets are within the realm of possibility, not fantasy.",
      "mentorAnalogy": "Scaling targets with ADR is like a tailor measuring fabric before cutting. You ensure the fit is right, avoiding waste."
    },
    "taskData": null,
    "visualKey": "forex-adr-target-scaling-visual"
  },
  {
    "type": "concept",
    "title": "Drilling Down on Forex Target Components",
    "label": "Forex Track",
    "body": "### Forex Target Path Planning: Practical Drills\nRefine your Forex target path planning skills through practical exercises designed for real-world scenarios.\n\n* **Component Analysis**: Break down the target path into its core components: entry, stop-loss, and target exit. Ensure each component aligns with the market structure and session dynamics.\n* **Scenario Simulation**: Use historical data to simulate trades, focusing on how different path components interact under varying market conditions. Adjust components based on volatility and liquidity.\n* **Iterative Refinement**: Continuously refine your target path by analyzing the outcomes of each simulation. Identify patterns that lead to successful exits and adjust your strategy accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Target Path",
          "definition": "A structured plan outlining entry, stop-loss, and target exit points in a trade."
        }
      ],
      "whyThisMatters": "Engaging in practical exercises helps traders develop a nuanced understanding of target path components, leading to more precise and effective trading strategies.",
      "realLifeExample": "Simulating a EURUSD trade during the London session with a 30-pip target and a 15-pip stop-loss, adjusting for a sudden news event that increases volatility.",
      "commonMistake": "Neglecting to adjust target paths based on session-specific volatility and liquidity conditions.",
      "quickNote": "Practice makes precision in target path planning.",
      "mentorText": "When you drill down into each component of your target path, you start seeing how they work together. It's like tuning an engine; each part must be in sync for optimal performance.",
      "mentorAnalogy": "Think of this as a pilot running flight simulations. Each flight path is tested under different conditions to ensure every component of the journey is optimized for safety and efficiency."
    },
    "taskData": null,
    "visualKey": "forex-target-drill-component"
  },
  {
    "type": "concept",
    "title": "Debriefing Forex Target Path Outcomes",
    "label": "Forex Track",
    "body": "### Forex Target Path Debrief: Analyzing Outcomes\nConduct thorough debriefs of your Forex target path outcomes to refine strategies based on performance.\n\n* **Outcome Review**: Post-trade, review each component of your target path. Analyze whether the entry, stop-loss, and target exit were executed as planned and how market conditions affected the outcome.\n* **Performance Metrics**: Use metrics such as win rate, average R:R, and drawdown to assess the effectiveness of your target path. Identify areas for improvement.\n* **Strategic Adjustments**: Based on the debrief, make strategic adjustments to your target path components. Focus on aligning them more closely with observed market behaviors.",
    "context": {
      "keyTerms": [
        {
          "term": "Debrief",
          "definition": "A structured review process to analyze the outcomes of a trading strategy."
        }
      ],
      "whyThisMatters": "Debriefing allows traders to learn from each trade, refining their strategies to better align with market dynamics and improve future performance.",
      "realLifeExample": "After a USDJPY trade, analyzing why the target was missed due to unexpected market consolidation during the New York session.",
      "commonMistake": "Failing to conduct a thorough debrief, leading to repeated mistakes and missed learning opportunities.",
      "quickNote": "Debriefing turns experience into expertise.",
      "mentorText": "A debrief is your chance to learn from the market's feedback. It's not just about what went wrong, but understanding why and how to adapt.",
      "mentorAnalogy": "Consider this like a post-mission analysis in aerospace. Every flight is reviewed to ensure that future missions are safer and more efficient."
    },
    "taskData": null,
    "visualKey": "forex-target-debrief-component"
  },
  {
    "type": "practice",
    "title": "Practical Application of Forex Target Paths",
    "label": "Forex Track",
    "body": "### Forex Target Path Application: Practice Exercises\nApply Forex target path planning concepts through hands-on exercises to reinforce learning.\n\n* **Scenario-Based Tasks**: Engage in exercises that simulate real market conditions, requiring you to plan and execute target paths with precision.\n* **Feedback Loop**: Receive immediate feedback on your decisions, helping you understand the impact of your choices on trade outcomes.\n* **Adaptive Learning**: Adjust your strategies based on feedback and repeated practice, enhancing your ability to plan effective target paths.",
    "context": {
      "keyTerms": [
        {
          "term": "Feedback Loop",
          "definition": "A process where outputs of a system are circled back as inputs, allowing for continuous improvement."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge, enabling traders to execute strategies with confidence and precision in live markets.",
      "realLifeExample": "Executing a practice trade on GBPUSD, adjusting the target path after receiving feedback on initial entry and stop-loss placement.",
      "commonMistake": "Ignoring feedback from practice exercises, leading to stagnation in skill development.",
      "quickNote": "Practice with feedback leads to mastery.",
      "mentorText": "Think of these exercises as your training ground. The more you practice with feedback, the sharper your skills become.",
      "mentorAnalogy": "This is akin to a surgeon practicing procedures on simulators. Each practice session refines their technique, ensuring precision in actual operations."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You planned a target path for EURUSD during the London session. After executing, the market moves contrary to your target. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Review the trade and adjust future target paths based on market behavior.",
          "isCorrect": true,
          "feedback": "Correct. Analyzing the trade helps refine future strategies."
        },
        {
          "id": "1",
          "text": "Ignore the outcome and stick to the original plan for future trades.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring outcomes prevents learning and improvement."
        },
        {
          "id": "2",
          "text": "Immediately change your strategy to avoid similar situations.",
          "isCorrect": false,
          "feedback": "Incorrect. Immediate changes without analysis can lead to inconsistent strategies."
        },
        {
          "id": "3",
          "text": "Blame market conditions and continue without adjustments.",
          "isCorrect": false,
          "feedback": "Incorrect. Blaming conditions without analysis misses learning opportunities."
        }
      ]
    },
    "visualKey": "forex-target-foundations"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Target Path Planning",
    "label": "Forex Track",
    "body": "### Forex Target Path Planning: Core Principles\nReview the key concepts and strategies of Forex target path planning. This summary consolidates the essential techniques covered in the track.\n\n* **Structured Planning**: Emphasize the importance of a structured approach to target path planning, integrating entry, stop-loss, and target exits in alignment with market structure.\n* **Continuous Improvement**: Highlight the role of debriefing and feedback in refining strategies, ensuring that each trade contributes to skill development.\n* **Adaptive Strategies**: Stress the need for adaptability in strategy, adjusting target paths based on real-time market conditions and performance metrics.",
    "context": {
      "keyTerms": [
        {
          "term": "Adaptive Strategy",
          "definition": "A flexible approach that adjusts to changing market conditions to optimize trading outcomes."
        }
      ],
      "whyThisMatters": "Summarizing key concepts reinforces understanding and ensures traders are equipped with a comprehensive toolkit for effective target path planning.",
      "realLifeExample": "A trader reviews their quarterly performance, noting improvements in target path accuracy after implementing structured debriefs and adaptive strategies.",
      "commonMistake": "Overlooking the importance of structured reviews and continuous adaptation in trading strategies.",
      "quickNote": "A comprehensive toolkit leads to consistent success.",
      "mentorText": "Think of this summary as your checklist. Each principle is a tool in your trading toolkit, ensuring you're prepared for any market condition.",
      "mentorAnalogy": "Consider this like a pilot's pre-flight checklist. Each item ensures the aircraft is ready for a safe and efficient journey, just as each principle prepares you for successful trading."
    },
    "taskData": null,
    "visualKey": "forex-session-liquidity-targets"
  }
];
