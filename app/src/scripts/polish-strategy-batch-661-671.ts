import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode } from "../lib/strategy-curriculum";
import {
  BATCH_661_671_TARGETS,
  getCorrectFamily,
  getCorrectLevel,
  namesMatchExpected,
  overrideVisualModel,
} from "./strategy-override-rules";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";

type TeachingSpec = {
  sequenceNumber: number;
  difficulty: "Foundational" | "Intermediate" | "Advanced";
  assetLanguage: string;
  simple: string;
  whyExists: string;
  whyUseful: string;
  context: string;
  whenToUse: string;
  whenNotToUse: string;
  markets: string;
  sessions: string;
  timeframes: string;
  prerequisite: string;
  confirm: string;
  invalid: string;
  risk: string;
  reference: string;
  manage: string;
  trap: string;
  mistake: string;
  sandbox: string;
  example: string;
  visualGoal: string;
  visualSetup: string;
  skills: string[];
  relatedLessons: string[];
  steps: Array<[string, string]>;
  checks: Array<[string, string]>;
};

const SPECS: Record<number, TeachingSpec> = {
  661: {
    sequenceNumber: 207,
    difficulty: "Advanced",
    assetLanguage: "Crypto exchange flow, venue depth, slippage, and spread percentage.",
    simple: "Exchange Inflow Exhaustion teaches the learner to watch whether a large transfer toward exchanges actually creates follow-through or gets absorbed.",
    whyExists: "It exists because crypto exchange inflow can warn about possible selling pressure, but the useful lesson is whether that pressure fails to push price further.",
    whyUseful: "It trains learners to separate a raw on-chain transfer from a completed market read that also needs venue depth, spot response, and fresh wallet labels.",
    context: "Use it when an exchange inflow spike appears, price stops extending after the transfer, and order-book depth shows absorption instead of clean continuation.",
    whenToUse: "Use the lesson when inflow timing, price response, venue depth, and spread percentage can all be checked in the same review window.",
    whenNotToUse: "Skip it when wallet labels are stale, the transfer is internal exchange movement, or liquidity is too thin for a clean read.",
    markets: "Crypto spot and perpetual venues where exchange flow, venue depth, slippage, and spread percentage can be compared.",
    sessions: "Use active crypto windows with enough venue participation to compare inflow and price response.",
    timeframes: "15m to 4H crypto review charts with a matching on-chain inflow panel.",
    prerequisite: "The learner should know exchange inflow, wallet labels, spot depth, slippage, spread percentage, and absorption.",
    confirm: "Confirmation is a fresh inflow spike followed by failed downside continuation, visible absorption, and improving depth.",
    invalid: "The read is invalidated when fresh inflows continue and price accepts lower levels with expanding venue pressure.",
    risk: "Use simulated exposure only; record depth, slippage, and spread percentage before judging the classroom read.",
    reference: "The educational reference is the absorption area after the inflow spike and the prior structure that price fails to break cleanly.",
    manage: "Keep checking whether new inflow keeps arriving or whether exchange pressure fades after the absorption area forms.",
    trap: "The main trap is treating every inflow spike as selling pressure even when the wallet label is stale or price absorbs the flow.",
    mistake: "Learner mistakes include ignoring venue depth, reading internal transfers as new supply, and skipping spread percentage.",
    sandbox: "Mark the inflow spike, wallet-label timestamp, spot response, absorption area, venue depth, stale-label trap, and spread percentage.",
    example: "A BTC classroom chart shows a fresh exchange inflow spike while price tests a prior low. Instead of accepting lower levels, price stalls, depth improves, and spread percentage stays controlled. The learner labels this as possible inflow exhaustion only after the transfer, price response, and venue depth agree.",
    visualGoal: "Show exchange inflow, failed continuation, absorption, venue depth, and stale-wallet-label trap.",
    visualSetup: "An on-chain inflow panel sits above a crypto price panel with the exhaustion area and venue-depth notes aligned.",
    skills: ["on-chain flow audit", "venue-depth reading", "crypto execution caution"],
    relatedLessons: ["8.13 Crypto Performance & On-Chain Audits", "9.11 Multi-Exchange Liquidity Auditing"],
    steps: [
      ["verify the exchange inflow spike and wallet-label timestamp", "The learner checks whether the data source is fresh enough to use."],
      ["compare price response after the transfer", "A transfer matters only if price behavior reacts in a readable way."],
      ["review venue depth and spread percentage", "Crypto flow reads need execution-condition context."],
      ["label absorption or continuation", "The lesson separates exhaustion from accepted pressure."],
    ],
    checks: [
      ["fresh wallet label checked", "Stale labels can mislead."],
      ["exchange inflow spike marked", "The on-chain event is visible."],
      ["price follow-through reviewed", "Flow needs price response."],
      ["venue depth inspected", "Thin books distort the read."],
      ["spread percentage recorded", "Crypto cost context stays explicit."],
    ],
  },
  662: {
    sequenceNumber: 602,
    difficulty: "Foundational",
    assetLanguage: "Forex pair structure, session context, spread, and pip distance.",
    simple: "Single Moving-Average Filter teaches the learner to use one average as a trend filter instead of treating every candle above or below it as a complete setup.",
    whyExists: "It exists because a single average can organize trend direction, but it needs slope, close quality, and pair context to be useful.",
    whyUseful: "It shows the learner how a simple filter can keep chart reading structured without adding a second average or extra indicators.",
    context: "Use it when a Forex pair is either holding above a rising average or below a falling average during a liquid session.",
    whenToUse: "Use the lesson when the average slope, completed close, spread, and pip distance can all be marked before the read.",
    whenNotToUse: "Skip it when price is chopping through the average or the session spread makes the filter too noisy.",
    markets: "Major Forex pairs with stable spreads and clear candle closes around the average.",
    sessions: "London or New York windows where spread and pair movement are visible.",
    timeframes: "15m, 1H, or 4H charts using one clearly labeled moving average.",
    prerequisite: "The learner should know candle close, slope, spread, pip distance, and basic trend versus range context.",
    confirm: "Confirmation is a completed close on the correct side of the average while the average slope agrees with the trend read.",
    invalid: "The filter read is invalidated when price closes back through the average and the slope flattens into chop.",
    risk: "Use pip distance from the average to the structure line as an educational invalidation measurement.",
    reference: "The educational reference is the next structure area in the direction of the filter after the close is accepted.",
    manage: "Keep the lesson focused on one average; do not add a crossover rule after the fact.",
    trap: "The trap is treating a small wick above the average as trend agreement while the average is flat.",
    mistake: "Learner mistakes include ignoring slope, reading unfinished candles, and turning a one-average filter into a crossover lesson.",
    sandbox: "Mark the moving average, slope, completed close, spread, pip distance, whipsaw area, and invalidation close.",
    example: "EUR/USD holds above a rising 50-period average during London. The learner waits for a completed candle close above the average, checks that spread is normal, and records pip distance to the invalidation close. The lesson remains a filter read, not a crossover exercise.",
    visualGoal: "Show one moving average, slope, completed close, spread, pip distance, and whipsaw trap.",
    visualSetup: "A Forex price panel shows one average with accepted closes on one side and a whipsaw zone through the line.",
    skills: ["single-indicator filtering", "trend versus chop reading", "Forex spread review"],
    relatedLessons: ["2.4 Market Structure: Trend vs Range", "2.9 Breakouts vs Failed Breaks"],
    steps: [
      ["plot one moving average only", "The lesson stays focused on a single filter."],
      ["read the slope before the candle", "Slope explains whether the filter has trend context."],
      ["wait for a completed close", "Unfinished candles can cross back through the line."],
      ["measure spread and pip distance", "Forex scale and cost stay visible."],
    ],
    checks: [
      ["one average is visible", "No hidden crossover rule."],
      ["slope agrees with the read", "Flat averages warn about chop."],
      ["completed close is marked", "The candle is finished."],
      ["spread is acceptable for the pair", "Cost context matters."],
      ["pip distance is recorded", "Forex scale is explicit."],
    ],
  },
  663: {
    sequenceNumber: 239,
    difficulty: "Intermediate",
    assetLanguage: "Gold seasonality, macro context, wick behavior, and point/dollar distance.",
    simple: "Q1 Seasonal Demand Surge teaches the learner to treat a seasonal Gold tendency as context that still needs current structure and macro confirmation.",
    whyExists: "It exists because Gold can show recurring demand patterns early in the year, but seasonality alone is not enough for a classroom read.",
    whyUseful: "It helps learners combine calendar tendency with present Gold structure, real-yield context, and wick behavior.",
    context: "Use it when the Q1 window is active, Gold structure is readable, and macro conditions do not directly conflict with the seasonal idea.",
    whenToUse: "Use the lesson when seasonal window, Gold structure, macro check, and point/dollar distance are all visible.",
    whenNotToUse: "Skip it when current macro pressure contradicts the seasonal tendency or Gold structure has already rejected the move.",
    markets: "Gold examples using XAU charts, seasonal window notes, real-yield or USD context, and point/dollar distance.",
    sessions: "Use Gold review windows after major event noise settles enough to compare structure and calendar context.",
    timeframes: "4H or daily Gold review charts with a seasonal annotation panel.",
    prerequisite: "The learner should understand calendar tendency, Gold structure, macro conflict, wick behavior, and point/dollar scale.",
    confirm: "Confirmation is a completed Gold close that agrees with the seasonal window and does not conflict with the macro check.",
    invalid: "The read is invalidated when Gold rejects the seasonal direction or macro pressure turns clearly against it.",
    risk: "Use point/dollar distance to mark the structure that would show the seasonal read is no longer useful.",
    reference: "The educational reference is the next Gold structure zone inside the Q1 review window.",
    manage: "Keep seasonality as a context label and update the macro conflict check before judging each new candle.",
    trap: "The trap is assuming Q1 demand must appear even when current Gold structure and macro inputs disagree.",
    mistake: "Learner mistakes include using old seasonal averages as certainty, ignoring wick rejection, and skipping macro context.",
    sandbox: "Mark the Q1 window, Gold structure, macro conflict check, wick reaction, point/dollar distance, and seasonality-only trap.",
    example: "Gold trades inside a Q1 review window while real yields soften and price holds above a prior structure area. The learner marks the calendar context but waits for a completed close and wick acceptance before calling the seasonal idea useful for study.",
    visualGoal: "Show Q1 window, Gold structure, macro agreement, point/dollar distance, and seasonality-only trap.",
    visualSetup: "A Gold chart shows the seasonal window shaded with structure and macro-context labels beside price.",
    skills: ["Gold seasonal context", "macro conflict review", "calendar-based scenario audit"],
    relatedLessons: ["6.12 Gold Scenario Checklists", "6.2 HTF Narrative Anchors"],
    steps: [
      ["mark the Q1 seasonal window", "The calendar context must be explicit."],
      ["compare current Gold structure", "Seasonality needs price agreement."],
      ["check real-yield or USD conflict", "Macro context can override the seasonal idea."],
      ["label wick rejection and invalidation", "Gold structure still decides the read."],
    ],
    checks: [
      ["Q1 window is active", "Calendar context is present."],
      ["Gold structure agrees", "Price must support the idea."],
      ["macro conflict is checked", "Seasonality is not enough."],
      ["point/dollar distance is measured", "Gold scale is clear."],
      ["seasonality-only trap is labeled", "Calendar tendency can fail."],
    ],
  },
  664: {
    sequenceNumber: 603,
    difficulty: "Foundational",
    assetLanguage: "Forex pair structure, ADX strength, directional lines, session context, spread, and pip distance.",
    simple: "ADX Trend Strength Filter teaches the learner to separate trend strength from direction by reading ADX together with +DI and -DI.",
    whyExists: "It exists because ADX can rise during strong movement, but the learner still needs directional context and price structure.",
    whyUseful: "It prevents the common error of using ADX as direction when it only describes strength.",
    context: "Use it when a Forex pair has readable structure and ADX is either building strength or warning that the pair is still choppy.",
    whenToUse: "Use the lesson when ADX slope, +DI/-DI direction, completed price structure, spread, and pip distance are visible.",
    whenNotToUse: "Skip it when ADX is low and flat or the directional lines are crossing repeatedly inside a range.",
    markets: "Major Forex pairs where ADX, directional lines, session behavior, spread, and pip distance can be studied cleanly.",
    sessions: "London and New York windows with enough movement to compare strength and structure.",
    timeframes: "15m or 1H charts with ADX and +DI/-DI shown under price.",
    prerequisite: "The learner should know trend structure, ADX strength, +DI/-DI direction, spread, and pip distance.",
    confirm: "Confirmation is rising ADX with the directional line matching the completed Forex structure.",
    invalid: "The read is invalidated when ADX falls back into chop or the opposite directional line takes control.",
    risk: "Use pip distance to the structure invalidation line; ADX does not replace the price boundary.",
    reference: "The educational reference is the next structure zone after ADX and directional lines agree.",
    manage: "Keep checking whether ADX is still rising or whether strength is fading into a choppy pair.",
    trap: "The trap is calling high ADX bullish or bearish without checking +DI, -DI, and price structure.",
    mistake: "Learner mistakes include treating ADX as direction, ignoring low-ADX chop, and skipping the spread check.",
    sandbox: "Mark ADX line, +DI/-DI direction, price structure, low-ADX chop area, spread, pip distance, and invalidation.",
    example: "GBP/USD breaks from a range during London while +DI stays above -DI and ADX rises from a low base. The learner records that strength is building only because the directional line and price structure agree.",
    visualGoal: "Show ADX strength, +DI/-DI direction, price-structure agreement, low-ADX chop, and pip distance.",
    visualSetup: "A Forex price panel sits above ADX and directional-line panels with strength and chop zones labeled.",
    skills: ["ADX strength reading", "directional-line separation", "Forex structure audit"],
    relatedLessons: ["2.4 Market Structure: Trend vs Range", "2.6 The Trend Fallacy"],
    steps: [
      ["read price structure first", "ADX should not replace structure."],
      ["check ADX slope and level", "Strength must be building or clearly weak."],
      ["compare +DI and -DI direction", "Direction comes from the directional lines."],
      ["record spread and pip distance", "Forex conditions stay measurable."],
    ],
    checks: [
      ["ADX slope is marked", "Strength is visible."],
      ["+DI/-DI direction is clear", "Direction is not guessed."],
      ["price structure agrees", "Indicator and chart align."],
      ["low-ADX chop is labeled", "Weak conditions are avoided."],
      ["spread and pip distance are recorded", "Forex scale is clear."],
    ],
  },
  665: {
    sequenceNumber: 604,
    difficulty: "Foundational",
    assetLanguage: "Forex pair structure, MACD line, trigger line, histogram, session context, spread, and pip distance.",
    simple: "MACD Trend-Following teaches the learner to study momentum continuation by comparing the MACD line, trigger line, histogram, and zero baseline.",
    whyExists: "It exists because MACD can show whether trend momentum is building or fading, but it needs price structure and session context.",
    whyUseful: "It gives learners a clean way to connect momentum evidence with Forex structure without relying on one crossover alone.",
    context: "Use it when a Forex pair is trending and MACD structure shows momentum agreement near the zero baseline or above it.",
    whenToUse: "Use the lesson when MACD line, trigger line, histogram bars, price structure, spread, and pip distance can all be marked.",
    whenNotToUse: "Skip it when MACD is flat around the baseline or histogram bars fade while price is late in the move.",
    markets: "Major Forex pairs with stable spread, readable trend structure, and clean MACD histogram behavior.",
    sessions: "London or New York windows where pair momentum and spread can be compared.",
    timeframes: "15m, 1H, or 4H charts with MACD below price.",
    prerequisite: "The learner should know trend structure, MACD line, trigger line, histogram, zero baseline, spread, and pip distance.",
    confirm: "Confirmation is MACD line and trigger line agreement with histogram expansion and completed price structure.",
    invalid: "The read is invalidated when histogram fades, MACD returns through the baseline, or price closes back through structure.",
    risk: "Use pip distance to the price invalidation line; MACD is evidence, not the boundary.",
    reference: "The educational reference is the next structure zone after MACD and price agree.",
    manage: "Keep watching histogram behavior because fading bars can warn that the trend read is losing momentum.",
    trap: "The trap is chasing a late crossover after histogram momentum has already started fading.",
    mistake: "Learner mistakes include ignoring the zero baseline, reading one histogram bar alone, and skipping spread context.",
    sandbox: "Mark MACD line, trigger line, histogram, zero baseline, price structure, histogram fade trap, spread, and pip distance.",
    example: "EUR/JPY trends higher during London, MACD holds above the zero baseline, and histogram bars expand after a pullback. The learner studies the continuation only while price structure and MACD both agree.",
    visualGoal: "Show MACD line, trigger line, histogram bars, zero baseline, trend continuation, and histogram fade trap.",
    visualSetup: "A Forex trend panel sits above MACD structure with the baseline, histogram expansion, and fade trap labeled.",
    skills: ["MACD structure reading", "momentum continuation audit", "Forex session context"],
    relatedLessons: ["2.4 Market Structure: Trend vs Range", "2.6 The Trend Fallacy"],
    steps: [
      ["mark the Forex trend structure", "MACD should support structure, not replace it."],
      ["compare MACD line with trigger line", "The learner checks line agreement."],
      ["read histogram bars around the zero baseline", "Momentum quality must be visible."],
      ["record spread and pip distance", "Forex scale stays measurable."],
    ],
    checks: [
      ["MACD line is visible", "Momentum line is marked."],
      ["trigger line is visible", "Line agreement can be checked."],
      ["histogram bars are expanding", "Momentum is not fading."],
      ["zero baseline is labeled", "Context is clear."],
      ["spread and pip distance are recorded", "Forex cost and scale are explicit."],
    ],
  },
  666: {
    sequenceNumber: 208,
    difficulty: "Advanced",
    assetLanguage: "Crypto spot/perpetual legs, funding interval, basis, collateral, venue depth, slippage, and spread percentage.",
    simple: "Funding Rate Arbitrage (Delta Neutral) teaches the learner to compare equalized spot and perpetual legs while auditing funding, basis, and execution risk.",
    whyExists: "It exists because funding can create a cash-flow difference between spot and perpetual markets, but the structure still carries fees, basis, collateral, and venue risk.",
    whyUseful: "It shows learners why delta-neutral does not mean risk-free and why every leg needs a funding, fee, and depth review.",
    context: "Use it when spot and perpetual exposure can be matched, funding is measurable, and both venues have enough depth for a classroom comparison.",
    whenToUse: "Use the lesson when funding interval, basis, fee ledger, rebalance drift, liquidation buffer, and spread percentage are visible.",
    whenNotToUse: "Skip it when basis is unstable, borrow or collateral cost is unknown, or venue depth is too thin.",
    markets: "Crypto spot and perpetual venues where funding, basis, collateral, slippage, and spread percentage can be audited.",
    sessions: "Use crypto funding windows with clear settlement timing and observable venue depth.",
    timeframes: "Funding-interval dashboards with 15m to 1H price panels for leg drift review.",
    prerequisite: "The learner should know spot/perpetual exposure, funding interval, basis, fees, collateral, liquidation buffer, and venue depth.",
    confirm: "Confirmation is equalized spot and perpetual legs with funding and basis still favorable after fees and slippage.",
    invalid: "The structure is invalidated when basis widens against the hedge, funding flips, or collateral risk breaches the buffer.",
    risk: "Use a simulated ledger for fees, borrow, slippage, liquidation buffer, and spread percentage before judging the structure.",
    reference: "The educational reference is the funding-versus-cost ledger and the rebalance drift band.",
    manage: "Review both legs after each funding interval and label any drift before it becomes hidden directional exposure.",
    trap: "The trap is calling the structure neutral while basis, fee drag, or venue risk quietly changes the exposure.",
    mistake: "Learner mistakes include ignoring funding flips, underestimating slippage, and failing to rebalance leg drift.",
    sandbox: "Mark spot leg, perpetual leg, funding interval, basis, fee ledger, liquidation buffer, venue depth, and drift trap.",
    example: "A BTC spot leg and equal-sized perpetual hedge are compared before a funding interval. The learner records funding, basis, taker fee, collateral buffer, and depth. The structure remains a classroom example only if the ledger still makes sense after all costs.",
    visualGoal: "Show matched spot/perpetual legs, funding ledger, basis, liquidation buffer, venue depth, and drift trap.",
    visualSetup: "A derivatives dashboard shows the two legs, funding interval, fee ledger, and rebalance drift band.",
    skills: ["delta-neutral structure audit", "funding and basis review", "crypto venue-risk control"],
    relatedLessons: ["9.11 Multi-Exchange Liquidity Auditing", "9.14 Institutional Capital Management"],
    steps: [
      ["match spot and perpetual exposure", "The structure begins with leg equality."],
      ["calculate funding, basis, and fees", "Cash-flow edge must survive costs."],
      ["check collateral and liquidation buffer", "Neutral exposure still has venue risk."],
      ["label rebalance drift and venue-depth trap", "Legs can stop matching."],
    ],
    checks: [
      ["spot and perpetual legs are equalized", "Directional exposure is controlled."],
      ["funding interval is marked", "Timing matters."],
      ["basis and fees are recorded", "Costs can erase the idea."],
      ["liquidation buffer is visible", "Collateral risk remains."],
      ["venue depth and spread percentage are checked", "Execution conditions matter."],
    ],
  },
  667: {
    sequenceNumber: 605,
    difficulty: "Foundational",
    assetLanguage: "Forex fast/slow moving averages, session context, spread, and pip distance.",
    simple: "Moving-Average Crossover Trend teaches the learner to compare fast and slow averages as a trend-continuation filter after price structure is already readable.",
    whyExists: "It exists because a crossover can organize trend change, but it becomes weak when used without slope, close quality, and price structure.",
    whyUseful: "It helps learners distinguish crossover agreement from late whipsaw after the move is already stretched.",
    context: "Use it when a Forex pair has a clear fast/slow average cross that agrees with trend structure during a liquid session.",
    whenToUse: "Use the lesson when fast average, slow average, crossover, completed close, spread, and pip distance are all visible.",
    whenNotToUse: "Skip it when averages are flat, crossing repeatedly, or price has already moved too far from structure.",
    markets: "Major Forex pairs with clean moving-average behavior and stable session spreads.",
    sessions: "London or New York windows where pair movement and spread can be compared.",
    timeframes: "15m, 1H, or 4H charts using fast and slow moving averages.",
    prerequisite: "The learner should know trend structure, moving-average slope, crossover timing, spread, and pip distance.",
    confirm: "Confirmation is the fast average crossing the slow average while price closes in agreement with structure.",
    invalid: "The read is invalidated when price closes back through the averages or the fast average recrosses quickly.",
    risk: "Use pip distance to the structure invalidation line; the crossover itself is not the boundary.",
    reference: "The educational reference is the next structure area after the crossover and price close agree.",
    manage: "Watch for recross and flat-slope conditions before treating the trend read as stable.",
    trap: "The trap is following a late crossover after a stretched move when the averages are lagging price.",
    mistake: "Learner mistakes include ignoring slope, chasing a late cross, and skipping the spread check.",
    sandbox: "Mark fast average, slow average, crossover, completed close, recross trap, spread, pip distance, and invalidation.",
    example: "USD/CAD holds a higher-low sequence and the fast average crosses above the slow average during New York. The learner waits for a completed candle close and records pip distance to the invalidation structure before judging the crossover.",
    visualGoal: "Show fast/slow moving averages, crossover area, completed close, spread, pip distance, and whipsaw trap.",
    visualSetup: "A Forex trend panel shows two averages, their crossover point, slope agreement, and recross warning.",
    skills: ["moving-average crossover reading", "trend continuation filter", "Forex spread review"],
    relatedLessons: ["2.4 Market Structure: Trend vs Range", "2.6 The Trend Fallacy"],
    steps: [
      ["mark fast and slow moving averages", "Both averages must be visible."],
      ["check slope and price structure", "The cross needs chart agreement."],
      ["wait for a completed close after the cross", "The learner avoids unfinished movement."],
      ["label recross and whipsaw area", "Crossover lag must be visible."],
    ],
    checks: [
      ["fast average is labeled", "Short-term line is visible."],
      ["slow average is labeled", "Baseline line is visible."],
      ["crossover has completed close", "Acceptance is checked."],
      ["whipsaw zone is marked", "Lag risk is visible."],
      ["spread and pip distance are recorded", "Forex scale is clear."],
    ],
  },
  668: {
    sequenceNumber: 240,
    difficulty: "Intermediate",
    assetLanguage: "Gold real yields, macro conflict, wick behavior, and point/dollar distance.",
    simple: "Real Yield Inversion Play teaches the learner to compare Gold response with real-yield direction instead of reading the chart alone.",
    whyExists: "It exists because Gold often reacts to real-yield pressure, but the relationship can lag, invert, or conflict during macro events.",
    whyUseful: "It gives learners a disciplined way to test whether Gold is responding to yield conditions or ignoring them.",
    context: "Use it when real-yield direction, Gold structure, and macro event timing can be compared in the same review window.",
    whenToUse: "Use the lesson when real yields move clearly and Gold structure confirms or rejects the macro read.",
    whenNotToUse: "Skip it when nominal yield, inflation expectation, or event timing is unclear.",
    markets: "Gold examples using XAU structure, real-yield proxy, macro event notes, wick behavior, and point/dollar distance.",
    sessions: "Use Gold windows after macro data settles enough to compare yield movement with price structure.",
    timeframes: "1H, 4H, or daily Gold charts with a real-yield comparison panel.",
    prerequisite: "The learner should understand nominal yields, inflation expectations, real yields, Gold structure, and point/dollar scale.",
    confirm: "Confirmation is Gold closing in a way that agrees with the real-yield direction after the macro input updates.",
    invalid: "The read is invalidated when Gold rejects the expected response or the real-yield move reverses.",
    risk: "Use point/dollar distance to mark the Gold structure that would disprove the macro read.",
    reference: "The educational reference is the Gold structure zone that price tests after real-yield direction changes.",
    manage: "Update the real-yield input timestamp and avoid using stale macro context after price has already reacted.",
    trap: "The trap is assuming Gold must move immediately when real yields change even though the response can be delayed or conflicted.",
    mistake: "Learner mistakes include using nominal yields alone, ignoring inflation expectations, and skipping Gold wick behavior.",
    sandbox: "Mark real-yield direction, Gold response, macro timestamp, conflict area, delayed-reaction trap, and point/dollar distance.",
    example: "Real yields turn lower while Gold holds a higher structure area after a macro release. The learner compares the timestamp, the Gold close, and wick behavior before labeling the inversion read as useful.",
    visualGoal: "Show real-yield direction, Gold structure response, conflict area, delayed reaction, and point/dollar distance.",
    visualSetup: "A Gold chart is paired with a real-yield line so learners can see agreement, lag, or conflict.",
    skills: ["Gold macro comparison", "real-yield reading", "macro conflict audit"],
    relatedLessons: ["6.12 Gold Scenario Checklists", "6.9 DXY Intermarket Verification"],
    steps: [
      ["mark real-yield direction and timestamp", "Macro input must be fresh."],
      ["compare Gold structure response", "Price must be checked against the macro read."],
      ["label agreement or conflict", "The relationship can invert or lag."],
      ["measure point/dollar invalidation", "Gold scale stays explicit."],
    ],
    checks: [
      ["real-yield input is fresh", "Stale macro data misleads."],
      ["Gold structure is marked", "Chart response is visible."],
      ["macro conflict is labeled", "The relationship can break."],
      ["delayed reaction trap is shown", "Timing can lag."],
      ["point/dollar distance is recorded", "Gold scale is clear."],
    ],
  },
  669: {
    sequenceNumber: 606,
    difficulty: "Foundational",
    assetLanguage: "Forex Supertrend band, volatility stop behavior, session context, spread, and pip distance.",
    simple: "Supertrend Volatility Stop teaches the learner to read a trailing volatility band as an invalidation guide, not as a stand-alone direction rule.",
    whyExists: "It exists because a Supertrend band can show where trend structure would be challenged after volatility is included.",
    whyUseful: "It helps learners understand why trailing invalidation must adjust when Forex volatility expands or contracts.",
    context: "Use it when a Forex pair is trending, the Supertrend band is visible, and price is respecting pullbacks without repeated flips.",
    whenToUse: "Use the lesson when band direction, completed pullback hold, spread, and pip distance can be marked.",
    whenNotToUse: "Skip it when price flips across the band repeatedly or the session spread distorts the stop distance.",
    markets: "Major Forex pairs with stable spread and visible Supertrend volatility band behavior.",
    sessions: "London or New York windows where trend movement and spread can be compared.",
    timeframes: "15m, 1H, or 4H charts with the Supertrend band shown near price.",
    prerequisite: "The learner should understand trailing invalidation, volatility bands, trend pullbacks, spread, and pip distance.",
    confirm: "Confirmation is price holding the band after a completed pullback while the band direction stays intact.",
    invalid: "The read is invalidated when price closes through the band and the Supertrend flips.",
    risk: "Use pip distance from price to the band as an educational trailing invalidation measurement.",
    reference: "The educational reference is the structure area that price approaches while the band trails behind it.",
    manage: "Keep the trailing line updated and label any flip-whipsaw before trusting the next read.",
    trap: "The trap is reacting to every band flip in a choppy pair without checking structure and spread.",
    mistake: "Learner mistakes include treating the band as a forecast, ignoring pip distance, and skipping session spread.",
    sandbox: "Mark Supertrend band, pullback hold, band flip, trailing invalidation area, spread, pip distance, and whipsaw trap.",
    example: "AUD/USD trends during London and pulls back toward the Supertrend band. The learner waits for a completed hold above the band, checks spread, and records pip distance to the trailing invalidation line.",
    visualGoal: "Show Supertrend band, pullback hold, trend flip, trailing invalidation, spread, and pip distance.",
    visualSetup: "A Forex price panel shows the Supertrend band trailing price with flip and whipsaw zones.",
    skills: ["Supertrend band reading", "trailing invalidation", "Forex volatility context"],
    relatedLessons: ["2.4 Market Structure: Trend vs Range", "2.9 Breakouts vs Failed Breaks"],
    steps: [
      ["mark the Supertrend volatility band", "The trailing line must be visible."],
      ["check trend structure and pullback quality", "Band read needs price context."],
      ["wait for completed hold or flip", "Unfinished candles can cross back."],
      ["record spread and pip distance", "Forex scale and cost matter."],
    ],
    checks: [
      ["Supertrend band is visible", "The trailing guide is marked."],
      ["pullback hold is completed", "Acceptance is checked."],
      ["flip area is labeled", "Invalidation is clear."],
      ["whipsaw trap is marked", "Chop risk is visible."],
      ["spread and pip distance are recorded", "Forex scale is explicit."],
    ],
  },
  670: {
    sequenceNumber: 607,
    difficulty: "Foundational",
    assetLanguage: "Forex Ichimoku cloud, Tenkan/Kijun relationship, session context, spread, and pip distance.",
    simple: "Ichimoku Cloud Logic teaches the learner to read the cloud as trend context with Tenkan, Kijun, and price location working together.",
    whyExists: "It exists because the cloud can organize trend and support/resistance context, but price location alone is incomplete.",
    whyUseful: "It helps learners avoid reducing Ichimoku to one colored cloud by requiring line relationship, cloud thickness, and completed close.",
    context: "Use it when a Forex pair has readable cloud structure, clear Tenkan/Kijun relationship, and normal session spread.",
    whenToUse: "Use the lesson when price location, cloud boundary, Tenkan/Kijun relationship, spread, and pip distance are visible.",
    whenNotToUse: "Skip it when price is inside a thick cloud or Tenkan and Kijun disagree without clear structure.",
    markets: "Major Forex pairs with clear Ichimoku cloud boundaries and stable spread.",
    sessions: "London or New York windows where completed closes around the cloud can be observed.",
    timeframes: "1H or 4H charts with the full Ichimoku structure visible.",
    prerequisite: "The learner should know Kumo cloud, Tenkan, Kijun, Chikou context, completed close, spread, and pip distance.",
    confirm: "Confirmation is a completed close outside the cloud with Tenkan/Kijun relationship supporting the structure.",
    invalid: "The read is invalidated when price closes back inside the cloud or the line relationship turns conflicted.",
    risk: "Use pip distance from the cloud boundary to the invalidation close as the classroom measurement.",
    reference: "The educational reference is the next structure zone beyond the cloud after the close is accepted.",
    manage: "Keep checking cloud thickness and line relationship before judging the next candle.",
    trap: "The trap is reading a cloud break while price is still inside a thick, indecisive cloud.",
    mistake: "Learner mistakes include ignoring Tenkan/Kijun, skipping Chikou context, and using a wick instead of a close.",
    sandbox: "Mark Kumo boundary, cloud thickness, Tenkan/Kijun relationship, Chikou context, spread, pip distance, and return-inside-cloud trap.",
    example: "USD/JPY closes above a thin Kumo during New York while Tenkan stays above Kijun. The learner checks spread and pip distance, then labels the cloud logic only after the completed close holds outside the cloud.",
    visualGoal: "Show Kumo boundary, cloud thickness, Tenkan/Kijun relationship, completed close, and return-inside-cloud trap.",
    visualSetup: "A Forex Ichimoku panel highlights cloud boundary, line relationship, and the close that accepts outside the cloud.",
    skills: ["Ichimoku cloud reading", "trend context audit", "Forex structure review"],
    relatedLessons: ["2.4 Market Structure: Trend vs Range", "2.9 Breakouts vs Failed Breaks"],
    steps: [
      ["mark cloud boundary and thickness", "The learner sees whether the cloud is readable."],
      ["compare Tenkan and Kijun relationship", "Line agreement gives context."],
      ["wait for completed close outside the cloud", "Wicks are not enough."],
      ["record spread and pip distance", "Forex scale stays explicit."],
    ],
    checks: [
      ["Kumo boundary is marked", "Cloud location is visible."],
      ["Tenkan/Kijun relationship is clear", "Line context is checked."],
      ["completed close is outside cloud", "Acceptance matters."],
      ["return-inside-cloud trap is labeled", "Failed cloud logic is visible."],
      ["spread and pip distance are recorded", "Forex scale is clear."],
    ],
  },
  671: {
    sequenceNumber: 608,
    difficulty: "Intermediate",
    assetLanguage: "Forex London session timing, pre-London range, spread, and pip distance.",
    simple: "London Session Momentum teaches the learner to compare the pre-London range with the first stable London expansion instead of chasing the first fast candle.",
    whyExists: "It exists because London can expand from the prior range, but the first move often includes spread widening and false starts.",
    whyUseful: "It helps learners organize session timing, range boundary, stable close, pullback, and pip distance in one clean lesson.",
    context: "Use it when the pre-London range is clear and London expansion produces a completed close outside that range.",
    whenToUse: "Use the lesson when range boundary, London timing, stable close, spread, pullback or hold, and pip distance can all be marked.",
    whenNotToUse: "Skip it when the range is messy, spread widens sharply, or the first expansion candle closes back inside the range.",
    markets: "Major Forex pairs that are active during London and show clear pre-session range structure.",
    sessions: "Late Asia into London open, then the first stable London review window.",
    timeframes: "5m, 15m, or 1H charts with the pre-London range and expansion candle visible.",
    prerequisite: "The learner should understand range high/low, London open timing, completed close, spread, and pip distance.",
    confirm: "Confirmation is a completed London close outside the pre-London range followed by a hold or controlled pullback.",
    invalid: "The read is invalidated when price closes back inside the pre-London range after the expansion.",
    risk: "Use pip distance from the expansion close to the failed return inside the range as the classroom invalidation measure.",
    reference: "The educational reference is the next London structure area after the range break and hold are visible.",
    manage: "Track whether the first expansion holds or turns into a false start before judging continuation.",
    trap: "The trap is chasing the first London candle while spread is wide and price has not closed outside the range.",
    mistake: "Learner mistakes include drawing the range after the break, ignoring spread widening, and judging momentum before the close.",
    sandbox: "Mark pre-London high/low, London open, first stable close, pullback or hold, false-start trap, spread, and pip distance.",
    example: "EUR/USD builds a tight pre-London range, then London prints a fast expansion candle. The learner waits for the candle to close outside the range, checks spread, and labels the pullback hold before studying momentum.",
    visualGoal: "Show pre-London range, London expansion close, pullback or hold, spread, pip distance, and false-start trap.",
    visualSetup: "A session chart shades the pre-London range and London window with expansion, retest, and failed-return areas.",
    skills: ["London session timing", "range breakout review", "Forex spread control"],
    relatedLessons: ["4.3 The London Open", "4.7 London Killzone"],
    steps: [
      ["mark the pre-London range before the open", "The boundary must be fixed in advance."],
      ["wait for the first stable London close", "The first fast candle can reverse."],
      ["check spread and pip distance", "Session cost and scale matter."],
      ["label pullback hold or false start", "Momentum needs acceptance."],
    ],
    checks: [
      ["pre-London range is fixed", "The level is not moved after the break."],
      ["London open is marked", "Timing is visible."],
      ["completed expansion close is present", "Acceptance is checked."],
      ["false-start trap is labeled", "Early movement can fail."],
      ["spread and pip distance are recorded", "Forex scale is explicit."],
    ],
  },
};

