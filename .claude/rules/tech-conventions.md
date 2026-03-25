# Tech Conventions — Go To Electroculture

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- PayPal JavaScript SDK for payments
- Fuse.js for client-side search
- Deployed on Vercel

## File Organization
- Pages: src/app/[route]/page.tsx
- Components: src/components/[Name].tsx
- Data: src/data/products.ts (single source of truth for all products)
- State: src/lib/cart-context.tsx (React Context for cart)
- Copy: copy/ directory (source for all site text)
- Docs: docs/ directory (brand, sitemap, tech decisions)

## Code Style
- Use "use client" only when the component needs interactivity (event handlers, hooks, browser APIs).
- Keep server components as the default.
- Wrap useSearchParams in Suspense boundaries.
- Use Tailwind arbitrary values for custom colors: `bg-[var(--color-primary)]`
- Theme defined in globals.css with @theme inline (Tailwind v4).

## Product Data
- All products live in src/data/products.ts — never hardcode product info in components.
- Use helper functions: getProductBySlug, getProductsByCategory, getRelatedProducts.
- Image URLs are placeholders — marked with REPLACE comments.

## Copy
- All site copy originates from copy/ markdown files.
- Don't write copy inline in components without checking copy/ first.
- Policy pages are DRAFTS — flagged for legal review.

## Images
- External images (Unsplash) use next/image with unoptimized prop.
- Configure remotePatterns in next.config.ts for any new image domains.
