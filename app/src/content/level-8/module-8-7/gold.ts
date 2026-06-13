import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Tracking Gold Trade Executions",
    "label": "Gold Track",
    "body": "<!-- M8.7-gold-C1 -->\n### Core Scenario: Logging Gold Trade Executions\nAccurate logging of gold trade executions is essential for performance analysis. This card outlines **how to structure your database entries for trades based on specific timeframes**.\n\n* **Timeframe Segmentation**: Record trades according to specific timeframes such as pre-market, market open, and close. For example, log trades executed between 8:00 AM and 10:00 AM EST separately from those executed between 10:00 AM and 12:00 PM EST.\n* **Execution Tags**: Use tags to categorize trades based on execution types, such as limit orders, market orders, or stop orders. This allows for easier filtering and analysis of trade performance.\n* **Outcome Classification**: Classify each trade outcome as win, loss, or break-even. This classification aids in identifying patterns in execution quality and timing effectiveness.",
    "context": {
      "keyTerms": [
        {
          "term": "Timeframe Segmentation",
          "definition": "Dividing trade logs into specific time intervals for analysis."
        },
        {
          "term": "Execution Tags",
          "definition": "Labels assigned to trades based on their execution type."
        },
        {
          "term": "Outcome Classification",
          "definition": "Categorizing trade results to evaluate performance."
        }
      ],
      "whyThisMatters": "Structured logging allows for precise performance analysis, enabling traders to identify effective execution times and strategies.",
      "realLifeExample": "Logging a gold trade executed at 9:15 AM EST with a limit order at $1,850, resulting in a win after reaching $1,860, helps analyze the effectiveness of morning trades.",
      "commonMistake": "Failing to log trades promptly can lead to inaccurate performance assessments and missed learning opportunities.",
      "quickNote": "Log trades by timeframe to enhance performance insights.",
      "mentorText": "When logging your trades, think of each entry as a data point that contributes to your overall performance picture. Be meticulous about the time and type of each trade.",
      "mentorAnalogy": "Consider this process like an aerospace engineer documenting flight data; every detail matters for future analysis and improvement."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Analyzing London Fix Trades",
    "label": "Gold Track",
    "body": "<!-- M8.7-gold-C2 -->\n### Core Scenario: Categorizing London Fix Trades\nThe London fix is a pivotal moment in gold trading, influencing market dynamics significantly. This card explains **how to categorize trades executed during this critical timeframe**.\n\n* **Fix Time Logging**: Record trades executed during the London fix, which occurs at 10:30 AM GMT. This allows for targeted analysis of market behavior during this period.\n* **Market Reaction Tags**: Use tags to denote market reactions, such as volatility spikes or trend reversals observed during the fix. This helps in understanding market sentiment.\n* **Performance Metrics**: Analyze the win/loss ratio of trades executed during the fix compared to other times. This metric provides insights into the effectiveness of trading strategies during high-impact moments.",
    "context": {
      "keyTerms": [
        {
          "term": "Fix Time Logging",
          "definition": "Recording trades executed during the London fix."
        },
        {
          "term": "Market Reaction Tags",
          "definition": "Labels indicating market behavior during specific events."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate trade success."
        }
      ],
      "whyThisMatters": "Understanding the dynamics of trades during the London fix can enhance strategy effectiveness and improve overall trading performance.",
      "realLifeExample": "Logging a trade executed at 10:30 AM GMT during the London fix that resulted in a 20-pip gain helps assess the impact of this critical period on trading outcomes.",
      "commonMistake": "Overlooking the significance of the London fix can lead to missed opportunities and misinterpretation of market trends.",
      "quickNote": "Categorize trades during the London fix for better market insights.",
      "mentorText": "Pay close attention to your trades during the London fix; this is where significant market movements often occur, and your data should reflect that.",
      "mentorAnalogy": "Think of this like a surgeon timing critical interventions; understanding when to act can make all the difference in outcomes."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Strategies for COMEX Open",
    "label": "Gold Track",
    "body": "<!-- M8.7-gold-C3 -->\n### Core Scenario: Logging Trades During the COMEX Open\nThe COMEX open presents unique trading dynamics that can significantly affect gold prices. This card focuses on **how to log and analyze trades executed during this session**.\n\n* **Session Timeframe**: Record trades executed between 8:20 AM and 8:30 AM EST, as this is when the market opens and volatility often spikes. This timeframe is critical for capturing initial market sentiment.\n* **Volatility Indicators**: Use tags to indicate volatility levels observed during the COMEX open. This can include high, medium, or low volatility, aiding in future trade decision-making.\n* **Trade Outcome Analysis**: Compare the performance of trades executed during the COMEX open against other sessions. This analysis helps identify whether specific strategies yield better results during this high-impact period.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Timeframe",
          "definition": "The specific time period during which trades are logged for analysis."
        },
        {
          "term": "Volatility Indicators",
          "definition": "Tags that denote the level of market volatility."
        },
        {
          "term": "Trade Outcome Analysis",
          "definition": "Evaluating the results of trades based on their execution time."
        }
      ],
      "whyThisMatters": "Logging trades during the COMEX open allows for a focused analysis of market behavior, enhancing strategy refinement and execution timing.",
      "realLifeExample": "Logging a gold trade executed at 8:25 AM EST with a market order at $1,840 that resulted in a loss after a rapid price drop highlights the importance of timing during the COMEX open.",
      "commonMistake": "Neglecting to log trades during the COMEX open can lead to an incomplete understanding of market dynamics and missed learning opportunities.",
      "quickNote": "Log trades during the COMEX open to capture market volatility.",
      "mentorText": "During the COMEX open, every second counts. Ensure your logging is precise to capture the rapid changes in market conditions.",
      "mentorAnalogy": "Consider this like a pilot preparing for takeoff; the initial moments are critical, and every detail must be recorded for future reference."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Tracking Asian Session Trades",
    "label": "Gold Track",
    "body": "<!-- M8.7-gold-C4 -->\n### Core Scenario: Categorizing Asian Session Trades\nThe Asian session plays a vital role in shaping global gold prices. This card discusses **how to categorize and analyze trades executed during this session**.\n\n* **Session Timing**: Log trades executed between 7:00 PM and 4:00 AM EST, as this period often sets the tone for the following trading day. Accurate timing is crucial for effective analysis.\n* **Market Influence Tags**: Use tags to denote external influences such as economic data releases or geopolitical events that may affect trading during the Asian session. This contextual information is vital for understanding trade outcomes.\n* **Comparative Performance Metrics**: Analyze the win/loss ratio of trades executed during the Asian session against other sessions. This comparative analysis helps identify unique patterns and trading opportunities.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Timing",
          "definition": "The specific hours during which trades are logged for the Asian session."
        },
        {
          "term": "Market Influence Tags",
          "definition": "Labels indicating external factors affecting market behavior."
        },
        {
          "term": "Comparative Performance Metrics",
          "definition": "Metrics used to compare trade performance across different sessions."
        }
      ],
      "whyThisMatters": "Categorizing trades during the Asian session enhances understanding of global market influences, allowing for more informed trading decisions.",
      "realLifeExample": "Logging a gold trade executed at 2:30 AM EST that reacted to an economic report, resulting in a 15-pip gain, demonstrates the importance of external influences during this session.",
      "commonMistake": "Failing to account for external influences during the Asian session can lead to misinterpretation of trade results and missed opportunities.",
      "quickNote": "Categorize Asian session trades to enhance global market understanding.",
      "mentorText": "When logging trades during the Asian session, consider the global context; external events can significantly impact your results.",
      "mentorAnalogy": "This process is akin to a chef adjusting recipes based on seasonal ingredients; understanding the environment is key to achieving the desired outcome."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Implementing Trade Setup Tags",
    "label": "Gold Track",
    "body": "<!-- M8.7-gold-C5 -->\n### Core Scenario: Trade Setup Tagging\nTagging trades by setup type enhances the ability to analyze performance across various strategies in the gold market. This card outlines **how to categorize trades effectively for deeper insights**.\n\n* **Setup Classification**: Define specific tags for each trade setup (e.g., breakout, reversal, trend continuation). Ensure that each tag is consistently applied to facilitate accurate performance analysis.\n* **Nuanced Analysis**: Use tagged data to compare the success rates of different setups. For instance, analyze trades tagged as 'breakout' to determine their win rate compared to 'reversal' setups.\n* **Dynamic Adjustments**: Regularly review and adjust tagging criteria based on evolving market conditions. For example, if a particular setup shows declining performance, consider refining the tag definition or criteria for entry.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Setup Tag",
          "definition": "A label assigned to a trade based on its entry criteria or strategy."
        }
      ],
      "whyThisMatters": "Accurate tagging allows for targeted performance reviews, enabling traders to refine their strategies based on empirical data.",
      "realLifeExample": "A trader logs a gold trade executed at $1,800 tagged as 'breakout' after a resistance level was breached, later analyzing its performance against other tagged trades.",
      "commonMistake": "Failing to consistently apply tags, leading to unreliable performance data.",
      "quickNote": "Consistent tagging of trades enhances analytical depth and strategy refinement.",
      "mentorText": "When you tag your trades, think of it as labeling files in a filing cabinet. Each label helps you quickly find and analyze the information you need to improve your strategy.",
      "mentorAnalogy": "Tagging trades is like categorizing surgical instruments in an operating room; each tool must be easily identifiable to ensure efficiency during critical procedures."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Logging Price Action Data",
    "label": "Gold Track",
    "body": "<!-- M8.7-gold-C6 -->\n### Core Scenario: Price Action Data Logging\nLogging price action data is essential for understanding market dynamics and trader behavior in the gold market. This card details **how to systematically record price movements for analysis**.\n\n* **Data Points Identification**: Record key price action data points, including open, high, low, close, and volume for each trading session. For example, log the daily high and low of gold futures for precise analysis.\n* **Timeframe Consistency**: Maintain consistent timeframes for logging data (e.g., daily, hourly). This consistency allows for accurate trend analysis and comparison across different periods.\n* **Behavioral Insights**: Analyze logged data to identify patterns in price movements. For instance, if gold consistently rallies after a specific price level is breached, this insight can inform future trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action Data",
          "definition": "Historical price movements of an asset, including open, high, low, close, and volume."
        }
      ],
      "whyThisMatters": "Accurate logging of price action data reveals trends and behaviors that can inform strategic decisions in trading.",
      "realLifeExample": "A trader logs gold prices for a week, noting a consistent pattern where prices tend to reverse after hitting $1,810, leading to strategic adjustments.",
      "commonMistake": "Neglecting to log data consistently, resulting in incomplete analysis and missed opportunities.",
      "quickNote": "Consistent logging of price action data is critical for uncovering market trends.",
      "mentorText": "Think of logging price action like keeping a detailed diary of your trades; each entry helps you understand what works and what doesn’t over time.",
      "mentorAnalogy": "Logging price action is akin to a pilot recording flight data; every altitude and speed change is crucial for future flight safety and efficiency."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "practice",
    "title": "Practical Application of Gold Tags",
    "label": "Gold Track",
    "body": "<!-- M8.7-gold-C7 -->\n### Core Scenario: Applying Tagging Methods\nEngaging in practical exercises reinforces the application of tagging methods to gold trades. This card provides **a scenario to practice tagging trades effectively**.\n\n* **Scenario Setup**: You have executed three gold trades today: a breakout at $1,805, a reversal at $1,795, and a trend continuation at $1,810. Tag each trade appropriately based on its setup.\n* **Review and Reflect**: After tagging, analyze the performance of each setup type over the past month. Determine which tags have yielded the highest win rates and adjust your strategy accordingly.\n* **Feedback Loop**: Share your tagging results with peers or mentors for feedback. This collaborative review can provide insights into potential adjustments or improvements in tagging practices.",
    "context": {
      "keyTerms": [
        {
          "term": "Tagging Methods",
          "definition": "Techniques used to categorize trades based on their setup type."
        }
      ],
      "whyThisMatters": "Practical application solidifies understanding of tagging methods, enhancing data logging accuracy.",
      "realLifeExample": "You tagged a trade executed at $1,805 as a 'breakout' and later analyzed its performance against other tagged trades, discovering a 75% success rate for breakout trades.",
      "commonMistake": "Inconsistently applying tags during practice, leading to skewed results in performance analysis.",
      "quickNote": "Practical tagging exercises reinforce the importance of structured data logging.",
      "mentorText": "When you practice tagging your trades, think of it as rehearsing for a performance; each practice makes you more precise and confident in your execution.",
      "mentorAnalogy": "Applying tagging methods is like a chef practicing recipes; each dish must be prepared with the right ingredients to ensure consistency and quality."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You executed three gold trades today: a breakout at $1,805, a reversal at $1,795, and a trend continuation at $1,810. How should you tag these trades?",
      "options": [
        {
          "id": "0",
          "text": "Tag all trades as 'breakout'.",
          "isCorrect": false,
          "feedback": "This is incorrect because each trade has a distinct setup that must be tagged appropriately."
        },
        {
          "id": "1",
          "text": "Tag the breakout at $1,805 as 'breakout', the reversal at $1,795 as 'reversal', and the trend continuation at $1,810 as 'trend continuation'.",
          "isCorrect": true,
          "feedback": "Correct! Each trade is tagged based on its specific setup, allowing for accurate performance analysis."
        },
        {
          "id": "2",
          "text": "Tag the breakout at $1,805 as 'trend continuation' and the trend continuation at $1,810 as 'breakout'.",
          "isCorrect": false,
          "feedback": "This is incorrect as the tags do not reflect the actual setups of the trades."
        },
        {
          "id": "3",
          "text": "Tag all trades as 'reversal'.",
          "isCorrect": false,
          "feedback": "This is incorrect because it misclassifies the trades and does not reflect their actual setups."
        }
      ]
    },
    "visualKey": "metric-database-grid"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Database Techniques",
    "label": "Gold Track",
    "body": "<!-- M8.7-gold-C8 -->\n### Core Scenario: Techniques for Structuring a Gold Database\nReviewing the techniques for structuring a performance database is crucial for effective trading analysis. This card summarizes **the key methods for tagging and categorizing trades**.\n\n* **Tagging Consistency**: Ensure that all trades are tagged consistently according to predefined criteria. This consistency is vital for accurate performance assessment.\n* **Data Logging Protocol**: Maintain a structured approach to logging price action and trade details. Use a standardized format for ease of analysis and comparison.\n* **Performance Review Cycle**: Establish a regular review cycle for analyzing tagged trades. This cycle should include evaluating the effectiveness of each setup type and making necessary adjustments to trading strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Database",
          "definition": "A structured log of trade data, including setups, outcomes, and price action."
        }
      ],
      "whyThisMatters": "A well-structured performance database enables traders to make data-driven decisions and refine their strategies effectively.",
      "realLifeExample": "A trader reviews their performance database monthly, identifying that trades tagged as 'breakout' have a 70% success rate, prompting a focus on this strategy.",
      "commonMistake": "Overlooking the importance of regular reviews, leading to stagnation in strategy development.",
      "quickNote": "Structured databases enhance trading performance through informed decision-making.",
      "mentorText": "Think of your performance database as a report card; the more detailed and accurate it is, the better you can assess your progress and areas for improvement.",
      "mentorAnalogy": "Structuring a performance database is like an architect creating blueprints; every detail must be precise to ensure the integrity of the final structure."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  }
];
