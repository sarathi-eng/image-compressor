## 2024-06-25 - Prevent main thread blocking with large local images
**Learning:** When handling bulk local image uploads or rendering many high-resolution `blob:` URLs via standard `<img>` tags, the browser's synchronous image decoding can block the main thread, causing significant UI stuttering and unresponsiveness.
**Action:** Always use `loading="lazy"` and `decoding="async"` on `<img>` tags displaying these local `blob:` URLs to ensure decoding happens off the main thread.
