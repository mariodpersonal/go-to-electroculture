# Go To Electroculture -- Design System & Style Guide

> A handcrafted electroculture e-commerce store. Earthy, natural, raw. Warm copper meeting deep forest green on natural cream backgrounds. The feel of a craftsman's workshop that happens to be online.

---

## 1. Color Palette

### Core Palette

| Role             | Name                  | Hex       | CSS Custom Property        |
|------------------|-----------------------|-----------|----------------------------|
| Primary          | Warm Copper           | `#B7653A` | `--color-primary`          |
| Primary Hover    | Deep Copper           | `#9A5230` | `--color-primary-hover`    |
| Primary Light    | Faded Copper          | `#D4956E` | `--color-primary-light`    |
| Secondary        | Forest Green          | `#2D5A3D` | `--color-secondary`        |
| Secondary Hover  | Deep Forest           | `#1E4230` | `--color-secondary-hover`  |
| Secondary Light  | Sage Green            | `#4A7D5E` | `--color-secondary-light`  |
| Accent           | Warm Gold             | `#C9943E` | `--color-accent`           |
| Accent Light     | Soft Amber            | `#E0B96A` | `--color-accent-light`     |

### Neutrals

| Role             | Name                  | Hex       | CSS Custom Property        |
|------------------|-----------------------|-----------|----------------------------|
| Background       | Warm Cream            | `#FAF6F1` | `--color-bg`               |
| Surface          | Stone Cream           | `#F0EAE1` | `--color-surface`          |
| Surface Raised   | Parchment             | `#E8E0D5` | `--color-surface-raised`   |
| Text Primary     | Dark Charcoal         | `#2C2825` | `--color-text`             |
| Text Secondary   | Warm Gray             | `#6B6259` | `--color-text-secondary`   |
| Text Muted       | Light Warm Gray       | `#9A9186` | `--color-text-muted`       |
| Border           | Warm Light Gray       | `#D9D1C7` | `--color-border`           |
| Border Light     | Soft Warm Gray        | `#E8E2DA` | `--color-border-light`     |

### Semantic

| Role             | Name                  | Hex       | CSS Custom Property        |
|------------------|-----------------------|-----------|----------------------------|
| Success          | Natural Green         | `#3D7A4A` | `--color-success`          |
| Success Light    | Soft Green            | `#E8F3EB` | `--color-success-light`    |
| Warning          | Amber                 | `#C08B2D` | `--color-warning`          |
| Warning Light    | Soft Amber            | `#FBF3E2` | `--color-warning-light`    |
| Error            | Warm Red              | `#B84233` | `--color-error`            |
| Error Light      | Soft Red              | `#F9EDED` | `--color-error-light`      |

### CSS Custom Properties Block

```css
:root {
  /* Core */
  --color-primary: #B7653A;
  --color-primary-hover: #9A5230;
  --color-primary-light: #D4956E;
  --color-secondary: #2D5A3D;
  --color-secondary-hover: #1E4230;
  --color-secondary-light: #4A7D5E;
  --color-accent: #C9943E;
  --color-accent-light: #E0B96A;

  /* Neutrals */
  --color-bg: #FAF6F1;
  --color-surface: #F0EAE1;
  --color-surface-raised: #E8E0D5;
  --color-text: #2C2825;
  --color-text-secondary: #6B6259;
  --color-text-muted: #9A9186;
  --color-border: #D9D1C7;
  --color-border-light: #E8E2DA;

  /* Semantic */
  --color-success: #3D7A4A;
  --color-success-light: #E8F3EB;
  --color-warning: #C08B2D;
  --color-warning-light: #FBF3E2;
  --color-error: #B84233;
  --color-error-light: #F9EDED;
}
```

---

## 2. Typography

### Font Families

| Role     | Font                | Google Fonts Link                                      | CSS Custom Property     | Fallback Stack                        |
|----------|---------------------|--------------------------------------------------------|-------------------------|---------------------------------------|
| Heading  | **Playfair Display** | `family=Playfair+Display:wght@400;600;700;800;900`    | `--font-heading`        | `'Playfair Display', Georgia, serif`  |
| Body     | **Source Sans 3**    | `family=Source+Sans+3:wght@300;400;500;600;700`       | `--font-body`           | `'Source Sans 3', 'Segoe UI', sans-serif` |

