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
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Image Optimization Blog</h1>
        <p style={{ color: '#888', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Expert advice, tutorials, and insights into making the web faster, one image at a time.
        </p>

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
