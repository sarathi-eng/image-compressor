import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Pricing | CompressPro - 100% Free Forever",
  description: "CompressPro is a free utility. No subscriptions, no hidden costs, just fast file compression.",
};

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1>Pricing Plans</h1>
        <p style={{ fontSize: '1.2rem', color: '#888', marginTop: '1rem' }}>Simple, transparent, and always free.</p>

        <div style={{ marginTop: '4rem', padding: '3rem', border: '1px solid #0070f3', borderRadius: '16px', background: '#111' }}>
          <h2 style={{ fontSize: '2rem' }}>Free Plan</h2>
          <div style={{ fontSize: '3rem', fontWeight: 'bold', margin: '1.5rem 0' }}>$0<span style={{ fontSize: '1rem', color: '#666' }}>/forever</span></div>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
            <li style={{ marginBottom: '1rem' }}>✅ Unlimited Compressions</li>
            <li style={{ marginBottom: '1rem' }}>✅ Batch Processing</li>
            <li style={{ marginBottom: '1rem' }}>✅ No Registration Required</li>
            <li style={{ marginBottom: '1rem' }}>✅ Privacy-First Processing</li>
            <li style={{ marginBottom: '1rem' }}>✅ High Speed Optimization</li>
          </ul>
        </div>

        <p style={{ marginTop: '3rem', color: '#666' }}>
          CompressPro is part of the Alfo ecosystem, dedicated to providing free, high-quality tools for everyone.
        </p>
      </div>
      <Footer />
    </main>
  );
}
