# Resume Strategy

## Current State

`links.resume` in `src/data/profile.ts`:
```ts
resume: "https://vikramseervi.com/resume",
```

This URL is used in two places:
- Hero section — primary Resume CTA button
- Contact section — Resume ghost button

There is currently no `/resume` route, no `public/resume.pdf`, and no redirect configured.
**This means every click on the Resume button currently leads to a 404.**

---

## Options

### Option A — Direct PDF in `public/`

Place the PDF at `public/resume.pdf`. Update `links.resume` to `/resume.pdf`.

**Pros:**
- Zero configuration
- Instantly works on Vercel
- PDF served directly by CDN

**Cons:**
- Updating the resume requires a full redeployment
- The URL `/resume.pdf` is less clean than `/resume`

**Implementation:**
```ts
// src/data/profile.ts
resume: "/resume.pdf",
```

---

### Option B — Next.js Route Handler redirect (Recommended)

Keep `links.resume` as `https://vikramseervi.com/resume`. Create a Route Handler at `src/app/resume/route.ts` that redirects to the actual PDF.

```ts
// src/app/resume/route.ts
import { redirect } from "next/navigation";

export function GET() {
  redirect("https://vikramseervi.com/resume.pdf");
  // or: redirect("https://drive.google.com/your-pdf-url");
}
```

**Pros:**
- Clean `/resume` URL
- PDF can be updated (swap the target URL) without changing the public-facing link
- If the PDF moves to a different host (Drive, Cloudinary, S3), only this one file changes
- Works even before the PDF is ready — can redirect to a "coming soon" page temporarily

**Cons:**
- One extra file to maintain
- Adds a server redirect hop (negligible on Vercel edge)

---

### Option C — External URL directly in `links.resume`

Point `links.resume` directly to a Google Drive, Notion, or Cloudinary PDF URL.

```ts
resume: "https://drive.google.com/file/d/your-id/view",
```

**Pros:**
- No Vercel infrastructure needed
- PDF can be updated by replacing the file on Drive

**Cons:**
- Exposes a third-party URL as the primary CTA — looks less professional
- Google Drive "view" links sometimes fail to load in certain browsers
- URL is not portable — if you move the file, the link breaks

---

## Recommendation

**Use Option B (Route Handler redirect) as the production strategy.**

It gives you a clean canonical `/resume` URL that recruiters can bookmark, combined with the
flexibility to update or move the actual PDF without touching the public-facing link.

Implementation requires:
1. Creating `src/app/resume/route.ts` with a `GET()` that calls `redirect()`.
2. Placing `public/resume.pdf` (or pointing the redirect at an external URL).
3. No change to `links.resume` — it already points to the correct path.

---

## Immediate Unblock (before Option B is implemented)

To prevent the current 404 on the Resume CTA before a Route Handler is created,
place the PDF at `public/resume.pdf` and temporarily update `links.resume`:

```ts
resume: "/resume.pdf",
```

Once the Route Handler is in place, revert to:
```ts
resume: "https://vikramseervi.com/resume",
```
