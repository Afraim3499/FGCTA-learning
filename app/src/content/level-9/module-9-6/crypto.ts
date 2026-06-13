import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Crypto Prop Funding Challenges",
    "label": "Crypto Track",
    "body": "<!-- M9.6-crypto-C1 -->\n### Core Scenario: Crypto Funding Complexities\nCrypto proprietary trading firms face unique funding challenges that can significantly impact trading strategies. This card outlines **the critical aspects of funding requirements and their implications**.\n\n* **Volatility Constraints**: Crypto assets exhibit higher volatility than traditional instruments, leading firms to impose stricter funding limits. For example, a prop firm may require a minimum account balance of $50,000 to withstand a 20% drawdown on Bitcoin (BTC) during high volatility periods.\n* **Liquidity Requirements**: Firms often mandate that traders maintain a certain level of liquidity to ensure they can meet margin calls. A trader holding Ethereum (ETH) must keep at least 10% of their account in stablecoins to avoid liquidation during sharp market moves.\n* **Performance Metrics**: Prop firms evaluate traders based on specific performance metrics, such as maximum drawdown and return on investment (ROI). A trader with a maximum drawdown exceeding 15% over a month may face funding restrictions or account review.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Challenges",
          "definition": "Unique obstacles related to capital allocation and maintenance in crypto trading."
        }
      ],
      "whyThisMatters": "Understanding these challenges helps traders align their strategies with firm requirements, enhancing compliance and performance.",
      "realLifeExample": "A trader experiences a 25% drawdown on their $100,000 account during a BTC price drop, triggering a review by their prop firm due to exceeding the 20% drawdown limit.",
      "commonMistake": "Traders often underestimate the impact of volatility on their funding requirements, leading to unexpected margin calls.",
      "quickNote": "Crypto funding challenges require strict adherence to volatility and liquidity rules.",
      "mentorText": "You must grasp the unique funding landscape of crypto trading. If your account is underfunded during a volatile period, you risk liquidation, which can jeopardize your trading career.",
      "mentorAnalogy": "Think of it like a pilot managing fuel reserves for a flight. Insufficient fuel can lead to an emergency landing, just as inadequate funding can result in forced liquidation."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Navigating Third-Party Custody Requirements",
    "label": "Crypto Track",
    "body": "<!-- M9.6-crypto-C2 -->\n### Core Scenario: Third-Party Custody Protocols\nCrypto prop firms typically impose third-party custody requirements to enhance security and compliance. This card explains **how to effectively navigate these protocols**.\n\n* **Custodial Services Selection**: Choose a reputable custodial service that meets your firm’s standards. For instance, a firm may require the use of Coinbase Custody or BitGo for asset storage, ensuring compliance with their security protocols.\n* **Access Control Measures**: Implement strict access controls to custodial accounts. Ensure that only authorized personnel can initiate withdrawals or trades, reducing the risk of unauthorized access or fraud.\n* **Regular Audits and Reporting**: Maintain transparency by conducting regular audits of custodial accounts. A prop firm may require monthly reports detailing asset balances and transaction history to ensure compliance with their custody policies.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Third-Party Custody",
          "definition": "The practice of storing crypto assets with an external service provider for security and compliance."
        }
      ],
      "whyThisMatters": "Navigating custody requirements is essential for maintaining compliance and protecting assets under management.",
      "realLifeExample": "A trader using BitGo for custody must submit a monthly report to their prop firm detailing all transactions and balances, ensuring compliance with firm policies.",
      "commonMistake": "Failing to select a compliant custodial service can lead to funding issues or account restrictions.",
      "quickNote": "Adhere to strict custodial protocols to ensure compliance and security.",
      "mentorText": "You must ensure that your custodial arrangements are compliant with firm requirements. Any lapse can jeopardize your trading privileges.",
      "mentorAnalogy": "Consider a bank vault where only authorized personnel can access funds. Just like in banking, custodial services must have stringent access controls to protect your assets."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Preparing for Crypto Funding Audits",
    "label": "Crypto Track",
    "body": "<!-- M9.6-crypto-C3 -->\n### Core Scenario: Audit Readiness\nFunding audits are a critical aspect of compliance in crypto trading. This card outlines **the necessary steps to prepare for these audits**.\n\n* **Documentation Organization**: Maintain meticulous records of all trades, deposits, and withdrawals. For example, ensure that all transactions on your Binance account are documented and easily accessible for review.\n* **Compliance Checklists**: Develop a checklist to ensure all firm rules are followed. This may include verifying that your account balance meets minimum requirements and that all trades adhere to risk management protocols.\n* **Mock Audits**: Conduct internal mock audits to simulate the review process. This practice helps identify potential compliance gaps before the actual audit, ensuring readiness and reducing stress.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Audits",
          "definition": "Evaluations conducted by prop firms to ensure compliance with funding and trading rules."
        }
      ],
      "whyThisMatters": "Being prepared for audits minimizes the risk of penalties and enhances your standing with the firm.",
      "realLifeExample": "A trader prepares for an upcoming audit by compiling a detailed report of all trades executed on Kraken, ensuring all documentation is complete and accurate.",
      "commonMistake": "Neglecting to keep organized records can lead to compliance issues during audits.",
      "quickNote": "Thorough preparation for audits is essential for maintaining compliance and avoiding penalties.",
      "mentorText": "Preparation is your best defense against funding audits. Keep your records organized and ready for scrutiny at all times.",
      "mentorAnalogy": "Think of it like a surgeon preparing for a procedure. Every instrument must be accounted for and ready to ensure a successful operation."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Trading (Module 9.6 - CRYPTO)",
    "label": "Crypto Track",
    "body": "<!-- M9.6-crypto-C4 -->\n### Core Scenario: Risk Management Protocols\nEffective risk management is vital for trading cryptocurrencies within the framework of prop firm rules. This card details **the essential practices for managing risk**.\n\n* **Position Sizing Rules**: Establish strict position sizing rules based on account equity. For example, a trader may limit each position to 2% of their total account balance to mitigate risk exposure.\n* **Stop-Loss Implementation**: Utilize stop-loss orders to protect against significant losses. A trader might set a stop-loss at 5% below the entry price of a trade on Litecoin (LTC) to limit potential losses.\n* **Diversification Strategies**: Diversify trading strategies across multiple crypto assets to reduce overall risk. For instance, a trader may allocate capital across BTC, ETH, and Cardano (ADA) to minimize exposure to any single asset's volatility.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "Strategies and practices aimed at minimizing potential losses in trading."
        }
      ],
      "whyThisMatters": "Implementing robust risk management practices is crucial for sustaining trading performance and complying with prop firm regulations.",
      "realLifeExample": "A trader with a $100,000 account sets a maximum position size of $2,000 for each trade, ensuring they do not exceed their risk tolerance during volatile market conditions.",
      "commonMistake": "Traders often neglect to implement stop-loss orders, leading to significant losses during market downturns.",
      "quickNote": "Adopt strict risk management practices to align with prop firm rules and protect your capital.",
      "mentorText": "You must manage risk meticulously. Every trade should have a clear plan for how much you are willing to lose, or you risk losing it all.",
      "mentorAnalogy": "Think of risk management like a firefighter assessing a blaze. You must know how to contain the fire before it spreads, just as you must contain your losses before they escalate."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Evaluating Crypto Trading Performance",
    "label": "Crypto Track",
    "body": "<!-- M9.6-crypto-C5 -->\n### Performance Evaluation: Benchmarking Against Prop Firm Standards\nEvaluating trading performance against established benchmarks is essential for compliance with proprietary trading firm rules. This card outlines **how to systematically assess your trading results** to ensure alignment with firm expectations.\n\n* **Performance Metrics**: Utilize key performance indicators (KPIs) such as Sharpe ratio, maximum drawdown, and win/loss ratio to measure your trading effectiveness. For example, a prop firm may require a Sharpe ratio above 1.5 for funded accounts.\n* **Timeframe Analysis**: Assess performance over multiple timeframes to identify consistency. A trader might evaluate their monthly performance against a 3-month rolling average to ensure they meet the firm's minimum profitability criteria.\n* **Compliance Reporting**: Maintain a detailed trading journal that includes all trades, performance metrics, and compliance checks. This documentation is crucial during funding audits to demonstrate adherence to firm standards.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, indicating how much excess return is received for the extra volatility endured."
        },
        {
          "term": "Maximum Drawdown",
          "definition": "The largest peak-to-trough decline in the value of a portfolio, used to assess risk."
        }
      ],
      "whyThisMatters": "Proper evaluation of trading performance against prop firm benchmarks is critical for maintaining funding eligibility and ensuring sustainable trading practices.",
      "realLifeExample": "A trader evaluates their performance on Bitcoin (BTC) over the last quarter, achieving a Sharpe ratio of 1.6 and a maximum drawdown of 8%, thus meeting the prop firm's requirements.",
      "commonMistake": "Failing to consistently track and analyze performance metrics can lead to non-compliance with prop firm standards.",
      "quickNote": "Regularly benchmark your performance against prop firm metrics to ensure compliance.",
      "mentorText": "You must treat your performance metrics like a pilot's flight data. If your Sharpe ratio dips below the required threshold, it's a signal to reassess your strategy immediately.",
      "mentorAnalogy": "Think of your trading performance as an aircraft's flight path; just as pilots must monitor altitude and speed against flight plans, you must track your metrics against prop firm benchmarks."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.6-crypto-C6 -->\n### Identifying and Avoiding Trading Pitfalls\nUnderstanding common pitfalls in crypto trading is essential for compliance with prop firm rules. This card highlights **specific mistakes traders make and how to mitigate them**.\n\n* **Overleveraging**: Many traders exceed leverage limits set by prop firms, risking immediate liquidation. For instance, a firm may cap leverage at 10:1; exceeding this can lead to disqualification.\n* **Ignoring Risk Management**: Failing to implement stop-loss orders can result in significant losses. A trader might neglect to set a stop-loss on an Ethereum (ETH) trade, leading to a 20% drawdown that breaches firm rules.\n* **Emotional Decision-Making**: Allowing emotions to dictate trading decisions can lead to impulsive trades that violate firm guidelines. A trader may chase losses by doubling down on a losing position, which can trigger a margin call.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase the potential return of an investment."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        }
      ],
      "whyThisMatters": "Recognizing and avoiding common pitfalls ensures compliance with prop firm rules and enhances long-term trading success.",
      "realLifeExample": "A trader using 20:1 leverage on a Litecoin (LTC) position faces liquidation when the price drops 5%, violating the prop firm's leverage policy.",
      "commonMistake": "Traders often underestimate the importance of adhering to risk management protocols, leading to significant losses.",
      "quickNote": "Stay vigilant against common trading pitfalls to maintain compliance with prop firm rules.",
      "mentorText": "Think of your trading like a high-stakes game; one wrong move can lead to disqualification. Stick to the rules, or you risk losing everything.",
      "mentorAnalogy": "Just as a surgeon must adhere to strict protocols in the operating room to avoid complications, you must follow prop firm rules to ensure your trading remains compliant."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "practice",
    "title": "Case Studies in Crypto Compliance",
    "label": "Crypto Track",
    "body": "<!-- M9.6-crypto-C7 -->\n### Engaging with Real-World Compliance Scenarios\nAnalyzing case studies provides insight into successful alignment of trading strategies with prop firm rules. This card presents **real-world scenarios for evaluation**.\n\n* **Scenario Analysis**: Review a case where a trader successfully navigated a funding audit by maintaining detailed records of trades and compliance checks. They documented every Bitcoin (BTC) trade, demonstrating adherence to risk limits.\n* **Strategy Alignment**: Examine a trader who adjusted their strategy after receiving feedback from a prop firm audit. They shifted from high-frequency trading to a more conservative approach, resulting in consistent profitability within firm guidelines.\n* **Outcome Assessment**: Discuss the outcomes of various case studies, focusing on how compliance led to increased funding and reduced drawdowns. A trader who adhered to a 5% maximum drawdown policy was rewarded with additional capital from their firm.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Audit",
          "definition": "A review process conducted by prop firms to assess a trader's compliance with established rules."
        },
        {
          "term": "High-Frequency Trading",
          "definition": "A trading strategy characterized by high turnover and rapid execution of orders."
        }
      ],
      "whyThisMatters": "Understanding real-world compliance scenarios enhances your ability to align trading strategies with prop firm requirements.",
      "realLifeExample": "A trader documented every trade on Cardano (ADA) and successfully passed a funding audit, leading to an increase in their trading capital by 25%.",
      "commonMistake": "Failing to maintain thorough documentation can lead to unfavorable outcomes during funding audits.",
      "quickNote": "Engage with case studies to learn from real-world compliance successes and failures.",
      "mentorText": "When you face an audit, think of it as a performance review. Your documentation and adherence to rules are your best defense.",
      "mentorAnalogy": "Like a pilot preparing for an inspection, your meticulous records and adherence to protocols will determine your success in passing compliance checks."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A trader documented their trades and maintained compliance with prop firm rules. What was the primary benefit of this practice?",
      "options": [
        {
          "id": "0",
          "text": "Increased funding from the prop firm.",
          "isCorrect": true,
          "feedback": "Maintaining compliance through documentation leads to greater trust and potential funding increases."
        },
        {
          "id": "1",
          "text": "Reduced trading costs.",
          "isCorrect": false,
          "feedback": "While documentation is important, it does not directly reduce trading costs."
        },
        {
          "id": "2",
          "text": "Improved trading strategy performance.",
          "isCorrect": false,
          "feedback": "Documentation itself does not improve performance but ensures compliance."
        },
        {
          "id": "3",
          "text": "Access to proprietary trading tools.",
          "isCorrect": false,
          "feedback": "Access to tools is typically based on performance, not documentation alone."
        }
      ]
    },
    "visualKey": "prop-rulebook-checker"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Trading Strategies",
    "label": "Crypto Track",
    "body": "<!-- M9.6-crypto-C8 -->\n### Recap: Navigating Funding Challenges and Compliance\nThis summary consolidates key strategies for aligning crypto trading with prop firm rules. It emphasizes **the importance of structured compliance** to secure funding.\n\n* **Adherence to Risk Limits**: Always respect the risk management parameters set by the prop firm, such as maximum drawdown and leverage limits. For example, if the firm mandates a 10% drawdown limit, ensure your trading strategy aligns with this threshold.\n* **Consistent Performance Evaluation**: Regularly assess your trading performance against prop firm benchmarks to identify areas for improvement and compliance. Use metrics like win/loss ratios and average trade duration to gauge effectiveness.\n* **Documentation and Reporting**: Maintain comprehensive records of all trades and compliance checks. This practice not only aids in funding audits but also fosters a disciplined trading approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management Parameters",
          "definition": "Guidelines established by prop firms to limit potential losses and ensure sustainable trading."
        },
        {
          "term": "Win/Loss Ratio",
          "definition": "The ratio of winning trades to losing trades, used to assess trading effectiveness."
        }
      ],
      "whyThisMatters": "Summarizing these strategies reinforces the necessity of compliance for successful trading within prop firms.",
      "realLifeExample": "A trader who consistently adheres to a 5% maximum drawdown and maintains a win/loss ratio of 60% successfully secures additional funding from their prop firm.",
      "commonMistake": "Neglecting to document trades can lead to compliance issues and loss of funding opportunities.",
      "quickNote": "Structured compliance is essential for successful trading within prop firms.",
      "mentorText": "Remember, compliance isn't just a box to check; it's the foundation of your trading career. Stay disciplined, and the funding will follow.",
      "mentorAnalogy": "Just as an architect must adhere to building codes to ensure safety and functionality, you must follow prop firm rules to build a successful trading career."
    },
    "taskData": null,
    "visualKey": "prop-rulebook-checker"
  }
];
