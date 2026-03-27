"use client";

import Link from "next/link";

const shopLinks = [
  { href: "/shop", label: "All Products" },
  { href: "/shop?cat=ant", label: "Antennas" },
  { href: "/shop?cat=pyr", label: "Pyramids" },
  { href: "/shop?cat=hand", label: "Handwear" },
  { href: "/shop?cat=tensor", label: "Tensor Rings" },
  { href: "/shop?cat=drink", label: "Drinkware" },
  { href: "/shop?cat=emf", label: "EMF Shields" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const learnLinks = [
  { href: "/blog", label: "All Articles" },
  { href: "/blog/benefits-of-electroculture", label: "What Is Electroculture?" },
  { href: "/blog/benefits-of-copper", label: "Why Copper?" },
];

const policyLinks = [
  { href: "/policies/shipping", label: "Shipping" },
  { href: "/policies/returns", label: "Returns" },
  { href: "/policies/privacy", label: "Privacy Policy" },
  { href: "/policies/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-iron)] text-[var(--color-bone)]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block font-[family-name:var(--font-heading)] text-lg tracking-wide"
            >
              <span className="text-white">GO TO </span>
              <span className="text-[var(--color-primary)]">ELECTROCULTURE</span>
            </Link>
            <p className="mt-2 text-sm font-medium text-[var(--color-accent)]">
              Copper with purpose.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              Handcrafted copper electroculture tools — built by hand, tuned by
              nature. For those who grow different.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/unstoppable_one_leg_wonder/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148
                    4.771 1.691 4.919 4.919.058 1.265.069 1.645.069
                    4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664
                    4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204
                    0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849
                    0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771
                    4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12
                    0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073
                    7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072
                    4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986
                    8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2
                    6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948
                    0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014
                    15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0
                    12.324 6.162 6.162 0 0 0 0-12.324ZM12
                    16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44
                    1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Shop
            </h3>
            <ul className="mt-4 space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Learn
            </h3>
            <ul className="mt-4 space-y-3">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Policies Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Connected
            </h3>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Tips, guides, and new product drops delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex gap-2"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                required
                className="min-w-0 flex-1 rounded-lg border border-[var(--color-text-muted)]/30 bg-white/5 px-3 py-2 text-sm text-white placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
              />
              <button
                type="submit"
                className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Join
              </button>
            </form>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">
              Policies
            </h3>
            <ul className="mt-4 space-y-3">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-[var(--color-text-muted)] sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Go To Electroculture. All rights reserved.</p>
          <p className="text-[var(--color-text-muted)]/70">
            Rooted in nature. Powered by copper.
          </p>
        </div>
      </div>
    </footer>
  );
}
