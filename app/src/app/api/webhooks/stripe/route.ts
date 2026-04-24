import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { cacheUserTier } from "@/lib/redis";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error("Webhook Signature Verification Failed:", err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.client_reference_id;
    const track = session.metadata?.track;

    if (userId && track) {
      const marketTrack = track === 'bundle' ? 'multi' : track;
      try {
        await prisma.user.update({
          where: { id: userId },
          data: {
            marketTrack: marketTrack as any,
            progress: {
              upsert: {
                create: {
                  currentLevel: 1,
                  currentPhase: 0,
                  xpTotal: 0,
                  xpRank: "Recruit",
                  certLevel: 0,
                },
                update: {
                  currentLevel: 1,
                }
              }
            }
          },
        });
        await cacheUserTier(userId, 1);
        console.log(`✅ Entitlement Sync: User ${userId} granted access to ${track} track and tier set to 1`);
      } catch (dbError: any) {
        console.error("❌ Failed to update user track after payment:", dbError.message);
      }
    }
  }

  return NextResponse.json({ received: true });
}
