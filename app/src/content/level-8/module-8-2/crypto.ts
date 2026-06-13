import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Evaluating Expectancy in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.2-crypto-C1 -->\n### Core Scenario: Expectancy Evaluation Framework\nEvaluating expectancy in crypto trading involves understanding the relationship between win rates, average win size, and average loss size. This card outlines **how to calculate and interpret expectancy to enhance trading decisions**.\n\n* **Expectancy Formula**: Calculate expectancy using the formula: (Win Rate x Average Win) - (Loss Rate x Average Loss). For example, if your win rate is 60% with an average win of $200 and an average loss of $100, your expectancy is (0.6 x 200) - (0.4 x 100) = $80.\n* **Volatility Adjustment**: Adjust expectancy calculations for crypto's inherent volatility. Incorporate a volatility factor by analyzing historical price swings; for instance, if Bitcoin has a standard deviation of $500, factor this into your risk-reward assessments.\n* **Scenario Analysis**: Conduct scenario analyses to understand how different market conditions impact expectancy. For example, evaluate how a 10% drop in Ethereum's price affects your average win and loss metrics over a 30-day trading period.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average amount a trader can expect to win or lose per trade based on historical data."
        }
      ],
      "whyThisMatters": "Understanding expectancy allows traders to make informed decisions rather than relying on gut feelings, especially in a volatile market like crypto.",
      "realLifeExample": "A trader calculates their expectancy for trading Litecoin, finding a win rate of 55% with average wins of $150 and average losses of $75, resulting in a positive expectancy of $37.50 per trade.",
      "commonMistake": "Traders often neglect to adjust their expectancy calculations for market volatility, leading to unrealistic profit expectations.",
      "quickNote": "Expectancy quantifies potential profitability, guiding informed trading decisions.",
      "mentorText": "When evaluating your trades, focus on the numbers. Calculate your expectancy regularly; it’s the only way to ensure your strategy is sustainable in the long run.",
      "mentorAnalogy": "Think of expectancy like a pilot calculating fuel needs for a flight. Just as a pilot assesses the distance and conditions to ensure safe travel, you must evaluate your trading expectancy to navigate market volatility."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Managing Stop Runs in Crypto Markets",
    "label": "Crypto Track",
    "body": "<!-- M8.2-crypto-C2 -->\n### Core Scenario: Stop Run Mitigation\nStop runs in crypto markets can lead to significant losses if not managed effectively. This card provides **strategies to maintain positive expectancy despite sudden price movements**.\n\n* **Dynamic Stop Placement**: Adjust stop-loss orders based on market volatility. For instance, if Bitcoin’s average true range (ATR) is $400, consider placing stops at least 1.5x ATR away from entry to avoid premature stop-outs during volatility spikes.\n* **Partial Positioning**: Implement partial position sizing to reduce exposure during high volatility. For example, rather than entering a full position in Ethereum, start with 50% and add more as the trade moves in your favor, allowing for flexibility in stop management.\n* **Market Sentiment Analysis**: Monitor market sentiment indicators to anticipate potential stop runs. If social media sentiment around a coin like Cardano shifts drastically, consider tightening stops or scaling back positions to protect capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Run",
          "definition": "A market movement that triggers a large number of stop-loss orders, often leading to further price declines."
        }
      ],
      "whyThisMatters": "Effectively managing stop runs can protect capital and ensure that traders maintain a favorable expectancy even in volatile conditions.",
      "realLifeExample": "During a sudden 20% drop in Bitcoin, a trader with a stop-loss set too close experiences a stop run, losing 15% of their capital. Adjusting their stop placement could have mitigated this loss.",
      "commonMistake": "Traders often set static stop-loss levels without considering market volatility, leading to unnecessary losses during stop runs.",
      "quickNote": "Dynamic stop management is essential to navigate crypto's volatility effectively.",
      "mentorText": "Always be prepared for sudden market shifts. Adjust your stops dynamically and never let a stop run catch you off guard; it’s about protecting your capital.",
      "mentorAnalogy": "Managing stop runs is like a surgeon adjusting their approach during an unexpected complication in surgery. Just as a surgeon must adapt to ensure patient safety, you must adapt your stops to protect your trading capital."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Strategies for Trading Volatility in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M8.2-crypto-C3 -->\n### Core Scenario: Trading During High Volatility\nHigh volatility in crypto markets presents both risks and opportunities. This card outlines **strategies for trading effectively during these periods while maintaining a focus on expectancy**.\n\n* **Volatility Breakouts**: Identify breakout opportunities during high volatility. For example, if Ethereum breaks above $2,000 with increased volume, consider entering a long position, targeting a risk-reward ratio of at least 1:2 based on recent price action.\n* **Scalping Techniques**: Utilize scalping strategies to capitalize on rapid price movements. For instance, executing multiple trades on Bitcoin within a 30-minute window during a volatile session can yield quick profits, provided you maintain strict risk management.\n* **Adaptive Risk Assessment**: Continuously reassess risk parameters based on market conditions. If Bitcoin’s volatility spikes, reduce position sizes to maintain a favorable expectancy while navigating the increased risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time, often measured by standard deviation."
        }
      ],
      "whyThisMatters": "Adapting strategies to volatility ensures traders can exploit market movements while protecting their capital and maintaining positive expectancy.",
      "realLifeExample": "A trader identifies a volatility breakout in Solana, entering a position at $150 with a target of $165. By adjusting their stop to $145, they manage risk while aiming for a favorable expectancy.",
      "commonMistake": "Traders often over-leverage during volatile periods, disregarding the increased risk and potential for larger losses.",
      "quickNote": "Effective volatility trading requires adaptability and strict risk management.",
      "mentorText": "When volatility strikes, don’t panic. Use it to your advantage by employing strategies that capitalize on rapid price movements while keeping your risk in check.",
      "mentorAnalogy": "Trading volatility is akin to a race car driver navigating a track with sudden turns. Just as a driver must adjust speed and strategy to maintain control, you must adapt your trading approach to the market's volatility."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Trading (Module 8.2 - CRYPTO)",
    "label": "Crypto Track",
    "body": "<!-- M8.2-crypto-C4 -->\n### Core Scenario: Capital Protection Strategies\nEffective risk management is essential in crypto trading to protect capital while maintaining a favorable expectancy. This card discusses **specific techniques tailored for the crypto market**.\n\n* **Position Sizing Models**: Implement position sizing models based on account equity and risk tolerance. For example, if your account balance is $10,000 and you are willing to risk 1% per trade, your maximum loss per trade should not exceed $100, guiding your position size accordingly.\n* **Diversification Across Assets**: Spread risk by diversifying across multiple cryptocurrencies. Allocating 20% of your capital to Bitcoin, 20% to Ethereum, and 10% to smaller altcoins can mitigate risks associated with individual asset volatility.\n* **Regular Performance Review**: Conduct regular performance reviews to assess risk management effectiveness. For instance, analyze trades over the past month to determine if your risk-reward ratios align with your expectancy calculations, adjusting strategies as necessary.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling financial risks in trading."
        }
      ],
      "whyThisMatters": "Robust risk management practices are crucial for sustaining long-term profitability and ensuring traders can weather market volatility.",
      "realLifeExample": "A trader with a $5,000 account uses a position size of $50 per trade, ensuring they never risk more than 1% of their account on any single trade, effectively managing risk during market fluctuations.",
      "commonMistake": "Traders often neglect to adjust their risk management strategies as their account grows, leading to increased exposure and potential losses.",
      "quickNote": "Effective risk management safeguards your capital and supports long-term trading success.",
      "mentorText": "Never underestimate the importance of risk management. It’s your safety net in the unpredictable world of crypto trading; always ensure you’re protected before entering a trade.",
      "mentorAnalogy": "Risk management in trading is like a safety harness for a rock climber. Just as a climber secures themselves to prevent falls, you must secure your capital to prevent significant losses."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Technical Analysis for Crypto Expectancy",
    "label": "Crypto Track",
    "body": "<!-- M8.2-crypto-C5 -->\n### Core Scenario: Technical Indicators for Expectancy\nTechnical analysis in crypto trading helps quantify expectancy by evaluating market conditions and price movements. This card focuses on **specific indicators that enhance decision-making in the volatile crypto environment**.\n\n* **Moving Averages**: Utilize short-term and long-term moving averages to identify trends. For instance, a crossover of the 50-day moving average over the 200-day moving average (Golden Cross) can indicate a bullish trend, enhancing positive expectancy.\n* **Relative Strength Index (RSI)**: Apply the RSI to assess overbought or oversold conditions. An RSI reading above 70 may suggest a potential price reversal, allowing for strategic exit points to manage risk effectively.\n* **Volume Analysis**: Monitor trading volume alongside price movements. A price increase with rising volume indicates strong buying interest, which can improve expectancy for long positions, such as BTC/USD rallying from $30,000 to $35,000 with a volume spike at the NY session open.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "A measure of the average expected return per trade, factoring in win rate and risk-reward ratio."
        },
        {
          "term": "Moving Average",
          "definition": "A technical indicator that smooths price data to identify trends over a specific period."
        },
        {
          "term": "Relative Strength Index (RSI)",
          "definition": "A momentum oscillator that measures the speed and change of price movements."
        }
      ],
      "whyThisMatters": "Understanding technical analysis tools is essential for assessing potential outcomes and managing risk in crypto trading.",
      "realLifeExample": "Analyzing ETH/USD, a trader observes the 50-day moving average crossing above the 200-day average at $2,000, confirming a bullish trend with an expectancy of higher returns.",
      "commonMistake": "Traders often neglect to adjust their technical analysis parameters to account for the heightened volatility in crypto markets.",
      "quickNote": "Use technical indicators to quantify expectancy and guide trading decisions.",
      "mentorText": "When assessing expectancy, remember that technical indicators are not just numbers; they tell a story about market sentiment and potential price movements. Always validate your analysis with multiple indicators.",
      "mentorAnalogy": "Think of technical analysis like a flight control system in aviation. Just as pilots rely on instruments to navigate safely, traders must use indicators to steer their strategies through the turbulent crypto landscape."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Understanding Market Psychology in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M8.2-crypto-C6 -->\n### Core Scenario: Market Sentiment Analysis\nMarket psychology plays a critical role in shaping trader behavior and, consequently, expectancy in crypto trading. This card examines **how to gauge market sentiment and its implications for trading decisions**.\n\n* **Fear and Greed Index**: Utilize this index to measure market sentiment. A high greed level often precedes corrections, while extreme fear can signal buying opportunities, impacting expectancy positively.\n* **Social Media Sentiment**: Monitor platforms like Twitter and Reddit for real-time sentiment analysis. A surge in positive mentions of a cryptocurrency can lead to increased buying pressure, enhancing expectancy for short-term trades.\n* **Order Book Dynamics**: Analyze the order book to identify large buy or sell walls. A significant buy wall at $25,000 for BTC can indicate strong support, allowing traders to adjust their expectancy based on market psychology.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Psychology",
          "definition": "The study of how emotions and cognitive biases influence trading decisions."
        },
        {
          "term": "Fear and Greed Index",
          "definition": "A tool that gauges market sentiment based on various factors, indicating whether traders are feeling fearful or greedy."
        },
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders for a specific cryptocurrency, reflecting market depth and liquidity."
        }
      ],
      "whyThisMatters": "Recognizing market psychology allows traders to anticipate potential price movements and adjust their strategies accordingly.",
      "realLifeExample": "During a market downturn, the Fear and Greed Index drops to 10, indicating extreme fear, prompting a trader to consider buying BTC at $20,000, expecting a rebound.",
      "commonMistake": "Traders often overlook the impact of market sentiment, relying solely on technical indicators without considering psychological factors.",
      "quickNote": "Market psychology can significantly influence trading outcomes; stay attuned to sentiment shifts.",
      "mentorText": "Understanding market psychology is like reading the room before making a speech. You need to gauge the audience's mood to tailor your message effectively, just as you must adjust your trading approach based on market sentiment.",
      "mentorAnalogy": "Consider a surgeon assessing a patient's vitals before an operation. Just as a surgeon must understand the patient's condition to proceed safely, traders must interpret market psychology to navigate their trades effectively."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios for Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.2-crypto-C7 -->\n### Core Scenario: Simulating Crypto Trading Decisions\nEngaging in simulated trading scenarios helps reinforce the application of expectancy concepts under volatile market conditions. This card presents **realistic situations to practice decision-making based on expectancy**.\n\n* **Scenario 1**: BTC/USD is trading at $28,000 with a bullish sentiment indicated by the Fear and Greed Index at 80. You have a risk-reward ratio of 1:3. What is your expected return if you set a target at $30,000?\n* **Scenario 2**: ETH/USD drops to $1,800 after a major news event. The RSI indicates oversold conditions at 25. You consider entering a long position. What factors should you evaluate before executing the trade?\n* **Scenario 3**: A sudden spike in trading volume occurs for LTC/USD, pushing the price from $150 to $160. How would you assess this movement's impact on your expectancy for a short-term trade?",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to its potential loss."
        },
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a risk-free environment to enhance decision-making skills."
        },
        {
          "term": "Volume Spike",
          "definition": "A significant increase in trading volume, often indicating heightened market interest."
        }
      ],
      "whyThisMatters": "Practicing decision-making in simulated scenarios prepares traders to manage real-time volatility and apply expectancy concepts effectively.",
      "realLifeExample": "In a simulation, a trader identifies a bullish trend for XRP/USD at $0.50 with a risk-reward ratio of 1:4, setting a target at $0.60, leading to a calculated expectancy of $0.10 per trade.",
      "commonMistake": "Traders often fail to consider the broader market context when making decisions in simulated scenarios, leading to unrealistic expectations.",
      "quickNote": "Engage in simulated scenarios to refine your expectancy-based decision-making skills.",
      "mentorText": "When faced with trading decisions, treat each scenario like a chess match. Analyze the board, anticipate your opponent's moves, and calculate your next steps based on expected outcomes.",
      "mentorAnalogy": "Think of a pilot conducting pre-flight checks. Each scenario is like a different flight plan; you must assess conditions and adjust your strategy to ensure a safe and successful journey."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are considering entering a long position on BTC/USD at $28,000 with a target of $30,000. The Fear and Greed Index is at 80. What should you prioritize in your decision-making?",
      "options": [
        {
          "id": "0",
          "text": "Evaluate the risk-reward ratio and set a stop-loss accordingly.",
          "isCorrect": true,
          "feedback": "Correct. Prioritizing risk-reward helps manage expectancy and potential losses."
        },
        {
          "id": "1",
          "text": "Enter the trade immediately based on bullish sentiment.",
          "isCorrect": false,
          "feedback": "Incorrect. Immediate entry without evaluating risk can lead to unexpected losses."
        },
        {
          "id": "2",
          "text": "Ignore market sentiment and focus solely on technical indicators.",
          "isCorrect": false,
          "feedback": "Incorrect. Market sentiment is crucial in volatile conditions and should not be ignored."
        },
        {
          "id": "3",
          "text": "Wait for a confirmation candle before entering the trade.",
          "isCorrect": false,
          "feedback": "Incorrect. While confirmation can be useful, it should not replace evaluating risk-reward."
        }
      ]
    },
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Expectancy Concepts",
    "label": "Crypto Track",
    "body": "<!-- M8.2-crypto-C8 -->\n### Core Scenario: Recap of Expectancy in Crypto Trading\nThis summary consolidates the key concepts related to expectancy in crypto trading, emphasizing the importance of risk management and strategic evaluation. Understanding these principles is vital for maintaining a disciplined trading approach.\n\n* **Expectancy Calculation**: Reiterate the formula for expectancy: (Win Rate x Average Win) - (Loss Rate x Average Loss). This calculation is fundamental for assessing the viability of trading strategies.\n* **Risk Management Strategies**: Highlight the necessity of implementing stop-loss orders and position sizing to protect capital. For instance, risking 1% of your capital per trade can safeguard against significant losses.\n* **Continuous Evaluation**: Stress the importance of regularly reviewing trades and adjusting strategies based on performance metrics. This iterative process enhances expectancy and aligns trading with market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling risks in trading."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate trading performance."
        }
      ],
      "whyThisMatters": "A solid grasp of expectancy concepts is essential for traders to make informed decisions and manage risks effectively.",
      "realLifeExample": "A trader reviews their performance over the last month, calculating an expectancy of $0.50 per trade after adjusting for losses, leading to a strategic pivot in their trading approach.",
      "commonMistake": "Traders often neglect to calculate expectancy regularly, leading to uninformed decisions and potential losses.",
      "quickNote": "Mastering expectancy concepts is crucial for disciplined trading and effective risk management.",
      "mentorText": "Think of expectancy as your trading compass. Regularly recalibrating it ensures you stay on course, even when market conditions change.",
      "mentorAnalogy": "Like a seasoned chef adjusting a recipe based on taste tests, traders must refine their strategies based on performance metrics to achieve the desired results."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  }
];
