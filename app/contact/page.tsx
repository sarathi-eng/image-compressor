export const metadata = {
  title: "Contact Us | CompressPro",
  description: "Get in touch with the CompressPro team for support, business inquiries, or feedback.",
};

export default function ContactPage() {
  return (
    <main style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Contact Us</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '2rem' }}>
        We would love to hear from you! Whether you have a question about our image compressor, need technical support,
        or just want to share your feedback, our team is ready to help.
      </p>

      <div style={{ marginTop: '3rem', background: '#111', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ marginTop: 0 }}>Get in Touch</h2>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
          <strong>Email Support:</strong><br />
          <a href="mailto:support@compresspro.app" style={{ color: '#0070f3', textDecoration: 'none' }}>support@compresspro.app</a>
        </p>
        <p style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
          <strong>Business Inquiries:</strong><br />
          <a href="mailto:business@compresspro.app" style={{ color: '#0070f3', textDecoration: 'none' }}>business@compresspro.app</a>
        </p>
        <p style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
          <strong>Response Time:</strong><br />
          We aim to respond to all inquiries within 24-48 business hours.
        </p>
      </div>
    </main>
  );
}
