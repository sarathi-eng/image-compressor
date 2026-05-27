## 2024-05-20 - Prevent main thread blocking on bulk image rendering
**Learning:** When handling bulk local image uploads or rendering many high-resolution `blob:` URLs via standard `<img>` tags, synchronous decoding can block the main thread, causing UI jank.
**Action:** Always use `loading="lazy"` and `decoding="async"` on `<img>` tags rendering `blob:` URLs.
