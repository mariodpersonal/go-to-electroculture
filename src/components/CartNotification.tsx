"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

interface CartNotificationProps {
  product: Product;
  variantLabel?: string;
  quantity: number;
  unitPrice: number;
  isVisible: boolean;
  onClose: () => void;
}

export default function CartNotification({
  product,
  variantLabel,
  quantity,
  unitPrice,
  isVisible,
  onClose,
}: CartNotificationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isVisible || isHovered) return;

    timerRef.current = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isVisible, isHovered, onClose]);

  if (!isVisible) return null;

  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(unitPrice * quantity);

  return (
    <div
      className="fixed top-24 right-6 z-50 w-full max-w-sm animate-[slideInRight_0.3s_ease-out] rounded-lg border border-[var(--color-border)] bg-white shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="absolute top-3 right-3 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Header */}
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5 text-[var(--color-success)]"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span className="text-sm font-semibold text-[var(--color-text)]">
          Added to cart
        </span>
      </div>

      {/* Product info */}
      <div className="flex gap-4 p-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-[var(--color-surface)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-[var(--color-text)]">
            {product.name}
          </p>
          {variantLabel && (
            <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
              {variantLabel}
            </p>
          )}
          <div className="mt-1 flex items-center gap-3 text-sm">
            <span className="text-[var(--color-text-secondary)]">
              Qty: {quantity}
            </span>
            <span className="font-bold text-[var(--color-primary)]">
              {formattedTotal}
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 border-t border-[var(--color-border)] px-4 py-3">
        <Link
          href="/cart"
          className="flex-1 rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          View Cart
        </Link>
        <button
          onClick={onClose}
          className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg)]"
        >
          Continue Shopping
        </button>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
