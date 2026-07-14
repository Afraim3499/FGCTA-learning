import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode } from "../lib/strategy-curriculum";
import {
  BATCH_641_660_TARGETS,
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

type LessonTemplate = {
  displayName?: string;
  simple: string;
  why: string;
  useful: string;
  context: string;
  use: string;
  avoid: string;
  markets: string;
  sessions: string;
  timeframes: string;
  confirm: string;
  invalid: string;
  risk: string;
  reference: string;
  manage: string;
  traps: string;
  mistakes: string;
  prerequisites: string;
  sandbox: string;
  setupSteps: Array<[string, string]>;
  checklist: Array<[string, string]>;
  visualGoal: string;
};

function ordinalTemplate(ordinal: number): LessonTemplate {
  const templates: Record<number, LessonTemplate> = {
    641: {
      simple: "Gold rule-based mean reversion teaches a learner to compare price stretch against a written mean line and only study a return when the rule is still intact.",
      why: "It exists because Gold often stretches away from a short-term fair area, yet the stretch only matters when the learner can name the range, deviation band, and failure condition.",
      useful: "It trains discipline: the learner sees that a mean-reversion idea is a rule audit, not a reaction to any candle that looks extended.",
      context: "Use it when Gold is moving inside a readable range, deviation from the mean is visible, and the wick behavior shows rejection instead of clean expansion.",
      use: "Use the lesson when the mean line, deviation band, and close back toward the mean can all be marked before the classroom result is judged.",
      avoid: "Skip it when Gold is expanding through the band with strong closes or when macro news has made the old mean unreliable.",
      markets: "Gold examples should use XAU movement with visible range structure, wick reaction, and point/dollar distance from stretch to invalidation.",
      sessions: "Use active Gold windows where wick behavior and event volatility can be compared clearly.",
      timeframes: "15m, 1H, or 4H practice charts with enough history to see the mean line and recent deviation band.",
      confirm: "Confirmation is a completed close back inside the deviation band plus price respecting the mean-reversion path.",
      invalid: "The idea is invalidated when Gold closes beyond the deviation band and accepts expansion instead of returning toward the mean.",
      risk: "Measure the educational invalidation distance in Gold points or dollars from the stretch area to the failed-expansion boundary.",
      reference: "Use the mean line and the opposite side of the range as educational reference zones, not as promises.",
      manage: "Keep checking whether price is still returning toward the mean or has changed into accepted expansion.",
      traps: "The main trap is calling every large candle a stretch even when Gold is beginning a new expansion leg.",
      mistakes: "Learner mistakes include moving the mean after the fact, ignoring the failed-expansion boundary, and using one wick without a close.",
      prerequisites: "The learner should understand candles, ranges, mean lines, standard-deviation bands, and Gold point/dollar distance.",
      sandbox: "Mark the mean line, deviation band, stretch candle, return path, failed-expansion trap, and invalidation boundary.",
      setupSteps: [["mark the range and mean line first", "The mean must be known before stretch is judged."], ["plot the deviation band and stretch candle", "The learner sees why price is considered extended."], ["wait for a close back toward the mean", "A wick alone is not enough."], ["label the failed-expansion boundary", "The setup needs a clear wrong point."]],
      checklist: [["mean line is marked before the move", "The rule is fixed."], ["deviation band is visible", "Stretch has context."], ["close back inside the band is present", "Acceptance matters."], ["failed-expansion trap is labeled", "Gold can keep moving."], ["point/dollar distance is recorded", "Gold scale stays clear."]],
      visualGoal: "Show mean line, deviation band, return path, and failed expansion so the learner can separate a stretch from a new expansion leg.",
    },
    642: {
      simple: "Gold volatility-targeted system teaches the learner to resize the classroom idea when Gold movement expands beyond the written risk budget.",
      why: "It exists because the same chart idea can become too large when Gold volatility rises, even if the direction read still looks clean.",
      useful: "It connects volatility, size, and drawdown control in plain terms so the learner can see why exposure changes before stress builds.",
      context: "Use it when Gold volatility can be measured against a recent baseline and the example has a clear exposure cap.",
      use: "Use the lesson when current volatility, target risk budget, cutback rule, and event warning are all visible.",
      avoid: "Skip it when there is no stable volatility baseline or the learner cannot explain why the size changes.",
      markets: "Gold examples should use XAU movement with visible volatility expansion, wick risk, and point/dollar distance.",
      sessions: "Use active Gold windows, especially around periods where movement expands and the cutback rule becomes visible.",
      timeframes: "1H or 4H practice charts for the volatility read, with the size calculation shown beside the chart.",
      confirm: "Confirmation is the written size change matching the current volatility state, not a new directional forecast.",
      invalid: "The lesson is invalidated when volatility changes but exposure stays unchanged against the written rule.",
      risk: "Use point/dollar invalidation distance and a fixed classroom risk budget to show the size cutback.",
      reference: "The educational reference is the exposure cap and cutback area, then the learner observes whether the plan stayed within it.",
      manage: "Review volatility after each major candle and pause the classroom example if event movement makes the old size stale.",
      traps: "The trap is keeping full exposure after volatility expands because the chart still feels orderly.",
      mistakes: "Learner mistakes include using a stale volatility input, forgetting the cap, and treating the sizing tool as a direction tool.",
      prerequisites: "The learner should understand volatility, invalidation distance, exposure cap, and Gold point/dollar movement.",
      sandbox: "Mark volatility input, risk budget, calculated size, exposure cap, event-volatility warning, and cutback area.",
      setupSteps: [["record current Gold volatility against its baseline", "The sizing rule starts with movement size."], ["measure invalidation distance in points or dollars", "The distance drives size."], ["apply the target risk budget and exposure cap", "The learner sees the calculation."], ["label event-volatility cutback area", "Gold can expand suddenly."]],
      checklist: [["volatility input is current", "Stale inputs distort size."], ["invalidation distance is measured", "The calculation needs distance."], ["risk budget is written", "The rule must be visible."], ["exposure cap is applied", "Oversizing is prevented."], ["event-volatility trap is labeled", "Gold movement can jump."]],
      visualGoal: "Show volatility input, target risk budget, size cutback, exposure cap, and event-volatility trap.",
    },
    643: {
      simple: "Gold regime-switching model teaches the learner to classify the current Gold environment before choosing which classroom rule is allowed to lead.",
      why: "It exists because Gold can shift between trend, range, macro shock, and quiet conditions, and each state needs different handling.",
      useful: "It helps the learner pause when evidence is mixed instead of forcing one rule onto every market state.",
      context: "Use it when Gold has enough recent history to label regime state, transition evidence, and confidence level.",
      use: "Use the lesson when the regime state, transition trigger, and model pause rule can all be named.",
      avoid: "Skip it when the state is low confidence or the learner cannot explain why one regime replaced another.",
      markets: "Gold examples should include XAU structure, volatility state, macro context, and point/dollar distance.",
      sessions: "Use Gold windows where state changes can be seen across several candles, not one isolated wick.",
      timeframes: "1H or 4H practice charts with a short regime dashboard beside the chart.",
      confirm: "Confirmation is a state label supported by price behavior, volatility, and macro context together.",
      invalid: "The model read is invalidated when transition evidence fails and Gold returns to the prior regime.",
      risk: "Use a model pause when confidence drops; the point/dollar distance is only studied after the regime is clear.",
      reference: "The educational reference is the regime boundary and transition zone where the learner decides whether to pause.",
      manage: "Keep a state log that records when the model stays active, pauses, or changes regime.",
      traps: "The trap is flipping regimes after one candle without enough transition evidence.",
      mistakes: "Learner mistakes include naming too many regimes, ignoring low confidence, and using a model state as certainty.",
      prerequisites: "The learner should understand trend, range, volatility state, macro context, and confidence thresholds.",
      sandbox: "Mark regime states, transition evidence, confidence threshold, pause zone, false-regime-flip trap, and point/dollar scale.",
      setupSteps: [["define the possible Gold regime states", "The learner needs clear labels."], ["collect transition evidence", "A state change needs proof."], ["compare confidence with the pause threshold", "Low confidence should pause the model."], ["label the false regime flip trap", "One candle can mislead."]],
      checklist: [["regime labels are written", "State names are visible."], ["transition evidence is marked", "The switch has support."], ["confidence threshold is checked", "Low confidence pauses the lesson."], ["false flip trap is labeled", "Gold can snap back."], ["point/dollar distance is recorded after regime clarity", "Scale comes after context."]],
      visualGoal: "Show regime states, transition evidence, confidence threshold, pause zone, and false-regime flip trap.",
    },
    644: {
      simple: "Gold machine-learning forecast model teaches the learner to audit a model forecast instead of accepting the output as an answer.",
      why: "It exists because ML output can look precise while feature drift, overfit, or weak validation makes the forecast unreliable.",
      useful: "It gives the learner a clear checklist for asking what data trained the model, how it was tested, and where uncertainty sits.",
      context: "Use it when Gold features, training window, validation split, and forecast band can be shown together.",
      use: "Use the lesson when the learner can compare model output with recent Gold structure and uncertainty.",
      avoid: "Skip it when the forecast is shown without inputs, test window, or human review notes.",
      markets: "Gold examples should include XAU price behavior, macro/volatility features, and point/dollar distance.",
      sessions: "Use Gold review windows with enough history to show training, validation, and current forecast separately.",
      timeframes: "1H, 4H, or daily review charts depending on the model horizon.",
      confirm: "Confirmation is not the forecast itself; it is whether the model passes input, validation, and uncertainty checks.",
      invalid: "The model is invalidated for the lesson when feature drift or out-of-sample error breaches the review threshold.",
      risk: "Use uncertainty bands and point/dollar distance to show why the model output needs a human acceptance rule.",
      reference: "The educational reference is the forecast band and validation error area, then actual Gold behavior is compared.",
      manage: "Track forecast, error, feature drift, and review notes before trusting the model again.",
      traps: "The trap is treating a clean forecast line as proof while the model is overfit or trained on stale conditions.",
      mistakes: "Learner mistakes include hiding the test window, ignoring uncertainty, and using too many features without review.",
      prerequisites: "The learner should understand inputs, training window, validation, forecast band, and uncertainty.",
      sandbox: "Mark feature inputs, train/test split, forecast band, uncertainty area, overfit trap, and human review note.",
      setupSteps: [["list the model feature inputs", "The learner must know what the model sees."], ["separate training and walk-forward review", "Testing must be visible."], ["draw forecast and uncertainty bands", "Output needs a range."], ["label feature-drift and overfit traps", "Model failure must be explicit."]],
      checklist: [["feature inputs are named", "No black box."], ["training window is separated", "History is not current proof."], ["walk-forward review is visible", "Testing matters."], ["uncertainty band is shown", "Forecast is not certainty."], ["overfit trap is labeled", "Past fit can fail."]],
      visualGoal: "Show feature window, training split, forecast band, validation review, and overfit trap.",
    },
    645: {
      simple: "Gold portfolio rebalancing algorithm teaches the learner to compare a target Gold allocation with actual drift before any rebalance is studied.",
      why: "It exists because portfolio weights move as assets change value, and Gold can become too small, too large, or too correlated with the rest of the book.",
      useful: "It turns rebalancing into a transparent allocation exercise with drift bands, cost review, and correlation context.",
      context: "Use it when target weights, current weights, drift band, and turnover cost can be displayed.",
      use: "Use the lesson when the actual Gold weight crosses a written rebalance threshold and correlation is reviewed.",
      avoid: "Skip it when drift is inside the allowed band or transaction cost overwhelms the educational adjustment.",
      markets: "Gold examples should include a Gold sleeve, other portfolio sleeves, correlation review, and point/dollar context.",
      sessions: "Use portfolio review windows rather than fast candle decisions; this is an allocation lesson.",
      timeframes: "Daily or weekly portfolio review examples.",
      confirm: "Confirmation is a measured drift beyond the band plus an acceptable cost and correlation review.",
      invalid: "The rebalance is invalidated when drift is not large enough or correlation makes the new allocation too concentrated.",
      risk: "Use allocation caps and cost review so the learner sees portfolio risk rather than chart-only risk.",
      reference: "The educational reference is the target weight, drift band, and post-rebalance allocation.",
      manage: "After the example, compare the new Gold weight with the cap and record turnover cost.",
      traps: "The trap is rebalancing too often and letting cost or correlation quietly weaken the portfolio.",
      mistakes: "Learner mistakes include using price excitement instead of drift, ignoring correlation, and hiding cost.",
      prerequisites: "The learner should understand target weight, current weight, drift band, turnover cost, and correlation.",
      sandbox: "Mark target weight, current weight, drift band, rebalance threshold, turnover review, and over-rebalance trap.",
      setupSteps: [["write target and current Gold weights", "Drift must be measurable."], ["compare drift with the written band", "The threshold decides whether to act in the lesson."], ["check turnover cost and correlation", "Allocation quality matters."], ["show post-rebalance weight", "The learner sees the outcome."]],
      checklist: [["target weight is visible", "The plan is fixed."], ["current drift is measured", "The change is objective."], ["threshold is crossed", "Rebalance has a reason."], ["turnover cost is reviewed", "Cost matters."], ["over-rebalance trap is labeled", "Too many changes can hurt process."]],
      visualGoal: "Show target weights, drift band, rebalance threshold, cost review, and over-rebalance trap.",
    },
    646: {
      simple: "Gold multi-timeframe confluence teaches the learner to make higher, middle, and lower timeframes each answer a different question.",
      why: "It exists because Gold can look bullish on one timeframe and weak on another, so the learner needs a clean hierarchy.",
      useful: "It reduces confusion by separating broad direction, pullback quality, and trigger candle instead of blending everything together.",
      context: "Use it when the higher timeframe has readable structure, the middle timeframe shows pullback quality, and the lower timeframe offers a completed trigger.",
      use: "Use the lesson when all three timeframes agree or when the disagreement is clearly labeled as a pause.",
      avoid: "Skip it when the learner is changing timeframes only to find a candle that agrees with a bias.",
      markets: "Gold examples should include wick behavior, point/dollar distance, and clear XAU structure across timeframes.",
      sessions: "Use active Gold windows where lower-timeframe candles still respect the broader structure.",
      timeframes: "4H for structure, 1H for pullback, and 15m for trigger practice.",
      confirm: "Confirmation is agreement between the broad structure, pullback hold, and completed lower-timeframe trigger.",
      invalid: "The idea is invalidated when the lower timeframe triggers against the higher-timeframe boundary or price closes through the broad invalidation line.",
      risk: "Measure Gold point/dollar distance from the trigger area to the higher-timeframe invalidation line.",
      reference: "Use the next higher-timeframe structural level as the educational reference zone.",
      manage: "Keep the timeframe roles fixed and pause if one timeframe starts contradicting the others.",
      traps: "The trap is using the lower timeframe to excuse a weak higher-timeframe structure.",
      mistakes: "Learner mistakes include mixing timeframe roles, chasing a late trigger, and ignoring wick rejection on Gold.",
      prerequisites: "The learner should understand swing structure, pullbacks, completed candles, and timeframe hierarchy.",
      sandbox: "Mark each timeframe panel, its role, agreement area, conflict area, wick trap, and point/dollar distance.",
      setupSteps: [["mark higher-timeframe structure", "This sets the classroom direction."], ["study middle-timeframe pullback quality", "The learner checks whether the move is controlled."], ["wait for lower-timeframe trigger close", "Trigger comes last."], ["label timeframe conflict trap", "Disagreement should pause the lesson."]],
      checklist: [["higher timeframe has structure", "Direction comes first."], ["middle timeframe pullback is clear", "Context is organized."], ["lower timeframe trigger is completed", "No unfinished candle."], ["conflict state is labeled", "Disagreement matters."], ["point/dollar distance is recorded", "Gold scale is visible."]],
      visualGoal: "Show three timeframe panels, agreement area, trigger close, conflict state, and Gold point/dollar distance.",
    },
    647: {
      simple: "Gold macro plus technical confluence teaches the learner to compare a macro driver with chart structure before trusting either one.",
      why: "It exists because real yields, USD pressure, and Gold structure can agree, conflict, or respond at different speeds.",
      useful: "It gives the learner a disagreement matrix so macro context does not become a vague excuse for a chart idea.",
      context: "Use it when a real-yield or USD driver is fresh and Gold has a clear technical level to compare against it.",
      use: "Use the lesson when macro pressure and Gold structure point to the same classroom interpretation.",
      avoid: "Skip it when macro inputs are stale, mixed, or already contradicted by Gold price structure.",
      markets: "Gold examples should include XAU structure, real-yield or USD context, event timing, and point/dollar distance.",
      sessions: "Use Gold windows near macro repricing but after the first chaotic wick has settled.",
      timeframes: "1H or 4H charts with a macro comparison panel.",
      confirm: "Confirmation is a completed Gold close at structure that agrees with the macro driver.",
      invalid: "The idea is invalidated when Gold structure rejects the macro read or the macro input reverses.",
      risk: "Use point/dollar invalidation distance and record macro-event uncertainty before judging the example.",
      reference: "Use the next Gold structure zone plus the macro driver line as educational references.",
      manage: "Update the macro input timestamp and do not let old macro context override new chart behavior.",
      traps: "The trap is using macro language to justify a weak or late technical read.",
      mistakes: "Learner mistakes include checking only USD, ignoring real yields, and treating macro context as timing by itself.",
      prerequisites: "The learner should understand support/resistance, real yields, USD context, and event timing.",
      sandbox: "Mark macro driver, Gold structure, agreement area, disagreement matrix, macro-only trap, and point/dollar distance.",
      setupSteps: [["name the macro driver and timestamp", "Freshness matters."], ["mark Gold technical structure", "Chart location is required."], ["compare agreement or conflict", "Confluence needs both sides."], ["label macro-only trap", "Context alone is not a setup."]],
      checklist: [["macro input is fresh", "Old data can mislead."], ["Gold structure is marked", "Chart location is visible."], ["agreement matrix is filled", "The learner sees conflict."], ["completed close is present", "Acceptance matters."], ["point/dollar distance is recorded", "Gold scale is clear."]],
      visualGoal: "Show macro driver, Gold structure, agreement matrix, completed close, and macro-only trap.",
    },
    648: {
      simple: "Gold price action plus volatility teaches the learner to read candle acceptance together with the current movement band.",
      why: "It exists because Gold can print dramatic wicks, and the learner needs volatility context before deciding whether the candle is meaningful.",
      useful: "It separates normal Gold movement from a candle that truly changes structure.",
      context: "Use it when Gold candles, a volatility band, and a clear invalidation area can be marked together.",
      use: "Use the lesson when candle structure closes beyond a meaningful level and volatility supports the move without being chaotic.",
      avoid: "Skip it when Gold is only wicking through levels or the volatility band is too wide for a clean classroom read.",
      markets: "Gold examples should include wick behavior, volatility band, point/dollar distance, and XAU structure.",
      sessions: "Use active Gold windows where wick behavior can be compared with the normal movement band.",
      timeframes: "15m or 1H practice charts.",
      confirm: "Confirmation is a body close that holds beyond the level while volatility remains readable.",
      invalid: "The idea is invalidated when price returns through the candle level and back inside the normal movement band.",
      risk: "Measure point/dollar distance from the candle trigger to the volatility-based invalidation area.",
      reference: "Use the next structural level as the educational reference after candle and volatility agree.",
      manage: "Keep checking whether price remains accepted outside normal movement or fades back inside.",
      traps: "The trap is trusting a long Gold wick when the candle body never accepted the level.",
      mistakes: "Learner mistakes include ignoring the volatility band, chasing the wick, and placing invalidation inside normal movement.",
      prerequisites: "The learner should understand candle body, wick, support/resistance, volatility band, and Gold point/dollar movement.",
      sandbox: "Mark candle body, wick, volatility band, acceptance close, normal-movement buffer, and wick fakeout trap.",
      setupSteps: [["mark the candle level", "Price action needs location."], ["compare the candle with the volatility band", "Movement size matters."], ["wait for body-close acceptance", "Wicks can fool Gold learners."], ["label return-inside invalidation", "The idea needs a failure point."]],
      checklist: [["candle level is visible", "Location is clear."], ["volatility band is marked", "Normal movement is known."], ["body close accepts the level", "Acceptance matters."], ["wick fakeout trap is labeled", "Gold wicks can mislead."], ["point/dollar distance is recorded", "Gold scale is clear."]],
      visualGoal: "Show candle body, wick, volatility band, acceptance close, and fakeout trap.",
    },
    649: {
      simple: "Gold yield plus USD plus chart structure teaches the learner to compare real-yield pressure, DXY context, and the actual XAU level.",
      why: "It exists because Gold often reacts to the mix of yields and USD, but the chart still decides whether that macro story is accepted.",
      useful: "It keeps macro analysis concrete by forcing three separate checks before the lesson is judged.",
      context: "Use it when real-yield direction, DXY context, and Gold structure are all current enough to compare.",
      use: "Use the lesson when the three checks agree or when the conflict itself is the teaching point.",
      avoid: "Skip it when only one macro input is available or Gold is sitting in the middle of unclear structure.",
      markets: "Gold examples should include real yields, DXY, XAU structure, event timing, and point/dollar distance.",
      sessions: "Use Gold windows after macro information has a visible chart response.",
      timeframes: "1H, 4H, or daily review charts.",
      confirm: "Confirmation is Gold accepting a structure level while yield and USD context do not contradict the read.",
      invalid: "The idea is invalidated when Gold rejects the level or either macro input flips against the interpretation.",
      risk: "Use point/dollar invalidation distance and record any macro conflict before studying the result.",
      reference: "Use the Gold structure level, real-yield line, and DXY context as educational references.",
      manage: "Update macro inputs before each review and pause when yield and USD disagree strongly.",
      traps: "The trap is building the whole lesson from DXY while real yields or Gold structure disagree.",
      mistakes: "Learner mistakes include using stale macro charts, ignoring conflict, and overexplaining a simple failed level.",
      prerequisites: "The learner should understand real yields, DXY, support/resistance, and Gold point/dollar distance.",
      sandbox: "Mark real-yield direction, DXY context, Gold structure, agreement area, conflict review, and delayed-response trap.",
      setupSteps: [["record real-yield direction", "Gold is sensitive to real rates."], ["record DXY context", "USD pressure needs its own check."], ["mark Gold structure", "The chart must confirm or reject."], ["fill the conflict matrix", "The learner sees disagreement."]],
      checklist: [["real-yield direction is current", "Freshness matters."], ["DXY context is marked", "USD pressure is visible."], ["Gold structure is clear", "Location matters."], ["conflict matrix is filled", "Mixed inputs are common."], ["point/dollar distance is recorded", "Gold scale is clear."]],
      visualGoal: "Show real-yield direction, DXY context, Gold structure level, agreement area, and delayed-response trap.",
    },
    650: {
      displayName: "AI-Assisted Trade Review",
      simple: "Gold AI-assisted trade review teaches the learner to use an AI draft as a checklist aid while human evidence decides the classroom read.",
      why: "It exists because AI can organize evidence quickly, but it can also sound confident while missing chart context, uncertainty, or Gold movement scale.",
      useful: "It gives the learner a safe review process: input quality, evidence check, uncertainty note, and human acceptance rule.",
      context: "Use it when the learner can provide clean Gold chart facts, macro context, and the model output can be checked against the chart.",
      use: "Use the lesson when AI output is treated as a draft and every claim is matched to visible evidence.",
      avoid: "Skip it when the output cites unsupported facts, ignores Gold wick behavior, or cannot explain point/dollar distance.",
      markets: "Gold examples should include XAU structure, wick behavior, macro context, and point/dollar distance.",
      sessions: "Use review windows after the learner has already marked the chart manually.",
      timeframes: "Any classroom timeframe, but the chart facts must be written before the AI review begins.",
      confirm: "Confirmation is a human checklist that verifies each AI claim against visible chart evidence.",
      invalid: "The review fails when AI output adds unsupported facts or contradicts the marked Gold structure.",
      risk: "Use point/dollar invalidation distance and uncertainty notes so the review stays educational.",
      reference: "Use the human evidence checklist and model uncertainty area as educational references.",
      manage: "Keep the AI draft, human corrections, and final classroom notes separate.",
      traps: "The trap is letting polished AI language replace evidence from the actual Gold chart.",
      mistakes: "Learner mistakes include vague prompts, accepting unsupported output, and hiding uncertainty.",
      prerequisites: "The learner should understand chart notes, prompt quality, evidence review, and Gold point/dollar language.",
      sandbox: "Mark input facts, AI thesis draft, human evidence checklist, uncertainty area, unsupported-output trap, and final review note.",
      setupSteps: [["write chart facts before asking AI", "Input quality controls output quality."], ["compare each AI claim with visible evidence", "Human review leads."], ["mark uncertainty and missing context", "The model may omit risk."], ["label unsupported-output trap", "Fluent wording can still be wrong."]],
      checklist: [["chart facts are written first", "Prompt quality matters."], ["AI claims are evidence checked", "Human review leads."], ["uncertainty note is visible", "Output is not certainty."], ["unsupported-output trap is labeled", "Fluency can mislead."], ["point/dollar distance is recorded", "Gold scale is clear."]],
      visualGoal: "Show AI thesis draft, human evidence checklist, uncertainty area, unsupported-output trap, and Gold point/dollar distance.",
    },
    651: {
      simple: "Gold ATR-based position sizing teaches the learner to turn ATR distance and invalidation distance into a classroom size calculation.",
      why: "It exists because Gold movement changes over time, and a fixed size can become too large when ATR expands.",
      useful: "It makes size visible as a calculation rather than a feeling.",
      context: "Use it when ATR is current, the invalidation line is clear, and the classroom risk budget is written.",
      use: "Use the lesson when ATR distance and structure distance can both be measured before size is calculated.",
      avoid: "Skip it when ATR is distorted by one news candle or the invalidation area is unclear.",
      markets: "Gold examples should include current ATR, XAU structure, and point/dollar distance.",
      sessions: "Use active Gold windows but avoid distorted event spikes when teaching the core calculation.",
      timeframes: "15m, 1H, or 4H practice charts with a sizing panel.",
      confirm: "Confirmation is a size calculation that changes when ATR or invalidation distance changes.",
      invalid: "The sizing lesson is invalidated when size is chosen before distance and risk budget are known.",
      risk: "Use a fixed educational risk budget and Gold point/dollar distance to calculate the classroom size.",
      reference: "Use the sizing panel and invalidation distance as the educational reference.",
      manage: "Recalculate size when ATR changes materially or when the invalidation line moves.",
      traps: "The trap is using ATR as a direction clue instead of a movement-size input.",
      mistakes: "Learner mistakes include using stale ATR, ignoring the structure line, and rounding size upward without a reason.",
      prerequisites: "The learner should understand ATR, invalidation distance, risk budget, and Gold point/dollar movement.",
      sandbox: "Mark ATR value, invalidation line, risk budget, size result, volatility-spike review, and oversizing trap.",
      setupSteps: [["record current ATR", "Movement size comes first."], ["measure structure invalidation distance", "Distance controls sizing."], ["apply the classroom risk budget", "The size is calculated."], ["label volatility-spike caution", "One candle can distort ATR."]],
      checklist: [["ATR reading is current", "Stale values mislead."], ["invalidation distance is measured", "Structure matters."], ["risk budget is written", "The rule is visible."], ["size result is shown", "Calculation is teachable."], ["oversizing trap is labeled", "Gold expansion can punish size errors."]],
      visualGoal: "Show ATR distance, invalidation distance, risk budget, size calculation, and oversizing trap.",
    },
    652: {
      simple: "Gold leverage control teaches the learner to cap exposure when volatility, margin pressure, or event risk makes the classroom idea too large.",
      why: "It exists because leverage can make normal Gold movement feel extreme, especially when spreads or volatility widen.",
      useful: "It helps the learner see leverage as a risk dial with a cap, buffer, and cutback rule.",
      context: "Use it when leverage, margin buffer, volatility state, and point/dollar distance are visible.",
      use: "Use the lesson when the leverage cap and cutback rule can be applied before judging the chart idea.",
      avoid: "Skip it when the learner cannot explain the margin buffer or when event volatility makes the example unstable.",
      markets: "Gold examples should include XAU movement, volatility state, margin buffer, and point/dollar distance.",
      sessions: "Use Gold windows where movement is readable enough to show why the leverage cap changes.",
      timeframes: "1H or 4H examples with a risk panel.",
      confirm: "Confirmation is the exposure staying inside the cap after volatility and buffer are checked.",
      invalid: "The lesson is invalidated when leverage stays high after the buffer is breached.",
      risk: "Use point/dollar distance and a fixed buffer to show when exposure must be reduced.",
      reference: "Use the cap line, margin buffer, and cutback area as educational references.",
      manage: "Review leverage after volatility expands and pause the example if the buffer becomes too thin.",
      traps: "The trap is using leverage to make a weak Gold idea look exciting.",
      mistakes: "Learner mistakes include ignoring margin buffer, increasing size after a loss, and treating leverage as skill.",
      prerequisites: "The learner should understand leverage cap, margin buffer, volatility cutback, and point/dollar distance.",
      sandbox: "Mark leverage cap, buffer, volatility state, exposure reduction gate, margin stress trap, and point/dollar distance.",
      setupSteps: [["write the leverage cap", "The limit must be visible."], ["check margin buffer", "Buffer protects the process."], ["compare volatility state", "Movement size changes leverage risk."], ["apply exposure reduction gate", "Cutback happens before stress."]],
      checklist: [["leverage cap is written", "The rule is fixed."], ["margin buffer is visible", "Risk has a cushion."], ["volatility state is checked", "Gold movement changes risk."], ["cutback gate is applied", "Exposure responds."], ["margin stress trap is labeled", "Leverage can accelerate failure."]],
      visualGoal: "Show leverage cap, margin buffer, volatility cutback, exposure gate, and margin stress trap.",
    },
    653: {
      simple: "Gold news event risk reduction teaches the learner to reduce or pause classroom exposure when scheduled news can distort XAU movement.",
      why: "It exists because Gold can wick sharply around data releases, central-bank comments, and macro surprises.",
      useful: "It turns news handling into a prewritten risk process instead of an emotional reaction during the event.",
      context: "Use it when the event time, expected impact, spread/volatility state, and no-action window are visible.",
      use: "Use the lesson before a scheduled event when Gold exposure can be reviewed calmly.",
      avoid: "Skip active interpretation during the first chaotic release candles.",
      markets: "Gold examples should include event timing, XAU wick behavior, volatility expansion, and point/dollar distance.",
      sessions: "Use Gold event windows with the pre-event and post-event candles clearly separated.",
      timeframes: "5m, 15m, or 1H event review charts.",
      confirm: "Confirmation is the risk-reduction rule being applied before the event, not after the wick appears.",
      invalid: "The process fails when exposure is left unchanged despite a written high-impact event warning.",
      risk: "Use a reduced exposure rule or no-action window and measure Gold point/dollar movement after the event.",
      reference: "Use the event window, pre-event range, and post-event stabilization area as educational references.",
      manage: "Do not judge the setup until spread and candle behavior normalize after the event.",
      traps: "The trap is reacting to the first news wick before the market shows stable acceptance.",
      mistakes: "Learner mistakes include ignoring the calendar, studying a setup inside the no-action window, and forgetting spread expansion.",
      prerequisites: "The learner should understand event calendar, pre-event range, spread expansion, and Gold wick behavior.",
      sandbox: "Mark event time, no-action window, reduced exposure review, spread/volatility expansion, whipsaw trap, and point/dollar distance.",
      setupSteps: [["mark the event time and expected impact", "Risk starts before the release."], ["draw the no-action window", "Chaotic candles need separation."], ["review exposure reduction rule", "Process comes before emotion."], ["label whipsaw trap", "Gold can spike both ways."]],
      checklist: [["event time is marked", "Timing is clear."], ["no-action window is visible", "The learner pauses."], ["reduction rule is written", "Response is planned."], ["spread/volatility expansion is checked", "Friction matters."], ["whipsaw trap is labeled", "News wicks can mislead."]],
      visualGoal: "Show event window, no-action zone, reduced exposure review, spread/volatility state, and whipsaw trap.",
    },
    654: {
      simple: "Gold drawdown controls teach the learner to pause, reduce, or review the classroom process when the equity curve breaches a written threshold.",
      why: "It exists because repeated Gold mistakes can damage the process before any single chart looks obviously wrong.",
      useful: "It makes the learner respect the equity curve as feedback rather than trying to recover immediately.",
      context: "Use it when current drawdown, threshold, cutback rule, and recovery gate can be shown.",
      use: "Use the lesson after a defined drawdown threshold is reached in the simulation journal.",
      avoid: "Skip new classroom ideas until the pause or cutback rule has been followed.",
      markets: "Gold examples should include XAU volatility, point/dollar movement, and process-level drawdown review.",
      sessions: "Use review windows after several examples, not during a rushed candle decision.",
      timeframes: "Portfolio or journal review, with chart examples used only as context.",
      confirm: "Confirmation is the process following the drawdown threshold exactly as written.",
      invalid: "The control fails when the learner overrides the pause or increases exposure to recover faster.",
      risk: "Use a fixed drawdown threshold, reduced size, and recovery gate before normal practice resumes.",
      reference: "Use the equity curve, drawdown line, and recovery gate as educational references.",
      manage: "Record what changed, what paused, and what evidence is required before normal size returns.",
      traps: "The trap is revenge-style review where the learner immediately searches for a larger Gold idea.",
      mistakes: "Learner mistakes include moving the threshold, hiding the losing run, and skipping the recovery gate.",
      prerequisites: "The learner should understand equity curve, drawdown threshold, cutback rule, and review journal.",
      sandbox: "Mark equity curve, drawdown threshold, pause/cutback area, recovery gate, revenge-style trap, and review note.",
      setupSteps: [["plot the equity curve", "Process state is visible."], ["compare drawdown with the threshold", "The rule decides response."], ["apply pause or cutback rule", "The learner follows process."], ["define recovery gate", "Restart needs evidence."]],
      checklist: [["equity curve is visible", "State is measurable."], ["drawdown threshold is fixed", "The rule cannot move."], ["pause/cutback rule is applied", "Response is clear."], ["recovery gate is written", "Restart has a condition."], ["revenge-style trap is labeled", "Emotion can override process."]],
      visualGoal: "Show equity curve, drawdown threshold, pause/cutback area, recovery gate, and revenge-style trap.",
    },
    655: {
      simple: "Portfolio hedging with Gold teaches the learner to use a Gold sleeve as a risk-offset study inside a broader portfolio.",
      why: "It exists because Gold can behave differently from equities, currencies, or risk assets, but the hedge must be sized and checked.",
      useful: "It shows that a hedge is a measured allocation with correlation and stress testing, not just adding Gold to every portfolio.",
      context: "Use it when portfolio exposure, Gold hedge sleeve, correlation estimate, and stress window can be shown.",
      use: "Use the lesson when the portfolio has a named risk that Gold may offset and the hedge size is justified.",
      avoid: "Skip it when Gold is added without correlation, beta, or stress-scenario review.",
      markets: "Gold examples should include XAU allocation, portfolio exposure, stress window, and point/dollar distance.",
      sessions: "Use portfolio review windows and stress scenarios rather than fast candle timing.",
      timeframes: "Daily or weekly portfolio review.",
      confirm: "Confirmation is a hedge sleeve that reduces the named portfolio risk without creating hidden concentration.",
      invalid: "The hedge is invalidated when Gold correlation changes or the sleeve becomes larger than the written cap.",
      risk: "Use hedge-size caps, correlation review, and point/dollar movement to show the hedge tradeoff.",
      reference: "Use the portfolio exposure, Gold sleeve, and stress-test area as educational references.",
      manage: "Recheck the hedge when portfolio composition, correlation, or Gold volatility changes.",
      traps: "The trap is over-hedging so the hedge becomes a new directional bet.",
      mistakes: "Learner mistakes include skipping correlation, sizing by emotion, and ignoring how the hedge affects the whole portfolio.",
      prerequisites: "The learner should understand portfolio exposure, hedge sleeve, correlation, beta, and Gold point/dollar movement.",
      sandbox: "Mark portfolio exposure, Gold hedge sleeve, correlation estimate, stress window, over-hedge trap, and allocation cap.",
      setupSteps: [["name the portfolio risk", "The hedge needs a purpose."], ["size the Gold sleeve", "Allocation must be measured."], ["check correlation or beta", "The relationship can change."], ["run a stress window", "The learner sees hedge behavior."]],
      checklist: [["portfolio risk is named", "Purpose is clear."], ["Gold sleeve is sized", "Allocation is visible."], ["correlation is checked", "Relationship matters."], ["stress window is reviewed", "Hedge behavior is tested."], ["over-hedge trap is labeled", "The hedge can become exposure."]],
      visualGoal: "Show portfolio exposure, Gold hedge sleeve, correlation/beta estimate, stress window, and over-hedge trap.",
    },
    656: {
      simple: "Gold correlation-aware exposure teaches the learner to reduce overlap when several positions are quietly tied to the same Gold or macro driver.",
      why: "It exists because a portfolio can look diversified while real exposure is clustered through USD, rates, commodities, or risk appetite.",
      useful: "It helps the learner see hidden concentration before volatility makes every related idea move together.",
      context: "Use it when rolling correlation, exposure overlap, allocation cap, and stress check are available.",
      use: "Use the lesson when Gold exposure overlaps with another asset or strategy beyond the written cap.",
      avoid: "Skip it when the relationship is too unstable to measure or the learner cannot name the shared driver.",
      markets: "Gold examples should include XAU, related asset exposure, rolling correlation, and point/dollar or ratio distance.",
      sessions: "Use portfolio review windows with enough history to calculate a relationship.",
      timeframes: "Daily or weekly correlation review, with chart examples for context.",
      confirm: "Confirmation is exposure reduced or capped when correlation and shared driver are both visible.",
      invalid: "The exposure plan is invalidated when correlation breaks or hidden overlap exceeds the cap.",
      risk: "Use allocation caps, stress checks, and point/dollar movement to teach concentration control.",
      reference: "Use the correlation line, exposure overlap panel, and cap boundary as educational references.",
      manage: "Recheck correlation after major macro events or when Gold volatility changes sharply.",
      traps: "The trap is assuming two assets are separate because their names differ while the same driver controls both.",
      mistakes: "Learner mistakes include using a stale correlation window, ignoring driver overlap, and adding exposure after a stress move.",
      prerequisites: "The learner should understand rolling correlation, exposure cap, shared drivers, and stress review.",
      sandbox: "Mark rolling correlation, shared driver, exposure overlap, cap line, relationship-break trap, and stress check.",
      setupSteps: [["choose the correlation window", "The relationship needs a defined period."], ["identify shared macro or Gold driver", "Overlap must be named."], ["compare exposure with the cap", "The rule limits concentration."], ["label relationship-break trap", "Correlation can fail."]],
      checklist: [["correlation window is fixed", "Measurement is stable."], ["shared driver is named", "Overlap is visible."], ["exposure cap is checked", "Concentration is limited."], ["stress check is reviewed", "Pressure behavior matters."], ["relationship-break trap is labeled", "Correlation is not permanent."]],
      visualGoal: "Show rolling correlation, exposure overlap, allocation cap, stress area, and relationship-break trap.",
    },
    657: {
      displayName: "Previous-Day High Breakout",
      simple: "Previous-day high breakout teaches the learner to study a Gold break above yesterday's visible high, then judge whether price accepts or falls back below it.",
      why: "It exists because prior-day highs are obvious reference levels that can attract breakout attempts and wick fakeouts.",
      useful: "It gives a simple Level 2 breakout lesson with a premarked level, close quality, retest, and invalidation back below the prior high.",
      context: "Use it when the previous-day high is clean, Gold opens near enough to study the level, and wick behavior can be compared with body close.",
      use: "Use the lesson when Gold closes above the previous-day high and retest or acceptance behavior can be observed.",
      avoid: "Skip it when the prior high is messy, the move is already far extended, or the first break is only a wick.",
      markets: "Gold examples should include prior-day high, XAU wick behavior, acceptance close, and point/dollar distance.",
      sessions: "Use active Gold windows where the previous-day high is still visible and the breakout candle can be judged.",
      timeframes: "15m or 1H practice charts with yesterday's high premarked.",
      confirm: "Confirmation is a body close above the prior high plus either retest hold or continued acceptance above the level.",
      invalid: "The setup is invalidated when Gold closes back below the previous-day high after the breakout attempt.",
      risk: "Measure point/dollar distance from the breakout close or retest to the invalidation back below the level.",
      reference: "Use the next visible Gold structure above the prior high as the educational reference zone.",
      manage: "Keep watching whether price respects the prior high or converts it into a failed-break trap.",
      traps: "The trap is treating a wick above yesterday's high as accepted breakout before the candle closes.",
      mistakes: "Learner mistakes include marking the wrong day high, chasing after extension, and ignoring the close back below the level.",
      prerequisites: "The learner should understand daily highs, candle bodies, wicks, breakout close, retest, and Gold point/dollar distance.",
      sandbox: "Mark previous-day high, breakout close, retest/acceptance area, invalidation back below, wick fakeout trap, and reference zone.",
      setupSteps: [["mark yesterday's high before new price reaches it", "The level must be fixed in advance."], ["wait for a body close above the level", "Wicks are not acceptance."], ["watch retest or continued hold above the high", "Acceptance confirms the classroom read."], ["label close back below as invalidation", "Failed break needs a clear boundary."]],
      checklist: [["previous-day high is premarked", "The level is fixed."], ["breakout body close is present", "Acceptance matters."], ["retest or hold above is visible", "The level should behave differently."], ["wick fakeout trap is labeled", "Gold can poke above and return."], ["point/dollar distance is recorded", "Gold scale is clear."]],
      visualGoal: "Show previous-day high, breakout close, retest/acceptance area, invalidation back below, and wick fakeout trap.",
    },
    658: {
      simple: "Forex Bollinger squeeze breakout teaches the learner to wait for tight bands to release through a clear level, then judge whether expansion holds.",
      why: "It exists because low volatility can precede expansion, but the bands do not choose direction for the learner.",
      useful: "It separates a real squeeze release from a quick poke outside the band that falls back into the range.",
      context: "Use it when a Forex pair has tight Bollinger Bands, compressed bandwidth, a nearby level, normal spread, and enough pip room.",
      use: "Use the lesson when the pair closes outside the squeeze and retests or holds the broken level.",
      avoid: "Skip it when spread is abnormal, the pair is already extended, or the outside move happens without band expansion.",
      markets: "Forex examples should use a liquid pair with normal spread, readable sessions, and clear pip distance.",
      sessions: "Use active Forex sessions where spread and follow-through can be compared clearly.",
      timeframes: "15m or 1H practice charts.",
      confirm: "Confirmation is a close outside the compressed bands, visible bandwidth expansion, and a level retest or hold.",
      invalid: "The setup is invalidated when price closes back inside the bands and returns into the squeeze box.",
      risk: "Measure pip distance from the breakout/retest area to the invalidation back inside the squeeze.",
      reference: "Use the next Forex structure level as the educational reference zone after expansion holds.",
      manage: "Watch whether bands keep opening and price respects the broken level instead of slipping back into compression.",
      traps: "The trap is choosing direction before the breakout close or trusting the first candle that pokes outside the band.",
      mistakes: "Learner mistakes include ignoring spread, confusing quiet chop with a squeeze, and skipping the retest read.",
      prerequisites: "The learner should understand Bollinger Bands, bandwidth compression, candle close, support/resistance, sessions, spread, and pips.",
      sandbox: "Mark tight bands, squeeze box, breakout close, bandwidth expansion, retest area, failed-expansion trap, spread, and pip distance.",
      setupSteps: [["mark compressed Bollinger Bands and squeeze box", "The setup begins with tight volatility."], ["wait for a close outside the band and level", "Direction comes from price."], ["check bandwidth expansion and retest", "The move must hold."], ["label failed expansion back inside", "False releases are common."]],
      checklist: [["bands are visibly tight", "Compression is real."], ["nearby level is marked", "Breakout needs structure."], ["outside close is completed", "No unfinished candle."], ["bandwidth expands after the close", "Release must show movement."], ["spread and pip distance are recorded", "Forex context is complete."]],
      visualGoal: "Show tight Bollinger Bands, bandwidth compression, breakout close, retest, spread/pip check, and failed-expansion trap.",
    },
    659: {
      simple: "Forex price action candle timing teaches the learner to wait for a candle to finish before judging its body, wick, and close.",
      why: "It exists because an unfinished candle can look strong in the middle and weak by the close.",
      useful: "It gives a pure Level 1 reading habit: observe open, high, low, close, body, wick, and nearby swing before making any classroom note.",
      context: "Use it on a clean Forex pair chart where one candle forms near a visible swing point and spread is normal.",
      use: "Use the lesson when the candle has closed and its body/wick relationship can be compared with the nearby swing.",
      avoid: "Skip it when the candle is still forming or the chart is so crowded that the swing point is unclear.",
      markets: "Forex examples should use a liquid pair, normal spread, and simple pip distance without indicators.",
      sessions: "Use a clean practice window without naming advanced timing rules.",
      timeframes: "Any slow enough practice chart where the learner can see candle open, high, low, and close.",
      confirm: "Confirmation is the completed candle close and its position relative to the nearby swing point.",
      invalid: "The read is invalidated when the next candle closes back through the simple candle level being studied.",
      risk: "Use simple pip distance from the candle level to the nearby swing for classroom measurement.",
      reference: "Use the nearby swing high or swing low as the educational reference zone.",
      manage: "Wait for the candle to close, then describe what the body and wick actually show.",
      traps: "The trap is judging the candle before it closes and then rewriting the lesson after the shape changes.",
      mistakes: "Learner mistakes include staring at the candle mid-formation, ignoring the wick, and marking a tiny unclear swing.",
      prerequisites: "The learner should understand candle open, high, low, close, body, wick, swing high, swing low, spread, and pips.",
      sandbox: "Mark candle open, high, low, close, body, wick, nearby swing, simple invalidation, and unfinished-candle trap.",
      setupSteps: [["wait for the candle to close", "Unfinished candles can change shape."], ["mark open, high, low, and close", "The learner reads the whole candle."], ["compare body and wick with the nearby swing", "Location gives meaning."], ["draw simple invalidation through the candle level", "The read needs a wrong point."]],
      checklist: [["candle is completed", "No mid-candle judgment."], ["open/high/low/close are marked", "The full candle is visible."], ["body and wick are compared", "Shape matters."], ["nearby swing is clear", "Location matters."], ["spread and pip distance are recorded", "Forex context is complete."]],
      visualGoal: "Show candle open/high/low/close, body, wick, nearby swing, simple invalidation, and unfinished-candle trap.",
    },
    660: {
      simple: "Forex structural breakout retest teaches the learner to mark a support or resistance level, wait for a completed break, and study the retest.",
      why: "It exists because many breaks fail when price returns into the old range, so the retest teaches acceptance versus rejection.",
      useful: "It gives the learner a clean Level 2 structure lesson with a level, breakout close, retest, invalidation, spread, and pip distance.",
      context: "Use it when a Forex pair has a clear horizontal level, readable candles, normal spread, and room to the next structure.",
      use: "Use the lesson when price closes beyond the level and returns to test it without falling back inside the old range.",
      avoid: "Skip it when the level is messy, spread is abnormal, or price breaks and immediately returns inside the range.",
      markets: "Forex examples should use a liquid pair with clear support/resistance, normal spread, and visible pip distance.",
      sessions: "Use active Forex conditions, but do not rely on time-window logic for this lesson.",
      timeframes: "15m, 1H, or 4H practice charts.",
      confirm: "Confirmation is a completed breakout close plus a retest that holds on the new side of the level.",
      invalid: "The setup is invalidated when price closes back inside the old range after the retest.",
      risk: "Measure pip distance from the retest area to the invalidation back inside the old range.",
      reference: "Use the next structure level on the new side of the break as the educational reference zone.",
      manage: "Keep the level fixed and judge whether retest behavior shows acceptance or a failed return.",
      traps: "The trap is treating the first break as accepted when the retest immediately fails.",
      mistakes: "Learner mistakes include moving the level after the break, ignoring spread, and entering the lesson before a close.",
      prerequisites: "The learner should understand support, resistance, candle close, retest, spread, and pips.",
      sandbox: "Mark support/resistance, breakout close, retest acceptance, invalidation back inside, old-range return trap, spread, and pip distance.",
      setupSteps: [["mark the support/resistance level before the break", "The level must be fixed."], ["wait for a completed breakout close", "A quick touch is not enough."], ["study the retest on the new side", "Acceptance is visible at the retest."], ["label old-range return trap", "Failed breaks close back inside."]],
      checklist: [["level is premarked", "The structure is fixed."], ["breakout close is completed", "Acceptance starts with a close."], ["retest holds the new side", "The level changes role."], ["old-range return trap is labeled", "Failure is visible."], ["spread and pip distance are recorded", "Forex context is complete."]],
      visualGoal: "Show support/resistance level, breakout close, retest acceptance, invalidation back inside, and pip/spread check.",
    },
  };
  const template = templates[ordinal];
  if (!template) throw new Error(`Missing lesson template for ordinal ${ordinal}`);
  return template;
}

function scrub(value: any, assetClass: Asset): any {
  if (typeof value === "string") {
    let text = value
      .replace(/\bbeginners?\b/gi, "learners")
      .replace(/\brecruits?\b/gi, "learners")
      .replace(/\bguaranteed\b/gi, "not certain")
      .replace(/\bperfect setup\b/gi, "clean setup")
      .replace(/\beasy money\b/gi, "undisciplined expectation")
      .replace(/\bjourney\b/gi, "learning path")
      .replace(/\bsignals\b/gi, "clues")
      .replace(/\bsignal\b/gi, "clue")
      .replace(/\btake-profit\b/gi, "educational reference")
      .replace(/\btake profit\b/gi, "educational reference")
      .replace(/\bprofit target\b/gi, "educational reference zone")
      .replace(/\bstop-loss\b/gi, "invalidation line")
      .replace(/\bstop loss\b/gi, "invalidation line")
      .replace(/\bper trade\b/gi, "for each classroom idea")
      .replace(/\btrading account\b/gi, "simulation journal")
      .replace(/\benter a long\b/gi, "study a bullish activation")
      .replace(/\benter a short\b/gi, "study a bearish activation");
    if (assetClass !== "FOREX") {
      text = text.replace(/\bpips\b/gi, assetClass === "GOLD" ? "points" : "basis points").replace(/\bpip\b/gi, assetClass === "GOLD" ? "point" : "basis point");
    }
    return text;
  }
  if (Array.isArray(value)) return value.map(item => scrub(item, assetClass));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, scrub(child, assetClass)]));
  }
  return value;
}

