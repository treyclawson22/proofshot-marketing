# SEO & AEO Execution Plan

> **For Claude:** Execute each step below in order. After completing each step, update the checkbox from `[ ]` to `[x]`, run `npm run build` to verify, and then STOP and wait for the user to say "continue" before proceeding to the next step. Do NOT proceed to the next step without user confirmation.

## Context

The ProofShot Pro marketing site needs to be production-ready for Google Search Console submission and optimized for both traditional search (SEO) and AI search engines (AEO/GEO — Google AI Overviews, ChatGPT, Perplexity). The site has strong foundations but is missing structured data, canonical URLs, and several technical elements.

**Important rules from CLAUDE.md:**
- No fake social proof (no fake stats, testimonials, ratings)
- Never modify logo SVGs
- Use design system tokens (orange: #E97A35, etc.)
- Free tier focus — CTA is "Claim My Free Account"

---

## Step 1: Add Organization Schema + Enhance SoftwareApplication Schema

**File:** `app/layout.tsx`

**What to do:**
1. Add a second `<script type="application/ld+json">` block with Organization schema:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Organization",
     "name": "ProofShot Pro",
     "url": "https://proofshotpro.com",
     "logo": "https://proofshotpro.com/logos/logo-orange-horizontal.svg",
     "description": "Before & after photo documentation app for contractors",
     "email": "hello@proofshotpro.com",
     "founder": [
       { "@type": "Person", "name": "Trey" },
       { "@type": "Person", "name": "Daniel" }
     ],
     "address": {
       "@type": "PostalAddress",
       "addressLocality": "Tomball",
       "addressRegion": "TX",
       "addressCountry": "US"
     }
   }
   ```

2. In the existing SoftwareApplication schema, add the missing Pro Annual offer:
   ```json
   {
     "@type": "Offer",
     "price": "249.99",
     "priceCurrency": "USD",
     "name": "Pro Annual",
     "description": "Unlimited projects, team features, billed annually"
   }
   ```

3. Remove the broken OG image references from the metadata export:
   - Remove `images` array from `openGraph` (references non-existent `/og-image.jpg`)
   - Remove `images` array from `twitter` (references non-existent `/twitter-card.jpg`)
   - Keep all other OG/twitter metadata (title, description, card type, etc.)

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 1 complete

---

## Step 2: Add FAQPage Schema to Home Page FAQ

**File:** `components/sections/FAQ.tsx`

**What to do:**
This is a `"use client"` component. Add a `<script type="application/ld+json">` tag inside the component's return JSX (inside the `<section>`) that outputs FAQPage structured data. Use `dangerouslySetInnerHTML` with `JSON.stringify()`.

The FAQ data is already defined in the `faqs` array at the top of the file. Generate the schema from that array:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What devices does ProofShot work on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ProofShot is a Progressive Web App that works on any modern smartphone or tablet..."
      }
    }
    // ... all 6 FAQs
  ]
}
```

Use `JSON.stringify` to generate from the `faqs` array dynamically so it stays in sync:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
  }}
/>
```

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 2 complete

---

## Step 3: Add FAQPage Schema to Pricing FAQ

**File:** `app/pricing/pricing-faq.tsx`

**What to do:**
Same approach as Step 2. Add a `<script type="application/ld+json">` tag inside the component using the `pricingFaqs` array.

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 3 complete

---

## Step 4: Add BlogPosting + BreadcrumbList Schema to Blog Posts

**File:** `app/blog/[slug]/page.tsx`

**What to do:**
In the `BlogPostPage` component (the default export), add two `<script type="application/ld+json">` blocks inside the JSX (e.g., inside `<main>`):

### BlogPosting schema:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{post.title}",
  "description": "{post.excerpt}",
  "datePublished": "{post.publishedAt}",
  "dateModified": "{post.publishedAt}",
  "author": {
    "@type": "Person",
    "name": "{post.author.name}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ProofShot Pro",
    "url": "https://proofshotpro.com"
  },
  "image": "{post.image ? `https://proofshotpro.com${post.image}` : undefined}",
  "mainEntityOfPage": "https://proofshotpro.com/blog/{post.slug}"
}
```

### BreadcrumbList schema:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proofshotpro.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://proofshotpro.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "{post.title}", "item": "https://proofshotpro.com/blog/{post.slug}" }
  ]
}
```

Build these dynamically using the `post` variable that's already available in the component.

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 4 complete

---

## Step 5: Add Canonical URLs to All Pages

**What to do:**
Add `alternates: { canonical: "https://proofshotpro.com/[path]" }` to the metadata export of every page.

