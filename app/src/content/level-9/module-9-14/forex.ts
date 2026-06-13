import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Forex Capital Management Overview",
    "label": "Forex Track",
    "body": "<!-- M9.14-forex-C1 -->\n### Core Scenario: Institutional Forex Capital Management\nManaging forex capital requires adherence to specific leverage limits and structured reporting timelines that differ from other asset classes. This card outlines **the critical components of institutional capital management in forex**.\n\n* **Leverage Constraints**: Institutional investors typically operate under strict leverage limits, often capped at 10:1 or lower. This ensures that capital is preserved and risk is managed effectively, preventing excessive exposure to market volatility.\n* **Reporting Frequency**: Forex capital management necessitates regular reporting intervals, commonly on a daily or weekly basis, to maintain transparency with stakeholders and comply with regulatory standards.\n* **Performance Metrics**: Key performance indicators (KPIs) such as Sharpe Ratio and maximum drawdown must be reported consistently to evaluate the effectiveness of capital allocation strategies and risk management practices.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Limits",
          "definition": "The maximum amount of borrowed capital that an institution can use in forex trading."
        },
        {
          "term": "Reporting Timelines",
          "definition": "Scheduled intervals at which financial performance and risk metrics are communicated to stakeholders."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the effectiveness of trading strategies."
        }
      ],
      "whyThisMatters": "Understanding the unique aspects of forex capital management is essential for maintaining compliance and optimizing performance in institutional trading environments.",
      "realLifeExample": "A hedge fund managing $500 million in forex capital adheres to a 10:1 leverage limit, resulting in a maximum exposure of $5 billion while providing weekly performance reports to investors.",
      "commonMistake": "Failing to adhere to leverage limits can lead to significant losses and regulatory penalties.",
      "quickNote": "Institutional forex capital management requires strict adherence to leverage limits and timely reporting.",
      "mentorText": "Think of managing forex capital like piloting a commercial aircraft. You must operate within strict weight limits and adhere to a flight plan, ensuring safety and compliance at all times.",
      "mentorAnalogy": "Just as an aerospace engineer designs aircraft within specific weight and balance parameters, forex capital management requires strict adherence to leverage and reporting constraints."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Understanding Leverage Limits in Forex",
    "label": "Forex Track",
    "body": "<!-- M9.14-forex-C2 -->\n### Core Scenario: Implications of Leverage in Forex Trading\nLeverage limits in forex trading significantly impact capital management strategies and risk exposure. This card discusses **how to navigate these constraints effectively**.\n\n* **Risk Exposure Calculation**: Calculate total exposure by multiplying the capital allocated by the leverage ratio. For instance, with $1 million in capital and a 10:1 leverage limit, total exposure is $10 million, necessitating careful risk assessment.\n* **Margin Requirements**: Understand that higher leverage increases margin requirements, which can lead to margin calls if the market moves against the position. Ensure sufficient capital is maintained to meet these requirements at all times.\n* **Strategic Position Sizing**: Implement position sizing strategies that align with leverage limits to mitigate risk. For example, if trading EURUSD at 1.1000 with a 10:1 leverage, limit position size to $100,000 to avoid overexposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Exposure",
          "definition": "The total amount at risk in a trading position, influenced by leverage."
        },
        {
          "term": "Margin Requirements",
          "definition": "The minimum amount of capital needed to open and maintain a leveraged position."
        },
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        }
      ],
      "whyThisMatters": "Understanding leverage limits is critical for managing risk and ensuring compliance with institutional trading policies.",
      "realLifeExample": "A forex fund with $2 million capital uses a 20:1 leverage limit, allowing for a maximum exposure of $40 million, but must maintain a margin of at least $200,000 to avoid liquidation.",
      "commonMistake": "Over-leveraging positions without adequate risk assessment can lead to significant losses and margin calls.",
      "quickNote": "Leverage limits dictate risk exposure and margin requirements in forex trading.",
      "mentorText": "Managing leverage is like controlling the throttle of an aircraft. Too much throttle can lead to a dangerous ascent, just as excessive leverage can lead to catastrophic losses.",
      "mentorAnalogy": "Just as a pilot must carefully manage engine thrust to maintain safe flight, traders must control leverage to ensure their capital remains secure."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Establishing Reporting Timelines for Forex",
    "label": "Forex Track",
    "body": "<!-- M9.14-forex-C3 -->\n### Core Scenario: Critical Reporting Timelines\nEstablishing effective reporting timelines is essential for maintaining transparency and accountability in forex capital management. This card focuses on **the structured approach to reporting**.\n\n* **Daily Reporting**: Implement daily reporting to capture real-time performance metrics, including P&L, drawdown levels, and margin usage. This allows for immediate adjustments to trading strategies as needed.\n* **Weekly Summaries**: Provide weekly summaries that aggregate daily reports, highlighting trends, anomalies, and overall performance against benchmarks. This aids in strategic decision-making and stakeholder communication.\n* **Monthly Reviews**: Conduct comprehensive monthly reviews that include detailed analysis of trading strategies, risk exposures, and compliance with leverage limits. This ensures alignment with institutional objectives and regulatory requirements.",
    "context": {
      "keyTerms": [
        {
          "term": "Daily Reporting",
          "definition": "Regular updates on trading performance and risk metrics provided on a daily basis."
        },
        {
          "term": "Weekly Summaries",
          "definition": "Aggregated performance reports that highlight trends and anomalies over a week."
        },
        {
          "term": "Monthly Reviews",
          "definition": "In-depth evaluations of trading strategies and compliance conducted monthly."
        }
      ],
      "whyThisMatters": "Timely and structured reporting is crucial for effective risk management and maintaining investor confidence in forex capital management.",
      "realLifeExample": "A forex trading desk generates daily reports detailing P&L and margin usage, compiles weekly summaries for management review, and conducts monthly evaluations to assess compliance with institutional standards.",
      "commonMistake": "Neglecting to adhere to established reporting timelines can lead to a lack of transparency and potential compliance issues.",
      "quickNote": "Structured reporting timelines enhance transparency and accountability in forex capital management.",
      "mentorText": "Think of reporting like a flight log. Just as pilots document every flight detail for safety and compliance, traders must meticulously record their performance for accountability.",
      "mentorAnalogy": "Just as a surgeon maintains a detailed surgical log to ensure patient safety and compliance, forex traders must adhere to strict reporting timelines to safeguard capital and maintain investor trust."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Managing Currency Risk in Reporting",
    "label": "Forex Track",
    "body": "<!-- M9.14-forex-C4 -->\n### Core Scenario: Strategies for Currency Risk Management\nEffective management of currency risk is vital for accurate reporting in forex capital management. This card outlines **strategies to mitigate currency risk**.\n\n* **Hedging Techniques**: Utilize hedging strategies such as forward contracts or options to offset potential losses from currency fluctuations. For example, if holding a long position in GBPUSD, consider a short position in a correlated currency pair to hedge against adverse movements.\n* **Diversification of Currency Exposure**: Diversify investments across multiple currency pairs to spread risk. For instance, rather than concentrating on EURUSD, include positions in AUDJPY and USDCHF to reduce overall exposure to any single currency's volatility.\n* **Regular Risk Assessments**: Conduct regular assessments of currency risk exposure and adjust positions accordingly. Implement a quarterly review process to evaluate the effectiveness of hedging strategies and make necessary adjustments based on market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging Techniques",
          "definition": "Methods used to offset potential losses in currency positions."
        },
        {
          "term": "Currency Exposure",
          "definition": "The degree to which a portfolio is affected by fluctuations in currency values."
        },
        {
          "term": "Risk Assessments",
          "definition": "Evaluations conducted to determine the level of risk associated with currency positions."
        }
      ],
      "whyThisMatters": "Managing currency risk is essential for ensuring accurate and reliable investor reporting in forex capital management.",
      "realLifeExample": "A forex fund with significant exposure to EURUSD implements a hedging strategy using options to protect against a potential 5% decline in the euro, ensuring accurate reporting of net asset values.",
      "commonMistake": "Failing to hedge currency exposure can lead to significant discrepancies in reported performance metrics.",
      "quickNote": "Effective currency risk management ensures accurate reporting and investor communication.",
      "mentorText": "Managing currency risk is like a chef balancing flavors in a dish. You must adjust ingredients to achieve the perfect taste, just as you adjust positions to manage risk effectively.",
      "mentorAnalogy": "Just as a chef meticulously balances flavors to create a harmonious dish, traders must carefully manage currency exposure to ensure accurate reporting and investor satisfaction."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Understanding Margin Requirements",
    "label": "Forex Track",
    "body": "<!-- M9.14-forex-C5 -->\n### Core Scenario: Margin Requirements in Forex Trading\nMargin requirements dictate the amount of capital needed to open and maintain positions in forex trading. This card details **the mechanics of margin requirements and their implications for capital management**.\n\n* **Leverage Ratio Impact**: Understand that a leverage ratio of 100:1 means that for every $1 of your own capital, you can control $100 in the market. This amplifies both potential gains and losses, necessitating strict adherence to margin requirements.\n* **Initial vs. Maintenance Margin**: Recognize the difference between initial margin (the amount required to open a position) and maintenance margin (the minimum equity needed to keep the position open). For example, if the initial margin is 1% on a $10,000 position, $100 is required to open it.\n* **Margin Call Mechanism**: Be aware of the margin call process, which occurs when account equity falls below the maintenance margin. This can trigger liquidation of positions to cover losses, emphasizing the need for effective capital management strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Requirement",
          "definition": "The minimum amount of capital required to open and maintain a trading position."
        },
        {
          "term": "Leverage",
          "definition": "The use of borrowed funds to increase the potential return of an investment."
        }
      ],
      "whyThisMatters": "Understanding margin requirements is essential for managing risk and ensuring compliance with institutional capital management standards.",
      "realLifeExample": "A trader opens a EURUSD position worth $50,000 with a leverage of 100:1, requiring an initial margin of $500. If the position moves against the trader and equity drops below the maintenance margin, a margin call is triggered.",
      "commonMistake": "Failing to account for the impact of leverage on margin requirements can lead to unexpected margin calls and forced liquidations.",
      "quickNote": "Margin requirements dictate the necessary capital to control larger positions in forex trading.",
      "mentorText": "You must treat margin requirements as a strict boundary. If you exceed these limits, you risk not just your position but your entire capital. Always calculate your required margins before entering trades.",
      "mentorAnalogy": "Think of margin requirements like the fuel needed for a flight; without enough fuel, you cannot take off safely. In trading, insufficient margin can lead to a crash landing."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Evaluating Forex Performance Metrics",
    "label": "Forex Track",
    "body": "<!-- M9.14-forex-C6 -->\n### Core Scenario: Key Performance Metrics in Forex\nPerformance metrics are essential for assessing the effectiveness of forex capital management strategies. This card outlines **the critical metrics that should be reported and analyzed**.\n\n* **Return on Investment (ROI)**: Calculate ROI by comparing net profit to the total capital invested. For instance, if a trader invests $10,000 and earns $1,500, the ROI is 15%. This metric helps gauge overall performance.\n* **Sharpe Ratio**: Use the Sharpe Ratio to evaluate risk-adjusted returns. A ratio above 1 indicates that the return is greater than the risk taken. For example, if a trader has a return of 12% with a standard deviation of 4%, the Sharpe Ratio would be 3, indicating strong performance relative to risk.\n* **Drawdown Analysis**: Monitor maximum drawdown to assess the largest peak-to-trough decline in capital. A maximum drawdown of 20% means that the account value fell 20% from its highest point, critical for understanding risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Return on Investment (ROI)",
          "definition": "A performance measure used to evaluate the efficiency of an investment."
        },
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, calculated by dividing excess return by standard deviation."
        }
      ],
      "whyThisMatters": "Effective reporting of performance metrics allows for informed decision-making and enhances accountability in capital management.",
      "realLifeExample": "A forex fund reports a 20% ROI and a Sharpe Ratio of 2.5 for the quarter, indicating strong performance with controlled risk, while also noting a maximum drawdown of 15%.",
      "commonMistake": "Overlooking the importance of risk-adjusted metrics like the Sharpe Ratio can lead to misleading assessments of performance.",
      "quickNote": "Key performance metrics provide a framework for evaluating forex capital management effectiveness.",
      "mentorText": "You need to track your performance metrics like a pilot monitors flight data. Each number tells a story about your strategy's effectiveness and risk profile.",
      "mentorAnalogy": "Evaluating performance metrics is akin to a surgeon reviewing patient outcomes; precise metrics guide future decisions and improve overall effectiveness."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "practice",
    "title": "Practical Exercises in Forex Reporting",
    "label": "Forex Track",
    "body": "<!-- M9.14-forex-C7 -->\n### Core Scenario: Simulating Forex Capital Reporting\nEngaging in practical exercises enhances understanding of forex capital reporting under institutional guidelines. This card outlines **the steps to simulate a reporting scenario**.\n\n* **Data Collection**: Gather data on account balances, open positions, and performance metrics over the reporting period. Ensure accuracy in capturing all relevant figures, such as total equity and unrealized profits/losses.\n* **Report Generation**: Create a structured report that includes key metrics such as ROI, Sharpe Ratio, and maximum drawdown. Use a standardized format to ensure consistency and clarity in presentation.\n* **Review and Analysis**: Conduct a thorough review of the generated report, identifying trends and areas for improvement. Discuss findings with peers or mentors to gain insights into potential adjustments in strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Data Collection",
          "definition": "The process of gathering relevant financial information for analysis."
        },
        {
          "term": "Report Generation",
          "definition": "The creation of a structured document summarizing performance metrics."
        }
      ],
      "whyThisMatters": "Practical exercises in reporting reinforce the application of theoretical concepts and prepare traders for real-world scenarios.",
      "realLifeExample": "During a quarterly review, a trader collects data showing a total equity of $100,000, generates a report with a 15% ROI, and presents findings to the investment committee for feedback.",
      "commonMistake": "Neglecting to validate data accuracy before report generation can lead to misleading conclusions and poor decision-making.",
      "quickNote": "Simulating forex reporting enhances practical understanding of capital management processes.",
      "mentorText": "Treat this exercise as if you were preparing for a board meeting. Every number must be accurate, and your report should tell a clear story about your performance.",
      "mentorAnalogy": "Think of this reporting exercise like a pilot preparing a flight plan; every detail must be precise to ensure a successful journey."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are tasked with generating a quarterly performance report for a forex trading account. What is the first step you should take?",
      "options": [
        {
          "id": "0",
          "text": "Generate the report without collecting data.",
          "isCorrect": false,
          "feedback": "Generating a report without data collection leads to inaccuracies and misrepresentation."
        },
        {
          "id": "1",
          "text": "Collect data on account balances and positions.",
          "isCorrect": true,
          "feedback": "Accurate data collection is the foundational step in creating a reliable performance report."
        },
        {
          "id": "2",
          "text": "Review previous reports for format.",
          "isCorrect": false,
          "feedback": "While reviewing previous reports is useful, it should come after data collection."
        },
        {
          "id": "3",
          "text": "Discuss findings with peers before collecting data.",
          "isCorrect": false,
          "feedback": "Discussion should occur after data collection and report generation."
        }
      ]
    },
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Capital Management",
    "label": "Forex Track",
    "body": "<!-- M9.14-forex-C8 -->\n### Core Scenario: Overview of Forex Capital Management Principles\nThis summary encapsulates the essential concepts of forex capital management, focusing on leverage limits and reporting timelines. Understanding these principles is vital for effective institutional capital management.\n\n* **Leverage Limits**: Adhere to institutional leverage limits to mitigate risk exposure. For instance, a maximum leverage of 50:1 may be set to prevent excessive risk-taking, ensuring that capital is preserved during volatile market conditions.\n* **Reporting Timelines**: Establish clear timelines for performance reporting, typically on a monthly or quarterly basis. This ensures that stakeholders receive timely updates on capital performance and risk metrics, facilitating informed decision-making.\n* **Fiduciary Responsibilities**: Recognize the fiduciary duty to manage capital prudently. This includes transparent reporting and adherence to regulatory requirements, ensuring that all actions align with the best interests of investors.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Limits",
          "definition": "The maximum allowable leverage set by an institution to control risk."
        },
        {
          "term": "Fiduciary Responsibility",
          "definition": "The obligation to act in the best interest of clients and stakeholders."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these principles is essential for maintaining compliance and ensuring the integrity of capital management practices.",
      "realLifeExample": "An institutional trader adheres to a leverage limit of 30:1 and submits a quarterly report detailing performance metrics, ensuring compliance with fiduciary responsibilities.",
      "commonMistake": "Ignoring leverage limits can lead to significant capital losses and regulatory scrutiny.",
      "quickNote": "Key principles of forex capital management include leverage limits, reporting timelines, and fiduciary responsibilities.",
      "mentorText": "You must internalize these principles as non-negotiable rules. They are your guide to maintaining integrity and performance in capital management.",
      "mentorAnalogy": "Think of these principles as the safety protocols in aviation; they are designed to protect your capital and ensure a safe trading environment."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  }
];
