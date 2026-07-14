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

function hasText(value: unknown, minLength: number): boolean {
  return typeof value === "string" && value.trim().length >= minLength;
}

function scanRestrictedWords(asset: AssetProfile): string[] {
  const text = JSON.stringify(asset).toLowerCase();
  return restrictedWords.filter((word) => text.includes(word));
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
