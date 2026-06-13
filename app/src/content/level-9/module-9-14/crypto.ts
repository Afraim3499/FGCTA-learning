import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Asset Management Overview",
    "label": "Crypto Track",
    "body": "<!-- M9.14-crypto-C1 -->\n### Core Scenario: Crypto Asset Management Essentials\nEffective management of crypto assets requires stringent oversight mechanisms to maintain integrity and investor trust. This card outlines **the critical components of custody audits and transaction record reporting**.\n\n* **Custody Audit Framework**: Establish a comprehensive framework for custody audits that includes regular assessments of private key management, wallet security, and third-party custodial services. Ensure that audits are conducted quarterly to align with institutional standards.\n* **Transaction Record Reporting**: Implement a detailed reporting system that captures all transaction data, including timestamps, amounts, and counterparties. Utilize blockchain explorers to verify transaction authenticity and maintain a transparent ledger.\n* **Investor Communication Protocol**: Develop a communication strategy to inform investors about audit findings and transaction reports. Regular updates foster confidence and demonstrate adherence to compliance standards.",
    "context": {
      "keyTerms": [
        {
          "term": "Custody Audit",
          "definition": "A systematic review of the security and management of crypto assets held by custodians."
        },
        {
          "term": "Transaction Record",
          "definition": "A detailed log of all transactions involving crypto assets, including relevant metadata."
        }
      ],
      "whyThisMatters": "Institutional investors require rigorous asset management practices to mitigate risks and ensure compliance with regulatory frameworks.",
      "realLifeExample": "A hedge fund managing $200 million in crypto assets conducts a custody audit every quarter, revealing a discrepancy in transaction reporting that leads to immediate corrective action.",
      "commonMistake": "Failing to conduct regular audits can lead to compliance issues and loss of investor trust.",
      "quickNote": "Regular custody audits and transparent reporting are essential for institutional crypto asset management.",
      "mentorText": "As your mentor, I emphasize that without rigorous custody audits, you're leaving your assets vulnerable. Regular checks are non-negotiable.",
      "mentorAnalogy": "Think of custody audits like a flight check before takeoff; skipping them could lead to catastrophic failures mid-flight."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Conducting Crypto Custody Audits",
    "label": "Crypto Track",
    "body": "<!-- M9.14-crypto-C2 -->\n### Core Scenario: Conducting Custody Audits\nConducting custody audits is essential for ensuring the security and compliance of crypto assets. This card details **the step-by-step process for executing effective custody audits**.\n\n* **Audit Preparation**: Gather all necessary documentation, including wallet addresses, private key management policies, and third-party service agreements. Ensure all team members understand their roles in the audit process.\n* **Verification Process**: Cross-check wallet balances against transaction records using blockchain explorers. Confirm that all assets are accounted for and that no unauthorized transactions have occurred.\n* **Reporting Findings**: Compile audit results into a comprehensive report that outlines findings, discrepancies, and recommendations for improvement. Share this report with stakeholders to maintain transparency and trust.",
    "context": {
      "keyTerms": [
        {
          "term": "Verification Process",
          "definition": "The method of confirming the accuracy of asset holdings through cross-referencing with blockchain data."
        },
        {
          "term": "Audit Report",
          "definition": "A formal document summarizing the findings of a custody audit."
        }
      ],
      "whyThisMatters": "Thorough custody audits build investor confidence and ensure compliance with regulatory requirements.",
      "realLifeExample": "A crypto fund conducts an audit revealing a $5 million discrepancy in asset reporting, prompting immediate corrective measures and investor notifications.",
      "commonMistake": "Neglecting to verify all transaction records can lead to significant compliance risks.",
      "quickNote": "A structured approach to custody audits is critical for institutional integrity.",
      "mentorText": "When conducting audits, remember that every detail matters. A small oversight can lead to major issues down the line.",
      "mentorAnalogy": "Conducting a custody audit is like a surgeon performing a pre-operative checklist; every step is vital to ensure a successful outcome."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Managing Multisig Logs for Security",
    "label": "Crypto Track",
    "body": "<!-- M9.14-crypto-C3 -->\n### Core Scenario: Multisig Log Management\nManaging multisig logs is crucial for enhancing the security of crypto asset management. This card explores **the protocols for maintaining multisig logs effectively**.\n\n* **Log Creation and Maintenance**: Establish a multisig wallet with defined signatory roles and permissions. Maintain a detailed log of all signatory actions, including transaction approvals and key rotations.\n* **Regular Review Protocols**: Schedule regular reviews of multisig logs to ensure compliance with security policies. Any anomalies should be investigated immediately to prevent unauthorized access.\n* **Incident Response Plan**: Develop a response plan for potential security breaches involving multisig wallets. Ensure all team members are trained on the protocol to follow in case of a security incident.",
    "context": {
      "keyTerms": [
        {
          "term": "Multisig Wallet",
          "definition": "A wallet requiring multiple signatures to authorize a transaction, enhancing security."
        },
        {
          "term": "Signatory Roles",
          "definition": "Defined permissions assigned to individuals who can approve transactions in a multisig setup."
        }
      ],
      "whyThisMatters": "Proper management of multisig logs mitigates risks associated with unauthorized access and enhances overall asset security.",
      "realLifeExample": "An institutional fund implements a multisig wallet for its $50 million crypto portfolio, requiring three out of five signatories to approve any transaction, significantly reducing fraud risk.",
      "commonMistake": "Failing to maintain accurate logs can lead to confusion and potential security breaches.",
      "quickNote": "Effective multisig log management is a cornerstone of crypto asset security.",
      "mentorText": "Think of multisig logs as a vault with multiple locks; each keyholder must be vigilant to ensure the vault remains secure.",
      "mentorAnalogy": "Managing multisig logs is akin to a bank's security protocol where multiple managers must approve a large withdrawal, ensuring checks and balances."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Auditing On-Chain Transaction Records",
    "label": "Crypto Track",
    "body": "<!-- M9.14-crypto-C4 -->\n### Core Scenario: On-Chain Transaction Auditing\nAuditing on-chain transaction records is vital for ensuring transparency and accuracy in crypto asset management. This card outlines **the auditing process for on-chain transactions**.\n\n* **Data Extraction**: Utilize blockchain explorers to extract transaction data, including timestamps, amounts, and involved addresses. Ensure that all relevant data is captured for comprehensive auditing.\n* **Cross-Verification**: Compare extracted data against internal transaction logs to identify discrepancies. Any inconsistencies must be addressed immediately to maintain data integrity.\n* **Audit Trail Documentation**: Document the entire auditing process, including methodologies and findings. This audit trail serves as a reference for future audits and regulatory compliance.",
    "context": {
      "keyTerms": [
        {
          "term": "On-Chain Transactions",
          "definition": "Transactions recorded directly on the blockchain, providing a transparent and immutable record."
        },
        {
          "term": "Audit Trail",
          "definition": "A documented history of the auditing process, including methodologies and findings."
        }
      ],
      "whyThisMatters": "Accurate auditing of on-chain transactions is essential for maintaining investor trust and regulatory compliance.",
      "realLifeExample": "A crypto exchange audits its on-chain transactions and discovers a $2 million error in reporting, leading to immediate corrective actions and investor notifications.",
      "commonMistake": "Overlooking discrepancies in on-chain data can lead to compliance issues and loss of credibility.",
      "quickNote": "Thorough auditing of on-chain transactions ensures transparency and accuracy.",
      "mentorText": "When auditing on-chain records, precision is non-negotiable. Every transaction must be accounted for to uphold integrity.",
      "mentorAnalogy": "Auditing on-chain transactions is like a forensic accountant tracing financial records; every detail must be verified to ensure accuracy."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Reporting",
    "label": "Crypto Track",
    "body": "<!-- M9.14-crypto-C5 -->\n### Core Scenario: Risk Management Strategies in Crypto Reporting\nEffective risk management in crypto reporting is essential to safeguard investor interests amidst market volatility. This card outlines **strategies to enhance transparency and mitigate risks**.\n\n* **Dynamic Risk Assessment**: Implement continuous risk evaluation metrics that account for crypto asset volatility. Utilize Value at Risk (VaR) models adjusted for crypto-specific factors, such as liquidity and market depth, to quantify potential losses.\n* **Transparent Reporting Framework**: Establish a standardized reporting format that includes risk exposure levels, asset allocations, and performance metrics. Ensure that reports are accessible and understandable to investors, fostering trust and accountability.\n* **Crisis Management Protocols**: Develop contingency plans for extreme market conditions, including predefined thresholds for asset liquidation or reallocation. This protocol should be communicated clearly to investors to manage expectations during downturns.",
    "context": {
      "keyTerms": [
        {
          "term": "Value at Risk (VaR)",
          "definition": "A statistical measure used to assess the potential loss in value of an asset or portfolio."
        },
        {
          "term": "Liquidity Risk",
          "definition": "The risk that an asset cannot be traded quickly enough in the market to prevent a loss."
        }
      ],
      "whyThisMatters": "Implementing robust risk management strategies in crypto reporting is critical for maintaining investor confidence and ensuring regulatory compliance.",
      "realLifeExample": "A hedge fund managing $500 million in crypto assets utilizes a VaR model to determine that it faces a potential loss of $20 million over a one-week period at a 95% confidence level.",
      "commonMistake": "Failing to update risk assessments regularly, leading to outdated and ineffective risk management strategies.",
      "quickNote": "Dynamic risk assessment and transparent reporting are essential for effective crypto asset management.",
      "mentorText": "In my experience, a proactive approach to risk management can prevent significant losses. Always assess your exposure and communicate clearly with your investors.",
      "mentorAnalogy": "Think of risk management in crypto reporting like an aerospace engineer designing a safety protocol for an aircraft. Each potential risk must be identified and mitigated before takeoff."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "concept",
    "title": "Navigating Regulatory Compliance in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.14-crypto-C6 -->\n### Core Scenario: Regulatory Compliance in Crypto Asset Management\nNavigating the regulatory landscape is crucial for institutional crypto management. This card discusses **the implications of compliance on reporting and operational practices**.\n\n* **Understanding Regulatory Frameworks**: Familiarize yourself with the regulatory bodies governing crypto assets, such as the SEC and CFTC in the U.S. Ensure that all reporting adheres to their guidelines to avoid penalties.\n* **Compliance Reporting Standards**: Establish a compliance reporting system that tracks all transactions and holdings. This system should allow for easy access to transaction histories and ensure that all reporting is timely and accurate.\n* **Regular Compliance Audits**: Schedule periodic audits to assess adherence to regulatory requirements. These audits should evaluate transaction reporting accuracy and the effectiveness of compliance systems in place.",
    "context": {
      "keyTerms": [
        {
          "term": "SEC",
          "definition": "The U.S. Securities and Exchange Commission, which regulates securities markets."
        },
        {
          "term": "CFTC",
          "definition": "The Commodity Futures Trading Commission, which regulates commodity futures and options markets."
        }
      ],
      "whyThisMatters": "Understanding regulatory compliance is essential for protecting institutional investors and ensuring the legitimacy of crypto operations.",
      "realLifeExample": "A crypto fund must submit quarterly reports to the SEC detailing all transactions exceeding $10,000 to comply with anti-money laundering regulations.",
      "commonMistake": "Neglecting to stay updated on changing regulations, which can lead to non-compliance and potential legal repercussions.",
      "quickNote": "Regulatory compliance is a critical component of institutional crypto asset management.",
      "mentorText": "Stay ahead of the curve by regularly reviewing regulatory updates. Non-compliance can lead to severe penalties that undermine your operations.",
      "mentorAnalogy": "Navigating regulatory compliance in crypto is like a pilot adhering to air traffic control instructions; failure to comply can lead to catastrophic consequences."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "practice",
    "title": "Practical Exercises in Crypto Reporting",
    "label": "Crypto Track",
    "body": "<!-- M9.14-crypto-C7 -->\n### Core Scenario: Simulating Crypto Reporting Processes\nEngaging in practical exercises enhances understanding of the auditing and reporting processes for crypto assets. This card provides **hands-on scenarios to reinforce learning**.\n\n* **Audit Simulation**: Conduct a mock audit of a crypto portfolio consisting of Bitcoin, Ethereum, and Litecoin. Evaluate transaction records for accuracy and compliance with reporting standards.\n* **Reporting Exercise**: Create a detailed quarterly report for a hypothetical crypto fund, including performance metrics, risk assessments, and compliance checks. Ensure the report meets regulatory standards.\n* **Scenario Analysis**: Analyze a market event, such as a significant price drop in Bitcoin, and prepare a report outlining the potential impact on the portfolio and recommended actions for investors.",
    "context": {
      "keyTerms": [
        {
          "term": "Mock Audit",
          "definition": "A simulated audit process to practice compliance and reporting standards."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the performance of an investment."
        }
      ],
      "whyThisMatters": "Practical exercises provide essential experience in the auditing and reporting processes, reinforcing theoretical knowledge with real-world application.",
      "realLifeExample": "During a mock audit, a team discovers discrepancies in transaction records for Ethereum trades, prompting a review of their reporting processes.",
      "commonMistake": "Overlooking minor details in transaction records during audits, which can lead to significant compliance issues.",
      "quickNote": "Hands-on practice in reporting processes is vital for mastering crypto asset management.",
      "mentorText": "Engage deeply with these exercises; they mirror real-world scenarios you will face. Precision in reporting is non-negotiable.",
      "mentorAnalogy": "Think of these exercises as a flight simulator for pilots; they prepare you for real-world conditions without the risk of actual loss."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a mock audit, you find discrepancies in transaction records. What should be your first step?",
      "options": [
        {
          "id": "0",
          "text": "Document the discrepancies and notify the compliance officer.",
          "isCorrect": true,
          "feedback": "Documenting and notifying ensures that the issue is addressed promptly and accurately."
        },
        {
          "id": "1",
          "text": "Ignore the discrepancies if they seem minor.",
          "isCorrect": false,
          "feedback": "Ignoring discrepancies can lead to larger compliance issues down the line."
        },
        {
          "id": "2",
          "text": "Adjust the records to match the expected outcomes.",
          "isCorrect": false,
          "feedback": "Altering records is unethical and can result in severe penalties."
        },
        {
          "id": "3",
          "text": "Continue with the audit without addressing the discrepancies.",
          "isCorrect": false,
          "feedback": "Failing to address discrepancies undermines the integrity of the audit process."
        }
      ]
    },
    "visualKey": "capital-reporting-grid"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Asset Management",
    "label": "Crypto Track",
    "body": "<!-- M9.14-crypto-C8 -->\n### Core Scenario: Key Concepts in Crypto Asset Management\nThis card summarizes the essential concepts of managing crypto assets, focusing on custody audits and transaction reporting. Understanding these elements is vital for effective institutional management.\n\n* **Custody Audits**: Regular audits of custody arrangements are necessary to ensure that assets are securely held and accounted for. This includes verifying the integrity of private keys and assessing the security measures in place.\n* **Transaction Reporting**: Accurate and timely transaction reporting is crucial for compliance and investor transparency. Establish protocols for documenting all trades, including timestamps, amounts, and counterparties.\n* **Investor Communication**: Maintain open lines of communication with investors regarding asset performance and compliance status. Regular updates foster trust and facilitate informed decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Custody Audits",
          "definition": "Audits conducted to verify the security and management of crypto assets held in custody."
        },
        {
          "term": "Transaction Reporting",
          "definition": "The process of documenting and reporting all transactions involving crypto assets."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of custody audits and transaction reporting is essential for maintaining investor confidence and regulatory compliance.",
      "realLifeExample": "A crypto fund conducts a custody audit revealing that their private key management system is outdated, prompting immediate upgrades to enhance security.",
      "commonMistake": "Neglecting to perform regular custody audits, which can lead to vulnerabilities in asset security.",
      "quickNote": "Effective management of custody audits and transaction reporting is critical for institutional crypto operations.",
      "mentorText": "Never underestimate the importance of audits and reporting. They are the backbone of trust in our operations.",
      "mentorAnalogy": "Managing crypto assets is like a chef ensuring all ingredients are fresh and properly stored; neglecting these details can ruin the final dish."
    },
    "taskData": null,
    "visualKey": "capital-reporting-grid"
  }
];