**Why these fonts:** Playfair Display is a strong, characterful transitional serif with high contrast strokes -- it feels rooted, editorial, and crafted without being fussy. Source Sans 3 is highly legible and warm-toned, pairing naturally without competing.

### Google Fonts Embed

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Type Scale

| Level          | Size      | Weight | Line Height | Letter Spacing | CSS Custom Property        |
|----------------|-----------|--------|-------------|----------------|----------------------------|
| Display / Hero | `3.5rem`  | 800    | 1.1         | `-0.02em`      | `--text-display`           |
| H1             | `2.5rem`  | 700    | 1.2         | `-0.015em`     | `--text-h1`               |
| H2             | `2rem`    | 700    | 1.25        | `-0.01em`      | `--text-h2`               |
| H3             | `1.5rem`  | 600    | 1.3         | `0em`          | `--text-h3`               |
| H4             | `1.25rem` | 600    | 1.35        | `0em`          | `--text-h4`               |
| H5             | `1.125rem`| 600    | 1.4         | `0.005em`      | `--text-h5`               |
| H6             | `1rem`    | 700    | 1.4         | `0.01em`       | `--text-h6`               |
| Body Large     | `1.125rem`| 400    | 1.7         | `0em`          | `--text-body-lg`          |
| Body           | `1rem`    | 400    | 1.7         | `0em`          | `--text-body`             |
| Body Small     | `0.875rem`| 400    | 1.6         | `0.005em`      | `--text-body-sm`          |
| Caption        | `0.75rem` | 500    | 1.5         | `0.01em`       | `--text-caption`          |
| Overline       | `0.6875rem`| 600   | 1.4         | `0.08em`       | `--text-overline`         |

**Note:** Display and H1-H6 use `--font-heading`. Body, Small, Caption, and Overline use `--font-body`. Overline text should always be uppercase.

### CSS Custom Properties Block

```css
:root {
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Source Sans 3', 'Segoe UI', sans-serif;

  --text-display: 3.5rem;
  --text-h1: 2.5rem;
  --text-h2: 2rem;
  --text-h3: 1.5rem;
  --text-h4: 1.25rem;
  --text-h5: 1.125rem;
  --text-h6: 1rem;
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;
  --text-overline: 0.6875rem;
}
```

### Responsive Typography

On mobile (below `768px`), scale down the larger headings:

| Level          | Mobile Size |
|----------------|-------------|
| Display / Hero | `2.25rem`   |
| H1             | `1.875rem`  |
| H2             | `1.5rem`    |
| H3             | `1.25rem`   |

---

## 3. Spacing System

**Base unit:** `0.25rem` (4px)

| Token   | Value     | Pixels | CSS Custom Property  |
|---------|-----------|--------|----------------------|
| `xs`    | `0.25rem` | 4px    | `--space-xs`         |
| `sm`    | `0.5rem`  | 8px    | `--space-sm`         |
| `md`    | `1rem`    | 16px   | `--space-md`         |
| `lg`    | `1.5rem`  | 24px   | `--space-lg`         |
| `xl`    | `2rem`    | 32px   | `--space-xl`         |
| `2xl`   | `3rem`    | 48px   | `--space-2xl`        |
| `3xl`   | `4rem`    | 64px   | `--space-3xl`        |
| `4xl`   | `6rem`    | 96px   | `--space-4xl`        |

### CSS Custom Properties Block

```css
:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
}
```

---

## 4. Border Radius

Subtle and grounded. Nothing bubbly.

| Token    | Value      | CSS Custom Property    |
|----------|------------|------------------------|
| `sm`     | `0.1875rem`| `--radius-sm` (3px)    |
| `md`     | `0.375rem` | `--radius-md` (6px)    |
| `lg`     | `0.5rem`   | `--radius-lg` (8px)    |
| `xl`     | `0.75rem`  | `--radius-xl` (12px)   |
| `full`   | `9999px`   | `--radius-full`        |

```css
:root {
  --radius-sm: 0.1875rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-full: 9999px;
}
```

