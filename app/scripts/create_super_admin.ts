import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

async function main() {
  const email = "afraim.afraim99@gmail.com";
  const password = "Rizwan34?";
  const name = "Rizwan";

  console.log(`🚀 Provisioning Super Admin: ${email}`);

  // Try to create or find user
  const { data: userData, error: listError } = await supabaseAdmin.auth.admin.listUsers();
  if (listError) throw listError;

  let user = userData.users.find(u => u.email === email);

  if (!user) {
    console.log("Creating new Auth user...");
    const { data: createData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: name }
    });
    if (createError) throw createError;
    user = createData.user;
  }

  if (user) {
    console.log(`Synchronizing Prisma Profile for ID: ${user.id}`);
    await prisma.user.upsert({
      where: { id: user.id },
      update: {
        isAdmin: true,
        marketTrack: "multi",
        name: name,
        progress: {
          upsert: {
            create: {
              currentLevel: 10,
              currentPhase: 5,
              xpTotal: 99999,
              xpRank: "INSTITUTIONAL_ALPHA",
              certLevel: 10,
            },
            update: {
              currentLevel: 10,
              xpTotal: 99999,
              xpRank: "INSTITUTIONAL_ALPHA",
            }
          }
        }
      },
      create: {
        id: user.id,
        email: email,
        password: "EXTERNAL_AUTH",
        name: name,
        isAdmin: true,
        marketTrack: "multi",
        progress: {
          create: {
            currentLevel: 10,
            currentPhase: 5,
            xpTotal: 99999,
            xpRank: "INSTITUTIONAL_ALPHA",
            certLevel: 10,
          }
        }
      }
    });
    console.log("✅ Super Admin Provisioned Successfully.");
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
