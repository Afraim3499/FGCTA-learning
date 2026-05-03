import { NextResponse } from "next/server";
import { getUser } from "@/lib/auth-actions";
import { getNavaContext } from "@/lib/nava/context";

export async function GET() {
  try {
    const user = await getUser();
    
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const context = await getNavaContext(user.id);
    
    return NextResponse.json(context);
  } catch (error) {
    console.error("[NAVA_CONTEXT_API_ERROR]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
