import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Skopos Logic Technologies | Cloud Architecture & Trustworthy AI",
  description: "We help enterprises and high-growth startups scale their infrastructure, deploy resilient IoT platforms, and leverage artificial intelligence with deterministic confidence.",
  keywords: ["Cloud Architecture", "Trustworthy AI", "IoT", "ESG", "Enterprise Solutions", "CTO Consulting"],
  authors: [{ name: "Skopos Logic Technologies" }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Skopos Logic Technologies | Cloud Architecture & Trustworthy AI",
    description: "Enterprise Technology Consultancy specializing in Cloud Architecture and Trustworthy AI.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-gray-50 text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
