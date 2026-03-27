import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/data/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <section className="pb-12 pt-16 sm:pt-24 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            Learn
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Electroculture, copper, and growing different. Real knowledge from
            real dirt.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Category */}
                  <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-bold leading-snug text-[var(--color-text)] sm:text-2xl">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      &middot; {post.readTime} min read
                    </span>
                    <span className="text-sm font-semibold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-primary-hover)]">
                      Read More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
