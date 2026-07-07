import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Frequently Asked Questions | CompressPro",
  description: "Find answers to common questions about file compression, security, and how to use CompressPro effectively.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Is CompressPro free to use?",
      answer: "Yes, CompressPro is 100% free. You can compress as many files as you want without any registration or hidden costs."
    },
    {
      question: "Are my files safe?",
      answer: "Absolutely. CompressPro uses client-side processing, meaning your files are optimized directly in your browser and never uploaded to our servers. Your privacy is our priority."
    },
    {
      question: "What file formats do you support?",
      answer: "We currently support JPG, PNG, and WebP for image compression. We are constantly working to add support for more formats like PDF, SVG, and video files."
    },
    {
      question: "Is there a limit on file size?",
      answer: "Since processing happens in your browser, the limit depends on your device's memory. Generally, files up to 50MB should process without any issues."
    },
    {
      question: "Does compression reduce image quality?",
      answer: "Our intelligent compression algorithms are designed to reduce file size significantly while maintaining high visual quality. In most cases, the difference is imperceptible to the human eye."
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
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Frequently Asked Questions</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#fff' }}>{faq.question}</h2>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '1.1rem' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
