import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Security & Privacy | CompressPro",
  description: "Learn how CompressPro ensures your data security through privacy-first, local browser processing.",
};

export default function SecurityPage() {
  return (
    <main>
      <Header />
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Security & Privacy First</h1>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc', marginBottom: '3rem' }}>
          At CompressPro, we believe that your data should remain yours. Security isn't an afterthought—it's the foundation of how we build our tools.
        </p>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#0070f3' }}>Local Browser Processing</h2>
          <p style={{ lineHeight: '1.8', color: '#aaa' }}>
            The majority of our tools utilize modern technologies like WebAssembly (Wasm) to perform complex compression tasks directly inside your web browser.
            <strong> Your files never leave your computer.</strong> This architectural choice eliminates the risk of data intercepts during transit and ensures that your sensitive documents remain private.
          </p>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#0070f3' }}>No Persistent Storage</h2>
          <p style={{ lineHeight: '1.8', color: '#aaa' }}>
            For specific tasks that require server-side assistance, we process files in-memory and delete them immediately after the task is completed. We do not store, view, or share any of the files you process through our platform.
          </p>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#0070f3' }}>Secure Connections</h2>
          <p style={{ lineHeight: '1.8', color: '#aaa' }}>
            All traffic between your device and our website is encrypted using industry-standard SSL/TLS (HTTPS). This ensures that even the minimal metadata exchanged is protected from eavesdropping.
          </p>
        </div>

        <div style={{ padding: '2rem', background: '#111', borderRadius: '12px', border: '1px solid #333' }}>
          <h3 style={{ marginBottom: '1rem' }}>Summary of Protection:</h3>
          <ul style={{ color: '#aaa', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Zero data collection of personal files</li>
            <li style={{ marginBottom: '0.5rem' }}>Client-side processing by default</li>
            <li style={{ marginBottom: '0.5rem' }}>No registration or PII required</li>
            <li style={{ marginBottom: '0.5rem' }}>Compliant with modern privacy standards</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
