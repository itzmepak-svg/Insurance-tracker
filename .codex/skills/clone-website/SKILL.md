---
name: clone-website
description: Reverse-engineer and clone any website as a pixel-perfect replica
argument-hint: "<url1> [<url2> ...]"
---

# Clone Website Skill

Reverse-engineer $ARGUMENTS into a pixel-perfect Next.js replica.

## Critical Principles

- **Completeness beats speed** — exhaustive extraction before any building
- **Real content only** — extract actual text and assets, never placeholders
- **Spec files are contracts** — never dispatch a builder without a completed spec
- **Extract all states** — default, hover, active, disabled, loading, error, empty
- **Identify interaction models first** — scroll-driven vs click-driven UIs are fundamentally different

## Common Pitfalls to Avoid

- Confusing click-driven UIs with scroll-driven UIs
- Missing overlay/layered images
- Approximating CSS values instead of extracting exact computed values
- Dispatching builders without completed specification files
- Building from memory instead of from extracted data

---

## Phase 0: Pre-Flight

1. Confirm the target URL(s): $ARGUMENTS
2. Verify the dev server runs: `npm run dev`
3. Check existing `docs/research/` for prior inspection work to avoid duplicating effort
4. Plan the page topology — list all distinct pages/routes to clone

---

## Phase 1: Reconnaissance

### 1.1 Screenshots

Capture full-page screenshots at:
- Desktop (1440px wide)
- Tablet (768px wide)
- Mobile (375px wide)

For every distinct page, plus:
- Dark mode variants (if applicable)
- Key interaction states (hover, active, open menus, modals)
- Loading/skeleton states
- Empty states and error states

Save screenshots to `docs/design-references/`.

### 1.2 Global Token Extraction

Extract and document in `docs/research/DESIGN_TOKENS.md`:

**Colors:**
- Background, surface, overlay
- Text: primary, secondary, muted, disabled
- Accent, brand, interactive
- Border, divider
- Semantic: error, warning, success, info

**Typography:**
- Font families (check `document.fonts`, network tab for font requests)
- Size scale: h1–h6, body, caption, label, code
- Font weights, line heights, letter spacing

**Spacing:**
- Identify the spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, ...)
- Document padding/margin patterns per component type

**Other tokens:**
- Border radius values per element type
- Box shadows / elevation levels
- Transition durations and easing functions
- Breakpoints (when does the layout shift?)

### 1.3 Interaction Sweep

Navigate every interactive element on the page:
- Scroll the full page — note scroll-triggered animations, parallax, sticky behavior
- Click every button, link, tab, accordion
- Hover all interactive elements — note hover states
- Open all modals, drawers, dropdowns
- Test responsive breakpoints with DevTools

Document in `docs/research/INTERACTION_PATTERNS.md`.

### 1.4 Page Topology

Map all routes and sections. For each page:
- List every distinct section from top to bottom
- Note section names (hero, features, pricing, testimonials, footer, etc.)
- Identify shared layout elements (header, footer, sidebar)

Document in `docs/research/LAYOUT_ARCHITECTURE.md`.

### 1.5 Technical Stack Analysis

Document in `docs/research/TECH_STACK_ANALYSIS.md`:
- Framework: check `__NEXT_DATA__`, `window.__NUXT__`, `ng-version` in source
- CSS approach: inspect class names — Tailwind utilities, CSS Modules, Styled Components?
- State management: check Redux DevTools, React Query, Zustand
- API patterns: network tab — REST, GraphQL (`/graphql` endpoint)?
- Font loading: Google Fonts link tags, self-hosted, system fonts
- Image strategy: CDN patterns, lazy loading, srcset, WebP/AVIF
- Animation library: Framer Motion, GSAP, CSS transitions only?
- Icon library: Lucide, Heroicons, Font Awesome, custom SVGs?

---

## Phase 2: Foundation Build

Complete this phase fully before dispatching any component builders.

### 2.1 Design Token Integration

Update `src/app/globals.css` with extracted oklch values:
- Replace placeholder CSS custom properties with exact extracted values
- Configure the correct font families
- Set the correct radius, shadow, and spacing scale

