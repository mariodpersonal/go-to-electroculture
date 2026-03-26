import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart | Go To Electroculture",
  description:
    "Review your handcrafted copper electroculture products and proceed to checkout.",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
