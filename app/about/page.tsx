export const metadata = {
  title: 'About Us | CompressPro',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl p-8 py-16">
      <h1 className="text-4xl font-bold mb-8">About CompressPro</h1>

      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p className="text-lg">
          CompressPro is a modern web application designed to solve a simple but frustrating problem:
          compressing images shouldn't compromise your privacy or require clunky software installations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">Our Mission</h2>
        <p>
          Our mission is to provide web developers, designers, and everyday users with a lightning-fast,
          privacy-respecting tool for image optimization. We believe that standard tasks like resizing and
          compressing images should be accessible, free, and secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">Why Local Processing?</h2>
        <p>
          When you upload an image to a traditional compression website, you are handing over your data to a
          third party. We take a different approach. By utilizing modern web technologies like WebAssembly,
          CompressPro brings the processing power to your browser. Your images stay on your device, ensuring
          100% security and privacy.
        </p>
      </div>
    </div>
  );
}