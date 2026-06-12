import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Funding Cascades in Crypto",
    "label": "Crypto Track",
    "body": "### Funding Cascades: Mechanisms and Implications\nFunding cascades occur when a significant number of leveraged positions are liquidated, leading to a rapid decline in asset prices. This card outlines **how funding rates influence trader behavior and market dynamics**.\n\n* **Funding Rate Dynamics**: Funding rates are typically positive or negative based on market sentiment. A sudden shift to a high positive funding rate can indicate over-leveraging, triggering liquidations.\n* **Liquidation Triggers**: When the price of a cryptocurrency drops below key support levels, forced liquidations can amplify downward pressure, creating a cascade effect.\n* **Market Depth Analysis**: Assessing order book depth during high volatility periods can reveal potential liquidation zones, allowing traders to anticipate funding cascades effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Cascade",
          "definition": "A rapid decline in asset prices due to mass liquidations of leveraged positions."
        }
      ],
      "whyThisMatters": "Understanding funding cascades is crucial for managing risk and avoiding significant losses during volatile market conditions.",
      "realLifeExample": "In May 2021, Bitcoin experienced a funding cascade when prices fell from $58,000 to $30,000, leading to over $10 billion in liquidations across exchanges.",
      "commonMistake": "Traders often underestimate the impact of funding rates and fail to adjust their risk management strategies accordingly.",
      "quickNote": "Funding cascades can lead to rapid price declines due to forced liquidations.",
      "mentorText": "When funding rates spike, it’s a clear signal that traders are over-leveraged. Monitor these rates closely to avoid being caught in a cascade.",
      "mentorAnalogy": "Think of funding cascades like a dam breaking; once the pressure builds beyond a certain point, the entire structure can fail, leading to a flood of liquidations."
    },
    "taskData": null,
    "visualKey": "crypto-invalid-perp"
  },
  {
    "type": "concept",
    "title": "Identifying Perpetual Liquidation Breaks",
    "label": "Crypto Track",
    "body": "### Perpetual Liquidation Breaks: Recognition and Risk\nPerpetual liquidation breaks occur when a significant price movement triggers the liquidation of leveraged positions in perpetual contracts. This card teaches **how to identify these breaks and their implications for risk exposure**.\n\n* **Key Price Levels**: Identify critical support and resistance levels where liquidations are likely to occur. A breach of these levels often precedes a liquidation break.\n* **Volume Analysis**: Monitor trading volume spikes accompanying price movements. High volume during a price drop can indicate a liquidation break, as it reflects forced selling.\n* **Order Book Monitoring**: Analyze the order book for large sell orders that may trigger liquidations. A sudden influx of sell orders can indicate an impending liquidation break.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Break",
          "definition": "A price movement that triggers the forced closure of leveraged positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Identifying liquidation breaks allows traders to adjust their positions proactively and manage risk effectively.",
      "realLifeExample": "On June 26, 2021, Ethereum saw a liquidation break when it fell below $1,700, triggering liquidations of over $1 billion in leveraged positions.",
      "commonMistake": "Traders often fail to recognize the signs of impending liquidation breaks, leading to unexpected losses.",
      "quickNote": "Recognizing key price levels and volume spikes can help identify potential liquidation breaks.",
      "mentorText": "Always be on the lookout for price levels that, if breached, could lead to a cascade of liquidations. It’s about staying ahead of the curve.",
      "mentorAnalogy": "Identifying liquidation breaks is like a firefighter spotting smoke; if you see it early, you can prevent a full-blown fire."
    },
    "taskData": null,
    "visualKey": "crypto-invalid-perp"
  },
  {
    "type": "concept",
    "title": "Impact of Market Volatility on Funding Cascades",
    "label": "Crypto Track",
    "body": "### Market Volatility: Catalyst for Funding Cascades\nMarket volatility can significantly influence the occurrence and severity of funding cascades. This card explains **the relationship between volatility and funding cascades in crypto trading**.\n\n* **Volatility Indicators**: Use indicators such as the Average True Range (ATR) to measure market volatility. High ATR readings suggest increased risk of funding cascades due to rapid price swings.\n* **Correlation with Liquidations**: Historical data shows that periods of high volatility often correlate with increased liquidation events, as traders react to price movements.\n* **Risk Assessment**: Adjust risk management strategies during high volatility periods by reducing leverage or increasing stop-loss distances to mitigate potential losses from funding cascades.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Volatility",
          "definition": "The degree of variation in trading prices over time, often measured by indicators like ATR."
        }
      ],
      "whyThisMatters": "Understanding how volatility impacts funding cascades allows traders to adjust their strategies and protect their capital.",
      "realLifeExample": "During the market crash of March 2020, Bitcoin's volatility spiked, leading to a funding cascade that liquidated over $1 billion in positions within hours.",
      "commonMistake": "Traders often ignore volatility indicators, leading to inadequate risk management during turbulent market conditions.",
      "quickNote": "High market volatility increases the likelihood of funding cascades and necessitates proactive risk management.",
      "mentorText": "When volatility spikes, tighten your risk parameters. It’s not just about the trade; it’s about surviving the storm.",
      "mentorAnalogy": "Think of market volatility like turbulence during a flight; if you don’t adjust your approach, you risk losing control."
    },
    "taskData": null,
    "visualKey": "crypto-invalid-perp"
  },
  {
    "type": "concept",
    "title": "Risk Management Strategies for Funding Cascades",
    "label": "Crypto Track",
    "body": "### Risk Management: Strategies During Funding Cascades\nEffective risk management is essential during funding cascades to protect capital and minimize losses. This card focuses on **strategies that can be employed to manage risk effectively**.\n\n* **Dynamic Position Sizing**: Adjust position sizes based on market conditions and volatility. Smaller positions during high-risk periods can help mitigate potential losses.\n* **Stop-Loss Orders**: Implement tighter stop-loss orders during periods of heightened risk. This can prevent significant losses from cascading liquidations.\n* **Diversification**: Spread exposure across multiple assets to reduce the impact of a single funding cascade on the overall portfolio. Diversification can buffer against systemic risks in the crypto market.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "Strategies employed to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Implementing robust risk management strategies during funding cascades is vital for preserving capital and ensuring long-term trading success.",
      "realLifeExample": "In a volatile market, a trader who reduced their position size and set tighter stop-loss orders during the May 2021 crash was able to avoid significant losses compared to those who did not.",
      "commonMistake": "Traders often maintain static position sizes and stop-loss levels, failing to adapt to changing market conditions.",
      "quickNote": "Dynamic risk management strategies are essential during funding cascades to protect capital.",
      "mentorText": "Always be ready to adapt your risk management strategies. In a funding cascade, flexibility can save your account.",
      "mentorAnalogy": "Managing risk during funding cascades is like a ship captain adjusting sails in a storm; the right adjustments can keep you afloat."
    },
    "taskData": null,
    "visualKey": "crypto-invalid-perp"
  },
  {
    "type": "concept",
    "title": "Case Studies on Funding Cascades",
    "label": "Crypto Track",
    "body": "### Funding Cascades: Analyzing Market Reactions\nFunding cascades can significantly impact market dynamics, particularly during high-volatility events. This card examines **real-world case studies that highlight the effects of funding cascades on trading outcomes**.\n\n* **Case Study 1 - BTC Flash Crash**: In March 2020, Bitcoin experienced a rapid decline from $8,000 to $3,800 within hours, triggering a funding cascade that liquidated over $1 billion in long positions. Analyze how this event influenced subsequent market behavior and trader sentiment.\n* **Case Study 2 - ETH Recovery Post-Liquidation**: Following a liquidation event in January 2021, Ethereum prices dropped to $1,200 before rebounding to $1,800. Investigate the role of funding rates and market sentiment in this recovery phase.\n* **Case Study 3 - Altcoin Volatility**: During the May 2021 market crash, several altcoins faced extreme funding cascades, leading to losses exceeding 50%. Examine the liquidity implications and how traders adjusted their strategies in response to these rapid changes.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Cascade",
          "definition": "A rapid series of liquidations triggered by price movements that lead to further market declines."
        }
      ],
      "whyThisMatters": "Understanding funding cascades allows traders to anticipate market reactions and adjust their strategies accordingly, minimizing risk exposure.",
      "realLifeExample": "During the March 2020 crash, BTC's drop to $3,800 led to massive liquidations, illustrating the cascading effect on market liquidity and trader positions.",
      "commonMistake": "Traders often underestimate the speed and magnitude of funding cascades, leading to inadequate risk management during volatile periods.",
      "quickNote": "Funding cascades can rapidly alter market conditions, requiring immediate strategic adjustments.",
      "mentorText": "When funding cascades occur, it's crucial to assess the broader market context. Look at historical reactions to similar events to inform your decisions.",
      "mentorAnalogy": "Think of funding cascades like a chain reaction in a chemical process; one small change can lead to an explosive outcome, necessitating careful monitoring and response."
    },
    "taskData": null,
    "visualKey": "crypto-invalid-perp"
  },
  {
    "type": "concept",
    "title": "Adapting Trading Strategies to Liquidation Breaks",
    "label": "Crypto Track",
    "body": "### Liquidation Breaks: Strategy Adaptation\nLiquidation breaks can disrupt established trading strategies, necessitating a flexible approach. This card focuses on **how to adapt your trading strategies in response to perpetual liquidation breaks**.\n\n* **Identifying Liquidation Zones**: Use on-chain data to identify key liquidation levels where significant positions are at risk. This helps in anticipating potential price movements and adjusting your entry or exit points.\n* **Dynamic Position Sizing**: Implement a dynamic position sizing strategy that adjusts based on market volatility and liquidation risks. For instance, reduce position sizes by 50% when approaching known liquidation zones to mitigate risk.\n* **Utilizing Stop-Loss Orders**: Set stop-loss orders strategically around liquidation levels to protect against sudden price drops. For example, if BTC is trading at $40,000 with liquidation levels at $39,500, place a stop-loss slightly above $39,500 to avoid unnecessary losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Break",
          "definition": "A significant price movement that triggers the liquidation of leveraged positions."
        }
      ],
      "whyThisMatters": "Adapting strategies to liquidation breaks ensures that traders can navigate volatile markets effectively, preserving capital and maximizing opportunities.",
      "realLifeExample": "During a recent downturn, BTC's liquidation break at $42,000 led to a rapid price drop to $38,000. Traders who adjusted their strategies mitigated losses by reducing positions ahead of the break.",
      "commonMistake": "Failing to adjust position sizes during liquidation breaks often results in excessive losses, as traders maintain original risk levels despite changing market conditions.",
      "quickNote": "Flexibility in trading strategies is essential when navigating liquidation breaks.",
      "mentorText": "When faced with a liquidation break, recalibrate your strategy. Analyze the market structure and adjust your risk parameters to avoid significant drawdowns.",
      "mentorAnalogy": "Adapting to liquidation breaks is like a pilot adjusting altitude during turbulence; it requires quick thinking and a willingness to change course to ensure safety."
    },
    "taskData": null,
    "visualKey": "crypto-invalid-perp"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Funding Management",
    "label": "Crypto Track",
    "body": "### Funding Management Exercises\nEngaging in practical exercises reinforces your understanding of funding cascades and liquidation breaks. This card provides scenarios to test your skills in managing funding risks.\n\n* **Scenario 1**: BTC is trading at $35,000 with a funding rate of 0.1%. A sudden news event causes a spike in volatility. What adjustments should you make to your position size and stop-loss placement?\n* **Scenario 2**: ETH experiences a funding cascade, dropping from $2,500 to $1,800. Identify the key indicators that would signal a potential recovery and how you would position yourself for the rebound.\n* **Scenario 3**: During a liquidation break, you notice that the funding rate has shifted to -0.05%. What does this indicate about market sentiment, and how should you adapt your trading strategy accordingly?",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Management",
          "definition": "The process of adjusting trading strategies based on funding rates and market conditions."
        }
      ],
      "whyThisMatters": "Practical exercises enhance your ability to respond effectively to funding cascades and liquidation breaks, improving overall trading performance.",
      "realLifeExample": "In a recent exercise, traders analyzed BTC's funding rate shift during a volatile period, leading to strategic adjustments that minimized losses.",
      "commonMistake": "Traders often overlook the importance of funding rates in their decision-making process, leading to poorly timed entries and exits.",
      "quickNote": "Active engagement in funding management exercises sharpens your risk assessment skills.",
      "mentorText": "Practice makes perfect. Use these scenarios to refine your approach to funding management and ensure you're prepared for real market conditions.",
      "mentorAnalogy": "Think of funding management like a surgeon rehearsing procedures; the more you practice, the more adept you become at handling unexpected complications."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are trading BTC at $35,000 with a funding rate of 0.1%. A significant news event causes volatility. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Increase your position size to capitalize on volatility.",
          "isCorrect": false,
          "feedback": "Increasing position size during volatility can expose you to greater risk."
        },
        {
          "id": "1",
          "text": "Maintain your current position size and stop-loss.",
          "isCorrect": false,
          "feedback": "Maintaining position size without adjustments can lead to unnecessary losses."
        },
        {
          "id": "2",
          "text": "Reduce your position size and adjust your stop-loss closer to the market price.",
          "isCorrect": true,
          "feedback": "Reducing position size and adjusting stop-loss helps manage risk during volatile conditions."
        },
        {
          "id": "3",
          "text": "Exit all positions immediately.",
          "isCorrect": false,
          "feedback": "Exiting all positions may not be necessary; strategic adjustments are often more effective."
        }
      ]
    },
    "visualKey": "crypto-invalid-perp"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Concepts",
    "label": "Crypto Track",
    "body": "### Key Concepts in Crypto Trading\nThis card summarizes the essential concepts covered in the Crypto track, emphasizing the importance of managing risk during funding cascades and liquidation breaks.\n\n* **Risk Management Strategies**: Effective risk management is crucial during funding cascades, requiring traders to adapt their strategies based on market conditions and funding rates.\n* **Understanding Liquidation Dynamics**: Recognizing the signs of liquidation breaks enables traders to make informed decisions, minimizing losses and maximizing recovery potential.\n* **Practical Application**: Engaging in practical exercises enhances traders' ability to respond to real-world scenarios, reinforcing the importance of adaptability in trading strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and prioritizing risks in trading."
        }
      ],
      "whyThisMatters": "Summarizing key concepts ensures traders retain critical information necessary for effective decision-making in volatile markets.",
      "realLifeExample": "Traders who applied risk management strategies during the May 2021 crash were able to navigate the market more effectively than those who did not.",
      "commonMistake": "Failing to consolidate and review key concepts can lead to gaps in knowledge and poor trading decisions.",
      "quickNote": "Effective risk management and adaptability are essential for success in crypto trading.",
      "mentorText": "Review these concepts regularly. They form the foundation of your trading strategy and will guide you through volatile market conditions.",
      "mentorAnalogy": "Consider this summary like a pilot's checklist before takeoff; it ensures that all critical components are in place for a successful flight."
    },
    "taskData": null,
    "visualKey": "crypto-invalid-perp"
  }
];