function buildLearningProfile(target: (typeof BATCH_661_671_TARGETS)[number], spec: TeachingSpec) {
  const level = getCorrectLevel(target.name, target.assetClass);
  const family = getCorrectFamily(target.name, "", target.assetClass);
  return {
    name: target.name,
    assetClass: target.assetClass,
    level,
    family,
    difficulty: spec.difficulty,
    skillDomains: spec.skills,
    relatedLessons: spec.relatedLessons,
    simpleExplanation: spec.simple,
    whyExists: spec.whyExists,
    whyUseful: spec.whyUseful,
    setupContext: spec.context,
    whenToUse: spec.whenToUse,
    whenNotToUse: spec.whenNotToUse,
    suitableMarkets: spec.markets,
    suitableSessions: spec.sessions,
    suitableTimeframes: spec.timeframes,
    prerequisiteKnowledge: spec.prerequisite,
    confirmationRules: spec.confirm,
    invalidationRules: spec.invalid,
    riskRules: spec.risk,
    targetLogic: spec.reference,
    tradeManagement: spec.manage,
    commonTraps: spec.trap,
    learnerMistakes: spec.mistake,
    setupLogic: spec.steps.map(([action, reason]) => ({ action, reason })),
    practiceChecklist: spec.checks.map(([item, reason]) => ({ item, reason })),
    sandboxInstructions: spec.sandbox,
    exampleWalkthrough: spec.example,
  };
}

