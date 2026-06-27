import Compressor from "../../components/Compressor";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Compress AVIF Online | Best AVIF Image Optimizer - CompressPro",
  description: "Next-gen AVIF compression. Reduce AVIF file size while maintaining incredible visual quality. Fast, secure, and processed in your browser.",
  keywords: "compress avif, avif optimizer, reduce avif size, online avif compressor, next-gen image compression",
};

export default function CompressAVIFPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressPro AVIF Optimizer",
    "operatingSystem": "Web",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "State-of-the-art AVIF compressor to optimize your next-gen images for the web."
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Header />

      <section className="hero animate-fade-up delay-1">
        <h1>Compress AVIF Online</h1>
        <p>Take advantage of the latest in image technology. AVIF offers superior compression to WebP and JPEG. Our tool lets you optimize these next-gen files directly in your browser, maintaining HDR quality at fraction of the size.</p>
      </section>

      <Compressor />

      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>Why Use AVIF?</h2>
        <p>AVIF (AV1 Image File Format) is currently the most efficient image format for the web. It provides significantly better compression than even WebP, allowing for smaller files at higher quality levels.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3>Superior Quality</h3>
            <p>AVIF supports 10-bit and 12-bit color, meaning smoother gradients and better preservation of detail in shadows and highlights compared to 8-bit formats like JPEG.</p>
          </div>
          <div>
            <h3>Better Compression</h3>
            <p>On average, AVIF can be 50% smaller than JPEG and 20% smaller than WebP for the same perceived visual quality.</p>
          </div>
          <div>
            <h3>Wide Support</h3>
            <p>AVIF is now supported by all major modern browsers, including Chrome, Firefox, Safari, and Edge, making it ready for production use today.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
