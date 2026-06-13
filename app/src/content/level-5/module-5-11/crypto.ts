import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Winding Down Perpetual Positions",
    "label": "Crypto Track",
    "body": "### Winding Down: Closing Perpetual Positions\nWhen weekly loss limits are reached, it is imperative to methodically wind down all perpetual positions to mitigate further losses. This card outlines **the critical steps to effectively close positions**.\n\n* **Immediate Assessment**: Review all open perpetual positions and calculate the total unrealized losses. Ensure that the cumulative losses exceed the predefined weekly limit before proceeding.\n* **Order Execution**: Initiate market orders to close positions, prioritizing those with the highest unrealized losses to minimize further exposure. Confirm that all positions are closed before resuming trading activities.\n* **Documentation**: Maintain a detailed record of the positions closed, including timestamps, prices, and reasons for closure. This documentation is essential for future audits and psychological assessments.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Positions",
          "definition": "Positions that do not have an expiration date, allowing for continuous holding."
        }
      ],
      "whyThisMatters": "Winding down positions prevents further capital erosion and allows for a systematic review of trading strategies.",
      "realLifeExample": "After hitting a $5,000 weekly loss limit, a trader closes all perpetual BTC positions at $30,000, realizing a total loss of $5,200.",
      "commonMistake": "Traders often delay closing positions, hoping for a reversal, which can exacerbate losses.",
      "quickNote": "Close all perpetual positions immediately upon reaching the loss limit.",
      "mentorText": "When you hit your loss limit, don’t hesitate. Close those positions swiftly and decisively to protect your capital.",
      "mentorAnalogy": "Think of this process like a pilot executing an emergency landing checklist; every step must be followed precisely to ensure safety."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Auditing Leverage Settings",
    "label": "Crypto Track",
    "body": "### Leverage Audit: Post-Loss Cap Review\nAfter breaching a weekly loss cap, it is essential to audit leverage settings to ensure they align with risk management protocols. This card focuses on **how to conduct a thorough leverage audit**.\n\n* **Current Leverage Assessment**: Review the leverage ratios used across all positions. Ensure that the leverage does not exceed the risk tolerance levels established in your trading plan.\n* **Adjustment Recommendations**: If leverage settings are found to be excessive, adjust them to more conservative levels. For example, reduce from 10x to 5x leverage to minimize risk exposure.\n* **Documentation of Changes**: Record any changes made to leverage settings, including the rationale behind the adjustments. This documentation is vital for ongoing risk management and accountability.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed funds to increase the potential return of an investment."
        }
      ],
      "whyThisMatters": "Auditing leverage settings post-loss cap breach ensures that risk management practices are adhered to, preventing future losses.",
      "realLifeExample": "Following a $3,000 loss, a trader reviews their ETH positions and reduces leverage from 8x to 4x, aligning with their risk management strategy.",
      "commonMistake": "Traders often neglect to adjust leverage settings after losses, continuing to operate under high-risk conditions.",
      "quickNote": "Always audit and adjust leverage settings after a loss cap breach.",
      "mentorText": "You must reassess your leverage after a loss. If it’s too high, dial it back to protect your capital.",
      "mentorAnalogy": "Consider this like a structural engineer inspecting a bridge after a storm; adjustments must be made to ensure safety and stability."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Evaluating Margin Calls",
    "label": "Crypto Track",
    "body": "### Margin Call Evaluation: Responding to Risk\nUnderstanding how to evaluate margin calls in the context of loss limits is critical for effective risk management. This card details **the evaluation process for margin calls**.\n\n* **Margin Call Trigger**: Identify the conditions that trigger a margin call, such as falling asset values or increased volatility. Ensure that you are aware of your broker's margin requirements.\n* **Response Strategy**: Develop a response strategy for margin calls, including options such as adding funds to your account or closing positions to meet margin requirements. For instance, if your BTC position triggers a margin call at $28,000, consider liquidating a portion to maintain compliance.\n* **Risk Assessment**: Post-margin call, conduct a risk assessment to evaluate the impact on your overall portfolio. Adjust your trading strategy accordingly to prevent future margin calls.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for additional funds to cover potential losses."
        }
      ],
      "whyThisMatters": "Effectively managing margin calls protects your capital and ensures compliance with trading requirements.",
      "realLifeExample": "A trader receives a margin call when their ETH position drops to $1,800, requiring an additional $1,000 to maintain the position.",
      "commonMistake": "Failing to respond promptly to margin calls can lead to forced liquidation of positions at unfavorable prices.",
      "quickNote": "Evaluate and respond to margin calls immediately to safeguard your trading account.",
      "mentorText": "When you get a margin call, act fast. Assess your options and respond to avoid forced liquidations.",
      "mentorAnalogy": "Think of this like a doctor responding to a critical patient condition; timely intervention is crucial to prevent deterioration."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Psychological Impacts of Crypto Trading",
    "label": "Crypto Track",
    "body": "### Psychological Management: Trading Under Stress\nThe psychological impacts of trading cryptocurrencies can be profound, especially when faced with loss limits. This card discusses **strategies to maintain mental clarity during trading stress**.\n\n* **Emotional Awareness**: Recognize the emotional responses that arise from hitting loss limits, such as frustration or anxiety. Acknowledge these feelings without letting them dictate your trading decisions.\n* **Structured Breaks**: Implement structured breaks after reaching loss limits to allow for mental recovery. For example, take a 30-minute break to clear your mind before reassessing your trading strategy.\n* **Mindfulness Techniques**: Utilize mindfulness techniques, such as deep breathing or visualization, to maintain focus and clarity. These techniques can help mitigate the emotional toll of trading losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Psychological Management",
          "definition": "Techniques used to maintain mental clarity and emotional stability during trading."
        }
      ],
      "whyThisMatters": "Managing psychological impacts is essential for maintaining discipline and making rational trading decisions.",
      "realLifeExample": "After hitting a loss limit, a trader takes a 30-minute break, practices deep breathing, and returns with a clearer mindset to reassess their strategy.",
      "commonMistake": "Traders often ignore their emotional state, leading to impulsive decisions that can exacerbate losses.",
      "quickNote": "Prioritize mental clarity and emotional management after hitting loss limits.",
      "mentorText": "After a loss, take a step back. Clear your mind and don’t rush back into trading until you’re ready.",
      "mentorAnalogy": "This is akin to a surgeon taking a moment to regroup before proceeding with a critical operation; mental clarity is vital for success."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Revising Crypto Trading Strategies",
    "label": "Crypto Track",
    "body": "### Strategy Revision: Insights from Winding Down Positions\nRevising trading strategies is essential after implementing a weekly loss limit. This card teaches **how to adjust your crypto trading strategies based on insights gained from winding down positions**.\n\n* **Position Analysis**: After a loss limit is hit, analyze each position's performance, focusing on entry and exit points, to identify patterns that led to losses.\n* **Leverage Settings Review**: Audit leverage settings used during the trading week; consider reducing leverage on future trades if high leverage contributed to volatility in results.\n* **Strategy Adjustment**: Implement changes based on findings, such as altering entry criteria or adjusting stop-loss levels to better align with market conditions and personal risk tolerance.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Analysis",
          "definition": "The process of reviewing past trades to identify successful and unsuccessful strategies."
        },
        {
          "term": "Leverage Settings",
          "definition": "The amount of borrowed funds used to increase potential returns on investment."
        },
        {
          "term": "Strategy Adjustment",
          "definition": "Modifying trading strategies based on performance analysis."
        }
      ],
      "whyThisMatters": "Revising strategies based on empirical data enhances decision-making and reduces future risk exposure.",
      "realLifeExample": "After hitting a 10% weekly loss limit on BTC, a trader reviews their last five trades, noting that three were executed with 10x leverage during high volatility, leading to significant losses.",
      "commonMistake": "Traders often fail to adjust their strategies after a loss, repeating the same mistakes without learning from past performance.",
      "quickNote": "Winding down positions provides critical insights for strategy revision.",
      "mentorText": "When you hit your loss limit, take a step back. Look at what worked and what didn’t. Adjust your strategy based on those insights to avoid repeating mistakes.",
      "mentorAnalogy": "Think of it like a pilot reviewing flight data after a turbulent landing; they analyze what went wrong to ensure a smoother flight next time."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "concept",
    "title": "Behavioral Triggers in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Identifying Behavioral Triggers for Loss Limit Breaches\nUnderstanding behavioral triggers is crucial for maintaining discipline in trading. This card teaches **how to identify and counteract behavioral triggers that lead to loss limit breaches**.\n\n* **Emotional Awareness**: Recognize emotions such as fear and greed that can lead to impulsive trading decisions, especially after a series of losses.\n* **Predefined Rules**: Establish strict rules for trading behavior, such as not increasing position sizes after losses, to mitigate emotional responses.\n* **Accountability Mechanisms**: Implement accountability measures, such as sharing trading plans with a peer or mentor, to reinforce disciplined trading practices.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Awareness",
          "definition": "The ability to recognize and understand one's emotional responses in trading."
        },
        {
          "term": "Predefined Rules",
          "definition": "Set guidelines that dictate trading behavior to prevent emotional decision-making."
        },
        {
          "term": "Accountability Mechanisms",
          "definition": "Systems put in place to ensure traders adhere to their trading plans."
        }
      ],
      "whyThisMatters": "Addressing behavioral triggers can prevent emotional trading, reducing the likelihood of breaching loss limits.",
      "realLifeExample": "A trader, after experiencing a 15% loss, feels compelled to double their position on a rebound, violating their loss limit and compounding losses.",
      "commonMistake": "Traders often ignore emotional signals and make impulsive decisions that lead to further losses.",
      "quickNote": "Identifying emotional triggers is essential for maintaining discipline in trading.",
      "mentorText": "Stay aware of your emotions. If you feel the urge to chase losses, step back and stick to your rules. Discipline is your best ally.",
      "mentorAnalogy": "Like a surgeon who must remain calm during a crisis, a trader must manage their emotions to avoid making detrimental decisions."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "practice",
    "title": "Simulating Crypto Position Winding Down",
    "label": "Crypto Track",
    "body": "### Practical Simulation: Winding Down Crypto Positions\nEngaging in simulations of winding down positions allows traders to practice implementing loss limits effectively. This card focuses on **practical exercises for winding down crypto positions**.\n\n* **Scenario Setup**: Create a simulated trading week where a loss limit is reached, requiring the winding down of positions. Choose specific cryptocurrencies and set parameters for the simulation.\n* **Execution of Winding Down**: Practice executing the winding down process, including closing positions and adjusting leverage settings based on the simulated market conditions.\n* **Post-Simulation Review**: After completing the simulation, review the decisions made during the winding down process to identify strengths and areas for improvement.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Setup",
          "definition": "Creating a hypothetical trading environment for practice."
        },
        {
          "term": "Execution of Winding Down",
          "definition": "The process of systematically closing positions to adhere to loss limits."
        },
        {
          "term": "Post-Simulation Review",
          "definition": "Analyzing actions taken during a simulation to improve future performance."
        }
      ],
      "whyThisMatters": "Simulations provide hands-on experience, reinforcing the mechanics of winding down positions under pressure.",
      "realLifeExample": "In a simulated environment, a trader practices winding down a 5-position portfolio of ETH, LTC, and XRP after hitting a 12% loss limit, assessing the impact of leverage adjustments.",
      "commonMistake": "Traders may rush through the simulation without fully engaging in the winding down process, missing critical learning opportunities.",
      "quickNote": "Simulations enhance practical understanding of loss limit enforcement.",
      "mentorText": "Take your time during the simulation. Treat it like a real scenario. The more you practice, the better prepared you’ll be when it counts.",
      "mentorAnalogy": "Just as a firefighter practices controlled burns to understand fire behavior, a trader must simulate winding down to master risk management."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated trading week, you hit a 10% loss limit. What is your first step in winding down positions?",
      "options": [
        {
          "id": "0",
          "text": "Immediately close all positions without analysis.",
          "isCorrect": false,
          "feedback": "Rushing to close positions without analysis can lead to further losses. A systematic approach is required."
        },
        {
          "id": "1",
          "text": "Review each position's performance and adjust leverage settings.",
          "isCorrect": true,
          "feedback": "Reviewing performance allows for informed decisions on which positions to close and how to adjust leverage."
        },
        {
          "id": "2",
          "text": "Increase position sizes to recover losses quickly.",
          "isCorrect": false,
          "feedback": "Increasing position sizes can exacerbate losses and violate risk management principles."
        },
        {
          "id": "3",
          "text": "Ignore the loss limit and continue trading as usual.",
          "isCorrect": false,
          "feedback": "Ignoring the loss limit undermines the purpose of risk management and can lead to severe drawdowns."
        }
      ]
    },
    "visualKey": "weekly-circuit-breaker"
  },
  {
    "type": "summary",
    "title": "Crypto Weekly Loss Limit Enforcement Summary",
    "label": "Crypto Track",
    "body": "### Key Strategies for Enforcing Weekly Loss Limits\nEnforcing weekly loss limits is vital for maintaining trading discipline and psychological balance. This card summarizes **the key strategies for implementing loss limits in crypto trading**.\n\n* **Regular Audits**: Conduct weekly audits of trading performance and leverage settings to ensure adherence to risk management protocols.\n* **Behavioral Management**: Develop strategies to counteract emotional triggers that may lead to loss limit breaches, reinforcing disciplined trading practices.\n* **Continuous Learning**: Use insights gained from winding down positions to refine trading strategies and improve decision-making processes moving forward.",
    "context": {
      "keyTerms": [
        {
          "term": "Regular Audits",
          "definition": "Systematic reviews of trading performance to ensure compliance with risk management."
        },
        {
          "term": "Behavioral Management",
          "definition": "Strategies designed to mitigate emotional influences on trading decisions."
        },
        {
          "term": "Continuous Learning",
          "definition": "The ongoing process of refining strategies based on past performance and insights."
        }
      ],
      "whyThisMatters": "Implementing these strategies ensures that traders maintain control over their trading activities and psychological state.",
      "realLifeExample": "A trader implements a weekly audit after hitting a loss limit, identifying that emotional trading led to poor decision-making and adjusting their strategy accordingly.",
      "commonMistake": "Traders often neglect to conduct regular audits, leading to repeated mistakes and emotional trading patterns.",
      "quickNote": "Regular audits and behavioral management are essential for enforcing loss limits.",
      "mentorText": "Stay disciplined. Regularly audit your trades and adjust your strategies based on what you learn. This is how you grow as a trader.",
      "mentorAnalogy": "Like a coach reviewing game footage to improve team performance, traders must analyze their trades to enhance their strategies."
    },
    "taskData": null,
    "visualKey": "weekly-circuit-breaker"
  }
];
