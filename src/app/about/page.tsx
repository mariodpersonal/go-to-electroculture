import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about-hero.png"
          alt="Go To Electroculture workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
            The Story Behind Go To Electroculture
          </h1>
        </div>
      </section>

      {/* Section 1 — Intro */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-lg sm:text-xl leading-relaxed text-[var(--color-text)]">
            I&apos;ll skip the polished version. A few years back, I was in a
            motorcycle accident. Bad one. The kind where you don&apos;t walk away
            the same person &mdash; literally. I lost my leg. And for a while, I
            lost a lot more than that. Direction. Purpose. The feeling that
            you&apos;re building something instead of just surviving.
          </p>
        </div>
      </section>

      {/* Image break */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden">
          <Image
            src="/images/about-us-2.png"
            alt="Hands shaping copper in the workshop"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Section 2 — Finding Copper */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-lg sm:text-xl leading-relaxed text-[var(--color-text)]">
            I didn&apos;t set out to start a business. I started making things
            because I needed to. Shaping copper, spiraling wire, setting
            crystals &mdash; it was physical, it was focused, and it kept me out
            of my own head. Then I started putting antennas in the garden. The
            garden responded. Growth improved. The soil changed.
          </p>
        </div>
      </section>

      {/* Mission Pull Quote */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <blockquote className="border-l-4 border-[#B87333] pl-6 sm:pl-8 py-2">
            <p className="text-2xl sm:text-3xl font-semibold text-[#B87333] leading-snug italic">
              &ldquo;One guy &mdash; one leg, two hands, and a whole lot of
              copper.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Image break */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden">
          <Image
            src="/images/about-us-3.png"
            alt="Copper electroculture builds and garden results"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Section 3 — What This Is */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-lg sm:text-xl leading-relaxed text-[var(--color-text)]">
            Go To Electroculture is not a wellness brand. It&apos;s not a
            spiritual lifestyle company. It&apos;s a workshop. One guy &mdash;
            one leg, two hands, and a whole lot of copper. Every antenna, every
            pyramid, every ring is handcrafted. Real copper. Real crystals. I
            don&apos;t outsource. I don&apos;t mass produce.
          </p>
        </div>
      </section>

      {/* Image break */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden">
          <Image
            src="/images/about-us-4.png"
            alt="The workshop and community behind Go To Electroculture"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Section 4 — The Community */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-lg sm:text-xl leading-relaxed text-[var(--color-text)]">
            What started as a personal project turned into something bigger.
            Over 11,400 people now follow the journey on Instagram at{" "}
            <a
              href="https://instagram.com/unstoppable_one_leg_wonder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B87333] hover:text-[#9A5E2A] font-semibold underline underline-offset-2 transition-colors"
            >
              @unstoppable_one_leg_wonder
            </a>
            . Not because the content is polished &mdash; it&apos;s not. Because
            it&apos;s real.
          </p>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 sm:py-24 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Come find us. The door&apos;s open.
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 text-lg">
            Follow the build, the garden, and everything in between.
          </p>
          <a
            href="https://instagram.com/unstoppable_one_leg_wonder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#B87333] hover:bg-[#9A5E2A] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @unstoppable_one_leg_wonder
          </a>
        </div>
      </section>

      {/* Back to shop */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/shop"
            className="text-[var(--color-text-secondary)] hover:text-[#B87333] transition-colors"
          >
            &larr; Back to Shop
          </Link>
        </div>
      </section>
    </div>
  );
}
