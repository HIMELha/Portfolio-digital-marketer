'use client';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      content: "Working with YourName transformed our social media presence. Our Facebook engagement increased by 200% and we saw a significant boost in conversions from social traffic.",
      name: "Jane Smith",
      position: "Marketing Director, Company Name",
      image: "/client-1.jpg"
    },
    {
      id: 2,
      content: "The Facebook ad campaigns YourName created for our business exceeded all expectations. We achieved a 4.5x return on ad spend and acquired hundreds of new customers.",
      name: "John Doe",
      position: "CEO, Brand Name",
      image: "/client-2.jpg"
    },
    {
      id: 3,
      content: "YourName's strategic approach to our social media marketing has been invaluable. Their expertise in Facebook marketing specifically has helped us reach new audiences we never thought possible.",
      name: "Sarah Johnson",
      position: "Founder, Company Name",
      image: "/client-3.jpg"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">What my clients say about my work</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 md:p-12 shadow-xl border border-white/20">
                      <div className="text-5xl text-yellow-400 mb-6">"</div>
                      <p className="text-xl md:text-2xl leading-relaxed mb-10">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 overflow-hidden border-2 border-white/30">
                          {/* Replace with actual image */}
                          <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">Image</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl">{testimonial.name}</h4>
                          <p className="text-blue-200">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-14 h-14 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-14 h-14 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-medium">5.0 Average Rating</span>
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to achieve similar results?</h3>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 btn-shine"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}