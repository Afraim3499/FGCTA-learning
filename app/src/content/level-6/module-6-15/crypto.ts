import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Preparing for Perpetual Margin Sweeps",
    "label": "Crypto Track",
    "body": "### Core Scenario: Perpetual Margin Sweep Preparation\nPreparation for perpetual margin sweeps is critical to avoid forced liquidations and maximize trading efficiency. This card outlines **the steps to establish a robust margin framework prior to market volatility**.\n\n* **Margin Thresholds**: Set clear margin thresholds based on volatility metrics; for example, maintaining a minimum of 30% margin in a BTC perpetual contract during high-impact news events.\n* **Risk Assessment Protocols**: Implement a risk assessment protocol that includes monitoring open interest and funding rates, adjusting positions when funding rates exceed 0.1% per 8 hours.\n* **Exit Strategy Development**: Develop exit strategies that incorporate trailing stops and limit orders to protect capital during rapid price movements, ensuring execution at predetermined levels.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Margin Sweep",
          "definition": "A market event where forced liquidations occur due to margin calls on leveraged positions."
        }
      ],
      "whyThisMatters": "Understanding how to prepare for margin sweeps helps traders mitigate risks associated with high volatility in crypto markets.",
      "realLifeExample": "During a recent BTC price drop of 15% in under an hour, traders with a margin threshold set at 30% were able to avoid liquidation, while those without proper preparation faced significant losses.",
      "commonMistake": "Failing to adjust margin thresholds in response to market volatility can lead to unexpected liquidations.",
      "quickNote": "Establish clear margin thresholds to navigate perpetual margin sweeps effectively.",
      "mentorText": "When preparing for margin sweeps, I always emphasize the importance of having your margin thresholds set well in advance. You need to know your limits before the market tests them.",
      "mentorAnalogy": "Think of it like a pilot preparing for turbulence; they check fuel levels and weight distribution before takeoff to ensure a safe flight."
    },
    "taskData": null,
    "visualKey": "level-6-debrief-recap"
  },
  {
    "type": "concept",
    "title": "Understanding Liquidation Risks in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Scenario: Liquidation Risk Assessment\nLiquidation risks are inherent in crypto trading, particularly in leveraged positions. This card details **how to identify and mitigate these risks effectively**.\n\n* **Leverage Impact Analysis**: Analyze the impact of leverage on your positions; for instance, a 10x leverage on a $1,000 BTC position means a price movement of just $100 can trigger liquidation.\n* **Market Sentiment Monitoring**: Continuously monitor market sentiment indicators, such as the Fear & Greed Index, to anticipate potential volatility spikes that could lead to liquidations.\n* **Stop-Loss Implementation**: Implement stop-loss orders strategically to limit potential losses; for example, setting a stop-loss at 5% below your entry price can help protect against sudden downturns.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Risk",
          "definition": "The risk of losing a position due to insufficient margin to cover losses."
        }
      ],
      "whyThisMatters": "Understanding liquidation risks allows traders to make informed decisions and protect their capital during high volatility.",
      "realLifeExample": "In a recent market downturn, traders using 20x leverage on ETH positions faced liquidations as the price fell 10%, resulting in significant losses for unprepared accounts.",
      "commonMistake": "Over-leveraging without understanding the associated risks often leads to unexpected liquidations.",
      "quickNote": "Assess leverage and market conditions to manage liquidation risks effectively.",
      "mentorText": "I’ve seen too many traders get wiped out because they didn’t understand how leverage amplifies their risks. Always know your limits.",
      "mentorAnalogy": "Consider it like a surgeon assessing the risks of anesthesia; understanding the patient's condition is crucial to avoid complications during surgery."
    },
    "taskData": null,
    "visualKey": "level-6-debrief-recap"
  },
  {
    "type": "concept",
    "title": "Effective Margin Management Strategies",
    "label": "Crypto Track",
    "body": "### Core Scenario: Margin Management Techniques\nEffective margin management is essential to minimize risks during perpetual margin sweeps. This card outlines **strategies to optimize margin usage and protect against volatility**.\n\n* **Dynamic Margin Adjustments**: Regularly adjust your margin levels based on market conditions; for example, increasing margin during high volatility periods can prevent liquidation.\n* **Diversification of Positions**: Diversify your positions across different crypto assets to spread risk; for instance, holding BTC, ETH, and LINK can reduce exposure to a single asset's volatility.\n* **Utilization of Risk Metrics**: Use metrics such as Value at Risk (VaR) to determine the potential loss in your portfolio; a VaR of 5% indicates that there is a 5% chance of losing more than that amount in a given timeframe.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Management",
          "definition": "The process of managing the amount of capital allocated to margin trading."
        }
      ],
      "whyThisMatters": "Implementing effective margin management strategies is vital for sustaining trading operations during market fluctuations.",
      "realLifeExample": "During a recent spike in volatility, traders who adjusted their margins dynamically were able to maintain their positions, while those who did not faced forced liquidations.",
      "commonMistake": "Neglecting to adjust margin levels in response to changing market conditions can lead to significant losses.",
      "quickNote": "Optimize margin usage through dynamic adjustments and diversification.",
      "mentorText": "I always tell my students that margin management is like managing a budget; you need to know when to allocate more and when to pull back.",
      "mentorAnalogy": "Think of it as a chef managing ingredients; knowing when to add more spice or dilute a dish can make the difference between success and failure."
    },
    "taskData": null,
    "visualKey": "level-6-debrief-recap"
  },
  {
    "type": "concept",
    "title": "Conducting Market Analysis for Crypto Drills",
    "label": "Crypto Track",
    "body": "### Core Scenario: Market Analysis Techniques\nConducting thorough market analysis is crucial for preparing for liquidation gate drills. This card explains **the methodologies to analyze market conditions effectively**.\n\n* **Technical Analysis Framework**: Utilize technical analysis tools such as Fibonacci retracements and moving averages to identify key support and resistance levels; for example, using a 50-day moving average to gauge trend strength.\n* **Volume Analysis**: Analyze trading volume to confirm price movements; a price increase accompanied by a volume spike indicates strong buying interest, while low volume can signal weakness.\n* **Sentiment Analysis**: Incorporate sentiment analysis by tracking social media trends and news sentiment to gauge market psychology; for instance, a surge in negative sentiment on Twitter can precede a market downturn.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Analysis",
          "definition": "The process of evaluating market conditions to inform trading decisions."
        }
      ],
      "whyThisMatters": "Conducting effective market analysis ensures traders are prepared for potential liquidation scenarios and can make informed decisions.",
      "realLifeExample": "In a recent drill, traders who utilized volume analysis to identify a breakout were able to capitalize on a 20% price increase in LTC, while others who ignored volume signals missed the opportunity.",
      "commonMistake": "Relying solely on one type of analysis, such as technical without considering sentiment, can lead to incomplete assessments.",
      "quickNote": "Employ a combination of technical, volume, and sentiment analysis for comprehensive market evaluations.",
      "mentorText": "I stress the importance of a multi-faceted approach to market analysis. Just like a detective, you need to gather all evidence before making a conclusion.",
      "mentorAnalogy": "Imagine an architect reviewing blueprints; they must analyze every detail to ensure the structure is sound before construction begins."
    },
    "taskData": null,
    "visualKey": "level-6-debrief-recap"
  },
  {
    "type": "concept",
    "title": "Developing Robust Trading Strategies for Drills",
    "label": "Crypto Track",
    "body": "### Core Strategy: Tailored Approaches for Liquidation Gates\nRobust trading strategies are essential for effectively navigating liquidation gate drills. This card focuses on **how to develop strategies that are specifically tailored to high-stress scenarios**.\n\n* **Scenario Analysis**: Conduct thorough analysis of historical liquidation events, identifying key price levels and volume spikes that triggered significant market movements.\n* **Risk Management Protocols**: Establish strict risk management rules, including stop-loss placements and position sizing, that adapt dynamically to market volatility during drills.\n* **Execution Plans**: Create detailed execution plans that outline entry and exit criteria based on real-time data, ensuring quick decision-making under pressure.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Gate",
          "definition": "A critical price point where significant liquidation events occur, often leading to rapid market movements."
        }
      ],
      "whyThisMatters": "Developing tailored strategies enhances a trader's ability to respond effectively during high-stakes liquidation scenarios, minimizing losses and maximizing opportunities.",
      "realLifeExample": "In a recent drill, a strategy focused on BTC/USD identified a liquidation gate at $30,000, allowing for a preemptive short position that capitalized on a 10% drop triggered by a sudden influx of sell orders.",
      "commonMistake": "Traders often overlook the importance of backtesting their strategies against historical liquidation events, leading to unpreparedness during actual drills.",
      "quickNote": "Tailor strategies to specific liquidation scenarios for effective drill performance.",
      "mentorText": "When preparing for liquidation gates, I emphasize the need for a strategy that is not just reactive but anticipatory. Analyze past events to inform your approach.",
      "mentorAnalogy": "Think of this like a military operation where strategies are developed based on past battles. Each drill is a rehearsal, and the more you know your enemy's tactics, the better prepared you will be."
    },
    "taskData": null,
    "visualKey": "level-6-debrief-recap"
  },
  {
    "type": "concept",
    "title": "Building Emotional Resilience for Trading",
    "label": "Crypto Track",
    "body": "### Core Skill: Emotional Resilience in Trading\nEmotional resilience is critical for maintaining composure during high-pressure trading situations, such as margin sweeps. This card outlines **strategies to cultivate emotional strength**.\n\n* **Mindfulness Techniques**: Implement mindfulness practices, such as breathing exercises and visualization, to maintain focus and reduce anxiety during market volatility.\n* **Scenario Simulation**: Regularly engage in simulated trading scenarios that mimic high-pressure conditions to build familiarity and comfort with stressors.\n* **Reflective Journaling**: Maintain a trading journal to document emotional responses during trades, allowing for reflection and identification of triggers that may impact decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Resilience",
          "definition": "The ability to maintain emotional stability and composure under stress, particularly in trading environments."
        }
      ],
      "whyThisMatters": "Emotional resilience enables traders to make rational decisions rather than emotional ones, which is crucial during volatile market conditions.",
      "realLifeExample": "During a recent margin sweep in ETH/USD, a trader who practiced mindfulness techniques was able to remain calm and avoid panic selling, ultimately profiting from the rebound after the sweep.",
      "commonMistake": "Traders often neglect the psychological aspect of trading, leading to emotional decision-making that can result in significant losses.",
      "quickNote": "Cultivating emotional resilience is essential for effective trading under pressure.",
      "mentorText": "In trading, your mindset can be your greatest asset or your worst enemy. Practice techniques that keep you grounded, especially when the market gets chaotic.",
      "mentorAnalogy": "Consider a surgeon in the operating room; they must remain calm and focused despite the high stakes. Similarly, a trader must manage their emotions to execute trades effectively."
    },
    "taskData": null,
    "visualKey": "level-6-debrief-recap"
  },
  {
    "type": "practice",
    "title": "Practicing for Margin Sweep Scenarios",
    "label": "Crypto Track",
    "body": "### Core Exercise: Simulating Margin Sweep Responses\nPracticing for margin sweep scenarios is vital for reinforcing strategies and responses. This card provides **structured exercises to enhance preparedness**.\n\n* **Scenario Creation**: Develop realistic margin sweep scenarios based on historical data, including specific price levels and volume thresholds that triggered past sweeps.\n* **Response Drills**: Conduct drills where traders must react to simulated margin sweeps, executing predefined strategies and adjusting positions based on real-time market conditions.\n* **Performance Review**: After each drill, analyze performance metrics such as reaction time, decision accuracy, and emotional responses to identify areas for improvement.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Sweep",
          "definition": "A rapid liquidation of positions triggered by significant price movements, often resulting in cascading sell-offs."
        }
      ],
      "whyThisMatters": "Regular practice in simulated environments helps traders develop instinctual responses, reducing reaction times during actual market events.",
      "realLifeExample": "In a recent practice session, a simulated margin sweep in LTC/USD at $150 allowed traders to test their strategies, leading to a 15% profit when the market rebounded after the initial drop.",
      "commonMistake": "Traders often fail to simulate realistic scenarios, leading to unpreparedness when actual margin sweeps occur.",
      "quickNote": "Regularly practice margin sweep scenarios to enhance response strategies.",
      "mentorText": "The key to mastering margin sweeps is practice. Simulate these scenarios until your responses become second nature; this will save you in real situations.",
      "mentorAnalogy": "Just as a firefighter trains for emergencies in controlled environments, traders must practice their responses to market sweeps to ensure they can act decisively when it matters."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated margin sweep scenario, what is the most effective immediate response?",
      "options": [
        {
          "id": "0",
          "text": "Execute a pre-planned stop-loss order immediately.",
          "isCorrect": true,
          "feedback": "Executing a pre-planned stop-loss order allows for risk management and minimizes potential losses."
        },
        {
          "id": "1",
          "text": "Hold the position and wait for the market to recover.",
          "isCorrect": false,
          "feedback": "Holding the position without a plan can lead to larger losses during a margin sweep."
        },
        {
          "id": "2",
          "text": "Panic sell all positions to avoid further losses.",
          "isCorrect": false,
          "feedback": "Panic selling often leads to greater losses; a structured response is essential."
        },
        {
          "id": "3",
          "text": "Ignore the sweep and continue with the original strategy.",
          "isCorrect": false,
          "feedback": "Ignoring market changes can result in missed opportunities to protect capital."
        }
      ]
    },
    "visualKey": "level-6-debrief-recap"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Preparation Concepts",
    "label": "Crypto Track",
    "body": "### Core Summary: Key Concepts for Final Gate Preparation\nThis summary encapsulates the essential concepts covered in preparation for perpetual margin sweeps and liquidation gate drills. Understanding these elements is critical for successful execution.\n\n* **Robust Strategy Development**: Tailored strategies for liquidation gates enhance preparedness and response capabilities during drills.\n* **Emotional Resilience**: Building emotional strength is vital for maintaining composure and making rational decisions during high-pressure trading scenarios.\n* **Practical Simulations**: Engaging in realistic practice scenarios reinforces instinctual responses and improves overall trading performance in actual market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Margin Sweep",
          "definition": "A scenario where rapid price movements lead to widespread liquidation of leveraged positions."
        }
      ],
      "whyThisMatters": "Synthesizing these concepts equips traders with the necessary skills and mindset to navigate high-stakes trading environments effectively.",
      "realLifeExample": "Traders who applied these concepts during recent market volatility were able to mitigate losses and capitalize on recovery opportunities, demonstrating the effectiveness of thorough preparation.",
      "commonMistake": "Failing to integrate all aspects of preparation can lead to disjointed strategies and ineffective responses during critical market events.",
      "quickNote": "Synthesize key concepts for effective trading during high-pressure scenarios.",
      "mentorText": "As you prepare for the final gate, ensure that you have synthesized all your learning. Each concept builds on the last, creating a comprehensive strategy for success.",
      "mentorAnalogy": "Like a well-prepared athlete who trains in all aspects of their sport, a trader must integrate all preparation elements to perform at their best under pressure."
    },
    "taskData": null,
    "visualKey": "level-6-debrief-recap"
  }
];
