# Design Tokens — Coimbatore Medical College Hospital Location Page

> Source inspiration: Kauvery Hospital location page design language

## Colors

### Brand Palette
| Token | oklch | Hex Approx | Usage |
|---|---|---|---|
| `--brand` | `oklch(0.28 0.09 255)` | `#1b3a6e` | Primary brand, header, CTAs |
| `--brand-dark` | `oklch(0.20 0.09 255)` | `#0d2147` | Hover states, dark header |
| `--brand-light` | `oklch(0.38 0.08 255)` | `#2d5099` | Secondary blue |
| `--accent-color` | `oklch(0.68 0.19 46)` | `#f47920` | Saffron/orange CTAs |
| `--accent-dark` | `oklch(0.56 0.20 46)` | `#d45f0e` | Hover for orange CTAs |

### Semantic Colors
| Token | Value | Usage |
|---|---|---|
| Background | `oklch(1 0 0)` | Page body |
| Surface | `oklch(0.97 0 0)` | Alternate sections (Specialties, Facilities) |
| Text Primary | `oklch(0.16 0 0)` | Headings, primary text |
| Text Secondary | `oklch(0.50 0 0)` | Body text, descriptions |
| Border | `oklch(0.90 0 0)` | Card borders, dividers |
| Emergency Red | `#dc2626` | Emergency banner |

## Typography

### Font Families
- **Heading:** Poppins (Google Fonts) — weights 400, 500, 600, 700
- **Body:** Inter (Google Fonts) — weights 400, 500, 600
- **Mono:** system-ui monospace stack

### Type Scale
| Element | Size | Weight | Line Height |
|---|---|---|---|
| Hero H1 | 48px / 3rem | 700 | 1.2 |
| Section H2 | 30px / 1.875rem | 700 | 1.3 |
| Card H3 | 16px / 1rem | 600 | 1.4 |
| Body | 14-16px | 400 | 1.6 |
| Caption | 12px | 400-500 | 1.5 |
| Badge | 10-11px | 500-700 | 1 |

## Spacing

### Scale
4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80px

### Section Padding
- Desktop: `py-14` (56px) to `py-20` (80px)
- Mobile: `py-10` (40px) to `py-14` (56px)
- Container: `max-w-7xl mx-auto px-4`

## Border Radius
- Card: `rounded-xl` (12px)
- Button: `rounded-md` (6px)
- Avatar: `rounded-full`
- Icon container: `rounded-lg` (8px), `rounded-xl` (12px)

## Shadows
- Card hover: `shadow-md`
- Header scrolled: `shadow-lg`
- Floating stat: `shadow-xl`

## Breakpoints
- Mobile: 375px
- Tablet: 768px (md)
- Desktop: 1024px (lg)
- Wide: 1280px (xl), max-width 1280px (max-w-7xl)
