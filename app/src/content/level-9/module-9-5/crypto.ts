import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Mitigating Exchange API Outages",
    "label": "Crypto Track",
    "body": "<!-- M9.5-crypto-C1 -->\n### Core Scenario: Exchange API Contingency Planning\nExchange API outages can lead to significant trading disruptions, impacting execution and liquidity. This card outlines **strategies to ensure operational continuity during API failures**.\n\n* **Redundant API Connections**: Establish multiple API connections to different exchanges. This redundancy allows for seamless switching to a backup API if the primary connection fails, minimizing downtime.\n* **Automated Failover Protocols**: Implement automated systems that detect API outages and switch to backup connections without manual intervention. This ensures trades can continue executing even during disruptions.\n* **Regular Stress Testing**: Conduct routine stress tests on your trading infrastructure to simulate API outages. Evaluate response times and recovery procedures to ensure quick adaptation during real-world scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "API Outage",
          "definition": "A failure in the application programming interface that prevents communication with the exchange."
        }
      ],
      "whyThisMatters": "Mitigating API outages is critical for maintaining trading operations and capitalizing on market opportunities without interruption.",
      "realLifeExample": "During a significant outage of Binance's API on March 15, 2023, traders who had backup connections to Coinbase were able to execute trades, capturing a 10% price drop in BTC.",
      "commonMistake": "Traders often rely solely on one exchange API, exposing themselves to unnecessary risk during outages.",
      "quickNote": "Establish redundant API connections to ensure continuous trading operations.",
      "mentorText": "When an API goes down, the last thing you want is to be left in the dark. Always have a backup plan ready to go, so you can keep trading without missing a beat.",
      "mentorAnalogy": "Think of your trading setup like an airplane's navigation system. Just as pilots have multiple navigation systems to ensure safety, you need multiple API connections to navigate market disruptions."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Understanding Smart Contract Exploits",
    "label": "Crypto Track",
    "body": "<!-- M9.5-crypto-C2 -->\n### Core Scenario: Safeguarding Against Smart Contract Vulnerabilities\nSmart contracts can be exploited during market disruptions, leading to significant financial losses. This card explains **how to identify and mitigate risks associated with smart contract vulnerabilities**.\n\n* **Common Exploit Types**: Familiarize yourself with common exploit types such as reentrancy attacks and overflow vulnerabilities. Understanding these can help you assess the security of contracts before engaging with them.\n* **Audit Protocols**: Ensure that all smart contracts are audited by reputable third-party firms. Regular audits can identify vulnerabilities before they are exploited, providing an additional layer of security.\n* **Emergency Shutdown Mechanisms**: Implement emergency shutdown features in your smart contracts. These allow for quick halting of contract functions in the event of an exploit, limiting potential losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Smart Contract Exploit",
          "definition": "A vulnerability in a smart contract that can be manipulated to cause financial loss."
        }
      ],
      "whyThisMatters": "Understanding smart contract exploits is essential for protecting investments and ensuring the integrity of automated trading strategies.",
      "realLifeExample": "In 2021, the Poly Network suffered a $610 million exploit due to a vulnerability in its smart contract. Traders who had protocols in place to monitor contract security were able to withdraw their funds before the exploit occurred.",
      "commonMistake": "Many traders neglect to verify the security of smart contracts, exposing themselves to significant risks.",
      "quickNote": "Regular audits and emergency shutdowns are critical for safeguarding against smart contract exploits.",
      "mentorText": "You wouldn't drive a car without checking the brakes first. Similarly, always audit smart contracts before deploying funds to ensure they are secure.",
      "mentorAnalogy": "Think of smart contracts like a house's security system. Just as you would install a reliable alarm system to prevent break-ins, you need robust security measures to protect your investments in smart contracts."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Addressing Stablecoin Deppeg Events",
    "label": "Crypto Track",
    "body": "<!-- M9.5-crypto-C3 -->\n### Core Scenario: Recovery Strategies for Stablecoin Deppegs\nStablecoin depegging can create volatility and risk for traders holding these assets. This card focuses on **formulating recovery strategies to minimize losses during depeg events**.\n\n* **Diversification of Stablecoin Holdings**: Avoid concentration in a single stablecoin. By diversifying across multiple stablecoins, you reduce exposure to the risks associated with any one asset losing its peg.\n* **Monitoring Mechanisms**: Set up alerts for significant deviations from the peg. For instance, if USDT falls below $0.95, have a protocol in place to assess your exposure and take action accordingly.\n* **Liquidity Provisioning**: Maintain liquidity in other assets to facilitate quick trades during depeg events. This allows you to exit positions without incurring significant losses when a stablecoin depegs.",
    "context": {
      "keyTerms": [
        {
          "term": "Stablecoin Deppeg",
          "definition": "A situation where a stablecoin's value deviates significantly from its intended peg."
        }
      ],
      "whyThisMatters": "Addressing stablecoin depegging is vital for protecting capital and maintaining trading strategies during extreme market conditions.",
      "realLifeExample": "During the UST depeg event in May 2022, traders who had diversified into multiple stablecoins were able to mitigate losses while others faced significant capital erosion.",
      "commonMistake": "Traders often hold too much of a single stablecoin, increasing their risk exposure during depeg events.",
      "quickNote": "Diversification and monitoring are essential to manage risks associated with stablecoin depegs.",
      "mentorText": "When a stablecoin starts to lose its peg, don’t panic. Have a plan to diversify and react quickly to protect your investments.",
      "mentorAnalogy": "Consider stablecoins like a fleet of ships. If one ship starts to sink, having multiple vessels ensures that you can still navigate the waters safely."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Trading (Module 9.5 - CRYPTO)",
    "label": "Crypto Track",
    "body": "<!-- M9.5-crypto-C4 -->\n### Core Scenario: Advanced Risk Management Techniques\nCrypto trading presents unique risks, especially during extreme market conditions. This card discusses **advanced risk management techniques tailored for crypto traders**.\n\n* **Position Sizing Models**: Utilize dynamic position sizing based on volatility metrics. For example, during high volatility, reduce position sizes to mitigate risk exposure and preserve capital.\n* **Stop-Loss Strategies**: Implement trailing stop-loss orders to protect profits while allowing for upside potential. Adjust these stops based on market conditions to avoid premature exits.\n* **Stress Testing Portfolios**: Regularly stress test your portfolio against extreme market scenarios. Simulate potential losses during significant downturns to evaluate the resilience of your trading strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "Effective risk management is crucial for sustaining trading operations and protecting capital during volatile market conditions.",
      "realLifeExample": "In the crypto crash of May 2021, traders who employed dynamic position sizing were able to limit their losses to 15% while others faced losses exceeding 50%.",
      "commonMistake": "Many traders fail to adjust their risk management strategies in response to changing market conditions, leading to excessive losses.",
      "quickNote": "Dynamic position sizing and stress testing are essential for effective risk management in crypto trading.",
      "mentorText": "Think of risk management as your trading safety net. Adjust it according to market conditions to ensure you stay afloat during turbulent times.",
      "mentorAnalogy": "Just as a surgeon tailors their approach based on the patient's condition, you must adapt your risk management strategies to the current market environment."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Developing Contingency Plans for Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.5-crypto-C5 -->\n### Core Scenario: Contingency Plan Framework\nContingency plans are essential for navigating extreme market disruptions in crypto trading. This card outlines **how to structure a robust contingency plan tailored to the unique risks of the crypto environment**.\n\n* **Risk Identification**: Conduct a thorough risk assessment focusing on market volatility, regulatory changes, and technological failures. Identify potential triggers such as a sudden exchange shutdown or a major hack that could impact liquidity.\n* **Actionable Protocols**: Establish clear, actionable steps for each identified risk. For instance, if a major exchange reports a security breach, the protocol may include immediate withdrawal of assets to a secure wallet and a halt on trading activities until further analysis is conducted.\n* **Communication Strategy**: Define a communication plan for stakeholders, ensuring timely updates during a crisis. This includes notifying team members, clients, and partners about the status and actions being taken to mitigate risks.",
    "context": {
      "keyTerms": [
        {
          "term": "Contingency Plan",
          "definition": "A predefined strategy to manage potential crises in trading."
        }
      ],
      "whyThisMatters": "Effective contingency plans minimize losses and ensure rapid recovery during crypto market disruptions.",
      "realLifeExample": "During the March 2020 crypto market crash, a trader with a pre-established contingency plan withdrew funds from exchanges, avoiding significant losses when BTC plummeted to $3,800.",
      "commonMistake": "Failing to regularly update contingency plans based on evolving market conditions and new risks.",
      "quickNote": "A well-structured contingency plan is your safety net during market turmoil.",
      "mentorText": "In my experience, having a contingency plan is like having a parachute. You don’t want to need it, but when you do, you’ll be glad it’s there.",
      "mentorAnalogy": "Think of your contingency plan as an emergency exit in a building; it’s not used often, but when a crisis occurs, it’s critical for a safe escape."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Incident Response Protocols for Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.5-crypto-C6 -->\n### Core Scenario: Incident Response Development\nIncident response protocols are vital for swift action during crypto market crises. This card details **how to create and implement effective incident response protocols**.\n\n* **Crisis Identification**: Classify potential incidents such as exchange outages, smart contract vulnerabilities, or regulatory announcements. Each type of incident requires a tailored response strategy.\n* **Response Team Activation**: Designate a response team with clear roles and responsibilities. For example, the team lead may focus on communication, while a technical expert assesses the impact of a smart contract exploit.\n* **Post-Incident Review**: After an incident, conduct a thorough review to analyze the response effectiveness and identify areas for improvement. This may include evaluating the speed of communication and the adequacy of technical responses.",
    "context": {
      "keyTerms": [
        {
          "term": "Incident Response Protocol",
          "definition": "A structured approach to managing and mitigating incidents in trading."
        }
      ],
      "whyThisMatters": "Rapid and organized responses can significantly reduce the impact of crises on trading operations.",
      "realLifeExample": "In 2021, a major DeFi platform faced a flash loan attack. The incident response team quickly froze affected contracts, limiting losses to under $10 million, compared to potential losses of over $100 million.",
      "commonMistake": "Neglecting to regularly train the incident response team, leading to unpreparedness during actual crises.",
      "quickNote": "A well-defined incident response protocol can save your trading operation during a crisis.",
      "mentorText": "When a crisis hits, you need a plan that’s already in place. Think of it as a fire drill; you don’t want to figure out what to do when the alarm is ringing.",
      "mentorAnalogy": "Just like a surgical team has a checklist for emergencies, your incident response protocol should outline every step to take when a crisis occurs."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "practice",
    "title": "Crypto Scenario Simulation Exercise",
    "label": "Crypto Track",
    "body": "<!-- M9.5-crypto-C7 -->\n### Core Scenario: Risk Mitigation Simulation\nParticipate in a scenario simulation designed to test your ability to respond to risks associated with exchange API outages and smart contract exploits. This exercise will enhance your practical skills in crisis management.\n\n* **Scenario Setup**: You are notified that your primary exchange is experiencing a significant API outage, preventing order execution. Simultaneously, a news alert indicates a potential exploit in a smart contract you are using.\n* **Decision-Making Process**: Evaluate the situation and decide on immediate actions. Options may include switching to a backup exchange, halting all trading activities, or reallocating funds to secure wallets.\n* **Outcome Assessment**: After executing your chosen actions, analyze the outcomes. Did your decisions minimize losses? What could have been done differently to improve the response?",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "A practical exercise to test response strategies in hypothetical situations."
        }
      ],
      "whyThisMatters": "Simulations prepare traders to act decisively and effectively during real market crises.",
      "realLifeExample": "In a recent simulation, traders faced a mock API outage on Binance. Those who practiced switching to alternative exchanges quickly managed to execute trades, avoiding significant losses.",
      "commonMistake": "Relying solely on theoretical knowledge without practical application in crisis scenarios.",
      "quickNote": "Simulations are critical for honing your crisis response skills in crypto trading.",
      "mentorText": "Think of this simulation as a fire drill for your trading strategy. The more you practice, the more instinctive your responses will become when a real crisis hits.",
      "mentorAnalogy": "Just as pilots undergo simulator training for emergency landings, you must practice crisis scenarios to ensure you can navigate market disruptions effectively."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated API outage, what is your first action?",
      "options": [
        {
          "id": "0",
          "text": "Switch to a backup exchange and execute trades there.",
          "isCorrect": true,
          "feedback": "This is correct. Quickly switching to a backup exchange allows you to continue trading and mitigate losses."
        },
        {
          "id": "1",
          "text": "Wait for the API to come back online before taking any action.",
          "isCorrect": false,
          "feedback": "This is incorrect. Waiting could result in missed opportunities or further losses."
        },
        {
          "id": "2",
          "text": "Panic and sell all holdings immediately.",
          "isCorrect": false,
          "feedback": "This is incorrect. Panic selling can lead to significant losses without proper assessment."
        },
        {
          "id": "3",
          "text": "Ignore the situation and continue trading as usual.",
          "isCorrect": false,
          "feedback": "This is incorrect. Ignoring the outage could expose you to unnecessary risks."
        }
      ]
    },
    "visualKey": "stress-test-model"
  },
  {
    "type": "summary",
    "title": "Crypto Module Recap and Key Insights",
    "label": "Crypto Track",
    "body": "<!-- M9.5-crypto-C8 -->\n### Core Scenario: Key Insights Recap\nThis card summarizes the critical insights gained throughout the Crypto track, emphasizing the importance of preparedness for disruptions in the crypto market. \n\n* **Preparedness is Paramount**: The volatility of the crypto market necessitates a proactive approach to risk management. Traders must be equipped with contingency plans and incident response protocols to navigate crises effectively.\n* **Continuous Learning**: Regularly updating knowledge and protocols based on market developments is essential. The crypto landscape evolves rapidly, and so should your strategies.\n* **Simulation as a Tool**: Engaging in scenario simulations enhances practical skills and prepares traders for real-world challenges. Regular practice solidifies response strategies and builds confidence.",
    "context": {
      "keyTerms": [
        {
          "term": "Preparedness",
          "definition": "The state of being ready to respond to market disruptions."
        }
      ],
      "whyThisMatters": "Summarizing key insights reinforces the necessity of preparedness in mitigating risks associated with crypto trading.",
      "realLifeExample": "Traders who implemented learnings from this module successfully navigated the May 2021 market crash, employing contingency plans that minimized their exposure.",
      "commonMistake": "Underestimating the importance of continuous education and practice in crisis management.",
      "quickNote": "Preparedness and continuous learning are your best defenses against market disruptions.",
      "mentorText": "Reflecting on our discussions, remember that the crypto market is unpredictable. Your best strategy is to stay prepared and adaptable.",
      "mentorAnalogy": "Like a seasoned sailor who constantly checks weather patterns and adjusts sails, you must remain vigilant and ready to adapt your trading strategies."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  }
];
