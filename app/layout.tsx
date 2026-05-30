import Script from 'next/script';
import "./globals.css";

export const metadata = {
  title: "CompressPro | Fast & Secure Image Compressor",
  description: "Optimize your workflow with CompressPro. Instantly reduce image sizes locally in your browser without losing quality. Perfect for SEO, web developers, and designers.",
  keywords: "image compressor, bulk image compression, local image optimization, webp, avif, png, jpeg compressor",
  metadataBase: new URL('https://compresspro.com'), // Replace with actual domain
  openGraph: {
    title: "CompressPro | Fast & Secure Image Compressor",
    description: "Optimize your workflow with CompressPro. Instantly reduce image sizes locally in your browser without losing quality.",
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
  return (
    <html lang="en">
      <body>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-REQWWPJ94Q`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-REQWWPJ94Q');
            `,
          }}
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CompressPro",
              "url": "https://compresspro.com",
              "logo": "https://compresspro.com/logo.png"
            })
          }}
        />
        {children}
        <footer className="mt-12 py-8 border-t">
          <div className="container mx-auto px-4">
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <a href="/" className="hover:text-blue-500">Home</a>
              <a href="/" className="hover:text-blue-500">Tools</a>
              <a href="/about" className="hover:text-blue-500">About</a>
              <a href="/contact" className="hover:text-blue-500">Contact</a>
              <a href="/faq" className="hover:text-blue-500">FAQ</a>
              <a href="/privacy-policy" className="hover:text-blue-500">Privacy Policy</a>
              <a href="/terms-conditions" className="hover:text-blue-500">Terms & Conditions</a>
              <a href="/cookie-policy" className="hover:text-blue-500">Cookie Policy</a>
              <a href="/security" className="hover:text-blue-500">Security</a>
            </nav>
            <div className="text-center mt-4 text-xs text-gray-500">
              &copy; {new Date().getFullYear()} CompressPro. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
