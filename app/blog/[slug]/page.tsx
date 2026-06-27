import { blogPosts } from '../../../lib/blog-data';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | CompressPro Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Header />
      <article style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <Link href="/blog" style={{ color: '#0070f3', textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>
          ← Back to Blog
        </Link>
        <header style={{ marginBottom: '3rem' }}>
          <span style={{ color: '#0070f3', fontWeight: 'bold', textTransform: 'uppercase' }}>{post.category}</span>
          <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>{post.title}</h1>
          <div style={{ color: '#666' }}>Published on {post.date}</div>
        </header>

        <div
          className="blog-content"
          style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <section style={{ marginTop: '4rem', padding: '2rem', background: '#111', borderRadius: '12px', border: '1px solid #333' }}>
          <h3>Need to compress images?</h3>
          <p>Try CompressPro, our free, fast, and secure online image compressor.</p>
          <Link href="/" className="button" style={{ display: 'inline-block', marginTop: '1rem' }}>
            Start Compressing Now
          </Link>
        </section>
      </article>
      <Footer />
    </main>
  );
}
