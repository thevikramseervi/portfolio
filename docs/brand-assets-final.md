# Brand Assets — Final Specification

This document supersedes `docs/branding.md` and consolidates all asset requirements.
All three assets are currently missing. None should be auto-generated — they require manual creation.

---

## 1. Favicon

**Status: MISSING**
**Blocks: browser tab branding**

| Property | Value |
|---|---|
| File path | `src/app/favicon.ico` |
| Format | ICO (multi-resolution) |
| Frames required | 16 × 16 px and 32 × 32 px |
| Background | Dark — `#1a1a1a` (closest sRGB approximation of `oklch(0.145 0 0)`) |
| Foreground | White — `#fafafa` |
| Monogram | `VS` or `V` |

**Next.js integration:** Place the file at `src/app/favicon.ico`. The App Router serves it automatically at `/favicon.ico`. No metadata code change is needed.

**Design constraints:**
- No gradients
- High contrast — legible at 16 × 16 px effective size in browser tabs
- Monospace or geometric letterform preferred to match site typography
- The ICO container must include both 16 × 16 and 32 × 32 frames

**Recommended tools:** Figma (export as ICO via plugin), favicon.io (text-to-favicon generator), or RealFaviconGenerator.

---

## 2. Open Graph Image

**Status: MISSING**
**Blocks: social link previews on LinkedIn, Twitter/X, Discord, WhatsApp**

| Property | Value |
|---|---|
| File path | `public/og-image.png` |
| Format | PNG |
| Dimensions | 1200 × 630 px |
| Background | Dark — `#1a1a1a` |
| Foreground | White — `#fafafa` |
| Padding | Minimum 80 px on all sides |

**Metadata reference (already configured in `src/app/layout.tsx`):**
```
og:image  → https://vikramseervi.com/og-image.png
og:image:width  → 1200
og:image:height → 630
og:image:alt    → B Vikram Seervi
twitter:card    → summary_large_image
twitter:image   → https://vikramseervi.com/og-image.png
```

**Recommended content layout:**
```
┌──────────────────────────────────────────────────────────┐
│  (80px padding)                                          │
│                                                          │
│  B Vikram Seervi                    ← large, semibold    │
│  Full-Stack Developer & Software Engineer  ← lighter     │
│                                                          │
│                                                          │
│  vikramseervi.com                   ← mono, bottom-left  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Design constraints:**
- No gradients
- No bright accent colors
- Name: Geist Sans or Inter, 64–72 px, semibold
- Subtitle: same font, 28–32 px, regular weight
- Domain: monospace, 20 px, muted (`#888`)
- Test preview at: https://www.opengraph.xyz

---

## 3. Apple Touch Icon

**Status: MISSING**
**Blocks: iOS home screen bookmark icon, some Android bookmarks**

| Property | Value |
|---|---|
| File path | `public/apple-touch-icon.png` |
| Format | PNG (no transparency — iOS fills transparent areas with black) |
| Dimensions | 180 × 180 px |
| Background | Dark — `#1a1a1a` (solid, no transparency) |
| Foreground | White — `#fafafa` |
| Content | Same `VS` or `V` monogram as favicon, centered |

**Metadata addition required in `src/app/layout.tsx` once file is placed:**
```ts
icons: {
  apple: "/apple-touch-icon.png",
},
```

This is the only code change required after placing the file.

---

## Asset Checklist

| Asset | Path | Status |
|---|---|---|
| Favicon | `src/app/favicon.ico` | Missing |
| OG Image | `public/og-image.png` | Missing |
| Apple Touch Icon | `public/apple-touch-icon.png` | Missing |
