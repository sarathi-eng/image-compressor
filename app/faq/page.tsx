import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { blogPosts } from "../../lib/blog-data";
import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions | CompressPro",
  description: "Common questions about CompressPro, image compression, and file security.",
};

export default function FAQPage() {
  const faqPost = blogPosts.find(p => p.slug === 'compresspro-faq');

  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Frequently Asked Questions</h1>

        {faqPost && (
          <div style={{ marginTop: '3rem' }}>
             <div
              className="blog-content"
              style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}
              dangerouslySetInnerHTML={{ __html: faqPost.content }}
            />

            <div style={{ marginTop: '4rem' }}>
              <h2>Common Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                {faqPost.faqs?.map((faq, index) => (
                  <div key={index} style={{ padding: '1.5rem', background: '#111', borderRadius: '8px', border: '1px solid #333' }}>
                    <h3 style={{ fontSize: '1.2rem', marginTop: 0, marginBottom: '0.5rem', color: '#fff' }}>{faq.question}</h3>
                    <p style={{ margin: 0, color: '#aaa' }}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <section style={{ marginTop: '4rem', padding: '2rem', background: '#0070f311', borderRadius: '12px', border: '1px solid #0070f333', textAlign: 'center' }}>
          <h3>Still have questions?</h3>
          <p>We're here to help you optimize your digital life.</p>
          <Link href="/contact" className="button" style={{ display: 'inline-block', marginTop: '1rem' }}>
            Contact Support
          </Link>
        </section>
      </div>
      <Footer />
      {faqPost?.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqPost.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </main>
  );
}
