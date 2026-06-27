import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Compress PDF Online | Reduce PDF File Size - CompressPro",
  description: "Learn how to compress PDF files efficiently. Reduce document size for email and web while maintaining clarity. Recommended tools and best practices.",
  keywords: "compress pdf, reduce pdf size, pdf optimizer, online pdf compression",
};

export default function CompressPDFPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressPro PDF Guide",
    "operatingSystem": "Web",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Comprehensive guide and resources for compressing PDF documents without losing quality."
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Header />

      <section className="hero animate-fade-up delay-1">
        <h1>Compress PDF Online</h1>
        <p>Reduce the file size of your PDF documents quickly and easily. While CompressPro specializes in images, we've partnered with the best in the ecosystem to handle your document needs.</p>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ background: '#111', padding: '3rem', borderRadius: '16px', border: '1px solid #0070f3' }}>
          <h2>Need to Compress a PDF right now?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>We recommend using <strong>PDFutility</strong>, our specialized partner for all things PDF.</p>
          <a href="https://pdfutility.alfo.online" className="button" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
            Go to PDFutility.alfo.online
          </a>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>Why Compress PDF Files?</h2>
        <p>PDF files often contain high-resolution images and embedded fonts that aren't necessary for standard viewing, leading to bloated file sizes. Compressing your PDFs is essential for:</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3>Email Attachments</h3>
            <p>Most email providers have strict size limits (usually 20-25MB). Compression ensures your important documents always reach their destination.</p>
          </div>
          <div>
            <h3>Fast Web Loading</h3>
            <p>If you host PDFs on your website, smaller files mean faster downloads for your users and better SEO performance.</p>
          </div>
          <div>
            <h3>Saving Storage</h3>
            <p>Whether it's your local drive or cloud storage like Google Drive, smaller files mean you can store more without upgrading your plan.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto', background: '#0a0a0a' }}>
        <h2>Best Practices for PDF Optimization</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Select the right profile:</strong> Use 'Web' quality for screen viewing and 'Print' quality only when necessary.</li>
          <li><strong>Remove metadata:</strong> Hidden information about the document's creator and history can add extra kilobytes.</li>
          <li><strong>Flatten forms:</strong> If your PDF has interactive forms, flattening them can reduce size significantly.</li>
          <li><strong>Use modern tools:</strong> Specialized tools like <Link href="/blog/how-to-compress-pdf-without-losing-quality" style={{ color: '#0070f3' }}>PDFutility</Link> use advanced algorithms to strip unnecessary data.</li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
