"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// --- Carousel Images Array (replace with your URLs) ---
const carouselImages = [
  
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200"
];

// --- Experiences Array (your existing experience objects) ---
const experiences = [
  {
    name: "The Jurni",
    logo: "https://res.cloudinary.com/daozx86oq/image/upload/v1755932717/WhatsApp_Image_2025-08-23_at_11.53.28_wa0hbz.jpg",
    role: "Campus Ambassador",
    date: "Dec 2020 - Jan 2021",
    url: "https://thejurni.io",
    description: [
      "Helped promote The Jurni platform on campus through events, campaigns, and online engagement.",
      "Organized student meetups and awareness sessions.",
      "Gathered feedback to improve student onboarding.",
    ],
  },
  {
    name: "Groweven",
    logo: "https://res.cloudinary.com/daozx86oq/image/upload/v1755322887/Screenshot_2025-08-16_at_11.03.07_AM_odikgb.png",
    role: "Web Developer Intern",
    date: "July 2023 - Oct 2023",
    url: "https://www.groweven.com",
    description: [
      "Built and maintained responsive websites with a team.",
      "Optimized site performance for SEO and accessibility.",
      "Helped implement new features in client dashboards.",
    ],
  },
  {
    name: "GKS  Pvt Ltd.",
    logo: "https://res.cloudinary.com/daozx86oq/image/upload/v1755933178/Screenshot_2025-08-23_at_12.41.42_PM_sdwcsz.png",
    role: "IT Project Manager/Developer",
    date: "Sep 2024 - July 2025",
    url: "https://www.gharkasathi.com",
    description: [
      "Led technical teams in site/app development.",
      "Oversaw project milestones and deliverables.",
      "Integrated APIs and payment gateways.",
    ],
  },
  {
    name: "MATS University",
    logo: "https://res.cloudinary.com/daozx86oq/image/upload/v1755933603/Screenshot_2025-08-23_at_12.48.18_PM_t68byq.png",
    role: "Tech Lead/Developer",
    date: "Aug 2025 - Present",
    url: "https://matsuniversity.ac.in/",
    description: [
      "Managing the development of education platforms.",
      "Leading a multi-disciplinary tech team.",
      "Developing automation tools for campus admin.",
    ],
  },
];

export default function ExperienceSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  // --- Automatically change background image every 5 seconds ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIdx(prev => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-all duration-700">
        <Image
          src={carouselImages[carouselIdx]}
          alt="Background carousel"
          fill
          style={{ objectFit: "cover", opacity: 0.5 }}
          sizes="100vw"
          priority
        />
      </div>

      {/* Section Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Header */}
        <div className="max-w-3xl w-full text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-green-900">Experience Highlights</h2>
          <p className="text-lg text-green-900">
            Professional journey, skills, roles, and achievements.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, idx) => (
            <div key={exp.name} className="relative flex items-center justify-center min-h-[260px]">
              <div
                className="relative z-10 rounded-2xl shadow-lg bg-white transition-colors duration-300 shadow-gray-200 flex flex-col p-6 w-full hover:bg-green-900 group"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={exp.logo}
                    alt={`${exp.name} logo`}
                    width={48}
                    height={48}
                    className="rounded-full border border-gray-100 shadow"
                    unoptimized
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black group-hover:text-white transition-colors duration-300">
                      {exp.name}
                    </h3>
                    <span className="text-md font-medium opacity-80 text-black group-hover:text-gray-50 transition-colors duration-300">
                      {exp.role}
                    </span>
                  </div>
                </div>
                <div className="mt-auto mb-4 text-sm font-bold opacity-60 text-black group-hover:text-gray-50 transition-colors duration-300">
                  {exp.date}
                </div>
                <button
                  className="bg-green-900 text-white rounded-full py-2 px-5 mt-auto font-semibold w-fit hover:bg-green-700 transition"
                  onClick={() => setActiveIdx(idx)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Window */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <div className="bg-white text-green-900 p-8 rounded-3xl shadow-2xl max-w-md w-full relative animate-fadein">
            <button
              className="absolute top-2 right-4 text-3xl text-gray-400 hover:text-gray-900"
              onClick={() => setActiveIdx(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex items-center mb-4">
              <Image
                src={experiences[activeIdx].logo}
                alt={`${experiences[activeIdx].name} logo`}
                width={40}
                height={40}
                className="rounded-full border border-gray-100 shadow"
                unoptimized
              />
              <div className="ml-3">
                <span className="font-bold text-xl">{experiences[activeIdx].name}</span>
                <div className="font-medium text-black">{experiences[activeIdx].role}</div>
                <div className="text-sm font-bold opacity-60 text-black">{experiences[activeIdx].date}</div>
                <a
                  href={experiences[activeIdx].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-green-700 underline font-bold"
                >
                  Visit Website
                </a>
              </div>
            </div>
            <h4 className="text-lg font-bold mb-2">Experience Details</h4>
            <ul className="list-disc pl-6 text-base space-y-2">
              {experiences[activeIdx].description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Styles for modal animation */}
      <style jsx>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadein {
          animation: fadein 0.3s ease;
        }
      `}</style>
    </section>
  );
}
