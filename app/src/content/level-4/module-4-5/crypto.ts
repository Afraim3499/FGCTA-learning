import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto PO3 Daily Profile Templates",
    "label": "Crypto Track",
    "body": "### Crypto PO3: Daily Profile Templates\nDaily profile templates for cryptocurrencies provide a structured approach to analyze price action across the Accumulation, Manipulation, and Distribution phases. This card outlines **specific templates tailored for perpetual contracts**.\n\n* **Template Structure**: Each daily profile should include three distinct sections: Accumulation (initial consolidation), Manipulation (sharp price movements), and Distribution (profit-taking phase). Use color coding to differentiate these phases visually.\n* **Perpetual Contract Characteristics**: Unlike traditional futures, perpetual contracts do not expire, which necessitates adjustments in the template to account for continuous funding rates and open interest fluctuations.\n* **Session Timing**: Utilize the UTC time zone for daily profiles, as most perpetual contracts are traded globally, ensuring alignment with market liquidity peaks during major sessions.",
    "visualKey": "crypto-po3-template",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Impact of Funding Rates on Crypto Candles",
    "label": "Crypto Track",
    "body": "### Crypto PO3: Impact of Funding Rates\nFunding rates play a critical role in shaping the daily candles of cryptocurrencies, particularly during the Accumulation and Manipulation phases. Understanding these dynamics is essential for accurate market analysis.\n\n* **Funding Rate Calculation**: Funding rates are typically calculated every 8 hours and can either incentivize long or short positions based on market sentiment. A positive funding rate indicates that long positions pay shorts, often leading to upward price pressure.\n* **Candle Behavior During Accumulation**: During the Accumulation phase, a high funding rate can lead to increased buying pressure, resulting in bullish candles. Conversely, a negative funding rate may indicate a potential reversal.\n* **Manipulation Phase Signals**: Watch for sudden spikes in funding rates during the Manipulation phase, as they can indicate market makers' intentions to trigger liquidations and create volatility.",
    "visualKey": "crypto-po3-template",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Understanding Close Liquidations in Crypto",
    "label": "Crypto Track",
    "body": "### Crypto PO3: Close Liquidations\nClose liquidations significantly impact daily crypto candles, often signaling shifts in market sentiment and potential trend reversals. This card explores how to identify and interpret these events.\n\n* **Liquidation Triggers**: Liquidations occur when a trader's position is forcibly closed due to insufficient margin. Monitor the funding rates and open interest to anticipate potential liquidation events.\n* **Candle Patterns**: A sudden increase in liquidations often results in sharp price movements, creating long wicks on daily candles. Analyze these patterns to gauge market sentiment and potential reversals.\n* **Market Sentiment Indicators**: High liquidation volumes during the Manipulation phase can indicate excessive leverage and a crowded trade, often leading to a significant price correction.",
    "visualKey": "crypto-po3-template",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Dynamics of Perpetual Contracts in PO3",
    "label": "Crypto Track",
    "body": "### Crypto PO3: Dynamics of Perpetual Contracts\nPerpetual contracts introduce unique dynamics that influence the PO3 phases in daily crypto trading. Understanding these nuances is essential for effective market participation.\n\n* **Continuous Trading Mechanism**: Perpetual contracts allow traders to hold positions indefinitely, which affects price stability and volatility. This continuous nature can lead to prolonged Accumulation phases.\n* **Funding Rate Adjustments**: The funding rate mechanism ensures that prices of perpetual contracts closely track the underlying asset, impacting the Accumulation and Distribution phases. Regularly assess funding rates to gauge market sentiment.\n* **Impact on Price Action**: During the Distribution phase, sudden shifts in funding rates can lead to rapid price declines as traders exit positions, creating significant volatility and potential trading opportunities.",
    "visualKey": "crypto-po3-template",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Analyzing Market Sentiment in Crypto",
    "label": "Crypto Track",
    "body": "### Market Sentiment Analysis: Daily Candle Phases\nUnderstanding market sentiment is critical in interpreting daily crypto candles through the lens of the Power of 3 (PO3) phases. This card focuses on the interplay between accumulation, manipulation, and distribution phases in gauging market sentiment.\n\n* **Accumulation Phase Indicators**: Look for prolonged periods of low volatility and sideways price action, often characterized by small-bodied candles, indicating that institutional players are building positions without attracting attention.\n* **Manipulation Signals**: Identify sharp price spikes or drops that occur within the daily candle, often accompanied by high volume, signaling the presence of market makers attempting to influence price direction.\n* **Distribution Phase Characteristics**: Recognize signs of distribution through bearish engulfing patterns or large red candles at resistance levels, suggesting that smart money is offloading positions to retail traders.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Accumulation Phase",
          "definition": "A period where institutions build positions quietly."
        },
        {
          "term": "Manipulation Phase",
          "definition": "A phase characterized by price spikes to mislead retail traders."
        },
        {
          "term": "Distribution Phase",
          "definition": "A stage where institutions sell off their positions."
        }
      ],
      "whyThisMatters": "Accurate sentiment analysis allows traders to align their strategies with institutional behavior, enhancing decision-making.",
      "realLifeExample": "On March 1st, 2023, Bitcoin showed an accumulation phase with a series of small candles around $22,000, followed by a manipulation spike to $24,000 before a distribution phase began.",
      "commonMistake": "Traders often misinterpret manipulation spikes as genuine trend reversals, leading to premature entries.",
      "quickNote": "Market sentiment is revealed through the interplay of PO3 phases in daily candles.",
      "mentorText": "When analyzing daily candles, focus on how the price behaves during each phase. Accumulation is quiet, manipulation is loud, and distribution often leaves a trail of red candles.",
      "mentorAnalogy": "Think of market sentiment like a theater performance: accumulation is the quiet backstage preparation, manipulation is the dramatic act on stage, and distribution is the audience leaving after the show."
    },
    "taskData": null,
    "visualKey": "crypto-po3-template"
  },
  {
    "type": "concept",
    "title": "Price Volatility and PO3 in Crypto",
    "label": "Crypto Track",
    "body": "### Price Volatility: Understanding PO3 Phases\nPrice volatility plays a significant role in the Power of 3 (PO3) framework for cryptocurrencies. This card explores how volatility interacts with the accumulation, manipulation, and distribution phases, providing insights for effective risk management.\n\n* **Volatility in Accumulation**: During accumulation, expect lower volatility as institutions build positions. This phase often presents opportunities for traders to enter before significant price movements occur.\n* **Manipulation and High Volatility**: Manipulation phases are marked by sudden spikes in volatility, where price can swing dramatically in a short time. Recognizing these moments is crucial for avoiding false breakouts.\n* **Distribution and Volatility Patterns**: In the distribution phase, volatility may increase as institutions offload their positions. Traders should watch for increased volume and larger candle bodies, indicating a potential trend reversal.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Risk Management",
          "definition": "Strategies to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Understanding volatility in the context of PO3 phases aids in better risk management and timing of trades.",
      "realLifeExample": "On April 15th, 2023, Ethereum experienced a manipulation phase with a volatility spike of 15% in under an hour, moving from $1,800 to $2,070 before entering a distribution phase.",
      "commonMistake": "Traders often overlook volatility indicators, leading to misjudged entries during manipulation phases.",
      "quickNote": "Volatility is a key indicator of the current PO3 phase and should guide your trading decisions.",
      "mentorText": "Monitor volatility closely; it’s your signal for when to be cautious or aggressive. Accumulation should feel calm, while manipulation will shake you up.",
      "mentorAnalogy": "Consider volatility like turbulence during a flight: during calm conditions (accumulation), you can relax, but during turbulence (manipulation), you must be alert and ready for sudden changes."
    },
    "taskData": null,
    "visualKey": "crypto-po3-template"
  },
  {
    "type": "practice",
    "title": "Practice with Crypto PO3 Templates",
    "label": "Crypto Track",
    "body": "### Engaging with PO3 Templates\nThis card provides practical exercises to reinforce your understanding of the Power of 3 (PO3) framework in cryptocurrency trading. Utilize the PO3 templates to analyze daily candles effectively.\n\n* **Template Application**: Use the PO3 template to identify the phases in recent daily candles of Bitcoin. Mark accumulation, manipulation, and distribution phases based on price action and volume.\n* **Scenario Analysis**: Analyze the daily chart of Litecoin over the past month, identifying at least three distinct PO3 phases and their implications for potential trading strategies.\n* **Risk Assessment**: After identifying the phases, assess the risk associated with each phase. Determine appropriate entry and exit points based on the identified PO3 structure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "PO3 Template",
          "definition": "A structured framework for analyzing daily candle phases."
        },
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating specific market situations to inform trading decisions."
        }
      ],
      "whyThisMatters": "Practicing with PO3 templates enhances your ability to identify and act on market phases, improving trading outcomes.",
      "realLifeExample": "In a recent analysis of Cardano, using the PO3 template revealed a clear accumulation phase followed by a manipulation spike, allowing for strategic entry before a distribution phase.",
      "commonMistake": "Traders often fail to apply the PO3 framework consistently, leading to missed opportunities.",
      "quickNote": "Utilizing PO3 templates sharpens your analytical skills in identifying market phases.",
      "mentorText": "Engage with the PO3 templates regularly. They are your roadmap to understanding market phases and making informed trades.",
      "mentorAnalogy": "Using PO3 templates is like a chef following a recipe: each phase is a step that leads to a successful dish, and skipping steps can ruin the outcome."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is the first step when applying the PO3 template to a daily candle?",
      "options": [
        {
          "id": "0",
          "text": "Identify the accumulation phase",
          "isCorrect": true,
          "feedback": "Correct. Identifying the accumulation phase is crucial for understanding the market context."
        },
        {
          "id": "1",
          "text": "Look for price spikes",
          "isCorrect": false,
          "feedback": "Incorrect. Price spikes are typically associated with manipulation, which comes later."
        },
        {
          "id": "2",
          "text": "Determine exit points",
          "isCorrect": false,
          "feedback": "Incorrect. Exit points are determined after analyzing the phases."
        },
        {
          "id": "3",
          "text": "Assess overall market sentiment",
          "isCorrect": false,
          "feedback": "Incorrect. While sentiment is important, the first step is identifying the phases."
        }
      ]
    },
    "visualKey": "crypto-po3-template"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto PO3 Applications",
    "label": "Crypto Track",
    "body": "### Key Takeaways: Crypto PO3 Analysis\nThis card summarizes the essential insights gained from analyzing the Power of 3 (PO3) phases in cryptocurrency trading. Understanding these phases is vital for effective trading strategies.\n\n* **Phases Overview**: Recognize that daily candles can be deconstructed into accumulation, manipulation, and distribution phases, each with distinct characteristics and implications for trading.\n* **Market Sentiment**: Analyze how market sentiment shifts through these phases, providing context for price movements and potential trading opportunities.\n* **Volatility Management**: Utilize insights from volatility patterns in each phase to inform risk management strategies and optimize entry and exit points.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Phases Overview",
          "definition": "The breakdown of daily candles into accumulation, manipulation, and distribution."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders towards a particular cryptocurrency."
        },
        {
          "term": "Volatility Management",
          "definition": "Strategies to handle price fluctuations effectively."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of PO3 phases enhances trading precision and strategic decision-making.",
      "realLifeExample": "After analyzing the PO3 phases of Solana, traders identified a clear accumulation phase followed by manipulation, leading to successful trades during the distribution phase.",
      "commonMistake": "Traders often overlook the significance of each phase, leading to misaligned strategies.",
      "quickNote": "Mastering the PO3 framework is essential for navigating the complexities of cryptocurrency markets.",
      "mentorText": "Reflect on the PO3 phases regularly. Each phase tells a story that can guide your trading decisions effectively.",
      "mentorAnalogy": "Understanding the PO3 phases is like a detective piecing together clues: each phase reveals critical information that leads to a successful conclusion."
    },
    "taskData": null,
    "visualKey": "crypto-po3-template"
  }
];
