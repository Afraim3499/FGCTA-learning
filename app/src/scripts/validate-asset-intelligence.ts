import {
  assetProfiles,
  coverageUniverse,
  type AssetClassKey,
  type AssetProfile,
} from "../lib/asset-intelligence-data";

const expectedCounts: Record<AssetClassKey, number> = {
  crypto: 50,
  forex: 20,
  gold: 1,
};

const restrictedWords = [
  "signal",
  "beginner",
  "recruit",
  "perfect",
  "guaranteed",
  "easy money",
  "journey",
  "take-profit",
  "take profit",
  "profit target",
];

const deepDivePilotSlugs = new Set(["bitcoin", "us-dollar", "gold"]);

const paidThresholds: Record<AssetClassKey, { sources: number; participants: number; events: number; risks: number; drivers: number; holdings: number }> = {
  crypto: { sources: 4, participants: 6, events: 6, risks: 5, drivers: 6, holdings: 5 },
  forex: { sources: 4, participants: 6, events: 6, risks: 5, drivers: 6, holdings: 5 },
  gold: { sources: 5, participants: 6, events: 8, risks: 6, drivers: 6, holdings: 6 },
};

function hasText(value: unknown, minLength: number): boolean {
  return typeof value === "string" && value.trim().length >= minLength;
}

function scanRestrictedWords(asset: AssetProfile): string[] {
  const text = JSON.stringify(asset).toLowerCase();
  return restrictedWords.filter((word) => text.includes(word));
}

function validateProofAsset(asset: AssetProfile): string[] {
  const errors: string[] = [];
  const thresholds = paidThresholds[asset.assetClass];
  const text = JSON.stringify(asset).toLowerCase();

  if (asset.sources.length < thresholds.sources) errors.push(`Proof asset needs at least ${thresholds.sources} source references.`);
  if (asset.drivers.length < thresholds.drivers) errors.push(`Proof asset needs at least ${thresholds.drivers} asset-specific drivers.`);
  if (asset.lab.participants.length < thresholds.participants) errors.push(`Proof asset needs at least ${thresholds.participants} named participants.`);
  if (asset.lab.historicalEvents.length < thresholds.events) errors.push(`Proof asset needs at least ${thresholds.events} historical events.`);
  if (asset.lab.riskMap.length < thresholds.risks) errors.push(`Proof asset needs at least ${thresholds.risks} paid risk items.`);

  for (const participant of asset.lab.participants) {
    if (!hasText(participant.sourceBasis, 12)) errors.push(`Participant is missing source basis: ${participant.name}`);
  }

  if ((asset.assetClass === "crypto" || asset.assetClass === "gold") && /\bpips?\b/.test(text)) {
    errors.push("Crypto and Gold profiles must not use pip language.");
  }
  if (asset.assetClass === "forex" && (!text.includes("pips") || !text.includes("spread") || !text.includes("session") || !text.includes("pair"))) {
    errors.push("Forex proof profile must include pips, spread, session, and pair language.");
  }

  const deepDive = asset.lab.deepDive;
  if (!deepDive) {
    errors.push("Proof asset is missing deepDive paid research.");
    return errors;
  }

  if (deepDive.identity.length < 3) errors.push("Deep identity needs at least 3 entries.");
  if (deepDive.authorityOrFounders.length < 3) errors.push("Authority/origin section needs at least 3 entries.");
  if (deepDive.holderExposureMap.length < thresholds.holdings) errors.push(`Holder/exposure map needs at least ${thresholds.holdings} records.`);
  if (deepDive.marketStructure.length < 4) errors.push("Market structure needs at least 4 entries.");
  if (deepDive.driverRegimes.length < 3) errors.push("Driver regimes need at least 3 entries.");
  if (deepDive.sourceBackedClaims.length < 4) errors.push("Verified claims need at least 4 entries.");
  if (deepDive.reviewNotes.length < 3) errors.push("Review notes need at least 3 entries.");

  for (const exposure of deepDive.holderExposureMap) {
    const label = `${exposure.entityName} / ${exposure.assetOrInstrument}`;
    if (!hasText(exposure.entityName, 3)) errors.push(`Exposure missing entity name: ${label}`);
    if (!hasText(exposure.entityType, 3)) errors.push(`Exposure missing entity type: ${label}`);
    if (!hasText(exposure.assetOrInstrument, 3)) errors.push(`Exposure missing asset/instrument: ${label}`);
    if (!hasText(exposure.amount, 2)) errors.push(`Exposure missing amount: ${label}`);
    if (!hasText(exposure.unit, 2)) errors.push(`Exposure missing unit: ${label}`);
    if (!hasText(exposure.exposureType, 8)) errors.push(`Exposure missing exposure type: ${label}`);
    if (!hasText(exposure.asOfDate, 4)) errors.push(`Exposure missing as-of date: ${label}`);
    if (!hasText(exposure.retrievedAt, 10)) errors.push(`Exposure missing retrieved date: ${label}`);
    if (!hasText(exposure.sourceTitle, 5)) errors.push(`Exposure missing source title: ${label}`);
    if (!hasText(exposure.sourcePublisher, 3)) errors.push(`Exposure missing source publisher: ${label}`);
    if (!String(exposure.sourceUrl).startsWith("https://")) errors.push(`Exposure source must be HTTPS: ${label}`);
    if (!["current", "recent", "stale", "historical"].includes(exposure.freshnessStatus)) errors.push(`Exposure has invalid freshness: ${label}`);
    if (!hasText(exposure.whyItMatters, 60)) errors.push(`Exposure why-it-matters is too thin: ${label}`);
    if (exposure.amount.toLowerCase().includes("not disclosed") && !hasText(exposure.limitations, 40)) {
      errors.push(`Non-disclosed exposure needs a limitation note: ${label}`);
    }
  }

  return errors;
}

