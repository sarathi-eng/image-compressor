import Compressor from "../../components/Compressor";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Compress JPEG Online | Optimize JPG Images - CompressPro",
  description: "Fast and efficient JPEG compression. Reduce JPG file size for faster web loading and better SEO. Free online tool with real-time preview.",
  keywords: "compress jpeg, jpg optimizer, reduce jpg size, online jpeg compressor, photo compression",
};

export default function CompressJPEGPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressPro JPEG Optimizer",
    "operatingSystem": "Web",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Professional-grade JPEG compression tool to reduce photo file sizes for the web."
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Header />

      <section className="hero animate-fade-up delay-1">
        <h1>Compress JPEG Online</h1>
        <p>Reduce the file size of your JPEG and JPG photos without losing visual quality. Our tool is optimized for photographers and web developers who need fast, reliable image optimization for better performance.</p>
      </section>

      <Compressor />

      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>The Benefits of JPEG Optimization</h2>
        <p>JPEGs are the most common image format on the web, but they can be incredibly heavy if not properly compressed. By optimizing your JPEGs, you can improve your site's Largest Contentful Paint (LCP) score, which is a key factor in Google's search rankings.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3>Adjustable Quality</h3>
            <p>Use our quality slider to find the perfect balance between file size and visual fidelity. Preview changes in real-time.</p>
          </div>
          <div>
            <h3>SEO Boost</h3>
            <p>Faster loading photos mean better search engine rankings and a better experience for your mobile users.</p>
          </div>
          <div>
            <h3>Free & No Watermarks</h3>
            <p>Compress as many JPEGs as you want for free. We never add watermarks to your optimized photos.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
