import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TermsOfService() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="h-screen max-w-7xl mx-auto px-4 py-16 !my-20 ">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

        <div className="space-y-6 text-gray-700">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-xl font-semibold mb-3">Website Usage</h2>
            <p>
              This website is provided for informational purposes. By accessing
              this website, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Intellectual Property
            </h2>
            <p>
              All content on this website is owned by RN Technology and
              protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Limitation of Liability
            </h2>
            <p>
              RN Technology is not liable for any damages arising from the use
              of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
            <p>These terms are governed by the laws of [Your Jurisdiction].</p>
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
