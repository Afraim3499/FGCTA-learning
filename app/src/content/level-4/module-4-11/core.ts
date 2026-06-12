import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding the Weekly Candle Structure",
    "label": "Core Track",
    "body": "### Weekly Candle Analysis: High/Low of the Week (HOW/LOW) Formation\nThe weekly candle structure provides critical insights into market sentiment and potential price movements. This card teaches **how to deconstruct the weekly candle to identify the significance of the High and Low of the Week**.\n\n* **Candle Components**: The weekly candle consists of an open, high, low, and close, with the HOW and LOW established primarily during the first two trading days of the week.\n* **Significance of Monday and Tuesday**: Price action on these days often sets the tone for the remainder of the week, making it essential to analyze the formation of the HOW/LOW during this period.\n* **Market Sentiment Indicators**: Look for volume spikes and volatility on Monday and Tuesday, as these can indicate the strength of the established levels and potential follow-through for the week.",
    "context": {
      "keyTerms": [
        {
          "term": "Weekly Candle",
          "definition": "A price chart representation of market activity over a week, showing open, high, low, and close."
        },
        {
          "term": "High of the Week (HOW)",
          "definition": "The highest price level reached during the week."
        },
        {
          "term": "Low of the Week (LOW)",
          "definition": "The lowest price level reached during the week."
        }
      ],
      "whyThisMatters": "Understanding the structure of the weekly candle is essential for identifying key price levels that can dictate market direction.",
      "realLifeExample": "On EURUSD, the weekly candle formed a LOW at 1.0800 on Monday and a HOW at 1.0900 on Tuesday, establishing critical levels for the week ahead.",
      "commonMistake": "Traders often overlook the importance of the first two days of the week, missing key price levels that can influence their trading decisions.",
      "quickNote": "The first two days of the week are pivotal for establishing the High and Low of the Week.",
      "mentorText": "Focus on the first two days of the week. They are your foundation. If you miss the HOW/LOW, you miss the market's intent.",
      "mentorAnalogy": "Think of the weekly candle as the blueprint of a building; the first two days are like laying the foundation. If the foundation is weak, the entire structure is at risk."
    },
    "taskData": null,
    "visualKey": "weekly-cycles-intro"
  },
  {
    "type": "concept",
    "title": "Mapping HOW/LOW on Early Week Sessions",
    "label": "Core Track",
    "body": "### Early Week Sessions: Identifying High and Low of the Week\nMapping the High and Low of the Week during Monday and Tuesday sessions is crucial for setting the week’s trading tone. This card teaches **how to accurately identify and map these critical levels**.\n\n* **Session Timing**: Focus on the first 48 hours of the week, particularly the opening of the London session, to capture significant price movements that establish the HOW/LOW.\n* **Price Action Analysis**: Utilize candlestick patterns and volume analysis to confirm the validity of the identified levels, ensuring they are not false breakouts.\n* **Support and Resistance Levels**: Once the HOW/LOW is established, monitor these levels as potential support and resistance for future price action throughout the week.",
    "context": {
      "keyTerms": [
        {
          "term": "London Session",
          "definition": "The trading session that opens at 3:00 AM EST, known for high volatility and liquidity."
        },
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time, used to analyze market trends."
        }
      ],
      "whyThisMatters": "Accurately mapping the HOW/LOW early in the week allows traders to align their strategies with market sentiment and potential price movements.",
      "realLifeExample": "During the Monday session, GBPUSD established a LOW at 1.2500 and a HOW at 1.2600 by Tuesday morning, providing clear levels for trading strategies.",
      "commonMistake": "Failing to monitor price action closely during the early sessions can lead to missed opportunities and incorrect assessments of market direction.",
      "quickNote": "The first 48 hours of the week are critical for establishing the High and Low of the Week.",
      "mentorText": "Identify the HOW/LOW early. These levels are your roadmap for the week. If you don’t have them, you’re navigating blind.",
      "mentorAnalogy": "Mapping the HOW/LOW is like a pilot charting a flight path; without clear coordinates, you risk straying off course."
    },
    "taskData": null,
    "visualKey": "mon-tue-low-high"
  },
  {
    "type": "concept",
    "title": "Recognizing Mid-Week Reversal Patterns",
    "label": "Core Track",
    "body": "### Mid-Week Reversals: Capitalizing on Price Movements\nMid-week reversal patterns can signal significant shifts in market sentiment after the initial formation of the High/Low of the Week. This card teaches **how to recognize and capitalize on these patterns**.\n\n* **Reversal Indicators**: Look for candlestick formations such as hammers, shooting stars, or engulfing patterns that appear near the established HOW/LOW, indicating potential reversals.\n* **Volume Confirmation**: Ensure that reversal patterns are supported by increased trading volume, which adds credibility to the potential price movement.\n* **Risk Management**: Implement stop-loss orders just beyond the reversal patterns to protect against false signals while allowing for potential profit capture.",
    "context": {
      "keyTerms": [
        {
          "term": "Reversal Pattern",
          "definition": "A chart pattern indicating a potential change in the direction of price movement."
        },
        {
          "term": "Volume Confirmation",
          "definition": "The increase in trading volume that supports the validity of a price movement."
        }
      ],
      "whyThisMatters": "Recognizing mid-week reversals allows traders to adjust their strategies in response to changing market dynamics, enhancing profit potential.",
      "realLifeExample": "On AUDUSD, a shooting star formed at the HOW of 0.7400 mid-week, followed by a drop to 0.7300, confirming a reversal pattern.",
      "commonMistake": "Traders often enter positions too early without waiting for confirmation from volume or additional price action, leading to losses.",
      "quickNote": "Mid-week reversal patterns can indicate significant market shifts after the initial HOW/LOW formation.",
      "mentorText": "Watch for reversal patterns around the HOW/LOW. They can signal a shift in market sentiment that you can capitalize on.",
      "mentorAnalogy": "Identifying mid-week reversals is like a surgeon recognizing signs of complications during an operation; timely intervention can save the outcome."
    },
    "taskData": null,
    "visualKey": "mid-week-reversals"
  },
  {
    "type": "concept",
    "title": "Analyzing Weekly Range Expansion",
    "label": "Core Track",
    "body": "### Weekly Range Expansion: Identifying Breakout and Breakdown Points\nAfter the initial High/Low formation, the weekly range can expand, leading to significant price movements. This card teaches **how to analyze and identify key breakout and breakdown points**.\n\n* **Range Calculation**: Calculate the weekly range by subtracting the LOW from the HOW. This range serves as a benchmark for potential breakout or breakdown levels.\n* **Breakout Confirmation**: Look for price action that closes above the HOW or below the LOW with increased volume, indicating a strong breakout or breakdown signal.\n* **Target Setting**: Establish profit targets based on the calculated range, using Fibonacci extensions or previous swing highs/lows to determine potential price objectives.",
    "context": {
      "keyTerms": [
        {
          "term": "Range Expansion",
          "definition": "The increase in the price range of a security, often leading to significant price movements."
        },
        {
          "term": "Breakout",
          "definition": "A price movement that occurs when the price moves above a resistance level."
        },
        {
          "term": "Breakdown",
          "definition": "A price movement that occurs when the price moves below a support level."
        }
      ],
      "whyThisMatters": "Analyzing range expansion enables traders to identify potential trading opportunities as the market reacts to established levels.",
      "realLifeExample": "After establishing a LOW at 1.3000 and a HOW at 1.3200, USDJPY broke above 1.3200 with strong volume, signaling a potential upward trend.",
      "commonMistake": "Traders often misinterpret minor price movements as breakouts without waiting for confirmation, leading to premature entries.",
      "quickNote": "Weekly range expansion can lead to significant price movements, making breakout and breakdown analysis essential.",
      "mentorText": "Monitor the range closely. A breakout or breakdown can signal a new trend; don’t miss the opportunity to capitalize on it.",
      "mentorAnalogy": "Analyzing weekly range expansion is like an architect assessing the structural integrity of a building; understanding the limits helps in planning for expansion."
    },
    "taskData": null,
    "visualKey": "weekly-range-expansion"
  },
  {
    "type": "concept",
    "title": "Debriefing Weekly Cycle Strategies",
    "label": "Core Track",
    "body": "### Weekly Cycle Strategies: Analyzing Highs and Lows\nUnderstanding the formation of the High/Low of the Week (HOW/LOW) is fundamental in establishing trading strategies. This card focuses on **strategies for analyzing weekly cycles and the significance of mid-week reversals**.\n\n* **Weekly High/Low Formation**: The High/Low of the Week is typically established during the first two trading days (Monday and Tuesday). Analyze price action during these sessions to identify potential reversal points.\n* **Mid-Week Reversal Patterns**: Look for reversal patterns around Wednesday, as price often retraces to test previous highs or lows established earlier in the week. Utilize candlestick formations for confirmation.\n* **Volume Confirmation**: Ensure that any breakout or reversal is supported by increased volume, indicating institutional participation. A lack of volume may suggest false breakouts or weak reversals.",
    "context": {
      "keyTerms": [
        {
          "term": "High/Low of the Week",
          "definition": "The highest and lowest price points established during the trading week."
        },
        {
          "term": "Mid-Week Reversal",
          "definition": "A price reversal that typically occurs around the middle of the trading week."
        }
      ],
      "whyThisMatters": "Effective analysis of weekly cycles enhances decision-making by aligning trades with institutional price movements.",
      "realLifeExample": "On EURUSD, the High of the Week was established at 1.1200 on Monday, followed by a mid-week reversal at 1.1150 on Wednesday, allowing traders to capitalize on the retracement.",
      "commonMistake": "Failing to consider volume when analyzing breakouts can lead to entering trades based on false signals.",
      "quickNote": "Focus on the first two days of the week to identify the High/Low for better trading strategies.",
      "mentorText": "When analyzing the weekly cycle, always look at the first two days for the High/Low. If you see a reversal mid-week, check the volume; that’s your confirmation.",
      "mentorAnalogy": "Think of this like a pilot charting a flight path. The initial takeoff sets the altitude (High/Low), and mid-flight adjustments are made based on weather patterns (mid-week reversals)."
    },
    "taskData": null,
    "visualKey": "weekly-cycles-debrief"
  },
  {
    "type": "concept",
    "title": "Summary of Weekly Cycle Insights",
    "label": "Core Track",
    "body": "### Weekly Cycle Insights: Key Takeaways\nThis card encapsulates the essential insights gained from analyzing weekly cycles and their implications for trading strategies. Understanding these insights is critical for informed trading decisions.\n\n* **Weekly Cycle Dynamics**: Recognize that the High/Low of the Week often dictates market sentiment and can serve as pivotal points for entry and exit strategies.\n* **Impact of Economic Events**: Be aware of scheduled economic releases on Mondays and Tuesdays, as they can significantly influence the formation of the High/Low and subsequent price action.\n* **Risk Management**: Establish stop-loss orders based on the High/Low of the Week to protect against adverse price movements, ensuring that risk is managed effectively throughout the week.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular security or financial market."
        },
        {
          "term": "Economic Releases",
          "definition": "Scheduled announcements that can impact market prices significantly."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of weekly cycle insights allows traders to align their strategies with market movements and economic influences.",
      "realLifeExample": "On GBPUSD, the High of the Week was influenced by a positive GDP report released on Tuesday, leading to a bullish sentiment that traders capitalized on.",
      "commonMistake": "Ignoring the impact of economic events can lead to unexpected volatility and losses.",
      "quickNote": "Weekly cycles are influenced by both market sentiment and economic events; leverage this knowledge for strategic advantage.",
      "mentorText": "Always assess the broader market sentiment when planning your trades. The High/Low of the Week is your compass, but economic news can shift the winds.",
      "mentorAnalogy": "Like a ship navigating through waters, understanding the currents (weekly cycles) and weather (economic events) is essential for a safe journey."
    },
    "taskData": null,
    "visualKey": "weekly-cycles-intro"
  },
  {
    "type": "concept",
    "title": "Practical Application of Weekly Cycle Analysis",
    "label": "Core Track",
    "body": "### Practical Application: High/Low of the Week\nThis card focuses on applying the concepts learned about the High/Low of the Week and mid-week reversals in real trading scenarios. Practical application solidifies theoretical knowledge.\n\n* **Identifying Entry Points**: Use the High/Low of the Week as a reference for potential entry points. For example, if the High is established at 1.1400 on Monday, consider entering short positions if price retraces to this level mid-week.\n* **Utilizing Technical Indicators**: Employ indicators such as RSI or MACD to confirm entry points around the High/Low. A divergence at these levels can signal a potential reversal.\n* **Setting Targets and Stops**: Establish profit targets at key Fibonacci retracement levels based on the High/Low of the Week and ensure stop-loss orders are placed just beyond these levels to mitigate risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Entry Points",
          "definition": "Specific price levels where traders initiate trades."
        },
        {
          "term": "Fibonacci Retracement",
          "definition": "A tool used to identify potential reversal levels based on the Fibonacci sequence."
        }
      ],
      "whyThisMatters": "Applying theoretical concepts in practical scenarios enhances trading precision and effectiveness.",
      "realLifeExample": "On AUDCAD, after the High of the Week was set at 0.9500 on Monday, a trader entered a short position at 0.9480 mid-week, targeting a retracement to 0.9400.",
      "commonMistake": "Failing to adjust stop-loss orders based on the High/Low can lead to unnecessary losses during volatility.",
      "quickNote": "Leverage the High/Low of the Week for strategic entry and exit points in your trading plan.",
      "mentorText": "When you spot the High/Low of the Week, think of it as your battleground. Use it to plan your attacks—entries and exits must be precise.",
      "mentorAnalogy": "Like a chess player anticipating moves, you must strategically position your pieces (trades) based on the board (market) dynamics."
    },
    "taskData": null,
    "visualKey": "mon-tue-low-high"
  },
  {
    "type": "concept",
    "title": "Core Advanced Time & Price 8",
    "label": "Core Track",
    "body": "### Advanced Application: Weekly Cycles and Timing Filters\nThis card delves into advanced applications of Weekly Cycle concepts, focusing on timing filters and session dynamics that affect trading decisions. Mastery of these elements is crucial for professional trading.\n\n* **Session Dynamics**: Understand that different trading sessions (Asian, London, New York) exhibit varying volatility patterns. The High/Low of the Week may react differently based on the session in which it is tested.\n* **Timing Filters**: Implement timing filters to refine entry points. For instance, avoid entering trades during low-volatility periods (e.g., Asian session) when the High/Low is tested, as it may result in false breakouts.\n* **Correlation Analysis**: Analyze correlations between major pairs to anticipate price movements. For example, if EURUSD tests its High of the Week, monitor USDJPY for potential inverse movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Dynamics",
          "definition": "The varying characteristics of price movements during different trading sessions."
        },
        {
          "term": "Correlation Analysis",
          "definition": "A method of analyzing the relationship between two or more financial instruments."
        }
      ],
      "whyThisMatters": "Advanced understanding of timing and session dynamics enhances the trader's ability to make informed decisions in volatile markets.",
      "realLifeExample": "During the London session, EURUSD tested its High of the Week at 1.1300, while USDJPY showed a corresponding drop, confirming the inverse correlation.",
      "commonMistake": "Overlooking session dynamics can lead to misjudging volatility and entering trades at suboptimal times.",
      "quickNote": "Utilize session dynamics and timing filters to enhance your trading strategy around the High/Low of the Week.",
      "mentorText": "Always consider the session you’re trading in. The same price level can behave differently depending on the time of day. Be strategic about your entries.",
      "mentorAnalogy": "Like a conductor leading an orchestra, you must understand how each section (session) contributes to the overall performance (market movement)."
    },
    "taskData": null,
    "visualKey": "mid-week-reversals"
  },
  {
    "type": "concept",
    "title": "Weekly Range Expansion Dynamics",
    "label": "Core Track",
    "body": "### Core Advanced Time & Price 9\nThe early part of the week often sets the tone for price action, particularly through range expansion. This card focuses on **how to identify and utilize timing filters to capture the High/Low of the Week (HOW/LOW)**.\n\n* **Timing Filters**: Monitor price action closely during the first two hours of the London session on Monday and Tuesday, as this is when institutional players typically establish key levels.\n* **Session Dynamics**: Pay attention to the overlap between the London and New York sessions, as volatility tends to increase, providing opportunities for range expansion.\n* **Price Action Confirmation**: Look for a decisive close above or below the previous week's high/low within these sessions to confirm the potential for a new weekly range to form.",
    "context": {
      "keyTerms": [
        {
          "term": "Range Expansion",
          "definition": "A significant price movement that extends beyond previous highs or lows, indicating increased volatility."
        },
        {
          "term": "Timing Filters",
          "definition": "Specific timeframes used to identify optimal entry points based on market activity."
        }
      ],
      "whyThisMatters": "Understanding range expansion dynamics allows traders to position themselves effectively for the formation of the weekly high or low.",
      "realLifeExample": "On Monday at 9:00 AM EST, EURUSD breaks above the previous week's high of 1.1000, closing at 1.1025, indicating a potential new weekly high.",
      "commonMistake": "Failing to account for session overlaps can lead to missed opportunities or false breakouts.",
      "quickNote": "Monitor the first two hours of the London session for range expansion signals.",
      "mentorText": "Focus on the initial hours of the London session. This is where the big players make their moves. If you see a strong close above last week's high, that's your cue.",
      "mentorAnalogy": "Think of this like a race car driver gauging the track conditions at the start of a race. The first few laps determine the strategy for the entire race."
    },
    "taskData": null,
    "visualKey": "weekly-range-expansion"
  },
  {
    "type": "concept",
    "title": "Weekly Cycle Debriefing Techniques",
    "label": "Core Track",
    "body": "### Core Advanced Time & Price 10\nPost-session analysis is crucial for refining trading strategies based on weekly cycles. This card outlines **how to conduct a debrief to assess the formation of the High/Low of the Week**.\n\n* **Session Review**: Analyze the price action from Monday and Tuesday, focusing on how the market reacted to key economic releases and session overlaps.\n* **Volatility Assessment**: Measure the volatility during these sessions by comparing the average true range (ATR) against the previous week’s ATR to identify potential shifts in market behavior.\n* **Feedback Loop**: Document your observations and outcomes to create a feedback loop that informs future trading decisions, enhancing your understanding of weekly cycle patterns.",
    "context": {
      "keyTerms": [
        {
          "term": "Debriefing",
          "definition": "A structured review process to analyze trading performance and market behavior."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset for that period."
        }
      ],
      "whyThisMatters": "Conducting thorough debriefs helps traders refine their strategies and improve their ability to predict future price movements based on weekly cycles.",
      "realLifeExample": "After analyzing the EURUSD movement on Tuesday, you note that the ATR increased from 50 pips to 75 pips, indicating heightened volatility and potential for further movement.",
      "commonMistake": "Neglecting to review session performance can lead to repeated mistakes and missed opportunities in future trades.",
      "quickNote": "Conduct a session debrief to refine your understanding of weekly cycle dynamics.",
      "mentorText": "After each session, take the time to dissect what happened. Look at the data, assess your trades, and learn from the outcomes. This is how you improve.",
      "mentorAnalogy": "Consider this like a post-flight analysis for pilots. They review every detail of the flight to ensure safety and efficiency in future missions."
    },
    "taskData": null,
    "visualKey": "weekly-cycles-debrief"
  },
  {
    "type": "concept",
    "title": "Identifying Weekly Cycle Patterns",
    "label": "Core Track",
    "body": "### Core Advanced Time & Price 11\nRecognizing patterns within the weekly cycle is essential for anticipating price movements. This card focuses on **how to identify and act on recurring price patterns that signal the formation of the High/Low of the Week**.\n\n* **Pattern Recognition**: Look for common formations such as double tops/bottoms or head and shoulders that may emerge during the Monday and Tuesday sessions, indicating potential reversal points.\n* **Volume Confirmation**: Ensure that any identified pattern is supported by increased volume, as this adds validity to the potential breakout or reversal.\n* **Market Sentiment Analysis**: Utilize sentiment indicators to gauge market bias, confirming whether the identified patterns align with broader market trends.",
    "context": {
      "keyTerms": [
        {
          "term": "Pattern Recognition",
          "definition": "The process of identifying specific formations in price charts that indicate potential future movements."
        },
        {
          "term": "Volume Confirmation",
          "definition": "The use of trading volume to validate the strength of price movements."
        }
      ],
      "whyThisMatters": "Identifying and confirming patterns within the weekly cycle enhances a trader's ability to make informed decisions regarding market entries and exits.",
      "realLifeExample": "On Tuesday, GBPUSD forms a double bottom at 1.2500 with a volume spike, suggesting a potential reversal and the formation of the weekly low.",
      "commonMistake": "Ignoring volume when identifying patterns can lead to false signals and poor trading decisions.",
      "quickNote": "Look for recurring patterns and confirm them with volume to enhance trade accuracy.",
      "mentorText": "When you spot a pattern, always check the volume behind it. A pattern without volume is like a car without fuel; it won't go anywhere.",
      "mentorAnalogy": "This is akin to a detective piecing together clues at a crime scene. Each pattern is a clue that needs corroboration to solve the case."
    },
    "taskData": null,
    "visualKey": "weekly-cycles-intro"
  },
  {
    "type": "concept",
    "title": "Monday and Tuesday High/Low Formation",
    "label": "Core Track",
    "body": "### Core Advanced Time & Price 12\nThe formation of the High/Low of the Week often occurs within the first two days of the trading week. This card details **the mechanics of identifying and trading the High/Low during Monday and Tuesday**.\n\n* **Initial Price Action**: Focus on the first 4 hours of trading on Monday and Tuesday, as these periods often establish the week’s critical price levels.\n* **Breakout Strategies**: Implement breakout strategies when price approaches the previous week’s high/low, using tight stop-loss orders to manage risk effectively.\n* **Confirmation Signals**: Look for confirmation from additional indicators, such as moving averages or RSI, to validate the strength of the breakout before entering a trade.",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout Strategies",
          "definition": "Trading techniques that capitalize on price movements beyond established support or resistance levels."
        },
        {
          "term": "Confirmation Signals",
          "definition": "Indicators that validate the likelihood of a price movement continuing in a specific direction."
        }
      ],
      "whyThisMatters": "Identifying the High/Low of the Week early in the trading week allows traders to position themselves advantageously for subsequent price movements.",
      "realLifeExample": "On Monday at 10:00 AM EST, USDJPY approaches the previous week's high of 110.50, breaking through with a close at 110.75, signaling a potential new weekly high.",
      "commonMistake": "Entering trades without waiting for confirmation can lead to false breakouts and unnecessary losses.",
      "quickNote": "Focus on the first 4 hours of Monday and Tuesday to identify potential weekly highs and lows.",
      "mentorText": "Watch the first few hours closely. If price breaks last week's high with conviction, that’s your signal to act. Don’t rush, wait for confirmation.",
      "mentorAnalogy": "This is like a chef timing the preparation of a dish. The first steps set the foundation, and rushing can lead to a poorly executed meal."
    },
    "taskData": null,
    "visualKey": "mon-tue-low-high"
  },
  {
    "type": "concept",
    "title": "Mid-Week Reversals: Timing Filters",
    "label": "Core Track",
    "body": "### Core Advanced Time & Price 13\nThe mid-week period often presents opportunities for reversals based on established weekly cycles. This card focuses on **identifying optimal timing filters and session dynamics** for executing trades around the High/Low of the Week (HOW/LOW).\n\n* **Session Overlap Dynamics**: Pay attention to the overlap between the London and New York sessions, typically from 8:00 AM to 11:00 AM EST, as this period often sees increased volatility and liquidity, enhancing reversal potential.\n* **Timing Filters**: Utilize a 50% retracement of the weekly range as a key timing filter. If price approaches this level during the overlap, consider it a strong candidate for a reversal setup.\n* **Volume Confirmation**: Confirm reversal signals with volume spikes. A minimum 30% increase in volume compared to the previous session indicates institutional participation, validating the reversal setup.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two major trading sessions coincide, increasing market activity."
        },
        {
          "term": "Timing Filter",
          "definition": "A specific price level or condition used to refine trade entries."
        },
        {
          "term": "Volume Spike",
          "definition": "A significant increase in trading volume, indicating heightened market interest."
        }
      ],
      "whyThisMatters": "Understanding mid-week reversals allows traders to capitalize on price corrections that often occur after initial weekly movements.",
      "realLifeExample": "On Wednesday at 9:30 AM EST, EURUSD retraced to 1.1000, hitting the 50% retracement of the weekly range, coinciding with a volume spike of 35% compared to the previous day, leading to a successful long position.",
      "commonMistake": "Failing to account for session overlaps can lead to missed opportunities or false signals.",
      "quickNote": "Mid-week reversals are best identified during session overlaps with confirmed volume spikes.",
      "mentorText": "When you see price approaching the 50% retracement during the London-New York overlap, you need to be ready. That’s your cue to look for reversal signals, especially if volume is backing it up.",
      "mentorAnalogy": "Think of this like an aircraft preparing for landing; the overlap is your final approach, where you need to ensure everything is in alignment before touching down."
    },
    "taskData": null,
    "visualKey": "mid-week-reversals"
  },
  {
    "type": "practice",
    "title": "Weekly Range Expansion: Identifying Opportunities",
    "label": "Core Track",
    "body": "### Core Advanced Time & Price 14\nWeekly range expansion can signal potential breakout or reversal opportunities. This card emphasizes **how to identify and act on these expansions using timing filters and session dynamics**.\n\n* **Expansion Criteria**: A weekly range expansion is confirmed when price exceeds the previous week's high or low by at least 25 pips during the first two trading days (Monday or Tuesday). This indicates strong institutional interest.\n* **Session Timing**: Monitor the first hour of the New York session (8:30 AM to 9:30 AM EST) for breakout confirmations. If price breaks the weekly high during this time, it validates the expansion.\n* **Retracement Entry**: After an expansion, wait for a retracement back to the breakout point. Enter long positions if price returns to the breakout level with a bullish candle pattern, confirming continued momentum.",
    "context": {
      "keyTerms": [
        {
          "term": "Range Expansion",
          "definition": "A significant increase in the price range compared to previous periods, indicating strong market movement."
        },
        {
          "term": "Breakout Confirmation",
          "definition": "A signal that price has moved beyond a defined resistance or support level."
        },
        {
          "term": "Retracement Entry",
          "definition": "A strategy to enter a trade after price pulls back to a previous breakout level."
        }
      ],
      "whyThisMatters": "Recognizing weekly range expansions enables traders to position themselves effectively for potential high-reward trades.",
      "realLifeExample": "On Tuesday at 9:00 AM EST, GBPUSD broke above the previous week's high of 1.3500, exceeding it by 30 pips, followed by a retracement to 1.3480, where a bullish engulfing pattern formed, leading to a successful long entry.",
      "commonMistake": "Entering trades prematurely before confirming the breakout can lead to losses if the price reverses.",
      "quickNote": "Identify weekly range expansions early in the week to capitalize on breakout opportunities.",
      "mentorText": "When you see a breakout above last week's high, don’t jump in right away. Wait for a retracement to the breakout level; that’s where you want to enter for maximum potential.",
      "mentorAnalogy": "Consider this like a sprinter breaking through the starting line; the initial burst is crucial, but the real race begins when they stabilize and find their pace."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During which session should you confirm a breakout after a weekly range expansion?",
      "options": [
        {
          "id": "0",
          "text": "The first hour of the New York session",
          "isCorrect": true,
          "feedback": "Correct. The first hour of the New York session is critical for confirming breakouts."
        },
        {
          "id": "1",
          "text": "The last hour of the London session",
          "isCorrect": false,
          "feedback": "Incorrect. The New York session is more relevant for confirming breakouts."
        },
        {
          "id": "2",
          "text": "Any time during the Asian session",
          "isCorrect": false,
          "feedback": "Incorrect. The Asian session typically lacks the volatility needed for breakout confirmations."
        },
        {
          "id": "3",
          "text": "Mid-week on Wednesday",
          "isCorrect": false,
          "feedback": "Incorrect. While mid-week can be significant, breakout confirmations should focus on the New York session."
        }
      ]
    },
    "visualKey": "weekly-range-expansion"
  },
  {
    "type": "summary",
    "title": "Weekly Cycles Debrief: Key Takeaways",
    "label": "Core Track",
    "body": "### Core Advanced Time & Price 15\nSummarizing the key concepts of weekly cycles is essential for effective trading strategy implementation. This card encapsulates **the critical elements of timing filters and session dynamics** for trading the High/Low of the Week (HOW/LOW).\n\n* **Weekly High/Low Formation**: The formation of the weekly high or low typically occurs within the first two trading days. Monitoring price action during this period is crucial for anticipating market direction.\n* **Session Dynamics**: Leverage the volatility of the London and New York sessions to identify potential reversals or breakouts. Key times to focus on are the overlaps and the first hour of the New York session.\n* **Confirmation Signals**: Always seek confirmation through volume and price action patterns. A combination of these factors strengthens the reliability of your trade setups.",
    "context": {
      "keyTerms": [
        {
          "term": "Weekly High/Low Formation",
          "definition": "The price levels established at the beginning of the week, which often dictate market direction."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices, often increasing during major session overlaps."
        },
        {
          "term": "Confirmation Signals",
          "definition": "Indicators that validate a trade setup, such as volume spikes or specific price patterns."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of weekly cycles enhances a trader's ability to execute informed and strategic trades.",
      "realLifeExample": "On Monday at 10:00 AM EST, USDJPY formed a weekly high at 145.50, followed by a reversal during the New York session, confirming the weekly high formation with a subsequent drop to 144.80.",
      "commonMistake": "Neglecting to analyze session dynamics can lead to missed opportunities or incorrect trade decisions.",
      "quickNote": "Focus on the first two days of the week for high-probability setups around the weekly high and low.",
      "mentorText": "Remember, the first two days of the week are where the market sets its tone. Pay attention to how price reacts during these sessions; it’s your roadmap for the week ahead.",
      "mentorAnalogy": "Think of this like a ship navigating through a harbor; the first few hours dictate the course for the entire journey, and any miscalculation can lead to significant deviations."
    },
    "taskData": null,
    "visualKey": "weekly-cycles-debrief"
  }
];
