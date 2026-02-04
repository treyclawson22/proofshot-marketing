# ProofShot Pro - Marketing Site

Marketing website for ProofShot Pro. Built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Live URLs

- **Marketing Site**: https://proofshotpro.com
- **App**: https://app.proofshotpro.com (separate repo)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Documentation

### Primary Reference

**[PRD_WEBSITE_V3.md](./docs/PRD_WEBSITE_V3.md)** — Single source of truth containing:

- Brand identity and logo system
- Complete design system (colors, typography, spacing, components)
- Full site architecture (20+ pages)
- Page-by-page specifications with content
- SEO strategy (keywords, meta tags, structured data)
- Technical requirements and file structure
- WCAG 2.2 accessibility requirements
- Performance benchmarks (Core Web Vitals)
- Phased implementation checklist

### Supporting Documents

| Document | Purpose |
|----------|---------|
| `DESIGN_PRD_v8.md` | App design for screenshots |
| `PRODUCT_SPEC.md` | Full pricing and features spec |
| `APP_SCREENS_AND_FLOW.md` | App screen specifications |

---

## Site Architecture

```
proofshotpro.com/
├── / (Home)
├── /features
├── /pricing
├── /about
├── /contact
│
├── /industries/
│   ├── owner-operator      ← Featured: Solo/small operator focus
│   ├── cleaning            (11 total, alphabetized)
│   ├── handyman
│   ├── home-remodeling
│   ├── hvac
│   ├── landscaping
│   ├── painting
│   ├── pest-control
│   ├── pool-service
│   ├── pressure-washing
│   └── roofing
│
├── /compare/
│   ├── companycam
│   └── jobber
│
├── /blog/
│   └── [slug]
│
├── /privacy
└── /terms
```

---

## Design Direction

### Inspiration Sources

| Source | What We Took |
|--------|--------------|
| **Nike** | Bold condensed typography, high contrast, minimalist but powerful |
| **Fieldd** | Beautiful phone mockups, product-centric visual hierarchy |
| **CompanyCam** | Contractor industry positioning, social proof |

### Design Philosophy

- **Light theme** with warm accents
- **Bold typography** (Inter Tight 900 for headlines)
- **Product-centric**: App screenshots are the hero
- **Free tier focus**: Single CTA "Claim My Free Account" drives signups
- **No free trials**: Full-access free tier, Pro upsell in app
- **Single CTA focus**: Drive free account signups
- **Authentic**: No fake social proof or testimonials

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--orange` | `#E97A35` | Primary CTA, accents, brand |
| `--orange-hover` | `#D4682A` | Hover states |
| `--orange-light` | `#FEF3EB` | Light backgrounds, badges |
| `--black` | `#0A0A0A` | Headlines |
| `--gray-900` | `#111827` | Dark sections, footer |
| `--gray-600` | `#4B5563` | Body text |
| `--gray-50` | `#F9FAFB` | Alternate backgrounds |
| `--green` | `#10B981` | Success, checkmarks |

## Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Inter Tight** | 700-900 | Headlines, buttons, display |
| **Inter** | 400-600 | Body text, secondary text |

```css
--font-display: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

---

## Project Structure

```
proofshot-marketing/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home
│   ├── globals.css             # Design tokens, base styles
│   ├── features/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── industries/
│   │   ├── owner-operator/     # Custom page (not template)
│   │   │   └── page.tsx
│   │   ├── pressure-washing/
│   │   │   └── page.tsx
│   │   └── ... (9 more)
│   ├── compare/
│   │   ├── companycam/
│   │   │   └── page.tsx
│   │   └── jobber/
│   │       └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── ui/                     # Button, Card
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── index.ts
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx
│   │   ├── SocialProofBar.tsx
│   │   ├── ValueProps.tsx
│   │   ├── AppShowcase.tsx
│   │   ├── PricingPreview.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── index.ts
│   ├── Navigation.tsx          # Multi-page nav with Industries dropdown
│   ├── Footer.tsx              # 4-column with Industries section
│   └── IndustryPageTemplate.tsx # Shared template for industry pages
│
├── lib/
│   ├── constants.ts            # Colors, pricing data
│   ├── industries.ts           # Industry page data (11 industries)
│   ├── blog.ts                 # Blog post data
│   └── utils.ts
│
├── public/
│   ├── logos/
│   ├── screenshots/
│   └── og/
│
├── docs/
│   └── PRD_WEBSITE_V3.md       # Primary design specification
└── prototypes/                 # HTML mockups for reference
```

---

## Logo Assets

Located in `public/logos/`:

| File | Usage |
|------|-------|
| `proofshot pro logo orange - Horizontal.svg` | Light backgrounds (nav, hero) |
| `proofshot pro logo orange light - Horizontal.svg` | Dark backgrounds (footer) |
| `proofshot pro icon orange.svg` | Favicon, social |

### CRITICAL: Logo Usage Rules

**DO NOT modify logo SVG files.** The logo includes TM mark and PRO badge that must always be present.

```tsx
// ✓ CORRECT - reference the file
<img
  src="/logos/proofshot pro logo orange - Horizontal.svg"
  alt="ProofShot Pro"
  className="h-8 w-auto"
