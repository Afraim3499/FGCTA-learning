import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Assessing Lot Sizing in Trading Journals",
    "label": "Forex Track",
    "body": "### Core Scenario: Lot Sizing Evaluation\nEvaluating lot sizing decisions in trading journals is critical for ensuring compliance with risk management strategies. This card teaches **how to systematically assess recorded lot sizes against risk parameters**.\n\n* **Risk Management Alignment**: Confirm that lot sizes correspond to the predefined risk percentage per trade, typically not exceeding 1-2% of the trading capital.\n* **Scenario Documentation**: Each entry must detail the rationale behind the chosen lot size, including market conditions and volatility assessments at the time of trade.\n* **Consistency Check**: Review multiple trades to ensure consistency in lot sizing decisions, identifying any deviations from the established risk management plan.",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Size",
          "definition": "The number of units of a financial instrument traded in a single transaction."
        },
        {
          "term": "Risk Management",
          "definition": "Strategies employed to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Accurate lot sizing is essential for maintaining risk exposure and protecting capital in volatile markets.",
      "realLifeExample": "A trader records a trade in EURUSD with a lot size of 0.5, representing 2% risk on a $10,000 account, while the strategy dictates a maximum of 1% risk.",
      "commonMistake": "Traders often overlook documenting the rationale behind lot sizing, leading to inconsistent risk management.",
      "quickNote": "Always align lot sizes with your risk management strategy.",
      "mentorText": "When reviewing your journal, ensure that every lot size decision is backed by a clear rationale. If you deviated from your plan, note why and how it affected your overall strategy.",
      "mentorAnalogy": "Think of lot sizing like fuel management in aviation; just as pilots calculate fuel needs based on flight plans and conditions, traders must assess lot sizes based on risk parameters."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Reviewing Session Window Entries",
    "label": "Forex Track",
    "body": "### Core Scenario: Session Window Analysis\nAnalyzing session window entries in trading journals ensures adherence to planned trading times and market conditions. This card teaches **how to critically evaluate session entries for compliance with your trading schedule**.\n\n* **Session Timing Verification**: Confirm that trades were executed within the designated trading hours, aligning with market volatility expectations for the specific currency pair.\n* **Market Condition Assessment**: Document the market conditions at the time of each trade, including news events or economic releases that may have influenced price action.\n* **Adherence to Strategy**: Review whether trades were placed according to the established trading strategy, ensuring that all entries reflect the intended session dynamics.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Window",
          "definition": "The specific time frame during which trading is planned and executed."
        },
        {
          "term": "Market Conditions",
          "definition": "The prevailing economic and geopolitical factors affecting price movements."
        }
      ],
      "whyThisMatters": "Adhering to planned session windows enhances the probability of executing trades under favorable market conditions.",
      "realLifeExample": "A trader logs a trade in GBPUSD executed at 3 AM UTC, outside the London session, missing potential volatility from the market opening.",
      "commonMistake": "Failing to document the session window can lead to misalignment with market conditions and strategy execution.",
      "quickNote": "Always execute trades within your defined session windows.",
      "mentorText": "When you look back at your journal, check if your trades were placed during the optimal session times. If not, analyze how that impacted your results.",
      "mentorAnalogy": "Just as a surgeon must operate within specific hours to ensure the best outcomes, traders must execute within optimal market windows to maximize effectiveness."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Evaluating Impact of Lot Size on P&L",
    "label": "Forex Track",
    "body": "### Core Scenario: Lot Size and Profitability\nUnderstanding how different lot sizes impact profit and loss outcomes is vital for effective trading journal documentation. This card teaches **how to analyze and record the effects of varying lot sizes on P&L**.\n\n* **P&L Calculation**: For each trade, calculate the profit or loss based on the lot size and price movement, ensuring clarity in how lot size influences overall outcomes.\n* **Documentation of Variations**: Record instances where different lot sizes were used for similar setups, noting the resulting P&L to identify patterns and inform future decisions.\n* **Risk-Reward Assessment**: Evaluate the risk-reward ratio for trades executed with varying lot sizes, ensuring that the outcomes align with your risk management framework.",
    "context": {
      "keyTerms": [
        {
          "term": "Profit and Loss (P&L)",
          "definition": "The financial outcome of a trade, calculated as the difference between entry and exit prices multiplied by lot size."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Understanding the relationship between lot size and P&L is essential for refining risk management strategies and improving decision-making.",
      "realLifeExample": "A trader documents two trades in AUDCAD: one with a 1.0 lot size yielding a $200 profit and another with a 0.5 lot size yielding a $100 profit, analyzing the impact of lot size on overall profitability.",
      "commonMistake": "Traders often neglect to analyze how lot size variations affect their P&L, missing opportunities for better risk management.",
      "quickNote": "Document the impact of lot size on your P&L for each trade.",
      "mentorText": "When reviewing your trades, ensure you note how different lot sizes affected your profits or losses. This will help you refine your approach and improve your outcomes.",
      "mentorAnalogy": "Consider lot size like the amount of ingredients in a recipe; adjusting the quantity can significantly alter the final dish's flavor and outcome."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Identifying Misalignment in Trade Execution",
    "label": "Forex Track",
    "body": "### Core Scenario: Execution Misalignment\nRecognizing misalignment between planned lot sizes and actual executions is crucial for maintaining discipline in trading. This card teaches **how to identify discrepancies in trade execution as documented in trading journals**.\n\n* **Planned vs. Actual Comparison**: Review each trade entry to compare the planned lot size against the executed lot size, noting any discrepancies and their potential impact on risk exposure.\n* **Root Cause Analysis**: For any misalignments, document the reasons behind the deviation, whether due to emotional decision-making, market pressure, or other factors.\n* **Adjustment Strategies**: Develop strategies to mitigate future misalignments, ensuring that execution aligns with the established trading plan and risk management protocols.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Misalignment",
          "definition": "The discrepancy between the planned trade parameters and the actual execution details."
        },
        {
          "term": "Discipline in Trading",
          "definition": "The adherence to a predefined trading plan and strategy."
        }
      ],
      "whyThisMatters": "Identifying execution misalignments helps maintain discipline and adherence to risk management strategies, crucial for long-term success.",
      "realLifeExample": "A trader plans a trade with a 0.3 lot size but executes with a 0.5 lot size due to market pressure, leading to increased risk exposure that is documented in the journal.",
      "commonMistake": "Traders often fail to document the reasons for execution misalignments, hindering their ability to learn from mistakes.",
      "quickNote": "Always compare planned lot sizes with actual executions.",
      "mentorText": "When you find a misalignment in your journal, analyze why it happened. Understanding the cause will help you prevent it in the future.",
      "mentorAnalogy": "Think of execution alignment like following a flight plan; any deviation can lead to unexpected outcomes and potential risks."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Documenting Adjustments to Lot Sizes",
    "label": "Forex Track",
    "body": "### Core Scenario: Lot Size Adjustments Documentation\nDocumenting adjustments to lot sizes is essential for maintaining adherence to predefined trading scenarios. This card focuses on **how to accurately record changes in lot sizes within trading journals**.\n\n* **Adjustment Rationale**: Clearly state the reason for any lot size modification, whether it’s due to volatility changes, risk management, or market conditions.\n* **Impact Analysis**: Assess how these adjustments affect overall risk exposure and potential outcomes of the trade, ensuring alignment with original scenario parameters.\n* **Consistency Check**: Regularly review documented adjustments to identify any deviations from your trading plan, fostering a disciplined approach to lot sizing.",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Size Adjustment",
          "definition": "Changes made to the volume of a trade based on market conditions or risk management."
        }
      ],
      "whyThisMatters": "Accurate documentation of lot size changes ensures that traders can evaluate their adherence to risk management protocols and scenario planning.",
      "realLifeExample": "During the EURUSD session on March 15, 2023, a trader adjusted their lot size from 1.0 to 0.5 due to unexpected volatility, which was documented in their journal for future reference.",
      "commonMistake": "Failing to document the rationale behind lot size changes can lead to a lack of clarity in evaluating past decisions.",
      "quickNote": "Always document the reason for any lot size adjustment to maintain scenario integrity.",
      "mentorText": "When you adjust your lot size, write down why you did it. This isn't just for record-keeping; it’s about understanding your decision-making process.",
      "mentorAnalogy": "Think of documenting lot size adjustments like a pilot logging changes in flight altitude due to weather conditions; it’s crucial for future flights."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Recognizing Patterns in Lot Sizing Decisions",
    "label": "Forex Track",
    "body": "### Core Scenario: Analyzing Lot Sizing Patterns\nIdentifying patterns in lot sizing decisions can significantly enhance future trading strategies. This card focuses on **how to analyze historical lot sizing data for improved scenario execution**.\n\n* **Data Compilation**: Aggregate lot size decisions from multiple trades to create a comprehensive dataset for analysis.\n* **Pattern Recognition**: Look for recurring themes, such as consistent adjustments in response to specific market conditions or volatility levels.\n* **Scenario Alignment**: Evaluate how these patterns align with your trading scenarios, ensuring that your lot sizing decisions are consistently supporting your strategic objectives.",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Sizing Patterns",
          "definition": "Recurring decisions regarding trade volumes that can inform future trading strategies."
        }
      ],
      "whyThisMatters": "Recognizing lot sizing patterns allows traders to refine their approach and make more informed decisions aligned with their trading plan.",
      "realLifeExample": "A trader notices that during high-impact news events, they consistently reduce their lot size by 50%, which they document in their journal to adjust future strategies accordingly.",
      "commonMistake": "Overlooking the analysis of lot sizing patterns can lead to repetitive mistakes and missed opportunities for improvement.",
      "quickNote": "Regularly analyze your lot sizing decisions to uncover valuable patterns that can enhance your trading strategy.",
      "mentorText": "Look back at your trades and see if you can spot any trends in how you adjust lot sizes. This insight can guide your future decisions.",
      "mentorAnalogy": "Recognizing patterns in lot sizing is like a chef analyzing ingredient proportions over time to perfect a recipe; it leads to better outcomes."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Lot Sizing Audits",
    "label": "Forex Track",
    "body": "### Core Scenario: Simulating Lot Sizing Audits\nEngaging in practical exercises on lot sizing audits reinforces the skills necessary for effective scenario adherence. This card focuses on **how to conduct simulated audits of lot sizing decisions**.\n\n* **Audit Simulation**: Create a mock trading journal with various lot sizing scenarios and adjustments to practice auditing techniques.\n* **Decision Evaluation**: Assess each lot sizing decision against predefined criteria, such as risk management and market conditions.\n* **Feedback Loop**: Develop a feedback mechanism to reflect on the outcomes of your simulated audits and identify areas for improvement.",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Sizing Audit",
          "definition": "A review process assessing the appropriateness of lot sizes used in past trades."
        }
      ],
      "whyThisMatters": "Practicing lot sizing audits helps traders internalize the process, ensuring they can effectively evaluate their decisions in real scenarios.",
      "realLifeExample": "In a simulated environment, a trader reviews a journal entry where they increased their lot size by 30% during a volatile session, analyzing the impact on their risk exposure.",
      "commonMistake": "Neglecting to simulate real-world conditions during practice can lead to a disconnect between theory and actual trading scenarios.",
      "quickNote": "Conduct regular simulated audits to sharpen your lot sizing decision-making skills.",
      "mentorText": "Practice auditing your lot sizes as if you were reviewing a colleague’s trades. This perspective can reveal insights you might overlook.",
      "mentorAnalogy": "Simulating lot sizing audits is like a surgeon practicing procedures on a mannequin; it prepares you for real-life scenarios."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You review a trading journal entry where the lot size was increased by 20% during a high volatility session. What should you focus on in your audit?",
      "options": [
        {
          "id": "0",
          "text": "Evaluate the rationale for the increase and its impact on risk exposure.",
          "isCorrect": true,
          "feedback": "Correct. Understanding the reasoning behind the adjustment is crucial for assessing its appropriateness."
        },
        {
          "id": "1",
          "text": "Check if the trade was profitable regardless of the lot size adjustment.",
          "isCorrect": false,
          "feedback": "Incorrect. Profitability does not justify the decision without understanding the risk involved."
        },
        {
          "id": "2",
          "text": "Look for patterns in other trades to justify the increase.",
          "isCorrect": false,
          "feedback": "Incorrect. The focus should be on the specific trade's rationale, not just patterns."
        },
        {
          "id": "3",
          "text": "Assess if the lot size was within the maximum allowed by your trading plan.",
          "isCorrect": false,
          "feedback": "Incorrect. While this is important, understanding the rationale is more critical for scenario adherence."
        }
      ]
    },
    "visualKey": "journal-process-audit"
  },
  {
    "type": "summary",
    "title": "Key Insights on Lot Sizing and Session Entries",
    "label": "Forex Track",
    "body": "### Core Scenario: Summarizing Lot Sizing Insights\nAuditing lot sizing and session entries provides critical insights into trading performance. This card focuses on **the key takeaways from analyzing lot sizes in trading journals**.\n\n* **Adherence to Plan**: Consistent documentation of lot sizes reinforces adherence to your trading plan, ensuring decisions are made with a clear rationale.\n* **Risk Management**: Understanding the implications of lot sizing decisions enhances risk management strategies, allowing for better control of potential losses.\n* **Performance Improvement**: Regular audits of lot sizing lead to continuous improvement in trading strategies, aligning future trades with successful patterns identified in past performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Entry",
          "definition": "The specific point in time when a trade is executed during a trading session."
        }
      ],
      "whyThisMatters": "Summarizing insights from lot sizing audits allows traders to refine their strategies and improve overall trading performance.",
      "realLifeExample": "After reviewing their journal, a trader identifies that reducing lot sizes during high volatility sessions consistently led to better risk management outcomes.",
      "commonMistake": "Failing to summarize insights can result in missed opportunities for refining trading strategies based on past performance.",
      "quickNote": "Regularly summarize insights from lot sizing audits to enhance future trading decisions.",
      "mentorText": "After each audit, take time to reflect on what you learned about your lot sizing decisions. This reflection is where growth happens.",
      "mentorAnalogy": "Summarizing insights is like a coach reviewing game footage; it reveals strengths and weaknesses that can be addressed for future success."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  }
];
