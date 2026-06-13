import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Auditing Execution Speeds in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Scenario: Execution Speed Audit\nAuditing execution speeds ensures that trades are executed in alignment with market conditions and strategy parameters. This card teaches **how to systematically review execution speeds recorded in your crypto trading journal**.\n\n* **Execution Time Benchmarking**: Establish benchmarks for execution speeds based on historical data and market volatility. For example, if BTC trades typically execute within 2 seconds during high volatility, ensure your journal reflects this standard.\n* **Discrepancy Analysis**: Identify discrepancies between recorded execution times and benchmarks. If a trade was executed in 5 seconds during a volatile session, document the conditions that caused the delay.\n* **Impact Assessment**: Analyze how execution speed variations affect trade outcomes. For instance, a delayed execution of a long position in ETH during a bullish breakout could result in missed profit opportunities or increased slippage.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Speed",
          "definition": "The time taken to execute a trade from the moment of order placement."
        }
      ],
      "whyThisMatters": "Understanding execution speeds allows traders to refine their strategies and improve overall performance by aligning with market dynamics.",
      "realLifeExample": "During a recent surge in BTC, a trader noted an execution speed of 4 seconds while the benchmark was 2 seconds, leading to a missed entry point at $45,000.",
      "commonMistake": "Traders often overlook the importance of documenting execution speeds, leading to unrecognized inefficiencies in their trading process.",
      "quickNote": "Audit execution speeds to ensure alignment with market conditions and strategy.",
      "mentorText": "When reviewing your journal, focus on the execution times. If you see delays, ask yourself why. Did market conditions change? Were you using the right tools?",
      "mentorAnalogy": "Think of execution speed like a pit stop in a race; every second counts. A slow pit stop can cost you the lead, just as a delayed trade can cost you profits."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Evaluating Margin Adjustments in Crypto Trades",
    "label": "Crypto Track",
    "body": "### Core Scenario: Margin Adjustment Evaluation\nEvaluating margin adjustments ensures that risk management strategies are effectively documented and adhered to in trading journals. This card focuses on **how to assess margin adjustments for crypto trades**.\n\n* **Margin Adjustment Documentation**: Record all margin adjustments made during trades, including the rationale behind each change. For instance, if you increased your margin on a long position in LTC from 10% to 15% due to increased volatility, document the reasoning clearly.\n* **Risk Management Alignment**: Ensure that margin adjustments reflect your predefined risk management strategies. If your strategy dictates a maximum risk of 2% per trade, verify that margin adjustments do not exceed this threshold.\n* **Performance Correlation**: Analyze the correlation between margin adjustments and trade performance. For example, if increasing margin on a trade resulted in a 20% profit, assess whether this aligns with your overall risk profile and strategy effectiveness.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Adjustment",
          "definition": "Changes made to the margin requirements for a trade based on market conditions or strategy."
        }
      ],
      "whyThisMatters": "Proper evaluation of margin adjustments ensures that risk is managed effectively, preventing potential losses from over-leveraging.",
      "realLifeExample": "A trader adjusted the margin on a short position in XRP from 5% to 10% as the market turned bearish, resulting in a successful exit at a 15% profit.",
      "commonMistake": "Traders frequently neglect to document the rationale for margin adjustments, leading to confusion and potential misalignment with their risk strategies.",
      "quickNote": "Evaluate margin adjustments to ensure they align with your risk management strategies.",
      "mentorText": "When you adjust your margin, make sure you know why. If you can't justify the change, reconsider your strategy.",
      "mentorAnalogy": "Adjusting your margin is like recalibrating the fuel in a jet; too much can lead to a crash, while too little can leave you grounded."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Identifying Delays in Execution",
    "label": "Crypto Track",
    "body": "### Core Scenario: Delay Identification\nIdentifying delays in execution times is crucial for understanding factors that impact trade outcomes. This card teaches **how to systematically identify and analyze delays in your crypto trading journal**.\n\n* **Delay Tracking Methodology**: Implement a consistent method for tracking execution delays in your journal. For example, note the time of order placement and the time of execution for each trade, particularly during high volatility periods.\n* **Root Cause Analysis**: When delays are identified, conduct a root cause analysis. If a trade in SOL was executed 6 seconds late during a market spike, investigate whether it was due to network congestion or platform latency.\n* **Performance Impact Review**: Assess how execution delays affect overall trade performance. If a delayed execution resulted in a 10% loss compared to a timely execution, document this impact for future reference and strategy adjustment.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Delay",
          "definition": "The time difference between order placement and actual trade execution."
        }
      ],
      "whyThisMatters": "Identifying execution delays helps traders understand the reliability of their trading platforms and refine their strategies accordingly.",
      "realLifeExample": "A trader experienced a 7-second delay in executing a buy order for DOT during a market surge, resulting in a missed entry at $30, which later peaked at $35.",
      "commonMistake": "Traders often fail to document delays, missing critical insights that could improve their execution strategies.",
      "quickNote": "Identify execution delays to enhance understanding of trade outcome factors.",
      "mentorText": "When you notice a delay, don't just brush it off. Investigate why it happened; this knowledge can save you money in the future.",
      "mentorAnalogy": "Identifying execution delays is like a surgeon reviewing their operating times; understanding delays can prevent complications in future procedures."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Documenting the Impact of Execution Speed on P&L",
    "label": "Crypto Track",
    "body": "### Core Scenario: P&L Impact Documentation\nDocumenting the impact of execution speeds on profit and loss outcomes is essential for refining trading strategies. This card focuses on **how to accurately document the influence of execution speeds on your P&L in crypto trading journals**.\n\n* **P&L Correlation Analysis**: Analyze the correlation between execution speeds and P&L outcomes. For instance, if a fast execution on a trade in ADA resulted in a 15% gain, document the speed and market conditions that contributed to this outcome.\n* **Execution Speed Benchmarking**: Establish benchmarks for optimal execution speeds based on historical performance data. If trades executed within 1 second consistently yield better results than those executed in 3 seconds, note this in your journal.\n* **Strategic Adjustments**: Use documented P&L impacts to adjust trading strategies. If slower executions consistently lead to losses, consider refining your order types or execution methods to improve speed.\n",
    "context": {
      "keyTerms": [
        {
          "term": "P&L Impact",
          "definition": "The effect of trade execution speed on profit and loss outcomes."
        }
      ],
      "whyThisMatters": "Documenting execution speed impacts allows traders to make informed adjustments to their strategies, optimizing performance.",
      "realLifeExample": "A trader noted that executing a buy order for LINK in 2 seconds yielded a 12% profit, while a 5-second execution resulted in only 5%, prompting a strategy review.",
      "commonMistake": "Traders often neglect to connect execution speeds with P&L outcomes, missing valuable insights for strategy improvement.",
      "quickNote": "Document the impact of execution speeds on your P&L to refine trading strategies.",
      "mentorText": "When you see a trade outcome, ask yourself how execution speed played a role. This insight can guide your future trades.",
      "mentorAnalogy": "Documenting execution speed impacts is like a chef noting cooking times; understanding how timing affects flavor can elevate the quality of every dish."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Recognizing Patterns in Margin Adjustments",
    "label": "Crypto Track",
    "body": "### Core Scenario: Margin Adjustment Patterns\nRecognizing patterns in margin adjustments allows traders to refine their scenario planning and execution strategies. This card focuses on **identifying recurring margin behaviors from trading journals**.\n\n* **Historical Margin Analysis**: Review past trades to identify how margin adjustments correlate with specific market conditions, such as volatility spikes or liquidity changes.\n* **Adjustment Triggers**: Document the conditions that led to margin increases or decreases, noting the impact on trade outcomes and adherence to planned scenarios.\n* **Pattern Recognition Techniques**: Utilize statistical tools to analyze margin adjustment frequency and magnitude, enhancing predictive capabilities for future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Adjustment",
          "definition": "The change in the amount of capital required to maintain a position in a trading account."
        }
      ],
      "whyThisMatters": "Understanding margin patterns is essential for optimizing capital allocation and risk management in crypto trading.",
      "realLifeExample": "During a volatile session on BTC/USD, a trader noted a 15% increase in margin requirements, which correlated with a 30% price drop, impacting their risk management strategy.",
      "commonMistake": "Traders often overlook the significance of margin adjustments, failing to document their impact on trade performance.",
      "quickNote": "Identify margin patterns to enhance future scenario planning.",
      "mentorText": "When reviewing your journal, focus on how margin adjustments influenced your trades. Did you increase your margin during high volatility? That could indicate a pattern worth noting.",
      "mentorAnalogy": "Think of margin adjustments like fuel levels in an aircraft; understanding when to refuel based on flight conditions is critical for a safe journey."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "concept",
    "title": "Creating a Framework for Crypto Execution Audits",
    "label": "Crypto Track",
    "body": "### Core Scenario: Execution Audit Framework\nDeveloping a robust framework for auditing execution speeds and margin adjustments is vital for maintaining scenario adherence. This card outlines **how to structure your audit process effectively**.\n\n* **Audit Components**: Define key components of the audit, including execution speed benchmarks, margin adjustment records, and scenario adherence metrics.\n* **Data Collection Methods**: Establish systematic methods for collecting execution data, ensuring that all relevant metrics are captured consistently across trades.\n* **Performance Review Protocols**: Create protocols for reviewing audit findings, focusing on actionable insights that can inform future trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Speed",
          "definition": "The time taken to execute a trade order in the market."
        }
      ],
      "whyThisMatters": "A structured audit framework enhances the reliability of performance reviews and informs strategic adjustments in trading practices.",
      "realLifeExample": "A trader implemented a framework that revealed execution speeds lagged by 2 seconds during high volatility, prompting a review of their order routing practices.",
      "commonMistake": "Failing to document execution speeds consistently leads to incomplete audits and missed opportunities for improvement.",
      "quickNote": "Establish a clear framework for auditing execution and margin adjustments.",
      "mentorText": "When you set up your audit framework, think about what data is essential. Are you capturing execution speeds accurately? This will help you identify areas for improvement.",
      "mentorAnalogy": "Creating an audit framework is like designing a safety checklist for a pilot; every detail matters to ensure a smooth flight."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Crypto Execution Audits",
    "label": "Crypto Track",
    "body": "### Core Scenario: Simulating Execution Audits\nEngaging in practical exercises simulating execution audits reinforces the skills necessary for effective scenario adherence. This card provides **hands-on tasks to apply your knowledge**.\n\n* **Scenario Simulation**: Analyze a set of trades where execution speeds varied significantly. Identify the impact on margin adjustments and overall trade performance.\n* **Margin Adjustment Review**: Conduct a mock audit of a trading journal, focusing on how margin adjustments were documented and their correlation with execution speeds.\n* **Feedback Loop Creation**: Develop a feedback loop based on your findings, outlining steps to improve execution and margin management in future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Feedback Loop",
          "definition": "A process where outputs of a system are circled back and used as inputs."
        }
      ],
      "whyThisMatters": "Practical exercises solidify theoretical knowledge, enabling traders to apply concepts directly to their trading practices.",
      "realLifeExample": "In a simulated exercise, a trader discovered that a 3-second delay in execution led to a 5% decrease in profit on ETH trades during high volatility.",
      "commonMistake": "Traders often skip practical exercises, missing the opportunity to apply theoretical knowledge to real-world scenarios.",
      "quickNote": "Practice auditing execution speeds and margin adjustments through simulations.",
      "mentorText": "As you practice, focus on how execution speed affects your trades. Did a delay cost you? Document that and learn from it.",
      "mentorAnalogy": "Simulating audits is like a flight simulator for pilots; it prepares you for real conditions without the risk."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are reviewing a trading journal and notice that execution speeds were consistently slow during high volatility. What should be your first step?",
      "options": [
        {
          "id": "0",
          "text": "Analyze the correlation between execution speeds and margin adjustments.",
          "isCorrect": true,
          "feedback": "Correct. Understanding this correlation is crucial for improving future trades."
        },
        {
          "id": "1",
          "text": "Ignore the slow execution speeds as they are not relevant.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring execution speeds can lead to repeated mistakes."
        },
        {
          "id": "2",
          "text": "Change your trading strategy without analyzing the data.",
          "isCorrect": false,
          "feedback": "Incorrect. A data-driven approach is necessary before making strategic changes."
        },
        {
          "id": "3",
          "text": "Document the slow execution speeds but take no further action.",
          "isCorrect": false,
          "feedback": "Incorrect. Documentation alone is not enough; analysis is required to improve."
        }
      ]
    },
    "visualKey": "journal-process-audit"
  },
  {
    "type": "summary",
    "title": "Key Insights on Crypto Trading Audits",
    "label": "Crypto Track",
    "body": "### Core Scenario: Summary of Audit Insights\nSummarizing insights gained from auditing execution speeds and margin adjustments is critical for ongoing improvement. This card encapsulates **the essential takeaways from the auditing process**.\n\n* **Impact of Execution Speeds**: Consistent analysis reveals that execution delays can significantly affect trade outcomes, necessitating ongoing monitoring.\n* **Margin Adjustment Trends**: Identifying trends in margin adjustments helps traders anticipate market conditions and adjust their strategies accordingly.\n* **Continuous Improvement**: Regular audits foster a culture of continuous improvement, ensuring that traders adapt to changing market dynamics effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Continuous Improvement",
          "definition": "An ongoing effort to enhance products, services, or processes."
        }
      ],
      "whyThisMatters": "Key insights from audits drive strategic adjustments, enhancing overall trading performance and risk management.",
      "realLifeExample": "A trader's audit revealed that adjusting margin requirements proactively during high volatility improved their overall win rate by 10%.",
      "commonMistake": "Traders often fail to act on insights gained from audits, missing opportunities for improvement.",
      "quickNote": "Regular audits lead to actionable insights that enhance trading performance.",
      "mentorText": "Reflect on your audit findings. What patterns did you notice? Use these insights to refine your trading approach moving forward.",
      "mentorAnalogy": "Summarizing audit insights is like a post-flight debrief for pilots; it’s essential for learning and improving future flights."
    },
    "taskData": null,
    "visualKey": "journal-process-audit"
  }
];
