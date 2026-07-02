import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Frequently Asked Questions | CompressPro",
  description: "Get answers to common questions about CompressPro, image compression, and how to use our tools effectively.",
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is CompressPro free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CompressPro is 100% free for everyone. You can compress as many files as you need without any hidden costs, subscriptions, or watermarks."
        }
      },
      {
        "@type": "Question",
        "name": "How does local browser processing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most of our compression tools use modern browser technologies like WebAssembly to process your files directly on your computer. This means your data never leaves your device, providing maximum privacy and speed."
        }
      },
      {
        "@type": "Question",
        "name": "Which file formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support a wide range of formats including JPG, PNG, WebP, AVIF, SVG, and GIF for images. We also provide tools for PDF, Video (MP4, MOV, WebM), and Document (Word, Excel, PowerPoint) compression."
        }
      },
      {
        "@type": "Question",
        "name": "Does compression reduce image quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tools use advanced lossy and lossless algorithms to find the perfect balance between file size and quality. You can adjust the quality slider to your preference, but our 'Balanced' setting typically reduces size by 60-80% with no perceptible quality loss."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a file size limit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We currently support files up to 50MB for most tools. For larger files, we recommend processing them in smaller batches or using our desktop-optimized workflows."
        }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Frequently Asked Questions</h1>

        <div className="faq-list">
          {faqSchema.mainEntity.map((item, index) => (
            <div key={index} style={{ marginBottom: '2rem', padding: '1.5rem', background: '#111', borderRadius: '12px', border: '1px solid #333' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0070f3' }}>{item.name}</h2>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
