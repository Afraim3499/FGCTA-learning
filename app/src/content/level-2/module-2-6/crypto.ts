import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Open Interest and Funding Rate Reversals",
    "label": "Crypto Track",
    "body": "### Market Structure Shift: Open Interest and Funding Rate Dynamics\nMarket Structure Shifts (MSS) can often be anticipated through spikes in Open Interest (OI) and corresponding funding rate reversals. This card outlines **how these indicators signal potential shifts in market sentiment**.\n\n* **Open Interest Spike**: A sudden increase in OI, particularly above the 30-day moving average, indicates heightened trader participation, often preceding a significant price movement.\n* **Funding Rate Reversal**: Monitor funding rates; a shift from negative to positive (or vice versa) can confirm a change in market sentiment, often aligning with an MSS.\n* **Correlation Analysis**: When OI spikes coincide with funding rate reversals, the likelihood of a structure shift increases, providing a robust confirmation for potential entry or exit points.",
    "context": {
      "keyTerms": [
        {
          "term": "Open Interest (OI)",
          "definition": "The total number of outstanding derivative contracts that have not been settled."
        },
        {
          "term": "Funding Rate",
          "definition": "The periodic payment made between long and short positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Recognizing the interplay between OI and funding rates is crucial for anticipating market shifts and making informed trading decisions.",
      "realLifeExample": "On March 15, 2023, Bitcoin's OI surged by 25% while the funding rate shifted from -0.01% to +0.02%, indicating a potential bullish MSS.",
      "commonMistake": "Traders often overlook OI changes, focusing solely on price action, leading to missed opportunities for identifying shifts.",
      "quickNote": "Spikes in OI and funding rate reversals are key indicators of potential market structure shifts.",
      "mentorText": "When you see OI rising sharply, don’t ignore it. Pair it with funding rate changes to confirm your analysis. This is how you build a robust trading strategy.",
      "mentorAnalogy": "Think of OI and funding rates like the fuel and ignition system in an aircraft; both need to work in tandem to ensure a successful takeoff."
    },
    "taskData": null,
    "visualKey": "crypto-funding-oi-shift"
  },
  {
    "type": "concept",
    "title": "Analyzing Open Interest Spikes",
    "label": "Crypto Track",
    "body": "### Market Structure Shift: Analyzing Open Interest Spikes\nOpen Interest (OI) spikes serve as critical indicators for potential market structure shifts. This card details **how to interpret these spikes in relation to price action**.\n\n* **Volume Correlation**: An OI spike should be accompanied by a corresponding increase in trading volume; this validates the strength of the move and indicates trader conviction.\n* **Price Action Context**: Analyze price behavior during OI spikes; if prices are rising alongside OI, it suggests bullish sentiment, while falling prices indicate bearish sentiment.\n* **Divergence Analysis**: Look for divergences between OI and price; if OI increases while prices decline, this could signal a potential reversal or a weakening trend.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume",
          "definition": "The total quantity of contracts traded in a given period."
        },
        {
          "term": "Divergence",
          "definition": "A situation where two related metrics move in opposite directions."
        }
      ],
      "whyThisMatters": "Understanding OI spikes allows traders to gauge market sentiment and anticipate potential reversals or continuations in price action.",
      "realLifeExample": "On April 10, 2023, Ethereum's OI increased by 40% while the price rose from $1,800 to $1,950, confirming a bullish MSS.",
      "commonMistake": "Failing to analyze volume alongside OI can lead to misinterpretation of market strength.",
      "quickNote": "OI spikes should always be analyzed in conjunction with volume and price action for accurate market insights.",
      "mentorText": "When you see OI spiking, check the volume. If they’re moving together, that’s your confirmation. Don’t just look at one side of the equation.",
      "mentorAnalogy": "Consider OI like a car's speedometer; it tells you how fast the market is moving, but without the gas pedal (volume), you might not be going anywhere."
    },
    "taskData": null,
    "visualKey": "crypto-funding-oi-shift"
  },
  {
    "type": "concept",
    "title": "Identifying Funding Rate Reversals",
    "label": "Crypto Track",
    "body": "### Market Structure Shift: Identifying Funding Rate Reversals\nFunding rate reversals are pivotal in confirming market structure shifts. This card explains **how to recognize these reversals and their implications**.\n\n* **Funding Rate Trends**: Monitor the funding rate over a 7-day period; a consistent shift from negative to positive (or vice versa) can indicate a change in trader sentiment and potential MSS.\n* **Market Sentiment Alignment**: A funding rate reversal that aligns with price action (e.g., price breaking a key resistance level) strengthens the case for an MSS.\n* **Timing of Reversals**: Pay attention to funding rate changes around major economic announcements or market events, as these can trigger significant shifts in trader behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate Reversal",
          "definition": "A change in the funding rate from positive to negative or vice versa."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular market or asset."
        }
      ],
      "whyThisMatters": "Recognizing funding rate reversals provides insight into trader sentiment and can confirm potential market structure shifts.",
      "realLifeExample": "On May 5, 2023, the funding rate for Litecoin shifted from +0.02% to -0.01% just before a price drop from $100 to $90, indicating a bearish MSS.",
      "commonMistake": "Ignoring funding rate changes can lead to misjudging market sentiment and missing critical entry or exit points.",
      "quickNote": "Funding rate reversals are essential signals for confirming market structure shifts.",
      "mentorText": "Always check the funding rate before making a trade. A reversal can be your signal that the market is about to change direction.",
      "mentorAnalogy": "Think of funding rates as the tide in an ocean; they can shift quickly and dramatically, influencing the entire landscape of the market."
    },
    "taskData": null,
    "visualKey": "crypto-funding-oi-shift"
  },
  {
    "type": "concept",
    "title": "Perpetual Order Book Data Analysis",
    "label": "Crypto Track",
    "body": "### Market Structure Shift: Perpetual Order Book Data Analysis\nAnalyzing perpetual order book data is crucial for identifying shifts in market structure. This card focuses on **how to interpret order book dynamics during MSS**.\n\n* **Order Book Depth**: Examine the depth of the order book; a significant imbalance between buy and sell orders can indicate impending price movement and potential MSS.\n* **Order Flow Analysis**: Track large market orders; sudden spikes in buying or selling can signal shifts in trader sentiment and confirm an MSS.\n* **Liquidity Zones**: Identify key liquidity zones where large orders are clustered; these areas often act as support or resistance during market structure shifts.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders for a specific asset."
        },
        {
          "term": "Liquidity Zones",
          "definition": "Price levels where a significant number of orders are placed, affecting market movement."
        }
      ],
      "whyThisMatters": "Understanding order book dynamics allows traders to anticipate price movements and confirm market structure shifts effectively.",
      "realLifeExample": "On June 12, 2023, Bitcoin's order book showed a sudden 50% increase in buy orders at $30,000, leading to a price surge to $32,000, confirming a bullish MSS.",
      "commonMistake": "Overlooking order book data can lead to missed signals of market shifts, relying solely on price charts.",
      "quickNote": "Order book analysis is essential for confirming market structure shifts and understanding trader behavior.",
      "mentorText": "Always keep an eye on the order book. It tells you where the market is leaning and can provide early signals of a structure shift.",
      "mentorAnalogy": "Think of the order book as a city’s traffic system; understanding where the congestion is can help you navigate the market more effectively."
    },
    "taskData": null,
    "visualKey": "crypto-funding-oi-shift"
  },
  {
    "type": "concept",
    "title": "Common Traps in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Crypto Trading: Common Traps During Market Structure Shifts\nMarket structure shifts in crypto can lead to significant misjudgments. This card outlines **common pitfalls traders encounter and strategies to mitigate these risks**.\n\n* **FOMO on Breakouts**: Traders often enter positions on perceived breakouts without confirmation. Wait for a close above resistance with volume before executing trades to avoid false breakouts.\n* **Ignoring Market Sentiment**: Emotional trading can lead to poor decisions. Utilize sentiment analysis tools to gauge market mood and avoid trading against prevailing sentiment during structure shifts.\n* **Overleveraging**: High volatility in crypto can amplify losses. Maintain a strict risk management strategy, limiting leverage to 2:1 during uncertain market conditions to protect capital.",
    "context": {
      "keyTerms": [
        {
          "term": "FOMO",
          "definition": "Fear of missing out; the anxiety of missing potential profits."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        },
        {
          "term": "Leverage",
          "definition": "Using borrowed capital to increase potential returns."
        }
      ],
      "whyThisMatters": "Recognizing these traps allows traders to maintain discipline and enhance their decision-making process during volatile market conditions.",
      "realLifeExample": "During the Ethereum breakout to $4,000 in May 2021, many traders entered positions without confirming the breakout, leading to significant losses when the price retraced rapidly.",
      "commonMistake": "Failing to wait for confirmation before entering trades can lead to unnecessary losses.",
      "quickNote": "Avoid emotional trading and always seek confirmation before executing trades.",
      "mentorText": "When you see a breakout, don't just jump in. Wait for confirmation with volume. Think of it like waiting for the green light before crossing the street.",
      "mentorAnalogy": "Imagine a pilot waiting for the control tower's clearance before takeoff. Rushing can lead to catastrophic results."
    },
    "taskData": null,
    "visualKey": "crypto-funding-oi-shift"
  },
  {
    "type": "concept",
    "title": "Momentum Shifts in Crypto",
    "label": "Crypto Track",
    "body": "### Crypto Analysis: Momentum Shifts Indicating Structure Changes\nMomentum shifts are critical indicators of potential market structure changes in crypto. This card examines **how to analyze these shifts and their implications for trading strategies**.\n\n* **Volume Analysis**: A sudden increase in volume accompanying price movement indicates strong momentum. Monitor volume spikes to confirm momentum shifts before adjusting positions.\n* **Divergence Signals**: Look for divergences between price action and momentum indicators like RSI. A bearish divergence during a price peak can signal a potential structure shift downwards.\n* **Timeframe Considerations**: Analyze momentum shifts across multiple timeframes. A shift on the daily chart may suggest a longer-term trend change, while shifts on the hourly chart indicate shorter-term adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Spike",
          "definition": "A significant increase in trading volume, often indicating strong market interest."
        },
        {
          "term": "Divergence",
          "definition": "A situation where price action and an indicator move in opposite directions."
        },
        {
          "term": "Timeframe",
          "definition": "The duration over which price movements are analyzed."
        }
      ],
      "whyThisMatters": "Understanding momentum shifts enables traders to adapt their strategies proactively, enhancing their ability to capitalize on market changes.",
      "realLifeExample": "In January 2021, Bitcoin experienced a momentum shift with a volume spike as it broke above $40,000, signaling a potential continuation of the bullish trend.",
      "commonMistake": "Ignoring volume when assessing momentum can lead to misinterpretation of price movements.",
      "quickNote": "Always analyze volume alongside price action to confirm momentum shifts.",
      "mentorText": "When you see a price move, check the volume. If it’s not there, it’s like a car revving its engine without going anywhere.",
      "mentorAnalogy": "Think of a race car; without the right fuel (volume), it won’t achieve the speed (momentum) needed to win."
    },
    "taskData": null,
    "visualKey": "crypto-funding-oi-shift"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Crypto MSS",
    "label": "Crypto Track",
    "body": "### Crypto Trading: Practical Exercises on Market Structure Shifts\nEngaging in practical exercises solidifies understanding of market structure shifts in crypto. This card presents **real-time scenarios to apply learned concepts**.\n\n* **Scenario Analysis**: Review a recent Bitcoin price chart. Identify at least two instances of market structure shifts and note the accompanying volume changes.\n* **Trade Simulation**: Create a hypothetical trade plan based on a recent Ethereum momentum shift. Define entry, stop-loss, and take-profit levels based on your analysis.\n* **Divergence Identification**: Analyze the last 30 days of price action for Litecoin. Identify any divergence signals and discuss how they could have influenced trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Plan",
          "definition": "A detailed strategy outlining entry, exit, and risk management for a trade."
        },
        {
          "term": "Hypothetical Trade",
          "definition": "A simulated trading scenario used for practice."
        },
        {
          "term": "Divergence Signals",
          "definition": "Indicators that suggest a potential reversal in price trends."
        }
      ],
      "whyThisMatters": "Practicing these scenarios enhances analytical skills and prepares traders for real market conditions.",
      "realLifeExample": "Simulate a trade based on Bitcoin's price action during the March 2020 crash, focusing on identifying structure shifts and momentum changes.",
      "commonMistake": "Failing to document trade plans can lead to inconsistent trading practices.",
      "quickNote": "Practice identifying structure shifts in real-time to enhance your trading acumen.",
      "mentorText": "Treat each practice scenario like a live trade. Document your thoughts and decisions to refine your strategy.",
      "mentorAnalogy": "Just as a surgeon practices on simulations before operating, you must practice trading scenarios to prepare for real market conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a recent market analysis, you notice Bitcoin has broken above $45,000 with significant volume. What should you do next?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position immediately.",
          "isCorrect": false,
          "feedback": "Entering without confirmation can lead to losses if the breakout fails."
        },
        {
          "id": "1",
          "text": "Wait for a pullback and confirmation before entering.",
          "isCorrect": true,
          "feedback": "This approach mitigates risk and ensures the breakout is valid."
        },
        {
          "id": "2",
          "text": "Short the market expecting a reversal.",
          "isCorrect": false,
          "feedback": "Shorting against a strong breakout can lead to significant losses."
        },
        {
          "id": "3",
          "text": "Ignore the movement and continue with your current strategy.",
          "isCorrect": false,
          "feedback": "Ignoring significant market movements can result in missed opportunities."
        }
      ]
    },
    "visualKey": "crypto-funding-oi-shift"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Market Structure Shifts",
    "label": "Crypto Track",
    "body": "### Crypto Overview: Key Concepts on Market Structure Shifts\nThis card summarizes essential concepts related to market structure shifts in crypto trading, reinforcing strategies and analyses discussed.\n\n* **Identifying Change of Character (ChoCh)**: Recognize when price action shifts from bullish to bearish or vice versa, indicating a potential market structure change.\n* **Displacement Confirmation**: Ensure that displacement is confirmed by volume and momentum indicators before executing trades based on structure shifts.\n* **Risk Management**: Implement strict risk management protocols during market structure shifts to safeguard capital against sudden volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Change of Character (ChoCh)",
          "definition": "A shift in market sentiment indicating a potential reversal in trend."
        },
        {
          "term": "Displacement",
          "definition": "A significant price movement that confirms a change in market structure."
        },
        {
          "term": "Risk Management",
          "definition": "Strategies to minimize financial loss in trading."
        }
      ],
      "whyThisMatters": "Reinforcing these concepts ensures traders are equipped to navigate market shifts effectively, enhancing their overall trading strategy.",
      "realLifeExample": "In April 2021, Bitcoin's rapid rise followed by a sharp decline illustrated the importance of recognizing ChoCh and displacement for effective trading decisions.",
      "commonMistake": "Overlooking the importance of volume in confirming market structure shifts can lead to poor trading outcomes.",
      "quickNote": "Focus on volume and momentum to confirm market structure shifts.",
      "mentorText": "Always look for confirmation before acting on market shifts. Think of it as checking your instruments before takeoff.",
      "mentorAnalogy": "Like a ship captain relying on navigational instruments to confirm course changes, traders must use volume and momentum to validate their trading decisions."
    },
    "taskData": null,
    "visualKey": "crypto-funding-oi-shift"
  }
];
