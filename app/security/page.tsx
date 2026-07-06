import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Security & Privacy | CompressPro",
  description: "Learn how CompressPro protects your privacy by processing all files locally in your browser. Your files never leave your device.",
};

export default function SecurityPage() {
  return (
    <main>
      <Header />
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Security & Privacy</h1>

        <div style={{ background: '#0070f311', borderLeft: '4px solid #0070f3', padding: '2rem', marginBottom: '3rem', borderRadius: '0 12px 12px 0' }}>
          <h2 style={{ fontSize: '1.5rem', marginTop: 0, color: '#0070f3' }}>Our Core Principle: Client-Side Processing</h2>
          <p style={{ margin: 0, fontSize: '1.2rem', lineHeight: '1.6' }}>
            Unlike other online compressors, CompressPro does <strong>not</strong> upload your files to any server. All processing happens locally on your computer using modern web technologies.
          </p>
        </div>

        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>How We Protect Your Data</h2>
        <div style={{ display: 'grid', gap: '2.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>No File Uploads</h3>
            <p style={{ color: '#ccc', lineHeight: '1.8' }}>
              When you "upload" a file to CompressPro, it's actually just being loaded into your browser's memory. The compression algorithms run within your browser's sandbox. Your private data remains on your machine.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>No Registration Required</h3>
            <p style={{ color: '#ccc', lineHeight: '1.8' }}>
              We don't ask for your name, email, or any personal information. You can use all our tools anonymously. We don't track who you are or what files you are compressing.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>No Storage</h3>
            <p style={{ color: '#ccc', lineHeight: '1.8' }}>
              Since we don't upload files, we have nothing to store. Once you close the tab, all traces of the files you processed are wiped from your browser's temporary memory.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>HTTPS Encryption</h3>
            <p style={{ color: '#ccc', lineHeight: '1.8' }}>
              Even though processing is local, our entire site is served over an encrypted HTTPS connection, ensuring that your interaction with our tools is secure from middle-man attacks.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '4rem', padding: '2rem', background: '#111', borderRadius: '12px', border: '1px solid #333' }}>
          <h2 style={{ fontSize: '1.5rem', marginTop: 0 }}>Transparency First</h2>
          <p style={{ color: '#ccc', lineHeight: '1.8', margin: 0 }}>
            We believe in a private web. By using client-side technologies like WebAssembly and modern JavaScript APIs, we provide powerful file optimization tools without ever needing to see your content.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
