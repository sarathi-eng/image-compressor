## 2024-05-18 - [CRITICAL] DoS and Information Leakage in Image Compression API

**Vulnerability:**
1. The API route for image compression (`app/api/compress/route.ts`) read the entire uploaded file into memory using `file.arrayBuffer()` without checking the file size first, creating a Denial of Service (DoS) vulnerability via Out-Of-Memory (OOM) crashes.
2. The error handling block returned the original error message from the `sharp` library to the client, potentially leaking internal implementation details.

**Learning:**
1. When handling file uploads or processing files in Next.js API routes, it's crucial to enforce strict file size limits *before* buffering the data into memory (e.g., via `arrayBuffer()`) to prevent resource exhaustion attacks.
2. Error messages from internal libraries (like `sharp`) can contain sensitive information about the server environment or processing logic. These details should never be exposed directly to the client.

**Prevention:**
1. Always validate file sizes (`file.size`) against a reasonable limit (e.g., 10MB) and reject requests with a 413 Payload Too Large status before reading the file contents into memory.
2. Implement generic error messages (e.g., "Image processing failed") for external API responses while logging the detailed error internally for debugging purposes.
