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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "CompressPro"
    }
  };

  const faqSchema = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://compresspro.alfo.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://compresspro.alfo.online/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://compresspro.alfo.online/blog/${post.slug}`
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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

        {post.aeoAnswer && (
          <section style={{ marginBottom: '3rem', padding: '2rem', background: '#111', borderRadius: '12px', border: '1px solid #0070f3', borderLeftWidth: '6px' }}>
            <h2 style={{ fontSize: '1.2rem', color: '#0070f3', marginTop: 0, textTransform: 'uppercase' }}>Quick Answer</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#fff', margin: 0 }}>{post.aeoAnswer}</p>
          </section>
        )}

        <div
          className="blog-content"
          style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.faqs && (
          <section style={{ marginTop: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {post.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 style={{ color: '#0070f3', marginBottom: '0.5rem' }}>{faq.question}</h3>
                  <p style={{ color: '#aaa', lineHeight: '1.6' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section style={{ marginTop: '4rem', padding: '2rem', background: '#111', borderRadius: '12px', border: '1px solid #333' }}>
          <h3>Need to compress {post.category.toLowerCase().includes('pdf') ? 'PDFs' : post.category.toLowerCase().includes('document') ? 'documents' : 'images'}?</h3>
          <p>Try CompressPro, our free, fast, and secure online optimization tool.</p>
          <Link href="/" className="button" style={{ display: 'inline-block', marginTop: '1rem' }}>
            Start Optimizing Now
          </Link>
        </section>
      </article>
      <Footer />
    </main>
  );
}
