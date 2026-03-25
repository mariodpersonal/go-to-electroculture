# Content Plan — Go To Electroculture

Page-by-page breakdown of every section, its purpose, and the content it contains.

---

## 1. Homepage (`/`)

The homepage is the primary landing experience. It must convey the brand identity within seconds: handcrafted copper products, rooted in electroculture, made by a real person.

### Section 1 — Hero

- **Layout:** Full-width banner image or video background with text overlay.
- **Headline:** Bold, declarative statement (e.g., "Copper Crafted for the Earth" or "Grow with the Power of Copper").
- **Subheadline:** One sentence expanding on the headline — tie the product to the electroculture philosophy.
- **Founder image:** High-quality photo of the founder working with copper, integrated into the hero composition (not a generic stock photo).
- **CTA button:** "Shop the Collection" linking to `/shop`. Large, high-contrast, impossible to miss.
- **Optional secondary CTA:** "Learn Our Story" linking to `/about`.

### Section 2 — Featured Products

- **Layout:** Horizontal row of 3-4 product cards.
- **Card contents:** Product image, product name, price, "View Product" link.
- **Selection criteria:** Hand-picked hero products — best sellers or visually striking items that represent the range (e.g., one antenna, one pyramid, one drinkware piece, one accessory).
- **Section heading:** "Our Favorites" or "Best Sellers".
- **CTA at bottom:** "View All Products" linking to `/shop`.

### Section 3 — "The Story" Teaser

- **Layout:** Split layout — image on one side, text on the other.
- **Image:** Founder portrait or workshop photo.
- **Text:** 2-3 sentences summarizing the founder's journey into electroculture and copper craftsmanship. Keep it personal and authentic.
- **CTA:** "Read Our Story" linking to `/about`.
- **Tone:** Warm, inviting, human. Not corporate.

### Section 4 — Product Categories

- **Layout:** Visual grid of 5 category tiles (2-3 columns depending on screen size).
- **Each tile:** Category image (lifestyle or product photo representing the category), category name overlay, entire tile is clickable.
- **Categories and links:**
  - Antennas — `/shop?cat=ant`
  - Pyramids — `/shop?cat=pyr`
  - Handwear — `/shop?cat=hand`
  - Drinkware — `/shop?cat=drink`
  - Accessories — `/shop?cat=acc`
- **Section heading:** "Explore the Collection" or "Shop by Category".

### Section 5 — Instagram Feed

- **Layout:** Horizontal scrollable row or grid of 4-6 recent Instagram posts.
- **Implementation:** Embedded via Instagram Basic Display API or a third-party widget (e.g., Elfsight, Behold).
- **Section heading:** "Follow Along" or "@gotoelectroculture".
- **CTA:** "Follow Us on Instagram" linking to the Instagram profile.

### Section 6 — Trust Signals

- **Layout:** Horizontal row of 3 icon-and-text badges.
- **Signals:**
  1. **Handcrafted** — Icon: hands/hammer. Text: "Every piece made by hand."
  2. **Shipped Worldwide** — Icon: globe/shipping box. Text: "We ship to over 50 countries."
  3. **Real Copper** — Icon: copper coil/material swatch. Text: "100% genuine copper, no plating."
- **Purpose:** Build buyer confidence before they reach the footer.

### Section 7 — Footer

- **Navigation columns:** Shop links (all categories + shop all), Company (About, Contact), Policies (Shipping, Returns, Privacy, Terms), Connect (Instagram, Newsletter signup).
- **Newsletter signup:** Email input field + "Subscribe" button. Short prompt: "Get updates on new drops and electroculture tips."
- **Bottom bar:** Copyright notice, "Go To Electroculture" wordmark.

---

## 2. Shop / Collection Page (`/shop`)

### Product Grid

- **Layout:** Responsive grid — 3 columns on desktop, 2 on tablet, 1 on mobile (or 2 compact).
- **Product card contents:**
  - Product image (primary image, square aspect ratio).
  - Product name.
  - Price (formatted with currency symbol).
  - "Sold Out" badge overlaid on image when inventory is zero.
- **Click behavior:** Entire card links to `/shop/[slug]`.

### Category Filter Bar

- **Position:** Above the product grid, horizontally scrollable on mobile.
- **Filter buttons:** All | Antennas | Pyramids | Handwear | Drinkware | Accessories.
- **Active state:** The currently selected category is visually highlighted.
- **Behavior:** Clicking a filter updates the grid instantly (client-side) and updates the URL query parameter (`?cat=ant`) for shareability.

### Search

- **Position:** Top of the page, above or beside the filter bar.
- **Behavior:** Text input that filters products by name and description as the user types (client-side search, debounced).
- **Empty state:** "No products match your search" with a CTA to clear filters.

### Sorting (optional, future)

- **Options:** Default (manual order), Price low-to-high, Price high-to-low, Newest first.

### Empty State

- If a category has no products: "New pieces coming soon. Follow us on Instagram for updates."

---

## 3. Product Detail Page (`/shop/[slug]`)

### Image Gallery

- **Primary image:** Large, high-resolution product photo.
- **Thumbnail strip or dots:** 3-6 additional images showing different angles, scale reference, product in use.
- **Interaction:** Click thumbnails to swap the primary image. Pinch-to-zoom on mobile.

