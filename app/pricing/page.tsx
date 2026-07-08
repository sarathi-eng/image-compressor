import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Pricing | CompressPro - 100% Free Forever",
  description: "CompressPro is a free utility tool. No subscriptions, no registration, no hidden fees. Just fast file optimization.",
};

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CompressPro",
    "description": "Professional-grade image, video, and audio compression tool available for free.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <Header />
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Simple Pricing</h1>
        <p style={{ fontSize: '1.3rem', color: '#888', marginBottom: '4rem' }}>
          We believe in a faster web for everyone. That is why CompressPro is free.
        </p>

        <div style={{ background: '#111', padding: '3rem', borderRadius: '24px', border: '2px solid #0070f3' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Free Forever</h2>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '2rem' }}>$0 <span style={{ fontSize: '1.2rem', color: '#666' }}>/ month</span></div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', textAlign: 'left', display: 'inline-block' }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#0070f3', marginRight: '0.5rem' }}>✓</span> Unlimited compressions
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#0070f3', marginRight: '0.5rem' }}>✓</span> No registration required
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#0070f3', marginRight: '0.5rem' }}>✓</span> 100% Private (local processing)
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#0070f3', marginRight: '0.5rem' }}>✓</span> No file size limits (browser dependent)
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#0070f3', marginRight: '0.5rem' }}>✓</span> High-quality optimization
            </li>
          </ul>

          <div style={{ display: 'block' }}>
            <Link href="/" className="button" style={{ display: 'block', width: '100%', padding: '1rem', fontSize: '1.2rem' }}>
              Start Using CompressPro
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
