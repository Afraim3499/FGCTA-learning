import { notFound, redirect } from "next/navigation";
import { AssetLabAccessNotice } from "@/components/asset-lab/AssetLabAccessNotice";
import { AssetLabDetailClient } from "@/components/asset-lab/AssetLabDetailClient";
import { getAssetLabAccessState } from "@/lib/asset-lab-access";
import { assetLabHref, getAssetProfile } from "@/lib/asset-intelligence-data";

type PageProps = {
  params: Promise<{ assetClass: string; slug: string }>;
};

export const dynamic = "force-dynamic";

export default async function AssetLabDetailPage({ params }: PageProps) {
  const { assetClass, slug } = await params;
  const asset = getAssetProfile(assetClass, slug);
  if (!asset) notFound();

  const access = await getAssetLabAccessState();

  if (access.status === "logged-out") {
    redirect(`/login?redirect=${encodeURIComponent(assetLabHref(asset))}`);
  }

  if (access.status === "needs-upgrade") {
    return <AssetLabAccessNotice assetName={asset.name} />;
  }

  return <AssetLabDetailClient asset={asset} />;
}
