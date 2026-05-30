import Script from 'next/script';

export const metadata = {
  title: 'FAQ | CompressPro',
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">FAQ</h1>
      <p>Frequently Asked Questions.</p>

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