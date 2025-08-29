import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethio Digitals | Innovative Software Solutions",
  description:
    "Ethio Digitals provides modern, scalable, and innovative software solutions tailored for businesses in Ethiopia and beyond.",
  keywords: [
    "Ethio Digitals",
    "Software Company Ethiopia",
    "Web Development",
    "Mobile Apps",
    "Digital Solutions",
  ],
  authors: [{ name: "Ethio Digitals Team" }],
  openGraph: {
    title: "Ethio Digitals | Innovative Software Solutions",
    description:
      "We build digital solutions that empower businesses with technology.",
    url: "https://ethiodigitals.com",
    siteName: "Ethio Digitals",
    images: [
      {
        url: "/ethiodigitals-og.png", // you can replace with your actual logo/banner
        width: 1200,
        height: 630,
        alt: "Ethio Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethio Digitals | Innovative Software Solutions",
    description:
      "Transform your business with innovative software solutions from Ethio Digitals.",
    images: ["/ethiodigitals-og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
