## 2024-05-24 - Async image decoding for Object URLs
**Learning:** Rendering many high-resolution `blob:` URLs via standard `<img>` tags can cause synchronous decoding to block the main thread, resulting in UI jank especially during bulk operations (like uploading multiple large images).
**Action:** Always add `loading="lazy"` and `decoding="async"` attributes to `<img>` tags handling local object URLs to offload decoding work and prevent freezing the main thread.
