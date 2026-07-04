import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from 'next/link';

export const metadata = {
  title: "Pricing | CompressPro - 100% Free Image Optimization",
  description: "CompressPro is a free utility. Learn about our commitment to keeping image optimization accessible for everyone.",
};

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Simple Pricing</h1>
        <p style={{ fontSize: '1.3rem', color: '#888', marginBottom: '4rem' }}>
          No hidden fees. No subscriptions. Just free tools.
        </p>

        <div style={{
          background: '#111',
          border: '2px solid #0070f3',
          borderRadius: '24px',
          padding: '4rem 2rem',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#0070f3' }}>Forever Free</h2>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '1.5rem 0' }}>$0<span style={{ fontSize: '1rem', color: '#666' }}>/month</span></div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0', textAlign: 'left', fontSize: '1.1rem' }}>
            <li style={{ marginBottom: '1rem' }}>✓ Unlimited Image Compressions</li>
            <li style={{ marginBottom: '1rem' }}>✓ Batch Processing (Multi-file)</li>
            <li style={{ marginBottom: '1rem' }}>✓ High-Quality WebP & AVIF Support</li>
            <li style={{ marginBottom: '1rem' }}>✓ No Registration Required</li>
            <li style={{ marginBottom: '1rem' }}>✓ Privacy-First Local Processing</li>
            <li style={{ marginBottom: '1rem' }}>✓ No Watermarks</li>
          </ul>

          <Link href="/" className="button" style={{ display: 'block', width: '100%', boxSizing: 'border-box' }}>
            Start Using Now
          </Link>
        </div>

        <p style={{ marginTop: '4rem', color: '#666', lineHeight: '1.6' }}>
          CompressPro is part of the Alfo ecosystem, dedicated to providing high-quality, free web utilities.
          We believe that essential tools for making the web faster should be accessible to everyone.
        </p>
      </div>
      <Footer />
    </main>
  );
}
