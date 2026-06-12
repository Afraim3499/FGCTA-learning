import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Mapping Perpetual Contract Liquidation Heatmaps",
    "label": "Crypto Track",
    "body": "### Liquidation Heatmaps: Perpetual Contract Dynamics\nLiquidation heatmaps visualize areas of significant liquidations in perpetual contracts, providing insights into potential price movements. This card focuses on **how to map these heatmaps effectively**.\n\n* **Data Sources**: Utilize on-chain data and exchange APIs to gather liquidation data, focusing on key exchanges like Binance and Bitfinex.\n* **Heatmap Construction**: Plot liquidation points on a price chart using a color gradient to indicate density; hotter colors represent higher concentrations of liquidations.\n* **Price Influence**: Recognize that price often reacts to these clusters, with potential reversals or accelerations occurring as price approaches these heatmap zones.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Heatmap",
          "definition": "A visual representation of areas where significant liquidations occur in perpetual contracts."
        }
      ],
      "whyThisMatters": "Understanding liquidation heatmaps allows traders to anticipate price movements and adjust strategies accordingly.",
      "realLifeExample": "On October 15, 2023, Bitcoin's price approached a liquidation heatmap zone at $28,500, triggering a rapid sell-off as over $50 million in long positions were liquidated.",
      "commonMistake": "Traders often overlook the significance of heatmap zones, leading to missed opportunities or unexpected losses.",
      "quickNote": "Liquidation heatmaps reveal critical price zones where significant market reactions may occur.",
      "mentorText": "When you map these heatmaps, you're effectively pinpointing where the market is most vulnerable. Pay attention to these zones—they can dictate your next move.",
      "mentorAnalogy": "Think of liquidation heatmaps like a surgeon identifying critical areas in a patient's anatomy; precision in locating these zones can determine the success of your trading strategy."
    },
    "taskData": null,
    "visualKey": "crypto-liquidation-heatmap-zones"
  },
  {
    "type": "concept",
    "title": "Identifying Liquidation Clusters on Order Books",
    "label": "Crypto Track",
    "body": "### Order Book Analysis: Liquidation Clusters\nLiquidation clusters on order books serve as critical indicators of price magnetism. This card teaches **how to identify these clusters effectively**.\n\n* **Order Book Depth**: Analyze the order book depth to spot large resting orders that indicate potential liquidation points; focus on both buy and sell sides.\n* **Cluster Size**: Identify clusters with significant order sizes—typically, clusters with over 100 BTC in resting orders can act as strong support or resistance.\n* **Market Impact**: Recognize that when price approaches these clusters, it often leads to rapid movements as traders react to the potential for liquidations.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Cluster",
          "definition": "A concentration of resting orders on an order book that can influence price movements."
        }
      ],
      "whyThisMatters": "Identifying these clusters allows traders to predict price behavior and adjust their strategies accordingly.",
      "realLifeExample": "On November 1, 2023, Ethereum showed a liquidation cluster at $1,800 with 200 ETH orders, leading to a bounce back after hitting the level.",
      "commonMistake": "Failing to account for the size and placement of liquidation clusters can lead to misjudging market entry and exit points.",
      "quickNote": "Liquidation clusters act as price magnets, influencing market behavior significantly.",
      "mentorText": "When you look at the order book, think of it as a battlefield. The larger the cluster, the more likely it is to draw attention and trigger a reaction.",
      "mentorAnalogy": "Identifying liquidation clusters is like a pilot assessing the runway conditions before landing; understanding the environment is crucial for a safe approach."
    },
    "taskData": null,
    "visualKey": "crypto-liquidation-heatmap-zones"
  },
  {
    "type": "concept",
    "title": "Market Reactions at Liquidation Zones",
    "label": "Crypto Track",
    "body": "### Price Dynamics: Reactions at Liquidation Zones\nMarket reactions at liquidation zones can lead to significant price volatility. This card discusses **how to interpret these reactions effectively**.\n\n* **Volume Spikes**: Monitor volume spikes as price approaches liquidation zones; increased volume often indicates heightened market activity and potential reversals.\n* **Price Action Patterns**: Analyze candlestick patterns near these zones; patterns such as pin bars or engulfing candles can signal strong reactions to liquidation levels.\n* **Order Flow Analysis**: Utilize order flow analysis to gauge market sentiment; a shift from aggressive buying to selling can indicate a potential reversal at these critical zones.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Zone",
          "definition": "A price level where significant liquidations are expected to occur, influencing market behavior."
        }
      ],
      "whyThisMatters": "Understanding market reactions at these zones helps traders make informed decisions about entry and exit points.",
      "realLifeExample": "On December 5, 2023, Bitcoin approached a liquidation zone at $30,000, resulting in a 10% drop as volume surged, indicating aggressive selling.",
      "commonMistake": "Traders often misinterpret price movements at liquidation zones, leading to premature entries or exits.",
      "quickNote": "Market reactions at liquidation zones can signal potential reversals or continuations in price trends.",
      "mentorText": "When price nears these zones, watch for the signs. A sudden shift in volume can tell you everything you need to know about the market's intent.",
      "mentorAnalogy": "Navigating market reactions at liquidation zones is like a firefighter assessing smoke patterns; understanding the signs can dictate the next course of action."
    },
    "taskData": null,
    "visualKey": "crypto-liquidation-heatmap-zones"
  },
  {
    "type": "concept",
    "title": "Recognizing Liquidation Traps",
    "label": "Crypto Track",
    "body": "### Identifying Liquidation Traps: Market Misleading Signals\nLiquidation traps can mislead traders into false breakouts. This card teaches **how to recognize these traps within liquidation clusters**.\n\n* **False Breakouts**: Watch for price movements that breach liquidation zones without sustained volume; these often indicate a trap rather than a genuine breakout.\n* **Order Book Reactions**: Analyze order book changes post-breakout; if large sell orders appear immediately after a breakout, it may signal a liquidation trap.\n* **Confirmation Signals**: Use confirmation signals such as RSI divergence or MACD crossovers to validate whether a breakout is genuine or a trap.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Trap",
          "definition": "A scenario where price movements mislead traders into false breakouts, often leading to losses."
        }
      ],
      "whyThisMatters": "Recognizing liquidation traps helps traders avoid costly mistakes and refine their entry strategies.",
      "realLifeExample": "On January 10, 2024, Litecoin spiked above $100, triggering a wave of buying, only to drop back below as a liquidation trap was confirmed by increased sell orders.",
      "commonMistake": "Traders often enter positions too quickly after a breakout, failing to confirm the validity of the move.",
      "quickNote": "Liquidation traps can lead to significant losses; always confirm breakouts before entering positions.",
      "mentorText": "Don't let the initial breakout fool you. Always confirm with volume and order flow—it's the difference between a win and a loss.",
      "mentorAnalogy": "Recognizing liquidation traps is like a detective piecing together clues; missing a detail can lead to false conclusions and costly errors."
    },
    "taskData": null,
    "visualKey": "crypto-liquidation-heatmap-zones"
  },
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
