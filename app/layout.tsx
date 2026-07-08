import "./globals.css";

import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://compresspro.alfo.online'),
  title: "CompressPro | Fast & Secure Image Compressor",
  description: "Optimize your workflow with CompressPro. Instantly reduce image sizes locally in your browser without losing quality. Perfect for SEO, web developers, and designers.",
  keywords: "image compressor, bulk image compression, local image optimization, webp, avif, png, jpeg compressor",
  openGraph: {
    title: "CompressPro | Fast & Secure Image Compressor",
    description: "Optimize your workflow with CompressPro. Instantly reduce image sizes locally in your browser without losing quality.",
    url: 'https://compresspro.alfo.online',
    siteName: 'CompressPro',
    type: "website",
    locale: "en_US"
  },
  other: {
    "google-adsense-account": "ca-pub-6349736452407764"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CompressPro",
    "url": "https://compresspro.alfo.online",
    "logo": "https://compresspro.alfo.online/logo.png"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CompressPro",
    "url": "https://compresspro.alfo.online"
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} suppressHydrationWarning />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} suppressHydrationWarning />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6349736452407764" crossOrigin="anonymous"></script>
      </head>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2KVWPQF2RL" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2KVWPQF2RL');
          `
        }} />
      </body>
    </html>
  );
}
