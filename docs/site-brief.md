# Go To Electroculture -- Project Brief

> Source of truth for the full website build. Every design, copy, and engineering decision traces back to this document.

---

## 1. Business Overview

**Store name:** Go To Electroculture

**Founder:** A motorcycle crash survivor turned amputee, known on Instagram as [@unstoppable_one_leg_wonder](https://instagram.com/unstoppable_one_leg_wonder) (11.4K followers). His personal story of rebuilding, recovering, and healing through handcraft IS the brand.

**Bio (verbatim):**
> "Motorcycle crash survivor turned amputee. Follow my wild ride as I rebuild & recover and heal with each project. Raw, real and all heart."

**What the store sells:** Handcrafted copper electroculture antennas, pyramids, copper drinkware, handwear (rings, bracelets, tensor rings), and EMF shielding accessories.

**Why it exists:** To make electroculture accessible and real -- copper with purpose, built by hand, sold by the person who made it.

---

## 2. Brand Identity

### Vibe
Earthy and natural. Not slick, not corporate. Think soil-stained copper, raw wood, sunlit gardens, honest hands.

### Voice
- Raw and real
- Handcrafted and grounded
- Quietly defiant

### Key Phrases (from Instagram, use across site)
- "Copper with purpose, not decoration"
- "Built by hand, tuned by nature"
- "For those who grow different"
- "We stopped over-complicating things in our garden. Copper did the rest."

### Competitive Position
Reference site studied: [thefertilecurrent.com](https://thefertilecurrent.com) -- premium, scientific approach at $400+. Go To Electroculture is the **accessible, raw, personal alternative**. Lower price point, maker-driven story, zero pretension.

---

## 3. Target Customer

- **Gardeners and homesteaders** looking for natural growing methods
- **Alternative agriculture enthusiasts** exploring electroculture
- **Wellness and spiritual community** (chakra stones, Reiki bracelets, energy work)
- **People drawn to authenticity** -- handcrafted products from a real maker with a real story
- **Instagram followers** who already know the founder and want to support his work

---

## 4. Product Catalog & Pricing

### Antennas

| Product | Price | Notes |
|---|---|---|
| Single Crystal Electroculture Antenna | $20 | |
| Multi Crystal Electroculture Antenna | $30 | |
| 7 Chakra Stone Spiraled Copper Tubing Electroculture Antenna | $175 | |
| Quartz Continuous Spiraled Copper Antenna | $125 | |
| Quartz and Obsidian Combination Spiraled Copper Antenna | $150 | |
| Straight Tubed Copper Antenna | $60 | |
| Electroculture Quartz Spiraled Pyramid | $150 | 9in x 9in base |
| Large Quartz Crystal Pyramid Electroculture Antenna | $200 | |
| Hanging Center Stone Antenna | $175 | |

### Pyramids

| Product | Price | Notes |
|---|---|---|
| Counter Pyramid | $75 | 12in x 12in |
| Large Quartz Sphere Pyramid | $500 | 16in x 16in |

### Handwear

| Product | Price | Notes |
|---|---|---|
| Spiraled Copper Palm Rings | TBD | |
| Reiki Spiraled Bracelets | TBD | |
| Tensor Rings | Starting at $15 | 2in diameter minimum, 12in max. Price increases $15 for every 2in increase in diameter. |

**Tensor Ring pricing breakdown:**
- 2in -- $15
- 4in -- $30
- 6in -- $45
- 8in -- $60
- 10in -- $75
- 12in -- $90

### Drinkware

| Product | Price | Notes |
|---|---|---|
| 30oz Copper Water Bottle | $40 | |
| 10oz Copper Mug | $25 | |

### Accessories

| Product | Price | Notes |
|---|---|---|
| EMF RF/WIFI/LF Radiation Shield (20in x 40in) | $25 | |
| EMF RF/WIFI/LF Radiation Shield (30in x 40in) | $35 | |

---

## 5. Site Architecture

### Pages

| Page | Purpose |
|---|---|
| **Home** | Hero with founder story hook, featured products, Instagram feed, CTA to shop |
| **Shop** | Full product catalog with search and category filtering |
| **Product Detail** | Individual product page with images, description, sizing/options, Add to Cart |
| **Cart** | Review items, update quantities, proceed to PayPal checkout |
| **About** | The founder's full story -- crash, recovery, discovery of electroculture, handcraft as healing |
| **Contact** | Contact form or email link for questions, custom orders, wholesale inquiries |
| **Policy pages** | Shipping, returns, privacy policy, terms of service |

### Features

- **Product search** -- keyword search across the catalog
- **Instagram feed integration** -- pull recent posts from @unstoppable_one_leg_wonder
- **PayPal checkout** -- simple catalog-to-PayPal flow (no complex cart backend)
- **Shipping calculated by weight** -- rates determined at checkout based on item weight
- **Google Analytics** -- to be configured for launch

---

## 6. Technical Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js** | Fast, SEO-friendly, great Vercel integration |
| Styling | **Tailwind CSS** | Rapid UI development, easy to maintain earthy design system |
| Payment | **PayPal** | Founder's existing payment method, simple integration |
| Hosting | **Vercel** | Free tier to start, seamless Next.js deployment |
| Domain | **Vercel subdomain** | No custom domain yet; will use .vercel.app |
| CMS | **None** | Code-managed product data (JSON/config files) |
| Analytics | **Google Analytics** | To be set up before or at launch |

### Architecture Notes

- Products defined in code (JSON or TypeScript config) -- no database, no CMS
- Static generation where possible for speed and free-tier friendliness
- PayPal simple checkout (catalog approach, not full e-commerce backend)
- Shipping weights stored per product; rates calculated at checkout
- All free tiers to start -- zero ongoing cost until traffic demands scaling

---

## 7. Social & Marketing

- **Primary channel:** Instagram [@unstoppable_one_leg_wonder](https://instagram.com/unstoppable_one_leg_wonder) (11.4K followers)
- **Strategy:** Drive Instagram audience to the store. The founder's content (build videos, garden results, personal story) is the marketing engine.
- **On-site integration:** Embedded Instagram feed on the homepage to keep the site feeling alive and connected to the community.
- **No other social channels** at this time.

---

## 8. Design Direction

- **Palette:** Earthy tones -- copper, deep greens, warm browns, cream/off-white backgrounds, charcoal text
- **Typography:** Clean and readable, nothing flashy. Let the products and story do the talking.
- **Photography:** Product shots on natural backgrounds (wood, soil, garden settings). Founder's hands in frame where possible. Raw, not over-produced.
- **Layout:** Simple, spacious, mobile-first. Most traffic will come from Instagram (mobile).
- **Feel:** Like visiting a maker's workshop, not a corporate storefront.

---

## 9. Launch Plan

- **Timeline:** ASAP
- **MVP goal:** Get the store live and functional so Instagram followers can browse and buy
- **Budget:** Free tiers across the board to start (Vercel free, no paid CMS, no paid plugins)
- **Post-launch:** Monitor traffic via Google Analytics, gather customer feedback, iterate

---

## 10. Open Items

- [ ] Final pricing for Spiraled Copper Palm Rings
- [ ] Final pricing for Reiki Spiraled Bracelets
- [ ] Product photography for all items
- [ ] Product descriptions / copy for each item
- [ ] Shipping weight data per product
- [ ] Shipping rate table or carrier integration details
- [ ] Return/refund policy details
- [ ] Privacy policy and terms of service content
- [ ] Google Analytics tracking ID
- [ ] Custom domain (when ready to purchase)
- [ ] Instagram feed API setup (Meta developer account / token)
