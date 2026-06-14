import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Dealing Range Boundaries",
    "label": "Core Track",
    "body": "### Dealing Range: Boundary Definition\nDefining the current dealing range boundaries is essential for effective trading strategies. This card teaches **how to accurately identify and validate these limits**.\n\n* **Upper and Lower Boundaries**: Identify the upper boundary by locating the highest price point within the last 20 trading sessions, and the lower boundary by finding the lowest price point within the same period.\n* **Validation Criteria**: Confirm boundaries by observing at least three price touches at each limit, indicating strong market interest and potential reversals.\n* **Time Frame Consideration**: Use a minimum of a 1-hour chart to establish boundaries, as lower time frames may produce unreliable signals due to noise.",
    "context": {
      "keyTerms": [
        {
          "term": "Dealing Range",
          "definition": "A price range within which an asset trades, defined by upper and lower boundaries."
        }
      ],
      "whyThisMatters": "Accurate boundary identification allows traders to formulate strategies that capitalize on price movements within established limits.",
      "realLifeExample": "For instance, the EURUSD has established a dealing range between 1.0800 and 1.0900 over the last 20 sessions, validated by three touches at both boundaries.",
      "commonMistake": "Traders often misidentify boundaries by relying on shorter time frames, leading to false breakouts.",
      "quickNote": "Establish clear boundaries to enhance trade execution precision.",
      "mentorText": "When I analyze a chart, I look for clear upper and lower boundaries. If I see multiple touches at these levels, I know I have a reliable range to work with.",
      "mentorAnalogy": "Think of dealing range boundaries like the walls of a boxing ring; they define the space where the action occurs and help you anticipate the fighters' movements."
    },
    "taskData": null,
    "visualKey": "range-model-intro"
  },
  {
    "type": "concept",
    "title": "Identifying Highs and Lows in Ranges",
    "label": "Core Track",
    "body": "### Range Analysis: Highs and Lows\nIdentifying significant highs and lows within a dealing range provides critical reference points for future price movements. This card teaches **how to pinpoint these key levels**.\n\n* **Significant Highs**: Mark the highest price points where price has reversed direction at least twice within the range, indicating strong resistance.\n* **Significant Lows**: Identify the lowest price points where price has bounced back up at least twice, indicating strong support levels.\n* **Volume Confirmation**: Use volume analysis to confirm highs and lows; significant volume spikes at these points indicate stronger market conviction.",
    "context": {
      "keyTerms": [
        {
          "term": "Significant High",
          "definition": "A price point in a range where the asset has reversed direction, indicating resistance."
        },
        {
          "term": "Significant Low",
          "definition": "A price point in a range where the asset has bounced back up, indicating support."
        }
      ],
      "whyThisMatters": "Highs and lows serve as essential reference points for executing trades and setting stop-loss orders.",
      "realLifeExample": "In the GBPUSD dealing range, a significant high was identified at 1.3000 and a significant low at 1.2900, both confirmed by multiple price touches and volume spikes.",
      "commonMistake": "Traders often overlook volume confirmation, leading to false assumptions about the strength of highs and lows.",
      "quickNote": "Always validate highs and lows with volume to ensure reliability.",
      "mentorText": "When I look for highs and lows, I focus on where price has turned around multiple times. If I see strong volume at those levels, I know they are significant.",
      "mentorAnalogy": "Identifying highs and lows is like a surgeon locating critical points in anatomy; precision is essential for successful outcomes."
    },
    "taskData": null,
    "visualKey": "dealing-range-bounds"
  },
  {
    "type": "concept",
    "title": "Fibonacci 50% Equilibrium Line Application",
    "label": "Core Track",
    "body": "### Equilibrium Analysis: Fibonacci 50%\nThe Fibonacci 50% line serves as a mathematical division within the range, aiding in the identification of potential reversal points. This card teaches **how to apply this tool effectively**.\n\n* **Calculation Method**: To find the 50% line, subtract the lower boundary from the upper boundary, then add this value to the lower boundary. For example, if the range is 1.0800 to 1.0900, the 50% line is 1.0850.\n* **Reversal Point Identification**: Monitor price action around the 50% line; a rejection at this level often indicates a potential reversal, supported by candlestick patterns.\n* **Confluence with Other Indicators**: Use the 50% line in conjunction with other technical indicators, such as RSI or MACD, to strengthen the validity of potential reversal signals.",
    "context": {
      "keyTerms": [
        {
          "term": "Fibonacci 50% Line",
          "definition": "A key level derived from the Fibonacci sequence, often used to identify potential reversal points."
        }
      ],
      "whyThisMatters": "Utilizing the Fibonacci 50% line enhances the accuracy of entry and exit points within a trading range.",
      "realLifeExample": "In a range from 1.0800 to 1.0900, the price approaches the Fibonacci 50% line at 1.0850, where it shows a bearish engulfing pattern, signaling a potential reversal.",
      "commonMistake": "Traders often ignore the context of price action around the 50% line, leading to premature entries.",
      "quickNote": "The Fibonacci 50% line is a critical level for anticipating reversals.",
      "mentorText": "When I see price approaching the 50% line, I pay close attention. If it shows signs of rejection, I prepare for a potential reversal.",
      "mentorAnalogy": "Using the Fibonacci 50% line is like a pilot using altitude markers; they help gauge the best time to adjust course."
    },
    "taskData": null,
    "visualKey": "equilibrium-line"
  },
  {
    "type": "concept",
    "title": "Understanding Premium and Discount Zones",
    "label": "Core Track",
    "body": "### Price Zones: Premium and Discount\nDefining premium and discount zones is crucial for understanding market behavior. This card teaches **how algorithms utilize these areas for distribution and accumulation**.\n\n* **Premium Zone Definition**: Identify the premium zone as the area above the equilibrium line where sellers are likely to dominate, typically 50% above the range midpoint.\n* **Discount Zone Definition**: The discount zone is located below the equilibrium line, where buyers are likely to dominate, typically 50% below the range midpoint.\n* **Algorithmic Behavior**: Recognize that algorithms often target these zones for executing large orders, leading to potential price reversals as they accumulate or distribute positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Premium Zone",
          "definition": "The price area above the equilibrium line where selling pressure is expected to increase."
        },
        {
          "term": "Discount Zone",
          "definition": "The price area below the equilibrium line where buying pressure is expected to increase."
        }
      ],
      "whyThisMatters": "Understanding these zones allows traders to anticipate market movements and adjust their strategies accordingly.",
      "realLifeExample": "In the USDJPY range, the premium zone is identified above 110.50, while the discount zone is below 109.50, with price showing a tendency to reverse at these levels.",
      "commonMistake": "Traders often misinterpret price action in these zones, failing to recognize the underlying algorithmic behavior.",
      "quickNote": "Identify premium and discount zones to enhance strategic positioning.",
      "mentorText": "When I analyze price action, I look for movements into premium and discount zones. These areas often signal where the market is likely to reverse.",
      "mentorAnalogy": "Understanding premium and discount zones is like a chef knowing when to add seasoning; timing is critical for achieving the desired flavor."
    },
    "taskData": null,
    "visualKey": "discount-premium-arrays"
  },
  {
    "type": "concept",
    "title": "Algorithmic Behavior in Ranges",
    "label": "Core Track",
    "body": "### Algorithmic Behavior: Dynamics of Trading Algorithms in Ranges\nAlgorithms operate within defined price ranges, responding to equilibrium and premium/discount levels. This card details **how algorithmic trading influences price movement within these ranges**.\n\n* **Equilibrium Targeting**: Algorithms often target the equilibrium price within a range, executing trades that create a self-reinforcing cycle of buying and selling around this level, thus maintaining range stability.\n* **Premium and Discount Triggers**: When price approaches premium or discount zones, algorithms adjust their strategies, increasing buy or sell orders to exploit perceived value discrepancies, which can lead to rapid price shifts.\n* **Volume Analysis**: Monitor volume spikes at range boundaries, as algorithms tend to execute large orders during these times, indicating potential breakouts or reversals based on their programmed thresholds.",
    "context": {
      "keyTerms": [
        {
          "term": "Equilibrium",
          "definition": "The price level where supply and demand are balanced within a range."
        },
        {
          "term": "Premium",
          "definition": "A price level above equilibrium where selling pressure is expected."
        },
        {
          "term": "Discount",
          "definition": "A price level below equilibrium where buying pressure is expected."
        }
      ],
      "whyThisMatters": "Understanding algorithmic behavior is crucial for anticipating price movements within ranges and optimizing entry and exit strategies.",
      "realLifeExample": "During the EURUSD trading session at 10:00 AM EST, an algorithm triggered a buy order as the price approached the 1.1000 discount level, resulting in a 30-pip rally back to equilibrium.",
      "commonMistake": "Traders often misinterpret algorithmic activity as market manipulation rather than a reflection of underlying supply and demand dynamics.",
      "quickNote": "Algorithms reinforce price stability around equilibrium while exploiting premium and discount levels.",
      "mentorText": "Think of algorithms as automated traders that react to price levels. When they see price at equilibrium, they buy and sell to keep it stable, but when it strays into premium or discount, they jump in to capitalize on perceived value.",
      "mentorAnalogy": "Imagine a well-tuned thermostat in a room. It keeps the temperature stable (equilibrium) but reacts quickly to changes, heating or cooling when it detects extremes (premium/discount)."
    },
    "taskData": null,
    "visualKey": "range-model-debrief"
  },
  {
    "type": "concept",
    "title": "Advanced Range Modeling Techniques",
    "label": "Core Track",
    "body": "### Advanced Techniques: Modeling Price Movements in Ranges\nAdvanced range modeling requires an understanding of the interplay between market forces and trader psychology. This card focuses on **sophisticated techniques for predicting price behavior within ranges**.\n\n* **Multi-Timeframe Analysis**: Utilize higher timeframes to identify macro ranges and lower timeframes for micro-range dynamics, allowing for a comprehensive view of price behavior and potential breakout points.\n* **Order Flow Assessment**: Analyze order book data to gauge market sentiment and liquidity levels within the range, enabling more precise entry and exit points based on real-time supply and demand.\n* **Sentiment Indicators**: Incorporate sentiment analysis tools to assess trader positioning within the range, identifying potential reversals or continuations based on collective market psychology.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "The practice of analyzing price action across different timeframes to gain insights into market behavior."
        },
        {
          "term": "Order Flow",
          "definition": "The analysis of buy and sell orders in the market to determine liquidity and market sentiment."
        },
        {
          "term": "Sentiment Indicators",
          "definition": "Tools used to gauge the overall mood of traders in the market."
        }
      ],
      "whyThisMatters": "Advanced modeling techniques enhance the ability to anticipate price movements and refine trading strategies within established ranges.",
      "realLifeExample": "On the GBPJPY 1-hour chart, a trader identified a macro range on the daily chart while observing a micro-range breakout on the 15-minute chart, leading to a successful long position at 150.50.",
      "commonMistake": "Traders often rely solely on single timeframe analysis, missing critical insights from broader market contexts that influence price behavior.",
      "quickNote": "Advanced techniques integrate multiple analyses to enhance range trading precision.",
      "mentorText": "To model price movements effectively, think of it like analyzing a sports game. You need to watch both the overall strategy and the individual plays to understand how the game unfolds.",
      "mentorAnalogy": "Like an architect designing a building, you must consider both the foundation (macro range) and the intricate details (micro ranges) to create a stable structure."
    },
    "taskData": null,
    "visualKey": "range-model-intro"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Range Trading",
    "label": "Core Track",
    "body": "### Pitfalls: Navigating Traps in Range Trading\nRange trading can present various traps that can lead to significant losses if not recognized. This card outlines **common pitfalls and strategies to avoid them**.\n\n* **False Breakouts**: Traders often enter positions prematurely during false breakouts, mistaking them for genuine trend reversals. Confirm breakouts with volume and price action before executing trades.\n* **Overtrading**: The allure of small price movements within a range can lead to overtrading, resulting in excessive transaction costs and emotional fatigue. Set strict criteria for trade entries to maintain discipline.\n* **Ignoring Market Context**: Failing to consider broader market trends can lead to misjudging the strength of a range. Always assess the macroeconomic environment and news events that may influence price behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "False Breakouts",
          "definition": "A price movement that breaks through a support or resistance level but fails to sustain momentum."
        },
        {
          "term": "Overtrading",
          "definition": "Executing too many trades in a short period, often leading to losses."
        },
        {
          "term": "Market Context",
          "definition": "The overall economic and market conditions that influence price movements."
        }
      ],
      "whyThisMatters": "Recognizing and avoiding these pitfalls is essential for maintaining a disciplined and profitable trading approach within ranges.",
      "realLifeExample": "A trader entered a long position on AUDCAD after a breakout above 0.9500, only to see the price reverse back into the range, resulting in a 50-pip loss due to a false breakout.",
      "commonMistake": "Traders often chase price movements without confirming breakout validity, leading to unnecessary losses.",
      "quickNote": "Awareness of common pitfalls is crucial for successful range trading.",
      "mentorText": "Think of range trading like navigating a minefield. You must be aware of potential traps and only proceed when you have clear evidence of safe passage.",
      "mentorAnalogy": "Just as a seasoned sailor reads the wind and tides to avoid rocky waters, a trader must understand market signals to navigate the pitfalls of range trading."
    },
    "taskData": null,
    "visualKey": "dealing-range-bounds"
  },
  {
    "type": "concept",
    "title": "Synthesis of Range Trading Strategies",
    "label": "Core Track",
    "body": "### Synthesis: Integrating Range Trading Strategies\nCreating a cohesive trading strategy requires synthesizing various concepts learned about range modeling. This card focuses on **how to integrate these elements into a unified trading approach**.\n\n* **Strategy Framework**: Develop a structured framework that incorporates entry, exit, and risk management rules based on range dynamics, ensuring clarity in decision-making processes.\n* **Scenario Planning**: Utilize scenario analysis to prepare for different market conditions, adjusting strategies based on whether the price is trending, consolidating, or breaking out of the range.\n* **Performance Review**: Regularly review trade performance against established criteria to refine strategies, ensuring continuous improvement and adaptation to changing market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Strategy Framework",
          "definition": "A structured approach to trading that outlines specific rules for entry, exit, and risk management."
        },
        {
          "term": "Scenario Planning",
          "definition": "The process of preparing for various potential market conditions to inform trading decisions."
        },
        {
          "term": "Performance Review",
          "definition": "The evaluation of past trades to assess effectiveness and inform future strategies."
        }
      ],
      "whyThisMatters": "Integrating range trading strategies enhances adaptability and effectiveness in various market scenarios, leading to improved trading outcomes.",
      "realLifeExample": "A trader developed a strategy framework for USDCHF, incorporating scenario planning for both range-bound and breakout conditions, resulting in a 70% win rate over three months.",
      "commonMistake": "Traders often neglect to review and adapt their strategies, leading to stagnation and missed opportunities for improvement.",
      "quickNote": "A cohesive strategy synthesizes various range concepts for effective trading.",
      "mentorText": "To succeed in range trading, think of it as assembling a puzzle. Each piece—entry rules, exit strategies, and risk management—must fit together to create a complete picture.",
      "mentorAnalogy": "Like a conductor leading an orchestra, you must harmonize different elements of your strategy to create a cohesive and effective trading performance."
    },
    "taskData": null,
    "visualKey": "equilibrium-line"
  },
  {
    "type": "concept",
    "title": "Practical Application of Range Models",
    "label": "Core Track",
    "body": "### Range Modeling: Practical Application of Range Models\nEngaging in practical exercises enhances the understanding of range modeling dynamics. This card focuses on applying theoretical concepts to real-world trading scenarios.\n\n* **Identifying Ranges**: Use historical price data to identify dealing ranges on instruments like GBPJPY. For example, observe price action between 150.00 and 152.00 over a two-week period to establish a range.\n* **Equilibrium Assessment**: Determine the equilibrium price within the identified range. If GBPJPY oscillates around 151.00, this price serves as the equilibrium, guiding entry and exit strategies.\n* **Discount/Premium Arrays**: Establish discount and premium zones based on the equilibrium. If the price approaches 150.50, consider it a discount opportunity, while 151.50 may represent a premium zone for potential selling.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dealing Range",
          "definition": "A price range where an asset trades consistently over a specified period."
        },
        {
          "term": "Equilibrium Price",
          "definition": "The price at which supply and demand are balanced within a range."
        },
        {
          "term": "Discount/Premium Array",
          "definition": "Zones within a range indicating potential buying (discount) or selling (premium) opportunities."
        }
      ],
      "whyThisMatters": "Practical exercises solidify the understanding of range dynamics, enabling traders to make informed decisions based on real market behavior.",
      "realLifeExample": "GBPJPY trading between 150.00 and 152.00 with an equilibrium at 151.00 during the Asian session, where price action tests the discount at 150.50.",
      "commonMistake": "Failing to accurately identify the equilibrium price can lead to suboptimal entry and exit points.",
      "quickNote": "Engaging with real data sharpens range modeling skills.",
      "mentorText": "Think of range modeling as a way to read the market's pulse. When you see prices oscillating, focus on where they settle most often—that's your equilibrium. Use this to guide your trades.",
      "mentorAnalogy": "Like a seasoned chef balancing flavors in a dish, you must find the right equilibrium in price ranges to create a successful trading strategy."
    },
    "taskData": null,
    "visualKey": "discount-premium-arrays"
  },
  {
    "type": "concept",
    "title": "Summary of Key Concepts in Range Modeling",
    "label": "Core Track",
    "body": "### Range Modeling: Summary of Key Concepts\nUnderstanding range dynamics is essential for executing successful trading strategies. This card summarizes the critical components of range modeling.\n\n* **Range Identification**: Recognizing the upper and lower bounds of a trading range is fundamental. For instance, if EURUSD fluctuates between 1.1000 and 1.1200, these levels define the range.\n* **Equilibrium Dynamics**: The equilibrium price serves as a pivotal reference point. If EURUSD consistently trades around 1.1100, it indicates a balance between buyers and sellers.\n* **Discount and Premium Zones**: These zones are crucial for timing entries and exits. A price drop to 1.1050 may signal a buying opportunity (discount), while a rise to 1.1150 could indicate a selling opportunity (premium).\n",
    "context": {
      "keyTerms": [
        {
          "term": "Upper Bound",
          "definition": "The highest price level within a defined trading range."
        },
        {
          "term": "Lower Bound",
          "definition": "The lowest price level within a defined trading range."
        },
        {
          "term": "Price Oscillation",
          "definition": "The movement of price within a defined range."
        }
      ],
      "whyThisMatters": "A solid grasp of range dynamics allows traders to capitalize on price movements effectively, enhancing overall trading performance.",
      "realLifeExample": "EURUSD trading between 1.1000 and 1.1200, with an equilibrium at 1.1100, where price action tests discount at 1.1050 and premium at 1.1150 during the European session.",
      "commonMistake": "Overlooking the significance of equilibrium can lead to misjudging market sentiment and executing trades at unfavorable prices.",
      "quickNote": "Mastering range dynamics is vital for effective trading execution.",
      "mentorText": "Remember, the market operates within ranges. Identify those ranges, understand the equilibrium, and leverage discount and premium zones to enhance your trading outcomes.",
      "mentorAnalogy": "Like an architect designing a building, you must understand the foundational limits of price ranges to construct a robust trading strategy."
    },
    "taskData": null,
    "visualKey": "range-model-debrief"
  },
  {
    "type": "concept",
    "title": "Core Advanced Application 11",
    "label": "Core Track",
    "body": "### Range Modeling: Core Advanced Application 11\nAdvanced applications of range modeling require a nuanced understanding of market behavior. This card focuses on edge cases and professional-level nuances.\n\n* **Volatility Adjustments**: Analyze how increased volatility impacts range boundaries. For example, during high-impact news events, the range for AUDUSD may expand from 0.7000-0.7200 to 0.6950-0.7250.\n* **Dynamic Equilibrium**: Recognize that equilibrium can shift based on market sentiment. If AUDUSD stabilizes at 0.7100 after a news release, adjust your trading strategy accordingly.\n* **Range Breakouts**: Identify potential breakout scenarios. If AUDUSD breaks above 0.7200 with strong volume, consider this a signal to reassess the previous range and establish new trading parameters.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Dynamic Equilibrium",
          "definition": "An equilibrium price that adjusts based on market conditions."
        },
        {
          "term": "Breakout",
          "definition": "A price movement that surpasses established range boundaries."
        }
      ],
      "whyThisMatters": "Understanding advanced applications of range modeling allows traders to adapt strategies to changing market conditions, enhancing decision-making.",
      "realLifeExample": "AUDUSD experiencing a volatility spike during an RBA interest rate announcement, expanding the range from 0.7000-0.7200 to 0.6950-0.7250, with a breakout above 0.7200 indicating a new trend.",
      "commonMistake": "Neglecting to adjust for volatility can lead to false assumptions about range stability.",
      "quickNote": "Adapt your strategies based on volatility and market sentiment shifts.",
      "mentorText": "In trading, the market is like a living organism. It breathes and reacts to news and events. Stay alert to these changes and adjust your equilibrium accordingly.",
      "mentorAnalogy": "Like a pilot adjusting flight paths based on weather conditions, you must navigate market volatility to maintain a successful trading trajectory."
    },
    "taskData": null,
    "visualKey": "range-model-intro"
  },
  {
    "type": "concept",
    "title": "Core Advanced Application 12",
    "label": "Core Track",
    "body": "### Range Modeling: Core Advanced Application 12\nThis card delves into further advanced applications of range modeling, focusing on nuanced strategies for professional traders.\n\n* **Intermarket Analysis**: Examine how correlations between different markets affect range dynamics. For instance, if gold prices rise, it may influence the USDJPY range, causing shifts in equilibrium.\n* **Timeframe Considerations**: Different timeframes can reveal distinct ranges. A daily range for USDCHF may differ from its hourly range; analyze both to refine entry points.\n* **Liquidity Events**: Identify liquidity events that can distort ranges. For example, during the London session, USDCHF may experience tighter spreads, allowing for more precise execution within the established range.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Intermarket Analysis",
          "definition": "The study of relationships between different financial markets."
        },
        {
          "term": "Timeframe",
          "definition": "The duration over which price movements are analyzed."
        },
        {
          "term": "Liquidity Event",
          "definition": "A situation where market liquidity significantly changes, affecting price behavior."
        }
      ],
      "whyThisMatters": "Advanced applications of range modeling provide traders with a comprehensive toolkit for navigating complex market environments.",
      "realLifeExample": "USDCHF experiencing a range shift during the London session due to increased liquidity, with a daily range of 0.9000-0.9100 contrasting with an hourly range of 0.9050-0.9075.",
      "commonMistake": "Failing to consider intermarket influences can lead to misinterpretation of range dynamics.",
      "quickNote": "Utilize intermarket analysis and liquidity events to enhance range modeling accuracy.",
      "mentorText": "Think of the market as an interconnected web. Changes in one area can ripple through others. Stay aware of these connections to refine your trading strategies.",
      "mentorAnalogy": "Like a conductor leading an orchestra, you must harmonize various market influences to create a cohesive trading strategy."
    },
    "taskData": null,
    "visualKey": "dealing-range-bounds"
  },
  {
    "type": "concept",
    "title": "Equilibrium Line Dynamics in Range Trading",
    "label": "Core Track",
    "body": "### Range Model: Equilibrium Line Dynamics\nThe equilibrium line serves as a pivotal reference in the Range Model, indicating the balance point of price movement within a defined range. This card elaborates on **advanced applications of the equilibrium line in identifying trading opportunities**.\n\n* **Dynamic Adjustments**: Adjust the equilibrium line based on the last 20 price closes to reflect real-time market sentiment, ensuring alignment with current volatility.\n* **Breakout Confirmation**: A breakout above or below the equilibrium line should be confirmed with a minimum of 1.5 times the average true range (ATR) to filter out false signals.\n* **Reversion Strategies**: Utilize the equilibrium line as a target for mean reversion strategies, entering long positions when price approaches the lower bound and short positions near the upper bound of the range.",
    "context": {
      "keyTerms": [
        {
          "term": "Equilibrium Line",
          "definition": "The price level at which buying and selling are balanced within a defined range."
        }
      ],
      "whyThisMatters": "Understanding the nuances of the equilibrium line enhances precision in executing trades within established ranges.",
      "realLifeExample": "In a trading session on GBPUSD, the equilibrium line was identified at 1.3000. After observing a breakout above this level with a subsequent close at 1.3025, confirmed by a 1.8 ATR, a long position was executed targeting 1.3050.",
      "commonMistake": "Traders often misinterpret the equilibrium line as a static level, neglecting to adjust it based on recent price action.",
      "quickNote": "The equilibrium line must be dynamically adjusted to reflect current market conditions.",
      "mentorText": "When trading within a range, always adjust your equilibrium line based on the latest price closes. This ensures you're not relying on outdated information that could lead to poor decisions.",
      "mentorAnalogy": "Think of the equilibrium line like the center of gravity in an aircraft; it shifts with weight distribution, and understanding its position is crucial for maintaining balance in flight."
    },
    "taskData": null,
    "visualKey": "equilibrium-line"
  },
  {
    "type": "practice",
    "title": "Identifying Discount and Premium Arrays",
    "label": "Core Track",
    "body": "### Range Model: Discount and Premium Arrays\nDiscount and premium arrays provide critical insights into market sentiment and price positioning within the range. This card focuses on **applying these arrays to enhance trading decisions**.\n\n* **Array Construction**: Construct discount arrays by identifying the lowest 20% of prices within the range and premium arrays by identifying the highest 20% to establish entry and exit zones.\n* **Volume Confirmation**: Validate entries in discount zones with a minimum of 30% increase in volume compared to the average volume over the last 10 sessions to ensure institutional participation.\n* **Risk Management**: Set stop-loss orders just beyond the premium array to mitigate risk while allowing for price fluctuations within the range.",
    "context": {
      "keyTerms": [
        {
          "term": "Discount Array",
          "definition": "A price range indicating undervaluation, typically the lowest 20% of prices within a defined range."
        },
        {
          "term": "Premium Array",
          "definition": "A price range indicating overvaluation, typically the highest 20% of prices within a defined range."
        }
      ],
      "whyThisMatters": "Utilizing discount and premium arrays allows traders to strategically position themselves for optimal entry and exit points.",
      "realLifeExample": "During a trading session on AUDJPY, a discount array was established between 80.00 and 80.50. After a volume spike of 35% at 80.10, a long position was initiated targeting the premium array at 81.00.",
      "commonMistake": "Failing to confirm volume when entering discount zones often leads to trades lacking institutional backing.",
      "quickNote": "Use volume confirmation to validate entries in discount and premium arrays.",
      "mentorText": "Always look for volume spikes when trading in discount or premium arrays. This confirms that you're not just trading against a lack of interest but rather with the market's momentum.",
      "mentorAnalogy": "Consider discount and premium arrays like a chef determining the best ingredients; you need to know which ones are fresh (discount) and which are overpriced (premium) to create the perfect dish."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You identify a discount array for EURUSD between 1.1000 and 1.1050. The average volume over the last 10 sessions is 1 million. During a session, the price hits 1.1020 with a volume of 1.4 million. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position at 1.1020.",
          "isCorrect": true,
          "feedback": "This option is correct as the volume confirmation supports the entry in the discount array."
        },
        {
          "id": "1",
          "text": "Wait for the price to drop further before entering.",
          "isCorrect": false,
          "feedback": "This option is incorrect; the volume confirmation indicates a strong interest at this level."
        },
        {
          "id": "2",
          "text": "Enter a short position at 1.1020.",
          "isCorrect": false,
          "feedback": "This option is incorrect; entering short in a discount array without confirmation is not advisable."
        },
        {
          "id": "3",
          "text": "Set a stop-loss at 1.1000 and wait.",
          "isCorrect": false,
          "feedback": "This option is incorrect; while setting a stop-loss is prudent, waiting without entering misses the opportunity."
        }
      ]
    },
    "visualKey": "discount-premium-arrays"
  },
  {
    "type": "summary",
    "title": "Debrief on Range Model Applications",
    "label": "Core Track",
    "body": "### Range Model: Summary of Advanced Applications\nThis card summarizes the advanced applications of the Range Model, focusing on key strategies and considerations for professional trading.\n\n* **Equilibrium Line Adjustments**: Regularly adjust the equilibrium line based on recent price closes to maintain relevance in trading decisions.\n* **Volume as a Confirmation Tool**: Always incorporate volume analysis when trading in discount and premium arrays to ensure alignment with market sentiment.\n* **Risk Management Protocols**: Establish clear stop-loss protocols based on array boundaries to protect against adverse movements while trading within ranges.",
    "context": {
      "keyTerms": [],
      "whyThisMatters": "Mastering these advanced applications solidifies a trader's ability to navigate complex market conditions effectively.",
      "realLifeExample": "In a volatile session on USDCHF, the equilibrium line was adjusted to 0.9200. A long position was executed after a breakout confirmation at 0.9225 with volume exceeding 1.5 million, targeting 0.9250, while a stop-loss was set at 0.9180.",
      "commonMistake": "Traders often overlook the need for continuous adjustments to the equilibrium line, leading to outdated trading strategies.",
      "quickNote": "Regular adjustments and volume confirmations are essential for effective range trading.",
      "mentorText": "Always keep your strategies flexible. Adjust your equilibrium line and validate your entries with volume to stay ahead of the market.",
      "mentorAnalogy": "Think of trading within ranges like navigating a ship; you must constantly adjust your sails based on wind direction and strength to maintain your course."
    },
    "taskData": null,
    "visualKey": "range-model-debrief"
  }
];
