"use client";

import { useState } from 'react';

export default function HeroSection() {
  const [isDark, setIsDark] = useState(true);

  // Theme-based Tailwind classes
  const bgClass = isDark ? "bg-black" : "bg-white";
  const textClass = isDark ? "text-white" : "text-black";
  const subTextClass = isDark ? "text-gray-400" : "text-gray-700";
  const borderClass = isDark ? "border-gray-600" : "border-gray-300";
  const indicatorBg = isDark ? "bg-green-400" : "bg-green-600";

  return (
    <section className={`min-h-screen ${bgClass} ${textClass} relative overflow-hidden transition-colors duration-500`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className={`${textClass} text-sm font-bold`}>★</span>
                </div>
              </div>

              {/* Main Heading and paragraph */}
              <div className="space-y-4">
                {/* Applying text-stroke for an outlined effect.
                  This will require custom CSS in your global stylesheet or inline style.
                  For a quick demonstration, I'm using inline style and a fallback font.
                  The background color of the section should be considered when setting stroke color.
                */}
                <h1 className="text-6xl lg:text-8xl font-black tracking-wider leading-none"
                    style={{
                        WebkitTextStroke: isDark ? '2px white' : '2px black', // Outline color based on theme
                        WebkitTextFillColor: 'transparent', // Make the text fill transparent
                        // Fallback font that is heavy and blocky for the outline effect
                        fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', 
                    }}
                >
                  ARCHIT
                  <br />
                  CHANDRAKAR
                </h1>
                <p className={`text-lg ${subTextClass} max-w-md`}>
                  Hello, my name is Archit Chandrakar, nice to meet you I would like to welcome you with my personal portfolio.
                </p>
              </div>

              {/* Theme Toggle: Clickable scroll indicator */}
              <div className="flex items-center space-x-2 pt-8">
                <button
                  className={`w-6 h-10 border-2 ${borderClass} rounded-full flex justify-center items-start focus:outline-none transition-colors duration-500`}
                  onClick={() => setIsDark(v => !v)}
                  aria-label="Toggle theme"
                  title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
                >
                  <div className={`w-1 h-3 ${indicatorBg} rounded-full mt-2 animate-bounce`}></div>
                </button>
              </div>
            </div>

            {/* Right Content - Video */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source 
                    src="https://res.cloudinary.com/daozx86oq/video/upload/v1753615743/Archit-portfolio-video_whmd18.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="aspect-video rounded-2xl relative overflow-hidden bg-gray-900">
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source 
                      src="https://res.cloudinary.com/daozx86oq/video/upload/v1753615743/Archit-portfolio-video_whmd18.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                  {/* Decorative overlay elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full opacity-80"></div>
                  <div className="absolute bottom-6 left-6 w-6 h-6 border-2 border-green-400 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}