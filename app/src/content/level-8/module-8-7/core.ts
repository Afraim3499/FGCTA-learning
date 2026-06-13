import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Establishing Database Structure",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C1 -->\n### Core Structure: Trade Database Framework\nA well-structured trade database is essential for effective data logging and analysis. This card outlines **how to create a foundational framework for your trade database**.\n\n* **Variable Identification**: Define key variables such as entry price, exit price, position size, and trade duration. Each variable should have a clear data type (e.g., numeric, date) to ensure consistency in data entry.\n* **Database Schema Design**: Utilize a relational database model with tables for trades, setups, and mistakes. Establish relationships between tables to facilitate comprehensive data queries and reporting.\n* **Data Entry Protocols**: Implement standardized procedures for logging trades immediately after execution. This includes using a template that prompts for all necessary variables to prevent incomplete entries.",
    "context": {
      "keyTerms": [
        {
          "term": "Database Schema",
          "definition": "A structured framework that defines how data is organized and related within a database."
        }
      ],
      "whyThisMatters": "A robust database structure minimizes data entry errors and enhances the quality of analysis, leading to more informed trading decisions.",
      "realLifeExample": "Logging trades in a SQL database with tables for 'Trades' and 'Mistakes', where each trade entry includes fields for execution time, instrument, and outcome.",
      "commonMistake": "Failing to define clear variable types, leading to inconsistent data entries that complicate analysis.",
      "quickNote": "A structured database is the backbone of effective trade analysis.",
      "mentorText": "Think of your database as the foundation of a building. If the foundation is weak or poorly structured, everything built on top will be unstable.",
      "mentorAnalogy": "Just as an architect meticulously designs a blueprint to ensure every room serves its purpose, you must design your database to capture every detail of your trades accurately."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Identifying Execution Patterns",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C2 -->\n### Execution Analysis: Pattern Recognition\nAnalyzing execution patterns within your trade database can uncover valuable insights into your trading behavior. This card explains **how structured data can highlight trends and anomalies**.\n\n* **Trend Analysis**: Use statistical methods to identify recurring patterns in trade outcomes based on variables like time of day and market conditions. For example, analyze performance during the London session versus the New York session.\n* **Anomaly Detection**: Implement algorithms to flag trades that deviate significantly from your average performance metrics. This could include trades with unusually high drawdowns or unexpected losses.\n* **Visual Data Representation**: Utilize charts and graphs to visualize execution patterns over time. This can help in quickly identifying shifts in trading behavior or performance metrics.",
    "context": {
      "keyTerms": [
        {
          "term": "Anomaly Detection",
          "definition": "The identification of unusual patterns that do not conform to expected behavior in data."
        }
      ],
      "whyThisMatters": "Recognizing execution patterns allows traders to adjust strategies based on empirical evidence rather than intuition.",
      "realLifeExample": "Analyzing a database of 200 trades reveals that trades executed between 10 AM and 12 PM have a 70% win rate, while those executed after 3 PM drop to 40%.",
      "commonMistake": "Overlooking the importance of time-based analysis, leading to missed opportunities for strategy refinement.",
      "quickNote": "Execution patterns reveal the hidden dynamics of your trading behavior.",
      "mentorText": "When reviewing your trades, look for the common threads that run through your successes and failures. Patterns are your roadmap to improvement.",
      "mentorAnalogy": "Just as a detective examines clues to solve a case, you must scrutinize your trade data to uncover the patterns that define your trading success."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Classifying Systemic Mistakes",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C3 -->\n### Mistake Tracking: Systemic Error Classification\nClassifying systemic mistakes in trading is vital for continuous improvement. This card details **how to log and categorize recurring errors**.\n\n* **Error Categorization**: Develop a classification system for mistakes, such as 'Entry Errors', 'Exit Errors', and 'Risk Management Failures'. Each category should have specific criteria for logging.\n* **Frequency Analysis**: Track the frequency of each mistake type over time to identify which errors are most prevalent. This can help prioritize areas for improvement.\n* **Feedback Loop**: Create a structured feedback mechanism where you review logged mistakes regularly. This should include actionable steps to avoid repeating these errors in future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Systemic Mistakes",
          "definition": "Recurring errors in trading that arise from consistent behavioral patterns."
        }
      ],
      "whyThisMatters": "Identifying and classifying mistakes enables targeted strategy adjustments, leading to improved trading performance.",
      "realLifeExample": "Logging 15 trades reveals that 60% of losses stem from 'Entry Errors', prompting a focused review of entry criteria and execution discipline.",
      "commonMistake": "Failing to categorize mistakes, resulting in a lack of actionable insights for improvement.",
      "quickNote": "Systematic classification of mistakes is essential for effective learning.",
      "mentorText": "Every mistake is a lesson. By categorizing them, you can turn failures into stepping stones for success.",
      "mentorAnalogy": "Like a surgeon reviewing surgical outcomes to identify complications, you must dissect your trades to understand and rectify mistakes."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Implementing Data Tagging",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C4 -->\n### Data Tagging: Enhancing Trade Analysis\nTagging trade data with structured variables is crucial for effective filtering and analysis. This card outlines **the importance and methods of data tagging**.\n\n* **Tagging Protocols**: Establish a tagging system that includes variables such as 'Market Condition', 'Trade Setup', and 'Emotional State'. Each tag should be consistently applied to every trade entry.\n* **Filtering Capabilities**: Utilize tags to filter trades based on specific criteria, allowing for focused analysis on particular setups or conditions. For example, analyze all trades tagged as 'High Volatility' to assess performance under stress.\n* **Data Aggregation**: Aggregate performance metrics based on tags to identify which setups yield the best results. This can inform future trading strategies and decision-making processes.",
    "context": {
      "keyTerms": [
        {
          "term": "Data Tagging",
          "definition": "The process of assigning specific labels to data entries for easier categorization and analysis."
        }
      ],
      "whyThisMatters": "Effective tagging enhances the ability to analyze trades based on specific conditions, leading to more informed trading decisions.",
      "realLifeExample": "Tagging trades in a database with 'Breakout', 'Reversal', and 'News Impact' labels allows for targeted analysis of performance under different market scenarios.",
      "commonMistake": "Inconsistent tagging practices, which can lead to difficulties in filtering and analyzing trade data effectively.",
      "quickNote": "Structured tagging transforms raw data into actionable insights.",
      "mentorText": "Think of tagging as organizing your toolbox. When you need a specific tool, you want to find it quickly and efficiently.",
      "mentorAnalogy": "Just as a librarian categorizes books for easy access, you must tag your trades to ensure you can retrieve and analyze them effectively."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Defining Key Performance Metrics",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C5 -->\n### Core Scenario: Key Performance Metrics Identification\nAccurate evaluation of trading performance hinges on the definition of key performance metrics. This card outlines **essential metrics that must be included in your performance database**.\n\n* **Win Rate Calculation**: Track the percentage of profitable trades relative to total trades executed. For example, if you executed 100 trades and 55 were profitable, your win rate is 55%.\n* **Average Trade Duration**: Measure the average time each trade is held. This can be calculated by summing the duration of all trades and dividing by the number of trades. For instance, if your trades lasted an average of 2 hours, this metric helps assess your trading pace.\n* **Risk-Reward Ratio**: Evaluate the average profit earned per trade against the average loss. If your average profit is $300 and your average loss is $100, your risk-reward ratio is 3:1, indicating a favorable trading strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Win Rate",
          "definition": "The percentage of profitable trades compared to total trades."
        },
        {
          "term": "Average Trade Duration",
          "definition": "The mean time a trade is held before closure."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of average profit to average loss per trade."
        }
      ],
      "whyThisMatters": "Defining these metrics allows for a structured approach to evaluating trading performance and identifying areas for improvement.",
      "realLifeExample": "For instance, a trader logs 150 trades over a month, achieving a win rate of 60%, with an average trade duration of 3 hours and a risk-reward ratio of 2:1, providing a clear performance snapshot.",
      "commonMistake": "Failing to consistently update and review these metrics can lead to an inaccurate assessment of trading performance.",
      "quickNote": "Key performance metrics are essential for objective performance evaluation.",
      "mentorText": "You need to establish clear metrics to evaluate your performance. Think of it as setting benchmarks for your trading strategy. If you don't measure, you can't improve.",
      "mentorAnalogy": "Like an aerospace engineer analyzing flight data, you must track performance metrics to ensure your trading strategy is flying smoothly."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Optimizing Database for Analysis",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C6 -->\n### Core Scenario: Database Optimization Techniques\nAs your trade database expands, optimization becomes critical for efficient analysis. This card highlights **strategies to enhance database performance**.\n\n* **Indexing Key Fields**: Implement indexing on frequently queried fields such as trade date, instrument, and outcome. This reduces retrieval time significantly. For example, indexing a database with 10,000 trades can cut search times from minutes to seconds.\n* **Data Normalization**: Structure your database to eliminate redundancy by organizing data into related tables. For instance, separating trade details from performance metrics allows for easier updates and analysis without duplicating data.\n* **Archiving Old Data**: Regularly archive trades older than a specified timeframe (e.g., 12 months) to maintain database performance. This prevents slowdowns and keeps the active dataset manageable for analysis.",
    "context": {
      "keyTerms": [
        {
          "term": "Indexing",
          "definition": "Creating a data structure that improves the speed of data retrieval operations."
        },
        {
          "term": "Data Normalization",
          "definition": "Organizing data to reduce redundancy and improve integrity."
        },
        {
          "term": "Archiving",
          "definition": "Moving older data to a separate storage to optimize performance."
        }
      ],
      "whyThisMatters": "An optimized database ensures that analysis remains swift and effective, even as data volume increases.",
      "realLifeExample": "For example, a trader with a database of 50,000 trades implements indexing and normalization, resulting in a 70% reduction in query times, allowing for faster decision-making.",
      "commonMistake": "Neglecting to optimize the database can lead to sluggish performance and hinder timely analysis.",
      "quickNote": "Database optimization is essential for maintaining analysis efficiency as data grows.",
      "mentorText": "Think of your database like a library. If it's organized, you can find what you need quickly. If it's cluttered, you'll waste time searching.",
      "mentorAnalogy": "Just as a surgeon organizes instruments for efficiency during an operation, you must structure your database for optimal analysis."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Tracking Errors Over Time",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C7 -->\n### Core Scenario: Error Logging and Analysis\nTracking errors is vital for understanding performance and refining strategies. This card details **how to effectively log and analyze trading errors**.\n\n* **Error Classification System**: Develop a system to categorize errors, such as execution mistakes, strategy misapplication, or emotional decisions. For instance, if you miscalculated a stop-loss on 5 trades, log this under 'Execution Errors'.\n* **Frequency Analysis**: Maintain a log that tracks the frequency of each error type over time. If emotional decisions account for 30% of your errors over the last quarter, this highlights a critical area for improvement.\n* **Impact Assessment**: Evaluate the financial impact of errors by calculating the total loss incurred due to mistakes. For example, if execution errors resulted in a $1,500 loss over 10 trades, this quantifies the need for corrective measures.",
    "context": {
      "keyTerms": [
        {
          "term": "Error Classification",
          "definition": "The process of categorizing mistakes to identify patterns."
        },
        {
          "term": "Frequency Analysis",
          "definition": "Tracking how often specific errors occur over time."
        },
        {
          "term": "Impact Assessment",
          "definition": "Evaluating the financial consequences of errors."
        }
      ],
      "whyThisMatters": "Understanding errors provides insights into trading behavior and areas needing improvement, leading to more disciplined trading.",
      "realLifeExample": "A trader logs 20 execution errors over a month, leading to a cumulative loss of $2,000. This data prompts a review of their execution process.",
      "commonMistake": "Failing to categorize and analyze errors can result in repeated mistakes and stagnation in performance improvement.",
      "quickNote": "Tracking errors is essential for identifying and correcting performance issues.",
      "mentorText": "You must keep a detailed log of your errors. Every mistake is a lesson; if you ignore them, you’ll keep repeating the same ones.",
      "mentorAnalogy": "Like a pilot reviewing flight logs for errors, you must analyze your trading mistakes to avoid future mishaps."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Synthesizing Data for Insights",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C8 -->\n### Core Scenario: Data Synthesis for Actionable Insights\nSynthesizing data from your performance database is crucial for deriving actionable insights. This card explains **how to effectively analyze and synthesize trade data**.\n\n* **Trend Identification**: Use statistical methods to identify trends in performance metrics over time. For instance, if your win rate has steadily increased from 50% to 70% over six months, this indicates a successful strategy evolution.\n* **Correlation Analysis**: Examine relationships between different metrics, such as the impact of average trade duration on win rate. If shorter trades correlate with higher win rates, this insight can inform future trading strategies.\n* **Reporting Framework**: Establish a regular reporting framework to summarize findings and insights from your data. For example, generate monthly reports that highlight key performance trends and areas for improvement, ensuring you remain focused on actionable data.",
    "context": {
      "keyTerms": [
        {
          "term": "Trend Identification",
          "definition": "The process of recognizing patterns in performance data over time."
        },
        {
          "term": "Correlation Analysis",
          "definition": "Examining relationships between different performance metrics."
        },
        {
          "term": "Reporting Framework",
          "definition": "A structured approach to summarizing and presenting data insights."
        }
      ],
      "whyThisMatters": "Synthesizing data enables traders to make informed decisions based on historical performance and emerging trends.",
      "realLifeExample": "A trader analyzes their performance data and discovers that trades held for less than 2 hours yield a 75% win rate, prompting a strategy adjustment to focus on shorter trades.",
      "commonMistake": "Overlooking the synthesis of data can lead to missed opportunities for strategic adjustments based on performance trends.",
      "quickNote": "Data synthesis transforms raw performance metrics into actionable insights.",
      "mentorText": "You need to analyze your data to find patterns. If you don’t look for trends, you’re flying blind without a flight plan.",
      "mentorAnalogy": "Like a chef tasting and adjusting a recipe based on feedback, you must refine your trading strategy based on synthesized data insights."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Revising Database Structures",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C9 -->\n### Core Scenario: Adapting Database Structures\nAs trading strategies evolve, database structures must be revised to capture new variables and insights. This card outlines **the systematic approach to revising your performance database**.\n\n* **Version Control Protocol**: Implement a versioning system for your database schema. Each revision should be documented with a clear rationale for changes, allowing for easy rollback if necessary.\n* **Variable Assessment Framework**: Regularly assess the relevance of existing variables and introduce new ones based on strategy evolution. For instance, if a new risk management technique is adopted, include metrics that track its effectiveness.\n* **Stakeholder Feedback Loop**: Establish a routine feedback mechanism with stakeholders to identify gaps in data collection and structure. This ensures that the database remains aligned with strategic objectives and user needs.",
    "context": {
      "keyTerms": [
        {
          "term": "Version Control",
          "definition": "A method for managing changes to the database schema over time."
        },
        {
          "term": "Variable Assessment",
          "definition": "The process of evaluating the relevance of data points in the database."
        }
      ],
      "whyThisMatters": "Revising your database structure ensures that it remains a valuable tool for performance analysis as trading strategies change.",
      "realLifeExample": "After transitioning to a new algorithmic trading strategy, the database was revised to include metrics for execution speed and slippage, enhancing performance tracking.",
      "commonMistake": "Failing to document changes in the database structure can lead to confusion and inconsistencies in data interpretation.",
      "quickNote": "Maintain a dynamic database structure that evolves with your trading strategies.",
      "mentorText": "When you adapt your trading strategies, your database must evolve too. Think of it as a living document that needs to reflect your current practices.",
      "mentorAnalogy": "Consider a software development project; just as code is refactored to improve functionality, your database must be updated to capture the latest trading insights."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Visualizing Trade Data",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C10 -->\n### Core Scenario: Effective Data Visualization\nVisualizing trade data is essential for communicating insights clearly to stakeholders. This card details **the principles of effective trade data visualization**.\n\n* **Chart Selection Criteria**: Choose the appropriate chart type based on the data being presented. For instance, use line charts for trend analysis over time and bar charts for categorical comparisons.\n* **Data Clarity Standards**: Ensure that visualizations are clear and free of clutter. Use consistent color schemes and labels to enhance readability and comprehension.\n* **Interactive Dashboards**: Implement interactive dashboards that allow stakeholders to filter and drill down into specific data points. This enables deeper insights and tailored analysis based on user needs.",
    "context": {
      "keyTerms": [
        {
          "term": "Chart Selection",
          "definition": "The process of choosing the appropriate type of chart for data representation."
        },
        {
          "term": "Interactive Dashboard",
          "definition": "A visual interface that allows users to interact with data dynamically."
        }
      ],
      "whyThisMatters": "Effective visualization of trade data enhances understanding and facilitates informed decision-making among stakeholders.",
      "realLifeExample": "A quarterly performance review utilized an interactive dashboard displaying trade performance metrics, enabling stakeholders to analyze data trends and make strategic decisions.",
      "commonMistake": "Overloading visualizations with excessive data can obscure key insights and confuse the audience.",
      "quickNote": "Use clear and purposeful visualizations to communicate trade data effectively.",
      "mentorText": "When presenting trade data, clarity is your ally. Choose your charts wisely and keep your visuals straightforward to convey your message.",
      "mentorAnalogy": "Think of a well-designed infographic; it distills complex information into digestible visuals, just like your trade data should."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Ensuring Database Security",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C11 -->\n### Core Scenario: Database Security Protocols\nSecuring your trade database is critical to protect sensitive information from unauthorized access. This card outlines **key strategies for database security**.\n\n* **Access Control Measures**: Implement strict access controls based on user roles. Only authorized personnel should have access to sensitive trade data, minimizing the risk of data breaches.\n* **Encryption Standards**: Utilize encryption for data at rest and in transit. This ensures that even if data is intercepted, it remains unreadable without the proper decryption keys.\n* **Regular Security Audits**: Conduct periodic security audits to identify vulnerabilities and ensure compliance with industry standards. This proactive approach helps in mitigating potential security threats.",
    "context": {
      "keyTerms": [
        {
          "term": "Access Control",
          "definition": "The practice of restricting access to data based on user roles."
        },
        {
          "term": "Encryption",
          "definition": "The process of converting data into a coded format to prevent unauthorized access."
        }
      ],
      "whyThisMatters": "Database security is paramount to protect proprietary trading strategies and sensitive client information from cyber threats.",
      "realLifeExample": "After a security audit revealed vulnerabilities, the trading firm implemented role-based access controls and encrypted all sensitive trade data, significantly enhancing security.",
      "commonMistake": "Neglecting to regularly update security protocols can leave databases exposed to new threats.",
      "quickNote": "Prioritize database security to safeguard sensitive trade information.",
      "mentorText": "Your database is a treasure trove of information; treat it with the utmost care. Implement robust security measures to protect it from unauthorized access.",
      "mentorAnalogy": "Think of your database like a bank vault; without proper locks and security systems, anyone could access your valuable assets."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Integrating External Data Sources",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C12 -->\n### Core Scenario: Enhancing Trade Data with External Sources\nIntegrating external data sources into your trade database can provide additional context and depth. This card explains **the process of effectively incorporating external data**.\n\n* **Source Validation Process**: Establish a rigorous validation process for external data sources. Ensure that data is accurate, reliable, and relevant to your trading strategies before integration.\n* **Data Mapping Techniques**: Create a mapping framework to align external data with existing database variables. This ensures seamless integration and consistency in data interpretation.\n* **Real-Time Data Feeds**: Consider implementing real-time data feeds from reputable sources. This enhances the richness of your database and allows for timely decision-making based on current market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Source Validation",
          "definition": "The process of verifying the accuracy and reliability of external data sources."
        },
        {
          "term": "Data Mapping",
          "definition": "Aligning external data with existing database variables for consistency."
        }
      ],
      "whyThisMatters": "Integrating external data enriches your trade database, providing a more comprehensive view of market dynamics and improving decision-making.",
      "realLifeExample": "By integrating economic indicators from an external database, a trading firm was able to enhance its performance analysis, correlating trade outcomes with macroeconomic trends.",
      "commonMistake": "Failing to validate external data sources can lead to inaccurate analyses and misguided trading decisions.",
      "quickNote": "Enhance your trade database by integrating validated external data sources.",
      "mentorText": "Think of external data as the seasoning to your trading strategy; it adds flavor and depth, but only if sourced and integrated correctly.",
      "mentorAnalogy": "Just as a chef combines fresh ingredients to create a gourmet dish, you must blend external data with your internal metrics for a richer analysis."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "concept",
    "title": "Conducting Database Audits",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C13 -->\n### Core Scenario: Database Integrity Verification\nRegular audits of your trade database are essential for maintaining data integrity and accuracy. This card outlines **the systematic approach to conducting audits** to ensure your performance metrics remain reliable.\n\n* **Audit Frequency**: Establish a routine audit schedule, ideally bi-weekly or monthly, depending on trade volume. Consistency in auditing helps identify discrepancies early and maintains data quality over time.\n* **Data Validation Techniques**: Implement checks such as cross-referencing trade entries with broker statements and verifying that all trades are logged with correct timestamps and prices. Use automated scripts where possible to flag anomalies.\n* **Error Classification System**: Develop a classification system for errors found during audits, categorizing them by severity and type (e.g., data entry errors, missing trades). This allows for targeted corrective actions and trend analysis over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Data Integrity",
          "definition": "The accuracy and consistency of data over its lifecycle."
        },
        {
          "term": "Audit Trail",
          "definition": "A record that traces the detailed history of data entries and changes."
        }
      ],
      "whyThisMatters": "Maintaining data integrity through regular audits directly impacts the reliability of performance analysis and decision-making.",
      "realLifeExample": "During a bi-weekly audit, a trader discovers that 15 trades executed at 1.2500 on EURUSD were incorrectly logged as 1.2550, affecting performance metrics significantly.",
      "commonMistake": "Failing to conduct audits regularly, leading to compounded errors that skew performance evaluations.",
      "quickNote": "Regular audits ensure your trade data remains accurate and actionable.",
      "mentorText": "Think of your trade database as a financial ledger. Just as accountants regularly reconcile accounts to ensure accuracy, you must audit your database to catch errors before they affect your trading decisions.",
      "mentorAnalogy": "Conducting a database audit is like a pilot performing pre-flight checks. Each component must be verified to ensure a safe and successful flight."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  },
  {
    "type": "practice",
    "title": "Practical Application of Database Concepts",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C14 -->\n### Core Scenario: Hands-On Database Structuring\nEngaging in practical exercises reinforces the theoretical concepts of structuring a performance database. This card provides **real-world scenarios to apply your knowledge** effectively.\n\n* **Scenario Simulation**: Create a mock database using historical trade data. Include variables such as entry price, exit price, trade duration, and setup tags. Ensure to categorize trades by their outcomes (win/loss) and analyze the results.\n* **Error Identification Drill**: Review a provided dataset containing intentional errors. Identify and correct these errors using the classification system developed in the previous card. This exercise sharpens your attention to detail and reinforces the importance of accuracy.\n* **Performance Metrics Calculation**: Calculate key performance metrics such as win rate, average profit/loss per trade, and maximum drawdown based on your mock database. Use these metrics to assess the effectiveness of your trading strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Mock Database",
          "definition": "A simulated database used for practice and training purposes."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate trading performance."
        }
      ],
      "whyThisMatters": "Practical application solidifies understanding and prepares traders to manage their performance databases effectively.",
      "realLifeExample": "In a simulated environment, a trader logs 50 trades, categorizes them by strategy, and discovers that a specific setup has a 70% win rate, prompting further analysis.",
      "commonMistake": "Overlooking the importance of categorizing trades, which leads to ineffective performance analysis.",
      "quickNote": "Hands-on practice enhances your ability to structure and analyze your performance database.",
      "mentorText": "Engage with your data. The more you practice structuring and analyzing your database, the more intuitive it will become to identify trends and areas for improvement.",
      "mentorAnalogy": "Practicing database structuring is akin to a chef mastering recipes. Each ingredient must be measured and categorized to create a successful dish."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are tasked with identifying errors in a trade dataset. What is the first step you should take?",
      "options": [
        {
          "id": "0",
          "text": "Cross-reference with broker statements.",
          "isCorrect": true,
          "feedback": "Cross-referencing ensures that your trade data aligns with official records, highlighting discrepancies."
        },
        {
          "id": "1",
          "text": "Start calculating performance metrics.",
          "isCorrect": false,
          "feedback": "Calculating performance metrics without verifying data can lead to misleading conclusions."
        },
        {
          "id": "2",
          "text": "Categorize trades by strategy.",
          "isCorrect": false,
          "feedback": "Categorization is important but should follow data verification to ensure accuracy."
        },
        {
          "id": "3",
          "text": "Ignore minor discrepancies.",
          "isCorrect": false,
          "feedback": "Ignoring discrepancies can lead to larger issues in performance evaluation."
        }
      ]
    },
    "visualKey": "metric-database-grid"
  },
  {
    "type": "summary",
    "title": "Summary of Key Learnings",
    "label": "Core Track",
    "body": "<!-- M8.7-core-C15 -->\n### Core Scenario: Recap of Performance Database Structuring\nA well-structured performance database is critical for informed trading decisions. This card summarizes **the essential concepts covered in the module** to reinforce their importance.\n\n* **Structured Variables**: Ensure all trade entries include structured variables such as entry/exit prices, timestamps, and setup tags. This standardization facilitates easier analysis and comparison.\n* **Regular Audits**: Conduct regular audits to maintain data integrity and accuracy. Establish a systematic approach to identify and rectify errors in your database, ensuring reliable performance metrics.\n* **Practical Application**: Engage in hands-on exercises to reinforce theoretical concepts. Simulating real-world scenarios enhances your ability to structure and analyze your performance database effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Structured Variables",
          "definition": "Defined parameters used to log trade data consistently."
        },
        {
          "term": "Performance Analysis",
          "definition": "The process of evaluating trading results based on recorded data."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of database structuring directly correlates with improved trading outcomes and strategy refinement.",
      "realLifeExample": "A trader reviews their structured database and identifies a consistent pattern of losses associated with a specific setup, prompting a strategic pivot.",
      "commonMistake": "Neglecting the importance of structured variables, leading to inconsistent data that hampers analysis.",
      "quickNote": "A structured performance database is foundational for effective trading analysis.",
      "mentorText": "Reflect on the importance of every entry in your database. Each trade tells a story, and a well-structured database allows you to read that story clearly and make informed decisions.",
      "mentorAnalogy": "Think of your performance database as an architect's blueprint. Every detail must be precise for the final structure to stand strong and serve its purpose."
    },
    "taskData": null,
    "visualKey": "metric-database-grid"
  }
];
