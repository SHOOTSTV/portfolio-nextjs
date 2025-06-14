import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Axel Stankiewicz - Portfolio",
  description:
    "Web developer portfolio of Axel Stankiewicz, specialized in building modern web applications with React, Next.js, and TailwindCSS.",
  keywords: [
    "web developer",
    "React",
    "Next.js",
    "TailwindCSS",
    "portfolio",
    "Axel Stankiewicz",
    "axelstz",
  ],
  authors: [{ name: "Axel Stankiewicz" }],
  creator: "Axel Stankiewicz",
  publisher: "Axel Stankiewicz",
  robots: "index, follow",
  metadataBase: new URL("https://www.axelstz.fr/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.axelstz.fr/",
    title: "Axel Stankiewicz - Portfolio",
    description:
      "Web developer portfolio of Axel Stankiewicz, specialized in building modern web applications with React, Next.js, and TailwindCSS.",
    siteName: "Axel Stankiewicz's Portfolio",
    images: [
      {
        url: "/meta-axel.png",
        width: 1200,
        height: 630,
        alt: "Preview of Axel Stankiewicz's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axel Stankiewicz - Portfolio",
    description:
      "Web developer portfolio of Axel Stankiewicz, specialized in building modern web applications with React, Next.js, and TailwindCSS.",
    images: ["/meta-axel.png"],
    creator: "@axelstankiewicz",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
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
      <body
        className={twMerge(
          inter.variable,
          poppins.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
