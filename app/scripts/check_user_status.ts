import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2];
  if (!email) {
    console.error("Please provide email");
    process.exit(1);
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      progress: true,
      attempts: {
        include: { phase: true }
      }
    }
  });

  if (!user) {
    console.log("User not found");
    return;
  }

  console.log("User Status:", JSON.stringify(user, null, 2));
}

main();
