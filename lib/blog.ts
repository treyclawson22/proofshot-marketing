export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Marketing" | "Documentation" | "Industry Tips";
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-take-better-before-after-photos",
    title: "How to Take Better Before & After Photos",
    excerpt:
      "Learn the techniques professional contractors use to capture compelling before and after documentation that wins customers and protects your business.",
    content: `
# How to Take Better Before & After Photos

Before and after photos are one of the most powerful tools in a contractor's marketing arsenal. They tell a story that words simply can't match. Here's how to take photos that actually convert viewers into customers.

## 1. Same Angle, Same Lighting

The most common mistake contractors make is taking the before photo from one angle and the after from another. This makes it hard for customers to see the transformation.

**Pro tip:** Stand in the exact same spot for both photos. Use a landmark like a tree or fence post to help you remember your position.

## 2. Clean Your Lens

It sounds obvious, but a smudged camera lens is the number one cause of blurry, unprofessional photos. Wipe your phone lens before every shot.

## 3. Shoot in Good Lighting

Natural daylight is your friend. Avoid shooting directly into the sun, and try to take photos during the "golden hours" — the first hour after sunrise and the last hour before sunset.

## 4. Include Context

Don't zoom in too tight. Include some surrounding context so viewers can understand the scale of the transformation.

## 5. Take Multiple Shots

Don't rely on a single photo. Take several from different angles so you have options. You can always delete the ones you don't use.

## 6. Use ProofShot Pro

With ProofShot Pro, you can turn your before and after photos into branded, professional images and share them in seconds. [Try it free today](https://app.proofshotpro.com/signup).
    `,
    category: "Documentation",
    author: {
      name: "Trey",
      role: "Founder",
    },
    publishedAt: "2026-01-15",
    readTime: "4 min read",
    featured: true,
    image: "/blog/how-to-take-better-before-after-photos.png",
  },
  {
    slug: "5-ways-before-after-photos-get-more-customers",
    title: "5 Ways to Use Before/After Photos to Get More Customers",
    excerpt:
      "Discover how smart contractors turn every job into a marketing opportunity with strategic use of before and after documentation.",
    content: `
# 5 Ways to Use Before/After Photos to Get More Customers

You're already doing the work. Why not turn every job into a marketing opportunity? Here are five proven ways to use before/after photos to grow your business.

## 1. Social Media Marketing

Before/after transformations are some of the most engaging content on social media. People love seeing dramatic changes — it's why home makeover shows are so popular.

**Platforms that work best:**
- Instagram (visual-first, perfect for transformations)
- Facebook (great for local business pages)
- TikTok (video before/afters perform incredibly well)

## 2. Google Business Profile

Add your best before/after photos to your Google Business Profile. When potential customers search for your services, these images show up in the search results.

## 3. Customer Follow-ups

Send a before/after photo with your invoice or follow-up email. It reminds customers of the value you provided and makes them more likely to leave a positive review.

## 4. Estimate Presentations

When meeting with potential customers, show them before/afters from similar jobs. "Here's what we did for your neighbor" is incredibly persuasive.

## 5. Review Requests

Include a before/after image when you ask for reviews. It reminds customers of the transformation and gives them something specific to mention in their review.

## Make It Easy

The key is making documentation effortless. That's why we built ProofShot Pro — so you can combine, brand, and share your photos in 30 seconds. [Get started free](https://app.proofshotpro.com/signup).
    `,
    category: "Marketing",
    author: {
      name: "Trey",
      role: "Founder",
    },
    publishedAt: "2026-01-10",
    readTime: "5 min read",
    image: "/blog/5-ways-before-after-photos-get-more-customers.png",
  },
  {
    slug: "complete-guide-documenting-your-work",
    title: "The Complete Guide to Documenting Your Work",
    excerpt:
      "Everything you need to know about job documentation — from protecting your business to building your portfolio.",
    content: `
# The Complete Guide to Documenting Your Work

Documentation isn't glamorous, but it's essential. Whether you're protecting against disputes, building your portfolio, or creating marketing content, good documentation makes everything easier.

## Why Document Every Job?

### 1. Dispute Protection
When a customer claims work wasn't done or wasn't done right, photos are your best defense. Timestamped before/after images prove exactly what condition things were in and what work was completed.

### 2. Insurance Claims
If something goes wrong — property damage, injury claims, etc. — documentation can be the difference between a covered claim and an expensive lawsuit.

### 3. Portfolio Building
Every job is a potential portfolio piece. With consistent documentation, you build a library of work samples you can use forever.

### 4. Marketing Content
Social media demands constant content. Document every job and you'll never run out of things to post.

## What to Document

- **Before condition** — Always photograph the starting state
- **Problem areas** — Damage, wear, issues you're addressing
- **During** — Progress shots for multi-day jobs
- **After** — The completed work, obviously
- **Details** — Close-ups of quality workmanship

## How to Stay Consistent

The hardest part of documentation is doing it consistently. Here's how to build the habit:

1. **Make it part of your process** — Before any work starts, photos first
2. **Use the right tools** — Apps like ProofShot Pro make it fast and easy
3. **Train your team** — Everyone should know the documentation expectations

## Get Started Today

Don't let another job go undocumented. [Try ProofShot Pro free](https://app.proofshotpro.com/signup) and start building your professional portfolio today.
    `,
    category: "Documentation",
    author: {
      name: "Trey",
      role: "Founder",
    },
    publishedAt: "2026-01-05",
    readTime: "6 min read",
    image: "/blog/complete-guide-documenting-your-work.jpg",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured);
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
