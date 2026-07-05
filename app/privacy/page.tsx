import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | CompressPro",
  description: "Our commitment to your privacy. Learn how CompressPro handles your data in 2026.",
};

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Privacy Policy</h1>
        <p style={{ marginTop: '2rem' }}>Last Updated: July 5, 2026</p>

        <h2 style={{ marginTop: '3rem' }}>1. Privacy-First by Design</h2>
        <p>CompressPro is designed with privacy as its foundational principle. Unlike traditional online tools, our architecture ensures that your files remain under your control at all times.</p>

        <h2 style={{ marginTop: '2rem' }}>2. Local Client-Side Processing</h2>
        <p>All image compression and file optimization tasks are performed locally within your web browser using JavaScript and WebAssembly. Your files are <strong>never uploaded to our servers</strong>. This "zero-upload" policy is the strongest possible guarantee of your privacy.</p>

        <h2 style={{ marginTop: '2rem' }}>3. No Data Storage or Retention</h2>
        <p>Because processing is local, we do not have access to your files, and we do not store them on any persistent storage. Once you close your browser tab, all session data related to your files is permanently removed from your device's temporary memory.</p>

        <h2 style={{ marginTop: '2rem' }}>4. Personal Information</h2>
        <p>We do not require account registration, email addresses, or any personal information to use our tools. Your usage of CompressPro is entirely anonymous.</p>

        <h2 style={{ marginTop: '2rem' }}>5. Analytics and Cookies</h2>
        <p>We use basic, anonymized web analytics to understand site performance and improve our services. We do not use tracking cookies that follow you across the web or build individual user profiles.</p>

        <h2 style={{ marginTop: '2rem' }}>6. Third-Party Services</h2>
        <p>We may display non-intrusive advertisements to sustain our service. These third-party partners may use cookies to serve relevant ads, subject to their own privacy policies.</p>

        <h2 style={{ marginTop: '2rem' }}>7. Contact</h2>
        <p>If you have questions about our privacy practices, please contact us through our website contact form.</p>
      </div>
      <Footer />
    </main>
  );
}