---

## 5. Shadows

Warm-toned shadows using a brown-tinted base instead of neutral gray.

| Token | Value                                                                  | CSS Custom Property |
|-------|------------------------------------------------------------------------|---------------------|
| `sm`  | `0 1px 2px 0 rgba(60, 45, 30, 0.06), 0 1px 3px 0 rgba(60, 45, 30, 0.08)` | `--shadow-sm`       |
| `md`  | `0 4px 6px -1px rgba(60, 45, 30, 0.08), 0 2px 4px -2px rgba(60, 45, 30, 0.06)` | `--shadow-md`       |
| `lg`  | `0 10px 15px -3px rgba(60, 45, 30, 0.1), 0 4px 6px -4px rgba(60, 45, 30, 0.06)` | `--shadow-lg`       |
| `xl`  | `0 20px 25px -5px rgba(60, 45, 30, 0.12), 0 8px 10px -6px rgba(60, 45, 30, 0.06)` | `--shadow-xl`       |

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(60, 45, 30, 0.06), 0 1px 3px 0 rgba(60, 45, 30, 0.08);
  --shadow-md: 0 4px 6px -1px rgba(60, 45, 30, 0.08), 0 2px 4px -2px rgba(60, 45, 30, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(60, 45, 30, 0.1), 0 4px 6px -4px rgba(60, 45, 30, 0.06);
  --shadow-xl: 0 20px 25px -5px rgba(60, 45, 30, 0.12), 0 8px 10px -6px rgba(60, 45, 30, 0.06);
}
```

---

## 6. Button Styles

### Sizes

| Size  | Padding              | Font Size    | Border Radius      | Min Height |
|-------|----------------------|--------------|---------------------|------------|
| `sm`  | `0.375rem 0.875rem`  | `0.8125rem`  | `var(--radius-sm)`  | `2rem`     |
| `md`  | `0.625rem 1.25rem`   | `0.9375rem`  | `var(--radius-md)`  | `2.5rem`   |
| `lg`  | `0.75rem 1.75rem`    | `1.0625rem`  | `var(--radius-md)`  | `3rem`     |

All buttons use `font-family: var(--font-body)`, `font-weight: 600`, `letter-spacing: 0.01em`, and `cursor: pointer`. Transition: `all 180ms ease`.

### Variants

#### Primary Button

```css
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-bg);
  border: 2px solid var(--color-primary);
}
.btn-primary:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
.btn-primary:active {
  background-color: #874828;
  border-color: #874828;
  transform: translateY(0);
  box-shadow: none;
}
```

#### Secondary Button (Outlined)

```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
}
.btn-secondary:hover {
  background-color: var(--color-secondary);
  color: var(--color-bg);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
.btn-secondary:active {
  background-color: var(--color-secondary-hover);
  border-color: var(--color-secondary-hover);
  color: var(--color-bg);
  transform: translateY(0);
  box-shadow: none;
}
```

#### Ghost / Text Button

```css
.btn-ghost {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid transparent;
}
.btn-ghost:hover {
  background-color: rgba(183, 101, 58, 0.08);
  color: var(--color-primary-hover);
}
.btn-ghost:active {
  background-color: rgba(183, 101, 58, 0.14);
}
```

---

## 7. Component Patterns

### 7.1 Product Card

```
+-------------------------------+
|         [Product Image]       |   aspect-ratio: 4 / 5
|                               |   object-fit: cover
+-------------------------------+
|  [Category Tag]               |   overline style, --color-accent
|  Product Name                 |   H4, --font-heading, weight 600
|  $XX.XX                       |   body-lg, --color-primary, weight 700
+-------------------------------+
```

**Specs:**
- Card background: `var(--color-bg)`
- Border: `1px solid var(--color-border-light)`
- Border radius: `var(--radius-md)`
- Shadow: `var(--shadow-sm)`
- Padding (content area): `var(--space-md)`
- Gap between image and content: `0`
- Image overflow: `hidden` with `border-radius: var(--radius-md) var(--radius-md) 0 0`
- Category tag: `font-size: var(--text-overline)`, `text-transform: uppercase`, `color: var(--color-accent)`, `font-weight: 600`, `letter-spacing: 0.08em`, `margin-bottom: var(--space-xs)`
- Product name: `font-size: var(--text-h4)`, `color: var(--color-text)`, `margin-bottom: var(--space-sm)`
- Price: `font-size: var(--text-body-lg)`, `color: var(--color-primary)`, `font-weight: 700`

**Hover state:**
- `box-shadow: var(--shadow-lg)`
- `transform: translateY(-3px)`
- Image scales to `transform: scale(1.04)` inside the overflow-hidden container
- Transition: `all 280ms ease`

### 7.2 Navigation / Header

**Structure:** Sticky header, full-width. Logo left, nav links center, cart/action right.

**Hero state (transparent):**
- `background: transparent`
- `color: var(--color-bg)` (white text over hero image)
- `position: fixed`, `top: 0`, `z-index: 100`
- Height: `4.5rem`
- Padding: `0 var(--space-xl)`

**Scrolled state (solid):**
- `background: var(--color-bg)`
- `color: var(--color-text)`
- `box-shadow: var(--shadow-sm)`
- Transition: `background 300ms ease, box-shadow 300ms ease`

**Nav links:**
- Font: `var(--font-body)`, `0.9375rem`, weight `500`
- Gap between links: `var(--space-xl)`
- Hover: underline offset `4px`, color `var(--color-primary)`
- Active page: `color: var(--color-primary)`, `font-weight: 600`

**Mobile:** Hamburger menu icon at `768px` and below. Slide-in drawer from right, `background: var(--color-bg)`, full height.

### 7.3 Footer

- Background: `#2C2825` (dark charcoal from text primary)
- Text color: `#D9D1C7` (warm light gray from border color)
- Heading color: `var(--color-bg)` (`#FAF6F1`)
- Accent links on hover: `var(--color-accent)` (`#C9943E`)
- Padding: `var(--space-4xl) var(--space-xl) var(--space-2xl)`
- Layout: 4-column grid on desktop, 2-column on tablet, stacked on mobile
- Columns: Brand/About, Shop Categories, Customer Service, Contact/Newsletter
- Bottom bar: border-top `1px solid rgba(255,255,255,0.1)`, copyright text in `var(--text-caption)`, `padding-top: var(--space-lg)`

### 7.4 Product Grid

```css
.product-grid {
  display: grid;
  gap: var(--space-lg);
  padding: 0 var(--space-xl);
}

/* Mobile: 1 column */
.product-grid {
  grid-template-columns: 1fr;
}

/* Tablet: 2 columns (>= 768px) */
@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns (>= 1024px) */
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
  }
}

/* Wide: 4 columns (>= 1440px) */
@media (min-width: 1440px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

Max container width: `1320px`, centered with `margin: 0 auto`.

### 7.5 Hero Section

- Full viewport width, min-height: `85vh` on desktop, `70vh` on mobile
- Background: atmospheric image with overlay `linear-gradient(to bottom, rgba(44,40,37,0.35), rgba(44,40,37,0.55))`
- Content centered vertically and horizontally
- Headline: Display size (`3.5rem` desktop / `2.25rem` mobile), `color: var(--color-bg)`, `max-width: 48rem`
- Subheadline: Body Large, `color: rgba(250, 246, 241, 0.85)`, `max-width: 36rem`, `margin-top: var(--space-md)`
- CTA button: Primary button, `lg` size, `margin-top: var(--space-xl)`
- Text alignment: center
- Text shadow on hero text: `0 2px 8px rgba(0,0,0,0.25)`

### 7.6 Section Spacing

Generous vertical padding between major page sections for a breathing, editorial feel.

| Context               | Padding                              |
|-----------------------|--------------------------------------|
| Section (desktop)     | `var(--space-4xl) 0` (96px top/bottom) |
| Section (mobile)      | `var(--space-3xl) 0` (64px top/bottom) |
| Section heading MB    | `var(--space-2xl)` (48px below heading)|
| Content container     | `0 var(--space-xl)` (32px horizontal)  |

### 7.7 Form Inputs

```css
.input {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text);
  background: var(--color-bg);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 0.625rem 0.875rem;
  width: 100%;
  transition: border-color 180ms ease, box-shadow 180ms ease;
}

