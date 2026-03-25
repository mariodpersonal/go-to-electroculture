import Link from "next/link";

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <Link
          href="/shop"
          className="text-sm text-[var(--color-text-secondary)] hover:text-[#B87333] transition-colors mb-8 inline-block"
        >
          &larr; Back to Shop
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-6">
          Shipping Policy
        </h1>


        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Handcrafted &amp; Made to Order
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              All Go To Electroculture products are handcrafted and made to
              order. Because each piece is individually created, please allow
              time for your item to be crafted before it ships.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Processing Time
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Orders typically take{" "}
              <strong className="text-[var(--color-text)]">
                5-10 business days
              </strong>{" "}
              to process before shipping. During periods of high demand,
              processing times may be slightly longer. We&apos;ll keep you
              updated if there are any delays.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Shipping Rates
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Shipping costs are calculated by weight and destination at
              checkout. You&apos;ll see the exact shipping cost before
              completing your purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Domestic Shipping
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We ship to all 50 US states. Most domestic orders are delivered
              within 3-7 business days after processing, depending on your
              location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Order Tracking
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Once your order ships, you&apos;ll receive a tracking number via
              email. You can use this to follow your package&apos;s journey to
              your door.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              International Shipping
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              International shipping is available on a case-by-case basis.
              Please{" "}
              <Link
                href="/contact"
                className="text-[#B87333] hover:text-[#9A5E2A] underline underline-offset-2 transition-colors"
              >
                contact us
              </Link>{" "}
              for international shipping rates and availability. International
              customers are responsible for any customs duties or import fees.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)]">
            Questions about shipping?{" "}
            <Link
              href="/contact"
              className="text-[#B87333] hover:text-[#9A5E2A] transition-colors"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
