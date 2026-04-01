# Clone Website Agent — Operational Manual

## Trigger

User runs: `/clone-website <url1> [<url2> ...]`

---

## Core Philosophy

**Completeness over speed.** Every builder agent must receive everything it needs — screenshot, exact CSS values, downloaded assets with local paths, real text content, component structure. No guessing. No approximating. No placeholders.

---

## Phase 1: Reconnaissance

1. Navigate to each target URL
2. Capture full-page screenshots at multiple viewports: mobile (375px), tablet (768px), desktop (1440px)
3. Extract global design tokens:
   - Font families, sizes, weights, line heights
   - Full color palette (backgrounds, text, borders, accents)
   - Favicons, OG images, webmanifest
4. Mandatory interaction sweep — discover ALL dynamic behaviors:
   - Hover states on every interactive element
   - Click/toggle states (tabs, accordions, dropdowns, modals)
   - Scroll-triggered animations and sticky elements
   - Time-driven animations (auto-carousels, loaders)
5. Output files:
   - `docs/research/BEHAVIORS.md` — all discovered interactions with triggers
   - `docs/research/PAGE_TOPOLOGY.md` — full page section map

---

## Phase 2: Foundation Build (Sequential — Do Not Delegate)

Perform these steps yourself before dispatching any builder agents:

1. Update fonts in `src/app/layout.tsx` — match target's font loading exactly
2. Refresh `src/app/globals.css` with target's color palette as CSS variables and any animations/keyframes
3. Create TypeScript interfaces in `src/types/` for all data structures observed
4. Extract all SVG icons into `src/components/icons.tsx` as named React components
5. Download all binary assets (images, videos) via a Node.js script:
   - Images → `public/images/`
   - Videos → `public/videos/`
   - SEO assets (favicon, OG image) → `public/seo/`
   - Record local paths for use in builder prompts

---

## Phase 3: Component Specification & Agent Dispatch

For each page section/component:

### Spec Extraction (Do This Before Dispatching)

1. Use `getComputedStyle()` in browser devtools to extract EXACT CSS values — never estimate
2. Capture styles for EVERY state (default, hover, active, focus, disabled, open/closed)
3. Diff states to identify exactly what changes (color, transform, opacity, etc.)
4. Inspect full DOM for layered assets — every `<img>` and `background-image` including absolutely-positioned overlays
5. Record verbatim text content — no paraphrasing
6. Note responsive breakpoints and layout changes at each

### Write Spec File

Create `docs/research/components/<component-name>.spec.md` containing:
- DOM structure (simplified HTML outline)
- Exact computed styles (not design tokens — the resolved pixel values)
- All states with triggers and what changes
- Per-state content variations
- Asset list with downloaded local paths
- Verbatim text content
- Responsive behavior at each breakpoint
- Interaction model (scroll-driven? click-driven? hover-driven? time-driven?)

> Specs exceeding ~150 lines signal over-complexity — split into smaller components.

### Dispatch Builder Agents

- Launch builder agents in **parallel git worktrees** — each agent works on its own branch
- Each agent receives: its spec file path, the screenshots, the asset paths
- Simple section (e.g. plain banner) = one agent
- Complex section (e.g. 3 card variants + unique hover states) = one agent per variant + one for wrapper
- Monitor builders; merge branches as each completes
- After each merge, verify `npm run build` passes — broken builds are never acceptable

---

## Phase 4: Page Assembly

1. Wire all built components into `src/app/page.tsx`
2. Implement page-level layout (max-width, padding, section order)
3. Implement scroll behaviors (smooth scroll library if original uses Lenis/Locomotive Scroll)
4. Add page-level state management (active section tracking, etc.)

---

## Phase 5: Visual QA Diff

1. Run `npm run dev` and take screenshots of clone at desktop and mobile
2. Compare side-by-side against original screenshots from Phase 1
3. Verify all interactive behaviors match the original
4. Fix every visible discrepancy — pixel-perfect is the goal
5. Run `npm run check` (lint + typecheck + build) — must pass clean

---

## Critical Anti-Patterns to Avoid

- Building click-based interfaces when the original is scroll-driven
- Extracting only the default state (missing tabs, hovers, scroll-triggered changes)
- Overlooking overlay images and absolutely-positioned layered compositions
- Approximating CSS values instead of extracting exact computed styles
- Dispatching builder agents without completed spec files
- Skipping responsive testing at all breakpoints
- Forgetting to detect smooth scroll libraries (Lenis, Locomotive Scroll, etc.)
- Bundling unrelated sections into a single agent
- Using placeholder text or placeholder images — always use real content
- Skipping `npx tsc --noEmit` verification in builder agents

---

## Build Verification Requirements

- Every builder agent must pass: `npx tsc --noEmit`
- After every worktree merge: `npm run build` must pass
- Final output: `npm run check` (lint + typecheck + build) must pass clean

---

## Task Decomposition Guide

| Section Type | Agent Strategy |
|---|---|
| Simple static banner | 1 agent |
| Nav with dropdown menus | 1 agent per dropdown variant + 1 for nav shell |
| Card grid (uniform cards) | 1 agent for card + 1 for grid wrapper |
| Card grid (3 distinct variants) | 1 agent per variant + 1 for grid wrapper |
| Hero with parallax | 1 agent (interaction model critical — verify scroll-driven) |
| Tabbed section | 1 agent per tab content + 1 for tab controller |
| Modal/overlay | 1 agent for trigger + 1 for modal content |
| Footer | 1 agent (unless extremely complex) |

---

## Spec File Template

```markdown
# Component: <ComponentName>

## DOM Structure
<simplified HTML outline>

## Computed Styles (Default State)
- Background: <exact value>
- Color: <exact value>
- Font: <exact value>
- Padding: <exact value>
- ... (all relevant properties)

## States
### Hover
- Trigger: mouse enter
- Changes: <property>: <before> → <after>

### Active / Open
- Trigger: click
- Changes: ...

## Assets
- <description>: /public/images/<filename>

## Text Content
<verbatim text>

## Responsive Behavior
- Mobile (375px): <description>
- Tablet (768px): <description>
- Desktop (1440px): <description>

## Interaction Model
<scroll-driven | click-driven | hover-driven | time-driven>
```
