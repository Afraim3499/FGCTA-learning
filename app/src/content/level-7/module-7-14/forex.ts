import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Forex Execution Errors",
    "label": "Forex Track",
    "body": "### Core Scenario: Identification of Execution Errors\nRecognizing execution errors is essential for maintaining trading discipline and performance. This card outlines the primary types of execution errors encountered in Forex trading.\n\n* **Types of Errors**: Common execution errors include slippage, incorrect order types, and latency issues. Each type can significantly impact trade outcomes and risk management.\n* **Impact Assessment**: Evaluate how each error affects your trading strategy, including potential financial losses and psychological stress. Understanding the implications is crucial for effective recovery.\n* **Error Classification**: Classify errors into categories such as technical, operational, and psychological. This classification aids in developing tailored recovery strategies for each type.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "Latency",
          "definition": "The delay between the initiation of a trade and its execution."
        }
      ],
      "whyThisMatters": "Identifying execution errors allows traders to implement corrective measures, enhancing overall trading performance.",
      "realLifeExample": "A trader places a buy order for EURUSD at 1.1000 but experiences slippage, resulting in execution at 1.1005, impacting the trade's profitability.",
      "commonMistake": "Failing to document execution errors leads to repeated mistakes and prevents learning from past experiences.",
      "quickNote": "Classifying execution errors is essential for targeted recovery strategies.",
      "mentorText": "When you encounter an execution error, assess it immediately. Document what happened, and categorize it to ensure you don’t repeat the same mistake.",
      "mentorAnalogy": "Think of execution errors like mechanical failures in an aircraft; identifying and categorizing them is crucial for ensuring safe and efficient operations."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "Wrong Lot Size Execution Errors",
    "label": "Forex Track",
    "body": "### Core Scenario: Managing Lot Size Errors\nEntering trades with incorrect lot sizes can lead to significant financial exposure and risk mismanagement. This card focuses on identifying and correcting these errors.\n\n* **Error Identification**: Verify the intended lot size before execution. A common error is miscalculating position size, which can lead to over-leveraging or under-leveraging trades.\n* **Recovery Techniques**: If an incorrect lot size is executed, assess the trade's risk immediately. Consider closing the position to mitigate potential losses or adjusting your stop-loss to manage risk effectively.\n* **Preventative Measures**: Implement a checklist to confirm lot sizes before placing trades. Use position sizing calculators to ensure accurate calculations based on account balance and risk tolerance.",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Size",
          "definition": "The number of units of a currency pair traded in a single transaction."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade."
        }
      ],
      "whyThisMatters": "Correct lot sizing is critical for effective risk management and maintaining account integrity.",
      "realLifeExample": "A trader intended to enter a 1.0 lot position on GBPUSD but mistakenly executed a 10.0 lot order, leading to a margin call when the market moved against them.",
      "commonMistake": "Many traders overlook the importance of double-checking lot sizes, leading to overexposure and increased risk.",
      "quickNote": "Always verify lot sizes before execution to avoid significant financial errors.",
      "mentorText": "If you realize you've executed the wrong lot size, don’t panic. Assess your risk and take corrective action immediately to protect your capital.",
      "mentorAnalogy": "Consider lot size errors like a chef miscalculating ingredients; the wrong proportions can ruin the entire dish, just like incorrect sizing can jeopardize your trading account."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "Missed Limit Orders in Forex",
    "label": "Forex Track",
    "body": "### Core Scenario: Addressing Missed Limit Orders\nMissed limit orders can disrupt trading plans and lead to missed opportunities. This card examines the causes and recovery strategies for such errors.\n\n* **Causes of Missed Orders**: Missed limit orders often result from market volatility, slippage, or technical issues. Understanding these causes helps in developing preventative strategies.\n* **Impact Analysis**: Evaluate the financial impact of missed orders on your trading strategy. Assess how these missed opportunities can affect overall performance and psychological state.\n* **Recovery Strategies**: If a limit order is missed, consider setting a new order at a revised price level or employing a market order if the conditions are favorable. Always reassess your trading plan based on the new market context.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a currency pair at a specified price or better."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Understanding missed limit orders helps traders adapt their strategies and minimize opportunity costs.",
      "realLifeExample": "A trader places a limit order to sell AUDUSD at 0.7400, but due to high volatility, the price jumps to 0.7410, resulting in a missed execution.",
      "commonMistake": "Traders often fail to account for market volatility when setting limit orders, leading to frequent missed opportunities.",
      "quickNote": "Analyze missed limit orders to refine your trading strategy and execution methods.",
      "mentorText": "When you miss a limit order, don’t dwell on it. Analyze what went wrong and adjust your strategy to capture the next opportunity.",
      "mentorAnalogy": "Missing a limit order is like a pilot missing a waypoint; it requires recalibration and adjustment to stay on course."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "Re-Entry Traps in Forex Trading",
    "label": "Forex Track",
    "body": "### Core Scenario: Navigating Re-Entry Traps\nRe-entry traps can lead to emotional trading decisions and increased risk exposure. This card focuses on recognizing and recovering from these traps.\n\n* **Identifying Traps**: Recognize the signs of a re-entry trap, such as impulsive decisions to re-enter a trade after a loss without proper analysis. This often stems from emotional responses rather than strategic planning.\n* **Psychological Impact**: Understand how re-entry traps can affect your trading psychology, leading to revenge trading and further losses. Maintaining discipline is crucial for recovery.\n* **Avoidance Strategies**: Develop a strict re-entry protocol that includes waiting for confirmation signals before re-entering a trade. Use a cooling-off period to reassess market conditions and your emotional state.",
    "context": {
      "keyTerms": [
        {
          "term": "Re-Entry Trap",
          "definition": "The tendency to re-enter a trade after a loss based on emotional impulses rather than strategy."
        },
        {
          "term": "Revenge Trading",
          "definition": "The act of trading impulsively to recover losses, often leading to further losses."
        }
      ],
      "whyThisMatters": "Avoiding re-entry traps is essential for maintaining a disciplined trading approach and protecting capital.",
      "realLifeExample": "After a loss on a EURJPY trade, a trader impulsively re-enters without analysis, resulting in another loss as the market continues to move against them.",
      "commonMistake": "Traders often re-enter positions too quickly after a loss, driven by emotions rather than a structured analysis.",
      "quickNote": "Implement a re-entry protocol to avoid emotional trading decisions.",
      "mentorText": "If you find yourself wanting to re-enter a trade after a loss, take a step back. Analyze the market conditions and give yourself time to regain composure.",
      "mentorAnalogy": "Re-entry traps are like a surgeon rushing back into surgery after a mistake; a clear mind and thorough analysis are essential for success."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "Understanding Slippage in Forex Execution",
    "label": "Forex Track",
    "body": "### Core Scenario: Slippage Dynamics in Forex\nSlippage occurs when the execution price of a trade differs from the expected price, often impacting profitability. This card examines **the mechanics of slippage and strategies to mitigate its effects**.\n\n* **Definition of Slippage**: Slippage can be either positive or negative, with the latter often leading to execution at a less favorable price. Understanding the market conditions that lead to slippage is essential for managing expectations.\n* **Market Conditions**: High volatility, such as during major news releases, increases the likelihood of slippage. Traders should monitor economic calendars and adjust their strategies accordingly.\n* **Mitigation Techniques**: Use limit orders instead of market orders to control entry prices. Additionally, consider trading during periods of higher liquidity to reduce the risk of slippage.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Understanding slippage is crucial for maintaining trade integrity and managing expectations during volatile market conditions.",
      "realLifeExample": "During the EURUSD news release on March 15, 2023, a trader placed a market order at 1.0850 but experienced slippage, executing at 1.0865 due to high volatility, resulting in a 15-pip loss.",
      "commonMistake": "Traders often neglect to account for slippage during high-impact news events, leading to unexpected losses.",
      "quickNote": "Slippage can significantly affect trade outcomes, especially during high volatility.",
      "mentorText": "When placing trades, always factor in the potential for slippage. If you're trading around news events, be prepared for prices to move quickly and adjust your orders accordingly.",
      "mentorAnalogy": "Think of slippage like a plane encountering turbulence during takeoff; just as pilots must adjust their approach, traders must adapt their strategies to manage unexpected price movements."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "Timing Errors in Forex Execution",
    "label": "Forex Track",
    "body": "### Core Scenario: The Critical Role of Timing\nTiming errors in Forex execution can lead to missed opportunities or increased losses. This card focuses on **the importance of precise timing in trade execution and its impact on profitability**.\n\n* **Execution Timing**: Entering or exiting a trade too late can result in unfavorable prices. Traders must be vigilant about market movements and execute trades promptly to capture desired price levels.\n* **Latency Issues**: Network latency can cause delays in order execution. Traders should utilize reliable trading platforms and consider proximity to servers to minimize latency.\n* **Session Awareness**: Understanding the characteristics of different trading sessions (e.g., London vs. New York) can help traders time their entries and exits more effectively, aligning with market activity peaks.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Timing Error",
          "definition": "A mistake made in executing a trade at the wrong moment, often leading to suboptimal trade outcomes."
        }
      ],
      "whyThisMatters": "Accurate timing is essential for maximizing trade effectiveness and minimizing losses in fast-moving markets.",
      "realLifeExample": "A trader attempted to exit a long position on GBPUSD at 1.3000 but delayed execution due to a momentary distraction, resulting in an exit at 1.2980, incurring a 20-pip loss.",
      "commonMistake": "Traders frequently underestimate the importance of timing, leading to missed entries or exits.",
      "quickNote": "Precision in timing can be the difference between profit and loss in Forex trading.",
      "mentorText": "Always be ready to execute your trades. If you hesitate, you risk losing your target price, which can significantly impact your overall performance.",
      "mentorAnalogy": "Consider timing in trading like a surgeon making incisions; precision and timing are critical to successful outcomes in both fields."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "practice",
    "title": "Broker-Related Execution Errors",
    "label": "Forex Track",
    "body": "### Core Scenario: Navigating Broker Execution Errors\nBroker-related execution errors can disrupt trading plans and lead to unexpected losses. This card investigates **common broker errors and effective recovery strategies**.\n\n* **Common Broker Errors**: Issues such as requotes, order rejections, or execution delays can occur due to broker limitations or market conditions. Awareness of these potential pitfalls is essential for a trader.\n* **Recovery Strategies**: Establish a clear communication channel with your broker for prompt resolution of issues. Document all execution discrepancies to support claims for compensation or adjustments.\n* **Broker Selection**: Choose brokers with a proven track record of reliability and transparency. Review user feedback and performance metrics to ensure they align with your trading needs.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Error",
          "definition": "A failure in the execution of a trade, often due to broker issues or market conditions."
        }
      ],
      "whyThisMatters": "Understanding broker-related errors is vital for maintaining control over your trading strategy and minimizing potential losses.",
      "realLifeExample": "A trader placed a market order on AUDUSD at 0.7400, but the broker's system rejected the order due to high volatility, resulting in a missed opportunity as the price moved to 0.7420.",
      "commonMistake": "Traders often fail to verify their broker's execution performance, leading to reliance on unreliable services.",
      "quickNote": "Broker execution errors can derail trading strategies; proactive management is essential.",
      "mentorText": "Always verify your broker's reliability. If you encounter execution issues, document everything and reach out to your broker immediately to resolve the situation.",
      "mentorAnalogy": "Think of your broker as a logistics provider; if they fail to deliver on time, it can disrupt your entire operation, just as a delayed shipment can affect a business."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A trader experiences a requote while trying to enter a position at 1.1500. What should be the trader's immediate action?",
      "options": [
        {
          "id": "0",
          "text": "Wait for the next price to be quoted and decide whether to accept it.",
          "isCorrect": true,
          "feedback": "Waiting for the next quote allows the trader to reassess the market conditions and make an informed decision."
        },
        {
          "id": "1",
          "text": "Immediately place a market order without considering the new quote.",
          "isCorrect": false,
          "feedback": "This approach can lead to entering at an unfavorable price, increasing risk."
        },
        {
          "id": "2",
          "text": "Cancel the trade and switch brokers.",
          "isCorrect": false,
          "feedback": "While switching brokers may be necessary, it is not an immediate solution to the current execution issue."
        },
        {
          "id": "3",
          "text": "Ignore the requote and assume the order was executed.",
          "isCorrect": false,
          "feedback": "Ignoring the requote can lead to significant misunderstandings about the trade's status."
        }
      ]
    },
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Execution Errors & Recovery",
    "label": "Forex Track",
    "body": "### Core Scenario: Recap of Execution Errors\nThis summary consolidates the key Forex execution errors discussed, emphasizing recovery strategies and best practices. Understanding these errors is essential for maintaining trading discipline.\n\n* **Execution Error Types**: Key errors include slippage, timing errors, and broker-related issues. Each type requires specific strategies for effective management and recovery.\n* **Recovery Strategies**: Documenting errors, maintaining communication with brokers, and employing risk management techniques are crucial for recovery. Traders should have a clear plan for addressing each type of error.\n* **Best Practices**: Regularly review execution performance, select reliable brokers, and stay informed about market conditions to minimize the impact of execution errors.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Best Practices",
          "definition": "Recommended strategies for minimizing execution errors and ensuring effective recovery."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of execution errors and recovery strategies enhances a trader's ability to navigate challenges in live trading environments.",
      "realLifeExample": "After experiencing multiple slippage events during volatile market conditions, a trader implemented a stricter risk management plan and switched to a broker with better execution metrics, resulting in improved performance.",
      "commonMistake": "Traders often overlook the importance of reviewing past execution errors, missing opportunities for improvement.",
      "quickNote": "Consolidating knowledge of execution errors is vital for maintaining trading discipline and performance.",
      "mentorText": "Reflect on your trading experiences. Identify the errors you've encountered and develop a structured recovery plan to address them moving forward.",
      "mentorAnalogy": "Just as a pilot reviews flight logs to improve future performance, traders must analyze their execution errors to refine their strategies and enhance overall effectiveness."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  }
];
