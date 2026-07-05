import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { blogPosts } from "../../lib/blog-data";

export const metadata = {
  title: "Security & Privacy | CompressPro",
  description: "Learn how our client-side processing keeps your files 100% secure and private.",
};

export default function SecurityPage() {
  const securityPost = blogPosts.find(p => p.slug === 'security-and-privacy-guide');

  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Security & Privacy</h1>

        <section style={{ margin: '3rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2rem', background: '#111', borderRadius: '12px', border: '1px solid #333' }}>
            <h3 style={{ color: '#0070f3' }}>100% Client-Side</h3>
            <p style={{ color: '#aaa' }}>Your files never leave your computer. Processing happens entirely in your browser.</p>
          </div>
          <div style={{ padding: '2rem', background: '#111', borderRadius: '12px', border: '1px solid #333' }}>
            <h3 style={{ color: '#0070f3' }}>No Data Collection</h3>
            <p style={{ color: '#aaa' }}>We don't require accounts and we don't store your original or compressed images.</p>
          </div>
          <div style={{ padding: '2rem', background: '#111', borderRadius: '12px', border: '1px solid #333' }}>
            <h3 style={{ color: '#0070f3' }}>Secure Environment</h3>
            <p style={{ color: '#aaa' }}>Leverages the built-in security features of modern web browsers like Chrome and Safari.</p>
          </div>
        </section>

        {securityPost && (
          <div
            className="blog-content"
            style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}
            dangerouslySetInnerHTML={{ __html: securityPost.content }}
          />
        )}

        <div style={{ marginTop: '4rem' }}>
          <h2>Security FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            {securityPost?.faqs?.map((faq, index) => (
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
