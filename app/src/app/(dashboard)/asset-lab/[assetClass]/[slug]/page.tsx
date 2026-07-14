import { notFound } from "next/navigation";
import { AssetLabDetailClient } from "@/components/asset-lab/AssetLabDetailClient";
import { getAssetProfile, getReadyAssetProfiles } from "@/lib/asset-intelligence-data";

type PageProps = {
  params: Promise<{ assetClass: string; slug: string }>;
};

export function generateStaticParams() {
  return getReadyAssetProfiles().map((asset) => ({
    assetClass: asset.assetClass,
    slug: asset.slug,
  }));
}

export default async function AssetLabDetailPage({ params }: PageProps) {
  const { assetClass, slug } = await params;
  const asset = getAssetProfile(assetClass, slug);
  if (!asset) notFound();

  return <AssetLabDetailClient asset={asset} />;
}
