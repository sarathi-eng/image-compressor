import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us | CompressPro",
  description: "Learn more about CompressPro, the best free online image compressor designed for speed, privacy, and efficiency.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>About CompressPro</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '2rem' }}>
          Welcome to CompressPro, the premier destination for fast, secure, and high-quality image optimization.
          Our mission is to empower creators, developers, and everyday users to make the web faster and more efficient
          without compromising on visual quality.
        </p>

        <h2 style={{ marginTop: '3rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Heavy images are the number one cause of slow-loading websites. We built CompressPro to solve this problem
          with an easy-to-use, browser-first tool. By optimizing images, we help improve user experience, boost SEO rankings,
          and reduce global bandwidth consumption.
        </p>

        <h2 style={{ marginTop: '3rem' }}>Why Choose Us?</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}><strong>Privacy First:</strong> Most image optimization happens directly in your browser. We don't store your images.</li>
          <li style={{ marginBottom: '1rem' }}><strong>Cutting-Edge Technology:</strong> We support the latest formats like WebP and AVIF to ensure maximum compression.</li>
          <li style={{ marginBottom: '1rem' }}><strong>Completely Free:</strong> No hidden fees, no subscriptions, and no watermarks.</li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}
