# Module Creation Checklist (Module 0.5+)

Use this checklist for every new module from 0.5 onward.

## 1. Directory Structure
- [ ] Create `app/src/content/level-0/module-0-X/`
- [ ] Create `app/src/components/academy/visuals/module-0-X/`

## 2. Content Files
- [ ] `core.ts`: Core track cards only.
- [ ] `forex.ts`: Forex adaptation cards only.
- [ ] `gold.ts`: Gold adaptation cards only.
- [ ] `crypto.ts`: Crypto adaptation cards only.
- [ ] `index.ts`: Module metadata and exports.

## 3. Visual Files
- [ ] `core.tsx`: Core visual components.
- [ ] `forex.tsx`: Forex visual components.
- [ ] `gold.tsx`: Gold visual components.
- [ ] `crypto.tsx`: Crypto visual components.
- [ ] `shared.tsx`: Shared visual helpers (no track-specific logic).
- [ ] `index.ts`: Barrel exports.

## 4. Visual Registry
- [ ] Update `app/src/components/academy/visual-registry.tsx`
- [ ] Use `dynamic(() => import(...))` for every component.
- [ ] Ensure `loading: VisualLoading` is used.

## 5. Roadway Rules
- [ ] If a track is not ready, show "Roadway Not Yet Available".
- [ ] **Do not** fallback to Core content silently.
- [ ] **Do not** create fake placeholder cards.

## 6. Validation
- [ ] Run `npm run build`
- [ ] Run `npx tsx src/scripts/validate/validate-curriculum.ts`
- [ ] **Do not** run live DB sync until validation passes.
