import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Frequently Asked Questions | CompressPro",
  description: "Find answers to common questions about image, video, audio, and document compression on CompressPro.",
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is CompressPro really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CompressPro is 100% free to use. There are no subscriptions, no hidden fees, and no watermarks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you store my files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Most processing happens locally in your browser. For any server-side tasks, files are processed in memory and immediately deleted."
        }
      },
      {
        "@type": "Question",
        "name": "What file types can I compress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support JPEG, PNG, WebP, AVIF for images, and we are expanding to support MP4, MP3, and PDF files."
        }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Frequently Asked Questions</h1>

        <div style={{ marginTop: '3rem' }}>
          <h3>Is CompressPro really free?</h3>
          <p>Yes, CompressPro is 100% free to use. There are no subscriptions, no hidden fees, and no watermarks.</p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>Do you store my files?</h3>
          <p>No. Most processing happens locally in your browser. For any server-side tasks, files are processed in memory and immediately deleted. Your privacy is our priority.</p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>What file types can I compress?</h3>
          <p>We support all major image formats (JPEG, PNG, WebP, AVIF). Support for video (MP4), audio (MP3), and documents (PDF) is being rolled out in 2026.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
