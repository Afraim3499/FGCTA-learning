import { prisma } from "./prisma";

async function run() {
  const userId = "c1868351-d41a-429b-b56e-82161b585244"; // Fixed ID for testing
  console.log("Creating user:", userId);
  
  try {
    const user = await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        email: "manual-test@example.com",
        password: "EXTERNAL_AUTH",
        name: "Manual Test User",
        marketTrack: "multi",
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
    console.log("✅ User created/updated:", user.id);
  } catch (err: any) {
    console.error("❌ Error:", err.message);
  }
}

run();
