import Link from "next/link";

export default function ReturnsPolicyPage() {
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
          Returns &amp; Refunds
        </h1>


        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              30-Day Return Window
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We accept returns within{" "}
              <strong className="text-[var(--color-text)]">
                30 days of delivery
              </strong>
              . If you&apos;re not satisfied with your purchase, you may request
              a return within this window.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Return Conditions
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Items must be unused, undamaged, and in their original packaging
              to qualify for a return. Please ensure the item is in the same
              condition in which you received it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Return Shipping
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              The buyer is responsible for return shipping costs. We recommend
              using a tracked shipping method to ensure your return arrives
              safely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              How to Initiate a Return
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              To start a return, please{" "}
              <Link
                href="/contact"
                className="text-[#B87333] hover:text-[#9A5E2A] underline underline-offset-2 transition-colors"
              >
                email us
              </Link>{" "}
              with your order number and reason for the return. We&apos;ll
              provide instructions on where to send your item.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Refund Processing
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Once we receive your returned item and verify its condition, your
              refund will be processed within{" "}
              <strong className="text-[var(--color-text)]">
                5-7 business days
              </strong>
              . Refunds are issued to the original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Custom Orders
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Custom orders are{" "}
              <strong className="text-[var(--color-text)]">final sale</strong>{" "}
              and cannot be returned or refunded. Please confirm all details
              before placing a custom order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Damaged or Defective Items
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              If your item arrives damaged or defective, we&apos;ll replace it
              at no cost to you. Please contact us within 7 days of delivery
              with photos of the damage, and we&apos;ll take care of it.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)]">
            Need to start a return?{" "}
            <Link
              href="/contact"
              className="text-[#B87333] hover:text-[#9A5E2A] transition-colors"
            >
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
