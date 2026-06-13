import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Altcoin Market Cycle Rules",
    "label": "Crypto Track",
    "body": "<!-- M8.15-crypto-C1 -->\n### Core Scenario: Understanding Altcoin Market Cycles\nAltcoins exhibit distinct market cycles influenced by various factors, including Bitcoin's price movements and overall market sentiment. This card outlines **the essential rules governing these cycles to optimize trading strategies**.\n\n* **Cycle Phases**: Recognize the four primary phases of altcoin cycles: accumulation, markup, distribution, and markdown. Each phase has specific characteristics that dictate trading behavior and market sentiment.\n* **Correlation with Bitcoin**: Monitor Bitcoin's price action closely, as altcoins often follow its lead. A 5% increase in Bitcoin's price can lead to a 15% rise in altcoin valuations, highlighting the need for correlation analysis.\n* **Volume Analysis**: Assess trading volume during each cycle phase. An increase in volume during the markup phase signals strong buying interest, while declining volume during distribution indicates potential reversals.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Cycle",
          "definition": "A recurring pattern of price movements in altcoins influenced by market sentiment and external factors."
        }
      ],
      "whyThisMatters": "Understanding these cycles allows traders to time entries and exits effectively, maximizing profit potential.",
      "realLifeExample": "During Q1 2023, Ethereum (ETH) entered a markup phase after Bitcoin's rally from $20,000 to $30,000, resulting in ETH surging from $1,500 to $2,500.",
      "commonMistake": "Traders often misinterpret the accumulation phase as a bullish signal, leading to premature entries.",
      "quickNote": "Recognize the four phases of altcoin cycles to optimize trading strategies.",
      "mentorText": "Focus on the phases of the cycle. If you see accumulation, prepare for potential markup, but don't rush in without confirming volume.",
      "mentorAnalogy": "Think of altcoin cycles like the life cycle of a product; each phase requires different marketing strategies to maximize sales."
    },
    "taskData": null,
    "visualKey": "final-crucible-recap"
  },
  {
    "type": "concept",
    "title": "Conducting a Funding Drag Audit",
    "label": "Crypto Track",
    "body": "<!-- M8.15-crypto-C2 -->\n### Core Scenario: Funding Drag Impact Assessment\nFunding rates can significantly affect the profitability of altcoin positions, especially in leveraged trading. This card teaches **how to conduct a funding drag audit to evaluate these impacts**.\n\n* **Funding Rate Calculation**: Determine the funding rate for your altcoin positions by checking the exchange's specifications. For instance, if the funding rate is 0.01% per 8 hours, calculate the total cost over your holding period.\n* **Position Duration Analysis**: Assess how long you plan to hold each position. A position held for 72 hours at a 0.01% funding rate incurs a total cost of 0.09%, which can erode profits if not accounted for.\n* **Profitability Threshold**: Establish a minimum price movement required to offset funding costs. If your altcoin needs to move 3% to break even after funding, ensure your target aligns with this threshold.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic fee paid by one side of a leveraged position to the other, affecting overall profitability."
        }
      ],
      "whyThisMatters": "Conducting a funding drag audit ensures that traders are aware of costs that can diminish returns, allowing for better decision-making.",
      "realLifeExample": "If holding a leveraged position in Chainlink (LINK) for 5 days incurs a funding cost of 0.15%, ensure that your target profit exceeds this cost to realize gains.",
      "commonMistake": "Ignoring funding costs can lead to unexpected losses, especially in volatile markets.",
      "quickNote": "Conduct a funding drag audit to assess the impact of funding rates on altcoin positions.",
      "mentorText": "Always factor in funding costs. If you're holding a position for several days, calculate how much that will eat into your profits.",
      "mentorAnalogy": "Conducting a funding drag audit is like a pilot calculating fuel costs for a flight; without it, you risk running out of resources mid-journey."
    },
    "taskData": null,
    "visualKey": "final-crucible-recap"
  },
  {
    "type": "concept",
    "title": "Market Analysis Techniques for Altcoins",
    "label": "Crypto Track",
    "body": "<!-- M8.15-crypto-C3 -->\n### Core Scenario: Tailored Market Analysis for Altcoins\nEffective market analysis for altcoins requires specialized techniques that differ from traditional assets. This card explores **specific analysis methods to master before the Gate**.\n\n* **Sentiment Analysis**: Utilize social media and news sentiment to gauge market mood. A spike in positive sentiment on platforms like Twitter can precede price rallies; track mentions and sentiment scores for key altcoins.\n* **On-Chain Metrics**: Analyze on-chain data such as transaction volume and active addresses. For example, a surge in active addresses for Polkadot (DOT) often correlates with price increases, indicating growing interest.\n* **Technical Indicators**: Apply altcoin-specific indicators like the Altcoin Season Index to identify market phases. A reading above 75 suggests a favorable environment for altcoins, guiding entry and exit strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "On-Chain Metrics",
          "definition": "Data derived from blockchain transactions that provide insights into network activity and health."
        }
      ],
      "whyThisMatters": "Mastering these techniques equips traders with the tools necessary to make informed decisions in a rapidly changing market.",
      "realLifeExample": "In June 2023, a 30% increase in active addresses for Solana (SOL) preceded a price surge from $20 to $30, demonstrating the power of on-chain analysis.",
      "commonMistake": "Relying solely on technical analysis without considering sentiment or on-chain data can lead to misinformed trades.",
      "quickNote": "Utilize sentiment analysis, on-chain metrics, and tailored indicators for effective altcoin analysis.",
      "mentorText": "Don't just look at charts; consider what the market is saying. Sentiment can often lead price movements before they happen.",
      "mentorAnalogy": "Market analysis for altcoins is like a chef tasting ingredients before cooking; understanding flavors ensures a successful dish."
    },
    "taskData": null,
    "visualKey": "final-crucible-recap"
  },
  {
    "type": "concept",
    "title": "Finalizing Risk Management for Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.15-crypto-C4 -->\n### Core Scenario: Risk Management Strategies for Crypto\nRisk management is critical in crypto trading due to high volatility and leverage. This card emphasizes **the importance of finalizing tailored risk management strategies before the Gate**.\n\n* **Position Sizing**: Implement a position sizing strategy based on account equity and risk tolerance. For example, if your account balance is $10,000 and you risk 2% per trade, your maximum position size should not exceed $200.\n* **Stop-Loss Orders**: Set stop-loss orders at strategic levels based on volatility. If trading Cardano (ADA), consider placing a stop-loss 5% below your entry to mitigate losses during sudden downturns.\n* **Diversification Protocol**: Diversify across multiple altcoins to spread risk. Allocating 10% of your capital to five different altcoins can reduce exposure to any single asset's volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade based on risk tolerance."
        }
      ],
      "whyThisMatters": "Finalizing risk management strategies helps protect capital and ensures sustainability in trading practices.",
      "realLifeExample": "If trading Ripple (XRP) with a $500 position size and a 5% stop-loss, a price drop from $0.50 to $0.475 would limit losses to $25.",
      "commonMistake": "Failing to adjust position sizes according to market conditions can lead to excessive risk exposure.",
      "quickNote": "Finalize risk management strategies to protect capital and ensure sustainable trading.",
      "mentorText": "Always know your limits. If a trade goes against you, have a plan to exit without significant losses.",
      "mentorAnalogy": "Risk management in trading is like a safety harness for a climber; it ensures you don't fall too far if you slip."
    },
    "taskData": null,
    "visualKey": "final-crucible-recap"
  },
  {
    "type": "concept",
    "title": "Reviewing Your Crypto Trading Plan",
    "label": "Crypto Track",
    "body": "<!-- M8.15-crypto-C5 -->\n### Core Scenario: Trading Plan Evaluation\nA comprehensive review of your crypto trading plan is vital to ensure alignment with your final objectives before the Gate. This card outlines **the systematic approach to refining your trading plan**.\n\n* **Objective Alignment**: Cross-reference your trading goals with your current plan. Ensure that each strategy and rule directly supports your defined objectives, such as risk tolerance and profit targets.\n* **Performance Metrics**: Analyze historical performance data against your plan's benchmarks. Identify discrepancies between expected and actual outcomes to adjust strategies accordingly.\n* **Rulebook Consistency**: Ensure that all rules within your trading plan are coherent and enforceable. Each rule must have a clear rationale and be easy to implement under pressure during trading sessions.",
    "context": {
      "keyTerms": [
        {
          "term": "Trading Plan",
          "definition": "A structured framework outlining trading strategies, risk management, and performance metrics."
        }
      ],
      "whyThisMatters": "A well-reviewed trading plan mitigates emotional decision-making and enhances consistency in performance.",
      "realLifeExample": "Reviewing a trading plan for BTC/USD, where the target profit is set at 10% with a stop-loss of 5%, ensuring these metrics align with past performance data from the last quarter.",
      "commonMistake": "Failing to update the trading plan based on recent market changes or personal performance insights.",
      "quickNote": "Align your trading plan with your objectives to enhance execution during the Gate.",
      "mentorText": "Before the Gate, I meticulously review my trading plan to ensure every aspect is aligned with my goals. If something doesn't fit, it gets revised or removed.",
      "mentorAnalogy": "Think of your trading plan as an architectural blueprint; it must be precise and adaptable to withstand the pressures of the market, much like a building must withstand environmental forces."
    },
    "taskData": null,
    "visualKey": "final-crucible-recap"
  },
  {
    "type": "concept",
    "title": "Understanding the Psychology of Altcoin Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.15-crypto-C6 -->\n### Core Scenario: Psychological Influences in Altcoin Trading\nThe psychology behind altcoin trading significantly impacts decision-making processes, especially in volatile markets. This card delves into **the psychological factors that can affect trading outcomes**.\n\n* **Fear and Greed Dynamics**: Recognize how fear of missing out (FOMO) and fear of loss can skew judgment. Develop strategies to counteract these emotions, such as setting predefined entry and exit points.\n* **Cognitive Bias Awareness**: Identify common biases, such as confirmation bias, that can lead to poor trading decisions. Regularly challenge your assumptions and seek objective data to inform your trades.\n* **Emotional Regulation Techniques**: Implement techniques such as mindfulness or structured breaks to maintain emotional control during trading. This is crucial for making rational decisions under pressure.",
    "context": {
      "keyTerms": [
        {
          "term": "Cognitive Bias",
          "definition": "A systematic pattern of deviation from norm or rationality in judgment."
        }
      ],
      "whyThisMatters": "Understanding psychological factors helps traders maintain discipline and make informed decisions, particularly in high-stakes environments.",
      "realLifeExample": "During a rapid price surge in ETH, a trader succumbs to FOMO and enters a position without analysis, leading to a significant loss when the price corrects.",
      "commonMistake": "Allowing emotional responses to dictate trading decisions, particularly during periods of high volatility.",
      "quickNote": "Master your psychology to enhance decision-making in altcoin trading.",
      "mentorText": "In altcoin trading, your mindset can be your greatest ally or your worst enemy. Stay disciplined and stick to your plan, regardless of market noise.",
      "mentorAnalogy": "Consider a surgeon in the operating room; they must remain calm and focused, regardless of external pressures, to ensure the best outcomes."
    },
    "taskData": null,
    "visualKey": "final-crucible-recap"
  },
  {
    "type": "practice",
    "title": "Final Practice Session for Crypto",
    "label": "Crypto Track",
    "body": "<!-- M8.15-crypto-C7 -->\n### Core Scenario: Simulating the Crypto Gate\nEngaging in a final practice session simulates the conditions of the Crypto Gate, allowing traders to apply their strategies in a realistic environment. This card focuses on **preparing for high-pressure trading scenarios**.\n\n* **Scenario Simulation**: Create realistic market conditions by using historical price data and volatility metrics. Simulate various altcoin movements to test your strategies under pressure.\n* **Time Management**: Allocate specific time frames for each trade decision, mirroring the time constraints experienced during the Gate. This practice helps improve decision-making speed and accuracy.\n* **Performance Review**: After the simulation, conduct a thorough review of your trades. Analyze what worked, what didn’t, and adjust your strategies accordingly for the actual Gate.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "A practice method that replicates real market conditions to test trading strategies."
        }
      ],
      "whyThisMatters": "Simulating the Gate environment prepares traders for the psychological and strategic demands they will face.",
      "realLifeExample": "Conducting a practice session where a trader executes a series of trades on LTC/USD, adjusting strategies based on real-time price fluctuations and news events.",
      "commonMistake": "Neglecting to simulate realistic market conditions, leading to unpreparedness for actual trading scenarios.",
      "quickNote": "Practice under realistic conditions to enhance readiness for the Crypto Gate.",
      "mentorText": "This final practice session is your last chance to refine your strategies. Treat it as if it's the real Gate—every decision counts.",
      "mentorAnalogy": "Like a pilot conducting a pre-flight checklist, you must ensure every aspect of your trading strategy is ready for takeoff."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During the final practice session, you notice a sudden price drop in a selected altcoin. What should be your immediate action?",
      "options": [
        {
          "id": "0",
          "text": "Reassess your stop-loss and take-profit levels based on the new price action.",
          "isCorrect": true,
          "feedback": "Reassessing your stop-loss and take-profit levels ensures that your risk management aligns with current market conditions."
        },
        {
          "id": "1",
          "text": "Panic and close all positions immediately to avoid further losses.",
          "isCorrect": false,
          "feedback": "Panic-driven decisions often lead to greater losses. A structured approach is essential."
        },
        {
          "id": "2",
          "text": "Ignore the drop and stick to your original plan without adjustments.",
          "isCorrect": false,
          "feedback": "Ignoring significant price movements can lead to missed opportunities or increased losses."
        },
        {
          "id": "3",
          "text": "Increase your position size to capitalize on the drop.",
          "isCorrect": false,
          "feedback": "Increasing position size without analysis can lead to overexposure and increased risk."
        }
      ]
    },
    "visualKey": "final-crucible-recap"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Final Gate Prep",
    "label": "Crypto Track",
    "body": "<!-- M8.15-crypto-C8 -->\n### Core Scenario: Key Elements of Final Gate Preparation\nSummarizing the essential strategies and insights needed for success in the Crypto Gate reinforces the learning process. This card encapsulates **the critical components of preparation**.\n\n* **Comprehensive Review**: Ensure your trading plan is thoroughly reviewed and aligned with your objectives. This includes performance metrics and rule consistency.\n* **Psychological Readiness**: Acknowledge the psychological factors influencing your trading decisions and implement strategies to maintain emotional control.\n* **Practice and Simulation**: Engage in realistic practice sessions to prepare for the pressures of the Gate. Analyze performance and refine strategies based on outcomes.",
    "context": {
      "keyTerms": [
        {
          "term": "Psychological Readiness",
          "definition": "The state of being mentally prepared to face the challenges of trading."
        }
      ],
      "whyThisMatters": "A solid summary reinforces the key strategies that will guide traders through the complexities of the Crypto Gate.",
      "realLifeExample": "A trader consolidates their insights from reviewing their BTC trading plan, psychological strategies, and practice session outcomes to create a final checklist before the Gate.",
      "commonMistake": "Overlooking the importance of psychological readiness and practice, leading to unpreparedness.",
      "quickNote": "Reinforce your strategies and insights to ensure success at the Crypto Gate.",
      "mentorText": "As you prepare for the Gate, remember to consolidate your insights. Every piece of knowledge is a tool to help you succeed.",
      "mentorAnalogy": "Like a chef finalizing a menu before service, ensure every element of your trading strategy is refined and ready for execution."
    },
    "taskData": null,
    "visualKey": "final-crucible-recap"
  }
];