function buildLearningProfile(strategy: any, ordinal: number, template: LessonTemplate) {
  const assetClass = strategy.assetClass as Asset;
  const version = `${getLegacyStrategyCode(assetClass, strategy.sequenceNumber)} ${assetClass}`;
  const name = template.displayName || strategy.name;
  const setupLogic = template.setupSteps.map(([action, reason], index) => ({ step: index + 1, action: `${version}: ${action}.`, reason }));
  const practiceChecklist = template.checklist.map(([item, reason]) => ({ item: `${version}: ${item}.`, reason }));
  const profile = {
    name,
    assetClass,
    family: getCorrectFamily(name, strategy.parentFamily, assetClass),
    level: getCorrectLevel(name, assetClass),
    difficulty: ordinal >= 643 && ordinal <= 650 ? "HIGH" : "MED",
    simpleExplanation: `${name} (${version}) ${template.simple}`,
    whyExists: `${name} (${version}) ${template.why}`,
    whyUseful: `${name} (${version}) ${template.useful}`,
    setupContext: `${name} (${version}) ${template.context}`,
    whenToUse: `${name} (${version}) ${template.use}`,
    whenNotToUse: `${name} (${version}) ${template.avoid}`,
    suitableMarkets: template.markets,
    suitableSessions: template.sessions,
    suitableTimeframes: template.timeframes,
    prerequisiteKnowledge: template.prerequisites,
    confirmationRules: template.confirm,
    invalidationRules: template.invalid,
    riskRules: template.risk,
    targetLogic: template.reference,
    tradeManagement: template.manage,
    commonTraps: `${name} (${version}) trap: ${template.traps}`,
    beginnerMistakes: `${name} (${version}) learner mistakes: ${template.mistakes}`,
    setupLogic,
    practiceChecklist,
    sandboxInstructions: `${name} (${version}) Strategy Lab task: ${template.sandbox}`,
    relatedLessons: [],
    skillDomains: assetClass === "GOLD"
      ? ["Gold structure", "Risk process", "Macro context", "Visual audit"]
      : ["Forex price action", "Spread and pips", "Structure reading", "Visual audit"],
    exampleWalkthrough: {
      context: `The learner opens ${name} (${version}) and marks the required chart or process context before judging the result.`,
      setup: `The learner follows the setup steps, labels the trap area, and records the invalidation point in classroom language.`,
      outcome: `The example is judged by whether price or the process respects the written condition, not by a promised outcome.`,
      lesson: `The learner explains which evidence confirmed the read, which evidence would have failed it, and how the visual model clarified the lesson.`,
    },
  };
  return scrub(profile, assetClass);
}

