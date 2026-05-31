export const metadata = {
  title: "Terms of Service | CompressPro",
  description: "Terms of Service and usage conditions for the CompressPro image optimization tool.",
};

export default function TermsPage() {
  return (
    <main style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Terms of Service</h1>
      <p style={{ color: '#888', marginBottom: '2rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

      <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p>
          By accessing and using CompressPro ("the Service"), you agree to be bound by these Terms of Service.
          If you do not agree with any part of these terms, you may not use our service.
        </p>

        <h2 style={{ marginTop: '2.5rem' }}>1. Use of Service</h2>
        <p>
          CompressPro provides a free online tool for compressing and optimizing image files. The Service is provided
          "as is" and "as available". We reserve the right to modify, suspend, or discontinue the Service at any time
          without notice.
        </p>

        <h2 style={{ marginTop: '2.5rem' }}>2. User Responsibilities</h2>
        <p>
          You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, or impairs
          the Service. You are solely responsible for the images you upload and ensure you have the right to process them.
        </p>

        <h2 style={{ marginTop: '2.5rem' }}>3. Intellectual Property</h2>
        <p>
          You retain all rights to the images you upload. We claim no ownership over your files. The CompressPro
          website, including its design, code, and text, is owned by CompressPro and is protected by intellectual property laws.
        </p>

        <h2 style={{ marginTop: '2.5rem' }}>4. Limitation of Liability</h2>
        <p>
          In no event shall CompressPro be liable for any indirect, incidental, special, consequential, or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the Service.
        </p>
      </div>
    </main>
  );
}
