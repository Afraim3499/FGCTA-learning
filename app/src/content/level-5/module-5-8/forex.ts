import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Trailing Stops in Major Currency Pairs",
    "label": "Forex Track",
    "body": "### Trailing Stops: Major Currency Pairs Application\nApplying trailing stops effectively in major currency pairs requires an understanding of their unique market dynamics. This card outlines **specific techniques for implementing trailing stops during daily trend expansions**.\n\n* **Market Structure Alignment**: Position trailing stops in alignment with swing highs or lows to capture maximum trend movement while minimizing premature exits.\n* **ATR-Based Adjustments**: Use the Average True Range (ATR) to determine appropriate trailing stop distances, ensuring they accommodate the inherent volatility of the currency pair.\n* **Session Timing Considerations**: Adjust trailing stop placements based on market sessions; for example, during the London session, trailing stops may need to be tighter due to increased volatility in pairs like EUR/USD or GBP/USD.",
    "context": {
      "keyTerms": [
        {
          "term": "Trailing Stop",
          "definition": "A stop order that moves with the market price to secure profits."
        },
        {
          "term": "Swing High/Low",
          "definition": "The highest or lowest point in a price movement before a reversal."
        }
      ],
      "whyThisMatters": "Understanding the application of trailing stops in major currency pairs enhances the ability to secure profits during trend expansions without sacrificing trade integrity.",
      "realLifeExample": "In a bullish trend, if EUR/USD breaks a swing high at 1.2000, a trailing stop can be set at 1.1980, allowing for a 20-pip buffer while capturing further upward movement.",
      "commonMistake": "A common mistake is placing trailing stops too close to the market price, leading to premature exits during normal price fluctuations.",
      "quickNote": "Align trailing stops with market structure to maximize trend capture.",
      "mentorText": "When applying trailing stops in major pairs, think of them as a safety net that adjusts with the market. If EUR/USD is trending up, let your stop follow the price without getting too tight.",
      "mentorAnalogy": "Consider trailing stops like a safety harness for a climber; it allows you to ascend while ensuring you won’t fall too far if you slip."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Assessing Volatility in Currency Pairs",
    "label": "Forex Track",
    "body": "### Volatility Assessment: Setting Trailing Stops\nEffective trailing stop placement hinges on accurately assessing the volatility of currency pairs. This card covers **how to use volatility indicators to inform trailing stop strategies**.\n\n* **Volatility Indicators**: Utilize indicators such as Bollinger Bands and the ATR to gauge current market volatility, allowing for dynamic trailing stop adjustments.\n* **Historical Volatility Analysis**: Analyze historical volatility data to set initial trailing stop distances, ensuring they reflect the typical price movement of the currency pair.\n* **Market Conditions Adaptation**: Adjust trailing stops based on prevailing market conditions; for instance, in high-volatility environments, wider stops may be necessary to avoid being stopped out.",
    "context": {
      "keyTerms": [
        {
          "term": "Bollinger Bands",
          "definition": "A volatility indicator that consists of a middle band and two outer bands."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A measure of market volatility based on the range of price movement."
        }
      ],
      "whyThisMatters": "Accurate volatility assessment allows traders to set trailing stops that are both protective and conducive to capturing profit during price swings.",
      "realLifeExample": "If the ATR for GBP/USD is 50 pips, setting a trailing stop 30 pips away from the current price allows for adequate room to accommodate typical fluctuations.",
      "commonMistake": "Failing to adjust trailing stops according to changes in volatility can lead to unnecessary losses or missed profit opportunities.",
      "quickNote": "Use volatility indicators to set informed trailing stop distances.",
      "mentorText": "When assessing volatility, think of it as the market's heartbeat. If GBP/USD is fluctuating wildly, your trailing stop needs to breathe with it, not choke it.",
      "mentorAnalogy": "Assessing volatility is like tuning a musical instrument; you need to adjust based on the environment to ensure harmony in your trading strategy."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Selecting Timeframes for Trailing Stops",
    "label": "Forex Track",
    "body": "### Timeframe Selection: Impact on Trailing Stops\nThe effectiveness of trailing stops is significantly influenced by the timeframe selected for analysis. This card explores **how different timeframes can alter trailing stop strategies**.\n\n* **Higher Timeframe Context**: Use higher timeframes (e.g., daily or weekly) to identify major trends, placing trailing stops based on significant swing points to capture larger price movements.\n* **Lower Timeframe Adjustments**: In lower timeframes (e.g., 15-minute or hourly), trailing stops may need to be tighter due to increased noise, requiring more frequent adjustments.\n* **Timeframe Alignment**: Ensure that the timeframe for trailing stops aligns with your overall trading strategy; for example, if trading on a daily chart, set trailing stops based on daily swings rather than minute-to-minute fluctuations.",
    "context": {
      "keyTerms": [
        {
          "term": "Timeframe",
          "definition": "The duration of price movement analysis, such as minutes, hours, or days."
        },
        {
          "term": "Swing Points",
          "definition": "Key levels where price reverses direction."
        }
      ],
      "whyThisMatters": "Selecting the appropriate timeframe for trailing stops ensures that traders can effectively manage risk while maximizing profit potential.",
      "realLifeExample": "If trading USD/JPY on a daily chart, placing a trailing stop at the last daily swing low allows for capturing larger trends while minimizing the impact of intraday volatility.",
      "commonMistake": "A frequent error is mismatching timeframes; for instance, using a 5-minute chart to set stops for a daily trade can lead to excessive whipsawing.",
      "quickNote": "Align trailing stop strategies with the timeframe of your trading approach.",
      "mentorText": "When selecting timeframes, think of it like choosing the right lens for a camera. A broader lens captures the bigger picture, while a zoom lens focuses on the details.",
      "mentorAnalogy": "Selecting timeframes for trailing stops is akin to choosing the right altitude for a flight; too low, and you encounter turbulence; too high, and you miss the landscape."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Managing Trailing Stops Around Economic News",
    "label": "Forex Track",
    "body": "### Economic News Management: Trailing Stops\nManaging trailing stops around significant economic news releases is critical for protecting trades from volatility spikes. This card discusses **strategies to safeguard positions during high-impact events**.\n\n* **Pre-News Adjustments**: Before major news releases, consider tightening trailing stops to protect profits, as volatility can spike unpredictably.\n* **Post-News Volatility**: After news releases, reassess trailing stop placements based on the new price action and volatility levels, allowing for a more dynamic response.\n* **Economic Calendar Integration**: Incorporate an economic calendar into your trading routine to anticipate news events and adjust trailing stops accordingly, minimizing exposure during high-impact announcements.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic News Release",
          "definition": "Scheduled announcements that can significantly impact market prices."
        },
        {
          "term": "Volatility Spike",
          "definition": "A sudden increase in price movement due to market reactions."
        }
      ],
      "whyThisMatters": "Proper management of trailing stops around economic news releases helps mitigate risk and protect profits during unpredictable market conditions.",
      "realLifeExample": "If the Non-Farm Payroll report is scheduled for release, tightening the trailing stop on AUD/USD to 20 pips before the announcement can help secure profits against potential volatility spikes.",
      "commonMistake": "A common mistake is failing to adjust trailing stops before news releases, leading to significant losses during unexpected market moves.",
      "quickNote": "Adjust trailing stops proactively around significant economic news to manage risk.",
      "mentorText": "Think of economic news as a storm. Before the storm hits, secure your assets by tightening your trailing stops to weather the volatility.",
      "mentorAnalogy": "Managing trailing stops around news is like preparing a ship for a storm; you need to batten down the hatches to protect against sudden waves."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Using Correlation Analysis for Trailing Stops",
    "label": "Forex Track",
    "body": "### Correlation Analysis: Informing Trailing Stop Strategies\nCorrelation analysis between currency pairs provides insights into market behavior and can enhance trailing stop effectiveness. This card teaches **how to leverage correlation metrics to optimize trailing stop placements**.\n\n* **Identifying Strong Correlations**: Analyze pairs such as EURUSD and GBPUSD, which often exhibit a correlation coefficient above 0.8, indicating they move in tandem. This can inform your trailing stop adjustments based on the behavior of correlated pairs.\n* **Divergence Signals**: When a correlated pair diverges, such as AUDUSD weakening while NZDUSD remains strong, consider tightening your trailing stop on AUDUSD to protect profits, anticipating a potential reversal.\n* **Market Sentiment Influence**: Use correlation analysis to gauge market sentiment shifts. For example, if USDJPY shows a strong negative correlation with gold prices, a bullish move in gold may warrant a reevaluation of trailing stops on USDJPY positions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that expresses the extent to which two currency pairs move in relation to each other."
        },
        {
          "term": "Divergence",
          "definition": "A situation where correlated assets move in opposite directions, indicating potential market shifts."
        }
      ],
      "whyThisMatters": "Understanding correlation allows traders to make informed decisions about trailing stops, enhancing risk management and profit protection.",
      "realLifeExample": "During a market session, EURUSD and GBPUSD both rise by 50 pips. If EURUSD begins to show weakness while GBPUSD remains strong, adjust your trailing stop on EURUSD to lock in profits.",
      "commonMistake": "Failing to consider correlation can lead to inadequate trailing stop placements, exposing positions to unnecessary risk.",
      "quickNote": "Leverage correlation analysis to inform trailing stop strategies and protect profits.",
      "mentorText": "When you see two pairs moving together, like EURUSD and GBPUSD, remember that their relationship can guide your trailing stop decisions. If one starts to falter, tighten your stops on the weaker one.",
      "mentorAnalogy": "Think of correlation analysis like a traffic report for a city. If one road is congested, you can anticipate that nearby roads may also be affected, allowing you to adjust your route accordingly."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Setting Parameters for Trailing Stops",
    "label": "Forex Track",
    "body": "### Parameterization: Customizing Trailing Stops\nSetting specific parameters for trailing stops is essential for aligning with individual trading strategies and market conditions. This card teaches **how to effectively customize trailing stop parameters**.\n\n* **Volatility Assessment**: Utilize Average True Range (ATR) to determine the volatility of a currency pair. For instance, if EURUSD has an ATR of 30 pips, consider setting your trailing stop at 1.5x ATR, or 45 pips, to accommodate normal price fluctuations.\n* **Timeframe Consideration**: Adjust trailing stop parameters based on the trading timeframe. A day trader may set a tighter stop of 20 pips, while a swing trader might opt for a 100-pip trailing stop to capture larger moves.\n* **Risk-Reward Ratio Alignment**: Ensure your trailing stop aligns with your risk-reward ratio. If targeting a 1:3 ratio, set the trailing stop at a distance that allows for this balance, such as 30 pips for a 90-pip target on GBPJPY.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A measure of market volatility that indicates the average range of price movement over a specified period."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A ratio that compares the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Customizing trailing stop parameters ensures that traders can adapt to market conditions and protect profits effectively.",
      "realLifeExample": "In a volatile market, if GBPUSD shows an ATR of 50 pips, setting a trailing stop at 75 pips allows for price swings while securing profits from upward trends.",
      "commonMistake": "Using a one-size-fits-all approach to trailing stop parameters can lead to premature exits or excessive risk exposure.",
      "quickNote": "Customize trailing stop parameters based on volatility, timeframe, and risk-reward ratios.",
      "mentorText": "Adjust your trailing stops based on how much the market moves. If you’re trading a volatile pair, give it room to breathe; if it’s stable, tighten those stops to lock in gains.",
      "mentorAnalogy": "Setting trailing stops is like calibrating a precision instrument. Each adjustment must consider the environment to ensure accurate performance."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios for Forex Trailing Stops",
    "label": "Forex Track",
    "body": "### Scenario Analysis: Applying Trailing Stops in Forex\nEngaging in practical scenarios enhances the understanding of trailing stop applications in forex trading. This card provides **real-world examples for analysis and decision-making**.\n\n* **Scenario 1**: You enter a long position on USDCHF at 0.9100. The ATR is 25 pips. What trailing stop should you set to maximize profit while allowing for volatility?\n* **Scenario 2**: After entering a short position on AUDCAD at 0.9400, the market begins to rally. The ATR is 15 pips. How would you adjust your trailing stop to protect against a potential loss?\n* **Scenario 3**: You are in a long position on NZDJPY at 78.50. The market is trending upward, and the ATR is 40 pips. What trailing stop distance would you set to balance risk and profit capture?\n",
    "context": {
      "keyTerms": [
        {
          "term": "Long Position",
          "definition": "A trade where a trader buys an asset expecting its price to rise."
        },
        {
          "term": "Short Position",
          "definition": "A trade where a trader sells an asset expecting its price to fall."
        }
      ],
      "whyThisMatters": "Practicing with real-world scenarios helps traders apply theoretical knowledge of trailing stops to actual market conditions.",
      "realLifeExample": "In Scenario 1, if you set a trailing stop at 1.5x ATR (37.5 pips), your stop would be at 0.9062, allowing for volatility while securing profits.",
      "commonMistake": "Ignoring market conditions when setting trailing stops can lead to missed profit opportunities or increased losses.",
      "quickNote": "Analyze practical scenarios to enhance decision-making skills regarding trailing stops.",
      "mentorText": "When you face a market scenario, think critically about how to set your trailing stops. Consider the ATR and market direction to make informed adjustments.",
      "mentorAnalogy": "Analyzing trailing stop scenarios is like running simulations for a flight. Each decision must consider potential turbulence and weather conditions to ensure a safe landing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You enter a long position on USDCHF at 0.9100 with an ATR of 25 pips. What trailing stop should you set to maximize profit while allowing for volatility?",
      "options": [
        {
          "id": "0",
          "text": "0.9075 (1x ATR)",
          "isCorrect": false,
          "feedback": "This stop is too tight and may result in premature exit."
        },
        {
          "id": "1",
          "text": "0.9087 (1.5x ATR)",
          "isCorrect": true,
          "feedback": "This stop allows for volatility while protecting profits effectively."
        },
        {
          "id": "2",
          "text": "0.9050 (2x ATR)",
          "isCorrect": false,
          "feedback": "This stop is too far and may expose you to unnecessary risk."
        },
        {
          "id": "3",
          "text": "0.9090 (1.2x ATR)",
          "isCorrect": false,
          "feedback": "This stop is not optimal for the given volatility."
        }
      ]
    },
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Trailing Stop Techniques",
    "label": "Forex Track",
    "body": "### Summary: Key Techniques for Trailing Stops\nA comprehensive understanding of trailing stop techniques is vital for effective forex trading. This card summarizes **the essential strategies for implementing trailing stops**.\n\n* **Dynamic Adjustments**: Regularly adjust trailing stops based on market volatility and price action. Utilize tools like ATR to inform these adjustments.\n* **Correlation Awareness**: Monitor correlated pairs to anticipate market movements and adjust trailing stops accordingly, ensuring protection against adverse price actions.\n* **Customization**: Tailor trailing stop parameters to fit your trading style, timeframe, and risk tolerance, ensuring that each stop is strategically placed for optimal performance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Adjustments",
          "definition": "The practice of regularly modifying trailing stops based on changing market conditions."
        },
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time, which can inform trading decisions."
        }
      ],
      "whyThisMatters": "Mastering trailing stop techniques enhances a trader's ability to secure profits and manage risk effectively in the forex market.",
      "realLifeExample": "A trader utilizing dynamic adjustments may tighten their trailing stop on USDJPY after a significant price surge, ensuring profits are locked in while allowing for potential further gains.",
      "commonMistake": "Neglecting to adapt trailing stops to changing market conditions can lead to missed opportunities or increased losses.",
      "quickNote": "Implement dynamic adjustments, correlation awareness, and customization for effective trailing stop strategies.",
      "mentorText": "Always be ready to adjust your trailing stops as market conditions change. Think of it as fine-tuning an instrument to ensure it plays perfectly in tune with the market.",
      "mentorAnalogy": "Implementing trailing stops is like a conductor leading an orchestra. Each adjustment must harmonize with the market's rhythm to achieve a successful performance."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  }
];
