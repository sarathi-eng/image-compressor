## 2024-05-15 - [Image Rendering Performance]
**Learning:** Rendering many high-resolution `blob:` URLs via standard `<img>` tags can cause synchronous decoding to block the main thread.
**Action:** Always use `loading="lazy"` and `decoding="async"` attributes on `<img>` tags when handling bulk local image uploads or rendering large images.
