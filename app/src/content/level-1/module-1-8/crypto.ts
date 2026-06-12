import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Crypto Liquidity Spike Cancellation",
    "label": "Crypto Track",
    "body": "Crypto markets are notorious for sudden liquidity spikes that can disrupt trade plans. This mission brief outlines **the necessity of implementing cancellation rules to manage these volatile conditions effectively**.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Spike",
          "definition": "A sudden increase in trading volume that can lead to rapid price movements."
        },
        {
          "term": "Cancellation Rules",
          "definition": "Predefined criteria for terminating a trade plan to avoid adverse conditions."
        }
      ],
      "whyThisMatters": "Crypto markets can experience extreme volatility, making it crucial to have clear rules for when to cancel a trade plan to protect capital.",
      "realLifeExample": "During a sudden liquidity spike on BTCUSD, the price moved 5% in minutes, triggering stop-losses and liquidations across the board.",
      "commonMistake": "Traders often fail to cancel plans during liquidity spikes, leading to unintended losses.",
      "quickNote": "Always define your cancellation criteria before entering a trade.",
      "mentorText": "When crypto markets spike, it's like driving in a sudden storm. You need a plan to pull over safely.",
      "mentorAnalogy": "Think of a crypto liquidity spike like a sudden storm for a pilot. Without a plan to divert or land safely, you're risking a crash."
    },
    "taskData": null,
    "visualKey": "crypto-liquidity-spike-cancellation"
  },
  {
    "type": "concept",
    "title": "Cancelling Plans During Liquidation Sweeps",
    "label": "Crypto Track",
    "body": "### Cancelling Plans During Liquidation Sweeps\nLiquidation sweeps can cause rapid market sell-offs, posing significant risks to active trade plans. This card details **the criteria for cancelling plans during such events**.\n\n* **Threshold Breach**: If the price breaches a predefined liquidation threshold, immediately cancel the plan. This prevents exposure to cascading sell-offs.\n* **Volume Surge Alert**: Monitor for abnormal volume spikes. A sudden increase in volume can indicate a liquidation sweep, warranting plan cancellation.\n* **Price Displacement Check**: If price displacement exceeds a set percentage within a short timeframe, cancel the plan to avoid volatile conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Sweep",
          "definition": "A rapid series of forced liquidations causing significant price movements."
        },
        {
          "term": "Price Displacement",
          "definition": "The extent of price movement from its previous level."
        }
      ],
      "whyThisMatters": "Liquidation sweeps can lead to rapid and unpredictable market movements, making it essential to have cancellation criteria to protect trades.",
      "realLifeExample": "ETHUSD experienced a liquidation sweep, dropping 10% in under 10 minutes, triggering a cascade of stop-loss orders.",
      "commonMistake": "Ignoring volume and price displacement indicators during liquidation sweeps can lead to significant losses.",
      "quickNote": "Set clear thresholds for liquidation events to protect your positions.",
      "mentorText": "In a liquidation sweep, think of it like a domino effect. If you see the first few fall, it's time to step back and cancel your trade.",
      "mentorAnalogy": "Imagine a chain reaction in a nuclear plant. If the first few rods overheat, you need to shut down the reactor immediately to prevent a meltdown."
    },
    "taskData": null,
    "visualKey": "crypto-liquidity-spike-cancellation"
  },
  {
    "type": "concept",
    "title": "Handling Cancellations Amid Volatility Spikes",
    "label": "Crypto Track",
    "body": "### Handling Cancellations Amid Volatility Spikes\nVolatility spikes can disrupt trade execution and increase risk. This card explains **strategies for cancelling plans during sudden volatility spikes**.\n\n* **Volatility Index Monitoring**: Use a volatility index to track market conditions. If the index exceeds a set level, cancel the plan to avoid erratic price movements.\n* **Time-Based Cancellation**: Implement a time-based rule where plans are canceled if volatility spikes occur within a specific timeframe post-entry.\n* **Spread Analysis**: Monitor the bid-ask spread. A sudden widening can indicate a volatility spike, necessitating plan cancellation.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Spike",
          "definition": "A sudden increase in market volatility, leading to unpredictable price swings."
        },
        {
          "term": "Bid-Ask Spread",
          "definition": "The difference between the highest price a buyer is willing to pay and the lowest price a seller is willing to accept."
        }
      ],
      "whyThisMatters": "Volatility spikes can lead to slippage and poor trade execution, making it crucial to have cancellation strategies in place.",
      "realLifeExample": "During a news release, BTCUSD's volatility index spiked, causing the spread to widen by 50%, leading to plan cancellations.",
      "commonMistake": "Failing to monitor volatility indices can result in executing trades during high-risk periods.",
      "quickNote": "Use volatility indices to gauge when to cancel trades.",
      "mentorText": "Volatility spikes are like turbulence for a pilot. If it gets too rough, you need to adjust your course or land.",
      "mentorAnalogy": "Consider a chef in a busy kitchen. If the heat gets too high and the smoke alarm goes off, it's time to pause and reassess the cooking process."
    },
    "taskData": null,
    "visualKey": "crypto-liquidity-spike-cancellation"
  },
  {
    "type": "concept",
    "title": "Strategies for Perpetual Contract Activation",
    "label": "Crypto Track",
    "body": "### Strategies for Perpetual Contract Activation\nPerpetual contracts offer unique trading opportunities but require specific activation strategies. This card covers **how to activate plans involving perpetual contracts effectively**.\n\n* **Funding Rate Analysis**: Monitor the funding rate to determine market sentiment. Activate plans when the rate aligns with your directional bias.\n* **Open Interest Evaluation**: Assess open interest levels. High open interest can indicate strong market participation, suitable for plan activation.\n* **Price Action Confirmation**: Wait for price action confirmation, such as a breakout or reversal pattern, before activating the plan.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Contract",
          "definition": "A type of futures contract without an expiration date, allowing for continuous trading."
        },
        {
          "term": "Funding Rate",
          "definition": "A periodic payment exchanged between long and short positions in a perpetual contract market."
        }
      ],
      "whyThisMatters": "Perpetual contracts require precise activation strategies due to their continuous nature and funding mechanics.",
      "realLifeExample": "On BTCUSD perpetual contracts, a positive funding rate indicated bullish sentiment, prompting activation of a long position.",
      "commonMistake": "Activating plans without considering funding rates can lead to unexpected costs and market bias misalignment.",
      "quickNote": "Align your activation strategy with funding rates and open interest.",
      "mentorText": "Think of perpetual contracts like a marathon. You need to pace your entry based on the conditions and crowd dynamics.",
      "mentorAnalogy": "Imagine an architect planning a skyscraper. The foundation must be laid considering the soil conditions and structural load, just as you must consider market conditions before activating a trade."
    },
    "taskData": null,
    "visualKey": "crypto-liquidity-spike-cancellation"
  },
  {
    "type": "concept",
    "title": "Cancelling Plans Due to Market Manipulation",
    "label": "Crypto Track",
    "body": "### Crypto Liquidity Spike Cancellation: Market Manipulation\nCrypto markets are prone to sudden liquidity spikes that can indicate manipulation. This card outlines **how to identify and cancel plans in response to suspected manipulation**.\n\n* **Volume Anomalies**: Cancel plans if there is an unexplained surge in volume that is not aligned with typical market catalysts or news events. Such anomalies often precede manipulative price movements.\n* **Order Book Imbalances**: Monitor the order book for large, sudden imbalances. If a single entity places outsized orders that skew the book, it suggests potential manipulation, warranting plan cancellation.\n* **Price Wicks and Spikes**: If the market exhibits extreme wicks or spikes without corresponding news, consider these as signs of stop-hunting or spoofing, and cancel any active plans.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Manipulation",
          "definition": "Deliberate actions taken to influence the price of a security or commodity."
        }
      ],
      "whyThisMatters": "Identifying manipulation helps traders avoid losses from artificial price movements and maintain plan integrity.",
      "realLifeExample": "BTCUSD experiences a 5% spike within minutes at 3:00 AM GMT with no news. The order book shows large sell walls appearing and disappearing rapidly.",
      "commonMistake": "Ignoring volume spikes as noise rather than potential manipulation indicators.",
      "quickNote": "Unusual volume and order book shifts often signal manipulation.",
      "mentorText": "When you see a sudden volume spike without news, it's like seeing a storm cloud on a clear day. Cancel your plans and wait for clarity.",
      "mentorAnalogy": "Think of market manipulation like a magician's trick. If you see the hand moving too quickly, it's a distraction. Cancel your trade plan until the trick is over."
    },
    "taskData": null,
    "visualKey": "crypto-liquidity-spike-cancellation"
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Plan Activation",
    "label": "Crypto Track",
    "body": "### Crypto Liquidity Spike Cancellation: Risk Management\nActivating a crypto trade plan requires balancing potential rewards with market risks. This card details **techniques for managing risk during plan activation**.\n\n* **Position Sizing**: Calculate position sizes based on volatility and risk tolerance. Use smaller sizes in highly volatile conditions to mitigate potential losses.\n* **Stop-Loss Placement**: Set stop-loss orders beyond typical volatility ranges to avoid premature exits due to noise, but within a range that limits potential loss.\n* **Reward-to-Risk Ratio**: Ensure each trade plan has a reward-to-risk ratio of at least 2:1, adjusting for current market conditions and volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "Proper risk management prevents significant losses and ensures long-term trading viability.",
      "realLifeExample": "ETHUSD shows increased volatility post-FOMC meeting. A trader reduces position size by 50% and sets a stop-loss 10% below entry to manage risk.",
      "commonMistake": "Over-leveraging positions in volatile markets, leading to large losses.",
      "quickNote": "Balance risk and reward; never risk more than you can afford to lose.",
      "mentorText": "Risk management is your seatbelt in trading. You wouldn't drive fast without it, so don't trade without considering your risk.",
      "mentorAnalogy": "Think of risk management like a ship's ballast. It keeps you stable in rough seas, preventing capsizing."
    },
    "taskData": null,
    "visualKey": "crypto-liquidity-spike-cancellation"
  },
  {
    "type": "practice",
    "title": "Practice in Crypto Plan Activation and Cancellation",
    "label": "Crypto Track",
    "body": "### Crypto Liquidity Spike Cancellation: Practice\nApply your knowledge of plan activation and cancellation in simulated scenarios. This card provides practice in **setting and cancelling plans based on liquidity and volatility changes**.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Spike",
          "definition": "A sudden increase in the volume of trades in a market, often leading to rapid price changes."
        }
      ],
      "whyThisMatters": "Practical application solidifies understanding and prepares traders for real market conditions.",
      "realLifeExample": "During a simulated trading session, BTCUSD experiences a 10% drop within an hour. Evaluate whether to activate or cancel your trade plan.",
      "commonMistake": "Failing to adjust plans quickly in response to market changes.",
      "quickNote": "Simulations prepare you for real market volatility.",
      "mentorText": "Practice is where you make mistakes without cost. Use these scenarios to refine your instincts.",
      "mentorAnalogy": "Simulated trading is like a flight simulator for pilots. You learn to handle turbulence without risking lives."
    },
    "taskData": {
      "type": "choice_block",
      "question": "BTCUSD suddenly spikes 8% upwards with no news or catalyst. What is your best course of action?",
      "options": [
        {
          "id": "0",
          "text": "Cancel the trade plan due to potential manipulation.",
          "isCorrect": true,
          "feedback": "Correct. An unexplained spike suggests manipulation, warranting plan cancellation."
        },
        {
          "id": "1",
          "text": "Double down on your position to maximize potential gains.",
          "isCorrect": false,
          "feedback": "Incorrect. Doubling down increases risk in a potentially manipulated market."
        },
        {
          "id": "2",
          "text": "Ignore the spike and stick to the original plan.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring such spikes can lead to significant losses."
        },
        {
          "id": "3",
          "text": "Place a stop-loss just above the current price.",
          "isCorrect": false,
          "feedback": "Incorrect. This could result in a premature exit if the spike is followed by a reversal."
        }
      ]
    },
    "visualKey": "crypto-liquidity-spike-cancellation"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Plan Activation and Cancellation",
    "label": "Crypto Track",
    "body": "### Crypto Liquidity Spike Cancellation: Summary\nReview the strategies for managing crypto trade plans during liquidity spikes and volatility events. This card ensures a **comprehensive understanding of plan activation and cancellation**.\n\n* **Manipulation Identification**: Recognize signs of market manipulation such as volume anomalies and order book imbalances to protect your capital.\n* **Risk Management Techniques**: Utilize position sizing, stop-loss placement, and reward-to-risk ratios to manage potential losses effectively.\n* **Adaptive Strategy**: Be prepared to adjust or cancel plans based on real-time market conditions, ensuring flexibility in your trading approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation of a trading price series over time, measured by the standard deviation of returns."
        }
      ],
      "whyThisMatters": "A thorough understanding of these strategies is essential for navigating the unpredictable nature of crypto markets.",
      "realLifeExample": "A trader reviews their plan after a volatile day in the crypto market, ensuring all trades align with their risk management strategy.",
      "commonMistake": "Overlooking the need to adapt plans in response to market changes.",
      "quickNote": "Flexibility and vigilance are key in volatile markets.",
      "mentorText": "Think of your trading plan as a living document. It needs to adapt to the market's pulse.",
      "mentorAnalogy": "Managing a trade plan is like a pilot adjusting flight paths in response to weather changes. Constant vigilance and adaptation ensure a safe journey."
    },
    "taskData": null,
    "visualKey": "crypto-liquidity-spike-cancellation"
  }
];
