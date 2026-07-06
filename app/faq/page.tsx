import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Frequently Asked Questions | CompressPro",
  description: "Find answers to common questions about file compression, privacy, and how to use CompressPro tools.",
};

const faqs = [
  {
    question: "Is CompressPro free to use?",
    answer: "Yes, CompressPro is 100% free. You can compress as many files as you want without any registration or hidden fees."
  },
  {
    question: "Are my files safe?",
    answer: "Absolutely. CompressPro processes all files locally in your browser. Your files are never uploaded to our servers, ensuring maximum privacy and security."
  },
  {
    question: "What file formats do you support?",
    answer: "We support a wide range of formats including JPG, PNG, WebP, AVIF, MP4, MOV, PDF, and more. We are constantly adding support for new formats."
  },
  {
    question: "Does compression reduce image quality?",
    answer: "Our 'lossy' compression reduces file size by removing data that is invisible to the human eye, resulting in a significantly smaller file with minimal quality loss. We also offer 'lossless' options where quality is perfectly preserved."
  },
  {
    question: "Do I need to install any software?",
    answer: "No, CompressPro works entirely in your web browser. There is no software to download or install."
  }
];

export default function FAQPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
        <p style={{ color: '#aaa', fontSize: '1.2rem', marginBottom: '3rem' }}>
          Everything you need to know about CompressPro and how it works.
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ background: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #333' }}>
              <h2 style={{ fontSize: '1.5rem', marginTop: 0, color: '#fff', marginBottom: '1rem' }}>{faq.question}</h2>
              <p style={{ margin: 0, color: '#ccc', lineHeight: '1.6', fontSize: '1.1rem' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
