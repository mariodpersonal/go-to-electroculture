# Tech Decisions — Go To Electroculture

> This document explains every technology choice for the Go To Electroculture online store.
> It is written in plain English so anyone on the team can understand the reasoning,
> even without a technical background.

---

## The Big Picture

We are building a small, fast online store to sell ~15 handcrafted electroculture products
across 5 categories. The priority is to launch quickly, keep costs at zero (or near zero) to
start, and funnel the existing Instagram audience (11.4K followers) into paying customers.

Every choice below was made with that goal in mind: **speed to launch, low cost, simplicity.**

---

## What We Are Using (and Why)

### 1. Framework: Next.js 14 (App Router)

**What it is:** Next.js is a tool for building websites. Think of it as the engine that powers
the store. It is built on React, which is the most popular way to build interactive websites
today.

**Why we chose it:**
- **Perfect match with our hosting (Vercel).** Next.js was literally created by the same
  company that runs Vercel, so deployment is one-click and zero-configuration.
- **Great for search engines (SEO).** Next.js can render pages on the server before sending
  them to the browser. This means Google sees a fully formed page, not a blank screen that
  fills in later. For a store that needs organic traffic, this matters.
- **Fast page loads.** Next.js automatically splits code so visitors only download what they
  need for the page they are on. Product pages load fast, which keeps people from bouncing.
- **App Router (the latest architecture).** This is the modern way to build Next.js apps. It
  gives us better layouts, loading states, and data handling out of the box.

**In plain terms:** Next.js is like hiring a contractor who already knows your building and has
the keys. Everything just works together with minimal setup.

---

### 2. Styling: Tailwind CSS

**What it is:** Tailwind is a way to design and style the website. Instead of writing
traditional CSS files, you add small utility classes directly to your HTML elements.

**Why we chose it:**
- **Rapid development.** Instead of jumping between files, you style things right where you
  build them. This is significantly faster for a launch-focused project.
- **Easy to customize.** We can define an earthy, natural color palette and typography system
  in one configuration file, and every page automatically stays consistent.
- **No unused code.** Tailwind automatically removes any styles you did not use, keeping the
  final CSS file tiny and fast.
- **Industry standard.** Most modern Next.js projects use Tailwind. This means plenty of
  examples, components, and community support if we need help.

**In plain terms:** Tailwind is like having a box of labeled LEGO pieces for design. Instead
of sculpting everything from scratch, you snap together pre-made utilities. The result looks
custom, but it is built much faster.

---

### 3. Payment: PayPal JavaScript SDK

**What it is:** This is PayPal's official code library that lets us add PayPal buttons directly
to product and checkout pages. Customers can pay with their PayPal account or with a
credit/debit card through PayPal.

**Why we chose it:**
- **Client preference.** PayPal is the preferred payment method, so we are building around it
  rather than forcing a different provider.
- **No middleman.** We integrate PayPal directly into the site rather than going through a
  third-party checkout service. This means fewer fees and more control.
- **Trusted by buyers.** Many online shoppers feel safer paying through PayPal because of its
  buyer protection. For a new store without established trust, this helps.
- **Free to integrate.** There are no monthly fees for using the SDK. PayPal only takes a
  small percentage per transaction.

**In plain terms:** We are putting a PayPal "Pay Now" button right on the site. Customers
click it, pay through PayPal (or a card), and we get the money. No extra software or monthly
subscriptions needed.

---

### 4. Product Data: JSON File (src/data/products.json)

**What it is:** Instead of a database, all product information (names, prices, descriptions,
images, weights, categories) lives in a single structured text file inside the code.

**Why we chose it:**
- **Simplicity.** With fewer than 20 products, a database is overkill. A JSON file is easy to
  read, easy to edit, and easy to understand.
- **No hosting costs.** Databases require their own servers and often their own monthly fees.
  A JSON file is just part of the code — free.
- **Version controlled.** Because the file lives in the codebase, every change is tracked in
  Git. We can see exactly what changed, when, and roll it back if needed.
- **Fast.** The data loads instantly because it ships with the site. No network call to a
  database means zero latency for product listings.

