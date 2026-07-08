## 2024-05-24 - DoS Prevention and Error Masking for Image Processing
**Vulnerability:** Memory exhaustion (DoS risk) from unrestricted file size buffering, and information disclosure through exposing internal error stack traces in `app/api/compress/route.ts`.
**Learning:** Endpoints that read uploaded files into memory (e.g. `Buffer.from(await file.arrayBuffer())`) without size limits can be exploited by sending massive files to crash the server. Additionally, exposing `error.message` on failures can leak internal implementation details to the client.
**Prevention:** Always validate `file.size` before buffering files in memory (e.g., restrict to 10MB limit), and implement generic error messages for client-facing API responses while logging actual details internally.
