# Analytics Execution Plan

> **For Claude:** Execute each step below in order. After completing each step, update the checkbox from `[ ]` to `[x]`, update CLAUDE.md documentation as noted, run `npm run build` to verify, and then STOP and wait for the user to say "continue" before proceeding to the next step. Do NOT proceed to the next step without user confirmation.

## Context

The ProofShot Pro marketing site needs analytics to track traffic, conversions (signup CTA clicks), and user behavior (session recordings, heatmaps). The chosen stack:

- **PostHog** — Primary analytics: events, funnels, session recordings, heatmaps (cookieless mode, no cookie banner needed)
- **Vercel Analytics** — Web Vitals and page performance (built into hosting platform)
- **Google Search Console** — SEO metrics (separate setup, no code changes needed)

**Important rules from CLAUDE.md:**
- No fake social proof (no fake stats, testimonials, ratings)
- Never modify logo SVGs
- Use design system tokens (orange: #E97A35, etc.)
- Free tier focus — CTA is "Claim My Free Account"

---

## Prerequisites (User Must Complete Before Starting)

Before executing this plan, ensure:
1. **PostHog account created** at https://app.posthog.com/signup (free tier: 1M events/mo, 5K session recordings/mo)
2. **PostHog Project API Key** copied from PostHog → Project Settings → Project API Key (starts with `phc_`)
3. **Vercel Analytics enabled** in Vercel Dashboard → Project → Analytics tab → Enable
4. **PostHog env vars added to Vercel** — In Vercel Dashboard → Project → Settings → Environment Variables, add:
   - `NEXT_PUBLIC_POSTHOG_KEY` = your `phc_...` key
   - `NEXT_PUBLIC_POSTHOG_HOST` = `https://us.i.posthog.com`

---

## Step 1: Install Packages

**What to do:**
Run:
```bash
npm install posthog-js @vercel/analytics
```

**Update CLAUDE.md:** In the Tech Stack section, add `Analytics` line:
```
Framework:    Next.js 14+ (App Router)
Language:     TypeScript
Styling:      Tailwind CSS 4
Icons:        Lucide React
Fonts:        Inter, Inter Tight (via next/font)
Analytics:    PostHog, Vercel Analytics
Hosting:      Vercel
```

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 1 complete

---

## Step 2: Create Environment Variables File

**What to do:**
Create `.env.local` in the project root with:
```
NEXT_PUBLIC_POSTHOG_KEY=phc_PLACEHOLDER
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

The user will replace `phc_PLACEHOLDER` with their real key. The `NEXT_PUBLIC_` prefix makes these available client-side in Next.js.

Also create `.env.example` (committed to git, no secrets) so future devs know what's needed:
```
# PostHog Analytics (get your key at https://app.posthog.com)
NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

**Verify:** `npm run build` — should pass with no errors. Confirm `.env.local` is in `.gitignore` (it should already be via `.env*`).

- [x] Step 2 complete

---

## Step 3: Create PostHog Provider Component

**New file:** `components/PostHogProvider.tsx`

**What to do:**
Create a `"use client"` component that:

1. Initializes PostHog with the env var API key on mount (using `useEffect`)
2. Uses **cookieless mode** (`persistence: 'memory'`) — no cookie banner needed
3. Configures PostHog options:
   - `api_host`: from `NEXT_PUBLIC_POSTHOG_HOST`
   - `persistence`: `'memory'` (cookieless — no localStorage or cookies)
   - `capture_pageview`: `false` (we handle this manually in Step 4 for SPA navigation)
   - `capture_pageleave`: `true`
   - `autocapture`: `true` (captures clicks, form submissions automatically)
4. Only initializes when `NEXT_PUBLIC_POSTHOG_KEY` is defined (safe for dev without key)
5. Uses `PostHogProvider` from `posthog-js/react` to wrap children

```tsx
"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (key && typeof window !== "undefined") {
      posthog.init(key, {
        api_host: host || "https://us.i.posthog.com",
        persistence: "memory",
        capture_pageview: false,
        capture_pageleave: true,
        autocapture: true,
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
```

**Update CLAUDE.md:** In the File Structure section, add under `components/`:
```
├── PostHogProvider.tsx          # Analytics provider (PostHog, cookieless)
├── PostHogPageView.tsx          # SPA pageview tracker
```

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 3 complete

---

## Step 4: Create Page View Tracker Component

**New file:** `components/PostHogPageView.tsx`

**What to do:**
Next.js App Router uses client-side navigation (no full page reloads after initial load), so PostHog won't automatically capture page views on route changes. This component fixes that.

Create a `"use client"` component that:
1. Uses `usePathname()` and `useSearchParams()` from `next/navigation`
2. On route change, calls `posthog.capture('$pageview')` with the current URL
3. Wraps `useSearchParams()` in a `<Suspense>` boundary (required by Next.js)

```tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { usePostHog } from "posthog-js/react";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + "?" + searchParams.toString();
      }
      posthog.capture("$pageview", { $current_url: url });
    }
  }, [pathname, searchParams, posthog]);

  return null;
}

export function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}
```

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 4 complete

---

## Step 5: Integrate Providers into Root Layout

**File:** `app/layout.tsx`

**What to do:**

1. Import `PostHogProvider` from `@/components/PostHogProvider`
2. Import `PostHogPageView` from `@/components/PostHogPageView`
3. Import `Analytics` from `@vercel/analytics/next`
4. Wrap `{children}` in the body with `<PostHogProvider>`
5. Add `<PostHogPageView />` inside the provider
6. Add `<Analytics />` inside `<body>` (outside the PostHog provider is fine)

The body should look like:
```tsx
<body className="font-sans antialiased">
  <a href="#main" className="skip-link">
    Skip to main content
  </a>
  <PostHogProvider>
    <PostHogPageView />
    {children}
  </PostHogProvider>
  <Analytics />
</body>
```

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 5 complete

---

## Step 6: Track Signup CTA Conversions

**File:** `components/ui/Button.tsx`

**What to do:**
When a user clicks a Button that links to `app.proofshotpro.com/signup`, capture a PostHog event so we can track conversion rates per page.

1. Import `usePostHog` from `posthog-js/react` (note: this requires the component to be client-side)
2. Since Button is NOT a `"use client"` component and is used in both server and client contexts, we need a different approach:
   - Add `"use client"` directive to Button.tsx (it already uses no server-only features — just JSX and Link)
   - Use `usePostHog` hook to capture the event
3. For Links with external signup hrefs, add an `onClick` that captures:
   ```ts
   posthog?.capture("signup_cta_clicked", {
     page: window.location.pathname,
     button_text: /* children text if available */
   })
   ```
4. Do NOT prevent navigation — just fire the event alongside the click

**Important:** Only capture for links containing `signup` in the href. Don't track every button click (autocapture already handles generic clicks).

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 6 complete

---

## Step 7: Update Documentation and Commit

**What to do:**

1. Update CLAUDE.md — Add a new section after "Quick Commands" called "Analytics":
```markdown
## Analytics

**Stack:** PostHog (behavior + conversions) + Vercel Analytics (Web Vitals) + Google Search Console (SEO)

**PostHog** (cookieless mode — no cookie banner):
- Auto-captures clicks, form submissions, page views
- Custom event: `signup_cta_clicked` fires on all signup CTA clicks
- Session recordings and heatmaps enabled via PostHog dashboard
- Config: `components/PostHogProvider.tsx`

**Vercel Analytics:**
- Automatically tracks Web Vitals (LCP, FID, CLS)
- Enabled via `<Analytics />` in root layout
- Dashboard: Vercel project → Analytics tab

**Environment Variables** (required for PostHog):
- `NEXT_PUBLIC_POSTHOG_KEY` — PostHog project API key
- `NEXT_PUBLIC_POSTHOG_HOST` — PostHog ingest URL (`https://us.i.posthog.com`)
- Set in `.env.local` (local) and Vercel Dashboard → Settings → Environment Variables (production)
```

2. Run `npm run build` one final time
3. Commit all changes with message: "Add PostHog analytics and Vercel Analytics"
4. Wait for user to confirm deploy

- [ ] Step 7 complete
