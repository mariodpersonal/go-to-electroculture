import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block rounded-[6px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_2px_8px_rgba(44,44,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(44,44,42,0.12)] overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[6px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          unoptimized
        />

        {/* Low stock badge */}
        {product.inStock && product.stock <= 5 && (
          <span className="absolute top-3 right-3 z-10 rounded-full bg-[#C4923A] px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            Only {product.stock} left
          </span>
        )}

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(44,44,42,0.45)]">
            <span className="rounded-full bg-[var(--color-surface)] px-4 py-1.5 text-sm font-medium text-[var(--color-text-secondary)]">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4">
        {/* Category tag */}
        <span className="w-fit text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]">
          {product.categoryLabel}
        </span>

        {/* Product name */}
        <h3 className="text-base font-semibold leading-snug text-[var(--color-text)] line-clamp-2">
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)] line-clamp-2">
          {product.tagline}
        </p>

        {/* Price */}
        <p className="mt-1 text-lg font-bold text-[var(--color-primary)]">
          {formattedPrice}
        </p>
      </div>
    </Link>
  );
}
