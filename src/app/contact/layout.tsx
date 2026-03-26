import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Go To Electroculture",
  description:
    "Get in touch with Go To Electroculture. Questions about products, custom orders, or wholesale inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
