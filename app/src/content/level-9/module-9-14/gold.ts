import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Capital Management Essentials",
    "label": "Gold Track",
    "body": "<!-- M9.14-gold-C1 -->\n### Core Focus: Gold Capital Management Fundamentals\nEffective management of gold capital requires a clear understanding of exposure risk metrics and compliance with reporting requirements. This card outlines essential practices for institutional capital management in gold trading.\n\n* **Exposure Risk Metrics**: Calculate Value at Risk (VaR) for gold positions, ensuring that the potential loss over a specified time frame is within acceptable limits. For example, a VaR of $50,000 at a 95% confidence level indicates that there is a 5% chance of losing more than this amount in a given trading period.\n* **Reporting Requirements**: Prepare detailed reports that include current holdings, exposure levels, and risk assessments. These reports should be submitted to stakeholders on a monthly basis to maintain transparency and accountability.\n* **Compliance Framework**: Establish a compliance framework that adheres to regulatory standards for capital management. This includes regular audits and updates to risk management policies based on market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Value at Risk (VaR)",
          "definition": "A statistical measure used to assess the risk of loss on an investment."
        },
        {
          "term": "Exposure Risk",
          "definition": "The potential financial loss associated with holding a position in gold."
        }
      ],
      "whyThisMatters": "Understanding these essentials is crucial for institutional investors to mitigate risks and fulfill fiduciary responsibilities.",
      "realLifeExample": "A fund managing $10 million in gold assets calculates a VaR of $50,000, ensuring that potential losses remain within acceptable thresholds during market volatility.",
      "commonMistake": "Failing to update exposure metrics regularly, leading to outdated risk assessments.",
      "quickNote": "Regularly assess and report gold exposure metrics to manage risk effectively.",
      "mentorText": "In managing gold capital, you must always be aware of your exposure risk metrics. If your VaR indicates a potential loss that exceeds your risk appetite, it's time to reassess your positions.",
      "mentorAnalogy": "Think of managing gold capital like a pilot conducting pre-flight checks. Each metric is a critical component of the aircraft's systems, ensuring safe and efficient operation."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Assessing Gold Exposure Risk Metrics",
    "label": "Gold Track",
    "body": "<!-- M9.14-gold-C2 -->\n### Core Focus: Evaluating Gold Exposure Risk\nAssessing gold exposure risk metrics is vital for maintaining transparency and accountability to capital providers. This card details the methodologies for accurate risk assessment.\n\n* **Risk Assessment Models**: Utilize models such as historical simulation and Monte Carlo simulations to estimate potential losses. For instance, applying a Monte Carlo simulation to a gold position can reveal the likelihood of various loss scenarios based on historical price movements.\n* **Stress Testing**: Conduct stress tests to evaluate how gold positions would perform under extreme market conditions. For example, assess the impact of a sudden 20% drop in gold prices on your portfolio's value and liquidity.\n* **Reporting Standards**: Adhere to established reporting standards, such as those set by the CFA Institute, to ensure that all risk metrics are communicated clearly and consistently to stakeholders.",
    "context": {
      "keyTerms": [
        {
          "term": "Monte Carlo Simulation",
          "definition": "A statistical technique used to model the probability of different outcomes in a process."
        },
        {
          "term": "Stress Testing",
          "definition": "A simulation technique used to determine the ability of a portfolio to withstand extreme market conditions."
        }
      ],
      "whyThisMatters": "Accurate assessment of exposure risk metrics is essential for institutional investors to make informed decisions and maintain trust with capital providers.",
      "realLifeExample": "A hedge fund uses Monte Carlo simulations to assess that a gold position valued at $5 million could face a potential loss of $200,000 in 10% of scenarios during market downturns.",
      "commonMistake": "Overlooking the need for stress tests, which can lead to underestimating potential risks during market crises.",
      "quickNote": "Employ robust risk assessment models to ensure accurate reporting of gold exposure metrics.",
      "mentorText": "When assessing your gold exposure, always run stress tests. They reveal vulnerabilities that could otherwise go unnoticed, especially in volatile markets.",
      "mentorAnalogy": "Assessing exposure risk is like a surgeon performing pre-operative evaluations. Each test uncovers potential complications that must be addressed before proceeding."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Understanding Commodity Margin Parameters",
    "label": "Gold Track",
    "body": "<!-- M9.14-gold-C3 -->\n### Core Focus: Gold Trading Margin Parameters\nUnderstanding margin parameters specific to gold trading is critical for effective capital management. This card explores the implications of these parameters on trading strategies.\n\n* **Initial and Maintenance Margin**: Recognize the difference between initial margin (the amount required to open a position) and maintenance margin (the minimum equity required to keep a position open). For example, if the initial margin for gold futures is set at 5% of the contract value, a $200,000 position would require $10,000 to open.\n* **Margin Calls**: Be prepared for margin calls when the account equity falls below the maintenance margin level. If gold prices drop significantly, a trader may need to deposit additional funds to maintain their position.\n* **Leverage Implications**: Understand how leverage affects both potential returns and risks. A leverage ratio of 10:1 can amplify gains but also increases the risk of significant losses, especially in volatile markets.",
    "context": {
      "keyTerms": [
        {
          "term": "Initial Margin",
          "definition": "The upfront amount required to open a trading position."
        },
        {
          "term": "Maintenance Margin",
          "definition": "The minimum equity required to maintain an open position."
        }
      ],
      "whyThisMatters": "A thorough understanding of margin parameters is essential for managing risk and ensuring compliance with capital requirements.",
      "realLifeExample": "A trader opens a gold futures position worth $300,000 with an initial margin requirement of 5%, necessitating a deposit of $15,000 to the brokerage account.",
      "commonMistake": "Neglecting to monitor margin levels, which can lead to forced liquidation of positions during adverse market movements.",
      "quickNote": "Stay vigilant about margin parameters to avoid unexpected margin calls.",
      "mentorText": "Always keep an eye on your margin levels. If you’re close to the maintenance margin, it’s time to reassess your positions or add more capital.",
      "mentorAnalogy": "Understanding margin parameters is like a contractor managing project budgets. You must know your limits to avoid costly overruns that jeopardize the entire project."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Reporting Performance Metrics for Gold",
    "label": "Gold Track",
    "body": "<!-- M9.14-gold-C4 -->\n### Core Focus: Gold Performance Metrics Reporting\nReporting performance metrics is a critical aspect of gold capital management that ensures investors are informed about their investments. This card outlines key metrics to report.\n\n* **Return on Investment (ROI)**: Calculate the ROI for gold investments to provide a clear picture of performance. For example, if a fund invested $1 million in gold and it appreciated to $1.2 million, the ROI would be 20% over the reporting period.\n* **Sharpe Ratio**: Include the Sharpe Ratio in performance reports to assess risk-adjusted returns. A Sharpe Ratio greater than 1 indicates that the investment has generated excess returns for the level of risk taken.\n* **Drawdown Analysis**: Provide a detailed analysis of drawdowns to illustrate the maximum observed loss from a peak to a trough. For instance, if a gold investment fell from $1.2 million to $900,000, the drawdown would be 25%, highlighting the risk involved.",
    "context": {
      "keyTerms": [
        {
          "term": "Return on Investment (ROI)",
          "definition": "A measure of the profitability of an investment."
        },
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return of an investment."
        }
      ],
      "whyThisMatters": "Accurate reporting of performance metrics is essential for maintaining investor confidence and ensuring transparency in capital management.",
      "realLifeExample": "A gold fund reports a 15% ROI for the year, alongside a Sharpe Ratio of 1.5, indicating strong performance relative to the risk taken.",
      "commonMistake": "Failing to include comprehensive drawdown analysis, which can mislead investors about the true risk of their investments.",
      "quickNote": "Report key performance metrics to maintain transparency and investor trust.",
      "mentorText": "When reporting performance, always include ROI and drawdown metrics. Investors need to understand not just the gains, but the risks they’ve taken to achieve those gains.",
      "mentorAnalogy": "Reporting performance metrics is like a coach analyzing a team’s season. You must evaluate both wins and losses to understand overall performance and areas for improvement."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Risk Mitigation Strategies in Gold Reporting",
    "label": "Gold Track",
    "body": "<!-- M9.14-gold-C5 -->\n### Core Strategy: Risk Mitigation in Gold Reporting\nEffective risk mitigation strategies are essential for safeguarding investor interests in gold capital reporting. This card outlines **specific methods to enhance transparency and accountability**.\n\n* **Dynamic Hedging Techniques**: Implement hedging strategies using options or futures to offset potential losses in gold positions. For example, if holding 100 ounces of gold at $1,800 per ounce, consider purchasing put options to protect against significant price declines.\n* **Diversification Protocols**: Maintain a diversified portfolio that includes various asset classes alongside gold. This could involve allocating 70% to gold and 30% to equities or bonds, reducing overall exposure to gold market volatility.\n* **Regular Stress Testing**: Conduct quarterly stress tests to evaluate the impact of extreme market conditions on gold holdings. For instance, assess how a 20% drop in gold prices would affect portfolio value and investor returns.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Hedging",
          "definition": "A strategy that uses financial derivatives to offset potential losses in an asset."
        },
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various assets to reduce risk."
        },
        {
          "term": "Stress Testing",
          "definition": "A simulation technique used to evaluate how a portfolio would perform under extreme market conditions."
        }
      ],
      "whyThisMatters": "Implementing robust risk mitigation strategies in gold reporting protects investor capital and enhances trust in management practices.",
      "realLifeExample": "A fund holding 500 ounces of gold at $1,850 per ounce uses a combination of put options and diversifies into silver, maintaining a 60/40 gold-silver ratio to mitigate risks during market downturns.",
      "commonMistake": "Failing to regularly update hedging strategies based on market conditions can expose investors to unnecessary risks.",
      "quickNote": "Effective risk mitigation in gold reporting enhances investor confidence and capital protection.",
      "mentorText": "When managing gold capital, always think ahead. Use hedging to guard against price drops and diversify to cushion your portfolio. Remember, a proactive approach is key.",
      "mentorAnalogy": "Managing gold investments is like an aerospace engineer designing an aircraft. Just as engineers incorporate multiple safety features to ensure flight safety, traders must implement diverse risk strategies to protect investor capital."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Navigating Regulatory Standards for Gold",
    "label": "Gold Track",
    "body": "<!-- M9.14-gold-C6 -->\n### Core Requirement: Regulatory Compliance in Gold Management\nAdhering to regulatory standards is critical in gold capital management to maintain operational integrity. This card details **essential compliance measures for accurate reporting**.\n\n* **Know Your Customer (KYC) Protocols**: Implement stringent KYC procedures to verify the identity of investors. This includes collecting documentation such as government-issued IDs and proof of address to comply with anti-money laundering regulations.\n* **Reporting Obligations**: Ensure timely and accurate reporting of gold holdings and transactions to regulatory bodies. For example, submit quarterly reports detailing gold purchases and sales to the Commodity Futures Trading Commission (CFTC) to meet compliance requirements.\n* **Audit Trail Maintenance**: Establish a comprehensive audit trail for all gold transactions. This includes maintaining records of purchase invoices, sales contracts, and transaction confirmations for at least five years to satisfy regulatory scrutiny.",
    "context": {
      "keyTerms": [
        {
          "term": "Know Your Customer (KYC)",
          "definition": "A regulatory requirement for financial institutions to verify the identity of their clients."
        },
        {
          "term": "Reporting Obligations",
          "definition": "Legal requirements to disclose financial information to regulatory authorities."
        },
        {
          "term": "Audit Trail",
          "definition": "A chronological record of all transactions that provides evidence of compliance."
        }
      ],
      "whyThisMatters": "Understanding and adhering to regulatory standards minimizes legal risks and enhances the credibility of gold capital management.",
      "realLifeExample": "A gold investment firm submits its quarterly holdings report to the CFTC, detailing 1,000 ounces of gold purchased at $1,900 per ounce, ensuring compliance with federal regulations.",
      "commonMistake": "Neglecting to maintain an accurate audit trail can lead to severe penalties during regulatory audits.",
      "quickNote": "Compliance with regulatory standards is non-negotiable for maintaining investor trust and operational legitimacy.",
      "mentorText": "Regulatory compliance isn't just a checkbox; it's the foundation of our credibility. Always ensure KYC is up to date and that your reporting is precise. This protects both us and our investors.",
      "mentorAnalogy": "Navigating regulatory standards in gold management is akin to a surgeon adhering to strict protocols in the operating room. Just as a surgeon must follow guidelines to ensure patient safety, traders must comply with regulations to safeguard investor interests."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios in Gold Reporting",
    "label": "Gold Track",
    "body": "<!-- M9.14-gold-C7 -->\n### Core Exercise: Application of Gold Reporting Knowledge\nEngaging in practical scenarios enhances understanding of gold capital management. This card presents **realistic situations to apply your reporting knowledge**.\n\n* **Scenario 1**: You manage a fund with 300 ounces of gold purchased at $1,750 per ounce. A sudden market downturn causes gold prices to drop to $1,600. What immediate reporting actions should you take to inform investors?\n* **Scenario 2**: Your firm is preparing for a regulatory audit. You need to compile an audit trail for the last three years. Outline the key documents you must gather to ensure compliance and avoid penalties.\n* **Scenario 3**: A new investor wants to allocate $500,000 into your gold fund. Describe the KYC procedures you would implement to verify their identity and ensure compliance with regulations.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Downturn",
          "definition": "A period of declining prices in financial markets."
        },
        {
          "term": "Regulatory Audit",
          "definition": "An examination of compliance with laws and regulations by a governing body."
        },
        {
          "term": "Investor Allocation",
          "definition": "The process of distributing funds to different investment opportunities."
        }
      ],
      "whyThisMatters": "Practicing real-life scenarios sharpens decision-making skills and prepares traders for actual reporting challenges in gold management.",
      "realLifeExample": "During a market downturn, a manager must quickly report the 300 ounces of gold's new valuation at $1,600 to investors, ensuring transparency and trust.",
      "commonMistake": "Overlooking the importance of timely communication during market fluctuations can erode investor confidence.",
      "quickNote": "Engaging in practical scenarios reinforces your understanding of gold capital management and reporting.",
      "mentorText": "In real-world situations, clarity and speed are crucial. Always be prepared to communicate changes in valuations and ensure your documentation is thorough for audits. This is how we maintain our integrity.",
      "mentorAnalogy": "Practicing gold reporting scenarios is like a pilot conducting emergency drills. Just as pilots rehearse responses to various flight situations, traders must be ready to handle reporting challenges effectively."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You manage a gold fund with 500 ounces of gold purchased at $1,800 per ounce. The price drops to $1,700. What should you report to your investors?",
      "options": [
        {
          "id": "0",
          "text": "Notify investors of the loss and provide a revised valuation.",
          "isCorrect": true,
          "feedback": "Correct. Transparency about losses and updated valuations is essential for maintaining trust."
        },
        {
          "id": "1",
          "text": "Ignore the price drop and wait for recovery.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring price changes can lead to a loss of investor confidence."
        },
        {
          "id": "2",
          "text": "Only report if the price drops below $1,600.",
          "isCorrect": false,
          "feedback": "Incorrect. Reporting should be timely and not contingent on arbitrary price thresholds."
        },
        {
          "id": "3",
          "text": "Sell all gold holdings immediately.",
          "isCorrect": false,
          "feedback": "Incorrect. Selling in panic can lead to further losses; a measured response is necessary."
        }
      ]
    },
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Capital Management",
    "label": "Gold Track",
    "body": "<!-- M9.14-gold-C8 -->\n### Core Overview: Key Concepts in Gold Capital Management\nThis card summarizes essential concepts in gold capital management, focusing on **exposure risk metrics and margin parameters**.\n\n* **Exposure Risk Metrics**: Understand the importance of calculating exposure risk metrics, such as Value at Risk (VaR) and Conditional Value at Risk (CVaR). For instance, if your gold portfolio has a VaR of $50,000 at a 95% confidence level, it indicates potential losses in extreme market conditions.\n* **Margin Parameters**: Establish clear margin requirements for gold trading. For example, if trading gold futures, a margin of 5% means that for a $1,800 per ounce contract, you need to maintain $90 per ounce in your account.\n* **Performance Reporting**: Regularly report performance metrics to stakeholders, including returns on investment and risk-adjusted returns. For example, if your gold fund achieved a 10% return with a Sharpe ratio of 1.5, communicate this effectively to investors.",
    "context": {
      "keyTerms": [
        {
          "term": "Value at Risk (VaR)",
          "definition": "A statistical measure that estimates the potential loss in value of an asset."
        },
        {
          "term": "Conditional Value at Risk (CVaR)",
          "definition": "A risk assessment measure that quantifies the expected loss during extreme market conditions."
        },
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, indicating the reward per unit of risk."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces understanding of gold capital management and aids in effective communication with investors.",
      "realLifeExample": "A gold fund reports a VaR of $50,000 and a Sharpe ratio of 1.5, demonstrating strong risk management and performance metrics to investors.",
      "commonMistake": "Failing to report exposure risk metrics can lead to misunderstandings about the fund's risk profile.",
      "quickNote": "Understanding exposure risk metrics and margin parameters is crucial for effective gold capital management.",
      "mentorText": "Always keep your investors informed about risk metrics and performance. This transparency builds trust and ensures everyone understands the fund's risk profile.",
      "mentorAnalogy": "Summarizing gold capital management concepts is like an architect reviewing blueprints before construction. Just as architects must ensure all details align for a successful build, traders must ensure clarity in reporting and risk management."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  }
];
