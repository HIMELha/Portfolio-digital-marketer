import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>

        <div className="space-y-6 text-gray-700">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-xl font-semibold mb-3">What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit
              websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
            <p>
              We use cookies to improve your browsing experience and analyze
              website traffic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Types of Cookies</h2>
            <p>
              We use essential cookies for website functionality and analytics
              cookies to understand visitor behavior.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Managing Cookies</h2>
            <p>You can control cookies through your browser settings.</p>
          </section>
        </div>

        <div className="mt-8">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
