import Compressor from "../components/Compressor";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressPro",
    "operatingSystem": "Web",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Best free online image compressor to optimize JPEG, PNG, WEBP, and AVIF images. Fast, secure, and preserves quality."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What image formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CompressPro supports all major web image formats including JPG/JPEG, PNG, WEBP, and AVIF. Our algorithm automatically detects the format and applies the most efficient compression strategy."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure? Are my images uploaded to a server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, your data is 100% secure. Unlike many online tools, CompressPro relies on local browser processing capabilities when possible. For server-side tasks, images are processed securely in memory and never stored persistently on our servers."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I reduce my image size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "File size reduction varies depending on the original file and the chosen quality setting. On average, you can expect file size savings between 60% and 80% with our \"Balanced\" setting, while maintaining excellent visual quality."
        }
      },
      {
        "@type": "Question",
        "name": "Is this image compressor free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! CompressPro is a completely free tool. There are no hidden fees, subscriptions, or intrusive watermarks added to your optimized images."
        }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      <section className="hero animate-fade-up delay-1">
        <h1>Best Free Image Compressor: Optimize JPEG, PNG, WEBP & AVIF</h1>
        <p>Optimize your workflow with our advanced image compression tool. Instantly reduce image size while maintaining maximum quality, all directly in your browser. Perfect for SEO, faster load times, and saving bandwidth.</p>
        <a href="#compressor" className="button">
          Start Compressing Now
        </a>
      </section>

      <Compressor />

      <section className="how-to-use animate-fade-up delay-3" id="how-to-use" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>How to Compress Images Online</h2>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ color: '#0070f3' }}>1. Upload Your Files</h3>
            <p>Drag and drop your JPEG, PNG, WEBP, or AVIF images into the dropzone above, or click "Select Files" to choose them from your device. You can process multiple images simultaneously using our batch compressor.</p>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ color: '#0070f3' }}>2. Choose Compression Level</h3>
            <p>Use the quality slider to find the perfect balance between file size and visual quality. Choose "Max Compression" for the smallest file sizes, or "High Quality" if visual fidelity is your top priority.</p>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ color: '#0070f3' }}>3. Download Optimized Images</h3>
            <p>Click "Compress All" to process your files instantly. Once done, you can download individual files or get all your compressed images conveniently packed into a single ZIP file.</p>
          </div>
        </div>
      </section>

      <section className="features animate-fade-up delay-3" id="features">
        <div className="feature-card">
          <h3>⚡ Secure Local Processing</h3>
          <p>Unlike other tools, your images never leave your device. All processing happens locally in your browser ensuring 100% data privacy and lightning-fast speeds.</p>
        </div>
        <div className="feature-card">
          <h3>💎 Lossless & Lossy Compression</h3>
          <p>We use state-of-the-art compression algorithms tailored for each format to reduce file sizes dramatically without noticeable loss in visual quality.</p>
        </div>
        <div className="feature-card">
          <h3>📦 Bulk Image Optimization</h3>
          <p>Save time with our powerful batch processing capabilities. Drag and drop dozens of images at once, compress them simultaneously, and download as a convenient ZIP archive.</p>
        </div>
      </section>

      <section className="benefits animate-fade-up delay-4" id="benefits" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto', background: '#111', borderRadius: '12px' }}>
        <h2>Why Optimize Your Images?</h2>
        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <li>
            <strong>🚀 Boost Website Speed:</strong> Heavy images are the #1 cause of slow websites. Compressing them significantly reduces load times, improving User Experience (UX) and Core Web Vitals.
          </li>
          <li>
            <strong>📈 Improve SEO Rankings:</strong> Google actively penalizes slow-loading pages. Optimizing your images directly contributes to better mobile performance scores (LCP) and higher search engine rankings.
          </li>
          <li>
            <strong>💾 Save Storage & Bandwidth:</strong> Whether you are hosting a website, sending emails, or managing cloud storage, smaller file sizes mean lower costs and faster transfer speeds.
          </li>
        </ul>
      </section>

      <section className="faq animate-fade-up delay-4" id="faq" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item" style={{ marginTop: '2rem' }}>
          <h3>What image formats are supported?</h3>
          <p>CompressPro supports all major web image formats including JPG/JPEG, PNG, WEBP, and AVIF. Our algorithm automatically detects the format and applies the most efficient compression strategy.</p>
        </div>
        <div className="faq-item" style={{ marginTop: '1.5rem' }}>
          <h3>Is my data secure? Are my images uploaded to a server?</h3>
          <p>Yes, your data is 100% secure. Unlike many online tools, CompressPro relies on local browser processing capabilities when possible. For server-side tasks, images are processed securely in memory and never stored persistently on our servers.</p>
        </div>
        <div className="faq-item" style={{ marginTop: '1.5rem' }}>
          <h3>How much can I reduce my image size?</h3>
          <p>File size reduction varies depending on the original file and the chosen quality setting. On average, you can expect file size savings between 60% and 80% with our "Balanced" setting, while maintaining excellent visual quality.</p>
        </div>
        <div className="faq-item" style={{ marginTop: '1.5rem' }}>
          <h3>Is this image compressor free to use?</h3>
          <p>Yes! CompressPro is a completely free tool. There are no hidden fees, subscriptions, or intrusive watermarks added to your optimized images.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