function buildCoreLogic(lp: any): string {
  return [
    "### Core Strategy Logic",
    `- **Simple Explanation**: ${lp.simpleExplanation}`,
    `- **Why It Exists**: ${lp.whyExists}`,
    `- **Why It Is Useful**: ${lp.whyUseful}`,
    `- **Setup Context**: ${lp.setupContext}`,
    `- **When To Use**: ${lp.whenToUse}`,
    `- **When Not To Use**: ${lp.whenNotToUse}`,
    `- **Suitable Markets**: ${lp.suitableMarkets}`,
    `- **Suitable Sessions**: ${lp.suitableSessions}`,
    `- **Suitable Timeframes**: ${lp.suitableTimeframes}`,
    "- **Setup Logic**:",
    ...lp.setupLogic.map((step: any) => `  ${step.step}. ${step.action} ${step.reason}`),
    `- **Confirmation Rules**: ${lp.confirmationRules}`,
    `- **Invalidation Rules**: ${lp.invalidationRules}`,
    `- **Educational Reference Logic**: ${lp.targetLogic}`,
    `- **Sandbox Practice**: ${lp.sandboxInstructions}`,
  ].join("\n");
}

function buildTrapMechanics(lp: any): string {
  return [
    "### Market Trap Mechanics",
    `- **Risk Rules**: ${lp.riskRules}`,
    `- **Common Traps**: ${lp.commonTraps}`,
    `- **Learner Mistakes**: ${lp.beginnerMistakes}`,
  ].join("\n");
}

