import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Operational Stress Testing Framework",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C1 -->\n### Core Framework: Operational Stress Testing\nOperational stress testing is critical for identifying vulnerabilities in trading operations during extreme market conditions. This card outlines the foundational elements necessary for establishing a robust testing framework.\n\n* **Critical Function Identification**: Catalog all essential business functions, such as trade execution, risk management, and compliance. Each function must be assessed for its role in maintaining operational integrity during market disruptions.\n* **Failure Point Analysis**: Identify potential failure points within each critical function. For example, assess the impact of a 50% drop in liquidity on trade execution capabilities.\n* **Testing Frequency and Scope**: Establish a regular schedule for stress tests, ensuring comprehensive coverage of all operational aspects. Tests should simulate various extreme scenarios, such as flash crashes or geopolitical events, to evaluate resilience.",
    "visualKey": "stress-test-model",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Risk Assessment Techniques",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C2 -->\n### Risk Evaluation: Assessment Techniques\nEffective risk assessment techniques are vital for uncovering vulnerabilities in operational processes, particularly in anticipation of black swan events. This card details methods to enhance your evaluation capabilities.\n\n* **Qualitative Risk Assessment**: Conduct interviews with key stakeholders to gather insights on perceived risks. Utilize tools like SWOT analysis to identify strengths, weaknesses, opportunities, and threats related to operational resilience.\n* **Quantitative Risk Modeling**: Implement statistical models, such as Value at Risk (VaR), to quantify potential losses under extreme conditions. For instance, analyze historical data to estimate the potential impact of a 30% market downturn on portfolio performance.\n* **Scenario-Based Assessments**: Develop specific scenarios that mimic extreme market conditions, such as a sudden interest rate hike or a major economic collapse, to evaluate the effectiveness of existing risk controls.",
    "visualKey": "stress-test-model",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Scenario Analysis for Stress Testing",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C3 -->\n### Scenario Development: Stress Testing\nCreating realistic stress scenarios is essential for preparing effective response strategies to extreme market disruptions. This card focuses on the methodology for developing these scenarios.\n\n* **Historical Event Analysis**: Review past market crises, such as the 2008 financial crisis or the COVID-19 market crash, to extract relevant data. Use these events to construct scenarios that reflect potential future disruptions.\n* **Market Condition Simulation**: Develop simulations that incorporate various market conditions, such as high volatility, low liquidity, and sudden market reversals. For example, simulate a scenario where the S&P 500 drops 20% within a week.\n* **Cross-Asset Impact Assessment**: Evaluate how stress scenarios in one asset class can affect others. For instance, assess the impact of a significant drop in oil prices on related equities and commodities.",
    "visualKey": "stress-test-model",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Designing Recovery Protocols",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C4 -->\n### Protocol Development: Recovery Strategies\nDesigning effective recovery protocols is critical for ensuring business continuity during and after a market crisis. This card outlines the key components of a comprehensive recovery plan.\n\n* **Response Team Formation**: Establish a dedicated crisis management team responsible for executing recovery protocols. This team should include representatives from trading, risk management, and compliance to ensure a holistic approach.\n* **Communication Plans**: Develop clear communication strategies for internal and external stakeholders. For example, outline how to inform clients and partners during a market disruption, ensuring transparency and trust.\n* **Testing and Drills**: Regularly conduct drills to test recovery protocols under simulated crisis conditions. For instance, execute a mock scenario where trading operations are halted for 48 hours to evaluate the effectiveness of the recovery plan.",
    "visualKey": "stress-test-model",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Communication Strategies During Crises",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C5 -->\n### Core Scenario: Effective Crisis Communication\nEffective communication is paramount during market crises to maintain stakeholder confidence and ensure informed decision-making. This card outlines **how to develop a structured communication plan that addresses stakeholder needs during extreme disruptions**.\n\n* **Stakeholder Identification**: Clearly define all stakeholders, including clients, employees, and regulators. Tailor communication strategies to address the specific concerns and information needs of each group.\n* **Information Flow Protocol**: Establish a hierarchy for information dissemination. Designate spokespersons and set timelines for updates to ensure timely and accurate information is shared.\n* **Feedback Mechanism**: Implement channels for stakeholders to provide feedback or ask questions. This ensures that communication is two-way and allows for adjustments based on stakeholder concerns.",
    "context": {
      "keyTerms": [
        {
          "term": "Stakeholder",
          "definition": "Any individual or group that has an interest in the outcome of a trading operation."
        },
        {
          "term": "Crisis Communication Plan",
          "definition": "A structured approach to communicating with stakeholders during a market disruption."
        }
      ],
      "whyThisMatters": "Effective communication can mitigate panic and maintain trust during extreme market events, which is crucial for recovery.",
      "realLifeExample": "During the March 2020 market crash, a major brokerage firm issued daily updates to clients, detailing market conditions and their response strategies, which helped maintain client trust.",
      "commonMistake": "Failing to communicate promptly can lead to misinformation and increased anxiety among stakeholders.",
      "quickNote": "A well-structured communication plan is essential for maintaining stakeholder confidence during crises.",
      "mentorText": "When a crisis hits, you must communicate clearly and quickly. Identify who needs to know what and ensure they receive timely updates.",
      "mentorAnalogy": "Think of a surgeon in an operating room; they must communicate effectively with the entire team to ensure a successful procedure, especially in unexpected situations."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Testing Methodologies for Stress Scenarios",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C6 -->\n### Core Scenario: Stress Testing Frameworks\nStress testing methodologies are essential for evaluating the robustness of recovery protocols under extreme market conditions. This card focuses on **how to implement various testing methodologies to assess the effectiveness of recovery strategies**.\n\n* **Scenario Analysis**: Develop hypothetical stress scenarios based on historical data and potential future events. For instance, simulate a 30% market drop over a week to evaluate liquidity responses.\n* **Sensitivity Testing**: Identify key variables that impact your trading strategy and assess how changes in these variables affect performance. For example, analyze how a sudden spike in volatility impacts margin requirements.\n* **Reverse Stress Testing**: Start with a defined failure point and work backward to identify the conditions that could lead to that outcome. This helps in recognizing vulnerabilities in recovery protocols.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating the impact of hypothetical market events on trading strategies."
        },
        {
          "term": "Sensitivity Testing",
          "definition": "Assessing how changes in specific variables affect the performance of a trading strategy."
        }
      ],
      "whyThisMatters": "Robust testing methodologies ensure that recovery protocols are practical and effective in real-world scenarios.",
      "realLifeExample": "A hedge fund conducted a stress test simulating a 50% drop in equity markets over a month, revealing weaknesses in their liquidity management strategies.",
      "commonMistake": "Over-reliance on historical data without considering potential future market conditions can lead to inadequate stress testing.",
      "quickNote": "Implementing diverse testing methodologies is crucial for evaluating the resilience of recovery protocols.",
      "mentorText": "You need to stress-test your strategies rigorously. Use various scenarios to see how they hold up under pressure.",
      "mentorAnalogy": "Like a civil engineer testing a bridge's load capacity, you must evaluate how your trading strategies withstand extreme market pressures."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Post-Event Analysis and Improvement",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C7 -->\n### Core Scenario: Continuous Improvement Post-Crisis\nPost-event analysis is critical for refining recovery protocols based on lessons learned from stress tests and actual market disruptions. This card focuses on **how to conduct thorough post-event analyses to enhance future performance**.\n\n* **Data Collection**: Gather quantitative and qualitative data from the event. Analyze trade performance, liquidity responses, and communication effectiveness during the crisis.\n* **Root Cause Analysis**: Identify the underlying causes of any failures or shortcomings observed during the event. For example, if liquidity dried up, assess whether it was due to market conditions or internal processes.\n* **Action Plan Development**: Create a detailed action plan based on findings. This should include specific changes to protocols, training for staff, and adjustments to communication strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Post-Event Analysis",
          "definition": "A review process conducted after a market disruption to evaluate response effectiveness."
        },
        {
          "term": "Root Cause Analysis",
          "definition": "A method for identifying the fundamental reasons for failures in performance."
        }
      ],
      "whyThisMatters": "Continuous improvement ensures that recovery protocols evolve and adapt to new challenges, enhancing overall resilience.",
      "realLifeExample": "After a significant market downturn, a trading firm conducted a post-event analysis that revealed gaps in their risk management framework, leading to a comprehensive overhaul.",
      "commonMistake": "Neglecting to document and analyze performance during a crisis can result in missed opportunities for improvement.",
      "quickNote": "Post-event analysis is vital for refining recovery strategies and enhancing resilience.",
      "mentorText": "After every crisis, take the time to analyze what happened. Identify what worked and what didn’t to improve your protocols.",
      "mentorAnalogy": "Like a sports team reviewing game footage, you must analyze past performance to identify areas for improvement and strategize for future challenges."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Regulatory Compliance in Stress Testing",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C8 -->\n### Core Scenario: Navigating Regulatory Standards\nUnderstanding the regulatory landscape surrounding stress testing is essential for ensuring that recovery protocols meet industry standards. This card outlines **how to align stress testing methodologies with regulatory requirements**.\n\n* **Regulatory Framework Overview**: Familiarize yourself with key regulations governing stress testing, such as the Basel III framework for banks. Ensure that your protocols align with these standards to avoid compliance issues.\n* **Documentation Requirements**: Maintain comprehensive documentation of stress testing methodologies and results. Regulators often require detailed records to verify compliance and effectiveness.\n* **Regular Review and Updates**: Establish a schedule for reviewing and updating stress testing protocols to ensure ongoing compliance with evolving regulations. This includes adapting to new regulatory requirements as they arise.",
    "context": {
      "keyTerms": [
        {
          "term": "Regulatory Compliance",
          "definition": "Adhering to laws and regulations governing financial operations."
        },
        {
          "term": "Basel III",
          "definition": "An international regulatory framework for banks focused on risk management and capital adequacy."
        }
      ],
      "whyThisMatters": "Non-compliance can lead to severe penalties and undermine the effectiveness of recovery protocols.",
      "realLifeExample": "A financial institution faced significant fines for failing to meet stress testing requirements under Basel III, prompting a complete overhaul of their compliance processes.",
      "commonMistake": "Ignoring regulatory updates can lead to outdated protocols that fail to meet current compliance standards.",
      "quickNote": "Aligning stress testing with regulatory standards is crucial for compliance and operational integrity.",
      "mentorText": "Stay informed about regulatory requirements. Your stress testing must meet these standards to ensure compliance and avoid penalties.",
      "mentorAnalogy": "Like an architect ensuring a building meets safety codes, you must ensure your stress testing protocols comply with regulatory standards to avoid structural failures."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Integrating Stress Testing into Business Operations",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C9 -->\n### Core Strategy: Embedding Stress Testing in Operations\nIntegrating stress testing into daily operations fosters a proactive approach to market volatility. This card outlines **how to institutionalize stress testing as a routine practice**.\n\n* **Regular Scenario Analysis**: Schedule quarterly stress tests that simulate extreme market conditions, such as a 30% drop in equity indices or a sudden spike in interest rates. Ensure that all departments participate to assess their response strategies.\n* **Cultural Shift**: Promote a culture of resilience by incorporating stress testing outcomes into performance reviews. Reward teams that demonstrate preparedness and adaptability in their recovery plans.\n* **Feedback Loop Mechanism**: Establish a process for continuous improvement based on stress test results. After each test, conduct a debrief to identify weaknesses and adjust protocols accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Stress Testing",
          "definition": "A simulation technique used to evaluate how a system responds to extreme conditions."
        }
      ],
      "whyThisMatters": "Effective integration of stress testing ensures that organizations can swiftly adapt to unexpected market disruptions, minimizing losses.",
      "realLifeExample": "A financial institution conducts a stress test simulating a 50% drop in asset values, revealing vulnerabilities in their liquidity management strategy, prompting immediate adjustments.",
      "commonMistake": "Failing to involve all relevant departments in stress testing, leading to incomplete assessments and unpreparedness.",
      "quickNote": "Embed stress testing into the operational fabric for sustained resilience.",
      "mentorText": "Think of stress testing as your organization's fire drill. Just as you wouldn't wait for a fire to practice evacuation, you shouldn't wait for a market crisis to test your response.",
      "mentorAnalogy": "Integrating stress testing is like a pilot conducting pre-flight checks; it ensures all systems are functional before facing unpredictable weather."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Impact of Technology on Stress Testing",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C10 -->\n### Core Insight: Enhancing Stress Testing with Technology\nEmerging technologies significantly improve the accuracy and efficiency of stress testing processes. This card elaborates on **how to leverage technology to enhance recovery protocols**.\n\n* **Data Analytics Tools**: Utilize advanced analytics platforms to process vast datasets, enabling real-time scenario modeling. For instance, using AI algorithms to predict the impact of a geopolitical crisis on commodity prices.\n* **Simulation Software**: Implement sophisticated simulation software that can model various stress scenarios, such as a sudden market crash or liquidity freeze, allowing for rapid assessment of potential impacts.\n* **Automated Reporting Systems**: Develop automated systems for generating stress test reports, ensuring timely dissemination of findings to stakeholders. This can facilitate quicker decision-making during crises.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulation Software",
          "definition": "Programs designed to model real-world scenarios for testing purposes."
        }
      ],
      "whyThisMatters": "Leveraging technology enhances the precision of stress tests, allowing for more informed decision-making during market disruptions.",
      "realLifeExample": "A hedge fund employs machine learning to analyze past market crashes, refining their stress testing models to predict potential vulnerabilities in their portfolio during a tech sector downturn.",
      "commonMistake": "Over-reliance on outdated tools that fail to capture the complexity of modern market dynamics, leading to ineffective stress tests.",
      "quickNote": "Technology amplifies the effectiveness of stress testing, enabling proactive risk management.",
      "mentorText": "Imagine your stress test as a high-stakes game of chess. The right technology helps you anticipate your opponent's moves, allowing you to strategize effectively.",
      "mentorAnalogy": "Using technology in stress testing is akin to a surgeon employing the latest medical imaging tools; it provides critical insights that guide precise interventions."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Case Studies of Successful Recovery Protocols",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C11 -->\n### Core Analysis: Learning from Real-World Recovery Protocols\nAnalyzing successful recovery protocols during market disruptions provides valuable insights for future applications. This card focuses on **key takeaways from notable case studies**.\n\n* **2008 Financial Crisis**: Examine how major banks implemented rapid liquidity measures, such as the Federal Reserve's emergency lending programs, to stabilize their operations during the crisis. Key takeaway: Establishing clear lines of communication with regulators is crucial.\n* **COVID-19 Market Shock**: Review how companies pivoted their business models in response to sudden market changes, such as airlines shifting to cargo services. Key takeaway: Flexibility in operations can mitigate losses during unprecedented disruptions.\n* **Flash Crash of 2010**: Investigate how trading firms adapted their algorithms to prevent future occurrences of rapid market declines. Key takeaway: Continuous refinement of technology and protocols is essential to safeguard against similar events.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Measures",
          "definition": "Actions taken to ensure that an organization can meet its short-term financial obligations."
        }
      ],
      "whyThisMatters": "Understanding past recovery protocols equips traders and organizations with strategies to effectively navigate future market disruptions.",
      "realLifeExample": "During the 2020 market downturn, a major investment firm activated its crisis management plan, reallocating assets and communicating transparently with clients, resulting in a swift recovery of investor confidence.",
      "commonMistake": "Ignoring lessons from past disruptions, leading to repeated mistakes during future crises.",
      "quickNote": "Case studies reveal actionable insights for developing robust recovery protocols.",
      "mentorText": "Look at history as your playbook. Each market disruption teaches us something; it’s our job to learn and adapt those lessons into our recovery strategies.",
      "mentorAnalogy": "Analyzing past recovery protocols is like studying battle tactics; understanding what worked and what failed informs your strategy for future engagements."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Building Cross-Functional Teams for Recovery",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C12 -->\n### Core Framework: Cross-Functional Teams in Recovery Protocols\nDiverse perspectives are essential for developing effective recovery protocols. This card discusses **the importance of cross-functional teams in crisis management**.\n\n* **Diverse Expertise**: Assemble teams comprising members from finance, operations, IT, and compliance to ensure comprehensive coverage of all potential impacts during a crisis. For example, having IT on board can help address cybersecurity threats during market disruptions.\n* **Collaborative Simulations**: Conduct joint stress testing exercises that require input from all departments. This fosters a shared understanding of roles and responsibilities during a crisis, enhancing overall preparedness.\n* **Continuous Training**: Implement regular training sessions that involve all team members in recovery protocol updates. This ensures that everyone is aware of their roles and can act swiftly when needed.",
    "context": {
      "keyTerms": [
        {
          "term": "Cross-Functional Team",
          "definition": "A group composed of members from different departments working towards a common goal."
        }
      ],
      "whyThisMatters": "Cross-functional teams enhance the robustness of recovery protocols by integrating diverse insights and expertise.",
      "realLifeExample": "A multinational corporation faced a cybersecurity breach and activated a cross-functional team that included IT, legal, and PR departments, resulting in a coordinated and effective response that minimized reputational damage.",
      "commonMistake": "Forming teams without clear objectives or roles, leading to confusion and inefficiency during a crisis.",
      "quickNote": "Cross-functional collaboration is vital for comprehensive crisis management.",
      "mentorText": "Think of your recovery team as a sports team; each player has a specific role, but success depends on seamless collaboration and communication.",
      "mentorAnalogy": "Building cross-functional teams is like assembling a surgical team; each member brings unique skills that are critical for successful outcomes in high-pressure situations."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Stress Test Simulation Exercise",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C13 -->\n### Core Scenario: Stress Test Simulation Exercise\nEngaging in a controlled simulation allows traders to apply stress testing protocols effectively. This card outlines **how to execute a stress test simulation to evaluate recovery strategies under extreme market conditions**.\n\n* **Scenario Design**: Create realistic market scenarios that reflect potential black swan events, such as a sudden geopolitical crisis or an unexpected economic report. For example, simulate a 30% drop in the S&P 500 within a single trading session.\n* **Parameter Settings**: Define key parameters such as position sizes, leverage, and risk limits before initiating the simulation. Ensure that these parameters reflect your actual trading strategy to assess the impact accurately.\n* **Performance Metrics**: Analyze the outcomes based on metrics like drawdown, recovery time, and overall portfolio resilience. For instance, track how long it takes to recover to pre-crisis equity levels after a simulated 20% loss.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Stress Test",
          "definition": "A simulation designed to evaluate the resilience of a trading strategy under extreme market conditions."
        },
        {
          "term": "Black Swan Event",
          "definition": "An unpredictable event that has severe consequences on market dynamics."
        }
      ],
      "whyThisMatters": "Understanding stress test simulations equips traders with the insights necessary to navigate extreme market disruptions effectively.",
      "realLifeExample": "During the COVID-19 market crash in March 2020, a simulated stress test could have revealed vulnerabilities in a portfolio heavily weighted in travel stocks, prompting timely adjustments.",
      "commonMistake": "Failing to incorporate realistic scenarios that reflect actual market behavior can lead to misleading results.",
      "quickNote": "Conducting stress tests helps identify weaknesses in trading strategies before real market disruptions occur.",
      "mentorText": "When I run a stress test, I’m not just looking at numbers; I’m assessing how my strategy holds up under pressure. It’s about preparing for the unexpected.",
      "mentorAnalogy": "Think of a stress test like a crash test for a car; it reveals how well the vehicle can withstand an accident, allowing for necessary design improvements."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "practice",
    "title": "Module Recap and Key Insights",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C14 -->\n### Core Scenario: Module Recap and Key Insights\nThis card reinforces the critical insights gained throughout the module on operational stress testing and recovery protocols. It emphasizes **the importance of synthesizing knowledge to enhance trading resilience**.\n\n* **Key Insights Summary**: Consolidate the main takeaways from the module, such as the necessity of pre-defined recovery protocols and the role of stress testing in identifying potential weaknesses. For example, highlight how a 15% drawdown threshold can trigger a specific recovery strategy.\n* **Operational Protocols**: Review the established protocols for responding to black swan events, including immediate risk assessment and adjustment of position sizes. Ensure that these protocols are documented and easily accessible during trading hours.\n* **Continuous Improvement**: Emphasize the need for ongoing evaluation and refinement of stress testing methods and recovery strategies. Regularly update simulations based on evolving market conditions and personal trading experiences.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Operational Protocols",
          "definition": "Pre-defined procedures for responding to market disruptions."
        },
        {
          "term": "Continuous Improvement",
          "definition": "The ongoing effort to enhance strategies and processes based on past performance."
        }
      ],
      "whyThisMatters": "Reinforcing key insights ensures that traders can effectively implement stress testing and recovery strategies in real-time.",
      "realLifeExample": "After reviewing the module, a trader might implement a protocol to reduce exposure by 50% if a major economic indicator deviates significantly from expectations.",
      "commonMistake": "Overlooking the importance of documenting insights and protocols can lead to confusion during actual market disruptions.",
      "quickNote": "Synthesizing module insights prepares traders for effective responses to market volatility.",
      "mentorText": "I expect you to not just remember the concepts but to apply them. Each insight is a tool in your toolkit for when the market gets rough.",
      "mentorAnalogy": "Consider this recap like a pilot reviewing emergency procedures before a flight; it’s about ensuring readiness for any unexpected turbulence."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Which of the following is a key insight from the module on stress testing?",
      "options": [
        {
          "id": "0",
          "text": "Stress tests should only be conducted during market hours.",
          "isCorrect": false,
          "feedback": "Stress tests can be conducted in a controlled environment, regardless of market hours."
        },
        {
          "id": "1",
          "text": "Pre-defined recovery protocols are essential for managing black swan events.",
          "isCorrect": true,
          "feedback": "Having pre-defined protocols allows for quick and effective responses during market disruptions."
        },
        {
          "id": "2",
          "text": "Stress testing is only necessary for high-frequency trading strategies.",
          "isCorrect": false,
          "feedback": "All trading strategies benefit from stress testing to assess their resilience."
        },
        {
          "id": "3",
          "text": "Continuous improvement is optional in trading strategy development.",
          "isCorrect": false,
          "feedback": "Continuous improvement is crucial for adapting to changing market conditions."
        }
      ]
    },
    "visualKey": "stress-test-model"
  },
  {
    "type": "summary",
    "title": "Core Certification Portfolio 15 (Module 9.5 - CORE)",
    "label": "Core Track",
    "body": "<!-- M9.5-core-C15 -->\n### Core Scenario: Core Certification Portfolio 15\nThis card encapsulates advanced applications of the concepts learned in System Stress Testing & Black Swans. It focuses on **integrating stress testing insights into a comprehensive trading portfolio**.\n\n* **Portfolio Resilience Assessment**: Evaluate the overall resilience of your trading portfolio by applying stress testing results to each asset class. For instance, assess how a 25% market drop affects a diversified portfolio versus a concentrated one.\n* **Risk Management Integration**: Incorporate stress testing insights into your risk management framework. Define specific thresholds for asset allocation adjustments based on stress test outcomes, such as reducing exposure to high-risk assets after a simulated downturn.\n* **Scenario Planning**: Develop a series of potential market scenarios based on historical black swan events and create corresponding action plans. For example, if a major currency pair drops 15% unexpectedly, outline the steps to mitigate losses and reposition the portfolio.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Portfolio Resilience",
          "definition": "The ability of a trading portfolio to withstand market disruptions."
        },
        {
          "term": "Scenario Planning",
          "definition": "The process of preparing for potential future market conditions based on historical data."
        }
      ],
      "whyThisMatters": "Advanced application of stress testing concepts ensures that traders can effectively manage portfolios during extreme market conditions.",
      "realLifeExample": "A trader may use stress testing to determine that their portfolio could withstand a 20% drop in the NASDAQ without breaching risk limits, allowing for strategic positioning.",
      "commonMistake": "Neglecting to update portfolio assessments based on new stress test results can lead to unpreparedness during actual market events.",
      "quickNote": "Integrating stress testing insights into portfolio management enhances overall trading resilience.",
      "mentorText": "Your portfolio is like a fortress; stress testing is how we identify weak points and reinforce them before the storm hits.",
      "mentorAnalogy": "Think of scenario planning as a fire drill; it prepares you for emergencies, ensuring that you know exactly what to do when the alarm goes off."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  }
];
