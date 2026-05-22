import "./globals.css";

export const metadata = {
  title: "CompressPro | Fast & Secure Image Compressor",
  description: "Optimize your workflow with CompressPro. Instantly reduce image sizes locally in your browser without losing quality. Perfect for SEO, web developers, and designers.",
  keywords: "image compressor, bulk image compression, local image optimization, webp, avif, png, jpeg compressor",
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
      <body>{children}</body>
    </html>
  );
}
