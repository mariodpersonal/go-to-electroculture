"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        placeholder="Your email address"
        aria-label="Email address"
        className="flex-1 rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25"
      />
      <button
        type="submit"
        className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
      >
        Subscribe
      </button>
    </form>
  );
}
