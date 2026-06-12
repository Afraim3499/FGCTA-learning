import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Plan Eligibility Filters",
    "label": "Core Track",
    "body": "### Introduction to Plan Eligibility Filters\nFiltering low-probability configurations is critical to developing robust trading strategies. This card introduces the concept of **verifying evidence thresholds to enhance trading plans**.\n\n* **Purpose of Filters**: Plan eligibility filters are designed to eliminate setups that do not meet predefined criteria, ensuring only high-probability trades are executed.\n* **Evidence-Based Approach**: Filters rely on objective evidence rather than subjective judgment, reducing emotional bias and increasing consistency in decision-making.\n* **Threshold Verification**: Each trading plan must pass specific evidence thresholds before execution, minimizing exposure to unnecessary risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Plan Eligibility Filter",
          "definition": "A mechanism to exclude trading setups that do not meet specific criteria."
        },
        {
          "term": "Evidence Threshold",
          "definition": "A set of predefined criteria that a trading plan must meet to be considered viable."
        }
      ],
      "whyThisMatters": "Filtering ensures that only high-probability trading setups are considered, reducing risk and increasing the likelihood of success.",
      "realLifeExample": "A trader uses a filter to exclude any EURUSD trades that do not show a minimum ATR of 50 pips during the London session.",
      "commonMistake": "Relying on gut feeling rather than objective criteria to determine trade eligibility.",
      "quickNote": "Filters are your first line of defense against low-probability trades.",
      "mentorText": "Think of filters as your quality control system. They ensure only the best setups make it to execution.",
      "mentorAnalogy": "Just like a pilot runs through a pre-flight checklist to ensure all systems are go, traders must use filters to verify all conditions are met before executing a trade."
    },
    "taskData": null,
    "visualKey": "filter-intro"
  },
  {
    "type": "concept",
    "title": "Defining Evidence Thresholds",
    "label": "Core Track",
    "body": "### Defining Evidence Thresholds\nEstablishing clear evidence thresholds is essential for determining the viability of a trading plan. This involves setting specific criteria that must be met before a plan is considered eligible.\n\n* **Quantifiable Criteria**: Define thresholds using quantifiable metrics such as ATR, volume, or price action patterns. These metrics provide objective data points for decision-making.\n* **Consistency in Application**: Apply the same evidence thresholds consistently across all trading plans to maintain uniformity and reduce subjective bias.\n* **Dynamic Adjustment**: Regularly review and adjust thresholds based on market conditions to ensure they remain relevant and effective.",
    "context": {
      "keyTerms": [
        {
          "term": "Quantifiable Criteria",
          "definition": "Metrics that can be measured objectively, such as ATR or volume."
        },
        {
          "term": "Dynamic Adjustment",
          "definition": "The process of modifying thresholds in response to changing market conditions."
        }
      ],
      "whyThisMatters": "Clear evidence thresholds prevent impulsive decisions and ensure trades are based on solid data.",
      "realLifeExample": "A trader sets an evidence threshold requiring a minimum volume spike of 20% above the 20-day average before entering a trade.",
      "commonMistake": "Failing to adjust thresholds to reflect current market volatility, leading to outdated criteria.",
      "quickNote": "Evidence thresholds are your objective gatekeepers.",
      "mentorText": "Set your thresholds like a scientist sets controls in an experiment: precise, measurable, and consistent.",
      "mentorAnalogy": "Just as a surgeon uses specific criteria to decide if a patient is ready for surgery, traders must use evidence thresholds to determine if a trade is viable."
    },
    "taskData": null,
    "visualKey": "evidence-threshold"
  },
  {
    "type": "concept",
    "title": "Rejecting Unclear Market Readings",
    "label": "Core Track",
    "body": "### Rejecting Unclear Market Readings\nIdentifying and rejecting market readings that lack clarity is crucial to maintaining a high standard in trading plans. Avoid plans based on ambiguous data that do not meet evidence thresholds.\n\n* **Ambiguity Identification**: Recognize patterns or signals that are not clearly defined, such as overlapping candlestick formations or inconsistent volume patterns.\n* **Threshold Non-Compliance**: Automatically reject any setup that does not meet the established evidence thresholds, regardless of potential intuition.\n* **Noise Reduction**: Focus on eliminating market noise by adhering strictly to clear, unambiguous data points.",
    "context": {
      "keyTerms": [
        {
          "term": "Ambiguity Identification",
          "definition": "The process of recognizing unclear or conflicting market signals."
        },
        {
          "term": "Noise Reduction",
          "definition": "The practice of filtering out irrelevant or misleading market data."
        }
      ],
      "whyThisMatters": "Rejecting unclear readings prevents execution of trades based on unreliable data, reducing risk.",
      "realLifeExample": "A trader discards a potential setup when the candlestick pattern shows mixed signals with no clear direction.",
      "commonMistake": "Attempting to interpret ambiguous signals as clear opportunities, leading to poor trade decisions.",
      "quickNote": "Clarity is non-negotiable in market readings.",
      "mentorText": "If the market's message isn't crystal clear, it's not worth your capital. Reject ambiguity without hesitation.",
      "mentorAnalogy": "Like an air traffic controller dismisses unclear radar signals to avoid accidents, traders must reject unclear market readings to prevent losses."
    },
    "taskData": null,
    "visualKey": "unclear-reading-rejection"
  },
  {
    "type": "concept",
    "title": "Identifying Weak Plan Signals",
    "label": "Core Track",
    "body": "### Identifying Weak Plan Signals\nRecognizing signals that indicate a weak trading plan is vital for avoiding low-probability trades. Understand the signs of insufficient evidence to avoid plans unlikely to succeed.\n\n* **Signal Strength Assessment**: Evaluate the strength of signals by examining their alignment with established evidence thresholds and historical performance.\n* **Evidence Deficiency**: Identify plans that lack sufficient supporting data, such as weak volume confirmation or incomplete pattern formations.\n* **Risk Evaluation**: Assess the risk associated with weak signals and prioritize plans with stronger evidence and lower risk profiles.",
    "context": {
      "keyTerms": [
        {
          "term": "Signal Strength Assessment",
          "definition": "The evaluation of a trading signal's reliability based on evidence thresholds."
        },
        {
          "term": "Evidence Deficiency",
          "definition": "A lack of sufficient data to support a trading plan."
        }
      ],
      "whyThisMatters": "Identifying weak signals helps prevent unnecessary losses by avoiding trades with low success probability.",
      "realLifeExample": "A trader notices a potential breakout but rejects the plan due to insufficient volume and a lack of supporting trend indicators.",
      "commonMistake": "Ignoring the lack of supporting evidence and proceeding with weak signals based on hope.",
      "quickNote": "Weak signals are red flags, not green lights.",
      "mentorText": "Weak signals are like whispers in a storm—easy to misinterpret and dangerous to act on. Stick to strong, clear signals.",
      "mentorAnalogy": "Just as an architect refuses to build on shaky ground, traders must avoid plans with weak signals that lack a solid foundation."
    },
    "taskData": null,
    "visualKey": "weak-plan-warning"
  },
  {
    "type": "concept",
    "title": "Debriefing Filtered Plans",
    "label": "Core Track",
    "body": "### Debriefing Filtered Plans: Analyzing Rejections\nDebriefing filtered trading plans involves a systematic review of why certain setups were excluded. This process enhances future strategy development by identifying weaknesses and refining criteria.\n\n* **Rejection Reason Analysis**: Document the specific criteria that led to the rejection of each plan. Was it due to session conflict, lack of displacement, or spread issues? Understanding these reasons is crucial for refining your strategy.\n* **Pattern Identification**: Look for recurring themes in rejected plans. Are certain market conditions or instruments consistently failing your filters? Identifying these patterns can guide adjustments in your trading approach.\n* **Feedback Loop Creation**: Establish a feedback loop where insights from debriefing inform future plan development. This iterative process ensures continuous improvement and adaptation to market dynamics.",
    "context": {
      "keyTerms": [
        {
          "term": "Debriefing",
          "definition": "A systematic review process to analyze and learn from past trading decisions."
        },
        {
          "term": "Rejection Criteria",
          "definition": "Specific conditions or thresholds that, if not met, lead to the exclusion of a trading plan."
        }
      ],
      "whyThisMatters": "Debriefing filtered plans allows traders to refine their strategies by learning from past exclusions, leading to more robust future plans.",
      "realLifeExample": "After rejecting a GBPUSD trade due to conflicting session pressures, a trader notes this pattern and adjusts their criteria to better handle session overlaps.",
      "commonMistake": "Failing to document and analyze the reasons for plan rejection, missing opportunities for strategic improvement.",
      "quickNote": "Debriefing is your strategic mirror; it reflects what needs refinement.",
      "mentorText": "Think of debriefing as your post-flight analysis. Every rejected plan is a chance to understand what went wrong and how to adjust your flight path next time.",
      "mentorAnalogy": "Just like a pilot reviews flight data after a trip to improve future flights, traders must analyze rejected plans to enhance their trading strategies."
    },
    "taskData": null,
    "visualKey": "filter-debrief"
  },
  {
    "type": "concept",
    "title": "Pattern Recognition in Filtering",
    "label": "Core Track",
    "body": "### Pattern Recognition: Enhancing Filter Accuracy\nPattern recognition is a critical skill in filtering trading plans, enabling traders to identify recurring setups that meet or fail evidence thresholds.\n\n* **Recurring Setup Identification**: Develop a catalog of patterns that consistently align with your evidence thresholds. This helps in quickly recognizing high-probability setups.\n* **Threshold Alignment**: Ensure that recognized patterns are aligned with your evidence thresholds. Patterns that frequently meet these criteria should be prioritized in your trading strategy.\n* **Anomaly Detection**: Use pattern recognition to spot anomalies that deviate from expected behavior. These anomalies can signal potential adjustments needed in your filtering process.",
    "context": {
      "keyTerms": [
        {
          "term": "Pattern Recognition",
          "definition": "The process of identifying recurring configurations or behaviors in market data."
        },
        {
          "term": "Anomaly Detection",
          "definition": "Identifying data points or patterns that deviate significantly from the norm."
        }
      ],
      "whyThisMatters": "Pattern recognition helps traders quickly identify setups that align with their criteria, improving decision-making efficiency.",
      "realLifeExample": "A trader notices that a specific candlestick pattern on the EURUSD consistently meets their evidence threshold, leading to more focused trading decisions.",
      "commonMistake": "Overlooking subtle patterns that could indicate high-probability setups, resulting in missed opportunities.",
      "quickNote": "Patterns are your roadmap; recognize them to navigate markets effectively.",
      "mentorText": "Recognize patterns like a chess master sees the board. Each move is part of a larger strategy, and identifying these patterns is key to winning the game.",
      "mentorAnalogy": "Just as a chess player studies openings to anticipate opponent moves, traders use pattern recognition to forecast market behavior and filter plans effectively."
    },
    "taskData": null,
    "visualKey": "filter-intro"
  },
  {
    "type": "concept",
    "title": "Adjusting Evidence Thresholds",
    "label": "Core Track",
    "body": "### Adjusting Evidence Thresholds: Dynamic Strategy Calibration\nAdjusting evidence thresholds involves modifying the criteria for plan eligibility based on current market conditions to maintain accuracy and relevance.\n\n* **Market Condition Assessment**: Regularly evaluate market volatility, liquidity, and trends. Adjust thresholds to align with these conditions, ensuring that your filters remain effective.\n* **Threshold Flexibility**: Implement flexible thresholds that can expand or contract based on predefined market signals. This adaptability helps in capturing opportunities while managing risk.\n* **Performance Monitoring**: Continuously monitor the performance of your thresholds. Use historical data to backtest and validate adjustments, ensuring they enhance rather than hinder plan eligibility.",
    "context": {
      "keyTerms": [
        {
          "term": "Evidence Threshold",
          "definition": "The criteria that a trading plan must meet to be considered viable."
        },
        {
          "term": "Threshold Flexibility",
          "definition": "The ability to adjust criteria dynamically based on market conditions."
        }
      ],
      "whyThisMatters": "Dynamic threshold adjustment ensures that trading plans remain relevant and effective in varying market conditions.",
      "realLifeExample": "A trader adjusts their evidence threshold for S&P 500 trades during earnings season to account for increased volatility, improving plan accuracy.",
      "commonMistake": "Failing to adjust thresholds in response to changing market conditions, leading to outdated and ineffective trading plans.",
      "quickNote": "Thresholds are not static; adapt them to the market's rhythm.",
      "mentorText": "Think of adjusting thresholds like tuning a musical instrument. The market's conditions are your tuning fork, guiding you to the right pitch for your strategy.",
      "mentorAnalogy": "Like an engineer recalibrating instruments based on environmental changes, traders must adjust evidence thresholds to maintain precision in their strategies."
    },
    "taskData": null,
    "visualKey": "evidence-threshold"
  },
  {
    "type": "concept",
    "title": "Assessing Data Quality for Filters",
    "label": "Core Track",
    "body": "### Data Quality Assessment: Ensuring Reliable Filters\nEvaluating data quality is crucial for effective filtering, as unreliable data can lead to inaccurate plan eligibility decisions.\n\n* **Source Verification**: Ensure data is sourced from reputable providers with a track record of accuracy. Cross-reference data with multiple sources to confirm reliability.\n* **Timeliness and Relevance**: Check that data is up-to-date and relevant to current market conditions. Outdated or irrelevant data can skew filtering results.\n* **Error Detection**: Implement systems to detect and correct data errors. Regular audits of your data sources help maintain the integrity of your filtering process.",
    "context": {
      "keyTerms": [
        {
          "term": "Data Quality",
          "definition": "The accuracy, reliability, and timeliness of data used in trading decisions."
        },
        {
          "term": "Source Verification",
          "definition": "The process of confirming the reliability and accuracy of data providers."
        }
      ],
      "whyThisMatters": "High-quality data is essential for making informed trading decisions and ensuring that filters accurately reflect market conditions.",
      "realLifeExample": "A trader cross-references USDJPY data from multiple sources to ensure accuracy before applying it to their filtering criteria.",
      "commonMistake": "Relying on a single data source without verification, leading to potential inaccuracies in trading plans.",
      "quickNote": "Data is the foundation; ensure it's solid before building strategies.",
      "mentorText": "Think of data quality like the foundation of a skyscraper. If it's flawed, the entire structure is at risk. Your trading decisions rest on this foundation.",
      "mentorAnalogy": "Just as a chef insists on fresh ingredients for a quality dish, traders must ensure their data is accurate and reliable for effective filtering."
    },
    "taskData": null,
    "visualKey": "unclear-reading-rejection"
  },
  {
    "type": "concept",
    "title": "Integrating Risk-Reward Ratios into Plan Filters",
    "label": "Core Track",
    "body": "### Incorporating Risk-Reward in Filters: Evaluating Plan Viability\nRisk-reward ratios are critical in determining the viability of a trading plan. This card explains **how to integrate risk-reward analysis into plan eligibility filters**.\n\n* **Minimum Ratio Requirement**: Set a minimum acceptable risk-reward ratio, such as 2:1, to filter out plans that do not meet this threshold. Plans failing to meet this ratio are discarded to maintain a positive expectancy.\n* **Dynamic Ratio Adjustment**: Adjust the risk-reward ratio based on market volatility. In high volatility conditions, increase the ratio requirement to account for larger price swings, ensuring the plan remains viable.\n* **Scenario Testing**: Backtest historical data to validate the effectiveness of the chosen risk-reward ratio across different market conditions, ensuring the filter is robust and adaptable.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "A metric comparing potential profit to potential loss in a trade."
        }
      ],
      "whyThisMatters": "Integrating risk-reward ratios into filters ensures that only plans with a favorable risk-return profile are considered, enhancing overall trading performance.",
      "realLifeExample": "A trader evaluates a potential EURUSD trade with a 1:1.5 risk-reward ratio during a volatile session. The plan is rejected as it fails to meet the 2:1 minimum threshold.",
      "commonMistake": "Ignoring risk-reward ratios and focusing solely on potential profit, leading to plans with poor risk management.",
      "quickNote": "A plan without a favorable risk-reward ratio is inherently flawed.",
      "mentorText": "Always check if the potential reward justifies the risk. If it doesn't meet your criteria, it's not worth pursuing.",
      "mentorAnalogy": "Think of it like engineering a bridge. If the safety margin isn't met, the design is scrapped, no matter how appealing it looks."
    },
    "taskData": null,
    "visualKey": "weak-plan-warning"
  },
  {
    "type": "concept",
    "title": "Mitigating Emotional Bias in Plan Filters",
    "label": "Core Track",
    "body": "### Filtering Emotional Biases: Ensuring Objective Plan Evaluation\nEmotional biases can distort trading decisions. This card focuses on **techniques to filter out emotional influences that compromise evidence thresholds**.\n\n* **Pre-Trade Checklist**: Implement a checklist that includes objective criteria to ensure decisions are based on data rather than emotions. This helps maintain consistency in plan evaluation.\n* **Emotional Awareness Training**: Develop self-awareness techniques to recognize emotional triggers, such as fear or greed, that may influence decision-making.\n* **Journaling and Reflection**: Keep a trading journal to document emotional states and their impact on trading decisions, allowing for post-trade analysis and improvement.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Bias",
          "definition": "A deviation in judgment caused by emotional factors."
        }
      ],
      "whyThisMatters": "Filtering emotional biases ensures that trading plans are evaluated on objective criteria, reducing the risk of irrational decisions.",
      "realLifeExample": "A trader feels anxious about missing out on a rally and skips their checklist, resulting in a poorly timed entry on GBPUSD.",
      "commonMistake": "Allowing fear of missing out to override established plan criteria.",
      "quickNote": "Objective filters are your safeguard against emotional decisions.",
      "mentorText": "Emotions are your worst enemy in trading. Stick to your checklist to keep them at bay.",
      "mentorAnalogy": "Like a surgeon following a strict protocol, you must adhere to your checklist to avoid emotional errors."
    },
    "taskData": null,
    "visualKey": "filter-debrief"
  },
  {
    "type": "concept",
    "title": "Aligning Timeframes for Consistent Filtering",
    "label": "Core Track",
    "body": "### Timeframe Alignment in Filtering: Enhancing Consistency\nAligning timeframes ensures that evidence thresholds are consistent across different views. This card covers **the importance of timeframe alignment in the filtering process**.\n\n* **Multi-Timeframe Analysis**: Ensure that the setup aligns across multiple timeframes, such as daily, 4-hour, and 1-hour charts, to confirm the plan's validity.\n* **Consistency Check**: Verify that key levels and patterns are visible and consistent across all relevant timeframes to avoid conflicting signals.\n* **Timeframe Hierarchy**: Establish a hierarchy of timeframes to prioritize signals from higher timeframes, which carry more weight in decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Timeframe Alignment",
          "definition": "Ensuring that trading signals are consistent across different chart timeframes."
        }
      ],
      "whyThisMatters": "Timeframe alignment prevents contradictory signals and ensures that trading plans are based on robust, multi-timeframe evidence.",
      "realLifeExample": "A trader observes a bullish pattern on the 1-hour chart but a bearish trend on the daily chart for USDJPY, leading to a plan rejection due to misalignment.",
      "commonMistake": "Relying on a single timeframe without confirming alignment across others.",
      "quickNote": "Alignment across timeframes strengthens plan validity.",
      "mentorText": "Always check your setup across multiple timeframes. If they don't align, the plan is flawed.",
      "mentorAnalogy": "Like a pilot cross-checking instruments, you must ensure all timeframes agree before takeoff."
    },
    "taskData": null,
    "visualKey": "filter-intro"
  },
  {
    "type": "concept",
    "title": "Adapting Filters to Dynamic Market Conditions",
    "label": "Core Track",
    "body": "### Adapting Filters to Market Conditions: Maintaining Effectiveness\nMarket conditions are ever-changing, requiring adaptable filters. This card explains **how to modify filtering criteria to suit different market environments**.\n\n* **Volatility-Based Adjustments**: Adjust filters based on current market volatility, tightening criteria during low volatility and loosening them in high volatility to capture valid opportunities.\n* **Trend vs. Range Filters**: Differentiate between trending and ranging markets, applying specific filters for each to ensure plans are relevant to the prevailing conditions.\n* **Regular Review and Update**: Periodically review and update filters to reflect changes in market structure or behavior, maintaining their effectiveness over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Conditions",
          "definition": "The current state of the market, including volatility and trend characteristics."
        }
      ],
      "whyThisMatters": "Adapting filters to market conditions ensures that trading plans remain relevant and effective, avoiding outdated strategies.",
      "realLifeExample": "During a period of high volatility, a trader adjusts their filter criteria to allow for wider stop-losses on NASDAQ trades.",
      "commonMistake": "Using static filters that do not account for changing market dynamics.",
      "quickNote": "Filters must evolve with market conditions to stay effective.",
      "mentorText": "Your filters should be as dynamic as the market. Adapt them to fit the current environment.",
      "mentorAnalogy": "Like a sailor adjusting sails to the wind, you must tweak your filters to match market conditions."
    },
    "taskData": null,
    "visualKey": "evidence-threshold"
  },
  {
    "type": "concept",
    "title": "Backtesting Plan Filters: Evaluating Historical Effectiveness",
    "label": "Core Track",
    "body": "### Backtesting Plan Filters: Evaluating Historical Effectiveness\nBacktesting is a critical process for assessing the reliability of plan eligibility filters. This card explains **how to use historical data to validate filter effectiveness**.\n\n* **Data Selection**: Choose a historical data set that reflects varied market conditions. Ensure the data spans multiple market cycles to test filter robustness across different scenarios.\n* **Filter Application**: Apply your plan eligibility filters to the historical data. Record the number of trades that pass and fail the filter criteria, noting any patterns or anomalies.\n* **Performance Metrics**: Analyze the results using metrics such as win rate, drawdown, and risk-reward ratio. Determine if the filters consistently enhance the quality of trade setups.",
    "context": {
      "keyTerms": [
        {
          "term": "Backtesting",
          "definition": "The process of testing a trading strategy using historical data to evaluate its effectiveness."
        },
        {
          "term": "Plan Eligibility Filters",
          "definition": "Criteria used to determine whether a trading setup is viable based on predefined conditions."
        }
      ],
      "whyThisMatters": "Backtesting filters ensure that only high-probability setups are considered, improving trading consistency and reducing unnecessary risk.",
      "realLifeExample": "A trader backtests their eligibility filters on EURUSD data from 2015 to 2020, finding that 70% of trades passing the filter were profitable.",
      "commonMistake": "Failing to use a diverse data set, leading to overfitting and unreliable filter performance.",
      "quickNote": "Backtest filters to validate their effectiveness across varied market conditions.",
      "mentorText": "When backtesting, think of it like a stress test for your filters. You want to see how they hold up in different market environments.",
      "mentorAnalogy": "Backtesting is like a flight simulator for pilots, allowing them to practice and refine skills in a controlled environment before facing real-world conditions."
    },
    "taskData": null,
    "visualKey": "unclear-reading-rejection"
  },
  {
    "type": "practice",
    "title": "Applying Filters in Practice: Real-World Scenarios",
    "label": "Core Track",
    "body": "### Applying Filters in Practice: Real-World Scenarios\nPractical application of plan eligibility filters is essential for refining trading strategies. This card provides **hands-on experience in filtering trading plans based on evidence thresholds**.\n\n* **Scenario Analysis**: Evaluate a set of real-world trading scenarios. Apply your eligibility filters to determine which setups meet the criteria for execution.\n* **Threshold Verification**: Confirm that each scenario meets the evidence thresholds defined in your trading plan. Document the reasoning for accepting or rejecting each setup.\n* **Feedback Loop**: Use the outcomes to refine your filters. Adjust thresholds and criteria based on the practical results to enhance future decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Evidence Thresholds",
          "definition": "Specific criteria that must be met for a trade setup to be considered viable."
        }
      ],
      "whyThisMatters": "Applying filters in practice helps traders develop a disciplined approach to selecting high-probability trades, reducing emotional decision-making.",
      "realLifeExample": "A trader uses their filters on a live GBPUSD setup, rejecting it due to insufficient volume confirmation, avoiding a potential loss.",
      "commonMistake": "Ignoring filter criteria due to emotional bias, leading to poor trade selection.",
      "quickNote": "Apply filters rigorously to maintain discipline in trade selection.",
      "mentorText": "Think of applying filters as your pre-flight checklist. Every item must be checked off before you take off.",
      "mentorAnalogy": "Applying filters is like a surgeon following a pre-operative checklist to ensure all conditions are optimal before proceeding with surgery."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have a trading setup on USDJPY with mixed signals. The price action shows a potential breakout, but volume is low. How should you apply your plan eligibility filters?",
      "options": [
        {
          "id": "0",
          "text": "Reject the setup due to low volume.",
          "isCorrect": true,
          "feedback": "Low volume indicates a lack of confirmation, making the setup less reliable."
        },
        {
          "id": "1",
          "text": "Proceed with the setup because of the breakout signal.",
          "isCorrect": false,
          "feedback": "A breakout without volume confirmation is risky and often unreliable."
        },
        {
          "id": "2",
          "text": "Wait for additional confirmation signals before deciding.",
          "isCorrect": false,
          "feedback": "While waiting can be prudent, the lack of volume already suggests a weak setup."
        },
        {
          "id": "3",
          "text": "Ignore the volume and focus on price action alone.",
          "isCorrect": false,
          "feedback": "Ignoring key filter criteria like volume can lead to poor trade decisions."
        }
      ]
    },
    "visualKey": "weak-plan-warning"
  },
  {
    "type": "summary",
    "title": "Summary of Plan Eligibility Filters: Techniques and Strategies",
    "label": "Core Track",
    "body": "### Summary of Plan Eligibility Filters: Techniques and Strategies\nPlan eligibility filters are vital for filtering low-probability configurations. This card reviews **key concepts and strategies for effective filter application**.\n\n* **Filter Criteria**: Establish clear and objective criteria for trade setups. Ensure these criteria are based on quantifiable evidence and align with your overall trading strategy.\n* **Continuous Evaluation**: Regularly assess the performance of your filters. Use backtesting and real-time application feedback to refine and adapt criteria as market conditions evolve.\n* **Risk Management Integration**: Integrate filters with your risk management protocols. Ensure that only setups meeting both eligibility and risk criteria are executed.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "Effective filters reduce exposure to low-probability trades, enhancing overall strategy performance and capital preservation.",
      "realLifeExample": "A trader refines their filters after noticing a pattern of false breakouts in their backtesting, improving their win rate by 15%.",
      "commonMistake": "Neglecting to update filters as market conditions change, leading to outdated strategies.",
      "quickNote": "Regularly update filters to adapt to changing market conditions.",
      "mentorText": "Think of your filters as the guardrails on a highway. They keep you on track and prevent you from veering into dangerous territory.",
      "mentorAnalogy": "Filters are like a quality control system in manufacturing, ensuring only products meeting strict standards reach the market."
    },
    "taskData": null,
    "visualKey": "filter-debrief"
  }
];
