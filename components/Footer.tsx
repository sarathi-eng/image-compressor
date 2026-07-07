import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ padding: '2rem', textAlign: 'center', marginTop: '4rem', borderTop: '1px solid #333' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Link href="/about" style={{ color: '#888', textDecoration: 'none' }}>About</Link>
        <Link href="/contact" style={{ color: '#888', textDecoration: 'none' }}>Contact</Link>
        <Link href="/blog" style={{ color: '#888', textDecoration: 'none' }}>Blog</Link>
        <Link href="/faq" style={{ color: '#888', textDecoration: 'none' }}>FAQ</Link>
        <Link href="/pricing" style={{ color: '#888', textDecoration: 'none' }}>Pricing</Link>
        <Link href="/security" style={{ color: '#888', textDecoration: 'none' }}>Security</Link>
        <Link href="/privacy" style={{ color: '#888', textDecoration: 'none' }}>Privacy Policy</Link>
        <Link href="/terms" style={{ color: '#888', textDecoration: 'none' }}>Terms of Service</Link>
      </div>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
        <Link href="/compress-png" style={{ color: '#666', textDecoration: 'none' }}>Compress PNG</Link>
        <Link href="/compress-jpeg" style={{ color: '#666', textDecoration: 'none' }}>Compress JPEG</Link>
        <Link href="/compress-webp" style={{ color: '#666', textDecoration: 'none' }}>Compress WebP</Link>
      </div>
      <p style={{ color: '#666', margin: 0 }}>© {new Date().getFullYear()} CompressPro. All rights reserved.</p>
    </footer>
  );
}