### 2.2 Font Configuration

In `src/app/layout.tsx`:
- Import the correct Google Fonts (or configure self-hosted fonts)
- Apply font variables to the HTML element

### 2.3 TypeScript Interfaces

Create `src/types/index.ts` with interfaces for:
- All data shapes used in the UI (navigation items, cards, pricing tiers, etc.)
- Component prop types for complex components

### 2.4 SVG Icon Extraction

Create `src/components/icons.tsx`:
- Extract all custom SVGs from the target site
- Export each as a named React component
- Supplement with Lucide React where custom icons aren't needed

### 2.5 Asset Downloads

Download all required assets to `public/`:
- Images → `public/images/`
- Videos → `public/videos/`
- Favicons, OG images, webmanifest → `public/seo/`

Use `curl` or `wget` for downloads. Preserve original filenames where possible.

---

## Phase 3: Component Specification & Dispatch

Work section by section, top to bottom. For each section:

### 3.1 Extract Section CSS

Use browser DevTools to extract computed CSS for the section:
- Open DevTools → Elements → select the section root element
- Copy computed styles for the section and key child elements
- Note exact pixel values for padding, margin, gap, font sizes, colors

### 3.2 Write Specification File

Create `docs/research/components/<section-name>.md` containing:

```markdown
# <SectionName> Component Spec

## Layout
- Container: max-width, padding, background
- Grid/flex arrangement
- Responsive behavior at each breakpoint

## Content
- Exact text content (copy-pasted from site)
- Image paths (from public/images/)
- Icon names

## Styling (exact computed values)
- Colors (use oklch values from design tokens)
- Typography (font-size, font-weight, line-height, letter-spacing)
- Spacing (padding, margin, gap)
- Border radius, shadows

## States & Interactions
- Hover states
- Active states
- Animations/transitions

## Subcomponents
- List child components needed
```

### 3.3 Dispatch Builder Agents

Once the spec file is complete and verified:
- Create a worktree branch for each parallel builder: `git worktree add ../clone-<section> -b feat/clone-<section>`
- Dispatch builder agents with the spec file as their contract
- Each builder creates `src/components/<SectionName>.tsx`

Builders must:
- Follow the spec exactly — no creative liberties during emulation phase
- Use only Tailwind utility classes (no inline styles)
- Use TypeScript strict mode
- Export as named export: `export function SectionName() { ... }`

---

## Phase 4: Page Assembly

After all component builders complete:

### 4.1 Merge Component Branches

Merge each feature branch into the main working branch:
```bash
git merge feat/clone-hero feat/clone-features feat/clone-pricing ...
```
Resolve any merge conflicts — you have full context of all work done.

### 4.2 Wire Components in page.tsx

Update `src/app/page.tsx` to import and compose all sections:
```tsx
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
// ...

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      {/* ... */}
    </main>
  );
}
```

### 4.3 Implement Page-Level Behaviors

- Scroll-triggered animations (use Intersection Observer)
- Sticky header behavior
- Smooth scroll to anchor links
- Any page-level state (theme toggle, mobile menu)

---

## Phase 5: Visual QA Diff

### 5.1 Side-by-Side Comparison

- Open the original site and the clone side by side
- Compare each section at desktop, tablet, and mobile
- Check all interactive states

### 5.2 Checklist

- [ ] Colors match exactly (use eyedropper tool to verify)
- [ ] Typography matches (font family, size, weight, line height)
- [ ] Spacing matches (padding, margin, gap)
- [ ] Images load and are correctly sized
- [ ] All hover/active states work
- [ ] Responsive layout matches at all breakpoints
- [ ] Animations and transitions match
- [ ] No TypeScript errors: `npm run typecheck`
- [ ] No lint errors: `npm run lint`
- [ ] Production build succeeds: `npm run build`

### 5.3 Fix Discrepancies

For each visual discrepancy found:
1. Inspect the original's computed styles
2. Update the component to match exactly
3. Re-verify
