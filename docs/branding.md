# Branding Assets

This document specifies the requirements for all branding assets used in the portfolio.
None of the assets described here have been generated yet. Each section contains a TODO marker.

---

## Open Graph Image

**TODO: Create `public/og-image.png`**

This file is referenced in the site metadata (`src/app/layout.tsx`) as `/og-image.png`.
Until it exists, social link previews will render without an image.

### Specifications

| Property | Value |
|---|---|
| File path | `public/og-image.png` |
| Format | PNG |
| Dimensions | 1200 × 630 px |
| Color scheme | Dark — match portfolio background (`oklch(0.145 0 0)`) |
| Foreground | High-contrast white (`oklch(0.985 0 0)`) |

### Content layout

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│   B Vikram Seervi                                      │
│   Full-Stack Developer & Software Engineer             │
│                                                        │
│   vikramseervi.com                                     │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Design constraints

- No gradients
- No bright accent colors
- High-contrast typography only
- Name in a large, semibold sans-serif (Geist Sans or equivalent)
- Subtitle in a smaller weight below the name
- Domain or tagline in mono at the bottom
- Generous padding — at least 80px on all sides

---

## Favicon

**TODO: Create `src/app/favicon.ico`**

Next.js App Router automatically serves any file named `favicon.ico` placed at `src/app/favicon.ico`
as `/favicon.ico`. No additional metadata configuration is needed.

### Specifications

| Asset | File path | Dimensions |
|---|---|---|
| Browser favicon | `src/app/favicon.ico` | 32 × 32 px |
| Apple Touch Icon | `public/apple-touch-icon.png` | 180 × 180 px |

To wire the Apple Touch Icon, add the following to the `metadata` export in `src/app/layout.tsx`:

```ts
icons: {
  apple: "/apple-touch-icon.png",
},
```

### Design constraints

- Monogram based on `VS` or `V`
- Dark background matching portfolio (`oklch(0.145 0 0)`)
- White or near-white letterform
- No gradients
- Legible at 16 × 16 px (the effective size in most browser tabs)
- The ICO file should include both 16 × 16 and 32 × 32 frames
