"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const isTransparent = isHomepage && !scrolled;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      {/* Spacer to push content below fixed header — hidden on homepage where hero goes behind header */}
      {!isHomepage && <div style={{ height: 72 }} />}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "bg-[var(--color-bg)] shadow-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-1.5 font-[family-name:var(--font-heading)]">
              <span
                className={`text-xl tracking-wide transition-colors duration-300 ${
                  isTransparent ? "text-white" : "text-[var(--color-text)]"
                }`}
              >
                GO TO
              </span>
              <span className="text-xl tracking-wide text-[var(--color-primary)]">
                ELECTROCULTURE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-[var(--color-primary)] ${
                    isTransparent
                      ? "text-white"
                      : "text-[#2C2C2A]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side: Cart + Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              {/* Cart Link */}
              <Link
                href="/cart"
                aria-label={`Shopping cart with ${itemCount} items`}
                className={`relative p-2 transition-colors duration-300 hover:text-[var(--color-primary)] ${
                  isTransparent ? "text-white" : "text-[var(--color-text)]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
                       1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125
                       0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513
                       7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625
                       10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75
                       0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-[11px] font-bold text-white">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className={`p-2 transition-colors duration-300 md:hidden hover:text-[var(--color-primary)] ${
                  isTransparent ? "text-white" : "text-[var(--color-text)]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 transform bg-[var(--color-bg)] shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex h-[72px] items-center justify-end px-4">
          <button
            onClick={closeMobileMenu}
            aria-label="Close menu"
            className="p-2 text-[var(--color-text)] hover:text-[var(--color-primary)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-[var(--color-border)] py-4 text-base font-medium tracking-wide text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Cart Link */}
        <div className="px-6 pt-6">
          <Link
            href="/cart"
            onClick={closeMobileMenu}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
                   1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125
                   0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513
                   7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625
                   10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75
                   0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            View Cart
            {itemCount > 0 && (
              <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}
