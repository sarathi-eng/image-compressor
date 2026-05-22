import "./globals.css";

export const metadata = {
  title: "Image Compressor",
  description: "Compress images with sharp"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
