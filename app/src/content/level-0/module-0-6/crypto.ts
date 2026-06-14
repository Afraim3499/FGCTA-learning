import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.5 - Crypto Track Cards
 * Focus: Crypto Structure: Fragmented Markets, Liquidity, and Break Quality
 */
export const cryptoCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Crypto Structure Is Fragmented Market Behavior",
    label: "Crypto Structure Foundation",
    visualKey: "crypto-fragmented-structure-skeleton",
    body: "Crypto structure is the visible behavior of an asset across fragmented markets, not one universal chart truth. A crypto asset can trade across centralized spot exchanges, perpetual markets, DEX pools, and aggregate feeds. The chart visible to the learner is one representation of movement, but crypto structure may be supported, weakened, or distorted by venue differences. A trained learner audits the structure before trusting it.",
    context: {
      keyTerms: [
        { term: "Crypto Structure", definition: "The arrangement of price movement in a crypto asset across market conditions." },
        { term: "Fragmented Market", definition: "A market where trading happens across multiple venues instead of one unified place." },
        { term: "Venue", definition: "The place or market type where price movement forms, such as spot, perp, or DEX." },
        { term: "Structure Reading", definition: "Classifying what price is building over time." },
        { term: "Evidence Alignment", definition: "When multiple layers support the same reading." }
      ],
      whyThisMatters: "Crypto learners often trust one chart too quickly. In crypto, one venue can move sharply while broader market evidence remains weak or mixed.",
      realLifeExample: "A token breaks upward on one exchange, but spot volume is weak elsewhere and BTC is flat. The break happened, but the structure reading is not automatically clean.",
      commonMistake: "Thinking one crypto chart represents the entire market structure.",
      quickNote: "In crypto, structure must be audited across market layers."
    }
  },
  {
    type: "visual_intro",
    title: "Crypto Swings Can Come From Different Engines",
    label: "Swing Source",
    visualKey: "crypto-swing-source-map",
    body: "Crypto swings are visible turning points, but the source of the swing matters. A swing high or low may come from spot participation, perpetual pressure, liquidations, thin liquidity, or event movement. The trained learner marks the swing, then audits its quality.",
    context: {
      keyTerms: [
        { term: "Swing High", definition: "A visible high point where price turned downward." },
        { term: "Swing Low", definition: "A visible low point where price turned upward." },
        { term: "Swing Source", definition: "The market condition that may have created a swing." },
        { term: "Perp Pressure", definition: "Movement influenced by perpetual contract activity." },
        { term: "Liquidation Sweep", definition: "Movement accelerated by forced position closures." },
        { term: "Thin-Liquidity Wick", definition: "A sharp move created in weak market depth." }
      ],
      whyThisMatters: "If a learner marks a swing without checking what created it, they may treat mechanical movement as clean structure.",
      realLifeExample: "A token drops sharply and forms a swing low, but the move came during a liquidation cascade. The swing exists, but the learner should be cautious before treating it as clean support.",
      commonMistake: "Assuming every swing point is equally meaningful.",
      quickNote: "Mark the swing. Then audit the source."
    }
  },
  {
    type: "visual_intro",
    title: "BTC Structure vs Altcoin Structure",
    label: "Market Context",
    visualKey: "crypto-btc-alt-structure-context",
    body: "An altcoin can build its own structure, but BTC context can change the quality of that reading. If an altcoin is breaking upward while BTC is weak or near resistance, the structure may be active but not fully aligned. A trained learner checks whether the move is asset-specific or market-supported.",
    context: {
      keyTerms: [
        { term: "BTC Context", definition: "Bitcoin’s broader structure and condition as a market reference." },
        { term: "Altcoin Structure", definition: "The visible price structure of a non-BTC crypto asset." },
        { term: "Market-Supported Move", definition: "A move supported by broader crypto context." },
        { term: "Asset-Specific Move", definition: "A move mainly visible on one asset." },
        { term: "Context Conflict", definition: "When the asset structure and broader market context do not align." }
      ],
      whyThisMatters: "Many altcoin moves look strong until BTC context weakens. Learners need to know whether structure is supported or isolated.",
      realLifeExample: "SOL makes higher highs on 15m, but BTC is still below resistance and not confirming. SOL may be active, but the broader reading is mixed.",
      commonMistake: "Reading an altcoin structure as isolated strength without checking BTC context.",
      quickNote: "Altcoin structure is stronger when broader market context supports it."
    }
  },
  {
    type: "visual_intro",
    title: "Spot, Perp, and DEX Structure Can Disagree",
    label: "Venue Structure",
    visualKey: "crypto-venue-structure-disagreement",
    body: "Crypto structure can differ across venues. A perp chart may show a strong break while spot remains weaker. A DEX wick may be venue-specific. A trained learner does not treat one venue’s structure as the whole market until other evidence supports it.",
    context: {
      keyTerms: [
        { term: "Spot Structure", definition: "Structure built from actual asset trades on a spot venue." },
        { term: "Perp Structure", definition: "Structure built from perpetual contract price movement." },
        { term: "DEX Structure", definition: "Structure visible through decentralized swap/liquidity pool pricing." },
        { term: "Venue-Specific Move", definition: "Movement strong on one venue but not broadly confirmed." },
        { term: "Cross-Venue Confirmation", definition: "Support across multiple relevant markets." }
      ],
      whyThisMatters: "Crypto learners often trust the most dramatic venue. That is dangerous when the move is not broadly confirmed.",
      realLifeExample: "A perp chart breaks above a resistance area, but spot charts barely move and DEX liquidity remains thin. The structure is not clean yet.",
      commonMistake: "Treating a perp-only break as full market confirmation.",
      quickNote: "Crypto structure is cleaner when venues agree."
    }
  },
  {
    type: "visual_intro",
    title: "Trend and Range in Crypto Assets",
    label: "Crypto Structure Types",
    visualKey: "crypto-trend-range-structure",
    body: "A crypto asset can trend, range, or become unclear. Trend structure comes from swing relationships. Range structure comes from repeated movement between upper and lower areas. Fast candles and dramatic wicks do not replace structure classification.",
    context: {
      keyTerms: [
        { term: "Crypto Trend", definition: "Directional structure built through swing relationships." },
        { term: "Crypto Range", definition: "Structure where price rotates between upper and lower areas." },
        { term: "Wick Noise", definition: "Sharp candle extensions that may not change structure." },
        { term: "Unclear Structure", definition: "A condition where the asset does not show clean trend or range behavior." },
        { term: "Structure Classification", definition: "Naming what price is building." }
      ],
      whyThisMatters: "Crypto movement can look dramatic even when the structure has not changed. Classification stops the learner from reacting to every sharp candle.",
      realLifeExample: "A token produces several strong green candles but remains inside the same higher-timeframe range. The move is active, but the broader structure is still range-bound.",
      commonMistake: "Calling every fast crypto push a new trend.",
      quickNote: "Volatility is not structure. Structure is built through relationships."
    }
  },
  {
    type: "visual_intro",
    title: "Liquidity Zones, Not Magic Lines",
    label: "Liquidity Areas",
    visualKey: "crypto-liquidity-zones",
    body: "Crypto reaction areas are not magic lines. They are zones where price has previously changed behavior, where liquidity may be sitting, or where traders may react. A trained learner watches behavior around the zone instead of assuming the line must hold.",
    context: {
      keyTerms: [
        { term: "Liquidity Zone", definition: "An area where orders, reactions, or market interest may cluster." },
        { term: "Reaction Area", definition: "A zone where price behavior has previously changed." },
        { term: "Wick Through", definition: "Price briefly moves through an area without clean follow-through." },
        { term: "Liquidity Cluster", definition: "A concentration of potential orders or interest around an area." },
        { term: "Zone-Based Reading", definition: "Reading an area flexibly instead of as one exact price." }
      ],
      whyThisMatters: "Crypto wicks can easily pass through exact lines. If learners use rigid lines, they will misclassify many moves.",
      realLifeExample: "ETH pushes below a prior low, wicks through the area, then quickly returns above it. A trained learner audits whether that was a sweep, a failed break, or unstable movement.",
      commonMistake: "Expecting crypto support and resistance to behave like perfect walls.",
      quickNote: "In crypto, areas matter more than perfect lines."
    }
  },
  {
    type: "visual_intro",
    title: "Perp-Driven Breaks and False Structure",
    label: "Perp Pressure",
    visualKey: "crypto-perp-break-false-structure",
    body: "A perp-driven break can look powerful, but it is not automatically clean structure. Perpetual markets can move through leverage pressure, funding imbalance, or liquidations. A trained learner checks whether spot, BTC context, and follow-through support the break.",
    context: {
      keyTerms: [
        { term: "Perp-Driven Break", definition: "A break strongly influenced by perpetual contract movement." },
        { term: "False Structure", definition: "A structure reading that weakens because the move fails or lacks confirmation." },
        { term: "Spot Confirmation", definition: "Support from actual spot market movement." },
        { term: "Leverage Pressure", definition: "Movement influenced by leveraged positioning." },
        { term: "Funding Imbalance", definition: "Pressure from long/short positioning costs or imbalance." },
        { term: "Follow-Through", definition: "What price does after the break." }
      ],
      whyThisMatters: "Crypto learners often trust the most dramatic perp move, but leverage can exaggerate structure.",
      realLifeExample: "BTC perps break above a local range, but spot remains weak and price quickly returns inside. The break is not clean confirmation.",
      commonMistake: "Assuming a perp breakout proves true market structure.",
      quickNote: "Perp movement needs confirmation before it becomes structure."
    }
  },
  {
    type: "visual_intro",
    title: "Thin Liquidity, Wicks, and Failed Breaks",
    label: "Break Failure",
    visualKey: "crypto-thin-liquidity-failed-break",
    body: "Thin liquidity can make crypto structure look stronger than it is. Price may move beyond an area, print a dramatic wick, and return quickly. A trained learner checks whether the move held, closed well, and gained follow-through before calling it structure change.",
    context: {
      keyTerms: [
        { term: "Thin Liquidity", definition: "A condition where limited available orders allow price to move sharply." },
        { term: "Failed Break", definition: "Price moves beyond an area but cannot hold." },
        { term: "Failed Hold", definition: "Price cannot remain beyond the broken area." },
        { term: "Close Location", definition: "Where the candle closes inside its full range." },
        { term: "Structure Failure", definition: "When movement does not create lasting structural change." }
      ],
      whyThisMatters: "Crypto creates many dramatic candles. Without liquidity awareness, learners may trust moves that were produced by weak depth.",
      realLifeExample: "A small-cap token breaks above resistance during a quiet period, wicks hard, then closes back below. The visual break happened, but structure did not cleanly change.",
      commonMistake: "Calling every wick beyond a level a confirmed breakout.",
      quickNote: "A wick through the level is not enough. Structure needs hold and follow-through."
    }
  },
  {
    type: "visual_intro",
    title: "Higher-Timeframe Crypto Location Comes First",
    label: "Crypto Location",
    visualKey: "crypto-htf-location-first",
    body: "A lower-timeframe crypto move can be active and still incomplete. The higher timeframe shows where the asset is located in the broader structure. A trained learner checks location before trusting local movement.",
    context: {
      keyTerms: [
        { term: "Higher-Timeframe Location", definition: "Where the asset sits in broader structure." },
        { term: "Major Reaction Area", definition: "A zone where price has previously changed behavior." },
        { term: "Local Move", definition: "Shorter-timeframe movement inside broader context." },
        { term: "Context-Limited Move", definition: "A move that is active but restricted by broader structure." },
        { term: "Broader Structure", definition: "The larger chart condition surrounding local movement." }
      ],
      whyThisMatters: "Crypto speed makes local movement feel more important than it may be. Higher-timeframe location prevents shallow readings.",
      realLifeExample: "A token pumps on 15m, but the 4H chart is still pressing into a previous rejection area. The move is active, but the reading is not automatically clean.",
      commonMistake: "Letting a fast lower-timeframe crypto move override higher-timeframe structure.",
      quickNote: "In crypto, speed does not erase location."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Broad Break or Venue-Specific Trap?",
    label: "Practice Drill",
    visualKey: "crypto-structure-break-drill",
    body: "This drill tests whether you can audit crypto structure across venue, liquidity, BTC context, and higher-timeframe location. A break on one venue is only the first clue. The trained learner checks whether the structure is broadly supported or only locally dramatic.",
    taskData: {
      type: "choice_block",
      question: "A token breaks above a local resistance area on a perpetual exchange. The perp candle is strong, but spot volume is weak, BTC is flat, and the DEX pool shows a large wick with thin liquidity. The 4H chart is still inside a broader range. What is the disciplined crypto structure reading?",
      options: [
        {
          id: "A",
          text: "It is a confirmed breakout because the perp chart broke resistance.",
          isCorrect: false,
          feedback: "Wrong: A perp break alone does not prove full-market structure change."
        },
        {
          id: "B",
          text: "It is definitely bearish because DEX liquidity is thin.",
          isCorrect: false,
          feedback: "Wrong: Thin DEX liquidity adds caution, but it does not automatically create a bearish reading."
        },
        {
          id: "C",
          text: "The break is active but mixed because spot, BTC context, DEX liquidity, and higher-timeframe structure do not fully support it.",
          isCorrect: true,
          feedback: "Correct! The perp break is active, but the supporting evidence is weak or mixed. Spot is not confirming strongly, BTC is flat, DEX liquidity is thin, and the 4H chart remains range-bound. This is mixed evidence, not a clean structure change."
        },
        {
          id: "D",
          text: "The higher timeframe does not matter because crypto moves fast.",
          isCorrect: false,
          feedback: "Wrong: Crypto speed makes higher-timeframe location more important, not less important."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Venue-Specific Break", definition: "A break visible strongly on one venue but not broadly confirmed." },
        { term: "Mixed Evidence", definition: "Some clues support the move while other clues reduce clarity." },
        { term: "Spot Confirmation", definition: "Support from actual spot market activity." },
        { term: "Cross-Venue Support", definition: "Evidence across multiple market venues." },
        { term: "Higher-Timeframe Limitation", definition: "Broader structure that weakens a local reading." },
        { term: "Break Audit", definition: "Reviewing venue, liquidity, close, follow-through, and context." }
      ],
      whyThisMatters: "Crypto often creates dramatic one-venue moves. This drill trains learners to classify quality instead of reacting to drama.",
      realLifeExample: "A token breaks up on perps while spot barely follows and BTC is flat. A rushed learner sees breakout. A trained learner marks it as mixed until broader evidence supports it.",
      commonMistake: "Calling one venue’s break a full crypto market breakout.",
      quickNote: "One venue can move. Structure needs support."
    }
  },
  {
    type: "debrief",
    title: "Crypto Debrief: Reading Structure Through Venue, Liquidity, and Context",
    label: "Roadway Debrief",
    visualKey: "crypto-structure-roadway-debrief",
    body: "You are no longer reading crypto structure as one chart and one breakout. You now understand that crypto structure must be audited through venue, liquidity, BTC context, swing quality, break quality, and higher-timeframe location. The job is to classify evidence, not react to the loudest candle.\n\n### Your Crypto Competencies:\n\n* [x] Audit **Asset Behavior** across fragmented venues\n* [x] Audit **Swing Quality** and identify the underlying engine\n* [x] Layer **BTC Context** as a major market support filter\n* [x] Identify and resolve **Cross-Venue Disagreements**\n* [x] Use **Liquidity Zones** rather than rigid lines\n* [x] Filter out leverage-driven **Perp-Driven Breaks**\n* [x] Identify **Thin-Liquidity Wicks** and failed structure wicks\n* [x] Prioritize **HTF Location** and establish evidence alignment\n\n**Next**: Level 0 Synthesis & Verification.",
    context: {
      keyTerms: [
        { term: "Crypto Structure", definition: "The arrangement of price movement in a crypto asset." },
        { term: "Venue Check", definition: "Reviewing where the structure is forming." },
        { term: "Liquidity Zone", definition: "Area where orders, reactions, or market interest may cluster." },
        { term: "BTC Context", definition: "Bitcoin’s broader condition as market reference." },
        { term: "Break Quality", definition: "How reliable a break appears after review." },
        { term: "Cross-Venue Confirmation", definition: "Evidence across multiple relevant markets." },
        { term: "Reading Quality", definition: "Clear, mixed, or unclear." }
      ],
      whyThisMatters: "Crypto structure reading protects learners from chasing one chart, one wick, or one perp-driven move without broader evidence.",
      realLifeExample: "Two learners see the same crypto breakout. One reacts to the candle. The trained learner checks spot support, perp pressure, DEX liquidity, BTC context, and higher-timeframe location.",
      commonMistake: "Leaving with breakout language but no process for auditing structure quality.",
      quickNote: "Crypto structure is strongest when venue, liquidity, and context align."
    }
  }
];
