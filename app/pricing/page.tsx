import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Pricing | CompressPro - 100% Free Forever",
  description: "CompressPro is a completely free tool suite for all your file compression needs. No subscriptions, no hidden fees.",
};

export default function PricingPage() {
  return (
    <main>
      <Header />
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Simple, Transparent Pricing</h1>
        <p style={{ fontSize: '1.25rem', color: '#888', marginBottom: '4rem' }}>
          Our mission is to make the web faster for everyone.
        </p>

        <div style={{
          background: '#111',
          padding: '3rem',
          borderRadius: '24px',
          border: '2px solid #0070f3',
          boxShadow: '0 0 30px rgba(0, 112, 243, 0.2)'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Free Forever</h2>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            $0 <span style={{ fontSize: '1.2rem', color: '#666', fontWeight: 'normal' }}>/ month</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '3rem' }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#00ff00' }}>✓</span> Unlimited compressions
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#00ff00' }}>✓</span> All file formats included
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#00ff00' }}>✓</span> No registration required
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#00ff00' }}>✓</span> 100% Secure & Private
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#00ff00' }}>✓</span> Batch processing support
            </li>
          </ul>
          <Link href="/" className="button" style={{ display: 'block', width: '100%' }}>
            Get Started Now
          </Link>
        </div>

        <p style={{ marginTop: '4rem', color: '#666' }}>
          CompressPro is part of the <a href="https://alfo.online" style={{ color: '#0070f3' }}>alfo.online</a> ecosystem of free digital tools.
        </p>
      </section>
      <Footer />
    </main>
  );
}
