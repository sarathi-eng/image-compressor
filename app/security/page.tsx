import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Security & Privacy | CompressPro",
  description: "Learn how CompressPro protects your privacy by processing all files locally in your browser. No uploads, no server storage.",
};

export default function SecurityPage() {
  return (
    <main>
      <Header />
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Security & Privacy</h1>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc', marginBottom: '2rem' }}>
          At CompressPro, your privacy and data security are not just features—they are the foundation of our service. We use a unique architecture that sets us apart from traditional online compressors.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem' }}>Local Browser Processing</h2>
        <p style={{ lineHeight: '1.8', color: '#aaa' }}>
          Unlike most online tools that require you to upload your files to their servers for processing, CompressPro handles everything <strong>locally in your browser</strong>.
          When you select a file, it remains on your device. Our optimization algorithms run within your browser's environment (using WebAssembly and JavaScript).
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem' }}>No Data Collection</h2>
        <p style={{ lineHeight: '1.8', color: '#aaa' }}>
          Because your files never leave your computer, we cannot—and do not—access, read, or store your data. This means:
        </p>
        <ul style={{ color: '#aaa', lineHeight: '1.8', marginTop: '1rem' }}>
          <li>No risk of data breaches on our end.</li>
          <li>Your sensitive documents and private photos remain private.</li>
          <li>Fast processing as there is no upload or download time (other than the initial app load).</li>
        </ul>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem' }}>GDPR & CCPA Compliance</h2>
        <p style={{ lineHeight: '1.8', color: '#aaa' }}>
          Since we do not collect personal data or store user files, CompressPro is inherently compliant with major privacy regulations like GDPR and CCPA. We don't use tracking cookies to build user profiles or sell your information to third parties.
        </p>

        <div style={{ marginTop: '4rem', padding: '2rem', background: '#0070f311', borderRadius: '12px', border: '1px solid #0070f3' }}>
          <h3 style={{ margin: 0, color: '#0070f3' }}>The Bottom Line</h3>
          <p style={{ margin: '1rem 0 0 0', color: '#fff' }}>
            You can use CompressPro with total confidence, knowing that your files and your privacy are always protected.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
