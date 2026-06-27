# Pre-Launch Checklist

Last audited: 2026-06-27
Build status: PASS (TypeScript, ESLint, next build — all clean)
Routes generated: /, /_not-found, /robots.txt, /sitemap.xml

---

## Production Blockers

These items will cause visible failures or missing functionality at launch.

- [ ] **`public/og-image.png` is missing.**
  Social previews on LinkedIn, Twitter/X, Discord, and WhatsApp will show no image.
  Required: 1200 × 630 PNG. See `docs/brand-assets-final.md`.

- [ ] **`src/app/favicon.ico` is missing.**
  Browser tab shows generic browser icon instead of portfolio monogram.
  Required: ICO with 16 × 16 and 32 × 32 frames. See `docs/brand-assets-final.md`.

- [ ] **`/resume` route does not exist.**
  The Resume CTA (Hero section and Contact section) links to `https://vikramseervi.com/resume`.
  This currently returns a 404. Fix via Route Handler or PDF placement.
  See `docs/resume-strategy.md` for recommended approach.

---

## High Priority (should fix before launch)

- [ ] **Verify `https://library.vikramseervi.com` resolves.**
  Used as the live link for Smart Library Platform in the Projects section.
  If the subdomain is not configured on Vercel or DNS, the link will 404.

- [ ] **Verify `https://seed-attend-ease.netlify.app` is still live.**
  Netlify free-tier sites can be deleted or go offline. Confirm it loads.

- [ ] **Add `apple-touch-icon.png` to `public/` and wire `icons.apple` in `layout.tsx`.**
  Required for iOS home screen bookmarks to show the portfolio icon.
  One line in `metadata`: `icons: { apple: "/apple-touch-icon.png" }`.
  See `docs/brand-assets-final.md`.

---

## Medium Priority (polish before launch)

- [ ] **Verify all GitHub repository links are public.**
  - `https://github.com/thevikramseervi/prismv2` (AttendEase)
  - `https://github.com/thevikramseervi/smart-library-platform` (Smart Library)
  - `https://github.com/Balasubramani2004/JanaDhristi` (JanaDhristi — external repo)
  If any are private, the link will show a 404 to visitors.

- [ ] **Verify all competitive programming profile URLs are correct.**
  - https://codeforces.com/profile/vikramseervi
  - https://www.codechef.com/users/vikramseervi
  - https://leetcode.com/u/vikramseervi/
  - https://atcoder.jp/users/vikramseervi

- [ ] **Create `src/config/site.ts`.**
  The metadata in `layout.tsx` repeats the site title, description, and domain three times each.
  Centralising into a `siteConfig` object prevents future drift. See prior audit recommendation.

---

## Code Quality (low priority, no user-facing impact)

- [ ] **`technicalSkills` export in `src/data/profile.ts` is unused.**
  No section component consumes it. Either create a Skills section or remove the export.
  Currently dead code, but TypeScript and ESLint do not flag it because it is an exported value.

- [ ] **`links.portfolio` in `src/data/profile.ts` is unused.**
  `links.portfolio` (`https://vikramseervi.com`) is defined but no component imports it.
  It is redundant with the canonical URL already in metadata. Remove or use it.

---

## Confirmed Clean (no action required)

- [x] TypeScript — 0 errors
- [x] ESLint — 0 errors, 0 warnings
- [x] Production build — clean, 6 static routes generated
- [x] No TODO/FIXME comments in source code
- [x] No `localhost` references in source code
- [x] No placeholder strings in source code
- [x] No broken internal links (`/` home link in Navbar and 404 page both valid)
- [x] No broken `@/` alias imports
- [x] `robots.txt` — correct, all crawlers allowed, sitemap referenced
- [x] `sitemap.xml` — correct, single homepage entry
- [x] Heading hierarchy — h1 in Hero, h2 in all sections
- [x] `aria-labelledby` on all `<section>` elements
- [x] Descriptive `aria-label` on all external links
- [x] ThemeToggle has `aria-label="Toggle theme"`
- [x] Navbar home link has `aria-label="Home"`
- [x] `suppressHydrationWarning` on `<html>` (required for next-themes)
- [x] React 19 `startTransition` mount guard in ThemeToggle (no hydration mismatch)
- [x] `public/` directory cleaned — no default Next.js boilerplate SVGs
- [x] CSS font variable fixed — `--font-sans: var(--font-geist-sans)` (was circular)
- [x] All section data sourced from `src/data/profile.ts` — no hardcoded content in components
- [x] Custom 404 page (`src/app/not-found.tsx`) — matches portfolio design
- [x] Open Graph metadata configured correctly (blocked only by missing PNG file)
- [x] Twitter card configured correctly (blocked only by missing PNG file)
- [x] Canonical URL set
- [x] `metadataBase` set for correct OG URL resolution

---

## Launch Sequence

Recommended order when ready to go live:

1. Create and place `public/og-image.png`
2. Create and place `src/app/favicon.ico`
3. Resolve resume route (Option B from `docs/resume-strategy.md`)
4. Verify `library.vikramseervi.com` subdomain
5. Deploy to Vercel
6. Add custom domain `vikramseervi.com` in Vercel dashboard
7. Configure DNS (A record → Vercel IP, CNAME `www` → `cname.vercel-dns.com`)
8. Wait for SSL provisioning (typically < 1 minute on Vercel)
9. Test: OG preview (opengraph.xyz), favicon, resume link, all external links
10. Submit sitemap to Google Search Console
