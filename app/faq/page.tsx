import Script from 'next/script';

export const metadata = {
  title: 'FAQ | CompressPro',
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="container mx-auto max-w-4xl p-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">Is CompressPro really safe to use?</h2>
          <p>
            Yes, absolutely. We built CompressPro with a privacy-first approach. All image compression happens locally
            in your browser. This means your images are never uploaded to our servers, ensuring total privacy and security
            for your sensitive files.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">Is there a file size limit?</h2>
          <p>
            Because the processing happens on your device, the file size limit is dictated by your device's available
            RAM (memory) rather than an arbitrary server limit. Most modern computers and smartphones can easily handle
            images up to 20MB-30MB, but very large images might cause the browser to slow down.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">Will compressing reduce image quality?</h2>
          <p>
            CompressPro uses advanced algorithms designed for "lossy" but visually indistinguishable compression.
            By default, we find the perfect balance between file size reduction and image clarity. While technically data is removed,
            the human eye usually cannot tell the difference.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">Do I need to install any software?</h2>
          <p>
            No. CompressPro is a modern web application. As long as you have a modern web browser (like Chrome, Safari, Firefox, or Edge),
            you can compress images directly on our website without installing any third-party software or plugins.
          </p>
        </section>
      </div>

      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Is CompressPro safe to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, CompressPro is completely safe. All image processing happens locally in your browser. Your files are never uploaded to our servers."
              }
            }, {
              "@type": "Question",
              "name": "Is there a file size limit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We handle images of various sizes, but processing very large images may be constrained by your device's memory."
              }
            }]
          })
        }}
      />
    </div>
  );
}