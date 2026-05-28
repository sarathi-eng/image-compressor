import sharp from "sharp";

export const runtime = "nodejs";

const clampQuality = (value: number) => {
  if (Number.isNaN(value)) return 80;
  return Math.min(100, Math.max(1, value));
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file");
  const qualityValue = formData.get("quality");

  if (!file || !(file instanceof File)) {
    return new Response("Missing file", { status: 400 });
  }

  // Prevent DoS by enforcing file size limit before buffering
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
    // Log the error internally but do not leak details to the client
    console.error("Compression error:", error);
    return new Response("Compression failed", { status: 400 });
  }
}
