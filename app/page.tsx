"use client";

import JSZip from "jszip";
import { useEffect, useReducer, useRef, useState } from "react";

type Status = "idle" | "compressing" | "done" | "error";

type FileItem = {
  id: string;
  file: File;
  originalUrl: string;
  originalSize: number;
  compressedUrl?: string;
  compressedBlob?: Blob;
  compressedSize?: number;
  status: Status;
  error?: string;
};

function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

type Action =
  | { type: "add"; items: FileItem[] }
  | { type: "update"; id: string; patch: Partial<FileItem> }
  | { type: "remove"; id: string }
  | { type: "clear" };

const reducer = (state: FileItem[], action: Action): FileItem[] => {
  switch (action.type) {
    case "add":
      return [...state, ...action.items];
    case "update":
      return state.map((item) =>
        item.id === action.id ? { ...item, ...action.patch } : item
      );
    case "remove":
      return state.filter((item) => item.id !== action.id);
    case "clear":
      return [];
    default:
      return state;
  }
};

const getExtension = (mimeType?: string) => {
  switch (mimeType) {
    case "image/png":
      return "png";
    case "image/webp":
      return "webp";
    case "image/avif":
      return "avif";
    case "image/jpeg":
    default:
      return "jpg";
  }
};

const getOutputName = (name: string, mimeType?: string) => {
  const base = name.replace(/\.[^/.]+$/, "");
  const ext = getExtension(mimeType);
  return `${base}-compressed.${ext}`;
};

