'use client';
import { useState } from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gray-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Ready to optimize your search arbitrage strategy? Contact me today!</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white">
            <h3 className="text-2xl font-bold mb-12 text-center">Contact Information</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <a href="mailto:ranaislam6082@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                  ranaislam6082@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Phone</h4>
                <a href="tel:+8801765960450" className="text-blue-100 hover:text-white transition-colors">
                  +880 1765-960450
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.127 18.826c-.282.401-.637.743-1.042 1.01-.998.658-2.218 1.038-3.49 1.141-.125.01-.251.021-.376.021-.763 0-1.528-.12-2.271-.355-1.459-.467-2.819-1.233-4.024-2.269-2.717-2.34-4.025-5.551-4.025-9.859 0-2.746.649-4.723 2.118-6.447.97-1.138 2.31-1.911 3.775-2.183.412-.077.839-.115 1.268-.115 1.565 0 3.084.47 4.348 1.337 1.693 1.159 2.775 2.944 3.033 5.022.255 2.023-.347 4.125-1.621 5.697z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">WhatsApp</h4>
                <a href="https://wa.me/8801765960450" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  Message me
                </a>
              </div>
            </div>
            
            <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <h4 className="text-lg font-semibold mb-4 text-center">Business Hours</h4>
              <ul className="space-y-2 text-blue-100 max-w-md mx-auto">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="https://wa.me/8801765960450?text=I'm%20interested%20in%20your%20search%20arbitrage%20services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
              >
                Schedule a Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}