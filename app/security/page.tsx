import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Security & Privacy | CompressPro - Privacy-First Image Optimization",
  description: "Learn how CompressPro ensures your data security through client-side processing and strict privacy standards.",
};

export default function SecurityPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Security & Privacy</h1>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc', marginBottom: '3rem' }}>
          At CompressPro, we treat your data with the highest level of security. Our "Privacy-First" architecture
          ensures that your files remain under your control throughout the optimization process.
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0070f3', marginBottom: '1rem' }}>Local Client-Side Processing</h2>
          <p style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
            Unlike traditional online compressors that require you to upload files to a remote server,
            CompressPro leverages modern web technologies (like WebAssembly and Canvas) to process most
            image optimization tasks directly within your browser.
            <strong> Your images never leave your computer.</strong>
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0070f3', marginBottom: '1rem' }}>In-Memory Server Processing</h2>
          <p style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
            For specific advanced formats that require server-side computation, images are processed
            entirely in volatile memory. We do not store, log, or cache your original or optimized
            images on any persistent storage. Once the compression task is complete and you have
            downloaded your file, the data is wiped from our memory.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0070f3', marginBottom: '1rem' }}>No Account Required</h2>
          <p style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
            We do not ask for your name, email address, or any personal information. You can use
            our full suite of tools anonymously, preventing any link between your identity and the
            files you optimize.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0070f3', marginBottom: '1rem' }}>Encryption & SSL</h2>
          <p style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
            All communication between your browser and our servers is protected by industry-standard
            SSL/TLS encryption, ensuring that no third party can intercept your data during transit.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
