import { createClient } from "@/utils/supabase/server";
import { createCheckoutSession } from "@/lib/payments";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let track: string;
  try {
    const body = await req.json();
    track = body.track;
  } catch (e) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!track) {
    return NextResponse.json({ error: "Missing track parameter" }, { status: 400 });
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const session = await createCheckoutSession(user.id, user.email!, track);
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
