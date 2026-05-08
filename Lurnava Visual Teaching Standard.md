# Lurnava V2 Module Standard — Developer Checklist & Visual Teaching Reference

> **Status**: Official Standard — Approved by Owner after 0.1, 0.2, 0.3 live audit.
> **Last Updated**: 2026-05-08

---

## 1. Three-Column Workspace Architecture

| Column | Purpose | Desktop Width |
|--------|---------|---------------|
| **Left Rail** | Module identity, track switcher, screen stepper, progress | 15–20% (280px) |
| **Center Stage** | Visual-first card, compact learning text, interactions | 55–60% (1fr) |
| **Right Rail** | Key Terms, Why This Matters, Real-Life Example, Common Mistake, Quick Note | 20–30% (340px) |

**Mobile**: Left rail → hamburger drawer. Right rail → below-stage accordion. Center stage fills width.

**Key files**:
- `LessonWorkspaceShell.tsx` — Grid layout & mobile toggles
- `LessonRail.tsx` — Left column (tracks, stepper, progress)
- `LessonStage.tsx` — Center column (card renderer, visual registry)
- `LessonContextRail.tsx` — Right column (accordion rail)

---

## 2. Center Stage Standard

Every card must have:
1. Card label/tag (top-right pill)
2. Title (large, bold)
3. Visual-first teaching area (rendered by `renderVisual()`)
4. Short learning text below visual
5. Bottom navigation (Back / Continue)

The center stage must **not** contain:
- Long article paragraphs
- Generic bullet-heavy explanations
- Definitions that belong in the right rail
- Decorative-only visuals
- Text-heavy middle sections

**Rule**: The visual teaches. The text reinforces. The rail explains.

---

## 3. Right Rail Standard

Every V2 card supports the standard context object:

```typescript
context: {
  keyTerms: Array<string | { term: string; definition: string }>;
  whyThisMatters: string;
  realLifeExample: string;
  commonMistake: string;
  quickNote: string;
  defaultExpanded?: string[];  // override auto-expand behavior
}
```

### Section Rules:
- **Key Terms**: Compact pills. Tap to reveal definition. No wall of text.
- **Why This Matters**: Card-specific. Not generic motivation.
- **Real-Life Example**: Market-specific, relatable scenario.
- **Common Mistake**: Direct warning. No insults. Avoid "beginner."
- **Quick Note**: One-sentence memory anchor.

Rail **must update** on card change, track change, and module change.

---

## 4. Track / Roadway Standard

Each module can have up to 4 roadways:
- **Core Concept** — Universal market reading principle
- **Forex Adaptation** — Quote/pip/session-specific application
- **Gold Adaptation** — Volatility/news/context-specific application
- **Crypto Adaptation** — Venue/liquidity/liquidation-specific application

### Anti-Patterns:
- ❌ Roadways must NOT duplicate Core content
- ❌ Roadways must NOT silently fallback to Core cards
- ❌ Roadways must NOT repeat previous-module lessons
- ✅ If a roadway is not ready, show clean "Not Yet Available" state

---

## 5. Visual Registry

All interactive visuals live in `AcademyVisuals.tsx` as named exports.

**Registration requires 3 steps**:
1. Export the component from `AcademyVisuals.tsx`
2. Import it in `LessonStage.tsx`
3. Add `case "visual-key-name": return <ComponentName />;` to `renderVisual()`
4. Add the same key to `checkIsSpecialLayout()` for full-bleed rendering

**Visual naming convention**: `kebab-case` keys (e.g., `gold-candle-context-board`)

---

## 6. Interactive Visual Standard

Desktop: Hover label → highlight target. Hover target → highlight label.
Mobile: Tap-based equivalents.
Keyboard: Focus-based. No keyboard traps.

Style rules:
- High contrast highlight states
- Subtle glow/border/background transitions
- No layout shift on interaction
- No low-opacity unreadable states
- Respect `prefers-reduced-motion`

---

## 7. Card Payload Schema

```typescript
interface CardData {
  type: string;           // "visual_intro" | "concept" | "comparison" | "scenario" | "practice" | "summary"
  title?: string;
  label?: string;         // top-right pill tag
  body?: string;          // markdown learning text
  visual?: string;        // legacy visual reference
  visualKey?: string;     // visual registry key
  items?: { title: string; body: string; icon?: string }[];
  comparison?: { left: {...}; right: {...} };
  scenario?: { left: {...}; right: {...} };
  taskData?: any;         // for practice cards
  context?: ContextData;  // right rail content
  objective?: string;     // optional objective box
  stepperLabel?: string;  // left rail override
}
```

---

## 8. Module Migration Checklist

Use this checklist when converting any module to V2:

- [ ] Syllabus / learning goals confirmed with owner
- [ ] Card count planned (4–7 cards typical)
- [ ] Core card plan approved
- [ ] Forex adaptation plan (or marked "not ready")
- [ ] Gold adaptation plan (or marked "not ready")
- [ ] Crypto adaptation plan (or marked "not ready")
- [ ] `visualKey` needs identified per card
- [ ] Visual components coded in `AcademyVisuals.tsx`
- [ ] Visuals registered in `LessonStage.tsx` (renderVisual + checkIsSpecialLayout)
- [ ] Right rail context written for every card
- [ ] Drill feedback logic tested (if practice card)
- [ ] Module debrief / bridge card included
- [ ] 100% zoom desktop QA passed
- [ ] Mobile 375px QA passed
- [ ] Build passes (`npm run build`)
- [ ] No raw JSON visible in UI
- [ ] No silent fallback to Core content
- [ ] Production sync script updated
- [ ] DB sync executed (`--live`)

---

## 9. Viewport / UX Requirements

- No 75% zoom dependency
- No visual clipping at 100%
- No horizontal overflow
- CTA always visible/reachable
- Right rail usable at 1024px+
- Left rail usable at 1024px+
- Center stage not squeezed
- Mobile 375px functional (stacked/drawer behavior)
- Nava must not cover lesson content

---

## 10. Language Rules

| Use | Avoid |
|-----|-------|
| "reading" | "signal" |
| "evidence" | "guaranteed" |
| "context" | "guru" |
| "structure" | "secret" |
| "review" | "prediction" |
| "learner" | "beginner" (overuse) |
| "early-stage learner" | "noob" |
| "trained learner" | "expert" |
