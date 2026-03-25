import Image from "next/image";
import Link from "next/link";
import { products, CATEGORIES, getAllCategories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";

const featuredSlugs = [
  "7-chakra-stone-spiraled-copper-antenna",
  "large-quartz-sphere-pyramid",
  "copper-water-bottle-30oz",
  "tensor-ring",
];

/* REPLACE: Swap these with real product/category photos */
const categoryImages: Record<string, string> = {
  antennas: "/images/single-antenna.png",
  pyramids: "/images/pyramid.png",
  handwear: "/images/palm-ring.png",
  "tensor-rings": "/images/tensor-rings.png",
  drinkware: "/images/copper-bottle.png",
  "emf-shields": "/images/emf-shield.png",
};

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => products.find((p) => p.slug === slug)!)
    .filter(Boolean);

  const categories = getAllCategories();

  return (
    <div>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/home-banner.png"
          alt="Copper spiral electroculture antenna in soil at golden hour"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Copper With Purpose.
            <br />
            Not Decoration.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Handcrafted electroculture antennas and copper tools — built by
            hand, tuned by nature. For those who grow different.
          </p>
          <Link
            href="/shop"
            className="mt-10 inline-block rounded-lg bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[var(--color-primary-hover)] hover:shadow-xl"
          >
            Shop Handcrafted Copper
          </Link>
        </div>
      </section>

      {/* ─── Featured Products ────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-[var(--color-text)] sm:text-4xl">
            What We Build
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--color-text-secondary)]">
            Every piece is shaped by hand — copper, crystals, and intention.
            Nothing mass-produced. Nothing decorative for the sake of it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold transition-colors hover:text-[var(--color-primary-hover)]"
          >
            View All Products
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── Story Teaser ─────────────────────────────────── */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about-us-2.png"
              alt="Go To Electroculture founder at work"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h2 className="text-3xl text-[var(--color-text)] sm:text-4xl">
              This Started With a Crash. Literally.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
              A motorcycle wreck. A long recovery. A garden that needed
              attention. What started as a single copper antenna stuck in the
              dirt turned into something bigger — a craft, a community, and a
              different way of growing. Every piece we sell carries that same
              energy: built by hand, with purpose.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
            >
              Read the Full Story
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Shop by Category ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-[var(--color-text)] sm:text-4xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {categories.map((cat) => {
            const info = CATEGORIES[cat];
            return (
              <Link
                key={cat}
                href={`/shop?cat=${info.filterKey}`}
                className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-lg"
              >
                <Image
                  src={categoryImages[cat]}
                  alt={info.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative z-10 w-full p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {info.label}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── Trust Signals ────────────────────────────────── */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-3 md:py-20">
          {/* Handcrafted */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-[var(--color-primary)]"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">
              Handcrafted in the USA
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Every piece shaped and soldered by hand in our workshop.
            </p>
          </div>

          {/* Real Materials */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-[var(--color-primary)]"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">
              Real Copper. Real Crystals.
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              No plating, no filler. Solid copper and genuine stones in every
              build.
            </p>
          </div>

          {/* Community */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-[var(--color-primary)]"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">
              11,400+ Growing Different
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              A growing community of gardeners, growers, and energy-conscious
              people.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Instagram CTA ────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-center rounded-xl bg-[var(--color-iron)] px-6 py-16 text-center md:py-20">
          <h2 className="text-3xl text-white sm:text-4xl">Follow Along</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/70">
            Behind-the-scenes builds, garden results, and copper in action.
            Join the community on Instagram.
          </p>
          <a
            href="https://www.instagram.com/unstoppable_one_leg_wonder"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @unstoppable_one_leg_wonder
          </a>
        </div>
      </section>

      {/* ─── Newsletter ───────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:py-24">
          <h2 className="text-3xl text-[var(--color-text)] sm:text-4xl">
            Stay Tapped In
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--color-text-secondary)]">
            New builds, growing tips, and the occasional behind-the-scenes
            look. No spam. Just copper and dirt.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
