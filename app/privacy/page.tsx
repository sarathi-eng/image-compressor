import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | CompressPro",
  description: "Our commitment to your privacy. Learn how CompressPro handles your data.",
};

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Privacy Policy</h1>
        <p style={{ marginTop: '2rem' }}>Last Updated: May 20, 2024</p>

        <h2 style={{ marginTop: '3rem' }}>1. Data Collection</h2>
        <p>CompressPro is designed with privacy as a core principle. Most of the image processing occurs directly within your web browser using local client-side technology.</p>

        <h2 style={{ marginTop: '2rem' }}>2. Image Storage</h2>
        <p>We do not store the images you upload for compression. Images processed on our servers are kept in temporary memory only for the duration of the compression task and are immediately deleted thereafter.</p>

        <h2 style={{ marginTop: '2rem' }}>3. Analytics</h2>
        <p>We use basic web analytics to understand how our site is used and to improve our service. This data is anonymized and does not include personally identifiable information.</p>
      </div>
      <Footer />
    </main>
  );
}
