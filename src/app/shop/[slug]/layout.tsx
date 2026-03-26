import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import JsonLd from "@/components/JsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Go To Electroculture",
    };
  }

  const description =
    product.description.length > 160
      ? product.description.slice(0, 157) + "..."
      : product.description;

  return {
    title: `${product.name} | Go To Electroculture`,
    description,
    openGraph: {
      title: `${product.name} | Go To Electroculture`,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return <>{children}</>;
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.image,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: "Go To Electroculture",
            },
          },
          brand: {
            "@type": "Brand",
            name: "Go To Electroculture",
          },
        }}
      />
      {children}
    </>
  );
}
