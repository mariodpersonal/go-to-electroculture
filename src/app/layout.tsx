import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Go To Electroculture | Handcrafted Copper Tools",
  description:
    "Handcrafted electroculture antennas, copper pyramids, and tools. Built by hand, tuned by nature. Copper with purpose, not decoration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${sourceSans3.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)]">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Go To Electroculture",
            description:
              "Handcrafted copper electroculture tools — built by hand, tuned by nature.",
            url: "https://gotoelectroculture.vercel.app",
            sameAs: [
              "https://www.instagram.com/unstoppable_one_leg_wonder",
            ],
          }}
        />
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}
