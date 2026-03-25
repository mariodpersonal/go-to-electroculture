import Link from "next/link";

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>


        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Information We Collect
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-3">
              When you make a purchase or interact with our site, we may collect
              the following information:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[var(--color-text-secondary)]">
              <li>Name</li>
              <li>Email address</li>
              <li>Shipping address</li>
              <li>
                Payment information (processed securely through PayPal &mdash;
                we do not store your payment details)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              How We Use Your Information
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[var(--color-text-secondary)]">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Respond to your questions and requests</li>
              <li>Improve our website and products</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Payment Processing
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              All payments are processed through{" "}
              <strong className="text-[var(--color-text)]">PayPal</strong>. We
              do not store your credit card number or bank details on our
              servers. PayPal&apos;s privacy practices are governed by their own
              privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Analytics
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We use{" "}
              <strong className="text-[var(--color-text)]">
                Google Analytics
              </strong>{" "}
              to understand how visitors use our website. This helps us improve
              the shopping experience. Google Analytics collects anonymized data
              about page views, session duration, and traffic sources.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Cookies
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Our website uses cookies to maintain your shopping cart, remember
              your preferences, and support analytics. You can control cookie
              settings through your browser. Disabling cookies may affect
              certain site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Your Rights
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              You have the right to access, correct, or delete your personal
              information at any time. You may also opt out of any marketing
              communications. To exercise these rights, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Data Sharing
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We only share information with service providers
              necessary to fulfill your order (e.g., shipping carriers, payment
              processors).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Contact Us
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              If you have questions about this privacy policy or how your data
              is handled, please{" "}
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
    </div>
  );
}
