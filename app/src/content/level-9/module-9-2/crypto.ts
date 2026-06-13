import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Altcoin Correlation with Bitcoin",
    "label": "Crypto Track",
    "body": "<!-- M9.2-crypto-C1 -->\n### Core Scenario: Altcoin Beta Tracking\nUnderstanding the beta correlation of altcoins to Bitcoin is essential during periods of high Bitcoin dominance. This card emphasizes **how to monitor and adjust altcoin exposure based on their correlation to Bitcoin**.\n\n* **Correlation Analysis**: Utilize statistical tools to calculate the beta coefficient of each altcoin against Bitcoin. A beta greater than 1 indicates higher volatility relative to Bitcoin, which can amplify portfolio risk during downturns.\n* **High-Dominance Cycles**: Identify periods when Bitcoin's market dominance exceeds 60%. During these times, altcoins typically follow Bitcoin's price movements closely, increasing systemic risk.\n* **Portfolio Adjustment Protocol**: Implement a protocol to reduce altcoin positions when Bitcoin's dominance rises sharply. For example, if Bitcoin's dominance increases from 58% to 65%, consider reducing altcoin exposure by 20% to mitigate risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Beta Coefficient",
          "definition": "A measure of an asset's volatility in relation to a benchmark, in this case, Bitcoin."
        },
        {
          "term": "Market Dominance",
          "definition": "The percentage of the total cryptocurrency market capitalization that is held by Bitcoin."
        }
      ],
      "whyThisMatters": "Tracking altcoin correlation to Bitcoin is critical for maintaining a balanced risk profile, especially in volatile market conditions.",
      "realLifeExample": "During a high-dominance cycle in January 2023, Bitcoin's dominance surged to 68%, leading to a 30% drop in Ethereum and a 40% drop in Cardano, highlighting the need for correlation monitoring.",
      "commonMistake": "Failing to adjust altcoin positions during high-dominance periods, resulting in excessive exposure to correlated risks.",
      "quickNote": "Monitor altcoin beta correlation to Bitcoin to manage risk effectively.",
      "mentorText": "When Bitcoin's dominance spikes, it's like a tidal wave affecting everything in its path. You must adjust your altcoin positions to avoid being swept away.",
      "mentorAnalogy": "Think of your portfolio as a fleet of ships. When the flagship (Bitcoin) encounters a storm, the smaller ships (altcoins) are at risk of capsizing unless you adjust their sails accordingly."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Analyzing Beta Coefficients of Altcoins",
    "label": "Crypto Track",
    "body": "<!-- M9.2-crypto-C2 -->\n### Core Scenario: Beta Coefficient Analysis\nAnalyzing the beta coefficients of altcoins relative to Bitcoin provides insight into potential risk overlaps within your portfolio. This card teaches **how to systematically evaluate these coefficients to inform trading decisions**.\n\n* **Data Collection**: Gather historical price data for Bitcoin and selected altcoins over a minimum of six months. Use this data to calculate the beta coefficient through regression analysis, comparing altcoin price movements to Bitcoin's.\n* **Interpreting Beta Values**: A beta value of less than 1 indicates lower volatility than Bitcoin, while a value above 1 suggests higher volatility. For instance, if an altcoin has a beta of 1.5, it is expected to move 50% more than Bitcoin in either direction.\n* **Risk Assessment Framework**: Develop a framework to categorize altcoins based on their beta values. For example, classify altcoins with beta values above 1.2 as high-risk and consider limiting their allocation to 10% of your portfolio.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Regression Analysis",
          "definition": "A statistical method used to determine the relationship between variables, in this case, altcoin prices and Bitcoin prices."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time, often measured by standard deviation."
        }
      ],
      "whyThisMatters": "Understanding beta coefficients allows traders to quantify risk and make informed decisions about asset allocation.",
      "realLifeExample": "If Ethereum's beta is calculated at 1.3, and Bitcoin experiences a 10% increase, Ethereum could be expected to rise by approximately 13%, indicating higher risk exposure.",
      "commonMistake": "Overlooking the significance of beta analysis, leading to disproportionate allocations in high-beta altcoins.",
      "quickNote": "Evaluate altcoin beta coefficients to gauge risk relative to Bitcoin.",
      "mentorText": "Think of beta as a risk gauge. If your altcoin's beta is high, you need to be prepared for larger swings in your portfolio's value.",
      "mentorAnalogy": "Consider beta coefficients as the speedometer in a car. A higher reading means you’re going faster, which can lead to greater risk if you’re not careful."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Impact of Market Dominance on Altcoin Risk",
    "label": "Crypto Track",
    "body": "<!-- M9.2-crypto-C3 -->\n### Core Scenario: Market Dominance Effects\nBitcoin's market dominance significantly influences the risk profiles of altcoins. This card explores **how to assess the implications of Bitcoin's dominance on altcoin investments**.\n\n* **Dominance Thresholds**: Monitor Bitcoin's market dominance levels. When dominance exceeds 65%, altcoins typically experience increased correlation and volatility, necessitating a reassessment of their risk profiles.\n* **Risk Exposure Assessment**: Conduct a risk exposure analysis for your altcoin holdings during varying dominance levels. For example, if Bitcoin's dominance rises from 60% to 70%, evaluate whether to reduce altcoin exposure by 15% to maintain a balanced risk profile.\n* **Strategic Reallocation**: Develop a strategy for reallocating assets based on dominance shifts. If Bitcoin's dominance increases, consider reallocating funds from high-beta altcoins to stablecoins or Bitcoin itself to mitigate risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation",
          "definition": "A statistical measure that expresses the extent to which two variables fluctuate together."
        },
        {
          "term": "Reallocation",
          "definition": "The process of redistributing assets within a portfolio to optimize risk and return."
        }
      ],
      "whyThisMatters": "Understanding the impact of Bitcoin's dominance on altcoin risk is essential for effective portfolio management and risk mitigation.",
      "realLifeExample": "In March 2023, Bitcoin's dominance increased to 72%, leading to a 25% drop in the average altcoin price, illustrating the need for strategic reallocation.",
      "commonMistake": "Failing to adjust altcoin holdings in response to shifts in Bitcoin's dominance, resulting in increased portfolio volatility.",
      "quickNote": "Monitor Bitcoin's dominance to assess altcoin risk accurately.",
      "mentorText": "When Bitcoin's dominance rises, it's like a signal flare indicating potential turbulence ahead for altcoins. Adjust your holdings accordingly to avoid unnecessary risk.",
      "mentorAnalogy": "Think of Bitcoin's dominance as the tide in an ocean. When the tide rises, all boats (altcoins) are affected, and you must adjust your anchor to prevent capsizing."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Managing Altcoin Volatility Risks",
    "label": "Crypto Track",
    "body": "<!-- M9.2-crypto-C4 -->\n### Core Scenario: Volatility Risk Management\nManaging volatility risks associated with altcoins is crucial for maintaining a stable portfolio. This card outlines **strategies to mitigate risks from altcoin price fluctuations**.\n\n* **Volatility Assessment Tools**: Utilize tools such as the Average True Range (ATR) to measure the volatility of altcoins. Set thresholds for acceptable volatility levels, e.g., if an altcoin's ATR exceeds 5%, consider reducing exposure.\n* **Stop-Loss Implementation**: Establish stop-loss orders for altcoin positions to limit potential losses. For instance, if you hold a position in Solana at $20, set a stop-loss at $18 to cap losses at 10%.\n* **Diversification Strategy**: Diversify altcoin holdings by including a mix of low-beta and high-beta assets. For example, pair a high-beta asset like Chainlink with a low-beta asset like Litecoin to balance overall portfolio volatility.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical analysis indicator used to measure market volatility."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        }
      ],
      "whyThisMatters": "Effectively managing altcoin volatility is essential to protect capital and ensure long-term portfolio stability.",
      "realLifeExample": "In a volatile market in May 2023, implementing a stop-loss on a position in Polkadot at $10 prevented a 30% loss when the price dropped to $7.",
      "commonMistake": "Neglecting to set stop-loss orders, resulting in larger-than-expected losses during market downturns.",
      "quickNote": "Implement volatility management strategies to safeguard your portfolio.",
      "mentorText": "Volatility is like a storm; you need to have your safety measures in place before it hits. Set your stop-loss orders and monitor your altcoins closely.",
      "mentorAnalogy": "Managing altcoin volatility is akin to a pilot adjusting the plane's altitude to avoid turbulence. You must be proactive to ensure a smooth flight."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Correlation of Altcoins with Market Trends",
    "label": "Crypto Track",
    "body": "<!-- M9.2-crypto-C5 -->\n### Core Scenario: Altcoin Market Correlation\nAltcoins often exhibit a high degree of correlation with broader market trends, particularly Bitcoin's price movements. Understanding this correlation is essential to evaluate the risk exposure in a diversified crypto portfolio.\n\n* **Market Sentiment Influence**: Altcoins typically follow Bitcoin's price trajectory due to market sentiment. For instance, if Bitcoin rallies 10% in a session, altcoins like Ethereum and Cardano may also rise, reflecting a correlated response to market dynamics.\n* **Volatility Amplification**: The volatility of altcoins can be significantly higher than Bitcoin. A 15% drop in Bitcoin could trigger a 25% decline in an altcoin like Solana, increasing overall portfolio risk if multiple correlated assets are held.\n* **Diversification Limitations**: Holding multiple altcoins that are highly correlated does not provide true diversification. For example, if a portfolio contains both Chainlink and Polkadot, the risk profile remains similar, as both assets may react similarly to market shifts.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation",
          "definition": "A statistical measure that indicates the extent to which two assets move in relation to one another."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        }
      ],
      "whyThisMatters": "Recognizing the correlation between altcoins and market trends allows traders to make informed decisions about risk exposure and asset allocation.",
      "realLifeExample": "During the recent Bitcoin surge from $30,000 to $35,000, Ethereum increased from $2,000 to $2,200, showcasing a direct correlation that can amplify risk in a portfolio heavily weighted in altcoins.",
      "commonMistake": "Traders often assume that holding multiple altcoins provides diversification without assessing their correlation to Bitcoin.",
      "quickNote": "Altcoins often mirror Bitcoin's movements, impacting portfolio risk significantly.",
      "mentorText": "You need to analyze how your altcoins react to Bitcoin's price changes. If they're moving in tandem, you're not as diversified as you think.",
      "mentorAnalogy": "Think of your portfolio like a fleet of ships. If all your ships are sailing the same course in a storm, they’re all at risk of capsizing together."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Techniques for Mitigating Crypto Risks",
    "label": "Crypto Track",
    "body": "<!-- M9.2-crypto-C6 -->\n### Core Scenario: Risk Mitigation Strategies\nMitigating risks associated with correlated altcoin and Bitcoin strategies is crucial for maintaining a balanced portfolio. Employing specific techniques can help reduce exposure to adverse market movements.\n\n* **Hedging with Derivatives**: Utilize options or futures to hedge against potential losses in your primary holdings. For instance, if you hold Bitcoin, purchasing put options can protect against a downturn while maintaining exposure to upside potential.\n* **Dynamic Rebalancing**: Regularly assess and adjust your portfolio allocation based on market conditions. If Bitcoin's volatility increases, consider reducing exposure to correlated altcoins to lower overall risk.\n* **Correlation Analysis Tools**: Implement statistical tools to analyze the correlation coefficients of your assets. A coefficient above 0.7 indicates high correlation; consider reducing positions in those assets to diversify risk effectively.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging",
          "definition": "A risk management strategy used to offset potential losses in an investment."
        },
        {
          "term": "Dynamic Rebalancing",
          "definition": "The process of adjusting the weightings of assets in a portfolio based on changing market conditions."
        }
      ],
      "whyThisMatters": "Effective risk mitigation techniques can protect capital and enhance long-term portfolio performance amidst market volatility.",
      "realLifeExample": "If Bitcoin is trading at $35,000 and you hold 2 BTC, purchasing a put option with a strike price of $34,000 can safeguard against a potential drop, allowing you to maintain your position without panic selling.",
      "commonMistake": "Traders often neglect to hedge their positions, leaving themselves vulnerable to sudden market shifts.",
      "quickNote": "Employ hedging and dynamic rebalancing to manage risks in correlated crypto strategies.",
      "mentorText": "Always have a plan to protect your investments. Hedging is like wearing a seatbelt; it won't prevent an accident, but it will minimize the impact.",
      "mentorAnalogy": "Consider your portfolio like a construction site. Just as you would use safety gear to protect workers, you need risk management strategies to safeguard your investments."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "practice",
    "title": "Practical Crypto Risk Assessment",
    "label": "Crypto Track",
    "body": "<!-- M9.2-crypto-C7 -->\n### Core Scenario: Risk Assessment Exercise\nEngaging in a practical exercise to assess risk in a hypothetical crypto portfolio reinforces the concepts learned throughout the module. This exercise focuses on identifying correlated risks and adjusting strategies accordingly.\n\n* **Portfolio Composition**: You have a portfolio consisting of 2 BTC, 50 ETH, and 1000 ADA. Assess the correlation of these assets with Bitcoin and identify potential risk exposure.\n* **Risk Assessment Criteria**: Evaluate the volatility of each asset over the past 30 days and calculate the correlation coefficients. Determine if the combined exposure exceeds your risk tolerance.\n* **Adjustment Strategy**: Based on your assessment, decide whether to reduce positions in highly correlated assets or implement hedging strategies to mitigate risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "A statistical measure of the dispersion of returns for a given security or market index."
        },
        {
          "term": "Correlation Coefficient",
          "definition": "A numerical measure of the strength and direction of the relationship between two variables."
        }
      ],
      "whyThisMatters": "Conducting a thorough risk assessment allows traders to make data-driven decisions to protect their portfolios from correlated risks.",
      "realLifeExample": "In a hypothetical scenario, if BTC drops by 10%, and ETH drops by 15% while ADA remains stable, the overall portfolio risk profile needs reevaluation to maintain balance.",
      "commonMistake": "Failing to regularly assess portfolio risk can lead to unexpected losses during market downturns.",
      "quickNote": "Regular risk assessments are essential to maintain a balanced crypto portfolio.",
      "mentorText": "You must continuously evaluate your portfolio's risk. If one asset starts to dominate your exposure, it's time to make adjustments.",
      "mentorAnalogy": "Think of your portfolio like a ship's cargo. If one side becomes too heavy, it risks capsizing. Regular checks ensure balance and stability."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a portfolio of 2 BTC, 50 ETH, and 1000 ADA, which adjustment should be made to mitigate risk if BTC and ETH are highly correlated?",
      "options": [
        {
          "id": "0",
          "text": "Increase the position in ADA to offset BTC and ETH risk.",
          "isCorrect": false,
          "feedback": "Increasing ADA does not address the correlation risk of BTC and ETH."
        },
        {
          "id": "1",
          "text": "Reduce the position in ETH to lower overall portfolio correlation.",
          "isCorrect": true,
          "feedback": "Reducing ETH exposure directly mitigates risk associated with its correlation to BTC."
        },
        {
          "id": "2",
          "text": "Hold all positions as they are, assuming market conditions will improve.",
          "isCorrect": false,
          "feedback": "Ignoring correlation risks can lead to significant losses during downturns."
        },
        {
          "id": "3",
          "text": "Invest in more BTC to strengthen the portfolio.",
          "isCorrect": false,
          "feedback": "Increasing BTC exposure does not mitigate the risk from correlated assets."
        }
      ]
    },
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Risk Management Strategies",
    "label": "Crypto Track",
    "body": "<!-- M9.2-crypto-C8 -->\n### Core Scenario: Overview of Risk Management\nSummarizing key strategies discussed for managing risk in crypto portfolios, particularly focusing on altcoin correlation with Bitcoin. A comprehensive understanding of these strategies is essential for effective portfolio management.\n\n* **Correlation Awareness**: Recognize how altcoins react to Bitcoin's price movements and the implications for portfolio risk. High correlation can lead to amplified losses during downturns.\n* **Risk Mitigation Techniques**: Implement hedging strategies and dynamic rebalancing to manage exposure effectively. These techniques can protect against adverse market conditions and help maintain portfolio integrity.\n* **Continuous Assessment**: Regularly assess portfolio risk through volatility analysis and correlation coefficients. Adjust positions as necessary to ensure alignment with risk tolerance and market dynamics.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Portfolio Management",
          "definition": "The art and science of making decisions about investment mix and policy."
        },
        {
          "term": "Risk Tolerance",
          "definition": "The degree of variability in investment returns that an investor is willing to withstand."
        }
      ],
      "whyThisMatters": "A thorough understanding of risk management strategies enables traders to navigate market volatility while protecting their capital.",
      "realLifeExample": "In a market downturn where Bitcoin falls by 20%, a well-managed portfolio that employs risk mitigation strategies can significantly reduce potential losses compared to a poorly diversified one.",
      "commonMistake": "Traders often overlook the importance of continuous risk assessment, leading to unanticipated portfolio vulnerabilities.",
      "quickNote": "Effective risk management strategies are vital for sustaining long-term success in crypto trading.",
      "mentorText": "You must always be aware of how your assets interact. A well-managed portfolio is one that adapts to changing market conditions.",
      "mentorAnalogy": "Managing your portfolio is like piloting an aircraft. You must constantly monitor instruments and adjust your course to ensure a safe flight."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  }
];
