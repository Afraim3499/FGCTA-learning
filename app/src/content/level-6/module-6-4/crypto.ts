import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Assessing Market Volatility Impact on Spot Holdings",
    "label": "Crypto Track",
    "body": "### Core Scenario: Spot Holdings and Market Volatility\nMarket volatility can significantly impact the value of spot holdings, necessitating a proactive approach to risk management. This card teaches **how to evaluate the effects of volatility on your crypto positions and the importance of hedging with perpetual shorts**.\n\n* **Volatility Assessment**: Utilize tools such as the Average True Range (ATR) to quantify volatility levels. For instance, if Bitcoin (BTC) shows an ATR of $500, a sudden price drop could lead to substantial losses on spot holdings.\n* **Hedging Necessity**: Establish a hedging threshold where volatility exceeds a predetermined level, triggering the execution of perpetual shorts. For example, if Ethereum (ETH) experiences a 10% price swing, initiate a short position to mitigate potential losses.\n* **Dynamic Position Adjustment**: Continuously monitor market conditions and adjust your hedging strategy based on real-time volatility metrics. If market volatility spikes during a news event, reassess your exposure and hedge accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Perpetual Shorts",
          "definition": "A type of short position that does not have an expiration date."
        }
      ],
      "whyThisMatters": "Understanding market volatility allows traders to proactively manage risk and protect their capital during adverse movements.",
      "realLifeExample": "On March 15, 2023, BTC experienced a volatility spike of 15% due to regulatory news, leading to a $3,000 drop. A trader holding 1 BTC could have mitigated losses by opening a perpetual short at $20,000.",
      "commonMistake": "Traders often underestimate the impact of volatility, leading to unhedged positions during significant market movements.",
      "quickNote": "Assess volatility to determine the necessity for hedging with perpetual shorts.",
      "mentorText": "When volatility hits, it's not just about holding; it's about protecting what you have. If you see a spike, act fast to hedge your position before it costs you.",
      "mentorAnalogy": "Think of your spot holdings like a ship at sea. When storms (volatility) approach, you need to drop anchor (hedge) to prevent capsizing."
    },
    "taskData": null,
    "visualKey": "alternative-scenario-map"
  },
  {
    "type": "concept",
    "title": "Crafting Effective Hedging Strategies with Perpetual Shorts",
    "label": "Crypto Track",
    "body": "### Core Scenario: Developing Effective Hedging Strategies\nEffective hedging strategies are essential for protecting spot holdings against adverse market movements. This card teaches **how to construct and implement these strategies using perpetual shorts**.\n\n* **Strategy Formulation**: Identify key market indicators that signal potential downturns. For example, if Bitcoin's price approaches a resistance level of $25,000 with declining volume, consider opening a perpetual short.\n* **Position Sizing**: Calculate the appropriate size of your perpetual short based on your total capital and risk tolerance. If your total capital is $10,000, limit your short exposure to 20% to avoid over-leveraging.\n* **Execution Timing**: Execute the perpetual short at optimal times, such as during market rallies or after significant bullish news. For instance, if Ethereum surges to $2,000 on positive sentiment, this may be an ideal moment to enter a short position.",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging Strategy",
          "definition": "A plan designed to offset potential losses in investments."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade."
        }
      ],
      "whyThisMatters": "Developing a robust hedging strategy enables traders to safeguard their investments against unexpected market shifts.",
      "realLifeExample": "On April 10, 2023, a trader noticed Bitcoin nearing a resistance level of $28,000. By opening a perpetual short at that level, they protected their 2 BTC spot holdings from a subsequent drop to $25,000.",
      "commonMistake": "Many traders fail to adjust their position sizes based on market conditions, leading to excessive risk exposure.",
      "quickNote": "Construct hedging strategies that utilize perpetual shorts to safeguard your investments.",
      "mentorText": "Think of your hedging strategy as a safety net. You need to know when to deploy it and how much to rely on it without risking your entire capital.",
      "mentorAnalogy": "Creating a hedging strategy is like designing a safety harness for a climber. You must ensure it’s secure and ready to deploy when the climb gets treacherous."
    },
    "taskData": null,
    "visualKey": "alternative-scenario-map"
  },
  {
    "type": "concept",
    "title": "Evaluating Market Correlations for Hedging Decisions",
    "label": "Crypto Track",
    "body": "### Core Scenario: Analyzing Market Correlations\nUnderstanding market correlations is vital for making informed hedging decisions. This card teaches **how to analyze the relationships between your spot holdings and other assets**.\n\n* **Correlation Analysis**: Use statistical measures like Pearson correlation coefficients to gauge the relationship between Bitcoin and Ethereum. A coefficient close to 1 indicates a strong positive correlation, suggesting that when BTC rises, ETH likely follows.\n* **Diversification Strategy**: Incorporate assets with low or negative correlations to your spot holdings into your portfolio. For example, adding a stablecoin like USDC can provide stability when crypto markets are volatile.\n* **Market Sentiment Monitoring**: Track sentiment indicators across correlated assets. If Bitcoin experiences bullish sentiment while your altcoin shows bearish trends, consider hedging your altcoin position to mitigate risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        },
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various assets to reduce risk."
        }
      ],
      "whyThisMatters": "Analyzing correlations helps traders make strategic decisions on when and how to hedge their positions effectively.",
      "realLifeExample": "On February 5, 2023, a trader observed a correlation coefficient of 0.85 between BTC and ETH. Anticipating a BTC downturn, they opened a perpetual short on ETH to hedge their position.",
      "commonMistake": "Traders often overlook correlation analysis, leading to poorly informed hedging decisions that fail to mitigate risk.",
      "quickNote": "Analyze market correlations to inform your hedging strategies effectively.",
      "mentorText": "Understanding how assets move together is crucial. If you see a strong correlation, you can hedge one asset based on the movements of another.",
      "mentorAnalogy": "Analyzing market correlations is like studying weather patterns. Just as a storm in one region can affect another, movements in one asset can impact others."
    },
    "taskData": null,
    "visualKey": "alternative-scenario-map"
  },
  {
    "type": "concept",
    "title": "Evaluating Liquidation Risks in Perpetual Shorts",
    "label": "Crypto Track",
    "body": "### Core Scenario: Assessing Liquidation Risks\nLiquidation risks associated with perpetual shorts can significantly impact your trading strategy. This card teaches **how to assess these risks and their implications for your overall strategy**.\n\n* **Margin Requirements**: Understand the margin requirements for perpetual shorts. If you open a short position on Bitcoin at $30,000 with a 10x leverage, ensure you maintain sufficient margin to avoid liquidation if the price rises.\n* **Risk Assessment**: Calculate the liquidation price based on your entry point and leverage. For example, if you short BTC at $30,000 with 10x leverage, your liquidation price would be $33,000, necessitating a risk management plan.\n* **Dynamic Risk Management**: Continuously monitor your positions and adjust stop-loss orders to mitigate liquidation risks. If Bitcoin approaches your liquidation price, consider closing the position or adding margin to avoid forced liquidation.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Risk",
          "definition": "The risk of having a position forcibly closed due to insufficient margin."
        },
        {
          "term": "Margin Requirements",
          "definition": "The amount of capital required to open and maintain a leveraged position."
        }
      ],
      "whyThisMatters": "Assessing liquidation risks is crucial for maintaining control over your trading strategy and protecting your capital.",
      "realLifeExample": "On May 1, 2023, a trader shorted Bitcoin at $32,000 with 5x leverage. As BTC approached $34,000, they adjusted their stop-loss to avoid liquidation, successfully managing their risk.",
      "commonMistake": "Traders often neglect to calculate their liquidation prices, leading to unexpected losses and forced position closures.",
      "quickNote": "Evaluate liquidation risks to maintain control over your perpetual short positions.",
      "mentorText": "You must know your limits. If you don't understand where your liquidation point is, you're flying blind in a storm.",
      "mentorAnalogy": "Assessing liquidation risks is like a pilot checking fuel levels before takeoff. You need to know how much you have to avoid a crash landing."
    },
    "taskData": null,
    "visualKey": "alternative-scenario-map"
  },
  {
    "type": "concept",
    "title": "Timing Your Hedging Positions",
    "label": "Crypto Track",
    "body": "### Core Scenario: Timing Your Hedging Positions\nEffective hedging requires precise timing to optimize protection against market downturns. This card outlines **how to strategically time your hedging entries**.\n\n* **Market Condition Assessment**: Analyze volatility indicators such as the Average True Range (ATR) to determine optimal entry points for hedging. For instance, a spike in ATR above 5% may signal increased risk, warranting immediate hedging.\n* **Correlation Timing**: Monitor the correlation between your primary asset and the hedging instrument. A sudden shift in correlation can indicate a need to hedge; for example, if Bitcoin's correlation with Ethereum drops below 0.5, it may be time to initiate a hedge.\n* **Session Timing**: Execute hedging positions during high liquidity sessions, such as the overlap of the London and New York sessions, to minimize slippage and maximize execution efficiency.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A volatility indicator that measures market movement over a specified period."
        },
        {
          "term": "Correlation",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        }
      ],
      "whyThisMatters": "Proper timing in hedging can significantly reduce potential losses during market downturns, allowing for more effective risk management.",
      "realLifeExample": "In a scenario where Bitcoin is trading at $30,000 and the ATR spikes to 5%, a trader may enter a hedge by shorting Ethereum at $2,000 to protect against a potential downturn.",
      "commonMistake": "Failing to adjust hedging positions in response to changing market volatility can lead to inadequate protection.",
      "quickNote": "Timing your hedging positions is crucial for maximizing protection against market volatility.",
      "mentorText": "When you see volatility indicators like ATR spiking, it’s time to act. Don’t wait for the market to dictate your moves; be proactive in your hedging strategy.",
      "mentorAnalogy": "Think of timing your hedging like a pilot adjusting altitude based on weather conditions. Just as a pilot must respond to turbulence, you must react to market volatility."
    },
    "taskData": null,
    "visualKey": "alternative-scenario-map"
  },
  {
    "type": "concept",
    "title": "Creating Exit Strategies for Hedged Positions",
    "label": "Crypto Track",
    "body": "### Core Scenario: Creating Exit Strategies for Hedged Positions\nEstablishing clear exit strategies for hedged positions is essential for capturing profits while managing risk. This card details **how to formulate effective exit strategies**.\n\n* **Profit Target Setting**: Define specific profit targets for your hedged positions based on technical analysis. For example, if your Bitcoin hedge is shorted at $30,000, set a profit target at $28,500, which corresponds to a 5% decline.\n* **Trailing Stops**: Implement trailing stops to secure profits as the market moves in your favor. For instance, if Bitcoin drops to $29,000, adjust your stop-loss to $29,500 to lock in gains while allowing for further downside.\n* **Time-Based Exits**: Establish timeframes for exiting hedged positions, such as reviewing positions weekly or bi-weekly, to ensure you capitalize on favorable market conditions before they reverse.",
    "context": {
      "keyTerms": [
        {
          "term": "Profit Target",
          "definition": "A predetermined price level at which a trader plans to close a position to realize gains."
        },
        {
          "term": "Trailing Stop",
          "definition": "A dynamic stop-loss order that adjusts as the market price moves in favor of the position."
        }
      ],
      "whyThisMatters": "Effective exit strategies ensure that profits from hedged positions are captured, preventing potential losses from market reversals.",
      "realLifeExample": "If a trader shorts Bitcoin at $30,000 and sets a profit target at $28,500, they can exit the position once the price reaches that level, securing a 5% gain.",
      "commonMistake": "Neglecting to set clear exit strategies can lead to missed profit opportunities and increased exposure to market reversals.",
      "quickNote": "Establishing exit strategies for hedged positions is vital for profit capture and risk management.",
      "mentorText": "Always have an exit plan. It’s not just about entering a position; knowing when to exit is equally critical for securing your gains.",
      "mentorAnalogy": "Creating exit strategies is like a surgeon planning the steps of an operation. Each move must be calculated to ensure a successful outcome."
    },
    "taskData": null,
    "visualKey": "alternative-scenario-map"
  },
  {
    "type": "concept",
    "title": "Designing a Hedging Scenario",
    "label": "Crypto Track",
    "body": "### Core Scenario: Designing a Hedging Scenario\nCreating a hedging scenario involves assessing current market conditions and determining appropriate hedging strategies. This card focuses on **designing a hedging scenario for your spot holdings**.\n\n* **Market Analysis**: Begin by analyzing the current market conditions, including price trends and volatility. For example, if Bitcoin is currently trading at $35,000 with a 7% ATR, this indicates heightened volatility.\n* **Hedging Instrument Selection**: Choose the appropriate hedging instrument, such as perpetual futures or options. If Bitcoin is expected to decline, consider shorting Bitcoin perpetual futures to hedge against potential losses.\n* **Position Sizing**: Determine the size of your hedge based on your spot holdings. If you hold 1 BTC, shorting 0.5 BTC in perpetual futures may provide adequate coverage without overexposing your portfolio.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade or hedge."
        },
        {
          "term": "Perpetual Futures",
          "definition": "A type of derivative that allows traders to speculate on the price of an asset without an expiration date."
        }
      ],
      "whyThisMatters": "Designing a tailored hedging scenario allows for effective risk management, protecting your portfolio from adverse price movements.",
      "realLifeExample": "If Bitcoin is trading at $35,000 and a trader holds 1 BTC, they might short 0.5 BTC in perpetual futures to hedge against a potential downturn, especially with a 7% ATR indicating volatility.",
      "commonMistake": "Underestimating the size of the hedge can leave a trader exposed to significant losses during market downturns.",
      "quickNote": "Designing a hedging scenario requires careful analysis of market conditions and position sizing.",
      "mentorText": "When crafting your hedging scenario, think critically about your holdings and the market environment. Adjust your strategy based on real-time data.",
      "mentorAnalogy": "Designing a hedging scenario is like an architect drafting blueprints. Each detail must be meticulously planned to ensure structural integrity against unforeseen events."
    },
    "taskData": null,
    "visualKey": "alternative-scenario-map"
  },
  {
    "type": "summary",
    "title": "Summary of Hedging Strategies",
    "label": "Crypto Track",
    "body": "### Core Scenario: Summary of Hedging Strategies\nThis card consolidates the key concepts related to designing hedging scenarios using perpetual shorts for spot holdings. Understanding these strategies is essential for effective risk management.\n\n* **Timing and Execution**: Effective hedging relies on precise timing and execution, particularly during high volatility periods. Utilize indicators like ATR to guide your entry points.\n* **Exit Strategies**: Establish clear exit strategies to capture profits from hedged positions. Utilize profit targets and trailing stops to manage risk effectively.\n* **Custom Hedging Scenarios**: Tailor your hedging scenarios based on market conditions and your specific holdings. Position sizing is critical to ensure adequate coverage without overexposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Custom Hedging Scenario",
          "definition": "A tailored hedging approach based on individual market conditions and asset holdings."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of hedging strategies equips traders with the tools necessary to protect their portfolios against market volatility.",
      "realLifeExample": "A trader who effectively implements these strategies can safeguard their Bitcoin holdings during a downturn, ensuring that they are prepared for adverse market movements.",
      "commonMistake": "Overlooking the importance of exit strategies can lead to missed profit opportunities and increased risk exposure.",
      "quickNote": "Mastering hedging strategies is vital for protecting your investments in volatile markets.",
      "mentorText": "Reflect on your hedging strategies regularly. Adjust them based on market conditions to ensure you’re always prepared for volatility.",
      "mentorAnalogy": "Summarizing hedging strategies is akin to a pilot reviewing their flight plan before takeoff. Every detail must be accounted for to ensure a safe journey."
    },
    "taskData": null,
    "visualKey": "alternative-scenario-map"
  }
];
