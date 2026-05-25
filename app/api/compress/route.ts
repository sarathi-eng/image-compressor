import sharp from "sharp";

export const runtime = "nodejs";

const clampQuality = (value: number) => {
  if (Number.isNaN(value)) return 80;
  return Math.min(100, Math.max(1, value));
};

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file");
  const qualityValue = formData.get("quality");

  if (!file || !(file instanceof File)) {
    return new Response("Missing file", { status: 400 });
  }

  // Security: Prevent DoS by limiting file size to 10MB before buffering into memory
  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  if (file.size > MAX_FILE_SIZE) {
    return new Response("File too large. Maximum size is 10MB.", { status: 413 });
  }

  const quality =
    typeof qualityValue === "string"
      ? clampQuality(Number.parseInt(qualityValue, 10))
      : 80;

  const inputBuffer = Buffer.from(await file.arrayBuffer());
  const image = sharp(inputBuffer);

  let contentType = file.type || "image/jpeg";
  let outputBuffer: Buffer;

  try {
    if (contentType === "image/png") {
      outputBuffer = await image.png({ quality }).toBuffer();
    } else if (contentType === "image/webp") {
      outputBuffer = await image.webp({ quality }).toBuffer();
    } else if (contentType === "image/avif") {
      outputBuffer = await image.avif({ quality }).toBuffer();
    } else {
      outputBuffer = await image.jpeg({ quality, mozjpeg: true }).toBuffer();
      contentType = "image/jpeg";
    }

    return new Response(new Uint8Array(outputBuffer), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    console.error("Compression error:", error);
    // Security: Return generic error message to avoid leaking internal implementation details
    return new Response(
      "Image processing failed",
      { status: 400 }
    );
  }
}
