"use client";

import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal, itemCount } =
    useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4">
        <div className="text-center py-24">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-surface)] flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[var(--color-text-muted)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-text)] mb-3">
            Your cart is empty.
          </h1>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
            Looks like you haven&apos;t added any handcrafted copper pieces yet.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#B87333] hover:bg-[#9A5E2A] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            Your Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-[var(--color-text-secondary)] hover:text-red-600 transition-colors underline underline-offset-2"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-6 mb-10">
          {items.map((item) => {
            const key = item.variantId
              ? `${item.product.id}-${item.variantId}`
              : item.product.id;
            const lineTotal = item.unitPrice * item.quantity;

            return (
              <div
                key={key}
                className="bg-[var(--color-surface)] rounded-xl p-4 sm:p-6 flex gap-4 sm:gap-6"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-white shrink-0">
                  {item.product.images?.[0] && (
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <Link
                        href={`/shop/${item.product.slug}`}
                        className="text-[var(--color-text)] font-semibold hover:text-[#B87333] transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      {item.variantLabel && (
                        <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
                          {item.variantLabel}
                        </p>
                      )}
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                        ${item.unitPrice.toFixed(2)} each
                      </p>
                    </div>
                    <p className="text-[var(--color-text)] font-semibold whitespace-nowrap">
                      ${lineTotal.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-[var(--color-border)] rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity - 1,
                            item.variantId
                          )
                        }
                        className="w-9 h-9 flex items-center justify-center text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        &minus;
                      </button>
                      <span className="w-10 h-9 flex items-center justify-center text-sm font-medium text-[var(--color-text)] border-x border-[var(--color-border)]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity + 1,
                            item.variantId
                          )
                        }
                        className="w-9 h-9 flex items-center justify-center text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        removeItem(item.product.id, item.variantId)
                      }
                      className="text-sm text-[var(--color-text-muted)] hover:text-red-600 transition-colors"
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cart Summary */}
        <div className="bg-[var(--color-surface)] rounded-xl p-6 sm:p-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[var(--color-text-secondary)]">
              Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
            </span>
            <span className="text-xl font-bold text-[var(--color-text)]">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mb-6">
            Shipping calculated at checkout.
          </p>

          <button
            onClick={() =>
              alert(
                "PayPal checkout is coming soon! Stay tuned."
              )
            }
            className="w-full bg-[#B87333] hover:bg-[#9A5E2A] text-white font-semibold py-4 rounded-lg text-lg transition-colors cursor-pointer"
          >
            Proceed to Checkout
          </button>

          <Link
            href="/shop"
            className="block text-center mt-4 text-[var(--color-text-secondary)] hover:text-[#B87333] transition-colors text-sm"
          >
            &larr; Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
