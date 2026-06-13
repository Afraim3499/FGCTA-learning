import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Execution Errors Overview",
    "label": "Crypto Track",
    "body": "### Core Scenario: Understanding Execution Errors\nExecution errors in cryptocurrency trading can significantly impact performance and profitability. This card outlines the seven primary execution errors encountered in the crypto market and sets the stage for recovery strategies.\n\n* **Classification of Errors**: The seven common execution errors include leverage miscalculation, wick stops, funding blind spots, slippage, order mismatches, liquidity issues, and platform outages. Each error has unique characteristics and implications for trading outcomes.\n* **Error Impact Assessment**: Evaluate how each error can affect trade execution and overall portfolio performance. Understanding the severity of these errors is crucial for developing effective recovery strategies.\n* **Recovery Framework**: Establish a systematic approach to identify, classify, and recover from execution errors. This framework will guide traders in minimizing losses and enhancing decision-making processes.",
    "visualKey": "execution-error-recovery",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Leverage Miscalculation in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Scenario: Managing Leverage Risks\nLeverage miscalculation can lead to substantial losses in crypto trading due to the volatile nature of the market. This card focuses on identifying risks and implementing recovery strategies to mitigate the impact of leverage errors.\n\n* **Risk Identification**: Assess the potential for over-leveraging by calculating the required margin based on current market volatility. For instance, using 10x leverage on Bitcoin at $30,000 can expose a trader to significant risk if the price moves against them.\n* **Recovery Strategies**: Implement a stop-loss strategy that automatically closes positions when losses reach a predetermined threshold. For example, if a position incurs a 5% loss, the stop-loss should trigger to prevent further financial damage.\n* **Position Sizing**: Use proper position sizing techniques to limit exposure. Calculate position size based on account equity and risk tolerance, ensuring that no single trade exceeds 2% of total capital.",
    "visualKey": "execution-error-recovery",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Wick Stops in Cryptocurrency Execution",
    "label": "Crypto Track",
    "body": "### Core Scenario: Understanding Wick Stops\nWick stops occur when price spikes momentarily beyond a trader's stop-loss level, triggering an unintended exit from a position. This card examines the causes of wick stops and recovery strategies to manage their effects.\n\n* **Causes of Wick Stops**: Identify market conditions that lead to wick stops, such as low liquidity during volatile periods. For example, a sudden drop in Ethereum liquidity can cause rapid price movements, triggering stop-loss orders.\n* **Recovery Techniques**: After a wick stop, assess the market context and consider re-entering the position if the original trade rationale remains valid. For instance, if Ethereum rebounds after a wick stop at $1,800, re-entering at $1,810 may align with the original bullish outlook.\n* **Adjusting Stop-Loss Orders**: Use dynamic stop-loss orders that adapt to market volatility. Implementing a trailing stop-loss can help protect profits while allowing for price fluctuations.",
    "visualKey": "execution-error-recovery",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Funding Blind Spots in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Scenario: Identifying Funding Blind Spots\nFunding blind spots can lead to unexpected execution errors, particularly in margin trading. This card focuses on recognizing these blind spots and developing strategies to recover from their financial impact.\n\n* **Understanding Funding Fees**: Analyze how funding fees can accumulate over time, impacting profitability. For example, holding a long position on a crypto asset with a 0.1% daily funding fee can erode profits if the position is held for an extended period.\n* **Monitoring Funding Rates**: Regularly check funding rates before entering trades to avoid unexpected costs. If the funding rate for a leveraged position on Litecoin is 0.2%, ensure that the potential gains outweigh the funding costs.\n* **Mitigation Strategies**: Implement a funding cost calculator to assess the long-term viability of holding positions. If funding costs exceed expected returns, consider closing the position to prevent losses.",
    "visualKey": "execution-error-recovery",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Exchange-Related Execution Errors",
    "label": "Crypto Track",
    "body": "### Core Scenario: Identifying Exchange Errors\nExchange-related execution errors can significantly impact trade outcomes. This card analyzes **common errors encountered on cryptocurrency exchanges and outlines recovery strategies**.\n\n* **Order Execution Delays**: Recognize that latency issues can cause orders to execute at unintended prices. Monitor exchange status and consider using limit orders to mitigate slippage.\n* **Insufficient Liquidity**: Be aware that low liquidity can lead to partial fills or failed orders. Always check the order book depth before placing large trades to ensure adequate liquidity.\n* **API Failures**: Understand that technical issues with exchange APIs can disrupt trading. Maintain a backup trading method, such as manual execution, to quickly adapt to API outages.",
    "context": {
      "keyTerms": [
        {
          "term": "Latency",
          "definition": "The delay between order placement and execution."
        },
        {
          "term": "Liquidity",
          "definition": "The availability of assets in the market to facilitate trades."
        },
        {
          "term": "API",
          "definition": "Application Programming Interface, used for automated trading."
        }
      ],
      "whyThisMatters": "Understanding exchange-related errors is critical for minimizing execution risks and ensuring effective trade management.",
      "realLifeExample": "During a high volatility period, a trader attempts to execute a market order for BTC at $30,000, but due to latency, it fills at $30,250, resulting in an unexpected loss.",
      "commonMistake": "Failing to check the exchange's operational status before executing trades, leading to unexpected errors.",
      "quickNote": "Monitor exchange performance to avoid execution delays and liquidity issues.",
      "mentorText": "When trading, always have a contingency plan for exchange errors. If you notice delays, switch to limit orders to protect your entry price.",
      "mentorAnalogy": "Think of trading on an exchange like flying a plane; you must constantly check the instruments and be prepared for turbulence that could affect your flight path."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "Market Sentiment and Crypto Execution",
    "label": "Crypto Track",
    "body": "### Core Scenario: Sentiment Analysis Impact\nMarket sentiment can lead to execution errors due to rapid price movements and emotional trading decisions. This card investigates **how sentiment influences execution and recovery methods**.\n\n* **FOMO and FUD**: Fear of missing out (FOMO) and fear, uncertainty, and doubt (FUD) can lead to impulsive trades. Establish clear entry and exit rules to combat emotional decision-making.\n* **Overreaction to News**: Market reactions to news can cause erratic price swings. Use a news filter to assess the potential impact before executing trades based on headlines.\n* **Sentiment Indicators**: Utilize sentiment indicators to gauge market mood. When sentiment is overly bullish or bearish, consider adjusting your strategy to avoid execution errors during extreme conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "FOMO",
          "definition": "Fear of missing out, leading to impulsive trading decisions."
        },
        {
          "term": "FUD",
          "definition": "Fear, uncertainty, and doubt that can negatively influence market behavior."
        },
        {
          "term": "Sentiment Indicators",
          "definition": "Tools used to measure market sentiment."
        }
      ],
      "whyThisMatters": "Recognizing the influence of market sentiment is essential for executing trades effectively and avoiding costly mistakes.",
      "realLifeExample": "A trader sees a news alert about regulatory changes and hastily sells ETH, only to find the market stabilizes shortly after, resulting in a loss.",
      "commonMistake": "Allowing emotional responses to dominate trading decisions, leading to poorly timed executions.",
      "quickNote": "Establish rules to counteract emotional trading driven by market sentiment.",
      "mentorText": "Stay disciplined. If you feel the urge to act on market sentiment, pause and reassess your strategy before executing any trades.",
      "mentorAnalogy": "Trading based on sentiment is like navigating a ship in a storm; you must rely on your instruments and not just the wind to guide your course."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "practice",
    "title": "Emotional Traps in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Scenario: Maintaining Discipline\nEmotional traps can lead to execution errors that affect trading performance. This practice card explores **common emotional pitfalls and strategies for maintaining discipline during recovery**.\n\n* **Greed and Loss Aversion**: Recognize how greed can lead to holding onto losing positions too long. Set predetermined stop-loss orders to enforce discipline.\n* **Chasing Losses**: Avoid the trap of trying to recover losses by overtrading. Establish a recovery plan that includes a cooldown period before re-entering the market.\n* **Confirmation Bias**: Be aware of the tendency to seek information that confirms existing beliefs. Regularly review your trading strategy and adjust based on objective data rather than emotions.",
    "context": {
      "keyTerms": [
        {
          "term": "Greed",
          "definition": "The desire to gain more, often leading to poor trading decisions."
        },
        {
          "term": "Loss Aversion",
          "definition": "The tendency to prefer avoiding losses over acquiring equivalent gains."
        },
        {
          "term": "Confirmation Bias",
          "definition": "The tendency to favor information that confirms pre-existing beliefs."
        }
      ],
      "whyThisMatters": "Identifying emotional traps is vital for maintaining a disciplined trading approach and ensuring effective recovery from execution errors.",
      "realLifeExample": "After a significant loss on a BTC trade, a trader impulsively buys back in at a higher price, hoping to recover quickly, only to incur further losses.",
      "commonMistake": "Failing to implement a structured recovery plan after an execution error, leading to further emotional trading.",
      "quickNote": "Implement strict rules to counteract emotional trading behaviors.",
      "mentorText": "When you feel the urge to chase losses, take a step back. Stick to your plan and remember that discipline is key to long-term success.",
      "mentorAnalogy": "Think of trading like a marathon; pacing yourself is crucial. Don't sprint after every setback; maintain your strategy and focus on the finish line."
    },
    "taskData": {
      "type": "choice_block",
      "question": "After experiencing a significant loss in a crypto trade, what is the best course of action to avoid emotional traps?",
      "options": [
        {
          "id": "0",
          "text": "Immediately re-enter the market to recover losses.",
          "isCorrect": false,
          "feedback": "This approach can lead to further emotional trading and increased losses."
        },
        {
          "id": "1",
          "text": "Take a break and reassess your trading strategy before making new trades.",
          "isCorrect": true,
          "feedback": "Taking a break allows for emotional recovery and a clearer assessment of your strategy."
        },
        {
          "id": "2",
          "text": "Increase your position size to make up for the loss quickly.",
          "isCorrect": false,
          "feedback": "Increasing position size can amplify losses and lead to poor decision-making."
        },
        {
          "id": "3",
          "text": "Ignore the loss and continue trading as usual.",
          "isCorrect": false,
          "feedback": "Ignoring losses can result in a lack of discipline and further emotional traps."
        }
      ]
    },
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Execution Errors & Recovery",
    "label": "Crypto Track",
    "body": "### Core Scenario: Recap of Execution Errors\nThis summary consolidates the key execution errors encountered in cryptocurrency trading and the recovery strategies discussed throughout the module. Understanding these elements is essential for effective trading.\n\n* **Exchange-Related Errors**: Focus on mitigating order execution delays and liquidity issues by monitoring exchange performance and using limit orders.\n* **Market Sentiment Impact**: Recognize how emotional trading driven by market sentiment can lead to execution errors. Establish rules to counteract impulsive decisions.\n* **Emotional Discipline**: Implement structured recovery plans to avoid emotional traps such as greed and loss aversion. Maintain discipline to enhance trading performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Errors",
          "definition": "Mistakes made during the execution of trades that can lead to financial loss."
        },
        {
          "term": "Recovery Strategies",
          "definition": "Methods employed to address and rectify execution errors."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of execution errors and recovery strategies is vital for maintaining consistent trading performance.",
      "realLifeExample": "A trader who previously faced execution errors implements a structured recovery plan, leading to improved trade outcomes and reduced emotional trading.",
      "commonMistake": "Failing to review and learn from past execution errors, leading to repeated mistakes.",
      "quickNote": "Consolidate knowledge of execution errors and recovery strategies for improved trading outcomes.",
      "mentorText": "Reflect on your past trades. Identify errors and develop a plan to avoid them in the future. Consistency in recovery is key.",
      "mentorAnalogy": "Just as a pilot reviews flight data after a journey to improve future performance, you must analyze your trading history to refine your execution strategy."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  }
];