/>

// ✗ WRONG - never recreate inline
<svg viewBox="..."><path d="..." /></svg>
```

---

## Pricing Reference

| Plan | Price | Users | Projects | Notes |
|------|-------|-------|----------|-------|
| Free | $0/mo | 1 | 5/month, 10 stored | Includes AI captions, all templates |
| Pro Monthly | $29.99/mo | 3 | Unlimited, 100 stored | Remove branding, priority support |
| Pro Annual | $20.83/mo | 3 | Unlimited, 100 stored | $249.99/yr, 30% savings |

**Add-ons:**
- Additional team members: $9.99/user/month
- Additional storage: $1.99/month per 100 projects

See PRD_WEBSITE_V3.md Section 5.4 for full pricing page spec.

---

## Deployment

### Vercel

```bash
vercel --prod
```

### DNS (Dreamhost)

| Type | Host | Points to |
|------|------|-----------|
| A | @ | 76.76.21.61 |
| CNAME | www | cname.vercel-dns.com |

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Inter Tight)
- **Hosting**: Vercel
- **Forms**: Formspree (or API route)

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 95 |
| Lighthouse Accessibility | 100 |
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

---

## Development Status

### Phase 1: Core (Complete)
- [x] Design specification (PRD_WEBSITE_V3.md)
- [x] HTML prototypes
- [x] Shared UI components (Button, Card)
- [x] Navigation (multi-page with Industries dropdown, active states)
- [x] Footer (4-column dark with Industries section)
- [x] Home page with all sections
- [x] Pricing page (3 tiers, promo banner, add-ons, FAQ)
- [x] Privacy & Terms pages

### Phase 2: SEO Foundation (Complete)
- [x] Features page (8 feature sections, comparison table)
- [x] Industry pages (11 total):
  - [x] Owner Operators (custom page with competitor pricing comparison)
  - [x] Cleaning
  - [x] Handyman
  - [x] Home Remodeling
  - [x] HVAC
  - [x] Landscaping
  - [x] Painting
  - [x] Pest Control
  - [x] Pool Service
  - [x] Pressure Washing
  - [x] Roofing
- [x] About page
- [x] Contact page
- [x] Sitemap & robots.ts

### Phase 3: Expansion (Complete)
- [x] Comparison pages:
  - [x] vs CompanyCam (accurate pricing: $79-99/mo)
  - [x] vs Jobber (Core $39 + Marketing $79 = $118/mo)
- [x] Blog infrastructure (hub + post template)

### Phase 4: Polish (Complete)
- [x] Performance optimization (Next.js Image component, static generation)
- [x] Accessibility audit (WCAG 2.2 focus states, skip link, ARIA, form labels)
- [ ] Real app screenshots (placeholders in place)
- [ ] Real testimonials (when available)

---

## Important Notes

### No Fake Social Proof

The site should NOT include fabricated statistics or testimonials:

- ❌ "10,000+ Contractors" 
- ❌ "500K+ Photos Taken"
- ❌ Fake testimonial quotes

These can be added later with real data. See PRD_WEBSITE_V3.md Section 5.2 for alternatives.

### Free Tier Strategy

The site focuses on getting users to create free accounts. Key points:
- **CTA:** "Claim My Free Account" used everywhere
- **No free trials:** Free tier has full access to core features forever
- **Free includes:** AI-powered captions, all templates, PDF reports
- **Upsell in app:** Pro upgrade happens after signup, not on marketing site

### First-Month Promo

New users get first month of Pro for $9.99. Include promo banner on pricing page (informational only).
