import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Auditing Gold Slippage in Trading Journals",
    "label": "Gold Track",
    "body": "### Core Scenario: Slippage Audit in Gold Trading\nAuditing slippage in trading journals ensures that recorded slippage reflects realistic market conditions during gold trades. This card teaches **how to systematically review slippage entries for accuracy**.\n\n* **Slippage Documentation**: Ensure that every trade entry includes the slippage experienced, noting the price at which the trade was executed versus the expected entry price.\n* **Market Conditions Correlation**: Cross-reference slippage records with market events (e.g., news releases) to validate the reasonableness of the documented slippage.\n* **Quantitative Analysis**: Calculate the average slippage across multiple trades to identify any discrepancies that may indicate a need for strategy adjustment or broker evaluation.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Accurate slippage records are essential for evaluating the effectiveness of trading strategies under real market conditions.",
      "realLifeExample": "In a session on March 15, 2023, gold futures experienced a spike due to geopolitical tensions, resulting in slippage of 1.5% on a trade executed at $1,950 instead of the anticipated $1,925.",
      "commonMistake": "Failing to document slippage for every trade can lead to an incomplete understanding of trading performance.",
      "quickNote": "Audit slippage entries against market conditions to ensure accuracy.",
      "mentorText": "When reviewing your journal, always check if the slippage you recorded aligns with the market events. If you noted a significant slippage, ask yourself if there was a corresponding market catalyst.",
      "mentorAnalogy": "Think of your trading journal like a flight log; just as pilots document every deviation from the flight path due to weather or technical issues, you must record slippage to understand your trading journey."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Evaluating Spread Costs in Gold Trading",
    "label": "Gold Track",
    "body": "### Core Scenario: Spread Cost Assessment\nEvaluating spread costs in trading journals ensures that recorded spreads align with actual trading scenarios in gold markets. This card teaches **how to analyze spread costs for accuracy and relevance**.\n\n* **Spread Entry Verification**: Confirm that each trade entry includes the spread cost at the time of execution, comparing it to the market data for that period.\n* **Contextual Analysis**: Assess how spreads vary during different market conditions, such as high volatility versus low liquidity, to ensure that your journal reflects these variations.\n* **Impact on Trade Decisions**: Analyze how spread costs influence your entry and exit decisions, ensuring that your strategy accounts for these costs in profit calculations.",
    "context": {
      "keyTerms": [
        {
          "term": "Spread Cost",
          "definition": "The difference between the bid and ask price of a trading instrument, representing the cost of entering a trade."
        }
      ],
      "whyThisMatters": "Accurate spread cost assessments are critical for understanding the true cost of trading and its impact on profitability.",
      "realLifeExample": "On April 10, 2023, during a market opening, the spread for gold was recorded at $3.00, while the average spread during stable conditions was $1.50, indicating a need for careful evaluation of trade entries.",
      "commonMistake": "Ignoring the variability of spread costs in different market conditions can lead to unrealistic profit expectations.",
      "quickNote": "Always verify spread costs against market data for accuracy.",
      "mentorText": "When you log your trades, make sure to note the spread at the time of execution. If you see a significant difference from your expectations, investigate why that occurred.",
      "mentorAnalogy": "Consider spread costs like fuel consumption in aviation; just as pilots must account for fuel efficiency under different conditions, traders must evaluate spread costs to understand their trading efficiency."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Identifying Patterns of Slippage",
    "label": "Gold Track",
    "body": "### Core Scenario: Slippage Pattern Recognition\nIdentifying patterns of slippage in gold trading from journal entries enhances understanding of market conditions affecting trades. This card teaches **how to systematically analyze slippage data for recurring trends**.\n\n* **Data Compilation**: Aggregate slippage data over multiple trades to identify trends, noting the frequency and magnitude of slippage occurrences.\n* **Market Condition Correlation**: Examine slippage patterns in relation to specific market events, such as economic reports or geopolitical developments, to identify potential triggers.\n* **Strategic Adjustments**: Use identified patterns to inform future trading strategies, adjusting entry and exit points based on historical slippage data.",
    "context": {
      "keyTerms": [
        {
          "term": "Pattern Recognition",
          "definition": "The process of identifying recurring trends or behaviors in data over time."
        }
      ],
      "whyThisMatters": "Recognizing slippage patterns allows traders to adapt strategies to mitigate risks associated with adverse market conditions.",
      "realLifeExample": "After analyzing 20 gold trades over a month, it was found that slippage increased by 2% during U.S. Federal Reserve announcements, prompting a strategy adjustment for future trades.",
      "commonMistake": "Failing to analyze slippage over time can result in missed opportunities to refine trading strategies.",
      "quickNote": "Compile slippage data to identify market condition correlations.",
      "mentorText": "When you notice slippage patterns, take a moment to reflect on what market conditions were present. This insight can help you anticipate future slippage and adjust your strategy accordingly.",
      "mentorAnalogy": "Think of identifying slippage patterns like a detective analyzing crime scenes; by recognizing recurring factors, you can anticipate future occurrences and prepare accordingly."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Documenting Impact of Spread on P&L",
    "label": "Gold Track",
    "body": "### Core Scenario: Spread Impact Documentation\nDocumenting the impact of spread costs on profit and loss outcomes in gold trading journals is essential for accurate performance evaluation. This card teaches **how to effectively record and analyze spread effects on P&L**.\n\n* **P&L Calculation Methodology**: Ensure that every trade entry includes a clear calculation of P&L that factors in spread costs, providing a realistic view of trading performance.\n* **Historical Analysis**: Review past trades to assess how spread costs have affected overall profitability, identifying trends that may require strategic adjustments.\n* **Performance Metrics**: Develop metrics that quantify the impact of spread costs on your trading performance, allowing for better decision-making in future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Profit and Loss (P&L)",
          "definition": "The financial result of a trading activity, calculated as the difference between total revenue and total costs."
        }
      ],
      "whyThisMatters": "Understanding the impact of spread costs on P&L is vital for accurate performance assessment and strategy refinement.",
      "realLifeExample": "In a review of trades from May 2023, it was found that spread costs accounted for a 15% reduction in overall P&L, prompting a reevaluation of trading strategies during high-spread periods.",
      "commonMistake": "Neglecting to factor in spread costs when calculating P&L can lead to an inflated perception of trading success.",
      "quickNote": "Always document spread costs in P&L calculations for accurate performance assessment.",
      "mentorText": "When you calculate your P&L, make sure to include the spread costs. This will give you a clearer picture of your actual trading success and help you make informed decisions moving forward.",
      "mentorAnalogy": "Documenting spread impact on P&L is like a chef accounting for ingredient costs in a recipe; without knowing the true cost of each component, the final dish's value remains unclear."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Recognizing Misalignment in Gold Trade Execution",
    "label": "Gold Track",
    "body": "### Core Scenario: Identifying Execution Gaps\nMisalignment in gold trade execution can lead to significant discrepancies between planned and actual performance. This card focuses on **how to identify slippage and execution errors documented in trading journals**.\n\n* **Documenting Slippage**: Record the planned entry and exit points alongside actual execution prices. Analyze the difference to quantify slippage.\n* **Comparative Analysis**: Compare slippage across multiple trades to identify patterns or recurring issues that deviate from the planned execution strategy.\n* **Impact Assessment**: Evaluate how misalignment affects overall trade outcomes, focusing on the relationship between slippage and profitability metrics.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Recognizing execution misalignment is critical for refining trading strategies and improving adherence to planned scenarios.",
      "realLifeExample": "In a recent session, a gold trade planned at $1,800 executed at $1,805 due to slippage of 5 pips, resulting in a 1.25% loss instead of the anticipated gain.",
      "commonMistake": "Traders often overlook documenting slippage, leading to an incomplete analysis of trade performance.",
      "quickNote": "Consistent documentation of slippage reveals execution misalignments that can be corrected.",
      "mentorText": "When reviewing your journal, focus on the discrepancies between your planned entries and actual executions. This will highlight areas needing adjustment.",
      "mentorAnalogy": "Think of this process like a pilot reviewing flight logs; any deviation from the planned flight path must be analyzed to ensure future flights stay on course."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Creating a Slippage Audit Framework",
    "label": "Gold Track",
    "body": "### Core Scenario: Structuring Your Audit\nA structured framework for auditing slippage in gold trades enhances scenario adherence and performance evaluation. This card teaches **how to build an effective slippage audit framework**.\n\n* **Audit Components**: Define key components of the audit, including planned vs. actual prices, time of execution, and market conditions at the time of trade.\n* **Data Collection**: Establish a systematic approach for collecting data during each trading session, ensuring consistency in how slippage is recorded.\n* **Review Mechanism**: Create a regular review schedule to analyze collected data, focusing on identifying trends and making necessary adjustments to trading strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Audit Framework",
          "definition": "A structured approach to systematically review and analyze trading performance metrics."
        }
      ],
      "whyThisMatters": "A robust slippage audit framework enables traders to systematically improve their execution strategies and minimize future discrepancies.",
      "realLifeExample": "After implementing a slippage audit framework, a trader discovered that 70% of their trades experienced slippage during high volatility periods, prompting a strategy revision.",
      "commonMistake": "Failing to define clear components in the audit framework can lead to incomplete data analysis and missed insights.",
      "quickNote": "A well-structured audit framework is essential for consistent evaluation of slippage in trading journals.",
      "mentorText": "Establish a framework that captures all relevant data points. This ensures that your audits are thorough and actionable.",
      "mentorAnalogy": "Creating a slippage audit framework is akin to an architect drafting detailed blueprints; every element must be accounted for to ensure structural integrity."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Gold Slippage Audits",
    "label": "Gold Track",
    "body": "### Core Scenario: Simulating Slippage Audits\nEngaging in practical exercises enhances the understanding of slippage and spread costs in gold trading journals. This card focuses on **simulating the auditing process for effective scenario adherence**.\n\n* **Scenario Simulation**: Review a set of hypothetical trades with varying slippage scenarios. Document the planned and actual execution prices to analyze the impact on profitability.\n* **Cost Analysis**: Calculate the total slippage costs incurred over a series of trades and assess how these costs affect overall trading performance.\n* **Feedback Loop**: Create a feedback mechanism based on the simulated results to adjust future trading strategies for improved execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Spread Costs",
          "definition": "The difference between the bid and ask price in trading, impacting overall trade profitability."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce the theoretical aspects of slippage audits, enabling traders to apply learned concepts effectively.",
      "realLifeExample": "In a simulated session, a trader analyzed 10 gold trades with an average slippage of 3 pips, leading to a total cost of $300, prompting a review of execution strategies.",
      "commonMistake": "Traders often skip the simulation phase, missing out on valuable insights that can be gained from practical application.",
      "quickNote": "Simulating slippage audits provides hands-on experience that enhances understanding and application of concepts.",
      "mentorText": "Practice with real scenarios to see how slippage impacts your trades. This will prepare you for real-market conditions.",
      "mentorAnalogy": "Think of these exercises like a surgeon practicing on a simulation model; it builds muscle memory and sharpens skills before operating on real patients."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated audit, you find that a trade executed at $1,805 instead of the planned $1,800. What is the primary action you should take?",
      "options": [
        {
          "id": "0",
          "text": "Document the slippage and analyze its impact on profitability.",
          "isCorrect": true,
          "feedback": "Documenting the slippage allows for a thorough analysis of how execution errors affect overall performance."
        },
        {
          "id": "1",
          "text": "Ignore the slippage as it is a minor issue.",
          "isCorrect": false,
          "feedback": "Ignoring slippage can lead to repeated mistakes and unrecognized costs."
        },
        {
          "id": "2",
          "text": "Change the planned entry price for future trades.",
          "isCorrect": false,
          "feedback": "Changing the planned entry without understanding the cause of slippage may not address the underlying issue."
        },
        {
          "id": "3",
          "text": "Blame market conditions for the slippage.",
          "isCorrect": false,
          "feedback": "While market conditions can affect slippage, it is essential to analyze and document the specific impact on your trades."
        }
      ]
    },
    "visualKey": "journal-process-audit"
  },
  {
    "type": "summary",
    "title": "Key Insights on Gold Trading Audits",
    "label": "Gold Track",
    "body": "### Core Scenario: Consolidating Audit Findings\nSummarizing insights from slippage and spread cost audits in gold trading journals is essential for continuous improvement. This card emphasizes **the key takeaways from auditing practices**.\n\n* **Importance of Documentation**: Consistent documentation of slippage and spread costs is critical for identifying patterns and making informed adjustments.\n* **Trend Analysis**: Regularly reviewing audit findings helps traders recognize trends in slippage, allowing for proactive strategy modifications.\n* **Performance Metrics**: Establishing clear performance metrics based on audit results enables traders to measure the effectiveness of their execution strategies over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the effectiveness of trading strategies."
        }
      ],
      "whyThisMatters": "Summarizing insights from audits allows traders to refine their strategies and enhance overall trading performance.",
      "realLifeExample": "After summarizing audit findings, a trader identified that slippage was consistently higher during the London session, leading to a strategic shift in trading hours.",
      "commonMistake": "Traders often fail to consolidate insights from audits, missing opportunities for strategic improvements.",
      "quickNote": "Regularly summarizing audit insights is vital for ongoing refinement of trading strategies.",
      "mentorText": "Take the time to review your audit findings. This will guide your future trading decisions and improve your execution.",
      "mentorAnalogy": "Think of summarizing audit insights like a coach reviewing game footage; it highlights strengths and weaknesses, guiding future performance improvements."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  }
];
