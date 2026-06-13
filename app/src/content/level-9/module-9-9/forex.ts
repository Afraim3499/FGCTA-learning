import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Dynamic Leverage Scaling in Forex",
    "label": "Forex Track",
    "body": "<!-- M9.9-forex-C1 -->\n### Core Scenario: Dynamic Leverage Scaling\nScaling down leverage during range states in Forex can significantly enhance risk management. This card outlines **the process of adjusting leverage parameters based on market conditions**.\n\n* **Leverage Reduction Protocol**: When a currency major, such as EURUSD, enters a defined range (e.g., 1.0800 to 1.0850), reduce leverage to a maximum of 1:10 to minimize exposure.\n* **Equity Curve Monitoring**: Continuously monitor the equity curve; if a drawdown exceeds 2%, implement an immediate leverage reduction to safeguard capital.\n* **Range Confirmation**: Use technical indicators like Bollinger Bands or ATR to confirm range states before applying leverage scaling adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Range State",
          "definition": "A market condition where the price of a currency pair oscillates within a defined upper and lower boundary."
        }
      ],
      "whyThisMatters": "Dynamic leverage scaling is essential for maintaining capital preservation during periods of low volatility and price stagnation.",
      "realLifeExample": "During the Asian session, EURUSD fluctuated between 1.0800 and 1.0850 for three consecutive hours; leverage was scaled down to 1:10 to mitigate risk.",
      "commonMistake": "Traders often neglect to adjust leverage when entering range states, exposing themselves to unnecessary risk.",
      "quickNote": "Adjust leverage based on market range states to enhance risk management.",
      "mentorText": "When you see EURUSD stuck between 1.0800 and 1.0850, it's time to tighten your leverage. This isn't about being conservative; it's about protecting your capital.",
      "mentorAnalogy": "Think of leverage scaling like adjusting the throttle on an aircraft during turbulence; reducing power keeps the flight stable and safe."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Identifying Range States in Currency Pairs",
    "label": "Forex Track",
    "body": "<!-- M9.9-forex-C2 -->\n### Core Scenario: Identifying Range States\nRecognizing range states in major currency pairs is vital for effective leverage adjustments. This card teaches **how to spot these conditions accurately**.\n\n* **Price Action Analysis**: Observe price movements; a series of lower highs and higher lows over a defined period indicates a range state. For instance, if GBPUSD oscillates between 1.3000 and 1.3050 for several hours, it signals a range.\n* **Volume Confirmation**: Low trading volume during price consolidation often confirms a range state. If EURJPY shows reduced volume while trading between 130.50 and 131.00, leverage adjustments should be considered.\n* **Technical Indicators**: Utilize tools like the Relative Strength Index (RSI) to identify overbought or oversold conditions that may indicate a range state, enhancing leverage decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time, which traders analyze to identify patterns."
        }
      ],
      "whyThisMatters": "Accurate identification of range states allows traders to implement leverage adjustments that align with market conditions, reducing risk exposure.",
      "realLifeExample": "GBPUSD trading between 1.3000 and 1.3050 for four hours with low volume indicates a range state; leverage should be adjusted accordingly.",
      "commonMistake": "Failing to recognize a range state can lead to inappropriate leverage levels, increasing the risk of significant losses.",
      "quickNote": "Identify range states through price action and volume analysis to optimize leverage adjustments.",
      "mentorText": "When GBPUSD is moving sideways, you need to recognize that as a range. This is your cue to adjust leverage and protect your position.",
      "mentorAnalogy": "Identifying range states is like a pilot checking for turbulence; it informs you when to adjust your flight path for a smoother journey."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Timing Leverage Adjustments During Range States",
    "label": "Forex Track",
    "body": "<!-- M9.9-forex-C3 -->\n### Core Scenario: Timing Leverage Adjustments\nOptimal timing for leverage adjustments during range states is critical for minimizing risk. This card outlines **specific timing strategies for leverage scaling**.\n\n* **Session Timing**: Adjust leverage at the start of a trading session when range states are confirmed. For example, if USDCHF is in a range at the NY open, scale down leverage immediately to 1:10.\n* **Breakout Monitoring**: If price approaches the range boundary (e.g., 0.9400 in USDCHF), prepare to adjust leverage based on breakout confirmation; if the breakout fails, maintain reduced leverage.\n* **Time-Based Review**: Conduct leverage reviews every hour during range states; if conditions persist beyond two hours, consider further reducing leverage to mitigate risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout",
          "definition": "A price movement that occurs when the price moves outside a defined support or resistance level."
        }
      ],
      "whyThisMatters": "Proper timing of leverage adjustments can significantly reduce the risk of large drawdowns during range-bound conditions.",
      "realLifeExample": "At the NY open, USDCHF is confirmed in a range at 0.9400; leverage is adjusted to 1:10, and further monitored for breakout behavior.",
      "commonMistake": "Traders often delay leverage adjustments, missing optimal timing and exposing themselves to increased risk.",
      "quickNote": "Time your leverage adjustments based on session openings and breakout confirmations.",
      "mentorText": "When you see USDCHF stuck at 0.9400, don't wait. Adjust your leverage right at the session open to protect your capital.",
      "mentorAnalogy": "Timing leverage adjustments is like a surgeon deciding when to apply pressure during a procedure; timing can be critical to success."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Impact of Volatility on Forex Leverage Decisions",
    "label": "Forex Track",
    "body": "<!-- M9.9-forex-C4 -->\n### Core Scenario: Impact of Volatility\nUnderstanding how volatility influences leverage decisions is essential for effective risk management. This card discusses **the relationship between volatility and leverage adjustments**.\n\n* **Volatility Measurement**: Use the Average True Range (ATR) to gauge volatility; if ATR for AUDUSD is above 50 pips, consider reducing leverage to 1:5 to mitigate risk.\n* **Market Sentiment Analysis**: High volatility often correlates with increased market sentiment; during news events, such as non-farm payroll releases, scale down leverage to protect against erratic price movements.\n* **Adaptive Leverage Scaling**: Implement a dynamic leverage scaling system based on volatility levels; for instance, if EURAUD shows increased volatility, leverage should be adjusted to a maximum of 1:8 to manage exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for a specific period."
        }
      ],
      "whyThisMatters": "Recognizing the impact of volatility on leverage decisions helps traders maintain a balanced risk profile during turbulent market conditions.",
      "realLifeExample": "During a high-impact news release, AUDUSD's ATR spikes to 60 pips; leverage is reduced to 1:5 to safeguard against potential whipsaws.",
      "commonMistake": "Ignoring volatility indicators can lead to inappropriate leverage levels, increasing the risk of significant losses during volatile periods.",
      "quickNote": "Adjust leverage based on volatility measurements to maintain a balanced risk profile.",
      "mentorText": "When volatility spikes, like during news releases, tighten your leverage. It's about staying safe when the market is unpredictable.",
      "mentorAnalogy": "Managing leverage in volatile conditions is like a firefighter adjusting water pressure during a blaze; too much pressure can cause chaos."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Developing Leverage Strategies for Range Markets",
    "label": "Forex Track",
    "body": "<!-- M9.9-forex-C5 -->\n### Core Strategy: Leverage Application in Range Markets\nRange markets present unique challenges and opportunities for traders. This card outlines **how to effectively apply leverage strategies tailored to these conditions**.\n\n* **Leverage Ratio Adjustment**: In a range-bound environment, reduce leverage ratios to mitigate risk. For instance, if your standard leverage is 1:100, consider adjusting to 1:50 to account for potential false breakouts.\n* **Position Sizing Protocol**: Implement a fixed percentage of equity for each trade, such as 1% of total equity, to maintain consistency and control over drawdowns. This ensures that even in a volatile range, your exposure remains manageable.\n* **Dynamic Entry Points**: Utilize technical indicators like Bollinger Bands to identify optimal entry points within the range. Enter trades when prices touch the lower band, applying reduced leverage to capitalize on potential reversals without excessive risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Range Market",
          "definition": "A market condition where price oscillates between defined support and resistance levels."
        },
        {
          "term": "Leverage Ratio",
          "definition": "The ratio of borrowed capital to equity used in trading."
        }
      ],
      "whyThisMatters": "Effective leverage strategies in range markets can significantly reduce the risk of large drawdowns while maximizing profit potential.",
      "realLifeExample": "During the EURUSD trading at 1.1000, a trader applies a 1:50 leverage ratio while entering long positions at 1.0950 and short positions at 1.1050, maintaining a consistent risk profile.",
      "commonMistake": "Traders often over-leverage in range markets, leading to significant losses during unexpected breakouts.",
      "quickNote": "Adjust leverage downwards in range markets to manage risk effectively.",
      "mentorText": "When trading in a range, think of your leverage as a safety net. If the market is bouncing between two points, you want to ensure that net is secure, not stretched too thin.",
      "mentorAnalogy": "Consider a tightrope walker adjusting their balance. Just as they would lower their pole to stabilize themselves in a gusty wind, you must reduce leverage to maintain control in a fluctuating market."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Advanced Risk Management Techniques for Forex",
    "label": "Forex Track",
    "body": "<!-- M9.9-forex-C6 -->\n### Core Technique: Dynamic Risk Management\nDynamic risk management is essential for adapting to fluctuating market conditions in Forex. This card details **advanced techniques for adjusting leverage based on real-time market analysis**.\n\n* **Equity Curve Monitoring**: Continuously track your equity curve to identify drawdown stages. If a drawdown exceeds 5%, implement a leverage reduction strategy, such as scaling down from 1:100 to 1:30.\n* **Market Volatility Assessment**: Use the Average True Range (ATR) to gauge market volatility. For example, if the ATR indicates increased volatility, reduce leverage accordingly to protect against rapid price movements.\n* **Adaptive Stop-Loss Strategies**: Integrate trailing stop-loss orders that adjust with market movements. If a position moves favorably, tighten the stop-loss to lock in profits while allowing for potential further gains.",
    "context": {
      "keyTerms": [
        {
          "term": "Equity Curve",
          "definition": "A graphical representation of a trader's account balance over time."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        }
      ],
      "whyThisMatters": "Advanced risk management techniques are crucial for maintaining capital and ensuring long-term trading success in volatile Forex markets.",
      "realLifeExample": "A trader monitors the GBPUSD, noticing a 7% drawdown. They reduce their leverage from 1:100 to 1:40 and adjust their stop-loss to protect against further losses.",
      "commonMistake": "Failing to adjust leverage in response to changing market conditions can lead to unnecessary losses during high volatility periods.",
      "quickNote": "Implement dynamic risk management to adapt leverage based on market conditions.",
      "mentorText": "Think of your trading account as a fortress. When the market storms, you need to lower your drawbridge—reduce leverage—to protect your assets.",
      "mentorAnalogy": "Like a seasoned pilot adjusting altitude based on weather conditions, you must modify your leverage to navigate the turbulent Forex skies."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "practice",
    "title": "Case Studies of Forex Leverage Scaling",
    "label": "Forex Track",
    "body": "<!-- M9.9-forex-C7 -->\n### Core Analysis: Leverage Scaling in Action\nAnalyzing real-world case studies provides insights into effective leverage scaling strategies in Forex. This card focuses on **learning from successful implementations of leverage adjustments**.\n\n* **Case Study: USDJPY Volatility Spike**: In March 2023, USDJPY experienced a volatility spike, prompting a trader to scale down leverage from 1:100 to 1:20. This adjustment protected their capital during rapid price movements, resulting in a net gain of 15% over the month.\n* **Case Study: EURGBP Range Trading**: A trader identified a stable range in EURGBP and applied a leverage of 1:50. By maintaining this leverage while executing multiple trades within the range, they achieved an overall profit of 10% without significant drawdowns.\n* **Case Study: AUDCAD Trend Reversal**: During a trend reversal in AUDCAD, a trader reduced leverage from 1:80 to 1:30 after a 6% drawdown. This proactive measure allowed them to recover losses and capitalize on the subsequent trend, resulting in a 20% profit.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Spike",
          "definition": "A sudden increase in the price fluctuations of a currency pair."
        },
        {
          "term": "Trend Reversal",
          "definition": "A change in the direction of the price trend."
        }
      ],
      "whyThisMatters": "Understanding case studies of leverage scaling helps traders implement effective strategies tailored to market conditions.",
      "realLifeExample": "In February 2023, a trader scaled their leverage down during a USDCHF volatility spike, successfully avoiding a 10% drawdown and securing a 12% return by the month's end.",
      "commonMistake": "Ignoring historical case studies can lead to repeated mistakes in leverage management during similar market conditions.",
      "quickNote": "Learn from real-world examples to refine your leverage scaling strategies.",
      "mentorText": "Reviewing past trades is like studying game tape. You need to analyze what worked and what didn't to refine your approach for future trades.",
      "mentorAnalogy": "Just as a chef adjusts their recipe based on ingredient availability, you must modify your leverage strategy based on market conditions and past performance."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A trader faced a volatility spike in USDJPY and adjusted their leverage from 1:100 to 1:20. What was the primary reason for this adjustment?",
      "options": [
        {
          "id": "0",
          "text": "To protect capital during rapid price movements.",
          "isCorrect": true,
          "feedback": "Correct. Reducing leverage during volatility spikes helps safeguard against significant losses."
        },
        {
          "id": "1",
          "text": "To increase potential profits on trades.",
          "isCorrect": false,
          "feedback": "Incorrect. The primary goal was to protect capital, not to increase profits."
        },
        {
          "id": "2",
          "text": "To comply with regulatory requirements.",
          "isCorrect": false,
          "feedback": "Incorrect. The adjustment was based on market conditions, not regulations."
        },
        {
          "id": "3",
          "text": "To take advantage of a trend reversal.",
          "isCorrect": false,
          "feedback": "Incorrect. The adjustment was made during a volatility spike, not a trend reversal."
        }
      ]
    },
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Dynamic Leverage Concepts",
    "label": "Forex Track",
    "body": "<!-- M9.9-forex-C8 -->\n### Core Summary: Dynamic Leverage in Forex\nDynamic leverage scaling is critical for adapting to varying market conditions in Forex trading. This card encapsulates **the essential concepts of leverage adjustments and their significance**.\n\n* **Leverage Adjustment Framework**: Establish a framework for adjusting leverage based on equity drawdowns and market volatility. For instance, if drawdowns exceed 5%, consider reducing leverage to maintain capital integrity.\n* **Market Condition Analysis**: Regularly analyze market conditions using tools like ATR and support/resistance levels to inform leverage decisions. Adapting to these conditions can prevent unnecessary losses.\n* **Continuous Learning**: Emphasize the importance of learning from past trades and case studies to refine leverage strategies. Continuous improvement is vital for long-term trading success.",
    "context": {
      "keyTerms": [
        {
          "term": "Capital Integrity",
          "definition": "The preservation of a trader's capital against losses."
        },
        {
          "term": "Support/Resistance Levels",
          "definition": "Price levels where a currency pair tends to reverse direction."
        }
      ],
      "whyThisMatters": "A solid understanding of dynamic leverage concepts enables traders to navigate Forex markets with greater confidence and reduced risk.",
      "realLifeExample": "A trader implements a dynamic leverage strategy, reducing leverage during a 6% drawdown in AUDCAD, which ultimately leads to a recovery and a 15% profit over the following month.",
      "commonMistake": "Failing to adapt leverage strategies to changing market conditions can lead to significant capital erosion.",
      "quickNote": "Dynamic leverage scaling is essential for managing risk in Forex trading.",
      "mentorText": "Think of your leverage as a tool that must be adjusted based on the environment. Just like a sailor adjusts their sails to the wind, you must adapt your leverage to the market's conditions.",
      "mentorAnalogy": "Like a seasoned architect who modifies plans based on site conditions, you must tailor your leverage strategy to the ever-changing landscape of the Forex market."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  }
];
