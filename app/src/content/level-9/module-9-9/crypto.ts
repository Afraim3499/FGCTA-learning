import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Dynamic Leverage Boundaries in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.9-crypto-C1 -->\n### Core Scenario: Enforcing Leverage Boundaries\nThe enforcement of strict leverage boundaries during periods of high hourly funding rates is critical for risk management in crypto trading. This card outlines **the mechanics of adjusting leverage parameters based on funding rate spikes**.\n\n* **Leverage Cap Implementation**: Establish a maximum leverage threshold that decreases incrementally with each 0.5% increase in the hourly funding rate. For instance, if the funding rate spikes to 1.5%, reduce leverage from 10x to 5x.\n* **Equity Curve Monitoring**: Continuously monitor the equity curve for drawdowns. If the equity curve shows a drawdown exceeding 3%, immediately enforce a leverage cap of 2x until recovery is observed.\n* **Automated Alerts**: Set up automated alerts to notify traders when funding rates exceed predefined thresholds, ensuring timely adjustments to leverage parameters.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Boundaries",
          "definition": "Predefined limits on leverage based on market conditions."
        },
        {
          "term": "Hourly Funding Rate",
          "definition": "The cost of holding a leveraged position in crypto, calculated hourly."
        }
      ],
      "whyThisMatters": "Implementing dynamic leverage boundaries protects capital during volatile market conditions, reducing the risk of significant losses.",
      "realLifeExample": "During a spike in the hourly funding rate to 1.2% on BTCUSDT, leverage was adjusted from 10x to 4x, preventing potential margin calls.",
      "commonMistake": "Failing to adjust leverage in response to funding rate spikes can lead to excessive risk exposure.",
      "quickNote": "Adjust leverage dynamically based on funding rate spikes to mitigate risk.",
      "mentorText": "When funding rates spike, you must act decisively. If you’re holding a position and the rate jumps, cut your leverage immediately to protect your equity.",
      "mentorAnalogy": "Think of leverage boundaries like an aircraft's altitude limits; exceeding them during turbulence can lead to catastrophic failure."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Analyzing Hourly Funding Rates in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.9-crypto-C2 -->\n### Core Scenario: Funding Rate Analysis\nUnderstanding hourly funding rates is essential for making informed leverage adjustments in crypto trading. This card teaches **how to analyze funding rates and their impact on trading strategy**.\n\n* **Rate Calculation**: Monitor the funding rate calculation provided by exchanges, which typically reflects the interest rate differential between long and short positions. For example, if the funding rate is 0.3%, long positions pay this rate to short positions.\n* **Trend Analysis**: Analyze the trend of funding rates over the past 24 hours. A consistent increase in funding rates indicates a bullish sentiment, suggesting a need to lower leverage.\n* **Correlation with Price Action**: Establish a correlation between funding rates and price movements. If BTCUSDT's price rises while funding rates increase, consider reducing leverage to manage risk effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate Analysis",
          "definition": "The process of evaluating hourly funding rates to inform trading decisions."
        },
        {
          "term": "Long and Short Positions",
          "definition": "Positions taken in anticipation of price increases (long) or decreases (short)."
        }
      ],
      "whyThisMatters": "Proper analysis of funding rates enables traders to adjust leverage proactively, safeguarding against potential losses.",
      "realLifeExample": "When analyzing ETHUSDT, a funding rate of 0.4% was observed alongside a price increase of 5%, prompting a leverage reduction from 8x to 3x.",
      "commonMistake": "Ignoring funding rate trends can lead to inappropriate leverage levels and increased risk exposure.",
      "quickNote": "Regularly analyze funding rates to inform leverage adjustments.",
      "mentorText": "You need to stay ahead of the funding rates. If they’re climbing, it’s time to reassess your leverage—don’t wait for the market to force your hand.",
      "mentorAnalogy": "Analyzing funding rates is like a pilot checking weather conditions before takeoff; it’s essential for a safe and successful flight."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Strategies for Responding to Funding Rate Spikes",
    "label": "Crypto Track",
    "body": "<!-- M9.9-crypto-C3 -->\n### Core Scenario: Strategic Response to Spikes\nResponding effectively to funding rate spikes is vital for maintaining risk management in crypto trading. This card outlines **strategies to adjust leverage in response to sudden funding rate changes**.\n\n* **Immediate Leverage Adjustment**: Upon detecting a funding rate spike of more than 0.5%, reduce leverage by at least 50% to mitigate risk. For example, if currently at 10x, drop to 5x immediately.\n* **Position Review Protocol**: Conduct a thorough review of all open positions after a spike. If any positions are at risk of margin calls, consider closing or reducing size to maintain compliance with new leverage limits.\n* **Risk Assessment Framework**: Implement a risk assessment framework that evaluates potential losses based on current leverage and funding rates. If the potential loss exceeds 2% of equity, further reduce leverage or close positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate Spike",
          "definition": "A sudden increase in the hourly funding rate that can affect trading positions."
        },
        {
          "term": "Leverage Adjustment",
          "definition": "The process of changing the leverage used in trading based on market conditions."
        }
      ],
      "whyThisMatters": "Timely responses to funding rate spikes can prevent significant losses and maintain trading discipline.",
      "realLifeExample": "After observing a spike in the funding rate to 1.0% on LTCUSDT, leverage was cut from 6x to 3x, avoiding a potential margin call during a subsequent price drop.",
      "commonMistake": "Delaying leverage adjustments after a funding rate spike can expose traders to unnecessary risk.",
      "quickNote": "Respond promptly to funding rate spikes with strategic leverage adjustments.",
      "mentorText": "When you see a funding rate spike, don’t hesitate. Adjust your leverage immediately; it’s about protecting your capital first.",
      "mentorAnalogy": "Responding to funding rate spikes is like a surgeon adjusting their approach mid-operation; precision and timing are critical."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Impact of Market Volatility on Crypto Leverage",
    "label": "Crypto Track",
    "body": "<!-- M9.9-crypto-C4 -->\n### Core Scenario: Volatility and Leverage Decisions\nMarket volatility significantly influences leverage decisions in crypto trading, especially during funding rate fluctuations. This card discusses **how to assess volatility and adjust leverage accordingly**.\n\n* **Volatility Measurement**: Utilize tools like the Average True Range (ATR) to measure market volatility. A rising ATR indicates increased volatility, necessitating a reduction in leverage to manage risk.\n* **Correlation with Funding Rates**: Analyze how volatility correlates with funding rate changes. If BTCUSDT experiences high volatility alongside rising funding rates, consider reducing leverage by 25% to mitigate potential losses.\n* **Stress Testing Positions**: Conduct stress tests on current positions under various volatility scenarios. If a simulated 10% price drop would trigger a margin call, adjust leverage to ensure positions remain viable.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator used to measure market volatility."
        }
      ],
      "whyThisMatters": "Understanding the impact of volatility on leverage decisions helps traders maintain control over their risk exposure.",
      "realLifeExample": "During a period of high volatility in XRPUSDT, with an ATR of 0.15 and a funding rate spike to 0.5%, leverage was adjusted from 5x to 2x to protect against potential drawdowns.",
      "commonMistake": "Failing to account for market volatility when adjusting leverage can lead to inadequate risk management.",
      "quickNote": "Assess market volatility to inform leverage adjustments effectively.",
      "mentorText": "Volatility is your enemy when it comes to leverage. If the market is swinging wildly, you need to tighten your grip on your positions.",
      "mentorAnalogy": "Managing leverage in volatile markets is like a tightrope walker adjusting their balance; any sudden movement can lead to a fall."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Risk Mitigation Techniques for Crypto Leverage",
    "label": "Crypto Track",
    "body": "<!-- M9.9-crypto-C5 -->\n### Core Technique: Dynamic Leverage Adjustment\nDynamic leverage adjustments based on funding rate analysis can significantly mitigate risk in crypto trading. This card outlines **how to implement risk controls that adapt to market conditions**.\n\n* **Funding Rate Monitoring**: Continuously track the funding rates of your positions. A rising funding rate indicates a cost to hold long positions, suggesting a potential need to reduce leverage to avoid margin calls.\n* **Leverage Scaling Protocol**: Establish a tiered leverage system based on equity drawdown stages. For example, if your equity drops by 5%, reduce leverage by 25% to maintain risk exposure within acceptable limits.\n* **Stop-Loss Integration**: Incorporate stop-loss orders that adjust dynamically with leverage changes. For instance, if leverage is reduced, the stop-loss should be recalibrated to reflect the new risk profile, ensuring that losses are contained effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The cost associated with holding a leveraged position in crypto, which can affect profitability."
        }
      ],
      "whyThisMatters": "Dynamic leverage adjustments based on funding rates can prevent catastrophic losses during volatile market conditions.",
      "realLifeExample": "For instance, if Bitcoin's funding rate rises to 0.1% while your position is leveraged at 10x, consider reducing leverage to 7.5x to mitigate potential losses.",
      "commonMistake": "Traders often neglect to adjust leverage in response to changing funding rates, leading to increased exposure during unfavorable conditions.",
      "quickNote": "Adjust leverage dynamically based on funding rates to manage risk effectively.",
      "mentorText": "When the funding rate shifts, you must recalibrate your leverage. If you ignore these changes, you're exposing yourself to unnecessary risk. Always be ready to adapt.",
      "mentorAnalogy": "Think of it like an aerospace engineer adjusting the thrust of an aircraft based on changing wind conditions. Just as pilots must adapt to maintain control, traders must adjust leverage to navigate market turbulence."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Case Studies on Crypto Leverage Management",
    "label": "Crypto Track",
    "body": "<!-- M9.9-crypto-C6 -->\n### Core Analysis: Successful Leverage Management\nAnalyzing case studies of leverage management in crypto trading reveals critical insights into effective strategies. This card focuses on **the role of funding rates in shaping leverage decisions**.\n\n* **Case Study 1 - Ethereum Surge**: During a significant price surge in Ethereum, traders who monitored funding rates effectively reduced leverage as rates increased, preserving capital and maximizing gains. This proactive approach allowed them to ride the trend without overexposure.\n* **Case Study 2 - Market Correction**: In a market correction, traders who failed to adjust leverage based on rising funding rates faced liquidation. Those who implemented a dynamic leverage strategy reduced their positions, mitigating losses and maintaining their trading accounts.\n* **Lessons Learned**: Key takeaways include the importance of real-time funding rate analysis and the necessity of a flexible leverage strategy that adapts to market conditions, ensuring traders remain solvent during volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Management",
          "definition": "The strategic adjustment of leverage levels based on market conditions and risk assessment."
        }
      ],
      "whyThisMatters": "Understanding successful leverage management through case studies provides actionable insights for traders to implement in their own strategies.",
      "realLifeExample": "In April 2021, Ethereum's funding rate peaked at 0.15% during a rally. Traders who reduced leverage from 10x to 5x during this period saw a 30% increase in their account equity by avoiding liquidations.",
      "commonMistake": "Many traders overlook historical funding rate trends, leading to poor leverage decisions during critical market movements.",
      "quickNote": "Study successful leverage management cases to enhance your trading strategy.",
      "mentorText": "Look at how others have navigated leverage in the past. If they adjusted their strategies based on funding rates, you should too. Learn from their successes and failures.",
      "mentorAnalogy": "Consider a surgeon adjusting their approach based on a patient's vital signs. Just as a surgeon must adapt to ensure patient safety, traders must adjust leverage to safeguard their capital."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "practice",
    "title": "Synthesis of Crypto Leverage Strategies",
    "label": "Crypto Track",
    "body": "<!-- M9.9-crypto-C7 -->\n### Core Task: Comprehensive Leverage Management Strategy\nCreating a comprehensive strategy for managing leverage in crypto trading involves synthesizing knowledge of funding rates and market dynamics. This card provides a framework for **developing a robust leverage management plan**.\n\n* **Dynamic Leverage Framework**: Establish a framework that outlines leverage adjustments based on specific funding rate thresholds. For example, if the funding rate exceeds 0.1%, reduce leverage by 20% to mitigate risk.\n* **Equity Curve Monitoring**: Implement a system to regularly assess your equity curve. If a drawdown exceeds 5%, initiate a leverage reduction protocol to protect against further losses.\n* **Risk-Reward Ratio Evaluation**: Continuously evaluate the risk-reward ratio of open positions. If the funding rate increases and the potential reward diminishes, consider closing or reducing positions to maintain a favorable risk profile.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to the potential loss."
        }
      ],
      "whyThisMatters": "A well-structured leverage management strategy can enhance profitability while minimizing risk exposure in volatile crypto markets.",
      "realLifeExample": "If a trader holds a leveraged position in Litecoin with a funding rate of 0.12% and experiences a 6% equity drawdown, they should reduce leverage from 8x to 5x to safeguard their account.",
      "commonMistake": "Traders often fail to synthesize their knowledge into a cohesive strategy, leading to inconsistent leverage management practices.",
      "quickNote": "Develop a dynamic leverage strategy that adapts to funding rate changes and equity drawdowns.",
      "mentorText": "You need a clear plan for managing leverage. If your funding rates shift or your equity curve dips, your strategy should dictate your next steps. Don't leave it to chance.",
      "mentorAnalogy": "Think of it like a commercial pilot adjusting altitude based on air traffic control instructions. Just as pilots must follow a flight plan, traders must adhere to a leverage management strategy."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a scenario where the funding rate for Bitcoin is 0.15% and your equity has dropped by 7%, what should your leverage adjustment be?",
      "options": [
        {
          "id": "0",
          "text": "Reduce leverage by 30% to maintain risk management.",
          "isCorrect": true,
          "feedback": "Correct. A 7% equity drop warrants a significant reduction in leverage to mitigate risk."
        },
        {
          "id": "1",
          "text": "Maintain current leverage levels despite the drop.",
          "isCorrect": false,
          "feedback": "Incorrect. Maintaining leverage during a drawdown increases risk exposure."
        },
        {
          "id": "2",
          "text": "Increase leverage to capitalize on potential recovery.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing leverage during a drawdown is a risky strategy that can lead to liquidation."
        },
        {
          "id": "3",
          "text": "Reduce leverage by 10% as a precaution.",
          "isCorrect": false,
          "feedback": "Incorrect. A 10% reduction is insufficient given the 7% equity drop and high funding rate."
        }
      ]
    },
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Dynamic Leverage Concepts",
    "label": "Crypto Track",
    "body": "<!-- M9.9-crypto-C8 -->\n### Core Summary: Dynamic Leverage Management\nDynamic leverage management is essential for navigating the volatile landscape of crypto trading. This card reinforces **the importance of adapting leverage strategies based on funding rate fluctuations**.\n\n* **Key Principles**: Always monitor funding rates and adjust leverage accordingly. A proactive approach can prevent significant losses during adverse market conditions.\n* **Equity Drawdown Awareness**: Recognize the stages of equity drawdown and implement leverage scaling protocols to protect capital. A systematic approach to leverage can enhance overall trading performance.\n* **Continuous Learning**: Stay informed about market trends and funding rate changes. Regularly revisiting and refining your leverage strategy is crucial for long-term success in crypto trading.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Leverage Management",
          "definition": "The practice of adjusting leverage levels based on real-time market conditions and funding rates."
        }
      ],
      "whyThisMatters": "A solid understanding of dynamic leverage concepts can significantly improve a trader's ability to manage risk and enhance profitability.",
      "realLifeExample": "During the crypto market crash in March 2020, traders who adjusted their leverage in response to rising funding rates were able to preserve their capital and avoid liquidations.",
      "commonMistake": "Traders often fail to adapt their leverage strategies to changing market conditions, leading to increased risk and potential losses.",
      "quickNote": "Dynamic leverage management is crucial for effective risk mitigation in crypto trading.",
      "mentorText": "You must be vigilant about funding rates and equity drawdowns. If you don't adapt your leverage strategy, you're setting yourself up for failure. Stay sharp.",
      "mentorAnalogy": "Consider a chef adjusting cooking times based on the type of dish being prepared. Just as a chef must adapt to ensure the meal is perfect, traders must adjust leverage to ensure their strategies remain effective."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  }
];
