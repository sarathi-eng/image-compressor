import Link from 'next/link';

export default function Header() {
  return (
    <header className="header animate-fade-up">
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2 style={{ margin: 0 }}>CompressPro</h2>
      </Link>
      <nav className="nav-links">
        <Link href="/#compressor" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Tool</Link>
        <Link href="/#features" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Features</Link>
        <Link href="/pricing" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Pricing</Link>
        <Link href="/faq" style={{ color: '#e6e6e6', textDecoration: 'none' }}>FAQ</Link>
        <Link href="/blog" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Blog</Link>
      </nav>
    </header>
  );
}
