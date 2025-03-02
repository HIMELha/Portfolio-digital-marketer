'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isInView, setIsInView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  
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
      title: "E-commerce Facebook Ad Campaign",
      description: "Increased sales by 45% through targeted Facebook ads",
      category: "facebook-ads",
      image: "/portfolio1.jpg",
      stats: [
        { label: "ROI", value: "320%" },
        { label: "Conversion Rate", value: "4.8%" }
      ]
    },
    {
      id: 2,
      title: "Content Strategy for SaaS Brand",
      description: "Developed a comprehensive content strategy that increased engagement by 78%",
      category: "content",
      image: "/portfolio2.jpg",
      stats: [
        { label: "Engagement", value: "+78%" },
        { label: "Followers", value: "+5.2K" }
      ]
    },
    {
      id: 3,
      title: "Holiday Marketing Campaign",
      description: "Seasonal campaign that generated 3x ROI for a retail client",
      category: "campaigns",
      image: "/portfolio3.jpg",
      stats: [
        { label: "ROI", value: "3x" },
        { label: "Revenue", value: "$125K" }
      ]
    },
    {
      id: 4,
      title: "Lead Generation Campaign",
      description: "Generated 500+ qualified leads for a B2B client",
      category: "facebook-ads",
      image: "/portfolio4.jpg",
      stats: [
        { label: "Leads", value: "500+" },
        { label: "Cost per Lead", value: "$12.40" }
      ]
    },
    {
      id: 5,
      title: "Social Media Rebrand",
      description: "Complete social media presence overhaul for a lifestyle brand",
      category: "content",
      image: "/portfolio5.jpg",
      stats: [
        { label: "Engagement", value: "+120%" },
        { label: "Brand Mentions", value: "+85%" }
      ]
    },
    {
      id: 6,
      title: "Product Launch Campaign",
      description: "Successful social media launch strategy for a new product",
      category: "campaigns",
      image: "/portfolio6.jpg",
      stats: [
        { label: "Pre-orders", value: "1,200+" },
        { label: "Reach", value: "250K+" }
      ]
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            MY WORK
          </span>
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
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  {/* Replace with actual image when available */}
                  <div className="text-white font-bold text-lg">Project {project.id}</div>
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
    </section>
  );
}