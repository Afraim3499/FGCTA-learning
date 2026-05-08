# Lurnava Card Quality Standard — Must Check for Every Card

> Every card must teach a real thing. No filler. No fluff. No recycling.

---

## Card Validation Checklist

Before any card is marked "complete," verify all of the following:

### 1. Learning Purpose
- [ ] Card has a clear, single learning goal
- [ ] The goal is not a repeat of a previous card or module
- [ ] The goal is track-specific (not generic across Forex/Gold/Crypto)

### 2. Visual Teaching
- [ ] Visual teaches the concept faster than text alone
- [ ] Visual is interactive where applicable (hover/tap highlights)
- [ ] Visual is registered in `LessonStage.tsx` (`renderVisual` + `checkIsSpecialLayout`)
- [ ] Visual does not clip at 100% viewport zoom
- [ ] Visual is not decorative-only

### 3. Learning Text
- [ ] Text is compact (not article-length)
- [ ] Text reinforces the visual, does not replace it
- [ ] Text does not contain definitions that belong in Key Terms
- [ ] Language is clear, learner-safe, and uses approved terminology

### 4. Right Rail Context
- [ ] Key Terms are populated with `{ term, definition }` objects
- [ ] Why This Matters is card-specific (not generic motivation)
- [ ] Real-Life Example is practical and market-specific
- [ ] Common Mistake warns without insulting the learner
- [ ] Quick Note provides a one-sentence memory anchor
- [ ] No stale Core context appears when a track is selected

### 5. Track Integrity
- [ ] Card does not duplicate Core content into an adaptation
- [ ] Card does not silently fall back to Core if track content is missing
- [ ] Card teaches a track-specific application of the module concept

### 6. Interactive / Drill Cards (if applicable)
- [ ] Scenario/question is clear and unambiguous
- [ ] Options include one correct and at least one plausible wrong answer
- [ ] Feedback logic explains why each option is correct or incorrect
- [ ] Drill feedback uses "reading" / "evidence" terminology, not "trade" / "profit"

### 7. Summary / Bridge Cards (if applicable)
- [ ] Summarizes what was learned in this module
- [ ] Bridges clearly to the next module's topic
- [ ] Does not introduce new concepts

---

## Language Quick Reference

| ✅ Use | ❌ Avoid |
|--------|---------|
| reading | signal |
| evidence | guaranteed |
| context | prediction |
| structure | guru / master |
| review | secret strategy |
| learner | beginner (overuse) |
| early-stage learner | noob |
| trained learner | expert trader |
| condition | sure thing |
| observation | obviously |

---

## Card Type Reference

| Type | Purpose | Requires Visual | Requires Drill |
|------|---------|----------------|----------------|
| `mission_brief` | Module introduction | Optional | No |
| `visual_intro` | Concept teaching | **Yes** | No |
| `concept` | Detailed explanation | Recommended | No |
| `comparison` | Side-by-side analysis | **Yes** | No |
| `scenario` | Decision practice | Optional | **Yes** |
| `practice` | Interactive drill | **Yes** | **Yes** |
| `summary` | Module wrap-up | No | No |

---

## Red Flags — Auto-Reject

Any card with these characteristics should be rejected and rewritten:

- Two-line filler with no real teaching content
- Generic "why this matters" text like "This is important for your journey"
- AI-written fluff with no specific market detail
- Copy-paste from another track without adaptation
- Definitions in the card body instead of Key Terms
- Wall of text with no visual teaching
- "Beginner" used more than once per card
- Raw JSON visible in any rendering state
