import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies | Go To Electroculture",
};

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
