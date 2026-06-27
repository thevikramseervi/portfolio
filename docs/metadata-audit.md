# Metadata Audit

Source: `src/app/layout.tsx`
Audited against: Next.js Metadata API, Open Graph Protocol, Twitter Card spec.

---

## metadataBase

```ts
metadataBase: new URL("https://vikramseervi.com")
```

**Status: PASS**

All relative image paths (`/og-image.png`) are resolved against this base.
When the domain is live, `og:image` will resolve to `https://vikramseervi.com/og-image.png`.

---

## Title

```ts
title: "B Vikram Seervi | Full-Stack Developer & Software Engineer"
```

**Status: PASS**

Length: 58 characters. Google truncates titles above ~60 characters. This is within safe limits.
No template is configured — the 404 page inherits this title unless overridden.

**Recommendation:** Add a title template to distinguish sub-pages if any are added in future:
```ts
title: {
  default: "B Vikram Seervi | Full-Stack Developer & Software Engineer",
  template: "%s | B Vikram Seervi",
}
```
Not required for a single-page portfolio.

---

## Description

```ts
description: "Computer Science and Engineering student focused on full-stack development, backend systems, and competitive programming."
```

**Status: PASS**

Length: 132 characters. Google uses 150–160 characters. Slightly short but acceptable.

---

## Keywords

13 terms covering name, role, technologies, and competitive programming.

**Status: PASS**

Note: Google does not use `meta keywords` for ranking, but other search engines (Bing, Yandex) may.

---

## Canonical URL

```ts
alternates: {
  canonical: "https://vikramseervi.com",
}
```

**Status: PASS**

Correctly set to the production root. Prevents duplicate content issues if the site is ever accessible at both `www` and apex.

---

## Open Graph

| Tag | Value | Status |
|---|---|---|
| `og:title` | "B Vikram Seervi \| Full-Stack Developer & Software Engineer" | PASS |
| `og:description` | Matches meta description | PASS |
| `og:url` | `https://vikramseervi.com` | PASS |
| `og:site_name` | "B Vikram Seervi" | PASS |
| `og:type` | `website` | PASS |
| `og:image` | `/og-image.png` (resolves to `https://vikramseervi.com/og-image.png`) | **FILE MISSING** |
| `og:image:width` | `1200` | PASS |
| `og:image:height` | `630` | PASS |
| `og:image:alt` | "B Vikram Seervi" | PASS |

**Blocker:** `public/og-image.png` does not exist. Metadata is correctly configured — the file just needs to be placed.

---

## Twitter Card

| Tag | Value | Status |
|---|---|---|
| `twitter:card` | `summary_large_image` | PASS — correct for image previews |
| `twitter:title` | Matches og:title | PASS |
| `twitter:description` | Matches meta description | PASS |
| `twitter:image` | `/og-image.png` | **FILE MISSING** |

Same blocker as OG image.

---

## sitemap.xml

```ts
// src/app/sitemap.ts
url: "https://vikramseervi.com",
changeFrequency: "monthly",
priority: 1,
lastModified: new Date()   // stamped at build time
```

**Status: PASS**

Accessible at `/sitemap.xml`. Referenced correctly in `robots.ts`:
```
Sitemap: https://vikramseervi.com/sitemap.xml
```

`lastModified` stamps the build date — this is correct behavior for a statically generated site.

---

## robots.txt

```
User-agent: *
Allow: /
Sitemap: https://vikramseervi.com/sitemap.xml
```

**Status: PASS**

Accessible at `/robots.txt`. All crawlers allowed. Sitemap reference is absolute and correct.

---

## Summary

| Item | Status |
|---|---|
| metadataBase | PASS |
| title | PASS |
| description | PASS |
| keywords | PASS |
| canonical | PASS |
| og:title | PASS |
| og:description | PASS |
| og:url | PASS |
| og:type | PASS |
| og:image (configured) | PASS |
| og:image (file exists) | **FAIL — missing** |
| twitter:card | PASS |
| twitter:image (configured) | PASS |
| twitter:image (file exists) | **FAIL — missing** |
| sitemap.xml | PASS |
| robots.txt | PASS |
