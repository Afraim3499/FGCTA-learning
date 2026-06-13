import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Placing Stops Behind Structural Session Swings",
    "label": "Forex Track",
    "body": "### Structural Stops: Session Swings as Reference Points\nPlacing stop-loss orders behind structural session swings, particularly the Asian session highs and lows, ensures that trades are protected against significant market movements. This method enhances the robustness of stop placements compared to arbitrary pip margins.\n\n* **Session Swing Identification**: Identify the highest and lowest points of the Asian session as potential stop-loss placements. For example, if the Asian session high is at 1.2500, consider placing your stop-loss just below this level to avoid unnecessary triggers.\n* **Market Structure Alignment**: Positioning stops behind these structural levels aligns with market behavior, reducing the likelihood of being stopped out by normal price fluctuations. This can be particularly effective during high volatility periods.\n* **Psychological Buffer**: Utilizing session swings provides a psychological buffer, as these levels are often respected by other market participants, leading to higher chances of trade success.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Session Swings",
          "definition": "The highest and lowest points reached during a specific trading session."
        },
        {
          "term": "Asian Session",
          "definition": "The trading session that occurs during the Asian market hours, often characterized by lower volatility."
        }
      ],
      "whyThisMatters": "Understanding structural session swings allows traders to place stop-loss orders that are less likely to be triggered by normal market fluctuations, enhancing trade longevity.",
      "realLifeExample": "During the Asian session, EURUSD formed a low at 1.1200. A trader places a stop-loss at 1.1195, ensuring protection against a potential breakout below the session low while maintaining a favorable risk-reward ratio.",
      "commonMistake": "Traders often place stops too close to the session swings, increasing the risk of being stopped out prematurely.",
      "quickNote": "Place stops behind structural session swings to enhance trade protection.",
      "mentorText": "When you place your stop-loss behind the Asian session high or low, you’re not just guessing; you’re anchoring your trade to a significant market structure that others are watching too.",
      "mentorAnalogy": "Think of your stop-loss like a safety net in a circus act. Just as the net is positioned below the performer to catch them if they fall, your stop-loss should be placed behind structural levels to catch your trade before it falls too far."
    },
    "taskData": null,
    "visualKey": "stop-loss-placement"
  },
  {
    "type": "concept",
    "title": "Understanding Asian Session Highs and Lows",
    "label": "Forex Track",
    "body": "### Critical Reference Points: Asian Session Highs and Lows\nAsian session highs and lows serve as vital reference points for stop-loss placement in the forex market. Recognizing these levels can significantly influence trade management strategies.\n\n* **Identification Techniques**: Use candlestick patterns and price action analysis to identify the highest and lowest points during the Asian session. For instance, if the Asian session high is 1.3050, this level can be pivotal for stop-loss placement in subsequent sessions.\n* **Market Sentiment Reflection**: These highs and lows often reflect market sentiment and can act as psychological barriers for traders. A stop-loss placed just below the Asian session low can protect against false breakouts.\n* **Volatility Considerations**: Assess the volatility during the Asian session. If the range is narrow, placing stops closer to the session low may be appropriate, while wider ranges may require more distance to avoid premature stop-outs.",
    "context": {
      "keyTerms": [
        {
          "term": "Asian Session High",
          "definition": "The highest price reached during the Asian trading session."
        },
        {
          "term": "Asian Session Low",
          "definition": "The lowest price reached during the Asian trading session."
        }
      ],
      "whyThisMatters": "Utilizing Asian session highs and lows as reference points allows for more informed and strategic stop-loss placements, enhancing overall trade management.",
      "realLifeExample": "In a recent Asian session, GBPUSD reached a high of 1.4000. A trader uses this level to set a stop-loss at 1.3995, protecting their position from potential reversals while maintaining a favorable risk profile.",
      "commonMistake": "Failing to recognize the significance of these levels can lead to arbitrary stop-loss placements that do not account for market structure.",
      "quickNote": "Asian session highs and lows are critical for effective stop-loss placement.",
      "mentorText": "When you spot the Asian session high or low, think of it as a lighthouse guiding your trade. Use it to navigate your stop-loss placement and avoid getting lost in the market’s waves.",
      "mentorAnalogy": "Just as a ship captain uses lighthouses to navigate treacherous waters, you should use Asian session highs and lows to steer your stop-loss placements safely."
    },
    "taskData": null,
    "visualKey": "stop-loss-placement"
  },
  {
    "type": "concept",
    "title": "Risk Management Through Session Analysis",
    "label": "Forex Track",
    "body": "### Enhancing Risk Management: Session Volatility Analysis\nAnalyzing session volatility is essential for effective risk management in trading. This card teaches how to adapt stop-loss placements based on the characteristics of different trading sessions.\n\n* **Volatility Assessment**: Evaluate the average true range (ATR) of the Asian session to determine appropriate stop-loss distances. For example, if the ATR is 15 pips, consider placing stops at least 1.5 times the ATR to accommodate normal price fluctuations.\n* **Session Comparison**: Compare volatility across different sessions (Asian, London, New York) to adjust stop-loss strategies accordingly. A trader might use tighter stops during the Asian session and wider stops during the more volatile London session.\n* **Dynamic Adjustments**: Continuously adjust stop-loss placements based on real-time market conditions and session volatility. If the market shows increased volatility, widen your stops to avoid being stopped out unnecessarily.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        },
        {
          "term": "Session Volatility",
          "definition": "The degree of price movement within a specific trading session."
        }
      ],
      "whyThisMatters": "Adapting stop-loss placements based on session volatility enhances risk management, allowing traders to protect their capital more effectively.",
      "realLifeExample": "During a volatile London session, the ATR for USDJPY is 20 pips. A trader sets their stop-loss at 1.5 times the ATR, placing it 30 pips away from their entry to accommodate potential price swings.",
      "commonMistake": "Traders often ignore session volatility, leading to inappropriate stop-loss placements that either risk too much capital or are too tight.",
      "quickNote": "Analyze session volatility to optimize stop-loss placements.",
      "mentorText": "Think of session volatility as the weather forecast for your trades. Just as you wouldn’t venture out in a storm without an umbrella, don’t place your stops without considering the market’s volatility.",
      "mentorAnalogy": "Like a pilot adjusting altitude based on turbulence, you must adapt your stop-loss placements according to the volatility of the trading session."
    },
    "taskData": null,
    "visualKey": "stop-loss-placement"
  },
  {
    "type": "concept",
    "title": "Avoiding Standard 10-Pip Margins",
    "label": "Forex Track",
    "body": "### Strategic Stop-Loss Placement: Moving Beyond 10-Pip Margins\nRelying on standard 10-pip margins for stop-loss placements can lead to ineffective risk management. This card emphasizes the importance of a strategic approach based on market structure rather than arbitrary distances.\n\n* **Market Structure Analysis**: Evaluate the price action and market structure rather than defaulting to a 10-pip stop-loss. For instance, if the EURUSD is trending upwards and recent support is at 1.1500, placing a stop-loss just below this level is more strategic than a flat 10 pips.\n* **Adaptive Stop-Loss Strategies**: Adjust stop-loss distances based on the volatility of the instrument and the session. For example, during a high-volatility news event, a wider stop-loss may be necessary to avoid being stopped out.\n* **Risk-Reward Ratio Consideration**: Ensure that your stop-loss placement aligns with your desired risk-reward ratio. If aiming for a 2:1 ratio, calculate your stop-loss based on the target profit level rather than a fixed pip distance.",
    "context": {
      "keyTerms": [
        {
          "term": "10-Pip Margin",
          "definition": "A common arbitrary distance used for stop-loss placements, often considered insufficient for effective risk management."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Avoiding arbitrary stop-loss margins allows for more precise risk management, aligning stop placements with market dynamics.",
      "realLifeExample": "In a recent trade, a trader identified a key support level in AUDCAD at 0.9500. Instead of using a standard 10-pip stop-loss, they placed it at 0.9490, just below the support, optimizing their risk management.",
      "commonMistake": "Traders often default to a 10-pip stop-loss without considering market conditions, leading to unnecessary losses.",
      "quickNote": "Strategically place stop-losses based on market structure, not arbitrary pip distances.",
      "mentorText": "When you think about your stop-loss, don’t just slap on a 10-pip margin. Analyze the market structure and place your stop where it makes sense, not where it’s convenient.",
      "mentorAnalogy": "Like an architect designing a building to withstand local weather conditions, you must design your stop-loss placements to withstand market conditions, not just follow a one-size-fits-all approach."
    },
    "taskData": null,
    "visualKey": "stop-loss-placement"
  },
  {
    "type": "concept",
    "title": "Utilizing Price Action for Stop-Loss Decisions",
    "label": "Forex Track",
    "body": "### Price Action: Informing Stop-Loss Placement\nPrice action analysis provides a framework for determining stop-loss levels based on market behavior rather than arbitrary targets. This card teaches **how to interpret price movements in relation to session swings for effective stop-loss placement**.\n\n* **Identifying Swing Highs and Lows**: Analyze recent price swings to establish clear invalidation points. For instance, if the EURUSD forms a swing high at 1.1200, a stop-loss should be placed slightly above this level to avoid false breakouts.\n* **Session Range Consideration**: Utilize the range of the current trading session to set dynamic stop-loss levels. If the GBPJPY has a session high of 150.50 and a low of 149.80, consider placing a stop-loss below the session low to account for volatility.\n* **Volume Confirmation**: Look for volume spikes accompanying price movements. A breakout above a swing high with increased volume can justify a tighter stop-loss, while low volume may necessitate a wider stop-loss to accommodate potential retracements.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time, used to inform trading decisions."
        },
        {
          "term": "Swing High",
          "definition": "A peak point in price action that indicates potential resistance."
        },
        {
          "term": "Swing Low",
          "definition": "A trough point in price action that indicates potential support."
        }
      ],
      "whyThisMatters": "Effective stop-loss placement based on price action reduces the likelihood of premature exits and enhances trade management.",
      "realLifeExample": "During the London session, the AUDUSD forms a swing low at 0.7500. A trader places their stop-loss at 0.7485, just below the swing low, to protect against a potential reversal.",
      "commonMistake": "Traders often place stop-losses based on psychological levels rather than structural price action, leading to increased risk of being stopped out.",
      "quickNote": "Use price action to set stop-loss levels based on structural swings rather than arbitrary targets.",
      "mentorText": "When you analyze price action, focus on the swings. If you see a swing high, place your stop-loss just above it. This way, you protect your position without getting taken out by noise.",
      "mentorAnalogy": "Think of trading like navigating a ship through a storm. You wouldn't set your anchor based on where you hope the waves will settle; instead, you observe the swells and place your anchor accordingly."
    },
    "taskData": null,
    "visualKey": "stop-loss-placement"
  },
  {
    "type": "concept",
    "title": "Evaluating Market Sentiment in Stop-Loss Placement",
    "label": "Forex Track",
    "body": "### Market Sentiment: Adjusting Stop-Loss Strategies\nUnderstanding market sentiment is critical for effective stop-loss placement. This card teaches **how to gauge market sentiment and adjust stop-loss strategies accordingly**.\n\n* **Sentiment Indicators**: Use tools like the Commitment of Traders (COT) report to assess trader positioning. If the COT indicates a high level of long positions in USDCHF, consider placing stop-losses further from the market to account for potential corrections.\n* **News Impact Analysis**: Monitor economic news releases that can shift sentiment. For example, if the US Non-Farm Payroll report is due, widen stop-losses on USD pairs to accommodate volatility spikes.\n* **Market Correlation Awareness**: Recognize correlations between different currency pairs. If EURUSD is bullish and AUDUSD is correlated, placing tighter stop-losses on AUDUSD may be prudent if sentiment shifts against the USD.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors towards a particular market or asset."
        },
        {
          "term": "Commitment of Traders (COT)",
          "definition": "A report that shows the positioning of traders in the futures market."
        },
        {
          "term": "Volatility Spike",
          "definition": "A sudden increase in market volatility, often due to news or economic events."
        }
      ],
      "whyThisMatters": "Adjusting stop-loss placements based on sentiment helps mitigate risk during high-impact events and aligns with market dynamics.",
      "realLifeExample": "Ahead of a major ECB announcement, a trader observes bullish sentiment in EURUSD. They adjust their stop-loss from 1.1000 to 1.0950 to account for potential volatility.",
      "commonMistake": "Failing to adjust stop-loss levels in response to changing market sentiment can lead to unnecessary losses during high-impact news events.",
      "quickNote": "Gauge market sentiment to inform and adjust your stop-loss placements effectively.",
      "mentorText": "Always be aware of the market's mood. If sentiment shifts, your stop-loss should shift too. Don't let your position be a casualty of unexpected news.",
      "mentorAnalogy": "Navigating the market is like sailing; you must adjust your sails based on the wind's direction. If the sentiment shifts, your stop-loss needs to adapt to avoid capsizing."
    },
    "taskData": null,
    "visualKey": "stop-loss-placement"
  },
  {
    "type": "practice",
    "title": "Practical Application of Session Swing Analysis",
    "label": "Forex Track",
    "body": "### Session Swing Analysis: Stop-Loss Placement Practice\nEngaging in practical exercises enhances your ability to apply session swing analysis for effective stop-loss placements. This card provides **scenarios to practice strategic decision-making**.\n\n* **Scenario 1**: The USDJPY has formed a clear swing high at 110.50 during the Asian session. If you enter a long position at 110.30, where would you place your stop-loss?\n* **Scenario 2**: The EURAUD shows a bearish trend with a recent swing low at 1.5800. After entering a short position at 1.5820, determine an appropriate stop-loss level.\n* **Scenario 3**: The GBPUSD is consolidating between 1.3000 and 1.3050. If you decide to go long at 1.3020, analyze where to place your stop-loss based on session swings.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Swing",
          "definition": "The highest or lowest price point reached during a specific trading session."
        },
        {
          "term": "Consolidation",
          "definition": "A period where price moves within a defined range, indicating indecision."
        },
        {
          "term": "Entry Point",
          "definition": "The price level at which a trader enters a trade."
        }
      ],
      "whyThisMatters": "Practicing session swing analysis sharpens your decision-making skills for stop-loss placements, enhancing overall trade management.",
      "realLifeExample": "In a live trading environment, you analyze the AUDCAD, identifying a swing high at 0.9500 and placing your stop-loss at 0.9480 after entering long at 0.9490.",
      "commonMistake": "Traders often neglect to adjust their stop-loss placements based on new session swings, leading to increased risk exposure.",
      "quickNote": "Utilize session swings to strategically place stop-losses that align with market behavior.",
      "mentorText": "When you practice, visualize the swings. Each swing tells a story about where the market might turn. Place your stop-loss accordingly to protect your trade.",
      "mentorAnalogy": "Think of session swings like the tides; they ebb and flow, and you must position your boat accordingly to avoid capsizing in turbulent waters."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You enter a long position in AUDCAD at 0.9490, identifying a swing high at 0.9500. Where should you place your stop-loss?",
      "options": [
        {
          "id": "0",
          "text": "At 0.9480, just below the swing high.",
          "isCorrect": true,
          "feedback": "Placing your stop-loss at 0.9480 provides a buffer against false breakouts while protecting your position."
        },
        {
          "id": "1",
          "text": "At 0.9505, above the swing high.",
          "isCorrect": false,
          "feedback": "This placement increases the risk of being stopped out due to normal market fluctuations."
        },
        {
          "id": "2",
          "text": "At 0.9470, further away from the entry point.",
          "isCorrect": false,
          "feedback": "This placement exposes you to unnecessary risk if the market moves against you."
        },
        {
          "id": "3",
          "text": "At 0.9495, very close to the entry point.",
          "isCorrect": false,
          "feedback": "This placement is too tight and may lead to being stopped out by minor price movements."
        }
      ]
    },
    "visualKey": "stop-loss-placement"
  },
  {
    "type": "summary",
    "title": "Key Insights on Forex Stop-Loss Placement",
    "label": "Forex Track",
    "body": "### Summary: Insights on Stop-Loss Placement\nUnderstanding the mechanics of stop-loss placement is essential for risk management in forex trading. This card summarizes **key insights regarding the importance of structural session swings**.\n\n* **Structural vs. Arbitrary Levels**: Effective stop-loss placements are based on structural levels derived from price action rather than arbitrary psychological levels, ensuring better trade longevity.\n* **Dynamic Adjustments**: Continuously evaluate market sentiment and session swings to adjust stop-loss levels dynamically, enhancing protection against volatility.\n* **Practical Application**: Regular practice of session swing analysis equips traders with the skills necessary to make informed stop-loss decisions in real-time trading scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        },
        {
          "term": "Dynamic Adjustments",
          "definition": "The ongoing process of modifying strategies based on changing market conditions."
        },
        {
          "term": "Trade Longevity",
          "definition": "The duration a trade remains open before being closed."
        }
      ],
      "whyThisMatters": "Summarizing these insights reinforces the critical nature of informed stop-loss placements for effective risk management.",
      "realLifeExample": "A trader reflects on their recent trades, realizing that by using structural levels for stop-loss placements, they reduced their average drawdown by 15% over the last month.",
      "commonMistake": "Failing to differentiate between structural and arbitrary stop-loss placements can lead to increased risk and poor trade outcomes.",
      "quickNote": "Prioritize structural session swings for effective stop-loss placement.",
      "mentorText": "Reflect on your trades. If you used structural levels for your stop-loss, you likely faced fewer unnecessary losses. Always base your decisions on market structure.",
      "mentorAnalogy": "Consider stop-loss placement like a safety net for a trapeze artist; it should be positioned based on where they are likely to fall, not where you hope they will land."
    },
    "taskData": null,
    "visualKey": "stop-loss-placement"
  }
];
