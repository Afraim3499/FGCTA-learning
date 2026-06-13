import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Managing Leveraged Perpetual Positions",
    "label": "Crypto Track",
    "body": "### Core Scenario: Leveraged Position Management\nEffective management of leveraged perpetual positions is critical during market volatility. This card outlines **systematic approaches to monitor and adjust positions during critical market events**.\n\n* **Position Sizing Rules**: Maintain a maximum leverage ratio of 5:1 for new entries. Reassess leverage if the position moves against you by 2% from the entry price.\n* **Stop-Loss Adjustments**: Implement a trailing stop-loss that moves up by 1% for every 2% gain in position value. This ensures profits are locked in while allowing for further upside.\n* **Market Event Protocol**: During scheduled events (e.g., major announcements), reduce position size by 50% to mitigate risk exposure. Reassess after the event concludes to determine if re-entry is warranted.",
    "context": {
      "keyTerms": [
        {
          "term": "Leveraged Perpetual Position",
          "definition": "A position in a perpetual contract that uses borrowed funds to increase potential returns."
        }
      ],
      "whyThisMatters": "Proper management of leveraged positions can prevent significant losses during volatile market conditions, ensuring capital preservation.",
      "realLifeExample": "BTCUSD leveraged position at 20x enters at $30,000. Price drops to $29,400, triggering a stop-loss adjustment to secure profits at $30,600 after a 2% gain.",
      "commonMistake": "Failing to adjust leverage or stop-loss settings during market events can lead to excessive losses.",
      "quickNote": "Always adjust leverage and stop-loss in response to market movements.",
      "mentorText": "When managing leveraged positions, think of your capital as a precious resource. Adjust your exposure based on market conditions, and never let emotions dictate your decisions.",
      "mentorAnalogy": "Managing leveraged positions is like piloting an aircraft through turbulence; you must adjust your altitude and speed based on real-time data to ensure a safe landing."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Strategies for Managing Flash Wicks",
    "label": "Crypto Track",
    "body": "### Core Scenario: Flash Wick Management\nFlash wicks can create panic and lead to emotional trading decisions. This card provides **strategies to effectively monitor and manage positions during these events**.\n\n* **Pre-Defined Reaction Plan**: Establish a clear plan for responding to flash wicks, including a maximum acceptable loss threshold. If the wick exceeds this threshold, exit the position immediately.\n* **Volume Confirmation**: Only react to flash wicks that occur with significant volume (e.g., 200% above the average). This helps filter out false signals.\n* **Post-Wick Analysis**: After a flash wick, analyze the market context and determine if the price action is a reversal or a continuation. Adjust your position accordingly based on this analysis.",
    "context": {
      "keyTerms": [
        {
          "term": "Flash Wick",
          "definition": "A sudden spike in price that quickly retracts, often causing panic among traders."
        }
      ],
      "whyThisMatters": "Managing flash wicks systematically allows traders to avoid emotional reactions that can lead to unnecessary losses.",
      "realLifeExample": "ETHUSD experiences a flash wick to $2,200 from $2,000, exceeding the 200% volume threshold. The trader exits at $2,150, securing a profit before the price retracts.",
      "commonMistake": "Reacting impulsively to flash wicks without a pre-defined plan often results in losses.",
      "quickNote": "Establish a clear reaction plan for flash wicks to avoid emotional trading.",
      "mentorText": "When a flash wick occurs, stick to your plan. Don’t let fear dictate your actions; have a strategy in place to guide your response.",
      "mentorAnalogy": "Managing flash wicks is akin to a surgeon responding to unexpected complications during surgery; a well-prepared protocol ensures the best outcome."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Adjusting for Funding Rate Changes",
    "label": "Crypto Track",
    "body": "### Core Scenario: Funding Rate Management\nFunding rates can significantly impact the profitability of open positions. This card explores **systematic methods for adjusting positions in response to funding rate changes**.\n\n* **Funding Rate Monitoring**: Regularly check the funding rates for your positions at least every 8 hours. If the funding rate exceeds 0.1%, consider reducing your position size to manage costs.\n* **Position Adjustment Protocol**: If the funding rate is consistently high for three consecutive periods, initiate a partial exit of 25% of the position to mitigate exposure to funding costs.\n* **Re-entry Strategy**: After adjusting for funding rates, reassess the market conditions. If the funding rate normalizes, consider re-entering the position at a more favorable price point.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment made between long and short positions in perpetual contracts, affecting overall profitability."
        }
      ],
      "whyThisMatters": "Understanding and adjusting for funding rates is essential for maintaining profitability in leveraged positions over time.",
      "realLifeExample": "A trader holds a BTC perpetual position with a funding rate of 0.15%. After three periods, they reduce their position by 25% to manage costs, then re-evaluate after the rate normalizes.",
      "commonMistake": "Ignoring funding rate changes can lead to unexpected losses, especially in long-held positions.",
      "quickNote": "Regularly monitor funding rates to adjust positions accordingly.",
      "mentorText": "Funding rates are like the cost of doing business in trading. Keep an eye on them and adjust your positions to ensure your profitability isn’t eroded.",
      "mentorAnalogy": "Adjusting for funding rates is like a business adjusting its pricing strategy in response to market demand; staying informed ensures profitability."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Navigating High Volatility in Crypto",
    "label": "Crypto Track",
    "body": "### Core Scenario: High Volatility Management\nHigh volatility periods require precise management of open positions. This card outlines **systematic exit strategies during these times**.\n\n* **Volatility Thresholds**: Define a volatility threshold (e.g., 5% price movement within a 15-minute window). If this threshold is breached, prepare to exit positions to protect gains.\n* **Dynamic Exit Orders**: Utilize dynamic exit orders that adjust based on real-time volatility. Set exit points at 2% above the current price during high volatility to secure profits.\n* **Market Sentiment Analysis**: Continuously analyze market sentiment indicators (e.g., social media trends, news impact) during high volatility. Adjust exit strategies based on prevailing sentiment to maximize returns.",
    "context": {
      "keyTerms": [
        {
          "term": "High Volatility",
          "definition": "Periods of significant price movement in a short time frame, often leading to increased risk."
        }
      ],
      "whyThisMatters": "Effectively managing positions during high volatility can safeguard profits and minimize losses, enhancing overall trading performance.",
      "realLifeExample": "During a sudden surge, LTCUSD spikes 7% in 10 minutes. The trader exits at a dynamic order set 2% above the peak price to secure profits before a potential reversal.",
      "commonMistake": "Failing to adapt exit strategies during high volatility often results in missed profit opportunities or increased losses.",
      "quickNote": "Implement dynamic exit strategies to navigate high volatility effectively.",
      "mentorText": "In high volatility, your exit strategy must be as agile as the market. Stay alert and be ready to adjust your plans to protect your capital.",
      "mentorAnalogy": "Navigating high volatility is like a race car driver adjusting their speed and trajectory based on track conditions; quick decisions are essential for success."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Risk Management Techniques for Crypto Positions",
    "label": "Crypto Track",
    "body": "### Core Scenario: Risk Management Techniques\nEffective risk management is critical for maintaining control over open crypto trades. This card details **specific techniques to mitigate risk while ensuring emotional discipline**.\n\n* **Position Sizing**: Determine the appropriate position size based on your total capital and risk tolerance. For example, if your account balance is $10,000 and your risk per trade is 1%, your maximum loss should not exceed $100.\n* **Stop-Loss Orders**: Implement stop-loss orders at strategic levels to limit potential losses. For instance, if you enter a long position on BTC at $30,000, set a stop-loss at $29,500 to protect against adverse price movements.\n* **Risk-Reward Ratio**: Establish a minimum risk-reward ratio of 1:2 for each trade. If your stop-loss is set at $100, aim for a profit target of at least $200 to ensure that winning trades outweigh losses over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Calculating the number of units to trade based on account size and risk tolerance."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Implementing these risk management techniques helps traders maintain control over their emotions and decision-making processes during volatile market conditions.",
      "realLifeExample": "A trader enters a long position on ETH at $2,000 with a stop-loss set at $1,950, ensuring a maximum loss of $50 while targeting a profit of $100 at $2,100.",
      "commonMistake": "Failing to adjust position sizes according to account balance fluctuations, leading to disproportionate risk exposure.",
      "quickNote": "Effective risk management is essential for emotional control in crypto trading.",
      "mentorText": "When managing your crypto positions, always remember to size your trades according to your risk tolerance. If you're not comfortable with the potential loss, reduce your position size.",
      "mentorAnalogy": "Think of risk management like a pilot conducting pre-flight checks. Just as a pilot ensures all systems are functioning correctly to prevent accidents, you must ensure your risk parameters are in place to avoid emotional trading errors."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Journaling Crypto Trades for Better Decisions",
    "label": "Crypto Track",
    "body": "### Core Scenario: Trade Journaling\nMaintaining a trade journal is vital for analyzing performance and refining decision-making. This card outlines **how to systematically document and review your crypto trades**.\n\n* **Trade Entry Documentation**: Record the entry price, position size, and rationale for each trade. For example, document entering a long position on LTC at $150 with a reason based on a bullish trend reversal.\n* **Performance Metrics**: Track key metrics such as win rate, average profit/loss, and maximum drawdown. For instance, if you have a win rate of 60% with an average profit of $200 and an average loss of $100, this data can inform future strategies.\n* **Post-Trade Analysis**: Review trades weekly to identify patterns and areas for improvement. Analyze why certain trades were successful or unsuccessful, such as recognizing that trades placed during high volatility often resulted in larger losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Journal",
          "definition": "A record of all trades made, including details and outcomes for analysis."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate the effectiveness of trading strategies."
        },
        {
          "term": "Post-Trade Analysis",
          "definition": "The process of reviewing trades after execution to learn from successes and failures."
        }
      ],
      "whyThisMatters": "Journaling trades allows for objective evaluation of performance, enabling traders to make informed adjustments to their strategies.",
      "realLifeExample": "After a week of trading, a trader reviews their journal and finds that trades executed during the Asian session had a 70% win rate, prompting them to focus on that time frame.",
      "commonMistake": "Neglecting to document trades consistently, leading to missed opportunities for learning and improvement.",
      "quickNote": "A detailed trade journal enhances decision-making and performance analysis.",
      "mentorText": "Document every trade you make. If you don't track your decisions, you're flying blind and missing out on valuable insights that could improve your trading.",
      "mentorAnalogy": "Consider a surgeon meticulously documenting each procedure. Just as they analyze outcomes to refine techniques, you must review your trades to enhance your trading skills."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios for Crypto Trade Management",
    "label": "Crypto Track",
    "body": "### Core Scenario: Managing Leveraged Positions\nThis card presents practical scenarios to simulate the management of leveraged crypto positions during market events. Engage with **realistic situations to test your decision-making skills**.\n\n* **Scenario 1**: You hold a long position on XRP at $0.80 with 10x leverage. The market suddenly drops to $0.75. What is your immediate action? (Options: A. Close the position, B. Adjust stop-loss, C. Add to the position)\n* **Scenario 2**: You entered a short position on DOGE at $0.25. The price spikes to $0.30 due to a news event. What is your risk management strategy? (Options: A. Hold the position, B. Set a new stop-loss, C. Exit immediately)\n* **Scenario 3**: You have a long position on SOL at $100, and the price rises to $120. How will you secure profits? (Options: A. Move stop-loss to breakeven, B. Take partial profits, C. Do nothing)",
    "context": {
      "keyTerms": [
        {
          "term": "Leveraged Position",
          "definition": "A trade that uses borrowed funds to increase potential returns."
        },
        {
          "term": "Stop-Loss Adjustment",
          "definition": "Modifying the stop-loss level to secure profits or limit losses."
        },
        {
          "term": "Market Event",
          "definition": "An occurrence that significantly impacts asset prices, such as news releases."
        }
      ],
      "whyThisMatters": "Practicing these scenarios prepares traders for real-time decision-making during volatile market conditions, enhancing their ability to manage risk effectively.",
      "realLifeExample": "During a market correction, a trader holding a leveraged position on BTC at $35,000 must decide whether to adjust their stop-loss or close the trade entirely to mitigate losses.",
      "commonMistake": "Failing to react promptly to market changes, leading to larger-than-expected losses.",
      "quickNote": "Engaging with practical scenarios sharpens your trade management skills.",
      "mentorText": "When faced with sudden market movements, always have a plan. Decide in advance how you'll manage your positions to avoid emotional reactions.",
      "mentorAnalogy": "Think of a race car driver navigating a track. They must anticipate turns and adjust speed accordingly, just as you must adapt your strategy to market conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You hold a long position on ETH at $2,500. The price drops to $2,450 due to market volatility. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Close the position immediately.",
          "isCorrect": false,
          "feedback": "Closing the position may result in a loss without allowing for potential recovery."
        },
        {
          "id": "1",
          "text": "Adjust your stop-loss to $2,400.",
          "isCorrect": true,
          "feedback": "Adjusting the stop-loss helps secure some profits while allowing the position to recover."
        },
        {
          "id": "2",
          "text": "Add to your position at $2,450.",
          "isCorrect": false,
          "feedback": "Adding to a losing position increases risk without a clear recovery plan."
        },
        {
          "id": "3",
          "text": "Do nothing and wait.",
          "isCorrect": false,
          "feedback": "Inaction can lead to larger losses if the price continues to decline."
        }
      ]
    },
    "visualKey": "open-trade-manager"
  },
  {
    "type": "summary",
    "title": "Key Takeaways for Managing Crypto Positions",
    "label": "Crypto Track",
    "body": "### Core Scenario: Summary of Management Strategies\nEffective management of open crypto positions requires a systematic approach. This card summarizes **the essential strategies for monitoring and exiting trades**.\n\n* **Continuous Monitoring**: Regularly assess market conditions and your open positions. For example, check price movements and news updates every hour to stay informed.\n* **Emotional Discipline**: Stick to your predefined exit strategies and avoid impulsive decisions based on market noise. If your stop-loss is hit, accept the loss without hesitation.\n* **Exit Strategies**: Define clear exit points based on technical analysis and risk management principles. For instance, if your target profit is reached at $3,000 for a long position on BTC, exit the trade to secure gains.",
    "context": {
      "keyTerms": [
        {
          "term": "Continuous Monitoring",
          "definition": "The ongoing assessment of market conditions and open positions."
        },
        {
          "term": "Emotional Discipline",
          "definition": "The ability to adhere to trading plans without succumbing to emotional influences."
        },
        {
          "term": "Exit Strategies",
          "definition": "Predefined plans for closing trades based on specific criteria."
        }
      ],
      "whyThisMatters": "Summarizing these strategies reinforces the importance of a disciplined approach to managing open positions, essential for long-term success.",
      "realLifeExample": "A trader monitors their open position on ADA, adjusting their exit strategy based on market trends and news, ultimately exiting at a profit when the price reaches $1.50.",
      "commonMistake": "Overreacting to market fluctuations and deviating from established exit strategies.",
      "quickNote": "Systematic monitoring and discipline are key to successful trade management.",
      "mentorText": "Stay vigilant and disciplined. Monitor your trades regularly, and stick to your exit strategies to avoid emotional pitfalls.",
      "mentorAnalogy": "Managing your trades is like a ship captain navigating through changing seas. You must adjust your course based on conditions while remaining focused on your destination."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  }
];
