import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "FAQ | CompressPro - Frequently Asked Questions",
  description: "Find answers to common questions about image compression, file formats, and how to use CompressPro effectively.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What image formats are supported?",
      answer: "CompressPro supports all major web image formats including JPG/JPEG, PNG, WEBP, and AVIF. Our algorithm automatically detects the format and applies the most efficient compression strategy."
    },
    {
      question: "Is my data secure? Are my images uploaded to a server?",
      answer: "Yes, your data is 100% secure. Unlike many online tools, CompressPro relies on local browser processing capabilities when possible. For server-side tasks, images are processed securely in memory and never stored persistently on our servers."
    },
    {
      question: "How much can I reduce my image size?",
      answer: "File size reduction varies depending on the original file and the chosen quality setting. On average, you can expect file size savings between 60% and 80% with our \"Balanced\" setting, while maintaining excellent visual quality."
    },
    {
      question: "Is this image compressor free to use?",
      answer: "Yes! CompressPro is a completely free tool. There are no hidden fees, subscriptions, or intrusive watermarks added to your optimized images."
    },
    {
      question: "What is the difference between Lossy and Lossless compression?",
      answer: "Lossy compression reduces file size by permanently removing some data, which may slightly impact quality but results in much smaller files. Lossless compression reduces file size without losing any data, so the quality remains identical to the original, but the size reduction is usually smaller."
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
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Frequently Asked Questions</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ borderBottom: '1px solid #333', paddingBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#0070f3', marginBottom: '0.8rem' }}>{faq.question}</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#ccc' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
