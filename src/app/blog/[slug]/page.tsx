import Link from "next/link";
import Image from "next/image";
import { getBlogBySlug } from "@/data/blog";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-muted)]">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-[var(--color-primary)]"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/blog"
              className="transition-colors hover:text-[var(--color-primary)]"
            >
              Learn
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[var(--color-text-secondary)]">{post.title}</li>
        </ol>
      </nav>

      {/* Hero Image */}
      <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative max-h-[400px] overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={400}
            className="h-auto max-h-[400px] w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Header */}
      <header className="mx-auto mt-10 max-w-3xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            {post.category}
          </span>
          <span className="text-[var(--color-text-muted)]">
            {formattedDate}
          </span>
          <span className="text-[var(--color-text-muted)]">&middot;</span>
          <span className="text-[var(--color-text-muted)]">
            {post.readTime} min read
          </span>
        </div>

        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
          By {post.author}
        </p>
      </header>

      {/* Article Content */}
      <article className="mx-auto mt-10 max-w-3xl px-4 pb-16 sm:px-6">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back link */}
        <div className="mt-16 border-t border-[var(--color-border)] pt-8">
          <Link
            href="/blog"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
          >
            &larr; Back to Learn
          </Link>
        </div>
      </article>

      {/* Blog content typography styles */}
      <style>{`
        .blog-content h2 {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-text);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .blog-content h3 {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-text);
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .blog-content p {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: var(--color-text);
          margin-bottom: 1.25rem;
        }

        .blog-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-content ul li {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }

        .blog-content blockquote {
          border-left: 4px solid var(--color-primary);
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-size: 1.125rem;
          font-style: italic;
          color: var(--color-primary);
          line-height: 1.7;
        }

        .blog-content a {
          color: var(--color-primary);
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: color 0.2s;
        }

        .blog-content a:hover {
          color: var(--color-primary-hover);
        }
      `}</style>
    </div>
  );
}
