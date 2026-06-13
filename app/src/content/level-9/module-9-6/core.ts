import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Proprietary Firm Rulebooks",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C1 -->\n### Core Scenario: Proprietary Firm Rulebook Comprehension\nProprietary trading firms establish specific rulebooks that dictate trading behavior and risk management. Mastering these documents is essential for aligning your trading strategies with firm expectations.\n\n* **Rulebook Analysis**: Conduct a thorough review of the rulebook, identifying key sections such as risk limits, trade execution protocols, and reporting requirements. Highlight any areas that directly impact your trading strategy.\n* **Compliance Checklist**: Create a compliance checklist based on the rulebook to ensure that each trade adheres to the firm's guidelines. This checklist should be referenced before executing any trade.\n* **Regular Updates**: Stay informed about any amendments to the rulebook. Schedule periodic reviews to ensure your trading practices remain compliant with the latest requirements.",
    "context": {
      "keyTerms": [
        {
          "term": "Rulebook",
          "definition": "A comprehensive document outlining the trading policies and risk management protocols of a proprietary trading firm."
        }
      ],
      "whyThisMatters": "Understanding the rulebook is critical to avoid penalties and ensure successful funding audits.",
      "realLifeExample": "A trader at a prop firm discovers a clause in the rulebook limiting daily losses to 2%. By adhering to this rule, they avoid a potential breach during a volatile trading session.",
      "commonMistake": "Failing to read the entire rulebook can lead to unintentional violations of firm policies.",
      "quickNote": "A thorough understanding of the rulebook is non-negotiable for compliance.",
      "mentorText": "You must know your firm's rulebook inside and out. It’s not just a guideline; it’s your operational manual. If you overlook a single clause, you risk your funding.",
      "mentorAnalogy": "Think of the rulebook as an aircraft's operating manual. Just as a pilot must understand every detail to ensure safe flight, you must comprehend every rule to navigate your trading successfully."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Aligning Trade Execution with Risk Parameters",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C2 -->\n### Core Scenario: Risk Parameter Alignment\nProprietary firms impose specific risk parameters to manage overall exposure. Adjusting your trading strategies to comply with these parameters is essential for sustainable performance.\n\n* **Position Sizing**: Calculate position sizes based on the firm's maximum allowable risk per trade. For instance, if the firm allows a maximum risk of 1% per trade on a $100,000 account, your position size should reflect this limit.\n* **Stop-Loss Implementation**: Establish stop-loss orders that align with the firm's risk tolerance. If the firm mandates a maximum drawdown of 5%, ensure that your stop-loss levels are set to prevent exceeding this threshold.\n* **Trade Diversification**: Diversify your trades across different instruments to mitigate risk. If the firm permits a maximum of 5% exposure to any single asset, ensure your portfolio reflects this distribution.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Parameters",
          "definition": "Specific limits set by a proprietary trading firm to control the level of risk taken by traders."
        }
      ],
      "whyThisMatters": "Aligning trade execution with risk parameters is vital for maintaining compliance and ensuring long-term profitability.",
      "realLifeExample": "A trader executes a long position in EURUSD with a stop-loss set at 1.0800, adhering to a risk limit of 1% on a $50,000 account, ensuring compliance with the firm's parameters.",
      "commonMistake": "Over-leveraging positions without considering the firm's risk limits can lead to immediate account breaches.",
      "quickNote": "Always align your trade execution with the firm's risk parameters to avoid penalties.",
      "mentorText": "Your strategy must fit within the risk framework established by the firm. If you exceed these limits, you jeopardize your standing and funding.",
      "mentorAnalogy": "Consider your trading strategy as a race car. Just as a driver must adhere to track limits to avoid penalties, you must operate within the risk parameters set by your firm."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Managing Drawdown Limits",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C3 -->\n### Core Scenario: Drawdown Management Techniques\nProprietary trading firms impose strict drawdown limits to protect their capital. Implementing effective drawdown management techniques is crucial for compliance and long-term trading success.\n\n* **Daily Loss Limits**: Establish a daily loss limit based on the firm's maximum drawdown policy. For example, if the firm allows a maximum daily drawdown of $2,000, stop trading once this limit is reached.\n* **Recovery Strategies**: Develop a recovery plan for when drawdowns occur. If you experience a 3% drawdown, implement a strategy that focuses on risk-adjusted trades to gradually recover without exceeding the firm's limits.\n* **Performance Monitoring**: Utilize performance tracking tools to monitor drawdown levels in real-time. Set alerts to notify you when approaching the firm’s drawdown thresholds.",
    "context": {
      "keyTerms": [
        {
          "term": "Drawdown Limit",
          "definition": "The maximum allowable loss a trader can incur before facing penalties or account restrictions from a proprietary trading firm."
        }
      ],
      "whyThisMatters": "Effective drawdown management ensures compliance with firm rules and protects your trading capital.",
      "realLifeExample": "A trader experiences a drawdown of $1,500 on a $50,000 account. They immediately halt trading to avoid breaching the firm's $2,000 drawdown limit.",
      "commonMistake": "Ignoring drawdown limits can lead to severe penalties, including account termination.",
      "quickNote": "Proactively manage drawdowns to stay within firm-imposed limits.",
      "mentorText": "You must have a plan for drawdowns. If you hit your limit, it’s time to step back and reassess, not double down.",
      "mentorAnalogy": "Managing drawdowns is like a surgeon monitoring a patient's vital signs during surgery. Just as a surgeon must act quickly to prevent complications, you must respond to drawdowns to maintain compliance."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Importance of Accurate Trade Reporting",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C4 -->\n### Core Scenario: Accurate Trade Reporting\nAccurate trade reporting is essential for compliance with proprietary firm rules and plays a significant role in funding audits. Ensuring precision in reporting can prevent costly mistakes.\n\n* **Trade Log Maintenance**: Maintain a detailed trade log that includes entry and exit prices, position sizes, and timestamps. This log should be updated in real-time to ensure accuracy during audits.\n* **Reporting Frequency**: Adhere to the reporting frequency specified by the firm. If the firm requires daily reports by 5 PM, ensure that all trades are documented and submitted punctually.\n* **Error Checking Protocols**: Implement error-checking protocols to verify the accuracy of trade reports. Cross-reference your trade log with the firm's reporting system to catch discrepancies before submission.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Reporting",
          "definition": "The process of documenting and submitting trade details to a proprietary trading firm for compliance and audit purposes."
        }
      ],
      "whyThisMatters": "Accurate reporting is critical for maintaining transparency and avoiding penalties during funding audits.",
      "realLifeExample": "A trader submits a daily report detailing 10 trades executed, ensuring all entries match their trade log, thus avoiding discrepancies during the firm’s audit process.",
      "commonMistake": "Failing to report trades accurately can lead to compliance issues and potential funding loss.",
      "quickNote": "Precision in trade reporting is essential for compliance and audit success.",
      "mentorText": "You must treat trade reporting as a non-negotiable task. Any inaccuracies can lead to serious repercussions, including loss of funding.",
      "mentorAnalogy": "Think of trade reporting like an accountant preparing financial statements. Just as accuracy is crucial for financial integrity, your trade reports must be flawless to maintain compliance."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Evaluating Performance Against Firm Benchmarks",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C5 -->\n### Core Scenario: Performance Benchmark Evaluation\nEvaluating your trading performance against proprietary firm benchmarks is essential for maintaining compliance and ensuring profitability. This card outlines **the systematic approach to measure your results against established standards**.\n\n* **Benchmark Identification**: Obtain and document the specific performance metrics set by the firm, such as minimum return thresholds or maximum drawdown limits. For example, if the firm requires a minimum monthly return of 5%, track your performance against this figure.\n* **Performance Metrics Analysis**: Use tools such as the Sharpe ratio or maximum drawdown calculations to assess your trading results. If your strategy yields a Sharpe ratio of 1.2 while the firm’s benchmark is 1.5, adjustments may be necessary.\n* **Regular Reporting**: Schedule weekly or monthly reviews of your performance against these benchmarks. For instance, if your trading account shows a 4% return at the end of the month, document this and analyze the reasons for underperformance against the firm’s expectations.",
    "context": {
      "keyTerms": [
        {
          "term": "Benchmark",
          "definition": "A standard or point of reference against which performance can be measured."
        },
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, indicating how much excess return is received for the extra volatility endured."
        }
      ],
      "whyThisMatters": "Aligning your performance with firm benchmarks is critical to avoid penalties and ensure continued funding opportunities.",
      "realLifeExample": "A trader at a prop firm realizes their performance is at 3% return for the month, while the benchmark is 5%. They analyze trade logs to identify underperforming strategies.",
      "commonMistake": "Failing to regularly compare performance against benchmarks, leading to misalignment with firm expectations.",
      "quickNote": "Consistently evaluate your performance against firm benchmarks to ensure compliance and profitability.",
      "mentorText": "You must rigorously assess your performance against the firm’s benchmarks. If you’re falling short, identify the gaps and adjust your strategies immediately.",
      "mentorAnalogy": "Think of this like an athlete reviewing their performance metrics against a coach's expectations. Just as a sprinter checks their times against qualifying standards, you must measure your trading results against firm benchmarks."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Preparing for Funding Audits",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C6 -->\n### Core Scenario: Funding Audit Preparation\nPreparing for funding audits requires meticulous organization and adherence to the firm's trading rules. This card details **the essential steps to ensure readiness for audits**.\n\n* **Documentation Compilation**: Gather all trading records, including account statements, trade logs, and performance reports. Ensure these documents are accurate and reflect your trading activity over the audit period.\n* **Rule Compliance Review**: Conduct a thorough review of the firm’s trading rules and ensure your practices align with them. For instance, if the firm prohibits trading during specific hours, verify that your logs do not show violations.\n* **Mock Audit Simulation**: Perform a self-audit by simulating the audit process. Check for discrepancies in your records and rectify them before the official audit. If you find a trade executed outside of allowed parameters, address it proactively.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Audit",
          "definition": "A review process conducted by a proprietary firm to assess a trader’s adherence to rules and performance metrics."
        },
        {
          "term": "Documentation",
          "definition": "Records that provide evidence of trading activity and compliance with firm rules."
        }
      ],
      "whyThisMatters": "Proper preparation for funding audits can prevent funding loss and ensure continued trading privileges with the firm.",
      "realLifeExample": "A trader prepares for an upcoming funding audit by compiling all trades executed in the last quarter, ensuring compliance with the firm’s maximum drawdown rule.",
      "commonMistake": "Neglecting to keep detailed records, leading to complications during the audit process.",
      "quickNote": "Thoroughly prepare documentation and review compliance to ensure a smooth funding audit.",
      "mentorText": "You need to be audit-ready at all times. Gather your records and ensure every trade aligns with the firm’s rules. If you’re not prepared, you risk losing your funding.",
      "mentorAnalogy": "Consider this like a pilot preparing for an aircraft inspection. Every logbook entry must be accurate and complete to ensure compliance with aviation regulations."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Conducting Compliance Checks",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C7 -->\n### Core Scenario: Regular Compliance Checks\nConducting compliance checks on your trading strategies is vital for ongoing alignment with proprietary firm rules. This card explains **how to implement a structured compliance check process**.\n\n* **Scheduled Reviews**: Establish a routine for compliance checks, such as bi-weekly or monthly assessments of your trading strategies against firm rules. Document any deviations and corrective actions taken.\n* **Performance Metrics Monitoring**: Continuously monitor key performance indicators (KPIs) such as win rate, average trade duration, and maximum drawdown. For example, if your maximum drawdown exceeds the firm’s limit of 10%, immediate strategy adjustments are required.\n* **Feedback Integration**: Actively incorporate feedback from previous audits or compliance checks into your trading strategy. If an audit highlighted excessive risk-taking, adjust your position sizing accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Compliance Check",
          "definition": "A systematic review of trading practices to ensure adherence to firm rules."
        },
        {
          "term": "Key Performance Indicators (KPIs)",
          "definition": "Quantifiable measures used to evaluate the success of a trading strategy."
        }
      ],
      "whyThisMatters": "Regular compliance checks help mitigate risks and ensure that trading practices remain within the firm's guidelines.",
      "realLifeExample": "A trader conducts a compliance check and discovers their average trade duration is 15 minutes, while the firm prefers trades to last at least 30 minutes. They adjust their strategy accordingly.",
      "commonMistake": "Only conducting compliance checks sporadically, which can lead to significant deviations from firm rules.",
      "quickNote": "Implement regular compliance checks to maintain alignment with proprietary firm rules.",
      "mentorText": "You must be diligent about compliance. Regularly check your strategies against the firm’s rules and make adjustments as necessary. Ignoring this can lead to severe consequences.",
      "mentorAnalogy": "Think of this as a surgeon performing routine checks on surgical instruments. Just as a surgeon ensures every tool is sterile and functioning, you must verify that your trading practices comply with firm standards."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Adjusting Strategies Based on Feedback",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C8 -->\n### Core Scenario: Strategy Adjustment Based on Feedback\nAdjusting your trading strategies based on feedback from the prop firm is essential for continuous alignment with their requirements. This card outlines **the process for effectively implementing feedback into your trading**.\n\n* **Feedback Analysis**: After receiving feedback from the firm, categorize it into actionable items. For example, if the firm notes that your risk-reward ratio is below their standard of 1:2, prioritize this adjustment in your strategy.\n* **Implementation Plan**: Develop a structured plan to incorporate feedback into your trading. If the firm suggests reducing trade frequency, outline specific metrics to guide this change, such as limiting trades to no more than 10 per day.\n* **Performance Review Post-Adjustment**: After implementing changes, conduct a performance review to assess the impact. If your adjusted strategy yields a higher win rate of 60% compared to the previous 50%, document this improvement and continue refining your approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Feedback",
          "definition": "Information provided by the firm regarding a trader's performance and adherence to rules."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Incorporating feedback ensures that your trading strategies evolve in line with firm expectations, enhancing your chances of success.",
      "realLifeExample": "A trader receives feedback indicating their risk-reward ratio is 1:1.5, prompting them to adjust their strategy to achieve a 1:2 ratio, resulting in improved performance metrics.",
      "commonMistake": "Ignoring or dismissing feedback from the firm, leading to stagnation in strategy effectiveness.",
      "quickNote": "Actively adjust your strategies based on firm feedback to ensure ongoing alignment and improvement.",
      "mentorText": "Take feedback seriously. Analyze it, implement changes, and review your performance. This is how you grow as a trader and align with the firm’s goals.",
      "mentorAnalogy": "Consider this like a chef adjusting a recipe based on customer feedback. Just as a chef refines their dish to meet diners' preferences, you must adapt your strategies to meet the firm’s standards."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Conducting Risk Assessments",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C9 -->\n### Core Scenario: Risk Assessment Framework\nRisk assessments are critical for aligning trading strategies with a proprietary firm's risk appetite. This card outlines **the systematic approach to evaluate and document risk factors**.\n\n* **Risk Identification**: Catalog all potential risks associated with your trading strategy, including market volatility, liquidity constraints, and operational risks. For example, assess how a 5% drawdown in the EURUSD might impact your overall capital.\n* **Quantitative Analysis**: Utilize statistical models to quantify risks. Calculate Value at Risk (VaR) for your strategy, ensuring it remains within the firm's prescribed limits, such as a maximum daily loss of 2% of trading capital.\n* **Mitigation Strategies**: Develop specific actions to mitigate identified risks. For instance, if your strategy shows a tendency for high drawdowns during news events, implement a rule to reduce position sizes by 50% during major economic releases.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Appetite",
          "definition": "The level of risk that a proprietary trading firm is willing to accept in its trading activities."
        },
        {
          "term": "Value at Risk (VaR)",
          "definition": "A statistical measure used to assess the level of risk associated with a portfolio."
        }
      ],
      "whyThisMatters": "Conducting thorough risk assessments ensures that trading strategies do not exceed the risk thresholds set by the proprietary firm, thereby maintaining compliance and capital integrity.",
      "realLifeExample": "A trader executing a strategy on GBPJPY identifies a potential 3% drawdown during the London session, prompting a review of position sizing to align with the firm's 2% maximum loss rule.",
      "commonMistake": "Failing to regularly update risk assessments based on changing market conditions can lead to non-compliance with firm rules.",
      "quickNote": "Regularly assess and document risks to align with the firm's risk appetite.",
      "mentorText": "When I assess risks, I look at every angle. If your strategy can't withstand a 3% drawdown, you need to adjust your position sizes or rethink your approach.",
      "mentorAnalogy": "Think of risk assessment like a safety inspection in aviation; every potential hazard must be identified and mitigated before takeoff."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Psychological Aspects of Compliance",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C10 -->\n### Core Scenario: Mindset for Compliance\nAdhering to proprietary firm rules requires a disciplined mindset that can significantly impact trading performance. This card discusses **the psychological factors influencing compliance and decision-making**.\n\n* **Cognitive Dissonance**: Recognize the internal conflict that arises when personal trading beliefs clash with firm rules. For example, if you believe a trade is a high probability but it violates risk limits, this dissonance can lead to poor decision-making.\n* **Emotional Regulation**: Develop techniques to manage emotions that arise from compliance pressures. Implement a pre-trade checklist to reinforce adherence to rules, reducing impulsive decisions during stressful market conditions.\n* **Accountability Mechanisms**: Create accountability structures, such as trading journals or peer reviews, to reinforce compliance. Documenting trades and rationales can help maintain focus on firm rules and reduce emotional trading.",
    "context": {
      "keyTerms": [
        {
          "term": "Cognitive Dissonance",
          "definition": "The mental discomfort experienced when holding two conflicting beliefs or values."
        },
        {
          "term": "Emotional Regulation",
          "definition": "The ability to manage and respond to emotional experiences effectively."
        }
      ],
      "whyThisMatters": "Understanding the psychological aspects of compliance helps traders maintain discipline and adhere to proprietary trading rules, ultimately enhancing performance.",
      "realLifeExample": "A trader feels compelled to enter a position on AUDCAD despite it breaching the firm's risk threshold, leading to a loss that could have been avoided with proper emotional regulation.",
      "commonMistake": "Ignoring the psychological impact of compliance can lead to emotional trading and increased risk-taking.",
      "quickNote": "Cultivate a disciplined mindset to enhance compliance with firm rules.",
      "mentorText": "Remember, compliance isn't just about rules; it's about mindset. If you feel the urge to break a rule, pause and reassess your emotional state.",
      "mentorAnalogy": "Think of compliance like a surgeon following strict protocols; any deviation can lead to serious consequences, and mental clarity is essential for success."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Strategy Execution",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C11 -->\n### Core Scenario: Avoiding Execution Errors\nTraders often encounter pitfalls when executing strategies under proprietary firm rules. This card identifies **frequent errors and how to circumvent them**.\n\n* **Overleveraging**: Many traders exceed leverage limits set by the firm, which can lead to rapid account depletion. For instance, using 10:1 leverage on a $10,000 account instead of the firm’s 5:1 maximum can result in significant losses during market fluctuations.\n* **Ignoring Drawdown Limits**: Failing to adhere to drawdown limits can jeopardize funding. If a trader experiences a 7% drawdown while the firm’s limit is 5%, immediate corrective action is necessary to avoid account termination.\n* **Inconsistent Strategy Application**: Deviating from established strategies due to market noise can lead to inconsistent results. Traders must stick to their predefined rules, such as executing trades only during specific market hours to avoid erratic behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase the potential return of an investment."
        },
        {
          "term": "Drawdown",
          "definition": "The reduction of one's capital after a series of losing trades."
        }
      ],
      "whyThisMatters": "Identifying and avoiding common execution pitfalls is essential for maintaining compliance and protecting trading capital within proprietary firms.",
      "realLifeExample": "A trader disregards the firm’s 5% drawdown rule and allows losses to accumulate, reaching a 6% drawdown, which leads to immediate account review and potential funding loss.",
      "commonMistake": "Many traders fail to recognize the importance of adhering strictly to leverage and drawdown limits, often leading to account termination.",
      "quickNote": "Stay vigilant against common execution errors to ensure compliance.",
      "mentorText": "Execution is where many traders falter. Stick to your rules, and don’t let market noise sway you from your strategy.",
      "mentorAnalogy": "Executing a trading strategy is like a pilot following a flight plan; any deviation can lead to disastrous outcomes."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Synthesis of Strategies for Compliance",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C12 -->\n### Core Scenario: Comprehensive Strategy Synthesis\nSynthesizing various strategies is essential for ensuring compliance with proprietary trading firm rules. This card outlines **how to integrate multiple strategies while adhering to firm guidelines**.\n\n* **Rule Integration**: Combine strategies by ensuring that each adheres to the firm’s risk management rules. For example, if one strategy allows for a maximum 2% drawdown and another allows for 1%, the synthesized strategy should not exceed 1% to maintain compliance.\n* **Diversification Protocols**: Implement diversification across asset classes to mitigate risk. For instance, if trading both forex and commodities, ensure that the combined exposure does not breach the firm's overall risk limits.\n* **Performance Review Mechanism**: Establish a regular review process to assess the performance of synthesized strategies. This includes analyzing drawdown periods and adjusting strategies accordingly to remain within the firm's risk appetite.",
    "context": {
      "keyTerms": [
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various financial instruments to reduce risk."
        },
        {
          "term": "Performance Review",
          "definition": "A systematic evaluation of trading strategies to assess effectiveness and compliance."
        }
      ],
      "whyThisMatters": "Synthesizing strategies ensures that traders can adapt to market conditions while remaining compliant with proprietary trading firm rules.",
      "realLifeExample": "A trader synthesizes a forex scalping strategy with a longer-term commodity strategy, ensuring that the overall risk does not exceed the firm’s 3% maximum drawdown limit during backtesting.",
      "commonMistake": "Failing to integrate rules from different strategies can lead to non-compliance and increased risk exposure.",
      "quickNote": "Integrate multiple strategies while adhering to firm rules for comprehensive compliance.",
      "mentorText": "When synthesizing strategies, think of it as creating a balanced diet; each component must work together without exceeding your limits.",
      "mentorAnalogy": "Synthesis of strategies is akin to a chef combining ingredients; each must complement the others while adhering to dietary restrictions."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Case Studies in Compliance",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C13 -->\n### Core Scenario: Successful Compliance Alignment\nEngagement with real-world case studies provides insight into the effective alignment of trading strategies with proprietary firm rules. This card examines **specific instances where traders successfully navigated compliance challenges**.\n\n* **Case Study: Firm A's Risk Management Protocol**: Trader X adhered to Firm A’s maximum drawdown limit of 5% by implementing a tiered position sizing strategy. After experiencing a 3% drawdown, Trader X reduced position sizes to mitigate risk, ultimately recovering losses without breaching firm rules.\n* **Case Study: Firm B's Trade Execution Guidelines**: Trader Y executed trades within the specified timeframes set by Firm B, ensuring all trades were completed within the first hour of the trading session. This adherence resulted in a 15% increase in overall profitability due to reduced slippage and improved execution quality.\n* **Case Study: Firm C's Diversification Requirement**: Trader Z diversified their portfolio across multiple asset classes, complying with Firm C’s requirement to hold no more than 30% in any single asset. This strategy not only met compliance standards but also reduced volatility in the trader’s overall performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Compliance Alignment",
          "definition": "The process of ensuring trading strategies adhere to proprietary firm rules."
        },
        {
          "term": "Drawdown Limit",
          "definition": "The maximum allowable loss from a peak to a trough in a trading account."
        }
      ],
      "whyThisMatters": "Understanding real-world applications of compliance strategies enables traders to develop robust frameworks that align with proprietary firm expectations.",
      "realLifeExample": "Trader X at Firm A maintained a 5% drawdown limit by adjusting position sizes after a 3% loss, demonstrating effective compliance.",
      "commonMistake": "Traders often fail to adjust their strategies in response to drawdown limits, risking non-compliance and potential funding loss.",
      "quickNote": "Real-world case studies provide actionable insights into compliance strategies.",
      "mentorText": "Consider how Trader X adjusted their approach after hitting a drawdown. This is not just about numbers; it’s about discipline and adherence to rules that protect your capital.",
      "mentorAnalogy": "Think of compliance like an aircraft’s flight plan. Just as pilots must adhere to specific routes and altitudes to ensure safety, traders must follow firm rules to navigate the market effectively."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "practice",
    "title": "Recap of Key Compliance Strategies",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C14 -->\n### Core Scenario: Compliance Strategy Recap\nSummarizing key strategies reinforces understanding and application of proprietary trading firm rules. This card focuses on **the essential compliance strategies necessary for successful trading execution**.\n\n* **Drawdown Management**: Establish a clear plan for managing drawdowns by setting predefined limits and adjusting position sizes accordingly. For instance, if your account balance is $100,000, and the drawdown limit is 5%, ensure that losses do not exceed $5,000 before implementing corrective measures.\n* **Adherence to Trading Hours**: Ensure all trades are executed within the designated trading hours set by the firm. For example, if the firm specifies trading must occur between 9:30 AM and 4:00 PM EST, avoid placing trades outside these hours to remain compliant.\n* **Diversification Protocol**: Maintain a diversified portfolio to mitigate risk. If a firm mandates that no single asset can exceed 20% of total capital, ensure that your positions are spread across various instruments to comply with this rule.",
    "context": {
      "keyTerms": [
        {
          "term": "Drawdown Management",
          "definition": "The strategy of controlling losses to stay within predefined limits."
        },
        {
          "term": "Trading Hours Compliance",
          "definition": "The requirement to execute trades only during specified market hours."
        }
      ],
      "whyThisMatters": "Recapping compliance strategies ensures traders remain vigilant and disciplined in their execution, reducing the risk of funding audits.",
      "realLifeExample": "A trader with a $200,000 account successfully managed a 5% drawdown by reducing position sizes after reaching a $10,000 loss, demonstrating effective drawdown management.",
      "commonMistake": "Many traders neglect to regularly review their compliance strategies, leading to unintentional breaches of firm rules.",
      "quickNote": "Regularly revisiting compliance strategies is essential for maintaining funding eligibility.",
      "mentorText": "Remember, compliance isn’t just a checkbox; it’s a continuous process. Review your strategies regularly to ensure you’re not just compliant today but also tomorrow.",
      "mentorAnalogy": "Compliance is like a surgeon’s checklist before an operation. Each step must be followed meticulously to ensure a successful outcome and avoid complications."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A trader has a $150,000 account with a 5% drawdown limit. After experiencing a $6,000 loss, what should the trader do next?",
      "options": [
        {
          "id": "0",
          "text": "Continue trading without changes.",
          "isCorrect": false,
          "feedback": "Continuing without adjustments risks exceeding the drawdown limit."
        },
        {
          "id": "1",
          "text": "Reduce position sizes for future trades.",
          "isCorrect": true,
          "feedback": "Reducing position sizes helps manage risk and adhere to the drawdown limit."
        },
        {
          "id": "2",
          "text": "Withdraw funds immediately.",
          "isCorrect": false,
          "feedback": "Withdrawing funds does not address the need to manage drawdown."
        },
        {
          "id": "3",
          "text": "Stop trading for the rest of the month.",
          "isCorrect": false,
          "feedback": "While stopping may prevent further losses, it does not align with a proactive compliance strategy."
        }
      ]
    },
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "summary",
    "title": "Core Certification Portfolio 15 (Module 9.6 - CORE)",
    "label": "Core Track",
    "body": "<!-- M9.6-core-C15 -->\n### Core Scenario: Advanced Application of Prop Firm Rules\nThis summary card encapsulates advanced applications of Prop Firm Rules & Funding Audits concepts tailored for Core trading. It emphasizes **the integration of compliance into daily trading practices**.\n\n* **Comprehensive Rulebook Review**: Conduct a thorough review of the proprietary firm’s rulebook before trading. For example, ensure you understand specific risk parameters, such as maximum allowable drawdowns and position limits, to avoid inadvertent breaches.\n* **Daily Compliance Checklists**: Implement a daily checklist to verify adherence to firm rules. This could include confirming that all trades executed align with the firm’s risk management guidelines and that no single asset exceeds the specified limit.\n* **Performance Review Protocol**: Schedule regular performance reviews to assess compliance with trading strategies. For instance, analyze monthly performance against the firm’s benchmarks to ensure alignment and adjust strategies as necessary.",
    "context": {
      "keyTerms": [
        {
          "term": "Rulebook Review",
          "definition": "The process of thoroughly understanding a proprietary firm's trading rules."
        },
        {
          "term": "Compliance Checklist",
          "definition": "A daily tool used to verify adherence to trading rules."
        }
      ],
      "whyThisMatters": "Advanced applications of compliance concepts ensure traders maintain eligibility for funding and optimize their trading performance.",
      "realLifeExample": "A trader who reviews the rulebook and implements a compliance checklist increases their funding eligibility by 20% over six months due to reduced breaches.",
      "commonMistake": "Traders often overlook the importance of regular performance reviews, leading to non-compliance and funding issues.",
      "quickNote": "Integrating compliance into daily practices is essential for sustainable trading success.",
      "mentorText": "Think of compliance as the foundation of your trading strategy. Without a solid foundation, everything else is at risk. Review your rules daily to ensure you’re building on solid ground.",
      "mentorAnalogy": "Compliance is akin to a pilot conducting pre-flight checks. Just as pilots ensure all systems are operational before takeoff, traders must confirm adherence to rules before executing trades."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  }
];