.input::placeholder {
  color: var(--color-text-muted);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(183, 101, 58, 0.12);
}

.input:hover:not(:focus) {
  border-color: var(--color-text-muted);
}

/* Error state */
.input--error {
  border-color: var(--color-error);
}
.input--error:focus {
  box-shadow: 0 0 0 3px rgba(184, 66, 51, 0.12);
}
```

**Labels:** `font-size: var(--text-body-sm)`, `font-weight: 600`, `color: var(--color-text)`, `margin-bottom: var(--space-xs)`.

**Helper text:** `font-size: var(--text-caption)`, `color: var(--color-text-muted)`, `margin-top: var(--space-xs)`.

---

## 8. Responsive Breakpoints

| Name     | Min Width | CSS Custom Property      | Typical Use                     |
|----------|-----------|--------------------------|----------------------------------|
| Mobile   | `375px`   | `--bp-mobile: 375px`     | Base styles target this          |
| Tablet   | `768px`   | `--bp-tablet: 768px`     | 2-column layouts, nav collapses  |
| Desktop  | `1024px`  | `--bp-desktop: 1024px`   | 3-column grids, full nav         |
| Wide     | `1440px`  | `--bp-wide: 1440px`      | 4-column grids, max-width content|

### Media Query Reference

```css
/* Tablet and up */
@media (min-width: 768px) { }

