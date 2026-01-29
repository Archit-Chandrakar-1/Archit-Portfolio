"use client";

import { useState, useEffect } from "react";
import Navbar from '@/components/ui/navbar';


interface Project {
  title: string;
  description: string;
  longDescription?: string; // Added for modal details
  tags: string[];
  link: string;
  repoLink?: string; // Optional Github link
}

// Data matching the target design
const projects: Project[] = [
  {
    title: "MATS University Website Migration",
    description: "Led the migration of matsuniversity.ac.in from PHP to a modern React.js + Express.js stack.",
    longDescription: "A complete overhaul of the legacy PHP architecture. The new system utilizes React.js for a dynamic frontend and Express.js for the backend API. Key achievements include a 40% reduction in load times, implementation of a custom CMS for faculty, and a mobile-responsive design that increased student engagement by 25%.",
    tags: ["React.js", "Express.js", "Migration", "Tailwind"],
    link: "https://matsuniversity.ac.in",
  },
  {
    title: "MATS ODL Portal",
    description: "Designed, developed, and launched matsodl.com - the official Distance Education portal.",
    longDescription: "This portal serves as the backbone for the Open and Distance Learning department. Features include seamless student enrollment forms, automated fee receipt generation, a digital library for study materials, and an admin dashboard for tracking admission stats in real-time.",
    tags: ["React.js", "Full-Stack", "Education Tech", "Node.js"],
    link: "https://matsodl.com",
  },
  {
    title: "Business Management System (BMS)",
    description: "Internal operations platform integrating CRM, HRM, and Admin modules for business workflows.",
    longDescription: "Developed for Gharkasathi Innoventures, this BMS unifies disjointed processes. It handles employee attendance (HRM), client lead pipelines (CRM), and financial reporting. The system uses role-based authentication to ensure data security across departments.",
    tags: ["CRM", "HRM", "React.js", "Redux"],
    link: "#",
  },
  {
    title: "E-Commerce Analytics Dashboard",
    description: "Applied RFM analysis, customer segmentation, and revenue trend insights with data visualization.",
    longDescription: "A Python-based data science project that ingests raw e-commerce transaction logs. It performs Recency, Frequency, and Monetary (RFM) analysis to segment customers. Visualized using Chart.js and D3.js to help stakeholders identify high-value retention targets.",
    tags: ["Python", "Data Science", "Analytics", "Visualization"],
    link: "#",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
      <Navbar />
      
      <div className="pt-32 px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Projects that made <br />
            <span className="text-neutral-600">an impact</span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0A0A0A] border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-300 overflow-hidden"
            >
              {/* --- Standard Card Content --- */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 group-hover:border-red-900/50 group-hover:bg-red-900/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                  </svg>
                </div>
                <span className="text-6xl font-bold text-neutral-800 select-none opacity-50 font-mono">
                  0{index + 1}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-100 mb-3">{project.title}</h2>
              <p className="text-gray-400 mb-12 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#151515] border border-neutral-800 rounded-full text-xs font-medium text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>

              {/* --- SLIDE UP ACTION BAR (Hover Effect) --- */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-neutral-900 to-transparent flex items-end justify-center pb-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                 <button 
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-neutral-200 transition active:scale-95 flex items-center gap-2 shadow-lg shadow-white/10"
                 >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL WINDOW --- */}
      {selectedProject && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)} // Close on background click
        >
            <div 
                className="bg-[#0f0f0f] border border-neutral-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
            >
                {/* Modal Header */}
                <div className="p-8 border-b border-neutral-800 flex justify-between items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono text-red-400 bg-red-950/30 px-2 py-1 rounded">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-neutral-800 rounded-full transition text-gray-400 hover:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                    <h3 className="text-lg font-semibold text-gray-200 mb-3">Project Overview</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        {selectedProject.longDescription || selectedProject.description}
                    </p>

                    <h3 className="text-lg font-semibold text-gray-200 mb-3">Key Features</h3>
                    <ul className="list-disc list-inside text-gray-400 mb-8 space-y-1">
                        <li>Modern Tech Stack Implementation</li>
                        <li>Responsive User Interface</li>
                        <li>Optimized Performance & SEO</li>
                    </ul>

                    
                    <div className="flex gap-4">
                        <a 
                            href={selectedProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 bg-white text-black text-center py-3 rounded-xl font-bold hover:bg-neutral-200 transition"
                        >
                            View Project
                        </a>
                       
                    </div>
                </div>
            </div>
        </div>
      )}
    </main>
  );
}