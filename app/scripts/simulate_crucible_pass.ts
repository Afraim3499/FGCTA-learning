import { prisma } from "../src/lib/prisma";
import { completeModule } from "../src/lib/academy-actions";
import { AssetType } from "@prisma/client";

async function main() {
  console.log("🚀 Starting E2E Simulation: Crucible Pass & Certification Generation");

  // 1. Setup Mock User
  const userEmail = `sim_student_${Date.now()}@fgc.academy`;
  const user = await prisma.user.create({
    data: {
      email: userEmail,
      name: "Simulated Graduate",
      password: "N/A",
      marketTrack: "forex"
    }
  });
  console.log(`✅ Created mock student: ${userEmail}`);

  // 2. Initialize Progress
  await prisma.userProgress.create({
    data: {
      userId: user.id,
      currentLevel: 8,
      xpTotal: 25000,
      xpRank: "PRODIGY",
    }
  });

  // 3. Find the Crucible Module
  const crucibleModule = await prisma.courseModule.findUnique({
    where: {
      level_moduleNumber: {
        level: 8,
        moduleNumber: "8.1"
      }
    }
  });

  if (!crucibleModule) {
    throw new Error("Crucible module (8.1) not found in database. Run seed first.");
  }

  console.log("⚡ Executing Crucible Module (8.1)...");

  // 4. Trigger Completion (This should trigger issueCertification)
  try {
    await completeModule(user.id, crucibleModule.id, "forex");
  } catch (err: any) {
    if (err.message?.includes("revalidatePath")) {
      console.log("⚠️  Caught expected Next.js revalidation error (script environment). Continuing...");
    } else {
      throw err;
    }
  }

  console.log("⏳ Awaiting certification indexing...");

  // 5. Verify Certification Generation
  const certs = await prisma.certification.findMany({
    where: { userId: user.id }
  });

  if (certs.length > 0) {
    console.log("🏆 SUCCESS: Certification generated automatically!");
    console.log(`   Cert ID: ${certs[0].certIdPublic}`);
    console.log(`   Title: ${certs[0].certTitle}`);
    console.log(`   Grade: ${certs[0].finalScore}%`);
  } else {
    console.error("❌ FAILURE: No certification found in database.");
  }

  // Cleanup (Optional)
  // await prisma.user.delete({ where: { id: user.id } });
}

main()
  .catch((e) => {
    console.error("❌ Simulation failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
