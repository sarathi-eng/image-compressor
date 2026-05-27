## 2024-05-24 - Disabled State Context & Image Performance
**Learning:** Found that users can be confused by disabled buttons if there isn't a clear explanation why they are disabled, and that rendering many high-res local image blobs without async decoding can block the main thread.
**Action:** Always add descriptive `title` attributes or ARIA descriptions to disabled buttons to explain the required state. Always use `loading="lazy"` and `decoding="async"` on images, especially in a grid mapping over user uploads.
