export const metadata = {
  title: "Privacy Policy | CompressPro",
  description: "Read the Privacy Policy of CompressPro to understand how we protect your data and privacy.",
};

export default function PrivacyPage() {
  return (
    <main style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Privacy Policy</h1>
      <p style={{ color: '#888', marginBottom: '2rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

      <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p>
          At CompressPro, we take your privacy seriously. This Privacy Policy outlines the types of information
          we collect, how we use it, and the measures we take to protect your data.
        </p>

        <h2 style={{ marginTop: '2.5rem' }}>1. Image Processing & Data Storage</h2>
        <p>
          CompressPro is designed to be a privacy-first application. The majority of image compression occurs locally
          within your web browser. For operations requiring server-side processing, images are processed securely
          in memory and are <strong>never stored persistently</strong> on our servers. Once the compression is complete,
          the data is immediately discarded.
        </p>

        <h2 style={{ marginTop: '2.5rem' }}>2. Information Collection</h2>
        <p>
          We collect standard anonymous analytics data (such as browser type, operating system, and pages visited)
          to help us improve our service. We do not collect personally identifiable information unless you explicitly
          provide it to us (e.g., via a contact form).
        </p>

        <h2 style={{ marginTop: '2.5rem' }}>3. Cookies</h2>
        <p>
          We use strictly necessary cookies to ensure the basic functionality of the website. We may also use
          third-party analytics cookies to understand how users interact with our tool, which helps us make improvements.
        </p>

        <h2 style={{ marginTop: '2.5rem' }}>4. Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </div>
    </main>
  );
}
