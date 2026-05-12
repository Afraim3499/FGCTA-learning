import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

async function setMulti() {
  const pool = new Pool({ 
    connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    // Find the first user (assume this is the test user)
    const user = await prisma.user.findFirst();
    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: { marketTrack: "multi" }
      });
      console.log(`Updated user ${user.email} to 'multi' track.`);
    } else {
      console.log("No user found.");
    }
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

setMulti();
