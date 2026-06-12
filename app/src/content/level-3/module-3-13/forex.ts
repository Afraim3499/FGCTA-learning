import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "FX Session Rollover Failures",
    "label": "Forex Track",
    "body": "### FX Session Rollover: Failures and Impacts\nFX session rollovers can lead to significant liquidity disruptions, affecting order execution and risk management strategies. Understanding these failures is crucial for maintaining a robust trading approach.\n\n* **Liquidity Drain**: During rollover periods, liquidity can drop sharply, particularly when major market participants exit positions, leading to wider spreads and slippage.\n* **Session Overlap Dynamics**: The transition between trading sessions (e.g., from London to New York) can create volatility spikes, often invalidating previous order blocks if not monitored closely.\n* **Risk Management Adjustments**: Traders must adjust their risk parameters during rollover periods, potentially reducing position sizes or employing tighter stop-loss orders to mitigate exposure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Rollover Failure",
          "definition": "A disruption in market liquidity during the transition between trading sessions."
        }
      ],
      "whyThisMatters": "Understanding FX session rollover failures helps traders anticipate liquidity issues and adjust their strategies accordingly, reducing risk exposure.",
      "realLifeExample": "During the London-New York rollover at 11:00 AM EST, EURUSD experienced a liquidity drop, resulting in a 10-pip spread increase, invalidating long positions set at 1.1800.",
      "commonMistake": "Traders often neglect to adjust their stop-loss orders during rollover periods, leading to unexpected losses.",
      "quickNote": "Monitor liquidity conditions during session rollovers to manage risk effectively.",
      "mentorText": "When the market transitions between sessions, liquidity can evaporate. Always check the spread and adjust your positions accordingly to avoid being caught off guard.",
      "mentorAnalogy": "Think of trading during rollovers like a plane landing in a storm; you must be prepared for turbulence and adjust your approach to ensure a safe landing."
    },
    "taskData": null,
    "visualKey": "forex-invalid-session"
  },
  {
    "type": "concept",
    "title": "Identifying Spread Expansion Stop Invalidations",
    "label": "Forex Track",
    "body": "### Spread Expansion: Stop Invalidations\nSpread expansion can lead to stop invalidations, significantly impacting risk management strategies. Identifying these scenarios is essential for effective trading.\n\n* **Market Conditions**: Monitor for spread expansion when volatility increases, particularly during economic announcements or session overlaps, which can lead to sudden price movements.\n* **Technical Indicators**: Use tools like Average True Range (ATR) to gauge normal spread levels and identify when spreads deviate significantly, indicating potential invalidation zones.\n* **Order Placement**: Adjust stop-loss orders to account for potential spread expansion, placing them further from the market price during high-volatility periods to avoid premature triggers.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Spread Expansion",
          "definition": "An increase in the bid-ask spread, often due to heightened market volatility."
        }
      ],
      "whyThisMatters": "Recognizing spread expansion helps traders avoid unnecessary stop-outs and manage their risk more effectively during volatile market conditions.",
      "realLifeExample": "On the release of U.S. Non-Farm Payrolls at 8:30 AM EST, the EURUSD spread widened from 1 pip to 5 pips, triggering stop-loss orders set too close to the market price.",
      "commonMistake": "Failing to account for spread expansion during high-impact news releases can lead to unexpected losses.",
      "quickNote": "Always assess spread conditions before placing trades, especially during volatile events.",
      "mentorText": "When spreads widen, it’s a signal that the market is unstable. Be cautious with your stop placements and ensure they reflect the current market conditions.",
      "mentorAnalogy": "Identifying spread expansion is like a pilot checking for turbulence before takeoff; it’s essential to adjust your flight plan to ensure a smooth journey."
    },
    "taskData": null,
    "visualKey": "forex-invalid-session"
  },
  {
    "type": "concept",
    "title": "Impact of Economic News on Rollover Failures",
    "label": "Forex Track",
    "body": "### Economic News: Triggers for Rollover Failures\nMajor economic news releases can act as catalysts for FX session rollover failures, leading to increased volatility and risk for traders. Understanding these impacts is vital for effective position management.\n\n* **News Timing**: Economic reports, such as CPI or employment figures, released during rollover periods can exacerbate liquidity issues, causing sharp price movements and invalidating existing orders.\n* **Market Sentiment Shifts**: Anticipation of news can lead to pre-release positioning, which may result in rapid price adjustments once the news is released, often invalidating previous order blocks.\n* **Risk Assessment**: Traders should assess the potential impact of upcoming economic news on their positions, adjusting stop-loss levels and position sizes accordingly to mitigate risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Economic News Release",
          "definition": "Scheduled announcements that can significantly impact market volatility."
        }
      ],
      "whyThisMatters": "Understanding the relationship between economic news and rollover failures allows traders to anticipate market movements and adjust their strategies to protect their capital.",
      "realLifeExample": "On the day of the U.S. Federal Reserve interest rate decision at 2:00 PM EST, the USDJPY experienced a 50-pip spike, invalidating long positions set at 110.50 during the Asian session.",
      "commonMistake": "Ignoring the timing of economic news releases can lead to significant losses if positions are left unprotected.",
      "quickNote": "Always consider upcoming economic news when managing positions during rollover periods.",
      "mentorText": "Economic news can shake the market awake. Always be prepared for volatility and adjust your strategies to protect your positions during these times.",
      "mentorAnalogy": "Think of economic news like a sudden storm; if you’re not prepared, it can disrupt your plans and lead to unexpected outcomes."
    },
    "taskData": null,
    "visualKey": "forex-invalid-session"
  },
  {
    "type": "concept",
    "title": "Liquidity Risks During Rollover Periods",
    "label": "Forex Track",
    "body": "### Liquidity Risks: Rollover Periods\nRollover periods in Forex can present unique liquidity risks that traders must navigate to protect their capital. Understanding these risks is essential for effective trading.\n\n* **Market Depth Analysis**: Assess the depth of market liquidity before and during rollover periods to identify potential gaps that could lead to slippage and order execution issues.\n* **Order Types**: Utilize limit orders instead of market orders during rollover periods to avoid unfavorable fills due to low liquidity conditions.\n* **Position Sizing**: Reduce position sizes during rollover periods to manage risk effectively, ensuring that exposure remains within acceptable limits despite potential volatility.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Risk",
          "definition": "The risk of not being able to execute trades at desired prices due to insufficient market liquidity."
        }
      ],
      "whyThisMatters": "Understanding liquidity risks during rollover periods enables traders to implement strategies that minimize potential losses and enhance trade execution.",
      "realLifeExample": "During the rollover from the New York session to the Asian session, the AUDUSD experienced a liquidity drop, causing a 15-pip slippage on a market order placed at 0.7400.",
      "commonMistake": "Traders often use market orders during low liquidity periods, leading to unfavorable execution prices.",
      "quickNote": "Always evaluate liquidity conditions and adjust order types during rollover periods.",
      "mentorText": "Liquidity can dry up quickly during rollovers. Always check the market depth and adjust your order types to ensure you’re not caught off guard.",
      "mentorAnalogy": "Navigating liquidity risks is like sailing through a narrow channel; you must be aware of the currents and adjust your course to avoid running aground."
    },
    "taskData": null,
    "visualKey": "forex-invalid-session"
  },
  {
    "type": "concept",
    "title": "Adapting Trading Strategies to Rollover Failures",
    "label": "Forex Track",
    "body": "### Rollover Failures: Strategy Adaptation\nFX session rollovers can lead to unexpected price movements that invalidate previously established order blocks. This card details **how to adjust trading strategies in response to these failures**.\n\n* **Identify Rollover Patterns**: Monitor the last hour of the session for price action that deviates from expected rollover behavior, such as a 20-pip spike against the prevailing trend.\n* **Dynamic Risk Management**: Implement tighter stop-loss orders when a rollover failure occurs, adjusting them to 10 pips above the last swing high or low to mitigate potential losses.\n* **Reassess Entry Criteria**: After a rollover failure, consider waiting for a confirmed reversal pattern, such as a double top or bottom, before re-entering trades to ensure alignment with new market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Rollover Failure",
          "definition": "A situation where expected price movement during FX session rollovers does not occur, leading to potential invalidation of trading strategies."
        }
      ],
      "whyThisMatters": "Understanding how to adapt strategies during rollover failures is essential for maintaining profitability and minimizing risk exposure.",
      "realLifeExample": "On March 15, 2023, the EURUSD experienced a 30-pip drop during the London session rollover, invalidating previous bullish order blocks established during the Asian session.",
      "commonMistake": "Traders often fail to adjust their stop-loss levels after a rollover failure, leading to larger-than-expected losses.",
      "quickNote": "Adapt strategies dynamically to account for unexpected price movements during rollovers.",
      "mentorText": "When you see a rollover failure, don't panic. Instead, tighten your stops and reassess your entry points. This is a critical moment to ensure you're not caught off guard.",
      "mentorAnalogy": "Think of a pilot adjusting flight paths due to unexpected weather changes. Just as a pilot must adapt to ensure safety, you must adjust your trading strategy to navigate market turbulence."
    },
    "taskData": null,
    "visualKey": "forex-invalid-session"
  },
  {
    "type": "concept",
    "title": "Case Studies on Rollover Failures",
    "label": "Forex Track",
    "body": "### Analyzing Rollover Failures: Case Studies\nHistorical data provides valuable insights into how rollover failures impact trading outcomes. This card focuses on **analyzing specific case studies to extract actionable lessons**.\n\n* **Case Study 1: GBPUSD on February 10, 2023**: The pair showed a 25-pip drop during the New York session rollover, leading to a failed bullish order block. Traders who held positions without reassessing their strategy faced significant losses.\n* **Case Study 2: AUDJPY on April 5, 2023**: A rollover failure resulted in a 40-pip spike against the expected trend. Successful traders adjusted their strategies by implementing tighter stops and waiting for confirmation before re-entering.\n* **Lessons Learned**: Key takeaways include the importance of monitoring session transitions and the need for flexible risk management strategies to adapt to sudden market shifts.",
    "context": {
      "keyTerms": [
        {
          "term": "Case Study",
          "definition": "An in-depth analysis of a specific trading scenario to derive lessons and insights."
        }
      ],
      "whyThisMatters": "Analyzing past rollover failures equips traders with the knowledge to anticipate and respond effectively to similar situations in the future.",
      "realLifeExample": "In the GBPUSD case study, traders who ignored the rollover failure lost an average of 50 pips, while those who adapted their strategies minimized losses to 10 pips.",
      "commonMistake": "Many traders overlook the historical context of rollover failures, failing to learn from past mistakes.",
      "quickNote": "Review case studies to identify patterns and refine your trading approach.",
      "mentorText": "Look back at your trades during rollover failures. What worked? What didn't? Use those insights to refine your strategy for the next time.",
      "mentorAnalogy": "Consider a surgeon reviewing past surgeries to improve techniques. Just as they learn from each procedure, you must analyze your trades to enhance your trading skills."
    },
    "taskData": null,
    "visualKey": "forex-invalid-session"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Rollover Failures",
    "label": "Forex Track",
    "body": "### Engaging with Rollover Failures: Practical Exercises\nHands-on practice reinforces understanding of rollover failures and their management. This card provides **real-world scenarios to apply your knowledge**.\n\n* **Scenario Analysis**: Review the EURUSD chart from March 1, 2023, focusing on the price action during the rollover period. Identify points where the price deviated from expected behavior and suggest adjustments to your strategy.\n* **Risk Management Simulation**: Create a hypothetical trading plan for a rollover failure scenario. Set entry points, stop-loss levels, and profit targets based on the identified risk factors from previous rollovers.\n* **Peer Review**: Share your analysis with a peer and discuss potential improvements to your strategy based on their feedback and your findings.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of examining specific market conditions to evaluate potential trading outcomes."
        }
      ],
      "whyThisMatters": "Practical exercises enhance your ability to respond effectively to rollover failures in real-time trading situations.",
      "realLifeExample": "In the March 1 scenario, traders who analyzed the chart and adjusted their strategies were able to capitalize on a subsequent 50-pip rebound after the initial rollover failure.",
      "commonMistake": "Failing to simulate real-world scenarios can lead to unpreparedness when actual rollover failures occur.",
      "quickNote": "Engage in practical exercises to solidify your understanding of rollover failure management.",
      "mentorText": "Practice makes perfect. Dive into these scenarios and simulate your responses. The more you practice, the more prepared you'll be when it counts.",
      "mentorAnalogy": "Just like a pilot practices emergency landings in a simulator, you must rehearse your responses to rollover failures to ensure you're ready for any situation."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During the EURUSD rollover on March 1, 2023, the price deviated significantly. What should be your immediate action?",
      "options": [
        {
          "id": "0",
          "text": "Adjust your stop-loss to protect against further losses.",
          "isCorrect": true,
          "feedback": "Correct. Adjusting your stop-loss helps mitigate risk during unexpected price movements."
        },
        {
          "id": "1",
          "text": "Hold your position and wait for the price to recover.",
          "isCorrect": false,
          "feedback": "Incorrect. Holding a position without reassessment can lead to larger losses."
        },
        {
          "id": "2",
          "text": "Increase your position size to capitalize on the movement.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing position size during volatility can amplify risk."
        },
        {
          "id": "3",
          "text": "Ignore the movement and stick to your original plan.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring significant price movements can result in missed opportunities or increased losses."
        }
      ]
    },
    "visualKey": "forex-invalid-session"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Concepts",
    "label": "Forex Track",
    "body": "### Key Concepts in Managing Rollover Failures\nThis summary consolidates the essential concepts covered regarding rollover failures in Forex trading. Understanding these principles is vital for effective risk management.\n\n* **Adaptation Strategies**: Successful traders adjust their strategies dynamically in response to rollover failures, ensuring they remain resilient against market shifts.\n* **Learning from Case Studies**: Analyzing past rollover failures provides insights that can inform future trading decisions and improve risk management practices.\n* **Practical Application**: Engaging in practical exercises solidifies understanding and prepares traders to handle real-world scenarios effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "A solid grasp of these concepts enhances a trader's ability to navigate the complexities of Forex markets during rollover failures.",
      "realLifeExample": "Traders who implemented adaptive strategies during the March 1 rollover were able to minimize losses and capitalize on subsequent market movements.",
      "commonMistake": "Failing to recognize the importance of these concepts can lead to unpreparedness in volatile market conditions.",
      "quickNote": "Master the key concepts of rollover failures to enhance your trading resilience.",
      "mentorText": "Remember, the market is always changing. Stay adaptable, learn from your experiences, and practice your skills to be ready for anything.",
      "mentorAnalogy": "Just as an architect revisits foundational principles when designing a building, you must continually refine your understanding of trading concepts to build a solid trading strategy."
    },
    "taskData": null,
    "visualKey": "forex-invalid-session"
  }
];
