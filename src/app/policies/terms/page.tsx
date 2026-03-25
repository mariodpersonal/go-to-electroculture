import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <Link
          href="/shop"
          className="text-sm text-[var(--color-text-secondary)] hover:text-[#B87333] transition-colors mb-8 inline-block"
        >
          &larr; Back to Shop
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-6">
          Terms of Service
        </h1>

        {/* Draft Banner */}
        <div className="bg-[#C4923A]/10 border border-[#C4923A]/30 rounded-lg px-5 py-4 mb-10">
          <p className="text-sm text-[#9A5E2A] font-medium">
            This policy is a draft and should be reviewed by a legal
            professional.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Acceptance of Terms
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              By accessing and using the Go To Electroculture website and
              purchasing our products, you agree to be bound by these Terms of
              Service. If you do not agree with any part of these terms, please
              do not use our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Product Descriptions
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We make every effort to accurately describe and photograph our
              products. Because all items are handcrafted from natural materials
              (copper, crystals, etc.), slight variations in color, texture, and
              size are normal and part of what makes each piece unique.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Pricing
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              All prices are listed in US Dollars (USD). We reserve the right to
              change prices at any time without prior notice. The price at the
              time of your purchase is the price you pay.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Payment
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              All payments are processed securely through{" "}
              <strong className="text-[var(--color-text)]">PayPal</strong>. By
              completing a purchase, you agree to PayPal&apos;s terms and
              conditions. We do not store credit card or bank information on our
              servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Shipping &amp; Returns
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Please refer to our{" "}
              <Link
                href="/policies/shipping"
                className="text-[#B87333] hover:text-[#9A5E2A] underline underline-offset-2 transition-colors"
              >
                Shipping Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/policies/returns"
                className="text-[#B87333] hover:text-[#9A5E2A] underline underline-offset-2 transition-colors"
              >
                Returns &amp; Refunds Policy
              </Link>{" "}
              for full details on delivery timelines, return eligibility, and
              refund processing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Intellectual Property
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              All content on this website &mdash; including product photos, text,
              logos, and designs &mdash; is the property of Go To Electroculture
              and may not be reproduced, distributed, or used without written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Limitation of Liability
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Go To Electroculture shall not be liable for any indirect,
              incidental, or consequential damages arising from the use of our
              products or website. Our products are sold as handcrafted goods and
              are not intended to replace professional medical, agricultural, or
              scientific advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Governing Law
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              These terms shall be governed by and construed in accordance with
              the laws of the United States. Any disputes arising under these
              terms shall be resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Changes to Terms
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We reserve the right to update these terms at any time. Changes
              will be posted on this page. Continued use of the site after
              changes are posted constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Contact
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              If you have questions about these terms, please{" "}
              <Link
                href="/contact"
                className="text-[#B87333] hover:text-[#9A5E2A] underline underline-offset-2 transition-colors"
              >
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)]">
            Last updated: March 2026
          </p>
        </div>
      </div>
    </main>
  );
}
