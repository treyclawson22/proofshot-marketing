# ProofShot Pro - Marketing Site

Marketing and landing page for ProofShot Pro. Built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Live URL

- **Marketing Site**: https://proofshotpro.com (also https://www.proofshotpro.com)
- **App**: https://app.proofshotpro.com (separate repo: [proofshot-pro](https://github.com/treyclawson22/proofshot-pro))

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
proofshot-marketing/
├── app/
│   ├── globals.css         # Tailwind imports
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Home page assembling all sections
│
├── components/
│   ├── Navigation.tsx      # Fixed nav with scroll effect, mobile menu
│   ├── Hero.tsx            # Hero section with app mockup
│   ├── ValueProps.tsx      # 6 benefit cards
│   ├── Stats.tsx           # Animated statistics counter
│   ├── Features.tsx        # 3 feature sections, alternating layout
│   ├── Pricing.tsx         # Free/Pro Monthly/Pro Annual + Lifetime
│   ├── FAQ.tsx             # Accordion FAQ (7 questions)
│   ├── CTA.tsx             # Final call-to-action
│   └── Footer.tsx          # Footer with links
│
└── public/                 # Static assets
```

---

## Sections

| Section | Description |
|---------|-------------|
| Navigation | Fixed header, scroll shadow effect, mobile hamburger menu |
| Hero | Main headline, subtext, CTA buttons, app mockup placeholder |
| ValueProps | 6 cards: Before/After, PDF Reports, Team, Sharing, Protection, Offline |
| Stats | 4 animated counters: Projects, Photos, Contractors, Countries |
| Features | 3 detailed features with screenshots (alternating left/right) |
| Pricing | Free, Pro Monthly ($29.99), Pro Annual ($249.99), Lifetime ($499) |
| FAQ | 7 expandable questions about the product |
| CTA | Final conversion section with signup buttons |
| Footer | Product, Company, Legal links + social icons |

---

## Deployment

### Vercel

```bash
# Deploy to production
vercel --prod

# Add custom domain
vercel domains add proofshotpro.com
vercel domains add www.proofshotpro.com
```

### DNS Configuration (Dreamhost)

| Type | Host | Points to |
|------|------|-----------|
| A | @ | 76.76.21.61 |
| CNAME | www | cname.vercel-dns.com |

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Hosting**: Vercel

---

## Design

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary | #0d479b | Main brand blue |
| Primary Dark | #0a3a7d | Hover states |
| Success | #10b981 | CTAs, highlights |

### Typography

- **Font**: Geist Sans (via next/font)
- **Headings**: Bold, responsive sizing
- **Body**: Regular weight, slate-600 for secondary text
