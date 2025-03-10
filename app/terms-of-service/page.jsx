import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Information Collection
            </h2>
            <p>
              We collect only the information necessary to respond to your
              inquiries, such as name and email address when you contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Information Usage</h2>
            <p>
              Your information is used solely to communicate with you regarding
              your inquiries and to provide requested services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Information Protection
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p>
              For privacy concerns, please contact us at hello@yourname.com.
            </p>
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
