import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Spot-Perp Delta Checks in Crypto",
    "label": "Crypto Track",
    "body": "### Spot-Perpetual Delta Checks: Evaluating Crypto Order Flow\nSpot-perpetual delta checks assess the relationship between spot and perpetual futures prices in cryptocurrency markets. This card details **how to identify discrepancies that indicate potential trading opportunities**.\n\n* **Delta Discrepancy Threshold**: A delta discrepancy of over 5% between spot and perpetual prices during high-volume sessions indicates potential liquidity misalignments, warranting further investigation.\n* **Session Timing Analysis**: Evaluate delta shifts during major market events, such as the Bitcoin halving or regulatory announcements, to identify shifts in trader sentiment and order flow.\n* **Volume Correlation**: Cross-reference delta changes with volume spikes; a delta shift accompanied by a 20% increase in volume suggests a strong order flow signal, while low volume indicates potential noise.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Delta Discrepancy",
          "definition": "The percentage difference between spot and perpetual prices."
        },
        {
          "term": "Liquidity Misalignment",
          "definition": "A situation where the supply and demand between spot and futures markets diverge significantly."
        }
      ],
      "whyThisMatters": "Understanding spot-perpetual delta checks allows traders to identify potential market inefficiencies, leading to informed execution strategies.",
      "realLifeExample": "On April 15, 2023, during a high volatility session, Bitcoin's spot price was $30,000 while the perpetual futures price was $31,500, creating a delta discrepancy of 5%.",
      "commonMistake": "Traders often overlook volume context when assessing delta discrepancies, leading to misinterpretation of market signals.",
      "quickNote": "A delta discrepancy over 5% during high volume indicates potential trading opportunities.",
      "mentorText": "When you see a significant delta discrepancy, think of it as a red flag. It’s your job to investigate further before making any trades.",
      "mentorAnalogy": "Consider this like a pilot checking fuel levels before takeoff; a discrepancy in fuel readings could indicate a serious issue that needs addressing before proceeding."
    },
    "taskData": null,
    "visualKey": "crypto-checklist-spot-perp"
  },
  {
    "type": "concept",
    "title": "Book Depth Validation in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Book Depth Validation: Assessing Order Flow Reliability\nValidating book depth is critical for determining the reliability of order flow signals in cryptocurrency markets. This card outlines **how to analyze order book data to confirm trade setups**.\n\n* **Order Book Imbalance**: Identify significant imbalances by comparing the top 5 buy and sell orders; an imbalance greater than 10% suggests potential market manipulation or strong directional bias.\n* **Liquidity Zones**: Mark key liquidity zones where large orders reside; these areas often act as support or resistance and should be monitored for potential reversals.\n* **Depth of Market (DOM) Analysis**: Use DOM to assess the number of orders at various price levels; a shallow depth indicates potential volatility, while a deep market suggests stability and reliability in order flow.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Imbalance",
          "definition": "The difference in volume between buy and sell orders at specific price levels."
        },
        {
          "term": "Liquidity Zones",
          "definition": "Price levels where significant buy or sell orders are concentrated."
        }
      ],
      "whyThisMatters": "Validating book depth enhances the accuracy of trade decisions by confirming the strength of order flow signals.",
      "realLifeExample": "On March 10, 2023, Ethereum showed a 15% order book imbalance with 1,000 ETH at $2,000 buy and only 850 ETH at $2,050 sell, indicating a bullish bias.",
      "commonMistake": "Traders often fail to consider the depth of the order book, leading to premature entries or exits based on superficial signals.",
      "quickNote": "A significant order book imbalance over 10% indicates potential market manipulation or bias.",
      "mentorText": "Always validate the order book before executing a trade. If the depth doesn’t support your setup, reconsider your position.",
      "mentorAnalogy": "Think of this like a chef checking ingredient availability before starting a dish; if key ingredients are missing, the outcome may not be as expected."
    },
    "taskData": null,
    "visualKey": "crypto-checklist-spot-perp"
  },
  {
    "type": "concept",
    "title": "Criteria for Evaluating Crypto Order Flow",
    "label": "Crypto Track",
    "body": "### Evaluating Crypto Order Flow: Key Criteria\nEvaluating order flow in cryptocurrency markets requires specific criteria to ensure informed trading decisions. This card details **the essential factors to consider when analyzing order flow**.\n\n* **Liquidity Assessment**: Measure liquidity by analyzing the bid-ask spread; a spread wider than 2% during high volatility indicates potential slippage risks and unreliable order flow.\n* **Volatility Indicators**: Utilize the Average True Range (ATR) to gauge market volatility; an ATR increase of over 15% signals heightened risk and potential for rapid price movements.\n* **Market Sentiment Analysis**: Incorporate sentiment indicators, such as the Fear & Greed Index; extreme readings can signal potential reversals or continuation patterns in order flow dynamics.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Assessment",
          "definition": "The evaluation of how easily assets can be bought or sold without affecting their price."
        },
        {
          "term": "Volatility Indicators",
          "definition": "Metrics that measure the rate of price fluctuations in the market."
        }
      ],
      "whyThisMatters": "Establishing criteria for evaluating order flow allows traders to filter out noise and focus on actionable signals.",
      "realLifeExample": "On January 5, 2023, Bitcoin's bid-ask spread widened to 3% during a news event, indicating potential slippage and unreliable order flow.",
      "commonMistake": "Traders often ignore volatility indicators, leading to over-leveraged positions in unstable market conditions.",
      "quickNote": "A bid-ask spread wider than 2% during high volatility signals potential slippage risks.",
      "mentorText": "Always assess liquidity and volatility before entering a trade. If the market feels unstable, it’s better to wait for clarity.",
      "mentorAnalogy": "This is akin to a race car driver checking track conditions before a race; poor conditions can lead to crashes and losses."
    },
    "taskData": null,
    "visualKey": "crypto-checklist-spot-perp"
  },
  {
    "type": "concept",
    "title": "Advanced Techniques for Crypto Order Flow",
    "label": "Crypto Track",
    "body": "### Advanced Techniques: Analyzing Crypto Order Flow\nAdvanced techniques for analyzing order flow can significantly enhance the accuracy of spot-perp delta checks. This card discusses **sophisticated methods to refine order flow analysis**.\n\n* **Algorithmic Order Flow Analysis**: Implement algorithms to track real-time order flow changes; algorithms can detect patterns that human analysis may overlook, improving decision-making speed.\n* **Volume-Weighted Average Price (VWAP)**: Use VWAP as a benchmark for assessing trade execution quality; trades executed below the VWAP during bullish conditions may indicate poor execution timing.\n* **Cumulative Delta Analysis**: Analyze cumulative delta to track the net buying or selling pressure over time; a consistent positive delta over multiple sessions suggests strong buying interest, while a negative delta indicates selling pressure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Algorithmic Order Flow Analysis",
          "definition": "The use of algorithms to analyze and interpret order flow data in real-time."
        },
        {
          "term": "Cumulative Delta",
          "definition": "The net difference between buying and selling pressure over a specified period."
        }
      ],
      "whyThisMatters": "Advanced techniques provide deeper insights into market dynamics, enabling traders to make more informed decisions.",
      "realLifeExample": "On February 20, 2023, a cumulative delta analysis showed a consistent positive delta for Bitcoin over three consecutive sessions, indicating strong buying interest despite market volatility.",
      "commonMistake": "Traders may rely solely on basic analysis techniques, missing out on critical insights provided by advanced methods.",
      "quickNote": "Consistent positive cumulative delta over multiple sessions indicates strong buying interest.",
      "mentorText": "Incorporate advanced techniques into your analysis. Relying on basic methods alone can leave you blind to critical market shifts.",
      "mentorAnalogy": "This is similar to an architect using advanced modeling software to visualize structural integrity; without it, you risk building on unstable ground."
    },
    "taskData": null,
    "visualKey": "crypto-checklist-spot-perp"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Crypto Order Flow Analysis",
    "label": "Crypto Track",
    "body": "### Crypto Order Flow: Identifying Analysis Pitfalls\nMisjudging order flow deltas can lead to significant trading errors in the crypto market. This card outlines common mistakes traders make during analysis.\n\n* **Delta Misinterpretation**: Traders often confuse positive deltas as bullish signals without considering the context of market depth. For instance, a 500 BTC buy order may appear bullish, but if the sell-side liquidity is thin, it can lead to a false breakout.\n* **Ignoring Time Frames**: Failing to align order flow analysis with appropriate time frames can skew perceptions. Analyzing a 1-minute delta while trading on a 4-hour chart can mislead traders into premature entries.\n* **Neglecting Market Sentiment**: Traders frequently overlook the influence of news and sentiment on order flow. For example, a sudden spike in sell orders during a major regulatory announcement can distort delta readings, leading to misinformed decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Delta",
          "definition": "The difference between buy and sell orders within a specified timeframe."
        },
        {
          "term": "Market Depth",
          "definition": "The measure of supply and demand for a specific asset at various price levels."
        }
      ],
      "whyThisMatters": "Recognizing these pitfalls is essential for maintaining accuracy in order flow analysis, which directly impacts execution quality.",
      "realLifeExample": "During a recent Ethereum trading session, a trader misread a 300 ETH buy delta as a bullish signal without considering the low liquidity, resulting in a 10% loss when the price reversed.",
      "commonMistake": "Assuming that all positive deltas indicate bullish market conditions without analyzing the underlying liquidity.",
      "quickNote": "Always contextualize delta readings with market depth and sentiment.",
      "mentorText": "Listen, if you see a delta spike, don’t just jump in. Look at the liquidity behind that spike. If it’s thin, you might just be setting yourself up for a trap.",
      "mentorAnalogy": "Think of order flow like air traffic control. Just because a plane is cleared for takeoff doesn’t mean the runway is clear. Always check for other traffic before proceeding."
    },
    "taskData": null,
    "visualKey": "crypto-checklist-spot-perp"
  },
  {
    "type": "concept",
    "title": "Synthesizing Crypto Order Flow Insights",
    "label": "Crypto Track",
    "body": "### Crypto Order Flow: Synthesis for Strategy Development\nSynthesizing insights from order flow analysis allows traders to create actionable strategies tailored to market conditions. This card focuses on the integration of data into trading plans.\n\n* **Combining Delta and Price Action**: Use delta readings in conjunction with price action patterns to confirm entry points. For example, if a 200 BTC buy delta coincides with a bullish engulfing pattern on the 15-minute chart, it strengthens the case for a long position.\n* **Adjusting for Market Conditions**: Adapt strategies based on volatility and liquidity. In a high-volatility environment, prioritize delta confirmations that align with broader market trends, such as a 10% price movement in Bitcoin during a news event.\n* **Utilizing Depth Validation**: Validate order flow insights by analyzing the order book. If a significant buy delta appears but the order book shows considerable sell walls, reconsider the strength of the signal before executing trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time, used to identify trading opportunities."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time, indicating market risk."
        }
      ],
      "whyThisMatters": "Synthesizing insights ensures that traders can make informed decisions that align with real-time market dynamics.",
      "realLifeExample": "In a recent Bitcoin trading session, a trader synthesized a 150 BTC buy delta with a bullish reversal pattern, resulting in a successful trade that captured a 5% price increase within an hour.",
      "commonMistake": "Failing to integrate multiple data points, leading to decisions based on isolated signals rather than a comprehensive view.",
      "quickNote": "Always combine order flow insights with price action and market conditions for effective strategy development.",
      "mentorText": "When you see a delta, don’t just act. Look at the bigger picture. Combine it with what the price is doing and the overall market sentiment before you make your move.",
      "mentorAnalogy": "Consider a chef preparing a dish. You wouldn’t just throw in one ingredient; you balance flavors and textures to create a harmonious meal. Trading requires the same careful blending of insights."
    },
    "taskData": null,
    "visualKey": "crypto-checklist-spot-perp"
  },
  {
    "type": "practice",
    "title": "Practical Application of Crypto Order Flow",
    "label": "Crypto Track",
    "body": "### Crypto Order Flow: Real-Time Application Exercises\nEngaging in practical exercises enhances the ability to apply order flow analysis effectively. This card focuses on real-time scenarios using spot-perp delta checks and depth validation.\n\n* **Scenario Analysis**: Analyze a live market scenario where Bitcoin shows a 500 BTC buy delta at $40,000. Validate the order book for sell walls at $40,200 and $40,300 before deciding on an entry point.\n* **Delta Check Execution**: Execute a trade based on a 300 ETH buy delta during a low liquidity period, ensuring to check for any significant sell orders that could impact price movement.\n* **Depth Validation Practice**: Validate a 200 BTC sell delta by reviewing the order book. If the sell orders are significantly larger than the buy orders, reassess the potential for price movement before executing a short position.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot Market",
          "definition": "A market where financial instruments are traded for immediate delivery."
        },
        {
          "term": "Perpetual Contracts",
          "definition": "A type of futures contract with no expiration date, allowing for continuous trading."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge, enabling traders to make informed decisions in real-time.",
      "realLifeExample": "During a live trading session, a trader correctly identified a 400 BTC buy delta at $30,500, validated it with the order book, and executed a long position that yielded a 3% profit within 30 minutes.",
      "commonMistake": "Rushing to execute trades without validating order flow against the order book, leading to potential losses.",
      "quickNote": "Always validate order flow with depth checks before executing trades.",
      "mentorText": "Don’t just jump into a trade because you see a delta. Validate it against the order book first. If the depth doesn’t support it, you might be walking into a trap.",
      "mentorAnalogy": "Think of a pilot checking instruments before takeoff. You wouldn’t ignore the fuel gauge or altimeter; you need a complete picture before making critical decisions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe a 250 BTC buy delta at $25,000. The order book shows significant sell walls at $25,200. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Proceed with a long position immediately.",
          "isCorrect": false,
          "feedback": "This is incorrect. Significant sell walls indicate potential resistance at $25,200."
        },
        {
          "id": "1",
          "text": "Wait for the sell walls to clear before considering a long position.",
          "isCorrect": true,
          "feedback": "Correct. Validating the order book is essential to avoid entering a trade that may reverse."
        },
        {
          "id": "2",
          "text": "Ignore the delta and trade based on previous price action only.",
          "isCorrect": false,
          "feedback": "This is incorrect. Ignoring the delta and order book can lead to poor decision-making."
        },
        {
          "id": "3",
          "text": "Short the position immediately based on the delta.",
          "isCorrect": false,
          "feedback": "This is incorrect. The buy delta suggests buying interest; shorting without further analysis is risky."
        }
      ]
    },
    "visualKey": "crypto-checklist-spot-perp"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Order Flow Insights",
    "label": "Crypto Track",
    "body": "### Crypto Order Flow: Key Insights Summary\nThis summary consolidates the essential insights gained from the crypto order flow checklist module. Understanding these elements is critical for effective trading execution.\n\n* **Importance of Delta Checks**: Regularly assess delta readings to gauge market sentiment and potential price movements. For instance, a consistent buy delta during a downtrend may indicate accumulation.\n* **Depth Validation Necessity**: Always validate order flow insights against the order book to ensure that trades are supported by actual market conditions. A 100 BTC buy delta with no corresponding buy orders in the book is a red flag.\n* **Synthesis for Strategy Development**: Integrate order flow insights with price action and market conditions to create robust trading strategies. This holistic approach enhances decision-making and execution quality.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders for a specific asset, reflecting market depth."
        },
        {
          "term": "Accumulation",
          "definition": "The process of buying an asset over time to build a position."
        }
      ],
      "whyThisMatters": "Summarizing these insights reinforces the critical components of order flow analysis, ensuring traders maintain a disciplined approach.",
      "realLifeExample": "A trader who consistently applies delta checks and depth validation was able to identify a bullish trend in Litecoin, leading to a 15% profit over a week.",
      "commonMistake": "Overlooking the importance of synthesizing multiple data points, leading to fragmented and ineffective trading strategies.",
      "quickNote": "Delta checks and depth validation are foundational to successful crypto trading.",
      "mentorText": "Remember, the key to successful trading lies in the details. Always check your deltas, validate with the order book, and synthesize your insights into a coherent strategy.",
      "mentorAnalogy": "Like an architect reviewing blueprints before construction, you must ensure all elements align before executing your trading plan."
    },
    "taskData": null,
    "visualKey": "crypto-checklist-spot-perp"
  }
];
