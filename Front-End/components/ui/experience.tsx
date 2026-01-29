"use client";

import React from "react";

// --- Experience Data ---
const experiences = [
  {
    company: "MATS University",
    role: "Software Developer Project Lead",
    date: "Aug 2025 - Present",
    location: "Raipur, India",
    description: "Leading technology decisions and system architecture for the university's Educational ERP, transitioning from outsourced solutions to internal development.",
    highlights: [
      "Defined technology stack and system architecture for Educational ERP",
      "Led migration of main website from PHP to React.js + Express.js",
      "Designed and launched matsodl.com - Distance Education portal"
    ],
  },
  {
    company: "Gharkasathi Innoventures",
    role: "Software Development Project Manager",
    date: "Sep 2024 - July 2025",
    location: "Raipur, India",
    description: "Oversaw the full lifecycle of software development projects, managing cross-functional teams and ensuring timely delivery of client solutions.",
    highlights: [
      "Led technical teams in site/app development",
      "Integrated APIs and payment gateways",
      "Managed project milestones and client deliverables"
    ],
  },
  {
    company: "Groweven",
    role: "Web Developer Intern",
    date: "July 2023 - Oct 2023",
    location: "Remote",
    description: "Collaborated with senior developers to build and maintain responsive websites, focusing on performance optimization and SEO.",
    highlights: [
      "Built and maintained responsive websites with a team",
      "Optimized site performance for SEO and accessibility",
      "Implemented new features in client dashboards"
    ],
  },
  {
    company: "The Jurni",
    role: "Campus Ambassador",
    date: "Dec 2020 - Jan 2021",
    location: "Remote",
    description: "Promoted the platform through strategic campus events and digital campaigns, gathering critical user feedback for product improvement.",
    highlights: [
      "Organized student meetups and awareness sessions",
      "Helped promote The Jurni platform on campus",
      "Gathered feedback to improve student onboarding"
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-black min-h-screen py-20 px-4 md:px-8 relative overflow-hidden" id="experience">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16 relative z-10">
        <h3 className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-2">
          Career Path
        </h3>
        <h2 className="text-5xl font-bold text-white mb-6">
          Work <br /> <span className="text-neutral-500">Experience</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto relative">
        
        {/* Vertical Center Line (Hidden on mobile, visible on lg) */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-neutral-800" />
        
        {/* Mobile Left Line */}
        <div className="lg:hidden absolute left-8 w-px h-full bg-neutral-800" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* --- Timeline Dot/Icon --- */}
                <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-orange-500/50 bg-black flex items-center justify-center z-10 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-orange-500"
                  >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>

                {/* --- Spacer (for layout balance) --- */}
                <div className="hidden lg:block w-1/2" />

                {/* --- Card Content --- */}
                <div className="w-full lg:w-1/2 pl-20 lg:pl-0 lg:px-12">
                  <div className="bg-[#0A0A0A] border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-colors duration-300">
                    
                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-2 bg-orange-950/30 border border-orange-900/50 rounded-full px-4 py-1.5 mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span className="text-sm font-semibold text-orange-500">
                        {exp.date}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-orange-500 font-medium mb-1">
                      {exp.company}
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-center gap-2 text-neutral-500 text-sm mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {exp.location}
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                          <span className="mt-1.5 min-w-[6px] min-h-[6px] rounded-full bg-orange-500" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}