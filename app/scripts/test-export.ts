import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log("Checking connection...");
  try {
    const userCount = await prisma.user.count();
    console.log(`Connection OK. User count: ${userCount}`);
    
    const data: any = {};
    const models = ["user", "trade", "courseModule"];
    
    for (const m of models) {
      // @ts-ignore
      data[m] = await prisma[m].findMany();
    }
    
    fs.writeFileSync("db_dump.json", JSON.stringify(data, null, 2));
    console.log("Done. db_dump.json created.");
  } catch (err) {
    console.error("Operation failed:", err);
  }
}

main().finally(() => prisma.$disconnect());
