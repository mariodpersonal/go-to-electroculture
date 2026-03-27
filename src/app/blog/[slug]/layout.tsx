import type { Metadata } from "next";
import { getBlogBySlug } from "@/data/blog";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Go To Electroculture" };
  }

  return {
    title: `${post.title} | Go To Electroculture`,
    description: post.excerpt,
  };
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return <>{children}</>;
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://gotoelectroculture.com${post.image}`,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Go To Electroculture",
      logo: {
        "@type": "ImageObject",
        url: "https://gotoelectroculture.com/images/logo.png",
      },
    },
    datePublished: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gotoelectroculture.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      {children}
    </>
  );
}
