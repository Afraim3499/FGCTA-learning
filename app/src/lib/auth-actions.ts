"use server";

import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { MarketTrack } from "@/types";
import { createAdminClient } from "@/utils/supabase/admin";
import { cacheUserTier, getCachedUserTier } from "@/lib/redis";

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  const marketTrack = formData.get("marketTrack") as MarketTrack || "multi";

  const admin = createAdminClient();

  // Bypass rate limit by using Admin API
  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      full_name: name,
    },
  });

  console.log("Admin User Creation:", { user: data.user?.id, error });

  if (error) {
    return { error: error.message };
  }

  if (data.user) {
    console.log("Creating/Updating Prisma Profile for:", data.user.id);
    try {
      await prisma.user.upsert({
        where: { id: data.user.id },
        update: {
          email: data.user.email!,
          name: name,
        },
        create: {
          id: data.user.id,
          email: data.user.email!,
          password: "EXTERNAL_AUTH",
          name: name,
          marketTrack: marketTrack,
          progress: {
            create: {
              currentLevel: 0,
              currentPhase: 0,
              xpTotal: 0,
              xpRank: "Recruit",
              certLevel: 0,
            },
          },
        },
      });
      // Initial tier is 0
      await cacheUserTier(data.user.id, 0);
      console.log("✅ Prisma Profile Synchronized & Cached");
    } catch (dbError: any) {
      console.error("❌ Failed to synchronize user profile:", dbError.message);
      return { error: "Database synchronization failed: " + dbError.message };
    }
  }

  // After admin creation, we must sign in to get a session
  const supabase = await createClient();
  const loginResult = await supabase.auth.signInWithPassword({ email, password });
  
  if (loginResult.error) {
    console.error("❌ Auto-login failed:", loginResult.error.message);
    return { error: "Login failed after registration: " + loginResult.error.message };
  }

  console.log("✅ User logged in, redirecting...");
  revalidatePath("/", "layout");
  
  if (marketTrack && marketTrack !== "multi") {
    redirect(`/api/checkout?track=${marketTrack}`);
  } else {
    redirect("/onboarding");
  }
}

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  if (data.user) {
    const profile = await prisma.user.findUnique({
      where: { id: data.user.id },
      include: { progress: true }
    });
    if (profile?.progress) {
      await cacheUserTier(data.user.id, profile.progress.currentLevel);
    }
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/login");
}

export async function getUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getUserTier() {
  const user = await getUser();
  if (!user) return null;

  // Try cache first
  const cachedTier = await getCachedUserTier(user.id);
  if (cachedTier !== null) return cachedTier;

  // Fallback to DB
  const profile = await prisma.user.findUnique({
    where: { id: user.id },
    include: { progress: true }
  });

  const tier = profile?.progress?.currentLevel ?? 0;
  await cacheUserTier(user.id, tier);
  return tier;
}

export async function getProfile() {
  const user = await getUser();
  if (!user) return null;

  return await prisma.user.findUnique({
    where: { id: user.id },
    include: { progress: true },
  });
}

export async function saveOnboardingData(data: { marketTrack: any; experienceLevel: string }) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  await prisma.user.update({
    where: { id: user.id },
    data: {
      marketTrack: data.marketTrack,
    }
  });

  revalidatePath("/dashboard");
}