/* Desktop and up */
@media (min-width: 1024px) { }

/* Wide screens */
@media (min-width: 1440px) { }
```

Design mobile-first: base styles target `375px`+, then layer on complexity with `min-width` queries.

---

## 9. Tailwind Config Reference

For projects using Tailwind CSS, map these tokens into `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#B7653A', hover: '#9A5230', light: '#D4956E' },
        secondary: { DEFAULT: '#2D5A3D', hover: '#1E4230', light: '#4A7D5E' },
        accent: { DEFAULT: '#C9943E', light: '#E0B96A' },
        surface: { DEFAULT: '#F0EAE1', raised: '#E8E0D5' },
        border: { DEFAULT: '#D9D1C7', light: '#E8E2DA' },
        text: { DEFAULT: '#2C2825', secondary: '#6B6259', muted: '#9A9186' },
        success: { DEFAULT: '#3D7A4A', light: '#E8F3EB' },
        warning: { DEFAULT: '#C08B2D', light: '#FBF3E2' },
        error: { DEFAULT: '#B84233', light: '#F9EDED' },
      },
      backgroundColor: {
        page: '#FAF6F1',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        h1: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        h2: ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.35', letterSpacing: '0em', fontWeight: '600' }],
        h5: ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.005em', fontWeight: '600' }],
        h6: ['1rem', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        body: ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
        overline: ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
      },
      borderRadius: {
        sm: '0.1875rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(60,45,30,0.06), 0 1px 3px 0 rgba(60,45,30,0.08)',
        md: '0 4px 6px -1px rgba(60,45,30,0.08), 0 2px 4px -2px rgba(60,45,30,0.06)',
        lg: '0 10px 15px -3px rgba(60,45,30,0.1), 0 4px 6px -4px rgba(60,45,30,0.06)',
        xl: '0 20px 25px -5px rgba(60,45,30,0.12), 0 8px 10px -6px rgba(60,45,30,0.06)',
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1440px',
      },
    },
  },
};
```

---

## 10. Quick Reference: Do's and Don'ts

**Do:**
- Use warm, earthy tones throughout -- copper, green, cream, gold
- Keep shadows warm-tinted (brown base, not gray)
- Use generous whitespace and section spacing
- Let the product images breathe
- Use Playfair Display for impact, Source Sans 3 for readability
- Keep border-radius subtle and grounded
- Make hover states feel tactile (slight lift + shadow)

**Don't:**
- Use pure white (`#FFFFFF`) or pure black (`#000000`) anywhere
- Use cool-gray shadows or borders
- Over-round corners (no pill shapes except badges/tags)
- Use neon or saturated accent colors
- Make it feel like a generic SaaS dashboard
- Overcrowd layouts -- this is a craftsman's shop, not a marketplace
