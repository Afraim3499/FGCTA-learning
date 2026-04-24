import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("WARNING: STRIPE_SECRET_KEY is not defined. Payments will fail.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2023-10-16" as any,
});

export const TRACK_PRICES: Record<string, string | undefined> = {
  forex: process.env.STRIPE_PRICE_ID_FOREX,
  crypto: process.env.STRIPE_PRICE_ID_CRYPTO,
  gold: process.env.STRIPE_PRICE_ID_GOLD,
  bundle: process.env.STRIPE_PRICE_ID_BUNDLE,
};

export async function createCheckoutSession(userId: string, email: string, track: string) {
  const normalizedTrack = track.toLowerCase();
  const priceId = TRACK_PRICES[normalizedTrack];
  
  if (!priceId || priceId.startsWith("price_placeholder")) {
    console.error(`[PAYMENTS] Missing or placeholder Price ID for track: ${normalizedTrack}`);
    throw new Error(`The ${normalizedTrack} track is currently unavailable for purchase.`);
  }

  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    client_reference_id: userId,
    metadata: {
      userId,
      track: track.toLowerCase(),
    },
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?cancelled=true`,
  });

  return session;
}
