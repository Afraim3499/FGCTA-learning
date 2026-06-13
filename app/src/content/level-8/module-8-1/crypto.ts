import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Recency Bias in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.1-crypto-C1 -->\n### Core Scenario: Impact of Recency Bias on Liquidation Events\nRecency bias can lead traders to overemphasize recent liquidation events, distorting their perception of risk and opportunity. This card outlines **how to identify and mitigate the effects of recency bias in volatile crypto markets**.\n\n* **Recent Event Weighting**: Acknowledge that recent liquidation events, such as Bitcoin dropping from $45,000 to $30,000, can skew risk assessment. Avoid allowing these events to dictate future trade decisions.\n* **Statistical Reset Protocol**: After a significant liquidation event, enforce a mandatory review of historical data to recalibrate your risk parameters. For instance, analyze the last 10 liquidation events to determine average price recoveries.\n* **Emotional Detachment Strategy**: Implement a structured decision-making process that prioritizes data over emotional responses. For example, if Ethereum experiences a sharp drop, assess the fundamentals rather than reacting impulsively.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Recency Bias",
          "definition": "The tendency to give undue weight to recent events over historical data."
        }
      ],
      "whyThisMatters": "Understanding recency bias is critical for maintaining objective decision-making in the face of high volatility in crypto markets.",
      "realLifeExample": "During the May 2021 crypto crash, many traders liquidated positions based on the fear of further losses, leading to a cascade effect that further depressed prices.",
      "commonMistake": "Traders often react to recent losses by altering their risk parameters without proper analysis.",
      "quickNote": "Recent liquidation events should not dictate future trading strategies.",
      "mentorText": "When you see a major liquidation, don't let it cloud your judgment. Review your data and stick to your plan.",
      "mentorAnalogy": "Think of a pilot who must rely on instruments rather than recent turbulence; the flight path is determined by data, not by the last bumpy landing."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Understanding Liquidation Cascades",
    "label": "Crypto Track",
    "body": "<!-- M8.1-crypto-C2 -->\n### Core Scenario: Mechanics of Liquidation Cascades\nLiquidation cascades occur when a series of forced sell-offs amplify market volatility, often triggered by emotional trading responses. This card explains **how to recognize and navigate liquidation cascades effectively**.\n\n* **Cascading Liquidation Triggers**: Identify key price levels where liquidations are likely to occur, such as when Bitcoin approaches critical support at $30,000. Understand that a breach can lead to a rapid series of forced sales.\n* **Emotional Response Analysis**: Monitor your emotional state during a cascade. Recognize that fear can lead to impulsive decisions, such as selling at a loss rather than waiting for a market recovery.\n* **Risk Management Protocol**: Establish a risk management plan that includes stop-loss orders set above critical liquidation thresholds. For example, placing a stop-loss for Ethereum at $1,800 can help mitigate losses during a market downturn.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Cascade",
          "definition": "A sequence of forced sell-offs triggered by price drops, leading to further market declines."
        }
      ],
      "whyThisMatters": "Understanding liquidation cascades enables traders to anticipate market movements and make informed decisions rather than emotional ones.",
      "realLifeExample": "In March 2020, Bitcoin saw a liquidation cascade when prices fell below $5,000, triggering massive sell-offs across exchanges.",
      "commonMistake": "Failing to recognize the signs of an impending liquidation cascade can lead to significant losses.",
      "quickNote": "Recognize and prepare for liquidation cascades to avoid emotional trading traps.",
      "mentorText": "Stay calm during a cascade; understand the mechanics at play and stick to your strategy rather than reacting impulsively.",
      "mentorAnalogy": "Imagine a surgeon who must remain composed during a critical operation; emotional reactions can lead to mistakes that jeopardize outcomes."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Resisting Revenge Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.1-crypto-C3 -->\n### Core Scenario: Strategies to Resist Revenge Trading\nRevenge trading occurs when traders impulsively attempt to recover losses, often leading to further losses. This card outlines **strategies to maintain a disciplined, probability-based approach after a loss**.\n\n* **Loss Reflection Protocol**: After a loss, take a structured break to analyze what went wrong. For instance, if you lost on a Bitcoin trade due to a sudden market drop, assess your entry and exit strategy before re-entering.\n* **Probability Reinforcement**: Revisit your trading plan and remind yourself of the statistical probabilities that govern your strategy. For example, if your strategy has a 60% win rate, understand that losses are part of the process.\n* **Trade Journal Utilization**: Maintain a detailed trade journal to document emotions and decisions post-loss. This can help identify patterns of revenge trading and reinforce disciplined behavior over time.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Revenge Trading",
          "definition": "The act of trading impulsively to recover losses from previous trades."
        }
      ],
      "whyThisMatters": "Resisting the urge to engage in revenge trading is essential for maintaining a long-term, disciplined trading strategy.",
      "realLifeExample": "After losing $2,000 on a failed Ethereum trade, a trader impulsively entered a new position without analysis, resulting in further losses.",
      "commonMistake": "Traders often chase losses without a clear strategy, leading to a cycle of emotional trading.",
      "quickNote": "Structured reflection after losses can prevent impulsive revenge trading.",
      "mentorText": "After a loss, take a step back. Analyze your decisions instead of jumping back in to recover quickly.",
      "mentorAnalogy": "Think of a firefighter who must assess the situation before re-entering a burning building; rushing back in can lead to greater danger."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Applying Probability in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.1-crypto-C4 -->\n### Core Scenario: Probability Theory in Crypto Trading\nApplying probability theory helps traders detach their decisions from past outcomes, fostering a more objective trading approach. This card discusses **how to incorporate probability into your trading strategy**.\n\n* **Event Probability Assessment**: Calculate the probability of various market scenarios based on historical data. For example, if Bitcoin has historically bounced back from $30,000 70% of the time, use this data to inform your trading decisions.\n* **Risk-Reward Ratio Calculation**: Establish a clear risk-reward ratio for each trade. If entering a trade at $32,000 with a target of $35,000 and a stop-loss at $31,000, ensure the potential reward justifies the risk.\n* **Decision Matrix Implementation**: Create a decision matrix that incorporates probability assessments for different scenarios. For instance, if the probability of a price drop is 40%, adjust your position size accordingly to manage risk effectively.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Probability Theory",
          "definition": "A mathematical framework for quantifying the likelihood of different outcomes."
        }
      ],
      "whyThisMatters": "Incorporating probability into trading decisions helps mitigate emotional responses and enhances strategic planning.",
      "realLifeExample": "A trader analyzing Bitcoin's historical price movements determines a 65% chance of recovery after a pullback to $28,000, leading to a calculated entry point.",
      "commonMistake": "Traders often neglect to apply probability assessments, relying solely on recent outcomes instead.",
      "quickNote": "Probability assessments should guide trading decisions, not past trade outcomes.",
      "mentorText": "Use probability to guide your trades. Don't let past losses dictate your next move; rely on data instead.",
      "mentorAnalogy": "Consider an architect who designs buildings based on structural probabilities; they don't let previous failures dictate future designs."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Practicing Emotional Detachment in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M8.1-crypto-C5 -->\n### Core Scenario: Emotional Detachment Techniques\nEmotional responses can cloud judgment in crypto trading, leading to suboptimal decisions. This card outlines **strategies to cultivate emotional detachment during trading sessions**.\n\n* **Pre-Trade Mental Conditioning**: Establish a routine before each trading session that includes visualization techniques to reinforce a logical mindset. For instance, visualize executing trades based solely on your trading plan, devoid of emotional influence.\n* **Trade Journaling**: Maintain a detailed journal of each trade, documenting not only the rationale but also emotional states during execution. Review this journal weekly to identify patterns of emotional influence on decision-making.\n* **Mindfulness Practices**: Incorporate mindfulness exercises, such as focused breathing or meditation, prior to trading. These practices can help center your thoughts and reduce impulsive reactions to market movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Detachment",
          "definition": "The ability to separate emotional responses from trading decisions."
        }
      ],
      "whyThisMatters": "Emotional detachment is essential for maintaining objectivity, allowing traders to adhere strictly to their strategies regardless of recent outcomes.",
      "realLifeExample": "During a volatile session, a trader executing a long position on BTC at $45,000 after a series of losses refrains from altering their strategy based on previous trades, sticking to their pre-defined risk management rules.",
      "commonMistake": "Traders often let recent losses dictate their next trade size or direction, leading to revenge trading or over-leveraging.",
      "quickNote": "Emotional detachment is critical for objective trading decisions.",
      "mentorText": "Focus on your process, not the outcome. Each trade is a separate event; treat it as such. If you lose, it doesn't mean the next one will be a loss.",
      "mentorAnalogy": "Think of a surgeon preparing for an operation. They must detach from previous surgeries' outcomes to focus solely on the current patient, ensuring precision and adherence to protocol."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Evaluating Crypto Trades Objectively",
    "label": "Crypto Track",
    "body": "<!-- M8.1-crypto-C6 -->\n### Core Scenario: Systematic Trade Evaluation\nEvaluating trades through an objective lens is crucial for effective decision-making in crypto markets. This card presents **a framework for assessing trades without recency bias**.\n\n* **Criteria-Based Assessment**: Develop a checklist of criteria for trade evaluation, including entry and exit signals, risk-reward ratios, and market conditions. For example, assess whether ETH was above its 50-day moving average before entering a long position.\n* **Statistical Backtesting**: Utilize historical data to backtest your trading strategies against various market conditions. This allows you to see the effectiveness of your approach without the influence of recent performance.\n* **Peer Review Sessions**: Engage in regular discussions with fellow traders to review each other's trades. This external perspective can highlight biases and reinforce objective evaluation methods.",
    "context": {
      "keyTerms": [
        {
          "term": "Objective Evaluation",
          "definition": "Assessing trades based on predefined criteria rather than emotional responses."
        }
      ],
      "whyThisMatters": "Objective evaluation helps traders maintain consistency in their approach, reducing the likelihood of emotional decision-making based on recent outcomes.",
      "realLifeExample": "A trader analyzes a recent trade on LTC, confirming that their entry at $150 aligned with their checklist criteria, despite the subsequent price drop, ensuring they remain committed to their strategy.",
      "commonMistake": "Traders often overlook systematic criteria, allowing recent losses to skew their assessment of future trades.",
      "quickNote": "Objective evaluation is essential for maintaining a disciplined trading approach.",
      "mentorText": "Stick to your criteria. If you followed your plan and it didn't work out, that doesn't mean the plan is flawed; it means you need to keep refining it.",
      "mentorAnalogy": "Like an architect reviewing blueprints, you must evaluate your trades against a standard design, ensuring each decision aligns with your overall strategy."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "practice",
    "title": "Simulating Crypto Trading Decisions",
    "label": "Crypto Track",
    "body": "<!-- M8.1-crypto-C7 -->\n### Core Scenario: Trade Decision Simulations\nSimulating trading scenarios can help reinforce emotional detachment and decision-making skills. This card outlines **how to engage in simulations that focus on logical execution**.\n\n* **Scenario-Based Simulations**: Create hypothetical trading scenarios based on historical price movements of cryptocurrencies. For instance, simulate a trading session where BTC fluctuates between $40,000 and $42,000, and practice executing trades based solely on your strategy.\n* **Time-Limited Decisions**: Set a timer for each simulated trade decision to mimic real market pressure. This helps develop the ability to make quick, logical decisions without being swayed by recent outcomes.\n* **Post-Simulation Review**: After each simulation, conduct a thorough review of your decisions, focusing on adherence to your trading plan rather than the outcomes. Analyze what worked and what didn't without emotional bias.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Simulation",
          "definition": "Practicing trading decisions in a controlled environment without real financial risk."
        }
      ],
      "whyThisMatters": "Simulations provide a risk-free environment to practice decision-making, reinforcing the ability to detach from emotional influences during actual trading.",
      "realLifeExample": "A trader simulates a trading session where they buy XRP at $1.00 during a price dip and sell at $1.05, focusing on their strategy rather than the emotional aftermath of previous trades.",
      "commonMistake": "Traders often treat simulations as less serious, failing to apply the same discipline as they would in real trading scenarios.",
      "quickNote": "Simulations are a powerful tool for practicing emotional detachment in trading.",
      "mentorText": "Treat every simulation like a live trade. The more seriously you take it, the better prepared you'll be when real money is on the line.",
      "mentorAnalogy": "Consider a pilot in a flight simulator; they practice emergency scenarios to ensure they can respond calmly and effectively when faced with real-life challenges."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are simulating a trading session for ETH, and the price fluctuates between $2,000 and $2,050. You have a long position at $2,020. What is your best course of action?",
      "options": [
        {
          "id": "0",
          "text": "Hold your position and wait for a breakout above $2,050.",
          "isCorrect": true,
          "feedback": "Holding your position aligns with your strategy, allowing you to benefit from potential upward movement."
        },
        {
          "id": "1",
          "text": "Sell immediately to avoid further losses.",
          "isCorrect": false,
          "feedback": "Selling based on fear of loss does not adhere to your trading plan and can lead to emotional decision-making."
        },
        {
          "id": "2",
          "text": "Increase your position size to average down.",
          "isCorrect": false,
          "feedback": "Increasing position size based on emotional response can lead to over-leveraging and increased risk."
        },
        {
          "id": "3",
          "text": "Set a stop-loss at $1,980 and wait.",
          "isCorrect": false,
          "feedback": "While setting a stop-loss is prudent, the decision to sell should be based on your strategy, not fear of loss."
        }
      ]
    },
    "visualKey": "recency-bias-model"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Recency Bias Strategies",
    "label": "Crypto Track",
    "body": "<!-- M8.1-crypto-C8 -->\n### Core Scenario: Recency Bias Mitigation Strategies\nCombatting recency bias is essential for maintaining a disciplined trading approach in the crypto market. This card summarizes **strategies to reinforce probability-based decision-making**.\n\n* **Consistent Trade Evaluation**: Regularly review trades against a set of objective criteria to ensure decisions are based on logic rather than emotional responses. For example, always evaluate trades based on risk-reward ratios and market conditions.\n* **Emotional Detachment Practices**: Implement techniques such as mindfulness and journaling to cultivate emotional detachment. These practices help reinforce a logical mindset, especially after a series of wins or losses.\n* **Simulation Training**: Engage in regular trading simulations to practice decision-making under pressure. This helps develop the ability to execute trades based on strategy rather than emotional influences from previous outcomes.",
    "context": {
      "keyTerms": [
        {
          "term": "Recency Bias",
          "definition": "The tendency to let recent outcomes influence future trading decisions."
        }
      ],
      "whyThisMatters": "Understanding and mitigating recency bias is vital for professional traders to maintain objectivity and consistency in their trading strategies.",
      "realLifeExample": "A trader reflects on their recent performance, identifying that they allowed a string of losses to influence their next trade decision, prompting a review of their evaluation criteria.",
      "commonMistake": "Failing to recognize the impact of recency bias can lead to inconsistent trading results and emotional decision-making.",
      "quickNote": "Mitigating recency bias is critical for maintaining a disciplined trading strategy.",
      "mentorText": "Stay focused on your process. Review your trades regularly and ensure you're making decisions based on your strategy, not recent outcomes.",
      "mentorAnalogy": "Like a seasoned chef who relies on a recipe rather than the last dish's outcome, you must adhere to your trading plan regardless of recent performance."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  }
];
