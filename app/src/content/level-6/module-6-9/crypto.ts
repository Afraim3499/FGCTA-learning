import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "DXY Trends and Crypto Market Sentiment",
    "label": "Crypto Track",
    "body": "### Core Scenario: DXY Trends and Market Sentiment\nDXY trends serve as a barometer for risk sentiment in the cryptocurrency market, influencing trader behavior. This card teaches **how to interpret DXY movements to assess market sentiment**.\n\n* **Risk-On Sentiment**: A declining DXY typically signals risk-on sentiment, leading to increased capital flow into cryptocurrencies like Bitcoin and Ethereum.\n* **Risk-Off Sentiment**: Conversely, a rising DXY indicates risk-off sentiment, often resulting in capital withdrawal from crypto assets, as traders seek safety in the dollar.\n* **Sentiment Confirmation**: Use DXY trends to confirm bullish or bearish setups in crypto; for example, a DXY drop alongside bullish crypto indicators strengthens the case for a long position.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-On Sentiment",
          "definition": "A market condition where investors are willing to take on more risk, typically leading to higher asset prices."
        },
        {
          "term": "Risk-Off Sentiment",
          "definition": "A market condition where investors prefer safer assets, often resulting in lower asset prices."
        }
      ],
      "whyThisMatters": "Understanding DXY trends allows traders to align their crypto strategies with broader market sentiment, enhancing decision-making accuracy.",
      "realLifeExample": "On March 15, 2023, the DXY fell by 0.8%, coinciding with Bitcoin rallying from $25,000 to $27,500, indicating a risk-on environment.",
      "commonMistake": "Traders often overlook DXY trends, leading to misaligned positions in the crypto market.",
      "quickNote": "DXY trends directly influence crypto market sentiment and trading decisions.",
      "mentorText": "When the DXY is falling, I look for opportunities in crypto. It’s like a green light for risk-taking. If the dollar is weak, traders are more inclined to invest in assets like Bitcoin.",
      "mentorAnalogy": "Think of the DXY as the weather forecast for trading; a sunny day (falling DXY) encourages outdoor activities (crypto investments), while a storm (rising DXY) makes people stay indoors (withdraw from risk)."
    },
    "taskData": null,
    "visualKey": "dxy-correlation-grid"
  },
  {
    "type": "concept",
    "title": "Correlation Between DXY and Major Cryptos",
    "label": "Crypto Track",
    "body": "### Core Scenario: Analyzing DXY-Crypto Correlation\nUnderstanding the correlation between DXY movements and major cryptocurrencies is essential for informed trading decisions. This card teaches **how to analyze this correlation effectively**.\n\n* **Statistical Analysis**: Use correlation coefficients to quantify the relationship between DXY and major cryptocurrencies. A coefficient close to -1 indicates a strong inverse correlation, while a value near 1 indicates a direct correlation.\n* **Historical Context**: Review historical data; for instance, during Q4 2022, a DXY increase of 5% correlated with a 20% decline in Bitcoin, highlighting the inverse relationship.\n* **Real-Time Monitoring**: Utilize real-time data feeds to track DXY movements and assess their immediate impact on crypto prices, allowing for timely trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the strength and direction of a relationship between two variables."
        },
        {
          "term": "Inverse Correlation",
          "definition": "A relationship where one variable increases as the other decreases."
        }
      ],
      "whyThisMatters": "Analyzing the correlation helps traders anticipate crypto price movements based on DXY trends, improving entry and exit strategies.",
      "realLifeExample": "On February 10, 2023, the DXY rose by 1.2%, leading to a 15% drop in Ethereum, showcasing the negative correlation.",
      "commonMistake": "Traders often misinterpret correlation as causation, leading to misguided trading strategies.",
      "quickNote": "Quantifying the DXY-crypto correlation enhances trading precision.",
      "mentorText": "When I see the DXY moving, I check how Bitcoin and Ethereum react. If they’re moving in opposite directions, it’s a signal I can’t ignore.",
      "mentorAnalogy": "Consider the DXY as a conductor in an orchestra; when it raises its baton (rises), the instruments (cryptos) often play a different tune (decline)."
    },
    "taskData": null,
    "visualKey": "dxy-correlation-grid"
  },
  {
    "type": "concept",
    "title": "Using DXY as a Risk Filter for Crypto Trades",
    "label": "Crypto Track",
    "body": "### Core Scenario: DXY as a Risk Filter\nUtilizing DXY as a risk filter enhances the robustness of cryptocurrency trading strategies. This card teaches **how to incorporate DXY movements into trade entry and exit criteria**.\n\n* **Entry Criteria**: Enter long positions in cryptocurrencies when the DXY shows a downward trend, confirming a favorable risk-on environment. For example, if the DXY drops by 0.5% while Bitcoin breaks above $30,000, consider entering a long position.\n* **Exit Criteria**: Exit positions when the DXY begins to rise, indicating a potential shift to risk-off sentiment. For instance, if the DXY increases by 1% while Ethereum approaches resistance at $2,500, consider taking profits.\n* **Dynamic Adjustments**: Continuously monitor DXY fluctuations and adjust stop-loss levels accordingly to protect gains during volatile periods.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Filter",
          "definition": "A criterion used to assess the potential risk of an investment before entering or exiting a position."
        },
        {
          "term": "Stop-Loss Level",
          "definition": "A predetermined price level at which a trader will exit a losing position to prevent further losses."
        }
      ],
      "whyThisMatters": "Incorporating DXY as a risk filter allows traders to make more informed decisions, aligning their strategies with market conditions.",
      "realLifeExample": "On April 5, 2023, the DXY fell by 0.7%, prompting a long entry in Bitcoin at $32,000, which subsequently rose to $34,500 before the DXY reversed.",
      "commonMistake": "Failing to adjust positions based on DXY movements can lead to unnecessary losses during market shifts.",
      "quickNote": "DXY serves as a critical risk filter for crypto trading decisions.",
      "mentorText": "I always check the DXY before entering a trade. If it’s dropping, I’m more confident in my long positions. If it starts to rise, I’m ready to exit.",
      "mentorAnalogy": "Using DXY as a risk filter is like a pilot checking weather conditions before takeoff; it ensures a safe and informed journey through the trading landscape."
    },
    "taskData": null,
    "visualKey": "dxy-correlation-grid"
  },
  {
    "type": "concept",
    "title": "DXY's Influence on Altcoin Performance",
    "label": "Crypto Track",
    "body": "### Core Scenario: DXY's Impact on Altcoins\nDXY fluctuations significantly influence the performance of altcoins, affecting trading strategies. This card teaches **how to analyze DXY's impact on altcoin movements**.\n\n* **Direct Correlation**: Many altcoins tend to follow Bitcoin's lead, which is often influenced by DXY trends. For example, if the DXY rises, altcoins like Cardano may also decline as investors retreat to safer assets.\n* **Sector Analysis**: Analyze specific altcoin sectors; during a DXY rally, DeFi tokens may underperform compared to stablecoins, which may hold their value better in a risk-off environment.\n* **Strategic Positioning**: Position altcoin trades based on DXY trends; for instance, consider entering positions in altcoins during a DXY decline while Bitcoin is bullish, as this may indicate a broader market rally.",
    "context": {
      "keyTerms": [
        {
          "term": "DeFi Tokens",
          "definition": "Cryptocurrencies associated with decentralized finance platforms that aim to replicate traditional financial services."
        },
        {
          "term": "Stablecoins",
          "definition": "Cryptocurrencies designed to maintain a stable value relative to a fiat currency."
        }
      ],
      "whyThisMatters": "Understanding DXY's influence on altcoins allows traders to optimize their strategies based on broader market conditions.",
      "realLifeExample": "On January 20, 2023, the DXY increased by 1%, leading to a 10% drop in Cardano while stablecoins maintained their value, illustrating the impact of DXY on altcoin performance.",
      "commonMistake": "Ignoring DXY trends can lead to poor altcoin investment decisions, especially during volatile market conditions.",
      "quickNote": "DXY fluctuations directly affect altcoin performance and trading strategies.",
      "mentorText": "I watch the DXY closely when trading altcoins. If the dollar is gaining strength, I’m cautious with my altcoin positions; they often follow Bitcoin's lead.",
      "mentorAnalogy": "Think of the DXY as the tide; when it rises, many altcoins (boats) may struggle to stay afloat, while stablecoins (buoys) remain unaffected."
    },
    "taskData": null,
    "visualKey": "dxy-correlation-grid"
  },
  {
    "type": "concept",
    "title": "DXY Trends as Reversal Indicators in Crypto",
    "label": "Crypto Track",
    "body": "### Core Scenario: DXY and Crypto Market Reversals\nDXY trends often precede significant reversals in the cryptocurrency market, providing a crucial timing mechanism for traders. Understanding this correlation enhances entry and exit strategies.\n\n* **Inverse Correlation Dynamics**: When DXY strengthens, it typically signals a risk-off sentiment, often leading to declines in cryptocurrencies like Bitcoin and Ethereum. Monitor DXY movements closely for potential reversal signals in crypto.\n* **Reversal Confirmation**: A sustained DXY decline of 1% or more can indicate a bullish reversal in major cryptocurrencies. For instance, if DXY drops from 93.50 to 92.50, observe for a corresponding rally in Bitcoin.\n* **Timing Entries**: Utilize DXY trend changes as a timing tool. For example, if DXY shows a reversal pattern while Bitcoin is consolidating, this could signal an opportune moment to enter a long position on Bitcoin.\n",
    "context": {
      "keyTerms": [
        {
          "term": "DXY",
          "definition": "The U.S. Dollar Index, measuring the value of the dollar against a basket of currencies."
        },
        {
          "term": "Reversal",
          "definition": "A change in the direction of a market trend."
        }
      ],
      "whyThisMatters": "Recognizing DXY trends can significantly improve the timing of cryptocurrency trades, enhancing overall trade performance.",
      "realLifeExample": "On March 15, 2023, DXY fell from 94.00 to 92.00, coinciding with a 10% increase in Ethereum over the same period, indicating a potential market reversal.",
      "commonMistake": "Failing to adjust crypto positions based on DXY movements, leading to missed opportunities or increased losses.",
      "quickNote": "DXY trends can indicate potential reversals in the cryptocurrency market.",
      "mentorText": "When DXY starts to decline, it’s often a signal that risk appetite is returning. Watch for crypto to respond positively; this is your cue to act.",
      "mentorAnalogy": "Think of DXY as the weather forecast for crypto trading; just as a storm can change your plans, a DXY shift can signal a market reversal."
    },
    "taskData": null,
    "visualKey": "dxy-correlation-grid"
  },
  {
    "type": "concept",
    "title": "Integrating DXY Analysis into Advanced Crypto Strategies",
    "label": "Crypto Track",
    "body": "### Core Scenario: Advanced Crypto Strategies Using DXY\nIncorporating DXY analysis into cryptocurrency trading strategies can enhance decision-making and risk management. This card outlines advanced methodologies for leveraging DXY insights.\n\n* **Multi-Factor Strategy Development**: Combine DXY analysis with technical indicators like RSI and MACD to create a robust trading strategy. For example, if DXY is trending down and RSI indicates oversold conditions in Bitcoin, consider a long position.\n* **Correlation Matrix Utilization**: Use a correlation matrix to assess the relationship between DXY and various cryptocurrencies. A strong negative correlation with DXY can indicate higher volatility in altcoins during DXY fluctuations.\n* **Risk Management Adjustments**: Adjust position sizes based on DXY movements. If DXY shows signs of strengthening, reduce exposure in crypto positions to mitigate potential losses from adverse price movements.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Factor Strategy",
          "definition": "A trading strategy that integrates multiple indicators or factors to inform decision-making."
        },
        {
          "term": "Correlation Matrix",
          "definition": "A tool used to assess the relationship between different financial instruments."
        }
      ],
      "whyThisMatters": "Advanced strategies that incorporate DXY can lead to improved trade execution and risk management in volatile crypto markets.",
      "realLifeExample": "On April 10, 2023, DXY began to rise, and a trader using a multi-factor strategy adjusted their Bitcoin position size downwards, avoiding a 15% loss as Bitcoin declined.",
      "commonMistake": "Over-relying on DXY without integrating other indicators, leading to poorly informed trading decisions.",
      "quickNote": "Advanced strategies benefit from integrating DXY analysis with technical indicators.",
      "mentorText": "Always consider DXY alongside your technical indicators; it’s like having a co-pilot who helps navigate through turbulent market conditions.",
      "mentorAnalogy": "Integrating DXY analysis into your trading strategy is akin to a pilot using multiple instruments to ensure a safe flight path."
    },
    "taskData": null,
    "visualKey": "dxy-correlation-grid"
  },
  {
    "type": "practice",
    "title": "Applying DXY Analysis in Crypto Trading Scenarios",
    "label": "Crypto Track",
    "body": "### Core Scenario: Practical Application of DXY in Crypto Trading\nThis card engages traders in practical exercises that apply DXY analysis to real-world cryptocurrency trading scenarios. Understanding application solidifies theoretical knowledge.\n\n* **Scenario Analysis**: Analyze a hypothetical situation where DXY drops by 1.5% while Bitcoin is consolidating. Determine the optimal entry point for a long position based on DXY’s movement.\n* **Trade Simulation**: Simulate a trading day where DXY shows volatility during the U.S. session. Identify how this volatility impacts your crypto positions and adjust your strategy accordingly.\n* **Risk Assessment**: Evaluate a case where DXY rises unexpectedly. Discuss how to mitigate risks in your crypto portfolio and decide on exit strategies for existing positions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "A method of evaluating potential outcomes based on varying conditions."
        },
        {
          "term": "Trade Simulation",
          "definition": "A practice exercise that mimics real trading conditions."
        }
      ],
      "whyThisMatters": "Practical application reinforces theoretical concepts, ensuring traders can effectively utilize DXY analysis in real-time scenarios.",
      "realLifeExample": "In a simulated trading session, DXY dropped 1.5%, prompting a trader to enter a long position on Bitcoin, which subsequently gained 8% within the next 48 hours.",
      "commonMistake": "Neglecting to adjust trading strategies based on DXY movements during practical exercises.",
      "quickNote": "Engage in practical exercises to apply DXY analysis effectively.",
      "mentorText": "Practice makes perfect; simulate these scenarios to prepare for real market conditions and refine your strategy.",
      "mentorAnalogy": "Practicing DXY analysis in trading is like a surgeon rehearsing procedures before operating; it builds confidence and precision."
    },
    "taskData": {
      "type": "choice_block",
      "question": "If DXY drops by 1% while Bitcoin is consolidating, what should be your initial trading action?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position on Bitcoin.",
          "isCorrect": true,
          "feedback": "A 1% drop in DXY typically indicates a bullish sentiment, making it an opportune time to enter a long position."
        },
        {
          "id": "1",
          "text": "Exit all crypto positions immediately.",
          "isCorrect": false,
          "feedback": "Exiting positions without analyzing DXY trends can lead to missed opportunities."
        },
        {
          "id": "2",
          "text": "Increase exposure in altcoins only.",
          "isCorrect": false,
          "feedback": "While altcoins may benefit, the initial focus should be on Bitcoin due to its market dominance."
        },
        {
          "id": "3",
          "text": "Hold current positions without action.",
          "isCorrect": false,
          "feedback": "Inaction during a DXY drop can result in missed entry points for potential gains."
        }
      ]
    },
    "visualKey": "dxy-correlation-grid"
  },
  {
    "type": "summary",
    "title": "Recap of DXY's Impact on Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Scenario: Summary of DXY's Role in Crypto Trading\nDXY serves as a vital confirmation filter for cryptocurrency trading setups, influencing market dynamics and trader decisions. This summary encapsulates the key insights gained.\n\n* **DXY as a Leading Indicator**: Recognizing DXY movements can provide early signals of potential reversals in the cryptocurrency market, enhancing trade timing.\n* **Integration into Strategies**: Advanced strategies that incorporate DXY analysis improve risk management and decision-making, leading to more effective trading outcomes.\n* **Practical Application**: Engaging in practical exercises solidifies the understanding of DXY's role, preparing traders for real market scenarios.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Filter",
          "definition": "A tool or indicator used to validate trading signals."
        },
        {
          "term": "Market Dynamics",
          "definition": "The forces that impact the supply and demand of financial instruments."
        }
      ],
      "whyThisMatters": "Summarizing DXY's role reinforces its importance in trading strategies, ensuring traders can effectively utilize this analysis.",
      "realLifeExample": "Traders who effectively monitored DXY trends were able to capitalize on a 12% rise in Bitcoin following a DXY decline in early April 2023.",
      "commonMistake": "Overlooking the significance of DXY in trading setups, leading to uninformed decisions.",
      "quickNote": "DXY is a crucial confirmation filter for cryptocurrency trading setups.",
      "mentorText": "Always keep DXY in your trading toolkit; it’s not just a number, it’s a key to understanding market movements.",
      "mentorAnalogy": "Think of DXY as the compass for your trading journey; it guides you through the volatility of the crypto landscape."
    },
    "taskData": null,
    "visualKey": "dxy-correlation-grid"
  }
];
