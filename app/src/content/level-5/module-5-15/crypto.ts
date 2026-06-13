import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Perpetual Margin Overview",
    "label": "Crypto Track",
    "body": "### Perpetual Margin: Key Concepts and Significance\nPerpetual margin is a critical component of risk management in crypto trading, particularly for perpetual contracts. Understanding its mechanics is essential for success in the Drawdown Crucible exam.\n\n* **Initial and Maintenance Margin**: Initial margin is the upfront capital required to open a position, while maintenance margin is the minimum equity needed to keep a position open. Failure to maintain this can lead to liquidation.\n* **Margin Call Mechanism**: When equity falls below the maintenance margin, traders receive a margin call, necessitating additional funds to avoid liquidation. This mechanism is crucial for managing risk effectively.\n* **Impact of Leverage**: Higher leverage amplifies both potential gains and losses, directly affecting margin requirements. For instance, using 10x leverage on a $1,000 position requires a $100 initial margin, but also increases the risk of liquidation significantly.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Margin",
          "definition": "The amount of capital required to open and maintain a position in perpetual contracts."
        },
        {
          "term": "Maintenance Margin",
          "definition": "The minimum equity required to keep a position open without triggering liquidation."
        }
      ],
      "whyThisMatters": "A thorough understanding of perpetual margin is vital for managing risk and preparing for the Drawdown Crucible exam effectively.",
      "realLifeExample": "A trader opens a $10,000 position in Bitcoin with 10x leverage. The initial margin required is $1,000. If the position drops to $9,000, the trader risks a margin call if their equity falls below the maintenance margin.",
      "commonMistake": "Misunderstanding the difference between initial and maintenance margin can lead to unexpected liquidations.",
      "quickNote": "Perpetual margin is essential for risk management in crypto trading.",
      "mentorText": "You must grasp the nuances of perpetual margin. Think of it as your financial buffer; without it, your position is at risk of being wiped out.",
      "mentorAnalogy": "Consider perpetual margin like the fuel reserve in an aircraft; without enough fuel, you cannot safely navigate through turbulence."
    },
    "taskData": null,
    "visualKey": "level-5-debrief-recap"
  },
  {
    "type": "concept",
    "title": "Methods for Calculating Perpetual Margin",
    "label": "Crypto Track",
    "body": "### Calculating Perpetual Margin: Techniques and Applications\nAccurate calculation of perpetual margin is essential for effective risk management in crypto trading. This card outlines various methods for determining margin requirements.\n\n* **Formula-Based Calculation**: The basic formula for calculating initial margin is: \\( IM = \\frac{Position Size}{Leverage} \\). For example, a $5,000 position at 5x leverage requires a $1,000 initial margin.\n* **Dynamic Margin Adjustments**: Some exchanges offer dynamic margin adjustments based on volatility. For instance, during high volatility, the required margin may increase to mitigate risk.\n* **Risk Assessment Models**: Implementing risk assessment models, such as Value at Risk (VaR), can help determine appropriate margin levels based on historical price movements and volatility metrics.",
    "context": {
      "keyTerms": [
        {
          "term": "Initial Margin",
          "definition": "The upfront capital required to open a trading position."
        },
        {
          "term": "Leverage",
          "definition": "The use of borrowed funds to increase potential returns, impacting margin requirements."
        }
      ],
      "whyThisMatters": "Mastering these calculation methods is crucial for maintaining positions and avoiding liquidation in volatile markets.",
      "realLifeExample": "A trader calculates their initial margin for a $10,000 Ethereum position at 20x leverage: \\( IM = \\frac{10,000}{20} = 500 \\). They must maintain at least this amount to avoid liquidation.",
      "commonMistake": "Neglecting to account for leverage changes can lead to underestimating required margin levels.",
      "quickNote": "Accurate margin calculations are vital for risk management in crypto trading.",
      "mentorText": "You need to be precise with your margin calculations. Think of it as ensuring you have enough fuel before takeoff; miscalculating can lead to disaster.",
      "mentorAnalogy": "Calculating perpetual margin is like an architect calculating load-bearing requirements; any miscalculation can lead to structural failure."
    },
    "taskData": null,
    "visualKey": "level-5-debrief-recap"
  },
  {
    "type": "concept",
    "title": "Understanding Liquidation Risks in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Liquidation Risks: Implications for Perpetual Contracts\nLiquidation risks are inherent in trading perpetual contracts and can significantly impact trading strategies. This card focuses on understanding these risks and their implications.\n\n* **Price Movement and Liquidation**: A position is at risk of liquidation when the market price moves against the trader's position beyond the maintenance margin threshold. For example, if a trader has a long position in Bitcoin, a sharp drop can trigger liquidation.\n* **Leverage Impact on Risk**: Higher leverage increases the likelihood of liquidation. For instance, a trader using 50x leverage on a $1,000 position faces liquidation if the price moves just 2% against them.\n* **Market Conditions**: Sudden market events, such as news releases or regulatory changes, can exacerbate liquidation risks, making it essential to monitor market conditions closely.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation",
          "definition": "The forced closure of a trading position when equity falls below the maintenance margin."
        },
        {
          "term": "Maintenance Margin Threshold",
          "definition": "The price level at which a trader's equity is insufficient to maintain an open position."
        }
      ],
      "whyThisMatters": "Understanding liquidation risks is crucial for developing robust trading strategies that can withstand market volatility.",
      "realLifeExample": "A trader holds a long position in Ethereum at $2,000 with 25x leverage. If Ethereum drops to $1,980, they risk liquidation due to insufficient equity.",
      "commonMistake": "Underestimating the impact of leverage on liquidation risk can lead to catastrophic losses.",
      "quickNote": "Liquidation risks are amplified by leverage and market volatility.",
      "mentorText": "You must be acutely aware of liquidation risks. Think of it as a ticking clock; if you don't act before it strikes, your position could vanish.",
      "mentorAnalogy": "Understanding liquidation risks is like a surgeon assessing the risks of a procedure; failure to recognize potential complications can lead to dire consequences."
    },
    "taskData": null,
    "visualKey": "level-5-debrief-recap"
  },
  {
    "type": "concept",
    "title": "Tools for Managing Liquidation Risks",
    "label": "Crypto Track",
    "body": "### Managing Liquidation Risks: Tools and Techniques\nEffective management of liquidation risks is essential for sustaining trading positions in the crypto market. This card explores various tools and techniques available for traders.\n\n* **Stop-Loss Orders**: Implementing stop-loss orders can automatically close positions at predetermined price levels, mitigating potential losses. For example, setting a stop-loss at 5% below the entry price can protect against adverse price movements.\n* **Position Sizing Strategies**: Adjusting position sizes based on risk tolerance and market conditions can help manage exposure. For instance, reducing position size during high volatility periods can lower the risk of liquidation.\n* **Risk Monitoring Tools**: Utilizing risk monitoring platforms that provide real-time analytics on margin levels and liquidation risks can enhance decision-making. Tools like Delta and Vega can help assess the risk profile of open positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price, limiting potential losses."
        },
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        }
      ],
      "whyThisMatters": "Utilizing these tools is vital for maintaining control over positions and minimizing liquidation risks in volatile markets.",
      "realLifeExample": "A trader sets a stop-loss order for their Bitcoin position at $30,000, ensuring automatic closure if the price falls below this level, thus managing liquidation risk effectively.",
      "commonMistake": "Failing to set stop-loss orders can lead to significant losses during rapid market declines.",
      "quickNote": "Effective tools for managing liquidation risks are essential for sustaining trading positions.",
      "mentorText": "You must employ every tool at your disposal to manage liquidation risks. Think of it as having a safety net; without it, a fall could be fatal.",
      "mentorAnalogy": "Managing liquidation risks is like a pilot using multiple instruments to navigate; relying on one tool alone can lead to disaster."
    },
    "taskData": null,
    "visualKey": "level-5-debrief-recap"
  },
  {
    "type": "concept",
    "title": "Impact of Market Conditions on Liquidation",
    "label": "Crypto Track",
    "body": "### Market Dynamics: Liquidation Risks in Crypto Trading\nMarket conditions significantly influence liquidation risks and margin requirements in cryptocurrency trading. Understanding these dynamics is essential for maintaining capital integrity.\n\n* **Volatility Assessment**: High volatility can lead to rapid price swings, increasing the likelihood of margin calls. For instance, during a market crash, Bitcoin may drop from $60,000 to $50,000 in a matter of hours, triggering liquidations for over-leveraged positions.\n* **Liquidity Conditions**: Low liquidity can exacerbate price movements, resulting in slippage and unexpected liquidations. For example, during off-peak hours, Ethereum may experience a 5% price drop with minimal trading volume, impacting margin requirements.\n* **Market Sentiment Analysis**: Negative sentiment can lead to panic selling, heightening liquidation risks. An example includes a major exchange hack announcement, causing a 10% drop in market capitalization and triggering liquidations across multiple platforms.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation",
          "definition": "The process of closing a trader's position due to insufficient margin."
        },
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for additional funds to cover potential losses."
        }
      ],
      "whyThisMatters": "Understanding how market conditions affect liquidation is vital for risk management and capital preservation in crypto trading.",
      "realLifeExample": "During the May 2021 crypto crash, Bitcoin fell from $58,000 to $30,000, resulting in over $10 billion in liquidations across exchanges.",
      "commonMistake": "Traders often underestimate the impact of market volatility on their margin levels, leading to unexpected liquidations.",
      "quickNote": "Market conditions can dramatically alter liquidation risks and margin requirements.",
      "mentorText": "When the market turns volatile, you must be vigilant. A sudden price drop can wipe out your position if you're not prepared. Always assess your margin levels against current market conditions.",
      "mentorAnalogy": "Think of your trading position like an aircraft in turbulent weather. Just as pilots must adjust their altitude and speed to maintain control, traders must adapt their margin strategies to changing market conditions."
    },
    "taskData": null,
    "visualKey": "level-5-debrief-recap"
  },
  {
    "type": "concept",
    "title": "Developing Liquidation Defense Strategies",
    "label": "Crypto Track",
    "body": "### Strategic Planning: Liquidation Defense in Crypto\nEffective liquidation defense strategies are crucial for mitigating margin call risks in volatile markets. This card outlines how to construct robust defenses against liquidation.\n\n* **Dynamic Margin Management**: Adjust your margin levels based on market volatility. For instance, if Bitcoin's volatility index spikes, consider reducing leverage from 10x to 5x to lower liquidation risk.\n* **Stop-Loss Implementation**: Use strategic stop-loss orders to limit potential losses. For example, placing a stop-loss 3% below your entry point on a long Ethereum position can prevent significant drawdowns during adverse market movements.\n* **Diversification of Positions**: Spread risk across multiple assets to reduce the impact of a single asset's volatility. For instance, holding a mix of Bitcoin, Ethereum, and Litecoin can cushion against sharp price drops in any one asset.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price."
        },
        {
          "term": "Leverage",
          "definition": "The use of borrowed funds to increase potential returns."
        }
      ],
      "whyThisMatters": "Implementing effective liquidation defense strategies can safeguard your capital and enhance long-term trading viability.",
      "realLifeExample": "In a market downturn, a trader using a 5% stop-loss on a $10,000 Bitcoin position would limit losses to $500, avoiding a full liquidation scenario.",
      "commonMistake": "Failing to adjust leverage in response to market volatility can lead to unnecessary liquidations.",
      "quickNote": "Developing robust liquidation defense strategies is essential for protecting your trading capital.",
      "mentorText": "Your defense against liquidation is like a fortress. You need to build it strong and adapt it to the threats around you. Always have a plan for when the market turns against you.",
      "mentorAnalogy": "Consider a surgeon preparing for an operation. Just as they have backup plans for complications, you must have strategies in place to defend against liquidation risks."
    },
    "taskData": null,
    "visualKey": "level-5-debrief-recap"
  },
  {
    "type": "practice",
    "title": "Crypto Trading Simulation",
    "label": "Crypto Track",
    "body": "### Simulation Exercise: Perpetual Margin and Liquidation Defense\nEngage in a simulation that tests your understanding of perpetual margin calculations and liquidation defense strategies. This exercise will reinforce your ability to navigate real-world trading scenarios.\n\n* **Scenario Setup**: You are given a $15,000 account with a 10x leverage on Bitcoin. The current price is $40,000. Calculate your margin requirement and determine your liquidation price under a 20% price drop.\n* **Defense Strategy Application**: Implement a stop-loss strategy based on your calculated liquidation price. Assess how adjusting your leverage impacts your risk exposure.\n* **Outcome Analysis**: After executing trades, analyze the results. Review how your margin management and stop-loss placements affected your overall trading performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Margin",
          "definition": "The margin required to maintain a perpetual futures position."
        },
        {
          "term": "Liquidation Price",
          "definition": "The price at which a position will be automatically closed due to insufficient margin."
        }
      ],
      "whyThisMatters": "This simulation reinforces practical skills in margin management and liquidation defense, critical for successful trading.",
      "realLifeExample": "In this simulation, if Bitcoin drops to $32,000, your position would be liquidated unless you adjusted your margin or stopped losses effectively.",
      "commonMistake": "Traders often miscalculate their liquidation price, leading to unexpected losses.",
      "quickNote": "Practical simulation enhances your understanding of margin and liquidation mechanics.",
      "mentorText": "This simulation is your training ground. Treat it like a live market, and make decisions as if real money is on the line. Your ability to adapt will define your success.",
      "mentorAnalogy": "Think of this simulation as a flight simulator for pilots. It prepares you for real-world conditions without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a $15,000 account with 10x leverage on Bitcoin at $40,000, what is your liquidation price if Bitcoin drops by 20%?",
      "options": [
        {
          "id": "0",
          "text": "$36,000",
          "isCorrect": false,
          "feedback": "This price does not account for the margin requirement and liquidation threshold."
        },
        {
          "id": "1",
          "text": "$32,000",
          "isCorrect": true,
          "feedback": "Correct. A 20% drop brings the price to $32,000, triggering liquidation."
        },
        {
          "id": "2",
          "text": "$28,000",
          "isCorrect": false,
          "feedback": "This price is too low and does not reflect the initial margin calculations."
        },
        {
          "id": "3",
          "text": "$34,000",
          "isCorrect": false,
          "feedback": "This price does not accurately represent the liquidation threshold based on your margin."
        }
      ]
    },
    "visualKey": "level-5-debrief-recap"
  },
  {
    "type": "summary",
    "title": "Summary of Perpetual Margin and Liquidation Concepts",
    "label": "Crypto Track",
    "body": "### Key Takeaways: Perpetual Margin and Liquidation\nThis summary consolidates critical concepts related to perpetual margin and liquidation risks, reinforcing your knowledge for the Drawdown Crucible exam.\n\n* **Margin Requirements**: Understand how margin requirements fluctuate based on market conditions and leverage levels. For example, a 10x leverage on a $40,000 Bitcoin position requires $4,000 in margin.\n* **Liquidation Triggers**: Recognize the factors that trigger liquidations, including price volatility and insufficient margin. A sudden 15% drop in Bitcoin could lead to automatic liquidations for over-leveraged accounts.\n* **Defense Mechanisms**: Implement strategies such as stop-loss orders and dynamic margin adjustments to protect against liquidation risks. A well-placed stop-loss can save your capital in volatile markets.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Margin Adjustment",
          "definition": "The process of modifying margin levels based on market conditions."
        },
        {
          "term": "Volatility Index",
          "definition": "A measure of market volatility that can influence margin requirements."
        }
      ],
      "whyThisMatters": "Reinforcing these concepts is essential for effective risk management and preparing for the Drawdown Crucible exam.",
      "realLifeExample": "Traders who understood these concepts during the March 2020 market crash were better positioned to avoid liquidations and protect their capital.",
      "commonMistake": "Failing to review and adjust margin levels in response to market volatility can lead to unexpected liquidations.",
      "quickNote": "Mastering perpetual margin and liquidation concepts is crucial for trading success.",
      "mentorText": "As you prepare for the exam, focus on these key concepts. They are the foundation of your trading strategy and will guide your decisions in the market.",
      "mentorAnalogy": "Consider this summary as your flight checklist before takeoff. Each item is crucial for ensuring a safe and successful trading journey."
    },
    "taskData": null,
    "visualKey": "level-5-debrief-recap"
  }
];
