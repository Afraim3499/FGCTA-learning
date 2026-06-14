import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Risk Management Around Liquidation Zones",
    "label": "Crypto Track",
    "body": "### Risk Management: Liquidation Zone Strategies\nEffective risk management is critical when trading near liquidation zones in cryptocurrency markets. This card emphasizes **strategies for positioning and stop-loss placement** relative to identified liquidity clusters.\n\n* **Stop-Loss Placement**: Position stop-loss orders at least 2% beyond mapped liquidation zones to avoid premature triggering from market noise. For example, if a liquidation zone is identified at $30,000 for Bitcoin, set your stop-loss below $29,400.\n* **Position Sizing**: Calculate position sizes based on the distance to the nearest liquidation zone. If the zone is 5% away from your entry point, consider limiting your position to 1% of your total capital to mitigate risk exposure.\n* **Dynamic Adjustments**: Continuously monitor market conditions and adjust stop-loss levels as price approaches liquidation zones. If Bitcoin rallies to $30,500, consider moving your stop-loss to $29,800 to lock in profits while maintaining a safe distance from the liquidation cluster.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Zone",
          "definition": "A price level where a significant number of leveraged positions are forced to close, creating liquidity."
        }
      ],
      "whyThisMatters": "Understanding risk management around liquidation zones helps traders avoid significant losses during volatile market movements.",
      "realLifeExample": "During the Bitcoin flash crash on May 19, 2021, many traders had stop-loss orders triggered at $30,000, leading to cascading liquidations. Proper placement would have mitigated losses.",
      "commonMistake": "Traders often place stop-loss orders too close to liquidation zones, resulting in unnecessary losses from market volatility.",
      "quickNote": "Always position stop-loss orders beyond mapped liquidation zones to protect capital.",
      "mentorText": "When trading near liquidation zones, think of your stop-loss as a safety net. If the market dips, you want that net to catch you before you hit the ground hard.",
      "mentorAnalogy": "Consider a surgeon preparing for a delicate operation; they ensure all instruments are precisely placed to avoid complications. Similarly, your stop-loss should be strategically positioned to minimize risk."
    },
    "taskData": null,
    "visualKey": "crypto-liquidation-heatmap-zones"
  },
  {
    "type": "concept",
    "title": "Practical Application of Crypto Liquidity Mapping",
    "label": "Crypto Track",
    "body": "### Application: Identifying Liquidation Clusters\nEngaging in practical exercises enhances the understanding of liquidity mapping in cryptocurrency trading. This card focuses on **real-world scenarios for identifying liquidation clusters**.\n\n* **Scenario Analysis**: Analyze historical price movements of Ethereum during high volatility periods, such as the DeFi summer of 2020, to identify where liquidation clusters formed. Look for sharp price reversals around key support levels.\n* **Heatmap Utilization**: Use liquidity heatmaps to visualize where resting orders accumulate. For instance, if a heatmap shows a significant cluster at $2,000 for Ethereum, consider this zone for potential price reactions.\n* **Trade Simulation**: Create simulated trades based on identified liquidation zones. For example, if Bitcoin approaches a mapped cluster at $35,000, simulate entering a long position with a stop-loss at $34,500 to test the effectiveness of your strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Mapping",
          "definition": "The process of identifying areas where buy-side and sell-side orders accumulate in the market."
        }
      ],
      "whyThisMatters": "Applying liquidity mapping concepts in practical scenarios enables traders to make informed decisions based on market dynamics.",
      "realLifeExample": "In August 2021, Bitcoin experienced a rebound from a mapped liquidation cluster at $42,000, providing a clear buying opportunity for traders who identified the zone.",
      "commonMistake": "Failing to validate mapped clusters with real-time market conditions can lead to poor trading decisions.",
      "quickNote": "Practice identifying liquidation clusters through historical analysis and simulated trades.",
      "mentorText": "Think of liquidity mapping as your roadmap. If you can pinpoint where the traffic jams are, you can navigate the market more effectively.",
      "mentorAnalogy": "Like a city planner analyzing traffic patterns, you must study past price movements to identify where traders are likely to enter or exit positions."
    },
    "taskData": null,
    "visualKey": "crypto-liquidation-heatmap-zones"
  },
  {
    "type": "practice",
    "title": "Summary of Crypto Liquidity Mapping Concepts",
    "label": "Crypto Track",
    "body": "### Summary: Key Concepts in Liquidity Mapping\nThis card summarizes the essential concepts covered in liquidity mapping for cryptocurrency trading. Understanding these principles is vital for developing effective trading strategies.\n\n* **Liquidity Clusters**: Recognize that liquidation zones represent areas of high buy-side or sell-side liquidity, often leading to significant price movements. For example, a cluster at $25,000 for Bitcoin may attract buyers during a dip.\n* **Risk Management**: Emphasize the importance of stop-loss placement and position sizing relative to mapped clusters to protect capital during volatile market conditions.\n* **Practical Application**: Engage in continuous practice by analyzing historical data and simulating trades based on identified liquidity zones to reinforce learning.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "Strategies employed to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Reinforcing key concepts ensures traders can effectively apply liquidity mapping in their trading strategies.",
      "realLifeExample": "Traders who recognized the liquidity cluster at $30,000 for Bitcoin during market corrections were able to capitalize on the subsequent price recovery.",
      "commonMistake": "Overlooking the significance of liquidity clusters can lead to missed trading opportunities or increased losses.",
      "quickNote": "Master the key concepts of liquidity mapping to enhance your trading strategy.",
      "mentorText": "Reviewing these concepts is like revisiting your playbook before a game. The more familiar you are with your strategies, the better you perform under pressure.",
      "mentorAnalogy": "Just as an architect revisits blueprints before construction, you must solidify your understanding of liquidity mapping to build a robust trading strategy."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Which of the following best describes the importance of liquidity clusters in trading?",
      "options": [
        {
          "id": "0",
          "text": "They indicate where price will definitely reverse.",
          "isCorrect": false,
          "feedback": "This is incorrect because liquidity clusters do not guarantee price reversals; they indicate potential areas of interest."
        },
        {
          "id": "1",
          "text": "They help traders identify areas of potential price movement based on resting orders.",
          "isCorrect": true,
          "feedback": "Correct. Liquidity clusters indicate where significant buy or sell orders are placed, which can lead to price movements."
        },
        {
          "id": "2",
          "text": "They are irrelevant to risk management strategies.",
          "isCorrect": false,
          "feedback": "This is incorrect. Liquidity clusters are essential for effective risk management as they inform stop-loss placement."
        },
        {
          "id": "3",
          "text": "They only apply to traditional markets, not cryptocurrencies.",
          "isCorrect": false,
          "feedback": "This is incorrect. Liquidity clusters are relevant in both traditional and cryptocurrency markets."
        }
      ]
    },
    "visualKey": "crypto-liquidation-heatmap-zones"
  },
  {
    "type": "summary",
    "title": "Crypto Advanced Application 8",
    "label": "Crypto Track",
    "body": "### Advanced Application: Boundary Areas in Crypto Trading\nThis card delves into advanced applications of Boundary Areas (BSL/SSL) concepts specific to cryptocurrency trading. Understanding these nuances is essential for professional-level execution.\n\n* **Edge Case Scenarios**: Analyze how extreme volatility events, such as the March 2020 crash, affect liquidity clusters. During this period, many clusters were invalidated, leading to unexpected price movements.\n* **Algorithmic Trading Considerations**: Recognize how algorithmic trading impacts liquidity zones. Algorithms may trigger rapid buying or selling around identified clusters, creating opportunities or risks for manual traders.\n* **Market Sentiment Analysis**: Incorporate market sentiment indicators alongside liquidity mapping. For instance, if a liquidity cluster is identified at $40,000 for Bitcoin, but sentiment is overwhelmingly bearish, reconsider the trade setup.",
    "context": {
      "keyTerms": [
        {
          "term": "Boundary Areas (BSL/SSL)",
          "definition": "Price levels where significant buy-side and sell-side liquidity is concentrated."
        }
      ],
      "whyThisMatters": "Advanced understanding of boundary areas allows traders to navigate complex market conditions and enhance their trading strategies.",
      "realLifeExample": "During the Ethereum market surge in late 2021, traders who understood the implications of boundary areas were able to capitalize on rapid price movements around key liquidity zones.",
      "commonMistake": "Failing to adapt strategies to changing market conditions can lead to significant losses, especially during extreme volatility.",
      "quickNote": "Master advanced applications of boundary areas to refine your trading strategy.",
      "mentorText": "In advanced trading, you must adapt to the market's rhythm. Think of boundary areas as the heartbeat of price action; if you can read it, you can anticipate movements.",
      "mentorAnalogy": "Like a seasoned pilot adjusting flight paths based on weather conditions, you must navigate the complexities of market dynamics with precision."
    },
    "taskData": null,
    "visualKey": "crypto-liquidation-heatmap-zones"
  }
];