### Files and their canonical URLs:

| File | Canonical URL |
|------|--------------|
| `app/features/page.tsx` | `https://proofshotpro.com/features` |
| `app/pricing/page.tsx` | `https://proofshotpro.com/pricing` |
| `app/about/page.tsx` | `https://proofshotpro.com/about` |
| `app/privacy/page.tsx` | `https://proofshotpro.com/privacy` |
| `app/terms/page.tsx` | `https://proofshotpro.com/terms` |
| `app/blog/page.tsx` | `https://proofshotpro.com/blog` |
| `app/compare/companycam/page.tsx` | `https://proofshotpro.com/compare/companycam` |
| `app/compare/jobber/page.tsx` | `https://proofshotpro.com/compare/jobber` |
| `app/industries/owner-operator/page.tsx` | `https://proofshotpro.com/industries/owner-operator` |
| `app/industries/pressure-washing/page.tsx` | `https://proofshotpro.com/industries/pressure-washing` |
| `app/industries/cleaning/page.tsx` | `https://proofshotpro.com/industries/cleaning` |
| `app/industries/handyman/page.tsx` | `https://proofshotpro.com/industries/handyman` |
| `app/industries/home-remodeling/page.tsx` | `https://proofshotpro.com/industries/home-remodeling` |
| `app/industries/hvac/page.tsx` | `https://proofshotpro.com/industries/hvac` |
| `app/industries/landscaping/page.tsx` | `https://proofshotpro.com/industries/landscaping` |
| `app/industries/painting/page.tsx` | `https://proofshotpro.com/industries/painting` |
| `app/industries/pest-control/page.tsx` | `https://proofshotpro.com/industries/pest-control` |
| `app/industries/pool-service/page.tsx` | `https://proofshotpro.com/industries/pool-service` |
| `app/industries/roofing/page.tsx` | `https://proofshotpro.com/industries/roofing` |

### Dynamic canonical for blog posts:
In `app/blog/[slug]/page.tsx` `generateMetadata()`, add:
```typescript
alternates: {
  canonical: `https://proofshotpro.com/blog/${post.slug}`,
},
```

### Example pattern for static pages:
```typescript
export const metadata: Metadata = {
  // ... existing fields ...
  alternates: {
    canonical: "https://proofshotpro.com/features",
  },
};
```

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 5 complete

---

## Step 6: Fix Contact Page — Add Metadata

**File:** `app/contact/page.tsx`

**Problem:** This is a `"use client"` component, so it can't export `metadata` directly.

**What to do:**
1. Create a new file `app/contact/layout.tsx` (server component) with metadata:
   ```typescript
   import type { Metadata } from "next";

   export const metadata: Metadata = {
     title: "Contact Us — ProofShot Pro",
     description:
       "Contact the ProofShot Pro team. Email hello@proofshotpro.com or use our contact form for support, sales, or partnership inquiries.",
     openGraph: {
       title: "Contact Us — ProofShot Pro",
       description:
         "Contact the ProofShot Pro team. Email hello@proofshotpro.com or use our contact form for support, sales, or partnership inquiries.",
       url: "https://proofshotpro.com/contact",
       siteName: "ProofShot Pro",
       type: "website",
     },
     alternates: {
       canonical: "https://proofshotpro.com/contact",
     },
   };

   export default function ContactLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return children;
   }
   ```

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 6 complete

---

## Step 7: Add rel="noopener noreferrer" to External Links + Improve Meta Descriptions

### External links:
Check these files for `<a>` or `<Link>` tags pointing to `https://app.proofshotpro.com` or other external URLs and add `target="_blank" rel="noopener noreferrer"`:
- `components/Navigation.tsx` — signup CTA link
- `components/Footer.tsx` — signup CTA link
- `components/ui/index.ts` (or wherever Button component lives) — check if `<a>` tags for external hrefs need the attribute

### Improve meta descriptions:
**`app/about/page.tsx`** — Update description in metadata:
- From: `"Built for contractors, by a contractor. Learn the story behind ProofShot Pro and our mission to help service professionals document their work."`
- To: `"ProofShot Pro was founded by contractors Trey and Daniel in Tomball, TX to help service professionals document their work with branded before & after photos."`

Also update the matching `openGraph.description`.

**Verify:** `npm run build` — should pass with no errors.

- [x] Step 7 complete

---

## Final: Build, Commit & Deploy

1. Run `npm run build` one final time
2. Commit all changes with message: "Add structured data, canonical URLs, and SEO fixes for Google indexing"
3. Wait for user to confirm deploy

- [ ] Final step complete