function validateReadyAsset(asset: AssetProfile): string[] {
  const errors: string[] = [];

  if (!hasText(asset.seoTitle, 24)) errors.push("SEO title is missing or too short.");
  if (!hasText(asset.seoDescription, 70)) errors.push("SEO description is missing or too short.");
  if (asset.seoDescription.length > 180) errors.push("SEO description is too long for a search result preview.");
  if (!hasText(asset.publicHeadline, 24)) errors.push("Public headline is missing or too short.");
  if (!hasText(asset.publicSubheadline, 80)) errors.push("Public subheadline is missing or too short.");
  if (!hasText(asset.plainEnglish, 120)) errors.push("Plain-English explanation is missing depth.");
  if (!hasText(asset.marketRole, 120)) errors.push("Market role is missing depth.");
  if (!hasText(asset.whyTradersWatch, 120)) errors.push("Why traders watch field is missing depth.");
  if (!hasText(asset.lurnavaMonitorNote, 120)) errors.push("Lurnava monitoring note is missing depth.");
  if (!hasText(asset.conversionCta, 80)) errors.push("Conversion CTA is missing depth.");
  if (!Array.isArray(asset.sources) || asset.sources.length < 2) errors.push("Ready asset needs at least 2 credible source references.");
  for (const source of asset.sources || []) {
    if (!hasText(source.title, 3) || !hasText(source.publisher, 3) || !hasText(source.note, 30) || !String(source.url).startsWith("https://")) {
      errors.push(`Invalid source reference: ${source.title || "untitled"}`);
    }
  }
  if (asset.drivers.length < 4) errors.push("Ready asset needs at least 4 market drivers.");
  if (asset.publicRisks.length < 3) errors.push("Ready asset needs at least 3 public risks.");
  if (!hasText(asset.lab.deskBrief, 150)) errors.push("Paid desk brief is missing depth.");
  if (!hasText(asset.lab.researchQuestion, 80)) errors.push("Paid research question is missing depth.");
  if (!hasText(asset.lab.operatingModel, 120)) errors.push("Paid operating model is missing depth.");
  if (asset.lab.participants.length < 4) errors.push("Paid profile needs at least 4 participants.");
  if (asset.lab.historicalEvents.length < 4) errors.push("Paid profile needs at least 4 historical events.");
  if (asset.lab.correlations.length < 3) errors.push("Paid profile needs at least 3 correlations.");
  if (asset.lab.riskMap.length < 3) errors.push("Paid profile needs at least 3 risk map items.");
  if (asset.lab.researchRoutine.length < 5) errors.push("Paid profile needs at least 5 research routine steps.");
  if (asset.lab.relatedLessons.length < 2) errors.push("Paid profile needs related lessons.");
  if (asset.lab.relatedStrategies.length < 2) errors.push("Paid profile needs related Strategy Lab items.");
  if (deepDivePilotSlugs.has(asset.slug)) errors.push(...validateProofAsset(asset));

  const restricted = scanRestrictedWords(asset);
  if (restricted.length > 0) errors.push(`Restricted wording found: ${restricted.join(", ")}`);

  return errors;
}

function main() {
  const errors: string[] = [];
  const readyProfiles = assetProfiles.filter((asset) => asset.status === "ready");
  const coverageKeys = new Set<string>();

  for (const asset of coverageUniverse) {
    const key = `${asset.assetClass}:${asset.slug}`;
    if (coverageKeys.has(key)) errors.push(`Duplicate coverage slug: ${key}`);
    coverageKeys.add(key);
  }

  for (const assetClass of Object.keys(expectedCounts) as AssetClassKey[]) {
    const count = coverageUniverse.filter((asset) => asset.assetClass === assetClass).length;
    if (count !== expectedCounts[assetClass]) {
      errors.push(`Coverage count mismatch for ${assetClass}: expected ${expectedCounts[assetClass]}, got ${count}`);
    }
  }

  for (const profile of readyProfiles) {
    const coverage = coverageUniverse.find((asset) => asset.assetClass === profile.assetClass && asset.slug === profile.slug);
    if (!coverage) errors.push(`Ready profile missing from coverage universe: ${profile.assetClass}/${profile.slug}`);
    const profileErrors = validateReadyAsset(profile);
    for (const error of profileErrors) errors.push(`${profile.name}: ${error}`);
  }

  const report = {
    coverageTotal: coverageUniverse.length,
    readyProfiles: readyProfiles.length,
    plannedProfiles: coverageUniverse.filter((asset) => asset.status === "planned").length,
    byClass: Object.fromEntries(
      (Object.keys(expectedCounts) as AssetClassKey[]).map((assetClass) => [
        assetClass,
        {
          total: coverageUniverse.filter((asset) => asset.assetClass === assetClass).length,
          ready: readyProfiles.filter((asset) => asset.assetClass === assetClass).length,
        },
      ])
    ),
    errors,
  };

  console.log(JSON.stringify(report, null, 2));

  if (errors.length > 0) {
    process.exit(1);
  }
}

main();
