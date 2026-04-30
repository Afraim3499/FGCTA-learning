const { prisma } = require('./src/lib/prisma');
const crypto = require('crypto');

async function main() {
  try {
    console.log("Seeding Phase 10: Final Gate via Prisma...");

    // 1. Update Module 3.10
    await prisma.courseModule.update({
      where: {
        level_moduleNumber: {
          level: 3,
          moduleNumber: "3.10"
        }
      },
      data: {
        title: "Level 3 Final Scenario",
        objective: "Demonstrate your ability to apply the Pre-Trade Checklist in a multi-step decision scenario.",
        content: `# Level 3 Final Scenario\n\nYou have completed the Level 3 curriculum. It is time to prove your discipline.\n\nIn this final scenario, you will be presented with a sequence of chart events. At each step, you must use your **Pre-Trade Checklist** to decide whether to **Wait**, **Enter**, or **Skip**.\n\n### Rules\n- **No Terminal:** This is a decision-only scenario.\n- **Passing Grade:** You must achieve at least 80% accuracy to pass.\n- **XP:** Successful completion awards 100 XP and completes Level 3.`,
        interactiveTaskType: "scenario_link",
        interactiveTaskData: {
          scenarioSlug: "level-3-final-gate",
          passThreshold: 80
        },
        skillLevel: "intermediate"
      }
    });
    console.log("✅ Module 3.10 updated.");

    // 2. Seed Training Scenario
    const scenarioData = {
      slug: "level-3-final-gate",
      title: "Level 3 Entry Logic Assessment",
      description: "Step through 5 chart situations and apply the Pre-Trade Checklist.",
      scenarioType: "structure_annotation",
      status: "active",
      level: 3,
      instrument: "EUR/USD",
      timeframe: "1H",
      candleSourceType: "curated",
      prompt: "Use your Pre-Trade Checklist to decide the correct action at each step.",
      expectedActions: [
        { step: 1, action: "WAIT", justification: "Price is at a Level 2 Zone but no rejection candle has formed yet." },
        { step: 2, action: "ENTER", justification: "Price has produced a clear Level 3 rejection candle at the Level 2 Zone." },
        { step: 3, action: "SKIP", justification: "Price has hit the Invalidation Zone. The trade idea is dead." },
        { step: 4, action: "SKIP", justification: "Price is in the middle of a range with no Level 2 zone nearby." },
        { step: 5, action: "ENTER", justification: "Price has successfully retested the broken level and shown confirmation." }
      ],
      gradingRubric: {
        perfect_score: 100,
        passing_score: 80,
        deduction_per_mistake: 20
      },
      xpAward: 100,
      metadata: {
        imageUrl: "/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/level_3_final_scenario_3_10_v2_1777503710969.png"
      }
    };

    await prisma.trainingScenario.upsert({
      where: { slug: scenarioData.slug },
      update: scenarioData,
      create: {
        id: crypto.randomUUID(),
        ...scenarioData
      }
    });
    console.log("✅ Training Scenario seeded.");

    // 3. Seed Knowledge Test
    const testData = {
      level: 3,
      title: "Level 3: Entry Logic & Confirmation",
      passThreshold: 80,
      timeLimitMin: 20,
      questionsPerAttempt: 10,
      questions: [
        {
          id: "q3_1",
          question: "What is the primary difference between Prediction and Confirmation?",
          options: ["Prediction is safer, Confirmation is riskier", "Prediction assumes a level will hold, Confirmation waits for proof", "There is no difference", "Confirmation is only for professional terminals"],
          correctIndex: 1,
          explanation: "Confirmation requires waiting for a price reaction (rejection or close) before entering."
        },
        {
          id: "q3_2",
          question: "Why is the Candle Close important for timing?",
          options: ["It gives you a better price", "It represents the final agreement of that session", "It is required by the broker", "It makes the spread smaller"],
          correctIndex: 1,
          explanation: "The close filters out 'noise' and spikes that happen during the candle's formation."
        }
      ]
    };

    await prisma.knowledgeTest.upsert({
      where: { level: testData.level },
      update: testData,
      create: testData
    });
    console.log("✅ Knowledge Test seeded.");

  } catch (err) {
    console.error("❌ Error in Phase 10:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
