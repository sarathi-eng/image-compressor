export const metadata = {
  title: 'Security | CompressPro',
  alternates: {
    canonical: '/security',
  },
};

export default function SecurityPage() {
  return (
    <div className="container mx-auto max-w-4xl p-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Security & Privacy First</h1>

      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Your Files Never Leave Your Browser</h2>
          <p className="mb-4">
            At CompressPro, we believe your data is yours. Unlike traditional cloud-based image compressors,
            our application processes every single image entirely within your web browser.
            <strong> Your files are never uploaded to our servers, and they are never stored in any database.</strong>
          </p>
          <p>
            This zero-upload architecture means there is absolutely zero risk of your sensitive, proprietary,
            or personal images being intercepted, leaked, or accessed by third parties during the compression process.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">How It Works</h2>
          <p className="mb-4">
            We leverage modern WebAssembly (Wasm) and native browser APIs to bring powerful image processing
            capabilities directly to your device. When you select a file:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>The file is loaded directly into your browser's local memory.</li>
            <li>The compression algorithm runs using your device's CPU.</li>
            <li>The optimized file is instantly available for download, generated locally.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Analytics & Tracking</h2>
          <p>
            While your images are completely private, we do use standard, anonymized Google Analytics to understand
            how visitors interact with our website (e.g., page views, bounce rates) so we can improve the user experience.
            This tracking does not capture any of your image data or personal identifying information.
          </p>
        </section>
      </div>
    </div>
  );
}