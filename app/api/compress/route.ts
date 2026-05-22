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

  // Security: Limit file size to 15MB to prevent memory exhaustion DoS
  const MAX_FILE_SIZE = 15 * 1024 * 1024;
  if (file.size > MAX_FILE_SIZE) {
    return new Response("File too large. Maximum size is 15MB", { status: 413 });
  }

  // Security: Validate file type before processing
  if (!file.type || !file.type.startsWith("image/")) {
    return new Response("Invalid file type. Only images are allowed.", { status: 400 });
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
    // Security: Log full error internally, but return generic error to user
    // to prevent leaking internal paths or stack traces
    console.error("Compression error:", error);
    return new Response("Compression failed or invalid image format", { status: 400 });
  }
}