**In plain terms:** Imagine a neatly organized spreadsheet that lives inside the website's
code. To add a product, you add a new entry to the file. To change a price, you edit a
number. That is it.

**When we would outgrow this:** If the catalog grows past ~50 products or if non-technical
team members need to update products frequently, we would move to a CMS or database. For now,
this is the fastest path to launch.

---

### 5. Instagram Feed: Instagram Basic Display API / Embed Approach

**What it is:** A way to show recent Instagram posts directly on the website, keeping the site
feeling fresh and connected to the active Instagram presence.

**Why we chose it:**
- **Leverage existing audience.** With 11.4K followers, Instagram is the primary traffic
  source. Showing the feed on the site builds social proof and keeps content fresh without
  extra work.
- **Low maintenance.** New Instagram posts automatically appear on the website. No need to
  manually update anything.
- **Embed as fallback.** If the API has limitations, we can use a simple embed approach that
  requires zero backend code.

**In plain terms:** The website will pull in your latest Instagram photos automatically. Post
on Instagram, and it shows up on the store. Two birds, one stone.

---

### 6. Search: Fuse.js (Client-Side Fuzzy Search)

**What it is:** Fuse.js is a small JavaScript library that lets customers search through
products right in their browser, with "fuzzy" matching — meaning it still finds results even
if someone misspells a word.

**Why we chose it:**
- **No backend needed.** The search runs entirely in the browser. No search server, no extra
  costs, no complexity.
- **Fuzzy matching.** If someone types "anntena" instead of "antenna," it still finds the
  right product. This is important for a good shopping experience.
- **Lightweight.** The library is tiny (about 10KB). It will not slow down the site.
- **Perfect for our scale.** With ~15 products, client-side search is instant. We would only
  need a server-side solution if we had hundreds or thousands of items.

**In plain terms:** There will be a search bar on the site. Type anything — even with typos —
and it instantly shows matching products. No waiting, no loading spinner.

---

### 7. Deployment: Vercel

**What it is:** Vercel is the platform that hosts the website and makes it available on the
internet.

**Why we chose it:**
- **Built for Next.js.** Vercel created Next.js. The integration is seamless — push code, and
  the site updates automatically.
- **Free tier.** The free plan includes custom domains, SSL (the padlock in the browser),
  automatic deployments, and enough bandwidth for a growing store.
- **Preview deployments.** Every code change gets its own preview URL. This means we can
  review changes before they go live.
- **Global CDN.** Vercel serves the site from data centers around the world, so it loads fast
  regardless of where the customer is.
- **Vercel subdomain for now.** We will start with a free `*.vercel.app` URL and add a custom
  domain later when ready.

**In plain terms:** Vercel is like a landlord that gives you free rent, keeps the lights on,
and automatically redecorates whenever you ask. We push an update, and the live site changes
within seconds.

---

### 8. Analytics: Google Analytics 4 (GA4)

**What it is:** Google's free tool for understanding who visits the site, where they come from,
what they look at, and whether they buy.

**Why we chose it:**
- **Free.** No cost at any scale.
- **Works with Vercel subdomain.** Some analytics tools require a custom domain. GA4 works
  fine with a `*.vercel.app` address.
- **Industry standard.** Most tutorials, guides, and agencies speak GA4. If you ever hire
  someone to help with marketing, they will already know how to use it.
- **Conversion tracking.** We can track the full journey from Instagram click to product
  purchase, which is critical for understanding what is working.

**In plain terms:** GA4 tells you how many people visited, which products they looked at, and
how many actually bought something. It is the scoreboard for the store.

---

### 9. Images: Unsplash Placeholders + Next.js Image Component

**What it is:** For launch, we use high-quality placeholder images from Unsplash (a free stock
photo site). The Next.js Image component automatically optimizes these for fast loading.

**Why we chose it:**
- **Speed to launch.** Professional product photography takes time. Placeholders let us build
  and launch the full site now, then swap in real photos later.
- **Automatic optimization.** The Next.js Image component serves images in modern formats
  (like WebP), at the right size for each device, and lazy-loads images below the fold. This
  keeps the site fast without any manual work.
- **Easy swap.** When real product photos are ready, we just replace the image files. No code
  changes needed.

