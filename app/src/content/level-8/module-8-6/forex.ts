import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Logging Forex Spread Dynamics",
    "label": "Forex Track",
    "body": "<!-- M8.6-forex-C1 -->\n### Core Scenario: Analyzing Spread Impact\nAccurate logging of Forex spreads during trading sessions provides insights into their effect on profitability. This card details **how to systematically record and analyze spread variations**.\n\n* **Spread Measurement Protocol**: Record the bid-ask spread at entry and exit points for each trade. For example, if you enter a EURUSD position at 1.0840 with a spread of 2 pips, note both the entry price and spread.\n* **Profitability Correlation**: Analyze how spread fluctuations correlate with trade outcomes. If a trade closes at 1.0850 with a 3-pip spread, calculate the effective profit by subtracting the spread from the gross profit.\n* **Session Spread Trends**: Maintain a daily log of average spreads across different sessions. For instance, if spreads widen during the London session, adjust your strategy accordingly for future trades.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Spread",
          "definition": "The difference between the bid and ask price of a currency pair."
        }
      ],
      "whyThisMatters": "Understanding spread dynamics is essential for calculating true trade profitability and refining execution strategies.",
      "realLifeExample": "During the NY session, logging a GBPUSD trade entered at 1.3000 with a 2-pip spread and exited at 1.3020, reveals a net profit of 18 pips after accounting for spread costs.",
      "commonMistake": "Failing to log the spread at both entry and exit leads to inaccurate profitability assessments.",
      "quickNote": "Log bid-ask spreads to accurately assess trade profitability.",
      "mentorText": "When you log your spreads, think of them as the cost of doing business. If you don’t track these costs, you’re flying blind.",
      "mentorAnalogy": "Logging spreads is akin to a pilot monitoring fuel consumption; without this data, you cannot assess the efficiency of your flight path."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Documenting Fill Times for Trades",
    "label": "Forex Track",
    "body": "<!-- M8.6-forex-C2 -->\n### Core Scenario: Tracking Execution Efficiency\nLogging fill times for Forex trades is critical for assessing execution efficiency and identifying slippage. This card outlines **how to document and evaluate fill times effectively**.\n\n* **Fill Time Logging**: Record the exact time a trade is executed. For example, if you place a trade on AUDCAD at 0.9500 and it fills at 10:05:30, document this timestamp for analysis.\n* **Slippage Analysis**: Compare fill times against market conditions. If a trade fills at 0.9505 during high volatility, note the time and market context to assess slippage impact.\n* **Session Comparison**: Maintain a log of fill times across different trading sessions. If fills are consistently delayed during the Asian session, consider adjusting your strategy or trade timing.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Fill Time",
          "definition": "The timestamp at which a trade order is executed."
        }
      ],
      "whyThisMatters": "Documenting fill times allows traders to evaluate execution quality and make informed adjustments to their strategies.",
      "realLifeExample": "Logging a USDJPY trade filled at 10:15:45 during a news release helps identify execution delays and potential slippage during volatile periods.",
      "commonMistake": "Neglecting to record fill times leads to an incomplete understanding of trade execution quality.",
      "quickNote": "Always log the exact time of trade fills to analyze execution efficiency.",
      "mentorText": "Think of fill times as your trade's heartbeat. If you don’t monitor it, you might miss critical insights into your execution performance.",
      "mentorAnalogy": "Documenting fill times is like a surgeon recording the duration of each procedure; it’s vital for assessing performance and improving future outcomes."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Understanding Execution Slippage",
    "label": "Forex Track",
    "body": "<!-- M8.6-forex-C3 -->\n### Core Scenario: Analyzing Slippage Effects\nDocumenting execution slippage is essential for understanding its impact on trade outcomes. This card focuses on **how to accurately log and analyze slippage**.\n\n* **Slippage Documentation**: Record the expected entry price versus the actual fill price. For instance, if you intended to enter a trade on NZDUSD at 0.6800 but filled at 0.6803, log a slippage of 3 pips.\n* **Market Condition Correlation**: Analyze slippage occurrences against market conditions. If slippage frequently occurs during high-impact news releases, adjust your strategy to account for this risk.\n* **Performance Review**: Regularly review slippage logs to identify patterns. If slippage exceeds 5 pips on average during specific sessions, consider modifying your entry strategy to mitigate losses.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which it is executed."
        }
      ],
      "whyThisMatters": "Understanding slippage helps traders refine their execution strategies and minimize unexpected costs.",
      "realLifeExample": "Logging a trade on EURGBP that was expected to fill at 0.8500 but executed at 0.8505 during a volatile market reveals a 5-pip slippage that must be accounted for in profitability calculations.",
      "commonMistake": "Failing to document slippage leads to an inaccurate assessment of trade performance and execution quality.",
      "quickNote": "Log slippage to understand its impact on your trading outcomes.",
      "mentorText": "Slippage is a reality of trading. If you don’t track it, you’re ignoring a critical factor that can erode your profits.",
      "mentorAnalogy": "Understanding slippage is like an architect accounting for material delays; without this awareness, your project may exceed budget and timeline."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Establishing Session-Specific Trading Rules",
    "label": "Forex Track",
    "body": "<!-- M8.6-forex-C4 -->\n### Core Scenario: Evaluating Trading Rules\nLogging session-specific trading rules is vital for refining trading decisions and outcomes. This card explains **how to establish and evaluate these rules systematically**.\n\n* **Rule Documentation**: Record specific rules for each trading session. For example, if you decide to avoid trading during the first hour of the London session due to high volatility, document this rule clearly.\n* **Outcome Analysis**: After each session, evaluate the effectiveness of your rules. If avoiding the first hour resulted in fewer losses, note this in your journal for future reference.\n* **Rule Adjustment Protocol**: Regularly review and adjust your rules based on performance data. If a rule consistently leads to negative outcomes, modify or replace it to improve overall trading effectiveness.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Session-Specific Trading Rules",
          "definition": "Guidelines established for trading during specific market sessions to optimize performance."
        }
      ],
      "whyThisMatters": "Establishing and evaluating session-specific rules enhances decision-making and can lead to improved trading results.",
      "realLifeExample": "Logging a rule to avoid trading during the first hour of the London session, followed by a review showing reduced losses, validates the effectiveness of this strategy.",
      "commonMistake": "Not documenting session-specific rules leads to inconsistent trading practices and missed opportunities for improvement.",
      "quickNote": "Establish and evaluate session-specific rules to enhance trading performance.",
      "mentorText": "Your trading rules are your playbook. If you don’t document and analyze them, you’re playing without a strategy.",
      "mentorAnalogy": "Establishing trading rules is like a chef following a recipe; without clear guidelines, the final dish may not meet expectations."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Assessing Risk Management Techniques",
    "label": "Forex Track",
    "body": "<!-- M8.6-forex-C5 -->\n### Core Scenario: Documenting Risk Management Techniques\nEffective risk management is critical in Forex trading to ensure adherence to your defined risk profile. This card outlines **how to systematically document risk management techniques applied during trades**.\n\n* **Technique Identification**: Clearly note the risk management techniques utilized for each trade, such as stop-loss placement, position sizing, or hedging strategies. For instance, if a stop-loss was set 30 pips away from the entry point for a EURUSD trade at 1.1200, document this explicitly.\n* **Risk-Reward Ratio Analysis**: Record the risk-reward ratio for each trade. If you entered a GBPJPY position at 150.00 with a target of 151.00 and a stop-loss at 149.50, calculate and log the ratio (1:2) to evaluate the trade's potential profitability.\n* **Adherence to Risk Profile**: After each trade, assess whether the techniques used align with your overall risk profile. If your maximum risk per trade is 1% of your capital, confirm that your position size reflects this limit based on your account balance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management Techniques",
          "definition": "Strategies employed to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Documenting risk management techniques ensures that you remain disciplined and accountable to your trading strategy, which is essential for long-term success.",
      "realLifeExample": "During a trading session, you executed a long position on AUDCAD at 0.9400, setting a stop-loss at 0.9380 and a take-profit at 0.9430, which you logged for future reference.",
      "commonMistake": "Failing to document the rationale behind risk management decisions can lead to repeated mistakes in future trades.",
      "quickNote": "Always log the specific risk management techniques used for each trade.",
      "mentorText": "When you log your trades, be meticulous about noting your risk management techniques. This isn't just paperwork; it's your roadmap to understanding what works and what doesn't.",
      "mentorAnalogy": "Think of your trading risk management like a pilot's pre-flight checklist. Each item ensures safety and adherence to protocol, preventing costly mistakes."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Logging Market Conditions and Their Impact",
    "label": "Forex Track",
    "body": "<!-- M8.6-forex-C6 -->\n### Core Scenario: Documenting Market Conditions\nLogging market conditions during trading sessions provides critical insights into how external factors influence trade performance. This card teaches **how to effectively document these conditions**.\n\n* **Market Sentiment Analysis**: Record the prevailing market sentiment at the time of each trade. For example, if you noted a bullish sentiment in the USD due to positive economic data releases, document this alongside your trades on USDCHF.\n* **Volatility Assessment**: Note the volatility conditions during your trading sessions. If you executed a trade on NZDJPY during a high-volatility period, indicate this in your journal to analyze how it affected your trade outcomes.\n* **Economic Events Logging**: Document significant economic events that coincide with your trades. If you entered a position on EURUSD just before an ECB interest rate announcement, log this to assess its impact on your trade results.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Conditions",
          "definition": "The external factors affecting the trading environment, including economic data and sentiment."
        }
      ],
      "whyThisMatters": "Understanding the impact of market conditions on your trades allows for better analysis and adaptation of trading strategies.",
      "realLifeExample": "You logged that during your trade on AUDUSD at 0.7500, the market was reacting to a surprise employment report, which you noted as a contributing factor to the trade's volatility.",
      "commonMistake": "Neglecting to log market conditions can lead to a lack of understanding of how external factors influence trade performance.",
      "quickNote": "Always document the market conditions surrounding each trade for comprehensive analysis.",
      "mentorText": "When you journal, don't just write down the trades. Capture the market's mood and conditions; they are as important as the trades themselves.",
      "mentorAnalogy": "Logging market conditions is akin to a weather report for a sailor. Just as sailors must know the weather to navigate safely, traders must understand market conditions to make informed decisions."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "practice",
    "title": "Practical Forex Journaling Exercises",
    "label": "Forex Track",
    "body": "<!-- M8.6-forex-C7 -->\n### Core Scenario: Engaging in Journaling Exercises\nApplying Forex journaling techniques through practical exercises reinforces the skills necessary for effective post-market reviews. This card focuses on **hands-on journaling practices**.\n\n* **Trade Reflection Exercise**: After each trading session, write a detailed reflection on your trades. Include your entry and exit points, the rationale behind each decision, and any emotional responses experienced during the session. For example, reflect on a trade where you entered a short position on USDJPY at 110.50 and exited at 110.20, noting feelings of anxiety as the price approached your stop-loss.\n* **Weekly Review Protocol**: Establish a weekly review process where you summarize your trades, market conditions, and emotional states. Identify patterns or recurring mistakes. For instance, if you consistently overtrade during high volatility, document this trend and strategize corrective measures.\n* **Peer Review Sessions**: Engage with a trading partner to review each other's journals. Provide constructive feedback on trade decisions and emotional management. This could involve discussing a trade on GBPUSD where one of you mismanaged risk due to emotional bias.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Journaling Exercises",
          "definition": "Practical activities designed to enhance the effectiveness of trading journals."
        }
      ],
      "whyThisMatters": "Engaging in practical exercises solidifies the journaling process, leading to improved trading discipline and performance analysis.",
      "realLifeExample": "You conducted a weekly review and discovered that your emotional responses led to premature exits on trades like your long position on AUDNZD, prompting a strategy adjustment.",
      "commonMistake": "Skipping the reflection process can lead to missed opportunities for learning and improvement.",
      "quickNote": "Engage in practical journaling exercises to enhance your trading discipline.",
      "mentorText": "Treat your journal as a performance review. Reflect on your decisions and emotions; this is where the real learning happens.",
      "mentorAnalogy": "Think of these journaling exercises like a sports team's post-game analysis. Just as athletes review their performance to improve, traders must analyze their trades for growth."
    },
    "taskData": {
      "type": "choice_block",
      "question": "After a trading session, you reflect on your emotional state during a trade where you felt anxious. What should you document in your journal?",
      "options": [
        {
          "id": "0",
          "text": "The specific entry and exit points of the trade.",
          "isCorrect": true,
          "feedback": "Documenting entry and exit points provides clarity on the trade's execution."
        },
        {
          "id": "1",
          "text": "Only the profit or loss from the trade.",
          "isCorrect": false,
          "feedback": "Focusing solely on profit or loss neglects the emotional and decision-making aspects."
        },
        {
          "id": "2",
          "text": "The market conditions at the time of the trade.",
          "isCorrect": false,
          "feedback": "While important, this alone does not capture your emotional state."
        },
        {
          "id": "3",
          "text": "A summary of all trades made during the session.",
          "isCorrect": false,
          "feedback": "A summary lacks the depth of reflection needed for improvement."
        }
      ]
    },
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "summary",
    "title": "Summarizing Key Insights from Forex Journaling",
    "label": "Forex Track",
    "body": "<!-- M8.6-forex-C8 -->\n### Core Scenario: Key Insights from Journaling\nSummarizing insights from your Forex journaling process is essential for continuous improvement. This card emphasizes **the importance of detailed logging for performance analysis**.\n\n* **Holistic Performance Review**: Compile key metrics from your trades, such as win/loss ratios, average risk-reward ratios, and emotional states during trades. For example, if your analysis shows a 60% win rate with an average risk-reward ratio of 1:3, document these findings for future reference.\n* **Pattern Recognition**: Identify recurring themes in your trading behavior and emotional responses. If you consistently find that high volatility leads to emotional trading mistakes, note this pattern and adjust your strategy accordingly.\n* **Actionable Adjustments**: Based on your summaries, outline specific actions to improve your trading approach. If you recognize a tendency to overtrade during certain market conditions, create a plan to limit your trades during those times.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Analysis",
          "definition": "The process of evaluating trading results to identify strengths and weaknesses."
        }
      ],
      "whyThisMatters": "Summarizing insights allows traders to make informed adjustments to their strategies, enhancing overall performance.",
      "realLifeExample": "After reviewing your journal, you noted that trades executed during economic announcements had a lower success rate, prompting you to avoid trading during these times in the future.",
      "commonMistake": "Failing to summarize insights can lead to stagnation in trading performance and missed opportunities for growth.",
      "quickNote": "Summarize key insights regularly to drive continuous improvement in your trading.",
      "mentorText": "Your journal is a treasure trove of insights. Regularly summarize what you've learned to refine your trading strategy and avoid past mistakes.",
      "mentorAnalogy": "Think of summarizing your insights like a scientist reviewing experimental results. Each summary is a step towards refining your hypothesis and improving your methods."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  }
];
