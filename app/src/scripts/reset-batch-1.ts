import { PrismaClient, Prisma } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE URL missing");
  process.exit(1);
}

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({
  connectionString,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Resetting upgraded strategies in DB...");
  const result = await prisma.strategy.updateMany({
    data: {
      learningProfile: Prisma.DbNull,
      visualModel: Prisma.DbNull
    }
  });
  console.log(`Successfully reset ${result.count} strategies.`);
  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
