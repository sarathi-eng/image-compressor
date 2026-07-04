import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Frequently Asked Questions | CompressPro",
  description: "Find answers to common questions about CompressPro, file compression, privacy, and more.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Is CompressPro free to use?",
      answer: "Yes, CompressPro is 100% free. There are no hidden fees, subscriptions, or watermarks. We believe in providing high-quality utility tools accessible to everyone."
    },
    {
      question: "Are my files secure?",
      answer: "Absolutely. CompressPro is built with a privacy-first approach. Most processing happens locally in your browser. For server-side tasks, files are processed in memory and immediately deleted. We never store your original or compressed files."
    },
    {
      question: "What file formats do you support?",
      answer: "We currently support high-performance compression for JPEG, PNG, WebP, and AVIF. We are constantly expanding our toolset to include video, audio, and document formats."
    },
    {
      question: "Is there a limit on file size or number of files?",
      answer: "CompressPro supports batch processing, allowing you to upload multiple files at once. While there are generous limits for stability, most users can process their daily workloads without any issues."
    },
    {
      question: "Does compression affect image quality?",
      answer: "Compression involves a trade-off between file size and quality. However, our 'Balanced' setting uses advanced algorithms to reduce file size by up to 80% with virtually no perceptible loss in quality."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
        <p style={{ color: '#888', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Everything you need to know about CompressPro and file optimization.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 style={{ fontSize: '1.5rem', color: '#0070f3', marginBottom: '0.75rem' }}>{faq.question}</h3>
              <p style={{ lineHeight: '1.7', color: '#ccc', fontSize: '1.1rem' }}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <section style={{ marginTop: '5rem', padding: '3rem', background: '#111', borderRadius: '16px', border: '1px solid #333', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Still have questions?</h2>
          <p style={{ color: '#aaa', marginBottom: '2rem' }}>We are here to help you optimize your digital workflow.</p>
          <a href="/contact" className="button">Contact Support</a>
        </section>
      </div>
      <Footer />
    </main>
  );
}
