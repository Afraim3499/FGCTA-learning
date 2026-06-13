import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Categorizing Forex Trades",
    "label": "Forex Track",
    "body": "<!-- M8.7-forex-C1 -->\n### Core Scenario: Trade Categorization by Currency Pair\nCategorizing trades by currency pair allows for detailed performance analysis across different markets. This card outlines **how to structure your database for effective categorization**.\n\n* **Currency Pair Tagging**: Assign a unique identifier for each currency pair traded (e.g., EURUSD, GBPJPY). This enables filtering and comparative analysis across multiple pairs.\n* **Performance Metrics**: Log key performance indicators (KPIs) for each trade, such as win rate, average return, and maximum drawdown, categorized by currency pair. This facilitates targeted performance reviews.\n* **Timeframe Segmentation**: Include timeframes (e.g., H1, D1) in your categorization to analyze performance trends based on different trading horizons, enhancing strategy refinement.",
    "context": {
      "keyTerms": [
        {
          "term": "Currency Pair Tagging",
          "definition": "The process of assigning unique identifiers to each currency pair for performance tracking."
        }
      ],
      "whyThisMatters": "Categorizing trades by currency pair enhances the ability to identify strengths and weaknesses in specific markets, informing strategy adjustments.",
      "realLifeExample": "Logging trades in a database with tags like 'EURUSD' and 'GBPJPY' shows that trades on EURUSD had a 70% win rate compared to 50% on GBPJPY over the last quarter.",
      "commonMistake": "Failing to consistently tag trades by currency pair leads to fragmented data that obscures performance insights.",
      "quickNote": "Categorize trades by currency pair for targeted performance analysis.",
      "mentorText": "When you categorize your trades by currency pair, you can pinpoint where your strategies excel or falter. It’s like having a detailed report card for each market.",
      "mentorAnalogy": "Think of your trading database as a library. Each currency pair is a section, and categorizing trades is like organizing books by genre, making it easier to find what you need."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Analyzing Session Windows",
    "label": "Forex Track",
    "body": "<!-- M8.7-forex-C2 -->\n### Core Scenario: Trade Logging by Session Windows\nAnalyzing trades based on session windows reveals optimal trading times and conditions. This card details **how to structure your database for session-based analysis**.\n\n* **Session Identification**: Log trades with session identifiers (e.g., Asian, London, New York). This allows for performance analysis based on different market behaviors during each session.\n* **Time Stamping**: Include precise timestamps for each trade to correlate performance with specific session characteristics, such as volatility and liquidity.\n* **Session Performance Metrics**: Calculate win rates and average returns for each session, enabling traders to identify which sessions yield the best results for their strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Identification",
          "definition": "The process of categorizing trades based on the market session in which they occurred."
        }
      ],
      "whyThisMatters": "Understanding performance across different session windows allows traders to optimize their trading hours and strategies based on market conditions.",
      "realLifeExample": "Analyzing trades logged during the New York session shows a 65% win rate, while trades during the Asian session reflect only 40%, guiding session-specific strategy adjustments.",
      "commonMistake": "Not logging session data leads to missed insights about optimal trading times and conditions.",
      "quickNote": "Log trades by session to identify optimal trading windows.",
      "mentorText": "By analyzing your trades according to session windows, you can see where you perform best. It’s like knowing when the best waves are for surfing.",
      "mentorAnalogy": "Consider your trading sessions like different shifts in a factory. Each shift has its own rhythm and output; logging trades by session helps you understand when production is at its peak."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Impact of News Releases",
    "label": "Forex Track",
    "body": "<!-- M8.7-forex-C3 -->\n### Core Scenario: Tagging Trades with News Releases\nTagging trades with relevant news releases enables a deeper analysis of market events on trading outcomes. This card explains **how to implement news tagging in your database**.\n\n* **News Event Tagging**: Assign tags to trades based on significant news events (e.g., NFP, interest rate decisions). This allows for correlation analysis between news impacts and trade performance.\n* **Pre- and Post-Analysis**: Log trades executed before and after news releases to evaluate market reactions and volatility changes, providing insights into optimal entry and exit points.\n* **Performance Metrics by News Type**: Analyze win rates and average returns for trades associated with different news types, helping refine strategies around high-impact events.",
    "context": {
      "keyTerms": [
        {
          "term": "News Event Tagging",
          "definition": "The process of associating trades with specific news releases to analyze their impact on performance."
        }
      ],
      "whyThisMatters": "Understanding how news events affect trade outcomes allows for more informed decision-making and strategy adjustments around high-impact releases.",
      "realLifeExample": "Tagging a trade executed on EURUSD during the NFP release shows a 75% win rate, while trades not associated with news events reflect only 50%, indicating a strong correlation.",
      "commonMistake": "Neglecting to tag trades with news events results in a lack of understanding of how external factors influence performance.",
      "quickNote": "Tag trades with news releases for deeper performance analysis.",
      "mentorText": "When you tag your trades with news events, you can see how much those events sway the market. It’s like tracking how weather changes affect your outdoor plans.",
      "mentorAnalogy": "Think of tagging trades with news events like a chef noting the ingredients used in a recipe. Understanding which ingredients (news) lead to the best dishes (trades) helps refine future cooking."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Logging Trade Volume",
    "label": "Forex Track",
    "body": "<!-- M8.7-forex-C4 -->\n### Core Scenario: Importance of Logging Trade Volume\nLogging trade volume is crucial for revealing insights into liquidity and market behavior. This card outlines **how to effectively record trade volume in your database**.\n\n* **Volume Entry Protocol**: Record the volume of each trade executed (e.g., 1 lot, 0.5 lots) to analyze the impact of trade size on performance metrics like win rate and average return.\n* **Liquidity Analysis**: Correlate trade volume with market liquidity conditions at the time of execution, identifying patterns that may influence trade outcomes.\n* **Volume-Based Performance Metrics**: Calculate performance metrics based on trade volume categories (e.g., low, medium, high), allowing for targeted strategy adjustments based on liquidity conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Entry Protocol",
          "definition": "The method of recording the size of each trade to analyze its impact on performance."
        }
      ],
      "whyThisMatters": "Understanding trade volume in relation to market conditions can reveal critical insights into liquidity and help optimize trading strategies.",
      "realLifeExample": "Logging a trade of 2 lots on GBPUSD during a high liquidity period shows a 70% win rate, while a 0.1 lot trade during low liquidity reflects only 30%, indicating the importance of volume.",
      "commonMistake": "Failing to log trade volume leads to a lack of understanding of how size impacts performance and market behavior.",
      "quickNote": "Log trade volume to gain insights into liquidity and market behavior.",
      "mentorText": "When you log your trade volume, you can see how size affects your results. It’s like adjusting the throttle on a plane; the right amount of power can make all the difference.",
      "mentorAnalogy": "Consider logging trade volume like a pilot noting fuel levels. Understanding how much fuel (volume) you have impacts your flight plan and safety."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Tagging Trade Direction",
    "label": "Forex Track",
    "body": "<!-- M8.7-forex-C5 -->\n### Core Scenario: Trade Direction Tagging\nTagging trades by direction (buy/sell) is essential for analyzing strategy effectiveness over time. This card outlines **how to systematically categorize trades** to enhance performance review.\n\n* **Directional Classification**: Assign a clear tag to each trade executed, indicating whether it was a buy or sell. This allows for straightforward aggregation of results based on trade direction.\n* **Performance Analysis**: Utilize the tagged data to calculate win rates and average returns for each direction. For example, if 70 out of 100 buy trades were profitable, the win rate for buys stands at 70%.\n* **Strategy Refinement**: Analyze the performance of each direction over different market conditions. For instance, if sell trades during high volatility yield a 60% win rate, consider adjusting strategy parameters accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Direction Tag",
          "definition": "A label indicating whether a trade was a buy or sell."
        }
      ],
      "whyThisMatters": "Understanding trade direction effectiveness allows for targeted strategy improvements and informed decision-making.",
      "realLifeExample": "In a recent analysis, EURUSD trades were tagged, revealing a 65% win rate for buy trades executed during the London session, compared to a 40% win rate for sells.",
      "commonMistake": "Failing to consistently tag trades can lead to skewed performance analysis and misinformed strategy adjustments.",
      "quickNote": "Tagging trade direction is crucial for accurate performance evaluation.",
      "mentorText": "When you log your trades, always tag them by direction. It’s like keeping a scorecard for your strategies. If you don’t know whether you’re winning more on buys or sells, you’re flying blind.",
      "mentorAnalogy": "Think of tagging trade direction like a pilot logging flight paths. Each flight's direction provides critical data for future route planning and safety assessments."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Implementing Risk Management Tags",
    "label": "Forex Track",
    "body": "<!-- M8.7-forex-C6 -->\n### Core Scenario: Risk Management Tagging\nIncorporating risk management tags into your Forex database is vital for assessing the risk-reward ratio of trades. This card details **how to implement these tags effectively**.\n\n* **Risk Assessment Tags**: Assign tags based on the risk level of each trade (e.g., low, medium, high). This enables a clear overview of risk exposure across your portfolio.\n* **Reward Calculation**: Pair risk tags with potential reward metrics. For example, a trade tagged as high risk with a projected reward of 3:1 should be monitored closely against actual outcomes.\n* **Performance Metrics**: Evaluate the success of trades based on their risk tags. If high-risk trades consistently yield lower win rates, it may indicate a need for strategy reassessment or tighter risk controls.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management Tag",
          "definition": "A label indicating the risk level associated with a trade."
        }
      ],
      "whyThisMatters": "Effective risk management tagging allows for better evaluation of trade performance relative to risk taken.",
      "realLifeExample": "A recent review of GBPJPY trades showed that high-risk tagged trades had a 30% win rate, while low-risk trades achieved a 70% win rate, highlighting the need for adjusted risk strategies.",
      "commonMistake": "Neglecting to tag risk levels can lead to an incomplete understanding of trade performance and potential losses.",
      "quickNote": "Risk management tags are essential for evaluating trade success relative to risk taken.",
      "mentorText": "Always tag your trades with their risk levels. It’s like a safety checklist before a flight; you need to know how much risk you’re taking to make informed decisions.",
      "mentorAnalogy": "Implementing risk management tags is akin to a surgeon categorizing procedures by complexity. Each complexity level requires different preparation and risk assessment."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "practice",
    "title": "Practical Application of Forex Tags",
    "label": "Forex Track",
    "body": "<!-- M8.7-forex-C7 -->\n### Core Scenario: Tagging Application Exercise\nEngaging in practical exercises focused on tagging methods reinforces the understanding of structured data logging. This card provides **a scenario for applying tagging techniques**.\n\n* **Scenario Setup**: You executed five trades on AUDCAD, with varying risk levels and directions. Your task is to tag each trade based on direction (buy/sell) and risk level (low/medium/high).\n* **Data Logging**: Record the following trades: 1) Buy at 0.9350, low risk; 2) Sell at 0.9400, medium risk; 3) Buy at 0.9300, high risk; 4) Sell at 0.9250, low risk; 5) Buy at 0.9200, medium risk.\n* **Review and Analyze**: After tagging, analyze the performance of each trade based on the tags assigned. Calculate the win rate for each direction and risk level to identify patterns.",
    "context": {
      "keyTerms": [
        {
          "term": "Tagging Methods",
          "definition": "Techniques used to categorize trades for performance analysis."
        }
      ],
      "whyThisMatters": "Hands-on practice solidifies the understanding of how structured data logging can enhance performance evaluation.",
      "realLifeExample": "In a simulated trading session, you tagged trades on NZDUSD, revealing that low-risk trades had a 75% win rate compared to 50% for high-risk trades.",
      "commonMistake": "Inconsistent tagging during practice can lead to inaccurate performance assessments and missed learning opportunities.",
      "quickNote": "Practical tagging exercises reinforce the importance of structured data logging.",
      "mentorText": "As you tag your trades, think critically about each decision. This is your chance to refine your process and understand what works and what doesn’t.",
      "mentorAnalogy": "Practicing tagging trades is like a chef refining their recipe. Each ingredient must be measured and recorded for consistent results in future dishes."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You executed a buy trade on EURUSD at 1.0850 with a high-risk tag. What tags should you assign to this trade?",
      "options": [
        {
          "id": "0",
          "text": "Buy, High Risk",
          "isCorrect": true,
          "feedback": "Correct. The trade is a buy and is tagged as high risk."
        },
        {
          "id": "1",
          "text": "Sell, Low Risk",
          "isCorrect": false,
          "feedback": "Incorrect. The trade is a buy, not a sell, and the risk level is high."
        },
        {
          "id": "2",
          "text": "Buy, Medium Risk",
          "isCorrect": false,
          "feedback": "Incorrect. The trade is a buy but tagged as high risk, not medium."
        },
        {
          "id": "3",
          "text": "Sell, High Risk",
          "isCorrect": false,
          "feedback": "Incorrect. The trade is a buy, not a sell."
        }
      ]
    },
    "visualKey": "metric-database-grid"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Database Techniques",
    "label": "Forex Track",
    "body": "<!-- M8.7-forex-C8 -->\n### Core Scenario: Review of Database Techniques\nA structured Forex performance database relies heavily on effective tagging and categorization. This card summarizes **the key techniques for structuring your database**.\n\n* **Comprehensive Tagging**: Ensure all trades are tagged by direction and risk level. This enables detailed performance analysis and strategy refinement.\n* **Data Aggregation**: Regularly aggregate tagged data to assess overall performance trends. For example, analyze win rates by direction and risk to identify successful strategies.\n* **Continuous Improvement**: Use insights gained from tagged data to adjust trading strategies and risk management practices. For instance, if high-risk trades consistently underperform, consider revising entry criteria.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Database",
          "definition": "A structured log of trade data used for analysis and strategy improvement."
        }
      ],
      "whyThisMatters": "A well-structured performance database is critical for ongoing strategy evaluation and enhancement.",
      "realLifeExample": "After implementing tagging techniques, a trader found that their overall win rate improved by 15% due to better risk management insights.",
      "commonMistake": "Failing to regularly review and update the database can lead to outdated strategies and missed opportunities for improvement.",
      "quickNote": "Effective tagging and categorization are foundational to a robust Forex performance database.",
      "mentorText": "Review your tagging practices regularly. Think of it as a maintenance check for your trading engine; without it, performance can falter.",
      "mentorAnalogy": "Structuring your performance database is like an architect drafting blueprints. Each detail matters for the integrity and success of the final structure."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  }
];
