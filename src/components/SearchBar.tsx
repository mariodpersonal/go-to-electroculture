"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import type { Product } from "@/data/products";

interface SearchBarProps {
  products: Product[];
}

const MAX_RESULTS = 6;
const DEBOUNCE_MS = 300;

export default function SearchBar({ products }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fuse = useMemo(
    () =>
      new Fuse(products, {
        keys: [
          { name: "name", weight: 0.5 },
          { name: "categoryLabel", weight: 0.25 },
          { name: "tagline", weight: 0.15 },
          { name: "description", weight: 0.1 },
        ],
        threshold: 0.4,
        includeScore: true,
      }),
    [products],
  );

  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return fuse.search(debouncedQuery, { limit: MAX_RESULTS });
  }, [fuse, debouncedQuery]);

  /* Debounce the query */
  const handleChange = useCallback((value: string) => {
    setQuery(value);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setDebouncedQuery(value);
    }, DEBOUNCE_MS);
  }, []);

  /* Cleanup timer on unmount */
  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  /* Open dropdown when there are results */
  useEffect(() => {
    setIsOpen(results.length > 0);
  }, [results]);

  /* Close on click outside */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function clearSearch() {
    setQuery("");
    setDebouncedQuery("");
    setIsOpen(false);
    inputRef.current?.focus();
  }

  function handleResultClick() {
    setIsOpen(false);
    setQuery("");
    setDebouncedQuery("");
  }

  const formattedPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      {/* Input wrapper */}
      <div className="relative">
        {/* Search icon */}
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          placeholder="Search products..."
          aria-label="Search products"
          aria-expanded={isOpen}
          aria-controls="search-results"
          role="combobox"
          aria-autocomplete="list"
          className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] py-2.5 pl-10 pr-9 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-shadow duration-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25"
        />

        {/* Clear button */}
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-secondary)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown results */}
      {isOpen && (
        <ul
          id="search-results"
          role="listbox"
          className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_8px_24px_rgba(44,44,42,0.12)]"
        >
          {results.map(({ item }) => (
            <li key={item.id} role="option" aria-selected={false}>
              <Link
                href={`/shop/${item.slug}`}
                onClick={handleResultClick}
                className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[var(--color-bg)]"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[var(--color-text)]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {item.categoryLabel}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-[var(--color-primary)]">
                  {formattedPrice(item.price)}
                </span>
              </Link>
            </li>
          ))}

          {results.length === 0 && debouncedQuery.trim() && (
            <li className="px-4 py-3 text-center text-sm text-[var(--color-text-muted)]">
              No products found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
