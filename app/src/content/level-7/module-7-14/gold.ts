import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Execution Errors Overview",
    "label": "Gold Track",
    "body": "### Core Scenario: Identifying Execution Errors\nRecognizing execution errors in gold trading is essential for maintaining profitability. This card outlines the seven most common errors encountered during live trading.\n\n* **Error Classification**: Errors are categorized into three main types: operational, technical, and psychological. Each category requires distinct recovery strategies.\n* **Common Errors**: The most frequent errors include spread ignorance, timing failures, and re-entry traps. Understanding these errors is critical for effective recovery.\n* **Impact Assessment**: Evaluate the financial impact of each error type on your trading account. Quantifying losses allows for better recovery planning.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Error",
          "definition": "A mistake made during the process of placing or managing a trade."
        },
        {
          "term": "Operational Error",
          "definition": "Mistakes arising from the trader's actions or decisions."
        },
        {
          "term": "Technical Error",
          "definition": "Mistakes resulting from system or platform failures."
        },
        {
          "term": "Psychological Error",
          "definition": "Mistakes driven by emotional responses to market movements."
        }
      ],
      "whyThisMatters": "Identifying execution errors allows traders to implement targeted recovery strategies, minimizing losses and improving future performance.",
      "realLifeExample": "During a volatile session, a trader mistakenly places a gold order at $1,800 instead of $1,820 due to a technical glitch, leading to a significant loss.",
      "commonMistake": "Failing to categorize errors correctly, which hampers effective recovery efforts.",
      "quickNote": "Classifying execution errors is the first step towards effective recovery.",
      "mentorText": "When you encounter an execution error, take a moment to categorize it. This will guide your recovery strategy and help you avoid similar mistakes in the future.",
      "mentorAnalogy": "Think of execution errors like mechanical failures in an aircraft. Identifying the type of failure is crucial for determining the right repair approach."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "Spread Ignorance in Gold Trading",
    "label": "Gold Track",
    "body": "### Core Scenario: Managing Spread Awareness\nSpread ignorance can lead to unexpected losses in gold trading. This card focuses on understanding spreads and how to mitigate their impact.\n\n* **Understanding Spreads**: The spread is the difference between the bid and ask price. In gold trading, spreads can widen during high volatility, affecting execution costs.\n* **Pre-Trade Assessment**: Always check the current spread before placing an order. If the spread exceeds your acceptable risk threshold, consider postponing the trade.\n* **Recovery Strategies**: If a trade is executed with an unfavorable spread, adjust your position size or set tighter stop-loss levels to manage risk effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Spread",
          "definition": "The difference between the bid and ask price of an asset."
        },
        {
          "term": "Bid Price",
          "definition": "The price a trader is willing to pay for an asset."
        },
        {
          "term": "Ask Price",
          "definition": "The price a trader is willing to sell an asset for."
        }
      ],
      "whyThisMatters": "Awareness of spreads ensures that traders can make informed decisions and avoid unexpected costs that erode profits.",
      "realLifeExample": "A trader places a gold order at $1,805, unaware that the spread has widened to $10 during a news event, resulting in an immediate unrealized loss.",
      "commonMistake": "Ignoring the spread when calculating potential profits and losses, leading to unexpected financial outcomes.",
      "quickNote": "Always assess the spread before executing trades to avoid unnecessary losses.",
      "mentorText": "Before you hit that buy button, check the spread. If it's too wide, hold off. Your profits depend on it.",
      "mentorAnalogy": "Managing spreads in trading is like checking fuel levels before a flight. Ignoring it can lead to costly consequences mid-air."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "COMEX Timing Failures",
    "label": "Gold Track",
    "body": "### Core Scenario: Timing in COMEX Trading\nTiming failures in COMEX trading can severely impact execution quality. This card examines the importance of timing and recovery methods.\n\n* **Market Hours Awareness**: COMEX trading hours are critical. Ensure trades are executed during peak liquidity periods to avoid slippage and poor fills.\n* **Order Placement Timing**: Place orders strategically before major news releases or market openings to capitalize on volatility while minimizing risk.\n* **Recovery Techniques**: If a timing error occurs, reassess market conditions and adjust your strategy. Consider waiting for a retracement before re-entering the market.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX",
          "definition": "The Commodity Exchange, where gold futures are traded."
        },
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price."
        }
      ],
      "whyThisMatters": "Proper timing in COMEX trading can significantly enhance execution quality and reduce the likelihood of costly errors.",
      "realLifeExample": "A trader attempts to place a gold futures order at 9:30 AM EST, but due to a timing error, the order is executed at 9:35 AM, resulting in a 15-cent slippage.",
      "commonMistake": "Failing to account for market hours, leading to execution during low liquidity periods.",
      "quickNote": "Timing is critical; always align your trades with market hours for optimal execution.",
      "mentorText": "Timing your trades is like launching a rocket. You need to hit the right window to achieve your target effectively.",
      "mentorAnalogy": "Think of trading timing like a surgeon's precision in the operating room. Every second counts, and missteps can have serious consequences."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "Re-Entry Traps in Gold Trading",
    "label": "Gold Track",
    "body": "### Core Scenario: Navigating Re-Entry Traps\nRe-entry traps can lead to significant losses if not managed properly. This card addresses the nuances of re-entry strategies in gold trading.\n\n* **Identifying Traps**: Recognize price patterns that indicate potential re-entry traps, such as false breakouts or sudden reversals. Use technical indicators to confirm your analysis.\n* **Strategic Re-Entry**: Only re-enter a position after confirming a valid signal. Avoid re-entering immediately after a loss; wait for market confirmation to reduce risk.\n* **Mitigation Techniques**: If caught in a re-entry trap, consider scaling out of the position gradually instead of exiting all at once, allowing for potential recovery.",
    "context": {
      "keyTerms": [
        {
          "term": "Re-Entry Trap",
          "definition": "A situation where a trader re-enters a position based on misleading signals."
        },
        {
          "term": "False Breakout",
          "definition": "A price movement that appears to break a level but quickly reverses."
        },
        {
          "term": "Technical Indicators",
          "definition": "Tools used to analyze price movements and market trends."
        }
      ],
      "whyThisMatters": "Understanding re-entry traps allows traders to avoid costly mistakes and develop more disciplined trading strategies.",
      "realLifeExample": "After a gold position is closed at $1,800, a trader re-enters at $1,805 without confirmation, only to see the price drop to $1,790, resulting in a loss.",
      "commonMistake": "Rushing to re-enter a position without adequate market confirmation, leading to further losses.",
      "quickNote": "Confirm signals before re-entering to avoid falling into traps.",
      "mentorText": "Don't rush back in after a loss. Wait for the market to show you it's ready before re-entering the trade.",
      "mentorAnalogy": "Re-entering a trade without confirmation is like a pilot attempting to land without checking the runway conditions. It can lead to disastrous outcomes."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "Market Volatility and Gold Execution",
    "label": "Gold Track",
    "body": "### Core Scenario: Impact of Market Volatility on Execution\nMarket volatility can significantly disrupt execution processes in gold trading, leading to increased errors. This card outlines **how to analyze volatility and implement recovery strategies** effectively.\n\n* **Volatility Assessment**: Utilize the Average True Range (ATR) indicator to gauge market volatility. If ATR exceeds 2% during a session, anticipate potential slippage and adjust execution strategies accordingly.\n* **Execution Timing**: Avoid placing orders during high-impact news releases, such as U.S. Non-Farm Payrolls, which can cause erratic price movements. Implement a waiting period of at least 30 minutes post-release to ensure market stability.\n* **Order Types**: Use limit orders instead of market orders during volatile periods to minimize slippage. Set limit orders at least 10 pips away from the current market price to increase the likelihood of execution at desired levels.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price."
        }
      ],
      "whyThisMatters": "Understanding volatility's impact on execution helps traders mitigate risks and enhance order accuracy in gold trading.",
      "realLifeExample": "During the NY session on March 10, 2023, gold prices spiked 3% due to geopolitical tensions, causing slippage in market orders placed at $1,950, resulting in fills as low as $1,940.",
      "commonMistake": "Traders often ignore volatility indicators and place market orders during high volatility, leading to unexpected execution prices.",
      "quickNote": "Monitor ATR and avoid market orders during high volatility to reduce execution errors.",
      "mentorText": "When volatility spikes, I always check the ATR and adjust my strategy. If it’s above 2%, I know to be cautious and consider limit orders instead.",
      "mentorAnalogy": "Think of trading gold like piloting an aircraft through turbulent weather; you must adjust your flight path and speed to ensure a safe landing."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "concept",
    "title": "Communication Errors in Gold Execution",
    "label": "Gold Track",
    "body": "### Core Scenario: Navigating Communication Errors\nMiscommunication with brokers can lead to execution errors that impact trading outcomes. This card focuses on **identifying common communication pitfalls and recovery methods**.\n\n* **Clarification Protocols**: Always confirm trade details with your broker before execution. Use a checklist to verify instrument, size, and price to avoid misunderstandings.\n* **Documentation of Instructions**: Record all communications regarding trade instructions, including timestamps and specific requests. This documentation serves as a reference for resolving disputes.\n* **Post-Execution Review**: After a trade, conduct a review session with your broker to discuss any discrepancies. Schedule this within 24 hours of the execution to ensure clarity and prompt resolution.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Confirmation",
          "definition": "The process of verifying trade details with a broker before placing an order."
        },
        {
          "term": "Trade Documentation",
          "definition": "The practice of recording trade instructions and communications for accountability."
        }
      ],
      "whyThisMatters": "Effective communication with brokers is essential to prevent execution errors and ensure trades are executed as intended.",
      "realLifeExample": "On February 15, 2023, a trader instructed their broker to sell 10 contracts of gold at $1,850 but mistakenly communicated $1,800, resulting in an unintended loss of $5,000.",
      "commonMistake": "Failing to confirm trade details leads to execution errors that could have been avoided with proper communication.",
      "quickNote": "Always confirm trade details with your broker to prevent execution errors.",
      "mentorText": "I emphasize the importance of double-checking with my broker. A simple confirmation can save you from costly mistakes.",
      "mentorAnalogy": "Consider a surgeon confirming the patient's details before an operation; clarity is critical to avoid catastrophic errors."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "practice",
    "title": "Documenting Gold Execution Errors",
    "label": "Gold Track",
    "body": "### Core Scenario: Importance of Documentation\nDocumenting execution errors is vital for recovery and performance improvement in gold trading. This card teaches **how to effectively document and analyze errors**.\n\n* **Error Log Creation**: Maintain a detailed log of all execution errors, including date, time, instrument, and nature of the error. This log should be updated immediately after an error occurs.\n* **Error Categorization**: Classify errors into categories such as communication errors, slippage, and order type issues. This categorization helps in identifying patterns and areas for improvement.\n* **Review and Adaptation**: Schedule a weekly review of the error log to analyze trends and develop strategies to mitigate similar errors in the future. Adjust trading protocols based on findings from this review.",
    "context": {
      "keyTerms": [
        {
          "term": "Error Log",
          "definition": "A record of execution errors that helps in tracking and analyzing mistakes."
        },
        {
          "term": "Error Categorization",
          "definition": "The process of classifying errors to identify patterns and improve performance."
        }
      ],
      "whyThisMatters": "Documenting errors allows traders to learn from mistakes, leading to improved execution and reduced future errors.",
      "realLifeExample": "A trader documented a slippage error where a gold order was filled at $1,855 instead of $1,850. This entry helped identify that slippage occurred during high volatility periods.",
      "commonMistake": "Traders often neglect to document errors, missing valuable insights that could prevent future mistakes.",
      "quickNote": "Keep a detailed error log to track and learn from execution mistakes.",
      "mentorText": "I make it a point to document every error. It’s like keeping a playbook; you need to know what went wrong to avoid it next time.",
      "mentorAnalogy": "Think of documenting errors like a pilot reviewing flight logs; it’s essential for improving future flights and ensuring safety."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is the primary benefit of maintaining an error log in gold trading?",
      "options": [
        {
          "id": "0",
          "text": "To track profits and losses.",
          "isCorrect": false,
          "feedback": "This is incorrect. While tracking profits is important, the error log specifically focuses on documenting mistakes."
        },
        {
          "id": "1",
          "text": "To identify and learn from execution mistakes.",
          "isCorrect": true,
          "feedback": "Correct. An error log allows traders to analyze mistakes and develop strategies to prevent them in the future."
        },
        {
          "id": "2",
          "text": "To communicate with brokers about trades.",
          "isCorrect": false,
          "feedback": "This is not the primary purpose of an error log, which is focused on documenting errors."
        },
        {
          "id": "3",
          "text": "To comply with regulatory requirements.",
          "isCorrect": false,
          "feedback": "While compliance is important, the main function of an error log is to facilitate learning from execution errors."
        }
      ]
    },
    "visualKey": "execution-error-recovery"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Execution Errors & Recovery",
    "label": "Gold Track",
    "body": "### Core Scenario: Recap of Execution Errors\nThis summary consolidates the key execution errors specific to gold trading and the recovery strategies discussed throughout the module. Understanding these concepts is essential for ongoing improvement.\n\n* **Common Errors Overview**: The seven most common execution errors include market volatility impacts, communication errors, slippage, and order type mismanagement. Each error requires specific recovery strategies.\n* **Recovery Strategies**: Implementing systematic documentation, conducting post-execution reviews, and utilizing volatility assessments are critical for effective recovery from errors.\n* **Continuous Improvement**: Regularly revisiting and updating trading protocols based on documented errors and recovery experiences will enhance overall trading performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Continuous Improvement",
          "definition": "The ongoing effort to enhance processes and performance based on past experiences."
        },
        {
          "term": "Post-Execution Review",
          "definition": "A review conducted after a trade to analyze execution accuracy and identify errors."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of execution errors and recovery strategies is vital for professional traders to minimize risks and enhance performance.",
      "realLifeExample": "Traders who implemented a structured error log and post-execution reviews reported a 30% reduction in execution errors over three months.",
      "commonMistake": "Failing to recognize the importance of learning from past errors can lead to repeated mistakes and lost opportunities.",
      "quickNote": "Consolidate knowledge of execution errors and recovery strategies for improved trading outcomes.",
      "mentorText": "Reviewing our execution errors is not just about fixing mistakes; it’s about building a stronger foundation for future trades.",
      "mentorAnalogy": "Like an architect revisiting blueprints after a project, reviewing execution errors helps refine strategies for future success."
    },
    "taskData": null,
    "visualKey": "execution-error-recovery"
  }
];
