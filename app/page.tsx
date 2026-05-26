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
      <header className="header animate-fade-up">
        <h2 style={{ margin: 0 }}>CompressPro</h2>
        <nav className="nav-links">
          <a href="#features" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Features</a>
          <a href="#compressor" style={{ color: '#e6e6e6', textDecoration: 'none' }}>Tool</a>
        </nav>
      </header>

      <section className="hero animate-fade-up delay-1">
        <h1>Compress Images in Seconds</h1>
        <p>Optimize your workflow. Upload images, instantly reduce their size while maintaining quality, and download fast.</p>
        <a href="#compressor" className="button">
          Get Started
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
              title={items.length === 0 ? "No items to compress" : isCompressing ? "Compression in progress" : undefined}
            >
              {isCompressing ? "Compressing..." : "Compress All"}
            </button>
            <button
              type="button"
              className="secondary"
              onClick={downloadZip}
              disabled={items.every((item) => !item.compressedBlob)}
              title={items.every((item) => !item.compressedBlob) ? "No compressed items to download" : undefined}
            >
              Download ZIP
            </button>
            <button
              type="button"
              className="secondary"
              onClick={clearAll}
              disabled={items.length === 0}
              title={items.length === 0 ? "No items to clear" : undefined}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="file-grid">
          {items.map((item) => (
            <div className="file-card" key={item.id}>
              <img src={item.originalUrl} alt={item.file.name} />
              {item.compressedUrl ? (
                <img
                  src={item.compressedUrl}
                  alt={`${item.file.name} compressed`}
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
                  title={item.status === "compressing" ? "Compression in progress" : undefined}
                >
                  {item.status === "compressing" ? "Working..." : "Compress"}
                </button>
                <button
                  type="button"
                  onClick={() => downloadSingle(item)}
                  disabled={!item.compressedBlob}
                  title={!item.compressedBlob ? "Item not yet compressed" : undefined}
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

      <section className="features animate-fade-up delay-3" id="features">
        <div className="feature-card">
          <h3>⚡ Fast & Local</h3>
          <p>Processing is fast and efficient. No bloated uploads required, your privacy is guaranteed.</p>
        </div>
        <div className="feature-card">
          <h3>💎 High Quality</h3>
          <p>We use advanced compression algorithms to ensure your images stay looking perfect.</p>
        </div>
        <div className="feature-card">
          <h3>📦 Batch Support</h3>
          <p>Drag and drop multiple images at once. Compress them all in one click and download as a ZIP.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} CompressPro. All rights reserved.</p>
      </footer>
    </main>
  );
}
