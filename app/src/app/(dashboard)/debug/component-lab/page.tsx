import { MarkdownRenderer } from "@/components/academy/markdown-renderer";
import { getProfile } from "@/lib/auth-actions";
import { redirect } from "next/navigation";

const TEST_CONTENT = `
# Component Lab: Interactive Learning Blocks

This page is for testing the new interactive blocks for the academy. All interactions here are **Practice Mode** (local-only, non-graded).

---

## 1. ChoiceBlock Test
:::choice
question: Which part of the candle shows the maximum price reached during the session?
options: ["Body", "Upper Wick", "Lower Wick", "Open Price"]
correctIndex: 1
correctFeedback: Correct! The upper wick (shadow) represents the highest price reached before the session closed.
incorrectFeedback: Not quite. Remember that the body only shows the open and close. Look at the shadows!
:::

---

## 2. IdentifyBlock Test
:::identify
question: Click on the **Upper Wick** of this candle.
image: /images/academy/m2-4/SWS_01_HH_HL_UPTREND.png
xMin: 45
xMax: 55
yMin: 10
yMax: 30
successFeedback: Perfect! You identified the wick correctly.
failFeedback: You missed the wick. It's the thin line above the candle body.
:::

---

## 3. Reveal Logic Test
:::quick-check
Is a green candle always bullish?
*Answer: Usually yes, but the context matters. A green candle that fails to break a previous high in a downtrend is still part of a bearish sequence. Always look at structure first.*
:::

---

## 4. Mastery Check Preview
:::launch
:::
`;

export default async function ComponentLab() {
  const profile = await getProfile();
  
  if (!profile?.isAdmin) {
    redirect("/dashboard");
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <MarkdownRenderer content={TEST_CONTENT} />
    </div>
  );
}
