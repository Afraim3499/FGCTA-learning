import { getProfile } from "@/lib/auth-actions";

export type AssetLabAccessStatus = "logged-out" | "needs-upgrade" | "authorized";

export type AssetLabAccessState = {
  status: AssetLabAccessStatus;
  currentLevel: number | null;
  isAdmin: boolean;
  accessBasis: "none" | "level-one-or-above" | "admin";
};

export async function getAssetLabAccessState(): Promise<AssetLabAccessState> {
  const profile = await getProfile();

  if (!profile) {
    return {
      status: "logged-out",
      currentLevel: null,
      isAdmin: false,
      accessBasis: "none",
    };
  }

  const currentLevel = profile.progress?.currentLevel ?? 0;
  const isAdmin = profile.isAdmin;

  if (isAdmin) {
    return {
      status: "authorized",
      currentLevel,
      isAdmin,
      accessBasis: "admin",
    };
  }

  if (currentLevel >= 1) {
    return {
      status: "authorized",
      currentLevel,
      isAdmin,
      accessBasis: "level-one-or-above",
    };
  }

  return {
    status: "needs-upgrade",
    currentLevel,
    isAdmin,
    accessBasis: "none",
  };
}
