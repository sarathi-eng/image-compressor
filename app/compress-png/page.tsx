import Compressor from "../../components/Compressor";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Compress PNG Online | Best Free PNG Optimizer - CompressPro",
  description: "High-quality PNG compression. Reduce PNG file size while maintaining transparency and visual quality. Fast, secure, and free to use.",
  keywords: "compress png, png optimizer, reduce png size, online png compressor",
};

export default function CompressPNGPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressPro PNG Optimizer",
    "operatingSystem": "Web",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Best free online PNG compressor to optimize your graphics while maintaining transparency."
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Header />

      <section className="hero animate-fade-up delay-1">
        <h1>Compress PNG Online</h1>
        <p>Optimize your PNG images with our advanced compression algorithm. Maintain perfect transparency and crisp edges while significantly reducing file size. Perfect for logos, icons, and web graphics.</p>
      </section>

      <Compressor />

      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>Why Compress PNGs?</h2>
        <p>PNG is a lossless format, which means it often results in very large file sizes. Large PNGs can slow down your website and consume more bandwidth. Our tool uses intelligent compression to strip unnecessary metadata and optimize color palettes, making your PNGs up to 80% smaller without any visible loss in quality.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3>Maintain Transparency</h3>
            <p>Our compressor is designed to handle alpha channels perfectly, ensuring your transparent backgrounds stay transparent.</p>
          </div>
          <div>
            <h3>Batch Processing</h3>
            <p>Upload multiple PNG files at once and compress them in seconds. Download all your optimized files as a single ZIP.</p>
          </div>
          <div>
            <h3>Secure & Private</h3>
            <p>Your images are processed locally in your browser. They are never uploaded to our servers, keeping your data 100% private.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
