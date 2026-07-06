import Link from 'next/link';
import { blogPosts } from '../../lib/blog-data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Blog | CompressPro - Image Optimization & SEO Tips",
  description: "Read our latest articles on image compression, web performance, and SEO optimization to make your website faster.",
};

export default function BlogIndex() {
  return (
    <main>
      <Header />
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Optimization Hub</h1>
        <p style={{ color: '#aaa', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '800px', lineHeight: '1.6' }}>
          Welcome to the CompressPro blog, your ultimate resource for file compression, web performance, and digital optimization. In 2026, page speed is more critical than ever. Our expert guides help you master the art of making the web faster without sacrificing quality.
        </p>

        <div style={{ background: '#0070f311', borderLeft: '4px solid #0070f3', padding: '2rem', marginBottom: '4rem', borderRadius: '0 12px 12px 0' }}>
          <h2 style={{ fontSize: '1.5rem', marginTop: 0, color: '#0070f3' }}>Why Optimization Matters</h2>
          <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6', color: '#ccc' }}>
            From improving SEO with better Core Web Vitals to enhancing mobile user experience by reducing data consumption, file optimization is a core pillar of modern web development. Explore our latest insights below.
          </p>
        </div>

        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Latest Articles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {blogPosts.map((post) => (
            <article key={post.slug} style={{ background: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #333', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#0070f3', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{post.category}</span>
              <h2 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0' }}>
                <Link href={`/blog/${post.slug}`} style={{ color: '#fff', textDecoration: 'none' }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{post.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>{post.date}</span>
                <Link href={`/blog/${post.slug}`} style={{ color: '#0070f3', fontWeight: 'bold', textDecoration: 'none' }}>
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
