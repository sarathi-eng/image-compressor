export const metadata = {
  title: 'Cookie Policy | CompressPro',
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl p-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">What Are Cookies?</h2>
        <p>
          Cookies are small pieces of text sent to your web browser by a website you visit.
          A cookie file is stored in your web browser and allows the Service or a third-party to
          recognize you and make your next visit easier and the Service more useful to you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">How CompressPro Uses Cookies</h2>
        <p>
          CompressPro itself does not require cookies to perform image compression. Because our tool
          runs entirely in your local browser memory, we do not need to track sessions or store user accounts.
        </p>
        <p>
          However, we do use third-party services that may place cookies on your device:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Google Analytics:</strong> We use Google Analytics to monitor website traffic and usage patterns. This helps us understand which features are popular and how we can improve the site. These cookies track anonymous data such as how long you spend on the site and the pages you visit.</li>
          <li><strong>Google AdSense:</strong> We may use Google AdSense to serve ads. Google uses cookies to serve ads based on your prior visits to our website or other websites.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">Managing Cookies</h2>
        <p>
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
          Please note, however, that if you delete cookies or refuse to accept them, some third-party features (like analytics tracking) may not function as intended, though the core image compression tool will continue to work perfectly.
        </p>
      </div>
    </div>
  );
}