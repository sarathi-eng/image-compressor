import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Pricing | CompressPro - 100% Free Forever",
  description: "CompressPro is a free utility. Learn why we offer our tools for free and how we support the community.",
};

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Simple, Free Pricing</h1>
        <p style={{ color: '#888', marginBottom: '4rem', fontSize: '1.2rem' }}>
          No credit cards, no subscriptions, no hidden fees.
        </p>

        <div style={{ background: '#111', padding: '4rem', borderRadius: '24px', border: '2px solid #0070f3', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', right: '20px', background: '#0070f3', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>COMMUNITY EDITION</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>$0 <span style={{ fontSize: '1rem', color: '#666' }}>/ forever</span></h2>
          <p style={{ color: '#aaa', marginBottom: '2rem' }}>Full access to all compression tools.</p>

          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '300px', margin: '0 auto 3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✅ Unlimited Image Compression</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✅ Batch Processing</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✅ No Registration Required</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✅ Privacy-First (Local Processing)</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✅ No Watermarks</li>
          </ul>

          <a href="/" className="button" style={{ width: '100%', boxSizing: 'border-box' }}>Get Started Now</a>
        </div>

        <section style={{ marginTop: '5rem', textAlign: 'left' }}>
          <h2>Why is it free?</h2>
          <p style={{ color: '#ccc', lineHeight: '1.7', marginTop: '1.5rem' }}>
            CompressPro is part of the Alfo.online ecosystem—a suite of high-performance utilities designed to make the web better. We believe that basic tools for optimization and productivity should be accessible to everyone without barriers. We support our tools through the Alfo community and related ecosystem services.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
