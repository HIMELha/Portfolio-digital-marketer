'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Handle active section highlighting
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/" className="flex items-center">
              <span className={`bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-extrabold`}>Md Rana</span>
              <span className={`${scrolled ? 'text-gray-800' : 'text-white'} ml-1`}>Islam</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                item === "Contact" ? (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`}>
                      <button className={`px-6 py-3 rounded-full ${
                        scrolled 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                      } transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-transparent hover:border-blue-300 font-medium`}>
                        {item}
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li key={item} className="relative">
                    <Link 
                      href={`#${item.toLowerCase()}`}
                      className={`${scrolled ? 'text-gray-800' : 'text-white'} px-3 py-2 font-medium hover:text-blue-500 transition-colors ${
                        activeSection === item.toLowerCase() ? 'font-semibold border-b' : ''
                      }`}
                    >
                      {item}
                    </Link>
                    
                  </li>
                )
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-white'} focus:outline-none p-2 rounded-full ${
                isMenuOpen ? 'bg-gray-200' : ''
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className={`absolute right-0 top-0 h-screen w-64 bg-white shadow-2xl p-6 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl text-blue-600">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className={`block py-3 px-4 rounded-lg ${
                      activeSection === item.toLowerCase()
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-800 hover:bg-gray-50'
                    } transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}