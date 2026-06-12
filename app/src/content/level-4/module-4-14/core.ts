import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Trade Readiness Metrics",
    "label": "Core Track",
    "body": "### Trade Readiness Metrics: Grading Framework\nEvaluating trade readiness requires a structured approach to assess daily, weekly, and session timing parameters. This card outlines **how to utilize a grading matrix to determine execution viability**.\n\n* **Matrix Components**: The grading matrix should include metrics such as daily volatility, session overlap, and weekly trend alignment, each rated on a scale from 1 to 5.\n* **Threshold Criteria**: A minimum cumulative score of 12 is necessary for trade readiness, indicating favorable conditions across all parameters.\n* **Execution Timing**: Ensure that trades are only executed during high-confidence periods, ideally during session overlaps or major economic releases for maximum volatility.",
    "visualKey": "tp-checklist-intro",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Daily Session Timing Evaluation",
    "label": "Core Track",
    "body": "### Daily Session Timing: Optimal Entry Assessment\nAssessing daily session timing is critical for identifying optimal entry points while avoiding adverse market conditions. This card explains **how to evaluate session parameters effectively**.\n\n* **Session Overlap Analysis**: Identify periods where major sessions overlap, such as the London and New York sessions, which typically yield increased volatility and liquidity.\n* **Volatility Metrics**: Use the Average True Range (ATR) to gauge expected price movement during the session; aim for sessions with an ATR above 20 pips for major pairs.\n* **Economic Calendar Review**: Cross-reference session timing with the economic calendar to avoid entering trades just before high-impact news releases, which can lead to erratic price behavior.",
    "visualKey": "session-readiness-checks",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Weekly Cycle Analysis",
    "label": "Core Track",
    "body": "### Weekly Cycle Analysis: Narrative Continuity\nAnalyzing the continuity of market narratives over a weekly cycle is essential for aligning trading strategies with prevailing trends. This card delves into **how to assess weekly market narratives**.\n\n* **Trend Identification**: Utilize weekly candlestick patterns to identify prevailing trends; a series of higher highs and higher lows indicates a bullish narrative.\n* **News Impact Assessment**: Evaluate the impact of weekly economic data releases on market sentiment, such as Non-Farm Payrolls or CPI, which can shift narratives significantly.\n* **Correlation Checks**: Analyze correlations between major currency pairs and commodities on a weekly basis to confirm or refute the prevailing narrative, ensuring alignment in strategy.",
    "visualKey": "narrative-continuity",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Integrating Timing Parameters",
    "label": "Core Track",
    "body": "### Integrating Timing Parameters: Cohesive Checklist Development\nCreating a cohesive checklist that integrates various timing parameters enhances decision-making prior to executing trades. This card outlines **the process for developing an effective timing checklist**.\n\n* **Parameter Compilation**: Gather key timing parameters including daily session volatility, weekly trend direction, and economic calendar events into a single document for easy reference.\n* **Checklist Scoring**: Assign scores to each parameter based on their current state; for instance, a score of 1-5 for volatility and trend strength, with a total score of 15 indicating optimal conditions.\n* **Execution Protocols**: Establish clear protocols for trade execution based on checklist outcomes; only proceed with trades that meet or exceed the established threshold for readiness.",
    "visualKey": "timing-checks",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Debriefing Trade Readiness Outcomes",
    "label": "Core Track",
    "body": "### Trade Readiness: Debriefing Outcomes\nAnalyzing the results of trade readiness assessments is essential for refining execution strategies. This card details **how to systematically debrief and improve future trade decisions**.\n\n* **Outcome Analysis**: Review each trade readiness assessment outcome by categorizing results into successful and unsuccessful trades based on predefined criteria, such as risk-reward ratios and timing accuracy.\n* **Feedback Loop**: Establish a feedback mechanism where insights from both successful and unsuccessful trades are documented, focusing on what worked and what didn't in terms of timing and price levels.\n* **Strategy Refinement**: Use the insights gained from the debrief to adjust your execution strategies, ensuring future trades are aligned with the most effective timing and price parameters identified during the analysis.",
    "context": {
      "keyTerms": [
        {
          "term": "Debriefing",
          "definition": "The process of reviewing and analyzing trade outcomes to improve future strategies."
        }
      ],
      "whyThisMatters": "Systematic debriefing enhances the trader's ability to adapt strategies based on real outcomes, leading to improved decision-making.",
      "realLifeExample": "After executing a trade on GBPUSD at 1.3500 during a high-impact news release, the trader analyzes the outcome, noting that the trade was successful due to proper timing aligned with market volatility.",
      "commonMistake": "Failing to document and analyze both successful and unsuccessful trades, leading to repeated mistakes.",
      "quickNote": "Debriefing is critical for continuous improvement in trade execution.",
      "mentorText": "When you debrief, focus on the specifics of what happened. Did your timing align with market movements? Document everything to refine your approach.",
      "mentorAnalogy": "Think of debriefing like a post-flight analysis in aviation; pilots review every flight to identify areas for improvement, ensuring safer and more efficient future flights."
    },
    "taskData": null,
    "visualKey": "tp-checklist-debrief"
  },
  {
    "type": "concept",
    "title": "Weekly Timing Strategies",
    "label": "Core Track",
    "body": "### Weekly Timing: Strategy Development\nDeveloping strategies based on weekly timing assessments is crucial for enhancing execution and managing risk. This card outlines **how to create actionable strategies rooted in weekly market dynamics**.\n\n* **Weekly Cycle Analysis**: Identify key weekly market cycles by analyzing historical price movements and volatility patterns, focusing on specific days that exhibit consistent behavior.\n* **Timing Alignment**: Align your trading strategies with the identified weekly cycles, ensuring that execution occurs during optimal periods, such as the start of the week or after major economic releases.\n* **Risk Management Integration**: Incorporate risk management protocols that adjust position sizes based on the volatility expected during specific weekly periods, ensuring that risk exposure is minimized during high-impact times.",
    "context": {
      "keyTerms": [
        {
          "term": "Weekly Cycle",
          "definition": "The recurring patterns in market behavior observed over a week."
        }
      ],
      "whyThisMatters": "Strategic alignment with weekly cycles enhances the probability of successful trades by leveraging predictable market behavior.",
      "realLifeExample": "A trader notes that EURUSD typically rallies on Wednesdays after the US CPI release, adjusting their strategy to enter long positions during this period.",
      "commonMistake": "Ignoring historical weekly patterns and trading randomly without a structured timing strategy.",
      "quickNote": "Weekly timing strategies optimize execution and risk management.",
      "mentorText": "Look at the week ahead and identify your key timing windows. Align your trades with those windows to maximize your chances of success.",
      "mentorAnalogy": "Creating weekly timing strategies is like a chef preparing a menu based on seasonal ingredients; you must know when to source the best produce for optimal dishes."
    },
    "taskData": null,
    "visualKey": "tp-checklist-intro"
  },
  {
    "type": "concept",
    "title": "Session Overlap and Market Dynamics",
    "label": "Core Track",
    "body": "### Session Overlap: Analyzing Market Dynamics\nUnderstanding the impact of session overlaps is vital for assessing market dynamics and trade readiness. This card explains **how to analyze session overlaps to optimize execution timing**.\n\n* **Overlap Identification**: Identify key market session overlaps, such as the London and New York sessions, which typically create increased volatility and liquidity.\n* **Dynamic Behavior**: Analyze how price action behaves during these overlaps, noting patterns such as breakouts or reversals that occur more frequently when multiple markets are active.\n* **Execution Timing**: Plan trade entries during these overlaps to capitalize on heightened market activity, ensuring that your execution aligns with the most favorable conditions for your strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two or more market sessions are active simultaneously, leading to increased volatility."
        }
      ],
      "whyThisMatters": "Session overlaps often present the best opportunities for execution due to increased liquidity and volatility.",
      "realLifeExample": "During the overlap of the London and New York sessions, a trader notices GBPJPY breaking through resistance at 150.50, entering a long position as volatility spikes.",
      "commonMistake": "Trading during low liquidity periods without recognizing the benefits of session overlaps.",
      "quickNote": "Session overlaps are prime times for execution due to increased market activity.",
      "mentorText": "Focus on the times when sessions overlap; that's when the market is most alive. Plan your trades around these periods for better execution.",
      "mentorAnalogy": "Think of session overlaps like rush hour traffic; when multiple routes converge, the flow is dynamic and offers the best opportunities to navigate effectively."
    },
    "taskData": null,
    "visualKey": "session-readiness-checks"
  },
  {
    "type": "concept",
    "title": "Risk Assessment in Timing Checks",
    "label": "Core Track",
    "body": "### Risk Assessment: Timing Checks\nImplementing a risk assessment matrix for timing parameters is essential for evaluating potential risks before executing trades. This card illustrates **how to assess risks associated with timing**.\n\n* **Matrix Development**: Create a risk assessment matrix that categorizes timing parameters based on historical volatility and market conditions, rating each parameter's risk level from low to high.\n* **Scenario Analysis**: Conduct scenario analyses to evaluate how different timing parameters affect potential trade outcomes, focusing on high-impact news releases or market events.\n* **Pre-Execution Review**: Before executing trades, review the risk assessment matrix to ensure that the timing aligns with acceptable risk thresholds, adjusting position sizes accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Assessment Matrix",
          "definition": "A tool used to evaluate and categorize risks associated with different trading parameters."
        }
      ],
      "whyThisMatters": "A thorough risk assessment ensures that traders are aware of potential pitfalls associated with timing, leading to more informed execution decisions.",
      "realLifeExample": "Prior to entering a trade on AUDUSD during the RBA interest rate announcement, a trader reviews their risk assessment matrix, noting that the timing carries a high risk due to expected volatility.",
      "commonMistake": "Neglecting to assess timing risks, leading to unexpected losses during volatile market conditions.",
      "quickNote": "A robust risk assessment matrix is critical for informed timing decisions.",
      "mentorText": "Before you execute, always check your risk assessment matrix. It’s your safety net against unexpected market movements.",
      "mentorAnalogy": "Implementing a risk assessment matrix is akin to a surgeon evaluating patient vitals before an operation; it ensures that all risks are accounted for before proceeding."
    },
    "taskData": null,
    "visualKey": "narrative-continuity"
  },
  {
    "type": "concept",
    "title": "Synthesis of Trade Readiness Factors",
    "label": "Core Track",
    "body": "### Trade Readiness: Comprehensive Checklist\nA thorough assessment of trade readiness requires the integration of multiple factors. This card outlines **a checklist to ensure all critical parameters are evaluated before executing trades**.\n\n* **Market Conditions**: Evaluate the current market volatility, liquidity, and trend direction. Ensure that conditions align with your trading strategy and risk tolerance.\n* **Technical Indicators**: Confirm that key indicators (e.g., moving averages, RSI) support your trade thesis. All indicators should provide a cohesive signal before proceeding.\n* **Session Timing**: Assess the specific session timing (e.g., London vs. New York) to determine optimal entry points. Ensure that the timing aligns with your trading plan and the expected market behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Readiness",
          "definition": "The comprehensive evaluation of market conditions, technical indicators, and timing before executing trades."
        }
      ],
      "whyThisMatters": "A systematic checklist minimizes oversight and enhances the probability of successful trade execution.",
      "realLifeExample": "Before executing a long position on GBPUSD, check that the London session shows bullish momentum, RSI is above 50, and the market is not overly volatile.",
      "commonMistake": "Failing to consider all factors in the checklist can lead to premature or ill-timed trade entries.",
      "quickNote": "A complete checklist ensures no critical factors are overlooked.",
      "mentorText": "When preparing for a trade, I always run through my checklist. If even one factor is off, I hold back. It’s about precision, not guesswork.",
      "mentorAnalogy": "Think of this checklist like a pre-flight checklist for a pilot. Every item must be confirmed before takeoff to ensure a safe flight."
    },
    "taskData": null,
    "visualKey": "timing-checks"
  },
  {
    "type": "concept",
    "title": "Integrating Market Sentiment into Timing",
    "label": "Core Track",
    "body": "### Market Sentiment: Timing Integration\nMarket sentiment plays a pivotal role in determining trade readiness. This card illustrates **how to incorporate sentiment analysis into your timing checks for improved execution**.\n\n* **Sentiment Indicators**: Utilize tools like the Commitment of Traders (COT) report to gauge market sentiment. Identify whether the market is predominantly bullish or bearish before executing trades.\n* **News Sentiment Analysis**: Monitor news headlines and economic reports for sentiment shifts. A positive earnings report can shift sentiment, impacting timing decisions.\n* **Social Media Trends**: Analyze social media sentiment (e.g., Twitter, forums) to gauge trader sentiment. A sudden spike in bullish sentiment can signal a favorable timing window for entry.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular market or asset, often influenced by news and events."
        }
      ],
      "whyThisMatters": "Incorporating sentiment analysis into timing checks enhances the accuracy of trade readiness assessments.",
      "realLifeExample": "Before entering a short position on NASDAQ, check that sentiment indicators reflect a bearish outlook following negative earnings reports.",
      "commonMistake": "Ignoring sentiment can lead to misaligned timing, resulting in losses even when technical indicators are favorable.",
      "quickNote": "Sentiment analysis is crucial for timing trades effectively.",
      "mentorText": "I always check the sentiment before making a move. If the market feels bullish but my indicators say bearish, I wait. Timing is everything.",
      "mentorAnalogy": "Integrating sentiment into your timing is like a chef tasting a dish before serving. You adjust based on the flavors to ensure the best outcome."
    },
    "taskData": null,
    "visualKey": "tp-checklist-debrief"
  },
  {
    "type": "concept",
    "title": "Analyzing Historical Timing Patterns",
    "label": "Core Track",
    "body": "### Historical Timing Patterns: Analysis\nUnderstanding historical timing patterns can significantly enhance trade readiness assessments. This card focuses on **how to analyze past market behaviors to inform future timing decisions**.\n\n* **Pattern Recognition**: Identify recurring timing patterns in historical price data. Look for specific times of day or week when price movements are more pronounced.\n* **Statistical Analysis**: Use statistical tools to quantify the frequency and impact of historical patterns. Determine the average price movement during identified timeframes to set expectations.\n* **Backtesting**: Implement backtesting strategies to validate the effectiveness of timing patterns. Analyze past trades to see how timing influenced outcomes and refine your approach accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Historical Timing Patterns",
          "definition": "Recurring price movements observed at specific times, used to predict future market behavior."
        }
      ],
      "whyThisMatters": "Analyzing historical patterns allows traders to anticipate market behavior and improve execution timing.",
      "realLifeExample": "Reviewing historical data shows that EURUSD typically rallies 30 pips between 9:00 AM and 10:00 AM EST on Mondays, indicating a favorable entry window.",
      "commonMistake": "Overlooking historical patterns can lead to missed opportunities and poorly timed trades.",
      "quickNote": "Historical analysis is a powerful tool for predicting future timing.",
      "mentorText": "When I look at historical patterns, I’m not just seeing numbers; I’m seeing opportunities. Use the past to inform your future trades.",
      "mentorAnalogy": "Analyzing historical timing patterns is like studying flight paths of aircraft. Understanding where turbulence occurs helps pilots plan smoother routes."
    },
    "taskData": null,
    "visualKey": "tp-checklist-intro"
  },
  {
    "type": "concept",
    "title": "Impact of Economic Indicators on Timing",
    "label": "Core Track",
    "body": "### Economic Indicators: Timing Impact\nEconomic indicators significantly influence market timing parameters. This card details **how to assess the impact of key indicators on trade execution decisions**.\n\n* **Key Indicators**: Identify critical economic indicators (e.g., GDP, employment rates) that affect market sentiment and timing. Recognize their release schedules and historical impact on price movements.\n* **Correlation Analysis**: Analyze the correlation between economic releases and market reactions. Determine how specific indicators historically affect volatility and timing for various instruments.\n* **Pre-Release Positioning**: Adjust your trading strategy based on upcoming economic releases. Position trades accordingly to capitalize on expected market movements post-release.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Indicators",
          "definition": "Statistical data that reflects the economic performance of a country, influencing market conditions."
        }
      ],
      "whyThisMatters": "Understanding the timing of economic indicators helps traders anticipate market movements and adjust strategies effectively.",
      "realLifeExample": "Before the U.S. Non-Farm Payroll report release at 8:30 AM EST, analyze previous months’ impacts on USD pairs to gauge potential volatility.",
      "commonMistake": "Failing to account for economic indicators can lead to unexpected market movements and losses.",
      "quickNote": "Economic indicators are critical for timing trades effectively.",
      "mentorText": "I always check the economic calendar. If a major report is due, I prepare for volatility. Timing is everything when news hits.",
      "mentorAnalogy": "Monitoring economic indicators is like a surgeon checking vital signs before an operation. You need to know the state of the market before proceeding."
    },
    "taskData": null,
    "visualKey": "session-readiness-checks"
  },
  {
    "type": "concept",
    "title": "Practical Application of Readiness Checklists",
    "label": "Core Track",
    "body": "### Trade Readiness: Practical Application of Checklists\nEngaging in real-time scenarios reinforces the effectiveness of trade readiness checklists. This card focuses on **how to implement checklists during live market conditions**.\n\n* **Checklist Components**: Ensure your checklist includes session times, volatility indicators, and economic news releases relevant to your trading strategy.\n* **Live Scenario Execution**: During the New York session, apply your checklist to assess whether the S&P 500 futures meet your criteria before entering a trade.\n* **Feedback Loop**: After executing a trade, review your checklist application to identify areas for improvement and ensure adherence to your trading plan.",
    "context": {
      "keyTerms": [
        {
          "term": "Readiness Checklist",
          "definition": "A structured list of criteria to evaluate before executing trades."
        }
      ],
      "whyThisMatters": "Applying readiness checklists in real-time enhances decision-making accuracy and reduces impulsive trading actions.",
      "realLifeExample": "On a Tuesday at 10:00 AM EST, the S&P 500 futures show a breakout above 4,200 while your checklist confirms low volatility and no major economic releases, validating a long position.",
      "commonMistake": "Traders often overlook the importance of adjusting their checklists based on real-time market conditions.",
      "quickNote": "Real-time application of checklists sharpens execution discipline.",
      "mentorText": "When you approach the market, think of your checklist as your pre-flight inspection. If everything checks out, you’re cleared for takeoff.",
      "mentorAnalogy": "Just like a surgeon follows a strict protocol before an operation, your checklist ensures you don’t miss critical factors before executing a trade."
    },
    "taskData": null,
    "visualKey": "narrative-continuity"
  },
  {
    "type": "practice",
    "title": "Summary of Core Trade Readiness",
    "label": "Core Track",
    "body": "### Trade Readiness: Summary of Core Concepts\nThis card consolidates the essential elements of grading trade readiness using timing parameters. Understanding these concepts is vital for **systematic execution in trading**.\n\n* **Timing Parameters**: Evaluate the market’s current session against your trading strategy’s timing criteria, ensuring alignment with volatility and liquidity expectations.\n* **Session Dynamics**: Recognize that different sessions (Asian, London, New York) exhibit distinct behaviors; adjust your readiness criteria accordingly.\n* **Execution Discipline**: Maintain a strict adherence to your checklist, ensuring that every trade aligns with your predefined readiness standards.",
    "context": {
      "keyTerms": [
        {
          "term": "Timing Parameters",
          "definition": "Specific criteria related to time that influence trade execution decisions."
        }
      ],
      "whyThisMatters": "A systematic approach to grading trade readiness reduces emotional decision-making and enhances overall trading performance.",
      "realLifeExample": "During the London session, the GBP/USD shows a bullish trend at 7:30 AM EST, and your checklist confirms that the pair aligns with your timing parameters for a long entry.",
      "commonMistake": "Failing to adjust readiness criteria based on session dynamics can lead to missed opportunities or unnecessary losses.",
      "quickNote": "Systematic execution hinges on a thorough understanding of timing parameters.",
      "mentorText": "Think of grading your trade readiness like a pilot checking weather conditions before takeoff. If the conditions aren’t right, you don’t fly.",
      "mentorAnalogy": "Just as an architect reviews blueprints before construction, you must evaluate your timing parameters before executing trades."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are considering a trade on the EUR/USD during the New York session at 1:00 PM EST. Your checklist indicates high volatility but low liquidity. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Proceed with the trade since volatility is high.",
          "isCorrect": false,
          "feedback": "High volatility without sufficient liquidity can lead to slippage and increased risk."
        },
        {
          "id": "1",
          "text": "Wait for better liquidity conditions before executing.",
          "isCorrect": true,
          "feedback": "Waiting for improved liquidity aligns with your readiness criteria and reduces execution risk."
        },
        {
          "id": "2",
          "text": "Execute the trade immediately to capitalize on volatility.",
          "isCorrect": false,
          "feedback": "Executing without considering liquidity can lead to unfavorable trade conditions."
        },
        {
          "id": "3",
          "text": "Reassess your checklist for any overlooked factors.",
          "isCorrect": false,
          "feedback": "While reassessing is good, the immediate action should focus on liquidity conditions."
        }
      ]
    },
    "visualKey": "timing-checks"
  },
  {
    "type": "summary",
    "title": "Timing Eligibility Checklist Synthesis",
    "label": "Core Track",
    "body": "### Advanced Time & Price: Core Application\nThis card delves into advanced applications of Time & Price Checklists specific to Core trading. Understanding timing filters and session dynamics is essential for **maximizing trade effectiveness**.\n\n* **Timing Filters**: Implement filters that assess the overlap of trading sessions to identify optimal entry points, particularly during high-impact news releases.\n* **Session Dynamics**: Analyze how different market sessions influence price action; for instance, the New York session often sees increased volatility post-economic data releases.\n* **Checklist Adaptation**: Regularly adapt your checklist to incorporate findings from previous trades, ensuring it evolves with market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Timing Filters",
          "definition": "Criteria used to determine the optimal timing for trade execution based on market conditions."
        }
      ],
      "whyThisMatters": "Advanced understanding of timing filters and session dynamics enhances the precision of trade entries and exits.",
      "realLifeExample": "On a Wednesday at 8:30 AM EST, the USD/CAD reacts sharply to the CPI release; your checklist confirms the overlap of the New York session, validating a short position entry.",
      "commonMistake": "Traders often neglect to adjust their checklists based on evolving market dynamics, leading to ineffective trade execution.",
      "quickNote": "Advanced applications of timing filters refine your trading strategy.",
      "mentorText": "Think of your checklist as a dynamic map that adapts to the terrain of the market. If the landscape changes, so should your route.",
      "mentorAnalogy": "Like a seasoned navigator adjusting course based on real-time weather data, you must adapt your trading checklist to current market conditions."
    },
    "taskData": null,
    "visualKey": "tp-checklist-debrief"
  }
];
