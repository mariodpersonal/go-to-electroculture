# Sitemap — Go To Electroculture

## Page Structure & URL Paths

| Page                | URL Path             | Dynamic? | Notes                              |
| ------------------- | -------------------- | -------- | ---------------------------------- |
| Home                | `/`                  | No       | Landing page, hero + featured      |
| Shop / Collection   | `/shop`              | No       | Full product grid with filters     |
| Product Detail      | `/shop/[slug]`       | Yes      | One page per product (dynamic slug)|
| Cart                | `/cart`              | No       | Line items, subtotal, checkout     |
| About               | `/about`             | No       | Founder story + mission            |
| Contact             | `/contact`           | No       | Contact form + email + social      |
| Shipping Policy     | `/policies/shipping` | No       | Shipping rates, times, regions     |
| Returns Policy      | `/policies/returns`  | No       | Return/refund conditions           |
| Privacy Policy      | `/policies/privacy`  | No       | Data handling & cookie policy      |
| Terms of Service    | `/policies/terms`    | No       | Legal terms for purchases          |

---

## Navigation Hierarchy

### Header Navigation (persistent, all pages)

```
[Logo: Go To Electroculture]   Home   Shop   About   Contact   [Cart Icon + Item Count Badge]
```

- **Logo** — links to `/`, displayed on the far left.
- **Home** — `/`
- **Shop** — `/shop`
- **About** — `/about`
- **Contact** — `/contact`
- **Cart** — `/cart`, displayed on the far right with a numeric badge showing the current number of items in the cart. Badge hidden when cart is empty.

Mobile: hamburger menu collapses Home, Shop, About, Contact into a slide-out drawer. Cart icon remains visible in the header at all times.

### Footer Navigation (persistent, all pages)

```
Column 1: Shop                Column 2: Company           Column 3: Policies
- Shop All (/shop)            - About (/about)            - Shipping (/policies/shipping)
- Antennas (/shop?cat=ant)    - Contact (/contact)        - Returns (/policies/returns)
- Pyramids (/shop?cat=pyr)                                - Privacy (/policies/privacy)
- Handwear (/shop?cat=hand)   Column 4: Connect           - Terms (/policies/terms)
- Drinkware (/shop?cat=drink) - Instagram (external)
- Accessories (/shop?cat=acc) - Newsletter signup
```

Footer bottom row: copyright line + "Go To Electroculture" wordmark.

---

## Product Categories (Shop Page Filters)

| Category    | Filter Key | Description                                      |
| ----------- | ---------- | ------------------------------------------------ |
| Antennas    | `ant`      | Copper electroculture antennas for gardens        |
| Pyramids    | `pyr`      | Copper pyramid structures                         |
| Handwear    | `hand`     | Copper-infused gloves and wrist wraps             |
| Drinkware   | `drink`    | Copper mugs, bottles, and cups                    |
| Accessories | `acc`      | Miscellaneous copper tools and add-ons            |

Filtering is handled via query parameter (`/shop?cat=ant`) so each filtered view is shareable and bookmarkable. An "All" option clears the filter and shows every product.

---

## Dynamic Routes

### Product Detail — `/shop/[slug]`

The `[slug]` segment is generated from the product title at creation time (e.g., a product named "Garden Antenna 3ft" becomes `/shop/garden-antenna-3ft`). Each product page is statically generated at build time with ISR (Incremental Static Regeneration) or equivalent so new products appear without a full redeploy.

---

## Auxiliary / Non-navigated Pages

These pages are not linked in the primary header nav but are accessible through the footer, cart flow, or direct URL:

- `/policies/shipping`
- `/policies/returns`
- `/policies/privacy`
- `/policies/terms`

---

## Redirects & 404

- Any unknown path renders a custom 404 page with a link back to Home and Shop.
- If product slugs change, implement 301 redirects from old slug to new slug.
