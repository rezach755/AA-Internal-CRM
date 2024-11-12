import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import localFont from "next/font/local";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextJS Tailwind Course Landing Page",
  description:
    "Introducing Tailwind Course Landing Page, a versatile and engaging landing page template designed using Tailwind CSS and Material Tailwind.",
};

const yekan = localFont({
  src: [
    {
      path: "../fonts/BYekan.ttf",
      weight: "400",
    },
    {
      path: "../fonts/BYekanBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-yekan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="fa" className={`${yekan.variable}`}>
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${roboto.className} ${yekan.variable} `}>
        <Layout>
          {children}
          {/* <FixedPlugin /> */}
        </Layout>
      </body>
    </html>
  );
}
