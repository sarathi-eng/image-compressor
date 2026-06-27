import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms of Service | CompressPro",
  description: "The terms and conditions for using CompressPro.",
};

export default function TermsPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Terms of Service</h1>
        <p style={{ marginTop: '2rem' }}>Last Updated: May 20, 2024</p>

        <h2 style={{ marginTop: '3rem' }}>1. Acceptance of Terms</h2>
        <p>By using CompressPro, you agree to be bound by these Terms of Service. If you do not agree, please do not use our service.</p>

        <h2 style={{ marginTop: '2rem' }}>2. Use of Service</h2>
        <p>CompressPro provides image optimization tools for personal and professional use. You agree not to use the service for any illegal or unauthorized purpose.</p>

        <h2 style={{ marginTop: '2rem' }}>3. Disclaimer of Warranties</h2>
        <p>The service is provided "as is" without any warranties. We do not guarantee that the service will be uninterrupted or error-free.</p>
      </div>
      <Footer />
    </main>
  );
}