### Product Information

- **Product name:** Large heading.
- **Price:** Prominently displayed below the name.
- **Short description:** 1-2 sentences summarizing what the product is and why it matters.
- **Long description / Details:** Expandable or scrollable section with:
  - Materials used (copper gauge, finish).
  - Dimensions and weight.
  - Intended use (garden, home, personal).
  - Care instructions.

### Specs Table

- **Format:** Two-column key-value table.
- **Example rows:** Material: Pure Copper | Height: 12 inches | Weight: 0.8 lbs | Finish: Polished.

### Add to Cart

- **Quantity selector:** Numeric stepper (default 1, min 1, max based on inventory).
- **"Add to Cart" button:** Large, primary-colored, full-width on mobile.
- **Feedback:** On click, show a brief confirmation (toast notification or mini cart drawer slides open) confirming the item was added.
- **Out of stock state:** Button replaced with "Sold Out" (disabled). Optional: "Notify me when available" email capture.

### Related Products

- **Layout:** Horizontal row of 3-4 product cards beneath the main product content.
- **Selection logic:** Products from the same category, excluding the current product. Fallback to best sellers if the category has fewer than 3 other products.
- **Section heading:** "You Might Also Like" or "More from [Category Name]".

---

## 4. Cart Page (`/cart`)

### Line Items

- **Each row displays:**
  - Product thumbnail image.
  - Product name (linked back to `/shop/[slug]`).
  - Unit price.
  - Quantity selector (stepper, same as product page).
  - Line total (unit price x quantity).
  - Remove button (trash icon or "Remove" text link).

### Cart Summary

- **Subtotal:** Sum of all line totals.
- **Shipping note:** "Shipping calculated at checkout" (if using a third-party checkout like Stripe or Shopify).
- **Checkout button:** Large, primary CTA: "Proceed to Checkout". Links to the checkout flow (Stripe Checkout, Shopify Checkout, or custom).
- **Continue shopping link:** "Continue Shopping" linking back to `/shop`.

### Empty Cart State

- **Message:** "Your cart is empty."
- **CTA:** "Start Shopping" button linking to `/shop`.

---

## 5. About Page (`/about`)

### Founder Story

- **Layout:** Long-form narrative section, alternating text blocks and images.
- **Content beats:**
  1. Who the founder is — name, location, personal background.
  2. How they discovered electroculture — the moment of curiosity.
  3. The transition from interest to craft — learning copper work, first products.
  4. The mission — making electroculture accessible, spreading awareness.
  5. Where things are headed — vision for the brand and community.
- **Tone:** First-person or close third-person. Genuine, unpolished, personal.
- **Images:** Workshop photos, founder at work, early prototypes, garden shots.

### Mission Statement

- **Layout:** Centered pull-quote or highlighted block.
- **Content:** One to two sentences distilling the brand's purpose.

### Instagram Embed

- **Layout:** Grid or carousel of recent posts.
- **Purpose:** Show the founder's ongoing work and community engagement.
- **CTA:** "Follow @gotoelectroculture" linking to Instagram.

---

## 6. Contact Page (`/contact`)

### Contact Form

- **Fields:**
  - Name (required).
  - Email (required).
  - Subject (optional dropdown: General Inquiry, Order Question, Wholesale, Collaboration, Other).
  - Message (required, textarea).
- **Submit button:** "Send Message".
- **Success state:** "Thanks for reaching out! We'll get back to you within 48 hours."
- **Error handling:** Inline validation on required fields. Server-side spam protection (honeypot field or reCAPTCHA).

### Direct Contact Info

- **Email:** Displayed as a clickable `mailto:` link (e.g., hello@gotoelectroculture.com).
- **Response time note:** "We typically respond within 1-2 business days."

### Instagram Link

- **Text:** "DM us on Instagram for quick questions."
- **Link:** Instagram profile URL, opens in new tab.

---

## 7. Policy Pages (`/policies/*`)

All four policy pages share the same layout: a single-column, long-form text page with a heading and body content. Styled for readability (generous line height, max-width container).

### Shipping Policy (`/policies/shipping`)

- Where you ship (domestic + international list or regions).
- Processing time (e.g., "Orders ship within 3-5 business days").
- Shipping methods and estimated delivery times by region.
- Tracking information — how and when customers receive it.
- Customs and duties disclaimer for international orders.

### Returns Policy (`/policies/returns`)

- Return window (e.g., 30 days from delivery).
- Condition requirements (unused, original packaging).
- How to initiate a return (email with order number).
- Refund method and timeline.
- Items that are non-returnable (custom orders, sale items, etc.).
- Exchange policy if applicable.

### Privacy Policy (`/policies/privacy`)

- What data is collected (name, email, shipping address, payment info).
- How data is used (order fulfillment, marketing with consent).
- Third-party services that receive data (payment processor, shipping carrier, email platform).
- Cookie usage and tracking.
- User rights (access, deletion, opt-out).
- Contact information for privacy inquiries.

### Terms of Service (`/policies/terms`)

- Acceptance of terms by using the site.
- Product descriptions and pricing accuracy disclaimer.
- Payment terms and accepted methods.
- Intellectual property (all content, photos, and branding belong to Go To Electroculture).
- Limitation of liability.
- Governing law and jurisdiction.
- Right to update terms.
