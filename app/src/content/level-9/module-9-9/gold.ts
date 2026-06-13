import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Dynamic Leverage Management in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.9-gold-C1 -->\n### Core Scenario: Conservative Leverage Enforcement\nExtreme volatility in gold markets can lead to significant drawdowns, necessitating a reevaluation of leverage parameters. This card outlines **how to implement conservative leverage strategies during high volatility periods**.\n\n* **Leverage Thresholds**: Establish a maximum leverage ratio that decreases as volatility increases. For instance, if the Average True Range (ATR) of gold exceeds $30, reduce leverage to a maximum of 1:5.\n* **Equity Curve Monitoring**: Continuously monitor the equity curve for drawdowns exceeding 5%. Upon reaching this threshold, immediately enforce a leverage cap to protect capital.\n* **Volatility Alerts**: Set automated alerts for volatility spikes using ATR indicators. If gold spikes above $30 ATR, trigger a review of current positions and leverage settings.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Thresholds",
          "definition": "Maximum leverage ratio that adjusts based on market volatility."
        },
        {
          "term": "Equity Curve Monitoring",
          "definition": "Tracking performance to identify drawdown stages."
        },
        {
          "term": "Volatility Alerts",
          "definition": "Automated notifications for significant volatility changes."
        }
      ],
      "whyThisMatters": "Implementing conservative leverage during volatility protects against rapid capital erosion, ensuring longevity in trading operations.",
      "realLifeExample": "During the NY session on March 15, 2023, gold experienced a volatility spike with an ATR of $35. A trader reduced leverage from 1:10 to 1:5, preserving capital through the subsequent price retracement.",
      "commonMistake": "Failing to adjust leverage parameters promptly during volatility spikes, leading to increased risk exposure.",
      "quickNote": "Adjust leverage dynamically based on gold's volatility to safeguard capital.",
      "mentorText": "When volatility strikes, it's not the time to double down. Scale back your leverage to shield your capital from unpredictable swings.",
      "mentorAnalogy": "Think of your leverage as a parachute. In turbulent conditions, you want a smaller chute to ensure a controlled descent rather than risking a free fall."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Using Volatility Indicators for Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.9-gold-C2 -->\n### Core Scenario: Volatility Indicator Utilization\nVolatility indicators are critical in determining appropriate leverage settings in gold trading. This card teaches **how to effectively use these indicators to enforce conservative leverage**.\n\n* **ATR Application**: Use the Average True Range (ATR) to gauge market volatility. If the ATR exceeds $25, consider reducing leverage to mitigate risk exposure.\n* **Bollinger Bands**: Implement Bollinger Bands to identify periods of high volatility. When price breaches the upper band, enforce a leverage reduction protocol to protect from potential reversals.\n* **Volatility Index Correlation**: Monitor the CBOE Gold Volatility Index (GVZ). A spike above 20 indicates heightened risk; leverage should be adjusted accordingly to maintain risk management standards.",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        },
        {
          "term": "Bollinger Bands",
          "definition": "A volatility indicator that consists of a middle band and two outer bands."
        },
        {
          "term": "GVZ",
          "definition": "CBOE Gold Volatility Index, reflecting market expectations of future volatility."
        }
      ],
      "whyThisMatters": "Utilizing volatility indicators allows traders to make informed decisions about leverage, reducing the likelihood of significant losses during turbulent market conditions.",
      "realLifeExample": "On April 10, 2023, the ATR for gold reached $28, prompting a trader to lower leverage from 1:8 to 1:4, successfully navigating a subsequent price correction.",
      "commonMistake": "Ignoring volatility indicators and maintaining high leverage during periods of increased market turbulence.",
      "quickNote": "Leverage adjustments should be dictated by volatility indicators to enhance risk management.",
      "mentorText": "Use volatility indicators like ATR and Bollinger Bands as your radar. If they signal turbulence, it's time to tighten your leverage and secure your positions.",
      "mentorAnalogy": "Navigating market volatility is like flying through a storm; you adjust your altitude and speed based on weather radar to ensure a safe passage."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Responding to Drawdowns in Gold Markets",
    "label": "Gold Track",
    "body": "<!-- M9.9-gold-C3 -->\n### Core Scenario: Drawdown Response Strategies\nDrawdowns in gold trading require immediate and strategic responses to mitigate risks. This card outlines **how to adjust leverage in response to market drawdowns**.\n\n* **Drawdown Thresholds**: Set specific drawdown thresholds (e.g., 5% from peak equity) that trigger a review of leverage settings. If this threshold is breached, reduce leverage to a maximum of 1:3.\n* **Position Sizing Adjustments**: In the event of a drawdown, recalibrate position sizes to align with reduced leverage. For example, if current exposure is $100,000 at 1:10 leverage, adjust to $30,000 at 1:3 leverage.\n* **Recovery Plans**: Develop a recovery plan that includes incremental leverage increases only after a consistent period of positive performance, such as three consecutive profitable trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Drawdown Thresholds",
          "definition": "Specific equity decline levels that trigger leverage adjustments."
        },
        {
          "term": "Position Sizing Adjustments",
          "definition": "Recalibrating trade sizes based on current leverage settings."
        },
        {
          "term": "Recovery Plans",
          "definition": "Strategies for gradually increasing leverage after drawdowns."
        }
      ],
      "whyThisMatters": "Proactively managing leverage during drawdowns can prevent further capital erosion and facilitate recovery, ensuring sustainable trading practices.",
      "realLifeExample": "After experiencing a 6% drawdown on April 20, 2023, a trader reduced their leverage from 1:10 to 1:3, allowing for a more conservative approach as the market stabilized.",
      "commonMistake": "Continuing to trade with high leverage during drawdowns, exacerbating losses and risking account depletion.",
      "quickNote": "Adjust leverage and position sizes strategically in response to drawdowns to safeguard capital.",
      "mentorText": "When your account takes a hit, don't double down. Scale back your leverage and focus on rebuilding your equity with a disciplined approach.",
      "mentorAnalogy": "Like a surgeon adjusting their approach after a complication, you must recalibrate your leverage in response to market drawdowns to ensure a successful recovery."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Assessing Market Sentiment During Gold Volatility",
    "label": "Gold Track",
    "body": "<!-- M9.9-gold-C4 -->\n### Core Scenario: Market Sentiment Assessment\nUnderstanding market sentiment during periods of extreme volatility is essential for making informed leverage decisions. This card explains **how to assess sentiment and its impact on leverage strategies**.\n\n* **Sentiment Indicators**: Utilize sentiment indicators such as the Commitment of Traders (COT) report to gauge market positioning. If the report shows excessive long positions, consider reducing leverage to mitigate potential reversals.\n* **News Sentiment Analysis**: Monitor news headlines and economic reports that impact gold prices. A negative sentiment shift may warrant a leverage reduction to protect against adverse movements.\n* **Social Media Sentiment Tracking**: Analyze social media sentiment using tools like Twitter sentiment analysis. A surge in negative sentiment may indicate increased market risk; leverage should be adjusted accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Sentiment Indicators",
          "definition": "Metrics used to gauge market participants' positioning and sentiment."
        },
        {
          "term": "COT Report",
          "definition": "Commitment of Traders report detailing trader positions in futures markets."
        },
        {
          "term": "Social Media Sentiment Tracking",
          "definition": "Analyzing social media data to assess market sentiment."
        }
      ],
      "whyThisMatters": "Assessing market sentiment allows traders to make informed leverage adjustments, reducing exposure during periods of heightened risk and volatility.",
      "realLifeExample": "On May 5, 2023, the COT report indicated a significant increase in long positions. A trader reduced leverage from 1:6 to 1:3, successfully avoiding a subsequent market pullback.",
      "commonMistake": "Neglecting to consider market sentiment when adjusting leverage, leading to increased risk exposure during volatile periods.",
      "quickNote": "Leverage decisions should be informed by market sentiment to enhance risk management.",
      "mentorText": "Stay attuned to market sentiment like a pilot reads weather conditions. If the sentiment shifts negatively, adjust your leverage to navigate the turbulence ahead.",
      "mentorAnalogy": "Assessing market sentiment is akin to a weather forecast; you must adjust your flight path based on changing conditions to ensure a safe landing."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Implementing Conservative Leverage Strategies",
    "label": "Gold Track",
    "body": "<!-- M9.9-gold-C5 -->\n### Core Strategy: Conservative Leverage Application\nConservative leverage strategies are essential during periods of extreme volatility to safeguard capital. This card outlines **how to effectively adjust leverage parameters in response to market conditions**.\n\n* **Leverage Thresholds**: Establish maximum leverage limits based on the current volatility index (VIX) readings. For example, if VIX exceeds 25, restrict leverage to a maximum of 1:10 to mitigate risk exposure.\n* **Equity Curve Monitoring**: Continuously assess the equity curve for drawdowns. Implement a rule to reduce leverage by 50% when a drawdown exceeds 5% from the peak equity.\n* **Dynamic Adjustment Protocol**: Create a checklist for adjusting leverage based on real-time market data. If gold prices exhibit a 3% movement within a single trading session, reevaluate leverage settings to ensure alignment with risk tolerance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Index (VIX)",
          "definition": "A measure of market expectations of near-term volatility, often used to gauge market risk."
        },
        {
          "term": "Equity Curve",
          "definition": "A graphical representation of a trader's account balance over time, illustrating performance."
        }
      ],
      "whyThisMatters": "Implementing conservative leverage strategies is vital for protecting capital during unpredictable market conditions, especially in gold trading where volatility can spike unexpectedly.",
      "realLifeExample": "During the gold market spike in March 2020, traders using a conservative leverage strategy limited to 1:10 were able to preserve capital while others faced significant losses due to higher leverage.",
      "commonMistake": "Traders often neglect to adjust leverage parameters during high volatility, leading to excessive risk exposure.",
      "quickNote": "Conservative leverage protects capital during extreme market conditions.",
      "mentorText": "In volatile markets, I always scale back my leverage. If VIX is above 25, I stick to 1:10. This keeps my capital safe while still allowing for potential gains.",
      "mentorAnalogy": "Think of your leverage strategy like a pilot adjusting altitude in turbulent weather. Just as a pilot reduces altitude to ensure safety, you must reduce leverage to protect your trading capital."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "concept",
    "title": "Historical Case Studies on Gold Volatility",
    "label": "Gold Track",
    "body": "<!-- M9.9-gold-C6 -->\n### Core Analysis: Gold Volatility Case Studies\nExamining historical instances of gold volatility provides insights into the effectiveness of conservative leverage strategies. This card discusses **specific case studies that highlight the importance of adjusting leverage**.\n\n* **2008 Financial Crisis**: During this period, gold prices fluctuated dramatically. Traders who implemented conservative leverage strategies, limiting exposure to 1:5, were able to navigate the volatility without significant drawdowns.\n* **2016 Brexit Referendum**: Following the Brexit vote, gold surged by 8% in a single day. Traders who adjusted their leverage to 1:10 or lower were able to capitalize on the price movement while minimizing risk.\n* **2020 COVID-19 Pandemic**: The initial market reaction saw gold prices spike. Those who reduced leverage to 1:8 during the first week of March preserved their capital, while others faced margin calls due to over-leveraging.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Brexit",
          "definition": "The United Kingdom's decision to leave the European Union, which caused significant market volatility."
        },
        {
          "term": "Margin Call",
          "definition": "A demand by a broker to increase the equity in a margin account after a decline in the account's value."
        }
      ],
      "whyThisMatters": "Understanding historical volatility in gold trading helps traders develop robust strategies that incorporate conservative leverage, ultimately leading to better risk management.",
      "realLifeExample": "In June 2016, gold prices jumped from $1,250 to $1,350 within days post-Brexit. Traders who had limited their leverage were able to take advantage of this volatility without overexposing their accounts.",
      "commonMistake": "Traders often overlook historical data when setting leverage parameters, leading to uninformed decisions during volatile periods.",
      "quickNote": "Historical case studies illustrate the necessity of conservative leverage during volatility.",
      "mentorText": "Look back at the 2008 crisis; those who played it safe with leverage survived and thrived. Use history to inform your current strategies.",
      "mentorAnalogy": "Just as a historian analyzes past events to predict future outcomes, you must study past market volatility to adjust your leverage strategies effectively."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "practice",
    "title": "Conducting Risk Assessments in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.9-gold-C7 -->\n### Core Skill: Risk Assessment Methodology\nConducting thorough risk assessments is essential for implementing dynamic leverage adjustments in gold trading. This card focuses on **the steps required to evaluate risk effectively**.\n\n* **Market Volatility Measurement**: Utilize the Average True Range (ATR) to gauge market volatility. If the ATR for gold is above $20, consider reducing leverage to mitigate risk exposure.\n* **Drawdown Evaluation**: Assess current drawdowns against historical performance. If the current drawdown exceeds 7% from the peak, implement a leverage reduction protocol to 1:5.\n* **Scenario Analysis**: Create scenarios based on potential price movements. For instance, if gold is projected to move $50 based on economic data, adjust leverage accordingly to ensure risk is contained.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for a set period."
        },
        {
          "term": "Scenario Analysis",
          "definition": "A process of analyzing possible future events by considering alternative possible outcomes."
        }
      ],
      "whyThisMatters": "Effective risk assessments allow traders to adapt leverage dynamically, ensuring that capital is preserved during periods of increased volatility.",
      "realLifeExample": "On August 6, 2020, gold's ATR indicated a volatility spike. Traders who conducted thorough risk assessments and adjusted their leverage to 1:7 were able to navigate the price fluctuations successfully.",
      "commonMistake": "Failing to incorporate volatility measures into risk assessments can lead to inappropriate leverage settings.",
      "quickNote": "Dynamic risk assessments are crucial for effective leverage management.",
      "mentorText": "Always assess the market before entering a trade. If the ATR is high, lower your leverage. It’s about protecting your capital first.",
      "mentorAnalogy": "Conducting risk assessments is like a surgeon evaluating a patient's condition before surgery. You must understand the risks involved to make informed decisions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are assessing the risk for a gold trade. The ATR indicates a volatility level of $25, and your current leverage is 1:10. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Maintain the current leverage of 1:10.",
          "isCorrect": false,
          "feedback": "Maintaining high leverage during elevated volatility increases risk exposure."
        },
        {
          "id": "1",
          "text": "Reduce leverage to 1:5.",
          "isCorrect": true,
          "feedback": "Reducing leverage to 1:5 aligns with the high volatility indicated by the ATR, preserving capital."
        },
        {
          "id": "2",
          "text": "Increase leverage to 1:15.",
          "isCorrect": false,
          "feedback": "Increasing leverage during high volatility is a risky decision that can lead to significant losses."
        },
        {
          "id": "3",
          "text": "Ignore the ATR and proceed with the trade.",
          "isCorrect": false,
          "feedback": "Ignoring the ATR can result in overexposure to market risks."
        }
      ]
    },
    "visualKey": "leverage-gate-calculator"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Dynamic Leverage Concepts",
    "label": "Gold Track",
    "body": "<!-- M9.9-gold-C8 -->\n### Core Summary: Dynamic Leverage Management\nDynamic leverage management is crucial for successful gold trading, particularly in volatile environments. This card summarizes **the key concepts related to conservative leverage strategies**.\n\n* **Capital Preservation**: Prioritize capital preservation by adjusting leverage based on market volatility indicators like VIX and ATR. Maintain lower leverage during high volatility to mitigate risks.\n* **Historical Insights**: Leverage historical case studies to inform current trading strategies. Recognize patterns in volatility and adapt leverage accordingly to protect against significant drawdowns.\n* **Risk Assessment Framework**: Implement a structured risk assessment framework that incorporates dynamic leverage adjustments. Regularly evaluate market conditions and adjust leverage to ensure alignment with risk tolerance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Leverage Management",
          "definition": "The process of adjusting leverage parameters in response to changing market conditions."
        },
        {
          "term": "Risk Tolerance",
          "definition": "The degree of variability in investment returns that an investor is willing to withstand."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces the importance of dynamic leverage management in gold trading, ensuring traders are equipped to handle volatility effectively.",
      "realLifeExample": "Traders who applied these principles during the gold market fluctuations in 2020 were able to navigate the volatility successfully, preserving their capital.",
      "commonMistake": "Traders often fail to adapt their strategies based on changing market conditions, leading to increased risk exposure.",
      "quickNote": "Dynamic leverage management is essential for navigating gold market volatility.",
      "mentorText": "Remember, adjusting your leverage is not just about potential gains; it’s about protecting what you have. Stay disciplined.",
      "mentorAnalogy": "Dynamic leverage management is like a ship captain adjusting sails based on wind conditions. You must adapt to maintain course and avoid capsizing."
    },
    "taskData": null,
    "visualKey": "leverage-gate-calculator"
  }
];