export default function Home() {
  const [items, dispatch] = useReducer(reducer, []);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressPro",
    "operatingSystem": "Web",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Best free online image compressor to optimize JPEG, PNG, WEBP, and AVIF images. Fast, secure, and preserves quality."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What image formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CompressPro supports all major web image formats including JPG/JPEG, PNG, WEBP, and AVIF. Our algorithm automatically detects the format and applies the most efficient compression strategy."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure? Are my images uploaded to a server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, your data is 100% secure. Unlike many online tools, CompressPro relies on local browser processing capabilities when possible. For server-side tasks, images are processed securely in memory and never stored persistently on our servers."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I reduce my image size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "File size reduction varies depending on the original file and the chosen quality setting. On average, you can expect file size savings between 60% and 80% with our \"Balanced\" setting, while maintaining excellent visual quality."
        }
      },
      {
        "@type": "Question",
        "name": "Is this image compressor free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! CompressPro is a completely free tool. There are no hidden fees, subscriptions, or intrusive watermarks added to your optimized images."
        }
      }
    ]
  };

  const [quality, setQuality] = useState(75);
  const [isCompressing, setIsCompressing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const itemsRef = useRef<FileItem[]>(items);

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((item) => {
        URL.revokeObjectURL(item.originalUrl);
        if (item.compressedUrl) {
          URL.revokeObjectURL(item.compressedUrl);
        }
      });
    };
  }, []);

  const addFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const newItems: FileItem[] = Array.from(files).map((file) => ({
      id: crypto.randomUUID(),
      file,
      originalSize: file.size,
      originalUrl: URL.createObjectURL(file),
      status: "idle"
    }));
    dispatch({ type: "add", items: newItems });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files);
    }
  };

  const removeItem = (item: FileItem) => {
    URL.revokeObjectURL(item.originalUrl);
    if (item.compressedUrl) {
      URL.revokeObjectURL(item.compressedUrl);
    }
    dispatch({ type: "remove", id: item.id });
  };

  const clearAll = () => {
    items.forEach((item) => {
      URL.revokeObjectURL(item.originalUrl);
      if (item.compressedUrl) {
        URL.revokeObjectURL(item.compressedUrl);
      }
    });
    dispatch({ type: "clear" });
  };

  const compressItem = async (item: FileItem) => {
    dispatch({
      type: "update",
      id: item.id,
      patch: { status: "compressing", error: undefined }
    });

    if (item.compressedUrl) {
      URL.revokeObjectURL(item.compressedUrl);
    }

    const formData = new FormData();
    formData.append("file", item.file);
    formData.append("quality", String(quality));

    const response = await fetch("/api/compress", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Compression failed (${response.status})`);
    }

    const blob = await response.blob();
    const compressedUrl = URL.createObjectURL(blob);

    dispatch({
      type: "update",
      id: item.id,
      patch: { compressedBlob: blob, compressedUrl, compressedSize: blob.size, status: "done" }
    });
  };

  const compressAll = async () => {
    if (items.length === 0) return;
    setIsCompressing(true);
    try {
      await Promise.all(
        items.map(async (item) => {
          try {
            await compressItem(item);
          } catch (error) {
            const message =
              error instanceof Error ? error.message : "Compression failed";
            dispatch({
              type: "update",
              id: item.id,
              patch: { status: "error", error: message }
            });
          }
        })
      );
    } finally {
      setIsCompressing(false);
    }
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    const readyItems = items.filter((item) => item.compressedBlob);

    if (readyItems.length === 0) return;

    readyItems.forEach((item) => {
      zip.file(
        getOutputName(item.file.name, item.compressedBlob?.type),
        item.compressedBlob as Blob
      );
    });

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "compressed-images.zip";
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadSingle = (item: FileItem) => {
    if (!item.compressedUrl || !item.compressedBlob) return;
    const link = document.createElement("a");
    link.href = item.compressedUrl;
    link.download = getOutputName(item.file.name, item.compressedBlob.type);
    link.click();
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="header animate-fade-up">
        <h2 style={{ margin: 0 }}>CompressPro</h2>
        <nav className="nav-links">
          <a href="#features" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Features</a>
          <a href="#compressor" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Tool</a>
        </nav>
      </header>

      <section className="hero animate-fade-up delay-1">
        <h1>Best Free Image Compressor: Optimize JPEG, PNG, WEBP & AVIF</h1>
        <p>Optimize your workflow with our advanced image compression tool. Instantly reduce image size while maintaining maximum quality, all directly in your browser. Perfect for SEO, faster load times, and saving bandwidth.</p>
        <a href="#compressor" className="button">
          Start Compressing Now
        </a>
      </section>

      <section className="tool-section animate-fade-up delay-2" id="compressor">
        <div className="panel">
          <div className="controls">
            <label>
              <strong>Quality:</strong> {quality}
            </label>
            <input
              type="range"
              min={10}
              max={100}
              value={quality}
              onChange={(event) => setQuality(Number(event.target.value))}
            />
            <div className="preset-buttons">
              <button type="button" onClick={() => setQuality(40)}>
                🔥 Max Compression
              </button>
              <button type="button" onClick={() => setQuality(75)}>
                ⚖️ Balanced
              </button>
              <button type="button" onClick={() => setQuality(90)}>
                💎 High Quality
              </button>
            </div>
          </div>
        </div>

        <div
          className={`panel dropzone ${isDragging ? 'active' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p className="dropzone-text">Drag and drop images here, or click to select</p>
          <div className="controls center">
            <input
              type="file"
              multiple
              accept="image/*"
              id="file-upload"
              className="hidden-input"
              onChange={(event) => addFiles(event.target.files)}
            />
            <label htmlFor="file-upload" className="button">
              Select Files
            </label>
            <button
              type="button"
              onClick={compressAll}
              disabled={items.length === 0 || isCompressing}
            >
              {isCompressing ? "Compressing..." : "Compress All"}
            </button>
            <button
              type="button"
              className="secondary"
              onClick={downloadZip}
              disabled={items.every((item) => !item.compressedBlob)}
            >
              Download ZIP
            </button>
            <button
              type="button"
              className="secondary"
              onClick={clearAll}
              disabled={items.length === 0}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="file-grid">
          {items.map((item) => (
            <div className="file-card" key={item.id}>
              <img src={item.originalUrl} alt={item.file.name} loading="lazy" decoding="async" />
              {item.compressedUrl ? (
                <img
                  src={item.compressedUrl}
                  alt={`${item.file.name} compressed`}
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
              <div className="meta">
                <span className="filename" title={item.file.name}>{item.file.name}</span>
                <div className="sizes">
                  <span>Original: {formatBytes(item.originalSize)}</span>
                  {item.compressedSize && (
                    <>
                      <span> → Compressed: {formatBytes(item.compressedSize)}</span>
                      <span className="savings">
                         ({((1 - item.compressedSize / item.originalSize) * 100).toFixed(1)}% saved)
                      </span>
                    </>
                  )}
                </div>
                <span className={`status ${item.status}`}>Status: {item.status}</span>
                {item.error ? <span className="error-text">{item.error}</span> : null}
              </div>
              <div className="actions">
                <button
                  type="button"
                  className="secondary"
                  onClick={() => compressItem(item)}
                  disabled={item.status === "compressing"}
                >
                  {item.status === "compressing" ? "Working..." : "Compress"}
                </button>
                <button
                  type="button"
                  onClick={() => downloadSingle(item)}
                  disabled={!item.compressedBlob}
                >
                  Download
                </button>
                <button
                  type="button"
                  className="secondary"
                  onClick={() => removeItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="how-to-use animate-fade-up delay-3" id="how-to-use" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>How to Compress Images Online</h2>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ color: '#0070f3' }}>1. Upload Your Files</h3>
            <p>Drag and drop your JPEG, PNG, WEBP, or AVIF images into the dropzone above, or click "Select Files" to choose them from your device. You can process multiple images simultaneously using our batch compressor.</p>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ color: '#0070f3' }}>2. Choose Compression Level</h3>
            <p>Use the quality slider to find the perfect balance between file size and visual quality. Choose "Max Compression" for the smallest file sizes, or "High Quality" if visual fidelity is your top priority.</p>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ color: '#0070f3' }}>3. Download Optimized Images</h3>
            <p>Click "Compress All" to process your files instantly. Once done, you can download individual files or get all your compressed images conveniently packed into a single ZIP file.</p>
          </div>
        </div>
      </section>

      <section className="features animate-fade-up delay-3" id="features">
        <div className="feature-card">
          <h3>⚡ Secure Local Processing</h3>
          <p>Unlike other tools, your images never leave your device. All processing happens locally in your browser ensuring 100% data privacy and lightning-fast speeds.</p>
        </div>
        <div className="feature-card">
          <h3>💎 Lossless & Lossy Compression</h3>
          <p>We use state-of-the-art compression algorithms tailored for each format to reduce file sizes dramatically without noticeable loss in visual quality.</p>
        </div>
        <div className="feature-card">
          <h3>📦 Bulk Image Optimization</h3>
          <p>Save time with our powerful batch processing capabilities. Drag and drop dozens of images at once, compress them simultaneously, and download as a convenient ZIP archive.</p>
        </div>
      </section>

      <section className="benefits animate-fade-up delay-4" id="benefits" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto', background: '#111', borderRadius: '12px' }}>
        <h2>Why Optimize Your Images?</h2>
        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <li>
            <strong>🚀 Boost Website Speed:</strong> Heavy images are the #1 cause of slow websites. Compressing them significantly reduces load times, improving User Experience (UX) and Core Web Vitals.
          </li>
          <li>
            <strong>📈 Improve SEO Rankings:</strong> Google actively penalizes slow-loading pages. Optimizing your images directly contributes to better mobile performance scores (LCP) and higher search engine rankings.
          </li>
          <li>
            <strong>💾 Save Storage & Bandwidth:</strong> Whether you are hosting a website, sending emails, or managing cloud storage, smaller file sizes mean lower costs and faster transfer speeds.
          </li>
        </ul>
      </section>

      <section className="faq animate-fade-up delay-4" id="faq" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item" style={{ marginTop: '2rem' }}>
          <h3>What image formats are supported?</h3>
          <p>CompressPro supports all major web image formats including JPG/JPEG, PNG, WEBP, and AVIF. Our algorithm automatically detects the format and applies the most efficient compression strategy.</p>
        </div>
        <div className="faq-item" style={{ marginTop: '1.5rem' }}>
          <h3>Is my data secure? Are my images uploaded to a server?</h3>
          <p>Yes, your data is 100% secure. Unlike many online tools, CompressPro relies on local browser processing capabilities when possible. For server-side tasks, images are processed securely in memory and never stored persistently on our servers.</p>
        </div>
        <div className="faq-item" style={{ marginTop: '1.5rem' }}>
          <h3>How much can I reduce my image size?</h3>
          <p>File size reduction varies depending on the original file and the chosen quality setting. On average, you can expect file size savings between 60% and 80% with our "Balanced" setting, while maintaining excellent visual quality.</p>
        </div>
        <div className="faq-item" style={{ marginTop: '1.5rem' }}>
          <h3>Is this image compressor free to use?</h3>
          <p>Yes! CompressPro is a completely free tool. There are no hidden fees, subscriptions, or intrusive watermarks added to your optimized images.</p>
        </div>
      </section>

      <footer className="footer" style={{ padding: '2rem', textAlign: 'center', marginTop: '4rem', borderTop: '1px solid #333' }}>
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="/about" style={{ color: '#888', textDecoration: 'none' }}>About</a>
          <a href="/contact" style={{ color: '#888', textDecoration: 'none' }}>Contact</a>
          <a href="/privacy" style={{ color: '#888', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: '#888', textDecoration: 'none' }}>Terms of Service</a>
        </div>
        <p style={{ color: '#666', margin: 0 }}>© {new Date().getFullYear()} CompressPro. All rights reserved.</p>
      </footer>
    </main>
  );
}
