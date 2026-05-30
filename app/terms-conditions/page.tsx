export const metadata = {
  title: 'Terms & Conditions | CompressPro',
  alternates: {
    canonical: '/terms-conditions',
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto max-w-4xl p-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">1. Acceptance of Terms</h2>
        <p>
          By accessing and using CompressPro, you accept and agree to be bound by the terms and provision of this agreement.
          If you do not agree to abide by these terms, please do not use this service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">2. Service Description</h2>
        <p>
          CompressPro provides a free web-based utility for compressing and optimizing image files locally within the user's web browser.
          We reserve the right to modify, suspend, or discontinue the service at any time without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">3. User Responsibilities</h2>
        <p>
          You are responsible for the files you process using CompressPro. While we process files locally and do not upload them to our servers,
          you agree not to use the tool for processing illegal content or violating the intellectual property rights of others.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">4. Disclaimer of Warranties</h2>
        <p>
          The service is provided on an "as is" and "as available" basis. CompressPro makes no warranties, expressed or implied,
          and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions
          of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </div>
    </div>
  );
}