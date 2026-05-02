import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  user: "postgres.oqaxpfldczldfmbuopbn",
  password: "Rizwan99636?",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function migrateImages(moduleNumber: string, oldToNew: Record<string, string>) {
  const mod = await prisma.courseModule.findUnique({
    where: { level_moduleNumber: { level: 2, moduleNumber } }
  });

  if (!mod) return;

  let newContent = mod.content;
  for (const [oldPath, newPath] of Object.entries(oldToNew)) {
    newContent = newContent.split(oldPath).join(newPath);
  }

  await prisma.courseModule.update({
    where: { level_moduleNumber: { level: 2, moduleNumber } },
    data: { content: newContent }
  });
  console.log(`Migrated images for Module ${moduleNumber}`);
}

async function main() {
  // Module 2.7
  await migrateImages('2.7', {
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rex_01_clean_range_1777243702732.png': '/images/academy/m2-7/REX_01_CLEAN_RANGE.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rex_02_clean_expansion_1777243720068.png': '/images/academy/m2-7/REX_02_CLEAN_EXPANSION.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rex_03_range_vs_expansion_compare_1777243737549.png': '/images/academy/m2-7/REX_03_COMPARE.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rex_04_fake_expansion_trap_1777243755269.png': '/images/academy/m2-7/REX_04_TRAP.png'
  });

  // Module 2.8
  await migrateImages('2.8', {
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rng_01_range_boundaries_1777244020352.png': '/images/academy/m2-8/RNG_01_RANGE_BOUNDARIES.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rng_02_midpoint_line_1777244037733.png': '/images/academy/m2-8/RNG_02_MIDPOINT_LINE.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rng_03_upper_lower_half_1777244071897.png': '/images/academy/m2-8/RNG_03_UPPER_LOWER_HALF.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rng_04_middle_trap_1777244096899.png': '/images/academy/m2-8/RNG_04_MIDDLE_TRAP.png'
  });

  // Module 2.9
  await migrateImages('2.9', {
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/sup_01_basic_supply_zone_1777244424410.png': '/images/academy/m2-9/SUP_01_BASIC_SUPPLY_ZONE.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/sup_02_supply_above_midpoint_1777244441348.png': '/images/academy/m2-9/SUP_02_SUPPLY_ABOVE_MIDPOINT.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/sup_03_poor_supply_middle_1777244459382.png': '/images/academy/m2-9/SUP_03_POOR_SUPPLY_MIDDLE.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/sup_04_better_vs_poor_supply_1777244477708.png': '/images/academy/m2-9/SUP_04_BETTER_VS_POOR_SUPPLY.png'
  });

  // Module 2.10
  await migrateImages('2.10', {
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/dem_01_basic_demand_zone_v2_1777245248592.png': '/images/academy/m2-10/DEM_01_BASIC_DEMAND_ZONE.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/dem_02_demand_below_midpoint_v2_1777245267341.png': '/images/academy/m2-10/DEM_02_DEMAND_BELOW_MIDPOINT.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/dem_03_poor_demand_middle_v2_1777245286033.png': '/images/academy/m2-10/DEM_03_POOR_DEMAND_MIDDLE.png',
    'file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/dem_04_better_vs_poor_demand_v2_1777245305228.png': '/images/academy/m2-10/DEM_04_BETTER_VS_POOR_DEMAND.png'
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
