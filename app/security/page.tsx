import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Security & Privacy | CompressPro",
  description: "Learn how CompressPro ensures your file security through local, browser-based processing.",
};

export default function SecurityPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Security & Privacy</h1>
        <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#888' }}>
          At CompressPro, we believe your data belongs to you. Our security architecture is designed to minimize risk by avoiding unnecessary data transfers.
        </p>

        <h2 style={{ marginTop: '3rem' }}>Local-First Processing</h2>
        <p>
          The majority of our compression tools operate entirely within your web browser. When you "upload" a file, it isn't actually sent to a remote server. Instead, your browser's own processing power is used to optimize the file locally. This means your files never leave your device.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Secure Memory-Only Server Tasks</h2>
        <p>
          For tasks that require more advanced processing power, we use secure, ephemeral server-side environments. Files are processed in volatile memory and are immediately purged after the task is complete. We do not maintain any persistent storage of your original or compressed files.
        </p>

        <h2 style={{ marginTop: '2rem' }}>No Registration Required</h2>
        <p>
          We do not require you to create an account or provide any personal information to use our tools. This further reduces the amount of data we collect and store about you.
        </p>

        <div style={{ background: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #0070f3', marginTop: '4rem' }}>
          <h3>Our Security Commitment</h3>
          <ul>
            <li>No permanent file storage.</li>
            <li>No user tracking or profiling.</li>
            <li>No third-party data sharing.</li>
            <li>Regular security audits of our codebase.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
