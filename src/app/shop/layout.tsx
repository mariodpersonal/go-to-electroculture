import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Products | Go To Electroculture",
  description:
    "Handcrafted copper electroculture antennas, pyramids, tensor rings, and more. Built by hand, tuned by nature.",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
