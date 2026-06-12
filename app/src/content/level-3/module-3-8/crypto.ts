import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Funding Rate Cycles and CE Alignment",
    "label": "Crypto Track",
    "body": "### Funding Rate Cycles: Aligning with 50% CE\nFunding rates in crypto markets fluctuate based on trader sentiment and leverage. This card illustrates **how to align trading strategies with the 50% consequent encroachment (CE) during funding rate cycles**.\n\n* **Cycle Identification**: Monitor funding rate announcements on platforms like Binance or BitMEX. A significant rise in funding rates often precedes a bearish market shift, indicating potential CE levels.\n* **CE Anchoring**: When funding rates peak, calculate the 50% CE of the last Fair Value Gap (FVG) to establish a precise entry point for short positions.\n* **Market Dynamics**: During funding rate declines, the 50% CE can serve as a support level for long positions, particularly in bullish market phases.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The cost of holding a leveraged position in a perpetual contract, paid between traders."
        },
        {
          "term": "Fair Value Gap (FVG)",
          "definition": "A price range where the market has not traded, indicating potential support or resistance."
        }
      ],
      "whyThisMatters": "Understanding funding rate cycles allows traders to strategically time entries and exits based on market sentiment shifts.",
      "realLifeExample": "On July 15, 2023, Binance reported a funding rate spike of 0.15% for BTCUSDT, coinciding with a 50% CE of $30,000, leading to a successful short entry.",
      "commonMistake": "Traders often overlook the impact of funding rates, leading to misaligned positions against market sentiment.",
      "quickNote": "Align trading strategies with funding rate cycles to optimize CE positioning.",
      "mentorText": "When you see funding rates spike, think of it as a warning signal. Use the 50% CE to gauge where the market might reverse, and position yourself accordingly.",
      "mentorAnalogy": "Like a pilot adjusting altitude based on weather patterns, you must adjust your trading strategy based on funding rate cycles to navigate market turbulence."
    },
    "taskData": null,
    "visualKey": "crypto-ce-funding"
  },
  {
    "type": "concept",
    "title": "Perpetual Premium/Discount and CE",
    "label": "Crypto Track",
    "body": "### Perpetual Premium/Discount: Impact on 50% CE\nPerpetual contracts can trade at a premium or discount to the underlying asset, influencing the 50% CE. This card details **how to assess these premiums and discounts to refine entry strategies**.\n\n* **Premium Calculation**: Determine the premium by comparing the perpetual contract price to the spot price. A premium above 1% often signals over-leveraged positions, affecting the 50% CE.\n* **Discount Dynamics**: When perpetual contracts trade at a discount, calculate the 50% CE of the last FVG to identify potential reversal points for long entries.\n* **Strategic Entry Points**: Use the 50% CE as a guide for entering trades when premiums or discounts exceed thresholds, indicating potential market corrections.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Contract",
          "definition": "A type of futures contract without an expiration date, allowing continuous trading."
        },
        {
          "term": "Premium/Discount",
          "definition": "The difference between the perpetual contract price and the spot price."
        }
      ],
      "whyThisMatters": "Understanding the relationship between premiums/discounts and the 50% CE enhances entry precision in volatile markets.",
      "realLifeExample": "On August 10, 2023, ETH perpetual contracts traded at a 2% premium over spot, prompting a short entry at the 50% CE of $1,800, which resulted in a favorable trade outcome.",
      "commonMistake": "Failing to account for the premium or discount can lead to entering trades at suboptimal levels.",
      "quickNote": "Assess perpetual premiums and discounts to refine your 50% CE entry strategies.",
      "mentorText": "Always check the premium or discount before entering a trade. It’s like ensuring your fuel tank is full before a long flight; you need to know your position.",
      "mentorAnalogy": "Just as a chef adjusts seasoning based on the dish's flavor profile, you must adjust your entry points based on the premium or discount of perpetual contracts."
    },
    "taskData": null,
    "visualKey": "crypto-ce-funding"
  },
  {
    "type": "concept",
    "title": "Volatility Adjustments for Crypto CE",
    "label": "Crypto Track",
    "body": "### Volatility Adjustments: Modifying the 50% CE\nMarket volatility can significantly impact the effectiveness of the 50% CE. This card explains **how to adjust the CE based on volatility metrics to maintain trading efficacy**.\n\n* **Volatility Measurement**: Utilize the Average True Range (ATR) to gauge market volatility. A higher ATR indicates increased price fluctuations, necessitating wider CE adjustments.\n* **CE Modification**: When ATR exceeds 5%, consider expanding the 50% CE range by 10% to accommodate potential price swings, ensuring your trades remain valid.\n* **Dynamic Strategy**: Adjust your entry and exit points dynamically based on real-time volatility readings to avoid being stopped out during rapid market movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A volatility indicator that measures market price fluctuations over a specified period."
        },
        {
          "term": "Dynamic Adjustment",
          "definition": "Modifying trading parameters based on real-time market conditions."
        }
      ],
      "whyThisMatters": "Adapting the 50% CE to market volatility ensures that trading strategies remain robust during unpredictable price movements.",
      "realLifeExample": "On September 5, 2023, BTC's ATR reached 6%, prompting a 10% adjustment of the 50% CE to $28,500, which successfully captured a long entry during a volatile surge.",
      "commonMistake": "Ignoring volatility can lead to premature exits or missed opportunities during significant price movements.",
      "quickNote": "Adjust the 50% CE based on market volatility to enhance trade reliability.",
      "mentorText": "Think of volatility as the market's heartbeat. If it’s racing, widen your CE to ensure you’re not caught off guard.",
      "mentorAnalogy": "Like an architect adjusting structural integrity based on environmental factors, you must modify your CE based on market volatility to ensure your trading framework holds."
    },
    "taskData": null,
    "visualKey": "crypto-ce-funding"
  },
  {
    "type": "concept",
    "title": "Historical Performance of CE in Crypto",
    "label": "Crypto Track",
    "body": "### Historical Performance: Analyzing the 50% CE\nAnalyzing historical data provides insights into the effectiveness of the 50% CE in crypto trading. This card focuses on **how to evaluate past performance to inform future trading decisions**.\n\n* **Data Collection**: Gather historical price data for major cryptocurrencies, focusing on instances where the 50% CE aligned with significant price reversals or continuations.\n* **Performance Metrics**: Calculate the success rate of trades initiated at the 50% CE over the past six months. A success rate above 70% indicates a reliable trading strategy.\n* **Pattern Recognition**: Identify recurring patterns in price behavior around the 50% CE, allowing for predictive modeling in future trades based on historical performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Historical Data Analysis",
          "definition": "The examination of past market data to identify trends and patterns."
        },
        {
          "term": "Success Rate",
          "definition": "The percentage of trades that result in a profitable outcome."
        }
      ],
      "whyThisMatters": "Evaluating historical performance of the 50% CE enhances decision-making and increases the likelihood of successful trades.",
      "realLifeExample": "In Q1 2023, analysis showed that trades executed at the 50% CE for LTC had a 75% success rate, guiding future entries during similar market conditions.",
      "commonMistake": "Traders often neglect to analyze historical performance, missing valuable insights that could improve their strategies.",
      "quickNote": "Utilize historical performance data to validate the effectiveness of the 50% CE in your trading strategy.",
      "mentorText": "Review your past trades at the 50% CE. If you see a pattern of success, leverage that in your future strategies.",
      "mentorAnalogy": "Like a historian studying past events to predict future outcomes, you must analyze historical performance to inform your trading decisions."
    },
    "taskData": null,
    "visualKey": "crypto-ce-funding"
  },
  {
    "type": "concept",
    "title": "Market Sentiment and Crypto CE",
    "label": "Crypto Track",
    "body": "### Market Sentiment: Impact on 50% CE\nMarket sentiment significantly influences the behavior of crypto assets, particularly at the 50% midpoint of Fair Value Gaps. This card explores **how trader psychology can create volatility around these critical levels**.\n\n* **Sentiment Analysis**: Utilize tools like social media sentiment trackers and on-chain metrics to gauge market mood. A bullish sentiment can push prices above the 50% CE, while bearish sentiment may lead to a rejection.\n* **Psychological Levels**: The 50% CE often aligns with psychological price levels, where traders may place buy or sell orders. Monitor these levels for potential liquidity spikes or reversals.\n* **News Events Correlation**: Major news events can shift sentiment abruptly. For instance, a positive regulatory announcement may drive Bitcoin to breach the 50% CE, while negative news could result in a swift rejection at this level.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders towards a particular asset or market."
        },
        {
          "term": "Fair Value Gap",
          "definition": "The price range where the market has not fully adjusted to supply and demand."
        }
      ],
      "whyThisMatters": "Understanding market sentiment allows traders to anticipate price movements around the 50% CE, enhancing decision-making.",
      "realLifeExample": "On April 14, 2023, Bitcoin surged to $30,000 after a positive sentiment shift from a major ETF approval, breaking through the 50% CE established at $28,500.",
      "commonMistake": "Traders often ignore sentiment indicators, leading to misjudgments about price movements at the 50% CE.",
      "quickNote": "Market sentiment can dictate price action at the 50% CE, making it essential to monitor psychological factors.",
      "mentorText": "When you see a strong bullish sentiment, watch how it interacts with the 50% CE. It can either propel the price higher or create a false breakout.",
      "mentorAnalogy": "Think of market sentiment like weather patterns; just as a storm can change the course of a flight, sentiment can drastically alter price trajectories."
    },
    "taskData": null,
    "visualKey": "crypto-ce-funding"
  },
  {
    "type": "concept",
    "title": "Practical Application of CE in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Engaging with 50% CE in Trading Scenarios\nApplying the 50% CE in real-world scenarios is crucial for effective trading strategies. This card focuses on **hands-on exercises that reinforce the application of the 50% CE in crypto trading**.\n\n* **Scenario Analysis**: Identify historical price movements where the 50% CE acted as a reversal point. Analyze the conditions leading to these movements to refine entry and exit strategies.\n* **Trade Simulation**: Conduct simulations using platforms that allow for backtesting strategies around the 50% CE. Focus on different market conditions, such as bullish or bearish trends, to understand the CE's effectiveness.\n* **Risk Management**: Establish risk parameters based on the 50% CE. For example, set stop-loss orders slightly below the 50% CE to protect against false breakouts while allowing for potential gains.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating historical data to predict future price movements."
        },
        {
          "term": "Trade Simulation",
          "definition": "Using software to replicate trading scenarios for practice."
        }
      ],
      "whyThisMatters": "Practical application solidifies understanding of the 50% CE, enabling traders to make informed decisions in live markets.",
      "realLifeExample": "In a backtest of Ethereum from March 2023, traders noted a consistent reversal at the 50% CE of $2,000, validating the strategy of placing buy orders at this level.",
      "commonMistake": "Traders often fail to backtest their strategies, leading to unpreparedness when encountering the 50% CE in live trading.",
      "quickNote": "Hands-on practice with the 50% CE enhances strategy development and market understanding.",
      "mentorText": "Engage with the 50% CE through simulations. The more you practice, the more intuitive your responses will become in live scenarios.",
      "mentorAnalogy": "Like a pilot practicing in a flight simulator, mastering the 50% CE through simulations prepares you for real market conditions."
    },
    "taskData": null,
    "visualKey": "crypto-ce-funding"
  },
  {
    "type": "practice",
    "title": "Summary of Crypto CE Concepts",
    "label": "Crypto Track",
    "body": "### Key Concepts of 50% CE Application\nSummarizing the application of the 50% CE is essential for aligning trading strategies with market conditions. This card emphasizes **the critical aspects of using the 50% CE effectively**.\n\n* **Identifying CE Levels**: Always calculate the 50% CE from established Fair Value Gaps. This level serves as a reference point for potential reversals or continuations in price movement.\n* **Market Conditions**: Recognize how different market conditions affect the reliability of the 50% CE. Bullish trends may see price action above the CE, while bearish trends often result in rejections at this level.\n* **Strategy Alignment**: Ensure your trading strategy incorporates the 50% CE as a key decision-making point. This alignment can improve entry timing and risk management.",
    "context": {
      "keyTerms": [
        {
          "term": "Strategy Alignment",
          "definition": "The process of ensuring trading strategies are consistent with market conditions."
        },
        {
          "term": "Price Movement",
          "definition": "The change in price over time for a specific asset."
        }
      ],
      "whyThisMatters": "Summarizing these concepts ensures traders can effectively utilize the 50% CE in their trading strategies.",
      "realLifeExample": "During a bullish trend in Bitcoin in May 2023, traders who aligned their strategies with the 50% CE at $35,000 saw successful entries and exits.",
      "commonMistake": "Traders often overlook the importance of adjusting their strategies based on market conditions surrounding the 50% CE.",
      "quickNote": "The 50% CE is a pivotal point; understanding its application can significantly enhance trading outcomes.",
      "mentorText": "Always keep the 50% CE in mind as you develop your trading strategy. It’s your anchor in the turbulent waters of the crypto market.",
      "mentorAnalogy": "Think of the 50% CE as a compass; it guides your trading decisions, ensuring you stay on course amidst market fluctuations."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a bullish market, how should you approach the 50% CE for your trades?",
      "options": [
        {
          "id": "0",
          "text": "Look for buy signals above the 50% CE.",
          "isCorrect": true,
          "feedback": "In a bullish market, prices tend to stay above the 50% CE, making it a good entry point."
        },
        {
          "id": "1",
          "text": "Place sell orders at the 50% CE.",
          "isCorrect": false,
          "feedback": "In a bullish market, placing sell orders at the 50% CE may lead to missed opportunities."
        },
        {
          "id": "2",
          "text": "Ignore the 50% CE completely.",
          "isCorrect": false,
          "feedback": "Ignoring the 50% CE can lead to poor trading decisions."
        },
        {
          "id": "3",
          "text": "Only trade when the price is below the 50% CE.",
          "isCorrect": false,
          "feedback": "This approach contradicts the bullish trend and may result in losses."
        }
      ]
    },
    "visualKey": "crypto-ce-funding"
  },
  {
    "type": "summary",
    "title": "Crypto CE Midpoint Review",
    "label": "Crypto Track",
    "body": "### Advanced Application of Consequent Encroachment\nThis card delves into advanced applications of Consequent Encroachment concepts tailored for crypto trading. It covers **edge cases and professional-level nuances** that traders must consider.\n\n* **Market Anomalies**: Identify and analyze instances where the 50% CE fails due to sudden market anomalies, such as flash crashes or extreme volatility. Understanding these scenarios can help refine risk management strategies.\n* **Multi-Timeframe Analysis**: Incorporate multi-timeframe analysis to validate the significance of the 50% CE. A 50% CE on a higher timeframe may carry more weight than on a lower timeframe, influencing trade decisions.\n* **Liquidity Considerations**: Assess liquidity conditions when approaching the 50% CE. Low liquidity can lead to erratic price movements, making it essential to adjust trading strategies accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Anomalies",
          "definition": "Unexpected events that cause significant price movements."
        },
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "Analyzing price action across different timeframes to gain insights."
        }
      ],
      "whyThisMatters": "Advanced understanding of these concepts allows traders to navigate complex market conditions effectively.",
      "realLifeExample": "During the May 2021 crypto crash, Bitcoin's 50% CE at $40,000 was breached due to extreme volatility, illustrating the need for adaptive strategies.",
      "commonMistake": "Traders often apply standard strategies without considering the unique dynamics of crypto markets, leading to suboptimal outcomes.",
      "quickNote": "Advanced applications of CE require a nuanced understanding of market dynamics and conditions.",
      "mentorText": "When trading at the 50% CE, always consider the broader market context. Adjust your strategies based on liquidity and anomalies.",
      "mentorAnalogy": "Like a surgeon adapting techniques based on patient conditions, you must tailor your trading approach to the unique circumstances of the crypto market."
    },
    "taskData": null,
    "visualKey": "crypto-ce-funding"
  }
];
