"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getProductBySlug,
  getRelatedProducts,
  type Product,
  type ProductVariant,
} from "@/data/products";
import { useCart } from "@/lib/cart-context";
import ProductCard from "@/components/ProductCard";
import CartNotification from "@/components/CartNotification";

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState<{
    product: Product;
    variantLabel?: string;
    quantity: number;
    unitPrice: number;
  } | null>(null);

  const closeNotification = useCallback(() => setNotification(null), []);

  if (!product) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-6 py-20">
        <h1 className="text-3xl text-[var(--color-text)]">
          Product Not Found
        </h1>
        <p className="mt-4 text-[var(--color-text-secondary)]">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-block rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);
  const currentPrice = selectedVariant
    ? selectedVariant.price
    : product.price;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(currentPrice);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem(
        product!,
        selectedVariant?.id,
        selectedVariant?.label,
        currentPrice
      );
    }
    setNotification({
      product: product!,
      variantLabel: selectedVariant?.label,
      quantity,
      unitPrice: currentPrice,
    });
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
      {/* Cart notification */}
      {notification && (
        <CartNotification
          product={notification.product}
          variantLabel={notification.variantLabel}
          quantity={notification.quantity}
          unitPrice={notification.unitPrice}
          isVisible={true}
          onClose={closeNotification}
        />
      )}

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
      >
        <Link
          href="/"
          className="underline decoration-[var(--color-border)] underline-offset-2 transition-colors hover:text-[var(--color-primary)] hover:decoration-[var(--color-primary)]"
        >
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          href="/shop"
          className="underline decoration-[var(--color-border)] underline-offset-2 transition-colors hover:text-[var(--color-primary)] hover:decoration-[var(--color-primary)]"
        >
          Shop
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-[var(--color-text-secondary)]">
          {product.name}
        </span>
      </nav>

      {/* Product layout */}
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        {/* ─── Image Gallery ─────────────────────────────── */}
        <div>
          {/* Main image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[var(--color-surface)]">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Thumbnail strip */}
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative h-20 w-20 overflow-hidden rounded-md border-2 transition-all ${
                    idx === selectedImage
                      ? "border-[var(--color-primary)] shadow-sm"
                      : "border-[var(--color-border)] opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ─── Product Info ───────────────────────────────── */}
        <div className="flex flex-col">
          {/* Category */}
          <span className="mb-3 w-fit text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]">
            {product.categoryLabel}
          </span>

          {/* Name */}
          <h1 className="text-3xl leading-tight text-[var(--color-text)] sm:text-4xl">
            {product.name}
          </h1>

          {/* Price */}
          <p className="mt-4 text-2xl font-bold text-[var(--color-primary)]">
            {formattedPrice}
          </p>

          {/* Tagline */}
          <p className="mt-4 text-lg italic text-[var(--color-text-secondary)]">
            {product.tagline}
          </p>

          {/* Description */}
          <p className="mt-6 leading-relaxed text-[var(--color-text-secondary)]">
            {product.description}
          </p>

          {/* Variant selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-[var(--color-text)]">
                Select Size
              </label>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => {
                  const isSelected = selectedVariant?.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                        isSelected
                          ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                          : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]"
                      }`}
                    >
                      {variant.label} —{" "}
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(variant.price)}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)]">
              Features
            </h3>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-success)]"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Specs */}
          <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)]">
              Specifications
            </h3>
            <dl className="space-y-2 text-sm">
              {product.dimensions && (
                <div className="flex justify-between">
                  <dt className="text-[var(--color-text-muted)]">
                    Dimensions
                  </dt>
                  <dd className="font-medium text-[var(--color-text)]">
                    {product.dimensions}
                  </dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-[var(--color-text-muted)]">Weight</dt>
                <dd className="font-medium text-[var(--color-text)]">
                  {product.weight} lb{product.weight !== 1 ? "s" : ""}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--color-text-muted)]">Material</dt>
                <dd className="font-medium text-[var(--color-text)]">
                  Solid Copper
                </dd>
              </div>
            </dl>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Quantity */}
            <div className="flex items-center rounded-lg border border-[var(--color-border)]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
                className="px-4 py-3 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
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
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <span className="min-w-[3rem] text-center font-medium text-[var(--color-text)]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
                className="px-4 py-3 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={
                !product.inStock ||
                (product.variants &&
                  product.variants.length > 0 &&
                  !selectedVariant)
              }
              className="flex-1 rounded-lg bg-[var(--color-primary)] px-8 py-3.5 text-center font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[var(--color-primary-hover)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
              {!product.inStock
                ? "Out of Stock"
                : product.variants &&
                    product.variants.length > 0 &&
                    !selectedVariant
                  ? "Select a Size"
                  : "Add to Cart"}
            </button>
          </div>

          {/* Stock status */}
          {product.stock === 0 || !product.inStock ? (
            <p className="mt-3 flex items-center gap-2 text-sm text-red-600">
              <span className="inline-block h-2 w-2 rounded-full bg-red-600" />
              Out of Stock
            </p>
          ) : product.stock <= 5 ? (
            <p className="mt-3 flex items-center gap-2 text-sm text-[#C4923A]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#C4923A]" />
              Only {product.stock} left — order soon
            </p>
          ) : (
            <p className="mt-3 flex items-center gap-2 text-sm text-[var(--color-success)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-success)]" />
              In stock and ready to ship
            </p>
          )}
        </div>
      </div>

      {/* ─── Related Products ─────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 border-t border-[var(--color-border)] pt-16 md:mt-28">
          <h2 className="mb-10 text-2xl text-[var(--color-text)] sm:text-3xl">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
