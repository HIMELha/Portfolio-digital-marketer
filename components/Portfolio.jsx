'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isInView, setIsInView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('portfolio');
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        setIsInView(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Product Campaign",
      description: "Boosted online sales by 67% for a fashion retailer through targeted product ads",
      category: "facebook-ads",
      image: "/marketing.jpg",
      stats: [
        { label: "Sales Increase", value: "67%" },
        { label: "ROAS", value: "4.2x" },
      ],
      fullDescription: "This e-commerce campaign focused on showcasing the client's premium fashion products to a targeted audience. By creating compelling product ads with lifestyle imagery and strategic targeting, we achieved a 67% increase in online sales and a 4.2x return on ad spend within 30 days."
    },
    {
      id: 2,
      title: "E-commerce Catalog Optimization",
      description: "Restructured product catalog and ads resulting in 43% higher conversion rate",
      category: "content",
      image: "/marketing4.jpg",
      stats: [
        { label: "Conversion Rate", value: "+43%" },
        { label: "CTR", value: "5.8%" },
      ],
      fullDescription: "We completely restructured this e-commerce client's product catalog and optimized their product feed for better ad performance. The improved catalog structure and enhanced product descriptions resulted in a 43% higher conversion rate and significantly improved click-through rates across all product categories."
    },
    {
      id: 3,
      title: "Ads TQ Details Report",
      description: "Result of ads with campaign optimization",
      category: "campaigns",
      image: "/marketing7.jpg",
      stats: [
        { label: "Cost Reduction", value: "32%" },
        { label: "Revenue", value: "$218K" },
      ],
      fullDescription: "This project involved integrating Facebook Ads with the client's store through a third-party platform to enable automated campaign optimization. The integration allowed for real-time product inventory updates and dynamic pricing adjustments, resulting in a 32% reduction in advertising costs while generating $2,000 in revenue."
    },
    {
      id: 4,
      title: "Marketing Analytics Dashboard",
      description: "Developed comprehensive marketing analytics solution with actionable insights",
      category: "facebook-ads",
      image: "/marketing5.jpg",
      stats: [
        { label: "Data Points", value: "12K+" },
        { label: "ROI Improvement", value: "28%" },
      ],
      fullDescription: "We developed a comprehensive marketing analytics dashboard that consolidated data from multiple channels to provide actionable insights. This solution helped the client identify underperforming campaigns and optimization opportunities, resulting in a 28% improvement in overall marketing ROI and more efficient budget allocation."
    },
    {
      id: 5,
      title: "Facebook Ads campaign results",
      description: "Targeted campaign for new product launch with exceptional engagement metrics",
      category: "content",
      image: "/marketing1.jpg",
      stats: [
        { label: "Engagement", value: "8.7%" },
        { label: "Sales Goal", value: "142%" },
      ],
      fullDescription: "This individual product launch campaign was designed to create maximum impact for a single flagship product. Through carefully crafted messaging and targeted audience segments, we achieved an exceptional 8.7% engagement rate and exceeded the client's sales goal by 42% within the first week of launch."
    },
    {
      id: 6,
      title: "Single Product Ad Performance",
      description: "Optimized single-product ad campaign with detailed performance analysis",
      category: "campaigns",
      image: "/marketing6.jpg",
      stats: [
        { label: "Conversion Rate", value: "6.3%" },
        { label: "CPA Reduction", value: "41%" },
      ],
      fullDescription: "This campaign focused exclusively on optimizing ad performance for a single high-value product. Through extensive A/B testing of ad creative, copy variations, and audience targeting, we achieved a 6.3% conversion rate (3x industry average) and reduced the cost per acquisition by 41%, making this the client's most profitable individual product campaign."
    },
  ];
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Delivering exceptional results through strategic social media marketing
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 z-10 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md max-w-fit mx-auto px-2">
          {['all', 'facebook-ads', 'content', 'campaigns'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter === 'all' ? 'All Work' : filter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isInView ? 'stagger-animate' : ''}`}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="p-6 text-white w-full transform transition-transform duration-500">
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                        {project.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                      <div className="flex space-x-2">
                        {project.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <div className="text-lg font-bold">{stat.value}</div>
                            <div className="text-xs opacity-80">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm">
                      View Case Study
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-gray-500">
                    {project.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center text-sm">
                    Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 inline-flex items-center">
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full object-contain max-h-[500px] transition-transform duration-300 hover:scale-110 cursor-pointer"
                  onClick={() => setFullScreenImage(selectedProject.image)}
                />
              </div>
              <button 
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                  {selectedProject.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedProject.title}</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedProject.stats.map((stat, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-4">Project Overview</h3>
              <p className="text-gray-700 mb-6">{selectedProject.fullDescription}</p>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold mb-4">Key Strategies</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Targeted audience segmentation based on demographics and interests</li>
                  <li>Custom creative assets optimized for maximum engagement</li>
                  <li>Continuous A/B testing to refine messaging and visuals</li>
                  <li>Strategic budget allocation across different ad formats</li>
                </ul>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div 
          className="fixed inset-0 bg-black z-[60] flex items-center justify-center p-4 cursor-zoom-out" 
          onClick={() => setFullScreenImage(null)}
        >
          <button 
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors z-10"
            onClick={() => setFullScreenImage(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={fullScreenImage} 
            alt="Full screen view" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}