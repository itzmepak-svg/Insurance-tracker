# Layout Architecture — CMCH Location Page

## Page Structure (top to bottom)

```
┌─────────────────────────────────────┐
│  EmergencyBanner (red, 40px)       │  Fixed top, full-width
├─────────────────────────────────────┤
│  Header (sticky, 80px desktop)     │  Sticky on scroll
│  ├─ TopBar (navy, 36px) — desktop  │
│  └─ MainNav + Logo + CTA           │
├─────────────────────────────────────┤
│  HeroBanner (~500px)               │  Navy gradient bg
│  ├─ Breadcrumb                     │
│  ├─ Badge                          │
│  ├─ H1 + address                   │
│  └─ 3 CTAs + wave bottom           │
├─────────────────────────────────────┤
│  QuickStats (80px)                 │  4-column stat strip
├─────────────────────────────────────┤
│  AppointmentBar                    │  Orange bg, form
├─────────────────────────────────────┤
│  AboutSection                      │  2-col: visual + text
├─────────────────────────────────────┤
│  Specialties                       │  Light gray bg, 5-col grid
├─────────────────────────────────────┤
│  DoctorsSection                    │  White bg, 3-col cards
├─────────────────────────────────────┤
│  Facilities                        │  Light gray bg, 4-col grid
├─────────────────────────────────────┤
│  LocationContact                   │  White bg, 2-col map+info
├─────────────────────────────────────┤
│  Footer                            │  Dark navy, 5-col links
│  └─ Accreditation bar              │
└─────────────────────────────────────┘
```

## Grid Systems

| Section | Desktop Columns | Mobile |
|---|---|---|
| QuickStats | 4 | 2 |
| Specialties | 5 | 2 |
| DoctorsSection | 3 | 1 → 2 |
| Facilities | 4 | 1 → 2 |
| LocationContact | 5 (2+3) | 1 |
| Footer | 5 (2+1+1+1) | 1 → 2 |

## Container
`max-w-7xl mx-auto px-4` (1280px max-width, 16px side padding)

## Sticky Behavior
- Header sticks at `top-0` with `z-50`
- Adds `shadow-lg` on scroll (JS scroll listener)

## Section Alternation
White → Light gray → White → Light gray → White → Dark navy footer
This creates visual rhythm without hard lines.
