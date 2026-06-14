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
  }
];
