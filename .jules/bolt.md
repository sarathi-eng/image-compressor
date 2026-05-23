## 2024-05-24 - Async Decoding for Local Blob URLs
**Learning:** Rendering many high-resolution `blob:` URLs synchronously blocks the main thread, especially on bulk uploads. The browser struggles to decode and render them all at once.
**Action:** Always add `loading="lazy"` and `decoding="async"` to `<img>` tags dealing with potentially large or numerous local file blobs to prevent UI freezes and make the experience much smoother.
