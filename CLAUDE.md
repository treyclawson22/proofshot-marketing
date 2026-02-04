# CLAUDE.md

> Project context for Claude CLI. Read this first.

## Project Overview

**ProofShot Pro** marketing website — a multi-page Next.js site for a contractor-focused SaaS product that creates before/after photo documentation.

**Live Site:** https://proofshotpro.com  
**App:** https://app.proofshotpro.com (separate repo)

## Build Status

Multi-page rebuild is **complete**. All phases implemented:

- **Phase 1 (Core):** Home, Pricing, Privacy, Terms
- **Phase 2 (SEO):** Features, 11 Industry pages, About, Contact, Sitemap
- **Phase 3 (Expansion):** Comparison pages (CompanyCam, Jobber), Blog infrastructure

**Remaining work:**
- Real app screenshots (placeholders in place)
- Real testimonials (when available)

---

## Primary Documentation

### PRD_WEBSITE_V3.md — READ THIS FIRST

The single source of truth for this project. Contains:

- Brand identity & logo rules (Section 2)
- Complete design system — colors, typography, spacing, components (Section 3)
- Full site architecture — 20+ pages (Section 4)
- Page-by-page specifications with exact content (Section 5)
- Content requirements — screenshots, images needed (Section 6)
- SEO strategy — keywords, meta tags, structured data (Section 7)
- Technical requirements — file structure, breakpoints (Section 8)
- Accessibility requirements — WCAG 2.2 (Section 9)
- Performance targets — Core Web Vitals (Section 10)
- Implementation checklist — phased tasks (Section 11)

**Always reference PRD_WEBSITE_V3.md before building anything.**

### Supporting Documents (Project Knowledge)

| Document | Use For |
|----------|---------|
| `DESIGN_PRD_v8.md` | App screen designs for screenshots |
| `PRODUCT_SPEC.md` | Detailed pricing, features, business model |
| `APP_SCREENS_AND_FLOW.md` | App user flow reference |

---

## Tech Stack

```
Framework:    Next.js 14+ (App Router)
Language:     TypeScript
Styling:      Tailwind CSS 4
Icons:        Lucide React
Fonts:        Inter, Inter Tight (via next/font)
Hosting:      Vercel
```

---

## Critical Rules

### 1. No Fake Social Proof

**DO NOT add:**
- ❌ "10,000+ Contractors"
- ❌ "500K+ Photos Taken"
- ❌ "4.9★ Rating"
- ❌ Fake testimonial quotes

The app hasn't launched. Use honest alternatives like "Built for contractors" or remove stats entirely. See PRD Section 5.2 for options.

### 2. Logo Files — Never Modify

Logo SVGs include TM mark and PRO badge that must always be present.

```tsx
// ✓ CORRECT
<img src="/logos/logo-orange-horizontal.svg" alt="ProofShot Pro" />

// ✗ WRONG — never recreate inline
<svg><path d="..." /></svg>
```

### 3. Design System Compliance

Always use the defined tokens:

```css
/* Primary */
--orange: #E97A35
--orange-hover: #D4682A
--orange-light: #FEF3EB

/* Text */
--black: #0A0A0A
--gray-600: #4B5563
--gray-900: #111827

/* Fonts */
--font-display: 'Inter Tight'  /* Headlines */
--font-body: 'Inter'           /* Body text */
```

Full design system in PRD Section 3.

### 4. Free Tier Focus

The site is optimized to drive free account signups. Pro upsell happens in the app.

- **Single CTA:** "Claim My Free Account" across entire site
- **No free trials:** Full-access free tier (not time-limited)
- **Free tier includes:** AI-powered captions, all templates, PDF reports
- **Equal plan presentation:** No badges or featured styling on pricing cards
- **Single button:** One CTA below all pricing cards, not on each card

### 5. Pricing Reference

| Plan | Price | Key Features |
|------|-------|--------------|
| Free | $0/mo | 5 projects/mo, 10 stored, 1 user, AI captions, all templates |
| Pro Monthly | $29.99/mo | Unlimited projects, 100 stored, 3 users, remove branding |
| Pro Annual | $20.83/mo ($249.99/yr) | Same as Pro, 30% savings |

**Add-ons:**
- Additional team members: $9.99/user/month
- Additional storage: $1.99/month per 100 projects

**First-Month Promo:** $9.99 for new Pro users (banner on pricing page)

---

## Site Architecture

```
/                       Home
/features               Features deep-dive
/pricing                Pricing with all tiers
/about                  Origin story
/contact                Contact form

/industries/
  owner-operator        Featured: Solo/small operator focus
  cleaning              Industry landing pages (11 total, alphabetized)
  handyman
  home-remodeling
  hvac
  landscaping
  painting
  pest-control
  pool-service
  pressure-washing
  roofing

/compare/
  companycam            Comparison pages
  jobber

/blog/                  Blog hub
/blog/[slug]            Blog posts

/privacy                Privacy policy
/terms                  Terms of service
```

---

## File Structure

```
app/
├── layout.tsx
├── page.tsx                    # Home
├── globals.css
├── features/page.tsx
├── pricing/page.tsx
├── about/page.tsx
├── contact/page.tsx
├── industries/
│   ├── owner-operator/page.tsx # Custom page (not template)
│   ├── pressure-washing/page.tsx
│   └── ...                     # 10 more industry pages
├── compare/
│   ├── companycam/page.tsx
│   └── jobber/page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── privacy/page.tsx
├── terms/page.tsx
├── sitemap.ts
└── robots.ts

components/
├── ui/                         # Button, Card, Badge
│   └── index.ts
├── sections/                   # Hero, Pricing, FAQ, CTA
│   └── index.ts
├── Navigation.tsx              # Multi-page nav with Industries dropdown
├── Footer.tsx
└── IndustryPageTemplate.tsx    # Shared template for industry pages

lib/
├── industries.ts               # Industry page content (11 industries)
├── blog.ts                     # Blog post data
└── utils.ts

public/
├── logos/
├── screenshots/
└── og/
```

---

## Build Status (All Phases Complete)

### Phase 1: Core
- [x] Shared components (Nav, Footer, Button, Card)
- [x] Home page
- [x] Pricing page (3 tiers, promo banner, add-ons, FAQ)
- [x] Privacy & Terms

### Phase 2: SEO Foundation
- [x] Features page (8 feature sections, comparison table)
- [x] Industry pages (11 total, including owner-operator)
- [x] About & Contact pages
- [x] Sitemap & robots.ts

### Phase 3: Expansion
- [x] Comparison pages (CompanyCam, Jobber with accurate pricing)
- [x] Blog infrastructure (hub + post template)

### Phase 4: Polish
- [x] Performance optimization (Next.js Image, static generation)
- [x] Accessibility audit (focus states, skip link, ARIA, form labels)
- [ ] Real app screenshots (placeholders in place)
- [ ] Real testimonials (when available)

---

## Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Deploy
vercel --prod
```

---

## When In Doubt

1. Check PRD_WEBSITE_V3.md first
2. Match existing component patterns
3. Follow the design system tokens exactly
4. Ask before adding any social proof or testimonials
