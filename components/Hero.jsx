import Link from 'next/link';
import Navbar from './Navbar';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-full bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden ">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <Navbar />
      
      <div className="container mx-auto px-4 h-full flex items-center pt-20 md:pt-32 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-2">
              Social Media Marketing Expert
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your Brand With <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Strategic</span> Social Media
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Transforming businesses through data-driven Facebook marketing campaigns that deliver measurable results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#portfolio" className="px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                View My Work
              </Link>

              <Link 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 border border-blue-400/30 flex items-center"
              >
                <span>Hire Me</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="pt-12">
              <p className="text-sm uppercase tracking-wider mb-4 text-blue-200">Connect With Me</p>
              <div className="flex space-x-6">
                <a href="#" className="h-12 w-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-100" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="h-12 w-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-100" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="h-12 w-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-100" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-sm shadow-2xl h-[60%]">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="relative w-full h-[full]">
                      {/* Replace with your actual image */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        Professional Headshot
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm mb-2 text-blue-200">Discover More</p>
        <div className="w-8 h-12 border-2 border-blue-200 rounded-full mx-auto flex justify-center">
          <span className="animate-scroll-down w-1 h-3 bg-blue-200 rounded-full mt-2"></span>
        </div>
      </div>
    </section>
  );
}