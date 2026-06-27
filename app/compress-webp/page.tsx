import Compressor from "../../components/Compressor";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Compress WebP Online | Next-Gen Image Optimization - CompressPro",
  description: "Optimize WebP images for maximum performance. Smaller than JPEG and PNG with superior quality. Use our free tool to reduce WebP file size.",
  keywords: "compress webp, webp optimizer, reduce webp size, online webp compressor, next-gen images",
};

export default function CompressWebPPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressPro WebP Optimizer",
    "operatingSystem": "Web",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Next-generation WebP compression tool for the fastest web experience."
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Header />

      <section className="hero animate-fade-up delay-1">
        <h1>Compress WebP Online</h1>
        <p>WebP is already efficient, but it can often be even smaller. Our tool applies advanced optimization techniques to WebP files to ensure you're serving the smallest possible assets to your users.</p>
      </section>

      <Compressor />

      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>Why Use WebP?</h2>
        <p>WebP is a modern image format that provides superior lossless and lossy compression for images on the web. It was specifically designed to make the web faster. By using our WebP compressor, you ensure your next-gen images are truly optimized for speed.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3>Superior Compression</h3>
            <p>WebP images are typically 25-35% smaller than comparable JPEG or PNG files, even at the same quality level.</p>
          </div>
          <div>
            <h3>Modern Performance</h3>
            <p>Support for WebP is now universal across all major browsers, making it the best choice for modern web development.</p>
          </div>
          <div>
            <h3>No Quality Loss</h3>
            <p>Our algorithms are tuned to preserve the fine details of your images while aggressively stripping away unnecessary data.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
