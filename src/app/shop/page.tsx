"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products, CATEGORIES, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";

const filterButtons: { label: string; key: string | null }[] = [
  { label: "All", key: null },
  ...Object.entries(CATEGORIES).map(([cat, info]) => ({
    label: info.label,
    key: info.filterKey,
  })),
];

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-6 py-12">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeFilter = searchParams.get("cat");

  const [searchQuery, setSearchQuery] = useState("");

  // Resolve the active category from the filter key
  const activeCategory = useMemo(() => {
    if (!activeFilter) return null;
    const entry = Object.entries(CATEGORIES).find(
      ([, info]) => info.filterKey === activeFilter
    );
    return entry ? (entry[0] as Category) : null;
  }, [activeFilter]);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    return result;
  }, [activeCategory]);

  function setFilter(key: string | null) {
    if (key) {
      router.push(`/shop?cat=${key}`, { scroll: false });
    } else {
      router.push("/shop", { scroll: false });
    }
  }

  function clearFilter() {
    router.push("/shop", { scroll: false });
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl text-[var(--color-text)] sm:text-5xl">
          The Collection
        </h1>
        <p className="mt-3 max-w-xl text-lg text-[var(--color-text-secondary)]">
          Every piece is handcrafted from real copper — no plating, no
          mass-production. Browse everything we build.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar products={products} />
      </div>

      {/* Category filter bar */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filterButtons.map((btn) => {
          const isActive = btn.key === activeFilter;
          return (
            <button
              key={btn.label}
              onClick={() => setFilter(btn.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[var(--color-primary)] text-white shadow-sm"
                  : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Product grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] py-20">
          <p className="text-lg text-[var(--color-text-muted)]">
            No products match your search.
          </p>
          <button
            onClick={clearFilter}
            className="mt-4 rounded-lg bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Results count */}
      {filteredProducts.length > 0 && (
        <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
          Showing {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
          {activeCategory
            ? ` in ${CATEGORIES[activeCategory].label}`
            : ""}
        </p>
      )}
    </div>
  );
}
