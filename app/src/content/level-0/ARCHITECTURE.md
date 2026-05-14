# Curriculum Architecture Standards

## 1. Module Structure (Module 0.5+)

All modules from 0.5 onward must follow the **Double-Modular Structure** for both content and visuals. This prevents "heavy-load" monolithic files and improves maintainability.

### A. Content Structure
`src/content/level-X/module-X-Y/`
- `core.ts`: Core track cards.
- `forex.ts`: Forex track cards.
- `gold.ts`: Gold track cards.
- `crypto.ts`: Crypto track cards.
- `index.ts`: Module metadata and track aggregation.

### B. Visuals Structure
`src/components/academy/visuals/module-X-Y/`
- `core.tsx`: Core track visual components.
- `forex.tsx`: Forex track visual components.
- `gold.tsx`: Gold track visual components.
- `crypto.tsx`: Crypto track visual components.
- `shared.tsx`: Common components used across the module.
- `index.ts`: Export all components for the visual registry.

### C. Visual Registry
`src/components/academy/visual-registry.tsx`
- Must dynamically import components from the module-specific files.
- Example: `dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldCard1))`

---

## 2. Implementation Checklist
For a step-by-step guide on creating new modules, refer to:
[Module Creation Checklist](./MODULE_CHECKLIST.md)

---

## 3. Technical Debt Log

### [DEBT-001] Module 0.4 Monolithic Visuals
- **Status**: ACCEPTABLE DEBT
- **File**: `src/components/academy/visuals/core/module-0-4.tsx`
- **Description**: Module 0.4 currently uses a single large visual file (233KB) containing all track visuals. It is stable, tested, and approved.
- **Refactor Trigger**: 
  1. Load time becomes slow.
  2. Mobile performance drops.
  3. Visual chunk size exceeds 300KB.
  4. Merge conflicts become frequent.
  5. A dedicated cleanup sprint is scheduled.
- **Current Decision**: Freeze implementation. Do not refactor immediately to avoid regression risk.
