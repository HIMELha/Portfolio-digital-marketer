import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            My journey in transforming brands through social media
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-tl-[100px] rounded-br-[100px] transform -rotate-6"></div>
            <div className="relative rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl border-8 border-white">
              {/* Replace with your actual image */}
              <img src={"/about.png"} alt="RN Technology" className="w-full " />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-tl-3xl rounded-br-3xl shadow-xl">
              <p className="font-bold text-xl">10+ Years</p>
              <p className="text-blue-100">Experience</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Hello, I'm{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Md Rana Islam
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
                </span>
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">
                  Social Media Expert
                </span>
                <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium border border-indigo-100">
                  Facebook Ads Specialist
                </span>
                <span className="px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-sm font-medium border border-purple-100">
                  Digital Marketer
                </span>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a passionate social media marketing specialist with over a
              decade of experience in creating impactful Facebook marketing
              campaigns that drive engagement, increase brand awareness, and
              generate measurable ROI.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My approach combines creative content strategies with data-driven
              insights to help businesses connect with their target audience and
              achieve their marketing goals.
            </p>

            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">
                  Satisfied Clients
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  120+
                </div>
                <div className="text-gray-600 font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">5M+</div>
                <div className="text-gray-600 font-medium">Audience Reach</div>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}