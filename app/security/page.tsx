import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Security & Privacy | CompressPro - Privacy-First Compression",
  description: "Learn about the security measures and privacy-first architecture of CompressPro.",
};

export default function SecurityPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Security & Privacy</h1>
        <p style={{ color: '#888', marginBottom: '4rem', fontSize: '1.2rem' }}>
          Your data security is our highest priority.
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0070f3', marginBottom: '1.2rem' }}>1. Privacy-by-Design</h2>
          <p style={{ lineHeight: '1.8', color: '#ccc' }}>
            CompressPro is built on a "Privacy-by-Design" philosophy. We have engineered our tools to process files locally in your browser whenever possible. This means your sensitive images often never even leave your device.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0070f3', marginBottom: '1.2rem' }}>2. Secure Server-Side Processing</h2>
          <p style={{ lineHeight: '1.8', color: '#ccc' }}>
            For tasks that require server-side power, we use secure, ephemeral environments. Files are kept in volatile memory only for the duration of the compression process.
          </p>
          <ul style={{ color: '#aaa', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>• No persistent storage of your files.</li>
            <li>• Automatic deletion immediately after the task is complete.</li>
            <li>• Encrypted data transmission (HTTPS/TLS).</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0070f3', marginBottom: '1.2rem' }}>3. No Registration, No Tracking</h2>
          <p style={{ lineHeight: '1.8', color: '#ccc' }}>
            We do not require user accounts. We don't collect names, emails, or personal data. Our analytics are anonymized and focused on service performance, not individual user behavior.
          </p>
        </section>

        <section style={{ padding: '2rem', background: '#111', borderRadius: '12px', border: '1px solid #333' }}>
          <h3 style={{ margin: 0 }}>Compliance</h3>
          <p style={{ color: '#888', marginTop: '1rem', marginBottom: 0 }}>
            Our architecture is designed to exceed standard privacy regulations (GDPR, CCPA) by simply not collecting the data they protect.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