function buildWalkthrough(lp: any): string {
  const wt = lp.exampleWalkthrough;
  return [
    "### Practice Walkthrough",
    `- **Context**: ${wt.context}`,
    `- **Setup**: ${wt.setup}`,
    `- **Outcome**: ${wt.outcome}`,
    `- **Lesson**: ${wt.lesson}`,
  ].join("\n");
}

function buildVisual(strategy: any, name: string, template: LessonTemplate) {
  const assetClass = strategy.assetClass as Asset;
  const suffix = ` [${name} (${assetClass})]`;
  const base = {
    schemaVersion: "strategy-visual-v2",
    title: `${name} Visual Model`,
    chartTitle: `${name} Teaching Chart`,
    chartPurpose: template.visualGoal,
    setupFormationShown: `${name} begins by marking the required context before any classroom activation is judged.`,
    marketConditionShown: template.context,
    entryOrActivationZone: `Classroom activation area for ${name}${suffix}`,
    confirmationMarker: template.confirm,
    invalidationZone: template.invalid,
    trapZone: template.traps,
    targetZone: `Educational reference zone for ${name}${suffix}`,
    warningLabel: `Use ${name} as a structured classroom study with invalidation marked first.`,
    whatLearnerShouldNotice: `Notice the order of evidence, the completed confirmation marker, the invalidation area, and the trap that would weaken ${name}.`,
    mistakePrevented: `Prevents treating an isolated clue as a complete ${name} lesson before context, confirmation, and invalidation are visible.`,
    interactionType: "hover",
    pedagogicalGoal: template.visualGoal,
    assetLanguage: assetClass === "FOREX" ? "Forex pair, spread, and pips" : "Gold points, dollars, volatility, and wick behavior",
    assetSpecificVisualNotes: assetClass === "FOREX"
      ? "Show Forex pair, spread, and pip distance with clean structure."
      : "Show Gold point or dollar distance, wick behavior, and the active review window.",
    requiredLabels: [],
    requiredZones: [],
  };
  return scrub(overrideVisualModel(name, assetClass, base), assetClass);
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const apply = args.has("--apply");
  const dryRun = !apply;
  const ids = BATCH_641_660_TARGETS.map(target => target.id);
  if (new Set(ids).size !== 20) throw new Error("Batch 641-660 target cardinality mismatch.");

  const rows = await prisma.strategy.findMany({
    where: { id: { in: ids } },
    orderBy: [{ sequenceNumber: "asc" }, { id: "asc" }],
  });
  const rowById = new Map(rows.map(row => [row.id, row]));
  const problems: string[] = [];

  for (const target of BATCH_641_660_TARGETS) {
    const row = rowById.get(target.id);
    const template = ordinalTemplate(target.ordinal);
    const finalName = template.displayName || target.name;
    if (!row) {
      problems.push(`Missing strategy ${target.ordinal}: ${target.id}`);
      continue;
    }
    const nameOk = namesMatchExpected(row.name, target.name) || namesMatchExpected(row.name, finalName);
    if (!nameOk) problems.push(`Name mismatch at ${target.ordinal}: expected ${target.name} or ${finalName}, got ${row.name}`);
    if (row.assetClass !== target.assetClass) problems.push(`Asset mismatch at ${target.ordinal}: expected ${target.assetClass}, got ${row.assetClass}`);
    if (!row.learningProfile || !row.visualModel) problems.push(`Strategy not upgraded yet at ${target.ordinal}: ${row.name}`);
  }

  for (const target of BATCH_641_660_TARGETS) {
    const template = ordinalTemplate(target.ordinal);
    const finalName = template.displayName || target.name;
    if (finalName === target.name) continue;
    const conflict = await prisma.strategy.findFirst({
      where: { assetClass: target.assetClass, name: finalName, NOT: { id: target.id } },
      select: { id: true, name: true },
    });
    if (conflict) problems.push(`Rename conflict for ${target.ordinal}: ${finalName} already exists at ${conflict.id}`);
  }

  if (problems.length > 0) throw new Error(`Batch 641-660 polish safety stop:\n${problems.join("\n")}`);

  const updates = BATCH_641_660_TARGETS.map(target => {
    const strategy = rowById.get(target.id)!;
    const template = ordinalTemplate(target.ordinal);
    const finalName = template.displayName || target.name;
    const learningProfile = buildLearningProfile({ ...strategy, name: finalName }, target.ordinal, template);
    const visualModel = buildVisual(strategy, finalName, template);
    return {
      target,
      strategy,
      data: {
        name: finalName,
        parentFamily: learningProfile.family,
        learningProfile,
        visualModel,
        coreLogic: buildCoreLogic(learningProfile),
        trapMechanics: buildTrapMechanics(learningProfile),
        tradeWalkthrough: buildWalkthrough(learningProfile),
      },
    };
  });

  console.log(dryRun ? "--- DRY RUN: Batch 641-660 polish preview ---" : "--- APPLYING Batch 641-660 polish ---");
  console.table(updates.map(({ target, strategy, data }) => ({
    ordinal: target.ordinal,
    id: target.id,
    fromName: strategy.name,
    toName: data.name,
    asset: strategy.assetClass,
    family: data.parentFamily,
    level: (data.learningProfile as any).level,
    component: (data.visualModel as any).componentType,
  })));

  if (dryRun) {
    console.log("Dry run complete: no database writes.");
    return;
  }

  for (const update of updates) {
    await prisma.strategy.update({ where: { id: update.target.id }, data: update.data as any });
  }
  console.log("Batch 641-660 polish applied.");
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
