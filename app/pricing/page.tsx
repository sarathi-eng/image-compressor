import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Pricing | CompressPro - 100% Free Forever",
  description: "CompressPro is a free utility. No subscriptions, no hidden costs, no registration required. Just fast, private compression.",
};

export default function PricingPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressPro",
    "operatingSystem": "Web Browser",
    "applicationCategory": "MultimediaApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Header />
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Simple, Transparent Pricing</h1>
        <p style={{ color: '#aaa', fontSize: '1.5rem', marginBottom: '4rem' }}>
          CompressPro is, and will always be, 100% free.
        </p>

        <div style={{ background: '#111', padding: '4rem', borderRadius: '24px', border: '2px solid #0070f3', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-1.5rem', left: '50%', transform: 'translateX(-50%)', background: '#0070f3', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '20px', fontWeight: 'bold' }}>
            MOST POPULAR (AND ONLY) PLAN
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Free Forever</h2>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '2rem' }}>$0 <span style={{ fontSize: '1.2rem', color: '#666', fontWeight: 'normal' }}>/ month</span></div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', textAlign: 'left', display: 'inline-block' }}>
            <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>✅ Unlimited file compressions</li>
            <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>✅ No registration or login required</li>
            <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>✅ Private, client-side processing</li>
            <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>✅ Support for images, video, and PDF</li>
            <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>✅ Batch processing included</li>
          </ul>

          <div style={{ display: 'block' }}>
            <Link href="/" className="button" style={{ display: 'inline-block', padding: '1rem 3rem', fontSize: '1.2rem' }}>
              Start Compressing Now
            </Link>
          </div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h3>Why is it free?</h3>
          <p style={{ color: '#ccc', lineHeight: '1.8', maxWidth: '600px', margin: '1rem auto' }}>
            CompressPro is part of the Alfo ecosystem, a suite of free tools designed to make the web better for everyone. We believe that basic productivity tools should be accessible to all without barriers.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
