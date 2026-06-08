import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SYVIX AI Solutions | Engineering Future Intelligence",
  description:
    "Building intelligent products, automation systems, and scalable software ecosystems designed for real-world impact.",
  icons: {
    icon: [
      {
        url: "./assets/logo.png",
        type: "image/png",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="./assets/logo.png" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-white text-[#0F172A] font-[family-name:var(--font-inter)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