**In plain terms:** We launch with beautiful stand-in photos so the site looks polished from
day one. When real product shots are ready, we drop them in and the site handles the rest.

---

## What We Decided NOT to Use (and Why)

### Shopify — Not chosen

Shopify is a popular e-commerce platform, but it is designed for larger catalogs and teams who
want a full back-office system.

- **Monthly fees.** Shopify starts at $39/month (Basic plan). For a store with ~15 products
  that is just launching, this is an unnecessary recurring cost.
- **Overkill.** Shopify comes with inventory management, staff accounts, discount engines, and
  dozens of features we do not need yet. All that complexity slows things down without adding
  value at this stage.
- **Less control.** With Shopify, you work within their template system. With Next.js, we have
  full control over every pixel, every interaction, and every page load speed optimization.
- **Transaction fees on top of PayPal.** Shopify charges its own transaction fee if you do not
  use Shopify Payments. Since we are using PayPal, we would be paying fees to both.

**When Shopify would make sense:** If the product catalog grows to 100+ items and the team
needs a non-technical way to manage inventory and orders daily.

---

### Sanity (or any headless CMS) — Not chosen

A CMS (Content Management System) like Sanity gives you a visual editor for managing content
without touching code.

- **Not needed yet.** With ~15 products managed by the developer, a CMS adds complexity
  without clear benefit. Editing a JSON file takes seconds.
- **Extra setup time.** Configuring a CMS, defining schemas, and connecting it to the frontend
  adds days to the launch timeline.
- **Another service to manage.** Even on a free tier, it is another login, another dashboard,
  another thing that can break.

**When a CMS would make sense:** If non-technical team members need to add or update products
regularly without developer involvement.

---

### Stripe — Not chosen

Stripe is a popular payment processor, arguably more developer-friendly than PayPal.

- **Client prefers PayPal.** The decision was straightforward — the client already uses and
  trusts PayPal. There is no reason to introduce a different payment system.
- **PayPal covers our needs.** For a store of this size, PayPal handles payments, refunds, and
  disputes perfectly well.

**When Stripe would make sense:** If we needed advanced features like subscription billing,
complex tax calculation, or multi-currency support beyond what PayPal offers.

---

### Database (PostgreSQL, MongoDB, etc.) — Not chosen

A traditional database stores data on a separate server and requires queries to retrieve it.

- **Overkill for ~15 products.** A database introduces connection management, hosting costs,
  and deployment complexity — all for data that fits comfortably in a single file.
- **Slower development.** Setting up a database, writing queries, and handling connections
  takes time that is better spent building the actual store.
- **Cost.** Most database hosting has limited free tiers that eventually require payment.

**When a database would make sense:** If the store grows to need user accounts, order history,
inventory tracking, or a product catalog larger than ~50 items.

---

## Summary Table

| Decision       | Choice                    | Cost       | Complexity |
|----------------|---------------------------|------------|------------|
| Framework      | Next.js 14 (App Router)   | Free       | Medium     |
| Styling        | Tailwind CSS              | Free       | Low        |
| Payment        | PayPal JavaScript SDK     | Per-txn    | Low        |
| Product Data   | JSON file                 | Free       | Very Low   |
| Instagram      | Basic Display API / Embed | Free       | Low        |
| Search         | Fuse.js                   | Free       | Low        |
| Hosting        | Vercel (free tier)        | Free       | Very Low   |
| Analytics      | Google Analytics 4        | Free       | Low        |
| Images         | Unsplash + Next.js Image  | Free       | Very Low   |

**Estimated monthly cost at launch: $0**
(PayPal transaction fees apply only when sales are made.)

---

## Future Upgrades (When the Time Is Right)

These are not needed now, but worth knowing about for later:

1. **Custom domain** — Purchase and connect a domain (e.g., gotoelectroculture.com) when
   ready. Vercel makes this a 5-minute task.
2. **Headless CMS** — If content updates become frequent, add Sanity or similar.
3. **Database** — If the catalog or feature set grows significantly.
4. **Email marketing** — Integrate Mailchimp or similar for abandoned cart recovery and
   newsletters.
5. **Stripe** — Add as a second payment option alongside PayPal if customers request it.

---

*Last updated: March 25, 2026*
