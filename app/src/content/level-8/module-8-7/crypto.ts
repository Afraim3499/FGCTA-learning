import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Logging Crypto Trade Data",
    "label": "Crypto Track",
    "body": "<!-- M8.7-crypto-C1 -->\n### Core Scenario: Trade Data Logging\nEffective performance analysis hinges on precise trade data logging. This card outlines **how to systematically log cryptocurrency trades with essential variables**.\n\n* **Variable Identification**: Record critical variables such as entry/exit price, trade size, and execution time. For instance, logging a Bitcoin trade executed at $45,000 with a size of 0.5 BTC at 10:15 AM UTC provides a clear performance metric.\n* **Setup Tags**: Assign tags to each trade based on strategy type (e.g., scalping, swing trading) to facilitate performance analysis. A trade tagged as 'scalping' executed on Ethereum at $3,200 can be easily filtered for future review.\n* **Mistake Classifications**: Implement a system to classify mistakes (e.g., emotional trading, poor execution) to identify patterns in performance degradation. For example, noting a mistake classification of 'emotional trading' on a failed trade at $3,150 can help in future decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Variables",
          "definition": "Specific metrics recorded for each trade, such as entry price and size."
        },
        {
          "term": "Setup Tags",
          "definition": "Labels assigned to trades based on the trading strategy employed."
        },
        {
          "term": "Mistake Classifications",
          "definition": "Categories used to identify errors made during trading."
        }
      ],
      "whyThisMatters": "Accurate logging of trade data enables detailed performance analysis, allowing for informed adjustments to trading strategies.",
      "realLifeExample": "Logging a Litecoin trade executed at $150 with a size of 2 LTC at 11:30 AM UTC, tagged as 'swing trade', and classified under 'technical analysis error'.",
      "commonMistake": "Failing to log trades consistently leads to incomplete performance data and misinformed strategy adjustments.",
      "quickNote": "Systematic logging of trades is essential for effective performance analysis.",
      "mentorText": "When you log your trades, think of it as building a blueprint for your trading career. Each entry is a data point that tells the story of your decisions.",
      "mentorAnalogy": "Logging trades is like an architect documenting every detail of a building plan; without precise records, the structure may not stand the test of time."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Tracking Leverage Used",
    "label": "Crypto Track",
    "body": "<!-- M8.7-crypto-C2 -->\n### Core Scenario: Leverage Categorization\nCategorizing trades by leverage provides insights into risk exposure and potential returns. This card explains **how to effectively log leverage for each trade**.\n\n* **Leverage Definition**: Clearly define the leverage used for each trade in your database. For example, a trade using 5x leverage on a Bitcoin position at $45,000 must be recorded as such to assess risk accurately.\n* **Risk Exposure Analysis**: Analyze the impact of leverage on trade outcomes. A 10x leveraged trade on Ethereum at $3,200 can amplify both gains and losses, necessitating careful logging for performance evaluation.\n* **Return Calculation**: Log the expected return based on leverage. For instance, a 2x leveraged trade on Litecoin at $150 should include potential returns calculated on the leveraged amount, providing a clearer picture of profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase potential returns."
        },
        {
          "term": "Risk Exposure",
          "definition": "The potential for loss in relation to the leverage used."
        },
        {
          "term": "Return Calculation",
          "definition": "The process of determining potential profits based on leverage."
        }
      ],
      "whyThisMatters": "Understanding leverage dynamics is crucial for managing risk and optimizing trade performance in volatile markets.",
      "realLifeExample": "Logging a Bitcoin trade at $45,000 with 5x leverage, indicating a potential exposure of $225,000, helps in assessing risk accurately.",
      "commonMistake": "Neglecting to log leverage details can lead to miscalculations in risk assessment and profit expectations.",
      "quickNote": "Tracking leverage is essential for understanding risk and potential returns.",
      "mentorText": "Leverage is a double-edged sword; it can magnify your gains or your losses. Always log it accurately to understand your risk profile.",
      "mentorAnalogy": "Think of leverage like a high-speed train; it can get you to your destination faster, but if you lose control, the consequences can be catastrophic."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Isolated vs Cross Margin Tagging",
    "label": "Crypto Track",
    "body": "<!-- M8.7-crypto-C3 -->\n### Core Scenario: Margin Type Distinction\nUnderstanding the differences between isolated and cross margin trading is critical for risk management. This card focuses on **how to log these distinctions in your database**.\n\n* **Isolated Margin Definition**: Log trades using isolated margin to limit risk to the specific position. For example, a trade on Bitcoin using isolated margin at $45,000 means only the funds allocated to that trade are at risk.\n* **Cross Margin Definition**: Record trades using cross margin where funds from the entire account can be used to maintain positions. A trade on Ethereum at $3,200 using cross margin means all available funds can support the position, increasing risk exposure.\n* **Tagging System**: Implement a tagging system in your database to differentiate between isolated and cross margin trades. For instance, tagging a Litecoin trade at $150 as 'isolated' versus 'cross' helps in analyzing risk management strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Isolated Margin",
          "definition": "A margin type that limits risk to the specific trade."
        },
        {
          "term": "Cross Margin",
          "definition": "A margin type that uses the entire account balance to support positions."
        },
        {
          "term": "Tagging System",
          "definition": "A method to categorize trades based on margin type."
        }
      ],
      "whyThisMatters": "Differentiating between margin types is essential for understanding risk exposure and managing capital effectively in trading.",
      "realLifeExample": "Logging a Bitcoin trade at $45,000 using isolated margin, tagged as 'isolated', versus a cross margin trade on Ethereum at $3,200 tagged as 'cross'.",
      "commonMistake": "Failing to distinguish between margin types can lead to unexpected liquidation risks and mismanagement of capital.",
      "quickNote": "Tagging margin types is vital for effective risk management.",
      "mentorText": "When you log your trades, always note whether you're using isolated or cross margin. This distinction can save your account from unexpected liquidations.",
      "mentorAnalogy": "Isolated margin is like a safety net for a tightrope walker; it protects only that specific walk, while cross margin is like a safety harness that covers the entire act."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Logging Funding Fees",
    "label": "Crypto Track",
    "body": "<!-- M8.7-crypto-C4 -->\n### Core Scenario: Funding Fee Documentation\nFunding fees can significantly impact overall trading costs and profitability. This card details **how to log these fees accurately in your database**.\n\n* **Fee Structure Understanding**: Document the funding fee structure for each trade. For example, if a Bitcoin position incurs a funding fee of $10 per day, this must be logged to assess the true cost of holding the position.\n* **Daily Fee Calculation**: Record the daily funding fees associated with each trade. A trade on Ethereum at $3,200 with a daily fee of $5 should be logged to calculate total costs over the holding period.\n* **Impact Analysis**: Analyze how funding fees affect overall profitability. For instance, if a Litecoin trade at $150 incurs $2 in funding fees over a week, this must be included in the profit/loss calculations to ensure accurate performance assessment.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Fees",
          "definition": "Costs incurred for holding leveraged positions over time."
        },
        {
          "term": "Daily Fee Calculation",
          "definition": "The process of determining the daily costs associated with a trade."
        },
        {
          "term": "Impact Analysis",
          "definition": "Evaluating how funding fees affect overall trade profitability."
        }
      ],
      "whyThisMatters": "Accurate logging of funding fees is essential for understanding the true cost of trades and optimizing profitability.",
      "realLifeExample": "Logging a Bitcoin trade at $45,000 with a daily funding fee of $10, noting a total of $70 in fees over a week for accurate profit calculations.",
      "commonMistake": "Overlooking funding fees can lead to inflated profit expectations and poor financial planning.",
      "quickNote": "Logging funding fees is crucial for accurate profitability assessment.",
      "mentorText": "Always account for funding fees in your trade logs. They can eat into your profits if you ignore them.",
      "mentorAnalogy": "Logging funding fees is like a chef accounting for ingredient costs; without knowing your expenses, you can't price your dishes accurately."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Tagging Trade Duration",
    "label": "Crypto Track",
    "body": "<!-- M8.7-crypto-C5 -->\n### Core Scenario: Trade Duration Tagging\nTagging trades by duration provides insights into the effectiveness of short-term versus long-term strategies. This card outlines **how to implement duration tags for enhanced performance analysis**.\n\n* **Duration Classification**: Categorize trades as short-term (less than 24 hours), medium-term (1 to 7 days), or long-term (over 7 days). This classification allows for tailored performance evaluations based on strategy type.\n* **Performance Metrics**: Analyze win rates and average returns for each duration category. For instance, if short-term trades yield a 60% win rate with an average return of 5%, while long-term trades yield a 40% win rate with an average return of 15%, this data informs future strategy adjustments.\n* **Review Frequency**: Establish a review schedule for each duration category. Short-term trades should be reviewed weekly, while long-term trades may be assessed monthly to ensure timely adjustments based on performance trends.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Duration Tagging",
          "definition": "The process of categorizing trades based on the time frame they are held."
        }
      ],
      "whyThisMatters": "Understanding trade duration allows traders to refine strategies and allocate resources effectively based on performance data.",
      "realLifeExample": "A trader logs a short-term trade on BTC, executed at $40,000 and closed within 12 hours at $41,000, tagging it as a short-term trade for future analysis.",
      "commonMistake": "Failing to consistently tag trades by duration, leading to an incomplete performance analysis.",
      "quickNote": "Tagging trades by duration enhances performance insights and strategy refinement.",
      "mentorText": "When you categorize your trades by duration, you gain clarity on which strategies are working. If your short-term trades consistently outperform long-term ones, it’s time to pivot your focus.",
      "mentorAnalogy": "Think of tagging trade duration like a chef categorizing dishes by preparation time; understanding which meals are quick versus slow helps optimize kitchen efficiency."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Implementing Market Condition Tags",
    "label": "Crypto Track",
    "body": "<!-- M8.7-crypto-C6 -->\n### Core Scenario: Market Condition Tagging\nTagging trades based on prevailing market conditions enables a comprehensive analysis of performance across different environments. This card details **how to categorize trades by market conditions for better insights**.\n\n* **Market Condition Categories**: Define tags for conditions such as bullish, bearish, and sideways markets. For example, a trade executed during a bullish trend should be tagged accordingly to assess performance in that context.\n* **Performance Correlation**: Analyze how trades perform under different market conditions. If trades tagged in a bullish market yield a 70% win rate, while those in a bearish market yield only 30%, this data can guide future trading decisions.\n* **Dynamic Adjustments**: Regularly update market condition tags based on evolving market dynamics. This ensures that your performance database reflects current conditions, allowing for timely strategy adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Condition Tagging",
          "definition": "The process of categorizing trades based on the prevailing market environment during the trade."
        }
      ],
      "whyThisMatters": "Market condition tags provide critical context for evaluating trade performance, allowing for more informed decision-making.",
      "realLifeExample": "A trader executes a long position on ETH during a bullish market at $2,500, tagging it as bullish; later analysis shows a 75% win rate for trades tagged under this condition.",
      "commonMistake": "Neglecting to tag trades based on market conditions, resulting in a lack of context for performance evaluations.",
      "quickNote": "Market condition tags enhance the understanding of trade performance across varying environments.",
      "mentorText": "By tagging your trades with market conditions, you can pinpoint what works best in different environments. If your bullish trades consistently outperform others, it’s a clear signal to focus your strategy there.",
      "mentorAnalogy": "Consider market condition tagging like a meteorologist categorizing weather patterns; understanding how different conditions affect outcomes is crucial for accurate forecasting."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "practice",
    "title": "Practical Application of Crypto Tags",
    "label": "Crypto Track",
    "body": "<!-- M8.7-crypto-C7 -->\n### Core Scenario: Applying Tagging Methods\nEngaging in practical exercises reinforces the application of tagging methods to crypto trades. This card provides **a scenario-based exercise to solidify your tagging skills**.\n\n* **Scenario Setup**: You have executed three trades: a short-term trade on LTC at $150, a long-term trade on ADA at $1.20, and a medium-term trade on DOT at $30. Tag each trade based on duration and market conditions.\n* **Tagging Exercise**: Assign appropriate tags to each trade. For example, if the LTC trade occurred during a bullish market, tag it as 'short-term bullish'. Ensure you categorize the ADA trade as 'long-term bearish' if it was executed during a downtrend.\n* **Review and Analyze**: After tagging, review the performance of these trades based on your tags. Analyze how each trade performed relative to its duration and market condition tags to identify patterns.",
    "context": {
      "keyTerms": [
        {
          "term": "Tagging Methods",
          "definition": "The techniques used to categorize trades based on various criteria for performance analysis."
        }
      ],
      "whyThisMatters": "Practical application of tagging methods ensures that traders can effectively log and analyze their performance data.",
      "realLifeExample": "You executed a trade on LINK at $25 during a bearish market, tagging it as 'medium-term bearish'; later analysis shows a 40% win rate for similar trades.",
      "commonMistake": "Inconsistently applying tags or failing to tag all trades, leading to incomplete performance records.",
      "quickNote": "Practicing tagging methods solidifies your ability to log and analyze trade data effectively.",
      "mentorText": "When you apply tagging methods to your trades, you create a roadmap for analyzing performance. Each tag tells a story about the conditions and strategies that led to your results.",
      "mentorAnalogy": "Think of tagging trades like an architect categorizing building materials; each tag helps you understand which materials work best under specific conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You executed a trade on XRP at $0.50 during a bullish market for a duration of 3 days. How should you tag this trade?",
      "options": [
        {
          "id": "0",
          "text": "Short-term bullish",
          "isCorrect": true,
          "feedback": "Correct. The trade is short-term due to its 3-day duration and bullish market condition."
        },
        {
          "id": "1",
          "text": "Long-term bearish",
          "isCorrect": false,
          "feedback": "Incorrect. The trade is not long-term, and the market condition was bullish."
        },
        {
          "id": "2",
          "text": "Medium-term bearish",
          "isCorrect": false,
          "feedback": "Incorrect. The trade duration is short-term, and the market was bullish."
        },
        {
          "id": "3",
          "text": "Short-term bearish",
          "isCorrect": false,
          "feedback": "Incorrect. The market condition was bullish, not bearish."
        }
      ]
    },
    "visualKey": "metric-database-grid"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Database Techniques",
    "label": "Crypto Track",
    "body": "<!-- M8.7-crypto-C8 -->\n### Core Summary: Crypto Database Techniques\nThis summary encapsulates the key techniques for structuring a crypto performance database, emphasizing the importance of tagging and categorization. **Review these techniques to ensure effective performance analysis**.\n\n* **Tagging Trade Duration**: Implement a systematic approach to categorize trades by duration, allowing for tailored performance evaluations based on strategy type.\n* **Market Condition Tags**: Utilize tags to classify trades according to market conditions, enhancing the context for performance analysis and decision-making.\n* **Consistent Application**: Ensure that tagging methods are applied consistently across all trades. Regular reviews of tagged data will facilitate ongoing strategy refinement and performance optimization.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Database",
          "definition": "A structured log of trade data that includes various tags and classifications for analysis."
        }
      ],
      "whyThisMatters": "A well-structured performance database enables traders to make data-driven decisions and refine their strategies effectively.",
      "realLifeExample": "A trader reviews their performance database, noting that trades tagged as 'short-term bullish' consistently yield higher returns, prompting a strategy shift.",
      "commonMistake": "Overlooking the importance of tagging, leading to a disorganized performance database that hinders analysis.",
      "quickNote": "Structured tagging is essential for effective performance analysis in crypto trading.",
      "mentorText": "Your performance database is your trading history. By tagging trades accurately, you create a valuable resource for refining your strategies and improving outcomes.",
      "mentorAnalogy": "Consider your performance database like a pilot's flight log; each entry provides critical information that informs future flights and enhances overall safety and efficiency."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  }
];
