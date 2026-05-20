import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Crypto Timeframes Run 24/7",
    visualKey: "crypto-continuous-market-board",
    label: "Crypto Foundation",
    body: "A crypto timeframe is a candle duration inside a continuous market. The chart may keep printing candles all day and all weekend, but the quality of those candles can change with activity, liquidity, venue behavior, Bitcoin (BTC) context, and event pressure.",
    context: {
      keyTerms: [
        { term: "24/7 Market", definition: "A market that continues trading across days, nights, weekends, and holidays." },
        { term: "Crypto Timeframe", definition: "The amount of time represented by one crypto candle." },
        { term: "Market Condition", definition: "The environment behind the candle, such as active, quiet, thin, volatile, or event-driven." },
        { term: "Candle Quality", definition: "How useful a candle is as evidence after considering the condition that created it." },
        { term: "Continuous Trading", definition: "A market structure where candles keep forming without traditional daily closure." }
      ],
      whyThisMatters: "Crypto learners can become overconfident because there is always movement. But movement does not always mean clean evidence. A candle formed during a thin or unstable period may be weaker than it looks.",
      realLifeExample: "BTC may form a sharp 15-minute candle late at night with low participation, then form another 15-minute candle during a high-activity period. Same timeframe, different quality of evidence.",
      commonMistake: "Thinking crypto candles are equally meaningful just because the chart is always active.",
      "quickNote": "Crypto never sleeps, but candle quality still changes."
    }
  },
  {
    type: "visual_intro",
    title: "The Crypto Day Has Activity Cycles",
    visualKey: "crypto-activity-cycle-board",
    label: "Activity Rhythm",
    body: "Crypto does not follow the same session structure as Foreign Exchange (Forex), but it still has activity rhythms. Some windows attract more participation, some are quieter, and some become unstable because of events, funding pressure, or broader market attention.",
    context: {
      keyTerms: [
        { term: "Activity Cycle", definition: "A repeated change in market participation across time." },
        { term: "Participation", definition: "The amount of activity behind price movement." },
        { term: "Quiet Window", definition: "A period where movement may be thinner or less reliable." },
        { term: "Active Window", definition: "A period where participation and volume may be stronger." },
        { term: "Funding Time", definition: "A scheduled moment in perpetual markets that can influence positioning behavior." },
        { term: "Event Window", definition: "A period around important announcements, listings, unlocks, or market-wide catalysts." }
      ],
      whyThisMatters: "A learner who ignores activity rhythm may treat every candle as equal. Crypto movement can look similar on the chart but come from very different levels of participation.",
      realLifeExample: "A token may barely move for hours, then suddenly expand when US market attention increases or when a major crypto event hits the market.",
      commonMistake: "Assuming “24/7” means every hour has the same market quality.",
      "quickNote": "Crypto is always open, but participation is not always equal."
    }
  },
  {
    type: "visual_intro",
    title: "Same Candle, Different Market Condition",
    visualKey: "crypto-candle-quality-board",
    label: "Candle Quality",
    body: "A crypto candle gains meaning from the condition that created it. The same candle shape can be useful, weak, exaggerated, or unstable depending on liquidity, venue activity, spot support, perpetual contract (perp) pressure, and event context.",
    context: {
      keyTerms: [
        { term: "Candle Condition", definition: "The market environment that created the candle." },
        { term: "Spot Participation", definition: "Actual buying or selling of the asset in spot markets." },
        { term: "Thin Liquidity", definition: "A condition where price can move sharply because available orders are limited." },
        { term: "Perp-Driven Move", definition: "Movement strongly influenced by perpetual contract pressure." },
        { term: "Event Spike", definition: "A fast candle caused by a sudden catalyst or market reaction." },
        { term: "Evidence Quality", definition: "How reliable a candle is as part of a market reading." }
      ],
      whyThisMatters: "Crypto candles often look dramatic. A trained learner does not judge only the size or shape. They ask what produced the candle.",
      realLifeExample: "A token prints a strong candle on one venue. If spot volume is strong across multiple exchanges, it may be useful evidence. If liquidity is thin and other venues do not confirm, the candle may be weaker than it looks.",
      commonMistake: "Trusting the most dramatic crypto candle without checking what created it.",
      "quickNote": "In crypto, the source of the candle matters as much as the shape."
    }
  },
  {
    type: "visual_intro",
    title: "BTC Context Changes Timeframe Reading",
    visualKey: "crypto-btc-context-board",
    label: "Market Context",
    body: "In crypto, a candle on one asset is often connected to the broader market. Bitcoin (BTC) context can strengthen, weaken, or complicate the reading. A trained learner checks whether the move is asset-specific or part of wider market movement.",
    context: {
      keyTerms: [
        { term: "BTC Context", definition: "The broader condition of Bitcoin, often used as a reference for crypto market direction." },
        { term: "Altcoin Candle", definition: "A candle from a crypto asset other than Bitcoin." },
        { term: "Broad Market Support", definition: "Evidence that the move is supported by wider market behavior." },
        { term: "Asset-Specific Move", definition: "Movement that appears more connected to one asset than the entire market." },
        { term: "Market Pull", definition: "When BTC or broader crypto movement influences other assets." }
      ],
      whyThisMatters: "Many altcoin (alternative cryptocurrency) candles look strong until Bitcoin (BTC) context changes. A learner who ignores BTC may mistake market-wide pull for asset-specific strength.",
      realLifeExample: "Solana (SOL) prints a bullish candle while Bitcoin (BTC) is also moving strongly upward. That candle may have broad support. If Solana (SOL) spikes while Bitcoin (BTC) is weak and other assets are flat, the learner should investigate more carefully.",
      commonMistake: "Reading an altcoin candle as isolated strength without checking Bitcoin (BTC) context.",
      "quickNote": "In crypto, one asset’s candle often needs the market’s context."
    }
  },
  {
    type: "visual_intro",
    title: "Spot vs Perp Timeframe Behavior",
    visualKey: "crypto-spot-perp-board",
    label: "Market Type",
    body: "A spot candle (from a market where assets are bought and sold immediately) and a perpetual (perp) contract candle (a type of derivative with no expiry date) can share the same timeframe but carry different information. Spot movement records asset trades. Perpetual (perp) movement may also include leverage pressure (borrowed funds), funding imbalance (scheduled fees paid between traders), liquidation risk (forced closures), and contract behavior.",
    context: {
      keyTerms: [
        { term: "Spot Candle", definition: "A candle formed from actual asset buying and selling on a venue." },
        { term: "Perpetual Candle", definition: "A candle formed from perpetual contract price movement." },
        { term: "Leverage Pressure", definition: "Movement affected by traders using borrowed exposure." },
        { term: "Funding Imbalance", definition: "A condition where long or short positioning creates pressure in perpetual markets." },
        { term: "Liquidation Sensitivity", definition: "The risk that forced closures influence candle movement." },
        { term: "Market Engine", definition: "The mechanism producing the candle record." }
      ],
      whyThisMatters: "A learner who treats spot and perpetual candles the same may miss the role of leverage. Perp movement can look strong while spot support remains weaker.",
      realLifeExample: "BTC perpetuals print a strong candle during a liquidation event, but spot movement is smaller. The candle is real, but the reading is not the same as clean spot demand.",
      commonMistake: "Reading a perpetual candle as if it always proves spot market strength.",
      "quickNote": "Same timeframe does not mean same market engine."
    }
  },
  {
    type: "visual_intro",
    title: "Weekend and Thin-Liquidity Timeframes",
    visualKey: "crypto-liquidity-risk-board",
    label: "Liquidity Risk",
    body: "Crypto weekend candles can be useful, but they need careful reading. When liquidity is thinner, price can travel farther with less participation. A trained learner checks whether the move is broadly supported or only exaggerated by weak conditions.",
    context: {
      keyTerms: [
        { term: "Weekend Liquidity", definition: "The quality of market participation during weekend trading." },
        { term: "Thin-Liquidity Move", definition: "Movement that may be exaggerated because there are fewer available orders." },
        { term: "Participation Quality", definition: "How strong or reliable the market activity behind a candle appears." },
        { term: "Confirmation", definition: "Additional evidence that supports the candle after it forms." },
        { term: "Exaggerated Candle", definition: "A candle that looks strong partly because the market condition is thin." }
      ],
      whyThisMatters: "Crypto learners often chase weekend candles because the market is still open. But thinner conditions can make movement look cleaner than it is.",
      realLifeExample: "A token jumps on Saturday with a sharp candle, but volume is low and other venues do not confirm strongly. A trained learner treats the move as incomplete until confirmation improves.",
      commonMistake: "Assuming every weekend breakout has the same quality as a high-participation weekday move.",
      "quickNote": "Weekend candles can matter, but they need liquidity context."
    }
  },
  {
    type: "visual_intro",
    title: "News, Listings, and Event Candles",
    visualKey: "crypto-event-pressure-board",
    label: "Event Pressure",
    body: "A crypto event candle may record important market reaction, but it can also be unstable. Listings, unlocks, exploits, headlines, and sudden catalysts can produce fast candles that need close-location review and follow-through before the reading becomes reliable.",
    context: {
      keyTerms: [
        { term: "Event Candle", definition: "A candle formed around a major catalyst or sudden market event." },
        { term: "Catalyst", definition: "A piece of information or event that changes market behavior." },
        { term: "Repricing", definition: "A fast adjustment in price after new information enters the market." },
        { term: "FOMO Reaction", definition: "Emotional buying or chasing after rapid movement." },
        { term: "Panic Reaction", definition: "Emotional selling or forced exit behavior after bad news." },
        { term: "Follow-Through", definition: "What price does after the event candle closes." }
      ],
      whyThisMatters: "Crypto reacts quickly to events. A candle can look decisive in the moment and still fail once the initial reaction fades.",
      realLifeExample: "A token jumps after a listing announcement, leaves a large wick, and closes near the middle. A rushed learner sees a breakout. A trained learner waits to see whether the market holds the move.",
      commonMistake: "Treating the first event candle as the final truth.",
      "quickNote": "In crypto, event candles need follow-through."
    }
  },
  {
    type: "visual_intro",
    title: "Multi-Timeframe Crypto Reading Process",
    visualKey: "crypto-reading-stack-board",
    label: "Crypto Workflow",
    body: "A disciplined crypto reading starts with broader structure and market context before moving into lower-timeframe detail. The learner checks Bitcoin (BTC) context, venue type, liquidity condition, and timeframe alignment before trusting the candle.",
    context: {
      keyTerms: [
        { term: "Crypto Top-Down Reading", definition: "A process for reading from broader context into local detail." },
        { term: "HTF Structure", definition: "Higher-timeframe market location and broader movement." },
        { term: "Venue Check", definition: "Identifying whether the candle comes from spot, perpetuals, decentralized exchanges (DEX), or an aggregated feed." },
        { term: "Working Timeframe", definition: "The main chart used for current analysis." },
        { term: "Reading Quality", definition: "Whether the evidence is clear, mixed, or unclear." },
        { term: "Alignment", definition: "When multiple layers support the same reading." }
      ],
      whyThisMatters: "Crypto has many moving layers. Without a process, the learner can be pulled around by every dramatic candle.",
      realLifeExample: "Ethereum (ETH) rallies on 15m. A trained learner checks the 4H structure, Bitcoin (BTC) condition, whether spot confirms, and whether the move appears across venues before treating it as clean.",
      commonMistake: "Starting from the smallest chart and letting urgency control the reading.",
      "quickNote": "Crypto reading needs structure before speed."
    }
  },
  {
    type: "practice",
    title: "Crypto Timeframe Conflict Drill",
    visualKey: "crypto-conflict-drill-board",
    label: "Practice Drill",
    body: "This drill tests whether you can separate active movement from aligned evidence. A crypto candle can be real and still incomplete. The trained learner checks timeframe, venue, BTC context, spot support, and liquidity before calling a reading clean.",
    taskData: {
      type: "choice_block",
      question: "A token shows a strong 15-minute candle on a perpetual exchange. The 4H chart is still under resistance, Bitcoin (BTC) is flat, spot movement is weaker, and the candle formed during a thin-liquidity period.",
      options: [
        {
          id: "A",
          text: "The 15-minute candle is strong, so the token is clearly bullish.",
          isCorrect: false,
          feedback: "Not correct. A strong lower-timeframe candle does not automatically define the full market reading."
        },
        {
          id: "B",
          text: "The move should be treated carefully because the lower-timeframe candle is not fully supported by Bitcoin (BTC) context, spot confirmation, or higher-timeframe structure.",
          isCorrect: true,
          feedback: "Correct. The 15-minute move is active, but the broader evidence is not aligned. BTC is not supporting strongly, spot confirmation is weaker, and higher-timeframe structure is still limiting the reading. This is mixed evidence, not clean confirmation."
        },
        {
          id: "C",
          text: "Perpetual candles always show the cleanest market truth.",
          isCorrect: false,
          feedback: "Not correct. Perpetual candles can be useful, but they can also be distorted by leverage and liquidation pressure."
        },
        {
          id: "D",
          text: "The higher timeframe does not matter because the 15-minute chart is more recent.",
          isCorrect: false,
          feedback: "Not correct. Newer does not always mean more important. Lower-timeframe movement must be read inside broader context."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Mixed Evidence", definition: "A condition where some clues support the move while other layers reduce confidence." },
        { term: "Spot Confirmation", definition: "Support from actual spot market movement." },
        { term: "Perp Pressure", definition: "Movement influenced by perpetual contract activity." },
        { term: "BTC Context", definition: "The broader Bitcoin condition affecting crypto market interpretation." },
        { term: "Thin Liquidity", definition: "A weak market condition where price can move too easily." },
        { term: "Clean Confirmation", definition: "Evidence that is supported across multiple relevant layers." }
      ],
      whyThisMatters: "Crypto often gives dramatic movement before clean confirmation. This drill teaches the learner to avoid chasing the loudest candle.",
      realLifeExample: "A perp chart prints a large green candle, but spot volume is weak and BTC is flat. A rushed learner sees strength. A trained learner marks it as mixed until confirmation improves.",
      commonMistake: "Calling a move clean because one crypto chart looks strong.",
      "quickNote": "In crypto, active does not always mean confirmed."
    }
  },
  {
    type: "visual_intro",
    title: "Crypto Debrief: Time, Venue, Liquidity, Alignment",
    visualKey: "crypto-roadway-debrief",
    label: "Roadway Debrief",
    body: "You are no longer reading crypto candles as isolated shapes. You now understand that every crypto candle belongs to a timeframe, every timeframe forms inside a market condition, and every candle must be checked against venue, liquidity, Bitcoin (BTC) context, and broader structure.",
    context: {
      keyTerms: [
        { term: "Venue Source", definition: "The market or platform that produced the candle." },
        { term: "Liquidity Condition", definition: "The depth and quality behind the movement." },
        { term: "BTC Context", definition: "The broader Bitcoin condition surrounding the move." },
        { term: "Timeframe Alignment", definition: "When multiple timeframes support the same reading." },
        { term: "Reading Quality", definition: "Whether the evidence is clear, mixed, or unclear." },
        { term: "Crypto Evidence Stack", definition: "The combined review of timeframe, venue, BTC, liquidity, and structure." }
      ],
      whyThisMatters: "Crypto is fast, continuous, fragmented, and emotional. A learner needs a process that slows the reading down and checks the right layers.",
      realLifeExample: "Two learners see the same 15m crypto candle. One reacts to the candle. The trained learner asks where it formed, which venue produced it, whether Bitcoin (BTC) supports it, and whether liquidity confirms it.",
      commonMistake: "Leaving with the idea that “crypto is 24/7” but no actual process for reading crypto timeframes.",
      "quickNote": "Crypto candles are read through time, venue, liquidity, and alignment."
    }
  }
];
