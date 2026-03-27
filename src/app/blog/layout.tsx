import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn | Go To Electroculture",
  description:
    "Learn about electroculture, copper, and growing different. Real knowledge from real dirt.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
