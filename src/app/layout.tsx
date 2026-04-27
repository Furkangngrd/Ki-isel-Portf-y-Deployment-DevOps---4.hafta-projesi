import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furkan | Yazılım Mühendisi & DevOps Meraklısı",
  description:
    "Furkan'ın kişisel portfolyosu — Bitlis Eren Üniversitesi Bilgisayar Mühendisliği öğrencisi. Go, Next.js ve modern DevOps pratikleriyle full-stack uygulamalar geliştiriyor.",
  keywords: [
    "Furkan",
    "Yazılım Mühendisi",
    "Portfolyo",
    "Full Stack Geliştirici",
    "DevOps",
    "Next.js",
    "Go",
    "Docker",
  ],
  authors: [{ name: "Furkan" }],
  creator: "Furkan",
  openGraph: {
    title: "Furkan | Yazılım Mühendisi & DevOps Meraklısı",
    description:
      "Modern DevOps pratikleriyle production-ready full-stack uygulamalar geliştiriyorum.",
    url: "https://furkan.dev",
    siteName: "Furkan Portfolyo",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Furkan - Yazılım Mühendisi Portfolyo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furkan | Yazılım Mühendisi & DevOps Meraklısı",
    description:
      "Modern DevOps pratikleriyle production-ready full-stack uygulamalar geliştiriyorum.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="bg-mesh" />
        {children}
      </body>
    </html>
  );
}
