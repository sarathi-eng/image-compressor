"use client";

import JSZip from "jszip";
import { useEffect, useReducer, useRef, useState } from "react";

type Status = "idle" | "compressing" | "done" | "error";

type FileItem = {
  id: string;
  file: File;
  originalUrl: string;
  compressedUrl?: string;
  compressedBlob?: Blob;
  status: Status;
  error?: string;
};

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
      originalUrl: URL.createObjectURL(file),
      status: "idle"
    }));
    dispatch({ type: "add", items: newItems });
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
      patch: { compressedBlob: blob, compressedUrl, status: "done" }
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
      <h1>Image Compressor</h1>
      <p>Upload images, tune quality, and download compressed versions.</p>

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

      <div className="panel">
        <div className="controls">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(event) => addFiles(event.target.files)}
          />
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
            <img src={item.originalUrl} alt={item.file.name} />
            {item.compressedUrl ? (
              <img
                src={item.compressedUrl}
                alt={`${item.file.name} compressed`}
              />
            ) : null}
            <div className="meta">
              <span>{item.file.name}</span>
              <span>Status: {item.status}</span>
              {item.error ? <span>{item.error}</span> : null}
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
    </main>
  );
}
