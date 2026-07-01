import Link from 'next/link';

export default function Header() {
  return (
    <header className="header animate-fade-up">
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2 style={{ margin: 0 }}>CompressPro</h2>
      </Link>
      <nav className="nav-links">
        <Link href="/#features" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Features</Link>
        <Link href="/#compressor" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Tool</Link>
        <Link href="/blog" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Blog</Link>
        <Link href="/faq" style={{ color: '#e6e6e6', textDecoration: 'none' }}>FAQ</Link>
      </nav>
    </header>
  );
}
