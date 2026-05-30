## 2024-05-18 - Synchronous Image Decoding Bottleneck
**Learning:** When rendering many high-resolution `blob:` URLs via standard `<img>` tags, synchronous image decoding can block the main thread, leading to UI freezes and a poor user experience during bulk local uploads.
**Action:** Always use `loading="lazy"` and `decoding="async"` attributes on `<img>` tags handling local bulk uploads or rendering numerous high-resolution images to ensure decoding happens off the main thread.