function buildVisualModel(target: (typeof BATCH_661_671_TARGETS)[number], spec: TeachingSpec) {
  const base = {
    schemaVersion: "strategy-visual-v2",
    title: `${target.name} Visual Model`,
    chartTitle: `${target.name} Teaching Chart`,
    chartPurpose: spec.visualGoal,
    pedagogicalGoal: spec.visualGoal,
    marketConditionShown: spec.context,
    setupFormationShown: spec.visualSetup,
    entryOrActivationZone: `Classroom activation area for ${target.name} [${target.name} (${target.assetClass})]`,
    confirmationMarker: spec.confirm,
    invalidationZone: spec.invalid,
    targetZone: `Educational reference zone for ${target.name} [${target.name} (${target.assetClass})]`,
    trapZone: spec.trap,
    warningLabel: `Use ${target.name} as a structured classroom study with invalidation marked first.`,
    whatLearnerShouldNotice: `Notice the order of evidence, the completed confirmation marker, the invalidation area, and the trap that would weaken ${target.name}.`,
    mistakePrevented: `Prevents treating one clue as a complete ${target.name} lesson before context, confirmation, and invalidation are visible.`,
    interactionType: "hover",
    assetLanguage: spec.assetLanguage,
    requiredLabels: [],
    requiredZones: [],
  };
  return overrideVisualModel(target.name, target.assetClass, base);
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = BATCH_661_671_TARGETS.map(target => target.id);
  if (new Set(ids).size !== 11) throw new Error("Batch 661-671 target cardinality mismatch.");

  const strategies = await prisma.strategy.findMany({
    where: { id: { in: ids } },
    select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true },
  });
  const byId = new Map(strategies.map(strategy => [strategy.id, strategy]));
  const problems: string[] = [];

  for (const target of BATCH_661_671_TARGETS) {
    const strategy = byId.get(target.id);
    const spec = SPECS[target.ordinal];
    if (!strategy) problems.push(`Missing strategy ${target.ordinal}: ${target.id}`);
    if (!spec) problems.push(`Missing teaching spec ${target.ordinal}: ${target.name}`);
    if (strategy && !namesMatchExpected(strategy.name, target.name)) problems.push(`Name mismatch at ${target.ordinal}: expected ${target.name}, got ${strategy.name}`);
    if (strategy && strategy.assetClass !== target.assetClass) problems.push(`Asset mismatch at ${target.ordinal}: expected ${target.assetClass}, got ${strategy.assetClass}`);
  }
  if (problems.length > 0) throw new Error(`Batch 661-671 polish safety stop:\n${problems.join("\n")}`);

  const rows = BATCH_661_671_TARGETS.map(target => {
    const spec = SPECS[target.ordinal];
    const learningProfile = buildLearningProfile(target, spec);
    const visualModel = buildVisualModel(target, spec);
    return {
      ordinal: target.ordinal,
      id: target.id,
      name: target.name,
      asset: target.assetClass,
      oldSequence: byId.get(target.id)?.sequenceNumber,
      newSequence: spec.sequenceNumber,
      displayCode: getLegacyStrategyCode(target.assetClass, spec.sequenceNumber),
      level: learningProfile.level,
      family: learningProfile.family,
      visualCategory: visualModel.visualCategory,
      componentType: visualModel.componentType,
    };
  });

  console.log(dryRun ? "--- DRY RUN: Batch 661-671 polish preview ---" : "--- APPLYING Batch 661-671 polish ---");
  console.table(rows);

  if (dryRun) {
    console.log("Dry run complete: no database writes.");
    return;
  }

  for (const target of BATCH_661_671_TARGETS) {
    const spec = SPECS[target.ordinal];
    const learningProfile = buildLearningProfile(target, spec);
    const visualModel = buildVisualModel(target, spec);
    await prisma.strategy.update({
      where: { id: target.id },
      data: {
        sequenceNumber: spec.sequenceNumber,
        parentFamily: learningProfile.family,
        learningProfile,
        visualModel: visualModel as any,
        coreLogic: spec.simple,
        trapMechanics: spec.trap,
        tradeWalkthrough: spec.example,
      },
    });
  }

  console.log("Batch 661-671 polish applied.");
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
