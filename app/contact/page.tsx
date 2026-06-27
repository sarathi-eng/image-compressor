import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact Us | CompressPro",
  description: "Have questions or feedback? Get in touch with the CompressPro team.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '2rem' }}>
          We value your feedback and are here to help with any questions you may have about CompressPro.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1.5rem' }}>
          Whether you've found a bug, have a feature request, or just want to say hi, feel free to reach out to us at:
        </p>
        <p style={{ fontSize: '1.5rem', color: '#0070f3', fontWeight: 'bold', marginTop: '1rem' }}>
          support@compresspro.alfo.online
        </p>
      </div>
      <Footer />
    </main>
  );
}
