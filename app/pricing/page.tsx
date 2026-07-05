import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { blogPosts } from "../../lib/blog-data";
import Link from "next/link";

export const metadata = {
  title: "Pricing | CompressPro - 100% Free Image Compression",
  description: "Learn about our free-to-use model and why we don't charge for image optimization.",
};

export default function PricingPage() {
  const pricingPost = blogPosts.find(p => p.slug === 'pricing-philosophy');

  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Pricing</h1>

        <div style={{ marginTop: '3rem', padding: '3rem', background: '#111', borderRadius: '16px', border: '1px solid #333', textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#0070f3' }}>Free Forever</h2>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '1.5rem 0' }}>$0</div>
          <p style={{ fontSize: '1.2rem', color: '#aaa' }}>No registration. No limits. No hidden fees.</p>
          <Link href="/" className="button" style={{ display: 'inline-block', marginTop: '2rem', width: '100%', maxWidth: '300px' }}>
            Start Using For Free
          </Link>
        </div>

        {pricingPost && (
          <div
            className="blog-content"
            style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}
            dangerouslySetInnerHTML={{ __html: pricingPost.content }}
          />
        )}

        <div style={{ marginTop: '4rem' }}>
          <h2>Pricing FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            {pricingPost?.faqs?.map((faq, index) => (
              <div key={index} style={{ padding: '1.5rem', background: '#0a0a0a', borderRadius: '8px', border: '1px solid #222' }}>
                <h3 style={{ fontSize: '1.1rem', marginTop: 0, marginBottom: '0.5rem', color: '#fff' }}>{faq.question}</h3>
                <p style={{ margin: 0, color: '#aaa' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
