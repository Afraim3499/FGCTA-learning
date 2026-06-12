import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Setup Design Using Volatility Profiles",
    "label": "Gold Track",
    "body": "### Gold Setup Design Using Volatility Profiles\nDesigning gold trade setups requires a structured approach using Average True Range (ATR) and volatility profiles. This mission brief introduces the foundational concepts for developing volatility-based strategies.\n\n* **ATR Calculation**: Calculate the ATR for gold by averaging the true range over a specified period, typically 14 days. This measure helps in understanding the average price movement and setting realistic expectations.\n* **Volatility Profile Analysis**: Analyze historical volatility profiles to identify periods of high and low volatility. Use this data to anticipate potential price expansion or contraction phases.\n* **Setup Alignment**: Align trade setups with identified volatility conditions. High volatility periods may warrant wider stop-losses and targets, while low volatility periods may require tighter parameters.",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a technical indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        },
        {
          "term": "Volatility Profile",
          "definition": "A historical analysis of price volatility over a specific period, used to anticipate future price movements."
        }
      ],
      "whyThisMatters": "Understanding volatility profiles allows traders to tailor their setups to market conditions, enhancing strategy precision.",
      "realLifeExample": "Gold's ATR spikes to 25 during a geopolitical event, indicating potential for large price swings. A trader adjusts their setup to accommodate this increased volatility.",
      "commonMistake": "Ignoring volatility profiles and using static stop-losses and targets, leading to setups misaligned with market dynamics.",
      "quickNote": "Volatility guides setup parameters; adapt to its rhythm.",
      "mentorText": "Think of volatility as the heartbeat of the market. If it's racing, your strategy needs to be agile enough to keep pace.",
      "mentorAnalogy": "Just as a pilot adjusts flight plans based on weather turbulence, traders must adapt setups to market volatility."
    },
    "taskData": null,
    "visualKey": "gold-plan-volatility-profile"
  },
  {
    "type": "concept",
    "title": "Mapping Gold Wick Buffers for Invalidation",
    "label": "Gold Track",
    "body": "### Mapping Gold Wick Buffers for Invalidation\nEstablishing invalidation zones in gold setups involves mapping wick buffers. This approach uses price action wicks to enhance risk management.\n\n* **Wick Analysis**: Identify significant wicks on gold's price chart that indicate potential reversal points. These wicks often signal areas of strong buying or selling pressure.\n* **Buffer Calculation**: Calculate a buffer zone beyond the wick's high or low to set an invalidation point. This buffer accounts for potential false breakouts and noise.\n* **Risk Management Integration**: Integrate wick buffers into your risk management plan by adjusting stop-losses to sit just beyond these zones, reducing premature exit risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Wick",
          "definition": "The thin line on a candlestick chart representing the high and low prices within a period."
        },
        {
          "term": "Invalidation Zone",
          "definition": "A price level where a trade setup is considered invalid, typically marked by a stop-loss."
        }
      ],
      "whyThisMatters": "Mapping wick buffers helps traders avoid being stopped out by market noise, preserving trade integrity.",
      "realLifeExample": "Gold forms a long lower wick at $1,750, suggesting strong buying interest. A trader sets their stop-loss $5 below this wick to avoid noise-triggered exits.",
      "commonMistake": "Setting stop-losses directly at wick highs or lows, leading to frequent stop-outs by minor price fluctuations.",
      "quickNote": "Wicks tell a story; use buffers to read between the lines.",
      "mentorText": "Wicks are like the market's whispers. Listen closely, but give them room to breathe with a buffer.",
      "mentorAnalogy": "A surgeon leaves a margin around a tumor to ensure complete removal; similarly, traders use buffers around wicks to secure their positions."
    },
    "taskData": null,
    "visualKey": "gold-wick-invalidation-buffer"
  },
  {
    "type": "concept",
    "title": "Using US Yields as a Macro Overlay",
    "label": "Gold Track",
    "body": "### Using US Yields as a Macro Overlay\nIntegrating US10Y yields as a macro overlay in gold setups involves understanding the impact of interest rates on gold price movements.\n\n* **Yield-Gold Correlation**: Recognize the inverse relationship between US yields and gold prices. Rising yields often pressure gold lower as they increase the opportunity cost of holding non-yielding assets.\n* **Macro Trend Analysis**: Monitor US10Y yield trends to anticipate shifts in gold's macro environment. A rising yield trend may signal potential bearish pressure on gold.\n* **Setup Adjustment**: Adjust gold trade setups based on yield movements. For example, a breakout in yields might prompt a more cautious approach to long gold positions.",
    "context": {
      "keyTerms": [
        {
          "term": "US10Y Yield",
          "definition": "The interest rate on the US 10-year Treasury note, a benchmark for economic conditions and interest rates."
        },
        {
          "term": "Macro Overlay",
          "definition": "A broader economic factor used to influence or adjust trading strategies."
        }
      ],
      "whyThisMatters": "Using macro overlays like US yields helps traders align their gold strategies with broader economic trends.",
      "realLifeExample": "US10Y yields rise to 3%, causing gold to drop from $1,800 to $1,770 as investors shift to yield-bearing assets.",
      "commonMistake": "Ignoring macroeconomic indicators and focusing solely on technicals, leading to setups that conflict with broader market trends.",
      "quickNote": "Yields guide gold's macro narrative; align your setups accordingly.",
      "mentorText": "Think of yields as the tide that lifts or lowers all boats, including gold. Keep an eye on the tide to navigate effectively.",
      "mentorAnalogy": "Just as a sailor adjusts sails based on wind direction, traders must adjust strategies based on interest rate movements."
    },
    "taskData": null,
    "visualKey": "gold-yield-usd-overlay"
  },
  {
    "type": "concept",
    "title": "Target Mapping with ATR in Gold Setups",
    "label": "Gold Track",
    "body": "### Target Mapping with ATR in Gold Setups\nUsing ATR to map targets in gold trade setups involves setting realistic objectives based on volatility measures.\n\n* **ATR-Based Targeting**: Use the ATR value to determine feasible price targets. A higher ATR suggests larger potential moves, while a lower ATR indicates more conservative targets.\n* **Dynamic Adjustment**: Adjust targets dynamically as ATR changes. If ATR increases, expand targets to capture larger moves; if it decreases, tighten targets to reflect reduced volatility.\n* **Risk-Reward Calibration**: Ensure that targets align with risk-reward ratios. ATR-based targets should maintain a balance between potential reward and acceptable risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Target Mapping",
          "definition": "The process of setting specific price levels as objectives for a trade."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "ATR-based target mapping ensures that trade objectives are grounded in current market conditions, enhancing strategy effectiveness.",
      "realLifeExample": "Gold's ATR is 20, and a trader sets a target of $40 from entry, aligning with the expected volatility range.",
      "commonMistake": "Setting static targets without considering changing volatility, leading to missed opportunities or premature exits.",
      "quickNote": "Let ATR guide your target horizons; adapt as it shifts.",
      "mentorText": "Think of ATR as your compass for setting targets. It points you to where the market can realistically go.",
      "mentorAnalogy": "Just as a marathon runner paces themselves based on terrain, traders should set targets based on market volatility."
    },
    "taskData": null,
    "visualKey": "gold-atr-target-mapping"
  },
  {
    "type": "concept",
    "title": "Validating Gold Trade Setups",
    "label": "Gold Track",
    "body": "### Gold Plan Validation Drill: Ensuring Robustness\nEngage in validation drills to confirm the robustness of gold trade setups before execution.\n\n* **Criteria Confirmation**: Before executing, ensure that all predefined criteria such as trend alignment, volatility profile, and yield overlays are met. If any criterion is missing, the setup is invalid.\n* **Volatility Check**: Validate the expected volatility by comparing the current ATR (Average True Range) to historical ranges. A setup is only valid if the current ATR aligns with the anticipated market movement.\n* **Yield Overlay Verification**: Confirm that the yield curve supports the directional bias of the trade. Divergence between the yield curve and trade direction invalidates the setup.",
    "context": {
      "keyTerms": [
        {
          "term": "Validation Drill",
          "definition": "A systematic process of confirming all trade setup criteria before execution."
        },
        {
          "term": "ATR (Average True Range)",
          "definition": "A technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        },
        {
          "term": "Yield Overlay",
          "definition": "An analysis of the yield curve to determine its alignment with the trade's directional bias."
        }
      ],
      "whyThisMatters": "Validation ensures that trades are based on objective criteria, reducing emotional and impulsive decisions.",
      "realLifeExample": "A trader plans a long position on gold at $1,800 with a 14-day ATR of $25. The setup is validated as the ATR aligns with historical volatility, and the yield curve supports a bullish bias.",
      "commonMistake": "Skipping the volatility check, leading to trades that are not aligned with current market conditions.",
      "quickNote": "Validate every setup against your criteria checklist before execution.",
      "mentorText": "Before you pull the trigger on a gold trade, you need to run through your validation checklist. If even one element is off, you don't have a trade — you have a gamble.",
      "mentorAnalogy": "Think of this like a pilot's pre-flight checklist. Every system must be checked and confirmed before takeoff. One unchecked item can lead to catastrophic failure."
    },
    "taskData": null,
    "visualKey": "gold-plan-validation-drill"
  },
  {
    "type": "concept",
    "title": "Practice: Gold Setup Application",
    "label": "Gold Track",
    "body": "### Gold Setup Application: Practical Exercises\nApply the principles of gold setup anatomy through structured exercises to enhance your trading proficiency.\n\n* **Scenario Simulation**: Engage in simulated trading scenarios that replicate real market conditions. Focus on applying volatility and yield-based criteria to each setup.\n* **Volatility and Yield Analysis**: Practice identifying setups where volatility profiles and yield overlays align. Use historical data to backtest these criteria.\n* **Execution Drill**: Execute trades in a simulated environment, focusing on adherence to setup criteria and post-trade analysis to refine strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "A practice exercise that replicates real market conditions to test trading strategies."
        },
        {
          "term": "Backtesting",
          "definition": "The process of testing a trading strategy on historical data to evaluate its effectiveness."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge and enhances decision-making skills in live markets.",
      "realLifeExample": "A trader uses a simulation platform to practice gold trades with a focus on ATR alignment and yield curve analysis, refining their strategy based on simulated outcomes.",
      "commonMistake": "Failing to simulate realistic market conditions, leading to overconfidence in untested strategies.",
      "quickNote": "Simulate before you speculate — practice makes precision.",
      "mentorText": "You need to practice like you play. Simulate real market conditions and apply your setup criteria rigorously. This is where you iron out the kinks.",
      "mentorAnalogy": "Think of this like a surgeon practicing on a simulator before performing a real operation. Every move is rehearsed to ensure precision when it counts."
    },
    "taskData": null,
    "visualKey": "gold-plan-debrief"
  },
  {
    "type": "practice",
    "title": "Debriefing Gold Trade Setups",
    "label": "Gold Track",
    "body": "### Gold Plan Volatility Profile: Debriefing Techniques\nFocus on debriefing past gold trades to enhance future setups by analyzing outcomes and refining strategies.\n\n* **Outcome Analysis**: Review each trade to determine if the setup criteria were met and if the outcome aligned with expectations. Document discrepancies for future reference.\n* **Strategy Refinement**: Adjust your strategy based on debriefing insights. Identify patterns in successful and unsuccessful trades to enhance future performance.\n* **Feedback Loop**: Establish a feedback loop where each trade informs the next, creating a cycle of continuous improvement.",
    "context": {
      "keyTerms": [
        {
          "term": "Debriefing",
          "definition": "The process of reviewing and analyzing past trades to improve future performance."
        },
        {
          "term": "Feedback Loop",
          "definition": "A system where outputs of a process are used as inputs for future iterations, promoting continuous improvement."
        }
      ],
      "whyThisMatters": "Debriefing transforms past experiences into actionable insights, leading to improved trading strategies.",
      "realLifeExample": "After a series of trades, a trader reviews their gold setups, noting that trades with misaligned yield overlays consistently underperform, prompting a strategy adjustment.",
      "commonMistake": "Neglecting to document and analyze trades, resulting in repeated mistakes and missed learning opportunities.",
      "quickNote": "Every trade is a lesson — debrief to learn and improve.",
      "mentorText": "After-action reviews are critical. You need to dissect each trade to understand what went right or wrong. This is how you evolve as a trader.",
      "mentorAnalogy": "Consider this like a football coach reviewing game footage. Every play is analyzed to refine strategies and improve future performance."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A trader notices that their recent gold trades have been underperforming. What should their first step be in the debriefing process?",
      "options": [
        {
          "id": "0",
          "text": "Review each trade to determine if setup criteria were met.",
          "isCorrect": true,
          "feedback": "Correct. Reviewing each trade helps identify whether the setup criteria were correctly applied and where adjustments are needed."
        },
        {
          "id": "1",
          "text": "Immediately change their trading strategy.",
          "isCorrect": false,
          "feedback": "Incorrect. Changes should be based on thorough analysis, not immediate reactions."
        },
        {
          "id": "2",
          "text": "Ignore past trades and focus on future opportunities.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring past trades misses valuable learning opportunities."
        },
        {
          "id": "3",
          "text": "Focus solely on successful trades for analysis.",
          "isCorrect": false,
          "feedback": "Incorrect. Analyzing both successful and unsuccessful trades provides a comprehensive understanding."
        }
      ]
    },
    "visualKey": "gold-plan-volatility-profile"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Setup Anatomy",
    "label": "Gold Track",
    "body": "### Gold Wick Invalidation Buffer: Key Concepts Review\nSummarize the key concepts of gold setup anatomy, focusing on structured trade plans and their components.\n\n* **Volatility Profiles**: Understand the importance of aligning trade setups with current and historical volatility to ensure realistic risk assessments.\n* **Yield Overlays**: Incorporate yield curve analysis to validate the directional bias of trades, ensuring alignment with macroeconomic conditions.\n* **Structured Trade Plans**: Emphasize the necessity of a detailed, objective plan that includes entry, exit, and risk management criteria.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Profile",
          "definition": "A representation of market volatility used to assess risk and potential trade setups."
        },
        {
          "term": "Structured Trade Plan",
          "definition": "A comprehensive plan detailing the criteria for trade entry, management, and exit."
        }
      ],
      "whyThisMatters": "A structured approach to trading reduces emotional decision-making and enhances consistency in performance.",
      "realLifeExample": "A trader uses a structured plan to enter a gold trade at $1,850, with a stop loss at $1,830 and a target at $1,880, based on volatility and yield analysis.",
      "commonMistake": "Failing to adhere to a structured plan, leading to inconsistent results and increased risk.",
      "quickNote": "Structure your trades to stabilize your outcomes.",
      "mentorText": "A well-structured trade plan is your blueprint. Without it, you're flying blind. Stick to your plan to navigate the markets effectively.",
      "mentorAnalogy": "Think of this like an architect's blueprint. Every detail is planned out before construction begins, ensuring the building is sound and stable."
    },
    "taskData": null,
    "visualKey": "gold-wick-invalidation-buffer"
  }
];
