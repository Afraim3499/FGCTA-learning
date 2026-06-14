import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Boundary Areas in BSL/SSL",
    "label": "Core Track",
    "body": "### Boundary Areas: Significance in BSL/SSL\nBoundary areas represent critical zones where buy-side and sell-side liquidity clusters form. Recognizing these areas is essential for mapping where resting orders are likely to accumulate.\n\n* **Liquidity Accumulation Zones**: Identify boundary areas by analyzing historical price action around key support and resistance levels, where liquidity tends to cluster due to trader behavior.\n* **Market Reaction Points**: Observe how price interacts with these boundary areas; significant reversals often occur at these levels, indicating resting orders.\n* **Order Flow Dynamics**: Use volume analysis to gauge the strength of boundary areas, as higher volume at these points often correlates with increased liquidity and potential market reactions.",
    "context": {
      "keyTerms": [
        {
          "term": "Boundary Areas",
          "definition": "Zones where buy-side and sell-side liquidity clusters are likely to accumulate."
        }
      ],
      "whyThisMatters": "Understanding boundary areas allows traders to strategically position their orders around significant liquidity zones, enhancing execution efficiency.",
      "realLifeExample": "During the EURUSD session at 1.1000, price consolidated for several hours before a breakout, indicating a boundary area with significant resting orders.",
      "commonMistake": "Traders often overlook the importance of boundary areas, leading to premature entries without considering liquidity dynamics.",
      "quickNote": "Boundary areas are critical for identifying where liquidity accumulates.",
      "mentorText": "Think of boundary areas as the thresholds where traders congregate. Recognizing these zones helps you anticipate market movements based on where orders are likely resting.",
      "mentorAnalogy": "Like an architect identifying load-bearing walls in a building, pinpointing boundary areas ensures your trading structure is built on solid foundations."
    },
    "taskData": null,
    "visualKey": "boundary-areas-intro"
  },
  {
    "type": "concept",
    "title": "Mapping Buy-Side Liquidity Clusters",
    "label": "Core Track",
    "body": "### Buy-Side Liquidity: Mapping Techniques\nMapping buy-side liquidity clusters involves identifying swing points where resting buy orders are concentrated. This understanding is vital for anticipating potential price movements.\n\n* **Swing Point Analysis**: Focus on recent swing lows where buy orders are likely to accumulate, as these areas often attract market participants looking for value.\n* **Volume Profile Utilization**: Analyze volume profiles to identify price levels with high trading volume, indicating strong buy-side interest and potential liquidity clusters.\n* **Order Book Insights**: Use order book data to visualize resting buy orders at specific price levels, enhancing your understanding of where liquidity is positioned.",
    "context": {
      "keyTerms": [
        {
          "term": "Buy-Side Liquidity",
          "definition": "Concentration of resting buy orders at specific price levels."
        }
      ],
      "whyThisMatters": "Effective mapping of buy-side liquidity allows traders to position their entries strategically, increasing the likelihood of successful trades.",
      "realLifeExample": "In the GBPUSD market, a swing low at 1.3000 saw significant buy orders, leading to a price bounce of 50 pips within minutes.",
      "commonMistake": "Failing to consider the impact of nearby resistance levels can lead to false assumptions about buy-side liquidity strength.",
      "quickNote": "Identify swing points to map buy-side liquidity effectively.",
      "mentorText": "When mapping buy-side liquidity, look for the price levels where traders are most likely to step in. These are your strategic entry points.",
      "mentorAnalogy": "Like a geologist mapping mineral deposits, identifying buy-side liquidity clusters helps you uncover valuable trading opportunities."
    },
    "taskData": null,
    "visualKey": "bsl-mapping"
  },
  {
    "type": "concept",
    "title": "Mapping Sell-Side Liquidity Clusters",
    "label": "Core Track",
    "body": "### Sell-Side Liquidity: Identifying Concentration Points\nMapping sell-side liquidity clusters requires recognizing key swing points where resting sell orders are prevalent. This knowledge is crucial for understanding potential market pressure.\n\n* **Swing High Analysis**: Identify recent swing highs where sell orders are likely to accumulate, as these levels often attract sellers looking to capitalize on price reversals.\n* **Volume Profile Assessment**: Examine volume profiles to pinpoint price levels with significant sell-side activity, indicating strong resistance and potential liquidity clusters.\n* **Order Book Examination**: Utilize order book data to visualize resting sell orders, providing insight into where market participants are positioned to sell.",
    "context": {
      "keyTerms": [
        {
          "term": "Sell-Side Liquidity",
          "definition": "Concentration of resting sell orders at specific price levels."
        }
      ],
      "whyThisMatters": "Mapping sell-side liquidity enables traders to anticipate market pressure and adjust their strategies accordingly.",
      "realLifeExample": "During the AUDUSD session, a swing high at 0.7500 showed a cluster of sell orders, resulting in a 30 pip drop within 10 minutes as sellers entered the market.",
      "commonMistake": "Ignoring the significance of sell-side liquidity can lead to unexpected losses when market reversals occur.",
      "quickNote": "Recognize swing highs to effectively map sell-side liquidity.",
      "mentorText": "When you map sell-side liquidity, focus on the levels where sellers are likely to emerge. These are critical points for understanding market dynamics.",
      "mentorAnalogy": "Like a traffic engineer identifying congestion points, mapping sell-side liquidity helps you navigate potential market obstacles."
    },
    "taskData": null,
    "visualKey": "ssl-mapping"
  },
  {
    "type": "concept",
    "title": "Identifying Resting Order Clusters",
    "label": "Core Track",
    "body": "### Resting Order Clusters: Anticipating Market Reactions\nIdentifying resting order clusters involves recognizing where stop-loss orders and buy/sell stops are positioned above and below key swing points. This understanding is essential for predicting market reactions.\n\n* **Stop-Loss Placement Analysis**: Examine historical price action to identify common stop-loss placement areas, which often coincide with key swing points and liquidity clusters.\n* **Cluster Visualization**: Use charting tools to visualize potential resting order clusters, enhancing your ability to anticipate price movements based on order density.\n* **Market Reaction Patterns**: Analyze how price reacts when approaching these clusters, as significant movements often occur when orders are triggered.",
    "context": {
      "keyTerms": [
        {
          "term": "Resting Order Clusters",
          "definition": "Concentrations of stop-loss and buy/sell stop orders at specific price levels."
        }
      ],
      "whyThisMatters": "Identifying resting order clusters allows traders to anticipate price movements and adjust their strategies to capitalize on market volatility.",
      "realLifeExample": "In the USDJPY market, a cluster of stop-loss orders was identified just below 110.00, leading to a rapid price spike of 40 pips when those orders were triggered.",
      "commonMistake": "Traders often misjudge the strength of resting order clusters, leading to premature entries or exits.",
      "quickNote": "Identify resting order clusters to anticipate market reactions effectively.",
      "mentorText": "When identifying resting order clusters, think about where traders are likely to place their stop-loss orders. These areas can create significant price movements.",
      "mentorAnalogy": "Like a surgeon anticipating where blood vessels are located before making an incision, identifying resting order clusters helps you navigate potential market volatility."
    },
    "taskData": null,
    "visualKey": "resting-liquidity-pools"
  },
  {
    "type": "concept",
    "title": "Analyzing Key Swings for Liquidity",
    "label": "Core Track",
    "body": "### Boundary Areas: Analyzing Key Swings for Liquidity\nKey swing points in price action serve as critical indicators for identifying potential liquidity zones. This card details **how to evaluate price movements around these swings to predict resting order placements**.\n\n* **Swing Highs and Lows**: Identify significant swing highs and lows on the chart, as these points often correlate with areas where liquidity accumulates. Use Fibonacci retracement levels to gauge potential reversal zones near these swings.\n* **Volume Analysis**: Monitor volume spikes at swing points, as increased trading activity often signals the presence of resting orders. A volume increase at a swing high may indicate sell-side liquidity, while at a swing low, it may suggest buy-side liquidity.\n* **Timeframe Considerations**: Analyze swings across multiple timeframes to confirm liquidity zones. A swing high on a daily chart may align with a swing low on a 1-hour chart, indicating a stronger liquidity cluster.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Swing High",
          "definition": "A peak point in price action indicating potential resistance."
        },
        {
          "term": "Swing Low",
          "definition": "A trough point in price action indicating potential support."
        }
      ],
      "whyThisMatters": "Understanding key swings allows traders to pinpoint where liquidity is likely to reside, enhancing execution strategies.",
      "realLifeExample": "On the EURUSD, a swing high at 1.1200 coincided with a 50% Fibonacci retracement level, leading to a 30-pip rejection as sell orders were triggered.",
      "commonMistake": "Failing to consider the context of volume around swing points can lead to misidentifying liquidity zones.",
      "quickNote": "Key swings provide critical insights into potential liquidity clusters.",
      "mentorText": "When analyzing swings, always look for volume confirmation. If a swing high is met with high volume, expect sell orders to be lurking nearby.",
      "mentorAnalogy": "Think of swing points like the peaks and valleys of a mountain range; they indicate where traders are likely to gather, just as climbers do at high altitudes."
    },
    "taskData": null,
    "visualKey": "boundary-areas-debrief"
  },
  {
    "type": "concept",
    "title": "Understanding Order Flow Dynamics",
    "label": "Core Track",
    "body": "### Boundary Areas: Understanding Order Flow Dynamics\nOrder flow dynamics play a pivotal role in the behavior of buy-side liquidity (BSL) and sell-side liquidity (SSL). This card explains **how to interpret order flow to effectively map liquidity clusters**.\n\n* **Bid-Ask Spread Analysis**: Monitor the bid-ask spread to gauge market sentiment. A narrowing spread often indicates increased buying interest, while a widening spread may signal sell-side liquidity pressure.\n* **Order Book Insights**: Analyze the order book for visible resting orders at key price levels. Large orders can act as magnets for price, indicating where liquidity is concentrated.\n* **Market Depth**: Utilize market depth charts to visualize the volume of buy and sell orders at various price levels. This can help identify potential liquidity zones where price may react strongly.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Order Flow",
          "definition": "The net buying and selling activity in the market, reflecting trader sentiment."
        },
        {
          "term": "Market Depth",
          "definition": "A visual representation of the number of buy and sell orders at different price levels."
        }
      ],
      "whyThisMatters": "Interpreting order flow enhances the trader's ability to anticipate price movements and locate liquidity clusters.",
      "realLifeExample": "During the NYSE open, the bid-ask spread on SPY narrowed significantly, indicating strong buy-side interest, leading to a rally from $400 to $405.",
      "commonMistake": "Overlooking the significance of order book data can result in missed opportunities to identify liquidity zones.",
      "quickNote": "Order flow dynamics reveal the underlying market sentiment and liquidity structure.",
      "mentorText": "Always keep an eye on the order book; it tells you where the market is likely to move based on the concentration of buy and sell orders.",
      "mentorAnalogy": "Consider order flow like traffic patterns at a busy intersection; understanding where the cars are headed helps you predict potential congestion points."
    },
    "taskData": null,
    "visualKey": "boundary-areas-intro"
  },
  {
    "type": "concept",
    "title": "Supply and Demand in Liquidity Mapping",
    "label": "Core Track",
    "body": "### Boundary Areas: Supply and Demand in Liquidity Mapping\nThe relationship between supply and demand is fundamental in liquidity mapping. This card discusses **how to identify areas where liquidity is likely to be absorbed or rejected**.\n\n* **Demand Zones**: Identify demand zones where price has previously reversed upward. These areas often indicate buy-side liquidity, as traders look to enter positions at favorable prices.\n* **Supply Zones**: Locate supply zones where price has previously reversed downward. These zones typically indicate sell-side liquidity, as traders seek to exit positions or short the market.\n* **Price Action Confirmation**: Use candlestick patterns to confirm the strength of supply and demand zones. A strong bullish engulfing pattern at a demand zone suggests robust buy-side liquidity, while a bearish engulfing pattern at a supply zone indicates sell-side pressure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Demand Zone",
          "definition": "A price level where buying interest is strong enough to overcome selling pressure."
        },
        {
          "term": "Supply Zone",
          "definition": "A price level where selling interest is strong enough to overcome buying pressure."
        }
      ],
      "whyThisMatters": "Recognizing supply and demand dynamics allows traders to anticipate price reactions at liquidity zones.",
      "realLifeExample": "On GBPUSD, a demand zone formed at 1.3000, where price reversed sharply, indicating strong buy-side liquidity as buyers entered the market.",
      "commonMistake": "Misidentifying supply and demand zones can lead to poor trade entries and exits.",
      "quickNote": "Supply and demand zones are critical indicators of potential liquidity absorption or rejection.",
      "mentorText": "When mapping liquidity, always look for areas where price has shown a strong response in the past; these are your supply and demand zones.",
      "mentorAnalogy": "Think of supply and demand zones like reservoirs; they hold water (liquidity) that can either be released or absorbed based on the surrounding environment."
    },
    "taskData": null,
    "visualKey": "bsl-mapping"
  },
  {
    "type": "concept",
    "title": "Market Reactions to Liquidity Zones",
    "label": "Core Track",
    "body": "### Boundary Areas: Market Reactions to Liquidity Zones\nMarkets exhibit distinct reactions when approaching mapped liquidity zones. This card provides insights into **potential price movements and reversals based on resting order concentrations**.\n\n* **Rejection Patterns**: Observe price action as it nears liquidity zones. A sharp rejection from a supply zone often signals strong sell-side liquidity, while a bounce from a demand zone indicates robust buy-side interest.\n* **Order Flow Shifts**: Monitor changes in order flow as price approaches liquidity zones. A sudden influx of buy orders at a demand zone can lead to a breakout, while increased sell orders at a supply zone may trigger a reversal.\n* **Confirmation Signals**: Utilize technical indicators, such as RSI or MACD, to confirm potential reversals at liquidity zones. Divergence signals near these zones can indicate a weakening trend and a likely price reversal.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Rejection Pattern",
          "definition": "A price movement that indicates a strong response against an expected direction at a liquidity zone."
        },
        {
          "term": "Confirmation Signals",
          "definition": "Technical indicators that support the likelihood of a price movement or reversal."
        }
      ],
      "whyThisMatters": "Understanding market reactions at liquidity zones enables traders to make informed decisions on entries and exits.",
      "realLifeExample": "On AUDJPY, price approached a supply zone at 85.00, where it rejected sharply, confirming sell-side liquidity as it fell 50 pips.",
      "commonMistake": "Ignoring market reactions at liquidity zones can lead to premature entries or exits.",
      "quickNote": "Market reactions at liquidity zones provide critical insights into potential price movements.",
      "mentorText": "Always watch how the market reacts as it approaches liquidity zones; these reactions can guide your trading decisions.",
      "mentorAnalogy": "Consider market reactions to liquidity zones like a car approaching a stop sign; the way it slows down or accelerates can indicate the driver's intent."
    },
    "taskData": null,
    "visualKey": "ssl-mapping"
  }
];
