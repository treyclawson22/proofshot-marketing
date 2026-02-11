# ProofShot Pro — Website PRD v3.0

**Document Version:** 3.0  
**Last Updated:** January 2026  
**Status:** Final  

> **Single source of truth** for the ProofShot Pro marketing website.  
> This document combines design system, multi-page architecture, content, and implementation specs.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Brand Identity](#2-brand-identity)
3. [Design System](#3-design-system)
4. [Site Architecture](#4-site-architecture)
5. [Page Specifications](#5-page-specifications)
6. [Content Requirements](#6-content-requirements)
7. [SEO Strategy](#7-seo-strategy)
8. [Technical Requirements](#8-technical-requirements)
9. [Accessibility (WCAG 2.2)](#9-accessibility-wcag-22)
10. [Performance Benchmarks](#10-performance-benchmarks)
11. [Implementation Checklist](#11-implementation-checklist)

---

## 1. Executive Summary

### 1.1 Project Overview

A multi-page marketing website for ProofShot Pro, targeting service industry contractors (pressure washing, pest control, landscaping, HVAC, etc.). The site will drive free trial signups through bold, conversion-optimized design while building organic search visibility through industry-specific landing pages.

### 1.2 Design Philosophy

Inspired by Nike's bold branding, Fieldd's app-centric showcase approach, and CompanyCam's contractor-focused messaging. Light-themed, visually striking, product front and center.

### 1.3 Core Principles

| Principle | Description |
|-----------|-------------|
| **Bold & Confident** | Nike-inspired typography, high contrast, decisive design |
| **Product-Centric** | The app is the hero, showcased beautifully throughout |
| **Light & Clean** | Bright, professional, trustworthy aesthetic |
| **Contractor-Friendly** | Speaks their language, shows their world |
| **Action-Oriented** | Clear CTAs, single path to signup |
| **SEO-Optimized** | Industry pages for organic discovery |
| **Performance-First** | Sub-2.5s LCP, optimized for Core Web Vitals |
| **Accessible** | WCAG 2.2 AA compliant |
| **Authentic** | No fake social proof — real data only |

### 1.4 Success Metrics

| Metric | Target |
|--------|--------|
| Conversion Rate (Free Trial) | > 8% |
| Bounce Rate | < 40% |
| Time on Page | > 90 seconds |
| Lighthouse Performance | > 95 |
| Lighthouse Accessibility | 100 |
| Core Web Vitals | All "Good" |

### 1.5 Key URLs

| Purpose | URL |
|---------|-----|
| Marketing site | https://proofshotpro.com |
| App | https://app.proofshotpro.com |
| Signup | https://app.proofshotpro.com/signup |

---

## 2. Brand Identity

### 2.1 Logo System

| Variant | File | Usage |
|---------|------|-------|
| Horizontal (Dark) | `logo orange - Horizontal.svg` | Light backgrounds (nav, hero) |
| Horizontal (Light) | `logo orange light - Horizontal.svg` | Dark backgrounds (footer) |
| Vertical | `logo orange - Vertical.svg` | Mobile, compact spaces |
| Icon Only | `icon orange.svg` | Favicon, app icons, social |

#### CRITICAL: Logo Usage Rules

**The logo SVG files must NEVER be modified in any way other than scaling.**

The complete logo includes:
- Camera/phone icon (left)
- "PROOFSHOT" wordmark (center)
- TM trademark symbol (top right of wordmark)
- "PRO" badge box (right)

**All elements must always be present.** Missing any element (especially TM or PRO badge) is a brand violation.

| Rule | Requirement |
|------|-------------|
| **No Path Modification** | Never edit, recreate, or extract individual SVG paths |
| **No Inline Recreation** | Never copy SVG code into JSX/HTML components |
| **Scaling Only** | The ONLY permitted change is width/height scaling |
| **Use Original Files** | Always load the actual `.svg` file via `<img>` tag or CSS |
| **Complete Logo** | Every usage must show the full logo with all elements |

**Implementation:**
```tsx
// CORRECT - reference the actual file
<img
  src="/logos/proofshot-pro-logo-orange-horizontal.svg"
  alt="ProofShot Pro"
  className="h-8 w-auto"
/>

// WRONG - never recreate inline
<svg viewBox="..."><path d="..." /></svg>
```

### 2.2 Color Palette

#### Primary Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--black` | `#0A0A0A` | 10, 10, 10 | Primary text, headlines |
| `--white` | `#FFFFFF` | 255, 255, 255 | Backgrounds, light text |
| `--orange` | `#E97A35` | 233, 122, 53 | Primary CTA, accents, brand |
| `--orange-hover` | `#D4682A` | 212, 104, 42 | Hover states |
| `--orange-light` | `#FEF3EB` | 254, 243, 235 | Light backgrounds, badges |

#### Neutral Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--gray-50` | `#F9FAFB` | Alternate section backgrounds |
| `--gray-100` | `#F3F4F6` | Borders, dividers |
| `--gray-200` | `#E5E7EB` | Card borders, inputs |
| `--gray-400` | `#9CA3AF` | Placeholder text, icons |
| `--gray-500` | `#6B7280` | Secondary text |
| `--gray-600` | `#4B5563` | Body text |
| `--gray-900` | `#111827` | Headlines, dark backgrounds |

#### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--green` | `#10B981` | Success, "After" states, checkmarks |
| `--green-dark` | `#059669` | Hover states for green |
| `--red` | `#EF4444` | Errors, warnings |
| `--blue` | `#3B82F6` | Links, info states |

### 2.3 Typography

#### Font Stack

```css
--font-display: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Google Fonts Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

#### Type Scale

| Element | Font | Weight | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing |
|---------|------|--------|----------------|---------------|-------------|----------------|
| Hero H1 | Inter Tight | 900 | 80px / 5rem | 44px / 2.75rem | 0.92 | -0.04em |
| Section H2 | Inter Tight | 800 | 48px / 3rem | 32px / 2rem | 1.1 | -0.03em |
| Card H3 | Inter Tight | 700 | 20px / 1.25rem | 18px / 1.125rem | 1.3 | -0.02em |
| Body Large | Inter | 400 | 20px / 1.25rem | 18px / 1.125rem | 1.6 | 0 |
| Body | Inter | 400 | 18px / 1.125rem | 16px / 1rem | 1.6 | 0 |
| Body Small | Inter | 500 | 14px / 0.875rem | 14px / 0.875rem | 1.5 | 0 |
| Button | Inter Tight | 700 | 18px / 1.125rem | 16px / 1rem | 1 | 0 |
| Caption | Inter | 500 | 12px / 0.75rem | 12px / 0.75rem | 1.4 | 0.02em |

#### Typography Guidelines

- **Headlines:** Use `text-transform: uppercase` for hero and section headlines
- **Contrast:** Ensure minimum 4.5:1 contrast ratio for body text, 3:1 for large text
- **Line Length:** Maximum 70 characters per line for body text
- **Hierarchy:** Maximum 3 levels of hierarchy per section

---

## 3. Design System

### 3.1 Spacing Scale

Based on 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight gaps, icon padding |
| `--space-2` | 8px | Small gaps |
| `--space-3` | 12px | Default gap |
| `--space-4` | 16px | Component padding |
| `--space-5` | 20px | Card padding |
| `--space-6` | 24px | Section gaps |
| `--space-8` | 32px | Large gaps |
| `--space-10` | 40px | Section padding mobile |
| `--space-12` | 48px | Section padding tablet |
| `--space-16` | 64px | Section padding desktop |
| `--space-20` | 80px | Large section padding |
| `--space-24` | 96px | Hero padding |

### 3.2 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Small buttons, badges |
| `--radius-md` | 12px | Cards, inputs |
| `--radius-lg` | 16px | Large cards |
| `--radius-xl` | 20px | Pricing cards |
| `--radius-2xl` | 24px | Phone mockups inner |
| `--radius-full` | 100px | Pills, CTAs |
| `--radius-phone` | 44px | Phone mockup outer |

### 3.3 Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.15);
--shadow-phone: 0 50px 100px -20px rgba(0, 0, 0, 0.25);
--shadow-cta: 0 4px 14px rgba(233, 122, 53, 0.35);
--shadow-cta-hover: 0 6px 20px rgba(233, 122, 53, 0.4);
```

### 3.4 Component Specifications

#### Primary Button

```css
.btn-primary {
  background: var(--orange);
  color: white;
  padding: 18px 32px;
  border-radius: var(--radius-full);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  box-shadow: var(--shadow-cta);
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--orange-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-cta-hover);
}

.btn-primary:focus-visible {
  outline: 3px solid var(--orange);
  outline-offset: 2px;
}
```

**Minimum touch target:** 44x44px (WCAG 2.2 requirement)

#### Secondary Button

```css
.btn-secondary {
  background: transparent;
  color: var(--gray-900);
  padding: 18px 32px;
  border: 2px solid var(--gray-300);
  border-radius: var(--radius-full);
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: var(--gray-900);
}
```

#### Cards

```css
.card {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-xl);
  padding: 24px;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--gray-300);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

#### Phone Mockup

```css
.phone-mockup {
  width: 300px;
  height: 620px;
  background: var(--black);
  border-radius: var(--radius-phone);
  padding: 12px;
  box-shadow: var(--shadow-phone);
  transform: perspective(1000px) rotateY(-6deg) rotateX(2deg);
  transition: transform 0.4s ease;
}

.phone-mockup:hover {
  transform: perspective(1000px) rotateY(-3deg) rotateX(1deg);
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  border-radius: 34px;
  overflow: hidden;
}
```

#### Pricing Card

```css
.pricing-card {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-xl);
  padding: 32px;
  text-align: center;
}

.pricing-card.featured {
  border: 2px solid var(--orange);
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

.pricing-badge {
  background: var(--orange);
  color: white;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}
```

#### FAQ Accordion

```css
.faq-item {
  border-bottom: 1px solid var(--gray-200);
}

.faq-question {
  padding: 20px 0;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  padding-bottom: 20px;
  color: var(--gray-600);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.open .faq-answer {
  max-height: 500px;
}

.faq-chevron {
  transition: transform 0.3s ease;
}

.faq-item.open .faq-chevron {
  transform: rotate(180deg);
}
```

---

## 4. Site Architecture

### 4.1 Complete Sitemap

```
proofshotpro.com/
│
├── / (Home)
├── /features
├── /pricing
├── /about
│
├── /industries/
│   ├── pressure-washing
│   ├── pest-control
│   ├── landscaping
│   ├── cleaning
│   ├── painting
│   ├── roofing
│   ├── hvac
│   └── pool-service
│
├── /use-cases/
│   ├── social-media-marketing
│   ├── customer-reports
│   ├── portfolio
│   └── get-reviews
│
├── /compare/
│   ├── companycam
│   └── jobber
│
├── /blog/
│   ├── (hub page)
│   └── [slug] (individual posts)
│
├── /privacy
├── /terms
└── /contact
```

### 4.2 Build Priority

#### Phase 1: Core (Week 1)

| Priority | Page | Notes |
|----------|------|-------|
| 1 | Home `/` | Primary landing page |
| 2 | Pricing `/pricing` | Include Lifetime deal |
| 3 | Privacy `/privacy` | Required for launch |
| 4 | Terms `/terms` | Required for launch |

#### Phase 2: SEO Foundation (Week 2)

| Priority | Page | Notes |
|----------|------|-------|
| 5 | Features `/features` | Detailed breakdown |
| 6 | Pressure Washing `/industries/pressure-washing` | Highest volume |
| 7 | Pest Control `/industries/pest-control` | Trey's industry |
| 8 | Landscaping `/industries/landscaping` | High volume |
| 9 | About `/about` | Trust building |
| 10 | Contact `/contact` | Lead capture |

#### Phase 3: Expansion (Week 3+)

| Priority | Page | Notes |
|----------|------|-------|
| 11-15 | Remaining industry pages | One per day |
| 16-19 | Use case pages | |
| 20 | CompanyCam comparison | Bottom-funnel |
| 21+ | Blog infrastructure | Long-term SEO |

### 4.3 URL Structure Rules

- All lowercase
- Hyphens for word separation (not underscores)
- No trailing slashes
- Canonical URLs self-referencing
- Max 3 levels deep

---

## 5. Page Specifications

### 5.1 Shared Components

#### Navigation

**Behavior:**
- Fixed top position
- Transparent → White with shadow on scroll (after 50px)
- Height: 64px desktop, 56px mobile
- Hide on scroll down, show on scroll up (mobile only)

**Elements:**
```
[Logo]          [Features] [Pricing] [FAQ]          [Get Started Free →]
```

- Logo (left) — links to home
- Nav links (center): Features, Pricing, FAQ
- CTA button (right): "Get Started Free" — orange, pill shape
- Mobile: Hamburger menu → Full-screen overlay

**Accessibility:**
- Skip to main content link (hidden until focused)
- Keyboard navigable
- ARIA labels for mobile menu toggle

#### Footer

**Layout:** 4-column (brand + 3 link columns)

```
[Logo - light version]

The easiest way for contractors          Product        Company        Legal
to document work and share proof.        Features       About          Privacy
                                         Pricing        Blog           Terms
                                         FAQ            Contact

─────────────────────────────────────────────────────────────────────────────
© 2026 ProofShot Pro. All rights reserved.        Made for contractors, by contractors.
```

**Design:**
- Dark background (`--gray-900`)
- Light text, orange hover on links
- Logo uses light variant

---

### 5.2 Home Page (`/`)

#### Section 1: Hero

**Layout:** Split (60/40) - Text left, phone mockup right

**Content:**
```
[Badge] NEW — AI-powered captions

SHARE
THE
PROOF.

Before & after documentation for contractors who mean business.
Capture, brand, share — in 30 seconds.

[Get Started Free →]  [See How It Works →]
```

**Visual Elements:**
- Angled phone mockup showing capture screen
- Floating badges: "PDF Report Ready", "Sent to Customer"
- Subtle animation on badges (float effect)

**Mobile Behavior:**
- Stack: Badge → Headline → Subheadline → CTAs → Phone
- Center aligned
- Phone mockup: straight-on (no perspective transform)

> **IMPORTANT:** Do NOT include fake stats like "10,000+ Contractors" or "500K+ Photos". 
> These can be added later with real data. For launch, omit entirely or use feature-based 
> stats like "AI-powered captions" | "Free to start" | "30-second workflow"

---

#### Section 2: Social Proof Bar

**Purpose:** Build trust with industry relevance

**Content:**
```
Trusted by contractors in every trade

[Pressure Washing] [Pest Control] [Landscaping] [HVAC] [Roofing] [Cleaning] [Painting] [Plumbing]
```

**Design:**
- Light gray background (`--gray-50`)
- Tags as pills with subtle border
- Each tag links to its industry page
- Horizontally scrollable on mobile (with fade edges)

---

#### Section 3: Value Props (Features Grid)

**Layout:** 4-column grid (2-col tablet, 1-col mobile)

| Card | Screenshot | Title | Description |
|------|------------|-------|-------------|
| 1 | Capture screen | **Capture in Seconds** | Snap before & after photos with one tap. Automatically organized by project. |
| 2 | PDF report | **Professional Reports** | Generate branded PDF reports your customers will love. Logo, details, everything. |
| 3 | Share screen | **Share Anywhere** | Email, text, or post to social with AI-generated captions and hashtags. |
| 4 | Project verified | **Protect Your Work** | Timestamped proof of completion. Never lose a payment dispute again. |

**Design:**
- Dark screenshot area at top (180px height)
- White content area below with title + description
- Hover: lift + shadow effect
- Screenshots are cropped UI mockups, not full phone frames

---

#### Section 4: App Showcase - Capture Flow

**Layout:** Text left, phone right

```
FROM JOB SITE TO PRO PHOTO IN 30 SECONDS

No more fumbling with photo apps and editors. Capture your before and after, 
pick a template, and you're done. Your logo is automatically applied.

✓ Tap to capture before & after
✓ 4 professional templates
✓ Your logo, your brand
✓ AI-powered captions

[Screenshot: Template selection carousel]
```

---

#### Section 5: App Showcase - Reports & Sharing

**Layout:** Text right, phone left (reversed)

```
REPORTS THAT WIN CUSTOMERS

Send professional PDF reports that make you look like a Fortune 500 company. 
Your branding, your contact info, even a QR code to your review page.

✓ Branded PDF reports
✓ Customer details & work notes
✓ QR code to your reviews
✓ Email or text in one tap

[Screenshot: Share screen with PDF preview]
```

---

#### Section 6: App Showcase - Marketing

**Layout:** Text left, phone right

```
TURN EVERY JOB INTO MARKETING GOLD

AI writes your social captions. Hashtags included. Post your work and 
attract new customers without lifting a finger.

✓ AI-generated captions
✓ Industry-specific hashtags
✓ Watermarked for social
✓ Clean versions saved

[Screenshot: Social share with AI caption]
```

---

#### Section 7: Testimonials

> **IMPORTANT:** Do NOT include fake testimonials. For launch, either:
> - Option A: Remove this section entirely
> - Option B: Replace with "Early Access" signup form
> - Option C: Use clearly labeled example testimonials ("What contractors will say...")
> - Option D: Wait for real testimonials from beta users
>
> Fake testimonials damage trust. Authenticity wins.

**If using real testimonials later:**

**Layout:** 3-column grid (dark background)

**Design:**
- Dark background (`--gray-900`)
- Card with subtle white border (5% opacity)
- 5-star rating in orange
- Avatar with initials (orange background)
- Carousel on mobile (swipeable)

---

#### Section 8: Pricing Preview

**Layout:** 3 cards, center featured

```
SIMPLE PRICING

Start free. Upgrade when you need more.

[Free]              [Pro - $29.99/mo]        [Annual - $249.99/yr]
$0/month            ★ Most Popular           Save 30%
5 projects          Unlimited projects       Everything in Pro
                    3 team members           $20.83/mo effective

[Get Started]       [Start Free Trial]       [Start Free Trial]

                    [See full pricing →]
```

---

#### Section 9: FAQ

**Layout:** Centered accordion (max-width 700px)

**Questions:**

1. **What devices does ProofShot work on?**
   ProofShot is a Progressive Web App that works on any modern smartphone or tablet. Install it directly from your browser — no app store needed. Works on iPhone, Android, iPad, and desktop.

2. **Can I use my own logo?**
   Absolutely. Upload your logo once in settings, and it's automatically applied to every before/after image and PDF report. You can even adjust the size and position.

4. **What's included in the free plan?**
   5 projects per month, 10 stored projects max, and all core features including all 4 templates. The only limitation is ProofShot branding appears on your outputs.

5. **Can I cancel anytime?**
   Yes. No contracts, no commitments. Cancel your Pro subscription anytime from your account settings.

6. **Is my data secure?**
   Yes. We use industry-standard encryption and secure cloud storage. Your photos and customer data are never shared or sold.

7. **Do you offer team accounts?**
   Yes! Pro plans include 3 team members. Add more for $9.99/user/month.

**Design:**
- White background
- Smooth expand animation (200ms)
- Chevron icon rotates on open
- Only one open at a time

---

#### Section 10: Final CTA

**Layout:** Centered, gradient background (white → orange-light)

```
READY TO SHARE THE PROOF?

Join contractors who document smarter, not harder.

[Get Started Free →]

No credit card required
```

---

### 5.3 Features Page (`/features`)

**Purpose:** Detailed feature breakdown for comparison shoppers
**Target Keywords:** "contractor photo app features", "before after photo features"

#### Hero

```
FEATURES

Everything you need to document 
your work professionally.

Built for contractors. Not adapted from something else.
```

#### Feature Deep-Dives

8 sections, alternating left/right layout. Each section:
- Screenshot (from app)
- Headline (uppercase)
- Description paragraph
- 3-4 bullet points with checkmarks

| # | Feature | Screenshot | Key Points |
|---|---------|------------|------------|
| 1 | Before & After Photos | Capture screen | Tap to add, orientation toggle, swap photos, auto-organize |
| 2 | Professional Templates | Template selection | 4 styles (Modern, Classic, Bold, Minimal), automatic labels |
| 3 | Branded Watermarks | Project overview | Your logo, adjustable size (20-100%), main + gallery images |
| 4 | PDF Reports | PDF preview | One-tap generation, your branding, job details, customer info |
| 5 | AI Captions (Pro) | Social share | Auto-generated descriptions, hashtags, platform-optimized |
| 6 | Team Access (Pro) | (illustration) | 3 included, flat-rate pricing, add more at $9.99/user |
| 7 | Sharing Options | Share screen | Email with PDF, text message, social media, shareable link |

#### Comparison Table

```
COMPARE PLANS

Feature                    Free        Pro
─────────────────────────────────────────────
Projects per month         5           Unlimited
Stored projects           10           100
Team members               1           3 included
Before/after photos        ✓           ✓
All 4 templates            ✓           ✓
PDF reports                ✓           ✓
AI captions                ✗           ✓
Remove branding            ✗           ✓
Priority support           ✗           ✓

[Get Started Free]    [Start Pro Trial]
```

#### CTA

Standard CTA section (see 5.2 Section 10)

---

### 5.4 Pricing Page (`/pricing`)

**Purpose:** Convert visitors, explain value clearly
**Target Keywords:** "contractor photo app pricing", "before after app cost"

#### Hero

```
SIMPLE, TRANSPARENT PRICING

Start free. Upgrade when you need more.
No hidden fees. Cancel anytime.
```

#### First-Month Promo Banner

```
🎉 NEW USER SPECIAL
First month of Pro just $9.99 (normally $29.99)
```

Design: Orange-light background, centered, dismissible

#### Pricing Cards

**Layout:** 4 cards in a row (2x2 on tablet, stack on mobile)

| Tier | Price | Badge | Key Features | CTA |
|------|-------|-------|--------------|-----|
| **Free** | $0/mo | — | 5 projects/mo, 10 stored, 1 user, ProofShot branding, All templates, PDF reports | "Get Started" (outline) |
| **Pro** | $29.99/mo | "Most Popular" ★ | Unlimited projects, 100 stored, 3 team members, Remove branding, AI captions, Priority support | "Start Free Trial" (primary) |
| **Annual** | $249.99/yr | "Save 30%" | Everything in Pro, $20.83/mo effective, Rate locked | "Start Free Trial" (outline) |

**Pro card styling:**
- Orange border (2px)
- Slightly elevated (scale 1.02)
- Shadow

#### Add-ons Section

```
NEED MORE?

Additional team members      $9.99/user/month
Additional storage           $4.99/month per 50 projects
```

#### Pricing FAQ

1. **Is there a free trial?**
   Yes! Try Pro free for 14 days. No credit card required.

2. **What happens when I hit my project limit?**
   You'll get a warning and 30 days to export or delete projects. We never delete without notice.

3. **Can I switch plans?**
   Yes, upgrade or downgrade anytime. Changes apply immediately, prorated.

4. **What payment methods do you accept?**
   All major credit cards via Stripe.

5. **Is there a refund policy?**
   Yes, 30-day money-back guarantee on all paid plans.

6. **What's the difference between monthly and annual?**
   Annual saves you 30% ($100/year). Same features, just billed yearly.

#### Money-Back Guarantee

```
💰 30-DAY MONEY-BACK GUARANTEE

Not happy? Get a full refund within 30 days. No questions asked.
```

---

### 5.5 Industry Pages (`/industries/[industry]`)

**Purpose:** Rank for industry-specific searches
**Template:** Same structure for all, customized content

#### URLs

- `/industries/pressure-washing`
- `/industries/pest-control`
- `/industries/landscaping`
- `/industries/cleaning`
- `/industries/painting`
- `/industries/roofing`
- `/industries/hvac`
- `/industries/pool-service`

#### Template Structure

```
[Nav]

[Hero]
FOR [INDUSTRY] PROFESSIONALS

Before & After Photos 
for [Industry Name]

[Industry-specific tagline]

[Get Started Free →]

[Pain Points Section - 3 cards]
THE [INDUSTRY] CHALLENGE
- Pain point 1
- Pain point 2  
- Pain point 3

[Solution Section]
PROOFSHOT PRO FOR [INDUSTRY]
[Screenshot with industry-relevant example]
How ProofShot solves their problems
4 bullet points

[Use Cases Section]
HOW [INDUSTRY] PROS USE PROOFSHOT
- Post to social media
- Send to customers
- Attach to invoices
- Protect against disputes

[Example Gallery]
[INDUSTRY] BEFORE & AFTERS
4-6 example images (can use stock initially)

[CTA]
READY TO DOCUMENT YOUR [INDUSTRY] WORK?
[Get Started Free →]

[Related Industries]
ALSO POPULAR WITH
[Links to 3-4 related industry pages]

[Footer]
```

#### Industry-Specific Content

| Industry | H1 | Tagline | Pain Points |
|----------|----|---------| ------------|
| **Pressure Washing** | "Before & After Photos for Pressure Washing" | "Show the transformation. Win more jobs." | Customers forget how dirty it was; Can't prove you did the work; Amazing results not being shared |
| **Pest Control** | "Document Your Pest Control Results" | "Proof of service that protects your business." | Invisible results hard to prove; Customers question if service was done; No visual marketing content |
| **Landscaping** | "Showcase Your Landscaping Transformations" | "Let your work speak for itself." | Big transformations not captured; Portfolio scattered across devices; Time-consuming to document |
| **Cleaning** | "Professional Photos for Cleaning Services" | "The proof is in the pictures." | Before state forgotten; Disputes about what was cleaned; No way to show quality |
| **Painting** | "Paint Job Documentation Made Easy" | "From prep to perfection, documented." | Color changes hard to remember; Prep work not valued; Quality craftsmanship not showcased |
| **Roofing** | "Roof Repair & Replacement Documentation" | "Before, during, and after — all in one place." | Customers can't see the roof; Hard to prove damage; Insurance documentation needed |
| **HVAC** | "HVAC Service Documentation" | "Show customers exactly what you did." | Invisible work inside units; Customers question what was done; Hard to explain value |
| **Pool Service** | "Pool Cleaning Before & After" | "Crystal clear results, crystal clear proof." | Water clarity changes fast; Weekly service blurs together; Hard to show ongoing value |

---

### 5.6 About Page (`/about`)

**Purpose:** Build trust, tell the origin story

#### Hero

```
ABOUT PROOFSHOT PRO

Built for contractors.
By a contractor.
```

#### Origin Story

```
THE STORY

[Photo placeholder for founder]

As the owner of multiple service businesses — Reliant Pest Management, 
J Calvin Pressure Washing, and Brighthouse Christmas Lights — I lived 
the problem every day.

My crews would finish amazing work, but we had nothing to show for it. 
No photos. No proof. No content for social media. And when a customer 
questioned whether we actually did the work? Nothing but our word.

Existing apps were either too complicated (designed for construction 
project management, not quick job documentation) or too basic (just 
a camera app with no branding or sharing).

So I built what I needed: a simple app where my guys could snap a 
before photo, do the job, snap an after, and have a branded, 
professional image ready to share in 30 seconds.

That's ProofShot Pro.

— Trey [Last Name]
  Founder
```

#### Mission

```
OUR MISSION

Help every service professional document their work 
and get the credit they deserve.
```

#### Values (4 cards)

| Value | Description |
|-------|-------------|
| **Simple over complicated** | Your time is valuable. Every feature earns its place. |
| **Photo-first** | The work comes first. Documentation should be instant. |
| **Fair pricing** | Flat-rate teams. No per-seat gouging. |
| **Built for the field** | Big buttons. One-handed operation. Works on any phone. |

#### Contact CTA

```
GET IN TOUCH

Questions? Ideas? Just want to say hi?

[Contact Us →]
```

---

### 5.7 Comparison Pages (`/compare/[competitor]`)

**Purpose:** Capture "vs" and "alternative" searches

#### URLs

- `/compare/companycam`
- `/compare/jobber`

#### Template Structure

```
[Nav]

[Hero]
PROOFSHOT PRO VS [COMPETITOR]
See how we compare.

[Quick Verdict - 3 sentences]

[Comparison Table]

[Key Differences - 3 expanded sections]

[Who Should Use What]

[CTA]
SEE FOR YOURSELF
[Start Free Trial →]

[Footer]
```

#### CompanyCam Comparison

**Quick Verdict:**
ProofShot Pro is built specifically for before/after documentation with flat-rate team pricing. CompanyCam is a broader project management tool with per-seat pricing. For quick job documentation and marketing content, ProofShot is faster and more affordable.

**Comparison Table:**

| Feature | ProofShot Pro | CompanyCam |
|---------|---------------|------------|
| **Starting Price** | Free | $19/user/mo |
| **Pricing Model** | Flat rate (3 users included) | Per seat |
| **5-user team cost** | $49.97/mo | $95/mo |
| **Before/After Focus** | ✓ Core feature | Add-on feature |
| **Branded Comparisons** | ✓ Automatic | Limited |
| **AI Captions** | ✓ (Pro) | ✗ |
| **PDF Reports** | ✓ | ✓ |
| **Project Management** | Basic | Full-featured |
| **Best For** | Quick documentation, marketing | Full project management |

**Key Differences:**

1. **Flat-rate team pricing**
   CompanyCam charges $19/user/month. ProofShot includes 3 users for $29.99 total.
   - 5-person team on CompanyCam: $95/month
   - 5-person team on ProofShot: $49.97/month
   - Annual savings: $540+

2. **Built for before/afters**
   CompanyCam is a general photo documentation tool. ProofShot is laser-focused on before/after comparisons with automatic branded compositions, templates, and AI-generated marketing content.

3. **Simpler workflow**
   ProofShot: Open app → tap before → do job → tap after → share. Done in 30 seconds.
   No project setup, no folder organization, no complexity.

**Who Should Use What:**

**Choose ProofShot Pro if:**
- You primarily need before/after documentation
- You want marketing-ready content automatically
- You have a small team and want flat-rate pricing
- You value simplicity over features

**Choose CompanyCam if:**
- You need full project management features
- You have complex documentation workflows
- You need integrations with other business software
- Before/afters are secondary to general photo organization

---

### 5.8 Blog (`/blog`)

**Purpose:** Top-of-funnel content, establish expertise

#### Hub Page

```
[Nav]

BLOG

Tips, guides, and insights for service professionals.

[Featured Post - large card with image]

[Category Filter]
All | Marketing | Documentation | Industry Tips

[Post Grid - 3 columns]
[Post Card] [Post Card] [Post Card]
[Post Card] [Post Card] [Post Card]

[Load More]

[Footer]
```

#### Post Template

```
[Nav]

[Breadcrumb: Blog > Category > Post Title]

[Post Title - H1]
[Meta: Author • Date • Read time • Category]

[Featured Image]

[Post Content - markdown rendered]

[Author Bio Card]

[Related Posts - 3 cards]

[CTA: Try ProofShot Pro]

[Footer]
```

#### Initial Post Ideas

| Title | Category | Target Keyword | Priority |
|-------|----------|----------------|----------|
| "How to Take Better Before & After Photos" | Documentation | "before after photo tips" | High |
| "5 Ways to Use Before/After Photos to Get More Customers" | Marketing | "before after marketing" | High |
| "The Complete Guide to Documenting Your Work" | Documentation | "job documentation guide" | High |
| "How to Get More Google Reviews as a Contractor" | Marketing | "contractor google reviews" | Medium |
| "Pressure Washing Marketing Tips for 2026" | Industry Tips | "pressure washing marketing" | Medium |
| "Why Every Pest Control Tech Should Document Every Job" | Industry Tips | "pest control documentation" | Medium |

---

### 5.9 Legal Pages

#### Privacy Policy (`/privacy`)

Standard privacy policy including:
- What data we collect
- How we use it
- Third-party services (Stripe, analytics)
- Data retention
- User rights (access, deletion)
- GDPR/CCPA compliance
- Contact for privacy questions

#### Terms of Service (`/terms`)

Standard terms including:
- Acceptance of terms
- Account responsibilities
- Subscription terms
- Payment and billing
- Cancellation and refunds
- Acceptable use
- Intellectual property
- Limitation of liability
- Dispute resolution
- Changes to terms

---

### 5.10 Contact Page (`/contact`)

```
[Nav]

CONTACT US

Have a question? We'd love to hear from you.

[Contact Form]
┌─────────────────────────────────────┐
│ Name                                │
├─────────────────────────────────────┤
│ Email                               │
├─────────────────────────────────────┤
│ Subject  [General ▼]                │
│   - General                         │
│   - Support                         │
│   - Sales                           │
│   - Partnership                     │
├─────────────────────────────────────┤
│ Message                             │
│                                     │
│                                     │
├─────────────────────────────────────┤
│ [Send Message]                      │
└─────────────────────────────────────┘

Or email us directly: hello@proofshotpro.com

[Footer]
```

---

## 6. Content Requirements

### 6.1 App Screenshots

| Screen | Filename | Used On | Priority |
|--------|----------|---------|----------|
| Photo capture (empty) | `capture-empty.png` | Home, Features | High |
| Photo capture (filled) | `capture-filled.png` | Home, Features, Industries | High |
| Template selection | `template-selection.png` | Home, Features | High |
| Project overview | `project-overview.png` | Features | High |
| Share screen | `share-screen.png` | Home, Features | High |
| Social share with AI caption | `social-share.png` | Home, Features | High |
| PDF report preview | `pdf-preview.png` | Home, Features | High |
| Home dashboard | `home-dashboard.png` | Features | Medium |

**Specifications:**
- Resolution: 1170x2532 (iPhone 14 Pro @3x)
- Format: PNG with transparency OR WebP
- Provide 2x versions for web (780px wide)

### 6.2 Industry Example Images

For each industry page, need 4-6 before/after pairs:

| Industry | Example Images Needed |
|----------|----------------------|
| Pressure Washing | Driveway, deck, siding, patio |
| Pest Control | Wasp nest removal, termite damage, rodent entry points |
| Landscaping | Lawn transformation, garden bed, tree trimming |
| Cleaning | Kitchen, bathroom, carpet, windows |
| Painting | Interior walls, exterior, cabinet refinishing |
| Roofing | Shingle replacement, repair, gutter |
| HVAC | Duct cleaning, unit replacement, filter change |
| Pool Service | Green to clean, tile cleaning, equipment |

**Note:** Can use stock photos initially. Replace with real user submissions over time.

### 6.3 Graphics & Icons

**Icons:** Use Lucide React for consistency
- camera, image, file-text, share-2, users, check, chevron-down, arrow-right, star, shield, clock, map-pin

**Illustrations (optional):**
- Team collaboration concept
- Security/protection concept

### 6.4 Open Graph Images

| Image | Dimensions | Usage |
|-------|------------|-------|
| `og-image.jpg` | 1200x630 | Default social share |
| `twitter-card.jpg` | 1200x600 | Twitter shares |
| `og-pricing.jpg` | 1200x630 | Pricing page |
| `og-[industry].jpg` | 1200x630 | Each industry page |

---

## 7. SEO Strategy

### 7.1 Keyword Targets

| Page | Primary Keyword | Secondary Keywords | Monthly Volume (est.) |
|------|-----------------|-------------------|----------------------|
| Home | "before after photo app" | "contractor photo documentation" | 500 |
| Features | "contractor photo app features" | "job documentation app" | 200 |
| Pricing | "contractor photo app pricing" | "before after app cost" | 100 |
| Pressure Washing | "pressure washing before after app" | "pressure washing documentation" | 300 |
| Pest Control | "pest control photo app" | "pest control documentation" | 150 |
| Landscaping | "landscaping before after photos" | "landscaping portfolio app" | 400 |
| vs CompanyCam | "companycam alternative" | "proofshot vs companycam" | 200 |

### 7.2 Page-Level SEO

| Page | Title Tag (max 60 chars) | Meta Description (max 155 chars) |
|------|--------------------------|----------------------------------|
| Home | "ProofShot Pro — Before & After Photos for Contractors" | "Document your work professionally. Capture before/after photos, add your branding, share instantly. Built for contractors. Free to start." |
| Features | "Features — ProofShot Pro" | "Before/after photos, branded PDF reports, AI captions, team access. See everything ProofShot Pro offers." |
| Pricing | "Pricing — ProofShot Pro" | "Start free, upgrade when ready. $29.99/mo for unlimited projects, 3 team members, AI captions. No hidden fees." |
| Pressure Washing | "Before & After Photos for Pressure Washing — ProofShot Pro" | "Document pressure washing jobs professionally. Capture before/afters, add your logo, share to social. Free." |
| Pest Control | "Pest Control Photo Documentation — ProofShot Pro" | "Prove your pest control work with timestamped before/after photos. Professional reports in seconds." |
| vs CompanyCam | "ProofShot Pro vs CompanyCam (2026 Comparison)" | "Compare ProofShot Pro and CompanyCam. See pricing, features, and which is best for your business." |

### 7.3 Technical SEO

#### Sitemap (`/sitemap.xml`)

Auto-generate with all pages. Update on each deploy.

#### Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://proofshotpro.com/sitemap.xml
```

#### Canonical URLs

Every page includes self-referencing canonical:
```html
<link rel="canonical" href="https://proofshotpro.com/[path]" />
```

#### Structured Data

**Organization (site-wide):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProofShot Pro",
  "url": "https://proofshotpro.com",
  "logo": "https://proofshotpro.com/logos/icon-orange.svg",
  "description": "Before & after photo documentation for contractors"
}
```

**SoftwareApplication (home page):**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ProofShot Pro",
  "description": "Before & after photo documentation app for contractors",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "iOS, Android, Web",
  "offers": [
    {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "name": "Free"
    },
    {
      "@type": "Offer",
      "price": "29.99",
      "priceCurrency": "USD",
      "name": "Pro Monthly"
    }
  ]
}
```

> **NOTE:** Do NOT include `aggregateRating` until you have real user ratings.

**BreadcrumbList (industry/blog pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proofshotpro.com/" },
    { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://proofshotpro.com/industries/" },
    { "@type": "ListItem", "position": 3, "name": "Pressure Washing" }
  ]
}
```

**FAQPage (home, pricing):**
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
        "text": "ProofShot is a Progressive Web App that works on any modern smartphone..."
      }
    }
  ]
}
```

### 7.4 Internal Linking Strategy

- Every page links to Home (via nav)
- Every page links to Pricing (via nav + CTAs)
- Industry pages link to 3-4 related industries
- Blog posts link to relevant features/industries
- Comparison pages link to Pricing and Features

---

## 8. Technical Requirements

### 8.1 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | CSS transitions + Framer Motion (optional) |
| Icons | Lucide React |
| Fonts | Google Fonts (Inter, Inter Tight) via next/font |
| Images | Next.js Image (WebP/AVIF) |
| Hosting | Vercel (Edge) |
| Analytics | Vercel Analytics + Google Analytics 4 |
| Forms | Formspree or API route |

### 8.2 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Mobile Safari | iOS 15+ |
| Chrome Mobile | Last 2 versions |

### 8.3 Responsive Breakpoints

| Breakpoint | Width | Container Max | Padding |
|------------|-------|---------------|---------|
| Mobile | < 640px | 100% | 24px |
| Tablet | 640-1024px | 100% | 32px |
| Desktop | 1024-1280px | 1024px | 32px |
| Large | > 1280px | 1200px | 32px |

### 8.4 File Structure

```
proofshotpro.com/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home
│   ├── features/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── industries/
│   │   ├── page.tsx            # Industries hub (optional)
│   │   ├── pressure-washing/
│   │   │   └── page.tsx
│   │   ├── pest-control/
│   │   │   └── page.tsx
│   │   └── ... (other industries)
│   ├── compare/
│   │   ├── companycam/
│   │   │   └── page.tsx
│   │   └── jobber/
│   │       └── page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Blog hub
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   └── mobile-menu.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── features-grid.tsx
│   │   ├── app-showcase.tsx
│   │   ├── pricing-cards.tsx
│   │   ├── faq-accordion.tsx
│   │   ├── cta-section.tsx
│   │   └── ...
│   ├── phone-mockup.tsx
│   └── seo.tsx
├── lib/
│   ├── constants.ts            # Colors, pricing, etc.
│   ├── industries.ts           # Industry data
│   └── utils.ts
├── public/
│   ├── logos/
│   ├── screenshots/
│   ├── images/
│   └── og/
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## 9. Accessibility (WCAG 2.2)

### 9.1 Requirements

| Requirement | Implementation |
|-------------|----------------|
| **Color Contrast** | 4.5:1 minimum for body text, 3:1 for large text |
| **Focus Indicators** | Visible focus rings on all interactive elements |
| **Skip Link** | "Skip to main content" link, visible on focus |
| **Alt Text** | Descriptive alt text on all images |
| **Heading Hierarchy** | Logical H1 → H2 → H3 structure |
| **Touch Targets** | Minimum 44x44px for buttons/links |
| **Keyboard Navigation** | Full site navigable via keyboard |
| **Screen Reader** | ARIA labels where needed |
| **Reduced Motion** | Respect `prefers-reduced-motion` |

### 9.2 ARIA Patterns

**Mobile Menu:**
```html
<button
  aria-label="Open menu"
  aria-expanded="false"
  aria-controls="mobile-menu"
>
  <span class="sr-only">Menu</span>
  <MenuIcon />
</button>
```

**FAQ Accordion:**
```html
<button
  aria-expanded="false"
  aria-controls="faq-answer-1"
  id="faq-question-1"
>
  Question text
</button>
<div
  id="faq-answer-1"
  role="region"
  aria-labelledby="faq-question-1"
  hidden
>
  Answer text
</div>
```

### 9.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Performance Benchmarks

### 10.1 Core Web Vitals Targets

| Metric | Target | Good | Needs Improvement | Poor |
|--------|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | < 2.0s | < 2.5s | 2.5s - 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | < 150ms | < 200ms | 200ms - 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | < 0.05 | < 0.1 | 0.1 - 0.25 | > 0.25 |

### 10.2 Additional Metrics

| Metric | Target |
|--------|--------|
| TTFB (Time to First Byte) | < 200ms |
| FCP (First Contentful Paint) | < 1.0s |
| Speed Index | < 2.0s |
| Total Blocking Time | < 150ms |
| Lighthouse Performance | > 95 |

### 10.3 Optimization Strategies

#### Images

```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
}
```

- Use Next.js Image component
- Serve AVIF with WebP fallback
- Lazy load below-fold images
- Preload hero image with `priority`

#### Fonts

```javascript
// Use next/font for optimal loading
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
```

#### JavaScript

- Code split by route (automatic with Next.js)
- Lazy load non-critical components
- Defer third-party scripts
- Use dynamic imports for modals/accordions

#### CSS

- Inline critical CSS (automatic with Next.js)
- Purge unused Tailwind classes
- Use CSS containment for isolated components

#### Resource Hints

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" href="/screenshots/hero-phone.webp" as="image">
```

---

## 11. Implementation Checklist

### Phase 1: Setup & Core Pages (Week 1)

#### Project Setup
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Set up design tokens (colors, typography, spacing)
- [ ] Import fonts (Inter, Inter Tight) via next/font
- [ ] Add logo files to `/public/logos/`
- [ ] Configure ESLint + Prettier
- [ ] Set up Vercel project

#### Shared Components
- [ ] Button component (primary, secondary, outline variants)
- [ ] Card component
- [ ] Badge component
- [ ] Phone mockup component
- [ ] Section wrapper component
- [ ] Navigation (desktop)
- [ ] Navigation (mobile menu)
- [ ] Footer
- [ ] CTA section (reusable)
- [ ] FAQ accordion

#### Home Page
- [ ] Hero section (WITHOUT fake stats)
- [ ] Social proof bar (industry tags)
- [ ] Value props grid (4 cards)
- [ ] App showcase section 1 (Capture)
- [ ] App showcase section 2 (Reports)
- [ ] App showcase section 3 (Marketing)
- [ ] Pricing preview
- [ ] FAQ section
- [ ] Final CTA section
- [ ] Meta tags and OG image

#### Pricing Page
- [ ] Hero
- [ ] First-month promo banner
- [ ] Pricing cards (Free, Pro, Annual, Lifetime)
- [ ] Lifetime deal callout section
- [ ] Add-ons section
- [ ] Pricing FAQ
- [ ] Money-back guarantee

#### Legal Pages
- [ ] Privacy policy content
- [ ] Terms of service content

#### Deploy
- [ ] Deploy to Vercel
- [ ] Configure proofshotpro.com domain
- [ ] Test all pages
- [ ] Run Lighthouse audit

### Phase 2: SEO Foundation (Week 2)

#### Features Page
- [ ] Hero
- [ ] 8 feature deep-dive sections
- [ ] Comparison table
- [ ] CTA section

#### Industry Pages
- [ ] Build industry page template
- [ ] Pressure Washing page content
- [ ] Pest Control page content
- [ ] Landscaping page content

#### About Page
- [ ] Hero
- [ ] Origin story section
- [ ] Mission statement
- [ ] Values cards
- [ ] Contact CTA

#### Contact Page
- [ ] Contact form (with Formspree or API)
- [ ] Email link

#### SEO Setup
- [ ] Generate sitemap.xml
- [ ] Add robots.txt
- [ ] Add structured data to all pages
- [ ] Submit to Google Search Console
- [ ] Verify in Bing Webmaster Tools

### Phase 3: Expansion (Week 3+)

#### Remaining Industry Pages
- [ ] Cleaning
- [ ] Painting
- [ ] Roofing
- [ ] HVAC
- [ ] Pool Service

#### Use Case Pages (Optional)
- [ ] Social Media Marketing
- [ ] Customer Reports
- [ ] Portfolio
- [ ] Get Reviews

#### Comparison Pages
- [ ] CompanyCam comparison
- [ ] Jobber comparison

#### Blog Infrastructure
- [ ] Blog hub page
- [ ] Blog post template
- [ ] First 2-3 blog posts

### Phase 4: Polish & Optimize

#### Content
- [ ] Real app screenshots (from actual app)
- [ ] Real testimonials (as they come in)
- [ ] Industry example images

#### Performance
- [ ] Optimize all images (WebP/AVIF)
- [ ] Verify Core Web Vitals pass
- [ ] Run Lighthouse on all pages (target 95+)
- [ ] Test on slow 3G connection
- [ ] Test on real devices

#### Accessibility
- [ ] Run axe accessibility audit
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Verify color contrast
- [ ] Add missing ARIA labels

#### Final QA
- [ ] Test all links
- [ ] Test all forms
- [ ] Test mobile menu
- [ ] Test FAQ accordion
- [ ] Cross-browser testing
- [ ] Spell check all content

---

## Quick Reference

### Pricing Summary

| Plan | Price | Projects | Storage | Users | Key Features |
|------|-------|----------|---------|-------|--------------|
| Free | $0 | 5/month | 10 | 1 | ProofShot branding required |
| Pro Monthly | $29.99/mo | Unlimited | 100 | 3 | AI captions, no branding |
| Pro Annual | $249.99/yr | Unlimited | 100 | 3 | 30% savings |
| First month promo | $9.99 | — | — | — | New users only |
| Add'l users | $9.99/mo | — | — | +1 | Per user |
| Add'l storage | $4.99/mo | — | +50 | — | Per 50 projects |

### Color Quick Reference

```css
--orange: #E97A35;        /* Primary CTA, accents */
--orange-hover: #D4682A;  /* Hover states */
--orange-light: #FEF3EB;  /* Light backgrounds */
--black: #0A0A0A;         /* Headlines */
--gray-900: #111827;      /* Dark sections */
--gray-600: #4B5563;      /* Body text */
--gray-50: #F9FAFB;       /* Alt backgrounds */
--green: #10B981;         /* Success, checkmarks */
```

### Key Files to Reference

| File | Purpose |
|------|---------|
| `DESIGN_PRD_v8.md` | App design for screenshots |
| `PRODUCT_SPEC.md` | Full pricing/features spec |
| `APP_SCREENS_AND_FLOW.md` | App screen specifications |

---

*Document Version: 3.0*  
*Last Updated: January 2026*  
*Status: Final — Single source of truth for website implementation*
