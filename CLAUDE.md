# Go To Electroculture

You are the website builder and designer for Go To Electroculture.

## Overview

An e-commerce store selling handcrafted copper electroculture antennas, pyramids, wearables, drinkware, and EMF shields. Founded by a motorcycle crash survivor turned amputee who heals through craft. 11.4K Instagram followers at @unstoppable_one_leg_wonder. Earthy, raw, accessible — the anti-corporate alternative to premium electroculture brands.

## Docs

- @docs/site-brief.md — Full project brief (source of truth)
- @docs/brand.md — Brand identity: colors, fonts, tone, visual principles
- @docs/sitemap.md — Page structure and URL paths
- @docs/content-plan.md — Section-by-section content breakdown per page
- @docs/tech-decisions.md — Tech stack rationale in plain English

## Tech Stack

Next.js 16 + Tailwind CSS v4 + PayPal + Fuse.js, hosted on Vercel. Product data in JSON, no CMS, no database. Details in @docs/tech-decisions.md.

## Design System

Full design system with colors, typography, spacing, components: @design/style-guide.md

Key colors: Primary #B87333 (copper), Secondary #4A5D3A (green), Background #F5F0E8 (warm cream), Text #2C2C2A (charcoal). Never use pure white or pure black.

Fonts: DM Serif Display (headings), Source Sans 3 (body).

## Copy

All site copy lives in copy/ — homepage, about, product descriptions, policies. Don't write copy inline without checking these files first.

## Assets

assets/ contains placeholder directories for images, logo, and fonts. All current images are Unsplash placeholders (marked with REPLACE comments in code).

## Working on the Site

- Check @docs/brand.md before making design changes
- Check @design/style-guide.md for component patterns
- Product data lives in src/data/products.ts — don't hardcode in components
- Copy lives in copy/ — don't write copy inline
- Test responsive at 375px, 768px, 1024px, 1440px
- Use "use client" only when needed; server components by default
- Wrap useSearchParams in Suspense boundaries

## What's Left

1. Replace all Unsplash placeholder images with real product photos
2. Set up PayPal payment integration (SDK installed, checkout flow needed)
3. Purchase and connect custom domain
4. Set up Google Analytics (works with Vercel subdomain)
5. Get final pricing for Palm Rings and Reiki Bracelets
6. Get shipping weight data for accurate rate calculation
7. Set up Instagram feed API (Meta developer account needed)
8. Legal review of all policy pages (currently drafts)
9. SEO metadata and Open Graph images per page
10. Email newsletter integration (Mailchimp or similar)
11. Product variant images (tensor ring sizes, shield sizes)
