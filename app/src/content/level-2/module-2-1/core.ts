import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Candlestick Footprints",
    "label": "Core Track",
    "body": "### Candlestick Anatomy: OHLC Footprints\nCandlestick patterns encapsulate critical market data through their Open, High, Low, and Close (OHLC) values. This card focuses on **how these values act as algorithmic footprints reflecting market behavior**.\n\n* **Open and Close**: The open price indicates the starting point of a trading session, while the close reflects the final price at session end. Analyzing the relationship between these two can reveal bullish or bearish sentiment.\n* **High and Low**: The high and low prices represent the extremes of market movement within the timeframe. A candlestick with a long wick indicates volatility and potential reversal points.\n* **Market Behavior Reflection**: The combination of OHLC values provides insights into institutional trading patterns, as large players often manipulate price levels to achieve specific objectives.",
    "context": {
      "keyTerms": [
        {
          "term": "OHLC",
          "definition": "Open, High, Low, and Close prices of a candlestick."
        }
      ],
      "whyThisMatters": "Understanding OHLC values allows traders to interpret market sentiment and identify potential reversals or continuations in price action.",
      "realLifeExample": "On a 1-hour chart of EURUSD, a candlestick opens at 1.1000, reaches a high of 1.1050, a low of 1.0950, and closes at 1.1020, indicating bullish pressure despite volatility.",
      "commonMistake": "Traders often overlook the significance of the open and close prices, focusing solely on the high and low.",
      "quickNote": "OHLC values are essential for analyzing market behavior and institutional strategies.",
      "mentorText": "When you look at a candlestick, think of it as a snapshot of market activity. The open tells you where the session began, and the close shows where it ended. Pay attention to the extremes, as they reveal the battle between buyers and sellers.",
      "mentorAnalogy": "Consider a candlestick as a report card for a trading session, where the open is the starting grade, the close is the final score, and the high and low are the peaks and valleys of performance."
    },
    "taskData": null,
    "visualKey": "chart-basics-intro"
  },
  {
    "type": "concept",
    "title": "Decoding Candlestick Components",
    "label": "Core Track",
    "body": "### Candlestick Components: Dissecting Price Action\nEach candlestick is composed of distinct elements that convey price action and market sentiment. This card teaches **how to analyze the body and wicks of a candlestick**.\n\n* **Body Analysis**: The body of the candlestick represents the price range between the open and close. A long body indicates strong buying or selling pressure, while a short body suggests indecision.\n* **Wick Interpretation**: The wicks, or shadows, indicate price extremes within the timeframe. A long upper wick may signal selling pressure after a rally, while a long lower wick can indicate buying interest after a decline.\n* **Color Significance**: The color of the candlestick (typically green for bullish and red for bearish) provides immediate visual cues about market sentiment, but must be analyzed in conjunction with body size and wick length.",
    "context": {
      "keyTerms": [
        {
          "term": "Candlestick Body",
          "definition": "The area between the open and close prices of a candlestick."
        },
        {
          "term": "Wick",
          "definition": "The lines extending from the body representing price extremes."
        }
      ],
      "whyThisMatters": "Dissecting candlestick components allows traders to gauge market sentiment and potential price movements more accurately.",
      "realLifeExample": "On a daily chart of AAPL, a candlestick with a large green body and a short upper wick indicates strong buying interest, closing at $150 after opening at $145, with a high of $152 and a low of $144.",
      "commonMistake": "Traders often misinterpret wick lengths without considering the context of the body size and overall market conditions.",
      "quickNote": "Understanding body and wick dynamics is crucial for accurate price action analysis.",
      "mentorText": "Look closely at each candlestick. The body tells you how much the price moved, while the wicks show you where the price tried to go. Together, they provide a complete picture of market sentiment.",
      "mentorAnalogy": "Think of a candlestick as a sports play; the body is the main action, while the wicks are the attempts to score that didn't succeed, reflecting the struggle between opposing teams."
    },
    "taskData": null,
    "visualKey": "candle-anatomy"
  },
  {
    "type": "concept",
    "title": "OHLC as Timeframe Indicators",
    "label": "Core Track",
    "body": "### OHLC Values: Timeframe Insights\nThe Open, High, Low, and Close values serve as critical indicators of price delivery across various timeframes. This card explores **how OHLC values reveal institutional trading strategies and market dynamics**.\n\n* **Timeframe Relevance**: Each timeframe provides a different perspective on market behavior. A daily OHLC may indicate long-term trends, while a 5-minute OHLC reveals short-term volatility.\n* **Institutional Strategy Reflection**: Large institutions often set key levels based on OHLC values. A breakout above the previous day's high can trigger significant buying interest from institutional players.\n* **Price Delivery Analysis**: Comparing OHLC values across multiple timeframes helps identify convergence or divergence, indicating potential market reversals or continuations based on institutional activity.",
    "context": {
      "keyTerms": [
        {
          "term": "Timeframe",
          "definition": "The duration over which price action is analyzed."
        }
      ],
      "whyThisMatters": "Recognizing how OHLC values function across timeframes enables traders to align their strategies with institutional movements and market trends.",
      "realLifeExample": "On a 4-hour chart of GBPUSD, the OHLC values show a close at 1.3600 after a high of 1.3650 and a low of 1.3550, indicating potential resistance at 1.3650 for the next trading session.",
      "commonMistake": "Traders frequently analyze OHLC values in isolation without considering the implications of different timeframes.",
      "quickNote": "OHLC values across timeframes provide insights into institutional trading behavior.",
      "mentorText": "When you analyze OHLC values, think of them as clues left by institutional traders. They set the stage for the next moves, and understanding these clues can give you an edge.",
      "mentorAnalogy": "Consider OHLC values like a series of weather reports; each timeframe provides a snapshot of conditions, helping you decide whether to carry an umbrella or wear sunglasses."
    },
    "taskData": null,
    "visualKey": "ohlc-delivery"
  },
  {
    "type": "concept",
    "title": "Timeframes as Institutional Intervals",
    "label": "Core Track",
    "body": "### Timeframes: Institutional Perspectives\nTimeframes represent intervals that reflect institutional trading strategies rather than mere retail sentiment. This card emphasizes **the importance of understanding timeframes for effective price delivery and analysis**.\n\n* **Institutional Time Buckets**: Different timeframes correspond to specific institutional trading strategies. For instance, daily charts are often used for swing trading, while 1-minute charts cater to scalpers.\n* **Impact on Price Delivery**: Price movements on higher timeframes tend to be more significant, as they reflect larger capital flows and institutional decisions. A breakout on a daily chart carries more weight than one on a 5-minute chart.\n* **Inter-timeframe Analysis**: Analyzing price action across multiple timeframes allows traders to identify key levels and trends, enhancing their ability to make informed trading decisions based on institutional behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "Inter-timeframe Analysis",
          "definition": "The practice of analyzing price action across multiple timeframes."
        }
      ],
      "whyThisMatters": "Understanding timeframes enables traders to align their strategies with institutional trading patterns, improving decision-making and trade execution.",
      "realLifeExample": "On a weekly chart of USDJPY, a breakout above 110.00 indicates strong bullish sentiment, while a 15-minute chart shows consolidation at that level, suggesting potential entry points for day traders.",
      "commonMistake": "Traders often focus solely on lower timeframes, neglecting the broader context provided by higher timeframes.",
      "quickNote": "Timeframes are critical for aligning trading strategies with institutional activity.",
      "mentorText": "When you look at timeframes, think of them as different lenses through which to view the market. Each lens reveals unique insights that can guide your trading decisions.",
      "mentorAnalogy": "Imagine timeframes as different camera angles in a film; each angle provides a unique perspective on the same scene, helping you understand the full story of market movement."
    },
    "taskData": null,
    "visualKey": "timeframe-intro"
  },
  {
    "type": "concept",
    "title": "Price Delivery Dynamics",
    "label": "Core Track",
    "body": "### Price Delivery: Institutional vs. Retail Dynamics\nPrice delivery reflects the balance of power between institutional and retail traders. This card analyzes **how candlestick formations can indicate shifts in market control**.\n\n* **Bullish/Bearish Engulfing Patterns**: A bullish engulfing pattern indicates a potential shift to institutional buying dominance, while a bearish engulfing suggests retail selling pressure may be losing control. For example, if EURUSD forms a bullish engulfing at 1.1000 after a downtrend, it signals institutional interest.\n* **Doji Candlesticks**: A doji indicates indecision in the market, often occurring at key support or resistance levels. If a doji appears at 1.1500 on GBPUSD after a strong bullish trend, it may suggest that institutions are reevaluating their positions.\n* **Volume Confirmation**: Analyze volume spikes accompanying candlestick formations. A bullish candlestick with increased volume suggests institutional support, while a bearish candlestick with low volume may indicate retail-driven moves.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Engulfing Pattern",
          "definition": "A candlestick pattern where a larger candle engulfs the previous candle, indicating a potential reversal."
        },
        {
          "term": "Doji",
          "definition": "A candlestick with a small body and long wicks, indicating market indecision."
        },
        {
          "term": "Volume Spike",
          "definition": "A significant increase in trading volume, often indicating strong market interest."
        }
      ],
      "whyThisMatters": "Understanding price delivery dynamics allows traders to identify potential shifts in market control, enhancing decision-making.",
      "realLifeExample": "On July 15, 2023, EURUSD formed a bullish engulfing pattern at 1.1000 with a volume spike of 150% compared to the previous day, indicating institutional buying interest.",
      "commonMistake": "Traders often misinterpret doji candles as definitive signals rather than indicators of indecision.",
      "quickNote": "Candlestick formations reveal the balance of power between institutional and retail traders.",
      "mentorText": "When you see a bullish engulfing pattern, think of it as institutions stepping in to take control. If the volume supports it, you have a strong signal of a potential trend reversal.",
      "mentorAnalogy": "Consider the market like a tug-of-war match; candlestick patterns show which side is gaining strength and control."
    },
    "taskData": null,
    "visualKey": "chart-basics-debrief"
  },
  {
    "type": "concept",
    "title": "Institutional Timing and Market Moves",
    "label": "Core Track",
    "body": "### Institutional Timing: Analyzing Market Moves\nUnderstanding the timing of institutional trades is critical for anticipating market movements. This card investigates **how candlestick patterns can serve as indicators of institutional activity**.\n\n* **Opening Range Breakouts**: Identify the first hour's high and low as key levels. A breakout above the high with a strong bullish candle suggests institutional buying, while a breakout below indicates selling. For instance, if the S&P 500 opens at 4,000 and breaks above 4,020 with a large green candle, it signals institutional buying.\n* **End-of-Day Patterns**: Pay attention to candlestick formations at market close. A strong close above the opening price often indicates institutional confidence. If NASDAQ closes above its opening price after a volatile day, it reflects institutional accumulation.\n* **News Reaction Candles**: Analyze candlestick patterns following major news releases. A rapid bullish candle after a positive employment report can indicate institutional buying, while a bearish candle may suggest profit-taking or selling pressure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Opening Range",
          "definition": "The high and low of the first hour of trading, used as key levels for breakouts."
        },
        {
          "term": "End-of-Day Close",
          "definition": "The final price of an asset at the end of the trading session, reflecting market sentiment."
        },
        {
          "term": "News Reaction Candle",
          "definition": "A candlestick formed in response to significant news events, indicating market sentiment."
        }
      ],
      "whyThisMatters": "Recognizing institutional timing enhances the ability to anticipate market movements and align trading strategies accordingly.",
      "realLifeExample": "On August 5, 2023, after a positive non-farm payroll report, the S&P 500 formed a bullish candle that closed 1.5% higher, indicating strong institutional buying interest.",
      "commonMistake": "Traders often overlook the significance of the opening range, missing potential breakout opportunities.",
      "quickNote": "Institutional timing can reveal potential market movements through candlestick patterns.",
      "mentorText": "When you see a breakout from the opening range, consider it a signal that institutions are making their move. Timing is everything in this game.",
      "mentorAnalogy": "Think of institutional timing like a conductor leading an orchestra; their cues dictate the market's rhythm and direction."
    },
    "taskData": null,
    "visualKey": "chart-basics-intro"
  },
  {
    "type": "concept",
    "title": "Recognizing Candlestick Patterns",
    "label": "Core Track",
    "body": "### Candlestick Patterns: Implications for Price Movements\nIdentifying candlestick patterns is essential for understanding future price movements. This card focuses on **how these patterns reflect institutional trading strategies**.\n\n* **Hammer and Shooting Star**: A hammer at the bottom of a downtrend indicates potential reversal, while a shooting star at the top signals a bearish reversal. For example, if USDJPY forms a hammer at 110.00, it suggests institutional buying interest.\n* **Three White Soldiers and Three Black Crows**: A sequence of three bullish candles indicates strong buying pressure, while three bearish candles suggest selling dominance. If AUDCAD closes with three white soldiers, it reflects institutional confidence in upward momentum.\n* **Morning and Evening Stars**: These patterns indicate potential reversals. A morning star after a downtrend suggests institutional buying, while an evening star after an uptrend indicates selling pressure from institutions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Hammer",
          "definition": "A candlestick pattern with a small body and long lower wick, indicating potential reversal."
        },
        {
          "term": "Shooting Star",
          "definition": "A candlestick pattern with a small body and long upper wick, indicating potential bearish reversal."
        },
        {
          "term": "Three White Soldiers",
          "definition": "A sequence of three consecutive bullish candles, indicating strong buying pressure."
        }
      ],
      "whyThisMatters": "Recognizing candlestick patterns allows traders to anticipate potential market reversals and align their strategies with institutional behavior.",
      "realLifeExample": "On September 10, 2023, GBPUSD formed a hammer at 1.2500 after a downtrend, leading to a subsequent rally of 150 pips, indicating institutional buying interest.",
      "commonMistake": "Traders often misinterpret single candlestick patterns without considering the overall market context.",
      "quickNote": "Candlestick patterns provide insights into potential future price movements based on institutional strategies.",
      "mentorText": "When you spot a hammer, think of it as a signal that institutions are ready to step in. Always consider the context before acting on it.",
      "mentorAnalogy": "Recognizing candlestick patterns is like reading the signals of a traffic light; they guide your decisions in the market."
    },
    "taskData": null,
    "visualKey": "candle-anatomy"
  },
  {
    "type": "concept",
    "title": "Analyzing Multiple Timeframes",
    "label": "Core Track",
    "body": "### Multiple Timeframes: Comprehensive Market Analysis\nAnalyzing multiple timeframes is crucial for gaining a holistic view of market conditions. This card explores **how this practice enhances understanding of price action and institutional behavior**.\n\n* **Daily vs. Hourly Analysis**: Use daily charts to identify the overall trend and hourly charts for entry points. If the daily chart shows a bullish trend while the hourly chart shows a pullback, it may present a buying opportunity. For instance, if the daily trend for USDCHF is bullish, and the hourly chart shows a retracement to 0.9500, consider entering long.\n* **Support and Resistance Levels**: Identify key support and resistance levels across multiple timeframes. A resistance level on the daily chart that aligns with a bearish reversal pattern on the hourly chart indicates a strong potential for price rejection.\n* **Trend Confirmation**: Use higher timeframes to confirm trends observed in lower timeframes. If the weekly chart indicates a bullish trend, and the daily chart shows a bullish breakout, it reinforces the likelihood of continued upward movement.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Higher Timeframe",
          "definition": "A longer duration chart used to identify overall market trends."
        },
        {
          "term": "Lower Timeframe",
          "definition": "A shorter duration chart used for precise entry and exit points."
        },
        {
          "term": "Support and Resistance",
          "definition": "Price levels where the market tends to reverse or consolidate."
        }
      ],
      "whyThisMatters": "Analyzing multiple timeframes allows traders to align their strategies with broader market trends and institutional behavior.",
      "realLifeExample": "On October 2, 2023, the daily chart for EURJPY showed a bullish trend, while the hourly chart indicated a retracement to 145.00, providing a clear buying opportunity as price bounced off that level.",
      "commonMistake": "Traders often rely solely on one timeframe, missing critical insights from higher or lower timeframes.",
      "quickNote": "Multiple timeframe analysis enhances understanding of market conditions and price action.",
      "mentorText": "When analyzing timeframes, think of it as looking at a map from different heights; each perspective reveals different details about the market landscape.",
      "mentorAnalogy": "Consider multiple timeframe analysis like an architect reviewing blueprints; each layer provides essential insights for the final structure."
    },
    "taskData": null,
    "visualKey": "ohlc-delivery"
  },
  {
    "type": "concept",
    "title": "Market Sentiment vs. Institutional Activity",
    "label": "Core Track",
    "body": "### Market Sentiment vs. Institutional Activity: Candlestick Contextualization\nCandlestick formations can often mislead retail traders without proper context regarding market sentiment and institutional activity. This card outlines **how to differentiate between these two forces** to enhance trading decisions.\n\n* **Sentiment Analysis**: Observe the candlestick patterns in conjunction with volume spikes. A bullish engulfing candle with low volume may indicate retail sentiment rather than genuine institutional interest.\n* **Institutional Footprints**: Identify larger timeframes where significant price movements occur. For instance, a daily bearish candle followed by a series of smaller bullish candles may reflect institutional accumulation rather than a reversal.\n* **Contextual Interpretation**: Always analyze candlestick formations within the broader market context. A single candlestick's implication can change drastically when viewed alongside key economic releases or market news.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        },
        {
          "term": "Institutional Activity",
          "definition": "The trading actions of large entities such as banks, mutual funds, and hedge funds."
        }
      ],
      "whyThisMatters": "Understanding the distinction between market sentiment and institutional activity is critical for avoiding false signals and aligning with genuine market movements.",
      "realLifeExample": "On March 15, 2023, the EURUSD showed a bullish engulfing pattern on a 1-hour chart with only 50K in volume, indicating retail sentiment rather than institutional support.",
      "commonMistake": "Traders often misinterpret bullish or bearish candlestick patterns without considering the accompanying volume and broader market context.",
      "quickNote": "Always analyze candlestick patterns with volume and context to avoid misinterpretation.",
      "mentorText": "When you see a candlestick pattern, ask yourself: is this backed by institutional activity or just retail noise? Look for volume and context.",
      "mentorAnalogy": "Think of candlestick analysis like reading a weather report. Just because it’s sunny doesn’t mean it won’t rain later; always consider the broader forecast."
    },
    "taskData": null,
    "visualKey": "timeframe-intro"
  },
  {
    "type": "concept",
    "title": "Psychology Behind Candlestick Formation",
    "label": "Core Track",
    "body": "### Psychology Behind Candlestick Formation: Trader Behavior Insights\nCandlestick formations are a direct reflection of trader psychology and behavior. This card explores **how psychological factors influence price movements and institutional strategies**.\n\n* **Fear and Greed Dynamics**: Recognize that large price swings often occur during periods of heightened fear or greed, leading to specific candlestick formations such as shooting stars or hammers.\n* **Market Reactions**: Observe how traders react to key levels of support and resistance. For example, a doji at a resistance level often indicates indecision, signaling potential reversals or continuation based on trader psychology.\n* **Institutional Strategy**: Understand that institutions often exploit retail psychology. A sudden drop followed by a bullish reversal candle can indicate a trap set for retail traders who panic sell.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Trader Psychology",
          "definition": "The emotional and mental state of traders that influences their trading decisions."
        },
        {
          "term": "Market Reactions",
          "definition": "The response of traders to price movements, news, and economic indicators."
        }
      ],
      "whyThisMatters": "Recognizing the psychological underpinnings of candlestick formations allows traders to anticipate potential market movements and align their strategies accordingly.",
      "realLifeExample": "On February 10, 2023, the S&P 500 formed a doji at 4,200, indicating indecision among traders after a strong rally, leading to a subsequent reversal.",
      "commonMistake": "Traders often overlook the psychological context behind candlestick formations, focusing solely on the patterns without understanding trader sentiment.",
      "quickNote": "Candlestick formations are reflections of trader psychology; always consider the emotional context.",
      "mentorText": "When analyzing candlesticks, think about what traders are feeling. Are they scared, greedy, or uncertain? This will guide your interpretation.",
      "mentorAnalogy": "Consider candlestick formations like a crowd at a concert. The energy of the crowd can shift rapidly; understanding their mood is key to predicting the next song."
    },
    "taskData": null,
    "visualKey": "chart-basics-debrief"
  },
  {
    "type": "concept",
    "title": "Integrating Candlestick Analysis into Strategies",
    "label": "Core Track",
    "body": "### Integrating Candlestick Analysis into Strategies: Timing and Execution\nIncorporating candlestick analysis into trading strategies enhances timing and execution based on institutional footprints. This card details **how to effectively integrate candlestick insights into your trading framework**.\n\n* **Timing Entries and Exits**: Use candlestick patterns to time entries at key support or resistance levels. For instance, entering a long position after a bullish engulfing candle at a support level can align with institutional buying.\n* **Execution Based on Context**: Analyze the context of candlestick formations within the broader market structure. A series of higher lows accompanied by bullish candles can indicate a strong uptrend, suggesting a favorable entry point.\n* **Institutional Signals**: Look for candlestick patterns that coincide with significant economic events. For example, a strong bullish candle following a positive NFP report can validate a long position in the USD pairs.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Candlestick Patterns",
          "definition": "Specific formations of candlesticks that indicate potential market movements."
        },
        {
          "term": "Institutional Footprints",
          "definition": "Indicators of trading activity by large market participants."
        }
      ],
      "whyThisMatters": "Integrating candlestick analysis into strategies allows traders to make informed decisions based on market context and institutional behavior.",
      "realLifeExample": "On January 25, 2023, after the FOMC meeting, the GBPUSD formed a bullish engulfing candle, providing a clear entry point for a long position as the market reacted to dovish signals.",
      "commonMistake": "Traders often fail to consider the broader market context when executing trades based on candlestick patterns, leading to poor timing.",
      "quickNote": "Use candlestick patterns in conjunction with market context to refine entry and exit strategies.",
      "mentorText": "When you see a candlestick pattern, think about how it fits into your overall strategy. Is it confirming your analysis or contradicting it? Use it wisely.",
      "mentorAnalogy": "Integrating candlestick analysis into your strategy is like a pilot using instruments to navigate. Each reading provides essential information for a safe landing."
    },
    "taskData": null,
    "visualKey": "chart-basics-intro"
  },
  {
    "type": "concept",
    "title": "Risk Management with Candlestick Insights",
    "label": "Core Track",
    "body": "### Risk Management with Candlestick Insights: Capital Protection Strategies\nApplying candlestick insights to risk management practices is essential for protecting capital while leveraging institutional signals. This card outlines **how to utilize candlestick analysis for effective risk management**.\n\n* **Stop-Loss Placement**: Use candlestick patterns to determine optimal stop-loss levels. For example, placing a stop-loss below the low of a bullish engulfing candle helps protect against false breakouts.\n* **Position Sizing**: Adjust position sizes based on the volatility indicated by candlestick formations. A wide-bodied candle suggests higher volatility, warranting smaller position sizes to mitigate risk.\n* **Risk-Reward Ratios**: Evaluate risk-reward ratios using candlestick formations. A strong reversal candle at a support level with a favorable risk-reward ratio can justify a long position while managing risk effectively.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Placement",
          "definition": "The strategy of setting a predetermined price level to exit a losing trade."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade."
        }
      ],
      "whyThisMatters": "Utilizing candlestick insights for risk management ensures traders can protect their capital while taking advantage of market opportunities.",
      "realLifeExample": "On April 5, 2023, after a bullish reversal candle formed on the AUDUSD, a trader placed a stop-loss just below the candle's low, effectively managing risk while entering a long position.",
      "commonMistake": "Traders often neglect to adjust stop-loss levels based on candlestick formations, leading to unnecessary losses during market volatility.",
      "quickNote": "Incorporate candlestick insights into risk management to safeguard your capital effectively.",
      "mentorText": "When setting your stop-loss, consider the candlestick structure. It should protect you from false moves while allowing for market fluctuations.",
      "mentorAnalogy": "Think of risk management with candlestick insights like a surgeon using precise instruments. Each decision must be calculated to ensure a successful outcome."
    },
    "taskData": null,
    "visualKey": "candle-anatomy"
  },
  {
    "type": "concept",
    "title": "Practical Application of Candlestick Analysis",
    "label": "Core Track",
    "body": "### Candlestick Analysis: Engaging with OHLC Data\nCandlestick patterns provide critical insights into market sentiment and potential price movements. This card focuses on **applying candlestick analysis techniques to real market scenarios**.\n\n* **OHLC Breakdown**: Analyze the Open, High, Low, and Close of a candlestick to determine market sentiment. For instance, a bullish engulfing pattern on the EURUSD 1-hour chart indicates a potential reversal if the close exceeds the previous high.\n* **Timeframe Correlation**: Assess how different timeframes interact. A bullish signal on the 15-minute chart may be invalidated by a bearish signal on the daily chart, necessitating a multi-timeframe analysis.\n* **Practical Exercises**: Engage in exercises where you identify candlestick patterns in live markets, such as spotting a doji on the GBPJPY 4-hour chart during high-impact news releases, and evaluate the implications for your trading strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Candlestick Patterns",
          "definition": "Visual representations of price movements that indicate market sentiment."
        },
        {
          "term": "Timeframe Analysis",
          "definition": "The study of price movements across different timeframes to validate trading signals."
        }
      ],
      "whyThisMatters": "Understanding OHLC and timeframe relationships enhances decision-making and risk management in trading.",
      "realLifeExample": "On the AUDUSD 30-minute chart, a hammer candlestick forms after a downtrend, closing above the previous high, suggesting a potential bullish reversal.",
      "commonMistake": "Traders often overlook the significance of timeframe alignment, leading to conflicting signals that can result in losses.",
      "quickNote": "Effective candlestick analysis requires a thorough understanding of OHLC data and timeframe relationships.",
      "mentorText": "When you analyze candlesticks, focus on how the OHLC data tells a story about market sentiment. Look for patterns that confirm or contradict each other across timeframes.",
      "mentorAnalogy": "Think of candlestick analysis like reading a flight data recorder. Each candlestick provides a snapshot of market behavior, and understanding the sequence helps you predict future movements."
    },
    "taskData": null,
    "visualKey": "ohlc-delivery"
  },
  {
    "type": "practice",
    "title": "Summary of Candlestick Insights",
    "label": "Core Track",
    "body": "### Candlestick Insights: Key Takeaways\nSummarizing the insights gained from candlestick analysis is essential for reinforcing understanding. This card emphasizes **the importance of candlestick anatomy and timeframe analysis**.\n\n* **Anatomy of a Candlestick**: Recognize that each candlestick reflects market psychology, with the body and wicks indicating buying and selling pressure. For example, a long body with small wicks suggests strong momentum in the direction of the close.\n* **Timeframe Impact**: Different timeframes can provide varying perspectives on market trends. A bullish trend on the daily chart may appear as consolidation on the 5-minute chart, highlighting the need for timeframe context in analysis.\n* **Institutional Behavior**: Candlestick patterns often reflect institutional trading behavior. For instance, a series of lower highs on the S&P 500 1-hour chart may indicate institutional selling pressure, warranting caution in long positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Psychology",
          "definition": "The emotional and psychological factors that influence trading behavior."
        },
        {
          "term": "Institutional Trading",
          "definition": "The buying and selling activities of large financial organizations that can impact market movements."
        }
      ],
      "whyThisMatters": "A solid grasp of candlestick insights allows traders to anticipate market movements and align their strategies with institutional behavior.",
      "realLifeExample": "During the US Non-Farm Payroll report, the USDJPY 15-minute chart shows a series of bullish candlesticks, indicating strong buying interest from institutions ahead of the release.",
      "commonMistake": "Failing to summarize and integrate candlestick insights can lead to fragmented trading strategies and missed opportunities.",
      "quickNote": "Summarizing candlestick insights reinforces your understanding of market dynamics and improves decision-making.",
      "mentorText": "Reflect on what each candlestick tells you about market sentiment. Summarizing these insights helps you stay aligned with market movements.",
      "mentorAnalogy": "Consider summarizing candlestick insights like a pilot reviewing flight logs. Each entry provides crucial information about past performance, guiding future decisions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe a bullish engulfing pattern on the daily chart of the EURUSD. What should you consider before executing a trade?",
      "options": [
        {
          "id": "0",
          "text": "Check if the 4-hour chart confirms the bullish signal.",
          "isCorrect": true,
          "feedback": "Confirming signals across multiple timeframes increases the reliability of your trade."
        },
        {
          "id": "1",
          "text": "Execute the trade immediately without further analysis.",
          "isCorrect": false,
          "feedback": "Immediate execution without confirmation can lead to unnecessary losses."
        },
        {
          "id": "2",
          "text": "Look for news events that could impact the EURUSD.",
          "isCorrect": false,
          "feedback": "While news events are important, confirmation from the timeframe analysis is crucial before executing."
        },
        {
          "id": "3",
          "text": "Ignore the pattern if it appears on a lower timeframe.",
          "isCorrect": false,
          "feedback": "Lower timeframe patterns can still provide valuable insights when aligned with higher timeframes."
        }
      ]
    },
    "visualKey": "timeframe-intro"
  },
  {
    "type": "summary",
    "title": "Core Advanced Application 15",
    "label": "Core Track",
    "body": "### Advanced Application of Chart Basics\nThis card delves into the advanced application of candlestick analysis and timeframe relationships, focusing on **nuances that professional traders must consider**.\n\n* **Complex Patterns**: Identify complex candlestick patterns such as the evening star or three black crows, which require a deeper understanding of market psychology. For example, an evening star on the NASDAQ 1-hour chart after a strong uptrend signals potential reversal, demanding caution in long positions.\n* **Timeframe Divergence**: Analyze divergences between timeframes, where a bullish signal on the 15-minute chart contradicts a bearish signal on the daily chart. This divergence can indicate market indecision, requiring a more cautious approach.\n* **Risk Management**: Implement advanced risk management techniques based on candlestick formations. For instance, placing stop-loss orders just below the low of a bearish engulfing pattern on the GBPUSD 4-hour chart can protect against unexpected reversals.",
    "context": {
      "keyTerms": [
        {
          "term": "Complex Patterns",
          "definition": "Advanced candlestick formations that indicate potential market reversals or continuations."
        },
        {
          "term": "Divergence",
          "definition": "A situation where two or more indicators or timeframes provide conflicting signals."
        }
      ],
      "whyThisMatters": "Mastering advanced applications of candlestick analysis enhances your ability to navigate complex market conditions.",
      "realLifeExample": "On the DAX 30-minute chart, a three black crows pattern forms after a bullish rally, indicating a strong shift in market sentiment that requires immediate risk reassessment.",
      "commonMistake": "Traders often misinterpret complex patterns, leading to premature entries or exits based on incomplete analysis.",
      "quickNote": "Advanced candlestick analysis requires recognizing complex patterns and understanding timeframe divergences.",
      "mentorText": "As you progress, focus on the subtleties of candlestick patterns. They can reveal deeper market insights that are crucial for professional trading.",
      "mentorAnalogy": "Think of advanced candlestick analysis like a surgeon performing a complex procedure. Every detail matters, and a thorough understanding of the anatomy is essential for success."
    },
    "taskData": null,
    "visualKey": "chart-basics-debrief"
  }
];
