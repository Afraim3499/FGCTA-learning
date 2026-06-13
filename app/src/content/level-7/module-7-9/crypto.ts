import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Execution Debrief Framework",
    "label": "Crypto Track",
    "body": "### Core Framework: Execution Debrief Protocol\nThe execution debrief framework is essential for aligning actual trades with pre-planned strategies. This card outlines **the structured approach to review trades based on execution criteria rather than profit and loss**.\n\n* **Pre-Execution Comparison**: Document the planned entry and exit points alongside the rationale for each trade. Compare these with actual execution to identify deviations.\n* **Performance Metrics**: Analyze key performance indicators such as win rate, average trade duration, and risk-reward ratio. Focus on how these metrics align with the pre-defined strategy.\n* **Feedback Loop**: Establish a system for integrating insights from the debrief into future trading plans. Ensure that lessons learned are documented for continuous improvement.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Debrief",
          "definition": "A structured review process comparing actual trade executions against planned strategies."
        }
      ],
      "whyThisMatters": "A systematic debrief ensures that traders refine their strategies based on actual performance rather than emotional responses to P&L fluctuations.",
      "realLifeExample": "After executing a long position on BTC at $30,000, the debrief revealed that the planned exit was at $32,000, but the position was closed at $31,500 due to market volatility.",
      "commonMistake": "Traders often focus too heavily on profit outcomes rather than the execution process, leading to missed learning opportunities.",
      "quickNote": "Focus on execution alignment, not just profit.",
      "mentorText": "When you review your trades, focus on whether you followed your plan. Did you stick to your entry and exit points? That’s where the real learning happens.",
      "mentorAnalogy": "Think of this process like a post-flight analysis for pilots. They review their flight against the flight plan to ensure every maneuver aligns with safety protocols and operational goals."
    },
    "taskData": null,
    "visualKey": "execution-debrief-log"
  },
  {
    "type": "concept",
    "title": "Auditing Funding Rates in Crypto Trades",
    "label": "Crypto Track",
    "body": "### Core Audit: Funding Rate Assessment\nFunding rates can significantly impact the profitability of crypto trades. This card emphasizes **the importance of auditing funding rates during the debrief process**.\n\n* **Funding Rate Calculation**: Determine the funding rate applied to your positions during the holding period. This rate can vary based on market conditions and should be factored into overall trade costs.\n* **Impact Analysis**: Assess how the funding rate affected the overall trade outcome. Calculate the net profit or loss by including the funding costs in your analysis.\n* **Strategy Adjustment**: If funding rates consistently impact your profitability, consider adjusting your trading strategy or the selection of instruments to mitigate these costs.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment made between long and short positions in a crypto market to maintain balance."
        }
      ],
      "whyThisMatters": "Incorporating funding rates into your debrief ensures a comprehensive understanding of trade costs, leading to more informed decision-making.",
      "realLifeExample": "During a trade on ETH, the funding rate was 0.01% per 8 hours. If held for 24 hours, this would add 0.03% to the total cost of the position, impacting net returns.",
      "commonMistake": "Traders often overlook funding rates, leading to an inaccurate assessment of trade profitability.",
      "quickNote": "Always factor funding rates into your trade evaluations.",
      "mentorText": "When you review your trades, include the funding costs. If you’re paying too much to hold a position, it can eat into your profits significantly.",
      "mentorAnalogy": "Consider this like a chef evaluating ingredient costs after a meal. If the cost of key ingredients is too high, it impacts the overall profitability of the dish."
    },
    "taskData": null,
    "visualKey": "execution-debrief-log"
  },
  {
    "type": "concept",
    "title": "Evaluating Leverage Execution in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Evaluation: Leverage Utilization\nLeverage can amplify both gains and losses in crypto trading. This card focuses on **evaluating the execution of leverage against the planned strategy**.\n\n* **Leverage Assessment**: Review the leverage used in each trade compared to the pre-defined leverage strategy. Document the rationale for any deviations from the plan.\n* **Risk Exposure Analysis**: Calculate the risk exposure based on the leverage applied. Ensure that this aligns with your risk management framework and does not exceed acceptable limits.\n* **Performance Review**: Analyze how leverage impacted trade outcomes. Determine if the leverage used contributed positively or negatively to the overall performance of the strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase the potential return of an investment."
        }
      ],
      "whyThisMatters": "Understanding leverage execution is critical for managing risk and ensuring that trades align with your overall trading strategy.",
      "realLifeExample": "In a trade on LTC, leverage of 5x was planned, but 10x was executed due to market conditions. The debrief revealed a higher risk exposure than intended, leading to a significant drawdown.",
      "commonMistake": "Traders often misuse leverage, leading to unintended risk exposure that can derail their trading plan.",
      "quickNote": "Evaluate leverage against your planned strategy rigorously.",
      "mentorText": "When reviewing your leverage, ask yourself if you adhered to your plan. If you deviated, understand why and how it affected your results.",
      "mentorAnalogy": "Think of it like an architect evaluating the structural integrity of a building. If the leverage is too high, it can compromise the entire structure."
    },
    "taskData": null,
    "visualKey": "execution-debrief-log"
  },
  {
    "type": "concept",
    "title": "Assessing Timing of Crypto Trade Executions",
    "label": "Crypto Track",
    "body": "### Core Assessment: Timing Analysis\nThe timing of trade executions is critical to achieving desired outcomes. This card outlines **how to assess the timing of executed trades against planned entry and exit points**.\n\n* **Entry and Exit Timing Review**: Document the actual entry and exit times for each trade. Compare these with the planned timings to identify any discrepancies.\n* **Market Conditions Impact**: Analyze how market conditions at the time of execution influenced the timing. Consider volatility, liquidity, and news events that may have affected your trades.\n* **Improvement Identification**: Identify areas where timing could be improved. Develop strategies to enhance execution timing based on historical performance and market behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Timing",
          "definition": "The specific moments when trades are entered and exited in the market."
        }
      ],
      "whyThisMatters": "Accurate timing analysis allows traders to refine their execution strategies, leading to improved performance in future trades.",
      "realLifeExample": "In a trade on XRP, the planned entry was set for 10:00 AM, but execution occurred at 10:15 AM due to market volatility, resulting in a less favorable price.",
      "commonMistake": "Traders often fail to document or analyze the timing of their trades, missing opportunities for improvement.",
      "quickNote": "Assess execution timing rigorously for future enhancements.",
      "mentorText": "When you look back at your entries and exits, focus on whether you executed at the right moments. Timing can make or break a trade.",
      "mentorAnalogy": "This process is akin to a conductor reviewing a symphony performance. Each note must be played at the right time for the piece to resonate correctly."
    },
    "taskData": null,
    "visualKey": "execution-debrief-log"
  },
  {
    "type": "concept",
    "title": "Incorporating Risk Assessment in Crypto Execution Debriefs",
    "label": "Crypto Track",
    "body": "### Core Scenario: Risk Assessment Integration\nIntegrating risk assessment into the execution debrief process ensures that future trades are informed by previous risk exposures. This card outlines **how to systematically evaluate risk factors post-execution**.\n\n* **Risk Exposure Review**: Analyze the risk taken on each trade by comparing the actual exposure against the pre-defined risk parameters. Document any deviations and their impact on overall strategy.\n* **Volatility Assessment**: Evaluate the volatility of the crypto assets traded during the session. Identify how unexpected price movements affected execution and whether adjustments to risk parameters are necessary.\n* **Risk-Reward Ratio Analysis**: Assess the risk-reward ratios of executed trades. Ensure that the ratios align with the pre-planned scenarios and adjust future strategies accordingly based on findings.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Assessment",
          "definition": "The process of evaluating the potential risks involved in a trading strategy."
        }
      ],
      "whyThisMatters": "Incorporating risk assessment into debriefs enhances decision-making and minimizes future exposure to unforeseen market conditions.",
      "realLifeExample": "During a session trading BTC/USD, a trader executed a long position at $45,000 with a stop-loss at $44,500. Post-session, the debrief revealed a 5% deviation from the risk threshold due to unexpected volatility, prompting a review of risk parameters.",
      "commonMistake": "Traders often overlook documenting risk exposure, leading to repeated mistakes without learning from past experiences.",
      "quickNote": "Integrate risk assessment into every execution debrief to refine future trading strategies.",
      "mentorText": "When reviewing your trades, focus on how well you managed risk. If you deviated from your planned risk parameters, identify why and how to adjust next time.",
      "mentorAnalogy": "Think of this process like a flight debrief for pilots. They review not just the flight path but also any turbulence encountered, ensuring future flights are safer and more efficient."
    },
    "taskData": null,
    "visualKey": "execution-debrief-log"
  },
  {
    "type": "concept",
    "title": "Identifying Common Execution Errors in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Scenario: Execution Error Identification\nRecognizing common execution errors is critical for improving trading performance. This card details **how to systematically identify and categorize execution errors during debriefs**.\n\n* **Error Categorization**: Classify errors into categories such as timing errors, order execution mistakes, and slippage incidents. Maintain a log to track frequency and impact on trading outcomes.\n* **Impact Analysis**: For each identified error, assess its impact on the overall trade performance. Determine whether the error led to increased losses or missed profit opportunities.\n* **Corrective Action Plan**: Develop a corrective action plan for each type of error identified. Specify steps to mitigate these errors in future sessions, including adjustments to execution protocols or trading strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Error",
          "definition": "Mistakes made during the process of placing or managing trades."
        }
      ],
      "whyThisMatters": "Identifying execution errors allows traders to refine their strategies and reduce the likelihood of repeating the same mistakes.",
      "realLifeExample": "In a recent session, a trader attempted to sell ETH at $3,200 but executed the order at $3,250 due to a timing error. The debrief revealed this error cost the trader an additional $500, highlighting the need for improved execution timing.",
      "commonMistake": "Many traders fail to document execution errors, resulting in a lack of awareness and repeated mistakes in future trades.",
      "quickNote": "Systematically identify and categorize execution errors to enhance trading performance.",
      "mentorText": "After each session, take a hard look at where you went wrong. If you executed an order at the wrong price, note it down and figure out how to prevent it next time.",
      "mentorAnalogy": "This process is akin to a surgeon reviewing their procedure outcomes. They analyze what went wrong during surgery to ensure better results in future operations."
    },
    "taskData": null,
    "visualKey": "execution-debrief-log"
  },
  {
    "type": "practice",
    "title": "Conducting a Crypto Debrief Simulation",
    "label": "Crypto Track",
    "body": "### Core Scenario: Practical Debrief Simulation\nEngaging in a simulation of a crypto debrief allows traders to apply learned concepts in a controlled environment. This card provides a framework for **conducting a thorough debrief of a recent trading session**.\n\n* **Session Review Setup**: Gather all relevant data from the trading session, including executed orders, market conditions, and any deviations from the plan. Ensure all participants are familiar with the session's objectives.\n* **Execution Analysis**: Each participant presents their trades, focusing on execution timing, risk management, and any errors encountered. Use a structured format to ensure comprehensive coverage of each trade.\n* **Feedback Loop**: Facilitate a feedback session where participants discuss insights gained from the analysis. Encourage constructive criticism and collaborative problem-solving to enhance future trading strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Debrief Simulation",
          "definition": "A practice session where traders analyze their performance in a controlled environment."
        }
      ],
      "whyThisMatters": "Simulating a debrief reinforces learning and prepares traders for real-world evaluations of their performance.",
      "realLifeExample": "In a simulation, a group of traders reviews a session where they traded LTC/USD. They analyze a specific trade where LTC was bought at $150 and sold at $155, discussing execution timing and risk management strategies applied.",
      "commonMistake": "Traders often overlook the importance of structured feedback during simulations, leading to missed learning opportunities.",
      "quickNote": "Conduct a structured debrief simulation to practice and refine your execution analysis skills.",
      "mentorText": "Treat this simulation like a dress rehearsal. Review your trades as if they were live, and don't shy away from critiquing your performance. It's about learning and improving.",
      "mentorAnalogy": "Think of this simulation as a sports team reviewing game footage. They analyze plays, identify mistakes, and strategize for future games to enhance performance."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated debrief, which aspect should be prioritized for discussion?",
      "options": [
        {
          "id": "0",
          "text": "Execution timing and its impact on trade outcomes.",
          "isCorrect": true,
          "feedback": "Correct. Execution timing is crucial as it directly affects the profitability of trades."
        },
        {
          "id": "1",
          "text": "The overall market sentiment during the session.",
          "isCorrect": false,
          "feedback": "While market sentiment is important, the focus should be on individual trade execution."
        },
        {
          "id": "2",
          "text": "General trading strategies used throughout the session.",
          "isCorrect": false,
          "feedback": "General strategies should be discussed, but specific execution details take precedence in a debrief."
        },
        {
          "id": "3",
          "text": "The performance of other traders in the group.",
          "isCorrect": false,
          "feedback": "The focus should remain on personal execution and learning from one's own trades."
        }
      ]
    },
    "visualKey": "execution-debrief-log"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Execution Debrief Concepts",
    "label": "Crypto Track",
    "body": "### Core Scenario: Recap of Key Concepts\nThis summary consolidates the essential elements of the crypto execution debrief process. Understanding these concepts is vital for continuous improvement in trading performance.\n\n* **Risk Assessment Integration**: Always incorporate risk assessment into your debriefs to refine your approach and minimize future exposure. Document deviations from risk parameters.\n* **Error Identification**: Regularly identify and categorize execution errors to understand their impact on trading outcomes. Develop corrective action plans to address these errors systematically.\n* **Debrief Simulation**: Engage in practical simulations to reinforce learning. Use structured feedback to enhance execution analysis and prepare for real trading evaluations.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Debrief",
          "definition": "A post-session review process to evaluate trade performance against pre-planned scenarios."
        }
      ],
      "whyThisMatters": "Summarizing these concepts ensures traders have a clear framework for conducting effective execution debriefs, leading to improved trading strategies.",
      "realLifeExample": "After summarizing the debrief concepts, a trader reflects on a session where they executed trades on XRP/USD, applying risk assessment and identifying execution errors, leading to a more disciplined approach in future sessions.",
      "commonMistake": "Traders often neglect to review and summarize key concepts, missing out on valuable insights for future trading sessions.",
      "quickNote": "Regularly review and summarize key debrief concepts to enhance your trading discipline.",
      "mentorText": "Make it a habit to recap what you've learned after each debrief. This will solidify your understanding and keep you focused on continuous improvement.",
      "mentorAnalogy": "Consider this summary like a project manager reviewing the outcomes of a completed project. They assess what went well and what needs adjustment for future projects."
    },
    "taskData": null,
    "visualKey": "execution-debrief-log"
  }
];
